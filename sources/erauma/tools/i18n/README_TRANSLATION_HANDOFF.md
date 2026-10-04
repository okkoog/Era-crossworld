# 남은 문구의 번역 이양과 합치기

이 도구는 현재 3.113 일본어와 한국어 override에서 **아직 한국어가 아닌 안전한 문구**를 모듈별 JSON으로 분리합니다. 새 한국어를 작성하거나 게임 파일을 바꾸지 않습니다. 기존 한국어 문구는 다시 추출하지 않습니다. 부분 번역된 함수에서는 현재 한국어 파일에 남은 일본어를 기준으로 하며, override가 없는 키는 현재 일본어 fallback을 기준으로 합니다.

번역자는 `modules/` 아래 JSON의 각 항목에서 **`koreanText`만** 채웁니다. 아직 번역하지 않은 항목은 빈 문자열로 둡니다. 선택적으로 `translatorNotes` 문자열을 덧붙일 수 있습니다. ID, 원문, 경로, 해시, AST/YAML 경로, 동적 표현식, 원래 함수 인자 등은 바꾸지 않습니다. `%NAME%` 같은 치환 토큰은 같은 순서와 개수를 유지하며, 조각의 앞뒤 공백도 유지합니다. 템플릿의 동적 표현식 사이 경계는 고정됩니다.

## 생성

Node.js와 Acorn이 필요합니다. `.kojo`도 처리하려면 기존 YAMLJS 경로를 지정합니다. 아래 경로는 예시이며 실제 PC의 경로로 바꿉니다. 출력 폴더는 비어 있거나 새 폴더여야 합니다.

```powershell
node sources/erauma/tools/i18n/translation-handoff.cjs export `
  --repo C:/path/Era-crossworld-erauma-ko `
  --output E:/Download/translation-handoff-new `
  --acorn C:/path/acorn `
  --yaml C:/path/yamljs/package/lib/Yaml.js
```

최종 배포본은 재사용 변경을 커밋한 뒤 생성합니다. `manifest.json`의 `sourceCommit`이 그 커밋이며 `sourceWorkingTreeDirty`가 `false`인지 확인합니다. 작업 중 시험용 생성본은 `true`일 수 있습니다. 소스가 바뀌었다면 예전 번역본을 억지로 합치지 말고 새 목록으로 변경된 항목을 대조합니다.

`manifest.json`에는 pristine 배포 파일 해시, 원본 소스 파일 해시, 고정 슬롯 checksum, 모듈·문구 수가 있습니다. `sourceFiles[].path`는 저장소 상대경로, `files[].path`는 이양 폴더 상대경로입니다. `files`에는 manifest 자체를 포함하지 않습니다. `classification.json`은 `REUSE_*.json`과 `REC_APPLICATION_*.json`의 키·section·모듈 판정을 연결합니다. 기록을 찾지 못한 `no_key_level_record`, 기존 한국어 override의 residual에 키별 기록이 없는 상태, 구조 불일치·adapter 필요 판정, 부분 재사용, 안전 제외를 구별합니다. 키가 없는 과거 배치는 모듈 범위의 판정으로 표시하며, 기록 부재가 이미 완료된 영역을 다시 조사했다는 뜻은 아닙니다. 이 목록은 새로운 번역 가능성 판정을 대신하지 않습니다.

## 안전 제외와 판정 필요 항목

`excluded.json`에는 원문 본문 없이 경로·키·제외 이유만 담습니다. `timon/sex`, `timon/child`, pregnant-slave와 Kojo의 ero/base/av-sister 영역은 본문을 내보내지 않습니다. 다른 영역에서도 성적 참조나 본문 표지가 발견되면 함수 또는 Kojo 장면 전체를 제외합니다. 이 필터는 보수적이며 단어의 중립적 사용도 걸러낼 수 있습니다. 제외된 항목은 번역 부재가 입증된 항목과 다릅니다. 이 도구를 이용해 제외 본문을 다시 수집하지 않습니다.

해석할 수 없는 export 구조, YAML 파서가 없는 `.kojo`, generated 구간의 문구는 `manualReview` metadata에 남습니다. 문자열 속 한자 여부만으로 번역 가능성을 보증하지 않습니다. require 경로·URL·분기 비교·제어용 인자·속성 키·언어 중립 값은 번역 대상으로 잡지 않습니다. 순수 한국어 literal는 다시 추출하지 않습니다. 한글과 CJK가 섞인 안전한 문구는 전체 literal를 그대로 추출하고 `mixedKoreanCjk: true`로 표시합니다. 번역자는 기존 한국어 부분을 보존하면서 남은 CJK를 검토합니다. 도구는 그 문장을 자르거나 한국어 조각을 조합하지 않습니다. `possibleNameContext`도 확인하여 인명·제목 등 고유명사의 현재 표기를 유지할지 판단합니다.

## 번역본 검사

원본 이양 폴더는 그대로 보관하고, 번역용 JSON을 별도 폴더에 복사해서 작업합니다. 검사에서는 번역 JSON 전체 파일 해시가 달라지는 것을 허용하며, `koreanText`와 선택적 `translatorNotes`를 제외한 슬롯을 고정 checksum과 대조합니다. 현재 저장소 HEAD·소스 해시, 중복 ID, 원문 변경, placeholder 누락·추가·순서 변경, 조각 공백과 동적 경계 변경은 실패 처리합니다.

```powershell
node sources/erauma/tools/i18n/translation-handoff.cjs validate `
  --repo C:/path/Era-crossworld-erauma-ko `
  --manifest E:/Download/translation-handoff-new/manifest.json `
  --input E:/Download/translated/module.js.json
```

`--input`은 여러 번 지정할 수 있습니다. 번역본 폴더 전체를 검사하려면 `--translation-root E:/Download/translated`를 씁니다. 이 옵션은 해당 폴더의 `modules/` 아래 JSON을 읽습니다. input을 지정하지 않으면 manifest의 빈 원본 JSON을 검사합니다. 빈 원본도 유효한 검사 입력이며, 모든 항목을 번역해야 검사에 통과하는 것은 아닙니다.

## 여러 작업자의 번역 합치기

서로 같은 manifest를 기준으로 작업합니다. 일부 항목만 채운 JSON들을 합치면 빈 값보다 채운 값을 선택합니다. 같은 ID에 서로 다른 번역을 넣으면 충돌로 중단합니다. 단일 입력 파일 내부의 중복 ID는 언제나 오류입니다. combine 결과는 여러 모듈을 포함할 수 있는 JSON이며 그대로 validate와 preview에 넣을 수 있습니다.

```powershell
node sources/erauma/tools/i18n/translation-handoff.cjs combine `
  --repo C:/path/Era-crossworld-erauma-ko `
  --manifest E:/Download/translation-handoff-new/manifest.json `
  --input E:/Download/person-a.json --input E:/Download/person-b.json `
  --output E:/Download/combined-new.json
```

## 나중에 게임에 반영하기 전 검토

```powershell
node sources/erauma/tools/i18n/translation-handoff.cjs preview `
  --repo C:/path/Era-crossworld-erauma-ko `
  --manifest E:/Download/translation-handoff-new/manifest.json `
  --input E:/Download/combined-new.json `
  --output E:/Download/translation-review-new
```

`literal-review.diff`는 원문 슬롯과 번역 슬롯을 비교하는 **검토용** 파일입니다. 게임에 자동 적용할 수 있는 패치가 아닙니다. `import-plan.json`에는 대상 파일·키·AST/YAML 슬롯·현재 소스 해시가 기록됩니다. 기존 한국어 JS의 generated 밖 슬롯은 정확한 literal 교체 후보가 됩니다. 일본어 fallback 항목은 새 override와 entry 연결 검토가 필요하며, YAML 항목도 정확한 path를 확인해 수동 반영합니다. 도구는 함수 본문이나 게임 로직, 새 entry 연결 코드를 합성하지 않습니다. 실제 반영자는 현재 3.113 인자·분기·동적 삽입·배열과 generated 구간을 보존하고 이후 게임 검증을 수행합니다.

모든 생성·검사·합치기·검토 결과의 `freshKoreanProseWritten`은 `false`입니다. 이 값은 **도구가 새 한국어를 쓰지 않았다**는 뜻이며, 외부 번역자가 채운 내용을 기존 2.21 재사용 문구라고 주장하는 값이 아닙니다.
