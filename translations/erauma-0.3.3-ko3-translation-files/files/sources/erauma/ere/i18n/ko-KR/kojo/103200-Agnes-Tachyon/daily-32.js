// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file アグネスタキオン - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（改訂）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require("#/i18n/ko-KR/snippets");

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/daily-32.js');

module.exports = {
  ...__JaOriginal,
  good_morning(tachyon) {
    tachyon.say(
      "왔는가, 그럼 온 김에 문 앞에 있는 쓰레기 봉투 세 개 좀 버려주게…… 실험을 돕겠다고? 자네가 필요해지면 자연스럽게 부를 테니 걱정 말게.",
    );
    era.print([tachyon.get_colored_name(), "은 실험으로 한창 바쁜 모양이었다."]);
  },
  // [번역 완료] office_prepare
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        "준비? 준비는 약자나 하는 것이네, ",
        callname,
        ". 자네는 사자가 훈련하는 걸 본 적이 있는가?",
      ]);
    } else {
      await tachyon.say_and_wait(
        '에이, 왜 굳이 레이스 전에 준비를 해야 하는 거지? 레이스도 시험처럼 평소의 실력을 측정하는 것 아닌가……',
      );
      await tachyon.say_and_wait(
        '설마 자네, 시험 직전에야 벼락치기를 해서 낙제를 면하길 바라는 그런 부류인가?',
      );
    }
  },
  // [번역 완료] office_rest
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait("나에게 휴식은 필요 없네.");
      await era.printAndWait([
        '누가 봐도 상태가 좋지 않은 ',
        tachyon.get_colored_name(),
        '은(는) 애써 강한 척하며 그렇게 말했다.',
      ]);
      await tachyon.say_and_wait(
        '할 수 있는 일도, 해야 할 일도 산더미인데 어떻게 쉴 수 있겠는가……',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대 앞을 떠나지 않는 ',
          tachyon.get_colored_name(),
          '을(를) 뒤에서 끌어안았다.',
        ]);
        await era.printAndWait([tachyon.sex, '의 몸이 작게 떨렸다.']);
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 미인계라도 소용없네.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대에 계속 앉아 있는 ',
          tachyon.sex,
          '을(를) 억지로 일으켜 세웠다.',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '피곤하군, ',
            callname,
            '. 홍차를 끓여 오게.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 직접 우린 홍차를 마시며 ',
            tachyon.get_colored_name(),
            '와 함께 소파에서 느긋한 오후를 보냈다.',
          ]),
        async () => {
          await tachyon.say_and_wait('한가하군.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 일상에 대해 그런 감상을 내뱉었다.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] end_talk
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '그런 육체적인 일에만 집착하는 건가? 시시한 이유로군…… 그래도 다음에 또 무언가 하려거든 나를 찾아오게. 그 눈동자를 봐서라도 말이지.',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '가능성 너머를 향하는 꿈조차 자네의 시야를 채우지 못하는 건가? 바보가 아니라면 전대미문의 야심가겠군.',
          );
        } else {
          await tachyon.say_and_wait([
            '꿈이 무너진 뒤 자포자기하는 건가? 아니면 앞날을 잃은 ',
            tachyon.uma_sex_title,
            '로부터 도망치기 위한 핑계인가?',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          '미안하네, ',
          callname,
          '. 조금 지나치게 장난친 모양이군…… 다음에는 좀 더 신중하게 하세.',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          '이런, 이번에는 너무 지나쳤군, ',
          callname,
          '……다음에는 조심하게.',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        '재미없는 모르모트로군…… 그래도 다음에 또 무언가 하려거든 나를 찾아오게. 그 눈동자를 봐서라도 말이지.',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '나를 이 길로 이끌어 놓고 혼자 떠나는 건가? 한계 너머로 향하는 길은 결국 혼자 걸어야 하는 길이었군.',
        );
      } else {
        await tachyon.say_and_wait([
          '교훈으로 삼게. 다음에는 쓸데없는 사람에게 집착하지 말도록……',
          tachyon.sex,
          '의 미래는 자네 몫까지 내가 지켜보겠네.',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        '이 실험이 끝나면 자네를 찾아가겠네. 그때까지는 내가 주는 긴 휴가라고 생각하게.',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        '이런, 이번에는 너무 지나쳤군, ',
        callname,
        '……다음에는 조심하게.',
      ]);
    }
  },

  // [번역 완료] event_atrium_evil
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('타키온———?');
    era.println();
    await era.printAndWait([
      '오늘은 아침부터 어째서인지 ',
      tachyon.get_colored_name(),
      '의 모습이 보이지 않았다.',
    ]);
    await era.printAndWait([
      '언제나 연구에 몰두하는 ',
      tachyon.sex,
      '이(가) 어디로 간 것인지 알 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 학원 곳곳을 돌아다니다가 지나가던 학생에게서 ',
      tachyon.sex,
      '이(가) 말라 버린 나무 구멍 근처에 있다는 말을 들었다.',
    ]);
    await era.printAndWait([
      '나무 구멍……',
      tachyon.sex,
      '에게도 털어놓고 싶은 고민이 있는 걸까?',
    ]);
    await era.printAndWait('트레이너가 담당 선수의 기분도 읽지 못한다면 실격이지.');
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 안뜰에 도착했다. 수업 시간이라 사람이 많지 않았고, 남들의 시선을 피해 속마음을 털어놓는 ',
      tachyon.uma_sex_title,
      '가 몇 명 있을 뿐이었다.',
    ]);
    await era.printAndWait([
      '사람들의 발길이 뜸했기에 ',
      you.get_colored_name(),
      '은(는) 『그것』을 목격했다.',
    ]);
    await era.printAndWait([
      tachyon.uma_sex_title,
      '에게 다가가 ',
      tachyon.couple_title,
      '의 마음속 약점을 파고드는 검은 그림자.',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '으아아아! 난 너무 약해…… 왜 아무리 해도 이길 수 없는 거야……!',
    );
    await tachyon.say_as_unknown_and_wait('힘이…… 필요하신가?');
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, '……힘?');
    await tachyon.say_as_unknown_and_wait('누구보다 강해지고 모두를 이길 수 있는 힘 말일세……');
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……저, 정말인가요? 대가는요?',
    );
    await tachyon.say_as_unknown_and_wait(
      '후후후…… 궁금하면 옛 과학 실험실로 오게나……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '왜…… 고백할 용기가 나지 않는 걸까…… 그 둔감한 사람…… 이렇게까지 하는데도 눈치채지 못하다니……!',
    );
    await tachyon.say_as_unknown_and_wait(
      '진심을 솔직히 전하고 싶은 건가? 말하지 않아도 상대가 마음을 알아주길 바라나?',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '다, 당신은……!',
    );
    await tachyon.say_as_unknown_and_wait(
      '옛 과학 실험실로 오게. 원하는 것은 모두 손에 넣을 수 있다네……',
    );
    await you.say_and_wait('……저 녀석, 대체 뭘 하는 거야?', true);
    await era.printAndWait([
      '말라 버린 나무 구멍 옆에서 악마처럼 사람을 현혹하는 말을 속삭이는 것은 틀림없이 ',
      you.get_colored_name(),
      '이(가) 담당하는 ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 나무 구멍에 고민을 털어놓는 이들 앞에 나타나 타락을 부추기는 말을 건넸다. 그야말로 신화 속 악마였다.',
    ]);
    await era.printAndWait([
      '그때 ',
      tachyon.sex,
      '은(는) ',
      you.get_colored_name(),
      '도 알아챘다.',
    ]);
    await tachyon.say_and_wait([
      callname,
      ', 마침 잘 왔네. 손님 맞을 준비를 하세.',
    ]);
    await you.say_and_wait('손님?');
    await tachyon.say_and_wait([
      '물론 저기 곤란해하는 ',
      tachyon.uma_sex_title,
      '들이지.',
    ]);
    await tachyon.say_and_wait(
      '그러고 보니 예전의 난 참 무례했군. 이런 나무 구멍은 쓸모없다고 생각했으니까.',
    );
    await tachyon.say_and_wait([
      '지금 생각해 보면 의지가 약한 ',
      tachyon.uma_sex_title,
      '을(를) 스스로 골라 주는 셈이니 내게 안성맞춤인 장소 아닌가?',
    ]);
    await era.printAndWait('의지가 약하기에 외부의 유도에 넘어가 속마음을 털어놓는다.');
    await era.printAndWait([
      '의지가 약하기에 목적을 위해서라면 영혼마저 악(타키)마(온)에게 팔기 쉽다.',
    ]);
    await era.printAndWait([
      '어떤 의미에서 불순한 자들의 눈으로 보면 이곳에 오는 ',
      tachyon.uma_sex_title,
      '들은 가장 노리기 쉬운 순진한 이들이다.',
    ]);
    await era.printAndWait([
      '다만 ',
      tachyon.get_colored_name(),
      '이라면 ',
      tachyon.couple_title,
      '을(를) 해치지는 않겠지…… 아마도?',
    ]);
    await tachyon.say_and_wait([
      '그건 그렇고 ',
      callname,
      ', 서두르세.',
    ]);
    await era.printAndWait(
      '갑자기 왜 이러지…… 양심에 찔려서 그러는 건 아닐 테고.',
    );
    await tachyon.say_and_wait(
      '자네에게 들켰다는 건 학생회 녀석들도 곧 온다는 뜻이겠지. 설교를 듣기 전에 얼른 가세!',
    );
    await era.printAndWait([
      '…………가끔은 ',
      tachyon.sex,
      '이(가) 붙잡혀 설교를 듣게 놔두는 것도 괜찮을지 모르겠다.',
    ]);
  },

  // [번역 완료] event_church
  event_church: (() => {
    const title = '신 포획 작전';
    /**
     * 日常ランダム - 神社で猫を捕まえる
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '오늘 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '와 함께 신사로 향하던 중이었다……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 서두르게! 『신』을 기다리게 해서는 안 되네!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 흥분한 채 신사의 돌계단을 뛰어 올라가 뒤돌아보며 불렀다.',
      ]);
      await era.printAndWait([
        '인간의 몸으로 ',
        tachyon.uma_sex_title,
        '을(를) 따라잡을 가능성은 둘째 치고, 물리적으로 무리일뿐더러 ',
      ]);
      await era.printAndWait([
        '마음으로도 ',
        you.get_colored_name(),
        '은(는) 앞으로 하게 될 일을 죽도록 거부하고 싶었다. 하지만 담당의 고집에 못 이겨 ',
        you.get_colored_name(),
        '은(는) 쓴웃음을 지으며 따라갈 수밖에 없었다.',
      ]);
      era.println();
      await era.printAndWait('발단은…… 복잡하게 들리지만 사실 간단했다.');
      await era.printAndWait('한마디로 말하자면.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 자네도 알겠지만 나는 영혼이나 귀신 같은 존재를 원래 믿지 않네.',
      ]);
      await tachyon.say_and_wait(
        '하지만 확인도 하지 않고 부정하는 건 연구자의 태도가 아니지.',
      );
      await you.say_and_wait('그래, 그래.');
      await tachyon.say_and_wait(
        '그럼 어떻게 검증할 것인가. 사실 옛날부터 이런 학설이 있었네.',
      );
      await tachyon.say_and_wait(
        '소위 귀신이란 자연계에 흩어져 있는 에너지 덩어리에 불과하다는 학설이지.',
      );
      await tachyon.say_and_wait(
        '다소 편향된 설명이긴 하지만 이를 바탕으로 검증할 수는 있네.',
      );
      await you.say_and_wait('그래, 그래.');
      era.println();
      await tachyon.say_and_wait(
        '그래서 이러쿵저러쿵…… 신사에 가서 신을 붙잡아 보자는 걸세!',
      );
      await you.say_and_wait('그래…… 뭐라고?');
      era.println();
      await era.printAndWait(
        '만약 보통 사람은 감지하거나 알아챌 수 없는 것이 정말로 존재한다면 ',
      );
      await era.printAndWait('그 존재 자체에도 에너지가 필요할 것이다.');
      await era.printAndWait(
        '그러니 우선 비정상적인 에너지 소비를 탐지할 수 있을 만한 장소를 기준으로 선택하는 걸세.',
      );
      await era.printAndWait('하지만 도시 안에는 잡음이 너무 많다.');
      await era.printAndWait('그에 비하면 조사를 하기에 외딴 신사만큼 좋은 곳도 없다.');
      await era.printAndWait(
        '게다가 신이라 불릴 정도라면 에너지의 수준도 평범한 유령과는 다를 테니 ',
      );
      await era.printAndWait(
        '신사에서조차 이른바 신이라는 것을 포착할 수 없다면 애초에 존재하지 않는다고 봐도 좋겠지………',
      );
      era.println();
      await era.printAndWait('요컨대 대략 이런 불경스러운 이유로 ');
      await era.printAndWait(['두 사람은 오늘 인적 드문 외딴 신사를 찾아왔다.']);
      await you.say_and_wait(
        '삼여신님, 제발 너그러이 봐주소서. 이런 사소한 일에는 노여워하지 마시길…… 나무아미타불, 아멘.',
        true,
      );
      era.println();
      await era.printAndWait([
        '영 내키지 않았지만 ',
        you.get_colored_name(),
        '은(는) 어떻게든 신사까지 올라왔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 필사적인 간청 덕분에 ',
        tachyon.get_colored_name(),
        '은(는) 마지못해 ',
        tachyon.sex,
        '의 기묘한 에너지 탐지기를 사용하기 전에 먼저 참배하며 예를 갖추겠다고 약속했다.',
      ]);
      era.println();
      await era.printAndWait(['그리하여 두 사람은 손을 모아 신사에 참배했다……']);
      await tachyon.say_and_wait(
        '좋네! 그럼 서론은 이쯤 하고 시작해 보세……',
      );
      era.println();
      await era.printAndWait([
        '참배가 끝나자마자 ',
        tachyon.get_colored_name(),
        '은(는) 옆에 두었던 에너지 탐지기를 집어 신사 쪽으로 향하게 하고 측정을 시작했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곁에서 쓴웃음을 지으며 제발 신께서 철없는 장난을 너그럽게 봐주시기를 빌었다.',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          '으음…… 으음……! 잠깐!',
          callname,
          '! 여기 좀 보게, 무언가 있는 모양이네………',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 부름을 듣고 황급히 달려갔지만 ',
          tachyon.sex,
          '은(는) 한 지점을 포착한 뒤 갑자기 움직이지 않고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 서둘러 어깨를 두드려 괜찮은지 확인하자 ',
          tachyon.sex,
          '는 갑자기 ',
          you.get_colored_name(),
          '을(를) 땅바닥에 넘어뜨렸다.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 양손을 땅에 눌러 고정했고 ',
          you.get_colored_name(),
          '은(는) 등을 땅에 대고 누운 채 자기 위에 올라탄 ',
          tachyon.get_colored_name(),
          '을(를) 바라봤다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 눈빛은 차가웠지만 그 안쪽에는 열기가 숨어 있는 듯했다.',
        ]);
        await era.printAndWait(
          '먹잇감을 잡아 이제 막 먹어 치우려는 고양잇과 맹수 같았다.',
        );
        era.println();
        await you.say_and_wait(
          [
            '이게 정말 천벌인가…… 아니, 그런데 왜 천벌을 받는 쪽이 내가 되고 ',
            tachyon.sex,
            '는 멀쩡한 거지!?',
          ],
          true,
        );
        era.println();
        await era.printAndWait(
          '하고 싶은 말은 산더미였지만 무력감에 빠져 체념하고 말았다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '가 다음에 무엇을 할지 지켜볼 수밖에 없었다.',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 저항할 의지를 잃은 것을 확인하자 ',
          tachyon.sex,
          '는 한 손을 놓고 ',
          you.get_colored_name(),
          '의 셔츠를 풀기 시작했다.',
        ]);
        era.println();
        await you.say_and_wait('아아, 이걸로 트레이너 자격도 박탈이군.', true);
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 윗옷을 열더니 이윽고……',
        ]);
        era.println();
        await tachyon.say_and_wait('야옹～～～');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 아기 고양이 같은 소리를 내며 고양이처럼 ',
          you.get_colored_name(),
          '의 품속으로 파고들어 기분 좋다는 듯 가르릉거렸다.',
        ]);
        await era.printAndWait([
          '물론 아무리 움직임이 고양이 같더라도 ',
          tachyon.sex,
          '의 몸이 ',
          tachyon.uma_sex_title,
          '의 몸이라는 사실은 변하지 않는다.',
        ]);
        await era.printAndWait([
          '아기 고양이처럼 셔츠 안으로 파고들 생각이었겠지만 ',
          you.get_colored_name(),
          '의 눈에는 ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '가 하는 행동이란 결국 윗옷을 열어젖힌 뒤 ',
          you.get_colored_name(),
          '의 맨가슴에 누워 몸을 비비는 일이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('야옹～～냐옹~ 야옹');
        era.println();
        await era.printAndWait([
          '그런 식으로 만지는 게 조금 불만스러웠는지 ',
          tachyon.sex,
          '는 방법을 바꿔 ',
          you.get_colored_name(),
          '의 양손을 들어 올려 ',
          you.get_colored_name(),
          '의 양손을 ',
          tachyon.sex,
          '의 배 위에 포개 놓았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 틈을 봐서 일어나려 했지만 움직임을 알아채고 짓눌러 오는 무게 때문에 다시 꼼짝할 수 없었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '에게 양팔을 포옹하는 자세로 바꾸도록 내버려 두었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          ' 의 손을 고정한 다음 몸을 휙 돌려 뺨을 ',
          you.get_colored_name(),
          '의 가슴에 바짝 대고 만족스러운 소리를 냈다.',
        ]);
        era.printButton('「……타키온?」', 1);
        await era.input();
        await era.printAndWait([
          '아기 고양이는 대답하지 않았고 이윽고 ',
          tachyon.sex,
          '의 숨소리가 차분해지더니……',
        ]);
        era.println();
        await tachyon.say_and_wait('쿨…… 야옹…… 쿨……');
        era.println();
        await era.printAndWait([
          '그렇게 ',
          you.get_colored_name(),
          '의 가슴 위에서 잠들어 버렸다.',
        ]);
        await era.printAndWait([
          '지금이라면 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '을(를) 뿌리치고 일어날 수 있지만……',
        ]);
        era.println();
        await era.printAndWait([
          '지금의 ',
          tachyon.get_colored_name(),
          '의 상태는 분명 정상이 아니었다.',
        ]);
        await era.printAndWait('하지만 여기까지 휘둘린 것도 억울하지 않은가.');
        await era.printAndWait(
          '상대가 잠든 지금 조금쯤 보상을 받아도 되지 않을까?',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '을(를) 끌어안은 팔에 힘을 살짝 풀고 한 손을 위로 뻗었다…………',
        ]);
        era.println();
        await era.printAndWait([
          '부드럽고 기분 좋다…… 과연, 이게 ',
          tachyon.uma_sex_title,
          '의………',
        ]);
        era.println();
        await era.printAndWait('귀였구나.');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아기 고양이의 머리를 부드럽게 쓰다듬으며 이따금 머리 위에서 늘어진 귀를 만지작거렸다. 부드럽고 탄력 있는 감촉에 그만 자꾸 손이 갔다.',
        ]);
        era.println();
        await tachyon.say_and_wait('냐옹…… 가르릉…… 냐냐');
        era.println();
        await era.printAndWait([
          '꿈꾸는 아기 고양이도 귀여운 소리를 내며 ',
          you.get_colored_name(),
          '의 손길을 재촉하는 듯했다.',
        ]);
        await era.printAndWait('큰일이군…… 이 푹신함에…… 파묻혀 버릴 것 같아………');
        era.println();
        await era.printAndWait([
          '어느새 ',
          you.get_colored_name(),
          '도 잠에 빠졌다…………',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          '으아아아아!!! 내 장치가아아아!!!',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 비명을 지르는 ',
          tachyon.get_colored_name(),
          '을(를) 보며 쓴웃음을 지었다.',
        ]);
        await era.printAndWait([
          '방금 무슨 일이 일어났는지는 모른다. 두 사람은 신사에서 갑자기 정신을 잃었고 다시 깨어났을 때 ',
          tachyon.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '가 비싼 돈을 주고 샀다는 장치가 작동하지 않는다는 사실을 알아챘다.',
        ]);
        await era.printAndWait(
          '이상하게도 두 사람의 기억은 참배하던 순간에 멈춰 있었고, 그 뒤에 무슨 일이 있었는지 전혀 기억하지 못했다.',
        );
        await era.printAndWait([
          '하지만 어째서인지 ',
          you.get_colored_name(),
          '은(는) 몸이 개운했다. 기절하기 전에 무언가로 스트레스를 풀어 버린 듯한 기분이었다.',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          '은(는) 깨어났을 때 윗옷의 단추가 전부 풀려 있었다는 사실을 떠올렸다. 기절하기 전에 도대체 무슨 일이 있었던 걸까?',
        ]);
        await era.printAndWait(
          '……역시 귀신이라는 것도 어느 정도는 믿는 편이 낫겠군.',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을(를) 데리고 신사를 떠났다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '가 탐지기를 들고 신사 안을 이리저리 살펴보는 모습을 지켜봤다. 저래서야 효과가 있는지도 모르겠다.',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…………역시 아무것도 없군.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 실망한 얼굴로 말했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '에게도 ',
          tachyon.sex,
          '가 왜 그렇게까지 풀이 죽었는지 이해할 수 없었다. 귀신이 없다는 것을 증명한 건 ',
          tachyon.sex,
          '에게도 좋은 일 아닌가?',
        ]);
        await era.printAndWait([
          '영문도 모른 채 두 사람은 그대로 산을 내려와 돌아갔다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] event_river
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '! 봐! 오리야!']);
    await tachyon.say_and_wait('그리고 저것도! 나비야!');
    await tachyon.say_and_wait('여기 풍경 정말 예뻐!');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 기가 막히다는 듯 제방을 뛰어다니는 ',
      tachyon.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait([
      '천진난만한 표정은 ',
      tachyon.get_colored_name(),
      '라기보다 ',
      urara,
      '나 ',
      bakushin,
      '들의 ',
      tachyon.uma_sex_title,
      '에 가까웠다. 눈동자에 드리운 그늘마저 벚꽃잎으로 바뀐 듯했다.',
    ]);

    await era.printAndWait([
      '발단은 여느 때처럼 ',
      tachyon.get_colored_name(),
      '의 약이었다.',
    ]);
    await tachyon.say_and_wait('지능을 낮추고 속도를 높이는 약일세.');
    await era.printAndWait([
      '도저히 수지가 맞지 않는 약처럼 들리지만 ',
      tachyon.get_colored_name(),
      '은(는) 망설임 없이 마셨다.',
    ]);
    await era.printAndWait([
      '結果、',
      tachyon.get_colored_name(),
      '은(는) ',
      coffee,
      '와 ',
      pocket,
      '들과 벌인 모의 레이스에서 가볍게 이겼다. 하지만 그 대가는……',
    ]);
    await tachyon.say_and_wait([
      callname,
      callname,
      '! 봐! 달팽이, 느리다!',
    ]);
    await era.printAndWait([
      '뭐, 뇌를 쉬게 하는 행위라고 할 수도 있겠지.',
      you.get_colored_name(),
      '은(는) 지금 지나치게 천진난만해진 ',
      tachyon.sex,
      '이(가) 사고를 당하거나…… 혹은 속임수에 넘어가지 않도록 ',
      tachyon.get_colored_name(),
      '에게서 눈을 떼지 않았다.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '온종일 놀고 나서야 ',
      tachyon.get_colored_name(),
      '도 피곤해졌는지 걸음이 비틀거렸다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) ',
      you.get_colored_name(),
      '을(를) 향해 두 팔을 뻗었다.',
    ]);
    await tachyon.say_and_wait([callname, '~~업어 줘~~']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 온종일 정신없이 놀았던 초고속 ',
      tachyon.sex_code - 1 ? '공주님' : '왕자님',
      '을(를) 등에 업었다. 정말 피곤했는지 ',
      you.get_colored_name(),
      '의 등에 올라탄 순간 이미 잠들어 있었다.',
    ]);
    await era.printAndWait('나도 오늘 하루 충분히 피곤해졌군. 돌아가면 쉬어야겠다.');
    await tachyon.say_and_wait([callname, '……고마워……']);
    await you.say_and_wait('……');
    await era.printAndWait('가끔은 이런 하루도 나쁘지 않을지도 모른다.');
  },

  // [번역 완료] event_rooftop_a
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('흥흥흥~~');
    await era.printAndWait([
      '오늘도 ',
      you.get_colored_name(),
      '은(는) 도시락을 챙겨 ',
      tachyon.get_colored_name(),
      '와 함께 옥상에서 점심을 먹었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 산들바람을 맞으며 기분 좋게 도시락의 닭튀김을 집어 들었다.',
    ]);
    await era.printAndWait('그 순간 산들바람이 순식간에 거센 바람으로 바뀌었다.');
    await tachyon.say_and_wait('아.');
    await era.printAndWait('젓가락으로 집었던 닭튀김이 강해진 바람에 바닥으로 떨어졌다.');
    await era.printAndWait('아아…… 아깝군.');
    await era.printAndWait('하지만 괜찮네. 도시락에는 아직……');
    await era.printAndWait([
      '바로 그때 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '이(가) 바닥에 떨어진 닭튀김을 그대로 집어 드는 것을 보았다.',
    ]);
    await tachyon.say_and_wait('그럼 잘 먹겠네——');
    era.printButton('「잠깐!?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '음? 무슨 문제라도 있나, ',
      callname,
      '? 3초 법칙도 모르는 건가?',
    ]);
    await era.printAndWait([
      '아니, ',
      tachyon.get_colored_name(),
      '이(가) 그런 근거 없는 3초 법칙을 믿는 건 둘째 치고, 지금은 명백히 3초가 지났잖아!?',
    ]);
    await tachyon.say_and_wait([
      '……하아, ',
      callname,
      '. 과학적으로 말하자면 ',
      tachyon.uma_sex_title,
      '의 위장은 그런 일로 탈이 날 만큼 연약하지 않네.',
    ]);
    await you.say_and_wait('그런 문제가 아니잖아!?');
    await tachyon.say_and_wait('어쨌든 난 닭튀김을 먹겠네!');
    await you.say_and_wait('도시락에 더 있잖아!?');
    await era.printAndWait([
      you.get_colored_name(),
      '의 완강한 만류 덕분에 ',
      tachyon.get_colored_name(),
      '이(가) 바닥에 떨어진 닭튀김을 먹는 일은 막을 수 있었다.',
    ]);
    await era.printAndWait([
      '그 대가로 오후 내내 ',
      tachyon.sex,
      '은(는) 원망스러운 눈으로 ',
      you.get_colored_name(),
      '을(를) 쳐다보았다.',
    ]);
    await era.printAndWait([
      '밤에 잠들어서도 ',
      you.get_colored_name(),
      '의 귓가에는 ',
      tachyon.get_colored_name(),
      '의 원망 어린 비명이 남아 있었다.',
    ]);
    await tachyon.say_and_wait('내 닭튀김……');
    await you.say_and_wait(
      ['……내일 또 ', tachyon.sex, '에게 닭튀김을 만들어 줘야겠군.'],
      true,
    );
  },

  // [번역 완료] event_rooftop_b
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '을(를) 옥상으로 데려가 도시락을 먹으며 기분을 전환하려 했다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 기쁜 듯 ',
      you.get_colored_name(),
      '이(가) 들려주는 최근 ',
      coffee.get_colored_name(),
      '의 훈련 변화를 들으며 때때로 자기 생각을 덧붙였다.',
    ]);
    await era.printAndWait('그 과정에서 정작 자신의 이야기는 한 번도 나오지 않았다.');
    await era.printAndWait([
      '훈련에 나설 수 없는 ',
      tachyon.sex,
      '은(는) 아무리 시간을 내어 곁에 있어도 다른 ',
      tachyon.uma_sex_title,
      '의 훈련이 진행되는 동안에는 떨어져 있어야 했다.',
    ]);
    await tachyon.say_and_wait(['최근 ', tachyon.sex, '은(는) 어떤가?']);
    era.printButton('「……」', 1);
    era.printButton('「……자네는? 요즘은 어떻게 지내고 있나?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '에 대한 이야기가 끝나자 갑자기 침묵이 흘렀고, 식사도 곧 끝났다.',
      ]);
    } else {
      await tachyon.say_and_wait(
        '나? ……뭐, 그럭저럭일세. 별다른 일은 없네.',
      );
      await era.printAndWait([tachyon.sex, '은(는) 심드렁하게 대답했다.']);
      await era.printAndWait([
        tachyon.sex,
        '와(과) 오랫동안 지낸 ',
        you.get_colored_name(),
        '은(는) 알 수 있었다.',
        tachyon.sex,
        '은(는) 말을 얼버무리는 것이 아니라 자신의 일상에는 정말로 할 말이 없다고 생각하고 있었다.',
      ]);
      await era.printAndWait([
        '그런 생각을 하니 ',
        you.get_colored_name(),
        '은(는) 가슴이 아팠다.',
      ]);
    }
  },

  // [번역 완료] event_station
  event_station: (() => {
    const title = '비밀 폭로';
    /**
     * 日常ランダムイベント - 駅前デートで비밀 폭로
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '오늘은 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '이(가) 함께 외출해 데이트하는 날이다.',
      ]);
      await era.printAndWait([
        '오늘 상점가에서 마술 퍼레이드가 열린다고 한다. 그래서 겸사겸사 ',
        tachyon.sex,
        '을(를) 데리고 가서 그 북적이는 모습을 보여 줄 생각이었다.',
      ]);
      await era.printAndWait('그런데……');
      era.println();
      await tachyon.say_and_wait('저 마술봉은 소매 속에 숨겨져 있군.');
      await tachyon.say_and_wait(
        '저 비둘기는 처음부터 장치 속에 숨겨 둔 것뿐이야. 별거 아니군.',
      );
      await tachyon.say_and_wait(
        '마그네슘의 산화 연소일세. 연구실에서도 보여 줄 수 있지.',
      );
      era.println();
      await era.printAndWait([
        '마술의 비밀은 매번 ',
        tachyon.get_colored_name(),
        '이(가) 주위 사람들에게 적당히 들릴 만큼의 목소리로 곧장 폭로해 버렸다.',
      ]);
      await era.printAndWait([
        '지루해서 그러는 것도 아니었다. 말을 마칠 때마다 반짝이는 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보는 것이 칭찬을 기다리는 듯했다.',
      ]);
      await era.printAndWait([
        '칭찬받고 싶어 하는 강아지라도 되나……',
        you.get_colored_name(),
        '은(는) 머릿속에 떠오른 광경을 떨쳐 냈다.',
      ]);
      await era.printAndWait([
        '아무튼 두 사람을 노려보는 마술사가 참다못해 무대에서 내려와 주먹을 휘두르기 전에 ',
        tachyon.get_colored_name(),
        '을(를) 데리고 여길 벗어나야겠다.',
      ]);
      era.println();
      await tachyon.say_and_wait('에에~~ 벌써 가는 건가?');
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은(는) 여전히 불만스러운 표정이었다.',
      ]);
      await era.printAndWait([tachyon.sex, '의 관심을 다른 데로 돌릴 것이 필요하다…… 찾았다!']);
      era.printButton('「색이 변하는 채소 주스?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 놀란 척하며 노점의 인기 상품을 소리 내어 읽고 ',
        tachyon.get_colored_name(),
        '의 시선을 돌리려 했다.',
      ]);
      await era.printAndWait(
        '점주가 손에 든 보라색 액체를 컵에 붓자 액체는 순식간에 붉게 변했다.',
      );
      await era.printAndWait(
        '……중학교 교과서에 나오는 산·염기 반응을 이용한 적양배추 즙이잖아.',
      );
      await era.printAndWait([
        '어쩔 수 없다. ',
        tachyon.get_colored_name(),
        '의 관심을 끌기 위해서라면 조금 연기하는 수밖에 없다.',
      ]);
      era.printButton('「대단한데, 저거!」', 1);
      await era.input();
      await era.printAndWait([
        '예상대로 ',
        you.get_colored_name(),
        '의 과장된 목소리는 ',
        tachyon.get_colored_name(),
        '의 주의를 마술에서 돌려놓았다.',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 양배추 즙의 색이 바뀌는 모습을 보며 무언가 생각하는 것 같았다.',
      ]);
      await era.printAndWait([
        '이상하군. ',
        tachyon.get_colored_name(),
        '은(는) 이런 걸 본 적이 없나?',
      ]);
      await era.printAndWait([
        '……아니, 설마 그럴 리가. 가장 기본적인 산·염기 지시약인데. ',
        tachyon.get_colored_name(),
        '이(가) 모를 리 없다.',
      ]);
      await era.printAndWait([
        '하지만 만약 ',
        tachyon.sex,
        '이(가) 정말 접해 본 적이 없다면……',
      ]);
      era.printButton('「정말 신기하……네?」', 1);
      await era.input();
      await era.printAndWait('안 되겠다. 칭찬할 말이 더는 떠오르지 않는다.');
      await era.printAndWait([
        '그런데 ',
        tachyon.get_colored_name(),
        '의 관심은 이미 완전히 이쪽으로 옮겨졌다.',
      ]);
      await era.printAndWait('이제 괜찮겠지……');
      era.println();
      await tachyon.say_and_wait('…………이런 것 따위를');
      era.println();
      await era.printAndWait('응?');
      era.println();
      await tachyon.say_and_wait(
        '…………이런 걸 칭찬할 바에야 나를 칭찬해 줄 수는 없었나?',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '은(는) 화를 냈다.']);
      await era.printAndWait([
        '이유는 알 수 없지만 ',
        tachyon.get_colored_name(),
        '은(는) 분명히 화가 났다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '색이 더 많이 바뀌는 약도, 빛나는 약도 나한테는 만들 수 있는데……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 느닷없이 울음을 터뜨렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 허둥지둥 ',
        tachyon.sex,
        '을(를) 달랠 수밖에 없었다.',
      ]);
      era.println();
      await era.printAndWait([
        '다음 날, ',
        tachyon.get_colored_name(),
        '은(는) 256 RGB 색상을 담은 약품을 만들어 보였다.',
      ]);
      await era.printAndWait(
        '……대체 어떻게 하나의 약품 속에 256가지 색상을 나누어 배열한 걸까?',
      );
      await era.printAndWait('모르모트는 저도 모르게 그런 의문을 품었다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] event_talk_black_tea
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', 마침 잘 왔네.']);
    await tachyon.say_and_wait('오늘 만든 신약을 시험해 주게.');
    era.println();
    await era.printAndWait([
      '평소처럼 오늘의 약을 마셨다…… 응? 홍차 맛이 난다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손에 든 시험관을 미심쩍게 바라봤다. 수상한 빛을 뿜는 것만 봐도 ',
      tachyon.get_colored_name(),
      '가 만든 약이라는 걸 알 수 있다. 그런데 왜……',
    ]);
    era.println();
    await tachyon.say_and_wait('어떤가?');
    era.println();
    await era.printAndWait([
      '당황한 채 감상을 묻는 질문을 듣자 ',
      you.get_colored_name(),
      '은(는) 반사적으로 홍차의 맛을 평가해 버렸다.',
    ]);
    await era.printAndWait([
      '대답을 마친 뒤에야 ',
      you.get_colored_name(),
      '은(는) 떠올렸다. 이건 홍차가 아니라 약인데. 큰일이다, 혹평을 듣겠어……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……향이 부족하고, 너무 달고, 색깔도…… 그렇군. 흠…… 참고할 만한 의견이네……',
    );
    era.println();
    await era.printAndWait('응? 이걸로 넘어간 건가?');
    era.println();
    await tachyon.say_and_wait(
      '……그러고 보니 자네의 신체 능력도 좋아졌으니, 앞으로 매일 마시는 약을 한 종류 더 늘리겠네.',
    );
    await tachyon.say_and_wait(
      '기존 약에 이것까지 더해서…… 나중엔 자네가 불평할 수 없을 만큼 맛있게 개량해 주지.',
    );
    era.printButton('「설마……」', 1);
    era.printButton('「……설마……」', 2);
    const ret = await era.input();
    await era.printAndWait('홍차의 맛');
    await era.printAndWait('맛에 대한 고찰과 개량');
    await era.printAndWait('즉, 그런 뜻이었다.');
    era.println();
    if (ret === 1) {
      await era.printAndWait(
        '가만히 생각하면 확실히 달긴 했지만 향을 제외하고, 겉모습만 무시한다면 그 『약』은……',
      );
      await era.printAndWait([
        '아니, ',
        tachyon.sex,
        '가 홍차를 우리기만 했는데 왜 저런 색이 되는지는 의문이지만, ',
      ]);
      await era.printAndWait([
        '생각해 보니 그것은 ',
        tachyon.sex,
        '가 평소 가장 좋아하는 홍차의 맛이 아닌가?',
      ]);
      era.println();
      await tachyon.say_and_wait('기대하고 있게!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 약간 오기를 부리듯 말했다.',
      ]);
      await era.printAndWait([
        '그때 ',
        you.get_colored_name(),
        '은(는) 떠올렸다. 예전에 ',
        tachyon.sex,
        '에게 도시락을 내놓았다가 혹평을 들었을 때도 똑같이 오기를 부렸었지.',
      ]);
      await era.printAndWait([
        '그러고 보니 그때의 ',
        tachyon.sex,
        '은(는) 뭐라고 대답했더라?',
      ]);
      era.printButton('「기대하고 있을게, 연구자 양반.」', 1);
      await era.input();
      await tachyon.say_and_wait('……한낱 모르모트 주제에.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 작은 혼잣말을 듣고 그만 웃음이 나왔다.',
      ]);
    } else {
      await era.printAndWait([
        '이제 와서 ',
        tachyon.sex,
        '는 자기 몸으로 약을 시험하는 것으로도 모자라, 마수를 다른 사람에게까지 뻗치려 하고 있다!',
      ]);
      await era.printAndWait([
        '당장 홍차 맛이 나는 약을 만들려고 하고 있지 않은가.',
        tachyon.sex,
        '가 색깔까지 홍차처럼 만드는 방법을 찾는다면 정말 큰일이다!',
      ]);
      era.printButton('「타키온!」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), '은(는) 참지 못하고 소리쳤다.']);
      era.println();
      await tachyon.say_and_wait([callname, '? 무슨 일인가……']);
      era.printButton('「어떤 약이든 좋아, 얼마든지 가져와!」', 1);
      era.printButton('「딱 하나만 약속해 줘.」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '에에…… 잠깐, ',
        callname,
        '……자네, 뭔가 오해하고 있는 것 같은데……',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 무언가 말하려 했지만 ',
        you.get_colored_name(),
        '에게 가차 없이 말이 끊겼다.',
      ]);
      await era.printAndWait(
        '그렇다…… 무슨 일이 있어도 이것만큼은 지금 확실히 말해야 한다.',
      );
      era.printButton(
        '「나만이 영원한 유일무이한 모르모트(실험체)야!」',
        1,
      );
      await era.input();
      await era.printAndWait('그렇다…… 지금도 그 맛은 홍차에 한없이 가까웠다.');
      await era.printAndWait([
        '万一、',
        tachyon.sex,
        '가 그것을 다른 사람의 음료에, 아니면 더 끔찍하게도 식수에 섞는다면…… 상상도 하기 싫다.',
      ]);
      await era.printAndWait([
        '그러니 여기서 자신의 입장을 분명히 해서 ',
        tachyon.sex,
        '가 다른 사람을 실험체로 삼으려는 생각을 포기하게 만들어야 한다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……자네…… 역시 오해를………… 그래도…… 음……');
      era.println();
      await era.printAndWait([
        '어째서인지 ',
        tachyon.get_colored_name(),
        '은(는) 당황해서 등을 돌렸다.',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 돌아서기 전에 새빨개진 얼굴을 보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……내 모르모트는 처음부터 끝까지 자네 한 마리뿐일세…… 아무튼 매일 약을 시험하러 오게! 모르모트라면 군말 없이 약을 마시는 게 본업 아닌가!',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 씩씩거리며 떠났고, 실험실 뒷정리는 ',
        you.get_colored_name(),
        ' 혼자에게 남겨졌다.',
      ]);
      era.println();
      await era.printAndWait([
        '……왜 화를 낸 걸까.',
        you.get_colored_name(),
        '으로서는 짐작도 가지 않았다.',
      ]);
      await era.printAndWait([
        '다만……',
        tachyon.sex,
        '가 다른 실험체를 찾아낸다면 그 순간 ',
        you.get_colored_name(),
        '의 가슴은 그 가능성만으로도 조금 철렁했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 자신의 모르모트는 오직 자신뿐이라고 말했을 때 그 긴장감은 흔적도 없이 사라졌다.',
      ]);
      era.println();
      await era.printAndWait('설마…… 약에 의존하게 된 걸까?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 고개를 저으며 그 무시무시한 가능성을 떨쳐 냈다.',
      ]);
    }
    return [];
  },

  // [번역 완료] event_talk_callname
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('응?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '가 ',
          you.get_colored_name(),
          '이(가) 부르는 소리가 들린 것 같아 뒤돌아보았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('아무것도 아니네. 그냥 한번 불러 봤을 뿐일세.');
        era.println();
        await era.printAndWait([
          '그러자 ',
          you.get_colored_name(),
          '은(는) 다시 앞을 보고 하던 일로 돌아갔다.',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '군']);
        await era.printAndWait('！？');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 화들짝 뒤돌아봤지만 눈앞의 ',
          tachyon.get_colored_name(),
          '은(는) 평소처럼 웃고 있었다.',
        ]);
        await era.printAndWait('마치 방금 아무 일도 없었던 것처럼.');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 등에 가까이 다가가 응석을 부리듯 속삭였다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '은(는) 얼굴을 조금도 붉히지 않았다.',
        ]);
        await era.printAndWait(
          '지난번에 이 속삭임에 넘어가 돌아보는 순간 약을 먹었기 때문이다.',
        );
        await era.printAndWait('이번에는 몇 번을 불러도 절대로 돌아보지 않으리라.');
        era.println();
        await tachyon.say_and_wait([callname, '……']);
        await tachyon.say_and_wait([callname, '……❤']);
        await tachyon.say_and_wait([callname, '❤']);
        await tachyon.say_and_wait([callname, '❤']);
        era.println();
        await era.printAndWait([
          '어째서인지 ',
          tachyon.sex,
          '의 목소리는 점점 달콤하고 끈적하게 변해 갔다.',
        ]);
        await era.printAndWait([
          '차마 돌아볼 수 없는 ',
          you.get_colored_name(),
          '은(는) 초조함을 꾹 참으며 자리에 앉아 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………馬鹿');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '의 마지막 작은 한숨을 듣고 ',
          you.get_colored_name(),
          '은(는) 결국 참지 못하고 뒤를 돌아봤다.',
        ]);
        await era.printAndWait('그리고……');
        era.println();
        await era.printAndWait('꿀꺽');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 손에는 텅 빈 시험관이 들려 있었다.',
        ]);
        await era.printAndWait([
          '내용물은? 방금 전 ',
          you.get_colored_name(),
          '이(가) 돌아본 순간 전부 ',
          you.get_colored_name(),
          '의 입속으로 들어간 것이다.',
        ]);
        era.println();
        await tachyon.say_and_wait('정말이지…… 이번에는 꽤 끈질겼군.');
        era.println();
        await era.printAndWait('약효가 돌기 시작했다. 이번에는 마비 작용인 모양이다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 간신히 고개를 돌렸다. 눈앞에는 득의양양한 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '터져 나오려던 불평은 ',
          tachyon.sex,
          '의 살짝 붉어진 뺨을 보자 흔적도 없이 사라졌다.',
        ]);
        era.println();
        await era.printAndWait(['역시 ', tachyon.sex, '에게는 당할 수가 없군.']);
        await era.printAndWait([
          '그런 생각을 하는 사이 ',
          you.get_colored_name(),
          '은(는) 의식을 잃었다.',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 실험을 하고 있는 모양이다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 단정한 옆얼굴을 바라보다 문득 장난기가 생겼다.',
        ]);
        era.printButton('「아그네스 타키온.」', 1);
        await era.input();
        await era.printAndWait([you.get_colored_name(), '은(는) 조용히 불렀다.']);
        await era.printAndWait([
          tachyon.sex,
          '의 등이 살짝 떨렸지만 돌아보지 않고 아무 일도 없다는 듯 실험을 계속했다.',
        ]);
        era.println();
        await era.printAndWait([
          '그 모습은 ',
          you.get_colored_name(),
          '의 장난기를 더욱 부추겼다.',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 여러 가지 목소리로 불러 보았다.',
        ]);
        await era.printAndWait([
          '이름을 부를 때마다 ',
          tachyon.sex,
          '의 몸은 전보다 더 오래 떨렸다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 옆에서 ',
          tachyon.sex,
          '의 얼굴이 점점 빨개지는 것을 지켜보았다.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '의 뺨이 붉게 물드는 모습을 보자 ',
          you.get_colored_name(),
          '도 부끄러워졌다.',
        ]);
        await era.printAndWait('하지만 이미 시작된 장난을 멈출 수는 없었다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 계속 이름을 불렀고 목소리는 점점 부드러워졌다.',
        ]);
        await era.printAndWait([
          '어느새 장난기는 사라지고 지금의 ',
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '가 더 수줍어하고 한층 ',
          tachyon.teen_sex_title,
          '다운 얼굴을 보여 주기를 간절히 바랐다.',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '？',
          tachyon.teen_sex_title,
          '？',
        ]);
        await era.printAndWait(
          '원래라면 어울리지 않을 두 단어가 지금은 이상할 만큼 잘 어울렸다.',
        );
        await era.printAndWait('그렇게 한참이 흘렀다.');
        await era.printAndWait('한 사람은 계속 부르고 다른 한 사람은 모르는 척했다.');
        era.drawLine();
        await era.printAndWait([
          '갑자기 ',
          tachyon.sex,
          '의 얼굴빛이 붉은색에서 창백한 푸른빛으로 변했다.',
        ]);
        await era.printAndWait([
          '계속 ',
          tachyon.sex,
          '을(를) 지켜보던 ',
          you.get_colored_name(),
          '은(는) 금세 알아채고 ',
          tachyon.sex,
          '의 시선을 따라갔다.',
        ]);
        era.println();
        await era.printAndWait([
          '시선 끝에는 ',
          tachyon.sex,
          '가 쥐고 있는 삼각형 위험 표시가 붙은 약이 있었다.',
        ]);
        await era.printAndWait('약병은 이미 완전히 비어 있었다.');
        await era.printAndWait('약을 넣던 중 손이 떨려 한꺼번에 전부 쏟아 넣은 모양이다.');
        await era.printAndWait([
          '그리고 ',
          tachyon.sex,
          '의 손에 들린, 위험한 약을 너무 많이 넣은 그 시험관은……',
        ]);
        await era.printAndWait(
          '액체가 눈에 띄는 속도로 부풀어 시험관 밖으로 넘쳤다. 더 심각한 것은 뿜어져 나오는 증기였다.',
        );
        await era.printAndWait(
          '저렇게 작은 시험관에서 나왔다고 믿기 힘들 만큼 많은 증기가 방 안을 채우고 밖으로 흘러나갔다.',
        );
        era.println();
        await era.printAndWait([
          '그때 ',
          tachyon.sex,
          '는 마침내 뒤돌아보았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 얼굴이 다시 붉게 물드는 것을 보았다. 하지만 이번에는 ',
          you.get_colored_name(),
          '은(는) 확신했다. 부끄러움 때문이 아니었다.',
        ]);
        await era.printAndWait('이건……………');
        era.println();
        await tachyon.say_and_wait([callname, '！！！！！！！！！！！！！！']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【학원에서 알려드립니다】', { align: 'center' });
        await era.printAndWait(
          ['午後、', tachyon.get_colored_name(), '、薬剤、終了'],
          { align: 'center' },
        );
    }
  },

  // [번역 완료] event_talk_drink
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '~~ 뭐라도 마시겠나?']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 갑자기 음흉한 미소를 지으며 ',
      you.get_colored_name(),
      '에게 물었다.',
    ]);
    await era.printAndWait('공짜로 베푸는 친절일 리가 없다.');
    await era.printAndWait([
      '그렇다고 대놓고 거절하면 ',
      tachyon.sex,
      '은(는) 틀림없이 화를 낼 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait('그래서 뭘 마시겠나?');
    era.println();
    era.print('어쩌지……');
    era.printButton('홍차', 1);
    era.printButton('커피', 2);
    era.printButton('사스', 3);
    era.printButton('안 마신다', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('역시 정석은 홍차겠지.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 고개를 끄덕였다. ',
          you.get_colored_name(),
          '이(가) 그걸 고를 줄 알았다는 듯 뒤에서 미리 타 둔 홍차를 꺼냈다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…………',
          you.get_colored_name(),
          '은(는) 가루가 채 녹지도 않은 홍차를 보고 얼굴이 굳어졌다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '왜 그러나, ',
          callname,
          '? 내가 직접 탄 차일세. 어서 마시게.',
        ]);
        era.println();
        await era.printAndWait([
          '……뭐, 좋다. 홍차를 고른 순간부터 ',
          you.get_colored_name(),
          '은(는) 이런 전개를 각오했을 것이다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 홍차를 단숨에 들이켰다.',
        ]);
        await era.printAndWait('음, 맛있고 상쾌하군.');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            '커피가 좋아. 요즘 자주 ',
            y_call_c,
            '이(가) 내려 준 커피를 마시고 있거든.',
          ]);
        } else {
          await you.say_and_wait('커피가 좋아. 요즘 일이 바빠서 자주 마시거든.');
        }
        era.println();
        await tachyon.say_and_wait(
          '대체 왜 그렇게 쓰고 흙탕물 같은 걸 마시는 겐가?',
        );
        era.println();
        await you.say_and_wait(['방금 그 말은 ', y_call_c, '에게 사과해.']);
        era.println();
        await tachyon.say_and_wait('뭐, 좋네. 마시고 싶다면 마시게.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 하는 수 없다는 듯 뒤에 미리 준비해 둔 음료를 꺼냈다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 눈앞의 가루도 다 녹지 않은 짙은 붉은색 액체를 보며, 지적할 것이 너무 많아 말이 나오지 않는다는 감각을 처음으로 맛보았다.',
        ]);
        era.println();
        await you.say_and_wait('일단…… 이게 커피라고?');
        await tachyon.say_and_wait(
          '……카페인은 많다네. 그러니 커피라고 치게.',
        );
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '두 사람은 말없이 서로를 바라봤고, ',
          you.get_colored_name(),
          '은(는) 체념한 채 그것을 마셨다.',
        ]);
        break;
      case 3:
        await you.say_and_wait('사스가 좋아. 좀 생소해도 확실히 맛있거든.');
        era.println();
        await tachyon.say_and_wait('에에…… 왜 그렇게 괴상한 맛을 좋아하는 건가?');
        era.println();
        await you.say_and_wait('좋아하니까 그렇지. 안 되나?');
        era.println();
        await tachyon.say_and_wait(
          '………아니, 그건 냄새도 맛도 약과 비슷하지 않나. 그러니 차라리 내 약을 직접 마시면 되겠군.',
        );
        era.println();
        await you.say_and_wait('！？');
        await era.printAndWait(['아무래도 ', tachyon.sex, '은(는) 더 이상 속일 생각도 없는 모양이다.']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 약을 탄 홍차를 옆으로 치우고 백의 속에서 형광색 약품을 꺼냈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 형식적인 저항을 두 번 했지만 이내 약을 단숨에 마시게 되었다.',
        ]);
        await era.printAndWait(
          '그런데 이 약은 약 맛이 안 난다. 어째서 오야코동 맛이 나는 거야!?',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 거절했다. 저항이 무의미하더라도 ',
          you.get_colored_name(),
          '은(는) 자신의 반항을 보여 주려 했다.',
        ]);
        era.println();
        await era.printAndWait(
          '이것이야말로, 이것이야말로 인류의 각오다아아아아아아!',
        );
        era.println();
        await tachyon.say_and_wait('시끄럽군.');
        era.println();
        await era.printAndWait([
          '하지만 그 각오는 ',
          you.get_colored_name(),
          '의 소우주를 폭발시키지 못했다. 결국 인간은 ',
          tachyon.uma_sex_title,
          '에게 이길 수 없다. 5초 후 ',
          you.get_colored_name(),
          '은(는) 얼굴이 붙들리고 입을 벌린 채 액체를 들이켜야 했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('처음부터 이렇게 했으면 수고를 덜었을 텐데.');
    }
    await era.printAndWait('털썩');
    await era.printAndWait([
      '그것은 ',
      you.get_colored_name(),
      '이(가) 의식을 잃고 책상에 쓰러지는 소리였다.',
    ]);
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait(
        '오호라, 낚아 올린 건 내일 도시락 재료로 써먹기로 하지.',
      );
    } else {
      await tachyon.say_and_wait([
        '으으…… 왜 한 마리도 안 잡히는 건가……',
        callname,
        ', 만약 이 물고기들이 강물에 섞인 『정체불명의 물질』을 『실수로』 마시고 떠오른다면, 그것도 내가 낚은 걸로 쳐 주겠나? 안 되나?',
      ]);
    }
  },

  // [번역 완료] o_r_walking
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      ', 빨리 따라오지 않으면 내일 약은 두 배로 늘릴 걸세.',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        '맞다, 이 장소. 예전에 노점을 열었을 때…… 아니, 아무것도 아니네. 신경 쓰지 말게.',
      );
    }
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait([
          '에에? 어째서 ',
          callname,
          '은(는) 크레인 게임을 그렇게 잘하는 건가? 의욕에 흰색, 파란색…… 아니, 아무것도 아니네. 무슨 말인지 나도 모르겠군.',
        ]),
      () =>
        tachyon.say_and_wait([
          '오호, 내 인형이 있군? ……실물보다 귀엽다고? 잠깐, ',
          callname,
          ', 방금 말이 무슨 뜻인지 설명해 보게.',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '쳇…… 이렇게까지 웃어야 하는 건가?',
        );
        await tachyon.say_and_wait(
          '아니, 내가 까탈스러운 게 아니라 이 스티커 사진기라는 것 자체가 지나치게 비합리적인 걸세! …………하아, 알겠네. 3, 2, 1, 치즈.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_dating
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          '음? 실험 도구를 사러 다니는 건 데이트라고 부르지 않는다고?',
        );
        await tachyon.say_and_wait([
          callname,
          ', 데이트라는 단어는 극히 추상적이네. 자네가 데이트라고 생각하면 그게 곧 데이트인 걸세. 알겠나?',
        ]);
        await tachyon.say_and_wait([
          '나 같은 절세미인 ',
          tachyon.teen_sex_title,
          '과 외출할 수 있다는 것 자체가 이미 데이트와 동의어 아니겠나?',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('거리 산책, 차 마시기, 잡담, 식사');
        await tachyon.say_and_wait(
          '이게 일반적인 데이트인가? ……지루하군.',
        );
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          '데이트가 실험 조수 겸 실험체의 의욕을 얼마나 높이는지 분석하자고? 흠…… 연구 과제로 삼을 가치는 있겠군.',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          '데이트? ……',
          callname,
          ', 보통 과학자는 자기 실험동물과 데이트하지 않는다네. 무슨 뜻인지 알겠나?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait(
          '경품 추첨이라…… 운 같은 불확실한 요소에 기대기보다 재력이나 다른 힘을 동원해 확실하게 경품을 손에 넣는 것이 더 정당한 방법 아니겠나?',
        ),
      () =>
        tachyon.say_and_wait([
          '에이~~ 이런 조작 가능성이 다분한 상자에서 정말 뽑기를 하려는 건가, ',
          callname,
          '? ……뭐, 말리지는 않겠네만, 만약을 위해…… 저 경품 상자 안에 정말 1등 당첨권이 들어 있는지 확인해 봐도 되겠나?',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '추첨인가. 그럼 준비를 좀 할 테니……… 됐네, 시작하게. 음? 갑자기 왜 안경을 쓰냐고?',
        );
        await tachyon.say_and_wait(
          '별거 아니네, 이건 그저 상자 속을 꿰뚫어 볼 수 있는 투시 안경일 뿐이라네. 설마 자네, 내가 정말 운 같은 불확실한 요소를 믿을 거라고 생각한 건 아니겠지?',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait('Winning the soul～～');
        await tachyon.say_and_wait([
          '……후훗, 어떤가, ',
          callname,
          '? 내 노래 실력도 나쁘지 않지? ……뭐라고? NEXT FRONTIER를 듣고 싶다고? 아니면 Special Record?',
        ]);
        await tachyon.say_and_wait(['……', callname, ', 일부러 그러는 거지?']);
      },
      async () => {
        await tachyon.say_and_wait(
          'Выходила на берег Катюша,На высокий берег, на крутой……',
        );
        await tachyon.say_and_wait(
          '러시아어는 모를 텐데, 노래하다 보면 갑자기 읽을 수 있을 것 같은 기분이 든단 말이지……',
        );
        await tachyon.say_and_wait(
          '역시 그렇군. 태어나면서부터 아는 것도 천재의 고민이라네.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          '오호? ',
          callname,
          ', 꽤 잘 부르지 않는가……',
        ]);
        await tachyon.say_and_wait(
          '그렇지만 후렴구에서 그렇게 흥분하지는 말아 주겠나?',
        );
        await tachyon.say_and_wait(
          '자네가 흥분할 때마다 방 안이 너무 눈부셔서 아무것도 보이지 않는다네. 그런 상태에서 가사를 어떻게 읽는지 신기하군……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '에에…… 곡 분위기에 맞춰 몸 색깔까지 바꾸는 건가? 무지개 네온 버전까지 있다니……',
        );
        await tachyon.say_and_wait(
          '아니, 발명자인 나조차 내 약에 그런 기능이 있는 줄 몰랐네. 무섭군……',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(tachyon) {
    await tachyon.say_and_wait('……이 영화관…… 외관은 참 예쁘게 생겼군……');
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('이보게, 뭐라고 말 좀 해 보게나……');
    await tachyon.say_and_wait(
      '동행인의 몸에서 뿜어져 나오는 빛이 너무 밝아서 입장을 거절당하다니, 이 아그네스 타키온조차 생전 처음 겪는 일이로군……',
    );
    await tachyon.say_and_wait('사과라도 좋으니 한마디라도 해 보게.');
    era.printButton('「애초에 나를 이렇게 만든 게 누구인데 그래!?」', 1);
    await era.input();
    await era.printAndWait(
      '결국 두 사람은 오순도순 실험실로 돌아가 NetFlOx를 보았다.',
    );
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '……맛없군. 전부 레토르트 기성품이고 향료와 화학조미료로 맛만 냈잖나. 평소 먹는 약으로도 부족하다고 생각하는 건가? 이런 걸 내게 먹이다니.',
      );
      await era.printAndWait([
        '요리가 나오자마자 ',
        tachyon.get_colored_name(),
        '에게 머리부터 꼬리까지 혹평을 들었다. 기분을 전환하려던 것이 도리어 ',
        tachyon.sex,
        '의 기분만 망쳐 버렸다.',
      ]);
      await tachyon.say_and_wait('다만…… 이 디저트는 나쁘지 않군.');
      await era.printAndWait('뭐…… 이가 아플 만큼 달콤한 푸딩이라고? 정말인가?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 취향을 조금은 알게 된 것 같았다.',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            '이보게, ',
            callname,
            '……외식하러 데려와 주는 건 고맙지만, 자네 요리보다도 못한 음식을 일부러 먹으러 올 필요가 있는 건가?',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어리둥절한 눈으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '맛은 나쁘지 않네. 하지만 ',
            callname,
            '의 요리와 비교하면…… 뭔가 부족해…… 아, 그렇지. 단맛이 부족하군.',
          ]);
          await tachyon.say_and_wait([
            '설탕을 더 먹으면 당뇨병에 걸린다고? 걱정할 필요 없네.',
            tachyon.uma_sex_title,
            '의 신진대사가 알아서 해결해 줄 테니까.',
          ]);
        },
        async () => {
          await era.printAndWait(
            '홍샤오러우, 탕수육, 화과자, 치사량에 가까울 만큼 설탕을 넣은 홍차, 그리고 마무리는 꿀 푸딩.',
          );
          await tachyon.say_and_wait([callname, '? 먹지 않는 건가?']);
          await you.say_and_wait('……보기만 해도 이가 아프군. 사양하겠어.');
        },
      ];
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '이보게, ',
          callname,
          '……옷은 인터넷으로 주문해도 충분하지 않나? 인간의 옷과 ',
          tachyon.uma_sex_title,
          '의 옷이 무슨 관계가 있다는 건가?',
        ]);
        await tachyon.say_and_wait(
          '꼬리를 내놓을 구멍이 없어서 옷자락이 들릴 때마다 보이게 된다고?',
        );
        await tachyon.say_and_wait([
          '………그건 성희롱일세, ',
          callname,
          '。',
        ]);
      },
      async () => {
        await tachyon.say_and_wait(
          '조리 도구? 그렇게 잔뜩 사서 뭘 하려는 건가……',
        );
        await tachyon.say_and_wait(
          '에에, 이렇게 요리를 많이 할 수 있다고…… 큭…… 실험비에 슬쩍 포함시킬 수 있다면……',
        );
        await tachyon.say_and_wait(
          '괜찮네, 사게. 두려워할 필요 없네. 내가 처리하면 정식 실험 도구로 신청할 수 있을 걸세…… 아마도.',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '무료 시음…… 무료 체험. 역시 가장 강력한 판매 문구는 『무료』군. 판촉이라는 걸 알면서도……',
        );
        await tachyon.say_and_wait([
          '무료라는 말을 듣는 순간 남이 준 음식에 대한 경계심을 잊게 되는군……',
          callname,
          ', 좋은 생각이 떠올랐네. 약 무료 시음 행사라네! ……안 된다고?',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_cook
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait('내게 요리를 대접하겠다고? 먹을 수 없는 물건이라면 사양하겠네.');
      await era.printAndWait('까다로운 손님이군…… 실력을 더 쌓은 뒤 다시 도전할 수밖에.');
    } else {
      const buffer = [];
      if (!plan_b) {
        buffer.push(async () => {
          await tachyon.say_and_wait(['힘내게, ', callname, '～～']);
          await tachyon.say_and_wait(
            '음? 같이 만든다는 건 자네가 요리하고 내가 옆에서 참견한다는 뜻일세.',
          );
        });
        if (era.get('relation:32:0') > 375) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '! 오늘은 직접 달걀말이를 만들었네! 어서 먹어 보게!',
              ]);
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 눈앞의 조금 탄 달걀말이를 바라보았다. 내용물이 모두 튀어나와 달걀말이라기보다는 달걀을 넣은 볶음요리에 가까웠다……',
              ]);
              await era.printAndWait('뭐…… 맛만큼은 먹을 만하다.');
            },
            async () => {
              await tachyon.say_and_wait([
                '……',
                callname,
                ', 알고 있겠지? 학원에서는 안전을 위해 인덕션 같은 것밖에 사용할 수 없네.',
              ]);
              await tachyon.say_and_wait(
                '하지만…… 인덕션은 다루기 어렵다네. 그러니…… 내 잘못이 아닐세. 인덕션이 쓰기 힘든 탓이지. 가스레인지였다면 절대로 이렇게 되지 않았을 걸세……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 눈앞의 새까맣게 탄 달걀을 바라보았다.',
              ]);
              await era.printAndWait(
                '……조금 쓰고 조금 짜다. 간신히 먹을 수 있는 정도다.',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '생각해 보면 트레이너실에서 요리하는 것 자체가 상당히 비합리적이군.',
              );
              await era.printAndWait([
                '오늘은 ',
                tachyon.sex,
                '가 도시락을 만들기로 약속했던 ',
                tachyon.get_colored_name(),
                '은(는) 배달 음식 상자 두 개를 꺼냈다.',
              ]);
              await era.printAndWait(
                '……먹을 수 있는 건 확실하지만 이미 처음의 취지에서 벗어났다.',
              );
            },
          );
        }
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              '원래 ',
              you.get_colored_name(),
              '와(과) ',
              tachyon.get_colored_name(),
              '은(는) 번갈아 도시락을 만들기로 정했었다.',
            ]);
            await era.printAndWait([
              '하지만 최근에는 ',
              coffee.get_colored_name(),
              '의 훈련량이 늘었고 ',
              you.get_colored_name(),
              '은(는) 멈춰 서서 도시락을 만들 여유도 없었다.',
            ]);
            await era.printAndWait([
              '그래서 최근에는 거의 매번 ',
              tachyon.get_colored_name(),
              '이(가) 요리하고 ',
              you.get_colored_name(),
              '은(는) 먹으면서 ',
              tachyon.sex,
              '와 정보를 나누는 나날이 이어졌다.',
            ]);
            era.printButton('「맛있어!」', 1);
            await era.input();
            await tachyon.say_and_wait('후후, 나쁘지 않군.');
            await era.printAndWait([
              you.get_colored_name(),
              '이(가) 놀라워하는데도 ',
              tachyon.get_colored_name(),
              '은(는) 끝까지 표정 하나 바꾸지 않았다.',
            ]);
            await tachyon.say_and_wait('달리 할 일도 없으니까.');
            await era.printAndWait([
              '그 말을 ',
              tachyon.sex,
              '은(는) 슬픈 마음으로 꺼낸 것일까.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 알 수 없었다.',
            ]);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '의 도시락을 평범하게 다 먹은 뒤 ',
              coffee.get_colored_name(),
              '의 잠재력을 끌어내는 약제 연구로 돌아갔다.',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '의 도시락을 먹었다.',
            ]);
            await era.printAndWait([
              '지금의 ',
              tachyon.sex,
              '은(는) 예전보다 말수가 적었다. 시시한 이야기보다는 ',
              tachyon.sex,
              '은(는) ',
              coffee.get_colored_name(),
              '을(를) 어떻게 더 빠르게 달리게 할지에 집중하고 있었다.',
            ]);
            await era.printAndWait([
              '말수가 적고 집중력이 뛰어나며 요리도 잘한다. 어떤 의미에서는 지금의 ',
              tachyon.get_colored_name(),
              '은(는) 과거의 ',
              tachyon.sex,
              '보다 세상 사람들이 말하는 훌륭한 여성상에 더 가까웠다.',
            ]);
            await era.printAndWait([
              '하지만 역시…… 그 시절의 열정과 활기로 가득했던 ',
              tachyon.sex,
              '이(가) 그리웠다.',
            ]);
          },
        );
      }
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] office_game
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '쳇…… 이 기체는 너무 느리군. ',
        tachyon.uma_sex_title,
        '의 출력 속도를 전혀 따라오지 못하는구만!',
      ]);
    } else {
      await tachyon.say_and_wait('격투 게임? 진 쪽이 상대의 말을 듣기로 하는 건가?');
      await tachyon.say_and_wait(
        '후후, 커맨드 리스트를 전부 외운 나를 이길 방법이 있을 것 같은가?',
      );
      await tachyon.say_and_wait(
        '……잠깐! 구석에 박혀서 원거리 공격만 계속하는 건 너무 비겁하지 않은가!',
      );
    }
  },

  // [번역 완료] office_study
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '아아, ',
          callname,
          ', 이 단원을 좀 가르쳐 주겠나?',
        ]);
        await tachyon.say_and_wait(
          '『타키온도 모르는 게 있다니』라고? 칭찬인 건 알겠지만 너무 과하군. 나도 내가 모르는 게 얼마나 많은지는 알고 있으니까.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          '아아, ',
          callname,
          ', 이것 좀 알려 주겠나?',
        ]);
        await tachyon.say_and_wait(
          '그래, 이 단원 말일세. 과학 윤리. 어째서인지 도무지 머릿속에 들어오질 않아…… 신기한 일이군……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '시험을 위해 배우는 지식에 정말 의미가 있는 걸까?',
        );
        await tachyon.say_and_wait([
          '내 말이 무슨 뜻인지 알겠지, ',
          callname,
          '。',
        ]);
        await tachyon.say_and_wait(
          '실생활에서 전혀 쓰이지 않는 걸 배워 봤자 쓸모없지.',
        );
        await tachyon.say_and_wait(
          '그러니 윤리니 도덕이니 하는 고리타분한 얘기는 배우지 않아도 되지 않겠나?',
        );
        await tachyon.say_and_wait('……안 된다고?');
      },
      async () => {
        await tachyon.say_and_wait([
          '지리? 아니, ',
          callname,
          '……그렇게 쉬운 과목까지 보충수업을 받아야 한다고 생각하면 곤란하군.',
        ]);
        await tachyon.say_and_wait(
          '의심스럽다면 시험해 보게. 스위스의 수도는 베른, 브라질의 공용어는 스페인어, 미국의 전신은 영국의 13개 식민지…… 어떤가, 전부 대답했지 않나?',
        );
        await tachyon.say_and_wait(
          '남쪽이 어디냐고? 우문이군. 당연히 땅 아래쪽이지.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          ', 이 작문의 어떤 부분이 문제인지 도통 모르겠군.',
        ]);
        await tachyon.say_and_wait(
          '주제는 『커튼은 왜 파란색인가』였지?',
        );
        await tachyon.say_and_wait(
          '그래서 발색 원리와 인간의 원추세포가 받아들이는 정보를 바탕으로 2만 자에 걸친 분석을 썼는데, 뭐가 잘못됐다는 거지?',
        );
        await tachyon.say_and_wait(
          '……그렇군, 글자 수를 초과한 거였나. 다음에는 2천 자 이내로 쓰겠네.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] out_church
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……신이여.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 지루한 표정으로 신사를 바라보았다. 무슨 생각을 하는지는 알 수 없었다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('만약…… 신이 그렇다면, 나는……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 혼잣말을 중얼거렸다.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '신이 정말 존재하기는 하는가? 물론 삼여신은 알고 있네. 하지만…… 따지고 보면 삼여신도 더 강한 힘을 손에 넣은 평범한 존재일 뿐……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 황급히 ',
            tachyon.get_colored_name(),
            '의 입을 틀어막았다.',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            '이보게, ',
            callname,
            ', 신보다는 실험을 하러 돌아가세.',
          ]),
        () =>
          tachyon.say_and_wait(
            '대길이든 대흉이든 상관없네. 그런 건 신이 정하는 게 아니라 내가 만들어 내는 것이니까.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_atrium
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait(
          '悩みを樹洞に向かって叫ぶ？ それで何が変わるというのです。',
        );
        await tachyon.say_and_wait(
          '……退屈ですわ。愚痴るくらいなら、現状を変える努力をしなさい。',
        );
        await tachyon.say_and_wait(
          '『出せば心の圧は軽くなる』？ 私のそばにいるのに、まだ圧があるのですか？ 待ちなさい、その苦笑いの意味は何ですの。',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' を枯れた樹洞の前へ連れていった。',
              tachyon.sex,
              'は自分から、洞の縁に身を預けた。',
            ]);
            await era.printAndWait([
              'だが今日遊ぶのはそれではない。',
              you.get_colored_name(),
              ' は首を振り、',
              tachyon.get_colored_name(),
              ' の肩に寄りかかった。',
            ]);
            await you.say_and_wait(
              '愚痴と圧を吐く場所なら、君も、悔しいことを叫んでみろ。',
            );
            await era.printAndWait([
              'そう言って ',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の尻を軽く叩いた。聞きたいものが何か、それだけで十分だった。',
            ]);
            await era.printAndWait([
              '頭の回転が速い天才',
              tachyon.uma_sex_title,
              'は、即座に ',
              you.get_colored_name(),
              ' の意図を読んだ。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は責めるように ',
              you.get_colored_name(),
              ' を一目見て、それから樹洞へ『悔しい』を叫び始めた。',
            ]);
            await tachyon.say_and_wait([
              '乳頭を ',
              callname,
              ' に摘まれるだけでイってしまうのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'お穴が雑魚すぎて、',
              callname,
              ' に触られただけで濡れるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              callname,
              ' の匂いを嗅いだだけで頭が交尾しか残らない痴女になるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'おちんぽを含んだ瞬間、',
              callname,
              ' の一生オナホになりたくなるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              '我慢しろと命じられているのに、',
              callname,
              ' が射精するたび飲み込んで罰せられるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait(
              '毎回薬に頼っても、おちんぽ様に勝てないのが悔しいですわ❤️',
            );
            await tachyon.say_and_wait(
              'おちんぽ様を満足させる前に自分が先にイってしまうのが悔しいですわ❤️',
            );
            await era.printAndWait([
              '一声叫ぶたびに ',
              you.get_colored_name(),
              ' はご褒美に',
              tachyon.sex,
              'の尻を叩いた。叩かれるたび',
              tachyon.sex,
              'はより熱心に腰を揺らし、さらに過激な『悔しい』を吐き出した。',
            ]);
            await era.printAndWait([
              '最後、周囲の',
              tachyon.uma_sex_title,
              'の羞恥に染まった視線の中、',
              you.get_colored_name(),
              ' は両脚を震わせて歩けなくなった ',
              tachyon.get_colored_name(),
              ' の手を引き、実験室へ戻った。',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は枯れた樹洞に身を預け、中を退屈そうに覗いていた。',
            ]);
            await era.printAndWait([
              '外へ突き出した',
              tachyon.sex,
              'の尻を見て、',
              you.get_colored_name(),
              ' は欲を抑えきれなくなった。',
            ]);
            await tachyon.say_and_wait([callname, '……んっ❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の、まだ幼さを残す尻を叩いた。布越しの弾力が、打ち下ろした力を掌へ跳ね返した。',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              '、ここ、残響が……大きいですわ❤️……戻って、戻ってからにしましょう、いいですわね❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の懇願を聞かず、もう一度強く叩いた。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は慌てて口を押さえたが、それでも声は漏れ出た。',
            ]);
            await tachyon.say_and_wait('んひぃ❤️❤️❤️');
            await tachyon.say_and_wait('ん……❤️');
            await tachyon.say_and_wait('んぅ……❤️');
            await tachyon.say_and_wait('待って、入れないでええええ❤️❤️❤️');
            await era.printAndWait([
              '最後、',
              you.get_colored_name(),
              ' は樹洞の上でぐったりし、顔を赤くした ',
              tachyon.get_colored_name(),
              ' を抱き、トレーナー室へ連れて帰った。',
            ]);
            await era.printAndWait([
              '道行く生徒たちは、思わず ',
              you.get_colored_name(),
              ' たちに注目した。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' にとって、この視線はもう慣れたものだった。',
            ]);
            await era.printAndWait([
              '腕の中の ',
              tachyon.get_colored_name(),
              '……人目も構わず、力の抜けた両手で抱擁をねだる',
              tachyon.sex,
              'は、',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'を満たすまで、そんなことに構う余裕などないだろう。',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            'ん……',
            callname,
            ' ❤️……人の気持ちを吐く樹洞の前で、こんなこと……聞かれたらどうしますの❤️',
          ]);
          await tachyon.say_and_wait('性欲を吐くのも、発散のうち？');
          await tachyon.say_and_wait(
            'まったく❤️……見つかっても知りませんわよ❤️',
          );
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は枯れた樹洞の縁に寄り、中へ何か叫びたそうにしていたが、長く迷った末にやめた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の様子を見て、',
        you.get_colored_name(),
        ' はなぜか悲しみと、わずかな安心を同時に覚えた',
      ]);
    }
  },

  // [번역 완료] school_rooftop
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '아아, 도시락은 잠깐 내려놓게. 풍속 측정을 끝내고 먹겠네.',
          ),
        async () => {
          await tachyon.say_and_wait([
            '옥상에서 도시락이라…… 그러고 보니, ',
            callname,
            ', 옥상이 원래 출입 금지 구역이었다는 걸 아나?',
          ]);
          await you.say_and_wait('어, 정말이야?');
          await tachyon.say_and_wait([
            '그래. 어떤 ',
            tachyon.uma_sex_title,
            '이(가) 옥상에서 실험하다가 실수로 유독물질을 누출했다고 하더군.',
          ]);
          await tachyon.say_and_wait('……그 표정은 뭔가?');
          await tachyon.say_and_wait('아니, 아니네. 내가 아니었어.');
          await tachyon.say_and_wait(
            '뭐, 자네 말대로 시간이 이렇게 흘렀으니 잔류 물질은 없겠지.',
          );
          await tachyon.say_and_wait([
            '설령 남아 있더라도…… 지금 내 약으로 단련된 ',
            callname,
            '이(가) 과거의 내 약에 질 리 없지 않나.',
          ]);
          await you.say_and_wait('역시 자네였잖아!');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 도시락을 챙겨 ',
            tachyon.get_colored_name(),
            '와 함께 옥상에서 점심을 먹었다.',
          ]);
          await era.printAndWait([
            '산들바람이 ',
            tachyon.get_colored_name(),
            '의 머리카락 끝을 스쳤고, ',
            tachyon.sex,
            '은(는) 쿡쿡 웃으며 즐거워하는 듯했다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 이 장소가 마음에 드는 모양이다. 기회가 생기면 또 ',
            tachyon.sex,
            '을(를) 데려와야겠다.',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 옥상에서 조용히 시원한 바람을 맞고 있었다. 표정은 없었다. 또 ',
            coffee.get_colored_name(),
            '의 훈련 계획을 생각하는 걸까.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 기분 전환을 위해 ',
            tachyon.get_colored_name(),
            '을(를) 옥상으로 데려와 도시락을 먹었지만, ',
            tachyon.sex,
            '은(는) 식사 내내 ',
            coffee.get_colored_name(),
            '에 대한 이야기만 했다.',
          ]),
        async () => {
          await era.printAndWait([
            tachyon.sex,
            '은(는) 어째서인지 난간 너머 하늘만 바라보고 있었다.',
          ]);
          await era.printAndWait(
            '눈동자에는 아무런 감정도 없이 그저 하늘 풍경만 비쳤다.',
          );
          await tachyon.say_and_wait(['……무슨 일이라도 있나? ', callname, '？']);
          await era.printAndWait([
            '어째서인지 ',
            you.get_colored_name(),
            '은(는) 갑자기 두려워졌다.',
          ]);
          await era.printAndWait([
            '그 두려움에 이끌려 ',
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 손을 쥐었다가 곧 놓았다.',
          ]);
          await tachyon.say_and_wait([
            '……안심하게, ',
            callname,
            '. 어디에도 가지 않겠네.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] select_when_escape
  select_when_escape(tachyon, callname) {
    tachyon.say(['참 신기하군, ', callname, '']);
    tachyon.say([
      '지하실에 있었을 때 자네의 눈동자는 빛을 거의 잃고 있었는데…… 지금은 다시 사람을 빨아들일 듯한 광채를 되찾았군.',
    ]);
    tachyon.say([
      '『내 눈에 특별한 빛이 있다면 그건 타키온의 빛을 반사하기 때문이야』라고? ……후후, ',
      callname,
      ', 평소답지 않게 말솜씨가 좋구먼……',
    ]);
    tachyon.say([
      '그렇다면…… 언젠가 내 눈동자에 다시 먼지가 쌓이면 자네가 한 번 더 닦아 주게.',
    ]);
  },

  // [번역 대상] slave_end
  slave_end: (() => {
    const title = '金の代価';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は飲みかけのウイスキーを手に、よろよろと五軒目のバーから出てきた',
      ]);
      await era.printAndWait('夜は相変わらず暗い。爛れた夜はまだ続く');
      era.println();
      await era.printAndWait('終わった……では、次はどこへ行けばいい');
      await era.printAndWait('ふらふらと歩き、全身から酒の匂いを漂わせている');
      await era.printAndWait([
        '通行人が鼻を覆って遠ざかる姿は、',
        you.get_colored_name(),
        ' がわざわざ作り上げようとしたものだ',
      ]);
      era.println();
      await era.printAndWait('二、三、五………二十三、二十九 ');
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭の中で黙って数えた',
      ]);
      await era.printAndWait([
        '素数を数えて冷静になるわけではない。今夜 ',
        you.get_colored_name(),
        ' が飲んだ酒の量だ',
      ]);
      await era.printAndWait('合計金額は……七桁……それとも八桁か？');
      await era.printAndWait([
        '驚くべき数字だが、それは ',
        you.get_colored_name(),
        ' が一晩で飲んだ酒の値段にすぎない',
      ]);
      await era.printAndWait(
        '最高級のバーで、高いものばかり選んで店を掃討した結果が、普通の人間なら想像もしたくない数字だった',
      );
      era.println();
      await era.printAndWait('だが……');
      await era.printAndWait('無駄だ。まったく効かない');
      await era.printAndWait([
        '値段も度数も関係ない。今夜飲んだ酒は、',
        you.get_colored_name(),
        ' を何度かトイレへ行かせた以外、何の役にも立たなかった',
      ]);
      await era.printAndWait([
        '意識はこれ以上ないほどはっきりしている。はっきりしすぎて、',
        you.get_colored_name(),
        ' は二日前のことを思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、神経抑制剤の排除に関するものですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はウイスキーを口に直接流し込んだ',
      ]);
      await era.printAndWait([
        '一口で普通の人間が酔うはずの強い酒が、',
        you.get_colored_name(),
        ' の頭をさらに澄ませる',
      ]);
      await era.printAndWait(
        '酒で憂さを晴らすのが、アルコールで神経を麻痺させて現実から逃げることなら、その麻痺すら許されない自分は、世界でいちばん惨めな酔客だろう',
      );
      era.println();
      await era.printAndWait(
        '賑やかな夜の街に、自分のような酔客はいくらでもいる',
      );
      await era.printAndWait([
        'ふらつく人々の姿を見て、',
        you.get_colored_name(),
        ' は心から羨んだ',
      ]);
      era.println();
      await era.printAndWait([
        '歩いていると、眼前に突然光が走り、',
        you.get_colored_name(),
        ' は思わず目を細めた',
      ]);
      await era.printAndWait(
        '目を刺すのは照明だけではない。きらめく内装と、一夜で金持ちになる夢がいくつもそこにある',
      );
      await era.printAndWait('賭けと酒、酒と賭け。昔からこの二つは離れない');
      await era.printAndWait(
        '酔いつぶれる酒豪たちが、ほろ酔いのうちに賭場へ手を出すのも、もう決まりごとのようだ',
      );
      era.println();
      await era.printAndWait([
        'だが、酔客の格好をした ',
        you.get_colored_name(),
        ' は賭場へ目すら向けず、ただ前方を見つめた',
      ]);
      await era.printAndWait('賭場の賭けが小物だから嫌ったわけではない———');
      await era.printAndWait([
        'ここの賭場には、',
        tachyon.uma_sex_title,
        'のレースに賭けるという、発覚したら二度と商売できない営業まであるらしい',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が潔癖だからでもない——こんな時間にこんな通りを徘徊する人間が、どれだけ綺麗でいられるというのか',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はまた一口飲み、過去を思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、脳の報酬系の調整と抑制ですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait('普通のサラリーマンの年収を超える金を勝っても');
      await era.printAndWait('一夜で海辺の別荘を一軒失っても');
      await era.printAndWait('感情はひとつも動かず、眉間に皺すら寄らない');
      await era.printAndWait('こんな状態で賭けて、何が楽しいというのか');
      era.println();
      await era.printAndWait(
        '賭場の中で、自分だけが世の外に孤立しているようだ',
      );
      await era.printAndWait('昔の自分がなぜこれに嵌まったのか、理解できない');
      await era.printAndWait('いや、理解はできる。だができないことはできない');
      await era.printAndWait('目が覚めた人間が、夢へ戻れないのと同じだ');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        '立ちんぼの少女',
        'お客さん、ひとりは寂しそうですよ……ご一緒に、春のひとときを過ごしませんか？♡',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、華やかな賭場も後ろに捨て、風俗街へ入った ',
        you.get_colored_name(),
        ' のもとへ、夜の女たちの柔郷が訪れた',
      ]);
      await era.printAndWait(
        'このまま彼女たちの肢体に沈めたら、きっとこの上なく幸せだろう……',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait('ただしいつもの決まりですわ……');
      era.println();
      await era.printAndWait('ああ');
      await era.printAndWait([you.get_colored_name(), ' は少女の誘いを断った']);
      await era.printAndWait('反応はゼロだ');
      await era.printAndWait(
        '本来なら好みのはずの娘でも、今は体にわずかな反応すら起きない',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、',
        you.get_colored_name(),
        ' は通りを出ていた',
      ]);
      await era.printAndWait([
        '広大な夜の街、華やかな夜の都なのに、',
        you.get_colored_name(),
        ' に欲を起こさせるものは何ひとつ見つからない',
      ]);
      await era.printAndWait('かつて興味を持ったものたち');
      await era.printAndWait('美食、酒と煙草、賭け、色……');
      await era.printAndWait(
        'かつて嵌まり、神経を麻痺させるために使ったものたち',
      );
      await era.printAndWait('今は神経を、かえって澄ませるだけだ');
      era.println();
      await era.printAndWait('もういい。もう十分だ');
      await era.printAndWait(
        '何でもいい。酔い沈めさえすれば、考えることをやめられさえすれば、何でもいい',
      );
      await era.printAndWait('理性がこれほど人を狂わせるとは、知らなかった');
      await era.printAndWait('暴力、痛み、血、傷');
      await era.printAndWait('それらでさえ、これ以上の刺激にはならない');
      await era.printAndWait('どれは、どの実験で売り払ったのだろう');
      await era.printAndWait('もう忘れた。そんなことはもうどうでもいい');
      era.println();
      await era.printAndWait(
        '人格が剥がれるように、焦って刺激を求め、それでも何も得られない',
      );
      await era.printAndWait(
        'このままでは……壊れる。神経も、体も、必ず壊れ、切れる',
      );
      await era.printAndWait('だからその前に、何でもいい……');
      await era.printAndWait('何でも、いい……');
      await tachyon.say_as_unknown_and_wait([callname, '？ どうしてここに']);
      await tachyon.say_as_unknown_and_wait('……おや、みっともない姿ですわね');
      await tachyon.say_as_unknown_and_wait(
        'どうしましたの。酒代がなくなった？ それとも賭け金がなくて賭場を追い出された……あるいは、誰か気になる娘でも？',
      );
      await tachyon.say_as_unknown_and_wait('もっと……お金が要りますの？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はぼんやりと相手を見た',
      ]);
      await era.printAndWait([
        '悪魔の囁きのように、',
        you.get_colored_name(),
        ' の耳元で綿のように細く語る',
      ]);
      await era.printAndWait('金');
      await era.printAndWait('まだ金が要る');
      await era.printAndWait('もっと金が要る');
      await era.printAndWait('もっと借りなければならない');
      era.println();
      await era.printAndWait('………………………なぜ？');
      await era.printAndWait('なぜ金が欲しい？');
      await era.printAndWait('なぜ借りる？');
      await era.printAndWait('酒を買うため？');
      await era.printAndWait('賭けのため？');
      await era.printAndWait('女遊びのため？');
      await era.printAndWait('なぜ？');
      await era.printAndWait('なぜ？');
      era.println();
      await era.printAndWait('何でもいい');
      await era.printAndWait('何をしてもいい');
      await era.printAndWait('考えろ');
      await era.printAndWait('どうすれば、考えることをやめられる');
      await era.printAndWait('どうすれば、頭を徹底的に麻痺させられる');
      era.println();
      await era.printAndWait('ああ……');
      await era.printAndWait('ああ！');
      await era.printAndWait('あった');
      await era.printAndWait(
        'あったあったあったあったあったあったあったあったあったあった',
      );
      era.println();
      await you.say_and_wait('……いい、金を貸してくれるか？');
      await tachyon.say_as_unknown_and_wait([
        'もちろんですわ……ただし、',
        callname,
        '、借りたお金で何をするつもりですの？',
      ]);
      era.println();
      await era.printAndWait('相手が残した唯一の隙間');
      await era.printAndWait('自分に残された最後の慈悲');
      await era.printAndWait('仕掛け？ 陰謀？ 計算？');
      await era.printAndWait('そんなものはもうどうでもいい');
      era.println();
      await you.say_and_wait(
        'タキオン……この金で……一晩、俺に付き合ってくれないか？',
      );
      era.println();
      await era.printAndWait(
        '口にした瞬間、限界まで張ったばねがようやく緩んだ',
      );
      await era.printAndWait('ああ……');
      await era.printAndWait('相手を想うときだけ、頭は息をつけた');
      await era.printAndWait('相手を念じるときだけ、内側は麻痺できた');
      await era.printAndWait('なぜ昔の自分は気づかなかった');
      await era.printAndWait('なぜずっと、意味のないことに金を借りていた');
      await era.printAndWait('心の唯一の安らぎは、ここにあったのに');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に食事がしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にドライブがしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に夜景が見たい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にラブホテルへ入りたい',
      ]);
      await era.printAndWait([
        '徹底的に、内側から外側まで、完全に ',
        tachyon.get_colored_name(),
        ' のものになりたい',
      ]);
      await era.printAndWait('そう想うほど、胸は軽くなり、楽になる');
      era.println();
      await tachyon.say_as_unknown_and_wait('ふふ……いい子、いい子ですわ');
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は本当の幸福を得た',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] talk
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '……',
            callname,
            '、今日の実験報告は書き終えました？',
          ]);
          await tachyon.say_and_wait(
            'ここで雑談する暇があるなら、先にやるべきことを済ませなさい',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'さあ、今回の薬ですわ………『味が変』？ 忘れていますのね。あなたは実験動物ですわ。実験動物が薬の味を嫌う道理などありません。',
            ),
          async () => {
            await tachyon.say_and_wait([
              '限界……',
              tachyon.uma_sex_title,
              '……脚……いいえ、やはりだめですわ……',
              callname,
              '？ そこにいつから立っていますの？',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は何かを考え込んでいるようだった。',
            ]);
          },
          () =>
            tachyon.say_and_wait([
              coffee.get_colored_name(),
              '？ ええ、',
              tachyon.sex,
              'は興味深い観察対象ですわ。それに万一……いいえ、何でもありません。今の話は忘れてください。',
            ]),
          async () => {
            await tachyon.say_and_wait(
              '服……？ ああ、三日ほど風呂に入っていませんわね……',
            );
            await tachyon.say_and_wait(
              'あなたに何の関係がありますの。無駄にするなら実験に回しなさい……',
            );
            await tachyon.say_and_wait(
              'もう結構ですわ。あなたはモルモットです。私が何をしようと、あなたには関係ありません。',
            );
          },
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は、',
              tachyon.get_colored_name(),
              ' がミキサーで今日の昼食を掻き回しているのを見た。',
            ]);
            await tachyon.say_and_wait([
              '食事？ 必要ありませんわ。人であろうと',
              tachyon.uma_sex_title,
              'であろうと、最低限の栄養さえ補えば足ります。味を求める余分など、無駄な手間ですわ。',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              'たかがモルモットですわ。実験の手伝いをしながら私の機嫌も取っておきなさい。価値がなくなったとき、慈悲をかけてあげるかもしれませんもの。',
            ),
          () =>
            tachyon.say_and_wait(
              '用があるなら早く言いなさい。実験の時間を無駄にしないで。',
            ),
          async () => {
            await tachyon.say_and_wait('ふう……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は溜息をついた。機嫌は悪そうだ。今は構わないほうがいい……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait('ふんふんふん～～ふんふん～～');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はご機嫌らしい。だが',
              tachyon.sex,
              'の手にある、危険な墨緑色に光る薬剤を見て、',
              you.get_colored_name(),
              ' はその上機嫌を壊さないことにした。',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            '、暇なら料理の腕を磨きなさいな。人が口にできるもの、早く作れるようになってください',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            '、本当に用がないなら実験器具を全部洗いなさい。実験着を洗うでも、ゴミを捨てるでもいいわ。できることはいくらでもありますでしょう？ そこでぼうっとしていないで',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '、今日の薬ですわ……逃げますの？ ふふ、',
              tachyon.uma_sex_title,
              'の手から逃げられるとでも思ったのですか？',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
              'の限界……スパート……進化……生存……人類補完計画……腐敗した社会……救済……再生……閉じた現状からの脱出……',
            ]);
            await tachyon.say_and_wait(
              'ああ、わかりましたわ。すべての真実はエジプトにありますわね。',
            );
            await era.printAndWait([
              '……',
              tachyon.get_colored_name(),
              ' が突然おかしなことを言い出した。今は構わないほうがいい。',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              'ああ……丁度いいわ。白衣を洗ってくださいな。先日の実験で汚してしまって…………',
            );
            await tachyon.say_and_wait(
              'なぜすぐに渡さないの？ 忘れていただけですわ。第一、気づかなかったのはモルモットとしての怠慢でしょう？',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '食事？ ……見解は変わっていませんわ。食事は栄養を補うためだけに存在し、それ以上でも以下でもない……',
            );
            await tachyon.say_and_wait(
              'ただ、そうですね。最近はこの時間を、少し楽しみにしていますわ……',
            );
            await tachyon.say_and_wait(
              'いいえ、深読みしないで。天と地の差を思い知らせるためだけですわ。あのときの屈辱はそう簡単に帳消しになりません。毎日試薬を引き受けてくれるなら、考えなくもありませんけれど……',
            );
            await you.say_and_wait('それ、今と同じじゃないか？');
            await tachyon.say_and_wait(
              'そう言われると……待って、毎日……いいえ、何でもありません。忘れて。今、すぐに、直ちに。',
            );
          },
          () =>
            tachyon.say_and_wait(
              '最近のご飯……まあ及第点ですわ。もう少し甘く……いいえ、何でもありません',
            ),
          async () => {
            await tachyon.say_and_wait([
              'ああ、',
              call_9,
              '……『この前のクッキーと飲み物、ありがとうございました』？',
            ]);
            await tachyon.say_and_wait(
              '大したことではありませんわ。気に入ったなら、また取りにいらっしゃい…………',
            );
            await tachyon.say_and_wait(
              'その顔は何ですの。可愛い後輩に、そんなものは渡しませんわよ',
            );
          },
          async () => {
            await tachyon.say_and_wait('ふんふん～～ふんふんふん～～');
            await tachyon.say_and_wait(
              '十匹のモルモットお出かけ〜湾に落ちて九匹〜',
            );
            await tachyon.say_and_wait('火山に落ちて八匹〜宝穴で迷って七匹〜');
            await tachyon.say_and_wait(
              '怒涛に巻かれて六匹〜コンドルに襲われ五匹〜',
            );
            await tachyon.say_and_wait('食べ過ぎて四匹〜頂を目指して三匹〜');
            await tachyon.say_and_wait(
              'ターボ爆発で二匹〜コーヒー飲み過ぎて一匹〜',
            );
            await tachyon.say_and_wait(
              'ひとりぼっちのモルモットチューチュー〜薬を飲んでドカンと爆発〜〜',
            );
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' が妙な歌を口ずさんでいるのを聞いた……歌詞の意味はわからないが、今の',
              tachyon.sex,
              'には近づかないほうがいい気がした。',
            ]);
          },
        );
      }
    } else if (relation > 225 && love < 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'おや、',
            callname,
            '、どうして急に話しかけに来たのです？',
          ]);
          await tachyon.say_and_wait('ふふ、ただの気紛れですの？');
          await tachyon.say_and_wait(
            '他に目的があるはずですもの。いいえ、何でもありません。物事に好奇心を持つのは良いことですわ',
          );
          await tachyon.say_and_wait([
            '口上の探索も含めて、ですわ。そうでしょう、画面の向こうの ',
            callname,
            '？',
          ]);
          await tachyon.say_and_wait(
            '何の話かって？ ふふ、さあ、誰が知っているかしら',
          );
        },
        async () => {
          await tachyon.say_and_wait(['ああ、', callname, '、危ない！']);
          await tachyon.say_and_wait(
            'ふう、突然話しかけてくるからですわ。薬が零れるところでした',
          );
          await tachyon.say_and_wait(
            '何の薬かですって？ ふふ、以前集めたあなたのDNA、覚えていますわね？',
          );
          await tachyon.say_and_wait(
            '匂いを嗅いだ者をあなたに狂わせる薬ですわよ……ん？ 零れなくて後悔し始めました？ ……助平ですわね',
          );
          await tachyon.say_and_wait(
            '冗談ですわ。本当は、あの人のDNAを基にした指向性の毒……',
          );
          await tachyon.say_and_wait(
            '蒸気を嗅いだだけでも鼻腔に病変を起こし、癌細胞を作らせますわ……',
          );
          await tachyon.say_and_wait(
            'まあまあ、そんなに怯えなくても。はは、零れていないのですからいいでしょう',
          );
          await tachyon.say_and_wait(
            'ん？ どちらが本当か……それはご想像にお任せしますわ～～',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……今日の服……']);
          await tachyon.say_and_wait(
            'それから、その、考えたのですけれど。洗濯を頼むのはまだしも、下着まで洗うのはさすがに行き過ぎですわね',
          );
          await tachyon.say_and_wait(
            '……いいえ、匂いの話ではありませんわ。第一、臭くなどありませんわよ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'ここまで来ると、あなたの弁当にはすっかり慣れましたわね',
          );
          await tachyon.say_and_wait(
            'ふふ、今では食べられない日のほうが落ち着かないくらいですわ',
          );
          await tachyon.say_and_wait('こんな暮らし……このまま維持して……');
          await tachyon.say_and_wait(
            'ふふ、研究者にとって、維持など褒め言葉ではありませんわ',
          );
          await tachyon.say_and_wait(
            '維持ばかり考えていては、突破は訪れません……',
          );
          await tachyon.say_and_wait('その通りですわ……でも……');
          await tachyon.say_and_wait(
            'どうしてかしら。今の暮らしが、このまま続いてもいいと思えてしまって……',
          );
          await tachyon.say_and_wait('どうして……');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['おや、来ましたわね ', callname]);
        await tachyon.say_and_wait('今日の実験は……ん？ どうしました');
        await tachyon.say_and_wait(
          '近すぎます？ そうかしら。私は丁度いいと思いますわ',
        );
        await tachyon.say_and_wait('それとも、恥ずかしがっていますの？');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          '、もっと話すのは構いませんけれど、他にやるべきことがあるでしょう？',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '！今日の薬は、右の緑と左の赤、どちらにします？',
          ]);
          await tachyon.say_and_wait(
            'どちらもいや？ わかっていましたわ。やはり第三の選択、虹色ですわね！',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……明日の弁当']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に、明日は休みだと伝えようとした',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ええ……',
            callname,
            '、休みでも人は食事をしなくていいわけではありませんわよ',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は心配そうな目で ',
            you.get_colored_name(),
            ' を見た',
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は悟った。この状況で何を言っても無駄だ。',
            tachyon.sex,
            'の弁当を作ると約束するしかなかった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '～～今日の服もお願いしますわ',
          ]);
          await tachyon.say_and_wait(
            'はあ？ 自分で洗う？ 私の時間は風が運んでくるものだとでも？',
          );
          await tachyon.say_and_wait(
            'それに、これもあなたへのご褒美ですわよ～～',
          );
          await tachyon.say_and_wait('私が着ていた肌着ですもの～～');
          await tachyon.say_and_wait(
            '臭い！？ ちょっと！ 失礼にもほどがありますわ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'はあ？ 授業に出なくても成績に響くかですって？',
          );
          await tachyon.say_and_wait([
            callname,
            '、受験教育は凡人を育てるためのものですわ。天賦の才である私に、必要などあるはずがありません',
          ]);
          await tachyon.say_and_wait([
            '『では試験も出なくていいのですか？』？ 何を言っていますの、',
            callname,
            '。試験は明日……今日！？',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はいつもと違い、無言のまま体を預けてきた',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '、どうかしました？']);
          era.println();
          await you.say_and_wait('何でもない');
          await era.printAndWait([
            you.get_colored_name(),
            ' が答えたあと、',
            tachyon.sex,
            'は続けて ',
            you.get_colored_name(),
            ' に寄りかかった',
          ]);
          await era.printAndWait(
            '二人のあいだに言葉はなく、そのまま無言の時間が流れた',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '？ 丁度いいわ。これを全部、防炎の特殊紙に書き写して！',
          ]);
          await tachyon.say_and_wait([
            call_25,
            ' のやつ！ ',
            tachyon.sex,
            'で実験をしただけなのに、実験資料を全部焼くと脅してきましたわ！',
          ]);
          await tachyon.say_and_wait([
            'なんとか午後三時まで待ってもらいましたけれど、それまでに写し終えませんと！',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に急き立てられ、机に向かって書き写しに加わった',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' の胸に疑問が浮かぶ。本当に焼くなら、事前に知らせたりするだろうか……？',
          ]);
          era.println();
          await era.printAndWait(
            '案の定、午後三時を過ぎても研究資料は燃えなかった。実験室はいつものように穏やかで、',
          );
          await era.printAndWait([
            '被害を受けたのは、半日かけて部屋一杯の資料を書き写した ',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の手だけだった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            call_9,
            ' の子……可愛いではありませんか？',
          ]);
          await tachyon.say_and_wait([
            'なぜか',
            tachyon.sex,
            'を見ると、父性に近いものが湧いてくるのですわ',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('母性じゃないのか？');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              'もう',
              you.uma_sex_title,
              'になったのにわからないのですか？',
              callname,
              ' は鈍いですわね',
            ]);
            era.println();
            await you.say_and_wait('……何を言っているのかわからない');
          } else {
            await tachyon.say_and_wait([
              '違いますわ……この感覚は説明しにくいのです。あなたが',
              tachyon.uma_sex_title,
              'になれば、わかるでしょう',
            ]);
            era.println();
            await you.say_and_wait([
              'いつか自分が',
              tachyon.uma_sex_title,
              'になるみたいに言わないでくれ！？',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('sky君はいい子ですわね……');
          era.println();
          await you.say_and_wait([
            'ん？ タキオンは ',
            y_call_s,
            ' と知り合いなのか',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'いいえ……私が言っているのと、あなたの言っているのは、たぶん同じsky君ではありませんわ',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は首を傾げて ',
            tachyon.get_colored_name(),
            ' を見た。学園に他にもskyがいるのか',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……いいえ、やめましょう、',
            callname,
            '。今のは聞かなかったことにして',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] talk_hizamakura
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', 피곤하군. 좀 눕겠네.']);
    era.printButton('승낙한다', 1);
    era.printButton('거절한다', 2);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 마음속으로 답을 정하기도 전에 ',
      tachyon.get_colored_name(),
      '은(는) 이미 ',
      you.get_colored_name(),
      '의 무릎 위에 누워 있었다.',
    ]);
    era.printButton('「이봐, 타키온.」', 1);
    await era.input();
    await tachyon.say_and_wait('ZZZ');
    era.println();
    await era.printAndWait('너무 빠르잖아!?');
    await era.printAndWait([
      tachyon.sex,
      '을(를) 깨우지 않으려고 ',
      you.get_colored_name(),
      '은(는) 얌전히 그 자세를 유지한 채 꼼짝할 수 없었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '이(가) 일어나면 꼭 주의를 줘야겠다. 민폐도 문제지만 이성의 무릎에 불쑥 눕다니 경계심이 너무 없잖아.',
    ]);
    era.println();
    await tachyon.say_and_wait('으음……');
    era.println();
    await era.printAndWait([
      '얕게 잠든 듯 ',
      tachyon.sex,
      '은(는) 몸을 뒤척였다.',
      you.get_colored_name(),
      '의 마음속에서 준비하던 잔소리는 ',
      tachyon.sex,
      '의 얼굴을 본 순간 흔적도 없이 사라졌다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈가에 드리운 다크서클과 쓰러질 듯한 피로는 ',
      tachyon.sex,
      '이(가) 얼마나 불안정하게 잠을 자는지 보여 주고 있었다.',
    ]);
    await era.printAndWait([
      '생각해 보니 요즘 ',
      tachyon.sex,
      '은(는) 연구가 벽에 부딪혀 제대로 잠도 못 자는 모양이다.',
    ]);
    await era.printAndWait([
      '그나마 다행인 것은 ',
      you.get_colored_name(),
      '의 무릎 위에 있을 때 ',
      tachyon.sex,
      '의 미간이 편안하게 풀린다는 사실이었다.',
    ]);
    await era.printAndWait([
      '……이렇게 해서 ',
      tachyon.sex,
      '이(가) 조금이라도 잠을 잘 수 있다면, 가끔은 이 정도쯤 괜찮겠지.',
    ]);
  },

  // [번역 완료] talk_tenn_spr
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '와(과) ',
      tenn_spr,
      '에 관해 이야기하고 싶었지만, ',
      tachyon.sex,
      '는 곧 모습을 감췄다.',
    ]);
  },

  // [번역 완료] ws_cook02
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      '점심시간, 어째서인지 ',
      tachyon.get_colored_name(),
      '은(는) 일부러 ',
      tachyon.sex,
      '의 믹서를 실험대 위에 올려놓고 출력을 최대로 높여 요란한 소음을 내며 ',
      tachyon.sex,
      '의 『점심』을 갈아대기 시작했다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주는 너무 바빠서 ',
      tachyon.sex,
      '의 도시락을 잊어버렸다…… 이번 주에는 반드시 챙기자.',
    ]);
  },

  // [번역 완료] ws_cook03
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      ', 공든 탑도 마지막 한 삽을 빠뜨리면 무너진다는 말을 알고 있겠지?',
    ]);
    await tachyon.say_and_wait(
      '달리 말해 백 리를 가는 사람은 구십 리를 절반으로 여겨야 하는 법. 끝까지 계속하는 자만이 성공하네.',
    );
    await tachyon.say_and_wait(
      '레이스에서도 마찬가지일세. 능력치가 떨어지고 스킬이 불발될 수는 있지. 하지만 육성을 통해 얻은 지식은 자네를 배신하지 않네.',
    );
    await tachyon.say_and_wait(
      '그래, 서포트 카드가 남보다 부족해도 괜찮네. 6R로도 SS급을 육성할 수 있으니까. 모든 건 노력과 끈기의 문제지……',
    );
    era.println();
    await era.printAndWait([
      '오늘 트레이너실에 들어오자마자 ',
      tachyon.get_colored_name(),
      '은(는) 도무지 알 수 없는 장광설을 늘어놓기 시작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그러니까 내 말은………… 요리도 노력이 중요하다는 걸세.',
    );
    era.println();
    await era.printAndWait([
      '그 말을 듣고 ',
      you.get_colored_name(),
      '은(는) 비로소 깨달았다. 지난 2주는 너무 바빠서 ',
      you.get_colored_name(),
      '은(는) 또 잊어버린 것이다. 안 되겠어. 이번에는 반드시 기억하자……',
    ]);
  },

  // [번역 완료] ws_cook04
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '오늘 실험실에 도착한 순간 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 기분이 무척 나쁘다는 것을 알아챘다. 게다가 ',
      you.get_colored_name(),
      '은(는) 이유도 알고 있었다.',
    ]);
    era.println();
    await era.printAndWait(['원인은 ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 3주 동안 ',
      tachyon.get_colored_name(),
      '에게 요리를 해 주지 않았다는 사실이었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 황급히 ',
      tachyon.sex,
      '에게 지난 몇 주 동안은 너무 바빠 시간을 낼 수 없었다고 변명했다……',
      you.get_colored_name(),
      '스스로도 믿기 어려운 거짓말이었다.',
    ]);
    await era.printAndWait([
      '그냥 잊어버린 것인지, 다른 ',
      tachyon.uma_sex_title,
      '의 육성에 시간을 쏟은 것인지,',
    ]);
    await era.printAndWait(
      '아니면 아직 다른 대사가 있는지 확인하고 싶었을 뿐인지. 『당신』에게는 시간이 얼마든지 있다.',
    );
    await era.printAndWait([
      '하지만 지금의 ',
      you.get_colored_name(),
      '은(는) 이런 서투른 변명으로 용서를 구할 수밖에 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………용서고 뭐고 할 것도 없네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 흘끗 보며 말했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '이것도 자네의 가능성 가운데 하나이며 훌륭한 연구 자료일세. 자네의 노력을 부정하지 않네.',
    );
    await tachyon.say_and_wait(
      '마찬가지로 게으름을 비난하지도 않지. 어느 쪽이든 자네 자신의 선택이니까. 나와는 아무 상관도 없네.',
    );
    era.println();
    await era.printAndWait('아, 굳이 한마디 하자면……');
    await era.printAndWait([
      tachyon.sex,
      '은(는) 마침내 돌아섰다. 오늘 처음으로 ',
      tachyon.sex,
      '이(가) ',
      you.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈에는 실망도, 혐오도, 분노도 없었다.',
    ]);
    await era.printAndWait(
      '형언할 수 없는 감정이었다. 굳이 이름을 붙인다면 그건————지루함.',
    );
    era.println();
    await tachyon.say_and_wait('자네의 가능성이라는 게 고작 이 정도였나.');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은(는) 목표에 미치지 못한 실험동물을 바라보듯 ',
      you.get_colored_name(),
      '을(를) 보다가 입을 열었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '자신의 가치를 높이기 위해 계속 노력하게, ',
      callname,
      '……그러지 않으면 지루해진 날에 자네를 버릴지도 모르니까.',
    ]);
  },

  // [번역 완료] ws_cook12
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('으음……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 오늘 조금 안절부절못하는 모습이었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 긴장한 채 ',
      tachyon.sex,
      '에게 무슨 일이라도 있었는지 물었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………흥, 아무것도 아닐세.');
    era.println();
    await era.printAndWait([tachyon.sex, '은(는) 토라진 듯 아무렇지도 않다고 말했다.']);
    await tachyon.say_and_wait('꾸르르～～～～');
    await era.printAndWait([
      '그때 마침 기가 막힌 타이밍에 ',
      tachyon.sex,
      '의 배에서 커다란 소리가 났다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주에 ',
      you.get_colored_name(),
      '은(는) 완전히 ',
      tachyon.sex,
      '의 도시락을 잊어버린 것이다.',
    ]);
    await era.printAndWait('설마……');
    era.println();
    await tachyon.say_and_wait(
      '…………어쨌든 식사란 최소한의 활동 에너지만 유지할 수 있으면 충분하네.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은(는) 여전히 강한 척하고 있었다.',
      you.get_colored_name(),
      '은(는) 황급히 ',
      tachyon.sex,
      '에게 사과하고 오늘만큼은 잊지 않겠다고 약속했다.',
    ]);
  },

  // [번역 완료] ws_cook13
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait(['흠, ', callname, ', 오늘 먹을 약일세.']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 갑자기 트레이너실로 들이닥쳐 ',
      you.get_colored_name(),
      '에게 색깔이 기묘한—— 아니, 그런 점에서는 늘 그렇듯한—— 약을 먹였다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 약을 마신 뒤 얼마 지나지 않아 잠에 빠졌다.',
    ]);
    await era.printAndWait([
      '꿈속에서 ',
      you.get_colored_name(),
      '은(는) 사막을 걷고 있었다. 며칠째 먹지도 마시지도 못한 채……',
    ]);
    await era.printAndWait([
      '갑자기 장면이 바뀌었고 꿈속의 ',
      you.get_colored_name(),
      '은(는) 누군가에게 진흙 같은 영양식을 계속 억지로 먹었다. 목으로 넘기기도 어려운데……',
    ]);
    await era.printAndWait([
      '방금 전 사막을 헤매던 꿈을 떠올리고 ',
      you.get_colored_name(),
      '은(는) 어쩔 수 없이 그것을 삼켰다…………',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 꿈에서 화들짝 깨어났다. 눈앞에는 ',
      tachyon.get_colored_name(),
      '의 의기양양한 얼굴이 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['어떤가, 악몽을 꿨나? ', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 쓴웃음을 지었다. 이 약이 무슨 의미인지는 대강 알겠다. 이번 주에는 반드시 ',
      tachyon.get_colored_name(),
      '의 도시락을 잊지 않겠다고 서둘러 다짐했다.',
    ]);
  },

  // [번역 완료] ws_cook14
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      '오늘 아침, ',
      you.get_colored_name(),
      '이(가) 학원에 도착한 순간부터 무언가 이상했다.',
    ]);
    await era.printAndWait('학원 전체가 초조한 분위기에 휩싸여 있었다.');
    await era.printAndWait(
      '그 분위기는 점심시간이 되자 한층 고조되어 식당에서 절정에 달했다.',
    );
    era.println();
    await you.say_as_passer_by_and_wait('지나가던 트레이너 A', [
      '모든 ',
      tachyon.uma_sex_title,
      '들이 폭주하고 있어!',
      tachyon.couple_title,
      '들이 갑자기 담당 트레이너에게 도시락을 달라고 조르기 시작했다고!',
    ]);
    await you.say_as_passer_by_and_wait('지나가던 트레이너 A', [
      '직접 만든 게 아니면 안 된다더군! 젠장, ',
      tachyon.couple_title,
      '들은 대체 트레이너가 직접 만든 도시락인지 어떻게 구별하는 거야!',
    ]);
    era.println();
    await era.printAndWait([
      '지나가던 트레이너는 어째서인지 트레이너실에 들이닥쳐 상황을 설명하듯 떠들어 댔고, 이내 문에서 뛰어 들어온 담당 ',
      tachyon.uma_sex_title,
      '에게 끌려 나갔다.',
    ]);
    era.printButton('「대, 대체…… 무슨 일이……」', 1);
    await era.input();
    await tachyon.say_and_wait('오호, 사정을 궁금해하는 사람이 있군?');
    await era.printAndWait([
      '갑자기 ',
      you.get_colored_name(),
      '의 뒤에서 익숙한 목소리가 들렸다. 하지만 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '이(가) 언제 트레이너실에 들어왔는지조차 알지 못했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그렇게나 진심으로 물어보니 자비롭게 알려 주도록 하지.',
    );
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      '와 도시락의 악행을 관철하고자 하는, 사랑스럽고 매혹적인 광기의 과학자……',
    ]);
    await tachyon.say_and_wait([
      '너무 길어지니 이하 생략. 요컨대 아그네스 타키온일세. 자, ',
      callname,
      ', 얌전히 도시락을 내놓게.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '이(가) 앉아 있는 의자의 등받이에 기대어, 아직 앉아 있는 ',
      you.get_colored_name(),
      '을(를) 내려다보며 무언가를 정복하려는 듯한 미소를 지었다.',
    ]);
    era.printButton('「또 무슨 짓을 한 거야?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '이런, 너무하군. 곧바로 날 의심하다니. 나도 피해자일지 모르는데 말일세.',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '은(는) 가련한 목소리로 말했다.']);
    era.printButton('「방금 스스로 인정했잖아.」', 1);
    await era.input();
    await tachyon.say_and_wait('음…… 확실히 그런 말을 한 것 같기도 하군.');
    await era.printAndWait('그런 사소한 일은 신경 쓰지 말게.');
    await era.printAndWait([tachyon.sex, '은(는) 소매를 가볍게 흔들며 말했다.']);
    era.println();
    await tachyon.say_and_wait([
      '중요한 것은 ',
      callname,
      ', 도시락을 내놓는 거라네.',
    ]);
    era.printButton('「이렇게 강요하면 순순히 따를 줄 알아?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………후후, 물론이지. 자네는 결국 얌전히 도시락을 바치게 될 테니까.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 의미심장한 미소를 지었고, ',
      you.get_colored_name(),
      '은(는) 자신도 모르게 뜨끔했다.',
    ]);
    await era.printAndWait([
      '오늘, ',
      you.get_colored_name(),
      '은(는) 분명히 ',
      tachyon.get_colored_name(),
      '의 도시락을 만들어 놓았다. 하지만 일이 바빠 정말로 깜빡하고 말았다.',
    ]);
    await era.printAndWait(
      '그래도 여기서 물러설 수는 없다. 트레이너로서의 존엄을 위해! 자유를 위해! ……아무튼 뭔가를 위해서다.',
    );
    era.println();
    await taste.say_and_wait([
      '알려 드립니다! 원인 불명의 현상으로 학원 내 모든 ',
      tachyon.uma_sex_title,
      '들이 트레이너가 직접 만든 도시락에 설명하기 어려운 집착을 보이고 있습니다.',
    ]);
    await taste.say_and_wait([
      '각 트레이너는 즉시 담당 우마무스메의 도시락을 만들어 주시기 바랍니다. 요리를 못하는 트레이너는 사무국장님, 가정과 선생님 또는 ',
      tama.get_colored_name(),
      '、',
      amazon.get_colored_name(),
      ' 또는 ',
      akebono.get_colored_name(),
      '에게 도움을 요청해 주세요.',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '의기양양한 ',
      tachyon.get_colored_name(),
      '을(를) 보고 ',
      you.get_colored_name(),
      '은(는) 쓴웃음을 지을 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '역시 ',
      tachyon.sex,
      '에게는 이길 수 없다. ',
      you.get_colored_name(),
      '은(는) 얌전히 도시락을 내밀었다.',
    ]);
  },

  // [번역 완료] ws_cook22
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      '점심시간에 ',
      you.get_colored_name(),
      '이(가) 데이터를 입력하고 있는데 트레이너실 문이 벌컥 열렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '! 내 밥은 어디 있나! 빨리, 빨리!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 들어오자마자 책상 위로 뛰어올라 데굴데굴 구르기 시작했다.',
    ]);
    era.println();
    await era.printAndWait('위험해, 위험해!');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 황급히 책상 위의 컴퓨터를 치워 ',
      tachyon.get_colored_name(),
      '에게 떨어뜨림을 당하지 않도록 했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '! 벌써 일주일이나 도시락을 만들어 주지 않았잖나! 굶어 죽겠네. 빨리, 내 도시락은 어디 있나!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 소매를 휘두르며 화가 난 채 ',
      you.get_colored_name(),
      '의 앞에서 발을 쿵쿵 굴렀다. 터질 듯이 부푼 볼은 복어 같았지만……',
    ]);
    era.printButton('「만들어 줬잖아?」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait('그렇게 대충 만든 걸 도시락이라고 할 수 있나!?');
    } else {
      await tachyon.say_and_wait(
        '맛의 차이는 모르겠지만…… 내 직감은 자네가 대충 만들었다고 말하는군.',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('방금 『귀찮은 녀석』이라고 생각했지?');
    await you.say_and_wait('……');
    await you.say_and_wait('어떻게 알았지?', true);
    era.println();
    await tachyon.say_and_wait(
      '어쨌든 내일은 반드시 도시락을 보여 주게! 그러지 않으면 후회할 걸세.',
    );
  },

  // [번역 완료] ws_cook23
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 2주 동안 ',
      you.get_colored_name(),
      '에게 실험을 하지 않았다.',
    ]);
    await era.printAndWait([
      '처음 일주일 동안은 솔직히 ',
      you.get_colored_name(),
      '에게 미련도 없었고, 오히려 기뻤다.',
    ]);
    await era.printAndWait([
      '毎日 ',
      tachyon.get_colored_name(),
      '의 얼굴은 여전히 볼 수 있었고 일상도 평소와 같았다. 다만 ',
      tachyon.sex,
      '이(가) ',
      you.get_colored_name(),
      '에게 실험을 하지 않게 되었을 뿐이다.',
    ]);
    await era.printAndWait([
      '하지만 둘째 주가 되자 ',
      you.get_colored_name(),
      '은(는) 이상하다는 생각을 하기 시작했다. 스톡홀름 증후군인가……',
    ]);
    await era.printAndWait([
      '그건 아니다. 그저 ',
      tachyon.sex,
      '의 상태가 걱정됐고 불길한 예감도 들었다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 실험실 앞까지 가서 문을 두드렸다. 안에서는 대답이 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 뭔가 잘못됐다고 느끼고 그대로 문을 밀고 들어갔다.',
    ]);
    era.println();
    await era.printAndWait([
      '생김새는 ',
      tachyon.get_colored_name(),
      '인데 어째서인지 2등신의 귀여운 생명체가 되어 있었다.',
    ]);
    await era.printAndWait('뒤에 달린 꼬리는 둥글고 굵었다. 마치…… 너구리 꼬리처럼?');
    await era.printAndWait([
      '뭐라고?? 대체 어떻게 된 거지?? 이게 ',
      tachyon.get_colored_name(),
      '이라고???',
    ]);
    era.println();
    await era.printAndWait('…………아하.');
    await era.printAndWait([you.get_colored_name(), '은(는) 모든 걸 이해했다.']);
    await era.printAndWait(
      '틀림없다. 출처 불명의 약, 실험체를 인간으로 여기지 않는 태도, 그리고 이제야 드러난 꼬리.',
    );
    await era.printAndWait([
      '그래, ',
      tachyon.get_colored_name(),
      '은(는) 처음부터 너구리가 둔갑한 존재였던 것이다!',
    ]);
    era.println();
    await era.printAndWait('…………아니, 이 혼란스러운 망상은 일단 접어 두자.');
    await era.printAndWait(
      '어디선가 기묘한 배경음악이 울려 퍼지기 시작했다. 아멜리아의 유언이라는 곡인 듯하다. 아름다운 곡이지만 이 쓸쓸한 풍경과의 대비가 지나치게 선명하다.',
    );
    await era.printAndWait([
      '당황한 ',
      you.get_colored_name(),
      '은(는) 전에 ',
      tachyon.get_colored_name(),
      '이(가) 도시락에 관해 했던 말을 떠올리고 자기 몫으로 남겨 둔 도시락을 꺼냈다.',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '? 뭘 하는 건가?']);
    await era.printAndWait([
      '제정신으로 돌아온 ',
      tachyon.get_colored_name(),
      '은(는) 순식간에 원래 모습으로 돌아왔다. 빈 도시락 통만이 방금 일이 실제로 벌어졌다는 증거였다.',
    ]);
    await era.printAndWait([
      '꿈이 아니었구나…… 어쨌든 앞으로는 ',
      tachyon.get_colored_name(),
      '의 도시락을 잊지 말아야겠다.',
    ]);
  },

  // [번역 완료] ws_hate
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '에게 입을 맞췄다.',
    ]);
    await era.printAndWait([
      '뜨거운 액체가 두 사람의 입을 오갔고, 삼켜진 액체는 ',
      you.get_colored_name(),
      '의 목구멍을 타고 넘어갔다.',
    ]);
    await era.printAndWait('액체가 지나간 곳에 순식간에 타는 듯한 통증이 퍼졌다.');
    era.println();
    await tachyon.say_and_wait(['아픈가, ', callname]);
    await tachyon.say_and_wait(
      '나도 아프네…… 내가 만든 약이지만 이렇게 강하게 작용할 줄은 몰랐군.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 얼굴은 웃고 있었지만 눈만은 웃고 있지 않았다.',
    ]);
    era.println();
    await tachyon.say_and_wait('비난하지는 않겠네…… 속아 넘어간 쪽이 잘못한 거니까.');
    await tachyon.say_and_wait(
      '이건 자네를 향한 벌인 동시에 사람을 잘못 판단한 나를 향한 벌이기도 하네.',
    );
    await tachyon.say_and_wait(
      '나가라고도 하지 않겠네…… 인정하고 싶지는 않지만 이런 일을 겪고도 자네가 떠나는 건 원치 않으니까.',
    );
    await tachyon.say_and_wait([
      '그러니 나의 사랑하는 ',
      callname,
      '……이제 남은 여생 동안 서로를 원망하며 함께 지내는 건 어떤가?',
    ]);
  },

  // [번역 완료] ws_punishment1
  ws_punishment1: (() => {
    const title = '실험 기록: 우마무스메화';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait(
          '오호, 모르모트…… 아니, 모르모트 씨. 찾아왔군……',
        );
        await tachyon.say_and_wait(
          '응? 어떻게 알았느냐고? 후후, 그러고 보니 그때는 의식이 없었지.',
        );
        await tachyon.say_and_wait('수술은 바로 내가 집도했다네.');
        await tachyon.say_and_wait(
          '트레이너로서 무능하다는 것은 가장 큰 죄지. 그런 의미에서 자네는 도저히 용서할 수 없는 죄인이군.',
        );
        await tachyon.say_and_wait(
          '하지만 기뻐하게. 내 연구 덕분에 자네는 두 번째 기회를 얻었으니.',
        );
        await tachyon.say_and_wait(
          '애초에 중앙 트레센에 입학할 정도라면 남보다 뛰어난 점 하나쯤은 있겠지. 그 재능을 찾아내느냐가 문제일 뿐.',
        );
        await tachyon.say_and_wait(
          '우마무스메가 된 자네에게 의외로 이쪽 분야의 재능이 있을지도 모르겠군.',
        );
        await tachyon.say_and_wait(
          '기껏 얻은 두 번째 기회이니 필사적으로 발버둥 쳐 보게, 모르모트 씨.',
        );
        await tachyon.say_and_wait(
          '그렇지 않으면…… 다음에 수술대 위에서 나를 본 뒤 벌어질 일은 결코 겪고 싶지 않을 테니까…… 아니, 어쩌면 원할지도 모르겠군?',
        );
        await tachyon.say_and_wait(
          '정말 그렇게 된다면 아주 귀여워해 주겠네.',
        );
      } else {
        await tachyon.say_and_wait(
          `모르모트…… 아니, ${you.actual_name} 군.`,
        );
        await tachyon.say_and_wait('미안하네. 그래도 규칙은 규칙이니……');
        await tachyon.say_and_wait(
          '아니…… 내 탓이네………… 자네의 수술을 집도한 것은 나였으니까.',
        );
        await tachyon.say_and_wait('……그래, 후후.');
        await tachyon.say_and_wait(
          '걱정하지 말게…… 난 신경 쓰지 않네. 어떤 모습이 되더라도 자네 눈동자의 빛이 남아 있는 한 똑같이 사랑할 테니까.',
        );
        await tachyon.say_and_wait(
          '…………게다가 우마무스메가 되면 함께 즐길 수 있는 일도 늘어날 테고.',
        );
        await tachyon.say_and_wait('후후, 잔뜩 귀여워해 주겠네.');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_punishment2
  ws_punishment2: (() => {
    const title = '実験記録：性奴隷改造';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「ぐちゅ……ぐちゅ……ちゅぽ……ちゅる……」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          'ちっちっち……モルモットさん、警告したはずですわよ？',
        );
        await tachyon.say_and_wait('もう一度やった末路……ふふ。');
      } else {
        await tachyon.say_and_wait('モルモット君……みっともないですわね。');
        await tachyon.say_and_wait(
          '恥ずかしい。こんな相手が恋人だなんて、認めたくもありませんわ。',
        );
      }
      era.println();
      await era.printAndWait('アグネスタキオンの研究室。');
      await era.printAndWait(
        'この時間は本来、タキオンが薬剤を調合し研究する時間だ。',
      );
      await era.printAndWait(
        `だが新しい身分で戻ってきた ${you.name} を迎えるため、${tachyon.sex}は今日の予定をわざわざ取り消し、祝いの薬まで自ら調合した。`,
      );
      era.println();
      await era.printAndWait('「しゅる……ちゅる……ちゅぐ……ぐちゅ……」');
      era.println();
      await tachyon.say_and_wait(
        'それとも、これが本当にあなたが望んでいたことですの？',
      );
      await tachyon.say_and_wait(
        '好き放題弄ばれ、自分の意志など持たない性奴隷になることを？',
      );
      era.println();
      await era.printAndWait(
        'タキオンは両脚を開き、いつもの回転椅子にだらしなく身を預けていた。',
      );
      await era.printAndWait(
        `${tachyon.sex}の両脚の間では、馬耳を生やした女性が蹲っている。着ているのはタキオンと同型の、袖の長い白衣だが、いくつか違う。`,
      );
      await era.printAndWait(
        '後ろ裾がわざわざ切り開いてあり、風が通るたび、丸い尻が白衣の下からむき出しになる。',
      );
      await era.printAndWait(
        '胸元には薬液で溶かしたような不定形の穴が二つ開き、乳首が空気に晒されている。',
      );
      await era.printAndWait(
        '下着？ ボタンを留めることすら許されない白衣の中央に見える肉色を見れば、そんなものがないのは分かるはずだ。',
      );
      await era.printAndWait(
        '情趣具より過激な服を着たウマ娘が、頭を前後に動かし、タキオンの脚の間の太い陰茎を含んでいる。',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          'ウマ娘の体にあるはずのない器官。その理由は、もちろんタキオンの薬が作ったものだ。',
        );
        era.println();
        await tachyon.say_and_wait(
          'ふふ……私のフロンP系列のおかげで、性奴隷の仕事をちゃんと体験できますわ。双方とも雌では、遊びようがありませんものね？',
        );
        era.println();
        await era.printAndWait(
          `地面に蹲るウマ娘———つまり ${you.name}——は聞こえないふりをして、眼前の巨物に奉仕し続けた。`,
        );
        await era.printAndWait(
          '雌が二人、という言い方は客観的には少し違うかもしれないが、結論はだいたい同じだ。',
        );
        await era.printAndWait(
          `誰が見ても、${you.name} の、限界まで張っているのに上に括ったローターより短い生殖器を、正常な雄が雌を孕ませる器官だとは認めないだろう。強いて言えば……そう、陰核と呼ぶ方がまだ相応しい。`,
        );
      }
      era.println();

      await era.printAndWait([
        `ふいに、一心に`,
        tachyon.uma_sex_title,
        `の主人へ奉仕していた ${you.name} の全身が震えた。`,
      ]);
      await era.printAndWait([
        `${you.name} の下で、限界まで勃起しても`,
        tachyon.uma_sex_title,
        `の主人の片方の睾丸より小さい「陰核」が、今日四発目、水のように薄い液を噴いた。`,
      ]);
      await era.printAndWait('それも、眼前の主人の不興を買った。');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          '自分の気持ちよさばかりで、いちばん基礎の口奉仕すらできない……性奴隷としても、こんなに落ちこぼれだとは思いませんでしたわ。',
        );
        era.println();

        await era.printAndWait([
          `${you.name} は慌てて気を取り直し、担当の`,
          tachyon.uma_sex_title,
          `兼主人へ奉仕を続けた。`,
        ]);
        await era.printAndWait(
          `だがもともと我慢のきかない${tachyon.sex}は、${you.name} の拙い奉仕に愛想を尽かしていた。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を ${you.name} の喉へさらに深く押し込んだ。`,
        );
        await era.printAndWait([
          '巨大な陰嚢が ',
          you.get_colored_name(),
          ' の顎にぶつかり、重く温かい流動感が、',
          you.get_colored_name(),
          ' の口へ噴き出す白濁の量を予告していた。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          'そういえば、モルモット……いいえ、性奴隷君。まだ覚えていますかしら。',
        );
        era.println();

        await era.printAndWait(
          `わざと性奴隷「君」に呼び戻したことで、${you.name} はその倒錯にますます興奮し、下の「陰核」は壊れた蛇口のように、さっきから水のように澄んだ液を流し続けていた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '改造手術は全部私がしましたわ。だからあなたの性感帯については、この世でいちばんよく知っているのは、間違いなく私ですわ。',
        );
        era.println();

        await era.printAndWait(
          `たとえば、${tachyon.sex}はいきなり ${you.name} の喉を何度も突き、何かを探しているようだった。`,
        );
        await era.printAndWait(
          `そんな乱暴な扱いを受け、${you.name} はまた、自分がただの物品、性欲を吐き出す道具だと自覚した。`,
        );
        await era.printAndWait(
          `突きの途中、どこかに擦れたのか、${you.name} の喉が急に収縮し、下半身は前後とも汁を噴き出した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ああ、見つけましたわ。ここですわね、あなたの喉の性感帯。',
        );
        await tachyon.say_and_wait(
          'ここを突けば、雄が千回射精するのにも劣らない快感……ふふ、でももう、雄だった頃のことは知らなくてもいいでしょうね。',
        );
        era.println();

        await era.printAndWait(
          `言葉を聞く余裕などなく、${you.name} の精力は今、潮のように押し寄せる快感をこらえることにしか使えない。`,
        );
        await era.printAndWait(
          `全力で抗わなければ、波ひとつで ${you.name} は地面に崩れ、止まらない噴水になる。`,
        );
        await era.printAndWait('だがその波も、主人の肉棒の一突きにすぎない。');
        await era.printAndWait(
          `積み重なる快感で ${you.name} の全身の筋肉は締まり、喉まで名器と呼べるほどに狭まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'おお……！ この締め付けですわ！ 出ますわよ、ちゃんと受け止めてなさい！',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は ${you.name} の頭を強く押さえ、前後に激しく突き動かした。`,
        );
        await era.printAndWait(
          '普通の人間の体なら、こんな弄り方では命に関わるだろう。',
        );
        await era.printAndWait(
          `幸か不幸か、今の ${you.name} はウマ娘で、しかも特殊な改造を受けたウマ娘だ。`,
        );
        await era.printAndWait(
          `だからどれだけ乱暴でも、${you.name} の体は耐え、それをすべて快感へ変える。`,
        );
        await era.printAndWait(
          `窒息の苦しさまで、${you.name} の体が勝手に快感へ変え、やがて ${you.name} は自らその感覚を味わい始めた。`,
        );
        await era.printAndWait(
          `${you.name} の喉は主人の出入りに合わせて締めを変え続ける。まるで、ではなく、${you.name} の喉そのものが名器だ！`,
        );
        era.println();

        await tachyon.say_and_wait(
          '受け止めなさい。漏らしたら終わりですわよ。',
        );
        era.println();

        await era.printAndWait(
          '冷たい命令のあと、灼熱の白濁が滾って押し寄せた。',
        );
        await era.printAndWait(
          `膨大な量が ${you.name} の口も鼻も喉も舌も埋め、今にも溢れそうになる……`,
        );
        await era.printAndWait([
          `${you.name} は慌てて口いっぱいになった腥い液を飲み込んだが、その努力でも`,
          tachyon.uma_sex_title,
          `さまの恵みをすべて収めることはできなかった。`,
        ]);
        await era.printAndWait([
          `結局……${you.name} は無力なまま手で、`,
          tachyon.uma_sex_title,
          `さまの貴重な種汁を受け止めるしかなかった。`,
        ]);
        era.println();

        await era.printAndWait(
          'それでも、口の中で撃ち続ける太い砲身は止まらない。',
        );
        await era.printAndWait(
          `長い酸欠は、酸欠の快感を味わえる ${you.name} でも、頑丈なウマ娘の体でも完全には耐えきれず、やがて ${you.name} の意識は霞んでいった……`,
        );
        era.println();

        await era.printAndWait('「ドン！」');
        era.println();

        await era.printAndWait([
          'ふいに、鋭い痛みで ',
          you.get_colored_name(),
          ' は目を覚ました。',
        ]);
        await era.printAndWait(
          `${you.name} は思わず声を上げようとしたが、開いた喉へすぐまた白濁が注がれた。`,
        );
        await era.printAndWait([
          `${you.name} が顔を上げると、見えたのは担当`,
          tachyon.uma_sex_title,
          '兼主人の脚だった。',
        ]);
        await era.printAndWait(
          '自分が何より大切にし、自分の脚より大事にしてきた美しい足。',
        );
        await era.printAndWait(
          `それが今、情け容赦なく ${you.name} の腹を踏んでいる。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '性奴隷としての能力……完全に不合格ですわね。',
        );
        await tachyon.say_and_wait('もっとちゃんと調教しないと……');
        era.println();

        await era.printAndWait(
          `飲みきれなかった白濁が ${you.name} の全身に落ち、服も濃い液でまみれた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'せっかくの研究室をこんな有様に……ちっ、我慢なりませんわ。',
        );
        era.println();

        await era.printAndWait(
          `タキオンは厭わしげに言い、ふと何か思いついたように身をかがめ、${you.name} に囁いた。`,
        );
      } else {
        await tachyon.say_and_wait(
          'こんな薄い汁しか出せないなんて、この役立たずの器官に、まだ存在する意味がありますの？',
        );
        await tachyon.say_and_wait(
          'ねえモルモット君、私はあなたを満たせる他の雄を探した方がいいのかしら……今のあなたじゃ、いったい誰を満たせますの？',
        );
        era.println();

        await era.printAndWait(
          `その言葉を聞き、${you.name} は慌てて恋人兼主人さまへさらに真剣に奉仕し、見捨てないでと頼んだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は満足げに ${you.name} の頭を撫で、もっと勤勉に奉仕するよう促した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'そんなに捨てられるのが怖いですの？ いい子、いい子。',
        );
        await tachyon.say_and_wait(
          '安心なさい。他人に体を触らせるつもりもありませんわ……でも恋人なら、相手の性欲を満たすのも義務でしょう？',
        );
        era.println();

        await era.printAndWait(
          `優しい言葉とともに、${tachyon.sex}は ${you.name} の尻を叩いて合図した。`,
        );
        await era.printAndWait(
          `${you.name} はすぐ従順に主人に背を向け、自分を雌にした入口を自ら開いた。`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を、もう濡れた ${you.name} の穴へ深く満たした。`,
        );
        await era.printAndWait(
          `巨大な陰嚢が ${you.name} の丸い尻にぶつかり、重く温かい流動感が、穴の中へ噴き出す白濁の量を予告していた。`,
        );
        await era.printAndWait(
          `入った瞬間、${you.name} は堪らず甘い声を漏らし、後ろの主人は満足そうに息を吐いた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ふふ、性奴隷になっても、私たちの体はいちばん噛み合っていますわね。',
        );
        await tachyon.say_and_wait(
          '当然ですわ。モルモット君の体は私が改造したんですもの。全部、私の基準で調整してありますわ。',
        );
        era.println();

        await era.printAndWait('自分の体は、主人に合わせて改造された。');
        await era.printAndWait('自分は主人の専用性奴隷だ。');
        era.println();

        await era.printAndWait(
          `その考えで ${you.name} はますます興奮し、穴も思わず締まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ん……急にこんなに締めて。どうしましたの？ 今の話で興奮したんですの？ こんな状況でもこれほど感じるなんて、昔の私は優しさが足りず、あなたの願いを見逃していたようですわね。',
        );
        era.println();

        await era.printAndWait(
          `言い終わるころ、後ろの突きはますます強く激しくなり、${you.name} は察して腰を後ろへ合わせ、主人の褒美を迎えた。`,
        );
        era.println();

        await tachyon.say_and_wait('出ますわ……ちゃんと受け止めなさい！');
        era.println();

        await era.printAndWait(
          `${tachyon.sex}の手が ${you.name} の尻を強く叩き、肉が波打つ。${you.name} が堪らず漏らす喘ぎが、主人の興をさらに煽った。`,
        );
        await era.printAndWait(
          `最後、${you.name} の震えを伴う絶頂とともに、熱い肉柱が ${you.name} の体内へ濃い白濁を注いだ。`,
        );
        await era.printAndWait(
          `${you.name} は体内の満ち足りた感覚を抱えたまま、意識を闇へ落とした……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ねえねえ、溢れてばかりじゃありませんこと？ せっかくの研究室をこんなにして……',
        );
        era.println();

        await era.printAndWait(
          `主人の不機嫌な声を聞き、${you.name} は一瞬で目が覚めた。`,
        );
        await era.printAndWait(
          `床に自分が無駄にした主人の精を見て、${you.name} は慌て、いちばん無駄にしない方法を選ぶしかなかった……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'いい子、いい子。きちんと綺麗にするのがいい子ですわ。',
        );
        era.println();

        await era.printAndWait(
          `主人は床で子犬のように精を舐める ${you.name} を撫で、${you.name} は嬉しくてもっと熱心に舐めた。`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。`,
        );
      } else {
        await tachyon.say_and_wait('ええ……そうしましょう');
        await tachyon.say_and_wait(
          'いい子。十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。',
        );
      }
      await tachyon.say_and_wait(
        'もう片付いていれば、『ご褒美』をあげますわ。',
      );
      if (love < 75) {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい、性奴隷『君』～',
        );
      } else {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい～',
        );
        await tachyon.say_and_wait(
          'でも安心なさい。どちらにせよ、たっぷり可愛がってあげますわ❤️',
        );
      }
      era.println();

      await era.printAndWait(
        '言い終えると、タキオンはズボンを履いて研究室を出た。',
      );

      if (love < 75) {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、口角から白汁を流したまま、室内で力なく息をしていた。`,
        );
        await era.printAndWait(
          `ご褒美か、罰か……${you.name} は隅の掃除道具棚を見た。`,
        );
      } else {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、まだ白汁を噴きながら、力なく床を掃除していた。`,
        );
        await era.printAndWait(`ご褒美か、罰か……`);
      }
      await era.printAndWait('では、どう選ぶ？');
    };
    f.title = title;
    return f;
  })(),

  // 한국어 작업 모듈 연결: ws_punishment3
  ws_punishment3: (() => {
    const title = '実験記録：孕袋と複数ウマ娘の体液研究';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk|false} child アグネスタキオンとプレイヤーの子。いなければ false
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_5 アグネスタキオンがフジキセキを呼ぶ名前
     * @param {PrintedSpan} call_9 アグネスタキオンがダイワスカーレットを呼ぶ名前
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名前
     * @param {PrintedSpan} call_36 アグネスタキオンがエアシャカールを呼ぶ名前
     * @param {PrintedSpan} call_94 アグネスタキオンがジャングルポケットを呼ぶ名前
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('ふんふんふん～～');
      era.println();

      await era.printAndWait(
        'アグネスタキオンは嬉しそうに鼻歌を口ずさみ、見慣れた廊下を歩いていた。',
      );
      await era.printAndWait(
        '普段、この階の廊下は奇妙な薬が吹き出す研究室のせいで生徒に敬遠されている……が、最近はまた少し人が戻ってきたらしい。',
      );
      await era.printAndWait(
        `だが${tachyon.sex}は自分の研究室を通り過ぎ、ある掃除道具棚の前で止まった。`,
      );
      era.println();

      await tachyon.say_and_wait([
        'ちっち……容赦ないですわね。一般的な',
        tachyon.uma_sex_title,
        'の性欲を、見くびっていたかしら。',
      ]);
      era.println();

      await era.printAndWait(
        `掃除道具棚の中には、目がとろんとし、口にボールギャグを填め、腹がぽっこり膨らみ、下の穴には二本の巨根が栓として刺さり、全身が愛液と精液にまみれ、正の字と下品な言葉を書き殴られた ${you.name} がいた。`,
      );
      era.println();

      await tachyon.say_and_wait('モルモット君？ 起きなさい。');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}は ${you.name} への呼び方で声を掛けたが、三日三晩弄ばれた ${you.name} の目はまだとろんとしており、答えようともがいても、視線は虚空を泳ぐだけだった。`,
      );
      era.println();

      await era.printAndWait([
        'これほど惨めな光景を見ても、',
        tachyon.get_colored_name(),
        ' に憐れみも同情もなかった。',
      ]);
      await era.printAndWait(
        `${tachyon.sex}は容赦なく足を上げ、${you.name} の腹を踏んだ。`,
      );
      await era.printAndWait(
        `踏まれた瞬間、${you.name} はエビのように体を縮めたが、それでもしっかりと踏みつけられた。もともと膨らんだ腹を踏まれた瞬間、強制的に空気を抜かれた風船のように、栓にしていた二本の按摩棒を下の口から噴き出し、続いて腹いっぱいの愛液と精液が溢れた。縮こまる ${you.name} は全身を震わせ、その短い間にまた一度絶頂し、短い肉棒からも薄い種汁が漏れた。`,
      );
      era.println();

      await tachyon.say_and_wait(
        'いい量ですわ。これならしばらく実験に足りますわね。',
      );
      era.println();

      await era.printAndWait([
        `タキオンは、噴水が爆発した瞬間に間に合わせて取り出したビーカーを嬉しそうに見た。中は今集めた`,
        tachyon.uma_sex_title,
        `の体液で満たされている。だがこの一杯では ${you.name} の穴から出た量の三分の一にも満たず、残りは床に飛び散り、掃除係の厄介になった。`,
      ]);
      await era.printAndWait('まあ、汚した者が掃除する。当然のことだ。');
      era.println();

      await tachyon.say_and_wait('モルモット君～今回の実験は大成功ですわよ～');
      era.println();

      await era.printAndWait(
        'タキオンは何事もなかったように、興奮して実験の話を分け与えた。',
      );
      await era.printAndWait(
        `だが……何事もなかった、というのは ${you.name} の甘い錯覚にすぎない。`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` は意外と隠れスケベですわ……${tachyon.sex}ならこんな遊びは断ると思っていたのに、結果は……`,
        ]);
        era.println();
        await era.printAndWait(
          `タキオンは猟犬の痕跡が残る ${you.name} の首から肩まで撫で、それから……手を下ろし、歯形だらけの乳房に触れた。乳首の歯形が特に目立っていた。`,
        );
        await era.printAndWait(
          `触れた瞬間、${you.name} はまた体を震わせた。少し撫でただけと頭の中の想像で、今の ${you.name} は絶頂してしまう。`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_94,
          ' も……最初はあんなに恥ずかしがっていたのに……',
        ]);
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は、まだボールギャグで塞がれ声も出せない ${you.name} の唇を弄んだ。少し腫れた両唇が、この数日どれほど苛まれたかをタキオンに教えていた。`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' の声は、研究室にいてもはっきり聞こえましたわ。',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '……ふふ、さすが私が目をかけた子。この方面でも一位ですわ。',
        ]);
        era.println();

        await era.printAndWait(
          'まだ確かめてはいないが、今入れたビーカーの中身の七割くらいは、スカーレット一人が出した分だろう。',
        );
        await era.printAndWait([
          `閨でも一位でなければ気が済まない意地のおかげで、${tachyon.sex}はこの三日、いちばん長く ${you.name} に跨り続けた`,
          tachyon.uma_sex_title,
          'だった',
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'それに、',
          call_5,
          ' も私の提案を受けて実験に付き合ってくれましたわ。ちっち、うちのモルモット君の顔は大きいですわね。寮長まで魔の手から逃げられませんわ。',
        ]);
        era.println();

        await era.printAndWait(
          'タキオンはモルモットの太もも内側を撫でた。正の字だらけの両脚。そのうち四行は特別な筆跡で、微かに光っている。芸人はいつも大げさだ。正の字を書くときも例外ではない。',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'ちっち。毎日論理だ論理だと言いながら、閨では理性を全部忘れますわね……',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          `タキオンは ${you.name} の菊穴に触れた。この数日こちらを腫れるまで突いた主因はシャカールの肉柱だ。本当にすべて合理的なら、生産の意味のない穴に出すのはいちばん論理に反する行為だろう。だがこの三日、${tachyon.sex}が休みなく耕す様子を見て、${you.name} は口に出す気にもなれなかった。もちろん、聞く暇もなかった。`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? 'パパ' : 'ママ';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '……さすが私の',
          child.sex_code === 1 ? '息子' : '娘',
          'ですわ。こんなに早く独学で『',
          callname_c,
          '』の穴を使っていますわね……まあ子供ですもの、独占欲が強いのも分かりますわ。',
        ]);
        era.println();

        await era.printAndWait([
          'タキオンは ',
          you.get_colored_name(),
          ' の尻を叩いた。そこには幼い字で『',
          callname_c,
          'は私専用の便器』と書いてある。この子は本当に意味を分かっているのか……タキオンがその一文を読み上げ、もし理解したうえで書いたのだとしたら……',
          you.get_colored_name(),
          ' はまた堪らず絶頂した。',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          'お腹の子が哀れですわ……母親がこんな誰にでも股を開く娼婦だなんて。私なら精液で溺れた方がマシですわ。',
        );
        era.println();

        await era.printAndWait(
          'タキオンはまた強く一踏みし、嘲りと侮蔑を込めて言った。',
        );
        era.println();
        await tachyon.say_and_wait(
          '喜びなさい。ウマ娘の体は頑丈ですわ。こう踏んでも傷つくのはあなただけで、お腹の子には何もありません……でもそんなこと、どうでもいいのでしょうね。肉棒さえあればいい娼婦さん。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} は反論したかったが、下から噴く潮がそれを許さなかった。`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        'こちらは、『かつて』あなたに恋慕していた子たちが残したものですわ。',
      );
      era.println();
      await era.printAndWait([
        `タキオンは ${you.name} の体に書かれた『雌犬』、『便器10円一回』、『`,
        tachyon.uma_sex_title,
        `さまの精便器』、『性愛ダービー18着』を撫でた。`,
      ]);
      await era.printAndWait([
        'どれも、憧れていたトレーナーが淫らな孕袋になったのを見て、愛が恨に、恨が欲に変わった',
        tachyon.uma_sex_title,
        'たちが残したものだ。',
      ]);
      era.println();
      await tachyon.say_and_wait('でも、気持ちよかったのでしょう？ ねえ？');
      era.println();
      await era.printAndWait('タキオンの顔に、嗜虐の笑みが広がった。');
      era.println();
      await tachyon.say_and_wait([
        'その浮かれた顔を見るに、字を書かれたとき、',
        tachyon.couple_title,
        'に一字一句読み上げさせたんじゃありませんこと？ ねえ？ 淫乱、駄犬、精液のためなら床に跪いて靴を舐める雌豚？',
      ]);
      era.println();
      await era.printAndWait(`一言ごとに、${you.name} の下から潮が湧いた。`);
      await era.printAndWait(
        `${you.name} がしようとした抵抗は、どれも見せかけの拒絶にしか見えなかった。`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('冗談ですわ。');
        era.println();
        await era.printAndWait(
          `ふいにタキオンは ${you.name} の顔を支え、${you.name} の口を塞いでいたボールギャグを優しく外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐いた。`,
        );
        era.println();
        await era.printAndWait(
          `目の前のタキオンの白衣を汚してしまい、${you.name} の顔は青ざめた。先の責めだけでなく、その不敬のせいでもあった。`,
        );
        era.println();

        await tachyon.say_and_wait('……大丈夫ですわ、モルモット君。');
        era.println();
        await era.printAndWait(
          `タキオンは吐瀉物のついていない袖で、${you.name} の口元を優しく拭った。`,
        );
        era.println();
        await tachyon.say_and_wait(
          '言いましたわよね。あなたを捨てたりしません。どんな姿になっても同じですわ。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} が反応する前に、${tachyon.sex}は ${you.name} の唇に口づけた。この数日どれほど苛まれ、どれだけの相手に汚され、今また何を吐いたかなど、構わずに。`,
        );
        await era.printAndWait('柔らかく、温かく、包み込むようなキス。');
        await era.printAndWait(
          `いつの間にか ${you.name} は、昔の日々に戻ったような気がした。`,
        );
        era.println();

        await era.printAndWait('……だが、それも『ような』だけだ。');
        era.println();

        await era.printAndWait(
          `${you.name} はタキオンの白衣の下で、ますます膨らむ膨らみを見て、自分の立場を思い出した。`,
        );
        await era.printAndWait(
          `タキオンも気づき、照れたように ${you.name} へ笑った。`,
        );
        era.println();

        await tachyon.say_and_wait('いいですの？ モルモット君？');
        era.println();

        await era.printAndWait(
          `${you.name} は答えず、ただ従順に地へ跪き、今日最初の奉仕を始めた。`,
        );
      } else {
        await tachyon.say_and_wait('これでまだ言い逃れするつもりですの？');
        era.println();

        await era.printAndWait(
          `タキオンは荒々しく ${you.name} のボールギャグを外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐き出そうとした。`,
        );
        await era.printAndWait('だが……');
        era.println();

        await tachyon.say_and_wait('何をするつもりですの、モルモット君。');
        era.println();

        await era.printAndWait('ああ、とっくに分かっていたはずだ。');
        await era.printAndWait(
          `${tachyon.sex}がわざわざギャグを外して楽をさせてくれるはずがない。`,
        );
        await era.printAndWait(
          `${you.name} が口を開いた瞬間、${tachyon.sex}の下の巨根が、吐き出そうとしたものも言葉もすべて塞いだ。`,
        );
        era.println();
        await tachyon.say_and_wait(
          'この数日は実験で忙しくて、私自身はまだ使っていませんでしたわ。',
        );
        era.println();
        await era.printAndWait(
          `淫らな匂いと、尿の気配すらする巨根が ${you.name} の喉を塞いだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は荒々しく ${you.name} の口と舌を使い、無機物のオナホールを扱うようだった。`,
        );
        await era.printAndWait('情はなく、ただ性欲を処理するためだけに使う。');
        era.println();
        await tachyon.say_and_wait(
          'ふう、出ますわ出ますわ。受け止めなさい。さもなくばあとで……まあいいわ。床を汚しても片付けるのはあなたですもの。',
        );
        era.println();
        await era.printAndWait(
          `タキオンは遠慮なく ${you.name} の口を満たすと、足を止めず研究室へ戻り、今日の研究を続けた。`,
        );
        await era.printAndWait(
          `今日最初の奉仕を終えた ${you.name} は虚ろな目で虚空を見つめ、いったい何がこうなるまで進んだのかを考えた。`,
        );
        await era.printAndWait(
          '……だが、そんな思考にも意味はない。改造手術のときに聞いた通り、もう戻れない。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は三日分溜まった白濁を懸命に飲み込み、自分が汚した廊下の床を見た……',
        ]);
        era.println();
        if ((await degeneration_to_evil('口で', '掃除道具で')) === 1) {
          await era.printAndWait(
            'どうせもう戻れない。なら思い切って理性を捨て、全部味わえばいい。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は地に跪き、三日分の ',
            you.get_colored_name(),
            ' が残した痕を舐めた。',
          ]);
          await era.printAndWait('理由は何だろう。');
          await era.printAndWait([
            tachyon.uma_sex_title,
            'さまに道具で掃除しているところを見られたら、もっと惨めになるから？',
          ]);
          await era.printAndWait(
            'この惨めさで、こんな暮らしから抜け出そうと自分を戒めるため？',
          );
          await era.printAndWait(
            'それとも……タキオンの言う通り、精液と肉棒のためなら体面も捨てて床を舐める下衆なのか？',
          );
          era.println();
          await era.printAndWait('そんな理由は、もうどうでもよかった。');
          await era.printAndWait([
            '地に伏せた ',
            you.get_colored_name(),
            ' の目に映り、耳に入り、口に乗るのは、床にも、自分の体にも、挿れる穴から流れ出る白濁の精だけだった。',
          ]);
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を拾わせた。',
          ]);
          await era.printAndWait([
            'では、今度はどの',
            tachyon.uma_sex_title,
            'さまが奉仕を要するのだろう。',
          ]);
          await era.printAndWait([
            'いつの間にか、',
            you.get_colored_name(),
            ' は自ら尻を上げ、次の賓客の使用を待っていた。',
          ]);
        } else {
          await era.printAndWait(
            '肉体は改造されても、せめて精神までは捨てられない。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はもがいて立ち上がった——',
            you.uma_sex_title,
            'の体でも、三日弄ばれたばかりの ',
            you.get_colored_name(),
            ' には辛い動作だ——掃除道具棚から、この数日 ',
            you.get_colored_name(),
            ' とさまざまな',
            tachyon.uma_sex_title,
            'の体液にまみれた掃除道具を取り出し、床に残した痕を拭いた。',
          ]);
          era.println();
          await era.printAndWait([
            '立ち上がっただけで足裏への刺激が、',
            you.get_colored_name(),
            ' を一度小さな絶頂へ連れていく。',
          ]);
          await era.printAndWait([
            '今も ',
            you.get_colored_name(),
            ' の穴と尻穴からは白濁と愛液の混じった粘液が流れ続け、',
            you.get_colored_name(),
            ' の掃除を邪魔する。',
          ]);
          await era.printAndWait(
            '先の丸い箒の柄を見て、その匂いを嗅いだだけで、五分しか空いていない穴をそれで満たしたくなる衝動が走る。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、箒と塵取りで無駄な掃除を続けた。',
          ]);
          await era.printAndWait(
            '自分は人間だ。ウマ娘でも、性奴隷でも、孕袋でもない。',
          );
          await era.printAndWait([
            'その意地は、まだ ',
            you.get_colored_name(),
            ' の胸に残っている。',
          ]);
          await era.printAndWait('だが……');
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を正確に捉えさせた。',
          ]);
          await era.printAndWait(
            '今日の使用者か。答えるまでもない。薬が漏れやすいこの廊下へ近づく理由など、それ以外に思いつかない。',
          );
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、聞こえないふりをして、人間としての誇りを守った。',
          ]);
          era.println();
          await era.printAndWait([
            '——————たとえそれが、五分後には ',
            you.get_colored_name(),
            ' 自身が自ら捨てるものだとしても。',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
};
