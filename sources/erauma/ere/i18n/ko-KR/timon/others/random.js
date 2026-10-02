/**
 * @file ランダム小イベント
 * @author イーウィヤ
 * @author 雞雞
 * @author 幽白書
 * @author KUN
 * @author Mr.E.
 * @author 念来过倒要你
 * @author 牛蛙煲
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

const JaRandom = require('#/i18n/ja-JP/timon/others/random');

module.exports = {
  ...JaRandom,
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '오늘 기상 후, ',
        you.get_colored_name(),
        '은(는) 개인 계정으로 메시지를 한 통 받았다. 상대는 앞으로의 모든 물건을 독점 구매하고 싶어 한다.',
      ]);
      printButton('「그냥 특이한 취향을 가진 사람이겠지…… 돈만 벌 수 있다면 상관없어.」', 1);
      printButton('「지정한 장소로 부쳐달라니…… 아무래도 수상해. 역시 그만두자.」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' 앞으로 송금액이 도착했다.']);
        await printAndWait(
          '상대는 다음에도 같은 주소로 보내달라며, 물건이 들어오면 우선적으로 연락해 달라고 덧붙였다.',
        );
        if (money) {
          await printAndWait(['대금으로 ', money, ' 우마코인을 받았다...']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 상대의 말투에서 수상함을 느꼈다. 게다가 배송 주소가 트레센 학원에서 그리 멀지 않은 곳이다.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 제안을 거절했지만, 상대는 포기하지 않은 듯 물건이 생기면 꼭 연락해 달라며 더 높은 가격을 제시했다.',
        ]);
      }
      return [ret];
    };
    f.title = '개인 정보 보안 (1?)';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '상대방에게서 또다시 메시지가 왔다. 제발 ',
        you.get_colored_name(),
        '의 물건을 팔아달라고 간청하고 있다.',
      ]);
      await printAndWait(
        '그는 이런 종류의 상품에 대한 광적인 수집가인 듯 보였고, 마치 이것들을 어디에라도 급히 써야 하는 것처럼 매우 절박해 보였다.',
      );
      printButton('(요즘 수중에 돈이 좀 부족한데…… 역시 거래를 할까?)', 1);
      printButton('(……역시 너무 수상해. 무시하자.)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '돈이 없으면 아무것도 할 수 없는 법. 이쯤 되면 그 누구도 ',
          you.get_colored_name(),
          '을(를) 탓할 수 없을 것이다.',
        ]);
        await printAndWait([
          '최대한 정체를 숨기기로 다짐하며, ',
          you.get_colored_name(),
          '은(는) 상대의 제안을 수락하기로 했다.',
        ]);
        if (money) {
          await printAndWait(['대금으로 ', money, ' 우마코인을 받았다...']);
        }
      } else {
        await printAndWait(
          '이렇게 가까운 배송 주소에, 이런 절박한 말투라니. 역시 위험한 인물임이 틀림없다. 상대하지 않는 게 상책이다.',
        );
        await printAndWait([
          '그렇게 생각하며, ',
          you.get_colored_name(),
          '은(는) 상대를 차단 목록에 등록했다.',
        ]);
      }
      return [ret];
    };
    f.title = '개인 정보 보안 (2!?)';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     */
    const f = async (you, chara) => {
      await printAndWait([
        '트레이닝실 안에서 ',
        chara.get_colored_name(),
        '이(가) 스마트폰을 보고 있다가, ',
        you.get_colored_name(),
        ' を見るなりしまった。',
        you.get_colored_name(),
        ' から隠しているようだ。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '의 스마트폰도 진동하며 메시지 도착 알림이 울렸다.',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '이(가) 코를 킁킁거리더니, ',
        you.get_colored_name(),
        '에게서 낯선 냄새가 나는 것 같다고 말했다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 별로 신경 쓰지 않았다. ',
        chara.uma_sex_title,
        '들은 원래 감각이 예민하니까.',
      ]);
      await printAndWait('……');
      await printAndWait([
        '물론, ',
        you.get_colored_name(),
        '의 시선이 ',
        chara.get_colored_name(),
        '이(가) 눈치채지 못하는 사이 기묘하게 변했다는 사실도 깨닫지 못했다.',
      ]);
    };
    f.title = '개인 정보 보안 (2?!)';
    return f;
  })(),
  mr_naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '아침에 눈을 뜨니, ',
        chara.get_colored_name(),
        '은(는) 이미 침대 위에 없었다.',
      ]);
      await printAndWait([
        '세수를 하고 부엌으로 가 보니 ',
        chara.sex,
        '의 실루엣이 보였다. 아침 식사를 준비하고 있는 것 같았지만……',
      ]);
      await printAndWait([
        '실오라기 하나 걸치지 않은 알몸에 앞치마만 두르고 정성껏 요리하는 ',
        chara.get_colored_name(),
        '의, 귀여운 엉덩이를 살랑살랑 흔들며 요리하는 모습은 그야말로——',
      ]);
      printButton('（제길, 더는 못 참겠어!）', 1);
      printButton('（소수를 세며 진정하자……）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 충동을 억누르고, 이성적으로 ',
          chara.get_colored_name(),
          '에게 아침 인사를 건넸다.',
        ]);
      }
      return ret;
    };
    f.title = '아침의 알몸 앞치마';
    return f;
  })(),
  mr_blowjob: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '아침에 눈을 뜨니 ',
        you.get_colored_name(),
        '의 하체에서 이상한 느낌이 들었다.',
      ]);
      await printAndWait([
        '눈을 뜨자 눈앞에 나타난 것은 알몸의 ',
        chara.get_colored_name(),
        '이(가) 입으로 ',
        you.get_colored_name(),
        '의 ',
        you.sex_code === 0 ? '음핵' : '음경',
        '을 빠는 음란한 모습이었다.',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? '탐욕스럽게'
          : skill > 2
            ? '능숙하게'
            : '서투르게',
        ' ',
        you.sex_code === 0 ? '클리토리스를 핥는' : '음경을 빨아들이는',
        ' 것을 보고 ',
        you.get_colored_name(),
        '도 참지 못하고 손으로 ',
        chara.get_colored_name(),
        '의 머리를 누르며 더 깊은 쾌감을 갈망하기 시작했다.',
      ]);
      printButton('（젠장, 더는 못 참겠어!）', 1);
      printButton('（이제 갈 것 같아……!）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          chara.get_colored_name(),
          '의 모닝 펠라에 ',
          you.get_colored_name(),
          '은(는) 순식간에 절정에 달했고, ',
          you.sex_code === 0 ? '애액' : '정액',
          '을 남김없이 ',
          chara.get_colored_name(),
          '의 앵두 같은 입안에 쏟아냈다.',
        ]);
        await chara.say_and_wait(['입안이 가득해졌여…… ', callname, '의 맛으로 가득해……']);
        await printAndWait('욕망을 배설한 뒤, 새로운 하루가 시작되었다……');
      }
      return ret;
    };
    f.title = '모닝 펠라';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれた担当。アグネスタキオンの場合あり
     * @param {CharaTalk|false} tachyon アグネスタキオン。chara がアグネスタキオンなら false
     * @param {CharaTalk|false} minoru 駿川たづな / ハーベストタイム。chara がその場合は false
     * @param {CharaTalk|false} doto メイショウドトウ。chara がその場合は false
     * @param {CharaTalk|false} maya マヤノトップガン。chara がその場合は false
     * @param {CharaTalk|false} sky セイウンスカイ。chara がその場合は false
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        '아침, ',
        you.get_colored_name(),
        '은(는) 뭔가 좀 이싱하다는 느낌이 들었지만 그래도 행복한 하루를 맞이했다. ',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        ' 은(는) 별다른 생각 없이 세수를 마치고 집을 나섰다.',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([
          minoru.sex,
          '는 여전히 학원 정문에서 모든 사람을 반기고 있다.',
        ]);
        println();
      }
      await you.say_and_wait('……?', true);
      await you.say_and_wait('눈_눈');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 뭔가 이상한 기분이 들었지만 뭐라 표현할 수가 없었다.',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, '는 왜 또 울고 있는 걸까?']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait('이 녀석 또 밤을 세웠나 보군.');
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('...이게 다 무슨 표정이지?');
        println();
      }
      await you.say_and_wait('……!', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 드디어 눈치챘다. 오는 내내 말 한 마디도 듣지 못했지만 이상하게도 이모티콘들이 머리에 떠오른다.',
      ]);
      await you.say_and_wait('……', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait('머릿속에 항상 실험복을 입고 있는 어떤 악덕 상인이 떠오른다.');
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          '또 ',
          tachyon.sex,
          '의 실험인가. ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '를 찾으러 떠날 계획이다.',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢嘿');
        printButton('「(｢･ω･)｢嘿」', 1);
        printButton('「ヾ(＾。^*)」', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)?');
        await printAndWait([
          '아무래도 ',
          you.get_colored_name(),
          '이(가) 뭘 하는지 이해하지 못하는 듯 하다',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '에게 손을 내밀었다.',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(`${target.sex}에게 현재 상황을 설명한다.`, 1);
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('한동한 신나게 춤을 췄다.');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          'しばらくして、',
          chara.sex,
          'はやっと意味を理解し、',
          you.get_colored_name(),
          ' に付き合ってくれた。',
        ]);
        drawLine();
        await printAndWait(['すぐに', tachyon.sex, 'の研究室へ着いた。']);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: '한참 동안 설명한 후' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          '마지막으로 ',
          you.get_colored_name(),
          '의 감정을 기록한 후 해독제와 보상을 주었다.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 매일 실험을 하던 담당 우마무스메를 떠올렸다.',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          '은(는) 익숙한 발걸음으로 ',
          chara.sex,
          '의 실험실로 향했다.',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('(^_^)');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('우마 TV, 지금 여기에 개국!');
        await chara.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
        drawLine({ content: '(톰 선생님 성우 감사드립니다)' });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('╮（﹀＿﹀）╭');
      }
    };
    f.title = '웃긴 날 (이상한 날）';
    return f;
  })(),
};
