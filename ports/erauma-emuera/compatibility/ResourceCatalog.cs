using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Nodes;
using System.Globalization;
using System.Text.RegularExpressions;

namespace EraUma.Compatibility;

public sealed record ResourceCatalogReport(
    string Json,
    int MetadataImages,
    int AvailableImages,
    int MissingImages,
    int LocalImages,
    int RemoteImages,
    IReadOnlyList<string> Warnings,
    int MetadataAudio = 0,
    int AvailableAudio = 0,
    int LocalAudio = 0,
    int RemoteAudio = 0,
    int CsvFiles = 0);

/// <summary>Connects preserved resource metadata to files without changing the original game.</summary>
public static class ResourceCatalog
{
    const long MaximumImageBytes = 100L * 1024 * 1024;
    static readonly HashSet<string> ImageExtensions = new(StringComparer.OrdinalIgnoreCase)
        { ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg" };
    static readonly HashSet<string> AudioExtensions = new(StringComparer.OrdinalIgnoreCase)
        { ".mp3", ".wav", ".flac", ".wma" };

    /// <param name="resourceRoot">The installed resource directory, or its parent containing res/.</param>
    /// <param name="httpCacheDirectory">Optional cache for HTTP(S) paths already present in original metadata.</param>
    /// <param name="downloadHttp">Explicitly enables fetching missing original HTTP(S) paths.</param>
    public static ResourceCatalogReport Load(string sourceDirectory, string? resourceRoot = null,
        string? httpCacheDirectory = null, bool downloadHttp = false)
    {
        var source = Path.GetFullPath(sourceDirectory);
        var root = string.IsNullOrWhiteSpace(resourceRoot) ? null : Path.GetFullPath(resourceRoot);
        var cache = string.IsNullOrWhiteSpace(httpCacheDirectory) ? null : Path.GetFullPath(httpCacheDirectory);
        var tables = JsonNode.Parse(File.ReadAllText(Path.Combine(source, "build", "static.json")))?.AsObject()
            ?? throw new InvalidDataException("Original static resource tables are invalid.");
        var metadata = tables["res"]?.DeepClone() as JsonObject ?? new JsonObject();
        var resources = new JsonObject();
        var warnings = new List<string>();
        var csvPaths = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        var csvCount = AddCsvResources(metadata, source, root, csvPaths, warnings);
        var metadataCount = 0;
        var localCount = 0;
        var remoteCount = 0;
        var metadataAudio = 0;
        var localAudio = 0;
        var remoteAudio = 0;
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(30) };
        client.DefaultRequestHeaders.UserAgent.ParseAdd("EraUma-Emuera/0.2");

        foreach (var entry in metadata)
        {
            if (entry.Value is not JsonObject image) continue;
            var type = image["type"]?.GetValue<int>() ?? -1;
            if (type is not (0 or 1)) continue;
            if (type == 0) metadataCount++; else metadataAudio++;
            var path = image["path"]?.GetValue<string>();
            if (string.IsNullOrWhiteSpace(path)) continue;
            string? available = null;
            var remote = false;
            try
            {
                if (Uri.TryCreate(path, UriKind.Absolute, out var uri) &&
                    (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps))
                {
                    if (!string.IsNullOrEmpty(uri.UserInfo)) throw new InvalidDataException("Image URL contains credentials.");
                    if (cache is not null)
                    {
                        available = FindHttpResource(client, uri, cache, downloadHttp, type);
                        remote = available is not null;
                    }
                }
                else
                {
                    if (csvPaths.TryGetValue(entry.Key, out var csvPath)) available = ExistingResource(csvPath, type);
                    else
                    {
                        var relative = path.Replace('\\', '/');
                        if (!relative.StartsWith("res/", StringComparison.OrdinalIgnoreCase))
                            throw new InvalidDataException("Local resource path must be under res/.");
                        // A configured resource install takes precedence over files beside the source.
                        if (root is not null)
                            available = FindLocal(root, relative, type) ?? FindLocal(root, relative[4..], type);
                        available ??= FindLocal(source, relative, type);
                    }
                }
                if (available is null) continue;
                var connected = (JsonObject)image.DeepClone();
                connected["path"] = available;
                if (type == 0 && (connected["width"]?.GetValue<double>() ?? 0) == 0)
                {
                    var dimensions = ReadImageDimensions(available);
                    connected["width"] = dimensions.Width;
                    connected["height"] = dimensions.Height;
                }
                resources[entry.Key.ToLowerInvariant()] = connected;
                if (type == 0) { if (remote) remoteCount++; else localCount++; }
                else { if (remote) remoteAudio++; else localAudio++; }
            }
            catch (Exception error) when (error is IOException or UnauthorizedAccessException or
                ArgumentException or HttpRequestException or OperationCanceledException)
            {
                if (warnings.Count < 100) warnings.Add(entry.Key + ": " + error.Message);
            }
        }
        return new(resources.ToJsonString(), metadataCount, localCount + remoteCount,
            metadataCount - localCount - remoteCount, localCount, remoteCount, warnings,
            metadataAudio, localAudio + remoteAudio, localAudio, remoteAudio, csvCount);
    }

    static string? FindLocal(string root, string relative, int type)
    {
        var path = Path.GetFullPath(Path.Combine(root, relative.Replace('/', Path.DirectorySeparatorChar)));
        if (!Within(root, path)) throw new InvalidDataException("Resource path escapes its root.");
        return ExistingResource(path, type);
    }

    static string? ExistingResource(string path, int type)
    {
        if (!File.Exists(path)) return null;
        if (!(type == 0 ? ImageExtensions : AudioExtensions).Contains(Path.GetExtension(path)))
            throw new InvalidDataException("Unsupported resource extension.");
        var size = new FileInfo(path).Length;
        if (size <= 0 || size > MaximumImageBytes) throw new InvalidDataException("Resource is empty or exceeds 100 MB.");
        return path;
    }

    static string? FindHttpResource(HttpClient client, Uri uri, string cache, bool download, int type)
    {
        var extension = Path.GetExtension(uri.AbsolutePath);
        if (!(type == 0 ? ImageExtensions : AudioExtensions).Contains(extension)) throw new InvalidDataException("Unsupported online resource extension.");
        var key = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(uri.AbsoluteUri))).ToLowerInvariant();
        var target = Path.GetFullPath(Path.Combine(cache, key + extension.ToLowerInvariant()));
        if (!Within(cache, target)) throw new InvalidDataException("Image cache path escapes its root.");
        if (File.Exists(target))
        {
            var size = new FileInfo(target).Length;
            if (size > 0 && size <= MaximumImageBytes) return target;
        }
        if (!download) return null;
        Directory.CreateDirectory(cache);
        using var cancellation = new CancellationTokenSource(TimeSpan.FromSeconds(30));
        using var response = client.GetAsync(uri, HttpCompletionOption.ResponseHeadersRead, cancellation.Token).GetAwaiter().GetResult();
        response.EnsureSuccessStatusCode();
        if (response.Content.Headers.ContentLength > MaximumImageBytes)
            throw new InvalidDataException("Online image exceeds 100 MB.");
        var temporary = Path.Combine(cache, key + "." + Guid.NewGuid().ToString("N") + ".tmp");
        try
        {
            using (var input = response.Content.ReadAsStreamAsync(cancellation.Token).GetAwaiter().GetResult())
            using (var output = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None))
            {
                var buffer = new byte[65536];
                long count = 0;
                int read;
                while ((read = input.ReadAsync(buffer.AsMemory(), cancellation.Token).AsTask().GetAwaiter().GetResult()) > 0)
                {
                    count += read;
                    if (count > MaximumImageBytes) throw new InvalidDataException("Online image exceeds 100 MB.");
                    output.Write(buffer, 0, read);
                }
                if (count == 0) throw new InvalidDataException("Online image is empty.");
            }
            File.Move(temporary, target, true);
            return target;
        }
        finally { if (File.Exists(temporary)) File.Delete(temporary); }
    }

    static bool Within(string root, string path) => path.StartsWith(
        Path.TrimEndingDirectorySeparator(root) + Path.DirectorySeparatorChar, StringComparison.OrdinalIgnoreCase);

    static int AddCsvResources(JsonObject metadata, string source, string? configured,
        Dictionary<string, string> csvPaths, List<string> warnings)
    {
        var roots = new List<string>();
        if (configured is not null)
        {
            if (Directory.Exists(Path.Combine(configured, "res"))) roots.Add(Path.Combine(configured, "res"));
            else if (Directory.Exists(configured)) roots.Add(configured);
        }
        if (Directory.Exists(Path.Combine(source, "res"))) roots.Add(Path.Combine(source, "res"));
        var csvCount = 0;
        foreach (var root in roots.Distinct(StringComparer.OrdinalIgnoreCase))
        foreach (var csv in Directory.EnumerateFiles(root, "*.csv", SearchOption.AllDirectories).Order(StringComparer.OrdinalIgnoreCase))
        {
            if (++csvCount > 10000) throw new InvalidDataException("Too many resource CSV files.");
            try
            {
                if (new FileInfo(csv).Length > 10 * 1024 * 1024) throw new InvalidDataException("Resource CSV exceeds 10 MB.");
                // Match the original res CSV parser: remove semicolon comments, trim cells, omit empty cells.
                var content = Regex.Replace(File.ReadAllText(csv).TrimStart('\ufeff'), @"\s*;[^\n]*", "");
                foreach (var line in content.Split('\n'))
                {
                    try
                    {
                    var cells = line.Split(',').Select(c => c.Trim()).Where(c => c.Length > 0).ToArray();
                    if (cells.Length < 2) continue;
                    var name = cells[0].ToLowerInvariant();
                    if (metadata.ContainsKey(name)) continue;
                    var resourcePath = cells[1];
                    var extension = Path.GetExtension(resourcePath);
                    var type = ImageExtensions.Contains(extension) ? 0 : AudioExtensions.Contains(extension) ? 1 : -1;
                    if (type < 0) continue;
                    if (!(Uri.TryCreate(resourcePath, UriKind.Absolute, out var uri) &&
                        (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps)))
                    {
                        resourcePath = Path.GetFullPath(Path.Combine(Path.GetDirectoryName(csv)!, resourcePath.Replace('/', Path.DirectorySeparatorChar)));
                        if (!Within(root, resourcePath)) throw new InvalidDataException("CSV resource escapes its root.");
                        csvPaths[name] = resourcePath;
                    }
                    var item = new JsonObject { ["path"] = resourcePath, ["type"] = type };
                    if (type == 0)
                    {
                        var properties = new[] { "x", "y", "width", "height", "posX", "posY" };
                        for (var i = 0; i < properties.Length; i++)
                            item[properties[i]] = cells.Length > i + 2 && double.TryParse(cells[i + 2], NumberStyles.Float,
                                CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : 0;
                    }
                    metadata[name] = item;
                    }
                    catch (Exception error) when (error is IOException or UnauthorizedAccessException or ArgumentException)
                    {
                        if (warnings.Count < 100) warnings.Add(Path.GetFileName(csv) + ": " + error.Message);
                    }
                }
            }
            catch (Exception error) when (error is IOException or UnauthorizedAccessException or ArgumentException)
            {
                if (warnings.Count < 100) warnings.Add(Path.GetFileName(csv) + ": " + error.Message);
            }
        }
        return csvCount;
    }

    static (int Width, int Height) ReadImageDimensions(string path)
    {
        using var input = File.OpenRead(path);
        Span<byte> header = stackalloc byte[24];
        var length = input.Read(header);
        if (length < 10) throw new InvalidDataException("Invalid image header.");
        if (length == 24 && header[..8].SequenceEqual(new byte[] { 137, 80, 78, 71, 13, 10, 26, 10 }))
            return (System.Buffers.Binary.BinaryPrimitives.ReadInt32BigEndian(header[16..20]),
                System.Buffers.Binary.BinaryPrimitives.ReadInt32BigEndian(header[20..24]));
        if (header[..3].SequenceEqual("GIF"u8))
            return (System.Buffers.Binary.BinaryPrimitives.ReadUInt16LittleEndian(header[6..8]),
                System.Buffers.Binary.BinaryPrimitives.ReadUInt16LittleEndian(header[8..10]));
        // Widthless CSV entries for other formats remain explicit errors; preserved static mappings have dimensions.
        throw new InvalidDataException("CSV image needs explicit width and height for this format.");
    }
}
