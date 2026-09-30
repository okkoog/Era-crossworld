/**
 * @file 系列事件 - 个人隐私安全
 * @author Mr.E.
 */
const {
  get,
  getAddedCharacters,
  input,
  printAndWait,
  printButton,
  set,
  waitAnyKey,
} = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const print_ero_page = require('#/page/page-ero');

const CustomizedEdu = require('#/event/edu/edu-common');
const { run_custom_ero } = require('#/event/ero/ero-factory');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { money_color } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedEdu {
  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_1(me, _me, _call, hook, _extra, event_object) {
    const chara_id = get_random_entry(
      getAddedCharacters().filter(
        (e) =>
          e > 0 &&
          get(`cflag:${e}:모집상태`) === recruit_flags.yes &&
          get(`love:${e}`) >= 70 &&
          get(`cflag:${e}:종족`) &&
          !sys_check_remote(e),
      ),
    );
    if (
      !chara_id ||
      get('flag:현재위치') !== location_enum.office ||
      get('item:갓짠모유') + get('item:갓짠마유') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    new MyEduMarks().milk_buyer = chara_id;
    await print_event_name('개인 정보 보안 (1?)', me);
    await printAndWait([
      '오늘 기상 후, ',
      me.get_colored_name(),
      '은(는) 개인 계정으로 메시지를 한 통 받았다. 상대는 앞으로의 모든 물건을 독점 구매하고 싶어 한다.',
    ]);
    printButton('「그냥 특이한 취향을 가진 사람이겠지…… 돈만 벌 수 있다면 상관없어.」', 1);
    printButton('「지정한 장소로 부쳐달라니…… 아무래도 수상해. 역시 그만두자.」', 2);
    if ((await input()) === 1) {
      await printAndWait([me.get_colored_name(), ' 앞으로 송금액이 도착했다.']);
      await printAndWait(
        '상대는 다음에도 같은 주소로 보내달라며, 물건이 들어오면 우선적으로 연락해 달라고 덧붙였다.',
      );
      const money = sys_change_money(
        (get('item:갓짠모유') * get('itemprice:갓짠모유') +
          get('item:갓짠마유') * get('itemprice:갓짠마유')) *
          1.2,
      );
      if (money > 0) {
        await printAndWait([
          '대금으로 ',
          {
            color: money_color,
            content: money.toLocaleString(),
            fontWeight: 'bold',
          },
          ' 우마코인을 받았다...',
        ]);
      }
      set('item:갓짠마유', 0);
      set('item:갓짠모유', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    } else {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 상대의 말투에서 수상함을 느꼈다. 게다가 배송 주소가 트레센 학원에서 그리 멀지 않은 곳이다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) 제안을 거절했지만, 상대는 포기하지 않은 듯 물건이 생기면 꼭 연락해 달라며 더 높은 가격을 제시했다.',
      ]);
      add_event(hook.hook, event_object.set_arg('privacy_2_2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_1(me, _me, _call, hook, _extra, event_object) {
    const chara_id = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('flag:현재위치') !== location_enum.office
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('개인 정보 보안 (2?!)', me);
    const chara = get_chara_talk(chara_id);
    await printAndWait([
      '트레이닝실 안에서 ',
      chara.get_colored_name(),
      '이(가) 스마트폰을 보고 있다가, ',
      me.get_colored_name(),
      '을(를) 발견하자마자 마치 무언가 숨기려는 듯 서둘러 집어넣었다.',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '의 스마트폰도 진동하며 메시지 도착 알림이 울렸다.',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '이(가) 코를 킁킁거리더니, ',
      me.get_colored_name(),
      '에게서 낯선 냄새가 나는 것 같다고 말했다.',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '은(는) 별로 신경 쓰지 않았다. ',
      chara.get_uma_sex_title(),
      '들은 원래 감각이 예민하니까.',
    ]);
    await printAndWait('……');
    await printAndWait([
      '물론, ',
      chara.get_colored_name(),
      '의 시선이 ',
      me.get_colored_name(),
      '이(가) 눈치채지 못하는 사이 기묘하게 변했다는 사실도 깨닫지 못했다.',
    ]);
    add_event(event_hooks.week_end, event_object.set_arg('privacy_3'));
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_2(me, _me, _call, hook, _extra, event_object) {
    const chara_id = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('flag:현재위치') !== location_enum.office ||
      get('item:갓짠모유') + get('item:갓짠마유') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('개인 정보 보안 (2!?)', me);
    await printAndWait([
      '상대방에게서 또다시 메시지가 왔다. 제발 ',
      me.get_colored_name(),
      '의 물건을 팔아달라고 간청하고 있다.',
    ]);
    await printAndWait(
      '그는 이런 종류의 상품에 대한 광적인 수집가인 듯 보였고, 마치 이것들을 어디에라도 급히 써야 하는 것처럼 매우 절박해 보였다.',
    );
    printButton('(요즘 수중에 돈이 좀 부족한데…… 역시 거래를 할까?)', 1);
    printButton('(……역시 너무 수상해. 무시하자.)', 2);
    if ((await input()) === 1) {
      await printAndWait([
        '돈이 없으면 아무것도 할 수 없는 법. 이쯤 되면 그 누구도 ',
        me.get_colored_name(),
        '을(를) 탓할 수 없을 것이다.',
      ]);
      await printAndWait([
        '최대한 정체를 숨기기로 다짐하며, ',
        me.get_colored_name(),
        '은(는) 상대의 제안을 수락하기로 했다.',
      ]);
      const money = sys_change_money(
        (get('item:갓짠모유') * get('itemprice:갓짠모유') +
          get('item:갓짠마유') * get('itemprice:갓짠마유')) *
          1.2,
      );
      if (money > 0) {
        await printAndWait([
          '대금으로 ',
          {
            color: money_color,
            content: money.toLocaleString(),
            fontWeight: 'bold',
          },
          ' 우마코인을 받았다...',
        ]);
      }
      set('item:갓짠마유', 0);
      set('item:갓짠모유', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    } else {
      await printAndWait(
        '이렇게 가까운 배송 주소에, 이런 절박한 말투라니. 역시 위험한 인물임이 틀림없다. 상대하지 않는 게 상책이다.',
      );
      await printAndWait([
        '그렇게 생각하며, ',
        me.get_colored_name(),
        '은(는) 상대를 차단 목록에 등록했다.',
      ]);
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_3(me, _me, _call, hook, _extra, event_object) {
    const my_marks = new MyEduMarks(),
      chara_id = my_marks.milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('cflag:0:위치') !== 0 ||
      get('flag:현재위치') === location_enum.basement ||
      !sys_check_awake(0) ||
      !sys_check_awake(chara_id) ||
      get('flag:잠자리파트너') > 0 ||
      !check_pregnant_unprotect(0) ||
      !check_pregnant_unprotect(chara_id)
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const chara = get_chara_talk(chara_id);
    await print_event_name('개인 정보 보안 (3?)', me);
    await printAndWait([
      '트레이닝이 끝난 후, ',
      chara.get_colored_name(),
      '이(가) ',
      me.get_colored_name(),
      '에게 시간이 있는지 물으며 함께 가고 싶은 곳이 있다고 제안했다.',
    ]);
    printButton('「마침 별다른 일정도 없으니, 같이 가자.」', 1);
    printButton('「역시 안 되겠어, 너무 늦었어.」', 2);
    if ((await input()) === 1) {
      await printAndWait([
        chara.get_colored_name(),
        '의 발걸음이 점점 가벼워졌지만, 가는 길이 ',
        me.get_colored_name(),
        '에게는 점점 익숙하게 느껴졌다.',
      ]);
      await printAndWait('이곳은 분명 저번에 그 구매자가 지정했던 배송 주소다!');
      await chara.say_and_wait([
        sys_get_colored_callname(chara.id, 0),
        ', 개인 정보 보안에 너무 소홀한 거 아니에요? 아무것도 밝히지 않았다고 생각하겠지만, IP 주소가 학원 내부로 찍히고 있었다고요~',
      ]);
      await chara.say_and_wait([
        '그래도 걱정 마세요, 제가 이미 ',
        sys_get_colored_callname(chara.id, 0),
        ' 대신 깔끔하게 처리했으니까요. 원래 여기 살던 녀석들이 ',
        sys_get_colored_callname(chara.id, 0),
        '에게 못된 짓을 하려고 꾸미고 있었거든요.',
      ]);
      await chara.say_and_wait([
        '하지만 ',
        sys_get_colored_callname(chara.id, 0),
        '이(가) 이번 일을 교훈 삼을 수 있도록, 몸으로 똑똑히 기억하게 해줘야겠어요——',
      ]);
      await chara.say_and_wait('———우리는 일심동체니까요.');
      await printAndWait('……');
      printButton(`${chara.sex}를 꼭 껴안으며 감사를 표한다. (호감도 +25)`, 1);
      printButton(`${chara.sex}를 데리고 돌아가서 제대로 감사한다.`, 2);
      if ((await input()) === 1) {
        sys_like_chara(chara.id, 0, 25) && (await waitAnyKey());
      } else {
        set('flag:잠자리파트너', chara.id);
      }
    } else if (get('talent:0:모유분비') === 3 || get('flag:징벌강도') === 3) {
      await printAndWait('손목에 부드러우면서도 거부할 수 없는 강한 힘이 느껴졌다.');
      await printAndWait([
        me.get_colored_name(),
        '은(는)',
        chara.get_colored_name(),
        '에게 이끌려 아직 잠기지 않은 트레이닝실로 끌려 들어갔고, 곧이어 문이 안에서 잠겼다.',
      ]);
      if (get('flag:징벌강도') === 3) {
        await chara.say_and_wait([
          '분명히 이 ',
          chara.get_uma_sex_title(),
          '의 소유물일 텐데.',
        ]);
        await chara.say_and_wait('아직도 그 몸에 대한 처분권이 자신에게 있다고 생각하는 건가요?');
        await chara.say_and_wait('당신의 입장이 어떤지 명확하게 해둘 필요가 있겠네요.');
        await chara.say_and_wait('왜 멍하니 보고만 있죠? 옷 정도는 알아서 벗어야 하는 거 아닌가요!');
        await printAndWait([
          '의미심장한 시선 아래, ',
          me.get_colored_name(),
          '은(는) 하나씩 옷을 벗기 시작했다.',
        ]);
        await printAndWait(
          '트레이너의 신분을 상징하는 배지부터, 마지막 보루인 속옷까지.',
        );
        await chara.say_and_wait('그게 끝인가요? 그런 잘못을 저질러 놓고……');
        await printAndWait([
          chara.get_colored_name(),
          '의 말이 끝나기도 전에, 임신 주머니가 되어버린 몸이 먼저 반응했다.',
        ]);
        await printAndWait([
          me.get_colored_name(),
          '은(는) 옷을 한쪽에 내팽개치고, 가장 정중한 도게자 자세로 은밀한 곳까지 전부 상대에게 드러내 보였다.',
        ]);
       await printAndWait(['온몸이 뜨거워……']);
        await printAndWait([
          chara.get_uma_sex_title(),
          '님께 꾸중을 들어서인가……',
        ]);
        await printAndWait('아니면, 본래 이렇게 다뤄지길 기대했기에 그런 일을 저지른 것일까?');
        await printAndWait('머릿속과 몸이 타오르는 듯해 더 이상 사고할 수 없다.');
        await printAndWait('이제는 오직 행동으로 사죄하는 법밖에 모른다.');
        await printAndWait('강제로 씌워진 귀마저 바닥에 엎드려 복종을 표했다.');
        begin_and_init_ero(0, chara_id);
        set('tflag:강간', set('tflag:주도권', chara_id));
        set(`tcvar:${chara_id}:임신주머니판매`, 1);
        await print_ero_page(chara_id, true);
        await end_ero_and_show_result(true);
      } else {
        await chara.say_and_wait([
          sys_get_colored_callname(chara_id, 0),
          '도 매일 그 몸 때문에 곤란해하고 있었죠? 다 알고 있다고요~',
        ]);
        await chara.say_and_wait('정말이지, 말만 하면 제가 도와줬을 텐데.');
        await printAndWait([
        me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '이(가) 이미 급하게 자신의 옷을 벗기 시작했다는 것을 느꼈다.',
        ]);
        await chara.say_and_wait(
          '매번 혼자 처리하느라 번거로웠죠…… 괜찮아요, 그런 날은 이제 끝났으니까. 오늘, 아니 앞으로도……',
        );
        await chara.say_and_wait('제가 정성껏 처리해 드릴게요.');
        await chara.say_and_wait(
          '인터넷 보안에 신경도 안 쓰고, 모유 판매 링크를 당당하게 걸어두다니.',
        );
        await chara.say_and_wait('이건 트레이너님이 욕구불만이라고 광고하는 거나 다름없잖아요?');
        await chara.say_and_wait('이제 몸의 힘을 빼도 좋답니다?');
        await printAndWait([
          me.get_colored_name(),
          '이(가) 무언가 변명하려 했지만, 이미 흥분한 ',
          chara.get_uma_sex_title(),
          '이(가) ',
          me.get_colored_name(),
          '의 말을 들어줄 리 만무했다.',
        ]);
        begin_and_init_ero(0, chara_id);
        set('tflag:강간', set('tflag:주도권', chara_id));
        if (get('talent:0:유두타입') === 2) {
          set('tcvar:0:유두돌출', 1);
        }
        await run_custom_ero(chara_id, ero_hooks.use_item, {
          item: item_enum.milk_pump,
          part: part_enum.breast,
        });
        await print_ero_page(chara_id, true);
        await end_ero_and_show_result(true);
      }
    } else if (get('flag:징벌강도') < 3) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '에 의해 트레이너 숙소까지 이끌려 왔다.',
      ]);
      await chara.say_and_wait([
        sys_get_colored_callname(chara_id, 0),
        ', 생활비를 벌기 위해 부업까지 해야 하다니 정말 고생이 많으시네요.',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '의 귀가 축 처졌다. 아무래도 ',
        me.get_colored_name(),
        '의 「사생활」에 대해 어느 정도 알고 있는 모양이다.',
      ]);
      await chara.say_and_wait(
        '어려운 일이 있으면 꼭 저한테 말씀해 주세요. 전 언제나 당신 편이니까요!',
      );
      await chara.say_and_wait([
        '저번에 ',
        sys_get_colored_callname(chara_id, 0),
        '이(가) 인터넷을 하다가 추적당한 적이 있었어요. 누군가 시비를 걸려고 했던 모양이더라고요.',
      ]);
      await chara.say_and_wait('하지만 걱정 마세요, 제가 다 해결해 뒀으니까요~');
      await chara.say_and_wait('힘든 일이 생기면 반드시 저한테 말해주기예요!');
      await printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        me.get_colored_name(),
        '을(를) 꼭 껴안아 주었다.',
      ]);
      if (get('cflag:0:키') - get(`cflag:${chara_id}:키`) > 20) {
        await printAndWait([
          '그 틈을 타 혀로 ',
          me.get_colored_name(),
          '의 목덜미를 핥는 바람에, ',
          me.get_colored_name(),
          '은(는) 간지러움에 몸을 떨었다.',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          '이(가) ',
          me.get_colored_name(),
          '의 목덜미에 얼굴을 묻고 깊게 숨을 들이켰다. 마치 이것이 ',
          chara.sex,
          '가 ',
          me.get_colored_name(),
          '을(를) 위해 사건을 해결해 준 보상인 것처럼.',
        ]);
      }
      await chara.say_and_wait([
        sys_get_colored_callname(chara_id, 0),
        ', 다음 주에 봐요. 푹 쉬세요!',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 그렇게 ',
        me.get_colored_name(),
        '을(를) 숙소 앞까지 배웅하고 작별 인사를 건넸다.',
      ]);
      sys_change_lust(chara_id, get_random_value(400, 800));
    }
    my_marks.milk_buyer = 0;
  }
};
