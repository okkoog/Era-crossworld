// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file ナイスネイチャ - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/106000-Nice-Nature/daily-60.js');

module.exports = {
  ...__JaOriginal,
  async office_rest(nature) {
    await nature.say_and_wait(
      "가끔은 이렇게 둘이서 아무것도 안 하고 멍하니 있는 것도 나쁘지 않네. 아주 가끔이라면 말이야.",
    );
  },

  // [번역 대상] cl_christmas
  cl_christmas: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(
        'もしもし？ あたしだよ？ 詐欺電話じゃない、本人だよ？',
      );
      await era.printAndWait(
        '受話器の向こうから、聞き慣れた声。ナイスネイチャだ。',
      );
      await nature.say_and_wait(
        'ねえ、公園まで来てくれない？ 今……うん、あとで！',
      );
      era.drawLine({ content: '⏰公園に着いた⏰' });
      await nature.say_and_wait(`あ、来た来た、${callname}！ こっちこっち～`);
      await era.printAndWait('遠くからでも、手を振るナイスネイチャが見える。');
      await era.printAndWait('今日はクリスマスだ');
      await nature.say_and_wait(
        `まあ、大した用事じゃないよ。${self_call}、予定なさそうだったから、一緒にクリスマスしようって誘っただけ！`,
      );
      await nature.say_and_wait('だめ……かな？');
      await era.printAndWait(
        '肯定の返事をもらうと、ナイスネイチャは再び笑みを浮かべ、後ろからギフトボックスを差し出した',
      );
      await nature.say_and_wait(
        'これ！ メリークリスマス！ 手編みのマフラー……あんまり上手じゃないし、柄も地味だけど……',
      );
      await nature.say_and_wait('でも！ よかったら、受け取って！');
      await era.printAndWait(
        '箱のなかは丁寧に編まれたマフラーで、ナイスネイチャの気遣いがよくわかる',
      );
      await nature.say_and_wait(
        '気に入った？ そ、そっか……気を遣って言ってるんじゃないよね？',
      );
      await era.printAndWait(
        'ナイスネイチャの不安を解いたあと、ふたりは穏やかなクリスマスを過ごした……',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] cl_fans
  cl_fans: (() => {
    const title = 'ファン感謝祭';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('わあ——すごい賑わいだね？');
      await era.printAndWait(
        '来客で埋まった校内を見て、ナイスネイチャが感嘆する',
      );
      await nature.say_and_wait(
        'でも大半はテイオーとかマックイーンみたいな、輝いてる大スターのファンでしょ？',
      );
      await nature.say_and_wait('あたしみたいな端役は裏方に——');
      await era.printAndWait('？？？「あ！ ネイチャちゃん見つけた！」');
      await era.printAndWait(
        `ナイスネイチャが踵を返して去ろうとしたとき、女の声が${nature.sex}を呼び止めた。`,
      );
      await nature.say_and_wait('えっ？ 八百屋のおばさん？ どうして来たの？');
      await era.printAndWait(
        '八百屋のおばさん「決まってるでしょ、ネイチャちゃんの学園生活を見に来たのよ！ あたしだけじゃない——」',
      );
      await nature.say_and_wait(
        'あ！ 焼肉屋のおじさん！ 売店のおばあちゃん……みんな来てる……',
      );
      await era.printAndWait(
        '八百屋のおばさん「来るに決まってるでしょ！ あたしたち、ネイチャちゃんのファンなんだから！」',
      );
      await nature.say_and_wait(
        'うっ……その気持ちは嬉しいよ……でも、こう……なんだか、恥ずかしい……',
      );
      await era.printAndWait(
        '三つ編みで顔を隠したナイスネイチャを、商店街の人たちが取り囲む。',
      );
      await era.printAndWait(
        `どうやら${nature.sex}は、このファン感謝祭をとても楽しく過ごしそうだ……`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] cl_valentine
  cl_valentine: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`やあ、${callname}、おはよう`);
      await era.printAndWait(
        '朝早く学園に着くと、ナイスネイチャが校門で待ちかねていたように現れる。',
      );
      await nature.say_and_wait('えっと……その……まあ、あとでトレセンで！');
      await era.printAndWait(
        `${nature.teen_sex_title}は何か言いたげだったが、結局口に出せず、校門の中へ走っていった。`,
      );
      era.drawLine({ content: '⏰昼になった⏰' });
      await nature.say_and_wait(`おっ～${callname}、${self_call} だよ？`);
      await era.printAndWait(
        '食堂で食事中、ナイスネイチャが突然そばに現れる。',
      );
      await nature.say_and_wait(`${callname} にいいものあげる。これ、チョ……`);
      await era.printAndWait(
        'ナイスネイチャは言いよどみ、言いにくそうにしている。',
      );
      await nature.say_and_wait(
        `チョ……蕎麦の割引券！ 前に商店街のおばさんが何枚かくれて、あたし使い切れないから ${callname} に！ はははは……じゃあ、また！`,
      );
      await era.printAndWait(
        'ナイスネイチャは様子がおかしいまま、食堂から逃げていった',
      );
      era.drawLine({ content: '⏰夜になった⏰' });
      await nature.say_and_wait('ここまででいいよ？');
      await era.printAndWait(
        'ナイスネイチャを栗東寮の前まで送り、帰ろうとしたところで衣の裾を掴まれる。',
      );
      await nature.say_and_wait('こ、これ！ 受け取って！');
      await era.printAndWait(
        'ナイスネイチャは頬を真っ赤にして、勇気を出して後ろからチョコを差し出した',
      );
      await nature.say_and_wait(
        '一応……手づくりのチョコ。嫌いなら、受け取らなくてもいいよ……？',
      );
      await era.printAndWait('こんな大切な贈り物を、断れるはずがない。');
      await era.printAndWait('ナイスネイチャとの絆が、また一段深まった。');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] good_morning
  good_morning(nature, callname, self_call) {
    const buffer = [
      () => nature.say(`오늘 훈련 스케줄은 뭐야? 나도 리스트 좀 보여 줘~`),
      () =>
        nature.say(
          `어제 고깃집 아저씨가 신메뉴가 나왔다고 하시던데, 나중에 같이 가 볼래? 내가 쏠게!`,
        ),
      () =>
        nature.say(
          `쉿! 조용히! 봐 봐, 저기 고양이가 자고 있어. 우리 다른 데로 돌아갈까?`,
        ),
      () =>
        nature.say(`오! ${callname}, 기분이 좋아 보이네. 뭐 좋은 일이라도 있었어?`),
      () =>
        nature.say(
          `그러고 보니 저녁 메뉴는 정했어? 아직이면 이 ${self_call}가 실력 발휘 좀 해 볼까!`,
        ),
    ];
    if (era.get('status:60:熬夜') > 0) {
      buffer.push(() => {
        nature.say(`으하암…… ${callname}? 왜 하품을 하고 그래? 아하하……`);
        nature.say(
          `결국 들켜 버렸네. 사실 ${self_call}, 만담 영상 하나만 보고 자려고 했는데 너무 재미있어서 정신을 차려 보니……`,
        );
        nature.say(
          `벌써 새벽이더라고. 근데 진짜 재미있었어! ${callname}도 한번 볼래?`,
        );
      });
    } else if (era.get('base:60:体力') === era.get('maxbase:60:体力')) {
      buffer.push(() => {
        nature.say(
          `오~ ${callname}, 안녕! 덕분에 ${self_call}는 아주 푹 쉬었어! 맛있는 것도 잔뜩 먹고 잠도 푹 자서 지금은 기운이 넘쳐!`,
        );
        nature.say(
          `왠지 더 젊어진 기분이야! 조금 아쉬운 건…… 아, 아니야. 아무튼 다음 일정을 알려 줘!`,
        );
      });
    } else {
      buffer.push(() =>
        nature.say(
          `아, ${callname}, 좋은 아침~ 푹 잤더니 피로가 싹 가신 느낌이야. 누가 마사지까지 해 주면 최고겠지만~ 뭐, 그건 그렇고 다음 일정은 뭐야?`,
        ),
      );
    }
    get_random_entry(buffer)();
  },

  // [번역 완료] good_night_normal
  good_night_normal(nature, you, callname) {
    era.print(
      `바쁜 하루가 끝나고 ${you.name}은(는) ${nature.name}를 학생 기숙사 앞까지 배웅했다.`,
    );
    nature.say(`오늘도 고생 많았어! 내일 봐, ${callname}!`);
    era.print(
      `손을 흔들며 멀어지는 ${nature.name}의 뒷모습을 지켜본 뒤 ${you.name}도 자신의 숙소로 돌아가 휴식을 취했다.`,
    );
  },

  // [번역 대상] good_night_sex
  async good_night_sex(nature, you, callname, check) {
    era.print(
      `忙しい一日が終わり、${you.name} は ${nature.name} を学生寮の前まで送る。`,
    );
    era.print(
      `${you.name} がいつもどおり手を振って別れようとした瞬間、袖をナイスネイチャに掴まれた。`,
    );
    era.print(
      '下を見ると、夕陽のせいなのか、うつむくナイスネイチャの頬がやけに赤い。',
    );
    era.print(
      `短い沈黙のあと、赤毛の${nature.teen_sex_title}が、もじもじと口を開いて気まずさを破る。`,
    );
    nature.say(
      '今日……外泊届、出してあるから……だから……もう少し一緒にいても、いいんだよ？ その……もし……',
    );
    nature.say(`もし ${callname} が望むなら……も、もっと先のことも——`);
    era.print(
      `ここまでで${nature.teen_sex_title}の頬は真っ赤に燃え、潤んだ瞳が ${
        you.name
      } の目を見つめている。${nature.sex}が続きを言わなくても、${
        you.name
      } にはもうわかっていた。`,
    );
    era.printButton('応じる', 1);
    era.printButton('断る', 2, { disabled: check === 2 });
    const ret = await era.input();
    if (ret === 1) {
      nature.say('ほ、ほんと！');
      era.print(
        `恥ずかしそうだったナイスネイチャの顔に、喜びが一気に広がる。${you.name} がもう一度確かめる暇もなく、腕に抱きつき、耳元で小さく囁いた。`,
      );
      nature.say(
        `今夜のトレーニングも、よろしくね？ トレ・ー・ナ・ー・${you.adult_sex_title} ❤️`,
      );
      era.print(
        `こうして ${
          you.name
        } はナイスネイチャに手を引かれ、下校中の${nature.uma_sex_title}たちに温かく見送られながら、通りの向こうへ歩いていった……`,
      );
    } else {
      nature.say('そっか……そうだよね……');
      era.print(
        `${nature.teen_sex_title}は袖を掴んでいた手を放し、隠しきれない寂しさを顔に浮かべる。`,
      );
      nature.say(
        `うん、大丈夫。あたしもね、${callname}、今日あんなに疲れてるのに。ちゃんと休んだほうがいい。さっきのは聞かなかったことにして。おやすみ、${callname}、また明日！`,
      );
      era.print(
        `寂しそうに去っていく${nature.teen_sex_title}の背中を見て、${
          you.name
        } の胸に言いようのない思いが残った。`,
      );
    }
    return ret;
  },

  // [번역 완료] load_talk_normal
  async load_talk_normal(nature, callname, self_call) {
    await nature.say_and_wait([
      callname,
      '이라면 분명 더 나은 길을 찾아낼 수 있을 거야……',
      self_call,
      '는 믿고 있으니까. 지금도, 예전에도, 앞으로도……',
    ]);
  },

  // [번역 완료] load_talk_pregnant
  async load_talk_pregnant(nature, callname) {
    await nature.say_and_wait([
      '아하하, 역시 그런가. 결국 네이처 씨는…… 하지만 잠깐, 안 돼,',
      callname,
      '우리 아이만큼은, 적어도, 적어도 이름만이라도……',
    ]);
    await nature.say_and_wait(
      '이 아이에게 아빠가 없어도 상관없어. 나 혼자서라도 키울 수 있어. 하지만 제발, 부탁이야. 이름 하나만이라도……',
    );
    await nature.say_and_wait([
      '『하나츠키 네이처』? 『엘레강스 네이처』? 그런 이름이라도 좋아. 네이처 씨의 마지막 부탁이야,',
      callname,
      '이름을 지어 줘……',
    ]);
    await era.printAndWait(
      [nature.get_colored_name(), '「', callname, '————！！」'],
      { color: nature.color, fontSize: '3rem' },
    );
  },

  // [번역 완료] o_c_pray
  async o_c_pray(nature, self_call, dice) {
    await nature.say_and_wait(`어디 보자, ${self_call}의 오늘 운세는——`);
    await era.printAndWait(
      `${nature.name}가 가볍게 점괘 통을 흔들자 잠시 후 종이 한 장이 툭 떨어졌다.`,
    );
    if (dice < 0.1) {
      await nature.say_and_wait(
        `오~ 대길! 이 ${self_call}에게도 빛날 날이 오는 건가…… 농담이야. 그래도 이런 행운이 레이스까지 이어졌으면 좋겠네!`,
      );
    } else if (dice < 0.25) {
      await nature.say_and_wait('중길—— 괜찮은걸? 어쩌면 조만간 좋은 일이 생길지도 몰라.');
    } else if (dice < 0.6) {
      await nature.say_and_wait(
        '음, 소길이네. 뭐 나쁘지 않은 결과지. 근데 위에서부터 세면…… 이것도 결국 3위인가?',
      );
    } else {
      await nature.say_and_wait(
        '으와아…… 설마 이런 점괘가 나오다니…… 뭐, 운이 좀 나쁜 것뿐이니까 신경 쓰지 마! 이상한 일 같은 건 안 생기겠……지……?',
      );
    }
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(nature, callname, self_call, call_20) {
    await nature.say_and_wait([
      '그러고 보니 예전에 ',
      call_20,
      '와 몇 번 낚시하러 온 적이 있거든,',
      nature.sex,
      '에게 요령을 잔뜩 배웠지! 어때,',
      callname,
      '？ ',
      self_call,
      '가 한 수 가르쳐 줄까?',
    ]);
  },

  // [번역 완료] o_r_walking
  async o_r_walking(nature, callname) {
    await nature.say_and_wait(
      `정말 좋은 날씨네~ 아예 점심도 여기 강가에서 먹을까? ${callname}도 같이 할래?`,
    );
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `이 집게 힘이 너무 없어 보이는데 정말 뽑히긴 하는 거야? 뭐? 예전에 특훈으로 익힌 비기라고? ${callname}에게도 그런 청춘이 있었구나. 그럼 ${self_call}에게 보여 줘!`,
      );
    } else {
      await nature.say_and_wait(
        `오락실인가…… 어린애들이 자주 놀러 오는 곳이네. 나? 난 자주 오는 타입은 아니야! ${self_call}는 가사 전담파거든. 뭐, 가끔 같이 노는 건 나쁘지 않지. 아주 가끔이라면.`,
      );
    }
  },

  // [번역 완료] o_s_dating
  async o_s_dating(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `저기…… 손, 잡아도 될까? 봐 봐…… 이러는 게 더 데이트 느낌 나지 않아? 정말? 에헤헤…… ${callname}의 손은 따뜻하네——`,
      );
    } else {
      await nature.say_and_wait(
        `피곤해? 그럼…… ${self_call}의 무릎베개라도 해 볼래? 아, 얼굴 이쪽으로 돌리지 마! 부, 부끄럽잖아……`,
      );
    }
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(nature) {
    await nature.say_and_wait(
      `뭐가 나올까? 뭐 십중팔구 3등상이겠지만…… 혹시 모르잖아?`,
    );
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(nature, callname, self_call) {
    await era.printAndWait(`${nature.name}와 함께 노래방에 갔다……`);
    await nature.say_and_wait('——어, 어땠어? 내가 부른 노래?');
    await era.printAndWait(
      `노래가 끝나고 ${nature.name}는 조금 긴장한 채 감상을 기다렸다.`,
    );
    await nature.say_and_wait(
      `천상의 목소리라니…… 너무 과장하잖아! ${callname}, ${self_call}에게 달콤한 말 해 봤자 얻을 건 없어!` +
        `자! 다음은 ${callname} 차례야!`,
    );
    await era.printAndWait(`${nature.name}와 즐거운 시간을 보냈다.`);
  },

  // [번역 완료] o_s_movie
  async o_s_movie(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `연애 영화? ${callname}은(는) 의외로 소녀 감성이네? 내가 좋아할 것 같다고? 하하하——`,
      );
      await nature.say_and_wait(
        `이런 소재는 어린 학생들이나 꽁냥거리는 커플들에게 어울리지. 그래도 ${callname}이(가) 보고 싶다면 같이 봐 줄게.`,
      );
      await nature.say_and_wait(`${callname}과(와) 함께 볼 수 있다면……`, true);
    } else {
      await nature.say_and_wait(
        '와…… 이 포스터 진짜 박력 넘치네. 거대 로봇이랑 닭 모양 괴수의 대결이라니, 설정은 잘 모르겠지만 꽤 재미있어 보여. 오늘은 이걸로 할까?',
      );
    }
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `이쪽에도 맛있는 게 잔뜩 있네. ${callname}은(는) 뭐 먹고 싶어? 여기? 좋아, 가자!`,
      );
      await nature.say_and_wait(
        '일단 트레이너가 좋아하는 음식을 메모해 두고……',
        true,
      );
    } else {
      await nature.say_and_wait(
        '음…… 배가 좀 고파졌는데, 이 근처에서 뭐라도 먹고 갈까?',
      );
    }
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(nature, callname, self_call) {
    await era.printAndWait(`${nature.name}와 함께 쇼핑몰을 구경했다……`);
    await nature.say_and_wait('오~ 이 옷 꽤 귀여운걸——');
    await era.printAndWait(
      `${nature.name}는 쇼윈도에 전시된 옷을 보며 감탄했다.`,
    );
    await nature.say_and_wait(
      `그치? ${callname}도 그렇게 생각하지? ……자, 잠깐! 내가 입어 보고 싶다는 뜻은 아니야!`,
    );
    await nature.say_and_wait(
      `봐 봐, 이런 샤랄라한 스타일은 젊은 애들한테 어울리지. ${self_call}한테는 안 어울린다니까!`,
    );
    await era.printAndWait(
      `계속된 권유에도 ${nature.name}는 몇 번이고 거절하다가 결국 도망치듯 자리를 피했다.`,
    );
  },

  // [번역 완료] office_cook
  async office_cook(nature, callname, self_call) {
    await nature.say_and_wait(
      `요리는 이 ${self_call}에게 맡기라고! ${callname}은(는) 저기 가서 좀 쉬고 있어! 자, 어서 어서!`,
    );
  },

  // [번역 완료] office_game
  async office_game(nature, self_call) {
    await nature.say_and_wait(
      `오? 이 ${self_call}에게 도전하겠다고? 배짱 좋은걸! 그럼 진 사람이 이긴 사람 소원 하나 들어주기다? 그래야 의욕이 생기지!`,
    );
  },

  // [번역 완료] office_gift
  async office_gift(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `에? 이거 나 주는 거야? 고마워, ${callname}! 내 취향을 잘 모르겠다고? 괜찮아, ${callname}이(가) 나를 생각해서 챙겨 줬다는 것만으로도 충분히 기쁘니까!`,
      );
    } else {
      await nature.say_and_wait(
        `뭐야 뭐야? 선물? 와아! 고마워, ${callname}! 지금 바로 열어 봐도 돼?`,
      );
    }
  },

  // [번역 완료] office_prepare
  async office_prepare(nature, callname) {
    await nature.say_and_wait(
      `상점가 식구들이랑 ${callname}의 기대를 저버리지 않을게!`,
    );
  },

  // [번역 완료] office_study
  async office_study(nature, callname) {
    await nature.say_and_wait(
      `헤에— ${callname}이(가) 이런 문제까지 풀 줄 알다니 의외인걸? 혹시 예전엔 수재였어?`,
    );
  },

  // [번역 완료] out_river_talk
  async out_river_talk(nature, callname) {
    await nature.say_and_wait('……그래서 야채가게 아주머니가 또……');
    await era.printAndWait(
      `시원하게 불어오는 강바람을 느끼며 ${nature.name}가 들려주는 상점가의 시시콜콜한 이야기를 듣고 있었다.`,
    );
    await nature.say_and_wait(`……${callname}? 듣고 있어?`);
    await era.printAndWait(
      `반응이 없는 게 서운했는지 ${nature.name}가 삐친 목소리로 투정을 부렸다.`,
    );
    await era.printAndWait(
      `적절히 대답하며 달래 주자 ${nature.name}는 다시 아까처럼 신나서 이야기를 이어 갔다……`,
    );
  },

  // [번역 완료] s_a_dating
  async s_a_dating(nature, callname) {
    await nature.say_and_wait(
      `학원에서 이런 짓을…… 아무래도 주변 시선이 좀 신경 쓰이긴 하네…… 그래도 ${callname}이(가) 상관없다면——`,
    );
  },

  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(nature, callname) {
    await nature.say_and_wait(
      `빌어먹을!!!!! 다들, 그리고 ${callname}이(가) 나한테 그렇게 기대를 걸어 줬는데 나는——`,
    );
  },

  // [번역 완료] s_r_lunch
  async s_r_lunch(nature, self_call) {
    await nature.say_and_wait(
      `쨔잔! ${self_call}표 수제 도시락이야! 매일 영양 균형을 잘 맞춰야 한다니까!`,
    );
  },

  // [번역 완료] select
  select(nature, self_call) {
    if (Math.random() < 0.5) {
      nature.say(`무슨 일이야, 무슨 일? ${self_call}에게 볼일이라도 있어?`);
    } else {
      nature.say(`응? 할 일이 있는 거야? 그럼 ${self_call}가 같이 가 줄게!`);
    }
  },

  // [번역 완료] talk
  async talk(nature, callname, self_call) {
    const buffer = [];
    switch (era.get('cflag:60:干劲')) {
      case -2:
        buffer.push(
          () => nature.say_and_wait('아아…… 몸에…… 기운이 하나도 안 나……'),
          () =>
            nature.say_and_wait(
              '아, 안 돼! 머릿속에 안 좋은 생각만 가득해…… 빨리 진정해야 하는데……',
            ),
        );
        break;
      case -1:
        buffer.push(
          () => nature.say_and_wait('으음—— 왠지 의욕이 좀 안 생기네.'),
          () =>
            nature.say_and_wait('몸 여기저기가 찌뿌둥한데…… 좀 쉬는 게 나을까?'),
        );
        break;
      case 0:
        buffer.push(
          () =>
            nature.say_and_wait(
              `안녕, ${callname}. 오늘 훈련 내용은 뭐야?`,
            ),
          () =>
            nature.say_and_wait(
              `훈련이든 레이스든 뭐든 ${callname}의 판단에 맡길게~ 내가 할 수 있는 범위에서 해 볼 테니까.`,
            ),
          () => nature.say_and_wait(`하아암—— 아, ${callname}. 오늘 일정은 어떻게 돼?`),
        );
        break;
      case 1:
        buffer.push(
          () =>
            nature.say_and_wait(
              '음~ 느낌이 좋은데? 이 기세라면 혹시…… 아무것도 아냐! 하하하하……',
            ),
          () => nature.say_and_wait('정말 좋은 날씨네. 오늘은 무슨 일이 생길까?'),
          () =>
            nature.say_and_wait(
              `오~ 왠지 좋은 일이 생길 것 같은 예감이 들어. ${callname}은(는) 어때?`,
            ),
        );
        break;
      case 2:
        buffer.push(
          () =>
            nature.say_and_wait(
              '오쓰~! 오늘도 전력으로 가 보자고—— 농담이야. 뭐, 가능한 범위에서 최선을 다해 볼게.',
            ),
          () =>
            nature.say_and_wait(
              `${self_call}, 컨디션 최고! 이대로 가볍게 두 바퀴 뛰어 볼까? 결과에 너무 큰 기대는 하지 말고.`,
            ),
          () =>
            nature.say_and_wait(
              `오? ${callname}, 안녕~ 같이 아침이라도 먹거나 산책할래? 내가 쏠게!`,
            ),
        );
    }
    await get_random_entry(buffer)();
  },
};
