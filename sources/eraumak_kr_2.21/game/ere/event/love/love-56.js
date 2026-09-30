/**
 * @file 마치카네 후쿠키타루 - 애정
 * @author ALEX
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const CustomizedLove = require('#/event/love/love-common');

module.exports = class extends CustomizedLove {
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async 25(kitaru, me, callname, stage, extra_flag, event_object) {
    const cur_chara = era.get('flag:현재상호작용캐릭터');
    if (cur_chara > 0 && cur_chara !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_event_name(`첫사랑의 설렘`, kitaru);
    await era.printAndWait([
      '어느 휴일, ',
      kitaru.get_colored_name(),
      '는 최근 일어난 일들에 대해 생각하고 있었다.',
    ]);
    await kitaru.say_and_wait(
      ['으음, ', callname, '을 생각하면 심장이 두근거리는 건 무슨 징조일까?'],
      true,
    );
    await kitaru.say_and_wait('음…… 분명 대길의 상태인 거겠지!', true);
    await kitaru.say_and_wait(
      ['역시나! ', callname, '은 점괘가 말한 대로, 내 운명의 사람이야!'],
      true,
    );
    await kitaru.say_and_wait('흐흥, 내 점괘는 틀리지 않으니까!', true);
    await kitaru.say_and_wait(
      '그렇다면, 앞으로도 계속 점괘를 따르면 나만의 행복을 찾을 수 있겠지?',
      true,
    );
    await kitaru.say_and_wait('정말 그런 걸까……?', true);
    await kitaru.say_and_wait(
      [
        '분명 ',
        callname,
        '이 내리는 지시는 가끔 점괘 결과와 완전히 일치하지 않을 때도 있는데, 어째서 나는……',
      ],
      true,
    );
    era.printButton('「마치카네 후쿠키타루?」', 1);
    await era.input();
    await kitaru.say_and_wait(['아! ', callname, ', 설마 여기서 만날 줄은 몰랐어요!']);
    await kitaru.say_and_wait('에! 저 말인가요?');
    await kitaru.say_and_wait(
      '으음…… 펜듈럼 점을 쳐보니, 여기가 생각하기에 아주 좋은 장소라고 나왔거든요!',
    );
    await kitaru.say_and_wait([callname, '은 뭘 하러 가는 길인가요?']);
    era.printButton('대답한다', 1);
    await era.input();
    await kitaru.say_and_wait('오! 마침 잘 됐네요, 그럼 같이 가요!');
    await kitaru.say_and_wait('네? 왜냐고요?');
    await kitaru.say_and_wait('그…… 그건……');
    await era.printAndWait([
      '스스로도 왜 갑자기 그런 말을 했는지 모르는 듯, 당황한 기색의 ',
      kitaru.get_teen_sex_title(),
      '가 무의식적으로 자신의 귀를 쓰다듬기 시작했다.',
    ]);
    era.printButton('「점괘 결과 때문에?」', 1);
    await era.input();
    await kitaru.say_and_wait('맞아요, 맞아요!');
    await era.printAndWait([
      me.get_colored_name(),
      '의 웃음 섞인 시선을 알아차린 듯, ',
      kitaru.get_colored_name(),
      '의 뺨이 발그레하게 물들었다.',
    ]);
    await kitaru.say_and_wait('어쨌든 같이 가면 운이 트인다고요!');
    await era.printAndWait([
      '그 후, ',
      kitaru.sex,
      '가 끈질기게 매달리는 바람에, 어쩔 수 없이 생필품을 사러 같이 가자는 요구를 들어주게 되었다.',
    ]);
    return true;
  }

  async 49(kitaru, me, callname) {
    await print_event_name('애욕', kitaru);
    if (kitaru.sex_code === 1) {
      await sys_love_uma_in_event(56);
      return;
    }
    await kitaru.print_and_wait([
      '어느 날 밤, 침대에 누운 ',
      kitaru.get_colored_name(),
      '는 오늘 점술로 어떻게 동급생의 고민을 해결해 주었는지 기분 좋게 떠올리고 있었다.',
    ]);
    await kitaru.say_and_wait(
      '그러고 보니, 요즘 다들 연애에 관한 점술을 꽤 많이 해달라 하네.',
      true,
    );
    await kitaru.say_and_wait('헤헤, 난 정말 연애 달인이라니까.', true);
    await kitaru.say_and_wait('에…… 연애라?', true);
    await kitaru.say_and_wait('그러고 보니, 내 연애 운세는 점쳐본 적이 없네……', true);
    await kitaru.say_and_wait(['……', me.get_colored_actual_name()], true);
    await kitaru.print_and_wait(
      '그저 화제를 떠올렸을 뿐인데, 자신의 트레이너의 모습이 뇌리에 스쳐 지나갔다.',
    );
    await kitaru.print_and_wait(
      '훈련할 때의 모습, 함께 점을 치던 모습, 그리고 자신의 운세 풀이를 도와주던 모습.',
    );
    await kitaru.print_and_wait(
      '평소에는 별다른 느낌이 없었는데, 지금 떠올려 보니 모든 세세한 부분들이 너무나도 선명했다.',
    );
    await kitaru.print_and_wait(
      '땀을 닦아줄 때 목덜미를 스치던 손가락, 마사지할 때 발바닥에 닿던 따스한 손바닥, 심지어 아이언 클로를 걸 때 귓가를 스치던 자극적인 느낌까지.',
    );
    await kitaru.print_and_wait(
      '룸메이트는 이미 꿈나라에 갔는지, 가벼운 코고는 소리까지 들려왔다.',
    );
    await kitaru.print_and_wait(
      '하지만 그녀는 여전히 잠을 이루지 못하고 뒤척였으며, 하복부는 미열이 감돌아 뜨거워졌다.',
    );
    await kitaru.print_and_wait(
      '이불을 걷어내자, 얇게 땀이 밴 두 다리는 이미 끈적하게 맞붙어 무릎 옆의 연한 살점을 서로 문지르고 있었다.',
    );
    await kitaru.say_and_wait('하아……');
    await kitaru.say_and_wait('역시 점을 쳐봐야겠어.');
    await kitaru.print_and_wait('침대 머리맡에 둔 타로 카드를 꺼내 들었다.');
    await kitaru.say_and_wait('간단하게 한 장만……');
    era.println();
    era.printButton('별 정위치 (관계 진전)', 1);
    era.printButton('세계 역위치 (관계 진전 중지)', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('마음이 가는 대로 흐름에 몸을 맡기라는 건가?');
      await kitaru.say_and_wait('에헤, 역시 당연한 결과네!');
      await kitaru.say_and_wait('결국 운명으로 정해진 사람이니까!');
      await kitaru.say_and_wait('으으……');
      await kitaru.print_and_wait('몸이 더욱 뜨겁게 달아올랐다.');
      await kitaru.print_and_wait(
        '이미 정해진 답이 점괘를 통해 긍정되자, 방금까지 타로 카드를 쥐고 있던 오른손은 어느새 잠옷 안으로 들어가 자신의 가슴을 어루만지고 있었다.',
      );
      await kitaru.print_and_wait(
        '손가락 끝이 가슴 옆선을 훑고, 다른 한 손은 하복부를 가볍게 압박하며 중지와 검지를 모아 이미 젖어버린 속옷 안으로 파고들었다.',
      );
      await kitaru.say_and_wait('아앗!');
      await kitaru.print_and_wait(
        '처음에는 서툰 손짓에 짧은 통증이 느껴졌지만, 이내 익숙해지며 짜릿한 쾌감이 몰려왔다.',
      );
      await kitaru.print_and_wait(
        '잠든 룸메이트에게 들키지 않으려 입술을 깨물었지만, 쾌감에 취해 깊숙이 삽입된 손가락은 멈출 수 없는 신음소리를 자아냈다.',
      );
      await kitaru.say_and_wait([me.get_colored_actual_name(), '……으으……']);
      await kitaru.print_and_wait([
        callname,
        '과 악수했을 때의 조금 거칠었던 검지를 떠올리며, 그 손가락이 자신의 몸 안에 들어왔을 때 얼마나 가차 없이 자신을 다룰지 상상했다.',
      ]);
      await kitaru.print_and_wait([
        '긁어내고, 마찰하고, 유혹하며 끝내 경련에 이를 때까지, 트레이너에게 발정해 버린 실격 ',
        kitaru.get_uma_sex_title(),
        '를 호되게 벌해주는 상상.',
      ]);
      await kitaru.say_and_wait([me.get_colored_actual_name(), '!']);
      await kitaru.say_and_wait('으응!!!');
      await kitaru.print_and_wait(
        '전신이 끊임없이 떨렸고, 순백색의 속옷은 뿜어져 나온 애액으로 엉망진창이 되었다.',
      );
      await kitaru.say_and_wait('에헤…… 좋아해요……');
      era.println();
      await sys_love_uma_in_event(56);
    } else {
      await kitaru.say_and_wait('하아……');
      await kitaru.say_and_wait('잠시 멈추라는 건가……');
      await kitaru.print_and_wait([
        '요동치는 몸을 억지로 참으며, ',
        kitaru.get_colored_name(),
        '는 이불을 머리까지 뒤집어썼다.',
      ]);
      await kitaru.print_and_wait([
        '하지만 다음 날 아침, 이미 푹 젖어버린 속옷과 발정으로 인해 꼿꼿이 선 유두는 ',
        kitaru.get_colored_name(),
        '의 꿈이 그녀의 바람만큼 평온하지 않았음을 증명했다.',
      ]);
      era.println();
      era.set('cflag:56:호감거절', 49);
      sys_change_motivation(56, -1);
    }
    begin_and_init_ero(56);
    await masturbate(56);
    end_ero_and_train();
  }

  async 74(kitaru, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('열애', kitaru);
      if (kitaru.sex_code === 1 || me.sex_code !== 1) {
        if (
          await select_yes_or_no(
            [
              kitaru.get_colored_name(),
              '가 ',
              me.get_colored_name(),
              '에게 고백했다…… 받아들일까?',
            ],
            '받아들인다 (관계 진전)',
            '거절한다 (관계 진전 중지)',
          )
        ) {
          await sys_love_uma_in_event(56);
        } else {
          era.set('cflag:56:호감거절', 74);
          await punish_rejecting_love(56);
        }
        return;
      }
      await kitaru.print_and_wait([
        '일상 훈련을 마치고, ',
        callname,
        '와 함께 사무실로 돌아왔다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '이 건네준 물컵을 받아 한꺼번에 들이키려 했지만, ',
        callname,
        '의 제지에 못 이겨 조금씩 조금씩 나누어 마셨다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '이 수건을 집어 들자 순순히 머리를 내밀면서도, 무심코 운동복 지퍼를 내려 땀에 젖은 셔츠 아래로 비치는 가슴을 ',
        callname,
        '에게 슬쩍 내보였다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '이 당황하며 고개를 돌리는 것을 보고는, 고의로 ',
        me.sex,
        '의 팔을 붙잡으며 다음 훈련 계획에 대해 물었다.',
      ]);
      await kitaru.print_and_wait('사무실 안에는 묘한 기류가 끊임없이 감돌았다.');
      await kitaru.print_and_wait([
        '비록 마지막에는 선을 넘는 행동 때문에 ',
        callname,
        '의 아이언 클로 세례를 받곤 했지만 말이다.',
      ]);
      await kitaru.print_and_wait('……');
      await kitaru.print_and_wait([
        '처음 ',
        callname,
        '을 만났을 때의 나는 어떤 마음이었을까?',
      ]);
      await kitaru.print_and_wait('죽어가는 사람이 유일하게 보이는 구명줄을 붙잡은 심정?');
      await kitaru.print_and_wait('난파된 배의 잔해를 붙잡은 오디세우스?');
      await kitaru.print_and_wait('영지버섯을 먹고 죽음을 면한 신농?');
      await kitaru.print_and_wait('혹은, 스사노오노 미코토를 만난 아마테라스 오미카미?');
      era.printButton(
        `「${sys_get_callname(0, 56)}, 자료 좀 제출하고 올 테니까 잠시 쉬고 있어……」`,
        1,
      );
      await era.input();
      await kitaru.print_and_wait([
        '달콤하고 끈적한 분위기에서 갑자기 끌려 나오자, ',
        kitaru.get_colored_name(),
        '에게 남은 것은 공허함뿐이었다.',
      ]);
      await kitaru.print_and_wait([
        callname,
        '의 외투가 걸린 의자에 멍하니 앉아, 아무도 없는 사무실을 응시했다.',
      ]);
      await kitaru.print_and_wait([
        '펜듈럼, 주사위, 호박…… 온갖 핑계로 ',
        callname,
        '에게 선물했던 점술 도구 중에는 타로 카드도 당연히 포함되어 있었다.',
      ]);
      era.println();
      era.printButton('연인 정위치 (관계 진전)', 1);
      era.printButton('달 정위치 (관계 진전 중지)', 2);
      if ((await era.input()) === 1) {
        await kitaru.print_and_wait('전혀 뜻밖이 아니었다.');
        await kitaru.say_and_wait('좋아해요……');
        await kitaru.say_and_wait(['좋아해요, ', callname, '……']);
        await kitaru.print_and_wait([
          '몇 번이고 반복한 뒤에도 여전히 ',
          me.get_colored_actual_name(),
          '의 이름을 웅얼거리며, 자신의 참배길에 이 ',
          me.get_phy_sex_title(),
          '이 난입했다는 사실을 선포했다.',
        ]);
        await kitaru.print_and_wait(
          '사랑하는 사람의 체취에 둘러싸여, 훈련이 끝난 후 서서히 식어갔어야 할 몸은 오히려 더 뜨겁게 달아오르기 시작했다.',
        );
        await kitaru.say_and_wait('하아…… 후우……');
        await kitaru.print_and_wait([
          '의자 등받이에 걸린 외투의 소매 끝을 코끝에 가져다 대고, 한쪽 손은 땀 때문인지 다시금 젖어버린 속옷 안으로 미끄러져 들어갔다.',
        ]);
        await kitaru.say_and_wait([me.get_colored_actual_name(), '……']);
        await kitaru.print_and_wait([
          callname,
          '의 이름을 부르며, 끈적해진 비소 안에서 손가락을 휘저어 내벽을 헤집었다.',
        ]);
        await kitaru.say_and_wait([
          me.get_colored_actual_name(),
          '……',
          me.get_colored_actual_name(),
          '~❤️',
        ]);
        await kitaru.print_and_wait([
          me.get_colored_actual_name(),
          '의 체취가 가득한 외투를 입에 문 채 거칠게 숨을 몰아쉬었고, 입가에서는 타액이 흘러내렸다.',
        ]);
        await kitaru.print_and_wait([
          '만족할 수 없다는 듯 손가락의 움직임은 더욱 격렬해졌고, 마침내 어느 순간 흐릿해진 주황빛 눈동자가 커지며 몸을 활처럼 휘게 만들었다.',
        ]);
        await kitaru.say_and_wait('으읏❤️…… 이이익❤️!!!');
        await kitaru.print_and_wait(
          '애초에 수분을 흡수하도록 설계되지 않은 트레이닝 바지는 쏟아져 나온 애액을 막지 못했고, 그렇게 사무실 의자 위에는 얼룩이 남았다.',
        );
        await kitaru.print_and_wait([
          kitaru.get_colored_name(),
          '의 이런 상스러운 ',
          kitaru.get_uma_sex_title(),
          '다운, 지독한 냄새가 사무실 전체에 가득 퍼졌다.',
        ]);
        await kitaru.print_and_wait([
          '어떻게 해야 할까. ',
          callname,
          '이 분명 눈치챌 텐데.',
        ]);
        era.drawLine();
        era.printButton('문을 연다', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 돌아오자, ',
          kitaru.get_colored_name(),
          '는 안절부절못하며 ',
          me.get_colored_name(),
          '에게 사과하기 시작했다.',
        ]);
        await kitaru.say_and_wait(['아아악! ', callname, '! 정말 죄송해요!']);
        await kitaru.say_and_wait('그냥 커피를 타 드리려고 했을 뿐인데!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 거의 커피에 절다시피 한 하반신 옷들은, 마찬가지로 젖어버린 의자 및 외투와 함께 ',
          kitaru.get_uma_sex_title(),
          '의 체온으로 가열되어 커피 향기를 풍기고 있었다.',
        ]);
        era.printButton('「괜찮아?」', 1);
        await era.input();
        await kitaru.say_and_wait('……괘…… 괜찮아요.');
        await era.printAndWait([
          '다행히 그때 커피가 이미 식어 있었기에 망정이지, 아니었으면 ',
          kitaru.get_colored_name(),
          '가 화상을 입을 뻔했다.',
        ]);
        sys_change_motivation(56, 1);
        add_event(event_hooks.week_start, event_object);
      } else {
        await kitaru.say_and_wait('하아……');
        await kitaru.say_and_wait(
          '점술에서 달이 나오는 건 대개 당사자가 불안, 미혹, 공포를 느끼고 있다는 거지. 미래에 대한 막막함이나 낯선 상황에 대한 불안함 같은 거.',
        );
        await kitaru.print_and_wait('두려움을 품고, 자신감 없이 불안하고 감정적인 상태.');
        await kitaru.print_and_wait([
          '이런 내가 과연 ',
          callname,
          '의 사랑을 받을 자격이 있을까?',
        ]);
        era.set('cflag:56:호감거절', 74);
      }
    } else if (stage === event_hooks.week_start) {
      if (era.get('cflag:0:위치') > 0 || era.get('cflag:56:위치') > 0) {
        add_event(stage, event_object);
        return;
      }
      await print_event_name('고백', kitaru);
      await era.printAndWait('똑, 똑, 똑');
      await kitaru.say_and_wait([callname, '!']);
      await era.printAndWait([
        '평소와 다름없이, ',
        kitaru.get_colored_name(),
        '라는 이름의 소녀가 다시금 ',
        me.get_colored_name(),
        '의 집 문을 두드렸다.',
      ]);
      await era.printAndWait([
        '그렇다, ',
        me.get_colored_name(),
        '의 사무실도, 트레센 학원 기숙사 문도 아니었다.',
      ]);
      await era.printAndWait([
        '처음에는 그저 그녀의 행운 아이템들을 대신 보관해주다 보니 ',
        me.get_colored_name(),
        '의 집 주소를 알게 된 것뿐이었다.',
      ]);
      await era.printAndWait([
        '그 이후로는 행운 아이템뿐만 아니라, 단순히 훈련 계획을 묻거나, 놀러 가자고 하거나, 심지어 「오늘은 대길이라서」 같은 막연한 이유만으로 ',
        me.get_colored_name(),
        '을(를) 찾아오게 되었다.',
      ]);
      await era.printAndWait('어느새 여분의 슬리퍼 하나, 컵 하나, 그릇 하나가 더 준비되어 있었다.');
      await era.printAndWait([
        me.get_colored_actual_name(),
        '(이)라는 트레이너의 삶은 이미 ',
        kitaru.get_colored_name(),
        '의 흔적들로 가득했다.',
      ]);
      await era.printAndWait('똑, 똑, 똑');
      await kitaru.say_and_wait([callname, '! 안에 있어요?']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 기다리다 못해 조금 조바심이 난 모양이다.',
      ]);
      era.printButton('문을 연다', 1);
      await era.input();
      await era.printAndWait([
        '만약 ',
        me.get_colored_name(),
        '과(와) 혈연관계가 없는 이성이 있다고 가정해보자.',
      ]);
      await era.printAndWait([
        '매일 같이 ',
        me.get_colored_name(),
        '에게 딱 붙어 있고, 자유롭게 ',
        me.get_colored_name(),
        '의 집을 드나들며, 평일에는 학원 기숙사에 살면서도 굳이 밖에서 만날 때는 격식을 차려 약속을 잡는다면, 두 사람은 어떤 관계일까?',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 문을 열었다.']);
      await kitaru.say_and_wait([callname, '!']);
      await era.printAndWait([
        '문앞에는 승부복 차림의 ',
        kitaru.get_colored_name(),
        '가 서 있었다.',
      ]);
      await era.printAndWait('청백색의 세일러복은 그녀의 아름다운 몸매를 잘 드러내 주었다.');
      await era.printAndWait(
        '뛰어온 탓인지, 노출된 양어깨에는 미세한 땀방울이 맺혀 있었다.',
      );
      await era.printAndWait(
        '그 아래로 니플 패치만 붙인 매혹적인 가슴이 하얀 옷 위로 뚜렷한 형태를 그리며 호흡에 맞춰 오르내리고 있었다.',
      );
      await era.printAndWait([
        '트레이너인 ',
        me.get_colored_name(),
        '은(는) 잘 알고 있었다. ',
        kitaru.get_uma_sex_title(),
        '들은 오직 매우 중요한 자리에서만 이런 복장을 입는다는 것을.',
      ]);
      await kitaru.say_and_wait('저기……');
      await kitaru.say_and_wait('안으로 들여보내 주시겠어요?');
      await era.printAndWait([
        '그녀가 ',
        me.get_colored_name(),
        '을(를) 올려다보자, 주황빛 눈동자에는 이미 촉촉한 안개가 서려 있었다.',
      ]);
      await era.printAndWait(
        '이어진 식사 시간, 일부러 고개를 젖혀 음식을 삼키는 동작은 팽팽하게 당겨진 세일러복 아래 묵직한 유방을 더욱 돋보이게 했다.',
      );
      await era.printAndWait(
        '식사 후 휴식 시간, 소파에 앉은 그녀가 하얀 스타킹을 신은 두 다리를 꼬고 문지르자 허리춤에 달린 에마가 부딪히며 소리를 냈다.',
      );
      await era.printAndWait([
        '이미 심야였지만, ',
        kitaru.get_colored_name(),
        '는 여전히 돌아가겠다는 말을 하지 않았고, 방 안에는 어색한 침묵이 흘렀다.',
      ]);
      await kitaru.say_and_wait([me.get_colored_actual_name(), '……']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 이름을 부르며, ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 곁으로 다가와 앉았다.',
      ]);
      await kitaru.say_and_wait(['저기, ', callname, '도 알고 계시죠…… 좋아해요……']);
      await kitaru.say_and_wait(
        '분명 당신께 그렇게나 많은 폐를 끼쳤는데도, 여전히 제 운세를 쫓는 여정에 함께해주셔서……',
      );
      await kitaru.say_and_wait('참 따뜻했어요…… 저에게 많은 행운을 가져다주셨죠.');
      await kitaru.say_and_wait('그러니까, 괜찮으시다면 저도 보답하게 해주세요……');
      await kitaru.say_and_wait('부디 이 후쿠짱을 당신만의 행운 아이템으로 만들어 주세요.');
      await era.printAndWait([
        '곁에 앉은 ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 손을 꽉 쥐었다. ',
        kitaru.get_uma_sex_title(),
        '의 조금 높은 체온이 그녀의 손바닥을 통해 끊임없이 전해졌다.',
      ]);
      era.printButton('받아들인다', 1);
      era.printButton('거절한다', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('츄우…… 츄릅…… 푸하…… 츄릅……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 고개를 들어 올리게 하고, 혀와 혀가 떨어지기 아쉬운 듯 긴밀하게 얽히며 타액이 실처럼 늘어졌다.',
        ]);
        await kitaru.say_and_wait('으음…… 응……');
        await era.printAndWait(
          '잠시 떨어졌다가 다시 이어지는 정욕을 부추기는 깊은 입맞춤을 통해 담당의 숨결을 마음껏 느꼈다.',
        );
        await era.printAndWait([
          '손가락을 교차해 깍지를 끼고, ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '를 소파 위로 밀어트렸다.',
        ]);
        era.set('flag:현재위치', location_enum.home);
        await quick_into_sex(56);
        await sys_love_uma_in_event(56);
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '를 트레센 학원으로 돌려보냈다……',
        ]);
        sys_change_motivation(56, -2);
        await punish_rejecting_love(56);
        era.set('cflag:56:호감거절', 74);
      }
    }
  }

  async 89(kitaru, me, callname) {
    if (kitaru.sex_code === 1) {
      await sys_love_uma_in_event(56);
      return;
    }
    await print_event_name('천생연분', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 귀가 큰 ',
      kitaru.get_uma_sex_title(),
      '가 성욕이 강하다는 말을 들은 적이 있다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 장거리를 뛰는 ',
      kitaru.get_uma_sex_title(),
      '가 성욕이 강하다는 말도 들은 적이 있다.',
    ]);
    await era.printAndWait('전에는 의구심이 들었을지도 모르지만……');
    await era.printAndWait([
      '지금의 ',
      kitaru.get_colored_name(),
      '는 의심의 여지 없이 위 가설들의 증거가 되어 있었다.',
    ]);
    await era.printAndWait(
      '몸에 이미 정액의 흔적이 가득하고, 몇 장의 사용한 콘돔이 장식처럼 몸에 걸쳐져 있으며, 비소에서는 농후한 정액이 쉼 없이 흘러나오고 있었다.',
    );
    await era.printAndWait([
      '그런 상태가 되어서도 이 요염한 밤색 머리카락의 소녀는 토막 난 언어로 ',
      me.get_colored_name(),
      '에게 구애의 목소리를 내고 있었다.',
    ]);
    await kitaru.say_and_wait('으으……');
    await kitaru.say_and_wait('❤️대길이에요❤️');
    era.drawLine({ content: '잠시 후'});
    await era.printAndWait(
      '행위를 할 때는 뒷정리가 얼마나 번거로울지 전혀 고려하지 않았기에, 끈적한 체액이 묻은 교복과 트레이너 제복이 덜컹거리는 세탁기 속에 던져졌다.',
    );
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 갈아입을 옷을 가져왔었겠지……',
    ]);
    await kitaru.say_and_wait([callname, '!']);
    await kitaru.say_and_wait('기분…… 어떠신가요?');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 맨발로 바닥을 딛고 서 있었고, ',
      me.get_colored_name(),
      '의 셔츠가 그녀의 몸에 걸쳐져 있었다.',
    ]);
    await era.printAndWait([
      '목욕 후의 열기와 함께, 그녀는 ',
      me.get_colored_name(),
      '의 앞에서 한 바퀴 빙그르르 돌았다.',
    ]);
    await era.printAndWait(
      '맞지 않는 옷…… 소매를 두세 번 접어 올린 뒤에야 손이 드러났고, 셔츠 자락은 허벅지까지 내려왔으며, 평소 옷에 가려져 있던 가슴이 만든 깊은 골은 말할 것도 없었다.',
    );
    await era.printAndWait(
      '하지만 그렇기에 꼬리를 살짝 흔들기만 해도 그 아래 가려진 중요한 부위가 쉽게 보였다.',
    );
    era.printButton('「감기 조심해.」', 1);
    era.printButton('「잘 어울려……」', 2);
    await era.input();
    await era.printAndWait([
      '그런 평가를 들은 ',
      kitaru.get_colored_name(),
      '의 꼬리가 더욱 격렬하게 흔들렸고, ',
      kitaru.get_uma_sex_title(),
      '를 위해 설계되지 않은 옷자락이 위로 들려 올라갔다.',
    ]);
    await era.printAndWait('방금 전 격렬한 정사로 인해 남겨진 흔적들이 선명하게 보였다.');
    await era.printAndWait('……언제부터 이런 것에 익숙해진 걸까.');
    await era.printAndWait(
      '우마뾰이는 갈수록 격렬해졌고, 방금 전 마지막에는 후쿠키타루의 기분은 전혀 배려하지 않은 채 그저 오나홀처럼 취급하며 삽입을 반복했다.',
    );
    era.printButton('「방금 느낌은 어땠어?」', 1);
    era.printButton('「다음에는 좀 더 부드럽게 해줄까?」', 2);
    await era.input();
    await kitaru.say_and_wait(['에…… 왜 ', callname, '이 그런 걸 물으시나요?']);
    await kitaru.say_and_wait('음, 싫지는 않았어요……');
    await kitaru.say_and_wait('오히려 아주 좋았달까……');
    await era.printAndWait([
      '아마도 ',
      kitaru.get_colored_name(),
      '에게는 이런 거칠고, 강압적이며 심지어 어느 정도 굴욕적인 성애의 과정에서 더 강렬한 안도감과 만족감을 얻는 모양이었다.',
    ]);
    await kitaru.say_and_wait([
      '그러니까…… ',
      callname,
      ', 앞으로도 마음껏 후쿠를 사용해 주세요.',
    ]);
    era.println();
    add_jewel_reward(56, '순종', 100);
    if (era.get('talent:56:음란한몸') !== 2) {
      era.set('talent:56:음란한몸', 2);
      era.print([
        kitaru.get_colored_name(),
        '가 ',
        {
          color: buff_colors[2],
          content: '[음란한몸]',
        },
        '이 되었다!',
      ]);
    }
    await sys_love_uma_in_event(this.id);
  }

  async 99(kitaru, me, callname) {
    await print_event_name('의존', kitaru);
    if (kitaru.sex_code === 1 || me.sex_code === 0) {
      await sys_love_uma_in_event(56);
      return;
    }
    await kitaru.print_and_wait([
      '오늘은 거의 하루 종일 ',
      callname,
      '과 함께 신사에서 바쁘게 보냈다.',
    ]);
    await kitaru.print_and_wait([
      '평소 무서울 것 없던 ',
      callname,
      '이 처음 해보는 일에 서툰 모습을 보이는 것이 떠올라 웃음이 터져 나왔다.',
    ]);
    await kitaru.print_and_wait([
      '웃음소리는 당연히 ',
      callname,
      '의 시선을 끌었다.',
    ]);
    await kitaru.say_and_wait('응……');
    era.drawLine({ content: '몇 분 후'});
    era.printButton('손을 뻗는다', 1);
    await era.input();
    await kitaru.print_and_wait([
      callname,
      '의 손이 허리와 엉덩이를 훑고 지나가 내 오금까지 닿았다.',
    ]);
    await kitaru.say_and_wait('하아……');
    await kitaru.print_and_wait([
      '다리에 힘이 풀려, 나는 ',
      callname,
      '의 신호에 따라 엉덩이를 치켜든 채 본전 안의 벽에 엎드렸다.',
    ]);
    era.printButton('옷을 벗긴다', 1);
    await era.input();
    await kitaru.print_and_wait(
      '이윽고 무녀의 상징인 하카마가 바닥에 떨어지는 것을 지켜보며, 둔부에 닿는 뜨거운 물건을 느꼈다.',
    );
    await kitaru.print_and_wait(
      '다리를 오므리자 끈적한 액체가 허벅지를 타고 흘러내리는 것이 느껴졌고, 하복부의 짜릿함은 더욱 심해졌다.',
    );
    era.printButton('삽입', 1);
    await era.input();
    await kitaru.print_and_wait('두 사람의 궁합을 맞추는 육봉 점치기가 시작되었다.');
    era.drawLine();
    await kitaru.say_and_wait('하아아……');
    await era.printAndWait([
      '오늘, ',
      kitaru.get_colored_name(),
      '는 평소와는 다르게 먼저 ',
      me.get_colored_name(),
      '에게 구애해왔다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 그저 삽입했을 뿐인데도, 담당 ',
      kitaru.get_uma_sex_title(),
      '의 민감한 몸은 거의 절정에 달할 듯 떨렸고, 초점이 풀린 눈은 무엇을 생각하는지 알 수 없었다.',
    ]);
    era.println();
    await kitaru.say_and_wait(
      '점술에는 두 가지가 있어. 하나는 판에 들어가는 것이고, 다른 하나는 판 밖에 있는 것.',
      true,
    );
    era.println();
    await kitaru.say_and_wait('대단해…… 정신이 혼미해질 것 같아요……');
    era.println();
    await kitaru.say_and_wait(
      '점술은 운명을 훔쳐보고 천도를 간섭하는 놀이이니, 점치는 자와 받는 자 모두 판에 들어와야 해.',
      true,
    );
    era.println();
    await era.printAndWait(
      '오렌지색 머리의 소녀는 절제 없이 교성을 내질렀다. 평소의 달콤하고 부드러운 목소리는 지금 이 순간 지극히 음란하게 울려 퍼졌다.',
    );
    await kitaru.say_and_wait('이아앗…… 아앙……');
    era.println();
    await kitaru.say_and_wait(
      ['스스로 훌륭한 점술가라고 생각하진 않아. 처음에 ', callname, '과 만난 것도 순전히 운이었을지도 모르지.'],
      true,
    );
    era.printButton('엉덩이를 때린다', 1);
    await era.input();
    await era.printAndWait(
      '한쪽 손을 떼어 후쿠키타루의 엉덩이를 세게 내리치자, 약간의 피학 성향이 있는 무녀는 더욱 유혹적인 신음을 내뱉었다.',
    );
    await kitaru.say_and_wait('……으응~');
    era.println();
    await kitaru.say_and_wait(
      '하지만 그때 점치는 자이자 점쳐지는 자였던 나는, 의심할 여지 없이 판에 들어와 있었어.',
      true,
    );
    era.printButton('가슴을 주무른다', 1);
    await era.input();
    era.println();
    await kitaru.say_and_wait(
      ['그러니까, 맞아. ', me.get_colored_actual_name(), '이야말로 내 운명의 사람이야!'],
      true,
    );
    era.println();
    await era.printAndWait('두 손이 후쿠키타루의 가슴을 감싸 쥐고 마음껏 유린했다.');
    await kitaru.say_and_wait('아…… 아아……');
    era.printButton('꼬리를 잡아당긴다', 1);
    await era.input();
    await era.printAndWait(
      '부드러운 밤색 꼬리는 이미 피스톤 운동으로 튀어 나온 체액이 묻어 있었다.',
    );
    await era.printAndWait([
      '꼬리 뿌리에서 전해지는 촉감과 가슴이 비벼지는 쾌감에, ',
      kitaru.get_colored_name(),
      '는 순간 오늘 중 가장 높은 신음을 내질렀다.',
    ]);
    await era.printAndWait(
      '본전의 신체로 모셔진 거울은 무녀의 지금 이 행복한 표정을 선명하게 비추고 있었다.',
    );
    await kitaru.say_and_wait('이게…… 나?', true);
    await kitaru.print_and_wait(
      '욕망으로 붉게 물든 얼굴, 끊임없이 신음을 흘려보내는 입술, 몽롱하게 반쯤 뜨여 여우처럼 매혹적인 눈동자.',
    );
    await kitaru.print_and_wait([
      me.get_phy_sex_title(),
      '에게 벽으로 밀려난 채, 반쯤 벗겨진 무녀복 아래 벚꽃색으로 달아오른 몸이 삽입의 반동에 따라 위아래로 흔들리고 있었다.',
    ]);
    await kitaru.say_and_wait('으으…… 내가 감히 시라오키 님 앞에서 이런 모습이 되다니……', true);
    await kitaru.say_and_wait('운명의 사람…… 운명의 사람이 책임져야 해!', true);
    await kitaru.say_and_wait('으이이이이이익!!!!!');
    await era.printAndWait('뽁!');
    await era.printAndWait([
      '걸쭉하고 끈적한 정액이, 육봉이 빠져나가는 순간 무녀의 입구에서 쏟아져 나와 본전 안에 음란한 냄새를 채웠다.',
    ]);
    begin_and_init_ero(0, 56);
    set_palam_to_max(
      56,
      part_enum.penis,
      part_enum.virgin,
      part_enum.masochism,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(56, part_enum.body),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(56, part_enum.penis, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    end_ero_and_train();
    era.drawLine({ content: '잠시 후'});
    await kitaru.say_and_wait('정말 격렬했네요……');
    await era.printAndWait([
      '억지로 태연한 척하고 있었지만, 무녀복에 마른 액체 흔적은 방금 그 음란한 ',
      kitaru.get_uma_sex_title(),
      '가 바로 그녀였음을 증명하고 있었다.',
    ]);
    era.printButton('「시라오키 님이 노하시지 않을까?」', 1);
    await era.input();
    await kitaru.say_and_wait('에……');
    await kitaru.say_and_wait('그게, 시라오키 님도 제가 행복해하는 걸 보시면 기뻐해 주실 거예요.');
    await kitaru.say_and_wait('아마도요……');
    await kitaru.say_and_wait('으으…… 그냥 머리가 뜨거워져서 저질러 버렸지만……');
    await kitaru.say_and_wait([
      '그래도 오직 ',
      me.get_colored_actual_name(),
      '에게만 이런다구요!',
    ]);
    await kitaru.say_and_wait([
      '결국 ',
      me.get_colored_actual_name(),
      '은 제 운명의 사람이니까요!',
    ]);
    era.println();
    add_jewel_reward(56, ['순종', '수치'], [100, 50]);
    await sys_love_uma_in_event(56);
  }
};