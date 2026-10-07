// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/edu-17"),

  // [번역 완료] arim_kin_win_s_be
  arim_kin_win_s_be: (() => {
    const title = '마지막 선율';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('하아…… 하아……');
      await chara17.print_and_wait('하아…………');
      await chara17.print_and_wait(
        `${chara17.name} 앞의 세계가 격렬하게 요동치고 있었고, ${chara17.sex}의 시야에 들어오는 모든 것이 흐릿해졌다.`,
      );
      await chara17.print_and_wait(
        `해일처럼 몰려오는 현기증과 통증이 ${chara17.sex}을(를) 덮쳤다. 영역이 자신을 거부하고 있다는 것을——${chara17.name}은(는) 깨달았다.`,
      );
      await chara17.print_and_wait(`${chara17.sex}은(는) 더 이상 무소불위의 존재가 아니었다.`);
      await chara17.print_and_wait(
        `한 걸음을 내디딜 때마다 ${chara17.name}은(는) 거대한 위화감을 느꼈다.`,
      );
      await chara17.print_and_wait(
        `발을 딛고, 다시 들어 올린다. 격심한 통증에 ${chara17.sex}의 표정은 무섭게 일그러졌다.`,
      );
      await chara17.print_and_wait(
        `평소라면 가볍게 가를 수 있었던 바람이 마치 철벽처럼 가로막아 ${chara17.sex}을(를) 상처 입혔다.`,
      );
      await chara17.print_and_wait(
        `이 레이스에서 ${chara17.sex}은(는) 폭풍 속에서 양 날개가 꺾인 새와 같았다.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `눈꺼풀이 무거워지고, ${chara17.name}의 의식은 이미 몽롱해졌다.`,
      );
      await chara17.print_and_wait(
        '영역이 무너지고 있다. 그 느릿하게 흐르던 풍경들이 점차 움직이기 시작했다.',
      );
      await chara17.print_and_wait(
        '우마무스메들이 달리고 있다. 푸른 잔디를 차고 흙먼지를 일으키며 흩날리는 풀잎을 바람에 싣고 간다.',
      );
      await chara17.print_and_wait(
        '자신의 심장은 점점 더 빠르게 뛰는데, 정작 조금의 힘도 낼 수 없다.',
      );
      await chara17.print_and_wait(
        '몸의 부품들——근육과 힘줄, 내장이 거대한 관성에 의해 찢겨나가는 것 같다.',
      );
      await chara17.print_and_wait(
        '이 코너에서 멈추지 않는다면, 영역이 완전히 걷히는 그 순간——',
      );
      await chara17.print_and_wait('자신은 죽게 될 것이다.');
      if (i_emperor) {
        await chara17.say_and_wait(
          '코스는 천상의 길이 아니니, 결국은 멈춰야 할 때가 오는군.',
        );
      } else {
        await chara17.say_and_wait(
          '이것이 영역의 진실인가…… 본격화의 힘을 앞당겨 쓰는 대가……',
        );
      }
      await chara17.print_and_wait(
        '세대와 세대를 거듭하며 용자들은 영역에 발을 들였고, 자신의 미래와 이상 그리고 모든 가능성을 앞당겨 써버렸다.',
      );
      await chara17.print_and_wait(`이제 ${chara17.name}의 차례가 온 것이다.`);
      await chara17.print_and_wait(
        '자신의 생애, 나아가 생명의 끝을 마주했을 때 무엇을 해야 하는지, 아무도 가르쳐준 적이 없었다.',
      );
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '나의', color: emperor.color },
        { content: '（나의） 소중한 경험을', color: luna.color },
        { content: '네게', color: emperor.color },
        { content: ' 들려주마……', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('——오너라.');
      await chara17.print_and_wait(
        `자신의 숙명을 맞이하듯, ${chara17.name}은(는) 자신의 종착역을 향해 질주했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] arim_kin_win_s_ge
  arim_kin_win_s_ge: (() => {
    const title = '영역의 끝';
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('하아…… 하아……');
      await chara17.print_and_wait('하아…………');
      await chara17.print_and_wait(
        `${chara17.name} 앞의 세계가 격렬하게 요동치고 있었고, ${chara17.sex}의 시야에 들어오는 모든 것이 흐릿해졌다.`,
      );
      await chara17.print_and_wait(
        `해일처럼 몰려오는 현기증과 통증이 ${chara17.sex}을(를) 덮쳤다. 영역이 자신을 거부하고 있다는 것을——${chara17.name}은(는) 깨달았다.`,
      );
      await chara17.print_and_wait(`${chara17.sex}은(는) 더 이상 무소불위의 존재가 아니었다.`);
      await chara17.print_and_wait(
        `한 걸음을 내디딜 때마다 ${chara17.name}은(는) 거대한 위화감을 느꼈다.`,
      );
      await chara17.print_and_wait(
        `발을 딛고, 다시 들어 올린다. 격심한 통증에 ${chara17.sex}의 표정은 무섭게 일그러졌다.`,
      );
      await chara17.print_and_wait(
        `평소라면 가볍게 가를 수 있었던 바람이 마치 철벽처럼 가로막아 ${chara17.sex}을(를) 상처 입혔다.`,
      );
      await chara17.print_and_wait(
        `이 레이스에서 ${chara17.sex}은(는) 폭풍 속에서 양 날개가 꺾인 새와 같았다.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `눈꺼풀이 무거워지고, ${chara17.name}의 의식은 이미 몽롱해졌다.`,
      );
      await chara17.print_and_wait(
        '영역이 무너지고 있다. 그 느릿하게 흐르던 풍경들이 점차 움직이기 시작했다.',
      );
      await chara17.print_and_wait(
        '우마무스메들이 달리고 있다. 푸른 잔디를 차고 흙먼지를 일으키며 흩날리는 풀잎을 바람에 싣고 간다.',
      );
      await chara17.print_and_wait(
        '자신의 심장은 점점 더 빠르게 뛰는데, 정작 조금의 힘도 낼 수 없다.',
      );
      await chara17.print_and_wait(
        '몸의 부품들——근육과 힘줄, 내장이 거대한 관성에 의해 찢겨나가는 것 같다.',
      );
      await chara17.print_and_wait(
        '이 코너에서 멈추지 않는다면, 영역이 완전히 걷히는 그 순간——',
      );
      await chara17.print_and_wait('자신은 죽게 될 것이다.');
      if (i_emperor) {
        await chara17.say_and_wait(
          '코스는 천상의 길이 아니니, 결국은 멈춰야 할 때가 오는군.',
        );
      } else {
        await chara17.say_and_wait(
          '이것이 영역의 진실인가…… 본격화의 힘을 앞당겨 쓰는 대가……',
        );
      }
      await chara17.print_and_wait(
        '세대와 세대를 거듭하며 용자들은 영역에 발을 들였고, 자신의 미래와 이상 그리고 모든 가능성을 앞당겨 써버렸다.',
      );
      await chara17.print_and_wait(`이제 ${chara17.name}의 차례가 온 것이다.`);
      await chara17.print_and_wait(
        '자신의 생애, 나아가 생명의 끝을 마주했을 때 무엇을 해야 하는지, 아무도 가르쳐준 적이 없었다.',
      );
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '당신은', color: emperor.color },
        { content: ' 나와', color: luna.color },
        { content: '（나와）', color: emperor.color },
        { content: ' 함께할 거죠?', color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `가슴 속의 공기를 남김없이 토해내며, 수천수만 관중의 시선 속에서 ${chara17.name}이(가) 가속했다!!!`,
      );
      await era.printAndWait('길이 이어지지 않는다면 스스로 딛고 나아가리라!');
      await era.printAndWait([
        {
          content: '루나',
          color: luna.color,
        },
        '&',
        { content: '황제', color: emperor.color },
        '「',
        { content: '우리의', color: emperor.color },
        { content: ' 꿈을', color: luna.color },
        { content: '', color: emperor.color },
        { content: ' 위하여!!!', color: luna.color },
        '」',
      ]);
      era.printButton('「달려라!!!!!!!」', 1);
      await era.input();
      await you.print_and_wait('달려라!!!!!!!');
      await you.print_and_wait('달려라!!!!!!!');
      await era.printAndWait(
        `${you.name}은(는) 이미 자신의 목소리가 갈라지든 말든 상관없었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 아는 것은 그저 ${chara17.name}이(가) 두 사람의 꿈을 향해 정면으로 나아가고 있다는 사실뿐이었다.`,
      );
      await era.printAndWait('다 왔어! 거의 다 왔다고!');
      await era.printAndWait(
        '성대한 환호성 속에서, 최강의 우마무스메는 미지의 저 너머를 향해 발을 내디뎠다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_arim_kin_c
  before_arim_kin_c: (() => {
    const title = '무적의 위용';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        '재팬 컵과 달리, 매년 열리는 아리마 기념——한 해를 마무리하는 그랑프리이자 오랫동안 가장 많은 주목을 받아온 이 레이스는 단순히 등록만으로 출주가 결정되는 것이 아니다.',
      );
      await era.printAndWait(
        '매년 레이스 전, 일본 전역의 팬들이 투표를 진행해 대중이 레이스에 나갈 자격이 있다고 인정하는 우마무스메를 선출한다.',
      );
      await era.printAndWait(
        `다시 말해, 이곳에 설 수 있는 ${chara17.uma_sex_title}은(는) 하나같이 사람들에게 깊은 인상을 남긴 강자들뿐이라는 뜻이다.`,
      );
      await era.printAndWait(
        '루나는 압도적인 득표수로 뽑혔음에도 불구하고 인기 순위 1위를 차지하지는 못했다.',
      );
      await era.printAndWait(
        '사람들은 수군거렸다. 재팬 컵이 당대의 강자들이 세계의 거물들에 맞서는 자리라면, 아리마는 국내 최강자를 가리는 자리라고.',
      );
      era.printButton('（투표가 참가자의 진정한 실력을 다 반영하는 건 아니야.）', 1);
      era.printButton('（하지만 투표는 분명 어느 정도의 현실을 투영하고 있어.）', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 걱정스러운 마음으로 ${chara17.name}의 대기실로 돌아갔다. ${chara17.sex}은(는) 눈을 감고 정신을 가다듬고 있었다.`,
      );
      await era.printAndWait(
        '즉, 여전히 누군가는 루나가 경험이 풍부한 선배들 앞에서 고전할 것이라 생각한다는 의미다.',
      );
      await era.printAndWait(
        '하지만 그것은 문제를 해결할 방법 또한 단순 명료하다는 뜻이기도 했다.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('짐의 권능을 보여줄 뿐이다.');
      } else {
        await chara17.say_and_wait('해야 할 일은 단 하나뿐입니다.');
      }
      await era.printAndWait(`${chara17.teen_sex_title}은(는) 두 눈을 뜨며 나지막이 중얼거렸다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_japa_cup_s
  before_japa_cup_s: (() => {
    const title = '꺼져가는 불씨（상）';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `${chara17.uma_sex_title}에게는 태생적인 승부욕이 있다. ${chara17.couple_title}은(는) 언제나 더 멀리 질주하고자 한다.`,
      );
      await era.printAndWait(
        `정해진 거리의 코스에서 ${chara17.couple_title}은(는) 모든 것을 쏟아부어 가장 먼저 결승선에 도달하는 승자가 되려 한다.`,
      );
      await era.printAndWait(
        '마치 그러한 소망에 응답하듯, 우마무스메들은 본격화 시기에 급격히 성장하여 마침내 코스에 설 수 있게 된다.',
      );
      await era.printAndWait(
        '그러나 동시에 시간이 흐름에 따라——정확히는 아마 3~4년 사이에 본격화의 힘은 서서히 쇠퇴하기 마련이다.',
      );
      await era.printAndWait(
        '마치 연료가 바닥난 것처럼. 그 시기가 지나면 우마무스메는 다시 평범한 이들과 다를 바 없어진다.',
      );
      await era.printAndWait(
        '이것이 우마무스메들이 죽을힘을 다해 코스에 서는 이유다——자신의 이야기를 남기고 싶어서, 사람들에게 잊히고 싶지 않아서.',
      );
      await era.printAndWait('그 마음을 품고 우마무스메들은 몸을 던진다.');
      await era.printAndWait(
        '그중에서도 빼어난 이들은 한계에 다다른 경쟁 속에서 【영역】에 발을 들인다.',
      );
      await era.printAndWait('그것은 모든 것을 초월하는 힘이다.');
      await era.printAndWait('하지만, 그 힘의 대가는 무엇인가?');
      await era.printAndWait(
        `루나가 영역에 들어갈 수 있게 된 뒤부터 ${you.name}은(는) 끊임없이 이 의문을 고민해 왔다.`,
      );
      await era.printAndWait(
        '운명은 결코 자비롭지 않다. 모든 것에는 보이지 않는 가격표가 붙어 있는 법이다.',
      );
      await era.printAndWait(
        `심볼리 가문처럼 강대한 혈통일지라도 ${chara17.couple_title}은(는) 혈맥에 흐르는 폭력성을 억제하지 못해 자멸의 길을 걷기도 한다.`,
      );
      await era.printAndWait(
        `루나는 영역에 들어가는 감각을 묘사한 적이 있다. 모든 것이 정지하고, ${chara17.sex}만이 끝없는 초원에 서 있는 느낌이라고.`,
      );
      await era.printAndWait(
        `${chara17.sex}은(는) 무한한 힘이 솟구치는 것을 느낀다. 마치 자신의 미래와 거래한 것처럼.`,
      );
      era.drawLine();
      await era.printAndWait('재팬 컵.');
      await era.printAndWait(
        `레이스 전, ${you.name}은(는) ${chara17.name}을(를) 뚫어지게 바라보았다. ${you.name}은(는) 알고 있었다. ${chara17.sex}은(는) 이미 최상의 상태로 스스로를 조율했다.`,
      );
      await era.printAndWait(
        `하지만 강적을 이기기 위해 ${chara17.sex}은(는) 분명 다시 한번 영역에 들어갈 것이다. 아니, 들어갈 수밖에 없을 것이다.`,
      );
      await era.printAndWait(
        `마치 타오르는 불꽃처럼, 모든 연료를 불태우기 전까지는 멈추지 않을 불꽃처럼.`,
      );
      era.printButton(`「조심해 줘.」`, 1);
      era.printButton(`「불길한 예감이 들어.」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name}은(는) ${you.name}을(를) 바라보았다. 그제야 ${you.name}은(는) ${chara17.sex}의 손이 미세하게 떨리고 있음을 깨달았다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('그렇다면 황제의 자태를 가슴 깊이 새겨두도록.');
      } else {
        await chara17.say_and_wait(
          '걱정하는 건 압니다. 하지만 우리의 꿈을 위해 저는 물러서지 않겠습니다.',
        );
      }
      await era.printAndWait(
        `말을 마친 ${chara17.teen_sex_title}은(는) 코스를 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] begin_race_win
  begin_race_win: (() => {
    const title = '진격의 시작';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `심볼리 가문과 약간의 상의를 거친 뒤, ${you.name}은(는) 루나의 데뷔전을 신청했다.`,
      );
      await era.printAndWait('바로 재팬 컵 당일이다.');
      await era.printAndWait(
        `루나는 ${you.name}의 판단을 듣고 미간을 찌푸렸으나, 결국 반대하지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이것이 상당히…… 악의적이라는 것을 알고 있었지만, 확실히 어쩔 수 없는 선택이었다.`,
      );
      await era.printAndWait(
        '일본은 자신감을 되찾을 필요가 있었다. 설령 미래에 희망을 거는 일일지라도.',
      );
      await era.printAndWait(
        `그렇기에 경쟁이라고 부르기도 민망한 압도적인 레이스를 목격했을 때, ${you.name}은(는) 본능적으로 안도의 한숨을 내쉬었다.`,
      );
      await era.printAndWait(
        `사실 정신을 차렸을 때는 이미 자신의 두 손이 꽉 쥐어져 있었다.`,
      );
      await you.say_and_wait('내가 누구한테 주먹이라도 휘두르려는 건가? 젠장……', true);
      await era.printAndWait(
        `${you.name}은(는) 믿기지 않는다는 듯 자신의 손을 바라보았고, 시야가 떨리는 것을 느꼈다.`,
      );
      await era.printAndWait(
        `그뿐만 아니라 ${you.name}은(는) 점점 목이 마르고 현기증이 나는 것을 느꼈다.`,
      );
      await era.printAndWait(`황제. 황제는 얼마나…… 얼마나…… 얼마나…… 강한 것인가!!!`);
      await era.printAndWait(
        `${you.name}은(는) 지금 이 기분을 형언할 수 없었지만, 단 한 가지는 확실히 알 수 있었다——`,
      );
      await era.printAndWait(`${you.name}은(는) 이토록 비겁한 자다.`);
      await era.printAndWait(
        `그렇지 않다면 ${you.name}의 이 미소를, 그리고 외국인들의 경악 섞인 탄성을 들었을 때의 이 기쁨을 어떻게 설명할 수 있겠는가?`,
      );
      era.printButton('（전 세계 사람들에게 한 가지 사실을 깨닫게 하기 위해서다.）', 1);
      era.printButton('（보았는가? 세계여——）', 2);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 호탕하게 웃었다.`);
      era.printButton(`「루나, ${luna.sex}은(는) 세계를 휩쓸 거야.」`, 1);
      era.printButton(`「황제, ${luna.sex}은(는) 세계를 휩쓸 거야!」`, 2);
      await era.input();
      await era.printAndWait('그날, 모든 이들이 마음을 빼앗겼다.');
      await era.printAndWait(
        `그날, 루나는 돌아와서 ${you.name}과(와) 축하하는 대신 그저 슬픈 듯 ${you.name}의 품으로 뛰어들었다.`,
      );
      await era.printAndWait(
        `그날, 일본의 ${luna.uma_sex_title}들은 다시 한번 재팬 컵에서 패배했다.`,
      );
      await era.printAndWait(
        '괜찮아, 괜찮아…… 루나만 있다면 모든 것이 다 잘될 거야.',
      );
      await era.printAndWait(
        `${you.name}은(는) 루나를 달랬고, 모든 걱정은 연기처럼 사라졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] faith_collapse
  faith_collapse: (() => {
    const title = '신념의 붕괴';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `${you.name}은(는) 입을 벌렸으나, 끝내 단 한 마디도 내뱉지 못했다.`,
      );
      await era.printAndWait('졌다.');
      await era.printAndWait(
        `${you.name}은(는) 떨리는 손으로 관중석 난간을 붙잡으며 쓰러지지 않으려 애썼다.`,
      );
      await era.printAndWait(
        '주변 사람들이 심볼리 루돌프의 입착을 축하하며 인사를 건네왔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 겉치레를 할 여유조차 없이 곧장 경기장을 빠져나왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지하 통로를 향해 달렸다. 레이스가 끝나면 우마무스메들이 대기실로 돌아간다는 것을 알고 있기 때문이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 숨을 헐떡이며 ${luna.name}의 대기실 문 앞에 도착했지만, 문은 아무리 밀어도 열리지 않았다.`,
      );
      era.printButton('「루나!?」', 1);
      era.printButton('「폐하!!!」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `문 너머에서 구토하는 소리가 들려왔다. ${you.name}은(는) 누군가에게 머리를 세게 얻어맞은 듯한 충격을 받았다.`,
      );
      await luna.say_and_wait('괜찮아………… 잠시 시간만 주면…………');
      await luna.say_and_wait('난……………………………………');
      await era.printAndWait(
        `${you.name}은(는) 문을 두드렸지만, 들려오는 것은 문 너머 ${luna.teen_sex_title}의 구토와 흐느낌뿐이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무력하게 바닥에 주저앉았다…… ${you.name}은(는) 자신이 루나의 기대를 저버렸음을 깨달았다.`,
      );
      await era.printAndWait(`${you.name}은(는) ${luna.sex}에게 아무런 도움도 되지 못했다.`);
      await era.printAndWait(`우리들은…… 패배했다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] fall_into_hell
  fall_into_hell: (() => {
    const title = '심연으로의 추락';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `라이벌들이 차례로 경기장에 들어설 때, ${you.name}은(는) 문득 루나의 상태가 이상하다는 것을 알아차렸다.`,
      );
      await era.printAndWait(
        `${luna.sex}은(는) 의자에 멍하니 앉아 당신을 바라보고 있었다.`,
      );
      await era.printAndWait(`황제는 어디 있지? ${you.name}은(는) 당황했다.`);
      await era.printAndWait(
        `${you.name}의 의아한 시선에 루나는 입을 열었지만 좀처럼 말이 나오지 않는 듯했다.`,
      );
      await luna.say_and_wait('그녀가…… 다시 나오는 건 싫어!');
      era.printButton('「루나, 곧 레이스가 시작돼!」', 1);
      era.printButton('「괜찮아, 내가 곁에 있어 줄게.」', 2);
      await era.input();
      await era.printAndWait(
        `하지만 ${you.name}의 끈질긴 설득에도 루나는 고개를 저으며 거부했다.`,
      );
      await era.printAndWait(
        '——레이스가 코앞이었다. 지금 황제가 다시 「나타나지」 않는다면 모든 것이 수포로 돌아간다.',
      );
      await era.printAndWait(
        `어쩔 수 없이 ${you.name}은(는) 목소리를 가다듬고, 마치 우스꽝스러운 어릿광대처럼 소리를 높였다.`,
      );
      era.printButton(
        '「황제여, 위대한 나의 황제여! 들리십니까? 만백성의 저 천둥 같은 함성이!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `루나는 여전히 울고 있었다. ${you.name}의 마음속에서 알 수 없는 분노가 치밀어 올랐다. 하필 이 중요한 때에……!`,
      );
      era.printButton(
        '「폐하, 당신께서 잠드신 사이 역적들이 당신의 영광을 모독하고 있습니다.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `루나는 그저 무력하게 고개를 저었다. ${you.name}은(는) 이를 악물었다.`,
      );
      era.printButton('「부디 깨어나시어, 하늘을 뒤덮는 진노를 내리소서……」', 1);
      await era.input();
      await era.printAndWait(
        `편집증에 사로잡힌 ${you.name}의 얼굴은 일그러졌고 목소리는 쉬어 터졌다.`,
      );
      await era.printAndWait(
        '그 광기가 효과가 있었던 것일까, 루나의 몸이 점차 떨림을 멈췄다.',
      );
      await era.printAndWait(
        `${luna.sex}은(는) ${you.name}을(를) 바라보았다. 두 눈에 가득했던 공포는 서서히 걷히고, 그 자리를 소름 끼칠 정도로 날카로운 기색이 채우기 시작했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 안도의 한숨을 내쉬었지만, 눈앞의 우마무스메는 갑자기 머리를 감싸 쥐었다.`,
      );
      await era.printAndWait(`루나가 혼란스러운 눈으로 ${you.name}을(를) 바라봤다.`);
      await luna.say_and_wait(
        `${luna.couple_title}은(는), 제 친구가 아니었나요?`,
      );
      era.printButton(`「……${luna.couple_title}은(는) 네 친구야.」`, 1);
      era.printButton(`「폐하, ${luna.couple_title}은(는) 만 번 죽어 마땅한 죄인입니다!」`, 2);
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          '꼭 이렇게 해야만 해? 꼭 그 끔찍한 모습으로 변해야만 하느냐고!',
        );
        era.printButton('「아니…… 아니야! 지금 당장 기권 처리하고 올게!」', 1);
        era.printButton('「폐하! 당신은 태생부터 황제이십니다!」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            '난 황제가 아니야! 제발 루나를 없애지 마. 이대로라면 루나는 정말 사라져 버릴 거야.',
          );
          await luna.say_and_wait('당신이 아직 나를 사랑한다면, 제발……');
          await era.printAndWait(
            `루나는 절망적인 눈빛으로 ${you.name}을(를) 바라보며, 마치 구원의 동아줄이라도 잡으려는 듯 손을 뻗었다.`,
          );
          await luna.say_and_wait('제발…… 나를 떠나지 마……');
          await era.printAndWait(
            `${you.name}은(는) 두 눈을 감았다. 루나는 이토록 ${you.name}을(를) 신뢰하고 사랑하고 있었다. 그러니——`,
          );
          era.printButton('「내 손을 잡아, 루나!」', 1);
          era.printButton('「황제 폐하 만세!」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `말을 내뱉는 순간 ${you.name}은(는) 시간이 얼어붙는 것만 같았다. 그러나 다음 순간, ${you.name}은(는) 숨을 쉴 권리를 빼앗겼다.`,
            );
            await era.printAndWait(
              `루나…… 아니, 황제가 손을 뻗어 ${you.name}의 목을 거세게 쥐어짰다.`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `당신의 말을 들은 루나는 마침내 안도한 듯했다. ${luna.sex}은(는) 가라앉지 않기 위해 지푸라기라도 잡는 심정으로 ${you.name}에게 급히 손을 뻗었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 탄식하지 않을 수 없었다——자신이 루나에게 대체 무슨 짓을 시킨 것인가.`,
        );
        await era.printAndWait(
          '어째서 진작 루나의 이상을 알아채지 못했을까. 어떤 거친 파도가 몰아친다 해도.',
        );
        await era.printAndWait(
          `하지만 지금이라도 늦지 않았다! 루나의 트레이너이자 보호자, 그리고…… 연인으로서 ${you.name}은(는) 루나를 위해 모든 풍파를 막아낼 것이다.`,
        );
        era.printButton('「루나, 나는……」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 루나를 바라보며 ${luna.sex}의 손을 맞잡으려 했다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 수없이 맞잡았고 영원히 놓지 않겠다고 맹세했던 그 손이 갑자기 앞으로 튀어나왔다.`,
        );
        await era.printAndWait('강철 집게처럼 목을 무자비하게 죄어 왔다.');
        await emperor.say_and_wait('루나? 그게 누구냐?');
      }
      await era.printAndWait(
        `황제는 경멸 어린 눈으로 ${you.name}의 목을 쥔 채 몸을 일으켰다.`,
      );
      await emperor.say_and_wait(
        '짐이 얼마나 잠들어 있었지? 감히 짐의 영광을 탐내는 도적놈들은 어디 있느냐?',
      );
      await era.printAndWait(
        `${emperor.sex}은(는) 주위를 훑어보았다. 놀랍게도 잠에서 깨어날 때마다 ${emperor.sex}은(는) 다른 장소에 서 있었다.`,
      );
      await era.printAndWait(
        '그리고 왜 깨어날 때마다 감히 짐의 의지를 거스르려는 놈들이 나타나는 것인가?',
      );
      await era.printAndWait(
        `${you.name}은(는) 말도 못 하고 떨쳐낼 수도 없었다. 그저 입을 벌린 채 꺽꺽거리며 가쁜 숨을 몰아쉴 뿐이었다.`,
      );
      await era.printAndWait(
        `산소 부족으로 ${you.name}의 시야가 서서히 흐려졌고 의식은 멀어져 갔다.`,
      );
      await emperor.say_and_wait('흥.');
      await era.printAndWait(
        `대답이 없는 것이 지루해진 듯, 황제는 아무렇게나 ${you.name}을(를) 바닥으로 내팽개쳤다. 둔탁한 소리와 함께 바닥에 처박힌 ${you.name}은(는) 장기가 으스러진 듯한 고통에 격렬하게 구토했다.`,
      );
      await era.printAndWait(
        `일어설 기력조차 없는 ${you.name}은(는) 바닥에 엎드린 채 황제의 발소리가 멀어지는 것을 들었다.`,
      );
      await era.printAndWait(
        `의식이 사라져가는 끄트머리에서 ${you.name}은(는) 다시 한번 루나의 울음소리를 들은 것 같았다.`,
      );
      await era.printAndWait('미안해…… 이제는 돌이킬 수 없어.');
      await era.printAndWait(`${you.name}은(는) 의식을 잃었다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] japa_cup_win_s
  japa_cup_win_s: (() => {
    const title = '꺼져가는 불씨（하）';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name}은(는) ${chara17.name}이(가) 결승선을 통과하는 것을 지켜보았다. ${chara17.sex}은(는) 온몸을 떨며 관중들의 환호 속에서 서둘러 자리를 떠났다.`,
      );
      await era.printAndWait(`${you.name}은(는) 급히 대기실로 달려갔다.`);
      await era.printAndWait('틀림없다.');
      await era.printAndWait(
        `${you.name}은(는) 미칠 것만 같았다. 경기장에서 ${chara17.sex}이(가) 영역 속에서 무너질 뻔한 것을 보고, ${you.name}은(는) 그 대가가 무엇인지 깨달았다.`,
      );
      await era.printAndWait(
        `영역——그것의 연료는 우마무스메들의 미래다! 그렇지 않고서야 ${chara17.name}이(가) 이토록 큰 상처를 입을 리 없었다. 마치, 마치……`,
      );
      await era.printAndWait('본격화의 힘이 사라진 것만 같았다.');
      await era.printAndWait(
        `${you.name}이(가) 대기실에 도착했을 때 갑자기 큰 소음이 들렸다! ${you.name}이(가) 문을 열어보니 벽에 커다란 구멍이 뚫려 있었다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('짐의 힘이 레이스 도중에 갑자기 사라지다니?');
      } else {
        await chara17.say_and_wait('미안해요. 감정이 조금 격해져서……');
      }
      await era.printAndWait(
        `${you.name}은(는) 서둘러 다가가 피투성이가 된 ${chara17.name}의 손을 살피며 곧바로 구급상자를 찾아 나섰다.`,
      );
      await era.printAndWait(
        `이대로라면 승리는커녕 ${chara17.sex}은(는) 코스에 서는 것조차 불가능할지 모른다.`,
      );
      await chara17.say_and_wait('설령 그렇다 해도, 저는 발걸음을 멈추지 않겠습니다.');
      await era.printAndWait(
        `${you.name}은(는) 깜짝 놀라 고개를 들었지만, ${chara17.name}의 눈에는 ${you.name}이(가) 도저히 이해할 수 없는 감정들이 서려 있었다.`,
      );
      await era.printAndWait('경악과 무념, 그리고 광희와 광노.');
      await era.printAndWait([
        { content: '???「영역이 사라지던 그 찰나에, ', color: luna.color },
        { content: '보았다——', color: emperor.color },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '？？？「', color: emperor.color },
        { content: '조금만 더……', color: luna.color },
        { content: '아주 조금만 더 하면', color: emperor.color },
        { content: '（에덴에）', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name}은(는) 대답할 말을 찾지 못한 채 터져 나오려는 눈물을 참으며 ${chara17.name}의 상처를 치료했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] oc_95_1
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('새해이기에 더욱 바쁘다.');
      await era.printAndWait(
        `한겨울의 추위 속에서 ${you.name}이(가) 내뱉은 숨결이 금세 하얀 안개로 변했다.`,
      );
      await era.printAndWait(
        `또다시 찾아온 새해, ${you.name}은(는) 루나의 뒤에 서서 ${luna.sex}의 업무를 보좌했다. 고개를 숙이고, 선물을 받고, 답례를 한다.`,
      );
      await era.printAndWait(
        '지인들에게 신년 인사를 건네고, 신년 결의 대회를 개최하며, 작년에 남겨진 업무들을 마무리한다……',
      );
      await era.printAndWait(
        `루나의 업무를 아주 조금 분담했을 뿐인데도 ${you.name}은(는) 정신이 아득해질 지경이었다.`,
      );
      await era.printAndWait(
        `그제야 ${you.name}은(는) 깨달았다. 1년 전, 루나가 왜 황제에게 대신 업무를 맡기고 싶어 했는지를.`,
      );
      await luna.say_and_wait('왠지 모르겠지만, 당신 지금 무척 실례되는 생각을 하는 것 같네요.');
      await era.printAndWait(
        `단계적인 업무를 해결한 뒤에야 겨우 참배할 시간이 생겼다. 길을 걷던 중 루나가 왠지 모르게 불쑥 중얼거렸다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 서둘러 부정했다. 루나는 긍정도 부정도 하지 않은 채 ${luna.sex}은(는) 신사의 종과 북을 바라보며 두 눈을 감았다.`,
      );
      await era.printAndWait(
        `새로운 일 년, 루나의 소원은 무엇일까? ${you.name}은(는) 묻지 않았다. 원래 소원은 입 밖으로 내뱉으면 이루어지지 않는 법이니까.`,
      );
      await era.printAndWait(
        `의식을 마친 모양이다. 루나는 눈을 뜨고 고개를 치켜들며 ${you.name}의 모습을 따라 하듯 숨을 크게 내뱉었다.`,
      );
      await era.printAndWait(
        `한 줄기 하얀 김이 흩어졌다. ${luna.sex}은(는) 멍하니 허공을 바라보다가 이내 고개를 돌려 두 손을 모으고 ${you.name}에게 지친 미소를 지어 보였다.`,
      );
      await luna.say_and_wait('어쩌면 저 또한 실례되는 생각을 하고 있었을지도 모르겠네요.');
      await era.printAndWait(
        `그 순간 ${you.name}의 얼굴이 확 붉어졌다. 그동안 겪어온 파란만장한 일들이 떠올라 감회가 새로웠다.`,
      );
      await era.printAndWait(`${you.name}이(가) 정중하게 루나에게 말했다.`);
      era.printButton(
        '「잘 먹고 잘 자서 건강에 신경 쓰길 바라.」（스태미나+20）',
        1,
      );
      era.printButton(
        '「네가 진정한 황제가 되기를 기원할게.」（모든 능력+5）',
        2,
      );
      era.printButton(
        '「너무 깊게 생각하지 말고 네가 좋아하는 걸 즐겼으면 좋겠어.」（스킬 Pt+35）',
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `${you.name}의 축복을 듣고서도 루나는 대답하지 않았다. 그저 살며시 당신의 팔에 기대어 피곤한 듯 두 눈을 감을 뿐이었다.`,
      );
      await era.printAndWait('이 찰나의 휴식이 지금 이 순간에는 무엇보다 소중하게 느껴졌다.');
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_win
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title} 따위는 짐의 적수조차 되지 못하는군. 고작 이 정도 수준에 짐이 직접 나서야 했나?`,
        );
      } else {
        await chara17.say_and_wait(
          '……이것이 당신이 원하던 결말이라면, 저는 반대하지 않겠습니다.',
        );
      }
      era.printButton('「어쩔 수 없는 선택이었어.」', 1);
      era.printButton('「넌 더 잘할 수 있어.」', 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('흥.');
        } else {
          await chara17.say_and_wait('알고 있어요…… 하아.');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('어릿광대 주제에 제법 기세등등하군? 흥……');
        } else {
          await chara17.say_and_wait('저는 그런 기대를 하지 않아요.');
        }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] re_bad_end_emperor
  re_bad_end_emperor: (() => {
    const title = '황제의 즉위';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(`${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`);
      await era.printAndWait(
        `${chara17.name}이(가) 멀리 석양 아래 서 있었고, 바람은 푸른 잔디와 ${chara17.sex}의 흐트러진 머리카락을 흔들었다.`,
      );
      await era.printAndWait(
        `달밤이 다가오고 있었지만 태양은 아직 지지 않았다. ${chara17.sex}은(는) 등을 돌리고 있어 ${you.name}은(는) ${chara17.sex}의 지금 표정을 볼 수 없었다.`,
      );
      await era.printAndWait(
        `${chara17.sex}은(는) 아직 우승의 여운에 잠겨 있을 수도 있고, 혹은 ${you.name}이(가) 알지 못하는 격정을 되새기고 있을지도 모른다.`,
      );
      await era.printAndWait(
        `아니면 ${chara17.sex}은(는) 그저 지쳐서 혼자 있고 싶은 것일지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 힘없이 바닥에 주저앉았다. 계속된 피로로 ${you.name}은(는) 일어설 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 보았고, 맑은 하늘 한구석에 걸린 달을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${chara17.sex}의 부름을 들었다. 강렬한 불안감을 안고 ${you.name}은(는) ${chara17.sex}을(를) 바라봤지만, ${chara17.sex}에게는 아무 대답도 하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지금 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주하고 있는 이는 루나인가, 아니면 황제인가?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
      );
      await era.printAndWait(
        '???「한쪽은 슬픔에, 한쪽은 분노에. 마치 달과 태양처럼 만나지 못한 채 서로를 밀어내지.」',
      );
      await era.printAndWait(
        `${chara17.sex}는 끝없는 하늘을 응시했고, 그 표정은 마치 심연을 마주한 듯 무거웠다.`,
      );
      await emperor.say_as_unknown_and_wait(
        '얼마 전, 짐은 경기장에서 거의 죽을 뻔했다. 하지만 마지막 순간, 가냘픈 목소리가 짐을 북돋웠지.',
      );
      await era.printAndWait(`${you.name}은(는) 멍하니 ${chara17.sex}을(를) 바라봤다.`);
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex}이(가) 짐을 버티게 했다. ${chara17.sex}은(는) 말했다. 『난 네가 정말 싫지만, 우리들의 꿈을 위해 단 한 가지만 빌겠어.』라고.`,
      );
      await emperor.say_as_unknown_and_wait(
        `???「승리를 거머쥐고, ${you.actual_name}을(를) 만나러 가라고.」`,
      );
      await emperor.say_as_unknown_and_wait(
        `『비록 앞으로 우리가 영원히 다시 만나지 못하더라도』, ${chara17.sex}은(는) 말했다…… ${chara17.sex} 역시 모든 것을 바치겠다고.`,
      );
      await era.printAndWait(
        `황제의 날카로운 눈빛에 미망이 서렸다. ${chara17.sex}은(는) 자신의 머릿속에서 누가 그토록 소란스럽게 굴었는지 도무지 기억해낼 수 없었다.`,
      );
      await emperor.say_and_wait(`${chara17.sex}은(는) 누구지?`);
      await era.printAndWait('해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.');
      await era.printAndWait('하늘이 너무나 밝아, 달이 자취를 감추었다.');
      await era.printAndWait('오직 태양의 끝없는 광채만이 남았다.');
      await era.printAndWait(`${you.name}은(는) 고개를 숙였고, 눈시울이 붉어졌다.`);
      era.printButton('「폐하, 그녀는 제게 정말 소중한 사람이었습니다.」', 1);
      era.printButton('「……누구였을까요?」', 2);
      await era.input();
      await emperor.say_and_wait('그렇군.');
      await era.printAndWait('무거운 발걸음을 떼며, 황제는 태양이 비치는 방향으로 걸어갔다.');
      await era.printAndWait(
        `${you.name}은(는) ${emperor.sex}이(가) 어디로 가는지 알지 못했다.`,
      );
      await era.printAndWait([
        `하지만 ${you.name}은(는) 떨리는 몸을 이끌고 일어나 `,
        emperor.get_colored_name(),
        `의 뒤를 따랐다——${emperor.sex}이(가) 어디로 향하든 상관없이.`,
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] re_bad_end_luna
  re_bad_end_luna: (() => {
    const title = '영원한 둥근 달';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(`${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`);
      await era.printAndWait(
        `${chara17.name}이(가) 멀리 석양 아래 서 있었고, 바람은 푸른 잔디와 ${chara17.sex}의 흐트러진 머리카락을 흔들었다.`,
      );
      await era.printAndWait(
        `달밤이 다가오고 있었지만 태양은 아직 지지 않았다. ${chara17.sex}은(는) 등을 돌리고 있어 ${you.name}은(는) ${chara17.sex}의 지금 표정을 볼 수 없었다.`,
      );
      await era.printAndWait(
        `${chara17.sex}은(는) 아직 우승의 여운에 잠겨 있을 수도 있고, 혹은 ${you.name}이(가) 알지 못하는 격정을 되새기고 있을지도 모른다.`,
      );
      await era.printAndWait(
        `아니면 ${chara17.sex}은(는) 그저 지쳐서 혼자 있고 싶은 것일지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 힘없이 바닥에 주저앉았다. 계속된 피로로 ${you.name}은(는) 일어설 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 보았고, 맑은 하늘 한구석에 걸린 달을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${chara17.sex}의 부름을 들었다. 강렬한 불안감을 안고 ${you.name}은(는) ${chara17.sex}을(를) 바라봤지만, ${chara17.sex}에게는 아무 대답도 하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지금 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주하고 있는 이는 루나인가, 아니면 황제인가?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
      );
      await era.printAndWait(
        '???「한쪽은 슬픔에, 한쪽은 분노에. 마치 달과 태양처럼 만나지 못한 채 서로를 밀어내지.」',
      );
      await era.printAndWait(
        `${chara17.sex}는 끝없는 하늘을 응시했고, 그 표정은 마치 심연을 마주한 듯 무거웠다.`,
      );
      await luna.say_as_unknown_and_wait(
        `나, 한때는 그 황제를 정말 미워했어요.`,
      );
      await era.printAndWait(`${you.name}은(는) 멍하니 ${chara17.sex}을(를) 바라봤다.`);
      await luna.say_as_unknown_and_wait(
        `하지만 마지막에 ${chara17.sex}이(가) 내게 말했어요. 『그 어릿광대는 처음부터 끝까지 짐이 패배할 거라 생각하지 않았다』고.`,
      );
      await luna.say_as_unknown_and_wait(
        `그래서 ${chara17.sex}은(는) ${you.actual_name}에게 영원히 깨지 않는 아름다운 꿈을 선물하고 싶다고 했어요.`,
      );
      await luna.print_and_wait(
        '???「황제의 여정은 이제 끝난 거야.」',
      );
      await era.printAndWait(
        `루나의 예전 우울했던 눈빛에는 미망이 서려 있었다. 분명 소원이 이루어졌음에도 ${chara17.sex}은(는) 왜인지 모를 허탈함에 빠져 있었다.`,
      );
      await luna.say_and_wait('그럼 내 이야기 또한, 여기서 끝나는 걸까?');
      await era.printAndWait('해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.');
      await era.printAndWait('밤이 내려앉고, 태양은 자취를 감추었다.');
      await era.printAndWait('오직 하늘 위 밝게 빛나는 달의 부드러운 품만이 남았다.');
      await era.printAndWait(`${you.name}은(는) 고개를 숙였고, 눈시울이 붉어졌다.`);
      era.printButton('「내가 곁에 있어 줄게.」', 1);
      era.printButton('「『황제』의 이야기는 영원히 끝나지 않아.」', 2);
      await era.input();
      await luna.say_and_wait('그렇구나.');
      await era.printAndWait('무거운 발걸음을 떼며, 루나는 달이 비치는 방향으로 걸어갔다.');
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}이(가) 어디로 가는지 알지 못했다.`,
      );
      await era.printAndWait([
        `하지만 ${you.name}은(는) 떨리는 몸을 이끌고 일어나 `,
        luna.get_colored_name(),
        `의 뒤를 따랐다——${luna.sex}이(가) 어디로 향하든 상관없이.`,
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] re_double_crowns
  re_double_crowns: (() => {
    const title = '천하무적';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('이것으로 두 번째 왕관이다!');
      await era.printAndWait('꿈을 실현하는 데 한 걸음 더 다가섰다.');
      await era.printAndWait(
        '사람들은 더비에서 심볼리 루돌프가 얼마나 강력한 실력을 발휘했는지 열띠게 토론하고 있었다.',
      );
      await era.printAndWait('이 얼마나 믿기지 않는 광경인가!');
      if (i_emperor) {
        await era.printAndWait(
          '마치 대중들과 함께 이 놀라움을 만끽하듯, 황제는 손가락 두 개를 높이 치켜들었다.',
        );
      } else {
        await era.printAndWait(
          '마치 대중들과 함께 이 놀라움을 만끽하듯, 루나는 진심 어린 미소를 지어 보였다.',
        );
      }
      await era.printAndWait(
        '그 후 며칠 동안, 사람들은 더비에서 심볼리 루돌프가 보여준 실력이 얼마나 대단했는지 입을 모았다.',
      );
      await era.printAndWait(
        `${chara17.sex}의 이름은 역사 속 위대한 우마무스메들과 나란히 거론되었다.`,
      );
      await era.printAndWait('한때 찬란하게 빛났으나 결국은 희미해져 간 스타들.');
      await era.printAndWait('하지만 심볼리 루돌프는 어딘가 다른 것 같았다.');
      await era.printAndWait(
        `오직 ${you.name}만이 알고 있었다. 더비에서 ${chara17.sex}가 한층 더 깊은 단계에 발을 들였다는 것을——`,
      );
      await era.printAndWait('영역.');
      await era.printAndWait(
        `지금 이 순간에도, 그 이야기를 떠올리면 ${you.name}은(는) 깊은 경외심을 느낀다.`,
      );
      await era.printAndWait(
        `하지만 다시 생각해보니, ${you.name}은(는) 왠지 모를 씁쓸함이 느껴졌다.`,
      );
      await era.printAndWait(
        '선구자들 또한 해냈던 일이지만, 시간은 조금의 자비도 없이 흘러 모든 위대함은 결국 추억이 되어버렸다.',
      );
      era.printButton(
        '「지금도 활동하며 본격화의 힘을 조금이라도 유지하고 있는 건 마루젠스키 정도뿐이지.」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name}과(와) ${chara17.name}는 대화를 나누었다.`);
      await era.printAndWait(
        `본격화가 사라지면 아무리 강력했던 ${chara17.uma_sex_title}이라도 평범한 사람들 사이에 섞이고, 단지 약간의 기억만을 남길 뿐이다.`,
      );
      await era.printAndWait(`이것은 거부할 수 없는 순리이며, 언젠가는 ${chara17.name} 또한...`);
      await era.printAndWait(
        `${you.name}의 흥분 뒤에 숨겨진 비탄을 느낀 듯, ${chara17.name}는 조용히 당신을 바라보았다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('정벌은 결코 멈추지 않을 것이다.');
      } else {
        await chara17.say_and_wait('우리의 꿈...나는 해답을 찾은 것 같아.');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그 말이 무슨 뜻인지 이해하지 못했지만, ${chara17.name}는 설명해줄 생각이 없어 보였다.`,
      );
      await chara17.say_and_wait('에덴……');
      era.drawLine();
      await chara17.print_and_wait(
        `${you.name}과(와) ${chara17.name}이(가) 헤어진 뒤, ${chara17.sex}은(는) 홀로 학원 안뜰로 향했다.`,
      );
      await chara17.print_and_wait(
        '세 여신상을 바라보며 영역에 발을 들였던 광경을 회상하던, 세대의 정점에 선 우마무스메는 주먹을 꽉 쥐었다.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('굴레란 결코 존재해서는 안 되는 것이다.');
      } else {
        await chara17.say_and_wait(
          `나는 반드시 나와 ${you.actual_name}의 소원을 이룰 거야, 설령 내가……`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        '은(는) ',
        { color: buff_colors[1], content: ' [영역]', fontWeight: 'bold' },
        '에 눈을 떴다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] re_good_end
  re_good_end: (() => {
    const title = (emperor) => [
      ['에덴이여, 나를 보라', { content: '（짐을）', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('여긴 어디지?');
      await luna.print_and_wait('우마무스메는 마치 꿈에서 깬 듯한 기분이었다.');
      await luna.print_and_wait('끝없이 펼쳐진 초원이었다.');
      await luna.print_and_wait(
        `우마무스메는 달린다. 바람이 푸른 잔디를 흔들고 ${chara17.sex}의 흐트러진 머리카락도 흩날린다.`,
      );
      await luna.print_and_wait(
        `${chara17.sex}의 머리 위에는 태양과 달이 동시에 떠 있다.`,
      );
      await luna.print_and_wait(
        '해와 달 아래, 몇몇 형체들이 그녀를 지켜보고 있었다.',
      );
      await luna.print_and_wait('세 명의 여신——그녀들은 호기심 어린 눈으로 자신들의 아이를 바라보고 있었다.');
      await luna.print_and_wait('그렇구나.');
      await luna.print_and_wait('그녀는 눈을 깜빡였다.');
      await luna.print_and_wait(
        `우마무스메 「${you.actual_name}, 당신은 항상 내게 쉬라고 했었지. 이제야... 영원히 안식할 수 있는 곳에 도착했나 봐.」`,
      );
      await luna.print_and_wait(
        '우마무스메 「처음 【에덴】이라는 이름을 들었을 때, 이곳이 이렇게 웅장하고 아름다운 풍경일 줄은 상상도 못 했어.」',
      );
      await luna.print_and_wait('우마무스메 「드디어 새로운 세계에 도착했구나.」');
      await luna.print_and_wait(
        '우마무스메 「어쩌면 이곳에도 생명이 존재하겠지. 우리와 똑같이 기뻐하고 화내고 슬퍼하고 즐거워하는.」',
      );
      await luna.print_and_wait(
        '우마무스메 「다채로운 이야기와 뜨거운 염원, 그리고 낭만과 사랑, 투쟁이 있는 곳.」',
      );
      await luna.print_and_wait('우마무스메 「드디어 도달했어——」');
      await luna.print_and_wait(
        '우마무스메의 질주는 점차 느려졌고, 결국 그녀는 여신들의 앞에 멈춰 섰다.',
      );
      await era.printAndWait(
        '세 여신 「아이야, 모든 종착지이자... 모든 시작의 땅에 도달한 것을 축하한다. 네가 에덴에 도달한 첫 번째 우마무스메란다.」',
      );
      await era.printAndWait(
        '세 여신 「우리는 너를 포상하고, 너의 진정한 꿈을 이루어주마! 자, 소원을 말하기 전에 묻고 싶은 것이 있느냐?」',
      );
      era.drawLine();
      await luna.print_and_wait(
        '우마무스메는 자신의 인생을 회상했고, 수많은 장면이 눈앞을 스쳐 지나갔다.',
      );
      await luna.print_and_wait('우마무스메 「우리의 숙원과 손에 닿지 않는 꿈들——」');
      await luna.print_and_wait('우마무스메 「우리의 전승과 사랑하는 모든 것들——」');
      await luna.print_and_wait(
        '우마무스메 「그것들이 어떻게 오랜 시간 동안 변치 않고, 세대에서 세대로 이어질 수 있었던 걸까요?」',
      );
      await luna.print_and_wait(
        '우마무스메는 마음속 의문을 던졌지만, 여신들이 대답하기도 전에 스스로 답을 내놓았다.',
      );
      await luna.print_and_wait(
        '우마무스메 「우마무스메와 트레이너... 우리 사이의 인연 덕분이었을까요?」',
      );
      await luna.print_and_wait('그녀는 이마를 짚고 고개를 들어 활짝 미소 지었다.');
      await luna.print_and_wait(
        `여신들은 사랑스럽다는 듯 ${chara17.sex}의 흐트러진 머리카락을 쓰다듬었다.`,
      );
      await era.printAndWait('세 여신 「그렇다면, 너의 소원은 무엇이냐?」');
      await luna.print_and_wait(
        '그녀는 두 팔을 벌려 이 새로운 세계를 껴안는 듯한 포즈를 취했다.',
      );
      await luna.print_and_wait('우마무스메 「꿈이 계속 이어질 수 있는 곳을 원해요.」');
      await luna.print_and_wait(
        '우마무스메 「우마무스메가 영원히 달릴 수 있는 곳을요.」',
      );
      await luna.print_and_wait(
        '우마무스메 「우리를 사랑해주는 사람들의 환호와 기도가 들리는 한, 우리의 승리를 빌어주는 한——」',
      );
      await luna.print_and_wait(
        '우마무스메 「우리가 영원히 맞서 싸워, 모든 강적을 물리칠 수 있는 그런 곳을 원해요.」',
      );
      await luna.print_and_wait(
        '우마무스메 「지상의 에덴! 꿈만 있다면 모든 우마무스메가 갈 수 있는 에덴을요!」',
      );
      await era.printAndWait('여신들은 묵묵히 고개를 끄덕였고, 우마무스메는 다시 입을 열었다.');
      await luna.print_and_wait(
        '우마무스메 「그리고, 다시 돌아가고 싶어요. 그곳엔 나의 사랑하는 사람이 반드시 기다리고 있을 테니까요.」',
      );
      await era.printAndWait(
        '삼여신 「정말 욕심이 많은 아이로구나…… 음…… 하지만 소원을 하나만 빌어야 한다는 규칙은 없었지?」',
      );
      era.drawLine();
      await era.printAndWait('레이스가 끝났다.');
      await era.printAndWait(
        `인파가 흩어진 뒤, ${you.name}은(는) 자신을 에워싼 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
      );
      await era.printAndWait(`${you.name}은(는) 보고 싶었던 우마무스메를 발견했다.`);
      await era.printAndWait(
        `${luna.sex}은(는) 등을 돌리고 있어 ${you.name}은(는) ${luna.sex}의 지금 표정을 볼 수 없었다.`,
      );
      await era.printAndWait(
        `${luna.sex}은(는) 아직 우승의 광경에 압도되어 있을 수도 있고, 혹은 ${you.name}이(가) 알지 못하는 격앙된 감정을 되새기고 있을지도 모른다.`,
      );
      await era.printAndWait(
        `혹은 ${luna.sex}은(는) 그저 지쳐서 혼자 있고 싶은 것일지도 모른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 허탈하게 바닥에 주저앉았다. 며칠간 쌓인 피로 때문에 ${you.name}은(는) 서 있을 힘조차 거의 남아 있지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 고개를 들어 하늘을 바라보았고, 멀리 맑은 하늘에 달이 걸려 있는 것을 발견했다——해와 달이 함께 떠 있다.`,
      );
      await era.printAndWait(`${you.name}은(는) 길게 숨을 내뱉었다.`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `마침내 ${you.name}은(는) ${luna.sex}의 부름을 들었다. 강렬한 불안감을 안고 ${you.name}은(는) ${luna.sex}을(를) 바라봤지만, ${luna.sex}에게는 아무런 대답도 하지 못했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 지금 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 ${you.name}이(가) 마주하고 있는 이는 루나인가, 아니면 황제인가?`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
      );
      await luna.say_as_unknown_and_wait(
        '???「한쪽은 애상에 잠기고, 다른 한쪽은 광노에 휩싸이지. 마치 달과 태양처럼, 결코 만날 수 없고 서로를 밀어내기만 하던 존재들.」',
      );
      await era.printAndWait(
        `${luna.sex}은(는) 끝없는 하늘을 바라보았고, 그 표정은 마치 깊은 심연을 들여다보는 듯 엄숙했다.`,
      );
      era.printButton('「너는 그저 태양일지도 몰라.」', 1);
      era.printButton('「너는 그저 달일지도 몰라.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}의 말을 듣고 ${chara17.sex}는 고개를 숙였다.`,
      );
      era.printButton('「하지만 너는 태양이면서 동시에 달일 수도 있어.」', 1);
      era.printButton('「하지만 너는 황제이면서 동시에 루나일 수도 있어.」', 2);
      await era.input();
      await era.printAndWait('해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.');
      await era.printAndWait(
        `${luna.sex}는 멍하니 ${you.name}을(를) 바라보다가, 이내 뺨을 붉히며 눈시울을 적셨다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 손을 내밀었고, ${luna.sex}은(는) 당신에게 달려왔다. 루나? 황제? ${you.name}은(는) 더 이상 그런 것은 중요하지 않다고 생각했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}의 내민 손을 맞잡았고, 힘껏 서로를 끌어안으며 눈물을 쏟아냈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 확신했다. 지금 이 순간 ${you.name}의 품 안에 있는 ${luna.sex}, 오직 ${you.name}과(와) 뜨겁게 포옹하고 입을 맞추는 ${luna.sex} 또한 더 이상 그 질문에 얽매이지 않는다는 것을.`,
      );
      await era.printAndWait(
        '깊은 입맞춤이 끝나고 두 사람은 숨을 헐떡이며, 진심을 확인하는 다음 폭풍이 몰아치기 전 잠시 숨을 골랐다.',
      );
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}이(가) 가슴팍에 기대어 전하는 온기를 느꼈다. 이전엔 결코 느껴본 적 없는 이 뜨거움——황제의 단호함과 루나의 부드러움이 동시에 느껴졌다.`,
      );
      await you.say_and_wait(
        '너는 내가 사랑하는 황제이자, 나를 사랑해주는 루나야.',
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 그렇게 생각했으나, 이내 고개를 저으며 품 안의 미인이 짧게 비명을 지르는 사이 ${luna.sex}과(와) 함께 잔디밭에 누웠다.`,
      );
      era.printButton('「나의 연인, 그 이름은 심볼리 루돌프.」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] re_triple_crowns
  re_triple_crowns: (() => {
    const title = '삼관 달성';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait('포효하듯 전 세계가 열광적으로 환호했다.');
      await era.printAndWait(
        `또 한 명의 ${chara17.uma_sex_title}이(가) 이 위업을 달성했다!`,
      );
      await era.printAndWait(
        '때맞춰 관현악단이 누구나 알고 있는, 그리고 이 상황에 아주 잘 어울리는 교향곡을 연주하기 시작했다.',
      );
      await era.printAndWait('【황제】', { color: emperor.color });
      await era.printAndWait(
        `${you.name}은(는) 뜨거운 눈물을 흘리며 허리를 굽히고 고개를 떨구었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 약속과 꿈은 아직 멀었다는 것을.`,
      );
      await era.printAndWait('하지만 지금은 잠시만... 아주 잠시만이라도...');
      await era.printAndWait(`${you.name}은(는) 고개를 숙인 채, 아무도 모르는 곳에서 소리 높여 울었다.`);
      era.printButton('「축하해……」', 1);
      era.printButton('「역사상…… 가장 위대한 활약이었어……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${chara17.name}가 한없이 자랑스러웠다!`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `마치 ${you.name}과(와) 마음이 통한 듯, 황제는 손가락 세 개를 높이 치켜들었다.`,
        );
      } else {
        await era.printAndWait(
          `마치 ${you.name}과(와) 마음이 통한 듯, 루나는 행복의 눈물을 흘렸다.`,
        );
      }
      await era.printAndWait(
        `레이스가 끝난 후 한참이 지나도록, 숨을 헐떡이는 ${chara17.name}는 경기장을 떠나지 않았다.`,
      );
      await era.printAndWait(
        `사람들은 ${chara17.sex}이(가) 영광의 순간을 조금 더 오래 만끽하고 싶은 것이라 생각했다.`,
      );
      await era.printAndWait(
        `하지만 ${chara17.name}의 거대한 투지 아래에서 ${you.name}은(는) 돌연 ${chara17.sex}의 발걸음이 비틀거리는 것을 발견했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 주먹을 꽉 쥐었다. 이전에 느껴본 적 없는 오한이 ${you.name}의 몸을 휩쓸었다.`,
      );
      era.printButton('「설마……」', 1);
      era.printButton('「부상인가……」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `그날 밤, ${chara17.name}는 홀로 안뜰의 세 여신상 아래를 찾았다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '너희가 만든 요람(감옥)이 아무리 견고할지라도……',
        );
      } else {
        await chara17.say_and_wait('조금만 더, 조금만 더 하면 들어갈 수 있는데……');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sats_sho_win
  sats_sho_win: (() => {
    const title = '와신상담';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('우선은 첫 번째 왕관이다.');
      if (i_emperor) {
        await era.printAndWait(
          `마치 ${you.name}과(와) 똑같이 이 기쁨을 되새기듯, 황제는 손가락 하나를 높이 치켜들었다.`,
        );
      } else {
        await era.printAndWait(
          `마치 ${you.name}과(와) 똑같이 이 기쁨을 되새기듯, 루나는 고개를 들고 길게 숨을 내뱉었다.`,
        );
      }
      await era.printAndWait(
        '이토록 압도적인 강함, 이토록 의문의 여지가 없는 강함.',
      );
      await era.printAndWait(
        '관중들은 전설의 개막을 알리는 듯한 광경에 지금까지 중 가장 뜨거운 환호를 보냈다.',
      );
      era.printButton('「어쩌면 정말 실현될지도 몰라... 황제라면.」', 1);
      era.printButton('「어쩌면 정말 실현될지도 몰라... 루나라면.」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그날 루나가 ${you.name}에게 했던 말을 기억하고 있다.`,
      );
      await luna.say_and_wait(
        `모든 ${chara17.uma_sex_title}이(가) 행복해질 수 있는 세계를 만드는 거야.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] saud_cup_win
  saud_cup_win: (() => {
    const title = '파죽지세';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex}는 계획대로 레이스를 승리로 이끌었다.`);
      await era.printAndWait(`${you.name}의 곁눈질에 동료들의 모습이 들어왔다.`);
      await era.printAndWait(
        '담당이 돌아오기 전, 그들이 애써 태연한 척하기까지는 아직 약간의 시간이 남아 있었다.',
      );
      await era.printAndWait(
        `그렇기에 ${you.name}은(는) 그들의 깊은 한숨과, 자신을 향한 선망 혹은 질투 섞인 시선을 탓하지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 심볼리 루돌프의 트레이너다. ${chara17.sex}가 승리할 것이고, ${you.name} 또한 승리할 것이다.`,
      );
      await era.printAndWait('하지만');
      era.printButton(i_emperor ? '「개선을 축하드립니다...!」' : '「수고했어...!」', 1);
      await era.input();
      await era.printAndWait(
        `${chara17.name}이(가) 돌아오는 것을 보고 인사를 건네려던 찰나, 다른 ${chara17.uma_sex_title}이(가) ${chara17.sex}을(를) 맞이하러 다가왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 나도 모르게 긴장했다——마루젠스키였다.`,
      );
      await era.printAndWait(`만약 이 타이밍에 ${chara17.name}를 자극한다면——`);
      await era.printAndWait(
        '그러나 다행히도 두 사람은 짧은 대화를 나누며 미소를 지어 보였다.',
      );
      await era.printAndWait(
        `돌아온 ${chara17.name}는 여전히 기쁨에 들떠 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 알 수 있었다. ${chara17.sex}의 미소는 승리 때문이 아니라, 방금 마루젠스키와 나눈 대화 때문이라는 것을.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('그토록 강력한 괴물이, 내가 사냥해주기를 기다리고 있군——');
      } else {
        await chara17.say_and_wait(
          '선배님께 인정을 받다니, 특히 마루젠 선배님께 인정을 받은 건 내게 정말 큰 의미가 있어.',
        );
      }
      await era.printAndWait(
        `${you.name}은(는) 알고 있었다. 모든 우마무스메 중에서도 마루젠스키는 압도적인 강함으로 이름이 높다는 것을.`,
      );
      await era.printAndWait(
        `하지만 ${chara17.name}의 트레이너로서, ${you.name}은(는) 단 한 가지만은 확신했다.`,
      );
      era.printButton('「이기는 건 너야.」', 1);
      era.printButton('「그때가 되면, 『황제』의 실력은 더욱 증명되겠지.」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name}의 말에 놀란 듯, ${chara17.name}는 살며시 미소 지었다.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('제법 그럴싸한 말을 하는군. 개선하도록 하지!');
      } else {
        await chara17.say_and_wait(
          '이게 바로 본능이 자극받았다는 걸까? 설령 내가 더 이상 달리고 싶지 않더라도, 여전히 전율을 느낄 수 있네.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_47_17
  ts_47_17: (() => {
    const title = '불협화음';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        '목표인 ',
        toky_yus,
        '이(가) 코앞으로 다가왔고, 훈련도 마지막 단계에 접어들었다.',
      ]);
      await era.printAndWait([
        chara17.get_colored_name(),
        '훈련장을 질주하는 ',
        chara17.uma_sex_title,
        '의 모습을 보며, 구경하던 우마무스메들과 트레이너들이 연신 찬사와 탄성을 쏟아냈다.',
      ]);
      await era.printAndWait(
        `트랙을 돌고 또 돌며 ${you.name}은(는) ${chara17.name}의 컨디션이 최상임을 확인했다. 달리는 ${chara17.sex}의 얼굴에는 미소까지 떠올라 있었다.`,
      );
      await era.printAndWait(
        `그럼에도 불구하고, ${you.name}의 마음 한구석에는 커다란 불안감이 자리 잡고 있었다.`,
      );
      await era.printAndWait([
        sats_sho,
        ' 이후 루나의 어깨에 지워진 짐은 산처럼 무거워졌고, 그 부담은 갈수록 걷잡을 수 없이 커져만 갔다.',
      ]);
      await era.printAndWait(
        `어쩌면 ${chara17.name}은(는) 겉보기만큼 평온하지 않을지도 모른다.`,
      );
      if (i_emperor) {
        era.printButton(
          '「폐하, 충분히 즐기신 듯하오니 부디 옥체를 보존하시옵소서.」',
          1,
        );
      } else {
        era.printButton('「오늘 훈련은 여기까지 하자.」', 1);
      }
      await era.input();
      await era.printAndWait(
        `한 바퀴를 다 돌았을 때, ${you.name}이(가) 큰 소리로 외쳤다.`,
      );
      await era.printAndWait(
        `${you.name}의 말을 들은 ${chara17.name}는 발걸음을 멈추었다.`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 황제가 ${you.name}에게 다가왔다. 어째서인지 그녀의 즐거웠던 표정은 분노로 바뀌어 있었다.`,
        );
        await chara17.say_and_wait('광대여, 짐의 흥을 깬 대가로 합당한 이유를 대라.');
        era.printButton('「폐하, 너무 흥분하신 것 같습니다.」', 1);
        era.printButton('「사냥이 가까워질수록 더욱 냉정해지셔야……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${you.name}은(는) 황제가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) ${chara17.sex}의 트레이너가 되었든, ${chara17.sex}을(를) 황제로 부추겼든.`,
        );
        await era.printAndWait(
          `처음부터 ${you.name}이(가) 두려워했던 것은 오직 루나가 자기 내면의 야수에게 짓눌리는 것뿐이었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 자신을 비웃듯 바라보는 황제를 향해 고개를 숙였다. 그녀에게서 뿜어져 나오는 산악 같은 압박감에 ${you.name}은(는) 식은땀을 흘렸다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로…… 지금 이 순간, 훈련 상태보다 ${you.name}이(가) 지키고 싶은 것은 루나라는 한 소녀의 몸이었다.`,
        );
        await era.printAndWait(
          `${you.name}을(를) 바라보던 황제는 차갑게 코웃음을 치며 경기장을 떠났다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 본능적으로 ${chara17.sex}에게 손을 뻗었지만, ${chara17.sex}의 걸음이 너무 빨라 ${you.name}은(는) ${chara17.sex}을(를) 붙잡지 못했다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 한숨을 내쉬며 그녀의 뒤를 쫓아 뛰어갔다.`,
        );
      } else {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 루나가 ${you.name}에게 다가왔다. 어째서인지 그녀의 활기찼던 표정은 어둡게 가라앉아 있었다.`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}, 내 컨디션은 아주 좋아. 일본 더비가 얼마 남지 않았으니 더 박차를 가해야 해!`,
        );
        era.printButton(
          '「이해해. 하지만 이럴 때일수록 냉정해져야 해.」',
          1,
        );
        era.printButton('「네 상태가 걱정돼서 그래……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${you.name}은(는) 루나가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) ${chara17.sex}의 트레이너가 되었든, ${chara17.sex}을(를) 황제로 부추겼든.`,
        );
        await era.printAndWait(
          `처음부터 ${you.name}이(가) 두려워했던 것은 오직 루나가 자기 내면의 야수에게 짓눌리는 것뿐이었다.`,
        );
        await era.printAndWait(
          `하지만 처음 만났을 때 속마음을 터놓은 이후로, 루나는 좀처럼 ${you.name}에게 속내를 드러내지 않았다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로. 지금 이 순간, 훈련 성과보다 ${you.name}이(가) 알고 싶은 것은 루나의 진심이었다.`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          '을(를) 바라보며 루나는 잠시 생각에 잠겼다.',
          chara17.sex,
          '은(는) 곧 ',
          you.get_colored_name(),
          '에게 미소를 지어 보였다.',
        ]);
        await chara17.say_and_wait(
          '이 정도조차 해내지 못한다면, 우리의 이상은 결코 실현될 수 없어.',
        );
        await era.printAndWait(
          `${you.name}은(는) 속으로 입술을 깨물며 무어라 더 말하려 했다.`,
        );
        await era.printAndWait(
          `루나는 발을 구르며 다시 트랙으로 향하려 했으나, ${you.name}의 걱정 어린 시선을 이기지 못하고 결국 멈춰 섰다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 건네준 수건과 물을 받으며, 루나는 나지막이 대답했다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ts_add
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `훈련이 끝난 후에도 ${chara17.name}는 여전히 아쉬움이 남는 듯했다.`,
      );
      await era.printAndWait(
        `${chara17.sex}은(는) 멀리 지평선을 바라보았다. 석양은 지고 있었고, 마지막 잔광이 대지를 적시고 있었다.`,
      );
      await era.printAndWait(
        '금세 어두워지겠지만 아직 부족하다. 아직 한계에 도달하지 못했다——',
      );
      await era.printAndWait(
        `${you.name}은(는) ${chara17.sex}의 마음을 알아차렸다.`,
      );
      era.printButton('「계속 달려보자! 그 감각을 놓치지 마.」', 1);
      era.printButton(
        '「오늘은 여기까지 하자. 다음에 더 중요한 일이 기다리고 있어.」',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('——정벌의 끝인가? 재미있군.');
        } else {
          await chara17.say_and_wait(
            '응…… 왠지 점점 요령을 알 것 같은 기분이야.',
          );
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('잠들라는…… 것인가?');
        } else {
          await chara17.say_and_wait('과연 그렇네. 일깨워줘서 고마워.');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_47_41
  we_47_41: (() => {
    const title = '급전직하';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `차가운 달빛 아래, ${you.name}은(는) 초조하게 병실 밖 복도를 서성였다.`,
      );
      await era.printAndWait(
        `한참이 지난 뒤에야 ${you.name}은(는) 간호사가 부르는 소리를 들었다.`,
      );
      await era.printAndWait(
        `다급히 병실로 뛰어 들어간 ${you.name}은(는) 침대에 누워 잠든 루나를 발견했다.`,
      );
      await era.printAndWait(
        `${luna.sex}의 얼굴은 창백했지만 호흡은 고르게 이어졌다. 그 모습을 보고 ${you.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      await era.printAndWait(
        '국화상 이후, 루나는 긴급히 심볼리 가문의 전용 병원으로 이송되었다.',
      );
      await era.printAndWait('검사 결과, 의사가 내린 진단명은——과로였다.');
      await era.printAndWait(
        `몸은 쇠약해졌지만 루나가 푹 쉬기만 한다면 ${luna.sex}은(는) 여전히 재팬 컵 출주에 맞출 수 있다고 했다.`,
      );
      era.printButton('「재팬 컵인가——」', 1);
      await era.input();
      await era.printAndWait(
        `루나에게는 정양이 필요했기에 ${you.name}은(는) ${luna.sex}의 상태를 확인한 뒤 발소리를 죽이고 문밖으로 나왔다.`,
      );
      await era.printAndWait(`창밖의 밤풍경을 바라보며 ${you.name}은(는) 머리를 감싸 쥐었다.`);
      await era.printAndWait(
        '재팬 컵. 모든 일본 우마무스메들의 숙원…… 안방에서 열리는 가장 거대한 레이스임에도, 번번이 해외 강호들에게 승리를 빼앗겨 온 곳.',
      );
      await era.printAndWait(
        `루나와 ${you.name}의 꿈을 이루기 위해, 모든 우마무스메가 행복해질 수 있는 세상을 만들기 위해.`,
      );
      await era.printAndWait(
        '재팬 컵은 루나가 반드시 넘어야만 하는 시련이었다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 뒤를 돌아 문을 바라보았다. 루나가 저 문 너머 침대에서 쉬고 있다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 한숨을 내쉬었다. ${luna.sex}의 창백한 얼굴을 떠올리자 ${you.name}의 굳건했던 결심이 흔들리기 시작했다.`,
      );
      await era.printAndWait(
        '우마무스메가 달리는 모습은 무엇보다 아름답지만, 그 안에는 진검승부가 오가는 전장 못지않은 위기가 도사리고 있다.',
      );
      await era.printAndWait(
        '한순간의 방심, 찰나의 실수만으로도 우마무스메는 영영 돌이킬 수 없는 구렁텅이에 빠질 수 있다.',
      );
      await era.printAndWait(
        `루나는 아직 젊다. ${luna.sex}에게는 반드시 다시 기회가 올 것이다…… 굳이 이번이 아니어도 된다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 스스로를 설득하려 애썼다. 하지만 ${you.name}은(는) 루나——심볼리 루돌프에게 거는 전 일본의 기대가 ${luna.sex}의 「전선 이탈」을 허락하지 않을 것임을 잘 알고 있었다.`,
      );
      await era.printAndWait('루나 본인 또한 결코 포기하고 싶어 하지 않을 것이다.');
      await era.printAndWait(
        `${you.name}은(는) 초조하게 머리를 헝클어뜨렸다. 고심에 고심을 거듭하던 중, 지독한 졸음이 ${you.name}을(를) 덮쳤다.`,
      );
      era.printButton('「내일 다시 루나와 이야기해보자……」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 역시 지칠 대로 지쳐 있었다.`);
      await era.printAndWait(
        `그러나 다음 날, 눈을 떴을 때 ${you.name}은(는) 자신의 어깨에 이불이 덮여 있는 것을 발견했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 옆의 문을 거칠게 열었다. 문은 살짝 열려 있었고, 병실 안에서 쉬고 있어야 할 루나는 흔적도 없이 사라져 있었다.`,
      );
      era.printButton('「설마?!」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 깨달았다. 루나가 행동으로써 ${you.name}에게 ${luna.sex}의 결의를 증명해 보였다는 것을.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name}이(가) 학생회실 문을 열자, 그 안은 인산인해를 이루고 있었다. 서무들이 각종 서류를 들고 루나에게 최근 업무를 보고하고 있었다.`,
      );
      await era.printAndWait(
        `루나는 ${you.name}을(를) 바라보며 입술을 살짝 깨물었다.`,
      );
      await luna.say_and_wait('트레이너, 무슨 일인가?');
      await era.printAndWait(
        `${you.name}은(는) 숨을 헐떡이며 모두가 자신을 빤히 바라보는 것을 느꼈다. 결국 그는 어색하게 웃어넘길 수밖에 없었다.`,
      );
      era.printButton('「두고 가신 물건이 있어서……」', 1);
      era.printButton('「좀 더 쉬어야 한다고……」', 2);
      await era.input();
      await era.printAndWait(
        `말을 채 끝내기도 전에, ${you.name}은(는) 자신을 응시하는 루나의 보랏빛 눈동자에 간절한 애원이 서려 있음을 발견했다.`,
      );
      await luna.say_and_wait('난 괜찮아.', true);
      await era.printAndWait(
        `${you.name}은(는) ${luna.sex}의 입모양을 읽었다. ${you.name}은(는) ${luna.sex}의 의사를 거스를 수 없었다. 어릴 때부터 지금까지 늘 그랬던 것처럼……`,
      );
      era.printButton('「아니, 별일 아니야.」', 1);
      era.printButton('「미안해……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 넋이 나간 채 학생회실을 빠져나왔다. ${you.name}은(는) 학원에 루나가 필요하다는 것을 잘 알고 있었다.`,
      );
      await era.printAndWait(
        '루나 역시 알고 있다. 일본은 지금 이 순간 심볼리 루돌프를 잃을 수 없다는 것을.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_10
  we_95_10: (() => {
    const title = '心血を注ぐ';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '天皇賞（春）が近づいている。最長距離のG1として、3200メートルはウマ娘の靭性を試す大関だ。',
      );
      await era.printAndWait(
        'かつては、天皇賞を勝ったウマ娘が最強とされた。だが時代が変わり、各レースの評価も起伏する。',
      );
      await era.printAndWait(
        'それでも、天皇賞（春）は今なお最も苛烈なレースであることに変わりはない。',
      );
      await era.printAndWait(
        '上級生になっても、ルナの生徒会の仕事の圧は下がらず、後輩の指導に時間を割き、各種の取材にも出ねばならない。',
      );
      await era.printAndWait(
        `${you.name} は憂えるが、ルナは一貫して、それに見合う名声を担う責任だと考えている。`,
      );
      await era.printAndWait(
        `${you.name} の思いに気づいたのか、一日の忙しさを終えたあと、ルナは ${you.name} を呼び止めた。`,
      );
      await luna.say_and_wait('怒っていますか？');
      era.printButton('「心配しているだけだ。」', 1);
      era.printButton('「もっと俺を頼ってほしい。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の言葉を聞き、ルナは軽く息を吐いた。`,
      );
      await luna.say_and_wait('あなたも、もう少し私を信じてください。');
      await era.printAndWait(
        `ルナは${you.name}を見て、手を伸ばし、${you.name}の頰を撫でた。`,
      );
      await luna.say_and_wait(
        '私はこうしなければいけません。でなければ、多くの者が迷いと苦境に沈みます。',
      );
      await luna.say_and_wait('私たちは、まだ夢を果たしていません。');
      await era.printAndWait(`${you.name} はルナの手を握った。`);
      await era.printAndWait(
        `遠大な理想を語っているのに、${you.name} はルナの眉間に散らない憂いがあるのに気づく。`,
      );
      await era.printAndWait(
        `${you.name} たちが再び出会ったときのように、息が詰まる様子だ。`,
      );
      await era.printAndWait(`${you.name} は溜息をつき、頷いた。`);
      await era.printAndWait(
        `——ルナのために、まだ何ができるのか。これから先の日々、${you.name} はずっとその問いを考えていた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_wax_and_wane
  we_wax_and_wane: (() => {
    const title = '陰晴円欠';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '小さなころ、家の者は私に期待などしていませんでした。',
      );
      await luna.print_and_wait(
        '私は好き勝手に遊ぶことを許され、トレーニングに出ないことも許されていました。私には、みな「どうでもいい」という態度でした。',
      );
      await luna.print_and_wait(
        'シンボリ家とはそういう場所です。人々が気にかけるのは実力だけ。',
      );
      await luna.print_and_wait('だから、強い姉たちはコースを飛んでいました。');
      await luna.print_and_wait(
        'そして私は、芝生の上で一日中眠ることさえできました。',
      );
      await luna.print_and_wait(
        '私は楽に日を過ごしたかった。ですが年を重ねるうち、体内の躁動を抑えきれないことに気づきました。',
      );
      await luna.print_and_wait('まるで、私の血が体内で燃えているように。');
      await luna.print_and_wait(
        'そういうとき、私の胸には暴虐で兇暴な気持ちが生まれます。',
      );
      await luna.print_and_wait(
        '引き裂きたい、踏み潰したい、相手を足の下に踏みつけ、嘲り、嗤いたい！',
      );
      await luna.print_and_wait(
        '——すべての者からすべてを奪い、世界を焼き払いたい！',
      );
      await luna.print_and_wait(
        '体力を使い果たし、やっと我に返ったとき、私は尽きせぬ空虚と恐怖しか感じられませんでした。',
      );
      await luna.print_and_wait(
        '私は一喜一憂するようになりました……妄想を止めたい一心で、自らトレーニングに出るようになりました。',
      );
      await luna.print_and_wait(
        '極限まで走ったときだけ、私は穏やかになれる……私自身でいられる。',
      );
      await luna.print_and_wait('「ルナ。」');
      await luna.print_and_wait(
        '母がつけてくれた美しい名。優しい名でもあります。',
      );
      await luna.print_and_wait(
        '私は、暴力を発散するだけの怪物にはなりたくありません……',
      );
      await luna.print_and_wait(
        'ですが血脈がもたらす暴虐には勝てません。シンボリ家のこれまでのウマ娘と同じように。',
      );
      await luna.print_and_wait(
        'このとき、私はやっとわかりました。なぜ家の者が私を躾けないのかを。',
      );
      await luna.print_and_wait(
        '代々流れる「シンボリ」の血が、私を定められた道へ導くからです。',
      );
      await luna.print_and_wait('勝利。勝利。');
      await luna.print_and_wait(
        '勝てさえすれば、私が自分でなくなっても許される。',
      );
      await luna.print_and_wait('というより、勝てさえすれば、どうでもいい。');
      await luna.print_and_wait(
        '私が稀代の才能を見せたあと、シンボリ家は私を育て始めました。',
      );
      await luna.print_and_wait('望めば、すべての資源を易々と手にできます。');
      await luna.print_and_wait('望めば、すべての寵愛を易々と手にできます。');
      await luna.print_and_wait('ですが私は、なお空虚と恐怖を感じていました。');
      await luna.print_and_wait(
        '走ることで頭を空にできるのは一時です。すべての相手を越え、ゴールから振り返ったとき、息を切らして気づくのです。私の口角が、止められずに上がっていることに。',
      );
      await luna.print_and_wait('まるで、人が変わったように。');
      await luna.print_and_wait(
        '思わず考えます。ルナは、本当の私なのでしょうか？',
      );
      await luna.print_and_wait(
        'それとも、コースで八方を虐げる怪物こそが、本当の私なのでしょうか？',
      );
      await luna.print_and_wait(
        '誰かに泣きたいと思いました。ですが私が成長するにつれ、優しくしてくれた人々は唐突に逝きました。',
      );
      await luna.print_and_wait(
        '母は、狩人に驚いて鬱々として果てました。姉は、レース前の準備の中で粲然と逝きました。',
      );
      await luna.print_and_wait('あるいは、私も……');
      await luna.print_and_wait(
        '冷たい月光の注視の下、私は狂ったように大人たちの傍へ行きました。',
      );
      await luna.say_and_wait('欲しいのは——');
      await luna.print_and_wait(
        '安心でした。もう恐れなくていいこと。ですが和やかな祖父と父母の前で、私はそう言えませんでした。',
      );
      await luna.print_and_wait('彼らの目にある期待を見てしまったからです。');
      await luna.print_and_wait(
        'だから私は【愛】を願いました。数えきれない兄弟姉妹が傍にいること。各地から集う面白い人たちが、シンボリ家を囲むこと。',
      );
      await luna.print_and_wait('ここが賑やかになれば——');
      await luna.print_and_wait('人々に囲まれれば——');
      await luna.print_and_wait(
        'きっと、きっと機会はある。きっと誰かが、自分を空虚と恐怖から救ってくれる。',
      );
      await luna.print_and_wait('そのとき……私は……ルナは、きっと——');
      await luna.say_and_wait(`${you.actual_name}？`);
      await luna.print_and_wait(
        'ルナは夢から驚き、自分がひとりベッドにいるのに気づいた。',
      );
      await luna.print_and_wait(
        'なぜこんな夢を見たのか。ルナは頭を押さえる。窓の外の皎々たる明月を見て、目眩を感じた。',
      );
      await luna.print_and_wait(
        '励ましを受け、理想へ衝く決意をしたはずなのに、【皇帝】に意識を奪われ、暴虐の血脈を奮い起こすことを思うと……',
      );
      await luna.print_and_wait(
        'ルナは潸然と涙を流した。どうしても、まだ怖い。',
      );
      await luna.print_and_wait(
        '忍耐には慣れたつもりでした。耐えれば、事態は好転すると信じていました。',
      );
      await luna.print_and_wait(
        `ですが ${you.actual_name} と再会してから、これまで頼ってきた忍耐が、役に立たなくなりました。`,
      );
      await luna.say_and_wait('会いたい……');
      await luna.say_and_wait('会いたい……');
      await luna.print_and_wait(`${luna.teen_sex_title}は、一晩眠れなかった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'ルナと「共犯」になってから、気づかぬうちに新しい年を迎えた。',
      );
      await era.printAndWait(
        `絶え間ない戦々恐々と恐怖が、${you.name} を夜ごと眠れなくしていた。`,
      );
      await era.printAndWait(
        `だが新年の冷たい風が吹くと、${you.name} はわずかに勇気を取り戻した。`,
      );
      await era.printAndWait(
        `まして、ルナは艶やかな晴れ着を着て、${you.name} へ小走りに寄ってくる。`,
      );
      await era.printAndWait(
        `${luna.sex} はあなたの腕へ飛び込んだ。船が港へ入るように。`,
      );
      await luna.say_and_wait(
        'このまま続けば、皇帝に代わってもらわねばなりません。',
      );
      await era.printAndWait(
        `${you.name} は仕方なく${luna.sex}の髪を撫で、細雪を摘み取った。`,
      );
      await era.printAndWait(
        `早く ${you.name} と二人きりになりたくて、ルナは来る道で傘も差さなかったらしい。`,
      );
      await era.printAndWait(
        `${you.name} はルナの額にキスし、返礼として${luna.sex} は ${you.name} の肩に凭れた。`,
      );
      await era.printAndWait('窓の外、雪が揺れている。');
      await luna.say_and_wait(
        '今年は、ついにクラシック三冠に挑みます。これを取らねば、私は……',
      );
      await era.printAndWait(
        `真面目な顔のルナを見て、${you.name} は深く息を吸い、${luna.sex} の手を握った。`,
      );
      await era.printAndWait(
        `何があっても、${you.name} はルナの傍にいる、というように。`,
      );
      await era.printAndWait(
        `ルナは顔を上げて ${you.name} を見、目には幸福と希望が満ちている。`,
      );
      era.printButton('「賢明方正であれ。常に最善を選べ。」（賢さ+40）', 1);
      era.printButton(
        '「十全の健康であれ。身心を大事にしろ。」（スタミナ+40）',
        2,
      );
      era.printButton(
        '「皇帝に武芸百般あれ。すべての技を活かせ。」（スキルPt+80）',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait(
        'どれも幸福で、美しい願い……では、私にもひとつ願いがあります。',
      );
      await era.printAndWait(
        `ルナは ${you.name} の頰を摩り、${you.name} は${luna.sex}の体温と、魂の渇望を感じた。`,
      );
      await luna.say_and_wait(
        'あなたが長命でありますように。そうすれば、永遠に私の傍にいてくれますから。',
      );
      await era.printAndWait(`${you.name} は高らかに笑った。`);
      await luna.say_and_wait('それから、もっと寒い冗談が見たいです。');
      await era.printAndWait(`${you.name} の笑いが止まった。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait('夏季合宿の期間であるはずなのに——');
      await era.printAndWait(
        `${you.name} は、ウマ娘たちに取り囲まれたルナを見て、額に冷や汗を浮かべた。`,
      );
      await era.printAndWait(
        '万人が注目する生徒会長として、生徒たちの自主トレを指導し、',
      );
      await era.printAndWait(
        '突破できない生徒を助け、ときには自ら手本を示す。',
      );
      await era.printAndWait(
        `それだけでなく、トレーニングでも${luna.sex}は格別に励んでいる。`,
      );
      await era.printAndWait(
        '夜になっても、ルナは二つの寮の寮長を助け、任務を割り振っていた。',
      );
      await luna.say_and_wait(
        '学園の問題は、すべて私の問題です。気にしないでください。',
      );
      await era.printAndWait(
        `それから${luna.sex}は身をもって示し、早めに寝室へ戻って休んだ。`,
      );
      await era.printAndWait(
        `そう言いながらも、${you.name} の携帯はちょうどよく鳴った。`,
      );
      await luna.say_and_wait(
        'なんだか、あなたの視線がずっと私から離れていない気がします。',
      );
      await era.printAndWait(
        `ルナからの短信を見て、${you.name} は思わず微笑んだ。`,
      );
      era.printButton(
        '「おかけになった電話は圏外です。しばらくしてからおかけ直しください。」',
        1,
      );
      era.printButton('「だって、あなたが目を奪うから。」', 2);
      await era.input();
      await luna.say_and_wait(
        '口が上手いのですね。ですが学園の風紀のため、私以外の子には使わないでください',
      );
      await luna.say_and_wait('そういえば');
      await luna.say_and_wait('あなたは、いつもそう！');
      await luna.say_and_wait(
        'シンボリ家でも巧言令色、よく生きてこられましたね',
      );
      await luna.say_and_wait(
        'ですが、私は先に寝ます。明日は早起きしてトレーニングしましょう',
      );
      await era.printAndWait(
        `${you.name} は携帯に点滅するメッセージを見ているうちに、いつのまにか眠っていた。`,
      );
      await era.printAndWait(
        `翌朝早く、ルナはトレーニングへ向かうところだったが、${you.name} は${luna.sex}を引き止めた。`,
      );
      await era.printAndWait(
        `夏季合宿が始まる前から、${luna.sex}は矢継ぎ早にいくつもの仕事をこなし、トレーニングも落とさなかった。`,
      );
      await era.printAndWait(`疲労は蓄積する。${you.name} は確信していた。`);
      era.printButton(
        '「豪勢な食事を取って、もっと強くなってくれ。」（パワー+10）',
        1,
      );
      era.printButton(
        '「たまにはトレーニングを先送りにしてみよう。」（根性+10）',
        2,
      );
      const ret = await era.input();
      await era.printAndWait('ルナは呆けた。');
      await luna.say_and_wait('心配してくれているのですか？');
      await era.printAndWait(
        `${you.name} は頷いた。ルナは窓枠に凭れ、海と砂浜を向いている。`,
      );
      await era.printAndWait(
        `朝の陽が${luna.sex}の顔を埋め、あなたには${luna.sex}の表情が見えない。`,
      );
      await luna.say_and_wait(
        '他者のために励むことは、いつだって美しい願いです。',
      );
      await luna.say_and_wait(
        'そうは言っても、私たちは菊花賞のために励まねばなりません。',
      );
      await luna.say_and_wait(
        'ですが、あなたの目がすでに物語っています——『これ以上のトレーニングは身体に害』、でしょう？',
      );
      await luna.say_and_wait(
        'ダービーのあと、私はますます確信しています。私たちの理想を果たすには、並大抵ではない努力が要ると。',
      );
      await luna.say_and_wait(
        'あなたは、私を守りすぎてはいませんか？ 私がここまで弱いと、ここで倒れるとでも？',
      );
      era.printButton('「……！」', 1);
      await era.input();
      await era.printAndWait(
        `窮した ${you.name} を見て、ルナは何かに気づき、${you.name} の腕を掴んだ。`,
      );
      await luna.say_and_wait(
        'これでは、あなたに八つ当たりしているだけですね……',
      );
      await era.printAndWait(
        `ルナは ${you.name} に謝っているようだった。だが ${you.name} は知っている。${luna.sex}はあなたに折れてはいない。`,
      );
      await era.printAndWait(
        `${luna.sex}の思いは、確かに ${you.name} の胸へ届いた。`,
      );
      await luna.say_and_wait(
        '今日はトレーニングには行きません。安心してください。',
      );
      await era.printAndWait(`それから、ルナは ${you.name} の傍を離れた。`);
      await era.printAndWait(
        `${you.name} は引き止められなかった。${you.name} は胸を押さえ、長くしてから我に返り、がらんとした廊下を離れた。`,
      );
      await era.printAndWait(`その一日、${you.name} はルナに会えなかった。`);
      await era.printAndWait(
        `夜、${you.name} は携帯を取り、ルナへ短信を送る。`,
      );
      era.printButton('「俺は、ずっと傍にいる。」', 1);
      era.printButton('「ルナ、俺はいつでも君を愛している。」', 2);
      await era.input();
      await era.printAndWait(
        '既読にはなったが、ルナからの返事はいつまでも来ない。',
      );
      await era.printAndWait(
        `${you.name} は待ち続けた。結局、一晩中、ルナは返信しなかった。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_14
  ws_95_14: (() => {
    const title = '皇帝の墜落';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '四月になれば、万人が注目するファン感謝祭が始まる。',
      );
      await era.printAndWait(
        `${you.name} には不満もあるが、開会式のあとには模擬レースがある。`,
      );
      await era.printAndWait(
        `模擬レースとはいえ、激しさは正式なレースとほとんど変わらないはずだ。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。こういうときほど、${you.name} はルナの身体の調子を釣り合わせにくい。`,
      );
      await era.printAndWait('ひとたび問題が起きれば……');
      await era.printAndWait(
        `だが夏合宿の出来事を思い出すと、${you.name} はルナに回避を頼めない。`,
      );
      await era.printAndWait(
        `模擬レースが始まろうとするとき、ルナの疲労した様子に ${you.name} は目尻が跳ねた。`,
      );
      await era.printAndWait(
        'トレーニングだけでなく、生徒会の仕事と行事の運営。今日のために、ルナの負担は重すぎる。',
      );
      await era.printAndWait('——少し休め。');
      await era.printAndWait(
        `${you.name} は傍らに立つルナを見て、言葉が喉で止まり、つい溜息になった。`,
      );
      await luna.say_and_wait('すべての人が、このレースを期待しています。');
      await luna.say_and_wait(
        'ファンの歓声、期待と祈り。すでに引退した先輩たちさえ、胸を高鳴らせています。',
      );
      await era.printAndWait(
        `${you.name} はルナを見る。${luna.sex}は思い巡らしているようだ。しばらくして、${luna.sex}は ${you.name} を見た。`,
      );
      await luna.say_and_wait('あなたも、私に期待していますか？');
      era.printButton('「いつだって！」', 1);
      era.printButton('「休め……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の答えを聞き、ルナは深く息を吸い、それから ${you.name} の肩を叩いた。`,
      );
      await luna.say_and_wait('行ってきます。');
      await era.printAndWait(
        `${you.name} はその場で固まった。だがすぐに悟る。ルナは【今】のこの状態で、コースへ上がるつもりだ。`,
      );
      await era.printAndWait(
        `——結果、ルナは苦戦した。連日の疲労が${luna.sex}の調子を落としたのかもしれない。`,
      );
      await era.printAndWait(`観客は騒然となった。`);
      await era.printAndWait(
        `皇帝がどうしてここまで乱れるのか。そんな議論が数週間続いた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_16
  ws_95_16: (() => {
    const title = '乾坤一擲';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `明日は天皇賞（春）の日だ。だがこのあいだ、${you.name} は気づいた。どうしても、ルナは【皇帝】を呼び出せない。`,
      );
      era.printButton('「積み重ねた疲労が、ついに報いをもたらした。」', 1);
      era.printButton('「もう無理をするな！」', 2);
      await era.input();
      await era.printAndWait(
        `生徒会で、${you.name} は額を押さえるルナを憂えて見ていた。`,
      );
      await era.printAndWait(`${luna.sex}の髪は乱れ、厚い隈を乗せている。`);
      era.printButton('「全部、俺の責任だ……！」', 1);
      era.printButton('「すまないルナ、俺は……」', 2);
      await era.input();
      await luna.say_and_wait('いいえ、あなたとは関係ありません。');
      await era.printAndWait(
        `ルナは顔を上げて ${you.name} を見る。${luna.sex}の髪は乱れ、厚い隈を乗せ、涙が${luna.sex}の頰を伝う。`,
      );
      await luna.say_and_wait(
        '夢のために、私は無謀なほど今まで突き進みました。私の我がままに、あなたを巻き込んで……',
      );
      await luna.say_and_wait(
        'まして、あなたは何度も身体を大事にするよう言ってくれました。すべてを壊したのは、私です。',
      );
      await luna.say_and_wait(
        '【皇帝】を失ったままでは、私はとうてい、すべての人を満足させられません。',
      );
      await luna.say_and_wait(
        'ごめんなさい。私は強いウマ娘ではありません……ごめんなさい……ごめんなさい……',
      );
      await era.printAndWait(`${you.name} の前で、ルナは号泣した。`);
      await era.printAndWait(
        `${you.name} はすぐに前へ出て、ルナをきつく抱いた。`,
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}の脆さを感じ、${luna.sex}の悔しさを感じる。`,
      );
      await era.printAndWait(
        `同時に、${you.name} の胸には不満と、いたわりが満ち、ルナへ告げたい。`,
      );
      await era.printAndWait(
        'いたわりは、ルナの涙のため。不満は、ルナの自らを卑下するため。',
      );
      await era.printAndWait(
        '模擬レースで力を出せなかったからといって、ルナはすべての者に敬われる存在ではなくなるのか？',
      );
      await era.printAndWait('否。否！！！');
      await era.printAndWait(`${you.name} は歯を食いしばった。`);
      await era.printAndWait(
        'あれほど励み、トレセンのため、すべてのウマ娘のために心血を注ぎ、身を尽くしたルナを、人は議すべきではない。',
      );
      await era.printAndWait(`${luna.sex}は、胸を張ってよいはずだ！`);
      await you.say_and_wait(
        '君は、人々の心にある【皇帝】の強さを誤解している。',
      );
      await era.printAndWait(
        `ルナが泣き疲れたあと、${you.name}は口を開いて慰めた。${you.name}の言葉の見極めを聞き、ルナの心は小さく震えた。`,
      );
      await you.say_and_wait(
        '皇帝——シンボリルドルフが人を惹きつけるのは、あのシンボリの旗の下で、誰もがそれぞれの務めを果たせるからだ。',
      );
      await you.say_and_wait(
        'すべての者が励み、奮闘するよう、背中を押している。',
      );
      await you.say_and_wait(
        '今まで、君より【皇帝】の称号にふさわしい者はいない。君は俺たちを導き、俺たちを前へ連れていった！',
      );
      await you.say_and_wait(
        '夢へ向かう天途の途中で、君はすでに、誰かの夢になっている。',
      );
      await you.say_and_wait('だから、自分を貶めるな、ルナ——');
      await era.printAndWait(
        `${you.name} はルナをきつく抱き、${luna.sex}に無限の力を与えたいようだった。また、${you.name} が生涯で最も大切な人を、己の魂へ揉み込みたいようでもあった。`,
      );
      await era.printAndWait(
        `長くして、ルナはやっと抗議するように、小さく拳を振り、${you.name} の肩を叩いた。`,
      );
      await era.printAndWait(
        `${you.name} はやっと力が入りすぎたのに気づく。${you.name} は慌てて腕を緩めたが、ルナは離れず、なお ${you.name} の胸に凭れていた。`,
      );
      await luna.say_and_wait('私は、まだ前へ進めますか？');
      era.printButton('「もちろん。」', 1);
      await era.input();
      await luna.say_and_wait('あなたは、まだ私の傍にいてくれますか？');
      era.printButton('「奈落の底でも。」', 1);
      era.printButton('「永遠に。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} はルナの浅い笑いを聞いた。`);
      await you.say_and_wait(
        '俺だけじゃない。生徒会のみんなも、トレセンの生徒たちも、君を助けたいと思っている。微力でもいいから。',
      );
      await you.say_and_wait('君の努力は、必ず実を結ぶ。');
      await luna.say_and_wait('では、私はなおさら、ここで足を止められません。');
      await luna.say_and_wait('私たちの夢は、未来にしかありません。');
      await era.printAndWait(
        `${you.name} はポケットからハンカチを出し、ルナの涙を優しく拭った。${you.name} は気づく。ルナの目に輝いているのは、もう涙ではない。`,
      );
      await era.printAndWait(`乾坤一擲の意志だ。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_4
  ws_95_4: (() => {
    const title = '寄り添って前へ';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `新しい年。${you.name} は寒風を冒して、ルナと会う約束の場所へ向かっていた。`,
      );
      await era.printAndWait(
        `だが道中、${you.name} はルナが大門の前に立ち、まだ幼く見える生徒と話しているのを見つけた。`,
      );
      await era.printAndWait(
        '後者は何度も頷き、お辞儀をし、鄭重にルナへ礼を述べてから去った。',
      );
      era.printButton('「ルナ先輩。」', 1);
      era.printButton('「ルナお姉さん？」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} の揶揄を聞き、ルナの顔はわずかに紅らむ。${luna.sex}は拗ねたように ${you.name} を見るが、その呼び方も嫌いではないらしい。`,
      );
      await luna.say_and_wait(
        '今になって戻ってきた子です。もうすぐメイクデビューです。',
      );
      await luna.say_and_wait(
        '一月の末近くになって学園へ戻る。あなたも不思議に思うでしょう？ 大半のウマ娘は秋か冬にデビューします。',
      );
      await luna.say_and_wait(
        'ですがその前に、私たちは学園へ来て、同年代と学び、競い合います。',
      );
      await luna.say_and_wait(
        'それは楽しいことです。ですが、その過程に心碎と疲労がないとは限りません。',
      );
      await era.printAndWait(
        `人のいない場所へ来ると、ルナの腕が ${you.name} の肩に触れる。${luna.sex}にはそういう癖があるらしい。無意識に、あなたへ寄ってしまう。`,
      );
      await luna.say_and_wait(
        '過酷なレースとトレーニングに耐えきれず、自分に失望したとき、休暇で温かい家へ戻れば……',
      );
      await luna.say_and_wait('諦める思いが芽生えるのかもしれません。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は黙ってルナの話を聞いた。正直、あなたたちの立場——シンボリルドルフの立場では、',
        you.get_colored_name(),
        ' はきれいな言葉を並べられない。',
      ]);
      await era.printAndWait(
        `${you.name} は知っている。多くの${luna.uma_sex_title}は、ルナが出走すると聞けば、${luna.couple_title}の第一の反応が回避だと。`,
      );
      era.printButton(
        '「現実と苦境に真正面から向き合う者こそ、真の勇者だ。」',
        1,
      );
      era.printButton('「彼女たちにもっと助けを出すべきかもしれない。」', 2);
      await era.input();
      await era.printAndWait(`ルナは笑って ${you.name} を見た。`);
      await luna.say_and_wait(
        '私も逃げたいと思ったことがあります。ですが……私の逃げ場は、いつもあなたのところなのです。',
      );
      await era.printAndWait(
        `ルナは ${you.name} の懐に凭れ、指で軽く ${you.name} の胸を突いた。`,
      );
      if (ret === 1) {
        await luna.say_and_wait(`ルナ先輩にも、もう逃げ場はありませんね。`);
      } else {
        await luna.say_and_wait(`ルナお姉さんにも、もう逃げ場はありませんね。`);
      }
      await era.printAndWait(`まったく……`);
      await era.printAndWait(
        `${you.name} は頰を赤らめ、ルナの小さな仕返しを欣然と受けた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_a_stones_throw
  ws_a_stones_throw: (() => {
    const title = 'あと一歩';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `ルナはどうして皇帝になったのか。${you.name} はやっと思い出した。`,
      );
      await era.printAndWait(
        'あれは無謀な計略だった。新米の生意気な小僧が、シンボリの未来の星へ仕掛けた蠱惑だった。',
      );
      era.printButton(
        '「暴虐が憎いなら、そういうことは他人にやらせればいいんじゃないか？」',
        1,
      );
      await era.input();
      await luna.say_and_wait('他人……？');
      era.printButton(
        '「ああ、他人。たとえば——別の人だ。つまり、もうひとりの君だ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} の本意は、浮かない顔のルナを解きほぐすための冗談だった。だがなぜか、普段は悪戯な子が、ずいぶん真剣に聞いていた。`,
      );
      await era.printAndWait(
        `${luna.sex}の目に急かされ、${you.name} は知恵を絞り、荒唐な話を続けた。`,
      );
      era.printButton('「ルナとは違う、好戦的で暴虐な存在を創り出そう。」', 1);
      era.printButton('「君の個性の上に立てた、想像の姿だ。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} は息を吐き、ふと思いついた。`);
      await you.say_and_wait('そうだ、【皇帝】みたいに！');
      await era.printAndWait(
        `ルナは呆けて ${you.name} を見つめる。${you.name} は、いま脳裏を過ぎった考えに歓喜していた。`,
      );
      await era.printAndWait(
        `違う、だめだ——${you.name} の魂が震える。${you.name} はやっと思い出した。`,
      );
      await era.printAndWait(
        `皇帝は、${you.name} がルナのために創った牢獄だ。`,
      );
      era.printButton(
        '「ルナにできないことは、すべて皇帝にやらせればいい。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `そうではない。あの子の運命、${luna.sex}が背負うすべてを、こんなに軽く括っていいはずがない！`,
      );
      await you.say_and_wait('そうすれば、ルナは易々と頂点に立てるだろ！');
      await you.say_and_wait('黙れ！ 早く黙れ！ もう言うな！！！', true);
      await era.printAndWait(
        `${you.name} は己の首をきつく絞めたいと思った。その動作のあいだに、${you.name} は夢から覚めた。`,
      );
      await era.printAndWait(`${you.name} は冷や汗に濡れていた。`);
      await era.printAndWait(
        `あのころの ${you.name} は、ただの思い上がった馬鹿だった。四方で才能を持て余していると自称していたが、実際は学生の空論にすぎない。`,
      );
      await era.printAndWait(
        `ルナと出会ったとき、${you.name} は脳裏に隠していた、日の目を見なかった戦略、見聞、幻想、そして ${you.name} がルナから読み取った——${luna.sex}はいずれ大人物になる、ということを、一気に口にした。`,
      );
      await era.printAndWait(
        `${you.name} は、あのときの自分がどれほどみっともなかったか知らない。だがルナは、あのとき、釈然とした笑みを見せた。`,
      );
      await era.printAndWait('月夜の下で、咲いた笑み。');
      await era.printAndWait(
        'あのとき、自分は決めた。ルナのために湯火も辞さず、命も知恵も捧げると。',
      );
      await era.printAndWait(
        '本業へ戻ったことも、死ぬほど学んだことも、シンボリルドルフのトレーナーになったことも——',
      );
      await era.printAndWait('【皇帝】の威名を遠くへ響かせるためではない。');
      await era.printAndWait('すべては、ルナの笑顔のためだったはずだ！');
      await era.printAndWait('だがなぜ、なぜこうなってしまったのか……');
      await era.printAndWait(`${you.name} は頭を押さえ、深く息を吐いた。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_palace
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        'あなたはどんな空が好きですか？ 太陽、それとも月？ 決められなくても構いません。あなたがどんな空の下にいようと、いつか、私たちは出会います。ええ、今度は、私たちがあなたを探しに行きます。',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        'まだ前へ進めるなら、ここに留まる必要はない！ 吾の天途は止まらぬ。祝え、弄臣よ！ 貴様は皇帝の偉業を目撃する。褒美として、吾は貴様に永世、吾に従い仕えよという栄誉を許す……答えは？',
      );
    } else {
      await chara17.say_and_wait(
        `皇帝の物語は終わりました。ですが私の使命は、まだ終わっていません。手を携えて、あそこへ行きましょう。すべての${chara17.uma_sex_title}が幸福になれる未来へ。ええ……その未来には、私も含まれるはずです。だから……あなたは、私を幸福にしてくれますよね？`,
      );
    }
  },

  // [번역 대상] ws_transform
  ws_transform: (() => {
    const title = '日月交替';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 皇帝へ切り替えるか
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () =>
            luna.say_and_wait('ええ……私たちの願いのためなら、私は耐えます。'),
          () => luna.say_and_wait('……抱いて……ひとりで向き合うのは、嫌です……'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(
              `${you.actual_name}、そうしなければいけないのですか？`,
            ),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => luna.say_and_wait('…………………………………………私は誰？'));
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('入夢の時……？'),
          () =>
            emperor.say_and_wait('大器は必ず成る。されど、磨かねばならぬ。'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('夢醒の刻。'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => emperor.say_and_wait('エデンへ進め！'));
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
};
