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

  // [번역 대상] re_bad_end_emperor
  re_bad_end_emperor: (() => {
    const title = '皇帝降臨';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${chara17.name} は遠く夕陽の下に立つ。風が緑の芝を起こし、${chara17.sex} の散った髪も起こす。`,
      );
      await era.printAndWait(
        `月夜が近づき、太陽はまだ落ちていない。${chara17.sex}は背を向け、${you.name} には${chara17.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${chara17.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${chara17.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `ついに、${you.name} は${chara17.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${chara17.sex}を見るが、${chara17.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「ひとつの魂が眠るたび、もうひとつの魂が目覚める。」',
      );
      await era.printAndWait(
        '？？？「一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。」',
      );
      await era.printAndWait(
        `${chara17.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      await emperor.say_as_unknown_and_wait(
        '近日、吾は危うくコースで戦死するところだった。だが最後、か細い声が吾を励ました。',
      );
      await era.printAndWait(`${you.name} は呆けて${chara17.sex}を見つめた。`);
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex}は吾に支えよと言った。${chara17.sex}は言った。『私はあなたが一番嫌いです。ですが私たちの夢のため、ただひとつだけ祈ります。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『勝利を携えて、${you.actual_name} に会いに行って。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『たとえこれから永遠に逢えなくても』、${chara17.sex}は言った……${chara17.sex}も、すべてを捧げると。`,
      );
      await era.printAndWait(
        `皇帝の鋭い目には迷いがある。${chara17.sex}はどうしても思い出せない。誰が己の脳裏でこれほどやかましくするのかを。`,
      );
      await emperor.say_and_wait(`${chara17.sex}は誰だ？`);
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait('空が明るすぎて、月の姿は消えた。');
      await era.printAndWait('残るのは、太陽の尽きせぬ光だけ。');
      await era.printAndWait(`${you.name} は頭を下げ、目尻を赤くした。`);
      era.printButton('「吾が君、あの者は俺にとって非常に大切な人です。」', 1);
      era.printButton('「……誰だろう？」', 2);
      await era.input();
      await emperor.say_and_wait('そうか。');
      await era.printAndWait('重い足を上げ、皇帝は太陽のほうへ歩いていく。');
      await era.printAndWait(
        `${you.name} は${emperor.sex}がどこへ行くのかわからない。`,
      );
      await era.printAndWait([
        `だが ${you.name} はそれでも震えながら立ち上がり、`,
        emperor.get_colored_name(),
        ` のあとを追った——${emperor.sex}がどこへ行こうと。`,
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] re_bad_end_luna
  re_bad_end_luna: (() => {
    const title = '悠久の輪月';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${chara17.name} は遠く夕陽の下に立つ。風が緑の芝を起こし、${chara17.sex} の散った髪も起こす。`,
      );
      await era.printAndWait(
        `月夜が近づき、太陽はまだ落ちていない。${chara17.sex}は背を向け、${you.name} には${chara17.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${chara17.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${chara17.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `ついに、${you.name} は${chara17.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${chara17.sex}を見るが、${chara17.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「ひとつの魂が眠るたび、もうひとつの魂が目覚める。」',
      );
      await era.printAndWait(
        '？？？「一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。」',
      );
      await era.printAndWait(
        `${chara17.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      await luna.say_as_unknown_and_wait(
        `私は、あの皇帝をとても憎んでいました。`,
      );
      await era.printAndWait(`${you.name} は呆けて${chara17.sex}を見つめた。`);
      await luna.say_as_unknown_and_wait(
        `ですが最後に、${chara17.sex}は私に言いました。『あの弄臣は、はじめから吾が負けぬと信じていた』と。`,
      );
      await luna.say_as_unknown_and_wait(
        `だから${chara17.sex}は ${you.actual_name} に、永遠に覚めない美しい夢を贈ると。`,
      );
      await luna.print_and_wait(
        '？？？「皇帝の征途は、もう終わったのですね。」',
      );
      await era.printAndWait(
        `ルナのかつての憂いの目には迷いがある。あなたたちの願いはもう果たされたのに、${
          chara17.sex
        }はどうしてこれほど悵然としているのか。`,
      );
      await luna.say_and_wait('では、私の物語も、終わってしまうのでしょうか？');
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait('夜が降り、太陽の姿は消えた。');
      await era.printAndWait('天上に残るのは、明月の優しい抱擁だけ。');
      await era.printAndWait(`${you.name} は頭を下げ、目尻を赤くした。`);
      era.printButton('「俺は傍にいる。」', 1);
      era.printButton('「『皇帝』の物語は、永遠に終わらない。」', 2);
      await era.input();
      await luna.say_and_wait('そう、ですか。');
      await era.printAndWait('重い足を上げ、ルナは輪月のほうへ歩いていく。');
      await era.printAndWait(
        `${you.name} は${luna.sex}がどこへ行くのかわからない。`,
      );
      await era.printAndWait([
        `だが ${you.name} はそれでも震えながら立ち上がり、`,
        luna.get_colored_name(),
        ` のあとを追った——${luna.sex}がどこへ行こうと。`,
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] re_double_crowns
  re_double_crowns: (() => {
    const title = '抜山蓋世';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('これが第二冠だ！');
      await era.printAndWait('夢の実現に、また一歩近づいた。');
      await era.printAndWait(
        '人々は熱く語っている。ダービーで、シンボリルドルフがどれほど凄まじい実力を見せたかを。',
      );
      await era.printAndWait('なんという不思議！');
      if (i_emperor) {
        await era.printAndWait(
          '衆人と同じくこの驚きを噛みしめているように、皇帝は高く二本の指を掲げた。',
        );
      } else {
        await era.printAndWait(
          '衆人と同じくこの驚きを噛みしめているように、ルナは心からの笑みを見せた。',
        );
      }
      await era.printAndWait(
        'その後の数日、人々は熱く語り続けた。ダービーで、シンボリルドルフがどれほど凄まじい実力を見せたかを。',
      );
      await era.printAndWait(
        `${chara17.sex}の名は、歴史に残る偉大なウマ娘たちと並び称されている。`,
      );
      await era.printAndWait('あの輝き、そしてやがて翳った星たちと。');
      await era.printAndWait('だが、シンボリルドルフは違うらしい。');
      await era.printAndWait(
        `${you.name} だけが知っている。ダービーで、${chara17.sex}はさらに深い一歩を踏んだ——`,
      );
      await era.printAndWait('領域。');
      await era.printAndWait(
        `今この話をするだけで、${you.name} はなお深い畏敬を覚える。`,
      );
      await era.printAndWait(
        `だが考えを転じると、${you.name} はまた胸が詰まる。`,
      );
      await era.printAndWait(
        '先人も成し遂げた。だが時は一点の容赦もなく流れ、あらゆる偉大は思い出になるだけだ。',
      );
      era.printButton(
        '「今も現役で、本格化の力をわずかに残しているのは、マルゼンスキーだけだ。」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} は ${chara17.name} に語る。`);
      await era.printAndWait(
        `本格化が消えれば、どれほど強い${chara17.uma_sex_title}も衆人に埋もれ、わずかな記憶だけが残る。`,
      );
      await era.printAndWait(`抗えないことだ。いつか、${chara17.name} も……`);
      await era.printAndWait(
        `${you.name} の興奮の下に隠れた悲嘆を感じ取ったのか、${chara17.name} は静かにあなたを見ている。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('征途は、決して止まらぬ。');
      } else {
        await chara17.say_and_wait('私たちの夢……答えが見えた気がします。');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} にはその意味がわからない。だが ${chara17.name} に、あなたへ説明するつもりはないらしい。`,
      );
      await chara17.say_and_wait('エデン……');
      era.drawLine();
      await chara17.print_and_wait(
        `${you.name} と ${chara17.name} が別れたあと、${chara17.sex}はひとり学園の中庭へ来た。`,
      );
      await chara17.print_and_wait(
        '三女神の像を見、領域へ踏み入った光景を噛みしめ、世代の頂点に立つウマ娘は拳を握った。',
      );
      if (i_emperor) {
        await chara17.say_and_wait('桎梏など、永遠に存在すべきではない。');
      } else {
        await chara17.say_and_wait(
          `私は必ず、${you.actual_name} と私の願いを果たします。たとえ私が……`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' は',
        { color: buff_colors[1], content: ' [領域]', fontWeight: 'bold' },
        'を悟った！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] re_good_end
  re_good_end: (() => {
    const title = (emperor) => [
      ['エデン、私を見よ', { content: '（我を）', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 シンボリルドルフ/ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('ここは、どこ？');
      await luna.print_and_wait('ウマ娘は、突然夢から覚めたようだった。');
      await luna.print_and_wait('ここは、果てしない草原だ。');
      await luna.print_and_wait(
        `ウマ娘は走る。風が緑の芝を起こし、${chara17.sex}の散った髪も起こす。`,
      );
      await luna.print_and_wait(
        `${chara17.sex}の頭上には、太陽と月が同時にある。`,
      );
      await luna.print_and_wait(
        '日月の下、いくつかの影がウマ娘を見つめている。',
      );
      await luna.print_and_wait('三柱の女神——好奇の目で、その子を見ている。');
      await luna.print_and_wait('なるほど。');
      await luna.print_and_wait('ウマ娘は瞬きをした。');
      await luna.print_and_wait(
        `ウマ娘「${you.actual_name}、あなたはいつも私に休めと言いました。今……私は永遠に安らげる場所へ着きました。」`,
      );
      await luna.print_and_wait(
        'ウマ娘「初めて【エデン】の名を聞いたとき、それがどれほど壮大で美しい光景を含むか、想像できませんでした。」',
      );
      await luna.print_and_wait('ウマ娘「これは、まったく新しい世界です。」');
      await luna.print_and_wait(
        'ウマ娘「あるいはここにも生命がいるのでしょう。私たちと同じ喜怒哀楽を持って。」',
      );
      await luna.print_and_wait(
        'ウマ娘「多彩な物語と熱い願い、それから浪漫、愛情、そしてもがき。」',
      );
      await luna.print_and_wait('ウマ娘「私は、ついに着きました——」');
      await luna.print_and_wait(
        'ウマ娘の走りは次第に緩やかになり、ついには女神たちの前で止まった。',
      );
      await era.printAndWait(
        '三女神「子よ、すべてのはての……すべての始まりへ着いたことを祝おう。お前は、エデンへ来た最初のウマ娘だ。」',
      );
      await era.printAndWait(
        '三女神「我らはお前を報い、本当の夢を叶えてやろう！ では、願いを口にする前に、まだ尋ねたいことはあるか？」',
      );
      era.drawLine();
      await luna.print_and_wait(
        'ウマ娘は己の人生を思い返す。多くの画面が眼前を過ぎる。',
      );
      await luna.print_and_wait('ウマ娘「私たちの悲願と、とうてい届かぬ夢——」');
      await luna.print_and_wait('ウマ娘「私たちの伝承と、愛してきたすべて——」');
      await luna.print_and_wait(
        'ウマ娘「それらはなぜ、衰えず、一代また一代のウマ娘に受け継がれていくのですか？」',
      );
      await luna.print_and_wait(
        'ウマ娘は胸の疑問を口にした。だが女神たちが答える前に、彼女は自ら答えた。',
      );
      await luna.print_and_wait(
        'ウマ娘「ウマ娘とトレーナー……私たちのあいだの絆だから、でしょうか？」',
      );
      await luna.print_and_wait('ウマ娘は額を支え、顔を上げて粲然と笑った。');
      await luna.print_and_wait(
        `女神たちは愛おしげに${chara17.sex}の乱れた髪を撫でる。`,
      );
      await era.printAndWait('三女神「では、お前の願いは？」');
      await luna.print_and_wait(
        'ウマ娘は両腕を開き、この新しい世界を抱くようだった。',
      );
      await luna.print_and_wait('ウマ娘「夢が続いていく場所が欲しいのです。」');
      await luna.print_and_wait(
        'ウマ娘「ウマ娘が永遠に走り続けられる場所が欲しいのです。」',
      );
      await luna.print_and_wait(
        'ウマ娘「私たちを愛する者の歓声と祈りが聞こえ、勝利を祈ってくれているかぎり——」',
      );
      await luna.print_and_wait(
        'ウマ娘「私たちはいつでも挺身し、すべての強敵に勝てる場所が欲しいのです。」',
      );
      await luna.print_and_wait(
        'ウマ娘「人の世のエデンを！ 夢があるかぎり、すべてのウマ娘が行けるエデンを！」',
      );
      await era.printAndWait('女神たちは黙って頷いた。ウマ娘はまた口を開く。');
      await luna.print_and_wait(
        'ウマ娘「それから、私は戻ります。あのかたで、私の愛する人が待っていますから。」',
      );
      await era.printAndWait(
        '三女神「欲深い子だ……ふむ……だが我らも、願いをひとつに限るとは定めていなかったか？」',
      );
      era.drawLine();
      await era.printAndWait('レースは終わった。');
      await era.printAndWait(
        `人々が散ったあと、${you.name} は囲む記者と同僚から離れる口実を作り、コースへ戻った。`,
      );
      await era.printAndWait(`${you.name} は、会いたかったウマ娘を見た。`);
      await era.printAndWait(
        `${luna.sex}は背を向け、${you.name} には${luna.sex}の今の表情が見えない。`,
      );
      await era.printAndWait(
        `${luna.sex}はまだ優勝の光景に打たれているのかもしれない。あるいは ${you.name} の知らぬ昂りを噛みしめているのかもしれない。`,
      );
      await era.printAndWait(
        `あるいは${luna.sex}はただ疲れて、ひとりになりたいだけなのかもしれない。`,
      );
      await era.printAndWait(
        `${you.name} は力なく地面に座った。連日の疲労で、${you.name} は立ち上がる力さえほとんど残っていない。`,
      );
      await era.printAndWait(
        `${you.name} は顔を上げ、空を見る。遠い晴天には、まだ月がかかっている——日月同天。`,
      );
      await era.printAndWait(`${you.name} は長く息を吐いた。`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `ついに、${you.name} は${luna.sex}の呼びかけを聞いた。強い胸騒ぎを抱えて、${you.name} は${luna.sex}を見るが、${luna.sex}には応えなかった。`,
      );
      await era.printAndWait(
        `${you.name} はわからない。このとき跪くべきか、それとも愚かに笑うべきか。今 ${you.name} が向き合っているのは、ルナなのか、皇帝なのか？`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        'ひとつの魂が眠るたび、もうひとつの魂が目覚める。',
      );
      await luna.say_as_unknown_and_wait(
        '一方は哀しみ、一方は狂う。月と太陽のように、決して逢わず、互いに排し合う。',
      );
      await era.printAndWait(
        `${luna.sex}は果てしない空を見る。その面持ちは重く、深淵を見ているようだ。`,
      );
      era.printButton('「君は、ただの太陽なのかもしれない。」', 1);
      era.printButton('「君は、ただの月なのかもしれない。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} の言葉を聞き、${chara17.sex}は頭を下げた。`,
      );
      era.printButton('「だが君は、太陽でもあり、月でもあれる。」', 1);
      era.printButton('「だが君は、皇帝でもあり、ルナでもあれる。」', 2);
      await era.input();
      await era.printAndWait('視線は、日月の余暉の交わる光に沿う。');
      await era.printAndWait(
        `${luna.sex} は呆けて ${you.name} を見つめ、それから頰を赤らめ、目尻も赤くした。`,
      );
      await era.printAndWait(
        `${you.name} は手を伸ばし、${luna.sex}はあなたへ走る。ルナか？ 皇帝か？ ${you.name} はもうその問いを考えない。`,
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}の伸ばした手を握り、それから心ゆくまで抱き合い、涙を雨のように流した。`,
      );
      await era.printAndWait(
        `${you.name} は信じる。今このとき、${you.name} の腕の中の${luna.sex}、ただ ${you.name} と熱く抱き、口づけする${luna.sex}も、もうその問いには縛られていない。`,
      );
      await era.printAndWait(
        '深い口づけのあと、二人は息を整え、次の真心を澄ませる嵐の前に、一息つきたいと思っている。',
      );
      await era.printAndWait(
        `${you.name} は${luna.sex}があなたの胸に凭れた熱を感じる。こんな熾熱は、これまでなかった——皇帝の疑う余地のないものと、ルナの柔情が、ともにある。`,
      );
      await you.say_and_wait(
        '君は俺が愛する皇帝であり、俺を愛するルナだ。',
        true,
      );
      await era.printAndWait(
        `${you.name} はそう思ったが、しばらくして首を振り、懐の美人の小さな声の中で、${luna.sex}とともに芝生へ倒れた。`,
      );
      era.printButton('「俺の愛人の名は、シンボリルドルフだ。」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] re_triple_crowns
  re_triple_crowns: (() => {
    const title = '三冠達成';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait('怒号のように、世界中が熱く歓呼している。');
      await era.printAndWait(
        `またひとり、${chara17.uma_sex_title}がこの偉業を成し遂げた！`,
      );
      await era.printAndWait(
        '時宜を得て、管弦楽団が誰もが知る、この場に極めて似つかわしい交響曲を奏で始めた。',
      );
      await era.printAndWait('【皇帝】', { color: emperor.color });
      await era.printAndWait(
        `${you.name} は熱い涙を浮かべ、腰を支え、頭を下げた。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。約束も、夢も、まだ遠い。`,
      );
      await era.printAndWait('だが、しばらくだけでいい……しばらくだけでいい……');
      await era.printAndWait(`${you.name} は俯き、誰も知らぬ場所で号泣した。`);
      era.printButton('「おめでとう……」', 1);
      era.printButton('「史上……最も偉大な走りだ……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は ${chara17.name} に、尽きせぬ誇りを感じた！`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `${you.name} と心が通じたように、皇帝は高く三本の指を掲げた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} と心が通じたように、ルナは幸福の涙を流した。`,
        );
      }
      await era.printAndWait(
        `長いあいだ、息を切らした ${chara17.name} はコースを離れなかった。`,
      );
      await era.printAndWait(
        `人々は、${chara17.sex}が栄光にもっと長く浴したいのだと思っている。`,
      );
      await era.printAndWait(
        `だが ${chara17.name} の天を衝く戦意の下で、${you.name} はふと気づく。${chara17.sex}の足元が揺れている。`,
      );
      await era.printAndWait(
        `${you.name} は拳を握りしめた。かつてない寒気が ${you.name} の身体を覆った。`,
      );
      era.printButton('「まさか……」', 1);
      era.printButton('「怪我……」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `その夜、${chara17.name} はひとり中庭へ、三女神の像の下へ来た。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          '貴様らの築いた揺籃（牢獄）がどれほど堅かろうと……',
        );
      } else {
        await chara17.say_and_wait('あと少しで、私は入れる……');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_win
  sats_sho_win: (() => {
    const title = '臥薪嘗胆';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('まずは第一冠だ。');
      if (i_emperor) {
        await era.printAndWait(
          `${you.name} と同じくこの喜びを噛みしめているように、皇帝は高く一本の指を掲げた。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} と同じくこの喜びを噛みしめているように、ルナは顔を上げ、長く息を吐いた。`,
        );
      }
      await era.printAndWait(
        'これほどの圧倒的な強さ。これほどの疑う余地のない強さ。',
      );
      await era.printAndWait(
        '観客たちは伝説の開幕のような光景に、これまでで最も熱い歓声を上げた。',
      );
      era.printButton('「本当に実現できるかもしれない……皇帝なら。」', 1);
      era.printButton('「本当に実現できるかもしれない……ルナなら。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は覚えている。あの日、ルナが ${you.name} に言った言葉を。`,
      );
      await luna.say_and_wait(
        `すべての${chara17.uma_sex_title}が幸福になれる世界を、創ろう。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] saud_cup_win
  saud_cup_win: (() => {
    const title = '破竹の勢い';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex}は計画どおりレースを勝った。`);
      await era.printAndWait(`${you.name} の余光に同僚たちが見える。`);
      await era.printAndWait(
        '担当が戻って、楽な顔を作らねばならないまで、まだ少し時間がある。',
      );
      await era.printAndWait(
        `だから ${you.name} は、彼らの長い溜息も、自分へ向けられる羨望や嫉妬の視線も責めない。`,
      );
      await era.printAndWait(
        `${you.name} はシンボリルドルフのトレーナーだ。${chara17.sex}は勝ち、${you.name} も勝つ。`,
      );
      await era.printAndWait('だが');
      era.printButton(i_emperor ? '「ご凱旋……！」' : '「お疲れ様……！」', 1);
      await era.input();
      await era.printAndWait(
        `${chara17.name} の帰還を見て挨拶しようとしたが、別の${chara17.uma_sex_title}が${chara17.sex}を出迎えた。`,
      );
      await era.printAndWait(
        `${you.name} は思わず緊張する——マルゼンスキーだ。`,
      );
      await era.printAndWait(`このときに ${chara17.name} を刺激すれば——`);
      await era.printAndWait(
        '幸い、二人は少し話しただけで、どちらも笑顔を見せた。',
      );
      await era.printAndWait(
        `戻ってきたとき、${chara17.name} はまだ嬉しそうだった。`,
      );
      await era.printAndWait(
        `${you.name} は知っている。${chara17.sex}の笑顔は勝利のためではなく、マルゼンスキーとの今の会話のためだ。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('あれほどの怪物が、吾の狩りを待っている——');
      } else {
        await chara17.say_and_wait(
          '先輩に認められたこと、特にマルゼンに認められたことは、私にとって大きい。',
        );
      }
      await era.printAndWait(
        `${you.name} は知っている。すべてのウマ娘の中でも、マルゼンスキーは圧倒的な強さで知られている。`,
      );
      await era.printAndWait(
        `だが ${chara17.name} のトレーナーとして、${you.name} がはっきりしていることはひとつだ。`,
      );
      era.printButton('「勝つのは君だ。」', 1);
      era.printButton('「そのとき、『皇帝』の実力はさらに証明される。」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} がそう言うとは意外だったのか、${chara17.name} は小さく微笑んだ。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('きれいなことを言う。凱旋せよ！');
      } else {
        await chara17.say_and_wait(
          '本能を刺激された、ということでしょうか。もう走りたくないはずなのに、まだ戦慄を感じます。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ts_47_17
  ts_47_17: (() => {
    const title = '不協和音';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        '目標の ',
        toky_yus,
        ' が眼前に迫り、トレーニングも最終段階に入っている。',
      ]);
      await era.printAndWait([
        chara17.get_colored_name(),
        ' がトレーニングコースを疾走すると、取り巻く',
        chara17.uma_sex_title,
        'とトレーナーたちから感嘆の声が上がる。',
      ]);
      await era.printAndWait(
        `周回を重ねるたび、${you.name} は ${chara17.name} の調子が極めて良いことに気づく。走る${chara17.sex}の顔には、笑みさえ浮かんでいる。`,
      );
      await era.printAndWait(
        `それでも、${you.name} の胸には大きな不安が残っていた。`,
      );
      await era.printAndWait([
        sats_sho,
        ' のあと、ルナの肩に乗った、もともと山のように重い負担は、もはや収拾がつかないほどになっている。',
      ]);
      await era.printAndWait(
        `あるいは、${chara17.name} は表向きほど落ち着いていないのかもしれない。`,
      );
      if (i_emperor) {
        era.printButton(
          '「吾が君、もう十分お楽しみのようです。どうか御身をお大事に。」',
          1,
        );
      } else {
        era.printButton('「今日のトレーニングは、ここまでにしよう。」', 1);
      }
      await era.input();
      await era.printAndWait(
        `一周を終えたところで、${you.name} は声を上げた。`,
      );
      await era.printAndWait(
        `${you.name} の言葉を聞き、${chara17.name} は足を止めた。`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `しばらくして、息を切らした皇帝が ${you.name} のもとへ来る。なぜか、先ほどの晴れやかな表情は怒りに変わっていた。`,
        );
        await chara17.say_and_wait('弄臣よ、吾の状態を妨げる理由を述べよ。');
        era.printButton('「吾が君、興奮が過ぎているようです。」', 1);
        era.printButton('「狩りが近いほど、冷静であるべきです……」', 2);
        await era.input();
        await era.printAndWait(
          `はじめから、${you.name} は皇帝がトレーニングの強度に耐えられないなどと考えていない。`,
        );
        await era.printAndWait(
          `${you.name} が${chara17.sex}のトレーナーになったことも、${chara17.sex}を皇帝へと唆したことも。`,
        );
        await era.printAndWait(
          `はじめから、${you.name} が恐れていたのは、ルナが自らの内なる獣に押し潰されることだけだった。`,
        );
        await era.printAndWait(
          `${you.name} は、己を玩ぶような表情の皇帝を見て、頭を下げた。後者の身に乗る山岳のような圧が、${you.name} に冷や汗を流させる。`,
        );
        await era.printAndWait(
          `皐月賞を越え、これからダービーへ進む……今このとき、トレーニングの調子より、${you.name} はルナの身体を守りたかった。`,
        );
        await era.printAndWait(
          `${you.name} を見て、皇帝は冷たく鼻を鳴らし、そのままコースを離れた。`,
        );
        await era.printAndWait(
          `${you.name} は本能的に${chara17.sex}へ手を伸ばしたが、${chara17.sex}の足は速く、${you.name} は${chara17.sex}を止められなかった。`,
        );
        era.printButton('「すまない。」', 1);
        era.printButton('「しっかり休んでくれ。」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name} は溜息をつき、小走りに後を追った。`,
        );
      } else {
        await era.printAndWait(
          `しばらくして、息を切らしたルナが ${you.name} のもとへ来る。なぜか、先ほどの晴れやかな表情は翳っていた。`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}、私の調子は良いのです。日本ダービーは近い。もっと、鍛えなければなりません！`,
        );
        era.printButton(
          '「わかっている。だが、こういうときほど冷静でいろ。」',
          1,
        );
        era.printButton('「君の状態が、心配なんだ……」', 2);
        await era.input();
        await era.printAndWait(
          `はじめから、${you.name} はルナがトレーニングの強度に耐えられないなどと考えていない。`,
        );
        await era.printAndWait(
          `${you.name} が${chara17.sex}のトレーナーになったことも、${chara17.sex}を皇帝へと唆したことも。`,
        );
        await era.printAndWait(
          `はじめから、${you.name} が恐れていたのは、ルナが自らの内なる獣に押し潰されることだけだった。`,
        );
        await era.printAndWait(
          `だが、初めて会ったときの発散以来、ルナは長いあいだ ${you.name} に本心を話していない。`,
        );
        await era.printAndWait(
          `皐月賞を越え、これからダービーへ進む。今このとき、トレーニングの調子より、${you.name} はルナの思いを知りたかった。`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' を見て、ルナはしばらく考えた。',
          chara17.sex,
          'は ',
          you.get_colored_name(),
          ' に微笑みを向けた。',
        ]);
        await chara17.say_and_wait(
          'この程度もできなければ、私たちの理想は、とうてい実現できません。',
        );
        await era.printAndWait(
          `${you.name} はひそかに歯を食いしばり、まだ何か言いたかった。`,
        );
        await era.printAndWait(
          `ルナは二度、足を踏み、コースへ戻ろうとした。だが ${you.name} の心配そうな目を見て、結局足を止めた。`,
        );
        era.printButton('「すまない。」', 1);
        era.printButton('「しっかり休んでくれ。」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が差し出したタオルと水を受け取り、ルナは小さく頷いた。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ts_add
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} chara17 ルナ/皇帝
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} i_emperor 現在が皇帝人格か
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `トレーニングのあと、${chara17.name} はまだ足りない様子だった。`,
      );
      await era.printAndWait(
        `${chara17.sex}は遠く空の果てを見る。夕陽が沈み、最後の光が大地に落ちている。`,
      );
      await era.printAndWait(
        'すぐに夜になる。だがまだ足りない。まだ限界ではない——',
      );
      await era.printAndWait(
        `${you.name} は${chara17.sex}の心意を知っていた。`,
      );
      era.printButton('「走り続けろ！ その感覚を掴め。」', 1);
      era.printButton(
        '「今日はここまでだ。この先に、もっと大事なことがある。」',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('——征途の果てか？ 面白い。');
        } else {
          await chara17.say_and_wait(
            'ええ……なんだか、コツが掴めてきた気がします。',
          );
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('眠る……か？');
        } else {
          await chara17.say_and_wait('確かに。指摘してくれてありがとう。');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_41
  we_47_41: (() => {
    const title = '急転直下';
    /**
     * @param {CharaTalk} luna ルナ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `皎々たる明月の下、${you.name} は焦って門外の廊下を徘徊していた。`,
      );
      await era.printAndWait(
        `長くして、${you.name} は看護師の呼びかけを聞いた。`,
      );
      await era.printAndWait(
        `焦って病室へ駆け込むと、${you.name} はルナがベッドに横たわり、すでに眠っているのを見た。`,
      );
      await era.printAndWait(
        `${luna.sex}の顔は蒼いが、呼吸は整っている。それを見て、${you.name} は胸をなで下ろした。`,
      );
      await era.printAndWait(
        '菊花賞のあと、ルナは緊急でシンボリ家の私設病院へ送られた。',
      );
      await era.printAndWait('検査の結果、医師の診断は——ルナの過労だった。');
      await era.printAndWait(
        `身体は弱いが、ルナがしっかり休めば、${luna.sex}はなおジャパンカップに間に合う。`,
      );
      era.printButton('「ジャパンカップか——」', 1);
      await era.input();
      await era.printAndWait(
        `ルナは静養が必要なので、${you.name} は${luna.sex}の様子を確かめたあと、足音を忍ばせて門外へ出た。`,
      );
      await era.printAndWait(`窓の外の夜色を見て、${you.name} は頭が痛んだ。`);
      await era.printAndWait(
        'ジャパンカップ。日本のウマ娘すべての悲願……主場で最も壮大なレースであるはずなのに、海外の強豪に勝利を奪われ続けている。',
      );
      await era.printAndWait(
        `ルナと ${you.name} の夢を果たすため、すべてのウマ娘が幸福になれる世界へ至るため。`,
      );
      await era.printAndWait(
        'ジャパンカップは、ルナが越えねばならない試練だ。',
      );
      await era.printAndWait(
        `${you.name} は振り返って扉を見る。ルナは扉の向こうのベッドで休んでいる。`,
      );
      await era.printAndWait(
        `${you.name} は溜息をついた。${luna.sex}の蒼い顔を思い浮かべると、${you.name} の本来揺るがぬ心が揺れる。`,
      );
      await era.printAndWait(
        'ウマ娘が走る姿はなんと麗しいか。だがそこに潜む危機は、刃を交える戦場に劣らない。',
      );
      await era.printAndWait(
        '一瞬の油断、一瞬のミスがあれば、ウマ娘は二度と立ち上がれなくなる。',
      );
      await era.printAndWait(
        `ルナはまだ若い。${luna.sex}には、まだ機会がある……必ずしも今回でなくてもいい。`,
      );
      await era.printAndWait(
        `${you.name} は自分を説得しようとする。だが ${you.name} はわかっている。全日本がルナ——シンボリルドルフへ向ける期待は、${luna.sex}の「臨戦離脱」を許さない。`,
      );
      await era.printAndWait('ルナも、ここで諦めるつもりはないはずだ。');
      await era.printAndWait(
        `${you.name} は焦って髪を掻き、思いを尽くすうち、睡魔が ${you.name} を覆った。`,
      );
      era.printButton('「明日、ルナと話そう……」', 1);
      await era.input();
      await era.printAndWait(`${you.name} も疲れ果てていた。`);
      await era.printAndWait(
        `だが翌朝、目を開けたとき、${you.name} は自分の上に掛け布団がかかっているのに気づいた。`,
      );
      await era.printAndWait(
        `${you.name} は傍らの扉を見る。半開きで、部屋で休んでいるはずのルナの姿はない。`,
      );
      era.printButton('「まさか！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は悟った。ルナは行動で、${you.name} へ${luna.sex}の決意を示したらしい。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} は生徒会の扉を開けたが、中は人で溢れていた——庶務たちが各種の書類を手に、ルナへこの数日の仕事を報告している。`,
      );
      await era.printAndWait(
        `ルナは ${you.name} を見て、口角をわずかに結んだ。`,
      );
      await luna.say_and_wait('トレーナー、何かありましたか？');
      await era.printAndWait(
        `${you.name} は息を切らし、皆がじっとこちらを見ているのに気づき、仕方なく作り笑いをした。`,
      );
      era.printButton('「忘れ物を……」', 1);
      era.printButton('「君はちゃんと……」', 2);
      await era.input();
      await era.printAndWait(
        `言葉の半ばで、${you.name} はふと気づく。ルナが自分を見つめる紫の瞳に、哀願が宿っている。`,
      );
      await luna.say_and_wait('私は大丈夫です。', true);
      await era.printAndWait(
        `${you.name} は${luna.sex}の口の形を読んだ。${you.name} は${luna.sex}の意思に逆らえない。幼いころから、ずっと……`,
      );
      era.printButton('「いや、大したことじゃない。」', 1);
      era.printButton('「すまない……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} は魂の抜けたように生徒会を離れた。${you.name} はわかっている。学園はルナを必要としている。`,
      );
      await era.printAndWait(
        'ルナもわかっている。日本は、今このときシンボリルドルフを失えない。',
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
