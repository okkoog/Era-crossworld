/**
 * @file 아그네스 타키온 - 조교
 * @author 幽白書
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');
const tachyon_ero_start = require('#/event/ero/ero-lines-32/ero-start');

const TachyonNormalItems = require('#/event/ero/ero-lines-32/items');
const TachyonNormalCommunications = require('#/event/ero/ero-lines-32/normal-communications');
const TachyonNormalFucking = require('#/event/ero/ero-lines-32/normal-fucking');
const TachyonNormalMakingOuts = require('#/event/ero/ero-lines-32/normal-making-outs');
const TachyonNormalSm = require('#/event/ero/ero-lines-32/normal-sm');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

class TachyonNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      fucking: true,
      items: true,
      making_outs: true,
      sm: true,
    });
    this.communications = new TachyonNormalCommunications(this);
    this.making_outs = new TachyonNormalMakingOuts(this);
    this.fucking = new TachyonNormalFucking(this);
    this.sm = new TachyonNormalSm(this);
    this.items = new TachyonNormalItems(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(root) {
    super(root, { normal: true });
    this.normal = new TachyonNormalLines(this);
  }

  async ero_start() {
    await tachyon_ero_start();
  }

  async orgasm(tachyon, me) {
    const penis_touched_part = era.get('tcvar:0:음경접촉부위');
    if (
      sys_check_awake(32) &&
      era.get('tflag:강간') !== 0 &&
      penis_touched_part.owner === 32
    ) {
      const last_action = era.get('tflag:이전행동'),
        other_action = era.get('tflag:상대의행동'),
        master = era.get('tflag:주도권');
      if (
        penis_touched_part.part === part_enum.mouth &&
        era.get('nowex:0:음경절정') > 0 &&
        era.get('nowex:32:정액음용량') > 0
      ) {
        if (
          (master === 0 && last_action === ero_hooks.ask_tit_and_blow_job) ||
          (master === 32 && other_action === ero_hooks.tit_and_blow_job)
        ) {
          await tachyon.say_and_wait('츄릅❤️꿀꺽❤️츄르릅❤️');
          era.println();
          await era.printAndWait([
            '사정된 정액이 ',
            tachyon.get_colored_name(),
            '의 목구멍으로 쏟아져 들어갔다.',
          ]);
          await era.printAndWait([
            '하지만 과도한 사정량은 ',
            tachyon.get_colored_name(),
            '이 한 번에 삼킬 수 있는 양을 넘어섰다.',
          ]);
          await era.printAndWait([
            '백탁액이 입가에서 흘러나와 가슴 위로 떨어지자, ',
            tachyon.get_colored_name(),
            '은 서둘러 한손으로 가슴을 받쳐 들며 흘러내리는 정액을 다시 입안으로 긁어모았다.',
          ]);
          era.println();
          await tachyon.say_and_wait('츕❤️츄르릅❤️');
          await tachyon.say_and_wait('아직 더 있어……');
          await tachyon.say_and_wait([
            '이건 전부 ',
            sys_get_callname(32, 0),
            '의 소중한 인자니까❤️ 낭비해선 안 된다고❤️',
          ]);
          era.println();
          await era.printAndWait([
            '자신의 몸에 묻은 것을 핥아내기 무섭게, ',
            tachyon.get_colored_name(),
            '은 다시 여운에 젖어 있는 육봉을 노려보았다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 힘차게 빨아올려, 남은 정액을 요도 끝까지 훑어내듯 빨아들였다.',
          ]);
          era.println();
          await tachyon.say_and_wait('이걸로…… 깨끗해졌네❤️');
          era.println();
          await era.printAndWait([
            '입안에 모은 정액을 당신에게 확인시켜준 뒤에야, ',
            tachyon.get_colored_name(),
            '는 느긋하게 백탁액을 삼켰다.',
          ]);
          await era.printAndWait([
            '목울대가 음란하게 위아래로 움직이는 꼴이, 마치 ',
            me.get_colored_name(),
            '에게 삼키는 과정을 똑똑히 보여주려는 것 같았다.',
          ]);
          era.println();
          await tachyon.say_and_wait('하아…… 또 비어버렸네❤️ 좀 더 듬뿍 내보내서, 채워주지 않겠나❤️');
        } else if (
          master === 0 &&
          last_action === ero_hooks.force_deep_blow_job
        ) {
          await tachyon.say_and_wait('읍, 으으윽❤️ 응믓❤️ 우구❤️');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 머리를 강하게 억눌렀다.',
          ]);
          await era.printAndWait([
            '귀두를 ',
            tachyon.get_colored_name(),
            '의 목구멍 깊숙한 곳까지 처박고 사정을 시작했다.',
          ]);
          await era.printAndWait([
            '사정이 끝날 때까지도 ',
            me.get_colored_name(),
            '은(는) 육봉으로 길을 막아, 자신의 정액이 ',
            tachyon.get_colored_name(),
            '의 식도 구석구석까지 깊게 스며들도록 만들었다.',
          ]);
          era.println();
          await era.printAndWait([
            '산소가 부족했던 탓인지, 육봉이 빠져나온 뒤의 ',
            tachyon.get_colored_name(),
            '의 표정은 어딘가 멍해 보였다.',
          ]);
          await era.printAndWait(
            '그럼에도 무의식적으로 입가에 묻은 백탁액과 엉겨 붙은 체모를 입안으로 삼켰다……',
          );
        } else if (
          (master !== 0 || last_action !== ero_hooks.ask_deep_blow_job) &&
          (master !== 32 || other_action !== ero_hooks.deep_blow_job)
        ) {
          await tachyon.say_and_wait('음…… 꿀꺽…… 꿀꺽……');
          era.println();
          if (Math.random() < 0.5) {
            await era.printAndWait('마치 이 순간만을 기다려온 것 같았다.');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 한 모금씩, 기쁜 듯이 사정된 백탁액을 전부 마셔버렸다.',
            ]);
            era.println();
            await tachyon.say_and_wait('푸하……');
            era.println();
            await era.printAndWait('벌어진 입술과 혀 사이에는 여전히 하얀 실이 남아 있었다.');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 그대로 입을 벌린 채, 혀를 놀려 입안의 정액을 한데 모았다.',
            ]);
            await era.printAndWait('그리고 다시 삼켜버렸다.');
            era.println();
            await tachyon.say_and_wait('잘 먹었네❤️');
          } else {
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 ',
              me.get_colored_name(),
              '의 앞에서 혀를 내밀어, 자신이 짜낸 대량의 정액을 과시했다.',
            ]);
            await era.printAndWait([
              '늘 자신만만하던 얼굴이 백탁액으로 더럽혀진 모습은 ',
              me.get_colored_name(),
              '의 내면에 잠재된 욕망을 부추겼다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '이것이 ',
              sys_get_callname(32, 0),
              '의 인자인가…… 실험에 사용한다면……',
            ]);
            era.println();
            await era.printAndWait('그렇게 말하면서도, 한동안 입안에서 굴리며 맛을 보더니……');
            era.println();
            await tachyon.say_and_wait('츄릅…… 꿀꺽…… 푸하❤️');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 ',
              me.get_colored_name(),
              '를 향해 이미 텅 비어버린 작은 입을 벌려 보였다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '전부 마셔버렸다고…… 이러면 어쩔 수 없이, 한 번 더 해야 하지 않겠나❤️',
            );
          }
        }
      } else if (
        penis_touched_part.part === part_enum.breast &&
        era.get('nowex:0:음경절정') > 0
      ) {
        await tachyon.say_and_wait('진해……❤️');
        await tachyon.say_and_wait([
          '전부 얼굴에 묻어서…… ',
          sys_get_colored_callname(32, 0),
          '의 냄새로 가득하네❤️',
        ]);
        era.println();
        await era.printAndWait('진득한 액체가 얼굴을 타고 가슴 위로 흘러내렸다.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 먼저 얼굴에 묻은 정액을 닦아내 손에 모았다.',
        ]);
        await era.printAndWait('하지만 마치 실수인 것처럼 가슴 위의 흔적은 남겨두었다.');
        await era.printAndWait([
          '알몸의 육체 위에는 ',
          me.get_colored_name(),
          '이(가) 사정한 비릿한 백탁액이 가득했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('이런…… 여긴 깜빡했군❤️');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '의 시선이 가슴에 고정된 것을 확인하자,',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 그제야 노골적이고 작위적인 감탄사를 내뱉었다.',
        ]);
        await era.printAndWait('가슴 위의 백탁액을 겹겹이 훑어내 입안으로 넣었다.');
        era.println();
        await tachyon.say_and_wait('츕…… 츄르릅❤️ 잘 먹었네❤️');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 손가락을 빨고는, 입을 벌려 깨끗해진 혀와 입술을 보여주며 남김없이 먹었음을 증명했다.',
        ]);
      } else if (
        penis_touched_part.part === part_enum.clitoris &&
        era.get('nowex:32:클리절정') + era.get('nowex:32:질구절정') > 0
      ) {
        await tachyon.say_and_wait('간다…… 가버려❤️');
        await tachyon.say_and_wait([
          '이제 ',
          sys_get_callname(32, 0),
          ' 전용의 암캐가 되어버려어어어❤️',
        ]);
      } else if (
        penis_touched_part.part === part_enum.virgin &&
        era.get('nowex:0:음경절정') > 0 &&
        era.get('nowex:32:질내정액') > 0 &&
        !master
      ) {
        if (last_action === ero_hooks.missionary) {
          await era.printAndWait([
            '늘 주도권을 쥐던 ',
            tachyon.get_colored_name(),
            '을 밑에 깔고 침범하는 행위는 ',
            me.get_colored_name(),
            '의 사정 욕구를 더욱 고조시켰다.',
          ]);
          era.println();
          await tachyon.say_and_wait('아❤️ 아응❤️ 모르모트 군❤️');
          await tachyon.say_and_wait('보지…… 보지 안쪽❤️ 너무 기분 좋아❤️');
          era.println();
          await me.say_and_wait('나온다……');
          await era.printAndWait([me.get_colored_name(), '이(가) 낮게 신음했다.']);
          await era.printAndWait('푸슉❤️ 푸슛❤️ 울컥울컥❤️');
          era.println();
          await era.printAndWait(
            '육봉이 빠져나옴에 따라, 질 내에 사정된 진한 백탁액이 천천히 흘러나왔다……',
          );
        } else if (
          last_action === ero_hooks.doggy_style ||
          last_action === ero_hooks.hug_standing
        ) {
          await tachyon.say_and_wait('하아…… 응아…… 오…… 으오오오오❤️');
          await tachyon.say_and_wait('짐승처럼 질내사정 당하고 있어어어❤️❤️❤️');
          await tachyon.say_and_wait(
            '이성이 날아가 버려❤️ 머릿속이 자지와 정액밖에 모르는 짐승이 되어버려어어❤️❤️❤️',
          );
          era.println();
          await era.printAndWait('순산형의 엉덩이가 충격을 충분히 완화해 주었다.');
          await era.printAndWait('육봉이 자궁구를 찌를 때마다 애액이 울컥 쏟아졌다.');
          await era.printAndWait('질 전체가 파르르 떨리며 육봉을 자극했다.');
          await era.printAndWait(
            '이윽고 귀두가 자궁구를 압박하며, 자궁 내부로 정액을 주입했다.',
          );
          await era.printAndWait('뷰룻～ 뷰루룻～ 뷰릇～');
          await era.printAndWait('긴 씨뿌리기가 끝날 때까지는 아직 시간이 좀 더 필요할 것 같았다.');
        }
      } else if (
        penis_touched_part.part === part_enum.anal &&
        era.get('nowex:0:음경절정') > 0 &&
        era.get('nowex:32:장내정액') > 0 &&
        !master &&
        last_action === ero_hooks.missionary_anal_sex
      ) {
        await tachyon.say_and_wait('간다…… 가버려, 가버려엇!');
        await tachyon.say_and_wait('항문으로, 똥구멍으로 가버려어어어어❤️');
        if (tachyon.sex_code !== 1) {
          era.println();
          await era.printAndWait(
            '강한 삽입이 몇 차례 이어진 뒤, 텅 빈 보지에서 조수가 뿜어져 나왔다.',
          );
          await era.printAndWait(
            '자신의 몸에 튄 것이든, 질 내에서 완만하게 흘러나오는 것이든, 모두 두 사람의 연결 부위로 모여 삽입을 위한 윤활제가 되었다.',
          );
          era.println();
          await me.say_and_wait('정말 편리한 성처리 도구군, 자가 윤활 기능까지 있고.');
          await era.printAndWait([
            me.get_colored_name(),
            '의 농담을 듣고 ',
            tachyon.get_colored_name(),
            '은 힘껏 육봉을 조여 불만을 표시하려 했지만, 완전히 힘이 빠진 몸으로는 그조차 불가능했다. 뿐만 아니라, 질이 그런 압박 자극에 반응해 다시금 가벼운 오르가즘을 느껴버렸다.',
          ]);
        }
      }
    }
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(32) || type === mark_enum.ero) {
      return await super.get_mark(level, type, _new);
    }
    const callname = sys_get_colored_callname(32, 0),
      love = era.get('love:32'),
      tachyon = get_chara_talk(32);
    switch (type) {
      case mark_enum.pleasure:
        switch (level) {
          case 1:
            if (love < 75) {
              await tachyon.say_and_wait(
                '음…… 뜨겁고 근질거려…… 몸이 좀 이상하군…… 약의 부작용인가?',
              );
            } else {
              await tachyon.say_and_wait('응…… 뜨겁고 근질근질해……');
              await tachyon.say_and_wait(
                '아니, 기분 나쁜 건 아니야…… 으음…… 시험 삼아, 좀 더 해보게…… 어쩐지, 신기한 기분이군……',
              );
            }
            break;
          case 2:
            if (love < 75) {
              await tachyon.say_and_wait(
                '안 돼…… 분명 호르몬의 작용일 뿐이야…… 그저 신체의 정상적인 반응인데…… 그런데, 그런데…… 어째서…… 이렇게 기분 좋은 거지……',
              );
            } else {
              await tachyon.say_and_wait(
                '잠깐…… 안쪽이 아직 진정되지 않았어…… 만약, 만약 더 기분 좋아지면…… 히익!',
              );
              await tachyon.say_and_wait(
                '안 돼, 계속하면 안 된다는 걸 알면서도 몸이 멋대로…… 머리가…… 생각할 수 없어',
              );
            }
            break;
          case 3:
            if (love < 75) {
              await tachyon.say_and_wait([
                '이제…… 더 이상 생각할 수 없어…… 기분 좋아…… 더…… 더 많이, ',
                callname,
                '…… 내게 줘…… 더 원해……',
              ]);
            } else {
              await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
              await tachyon.say_and_wait(
                '더…… 더 줘…… 안부터 밖까지 나를 완전히 가득 채워줘……❤️',
              );
              await tachyon.say_and_wait(
                '날 이렇게 만든 건 자네니까…… 그러니, 더 원한다고❤️ 내 영리한 두뇌가 육체적 결합 이외엔 아무것도 생각할 수 없게 해줘❤️',
              );
            }
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            if (love < 75) {
              await tachyon.say_and_wait(
                '가끔은 생각을 비우고 타인에게 몸을 맡기는 것도…… 어떤 의미에선 스트레스 해소법이 될 수 있으려나?',
                true,
              );
              await tachyon.say_and_wait([
                callname,
                '………………아니, 내가 무슨 생각을 하는 거지!',
              ]);
            } else {
              await tachyon.say_and_wait([
                '응❤️ 응아❤️ ',
                callname,
                '❤️ 잠깐…… 멈, 멈춰줘❤️',
              ]);
              await tachyon.say_and_wait('하아…… 하아……');
              await tachyon.say_and_wait(
                '분명…… 내 말대로 멈췄는데, 왜 몸은 아직도 이상한 기분이 드는 걸까……',
                true,
              );
              await tachyon.say_and_wait(
                [
                  '마치…… 내가 ',
                  callname,
                  '이 내 말을 무시해주길 바라는 것 같아…… 계속…… 나를 정신 못 차릴 정도로 몰아붙여 주길…………… 대체 무슨 생각을 하는 거냐고 나는!',
                ],
                true,
              );
            }
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 갑자기 미친 듯이 고개를 저었다.',
            ]);
            break;
          case 2:
            if (love < 75) {
              await tachyon.say_and_wait(['잠깐…… ', callname, '…… 그렇게까지 하지는……']);
              await tachyon.say_and_wait(`아니, 왜 더 격렬해지는 거야……!`);
              await tachyon.say_and_wait([
                '큭…… 분명 고작 ',
                callname,
                ' 주제에…… 분명 내 명령에 따라야 할 텐데……',
              ]);
              await tachyon.say_and_wait(
                '어째서…… 몸은 이전보다 더 기분 좋다고 느끼는 거지…… 설마 나, 마조히스트인 건가……',
                true,
              );
            } else {
              await tachyon.say_and_wait([
                '으응…… ',
                callname,
                ', 잠깐만…… 너무 세…… 히익❤️',
              ]);
              await tachyon.say_and_wait('싫어…………… 아니, 싫지 않아……');
              await tachyon.say_and_wait('잠깐! 또 갑자기 이렇게…… 응아아❤️❤️');
              await tachyon.say_and_wait([
                '그만하라고 했는데…… ',
                callname,
                ', 자네 정말, 하아',
              ]);
              await tachyon.say_and_wait('분명…… 지배권은 내 손에 있어야 하는데', true);
              await tachyon.say_and_wait(
                '어째서, 나는 반대로…… 지배당하고 싶어 하는 거지……',
                true,
              );
              await tachyon.say_and_wait('위험해…… 정말 위험하다고❤️', true);
            }
            break;
          case 3:
            await tachyon.say_and_wait(
              '사고를 포기하고, 누군가의 포로가 되는 것이 이렇게 기분 좋은 일이었다니……',
              true,
            );
            await tachyon.say_and_wait(
              '아아…… 예전의 나는 대체 무엇을 저항하고 있었던 걸까',
              true,
            );
            await tachyon.say_and_wait([
              callname,
              '…… 아니, 주인님…… 주인님…… 내게 줘, 더 원해……❤️',
            ]);
            await tachyon.say_and_wait(
              '괜찮아…… 이건 그저…… 그저…… 분위기를 돋우기 위한 유희일 뿐이야',
              true,
            );
            await tachyon.say_and_wait(
              '끝나고 나면 원래대로 돌아갈 거야…… 그래…… 그러니까……',
              true,
            );
            await tachyon.say_and_wait('부디 더…… 내게 더 많은 명령을 내려주게……❤️');
            get_custom_mec(32).set_callname();
        }
        break;
      case mark_enum.pain:
        switch (level) {
          case 1:
            if (love < 75) {
              await tachyon.say_and_wait([
                '아파!? 감히 주인에게 이런 짓을 하다니, ',
                callname,
                ', 무슨 생각인가!',
              ]);
            } else {
              await tachyon.say_and_wait([
                '아파!? ',
                callname,
                '…… 좀 더 상냥하게 해줄 순 없나?',
              ]);
            }
            break;
          case 2:
            if (love < 75) {
              await tachyon.say_and_wait('싫어…… 그만둬! 아파…… 더 이상 하지 마!');
            } else {
              await tachyon.say_and_wait([
                callname,
                '!? 내, 내가 뭘 잘못한 건가…… 왜, 왜 내게 이런 짓을……',
              ]);
            }
            break;
          case 3:
            if (love < 75) {
              await tachyon.say_and_wait(
                '아파…… 무서워…… 미안해…… 내가 잘못했어…… 내가 잘못했으니까…… 제발 그만해…… 아파, 아프다고……',
              );
            } else {
              await tachyon.say_and_wait([
                '아파…… ',
                callname,
                '…… 어째서…… 왜 내게 이런 짓을 하는 거지…… 이해할 수 없어……',
              ]);
              await tachyon.say_and_wait(
                '이게 사랑인가? 왜 자신의 연인을 이렇게 대하는 거지…… 난 모르겠어……',
              );
            }
        }
        break;
      case mark_enum.shame:
        switch (level) {
          case 1:
            await tachyon.say_and_wait('이런 건…… 너무 부끄럽군', true);
            await tachyon.say_and_wait(
              '평정심…… 평정심을 유지하자…… 이건 실험일 뿐이야, 음, 실험이다.',
              true,
            );
            break;
          case 2:
            await tachyon.say_and_wait(
              '안 되겠어…… 이제 실험이라는 핑계로 얼버무릴 수 없어',
              true,
            );
            await tachyon.say_and_wait(
              '나라도 사회의 일원이라고…… 이런 일에는 수치심을 느낀단 말이야',
              true,
            );
            await tachyon.say_and_wait(
              '윽…… 그런데…… 어째서 기분이 좋은 거지…… 내 몸이 대체 어떻게 된 거야……',
              true,
            );
            break;
          case 3:
            await tachyon.say_and_wait('하하…… 아하하……', true);
            await tachyon.say_and_wait(
              '매드 사이언티스트로서 타인의 시선 따위 신경 쓴 적 없지만…… 설마 내가 이런 꼴이 될 줄은 꿈에도 몰랐군',
              true,
            );
            await tachyon.say_and_wait(
              '자, 이제 아무래도 좋아…… 이미, 생각을 포기했으니까……',
              true,
            );
        }
        break;
      case mark_enum.hate:
        switch (level) {
          case 1:
            if (love < 50) {
              await tachyon.say_and_wait('………내 인내심에도 한계가 있네.');
              await tachyon.say_and_wait([
                '내 한계를 시험하지 말게, ',
                callname,
                '.',
              ]);
            } else {
              await tachyon.say_and_wait([callname, '……?']);
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은 마치 가장 신뢰하던 사람에게 뺨을 맞은 듯 멍하니 서 있었다.',
              ]);
              await era.printAndWait('분노보다는 당혹감과 믿기지 않는다는 감정이 앞섰다.');
            }
            break;
          case 2:
            if (love < 50) {
              await tachyon.say_and_wait('경고했을 텐데.');
              await tachyon.say_and_wait('세 번은 없어.');
            } else {
              await tachyon.say_and_wait([
                '어째서…… ',
                callname,
                '…… 내가 뭔가 잘못한 건가?',
              ]);
              await tachyon.say_and_wait([
                '내가 잘못한 거겠지…… 말해주게, ',
                callname,
                '……',
              ]);
              await tachyon.say_and_wait(
                '그렇지 않으면…… 그렇지 않으면…… 난 이해할 수가 없단 말이야! 왜 자네가 이런 짓을 하는 건지!',
              );
              await era.printAndWait([
                tachyon.get_colored_name(),
                '은 찢어지는 마음으로 ',
                get_chara_talk(0).get_colored_name(),
                '을(를) 바라보았다. 심중에는 의문과 불신만이 가득했다.',
              ]);
              await era.printAndWait([
                get_chara_talk(0).get_colored_name(),
                '에 대한 불해와, 자신에 대한 회의감.',
              ]);
            }
            break;
          case 3:
            if (love < 50) {
              await era.printAndWait([
                '순간, 타는 듯한 감각이 ',
                get_chara_talk(0).get_colored_name(),
                '의 목구멍을 타고 역류했다.',
              ]);
              await era.printAndWait([
                get_chara_talk(0).get_colored_name(),
                '은(는) 참지 못하고 기침을 내뱉었고, 바닥에 떨어진 액체에 핏기가 섞여 있는 것을 보고 공포에 질렸다.',
              ]);
              await tachyon.say_and_wait(['이게 세 번째네, ', callname, '.']);
              await tachyon.say_and_wait(
                '자네가 명목상으로나마 나의 실험 동물이라는 점에 감사하게나.',
              );
              await tachyon.say_and_wait(
                '나의 신조는 이용 가치가 있는 실험체를 낭비하지 않는 것이니, 자신에게 아직 그만한 가치가 남아 있음을 고맙게 여기란 말이야…… 평정심…… 이건 실험일 뿐이다, 그래, 실험이야.',
              );
              await tachyon.say_and_wait(
                '다만…… 실험체로서 살아가더라도, 결코 죽는 것보다 낫지는 않을 거라고 보장하지.',
              );
              await era.printAndWait([
                tachyon.get_colored_name(),
                '의 눈에는 혐오와 증오의 감정이 서려 있었다.',
              ]);
            } else {
              await tachyon.say_and_wait('아아…… 이제 됐어.');
              await tachyon.say_and_wait('이제 충분해.');
              await era.printAndWait('붉은 블라인드가, 완전히 내려앉았다.');
            }
        }
    }
  }
};