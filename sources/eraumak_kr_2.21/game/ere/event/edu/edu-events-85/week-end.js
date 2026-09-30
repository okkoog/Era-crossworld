const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} handlers */
module.exports = (handlers) => {
  handlers[47 + 32] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:85:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('얻어낸 계시', ruby);
    await ruby.say_and_wait([r_call_m, '.']);
    await ruby.say_and_wait('당신은, 제 달리기 속에서 광채를 발견하셨나요?');
    era.printButton('「그래.」', 1);
    await era.input();
    await ruby.say_and_wait('이 무기를 잘 활용한다면, 저 역시 도달할 수 있을지도……');
    await ruby.say_and_wait('이 두 다리로 가장 눈부신 광채를 선보일 수만 있다면……');
    await ruby.say_and_wait('선택한 노선에 왕관이 없더라도, 그 혈통은 분명 이 몸에 흐르고 있습니다.');
    await ruby.say_and_wait('오직 왕관 노선만이 광채를 발할 수 있다고 믿는다면, 저도 그저 그만한 그릇에 불과하겠지요.');
    await ruby.say_and_wait('하지만 당신이라면, 제가 그 길 외의 다른 길에서도 사명을 다하게 해줄 수 있습니다.');
    await ruby.say_and_wait('가장 제게 어울리는 방식으로 말이죠.');
    await ruby.say_and_wait('이번 달도 고생 많으셨습니다.');
    await ruby.say_and_wait('당신 없이는 앞으로 나아갈 수 없다는 사실을 뼈저리게 실감했습니다.');
    await ruby.say_and_wait('우선 가문에 이 결단을 전해야겠군요.');
    await ruby.say_and_wait('그 뒤에도, 부디 앞으로 잘 부탁드립니다.');
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(85, attr_change, 0);
  };

  handlers[95 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:85:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('여름 합숙(시니어 시즌) 도중', ruby);
    await era.printAndWait('합숙도 어느덧 반이 지났고, 오늘 이 근처에서 여름 축제가 열릴 예정이다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '가 높은 확률로 합숙소에 남아있을 것이라 생각하던 차였다.',
    ]);
    await ruby.say_and_wait([r_call_m, '?']);
    era.printButton('「공부 준비 도와줄까?」', 1);
    await era.input();
    await ruby.say_and_wait(
      '합숙소에 이렇게 조용한 곳이 있었군요. 게다가 책상과 조명까지 준비해 두시다니.',
    );
    await ruby.say_and_wait('이렇게 많은 배려를 해주셔서 감사드립니다.');
    await era.printAndWait(
      '슈우우우욱—— 콰광! 먼 곳에서 폭죽 터지는 소리가 들려왔다. 축제도 슬슬 막을 내릴 시간인 듯하다.',
    );
    await era.printAndWait([
      '마침 ',
      ruby.get_colored_name(),
      '의 공부가 일단락된 듯한 기색이 보이자, ',
      me.get_colored_name(),
      '은(는) 미리 준비해 두었던 말을 건넸다.',
    ]);
    era.printButton('「잠시 가볍게 산책이라도 다녀올까?」', 1);
    await era.input();
    await ruby.say_and_wait('……알겠습니다.');
    era.drawLine({ content: '해변가'});
    await ruby.say_and_wait('고요하네요……');
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '는 아무도 없는 모래사장에서 어깨를 나란히 한 채 밤하늘을 가득 수놓은 별들을 올려다보았다. 잔잔하게 들려오는 파도 소리가 무척이나 기분 좋게 울려 퍼졌다.',
    ]);
    era.printButton('「이곳의 별빛이 아주 아름답다고 들어서 와봤어.」', 1);
    await era.input();
    await ruby.say_and_wait(
      '과연, 저 역시 풍경이 무척 빼어나다고 생각합니다. 여름의 별자리들이 밤하늘에서 반짝이고 있군요.',
    );
    await era.printAndWait('독특한 붉은빛을 발산하는 저 별이 바로 전갈의 심장—— 안타레스다.');
    await ruby.say_and_wait('……아아, 역시.');
    await ruby.say_and_wait('전갈의 불꽃.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 곁에서 무슨 소리가 들린 듯한 느낌을 받았으나, ',
      me.get_colored_name(),
      '이(가) 이를 확인하려 고개를 돌렸을 때 ',
      ruby.get_colored_name(),
      '는 이미 평소의 초연한 표정으로 돌아와 있었다.',
    ]);
    era.printButton('「이제 돌아갈까?」', 1);
    era.printButton(`「낮에 봤던, ${sys_get_callname(0, 93)}이 말이지……」`, 2, {
      disabled:
        era.get('love:85') < 75 ||
        era.get('cflag:0:위치') !== 1 ||
        era.get('cflag:85:위치') !== 0,
    });
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('네.');
      await ruby.say_and_wait(
        '밤바람을 맞으니 머리가 한결 맑아졌습니다. 돌아가서 내일 훈련을 위한 준비를 하도록 하겠어요.',
      );
      await era.printAndWait([
        '말을 마친 뒤, ',
        ruby.get_colored_name(),
        '는 미련 없이 발걸음을 돌려 걸어갔다. 어쩌면 이 산책은 ',
        ruby.sex,
        '에게 있어서 하등 불필요한 일이었을지도 모른다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 괜한 제안을 하여 ',
        ruby.sex,
        '에게 폐를 끼친 것은 아닐까 내심 걱정하고 있던 그때——',
      ]);
      await ruby.say_and_wait('저 역시, 그런 존재가 되고 싶습니다.');
      await era.printAndWait('멀어져 가는 작은 등 뒤로부터, 나지막한 목소리가 들려왔다.');
      await era.printAndWait([
        '서로의 마음이 조금은 통한 듯한 기분이 들어, ',
        me.get_colored_name(),
        '은(는) 홀로 이 밤의 기쁨을 가만히 음미했다.',
      ]);
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 그 말을 듣자 몸을 굽히더니, 구두 뒤축에 손가락을 넣어 신발을 벗었다…… 그러고는 그대로 발을 뻗어 ',
        me.get_colored_name(),
        '을(를) 걷어찼다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 미간을 찌푸리며 조금 투덜거리려 했으나, 이내 고개를 들어 눈앞을 바라보았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 자그마한 발목은 매끄럽고 윤기가 흘렀으며, 그 크기는 ',
        me.get_colored_name(),
        '의 한 손에 쏙 들어올 만큼 아담했다.',
      ]);
      await era.printAndWait([
        '조금 심술이 난 ',
        me.get_colored_name(),
        '의 선택은……',
      ]);
      era.printButton('치아로 가볍게 깨문다.', 1);
      era.printButton('발바닥에 입술을 부드럽게 맞춘다.', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 꽤나 간지러움을 타는 듯했고, ',
        me.get_colored_name(),
        '의 혀가 ',
        ruby.sex,
        '의 가냘픈 다리를 타고 위쪽으로 매끄럽게 타고 올라가자, ',
        ruby.sex,
        '는 하마터면 참지 못하고 비명을 지를 뻔했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 짓궂게 입술에 손가락을 대며 「쉿」 하고 눈치를 주자, ',
        ruby.get_colored_name(),
        '는 즉시 양손으로 제 입술을 다물어 틀어막았다.',
      ]);
      await era.printAndWait(
        '밤하늘의 달빛은 그리 선명하지 않았으나, 그 신성하고 은밀한 도원경을 또렷이 감상하기에는 한없이 충분했다.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 두 다리를 벌린 뒤, 그녀의 가쁜 숨결에 맞추어 열고 닫히는 요염한 입구를 향해 힘차게 진입했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 하복부는 ',
        me.get_colored_name(),
        '이(가) 한 치 한 치 파고들 때마다 격렬하게 요동쳤고, 완전히 깊숙이 맞닿았을 때는 온몸을 관통하는 전율로 변해 부르르 떨렸다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 다정하고 부드럽게 허리를 움직였다.']);
      await ruby.say_and_wait('으응…… 읏……');
      await era.printAndWait([
        '찰나의 순간, ',
        ruby.get_colored_name(),
        '는 입을 틀어막은 채 비명 같은 신음을 흘리며 허리를 활처럼 동그랗게 치켜올렸다.',
      ]);
      await era.printAndWait([
        ruby.sex,
        '의 질 내부가 세차게 수축하며, ',
        me.get_colored_name(),
        '의 뜨거운 육봉을 겹겹이 단단하게 죄어왔다.',
      ]);
      era.printButton('사정한다.', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 이때 이미 온몸이 발갛게 달아올라 가쁜 땀방울을 흘리고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 격렬한 사정과 동시에, ',
        ruby.get_colored_name(),
        '의 하체에서도 맑고 투명한 애액이 함께 울컥 뿜어져 나왔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 육체는 참으로 하늘의 축복을 받은 우월한 명기여서, ',
        ruby.sex,
        '본인에게도 성애의 극치에 달하는 유열을 손쉽게 안겨주었다.',
      ]);
      await era.printAndWait([
        '비록 본인은 지쳐서 손가락 하나 까딱할 힘도 없었으나, ',
        ruby.sex,
        '의 암컷의 통로는 본능적으로 파르르 경련하며 꿈틀거리기 시작했다.',
      ]);
      await era.printAndWait([
        '그 감촉은 마치 수많은 미세하고 부드러운 돌기들이 동시에 ',
        me.get_colored_name(),
        '의 작고 소중한 트레이너(?)를 어루만지며 유혹하는 듯했다.',
      ]);
      await era.printAndWait([
        '그 기분 좋은 자극에 힘입어, ',
        me.get_colored_name(),
        '은(는) 금세 다시 고개를 치켜들며 웅장함을 되찾았다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '마지막 정사가 끝을 향해 치달을 무렵, ',
        me.get_colored_name(),
        '은(는) 더 이상 감히 ',
        ruby.get_colored_name(),
        '의 내부에 가만히 머물러 있을 수가 없었다.',
      ]);
      await era.printAndWait('이 가냘픈 육체는 사람의 영혼까지 남김없이 빨아들일 것처럼 탐욕스럽게 옥죄어왔기 때문이다.');
      await era.printAndWait([ruby.get_colored_name(), '의 아랫배가 정액으로 가득 차 살짝 통통하게 부풀어 올랐다.']);
      era.printButton('손으로 살포시 눌러본다.', 1);
      await era.input();
      await era.printAndWait('배 속을 가득 채우고 있던 진득한 액체가 흘러나와 모래사장을 하얗게 더럽혔다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 입을 막고 있던 두 손은, 이미 힘이 다해 맥없이 떨어진 지 오래였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '를 부축해 합숙소로 데려가려 했으나, 두 다리가 사정없이 후들거렸다.',
      ]);
      await era.printAndWait('결국 두 사람은 거의 기어가다시피 하여 방으로 간신히 돌아갔다.');
      const pregnant_cache = era.get('cflag:85:임신단계');
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      end_ero_and_train();
      era.set('cflag:85:임신단계', pregnant_cache);
    }
  };

  handlers[95 + 32] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:85:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('여름 합숙 종료 (시니어 시즌)', ruby);
    await ruby.say_and_wait('사명을 위해서라면, 마땅히 제 한 몸을 온전히 헌신할 각오가 되어 있어야 합니다.');
    era.printButton('「헌신……?」', 1);
    await era.input();
    await ruby.say_and_wait([
      sys_get_colored_callname(85, 93),
      '의 말이 맞았습니다, 저는……',
    ]);
    era.printButton('「그게 정말로 옳은 걸까?」', 1);
    await era.input();
    await ruby.say_and_wait('네?');
    era.printButton(`「${m_call_r}, 너는  케이에스 미라클이 정말 이대로도 괜찮다고 생각해?」`, 1);
    await era.input();
    await ruby.say_and_wait('!');
    await ruby.say_and_wait('……');
    await era.printAndWait([ruby.get_colored_name(), '는 깊은 고뇌에 빠졌다.']);
    era.drawLine();
    await era.printAndWait([
      '그날 밤, 룸메이트보다 한발 먼저 기숙사 방으로 돌아온 ',
      ruby.get_colored_name(),
      '는 홀로 무언가를 중얼거리고 있었다.',
    ]);
    await ruby.say_and_wait('우리는, 무척 닮았어……');
    await ruby.say_and_wait('혈통, 그리고 『기적』이 우리에게 사명과 모두가 우러러보는 재능을 부여했지.');
    await ruby.say_and_wait('하지만 결정적인 한 가지 차이점이 있어, 그것은 바로……');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), ', 당신이 나아가려는 그 앞길은……']);
    await ruby.say_and_wait('그런 발걸음으로 계속 전진한다면, 미래에는 결국……');
    await ruby.say_and_wait([
      sys_get_colored_callname(85, 93),
      '는 진정 이대로도 아무런 미련이 없다는 건가?',
    ]);
    await me.used_to_say_and_wait('그게 정말로 옳은 걸까?');
    await me.used_to_say_and_wait('너는 케이에스 미라클이 정말 이대로도 괜찮다고 생각해?');
    await ruby.say_and_wait('결코 괜찮을 리가 없습니다.');
    await ruby.say_and_wait('저는, 절대로 용납할 수 없어요……');
    await era.printAndWait('그렇게 여름의 집단 훈련은 막연한 불안감 속에서 막을 내렸다.');
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    flags.wait_flag =
      get_attr_and_print_in_event(85, attr_change, 0) || flags.wait_flag;
  };
};