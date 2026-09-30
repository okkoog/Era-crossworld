/**
 * @file 하루 우라라 - 조교
 * @author 99
 */
const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[52];

module.exports = class extends CustomizedEro {
  async zero_stamina(urara, me) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait('……아……아……');
      await era.printAndWait([
        '마치 망가진 인형처럼, 혼절한 ',
        urara.get_colored_name(),
        ...(!era.get('flag:주도권')
          ? ['가 ', me.get_colored_name(), '의 품 안에서']
          : ['는']),
        '끊임없이 경련하고 있다',
      ]);
    } else {
      await urara.say_and_wait('……');
      await era.printAndWait([
        '온몸의 힘이 풀린 채, ',
        ...(!era.get('flag:주도권')
          ? [me.get_colored_name(), '에게 한참을 시달린 끝에 ']
          : []),
        urara.get_colored_name(),
        '는 완전히 정신을 잃은 듯하다',
      ]);
    }
  }

  async prison(urara, me, callname, hook) {
    if (!era.get('exp:52:감금횟수')) {
      const in_urara = get_chara_talk(52, chara_colors[1]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait('하아, 당신은 정말…… 왜 이렇게 되어버린 걸까요?');
      await in_urara.say_as_unknown_and_wait([
        '하지만 다행히도 ',
        urara.get_uma_sex_title(),
        '는 트레이너에게는 다른 이들처럼 그리 가혹하게 대하지는 않을 모양이네요……',
      ]);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 의아해하며 침대에서 일어났다. 몸 아래에는 낯선 잠자리가, 눈앞에는 어두컴컴한 천장만이 보였지만, 곁에서는 끊어질 듯한 흐느낌이 들려오고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 깨어난 것을 눈치채고, 침대 곁에 웅크리고 있던 작은 ',
        urara.get_uma_sex_title(),
        '는 황급히 힘없이 처진 귀를 세우고는, 울어서 붉어진 얼굴을 문지르며 ',
        me.get_colored_name(),
        '과(와) 등을 돌린 채 마주했다.',
      ]);
      await urara.say_and_wait([
        '미안해, 하지만 이번 한 번만! 여기 남아주면 안 될까? 나중에는 다시 착한 아이로 돌아갈게! 그러니까……!',
      ]);
      await era.printAndWait([
        '웅크린 무릎 위로 눈물이 쉴 새 없이 떨어지고, 하는 말마다 숨기지 못한 함정이 가득함에도 불구하고, ',
        urara.get_teen_sex_title(),
        '는 끝내 바랐던 만큼 「비열」해지지 못했다.',
      ]);
      await era.printAndWait(['적어도, 밀실의 반쯤 열린 문은 잠겨 있지 않았다.']);

      era.println();

      await in_urara.say_as_unknown_and_wait([
        '……하아…… 그렇다면 트레이너 ',
        me.get_adult_sex_title(),
        '（당신）의 선택은──',
      ]);
      era.printButton('여기에 남는다', 1);
      era.printButton('돌아서서 떠난다', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '가여운 ',
          urara.get_uma_sex_title(),
          '의 등 뒤로 천천히 다가가, ',
          me.get_colored_name(),
          '은(는) 뒤에서 ',
          urara.sex,
          '의 차가운 작은 손을 맞잡았다.',
        ]);
        await urara.say_and_wait([
          '에? ',
          callname,
          ', 여기 남아주는 거야…… 정말로? 우라라, 정말로 나쁜 아이가 되어도 괜찮은 거야……?',
        ]);
        await era.printAndWait([
          '눈물로 얼룩진 뺨을 아무렇게나 닦아내며, 울음 섞인 미소를 지은 ',
          urara.get_colored_name(),
          '는 몸을 돌려 ',
          me.get_colored_name(),
          '를 부드럽게 바닥에 덮치듯 껴안았다.',
        ]);
        await urara.say_and_wait([
          '그럼, 오늘이랑 내일, 모레도…… 아니, 그건 너무 제멋대로니까, 지금 이 순간만이라도 괜찮은 거지……?',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait([
          '보시다시피, 당신을 이곳으로 데려오긴 했지만 ',
          urara.sex,
          '는 끝내 독한 마음을 먹지 못했네요. 아무튼 당신은 그저 즐겨주시면 됩니다.',
        ]);
        await in_urara.say_as_unknown_and_wait([
          '하지만 떠날 때는 우라라를 잘 달래서 재워주는 게 좋을 거예요. ',
          urara.sex,
          '는 오늘을 위해 아주 오랫동안 울었으니까요.',
        ]);
        era.println();
        const relation_delta =
          era.get('love:52') * (era.get('flag:극단적행위제한') || 1) -
          era.get('relation:52:0') +
          10;
        if (relation_delta > 0 && sys_like_chara(52, 0, relation_delta)) {
          await era.waitAnyKey();
        }
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          '쪽은 쳐다보지도 않은 채, ',
          me.get_colored_name(),
          '은(는) 묵묵히 일어나 돌아보지 않고 방 끝의 문을 향해 걸어갔다.',
        ]);
        await urara.say_and_wait([
          '……우라라도 알고 있어, 나쁜 아이가 되는 건 안 되는 거지, 미안해…… 하지만, ',
          callname,
          '를 다른 사람에게 넘겨주는 건……',
        ]);
        await urara.say_and_wait([
          '하지만, 단지 곁에 있는 자리 하나만이라도…… ',
          callname,
          ', 만약 다음에, 만약에 다음 기회가 있다면……!',
        ]);
        await era.printAndWait([
          '밀어젖힌 묵직한 문이 둔탁한 소리를 내며 닫히고, 대답을 듣지 못한 가여운 ',
          urara.get_uma_sex_title(),
          '는 상처투성이가 된 어둠 속에 홀로 남겨졌다.',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait([
          '……너무 물러터진 거 아닐까요? 『비열해지기로 결심하는 것』은 ',
          urara.sex,
          '에겐 역시 너무나 어려운 일이었나 보네요……',
        ]);
        await in_urara.say_as_unknown_and_wait([
          '당신도 너무하시네요. 우라라가 나중에 정말 무슨 일을 저지르더라도, 저는 대체로 당신 편을 들어주지 않을 거라는 걸 알아두세요.',
        ]);
        era.set('exp:52:감금횟수', 1);
        hook.override = true;
        era.println();
        sys_like_chara(52, 0, -get_random_value(75, 125)) &&
          (await era.waitAnyKey());
      }
    }
  }
};