# 0.3.3-ko1 한국어팩 검증 근거

기록일: 2026-10-02. 번역 기준 `erauma-ko` 커밋 `9c1b98fb7b0ea0d44d8e83b2e8a2d9ad41675bf9`. 실행기 기준 합격한 0.3.3 커밋 `44d6f865b00519191bc3d2727c6fc42bf554df8f`.

- `korean-pack-summary.json`: 정확한 배포 DLL로 수행한 98개 검사 PASS. 실제 메뉴 한국어 선택·새 세션 복원, 변경 장면 4개의 15개 분기·원래 반환값·21개 일본어 fallback 함수를 확인했다.
- `korean-native-summary.json`: 배포 EXE와 DLL을 복사한 격리 시험에서 실제 production Bridge를 사용한 24개 검사 PASS. 한국어 언어 메뉴 선택·설정 저장·새 Bridge 복원, 타이틀 버튼 ID·문자열·폭, 이름 입력과 다음 설정 화면을 확인했다. 파일의 DLL SHA256은 기존 0.3.3과 같다.
- `payload-identity.json`: 기존 실행기·DLL·원본 게임·리소스·fallback 모듈 7,221개 파일의 해시가 합격한 0.3.3과 일치한다. 추가 한국어 소스 108개도 지정 번역 커밋의 깨끗한 작업 폴더와 일치하며 시험 ZIP의 모든 파일 해시를 확인했다.
- `korean-title.png`, `korean-title-restored.png`: 실제 실행기 managed canvas. 재시작 전후 그림 해시가 같다.
- `korean-new-game-name.png`, `korean-new-game-character.png`: 실제 실행기의 이름 입력과 캐릭터 설정 canvas. 미대응 버튼 일부가 일본어로 남는 것은 번역 fallback이다.

원시 시험 폴더는 `outputs/korean-pack-af6ad201`과 `outputs/korean-native-95a43ff3`이다. 개인 저장을 사용하지 않았다. PNG는 실행기 내부 Paint를 기록한 소프트웨어 canvas이며 데스크톱 캡처나 사람의 클릭 검증이 아니다. 한국어팩의 전체 직접 플레이와 새로운 FPS 측정은 이번 범위에 포함하지 않는다. 기존 실행기의 화면 처리·레이스 타이머 코드는 변경하지 않았다.
