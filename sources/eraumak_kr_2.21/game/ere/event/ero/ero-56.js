/**
 * @file 마치카네 후쿠키타루 - 조교
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const SleepCommandLines = require('#/event/ero/common/sleep/sleep-common');
const CustomizedEro = require('#/event/ero/ero-common');
const KitaruNormalCommunications = require('#/event/ero/ero-lines-56/normal-communications');
const KitaruNormalFucking = require('#/event/ero/ero-lines-56/normal-fucking');
const KitaruNormalMakingOuts = require('#/event/ero/ero-lines-56/normal-making-outs');
const KitaruNormalSm = require('#/event/ero/ero-lines-56/normal-sm');
const KitaruSleepFucking = require('#/event/ero/ero-lines-56/sleep-fucking');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { location_enum } = require('#/data/locations');

class KitaruNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, { communications: true });
    this.communications = new KitaruNormalCommunications(this);
    this.making_outs = new KitaruNormalMakingOuts(this);
    this.fucking = new KitaruNormalFucking(this);
    this.sm = new KitaruNormalSm(this);
  }
}

class KitaruSleepLines extends SleepCommandLines {
  constructor(root) {
    super(root, { fucking: true });
    this.fucking = new KitaruSleepFucking(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true, sleep: true });
    this.normal = new KitaruNormalLines(this);
    this.sleep = new KitaruSleepLines(this);
  }

  async ero_start() {
    const kitaru = get_chara_talk(56),
      me = get_chara_talk(0),
      relation = era.get('relation:56:0'),
      callname = sys_get_callname(56, 0);
    if (era.get('tflag:강간') >= 0 || !sys_check_awake(56)) {
      return;
    }
    if (era.get('status:56:우마뾰이Z') || era.get('status:56:超馬跳Z')) {
      await kitaru.say_and_wait(['제 몸이…… 너무 뜨거워요……']);
      await era.printAndWait([
        '필사적으로 자제하려 애쓰는 ',
        kitaru.get_colored_name(),
        '가 무릎을 안고 구석에 웅크리자, 발정으로 상기된 분홍빛 쇄골이 도드라졌다.',
      ]);
      await kitaru.say_and_wait(['하아❤️～하❤️']);
      await era.printAndWait([
        '벌어진 입술 사이로 혀가 노출되었고, 실룩이는 코끝은 끊임없이 ',
        me.get_colored_name(),
        '의 체취를 들이마셨다.',
      ]);
      await kitaru.say_and_wait(['원해요❤️원해요❤️원해요❤️원해요❤️']);
      await era.printAndWait([
        '마침내 약기운을 이기지 못한 ',
        kitaru.get_colored_name(),
        '가 비틀거리며 일어났고, 옷가지가 하나둘 바닥으로 떨어졌다.',
      ]);
      if (kitaru.sex_code - 1) {
        await era.printAndWait([
          '우윳빛 가슴이 ',
          me.get_colored_name(),
          '의 몸에 밀착되었고, 옷 너머로도 ',
          kitaru.get_colored_name(),
          '의 딱딱하게 선 유두와 귓가에 닿는 뜨거운 숨결이 느껴졌다.',
        ]);
      }
      await kitaru.say_and_wait([
        '이제…… 한계예요, ',
        sys_get_colored_callname(56, 0),
        ', 저를 먹어치워 주세요.',
      ]);
    } else if (era.get('status:56:발정')) {
      await kitaru.say_and_wait(['같이 할까요?']);
      await kitaru.say_and_wait(['분명히…… 하아❤️ 너무 더워요……']);
      await era.printAndWait([
        '발정기 때문에 적극적으로 변한 ',
        kitaru.get_colored_name(),
        '가 스스로 땀에 젖은 옷을 벗기 시작했다.',
      ]);
      await era.printAndWait([
        '붉게 물든 입술이 연신 벌어지며 하얀 김 같은 숨을 내뱉었고, 최음적인 호르몬이 방 안을 가득 채웠다.',
      ]);
      await kitaru.say_and_wait(['너무 뜨거워요……']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 스스로 옷을 벗자, 요염한 기운을 머금은 체액이 쉼 없이 흘러내려 바닥에 뚝뚝 떨어졌다.',
      ]);
      await era.printAndWait([
        '이내 초점이 흐려진 채 ',
        me.get_colored_name(),
        '의 품에 쓰러지듯 안겼고, 밤색 꼬리가 ',
        me.get_colored_name(),
        '의 허벅지를 감싸 안았다.',
      ]);
      await kitaru.say_and_wait([
        '도와주세요…… ',
        sys_get_colored_callname(56, 0),
        '.',
      ]);
    } else if (era.get('flag:현재위치') === location_enum.restroom) {
      if (relation < 400) {
        await kitaru.say_and_wait(['으음…… 저기, ', callname, '?']);
        await era.printAndWait([
          me.get_colored_name(),
          '에게 강압적으로 안긴 ',
          kitaru.get_colored_name(),
          '가 약하게 떨었지만, 귀는 알기 쉽게 쫑긋거리고 있었다.',
        ]);
        await kitaru.say_and_wait([
          '여기서 하는 건가요…… 만약 풍기위원이 발견이라도 하면 어떡하죠?',
        ]);
        await kitaru.say_and_wait(['으응! 츄❤️…… 츄릅❤️']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 물음에 돌아온 것은 ',
          me.get_colored_name(),
          '의 입술이었다.',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '손도 가만히 있지 않고 담당의 스커트 안으로 들어가 허벅지 사이의 부드러운 살을 주물렀고, 마침내 ',
            kitaru.sex,
            '의 팬티를 축축하게 적셔놓았다.',
          ]);
        }
        await era.printAndWait([
          '정욕이 불붙은 ',
          kitaru.get_colored_name(),
          '가 눈가에 눈물을 머금은 채 ',
          me.get_colored_name(),
          '의 품에 기댔다.',
        ]);
        await kitaru.say_and_wait([
          '얼른 시작해 주세요…… ',
          sys_get_colored_callname(56, 0),
          '❤️',
        ]);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) 눈이 마주친 ',
          kitaru.get_colored_name(),
          '가 갑자기 무언가 깨달은 듯했고, 밤색 꼬리의 움직임이 멎었다.',
        ]);
        await kitaru.say_and_wait(['저기…… 하고 싶으신 건가요?']);
        await kitaru.say_and_wait(['그런 눈빛을 하시면 점을 치지 않아도 다 알 수 있다구요!']);
        await kitaru.say_and_wait(['으음, 아직 학원 안인데 들키기라도 하면……']);
        await era.printAndWait(['쿵!']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '입으로는 불평하면서도 교복 치마는 바닥으로 떨어졌고, 이어서 상의가 벗겨지는 둔탁한 소리가 들렸다…… 마지막으로 스포츠 브라까지 벗겨지자, 갇혀 있던 가슴이 툭 튀어나왔다.',
          ]);
          await era.printAndWait([
            '분홍빛이 도는 풍만한 가슴 위로, 기대감에 부풀어 오른 유두가 바짝 서 있었다.',
          ]);
        }
        await kitaru.say_and_wait(['하아❤️～하❤️……']);
        await era.printAndWait([
          '두 팔로 ',
          me.get_colored_name(),
          '의 목을 살며시 감싼 채, ',
          kitaru.get_colored_name(),
          '가 젖어든 눈동자로 ',
          me.get_colored_name(),
          '를 바라보았다.',
        ]);
        await kitaru.say_and_wait([
          sys_get_colored_callname(56, 0),
          '…… 저를 기분 좋게 만들어 주세요.',
        ]);
      }
    } else if (era.get('flag:현재위치') === location_enum.home) {
      if (relation < 400) {
        await era.printAndWait([
          me.get_colored_name(),
          '의 집안 어디에 행운 아이템을 놓을지 연구하던 ',
          kitaru.get_colored_name(),
          '에게 등 뒤로 다가갔다.',
        ]);
        await kitaru.say_and_wait(['꺄악……']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '두 손을 ',
            kitaru.get_colored_name(),
            '의 옷 속으로 밀어 넣어 풍만한 가슴을 훑자, 주황색 머리 소녀가 작은 소리로 항의했다.',
          ]);
          await kitaru.say_and_wait(['적어도, 이것만이라도 제대로 놓게 해주세요……']);
          await era.printAndWait([
            '하지만 멈추지 않는 손은 더 아래로 내려가, 더 많은 자극을 갈구하는 ',
            kitaru.get_colored_name(),
            '의 자궁 위를 가볍게 압박했다.',
          ]);
        }
        await era.printAndWait([
          '그러자 ',
          kitaru.get_colored_name(),
          '는 무의식적으로 몸을 뒤로 뺐고, 바지 너머로 엉덩이 골이 ',
          me.get_colored_name(),
          '의 육봉에 밀착되었다.',
        ]);
        await kitaru.say_and_wait(['……딱딱해요.']);
        await kitaru.say_and_wait(['지금 하고 싶으신 건가요?']);
        await kitaru.say_and_wait([
          sys_get_colored_callname(56, 0),
          '도 참기 힘들어 보이시네요……',
        ]);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '의 집안 어디에 행운 아이템을 놓을지 연구하던 ',
          kitaru.get_colored_name(),
          '를 뒤에서 껴안았다.',
        ]);
        await kitaru.say_and_wait(['므흐흐!!!']);
        await kitaru.say_and_wait([
          callname,
          ', 저에게 무슨 짓을 하려는 걸까요…… 음～❤️ 츄～❤️',
        ]);
        await era.printAndWait([
          '이미 예상했다는 듯 고개를 돌려 ',
          me.get_colored_name(),
          '의 입술을 덮쳐왔다.',
        ]);
        await era.printAndWait([
          '두 사람의 입술과 혀가 즉시 격렬하게 뒤엉켰고, 공기 중에 음란한 마찰음이 울려 퍼졌다.',
        ]);
        await kitaru.say_and_wait(['음～❤️…… 츄아❤️～츄…… 응❤️']);
        await era.printAndWait([
          '갑자기 ',
          kitaru.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 손을 움켜잡더니, ',
          me.get_colored_name(),
          '의 손을 ',
          kitaru.sex,
          '의 가랑이 사이로 이끌며 팬티를 끌어내렸다.',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '허벅지 안쪽까지 번들거리는 수분기가 가득해 육안으로도 흠뻑 젖은 것이 보였다.',
          ]);
        }
        await kitaru.say_and_wait(['응…… 어차피 외박 허가도 받았으니까요～❤️']);
        await kitaru.say_and_wait(['저를…… 훨씬 더 기분 좋게 해주세요～❤️']);
      }
    } else if (
      era.get('love:56') >= 50 &&
      era.get('flag:현재위치') !== location_enum.home
    ) {
      await kitaru.say_and_wait([callname, ', 하고 싶으신 건가요?']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 품에 안긴 ',
        kitaru.get_colored_name(),
        '가 얼굴을 붉히며 말했고, 귀가 당신의 얼굴을 가볍게 쳤다.',
      ]);
      await me.say_and_wait(['싫어?']);
      await kitaru.say_and_wait([
        '에! 전혀요!!! 절대, 절대로 ',
        me.get_colored_name(),
        '이 싫을 리 없잖아요!',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '의 얼굴을 부드럽게 어루만지고 머리카락을 쓰다듬어 주자, ',
        me.get_colored_name(),
        '에게 버림받을까 두려워하던 ',
        kitaru.get_colored_name(),
        '가 안심한 듯 진정했다.',
      ]);
      await me.say_and_wait(['……이제 먹어버릴 거야.']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 품에 녹아내린 ',
        kitaru.get_colored_name(),
        '가 젖은 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await kitaru.say_and_wait(['네……']);
      await kitaru.say_and_wait([
        '……부디 ',
        sys_get_colored_callname(56, 0),
        ' 마음대로 요리해 주세요.',
      ]);
    }
  }

  async orgasm(kitaru, me) {
    if (!era.get('tflag:주도권')) {
      switch (era.get('tflag:이전행동')) {
        case ero_hooks.standing:
          if (era.get('nowex:56:질구절정') > 0) {
            if (
              era.get('nowex:0:음경절정') > 0 &&
              era.get('nowex:56:질내정액') > 0
            ) {
              await era.printAndWait([
                kitaru.get_colored_name(),
                '는 몸 안에서 날뛰던 육봉이 움찔거리며 사정 준비를 마친 것을 느꼈다.',
              ]);
              await era.printAndWait([
                '눈이 뒤집힌 ',
                kitaru.get_colored_name(),
                '의 허리와 엉덩이를 꽉 붙잡고, 발정으로 내려온 자궁에 육봉을 밀착시킨 채 정액을 쏟아부었으며, 질 내부의 살점들은 귀두를 빨아올리듯 자극했다.',
              ]);
              await kitaru.say_and_wait('～응으으으응으읏!!!');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '의 활기차던 얼굴은 눈동자가 위로 돌아갔고, 입술은 크게 벌어진 채 부드러운 혀를 내밀고 있었다.',
              ]);
              await era.printAndWait([
                '농후한 백탁액이 결합 부위에서 바닥으로 뚝뚝 떨어졌다.',
              ]);
            } else {
              await kitaru.print_and_wait(['응아아앗～!!!']);
              await era.printAndWait([
                '절정에 도달한 ',
                kitaru.get_colored_name(),
                '는 경련하는 발가락 끝 때문에 균형조차 잡지 못했다.',
              ]);
              await era.printAndWait([
                '끊임없이 육봉을 찔러넣는 ',
                me.get_colored_name(),
                '를 더욱 세게 껴안으며 목구멍으로 애원하는 듯한 신음을 흘렸다.',
              ]);
            }
          }
          break;
        case ero_hooks.hug_standing:
          if (era.get('nowex:56:질구절정') > 0) {
            if (
              era.get('nowex:0:음경절정') > 0 &&
              era.get('nowex:56:질내정액') > 0
            ) {
              await era.printAndWait([
                '사정 직전의 육봉을 완전히 뽑아냈다가, 엉덩이를 살짝 들어 올려 각도를 조절했다.',
              ]);
              await era.printAndWait([
                '육봉이 주름진 질벽을 짓누르며 깊숙이 파고들어, ',
                kitaru.get_colored_name(),
                '의 자궁경부에 닿은 채 정액을 쏟아내기 시작했다.',
              ]);
              await kitaru.say_and_wait('～～으윽, 뜨거워…… 너무…… 굉장해요……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '의 부드러운 몸이 거의 ',
                me.get_colored_name(),
                '에게 끌려가듯 활처럼 휘어졌다. 고개가 뒤로 젖혀진 채 ',
                me.get_colored_name(),
                '의 품에 기댔고, 압박되어 흘러나온 정액이 허벅지를 타고 흘러내려 밤색 꼬리 끝을 적셨다.',
              ]);
            } else {
              await kitaru.print_and_wait(['아…… 아아❤️']);
              await era.printAndWait([
                '제어할 수 없이 몸을 활처럼 휘며 백조 같은 하얀 목을 뒤로 젖힌 채 당신의 품에 기대왔다.',
              ]);
              await era.printAndWait([
                '압박되어 흘러나온 애액이 허벅지를 타고 흘러내려 밤색 꼬리에 짙은 흔적을 남겼다.',
              ]);
            }
          }
      }
    }
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(56)) {
      return await super.get_mark(level, type, _new);
    }
    const callname = sys_get_callname(56, 0),
      kitaru = get_chara_talk(56),
      me = get_chara_talk(0),
      love = era.get('love:56');
    switch (type) {
      case mark_enum.pleasure:
        if (kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait('응앗!!!');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '가 시선을 피했지만, ',
                me.get_colored_name(),
                '이(가) 계속해도 되냐고 묻자 고개를 끄덕였다.',
              ]);
              await era.printAndWait(
                '박자에 맞춰 허리를 흔들며, 혼자서는 맛볼 수 없는 쾌감을 음미했다.',
              );
            } else {
              await kitaru.say_and_wait('으응! 하아하아……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '가 고개를 갸웃하며 잠시 생각에 잠겼다.',
              ]);
              await kitaru.say_and_wait('어째서…… 이렇게 기분 좋은 걸까.');
            }
            break;
          case 2:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '하아아!!! ',
                me.get_colored_actual_name(),
              ]);
              await era.printAndWait([
                '절정 속에서 크게 ',
                me.get_colored_name(),
                '의 이름을 불렀다. 평소 ',
                kitaru.get_colored_name(),
                '에게서 느껴지던 무녀로서의 성스러움은.',
              ]);
              await era.printAndWait('이 순간 완전히 사라졌다.');
            } else {
              await kitaru.say_and_wait('하…… 빨리! 더 빨리요!');
              await era.printAndWait([
                '격렬한 절정 때문에 몸을 떨면서도, 서서히 쾌감에 지배당한 ',
                kitaru.get_colored_name(),
                '가 ',
                me.get_colored_name(),
                '에게 계속해달라고 간청했다.',
              ]);
            }
            break;
          case 3:
            if (love >= 75 || !get_penis_size(0)) {
              await kitaru.say_and_wait('자지…… 더 격렬하게…… 자지 님!!!');
              await era.printAndWait([
                '성행위가 주는 쾌감이 점차 ',
                kitaru.get_colored_name(),
                '의 의식을 덮어버렸다.',
              ]);
              await era.printAndWait([
                kitaru.get_uma_sex_title(),
                '가 입 밖으로 내뱉는 음란한 말들은, 시라오키 님의 완전한 패배를 상징했다.',
              ]);
            } else {
              await kitaru.say_and_wait('으아앙!!!');
              await era.printAndWait([
                '절정에 지배당한 ',
                kitaru.get_colored_name(),
                '가 어디에 있을지 모를 신을 멍하니 바라보았다.',
              ]);
              await era.printAndWait([
                '입가에서 새어 나오는 몽롱한 간청으로 보아, 몸이 완전히 굴복한 ',
                kitaru.sex,
                '의 기도 대상은 이제 이런 쾌감을 주는 ',
                me.get_colored_name(),
                '(으)로 바뀌어 있었다.',
              ]);
            }
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            era.println();
            await kitaru.say_and_wait('으응～!');
            await era.printAndWait([
              kitaru.get_colored_name(),
              '가 ',
              me.get_colored_name(),
              '에게 몸을 맡긴 채 처분만을 기다렸다.',
            ]);
            await era.printAndWait('얼굴에는 정욕이 가득했고, 가녀린 몸이 움찔거리며 떨렸다.');
            break;
          case 2:
            era.println();
            await kitaru.say_and_wait('앙!!!');
            await kitaru.say_and_wait('아니, 괜찮아요～ 운명의 사람, 계속해 주세요!');
            await era.printAndWait([
              kitaru.get_colored_name(),
              '의 물안개 낀 주황색 눈동자가 ',
              me.get_colored_name(),
              '을(를) 응시했다.',
            ]);
            await era.printAndWait([
              '가끔 ',
              kitaru.sex,
              '의 민감한 곳에 닿을 때마다, ',
              kitaru.sex,
              '는 그에 맞춰 귀여운 교성을 내뱉었다.',
            ]);
            break;
          case 3:
            await era.printAndWait([
              '눈을 감은 ',
              kitaru.get_colored_name(),
              '가 ',
              me.get_colored_name(),
              '의 목에 팔을 두르고는 살짝 까치발을 들어 ',
              me.get_colored_name(),
              '의 귀에 입술을 가져다 댔다.',
            ]);
            await kitaru.say_and_wait('주인님……');
            await kitaru.say_and_wait('헤헤, 운명의 사람은 이 호칭이 마음에 드시나요?');
            await kitaru.say_and_wait('그럼, 주인님이 이제부터 후쿠를 망가뜨려도 괜찮아요!');
            break;
        }
        break;
      case mark_enum.pain:
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait('하아! 아파요!!!');
              await kitaru.say_and_wait('괜찮아요……');
              await kitaru.say_and_wait('조금만 더 부드럽게 해주셨으면 해서……');
            } else {
              await kitaru.say_and_wait('으윽……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '의 표정이 고통으로 일그러졌지만, ',
                kitaru.sex,
                '는 필사적으로 이를 악물고 신음을 삼켰다.',
              ]);
            }
            break;
          case 2:
            if (love >= 75) {
              era.println();
              await kitaru.say_and_wait('아야～!?');
              await kitaru.say_and_wait(
                '제가 조금 마조 성향이 있긴 하지만…… 이건 너무 심하신 거 아닌가요!?',
              );
            } else {
              await kitaru.say_and_wait('꺄악～!?');
              await kitaru.say_and_wait('시라오키 님…… 살려주세요……');
            }
            break;
          case 3:
            if (love >= 75) {
              await kitaru.say_and_wait('싫어! 싫다구요!!!');
              await kitaru.say_and_wait('전…… 운명의 사람이 이렇게 변하는 걸 바라지 않아요……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                '의 몸이 고통으로 쉼 없이 떨렸고, 눈물이 뚝뚝 떨어졌다.',
              ]);
            } else {
              await kitaru.say_and_wait('……');
              await era.printAndWait([
                me.get_colored_name(),
                '의 손길에 인형처럼 몸을 맡긴 채, ',
                kitaru.get_colored_name(),
                '라는 이름의 ',
                kitaru.get_uma_sex_title(),
                '는 다시금 자신의 기억을 닫으려 애쓰고 있었다.',
              ]);
            }
        }
        break;
      case mark_enum.shame:
        switch (level) {
          case 1:
            await kitaru.say_and_wait('으으…… 부디, 계속해 주세요……');
            await era.printAndWait([
              '정사 도중 ',
              kitaru.get_colored_name(),
              '가 손으로 자신의 눈을 가리려 했다. ',
              kitaru.sex,
              '는 이런 행위가 여전히 부끄러운 모양이었다.',
            ]);
            break;
          case 2:
            await kitaru.say_and_wait('으음…… 역시 조금 부끄러워요……');
            await kitaru.say_and_wait('만약 시라오키 님이 보신다면.');
            break;
          case 3:
            await kitaru.say_and_wait('아아 이제 상관없어요……');
            await era.printAndWait([
              '자포자기한 듯한 말을 내뱉으며, ',
              kitaru.get_colored_name(),
              '는 ',
              me.get_colored_name(),
              '의 대담한 동작에 맞춰 몸을 움직였다.',
            ]);
            await kitaru.say_and_wait('저…… 정말 파렴치한 짓을 하고 있네요.');
        }
        break;
      case mark_enum.hate:
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '이, 이런 게 ',
                callname,
                '의 취향이신가요?',
              ]);
              await kitaru.say_and_wait('조금 너무하신 것 같은데요……');
            } else {
              await kitaru.say_and_wait('아…… 거절해도 될까요?');
              await kitaru.say_and_wait([callname, ', 저도 가끔은 화낸다구요!']);
            }
            break;
          case 2:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '저기…… ',
                callname,
                ', 제가 조금 싫어지신 건가요?',
              ]);
              await kitaru.say_and_wait([
                '마, 말 잘 들을게요…… 어떻게 하면 ',
                callname,
                '을 기쁘게 해드릴 수 있는지 알려주세요……',
              ]);
            } else {
              await kitaru.say_and_wait('그런 건가요?');
              await era.printAndWait([
                '호박색의 따스하던 눈동자가 차갑게 식었고, 날카로운 눈빛이 ',
                me.get_colored_name(),
                '을(를) 훑었다.',
              ]);
            }
            break;
          case 3:
            if (love >= 75) {
              await kitaru.say_and_wait('운명의 사람……');
              await kitaru.say_and_wait([
                '……',
                kitaru.get_bigger_sibling_sex_title(),
                ', 나……',
              ]);
              await kitaru.say_and_wait('나 어떡하면 좋지……');
              await era.printAndWait('별을 머금었던 호박색 눈동자가 이제는 빛을 잃었다.');
            } else {
              await kitaru.say_and_wait('꼭 이래야만 하나요?');
              await era.printAndWait([
                '순식간에 신에게 감시당하는 듯한 압박감이 ',
                me.get_colored_name(),
                '의 몸을 짓눌렀다.',
              ]);
              await kitaru.say_and_wait(
                '운명의 사람…… 지금은 이 호칭이 조금 역겹게 느껴지네요.',
              );
              await kitaru.say_and_wait(
                '그래도 나름 점괘의 결과니까…… 그러니, 앞으로는 저에게 이러지 말아 주시겠어요?',
              );
            }
        }
        break;
      case mark_enum.ero:
        if ((level >= 2 && _new) || kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        switch (level) {
          case 1:
            await era.printAndWait(
              '아랫배에 새겨진 복잡한 문양이 난자의 활동 궤적을 보여주고 있었다……',
            );
            await era.printAndWait(
              '분홍빛으로 빛나는 문양은 주인의 신분을 암시하듯 신토의 토리이와 유사한 형태를 그리고 있었다.',
            );
            await kitaru.say_and_wait(['설마 ', callname, '이 이런 것까지 할 줄은 몰랐어요……']);
            break;
          case 2:
            await kitaru.say_and_wait('으음…… 문양이 훨씬 복잡해졌네요……');
            await era.printAndWait([
              kitaru.get_colored_name(),
              '가 아랫배 자궁 위치에 자리 잡은 토리이 주변의 장식들을 묵묵히 바라보았다……',
            ]);
            await kitaru.say_and_wait('시라오키 님이 이걸 보시면 뭐라고 하실지 모르겠네요.');
            break;
          case 3:
            await era.printAndWait(
              '더욱 정교해진 문양은 이제 임신 확률과 수태 여부까지 표시하는 기능을 갖추었다……',
            );
            await era.printAndWait([
              '신에게 선택받은 무녀가 배꼽 아래를 어루만지며, 스스로 ',
              me.get_colored_name(),
              '에게 다리를 벌렸다.',
            ]);
            await era.printAndWait(
              '실처럼 액을 끌어올리는 비소가 호흡에 맞춰 깜빡이는 음문과 함께 리듬감 있게 달싹였다.',
            );
            await kitaru.say_and_wait('하아…… 하아……');
            await era.printAndWait([
              '분홍빛 광채를 띤 눈동자가 멍하니 ',
              me.get_colored_name(),
              '을(를) 바라보았다.',
            ]);
        }
    }
  }
};