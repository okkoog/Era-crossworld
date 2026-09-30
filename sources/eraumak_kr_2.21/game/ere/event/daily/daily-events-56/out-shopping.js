const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    love = era.get('love:56'),
    me = get_chara_talk(0),
    message = [],
    temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      if (Math.random() < 0.5) {
        message.push(async () => {
          await kitaru.say_and_wait(
            '오오옷! 역시 대길이네요! 인형 하나에 이렇게나 많이 걸려 나오다니!',
          );
          await era.printAndWait([
            '기운이 너무 넘친 나머지 ',
            kitaru.get_colored_name(),
            '가 인형 뽑기 기계에 부딪히려던 찰나, ',
            me.get_colored_name(),
            '은(는) 날랜 동작으로 ',
            kitaru.sex,
            '를 붙잡았다.',
          ]);
          await kitaru.say_and_wait('에헤헷~ 죄송해요!');
          await era.printAndWait([
            kitaru.get_colored_name(),
            '의 모습을 보고, ',
            me.get_colored_name(),
            '은(는) 그만 웃음을 터뜨리고 말았다.',
          ]);
        });
      } else {
        message.push(async () => {
          await kitaru.say_and_wait([
            '우와! 새로 나온 격투 게임인가요? 저랑 대전 한 판 어떠세요, ',
            callname,
            '?',
          ]);
          await era.printAndWait([
            '몇 번의 라운드에서 연달아 패배한 끝에, ',
            kitaru.get_colored_name(),
            '의 앞날을 내다보는 듯한 컨트롤에 ',
            me.get_colored_name(),
            '은(는) 결국 항복할 수밖에 없었다.',
          ]);
          await kitaru.say_and_wait('어라라, 다 시라오키 님의 보살핌 덕분이네요!');
        });
      }
      break;
    case 1:
      message.push(async () => {
        await kitaru.say_and_wait([callname, ', 저기 경품 추첨을 하고 있어요!']);
        if (love > 49 && kitaru.sex_code - 1) {
          await era.printAndWait([
            '긴 말이 필요 없다는 듯, ',
            me.get_colored_name(),
            '과(와) ',
            kitaru.get_colored_name(),
            '는 함께 추첨대 앞으로 걸어갔다.',
          ]);
          await kitaru.say_and_wait([callname, '의 좋은 기운을 저한테도 나눠주세요!']);
          await era.printAndWait([
            '그 순간 따스한 온기와 탄력 있는 감촉이 동시에 전해졌다. ',
            kitaru.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '의 팔을 꼭 껴안고는 놓아주지 않겠다는 기세로 달라붙은 것이다.',
          ]);
          await kitaru.say_and_wait('에헤헤~!');
          await era.printAndWait([
            '자신의 가슴이 ',
            me.get_colored_name(),
            '의 팔에 밀착되었다는 사실조차 깨닫지 못한 채, ',
            kitaru.get_colored_name(),
            '는 추첨함 속으로 손을 집어넣었다.',
          ]);
        } else {
          await era.printAndWait([
            kitaru.get_colored_name(),
            '의 강한 고집에 못 이겨, ',
            me.get_colored_name(),
            '은(는) 어쩔 수 없이 ',
            kitaru.sex,
            '와 함께 추첨대 앞으로 왔다.',
          ]);
          await kitaru.say_and_wait('하앗! 시라오키 님, 굽어살펴 주소서!');
          await kitaru.say_and_wait('하압!');
          await era.printAndWait([
            kitaru.get_colored_name(),
            '가 추첨함 속으로 손을 집어넣었다.',
          ]);
        }
      });
      break;
    case 2:
      if (love > 49 && kitaru.sex_code - 1) {
        message.push(async () => {
          await kitaru.say_and_wait('휴우…… 하아! 제 노래, 어땠나요!');
          await era.printAndWait([
            '몇 곡을 연달아 부른 뒤 숨을 헐떡이던 ',
            kitaru.get_colored_name(),
            '는 기대에 찬 눈빛으로 ',
            me.get_colored_name(),
            '을(를) 바라보며 평가를 기다렸다.',
          ]);
          await era.printAndWait(
            '땀에 젖어 살짝 투명해진 하얀 셔츠 너머로 풍만한 가슴의 실루엣이 어렴풋이 비쳤다.',
          );
        });
        message.push(async () => {
          await kitaru.say_and_wait('하아…… 하아! 제 노래, 어땠나요!');
          await era.printAndWait([
            '노래를 마친 뒤 숨을 몰아쉬는 ',
            kitaru.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '을(를) 빤히 바라보며 감상을 기다렸다.',
          ]);
          await era.printAndWait(
            '스커트 끝자락과 하얀 오버니삭스 사이의 절대영역이 땀방울로 인해 묘한 윤기를 띠고 있었다.',
          );
        });
      } else {
        message.push(async () => {
          await era.printAndWait([
            kitaru.get_colored_name(),
            '에게 있어 노래방 정도의 난이도는 신사에서 노래하며 춤추는 봉납 무용에 비하면 아무것도 아니었다.',
          ]);
          await kitaru.say_and_wait([callname, '도 한 곡 불러보세요!']);
        });
      }
      break;
    case 3:
      await era.printAndWait([
        '도무지 재현 불가능해 보이는 복잡한 점술 동작을 마친 후, ',
        kitaru.get_colored_name(),
        '는 어느 영화 포스터 한 장을 가리켰다.',
      ]);
      message.push(async () => {
        await era.printAndWait('말로는 형언할 수 없는 공포를 다룬 민속 호러 영화였다.');
        await era.printAndWait([
          '영화가 끝난 뒤, 다리가 후들거리는 ',
          kitaru.get_colored_name(),
          '는 겁에 질린 표정으로 ',
          me.get_colored_name(),
          '에게 원령을 물리치는 비법을 아는 체하며 가르쳐 주었다.',
        ]);
      });
      message.push(async () => {
        await era.printAndWait('외계 행성을 배경으로 한 SF 영화였다.');
        await kitaru.say_and_wait('으음! 남주인공의 예지 능력이 정말 부럽다고나 할까요?');
      });
      message.push(async () => {
        await era.printAndWait('두뇌 싸움이 치열한 추리 영화였다.');
        await kitaru.say_and_wait('……점괘 결과랑 똑같네요?');
      });
      if (era.get('love:56') >= 50) {
        message.push(async function () {
          await era.printAndWait('달콤한 로맨틱 코미디 영화였다.');
          await kitaru.say_and_wait([
            '아하하! 이런 장면, 저도 예전에 ',
            callname,
            '한테 했던 것 같네요!',
          ]);
        });
      }
  }
  await get_random_entry(message)();
};