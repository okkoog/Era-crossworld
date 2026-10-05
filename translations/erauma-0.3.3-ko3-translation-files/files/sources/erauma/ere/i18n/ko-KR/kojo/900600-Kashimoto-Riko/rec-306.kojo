# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/900600-Kashimoto-Riko/rec-306.kojo
# @file 樫本理子 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
# [번역 대상] intro — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - %CHARA% は %YOU% に、トレーニングの心構えをいくつか伝え、健康管理の大切さを強調した。
      - 実践については、自分のチームに素質の良い %B_UMA% が二頭いるので、%B_SEX%たちのトレーニングの手伝いから入ればいい、とのことだった。
  - if: era.get('flag:当前声望') >= 500
    lines:
      - %CHARA% は、トレーナーとしての %YOU% の腕を認めた。
      - 気力に余裕があるなら、これから育成が始まる、素質の良い%B_UMA%二頭のトレーニングを手伝ってほしい、と。

# [번역 대상] task — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = ビターグラッセ
      # L_NAME = リトルココーン
      - %CHARA% の紹介で、%YOU% は %B_NAME% と %L_NAME% に会った。
      - %CHARA% の期待を背負い、%YOU% と%B_SEX%たちの三年が始まった……
      - （%B_SEX%たちを率いて、重賞をたくさん勝とう……）
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - 月日が流れ、%YOU% は %B_NAME%、%L_NAME% と、再び同じ芝の上に立った。
      - 今度こそ、%B_SEX%たちの願いを叶えられるだろうか。

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
