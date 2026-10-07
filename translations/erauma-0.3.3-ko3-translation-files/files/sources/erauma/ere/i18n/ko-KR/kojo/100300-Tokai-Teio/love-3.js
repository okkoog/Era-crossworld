// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/love-3"),

  // [번역 대상] 49
  49: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('……모르겠어.');
      await teio.print_and_wait([
        callname,
        '을(를) 만나면 이유도 없이 심장이 빨리 뛰어. 레이스 전이랑 같은 반응……',
        you.sex,
        '이(가) 다른 ',
        teio.phy_sex_title,
        '와(과) 이야기하는 걸 보면 마음이 불편하고, 달린 뒤 ',
        you.sex,
        '이(가) 미소 지으며 다가오면 몸이 더 뜨거워져……',
      ]);
      await teio.say_and_wait('으윽——도대체 왜 이러는 거야!');
      await teio.print_and_wait(
        `친구들에게 물어봐도 ${teio.couple_title}은(는) 얼굴을 붉히며 도망가거나 말을 돌리거나 웃기만 할 뿐 제대로 설명해 주지 않는다. 반은 농담, 반은 진심으로 자기 트레이너를 좋아하는 거 아니냐고 묻는 사람도 있다. 큭, 그런 건……`,
      );
      await teio.print_and_wait(
        '그런 걸 트레이너한테 물어볼 수 있을 리 없잖아아아!!',
      );
      await era.printAndWait(
        `침대 위에서 한바탕 버둥거린 뒤 머리를 푼 ${teio.uma_sex_title}은(는) 종아리를 흔들며 발끝으로 침대 가장자리를 톡톡 두드린다.`,
      );
      await teio.say_and_wait(
        '이제 됐어. 사랑이라 해도 테이오 님은 지지 않아.',
      );
      await teio.print_and_wait(
        `${you.name}의 담당은 어느새 붉어진 얼굴을 들고 두 사람의 앞날을 제멋대로 정해버린다……`,
      );
      // TALENTNAME:0 = 感情因子
      if (era.get('talent:3:0') !== 1) {
        era.println();
        era.print([teio.get_colored_name(), '은(는) [감수성 풍부] 상태가 되었다!']);
      }
    };
    f.title = '두근거림';
    return f;
  })(),

  // [번역 대상] 74
  74: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `오늘도 평소와 같은 하루, ${you.name}은(는) 늘 그렇듯 운동장에 서서 담당이 달리는 모습을 보고 있다.`,
      );
      await era.printAndWait(
        `얼마나 시간이 흘렀을까. ${you.name}은(는) 생각하지 않을 수 없다. 공원에서 ${teio.sex}과(와) 만난 뒤 지금까지 별로 시간이 지나지 않은 것 같기도 하고, ${teio.sex}와 많은 일을 함께 넘어온 것 같기도 하다.`,
      );
      await era.printAndWait(
        `추억이 차례차례 떠오른다. ${teio.sex}이(가) 땀을 흩뿌리며 필사적으로 훈련하는 모습, 눈을 가늘게 뜨고 웃는 얼굴, 이를 악물고 결승선을 통과하는 장면, 젊고 활력 넘치는 모습……`,
      );
      await era.printAndWait(
        `처음 수많은 사람 앞에서 ${teio.sex}과(와)의 계약을 빼앗듯 서명했을 때는 어떤 마음이었을까. ${teio.sex}이(가) 자신의 경력을 정상으로 끌어올려 줄 거라 생각해서였을까. 아니면 달리는 모습과 자신감 넘치는 밝은 태도에 감화되어 끌렸던 걸까.`,
      );
      await era.printAndWait(
        `아니면…… 그저 ${teio.sex} 본인을 봤기 때문일까. 한눈에 자신이 ${teio.sex}의 담당 트레이너가 되어야 한다는 충동이 생겼던 걸까.`,
      );
      era.println();
      await teio.say_and_wait(`트레이너?`);
      era.println();

      era.printButton('「뭐야?」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 전속 담당 ${teio.uma_sex_title}은(는) 달리는 동안 풀어진 머리를 한 손으로 대충 쓸어 올려 머리끈으로 다시 묶으면서, 다른 손으로 ${you.name}이(가) 미리 열어둔 물통을 받아 작은 입으로 마시기 시작한다.`,
      );
      await era.printAndWait(
        `땀인지 물인지 모를 액체가 하얀 피부를 타고 흐르고, ${you.name}은(는) 황급히 시선을 돌리지만 ${teio.uma_sex_title}이(가) 머리를 들어 올리며 드러낸 목덜미에 눈이 간다.`,
      );
      await teio.say_and_wait(`트레이너, ${you.name} 왜 그래?`);
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 말이 제대로 정리되지 않은 채 엉뚱한 말을 입 밖에 낸다.`,
      );
      era.printButton(
        '「응? 아아! 아무것도 아니야. 널 어떻게 보고 있는지 생각했을 뿐이야.」',
        1,
      );
      await era.input();

      await teio.say_and_wait(`……？`);
      era.println();
      await era.printAndWait(
        `작은 ${teio.uma_sex_title}은(는) 웃음을 참지 못하고 물통을 내려놓은 뒤 뺨을 조금 붉힌 채 돌아서 ${you.name}의 시선과 마주한다.`,
      );
      era.println();
      await teio.say_and_wait(`그럼 ${callname}은(는) 나를 어떻게 보고 있어?`);
      era.println();
      await era.printAndWait(
        `${teio.sex}은(는) ${you.name}을(를) 빤히 바라보고, 그 시선에는 부끄러움과 약간의 기대가 섞여 있다.`,
      );
      era.println();
      await era.printAndWait(`${you.name}은(는)——`);
      era.printButton(
        `「……지금 내 입장에서는 말할 수 없을지도 몰라」 (관계를 진전시킨다)`,
        1,
      );
      era.printButton(
        `「우수하고 활기차고 귀엽지만 장난꾸러기인 ${teio.child_sex_title}…… 아니면 ${teio.younger_sibling_sex_title}, 정도려나」 (아직 진전시키지 않는다)`,
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await teio.say_and_wait('그럼 어떤 관계가 되고 싶은데?');
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 눈을 빙글 굴리고 킥킥 웃으며 질문을 덧붙인다.`,
        );
        await era.printAndWait('이 꼬맹이 악마 같으니!');
        await era.printAndWait(`${you.name}은(는) 머리가 무거워져 저도 모르게 내뱉는다.`);
        await you.say_and_wait(
          '아아…… 계속 그런 식이면 앞으로 같이 사는 게 걱정되겠네.',
        );
        await teio.say_and_wait('가, 같이?');
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 황급히 얼굴 아래쪽을 가린다. ${you.name}도 기세를 타고 각오를 굳힌다.`,
        );
        await you.say_and_wait(
          '나는…… 처음부터 계속 너와 함께 달리고 싶다고 생각했어. 그 제안을 받아줄래?',
        );
        await teio.say_and_wait(`/////`);
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 두 눈을 감고 크게 숨을 쉰 뒤 깊이 들이마시고 손을 내리며 ${you.name}을(를) 똑바로 바라본다.`,
        );
        await teio.say_and_wait(
          '후회하면 안 돼. 무적의 테이오 님은 의외로 독점욕이 강하니까!',
        );
        era.println();
      } else {
        await teio.say_and_wait(`그렇구나……`);
        await era.printAndWait(
          `${teio.uma_sex_title}은(는) 저도 모르게 입술을 삐죽 내민다. ${you.name}은(는) 황급히 헛기침하고 오늘의 훈련 내용을 읽기 시작했다.`,
        );
      }
      return ret;
    };
    f.title = '변하지 말아줘';
    return f;
  })(),

  // [번역 대상] 89
  89: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('トレーナールーム');

      await teio.say_and_wait(`ハチミツ～`);
      era.println();
      await era.printAndWait(
        `${you.name} はあいづちを打ち、小さな${teio.uma_sex_title}を懐へ座らせ（${teio.sex}がもぞもぞしてはしゃぐのを防ぐため）、手にしたタオルで慣れた様子で${teio.sex}の髪を乾かす。`,
      );
      await era.printAndWait(
        'もう一方の手も休まず、マウスでパソコンのトレーニング資料を見ている。',
      );
      era.println();
      await teio.say_and_wait('ん……');
      era.println();
      await era.printAndWait(
        `小さな${teio.uma_sex_title}は冷蔵庫から出したハチミツ特製ドリンクを飲みながら、${you.name} の画面の資料も見ている。`,
      );
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait('我慢できなくなった。');
      await era.printAndWait(
        `湯上がりの${teio.teen_sex_title}の香り、太ももに触れる肌、ときどき自分の下腹を撫でる${teio.uma_sex_title}の毛並み……`,
      );
      await era.printAndWait(
        `${you.name} は、血の流れが生理的な方向へ傾いたのを感じる。`,
      );
      era.println();
      await teio.say_and_wait('トレーナー～このページ、ずっとだよ。');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${you.name} の腿のうえに座る${teio.sex}は自然に後ろへ凭れかかり、${you.name} は体が強張る。`,
      );
      await era.printAndWait(
        `続いて${teio.sex}の頭が ${you.name} の胸へ寄り、小さなウマ耳がくるりと回り、${you.name} の胸元へ貼りつく。`,
      );
      era.println();
      await teio.say_and_wait(`心臓、ちょっと速いよ。`);
      await era.printAndWait(`${you.name}——`);
      era.printButton('顔を下げ、担当の耳を含む（関係を進める）', 1);
      era.printButton('無理に立ち上がる（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `憑かれたように、${you.name} は顔を下げ、テイオーのウマ耳の先端を軽く銜える。口腔越しに、${teio.sex}が不自然に一度震え、すぐに静まり、黙って受け入れ、${you.name} の次を待っているのがわかる。`,
        );
        era.println();
        await you.say_and_wait(
          'テイオー……この先も、もっと遠いところまで、一緒に行ってくれるか。',
        );
        era.println();
        await era.printAndWait(
          `${teio.sex}の顔はすでに真っ赤で、何か小さく言い、はっきりと頷いた。`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' は ',
            {
              color: buff_colors[2],
              content: '[淫身]',
            },
            ' になった！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は胸に浮かんだ、ごく当たり前の衝動を押さえ、${teio.uma_sex_title}を支え、${teio.sex}を横へ下ろして立ち上がり、咳払いして何事もなかったふりをする。${teio.name} は少し不満そうだ。`,
        );
      }
      return ret;
    };
    f.title = 'ずっと、一緒に';
    return f;
  })(),

  // [번역 대상] 89-hurt
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('トレーナールーム');
      await era.printAndWait('沈黙。');
      await era.printAndWait(
        `${you.name} は眼前で目を閉じ、顔に水滴を落とし、体をわずかに震わせている${teio.uma_sex_title}${teio.teen_sex_title}を見ている。`,
      );
      await era.printAndWait(
        `それから ${you.name} はいつものように、温めた柔らかいバスタオルを手に取り、${teio.sex}の体を拭き、櫛とドライヤーで毛並みを整える。`,
      );
      await era.printAndWait(
        `あのことがあってから、${teio.sex}はよく ${you.name} の部屋の浴室を借りに来る。浴後は ${you.name} が体を乾かし、ついでにケアをする。今ではもう習慣だ。`,
      );
      await era.printAndWait(
        `拭き終えると、${you.name} は道具をそばの小さな机へ置き、担当の脚のマッサージを始め、${teio.sex}のリハビリを手伝う。`,
      );
      await era.printAndWait(
        `${you.name} の繭のある、やや粗い手が、${teio.uma_sex_title}${teio.teen_sex_title}にとっていちばん大切な足とふくらはぎを上下に撫で、ときどき軽い力で押す。`,
      );
      await era.printAndWait(
        `滑らかで弾力のある肌の感触が ${you.name} の指先へ返る。外見は逞しく美しい両脚だが、内側には危うさが潜んでいる。それらが${teio.sex}を支え、走らせ、レース場を駆けさせた。そして今は……`,
      );
      era.println();
      await teio.say_and_wait('ねえ、トレーナー。');
      era.println();
      await era.printAndWait(
        `${you.name} は顔を上げる。${teio.sex}が何を言うかは薄々わかっているが、それでも返す。`,
      );
      await you.say_and_wait('どうした、テイオー？');
      era.println();
      await teio.say_and_wait('ボク……キミは……これから、どうすればいいの？');
      era.println();
      await era.printAndWait(
        `${teio.sex}は顎を軽く引き、両脚を見る。かつて${teio.sex}と並んで戦った、今は生気もなく、戻るかもわからない相棒を。同時に、${you.name} も見ている。`,
      );
      era.printButton(`「これが、自分の答えだ」（関係を進める）`, 1);
      era.printButton(`「……」（まだ進めない）`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は小さな箱を取り出し、',
          teio.uma_sex_title,
          teio.teen_sex_title,
          'が反応するより先に、左足をそっと支え、包装を開け、中の指輪を',
          teio.sex,
          'の薬趾へ通す。',
        ]);
        await era.printAndWait(
          `${you.name} が自ら選んだ趾環は寸法がちょうどよく、固定できて、装用者の趾の動きを妨げない。`,
        );
        await era.printAndWait(
          `両手の腹で、${teio.uma_sex_title}の足にある血行を促すツボを、習慣のように軽く摘む。`,
        );
        await era.printAndWait(
          `それから ${you.name} は顔を上げ、下から上へ視線を運び、担当の真っ赤な顔と、涙を含んだような両目と向き合う。`,
        );
        era.printButton('「いいか？」', 1);
        await era.input();
        await teio.say_and_wait('……いいよ！');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title}は泣き笑い、両腕を開く。${you.name} は立ち上がり、${teio.sex}を強く抱き、もう離さない。`,
        );
        // TALENTNAME:53 = 神の足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' は ',
            {
              color: buff_colors[2],
              content: '[神の足]',
            },
            ' を得た！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は何を言いたいのか。何を言うべきか。何が言えるのか。結局は、溜息ひとつだった。`,
        );
        await era.printAndWait(
          `${you.name} は黙って残りの手順を済ませ、静かな${teio.teen_sex_title}を抱き上げて下ろし、部屋の外まで送り出す。`,
        );
      }
      return ret;
    };
    f.title = '契約は結ばれた';
    return f;
  })(),

  // [번역 대상] 99
  99: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} tname 得た特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} は清んだ空気を吸い、陽を浴びて歩いている。`,
      );
      await era.printAndWait(
        `突然、背後にさらさらという音がし、柔らかく弾力のある感触が腰の後ろへ来る。純白の袖を着けた両手が ${you.name} の体を強く抱きしめた。`,
      );
      era.println();
      await you.say_and_wait(
        `白昼堂々、${teio.uma_sex_title}に抱かれてる年上のコーチを、周りはどう見ると思う。`,
      );
      era.println();
      await teio.say_and_wait(
        `すごく幸せでしょ。ボクがそんな扱いされて、しかも損した顔してる人を見たら、一発海へ蹴り飛ばすけど。`,
      );
      era.println();
      await you.say_and_wait('命だけは助けてくれ。');
      era.println();
      await teio.say_and_wait('大丈夫。今のボクは、もう他人じゃないし。');
      era.println();
      await era.printAndWait(
        `${you.name} は余光で、${teio.sex}の尻尾が嬉しそうに揺れるのを見る。`,
      );
      era.println();
      await teio.say_and_wait('それに……今は他人もいないよ。');
      era.println();
      await era.printAndWait('確かに。');
      await era.printAndWait(
        `なぜか、${you.name} と${teio.sex}が恋人になってから、学園の催しで妙な賞を当てた。`,
      );
      await era.printAndWait(
        '賞品は、二人用クルーズの無料一日見学と、婚礼衣装のレンタル付き。',
      );
      await era.printAndWait(
        `${you.name} は当時のスタッフたちの計画どおりという目と、曖昧な微笑みを思い出し、苦笑する。`,
      );
      era.println();
      await you.say_and_wait('……そんなに密着されると、問題が起きやすい。');
      era.println();
      await teio.say_and_wait('今は真っ昼間だよ、それに船のうえだよ？');
      era.println();
      await you.say_and_wait('だから困るんだ。どう収めろというんだ。');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「……トレーナー${you.adult_sex_title}って、担当の生徒に反応する変態なんじゃないの？」`,
          color: teio.color,
        },
        '（笑）',
      ]);
      era.println();
      await you.say_and_wait('違う……いや、なんとも……いや、違うはずだ！');
      era.println();
      await teio.say_and_wait('ふふ……じゃあ、説明して？');
      era.println();
      await era.printAndWait(
        `担当${teio.uma_sex_title}の体がさらに近づき、${you.name} は喉が渇き、心拍がおかしくなり、慌てて言う。`,
      );
      era.println();
      await you.say_and_wait(
        '自分の自制心に、幻想は抱いてない、というだけだ。',
      );
      era.println();
      await teio.say_and_wait(
        'でもボクは……もう、そういうこともわかっちゃったし……',
      );
      era.println();
      await era.printAndWait(
        `顔を赤らめた${teio.uma_sex_title}${teio.teen_sex_title}はごにょごにょ呟いて ${you.name} から離れる。心地よかった体温が遠ざかる。`,
      );
      await era.printAndWait(
        `ところが${teio.sex}はすぐ戻ってくる。担当は ${you.name} の前へ回り、上着の内側へ潜り込もうとする。`,
      );
      era.println();
      await you.say_and_wait('ますます体裁が悪い。');
      era.println();
      await teio.say_and_wait('かもね。');
      era.println();
      await you.say_and_wait('欲を煽られたら、どうする。');
      era.println();
      await teio.say_and_wait('そのとき考える。');
      era.println();
      await you.say_and_wait('……無責任だな。');
      era.println();
      await teio.say_and_wait('ふふ。');
      era.println();
      await you.say_and_wait('寒いか？');
      era.println();
      await teio.say_and_wait('ん……');
      era.println();
      await era.printAndWait(
        `船足は遅く、潮風も心地よい。それでも耳元の寒風は鋭く、気温が下がったのか。${you.name} は無意識に上着の端を開き、${teio.name} を自分の懐へ包む。白いウェディングドレスを着た——`,
      );
      await era.printAndWait(
        `——花童に見える——小さな${teio.uma_sex_title}が ${you.name} の黒い襟元から顔を出し、全身で ${you.name} に凭れる。`,
      );
      await era.printAndWait('ああ……これで温かい。');
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await teio.say_and_wait('大丈夫だよ。');
      era.println();
      await you.say_and_wait('……？');
      era.println();
      await era.printAndWait(
        `懐の${teio.teen_sex_title}が、突然そんな一言を落とす。`,
      );
      await era.printAndWait(
        `凝視。眼前は ${you.name} を励ます微笑みと、疑いというものを知らない澄んだ瞳。`,
      );
      era.println();
      await teio.say_and_wait('目が、ちょっと逃げてるよ。');
      era.println();
      await you.say_and_wait('……');
      await era.printAndWait(
        `認めざるを得ない。${you.name} は今、少し茫然としていた——これから始まるのは、ふたりの新しい生活だ。`,
      );
      await era.printAndWait(
        `自分の人生を${teio.sex}へ半分渡し、同じく${teio.sex}も ${you.name} の半分を持つ。自分に、この重さを担えるのか。`,
      );
      era.println();
      await teio.say_and_wait(`絶対できるよ、${you.actual_name}。`);
      era.println();
      await era.printAndWait(
        `——${teio.child_sex_title}にこう慰められると、かえって気まずいし慌てる。`,
      );
      await era.printAndWait(
        `${you.name} は微笑み、手を${teio.sex}の頭へ置き、適当に撫でる。${teio.sex}は目を細め、気持ちよさそうに鼻歌を歌う。`,
      );
      await era.printAndWait('懐の至宝は、これほど美しい。');
      await era.printAndWait(
        `この${teio.uma_sex_title}は、汚れのない信念を持ち、そのために体まで捧げた。${teio.sex}の魂は光り輝き、太陽のように眩しい。`,
      );
      await era.printAndWait(
        `この${teio.teen_sex_title}……こそ、${you.name} が一度諦めかけた夢の化身だ。`,
      );
      era.printButton(`「${teio.sex}を抱きしめ、共に進む」（関係を進める）`, 1);
      era.printButton('「手を放し、その場に止まる」（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          ' は ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          ' になった！',
        ]);
      }
      return ret;
    };
    f.title = 'また明日';
    return f;
  })(),
};
