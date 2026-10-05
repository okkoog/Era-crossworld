# @file 해피 미크 - 모집
# @author 黒奴隊長（仮）
# @author Claude (翻訳)
rec:
  # CFLAGNAME:49 = 육성횟수
  # K_NAME = 키류인 아오이
  - if: era.get('cflag:201:49') === 0
    content: %K_NAME%의 추천으로, %YOU%과(와) %CHARA%는 서로를 알게 되었고, 파트너로서 중요한 3년을 시작하게 되었다.
  - if: era.get('cflag:201:49') > 0
    content: %YOU%과(와) %CHARA%는 다시 한 번 함께 서서, 앞으로 3년 동안의 모든 도전을 맞이할 것이다.
  - （%CHARA%와 함께 G1 레이스에서 많은 승리를 거두자……）
