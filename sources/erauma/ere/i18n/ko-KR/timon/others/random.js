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
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        '트레이닝이 끝난 후, ',
        chara.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '에게 시간이 있는지 물으며 함께 가고 싶은 곳이 있다고 제안했다.',
      ]);
      printButton('「마침 별다른 일정도 없으니, 같이 가자.」', 1);
      printButton('「역시 안 되겠어, 너무 늦었어.」', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          '의 발걸음이 점점 가벼워졌지만, 가는 길이 ',
          you.get_colored_name(),
          '에게는 점점 익숙하게 느껴졌다.',
        ]);
        await printAndWait('이곳은 분명 저번에 그 구매자가 지정했던 배송 주소다!');
        await chara.say_and_wait([
          callname,
          ', 개인 정보 보안에 너무 소홀한 거 아니에요? 아무것도 밝히지 않았다고 생각하겠지만, IP 주소가 학원 내부로 찍히고 있었다고요~',
        ]);
        await chara.say_and_wait([
          '그래도 걱정 마세요, 제가 이미 ',
          callname,
          ' 대신 깔끔하게 처리했으니까요. 원래 여기 살던 녀석들이 ',
          callname,
          '에게 못된 짓을 하려고 꾸미고 있었거든요.',
        ]);
        await chara.say_and_wait([
          '하지만 ',
          callname,
          '이(가) 이번 일을 교훈 삼을 수 있도록, 몸으로 똑똑히 기억하게 해줘야겠어요——',
        ]);
        await chara.say_and_wait('———우리는 일심동체니까요.');
        await printAndWait('……');
        printButton(
          `${chara.sex}をしっかり抱きしめ、感謝を示す。（好感+25）`,
          1,
        );
        printButton(`${chara.sex}を連れて帰り、ちゃんと礼をする。`, 2);
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait('손목에 부드러우면서도 거부할 수 없는 강한 힘이 느껴졌다.');
        await printAndWait([
          you.get_colored_name(),
          '은(는)',
          chara.get_colored_name(),
          '에게 이끌려 아직 잠기지 않은 트레이닝실로 끌려 들어갔고, 곧이어 문이 안에서 잠겼다.',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            '분명히 이 ',
            chara.uma_sex_title,
            '의 소유물일 텐데.',
          ]);
          await chara.say_and_wait('아직도 그 몸에 대한 처분권이 자신에게 있다고 생각하는 건가요?');
          await chara.say_and_wait(
            '당신의 입장이 어떤지 명확하게 해둘 필요가 있겠네요.',
          );
          await chara.say_and_wait('왜 멍하니 보고만 있죠? 옷 정도는 알아서 벗어야 하는 거 아닌가요!');
          await printAndWait([
            '의미심장한 시선 아래, ',
            you.get_colored_name(),
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
            you.get_colored_name(),
            '은(는) 옷을 한쪽에 내팽개치고, 가장 정중한 도게자 자세로 은밀한 곳까지 전부 상대에게 드러내 보였다.',
          ]);
          await printAndWait('온몸이 뜨거워……');
          await printAndWait([chara.uma_sex_title, '님께 꾸중을 들어서인가……']);
          await printAndWait(
            '아니면, 본래 이렇게 다뤄지길 기대했기에 그런 일을 저지른 것일까?',
          );
          await printAndWait('머릿속과 몸이 타오르는 듯해 더 이상 사고할 수 없다.');
          await printAndWait('이제는 오직 행동으로 사죄하는 법밖에 모른다.');
          await printAndWait('강제로 씌워진 귀마저 바닥에 엎드려 복종을 표했다.');
        } else {
          await chara.say_and_wait([
            callname,
            '도 매일 그 몸 때문에 곤란해하고 있었죠? 다 알고 있다고요~',
          ]);
          await chara.say_and_wait('정말이지, 말만 하면 제가 도와줬을 텐데.');
          await printAndWait([
            you.get_colored_name(),
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
          await chara.say_and_wait(
            '이건 트레이너님이 욕구불만이라고 광고하는 거나 다름없잖아요?',
          );
          await chara.say_and_wait('이제 몸의 힘을 빼도 좋답니다?');
          await printAndWait([
            you.get_colored_name(),
            '이(가) 무언가 변명하려 했지만, 이미 흥분한 ',
            chara.uma_sex_title,
            '이(가) ',
            you.get_colored_name(),
            '의 말을 들어줄 리 만무했다.',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '에 의해 트레이너 숙소까지 이끌려 왔다.',
        ]);
        await chara.say_and_wait([
          callname,
          ', 생활비를 벌기 위해 부업까지 해야 하다니 정말 고생이 많으시네요.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          '의 귀가 축 처졌다. 아무래도 ',
          you.get_colored_name(),
          '의 「사생활」에 대해 어느 정도 알고 있는 모양이다.',
        ]);
        await chara.say_and_wait(
          '어려운 일이 있으면 꼭 저한테 말씀해 주세요. 전 언제나 당신 편이니까요!',
        );
        await chara.say_and_wait([
          '저번에 ',
          callname,
          '이(가) 인터넷을 하다가 추적당한 적이 있었어요. 누군가 시비를 걸려고 했던 모양이더라고요.',
        ]);
        await chara.say_and_wait('하지만 걱정 마세요, 제가 다 해결해 뒀으니까요~');
        await chara.say_and_wait('힘든 일이 생기면 반드시 저한테 말해주기예요!');
        await printAndWait([
          chara.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '을(를) 꼭 껴안아 주었다.',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            '그 틈을 타 혀로 ',
            you.get_colored_name(),
            '의 목덜미를 핥는 바람에, ',
            you.get_colored_name(),
            '은(는) 간지러움에 몸을 떨었다.',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            '이(가) ',
            you.get_colored_name(),
            '의 목덜미에 얼굴을 묻고 깊게 숨을 들이켰다. 마치 이것이 ',
            chara.sex,
            '가 ',
            you.get_colored_name(),
            '을(를) 위해 사건을 해결해 준 보상인 것처럼.',
          ]);
        }
        await chara.say_and_wait([callname, ', 다음 주에 봐요. 푹 쉬세요!']);
        await printAndWait([
          chara.get_colored_name(),
          ' はそのまま ',
          you.get_colored_name(),
          ' を寮の入口まで送り、',
          you.get_colored_name(),
          ' と別れた。',
        ]);
      }
      return ret;
    };
    f.title = '개인 정보 보안 (3?)';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれたキャラ。アグネスタキオンにはならない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {PrintedSpan} callname キャラからあなたへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンからあなたへの呼び方
     * @param {string[]} med_list 薬のリスト。「名称 × 数量」形式
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 평소처럼 일어났지만, 몸 상태가 어딘지 모르게 이상하다는 것을 깨달았다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 주위를 둘러보았지만, 변한 것은 없었다.',
      ]);
      await printAndWait('다만……… 손이 근질거리는 게, 왠지 조사를 하고 싶어졌다……');
      let flag_a = true,
        horse_hair = false,
        flag_b = true,
        b_line;
      const check_times_in_a = new Array(6).fill(0),
        check_times_in_b = new Array(2).fill(true);
      const cur_line = getLineCount();
      while (flag_a) {
        printInColRows(
          [
            { content: 'では、何を調べる？', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: '壁壁壁壁壁',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '窓',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '壁壁壁壁壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '二二二',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '人人人',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '床床床',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: '壁', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '棚',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: '壁', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: '鏡',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: '壁', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '厠',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '玄 関',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '壁壁壁壁',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([you.get_colored_name(), '은(는) 창문을 열었다.']);
                await printAndWait('밖에서는 새들이 지저귀고, 꽃들이 피어나고 있다.');
                await printAndWait([
                  you.get_colored_name(),
                  ' のようなトレーナーは……家で一日寝ていろ、という日だ。',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 창문을 닫았다. 외부의 소리를 차단했다.',
                ]);
                await printAndWait([
                  '안타깝게도 ',
                  you.get_colored_name(),
                  '은(는) 일을 해야 하기에, 아직 쉴 수 없다.',
                ]);
                break;
              default:
                await printAndWait('창문 여닫는 게 그렇게 재밌나?');
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('아주 크고 부드러운 침대다.');
                await printAndWait('……그런데 왜 굳이 2인용 침대를 샀던 걸까?');
                break;
              case 2:
                await printAndWait('……어라, 왜 여기에 우마무스메의 꼬리 털이 있지?');
                await printAndWait([you.get_colored_name(), '은(는) 냄새를 맡아보았다.']);
                await printAndWait('……익숙한 냄새다.');
                await printAndWait('【꼬리 털】을 획득했다.');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  '크고 편안한 침대…… 아마 ',
                  you.get_colored_name(),
                  ' 뿐만 아니라 다른 누군가에게도 편안할 것이다.',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait(
                  '침대 옆 협탁이다. 위에는 소중한 사진들이 놓여 있다.',
                );
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' 서랍을 샅샅이 뒤져보았지만, 아무것도 나오지 않았다.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 누군가 묻는 소리를 들은 것 같았다.',
                ]);
                await you.say_as_unknown_and_wait(
                  '……왜 자기 집 서랍을 그렇게 뒤져대는 거야?',
                );
                await printAndWait('……기분 탓이겠지.');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 구석구석 조사한 끝에…… 구석에서 10 우마코인을 찾아냈다.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 만족스러운 표정으로 자리를 떴다.',
                ]);
                await printAndWait('10 우마코인 획득.');
                // FLAGNAME:16 = 現在のウマコイン
                add('flag:16', 10);
                break;
              default:
                await printAndWait('소중한 사진 한 장만이 놓여 있을 뿐이다.');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  '거울 속에 비친 것은 ',
                  you.get_colored_name(),
                  '. 평범한 얼굴, 수수한 배지, 소박한 옷차림이다.',
                ]);
                break;
              case 2:
                await printAndWait(
                  '그곳에는 잘생긴 얼굴, 우아한 옷차림, 반짝이는 배지를 지닌 트레이너가 서 있다.',
                );
                await printAndWait('……참 보기 좋지 않은가.');
                break;
              case 3:
                await printAndWait([
                  '거울 속의 인물은 이제 더 이상 칭찬할 말이 없는지, 어처구니없다는 듯 ',
                  you.get_colored_name(),
                  '을(를) 쳐다보고 있다.',
                ]);
                await printAndWait('……무언가 좀 이상한데?');
                await printAndWait('눈을 한 번 깜빡이자, 모든 것이 정상으로 돌아왔다.');
                break;
              case 4:
                // 巻き込まれたのがマンハッタンカフェ、コパノリッキー、サンデーサイレンスの場合、超常現象が起きる
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    '이(가) 거울을 향해 미소 지었다.',
                  ]);
                  await printAndWait([
                    '거울 속의 인물도 갑자기 ',
                    you.get_colored_name(),
                    '을(를) 향해 웃기 시작했다……',
                  ]);
                  await printAndWait('……다만 입이 너무 크게 벌어져 귀 밑까지 찢어졌다.');
                  await printAndWait([
                    you.sex,
                    '는 거울 틀을 붙잡고 힘을 주기 시작했다.',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는)_……너무 무서워서 움직일 수 없는 걸까?',
                  ]);
                  await printAndWait([
                    you.sex,
                    '의 얼굴이 점점 커지더니, 바로 눈앞까지 다가왔다.',
                  ]);
                  await printAndWait([
                    '……그러다 ',
                    you.sex,
                    '가 ',
                    you.get_colored_name(),
                    '의 얼굴을 자세히 확인하더니,',
                  ]);
                  await printAndWait(['……', you.sex, '는 도망쳐 버렸다.']);
                  await printAndWait('이제 거울 속에는 아무것도 비치지 않는다.');
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는) 하품을 했다.',
                  ]);
                } else {
                  await printAndWait(['그곳에는 ', you.get_colored_name(), '이(가) 있다.']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait(
                    '거울 속은 텅 비어 있다…… 언제쯤 돌아오려나.',
                  );
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는) 매무새를 좀 정리하고 싶었는데 말이다.',
                  ]);
                } else {
                  await printAndWait(['그곳에는 ', you.get_colored_name(), '이(가) 있다.']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              '은(는) 욕실 문을 열고 안으로 들어갔다.',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      ' は周囲を見下ろす。どこから始める？',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁壁壁壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: '壁', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: '便器',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '壁', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: '浴槽',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: '室',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁壁壁壁',
                    type: 'text',
                  },
                ],
                [{ config: { width: 6 }, type: 'divider' }],
              );
              switch (await input()) {
                case 1:
                  if (check_times_in_b[0]) {
                    await printAndWait([
                      you.get_colored_name(),
                      '은(는) 누군가 자신을 쳐다보는 느낌이 든다…… 하지만 주위엔 아무도 없다.',
                    ]);
                    print('尿意がある。するか？');
                    printButton('する', 1);
                    printButton('やめておく', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '……착각인가?',
                        you.get_colored_name(),
                        '은(는) 변기가 말을 하는 것 같은 기분이 들었다.',
                      ]);
                      await printAndWait('……');
                      await printAndWait('……');
                      await printAndWait([
                        you.get_colored_name(),
                        '은(는) 변기가 이렇게 말하는 소리를 들은 것 같았다.',
                      ]);
                      await you.say_as_unknown_and_wait(
                        '우우우…… 난 이제 더러워졌어……',
                      );
                      await you.say_and_wait('……기분 탓이겠지.', true);
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait(
                      '변기가 울고 있는 것 같다…… 나중에 사과라도 하자.',
                    );
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait('평범한 욕조다. 들어가 있으면 기분이 좋다.');
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      '은(는) 희미한 목소리를 들었다.',
                    ]);
                    await you.say_as_unknown_and_wait(
                      '그만 좀 뒤져봐, 난 그냥 욕실이 비어 보이지 않게 가져다 놓은 것뿐이니까.',
                    );
                    await printAndWait('……정말 기묘한 일이다.');
                  }
                  break;
                case 3:
                  flag_b = false;
              }
              await clear(getLineCount() - b_line);
            }
            break;
          case 6:
            flag_a = false;
        }
        await clear(getLineCount() - cur_line);
      }
      drawLine();
      await printAndWait('현관문을 밀어 열었다. 왠지 오늘따라 외출이 유난히 늦어졌다.');
      await printAndWait('시간을 확인해보니, 벌써 지각하기 직전이다.');
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 현관문을 바라보며, 문을 바꿔야 할지 고민했다.',
        ]);
        await you.say_as_passer_by_and_wait('扉', '関係 ない。');
        await you.say_and_wait('……이제는 숨길 생각조차 없는 건가?', true);
      }
      println();
      await printAndWait([you.get_colored_name(), '은(는) 큰길로 나섰다.']);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 아무래도 자신이 또 ',
        tachyon.get_colored_name(),
        '에게 약을 투여당했다고 확신했다.',
      ]);
      await printAndWait('이번 약의 효과는 대체 무엇일까?');
      print(
        [
          { content: ' ', isDivider: true },
          '屋屋屋屋屋屋屋屋屋屋屋屋',
          { isBr: 2 },
          '君',
          { isBlank: 8 },
          'パン',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        '이(가) 기다리고 있던 ',
        chara.get_colored_name(),
        '와(과) 마주쳤다!',
      ]);
      print('距離は近い。どうする？');
      printButton('逃げる', 1);
      printButton('冷静に対応する', 2);
      await input();
      await printAndWait([
        '……',
        chara.sex,
        '는 이미 ',
        you.get_colored_name(),
        '을(를) 노리고 있다. 무엇을 해도 소용없을 것 같다!',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          '屋屋屋屋屋屋屋屋屋屋屋屋',
          { isBr: 2 },
          '君',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          'パン',
          { isBr: true },
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        '가 ',
        you.get_colored_name(),
        '에게 달려들었다.',
      ]);
      await chara.say_and_wait(['죄송해요, ', callname, '! 고의가 아니었어요!']);
      await chara.say_and_wait('지각할 것 같아서 급하게 달려오느라 그만.');
      await chara.say_and_wait(
        '좋은 냄새…… 당장이라도…… 아니야 아니야, 조금만 더 참자……',
        true,
      );
      await printAndWait('입으로는 그렇게 말하면서도, 몸은 비키려 하지 않는다.');
      await you.say_and_wait('괜찮아, 조심하면 되지.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 눈앞에서 벌써 자신의 체취를 맡기 시작한 ',
        chara.uma_sex_title,
        '를 보며, 짓궂은 장난기가 발동했다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        chara.sex,
        '에게 현재 상황을 설명해 주었다.',
      ]);
      await printAndWait([chara.sex, '의 얼굴이 새빨갛게 달아올랐다.']);
      await chara.say_and_wait('……');
      await chara.say_and_wait('그러니까 지금 제가 생각하는 게……?', true);
      await chara.say_and_wait('……앗, 지각하겠어요! 저 먼저 갈게요……!');
      await printAndWait([chara.sex, '는 뒤도 돌아보지 않고 달려나갔다.']);
      await you.say_and_wait('참 귀엽네.');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          '馬尾毛',
          'たしかにかわいい。これからもそう思ってくれるといいね。',
        );
        await you.say_and_wait('???');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 실험실에 도착했다.',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([
          tachyon.sex,
          '가 등을 돌린 채…… 하얀 플라스틱 의자에 앉아 있다?',
        ]);
        await tachyon.say_and_wait('오지 말았어야 했네.');
        await you.say_and_wait('또 나한테 뭘 먹인 거야? 어서 해독제 내놔.');
        await tachyon.say_and_wait('우리가 그동안 몇 번이나 싸웠지?');
        await you.say_and_wait('……');
        await tachyon.say_and_wait('원한다면, 직접 와서 가져가 보게.');
        await you.say_and_wait('자꾸 드립 치면 점심 굶길 줄 알아.');
        await printAndWait([
          tachyon.get_colored_name(),
          '이 광속으로 무릎을 꿇었다.',
        ]);
        await printAndWait([
          tachyon.sex,
          '가 ',
          you.get_colored_name(),
          '의 다리를 붙잡으며 내심 무언가를 기대하고 있다.',
        ]);
        await tachyon.say_and_wait(['우우우, 제발 그러지 말게, ', callname_32, '.']);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 해독제를 향해 걸어가다 실수로 ',
          tachyon.sex,
          '를 발로 찼다.',
        ]);
        await printAndWait([tachyon.sex, '는 왠지 모를 쾌감을 느끼고 있다.']);
        await tachyon.say_and_wait('아얏, 아프다네, 우우.');
        await printAndWait([
          '……',
          you.get_colored_name(),
          '은(는) 이 해독제를 반드시 마셔야 한다고 생각했다.',
        ]);
        await printAndWait([
          '해독제를 단숨에 들이켰다. 세계는 다시 고요해졌고, ',
          you.get_colored_name(),
          '은(는) 더 이상 주변을 조사하고 싶다는 욕망을 느끼지 않게 되었다.',
        ]);
        await tachyon.say_and_wait('……마셨나? ……나도 한 병 주게나.');
        await printAndWait([
          '잔뜩 실망한 표정의 ',
          tachyon.sex,
          '를 보며, ',
          you.get_colored_name(),
          '은(는) 우마 TV를 재가동해야겠다고 결심했다.',
        ]);
        await you.say_and_wait('……');
        await tachyon.say_and_wait('에?⊙▽⊙');
        await tachyon.say_as_unknown_and_wait(
          '嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷',
        );
        drawLine({ content: '（トム先生のアフレコに感謝）' });
      } else {
        await printAndWait([
          tachyon.sex,
          '가 의자에 앉아, 마치 ',
          you.get_colored_name(),
          '이(가) 올 것을 이미 알고 있었다는 듯 기다리고 있었다.',
        ]);
        await printAndWait('잠시 정적이 흘렀다.');
        await you.say_and_wait('입 꾹 다물고 보스인 척하는 거야?');
        await tachyon.say_and_wait('말은 필요 없지 않은가?', true);
        await you.say_and_wait('?');
        await tachyon.say_and_wait('그 표정을 보니 성공한 모양이군.', true);
        await tachyon.say_and_wait('이건 내가 최근 개발한, 「이체동심(異體同心)」 물약이라네.', true);
        await tachyon.say_and_wait(
          '효과가 꽤 좋지? 화내지 말게나. 자, 이게 해독제일세.',
        );
        await printAndWait([
          tachyon.sex,
          '가 옆에 있는 관찰 일지와 물약을 가리켰다.',
        ]);
        await printAndWait([
          '물약을 단숨에 들이켰다. 세계는 다시 고요해졌고, ',
          you.get_colored_name(),
          '은(는) 더 이상 주변을 조사하고 싶다는 욕망을 느끼지 않게 되었다.',
        ]);
        await printAndWait('그렇긴 해도, 생각할수록 점점 빡친다.');
        println();
        print('高めの薬を何本か得た：');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = 'おかしな一日 2';
    return f;
  })(),

  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '원래는 ',
        chara.get_colored_name(),
        '과(와) 함께 상점가를 가볍게 둘러보려 했지만, 뜻밖의 홍보물을 발견했다.',
      ]);
      println();
      await you.say_as_passer_by_and_wait('홍보물', [
        chara.uma_sex_title,
        '의 성장 과정을 완벽하게 담아낸 신작!',
      ]);
      println();
      await printAndWait([
        '소문은 듣지 못했지만, ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 호기심에 표를 사서 입장했다.',
      ]);
      await printAndWait(
        '상영관에 앉아 불이 꺼지고 이야기가 시작되기를 약간의 기대감을 안고 기다렸다.',
      );
      await printAndWait(
        '스크린의 화면은 확실히 신작다운 퀄리티였지만, 성장 과정은 다소 의외였다.',
      );
      println();
      await you.say_as_passer_by_and_wait(
        '배우',
        '트레이너, 당신 덕분이에요……',
      );
      await you.say_as_passer_by_and_wait(
        '배우',
        '전부 트레이너 덕분에, 지금의 제가……',
      );
      println();
      await printAndWait([
        '스크린의 과장된 장면에 ',
        you.get_colored_name(),
        '은(는) 묘한 위화감을 느꼈다.',
      ]);
      await printAndWait('이게 정말 성장 과정이라고?');
      println();
      await printAndWait([
        '뭔가 잘못됐음을 깨달은 ',
        you.get_colored_name(),
        '은(는) 고개를 돌려 ',
        chara.get_colored_name(),
        '에게 남은 부분은 그만 보자고 말하려 했다.',
      ]);
      println();
      await chara.say_and_wait('……');
      println();
      await printAndWait('팔 위로 따스한 감촉이 전해졌다.');
      await printAndWait([
        '곁에 앉아있던 ',
        chara.get_colored_name(),
        '이(가) 살며시 ',
        you.get_colored_name(),
        '의 손을 잡았다.',
      ]);
      println();
      await chara.say_and_wait('……갈 건가요?');
      println();
      await printAndWait([
        '어두운 상영관 안에서, 오직 ',
        chara.get_colored_name(),
        '의 얼굴만이 유독 뚜렷하게 보였다.',
      ]);
      await printAndWait([
        '두 손이 ',
        you.get_colored_name(),
        '의 팔에 포개진 채, 살며시 어깨에 기대어 왔다.',
      ]);
      println();
      await printAndWait(
        '화면은 두 사람의 마음속에서 더 이상 중요하지 않았고, 시선은 서로에게 단단히 얽매였다.',
      );
      await printAndWait(
        '스크린의 희미한 빛이 서로의 얼굴을 비추며, 눈동자에 빛을 굴절시켰다.',
      );
      println();
      await chara.say_and_wait([callname, '……']);
      await chara.say_and_wait('저……');
      await you.say_as_passer_by_and_wait('배우', '당신을 좋아해요!');
      println();
      await printAndWait(
        '영화가 클라이맥스에 달하며, 두 사람이 하려던 행동을 끊어버렸다.',
      );
      await printAndWait([
        '소리가 ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        ' 사이를 덮쳤고, 얽힌 시선에는 약간의 어색함이 섞여 있었다.',
      ]);
      printButton('「일단…… 진정하자」（컨디션 상승, 호감도+10）', 1);
      printButton('「우리…… 같이 어디 좀 갈까」（컨디션  대폭 상승, 연모+1）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          '영화는 점차 결말을 향해 갔고, 조명도 때맞춰 켜졌다.',
        );
        await printAndWait([
          '밝은 빛이 ',
          you.get_colored_name(),
          '의 어색한 얼굴을 비추자 ',
          you.get_colored_name(),
          '도 헛기침을 가볍게 했다.',
        ]);
        println();
        await chara.say_and_wait('……네.');
        println();
        await printAndWait([
          '여전히 맞닿아 있던 손이 ',
          you.get_colored_name(),
          '을(를) 쥐더니, 이내 함께 자리에서 일어났다.',
        ]);
        await printAndWait([
          '조금은 아쉬운 기색이었지만 얌전히 일어나 ',
          you.get_colored_name(),
          '의 뒤를 따랐다.',
        ]);
      } else {
        await printAndWait([
          '영화의 클라이맥스 속에서도, ',
          you.get_colored_name(),
          '은(는) 그 사이에서 간신히 목소리를 냈다.',
        ]);
        await printAndWait([
          '분위기에 휩쓸려 소리친 ',
          chara.get_colored_name(),
          '은(는) 흠칫 놀라며, 즉시 뒤로 몸을 움츠렸다.',
        ]);
        await printAndWait([
          '반대로, ',
          you.get_colored_name(),
          '의 얼굴은 부드러워지며, 천천히 앞으로 다가갔다.',
        ]);
        await printAndWait([
          '입술이 겹쳐지며, ',
          chara.get_colored_name(),
          '의 놀라움과 수줍음을 모두 마음속으로 밀어 넣은 채, 행복감을 만끽했다.',
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '의 손을 잡고 조용히 상영관을 빠져나왔다.',
        ]);
        await printAndWait([
          '온통 새빨개진 얼굴을 한 ',
          chara.get_colored_name(),
          '을(를) 데리고, 눈앞의 러브호텔을 바라보며 천천히 ',
          chara.sex,
          '의 어깨를 감싸 안고 들어갔다……',
        ]);
      }
      return ret;
    };
    f.title = '이 영화 맞나?';
    return f;
  })(),

  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {number} effect 効果 0-トレーニング上手バフ、1-健康茶、2-母乳薬、3-性欲上昇
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【학원에서 알립니다—— 방금 ',
          tachyon.get_colored_name(),
          '이 운동장에 실수로 살포한 약품의 정체가 아직 밝혀지지 않았으니, 트레이너 여러분께서는 가급적 운동장을 사용한 훈련을 삼가 주시기 바랍니다.】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('（별일 없겠지?）（랜덤 효과）', 1);
        printButton('통지까지 했으니 뭐……（효과 무효화）', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('「타키온…… 이 녀석!」', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait(
                  '팀 멤버들의 훈련이 더 원활해졌다…….',
                );
                break;
              case 1:
                await printAndWait(
                  '팀 멤버들의 이번 주 다이어트 효과가 더 좋아질 것이다…….',
                );
                break;
              case 2:
                await printAndWait('팀 멤버들이 모유를 흘리기 시작했다…….');
                break;
              case 3:
                await printAndWait('팀 멤버들의 성욕이 상승했다…….');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              you.get_colored_name(),
              '의 추궁에, ',
              tachyon.get_colored_name(),
              '은 ',
              tachyon.sex,
              '가 살포한 약물이 대략 어떤 효과를 내는지 자백했다——',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  '간단히 말하자면 사람을 훈련에 더 쉽게 집중하게 만드는 약이라네…….',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  '간단히 말하자면 사람을 칼로리를 빠르게 소모하게 만드는 약이라네…….',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  '간단히 말하자면 우마무스메에게 모유가 나오게 하는 약이라네…….',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  '간단히 말하자면 사람을 이성을 살짝 약화시키는 약이라네…….',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = '학원 통지・약물 살포';
    return f;
  })(),


  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} taiki タイキシャトル
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} know_minoru 駿川たづなの正体を知っているか
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 멀리서 두 개의 초록색 실루엣이 점점 가까워지는 것이 보였다. 알고 보니 ',
          taiki.get_colored_name(),
          '이 알 수 없는 이유로 ',
          minoru.get_colored_name(),
          '에게 쫒기고 있는 것이었다...여전하구나!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 멀리서 두 개의 초록색 실루엣이 점점 가까워지는 것이 보였다. 알고 보니 ',
          taiki.get_colored_name(),
          '이 알 수 없는 이유로 ',
          minoru.get_colored_name(),
          '에게 쫓기고 있는 것이었다…… 말이 나온 김에, 도대체 어떻게 인간이 ',
          taiki.uma_sex_title,
          '의 속도를 따라잡을 수 있는 걸까?',
        ]);
      }
      printButton('「천천히 가! 다치면 안돼!」', 1);
      await input();
      await printAndWait([
        '앞에 가던 ',
        taiki.get_colored_name(),
        '이 서서히 속도를 줄이자 초록색 옷을 입은 비서가 서둘러 ',
        you.get_colored_name(),
        '에게 감사를 표했다. 오늘도 착한 일 하나 했다!',
      ]);
    };
    f.title = '초록색 실루엣';
    return f;
  })(),

  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '학원 이사장 ',
        taste.get_colored_actual_name(),
        '가 고민에 빠져 있다. 재정 문제 때문인데, 또 다시 트레센의 예산이 초과되고 말았다——!!',
      ]);
      await printAndWait(
        '지금 이 주황머리 꼬마는 초록색 비서의 질책에 벌벌 떨고 있다…… 하지만 무시할 수 없는 재정 문제를 도대체 어떻게 해결해야 할까?',
      );
      printButton(
        '「수입 증대와 지출 절감이다. 내 급여를 먼저 삭감해!」（부채+40, 현재 육성중인 우마무스메의 스킬포인트+10)',
        1,
      );
      printButton('「별로 할 건 없네……」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('좋은 일을 한 것 같다!');
        await printAndWait('..하지만 이번 달은 컵라면으로 버텨야 할지도.');
      } else {
        await printAndWait('딱히 할 수 있는 건 없는 것 같다.');
      }
      return [ret];
    };
    f.title = '%TEEN% 이사장의 고민 1';
    return f;
  })(),

  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '학원 이사장 ',
        taste.get_colored_actual_name(),
        '의 고양이가 실종되었다! 고양이가 없어져 우울해하는 이사장 때문에 트레센의 운영 효율도 크게 떨어져 버렸다!',
      ]);
      printButton(
        '「모든 인력을 동원해서 반드시 고양이를 찾아내야 돼!」（기력-50，호감+40～60）',
        1,
      );
      printButton('「그래서?」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '고양이를 찾은 후 ',
          taste.get_colored_name(),
          '은 매우 기뻐했고 트레센도 다시 정상적으로 돌아왔다.',
        ]);
      } else {
        await printAndWait('별 거 아닌 것 같은데...애초에 이사장님 평소에 일 하시기는 하나?');
      }
      return [ret];
    };
    f.title = '%TEEN% 이사장의 고민 2';
    return f;
  })(),


  god_coin: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} _ 無意味な引数だが残す必要あり
     * @param {number} dice 祈りのダイス。0-1 の小数で、小さいほど良い
     * @param {number|undefined} god ランダムな女神の ID（その女神の好感が当たった場合）。全員が受肉済みなら undefined
     */
    const f = async (_, dice, god) => {
      await printAndWait('동전이나 하나 던져서 소원을 빌어 볼까...');
      if (dice < 0.4 && god) {
        await printAndWait(
          '이건...환청? 왠지 모르게 친근하고 신뢰가 가는 목소리가 들리네...',
        );
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('열정적인, 붉은 목소리……', {
              color,
            });
            break;
          case 341:
            await printAndWait('포용적인, 푸른 목소리……', {
              color,
            });
            break;
          case 342:
            await printAndWait('엄격한, 노란 목소리……', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('아…… 이거 어쩌면 될지도……?');
        await printAndWait(
          '하지만 그렇게 말은 해도…… 딱히 떠오르는 건 없는데, 곰곰이 생각해보니 뭔가 깨달은 것 같기도 하고……',
        );
      } else if (dice < 0.9) {
        await printAndWait('역시 아무 일도 일어나지 않았다……');
      } else {
        await printAndWait('줍는 순간 두 개가 되었다!');
      }
    };
    f.title = '세 여신상의 소원의 우물';
    return f;
  })(),

  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara プレイヤーの乳を飲むキャラ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara, you) => {
      await printAndWait([
        'トレーナー室へ入ると、',
        you.get_colored_name(),
        ' は朝食を終えた ',
        chara.get_colored_name(),
        ' が牛乳を飲んでいるところを見た。',
      ]);
      await printAndWait('그 우유 병의 포장…… 왠지 낯익은데……');
      await printAndWait([
        '그리고 ',
        chara.get_colored_name(),
        '의 눈빛이 왠지 모르게 좀 이상하다……',
      ]);
      await printAndWait('……분명 착각이겠지.');
    };
    f.title = '「아침 식사」';
    return f;
  })(),

  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} race_week 今週にレースがあり、未受肉の三女神がいるか
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        '의 몸 옆을 스치는 산들바람이 운동장 잔디의 상쾌한 향기를 실어 온다.',
      ]);
      printButton('「오늘 날씨 정말 좋네」(담당 우마무스메의 컨디션+1)', 1);
      if (race_week) {
        printButton(
          '「오늘 레이스도 순조롭게 진행되길」(??? 호감도+50)',
          2,
        );
      }
      return [await input()];
    };
    f.title = '바람이 찾아오다';
    return f;
  })(),

  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} no_ero_item 性玩具を持っていないか
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait(['상점가를 지나가다 보니, 한 가게에서 이벤트를 하고 있는 것을 발견했다:']);
      await printAndWait(['「가면라이더 흉내 내기, 따뜻한 마음 전하기～」']);
      await printAndWait([
        '가게 주인은 이 행사가 아이들에게 따뜻한 마음을 전하기 위해 마련된 것이라고 설명했지만, 옷은 충분해도 인력이 부족하다고 했다.',
      ]);
      await printAndWait([
        '그는 이렇게 해서 아이들의 생활이 더욱 풍요로워지기를 바란다고 한다.',
      ]);
      await printAndWait([
        '참가하면, 맞는 가면라이더 의상을 입어볼 수도 있다.',
      ]);
      printButton('「시간도 남으니 한번 참가해 볼까.」', 1);
      printButton('「아, 됐어. 이런 시끌벅적한 행사는 내 스타일이 아니야.」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '店主は ',
          you.get_colored_name(),
          ' の協力に礼を言い、更衣室へ案内し、好きな一着を選ばせた——',
        ]);
        printButton('「당근맨!」（명성+15）', 1);
        printButton('「마법소녀!(가면라이더 버전)」（우마코인+25）', 2);
        printButton(
          '「???一좀 이상한 옷」（명성+20，일부 담당 우마무스메의 컨디션+1）',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              '대호평이었다! 왠지 낯익은 학생들도 보이는 것 같은데?!',
            ]);
            break;
          case 2:
            await printAndWait([
              '반응이 아주 좋다! 비록 이 옷은 입기가 꽤 힘들지만……',
            ]);
            break;
          case 3:
            await printAndWait([
              '점원의 도움으로 타이트한 옷과 몇 조각의 이상한 천을 입었는데, 속옷처럼 보이는 그 천이 알고 보니 얼굴을 가리는 것뿐이라니?',
            ]);
            await printAndWait([
              '가게 마스코트로서의 효과는 좋지만, 뭔가 잃어버린 것 같은 기분이 든다……',
            ]);
        }
      }
      return ret;
    };
    f.title = '가면(?)라이더!';
    return f;
  })(),

  sr_strange_lunch: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '점심시간이 되자, ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 약속이라도 한 듯 옥상으로 향했다.',
      ]);
      await printAndWait([
        '어째서인지 오늘 ',
        chara.get_colored_name(),
        '이(가) 챙겨온 도시락은 평소보다 유난히 화려했다.',
      ]);
      println();
      await chara.say_and_wait([callname, ', 맛이 어떤지 한번 먹어봐.']);
      await chara.say_and_wait('나름 야심작이라구～');
      println();
      await printAndWait([
        you.get_colored_name(),
        '은(는) 도시락을 건네받아 아무 의심 없이 식사를 시작했다.',
      ]);
      await printAndWait([
        '맛있게 몇 입 먹고 나니, 몸이 점차 뜨거워지는 것이 느껴진다……',
      ]);
      println();
      await printAndWait([
        you.get_colored_name(),
        '이(가) 이상함을 느끼고 곁에 있는 ',
        chara.get_colored_name(),
        '을(를) 돌아보자, 그녀 역시 얼굴을 붉히고 있었다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '이(가) 무언가 물어보려던 찰나, 강렬한 입맞춤에 가로막혀 말이 끊기고 말았다.',
      ]);
      println();
      await printAndWait(['입술이 떨어지는 순간, 입가에 길게 은색 실이 이어졌다.']);
      printButton('「이건 어쩔 수 없겠네……」', 1);
      printButton('「나는 스승이다! 강철의 의지 발동!」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '옥상이라는 장소에도 불구하고, ',
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 끊임없이 서로를 갈구했다.',
        ]);
        await printAndWait([
          '하지만 점심시간이라는 사실을 깨달은 ',
          you.get_colored_name(),
          '은(는) 잡념을 떨치고 ',
          chara.get_colored_name(),
          '의 어깨를 붙잡았다……',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 세차게 고개를 저어 의지를 다잡고, 즉시 손에 든 도시락을 갈무리했다.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          '을(를) 남겨둔 채, 마치 도망이라도 치듯 서둘러 옥상을 떠났다……',
        ]);
      }
      return ret;
    };
    f.title = '묘한 점심 식사';
    return f;
  })(),

};
