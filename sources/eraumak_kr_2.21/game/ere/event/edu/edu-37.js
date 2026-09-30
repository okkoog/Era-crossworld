/**
 * @file 에이신 플래시 - 育成
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedEdu = require('#/event/edu/edu-common');
const flash_race_end = require('#/event/edu/edu-events-37/race-end');
const flash_race_start = require('#/event/edu/edu-events-37/race-start');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { attr_enum, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-37/week-start-1'),
  require('#/event/edu/edu-events-37/week-start-2'),
].forEach((f) => f(week_start_handlers));

module.exports = class extends CustomizedEdu {
  async out_shopping(flash, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg !== 'black_treasure') {
      return;
    }
    if (era.get('flag:현재상호작용캐릭터') > 0 || !sys_check_awake(37)) {
      add_event(hook.hook, event_object);
      await era.printAndWait([
        flash.get_colored_name(),
        '가 이쪽을 꽤 신경 쓰는 눈치인데…… 나중에 혼자 외출했을 때 우연히 만나면 물어보자.',
      ]);
      await era.clear(1);
      return;
    }
    const your_name = me.name;
    EventMarks.get(0).sub(event_hooks.out_shopping);
    await print_event_name('칠흑의 보물', flash);
    await era.printAndWait(
      `혼자 쇼핑몰에서 생활용품을 사려던 중, ${your_name}은(는) 문득 근처에서 잔뜩 시무룩한 표정을 짓고 있는 에이신 플래시를 발견했다.`,
    );
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await flash.say_and_wait(`아, ${callname}.`);
    await era.printAndWait(`목소리의 주인이 ${your_name}인 것을 알아채자 에이신 플래시는 조금 놀란 듯했다.`);
    await flash.say_and_wait('아니요, 아무것도 아니에요.');
    await era.printAndWait(`그러더니 다음 순간, ${flash.sex}는 다시 고개를 저었다.`);
    await flash.say_and_wait(
      '그저 고향에서 먹었던 요리가 갑자기 생각나서, 일본에서 식재료를 찾아 재현해 보려고 했거든요.',
    );
    await flash.say_and_wait('다만……');
    await era.printAndWait('거기까지 말하자 에이신 플래시의 얼굴에 순식간에 고민하는 기색이 스쳤다.');
    await era.printAndWait(`그 상황을 예민하게 포착한 ${your_name}은(는) ${flash.sex}의 기분이 저조한 이유가 대충 짐작이 갔다.`,);
    era.printButton('「많이 비싸?」', 1);
    await era.input();
    await flash.say_and_wait('……네.');
    await era.printAndWait(`그 말에 ${flash.sex}는 잠시 침묵하더니, 이내 천천히 고개를 끄덕였다.`);
    await flash.say_and_wait(
      '요리를 만드는 데 필요한 고급 캐비아의 가격이, 제가 이번 달에 쓸 수 있는 용돈 범위를 초과해 버렸어요.',
    );
    await flash.say_and_wait(
      '다른 더 저렴한 브랜드로 대체할 수도 있겠지만, 그렇게 하면 제가 처음에 그리워했던 그 맛이 나질 않거든요.',
    );
    await era.printAndWait(`말을 마친 뒤, ${your_name}은(는) ${flash.sex}가 가볍게 한숨 쉬는 것을 보았다.`);
    await era.printAndWait(`지금 잔뜩 풀이 죽은 에이신 플래시를 보며 ${your_name}은(는) 결심했다——`);
    era.printButton('「순리에 맡긴다」', 1);
    if (era.get('flag:현재코인') > 50) {
      era.printButton(`「${flash.sex}에게 돈을 빌려준다」`, 2);
    }
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${your_name}의 마음속에 눈앞의 상대를 위해 상품을 대신 구매해 줄까 하는 생각도 스쳤지만, 곰곰이 생각해보면 에이신 플래시의 성격상 그런 제안을 받아들일 리 없었다.`,
      );
      await era.printAndWait(
        `결국 ${your_name}은(는) 그저 ${flash.sex}가 울상을 지으며 쇼핑몰을 떠나는 것을 지켜볼 뿐이었다.`,
      );
      era.println();
      sys_change_motivation(37, -1) && (await era.waitAnyKey());
    } else {
      await era.printAndWait(
        `${your_name}의 마음속에 눈앞의 상대를 위해 상품을 대신 구매해 줄까 하는 생각도 스쳤지만, 곰곰이 생각해보면 에이신 플래시의 성격상 그런 제안을 받아들일 리 없었다.`,
      );
      await era.printAndWait('하지만 그렇다고 방법이 없는 것은 아니었다.');
      era.printButton('「플래시, 내가 살게.」', 1);
      await era.input();
      await flash.say_and_wait('에?');
      await flash.say_and_wait(`${callname}, 그 말씀은…… 당신이 대신 지불해주시겠다는 뜻인가요?`);
      await era.printAndWait(`${your_name}의 제안에 에이신 플래시는 몇 초간 멍해졌다.`);
      await flash.say_and_wait('호의는 감사하지만, 역시 그런 일은 좀……');
      await era.printAndWait(
        `이내 제정신을 차린 ${flash.sex}는 격하게 고개를 저으며 강한 거부감을 드러냈다.`,
      );
      era.printButton('「그저 네 미래의 용돈을 미리 가불하는 것뿐이야.」', 1);
      await era.input();
      await era.printAndWait(
        `그 모습에 ${your_name}은(는) 에이신 플래시에게 「빌려주는 것」과 「그냥 주는 것」의 차이를 거듭 강조했다.`,
      );
      await era.printAndWait(
        `${your_name}은(는) 단순한 선물보다는 이런 공정한 형식이 ${flash.sex}에게 더 받아들이기 쉬울 것이라 믿었다.`,
      );
      await flash.say_and_wait('으음……');
      await era.printAndWait(
        `과연 ${your_name}의 말을 듣자 ${flash.sex}의 얼굴에 망설이는 기색이 떠올랐다.`,
      );
      await flash.say_and_wait('……알겠습니다.');
      await era.printAndWait(
        `결국 재차 고민한 끝에 ${flash.sex}는 고개를 끄덕이며 ${your_name}의 도움을 받아들였다.`,
      );
      await flash.say_and_wait('이 은혜는 꼭 잊지 않을게요.');
      await era.printAndWait(`${flash.sex}가 정중하게 말했다.`);
      await flash.say_and_wait('약속하겠습니다.');
      sys_change_money(-50);
      sys_get_billings().push({ creditor: 37, repay: 25, timer: 2 });
    }
    return true;
  }

  async out_start(flash, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 37) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 6) {
      return false;
    }
    const your_name = me.name;
    await print_event_name('만남의 꽃', flash);
    await era.printAndWait(
      `발렌타인데이가 다가오자, 올해 새로 출시된 초콜릿들을 구경하기 위해 에이신 플래시는 ${your_name}을(를) 근처 디저트 가게로 초대했다.`,
    );
    await era.printAndWait('하지만……');
    await say_by_passer_by_and_wait(
      `손님`,
      `잠깐만요, 분명 제가 먼저 왔는데—— 아야! 당신, 나랑 부딪혔잖아!`,
    );
    await say_by_passer_by_and_wait(
      '점원',
      '『초콜릿 바움쿠헨』을 구매하실 고객님은 이쪽으로 줄을 서 주세요. 아! 손님, 매장 내에서는 뛰시면 안 됩니다.',
    );
    await flash.say_and_wait('정말이지…… 아수라장이네요.');
    await era.printAndWait('북적이며 서로 밀치는 인파를 보며 에이신 플래시는 미간을 찌푸렸다.');
    await flash.say_and_wait(
      '이래서야 진열장 안의 디저트들을 자세히 조사할 수가 없겠어요. 조금 곤란하네요……',
    );
    era.printButton('「다른 가게로 갈까?」', 1);
    await era.input();
    await flash.say_and_wait(
      '……발렌타인이 코앞이라 아마 다른 곳도 상황은 비슷하겠죠.',
    );
    await era.printAndWait('그렇게 말하며 에이신 플래시는 가볍게 한숨을 내쉬었다.');
    await flash.say_and_wait(
      '뭐, 사실 원하는 상품은 이미 인터넷으로 미리 구매해 두었으니까요. 현장에서 실제 상태를 확인하지 못하는 게 아주 큰 문제는 아니에요.',
    );
    await flash.say_and_wait('그러니 지금은 일단 돌아가죠.');
    era.drawLine();
    await flash.say_and_wait(
      '사실 일본에 온 뒤로 매년 발렌타인 때마다 선물을 주고받느라 사람들이 다투는 광경을 볼 때면 조금 신기하다는 생각이 들어요.',
    );
    await era.printAndWait('트레센 학원으로 돌아가는 길에 에이신 플래시가 문득 감상을 털어놓았다.');
    era.printButton('「독일에는 그런 풍습이 없어?」', 1);
    await era.input();
    await flash.say_and_wait('정확히 말하자면 굳이 신경써서 챙기는 편은 아니에요. 그냥 그런 날이구나 하고 넘어가는 정도죠. 사랑을 표현한다면 언제든 할 수 있으니까요.');
    await era.printAndWait(
      `말을 이어가며 에이신 플래시는 검지 손가락 하나를 펴서 ${your_name}에게 설명하기 시작했다.`,
    );
    await flash.say_and_wait(
      '그리고 더 나아가서, 혹여나 선물을 준다고 해도 대상이 연인이 아닌 경우는 거의 없답니다.',
    );
    await flash.say_and_wait('즉, 이른바 「의리 초콜릿」 같은 건 없다는 뜻이죠.');
    era.printButton('「그렇구나.」', 1);
    await era.input();
    await era.printAndWait(
      '바꿔 말하면, 선물을 준다는 건 그 선물을 받는 대상이 분명 아주 소중한 존재라는 뜻이겠네.',
    );
    await era.printAndWait(`${your_name}은(는) 납득했다는 듯 고개를 끄덕였다.`);
    await flash.say_and_wait(
      '가까운 예를 들자면, 발렌타인데이에 가끔 아버지가 어머니께 드리는 장미 꽃다발을 본 적이 있거든요.',
    );
    await flash.say_and_wait('………');
    await era.printAndWait('거기까지 말하더니 왠지 모르게 에이신 플래시는 갑자기 침묵에 빠졌다.');
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 시선이 은연중에 당신을 힐끗 쳐다보는 것을 느꼈다.`,
    );
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await flash.say_and_wait('……아니요, 아무것도 아니에요.');
    await era.printAndWait('다시 입을 연 에이신 플래시는 가볍게 고개를 저었다.');
    await flash.say_and_wait('어쨌든 독일에서는 고백을 목적으로 선물을 주는 일은 없어요.');
    await flash.say_and_wait('그렇게 한다면, 그건 이미 두 사람이 훨씬 깊은 관계라는 뜻이니까요.');
    await flash.say_and_wait(
      '그런 관점에서 보면 오히려 일본에 발렌타인 날 고백하는 풍습이 있다는 게 저에게는 더 놀라워요.',
    );
    era.printButton('「일종의 분위기에 편승한 핑계 아닐까?」', 1);
    await era.input();
    await era.printAndWait(
      '고백은 용기가 필요한 행동이니까. 발렌타인 고백이라는 전통적인 풍습을 빌미 삼아, 성공하든 실패하든 관계를 변화시키는 그런 행위를 하기에 딱 적당한 거지.',
    );
    await flash.say_and_wait('진심을 전하기 위해 적절한 이유를 방패 삼는 건가요……');
    await flash.say_and_wait('후훗~~ 꽤 괜찮은 아이디어네요.');
    await era.printAndWait(
      '무언가 영감을 얻은 듯 에이신 플래시는 생각에 잠긴 표정으로 고개를 끄덕였다.',
    );
    await flash.say_and_wait(
      `아, 학원 정문이 보이네요. 그럼 전 다음에 처리해야 할 일이 있어서 이만 작별 인사를 드릴게요, ${callname}.`,
    );
    era.printButton('「조심해서 가.」', 1);
    await era.input();
    era.drawLine({ content: '발렌타인 당일' });
    await flash.say_and_wait(`안녕하세요, ${callname}.`);
    await era.printAndWait(
      `트레이닝실 문을 열자마자 ${your_name}은(는) 책상 옆 꽃병에 꽂힌 싱싱하고 아름다운 파란색 꽃 한 송이를 발견했다.`,
    );
    era.printButton('「이 꽃은 뭐야?」', 1);
    await era.input();
    await flash.say_and_wait('파란 수레국화예요. 독일의 국화라고 알려져 있는 꽃이죠.');
    await flash.say_and_wait('실제로 독일에 국화는 없지만, 독일인들을 빼면 많은 사람들이 그렇게 생각하고 있으니까요.');
    await era.printAndWait(`에이신 플래시는 미소 지으며 ${your_name}에게 설명했다.`);
    await flash.say_and_wait(
      '지난번에 당신과 헤어진 뒤 돌아가는 길에 곰곰이 생각해 봤어요. 결국 지금 있는 곳은 일본이니까, 전통적인 명절 부분에서는 로마에 가면 로마법을 따라야 한다고 느꼈거든요.',
    );
    era.printButton('「그럼 이게 네 발렌타인 선물이야?」', 1);
    await era.input();
    await flash.say_and_wait(
      `네. ${callname}은(는) 평소에 생화로 장식하는 습관이 없으시니까, 이걸 선물로 드리면 주변 환경도 화사해질 테고, 또……`,
    );
    era.printButton('「또?」', 1);
    await era.input();
    await flash.say_and_wait(
      '또 무심코 이 꽃을 보셨을 때, 어쩌면 이 꽃을 준 사람을 떠올리게 될지도 모르니까요.',
    );
    await flash.say_and_wait('후후훗——');
    await era.printAndWait('그 말을 마치고 에이신 플래시는 입을 가리고 웃었다. 꽤 즐거워 보이는 모습이었다.');
    era.set('cflag:37:축제이벤트표시', 0);
    sys_like_chara(37, 0, 100) && (await era.waitAnyKey());
    return true;
  }

  async race_end(flash, me, callname, hook, extra_flag) {
    return await flash_race_end.call(
      this,
      flash,
      me,
      callname,
      hook,
      extra_flag,
      super.race_end,
    );
  }

  async race_start(flash, me, callname, hook, extra_flag) {
    return await flash_race_start.call(
      this,
      flash,
      me,
      callname,
      hook,
      extra_flag,
      super.race_start,
    );
  }

  async train_fail(flash, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(flash, me, callname, hook, extra_flag);
    }
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    const your_name = me.name;
    if (extra_flag.fumble) {
      await print_event_name('무리는 금물', flash);
      await era.printAndWait('에이신 플래시의 트레이닝이 실패했다.');
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait('정말 죄송해요, 제가 부상을 입을 줄은 몰랐는데……');
      await era.printAndWait(`보건실 안에서 ${flash.sex}가 미안한 어조로 말했다.`);
      await flash.say_and_wait('하지만 이런 작은 부상 때문에 일정을 변경할 수는 없어요.');
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 고개를 저으며 다시 마음을 다잡으려 했다.`,
      );
      await flash.say_and_wait(
        '다행히 부상 정도가 받아들일 수 있는 범위 안이니까, 조금만 쉬면 계속 트레이닝할 수 있을 거예요.',
      );
      era.printButton('「일단 치료에 전념하자.」', 1);
      era.printButton('「정말로 계속할 수 있겠어?」', 2);
      let ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '의욕적으로 트레이닝하는 건 좋지만, 그것 때문에 자신을 무리하게 몰아붙여서는 안 된다.',
        );
        await flash.say_and_wait(
          '하지만 여기서 너무 많은 시간을 낭비하면 다음 계획들이 밀려버릴 가능성이 있어서……',
        );
        await era.printAndWait(
          `${your_name}의 제안에 에이신 플래시의 얼굴에 망설임이 서렸다.`,
        );
        era.printButton('「부상이 악화되면 상황은 더 나빠질 거야.」', 1);
        await era.input();
        await era.printAndWait(`그 모습에 ${your_name}이(가) 가볍게 한숨을 쉬며 말했다.`);
        await flash.say_and_wait('……');
        await era.printAndWait(`확실히 ${your_name}의 말이 눈앞의 상대를 일깨운 모양이었다.`);
        await era.printAndWait(
          `${flash.sex}는 고개를 떨구고 눈빛을 흔들며 득실을 따져보는 듯했다.`,
        );
        await flash.say_and_wait('알겠습니다……');
        await era.printAndWait(`잠시 후, ${flash.sex}의 몸에서 힘이 빠졌다.`);
        await flash.say_and_wait(
          '당신 말이 맞아요. 그렇다면 일단은 안심하고 치료에 전념할게요.',
        );
        hook.arg = 0;
      } else {
        await era.printAndWait(
          '의욕적인 건 좋지만, 플래시의 지금 상태로 계속하는 건 너무 무리 아닐까?',
        );
        await flash.say_and_wait(
          '음, 고강도 운동은 당장 무리겠지만 가벼운 러닝 정도는 소화할 수 있어요.',
        );
        await era.printAndWait(
          `${your_name}의 우려 섞인 질문에 ${flash.sex}는 자신 있게 대답했다.`,
        );
        await flash.say_and_wait('윽!');
        await era.printAndWait(
          `……하지만 다음 순간, ${your_name}은(는) ${flash.sex}가 너무 급하게 일어나려다 신음하는 것을 보았다.`,
        );
        era.printButton('「역시 제대로 치료받자.」', 1);
        await era.input();
        await era.printAndWait(`그 광경에 ${your_name}은(는) 가볍게 한숨을 내쉬었다.`);
        await flash.say_and_wait('네……');
        await era.printAndWait(
          '부정할 수 없는 사실이 눈앞에 닥치자, 마음속에 아무리 미련이 남았어도 에이신 플래시는 고개를 숙이고 받아들일 수밖에 없었다.',
        );
        if (Math.random() < extra_flag.args.ratio.fail_again) {
          hook.arg = -1;
        } else {
          hook.arg = 1;
        }
      }
    } else {
      await print_event_name('푹 쉬기', flash);
      await era.printAndWait('에이신 플래시의 트레이닝이 실패했다.');
      await flash.say_and_wait(
        '으윽, 제가 부주의했어요…… 준비운동을 좀 더 세심하게 했더라면…… 이런 결과를 피할 수 있었을지도 모르는데.',
      );
      await era.printAndWait(`트레이닝실 안에서 ${flash.sex}가 침울한 어조로 말했다.`);
      await flash.say_and_wait('이렇게 되면 이후의 계획들이 차질을 빚을 수도 있겠네요.');
      era.printButton('「조급해하지 말고 일단 푹 쉬자.」', 1);
      era.printButton('「무리하지 말고 일단 푹 쉬어.」', 2);
      let ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('급할수록 돌아가라는 말이 운동에도 똑같이 적용되는 법이다.');
        await era.printAndWait('휴식 없는 노력은 결국 불균형을 초래하고, 더 나쁜 결과를 낳을 뿐이다.');
        await flash.say_and_wait('으음……');
        await era.printAndWait(
          `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait('알겠습니다. 그럼 당신의 조언대로 일단 푹 쉴게요.');
        hook.arg = 0;
      } else {
        await era.printAndWait('급할수록 돌아가라는 말은 운동에도 똑같이 적용된다.');
        await era.printAndWait('무작정 무리하는 것은 상황을 악화시킬 뿐이다.');
        await flash.say_and_wait('으음……');
        await era.printAndWait(
          `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          '저는 이게 무리라고 생각하지는 않지만…… 당신 말씀이 맞네요.',
        );
        await flash.say_and_wait('그럼 당신의 조언대로 일단 푹 쉴게요.');
        if (Math.random() < extra_flag.args.ratio.fail_again) {
          hook.arg = -1;
        } else {
          hook.arg = 1;
        }
      }
    }
  }

  async train_success(flash, me, callname, hook, extra_flag) {
    const your_name = me.name;
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      const edu_marks = new FlashEduMarks();
      if (
        extra_flag.train === attr_enum.speed &&
        era.get('cflag:49:육성턴수합산') < 3 * 48 &&
        edu_marks.train_with_festa
      ) {
        const festa = get_chara_talk(49);
        await print_event_name('추가 트레이닝', flash);
        await era.printAndWait('에이신 플래시는 뛰어난 퍼포먼스로 이번 트레이닝 목표를 완수했다.');
        await era.printAndWait(
          `이제 쉬어도 될 법한 ${flash.sex}의 눈에 문득 운동장 한쪽에 서 있는 나카야마 페스타가 들어왔다.`,
        );
        await flash.say_and_wait('나카야마 씨, 지금 트레이닝 시간인가요?');
        await era.printAndWait(
          `상대가 잔뜩 나른한 표정을 짓고 있자 ${flash.sex}가 궁금한 듯 물었다.`,
        );
        await festa.say_and_wait('그래…… 그런데 도무지 의욕이 안 나네.');
        await era.printAndWait('나카야마 페스타는 어깨를 으쓱하며 대답했다.');
        await flash.say_and_wait('의욕이 안 난다고요?');
        await era.printAndWait('그 말에 에이신 플래시의 얼굴에 걱정스러운 기색이 떠올랐다.');
        await flash.say_and_wait('어디 몸이라도 안 좋은 건가요?');
        await festa.say_and_wait(
          '아니야. 그냥 혼자 하는 트레이닝은 자극이 부족해서 그래.',
        );
        await flash.say_and_wait('자극요?');
        await era.printAndWait(
          `상대의 말을 들은 ${flash.sex}는 무언가 생각하더니 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          '그렇다면 저와 함께 병주를 해보시는 건 어떠세요?',
        );
        await festa.say_and_wait('병주?');
        await era.printAndWait(
          '에이신 플래시의 제안에 나카야마 페스타의 얼굴에서 조금 전의 나른함이 사라지고, 흥미롭다는 듯한 미소가 번졌다.',
        );
        await festa.say_and_wait('그거 아주 재미있는 제안이네.');
        await festa.say_and_wait('어이, 거기 트레이너.');
        era.printButton('「?」', 1);
        await era.input();
        await era.printAndWait(
          `다음 순간, ${flash.sex}는 시선을 ${your_name}에게 돌렸다.`,
        );
        await festa.say_and_wait(
          `당장이라도 에이신 플래시를 끌고 시원하게 한 번 달리고 싶지만, ${
            flash.sex
          }는 네가 담당하는 ${flash.get_uma_sex_title()} 맞지?`,
        );
        await festa.say_and_wait('네 의견은 어때?');
        era.printButton('「다녀와, 플래시.」', 1);
        era.printButton('「이미 휴식 시간이야.」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await era.printAndWait(
            `에이신 플래시가 나카야마 페스타에게 뜨거운 자극이 될 레이스를 보여주고 싶어 한다면, ${flash.sex}가 원하는 대로 해주기로 했다.`,
          );
          await era.printAndWait(
            `${your_name}은(는) 에이신 플래시에게 손을 흔들어 ${flash.sex}를 응원했다.`,
          );
          await flash.say_and_wait('네!');
          await era.printAndWait('그 모습에 에이신 플래시는 고개를 끄덕였다.');
          await flash.say_and_wait('그럼 전력을 다할게요, 나카야마 씨!');
          await festa.say_and_wait('하하! 좋아, 그래야지!');
          await era.printAndWait(
            '그 말에 나카야마 페스타도 기대감이 섞인 호탕한 웃음을 터뜨렸다.',
          );
          await era.printAndWait('그렇게 두 사람은 코스로 달려나가 진지하게 병주 트레이닝에 임했다.');
        } else {
          await era.printAndWait(
            `에이신 플래시가 나카야마 페스타에게 뜨거운 레이스를 보여주고 싶어 했고, ${your_name} 역시 ${flash.sex}의 소원을 들어주고 싶었지만.`,
          );
          await era.printAndWait(
            '오늘의 운동량은 이미 충분했다. 과도한 트레이닝은 오히려 몸에 문제를 일으킬 수 있었다.',
          );
          await era.printAndWait(`${your_name}은(는) 에이신 플래시를 향해 고개를 저었다.`);
          await flash.say_and_wait('으음……');
          await era.printAndWait('그 모습에 에이신 플래시는 아쉬운 기색을 내비쳤다.');
          await flash.say_and_wait('알겠습니다. 오버 트레이닝은 확실히 좋지 않죠.');
          await flash.say_and_wait(
            '그렇다면 나카야마 씨, 우리 다음에 같이 달릴 수 있을까요?',
          );
          await era.printAndWait(
            '그렇게 에이신 플래시는 품 안에서 스케줄 수첩을 꺼내 나카야마 페스타와 약속한 날짜 위에 동그라미를 그렸다.',
          );
        }
        edu_marks.train_with_festa = 0;
      } else {
        return await super.train_success(flash, me, callname, hook, extra_flag);
      }
    } else if (
      era.get(`status:37:살찜`) > 0 &&
      Math.random() < 0.1 * extra_flag.stamina_ratio
    ) {
      await flash.say_and_wait('……어라?');
      await era.printAndWait(
        '어느 날, 정기 신체검사 중에 에이신 플래시는 체중계의 숫자가 이전보다 늘어난 것을 발견했다.',
      );
      await flash.say_and_wait('체중이…… 늘었다고요?');
      await era.printAndWait(`그 광경에 ${flash.sex}는 미간을 찌푸렸다.`);
      await flash.say_and_wait(
        '기존의 일정표 외에 추가적인 다이어트 계획을 넣어야겠네요.',
      );
      await era.printAndWait(`거기까지 생각한 ${flash.sex}는 고개를 끄덕였다.`);
      await era.printAndWait(
        '그렇게 한동안의 노력 끝에 에이신 플래시의 체중은 다시 정상으로 돌아왔다.',
      );
      era.set(`status:37:살찜`, 0);
      era.set(`base:37:체중 편차`, 2000);
    }
  }

  async week_end(flash, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      your_name = me.name;
    if (
      event_arg === 47 + 32 &&
      era.get('cflag:37:위치') === era.get('cflag:0:위치')
    ) {
      await print_event_name('마음을 나누는 대화 · 2', flash);
      await flash.say_and_wait([
        '(합숙이 끝나는 날에 답을 드릴게요. 그때까지는 원래 계획대로 진행해주세요.)',
      ]);
      await era.printAndWait(
        '트레센의 합숙 활동은 매우 짧아서 시작부터 끝까지 겨우 한 달의 기간뿐이다.',
      );
      await era.printAndWait(
        `그리고 그동안 ${your_name}은(는) 에이신 플래시의 상태가 끊임없이 요동치는 것을 느낄 수 있었다. 때로는 확신에 차고, 때로는 흔들리고. 때로는 ${your_name}을(를) 보며 활짝 웃다가도, 때로는 하늘을 보며 망연히 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `하지만 ${your_name}은(는) ${flash.sex}가 결국 이성적인 결단을 내릴 것이라 믿었다. 온갖 고된 훈련을 아무 불평 없이 견뎌온 이에게 이런 고민쯤은 아무것도 아닐 터였다.`,
      );
      await flash.say_and_wait(
        `${callname}, 혹시 오늘 저녁 17시부터 18시 사이에 시간 괜찮으신가요?`,
      );
      await era.printAndWait(
        `${your_name}의 기대에 부응하듯 에이신 플래시는 완벽한 답안지를 제출했다.`,
      );
      era.drawLine();
      await era.printAndWait('월말, 합숙소 근처의 해변.');
      await era.printAndWait(`에이신 플래시와 ${your_name}은(는) 함께 바닷가를 거닐고 있었다.`);
      await era.printAndWait('지금 저편 끝자락으로 석양이 서서히 가라앉고 있었다.');
      await era.printAndWait(
        '노을의 잔광이 찬란한 금빛을 뿜어내며 해안선 전체를 장엄한 화폭으로 물들였다.',
      );
      await flash.say_and_wait(
        '사실 10년 전 어릴 때는 지금처럼 모든 일에 정확함을 추구하는 성미가 아니었어요.',
      );
      await flash.say_and_wait(
        '7살 크리스마스 전날이었을 거예요. 집에 돌아왔더니 아버지가 독일의 크리스마스 전통 빵인 슈톨렌을 만들고 계셨죠.',
      );
      await era.printAndWait('말을 하며 에이신 플래시는 뒤돌아 이 절경을 묵묵히 바라보았다.');
      await era.printAndWait(`잠시 후, ${flash.sex}는 다시 입을 열었다.`);
      await flash.say_and_wait(
        '……만드는 과정에서 단 1그램의 오차도 허용하지 않는 아버지의 엄격하고 진지한 태도를 보게 됐어요. 당시엔 이해가 안 가서 궁금한 마음에 여쭤봤었죠.',
      );
      await flash.say_and_wait(
        '『아빠, 왜 그렇게까지 정확해야 해요? 설탕 양이 레시피랑 조금 달라도 맛은 별 차이 없을 텐데.』',
      );
      era.printButton('「정말 의외의 발언이네.」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name}이(가) 아는 그녀라면 도저히 상상할 수 없는 대충대충인 말이었다.`,
      );
      await flash.say_and_wait(
        '그렇죠. 그래서 그다음에 아버지가 해주신 말씀이 제 인생의 궤도를 바꿔놓았답니다.',
      );
      await era.printAndWait(
        `에이신 플래시는 고개를 끄덕였다. ${flash.sex}의 말투에는 그리움 섞인 감회가 담겨 있었다.`,
      );
      await flash.say_and_wait(
        '『당연히 품질 때문이란다, 플래시. 만약 오늘 이 정도의 오차를 눈감아주고 기준을 낮춘다면, 내일은 어떨까? 모레는?』',
      );
      await flash.say_and_wait(
        '한 번의 방심이 계속된 나태함으로 이어지고, 결국 돌이킬 수 없는 결과를 낳는다는…… 아주 단순하고 명쾌한 원리였죠, 안 그런가요?',
      );
      await flash.say_and_wait(
        '저는 아버지가 그저 그런 사실을 가르쳐주려 하시는 줄로만 알았어요. 하지만 그 뒤에 이어진 말씀은 당시의 제 이해 범위를 훨씬 뛰어넘는 것이었답니다.',
      );
      await era.printAndWait('거기까지 말하고 에이신 플래시는 고개를 숙여 손을 가슴에 얹었다.');
      await flash.say_and_wait(
        '『하지만 품질이 가장 중요한 건 아니란다. 레시피만 있다면 누구나 완벽한 디저트를 만들 수 있으니까.』',
      );
      await flash.say_and_wait(
        '『가장 핵심적인 건 바로 이 마음이란다. 다른 사람이 디저트를 통해 우리의 정성을 느끼게 하는 것, 그것이야말로 가장 중요한 일이란다.』',
      );
      era.printButton('「중요한 건 그 안에 담긴 진심이라는 거네?」', 1);
      await era.input();
      await flash.say_and_wait(
        '하지만 마음은 조미료가 아니기에 음식을 더 맛있게 만들어 주지는 못해요.',
      );
      await era.printAndWait(
        '에이신 플래시가 가볍게 탄식했고, 호수처럼 고요하던 눈동자에 뚜렷한 동요가 일었다.',
      );
      await flash.say_and_wait(
        '당시의 저는 아버지께 그렇게 대답했어요. 아버지는 제가 너무 어리다는 이유로 자세히 설명해 주지 않으셨고, 그저 나중에 시간이 흐르면 자연스럽게 이해하게 될 거라고만 하셨죠.',
      );
      era.printButton('「인생의 연륜과 맞닿아 있는 부분이네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네. 하지만 어린 시절의 저는 지기 싫어하는 마음이 앞서서 나중까지 기다릴 필요 없다고 생각했죠.',
      );
      await flash.say_and_wait(
        '부모님은 아이에게 가장 존경스러운 롤모델이잖아요. 그래서 부모님의 행동 방식을 흉내 내기만 하면 그 말씀을 쉽게 이해할 수 있을 거라 믿었어요.',
      );
      await flash.say_and_wait(
        '후후. 참 비현실적인 생각이었죠. 결국 지금까지도 아버지의 그 말씀을 완전히 깨닫지는 못했으니까요.',
      );
      await era.printAndWait(
        '에이신 플래시는 자조 섞인 가벼운 웃음을 터뜨렸다. 과거 자신의 유치했던 행동이 꽤나 우습게 느껴지는 모양이었다.',
      );
      await flash.say_and_wait(
        '그래도 그 모방과 학습의 과정에서, 모든 일에 엄격하고 공정하며 정밀하게 임한다는 게 얼마나 어려운 일인지 깨닫게 되었어요. 그래서 그런 삶을 일상으로 만들어온 아버지와 어머니를 더욱 존경하게 되었답니다.',
      );
      await flash.say_and_wait(
        '그렇기에 부모님이 저를 자랑스러워하셨으면 좋겠다는 마음이 자연스럽게 가슴 깊이 자리 잡게 된 거고요.',
      );
      era.printButton('「그게 모든 일의 시작이었구나?」', 1);
      await era.input();
      await flash.say_and_wait('맞아요, 그게 모든 일의 시작이었죠.');
      await era.printAndWait('말을 마친 에이신 플래시는 품에서 그 은색과 검은색이 섞인 훈장을 꺼냈다.');
      await flash.say_and_wait('그리고 저는 이곳에 왔고, 당신과 만났어요.');
      await era.printAndWait(
        `${flash.sex}는 그것을 한참 동안 응시했다. 석양이 마지막 빛을 거둘 때가 되어서야 그녀는 다시 입을 열었다.`,
      );
      await flash.say_and_wait(
        `……${flash.get_uma_sex_title()}로 태어나 경기장에서 달릴 수 있다는 건 정말 자랑스러운 일이라고 들었어요. 그래서 저는 이곳에서 영광을 쟁취하고, 당당하게 고향으로 돌아가고 싶었죠.`,
      );
      await flash.say_and_wait(
        '그것이 제가 달리는 원동력이었고, 지금까지 줄곧 집착해온 이유였어요.',
      );
      await flash.say_and_wait('하지만……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `에이신 플래시는 잠시 침묵했고, 동시에 ${your_name}은(는) ${flash.sex}의 손이 힘없이 늘어지는 것을 보았다.`,
      );
      await flash.say_and_wait(
        '실제로 그 길을 걷는 도중에, 그 마음은 조금씩 비뚤어진 의지로 변질되어 갔어요.',
      );
      await era.printAndWait(`${flash.sex}가 나직하게 속삭였다.`);
      await flash.say_and_wait(
        '합숙 첫날, 당신이 해주신 말씀을 듣고 문득 깨달았어요. 제 꿈은 사실 예전부터 저 혼자만의 것이 아니었다는 걸요.',
      );
      await flash.say_and_wait(
        '예전의 저는 그걸 이해하지 못했어요…… 그래서 늘 앞만 보고 혼자 달려가느라 당신의 생각은 안중에도 없었죠.',
      );
      await flash.say_and_wait(
        '저에게 주시는 당신의 도움은 그 무엇으로도 대체할 수 없는데. 우리는 당연히 일심동체의 관계여야만 했는데.',
      );
      era.printButton('「플래시……」', 1);
      await era.input();
      await flash.say_and_wait('돌이켜보면 당신에게 진 빚이 너무 많아요.');
      await flash.say_and_wait(
        '사츠키상 전의 발열 때도, 일본 더비 후의 다리 부상 때도, 당신은 저보다 한발 앞서 가장 깊은 곳까지 고려해 주셨죠. 제 건강을 최우선으로 스케줄을 다시 짜주셨고요.',
      );
      await flash.say_and_wait(
        '그런데 우습게도 저는 당신이 정성껏 준비한 그 모든 것을 무시하고, 오직 미래만을 떠들고 있었어요.',
      );
      await flash.say_and_wait(
        '……건강한 몸이 뒷받침되지 않는다면, 어떤 꿈도 그저 허망한 공상에 불과할 뿐인데……',
      );
      await era.printAndWait(
        '그렇게 말하며 에이신 플래시는 고개를 들어 어둑해진 하늘을 향해 깊은 한숨을 내뱉었다.',
      );
      await era.printAndWait(
        `그 모습에 ${your_name}은(는) 살짝 미간을 찌푸렸다. 에이신 플래시가 자신의 모든 노력을 부정하는 듯한 말을 하는 것을 원치 않았기 때문이다.`,
      );
      era.printButton('「무사히 회복한 건 네 스스로의 노력 덕분이야.」', 1);
      await era.input();
      await flash.say_and_wait(
        '후훗…… 당신은 이런 상황에서도 저를 위로해 주시는군요. 정말 다정한 분이에요.',
      );
      await era.printAndWait(
        `${flash.sex}는 ${your_name}의 말을 듣고 ${your_name}에게 살짝 미소 지었다.`,
      );
      era.printButton('「사실을 말했을 뿐이야.」', 1);
      await era.input();
      await era.printAndWait(`${your_name}이(가) 다시 한번 강조했다.`);
      await flash.say_and_wait('제 말도 사실인걸요.');
      await era.printAndWait(
        `에이신 플래시는 고개를 저으며 이 화제에 대해 더 이상 길게 논하지 않았다. ${flash.sex}는 그저 손을 뻗어, 월초에 ${your_name}이(가) 건네주었던 은색과 검은색의 훈장을 다시 ${your_name}에게 돌려주었다.`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name}은(는) 고개를 숙여 훈장을 한 번 보고, 다시 고개를 들어 ${flash.sex}를 보았다.`,
      );
      await flash.say_and_wait(
        '클래식 3관에 도전하는 목적은 꿈을 이루기 위해서지만, 꿈을 이루는 길이 클래식 3관 하나만 있는 건 아니었어요.',
      );
      await flash.say_and_wait(
        '사실 진작 깨달았어야 했는데, 스스로의 고집에 얽매여서 혼자 막다른 골목에 빠져 있었네요.',
      );
      era.printButton(
        '「네가 오랫동안 준비해온 계획이었으니, 그만큼 집착하는 것도 이해해.」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '하지만 계획은 유동적이어야 하죠. 고집만 부리는 건 오히려 미성숙함의 증거일 뿐이에요.',
      );
      await flash.say_and_wait('……어쩌면……');
      await era.printAndWait(
        `거기까지 말하자 에이신 플래시가 무언가 생각하듯 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '이렇게 오랜 시간이 흐르고서야 이 도리를 깨달은 제가, 이제야 겨우 아버지와 어머니께 조금 더 다가간 기분이 드네요.',
      );
      era.printButton('「너의 부모님도 네가 너만의 길을 개척하는 모습을 기쁘게 봐주실 거야.」', 1);
      await era.input();
      await flash.say_and_wait('당신 말씀이 맞아요.');
      await flash.say_and_wait(`그러니까, ${callname}.`);
      await flash.say_and_wait('후우……');
      await era.printAndWait(
        '다음 대화를 시작하기 전, 에이신 플래시는 깊게 숨을 들이마셨다. 이것은 지금부터 이어질 내용이 오늘 가장 중요한 본론임을 의미했다.',
      );
      await flash.say_and_wait('저, 올해의 재팬 컵에 출주하고 싶어요.');
      era.printButton('「!」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}는 ${your_name}의 눈을 똑바로 응시하며 한 자 한 자 자신의 생각을 전했다.`,
      );
      await flash.say_and_wait(
        `만약 몸 상태 때문에 동세대 최강의 ${flash.get_uma_sex_title()}들만이 이길 수 있는 국화상에 도전하지 못한다면, 그보다 더 높은 목표를 두어도 좋겠죠.`,
      );
      await flash.say_and_wait(
        '저의 최고의 상태로, 저보다 훨씬 경험이 많은 선배들에게 도전해 보고 싶어요.',
      );
      await flash.say_and_wait(
        `일본 더비를 제패한 제가, 과연 ${flash.sex}들에게 승리할 수 있을지 시험해 보고 싶습니다.`,
      );
      era.printButton('「너라면 분명 해낼 수 있을 거야.」', 1);
      await era.input();
      await flash.say_and_wait('후훗~');
      await era.printAndWait(
        `${your_name}의 망설임 없는 지지에 에이신 플래시가 화사하게 웃었다.`,
      );
      await flash.say_and_wait(
        '그러게요, 당신이 곁에서 지지해 주신다면 저는 분명 해낼 수 있겠죠.',
      );
      await era.printAndWait(
        `밤의 장막이 드리우기 시작한 해변에서, 이국에서 온 ${flash.get_teen_sex_title()}는 부드러운 표정으로 ${your_name}에게 왼손을 내밀었다.`,
      );
      await flash.say_and_wait('이제, 그 목표를 향해 노력해 나가요!');
      await era.printAndWait(
        `${flash.sex}의 어조에는 아주 깊은 신뢰가 담겨 있었다. 그것은 설령 하늘이 무너져도 결코 흔들리지 않을 굳건한 믿음이었다.`,
      );
      era.printButton('「응.」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name}은(는) 고개를 끄덕이며 자연스럽게 ${flash.sex}의 손을 맞잡았다.`,
      );
      await era.printAndWait(
        `의심할 여지 없이 이번 여름 합숙을 거치며 ${your_name}들의 미래는 더욱 찬란하고 멋진 불꽃을 피워낼 것이다.`,
      );
      era.println();
      era.set('status:37:염려', 0);
      await era.printAndWait([
        flash.get_colored_name(),
        '가 더 이상 ',
        {
          color: buff_colors[0],
          content: '[염려]',
          title: status_desc['염려'],
        },
        ' 하지 않게 되었다!',
      ]);
    } else if (
      event_arg === 95 + 32 &&
      era.get('cflag:37:위치') === era.get('cflag:0:위치')
    ) {
      await print_event_name('미래의 일 · 3', flash);
      await era.printAndWait('여름의 시간은 눈 깜짝할 새 흘러갔다.');
      await era.printAndWait(
        `이 마지막 여름 합숙 기간 동안 ${your_name}은(는) 에이신 플래시의 실력이 착실히 강해지는 것을 지켜보았다.`,
      );
      await era.printAndWait(
        `마치 마지막 조각을 채워 넣은 거울처럼, 지금의 ${flash.sex}는 상태가 완벽에 가까웠고 발휘할 수 있는 저력 또한 지난 몇 년 중 정점에 달해 있었다.`,
      );
      era.printButton(
        '（이 정도라면 가을 텐노상에서의 활약도 문제없겠어.）',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${your_name}은(는) 만족스럽게 고개를 끄덕였다. ${flash.sex}가 곧 꿈을 이룰 수 있게 되었다는 기쁨이 가슴 깊은 곳에서 차올랐다.`,
      );
      await flash.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `${your_name}의 표정이 평소와 조금 다른 것을 눈치챘는지, 훈련의 한 세션을 마친 에이신 플래시가 ${your_name}의 앞에 서서 고개를 갸웃하며 물었다.`,
      );
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await flash.say_and_wait(
        '요즘 당신이 저를 바라보시는 눈빛 속에 왠지 평소와는 다른 감정이 담겨 있는 것 같아서요.',
      );
      era.printButton('「나의 사명이 곧 달성될 것 같아서 그런가 봐.」', 1);
      await era.input();
      await flash.say_and_wait('사명을 달성한다고요?');
      era.printButton('「네 꿈이 이루어지는 걸 지켜보는 것.」', 1);
      await era.input();
      await era.printAndWait(
        `트레이너란 ${flash.get_uma_sex_title()}을(를) 돕고, 이끌고, 관리하여 결국 ${
          flash.sex
        }들에게 원만한 결말을 선사하는 존재다. 그렇기에 ${your_name}은(는) 자신의 말이 틀리지 않았다고 생각했다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `하지만 예상외로 그 말을 들은 에이신 플래시의 얼굴에는 기뻐하는 기색이 없었다. 오히려 그녀는 깊은 생각에 빠져들었다.`,
      );
      await flash.say_and_wait('그럼 그 후에는요?');
      await era.printAndWait(`한참 뒤에야 ${flash.sex}가 입을 열었다.`);
      era.printButton('「그 후에?」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name}은(는) 눈을 깜빡이며 에이신 플래시가 왜 이런 질문을 하는지 이해하지 못했다.`,
      );
      await flash.say_and_wait('바꿔 말하면, 당신의 꿈은 무엇인가요?');
      era.printButton('「당연히 네 꿈을 이루어주는 거지.」', 1);
      await era.input();
      await era.printAndWait(`${your_name}은(는) 반사적으로 대답했다.`);
      await flash.say_and_wait('후후.');
      await era.printAndWait(
        `${your_name}의 대답을 듣자 에이신 플래시는 가볍게 웃었다. 마치 ${your_name}이(가) 그렇게 대답할 줄 알았다는 듯이.`,
      );
      await flash.say_and_wait('아니요, 제가 알고 싶은 건 당신만의 꿈이에요.');
      await era.printAndWait(`다음 순간, ${flash.sex}는 고개를 저었다.`);
      await flash.say_and_wait('그런 사명 같은 걸 제외한, 당신의 진실한 마음요.');
      await era.printAndWait(
        `그렇게 말하는 에이신 플래시는 ${your_name}을(를) 뚫어지게 바라보았다. 그 푸른 눈동자 속에는 두 달 전 ${your_name}이(가) 이해하지 못했던 그 감정의 일렁임이 다시금 번뜩이고 있었다.`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 지금, 눈앞의 상대가 짓는 미세하게 변화하는 표정을 관찰하던 ${your_name}에게는 문득 새로운 생각이 떠올랐다.`,
      );
      era.printButton('「조금만 더 생각할 시간을 줘.」', 1);
      await era.input();
      await era.printAndWait(`${your_name}은(는) 결국 그렇게 대답했다.`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「플래시?」', 1);
      await era.input();
      await era.printAndWait(
        `트레센 학원으로 돌아가는 차 안에서 ${your_name}은(는) 에이신 플래시가 줄곧 한곳을 응시하고 있는 것을 발견했다.`,
      );
      await flash.say_and_wait('아무것도 아니에요. 그저 합숙 훈련장을 보고 있었어요.');
      era.printButton('「훈련장을?」', 1);
      await era.input();
      await flash.say_and_wait('네, 저기서 정말 많은 것을 배웠으니까요.');
      await flash.say_and_wait(
        `예를 들면 ${callname} 당신과 함께 많은 훈련을 겪으며 제 실력을 한층 더 끌어올렸던 것처럼요.`,
      );
      era.printButton('「그렇구나.」', 1);
      await era.input();
      await flash.say_and_wait(
        '그래서 이게 이곳에 오는 마지막일 수도 있다고 생각하니, 마음 한구석에 아쉬움이 남네요.',
      );
      era.printButton('「이 소중한 추억을 가슴에 깊이 새겨두자.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 표정이 미묘해지자 ${your_name}은(는) 그녀를 다독이며 말했다.`,
      );
      await flash.say_and_wait('네.');
      await era.printAndWait(
        `${flash.sex}는 고개를 끄덕이고는 바로 몸을 돌려 ${your_name}을(를) 보았다.`,
      );
      await flash.say_and_wait(`그러고 보니, ${callname}.`);
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await flash.say_and_wait(
        '만약 제가 꿈을 이룬 뒤에도 계속 일본에 남기로 한다면, 당신은 어떻게 생각하실 건가요?',
      );
      era.printButton('「……어?」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 갑작스러운 질문에 ${your_name}은(는) 허를 찔린 듯 당황했다.`,
      );
      await flash.say_and_wait(
        '부모님의 케이크 가게를 물려받는 건 이미 정해진 일이지만, 그 계획을 실현하는 도중에 어떤 이유로 일본에 한동안 머물게 될지도 모르니까요.',
      );
      await era.printAndWait(
        `자신의 질문이 너무 뜬금없었다는 걸 아는지 ${flash.sex}가 곧바로 부연 설명을 덧붙였다.`,
      );
      era.printButton('「정말 기쁠 것 같아.」', 1);
      await era.input();
      await flash.say_and_wait('!');
      await era.printAndWait(
        `그러자 다음 순간 ${your_name}의 솔직한 대답에 ${flash.sex}는 잠시 멍해졌다.`,
      );
      await flash.say_and_wait('기쁘다…… 고요?');
      era.printButton('「너의 달리는 모습을 계속 지켜볼 수 있을 테니까.」', 1);
      await era.input();
      await era.printAndWait(`${your_name}은(는) 고개를 끄덕이며 에이신 플래시에게 다정한 미소를 지어 보였다.`);
      await flash.say_and_wait('……그렇군요.');
      await era.printAndWait(
        `에이신 플래시는 침묵에 빠졌고, ${your_name}은(는) ${flash.sex}가 자신과 마주 보던 시선을 슬쩍 피하는 것을 보았다.`,
      );
      era.printButton('「……플래시?」', 1);
      await era.input();
      await flash.say_and_wait('……아니요, 아무것도 아니에요.');
      await era.printAndWait(`잠시 후, 다시 입을 연 ${flash.sex}는 고개를 저었다.`);
      await flash.say_and_wait(
        '그런 이야기는 나중에 다시 하도록 하죠. 어쨌든 지금 가장 중요한 건 가을 텐노상이에요.',
      );
      await era.printAndWait(
        `말을 마치는 ${flash.sex}의 얼굴에는 빠르게 확고한 의지가 서렸다.`,
      );
      await flash.say_and_wait('아버지와 어머니가 그곳에서 저를 기다리고 계시니까요——');
      era.printButton('「가슴을 펴고 나아가자.」', 1);
      await era.input();
      await flash.say_and_wait('네!');
    }
  }

  async week_start(flash, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        flash,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait: false },
      ret = await week_start_handlers[event_object.arg](
        flash,
        me.name,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait && (await era.waitAnyKey());
    return ret;
  }
};