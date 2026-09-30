# 원본 소스 보존

현재 erauma와 eramegaten P판의 ZIP 해제본, P판의 추가 리소스 ZIP 해제본을 보존하고 있습니다. 기존 저장소의 `docs/`, `game/`, `dev/`, `test/` 등은 변경하지 않았습니다.

| 원본 ZIP | 저장 경로 | 파일 수 | 압축 해제 바이트 | 제외 파일 수 |
|---|---|---:|---:|---:|
| `erauma-master.zip` | `sources/erauma/` | 4649 | 70184905 | 0 |
| `4. eramegaten_p_(2026) (AI) 0926 2차 수정 (2).zip` | `sources/eramegaten_p_2026/` | 11950 | 290690363 | 0 |
| `resources.zip` | `sources/eramegaten_p_2026/Data/resources/` | 6888 | 296603727 | 0 |

## 보존 방법

- ZIP의 최상위 묶음 폴더 `erauma-master/`만 제거했습니다. 나머지 내부 경로와 모든 파일의 원본 바이트를 유지했습니다.
- 숨김 파일, ZIP 안의 `.gitignore`에 걸리는 파일, 실행 파일, 리소스도 포함했습니다. 소스 코드를 실행하거나 빌드하지 않았습니다.
- 100 MiB 이상인 파일은 없으며, 파일 제외나 분할 없이 전체 해제본을 보존했습니다. 따라서 ZIP 원본을 중복 업로드하지 않았습니다.
- Git은 빈 디렉터리를 저장하지 않습니다. 해당 경로는 manifest의 `empty_directories`에 기록했습니다.
- `preservation-manifest.json`에 원본 ZIP SHA-256, 파일별 경로·크기·SHA-256·Git blob SHA-1, 파일 모드 및 제외 내역을 기록했습니다.
- 저장 당시 원본 바이트와 추출 파일, Git blob 해시를 대조했습니다. 원본 프로젝트의 속성 파일이 줄바꿈을 변환하지 않도록 원본 바이트를 직접 Git에 저장했습니다.

이 디렉터리는 보존용 스냅샷입니다. 기존 게임에 통합하거나 동작을 검증한 상태는 아닙니다. 각 원본에 포함된 라이선스 및 저작권 표기는 그대로 유지합니다.


## 삭제 이력

사용자 요청에 따라 버전 간 혼동을 방지하기 위해 sources/ShinEraTensei/의 3,743개 파일을 삭제했습니다. 원본 ZIP은 변경하지 않았으며, 이전 보존 커밋 7da777de8f7721d209ee7a8bfe78bb302ecba76d에서 복구할 수 있습니다. manifest의 archives에는 현재 보존 중인 묶음만 포함하고, 삭제 내역은 removed_archives에 기록합니다.


## P판 추가 리소스

사용자가 제공한 resources.zip의 전체 파일을 P판의 Data/resources/에 추가했습니다. ZIP에 resources/ 상위 폴더가 없어 게임의 리소스 경로에 맞추어 배치했습니다. 기존 파일 덮어쓰기 및 제외 파일은 없습니다. 프로젝트의 .gitignore가 이 경로를 제외하지만, 보존 요청에 따라 명시적으로 Git에 포함했습니다. 파일 바이트와 Git blob 해시를 검증했으며 게임 실행 검증은 수행하지 않았습니다.
