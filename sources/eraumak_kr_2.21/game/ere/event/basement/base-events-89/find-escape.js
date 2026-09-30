const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

function find_escape(out_of_prison, s_level_up, is_back) {
  const grand = get_chara_talk(89),
    me = get_chara_talk(0),
    callname = sys_get_colored_callname(89, 0);
  new GrandLifeMarks().b_find_escape = 1;
  if (is_back && out_of_prison) {
    era.print(['우연한 시도 끝에, 철사가 자물쇠 안의 어떤 부분을 건드린 것 같다.']);
    era.print([
      me.get_colored_name(),
      '은(는) 철사를 꽉 쥐고 힘껏 돌렸고, 자물쇠 내부에서 매끄럽게 돌아가는 감각이 전해졌다.',
    ]);
    era.print([
      me.get_colored_name(),
      '은(는) 마음속으로 환호하며 철문을 밀고 나가 좁은 통로로 들어섰다. 이 통로만 지나면——',
    ]);
    era.println();

    grand.say(['……', me.get_colored_name(), ', 어디 가시는 거예요?']);
    era.println();

    era.print(['피부에 소름이 돋는 듯한 오한이 전신에 퍼졌고, 목부터 등까지 식은땀으로 흠뻑 젖었다.']);
    era.print([
      '통로 반대편에서 들려오는 목소리는 알아듣기 힘들 정도로 희미했지만, 그 안에 담긴 의미만큼은 강렬하게 전해져 왔다.',
    ]);
    era.print([
      '한 걸음씩 다가오는 ',
      grand.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '에게 묻고 있는 것이 아니라, 모든 것을 알고 있는 상태에서 그저 『확인』을 하고 있을 뿐이었다.',
    ]);
    era.println();

    me.say(['이, 이것도 다 ', sys_get_colored_callname(0, 89), '을 위해서……']);
    era.println();

    if (era.get('exp:89:감금횟수') === 1) {
      grand.say(['정말로 절 위하신다면…… 그런 식으로는 대답하지 말아 주세요.']);
      era.println();

      era.print([
        '뒷걸음질 치다 다시 문 안으로 쫓겨난 ',
        me.get_colored_name(),
        '. 지척에 있는 애마. 불길한 예감이 마음속에 피어올랐다.',
      ]);
      era.println();

      grand.say(['제게는, ', callname, '이 가장 중요해요. 제 모든 것이라고요……']);
    } else {
      grand.say([callname, '……그런 말로 절 속이려는 건가요……']);
      era.println();

      era.print([
        '뒷걸음질 치다 다시 문 안으로 쫓겨난 ',
        me.get_colored_name(),
        '. 지척에 있는 애마. 불길한 예감이 마음속에 피어올랐다.',
      ]);
      era.println();

      grand.say([
        '전…… ',
        sys_get_colored_callname(89, 91),
        '만큼 똑똑하진 않지만, 그렇다고 쉽게 속아 넘어갈 바보도 아니에요.',
      ]);
    }
    era.println();

    era.print(['철컥—— 자물쇠가 돌아가는 차가운 소리가 적막한 방 안에 울려 퍼졌다.']);
    era.print([
      '더 이상 외부와 어떤 접점도 생기지 않을 이곳에서, ',
      me.get_colored_name(),
      '은(는) 체념한 듯 두 눈을 감았다.',
    ]);
  } else {
    era.print(['짤깍, 짤깍——']);
    era.println();

    me.say(['쳇……']);
    era.println();

    era.print(['겨우 찾아낸 철사가 자물쇠 구멍 안에서 부러지고 말았다.']);
    era.print([
      '수없는 시도 속에서 ',
      me.get_colored_name(),
      '은(는) 이미 실패에 익숙해져 있었지만, 남겨진 조각은 도망치려 했다는 명백한 증거가 될 터였다.',
    ]);
    era.println();

    me.say(['이거…… 안 빠지잖아……!']);
    era.println();

    era.print(['언제부터 잘못된 걸까?']);
    era.print(['대체 어쩌다 이 지경까지 오게 된 걸까?']);
    era.print([
      '머릿속에, 어린 ',
      grand.get_uma_sex_title(),
      '의 천사 같은 미소가 환영처럼 떠올랐다.',
    ]);
    era.println();

    grand.say(['……', callname, '?']);
    era.println();

    era.print([
      '희미한 목소리가 ',
      me.get_colored_name(),
      '의 움직임을 얼어붙게 했고, 충동적으로 벌인 탈옥 게임이 끝났음을 알렸다.',
    ]);
    era.println();

    grand.say(['죄송해요, ', callname, '……']);
    era.println();

    era.print([
      me.get_colored_name(),
      '은(는) 고개를 돌려 ',
      grand.get_child_sex_title(),
      '의 표정을 확인할 엄두조차 내지 못한 채, 그저 침대 위로 끌려가는 대로 몸을 맡겼다.',
    ]);
    era.println();

    grand.say(['다 제 잘못이에요… 제가 ', callname, '을 잘 돌봐드리지 못해서, 떠나고 싶다는 생각을 하게 만든 거잖아요.']);
    grand.say(['……', callname, '이 제 마음을 느끼시게 만들어야 하겠죠…']);
  }
}

module.exports = find_escape;