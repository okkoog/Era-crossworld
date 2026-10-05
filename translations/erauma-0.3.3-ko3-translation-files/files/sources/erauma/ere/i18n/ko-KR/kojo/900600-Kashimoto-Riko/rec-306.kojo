# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file 樫本理子 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
# [번역 완료] intro
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - %CHARA%는 %YOU%에게 트레이닝에 임하는 마음가짐 몇 가지를 전하고, 건강 관리의 중요성을 강조했다.
      - 실전은 자신의 팀에 자질이 좋은 %B_UMA%가 두 명 있으니, %B_SEX%들의 트레이닝을 돕는 것부터 시작하면 된다고 했다.
  - if: era.get('flag:当前声望') >= 500
    lines:
      - %CHARA%는 트레이너로서 %YOU%의 실력을 인정했다.
      - 기력에 여유가 있다면 이제 육성이 시작될 자질 좋은 %B_UMA% 두 명의 트레이닝을 도와달라고 했다.

# [번역 완료] task
task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = ビターグラッセ
      # L_NAME = リトルココーン
      - %CHARA%의 소개로, %YOU%은(는) %B_NAME%와 %L_NAME%을(를) 만났다.
      - %CHARA%의 기대를 짊어지고, %YOU%과(와) %B_SEX%들의 3년이 시작되었다……
      - (%B_SEX%들을 이끌고, 중상 레이스에서 많이 승리하자……)
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - 세월이 흐르고, %YOU%은(는) %B_NAME%, %L_NAME%와 다시 같은 잔디 위에 섰다.
      - 이번에야말로 %B_SEX%들의 소원을 이뤄줄 수 있을까.

recruit:
  title: 성과
  lines:
    - %B_NAME%와 %L_NAME%이 모두 일정한 성과를 거둔 후, %CHARA%가 %YOU%을(를) 찾아와 %YOU%이(가) 이뤄낸 성과를 칭찬했다.
    - %CHARA%는 %YOU%에게 함께 팀을 꾸려, %CHARA%의 관리주의 이념을 계속 발전시켜 나가자고 제안했다.

recruit_hentai:
  title: 「성과」
  lines:
    - %B_NAME%와 %L_NAME%의 육성이 끝난 후, %CHARA%가 %YOU%을(를) 찾아왔다.
    - if: era.get('love:306') >= 75
      lines:
        - %CHARA%는 %YOU%이(가) 이렇다 할 성적을 거두진 못했지만, 잠재력은 충분히 증명해 보였다며……
        - %CHARA%는 갑자기 말문이 막힌 듯 얼굴을 붉히더니, 우물쭈물하며 %YOU%에게 %CHARA%의 팀에 합류해 관리주의 이념을 함께 발전시켜 나가자고 권유했고, 동시에……
        - %YOU%이(가) 제안을 수락하자, 그제야 %CHARA%는 붉어진 얼굴로 작별 인사를 했다.
        - %CHARA%가 트레이닝실을 나설 때 밖에서 들려온 목소리에, %YOU%은(는) 예전에 우연히 보았던 낯익은 두 %B_UMA%가 %CHARA%를 응원하던 훈훈한 모습이 떠올랐다.
    - if: era.get('love:306') < 75 && (d.glasse_hentai || d.cocon_hentai)
      lines:
        - if: d.glasse_hentai && d.cocon_hentai
          content: %CHARA%는 %YOU%이(가) %B_SEX%들에게 저지른 짓을 결코 용서하지 않겠다고 말했다.
        - if: d.glasse_hentai && !d.cocon_hentai
          content: %CHARA%는 %YOU%이(가) %B_NAME%에게 저지른 짓을 결코 용서하지 않겠다고 말했다.
        - if: '!d.glasse_hentai && d.cocon_hentai'
          content: %CHARA%는 %YOU%이(가) %L_NAME%에게 저지른 짓을 결코 용서하지 않겠다고 말했다.
        - %CHARA%는 이사장 대리로서 %YOU%에게 내릴 처벌은 이제 시작일 뿐이라고 경고했다.
        - %YOU%에게 농락당한 담당을 보호하기 위해 %CHARA%는 스스로 위험을 무릅쓰는 것도 마다하지 않았다.
