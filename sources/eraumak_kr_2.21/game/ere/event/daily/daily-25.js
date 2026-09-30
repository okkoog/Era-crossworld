/**
 * @file 맨하탄 카페 - 日常
 * @author Necroz
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/daily/daily-25.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const coffee_celebration = require('#/event/daily/daily-events-25/celebration');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const CoffeeLifeMarks = require('#/data/event/life-event-marks/life-event-marks-25');

/**
 * @param {CharaTalk} coffee
 * @param callname
 * @param {CoffeeLifeMarks} life_marks
 */
function escape_basement_common(coffee, callname, life_marks) {
  coffee.say([callname, '……휴식은 잘 취하셨나요?']);
  coffee.say('……비록 당신이 멋대로 도망쳤지만, 딱히 당신에게 무언가 하지는 않을 거예요……');
  life_marks.b_escape = 0;
}

module.exports = class extends CustomizedDaily {
  get #dict() {
    const ret = {};
    const tachyon = get_chara_talk(this.id);
    ret['대표색'] = tachyon.color;
    ret['그녀'] = tachyon.sex;
    return ret;
  }

  select() {
    const callname = sys_get_colored_callname(25, 0),
      coffee = get_chara_talk(25),
      life_marks = new CoffeeLifeMarks();
    if (!sys_check_awake(25)) {
      era.print([
        '……',
        coffee.get_colored_name(),
        '가 지금 깊이 잠들어 있다. 속눈썹이 파르르 떨리고 있는데, 무슨 꿈이라도 꾸고 있는 걸까?',
      ]);
    } else if (life_marks.b_escape > 0) {
      escape_basement_common(coffee, callname, life_marks);
    } else {
      const talk_arr = [
        [callname, ', 저 여기 있어요.'],
        '……네, 평소와 같아요.',
        ['오늘도…… ', callname, '에게 신세를 지겠네요.'],
      ];
      coffee.say(get_random_entry(talk_arr));
    }
  }

  good_morning() {
    const buffer = [],
      callname = sys_get_colored_callname(25, 0),
      coffee = get_chara_talk(25),
      life_marks = new CoffeeLifeMarks();
    if (life_marks.b_escape > 0) {
      escape_basement_common(coffee, callname, life_marks);
    } else if (era.get('base:25:체력') < era.get('maxbase:25:체력') * 0.45) {
      buffer.push(
        '아무래도…… 무리할 수는 없을 것 같네요……',
        '시간을 좀 주세요…… 커피 한 잔만 마시게 해줘요.',
        '발이 무거워요…… 마치 뿌리가 내린 것처럼……',
      );
    } else {
      buffer.push(
        '그 아이를…… 뒤쫓기 위해서.',
        '별을 붙잡기 위해서라면, 어쩌면 하늘까지 날 수 있을지도 몰라요……!',
        '뒤쫓아야 할 그림자…… 이미 똑똑히 보이고 있어요.',
        '……시작하죠, 친구도 그렇게 말하고 있으니까……',
        '용에게는 날개가 있고, 저에게는 커피가 있죠…… 후훗.',
      );
    }
    coffee.say(get_random_entry(buffer));
  }

  async good_night(hook) {
    const awake = 2 * sys_check_awake(25) + sys_check_awake(0),
      callname = sys_get_callname(25, 0),
      coffee = get_chara_talk(25),
      me = get_chara_talk(0);
    if (awake === 3) {
      const check = get_custom_check(25).is_want_make_love();
      if (check) {
        era.print([
          '오늘의 일정이 끝나고, ',
          me.get_colored_name(),
          '은(는) 평소처럼 ',
          coffee.get_colored_name(),
          '를 ',
          coffee.sex,
          '의 기숙사까지 배웅하려 했다. ',
          me.get_colored_name(),
          '이(가) 움직이려던 찰나, 소맷자락이 ',
          coffee.get_colored_name(),
          '에게 붙잡혔다.',
        ]);
        era.print([
          '뒤를 돌아보니, 마침 촉촉하게 젖은 ',
          coffee.get_colored_name(),
          '의 눈과 시선이 마주쳤다.',
        ]);
        coffee.say([callname, ', 이미 외박 허가는 받아 두었으니, 그러니……']);
        era.print([
          coffee.sex,
          '는 말을 끝까지 맺지 않았지만 의미는 충분히 명확했고, ',
          me.get_colored_name(),
          '은(는) 결정했다——',
        ]);
        if (check !== 2) {
          era.printButton('승낙한다', 1);
          era.printButton('거절한다', 2);
        }
        if (check === 2 || (await era.input()) === 1) {
          era.print([
            coffee.get_colored_name(),
            '를 가만히 품에 안자, 얼굴에 닿는 귀를 통해 ',
            me.get_colored_name(),
            '은(는) ',
            coffee.get_colored_name(),
            '의 마음속 기쁨을 느꼈다.',
          ]);
          await coffee.say_and_wait([callname, '……오늘 밤, 잘 부탁드려요……']);
          hook.arg = 1;
        } else {
          era.print('——미안해.');
          era.print([
            me.get_colored_name(),
            '의 얼굴에서 ',
            coffee.get_colored_name(),
            '는 그러한 기색을 읽어냈다.',
          ]);
          coffee.say([callname, ', 오늘은 너무 피곤하시죠…… 오늘 밤은 푹 쉬어 주세요……']);
          era.print([
            coffee.get_colored_name(),
            '의 얼굴에 비친 약간의 실망감을 ',
            me.get_colored_name(),
            '의 눈이 놓치지 않았지만, 보상은 다음에 ',
            coffee.sex,
            '에게 해주기로 하자……',
          ]);
          hook.arg = 0;
        }
      } else {
        era.print([
          '바쁜 하루가 끝나고, ',
          me.get_colored_name(),
          '은(는) ',
          coffee.get_colored_name(),
          '를 미호 생활관 입구까지 바래다주었다.',
        ]);
        coffee.say(['번거롭게 해드렸네요, ', callname, '…… 저도, 친구도요.']);
      }
    } else if (awake === 1) {
      era.print([
        '문득 옷자락을 누군가 당기는 느낌에 뒤를 돌아보니, ',
        coffee.get_colored_name(),
        '가 근처 휴게실 의자에서 잠들어 있었다. ',
        coffee.sex,
        '의 휴식을 방해할 수는 없기에, ',
        me.get_colored_name(),
        '은(는) 겉옷을 ',
        coffee.sex,
        '에게 덮어주고 ',
        coffee.sex,
        '를 공주님 안기로 들어 올려 학생 기숙사까지 데려다주었다.',
      ]);
    } else {
      coffee.say([
        callname,
        '? ……아, 잠드셨군요. 너무 고생하신 걸까…… 잘 자요, ',
        callname,
        ', 맥(貘)이 없는 좋은 꿈을 꾸시길.',
      ]);
    }
  }

  async talk() {
    const callname = sys_get_callname(25, 0),
      coffee = get_chara_talk(25);
    if (!sys_check_awake(25)) {
      await era.printAndWait([
        '……잠든 ',
        coffee.get_colored_name(),
        '의 얼굴을 자세히 관찰해 보았다. 인형처럼 하얗고 정교한 얼굴이 완전히 긴장을 풀고, 가느다란 숨소리를 내고 있다.',
      ]);
    } else {
      let talk_arr;
      switch (era.get('cflag:25:컨디션')) {
        case -2:
          talk_arr = [
            `${callname}, 『그들』이 왔어요……! 제 곁을 떠나지 말아 주세요……!`,
            '컨디션이 아주 안 좋네요…… 그림자에게…… 삼켜질 것만 같아요.',
          ];
          break;
        case -1:
          talk_arr = [
            `${callname}…… 죄송해요, 지금 상태가 별로네요…… 커피 한 잔이라도 있다면……`,
            '어쩌면…… 우리가 겪는 이 모든 일들이, 그저 신기루 같은 꿈일지도 몰라요……',
          ];
          break;
        case 0:
          talk_arr = [
            '시간을 되돌릴 수는 없어요…… 제가 할 수 있는 건 오직 최선을 다하는 것뿐.',
            '……당신은 아무래도 그들에게 잘 엮이는 것 같네요…… 뭔가 이상한 일이 생기면 바로 말해 주세요.',
          ];
          break;
        case 1:
          talk_arr = [
            '어릴 때부터 친구는 제 곁에 있었어요…… 늘 친구의 뒷모습을 쫓아온 저도, 언젠가는 반드시……',
            '친구가 지금 어디 있냐고요……? 후훗, 등 뒤를 확인해 보는 건 어때요.',
            '방금, 당신의 그림자가 스스로 움직였어요…… 후훗, 농담이에요.',
          ];
          break;
        case 2:
          talk_arr = [
            '고래가 칠색 날개를 펴고 청금석 하늘로 날아오르는…… 후훗, 꿈속 세계는 정말 흥미롭네요.',
            `${callname}, 지금…… 음, 상태가 좋으시네요. 아무래도 그들과 마주칠 일은 없겠어요.`,
            '이건 오늘을 위해 고른 특별한 커피예요…… 오닉스처럼 고혹적인…… 괜찮다면, 함께 맛보실래요?',
          ];
      }
      await coffee.say_and_wait(get_random_entry(talk_arr));
    }
  }

  async office_gift() {
    await get_chara_talk(25).say_and_wait(
      Math.random() < 0.5
        ? `이건…… 제게 주시는 건가요? 선물 고마워요, ${sys_get_callname(25, 0)}.`
        : '제게 주는 선물……? 아, 친구! 함부로 열지 마!',
    );
  }

  async office_cook() {
    const coffee = get_chara_talk(25);
    const me = get_chara_talk(0);
    await coffee.say_and_wait([
      '오늘은 비프 스튜를 만드는 게 어떨까요, ',
      sys_get_callname(25, 0),
      '……?',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 의외로 요리에 능숙해서, ',
      me.get_colored_name(),
      '은(는) 옆에서 거의 거들 틈조차 없었다.',
    ]);
  }

  async office_study() {
    await get_chara_talk(25).say_and_wait([
      '그렇군요…… ',
      sys_get_callname(25, 0),
      '은 보기보다 대단하시네요……',
    ]);
    await era.printAndWait('이거 칭찬 들은 거 맞나……');
  }

  async office_rest() {
    const callname = sys_get_callname(25, 0);
    await get_chara_talk(25).say_and_wait(
      Math.random() < 0.5
        ? `${callname}은 커피나무의 꽃말을 아시나요? 바로 『함께 쉬어요』예요. 휴식할 때 커피를 마시는 습관에서 유래했다고 하더군요……`
        : `${callname}, 타인의 심장 소리를 느껴본 적 있나요? 심장이 연주하는 소리에는 잠을 청하는 효능이 있다고 해요…… 그러니 ${callname}, 지금 제 귀를 당신의 가슴에 대게 해주세요……`,
    );
  }

  async office_prepare() {
    const callname = sys_get_callname(25, 0);
    if (era.get('love:25') < 75) {
      await get_chara_talk(25).say_and_wait('친구를 뒤쫓기 위해…… 온 힘을 다하겠어요……!');
    } else {
      await get_chara_talk(25).say_and_wait(
        Math.random() < 0.5
          ? `친구를, 그리고 ${callname}을 뒤쫓기 위해…… 온 힘을 다하겠어요……!`
          : `오늘의 성장이 있었던 건 모두 ${callname} 덕분이에요. 그러니 저도……`,
      );
    }
  }

  async office_game() {
    const callname = sys_get_callname(25, 0),
      coffee = get_chara_talk(25);
    await coffee.say_and_wait([callname, ', 지지 않겠어요……!']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 묘한 승부욕을 불태우고 있다.',
    ]);
  }

  async school_atrium() {
    const callname = sys_get_callname(25, 0);
    const me = get_chara_talk(0);
    const coffee = get_chara_talk(25);
    if (!(await select_action_in_atrium())) {
      await coffee.say_and_wait('친구, 반드시 너를 뛰어넘겠어……!');
    } else {
      if (era.get('love:25') < 75) {
        await coffee.say_and_wait([callname, ', 트레센 안에서는 역시……']);
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 조금 당황한 기색으로 주위를 둘러본다. 학원에서의 데이트는 ',
          coffee.sex,
          '에게 역시 너무 무리였던 걸까……',
        ]);
      } else {
        await coffee.say_and_wait([callname, ', 이제 어디로 갈까요……']);
        await era.printAndWait([
          '주변의 ',
          coffee.get_uma_sex_title(),
          '와 트레이너의 시선은 아랑곳하지 않고, ',
          coffee.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 팔을 꽉 껴안으며 귓가에 속삭였다.',
        ]);
      }
    }
  }

  school_rooftop = async function () {
    const callname = sys_get_callname(25, 0);
    const coffee = get_chara_talk(25);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        ', 오늘 점심은 샌드위치와 커피예요. 드셔 보세요……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 시선 속에서 맛있게 점심 식사를 마쳤다.',
      ]);
    } else {
      await coffee.say_and_wait([callname, '이 만든 애플파이, 정말 맛있네요……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 애플파이를 먹으며 커피를 조금씩 홀짝였다. 참으로 ',
        coffee.get_colored_name(),
        ' 다운 조합이다……',
      ]);
    }
  };

  async out_river(hook) {
    const callname = sys_get_callname(25, 0);
    const coffee = get_chara_talk(25);
    const me = get_chara_talk(0);
    hook.arg = !!(await select_action_around_river());
    if (hook.arg) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 함께 강둑을 산책했다……',
      ]);
      if (Math.random() < 0.5) {
        await coffee.say_and_wait(
          '……있지 나를 깨달아줘♪ This is my love song♪……',
        );
        await era.printAndWait([
          '옆에서 들려오는 작은 콧노래 소리. ',
          coffee.get_colored_name(),
          '는 꽤 즐거운 모양이다.',
        ]);
      } else {
        await era.printAndWait(
          '문득 차갑고 서늘한 무언가가 손을 잡는 느낌이 들어 고개를 돌렸지만, 아무것도 없었다.',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 반응이 없다. 그렇다는 건 친구일까. 왠지 익숙해진 기분이다……',
        ]);
        await era.printAndWait(
          '그런 생각을 하던 찰나, 다른 한쪽 손도 붙잡혔다. 이번에는 따뜻한 온기가 느껴졌다.',
        );
        await era.printAndWait([
          '살짝 고개를 돌리자 ',
          coffee.get_colored_name(),
          '의 하얀 손이 보였다. ',
          coffee.sex,
          '는 고개를 숙이고 있어 표정은 보이지 않았다.',
        ]);
        await era.printAndWait('……이대로 계속 걸어가자.');
      }
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 함께 강가로 낚시를 하러 갔다……',
      ]);
      if (Math.random() < 0.5) {
        await coffee.say_and_wait([callname, ', 낚시를 정말 잘하시네요……']);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 이런 평온한 시간 때우기를 꽤 좋아하는 듯하다. 비록 손에 낚싯대는 들고 있지 않지만, 즐거운 표정으로 옆에 앉아 함께해주었다.',
        ]);
        await era.printAndWait([
          '……그런데 왠지 ',
          coffee.sex,
          '가 자꾸 이쪽을 쳐다보는 느낌이 든다.',
        ]);
      } else {
        await coffee.say_and_wait([callname, ', 이 강에는 『그들』이 가득하네요……']);
        await era.printAndWait('응? 농담이지?');
        await era.printAndWait([
          '하지만 물결 속에서 죽은 듯 미동도 하지 않는 찌를 보고 있자니, ',
          me.get_colored_name(),
          '은(는) 결국 ',
          coffee.get_colored_name(),
          '의 곁으로 좀 더 몸을 붙였다……',
        ]);
      }
    }
  }

  async out_church() {
    const me = get_chara_talk(0);
    const callname = sys_get_callname(25, 0);
    const coffee = get_chara_talk(25);
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 외출하던 중 신사를 지나치게 되었다.',
    ]);
    await coffee.say_and_wait(['음…… ', callname, ', 잠깐 들어가 봐도 될까요?']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '의 요청에 응했다.',
    ]);
    await era.printAndWait('신사 안으로 들어서자 참배객은 그리 많지 않았다.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 신사에 들어오자마자 무언가를 찾더니, 이내 운세 뽑기대 앞에서 멈춰 서서 ',
      me.get_colored_name(),
      '을(를) 불렀다.',
    ]);
    await coffee.say_and_wait([
      callname,
      '…… 잠시 후 운세를 뽑으면 묘한 일이 일어날 수도 있어요. 부디 놀라지 마세요.',
    ]);
    await era.printAndWait([
      '산전수전 다 겪은 ',
      me.get_colored_name(),
      '은(는) 고개를 끄덕이며 옆에서 ',
      coffee.get_colored_name(),
      '가 운세를 뽑는 것을 지켜보았다. 결과는——',
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait('대길이다.');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 안심한 듯 보였으나, ',
          me.get_colored_name(),
          '이(가) 축하해 주기도 전에 눈앞에 기묘한 장면이 나타났다.',
        ]);
        await era.printAndWait([
          '주인공은 ',
          me.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '이다. 나이대로 보아 지금보다 몇 년은 더 지난 모습 같았고, 장소는 낯선 방 안이었다.',
        ]);
        await era.printAndWait('하지만 그건 중요하지 않았다.');
        await era.printAndWait([
          '눈앞의 ',
          me.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '는 실오라기 하나 걸치지 않은 채 방 안에서 격렬하게 우마뾰이를 하고 있었기 때문이다.',
        ]);
        if (me.sex_code > 0 && coffee.sex_code - 1) {
          await era.printAndWait([
            '창문을 통해 희미한 햇살이 두 사람을 비추고, 몸에 밴 땀방울이 햇빛을 받아 금빛으로 빛나고 있었다. 하지만 이 묘사에 성스러운 느낌 따위는 전혀 없었다. 지금의 ',
            coffee.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '에게 등 뒤에서 격렬하게 박히고 있었으며, 피스톤질을 하는 속도가 워낙 빨라 지켜보는 ',
            me.get_colored_name(),
            '본인이 다 조마조마할 정도였다.',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            '의 표정 또한 평소와는 딴판이었다. 눈가의 눈물과 땀, 그리고 묘한 액체의 흔적…… 그래, 정액이다. 그것들이 뒤섞여 있었고, 힘없이 빠진 혀가 몸의 반동에 맞춰 계속 흔들리고 있었다.',
          ]);
        }
        await era.printAndWait([
          '그렇게 ',
          me.get_colored_name(),
          '은(는) 자신과 ',
          coffee.get_colored_name(),
          '의 무성 우마뾰이 생중계를 지켜보았다. 도중에 체위도 몇 번이나 바뀌었고, 결국 ',
          coffee.get_colored_name(),
          '의 절정 후의 여운이 가득한 얼굴을 끝으로 장면이 끝났다……',
        ]);
        await era.printAndWait([
          '신사 안에서 ',
          me.get_colored_name(),
          '과(와) 얼굴이 새빨개진 ',
          coffee.get_colored_name(),
          '는 시선이 마주치자마자 천천히 고개를 돌렸다. 두 사람 사이에는 침묵만이 흘렀다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '와의 관계가 묘한 방식으로 깊어졌다……',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 안심한 듯 보였으나, ',
          me.get_colored_name(),
          '이(가) 축하해 주기도 전에 눈앞에 기묘한 장면이 나타났다.',
        ]);
        await era.printAndWait([
          '주인공은 ',
          me.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '이다. 나이는 지금과 별 차이가 없어 보였고, 트레이너 제복과 트레센 교복을 입은 채 익숙한 트레이닝실에 있었다.',
        ]);
        await era.printAndWait('하지만 그건 중요하지 않았다.');
        await era.printAndWait([
          '눈앞의 ',
          me.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '는 트레이닝실 소파에 밀착해 앉아 있었다. ',
          me.get_colored_name(),
          '은(는) 뒤에서 ',
          coffee.get_colored_name(),
          '를 껴안은 채 목덜미에 얼굴을 묻고 향기를 깊게 들이마시고 있었으며, 가만히 있지 못하는 두 손은 ',
          coffee.get_colored_name(),
          '의 가슴과 허벅지 사이를 헤집고 있었다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 촉촉하게 젖은 표정을 짓고 있었고, 흩어진 교복 사이로 비치는 붉게 달아오른 얼굴에는 정욕과 기대감이 가득했다.',
        ]);
        await era.printAndWait('이건 누가 봐도 이제 곧 무슨 일이 터지기 직전이잖아!');
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 옷이 완전히 벗겨지려는 찰나, 눈앞의 화면이 사라졌다.',
        ]);
        await era.printAndWait([
          '신사 안에서 ',
          me.get_colored_name(),
          '과(와) 얼굴이 새빨개진 ',
          coffee.get_colored_name(),
          '는 말없이 서로의 눈을 바라보았다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '와의 관계가 묘한 방식으로 깊어졌다……',
        ]);
      }
    } else {
      await era.printAndWait('……대흉이다.');
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 조금 낙담한 듯 보였으나, ',
          me.get_colored_name(),
          '이(가) 위로하기도 전에 눈앞에 기묘한 장면이 나타났다.',
        ]);
        await era.printAndWait([
          '주인공은 ',
          me.get_colored_name(),
          '과(와) ',
          coffee.get_colored_name(),
          '이다. 나이는 지금과 별 차이가 없어 보였고, 트레이너 제복과 트레센 교복을 입은 채 익숙한 트레이닝실에 있었다.',
        ]);
        await era.printAndWait('하지만 그건 중요하지 않았다.');
        await era.printAndWait([
          '눈앞의 ',
          me.get_colored_name(),
          '은(는) ',
          coffee.get_colored_name(),
          '와 다투고 있는 듯 보였다. ',
          me.get_colored_name(),
          '의 얼굴에는 냉소만이 가득했고, ',
          coffee.get_colored_name(),
          '는 얼굴이 눈물범벅이 되어 있었다. 두 사람 옆의 테이블에는 어떤 사진이 놓여 있는 것 같았는데——',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 사진 내용을 확인하기도 전에 화면이 갑작스럽게 사라졌다.',
        ]);
        await era.printAndWait([
          '신사 안에서 정신을 차린 ',
          me.get_colored_name(),
          '은(는) ',
          coffee.get_colored_name(),
          '가 무표정한 얼굴로 손에 든 운세 종이를 갈기갈기 찢는 모습을 보았다. 어디선가 라이터를 꺼내 조각들을 남김없이 태워버리는 동안, 환청인지 모를 가느다란 비명 소리가 들린 것 같았다.',
        ]);
        await era.printAndWait([
          '돌아오는 길에 ',
          me.get_colored_name(),
          '이(가) 조심스럽게 방금 무슨 일이 있었는지 물어보았으나, ',
          coffee.get_colored_name(),
          '는 대충 얼버무릴 뿐이었다.',
        ]);
        await era.printAndWait([
          '결국 대체 무슨 일이었는지, ',
          me.get_colored_name(),
          '은(는) 도저히 알 길이 없었다.',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 조금 실망한 기색이었고, ',
          me.get_colored_name(),
          '은(는) ',
          coffee.sex,
          '를 가볍게 위로해 주었다.',
        ]);
        await era.printAndWait([
          '트레센으로 돌아오는 길 내내 ',
          coffee.get_colored_name(),
          '는 말이 없었고, ',
          me.get_colored_name(),
          '도 눈치껏 ',
          coffee.sex,
          '를 방해하지 않았다.',
        ]);
        await era.printAndWait('신사의 비밀은 다음 기회로 미루기로 하자.');
      }
    }
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(25, 0),
      coffee = get_chara_talk(25),
      me = get_chara_talk(0),
      temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            coffee.get_colored_name(),
            '와 함께 인형 뽑기를 시작했다……',
          ]);
          await era.printAndWait([
            '둘이서 인형 뽑기 기계 속의 ',
            coffee.get_colored_name(),
            '인형을 뽑으려 반복해서 시도했지만 계속 실패했다. 포기하려던 찰나, 인형이 갑자기 스스로 움직이더니 배출구 안으로 뛰어들었다.',
          ]);
          await coffee.say_and_wait(['친구가…… 돌려줘야 할까요, ', callname, '?']);
          await era.printAndWait(
            '점원을 당황하게 만들지 않기 위해, 결국 인형을 그대로 가져가기로 했다.',
          );
        } else {
          await era.printAndWait([
            coffee.get_colored_name(),
            '와 함께 아케이드 게임 대결을 했다……',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            '는 이런 게임에 그리 익숙하지 않은 듯, 화면 속 ',
            coffee.sex,
            '의 캐릭터가 일방적으로 당하고 있었다. ',
            me.get_colored_name(),
            '이(가) 결정타를 날리려던 그 순간——어, 어라? 반응이 없잖아?',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '의 캐릭터가 갑자기 화면 중앙에서 멈춰 섰고, 그 틈을 놓치지 않은 ',
            coffee.get_colored_name(),
            '가 버튼을 연타해 순식간에 쓰러뜨렸다.',
          ]);
          await era.printAndWait('……이것도 친구의 장난인가?');
          await era.printAndWait([
            '옆에 앉은 ',
            coffee.get_colored_name(),
            '를 쳐다보니, ',
            coffee.sex,
            '는 무슨 일이 일어났는지 전혀 모르는 듯 자신의 승리에 조용히 미소 짓고 있었다.',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            '가 즐거워 보이니, 그것대로 괜찮지 않을까?',
          ]);
        }
        break;
      case 1:
        await coffee.say_and_wait(
          '경품 뽑기, 인가요…… 뭐가 나올까요? 아, 친구! 방해하면 안 돼!',
        );
        break;
      case 2:
        if (Math.random() < 0.5) {
          await coffee.say_and_wait('노래 말인가요? 그렇게 잘하진 못하지만……');
          await era.printAndWait([
            '처음에는 내키지 않아 했지만, 격려를 받자 ',
            coffee.get_colored_name(),
            '는 목소리를 높여 노래를 부르기 시작했다.',
          ]);
        } else {
          await era.printAndWait([
            coffee.get_colored_name(),
            ' 앞에서 노래를 불렀고, ',
            coffee.get_colored_name(),
            '는 미소 지으며 박자를 맞춰주었다.',
          ]);
        }
        break;
      case 3:
        await coffee.say_and_wait('영화라면, 《트레센에서의 5일 밤》은 어떠신가요?');
        await era.printAndWait([
          coffee.get_colored_name(),
          '와 함께 공포 영화를 관람했다. 하지만 ',
          coffee.get_colored_name(),
          '의 곁에 있으니 이런 영화는 전혀 무섭게 느껴지지 않았다……',
        ]);
    }
  }

  async out_station(hook) {
    const callname = sys_get_callname(25, 0);
    const me = get_chara_talk(0);
    const coffee = get_chara_talk(25);
    hook.arg = await select_action_in_station(25);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await coffee.say_and_wait([callname, ', 뭐 좀 드실래요?']);
          await era.printAndWait([
            '카페에서 ',
            coffee.get_colored_name(),
            '와 함께 커피와 가벼운 식사를 즐겼다.',
          ]);
        } else {
          await coffee.say_and_wait('후우…… 역시 커피가 최고네요……');
          await era.printAndWait([
            coffee.get_colored_name(),
            '는 커피잔을 들고 조금씩 맛보기 시작했다.',
          ]);
        }
        break;
      case 1:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            coffee.get_colored_name(),
            '와 손을 맞잡고 거리를 유유히 거닐었다.',
          ]);
          await era.printAndWait([
            '마치 ',
            me.get_colored_name(),
            '의 존재를 확인하려는 듯, ',
            coffee.get_colored_name(),
            '는 때때로 ',
            me.get_colored_name(),
            '의 손을 가볍게 쥐었다. ',
            coffee.sex,
            '의 가느다란 손가락이 위에서 아래로 ',
            me.get_colored_name(),
            '의 손끝을 훑으며 미세한 간지러움을 선사했다.',
          ]);
          await era.printAndWait([
            '답례로 ',
            me.get_colored_name(),
            '도 ',
            coffee.sex,
            '의 손을 꽉 쥐어주었다.',
          ]);
        } else {
          await era.printAndWait([
            '문득 부드러운 감촉이 느껴져 고개를 돌리니, ',
            coffee.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '의 팔을 껴안고 있었다. 살짝 솟아오른 가슴이 ',
            me.get_colored_name(),
            '의 팔에 밀착되어 있었다.',
          ]);
          await era.printAndWait([
            '의외로 ',
            coffee.get_colored_name(),
            '도 가슴이 좀 있구나, 하고 ',
            me.get_colored_name(),
            '은(는) 내심 생각했다.',
          ]);
          await coffee.say_and_wait([callname, ', 지금 뭔가 실례되는 생각을 하고 계시지 않나요……']);
        }
        break;
      case 2:
        await get_chara_talk(25).say_and_wait(
          Math.random() < 0.5
            ? `${callname}, 뭐 좀 사시겠어요? 예를 들면…… 커피 원두라든가?`
            : '인스턴트 커피인가요…… 음, 그건 좀……',
        );
    }
  }

  async basement_end() {
    const callname = sys_get_callname(25, 0);
    const coffee = get_chara_talk(25);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 트레이너가 실종된 지 벌써 며칠이 지났다. 경찰이 학원 구석구석을 뒤졌지만, 여전히 아무런 단서도 찾지 못했다.',
    ]);
    await era.printAndWait([
      '담당 ',
      coffee.get_uma_sex_title(),
      '인——',
      coffee.get_colored_name(),
      '가 유력한 용의자로 지목되었으나, 상세한 조사와 심문 끝에 결국 ',
      coffee.sex,
      '의 혐의는 풀리게 되었다.',
    ]);
    await era.printAndWait('현재 조사는 계속 진행 중이지만……');
    await era.printAndWait(
      '미호 생활관의 어느 방 안, 탁한 황색 눈동자가 창밖에서 분주히 움직이는 경찰들을 지켜보고 있다.',
    );
    await coffee.say_and_wait([
      { color: buff_colors[3], content: `——모두가 당신을 찾고 있어요, ${callname}……` },
    ]);
    await coffee.say_and_wait([
      { color: buff_colors[3], content: '하지만 그들은 당신을 찾을 수 없겠죠.'},
    ]);
    await coffee.say_and_wait([{ color: buff_colors[3], content: '왜냐하면……'}]);
    await coffee.say_and_wait([
      {
        color: buff_colors[3],
        content: `${callname}, 당신은 이제 저에게만 보이는 『친구』니까요.`,
      },
    ]);
    await era.printAndWait([
      '서서히 커튼이 쳐지고, 칠흑 같은 방 안에서 ',
      coffee.get_colored_name(),
      '는 등 뒤에 있던 흐릿한 영체를 품속에 끌어안았다.',
    ]);
    await print_event_name(
      [{ content: '새로운 「친구」', color: buff_colors[3] }],
      coffee,
    );
  }

  /** @param {HookArg} hook */
  celebration(hook) {
    const edu_weeks = era.get('cflag:25:육성턴수합산'),
      weeks = (era.get('flag:현재턴수') - 1) % 48;
    if (weeks !== 13 || edu_weeks < 96) {
      return super.celebration(hook);
    }
    return coffee_celebration(hook);
  }

  async end_talk() {
    await kojo['end_talk'](this.#dict);
  }
};