// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/104600-Smart-Falcon/edu-46"),

  // [번역 대상] be_crazy_fan
  be_crazy_fan: (() => {
    const title = 'Freesia';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`평범하기 그지없는 어느 날 아침`);
      await falcon.say_and_wait(`${callname}、今日も頑張ろうね⭐`);
      await era.printAndWait(
        `연이은 실패로 인해 많은 팬에게 의구심을 사고 있었지만, 팔코의 응원 덕분에 ${you.name}はトレーニング計画を続けている。`,
      );
      await you.say_and_wait(`今日のファル子、よろしくね？`);
      await falcon.say_and_wait(
        `——! ${callname}의 요청이라면, 팔코도 계속해서 노력할게⭐`,
      );
      await era.printAndWait(
        `수많은 경쟁자 사이에서 두각을 나타내며, 매일 흘린 땀방울이 마침내 보답을 받기 시작했다.`,
      );
      await era.printAndWait(
        `この仕事でファル子の名を広げられれば、この先のダートも`,
      );
      await falcon.say_and_wait(`만약 팔코가 도망쳐 버린다면?`);
      await era.printAndWait(
        `何かを待つ${falcon.name}が、焦った目で${you.name}を見る。`,
      );
      era.printButton(`追いかけるしかない！`, 1);
      await era.input();
      await falcon.say_and_wait(`지평선 끝까지 쫓아올 거야?`);
      await era.printAndWait(`刺すような光がステージに落ちる。`);
      await you.say_and_wait(`そこがファル子の大ステージ！`);
      await era.printAndWait(
        `役者たちが自分の台詞を小さく唱え、撮影班がカメラの動作を最後に確認する。`,
      );
      await falcon.say_and_wait(
        `道がなければファル子が見つける！ 目標を見つけたら、すぐつかまえて！`,
      );
      await era.printAndWait(`감독이 맨 앞줄에 자리를 잡고 앉았다.`);
      await you.say_and_wait(`——大きな愛をつかみ取れ！`);
      await era.printAndWait(`각자 위치로! 모두가 주인공의 등장을 기다리고 있었다.`);
      await falcon.say_and_wait(
        `최강의 ${falcon.uma_sex_title} 아이돌, ${falcon.name}♪ 오늘도 도착 완료⭐`,
      );
      await era.printAndWait(`귀여운 의상을 입은 팔코가 등장했다.`);
      era.printButton(`근처를 조금 돌아다녀 보자`, 1);
      era.printButton(`席を取ってファル子のステージを見る`, 2, {
        disabled: true,
      });
      if ((await era.input()) === 1) {
        await era.printAndWait(`아무도 없는 백스테이지 준비실로 돌아왔다.`);
        await era.printAndWait(`なぜか気分も上がっている。`);
        await you.say_and_wait(
          `공기는 조금 탁하지만, 여기에서도 ${falcon.name}의 아름다운 노랫소리가 들려왔다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「こんにちは。${falcon.name}의 트레이너님이신가요?」`,
        );
        await era.printAndWait(
          `いつの間に控え室にいた${falcon.uma_sex_title}.`,
        );
        await you.say_and_wait(`응, 내가——`);
        await era.printAndWait(`반응할 틈도 없이 가슴에서 날카로운 통증이 전해졌다.`);
        await era.printAndWait(
          `${falcon.uma_sex_title}「はじめまして、トレーナー${you.adult_sex_title}。それから、さようなら。」`,
        );
        await era.printAndWait(
          `두 번째 칼날을 휘두르려던 ${falcon.uma_sex_title}に、${you.name} が手近な化粧品を投げて当てた。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「ん——調子に乗るな！うわあ！！！」`,
        );
        await era.printAndWait(
          `肩掛けから${falcon.uma_sex_title}対策スプレーを出した${you.name}が、震えながら立つ。`,
        );
        await era.printAndWait(
          `비명을 지르는 ${falcon.uma_sex_title}를 무시하고, 스프레이의 가스를 끝까지 눌러 뿜어냈다.`,
        );
        await you.say_and_wait(`このことは、ファル子に伝えなきゃ。`);
        await era.printAndWait(
          `무의식적으로 가방을 치켜든 ${you.name}は、即死だけは避けられた。`,
        );
        await era.printAndWait(
          `하지만 아드레날린의 자극 속에서도, 멈추지 않는 피가 밖으로 흘러넘치고 있었다.`,
        );
        await you.say_and_wait(`ここは危ない。ここで巻けない。`);
        await era.printAndWait(`ここを出なきゃ。`);
        await era.printAndWait(
          `그렇게 생각하며 떠나려던 ${you.name}의 가방을, ${falcon.uma_sex_title}がでたらめに伸ばした両手で掴む。`,
        );
        await you.say_and_wait(`まずい。`, true);
        await era.printAndWait(
          `巨大な力が来る。命を救ったバッグが、いまは死神になる。`,
        );
        await era.printAndWait(
          `首を引かれた${you.name}は、空中で両手を振り回すしかない。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title} 「이 녀석, 지옥에서 네 죄를 참회하라고! 하하하하하하!!!」`,
        );
        await falcon.say_and_wait(`${callname}, 팔코 들어갈게?`);
        await era.printAndWait(`意識が霞む${you.name}に、幻聴が聞こえる。`);
        await you.say_and_wait(`こうして、ファル子の声が聞こえる`, true);
        await you.say_and_wait(`난……`, true);
        await era.printAndWait(
          `바닥에 힘없이 쓰러진 ${you.name}은(는) 이제 고통조차 느낄 수 없게 되었다.`,
        );
      }
      era.drawLine();
      await falcon.say_and_wait(`${callname}?`);
      await era.printAndWait(`優しい呼び声。どこかで聞いた声だ。`);
      await you.say_and_wait(`천국에 온 걸까? 조금만 더 자게 해줘.`, true);
      await era.printAndWait(`いつの間にか、安心して深く眠る。`);
      era.drawLine();
      await falcon.say_and_wait(`${callname}.`);
      await era.printAndWait(`부드러우면서도 단호한 목소리가 먼 곳에서 들려왔다.`);
      await era.printAndWait(`よく知っている声だ。`);
      await era.printAndWait(
        `どこで聞いた？ 教室？ 屋上？ あの${falcon.teen_sex_title}——`,
      );
      await you.say_and_wait(`나는 누구지? 여긴 어디야?`, true);
      await era.printAndWait(`칠흑 같은 세상을 훑어보며, 다시 깊은 잠 속으로 빠져들었다.`);
      await falcon.say_and_wait(
        `${callname}、また ${callname} に会いに来たよ。`,
      );
      await falcon.say_and_wait(
        `팔코, 이제 업계에서도 어느 정도 자리를 잡았어.`,
      );
      await falcon.say_and_wait(
        `예전에 ${callname}에게 이 이야기를 했었지만, ${callname}은 기억하지 못하겠지.`,
      );
      await era.printAndWait(`쾌활했던 목소리가 점점 낮게 가라앉았다.`);
      await falcon.say_and_wait(
        `그래도, 그래도 팔코는 꼭 ${callname} の期待を持って、ずっと頑張る！${callname}, 다음에 또 봐!`,
      );
      await you.say_and_wait(`팔코……`);
      await era.printAndWait(
        `몸을 일으키려 했으나 마비 증세 때문에 실패했고, 몸은 다시 병상 위로 무겁게 떨어졌다.`,
      );
      await falcon.say_and_wait(`엣?!`);
      await era.printAndWait([
        '——最後に一目、と思った ',
        falcon.get_colored_name(),
        ' が、その全部を見た。',
      ]);
      await falcon.say_and_wait(`${callname}…… 어서 와!`);
      await you.say_and_wait(`얼마나 지난 거야?`);
      await era.printAndWait(
        `かなり経っているはずだ。${you.name}은(는) 이미 최악의 상황을 각오하고 있었다.`,
      );
      await falcon.say_and_wait(`음—— 그 사건이 있고 나서 벌써 3년이나 지났어.`);
      await you.say_and_wait(`……그렇구나.`);
      await era.printAndWait(`벌써 그렇게 오래됐구나.`);
      await you.say_and_wait(`前より、輝いて見える。`);
      await era.printAndWait(
        `孤独な${falcon.teen_sex_title}が、どうこのアイドルの道を歩いたのか、想像しにくい。`,
      );
      await falcon.say_and_wait(
        `응! ${callname}이 퇴원하면 이제 반짝반짝 빛나는 팔코를 볼 수 있을 거야!`,
      );
      await you.say_and_wait(`……미안해.`);
      await you.say_and_wait(`トレーナーなら、君のそばにいるべきだった。`);
      await falcon.say_and_wait(
        `아니야, 팔코는 ${callname}이 깨어난 모습을 본 것만으로도 정말 행복해.`,
      );
      await falcon.say_and_wait(`여기서 더 바란다면 팔코는 너무 욕심쟁이일 거야.`);
      await era.printAndWait(`차가운 작은 손과 거친 큰 손이 하나로 겹쳐졌다.`);
      await falcon.say_and_wait(`그러니까 ${callname}, 빨리 나아야 해.`);
      await era.printAndWait(
        `큰 손을 자신의 뺨에 살며시 가져다 대며, ${falcon.name}은 눈을 감고 오랜만에 느껴지는 온기를 만끽했다.`,
      );
      await you.say_and_wait(
        `……うん、必ず。ファル子のライブも、ファル子のこれから全部も。`,
      );
      await era.printAndWait(`입술에서 전해지는 물기 어린 촉감이 이어지려던 말을 가로막았다.`);
      await you.say_and_wait(`아니, 이걸로 충분해.`, true);
      await era.printAndWait(`キスの味は、しょっぱい。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_begin_race
  before_begin_race: (() => {
    const title = "첫 오디션!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강가 풀밭
`);
      await falcon.say_and_wait(
        `目指すは！ トップアイドルの${falcon.uma_sex_title}アイドル——${falcon.name}、いま正式にデビューするよ⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `드디어 팔코가 데뷔하는 거야?!`,
      );
      await falcon.say_and_wait(
        `맞아! 이 날을 위해서 팔코는 계속 노력해왔어! 비록 팔코도 모두가 조금은 참아줬으면 좋겠다고 생각하지만……`,
      );
      await falcon.say_and_wait(
        `왜냐하면 팔코도 모두와 마찬가지로 기분이 하늘 끝까지 솟구칠 정도로 두근거리니까♪`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `그 기세 그대로 쭉 달려나가자!`,
      );
      await falcon.say_and_wait(
        `ファル子、レース開始からおしまいまでキラキラし続けるよ⭐……わあ、ドキドキする！ 不思議な感じ、心臓がずっとdokidokiって応えてる……`,
      );
      await falcon.say_and_wait(
        `약속이야, 다들 관객석에서 팔코의 무대를 지켜봐줘⭐`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await era.printAndWait(`
대기실
`);
      await falcon.say_and_wait(
        `리본…… ok! 등 뒤의 번호표…… 이상 무!`,
      );
      await era.printAndWait(
        `전신 거울 앞에 선 ${falcon.name}은 자신의 모습을 몇 번이고 확인했다.`,
      );
      await falcon.say_and_wait(
        `언제나 응원해주는 모두를 위해서…… 팔코는 반드시 이길 거야!`,
        true,
      );
      await falcon.say_and_wait(`팔코! 파이팅!`);
      await era.printAndWait(`${falcon.name}は握った拳を高く掲げた。`);
      era.printButton(`경기장을 무대라고 생각하면 돼`, 1);
      await era.input();
      await era.printAndWait(
        `옆에서 기다리고 있던 ${you.name}은(는) 처음으로 데뷔전에 나서는 ${falcon.name}을 바라보았다.`,
      );
      await you.say_and_wait(`팔코가 반드시 승리할 거라고 믿어!`);
      await falcon.say_and_wait(`${callname}も！`);
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 양손이 미세하게 떨리고 있는 것을 느꼈다.`,
      );
      await falcon.say_and_wait(
        `팬 여러분은 어디에 앉아서 팔코를 기다려 줄까♪ 반짝반짝 빛나는 팔코가 반드시 승리를 가져다줄게⭐`,
      );
      await era.printAndWait(
        `그것은 단순한 위로가 아니라, ${falcon.name}이 그동안 쌓아온 훈련 성과에 대한 확신이었다.`,
      );
      await falcon.say_and_wait(
        `${callname}은(는) 관객석에서 팔코의 멋진 활약을 제대로 지켜봐줘♪`,
      );
      await falcon.say_and_wait(
        `……그리고, 팔코에게는 질 수 없는 이유가 하나 더 있어!`,
        true,
      );
      // トレーナーとは無関係。ただ恐れに耐えきれない結果
      await falcon.say_and_wait(
        `부정적인 생각은 여기서 끝! 팔코의 톱 우마돌로 향하는 길은 여기서부터 시작이야!`,
        true,
      );
      await falcon.say_and_wait(
        `輝く${falcon.uma_sex_title}アイドル——${falcon.name}！ これから観客席のみんなに、まばたきする暇もないくらいファル子を見つめさせるよ！`,
      );
      await era.printAndWait(`${falcon.name}이 경기장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_cham_cup_s
  before_cham_cup_s: (() => {
    const title = 'チャンピオンズカップ・ダートのトップアイドル！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`その二、チャンピオンズカップが始まった。`);
      await era.printAndWait(
        `クラシックの準備を経て、次はチャンピオンズカップだ。`,
      );
      await era.printAndWait(
        `고생하며 전단지를 돌리던 예전과는 달리, ${falcon.name}의 츨주 소식을 들은 팬들이 자발적으로 좌석을 구매했다.`,
      );
      await falcon.say_and_wait(`팔코, 생각했던 것보다 훨씬 더 사랑받고 있나 봐.`);
      await era.printAndWait(
        `오히려 밖에서 들려오는 소란스러움이 거대한 압박감으로 다가왔다.`,
      );
      await you.say_and_wait(`無理して出てきたの？`);
      await era.printAndWait(
        `미세하게 떨리는 손. 보이지 않는 압박감에 맞서 팔코.`,
      );
      await falcon.say_and_wait(`다음 레이스도 팔코는 힘낼 거야!`);
      await you.say_and_wait(`武運を祈る……具合が悪かったら、僕のところへ。`);
      await era.printAndWait(
        `잠시 멈칫한 후, ${falcon.name}이 대기실 문을 열었다.`,
      );
      await era.printAndWait(
        `귀를 찢는 듯한 환호성 속에서 ${falcon.name}은 경기장으로 걸어 나갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_febr_sta
  before_febr_sta: (() => {
    const title = "선배와 후배 (1)";
    /** @param {CharaTalk} falcon スマートファルコン */
    const f = async (falcon) => {
      await falcon.say_and_wait(
        `톱 우마돌을 향해 나아가는 팔코의 레이스를 다들 보러 와줬으면 좋겠어♪`,
      );
      await falcon.say_and_wait(`팔코라면 반드시 최고의 레이스를 모두에게 보여줄 테니까⭐`);
      await era.printAndWait(
        `発走前にチラシを配るのは、もう二人の阿吽になっている。`,
      );
      await era.printAndWait(`${falcon.uma_sex_title}「あ、ファル子さん？」`);
      await era.printAndWait(
        `지방 트레센에서 온 듯한 ${falcon.uma_sex_title}가 ${falcon.name}을 알아차린 모양이었다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩！ わたしもアイドルとしてダートでデビューしたいです！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「선배가 도쿄 대상전에서 달리는 모습을 보고 용기를 얻었어요. 그래서 저도 사람들에게 희망을 주는 아이돌이 되고 싶어요!」`,
      );
      await era.printAndWait(
        `동경 어린 눈빛으로 ${falcon.name}을 바라보는 ${falcon.uma_sex_title}.`,
      );
      await falcon.say_and_wait(`……팔코는`, true);
      await falcon.say_and_wait(
        `アイドルになりたかった、いちばん最初の気持ち、ファル子がちゃんと届ける！`,
      );
      await era.printAndWait(`복잡한 감정을 품은 팔코가 경기장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_japa_dir
  before_japa_dir: (() => {
    const title = "묘한 초조함";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await falcon.say_and_wait(`……음——`);
      await era.printAndWait(
        `${you.name}이(가) 대기실에 들어서자 기운이 조금 없는 ${falcon.name}의 모습이 보였다.`,
      );
      await falcon.say_and_wait(
        `${callname}, 이번 레이스에는 사람들이 많이 보러 올까?`,
      );
      await you.say_and_wait(
        `ファル子が皐月賞に出たおかげで、芝の観客も、ダートで輝いてる${falcon.name}を知ってるよ。`,
      );
      await falcon.say_and_wait(`잔디 경기장에 비하면 아직……`);
      await you.say_and_wait(
        `비록 아직 부족할지도 모르지만, 팔코의 노력 덕분에 더트도 조금씩 인기가 생기고 있어.`,
      );
      await falcon.say_and_wait(`そうなんだ。`);
      await falcon.say_and_wait(`ファル子、ダートのレースを動かせるかも！`);
      await era.printAndWait(`노력은 결국 결실을 맺는 법이었다.`);
      era.printButton(`게다가 다들 팔코의 등장을 기대하고 있어!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……맞아! 관객석에서 환호해주는 팬들을 위해서, 팔코는 이대로 단숨에 골인까지 달려갈게!`,
      );
      await falcon.say_and_wait(`……${callname}, 레이스 시작까지 얼마나 남았어?`);
      await era.printAndWait(
        `${you.name}은(는) 스마트폰을 ${falcon.name}에게 건네주었다. 화면에 표시된 시간은 레이스 시작까지 30분 전이었다.`,
      );
      await falcon.say_and_wait(`그렇다면!`);
      await era.printAndWait(
        `${falcon.name}は持ってきた荷物から、分厚いポスターの束を取り出した。`,
      );
      await falcon.say_and_wait(
        `레이스가 시작되기 전에, 근처에 있는 사람들에게 팔코를 더 알리고 올게!`,
      );
      await era.printAndWait(
        `${you.name}이(가) 대답하기도 전에, ${falcon.name}은 ${you.name}의 손목을 잡고 밖으로 뛰어나갔다.`,
      );
      await falcon.say_and_wait(`팔코! 파이팅!`);
      await era.printAndWait(
        `その後、出走する${falcon.uma_sex_title}が発走前までライブしていた件は、少し話題になった。`,
      );
      await era.printAndWait(
        `まもなく、${minoru.name} の怖い笑顔と来月の給料が、${you.name} に二度としないと誓わせた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_jbc_cls_c
  before_jbc_cls_c: (() => {
    const title = "초조함의 시작";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`JBC 클래식, 예년 같으면 관객 수가 2만 명을 넘지 않았을 터였다.`);
      await era.printAndWait(`하지만`);
      await falcon.say_and_wait(
        `${callname}, 레이스가 시작되기 전에 이 전단지들을 다 돌려야 해!`,
      );
      await era.printAndWait(
        `팔코의 노력 덕분인지 오가는 팬들의 발길이 끊이지 않았다?!`,
      );
      await you.say_and_wait(`팔코라면 정말 가능할지도 모르겠네.`);
      await era.printAndWait(
        `평소 팔코의 건강을 걱정하던 ${you.name}이었지만, 마음 한구석에서는 비현실적인 기대를 품기 시작했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `행인A`,
        `어? 이 근처에서 레이스가 있어?`,
      );
      await you.say_as_passer_by_and_wait(
        `행인B`,
        `ダートのレース？ 興味な……${falcon.name}が出るの？`,
      );
      await you.say_as_passer_by_and_wait(
        `행인C`,
        `${falcon.name}？ ウマスタで話題になってる子？`,
      );
      await you.say_as_passer_by_and_wait(`행인A`, `待って。`);
      await era.printAndWait(
        `いつの間にか、チラシは奪い合うように無くなった。`,
      );
      await falcon.say_and_wait(`팔코, 생각보다 훨씬 더 인기쟁이일지도……`);
      await falcon.say_and_wait(
        `예전에는 이만큼 돌리려면 적어도 오전 내내 걸렸는데.`,
      );
      await era.printAndWait(
        `그렇게 말하면서도 ${falcon.name}의 미소는 감출 길이 없었다.`,
      );
      await falcon.say_and_wait(
        `어쩌면 팔코, 생각보다 훨씬 더 많은 사랑을 받는 사람이 된 걸까나.`,
      );
      await you.say_and_wait(`みんな、ファル子を見てるよ。`);
      await falcon.say_and_wait(`응, 계속 팔코를 지지해준 모두를 위해서.`);
      await falcon.say_and_wait(`팔코는 2000%의 노력으로 우승할 거야!`);
      await era.printAndWait(`무형의 기운이 ${falcon.name}을 감싸안았다.`);
      await falcon.say_and_wait(`지체할 시간 없어, 지금 바로 출발하자!`);
      await you.say_and_wait(`레이스는 아직 시작 안 했어.`);
      await era.printAndWait(`말이 끝나기도 전에 ${falcon.name}は通話を切った。`);
      await falcon.say_and_wait(`이제 ${callname}을(를) 깜짝 놀라게 해줄게!`);
      await era.printAndWait(
        `${falcon.name}은 결심을 굳히고 경기장으로 달려갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_jbc_cls_s
  before_jbc_cls_s: (() => {
    const title = "JBC 클래식·우마돌의 첫걸음";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `우마돌로 향하는 길의 시험대인 JBC 클래식이 시작되었다.`,
      );
      await era.printAndWait(
        `${falcon.name}이 참가한다는 소식에 클래식 레이스의 관객 수가 순식간에 폭증했다.`,
      );
      await era.printAndWait(`웬만한 비인기 잔디 G1 레이스와 맞먹을 정도였다.`);
      await era.printAndWait(`그리고 팔코에게 있어서...`);
      await falcon.say_and_wait(
        `팔코 같은 평범한 ${falcon.uma_sex_title}에게 지금까지의 승리는 전부 기적 같은 일이었어.`,
      );
      await falcon.say_and_wait(`그럼에도 불구하고 팔코는 계속해서 빛나고 싶어.`);
      await you.say_and_wait(
        `그렇다면 이제 마음껏 해봐. 팔코, 네 생각대로 이 그림을 그려나가는 거야!`,
      );
      await you.say_and_wait(
        `トップの${falcon.uma_sex_title}アイドルは、自分で決めるものだ！`,
      );
      await era.printAndWait(
        `대기실 안에서도 밖에서 들려오는 귀가 먹먹할 정도의 함성 소리가 은은하게 전해졌다.`,
      );
      await falcon.say_and_wait(`그럼에도 팔코는 역시 계속 빛나고 싶어.`);
      await falcon.say_and_wait(
        `이제부터 팔코가 반짝이는 모습을 똑똑히 지켜봐줘!`,
      );
      await era.printAndWait(`아직은 앳된 우마돌이 경기장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sats_sho
  before_sats_sho: (() => {
    const title = "사츠키상에서 빛나는 팔코";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`기자 회견에서 사츠키상 출주를 선언한 후.`);
      await era.printAndWait(
        `${falcon.name}이 적성에 맞지 않는 경기장에서 승리할 수 있을지에 대한 우려도 있었지만, 더트에서 활약하던 ${falcon.name}이 어떤 활력을 보여줄지에 대한 기대가 더 컸다.`,
      );
      await era.printAndWait(`대기실 안`);
      await falcon.say_and_wait(`흐흥♪ 이 정도면 팔코는 준비 완료야!`);
      await era.printAndWait(
        `${falcon.name}은 전신 거울 앞에서 다시 한번 승부복을 확인했다.`,
      );
      await falcon.say_and_wait(`${callname}은(는) 어때 보여?`);
      era.printButton(`정말 눈부셔!`, 1);
      await era.input();
      await falcon.say_and_wait(`이대로 모든 팬의 시선을 전부——뺏어버리겠어!`);
      await falcon.say_and_wait(
        `……그러고 보니, 팔코가 이 승부복을 입는 것도 이번이 처음이네……`,
      );
      await era.printAndWait(
        `${falcon.name}은 갑자기 쑥스러운 듯 ${you.name}과(와) 마주 보던 시선을 피했다.`,
      );
      await falcon.say_and_wait(`……아무것도 아냐⭐`);
      await era.printAndWait(`그러고는 무언가를 얼버무리는 듯 입을 가리고 웃었다.`);
      await falcon.say_and_wait(`이번에야말로 정말 출발이야!`);
      await era.printAndWait(
        `${falcon.name}이 문손잡이를 잡고 열려고 했다.`,
      );
      era.printButton(
        `내 시선을 뺏은 것처럼, 경기장의 모든 사람의 시선을 전부 뺏어버리고 와!`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `${falcon.name}はまばたきして、控え室の扉を閉めた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_teio_sho
  before_teio_sho: (() => {
    const title = "제왕상 전의 준비";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}が帝王賞に挑むという知らせが、ウマスタ中に広がった。`,
      );
      await era.printAndWait(
        `팔코의 질주와 노래에 매료된 사람들이 예매 시작과 동시에 티켓을 전부 매진시켰다.`,
      );
      await era.printAndWait(
        `더트가 ${falcon.name}을 선택했다기보다, ${falcon.name}이 더트를 완성시켰다고 해야 할 정도였다.`,
      );
      await era.printAndWait(`控え室で`);
      await falcon.say_and_wait(`……팔코, 역시 조금 긴장되네`);
      await era.printAndWait(
        `평소와 다르게 ${falcon.name}은 곧 시작될 레이스를 앞두고 망설이는 모습을 보였다.`,
      );
      await falcon.say_and_wait(
        `만약 실수라도 하면, 응원해주는 팬들과 후배들이 나에게 실망하지 않을까 해서.`,
      );
      await you.say_and_wait(
        `팔코의 팬이자 ${falcon.name}의 트레이너로서, 나는 믿고 있어.`,
      );
      await you.say_and_wait(`팔코라면 분명 문제없을 거야!`);
      await falcon.say_and_wait(`${callname}이(가) 그렇게 말해준다면, 팔코 노력해볼게!`);
      await era.printAndWait(`${you.name}은(는) 시간을 확인했다. 슬슬 출발해야 할 때였다.`);
      await you.say_and_wait(`그럼, 이제 좋은 소식을 기다리고 있을게, 팔코!`);
      await falcon.say_and_wait(
        `좋아! 이제 후배 ${falcon.uma_sex_title}에게 선배 아이돌이 어떻게 하는지 보여주겠어!`,
      );
      await era.printAndWait(`선배 우마돌로서의 팔코가 경기장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_toky_dai_c
  before_toky_dai_c: (() => {
    const title = 'スマートファルコン';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `다시 마음을 다잡은 ${falcon.name}은 발걸음을 조금 늦추어 나아가기로 했다.`,
      );
      await era.printAndWait(`계속해서 자신을 찾아 헤매주던 팬들을 기다리며.`);
      await era.printAndWait(`トレーナー室`);
      await you.say_and_wait(`これから先は、ファル子の頑張りを信じるよ。`);
      await falcon.say_and_wait(
        `${callname}도 앞으로 관객석에서 팔코의 성장을 지켜봐줘.`,
      );
      await era.printAndWait(
        `사실 이 ${falcon.teen_sex_title}는 의외로 강인했다.`,
      );
      await era.printAndWait(
        `考え直したあと、大半の予定を切り、少数のことに集中した。`,
      );
      await era.printAndWait(
        `다시 방향을 잡고 착실하게 전진하기 시작한 지 이제 겨우 한 달 남짓이었다.`,
      );
      await falcon.say_and_wait(`${callname}, 왼쪽 머리 장식 좀 조절해줄 수 있어?`);
      await era.printAndWait(
        `전신 거울 속의 ${falcon.teen_sex_title}가 다시 정상 상태로 돌아온 것을 보며, 말로 다 못 할 기쁨이 솟구쳤다.`,
      );
      await falcon.say_and_wait(
        `東京大賞典は、有馬にはいつまでも届かないけど——`,
      );
      await era.printAndWait(`찾아온 관객들은 이미 예년의 인원수를 훨씬 뛰어넘어 있었다.`);
      await falcon.say_and_wait(
        `적어도, 민들레로서 팔코는 정말 행복해♪`,
      );
      await era.printAndWait(`${falcon.name}은 살며시 대기실 문을 닫았다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_toky_dai_s
  before_toky_dai_s: (() => {
    const title = "도쿄 대상전·The Biggest Stage";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.print_and_wait(`이 날이 생각보다 훨씬 빨리 찾아왔어.`);
      await falcon.print_and_wait(
        `고생하며 흘린 땀방울, 노력의 가치가 모두 이 순간에 드러날 거야.`,
      );
      await falcon.print_and_wait(
        `톱 우마돌이라는 목표를 쫓기 위해, 나를 지지해주는 팬들을 위해 지금까지 계속 노력해왔어.`,
      );
      await falcon.print_and_wait(`분명히 그런데, 스스로를 설득할 수가 없어.`);
      await falcon.print_and_wait(
        `마음속 깊은 곳에서 들려오는 목소리가 계속 물어봐. 이렇게 하는 게 정말 맞는 거야?`,
      );
      await falcon.print_and_wait(`胸が痛い。心臓を掴まれたみたい。`);
      await falcon.print_and_wait(`팔코는 답을 모르겠어.`);
      await falcon.print_and_wait(
        `하지만 어렴풋이 느껴져. 마지막 정답은 여기서 보일 거라는 걸.`,
      );
      era.printButton(`슬슬 출발할 시간이야, 팔코.`, 1);
      await era.input();
      await falcon.say_and_wait(`……가자, 그 답을 찾기 위해서.`);
      await era.printAndWait(
        `모래 섞인 바람 때문에 거의 눈을 뜰 수 없었던 ${you.name}は、ふと、コースへ向かう${falcon.name}と、初めて会ったときの${falcon.teen_sex_title}의 모습을 겹쳐 보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_win
  begin_race_win: (() => {
    const title = "데뷔전 후·떠오르는 신성";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_as_passer_by_and_wait(`해설`, `승자는 바로——${falcon.name}입니다!`);
      await era.printAndWait(
        `팬들에게 선언했던 대로, ${falcon.name}은 레이스 시작부터 모든 관객의 시선을 한몸에 사로잡았다.`,
      );
      await era.printAndWait(
        `그렇게 다른 ${falcon.uma_sex_title}들과의 거리를 유지하며 마지막까지 달려 나갔다.`,
      );
      await falcon.say_and_wait(
        `${callname}! ${callname}! 경기장에서 팔코가 활약하는 모습 봤어?`,
      );
      era.printButton(`나도 모르게 넋을 잃고 봤어!`, 1);
      await era.input();
      await falcon.say_and_wait(`ほんと？ やった⭐`);
      await era.printAndWait(
        `경기장에서 내려온 ${falcon.name}은 잠시 휴식을 취한 뒤 금세 활기를 되찾았다.`,
      );
      await era.printAndWait(
        `しびれた脚の筋肉をマッサージしていると、${you.name}の顔から笑顔がこぼれ落ちない。`,
      );
      await falcon.say_and_wait(
        `——그렇게 팔코가 더 이상 못 버티겠다 싶었을 때, 관객석에서 응원 소리가 들렸어! 그러니까 팔코도 모르게 어디선가 힘이 솟아나서 그대로 끝까지 단번에 달려 나갔지 뭐야!`,
      );
      await era.printAndWait(
        `コースを下りた${falcon.name}は、ステージ前の隙間で毎日のゲリラライブを観客席に売り込みかけたが、結局${you.name}に止められた。`,
      );
      await falcon.say_and_wait(`팔코의 다음 공연도 기대해 줘!`);
      await era.printAndWait(
        `마지막 마사지가 끝나자, ${falcon.name}은 새로운 감각을 확인하듯 발끝을 세웠다.`,
      );
      era.printButton(`ダートアイドルの気概、ちゃんと見せてこい！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `こうして観客の心を、ファル子のホームでぜ～んぶ奪っちゃう♪ だってファル子は、世界でいちばん輝く${falcon.uma_sex_title}アイドルだもん⭐`,
      );
      era.drawLine({ content: 'ウィンナーズステージ' });
      await falcon.say_and_wait(`これがウィンナーズステージ……？`, true);
      await era.printAndWait(
        `スタッフの案内に従い、決めておいた隊形のまま昇降機に乗った。`,
      );
      await era.printAndWait(
        `並んでいるうちはまだまばらな声が聞こえたが、定位置に着くと、残ったのはか細い息づかいだけだった。`,
      );
      await falcon.say_and_wait(`${falcon.name}의 꿈이 여기서 시작되는 거야!`, true);
      await era.printAndWait(
        `強い揺れのあと、${falcon.name}에게 아래로 향하는 힘이 전해졌다. 이제 곧 정식 공연이다.`,
      );
      await era.printAndWait(
        `마음속으로 무서울 것 없다고 다짐했지만, 이마와 손바닥은 이미 땀으로 젖어 있었다.`,
      );
      await era.printAndWait(
        `조명은 이미 순위 순서대로 무대를 비추고 있었고, 시간은 ${falcon.teen_sex_title}들을 기다리며 서서히 멈춰갔다.`,
      );
      await era.printAndWait(
        `待ち焦がれたステージが目の前にある。稽古したステップが頭の中を何度も駆け、緊張で頭は真っ白になりかけた。それでも止まった時間は回り始め、いまが、進むときだ。`,
      );
      await era.printAndWait(
        `그렇게 ${falcon.name}は、初めてのウィンナーズステージを終えた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] beginning
  beginning: (() => {
    const title = "함성이 울려 퍼지는 더트 레이스";
    // アイドル活動には熱心だが、レースには自分を無理に乗せている。失敗した未来への恐れかもしれない
    // 主題：力を尽くして前へ、逆流を上る。ファル子とトレーナーが旅先で雑談して得た結論
    // 人は寂しがりだ。曲が終わり人が散ったあと、高揚はゆっくり退き、残るのは疲れだけ
    // 世間の楽観は、拾い集めた瓦を寄せて継ぎはぎした楽観にすぎず、大きな危険の前では四散する
    // つまり、楽観を装った悲観者にすぎない
    // だが悲観は、自分が積み上げた成果を見落とすことでもある。未来への視野を自分の五メートル以内の操作可能域へ戻せば、続ける力が得られる
    // 大きすぎる期待は足を止め、言い訳に埋もれ、良心は塵を被り、嘘の負債を重ねていく
    // トレーナーは約束どおり、ファル子をダートレースへ連れて行った
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_37 エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (falcon, flash, you, callname_37) => {
      await era.printAndWait(`어느 곳의 더트 레이스
`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `実況`,
        `レースは最終局面！ 二番と四番が馬群から抜け出し、最後の一騎打ちだ！`,
      );
      await you.say_as_passer_by_and_wait(`観客`, `うおおおおおおおお！`);
      await era.printAndWait(
        `雪が肩へそっと落ち、湿った水気になる。スタンドの観客は厚いマフラーとコートに身を包み、旗とテープを振り、波のように続く声援が冬の静けさを破っていた。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}`,
        `はああああ！`,
      );
      await era.printAndWait(
        `二人の${falcon.uma_sex_title}は前半ずっと先頭集団にいたが、馬群との差はまだ開いていなかった。最後のスパートで急加速し、馬群を後ろへ置いていく。`,
      );
      await era.printAndWait(
        `관객석의 질서 정연했던 응원 소리는 극적인 장면에 의해 찢겨 나가듯 무질서하게 변했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `二人は一歩も譲らない！ 残り200メートル！ 100メートル！ 50メートル！ 勝者は——`,
      );
      await era.printAndWait(`시간이 이대로 응고되었다.`);
      await era.printAndWait(
        `뒤쫓던 ${falcon.uma_sex_title}와 앞서가던 ${falcon.uma_sex_title}가 나란히 서서 추월하려는 자세를 취했고, 그 후——`,
      );
      await falcon.say_and_wait(
        `これが、トレーナーの${you.adult_sex_title}が見せてくれたかった絵なの？`,
      );
      await era.printAndWait(`응고되었던 시간이 다시 움직였다.`);
      await era.printAndWait(
        `승리를 거머쥔 ${falcon.uma_sex_title}は、砂にまみれたまま、汗と涙の混ざった笑顔を観客へ捧げた。\n\n`,
      );
      await era.printAndWait(
        `경기장의 스포트라이트가 승자에게 집중되었고, 다른 ${falcon.uma_sex_title}は衆星が月を囲むように、勝利の実を甘く際立たせる。`,
      );
      await era.printAndWait(
        `高揚の喜びも、負けた口惜しさも、喉から絞り出す叫び。声が枯れても届こうとする、あの空へ。`,
      );
      await era.printAndWait(
        `추운 밤임에도 불구하고, 이 뜨거운 감정은 현장에 있는 모든 관객의 마음속에 확실히 전달되었다.`,
      );
      await falcon.say_and_wait(
        `わぁ——ダートレース、思ったよりずっと賑やかだね。`,
      );
      await falcon.say_and_wait(
        `무대 가장 중앙에 있는 ${falcon.uma_sex_title}, 관객들의 주의가 전부 저기에 집중되어 있어……`,
        true,
      );
      await falcon.say_and_wait(`만약 팔코도 저기에 설 수 있다면.`, true);
      await falcon.say_and_wait(`팔코…… 팔코 너무 감동해서 눈물이 나올 것 같아!`);
      await era.printAndWait(`出口から出た${falcon.name}が、胸の内を語る。`);
      await falcon.say_and_wait(
        `더트 레이스가 생각보다 훨씬 더 멋진 것 같아. 관객들의 열정, 그리고 ${falcon.uma_sex_title}들이 쏟아부은 사랑은 잔디를 선택한 ${falcon.uma_sex_title}들과 똑같아!`,
      );
      await falcon.say_and_wait(`팔코, 결정했어!`);
      await era.printAndWait(
        `열정으로 불타오르는 ${falcon.teen_sex_title}는 ${you.name}을(를) 진지하게 바라보았다.`,
      );
      await falcon.say_and_wait(
        `팔코는 더트 레이스를 기점으로, 이 코스를 따라 쉬지 않고 단숨에 톱 ${falcon.uma_sex_title} 아이돌이라는 결승점까지 달려갈 거야!`,
      );
      await era.printAndWait(
        `騒がしさに周囲の客がちらちら見る。${falcon.name}のダートアイドルの道は、いま始まったばかりだ。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`곧 통금 시간이야! 그럼 내일 봐⭐`);
      await era.printAndWait(
        `${falcon.name}을 태운 전차가 떠나는 것을 배웅한 뒤, 우연히 익숙한 뒷모습을 발견했다.`,
      );
      await you.say_and_wait(
        `エイシンフラッシュ……フラッシュさんですね。今夜は風もなく、いい晩です。`,
      );
      await era.printAndWait(
        `生徒のほうから声をかけるのは少し気後れするが、相手を知りたい気持ちもあり、${you.name}から挨拶した。`,
      );
      await flash.say_and_wait(`ええ、こんばんは、${callname_37}。`);
      await you.say_and_wait(
        `${falcon.actual_name_with_title}の帰りを待っていたのですか。ご安心を。もう寮へ無事戻っています。`,
      );
      await you.say_and_wait(
        `道中、ファルコンさんが予定表どおりに動けるルームメイトがいると聞いていました。来る途中から期待していましたが、本人はお話以上に頼もしいですね。`,
      );
      await era.printAndWait(
        `道中、${falcon.name}が時間を守るルームメイトの話をしていた。相手と関係を築いておくのは大切だ。`,
      );
      await flash.say_and_wait(
        `후후, 과찬이세요. 그저 예정된 사항을 순조롭게 집행하기 위해 해야 할 일을 할 뿐이라 대단할 건 없어요.`,
      );
      await flash.say_and_wait(
        `하지만 팔콘 씨 이야기가 나와서 말인데, 마침 저도 요즘 ${falcon.sex}가 당신에 대해 이야기하는 것을 한두 번 들은 게 아니랍니다.`,
      );
      await era.printAndWait(
        `에이신 플래시는 가볍게 웃더니, 곧바로 화제를 ${you.name}에게 돌렸다.`,
      );
      await you.say_and_wait(
        `ファルコン${falcon.adult_sex_title}にそう思っていただけるのは光栄です。`,
      );
      await you.say_and_wait(
        `でしたら、この先の三年も楽しみになってきました。`,
      );
      await flash.say_and_wait(`3년이라는 시간이라……`);
      await era.printAndWait(
        `${you.name}이(가) 그 단어를 꺼내자, 에이신 플래시는 잠시 침묵했다.`,
      );
      await flash.say_and_wait(
        `${callname_37}。今この場でお訊きするのは失礼かつ唐突かもしれませんが、どうか一句だけ。`,
      );
      await flash.say_and_wait(
        `担当トレーナーとして、その覚悟はおありですか。ファルコンさんと${falcon.sex}一心同体で、責任を背負う覚悟です。`,
      );
      await era.printAndWait(`왔다, 바로 이 대사야!`);
      await era.printAndWait(
        `想像どおり、フラッシュはこの友情を大事にしている。`,
      );
      await era.printAndWait(
        `${falcon.sex}의 시련을 통과하려면, 이쪽도 그에 못지않은 진심을 보여줘야 했다.`,
      );
      era.printButton(
        '「園芸に心を奪われた庭師のように、埋めた種を大切に育て、祝福と希望を込めて${falcon.sex}が咲くことを祈ります。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        `정말 감성적인 답변이네요. 그렇다면 저도 안심이에요.`,
      );
      await era.printAndWait(
        `에이신 플래시는 ${you.name}에게 살짝 허리를 굽혀 감사의 뜻을 표했다.`,
      );
      await flash.say_and_wait(
        `ファルコンさん${falcon.sex}のことは、お願いいたします。${falcon.sex}の友人として、ご入用があれば私も力を尽くします。`,
      );
      await flash.say_and_wait(`。`);
      await era.printAndWait(`ならば。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] cham_cup_win_s
  cham_cup_win_s: (() => {
    const title = "챔피언스 컵 후·목표는 도쿄 대상전";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}은 가볍게 챔피언스 컵에서 승리했다.`,
      );
      await era.printAndWait(
        `ステージの上の${falcon.name}は、さらに輝いている。`,
      );
      await era.printAndWait(`대기실에서`);
      await falcon.say_and_wait(`${callname}—— 이제 도쿄 대상전만 남았어!`);
      await you.say_and_wait(`ファル子なら、できる。`);
      await era.printAndWait(`静かに、自分の気持ちを言った。`);
      await era.printAndWait(`励ましというより、確かな確信を述べている。`);
      await falcon.say_and_wait(`——팔코, 지금 조금 긴장되는 것 같아.`);
      await era.printAndWait(
        `마지막 한 걸음을 앞둔 지금, 결과가 나오기 전까지가 가장 긴장되는 순간일 것이다.`,
      );
      await you.say_and_wait(
        `${
          falcon.name
        }은 내가 본 ${falcon.uma_sex_title} 중에서 가장 강해. 그러니까 너의 꿈이 꼭 이뤄졌으면 좋겠어.`,
      );
      await era.printAndWait(
        `${falcon.name}の小さな頭を撫でる。最初は拒んでいた${falcon.sex}が、今は落ち着いて見える。`,
      );
      await falcon.say_and_wait(`이제 마음이 좀 놓이는 것 같아, 고마워.`);
      await you.say_and_wait(`落ち着いたなら、どこかで食べて祝おうか。`);
      await falcon.say_and_wait(`焼肉が食べたいな。いっしょに行こ⭐`);
      await era.printAndWait(
        `즐거운 식사를 마친 후, 통금 시간이 되기 전에 ${falcon.name}을 기숙사까지 데려다주었다.`,
      );
      await falcon.say_and_wait(`${callname}.`);
      await era.printAndWait(`무슨 말을 하려던 ${falcon.name}이 잠시 머뭇거렸다.`);
      await you.say_and_wait(`왜 그래?`);
      await falcon.say_and_wait(`아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.teen_sex_title}는 입을 가리고 킥킥 웃으며 뛰어갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] curiosity_girl
  curiosity_girl: (() => {
    const title = "황금국화";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`어느 휴일`);
      await falcon.say_and_wait(`${callname}, 이쪽으로 와볼래?`);
      await era.printAndWait(
        `팔코가 트레이닝실에 있는 전신 거울을 보며 자신을 꾸미고 있었다.`,
      );
      await falcon.say_and_wait(
        `저기, 팔코는 머리를 내려서 포니테일을 만들고 리본으로 고정해보고 싶어.`,
      );
      await era.printAndWait(
        `뒷모습이 잘 보이지 않아서 ${you.name}의 손을 빌리고 싶은 모양이었다.`,
      );
      await you.say_and_wait(`——이렇게?`);
      await falcon.say_and_wait(`음—— 조금 더 위로.`);
      await era.printAndWait(`慎重に、蝶のクリップを少し高い位置へ置く。`);
      await you.say_and_wait(`——이 정도면 괜찮아?`);
      await falcon.say_and_wait(`ん——だいたい。`);
      await era.printAndWait(`헤어스타일을 바꾼 팔코를 보니, 평소와는 또 다른 느낌이었다.`);
      await falcon.say_and_wait(`でも、どこか足りない気がする。`);
      await era.printAndWait(`また気になり始める。`);
      await falcon.say_and_wait(
        `${callname}! 팔코랑 같이 상점가에 가주지 않을래?`,
      );
      await falcon.say_and_wait(`작은 액세서리를 사고 싶어.`);
      await era.printAndWait(`自分の魅力の限界を、見たいのだろうか。`);
      await you.say_and_wait(`좋아!`);
      era.drawLine({ content: '商店街' });
      await era.printAndWait(
        `週末のせいで、商店街の人通りは平日よりかなり多い`,
      );
      await falcon.say_and_wait(`그럼 이 가게에 들어가 보자!`);
      await era.printAndWait(
        `最近話題の店らしい。小物を眺めるカップルの割合が、意外と高い。`,
      );
      await you.say_and_wait(`커플들이 정말 많네.`);
      await falcon.say_and_wait(
        `팔코랑 ${callname}이 섞여 있어도 전혀 위화감이 없네!`,
      );
      await era.printAndWait(
        `${you.name}의 팔을 붙잡고 한 바퀴 돌던 팔코가 머리끈 코너에서 발걸음을 멈췄다.`,
      );
      await falcon.say_and_wait(`다 너무 귀여워! 어떤 게 좋을까?`);
      await era.printAndWait(`ファル子は、このヘアゴムが気に入ったらしい。`);
      await you.say_and_wait(`그렇게 고민되면 마음에 드는 거 다 사줄까?`);
      await era.printAndWait(
        `최근 월급을 받은 ${you.name}의 목소리에 힘이 실렸다(아마도?).`,
      );
      await falcon.say_and_wait(`本当にいいの？${callname}、優しいね！`);
      await falcon.say_and_wait(`그럼, ${callname}은 어떤 게 좋아?`);
      era.printButton(`초록색 리본이 달린 하얀색 머리끈`, 1);
      era.printButton(`하얀 토끼 장식이 달린 초록색 머리끈`, 2);
      era.printButton(`하얀 장미 장식이 달린 검은색 머리끈`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(
            `음—— 팔코도 이런 상쾌한 느낌이 좋아.`,
          );
          await falcon.say_and_wait(`緑の野原を歩くみたいで、元気⭐`);
          break;
        case 2:
          await falcon.say_and_wait(`귀여운 스타일? 사실 팔코도 그렇게 생각했어!`);
          await falcon.say_and_wait(
            `토끼는 사랑을 갈구한다는 숨은 의미도 있다고 하더라고.`,
          );
          await falcon.say_and_wait(`팔코는 아무 말도 안 했어⭐.`);
          break;
        case 3:
          await falcon.say_and_wait(
            `ほほほ！ ファル子も小悪魔系アイドルだよ！`,
          );
          await era.printAndWait(`아무리 봐도 그렇게는 안 보였지만.`);
          await falcon.say_and_wait(
            `트레이너가 골라준 거니까 진지하게 고려해볼게.`,
          );
          await era.printAndWait(
            `${falcon.sex} の小さな頭を軽く叩くと、悲鳴が飛ぶ。`,
          );
          await falcon.say_and_wait(`미안해! 다음부터는 그런 소리 안 할게!`);
      }
      await era.printAndWait(`選んだヘアゴムを袋へ入れて、買い物を続ける。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] deadline_fight
  deadline_fight: (() => {
    const title = "기말고사 대작전!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`う———むずかしい`);
      await falcon.print_and_wait(
        `単位を落としそうな答案を見て、ファル子は黙り込んだ。`,
      );
      await falcon.say_and_wait(
        `このままじゃ放課後の居残りじゃ済まない。単位、落とすかも。`,
      );
      await falcon.print_and_wait(
        `ファル子は慌てて回り始め、ふと ${callname} を思い出す。`,
      );
      await falcon.say_and_wait(`${callname} に聞いてみよ。`);
      era.drawLine({ content: 'トレーナー室' });
      await era.printAndWait(
        `눈앞의 점수를 본 ${you.name}도 팔코와 함께 침묵에 빠졌다.`,
      );
      await you.say_and_wait(`......팔코?`);
      await era.printAndWait(
        `俯いて申し訳なさそうなファル子を見て、${you.name} は長く息を吐いた。`,
      );
      await you.say_and_wait(`じゃあ、いっしょに間違えた問題を見よう`);
      await era.printAndWait(
        `ファル子を${you.name} の席に座らせ、${you.name} は別の椅子を${falcon.sex} の隣へ運んだ。`,
      );
      await you.say_and_wait(
        `낙제를 면하려면 세세한 부분보다 줄기가 되는 핵심 원리나 흐름을 이해하는 게 중요해.`,
      );
      await you.say_and_wait(
        `무엇을 우선해야 할지, 무엇을 나중에 해도 될지 냉정하게 판단해야 해.`,
      );
      await you.say_and_wait(`자, 이 부분은 말이야......`);
      await era.printAndWait(`午後いっぱい、間違いと戦った。`);
      era.drawLine({ content: '黄昏のあと' });
      await you.say_and_wait(`대충 이런 식이야...... 팔코?`);
      await falcon.say_and_wait(`...아, 응.`);
      await era.printAndWait(
        `いつの間にか、ファル子の意識は別のところへ行っていた。`,
      );
      await you.say_and_wait(`......됐다, 오늘은 여기까지 하자.`);
      await era.printAndWait(
        `길게 한숨을 쉰 뒤, ${you.name}은(는) 팔코의 시험지를 자신의 폴더에 챙겨 넣었다.`,
      );
      await you.say_and_wait(`앞으로 재시험 합격하기 전까지 팔코의 콘서트는 금지야.`);
      await falcon.say_and_wait(`에엣?`);
      await falcon.say_and_wait(`${callname}, 제발 그것만은 안 돼!!!`);
      await era.printAndWait(`팔코의 비명이 교사 전체에 울려 퍼졌다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] febr_sta_win
  febr_sta_win: (() => {
    const title = "페브러리 스테이크스 후·후배";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('ウィンナーズステージ後');
      await falcon.say_and_wait(`応援、ありがとう！`);
      await era.printAndWait(
        `ウィンナーズステージをきれいに終えたファル子は、控え室へ戻った。`,
      );
      await you.say_and_wait(`팔코, 수고했어!`);
      await era.printAndWait(
        `ミネラルウォーターとタオルを受け取ると、高ぶった気持ちをゆっくり落ち着ける。`,
      );
      await falcon.say_and_wait(`トップアイドルまで、また一歩近づいたね！`);
      await you.say_and_wait(`팔코라면 분명히 해낼 수 있을 거야!`);
      await falcon.say_and_wait(`저기, ${callname}…… 팔코는 말이야……`);
      await era.printAndWait(`똑똑똑`);
      await era.printAndWait(`눈치 없는 노크 소리가 들렸다.`);
      await you.say_and_wait(`팔코의 팬이 왔나 보네.`);
      await era.printAndWait(`대기실 문을 살며시 열었다.`);
      await you.say_and_wait(
        `미안해, 팔코는 지금 쉬는 중이라서…… 누구시죠?`,
      );
      await era.printAndWait(
        `전단지를 돌릴 때 만났던, 스스로를 후배라고 소개했던 ${falcon.uma_sex_title}였다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「팔코 선배! 우승 축하드려요!」`,
      );
      await falcon.say_and_wait(`어?`);
      await era.printAndWait(
        `${falcon.uma_sex_title} 「팔코 선배는 모르시나요? 더트에서 뛰는 ${falcon.uma_sex_title}たちにとって、ファル子先輩は眩しい光なんです！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「芝に適性がなくてダートへ来たみんなは、もう退けないところまで来てるんです……でも、ファル子先輩が前へ進む希望を見せてくれました！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「그러니까 팔코 선배, 부디 계속해서 빛나 주세요!」`,
      );
      await era.printAndWait(
        `熱を増す${falcon.uma_sex_title}は、${falcon.name}의 손을 꽉 잡았다.`,
      );
      await falcon.say_and_wait(`저기, 팔코는……`);
      await you.say_and_wait(
        `僕は${falcon.name}のトレーナーです。いまの${falcon.sex}は休みが必要です。話があるなら、僕にどうぞ。`,
      );
      await era.printAndWait(`ここでは、引いてはいけない。`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩のトレーナーさん？ すみません！ 興奮して忘れてました！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「お二人の時間を邪魔してすみません、失礼します！」`,
      );
      await era.printAndWait(
        `머쓱한 표정을 지은 ${falcon.uma_sex_title}は、作り笑いのまま控え室を出ていった。`,
      );
      await you.say_and_wait(`겨우 갔네. 팔코?`);
      await falcon.say_and_wait(
        `ファル子もつまずきながら進んでるのに、なんだか実感ないよ。`,
      );
      await era.printAndWait(`何か思いついたのか、ファル子は迷った顔をした。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] get_ts_content
  get_ts_content(falcon, train) {
    era.print([
      falcon.get_colored_name(),
      "의 ",
      train,
      ' トレーニングが無事に終わった',
    ]);
  },

  // [번역 대상] idol_ice_cream
  idol_ice_cream: (() => {
    const title = "팔코·데이트 대작전";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`${callname}!`);
      await era.printAndWait(`문을 열기도 전부터 팔코의 활기찬 목소리가 들려왔다.`);
      await you.say_and_wait(`名より先に声が届く、ってやつか。`, true);
      await era.printAndWait(`もちろん違う。`);
      await falcon.say_and_wait(
        `팔코를 응원해주는 팬들에게 가성비 좋은 디저트를 추천해주고 싶은데, ${callname}은 어디가 좋은지 알아?`,
      );
      await era.printAndWait(
        `アイドルは、応援してくれるファンに礼を伝える必要もある。`,
      );
      await you.say_and_wait(`디저트라면 근처 쇼핑몰에 가볼까?`);
      await you.say_and_wait(
        `ウマスタで生活系の人が薦めてる店を見るのもいい。`,
      );
      await era.printAndWait(`팔코도 생각에 잠겼다.`);
      await falcon.say_and_wait(
        `ん……ファル子は、見に行かないと決められないかな。`,
      );
      await falcon.say_and_wait(`그러니까 ${callname}......`);
      await era.printAndWait(`${you.name}의 반응을 살며시 살피는 팔코.`);
      await falcon.say_and_wait(`......그냥 팔코 혼자 다녀올게⭐`);
      await you.say_and_wait(`아, 그래.`);
      await era.printAndWait(`わざと聞き取れなかったふりをする。`);
      await falcon.say_and_wait(`え？！ そんなのダメ！`);
      await era.printAndWait(
        `自分で自分の足を撃ったファル子が慌てて、やっと本音を出した。`,
      );
      await you.say_and_wait(
        `미안, 방금 잘 못 들었어. 다시 말해줄래?`,
      );
      await falcon.say_and_wait(`팔코는 ${callname}이랑 같이 가고 싶어!`);
      await you.say_and_wait(`귀여운 팔코의 부탁인데 당연히 가야지.`);
      await falcon.say_and_wait(`야호⭐`);
      await era.printAndWait(`そのあとふたりは、近くのスイーツ店を味わった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] japa_dir_win
  japa_dir_win: (() => {
    const title = 'ジャパンダートダービー後・満ち足りた熱';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`대기실
`);
      await falcon.say_and_wait(`${callname}! 무대 위에서의 팔코 모습 봤어?⭐`);
      await you.say_and_wait(`현장 분위기가 생각보다 훨씬 뜨거웠어!`);
      await era.printAndWait(
        `ステージ上のファル子は、レースより、むしろステージが${falcon.sex}のホームだ。`,
      );
      await era.printAndWait(
        `수없이 연습했던 안무와 팬들과의 티키타카가 현장 분위기를 한껏 끌어올렸다.`,
      );
      await you.say_and_wait(`ファル子、アイドルとしてプロ級だよ。`);
      await era.printAndWait(
        `競走${falcon.uma_sex_title}より、${falcon.sex}はアイドルのほうへ進むべきなのか。`,
      );
      await falcon.say_and_wait(
        `ファル子はトップアイドルを目指して進むんだから、アイドルの基礎中の基礎も、ちゃんとやらなきゃ！`,
      );
      await you.say_and_wait(`지금 다리에 감각은 좀 있어?`);
      await era.printAndWait(
        `スパイクを脱がせると、ファル子の脚をマッサージし始めた。`,
      );
      await falcon.say_and_wait(`아까보다는 조금 감각이 돌아온 것 같아!`);
      await you.say_and_wait(
        `ファル子の熱は炎みたいに熱いけど、体を無視したら怪我しやすい！`,
      );
      await falcon.say_and_wait(
        `응, 알았어. 앞으로도 ${callname}에게 잘 부탁할게.`,
      );
      await era.printAndWait(
        `무대에서 내려온 팔코는 거의 서 있지도 못할 정도여서, 결국 ${you.name}이(가) 팔코를 안고 대기실까지 옮겨야 했다.`,
      );
      await you.say_and_wait(`팔코는 나비처럼 예쁘네.`);
      await era.printAndWait(
        `스스로를 태워 세상을 비추는, 연약하면서도 깨지기 쉬운 존재.`,
      );
      await falcon.say_and_wait(
        `어? 나비……? 만약 팔코가 나비라면, ${callname}も花の中にいるの？`,
      );
      await you.say_and_wait(`오히려 팔코를 만난 건 내 영광이지!`);
      await falcon.say_and_wait(`앗—— 팔코, 잡혀버리겠어!`);
      await you.say_and_wait(`これでファル子は逃げられない！`);
      await era.printAndWait(
        `${falcon.name}은 재팬 더트 더비에서 승리했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] jbc_cls_win_c
  jbc_cls_win_c: (() => {
    const title = "JBC 클래식 후·과부하";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ファル子は圧倒的な差で勝利した。`);
      await era.printAndWait(`逃げのファル子が、レース全体のリズムを握った。`);
      await era.printAndWait(
        `続くウィンナーズステージでも、${falcon.sex}는 온 힘을 다해 퍼포먼스를 선보였다.`,
      );
      await era.printAndWait(`그러나——`);
      await you.say_as_passer_by_and_wait(
        '医師',
        '大きな異常はない。ただ疲れすぎて気を失っただけだ。',
      );
      await you.say_as_passer_by_and_wait(
        '医師',
        `あなたが ${falcon.name} のトレーナーですね？ なぜ${falcon.sex}をちゃんと休ませなかった。`,
      );
      await you.say_and_wait(`죄송합니다. 다 제 잘못입니다.`);
      await you.say_as_passer_by_and_wait(
        '医師',
        'これ以上、無理はさせないでください。',
      );
      await you.say_and_wait(`ありがとうございます。`);
      await era.printAndWait(
        `病床の${falcon.name}을 바라보며, 자리에 앉은 ${you.name}は拳を握った`,
      );
      era.drawLine();
      await you.say_and_wait(`팔코! 정신 차려봐, 팔코!`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「さっきまでステージでは元気だったのに、昇降機を下りたら——」`,
      );
      await you.say_and_wait(`구급차! 구급차 어디 있어?`);
      await you.say_as_passer_by_and_wait('担当者', 'もう救急車は呼びました。');
      await you.say_as_passer_by_and_wait(
        '担当者',
        'とりあえず医務室へ運んでください。',
      );
      await falcon.say_and_wait([
        { content: `${callname}？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(
        `ファル子をそっと背負い、担当者の指示どおり医務室へ走った。`,
      );
      era.printButton(`お前に何かあったら、僕も`, 1);
      await era.input();
      await falcon.say_and_wait([
        { content: `${callname}、だよね？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(`ファル子が何か言っているようだ。`);
      await era.printAndWait(
        `医務室へ走ったあとのことは、よく覚えていない。ファル子が救急車に運ばれるところ以外は。`,
      );
      await falcon.say_and_wait(`${you.actual_name}！`);
      era.drawLine();
      await era.printAndWait(
        `눈앞의 ${falcon.teen_sex_title}は、大きな目で ${you.name}을(를) 바라보고 있었다.`,
      );
      await era.printAndWait(
        `땀에 젖은 작은 손이 ${you.name} の袖を離さない。`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`어느새 시야가 뿌옇게 흐려졌다.`);
      await you.say_and_wait(`ファル子……よかった。`);
      await era.printAndWait(`${falcon.name}만 무사하다면 그걸로 된 것이다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] jbc_cls_win_s
  jbc_cls_win_s: (() => {
    const title = 'JBCクラシック後・もう一度スタート！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `ファル子！ ファル子！ うおおおおおおおお！`,
      );
      await era.printAndWait(
        `ゴールを切った瞬間、場内の観客がダートに上がってきたスターへ歓声を送る。`,
      );
      await you.say_and_wait(`ファル子、思ったより輝いてるね。`);
      await falcon.say_and_wait(
        `応援ありがとう。これからも、ファル子をよろしくね！`,
      );
      await you.say_and_wait(`うん——次はウィンナーズステージだね。`);
      await era.printAndWait(
        `${you.name}は今年のJBCで作ったディスクを、録画機に入れる。`,
      );
      await era.printAndWait(
        `비록 현장에서 직접 ${falcon.name}이 골인하는 순간을 보지는 못했지만, 당사자가 생생하게 들려주는 당시의 상황 묘사 덕분에 어느 정도 아쉬움을 달랠 수 있었다.`,
      );
      await falcon.say_and_wait(
        `次はファル子おすすめのウィンナーズステージ時間⭐`,
      );
      await era.printAndWait(
        `영상 속의 ${falcon.name}が、ひとりウィンナーズステージへ向かう。`,
      );
      era.drawLine({ content: 'ウィンナーズステージのあと' });
      await falcon.say_and_wait(`올해 목표는 이제 도쿄 대상전만 남았네.`);
      await era.printAndWait(
        `ファル子のステージは想像以上で、ファンの気勢がステージをひっくり返しそうだった。`,
      );
      await era.printAndWait(
        `현장에서 직접 보는 것 같은 현장감은 부족했지만, ${you.name}은(는) 충분히 만족스러웠다.`,
      );
      await you.say_and_wait(`トップアイドルまで、もう一歩だよ？`);
      await falcon.say_and_wait(`トップまでは、まだ遠いよ。`);
      await you.say_and_wait(`말은 그렇게 해도 말이야.`);
      await era.printAndWait(
        `${you.name}は録画を止めて、また${falcon.name}을 바라보았다.`,
      );
      await you.say_and_wait(`ファル子、思ったより強いね。`);
      await falcon.say_and_wait(`……팔코, 생각보다 그렇게 강하지 않다구?`);
      await you.say_and_wait(`今年の締めの東京大賞典のために、今は休もう。`);
      await you.say_and_wait(`だってファル子。`);
      await era.printAndWait(`옆에서 ${falcon.name}의 고른 숨소리가 들려왔다.`);
      await era.printAndWait(
        `このあいだの準備を${falcon.name}ひとりでこなしてきた疲れが、やっと限界に来たのだろう。`,
      );
      await you.say_and_wait(`今は、${falcon.sex}に少し寝てもらおう。`, true);
      await you.say_and_wait(`ありがとう、${falcon.name}。`);
      await era.printAndWait(
        `${falcon.name}を柔らかいソファへそっと寝かせ、トレーナーの上着を${falcon.sex}にかける。`,
      );
      await era.printAndWait(
        `揺らしすぎたのか、${falcon.name}の耳が動き、体がもっと楽な姿勢に変わる。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] loneliness_girl
  loneliness_girl: (() => {
    const title = "강변의 우마돌";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강가 풀밭 위에서`);
      await falcon.say_and_wait(`${callname}, 여기 공기 정말 상쾌하다`);
      await falcon.say_and_wait(
        `岸の草地、きれいな空気は、人が休むのに向いてるね。`,
      );
      await falcon.say_and_wait(
        `！そうだ、ここでライブしてウマスタに上げたら、ファンも一気に増えるかも。`,
      );
      await falcon.say_and_wait(`${callname}은 어떻게 생각해?`);
      await era.printAndWait(`심호흡하며 미래를 꿈꾸는 팔코의 모습을 지켜보았다.`);
      await you.say_and_wait(
        `응, 맑은 공기를 마시면 팬들도 정말 좋아할 거야.`,
      );
      await falcon.say_and_wait(`......${callname}도 좋아?`);
      await you.say_and_wait(`？うん。`);
      await falcon.say_and_wait(`ファル子も嬉しいよ⭐`);
      await era.printAndWait(
        `口を覆って忍び笑いするファル子と河岸を歩く。水面から陸へ吹く風。水際の草も、風に体を揺らしている。`,
      );
      await era.printAndWait(`植物たちも、風と水の潤いを待っている。`);
      await falcon.say_and_wait(`${callname}, 이것 봐!`);
      await era.printAndWait(
        `새로운 것을 발견한 팔코가 강가로 달려가더니 쪼그려 앉았다.`,
      );
      await era.printAndWait(
        `팔코를 따라 강가로 다가간 ${you.name}도 팔코의 시선을 따라갔다.`,
      );
      await era.printAndWait(
        `川際に根を張った白い小さな花が、風に揺れている。`,
      );
      await falcon.say_and_wait(`이 꽃, 왠지 팔코 같아.`);
      await era.printAndWait(
        `살짝 만져보고 싶지만, 너무 힘을 주어 꺾어버릴까 봐 하얀 꽃잎에 보호받는 노란 꽃술을 그저 가만히 지켜볼 뿐이었다.`,
      );
      era.printButton(`캐모마일이라고 하던가?`, 1);
      await era.input();
      await you.say_and_wait(
        `古代エジプトでは${falcon.sex} を月の薬草と呼んで、涼しくて心を鎮める効き目がある。`,
      );
      await you.say_and_wait(`花言葉は……`);
      await era.printAndWait(`몰래 스마트폰을 켜서 캐모마일을 검색했다.`);
      await you.say_and_wait(`苦難の中の力。`);
      await falcon.say_and_wait(`팔코도 캐모마일처럼 피어나고 싶어.`);
      await era.printAndWait(`ときどき川に洗われる、湿った土を見る。`);
      await falcon.say_and_wait(
        `뿌리를 땅속 깊이 박고, 활짝 핀 꽃을 모두에게 바치는 거야.`,
      );
      await falcon.say_and_wait(`だから、ファル子も頑張らないと。`);
      await era.printAndWait(
        `팔코의 머리를 쓰다듬으려 손을 뻗었지만, 팔코는 교묘하게 몸을 피했다.`,
      );
      await falcon.say_and_wait(`도망가는 팔코를 잡고 싶으면, 한번 쫓아와 보시지!`);
      await you.say_and_wait(`ファル子、捕まえるぞ！`);
      await falcon.say_and_wait(
        `${callname}은 평생 팔코를 못 잡을걸⭐`,
      );
      await era.printAndWait(
        `騒がしかった草地が静かに戻る。揺れる花の音だけが、風の耳元をゆっくり流れていく。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] next_beginning
  next_beginning: (() => {
    const title = "First! 아이돌의 첫걸음";
    /**
     * 震える両手 イメージ 夢の中の物語 人物 交渉 細かな仕草 顔 空の変化 色彩 草原
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('トレーニング場');
      era.printButton(`조금만 더 버텨! 마지막 한 바퀴!`, 1);
      await era.input();
      await falcon.say_and_wait(`……하아아아앗!`);
      await era.printAndWait(
        `${falcon.name}은 몸을 앞으로 기울이며 지면의 저항을 이겨내려 애썼고, 발밑의 대지에서는 묵직한 진동이 전해졌다.`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `歯を食いしばり、速度を保った${falcon.name}が、ダートの鮮やかな白線を駆け抜けた。`,
      );
      await you.say_and_wait(`수고했어!`);
      await era.printAndWait(
        `${you.name}は用意したタオルを${falcon.name}へ渡し、${falcon.sex}は額の汗を丁寧に拭う。`,
      );
      await era.printAndWait(
        `모래 먼지와 땀이 뒤섞인 흔적이 ${falcon.sex}의 체육복에 딱 달라붙어 있었다.`,
      );
      await era.printAndWait(
        `激しい運動のあと、いきなり座ると体に負担がかかる。${you.name}と${falcon.name}はトレーニング場をゆっくり回りながら雑談した。`,
      );
      await falcon.say_and_wait(`${callname}⭐, 이번에는 지난번보다 더 나아졌어?`);
      await era.printAndWait(
        `${you.name}はタイマーを出し、タイムを確認し、最後のスパートで残った深い跡を見て、小さく頷いた。肯定された${falcon.teen_sex_title}は興奮を抑えきれず、${callname}の前を歩いた。`,
      );
      await falcon.say_and_wait(
        `야호⭐, 이제 ${falcon.uma_sex_title} 아이돌의 길을 향해 나아갈 수 있겠어!`,
      );
      await you.say_and_wait(`${falcon.uma_sex_title} 아이돌?`);
      await era.printAndWait(
        `${falcon.name}は以前も${falcon.uma_sex_title}アイドルという言葉を出していた。だが、それが何なのか、自分ではまだはっきりしない。`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドルはファル子が作った言葉だよ。キラキラして親しみやすいアイドルで、ファンと一緒に育ち、見届けて、愛と希望を贈り合う存在！`,
      );
      await you.say_and_wait(
        `個人の魅力を前面に出すアイドル芸能人みたいなものか？`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルの概念は、芸能界の新人アイドルに近い。`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title} 아이돌만의 특별한 점은 무엇일까?`,
        true,
      );
      await era.printAndWait(
        `${you.name}はミネラルウォーターを${falcon.sex}へ渡した。`,
      );
      await you.say_and_wait(`일단 이 개념을 수첩에 적어둬야겠어.`, true);
      await falcon.say_and_wait(
        `팔코는 관객석의 모두에게 팔코가 반짝이는 모습을 계속 보여주고 싶어!`,
      );
      await era.printAndWait(
        `도주 주법은 ${falcon.name}의 요구와 딱 맞아떨어졌다.`,
      );
      await you.say_and_wait(`모든 각질 중에서 가장 어울리는 건 역시 도주일 거야.`, true);
      await you.say_and_wait(`확실히 팔코다운 스타일이네.`);
      await era.printAndWait(
        `경기장이든 무대든 그 누구보다 빛나는 존재가 되기 위해 ${falcon.sex}는 이 방향을 선택한 것이었다.`,
      );
      await falcon.say_and_wait(
        `だってファル子は、キラキラの${falcon.uma_sex_title}アイドルだよ⭐`,
      );
      await falcon.say_and_wait(
        `과거부터 지금까지, 그리고 앞으로의 미래까지 쭉 빛나게 될 ${falcon.uma_sex_title} 아이돌이야!`,
      );
      await you.say_and_wait(
        `${falcon.name}がたどり着く場所は、どんな景色なんだろう。僕も楽しみになってきた。`,
      );
      await falcon.say_and_wait(`분명 최고의 장면이 될 거야!`);
      await falcon.say_and_wait(
        `ああ。${falcon.name}が${falcon.uma_sex_title}アイドルでいるところを思うだけで、ファル子、こ～んなに力が湧いてくる！`,
      );
      await falcon.say_and_wait(`${callname}, 다음 목표는 뭐야?`);
      await era.printAndWait(
        `${falcon.name}は力を取り戻したらしい。${you.name}は、無理をしていないか少し心配だ。`,
      );
      await you.say_and_wait(`たしかに、ファル子らしいな。`, true);
      era.printButton(`그럼 다시 측정을 시작하자`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}! 팔코는 이제 준비됐어!`);
      await you.say_and_wait(`준비!`);
      await era.printAndWait(
        `${falcon.name}の体が張り、目は前方のコースをじっと捉える。`,
      );
      await era.printAndWait(
        `출발 신호와 함께 피어오른 흙먼지는 더트 아이돌이 내디딘 첫걸음의 증거가 되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oc_95_1
  oc_95_1: (() => {
    const title = "신사 참배";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`몇 번을 와도 여기는 참 조용하네⭐`);
      await falcon.say_and_wait(
        `음— 차라리 신령님도 팔코의 콘서트를 보러 오게 할까!`,
      );
      era.printButton(`엉뚱한 소리는 거기까지 해!`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) ${falcon.name}의 머리를 가볍게 콩 쥐어박자, 팔코가 '으으' 소리를 내며 조용해졌고 잔잔한 수면처럼 다시 평화가 찾아왔다.`,
      );
      await era.printAndWait(
        `길게 줄을 선 참배객들을 다시 올려다보자, 온몸에 알 수 없는 무력감이 엄습했다.`,
      );
      era.printButton(`참배하러 온 사람들이 생각보다 훨씬 많네.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `다들 시간을 들여서라도 꼭 이루고 싶은 소원이 있어서 그런 거겠지?`,
      );
      await falcon.say_and_wait(
        `でもファル子は、ファン（予定）のみんなのために頑張るよ！`,
      );
      await era.printAndWait(
        `大勢が同じ場所へ進むのを見て、本能になったアイドル意識が${falcon.name}은 순식간에 들뜬 모습이 되었다.`,
      );
      await you.say_and_wait(`……일단 참배부터 끝내고 말해.`);
      await era.printAndWait(
        `隣で元気が尽きない${falcon.teen_sex_title}を見て、${you.name} は少し頭を抱えた。`,
      );
      await era.printAndWait(
        `제멋대로 게릴라 콘서트를 열어서 생기는 곤란함 때문도 아니고, 앞으로 있을 더트 G1 레이스 전승이라는 가혹한 목표 때문도 아니었다.`,
      );
      await you.say_and_wait(`あの笑顔は、どう見ても作りものだ。`, true);
      era.drawLine();
      await era.printAndWait(`長い待ちのあと、二人は奉納箱の前に立った。`);
      await era.printAndWait(
        `눈앞의 세 여신상을 바라보자, 세 여신에게 번영을 빌었다는 시냇물의 신령의 전설이 머릿속에 떠올랐다.`,
      );
      await era.printAndWait(`……번영을 빌었던 시냇물의 신령인가?`);
      await era.printAndWait(`생각은 시간의 흐름 속에서 이리저리 맴돌았다.`);
      await falcon.say_and_wait(`세 여신님——`);
      await era.printAndWait(`몸이 옆에 있는 팔코를 따라 똑같은 동작을 취했다.`);
      await era.printAndWait(`그 찰나의 순간, ${you.name}이(가) 내린 결론은……`);
      era.printButton(`河の神は、土地の人の健康を祈る（体力+600）`, 1);
      era.printButton(`河の神は、土地の人の勇気を祈る（全能力+10）`, 2);
      era.printButton(
        `河の神は、土地の人の知恵を祈る（パワー+10、スキルPt+100）`,
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `그 후, ${you.name}의 귓가에 세 여신의 속삭임이 들려왔다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] petrichor_girl
  petrichor_girl: (() => {
    const title = (falcon) => `풀내음 가득한 ${falcon.uma_sex_title}들`;
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`오늘은 교내 개방의 날이었다.`);
      await falcon.say_and_wait(
        `${falcon.name} ${falcon.elder_sibling_sex_title}です。これからトレセンを案内するね♪`,
      );
      await era.printAndWait(
        `近くの小学校の小さな${falcon.uma_sex_title}들이 트레센 학원을 견학하러 왔다.`,
      );
      era.printButton(
        `この小さな${falcon.uma_sex_title}たちの中から、あとで担当が生まれるかも`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A 「여기가 트레센이야?」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B 「와! 진짜 큰 학원이다!」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}C「${
          falcon.name
        } お姉ちゃん、トレセンの歴史、教えて？」`,
      );
      await falcon.say_and_wait(
        `アイドルのファル子なら、ファンにちゃんと説明するよ♪ まず……`,
      );
      await era.printAndWait(
        `元気な${falcon.name} が、トレセンのことを丁寧に話す。`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A 「저기 있는 사람은 누구야?」`,
      );
      await era.printAndWait(
        `${
          falcon.name
        } のまわりで跳ねていた小さな${falcon.uma_sex_title}들이 ${you.name}을(를) 발견했다.`,
      );
      await falcon.say_and_wait(
        `트레센 학원의 ${falcon.uma_sex_title}들이라도 G1에서 우승하는 건 정말 힘든 일이야…… 어? 잠깐만!`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A 「저기 있는 트레이너, 왠지 멋있어 보이는데?」`,
      );
      await era.printAndWait(
        `방금까지 ${
          falcon.name
        }의 곁에 있던 ${falcon.uma_sex_title}들이 우르르 ${you.name}의 곁으로 몰려들었다.`,
      );
      await falcon.say_and_wait(`ト、${callname}！`);
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B 「내가 트레센에 입학하면 내 전속 트레이너가 되어 줄래?」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A 「안 돼! 분명히 내가 먼저 봤단 말이야!」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B 「내가 먼저 말했으니까, 나랑 같이 있어야 해!」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}들은 마치 아끼는 장난감을 서로 차지하려는 것처럼 ${you.name}의 양손을 잡아당겼다.`,
      );
      era.printButton(`아, 아파!`, 1);
      await era.input();
      await era.printAndWait(
        `周知のとおり、${falcon.uma_sex_title}の力は大人の人間の三倍だ。`,
      );
      await era.printAndWait(
        `스스로 힘을 조절하지 못해 생길 위험을 방지하기 위해, ${falcon.uma_sex_title}들에게는 필수 과목이 하나 있었다.`,
      );
      await era.printAndWait(`바로 자신의 힘을 조절하는 법을 배우는 것이었다.`);
      await era.printAndWait(
        `대부분의 ${falcon.uma_sex_title}들은 중학생 무렵부터 의식적으로 힘을 조절하기 시작했다.`,
      );
      await era.printAndWait(
        `だが心もまだ育っている小さな${falcon.uma_sex_title}たちには。`,
      );
      await era.printAndWait(
        `${you.name} は、筋肉質の大人ふたりに玩具にされたみたいに、引っ張られる。`,
      );
      await falcon.say_and_wait(`${callname}!`);
      await era.printAndWait(`다행히 ${falcon.name}이 제때 도착했다.`);
      await falcon.say_and_wait(`너희 둘! 대체 무슨 일인지 팔코에게 제대로 설명해 봐!`);
      await era.printAndWait(
        `二人の小さな${falcon.uma_sex_title}が巨大な力で空へ持ち上げられ、何が起きたか見ようとした瞬間、${
          falcon.name
        } の修羅のような顔が来る。`,
      );
      await era.printAndWait(`小さな${falcon.uma_sex_title}A 「으아아아앙!」`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}B 「나 잡아먹지 마!」`);
      await era.printAndWait(
        `さっきまで争っていたふたりが、いまは縮こまって、${falcon.name}의 훈계를 들었다.`,
      );
      await falcon.say_and_wait(`${callname}！ ${callname}、大丈夫？`);
      await era.printAndWait(
        `설교가 끝난 뒤, ${falcon.name}은 걱정스러운 표정으로 ${you.name}에게 물었다.`,
      );
      era.printButton(`大丈夫。子どもたちが少しはしゃいだだけ。`, 1);
      await era.input();
      await era.printAndWait(`욱신거리는 통증을 참으며 아이들 곁으로 다가갔다.`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}A 「우으……」`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}B 「응?」`);
      era.printButton(
        `인간은 ${falcon.uma_sex_title}에 비해 아주 나약한 생물이니까, 다음부터는 꼭 힘을 조절해야 해.`,
        1,
      );
      await era.input();
      era.printButton(
        `괜찮다면, 나중에 트레센에서 너희의 활기찬 모습을 다시 볼 수 있으면 좋겠네.`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}A`,
        'うんうん。',
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}B`,
        '分かった。',
      );
      await era.printAndWait(
        '引率の先生が遅れて来て、事情を聞いてから謝罪した。',
      );
      era.drawLine({ content: '終了後' });
      await falcon.say_and_wait(
        `자기 자신보다 남의 기분을 더 걱정하다니, 그러다간 금방 다치고 말 거야!`,
      );
      await era.printAndWait([
        'ファル子の説教を素直に聞く ',
        you.get_colored_name(),
        ' が、両手を動かす。',
      ]);
      await you.say_and_wait(`팔코, 나를 그렇게나 걱정해 준 거야?`);
      await falcon.say_and_wait(`アイドルなら、ファンを心配するのが当たり前！`);
      await falcon.say_and_wait(`게다가 ${callname}은 팔코의……`);
      await era.printAndWait(`무언가 깨달은 듯, 팔코의 얼굴이 점점 붉게 물들었다.`);
      await falcon.say_and_wait(`やあ！ ${callname}、いじめっ子！`);
      await era.printAndWait(`서로 티격태격하는 사이, 오늘의 일과가 마무리되었다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] rooftop_idol
  rooftop_idol: (() => {
    const title = '屋上のアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`放課後のある日`);
      await era.printAndWait(
        `${falcon.name} の最近のデータを整えたあと、肩の力を抜いた ${you.name} が、長く息を吐く。`,
      );
      era.printButton(`このあと屋上を歩こう`, 1);
      await era.input();
      await era.printAndWait(
        `いつの間にか ${you.name} も、鏡に向かってひとりごとを言う癖がついていた。`,
      );
      await you.say_and_wait(
        `ふたりでいると、相手の癖を継ぐ、ってやつか。`,
        true,
      );
      await era.printAndWait(
        `その考えを感情のいちばん奥へ埋めたいのに、${you.name} を相手に調子に乗ったみたいに、浮かび続ける。`,
      );
      await era.printAndWait(`最後の結論は——`);
      await you.say_and_wait(
        `僕は、ファル子としての${falcon.name}が好きだ。`,
        true,
      );
      await era.printAndWait(
        `明るく、前向きで、目標を見て進む${falcon.sex} が、${you.name} とファンに希望を渡してきた。`,
      );
      await you.say_and_wait(
        `こんな${falcon.uma_sex_title}、本当にいるのか。`,
        true,
      );
      await era.printAndWait(`${you.name} の内側は、ずっとそれを疑っている。`);
      await era.printAndWait(`アイドルでい続ける痛みと、心の責め。`);
      await you.say_and_wait(
        `${falcon.sex} は、暗い面を見せたくないだけなんだろう`,
        true,
      );
      await era.printAndWait(`気づいたら屋上にいた。`);
      await era.printAndWait(
        `夕日がゆっくり地平へ落ち、涼しい息がまわりから来て、温度がまた一段下がる。`,
      );
      await you.say_and_wait(`もう戻ろうか`);
      await era.printAndWait(`戻りかけたとき、見慣れた影が見えた。`);
      await falcon.say_and_wait(`仰げば望める、手を伸ばせば虚空。`);
      await falcon.say_and_wait(`月中の桂のよう、青海原の上にあり。`);
      await era.printAndWait(
        `憂いのある歌声が風に乗って届き、憂いのある目が、夕日の去るほうを見ている。`,
      );
      await you.say_and_wait(`ファル子？`, true);
      await era.printAndWait(`声に引かれて、源を見る。`);
      await era.printAndWait(
        `風に吹かれた${falcon.name} は長い髪を任せ、憂いの目で虚空を見ている。`,
      );
      await era.printAndWait(`声をかけようとして、その場で止まる。`);
      await era.printAndWait(`${falcon.name} は、結局屋上を離れた。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_lose
  sats_sho_lose: (() => {
    const title = "사츠키상 후·동경하는 무대 중앙";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`대기실에서`);
      era.printButton(`라이브 수고했어, 팔코.`, 1);
      await era.input();
      await era.printAndWait(
        `사츠키상에서 우승하지는 못했지만, ${falcon.name}은 만족스러운 모습이었다.`,
      );
      await falcon.say_and_wait(`사츠키상 무대는 생각보다 훨씬 컸어……`);
      await falcon.say_and_wait(
        `평소에 서던 무대보다 두 배는 더 크고, 눈부신 플래시랑 우리를 지켜봐 주는 관객들로 가득했지.`,
      );
      await falcon.say_and_wait(
        `그래도 역시 가장 빛나는 건 무대 정중앙 자리겠지…… 다음번엔 팔코가 꼭 저 자리에 올라가고 말 거야!`,
      );
      await falcon.say_and_wait(`팔코 파이팅!`);
      await you.say_and_wait(
        `バカ、皐月賞はクラシック級の競走${falcon.uma_sex_title}만 참가할 수 있는 레이스라고!`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}の小さな頭を、軽く叩いた。`,
      );
      await falcon.say_and_wait(`에헤헤⭐`);
      await era.printAndWait(`혀를 쏙 내미는 ${falcon.name}은 의외로 귀여워 보였다.`);
      await you.say_and_wait(`정말 귀엽네.`, true);
      await you.say_and_wait(
        `コホン！ 次はファル子、ジャパンダートダービーをしっかり準備しよう。`,
      );
      await falcon.say_and_wait(`응⭐`);
      await you.say_and_wait(`でもアイドルのステージも、気を抜くなよ！`);
      await falcon.say_and_wait(`はい⭐`);
      await you.say_and_wait(`이 기세 그대로 나아가는 거야!`);
      await falcon.say_and_wait(
        `最強の${falcon.uma_sex_title}アイドル——${
          falcon.name
        }⭐ 次は絶対、キラキラしてるところをみんなに見せる！`,
      );
      await era.printAndWait(`${falcon.name}은 활기찬 목소리로 대답했다.`);
      await era.printAndWait(`${you.name}は、次のレースが楽しみになってきた。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_win
  sats_sho_win: (() => {
    const title = "사츠키상 후·빛나는 큰 무대";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await falcon.say_and_wait(`ほんと……`);
      await falcon.say_and_wait(
        `${falcon.name}……ファル子、ほんとに勝った！ Lucky！ Victory⭐`,
      );
      await era.printAndWait(
        `${you.name}も掲示板の文字をじっと見つめた。目の前の事実が夢のように壊れ、この非現実のまま目が覚めるのではないかと恐れる。だが覚めても、それはいい夢だろう。`,
      );
      await era.printAndWait(
        `하지만 ${falcon.name}의 순위는 ${you.name}がどう動いても変わらない。木からリンゴを落とす重力のように、安心できる。`,
      );
      await falcon.say_and_wait(`꿈 아니지! ${callname}!`);
      await era.printAndWait(`${falcon.name}も、この歓喜からまだ戻れていない`);
      era.printButton(`次は${falcon.name}が夢見た……芝のステージだ！`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 스스로도 놀랄 정도로 날카롭고 떨리는 목소리를 냈다.`,
      );
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `${falcon.name}はやっと気づき、ウィンナーズステージの準備を急いだ。`,
      );
      await era.printAndWait(
        `${you.name}은(는) 좌석에 몸을 기댄 채 한참 동안 멍하니 있었다.`,
      );
      era.drawLine({ content: 'ウィンナーズステージ終了後' });
      await you.say_and_wait(`수고했어.`);
      await era.printAndWait(
        `${you.name}은(는) 미리 준비한 수건을 김이 모락모락 나는 ${falcon.name}에게 건넸다.`,
      );
      await era.printAndWait(
        `びしょ濡れの${falcon.name}は疲れ切っているのに、${falcon.sex}の目は光っていた。`,
      );
      await you.say_and_wait(`사츠키상 무대는 어땠어?`);
      await falcon.say_and_wait(`想像より広くて、想像よりキラキラしてた！`);
      await falcon.say_and_wait(
        `それに、ファル子、こんなに人がいるステージで歌ったことなかった。走ったステージの倍もある場所に立つなんて。`,
      );
      await era.printAndWait(
        `수건으로 머리카락에 맺힌 땀을 닦으며 ${falcon.name}은 ${you.name}을(를) 바라봤다.`,
      );
      await falcon.say_and_wait(
        `あんなにたくさんのお客さんの視線の中だと、ファル子、力で満たされるみたい……${callname}도 팔코가 말하는 그 모두에게 주목받는 느낌을 알 수 있다면, 팔코가 무슨 말을 하는지 이해할 텐데.`,
      );
      await era.printAndWait(
        `${falcon.name}は少し名残惜しそうに手を止め、何かを見ているようで、いいことを思い出すときのように無意識にタオルを擦っていた。`,
      );
      await suzuka.say_and_wait(`실례할게요...`);
      await era.printAndWait(`사일런스 스즈카가 대기실 문을 열었다.`);
      await suzuka.say_and_wait(`어라? 나중에 다시 오는 게 좋을까요?`);
      await era.printAndWait(
        `${falcon.name}は無意識に動きを止め、サイレンススズカは${you.name}を見て、次の言葉を待っているようだった。`,
      );
      await you.say_and_wait(
        `いいえ、むしろちょうどいい。ありがとう、スズカさん。`,
      );
      await you.say_and_wait(`지난번 잔디 특훈이 정말 큰 도움이 됐어.`);
      await era.printAndWait(`${you.name}は心から${falcon.sex}に礼を言った。`);
      await falcon.say_and_wait(
        `ありがとう、スズカちゃん。ファル子が勝てたのは、あなたのおかげだよ⭐`,
      );
      await suzuka.say_and_wait(`ス……スズカちゃん？`);
      await era.printAndWait(
        `어느새 ${falcon.name}은 평소의 모드로 돌아와 있었다.`,
      );
      await you.say_and_wait(
        `今回の勝利の功労者として、スズカ${suzuka.adult_sex_title}、いっしょに勝利を祝いませんか？`,
      );
      await era.printAndWait(
        `さっきの曖昧な空気は横に置き、${you.name}은(는) 사일런스 스즈카에게 제안했다.`,
      );
      await suzuka.say_and_wait(
        `……${callname}がそこまで言うなら。ありがとうございます。`,
      );
      await era.printAndWait(
        `그렇게 일행은 근처의 유명한 양식 레스토랑에서 승리의 맛을 만끽했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] shine_girl
  shine_girl: (() => {
    const title = "역 앞 홍보";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname_4) => {
      await era.printAndWait(`어느 휴일`);
      await falcon.say_and_wait(`トップアイドルを目指す${falcon.name} です！`);
      await falcon.say_and_wait(
        `アイドルのファル子を、よろしくお願いしまーす♪`,
      );
      await era.printAndWait(
        `休日、${you.name}は${falcon.name} に引かれて駅へ来た`,
      );
      await you.say_and_wait(`유동 인구가 많은 역에서 팬을 늘리려는 작전이야?`);
      await you.say_and_wait(`그 열정을 공부에 좀 쏟았으면 좋았을 텐데.`);
      await era.printAndWait(`하지만 대부분의 사람은 이상한 눈으로 한 번 쳐다보고는 그냥 지나쳐 갔다.`);
      era.drawLine({ content: '昼になる' });
      await falcon.say_and_wait(`う～昼になっても、新しいファンが増えない。`);
      await era.printAndWait(
        `みんな用事がある。ファンでいられる余裕があるのは、学生くらいだ。`,
      );
      await era.printAndWait(`게다가`);
      await maru.say_and_wait(`어라, 팔코 아니니?`);
      await era.printAndWait(`예상치 못한 인물이 등장했다.`);
      await falcon.say_and_wait(`에? 마루젠 선배가 여긴 어쩐 일이야?`);
      await era.printAndWait(
        `トレセンの制服のマルゼンスキーが、余裕の笑顔であなたたちを見ている。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 47
      ) {
        await maru.say_and_wait(
          `どこ探しても ${callname_4} がいないと思ったら、ここにいたの？`,
        );
        await era.printAndWait(
          `${you.name} はもちろん、この親しみやすい${maru.elder_sibling_sex_title}を覚えている`,
        );
        await maru.say_and_wait(
          `しばらく ${callname_4} が見えないと、${maru.elder_sibling_sex_title}、寂しいわ？`,
        );
        era.printButton(`같이 할래?`, 1);
        await era.input();
        await maru.say_and_wait(
          `可愛い後輩を助けるのは光栄よ。で、アタシは何をすればいい？`,
        );
        await era.printAndWait(
          `走る喜びを味わい、もっと多くの${maru.uma_sex_title}に背中を追わせるために、`,
        );
      }
      await falcon.say_and_wait(`ファル子は、駅でファンを誘い始めるところ⭐`);
      await falcon.say_and_wait(`그래서 마루젠 선배도 홍보를 좀 도와줬으면 좋겠어.`);
      await maru.say_and_wait(
        `こんな可愛い後輩なら${maru.elder_sibling_sex_title}が手伝うわ。${maru.elder_sibling_sex_title}の宣伝、見せてあげる`,
      );
      await era.printAndWait(`다음 열차가 도착했을 때`);
      await maru.say_and_wait(
        `하이루! 멋쟁이 오빠 언니들 여기 좀 보세요~ 이렇게 귀여운 아가씨의 1호 팬이 되어주지 않을래?`,
      );
      await maru.say_and_wait(
        `プレッシャー山ほどでも大丈夫。神馬はすべて浮き雲よ～`,
      );
      await falcon.say_and_wait(`......정말 그리운 말투네.`);
      await era.printAndWait(
        `${you.name}は中学のころ、ネットでそう呼び合っていた空気を思い出した。`,
      );
      await era.printAndWait(
        `それが出た瞬間、みんな足を速めた。両手で顔を覆って、雷に打たれたような人も多い。`,
      );
      await maru.say_and_wait(`ん～一番乗り、ひとりもいないわ`);
      await era.printAndWait(
        `아쉬워하는 마루젠스키에게 팔코가 다가가 위로했다.`,
      );
      await falcon.say_and_wait(`だ、大丈夫。もうファル子の助けになったよ。`);
      await falcon.say_and_wait(`아무튼 정말 고마워!`);
      await maru.say_and_wait(
        `그렇다면...... 나도 팔코의 팬이 되어도 될까?`,
      );
      await falcon.say_and_wait(
        `え？ マルゼン先輩がファン……ありがとうございます！`,
      );
      await era.printAndWait(
        `팬을 얻고 기뻐하는 팔코를 보며 ${you.name}도 덩달아 기분이 좋아졌다.`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 96
      ) {
        await maru.say_and_wait(`팔코, 부탁 하나만 해도 될까?`);
        await era.printAndWait(
          `余裕の顔のマルゼンスキーが、${you.name} と${falcon.name} のやりとりを見ている。`,
        );
        await falcon.say_and_wait(`ファル子が力になれるなら、嬉しい！`);
        maru.say(
          `よかった！近くのモールで、最近流行のココアパフェを買ってきてくれない？`,
        );
        await era.printAndWait('チョコとアイスが混ざった飲み物', {
          fontSize: '0.5rem',
        });
        await falcon.say_and_wait(
          `당연하지! 그런데 팔코는 지금 팬들을 모으는 중이라서……`,
        );
        await maru.say_and_wait(
          `アタシも手伝うわ？だからお願い、いまできたてのファンの願い、聞いてちょうだい！`,
        );
        await falcon.say_and_wait(
          `음—— 알았어! 마루젠 선배의 부탁이라면 팔코가 힘내야지!`,
        );
        await falcon.say_and_wait(`그럼, 팔코 다녀올게!`);
        await era.printAndWait(
          `멀어지는 팔코를 보며, 역에는 이제 ${you.name}과(와) 마루젠스키만 남았다.`,
        );
        await maru.say_and_wait(
          `用事がないなら、${callname_4} を少し独占させて♪`,
        );
        await era.printAndWait(
          `${you.name} を抱き寄せて優しく撫でるマルゼンスキーは、嬉しそうだった。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] teio_sho_win
  teio_sho_win: (() => {
    const title = "제왕상 후·반짝이는 아이돌";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname) => {
      await era.printAndWait(`${falcon.name}은 멋지게 1착을 거머쥐었다.`);
      await era.printAndWait(`ウィンナーズステージでも、見せ切った。`);
      await era.printAndWait(
        `ファル子にとって、トップアイドルまでの道は、もうかなり近い。`,
      );
      await falcon.say_and_wait(
        `${callname}, 팔코의 퍼포먼스 어땠어?`,
      );
      await you.say_and_wait(`プロのアイドルと、もう大差ないよ。`);
      await you.say_and_wait(
        `でも比べるなら、うちのファル子がいちばん可愛い。`,
      );
      await falcon.say_and_wait(`うん！ ファル子も自分、可愛いと思う！`);
      await maru.say_and_wait(`팔코, 정말 대단한걸!`);
      await era.printAndWait(
        `어느새 마루젠스키가 대기실 문앞에 서 있었다.`,
      );
      await falcon.say_and_wait(`어라? 마루젠 선배가 여기 웬일이야?`);
      await maru.say_and_wait(
        `うん！ ファル子が一生懸命走る姿、アタシ超～感動したわ！`,
      );
      await maru.say_and_wait(
        `輝きたいって夢を抱いて芝を駆けて、ウィンナーズステージでいちばんきれいな自分を見せる。`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}も、その熱に火がついたわ！`,
      );
      await falcon.say_and_wait(
        `아, 아니야…… 마루젠 선배가 말한 정도는……`,
      );
      await maru.say_and_wait(`음—— 그러고 보니 기회가 된다면 같이 연습해 보지 않을래?`);
      await falcon.say_and_wait(`그게, 팔코는……`);
      await maru.say_and_wait(
        `ダートなら、${maru.elder_sibling_sex_title}がその弱点、なんとかするわ♪`,
      );
      await maru.say_and_wait(`그럼, 그때 또 보자♪`);
      await falcon.say_and_wait(
        `……응! 마루젠 선배와 함께라면 팔코도 더 많은 걸 배울 수 있을지도 몰라!`,
      );
      await era.printAndWait(`こうして、帝王賞はきれいに終わった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_dai_win_c
  toky_dai_win_c: (() => {
    const title = '東京大賞典後・「スマートファルコン」というダートアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}은 올해의 챔피언이 되었다.`);
      await era.printAndWait(
        `ステージ上の${falcon.sex}は、もう一度一皮むけたようだった。`,
      );
      await era.printAndWait(
        `明るい笑顔とリズムの掴み方が、会場をうまく熱くした。`,
      );
      await you.say_and_wait(`팔코…… 수고했어.`);
      await era.printAndWait(
        `무대에서 내려온 ${falcon.name}は肩で息をし、全身の汗がアイドルとしての努力を示していた。`,
      );
      await era.printAndWait(
        `楽屋でも、ファンの声が潮のように長く続いて聞こえる。`,
      );
      await you.say_and_wait(`想像以上だったよ`);
      await era.printAndWait(`아이돌로서 누릴 수 있는 최고의 영예였다.`);
      await falcon.say_and_wait(
        `${callname}がいなかったら、ファル子、これを見られなかったよ。`,
      );
      await falcon.say_and_wait(`全部ファル子の手柄っていうより`);
      await you.say_and_wait(`우리가 함께 노력한 결과지.`);
      await era.printAndWait(
        `体はわずかに震えているのに、${you.name}へ輝く笑顔を向けたファル子が、手を伸ばした。`,
      );
      await falcon.say_and_wait(
        `앞으로의 길도 ${callname}과 함께 걸어가고 싶어.`,
      );
      await era.printAndWait(
        `汗で湿った小さな手を握った${you.name} 역시 미소를 지으며 ${falcon.name}을 바라보았다.`,
      );
      await you.say_and_wait(
        `나도 팔코에게서 배운 게 정말 많아. 앞으로도 잘 부탁해.`,
      );
      await era.printAndWait(
        `見つめ合う二人は、胸の恐れを全部吐き出すように笑った。知っているからだ——`,
      );
      await era.printAndWait(
        `——이 세상에 이토록 마음이 잘 통하는 사람은 서로밖에 없다는 것을.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_dai_win_s
  toky_dai_win_s: (() => {
    const title = '東京大賞典後・ウィンナーズステージ前の決断';
    /**
     * （恋慕が責任より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * （責任が恋慕より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * 渇望は満たされ、心はもう孤独ではない。恐れは信仰の固さとともに消え、強さは覚悟へ変わった
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`드디어 이 순간이 왔어.`);
      await falcon.print_and_wait(
        `三年前の自分が憧れた、何千ものファンの目が集まるいちばん輝くステージ。想像した軌道とはもう交わらないのに。`,
      );
      await falcon.print_and_wait(`결국 실현된 거야.`);
      await falcon.print_and_wait(
        `難しい目標が叶った瞬間、普通なら言葉にならないほど興奮するか、息を止めて、終わったあと安堵で息を吐くまで待つ。`,
      );
      await falcon.print_and_wait(`なのに今の自分は、意外なほど静かだ。`);
      await falcon.print_and_wait(
        `この瞬間のために整えた顔、手、姿勢、発音は、いちばん自然な形。`,
      );
      await falcon.print_and_wait(
        `비록 내면에는 설명하기 힘든 감정이 남아있긴 하지만 말이야.`,
      );
      await falcon.print_and_wait(
        `例えるなら、まだテレビの前で有名アイドルに憧れ、わざとステップを真似していた、あの小さな${falcon.uma_sex_title}のよう。`,
      );
      await falcon.print_and_wait(
        `——さっきまで頭の中を歩いていた雑音が、気づいたら消えていた。`,
      );
      // 恋慕が責任より大きい
      await falcon.print_and_wait(
        `팔코는 내가 내린 결정에 후회는 전혀 없어. 다시 선택의 순간이 와도 팔코는 이 길을 택할 거야.`,
      );
      await falcon.print_and_wait(`만약 정말로 하고 싶은 말이 있다면,`);
      await falcon.print_and_wait(
        `${callname}といっしょの日々は、満足している。`,
      );
      await falcon.print_and_wait(`고마워, ${callname}.`);
      //責任が恋慕より大きい
      await falcon.print_and_wait(
        `責任から逃げて自分を麻痺させても、内側の自分が一歩ずつ問い詰めてくる。千倍に増幅した敏感さの中で、烈火と寒さの二重の痛みに落ちる`,
      );
      await falcon.print_and_wait(
        `その増幅の下では、羽根ほどの圧でも、人を壊せる。`,
      );
      await falcon.print_and_wait(
        `자신에게 주어진 책임을 직시하는 건 분명 압박이지만, 그 책임으로부터 도망치는 건 또 다른 고통에 빠지는 길일 뿐이야.`,
      );
      await falcon.print_and_wait(`그게 팔코가 깨달은 거야.`);
      await falcon.print_and_wait(`그러니까.`);
      await falcon.say_and_wait(
        `ファンのみんなのために、ファル子は悔いなく、最後の一曲を捧げる！`,
      );
      era.drawLine();
      await era.printAndWait(
        `아무도 찾지 않던 길거리 아이돌에서 더트의 톱 아이돌까지. 3년이라는 세월은 너무나도 빠르게 흘렀다.`,
      );
      await era.printAndWait(
        `마치 ${falcon.sex}를 처음 만났을 때, 창문에서 훌쩍 뛰어내리던 그 모습처럼.`,
      );
      await era.printAndWait(
        `あの瞬間の${falcon.sex}は、大地より空に近かった。`,
      );
      await era.printAndWait(
        `それが、${falcon.sex}と契約すると決めた理由なのかもしれない。`,
      );
      await era.printAndWait(
        `フラッシュが集まる焦点が、${falcon.name}という名のトップアイドルだ。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fail
  train_fail: (() => {
    const title = "건강 조심!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`......${callname}`);
      await you.say_and_wait(`ファル子……`);
      await era.printAndWait(
        `보건 교사 「당신은 ${falcon.sex}의 트레이너죠? 왜 ${falcon.sex}가 이렇게 지쳐 있는데도 무리하게 놔둔 거죠?」`,
      );
      await era.printAndWait(
        `할 말이 없었다. ${you.name}은(는) 그저 묵묵히 ${falcon.sex}의 꾸중을 들을 수밖에 없었다.`,
      );
      await falcon.say_and_wait(`아니야, 내가 하고 싶다고 한 거야.`);
      await era.printAndWait(
        `보건 교사 「트레이너 선생님, 부상이 후유증을 남길 수 있다는 걸 모르나요?」`,
      );
      await era.printAndWait(
        `트레이너 매뉴얼에도 평소 훈련 중 입은 부상 때문에 후유증이 생겨 은퇴해야 했던 사례들이 적혀 있었다.`,
      );
      await era.printAndWait(`それでも。`);
      await you.say_and_wait(`죄송합니다. 다음부터는 주의하겠습니다.`);
      await era.printAndWait(`보건 교사 「환자가 쉬어야 하니 방해하지 마세요.」`);
      await era.printAndWait(
        `보건 교사가 한숨을 내쉬며 문을 닫자, 보건실 안에는 침묵 속에 서로를 마주 보는 두 사람만 남았다.`,
      );
      era.printButton("「괜찮아, 팔코. 그냥 푹 쉬어.」", 1);
      era.printButton("「......」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`......응, 팔코는 금방 나을 거야.`);
        await falcon.say_and_wait(
          `팔코도 가끔 너무 서두를 때가 있어서, 전부 ${callname}의 잘못은 아니야.`,
        );
        era.printButton("고마워, 팔코.", 1);
        await era.input();
        await falcon.say_and_wait(
          `응. ${callname}。トレーナー室の雑誌、持ってきてくれる？`,
        );
        await you.say_and_wait(`알았어. 팔코는 푹 쉬고 있어.`);
        await falcon.say_and_wait(`응.`);
        await era.printAndWait(
          `조심스럽게 보건실 문을 닫았다. 팔코는 이미 잠든 것 같았다.`,
        );
      } else if (fail_again) {
        await falcon.say_and_wait(`${callname}.`);
        await era.printAndWait(`ファル子が${callname}より先に沈黙を破った。`);
        await falcon.say_and_wait(`내 손 좀 잡아줄래?`);
        await era.printAndWait(
          `팔코의 시선이 천장에서 창밖으로 천천히 옮겨졌다.`,
        );
        await falcon.say_and_wait(`친구들과 헤어졌던 것도, 바로 이런 석양이 질 때였어.`);
        await falcon.say_and_wait("아야!");
        await you.say_and_wait(`팔코!`);
        await falcon.say_and_wait(`${callname}, 조금만 더 가까이 와줄래?`);
        await falcon.say_and_wait(
          `이미 너무 많은 친구와 헤어졌어. 더 이상 ${callname}까지 잃고 싶지 않아.`,
        );
        await era.printAndWait(
          `咽び泣くファル子を強く抱きしめ、${you.name}は巨大な金色の塊が地平線に呑まれていくのを見た。`,
        );
        await era.printAndWait(`긴 밤이 오려 하고 있었다.`);
      } else {
        await falcon.say_and_wait(`${callname}.`);
        await era.printAndWait(`ファル子が${callname}の名を呼ぶ。`);
        await era.printAndWait(
          `なぜか、${callname}は${falcon.sex}の手を強く握った。`,
        );
        await falcon.say_and_wait(`${callname}의 크고 따뜻한 손이 느껴져.`);
        await falcon.say_and_wait(`기분이 좀 나아진 것 같아.`);
        await you.say_and_wait(`여기 있을게. 아무 데도 안 가.`);
        await falcon.say_and_wait(`${callname}은(는) 정말 상냥하네.`);
        await era.printAndWait(`팔코가 그 커다란 손을 자신의 뺨에 가져다 댔다.`);
        await falcon.say_and_wait(`このまま、少し休もう。`);
        await era.printAndWait(`얼마 지나지 않아 팔코는 그대로 잠이 들었다.`);
        await era.printAndWait(`そっと扉を閉めて、${callname}は保健室を出た。`);
        await era.printAndWait(`팔코는 금방 활력을 되찾았다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fumble
  train_fumble: (() => {
    const title = "무리 금물!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`${callname}.......`);
      await era.printAndWait(
        `팔코가 훈련 도중 발을 삐끗하고 말았다.`,
      );
      await falcon.say_and_wait(`미안해, 팔코가 너무 지쳐서 그만......`);
      await era.printAndWait(
        `연이은 게릴라 라이브가 팔코의 체력을 크게 소모시킨 모양이었다.`,
      );
      era.printButton("「당분간 거리 라이브는 중단해야겠어.」", 1);
      era.printButton("「거리 공연을 해볼까?」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(
          `으앙~ 팔코를 기다려주는 팬들은 어떡해?`,
        );
        era.printButton(
          "「이렇게 다친 다리로 억지로 공연하면 팬들도 걱정할 거야.」",
          1,
        );
        await era.input();
        await falcon.say_and_wait(".....그렇네, 당분간은 쉬어야겠어.");
        await falcon.say_and_wait(
          'それなら元気出すために、トレーナー室で有馬記念のウィンナーズステージ見よ！',
        );
        era.printButton("「다친 부위에 힘 들어가지 않게 조심해.」", 1);
        await era.input();
        await falcon.say_and_wait(`알았어! ${callname}, 팔코 안아줄래?`);
        era.printButton(`「영차!」`, 1);
        await era.input();
        await falcon.say_and_wait(`우와, 정말 안아줬네.`, true);
        await falcon.say_and_wait(`좋은 냄새도 나고 엄청 가까워……`, true);
        await era.printAndWait(
          `다리 부상으로 휴식이 필요했기에 컨디션을 회복하기까지는 시간이 좀 걸릴 것 같았다.`,
        );
      } else {
        await era.printAndWait(
          `음악 비트에 몸을 맡기면 팔코가 더 빨리 나을지도 모른다.`,
        );
        await era.printAndWait("잠시 고민한 끝에 시도해보기로 했다.");
        era.printButton(
          "「기분이 즐거우면 상처도 빨리 나을 거야, 그러니까 라이브 하러 가자!」",
          1,
        );
        await era.input();
        await falcon.say_and_wait(
          `에, 그런 방법도 있어? 팔코 힘낼게!`,
        );
        if (fail_again) {
          await era.printAndWait(
            `いつものように、緑の悪魔が${callname}に絡まれている隙に、ファル子の定例ライブが始まった。`,
          );
          await falcon.say_and_wait(
            `여러분! 여기 보세요! 팔코의 라이브가 지금 시작됩니다!`,
          );
          await era.printAndWait(
            `리듬에 맞춰 춤을 추는 팔코는 마치 전혀 다치지 않은 사람처럼 보였다.`,
          );
          await falcon.say_and_wait(
            `やった！ やっとファンが何人か来てくれた！`,
            true,
          );
          await era.printAndWait(
            `하지만 생각이 너무 많았던 탓인지 반응이 한 박자 늦었고, 그만 발을 헛디뎌 넘어지고 말았다.`,
          );
          await falcon.say_and_wait(`으으, 팔코는 괜찮아⭐`);
          await era.printAndWait(
            `${callname}がたづなさんからようやく逃れたころ、ファル子の傷は悪化していた。`,
          );
        } else {
          await era.printAndWait(`ライブの出来は、意外なほど良かった`);
          await falcon.say_and_wait('みんな！ こっち！ 見て見て！');
          await era.printAndWait(
            `평지를 무대 삼아 휴대용 마이크를 꺼내 들자, 팔코의 작은 스테이지가 완성되었다.`,
          );
          await falcon.say_and_wait(`♪`);
          await era.printAndWait(
            `誰もいないところから、まばらな人だかり、やがて人が集まっていく。`,
          );
          await era.printAndWait(`강변 풀밭이 관객들로 가득 찼다.`);
          era.printButton("「효과가 아주 좋은데?」", 1);
          await era.input();
          await era.printAndWait(
            `${callname}も時おり喝采する人の輪の中に立ち、静かにファル子のライブを見ていた。`,
          );
          await era.printAndWait(
            `ライブ作戦は大成功に見え、${falcon.name}의 상처도 훨씬 빠르게 회복되었다.`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ts_add
  ts_add: (() => {
    const title = "추가 자율 트레이닝";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`예정된 계획이 전부 종료된 후`);
      await falcon.say_and_wait(`${callname}！ キラキラしてるファル子、見た？`);
      await era.printAndWait(
        `ダートで汗を流し、土まみれの${falcon.name}の目だけが、きらきら輝いていた。`,
      );
      await you.say_and_wait(`예정된 계획은 다 순조롭게 끝났어. 팔코, 수고했어.`);
      await falcon.say_and_wait(
        `${callname}も、ファル子が輝いてるって思う？ やった⭐`,
      );
      await era.printAndWait(
        `${you.name}の手から洗ったタオルを受け取り、顔の泥を拭うと、データを整理している${you.name}へゆっくり近づいた。`,
      );
      await falcon.say_and_wait(`응, 저기, ${callname}.`);
      await era.printAndWait(
        `미풍이 길가에 자란 풀을 흔들고, ${falcon.name}의 표정은 석양빛에 가려졌다.`,
      );
      await falcon.say_and_wait(
        `조금만 더 연습해도 될까? 팔코는 아직 이루고 싶은 목표가 있어!`,
      );
      await falcon.say_and_wait(
        `それに、${falcon.uma_sex_title}アイドルなら、目標はちょっと～高めでもいいよね？`,
      );
      await falcon.say_and_wait(`그럼, ${callname}은 어떻게 생각해?`);
      era.printButton(`그렇다면..`, 1);
      await era.input();
      await era.printAndWait(
        `지금 팔코의 컨디션이 좋아서 추가 트레이닝을 할 수는 있지만, 훈련량을 갑자기 늘리면 다음 날 트레이닝에 지장이 생기지 않을까?`,
      );
      await falcon.say_and_wait(`${callname}?`);
      await era.printAndWait(`길가에 핀 작은 풀이라도 쑥쑥 자라기를 갈망하는 걸까?`);
      era.printButton(
        `「それじゃあ頑張れ、未来の${falcon.uma_sex_title}アイドル」`,
        1,
      );
      era.printButton('「……今日のトレーニングはここまでだ」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`응! 추가 트레이닝도 잘 부탁해, ${callname}!`);
        era.printButton(
          `ファル子がトップアイドルへ一歩ずつ進むのを見ていられるの、僕も嬉しいよ。`,
          1,
        );
        await era.input();
        await you.say_and_wait(`じゃあ次は`);
        await era.printAndWait(
          `門限ぎりぎりまでトレーニングし、${callname}は走れなくなったファル子を抱えて寮の前まで送った。`,
        );
      } else {
        await falcon.say_and_wait(`하지만......`);
        await you.say_and_wait(
          `${falcon.uma_sex_title}アイドルへの道は一足飛びじゃない。やりすぎは逆効果だ！`,
        );
        await falcon.say_and_wait("에?");
        await you.say_and_wait(
          `過度なトレーニングのあとは疲れでフォームが乱れ、脚を傷めて骨折することもある。`,
        );
        await you.say_and_wait(
          `だからファル子のトレーナーとして、そんな危険は犯せない。`,
        );
        await falcon.say_and_wait(
          `팔코는 정말 바보네, 그렇게 간단한 것도 생각 못 하고.`,
        );
        await era.printAndWait(
          `${callname}を直視できないファル子を見て、${callname}は溜息をつき、${falcon.sex}の頭を撫でた。`,
        );
        await you.say_and_wait(`일단 트레이닝실로 돌아가서 좀 쉬자.`);
        await falcon.say_and_wait(`응!`);
        await era.printAndWait(
          `그 후 ${you.name}은(는) 트레이닝실에서 팔코의 다리를 마사지해주며 최근 유행하는 트렌드에 대해 이야기를 나누었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_34
  we_34: (() => {
    const title = "눈부신 큰 무대를 향해 멈추지 않고 전진!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`……후우⭐ 모두 고마워!`);
      await era.printAndWait(
        `즉석 메들리 곡이 끝난 후, 여기저기서 터져 나온 박수 소리는 ${falcon.name}에 대한 인정으로 모였다.`,
      );
      await era.printAndWait(
        `데뷔전이 끝난 후, 경기장과 무대 위에서 반짝반짝 빛나는 팔코는 엄청난 주목을 받았다.`,
      );
      await era.printAndWait(
        `우마스타그램에서는 「${falcon.uma_sex_title} 아이돌?! ${falcon.name}⭐」이라는 주제로 많은 토론이 오갔다.`,
      );
      await era.printAndWait(
        `그와 함께 강변 공연 영상도 우마스타그램에서 수많은 팬을 확보했다.`,
      );
      await you.say_and_wait(`이대로 계속 나아가자!`, true);
      await era.printAndWait(
        `소문을 듣고 찾아온 관객들에게 겹겹이 둘러싸여 강변 풀밭에서 열심히 공연한 ${falcon.name}은 밤늦게까지 노래를 불렀다.`,
      );
      await you.say_and_wait(`수고했어!`);
      await era.printAndWait(
        `마지막 팬이 만족스럽게 떠난 후, ${you.name}은(는) ${falcon.name}에게 다가갔다.`,
      );
      await era.printAndWait(
        `이런 상황을 예상했기에, 미리 기숙사 사감에게 외박 허가를 신청해 두었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 준비한 수건을 ${falcon.sex}에게 건네자, 땀에 젖은 촉감과 섞인 기묘한 향기가 신경을 자극했다.`,
      );
      await falcon.say_and_wait(`정말 고마워⭐`);
      await era.printAndWait(
        `${you.name}は${falcon.name}と組んだステージを片付けながら、${falcon.name}의 표정을 살폈다.`,
      );
      await falcon.say_and_wait(`～～～♪`);
      await era.printAndWait(
        `기분이 좋아 보이는 ${falcon.name}은 아직 공연의 여운에 푹 빠져 있었다.`,
      );
      await you.say_and_wait(`정말 고생 많았어! 나머지는 내가 정리할게.`);
      await era.printAndWait(
        `마무리 작업을 전부 도맡으려던 ${you.name}은(는) 꼬리에 여러 번 얻어맞았다.`,
      );
      await falcon.say_and_wait(
        `이렇게 많은 팬이 팔코를 응원해주는 걸 보니까 온몸에 힘이 넘치는 것 같아. 다음 날 아침까지도 계속 노래할 수 있을 것 같아!`,
      );
      await falcon.say_and_wait(
        `짐을 정리하는 지금도 심장이 두근두근 뛰고 있어.`,
      );
      await falcon.say_and_wait(`……게다가.`);
      await era.printAndWait(
        `ステージから抜け出せない${falcon.name}が、袖をそっと引っ張り、${you.name}の返事を待っている。`,
      );
      await you.say_and_wait(
        `팔코의 공연은 정말 멋졌어. 계속 지켜봐 온 팬으로서 정말 감동했어!`,
      );
      await falcon.say_and_wait(`……정말이야?`);
      await era.printAndWait(
        `${falcon.name}은 ${you.name}의 손을 꽉 잡았다.`,
      );
      await falcon.say_and_wait(`よかった！`);
      await era.printAndWait(
        `갑자기 들려온 꼬르륵 소리만 아니었다면 모든 것이 완벽했을 것이다.`,
      );
      await falcon.say_and_wait(`……아하하, 팬분들이 안 계셔서 다행이네.`);
      await era.printAndWait(
        `약간 민망해진 ${falcon.name}은 쑥스러운 듯 고개를 숙였다.`,
      );
      await you.say_and_wait(
        `そういえば、最近すごい人気のラーメン屋があるんだ。行ってみない？`,
      );
      await era.printAndWait(`${you.name}은(는) 시간을 확인했다. 지금 빨리 걸어가면 늦지 않을 것이다.`);
      await falcon.say_and_wait(`——いいね⭐ じゃあ今から行こ！`);
      await era.printAndWait(
        `${falcon.name}은 ${you.name}의 손을 꽉 잡았고, ${you.name}은(는) 문득 불길한 예감이 들었다.`,
      );
      await falcon.say_and_wait(`——3、1！ スタート！`);
      era.drawLine({ content: "라면집 안" });
      await falcon.say_and_wait(
        `와—아아! 생각했던 것보다 훨씬 맛있어! 팔코, 이제 에너지가 꽉 찼어⭐`,
      );
      await era.printAndWait(
        `${you.name}は、${falcon.name}がウマスタに上げた、${you.name}の手を引き丁寧に並べたラーメン二杯との自撮りを見ていた。`,
      );
      await you.say_and_wait(`정말 대단하네.`);
      await era.printAndWait(
        `구도 배치부터 타이밍 포착까지, 무엇 하나 나무랄 데가 없는 수준이었다.`,
      );
      await you.say_and_wait(`팔코, 혹시 사진작가로서의 재능이 있는 거 아냐?`);
      await era.printAndWait(
        `스마트폰 화면 위에서 손가락을 빠르게 움직이며 이따금 미소 짓는 ${falcon.name}을 보며, 문득 지금 방해해서는 안 되겠다는 생각이 들었다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌이란 대체 무엇일까? 아마 아직은 결론이 나지 않았을 것이다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_15
  we_47_15: (() => {
    const title = "이미 깨달아버린 연심";
    /**
     * 既定では皐月賞終了後
     * ライブのあと学校へ戻るとリボンが一本足りない。急いで探すが門限が近い。選択
     * 落とした場所へ行っても見つからない。絶望していると、駆けつけてきた小さなウマ娘が拾っていた。トレーナーとの関係を聞かれる
     * スマートファルコンは、トレーナーへの気持ちがアイドル活動を大きく傷つけるかもしれないと気づく
     * 不安に落ちる
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`기숙사
`);
      await falcon.say_and_wait(`${callname}, 팔코를 기숙사까지 데려다줘서 고마워!`);
      await falcon.print_and_wait(
        `${you.name}이(가) 모퉁이 너머로 서서히 사라지는 것을 배웅하며, 미소를 띤 ${falcon.name}도 몸을 돌려 떠났다.`,
      );
      await falcon.print_and_wait(
        `레이스에 출주하면서도 계속 응원해준 팬들의 염원을 보답하기 위해, 이 두 가지 사이에서 균형을 잡고자 ${you.name}は${falcon.name}を説得して、出走する週はゲリラライブの時間を減らした。`,
      );
      await falcon.print_and_wait(
        `소중한 공연 시간을 아끼기 위해, ${falcon.name}은 평소보다 더욱 열심히 빛나고 있었다.`,
      );
      await falcon.say_and_wait(`……トレーナー${falcon.uma_sex_title}。`);
      await falcon.print_and_wait(
        `기상—수업—훈련—공연—기숙사 복귀. 물 흐르듯 평온한 일상.`,
      );
      await falcon.print_and_wait(
        `${callname}이 길모퉁이 너머로 사라지는 걸 배웅하는 건 이제 내 일상의 일부가 됐어.`,
      );
      await falcon.print_and_wait(
        `もっとたくさんの人を笑顔にするため、倒れるまでアイドル活動を続ける。だから毎日は充実している。`,
      );
      await falcon.print_and_wait(
        `ああ、でもライブが終わると、脚が動かなくなることが増えてきた。`,
      );
      await falcon.print_and_wait(
        `아이돌 수행이 아직 부족한 탓일까, 스스로에게 그렇게 물어보곤 해.`,
      );
      await falcon.print_and_wait(
        `もう一人の自分は首を振り、「ファンにファル子の弱いところは見せられない」と言って、後ろ向きな考えを捨てた。`,
      );
      await falcon.print_and_wait(
        `지난번에는 메이드복을 입어봤으니까, 이번에는 승부복을 입고 공연해볼까?`,
      );
      await falcon.print_and_wait(
        `팔코의 팬분들은 이런저런 이유로 경기장에 오지 못하는 분들도 많으니까.`,
      );
      await falcon.print_and_wait(
        `레이스가 평일에 시작되는 바람에 직접 보지 못한 걸까…… 그렇게 생각하면서도, 역시 잔디 쪽 레이스가 더 인기가 많겠지.`,
      );
      await falcon.print_and_wait(
        `사츠키상의 무대는 더 크고, 참가하는 ${falcon.uma_sex_title}들도 더 강해. 팔코가 나가는 더트 레이스보다 훨씬 큰 관객석에 앉아 레이스를 지켜보는 팬들도 더 많고.`,
      );
      await falcon.print_and_wait(`솔직히 말하면, 역시 조금 분해——`);
      await falcon.print_and_wait(
        `결정했어! 팔코가 가장 눈부신 모습으로 모두에게 행복을 줄 거야!`,
      );
      await falcon.print_and_wait(
        `안심감을 주는 포즈! 시선을 뺏는 스텝! 그리고 다이아몬드처럼 반짝이는 승부복!`,
      );
      await falcon.print_and_wait(
        `ああ——そういえば髪型も直したほうがいいかも。`,
      );
      era.printButton(`어라?`, 1);
      await era.input();
      await falcon.print_and_wait(
        `シニヨンで留めていた髪が、やっと解放されたみたいに、ポニーテールのゴムが切れた。`,
      );
      await falcon.say_and_wait(`결국 한계였구나.`);
      await falcon.print_and_wait(
        `마치 혼잣말을 하듯 ${falcon.name}は、無意識に前髪のリボンを撫でた。`,
      );
      await falcon.print_and_wait(
        `経費を抑えるために中古で買ったゴムは、こんな激しい動きには耐えられなかった。`,
      );
      await falcon.print_and_wait(`하나, 둘…… 셋?`);
      await falcon.print_and_wait(
        `불안감이 엄습해서 리본을 떼어내고 몇 번이고 헛수고처럼 숫자를 센다.`,
      );
      await falcon.say_and_wait(`빨리 왔던 길을 되짚어서 찾으러 가야 해!`, true);
      await falcon.print_and_wait(
        `그건 팔코에게 가장 소중한, 다정한 엄마가 직접 만들어주신 첫 번째 승부복이야.`,
      );
      await falcon.say_and_wait(`하지만 시간이...`, true);
      await falcon.print_and_wait(
        `시침과 분침 사이의 각도가 파르페 위에 올라간 딸기 하나도 못 넣을 정도로 좁아 보여.`,
      );
      await falcon.print_and_wait(
        `통금 시간을 어기면 나중에 타즈나 씨한테 혼나겠지.`,
      );
      await falcon.print_and_wait(
        `先にキセキさんに言っておけば、少し融通は利くかな？`,
      );
      await falcon.say_and_wait(`팔코! 힘내자!`);
      await falcon.print_and_wait(`気づいたときには、もう走っていた。`);
      await falcon.print_and_wait(`아아, 항상 이래.`);
      await falcon.print_and_wait(
        `光の輪をぱたぱたさせる天使ファル子は溜息をつき、横の悪魔ファル子は嬉しそうに応援していた。`,
      );
      await falcon.say_and_wait(
        `지금 이 곤경에 전력을 다해 맞서고, 뒷감당은 내일의 팔코에게 맡기겠어! 이게 바로 팔코의 아이돌의 길이야!`,
      );
      await falcon.print_and_wait(
        `나아갈 방향을 정한 후, ${falcon.name}은 구석구석 놓치지 않으며 전속력으로 전진했다.`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `트레센 정문부터 상점가 골목, 강변 풀밭까지 다 뒤졌는데 없네...`,
      );
      await falcon.print_and_wait(
        `마치 리본에 날개가 돋아서 파닥파닥 날아가 버린 것 같아.`,
      );
      await falcon.print_and_wait(
        `아아, 친애하는 리본 양, 그녀가 에덴에서 계속 행복하게 지냈으면 좋겠어.`,
      );
      await falcon.print_and_wait(
        `엉망인 생각을 떨쳐내고, 팔코는 다시 한 가지 사실을 깨달았다.`,
      );
      await falcon.say_and_wait(`통금 시간이 벌써 30분이나 지났잖아! 어떡하지!`);
      await falcon.print_and_wait(
        `아마 상황을 파악한 트레센 측에서 지금쯤 팔코를 다급하게 찾고 있겠지.`,
      );
      await falcon.print_and_wait(`분해. 이대로 빈손으로 돌아가는 건 정말 너무 분해.`);
      await falcon.say_and_wait(
        `아니야, 긍정적으로 생각하면 다음 날 아침까지 팔코가 리본을 찾을 충분한 시간이 생긴 거잖아!`,
        true,
      );
      await falcon.print_and_wait(
        `焦る心もようやく落ち着き、落としたかもしれない場所を思い出した。`,
      );
      await falcon.print_and_wait(`공연 시작 전까지 리본은 이마에 잘 붙어 있었어.`);
      await falcon.print_and_wait(
        `アンコールで左端と右端の客を両方見ようとして、前に見た人気アイドルのカッコいい回転を真似たら、視線がひっくり返った。`,
      );
      await falcon.print_and_wait(`아마 그때 나도 모르게 떨어졌을지도 몰라.`);
      await falcon.print_and_wait(
        `誰かが拾っていたら、ファル子が見つける見込みは薄い。`,
      );
      await falcon.print_and_wait(`으— 평소에 수학 시간에 졸지 말걸.`);
      await you.say_as_passer_by_and_wait(
        `???`,
        `저기 있는 거 팔코 언니 아냐?`,
      );
      await falcon.say_and_wait(`에엑?`);
      await falcon.print_and_wait(
        `${falcon.name}の心臓が一拍止まり、しっぽの毛まで硬くなった。`,
      );
      await falcon.print_and_wait(
        `深夜の小径から聞こえる幼い声と、川辺へゆっくり近づく黒い影。`,
      );
      await falcon.say_and_wait(
        `설마 이게 트레이너가 말했던, 말 안 듣는 ${falcon.uma_sex_title}를 잡아먹는 ${falcon.uma_sex_title} 킬러인가?`,
        true,
      );
      await falcon.say_and_wait(
        `팔—팔코, 팔코는 맛없어어어어!`,
      );
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `에?`,
      );
      await falcon.print_and_wait(`쿵!`);
      await falcon.print_and_wait(`影の横の植え込みが、どさりと倒れた。`);
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `역시 팔코 언니 맞네!`,
      );
      await falcon.print_and_wait(
        `전혀 겁먹지 않은 꼬마 ${falcon.uma_sex_title}가 흥분해서 다가왔다.`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `リボンをそっとポケットへしまい、目の前で、リボンを返すためにこっそり出てきた${falcon.teen_sex_title}を見た。`,
      );
      await falcon.print_and_wait(`물건을 찾았다는 안도감은 순식간에 자책감으로 뒤덮였어.`);
      await falcon.print_and_wait(
        `만약 리본 때문에 통금을 어기지 않았다면, 팔코는 계속 자책하고 있었겠지.`,
      );
      await falcon.print_and_wait(
        `褒められたい顔の${falcon.teen_sex_title}を見て、少なくともファル子は責任を持って送り届ける。`,
      );
      await falcon.print_and_wait(
        `${falcon.name}はしゃがみ、${falcon.teen_sex_title}と目線を揃えようとした。`,
      );
      await falcon.say_and_wait(
        `ありがとう。ファル子、みんなのために${falcon.uma_sex_title}アイドルになれるよう頑張るよ。`,
      );
      await falcon.print_and_wait(
        `トレーナー${falcon.uma_sex_title}の撫で方を真似て、できるだけ優しく笑った。`,
      );
      await falcon.say_and_wait(`미안해, 팔코는 아직 너무 미숙해.`, true);
      await falcon.print_and_wait(
        `心の中の${callname}에게 사과하자, 그 사람은 쓴웃음을 지으며 고개를 저었어.`,
      );
      await falcon.say_and_wait(`팔코 언니가 집에 데려다줄게.`);
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `え？ ほんと！ ファル子お姉さんが送ってくれるの！`,
      );
      await falcon.print_and_wait(
        `目の前の${falcon.teen_sex_title}は、誰かの役に立てたことが嬉しくて跳ねている。ファル子がしてきたことと同じだ。`,
      );
      await falcon.print_and_wait(
        `문득 ${callname}에게 얼마나 많은 폐를 끼쳤는지 깨닫는 순간, 등 뒤로 뜨거운 느낌이 스쳐 지나갔어.`,
      );
      await falcon.say_and_wait(`가장 빛나는 무대를 향해 함께 가자!`);
      await falcon.print_and_wait(
        `傷んだリボンを大切にしまい、${falcon.teen_sex_title}の小さな手をそっと握った。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `送ってくれてありがとう！`,
      );
      await falcon.print_and_wait(
        `아파트 입구에서 꼬마 ${falcon.uma_sex_title}가 ${falcon.name}에게 인사를 건넸다.`,
      );
      await falcon.say_and_wait(`아니야, 나야말로.`);
      await falcon.print_and_wait(`苦笑して、礼を返した。`);
      await falcon.print_and_wait(
        `꼬마 ${falcon.uma_sex_title}의 부모님은 출장이 잦으셔서, 매일 ${falcon.sex}は一人で登下校している。`,
      );
      await falcon.print_and_wait(
        `매일 데리러 가줄까 물어봤지만, 남에게 폐를 끼칠 수 없다며 거절했어.`,
      );
      await falcon.print_and_wait(
        `그 고집스러운 면이 어릴 때 팔코랑 조금 닮았네.`,
      );
      await falcon.say_and_wait(
        `道で約束したとおり、もうこんな危ないことはしないで！ ファル子との約束だよ？`,
      );
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `알겠어!`,
      );
      await falcon.print_and_wait(
        `門をくぐろうとした${falcon.uma_sex_title}가 무언가 생각난 듯 뒤를 돌아 ${falcon.name}을 바라보았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `근데 팔코 언니, 왜 얼굴이 그렇게 빨개요?`,
      );
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `${callname} 생각한 거예요?`,
      );
      await falcon.print_and_wait(`아, 아니야. 그런 관계 아니거든.`);
      await falcon.print_and_wait(
        `그렇게 반박하려 했지만, 왠지 말이 나오지 않았어.`,
      );
      await falcon.print_and_wait(
        `마치 계란을 통째로 삼킨 것처럼 목구멍에 말이 걸려버렸지.`,
      );
      await you.say_as_passer_by_and_wait(
        `꼬마 ${falcon.uma_sex_title}`,
        `내일도 팔코 언니 공연 보러 갈게요!`,
      );
      await falcon.print_and_wait(`현관문이 천천히 닫혔어.`);
      await falcon.print_and_wait(
        `어린 ${falcon.uma_sex_title}조차 알아본 거야?`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title}アイドルの理想を叶えるまでは、人前では少し距離を置いたほうがいいかな。`,
      );
      await falcon.print_and_wait(`하지만
`);
      await falcon.say_and_wait(
        `팔코, ${callname}에게 그렇게 큰 폐를 끼쳤던 걸까?`,
      );
      await falcon.print_and_wait(
        `다음 날, 꼬마 ${falcon.uma_sex_title}의 가족이 트레센에 ${falcon.name}이 아이를 데려다준 것에 대한 감사를 표했고, 그 일로 ${you.name}은(는) 타즈나 씨에게 호되게 야단을 맞았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_21
  we_47_21: (() => {
    const title = 'トレーナー室の花';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      era.printButton(`드디어 끝났다.`, 1);
      await era.input();
      await era.printAndWait(
        `마지막 서류를 정리하며 ${you.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      await you.say_and_wait(`트레이너 노릇도 정말 쉽지 않네.`, true);
      await era.printAndWait(
        `いつの間にかトレーナー室へ金色の夕日がそっと訪れていた。窓の外の熱いトレーニングの声が、${you.name}에게 트레이너 학원 시절을 떠올리게 했다.`,
      );
      await era.printAndWait(
        `더트 위를 질주하는 ${falcon.uma_sex_title} 아이돌——${falcon.name}. 아직 실감은 나지 않지만, 이미 더트의 떠오르는 별이 되어 있었다.`,
      );
      await era.printAndWait(
        `だが、${falcon.name}のファン層が日増しに大きくなり、予定表の進みもどんどん遅くなっていくのを見ると。`,
      );
      await era.printAndWait(`왠지 마음 한구석이 허전해졌다.`);
      await you.say_and_wait(
        `……나는 트레이너로서의 직무를 잘 수행하고 있는 걸까?`,
        true,
      );
      await era.printAndWait(
        `하루의 주의력은 한정되어 있기에, 자신이 인지할 수 있는 범위 내에서만 신경을 쓸 수밖에 없다.`,
      );
      await era.printAndWait(
        `모든 면에서 완벽할 수는 없으며, 사고를 방지하려고 과도하게 신경을 쓰다 보면 오히려 더 큰 불확실성을 초래할 수도 있다.`,
      );
      await era.printAndWait(
        `がらんとしたトレーナー室にいると、後ろ向きな考えが記憶の隅から溢れてくる。`,
      );
      await falcon.say_and_wait(`${callname}, 팔코 돌아왔어⭐`);
      await era.printAndWait(
        `${falcon.name}의 동그란 머리가 열린 문틈 사이로 쏙 튀어나왔다.`,
      );
      await you.say_and_wait(`수고했어. 오늘 훈련을 시작하기 전에 잠시 쉬자.`);
      await era.printAndWait(
        `기운을 차리기 위해 ${you.name}은(는) 자리에서 일어나 ${falcon.name}에게 홍차를 한 잔 타 주었다.`,
      );
      await era.printAndWait(
        `그리고 눈앞에 바르게 앉은 ${falcon.name}을 바라보았다.`,
      );
      await era.printAndWait(
        `평소의 ${falcon.name}과 달리, 손에는 누군가에게 받은 듯한 씨앗 꾸러미가 들려 있었다.`,
      );
      await era.printAndWait(
        `${falcon.name}은 ${you.name}의 시선을 느꼈는지 귀를 쫑긋거리며 손에 든 작은 봉지를 흔들어 보였다.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${falcon.name}의 노력 덕분에 ${falcon.uma_sex_title}アイドルという概念は、やっと広がった。`,
      );
      await era.printAndWait(
        `이제 더트 팬들에게 ${falcon.uma_sex_title} 아이돌이라고 하면 누구나 ${falcon.name}을 떠올린다.`,
      );
      await era.printAndWait(
        `そのおかげで、${falcon.name}にもかなりのファン団体がついた。`,
      );
      await falcon.say_and_wait(`うん、商店街のお姉さんがくれたの。`);
      await era.printAndWait(
        `많은 팬이 ${falcon.name}에게 자신들의 이상을 투영하고 있으니, 도움을 주는 것도 당연한 일일 것이다.`,
      );
      await era.printAndWait(
        `편지라면 트레이너인 ${you.name}이(가) 먼저 확인한 뒤 ${falcon.name}에게 보여주었고, 포장된 선물도 마찬가지였다.`,
      );
      await era.printAndWait(
        `${falcon.name}は意外とこの点では素直で、ファン側の自律もある。だからいま${falcon.sex}の小さな頭は、落ち込む言葉に沈んではいない。`,
      );
      era.printButton(`정성껏 키워보자.`, 1);
      await era.input();
      await era.printAndWait(
        `일단 씨앗을 창가 근처 그늘진 곳에 심고, 싹이 트면 햇볕이 잘 드는 곳으로 옮기기로 했다.`,
      );
      await era.printAndWait(
        `${falcon.name}이 화분을 내려놓고 ${you.name}の隣に座った。`,
      );
      await falcon.say_and_wait(`아, ${callname}.`);
      await you.say_and_wait(`응? 팔코, 왜 그래?`);
      await falcon.say_and_wait(`……아니, 아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.name}의 귀가 파닥파닥 움직였고, 꼬리도 소파를 탁탁 때리고 있었다.`,
      );
      await falcon.say_and_wait(`그러고 보니, 다음 훈련 방침은——`);
      await era.printAndWait(`시간은 잡담과 훈련 속에서 흘러갔다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_32
  we_47_32: (() => {
    const title = "여름 합숙 종료·더 큰 무대를 향해";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`하아! 하아! 하아!`);
      await you.say_and_wait(`팔코, 힘내!`);
      await falcon.say_and_wait(`하아아아아아앗!`);
      await era.printAndWait(
        `지칠 대로 지친 몸을 이끌고 결승점을 향해 돌진하던 팔코는 마침내 서서히 멈춰 섰다.`,
      );
      await you.say_and_wait(`수고했어.`);
      await era.printAndWait(
        `준비한 수건을 팔코에게 건네며 서류에 마지막 데이터를 기록했다.`,
      );
      await falcon.say_and_wait(
        `여름 합숙에서 배운 기술들을 잘 활용해서, 경기장에서 더 많은 팬에게 팔코의 빛나는 모습을 보여줄 거야⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}でも、トレーニングと町のライブを両立するのはもう限界だろう。だが${falcon.uma_sex_title}は少し休んだだけで、ライブの準備に取りかかった。`,
      );
      era.printButton(`너무 무리하는 거 아냐?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `다른 ${falcon.uma_sex_title}들과 비교하면, 팔코의 강점은 아마 이 활기찬 모습일지도 몰라.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌인 ${falcon.name}은 마을의 고별 콘서트에 초대를 받았다.`,
      );
      await era.printAndWait(
        `이 마을에서 새로 사귄 팬들과 친구들을 위해서라도, 지친 몸을 이끌고 전력을 다해야 했다.`,
      );
      await you.say_and_wait(
        `今夜のライブは、ファンにとって一生に一度のステージだ！`,
      );
      await era.printAndWait(`적어도 트레이너로서의 소임은 다하자고 다짐했다.`);
      await falcon.say_and_wait(
        `${callname}에게도 그런 의미인 거야...? 팔코, 이제 다시 힘이 불끈 솟아올랐어!`,
      );
      era.drawLine({ content: "공연이 끝난 후" });
      await falcon.say_and_wait(`～～～～♪ 모두 고마워!`);
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await era.printAndWait(
        `근처 마을에서 열린 콘서트는 예상외로 엄청난 인기였다. 팔코의 공연 소식을 듣고 3시간이나 차를 몰고 달려온 팬이 있을 정도였다.`,
      );
      await era.printAndWait(
        `많은 사람에게 공연 그 자체보다 더트 아이돌인 ${falcon.name}을 직접 보는 것이 진짜 목적이었을 것이다.`,
      );
      await falcon.say_and_wait(
        `응응! 모두의 외침이 팔코의 귀에 다 전달됐어! 팔코 정말 기뻐!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `한 곡 더! 팔코! 한 곡 더!`,
      );
      await falcon.say_and_wait(`그럼 한 곡 더……`);
      await era.printAndWait(`${falcon.name}은 ${you.name}의 시선을 눈치챘다.`);
      await falcon.say_and_wait(
        `아하하…… 벌써 시간이 많이 늦었네. 멀리서 팔코의 공연을 보러 와주신 팬분들도 계시고…… ${falcon.uma_sex_title} 아이돌로서 팔코는 팬 한 분 한 분을 다 생각해야 하니까, 정말 미안해!`,
      );
      await falcon.say_and_wait(
        `でも、いいお知らせ！ 今回のライブはファル子のトレーナーにお願いして、ウマスタと動画サイトに上げてあるよ！`,
      );
      await falcon.say_and_wait(`팔코의 빛나는 모습을 언제든 다시 볼 수 있다구❤`);
      await falcon.say_and_wait(`자! 그럼 우리의 구호를 외쳐볼까!`);
      await falcon.say_and_wait(`팔코가 도망친다면?`);
      await you.say_as_passer_by_and_wait(`팬들`, `쫓아갈 수밖에 없지!`);
      await falcon.say_and_wait(`계속 쫓아올 거야?`);
      await you.say_as_passer_by_and_wait(`팬들`, `지평선 너머 큰 무대까지!`);
      await falcon.say_and_wait(`모두 고마워⭐`);
      await era.printAndWait(
        `현장의 팬들이 서서히 흩어지고, 무대 위에는 ${you.name}과(와) ${falcon.name}만 남았다.`,
      );
      era.printButton(`정말 멋졌어.`, 1);
      await era.input();
      await era.printAndWait(`${falcon.name}은 만족스러운 표정을 지었다.`);
      await era.printAndWait(
        `무대 위에서 껑충거리던 다리는 ${you.name}이(가) ${falcon.sex}をそっと抱いた瞬間、壊れた人形みたいに地面へ崩れた。`,
      );
      await falcon.say_and_wait(`……매일 오늘 같았으면 좋겠다.`);
      await era.printAndWait(`それでも${falcon.sex}の目は、まだ輝いていた。`);
      await falcon.say_and_wait(
        `이런 기세라면 팔코도 그 장벽을 뛰어넘을 수 있을 것 같아!`,
      );
      await era.printAndWait(
        `${falcon.name}의 존재 덕분에, 원래 잔디 레이스에만 관심 있던 관객들도 서서히 더트 레이스를 주목하기 시작했다.`,
      );
      await you.say_and_wait(`꼭 성공할 거야!`);
      await era.printAndWait(
        `${you.name}의 말을 듣고 ${falcon.name}은 관객석을 바라보았다.`,
      );
      await falcon.say_and_wait(`이렇게 한 걸음씩 최고의 무대를 향해 나아가는 거야.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_39
  we_47_39: (() => {
    const title = "원추리";
    /**
     * 萱草＝忘れ草。悩みを忘れる意
     * 過剰摂取は中毒の恐れ
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`상점가에서 열린 게릴라 콘서트
`);
      await falcon.say_and_wait(`～～～♪ 모두 수고했어!`);
      await era.printAndWait(
        `더트 레이스를 주 무대로 선두에서 계속 빛나고 있는 ${falcon.uma_sex_title} 아이돌——${falcon.name}은 이제 뜨거운 화제였다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 활약상을 직접 보기 위해 일부러 표를 사서 찾아오는 사람들도 많았다.`,
      );
      await era.printAndWait(
        `大げさに言えば、ダート＝${falcon.name}は、もう実現しかかっている。`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(
        `……유명세만큼이나 큰 시련이 따르는 법. 비록 ${falcon.name}が望んで広告を駆け回っているとはいえ、忙しいときはトレーニングまで止まるのは、${you.name}은(는) 웃음이 나오지 않았다.`,
      );
      await you.say_and_wait(
        `……지금 계약 기간이 끝나면 팔코와 진지하게 이야기를 좀 해봐야겠어.`,
      );
      await era.printAndWait(
        `${falcon.name}의 의사를 존중한다고는 하지만, 이게 정말 자유로운 상태라고 할 수 있을까?`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンA`,
        `毎日の仕事は疲れるけど！ ファル子のステージを見ると、疲れが消えるんだ！`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンB`,
        `ファル子が宣伝したグッズは全部集めてる！ 行動で応援するなら、ファル子への愛は俺がいちばん深い！`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンC`,
        `冗談言うな！ 俺はファル子がデビューする前から応援してる古参だ！ いまは懐が寒いけど……ファル子への愛はお前らより強い！`,
      );
      await era.printAndWait(
        `ファンに「アイドルプロデューサー」と呼ばれるあなた。本職はほとんど忘れられている。熱を増すファン層を見て、胸の心配は深くなる。`,
      );
      await you.say_and_wait(
        `……いまの人は、心の拠り所を探すのが、ますます強くなっているのかもしれない。`,
      );
      await era.printAndWait(`일단은 이런 이유로 스스로를 다독였다.`);
      await era.printAndWait(
        `少し離れたステージでファンと触れ合う${falcon.teen_sex_title}를 보니, 정신적으로도 이미 한계에 다다른 게 아닐까 싶었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_10
  we_95_10: (() => {
    const title = "현기증";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`トレーナー室\n`);
      await falcon.print_and_wait(`의욕이 생기지 않았다.`);
      await falcon.print_and_wait(
        `어쩌면 ${falcon.name}의 단호한 태도 때문에, 어떤 방면에서 접근해야 할지 알 수 없었기 때문일지도 모른다.`,
      );
      await falcon.print_and_wait(
        `${falcon.name}に嫌われたのか。ライブを見に行きたいと言っても、${falcon.name}は理由をつけて断る。`,
      );
      await falcon.print_and_wait(`하지만——`);
      await falcon.print_and_wait(`断られるほど、パニックは増す。`);
      await you.say_and_wait(`빌어먹을!`);
      await falcon.print_and_wait(`机を強く叩いて、胸の熱を吐く。`);
      await falcon.print_and_wait(
        `${falcon.sex}에게 말해주고 싶었다. 아이돌로서 자신의 행복을 추구하는 것은 아무런 문제가 없다고.`,
      );
      era.drawLine();
      await falcon.print_and_wait(`모두 고마워!`);
      await falcon.print_and_wait(
        `정기적인 2시간 콘서트가 끝난 후, 또 단숨에 세 곡을 연달아 불렀어.`,
      );
      await falcon.print_and_wait(`조금만 쉬면, 다시 단숨에 3시간은 더 노래할 수 있어.`);
      await falcon.print_and_wait(`하지만, 도저히 의욕이 나질 않아.`);
      await falcon.print_and_wait(`만약 팬분들에게 이렇게 의욕 없는 모습을 보인다면.`);
      await falcon.print_and_wait(`아마 팔코 스스로도 자신을 용서할 수 없겠지.`);
      await falcon.print_and_wait(`${callname}에게 고민을 털어놓는다면——`);
      await falcon.print_and_wait(`지친 몸에서 나약한 말이 흘러나왔다.`);
      await falcon.say_and_wait(
        `팔코는 이제 소중한 ${callname}을 위험하게 만들 순 없어.`,
        true,
      );
      await falcon.print_and_wait(`傷を押さえて、血の中に立つ${callname}。`);
      await falcon.print_and_wait(`안 돼, 더 이상 생각하면 안 돼.`);
      await falcon.print_and_wait(
        `${falcon.name}은 ${falcon.uma_sex_title} 아이돌로서 이미 실격이야.`,
      );
      await falcon.print_and_wait(`하지만——`);
      await falcon.print_and_wait(
        `마음속의 의문을 억지로 짓눌렀다. 완벽한 ${falcon.uma_sex_title} 아이돌에게는 어떤 흠집도 있어서는 안 된다.`,
      );
      await falcon.say_and_wait(`팔코, 힘내자!`);
      await falcon.print_and_wait(
        `다시 스스로를 다독이며, ${falcon.uma_sex_title} 아이돌로서의 ${falcon.name}は楽屋からステージへ戻った。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_17
  we_95_17: (() => {
    const title = "만약 눈물이 다시 눈동자로 돌아간다면";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `마음을 굳게 먹은 후, ${you.name}은(는) 억지로 ${falcon.name}の手を引いた。`,
      );
      await you.say_and_wait(
        `ごめん。失礼なのは分かってる。でも、変えられるとしたら、これしかない。`,
      );
      await era.printAndWait(
        `問答無用で${falcon.sex}の手首を引き、目的地へ向かう。`,
      );
      await era.printAndWait(
        `最初は驚いて力が入ったが、すぐにその力は弱まった。`,
      );
      await era.printAndWait(
        `${you.name}の胸は、もうすぐ叶うはずの憧憬でいっぱいだった。`,
      );
      await era.printAndWait(
        `${falcon.sex}에게 말해주고 싶었다. 아이돌로서 자신의 행복을 추구하는 것은 아무런 문제가 없다고.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${falcon.name}は、その広い芝生へ出た。`,
      );
      await era.printAndWait(
        `耐えがたい気まずい空気が、ふたりのあいだに広がる。`,
      );
      await era.printAndWait(
        `혼자서 그렇게 무거운 압박을 짊어질 필요 없어. 이전의 일은 그저 사고였을 뿐이야. 그저 주의를 기울이기만 하면...`,
      );
      await era.printAndWait(
        `만약 ${you.name}이(가) ${falcon.name}이라면, 이런 말로 스스로를 설득할 수 있을까?`,
      );
      await you.say_and_wait(`……나를 조금만 더 믿어줘.`);
      await era.printAndWait(`팔코는 이미 한계에 다다라 있었다.`);
      await falcon.say_and_wait(`……에?`);
      await era.printAndWait(`${falcon.name}の声には、戸惑いが混じっていた。`);
      await falcon.say_and_wait(`팔코는 언제나 ${callname}을 믿고 있다구?`);
      await era.printAndWait(`아니야, ${you.name}은(는) 고개를 저었다.`);
      await you.say_and_wait(
        `단순히 트레이너와 ${falcon.uma_sex_title} 사이뿐만 아니라, 팬과 아이돌 사이의 관계도 넘어선, 나는 ${falcon.name}に扱われたいんだ。`,
      );
      await falcon.say_and_wait(
        `……설령 팔코 때문에 ${callname}이 상처를 입는다고 해도?`,
      );
      era.printButton(`${falcon.name}에 대한 나의 사랑은 이 정도로는 흔들리지 않아.`, 1);
      era.printButton(`ファル子への愛は、このくらいでは揺れない。`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`……에?`);
        await era.printAndWait(
          `마치 믿을 수 없는 말을 들은 것처럼, ${falcon.name}의 눈동자가 순식간에 커졌다.`,
        );
        await falcon.say_and_wait(
          `……ひどい……大好き……${callname}、そんなこと言っちゃだめ……`,
        );
        await falcon.say_and_wait(`このままじゃ、ファル子……どう……ごめん。`);
        await era.printAndWait(
          `착각인 것처럼, 턱에서 전해지는 격통과 함께 ${you.name}은(는) 어둠 속으로 빠져들었다.`,
        );
        await era.printAndWait(`그렇게 깊은 잠에 빠졌다.`);
      } else {
        await falcon.say_and_wait(`……팔코인가?`);
        await era.printAndWait(`${falcon.name}의 표정이 굳어졌다.`);
        await falcon.say_and_wait(
          `ファル子……やっぱりファル子だよね……${callname}.`,
        );
        await era.printAndWait(`마치 굉장히 그리워하는 듯이 눈을 가늘게 떴다.`);
        await falcon.say_and_wait(
          `있지…… 팔코를 봐줘. ${callname}을 위해서라면 팔코는 뭐든지……`,
        );
        await era.printAndWait(`くすぶっていた目が、一瞬で死んだようになる。`);
        await falcon.say_and_wait(
          `ちがう！ こんなファル子は、${callname}이 좋아하는, 모든 팬을 포용하는 ${falcon.uma_sex_title} 아이돌이 아니야!`,
        );
        await era.printAndWait(`죄책감이 바늘처럼 가슴을 찔렀다.`);
        await falcon.say_and_wait(
          `ステージの上のファル子はみんなのもの。こんな……こんなこと、許されないよ。`,
        );
        await falcon.say_and_wait(
          `팔코가 ${falcon.uma_sex_title} 아이돌로서의 원칙을 버렸기 때문에, 결과적으로 ${callname}はぼろぼろのぬいぐるみみたいに、血の海に捨てられた`,
        );
        await falcon.say_and_wait(
          `하지만, 분명 모든 팬에게 사랑을 평등하게 나누겠다고 맹세했는데, 하지만…… ${callname}을 볼 때면 팔코는 역시 더 많은 사랑을 쏟고 싶어져.`,
        );
        await falcon.say_and_wait(
          `ファル子は${callname}に全部を注げない。注いだ瞬間、ファル子はファル子じゃなくなる。`,
        );
        await era.printAndWait(
          `ただの失敗より、全力でぶつかった末の二択のほうが、悲しい。`,
        );
        await falcon.say_and_wait(`……만약 그렇다면.`);
        await era.printAndWait(
          `착각인 것처럼, 턱에서 전해지는 격통과 함께 ${you.name}은(는) 어둠 속으로 빠져들었다.`,
        );
        await era.printAndWait(`그렇게 깊은 잠에 빠졌다.`);
      }
      era.drawLine();
      await era.printAndWait(`${you.name}은(는) 또다시 이 풀밭 위에 서 있었다.`);
      await era.printAndWait(
        `폐허 틈새의 풀밭, 먼 하늘에서 흘러오는 적란운, 그 그리운 아름다운 시간.`,
      );
      await era.printAndWait(`그리고 옆에 있는 ${falcon.teen_sex_title}.`);
      await era.printAndWait(
        `그래, 이런 곳이야말로 제대로 대화하기에 어울린다.`,
      );
      await you.say_and_wait(`팔코——`);
      await era.printAndWait(`팔코는 아무런 대답이 없었다.`);
      await you.say_and_wait(`팔코?`);
      await era.printAndWait(
        `${you.name}은(는) 조심스럽게 곁에 있는 ${falcon.teen_sex_title}를 건드려 보았다.`,
      );
      await era.printAndWait(`체온은 정상이었고, 손가락으로 느껴지는 피부의 감촉도 차이가 없었다.`);
      await you.say_and_wait(
        `자세히 보니, 마치 한 줄기 가는 은색 실이 ${falcon.sex}을(는)을 조종하고 있는 것 같았다.`,
      );
      await era.printAndWait(`마치 인형처럼.`);
      await you.say_and_wait(`만약 은색 실을 따라가면, 조종하는 사람을 찾을 수 있을지도 몰라.`);
      await era.printAndWait(`엄지와 검지로 이 가는 실을 쥐고, 실이 시작된 곳을 따라가자——`);
      await era.printAndWait(`강렬한 빛이 쏟아져 ${you.name}の目を塞いだ。`);
      await era.printAndWait(`眼前の草地が、ステージに変わる。`);
      await era.printAndWait(
        `자신은 무대 중앙에 서 있었다. 아니, 정확히는 ${falcon.name}이 무대 중앙에 서 있었다.`,
      );
      await era.printAndWait(
        `빽빽하게 들어찬 관객들이 ${you.name}에게 익숙한 노래의 박자에 맞춰 몸을 흔들고 있었다.`,
      );
      await you.say_and_wait(`콘서트인가? 하지만 왜 이렇게 위화감이 심하지.`);
      await era.printAndWait(`さっきから、空気にかすかな生臭い匂いがある。`);
      await era.printAndWait(
        `이것이 무엇을 의미하는지 깨닫는 순간 소름이 돋았다.`,
      );
      await you.say_and_wait(`팔코?`);
      await era.printAndWait(
        `팔코라고 불리는 인형이 ${you.name}을(를) 향해 고개를 돌렸다. 그리고——`,
      );
      await era.printAndWait(`左目右目左耳右耳左鼻右鼻、口の中の暗い赤い液体`);
      await era.printAndWait(
        `시각 촉각 후각 미각 청각 이성 감성이 뒤섞인 끈적한 덩어리

`,
      );
      await you.say_and_wait(`하아, 하아, 하아.`);
      await era.printAndWait(
        `악몽에서 벌떡 깨어났다. 이마의 땀방울, 땀에 젖은 셔츠가 방금 전의 모든 것이 악몽이었음을 일깨워 주었다.`,
      );
      await you.say_and_wait(`방금 그건?`);
      await era.printAndWait(`液体を強く咳き出すと、口に苦い生臭さが残る。`);
      await era.printAndWait(
        `이전에 무슨 일이 있었는지 기억해내려 했지만, 조금만 생각해도 머리가 깨질 듯이 아팠다.`,
      );
      await era.printAndWait(`우선 포기하고 주변 환경을 살피기로 했다.`);
      await era.printAndWait(
        `自分を載せているソファ。右側の執務机。その奥の壁に、額縁入りの写真。`,
      );
      await you.say_and_wait(`トレーナー室に戻った？`);
      await era.printAndWait(
        `기억이 끊기기 직전에 무엇을 하고 있었는지, 쓰러진 후 누가 자신을 데려다 놓았는지 알 수 없었다.`,
      );
      await era.printAndWait(
        `無意識にズボンのポケットへ手を入れ、携帯を確かめる。`,
      );
      await era.printAndWait(`하지만 더 부드러운 무언가가 만져졌다.`);
      await you.say_and_wait(`이건?`);
      await era.printAndWait(`髪を留めるための、丁寧に手入れされたリボン。`);
      await era.printAndWait(`ファル子が逃げたら？`);
      await you.say_and_wait(`……과연 그렇군.`);
      await era.printAndWait(`답은 이미 나와 있었다.`);
      await era.printAndWait(`조심스럽게 보관된 리본을 손목에 묶었다.`);
      await era.printAndWait(`${you.name}은(는) 결심했다.
`);
      era.printButton(`${falcon.name}을 쫓아간다`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `시간이 얼마나 흘렀을까. 상점가, 백화점, 강가 풀밭.`,
      );
      await era.printAndWait(
        `親しいファンや友人に聞いても、答えはどれも否定だった。`,
      );
      await you.say_and_wait(`하아…… 하아…… 하아……`);
      await era.printAndWait(
        `이대로 포기하고 팔코 곁에서 도망친다면 역시 분해서 견딜 수 없다.`,
      );
      await era.printAndWait(`君子危うきに近寄らず、という。`);
      await era.printAndWait(
        `설령 도쿄 같은 대도시라 해도, 심야에 배회하는 것은 지극히 위험한 행위다.`,
      );
      await era.printAndWait(
        `이런 일이 벌어진 것에는 자신에게도 책임이 있을 것이다.`,
      );
      await era.printAndWait(
        `하지만 그것은 자신을 탓할 이유가 되지 않는다. 자신은 스스로 생각한 것만큼 현명하지 않고, 상상했던 것만큼 용기 있지도 않기 때문이다.`,
      );
      await era.printAndWait(
        `자신에게는 이 정도의 지혜밖에 없고, 이 정도의 용기밖에 없다는 사실이 이 이상적이지 않은 현실로 증명되었다.`,
      );
      await era.printAndWait(
        `그걸 이해한다면, 후회란 자신이 분명 지혜롭고 용기 있었음에도 실패했다는 사실에 대한 후회일 것이다.`,
      );
      await era.printAndWait(`인지 부조화의 위험에 빠질 가능성이 컸다.
`);
      await era.printAndWait(`어느새 익숙한 풀밭으로 돌아와 있었다.`);
      await era.printAndWait(
        `봄과 여름이 교차하는 시기, 심야의 풀밭은 생각보다 더 추웠다.`,
      );
      await era.printAndWait(`${you.name}은(는) 자신도 모르게 몸을 떨었다.`);
      await era.printAndWait(
        `春から夏への端境。深夜の草地は、思ったより寒い。`,
      );
      await era.printAndWait(
        `습한 공기에 흙내음이 섞여 있고, 달빛 아래의 폐허가 이 풀밭을 둘러싸고 있었다.`,
      );
      await era.printAndWait(`幕が下りたみたいに。`);
      await era.printAndWait(
        `그리고 기다리던 ${falcon.teen_sex_title}——${falcon.name}이 이 풀밭 위에 있었다.
`,
      );
      await era.printAndWait(
        `${falcon.sex}에게 사과하고 제대로 대화하면 모든 오해는 풀릴 것이다.`,
      );
      await falcon.say_and_wait(`에? ${callname}、もう……`);
      await era.printAndWait(`무대의 주인공이 놀란 표정으로 ${you.name}을(를) 바라보았다.`);
      await era.printAndWait(
        `어제 오후부터 아무것도 먹지 않은 탓일까? 지금 금방이라도 쓰러질 듯한 ${falcon.sex}は、青白い人形のように脆かった。`,
      );
      await falcon.say_and_wait(
        `……아니, 괜찮아. 팔코는 그저 조금 고민이 있었을 뿐이야. 내일이 되면 팔코는 다시 원래대로——`,
      );
      await era.printAndWait(
        `両脚を揃えたまま地面に崩れ、苦しそうに咳き込む。`,
      );
      era.printButton(`팔코!`, 1);
      await era.input();
      await era.printAndWait(
        `준비했던 말들이 모두 머릿속에서 사라지고, ${you.name}은(는) ${falcon.teen_sex_title}에게 달려갔다.`,
      );
      await you.say_and_wait(`조금만 참아, 이 모든 건 금방 끝날 거야.`);
      await era.printAndWait(`${falcon.name}が${you.name}をつかんだ。`);
      await era.printAndWait(
        `두 손으로 느껴지는 한기보다, 그 맑은 눈동자가 ${you.name}을(를) 매료시켰다.`,
      );
      await falcon.say_and_wait(
        `팔코는…… ${callname}を責めるつもりは……ただ。`,
      );
      await falcon.say_and_wait(
        `팔코의 행복보다…… ${callname}がもっと幸せなら……`,
      );
      await falcon.say_and_wait(
        `미안해…… 팬 1호의 행복조차 지켜주지 못하다니, 아이돌로서 정말 실격이네……`,
      );
      await falcon.say_and_wait(`……미안해.`);
      await era.printAndWait(
        `마음속에 쌓인 고통을 온 힘을 다해 뱉어낸 후, ${falcon.name}은 그대로 바닥에 쓰러졌다.`,
      );
      await era.printAndWait(
        `어느 정도 짐작은 하고 있었지만, ${falcon.sex}가 직접 입 밖으로 내뱉기 전까지는 확신할 수 없었다. ${falcon.name}의 마음 밑바닥에서 진정으로 바라는 것이 무엇인지.`,
      );
      await era.printAndWait(`ごめん。こんなことになって。`);
      era.printButton(`${falcon.name}을 가볍게 업는다`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${falcon.teen_sex_title}를 가볍게 업고, ${falcon.sex}와 함께 나아가는 무게를 확인했다.`,
      );
      await era.printAndWait(`왔던 길은 생각보다 훨씬 더 길었다.`);
      await era.printAndWait(
        `——하지만 ${falcon.name}에게는 어쩌면 인생에서 가장 중요한 성인식일지도 모른다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_23
  we_95_23: (() => {
    const title = "한가한 날";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname, callname_4) => {
      await era.printAndWait(
        `봄과 여름이 뒤섞인 계절, 하늘에서 쏟아지는 빛줄기에도 열기가 더해졌다.`,
      );
      await era.printAndWait(
        `하지만 지금의 ${you.name}에게는 덥지도 춥지도 않은 딱 쾌적한 구간이었다.`,
      );
      await era.printAndWait(
        `……사건의 파도 속에서 필사적으로 발버둥 친 끝에, 상황이 일단락된 후에야 겨우 살아남았다.`,
      );
      await era.printAndWait(
        `상점가를 오가는 사람들을 보고 있노라니, 어쩐지 현실감이 느껴지지 않았다.`,
      );
      await era.printAndWait(
        `그들도 ${you.name}과(와) 마찬가지로 시련 속에서 발버둥 치다 겨우 살아남은 동지들이 아닐까?`,
      );
      await era.printAndWait(`지난 시련에서 살아남았지만, 만약 다음번에 실패한다면?`);
      await era.printAndWait(
        `一度失敗すれば、すべてがゼロに戻る。あの場所（エデン）へ持っていけるものは、何ひとつない。`,
      );
      await era.printAndWait(`사람들은 왜 두려워하지 않는 걸까?`);
      await era.printAndWait(
        `아니, 죽음 앞에서야 사람들은 삶의 행복이 실제로는 부여받은 하나의 특권임을 깨닫게 된다.`,
      );
      await era.printAndWait(
        `いつかは何も持たずに世界を去る。だからこそ、生き残った一日一日を、余計に大事にする。`,
      );
      await falcon.say_and_wait(`${callname}, 많이 기다렸지♪`);
      await era.printAndWait(
        `사복으로 갈아입은 ${falcon.name}が、小走りで${you.name}의 앞에 나타났다.`,
      );
      await era.printAndWait(
        `髪を自然に下ろしている。独特の声でなければ、往来の小さな${falcon.uma_sex_title}와 다를 바 없어 보였다.`,
      );
      await era.printAndWait(
        `${you.name}は預かっていたリボンを返そうとしたが、「${callname}のところに置いといたほうがいいよ。ママも賛成」と断られた。`,
      );
      await era.printAndWait(
        `……小さな${falcon.uma_sex_title}에게 관심을 가질 타입은 아니라고 생각했지만, 상대를 바라볼 때면 내면에서 형용할 수 없는 감정이 솟구쳤다.`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `相手は${you.name}の複雑な気持ちに気づかず、相変わらず眩しい笑顔で${you.name}を見ている。`,
      );
      await era.printAndWait(
        `休日のせいで、交差点に立つふたりは、ときどき変な視線を向けられる。`,
      );
      await you.say_and_wait(`일단 근처 백화점이라도 둘러보자!`);
      await era.printAndWait(
        `계속 망설이다가는 소중한 휴식 시간을 다 날려버릴 것 같아, ${you.name}은(는) 거대한 광고판이 걸린 건물을 가리켰다.`,
      );
      await falcon.say_and_wait(
        `えっ！ あそこに有名なスイーツ店が新しくできたんだよね！`,
      );
      await falcon.say_and_wait(`急ごう、今すぐ行こう！`);
      await era.printAndWait(
        `${falcon.name}은 ${you.name}の手を引いてスイーツ店へ向かう。`,
      );
      era.drawLine();
      await era.printAndWait(
        `점원에게 메뉴판을 받아 들고, 빼곡하게 박힌 디저트 사진들을 보며 ${you.name}은(는) 조금 망설였다.`,
      );
      await falcon.say_and_wait(`${callname}은 뭘 좋아해?`);
      era.printButton(`과일 파르페가 괜찮아 보이네!`, 1);
      era.printButton(`チョコの新作も気になる！`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(
          `팔코도 그런 새콤달콤한 식감의 파르페를 정말 좋아해.`,
        );
        await falcon.say_and_wait(
          `口の中に広がる冷たさと甘さ、${callname}과 처음 만났을 때의 장면 같네♪`,
        );
      } else {
        await falcon.say_and_wait(`ファル子も、この味のチョコ食べてみたいな♪`);
        await falcon.say_and_wait(`……⭐`);
        await era.printAndWait(
          `……なぜか${falcon.sex}が、こっそり口を覆って笑っている。`,
        );
        await era.printAndWait(`思考が、知らない次元へ飛んだのか。`);
      }
      await maru.say_and_wait(
        `ハーイ！ こんにちは！ ここでファル子に会うなんて。`,
      );
      await falcon.say_and_wait(`안녕하세요⭐ 마루젠 선배!`);
      await era.printAndWait(
        `少し離れた席でひとりスイーツを味わっていたマルゼンスキーが声をかけてきた。`,
      );
      await maru.say_and_wait(
        `요즘 나도 더트 레이스가 유행이라는 소문을 들었거든.`,
      );
      await maru.say_and_wait(
        `그래서 유행을 따라가기 위해, 지금 더트 코스에서 대활약 중인 팔코의 레이스를 지켜봤어.`,
      );
      await maru.say_and_wait(
        `예전에 더트를 선택했던 후배들이 나에게 주행법을 물어본 적이 있어서 일부러 보러 갔었지.`,
      );
      await maru.say_and_wait(
        `でもファル子みたいに全力で輝くアイドルを見てると、後輩がいつ先輩を追い越すかって、複雑な気持ちになるわね。`,
      );
      await you.say_and_wait(
        `역시 팔코니까. ${falcon.sex}가 있다면 분명 더트 코스도 더 인기를 얻게 될 거야.`,
      );
      await falcon.say_and_wait(`……!`);
      await maru.say_and_wait(
        `그러고 보니 다음에는 제왕상에 출주할 계획이지? 나도 현장에 응원하러 갈게!`,
      );
      await falcon.say_and_wait(
        `그때는 꼭 마루젠 선배에게 후배의 멋진 모습을 보여드릴게요!`,
      );
      await era.printAndWait(
        `미소를 띤 마루젠스키가 시선을 ${you.name}에게 돌렸다.`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('love:4') > 90
      ) {
        await you.say_and_wait(`정말 우연이네, 마루젠스키.`);
        await era.printAndWait(
          `마루젠스키는 그저 미소를 지으며 잔 속의 커피를 저었다.`,
        );
        await you.say_and_wait(`……아.`);
        await maru.say_and_wait(
          `어머, 트레이너 군? 오늘 트레이닝 장소를 디저트 가게로 옮긴 건 지능 트레이닝이라도 할 셈이야?`,
        );
        await maru.say_and_wait(
          `우후후~ 누나도 과일 파르페를 먹으면서 지능을 팍팍 높이고 싶은걸.`,
        );
        await era.printAndWait(
          `이건 트레이너가 할 일이 아니지 않느냐는 완곡한 암시였다.`,
        );
        await era.printAndWait(
          `${falcon.name}과 관계가 아주 조금, 정말 조금은 가까워졌다고 생각하지만, 스스로는 여전히 좋은 발전 태세라고 믿고 있었다.`,
        );
        await falcon.say_and_wait(
          `기다렸지⭐ ${callname}…… 그리고 마루젠스키 선배.`,
        );
        await era.printAndWait(
          `두 사람 사이의 미묘한 기류를 눈치챈 듯, 긴 줄에서 달려오던 ${falcon.name}이 서서히 발걸음을 늦췄다.`,
        );
        await maru.say_and_wait(`팔코, 안녕♪`);
        await era.printAndWait(
          `${you.name}은(는) 서둘러 수라장에서 탈출하려 했으나, 마루젠스키의 기세에 눌려 제자리에 얼어붙고 말았다.`,
        );
        if (era.get('love:46') > 90) {
          await falcon.say_and_wait(
            `설령 마루젠 선배라고 해도 이 초콜릿은 선배에게 양보할 수 없어♪`,
          );
          await maru.say_and_wait(`요즘 후배는 생각보다 더 귀엽네♪`);
          await maru.say_and_wait(
            `주 종목 코스만 같았다면 정말 팔코랑 한판 붙어보고 싶은걸♪`,
          );
          await falcon.say_and_wait(`마루젠 선배라고 해도, 팔코는 지지 않을 거야♪`);
          await maru.say_and_wait(`조금 실례되는 말 아닐까?`);
          await falcon.say_and_wait(`아닌데? 팔코는 전혀 악의가 없다구?`);
          await falcon.say_and_wait(
            `그냥 마루젠 선배도 슬슬 결혼할 나이가 된 것 같은데, 왜 아직 여기 있는가 싶어서?`,
          );
          await maru.say_and_wait(
            `ファル子はアイドルでしょ？ ${callname}と並んで座ってて、スキャンダル平気？`,
          );
          await maru.say_and_wait(`${callname_4}、あなたはどう思う？`);
          await falcon.say_and_wait(
            `괜찮아? 만약 스캔들이 나면 그냥 ${callname}과 결혼한다고 발표해 버리면 되니까♪ 그치, ${callname}?`,
          );
          await era.printAndWait(
            `余裕のマルゼンスキーが、本気になった${falcon.name}を見る。見えない気圧に、まわりの人が離れ始める。`,
          );
          era.printButton(`아무것도 보고 싶지 않아`, 1);
          await era.input();
          await era.printAndWait(
            `戦場になった真ん中で、ぼんやりふたりを見る${you.name}は、砂に頭を埋めたダチョウそのものだった。`,
          );
        } else {
          await falcon.say_and_wait(
            `마루젠 선배가 온 김에, 여기서 게릴라 콘서트를 열어볼까⭐`,
          );
          await era.printAndWait(
            `이런 돌발적인 상황 속에서도 ${falcon.name}은 꿋꿋하게 그 장소에 발을 들였다.`,
          );
          await maru.say_and_wait(
            `最近は、なんでもステージにするのが流行りなの？`,
          );
          await falcon.say_and_wait(`팔코 스타일이야⭐`);
          await falcon.say_and_wait(
            `スズカちゃん、ブルボンちゃん、フウジンがいないのはちょっと残念……でも、逃げウマ姉妹の活動ってことにしよ！`,
          );
          await maru.say_and_wait(`레이스든 콘서트든, 언니도 풀 마력으로 달릴게!`);
          await era.printAndWait(
            `마루젠스키가 ${you.name}에게 윙크를 하더니, ${falcon.name}と仮設ステージの準備を始めた。`,
          );
          await era.printAndWait(`한바탕 폭풍이 그렇게 지나갔다.`);
        }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = "여름 합숙 종료";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}のシニア級夏合宿が終わった。`);
      await falcon.say_and_wait(`톱 아이돌의 길을 향해 한순간도 멈추지 않고 전진♪`);
      await era.printAndWait(
        `夏合宿終了の宴会で、飲みすぎたと言って抜けた${you.name}은(는) 똑같이 파티에서 나온 ${falcon.teen_sex_title}와 마주쳤다.`,
      );
      await you.say_and_wait(
        `유명 아이돌인 팔코가 이렇게 파티에서 자리를 비우는 건 드문 일이네.`,
      );
      await falcon.say_and_wait(
        `결국 1호 팬이 없으면, 아이돌 활동도 갑자기 빛이 바래버리니까.`,
      );
      await era.printAndWait(`과연 그렇군.`);
      await you.say_and_wait(`팔코는 이제 고독이 두렵지 않아?`);
      await falcon.say_and_wait(`……솔직히 말하면 여전히 무서워. 하지만 예전만큼은 아니야.`);
      await falcon.say_and_wait(`결국 ${callname}이 항상 내 곁에 있어 주니까.`);
      await you.say_and_wait(`……それが、ファル子の答えなんだ。`, true);
      await era.printAndWait(
        `${falcon.name}が少し前に傾き、右手の人差し指を唇の真ん中に立てて、右目を閉じる。`,
      );
      await falcon.say_and_wait(
        `それに、${falcon.name}は大好きな${callname}と、世界でいちばん大きなステージに立ちたい！`,
      );
      await falcon.say_and_wait(
        `そのときは……ファル子……ちがう、${falcon.name}は何も言ってないよ⭐`,
      );
      await era.printAndWait(
        `${falcon.sex}의 숨길 수 없는 미소로 보아, 행복한 일을 생각하고 있는 모양이었다.`,
      );
      await era.printAndWait(
        `そのために頑張る一日一日が、この夢を叶えるための時間だ。`,
      );
      await falcon.say_and_wait(
        `우리가 걸어온 길 주위로 어느새 끝없는 초원이 보이기 시작했어.`,
      );
      await you.say_and_wait(
        `톱 아이돌이 되기 위해 다음 레이스도 소홀히 할 수 없지!`,
      );
      await falcon.say_and_wait(`아니야!`);
      await era.printAndWait(`${falcon.name}은 ${you.name}을(를) 놀라게 하는 말을 꺼냈다.`);
      await you.say_and_wait(`무슨 소리야?`);
      await falcon.say_and_wait(
        `${callname}이 예전에 말했던 것처럼, 누구나 자신의 선택에 책임을 져야 해.`,
      );
      await falcon.say_and_wait(
        `팔코가 마음의 저울을 ${callname}に傾けたけど、${falcon.uma_sex_title}アイドルとしての責任は変わらない。`,
      );
      await falcon.say_and_wait(
        `どれだけ経っても、約束を聞いた人が忘れても、それは変わらない。`,
      );
      await falcon.say_and_wait(
        `그러니까 팔코가 과로로 쓰러지기 전까지는, 팔코는 ${falcon.uma_sex_title} 아이돌로서의 책임을 다할 거야. 은퇴할 때까지 말이야.`,
      );
      await falcon.say_and_wait(`이게 팔코가 내린 답이야.`);
      await era.printAndWait(
        `곁에 있는 ${falcon.teen_sex_title}는 홀가분한 표정을 지었다. ${falcon.sex}は覚悟した。`,
      );
      era.printButton(`いちばん近いところで、それを見届けさせて。`, 1);
      await era.input();
      await falcon.say_and_wait(`후후후.`);
      await era.printAndWait(
        `${falcon.name}은 갑자기 웃기 시작하더니, 눈물이 흐를 정도로 한참을 웃었다.`,
      );
      era.printButton(`팔코?`, 1);
      await era.input();
      await era.printAndWait(`그리고는 ${you.name}을(를) 꽉 껴안았다.`);
      await falcon.say_and_wait(`ありがとう、${callname}。`);
      await era.printAndWait(`${falcon.name}은 이제 더 이상 혼자가 아니었다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_37
  we_95_37: (() => {
    const title = "선배와 후배";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(
        `신중하게 고민한 끝에, ${you.name}はJBCクラシック、チャンピオンズカップ、東京大賞典の三戦をシニア級後半の計画に入れた。`,
      );
      await era.printAndWait(
        `後半の三戦を全部勝つ。プレッシャーは言うまでもない。`,
      );
      await era.printAndWait(
        `소위 톱 아이돌이란, 이런 힘든 상황 속에서도 대중에게 희망을 주어야 하는 존재였다.`,
      );
      await era.printAndWait(`똑똑똑.`);
      await you.say_and_wait(`누구를 초대한 기억은 없는데.`);
      await era.printAndWait(
        `${falcon.name}ならそのまま入ってくる。${minoru.name}なら先に携帯で連絡する。ほかの${falcon.uma_sex_title}なら、だいたい自分から連絡する。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `오랜만이에요, ${callname}!`,
      );
      await era.printAndWait(
        `밤색의 ${falcon.uma_sex_title}が扉を押し、興奮しすぎてドアノブを外してしまった。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `あ、ごめん！ 興奮しちゃって！`,
      );
      await era.printAndWait(`어딘가 낯익은 느낌이었다.`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `${callname}、わたしのこと、覚えてる？`,
      );
      await era.printAndWait(
        `머릿속에서 떠오르는 이름들을 하나씩 지워가는 작업을 반복했다.`,
      );
      await era.printAndWait(
        `만약 ${falcon.name}이 여기 있었다면 한눈에 알아봤을 것이다.`,
      );
      await era.printAndWait(
        `${falcon.sex}는 콘서트를 관람해 준 팬들의 얼굴을 하나하나 다 기억하고 있으니까.`,
      );
      await you.say_and_wait(
        `콘서트? ${falcon.uma_sex_title}, 강가 풀밭.`,
        true,
      );
      await you.say_and_wait(`そういえば、一人、会ったことがあった。`, true);
      await you.say_and_wait(
        `去年、アイドルになると決めた、あの${falcon.uma_sex_title}구나.`,
      );
      await era.printAndWait(
        `体格も身長もほとんど変わって見えないが、昔の気配は残っている。`,
      );
      await you.say_and_wait(`너도 본격화가 찾아왔구나.`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `역시 ${callname}! 처음엔 못 알아보시면 어쩌나 걱정했는데, 기우였네요!`,
      );
      await era.printAndWait(
        `見当は当たっていた。欲しい答えを得た${falcon.uma_sex_title}가 득의양양하게 귀를 쫑긋 세웠다.`,
      );
      await you.say_and_wait(
        `좌절, 의혹, 불이해, 땀과 눈물은 기본에 불과해. 때로는 신념이 목숨보다 중요할 때도 있지.`,
      );
      await you.say_and_wait(
        `アイドルの道は僕も詳しくないけど、力になれたら嬉しい。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `트, ${callname}, 대체 무슨 일을 겪으신 거예요?`,
      );
      await era.printAndWait(
        `${you.name}の平凡な経歴に怯えて、ソファの隅で震える${falcon.uma_sex_title}.`,
      );
      await era.printAndWait(
        `실례네. 그저 내가 겪은 일들을 가감 없이 말했을 뿐인데.`,
      );
      await falcon.say_and_wait(`${callname}!`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `팔코 선배님!`,
      );
      await era.printAndWait(`방금 전의 상황을 설명하고 난 후.`);
      await falcon.say_and_wait(`아이돌의 일상일 뿐이야.`);
      await era.printAndWait(
        `미소를 띤 ${falcon.name}의 목소리에는 아무런 변화가 없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_38
  we_95_38: (() => {
    const title = '心に刻む鏡';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.used_to_say_and_wait(`${falcon.uma_sex_title}アイドル？`);
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title} 아이돌이라는 개념은 조금 막연한 것 같아.`,
      );
      await you.used_to_say_and_wait(
        `적극적으로 레이스에 참여하고 빛나고 있다면, 경기장에서 달리는 모든 ${falcon.uma_sex_title}들이 마찬가지니까.`,
      );
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title} 아이돌만의 특별한 점은 어디에 있는 걸까?`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `첫 트레이닝 때, ${callname}이 팔코에게 이 질문을 던졌어.`,
      );
      await falcon.print_and_wait(`……그때 뭐라고 대답했더라?`);
      await falcon.print_and_wait(`その場しのぎで流しただけだよね。`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`지금조차 팔코는 정답을 내놓지 못하겠어.`);
      await falcon.print_and_wait(
        `사춘기 특유의 민감함과 섬세함이 어우러진 귀여움을 세일즈 포인트로 삼고 싶어.`,
      );
      await falcon.print_and_wait(
        `そうしてファンといっしょに育ち、最後は見る側と見られる側として、トップアイドルの殿堂入りの扉を叩く。`,
      );
      await falcon.print_and_wait(
        `강변에서 자원봉사로 쓰레기를 줍든, 힘든 게릴라 공연을 하든.`,
      );
      await falcon.print_and_wait(
        `생활 밀착형 아이돌이라는 개념을 관철하며, 팬들에게 자신의 성장을 전달해.`,
      );
      await falcon.print_and_wait(
        `고통과 실의는 몰래 숨기고, 만중이 기대하는 아이돌이라는 가면을 써.`,
      );
      await falcon.print_and_wait(`……과정도 생각만큼 힘들지는 않았어.`);
      await falcon.print_and_wait(
        `풀밭 위에서의 공연 또한 하나의 훈련이었으니까.`,
      );
      await falcon.print_and_wait(
        `TV에서, 안무 선생님에게, 인터뷰 잡지에서 배운 경험들을 떠올려.`,
      );
      await falcon.print_and_wait(
        `박자에서 박자로, 동작에서 동작으로, 한순간에서 한순간으로.`,
      );
      await falcon.print_and_wait(
        `퍼포먼스가 마치 타고난 재능처럼 느껴질 때까지 단련해.`,
      );
      await falcon.print_and_wait(`一曲、終わり。`);
      await falcon.print_and_wait(`눈을 뜨고 아무도 없는 풀밭을 맞이해.`);
      await falcon.print_and_wait(`눈을 뜨고 한 사람이 있는 풀밭을 맞이해.`);
      await falcon.print_and_wait(`눈을 뜨고 여러 사람이 있는 풀밭을 맞이해.`);
      await falcon.print_and_wait(`目を開けて、大きなステージを迎える。\n`);
      await falcon.print_and_wait(
        `한때 지식이었던 것이 본능으로 녹아들고, 본능은 다시 새로운 지식을 응고시켜.`,
      );
      await falcon.print_and_wait(
        `溶けて固まって、命の果てまで続くその川は、外から見るとダイヤモンドみたいだ。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`곧 JBC 클래식이 시작돼.`);
      await falcon.say_and_wait(`……${callname}.`);
      await falcon.say_and_wait(
        `팔코에게 조금만 더 시간이 있었다면, 팔코도 더 일찍 깨달았을 텐데.`,
      );
      await falcon.say_and_wait(
        `아니야! ${callname}은 지금의 팔코를 좋아하지 않을 거야!`,
      );
      await falcon.say_and_wait(
        `${callname}が期待してるファル子は、ずっと元気で、前へ進む完璧なアイドルだよ！`,
      );
      await falcon.say_and_wait(
        `그러니까 경기장이든 무대 위에서든, 팔코는 계속 빛날 거야. 모든 사람의 시선을 빼앗을 때까지!`,
      );
      era.drawLine();
      await falcon.print_and_wait(`비록 이미 죄책감이라는 높은 벽에 가로막혔을지라도.`);
      await falcon.print_and_wait(
        `팬 습격의 근원은 천칭의 불균형이자, 팬의 염원을 무시한 아이돌의 말로야.`,
      );
      await falcon.print_and_wait(`아이돌이 성장함에 따라 계속해서 압박을 가하는 악의이기도 하지.`);
      await falcon.print_and_wait(
        `이대로 계속되면, 언젠가 이 거대한 압박을 견디지 못하고 고온에 가열된 바위처럼 작은 계기만으로도 산산조각이 날 거야.`,
      );
      await falcon.print_and_wait(
        `間違いばかり選んできた私が、ひとつだけ正しいと分かっていること。`,
      );
      await falcon.print_and_wait(`——아아, 시간이 좀 더 있었으면 좋았을 텐데.`);
      await falcon.print_and_wait(`나에게 더 많은 시간이 주어졌다면, 이 엉망진창인 실타래를 잘 풀 수 있었을 거야.`);
      await falcon.print_and_wait(`하지만 그건 불가능한 일이지.`);
      await falcon.print_and_wait(
        `완수해야 할 의무를 계속 회피하는 한, 미래는 오지 않아.`,
      );
      await falcon.print_and_wait(
        `아이돌의 길을 선택한 이상, 어떤 상황에서도 팬들의 의지함과 기도를 보답해야 해.`,
      );
      await falcon.print_and_wait(`アイドルとして、最後まで務めを果たす。`);
      await falcon.print_and_wait(`그러니까 더 이상 도망치지 않겠어.`);
      await falcon.print_and_wait(`처음으로 더트 레이스를 봤을 때 기억나.`);
      era.printButton(
        `뒤쫓던 ${falcon.uma_sex_title}가 앞서가던 ${falcon.uma_sex_title}를 추월했다`,
        1,
      ); //恋慕が責任を越える
      era.printButton(`앞서가던 ${falcon.uma_sex_title}が、大事な一歩を踏んだ`, 2); //責任が恋慕を押さえる
      // teは2、geは1
      const ret = await era.input();
      if (ret === 1) {
        await falcon.print_and_wait(
          `——맞아, 뒤쫓던 ${falcon.uma_sex_title}가 앞서가던 ${falcon.uma_sex_title}를 추월했어.`,
        );
        await falcon.print_and_wait(
          `더트의 ${falcon.uma_sex_title}들이 마주해야 하는 환경은 훨씬 더 가혹해.`,
        );
        await falcon.print_and_wait(
          `모든 것을 비우고 온 힘을 다해 앞의 목표를 추월하기 위해 달려.`,
        );
        await falcon.print_and_wait(`그럼에도 여전히 부족해.`);
        await falcon.print_and_wait(
          `最初にいい位置を取れなければ、敗者は砂の試練を受ける。`,
        );
        await falcon.print_and_wait(
          `勝負服はダートに汚れ、きれいな顔は砂に覆われる。どの角度から見ても、輝く姿とは言えない。`,
        );
        await falcon.print_and_wait(
          `目に入った砂が深く刺し、速い呼吸が砂で乱れる。`,
        );
        await falcon.print_and_wait(
          `생각할 겨를도 없이, 자신의 존재조차 잊은 채 그저 상대를 추월해.`,
        );
        await falcon.print_and_wait(`그것이 경쟁의 의미야.`);
      } else {
        await falcon.print_and_wait(
          `앞서가던 ${falcon.uma_sex_title}が、大事な一歩を踏んだ。`,
        );
        await falcon.print_and_wait(
          `去年、スズカちゃんが芝のレースを教えてくれたとき、ほかの人には渡さない景色……これだったっけ。`,
        );
        await falcon.print_and_wait(`선두의 풍경이라…… 어쩐지 그립네.`);
        await falcon.print_and_wait(
          `전국 투어 때, 지방의 ${falcon.uma_sex_title}들과 겨뤘던 레이스들.`,
        );
        await falcon.print_and_wait(
          `잔디 레이스보다는 역시 더트 레이스의 인상이 더 깊게 남아 있어.`,
        );
        await falcon.print_and_wait(`……`);
        await falcon.print_and_wait(`사츠키상을 제외하면 말이야.`);
        await falcon.print_and_wait(
          `노래 리듬에 맞춰 변하는 조명, 리듬에 맞춰 흔들리는 야광봉이 만드는 바다. 멀리서 보면 마치 층이 나뉜 조수 같아.`,
        );
      }
      await falcon.print_and_wait(`……아아…… 머릿속에 또 ${callname}の顔が浮かぶ。`);
      await falcon.print_and_wait(`분명 도망치면 안 되는데.`);
      await falcon.print_and_wait(`涙が止まらなくても。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_40
  we_95_40: (() => {
    const title = "하늘, 대지 그리고 이곳에 사는 우리";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`공원
`);
      await era.printAndWait(`ファル子の提案で、公園の芝生へ来た。`);
      await era.printAndWait(
        `어느덧 가을도 절반이 지났고, 길 위의 행인들도 하나둘 겉옷을 챙겨 입기 시작했다.`,
      );
      await you.say_and_wait(`팔코, 춥지 않아?`);
      await era.printAndWait(
        `薄着のファル子を見て、つい${falcon.sex}に聞きたくなった。`,
      );
      await falcon.say_and_wait(`ファル子、寒くないよ？`);
      await era.printAndWait(
        `그러고 보니 당연한 일이었다. ${falcon.uma_sex_title}는 인간보다 체온이 조금 더 높으니까.`,
      );
      await you.say_and_wait(`팔코가 조금 부러운걸.`);
      await falcon.say_and_wait(`${callname}, 갑자기 무슨 소리를 하는 거야?`);
      await you.say_and_wait(
        `팔코처럼 밝고 귀여운 ${falcon.uma_sex_title} 아이돌의 트레이너라니, 난 정말 운이 좋아.`,
      );
      await falcon.say_and_wait(
        `에에~~? 정말! ${callname}が急にそんなこと、ファル子。`,
      );
      await you.say_and_wait(`아, 도착했다.`);
      await era.printAndWait(
        `호숫가 근처의 한 풀밭에는 나들이를 나온 여행객들과 노는 아이들이 곳곳에 보였다.`,
      );
      await you.say_and_wait(`湖のほう、思ったより人が多いな。`);
      await era.printAndWait(
        `持ってきたバッグから手作り弁当を取り出しながら、つい口に出す。`,
      );
      await falcon.say_and_wait(`湖に来る人、カップルが多いね。`);
      await era.printAndWait(
        `ファル子は敷いたブランケットに行儀よく座って、こちらを見ている。`,
      );
      await you.say_and_wait(
        `ウマスタで有名なカップルの聖地になったのかも。はい。`,
      );
      await falcon.say_and_wait(`역시 커플들은 쉬는 날이 아니면 놀 시간이 없으니까——`);
      await era.printAndWait(
        `ファル子は用意したニンジンはちみつ特製ドリンクを受け取る。`,
      );
      await falcon.say_and_wait(`……커플인가?`, true);
      await you.say_and_wait(`팔코는 어떻게 생각해?`);
      await falcon.say_and_wait(`에?`);
      await era.printAndWait(
        `${you.name}に見抜かれたファル子が力を入れすぎて、蓋がきれいな弧を描いて、少し先の幹にしっかり嵌まった。`,
      );
      await falcon.say_and_wait(`……${callname}、見てて！ やあ！`);
      await era.printAndWait(
        `${you.name}이(가) 미처 반응하기도 전에, 팔코는 뚜껑이 박힌 나무를 향해 달려갔다.`,
      );
      await falcon.say_and_wait(`カップル？ ファル子と${callname}`, true);
      await era.printAndWait(
        `まだ反応できないうちに、ファル子は蓋のある大木へ走った\n\n。`,
      );
      await era.printAndWait(`작은 소동이 끝난 후, 두 사람은 다시 자리에 앉았다.`);
      await era.printAndWait(
        `${you.name}은(는) 팔코가 직접 만든 도시락을 즐긴 뒤, 옆에서 건네주는 음료를 받았다.`,
      );
      await era.printAndWait(
        `차가운 음료가 목을 타고 넘어가자, 만족스러운 듯 꺼억 하고 트림이 나왔다.`,
      );
      await you.say_and_wait(`음—— 살짝 다네.`);
      await falcon.say_and_wait(`いちごジュースを弁当にかけたからね。`);
      await falcon.say_and_wait(
        `그러고 보니, 플래시 씨가 시식했을 때도 비슷한 평가를 했었어.`,
      );
      await era.printAndWait(
        `에이신 플래시가 옆에서 지도했다면, 맛이 달게 된 것도 이해가 갔다.`,
      );
      await you.say_and_wait(`そういうことね。ケーキみたいな——`);
      await falcon.say_and_wait(`아니야! 이건 팔코가 스스로 생각해낸 거야!`);
      await era.printAndWait(
        `ファル子の急に大きい声に、通行人がちらちら見る。`,
      );
      await falcon.say_and_wait(`아, 미안해. 갑자기 흥분해버렸어.`);
      await falcon.say_and_wait(`이런 모습은 팔코답지 않은데⭐ 하하하.`);
      await era.printAndWait(
        `何かに気づいて、ファル子は俯き、顔が赤くて今にも水が落ちそうだ。`,
      );
      era.printButton(`고마워, 팔코`, 1);
      await era.input();
      await era.printAndWait(`ファル子の小さな頭を、そっと撫でる。`);
      await falcon.say_and_wait(`팔코는 이제 어린애가 아니야.`);
      await era.printAndWait(
        `口では抗議しても、激しくは拒まず、そのまま撫でさせてくれる。`,
      );
      await you.say_and_wait(`팔코는 이런 자리가 조금 불편해?`);
      await falcon.say_and_wait(
        `다른 사람의 시선을 그렇게 신경 쓰는 건 아니지만, 그래도 아주 조금은 그래.`,
      );
      await falcon.say_and_wait(`……무엇보다 ${callname}의 평가가 조금 신경 쓰여서.`);
      await era.printAndWait(`마지막 목소리는 점점 작아져 잘 들리지 않게 되었다.`);
      await you.say_and_wait(
        `무대 위의 팔코와 비교하면, 역시 이런 팔코도 정말 귀엽네.`,
      );
      await you.say_and_wait(`팔코가 빛나고 있는 모습도 귀여워.`);
      await falcon.say_and_wait(`팔코는 생각만큼 그렇게 빛나는 존재는 아니야.`);
      await falcon.say_and_wait(
        `${callname}に会う前、ファル子は毎日アイドル活動と、期限ギリギリの単位で走り回ってた。`,
      );
      await falcon.say_and_wait(`가끔, 겨우 한숨 돌리며 쉴 수 있을 때면 자기도 모르게 그런 생각을 해.`);
      await falcon.say_and_wait(`어쩌면 팔코가 가는 길이 틀린 건 아닐까 하고.`);
      await era.printAndWait(`手の茶杯を見つめるファル子。慰めようとした`);
      await falcon.say_and_wait(`하지만 요즘은 마음이 많이 편해졌어.`);
      await falcon.say_and_wait(
        `이렇게 계속 틀린 길을 따라서 쭉 달려온 게, 바로 팔코니까!`,
      );
      await falcon.say_and_wait(`생각해 보면, 아이돌이란 게 원래 그런 거잖아?`);
      era.printButton(`다른 사람에게 희망을 주고, 더 많은 사람을 이끄는 것?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `아니야! 더 많은 사람이 마음속으로 갈망하는 그 길을 걸을 수 있도록, 용기를 주는 거야!`,
      );
      await falcon.say_and_wait(
        `이 길을 걷는 사람들은 분명 팔코보다 더 똑똑하고, 더 노력할 테니까, 훨씬 더 눈부시게 빛날 거야!`,
      );
      era.printButton(`단지 그 용기가 부족했을 뿐이라는 말이야?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `그게 바로 팔코가 ${falcon.uma_sex_title} 아이돌인 이유야!`,
      );
      await falcon.say_and_wait(
        `팔코는 그렇게 똑똑하지 않으니까, 용기를 내서 더 많은 사람을 돕는 거야!`,
      );
      await falcon.say_and_wait(
        `ファル子のダンスに触れた${falcon.uma_sex_title}들이 팔코가 걸어온 길을 따라 걷는 걸 볼 때면.`,
      );
      await falcon.say_and_wait(`팔코는 정말 진심으로 기뻐.`);
      await falcon.say_and_wait(
        `마치, TV 속 아이돌에게 격려받았던 팔코 자신처럼 말이야.`,
      );
      await era.printAndWait(
        `이야기에 푹 빠져 있던 팔코는, 그제야 들고 있던 찻물이 식어버린 것을 깨달았다.`,
      );
      era.printButton(`ファル子はすごいね。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `전혀 그렇지 않아! 팔코도 그냥 평범한 ${falcon.uma_sex_title} 아이돌일 뿐인걸.`,
      );
      await falcon.say_and_wait(
        `これをやったら嬉しいからやる、普通の小さな${falcon.uma_sex_title}일 뿐이야.`,
      );
      await falcon.say_and_wait(`게다가`);
      await falcon.say_and_wait(
        `告白すらできない、いちばんダメな${falcon.uma_sex_title} 아이돌이기도 하고.`,
        true,
      );
      era.printButton(`게다가?`, 1);
      await era.input();
      await falcon.say_and_wait(`에헤헤⭐`);
      await era.printAndWait(
        `이후의 대화는 호수가 첫 번째 금빛 광채로 물들 무렵 끝이 났다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_45
  we_95_45: (() => {
    const title = "모이사나이트";
    /**
     * 約束を破っても、心が狂っても、
     * アイドルである以上、ファンの期待には真剣に応える
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(
        `${callname}を見送ったあと、スマートファルコンはひとり、トレーナー室のソファに座っていた。`,
      );
      await falcon.print_and_wait(`천진난만한 가면을 벗어 던지고, 고요한 순간을 즐겼다.`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`트레센의 밤은 생각보다 훨씬 조용했다.`);
      await falcon.say_and_wait(`그러고 보니`);
      await falcon.print_and_wait(
        `도쿄 대상전이 끝나면, ${callname}과의 계약도 끝이 나네.`,
      );
      await falcon.print_and_wait(
        `상황에 따라 이사장님께 계약 연장을 신청할 수도 있겠지만, 어쩐지 의욕이 나질 않아.`,
      );
      await falcon.print_and_wait(
        `무언가 부족해. 팔코가 아직 깨닫지 못한 무언가가 있어.`,
      );
      await falcon.print_and_wait(`가슴 속에서 전해지는 통증이 팔코에게 그 정답을 찾으라고 재촉하고 있어.`);
      await falcon.say_and_wait(`오늘 달은, 생각보다 더 아름답네.`);
      await falcon.print_and_wait(
        `トレーナー室の窓から入る、触れれば裂けそうな、かすんだ月の光。`,
      );
      await falcon.print_and_wait(
        `시선은 하얀 비단이 펼쳐진 방향을 따라 내려갔고, 환상의 끝에는 차가운 검은 물체가 있었다.`,
      );
      await falcon.print_and_wait(
        `……使いすぎて、役目を早く終えたマイク${you.adult_sex_title}かな。`,
      );
      await falcon.say_and_wait(`너도 자신의 사명을 다했구나.`);
      await falcon.print_and_wait(`검은 물체는 아무 말 없이 자신을 바라보고 있었다.`);
      await falcon.say_and_wait(`아아, 정말이지.`);
      await falcon.print_and_wait(`왜 그렇게 슬픈 눈으로 팔코를 쳐다보는 거야.`);
      await falcon.say_and_wait(`……그래, 팔코에게는 이제 아무것도 없어.`);
      await falcon.say_and_wait(
        `서로 공존할 수 없는 두 가지를 모두 쥐려다가, 결국 전부 잃어버렸어.`,
      );
      await falcon.say_and_wait(
        `ファンとの距離を整えるために、${callname}에 대한 연심을 마음속 깊이 묻어두었는데.`,
      );
      await falcon.say_and_wait(
        `그런데도 팔코를 응원해주는 팬 여러분에게, 균열이 생긴 다이아몬드는 결코 이전의 빛을 내지 못해.`,
      );
      await falcon.print_and_wait(
        `マイク${you.adult_sex_title}の問いに、真剣に答える。`,
      );
      await falcon.print_and_wait(
        `願いが耐えられない代価で叶っても、ステージに立って、その瞬間の誕生をこの目で見たい。`,
      );
      await falcon.say_and_wait(
        `팔코는 처음부터 끝까지 반짝이는 순간을 쫓기 위해 아이돌의 길을 택했으니까.`,
      );
      await falcon.print_and_wait(`最初の渇望は、もう大半が。`);
      await falcon.print_and_wait(
        `누군가를 위해서가 아니라, 오직 자신의 소원을 이루기 위해서.`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title}アイドルとして、応援してくれたファンに、いちばん満足できる絵を捧げる。`,
      );
      await falcon.print_and_wait(`그러니, 이대로 출발하자!`);
      await falcon.print_and_wait(
        `ダートの大レースの支持が、芝の十分の一でも。`,
      );
      await falcon.print_and_wait(
        `ファル子はダイヤより輝かせて、火彩をもっと鮮やかにする！`,
      );
      await falcon.print_and_wait(
        `ファル子が${falcon.uma_sex_title} 아이돌로서의 각오를 걸고!`,
      );
      await falcon.print_and_wait(`이대로 단숨에 결승점까지 빛나는 거야!`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_47
  we_95_47: (() => {
    const title = 'スマートファルコンの決断';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}과(와) ${falcon.name}은(는) 다음 주에 있을 도쿄 대상전 준비로 긴박한 시간을 보내고 있었다.`,
      );
      await era.printAndWait(`${falcon.name}과 맺은 계약도 어느덧 3년이 다 되어가고 있었다.`);
      await you.say_and_wait(`이제 곧 졸업식인 건가?`);
      await era.printAndWait(
        `トレセンを卒業して、もっと上へ進むか。正式にアイドルの道へ出るか。`,
      );
      await era.printAndWait(`${falcon.name}에게는 아마 이 두 가지 가능성뿐이겠지.`);
      await era.printAndWait(
        `미래를 향해 함께 동행한 승객으로서, ${falcon.name}といっしょに積んだ経験は、静かな夜に、昨日のことみたいに浮かぶのだろう。`,
      );
      await era.printAndWait(`따르릉.`);
      await era.printAndWait(
        `성가신 소음이 ${you.name}の思考を切る。もう下校の時間だ。`,
      );
      await era.printAndWait(
        `いつもは書類を整えてから、川辺の草地で${falcon.name}を待つ。`,
      );
      await you.say_and_wait(`ここで少し、${falcon.name}を待とう。`);
      await era.printAndWait(
        `どうしても動けないときは、${falcon.name}のほうから来て待ってくれる。`,
      );
      await era.printAndWait(
        `비록 명시적으로 약속한 적은 없었지만, 두 사람 사이에는 이미 그런 묵계가 형성되어 있었다.`,
      );
      await era.printAndWait(
        `——だが、淹れたコーヒーの湯気が消えるまで、いつものノックは起きなかった。`,
      );
      await you.say_and_wait(`急な用事に引っ張られて、動けないのかも。`);
      await era.printAndWait(
        `요즘 ${falcon.uma_sex_title} 아이돌에게는 갑작스러운 업무가 점점 더 빈번해지고 있었다.`,
      );
      await era.printAndWait(
        `오랫동안 품어왔던 마음의 응어리가 풀린 탓인지, ${falcon.name}의 행동은 여느 때보다 적극적이었다.`,
      );
      await you.say_and_wait(`なら携帯で、ウマスタの新着を待とう。`, true);
      await you.say_and_wait(`다음 날 아침에 ${falcon.sex}가 들려줄 재미있는 이야기들을 들어보기로 하자.`);
      await era.printAndWait(
        `서류를 정리하다 실수로 넘어뜨린 액자를 세워, 다시 가장 잘 보이는 곳에 놓았다.`,
      );
      era.drawLine();
      await era.printAndWait(`겨울밤은 생각보다 훨씬 더 길었다.`);
      await era.printAndWait(`상념은 홀로 있는 시간 동안 세계의 끝까지 뻗어 나갔다.`);
      await era.printAndWait(`깊이를 알 수 없는 감정 또한 뻗어 나가는 과정에서 무한히 증폭되었다.`);
      await era.printAndWait(`마치 침묵하는 바다처럼, 혹은 바닥이 보이지 않는 우물처럼.`);
      await era.printAndWait(`똑똑똑.`);
      await era.printAndWait(
        `鍵をそっと開けると、髪を下ろした栗色の${falcon.uma_sex_title}가 보였다.`,
      );
      await falcon.say_and_wait(`……${callname}.`);
      await you.say_and_wait(`일단 들어와.`);
      await era.printAndWait(
        `フックからタオルを取って${falcon.name}に渡し、扉を閉めた。`,
      );
      await era.printAndWait(
        `이상한 소문이 나는 것보다, ${you.name}은(는) 팔코의 상태가 더 걱정되었다.`,
      );
      await falcon.say_and_wait(`실례할게.`);
      await you.say_and_wait(
        `마실 건 뭐가 좋아? 홍차? 주스? 아니면 커피? 아니, 커피는 관두자.`,
      );
      await era.printAndWait(
        `들어온 뒤 거실 소파에 얌전히 앉아, 두 눈으로 주변 환경을 이리저리 살피고 있었다.`,
      );
      await era.printAndWait(
        `そういえば、${falcon.name}がここを知るのは初めてだ。`,
      );
      await era.printAndWait(`……${falcon.sex}는 여길 어떻게 안 거지?`);
      await falcon.say_and_wait(`${callname}, 왠지 넋이 나간 표정인데?`);
      await era.printAndWait(
        `생각이 너무 길어지자 ${falcon.name}の好奇心が起きていた。`,
      );
      await you.say_and_wait(`아니, 그냥 어떤 음료로 대접하면 좋을지 고민 중이었어.`);
      await falcon.say_and_wait(`ファル子、ビール飲みたい！`);
      await you.say_and_wait(`결정했어, 역시 홍차로 하자.`);
      await era.printAndWait(`머릿속으로 결정을 내리자 행동에 목적이 생겼다.`);
      await era.printAndWait(
        `찻물을 조심스럽게 따라내며, 찻물 한 방울도 테이블에 흘리지 않도록 집중했다.`,
      );
      await you.say_and_wait(`방금 끓인 거라 뜨거우니까 조심해.`);
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `今年の合宿パーティーで、${falcon.name}がトレーナー側の飲み物を間違えて飲んでから、ずっと忘れられないらしい。`,
      );
      await era.printAndWait(
        `${falcon.sex}の言う、雲を踏むみたいなふわふわは……いや、ただの風味飲料の飲みすぎだ。`,
      );
      await era.printAndWait(
        `하지만 ${falcon.name}を寮へ送り、たづなさんへの言い訳を考えるのは、かなりの苦行だった。`,
      );
      await era.printAndWait(
        `今から地下鉄の入り口まで行っても、終電には間に合わない。`,
      );
      await era.printAndWait(
        `カップを抱えて茶葉を見つめ、何か考えている${falcon.name}.`,
      );
      await era.printAndWait(`プシュッ。`);
      await you.say_and_wait(`무슨 일인지 나한테 말해줄 수 있어?`);
      await era.printAndWait(
        `잠시 고민하다가 맥주 캔을 땄다. 캔 입구에서 뿜어져 나오는 갈색 거품은 언제나 몰아치는 홍수를 연상시킨다.`,
      );
      await era.printAndWait(
        `外泊許可は明日出せばいい——そんな考えも、アルコールといっしょに血へ混じって、無意識から上がってくる。`,
      );
      await you.say_and_wait(`구름 한 점 없는 하늘이네.`);
      await you.say_and_wait(`내일도 날씨가 좋겠어.`, true);
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(``);
      await you.say_and_wait(`차라리 여기서 하룻밤 자고 갈래?`);
      await you.say_and_wait(`……だってファル子だ。`);
      await you.say_and_wait(`네가 행복했으면 좋겠어.`);
      await era.printAndWait(`말을 내뱉는 순간 ${you.name}은(는) 후회했다.`);
      await era.printAndWait(
        `만감이 교차했지만, 결국 입 밖으로 나온 것은 이 한마디였다.`,
      );
      // 前文の恋心と責任の選択でここは変わる。変わるのは重心だけで、スマートファルコンのトレーナーへの恋心は抑えても消えない。暗火のように
      // 恋慕が責任より大きい
      await you.say_and_wait(`이러다 미움받겠네.`, true);
      await falcon.say_and_wait(`${callname}, 팔코는 당신이 좋아.`);
      await you.say_and_wait(`역시…… 응?`);
      await era.printAndWait(
        `想像より凛とした顔。見たことのない、${falcon.name}である${falcon.teen_sex_title}の、隠していた一面。`,
      );
      await falcon.say_and_wait(
        `팬들보다, 그 어떤 팬들보다 훨씬 더 ${callname}을 좋아해!`,
      );
      await era.printAndWait(`突然の告白に、言葉が出ない。`);
      await you.say_and_wait(`에? 팔코, 왜?`);
      await falcon.say_and_wait(
        `ずっとカレンちゃんが羨ましかった……清純派アイドルより、自分から行ってトレーナーの好感を掌に掴むほうが正しい……よね。`,
      );
      await falcon.say_and_wait(
        `아, 그러고 보니 팔코가 ${falcon.uma_sex_title} 아이돌을 꿈꿨을 때는, 언젠가 좋아하는 사람을 위해서 지금까지 쌓아온 팬들을 포기하게 될 날이 올 줄은 몰랐어.`,
      );
      await falcon.say_and_wait(
        `하지만 팔코는 후회하지 않아. ${callname}과 만났던 그 풀밭에서부터 팔코는 줄곧 자신의 감정을 억눌러왔으니까.`,
      );
      await falcon.say_and_wait(
        `그래서 팔코는 사실 나쁜 아이야. 팬들을 위해서라고 말은 하지만 사실은 그저 자기만족일 뿐이었어. 하지만 그렇기에 팔코는 결정을 내렸어—— 아이돌로서가 아니라, ${falcon.name}으로서 ${callname}을 사랑하기로 말이야.`,
      );
      await era.printAndWait(
        `${falcon.name}の告白というより、${falcon.name}である${falcon.teen_sex_title}が、胸の奥を見せた。`,
      );
      await you.say_and_wait(`아…… 그렇구나……`);
      await era.printAndWait(
        `予感はあった。未知から来た不安にも、意味がついた。`,
      );
      await you.say_and_wait(`앞으로도 잘 부탁해.`);
      await era.printAndWait(`${falcon.name}の手を、そっと取る。`);
      await falcon.say_and_wait(`에?`);
      await you.say_and_wait(`이번에는 내가 이겼네.`);
      await era.printAndWait(
        `汗で湿った右手は微かに震えているが、掌の中ではずっと安定している。`,
      );
      await falcon.say_and_wait(
        `……맞아, ${callname}이 이겼어! 앞으로도 잘 부탁해!`,
      );
      await you.say_and_wait(
        `これからのアイドルの道は、波が少し増える。頭が痛いね。`,
      );
      await falcon.say_and_wait(`そうだね……次のファン騒動、しばらく大変かも。`);
      await era.printAndWait(`目が合って、ふたりは声を上げて笑った。`);
      await era.printAndWait(
        `기쁨과 홀가분함이 뒤섞인 눈물이 왈칵 쏟아질 때까지 한참을 웃었고, 앞으로도 계속 웃으며 나아갈 것이다.`,
      );
      await falcon.say_and_wait(
        `やっぱりファル子は、トレーナーの胸に飛び込むのが好きだな⭐`,
      );
      await falcon.say_and_wait(`있지…… ${callname}.`);
      await era.printAndWait(`이런 상황에서 더 이상의 생각은 필요 없었다.`);
      await era.printAndWait(`${falcon.name}の唇に、そっとキスをする。`);
      await you.say_and_wait(`짜네.`, true);
      await era.printAndWait(`생각했던 것보다 조금 더 달콤했다.`);
      // いっしょに頑張ろう。スマートファルコンとプレイヤーが手を取る。砂の城が崩れても、握った手が離れなければ、また建て直せる
      // 責任が恋慕を越える
      await falcon.say_and_wait(`음.`);
      await era.printAndWait(
        `발꿈치를 든 ${falcon.teen_sex_title}에게 입술이 갑자기 덮였다.`,
      );
      await era.printAndWait(
        `살짝 따끔거리는 감각과 함께 느껴지는 씁쓸하고 짠맛…… 이것이 ${falcon.name}의 키스인가. 과연 그렇군.`,
      );
      await falcon.say_and_wait(`팔코는 당신이 좋아.`);
      await era.printAndWait(
        `突然の告白なのに、片足が崖の縁に乗った錯覚がある。だから、次の言葉を待つ`,
      );
      await falcon.say_and_wait(
        `——하지만, 팔코는 지금까지 응원해준 팬들에게 책임을 다해야만 해.`,
      );
      await you.say_and_wait(`역시 그렇구나.`);
      await falcon.say_and_wait(`ファル子、迷った。彷徨った。逃げた。`);
      await falcon.say_and_wait(`죄책감에 휩싸였던 그 나날은 죽음보다 더 고통스러웠어.`);
      await falcon.say_and_wait(
        `——全身に傷をぶら下げて、どう見ても輝いてない。嫌になる。`,
      );
      await falcon.say_and_wait(`하지만, 팔코는 그래도 자신을 위해서 행동할 거야.`);
      await falcon.say_and_wait(
        `팬들의 응원이 없다면, 팔코는 더 이상 팔코가 아니게 되니까.`,
      );
      await era.printAndWait(
        `${falcon.sex}의 표정은 웃고 있는 것처럼 보였지만, 사실은 극심한 고통으로 인해 안면 근육이 크게 일그러져 있는 것에 더 가까웠다.`,
      );
      await falcon.say_and_wait(
        `……하지만…… 하지만 팔코의 마음속은 텅 비어버렸어. 마치 아무리 해도 꿰맬 수 없는 상처가 난 것처럼.`,
      );
      await era.printAndWait(
        `さっきからずっと震えていた携帯を、壁へ強く叩きつけた。`,
      );
      await era.printAndWait(`もっと早く${falcon.name}の内側に触れていれば。`);
      await falcon.say_and_wait(`그러니까,`);
      await era.printAndWait(`학생이 교외에서 숙박하려면 미리 사감에게 신청해야 한다.`);
      await era.printAndWait(`生徒が学外で泊まるなら、寮長に事前申請が必要。`);
      await era.printAndWait(`生徒が学外で泊まるなら、寮長に事前申請が必要。`);
      await era.printAndWait(
        `아아, 마치 먼 피안에서 들려오는 말들처럼, 뒷문장은 강박적인 생각들에 완전히 덮여버렸다.`,
      );
      await era.printAndWait(`분명 각오하고 있었는데, 왜 이렇게 슬픈 걸까?`);
      await falcon.say_and_wait(
        `……그렇게 된 거야. 설령 약속을 어기고 마음이 미쳐버릴지라도, 아이돌인 이상 팬들의 기대에 진지하게 응답해야 해.`,
      );
      await you.say_and_wait(
        `分かった……ファル子の決断は、どうなっても支える。`,
      );
      await era.printAndWait(
        `視野が自分の範囲を抜け、目の前の${falcon.teen_sex_title}から画面全体を俯瞰する位置へ移り、機械のように決まった規則で会話している。`,
      );
      await era.printAndWait(`それでも、${falcon.sex}の決断は尊重する。`);
      await you.say_and_wait(`잘 자.`);
      await falcon.say_and_wait(`${callname}, 잘 자.`);
      await era.printAndWait(
        `途切れた思考が戻ったとき、自分はもうそこにいた。`,
      );
      await era.printAndWait(`마치 먼 곳에서 들려오는 듯한 희미한 목소리.`);
      await you.say_and_wait(`아니, 그럴 리가.`);
      await you.say_and_wait(
        `팔코가 성공하든 실패하든, 나는 네 곁에서 마지막 결말까지 함께 지켜볼 거야.`,
      );
      await you.say_and_wait(`그때가 되면, 우리는 분명 웃으면서 오늘 밤의 대화를 추억하게 될 거야.`);
      await you.say_and_wait(`그러니까 팔코, 무서워하지 마.`);
      era.printButton(`결정의 순간이 오면, 내가 밀어줄게`, 1);
      await era.input();
      await falcon.say_and_wait(`……${callname}.`);
      await era.printAndWait(
        `${you.name}は${falcon.name}の差し出した手を、きつく握った`,
      );
      await falcon.say_and_wait(`${callname}, 오늘 한 말 꼭 기억해야 해?`);
      await you.say_and_wait(`응, 이미 기억했어.`);
      await era.printAndWait(
        `翌朝、隣で寝ている${falcon.name}に気づくのは、その先の話だ。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_18
  ws_18: (() => {
    const title = '空っぽの頭に残った、ただ一つの想い';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`5월 중순의 어느 날.`);
      await era.printAndWait(
        `트레이닝 계획은 착실히 진행되었고, ${falcon.name}이 아낌없이 홍보한 덕분에 강변의 거리 공연에도 조금씩 충성스러운 팬들이 생겨나기 시작했다.`,
      );
      await era.printAndWait(
        `현실은 예상보다 낙관적이었고, 어떤 답은 오직 실천을 통해서만 얻을 수 있다는 것을 깨달았다.`,
      );
      await era.printAndWait(
        `만족스러운 한숨을 내뱉고 나서야 ${you.name}は背中が汗ばんでいるのに気づいた。`,
      );
      await era.printAndWait(`봄에서 여름으로 넘어가는 시기는 확실히 작년보다 더 덥게 느껴졌다.`);
      await you.say_and_wait(
        `メイクデビューも近い。次はトレーニングの成果を試す番だ！`,
      );
      await falcon.say_and_wait(`${callname}, 큰일 났어!`);
      await era.printAndWait(
        `그 생각을 하던 중, 갑자기 트레이닝실로 뛰어 들어온 그림자에 ${you.name}은(는) 깜짝 놀랐다.`,
      );
      await you.say_and_wait(`またテスト不合格か？`, true);
      await era.printAndWait(
        `予想外ではあるが、想定していなかったわけでもない。`,
      );
      await falcon.say_and_wait(
        `그것도 중요하지만, 팔코가 마주한 건 그게 아냐!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 그제야 ${falcon.teen_sex_title}가 거친 숨을 몰아쉬며 이마의 땀방울이 목덜미로 흘러내리는 것을 발견했다.`,
      );
      await era.printAndWait(`ここまで、走ってきたのだ。`);
      await you.say_and_wait(`무슨 일이야?`);
      await falcon.say_and_wait(
        `하아, 하아…… 그게, 팔코가 트레센 주변 사람들에게 ${falcon.uma_sex_title} 아이돌을 알리려고 직접 만든 포스터랑 작은 사은품들을 나눠주고 있었거든.`,
      );
      await falcon.say_and_wait(
        `ずっと安く売ってくれてた雑貨屋さんが急に引っ越ちゃって、新しく探したお店はどれもお値段がすっごく高いの。`,
      );
      await falcon.say_and_wait(
        `지금까지는 어떻게든 버텨왔는데, 최근에는 원자재 가격까지 올라서 가격이 더 뛴대.`,
      );
      await falcon.say_and_wait(`이대로라면 팔코, 대위기야!`);
      await era.printAndWait(
        `상황을 파악하니 ${falcon.name}은 안정적인 공급처가 사라진 탓에 큰 혼란에 빠진 상태였다.`,
      );
      await era.printAndWait(`잠시 고민한 끝에 ${you.name}は——\n`);
      era.printButton(`다른 가게들을 한번 알아볼까?`, 1);
      era.printButton(`가장 중요한 건 팔코의 아이돌로서의 마음가짐이야!`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`그동안 ${falcon.name}이 쌓아온 인기를 고려해 보았다.`);
        await you.say_and_wait(
          `${falcon.uma_sex_title} 아이돌로서 상점가 점포들과 협업 이벤트를 열어 자금을 마련하는 건 어때?`,
        );
        await you.say_and_wait(
          `ファル子は場を盛り上げるのが得意だろ。お店にお客を呼びつつ、着実に人気も積んでいける。`,
        );
        await you.say_and_wait(`그렇게 번 수익으로 이 시기를 잘 넘겨보자!`);
        await falcon.say_and_wait(`でも、誰にお願いすればいいの？`);
        await era.printAndWait(`${falcon.name}が積み上げてきた人気を思えば。`);
        await you.say_and_wait(`내가 옆에서 같이 도와줄게.`);
        await falcon.say_and_wait(`ふぅ～助かった……よかった。`);
        await era.printAndWait(
          `${falcon.name}은 기뻐하며 ${you.name}の手を引き、くるくると回り始めた。`,
        );
        await era.printAndWait(`그러고 보니——`);
        await era.printAndWait(
          `모든 팬에게 평등한 팔코와, 나의 담당 ${falcon.uma_sex_title}인 ${falcon.name}.`,
        );
        await era.printAndWait(
          `${falcon.name}에게는 어느 쪽이 더 중요할까?`,
        );
        await era.printAndWait(
          `目が回るほどの充足の中で、${you.name}은(는) 문득 그런 의문이 들었다.`,
        );
        await you.say_and_wait(`……일단 눈앞의 일부터 처리하자.`, true);
        await era.printAndWait(
          `그 후 ${you.name}은(는) 아르바이트를 하는 다른 ${falcon.uma_sex_title}たちから、宣伝不足に悩む店主の話を聞いた。`,
        );
        await era.printAndWait(
          `結果、コラボで見物客をたくさん呼び込み、正当な報酬とボーナスのほか、${falcon.name}はウマスタでも新しいファンを得た。`,
        );
      } else {
        await you.say_and_wait(
          `가장 중요한 건 팔코의 아이돌로서의 진심이야!`,
        );
        await falcon.say_and_wait(`에헤?`);
        await you.say_and_wait(
          `見た目や格式を重んじるモデルより、青くてかわいくて、モデルよりファンに近いことこそが${falcon.uma_sex_title} 아이돌의 매력이라구!`,
        );
        await era.printAndWait(
          `열변을 토하던 ${you.name}は机を強く叩き、その反動で手が痛くなった。`,
        );
        await falcon.say_and_wait(
          `에? ${callname}의 말은 팔코가 홍보 수단에 너무 치중하느라 ${falcon.uma_sex_title} 아이돌의 핵심을 놓치고 있다는 뜻이야?`,
        );
        await you.say_and_wait(
          `맞아! 모두에게 ${falcon.uma_sex_title}アイドルとして活躍する${falcon.name}을 보여주자!`,
        );
        await falcon.say_and_wait(
          `わかった！ ファル子、${falcon.uma_sex_title}アイドルとして頑張るよ！`,
        );
        await era.printAndWait(`그러고 보니——`);
        await era.printAndWait(
          `모든 팬에게 평등한 팔코와, 나의 담당 ${falcon.uma_sex_title}인 ${falcon.name}.`,
        );
        await era.printAndWait(
          `${falcon.name}에게는 어느 쪽이 더 중요할까?`,
        );
        await you.say_and_wait(`悔しいけど、ファル子にとっては、たぶん`, true);
        await era.printAndWait(
          `その考えはすぐ、${falcon.name}が興奮して並べたたくさんの案に飲み込まれた。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title} 아이돌의 진심을 깨달은 ${falcon.name}は、その繊細さで多くのファンを惹きつけた。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_24
  ws_24: (() => {
    const title = "라벤더";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강가 풀밭.
`);
      await falcon.say_and_wait(
        `줄곧 팔코를 응원해준 팬 여러분! 팔코가 드디어……`,
      );
      await era.printAndWait(
        `계획대로 착실히 트레이닝을 진행한 ${falcon.name}은 이제 상당한 성과를 거두고 있었다.`,
      );
      await era.printAndWait(
        `次のメイクデビューに、${falcon.name}は万全の準備ができた。`,
      );
      await falcon.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `いつものように${falcon.name}と並んでトレセンへ戻る道で、${falcon.name}が突然${you.name}を見た。`,
      );
      await era.printAndWait(`레이스가 다가오니 불안해지는 것도 어쩔 수 없는 일이리라.`);
      await era.printAndWait(`지극히 자연스러운 현상이었다.`);
      await falcon.say_and_wait(`그러고 보니, 이건 팔코의 첫 무대네.`);
      await era.printAndWait(
        `${falcon.name}은 ${falcon.uma_sex_title} 아이돌이라는 목표를 향해 곧장 달려왔다.`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title} 아이돌의 길을 걷기로 결심했을 때는 너무 설레서 밤잠을 설칠 정도였는데, 달력을 한 장 한 장 넘기다 보니 팔코, 지금은 조금……`,
      );
      era.printButton(`데뷔전이라서 무서운 거야?`, 1);
      await era.input();
      await falcon.say_and_wait(`ちがう、ただ気持ちが……ちょっと複雑かな。`);
      await era.printAndWait(
        `마치 제 꼬리를 쫓아 뱅글뱅글 돌던 아기 고양이가 실수로 종이 상자에 부딪혀 '타닥' 소리가 난 것 같은 느낌이었다.`,
      );
      era.printButton(`그렇구나.`, 1);
      await era.input();
      await falcon.say_and_wait(`하지만 팔코의 텐션은 지금 최고조라구!`);
      await falcon.say_and_wait(
        `아이돌 인생의 첫 데뷔 무대라니, 꼭 소설 속 주인공이 된 기분이야!`,
      );
      await falcon.say_and_wait(`이제 팔코가 반짝반짝 빛날 시간이야!`);
      await era.printAndWait(`${falcon.name}은 ${you.name}에게 미소를 지어 보였다.`);
      await falcon.say_and_wait(
        `……${callname}은(는) 앞으로도 계속 팔코 곁에서 팔코를 응원해줄 거지?`,
      );
      era.printButton(`당연하지.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `우으— ${callname}은 다른 ${falcon.uma_sex_title}들에게도 그렇게 말해?`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 혼잣말을 못 들은 척 넘겼다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_30
  ws_30: (() => {
    const title = "영원히 계속되길 바라는 일상";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(
        `${callname}, 팔코가 이번에 공연하기 딱 좋은 장소를 찾았는데, 같이 가서 봐줄 수 있어?`,
      );
      await era.printAndWait(
        `${you.name}はフォルダから顔を上げ、${falcon.name}과 눈을 맞추었다.`,
      );
      await you.say_and_wait(`우와앗.`);
      await era.printAndWait(
        `갑자기 얼굴을 쑥 들이민 ${falcon.name}は、悪戯が成功したような笑顔を浮かべた。`,
      );
      await you.say_and_wait(`너무 가깝잖아!`, true);
      await era.printAndWait(
        `곰곰이 생각해보니 ${falcon.sex}도 한창 감수성이 예민할 시기이니 이런 행동도 자연스러운 일이었다.`,
      );
      await you.say_and_wait(
        `팔코의 노력을 부정하는 건 아니지만, 요즘 아이돌 활동이 너무 잦은 거 아냐?`,
      );
      await you.say_and_wait(
        `이상적인 미래를 향해 나아가는 건 좋지만, 시험에서 낙제하면 발목을 잡힐 수도 있어.`,
      );
      await falcon.say_and_wait(
        `앗! ……그게…… 팔코도 반성 중이야. 그러니까 아이돌 활동도 시간과 장소를 잘 고려해서 하고 있다구.`,
      );
      await era.printAndWait(
        `${falcon.name}은 딴청을 피우는 듯 보였으나, ${you.name}이(가) 헛기침을 하자 그제야 허둥지둥 변명을 늘어놓았다.`,
      );
      await you.say_and_wait(`거짓말하는 사람은 눈을 못 마주친다던데.`);
      await era.printAndWait(
        `그 말에 당황하며 ${you.name}の目を見た${falcon.name}의 모습을 보고 ${you.name}은(는) 한 가지 확신을 가졌다.`,
      );
      await you.say_and_wait(
        `やっぱりね……次の中間、ちゃんと復習するって約束してくれたら、ファル子のお願いも聞くよ。`,
      );
      await falcon.say_and_wait(`에에에? ${callname}, 어떻게 안 거야?`);
      await era.printAndWait(
        `${falcon.name}の表情は作りものではなさそうだが、胸の奥がわずかに落ち着かない。`,
      );
      await you.say_and_wait(
        `このままじゃ、${falcon.name}は大丈夫かな。`,
        true,
      );
      await era.printAndWait(
        `앞으로의 계획을 조금 수정해야 할지도 모르겠다.`,
      );
      await you.say_and_wait(`당분간 돌발 라이브는 좀 쉬는 게 어때?`);
      await falcon.say_and_wait(`싫어!`);
      await era.printAndWait(`${falcon.name}의 반응은 생각보다 훨씬 격렬했다.`);
      await falcon.say_and_wait(
        `아니! 팔코 말은 그런 뜻이 아냐! 공부도 열심히 할게! 그러니까 라이브는 꼭 해야만 한다구!`,
      );
      await era.printAndWait(
        `일단 ${falcon.name}의 약속을 받아내긴 했다. 아이돌 활동을 이토록 소중히 여기는 팔코의 성격상, 당분간 담임 선생님과 추격전을 벌일 걱정은 덜어도 될 듯했다.`,
      );
      await falcon.say_and_wait(
        `으음— 팔코가 무슨 말을 하려고 했더라…… 아, 맞다! ${callname}?`,
      );
      await era.printAndWait(`${falcon.name}이 ${you.name}의 눈을 똑바로 쳐다보았다.`);
      await falcon.say_and_wait(
        `팔코, ${callname}과 꼭 같이 가보고 싶은 곳이 있어.


`,
      );
      await era.printAndWait(
        `${falcon.name}의 손에 이끌려 ${you.name}は、広い草地へ出た。`,
      );
      await era.printAndWait(
        `주변에 높은 건물이 없어서 그런지, 평소보다 하늘이 훨씬 가깝게 느껴졌다.`,
      );
      await era.printAndWait(
        `夏が近いせいか、空気もいつもより湿っている。雲を抜ける陽射しが、草地に薄い霞をつくっていた。`,
      );
      await falcon.say_and_wait(`${callname}, 여기 어때 보여?`);
      await era.printAndWait(
        `${falcon.name}은 ${you.name}의 손목을 흔들며 억누를 수 없는 설렘을 담아 의견을 물었다.`,
      );
      await era.printAndWait(
        `賑やかな都市圏でこんな草地を見つけるのに、${falcon.name}もずいぶん時間をかけたのだろう。`,
      );
      await era.printAndWait(
        `아니, 생각해보면 원래 대형 쇼핑몰이 들어설 예정이었으나 여러 사정으로 방치되어 식물들의 낙원이 된 땅인 듯했다.`,
      );
      await falcon.say_and_wait(
        `음— 연습의 일환으로 ${callname}、ファル子のアシスタントやってくれる？`,
      );
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `태양을 등지고 선 ${falcon.name}의 표정은 잘 보이지 않았으나, 끊임없이 실룩거리는 귀를 보니 ${falcon.sex}가 큰 용기를 내어 내린 결정임을 알 수 있었다.`,
      );
      await era.printAndWait(
        `핑계를 대려면 좀 더 그럴싸한 걸 찾지 싶었지만, ${falcon.sex}のこの気持ちは、正直扱いにくい。`,
      );
      era.printButton(`これから、頼んでいいかな？ ファル子`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}이 싫다면 어쩔 수 없지만…… 에?`);
      await era.printAndWait(
        `${you.name}이(가) 이렇게 흔쾌히 수락할 줄은 몰랐는지 ${falcon.name}は一瞬固まり、それからそっと${you.name}의 손을 잡았다.`,
      );
      await falcon.say_and_wait(`정말 영광이야⭐`);
      await era.printAndWait(
        `${falcon.sex}は妙に軽やかな声で${you.name}に答えた。`,
      );
      await era.printAndWait(
        `하늘은 그 어느 때보다 지면과 가까웠고, 풀과 흙이 뒤섞인 숨결 속에 녹아들었다. 처음에는 ${falcon.name}のリズムについていこうとしたが、一度大きくぶつかったあと、ついに耐えきれなくなった${you.name}은(는) 풀밭 위에 털썩 주저앉고 말았다.`,
      );
      await falcon.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `비록 어지럼증이 가시지 않았지만, ${falcon.name}의 흥분과 기쁨만큼은 고스란히 전해졌다.`,
      );
      await falcon.say_and_wait(`미안해, 팔코가 너무 신났나 봐.`);
      await era.printAndWait(`가느다란 팔의 조심스러운 이끌림에 다시 몸을 일으켰다.`);
      era.printButton(`아이돌이라는 게 생각보다 그렇게 멀게만 느껴지는 존재는 아니네.`, 1);
      await era.input();
      await era.printAndWait(`どくん。`);
      await era.printAndWait(
        `独り言のような満足とともに、幼いころ芝生を全力で走ったあと、そのまま寝転んだときのように芝生へ身を預けた。`,
      );
      await era.printAndWait(`황홀경 속에서 마치 아무 걱정 없던 어린 시절로 돌아간 것 같았다.`);
      await era.printAndWait(
        `세차게 뛰는 심장 소리가 자신의 존재를 힘있게 증명하고 있었다.`,
      );
      await era.printAndWait(`그래, 이 행복한 기분을 그대로 간직한 채 영원히——`);
      await falcon.say_and_wait(
        `엣! ${callname}, 격렬한 운동 후에 풀밭에 바로 누우면 안 돼!`,
      );
      await era.printAndWait(`가느다란 팔에서 느껴지는 엄청난 힘에 이끌려 다시 상체가 일으켜졌다.`);
      await era.printAndWait(`으음, 왠지 좀 그리운 기분이네.`);
      await era.printAndWait(
        `슬픔과 그리움, 그리고 후련함이 뒤섞인 복잡한 감정이 마음속에 차올랐다.`,
      );
      await you.say_and_wait(
        `でも、いまの僕には、不幸せなところなんてない。`,
        true,
      );
      await era.printAndWait(`이런 일상이 영원히 계속될 수만 있다면.`);
      await era.printAndWait(
        `無意識に空を見上げると、紺碧の空に積乱雲がいくつか、気ままに流れていた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_40
  ws_40: (() => {
    const title = "야래향";
    /**
     * 夜は光合成を止め、廃気を出す。自分がもう時代遅れで、埋められそうだという恐れから逃れるため。新しい潮流を追い、生存の恐怖を追い払おうとする。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `ダートで${falcon.name}の名を広げるため、これから出走するレースの計画を立て始めた。`,
      );
      await era.printAndWait(`심야 트레이너 기숙사
`);
      await era.printAndWait(
        `데뷔전에서 수집한 데이터들을 다시 정리한 후, 다음 날의 계획을 메모장에 기록했다.`,
      );
      await era.printAndWait(`막 휴식을 취하려던 찰나——`);
      await era.printAndWait(`——위잉, 위잉`);
      await era.printAndWait(`스마트폰이 진동하기 시작했다.`);
      await era.printAndWait(`이미 깊은 밤인데, 이 시간에 전화를 받아야 할까?`);
      era.printButton(`받는다`, 1);
      era.printButton(`받지 않는다`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `심야에 온 메시지라면 받지 않을 이유가 없겠지.`,
        );
        await era.printAndWait(`그렇게 생각하며 ${you.name}은(는) 스마트폰을 확인했다.`);
        await falcon.say_and_wait(`こんばんは！ ${callname}, 자고 있었어?`);
        await era.printAndWait(
          `時刻はもう翌日の真夜中だと気づく。眠気に押されて、思わず欠伸が出た。`,
        );
        await era.printAndWait(
          `${falcon.name}がこんな時間に返す理由は何か。急ぎなら、なぜルームメイトに聞かず自分のところへ来るのか。`,
        );
        await era.printAndWait(`아니면 오직 나만이 해결해줄 수 있는 일인 걸까?`);
        await era.printAndWait(
          `말투를 어떻게 해야 할지 고민하며 ${falcon.name}의 의도를 곰곰이 생각해보았다.`,
        );
        await era.printAndWait(
          `메시지를 보낸 지 얼마 지나지 않아 다시 진동이 울렸다.`,
        );
        await falcon.say_and_wait(
          `대단한 일은 아니지만, 팔코는 역시 ${callname}에게 물어보는 게 가장 좋을 것 같아서.`,
        );
        await era.printAndWait(
          `${falcon.name}은 ${you.name}を、頼れる大人だと思っているのだろうか。`,
        );
        await era.printAndWait(
          `光栄ではあるが……どう応えていいか、一瞬わからない。`,
        );
        era.printButton(`무슨 일이 있었는지 말해줘.`, 1);
        era.printButton(`用事なら、明日でいい`, 2);
        if ((await era.input()) === 1) {
          await you.say_and_wait(
            `팔코에게 어려운 일이 있다면 언제 어디서든 나랑 상담해도 좋아.`,
          );
          await era.printAndWait(
            `답장을 기다리는 시간은 생각보다 길었다. ${you.name}이(가) 깜빡 잠들기 직전, 한꺼번에 10개 이상의 메시지가 쏟아졌다.`,
          );
          await falcon.say_and_wait(
            `……${callname}에게라면 가끔은 약한 소리를 해도 괜찮겠지?`,
          );
          await falcon.say_and_wait(
            `데뷔전이 끝난 뒤에 팔코는 새로운 더트 아이돌로서 꽤 많은 팬을 얻었어.`,
          );
          await falcon.say_and_wait(
            `おかげで毎朝のライブも、お客さんがぎっしり集まるようになった。`,
          );
          await falcon.say_and_wait(
            `그런데 어제 라이브에서는 늘 보이던 익숙한 얼굴들이 몇 명 안 보이더라고.`,
          );
          await falcon.say_and_wait(
            `ファンとのアンコールでも、「リアルアイドルよりバーチャルアイドルのほうがいい」って評価をもらっちゃって。`,
          );
          await falcon.say_and_wait(
            `팔코는 딱히 그런 일에 신경 쓰지 않지만⭐, 그래도 왠지 마음 한구석이 텅 빈 느낌이야.`,
          );
          await era.printAndWait(
            `${you.name}には、相手が何度も文面を直して、ようやく胸の高ぶりを押さえ込んだ様子が目に浮かんだ。`,
          );
          await era.printAndWait(
            `요즘 학생들은 타자 속도가 나 때보다 훨씬 빠르구나 감탄하며, 신중하게 한 자 한 자 답장을 적어 내려갔다.`,
          );
          await era.printAndWait(
            `전통적인 아이돌은 버추얼 아이돌보다 훨씬 더 생생한 「실재감」을 가지고 있었다. 비록 버추얼 아이돌의 등장이 커다란 열풍을 일으키긴 했지만.`,
          );
          await era.printAndWait(
            `그럼에도 버추얼 아이돌에게는 분명한 한계가 존재했다.`,
          );
          await era.printAndWait(
            `いちばん具体的なのは、${falcon.sex}は選手としてステージに立てないことだ。`,
          );
          await era.printAndWait(
            `레이스 ${falcon.uma_sex_title}인 ${falcon.name}は、レースでの活躍で、まだ観戦している観客に自分の物語を語れる。`,
          );
          await era.printAndWait(
            `기술이 나날이 발전하는 세상이라 해도, 그것만으로 전통적인 아이돌의 자리는 충분히 지켜질 수 있었다.`,
          );
          await era.printAndWait(
            `적절한 논거를 선택하며 전통적인 아이돌의 강점을 머릿속으로 정리해나갔다.`,
          );
          await falcon.say_and_wait(
            `고마워, ${callname}！ ファル子、アイドルの道、もっと頑張るよ！`,
          );
          await era.printAndWait(
            `곧이어 팔코에게서 기뻐하는 표정의 이모티콘이 도착했다.`,
          );
          await falcon.say_and_wait(
            `팔코, 하루빨리 톱 우마돌이 되고 싶어!`,
          );
          await era.printAndWait(
            `다음 날, 다시 활기를 되찾은 ${falcon.name}은 자신을 응원해주는 팬들에게 최고의 퍼포먼스를 선사했다.`,
          );
        }
      } else {
        await era.printAndWait(`이미 너무 늦은 시간이다. 할 말이 있다면 내일 하는 게 낫겠지.`);
        await era.printAndWait(
          `携帯をサイレントにして、${you.name}은(는) 다시 깊은 잠에 빠져들었다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = "새해의 기분!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}과 함께 새로운 한 해를 맞이했다.`,
      );
      await era.printAndWait(`트레이닝실
`);
      await falcon.say_and_wait(`해피 뉴 이어!`);
      await era.printAndWait(
        `${you.name}がトレーナー室の扉を開けると、こたつのそばに${falcon.name}が座っていた。`,
      );
      era.printButton(`팔코, 새해 복 많이 받아!`, 1);
      await era.input();
      await era.printAndWait(`挨拶を返して、${you.name}も潜り込んだ。`);
      await era.printAndWait(
        `暖かいこたつが外の寒さを払う。新しい一年が何をもたらすか思い描いていると、${you.name}は${falcon.name}の目と出会い、${falcon.sex}は${you.name}に微笑んだ。`,
      );
      await you.say_and_wait(`연말연시 신년 라이브는 어땠어?`);
      await era.printAndWait(
        `冷えた両手に少しずつ感覚が戻る。${you.name}はみかんを手に取り、皮を剥いた。`,
      );
      await falcon.say_and_wait(
        `어제 공연은 생각했던 것보다 훨씬 멋졌어! 팔코도 노래랑 춤에 대해서 공부가 많이 됐어!`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}는 말을 하면서, 너무 흥분한 나머지 삐져나온 꼬리를 다시 코타츠 속으로 집어넣었다.`,
      );
      await falcon.say_and_wait(`아차, 깜빡할 뻔했다!`);
      await era.printAndWait(
        `${falcon.name}이 교복 주머니 속에서 부스럭거리며 무언가를 찾기 시작했다.`,
      );
      await falcon.say_and_wait(
        `プレゼント、何がいいか迷ったんだけど、大事な人には自分で作ったものを渡すのが正解だって、ふと思ったの。`,
      );
      await falcon.say_and_wait(
        `${callname}, 지난 한 해 동안 수고 많았어. 새로운 한 해도 잘 부탁해!`,
      );
      await era.printAndWait(`팔코는 미소를 지으며 ${you.name}에게 카드를 건넸다.`);
      await you.say_and_wait(`그럼 감사히 받을게.`);
      await era.printAndWait(
        `こたつの中から手を伸ばし、余熱の残る年賀状を受け取った。${falcon.name}が摘まんでいた角に、小さなふくらみがある。`,
      );
      await you.say_and_wait(`올해 계획은 뭐야?`);
      await falcon.say_and_wait(
        `올해도 팔코는 팬 여러분 모두에게 귀여운 모습을 잔뜩 보여줄 거야!`,
      );
      await era.printAndWait(
        `言い終わるか終わらないかのうちに、${falcon.name}はものすごい速さで${you.name}の問いに答えた。`,
      );
      await you.say_and_wait(
        `평소에 고생하는 팔코니까, 지금은 좀 쉬어도 괜찮아.`,
      );
      await era.printAndWait(
        `${you.name}は${falcon.name}の丸い頭を撫でた。${falcon.sex}は逆らわず、気持ちよさそうな顔をした。`,
      );
      await falcon.say_and_wait(`에헤? 음― 팔코는 이제 어린애가 아닌걸.`);
      await era.printAndWait(
        `입으로는 항의하고 있었지만, 코타츠 밖으로 다시 탈출한 꼬리는 흥분한 듯 위아래로 살랑거렸다.`,
      );
      await you.say_and_wait(`ファル子が少し疲れてるなら\n`);
      era.printButton(`アイドルの道は、続ける練習にある（全能力+10）`, 1);
      era.printButton(`どこか遊びに行く？（スキルPt+100）`, 2);
      era.printButton(`いっしょに映画、見る？（体力+600）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `꾸준한 훈련은 탁월함으로 나아가는 열쇠이며, ${falcon.name}의 아이돌 인생에 있어 한순간도 소홀히 할 수 없었다.`,
          );
          await you.say_and_wait(`오늘은 스피드 연습을 좀 해보자.`);
          await era.printAndWait(
            `코타츠의 따스함이 아쉬웠지만, 다리를 밖으로 뺐다.`,
          );
          await falcon.say_and_wait(`${callname}?`);
          await era.printAndWait(
            `어느새 ${falcon.name}은 운동복으로 갈아입은 상태였다.`,
          );
          await era.printAndWait(
            `생각보다 훨씬 활기찬 ${falcon.name} が想像以上に元気なのは、${you.name}은(는) 안심했다.`,
          );
          await era.printAndWait(
            `그 후, ${you.name}과(와) ${falcon.name}은 함께 훈련장으로 향했다.`,
          );
          break;
        case 2:
          await falcon.say_and_wait(`응! 어디로 가는 게 좋을까?`);
          await era.printAndWait(
            `${falcon.name}은 주머니에서 스마트폰을 꺼내 혼잣말을 중얼거리며 빠르게 화면을 넘겼다.`,
          );
          await era.printAndWait(
            `언제나 빛나는 팔코와 비교했을 때, 이렇게 집중해서 고민하는 팔코의 모습은 매우 희귀했다.`,
          );
          await falcon.say_and_wait(`점심은 여기로 가자!`);
          await era.printAndWait(
            `${falcon.name}이 스마트폰 화면을 돌려 ${you.name} に見せた。近くで話題の人気タピオカ店だ。`,
          );
          await you.say_and_wait(
            `자기도 모르게 미소 짓는 팔코는 평소보다 더 귀여운데?`,
          );
          await era.printAndWait(
            `어느덧 미소를 띠고 있는 ${falcon.name}.`,
          );
          await falcon.say_and_wait(`아…`);
          await era.printAndWait(`${falcon.name}의 얼굴이 갑자기 붉어졌다.`);
          await falcon.say_and_wait(`心臓、速い……`, true);
          await falcon.say_and_wait(
            `えええ？ ファル子、変な顔してなかったよね？`,
          );
          await era.printAndWait(
            `慌てて表情を整えるファル子は、右往左往しながらしっぽをこたつへ押し込んだ。`,
          );
          await falcon.say_and_wait(`${callname}!`);
          await era.printAndWait(
            `${you.name}의 표정을 살핀 듯, ${falcon.name}은 다시 평소의 모습으로 돌아왔다.`,
          );
          await era.printAndWait(
            `しばらくして二人は、お茶の店で楽しい一日を過ごした。`,
          );
          break;
        case 3:
          await falcon.say_and_wait(
            `${falcon.uma_sex_title}와 트레이너가 같이 보기 좋은 영화는――`,
          );
          await falcon.say_and_wait(`팔코도 딱히 좋은 아이디어가 안 떠오르네?`);
          await era.printAndWait(`${you.name} 역시 딱히 좋은 생각이 나지 않았다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_15
  ws_47_15: (() => {
    const title = "목표! 사츠키상!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`훈련장
`);
      await falcon.say_and_wait(`하아, 하아……`);
      await you.say_and_wait(`수고했어.`);
      await falcon.say_and_wait(`${callname}、ファル子、前より速くなった？`);
      await era.printAndWait(`${you.name}은(는) 스톱워치를 확인했다.`);
      await you.say_and_wait(`……勝つには、まだ距離がある。`);
      await era.printAndWait(
        `사일런스 스즈카가 가르쳐 준 주법 기술이 있다 해도, 더트 레이스에 적응된 ${falcon.name}には、それでもきつい。`,
      );
      await falcon.say_and_wait(`……${callname}?`);
      await era.printAndWait(
        `${falcon.name}은 ${you.name}의 표정에서 무언가를 읽어냈는지, 물을 마시며 ${you.name}의 반응을 살폈다.`,
      );
      await you.say_and_wait(`조금 어렵긴 하지만, 연습을 더 하면 극복할 수 있을 거야.`);
      await era.printAndWait(
        `${you.name}은(는) 서류철을 내려놓고 ${falcon.sex}를 진지하게 바라보았다.`,
      );
      await falcon.say_and_wait(`${callname}, 지금 표정 되게 수상한데?`);
      await falcon.say_and_wait(`설마 벌써 좋아하는 사람이라도 생긴 거야?`);
      await era.printAndWait(
        `어째서 팔코가 그런 결론에 도달했는지는 모르겠지만, 왠지 모르게 안심이 되었다.`,
      );
      await you.say_and_wait(`그냥 좀 피곤해서 그래, 조금만 쉬면 괜찮아질 거야.`);
      await falcon.say_and_wait(`……ほんと？`);
      await era.printAndWait(
        `その疑いはもう払えないらしい。ますます首を傾げる${falcon.name}を見て、${you.name}は新しい話題を探した。`,
      );
      await you.say_and_wait(
        `그보다 팔코, 신곡 제작 소식을 기다려주는 팬분들한테 얼른 알려줘야 하지 않아?`,
      );
      await you.say_and_wait(`더 늦으면 다들 목 빠지게 기다릴 텐데.`);
      await falcon.say_and_wait(`에? 그러면 얼른 서둘러야겠네.`);
      await era.printAndWait(
        `입으로는 그렇게 말하면서도 ${falcon.sex}는 움직일 기미가 없었다. 꼬리만 의자를 탁탁 때리고 있을 뿐이었다.`,
      );
      await you.say_and_wait(`더 늦으면 다들 목 빠지게 기다릴 거라니까.`);
      await falcon.say_and_wait(`알았어~`);
      await era.printAndWait(
        `못 들었나 싶어 다시 한번 말했지만, ${falcon.name}은 여전히 그 자리에 앉아 있었다.`,
      );
      await era.printAndWait(
        `무슨 말을 더 해야 할까 고민하던 중, ${falcon.name}이 일어났다.`,
      );
      await falcon.say_and_wait(`그럼 팔코 다녀올게~`);
      await falcon.say_and_wait(`ざんねん。`, true);
      await era.printAndWait(
        `그 후 ${falcon.name}は夕日を浴びて、更衣室へ走っていった。`,
      );
      era.drawLine({ content: 'ライブ終了後' });
      await falcon.say_and_wait(`ありがとう⭐ 今日のライブも大好評だったね⭐`);
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await era.printAndWait(`まわりから、まばらな拍手が聞こえた。`);
      await falcon.say_and_wait(
        `그럼 팔코가 노래 한 곡 더 부를게♪―― 언제나 팔코를 응원해주는 당신에게 바칠게⭐`,
      );
      await era.printAndWait(`오늘의 공연도 대성공이었다.`);
      await era.printAndWait(
        `見物の人波がゆっくり散ったあと、遠くから見ていた${you.name}が${falcon.name}のほうへ歩いた。`,
      );
      await you.say_and_wait(
        `수고했어, 오늘 공연도 정말 인기가 많더라.`,
      );
      await era.printAndWait(
        `いつでもステージを気にかける${falcon.teen_sex_title}는 정말 사랑스러웠다.`,
      );
      await falcon.say_and_wait(
        `천만에! 만약 ${callname}이(가) 팔코를 발굴해주지 않았다면, 팔코는 지금도 공연 때문에 고민하고 있었을 거야.`,
      );
      await era.printAndWait(
        `자신은 그저 당연한 일을 했을 뿐이라고 말하려다, ${you.name}은(는) 입을 다물었다.`,
      );
      await falcon.say_and_wait(
        `오늘 콘서트도 끝났으니, 이제부턴 사츠키상을 위해 전력을 다해 준비하자!`,
      );
      await era.printAndWait(
        `${falcon.name}의 종이 가방을 건네받은 뒤, 너희는 트레센으로 돌아가는 길을 말없이 걸었다.`,
      );
      await falcon.print_and_wait(`손에 든 종이 가방이 어째서 이렇게나 무거운 걸까?`);
      await falcon.print_and_wait(
        `지나치게 흥분한 뇌는 마치 종이컵 속에서 끊임없이 소용돌이치는 검은 물체처럼 빙글빙글 돌고 있었다.`,
      );
      await you.say_as_passer_by_and_wait(`앳된 목소리`, `실례합니다!`);
      await era.printAndWait(
        `뒤에서 들려온 목소리에 ${you.name}과(와) ${falcon.name}은 서로 눈을 맞춘 뒤 뒤를 돌아보았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `幼い声`,
        `${falcon.name} 언니 공연 정말 멋졌어요! 저도 팔코 언니 같은 아이돌이 되고 싶어요!`,
      );
      await era.printAndWait(
        `중등부처럼 보이는 어린 ${falcon.uma_sex_title}였다. ${falcon.name}의 팬인 모양이었다.`,
      );
      await falcon.say_and_wait(
        `ありがとう！ 明日もファル子を応援してね、またこの場所で⭐`,
      );
      await era.printAndWait(
        `다시 아이돌 모드로 돌아온 ${falcon.name}이 기쁘게 양손을 흔들었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `幼い声`,
        `어떻게 하면 팔코 언니 같은 대단한 아이돌이 될 수 있나요?`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}は、二人についてもっと知りたいらしい。`,
      );
      await falcon.say_and_wait(
        `최고의 ${falcon.uma_sex_title} 아이돌이 되겠다는 목표를 세우고, 그걸 가슴속에 꼭 새긴 다음에 바로 행동에 옮기면 돼!`,
      );
      await era.printAndWait(
        `그렇구나, 하고 어린 ${falcon.uma_sex_title}는 고개를 끄덕였다.`,
      );
      await you.say_as_passer_by_and_wait(
        `어린 ${falcon.uma_sex_title}`,
        `옆에 계신 분은 팔코 언니한테 아주 소중한 사람이죠?`,
      );
      await falcon.say_and_wait(`すっごく大事な人だよ？`);
      await era.printAndWait(
        `${falcon.name}은 주체할 수 없이 들뜬 목소리로 ${falcon.sex}의 의문에 대답했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `어린 ${falcon.uma_sex_title}`,
        `팬들보다 더 소중한가요?`,
      );
      await falcon.say_and_wait(`에? 그건 말이지…`);
      await era.printAndWait(`${falcon.name}이 드물게 말을 멈췄다. 그리고,`);
      era.printButton(`팬들보다 더 소중한 사람이야.`, 1);
      era.printButton(`팬들과는 다른 의미로 똑같이 소중한 사람이야.`, 2);
      if ((await era.input()) === 1) {
        await you.say_as_passer_by_and_wait(
          `어린 ${falcon.uma_sex_title}`,
          `팬들보다 더 소중하다는 건 무슨 뜻이에요?`,
        );
        await era.printAndWait(
          `トレーニングでも日常でも、指導してくれる人だ。`,
        );
      } else {
        await you.say_as_passer_by_and_wait(
          `어린 ${falcon.uma_sex_title}`,
          `다른 의미라는 건 무슨 뜻이에요?`,
        );
        await era.printAndWait(
          `トレーニングでも日常でも、指導してくれる人だ。`,
        );
      }
      await you.say_as_passer_by_and_wait(
        `어린 ${falcon.uma_sex_title}`,
        `아, 트레이너님이시구나!`,
      );
      await era.printAndWait(
        `嬉しそうにまわりを回っていた小さな${falcon.uma_sex_title}が、突然手を掴んだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `어린 ${falcon.uma_sex_title}`,
        `わたしが入ったら、お兄さんはわたしの専属トレーナーになってくれますか？`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}를 육성하려면 이사장님께 신청해야 하고, 앞으로 꼬박 3년 동안의 훈련을 책임져야 한다.`,
      );
      await era.printAndWait(`솔직히 말해 꽤나 힘든 일이었다.`);
      await you.say_and_wait(
        `トレセンに入ったら、僕より優秀なトレーナーに出会えるよ。`,
      );
      await era.printAndWait(`なぜか、背中がひやりとする。`);
      await you.say_as_passer_by_and_wait(
        `어린 ${falcon.uma_sex_title}`,
        `알겠어요!`,
      );
      await era.printAndWait(
        `감사인사를 전한 뒤, 어린 ${falcon.uma_sex_title}는 쏜살같이 자리를 떠났다.`,
      );
      await you.say_and_wait(`팔코―`);
      await falcon.say_and_wait(`아무 일도 없었어⭐`);
      await era.printAndWait(
        `${falcon.name}은 마치 아무 일도 없었다는 듯 너를 빤히 쳐다보았다.`,
      );
      await you.say_and_wait(`これは、ややこしい`, true);
      await era.printAndWait(
        `その後の埋め合わせに、次の休日は${falcon.name}과 함께 외출하기로 약속했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = "합숙 시작!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `여름 합숙이 시작된 후, ${you.name}과(와) 팔코는 여름 특별 훈련을 위해 이사장님의 개인 해변에 도착했다.`,
      );
      era.printButton("와, 해변 진짜 넓다!", 1);
      await era.input();
      await era.printAndWait(`長い揺れの旅も、やっと報われた。`);
      await falcon.say_and_wait(`게다가 생각했던 것보다 훨씬 예뻐!`);
      await falcon.say_and_wait(`……음, 일단 사진부터 한 장 찍어서 팬들에게 보내줘야지——`);
      await era.printAndWait(
        `차에서 내리자마자 기다렸다는 듯이 찰칵찰칵 소리를 내며 사진을 찍어댔다.`,
      );
      era.printButton(`훈련도 잊으면 안 돼!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `응! ${callname}, 팔코의 활약하는 모습을 지켜봐 줘!`,
      );
      await falcon.say_and_wait(
        `アイドルのファル子も、${falcon.uma_sex_title} 로서의 ${
          falcon.name
        }も、ぜんぶやりきる！`,
      );
      era.printButton(`바로 그 기세야!`, 1);
      await era.input();
      era.println();
      await falcon.say_and_wait(
        `——그런 고로, 팔코의 첫 번째 목표는! 근처 마을 주민들에게 팔코를 알리는 거야!`,
      );
      era.printButton(`팔코, 화이팅!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドル、涼夏ライブ作戦。この砂浜からスタート！`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${falcon.name}이 공연 장소를 확정한 후, 노랫소리와 함께 여름 합숙이 시작되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_30
  ws_47_30: (() => {
    const title = "축제";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`팔코, 제대로 준비하고 올게!`);
      await era.printAndWait(
        `${falcon.name}은 그렇게 말하며 서둘러 숙소 안으로 달려 들어갔다.`,
      );
      await era.printAndWait(
        `여름 공연이 끝난 후, 분위기가 너무 좋았던 나머지 추가된 앵콜곡 때문에 종료 시간이 한 시간이나 늦어졌다.`,
      );
      await era.printAndWait(
        `계획했던 불꽃놀이 대회를 보러 갈 일정이 순식간에 빠듯해졌다.`,
      );
      await era.printAndWait(
        `숙소에서 들려오던 소란스러운 소리가 점차 잦아들었다. 불꽃놀이 시작까지는 채 한 시간도 남지 않았다.`,
      );
      await era.printAndWait(
        `올해의 불꽃놀이 대회는 마을 중심에서 열린다. 근처에서 가장 보기 좋은 명당은 마을에서 멀지 않은 산 위였다.`,
      );
      await era.printAndWait(
        `평소 걸음걸이로는 산기슭까지 30분, 산을 오르는 데 추가로 15분이 걸린다. 그 점을 생각하니 초조해지기 시작했다.`,
      );
      await falcon.say_and_wait(`お待たせ！`);
      await era.printAndWait(`드디어 왔구나.`);
      await era.printAndWait(
        `그렇게 말하려 했으나, 유카타로 갈아입은 ${falcon.name}은 평소보다 훨씬 더 귀여웠다.`,
      );
      await era.printAndWait(
        `唇が焦り、心臓が急に速くなり、額にも汗が浮かぶ。`,
      );
      await falcon.say_and_wait(`설마 이 옷, 별로야?`);
      await era.printAndWait(
        `분홍색 유카타로 갈아입은 ${falcon.name}はしなやかな体を惜しみなく見せ、遠くから見ると一輪の花のように愛らしい。`,
      );
      await you.say_and_wait(
        `ファル子がいちばん輝く${falcon.uma_sex_title}じゃなかったら、その称号を名乗れる人は世界にいないよ。`,
      );
      await falcon.say_and_wait(
        `${callname}이 그렇게 말해주니 팔코, 조금 부끄러운걸.`,
      );
      await era.printAndWait(`${falcon.name}은 수줍은 듯 고개를 숙였다.`);
      await you.say_and_wait(
        `비록 첫 번째 공연 시작은 놓치겠지만, 두 번째 타임에는 충분히 맞출 수 있을 거야.`,
        true,
      );
      await falcon.say_and_wait(`${callname}、ファル子の手、握っていい？`);
      era.printButton(`팔코의 손을 잡는다`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は小さな手を掌に収めた。ファンの前で輝くいつもの姿より、少し艶がある。`,
      );
      await falcon.say_and_wait(`팔코를 꽉 잡아야 해?`);
      await era.printAndWait(`응?`);
      await falcon.say_and_wait(`아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.name}은 몰래 입을 가리며 웃더니, 곧 ${you.name}의 발걸음을 따라갔다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `축제가 열리는 여러 장소 중 시야가 가장 좋은 곳은 마을에서 떨어진 신사였다.`,
      );
      await era.printAndWait(
        `신사로 통하는 길은 긴 계단을 올라가야 했기에, 다른 곳에 비해 인파가 조금은 한산했다.`,
      );
      await falcon.say_and_wait(`${callname}, 조금만 더 서두르지 않으면 시작해버릴 거야!`);
      await era.printAndWait(
        `${you.name}보다 한 단계 높은 계단에 선 ${falcon.name}は少し先の山腹を見た。`,
      );
      await you.say_and_wait(`ファル子、待って。速すぎて、ちょっと休ませて。`);
      await era.printAndWait(
        `${falcon.name}には尽きない元気があるらしい。最初は${you.name}が${falcon.sex}の手を引いていたが、少し歩くとすぐ${falcon.sex}が${you.name}を引っ張り、石段を進み続けた。`,
      );
      await falcon.say_and_wait(`${callname}의 체력은 생각보다 더 별로네!`);
      await era.printAndWait(
        `${falcon.uma_sex_title}は三女神の寵児だ、と言うべきか。`,
      );
      await era.printAndWait(
        `人間なら体力を使い切る道のりも、${falcon.uma_sex_title}には準備運動にもならないのだろう。`,
      );
      await era.printAndWait(
        `息を整えながら左右を見ると、神社へ向かう道に人影はほとんどない。祭りの音楽も終わりに近づき、花火大会はもうすぐ始まる。`,
      );
      await you.say_and_wait(
        `팔코와 불꽃놀이의 시작을 함께 보지 못하는 건 조금 아쉽네.`,
      );
      await era.printAndWait(
        `${you.name}은 약간 아쉬운 말투로 ${falcon.name}에게 말했다.`,
      );
      await falcon.say_and_wait(
        `${callname}은(는) 그렇게 팔코랑 불꽃놀이를 같이 보고 싶어?`,
      );
      await era.printAndWait(
        `${falcon.name}의 말투에 형용하기 어려운 묘한 느낌이 섞여 있었다.`,
      );
      era.printButton(`팔코와 그 순간을 기록하고 싶어`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은 잠시 생각한 후 솔직하게 ${falcon.sex}에게 털어놓았다.`,
      );
      await falcon.say_and_wait(`그럼 팔코를 꽉 잡아!`);
      await era.printAndWait(
        `細い${falcon.teen_sex_title}が${you.name}을(를) 끌어당겼다.`,
      );
      await falcon.say_and_wait(`このまま一気に石段を駆け上がるよ！ \n\n`);
      await era.printAndWait(
        `말로는 표현하기 힘든 감각이었다. 마치 마을에서 파는 매운탕이 얼굴에 통째로 쏟아진 것처럼, 바람을 가르며 전해지는 통증과 심장에 가해지는 거대한 압박감에 ${you.name}はほとんど恐怖に落ちた。`,
      );
      await era.printAndWait(
        `それでも地獄のような経験は想像より早く退いた。${falcon.name}이 ${you.name}의 어깨를 살며시 흔들었을 때야 비로소 산 중턱에 도착했다는 것을 깨달았다.`,
      );
      await era.printAndWait(
        `なぜ道で${falcon.uma_sex_title}を乗り物にして通勤する人がいないのか、急にわかった。`,
      );
      await falcon.say_and_wait(`${callname}, 불꽃놀이 시작했어!`);
      await era.printAndWait(
        `ぱん、ぱん、火のような花が夜空を照らし、花火大会は本番に入った。`,
      );
      await era.printAndWait(
        `동시에 하늘에서 피어나는 불꽃은 이 축제라는 공연의 앵콜 공연처럼 느껴지기도 했다.`,
      );
      await era.printAndWait(
        `ふと、${you.name}はダートを走る${falcon.name}を思い出した。`,
      );
      await era.printAndWait(`어쩌면 저 불꽃처럼, 찰나의 순간일지도 모른다.`);
      await era.printAndWait(`그렇게 생각하니 조금은 서글퍼졌다.`);
      await falcon.say_and_wait(
        `きれい！ ファル子がトップアイドルになった瞬間には、これ以上ぴったりなものはないよね！`,
      );
      await era.printAndWait(
        `${you.name}의 곁에 있는 ${falcon.name}は、花火に炎のような橙を染められていた。`,
      );
      era.printButton(`来年もいっしょに花火見よう`, 1);
      await era.input();
      await era.printAndWait(
        `하늘의 꽃들이 줄지어 피어나고, 불꽃놀이 대회도 서서히 끝을 향해 달려갔다.`,
      );
      await you.say_and_wait(`그때는 분명 지금보다 더 눈부시게 빛나고 있을 거야!`);
      await era.printAndWait(`${falcon.name}이 ${you.name}을(를) 바라보았다.`);
      await falcon.say_and_wait(`응! 그때도 잘 부탁해!`);
      await era.printAndWait(
        `가장 아름다운 불꽃이 ${you.name}의 눈앞에서 피어올랐다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_40
  ws_47_40: (() => {
    const title = "팔콘의 결단";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`상점가 광장
`);
      await falcon.say_and_wait(
        `いつもファル子を黙って応援してくれて、ありがとう⭐`,
      );
      await falcon.say_and_wait(
        `これ、ファル子が昨日一晩かけて作った小さな贈り物。ファル子の気持ち、受け取ってね❤`,
      );
      await era.printAndWait(
        `${you.name} と${falcon.name}の宣伝が続いて、慕って来る人が増えた。小さな芝生は、いま大勢に囲まれている。`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await era.printAndWait(
        `인파에 둘러싸인 채 ${falcon.uma_sex_title}アイドルの道を歩く${falcon.name}.`,
      );
      await era.printAndWait(
        `비록 잔디의 스타 아이돌들에 비하면 인지도는 떨어졌지만, 더트 팬들이 공연을 보러 오는 열정만큼은 잔디 팬들보다 훨씬 뜨거웠다.`,
      );
      await era.printAndWait(
        `理由は簡単だ。芝を見るファンには、同時期に選べる有名な競走${falcon.uma_sex_title}が何人もいる。ダート専門の${falcon.uma_sex_title}アイドルで、人気と実力を兼ねる${falcon.name}は${falcon.sex}だけだ。`,
      );
      await era.printAndWait(`${falcon.name}이 받고 있을 압박감이 어느 정도일지 짐작이 갔다.`);
      await era.printAndWait(`顕微鏡の下で集めた太陽光のようだ。`);
      await you.say_and_wait(
        `${falcon.name}、最近の睡眠、どんどん短くなってる。本当に大丈夫？`,
      );
      await era.printAndWait(
        `最近、トレーナー室は${falcon.name}の仮眠場所になった。それも、あなたの強制があってのことだ。`,
      );
      await era.printAndWait(
        `トレーニング、アイドル活動、ファンレターへの返事（あなたの確認を経て）、次のゲリラライブの準備。`,
      );
      await era.printAndWait(
        `번거로운 활동들이 ${falcon.sex}の心力を大量に奪っている。`,
      );
      await falcon.say_and_wait(`……それと！ ファル子、いいお知らせがあるよ！`);
      await falcon.say_and_wait(
        `팔코, 다음에 열릴 JBC 클래식하고 도쿄 대상전에 출주하기로 했어!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `この先もファル子の活躍が見られる！ 最高だ！`,
      );
      await falcon.say_and_wait(
        `다음 레이스에서도 팔코는 계속해서 빛날 거야! 여러분 모두 꼭 현장에 보러 와줘야 해!`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `꼭 갈게요!`);
      await falcon.say_and_wait(`ありがとう⭐`);
      await era.printAndWait(
        `最後のファンが去ったあと、あなたは少し離れた場所から${falcon.name}へ歩いた。`,
      );
      era.printButton(`수고했어.`, 1);
      await era.input();
      await era.printAndWait(
        `정리란, 구경꾼들이 남기고 간 쓰레기를 전부 깨끗하게 치우는 것을 의미한다.`,
      );
      await era.printAndWait(
        `最初${falcon.name}は自分で掃除すると言ったが、もう限界だろう、とあなたが強引に止めた。`,
      );
      await falcon.say_and_wait(`……${callname}?`);
      await era.printAndWait(
        `木陰でうたた寝する、いつもの疲れ切った${falcon.name}とは違う。${falcon.sex}の、渇いた目がまっすぐあなたを見ている。`,
      );
      await falcon.say_and_wait(
        `팔코는 이제 합격점인 ${falcon.uma_sex_title} 아이돌이 된 걸까?`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title} 아이돌로서는 세상에 단 하나뿐인 존재야.`,
      );
      await falcon.say_and_wait(
        `……もう少し頑張ればいいだけ。だから${callname}、安心して！`,
      );
      await era.printAndWait(
        `……${falcon.sex}の目はあなたではなく、後ろの何かを見ていた。`,
      );
      await falcon.say_and_wait(
        `ファル子、ひとりは嫌いなんだ。だから、どんなことがあってもいちばん大きなステージで輝きたい。`,
      );
      await falcon.say_and_wait(`……花火みたいに、嫌な夜を裂いて。`);
      await falcon.say_and_wait(`ファル子みたいな人にもっと、答えを届けたい。`);
      await era.printAndWait(
        `말을 하던 도중 ${falcon.sex}の目から涙が落ちた。`,
      );
      await falcon.say_and_wait(`팔코가 노력할 수 있는 방향은 더트뿐이지만 말이야.`);
      await falcon.say_and_wait(
        `……사츠키상 같은 커다란 무대에 다시 한번 서보고 싶어.`,
      );
      await era.printAndWait(
        `それから疲れ切った${falcon.teen_sex_title}는 눈을 감았다.`,
      );
      await era.printAndWait(
        `트레이너로서 담당 ${falcon.uma_sex_title}をこんなところまで追い込めば、もう役目を果たしていない。`,
      );
      await era.printAndWait(
        `担当の意見を尊重する、と言っても、自分から逃げるための言葉にすぎない。`,
      );
      await era.printAndWait(`いつにも増して、自分の弱さが憎い。`);
      await you.say_and_wait(`……이대로 둘 수는 없어.`);
      await era.printAndWait(
        `大切な${falcon.teen_sex_title}를 조심스럽게 안아 올렸다. 품 안에서 느껴지는 무게는 트레이너로서 짊어진 책임의 무게였다.`,
      );
      await you.say_and_wait(`……적어도 트레이너로서의 책임은 다하겠어.`);
      await era.printAndWait(
        `결연한 각오를 다지자 팔 근육에 통증이 전해져 왔지만, 내심 해방감을 느꼈다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_41
  ws_47_41: (() => {
    const title = "결단의 대가";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `十一月の気候とは逆に、${falcon.name}のアイドル活動休止の報道が熱を帯びている。`,
      );
      await era.printAndWait(
        `경기장과 무대를 가리지 않고 쉼 없이 빛나기로 유명했던 ${falcon.name}도 마침내 한계에 도달했다.`,
      );
      await era.printAndWait(`少なくとも、対外的にはそう説明されている。`);
      await era.printAndWait(
        `突然の出来事で、当事者は口を閉ざしている。そのせいで、この件はますます現実離れしていった。`,
      );
      await era.printAndWait(
        `지나치게 터무니없는 추측을 제외하면 주된 설은 두 가지였다.`,
      );
      await era.printAndWait(`${falcon.name}に恋人ができ、まもなく引退する。`);
      await era.printAndWait(
        `${falcon.name}は脚にかなり重い怪我を負い、いま病院で療養中で、完治の見込みは低く、将来は表舞台から消えるかもしれない。`,
      );
      await era.printAndWait(`어느 쪽이든 아이돌 활동에는 치명적인 타격이었다.`);
      await you.say_and_wait(`이미 결정을 내린 이상 되돌아갈 길은 없어.`);
      await era.printAndWait(
        `잠정적인 아이돌 활동 중단을 선언했을 때, 예상했던 다툼은 일어나지 않았다. ${falcon.sex}는 그저 차분하게 사실을 받아들였다.`,
      );
      await era.printAndWait(
        `……하지만 나의 독단적인 행동 때문에 ${falcon.sex}가 성장할 기회를 잃게 된 건 아닐까.`,
      );
      await era.printAndWait(
        `나의 주장이 결국 이렇게 심각한 결과를 초래했다면, 돌이켜봤을 때 그 결정은 옳았던 것일까?`,
      );
      await you.say_and_wait(
        `……最後に正しかったかはわからない。僕は、正しいと思ったことをしただけだ。`,
      );
      await era.printAndWait(`설령 그로 인해 대가를 치러야 한다 할지라도.`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `ああ、こんにちは。${falcon.name}の${callname}ですか？`,
      );
      await era.printAndWait(
        `いつの間にか廊下にいた男が、ようやく獲物を見つけたように目を輝かせ、早足で近づいてくる。おかしい。今回の行程は、誰にも知らせていないはずだ。`,
      );
      await you.say_and_wait(
        `맞습니다만, 무슨 일이시죠? 혹시 팔코의 사인을 받으러 오신 거라면 죄송하지만 ${falcon.sex}는 방금 내려갔습니다.`,
      );
      await era.printAndWait(
        `……そういえば、この個室はいちばん奥だ。${falcon.name}을 찾으러 온 거라면 길에서 마주쳤어야 정상이다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `아…… 죄송합니다. 그저 개인적인 호기심일 뿐입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `팔코보다 ${falcon.sex}의 트레이너에게 더 흥미가 있거든요.`,
      );
      await era.printAndWait(`何かを隠すように、マスクも手袋もしている。？`);
      await you.say_and_wait(`……いや、違う。何かがおかしい。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `그대로 지옥에나 떨어져라!`,
      );
      await era.printAndWait(`한 가닥의 하얀 빛이 예고도 없이 번뜩였다.`);
      await you.say_and_wait(`윽.`);
      await era.printAndWait(
        `팬들의 보복이 있을지도 모른다고 생각은 했지만, 설마 이렇게 극단적인 일이 일어날 줄은 몰랐다.`,
      );
      await era.printAndWait(
        `脳は、目の前の現実離れした出来事をまだ処理している。`,
      );
      await era.printAndWait(
        `だからあなたは、その場で呆然と、小刀が腹に刺さるのを見ていた。`,
      );
      await era.printAndWait(`そのまま、なすすべなく終わりを迎える。`);
      await you.say_and_wait(`윽!`);
      await era.printAndWait(`——無意識にビジネスバッグを緩衝にしなければ。`);
      await era.printAndWait(`칼날은 가죽 서류 가방에 깊은 자국을 남겼다.`);
      await you.say_as_passer_by_and_wait(`광신도 팬`, `제길.`);
      await era.printAndWait(
        `それでも突然の衝撃で、無意識に顔を上げ、尻餅をつきかけた。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `팔코는 저렇게 완벽한데, 왜 너 같은 걸 좋아하는 거지?`,
      );
      await era.printAndWait(
        `感触が違うと気づいた暴徒は、目の前の失敗に激昂した。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `泣き叫びながら、そのまま地獄へ落ちろ！`,
      );
      await era.printAndWait(
        `小刀は抜かず、その勢いで壁まで追い詰めようとする。`,
      );
      await you.say_and_wait(`제길, 도망칠 곳이 없어.`);
      await era.printAndWait(
        `小刀は抜かず、踏み場を失ったあなたを、そのまま壁へ追い詰める。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `그 풋풋하고 섬세했던 팔코가 어째서 갑자기 활동 중단을 선언한 거냐고――`,
      );
      await era.printAndWait(
        `理性が怒りに溶けたのか、熱を増すファンは小刀をさらに前へ押し込んだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `――과연 그렇군, 이제 알겠어.`,
      );
      await era.printAndWait(`一瞬迷った顔の熱狂者は、悟ったように頷いた。`);
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `お前がいるから、僕らのファル子はこうなった。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `네가 사라지면 팔코는 예전의 모습으로 돌아오겠지?`,
      );
      await era.printAndWait(
        `アドレナリンが上がったあなたは、目の前の絶望を見ていた。`,
      );
      await era.printAndWait(
        `下腹に薄い痺れが走る。誰かが氷を腹へ押し込んだようだ。盾にしたフォルダの下から滑った小刀は、確かに標的へ当たった。`,
      );
      await you.say_as_passer_by_and_wait(`광신도 팬`, `쳇.`);
      await era.printAndWait(
        `本来は心臓を狙った一刺しだ。バッグに阻まれ、次善として腹を狙った。`,
      );
      await you.say_and_wait(
        `教えてください。なぜ${falcon.name}は、まだ戻らないのですか。`,
      );
      await era.printAndWait(`圧倒的に不利な局面で、かえって冷静になった。`);
      await era.printAndWait(
        `激しい心拍、雪のように消える体力、ほとんど麻痺した体。あなたはかつてない集中で、突破の道を探した。`,
      );
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `……お前みたいな許されざる者に、説明する必要はない。`,
      );
      await you.say_and_wait(`지금이야!`, true);
      await era.printAndWait(
        `방금 전의 대화는 상대를 방심하게 만들기 위한 것이었다. 상대가 대답을 생각하느라 몸의 방어를 소홀히 하게 만든 것이다.`,
      );
      await era.printAndWait(
        `오히려 상대를 더 자극할 위험도 있었지만, 지금은 단 하나의 가능성에 도박을 걸 수밖에 없었다.`,
      );
      await era.printAndWait(
        `不意打ちが成功して一瞬緩んだ相手の股間へ、あなたは思いきり蹴り込んだ。`,
      );
      await you.say_as_passer_by_and_wait(`광신도 팬`, `아아아악!`);
      await era.printAndWait(
        `痛みが麻痺を上回ったのか、相手の手がふっと緩んだ。`,
      );
      await you.say_and_wait(`기회다!`, true);
      await era.printAndWait(
        `相手が苦しんで屈む隙に、ビジネスバッグを思いきり叩きつけた。`,
      );
      await you.say_as_passer_by_and_wait(`광신도 팬`, `윽――`);
      await era.printAndWait(`手に残る痺れからして、この一打はかなり重い。`);
      await you.say_as_passer_by_and_wait(
        `광신도 팬`,
        `……거의 다 왔는데!`,
      );
      await era.printAndWait(
        `退路がなく、かろうじて立つ悪魔は、いつ倒れてもおかしくない。`,
      );
      await era.printAndWait(`だが、あなたの状態はもっと悪い。`);
      await you.say_and_wait(`이렇게 끝나는 건가?`, true);
      await era.printAndWait(`目眩が雪のように降ってくる。`);
      await era.printAndWait(
        `혀끝을 깨물어 그 통증으로 정신을 붙잡은 뒤, 온 힘을 다해 서류 가방을 내던졌다.`,
      );
      await era.printAndWait(
        `첫 번째 공격은 상대가 고개를 돌려 피했지만, 곧바로 ${you.name} は体を武器にして、正面からぶつかった。`,
      );
      await era.printAndWait(
        `상대의 뒷머리가 유리 테이블에 강하게 부딪혔고, 그는 완전히 기절했다.`,
      );
      await you.say_and_wait(`구급차를 불러야 해…`, true);
      await era.printAndWait(
        `全力で電話を終えたあと、${you.name} も気を失った。`,
      );
      await era.printAndWait(`${you.name} の視界は、ゆっくり霞んでいく。`);
      await era.printAndWait(`멀어져가는 의식 속에서 마지막으로 본 것은――`);
      await era.printAndWait(`新しい時代の船に、間に合わなかった乗客だった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_42
  ws_47_42: (() => {
    const title = "수선화";
    /**
     * 好きになればなるほど、「耐えられないやり方」の定義は厳しくなる。何かをする動力も強くなる。
     * 何もしないことは、自分にとって苦痛だ。奥底には二重の裏切りがある——好きな相手を裏切った感覚と、自分の好きそのものを裏切った感覚。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`팬 습격 사건이 일어난 지 일주일이 지났다.`);
      await era.printAndWait(
        `事件の中心にいた、あなたと${falcon.name}の身の安全を考え。`,
      );
      await era.printAndWait(`学園はしばらく、外出を制限すると決めた。`);
      await era.printAndWait(`……ある意味では、救いでもある。`);
      await era.printAndWait(
        `忘れようと心の中で繰り返しても、あの空虚な顔が勝手に浮かぶ`,
      );
      await you.say_and_wait(`존재에 대한 불안이었을까?`, true);
      await era.printAndWait(
        `어떤 각도에서 봐도 아무 것도 없는, 기술도 경력도 전무한 상태에서는 어떤 기회조차 처음부터 입장권조차 없었을 것이다.`,
      );
      await era.printAndWait(
        `最初は、この道に向いていないのかもしれない、と別の方面へ逃げられた。`,
      );
      await era.printAndWait(
        `하지만 새로운 업계에서도 똑같은 곤경에 처하게 되기 전까지는 말이다.`,
      );
      await era.printAndWait(`돌이켜보면 그저 헛되이 몇 년의 세월을 보낸 셈이었다.`);
      await era.printAndWait(
        `한때는 뜨거운 열정으로 무언가를 이루고 싶었겠지만, 현실 앞에서 자신은 아무것도 할 수 없다는 사실을 강제로 인정해야만 했다.`,
      );
      await era.printAndWait(
        `現状に屈しない人にとって、自分の存在を証明することは、命より大事だ。`,
      );
      await era.printAndWait(
        `存在がなければ、命は表示も出力もなく、エネルギーだけを消費する過程にすぎない。`,
      );
      await era.printAndWait(
        `만약 이럴 때 스포트라이트 아래에 설 기회가 생긴다면?`,
      );
      await era.printAndWait(`설령 그 일이 당신들에게 큰 상처를 준다고 해도.`);
      await era.printAndWait(`すまない。だが、僕は存在しなければならない。`);
      await era.printAndWait(
        `미망 속에서 자신의 존재를 증명할 대상을 찾아, 스스로를 그 색으로 물들이고, 같은 색을 가진 군중 속에 섞여 미망하는 존재가 아닌 척 연기한다.`,
      );
      await era.printAndWait(
        `自分の結論が間違っているかもしれないと知りつつ、いまは仮にこの見方で自分を納得させるしかない。`,
      );
      await era.printAndWait(
        `이런 관점에서 본다면, 지난주의 습격 사건은 단지 존재감을 증명하고 싶었던 절망적인 사람이 가장 화제가 될 만한 주제를 찾은 것에 불과했다.`,
      );
      await era.printAndWait(
        `相手がたまたま${falcon.name}의 팬이었을 뿐이었다.`,
      );
      await era.printAndWait(
        `${falcon.name}がトレーナー室の扉をそっと開け、無理に微笑んだとき。`,
      );
      await era.printAndWait(
        `あなたは${falcon.name}への視線を下げ、トレーニング計画を眺めてぼんやりした。`,
      );
      await era.printAndWait(
        `先週の襲撃は危うかったが、実際の傷は下腹に一本の切り傷があるだけだった。`,
      );
      await era.printAndWait(
        `トレセンは、トレーナーが担当の${falcon.uma_sex_title}と衝突したときの暴力を想定し、制服の一部にケブラーを使っている。`,
      );
      await era.printAndWait(
        `분노한 ${falcon.uma_sex_title}の蹴りで重傷を防ぐためのものだが、防刃でも意外と効いた。`,
      );
      await era.printAndWait(`なんと言うか。災い転じて福、か。`);
      await you.say_and_wait(`팔코…… 아니, ${falcon.name}.`);
      await era.printAndWait(
        `散った思考を、目の前の${falcon.teen_sex_title}へ戻す。その芸名で${falcon.sex}を呼んでいいか、迷った。`,
      );
      await falcon.say_and_wait(`${callname}, 팔코는 괜찮아.`);
      await era.printAndWait(
        `想像より強い${falcon.teen_sex_title}は、嬉しいと同時に、少し悲しい。`,
      );
      await era.printAndWait(
        `그늘진 표정의 ${falcon.teen_sex_title}가 고개를 숙였다.`,
      );
      await falcon.say_and_wait(
        `팔코는 ${falcon.uma_sex_title}アイドルとして、こういう不安は薄々あった。むしろ、いつか来るものだと思ってた。`,
      );
      await falcon.say_and_wait(
        `그러니까 ${callname}이 사과할 게 아니라, 오히려 팔코가 사과해야 할 쪽이야.`,
      );
      await era.printAndWait(
        `${falcon.name}の視線は上下に揺れ、こういう話は苦手らしい。`,
      );
      await era.printAndWait(`あなたは深く息を吸い、続けようとした——`);
      await falcon.say_and_wait(`팔코는 알고 있어.`);
      await era.printAndWait(
        `鏡のような湖より静かな${falcon.name}が顔を上げ、あなたの目を見た。`,
      );
      await falcon.say_and_wait(
        `팔코의 팬분들은 팔코에게 희망을 걸고 있어. 그러니까 팔코에게는 그 어떤 오점도 있어서는 안 돼.`,
      );
      await falcon.say_and_wait(
        `하지만 팔코는 그렇게 생각하지 않아. 아이돌이 되기 위해 흘린 땀방울이 있고, 거기에 아주 약간의 운만 따라준다면,`,
      );
      await falcon.say_and_wait(
        `ファル子みたいな${falcon.uma_sex_title}でも、ステージの真ん中で輝ける……でも……こんなことするの、おかしくない？`,
      );
      await era.printAndWait(`その悲しい目から逃げたいのに、視線を外せない。`);
      era.printButton(`ファル子は、なぜアイドルになりたいの？`, 1);
      await era.input();
      await era.printAndWait(`逃げるほうが、逃げないより重いことになる。`);
      await falcon.say_and_wait(
        `……팔코처럼 외로운 사람들도 잠시나마 고독한 고통을 잊게 해주고 싶어서.`,
      );
      await era.printAndWait(`그랬다. 바로 그것 때문이었다.`);
      await era.printAndWait(`자신의 불행을 아무리 한탄해도, 짊어진 책임은 변하지 않는다.`);
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルとしてここまで順調に来られたこと自体、想像しにくい奇跡の幸運だ。`,
      );
      await you.say_and_wait(
        `わかってる。心臓を刳り抜かれたみたいな、暗い傷が、いつでも血を流してる。`,
      );
      await you.say_and_wait(
        `아무리 수많은 꽃다발과 박수갈채가 그 판단을 부정하더라도, 공연이 끝나고 무대에서 내려올 때면 그 상처에서 흐르는 피가 자신에게 질문을 던지겠지.`,
      );
      era.printButton(
        `罪悪感を軽くするための涙より、アイドルにはやるべきことがある`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `ファル子が考えるべきは、次のレースの勝ち方と、シニア級のダートだ。`,
      );
      await you.say_and_wait(
        `팬들의 기대에 부응하는 것뿐만 아니라, 더 중요한 건 더트 ${falcon.uma_sex_title}アイドルを目指す後輩のためでもある。`,
      );
      await you.say_and_wait(
        `방향이 보이지 않으면 어때, 좀 틀리면 또 어때! 이 상처를 안은 채 그냥 계속 나아가는 거야! 그렇게 경기장 위에서, 무대 중심에서 계속 빛나는 거야!`,
      );
      await you.say_and_wait(
        `${falcon.couple_title}に見せてやれ。初代の${falcon.uma_sex_title}アイドル、${falcon.name}がどこまで行けるか！`,
      );
      await era.printAndWait(
        `세상에는 올바른 방향과 올바른 목표를 동시에 만족하여 이뤄지는 성공이란 존재하지 않는다.`,
      );
      await era.printAndWait(
        `真面目に考えれば、正しい方向も正しい目標も、存在しない。`,
      );
      await era.printAndWait(
        `하지만 방향과 목표가 틀렸을지라도 우리는 수많은 성공을 일궈내지 않았는가?`,
      );
      await era.printAndWait(
        `前半の旅の成功は全部そうやって来た。後半の成功だけが、間違った方向と間違った目標から生まれない理由があるか。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_48
  ws_47_48: (() => {
    const title = "크리스마스의 기도";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`나카야마 경마장 · 아리마 기념`);
      await era.printAndWait(
        `観客席の吐息が薄い白い霧になり、冬の競馬場に漂っている。`,
      );
      await era.printAndWait(`올해의 아리마 기념 열기 또한 여전히 뜨거웠다.`);
      await era.printAndWait(
        `あなたと${falcon.name}は観客席に座り、実況が有馬記念へ向かうスターの競走${falcon.uma_sex_title}たちを紹介するのを聞いた。`,
      );
      await you.say_and_wait(
        `올해 아리마 기념에서 가장 주목받는 ${falcon.uma_sex_title}는 다이와 스칼렛이야.`,
      );
      await falcon.say_and_wait(`스칼렛 씨 말이지?`);
      await era.printAndWait(
        `떠들썩한 소음 속에서 ${falcon.uma_sex_title}の自慢の聴力も枷になる。`,
      );
      await you.say_and_wait(`귀는 잘 보호하고 있어?`);
      await falcon.say_and_wait(`ファル子、イヤーマフちゃんと付けてるよ！`);
      await era.printAndWait(
        `リボン付きのかわいいイヤーマフが、激しすぎる歓声でファル子が一時的に聞こえなくなるのを防いでいる。`,
      );
      await you.say_and_wait(`그럼 이제 우리 자리를 찾으러 가자.`);
      await falcon.say_and_wait(`응! 저기…… ${callname}.`);
      await falcon.say_and_wait(`今日だけ、名前で呼んでいい？`);
      await era.printAndWait(
        `意外だった。${falcon.name}は、アイドルとしての肩の荷にこだわらなくなっていた。`,
      );
      await you.say_and_wait(`${falcon.name}, 같이 가자.`);
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `観客がだいたい着席してから、二人は自分の席を見つけた。`,
      );
      await you.say_and_wait(`올해 아리마 기념도 여전히 성황이네.`);
      await falcon.say_and_wait(`スカーレットさんも出るんだって！`);
      await era.printAndWait(
        `파란색과 흰색이 섞인 승부복을 입은레이스 ${falcon.uma_sex_title}가 경기장에 들어섰다.`,
      );
      await era.printAndWait(
        `いちばん目を引くのは、${falcon.sex}의 길게 늘어진 갈색 트윈테일이었다.`,
      );
      await falcon.say_and_wait(
        `スカーレットさんの勝負服、テレビで見るよりきれい！`,
      );
      await you.say_and_wait(`今度は${falcon.sex}、どんな走りをするのかな。`);
      era.drawLine({ content: 'ウィンナーズステージ後' });
      await era.printAndWait(`다이와 스칼렛은 멋지게 1위를 차지했다.`);
      await era.printAndWait(`무대 위에서의 퍼포먼스 또한 사람들의 가슴을 뛰게 만들었다.`);
      await era.printAndWait(`それが終わってから、`);
      await falcon.say_and_wait(`아리마 기념 무대는 정말 크네.`);
      await falcon.say_and_wait(
        `팔코도 언젠가 저런 무대에 설 수 있으면 좋을 텐데.`,
      );
      await era.printAndWait(
        `携帯の知らせでは、今年の観客は十一万人を超えた。`,
      );
      await era.printAndWait(`それに比べて、東京大賞典は二、三万人だ。`);
      await falcon.say_and_wait(
        `그래도 팔코는 톱 아이돌로서 더트 레이스도 인기 있게 만들 거야!`,
      );
      await era.printAndWait(`正統派アイドル、ということか。`);
      await you.say_and_wait(
        `그럼 먼저 도쿄 대상전부터 시작해서, 그 목표를 향해 조금씩 나아가자!`,
      );
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(`스마트폰을 꺼내 시간을 확인하니 벌써 통금 시간이 다 되어가고 있었다.`);
      await you.say_and_wait(`いま帰っても間に合わない。近くで一泊しよう。`);
      await falcon.say_and_wait(
        `음― ${callname}, 분명 방을 미리 예약해 뒀겠지?`,
      );
      await you.say_and_wait(`部屋？`);
      await era.printAndWait(
        `황급히 스마트폰을 뒤져보았지만, 근처 호텔들은 이미 만실이었다.`,
      );
      await era.printAndWait(
        `거기에 시간을 지체하는 바람에, 지금 당장 역으로 달려간다 해도 트레센으로 돌아가는 마지막 열차를 탈 수 없는 상황이었다.`,
      );
      await falcon.say_and_wait(`……괘, 괜찮아, ${callname}.`);
      await era.printAndWait(
        `力なく落ちたあなたの肩を見て、${falcon.name}は少し間を置き、身につけた小さな袋からカードを一枚取り出した。`,
      );
      await falcon.say_and_wait(`깜빡할 뻔했다! 이거 ${callname}に。`);
      await era.printAndWait(
        `あなたは${falcon.name}のサンタ衣装が刷られた小さなカードを受け取った。`,
      );
      await falcon.say_and_wait(`忘れるとこだった！ これ、${callname}に。`);
      await falcon.say_and_wait(
        `${callname}이 갑자기 일깨워주지 않았으면 팔코, 정말 잊어버릴 뻔했어…… 아하하.`,
      );
      await era.printAndWait(
        `ファル子の照れた笑顔を見て、${falcon.sex}の期待する視線を追うと、裏面にも字があった。`,
      );
      era.printButton(`「고마워.」`, 1);
      await era.input();
      await era.printAndWait(
        `少し雑なアートサインと、「今日もファイト」と書いたファル子のデフォルメ顔。`,
      );
      await falcon.say_and_wait(`기분이 우울할 때 팔코를 보면 다시 힘이 날 거야!`);
      await era.printAndWait(`ありがたい。それなら——`);
      await you.say_and_wait(`近くの宿に、空きがないか聞いてみよう。`);
      await era.printAndWait(
        `近所のホテルは先に予約で埋まっている。だが事情で来られなくなった客もいる。その隙をつかめれば。`,
      );
      await era.printAndWait(
        `それに気づいて、二人は足を速めた。三軒のフロントを回ると、急用でキャンセルされた空き部屋が一つあった。`,
      );
      await falcon.say_and_wait(`これで、いいの？`);
      await era.printAndWait(
        `머리 장식을 풀고 머리카락을 늘어뜨린 ${falcon.name}が、つぶやいた。`,
      );
      await era.printAndWait(
        `仕方ないことだ。あなたは${falcon.name}の小さな頭を撫でた。`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `電車に間に合わなかったことが、まだ落ち込ませているのだろう。あとで埋め合わせを考えよう。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_6
  ws_47_6: (() => {
    const title = "연심! 팔코의 선물!";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`——おはよう⭐！`);
      await falcon.say_and_wait(
        `그러고 보니 오늘은 발렌타인데이네― 다들 초콜릿 받았어?`,
      );
      await falcon.say_and_wait(
        `못 받았어도 괜찮아! 왜냐면 지금부터 등장할 건 팔코가 직접 준비한 초콜릿이니까―.`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await falcon.say_and_wait(`앞으로도 팔코를 계속 응원해줘야 해♪`);
      await you.say_as_passer_by_and_wait(
        `팬A`,
        `それ、ファル子の本命チョコ？`,
      );
      await falcon.say_and_wait(
        `아니지~ 팔코는 모든 팬분들을 평등하게 사랑하니까, 초콜릿 가게에서 대량으로 구매한 초콜릿이야.`,
      );
      await falcon.say_and_wait(
        `게다가 상자 안에는 팔코가 정성껏 준비한 엽서랑 사인도 있어⭐!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬B`,
        `팔코의 발렌타인 기념행사에 참가할 수 있어서 다행이야!`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await era.printAndWait(`현장의 분위기가 더욱 뜨거워졌다.`);
      await falcon.say_and_wait(`앞으로도 팔코를 많이 응원해줘♪`);
      await you.say_as_passer_by_and_wait(`팬들`, `오오오오!!!`);
      await falcon.say_and_wait(
        `바로 이거야♪ 부끄러움과 사랑이 담긴 팔코의 퍼포먼스를 감상해줘!`,
      );
      await era.printAndWait(
        `팬들의 환호 속에서 ${falcon.name}의 발렌타인 기념 라이브가 막을 올렸다.`,
      );
      await falcon.say_and_wait(
        `수고했어! 앞으로도 팔코를 계속 응원해줄 거지?`,
      );
      await era.printAndWait(
        `마지막 팬까지 배웅하고 나서야, 근처에서 기다리던 ${you.name}이 다가갔다.`,
      );
      await falcon.say_and_wait(`팔코의 노래가 ${callname}의 마음속까지 전달됐을까?`);
      era.printButton(`충분히 느꼈어.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……그러고 보니, ${callname}에게 줄 게 또 있어.`,
      );
      await era.printAndWait(
        `${falcon.name}은 눈에 띄지 않는 구석에 놓여 있던 종이상자에서 정성스럽게 포장된 선물 상자를 꺼냈다.`,
      );
      await falcon.say_and_wait(
        `이건 ${falcon.name}이 담당 ${falcon.uma_sex_title}로서 ${callname}に贈る、本命……義理チョコ、だよ？`,
      );
      await era.printAndWait(
        `선물 상자를 열자 하트 모양의 초콜릿과 그 옆에 놓인 카드가 보였다.`,
      );
      await falcon.say_and_wait(`앞으로도 팔코를 계속 응원해줘!`);
      await era.printAndWait(`${falcon.name}은 달콤한 미소를 지었다.`);
      era.printButton(`공연장 정리 끝나면 같이 밥 먹으러 갈까?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `近くに、トレーナーと${falcon.uma_sex_title} 콤비에게 할인 혜택을 주는 가게가 있다고 들었어, 같이 가보자!`,
      );
      await era.printAndWait(`${falcon.name}は${you.name}の手を引いた。`);
      await falcon.say_and_wait(
        `팬들이 팔코에게 꼭 먹어보라고 추천해준 곳이야. 거기에도 팔코의 팬들이 있을까? 너무 기대돼.`,
      );
      era.printButton(`분명히 있을 거야.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `그러고 보니 팔코는…… 아니, 팔코는 아무 말도 안 했어⭐.`,
      );
      await era.printAndWait(`두 사람은 근처의 인기 식당에서 발렌타인데이를 보냈다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_9
  ws_47_9: (() => {
    const title = '目標は皐月賞！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await era.printAndWait(
        `가지 위에 쌓였던 두꺼운 눈이 마침내 녹아내리고, 정막했던 트레센에 다시 새들의 지저귐이 찾아왔다.`,
      );
      await era.printAndWait(
        `${you.name}が暖かいトレーナー室で、これからのレースを考えていると。`,
      );
      await falcon.say_and_wait(`${callname}, 팔코 왔어!`);
      await suzuka.say_and_wait(`실례하겠습니다.`);
      await era.printAndWait(`트레이닝실에 두 명의 방문객이 찾아왔다.`);
      await you.say_and_wait(`오늘도 팔코는 활기차네.`);
      await falcon.say_and_wait(
        `응! 역시 활기와 귀여움이야말로 ${falcon.uma_sex_title}アイドルの違いだもん。`,
      );
      await era.printAndWait(
        `${falcon.name}はトレーナー室を一周したあとソファに飛び込み、サイレンススズカはソファの端に静かに座って、室内を何度も見回していた。`,
      );
      await falcon.say_and_wait(`소파에 누워 있으니까 진짜 편하다―.`);
      await you.say_and_wait(`오늘 아이돌 활동은 뭐야?`);
      await era.printAndWait(
        `${you.name}은(는) 플라스틱 컵 두 개를 꺼내 편의점에서 산 홍차를 우려냈다.`,
      );
      await falcon.say_and_wait(`음―― 팔코, 사츠키상에 나가고 싶어.`);
      await you.say_and_wait(`뭐라고?`);
      await suzuka.say_and_wait(`에?`);
      await era.printAndWait(`곁에 있던 사일런스 스즈카가 살짝 입을 가렸다.`);
      await falcon.say_and_wait(`팔코, 사츠키상에 나가고 싶어!`);
      await era.printAndWait(
        `${falcon.name}은 꽤 기백 있는 목소리로 트레이닝실에 있는 사람들에게 선언했다.`,
      );
      await suzuka.say_and_wait(
        `팔코 양이 저를 데려온 게 바로 이 일 때문이었나요?`,
      );
      await suzuka.say_and_wait(
        `하지만 팔코 양은 더트 레이스에서 활약하고 있잖아요, 왜 잔디 레이스에 나가고 싶은 거죠?`,
      );
      await era.printAndWait(
        `${you.name} 역시 같은 의문을 담아 ${falcon.sex}를 바라보았다.`,
      );
      await falcon.say_and_wait(
        `ファル子はずっとダートで走ってるから、ダートのファンはファル子のこと知ってるの⭐`,
      );
      await falcon.say_and_wait(
        `でも芝のほうのお客さんは、まだファル子を知らないみたい。だから芝に出て、芝を見てるファンにもファル子を応援してもらいたいの！`,
      );
      era.printButton(`그렇다면 나도 찬성할게.`, 1);
      await era.input();
      await era.printAndWait(
        `잔디 쪽 관객들에게도 이렇게 귀여운 ${falcon.uma_sex_title}를 알릴 수 있다면, 팔코의 아이돌 인생에도 큰 도움이 될 것이다.`,
      );
      await suzuka.say_and_wait(
        `그렇군요. 그래서 저에게 잔디 레이스 기교를 가르쳐 달라는 건가요?`,
      );
      await falcon.say_and_wait(`그러니까 이차원의 도망자를 팔코에게 빌려줘!`);
      await suzuka.say_and_wait(`……에?`);
      await falcon.say_and_wait(
        `いっそ皐月賞のときはファル子が異次元の逃亡者って名乗って、スズカちゃんから力をもらう！`,
      );
      await era.printAndWait(
        `サイレンススズカだけでなく、${you.name}も${falcon.name}の脱線に頭を抱えた。`,
      );
      await suzuka.say_and_wait(
        `팔콘 씨, 다른 사람의 이명을 함부로 빌려서 이상한 짓 하지 마세요!`,
      );
      await era.printAndWait(`사일런스 스즈카가 화가 났다.
`);
      era.printButton(`미안해, 나중에 팔코를 잘 타이를게.`, 1);
      era.printButton(`잔디 레이스 팁을 좀 전수해줄 수 있을까?`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `어떤 이유에서건 다른 사람의 이름을 사칭하는 건 좋은 일이 아니었다.`,
        );
        await era.printAndWait(`이대로 두었다가는 불필요한 분쟁이 생길 수도 있었다.`);
        await suzuka.say_and_wait(`아니요, 너무 걱정하지 마세요.`);
        await suzuka.say_and_wait(
          `ファルコンさんは元気で飛び跳ねるタイプのようですが、他人の評判を悪用する人ではありません。`,
        );
        await suzuka.say_and_wait(
          `逃げウマ姉妹の活動でファルコンさんのペースについていくのは、それでも大変ですけれど。`,
        );
        await suzuka.say_and_wait(
          `ですが、自分の身分で道を歩いてください。心から認めていない称号は、理想の結末をもたらしません。`,
        );
        await falcon.say_and_wait(`ええ？ スズカちゃん、怒ると怖い！`);
        await you.say_and_wait(`그렇구나.`);
        await era.printAndWait(`${you.name}은(는) 다시 자리에 앉았다.`);
        await suzuka.say_and_wait(
          `제 이명을 빌려줄 수는 없지만, 잔디 레이스에 관한 기술은 제대로 가르쳐 드릴게요.`,
        );
        await era.printAndWait(
          `その後の三時間、サイレンススズカから芝の知識を教わった。`,
        );
      } else {
        await suzuka.say_and_wait(`그 정도라면 물론 괜찮아요.`);
        await era.printAndWait(`サイレンススズカは、もう怒っていないようだ？`);
        await suzuka.say_and_wait(
          `心から認めていない称号は、理想の結末をもたらしません。脱線しがちなファルコンさん、そこは覚えておいてください。`,
        );
        await suzuka.say_and_wait(`그리고…
`);
        await suzuka.say_and_wait(
          `앞으로 펼쳐질 풍경은 누구에게도 양보하지 않을 거예요! 이 점도 팔콘 씨의 가슴속에 새겨두길 바라요.`,
        );
        await falcon.say_and_wait(`ええ？ スズカちゃん、怒ると怖い！`);
        await era.printAndWait(`……설마 방금 그게 본론이었던 걸까?`);
        await you.say_and_wait(
          `これから${falcon.name}は、かなり大変そうだ。`,
          true,
        );
        await era.printAndWait(
          `${falcon.name}이 도움을 요청하는 눈빛으로 ${you.name}을(를) 쳐다보았다.`,
        );
        await you.say_and_wait(`(시선을 피한다)`, true);
        era.drawLine();
        await suzuka.say_and_wait(
          `벌써 8시간이나 훈련했는데, 팔콘 씨는 아직도 그렇게 활기찬가요?`,
        );
        await falcon.say_and_wait(`耐久ライブなら、まだ限界じゃないよ！`);
        await suzuka.say_and_wait(`그렇다면 계속하죠.`);
        await era.printAndWait(`그 후 잔디 레이스 특훈은 통금 시간이 다 되어서야 끝이 났다.`);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_9
  ws_9: (() => {
    const title = "앞으로도 잘 부탁해⭐";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(`二月は、一年でいちばん寒い。`);
      await era.printAndWait(
        `街の空は厚い雲に覆われ、不意の大雪が街を真っ白に塗った。`,
      );
      await era.printAndWait(
        `寒い日は焦りも催す。休みでも${you.name}은(는) 일찍 트레이닝실로 향했다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 트레이닝은 궤도에 올랐고, 곧 있을 데뷔전도 큰 문제는 없을 터였다.`,
      );
      await era.printAndWait(
        `다만 신경 쓰이는 점은 ${falcon.name}の足音が重いことだ。`,
      );
      await era.printAndWait(
        `덕분에 ${falcon.sex}를 위해 준비한 모래판 위의 스피드와 파워 트레이닝은 빠르게 진척되었다.`,
      );
      await era.printAndWait(
        `長い${falcon.uma_sex_title}アイドル活動でも元気が続くのは、たぶんこの重さのおかげだろう。`,
      );
      await minoru.say_and_wait(`あら、今日は早いのですね？`);
      await era.printAndWait(
        `생각에 잠겨 있던 사이 시간은 금방 흘렀고, 타즈나 씨가 마치 당연하다는 듯 트레센 정문에 나타나 미소를 지으며 ${you.name}을(를) 바라보았다.`,
      );
      era.printButton(
        `귀여운 ${falcon.uma_sex_title}たちを一日でも早く送り出したいから、早起きしてトレセンへ来たんです。それにしても、今日のたづなさんも綺麗ですね。`,
        1,
      );
      await era.input();
      await minoru.say_and_wait(`ふふ、もう。褒めても何も出ませんよ？`);
      await era.printAndWait(
        `가볍게 웃는 타즈나 씨는 흔들림 없는 태도를 보여주었다. 어떤 의미에서 ${falcon.sex}のほうが理想の大人だ。`,
      );
      await era.printAndWait(`서로 가볍게 목례를 나누는 것으로 예의상의 의식은 끝이 났다.`);
      await era.printAndWait(
        `${you.name}이(가) 어깨에 쌓인 눈을 털어내고 에어컨 온도를 30도로 올렸을 때——`,
      );
      await falcon.say_and_wait(`실례합니다⭐`);
      await era.printAndWait(
        `${falcon.name}がトレーナー室の扉を勢いよく開けた。`,
      );
      era.printButton(`좋은 아침!`, 1);
      await era.input();
      await era.printAndWait(
        `入口の音は無視して、${falcon.teen_sex_title}の吐く白い息は冷たい空気にすぐ消える。${falcon.name}의 열정은 식지 않은 상태였다.`,
      );
      await falcon.say_and_wait(`${callname}、おはよう！ 今日も元気そうだね！`);
      await era.printAndWait(`곧이어 ${falcon.name}의 활기찬 인사가 돌아왔다.`);
      await era.printAndWait(
        `${falcon.name}の笑顔から目を下ろすと、${you.name}の視線は${falcon.sex}が提げた小さなバケツと箒に集まる。`,
      );
      await falcon.say_and_wait(
        `평소에 도움을 많이 받고 있으니까, 팔코는 오늘 봉사활동을 하려고 해!`,
      );
      await era.printAndWait(
        `${falcon.name}は手のバケツを振る。中が水なら、今にもこぼれそうだ。`,
      );
      await you.say_and_wait(`구체적으로 어떤 활동인데?`);
      await falcon.say_and_wait(
        `ん——みんな起きる前に、高架下から芝へ流れてきたゴミを分別して、ゴミ捨て場へ運ぶよ⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルとは何か（哲学）。`,
      );
      await falcon.say_and_wait(`맞다, ${callname}도 같이 갈래?`);
      era.printButton(`僕も手伝いたい`, 1);
      era.printButton(`가고 싶지만, 처리해야 할 업무가 남았어.`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`やった！`);
        await falcon.say_and_wait(`그럼 지체하지 말고 지금 당장 출발하자!`);
        await era.printAndWait(
          `${you.name}が頷くと、${falcon.name}의 미소는 더욱 밝아졌다.`,
        );
        era.drawLine();
        await falcon.say_and_wait(`逃がさないよ⭐`);
        await era.printAndWait(
          `${falcon.name}은 마지막 쓰레기 조각까지 모아 검은 비닐봉지에 담았다.`,
        );
        await falcon.say_and_wait(`이제 이 쓰레기들을 전부 버리기만 하면 끝이야!`);
        await falcon.say_and_wait(`${callname}, 수고했어!`);
        await era.printAndWait(
          `그 후 ${falcon.sex}는 검은 비닐봉지를 예쁜 리본 모양으로 조심스럽게 묶었다.`,
        );
        await era.printAndWait(
          `普段から環境保護は言っていたが、自分の手でゴミを拾って、${you.name}は初めて深く理解した。`,
        );
        await era.printAndWait(
          `하지만 팔코에게 있어 이것은 자신을 응원해주는 팬들에게 보답하는 자신만의 방식일 것이다.`,
        );
        await era.printAndWait(
          `……이런 부분에서 의외로 ${falcon.teen_sex_title}다운 고집이 있는 걸까?`,
        );
        await falcon.say_and_wait(
          `${callname}이 없었다면 라이브 시작 전까지 전부 처리하기 힘들었을 거야……`,
        );
        await falcon.say_and_wait(
          `팔코는 ${callname}한테 어떻게 감사를 표해야 할지 모르겠어.`,
        );
        await era.printAndWait(
          `사실 대부분의 쓰레기는 ${falcon.name}が処理した。「助かった」は謙遜にすぎない。`,
        );
        era.print(`어떻게 대답해주는 게 좋을까?
`);
        era.printButton(`팔코의 공연을 미리 감상하게 해줄래?`, 1);
        era.printButton(`이번 중간고사에서 전부 합격해줘!`, 2);
        if ((await era.input()) === 1) {
          await falcon.say_and_wait(
            `어라? 겨우 그걸로 되겠어? ${callname}のお願いなら。`,
          );
          await you.say_and_wait(`팔코의 팬 1호로서 하는 요청이야!`);
          await falcon.say_and_wait(`에헤? 팬 1호라니…… 팔코, 좋은 생각이 났어!`);
          await era.printAndWait(
            `팬 1호라는 호칭이 팔코의 영감을 자극했는지, ${falcon.name}의 꼬리가 빳빳하게 섰다.`,
          );
          await falcon.say_and_wait(`음…… 그러니까…… 아냐…… 이게 더 좋겠다.`);
          await era.printAndWait(
            `${falcon.name}은 무대 뒤편(고작 고가교 밑 5제곱미터의 빈터)에 비닐봉지를 두고, 교복 주머니에서 마이크를 꺼냈다.`,
          );
          await falcon.say_and_wait(
            `次に登場するのは、ファル子が今思いついた曲♪ ファン1号の${you.adult_sex_title}のリクエストで作ったベータ版だよ♪`,
          );
          await falcon.say_and_wait(`じゃあ、さん、に、いち！`);
          await era.printAndWait(
            `まだ残る白い息、白んだ空、小さな空き地で、ライブが始まる。`,
          );
        } else {
          await falcon.say_and_wait(`에에에?! 설마 그런 요청을 할 줄이야.`);
          await you.say_and_wait(
            `모르는 게 있으면 내가 가르쳐 줄 테니까, 도망칠 생각 같은 건 하지 마.`,
          );
          await era.printAndWait(`${falcon.name}은 조금 난처한 기색을 보였다.`);
          await falcon.say_and_wait(
            `그래도 팔코 노력해볼게! 팔코! 파이팅!`,
          );
          await era.printAndWait(
            `元気な声に近くの公園の鳥が驚き、木の周りを長く旋回してから巣へ戻った。`,
          );
          await era.printAndWait(
            `트레센으로 돌아가는 길에 ${falcon.name}の機嫌は前より良さそうだった。`,
          );
          await falcon.say_and_wait(`그러고 보니, ${callname}.`);
          await falcon.say_and_wait(`${callname}도 따로 지켜보는 아이돌이 있어?`);
          await era.printAndWait(
            `なぜ${falcon.name}が急にそれを訊くのか、わからない。`,
          );
          await falcon.say_and_wait(`아, 대답 안 해도 돼! 아니, 역시 대답하지 말아줘.`);
          await era.printAndWait(
            `${you.name}이(가) 대답하려 하자 ${falcon.name}は落ち着かない。`,
          );
          await era.printAndWait(
            `${you.name}은(는) 하늘을 바라보았다. 남빛 하늘은 지평선의 금빛에 서서히 자리를 내어주고 있었고, 곧 다시 세상의 소음이 시작될 터였다.`,
          );
        }
      } else {
        await falcon.say_and_wait(`${callname}, 역시 정말 바쁘구나.`);
        await falcon.say_and_wait(
          `팔코가 멋대로 부탁한 거니까 ${callname}은 신경 쓰지 않아도 돼!`,
        );
        await era.printAndWait(
          `${falcon.name}は少し残念そうな顔をしたが、すぐいつもの表情に戻った。`,
        );
        await you.say_and_wait(`조심해서 다녀와!`);
        await falcon.say_and_wait(
          `응! 팔코가 ${callname}の分まで頑張る！`,
        );
        await era.printAndWait(
          `${you.name}은(는) ${falcon.name}의 귀가 쫑긋거리는 것을 보며 조용히 트레이닝실 문을 닫았다.`,
        );
        await era.printAndWait(
          `팔코의 노력 덕분에 강가에 떠다니던 쓰레기들은 전부 자취를 감추었다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_14
  ws_95_14: (() => {
    const title = "팬 감사제♪";
    /**
     * シニア級、スマートファルコンはダートのウマ娘アイドルとしてダートの人気を上げた
     * ウマ娘A・Bはダートを選んだ。Aは外向、Bは内向
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `팬들의 평소 성원에 보답하기 위한 감사 이벤트가 다시 시작되었다.`,
      );
      await era.printAndWait(`그러나 평소와는 다른 점이 있었다.`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `${falcon.name} 선배님, 같이 사진 찍어주실 수 있나요?`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}B`,
        `わたしもファル子と撮りたい！`,
      );
      await era.printAndWait(
        `入学したばかりの小さな${falcon.uma_sex_title}たちに囲まれた${falcon.name}。`,
      );
      await falcon.say_and_wait(`팔코가 이렇게 인기가 많아질 줄은 몰랐어……`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `팔코 선배님은 지금 더트 레이스의 인기 스타시잖아요!`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `다들 이제 더트라고 하면 바로 ${falcon.name}を思い浮かべます！`,
      );
      await falcon.say_and_wait(`와— 이러면 팔코가 꿈꾸는 톱 아이돌의 길에 한 걸음 더 가까워진 거네!`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `それにそれに、ファル子先輩がダートで活躍して注目が集まって、目立たなかったダートの${falcon.uma_sex_title}たちも、やっと見られるようになりました！`,
      );
      await falcon.say_and_wait(
        `이건 전부 팔코 덕분이 아니야. 계속해서 팔코를 응원해준—— 여러분 덕분이지.`,
      );
      await falcon.say_and_wait(
        `그런 의미에서, 응원해준 여러분께 감사의 마음을 전하기 위해 잠시 후 10시부터 제2 스테이지에서 보답 공연을 열 거야.`,
      );
      await falcon.say_and_wait(`다들 꼭 보러 와줄 거지?`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `팔코! 팔코!`,
      );
      era.drawLine();
      await falcon.say_and_wait(`～～～♪ 고마워 여러분!`);
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await falcon.say_and_wait(
        `다음 레이스도 빛나는 팔코에게서 눈을 떼면 안 돼? 그럼, 하나 둘!`,
      );
      await falcon.say_and_wait(`팔코가 도망친다면?`);
      await you.say_as_passer_by_and_wait(`팬들`, `그럼 쫓아갈 수밖에 없지!`);
      await falcon.say_and_wait(`지평선 끝까지 쫓아올 거야~?`);
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `그곳이 바로 팔코의 큰 무대니까!`,
      );
      await falcon.say_and_wait(
        `道がなければファル子が見つける！ 目標を見つけたら、すぐつかまえて！`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `——커다란 사랑을 쟁취하자!`);
      await falcon.say_and_wait(
        `최강의 ${falcon.uma_sex_title} 아이돌, ${falcon.name}♪ 오늘도 마음을 전했어⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `오오오오오오오오오! 팔코! 팔코!`,
      );
      await era.printAndWait(`팔코의 공연은 대성공이었다.`);
      era.drawLine();
      await you.say_and_wait(`少し、あたりを歩いてみよう`, true);
      await era.printAndWait(
        `평소 인적이 드물던 오솔길도 방문객들 덕분에 붐비기 시작했다.`,
      );
      await era.printAndWait(
        `지름길로 빠져나가려던 ${you.name}には少し迷惑だったが、びっしりと詰まった人混みには、どこか虚ろな安心があった。`,
      );
      await era.printAndWait(
        `어떤 학자가 말하길, 사람이 안정적인 사교 관계를 유지할 수 있는 인원은 150명이고, 깊은 교류를 나누는 인원은 20명 내외, 최종적으로 절친한 친구가 되는 인원은 고작 5~7명 정도라고 했다.`,
      );
      await era.printAndWait(
        `그들에게 당신 역시 그들 세계의 아주 미미한 조연이거나, 그저 70억 인구 중 한 명의 배경 화면 같은 존재일 것이다.`,
      );
      await era.printAndWait(
        `そう考えると、たとえ通りで突然${falcon.uma_sex_title}になっても、大多数にとっては一ヶ月も持たないニュースでしかない。`,
      );
      await era.printAndWait(
        `海流に乗る魚群のように、気づいたらサブステージのほうへ来ていた。`,
      );
      await era.printAndWait(
        `一日限りのスターである${falcon.uma_sex_title}たちが輝く瞬間を見る。`,
      );
      await you.say_and_wait(`……${falcon.name}.`, true);
      await era.printAndWait(
        `トップの${falcon.uma_sex_title}アイドルを目指し、果てまで輝き続ける、負けず嫌いの${falcon.teen_sex_title}。`,
      );
      await era.printAndWait(
        `${falcon.name}があわててふたりの間に線を引いたのは、自分が思っていたほど単純な話ではなかった気がする。`,
      );
      await you.say_and_wait(`${falcon.name}にも、事情があるんだ。`);
      await era.printAndWait(`그걸 깨닫는 것만으로도 깊은 위안이 되었다.`);
      await era.printAndWait(
        `——비록 그 안정감이 진짜가 아닐지라도, 가짜 안정감 또한 안정감인 법이다.`,
      );
      await era.printAndWait(`억지로라도 그렇게 스스로를 납득시켰다.`);
      await you.say_and_wait(
        `다음에 기회를 봐서 ${falcon.name}과 제대로 이야기해보자.`,
        true,
      );
      await era.printAndWait(
        `${you.name}은 다시 훈련 계획에 집중하기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_18
  ws_95_18: (() => {
    const title = "일상";
    /**
     * 頭の中に、トレーナーとの過去が閃く
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`大きな揺れで目が覚めた。`);
      await era.printAndWait(
        `아직 흐릿한 시야 사이로 주황색 형체가 움직이는 것이 보였다.`,
      );
      await era.printAndWait(`腫れた両目をこすり、意識を集めようとする。`);
      await era.printAndWait(
        `同じように迷っている${falcon.teen_sex_title}와 눈이 마주쳤다.`,
      );
      await falcon.say_and_wait(`아……`);
      await era.printAndWait(
        `${falcon.teen_sex_title}も今起きたらしく、未知の天井に首を傾げている。`,
      );
      await you.say_and_wait(`안녕, ${falcon.name}.`);
      await era.printAndWait(
        `何かに気づいたのか、瞳が一気に開き、耳がぴんと立つ。`,
      );
      await falcon.say_and_wait(
        `——어? 어어! 왜 팔코가 ${callname}의 방에 있는 거야?`,
      );
      await era.printAndWait(
        `ふたりの絆のおかげで、${falcon.name}は襲いかからず、声を上げて聞いただけだった。`,
      );
      await you.say_and_wait(
        `미안, 내 독단이긴 하지만 이미 사감 선생님께 외박 허가증 확인을 받았어.`,
      );
      await falcon.say_and_wait(`それって……${callname}がファル子を……`);
      await you.say_and_wait(
        `ちがう！ ファル子の飛びすぎる思考、もうついていけない。`,
      );
      await you.say_and_wait(
        `許可なしにトレセンを出て病院へ行って、週刊誌に撮られたら、そのままゴシップの一面だ。`,
      );
      await you.say_and_wait(`僕もファル子も、名誉がかなり傷つく。`);
      await you.say_and_wait(
        `그래서 의사 선생님께 큰 문제 없고 푹 쉬면 된다는 확답을 받은 뒤에, ${falcon.name}が巡回の過労で倒れた、という理由で理事長に外泊許可を出した。`,
      );
      await you.say_and_wait(
        `深夜だったのに、たづなさんがすぐ返信してくれて助かった。`,
      );
      await you.say_and_wait(`ところで、ファル子、いまの調子は？`);
      await era.printAndWait(
        `${you.name}의 이야기를 묵묵히 듣고 있던 ${falcon.name}이 침대에서 일어났다.`,
      );
      await falcon.say_and_wait(`미안해, ${callname}에게 이렇게 큰 폐를 끼쳐서.`);
      await era.printAndWait(
        `그리고 ${you.name}のほうへ向き直り、深く頭を下げた。`,
      );
      await you.say_and_wait(
        `미안, 내가 좀 더 ${falcon.name}을 신뢰했다면 팔코가 이런 상황까지 오진 않았을 텐데.`,
      );
      await era.printAndWait(`머릿속에 ${falcon.name}의 슬픈 미소가 스쳐 지나갔다.`);
      await you.say_and_wait(
        `焦りを抑えられていれば、ファル子をこんなに苦しめなかった。`,
      );
      await era.printAndWait(`이에 ${you.name} 또한 깊이 고개를 숙였다.`);
      await falcon.say_and_wait(
        `えっ！ 間違えたのはファル子なのに、${callname}이 이럴 필요 없어!`,
      );
      await era.printAndWait(
        `頭を上げて止めようとした${falcon.name}と、${you.name}の頭がぶつかった。`,
      );
      await era.printAndWait(`${you.name}의 코에 강한 충격이 전해지며 얼얼한 감각이 퍼졌다.`);
      await falcon.say_and_wait(`아, ${callname}!`);
      await you.say_and_wait(`음? 왜 그래?`);
      await era.printAndWait(
        `${you.name}이(가) 무심코 코를 만지자, 선홍색 액체가 비강을 타고 입안으로 흘러들어왔다.`,
      );
      await era.printAndWait(
        `……なぜか、苦い鉄の味が${you.name}에게 안도감을 주었다.`,
      );
      await falcon.say_and_wait(`${callname}, 일단 앉아봐!`);
      await era.printAndWait(
        `${falcon.name}은 다짜고짜 ${you.name}을(를) 침대에 앉혔고, ${you.name}はナプキンを半分に裂いて折り、出血している鼻を塞いだ。`,
      );
      await you.say_and_wait(`……하하하.`);
      await era.printAndWait(
        `患者と看病する側が入れ替わった光景に、笑いが止まらなかった。`,
      );
      await era.printAndWait(
        `제대로 고정되지 않은 냅킨이 진동 때문에 공중에 붉은 선을 그리며 튕겨 나갔고, 다음 순간 ${you.name}의 트레이너 외투를 적셨다.`,
      );
      await falcon.say_and_wait(`えええっ！`);
      await era.printAndWait(
        `いつものように、てんてこ舞いの日常がまた始まる。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = "합숙 시작!";
    /**
     * 拍子、場面、順序、幕、物語
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_and_wait(`드디어 도착했네.`);
      await era.printAndWait(
        `${falcon.name}이 우마스타그램에 올린 콘서트 공지를 보고 한꺼번에 몰려든 팬들.`,
      );
      await era.printAndWait(
        `좋아요를 누르고, 질문에 친절히 답하고, 악플을 삭제하는 일들.`,
      );
      await era.printAndWait(
        `揺れるバスの中でずっと携帯を見ていたせいで、目的地までまだ四分の一というところで吐き気に襲われた。`,
      );
      await era.printAndWait(`ようやく着くと、すぐ真っ青になるまで吐いた。`);
      await era.printAndWait(`おかげで、自分が生きている実感ははっきりした。`);
      await era.printAndWait(
        `하지만 ${falcon.name}에게도 이건 쉼 없는 달리기 끝에 얻은 귀중한 휴식 같은 날이었다.`,
      );
      await you.say_and_wait(`마치 휴양하러 온 것 같아.`, true);
      await falcon.say_and_wait(`${callname}!`);
      await era.printAndWait(`${falcon.name}が${you.name}을(를) 찾고 있었다.`);
      await you.say_and_wait(`나 여기 있어!`);
      await era.printAndWait(`최대한 큰 소리로 상대에게 대답했다.`);
      await era.printAndWait(
        `대답을 들은 ${falcon.name}은 모래를 탁탁 밟으며 ${you.name}이(가) 있는 방향으로 달려왔다.`,
      );
      await falcon.say_and_wait(`${callname}⭐ 다음 훈련도 잘 부——`);
      await falcon.say_and_wait(`ええ？ ${callname}, 괜찮아?`);
      await era.printAndWait(`具合が悪くて青白い${you.name}の顔を見る。`);
      await you.say_and_wait(
        `ファンの返信を長くやってて、ちょっと車酔いしただけ。大したことない。`,
      );
      await falcon.say_and_wait(`아니야!`);
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルらしくない声で、${falcon.name}が強く言い返す。`,
      );
      await falcon.say_and_wait(
        `${callname}は、ファル子が${falcon.uma_sex_title}アイドルの道を歩く仲間だよ！ ${callname}が倒れたら、ファル子のトレーニングも大きく落ちる。`,
      );
      await era.printAndWait(
        `そばを通る${falcon.uma_sex_title}とトレーナーが、ちらちら見る。`,
      );
      await you.say_and_wait(`ごめん。次からは気をつける。`);
      await era.printAndWait(
        `주변의 시선이 모여서인지, 아니면 ${you.name}이(가) 사과해서인지 ${falcon.name}의 태도가 누그러졌다.`,
      );
      await falcon.say_and_wait(`팔코도 말이 좀 심했네, 미안해.`);
      await falcon.say_and_wait(
        `——${callname}が、ファル子の見えないところまで走っちゃったら`,
      );
      await era.printAndWait(`${falcon.name}はうつむいて、何か考えている。`);
      await you.say_and_wait(`팔코?`);
      await falcon.say_and_wait(
        `아무것도 아니야⭐ 팔코의 이번 여름 합숙 계획은—— 해변에 있는 모든 관광객을 팔코의 팬으로 만드는 거야!`,
      );
      await falcon.say_and_wait(
        `そのために、次のお祭りで、見に来てくれた人の心をつかむ！`,
      );
      await you.say_and_wait(`훈련도 잊지 마!`);
      await era.printAndWait(
        `그 목표에서 활력을 얻었는지, ${falcon.name}が輝いている。`,
      );
      await falcon.say_and_wait(`もう～それも落とさないから⭐`);
      await era.printAndWait(
        `눈앞의 ${falcon.name}がいつもの顔に戻って、${you.name}도 안심했다.`,
      );
      era.printButton(`うん——じゃあまずビーチを十周して体を温めよう！`, 1);
      await era.input();
      await falcon.say_and_wait(`좋아♪`);
      await era.printAndWait(
        `${you.name}과(와) 팔코의 3년 차 여름 합숙이 시작되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_30
  ws_95_30: (() => {
    const title = "축제";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ビーチから近い小さな町で\n`);
      await era.printAndWait(
        `海に近い地の利を活かして、年に一度の夏祭りが開かれている。`,
      );
      await era.printAndWait(
        `最近のダートの星として招かれた${falcon.name}が、ステージの中央に立っている。`,
      );
      await falcon.say_and_wait(`～～～♪ 후— 고마워 여러분⭐`);
      await era.printAndWait(
        `무대 아래의 관객들은 무대 위 아이돌에게 박수와 환호를 보냈다.`,
      );
      await you.say_and_wait(`역시 관객석에서 보는 게 최고의 선택이네.`, true);
      await era.printAndWait(
        `${you.name}が客席から${falcon.name}を見たいと言うと、${falcon.name}は何か言いたそうだったが、聞こうとすると流されてしまった。`,
      );
      await era.printAndWait(
        `それでも曲の終わり、ファンとの視線のやりとりの中で、かすかな視線がずっと${you.name}を見ている。`,
      );
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`少し、寂しい。`);
      await era.printAndWait(
        `${falcon.name}のステージが凡庸なわけではない。青い原石が、研がれてダイヤモンドの光を見せ始めている。`,
      );
      await era.printAndWait(
        `그저 아주 조금, 처음 ${falcon.name}을(를) 만났을 때의 순수했던 모습이 그리워졌을 뿐이었다.`,
      );
      await era.printAndWait(`지금의 ${falcon.sex}는 이미 훌륭한 아이돌로 성장했다.`);
      await era.printAndWait(`그것으로 충분했다.`);
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`하지만 마음속 불안감은 가시지 않았다.`);
      await era.printAndWait(`무언가 놓치고 있는 기분.`);
      await era.printAndWait(`그 슬픈 눈망울.`);
      await you.say_as_passer_by_and_wait(`관광객 A`, `으악!`);
      await era.printAndWait(
        `비명과 함께 검붉은 액체가 ${you.name}의 몸에 튀었다.`,
      );
      await you.say_and_wait(`으아아아악`);
      await era.printAndWait(
        `불행 중 다행으로, 시간이 흘러 뜨거움이 가신 상태라 그저 미지근한 정도였다.`,
      );
      await era.printAndWait(
        `残る悩みは、汁だらけのシャツをどう洗うか、それと`,
      );
      await you.say_and_wait(`으아아악!`, true);
      await era.printAndWait(
        `마치 수많은 개미가 눈꺼풀을 따라 각막 주변을 기어 다니는 것 같았다.`,
      );
      await you.say_and_wait(`ナプキン、水、なんでも——`);
      await era.printAndWait(
        `사방으로 허둥대던 손이 겨우 젖은 수건을 낚아챘다.`,
      );
      await you.say_and_wait(`ごめん、あとで埋め合わせする！`);
      await era.printAndWait(
        `自分でも言いすぎだと思う言葉を吐き、とにかく顔へ当てる。`,
      );
      await era.printAndWait(`まわりが、大きくざわついている。`);
      await you.say_and_wait(
        `……あの人の服を、タオル代わりに引き裂いたんじゃ……`,
        true,
      );
      await era.printAndWait(`따가운 느낌이 가신 뒤, 번쩍 눈을 떴다.`);
      await you.say_and_wait(`ごめん、なんとかするから……${falcon.name}。`);
      await era.printAndWait(
        `눈앞에 보인 것은 오른쪽 소매 부분이 뜯겨나간 아이돌 의상이었다.`,
      );
      await era.printAndWait(
        `무대 위에 있던 ${falcon.teen_sex_title}가 어느새 무대 아래로 내려와 있었다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `소란스러워진 인파를 간신히 진정시킨 후, ${you.name}과(와) ${falcon.name}は寮へ戻る道を歩いていた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`무슨 말을 먼저 꺼내야 할지 알 수 없었다.`);
      await era.printAndWait(
        `こんなに慌てた${falcon.name}は初めてだ。${falcon.name}と永遠に分かれると知ったみたいに。`,
      );
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(`ファル子、台無しにしちゃった……`);
      await falcon.say_and_wait(
        `다들 멀리서 팔코를 응원하려고 여기까지 와주신 건데.`,
      );
      await era.printAndWait(`충동적인 행동 뒤에 후회가 밀려오기 시작한 ${falcon.name}.`);
      await you.say_and_wait(
        `아니야, 그렇게 애타게 걱정해주는 팔코의 모습을 보고 팬들도 분명 같이 마음 졸였을 거야.`,
      );
      await you.say_and_wait(
        `팔코의 안도하는 표정을 보고 나면, 그들도 분명 안심할 거야.`,
      );
      await era.printAndWait(
        `${falcon.name}은 무슨 말을 하려다 결국 입을 다물었다.`,
      );
      await era.printAndWait(
        `祭りに浸る人波と逆方向へ歩き、人通りの少ない場所まで来て、${falcon.name}がやっと口を開いた。`,
      );
      await falcon.say_and_wait(`${callname}、ファル子って、わがままかな。`);
      await falcon.say_and_wait(
        `ファンみんなを平等に愛するって言ってるのに、天秤はいつも片方に傾く。`,
      );
      await falcon.say_and_wait(
        `ファル子、結局約束を破った……自分の責任（アイドルの責任）にも、また背いた。`,
      );
      await era.printAndWait(
        `何度も考えて、${falcon.name}は胸の言葉を出した。`,
      );
      await era.printAndWait(
        `${you.name}은 알고 있었다. 이것이 ${falcon.sex}を苦しめる迷いだ。`,
      );
      await you.say_and_wait(`팔코, 트레이너라는 직업에 대해 알고 있어?`);
      await era.printAndWait(
        `잠시 생각한 끝에, ${you.name}은 최대한 차분하게 말을 이어갔다.`,
      );
      await falcon.say_and_wait(
        `——トレーナーは担当の${falcon.uma_sex_title}の可能性を引き出し、体と心を守る。いちばん大事なのは、${falcon.uma_sex_title}が${falcon.uma_sex_title}の道を、できるだけ遠くまで歩けるようにすること。`,
      );
      await you.say_and_wait(
        `맞아, 팔코가 말한 것들을 해낼 수 있다면 이미 합격점인 트레이너야.`,
      );
      await you.say_and_wait(
        `……하지만, 더 빛나는 트레이너가 되려면 아직 멀었지.`,
      );
      await falcon.say_and_wait(`……ファル子が目指すアイドルと同じだね。`);
      await you.say_and_wait(
        `위에서 말한 책무 외에도, 우리는 실패했을 때 어떻게 할지 더 고민하곤 해.`,
      );
      await you.say_and_wait(
        `실력과 재능이 압도적인 전설적인 트레이너나, 남들이 시기할 정도로 운이 좋은 천운의 소유자가 아니라면, 우리 같은 평범한 인간들은 모두 이 진지한 과제에 직면하게 돼.`,
      );
      await you.say_and_wait(
        `成功したときは、勝ったという事実で約束を守れた気になれる。失敗したとき、${falcon.couple_title}に大口を叩いた自分を、どう見る。`,
      );
      await you.say_and_wait(
        `비록 최선을 다했지만, 그저 운이 좋지 않았을 뿐이라 해도 말이야.`,
      );
      await falcon.say_and_wait(`그렇구나……`);
      await you.say_and_wait(
        `아쉽지만 우리는 실패가 가져올 결과를 감당해야만 해.`,
      );
      await you.say_and_wait(
        `いちばん軽くて、見込んでいた成果が落ちて外から疑われる。重ければ辞職を迫られ、命の危険すらある。`,
      );
      await you.say_and_wait(
        `이 과제에 대해 훌륭한 트레이너들은 저마다의 답을 내놓겠지. 내가 내린 답은 이거야.`,
      );
      await you.say_and_wait(
        `自分では選べない事故の裏には、結局自分への好意がある。事故が起きて、その場では失敗しても、最後はその失敗のほうが成功よりいい。`,
      );
      await you.say_and_wait(`だから、この責任を引き受ける。`);
      await you.say_and_wait(
        `選択には、自分で責任を持つ。アイドルもトレーナーも、行き着く先は同じだ。`,
      );
      await you.say_and_wait(
        `그러니 그것의 책임을 이해했다면, 네가 생각하는 방식대로 나아가봐.`,
      );
      await era.printAndWait(
        `이어지는 길 위에서 ${falcon.name}의 발걸음은 한결 가벼워져 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_48
  ws_95_48: (() => {
    const title = "크리스마스♪";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}과(와) ${falcon.name}이 함께 보내는 세 번째 크리스마스.`,
      );
      await falcon.say_and_wait(`고마워 여러분!`);
      await era.printAndWait(
        `크리스마스 당일에도 팬들에게 보답하기 위한 콘서트가 열렸다.`,
      );
      await era.printAndWait(`팬들 「팔코! 팔코!」`);
      await falcon.say_and_wait(
        `언제나 팔코를 응원해주는 여러분께 감사하는 마음으로, 팔코의 진심을 담은 선물을 준비했어!`,
      );
      await era.printAndWait(`ファンA「ありがとうございます！」`);
      await era.printAndWait(`팬 B 「앞으로도 계속 팔코를 응원할게요!」`);
      await era.printAndWait(`팬 C 「모든 레이스 다 보러 갈게요!」`);
      await era.printAndWait(
        `贈り物がなくなったあと、受け取れなかったファンがいくつか、肩を落としている。`,
      );
      await falcon.say_and_wait(
        `팔코의 감사 축제에 참가해준 팬 여러분, 이제 팔코의 미소로 여러분의 마음을 따뜻하게 녹여줄게!`,
      );
      await era.printAndWait(
        `남은 팬들은 악수와 미소라는 선물을 받았다.`,
      );
      await era.printAndWait(
        `팬 D 「비록 늦게 와서 선물은 못 받았지만, 앞으로도 팔코를 계속 응원할게요!」`,
      );
      await era.printAndWait(
        `팬들이 모두 흩어진 뒤, 현장에는 ${you.name}과(와) 팔코 두 사람만 남았다.`,
      );
      await falcon.say_and_wait(`드디어 끝났다!`);
      era.printButton(`贈り物をもらったファン、きっと嬉しいよ`, 1);
      await era.input();
      await falcon.say_and_wait(`응!`);
      await falcon.say_and_wait(
        `팬이 한 명도 없던 시절부터 시작해서 이렇게 빛나는 아이돌이 되기까지, ${callname}의 도움이 없었다면 팔코는 여기까지 올 수 없었을 거야!`,
      );
      await era.printAndWait(
        `${you.name}을(를) 향해 고개를 숙여 인사하는 팔코의 모습에 ${you.name}은 조금 놀랐다.`,
      );
      era.printButton(
        `いや、どれだけ言ってもファル子の手柄だ。僕は分内のことだけ`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(
        `그럴 리가! ${callname}がいなかったら、ファル子は出走の機会すらなかった！`,
      );
      await falcon.say_and_wait(`그리고, 팔코는 ${callname}을…… 아, 미안.`);
      await falcon.say_and_wait(`우리 이제 어디 좀 둘러보러 갈까?`);
      await falcon.say_and_wait(`外泊許可も、もう出してあるよ！`);
      await era.printAndWait(
        `${you.name}의 손을 살며시 잡은 ${falcon.name}이 ${you.name}을(를) 이끌었다.`,
      );
      await you.say_and_wait(`こっちの道具は？`);
      await falcon.say_and_wait(`괜찮아, 괜찮아!`);
      await era.printAndWait(`暖房の効いた部屋を出ると、すぐ寒さが来る。`);
      await falcon.say_and_wait(`外、思ったより寒いね。`);
      await era.printAndWait(
        `保温の手袋をしていても、擦れた隙間から冷気が入ってくる。`,
      );
      await you.say_and_wait(`サイゼリヤで、しっかり食べようか。`);
      await era.printAndWait(
        `경제적이고 실속 있는 사이제리야는 배고픈 두 사람에게 아주 매력적인 선택지였다.`,
      );
      await falcon.say_and_wait(
        `${
          falcon.name
        }もそう思ってた。${callname}といっしょに食べるなら、急にテンション上がる⭐`,
      );
      await you.say_and_wait(`그럼 빨리 가보자!`);
      era.drawLine();
      await era.printAndWait([
        falcon.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: "건", color: falcon.color },
        "배!」",
      ]);
      await era.printAndWait(
        `暖色の灯りの下、店のざわめきと食器のぶつかる音が、独特の響きになる。`,
      );
      await falcon.say_and_wait(`사이제리야 음식은 생각보다 더 맛있네.`);
      await you.say_and_wait(`크리스마스라서 그런 거 아닐까? 여기 있는 사람들 다 즐거워 보이잖아.`);
      await falcon.say_and_wait(
        `그런 면도 있겠지만, 무엇보다 평범한 ${falcon.uma_sex_title}처럼 축제 분위기를 즐기고 있어서 그런 것 같아.`,
      );
      await you.say_and_wait(`팔코, 아이돌 활동에 지친 거야?`);
      await falcon.say_and_wait(`ううん？ むしろ楽しんでるよ！`);
      await era.printAndWait(`目を見開いたファル子が、首を傾げる。`);
      await you.say_and_wait(`앞으로의 여정도 팔코는 계속 노력해야 해.`);
      await falcon.say_and_wait(`夢の杯？`);
      await you.say_and_wait(
        `레이스 말고도 스케줄 관리에 유의해서 너무 과로하지 않게 조심해야 해!`,
      );
      await era.printAndWait(`어느새 평소처럼 설교하는 모드로 돌아가 버렸다.`);
      await falcon.say_and_wait(
        `우우~ 이런 분위기에서 ${callname}って本当に木だね。`,
      );
      await era.printAndWait(
        `残り半分のジュースをぐるぐる混ぜて、不満そうなファル子が${you.name}을(를) 바라보았다.`,
      );
      await falcon.say_and_wait(
        `でも、そういう${callname}だから、${falcon.name}がいちばん好きなんだ！`,
      );
      await era.printAndWait(`急に笑うファル子は、余計に可愛い。`);
      await falcon.say_and_wait(`ん——ちょっと寄ってもいい？`);
      await era.printAndWait(`そう言って、${you.name}の席へ体を寄せる。`);
      await you.say_and_wait(`……`);
      await falcon.say_and_wait(`그럼! 하나, 둘, 셋!`);
      await era.printAndWait(`${falcon.name}은 스마트폰으로 입맞춤하는 순간을 찍어버렸다.`);
      await era.printAndWait(`アイドルとしては、絶対NGだよね。`);
      await falcon.say_and_wait(
        `アイドルのファル子は、平等な愛をファンひとりひとりに渡す。でも今の私は、どこにでもいる普通の${falcon.uma_sex_title}인걸!`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_6
  ws_95_6: (() => {
    const title = "팔코와 발렌타인♪";
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`今年のバレンタインは、専用の会場で開かれた。`);
      await era.printAndWait(
        `팔코는 평소 활동하던 장소에서 열기를 고집했지만, 찾아올 팬들과 호기심에 방문할 관광객들을 고려한 결과였다.`,
      );
      await era.printAndWait(`……어쩌면 안전을 위한 배려였을지도 모른다.`);
      await falcon.say_and_wait(`ファル子の感謝祭に来てくれて、ありがとう♪`);
      await falcon.say_and_wait(
        `평소 아이돌인 팔코를 묵묵히 응원해주는 여러분께 보답하기 위해, 이건 팔코가 어제 하루 종일 만든 선물이야!`,
      );
      await era.printAndWait(
        `ファル子は会場のファンに、包装したチョコの箱を見せた。`,
      );
      await you.say_as_passer_by_and_wait(`팬들`, `팔코! 팔코!`);
      await falcon.say_and_wait(`응응! 여러분의 열정, 팔코에게 다 전달됐어!`);
      await falcon.say_and_wait(
        `この勢いで、ファル子の気持ちが入ったチョコも味わってね！`,
      );
      await you.say_as_passer_by_and_wait(
        `팬들`,
        `오오오오! 팔코! 팔코!`,
      );
      era.drawLine();
      await falcon.say_and_wait(`앞으로도 계속 팔코를 응원해줘!`);
      await era.printAndWait(
        `마지막 팬이 초콜릿을 들고 만족스럽게 떠난 후, 현장에는 ${you.name}과(와) ${falcon.name}만 남았다.`,
      );
      await era.printAndWait(
        `${falcon.name}の後ろに積まれたチョコの山も、配り切った。`,
      );
      await falcon.say_and_wait(`あ、待って、まだ一部ある！`);
      await era.printAndWait(
        `${falcon.sex}는 구석에서 정성스럽게 포장된 선물 상자 하나를 꺼냈다. 아마 행사장을 준비할 때부터 미리 챙겨둔 모양이었다.`,
      );
      await falcon.say_and_wait(
        `これは競走${falcon.uma_sex_title}の${falcon.name}から、${callname}への日ごろの感謝。`,
      );
      await era.printAndWait(
        `${falcon.name}의 말투는 생각보다 덤덤해서 어떤 변화도 느껴지지 않았다.`,
      );
      await era.printAndWait(
        `考えすぎだろう。最近は、ちゃんと休んだほうがいい。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_9
  ws_95_9: (() => {
    const title = 'スマートファルコン';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        "타오르는 듯한 붉은 하늘이 짙은 남색에 갈라지고, 이내 흩뿌려진 별가루가 되었다.",
      );
      await era.printAndWait("평소와 다를 바 없는 콘서트였다.");
      await era.printAndWait(
        'シニア級に入って注目は少し落ちたが、ダートのファンの熱は減っていない。',
      );
      await era.printAndWait(
        '個性がこれほどはっきりしたダートアイドルが、珍しいせいだろう。',
      );
      await era.printAndWait([
        'ファンに囲まれた ',
        falcon.get_colored_name(),
        ' は、クリスタルにんじんのような引力を持っている。',
      ]);
      await falcon.say_and_wait(`ふぅ——みんな！ ありがとう！`);
      await era.printAndWait(
        `少し先のメドレーが終わりに入り、ファンは喜びをステージのアイドルへ渡している。`,
      );
      await you.say_as_passer_by_and_wait(
        `새로운 팬 A`,
        `CDで聞いただけだけど、やっぱり現場のほうが気持ちいいな。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンB`,
        `ファル子が${falcon.uma_sex_title}アイドルの愛をみんなに平等に分けてるから、こんな引力があるんだよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンC`,
        `이런 말 하면 분위기 파악 못 하는 것 같지만, 팔코 오늘 좀 이상하지 않아?`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンC`,
        `前のファル子は跳ねる元気があったのに、いまは変な感じがする。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `次のレースのせいだろ。ファン発表会で、シニア級のダートを全部勝つって言ったし。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `でも、そんな難しい目標でも、ファル子は笑えてる。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `『これが${falcon.uma_sex_title}アイドルなんだ』って、いつも思う。`,
      );
      await you.say_as_passer_by_and_wait(
        `새로운 팬 E`,
        `그러고 보니 작년에 어떤 팬이 습격——`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンB`,
        `Stop! 그 일은 언급해서는 안 되는 금기라고!`,
      );
      await era.printAndWait(
        `열렬히 토론하던 팬들은 찬물이 끼얹어진 듯한 분위기에 입을 다물었고, 다들 대화를 이어갈 의욕을 잃었다.


`,
      );
      await falcon.say_and_wait(`${callname}.`);
      await era.printAndWait(
        `마지막 팬이 현장을 떠난 후에야 ${you.name}은 멀지 않은 곳에서 ${falcon.name}을(를) 맞이했다.`,
      );
      await era.printAndWait(
        `미소를 띤 ${falcon.teen_sex_title}는 ${you.name}と、今日のライブの成功と足りないところを洗い、肯定やより良い結論が出るたび、トレセンへ戻る小径に明るい笑い声が乗った。`,
      );
      await falcon.say_and_wait(`${callname}.`);
      await you.say_and_wait(`응?`);
      await falcon.say_and_wait(`残念だけど。`);
      await era.printAndWait(`${falcon.name}の声は、静かに満ちている。`);
      await falcon.say_and_wait(
        `아니, 아무것도 아니야. 이렇게 거리를 유지하는 게 팔코에게도, 그리고 ${callname}にもいちばんいい。`,
      );
      await era.printAndWait(
        `いつもの無謀さとは違い、${falcon.name}은 ${you.name}에게 미소를 지어 보였다.`,
      );
      await falcon.say_and_wait(
        `ファル子も考えたの。${callname}과(와)의 관계가 너무 가까웠던 걸지도 모르겠네.`,
      );
      await era.printAndWait(`うまく言えない隔たりが、二人のあいだに広がる。`);
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドルとして、ファンみんなを不平等に好きになっちゃダメだよ。`,
      );
      await you.say_and_wait(`아니, 그럴 것까지는 없잖아.`);
      await era.printAndWait(`${you.name}이(가) 다음에 무슨 말을 해야 할지 고민하기 시작했을 때.`);
      await falcon.say_and_wait(`${callname}、これはしばらく預かって。`);
      await era.printAndWait(`${falcon.name}은 조심스럽게 이마의 머리 장식을 떼어냈다.`);
      await you.say_and_wait(`……왜?`);
      await era.printAndWait(
        `驚きで思考が止まり、胸の疑問がそのまま口に出た。`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}は笑って、水で湿ったリボンを渡した。`,
      );
      await you.say_and_wait(`ファル子にとって、大事なものだろう？`);
      await falcon.say_and_wait(`うん。ファル子には、比べられない宝物。`);
      await falcon.say_and_wait(
        `하지만 팔코는 이걸 직접 가지고 있는 것보다, 잠시 ${callname}에게 빌려주는 게 가장 쓰임새가 있을 것 같아.`,
      );
      await you.say_and_wait(`いや、違う。どこか間違ってる。`);
      await era.printAndWait(
        `마치 눈앞에서 롤러코스터가 끊어진 레일을 향해 달려가는 것을 지켜보는 기분이었다.`,
      );
      await era.printAndWait(
        `꽉 쥐고 있던 오른손 주먹이 바이스 같은 가느다란 손길에 강제로 열렸다.`,
      );
      await falcon.say_and_wait(`${callname}、本当に木頭だね`);
      await era.printAndWait(
        `少し残念そうで、淀んだ水のような静けさで答えた。`,
      );
      await falcon.say_and_wait(
        `これからファル子は、${falcon.uma_sex_title}アイドルとして立つ。だから——`,
      );
      await era.printAndWait(`심연에 이르기까지.`);
      await falcon.say_and_wait(
        `앞으로도 잘 부탁해, ${you.actual_name} 트레이너.`,
      );
      await era.printAndWait(`なるほど。過去の自分と訣別するためのもの、か。`);
      await era.printAndWait(
        `わかりやすいな、ははは。答えは絶対にそれじゃないだろ。`,
      );
      await you.say_and_wait(`하하, 그렇지? 아니, 아니야, 아마도.`);
      await you.say_and_wait(`${falcon.name}.`);
      await era.printAndWait(
        `마치 교실 천장에 매달린 형광등이 떨어져 가슴팍에서 깨졌을 때 나는 듯한 비명이 들리는 것 같았다.`,
      );
      await falcon.say_and_wait(`그러니까, ${callname}. 이걸로 된 거야.`);
      await era.printAndWait(`${falcon.name}は表情を変えず、一歩下がった。`);
      await you.say_and_wait(`장난하지 마!`);
      await era.printAndWait(
        `${falcon.name}과 함께 보낸 시간을 이렇게 부정하는 거야?`,
      );
      await era.printAndWait(`なぜ、ここまで頑張って、この結果になる。`);
      await era.printAndWait(
        `怒りで乱れた体は、悔しさと憎しみを吐き出したいのに、空虚な破片の言葉しか出せない。`,
      );
      await era.printAndWait(
        `시야는 흐릿해지고 입에서는 스스로도 알 수 없는 말이 반복되었으며, 눈앞의 사실을 무의식적으로 거부했다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 현기증에서 회복했을 때, 곁에 있던 ${falcon.teen_sex_title}는 이미 온데간데없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
};
