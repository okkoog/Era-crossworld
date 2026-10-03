# @file 乙名史悦子 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)

# @author 黑奴队长（临时）
rec_0:
  title: 取材開始
  lines:
    - %TRACK%を後にするとき、%YOU% は記者風の%PHY%と、思いがけず行き会った。
    - if: era.get('flag:初见URA颁奖') > 0
      content: %YOU% は、毎年表彰を務めている %CHARA% だと気づいた。
    - 彼女は自らを、記者の %CHARA_ACTUAL% だと名乗った。
    - 軽く挨拶を交わすと、%YOU% のチームのこれからの活躍を楽しみにしている、と告げた。

# @author 黑奴队长（临时）
rec_1:
  title: 専属記者
  lines:
    - %YOU%은(는) 뜻밖에도 학원 정문에서 %CHARA%를 만났다.
    - %CHARA%와 인사를 나누고 %YOU%은(는) %CHARA%와 함께 걸었다.
    - %CHARA%가 말하길, %YOU%의 활약 덕에 이제부터 %CHARA%는 %YOU%의 팀 전담 취재 기자가 되었다고 한다.
    - 물론 %CHARA%도 %YOU%의 영광을 널리 알리고 부정적인 영향을 최대한 없애는 데 도움을 줄 수 있다. %YOU%이(가) 허락한다면 말이지만.
    - 그렇게 말하며 %CHARA%는 활짝 웃음을 지었다.
    - (방문객 응접실에서 %CHARA%를 찾을 수 있을 것이다...)

rec_2:
  - %CHARA%는 미소를 지으며, 앞으로는 %YOU%의 좋은 소문을 퍼뜨리고 악명을 줄여주겠다고 약속했다.
  - if: era.get('love:303') >= 75
    content: 대신……%CHARA%는 살며시 %YOU%의 손을 어루만지며 눈을 깜빡였다.
  - if: era.get('love:303') < 75
    lines:
      - 그 대신... %CHARA%는 트레이닝을 방해하지 않는 조건으로 %YOU%의 팀과 가까이 접촉할 수 있도록 해달라고 요청해 왔다.
      - if: era.get('love:303') >= 50
        content: 악수를 나누고 난 뒤 %CHARA%는 자신의 손바닥을 천천히 쓰다듬으며 무언가 생각에 잠겼다.
      - if: era.get('love:303') < 50
        content: 악수를 나누고 난 뒤 %CHARA%는 계획대로라는 듯 교활한 미소를 지었다.
