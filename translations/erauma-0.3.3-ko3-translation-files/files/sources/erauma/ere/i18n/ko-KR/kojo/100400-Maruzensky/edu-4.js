// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100400-Maruzensky/edu-4"),

  // [번역 대상] arim_kin_lose_c
  arim_kin_lose_c: (() => {
    const title = '아리마 기념 후・최대의 무대!';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`대기실\n`);
      await you.say_and_wait(`어땠어?`);
      await maru.say_and_wait(
        `함께 달린 ${maru.uma_sex_title}들은 모두 최강의 ${maru.uma_sex_title}을(를) 목표로 하는 ${maru.uma_sex_title}들이야. ${maru.couple_title}와 함께 달릴 수 있어서 기뻤어.`,
      );
      await you.say_and_wait(`만족했어?`);
      await maru.say_and_wait(
        `뭐? 이보다 큰 레이스라면 개선문상 정도잖아. 이런 느낌, 좋아해.`,
      );
      await you.say_and_wait(
        `시니어급이 끝나면 다음 해 여름에 프랑스에서 레이스에 나가볼래?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '아가씨' : '멋진 남자'}인 나도 그렇게 생각했어.`,
      );
      await maru.say_and_wait(`앞으로도 함께 힘내자!`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] arim_kin_win_c
  arim_kin_win_c: (() => {
    const title = '아리마 기념 후・희망의 빛';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `아리마 기념에서 가시밭길을 헤치고 수많은 강적을 꺾은 끝에 ${maru.name}은(는) 아리마 기념을 제패했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `축하드립니다. ${maru.actual_name_with_title}의 아리마 기념 우승, 승부가 정말 치열했죠.`,
      );
      await maru.say_and_wait(
        `응, 선수들은 모두 실력자였어. 덕분에 나도 정말 즐겁게 달릴 수 있었어.`,
      );
      await you.say_as_passer_by_and_wait(`기자 A`, ` ${maru.name}의 소감은 어떻습니까?`);
      await maru.say_and_wait(
        `더 많은 ${maru.uma_sex_title}에게 내 뒷모습을 보여줘서, 나를 뒤쫓고 싶다는 마음이 생겼으면 좋겠어.`,
      );
      await you.say_as_passer_by_and_wait(`기자 A`, `정말 원대한 이상이군요.`);
      await maru.say_and_wait(` ${callname}, 이쪽이야.`);
      await era.printAndWait(
        ` ${maru.name}은(는) 다가온 것을 보고 기자들 앞으로 끌어당겼다.」`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `트레이너 ${you.adult_sex_title}께서는 ${maru.name}의 우승에 대해 감사의 말씀을 하실 게 있습니까?`,
      );
      era.printButton(
        `「승패보다 ${maru.name}이(가) 기뻐하는 게 가장 중요합니다.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        ` ${callname}, 말 잘하네~. 하지만 ${callname}의 격려가 없었다면 나도 이기지 못했겠지.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `감동적인 유대네요. 두 분, 취재에 응해주셔서 감사합니다.`,
      );
      await maru.say_and_wait(`오늘은 어디 가서 푸짐하게 먹으며 축하하자.`);
      await you.say_and_wait(
        `역시 웃고 있는 ${maru.name}이(가) 제일 좋다.`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] asah_sta_5
  asah_sta_5: (() => {
    const title = '아사히배 후・고양되는 감각';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name} 入着。`);
      await maru.say_and_wait(
        `하이! ${callname}, ${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }인 나의 쿨한 모습, 잘 봤어?`,
      );
      era.printButton(`수고했어.`, 1);
      await era.input();
      era.printButton(`G1에서 입상한 것만으로도 대단해.`, 1);
      await era.input();
      await maru.say_and_wait(
        `달리는 ${maru.uma_sex_title}들은 모두 이기고 싶다는 기백으로 가득해. ${maru.elder_sibling_sex_title}인 나도 조금 압박되네.`,
      );
      await you.say_and_wait(` ${maru.name}은(는) 즐기고 있는 것 같은데.`);
      await maru.say_and_wait(`G1이잖아. 상대도 평소보다 한 단계 위야.`);
      await maru.say_and_wait(`그만큼 잔디 위에서 느끼는 즐거움도 전보다 한 단계 위지♪`);
      await you.say_and_wait(`이따가 어디 가서 축하할까?`);
      await maru.say_and_wait(
        `그런 거라면 ${maru.sex_code !== 1 ? '아가씨' : '멋진 남자'}인 내가 인기 있는 디저트 가게를 알고 있어.`,
      );
      era.drawLine({ content: '관중석 반대편' });
      await era.printAndWait(
        `손에 넣은 마권을 꽉 쥔 ${maru.uma_sex_title}은(는) ${maru.name}의 모습을 빤히 바라보고 있다.`,
      );
      await era.printAndWait(`하지만,`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그렇다면 내가 존재하는 의미는……`,
      );
      await era.printAndWait(`무심코 자신과 ${maru.sex}을(를) 비교해버렸다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `앗! 마음속 말이 입 밖으로 나와버렸어.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그런데 왜 마음이 이렇게 아픈 거지?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `나와 너의 거리는 전력을 다해도 닿지 못할 만큼 멀어.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `어째서……`);
      await era.printAndWait(`분한 듯 입술을 깨물며 쥐고 있던 마권을 구겨버렸다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `왜 네 다리에서는 희망이 보이지 않는 거야.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아니야! 나, 무슨 생각을 하는 거야.`,
      );
      await era.printAndWait(
        `무언가 소중한 것이 부서져 다시는 돌아오지 않을 것 같다. ${maru.uma_sex_title}은(는) 다시 ${maru.name}의 모습을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] asah_sta_win
  asah_sta_win: (() => {
    const title = '아사히배 후・열기 최고조';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`阪神競馬場\n`);
      await era.printAndWait(
        `차가운 공기가 폐를 자극하고 추위가 머리를 한층 또렷하게 만든다.`,
      );
      await you.say_and_wait(` ${maru.name}, 반드시 이겨줘.`);
      await you.say_and_wait(`……아니, ${maru.name}이라면.`);
      await you.say_and_wait(
        `승리보다 ${maru.uma_sex_title}들과 함께 달리는 것을 느끼는 편이 더 즐겁겠지.`,
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 레이스가 시작되는 순간을 뚫어지게 바라보았다.`,
      );
      era.drawLine({ content: '관중석 반대편' });
      await era.printAndWait(
        `손에 넣은 마권을 꽉 쥔 ${maru.uma_sex_title}은(는) ${maru.name}의 모습을 빤히 바라보고 있다.`,
      );
      await era.printAndWait(`하지만,`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그렇다면 내가 존재하는 의미는……`,
      );
      await era.printAndWait(`무심코 자신과 ${maru.sex}을(를) 비교해버렸다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `앗! 마음속 말이 입 밖으로 나와버렸어.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그런데 왜 마음이 이렇게 아픈 거지?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `나와 너의 거리는 전력을 다해도 닿지 못할 만큼 멀어.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `어째서……`);
      await era.printAndWait(`분한 듯 입술을 깨물며 쥐고 있던 마권을 구겨버렸다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `왜 네 다리에서는 희망이 보이지 않는 거야.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `아니야! 나, 무슨 생각을 하는 거야.`,
      );
      await era.printAndWait(
        `무언가 소중한 것이 부서져 다시는 돌아오지 않을 것 같다. ${maru.uma_sex_title}은(는) 다시 ${maru.name}의 모습을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] be_Self_contempt
  be_Self_contempt: (() => {
    const title = 'BAD END · 나무가 무성해 흙이 무너지다';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`훈련실`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}, 먼저 갈게. 내일 봐!`);
      await era.printAndWait(`${maru.name}은(는) 훈련실을 나갔다.`);
      await era.printAndWait(
        `하늘은 어둑하다. 어제와 다를 것 없는 평일. 황혼과 밤의 경계를 보여주는 푸른 빛줄기가 훈련실로 들어온다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 멍하니 훈련실의 익숙한 자리에 앉아 있다.`,
      );
      await era.printAndWait(
        `추가 훈련을 위해서도, 계획을 세우기 위해서도 아니다.`,
      );
      await you.say_and_wait(`아마 여기서 물러나는 편이 낫다.`);
      await era.printAndWait(
        `${maru.name}의 능력이 부족해서가 아니다. 오히려 그녀는 모든 계획을 훌륭하게 끝냈고, 실제 경험을 바탕으로 도리어 이쪽에 조언까지 해주었다.`,
      );
      await era.printAndWait(`진짜 문제는`);
      era.println();
      await you.say_and_wait(
        `${maru.name}이라는 지극히 훌륭한 원석은 더 뛰어난 장인이 다듬어야 한다.`,
      );
      await you.say_and_wait(`내 능력이 부족하다. 그뿐이다.`);
      await you.say_and_wait(
        `${maru.name}을(를) 위해서라도 더는 가장해서는 안 된다. 기회를 봐서 솔직하게 이야기해야 한다.`,
        true,
      );
      await era.printAndWait(
        `바닷가에서 찍은 ${maru.name}과(와)의 사진을 부드럽게 쓰다듬은 뒤 둘로 찢고, 조각을 겹쳐 다시 둘로 찢었다.`,
      );
      await you.say_and_wait(
        `가장 좋은 원석은 가장 좋은 장인이 다듬는다. 나는 옳은 일을 하고 있다.`,
      );
      await era.printAndWait(
        `무표정한 채 더는 나눌 수 없을 때까지 찢었다.`,
      );
      await era.printAndWait(
        `신중하게, 꼼꼼하게, 작은 조각 하나도 손바닥에서 빠져나가지 않도록.`,
      );
      await era.printAndWait(
        `창문을 열고 스스로 반응할 시간도 주지 않은 채 손의 조각들을 하늘로 힘껏 던졌다.`,
      );
      await era.printAndWait(
        `하늘로 날아오르려던 잔불이 결국 어쩔 수 없이 땅으로 떨어지는 것을 보며 마음도 그 뒤를 따랐다.`,
      );
      await you.say_and_wait(
        `이제는 ${maru.name}에게 모든 걸 말해야 한다.`,
        true,
      );
      await era.printAndWait(
        `훈련실을 나왔다. 눈물과 땀을 흘렸던 이곳을.`,
      );
      await era.printAndWait(`그리고 문을 세게 닫았다.`);
      era.setToBottom();
      await era.printAndWait(`——책상에 붙여둔 한 장의 포스트잇`);
      await era.printAndWait(
        `담당 ${maru.uma_sex_title} ${maru.name}과(와) 옥상에서 만나기.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `메이크 데뷔 후 ${maru.name}과(와) 예약한 가게에서 축하하기.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `사츠키상 후 ${maru.name}에게 운전과 요리를 배우기 (주: ${maru.name}의 요리는 정말 맛있다!).`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `계속 함께 있어줘서 고마워. 압박을 견디지 못했어. 미안해.`,
      );
      await era.printAndWait(`얼마 지나지 않아 일방적으로 이사장에게 사직서를 제출했다.`);
      await era.printAndWait(
        `그 뒤 영양을 잃은 그 땅에서는 새로운 싹이 다시는 고개를 내밀지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] be_broken_tears
  be_broken_tears: (() => {
    const title = 'BAD END · 마루젠스키의 편지';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.say(
        ` ${callname}, 이 편지를 볼 즈음 나는 파리행 비행기에 타고 있겠지.`,
      );
      maru.say(`말도 없이 떠난 걸 용서해줘.`);
      maru.say(
        `솔직히 말하면 ${callname}과(와) 만난 뒤의 나날은 매일 정말 행복했어.`,
      );
      maru.say(`그러니까 ${callname}을(를) 탓할 생각은 없어.`);
      maru.say(`다만 앞으로의 길을 어떻게 마주해야 할지 모르겠어.`);
      maru.say(
        `이사장님께 3개월 휴학을 신청했어. 그동안 프랑스를 여행하면서 마음을 정리하려고 해.`,
      );
      maru.say(
        `그 사이에 ${callname}과(와) 후배들을 어떻게 대해야 할지 알게 될지도 모르겠네♪`,
      );
      maru.say(
        `……${callname}이(가) 생각하는 대로 나는 꼬리를 말고 도망치는 겁쟁이 우마무스메일 뿐이야.`,
      );
      maru.say(`……생각하고 또 생각해도 아마 이 길밖에 없는 것 같아.`);
      maru.say(
        `이쪽 후배들을 두고 가는 건 마음속에 조금 죄책감이 있어…… 아니, 그 아이들은 자기 노력으로 나를 뛰어넘을 거야!`,
      );
      maru.say(
        `진심으로 믿어. 그 아이들은 더 용감하게, 더 필사적으로, 더 높은 정상으로 달릴 거야.`,
      );
      maru.say(
        `아, 조금 너무 소극적이었네. 이래서는 ${
          maru.elder_sibling_sex_title
        }님답지 않아.`,
      );
      maru.say(`프랑스에 도착하면 이곳의 풍경과 문화를 사진과 영상으로 보내줄게.`);
      maru.say(
        `그때는 예전처럼 ${callname}에게 우맛터에 올려달라고 부탁할게?`,
      );
      maru.say(`후배들도 깜짝 놀라겠지!`);
      await maru.print_and_wait(`그렇게 하자!`);
      era.setToBottom();
      maru.say(`미안해.`);
      await era.printAndWait(
        `편지의 마지막 한 줄은 눈물에 젖어 번진 글씨가 흐릿하다.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `하지만 ${maru.name}은(는) 이제 돌아오지 않는다. ${you.name}의 마음은 누구보다 그 사실을 분명히 알고 있다.`,
      );
      await era.printAndWait(`어쩔 수 없다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] be_crazy_fan
  be_crazy_fan: (() => {
    const title = '비 오는 날 (이별)';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      //節拍1 行動：마루젠 スキーが到着を告げる 反応：プレイヤーのスーツケースを受け取る 価値負荷正または負？親密/孤独(-)
      await era.printAndWait(`空港`);
      await maru.say_and_wait(`여기까지면 돼.`);
      await era.printAndWait(
        `${maru.name}은(는) ${you.name}이(가) 꽉 쥐고 있던 여행가방을 받아들었다.`,
      );
      //節拍2 行動：プレイヤーが마루젠 スキーの出発を名残惜しむ 反応：마루젠 スキーがトレーナーを慰める 親密/孤独(-)
      await you.say_and_wait(`파리에 도착하면 메시지 줘.`);
      await maru.say_and_wait(
        `그렇게 걱정하지 않아도 돼⭐ 파리로 잠깐 여행하는 것뿐이야.`,
      );
      //節拍3 行動：마루젠 スキーが頭を撫でる 反応：プレイヤーが失うことを恐れる 失/得(-)
      await era.printAndWait(
        `${maru.name}은(는) 웃으며 ${you.name}의 머리를 쓰다듬었다.`,
      );
      await era.printAndWait(
        `평소보다 더 다정한 손길인데도 ${you.name}은(는) 두려움을 느꼈다.`,
      );
      await you.say_and_wait(`가는 길 조심해…… 도저히 입 밖으로 내지 못하겠다.`, true);
      //節拍4 行動：마루젠 スキーがトレーナーを励ます 反応：プレイヤーは笑ってその励ましを受け入れる 失/得(+)
      await maru.say_and_wait(`타국에 있어도 우리 인연은 끊어지지 않아.`);
      await maru.say_and_wait(
        `그러니까 용기를 내. 내가 가장 좋아하는 ${callname}.`,
      );
      await you.say_and_wait(`……아아, 이 온기가 가슴속에서 피어오르는 게 느껴져.`);
      //節拍5 行動：마루젠 スキーが出発しようとする 反応：プレイヤーは마루젠 スキーを見送る 失/得(-)
      await you.say_and_wait(`그럼, 출발이야——`);
      await maru.say_and_wait(`——그러네, 지금은 헤어질 시간이야.`);
      await era.printAndWait(`굳게 맞잡았던 두 손이 떨어졌다.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}이(가) 여행가방을 들고 떠나려는 모습을 보았다.`,
      );
      //節拍5 行動：プレイヤーが마루젠 スキーをきつく抱く 反応：마루젠 スキーは抜け出そうとする 親密/孤独(--)
      await you.say_and_wait(`${maru.name}！`);
      await era.printAndWait(`${you.name}은(는) 행동에 나섰다.`);
      await maru.say_and_wait(`！`);
      await era.printAndWait(
        `${you.name}은(는) ${
          maru.sex
        }을(를) 세게 끌어안았다. 주변의 여행객들이 걸음을 멈추고 두 사람을 바라본다.`,
      );
      await maru.say_and_wait(`${you.actual_name}, 놔줘.`);
      await era.printAndWait(`한 번도 들어본 적 없는 ${maru.name}의 초조한 목소리.`);
      //節拍6 行動：プレイヤーが追撃する 反応：마루젠 スキーは黙って涙を流す 失/得(-)
      await you.say_and_wait(
        `이걸로 됐어. 한 번만 더 네 온기를 느끼게 해줘.`,
      );
      await you.say_and_wait(`아직 스스로를 납득시킬 수 없어.`);
      await you.say_and_wait(
        `그 바람, 그 다정한 바람이 눈앞에서 사라지려 하고 있다.`,
      );
      await maru.say_and_wait(`——${callname}`);
      await era.printAndWait(`슬픔을 필사적으로 억누르는 ${maru.teen_sex_title}.`);
      //節拍7 行動：마루젠 スキーが逆にプレイヤーをきつく抱く 反応：プレイヤーは마루젠 スキーの孤独を感じる 失/得(++)
      await era.printAndWait(`그리고————`);
      await you.say_and_wait(`${maru.name}`, true);
      await era.printAndWait(`${you.name}을(를) 세게 끌어안았다.`);
      await maru.say_and_wait(`나도 무서워. ${callname}을(를) 잃는 게.`);
      await maru.say_and_wait(`고통도 슬픔도 이제 혼자 짊어지고 싶지 않아.`);
      await maru.say_and_wait(`함께 바람이 부는 걸 느끼고 아침이 오는 걸 느끼고 싶어.`);
      await maru.say_and_wait(
        `있지, ${callname}, 이대로 함께 떠나자. 이 슬픈 곳을.`,
      );
      //節拍7 行動：プレイヤーが堅く拒む 反応:より大きな悲しみ 親密/孤独(---)
      await you.say_and_wait(`미안해.`);
      await era.printAndWait(`${you.name}의 마음은 피를 흘리고 있다.`);
      await you.say_and_wait(`저지른 죄는 지금 여기서 갚겠어.`);
      await era.printAndWait(
        `슬픔으로 일그러진 ${maru.name}의 얼굴을 똑바로 바라보며 말을 이었다.`,
      );
      await you.say_and_wait(
        `이대로 도망치면 트레이너로서의 나는 이미 죽은 거야.`,
      );
      await you.say_and_wait(
        `트레이너라는 신분을 잃으면 트레이너로서 ${maru.uma_sex_title}을(를) 육성하겠다는 이상도 사라진다.`,
      );
      await you.say_and_wait(
        `이상을 잃은 나는 더 깊은 지옥으로 떨어질 뿐이야.`,
      );
      await you.say_and_wait(`그러니까 가. 내 곁을 떠나, 이대로 가.`);
      //節拍8 行動：二人がキスする 反応:必ずまた会うと誓う 親密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${you.name}은(는) 오히려 ${maru.name}의 부드러운 머리를 쓰다듬으며 ${
          maru.sex
        }의 심장박동을 느꼈다.`,
      );
      await you.say_and_wait(`그러니까 ${maru.name}————`);
      await era.printAndWait(
        `쇠비린 맛이 나는 혀가 거칠게 ${you.name}의 입안으로 들어왔다.`,
      );
      await era.printAndWait(`짧은 접촉 뒤 아쉬운 듯 떨어졌다.`);
      await maru.say_and_wait(`이렇게 쉽게 포기하지 않을 거야. 그러니까 ${callname}`);
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        {
          content: '어디에 있더라도,',
          color: maru.color,
        },
        '우리의 마음은 영원히 함께야.」',
      ]);
      await maru.say_and_wait(`그럼, 한 번 더.`);
      await era.printAndWait(`말은 필요 없다. 곧 사라질 행복을 즐긴다.`);
      await era.printAndWait(`————두 사람이 헤어질 때까지`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] beautiful_winner
  beautiful_winner: (() => {
    const title = '쿨하고 화려한 필승법!';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, rice, you) => {
      await era.printAndWait(
        `어느 날 ${you.name}과(와) ${maru.name}이(가) 점심 회의를 위해 옥상에서 식사하고 있던 중——`,
      );
      await era.printAndWait(`희미한 울음소리가 들렸다.`);
      await maru.say_and_wait(`어라——이 목소리는?`);
      await maru.say_and_wait(`여기서 뭐 하고 있어, 라이스?`);
      await rice.say_and_wait('라이스…… 라이스는 나쁜 아이예요.');
      await rice.say_and_wait('모처럼 라이스를 술래잡기에 불러줬는데.');
      await rice.say_and_wait(
        '라이스만 아직 잡히지 않았어요…… 친구가 라이스를 감싸다가 잡혀버렸는데, 라이스는 어떻게 해야……',
      );
      await era.printAndWait(
        `라이스의 이야기를 들은 뒤 ${maru.name}과(와) ${you.name}은(는) 함께 아래를 보았다. 안뜰 중앙에 감옥 같은 장소가 있다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}을(를) 보았다. ${maru.sex}에게는 생각이 있는 듯하다.`,
      );
      await maru.say_and_wait(`그럼 ${you.name}에게 필승법을 알려줄까♪?`);
      await maru.say_and_wait(
        `체력으로 승부하는 A 계획과 지혜로 이기는 B 계획. ${you.name}은(는) 어느 쪽이 좋다고 생각해?`,
      );
      await rice.say_and_wait('라이스…… 라이스도 모르겠어요,');
      await era.printAndWait(
        `라이스의 눈이 ${you.name}의 존재를 포착했다. 구원을 본 듯 ${you.name}을(를) 바라본다.`,
      );
      await era.printAndWait(`${maru.name}은(는) ${you.name}의 대답을 기다리고 있다.`);
      era.printButton('「체력으로 승부하는 A 계획」 (스태미나+10)', 1);
      era.printButton('「지혜로 이기는 B 계획」 (지능+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`OK! 그럼 A 계획이야!`);
        await maru.say_and_wait(
          `라이스, ${you.name}은(는) 참는 데 능하지? 그럼 ${you.name}이(가) 걸어서 상대에게 ${
            you.name
          }의 존재를 눈치채게 하고, ${you.name}과(와) ${
            maru.sex
          }은(는) 비교적 안정된 거리를 유지해. 상대의 체력이 다하면 멈출 수밖에 없을 거야.`,
        );
        await rice.say_and_wait('그, 그런 걸…… 라이스가 할 수 있을까요?');
        await maru.say_and_wait(
          `분명 할 수 있어! 라이스는 성실하고 노력도 많이 하고 의지도 강해. 내가 자랑하는 후배야!`,
        );
        await maru.say_and_wait(`분명 괜찮을 거야♪`);
        await rice.say_and_wait(
          `마루젠 ${
            maru.elder_sibling_sex_title
          }의 보증이라면, 라, 라이스…… 저, 해, 해볼게요……!`,
        );
        await maru.say_and_wait(
          `후후♪ ${you.name} 덕분에 스태미나를 늘리는 훈련도 떠올랐어.`,
        );
        await era.printAndWait(
          `얼마 지나지 않아 ${you.name}과(와) ${maru.name}은(는) 라이스가 동료를 구하는 작은 모습을 보았다.`,
        );
      } else {
        await maru.say_and_wait(`OK! 그럼 B 계획이야!`);
        await maru.say_and_wait(
          `간단히 말하면 상대를 지형이 복잡한 곳으로 유인하는 거야. 교사 같은 곳으로. 그리고 갈림길에서 따돌려!`,
        );
        await rice.say_and_wait('라, 라이스가 그런 걸 할 수 있을까요……!');
        await rice.say_and_wait('할 수 있어! 라이스는 생각하는 데 능하잖아?');
        await era.printAndWait(
          `${maru.name}은(는) 그렇게 말하며 라이스의 손을 꽉 잡았다.`,
        );
        await maru.say_and_wait(
          `침착하게 제대로 생각하면 라이스는 분명 괜찮아! 그렇지?`,
        );
        await rice.say_and_wait('응…… 라이스…… 해볼게요……!');
        await maru.say_and_wait(
          `……후후, 후배에게 그렇게까지 말한 이상 ${
            maru.elder_sibling_sex_title
          }도 제대로 해야겠네.`,
        );
        await era.printAndWait(
          `얼마 지나지 않아 ${you.name}과(와) ${maru.name}은(는) 라이스가 동료를 구하는 작은 모습을 보았다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_arim_kin_c
  before_arim_kin_c: (() => {
    const title = '아리마 기념 전・가장 성대한 무대';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `아리마 기념은 일본 레이스 가운데 가장 성대한 한 판이다. 많은 ${maru.uma_sex_title}이(가) 투표를 통해 출주 자격을 얻는다.`,
      );
      await era.printAndWait(
        `「Super Car」라 불리며 인기가 높은 ${maru.name}도 당연히 출주 자격을 얻었다.`,
      );
      era.drawLine({ content: '대기실' });
      await maru.say_and_wait(
        `${callname}, 이제 후배들에게 내 뒷모습을 제대로 보여줘야겠네.`,
      );
      era.printButton(`「응.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}이(가) 침체에서 벗어난 뒤 국내 최대 무대——아리마 기념을 목표로 훈련을 시작했다.`,
      );
      await era.printAndWait(
        `클래식급에서 이미 경지에 오른 몇 안 되는 ${maru.uma_sex_title}로서 클래식 한정 레이스라면 한 수 위로 압도할 수 있을지도 모른다. 하지만 강적이 즐비한 아리마 기념에서는 `,
      );
      await you.say_and_wait(`${maru.name}이(가) 즐겁다면 됐어.`, true);
      await era.printAndWait(`그렇게 생각하며 빠뜨린 것이 없는지 마지막으로 확인한 뒤.`);
      await era.printAndWait(`입술에 촉촉한 감촉이 전해졌다.`);
      await maru.say_and_wait(`이걸로 액셀도 전개네.`);
      await maru.say_and_wait(`그럼 ${callname}, 다녀올게.`);
      await era.printAndWait(
        `${maru.name} 특유의 활력을 두르고 ${maru.sex}은(는) 레이스장으로 올라갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_asah_sta
  before_asah_sta: (() => {
    const title = '朝日杯前・5速加速';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실`);
      await maru.say_and_wait(`흥흥흥~`);
      await era.printAndWait(
        `${maru.name}은(는) 기분 좋게 대기실에서 승부복을 점검하고 있다.`,
      );
      await you.say_and_wait(`${maru.name}, 준비는 어때?`);
      await maru.say_and_wait(`어머, ${callname}이네.`);
      await maru.say_and_wait(`보이는 대로 지금은 전개야.`);
      era.printButton(`「앞으로도 레이스를 즐기자!」`, 1);
      await era.input();
      await you.say_and_wait(
        `미래를 향해 달리는 ${maru.name}의 쿨한 모습을 계속 보고 싶었으니까.`,
      );
      await maru.say_and_wait(`응, ${callname}은(는) 제대로 보고 있어줘.`);
      await maru.say_and_wait(`레이스장을 달리는 ${maru.name}의 모습을.`);
      await maru.say_and_wait(`그럼 다녀올게.`);
      era.printButton(`「${maru.name}, 힘내!」`, 1);
      await era.input();
      await era.printAndWait(`준비를 끝낸 ${maru.name}은(는) 레이스장으로 향했다.`);
      await you.say_and_wait(`이따 관중석에서 ${maru.sex}을(를) 응원하자.`, true);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_begin_race
  before_begin_race: (() => {
    const title = '메이크 데뷔 전・모든 것의 시작점';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, callname) => {
      await era.printAndWait(`地下通路`);
      await maru.say_and_wait(
        `아직 조금 긴장되지만 이제는 완전히 편해졌어.`,
      );
      era.printButton(
        `「이대로 후배들에게 ${maru.name}의 쿨한 모습을 보여주자!」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `응응, ${callname}도 ${maru.name}의 쿨한 모습 제대로 보고 있어줘.`,
      );
      await maru.say_and_wait(
        `게다가 뒤에서 지지해주는 후배들뿐 아니라 질주 속에서 한계를 깨뜨리는 바람도 느낄 수 있어!`,
      );
      await maru.say_and_wait(`이렇게 이야기하니까 몸도 흥분되기 시작했어!`);
      await maru.say_and_wait(
        `슬슬 내 차례네. 그럼 ${callname}, 이따 봐!`,
      );
      era.printButton(`「행운을 빌게.」`, 1);
      await era.input();
      await era.printAndWait(`고개를 끄덕인 뒤 ${maru.name}은(는) 레이스장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_radi_shi
  before_radi_shi: (() => {
    const title = '라디오 NIKKEI상 전・누구를 위한 달리기';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`훈련실`);
      await era.printAndWait(
        `더비 이후 ${maru.name}은(는) 후배들에게 쏟던 열정과 애정을 전부 이쪽에 향했다.`,
      );
      await era.printAndWait(`덕분에 속은 더욱 쓰려졌다.`);
      await you.say_and_wait(
        `겨우 ${maru.name}을(를) 설득해 이 레이스에 출전시켰다.`,
        true,
      );
      await era.printAndWait(
        `시험 삼아 ${
          maru.name
        }에게 칠석상 출주를 제안했을 때, 손에 들고 있던 나타데코코 음료를 훈련실에 둔 채 말없이 문을 닫고 나가버린 ${
          maru.sex
        }을(를) 보고 양심이 자신을 책망하기 시작했다.`,
      );
      await era.printAndWait(
        `몇 번을 전화해도 받지 않다가 마침내 ${maru.name}의 승낙이 돌아왔다.`,
      );
      await era.printAndWait(
        `눈앞의 ${maru.name}은(는) 전신거울을 보며 상태를 정돈하고 있다.`,
      );
      await you.say_and_wait(
        `지금의 ${maru.sex}도 흔들리고 있을 것이다. 다시 한 번 가벼운 타격이라도 받는다면, ${
          maru.sex
        }의 이상은 흔들리고 말 것이다.`,
        true,
      );
      await you.say_and_wait(`정말…… 아니, 분명, 분명 이게 최선이다.`, true);
      await maru.say_and_wait(`그리운 옷이네…… 아니, 아무것도 아니야.`);
      await era.printAndWait(`${maru.name}은(는) 조금 꽉 끼는 승부복을 입었다.`);
      await maru.say_and_wait(
        `이제는 내가 좋아하는 ${callname}에게 승리를 가져다줄게♪`,
      );
      await era.printAndWait(
        `이제 무슨 생각을 하든 상관없다. ${maru.name}은(는) 레이스장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sank_hai
  before_sank_hai: (() => {
    const title = '오사카배 전・부드러운 바람';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`황제와의 대결이 오사카배에서 시작되려 한다.`);
      await era.printAndWait(`미디어는 이를 왕도와 패도의 대결이라며 부추겼다.`);
      await era.printAndWait(
        `오사카배에 쏠린 관심은 지난해 아리마 기념을 훨씬 넘어섰다.`,
      );
      await era.printAndWait(
        `관중석은 전설적인 한 판을 보려는 팬들로 가득 차 통로까지 사람이 꽉 들어찼다.`,
      );
      era.drawLine({ content: '대기실' });
      await maru.say_and_wait(`흥흥흥~`);
      await era.printAndWait(
        `이토록 긴박한 순간에도 ${maru.name}은(는) 꽤 여유롭다.`,
      );
      era.printButton(`「${maru.name}, 이번에는 정말 즐겁게 달릴 수 있겠네.」`, 1);
      await era.input();
      await era.printAndWait(
        `황제의 등장만큼 ${maru.name}을(를) 레이스에 흥분시키는 것은 없다.`,
      );
      await maru.say_and_wait(`그럼 준비는 전부 OK야.`);
      await maru.say_and_wait(`이제부터 더 성대한 레이스를 즐겨볼게.`);
      await era.printAndWait(
        `${maru.name}의 문을 열려던 ${you.name}의 손이 같은 가느다란 손과 맞닿았다.`,
      );
      await era.printAndWait(
        `입술에 촉촉한 감촉이 전해지고 부드러운 혀가 얽혔다가 아쉬운 듯 떨어졌다.`,
      );
      await maru.say_and_wait(`가장 중요한 걸 잊을 뻔했네.`);
      await maru.say_and_wait(`${callname}은(는) 제대로 나를 보고 있어줘.`);
      await era.printAndWait(`${maru.name}은(는) 레이스장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sats_sho
  before_sats_sho: (() => {
    const title = '사츠키상 전・다시 한번';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`레이스 전・기자회견`);
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `${maru.actual_name_with_title}께 말씀을 여쭐 수 있어 영광입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `기자 A`,
        `이번 목표도 사츠키상 우승입니까?`,
      );
      await maru.say_and_wait(`응. 담당 트레이너와 상의한 결과야.`);
      await you.say_as_passer_by_and_wait(
        `記者B`,
        `실례하겠습니다. 지난 스프링 스테이크스는 출주한 ${maru.uma_sex_title}이(가) 최소 조건인 5명뿐이었다고 들었습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `記者B`,
        `${maru.uma_sex_title}들이 ${maru.name}에게 이길 수 없다고 판단해 잇따라 회피했다고 봐도 될까요?`,
      );
      await maru.say_and_wait(
        `스프링 스테이크스에 대해서는 담당 트레이너에게 물어봐. 여기서는 코멘트하지 않을게.`,
      );
      await you.say_as_passer_by_and_wait(
        `記者C`,
        `제가 질문하겠습니다. 슈퍼카라고 불리는 당신은 이후 무패 삼관을 목표로 더비에 출전합니까?`,
      );
      await maru.say_and_wait(`그게 현재 목표야.`);
      await you.say_as_passer_by_and_wait(
        `記者C`,
        `알겠습니다. 감사합니다.`,
      );
      await maru.say_and_wait(`천만에.`);
      era.drawLine({ content: '기자회견 후' });
      await era.printAndWait(`대기실\n`);
      await you.say_and_wait(`${maru.name}, 준비됐어? 다음은 네 차례야.`);
      await maru.say_and_wait(`이미 끝났어.`);
      await you.say_and_wait(
        `평소처럼 네 생각대로 자유롭게 달려줘.`,
      );
      await maru.say_and_wait(
        `후후, 이번의 ${callname}은(는) 내 달리기에 푹 빠질 거야.`,
      );
      await maru.say_and_wait(`그 순간이 기대되네——`);
      await maru.say_and_wait(`아, 슬슬 출발해야겠다. 그럼 이따 봐!`);
      await you.say_and_wait(`잘 풀리길.`, true);
      await maru.say_and_wait(`응.`);
      await era.printAndWait(`${maru.name}은(는) 레이스장으로 향했다.`);
      await you.say_and_wait(`……${maru.name}, 계속 보고 있을게.`, true);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sprg_sta
  before_sprg_sta: (() => {
    const title = '스프링 S 전・불꽃의 난초';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실`);
      await era.printAndWait(
        `스프링 스테이크스. 사츠키상의 전초전으로서 많은 ${maru.uma_sex_title}이(가) 전력을 다하는 무대다.`,
      );
      await era.printAndWait(`하지만 이때.`);
      await you.say_as_passer_by_and_wait(
        `스태프`,
        `세 번 확인했습니다. ${maru.name}을(를) 포함해 출주는 다섯 명뿐입니다.`,
      );
      await you.say_and_wait(`아…… 고마워요.`);
      await era.printAndWait(
        `${maru.name}에게 레이스장에서 얻는 즐거움은 레이스의 격과 출주하는 ${maru.uma_sex_title}의 수준에 비례한다.`,
      );
      await era.printAndWait(
        `즉 격이 높아질수록 출전하는 ${maru.uma_sex_title}의 수와 질도 높아지고, ${maru.name}은(는) 더욱 즐거워한다.`,
      );
      await era.printAndWait(`그것뿐이라면 아직 괜찮다.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `응, 알아. 이 레이스는 반드시 ${maru.name}이(가) 이길 거야.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}B`,
        `생각할 여지가 있어? ${maru.name} 말고 다른 누군가가 이긴다니, ${
          maru.sex
        }을(를) 어떻게 이길지 상상조차 안 돼.`,
      );
      await you.say_as_passer_by_and_wait(
        `출주하는 ${maru.uma_sex_title} A`,
        `이제 아무래도 좋아. 어차피 다음은 ${maru.name}의 승리야. 체력을 아껴 다음 레이스에 대비할래.`,
      );
      await you.say_as_passer_by_and_wait(
        `출주하는 ${maru.uma_sex_title} A`,
        `애초에 저 괴물을 이길 수 있는 자는 없어.`,
      );
      await maru.say_and_wait(`${callname}, 준비됐어.`);
      await era.printAndWait(`분위기와 어울리지 않는 목소리가 ${you.name}의 회상을 끊었다.`);
      await you.say_and_wait(`응, 이번에도 레이스를 즐기자.`);
      await maru.say_and_wait(
        `응, 그런데 이번 출주 수는 최소 요건만 겨우 채운 모양이야.`,
      );
      await maru.say_and_wait(`다들 조금만 더 적극적이면 좋을 텐데.`);
      await era.printAndWait(
        `${maru.name}은(는) 기분이 별로 좋지 않은 듯 귀도 축 처져 있다.`,
      );
      era.printButton(
        `${maru.name}, 지금까지 훈련한 성과를 경기장 관객들에게 제대로 보여주자.`,
        1,
      );
      era.printButton(
        `${maru.name}의 달리기를 보면 ${maru.couple_title}도 분명 생각을 바꿀 거야.`,
        2,
      );
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `응, ${callname}은(는) 관중석에서 내 달리기를 보고 있어줘!`,
        );
        await maru.say_and_wait(`이 새빨간 모습을 마음에 확실히 새겨둬!`);
      } else {
        await maru.say_and_wait(`……`);
        await you.say_and_wait(
          `${maru.name}의 뒷모습으로 풀이 죽은 모두에게 희망을 되찾아주자.`,
        );
        await you.say_and_wait(`평소 훈련처럼.`);
        await maru.say_and_wait(`그래!`);
        await era.printAndWait(
          `축 처져 있던 ${maru.name}의 귀가 다시 곧게 섰다.`,
        );
      }
      await era.printAndWait(
        `아직 더 이야기하고 싶었지만 스태프가 마이크를 조정하는 소리가 대기실까지 들려왔다.`,
      );
      await maru.say_and_wait(`슬슬 내 차례네. ${callname}, 이따 봐!`);
      await you.say_and_wait(`왜 불안감이 스치는 거지.`, true);
      await era.printAndWait(
        `${you.name}은(는) 그 불안을 깊숙이 묻고 애마가 레이스장으로 향하는 것을 바라보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_tenn_sho_s
  before_tenn_sho_s: (() => {
    const title = '천황상(가을) 전・에덴의 꿈';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`황제와의 두 번째 대결이 시작되려 한다.`);
      await era.printAndWait(
        `${maru.name}과(와) 황제의 두 번째 대결이라 관객들에게는 전례 없는 성황이다.`,
      );
      era.drawLine({ content: '대기실' });
      era.printButton(`「가장 멋진 뒷모습을 보여줘.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `꼬마 루돌프와 같은 무대에서 겨룰 수 있다니, 틀림없이 최고의 무대야♪`,
      );
      era.printButton(`「성공할 가능성은 있어?」`, 1);
      await era.input();
      await you.say_and_wait(
        `이름난 ${maru.uma_sex_title}들에게 도전하고, ${
          maru.sex
        }들과 어울려 겨루고 승패를 가른다.`,
      );
      await you.say_and_wait(`성공할 가능성은 있어?`);
      await era.printAndWait(
        `${maru.name}은(는) 잠시 침묵한 뒤 답을 내놓았다.`,
      );
      await maru.say_and_wait(
        `${callname}은(는) 레이스장에서 달리는 ${maru.uma_sex_title}들을 어떻게 보고 있어?`,
      );
      await you.say_and_wait(`레이스장에서 이기기 위해 보이지 않는 곳에서 땀과 노력을 쏟았지.`);
      await you.say_and_wait(`하지만.`);
      await maru.say_and_wait(
        `그래. 이길 수 있는 ${maru.uma_sex_title}은(는) 한 명뿐이야.`,
      );
      await era.printAndWait(
        `눈앞에 다시 학생회실 중앙에 있던 그 문구가 떠올랐다.`,
      );
      await you.say_and_wait(`한 명이 앞서면 만 명은 침묵한다.`);
      await maru.say_and_wait(
        `처음 봤을 때 어떻게 이해해야 할지 오래 생각해도 알 수 없었어.`,
      );
      await maru.say_and_wait(
        `묵묵히 노력하는 ${maru.uma_sex_title}들은 단지 패배했다는 이유로 모든 노력을 부정당해.`,
      );
      await maru.say_and_wait(
        `한 명의 ${maru.uma_sex_title}만 이길 수 있다면 다른 ${maru.uma_sex_title}들의 노력은 전부 헛된 게 되는 것 아닐까?`,
      );
      await maru.say_and_wait(
        `실패가 정해진 결말이라면 처음부터 포기하고 다른 길로 가는 편이 현명한 것 아닐까?`,
      );
      await maru.say_and_wait(
        `——하지만 달리는 것이야말로 ${maru.uma_sex_title}의 천성이잖아?`,
      );
      await maru.say_and_wait(`출발 전, 긴장하며 발주 신호를 기다려.`);
      await maru.say_and_wait(
        `달리는 동안 미지의 세계와 고독을 마주해. 하지만 생각만큼 무섭지는 않아.`,
      );
      await maru.say_and_wait(`스퍼트할 때 뒤쪽에서 들려오는 발구름 소리.`);
      await maru.say_and_wait(
        `앞의 등을 넘고 싶어. 더 빠르게 달리고 싶어. ${maru.sex}보다 더 멀리 내딛고 싶어.`,
      );
      await maru.say_and_wait(
        `마지막으로 골인하는 순간은 오히려 그렇게 중요하지 않게 돼.`,
      );
      await maru.say_and_wait(
        `그런 마음을 품고 성공을 거머쥐는 거야. 그러면 후배들이 앞길을 볼 수 없을 때 이 길을 따라올 수 있어.`,
      );
      await maru.say_and_wait(
        `누군가 걸을 수 있다고 증명한 길을, 나도 해보면 갈 수 있을지 모른다는 마음으로.`,
      );
      await maru.say_and_wait(
        `그래서 내 대답은——성공 여부와 상관없이 이 모험은 해볼 가치가 있다는 거야.`,
      );
      await era.printAndWait(`레이스 시작을 알리는 방송이 울렸다.`);
      await maru.say_and_wait(`미안해. 무심코 너무 많이 이야기했네.`);
      await era.printAndWait(`조금 부끄러워진 ${maru.name}이(가) 얼굴을 붉혔다.`);
      await era.printAndWait(
        `${maru.name}을(를) 영입한 뒤 이렇게 많은 일을 겪었다.`,
      );
      await era.printAndWait(
        `울음도 웃음도 통곡도 기쁨도 신뢰도 배신도.`,
      );
      await era.printAndWait(`이제 전부 한 번씩은 경험했다.`);
      await era.printAndWait(`${maru.name}에게————`);
      era.printButton(`「함께 출발하자.」`, 1);
      await era.input();
      era.printButton(`「우리의 이야기를 써 내려가자.」`, 1);
      await era.input();
      await maru.say_and_wait(`……후후♪`);
      await era.printAndWait(`${maru.name}은(는) 미소를 보였다.`);
      await maru.say_and_wait(`앞으로 무슨 일이 일어나도 계속 곁에 있어줘?`);
      await maru.say_and_wait(`웃음이든 눈물이든 함께 마주하는 거야?`);
      await era.printAndWait(
        `${you.name}의 기억 속에서 가장 아름다운 미소일 것이다.`,
      );
      await era.printAndWait(`${maru.name}은(는) 레이스장으로 향했다.`);
      await era.printAndWait(`바로 앞에서 황제가 도전자를 기다리고 있다.`);
      await era.printAndWait(`${you.name}은(는) ${maru.name}의 승리를 빌었다.`);
      await era.printAndWait(`시간은 이곳에서 흐른다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_toky_yus
  before_toky_yus: (() => {
    const title = (maru) => `일본 더비 전・${maru.name}`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}이(가) 더 큰 무대에서 다른 감각을 느껴보고 싶다고 해서 일본 더비에 출전하기로 했다.`,
      );
      await era.printAndWait(`훈련실内`);
      await maru.say_and_wait(
        `역시 더비네. 출전하는 ${maru.uma_sex_title}들의 수준이 정말 높아.`,
      );
      await era.printAndWait(
        `클래식 삼관의 두 번째 관문, 도쿄 우준(일본 더비)은 가장 운이 좋은 ${maru.uma_sex_title}만이 이긴다는 속설이 있다.`,
      );
      await era.printAndWait(
        `실력 있는 ${maru.uma_sex_title}이라도 여기서 무너진 사례는 셀 수 없이 많다. 하지만 ${
          maru.name
        }에게는 `,
      );
      await era.printAndWait(`${maru.name}의 모습은 평소와 다르지 않다.`);
      await era.printAndWait(`순수하게 레이스를 즐기기 위해 온 것이겠지.`);
      await maru.say_and_wait(
        `${callname}, 이제부터 내 모습을 제대로 보고 있어줘.`,
      );
      await era.printAndWait(`${maru.name}은(는) 준비를 마치고 지하 통로로 향했다.`);
      await you.say_and_wait(`나도 관중석으로 갈까.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_yasu_kin_s
  before_yasu_kin_s: (() => {
    const title = '安田記念前・生気勃発';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}은(는) 자유의 바람을 쫓아 도쿄 경마장에 왔다.`);
      await maru.say_and_wait(`오늘 컨디션, 아주 좋아.`);
      await era.printAndWait(
        `${maru.name}의 옷에 튀어나온 주름을 펴주고 나니 슈퍼카는 준비 완료.`,
      );
      await maru.say_and_wait(
        `후배들도 지금 내 뒷모습을 쫓아 넘어보고 싶다고 생각하고 있겠지.`,
      );
      await era.printAndWait(
        `레이스의 승리보다 ${maru.name}은(는) 소중한 후배들이 자신과 옛 시대의 영광을 넘어서는 것을 바라고 있다.`,
      );
      await maru.say_and_wait(`그래서 지금의 나도 불타오르고 있어.`);
      await maru.say_and_wait(`그럼 늘 하던 거, ${callname}.`);
      await era.printAndWait(
        `${maru.name}의 가느다란 허리를 가볍게 끌어안고 행복한 순간에 잠겼다.`,
      );
      await maru.say_and_wait(`${callname}, 계속 계속 내 뒷모습을 보고 있어줘.`);
      await maru.say_and_wait(
        `다른 ${maru.uma_sex_title}을(를) 보고 있으면 ${
          maru.elder_sibling_sex_title
        }라도 질투할 거야.`,
      );
      era.printButton(`「계속 보고 있을게.」`, 1);
      await era.input();
      await maru.say_and_wait(`그럼 마지막으로 한 번 더♪`);
      await era.printAndWait(
        `아쉬운 듯 떨어진 뒤 ${maru.name}은(는) 레이스장으로 향했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_lose
  begin_race_lose: (() => {
    const title = '메이크 데뷔 후・다시 한번 노력';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await maru.say_and_wait(`아, 졌네……`);
      await era.printAndWait(
        `의외였던 걸까, 훈련이 부족했던 걸까. ${maru.name}은(는) 메이크 데뷔에서 패배했다.`,
      );
      era.printButton(`돌아가서 반성회를 하자.`, 1);
      await era.input();
      await maru.say_and_wait(`응! 다음에는 반드시 이길게!`);
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}은(는) 다음 목표를 정했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_win
  begin_race_win: (() => {
    const title = '메이크 데뷔 후・여행을 떠나는 바람';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `주니어급 메이크 데뷔에 불과한데도 ${maru.name}의 첫 달리기를 보러 온 사람들로 경마장이 가득 찼다.`,
      );
      await you.say_and_wait(
        `생각해보면 ${maru.name}의 인기는 정말 무서울 정도다.`,
      );
      await era.printAndWait(
        `평소 후배들을 도와온 덕분인지 관중의 대부분은 도움을 받았던 후배들이다.`,
      );
      await era.printAndWait(
        `사람들 사이에 앉아 있는 ${you.name}은(는) 어울리지 않는 압박감을 느끼고 있다.`,
      );
      await you.say_and_wait(
        `손바닥에 땀이 차기 전에 조금 더 사람이 적은 곳에서 관전하자.`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `다음은 주목받는 신성, 압도적인 실력과 인기를 지닌 ${maru.name}. 앞으로 어떤 멋진 장면을 보여줄까요!`,
      );
      await you.say_and_wait(`큰일이네.`);
      await era.printAndWait(
        `실황의 힘찬 선동에 달궈진 기름에 물 한 방울이 떨어진 듯 환호가 경마장을 뒤집을 기세다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `마루젠 ${maru.sex_code !== 1 ? '선배' : '선배'}, 힘내!`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} B`,
        `다시 한번 선배의 쿨한 달리기를 보여줘!`,
      );
      await era.printAndWait(`오오오오오!`);
      await era.printAndWait(`관객의 환호가 경마장 전체에 울려 퍼졌다.`);
      await you.say_and_wait(
        `다들 흥분했네. 역시 ${maru.name} 때문이군.`,
      );
      await era.printAndWait(
        `인파와 함께 일어선 ${you.name}은(는) 우마 귀 사이로 ${maru.name}의 모습을 찾고 있다.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `아, 미안해.`);
      await era.printAndWait(
        `실수로 부딪힌 것뿐인데 충격이 커서 저도 모르게 소리를 낼 뻔했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `정말 미안해…… 힘을 조절하지 못했어. 다친 데는 없어?`,
      );
      await you.say_and_wait(`아니, 괜찮아.`);
      await era.printAndWait(
        `상대에게 악의는 없다. 여기에 집착할 필요는 없다고 생각해 ${you.name}은(는) 그대로 용서했다.`,
      );
      await you.say_and_wait(`너도 ${maru.name}의 달리기를 보러 왔어?`);
      await era.printAndWait(`말한 순간 자신의 질문을 깊이 후회했다.`);
      await you.say_and_wait(`너도 ${maru.name}의 달리기를 보러 왔어?`);
      await era.printAndWait(
        `당연하지. ${maru.name}을(를) 보러 온 게 아니면 뭘 하러 왔겠어? 다리가 달린 당근이 달리는 걸 보러 왔나?`,
      );
      await era.printAndWait(`그래도 다리가 달린 당근은 조금 보고 싶다.`);
      await you.say_and_wait(
        `너희도 다리가 달린 당근이 달리는 걸 보러 왔어?`,
      );
      await era.printAndWait(
        `안 돼, 머릿속 생각과 실제로 해야 할 말이 섞여버렸다.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `풉.`);
      await you.say_and_wait(`역시 웃음을 샀다.`, true);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `이 트레이너 ${you.adult_sex_title}, 생각보다 재미있는 사람이네.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배가 너를 선택한 이유, 조금 알 것 같아.`,
      );
      await you.say_and_wait(`응?`);
      await you.say_and_wait(`벌써 그렇게 유명해졌어?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그보다 네가 마루젠 선배와 계약한 다음 날에는 트레센 전체가 알고 있었어.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `다들 ${maru.name}의 트레이너가 어떤 사람인지 궁금해하고 있어.`,
      );
      await era.printAndWait(`그래서 오는 내내 호기심 어린 시선이 많았던 건가.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배의 트레이너 ${maru.adult_sex_title}, 앞으로도 힘내! 나도 계속 너와 마루젠 선배를 응원할게!`,
      );
      await era.printAndWait(
        `이 ${maru.uma_sex_title}은(는) 무척 기뻐 보인다.`,
      );
      await era.printAndWait(
        `모두의 시선이 다시 ${maru.name}에게 돌아간 틈에 ${you.name}은(는) 원래 자리에서 슬쩍 벗어났다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${maru.name}이(가) 달리는 모습을 정면에서 볼 수 있는 동쪽에 비해 등밖에 보이지 않는 서쪽 좌석은 사람이 드물다.`,
      );
      await era.printAndWait(
        `게다가 자기 좌석에 앉지 않고 인파 속에 서 있는 ${maru.uma_sex_title}도 적지 않다.`,
      );
      await era.printAndWait(
        `그러니까 ${maru.uma_sex_title}들은 단순한 존재들이군.`,
      );
      await era.printAndWait(`하지만 그렇기 때문에 ${maru.sex}들을 좋아하는 거다.`);
      await era.printAndWait(
        `관중석에서 환호가 폭발했다. ${maru.name}의 첫 경기 승리를 축하하는 ${maru.uma_sex_title}들의 함성이다.`,
      );
      era.printButton(`「슬슬 ${maru.name}을(를) 맞이하러 가자.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}♪, 방금 멋진 퍼포먼스 봤어?`,
      );
      era.printButton(`「상상 이상으로 멋진 무대였어!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `응응, 그럼 위닝 라이브 준비하러 갈게. ${callname}은(는) ${maru.elder_sibling_sex_title}를 제대로 보고 있어줘⭐`,
      );
      await era.printAndWait(
        `위닝 라이브의 ${maru.name}은(는) 평소보다 더욱 빛나고 있다. 발굴된 원석이 본래의 모습을 드러낸 듯하다.`,
      );
      await era.printAndWait(
        `하지만 생각해보면 트레이너란 그런 일을 하는 사람이다.`,
      );
      era.drawLine({ content: '위닝 라이브 후' });
      await maru.say_and_wait(
        `후우~ 땀났네. 그래도 예전에 한 댄스 연습이 정말 도움이 됐어⭐`,
      );
      era.printButton(`역시 ${maru.elder_sibling_sex_title} 님.`, 1);
      await era.input();
      await maru.say_and_wait(
        `어머, ${callname}, 평소보다 말솜씨가 좋네. 다른 아이들에게도 그런 태도야?`,
      );
      era.printButton(
        `${maru.name}이라는 ${maru.elder_sibling_sex_title}은(는) 한 명뿐이야. 다른 아이에게 같은 말을 할 수는 없잖아?`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `후후후, ${callname}에게 그런 말을 들으니 기분이 더 좋아지네. 응——오늘 밤은 테이오들과 파티로 축하할까!`,
      );
      era.printButton(`「${maru.name}, 평소보다 들떠 있네.」`, 1);
      await era.input();
      await you.say_and_wait(
        `불꽃처럼 잔디를 휩쓴 ${maru.name}은(는) 정말 쿨했어.`,
      );
      await maru.say_and_wait(
        `담당인 ${callname}에게 그런 말을 들으니 안심되네.`,
      );
      await maru.say_and_wait(`하지만 계속 칭찬하기 전에, 다음 목표는?`);
      era.printButton(`「아사히배는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`朝日杯？`);
      await maru.say_and_wait(
        `더 강한 ${maru.uma_sex_title}과(와) 겨룰 수 있다면 더 아름다운 풍경을 볼 수 있을지도 몰라. ${callname}, 그 대답은 만점이야.`,
      );
      await maru.say_and_wait(`그럼 다음은 아사히배로 가자!`);
      await era.printAndWait(`${you.name}과(와) ${maru.name}은(는) 다음 목표를 정했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] beginning
  beginning: (() => {
    const title = '서장・마루젠스키 등장';
    // 마루젠 スキー登場から風数値は1。最終結末と風数値 例：TE=20 GE=17-19 それ以外はNE
    // 競争は大きな消耗を生む。それでも、あそこの景色を見たくはないか？
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`잔디 위`);
      await maru.say_and_wait(
        `${callname}, 이따 어디 같이 돌아다니지 않을래?`,
      );
      await era.printAndWait(
        `${you.name} 옆에 앉은 ${maru.uma_sex_title}이(가) 말을 걸어왔다.`,
      );
      era.printButton(
        '「미안, 훈련실로 돌아가 자료를 정리해야 해.」',
        1,
      );
      await era.input();
      await era.printAndWait(`하늘은 석양에 금빛으로 물들어 있었다.`);
      await maru.say_and_wait(
        `내가 졌네. ${callname}이(가) 그렇게 열심히 한다면 ${maru.elder_sibling_sex_title}도 한 바퀴 더 달리고 싶어지잖아♪`,
      );
      await era.printAndWait(
        `${you.name} 바로 옆에 앉아 있던 ${maru.uma_sex_title}은(는) 수분을 보충하고 일어섰다. 저무는 햇빛에 비친 물결치는 긴 머리카락은 타오르는 불꽃 같다.`,
      );
      await you.say_and_wait(`너무 많이 달리지는 마.`);
      await maru.say_and_wait(`알겠어♪`);
      await era.printAndWait(
        `${you.name}의 허락을 받은 ${maru.sex}은(는) 다시 출발 지점으로 돌아갔다.`,
      );
      await era.printAndWait(`출발 총성이 울리고 불꽃이 잔디 위에서 다시 타올랐다.`);
      await era.printAndWait(
        `불꽃의 주인도 달릴 때 몰아치는 강한 바람에 진심 어린 미소를 짓고 있다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `훈련실로 돌아온 ${you.name}은(는) 마지막 햇빛이 사라지기 전에 들고 있던 폴더를 제자리에 돌려놓았다.`,
      );
      await era.printAndWait(
        `${maru.name}의 주행 데이터를 정리하려던 ${you.name}은(는) 이때 한 통의 편지에 시선을 빼앗겼다.`,
      );
      await you.say_and_wait(`이건 뭐지?`, true);
      await era.printAndWait(`주변과 어울리지 않게 청춘의 향기가 나는 봉투다.`);
      await era.printAndWait(
        `우편번호는 비어 있고, 수신처는 자신의 집무실, 받는 사람 이름에는 제대로 ${you.actual_name}이라고 적혀 있다. 다만 마지막 발신인이.`,
      );
      await you.say_and_wait(`${maru.name}？`, true);
      await era.printAndWait(`의문투성이인 채 봉투를 열었다.`);
      await maru.say_and_wait(
        `짜잔! 이 편지를 읽고 있는 ${callname}, 이렇게 하는 거 쿨하다고 생각하지 않아?`,
      );
      await maru.say_and_wait(
        `처음에는 훈련실로 돌아갈 즈음 갑자기 메일을 보낼 생각이었는데 키보드를 전혀 못 쳐서 당황했어><`,
      );
      await maru.say_and_wait(
        `결국 편지로 타협…… 하지만! ${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }인 나, 편지로 마음을 전하는 것도 다시 유행하기 시작했다는 걸 알아버렸어! 역시 ${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }인 나는 계속 유행의 선두를 달리고 있네♪`,
      );
      await maru.say_and_wait(
        `기세로 쓰기 시작한 건 좋은데 결국 뭘 하면 좋을까?`,
      );
      await maru.say_and_wait(
        `——응, 만화 전개로 생각하면 옥상 같은 데가 좋으려나?`,
      );
      await maru.say_and_wait(
        `그러니까 오늘 밤 7시 반, 옥상에서 만나자! 그럼 ${callname}, 이따 봐!`,
      );
      await era.printAndWait(
        `편지지를 봉투에서 꺼내 펼치고 ${you.name}은(는) 그 자리에 선 채 읽었다.`,
      );
      await you.say_and_wait(`정말 요즘답네.`, true);
      await you.say_and_wait(
        `앞으로 3년 동안 아침저녁을 함께할 동료다. 만날 때는 상대를 더 알아둬야 한다.`,
        true,
      );
      era.printButton(`「게다가.」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `지나가던 ${maru.uma_sex_title}`,
        `어? 마루젠 ${maru.sex_code !== 1 ? '선배' : '선배'}가 저런 사람을 3년 담당으로 인정했다고?`,
      );
      await you.say_as_passer_by_and_wait(
        `지나가던 트레이너`,
        `애초에 ${you.actual_name}은(는) 괴물 같은 ${maru.name}에게 변덕스럽게 마음에 든 행운아일 뿐이야. 운 좋은 녀석이지.`,
      );
      await you.say_and_wait(`괴물에게 변덕스럽게 마음에 든 행운아, 라고?`);
      await era.printAndWait(
        `말한 대로 ${maru.name}을(를) 영입하려 했던 트레이너 중에는 평생 뛰어난 성적을 남긴 베테랑도 적지 않다.`,
      );
      await era.printAndWait(
        `자신과 그들을 비교하면 좋게 봐도 경험 차이가 크다. ${maru.name}에게 선택된 건 우연히 마음의 현을 건드렸을 뿐이다.`,
      );
      await era.printAndWait(`다음에도 이렇게 운이 좋을 수 있을까?`);
      await era.printAndWait(`억지로 주의를 업무로 돌렸다.`);
      await era.printAndWait(`스마트폰을 슬쩍 본다. 잠금 화면의 시각은 6:05.`);
      await you.say_and_wait(`앞으로 더 열심히 해야 해.`);
      await era.printAndWait(
        `봉투를 서랍에 넣고 ${you.actual_name}은(는) 다시 일 속으로 도망쳤다.`,
      );
      era.drawLine();
      await era.printAndWait(`슬슬 출발할 시간이다.`);
      await era.printAndWait(
        `훈련실에서 교사 옥상까지 약 10분. 예의를 생각하면 10분 정도 일찍 도착하는 게 딱 좋다.`,
      );
      await era.printAndWait(`이때 잠금 화면의 시각은 정확히 7시.`);
      era.printButton(`「出発！」`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `밤바람은 낮보다 부드럽다. 자세히 느껴보니 희미하게 달콤한 향기가 코로 들어온다.`,
      );
      await you.say_and_wait(`내일도 날씨가 좋을 것 같네.`);
      await maru.say_and_wait(`응, 매일 오늘 같은 좋은 날씨면 좋겠네.`);
      await you.say_and_wait(`그래. 응?`);
      await era.printAndWait(
        `맞장구치려다 뒤에서 들려온 익숙한 목소리를 알아차렸다.`,
      );
      await era.printAndWait(
        `${maru.sex}와 이야기하려고 급히 돌아보니 뒤에는 아무도 없었다.`,
      );
      await maru.say_and_wait(
        `그런 거야? ${callname}, 정말 귀엽네.`,
      );
      await era.printAndWait(`갑자기 뒤에서 끌어안겼다.`);
      await you.say_and_wait(`！！！`);
      await era.printAndWait(`밤은 산들바람과 어우러져 더욱 고요하다.`);
      await era.printAndWait(
        `뒤에서 안겼지만 그 이상 가까워지지는 않고 그대로 멈춰 있다.`,
      );
      await maru.say_and_wait(
        `미안해, ${callname}을(를) 보니까 나도 모르게 이렇게 해버렸어.`,
      );
      await era.printAndWait(
        `뒤에서 가볍게 ${you.name}을(를) 안고 있던 팔이 허리에서 떨어졌다.`,
      );
      await era.printAndWait(
        `겨우 떨어진 ${you.name}은(는) 다시 이 ${maru.teen_sex_title} 쪽을 바라보았다.`,
      );
      await era.printAndWait(
        `잔디 위의 새빨간 모습과 달리 달빛 아래 조용히 서 있는 ${maru.name}이(가) ${you.name}에게 미소를 보였다.`,
      );
      era.printButton(`「……${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `입을 열려 해도 무슨 말을 해야 할지 모르겠다.`,
      );
      await era.printAndWait(`그저 말없이 서로 바라볼 뿐.`);
      await era.printAndWait(`……어째서인지 무서웠다.`);
      await era.printAndWait(`어떻게 해야 불꽃과 함께 춤출 수 있을까?`);
      await era.printAndWait(
        `어떻게 해야 ${maru.name}에게 자신을 봐달라고 할 수 있을까?`,
      );
      era.printButton(`「……」`, 1);
      await era.input();
      await maru.say_and_wait(
        `^_^ 그렇게 긴장하지 않아도 돼. 평소처럼 이야기하면 돼.`,
      );
      await era.printAndWait(
        `너무 긴장한 모습이 ${maru.sex}을(를) 웃게 한 모양이다.`,
      );
      await maru.say_and_wait(
        `다른 사람의 마음을 신경 쓰는 건 좋은 일이야. 하지만 자기 마음도 제대로 드러내야지.`,
      );
      await maru.say_and_wait(
        `소통하고 싶어도 어려워지잖아. 그러니까 모든 걸 뜬구름처럼 가볍게 생각하는 정도가 딱 좋아!`,
      );
      await era.printAndWait(`마음속을 꿰뚫어 본 것 같다.`);
      await you.say_and_wait(
        `그래. 저기 서 있는 건 앞으로 3년 동안 파트너가 될 ${maru.actual_name_with_title}이다.`,
      );
      await era.printAndWait(
        `——맑은 비취색 두 눈에 격려받아 생각도 하지 않고 말해버렸다.`,
      );
      await maru.say_and_wait(
        `그래. ${maru.sex_code !== 1 ? '아가씨' : '멋진 남자'}인 나야.`,
      );
      await you.say_and_wait(`${maru.name}의 눈은 예쁘네.`);
      await you.say_and_wait(`이 눈에 매료된 사람은 분명 많겠지.`);
      await you.say_and_wait(
        `게다가 이렇게 누군가를 격려하는 ${maru.name}에게 반하는 사람도 적지 않을 거야.`,
      );
      await maru.say_and_wait(
        `음——생각보다 말 잘하네? 선배로서 길을 잃은 ${maru.uma_sex_title}이나 사람을 이끄는 건 당연한 일이야♪`,
      );
      await maru.say_and_wait(
        `더구나 앞으로 동료가 될 ${callname}이라면 말이지.`,
      );
      await maru.say_and_wait(
        `응——앞으로도 이 리듬으로 제대로 즐기는 거야.`,
      );
      await maru.say_and_wait(
        `그럼, 한 번 더. ${maru.name}, 앞으로 3년 동안 동료이자 담당 ${maru.uma_sex_title}로서 잘 부탁해♪`,
      );
      era.printButton(`「잘 부탁해, ${maru.name}.」`, 1);
      await era.input();
      await era.printAndWait(
        `부드러운 피부와 그 안에 숨은 힘을 충분히 느낀 뒤 ${you.actual_name}은(는) 그 두 손을 단단히 잡았다.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}이(가) 계약한 뒤 첫 공식적인 만남은 이렇게 끝났다.`,
      );
      //風属性は1
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] current_trend
  current_trend: (() => {
    const title = '거리의 유행을 이끄는 사람';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 날, 안뜰에서 있었던 일————`);
      await maru.say_and_wait(
        `${callname}, ${you.name}에게 상담하고 싶은 게 있어. ${you.name}, 지금 괜찮아?`,
      );
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await maru.say_and_wait(
        `저기…… 후배들에게 초대받아서 세련된 시내로 쇼핑하러 갈 생각이야. ${you.name}도 패션의 최첨단을 걷는 느낌, 알지?`,
      );
      await maru.say_and_wait(
        `……하지만 알잖아. 패션의 변화는 아주 빨라. 나도 최신 지식을 공부하고 있다고 생각했는데 후배들과 이야기하다 보면 아무래도 통하지 않는 게 있더라고.`,
      );
      await maru.say_and_wait(
        `그러면 분위기가 정말 어색해져. 모두를 실망시키지 않도록 ${you.name}, 좋은 방법 좀 생각해 주지 않을래?`,
      );
      era.printButton(
        '「자기 센스를 높이는 특훈을 하자!」 (스피드+10)',
        1,
      );
      era.printButton(`「자신감을 가져!」 (파워+10)`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그렇구나, 지금 가장 유행하는 트렌드를 확인하는 거네!`,
        );
        await maru.say_and_wait(
          `그럼 ${callname}, ${you.name}과(와) 함께 유행을 확인하러 가도 될까?`,
        );
        era.printButton('「물론이지!」', 1);
        await era.input();
        await era.printAndWait(
          `이렇게 ${you.name}과(와) ${maru.name}은(는) 시내로 향했다.`,
        );
        await maru.say_and_wait(
          `바로 저 거리의 유행부터 확인해 보자. 저쪽 CD 가게라면 최신 유행을 알 수 있을지도♪`,
        );
        await era.printAndWait(
          `${maru.name}이(가) 가리킨 곳은 세월이 느껴지는 CD 가게였다. 아무리 그래도 거기서 최신 유행을 찾기는……`,
        );
        await maru.say_and_wait(`${callname}, 어디 안 좋아?`);
        await era.printAndWait(
          `속으로 그렇게 태클을 걸면서도 ${you.name}은(는) 말없이 ${
            maru.sex
          }와(과) 함께 유행(20년 전)의 CD 가게를 둘러보았다.`,
        );
        await era.printAndWait(
          `얼마 뒤 ${you.name}과(와) ${maru.name}은(는) 이 거리의 가게를 전부 확인했다.`,
        );
        await maru.say_and_wait(
          `최신 유행을 따라가는 건 정말 어렵네. 엄마는 요령만 잡으면 괜찮다고 했는데……`,
        );
        era.printButton(
          `「엄마가 ${you.name}에게 가르쳐준 걸 한번 이야기해 보지 않을래?」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          `후배들에게 이야기하는 거구나…… 그렇네, 그것도 한 방법이야. 유행을 따라가기보다 내가 직접 퍼뜨리는 편이 더 재미있을 거야!`,
        );
        await maru.say_and_wait(
          `그럼 내일은 후배들에게 유행을 퍼뜨릴게, ${callname}, ${you.name} 고마워⭐`,
        );
        await era.printAndWait(
          `다음 날 ${maru.name}은(는) 흥분한 채 ${you.name}에게 후배들이 ${
            maru.sex
          }의 새로운 유행을 받아들였다고 알려주었다.`,
        );
      } else {
        await maru.say_and_wait(`내 센스에 자신감을 가지라, 인가……?`);
        await maru.say_and_wait(
          `조금 겁을 먹고 있었던 걸지도 몰라. 망설이고 불안해하는 모습은 나답지 않네.`,
        );
        await maru.say_and_wait(
          `게다가 모두 내 센스를 알고 있어. 누구보다 패션을 잘 알고, 언제나 시대의 최첨단을 달리는 ${maru.uma_sex_title}이잖아.`,
        );
        await maru.say_and_wait(
          `좋아! 후배들과의 외출, 마음껏 즐길 거야!`,
        );
        await era.printAndWait(
          `나중에 ${you.name}이(가) ${maru.name}에게 지난번 외출에 대해 묻자 ${
            maru.sex
          }은(는) 후배들과 유행 정보를 꽤 많이 주고받은 모양이다.`,
        );
        await era.printAndWait(
          `이것이 독특한 센스로 매력이 넘치는 ${maru.name}이다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] dream
  dream: (() => {
    const title = '초록사슴의 꿈';
    /**
     * 虚ろで迷離、得失は定まらず、夢のようにぼんやりした状態の喩え。
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `눈을 떴을 때 잔디 위에 누워 있었다. 주변은 꽃밭이고 곁의 잔디부터 지평선 끝까지 이어져 있다.`,
      );
      maru.print(`평소라면 즐거운 마음으로 꽃밭을 걸었을지도 모른다.`);
      maru.print(`하지만 어째서인지 출구를 찾고 싶은 마음이 더 강했다.`);
      await maru.say_and_wait(`그런데 어느 방향으로 출발해야 하지?`);
      era.printButton(`「가시가 돋은 장미 덤불」`, 1);
      era.printButton(`「높은 관목의 미궁」`, 2);
      if ((await era.input()) === 1) {
        maru.print(`내가 한 일은 전부 너를 괴롭히기 위한 것이었어?`);
        maru.print(`가시를 헤쳐낸 순간 귓가에 한숨소리가 들린 듯했다.`);
        maru.print(`앞으로 나아갈수록 앞의 가시는 빽빽해지고 더 큰 힘으로 헤쳐야 한다.`);
        maru.print(`게다가 뒤쪽 길은 어느새 막혀 있다.`);
        await maru.say_and_wait(`퇴로는 없네.`);
        maru.print(`몸도 위기를 감지한 듯 희미하게 떨리고 있다.`);
        maru.print(
          `평범한 인간이나 조금 약한 ${maru.uma_sex_title}이라면 한 줄기 햇빛도 보이지 않는 이 우리에서 길을 잃을지도 모른다.`,
        );
        maru.print(
          `점점 팔에 힘이 들어가지 않는다. 땀이 피부를 타고 땅에 떨어져 관목에 스며든다.`,
        );
        maru.print(`하지만 어디를 봐도 출구가 아니다.`);
        await you.say_as_passer_by_and_wait(`장미들`, `그래도 포기하지 않을 거야?`);
        maru.print(`관목 속에서 수군거리는 목소리가 들려왔다.`);
        await maru.say_and_wait(
          `바깥세상은 생각보다 풍요롭고 아름다워. 이런 곳에서 옷자락을 걸어 망치면 아깝지 않아?`,
        );
        await you.say_as_passer_by_and_wait(
          `장미들`,
          `그렇구나, 알겠어. 궁지에 몰렸으니 낙관으로 맞서는 거네.`,
        );
        maru.print(`수군거리는 목소리가 점점 커진다.`);
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `이제 힘이 없어. 너는 이미 힘이 없어.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `네 호흡, 필사적으로 억누르고 있지만 나는 이미 알아챘어.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `그 조급함, 그 불안함, 말투와는 전혀 다르잖아?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `사실 너는 생각만큼 그 트레이너를 용서하지 못했지?`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `당장은 의지로 억지로 눌러도 의심의 씨앗은 이미 심어져 있어.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `그러니까, 용서하지 않은 게 분명`,
        );
        await maru.say_and_wait(`아아…… 알고 있어.`);
        await maru.say_and_wait(
          `${callname}의 배신은 분명 정말 슬펐어.`,
        );
        await maru.say_and_wait(
          `하지만 그런 ${callname}이라도 나는 계속 사랑하고 있어.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `왜? 왜? 사랑 같은 건 언젠가 깨질 환상에 불과해.`,
        );
        await maru.say_and_wait(`사랑은 그렇게 얕은 게 아니야!`);
        await maru.say_and_wait(
          `연인 사이에 거품처럼 흩어지는 열정만 있다면 언젠가 찾아올 이별을 깊이 두려워해 행복해질 수 없어.`,
        );
        await maru.say_and_wait(`그 두려움은 언젠가 행복의 달콤함을 짓눌러버려.`);
        await maru.say_and_wait(
          `무서워. 언젠가 ${callname}을(를) 잃는 아픔이 이대로 나를 짓눌러버릴까 봐.`,
        );
        await maru.say_and_wait(`하지만 나는 ${callname}을(를) 믿어.`);
        await you.say_as_passer_by_and_wait(`환영의 목소리`, `이미 배신했는데도?`);
        await maru.say_and_wait(`내 지혜만으로 절망을 단정할 수는 없잖아?`);
        await maru.say_and_wait(
          `세상 모든 사람이 입을 모아 불가능하다고 해도 나는 절망하지 않아.`,
        );
        await maru.say_and_wait(
          `인간은 자신의 미래를 예측할 수 없으니 무슨 일이 일어나도 이상하지 않아.`,
        );
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `그 낙관으로는 자기 자신조차 지키지 못하는데?`,
        );
        await maru.say_and_wait(
          `지난 십수 년 동안 이렇게 무사히 살아왔잖아?`,
        );
        await you.say_as_passer_by_and_wait(`환영의 목소리`, `응?`);
        maru.print(
          `바람도 통하지 않던 가시벽에 한 줄기 균열이 생겼다. 기회를 잡은 ${maru.name}은(는) 그대로 우리를 뚫고 나갔다.`,
        );
        maru.print(`그 가시의 땅을 벗어나자 온몸의 힘도 천천히 돌아왔다.`);
        await you.say_as_passer_by_and_wait(
          `환영의 목소리`,
          `……생명은 가능성의 총합이니까?`,
        );
        maru.print(`그 말을 곱씹던 환영은 이해한 순간 흩어졌다.`);
      } else {
        era.drawLine();
        maru.print(`얼마나 시간이 지났는지 모르겠다. 아직도 나갈 기미가 없다.`);
        maru.print(`왼손 법칙을 따라도, 벽을 쓰러뜨려도 최종 결과는 같다.`);
        maru.print(
          `더 나쁜 것은 이전에 지나온 경로로 출발점에 돌아오면 그쪽도 벽의 연장이 되어 있었다는 점이다.`,
        );
        await maru.say_and_wait(`음——조금 머리가 아프네.`);
        maru.print(`일단 중심이라고 부를 수 있는 작은 공터로 돌아갈 수밖에 없다.`);
        maru.print(
          `공터라고 부르는 이유는 그곳의 강풍이 너무 거세 그 미친 바람 아래에서는 잔디가 살아남지 못하기 때문이다.`,
        );
        maru.print(`하지만 이상하게도 그 강풍은 사람을 벽 위로 밀어 올린다.`);
        maru.print(
          `지금까지는 옆으로 재빨리 미끄러져 산산조각 나는 최후를 피했다.`,
        );
        maru.print(`하지만 시험할 수 있는 방법은 이미 전부 해봤다.`);
        await maru.say_and_wait(`가능한 것을 전부 제외했다면, 그렇다면.`);
        await era.printAndWait(`${maru.name}은(는) 그 공터로 들어갔다.`);
        await era.printAndWait(
          `광풍이 포효하며 ${maru.sex}을(를) 거의 뒤집어버릴 듯했지만 ${
            maru.sex
          }은(는) 끝내 두 발로 버텼다.`,
        );
        await era.printAndWait(`그리고.`);
        await era.printAndWait(`바람의 힘을 빌려 그 벽들을 향해 돌진했다.`);
        await era.printAndWait(
          `그러자 벽은 이 강한 힘 앞에서 조금씩 갈라졌다.`,
        );
        await era.printAndWait(`새로운 길이 눈앞에 열렸다.`);
      }
      await maru.say_and_wait(
        `도중에 어려움은 많았지만 전부 무사히 넘었어.`,
      );
      await maru.say_and_wait(`앞으로 무엇이 기다리고 있을까?`);
      await maru.say_and_wait(
        `과거의 잿빛 그림자를 멀리 뒤로 버리고 꽃으로 깔린 융단 위를 걷는다.`,
      );
      await maru.say_and_wait(`……직감이 알려주고 있어.`);
      era.printButton(`「눈을 떴을 때 바라보던 방향으로 계속 달린다」`, 1);
      await era.input();
      await maru.say_and_wait(`用意！`);
      maru.print(
        `출발 신호와 함께 ${maru.name}은(는) 스스로 정한 골을 향해 돌진했다.`,
      );
      maru.print(`아름다운 꽃들이 뒤로 날아가며 점점 본래 형태를 유지하지 못한다.`);
      maru.print(`오색 리본처럼 점점 하나로 녹아든다.`);
      maru.print(
        `호흡을 방해하는 것도 없이 이렇게 빠르게, 더 빠르게, 꽃밭의 일부로 녹아들 것처럼 빠르게 달린다.`,
      );
      await maru.say_and_wait(`……그렇다면.`);
      era.printButton(`「이대로 단숨에 가속!」`, 1);
      await era.input();
      await maru.say_and_wait(`${maru.name}의 진짜 실력을 보여줄게!`);
      await era.printAndWait(
        `귓가에 엔진의 굉음이 들렸다. 틀림없다, 애차의 목소리다.`,
      );
      maru.print(`애차가 자신의 힘을 빌려준 것 같다.`);
      maru.print(`이렇게, 이걸로 괜찮은 거야?`);
      maru.print(`아니, 이걸로 됐어.`);
      maru.print(`어릴 적 처음 카운타크를 봤을 때의 동경을 품고.`);
      maru.print(`지평선 너머, 저 빛나는 빛.`);
      maru.print(`골이겠지. 이제 골이 보여.`);
      await maru.say_and_wait(`어째서인지 조금 감상적이네.`);
      maru.print(`해가 뜨면 이 몽롱한 감각은 흩어질 거야.`);
      maru.print(`이게 꿈의 끝일지도 몰라.`);
      await maru.say_and_wait(`어머, 이러면 나답지 않네.`);
      maru.print(
        `세상에 끝나지 않는 잔치는 없다. 이 달콤한 추억은 아마 영원히 잠들겠지.`,
      );
      maru.print(`현실에서도 즐겁게 살아줘? 약속이야.`);
      maru.print(`좋은 아침, ${maru.name}.`);
      await era.printAndWait(`${maru.name}은(는) 눈을 떴다.`);
      await era.printAndWait(`따뜻한 햇빛이 ${maru.sex}의 긴 머리를 살며시 쓰다듬는다.`);
      await era.printAndWait(`그 여운을 음미하며 ${maru.name}은(는) 몸을 일으켰다.`);
      await era.printAndWait(`새로운 하루가 시작됐다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] fall_heaven
  fall_heaven: (() => {
    const title = 'GOOD END · 낙원에 길을 잃고 들어온 여행자';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンバルブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (
      maru,
      taste,
      darley,
      godolphin,
      byerley,
      you,
      callname,
    ) => {
      darley.name = '상냥한 여신';
      godolphin.name = '지혜의 여신';
      byerley.name = '엄숙한 여신';
      await era.printAndWait(`평범한 휴일.`);
      await era.printAndWait(`황제를 꺾고 깔끔하게 2연승을 거뒀다.`);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와(과) 보낸 이 3년은 아마 영원히 잊을 수 없는 나날이다.',
      ]);
      await era.printAndWait([' ', maru.get_colored_name(), '와(과) 잠시 헤어진다.']);
      await taste.say_and_wait(`祝！賀！URA優勝！`);
      await era.printAndWait([
        '작은 체구의 이사장이 ',
        maru.sex,
        '의 절반 정도 높이의 트로피를 가져와 ',
        maru.get_colored_name(),
        '에게 건넸다.',
      ]);
      await maru.say_and_wait(`감사합니다!`);
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 트로피를 받아들고 카메라와 곁에서 오래 기다리던 기자들의 취재에 응한다.',
      ]);
      await maru.say_as_passer_by_and_wait('기자 A', [
        maru.actual_name_with_title,
        '、 트로피를 손에 든 소감은 어떻습니까?',
      ]);
      await maru.say_and_wait(
        '보통이라면 정말 흥분하겠지? 이렇게 성대한 레이스인걸.',
      );
      await maru.say_and_wait(
        '하지만 정말 손에 넣은 순간에는 가슴속이 아주 고요했어.',
      );
      await maru.say_as_passer_by_and_wait(
        '기자 A',
        '화면 앞 시청자들에게 자세히 말씀해 주실 수 있을까요?',
      );
      await maru.say_and_wait([
        '네!',
        maru.uma_sex_title,
        '들이 1등을 다투기 위해 남몰래 땀을 흘리고 레이스장에서 필사적으로 도전하는 기백이 『아아, 나는 이것 때문에 레이스에 나오는구나』라고 생각하게 해줬어. 후후~',
      ]);
      await maru.say_as_passer_by_and_wait('기자 A', [
        maru.actual_name_with_title,
        '은(는) ',
        maru.uma_sex_title,
        '들을 정말 깊이 이해하고 계시는군요.',
      ]);
      await maru.say_and_wait([
        '응! 레이스 전에 출주하는 ',
        maru.uma_sex_title,
        '들과 이야기해. 그러면 재미있는 이야기를 많이 들을 수 있거든~',
      ]);
      await maru.say_as_passer_by_and_wait(
        '기자 A',
        '화면 앞 시청자들에게 말씀해 주실 수 있을까요?',
      );
      await maru.say_and_wait([
        '응, 최근 한 경기로 말하자면 어떤 ',
        maru.uma_sex_title,
        '이(가)——',
      ]);
      await maru.say_and_wait([
        '——最後',
        maru.sex,
        '은(는) 계속 자기 트레이너가 고집불통이라고 푸념했어.',
      ]);
      await maru.say_as_passer_by_and_wait(
        '기자 A',
        '재미있는 이야기네요. 감사합니다.',
      );
      await era.printAndWait(
        '취재하던 기자가 한 걸음 물러나기도 전에 다른 기자가 기다리지 못하고 앞으로 뛰어들었다.',
      );
      await maru.say_as_passer_by_and_wait('記者B', [
        '실례합니다, ',
        maru.actual_name_with_title,
        '의 앞으로의 목표는 무엇입니까?',
      ]);
      await maru.say_and_wait('음, 조금 어려운 질문이네——');
      await maru.say_and_wait('트레이너와 상의한 결과, 당분간 휴전이야.');
      await maru.say_as_passer_by_and_wait(
        '記者B',
        '아마 담당 트레이너와 허니문이겠죠. 이런 건 여러 번 봐왔습니다.',
        true,
      );
      await maru.say_as_passer_by_and_wait('記者B', '굴건염입니까?');
      await maru.say_and_wait(
        '응. 결승 전에 한 번 의사에게 갔어. 경증이지만 계속 출전하는 데는 일정한 위험이 있어.',
      );
      await maru.say_and_wait([
        '트레이너인 ',
        you.adult_sex_title,
        '은(는) 쉬라고 했지만 나는 끝까지 하고 싶었어…… 다행히 마지막에는 간신히 이겼어. 정말 ',
        callname,
        ' 덕분이네⭐',
      ]);
      await maru.say_as_passer_by_and_wait(
        '記者B',
        [
          callname,
          '? 역시 이긴 ',
          maru.uma_sex_title,
          '은(는) 결국 같은 결말이야.',
        ],
        true,
      );
      await maru.say_as_passer_by_and_wait(
        '記者B',
        '트레이너도 뒤에서 정말 많이 노력했겠죠. 트레이너에 대해서도 들려주실 수 있을까요?',
      );
      await maru.say_and_wait(
        '이런 기회니까 트레이너 본인에게 직접 말해달라고 하죠!',
      );
      await era.printAndWait([
        '곁에서 보고 있던 ',
        you.get_colored_name(),
        '이(가) ',
        maru.get_colored_name(),
        '에게 끌려갔다.',
      ]);
      era.printButton('「응? 나야?」', 1);
      await era.input();
      await era.printAndWait([
        '갑자기 흥분한 기자 무리와 각종 전문 촬영 장비를 마주한, 준비되지 않은 ',
        you.get_colored_name(),
        '은(는) 식은땀 한 방울을 흘렸다.',
      ]);
      await maru.say_and_wait([
        '트레이너인 ',
        you.adult_sex_title,
        '、 부끄러워하지 말고 소감도 말해줘!',
      ]);
      era.printButton(
        `어어어쨌든, 트레센의 신뢰에 감사드립니다. 담당 ${maru.uma_sex_title}이(가) 열심히 맞춰줘서……`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait('카메라맨', '이쪽 봐주세요!');
      await era.printAndWait('3년의 웃음과 눈물을 두 손에 안은 채 막이 내렸다.');
      era.drawLine();
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와(과) 잠시 헤어진 뒤,',
        you.get_colored_name(),
        '은(는) 훈련실에 앉아 있다.',
      ]);
      await era.printAndWait(
        '수장실에 늘어선 트로피들이 닻이 되어 이 3년이 환상이 아니었다는 것을 새기고 있다.',
      );
      await era.printAndWait(
        '다만 갑자기 목표가 사라지자 단숨에 긴장이 풀린 듯하다.',
      );
      await era.printAndWait('머리가 멍하고 눈꺼풀도 싸움을 벌이고 있다.');
      await you.say_and_wait([
        maru.get_colored_name(),
        '이(가) 돌아올 때까지 이렇게 조금 자자.',
      ]);
      await era.printAndWait([
        '적당한 이유를 찾아 마음 편히 눈을 감은 ',
        you.get_colored_name(),
        '은(는) 그렇게 잠에 빠졌다.',
      ]);
      await era.printAndWait([
        '다시 눈을 떴을 때 ',
        you.get_colored_name(),
        '은(는) 끝없이 넓은 초원에 있었다.',
      ]);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '와(과) 담소를 나누던 중 ',
        maru.sex,
        '은(는) 반쯤 농담으로 「에덴에 갔었어」라고 말했다.',
      ]);
      await era.printAndWait([
        '이 인간 세상에는 절대로 존재하지 않을 아름다운 풍경을 보면 ',
        maru.sex,
        '의 말은 아마 사실이다.',
      ]);
      await you.say_and_wait('앞으로 어느 방향으로 가지?');
      await era.printAndWait([
        '그리고 급히 해결해야 할 문제가 있다.',
        you.get_colored_name(),
        '은(는) ',
        maru.uma_sex_title,
        '이(가) 아니다.',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        '의 방법은 거의 도움이 되지 않는다.',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는) 곧 돌아온다. 남은 선택 시간은 적다.',
      ]);
      await you.say_and_wait('출발할 수밖에 없다.');
      await era.printAndWait(
        '망설일수록 상황은 나빠질 뿐이다. 선택하지 않는 것보다 선택하는 편이 낫다.',
      );
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '이(가) 말했던 모호한 방향을 떠올리며 ',
        you.get_colored_name(),
        '은(는) 그쪽으로 출발했다.',
      ]);
      era.println();
      await era.printAndWait([
        '얼마나 걸었는지 모르겠다. 시간도 이 여행 속에서 흐릿해졌다. 다행히 이곳에서는 배고픔도 갈증도 느끼지 않아 ',
        you.get_colored_name(),
        '의 마음은 조금 위안을 얻었다.',
      ]);
      await era.printAndWait('변함없는 초원. 영원히 도착할 수 없는 저편 같다.');
      await era.printAndWait([
        maru.get_colored_name(),
        '이(가) 말했던 그 금빛 초원……',
      ]);
      await you.say_and_wait('정말 있는 건가?');
      await era.printAndWait('그 아름다운 세계.');
      await maru.say_as_unknown_and_wait([maru.sex, '은(는) 저기에 있어.']);
      await you.say_and_wait([maru.get_colored_name(), '！？']);
      await era.printAndWait([
        '바로 앞의 저 사람은 틀림없이 ',
        maru.get_colored_name(),
        '！',
      ]);
      await you.say_and_wait('여기 있었구나!!');
      await era.printAndWait([
        '기쁨 속에서 ',
        you.get_colored_name(),
        '은(는) 그 환영에게 달려들었다.',
      ]);
      await you.say_and_wait('응?');
      await era.printAndWait(['끌어안으려던 두 팔은 ', maru.sex, '의 몸을 그대로 통과했다.']);
      await maru.say_and_wait('……');
      await era.printAndWait('환영은 한마디도 없이 어딘가로 걷기 시작한다.');
      await you.say_and_wait('？');
      await era.printAndWait(
        '처음에는 천천히 걷다가 점점 속도를 올리고, 마침내 아예 달리기 시작했다.',
      );
      await you.say_and_wait('기다려!');
      await era.printAndWait([
        '태어난 목적은 ',
        you.get_colored_name(),
        '을(를) 이끄는 것인 듯하다. 더 달릴 수 없어 앉아 숨을 고르면 바로 앞에서 움직이지 않는다.',
      ]);
      await era.printAndWait([
        '전력으로 달릴 때면 영원히 아주 조금 모자라 ',
        maru.sex,
        '에게 닿지 않는다.',
      ]);
      await era.printAndWait([
        '어떻게 해야 하지? 어떻게 해야 다시 ',
        maru.sex,
        '에게 닿을 수 있지?',
      ]);
      await era.printAndWait(['분하다.', maru.sex, '을(를) 따라잡고 싶다.']);
      await era.printAndWait([
        maru.sex,
        '을(를) 넘고 싶다.',
        maru.sex,
        '이(가) 아는 세계를 보고 싶다.',
      ]);
      await you.say_and_wait(
        '분명 아름다울 거야! 그렇지 않다면 이렇게까지 집착하며 나아가지 않겠지.',
      );
      await you.say_and_wait('갖고 싶다. 차지하고 싶다. 저 아름다운 세계를 보고 싶다.');
      await era.printAndWait(
        '희미하게 자신을 계속 묶고 있던 족쇄에 닿은 것 같다.',
      );
      await era.printAndWait(
        '이대로 계속 달리면 살아 있는 채로 지쳐 죽을지도 모른다.',
      );
      await you.say_and_wait('오랫동안 생각했다. 계약한 날부터 URA가 끝나는 순간까지.');
      await you.say_and_wait('정말 원하는 것은 사실 아름다움의 한순간이다.');
      await you.say_and_wait(
        '한순간 감각이 절정에 이르는 그때. 나는 그 찰나를 위해 지금까지 살아왔다.',
      );
      await you.say_and_wait(
        '바로 지금 이 순간이야말로 세 여신이 준 유일한 기회 아닌가?',
      );
      await you.say_and_wait('그렇다면 답은 처음부터 정해져 있다.');
      await era.printAndWait([
        '몸이 지르는 비명을 무시하고 ',
        you.get_colored_name(),
        '은(는) 다시 앞으로 가속했다.',
      ]);
      await era.printAndWait(
        '……앞의 저 여명과 아득히 닿지 않는 환상 같은 거리를 유지했다.',
      );
      await era.printAndWait([
        '인간과 ',
        maru.uma_sex_title,
        '사이에 있는 넘기 어려운 절벽.',
      ]);
      await you.say_and_wait('으아아아아!', true);
      await era.printAndWait('온몸의 마지막 힘을 짜내 필사적으로 뛰어올랐다.');
      await era.printAndWait(
        '환영조차 이 마지막 한 번의 도약은 예상하지 못한 듯 반응할 틈도 없다.',
      );
      await era.printAndWait([
        '결국 ',
        you.get_colored_name(),
        '은(는) 그 모습에 닿았다.',
      ]);
      await you.say_and_wait('해냈다!', true);
      await era.printAndWait('그리고 희미한 감촉은 곧 사라졌다.');
      await era.printAndWait([
        '마지막 힘을 전부 써버린 ',
        you.get_colored_name(),
        '은(는) 바로 앞에서 멈춘 환영을 바라볼 수밖에 없다.',
      ]);
      await you.say_and_wait(
        [maru.get_colored_name(), '、 드디어 네 감촉을 알았어!'],
        true,
      );
      await era.printAndWait(
        '극한의 운동 끝에 갑자기 넘어졌다. 뼈가 부러졌을 것이다.',
      );
      await era.printAndWait(
        '거친 호흡 속에서 폐는 작은 칼로 살을 조금씩 깎는 듯 아프다.',
      );
      await era.printAndWait([
        '엄청난 대가를 치르고 ',
        you.get_colored_name(),
        '은(는) 무엇을 얻었나?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 마음은 그 아름다움에 사로잡혀 눈물이 제어되지 않은 채 흘러내린다.',
      ]);
      await you.say_and_wait('죽는 건가?', true);
      await era.printAndWait([
        '환영은 이전처럼 목표를 향해 걷지 않고 오히려 ',
        you.get_colored_name(),
        ' 쪽으로 걸어왔다.',
      ]);
      await era.printAndWait([
        '시들어가는 자에게 임종의 보살핌을 주듯 살며시 ',
        you.get_colored_name(),
        '을(를) 무릎 사이에 눕혔다.',
      ]);
      await you.say_and_wait([maru.get_colored_name(), '。'], true);
      await era.printAndWait(
        '낙엽은 뿌리로 돌아간다. 눈앞의 사람은 그리던 사람이 아니다. 마음의 호수는 초봄, 바람에 흩날리는 첫 꽃잎으로 덮이고 모든 소란은 고요로 돌아간다.',
      );
      await you.say_and_wait('이건 너를 만나기 위해 바친 선물이야.', true);
      await you.say_and_wait('나는…… 이제 도망치지 않아.', true);
      await era.printAndWait('끊임없이 솟는 눈물이 시야를 흐린다.');
      await you.say_and_wait('너는…… 이제 영원히 혼자가 아니야.', true);
      await era.printAndWait([
        '마지막 장면은 ',
        maru.get_colored_name(),
        '이(가) 보았던 그 바다에서 멈췄다.',
      ]);
      await era.printAndWait(
        '거울처럼 고요한 바다가 지나간 구름과 연기를 비추고 있다.',
      );
      era.drawLine();
      await you.say_and_wait('여기는?');
      await era.printAndWait('다시 눈을 떴을 때 눈앞에는 금빛 초원이 펼쳐져 있었다.');
      await era.printAndWait([
        '바로 ',
        maru.get_colored_name(),
        '이(가) 말했던 모든 인간의 요람.',
      ]);
      await godolphin.say_and_wait('이제 울 필요는 없다.');
      await godolphin.say_and_wait('이 낙원에는 이제 슬픔이 존재하지 않는다.');
      await era.printAndWait([
        '포용을 상징하는 여신 고돌핀 바브가 자애로운 얼굴로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await godolphin.say_and_wait(
        '너는 이미 자신의 용기를 우리에게 증명했다.',
      );
      await godolphin.say_and_wait(
        '다시 만날 때까지 자신의 생각을 따라 이 길을 끝까지 걸어라.',
      );
      await era.printAndWait([
        '용기를 상징하는 여신 달리 아라비안이 기대 어린 눈으로 ',
        you.get_colored_name(),
        '을(를) 격려했다.',
      ]);
      await darley.say_and_wait([
        '인간의 몸으로 전력을 다해 겨우 ',
        maru.uma_sex_title,
        '의 끝자락에 닿았다.',
      ]);
      await darley.say_and_wait(
        '강대하다는 말은 너와 인연이 없다. 지금까지 겁쟁이처럼 거짓으로 엮은 종이 성에 숨어 그 성이 무너지지 않을 거라 망상했다.',
      );
      await darley.say_and_wait(
        '……하지만 마지막 벼랑 끝에서 너는 우리에게 깊이 참회했다. 더는 도망치지 않고 전력을 다한 마지막 한 번의 도약이야말로 참회의 증거다.',
      );
      await era.printAndWait([
        '힘과 강대함을 상징하는 여신 바이얼리 터크가 한숨 섞인 얼굴로 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.printButton('「세 여신님!?」', 1);
      await era.input();
      await byerley.say_and_wait(
        '보는 대로 우리가 이 에덴을 만들고 지키는 여신이다.',
      );
      await byerley.say_and_wait([
        '임종을 맞아 이곳에 오는 평범한 인간은 셀 수 없이 많다.',
        maru.uma_sex_title,
        '이(가) 아니라 살아 있는 몸으로 온 자는 아마 너 하나뿐이다.',
      ]);
      await darley.say_and_wait('소원이 있느냐?');
      await darley.say_and_wait(
        '인류 사회의 운행에 영향을 주지 않는 한 우리는 이뤄줄 수 있다.',
      );
      await era.printAndWait('소원인가?');
      await era.printAndWait(
        '여기까지의 험난함을 하나하나 겪은 뒤 마지막에 나온 답은 ',
      );
      era.printButton(`「현실 세계로 돌려보내 ${maru.name} 곁으로」`, 1);
      await era.input();
      await byerley.say_and_wait(
        '소원을 비는 순간 너는 인간 사회로 돌아간다. 그래도 소원이 그것이냐?',
      );
      era.printButton(
        `「존경하는 여신님, 보시는 대로 그것이 제 소원입니다.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        '내가 좇는 아름다움은 평범한 사람의 기준으로 좋지도 나쁘지도 않은 운 속에서 큰 대가를 치른 뒤에야 피어나는 꽃이다.',
      );
      await you.say_and_wait(
        '비유하자면 땀과 시간으로 미술전의 추첨권 한 장을 바꾼 것과 같다.',
      );
      await you.say_and_wait(
        '그 미술전에 들어가려면 그 미술전의 입장권을 뽑아야 한다.',
      );
      await you.say_and_wait(
        '하지만 어떤 소원이든, 자신의 운이 좋아지기를 바라는 것조차 내가 좇는 아름다움의 가치를 크게 깎아버린다.',
      );
      await you.say_and_wait(
        '소원을 빈 결과 오히려 목표에서 멀어진다. 공허한 산물에 불과하다.',
      );
      await darley.say_and_wait('……마음을 정했다면 보내주마.');
      await godolphin.say_and_wait(
        '사랑스러운 아이야. 한 생을 보낸 뒤 다시 이곳에 올 때 평안을 얻기를.',
      );
      await byerley.say_and_wait(
        '……쥐는 약하다. 연약한 것은 몸뿐이다. 약한 몸에 깃든 용기는 육체의 한계를 넘어 마음을 움직이기에 충분하다.',
      );
      await byerley.say_and_wait('아마 나는 너를 얕보고 있었던 모양이다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 몸이 점점 땅에서 떠오르고 세 여신의 배웅 아래 높이, 빠르게 올라가며 의식이 끊기는 순간까지 그 금빛 초원이 보였다.',
      ]);
      await era.printAndWait([
        '……그리고 환영인 ',
        maru.sex,
        '이(가) ',
        you.get_colored_name(),
        '에게 손을 흔들며 작별했다.',
      ]);
      era.drawLine();
      await maru.say_and_wait([callname, '？']);
      await era.printAndWait(
        '오랜 시간이 지난 것 같기도 하고 별로 지나지 않은 것 같기도 하다.',
      );
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        '의 눈에는 자신이 너무 지쳐 잠든 것처럼 보였던 모양이다.',
      ]);
      era.printButton(`「다녀왔어, ${maru.name}.」`, 1);
      await era.input();
      await era.printAndWait([
        '꿈속 환영처럼 ',
        maru.get_colored_name(),
        '은(는) 미소를 보였다.',
      ]);
      await maru.say_and_wait('어서 와.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] favourite_things
  favourite_things: (() => {
    const title = '마루젠스키, 「좋아함」을 말하다';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`오늘의 ${maru.name}은(는) 취재를 받고 있다.`);
      await you.say_as_passer_by_and_wait(
        '記者',
        `그럼 다음은 승부복에 대해 들려주세요. 이 승부복에서 가장 마음에 드는 부분은 어디인가요?`,
      );
      await maru.say_and_wait(
        `타오르는 듯한 빨간색을 제일 좋아해서 애차도 빨간색이야♪`,
      );
      await you.say_as_passer_by_and_wait('記者', `愛車？`);
      era.printButton(`${maru.name}의 애차를 부르는 이름이다.`, 1);
      await maru.say_and_wait(`아, 미안해. 이야기에 너무 빠졌네♪`);
      await maru.say_and_wait(
        `사실 어릴 때 자동차 전시회에 따라갔다가 새빨간 슈퍼카를 봤어. 그 멋진 외관에서 눈을 뗄 수 없었지.`,
      );
      await maru.say_and_wait(
        `당시 나는 나중에 차를 산다면 이거라고 다짐하고, 카탈로그 사진을 보며 운전하는 모습을 상상하면서 노력했어.`,
      );
      await maru.say_and_wait(`지금은 그 꿈도 이뤘어. 매일 애차로 신나게 달리고 있지♪`);
      await era.printAndWait(`취재는 순조롭게 진행되고 있다……`);
      await you.say_as_passer_by_and_wait(
        '記者',
        `감사합니다. 그럼 마지막으로 사진도 부탁드려도 될까요?`,
      );
      await maru.say_and_wait(`알겠어! 가능한 한 매력을 보여줄게.`);
      await maru.say_and_wait(
        `맞다! 나를 제일 잘 아는 건 ${callname}이지?`,
      );
      await maru.say_and_wait(
        `${you.name}은(는) 오늘 촬영에서 내 어떤 부분을 밀어주는 게 좋다고 생각해?`,
      );
      era.printButton('「누구도 따라올 수 없는 스피드」 (파워+20)', 1);
      era.printButton('「언제나 여유로운 미소」 (스태미나+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그렇구나, 가장 눈부신 순간은 달리는 순간을 즐길 때지.`,
        );
        await maru.say_and_wait(
          `그럼 아예 애차 위에서 사진을 찍어달라고 하자.`,
        );
        await era.printAndWait(
          `그 뒤 기자까지 끌어들인 드라이브에서 ${maru.name}의 얼굴은 반짝이는 표정을 보였다.`,
        );
      } else {
        await maru.say_and_wait(
          `응, 그래. 무엇을 하든 가장 중요한 건 즐기는 거야.`,
        );
        era.printButton('「기대하고 있을게.」', 1);
        await era.input();
        await maru.say_and_wait(
          `맡겨줘! ${you.name}의 기대에 부응해서 정말 귀여운 미소를 보여줄게!`,
        );
        await era.printAndWait(`기자: 좋아요! 멋진 사진이 나왔습니다!`);
        await era.printAndWait(
          `며칠 뒤 ${maru.name}과(와) 함께 취재 기사를 확인하던 중.`,
        );
        await maru.say_and_wait(
          `정말 멋진 미소가 찍혔네♪ 게다가 여기…… ${you.name} 이름도 나왔어.`,
        );
        await maru.say_and_wait(
          `응…… 『트레이너와의 유대에서 태어난 인상적인 미소』라고 적혀 있어!`,
        );
        era.printButton('「조금 부끄럽네.」', 1);
        await era.input();
        await maru.say_and_wait(
          `그렇지 않아. ${you.name}의 지원이 없었다면 이렇게 귀여운 미소도 지을 수 없었을 거야.`,
        );
        await era.printAndWait(
          `사진에서도 눈앞에서도 ${you.name}은(는) ${maru.name}의 눈부신 미소를 느꼈다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] feel_speed
  feel_speed: (() => {
    const title = '슈퍼카로 드라이브';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `어느 날 ${you.name}이(가) 교문을 나와 산책하려던 순간, 마침——`,
      );
      await era.printAndWait(
        `기분 좋은 ${maru.name}이(가) 교외를 향해 걷고 있었다.`,
      );
      era.println();

      await maru.say_and_wait(
        `어머, ${callname}? 오늘 날씨 좋네. 같이 드라이브하지 않을래?`,
      );
      era.printButton('「좋아.」', 1);
      await era.input();
      await maru.say_and_wait(
        `${
          maru.name
        }의 제안을 거절할 이유는 없다. 교외에 임시로 세워둔 빨간 차로 함께 향했다.`,
      );
      await maru.say_and_wait('그럼 출발이야!');
      await era.printAndWait(
        `홍련색 슈퍼카가 시동을 거는 순간 ${you.name}은(는) 갑자기 오한을 느꼈다. 아마 착각일 거라고 스스로를 달랬다.`,
      );
      era.println();
      await era.printAndWait(`十秒後`);
      era.printButton('「조금 너무 빠르지 않아!」', 1);
      await era.input();
      await maru.say_and_wait('이 속도는 아직 괜찮아!');
      await maru.say_and_wait('이제 고속도로야! 진심으로 간다!');
      await maru.say_and_wait(
        '애차가 가속했다! 애차가 드리프트했다! 애차의 속도가 더 빨라졌다!!!',
      );
      await maru.say_and_wait('후오! 이 느낌, 참을 수 없네♪');
      await maru.say_and_wait(
        `어라? ${era.get('callname:0:-1')}! ${you.name}, 왜 그래?`,
      );
      await maru.say_and_wait('후오! 이 느낌, 참을 수 없네♪');
      await maru.say_and_wait('응? 응?');
      await maru.say_and_wait(`${you.name}, 괜찮아? 내가 너무 스퍼트했나?`);
      era.printButton('「한계까지 도전하자!」 (스피드+10)', 1);
      era.printButton('「조금 쉬어도 될까?」 (지능+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `${callname}이(가) 그렇게까지 말한다면 ${
            maru.elder_sibling_sex_title
          }도 진심으로 갈게!`,
        );
        await maru.say_and_wait('함께 한계를 돌파하자!');
        await maru.say_and_wait('자! 음속을 넘어!');
        await maru.say_and_wait(
          `나와 ${you.name}이(가) 함께라면 어디든 갈 수 있어!`,
        );
        era.println();
        await maru.say_and_wait('이게 바람이 된다는 건가?');
        await era.printAndWait(
          `${you.name}의 의식이 어둠으로 떨어지기 직전, 마루젠의 황홀한 혼잣말이 들렸다.`,
        );
      } else {
        await maru.say_and_wait(`알겠어. 무리하면 안 돼!`);
        era.println();
        await maru.say_and_wait(`앞의 휴게소로 가자!`);
        await era.printAndWait(
          `그렇게 ${maru.name}은(는) 차를 휴게소에 세웠다.`,
        );
        era.println();
        await maru.say_and_wait(`괜찮아, 트레이너?`);
        await maru.say_and_wait(`음료를 사올게.`);
        await era.printAndWait(
          `${maru.name}은(는) 곧 차가운 음료 두 병을 가져왔다.`,
        );
        await maru.say_and_wait(`${callname}、${you.name}은(는) 今大丈夫？`);
        await era.printAndWait(
          `음료를 마신 뒤 ${maru.name}의 어지럼증은 천천히 사라졌다.`,
        );
        await maru.say_and_wait(
          `이대로 ${maru.elder_sibling_sex_title}의 허벅지에서 쉬어.`,
        );
        await era.printAndWait(
          `${maru.name}은(는) 살며시 ${you.name}의 머리를 자신의 허벅지에 올려놓았다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 손가락이 ${you.name}의 피부에 닿아 한 줄기 서늘한 감촉을 남긴다.`,
        );
        await maru.say_and_wait(
          `이게 『무릎베개』? 나도 처음이야. 불편하면 ${
            maru.elder_sibling_sex_title
          }에게 말해줘.`,
        );
        await era.printAndWait(
          `여성 특유의 향기가 머리를 자극하고 ${you.name}은(는) 어느새 몽글몽글한 상상에 빠졌다.`,
        );
        await maru.say_and_wait(
          `세 여신이여, ${you.name}은(는) 빈다. 한순간이라도 좋으니 이곳에 잠기게 해달라고. 의식이 사라지기 직전 ${you.name}은(는) 기도했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] find_love
  find_love: (() => {
    const title = '마루젠스키와 황혼의 해변에서 일몰을 보다';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 날, 훈련 후.`);
      era.printButton(
        '「좋아, 오늘 훈련 계획은 전부 달성했어. 수고했어.」',
        1,
      );
      await maru.say_and_wait(
        `후후, 바람의 기척과 잔디 향기를 느낄 수 있어서 나도 기분이 좋아지네♪`,
      );
      await era.printAndWait(
        `${maru.name}이(가) 몸을 쭉 편다. 완벽한 몸의 곡선이 ${you.name}의 뇌리에 깊게 새겨졌다.`,
      );
      await maru.say_and_wait(
        `후우——훈련 뒤에는 조금 피곤하네. ${
          callname
        }、 ${maru.elder_sibling_sex_title}와 함께 찻집에 갈래?`,
      );
      era.printButton('「물론이지.」', 1);
      await era.printAndWait(
        `신사로서(변태이긴 하지만) 성숙한 숙녀의 부탁을 거절할 도리는 없다. 두 사람은 ${maru.name}이(가) 가장 좋아하는 찻집 근처에 왔다.`,
      );
      await era.printAndWait(
        `황혼빛에 잘려나간 나무 그늘을 걷고 잡초가 자란 정원을 지나 2층으로 올라가서야 겨우 찻집 입구를 찾았다.`,
      );
      await era.printAndWait(
        `주인은 말수가 적은 노인인 듯하다. 블라인드를 통과한 빛 아래에서 더욱 구부정해 보인다. 세월은 돌이킬 수 없는 상처를 남겼지만 그 큰 손은 예전처럼 능숙하고 힘차다.`,
      );
      await era.printAndWait(
        `${maru.name}은(는) 익숙하게 주문하고 잡담 뒤 화제를 돌려 ${you.name}을(를) 소개했다.`,
      );
      await era.printAndWait(
        `주인은 하던 일을 멈추고 ${you.name}을(를) 자세히 살펴보았다. ${you.name}의 몸은 저도 모르게 곧게 펴졌다.`,
      );
      await era.printAndWait(
        `노인은 고개를 끄덕이고 ${you.name}을(를) 인정한 듯 조금 낡았지만 여전히 깨끗한 메뉴판을 건넸다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 무엇을 주문할지 고민하는 동안 ${maru.name}이(가) ${you.name}에게 말을 걸었다.`,
      );
      await maru.say_and_wait(`${callname}, 이런 가게는 처음이지?`);
      await maru.say_and_wait(
        `주인은 조금 괴팍하지만 좋은 사람이야! 솜씨는 말할 것도 없고. 여기서 과일 선데를 먹지 않는 건 아까워♪`,
      );
      era.printButton('「과일 선데 하나 주세요.」', 1);
      await era.printAndWait(
        `오래된 축음기가 지난 세기에 유행한 재즈를 틀고, 황혼 속에서 시간이 교차하는 듯한 아름다운 분위기를 만든다.`,
      );
      era.printButton('「(여기의 시간은 다른 곳보다 천천히 흐르는 것 같아.)」', 1);
      await maru.say_and_wait(`${callname}, 과일 선데 나왔어.`);
      await era.printAndWait(
        `${maru.name}의 말이 ${you.name}을(를) 현실로 돌려놓았다. 나무 쟁반 위 정교한 선데에 숟가락 두 개가 꽂혀 있다.`,
      );
      era.printButton('(주인이 일부러 이렇게 둔 건가.)', 1);
      await maru.say_and_wait(
        `${callname}, 내가 ${you.name}에게 먹여줄까?`,
      );
      await era.printAndWait(
        `${maru.name}의 등에 비스듬히 닿는 빛이 ${
          maru.sex
        }의 표정을 감춘다. 귀가 계속 흔들리는 것은 ${maru.sex}의 마음이 평온하지 않다는 징조인 듯하다.`,
      );
      await era.printAndWait(`${maru.name}은(는) ${you.name}의 대답을 기다리고 있다.`);
      era.printButton('(말없이 입을 벌린다) (지능+20)', 1);
      era.printButton('「미안, 아직 일이 남아 있어」 (근성+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${maru.name}이(가) 한 숟갈의 선데를 ${you.name}의 입으로 가져왔다. 차가운 감촉이 순간 머리를 채우고 이어 부드럽고 섬세한 맛이 찾아온다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 입을 열어 칭찬하려던 순간 상큼함과 달콤함이 입안 가득 퍼졌다.`,
        );
        await maru.say_and_wait(`${callname}, 맛은 어때?`);
        era.printButton('「정말 맛있어.」', 1);
        await era.input();
        await maru.say_and_wait(`정말! 그럼 ${you.name}도 나한테 먹여줘?`);
        await maru.say_and_wait(`아~`);
        await era.printAndWait(
          `${maru.name}이(가) ${you.name}의 행동을 재촉하고 두 귀가 더욱 세차게 흔들린다.`,
        );
        era.printButton('「할 수밖에 없다!」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 가슴의 흥분을 가라앉히려 하며 선데를 크게 한 숟갈 떠 떨리는 손으로 ${maru.sex}의 체리 같은 작은 입에 넣었다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 밝고 가지런한 법랑질 치아에도 한 줄기 깊은 정이 깃든 듯하다.`,
        );
        await maru.say_and_wait(
          `맛 정말 좋아⭐ ${callname}, 다음은 내가 ${you.name}에게 먹여줄게♪`,
        );
        await era.printAndWait(
          `입꼬리가 살짝 들어간 ${maru.sex}에게 희미한 미소가 떠오른다.`,
        );
        await era.printAndWait(
          `그 뒤 ${you.name}과(와) ${maru.sex}은(는) 말없이 ${you.name}이(가) 한 숟갈, 내가 한 숟갈씩 서로 선데를 먹여주었다.`,
        );
        await era.printAndWait(
          `황혼이 가져온 옅은 우울함은 ${maru.sex}의 모습에 희석된 듯하다.`,
        );
        await maru.say_and_wait(
          `같이 해변으로 드라이브하지 않을래? 애차도 의욕이 넘치는 것 같아♪`,
        );
        await era.printAndWait(`${maru.sex}은(는) 기대 어린 눈으로 ${you.name}을(를) 바라보았다.`);
        era.printButton('「출발하자.」', 1);
        await era.input();
        await era.printAndWait(`후후♪ ${callname}은(는) 그렇게 말할 줄 알았어.`);
        await maru.say_and_wait(`그럼 지금 바로 출발!`);
        await era.printAndWait(
          `말없는 주인이 음식과 음료를 치운 뒤 ${you.name}을(를) 자세히 바라보았다.`,
        );
        await era.printAndWait(
          `잠시 뒤 ${you.name}에게 고개를 끄덕였다. 인정한 듯하다.`,
        );
        await maru.say_and_wait(`${callname}, 출발이야!`);
        await era.printAndWait(
          `${maru.name}이(가) 입구에서 살며시 ${you.name}을(를) 재촉한다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 지갑에서 우마 코인을 꺼내 계산하려 하자 주인은 가볍게 고개를 저으며 계속 잔을 닦았다.`,
        );
        era.printButton('「……고맙습니다.」', 1);
        await era.input();
        await era.printAndWait(`그러고 ${you.name}이(가) 나가려던 순간 `);
        await era.printAndWait(
          `주인: 손님, ${you.name}의 아가씨와 좋은 시간 보내십시오.`,
        );
        await era.printAndWait(
          `묵직하고 매력적인 목소리가 ${you.name}의 왼쪽에서 들려와 ${you.name}은(는) 놀라 돌아보았다. 주인은 엄숙한 표정에 희미한 미소를 띠고 ${you.name}을(를) 바라보고 있다.`,
        );
        await era.printAndWait(`주인: 저희 가게도 문 닫을 시간입니다. 다른 용무가 있으신가요?`);
        await era.printAndWait(
          `그렇게 ${you.name}은(는) 뒤돌아보지 않고 나와 ${maru.name}이(가) 있는 입구로 향했다.`,
        );
        await maru.say_and_wait(
          `${callname}, 왜 이렇게 오래 걸렸어. ${you.name}을(를) 데리고 나갈게. 여긴 익숙한 안내가 없으면 길을 잃기 쉬워!`,
        );
        await era.printAndWait(
          `구불구불한 길을 지나 상점가의 번잡함에서 빠져나온 것은 ${you.name}에게 뜻밖이었다. 곧 애차에 올라탄 뒤 ${you.name}은(는) ${maru.name}과(와) 잡담을 시작했다.`,
        );
        await maru.say_and_wait(
          `흥흥♪ ${maru.elder_sibling_sex_title}의 센스, 나쁘지 않지? 엄마가 추천한 가게야!`,
        );
        era.printButton('「저 주인, 꽤 나이가 들어 보이던데.」', 1);
        await era.input();
        await maru.say_and_wait(
          `이 가게를 30년이나 했으니까. 어릴 때부터 부모님과 여기 와서 커피와 디저트를 먹었어.`,
        );
        await maru.say_and_wait(`주인은 엄격해 보이지만 사실 좋은 사람이야!`);
        await era.printAndWait(
          `그렇게 문답을 나누며 산을 도는 고속도로에 들어서자 차량 흐름은 점점 뜸해졌다.`,
        );
        await maru.say_and_wait(
          `이렇게 트레이너와 애차와 함께 드라이브하는 느낌, 정말 좋아. 강한 비트에 몸을 맡기면 기분도 단숨에 올라가!`,
        );
        await era.printAndWait(
          `${maru.name}의 귀가 격렬한 리듬에 맞춰 박자를 타고, ${you.name}은(는) ${maru.sex}의 리듬을 조금 따라가기 어려워졌다.`,
        );
        await era.printAndWait(
          `한 세기가 지난 듯 마침내 격렬한 리듬이 누그러지고 애차가 고속도로를 빠져나오자 ${you.name}은(는) 겨우 숨을 돌렸다.`,
        );
        await maru.say_and_wait(
          `후후♪ 바람의 기척이 얼굴을 쓰다듬는 느낌, 마음이 들뜨네. 애차도 기쁜 것 같아♪`,
        );
        await maru.say_and_wait(`……${callname}, ${you.name} 괜찮아?`);
        await era.printAndWait(
          `${maru.name}이(가) 속도를 줄이자 ${you.name}의 영혼은 겨우 세 여신의 곁에서 자기 몸으로 돌아왔다.`,
        );
        await maru.say_and_wait(
          `미안해. 트레이너 상태를 생각하지 못했어. ${maru.elder_sibling_sex_title}로서 실책이네.`,
        );
        await era.printAndWait(
          `${maru.name}의 두 귀가 내려가고 죄책감과 걱정이 뒤섞인 눈빛이 ${you.name}에게 향한다.`,
        );
        era.printButton(
          '「그렇지 않아. 바람의 기척을 느낄 수 있어서 나도 즐거웠어.」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${maru.name}의 귀는 곧 다시 서고 차량 오디오의 shoreline에 맞춰 쫑긋쫑긋 박자를 탄다.`,
        );
        await maru.say_and_wait(
          `트레이너는 정말 다정한 사람이네. ${maru.elder_sibling_sex_title}도 ${you.name}을(를) 좋아하게 된 건 옳은 결정이었다고 생각해♪`,
        );
        await maru.say_and_wait(
          `그런데 ${callname}은(는) 매일 이렇게 많은 아이들을 담당하는데 몸은 괜찮아?`,
        );
        era.printButton('「고개를 젓는다」', 1);
        await era.input();
        await maru.say_and_wait(
          `응응, 그게 제일 좋아. 트레이너도 정말 힘든 직업이네.`,
        );
        await maru.say_and_wait(
          `하지만 아이들이 조금씩 풋내 나는 껍질을 벗고 성장해 자기 꿈을 좇는 걸 보고 있으면 말로 표현할 수 없는 감동과 즐거움이 있어.`,
        );
        await maru.say_and_wait(
          `트레이너와 ${maru.uma_sex_title}의 관계는 스승과 제자 같은 것일지도 모르겠네.`,
        );
        await maru.say_and_wait(
          `아이들이 처음의 서먹함과 탐색에서 친밀함과 신뢰로 나아가고 3년의 목표가 끝난 뒤.`,
        );
        await maru.say_and_wait(
          `스승인 트레이너와 제자인 ${maru.uma_sex_title}은(는) 아주 깊은 유대를 쌓고, 그 유대가 힘이 되어 기적을 가져와 두 사람은 더 큰 목표로 나아간다.`,
        );
        era.printButton(
          `「트레이너로서 담당 ${maru.uma_sex_title}이(가) 목표를 좇는 길이 순조롭기를 진심으로 바란다.」`,
          1,
        );
        await era.input();
        era.printButton('「거기서 한 걸음 더 나아가면 세 여신의 총애지.」', 1);
        await era.input();
        await maru.say_and_wait(
          `후후♪ 트레이너, 재미있는 대답을 해줬네. ${maru.uma_sex_title}로서도 이 3년 동안 ${callname}과(와) 더 멋진 추억을 쌓고 싶어.`,
        );
        await maru.say_and_wait(
          `그럼 앞으로도 잘 부탁해, ${you.sex_code !== 1 ? '트・레・이・너・짱' : '트・레・이・너・군'}♪`,
        );
        await era.printAndWait(
          `하늘은 동쪽이 태양에 주황빛으로 물들었지만 머리 위는 아직 짙은 파랑이다. 태양과 별이 만나는 그 그라데이션은 몇 번을 봐도 질리지 않는다.`,
        );
        await era.printAndWait(`${you.name}은(는) 저도 모르게 하품했다.`);
        await maru.say_and_wait(
          `트레이너, 졸리면 조수석에서 조금 자도 돼. 해변에 도착하면 나와 애차가 ${you.name}을(를) 깨워줄게.`,
        );
        await era.printAndWait(
          `원래 지쳐 있던 몸은 안심되는 말을 듣자 짐을 내려놓은 듯 눈을 감고, 산들바람의 부드러운 기운과 마루젠에게서 전해지는 희미한 향기를 즐겼다.`,
        );
        await era.printAndWait(
          `원래 지쳐 있던 몸은 안심되는 말을 듣자 짐을 내려놓은 듯 눈을 감고, 산들바람의 부드러운 기운과 마루젠에게서 전해지는 희미한 향기를 즐겼다.`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`十分後`);
        await maru.say_and_wait(`도착했어, ${callname}, 일어나.`);
        await era.printAndWait(
          `아직 졸린 눈을 비비며 무의식적으로 만족스러운 하품을 하고, ${you.name}은(는) 기절한 듯한 감각에서 서둘러 정신을 되찾으려 했다.`,
        );
        await era.printAndWait(
          `파도가 암초에 부서져 속삭이는 물보라가 된다. 밀물이 바다의 선물을 가져오고 불가사리와 조개껍데기는 썰물에 조용히 사라진다.`,
        );
        await era.printAndWait(`달이 빛나는 별들에게 둘러싸인 채 높은 곳으로 오른다.`);
        await era.printAndWait(`지금의 바다는 파도 소리 속에서 더욱 고요하다.`);
        await era.printAndWait(
          `두 사람은 차 문을 닫고 해변으로 향한다. 바다는 연인들에게 자신의 다정한 면을 보여주고 있다.`,
        );
        await era.printAndWait(`고요하네, ${callname}도 그렇게 생각하지?`);
        await maru.say_and_wait(`고요하네, ${callname}도 그렇게 생각하지?`);
        await era.printAndWait(
          `${maru.name}은(는) 하이힐을 벗고 맨발로 파도 속으로 향했다.`,
        );
        await maru.say_and_wait(`${callname}도 바닷물의 입맞춤을 느껴봐.`);
        await era.printAndWait(
          `${you.name}은(는) ${maru.name}의 권유에 자신도 신발을 벗고 천천히 파도 쪽으로 향했다.`,
        );
        await era.printAndWait(
          `바닷물이 물보라 하나하나를 휘감고, 그 물보라는 아이처럼 장난치며 해안으로 밀려와 부드러운 모래사장을 세세히 쓰다듬고 아쉬운 듯 물러난다.`,
        );
        await era.printAndWait(
          `끝없는 쓰다듬음 아래 모래사장에는 은빛 선이 하나하나 그려지고, 달빛 아래 바다에 반짝이는 은색 테두리가 끼워진 듯하다.`,
        );
        await era.printAndWait(`자연이 최고의 화가다. `);
        await era.printAndWait(
          `${maru.name}은(는) 왼손으로 치마를 살짝 들어 올리고 몸은 자연스럽게 반쯤 ${you.name} 쪽으로 향한다. 달빛이 ${
            maru.sex
          }에게 범접할 수 없는 성스러운 겉옷을 입히고, 파도가 암초를 때리며 일으킨 물안개는 몽롱한 유혹을 더한다. 멈추지 않는 파도는 소녀의 마음속 일렁임을 비유하는 듯하다.`,
        );
        await era.printAndWait(
          `${
            maru.sex
          }자신도 눈치채지 못했을지 모른다. 자연의 보이지 않는 붓 아래 자신이 이 은빛 액자 속 유화의 주인공이 되었다는 것을.`,
        );
        await maru.say_and_wait(`달이 아름답네, ${callname}.`);
        era.printButton('「바람도 부드럽네.」', 1);
        await era.input();
        await maru.say_and_wait(`후후♪ ${callname}, 말 잘하네.`);
        await era.printAndWait(
          `이야기하는 동안 ${you.name}은(는) ${maru.name}의 허리를 살며시 끌어안았다.${
            maru.sex
          }은(는) 감전된 듯 한 번 떨었지만 ${you.name}의 행동에 저항하지 않았다.`,
        );
        await maru.say_and_wait(
          `${callname}, 동의 없이 숙녀를 갑자기 끌어안으면 어떤 벌을 받을지 생각해 봤어?`,
        );
        await era.printAndWait(
          `그 푸른 눈동자에는 일종의 인력이 있다. ${maru.sex}이(가) ${you.name}을(를) 바라보면 시선을 떼기 어렵다. 하지만 압박감은 없다.`,
        );
        await era.printAndWait(
          `변화무쌍한 바람의 요정처럼 ${maru.sex}은(는) 하늘의 빛과 소리, 바다 혹은 육지의 향기 같은 존재다.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${you.name}의 입술에 부드러운 감촉이 전해졌다.`);
        await maru.say_and_wait(
          `정말이지, ${
            callname
          }은(는) 조금도 솔직하지 않네. 이런 때는 내가 먼저 움직이지 않으면 답답하다니까.`,
        );
        await era.printAndWait(
          `처음에는 살피듯 가볍게 닿았다가 점차 리듬이 빨라지고 마지막에는 깊은 입맞춤으로 이어졌다. ${you.name}이(가) 숨쉬기 어려워질 때가 되어서야 아쉬운 듯 떨어졌다.`,
        );
        await era.printAndWait(
          `두 사람의 입술 사이에 은빛 실이 늘어졌다.${
            maru.sex
          }은(는) 한없는 애정과 다정한 얼굴로 ${you.name}을(를) 바라보았다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 무의식적으로 ${maru.sex}을(를) 세게 끌어안고 ${
            maru.sex
          }도 ${you.name}의 뺨을 살며시 쓰다듬으며 응했다.`,
        );
        await era.printAndWait(
          `차가운 바닷물 속에서 등대 같은 온기만이 오래 남았다.`,
        );
      } else {
        era.printButton('「미안, 아직 일이 남아 있어.」', 1);
        await era.input();
        await maru.say_and_wait(
          `어머, 그럼 빨리 처리하고 와. ${callname}, 제대로 일해야 마지막 보상을 받을 수 있어.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 말없이 가방을 들고 뒤돌아보지 않은 채 찻집을 나왔다. 하지만 곧 구불구불한 골목에서 길을 잃었다.`,
        );
        await era.printAndWait(
          `마지막에는 친절한 아저씨의 차를 얻어 타고 ${you.name}은(는) 통금 전에 어떻게든 기숙사로 돌아왔다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] gentle_wind
  gentle_wind: (() => {
    const title = 'TRUE END 다정한 바람이 세상을 분다';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}과(와) 잊기 어려운 3년을 보낸 뒤 URA 트로피를 손에 넣었다.`,
      );
      await era.printAndWait(`앞으로 도전할 것은 완전히 새로운 빛나는 시리즈다.`);
      await era.printAndWait(`하지만 그 전에.`);
      await you.say_and_wait(`이제 ${maru.name}을(를) 만나러 가는 건가?`);
      await you.say_and_wait(`조금 긴장되네.`);
      era.drawLine({ content: '屋上' });
      await era.printAndWait(`옥상 문을 열었다.`);
      await you.say_and_wait(`${maru.name}은(는) 없나?`);
      await era.printAndWait(`한 줄기 산들바람이 지나갈 뿐 옥상에는 사람 그림자가 없다.`);
      await maru.say_and_wait(`누구라고 생각해?`);
      await era.printAndWait(
        `${you.name}의 시야가 두 손에 가려졌다. 익숙한 향기로 누가 왔는지 곧 알 수 있었다.`,
      );
      await you.say_and_wait(`${maru.name}`);
      await era.printAndWait(
        `흥분해서 큰 소리를 낼 줄 알았는데 지금의 목소리는 스스로도 의심할 만큼 차분하다.`,
      );
      await maru.say_and_wait(`역시 ${callname}이네. 금방 내가 누군지 맞혔어.`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}, 이렇게까지 누군가를 좋아해본 적은 없어♪`,
      );
      await maru.say_and_wait(`이게 사랑이라는 걸까?♪`);
      era.printButton(`「${maru.name}, ${you.name}에게 할 말이 있어. 그러니까.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `흥흥~ ${callname}은(는) ${maru.elder_sibling_sex_title}에게 어리광 부리고 싶은 거야?`,
      );
      await maru.say_and_wait(`어떤 나쁜 짓이라도……`);
      era.printButton(`「영원히 함께 살아줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `믿을 수 없다는 ${maru.name}의 표정 앞에서 ${
          you.name
        }은(는) 맹세의 반지를 ${maru.sex}에게 건넸다.`,
      );
      era.printButton(
        `「이상보다, 레이스보다, 정말 소중히 생각하는 건 ${you.name}이야.」`,
        1,
      );
      await era.input();
      era.printButton(`「그러니까 내 사랑을 받아줘.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `이래서는 같은 사랑으로 답하지 않으면 세 여신님을 뵐 낯이 없겠네.`,
      );
      await maru.say_and_wait(
        `${callname}, 레이스뿐만이 아니야. 앞으로의 생활도 잘 부탁해.`,
      );
      era.printButton(`「나도 앞으로 잘 부탁해.」`, 1);
      await era.input();

      await era.printAndWait(
        `맹세의 입맞춤은 어떤 맛일까? 짠맛? 아니면 한 줄기 달콤함? 지금은 눈앞에서 사랑에 빠진 ${maru.teen_sex_title}이(가) 더 중요하다.`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${maru.name}의 운명은 복잡하게 얽힌 끝에 마침내 선물을 얻었다.`,
      );
      await era.printAndWait(
        `${maru.name}의 달리기는 ${maru.uma_sex_title}들에게 용기와 희망을 주었다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}들은 앞으로도 ${
          maru.name
        }의 등을 좇아 ${maru.sex}을(를) 넘어설 것이다.`,
      );
      await maru.say_and_wait(
        `이기는 것보다 더 많은 ${maru.uma_sex_title}에게 희망이 존재한다는 걸 느끼게 하는 게 내 이상이야♪`,
      );
      await maru.say_and_wait(
        `앞으로의 나날에는 잔디 한편에서 말없이 ${maru.uma_sex_title}들을 지켜보며 ${
          maru.couple_title
        }을(를) 에덴으로 이끄는 것이 내 새로운 사명이야.`,
      );
      await maru.say_and_wait(
        `하지만 지금은 ${
          callname
        }와(과) 달콤하게 함께 사는 것이 가장 행복한 TRUE END네♪`,
      );
      await era.printAndWait(
        `방황하던 시기의 ${maru.name}을(를) 이끌었던 ${
          you.name
        }와(과), 길을 잃은 ${maru.uma_sex_title}을(를) 이끄는 ${
          maru.name
        }은(는) 결국 다정한 바람이 되어 ${maru.uma_sex_title}의 세계를 누빈다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] gentle_wind_end
  async gentle_wind_end(maru, callname) {
    await era.printAndWait(
      `이렇게 두 사람의 이야기는 일단 결말을 맞았다. 경사로세, 경사로세.`,
    );
    await era.printAndWait(`힌트를 보시겠습니까?`);
    era.printButton(`예`, 1);
    era.printButton(`아니오`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END를 달성하려면 생애 레이스를 전부 이겨야 한다.`,
      );
      await era.printAndWait(`기념일 관련 선택지는 결말에 영향을 주지 않는다.`);
      await era.printAndWait(
        `스토리 관련은 2년 차 선택지에 주의. 세이브는 2년 차 1월 셋째 주부터 고려할 수 있다. 이벤트명: 봄과 겨울의 경계.`,
      );
      await era.printAndWait(
        `GE 조건을 충족한 뒤 크리스마스 이벤트 후 팀 목록을 비우고 ${maru.name}을(를) 다시 선택하면 특수 대사가 나온다.`,
      );
      await era.printAndWait(
        `또 3년 차 첫째 주에는 먼저 새해 참배를 선택한 뒤 신사에 가면 구상의 종합 수익이 높다.`,
      );
      await era.printAndWait(`마지막으로, 빨리 GE를 달성하기를.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `직접 찾아보고 싶어? 공략의 신이 될 자질이 있네. ${callname}, 힘내!`,
      );
    }
  },

  // [번역 대상] get_ts_content
  get_ts_content(maru, train) {
    era.print([
      maru.get_colored_name(),
      '의 ',
      train,
      ' 훈련이 무사히 끝났다.',
    ]);
  },

  // [번역 대상] girls_blue_1
  girls_blue_1: (() => {
    const title = (maru) => `${maru.teen_sex_title}의 우울`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`빈 교실`);
      await era.printAndWait(
        `${maru.name}에게 숨긴 채 종잇조각에 적힌 약속 장소로 향했다.`,
      );
      await era.printAndWait(`약속보다 5분쯤 늦게 교실 문을 밀었다.`);
      await era.printAndWait(`오랫동안 사용되지 않은 빈 교실인데도.`);
      await era.printAndWait(`공기에는 상상했던 것 같은 답답함이 없다.`);
      await era.printAndWait(`조금 전 비가 그쳤기 때문일지도 모른다.`);
      await era.printAndWait(
        `옅은 안개가 멀리 훈련장에 아직 남아 있다.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `이제 왔어? 마루젠 선——`,
      );
      await era.printAndWait(
        `눈에 들어온 것은 예전에 관중석에서 감사 인사를 했던 모습이었다.`,
      );
      await you.say_and_wait(
        `미안해. ${maru.name}은(는) 볼일이 생겨 오지 못하게 됐어.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `……그럴 리가, 절대`);
      await era.printAndWait(`${maru.uma_sex_title}은(는) 곧장 이쪽을 노려보았다——`);
      await era.printAndWait(
        `이상하게도 분노라기보다 무언가를 바라는 듯 보였다.`,
      );
      await you.say_and_wait(`미안해.`, true);
      await era.printAndWait(
        `결국 처음부터 끝까지 개인적인 욕망을 채우기 위해 저지른 잘못이다.`,
      );
      await you.say_and_wait(
        `진정해. 나도 방금 알았어. ${maru.name}이(가) 조금 전에 종잇조각을 주워서——\n`,
      );
      await maru.say_and_wait(
        `무슨 일이 있어도 ${maru.elder_sibling_sex_title}에게 상담하는 거야?`,
      );
      await era.printAndWait(
        `머릿속에는 자연스럽게 ${maru.name}과(와) 나눈 약속이 떠올랐다.`,
      );
      await era.printAndWait(`자기혐오에 시달린다.`);
      await you.say_and_wait(
        `그리고 조금 고민한 뒤, 다른 ${maru.uma_sex_title}이(가) ${maru.sex}와 옥상에서 만날 약속을 했다고.`,
      );
      await you.say_and_wait(`그러니까 미안해.`);
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `상대가 다음에 무엇을 할지 알 수 없다. 도망치고 싶지만 ${maru.sex}이(가) 그대로 돌아가 ${maru.name}에게 말한다면——`,
      );
      await era.printAndWait(`호기심에 이끌려 어둠 속으로 들어간다.`);
      await you.say_and_wait(`각오를 다지고 계속할 수밖에 없다.`);
      await era.printAndWait(
        `처음에는 밀려드는 감정에 거의 익사할 듯했다. 하지만 절정에 이르자 오히려 마음은 고요해졌다.`,
      );
      await you.say_and_wait(
        `미안해. 내가 먼저 부탁한 거야. ${maru.name}의 트레이너로서 담당의 고민은 해결해야 하니까.`,
      );
      await you.say_and_wait(
        `${maru.name}에는 미치지 못하지만, 트레이너로서——.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}을(를) 어떻게 생각하고 있나요?`,
      );
      await you.say_and_wait(`응?`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}의 인상은?`,
      );
      await era.printAndWait(`가슴 깊은 곳에서 한 가지 감각이 조용히 솟아났다.`);
      await era.printAndWait(`초조함과 고뇌가 섞인 후회가 가슴을 덮친다.`);
      await you.say_and_wait(`나는 `);
      era.printButton(`「의지할 수 있고 믿을 수 있다는 관점에서」`, 1);
      era.printButton(`「다정하고 맡길 수 있다는 관점에서」`, 2);
      era.printButton(`「선배와 후배의 관계에서」`, 3);
      era.print(
        '【경고. 신중하게 선택하십시오. 그렇지 않으면 모든 것을 되돌릴 수 없습니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`마루젠 선배는 의지할 수 있어——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송합니다. 제가 원하는 건 그런 대답이 아닙니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `지난번 도와주신 것에 대한 보답으로 마루젠 선배에게는 말하지 않겠습니다. 트레이너인 ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}은(는) 가볍게 인사하고 빈 교실을 나갔다. 다시 혼자가 되었다.`,
          );
          break;
        case 2:
          await you.say_and_wait(`마루젠 선배는 정말 다정해——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송합니다. 제가 원하는 건 그런 대답이 아닙니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `지난번 도와주신 것에 대한 보답으로 마루젠 선배에게는 말하지 않겠습니다. 트레이너인 ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}은(는) 가볍게 인사하고 빈 교실을 나갔다. 다시 혼자가 되었다.`,
          );
          break;
        case 3:
          await era.printAndWait(
            `의지할 수 있다는 것도, 다정하다는 것도 아마 ${maru.name}이(가) 내 앞에서 보여주는 표면에 불과하다.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}의 시점에서 생각한다면, 아니, ${
              maru.sex
            }이(가) 바라는 ${maru.name}이라는 이름의 아이돌이다.`,
          );
          await you.say_and_wait(
            `${maru.name}은(는) 후배를 잘 챙기고 가능한 한 도움의 손길을 내민다…… 아이돌이라고 생각해.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `왜 아이돌이라고 생각하나요?`,
          );
          await you.say_and_wait(
            `${maru.name}은(는) 자신을 넘어서는 뒷모습을 원하고 있어. ${maru.sex}은(는) 후배들이 ${
              maru.sex
            }의 달리기를 보고 청춘의 활력을 터뜨리길 바라고 있어.`,
          );
          await you.say_and_wait(
            `${maru.sex}의 등을 따라잡고 ${maru.sex}을(를) 넘어서 레이스장에서 ${
              maru.sex
            }을(를) 꺾고, 마지막에는——상쾌한 공기를 자유롭게 즐기는 것.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `……그렇네요. 마루젠 선배는 그런 사람이에요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `마루젠 선배의 트레이너이기도 하고, 전에 레이스장에서도 도움을 받았습니다. 그러니까 `,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `어쩌면 마루젠 선배에게 말하는 것보다 당신에게 이야기하는 편이 나을지도 모르겠어요.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}은(는) 창가에 서서 오른손으로 창틀을 짚고, 시선은 잔디 코스와 안뜰 사이를 헤맨다. 답을 찾는 듯하면서도 무언가를 피하는 듯하다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `저, ${maru.uma_sex_title}을(를) 그만둘 생각입니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `오래전부터 제가 ${maru.uma_sex_title}에 어울리지 않는다는 걸 알고 있었습니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `하지만 ${maru.name}에게 격려를 받았어요. 그 격려 하나만으로 여기까지 계속해 왔습니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `하지만 ${maru.uma_sex_title}의 세계는 노력하면 성공하는 동화 같은 곳이 아닙니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `G1은커녕 G2조차 제게는 넘을 수 없는 절벽입니다. 아무리 노력해도 상대에는 더 뛰어나고 더 재능 있는 이들이 있어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `위닝 라이브 중앙에서 꽃과 찬사를 누리는 1등을 바라보며, 패자인 우리는 입상조차 하지 못하면 패자의 노력에는 의미가 없다는 생각이 들어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `맑은 날에도 비 오는 날에도 누구보다 일찍 일어나 거의 감각이 사라질 정도로 노력했는데, 저는 졌습니다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `가끔 아주 조금은 예전에 격려해 준 마루젠 선배에게 어두운 감정을 품습니다.${
              maru.sex
            }의 옷깃을 잡아 땅에 눌러놓고 큰 소리로 따지고 싶어요.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `그때 격려해 주지 않았다면 여기까지 계속해서 상처투성이가 되는 일도 없었을지 모릅니다.`,
          );
          await era.printAndWait(
            `오랫동안 억눌렀던 울분을 완전히 쏟아내듯 ${maru.uma_sex_title}은(는) 비정상적으로 고양된 상태로 가슴속 고통을 토해냈다.`,
          );
          await era.printAndWait(
            `밤은 먹물처럼 어두워 ${maru.sex}의 표정은 거의 보이지 않는다. 하지만 하얀 달은 거울처럼 ${
              maru.sex
            }의 눈물을 옥쟁반에 떨어지는 진주처럼 뚝뚝 떨어뜨렸다.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `죄송합니다. 너무 흥분했어요. 들어주셔서 감사합니다. 그럼, 트레이너.`,
          );
          await era.printAndWait(
            `말을 마치자 더는 감정을 억누를 수 없는 ${maru.uma_sex_title}은(는) 빈 교실을 나갔다.`,
          );
          await you.say_and_wait(`너도 휘말린 거구나.`);
          await era.printAndWait(`${you.name}은(는) 오랫동안 깊이 생각했다.`);
      }
      await maru.used_to_say_and_wait(
        `${callname}, 고민이 있으면 ${maru.elder_sibling_sex_title}에게 확실히 말하는 거야?`,
      );
      await era.printAndWait(
        `멀리 어딘가에서 들려오는 듯하면서도 이 텅 빈 교실에 메아리치는 듯하다.`,
      );
      await era.printAndWait(`${you.name}은(는) 가슴속 불안을 떨쳐내지 못했다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] girls_blue_2
  girls_blue_2: (() => {
    const title = (maru) => `${maru.teen_sex_title}의 우울`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.uma_sex_title}은(는) 평범한 ${maru.uma_sex_title}로 은퇴했다.`,
      );
      await era.printAndWait(
        `마침내 말의 굴레에서 해방된 것인지, 여기까지 지지해 준 팬들에 대한 감사인지. ${maru.sex}은(는) G1 우승 때 위닝 라이브 중앙에 설 생각으로 직접 디자인했던 승부복으로 갈아입었다——`,
      );
      await era.printAndWait(
        `과거의 자존심 높던 ${maru.sex}은(는) G1 우승 때 자신이 디자인한 승부복으로 늠름하게 등장할 생각이었지만, `,
      );
      await era.printAndWait(
        `나중에는 G2 우승까지 타협했고, 그 뒤에는 눈물을 머금고 입상만 해도 좋다고 고쳐 생각했다. 그런 경험 때문인지 지금의 ${maru.sex}은(는) 혜성처럼 아름답다.`,
      );
      await era.printAndWait(
        `사정을 아는 한 사람으로서 이 이별의 무대에도 참가했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `모두, 고마워!`,
      );
      await era.printAndWait(
        `눈물을 머금은 ${maru.uma_sex_title}은(는) 미소 지으며 이 무대에 온 팬들을 바라보았다——`,
      );
      await era.printAndWait(
        `어째서인지 무언가를 몰래 보고 있는 듯하면서도 일부러 무시하는 듯하다.`,
      );
      await era.printAndWait(`그 불쾌한 위화감.`);
      await era.printAndWait(
        `${you.name}은(는) ${maru.uma_sex_title}이(가) 일부러 외면하는 방향을 거꾸로 바라보았다——`,
      );
      await era.printAndWait(
        `그곳에는 말없이 무대를 바라보는 ${maru.name}이(가) 있었다.`,
      );
      await era.printAndWait(`이럴 때 ${maru.sex}에게 말을 걸어야 할까?`);
      era.printButton(`아무리 그래도 분위기는 읽어야 한다.`, 1);
      era.printButton(`……아니야.`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`지금 말을 거는 건 너무 분위기를 못 읽는 짓이다.`);
        await era.printAndWait(`그렇게 조용히 그 자리를 떠났다.`);
      } else {
        await you.say_and_wait(`미안해, 지나갈게.`);
        await era.printAndWait(
          `주변 인파를 헤치고 ${you.name}은(는) ${maru.name} 가까이까지 갔다.`,
        );
        await you.say_and_wait(`……${maru.name}。`);
        await era.printAndWait(
          `처음부터 ${maru.sex}에게 물어볼 생각이었던 질문인데 막상 중요한 순간이 되자 무슨 말을 해야 할지 모르겠다.`,
        );
        await maru.say_and_wait(`응?`);
        await era.printAndWait(`${maru.name}은(는) 믿을 수 없다는 표정으로 이쪽을 바라보았다.`);
        await maru.say_and_wait(
          `${you.actual_name}이(가) 어째서…… 미안해. 지금은 머리가 조금 혼란스러워.`,
        );
        await era.printAndWait(
          `말투는 전보다 경쾌한데, 그 거슬리는 꾸밈이 ${you.name}을(를) 슬프게 했다.`,
        );
        era.printButton(`……${maru.name}。`, 1);
        era.printButton(`묻고 싶은 게 있어.`, 2);
        if ((await era.input()) === 1) {
          await maru.say_and_wait(`${callname}, 어깨 좀 빌려줄래?`);
          await era.printAndWait(
            `${you.name}은(는) 말없이 어깨를 내어주었다. ${maru.name}은(는) 팔을 꽉 끌어안았다.`,
          );
          await era.printAndWait(
            `환호와 웃음 뒤에는 마침내 풀린 족쇄와 그 뒤를 잇는 방황이 있다. 두 사람은 말없이 일어나는 모든 것을 지켜보았다.`,
          );
        } else {
          await you.say_and_wait(`기다려, ${maru.name}.`);
          await maru.say_and_wait(`미안해.、${callname}。`);
          await maru.say_and_wait(`여긴 소리가 너무 커서 질문이 안 들려.`);
          await maru.say_and_wait(`무슨 일이 있으면 돌아가서 이야기해도 될까?`);
          await era.printAndWait(
            `${maru.name}은(는) 폭풍 한가운데 있는 듯 질문에 귀를 기울이지 않는다.`,
          );
          await era.printAndWait(
            `문득 서둘러 떠나는 ${maru.name}과(와) 눈이 마주쳤다. 넋이 나간 듯한 눈을 보고 어떻게 해야 할지 몰라 그저 떠나는 모습을 지켜보았다.`,
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] girls_dream
  girls_dream: (() => {
    const title = 'NORMAL END · 꿈의 미래';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `3년 동안 ${you.name}과(와) ${maru.name}은(는) 같은 목표를 향해 달렸고, 이후 URA에서 우승했다.`,
      );
      await era.printAndWait(`그 뒤————`);
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }、 이번 GIII, ${you.name}이(가) 가르쳐준 방법으로 정말 이겼어요!`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}B`,
        `그런 해결법도 있나요? 역시 마루젠 ${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}C`,
        `마루젠 ${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }의 요령 덕분에 지금은 트레이너인 ${you.adult_sex_title}와도 잘 지내고 있어요.`,
      );
      await maru.say_and_wait(`후배들에게 도움이 될 수 있어서 다행이야!`);
      await era.printAndWait(
        `오늘의 ${maru.name}도 후배들에게 조언을 해주고 있다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }의 트레이너인 ${you.adult_sex_title}가 왔다!`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}들에게 둘러싸인 ${
          maru.name
        }이(가) ${you.name}의 존재를 알아차렸다.`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `${maru.name}은(는) 풍만한 가슴을 통째로 ${you.name}의 어깨에 기대었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}B`,
        `우와, 이건?`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}C`,
        `마루젠 ${maru.sex_code !== 1 ? '선배' : '선배'}와 ${
          maru.sex
        }의 트레이너, 오늘도 정말 사이 좋네요.`,
      );
      era.printButton(`「늦어서 미안해.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `응응, 벌써 두 시간이나 ${
          callname
        }을(를) 못 봤어. ${maru.elder_sibling_sex_title}, 정말 외로웠어~`,
      );
      await maru.say_and_wait(
        `보상으로 오늘 오후에는 같이 데이트하자♪`,
      );
      era.printButton(
        `「사실 나도 계~속 ${maru.name}을(를) 못 봐서 불안했어.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `${callname}은(는) 역시 계속 나를 생각하고 있구나. 그럼 늘 하던——`,
      );
      await era.printAndWait(`두 사람은 훈련장에서 서로 꽉 끌어안았다.`);
      await maru.say_and_wait(`역시 ${callname}이(가) 제일 좋아⭐`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] girls_dream_end
  async girls_dream_end(maru, callname) {
    await era.printAndWait(`힌트를 보시겠습니까?`);
    era.printButton(`예`, 1);
    era.printButton(`아니오`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END를 달성하려면 생애 레이스를 전부 이겨야 한다.`,
      );
      await era.printAndWait(`기념일 관련 선택지는 결말에 영향을 주지 않는다.`);
      await era.printAndWait(
        `스토리 관련은 2년 차 선택지에 주의. 세이브는 2년 차 1월 셋째 주부터 고려할 수 있다. 이벤트명: 봄과 겨울의 경계.`,
      );
      await era.printAndWait(
        `TE/GE 조건을 충족한 뒤 크리스마스 이벤트 후 팀 목록을 비우고 ${maru.name}을(를) 다시 선택하면 특수 대사가 나온다.`,
      );
      await era.printAndWait(
        `또 3년 차 첫째 주에는 먼저 새해 참배를 선택한 뒤 신사에 가면 종합 수익이 높다.`,
      );
      await era.printAndWait(`마지막으로, 빨리 GE를 달성하기를.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `직접 찾아보고 싶어? 공략의 신이 될 자질이 있네. ${callname}, 힘내!`,
      );
    }
  },

  // [번역 대상] memory
  memory: (() => {
    const title = '좋은 아침, 마루젠스키';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`직사광선이 얼굴에 닿아 마지못해 잠에서 깼다.`);
      maru.print(`어젯밤 너무 놀아서 뻗은 건가?`);
      await maru.say_and_wait(`으으——`);
      await era.printAndWait(`${maru.name}은(는) 침대에서 눈을 떴다.`);
      await maru.say_and_wait(`후아아——`);
      await maru.say_and_wait(
        `침대에서 일어나기 싫어 한 손을 뻗어 알람을 더듬어 찾는다.`,
      );
      maru.print(
        `의외로 평소 깜빡 늦잠을 자면 ${
          callname
        }에게 정면으로 노려보이는 듯 무서운 알람이 지금은 이사장이 학원에 심은 당근처럼 조용하다.`,
      );
      maru.print(`……아니야. 아무리 생각해도 이상하잖아?`);
      maru.print(`역시 어제 너무 세게 다뤄서 실수로 망가뜨린 건가?`);
      maru.print(`아니면——`);
      await maru.say_and_wait(`오늘은 휴일?`, true);
      maru.print(`그 희소식을 얻고 만족하며 다시 잠든다——아니야!`);
      maru.print(`알람이 고장 난 거라면? 오늘은 무슨 요일…… 몇 요일이었지?`);
      maru.print(`지각해서 ${callname}에게 들키면……`);
      await maru.say_and_wait(`프레셔!`, true);
      maru.print(`그렇게 일어나자 아직 잠기운이 가시지 않은 몸에 저림이 달린다.`);
      await maru.say_and_wait(`하——아.`);
      maru.print(`몸이 자동으로 반응했다.`);
      await era.printAndWait(
        `${maru.name}은(는) 헝클어진 머리를 한 채 어디로 사라졌는지 모를 슬리퍼를 더듬어 찾으며 흐릿한 시야로 침대에서 내려왔다.`,
      );
      era.drawLine();
      maru.print(
        `반쯤 잠든 자신은 차가운 물줄기에 세 여신의 에덴에서 산 채로 끌려나왔다.`,
      );
      maru.print(
        `드라이어로 간단히 머리를 말린 뒤 아직 물이 뚝뚝 떨어지는 머리를 수건으로 감싸고 세면실을 나왔다.`,
      );
      maru.print(`꿀꺽꿀꺽, 하아~`);
      maru.print(`커피우유 한 병을 단숨에 마시고 나니 기분도 들뜨기 시작했다♪`);
      await maru.say_and_wait(`이제 뭘 할까?`);
      maru.print(`오늘은 휴일이니 후배들도 쉬러 나갔을 것이다.`);
      maru.print(`휴일의 트레센은 조금 쓸쓸하네.`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`가슴 깊은 곳에서 한 가지 감각이 조용히 솟아났다.`);
      maru.print(`낯선 듯하면서도 묘하게 그리운 달콤한 감각이 가슴을 덮친다.`);
      maru.print(
        `${callname}이(가) 이 세상에서 사라져도 이 가슴의 움직임은 잊지 않겠지.`,
      );
      await maru.say_and_wait(`그럼 오늘은 훈련실로 가자.`);
      await era.printAndWait(`자기를 낮춰 말하면서도 누구보다 승부욕 강한 ${callname}이라면.`);
      await era.printAndWait(
        `지금 이 순간에도 훈련실에서 다음 레이스를 고민하며 진한 쓴 커피를 마시고 있을 것이다.`,
      );
      await maru.say_and_wait(
        `그렇다면 이런저런 고민에 빠진 ${maru.sex}을(를) 이 괴로운 고민에서 끌어내야겠네.`,
      );
      await era.printAndWait(`${maru.name}은(는) 훈련실 문 앞에 왔다.`);
      await era.printAndWait(
        `최근 알게 된 「갑자기 문을 열어 놀래키기」 유행을 따라 문을 밀어 열고 큰 소리로 등장을 알렸다.`,
      );
      await era.printAndWait(
        `${
          callname
        }이(가) 당황한 얼굴로 방금 놀라 소파 아래로 날아간 리모컨을 더듬어 찾고 있다.`,
      );
      await era.printAndWait(
        `${maru.name}은(는) 작은 주머니 안의, ${
          callname
        }와(과) 노래방에서 찍은 사진을 떠올렸다. 너무 많이 마신 ${
          callname
        }의 귀여운 보조개를 침대 위에서 몇 번이나 뒤집어가며 봤는지 모른다.`,
      );
      await era.printAndWait(`맑은 날씨 때문일지도 모른다.`);
      await era.printAndWait(
        `${maru.name}은(는) 물을 듬뿍 머금어 반짝이는 당근 같다.`,
      );
      await era.printAndWait(
        `내일의 ${maru.sex}도 평소처럼 이 독특한 감각으로 모두를 격려하겠지.`,
      );
      await era.printAndWait(
        `그 미래에 대한 동경을 품고 ${maru.name}은(는) 새로운 하루를 맞았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ne_happiness_day
  ne_happiness_day: (() => {
    const title = 'NORMAL END · 잔잔한 나날';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `이후 무슨 일이 있었는지는 알 수 없다. 하지만 ${maru.name}은(는) 특별히 변하지 않았다.`,
      );
      await era.printAndWait(
        `그 뒤 정해둔 계획대로 한 걸음씩 착실하게 마무리했다.`,
      );
      await era.printAndWait(`얼마 지나지 않아——`);
      await era.printAndWait(`空港`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}、여기까지면 돼.`);
      await you.say_and_wait(`파리에 도착하면 메시지 줘, 알겠지?`);
      await maru.say_and_wait(
        `후후~ 물론이지. 두 달짜리 여행이지만 드디어 에펠탑을 보러 갈 수 있네.`,
      );
      await maru.say_and_wait(
        `${you.actual_name}도 내가 없는 동안 다른 우마무스메에게 손대면 안 돼?`,
      );
      await you.say_and_wait(`아하하하.`);
      await maru.say_and_wait(`정말 이 사람은.`);
      await era.printAndWait(`검지로 세게 한 번 얻어맞았다.`);
      await you.say_and_wait(`아파!`);
      await maru.say_and_wait(`자업자득——정말 걱정할 필요가 없는 사람이네.`);
      await maru.say_and_wait(`그럼 출발할게.`);
      await you.say_and_wait(`잘 다녀와!`);
      await maru.say_and_wait(
        `${you.actual_name}도 돌아갈 때 길 조심해!`,
      );
      await era.printAndWait(`어째서인지 ${maru.name}은(는) 쓸쓸한 표정을 보였다.`);
      await maru.say_and_wait(`${you.actual_name}…… 아니, 아무것도 아니야.`);
      await maru.say_and_wait(`슬슬 출발할 시간이네.`);
      await era.printAndWait(`${maru.name}의 모습이 인파 속으로 사라지는 것을 보았다.`);
      era.drawLine();
      await era.printAndWait(
        `3년 동안 서로 의지한 담당과 트레이너로서 서로 호감은 있다. 하지만 한 걸음 더 가까워지지는 못했다.`,
      );
      await era.printAndWait(`무엇이 부족했던 걸까?`);
      await era.printAndWait(
        `하지만 이렇게 평온하게 끝나는 것도 하나의 행복일 것이다.`,
      );
      await you.say_and_wait(`오늘 좋은 날씨네.`, true);
      await era.printAndWait(
        `${you.name}은(는) 눈을 가늘게 뜨고 비행기가 하늘의 옅은 구름을 가르며 가느다란 흰 선을 남기는 것을 보았다.`,
      );
      await era.printAndWait(
        `언젠가 ${you.name}도 이런 날씨 아래서 ${maru.name}이(가) 옥상 난간에 기대 눈을 가늘게 뜨고 조용히 노래를 흥얼거리는 모습을 보았다. 그 노랫소리가 흘러가는 곳으로.`,
      );
      await era.printAndWait(`저게 비행운이겠지, 하고 마음속으로 생각했다.`);
      await era.printAndWait(`오늘도 이렇게 무사히 지나갔다.`);
      await era.printAndWait(
        `${maru.name}도 매일 이렇게 무병무탈하게 지낼 수 있기를.`,
      );
      await era.printAndWait(
        `그러고 보니 새로운 우마무스메들의 입학도 가깝다. 빨리 새로운 원석을 발굴해야 한다.`,
      );
      await era.printAndWait(
        `——그 우울했던 나날에도 ${maru.name}이(가) 한 번도 포기하지 않았던 것처럼.`,
      );
      await era.printAndWait(
        `이제 두 번 다시 돌아오지 않는다. 마지막으로 그녀가 향한 방향을 한 번 바라본 뒤 뒤돌아보지 않고 떠났다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oc_95_1
  oc_95_1: (() => {
    const title = '新年参拝';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `새해를 맞아 ${you.name}과(와) ${maru.name}은(는) 함께 새해 참배를 하러 갔다.`,
      );
      await era.printAndWait(
        `사실 전통을 따르기 위해서가 아니다. 그저 운을 빌고 싶을 뿐이다.`,
      );
      await maru.say_and_wait(
        `역시 새해에는 신사에서 소원을 빌어야지? 그래야 새해답잖아~!`,
      );
      await maru.say_and_wait(
        `한 해의 계획은 봄에 달렸어. 세 여신님께 1년치 땀과 노력을 바치자!`,
      );
      era.printButton(`「앞으로의 목표는?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `후후~ 내 목표는——올해도 재미있는 레이스에 잔뜩 출전하는 것!`,
      );
      await maru.say_and_wait(
        `그리고 모두가 내 등을 좇게 하려면 전보다 훨~씬 더 눈에 띄어야지!`,
      );
      era.printButton(`「${you.name}을(를) 제대로 돕는다!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}, 든든하네~. ${maru.elder_sibling_sex_title}, 이런 느낌 좋아해.`,
      );
      await era.printAndWait(`그런데 앞으로 노력할 방향은?`);
      era.println();
      era.printButton(`「기본적인 건강 관리!」 (체력+600)`, 1);
      era.printButton(
        `「각 방면을 균형 있게 훈련해야지!」 (전 능력+10)`,
        2,
      );
      era.printButton(`「자기 장점을 갈고닦아야 해!」 (스킬 Pt+100)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            '속담에도 『사는 곳은 기질을 바꾸고, 기르는 것은 몸을 바꾼다』고 하잖아. 몸의 건강에 신경 쓰는 건 중요하지.',
          );
          await maru.say_and_wait('정했어! 앞으로의 목표는 건강 관리!');
          await maru.say_and_wait('자, 빨리 들어가자!');
          break;
        case 2:
          await maru.say_and_wait(
            '그렇구나! 각 방면을 고르게 단련하면 전보다 한 단계 올라갈 수 있겠네!',
          );
          await maru.say_and_wait(
            '응, 맡겨줘! 훈련할 때도 그 점을 의식할게!',
          );
          await maru.say_and_wait('그럼 정했으면 빨리 들어가자!');
          break;
        case 3:
          await maru.say_and_wait('내 장점이라면 역시 운전 기술일까?');
          await maru.say_and_wait(
            '그럴 리가~ 농담이야! 달리기 스킬을 갈고닦는 거지?',
          );
          await maru.say_and_wait(
            'OK! 훈련할 때도 그 점을 의식할게.',
          );
          await maru.say_and_wait(
            '응, 조금 지체됐네. 빨리 들어가자!',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_10
  race_end_10: (() => {
    const title = '레이스 패배';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait('슬프네……');
      await maru.say_and_wait(
        `미안해…… 트레이너. 쿨한 모습을 보여주지 못했네……`,
      );
      era.printButton(`「다음 달리기를 기대하고 있어!」`, 1);
      era.printButton(`「고개 숙이고 있어도 소용없어!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`……다정하네, 트레이너.`);
        await maru.say_and_wait(
          `……좋아, 빨리 훈련으로 돌아가야지! 다음에는 반드시 쿨한 모습을 보여줄게!`,
        );
      } else {
        await maru.say_and_wait('……그러네. 고개 숙이고 있어도 빨라지진 않아.');
        await maru.say_and_wait(
          '그러니까 더는 침울해할 수 없어. 찌그러져도 금방 고칠 수 있는 애차처럼!',
        );
        await maru.say_and_wait(
          '좋아! 수리는 여기까지. 얼른 가득 채우고 달려나가자!',
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_5
  race_end_5: (() => {
    const title = '레이스 입상';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `보러 와준 후배들을 위해 1착을 하고 싶었는데 아직 실력이 부족하네……`,
      );
      era.printButton(`「달리기는 나쁘지 않았어!」`, 1);
      era.printButton(`「다음은 1착이다!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `후후, 트레이너가 위로해 주는 거구나. 고마워.`,
        );
        await maru.say_and_wait(
          `하지만…… 어머, 트레이너에게 걱정까지 끼치다니 ${maru.elder_sibling_sex_title}인 내가 이래선 안 되겠네.`,
        );
        await maru.say_and_wait(
          '좋아, 다음엔 모두에게 슈퍼카의 달리기를 보여주고 확실하게 1착을 따낼게!',
        );
      } else {
        await maru.say_and_wait('그래, 언제까지나 한숨만 쉬는 건 나답지 않아.');
        await maru.say_and_wait(
          `다음엔 후배들에게 ${maru.elder_sibling_sex_title}이(가) 진심을 낸 모습을 보여줘야지!`,
        );
        await maru.say_and_wait('애차와 함께 바다로 드라이브 가자♪');
        await era.printAndWait(
          `그 뒤 ${maru.name}과(와) 바다로 드라이브를 가서 ${maru.sex}이(가) 만족할 때까지 돌아오지 않았다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = '레이스 승리';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `victory! victory! 이겼어, 트레이너♪ 역시 1착은 다르네, 가슴의 흥분이 전혀 가라앉지 않아.`,
      );
      await maru.say_and_wait(`트레이너, 내가 달리는 모습 봤어?`);
      era.printButton(`「네가 제일 대단해!」`, 1);
      era.printButton(`「아직 더 위를 노릴 수 있어!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `그렇지 그렇지♪ 오늘은 찻집에서 레몬티와 티라미수로 하자.`,
        );
        await maru.say_and_wait(`트레이너도 같이 갈 거지? 후후♪`);
      } else {
        await maru.say_and_wait(`어머, 트레이너는 솔직하네!`);
        await maru.say_and_wait(`하지만 이걸로 만족하면 안 돼!`);
        await era.printAndWait(
          ` ${maru.name}은(는) ${maru.sex}이(가) 정말 좋아하는 나타데코코 음료를 단숨에 마셨다!`,
        );
        await maru.say_and_wait(
          `——푸하! 시원해! 좋아, 앞으로도 의욕 넘치게 힘낼게!`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_start
  race_start: (() => {
    const title = '레이스 시작';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`地下通路`);
      await maru.say_and_wait(
        `오늘 레이스에서도 후배들에게 내 쿨한 뒷모습을 보여줘야지.`,
      );
      era.printButton(`「${maru.name}, 힘내.」`, 1);
      await era.input();
      await maru.say_and_wait(`후후, 고마워 ${callname}.`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}의 뒷모습에 반하면 안 돼~`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}이(가) 코스로 향하는 것을 배웅했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] radi_shi_win
  radi_shi_win: (() => {
    const title = '라디오 NIKKEI상 후・방황의 길';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('대기실');
      era.println();
      await you.say_and_wait(`수고했어, ${maru.name}.`);
      await era.printAndWait(
        `중반에는 마군에게 따라잡힐 뻔했지만 ${maru.name}은(는) 간신히 레이스를 제패했다.`,
      );
      await you.say_and_wait(
        `평소 ${maru.elder_sibling_sex_title}다운 ${maru.sex}과(와)는 다르다.`,
        true,
      );
      await you.say_and_wait(`아직 의심의 그림자에 사로잡혀 있는 거겠지.`, true);
      await maru.say_and_wait(` ${callname} ！`);
      await era.printAndWait(
        `이쪽을 알아차린 순간 ${maru.name}은(는) 밝은 미소를 보였다.`,
      );
      await era.printAndWait(`하지만 그 어두운 표정은 깊이 뇌리에 새겨졌다.`);
      await maru.say_and_wait(`좀 더 칭찬해 줄래?`);
      era.printButton(
        `수고했어. 아름답고 강한 ${maru.elder_sibling_sex_title} 님, 이번에는 정말 훌륭했어!`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `흥흥~ 당연하지. 지는 쪽이 이상한 거잖아?`,
      );
      era.printButton(`「허벅지는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`생각보다 훨씬 좋아.`);
      era.printButton(`「허벅지는 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `네 트레이너로서 사랑하는 우마가 압박이 쌓여 무너져 퇴장하는 모습을 말없이 지켜볼 수는 없어.`,
        1,
      );
      await era.input();
      await you.say_and_wait(`앞의 ${maru.uma_sex_title}처럼.`);
      await you.say_and_wait(`용서해 줘. 미안해.`);
      await era.printAndWait(
        `위닝 라이브 후 ${you.name}은(는) 가을 국화상을 포기하고 아리마 기념 준비로 전환하기로 했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sank_hai_lose
  sank_hai_lose: (() => {
    const title = '大阪杯後・鬱蒼';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait(`설마 꼬마 루돌프에게 지다니 으으——`);
      await era.printAndWait(
        `하지만 ${maru.name}은(는) 생각했던 만큼 침울해하지 않는다.`,
      );
      era.printButton(`돌아가서 반성회에서 리벤지전을 상의하자.`, 1);
      await era.input();
      await era.printAndWait(`황제와의 대결은 일단 한 고비를 넘겼다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sank_hai_win
  sank_hai_win: (() => {
    const title = '오사카배 후・바람이 남은 구름을 걷어내다';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await maru.say_and_wait(`하아, 하아, 하아.`);
      await maru.say_and_wait(`이겼어?`, true);
      await era.printAndWait(
        `황제와의 대결은 최종적으로 ${maru.name}의 승리로 일단락됐다.`,
      );
      await you.say_and_wait(
        `훌륭한 레이스였다. 자신도 모르게 식은땀이 흘렀다.`,
      );
      await era.printAndWait(
        `질주하는 마군 속에서 가장 알맞은 위치를 찾아내고, 스퍼트할 때는 당연히 선두에 있어야 한다——.`,
      );
      await era.printAndWait(`하지만 조금만 더했으면 ${maru.name}을(를) 넘어섰을 것이다.`);
      await era.printAndWait(`……그래도,`);
      await maru.say_and_wait(
        `흥분이라고 해야 할까, 두려움이라고 해야 할까? 괴물의 그림자를 밟아본 ${maru.uma_sex_title}은(는) 네가 처음이야, 꼬마 루돌프♪`,
      );
      await era.printAndWait(
        `드디어 ${maru.sex}의 걸음을 따라잡을 상대를 만나 만족한 것인지 ${maru.name}은(는) 미소를 보였다.`,
      );
      era.drawLine();
      await emperor.say_and_wait(`……다행이군.`);
      await era.printAndWait(
        `황제는 곧게 멀어지는 등을 바라본다. ${maru.sex}은(는) 이를 핥으며 일종의 광희가 자연스럽게 솟는다.`,
      );
      await era.printAndWait(
        `황제에게는 아직 이루지 못한 일이 많다. 그렇기에 더욱 자신을 증명할 필요가 있다——${maru.sex}이(가) 유일무이하다는 것을. 동세대에서 무적일 뿐 아니라 지나간 영광을 깨뜨리고 미래의 영광까지 제압할 수 있다는 것을.`,
      );
      era.println();
      await emperor.say_and_wait(
        `마루젠, 네가 정말 그 이념을 끝까지 관철할 수 있기를 바란다.`,
      );
      await emperor.say_and_wait(
        `그리고——왕도를 자처하지 마라. 개척자는 고난을 받아야 한다. 네가 위대하다면 쓰러져 후진이 오르는 계단이 되어라.`,
      );
      await emperor.say_and_wait(
        `일본 ${maru.uma_sex_title}의 미래를 위해——더 강한 황제를 위해.`,
      );
      await era.printAndWait(
        `그 때문에…… 황제는 고개를 들고 내려다보듯 ${maru.name}을(를) 바라보았다.`,
      );
      era.println();
      await emperor.say_and_wait(
        `교양을 벗어던지고 문명의 포장을 찢어라! 모든 수단을 써라. 비천해도 거칠어도 좋다. 가능하면 수단을 가리지 마라!!!`,
      );
      await emperor.say_and_wait(
        `아무리 볼썽사나워도 용납된다. 모든 준비를 하고…… 천황상(가을)에서 짐(황제)의 복수를 맞이하라.\n`,
      );
      await era.printAndWait(
        `말을 마치자 온화한 얼굴의 황제는 가벼운 걸음으로 레이스장을 나갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_5
  sats_sho_5: (() => {
    const title = '사츠키상 후・기어 체인지';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(`네! ${callname} ！`);
      await era.printAndWait(
        `위닝 라이브에서 내려온 ${maru.name}이(가) 대기실로 돌아왔다.`,
      );
      await you.say_and_wait(`어땠어?`);
      await era.printAndWait(
        `${maru.name}의 부츠를 살며시 벗기고 발목부터 허벅지까지 마사지 힘을 조심스럽게 조절한다.`,
      );
      await maru.say_and_wait(
        `이 느낌 정말 좋아! 역시 클래식 삼관의 사츠키상. 삼관을 다투려고 모인 ${maru.uma_sex_title}들은 강자들뿐이네.`,
      );
      await maru.say_and_wait(
        `이 뒤 더비에서 더 큰 레이스를 경험할 수 있다니 ${maru.elder_sibling_sex_title}, 조금 삶의 의욕이 사라질 것 같아.`,
      );
      await era.printAndWait(
        `약 5분간 마사지하며 열 손가락으로 허벅지 안쪽을 가볍게 누르고 ${maru.name}의 반응을 보면서 이야기를 이어갔다.`,
      );
      await you.say_and_wait(`그 기세로 더비에 도전하자!`);
      await maru.say_and_wait(`그래! 이 느낌!`);
      await era.printAndWait(
        `마사지 후 ${you.name}은(는) 살며시 ${maru.name}에게 부츠를 신겨주었다. 일어선 ${maru.name}은(는) 기세등등하게 다음 목표를 정했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_win
  sats_sho_win: (() => {
    const title = '사츠키상 후・불꽃처럼 아름다운 달리기';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`위닝 라이브\n`);
      await era.printAndWait(
        `스태프가 위닝 라이브 장비를 확인하느라 바빠 보인다.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프A`,
        `위닝 라이브가 곧 시작됩니다. 마지막 조정!`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `분사 장치 위치 다시 한번! 역시 ${maru.name}이(가) 이길 줄 알았어.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `메이크 데뷔 때부터 ${maru.sex}을(를) 봐왔어.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프C`,
        `조명을 조금 더 왼쪽으로! 아, 나는 호프풀 S부터 봤어.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프C`,
        `엄청 빠른 ${maru.uma_sex_title}이(가) 있다고 듣기는 했지만 현장에서 봐야 알겠네.`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `준비 완료! 다음 도쿄 우준의 승리도 반드시 ${maru.sex}일 거야!`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프A`,
        `전원! 위치로! 준비!`,
      );
      await era.printAndWait(`예상대로 ${maru.name}은(는) 이겼다.`);
      await era.printAndWait(
        `마지막 골인 순간도, 위닝 라이브 중앙 무대도 많은 팬을 사로잡은 ${maru.name}.`,
      );
      await era.printAndWait(`만족스러운 미소로 대기실로 돌아왔다.`);
      era.printButton(`「수고했어. 무대, 훌륭했어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}의 롱부츠를 살며시 벗기고 발목부터 허벅지까지 마사지 힘을 조심스럽게 조절한다.`,
      );
      await you.say_and_wait(
        `왕도 노선의 첫 경기는 역시 다르다. 기자회견도 그 뒤의 레이스도 위닝 라이브도 같은 G1인 아사히배와는 비교가 되지 않는다.`,
      );
      await you.say_and_wait(
        `앞으로 더 성대한 레이스도 있어. ${maru.name}——`,
      );
      await era.printAndWait(
        `약 5분간 마사지하며 열 손가락으로 허벅지 안쪽을 가볍게 누르고 ${maru.name}의 반응을 보면서 이야기를 이어갔다.`,
      );
      await maru.say_and_wait(
        `응~ ${callname}이(가) 이렇게 신경 써줘서 고마워. 움직일 수 없을 만큼 지쳤다기보다는 ${maru.elder_sibling_sex_title}은(는) 몸도 마음도 충만해.`,
      );
      await era.printAndWait(
        `웃고 있는 ${maru.name}에게서 때때로 작은 숨소리가 새어나온다.`,
      );
      await maru.say_and_wait(
        `이렇게 더 많은 ${maru.uma_sex_title}에게 내 뒷모습을 보여주면 ${maru.couple_title}도 레이스장에서 달리는 모습에 동경을 품겠지.`,
      );
      await maru.say_and_wait(
        `그리고 열심히 훈련하면서 달리는 즐거움을 천천히 찾아가는 거야.`,
      );
      await maru.say_and_wait(
        `그러면 후배들이 내 등을 쫓아 노력하는 걸 보며 기뻐할 수 있어.`,
      );
      await era.printAndWait(
        `약한 통증과 조금의 저림 속에서도 평소보다 밝은 ${maru.name}의 눈이 곧장 이쪽을 보고 있다.`,
      );
      await you.say_and_wait(
        `응. 한 달 뒤 도쿄 우준을 위해 앞으로는 스태미나를 올려야 해.`,
      );
      await maru.say_and_wait(`응——이따 어디에서 축하할까?`);
      await era.printAndWait(
        `마사지가 끝나자 아쉬워 보이는 ${maru.name}이(가) 자리에서 만족스러운 소리를 냈다.`,
      );
      await maru.say_and_wait(
        `고급 레스토랑? 친근한 사이제리야? 아니면 `,
      );
      era.printButton(`「아예 훈련실에서 축하하자!」`, 1);
      await era.input();
      await you.say_and_wait(`피자와 음료를 더하고 후배들도 불러서 축하하자.`);
      await maru.say_and_wait(
        `${callname} 말대로 하자. 밤 파티, 기대되네♪`,
      );
      await era.printAndWait(
        `부츠를 신고 다시 걷는 감각에 익숙해지는 ${maru.teen_sex_title}이(가) 이따 있을 축하를 기대하고 있다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sister_annoyance
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}의 고민`;
    /**
     * トレーナーが마루젠 スキーを励まし、信じられたとき立て直す
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`屋上`);
      era.println();
      await era.printAndWait(`오늘 처리할 자료를 정리한 뒤 옥상으로 왔다.`);
      await era.printAndWait(
        `레이스 후의 ${maru.name}은(는) 조금 이상했고, 이야기할 때도 정신이 딴 데 가 있었다.`,
      );
      await era.printAndWait(
        `착각일지도 모른다. 하지만 친구로서 ${maru.sex}의 문제를 좀 더 깊이 알고 싶다.`,
      );
      await you.say_and_wait(
        `한꺼번에 전부 해결할 수 있다면 그보다 좋은 일은 없다.`,
      );
      await era.printAndWait(
        `${maru.name}의 힘이라면 어떤 좌절도 가볍게 넘어설 수 있을 것이다.\n`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}의 경골에 손상이 있습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `계속하면 보행과 주행 능력이 제한될 가능성이 있습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `훈련은 중단하고 한동안 충분히 쉬는 편이 좋습니다.`,
      );
      await you.say_and_wait(`알겠습니다.`);
      await era.printAndWait(
        `진단서를 가방에 넣고 나가려던 순간 불려 멈췄다.`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `당신이 ${maru.name}의 트레이너죠.`,
      );
      await you.say_and_wait(`그렇습니다.`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}의 다리는 생각보다 약합니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `그 때문인지 당신도 오랫동안 제대로 자지 못한 것 같군요.`,
      );
      await you.say_and_wait(`그렇습니다.`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `주목받는 ${maru.uma_sex_title}을(를) 지도하는 트레이너의 압박은 상상 이상입니다.`,
      );
      await you.say_as_passer_by_and_wait(`医師`, '몸도 잘 돌보세요.');
      await you.say_and_wait(`……감사합니다.`);
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `생각은 ${maru.name}의 목소리에 끊겼다. 약속 시간까지는 아직 10분 정도 여유가 있다.`,
      );
      await you.say_and_wait(`응? 아, 방금 도착했어.`);
      await era.printAndWait(
        `하얀 원피스를 입은 ${maru.uma_sex_title}이(가) 옥상에 나타났다.`,
      );
      await maru.say_and_wait(` ${callname}, 생각보다 초조해 보이네.`);
      await you.say_and_wait(
        `응, 오늘 날씨가 좋을 줄 알아서 ${maru.name}과(와) 함께 보내고 싶었어.`,
      );
      await you.say_and_wait(
        `자세히 보니 ${maru.name}은(는) 평소보다 더 아름답네. 게다가 재스민 향도 나.`,
      );
      await maru.say_and_wait(
        `${callname}이(가) 드물게 먼저 불러줬잖아. 제대로 꾸미지 않고는 나올 수 없지.`,
      );
      await you.say_and_wait(`그렇게 말하니 내가 실례했네.`);
      await era.printAndWait(
        `어디서부터 말을 꺼내야 할지 몰라 침묵했다. 결국 ${maru.name} 쪽에서 먼저 화제를 꺼냈다.`,
      );
      await maru.say_and_wait(
        ` ${callname}이(가) 평소 열심히 하는 모습, ${maru.sex_code !== 1 ? '아가씨' : '멋진 남자'}인 나는 정말 감동하고 있어.`,
      );
      await maru.say_and_wait(
        `어떻게 해야 ${callname}을(를) 쉬게 할지 계속 고민했는데 ${callname} 쪽에서 이런 부탁을 할 줄이야.`,
      );
      await maru.say_and_wait(
        `사실 말이야, 계속 긴장하고 있을 필요 없어. 좀 더 ${maru.elder_sibling_sex_title}에게 기대.`,
      );
      await era.printAndWait(`${maru.name}에게 격려받자 긴장도 천천히 풀렸다.`);
      await you.say_and_wait(
        `알겠어. 앞으로도 ${maru.name} ${maru.elder_sibling_sex_title}, 잘 부탁해.`,
      );
      await you.say_and_wait(`그럼 본론이야.`);
      await era.printAndWait(
        `너무 긴장해 새하얘졌던 머릿속도 천천히 정리됐다.`,
      );
      await you.say_and_wait(`너에 대해 좀 더 알려줬으면 해.`);
      await maru.say_and_wait(
        `나, ${callname}과(와) 늘 같이 있잖아. 새삼 뭘?`,
      );
      await you.say_and_wait(`아니, 그런 뜻이 아니야.`);
      await era.printAndWait(
        `단호하게 고개를 저으며 ${maru.sex}의 눈을 정면으로 바라봤다.`,
      );
      await you.say_and_wait(
        `남의 사생활을 캐묻는 건 좋지 않다는 걸 알아.`,
      );
      await you.say_and_wait(
        `하지만 훈련실에서 쉬고 있을 때 문득 본 ${maru.name}의 침울한 얼굴.`,
      );
      await you.say_and_wait(
        `괴로웠어. 무거운 돌이 가슴에 올라앉은 것 같았고, 그때 깨달았어. 사실 아직 ${maru.name}에 대해 많이 모르고 있다는 걸.`,
      );
      await you.say_and_wait(`그러니까 이건 부탁이 아니야. 선언이야.`);
      era.printButton(`「${maru.name}에 대해 더 알고 싶어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}의 눈이 크게 뜨이고 빠르게 몇 번 깜빡인 뒤, 피하려던 시선을 곧 되돌렸다.`,
      );
      await maru.say_and_wait(`같은 태도로 답해야겠네.`);
      await maru.say_and_wait(` ${callname}은(는) 뭘 알고 싶은데?`);
      await you.say_and_wait(
        `알고 싶은 건 ${maru.name}이(가) 최근 왜 이렇게 침울한지야.`,
      );
      await you.say_and_wait(
        `즐거움을 느끼지 못하게 된 거야? 아니면 달리는 ${maru.uma_sex_title}들의 자포자기한 마음을 느꼈기 때문이야?`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}은(는) 망설이고 있다. ${maru.sex}은(는) 진짜 마음을 말해야 할지 고민하고 있다.`,
      );
      await maru.say_and_wait(`……미안해.。`);
      await era.printAndWait(`${maru.name}의 목소리는 가라앉아 있다.`);
      era.printButton(`「아니, 오히려 내가.」`, 1);
      await era.input();
      await you.say_and_wait(`사과해야 할 건 나야. 너무 서둘렀어.`);
      await you.say_and_wait(`계속 기다릴게. 네가 먼저 이야기해 주는 날이 올 때까지.`);
      await you.say_and_wait(
        `그러니 고개 들어. 너는 내가 본 ${maru.uma_sex_title} 중 가장 아름다워.`,
      );
      await maru.say_and_wait(`땡큐, ${callname}.`);
      await era.printAndWait(`${maru.name}은(는) 평소 모습으로 돌아왔다.`);
      await maru.say_and_wait(`역시 의지할 수 있는 어른이네.`);
      await maru.say_and_wait(
        `지금 느낌은 계속 돌봐주던 ${you.sex_code !== 1 ? '여동생' : '남동생'}이(가) 갑자기 자기를 돌봐주겠다고 나선 것 같아.`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}로서는 기분이 복잡하네——`,
      );
      await era.printAndWait(
        `${maru.name}은(는) 함께 자란 ${you.sex_code !== 1 ? '여동생' : '남동생'}을(를) 보는 듯한 자애로운 눈빛을 했다.`,
      );
      await maru.say_and_wait(`그럼 약속이야——`);
      await maru.say_and_wait(
        `무슨 일이 있어도 ${maru.elder_sibling_sex_title}에게 상담하는 거야?`,
      );
      era.printButton(`「무슨 일이 있어도 ${maru.name}에게 제대로 이야기한다.」`, 1);
      await era.input();
      await you.say_and_wait(
        `의지할 수 있는 ${maru.elder_sibling_sex_title}이라면 어떤 문제든 가볍게 해결하겠지.`,
      );
      await maru.say_and_wait(`그럼 그렇게 정하자.`);
      await you.say_and_wait(`나도 마찬가지야.`);
      await maru.say_and_wait(
        `그러고 보니 오늘 날씨 좋네. 애차로 드라이브하자——`,
      );
      await you.say_and_wait(`좋지.`);
      await you.say_and_wait(`뭔가 잊은 거 없어?`, true);
      await era.printAndWait(
        `웃으며 이야기를 나누면서 애차로 향했다. 그 뒤 비명이 트레센에 울려 퍼졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sprg_sta_win
  sprg_sta_win: (() => {
    const title = '스프링 S 후・방황의 시작';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `어떤 이변도 없이 이 레이스는 ${maru.name}의 압도적인 승리였다.`,
      );
      await era.printAndWait(
        `동세대의 ${maru.uma_sex_title}들이 잇따라 회피했기 때문이다.`,
      );
      await era.printAndWait(
        `상대 ${maru.uma_sex_title}들 가운데 가장 강한 한 명조차 이름 없는 G3 하나를 이긴 정도였다.`,
      );
      await era.printAndWait(`이 승리에서 정말 즐거움을 느낄 수 있었을까?`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        ` ${maru.name}! ${maru.name} 골인!`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `대차! ${maru.name}의 압도적인 승리!`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`이 승리에서 정말 즐거움을 느낄 수 있었을까?`);
      await you.say_and_wait(`${maru.name}？`);
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `${maru.name}！ ${maru.name}！`,
      );
      await you.say_as_passer_by_and_wait(
        `팬 B`,
        `역시 ${maru.name}이(가) 이길 줄 알았어!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `역시 슈퍼카라고 불리는 ${maru.uma_sex_title}! 내 안목은 틀리지 않았어!`,
      );
      maru.print(`조금 피곤하네.`);
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `이대로 압도적인 실력으로 약한 녀석들을 전부 없애버려!`,
      );
      maru.print(`대기실에서 승부복을 갈아입고 있을 때도.`);
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `어차피 못 이기는데 그렇게까지 힘을 쏟을 필요가 있어?`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `${maru.uma_sex_title}이(가) 달리기를 아이돌화하는 전통 같은 건 방송인에게 도태되는 게 당연해.`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `차라리 흐름을 타고 방송인으로 전향해서 은퇴하면 되잖아.`,
      );
      maru.print(
        `무대 뒤 수군거리는 ${maru.uma_sex_title}들 곁을 지나갔다.`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `${maru.uma_sex_title}이라는 일은 결국 재능 있는 자들의 사냥터야.`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `우리 같은 평범한 애들에게 레이스는 몇 번이고 들러리가 되는 우스갯소리일 뿐이야. 역겨워.`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `그러니까 말이야, 잔디 위에서 즐거움을 느끼는 사람을 전혀 이해할 수 없어.`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `하아, 그때의 나는 ${maru.uma_sex_title}을(를) 동경했다니 지금 생각하면 부끄러워.`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}？`);
      await era.printAndWait(` ${maru.name}은(는) 절대적인 여유로 연승을 거뒀다.`);
      await era.printAndWait(
        `사츠키상의 전초전에 불과하지만 앞으로의 사츠키상도 문제없을 것이다.`,
      );
      await era.printAndWait(`그렇게 생각하며 문을 밀었다.`);
      await maru.say_and_wait(`아, ${callname}, 맞이하러 와줬어?`);
      await era.printAndWait(
        ` ${maru.name}은(는) 겉보기에는 평소와 거의 다르지 않다.`,
      );
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title}의 달리기, 어땠어?`,
      );
      era.printButton(`「……그럴지도.」`, 1); //be1
      era.printButton(`「……${maru.name}。」`, 2);
      era.print(
        '【경고. 신중하게 선택할 것. 그렇지 않으면 모든 것을 되돌릴 수 없게 된다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`뭐야?`);
        era.printButton(`아, 미안. 방금 멍하니 있었어.`, 1);
        await era.input();
        await you.say_and_wait(
          `역시 ${maru.elder_sibling_sex_title}, 정말 좋았어!`,
        );
        await maru.say_and_wait(`응응, 나도 그렇게 생각해.`);
        await maru.say_and_wait(`응——이따 어디서 먹을까?`);
        await maru.say_and_wait(`${callname}, 추천하는 데 있어?`);
        await you.say_and_wait(`사이제리야에 가자. 거기 맛있어.`);
        await maru.say_and_wait(`응! 그럼 같이 가보자.`);
      } else {
        await maru.say_and_wait(`어머, ${callname}, 왜 그래?`);
        await you.say_and_wait(`내일 밤 시간 돼?`);
        await you.say_and_wait(`하고 싶은 이야기가 있어. 옥상에서.`);
        await maru.say_and_wait(`여기서는 말할 수 없는 일이야?`);
        await you.say_and_wait(`미안해, 한 번만 나한테 맡겨줘. 부탁이야.`);
        await maru.say_and_wait(`응? ${callname}？`);
        await you.say_and_wait(`부탁이야.`);
        await era.printAndWait(`${you.name}은(는) 깊이 고개를 숙였다.`);
        await maru.say_and_wait(`그렇게까지 하다니……`, true);
        await maru.say_and_wait(` ${callname}이(가) 그렇게까지 말한다면.`);
        await maru.say_and_wait(`알겠어.`);
        await era.printAndWait(` ${maru.name}은(는) 조금 근심 어린 얼굴로 당신을 바라보았다.`);
        await you.say_and_wait(`그럼 내일 밤 9시, 학원 옥상에서.`);
        await era.printAndWait(
          `등은 이미 땀에 젖어 있었다. 최악의 상황을 각오했지만 ${maru.name}의 동의를 얻자 ${you.name}은(는) 길게 숨을 내쉬었다.`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}이(가) ${callname}에게 상처 줄 일을 했어?`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] teacher_sister
  teacher_sister: (() => {
    const title = '가르쳐 주세요, 마루젠스키 선생님!';
    /**
     * トレーナーが学びたいものに興味が湧かず、마루젠 スキーが指導する
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`어느 휴일 아침.`);
      await era.printAndWait(`${you.name}은(는) 사무 책상에 엎드린 채 아무것도 하고 싶지 않다.`);
      await era.printAndWait(
        `트레센에 들어온 뒤 어째서인지 학생 시절의 의욕이 한꺼번에 사라졌다.`,
      );
      await era.printAndWait(
        ` ${maru.name}과(와) 교류하면서 예전 감각은 천천히 돌아왔지만, 그 억지스러움은 아직 조금 골칫거리다.`,
      );
      await you.say_and_wait(
        `평소 이렇게 고생하고 있으니 오늘은 제대로 쉬자.`,
      );
      await maru.say_and_wait(` ${callname}, 들어갈게♪`);
      await era.printAndWait(
        `그런 핑계로 땡땡이치려던 순간 ${maru.name}이(가) 문을 밀고 들어왔다.`,
      );
      await era.printAndWait(
        `우연이라고 해야 할지, ${maru.name}은(는) 마침 기분이 좋아 보인다.`,
      );
      await maru.say_and_wait(`그럼 ${callname}에게 제대로 설명해 줘야겠네.`);
      await you.say_and_wait(
        ` ${maru.name}에게 상담하면 새로운 관점이 나올지도 모른다.`,
        true,
      );
      await era.printAndWait(
        `시험 삼아 ${you.name}은(는) ${maru.name}에게 마음속 고민을 털어놓았다.`,
      );
      await maru.say_and_wait(`음——그런 거구나.`);
      await era.printAndWait(
        ` ${maru.name}은(는) 살며시 웃으며 구석의 작은 칠판을 끌어냈다.`,
      );
      await maru.say_and_wait(`그럼 언니가 내 관점을 나눠줄게.`);
      await era.printAndWait(
        ` ${maru.name}은(는) 칠판 왼쪽에 데포르메된 자신을 그렸다.`,
      );
      await maru.say_and_wait(
        `하지 않으면 후회할 일을 마주할 때 도저히 의욕이 나지 않는 상태, 있지 않아?`,
      );
      await era.printAndWait(
        `칠판 오른쪽에는 고민거리인 숙제, 순위, 댄스를 동그라미로 둘렀다.`,
      );
      await maru.say_and_wait(
        `중요한 건 알아. 하지 않으면 가까운 사람에게 조급함과 두려움을 느끼게 하지.`,
      );
      await era.printAndWait(
        `${maru.sex}은(는) 설명하면서 작은 사람 그림에 구름을 덧그렸다.`,
      );
      await maru.say_and_wait(
        `후회와 조급함 속에서 지내. 그런데도 그 상태로 유지되는 것 같아?!`,
      );
      await era.printAndWait(
        `그 두 가지 아래에서 데포르메된 작은 사람이 트레이너에게 사과하기 시작한다.`,
      );
      await maru.say_and_wait(
        `다음에 같은 일이 일어났을 때 후회하는 얼굴을 보이면 주변도 더 말하지 않고, 결국 모두 적당한 상태에서 멈춘다.`,
      );
      await era.printAndWait(
        `세 그림을 화살표로 차례대로 이어 하나의 순환을 만들었다.`,
      );
      await maru.say_and_wait(` ${callname}은(는) 어떻게 생각해?`);
      era.printButton(`상황은 해결되지 않았잖아?`, 1);
      await era.input();
      await you.say_and_wait(
        `상황이 악화되고 주변이 ${you.name}에게 압박을 주고, 자신이 후회하는 표정을 지으면 주변이 어쩔 수 없이 포기한다. 이 순환 속에서 해결되지 않은 건 정작 일 자체잖아?`,
      );
      await you.say_and_wait(
        `원래는 의욕을 불태울 연료가 되어야 할 것이 후회하는 표정의 자신 때문에 꺼지고, 상황은 더 나쁜 방향으로 간다.`,
      );
      await you.say_and_wait(
        `상황이 심각해질수록 이 후회의 순환은 스스로 유지될 뿐 아니라 강화된다.`,
      );
      await era.printAndWait(
        `8분 정도 생각한 뒤 ${you.name}은(는) 망설이며 답을 내놓았다.`,
      );
      await maru.say_and_wait(
        `그래. 이 순환 자체는 문제를 해결하지 않아. 해결된 느낌만 해결하지. 당사자에게는 다음 주가 시험이라는 걸 알아도 아직 시간이 있으니 오락실에 가는 학생과 같아.`,
      );
      await maru.say_and_wait(`본질은 고통이 무서워 진통제로 마비시키는 것뿐이야.`);
      await maru.say_and_wait(`그러니 행동할 동기를 찾아야 해.`);
      await era.printAndWait(
        `정답이었던 모양이다. 꽃 같은 미소가 ${maru.sex}의 얼굴에 피었다.`,
      );
      await maru.say_and_wait(
        `원주율을 소수점 일곱째 자리까지 정확하게 구하는 데 인류 문명은 적어도 2천 년이 걸렸어.`,
      );
      await maru.say_and_wait(`무리수를 인식하는 데 천 년.`);
      await maru.say_and_wait(
        `이원방정식, 삼각함수, 로그, 팩토리얼. 모두 인류가 수천 년 동안 집단으로 탐구하며 조금씩 도달한 학문적 성과야.`,
      );
      await era.printAndWait(
        `화이트보드 지우개로 앞의 그림을 지운 뒤 거대한 수정 당근을 그렸다.`,
      );
      await maru.say_and_wait(
        `겨우 8년의 학습으로 그 성과를 자유롭게 사용할 수 있다면 훌륭한 성과라고 해도 돼.`,
      );
      await maru.say_and_wait(
        `아주 영리하고 운도 좋은 사람은 순위와 주변의 칭찬을 연료로 삼아 ${maru.sex}보다 더 빠르게 그것을 익혔지.`,
      );
      await era.printAndWait(
        `데포르메된 작은 사람은 드릴로 금세 수정 당근을 찾아냈다.`,
      );
      await you.say_and_wait(`오래 걸려도 이해하지 못하면 어떻게 해?`);
      await maru.say_and_wait(`그게 뭐 어때서?`);
      await era.printAndWait(` ${maru.name}은(는) 눈을 깜빡였다.`);
      await maru.say_and_wait(
        `${callname}의 목표는 이 문명의 유산을 충분히 받아들이는 것. 얼마나 걸리든 결국 배운다면 대승리야.`,
      );
      await you.say_and_wait(`이해되지 않는 공식을 만나면 어떻게 처리해?`);
      await maru.say_and_wait(
        `가장 좋은 건 관련 배경지식과 역사를 읽는 거야. 그 사상의 성과가 당시 역사 속에서 어떻게 걸러져 나왔는지를 거슬러 올라가는 것.`,
      );
      await era.printAndWait(
        `화이트보드의 데포르메된 작은 사람은 광물 지식을 조사하고 경험 많은 선배에게 묻는다.`,
      );
      await maru.say_and_wait(
        `그러면 이해의 문턱이 낮아질 뿐 아니라 올바른 역사관이 ${you.name}이(가) 사회에 대한 왜곡된 상상에서 얻은 잘못된 가치평가를 씻어낼 거야.`,
      );
      await maru.say_and_wait(
        `의욕이 없는 근본 원인은 언제나 가치를 잘못 판단하는 데 있으니까.`,
      );
      await era.printAndWait(`수정 당근이 반짝이기 시작했다.`);
      await maru.say_and_wait(
        `역사적으로 중요하고 귀중한 것의 주변에는 당연히 거대한 산업과 생태계가 생겨.`,
      );
      await era.printAndWait(
        `데포르메된 작은 사람들은 여신의 제단을 둘러싸고 수정 당근을 올렸다.`,
      );
      await maru.say_and_wait(
        `그 거대한 산업과 생태계는 당연히 그 지식의 가치를 뒷받침하고, 숙지한 사람에게 기회와 큰 보상을 줘.`,
      );
      await era.printAndWait(
        `이야기의 마지막에는 세 여신이 데포르메된 작은 사람에게 당근 산을 선물했다.`,
      );
      await maru.say_and_wait(`그러니 학습은 수익성이 아주 높은 기회야.`);
      await you.say_and_wait(`그렇구나. 고마워, ${maru.name} 선생님!`);
      await maru.say_and_wait(
        `어머~ ${callname}, 너무 사양하네. ${callname}에게 도움이 됐다면 ${maru.elder_sibling_sex_title}이(가) 제일 기쁜 쪽이야.`,
      );
      await era.printAndWait(
        `${you.name}에게 도움이 된 것을 진심으로 기뻐하는 ${maru.name} 주변에 무지개가 떠오른 듯하다.`,
      );
      await era.printAndWait(`의미 있는 하루를 보냈다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = '천황상(가을) 후・금빛 가을, 황금의 꿈';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンアラブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, darley, godolphin, byerley, you, callname) => {
      darley.name = '지혜의 여신';
      godolphin.name = '상냥한 여신';
      byerley.name = '엄숙한 여신';
      await maru.say_and_wait(`하아, 하아, 하아.`);
      await maru.say_and_wait(`조금만 더였어.`);
      await era.printAndWait(`마지막 코너에서 단숨에 가속했다.`);
      await era.printAndWait(`이 순간 경마장은 두 사람의 각축장이 되었다.`);
      await era.printAndWait(`앞으로 10마신, 8마신, 6마신.`);
      await era.printAndWait(`결승선까지 15m도 남지 않았다.`);
      await era.printAndWait(`후방에서 들려오는 천둥소리가 점점 가까워진다.`);
      await maru.say_and_wait(`역시 마지막에는 조금 부족했던 걸까?`, true);
      await era.printAndWait(
        `먼저 쌓은 우위는 불꽃에 녹는 눈처럼 빠르게 사라진다.`,
      );
      await era.printAndWait(`마지막 스퍼트의 순간.`);
      await era.printAndWait(`황제이(가) ${maru.name}의 등에 따라붙었다.`);
      await era.printAndWait(`하지만 ${maru.name}은(는) 한 걸음을 내디뎠다.`);
      await era.printAndWait(`황제: 설마 이렇게 될 줄이야. 재미있군.`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        `최후의 승자는—— ${maru.name}!`,
      );
      await maru.say_and_wait(`이미 이겼어.`);
      await maru.say_and_wait(`……왜 이렇게 피곤하지.`);
      era.drawLine();
      maru.print(
        `다시 눈을 떴을 때 거대한 꿈에서 깨어난 듯했다. 눈앞에는 몽롱하고 신비로운 초원이 펼쳐져 있다.`,
      );
      maru.print(
        `햇빛이 성긴 구름을 지나 가느다란 실처럼 살며시 내려와 끝없는 초록에 따뜻하고 부드러운 금빛을 입혔다.`,
      );
      maru.print(
        `일어나려 하자 몸의 세포 하나하나가 활력으로 가득 차 있다.`,
      );
      maru.print(
        `그대로 일어섰다. 주변을 둘러보니 푸른 하늘과 흰 구름 아래 거대한 비취처럼 대지에 박힌 끝없는 초원이 부드럽고 신비로운 기운을 뿜고 있다.`,
      );
      maru.print(
        `산들바람이 지나가고 풀의 물결이 바다의 너울처럼 굴러가며 상쾌한 풀 향기를 실어온다.`,
      );
      await maru.say_and_wait(`여기는 어디지?`);
      maru.print(
        `아무도 대답하지 않는다. 하지만 마음속으로는 답을 얻을 수 있는 곳이 있다는 것을 더없이 확신하고 있다.`,
      );
      await maru.say_and_wait(`평소처럼 마력 전개!`);
      await maru.say_and_wait(`셋!`);
      await era.printAndWait(`상체를 펴고 어깨의 힘을 빼며 낮춘다.`);
      await maru.say_and_wait(`둘!`);
      await era.printAndWait(`모든 힘을 다리에 쏟는다.`);
      await maru.say_and_wait(`하나!`);
      await era.printAndWait(
        `크게 숨을 들이쉬며 공기에 가득한 상쾌한 풀 내음을 느낀다.`,
      );
      await era.printAndWait(
        `그리고 답을 좇아 ${maru.name}은(는) 잔디의 품속을 질주했다.`,
      );
      era.drawLine();
      await era.printAndWait(` ${maru.name}은(는) 금빛 초원에 도착했다.`);
      await era.printAndWait(
        `그리운 ${maru.uma_sex_title}의 영혼의 요람이다.`,
      );
      await maru.say_and_wait(`여기는?`);
      await godolphin.say_and_wait(`드디어 왔구나, 다정한 아이야.`);
      await era.printAndWait(
        `갑자기 눈앞에 나타난 것은 다정함과 자애로 모든 것을 감싸는 여신.`,
      );
      await darley.say_and_wait(`여기까지 오는 동안의 고생은 우리도 보고 있었다.`);
      await era.printAndWait(
        `이어 각 ${maru.uma_sex_title}이(가) 타고난 개성을 존중하고 축복하는 침착하고 온화한 여신이 나타났다.`,
      );
      await byerley.say_and_wait(`시간에 의미를 부여하고 거기서 얻는 강한 힘을 좇는 것.`);
      await byerley.say_and_wait(`범인으로서는 그것도 하나의 강함을 보여주는 방식이겠지.`);
      await era.printAndWait(
        `강함이야말로 미래를 연다고 믿는 엄숙하고 강한 여신이 나타났다.`,
      );
      await maru.say_and_wait(`왜 내가 여기에 있는 거야?`);
      await byerley.say_and_wait(
        `……이곳은 경지를 깨달은 모든 ${maru.uma_sex_title}이(가) 재능을 극한까지 발휘한 뒤 도달하는 경기장이다.`,
      );
      await godolphin.say_and_wait(
        `훌륭한 일생을 보낸 뒤 모든 ${maru.uma_sex_title}이(가) 마지막에 도달하는 다정한 고향이기도 해.`,
      );
      await darley.say_and_wait(`에덴에 도달한 ${maru.uma_sex_title}이여.`);
      await darley.say_and_wait(
        `알고 있을 것이다. 우리가 만든 이 세계는 서로 다른 이념의 영원한 대립이 많은 슬픔과 고통을 낳았다.`,
      );
      await darley.say_and_wait(
        `하지만 동시에 이 세계에 영원히 존재하는, 서로 다르고 맞서는 다른 선택을 보장한다.`,
      );
      await godolphin.say_and_wait(
        `누구에게도 인정받지 못하고 시대에 맞지 않는다고 여겨진 꿈에도 영원히 동경할 저편이 있다.`,
      );
      await godolphin.say_and_wait(
        `어떤 신념을 품더라도 이 세계에는 반드시 마음 깊은 곳의 귀착지가 되는 장소가 있다.`,
      );
      await byerley.say_and_wait(
        `인간과 ${maru.uma_sex_title}에게는 긴 학습의 시간이 필요하다. 평화롭게, 존중을 품고 경쟁하는 법을 배우기 위해.`,
      );
      await byerley.say_and_wait(
        `모든 다툼의 마지막에는 하나의 의미가 생긴다. 그 의미가 승리를 위해 대가를 치른 각자의 ${maru.uma_sex_title}을(를) 구한다.`,
      );
      await darley.say_and_wait(
        ` ${maru.name}, 에덴에 온 수많은 ${maru.uma_sex_title}들과 마찬가지로 묻고 싶은 것이 있느냐?`,
      );
      await maru.say_and_wait(`묻고 싶은 것?`);
      maru.print(`순간 묻고 싶은 것이 너무 많아 말이 목에 걸렸다.`);
      maru.print(`하지만.`);
      await maru.say_and_wait(`됐어.`);
      await maru.say_and_wait(`여행에서 가장 중요한 건 길가의 풍경이야.`);
      await maru.say_and_wait(
        `처음부터 종착점의 답을 알고 있다면 길가의 풍경은 존재할 의미를 잃어.`,
      );
      await maru.say_and_wait(
        `굳이 묻는다면 이 즐거운 여행이 끝난 뒤 다시 만났을 때 질문하는 편이 현명하겠지?`,
      );
      await darley.say_and_wait(
        `진상보다 세속을 중시하는가. 재미있는 길을 골랐군.`,
      );
      await godolphin.say_and_wait(`앞으로의 길은 지금보다 험할 거야.`);
      await byerley.say_and_wait(
        `어떤 어려움도 넘어설 수 있을 것이다. 너에게는 그 자격이 있다.`,
      );
      await darley.say_and_wait(`앞으로의 길에 순풍이 함께하기를.`);
      await era.printAndWait(
        `부드러운 바람이 ${maru.name}을(를) 살며시 들어 올려 먼 세계를 향해 가속해 나아간다.`,
      );
      await era.printAndWait(
        `의식이 사라지기 직전 찰나, ${maru.name}은(는) 이 황금 같은 고향을 깊이 가슴에 새겼다.`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}？」`, 1);
      await era.input();
      await era.printAndWait(
        `불행 중 다행이라고 해야 할까. 레이스 종료 후 내내 몽롱했던 ${maru.name}은(는) 위닝 라이브에서도 자신의 춤을 응원하는 한 사람 한 사람의 가슴에 전했다.`,
      );
      await era.printAndWait(
        `트레이너로서 지금의 ${maru.name}에게 휴식이 필요하다며 모든 면회와 취재를 거절하고, ${maru.name}이(가) 기존 과학으로 설명할 수 없는 부동 상태임을 확인한 뒤 조심스럽게 ${maru.name}을(를) 업고 애차로 ${maru.sex}이(가) 사는 아파트까지 데려갔다.`,
      );
      era.printButton(`「실례하겠습니다.」`, 1);
      await era.input();
      await era.printAndWait(
        `애차를 근처 주차장에 세운 뒤 조심스럽게 ${maru.name}을(를) 안았다.`,
      );
      await era.printAndWait(
        `${maru.sex}을(를) 침대에 눕힌 뒤 의자 하나를 빼 ${maru.sex} 곁에 앉았다.`,
      );
      await you.say_and_wait(
        `제발 아무 일도 없기를, ${maru.name}.`,
        true,
      );
      await era.printAndWait(
        `자신이 할 수 있는 최선을 다한 뒤, 자신의 잠이 ${maru.name}의 깨어남과 맞바뀌기를 기도했다.`,
      );
      await era.printAndWait(`마음을 놓지 못한 채 시간을 보냈다.`);
      await era.printAndWait(`1분, 한 시간, 하룻밤, 아무 말도 없다.`);
      await maru.say_and_wait(`응.`);
      await era.printAndWait(
        `햇빛이 구름을 지나 얼룩진 빛과 그림자를 ${maru.name}의 몸에 드리울 때까지.`,
      );
      await maru.say_and_wait(`여기는?`);
      await era.printAndWait(
        `깨어난 ${maru.teen_sex_title}은(는) 익숙한 천장을 신기한 듯 바라보다 낯선 듯 익숙한 그 모습에 시선을 멈췄다.`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `하루 밤낮 동안 쌓인 피로가 ${you.name}을(를) 완전히 짓눌렀는지 ${you.name}은(는) 어느새 잠들어 있었다.`,
      );
      await maru.say_and_wait(
        `이 각도에서 보니 ${callname}, 멋있네♪`,
      );
      await maru.say_and_wait(`몇 번을 봐도 질리지 않아♪`);
      await maru.say_and_wait(`……여기까지 오느라 수고했어, ${callname}.`);
      await maru.say_and_wait(`무슨 일이 있어도 우리는 함께야, 알겠지?`);
      await era.printAndWait(` ${maru.name}은(는)  ${you.name}을(를) 세게 끌어안았다.。`);
      await era.printAndWait(`세 여신은 다정하게 아이들을 지켜보고 있다.`);
      await darley.say_and_wait(`……다정한 아이야. 네 소원은 반드시 이루어질 것이다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_lose
  toky_yus_lose: (() => {
    const title = '일본 더비 후・선택의 시작';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `어떤 이변도 없이 ${maru.name}은(는) 깔끔하게 더비를 제패했다.`,
      );
      await era.printAndWait(
        `${maru.sex}이(가) 골인한 순간 관중석에서 천둥 같은 환호가 터져 나왔다.`,
      );
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(
        `후우~ 역시 클래식 삼관에서 가장 주목받는 레이스네.`,
      );
      await maru.say_and_wait(
        `더비에 출전한 ${maru.uma_sex_title}들은 모두 ${maru.uma_sex_title}의 정예네.`,
      );
      await maru.say_and_wait(`더비보다 성대한 레이스라면 아마 이제 `);
      era.printButton(`「개선문상에 가지 않을래?」`, 1);
      era.printButton(`「역시 아리마 기념이지!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`응? 凱旋門賞？`);
        await maru.say_and_wait(
          `대단해! ${callname}과(와) 함께 있으면 매번 서프라이즈가 있네~`,
        );
        await maru.say_and_wait(
          `개선문상이라면 세계급 ${maru.uma_sex_title}을(를) 만날 수 있을지도 몰라.`,
        );
        await maru.say_and_wait(`음——어떻게 할까?`);
        era.printButton(`어떻게 하면 좋을까?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`그렇지? 역시 아리마 기념.`);
        era.printButton(
          `「${maru.name}이(가) 아리마 기념에서 즐기는 모습을 나도 기대하고 있어.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}은(는) 제대로 보고 있어줘.`);
      }
      await maru.say_and_wait(`아, 슬슬 위닝 라이브네.`);
      await maru.say_and_wait(
        `${callname}과(와) 함께 있으면 시간은 늘 빨리 지나가네.`,
      );
      await you.say_and_wait(
        `무대 위에서도 ${maru.name}을(를) 응원해 준 팬들에게 이 마음을 전해줘!`,
      );
      await maru.say_and_wait(
        `응. 응원해 준 팬들에게 제대로 보여줘야지.`,
      );
      await maru.say_and_wait(`슬슬 출발할 시간이네.`);
      await era.printAndWait(` ${maru.name}은(는) 대기실을 나갔다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `대기실 문을 닫자 방에는 자신만 남았다.`,
      );
      await you.say_and_wait(`슬슬 결단을 내려야겠네.`, true);
      await era.printAndWait(`나가려던 순간.`);
      await era.printAndWait(`똑똑.`);
      await era.printAndWait(`정말이지, 또 새로운 유행이라도 떠올린 건가?`);
      await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
      await you.say_and_wait(`마루젠 ——`);
      await era.printAndWait(`문 앞에 종잇조각 한 장이 남겨져 있었다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배, 묻고 싶은 게 있습니다. 괜찮다면 2주 뒤 빈 교실에서 만날 수 있을까요?`,
      );
      await era.printAndWait(`결정한다.`);
      era.printButton(`「${maru.name}에게 전한다」`, 1); //NE
      era.printButton(`「${maru.name} 대신 간다」`, 2);
      era.print(
        '【경고. 신중하게 선택하십시오. 그렇지 않으면 모든 것을 되돌릴 수 없습니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`조금 머리가 아프네. ${maru.name} 앞으로 온 거야.`);
        await you.say_and_wait(
          `직접 보러 가고 싶은 마음도 있지만 ${maru.sex}에게 맡기는 편이 낫겠지?`,
        );
        await era.printAndWait(
          `${maru.name}이(가) 돌아온 뒤 이 종잇조각에 대해 ${maru.sex}에게 전했다.`,
        );
      } else {
        await era.printAndWait(
          `주변에 아무도 없는 것을 확인하고 종잇조각을 주워 주머니에 넣었다.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`왜 주웠는지는 자신도 모른다. 하지만——`);
        await era.printAndWait(`이대로 놓친다면.`);
        await era.printAndWait(`무언가를 잃을 것 같다.`);
        await you.say_and_wait(`……미안해.、${maru.name}。`);
        await you.say_and_wait(`어떻게든 한 번은 가봐야 해.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_win
  toky_yus_win: (() => {
    const title = '일본 더비 후・선택의 시작';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `어떤 이변도 없이 ${maru.name}은(는) 깔끔하게 더비를 제패했다.`,
      );
      await era.printAndWait(
        `${maru.sex}이(가) 골인한 순간 관중석에서 천둥 같은 환호가 터져 나왔다.`,
      );
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(
        `후우~ 역시 클래식 삼관에서 가장 주목받는 레이스네.`,
      );
      await maru.say_and_wait(
        `더비에 출전한 ${maru.uma_sex_title}들은 모두 ${maru.uma_sex_title}의 정예네.`,
      );
      era.printButton(
        `「코스는 더비에서 가장 바깥쪽이었지만, 그 불리함에도.」`,
        1,
      );
      await era.input();
      era.printButton(
        `「깔끔하게 더비를 따낸 ${maru.name}이(가) 제일 대단해.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `그렇게 대단하진 않아⭐ 평소처럼, 아니, 전보다 조금 더 빨리 달렸을 뿐이야.`,
      );
      await maru.say_and_wait(`더비보다 성대한 레이스라면 아마 이제 ——`);
      era.printButton(`「개선문상에 가지 않을래?」`, 1);
      era.printButton(`「역시 아리마 기념인가?」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`응? 凱旋門賞？`);
        await maru.say_and_wait(
          `대단해! ${callname}과(와) 함께 있으면 매번 서프라이즈가 있네~`,
        );
        await maru.say_and_wait(
          `개선문상이라면 세계급 ${maru.uma_sex_title}을(를) 만날 수 있을지도 몰라.`,
        );
        await maru.say_and_wait(`음——어떻게 할까?`);
        era.printButton(`어떻게 하면 좋을까?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`그렇지? 역시 아리마 기념.`);
        era.printButton(
          `「${maru.name}이(가) 아리마 기념에서 즐기는 모습을 나도 기대하고 있어.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}은(는) 제대로 보고 있어줘.`);
      }
      await maru.say_and_wait(`아, 슬슬 위닝 라이브네.`);
      await maru.say_and_wait(
        `${callname}과(와) 함께 있으면 시간은 늘 빨리 지나가네.`,
      );
      await you.say_and_wait(
        `무대 위에서도 ${maru.name}을(를) 응원해 준 팬들에게 이 마음을 전해줘!`,
      );
      await maru.say_and_wait(
        `응. 응원해 준 팬들에게 제대로 보여줘야지.`,
      );
      await maru.say_and_wait(`슬슬 출발할 시간이네.`);
      await era.printAndWait(` ${maru.name}은(는) 대기실을 나갔다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `대기실 문을 닫자 방에는 자신만 남았다.`,
      );
      await you.say_and_wait(`슬슬 결단을 내려야겠네.`, true);
      await era.printAndWait(`나가려던 순간.`);
      await era.printAndWait(`똑똑.`);
      await era.printAndWait(`정말이지, 또 새로운 유행이라도 떠올린 건가?`);
      await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
      await you.say_and_wait(`마루젠 ——`);
      await era.printAndWait(`문 앞에 종잇조각 한 장이 남겨져 있었다.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배, 묻고 싶은 게 있습니다. 괜찮다면 내일 밤 빈 교실에서 만날 수 있을까요?`,
      );
      await era.printAndWait(`결정한다.`);
      era.printButton(`「${maru.name}에게 전한다」`, 1); //NE
      era.printButton(`「${maru.name} 대신 간다」`, 2);
      era.print(
        '【경고. 신중하게 선택하십시오. 그렇지 않으면 모든 것을 되돌릴 수 없습니다!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`조금 머리가 아프네. ${maru.name} 앞으로 온 거야.`);
        await you.say_and_wait(
          `직접 보러 가고 싶은 마음도 있지만 ${maru.sex}에게 맡기는 편이 낫겠지?`,
        );
        await era.printAndWait(
          `${maru.name}이(가) 돌아온 뒤 이 종잇조각에 대해 ${maru.sex}에게 전했다.`,
        );
      } else {
        await era.printAndWait(
          `주변에 아무도 없는 것을 확인하고 종잇조각을 주워 주머니에 넣었다.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`왜 주웠는지는 자신도 모른다. 하지만——`);
        await era.printAndWait(`이대로 놓친다면.`);
        await era.printAndWait(`무언가를 잃을 것 같다.`);
        await you.say_and_wait(`……미안해.、${maru.name}。`);
        await you.say_and_wait(`어떻게든 한 번은 가봐야 해.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fail
  train_fail: (() => {
    const title = '몸을 소중히';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`으음, 발목을 삔 것 같아.`);
      await era.printAndWait(
        `${maru.name}은(는) 방금 훈련에서 발목을 삐었다.`,
      );
      await maru.say_and_wait(`괜찮아♪ 이 정도면 금방 나을 거야.`);
      era.println();
      era.printButton('「작은 부상이라도 제대로 쉴 것!」', 1);
      era.printButton('「이게 바로 청춘이지, 훈련으로 돌아가자!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `OK♪ ${callname}이(가) 이렇게 신경 써주다니, 사실 나한테 관심 있는 거야?`,
        );
        await maru.say_and_wait(
          `하지만 부상이라니, ${
            maru.elder_sibling_sex_title
          }답지 않네. 이래서는 테이오 ${maru.couple_title}에게……`,
        );
        era.printButton('「그렇지 않아!」', 1);
        await era.input();
        await maru.say_and_wait(
          `응…… 맞아.${
            maru.elder_sibling_sex_title
          }、 제대로 반성했어. 푹 쉬고 나면 다시 한번 ${
            maru.elder_sibling_sex_title
          }다운 모습을 보여줄게!`,
        );
        await era.printAndWait(`${maru.name}은(는) 얌전히 보건실에서 쉬었다.`);
      } else if (fail_again) {
        await maru.say_and_wait(`어머, ${callname}은(는) 말 잘하네♪`);
        await maru.say_and_wait('더 칭찬해 줘도 돼.');
        era.printButton(
          `「${
            maru.name
          }、 아름답고 강한 ${maru.uma_sex_title}, 붉은 불꽃처럼 쿨하고 화려한 ${
            maru.elder_sibling_sex_title
          }님!」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '어머, 그렇게 말하면 부끄럽네♪ 그럼 충분히 쉬었으니 훈련으로 돌아가자!',
        );
        era.printButton('「그 기세야!」', 1);
        await era.input();
        await maru.say_and_wait('아파!');
        await era.printAndWait(
          '훈련 중 부상이 악화되어 다시 병실에서 쉬게 되었다.',
        );
      } else {
        await maru.say_and_wait('하나, 둘, 셋, 넷, 여유 여유♪');
        await maru.say_and_wait('다섯, 여섯, 일곱, 여덟, 전혀 문제없어♪');
        await maru.say_and_wait(`${you.name}, 내 점프 어때?`);

        era.printButton('「……눈부셔!」', 1);
        await era.input();
        await maru.say_and_wait(
          '후후♪ 이대로 후배들에게 쿨하고 화려한 모습을 보여주자!',
        );

        era.printButton(`「${maru.name}、${maru.name}！」`, 1);
        await era.input();
        await era.printAndWait(
          `기적처럼 ${maru.name}은(는) 컨디션을 되찾고 다시 훈련으로 돌아갔다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fumble
  train_fumble: (() => {
    const title = '무리는 금물';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`응, 아파.`);
      await era.printAndWait(
        `${maru.name}은(는) 방금 훈련에서 발목을 삐었다.`,
      );
      await maru.say_and_wait(`나라도 이제 한계야.`);
      await maru.say_and_wait(
        '하지만 다음 레이스도 가까운데…… 빨리 회복해야 해!',
      );
      era.println();

      era.printButton('「조급해하지 말고 천천히 낫자.」', 1);
      era.printButton('「때로는 강한 약도 필요해!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`그래? 조금 쉬면 돌아올 줄 알았는데!`);
        era.printButton('「부상이 악화되면 큰일이야.」', 1);
        await era.input();
        await maru.say_and_wait(
          '……알겠습니다. 치료하기로 했으면 완치를 목표로 해야지!',
        );
        await maru.say_and_wait(
          '그럼 기운 내기 위해 젤라토 사러 가자.',
        );
        era.printButton('「그래, 다리를 또 다치지 않도록.」', 1);
        await era.input();
        await maru.say_and_wait(
          `어머, ${callname}은(는) 다정하네.${
            maru.elder_sibling_sex_title
          }이(가) 아니라 후배들이었다면 순식간에 반해버릴걸~`,
        );

        era.printButton(`「${maru.name}, 또 농담하네.」`, 1);
        await era.input();
        await maru.say_and_wait('흥흥♪');
        await era.printAndWait(
          `${maru.name}이(가) 제대로 나을 때까지 훈련은 일단 쉬기로 했다.`,
        );
      } else {
        await era.printAndWait(
          `레이스가 다가오는데 ${maru.name}은(는) 꽤 심한 부상을 입었다. 빨리 낫게 하려면 기책을 쓸 수밖에 없다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 고민 끝에 강한 약을 쓰기로 했다.`,
        );
        era.printButton(
          '「기분이 좋으면 상처도 빨리 낫는다. 의지의 힘으로 이겨내자!」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '내 생각과 같네. 기분 전환을 한다면 도심에서 가장 최신 유행을 좇아보자.',
        );
        if (fail_again) {
          await era.printAndWait(
            `그렇게 ${you.name}은(는) 패션 잡지로 이번 시즌 최첨단을 확인한 뒤 ${maru.name}을(를) 데리고 백화점에 갔다.`,
          );
          await era.printAndWait(
            `평일인데도 사람이 꽤 많아 ${you.name}은(는) 누군가 ${maru.name}의 다친 다리에 부딪히지 않도록 신경 썼다.`,
          );
          await era.printAndWait(`두 사람은 건물 안에서 눈이 돌 것 같았다.`);
          await maru.say_and_wait(
            `응? 요즘 유행, 들어본 적도 없어.${
              maru.elder_sibling_sex_title
            }、 아웃인 걸까?`,
          );
          era.printButton(
            `「최첨단에 얻어맞은 ${maru.name}의 기분은 가라앉았고 회복 효과도 크게 떨어졌다」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name}은(는) ${maru.name}의 안내로 애차를 여기저기 몰아 세월이 느껴지는 CD 숍에 도착했다.`,
          );
          await maru.say_and_wait(
            '겉보기엔 수수하지만 안의 음악은 꽤 유행하고 있어♪',
          );
          await era.printAndWait(
            `${you.name}은(는) 적당히 CD 한 장을 집었다. 고등학교 때 반복해서 듣던 곡인지 확실하지 않다.`,
          );
          await maru.say_and_wait(
            '후후~ 역시 좋은 곡♪ 춤추고 싶어지네.',
          );
          era.printButton(
            `(${maru.sex}이(가) 기뻐한다면 그걸로 됐나?)`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `음악 덕분인지 ${maru.name}의 부상도 빠르게 나아갔다.`,
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
    const title = '추가 자율 훈련';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}의 훈련이 끝난 뒤.`);
      await maru.say_and_wait(`헬로? ${callname}, 이따 시간 있어?`);
      await maru.say_and_wait('이 날씨에 달리는 거 분명 즐겁겠지?');
      await maru.say_and_wait(
        '튀는 물보라, 비에 흐려지는 시야…… 이런 때는 색다른 바람을 느낄 수 있을 것 같아.',
      );
      await maru.say_and_wait(
        '오늘 정말 의욕 넘치게 달렸잖아! 이대로 연습을 끝내기엔 아까워♪',
      );
      await maru.say_and_wait(`빗속을 달리는 것도 나쁘지 않아♪`);
      await maru.say_and_wait(
        `이 정도 비는 아침 샤워랑 비슷하잖아.`,
      );
      await maru.say_and_wait('하지만 지금은 저녁 샤워려나……?');
      await maru.say_and_wait('내 몸, 아직 뜨거운 채야.');
      await maru.say_and_wait(`지금이야말로 내 차례일지도? ${callname}은(는) 어떻게 생각해?`);
      era.printButton('「알겠어, 달리자.」', 1);
      era.printButton('「지금은 달리지 않는 편이 좋을지도!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그래야지! 오늘은 밤새 달릴 거야. 후후, 하늘도 기뻐하는 것 같아.`,
        );
        await maru.say_and_wait(`그럼 출발이야. 바람의 세계로.`);
        await era.printAndWait(
          '그렇게 추가 훈련은 빗속에서 계속 이어졌다.',
        );
      } else {
        await maru.say_and_wait('어머, 아쉽네.');
        await maru.say_and_wait('모처럼의 기회인데……!');
        await maru.say_and_wait('하지만 어쩔 수 없네. 체력 비축도 중요하니까……!');
        await maru.say_and_wait('게다가 트레이너가 감기에 걸리면 곤란하잖아.');
        await maru.say_and_wait(
          '흥정하는 것도 좋진 않지만, 빗속 드라이브에는 함께해 줘. 둘뿐이야♪',
        );
        era.println();
        await era.printAndWait(
          `빗속 드라이브로 두 사람 모두 지쳤지만 ${maru.name}은(는) 무척 즐거워 보였다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_39
  we_39: (() => {
    const title = '할로윈';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `마지막 데이터를 정리한 뒤 ${you.name}은(는) 길게 숨을 내쉬었다.`,
      );
      era.printButton(`「드디어 끝났다.」`, 1);
      await era.input();
      await era.printAndWait(`거의 저려버린 두 다리를 움직인다. 겨울밤은 여름보다 길다.`);
      await you.say_and_wait(`밖을 좀 걷자.`, true);
      await era.printAndWait(
        `일을 전부 끝냈다는 성취감에 ${you.name}의 발걸음은 가벼워졌다.`,
      );
      await era.printAndWait(
        `훈련실을 나오자 학원 홀은 호박등과 보라색 리본으로 신비로운 고성처럼 꾸며져 있었다.`,
      );
      await you.say_and_wait(`그러고 보니 오늘이 무슨 날이었지?`, true);
      await you.say_as_passer_by_and_wait(
        `활기찬 ${maru.uma_sex_title}들`,
        `과자 안 주면 장난칠 거야!`,
      );
      await era.printAndWait(
        `유령과 늑대인간, 흡혈귀로 분장한 ${maru.uma_sex_title}들에게 둘러싸였다!`,
      );
      await you.say_and_wait(`으악!`);
      await era.printAndWait(
        `모퉁이에 숨어 있던 ${maru.uma_sex_title}들에게 기습적으로 놀라 ${
          you.actual_name
        }은(는) 바닥에 넘어졌다.`,
      );
      await you.say_as_passer_by_and_wait(
        `활기찬 ${maru.uma_sex_title}들`,
        `장난 대성공!`,
      );
      await era.printAndWait(
        `지나가던 사람을 놀래킨 ${maru.uma_sex_title}들은 웃으며 달아났고 현장에는 피해자인 ${
          you.actual_name
        }만 남았다.`,
      );
      await you.say_and_wait(`이런 차림…… 무슨 축제였지?`);
      await era.printAndWait(
        `머릿속을 정리하려 하며 ${you.name}은(는) 엉덩이의 먼지를 털고 일어났다.`,
      );
      await you.say_and_wait(`학원 밖도 가보자.`);
      await era.printAndWait(`결정한 뒤 ${you.name}은(는) 홀을 떠났다.`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `미라로 분장한 ${maru.uma_sex_title}들`,
        `과자 안 주면 장난칠 거야!`,
      );
      await era.printAndWait(
        `서양의 할로윈을 따라 트레센 학원의 ${maru.uma_sex_title}들도 상점가 근처에서 집집마다 문을 두드리고 있다.`,
      );
      await era.printAndWait(`점주들도 준비해 둔 사탕을 꺼내 대접한다.`);
      await you.say_and_wait(`오늘 크리스마스였나?`);
      await era.printAndWait(
        `거대한 박쥐와 호박등 간판이 달린 입구를 보며 ${you.name}은(는) 생각에 잠겼다.`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`입구에서 누군가 말을 걸었다.`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`${callname}, 해피 할로윈♪`);
      await era.printAndWait(
        `짙은 보라색 마녀복으로 코스프레한 ${maru.name}이(가) 미소 지으며 ${you.name}을(를) 보고 있다.`,
      );
      await you.say_and_wait(`여기서 ${maru.name}을(를) 만날 줄이야. 즐기고 있어?`);
      await era.printAndWait(
        `흔들리는 귀, 장난꾸러기 요정처럼 활발한 꼬리. 답은 이미 분명하다.`,
      );
      await maru.say_and_wait(
        `이 느낌 좋아. ${callname}도 같이 놀면 더 귀여울 텐데♪`,
      );
      await you.say_and_wait(`응……`);
      await era.printAndWait(
        `괴물로 분장한 ${maru.uma_sex_title}들은 미성년인 ${
          maru.teen_sex_title
        }이다. 어른이 이걸 하는 건 역시.`,
      );
      await you.say_and_wait(`오히려 영광이지.`);
      await era.printAndWait(
        `이렇게 쌓인 스트레스를 풀고 온몸으로 이 기쁨의 바다에 잠긴다.`,
      );
      await maru.say_and_wait(`후후♪ 그럼 약속이야?`);
      await you.say_and_wait(`약속이야.`);
      await you.say_and_wait(`기분 전환이라고 생각하자.`, true);
      await you.say_as_passer_by_and_wait(
        `리치로 분장한 ${maru.uma_sex_title}`,
        `선배! 이쪽은 손이 모자라요!`,
      );
      await era.printAndWait(
        `사탕을 나눠주는 노점이 ${maru.uma_sex_title}들에게 둘러싸여 꼼짝도 못 하는 듯하다.`,
      );
      await maru.say_and_wait(`아차~ 그럼 먼저 갈게.`);
      era.printButton(`「나도 도울게.」`, 1);
      await era.input();
      await era.printAndWait(
        `사탕을 마대 세 자루분 나눠준 뒤 기진맥진한 두 사람은 훈련실 소파에 쓰러졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_41
  we_41: (() => {
    const title = (maru) => `트레이너와 담당 ${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`11월 어느 날의 일이다.`);
      await era.printAndWait(
        `${you.name}은(는) 지난해 아사히배 영상을 보며 그 기술을 어떻게 활용해야 ${maru.name}의 능력을 끌어올릴 수 있을지 생각하고 있다.`,
      );
      await you.say_and_wait(`역시 슈퍼카라고 해야 하나.`);
      await era.printAndWait(
        `달리기 위해 태어난 두 다리. 우아한 몸 아래 숨겨진 거대한 힘.`,
      );
      await you.say_and_wait(`내가 없어도 가볍게 이길 것 같은데.`);
      await era.printAndWait(
        `일시정지를 누르고 커피를 한 모금 마신다. 차가운 쓴맛이 입안에서 천천히 녹는다.`,
      );
      era.println();
      await era.printAndWait(`끼익.`);
      await maru.say_and_wait(`헬로! ${callname}, 들어갈게.`);
      await you.say_and_wait(`기분이 좋아 보이네. 좋은 일이라도 있었어?`);
      await maru.say_and_wait(`아, ${callname}에게도 티가 나?`);
      await maru.say_and_wait(
        `오늘 선발전에서 계속 지켜보던 후배가 드디어 장애물을 넘고 똑같이 달리는 즐거움을 알게 됐거든?\n`,
      );
      await you.say_and_wait(
        `${maru.name}이(가) 그렇게까지 말하니 나도 ${maru.name}이(가) 눈여겨보는 후배를 보고 싶어졌다.\n`,
      );
      await maru.say_and_wait(
        `그렇지 그렇지? 후배들은 그런 식으로 한꺼번에 성장한다니까! 나도 깜짝 놀랐어.`,
      );
      await maru.say_and_wait(
        `언젠가 나도 후배에게 가볍게 추월당하고 그대로 멀리 뒤처질지도 모르겠네. 프레셔, 프레셔.\n`,
      );
      era.printButton(`「앞으로의 훈련도 힘내야겠네!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `그래! ${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }인 나도 앞으로의 훈련은 스파르타식으로 해야겠네!`,
      );
      era.println();
      await maru.say_and_wait(`그러고 보니.`);
      await era.printAndWait(
        `${maru.name}은(는) 무언가 떠올랐다는 듯 두 손을 가볍게 마주쳤다.\n`,
      );
      await maru.say_and_wait(
        `맞다, ${callname}, 훈련 끝나면 같이 드라이브하지 않을래?`,
      );
      await maru.say_and_wait(
        `다른 계절과 달리 가을바람은 언제나 마음을 가볍게 해줘.`,
      );
      await maru.say_and_wait(
        `하지만 말로만 설명해도 ${callname}에게는 전해지지 않겠지. 그러니 ${callname}에게 직접 몸으로 느껴보게 하는 편이 좋을 것 같아.`,
      );
      era.printButton(
        `${maru.name}이(가) 그렇게까지 말하니 나도 가을바람을 느껴보고 싶어졌다.`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `${maru.name}이(가) 말하는 가을바람은 어떤 느낌일까?`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `후아, 바람을 맞으니 드디어 모든 게 뜬구름 같다는 걸 알겠네.`,
      );
      era.printButton(`「${maru.name}, 조금만 천천히 달릴 수 있어?」`, 1);
      await era.input();
      await era.printAndWait(
        `처음 조수석에서 기절할 뻔했던 때와 달리 지금의 ${you.name}도 이 속도에 조금 익숙해졌다.`,
      );
      await you.say_and_wait(`인간은 생각보다 튼튼하네.`, true);
      await you.say_and_wait(
        `고속으로 움직이는 기류 속에서 바람의 굉음과 뒤로 빠르게 밀려나는 풍경 외에는.`,
        true,
      );
      await era.printAndWait(
        `여름처럼 공기에 열기의 잔재가 섞이지도 않고, 겨울처럼 한기의 조각이 섞이지도 않는다.`,
      );
      await era.printAndWait(`가을바람에는 강한 해방감이 있다.`);
      await era.printAndWait(
        `학생 시절 마지막 과제를 끝내고 펜을 내려놓으며 숨을 돌리던 때와 같다.`,
      );
      await era.printAndWait(
        `혹은 무언가에 오랫동안 시달리다가 어느 날 마침내 끝났을 때와 같다.`,
      );
      await era.printAndWait(
        `바람을 맞은 뺨에서 시작해 머리카락 한 올 한 올, 머리카락과 이어진 뇌, 마지막에는 마음까지 닿는다.`,
      );
      await era.printAndWait(`넘치는 상쾌함을 거리낌 없이 풀어놓고 싶어진다.`);
      await you.say_and_wait(`${maru.name}, 혹시 나는……`);
      await maru.say_and_wait(`슬슬 바다네.`);
      await era.printAndWait(`입 밖으로 나오려던 말은 결국 침묵이 되었다.`);
      await you.say_and_wait(`……그러네.`);
      era.drawLine();
      await era.printAndWait(
        `${maru.name}의 조수석에서 내린 뒤 ${you.name}은(는) 멀리까지 열심히 바라보았다. 시야에는 깨알만 한 사람 그림자만 보인다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}이라는 종족이 타고난 우위인지, 아직 바닷물에 씻기지 않은 발자국에서 읽어낸 상황인지.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `이 짙푸른 공간에서 ${maru.name}은(는) 출렁이는 파도를 바라보다——`,
      );
      await era.printAndWait(`그리고 쓸쓸한 표정을 지었다.`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`응?`);
      await maru.say_and_wait(
        `이렇게 쉬는 날 ${callname}과(와) 함께 바다를 보는 건 처음이네.`,
      );
      await era.printAndWait(
        `습한 바닷바람이 정면에서 불어와 거의 눈을 뜰 수 없다.`,
      );
      await maru.say_and_wait(`어머, 오늘 바람은 이렇게 강하네.`);
      await you.say_and_wait(`그렇구나.`);
      await you.say_and_wait(`바닷바람은 이런 조금 씁쓸한 소금 냄새구나.`);
      await maru.say_and_wait(
        `응, 조금 비릿한 바람. 동시에 바다에서 사는 생물들의 길잡이이기도 해.`,
      );
      await maru.say_and_wait(
        `그 아이들은 이 특별한 냄새에 의지해 먹이를 찾아.`,
      );
      await maru.say_and_wait(
        `그러니 그런 의미에서는 이 냄새가 그 아이들의 생명줄일지도 모르겠네.`,
      );
      await you.say_and_wait(
        `${maru.name}은(는) 역시 언제나 다정한 ${maru.elder_sibling_sex_title}이네.`,
      );
      await maru.say_and_wait(
        `졌다, ${callname}에게만큼은 그런 말 듣고 싶지 않았는데♪`,
      );
      await maru.say_and_wait(
        `${callname}에게 그런 말을 들으니 ${maru.elder_sibling_sex_title}, 조금 부끄럽네.`,
      );
      await era.printAndWait(
        `${you.name}에게 칭찬받은 ${maru.name}은(는) 보기 드문 귀여운 표정을 지었다.`,
      );
      await you.say_and_wait(
        `세 여신님의 은혜에 감사. 이제 배부르게 봤다.`,
        true,
      );
      await era.printAndWait(
        `이렇게 ${maru.name}의 귀여운 모습을 거리낌 없이 실컷 감상했다.`,
      );
      await era.printAndWait(
        `트레이너의 수십 년 경력에 비하면 겨우 3년은 거품처럼 짧다.`,
      );
      await era.printAndWait(
        `그렇다고 경력에서 처음 만난 ${maru.uma_sex_title}을(를) 연습 상대로 삼아도 되는가?`,
      );
      await era.printAndWait(
        `아니, 트레이너로서 능력이 부족한 것이 운명이라면 자신에게 걸어준 ${maru.uma_sex_title}들을 실망시킬지도 모른다.`,
      );
      await era.printAndWait(`그래도 우리는 계약을 선택한다.`);
      await era.printAndWait(
        `${maru.uma_sex_title}들이 그것을 필요로 하기 때문이다.`,
      );
      await era.printAndWait(
        `그렇기에 트레이너에게 가장 중요한 것은 성실한 마음이다.`,
      );
      await era.printAndWait(
        `「몸을 망칠 가능성이 있어도 트레이너로서 담당과 함께 빛난다.」 그 성실한 마음으로 훈련의 추함과 부족함을 갚는다.`,
      );
      await maru.say_and_wait(`슬슬 돌아가서 밥 먹자, ${callname}——`);
      await era.printAndWait(`달이 떠올랐다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_16
  we_47_16: (() => {
    const title = (maru) => `안녕, ${maru.name}이야.`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`아파트.`);
      await you.say_and_wait(
        `앞으로의 훈련 계획은 일단 여기까지 하자.`,
        true,
      );
      await era.printAndWait(
        `부드러운 조명 아래 ${you.name}은(는) 컴퓨터 앞에서 휴일 동안 밀린 업무를 처리하고 있다. 낮의 트레센에서 들리던 뜨거운 응원과 달리 밤의 트레이너 기숙사는 유난히 조용하다.`,
      );
      await you.say_and_wait(`벌써 12시 가까이 됐나.`, true);
      await era.printAndWait(
        `마지막 서류를 이사장에게 보낸 뒤 ${you.name}은(는) 피곤한 눈을 비비며 소파에 온몸을 맡겼다.`,
      );
      await you.say_and_wait(`목욕하고 푹 자자.`, true);
      await era.printAndWait(
        `눈을 꼭 감고 하루의 피로를 소화하려 한다. 그리고 크게 숨을 들이쉬어 하루의 짜증을 몸 밖으로 내보낸다.`,
      );
      await era.printAndWait(`부르르르.`);
      await you.say_and_wait(`이 시간에 영업 전화가 오진 않겠지.`, true);
      await era.printAndWait(
        `몸은 움직이기 싫지만 사축의 본능으로 스마트폰을 확인했다.`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `담당 ${maru.uma_sex_title}이(가) 한밤중에 전화한 이유는 모르겠다. 그래도 망설이지 않고 받았다.`,
      );
      await maru.say_and_wait(`예~ ${callname}, 오늘 밤 하늘 정말 좋아~`);
      await you.say_and_wait(`이쪽은 익숙한 풍경 말고는 특별한 게 아무것도 없어.`);
      await you.say_and_wait(`게다가,`);
      await era.printAndWait(
        `크게 숨을 들이쉬며 아직 남은 짜증이 무심코 새어나오지 않게 했다.`,
      );
      era.printButton(`「밤늦게까지 깨어 있으면 피부에 주름 생겨. 빨리 자!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `못 참겠어><! ${callname}, 프레셔 주는 말만 하네. 이대로라면 작별할 수밖에 없어.`,
      );
      await era.printAndWait(
        `스마트폰의 이모티콘을 보고 쓰는 법을 떠올리는 데 꼬박 10초가 걸렸다.`,
      );
      await you.say_and_wait(
        `그러고 보니 ${maru.name}은(는) 왜 갑자기 전화한 거지?`,
      );
      await maru.say_and_wait(
        `한번 자다가 깼더니 더는 잠이 안 와서. 그래서 ${callname}을(를) 찾아왔어.`,
      );
      await you.say_and_wait(`그래?`);
      await era.printAndWait(
        `터무니없는 말이 나온 것 같았지만 그래도 계속 들었다.`,
      );
      await maru.say_and_wait(
        `처음에는 잠이 안 와서 기운이 없었는데 밖의 달을 보고 있으니 소파를 하나 얻은 것 같은 기분이야. 특히 트레센을 지날 때의 시원한 밤바람, 마음이 들떠⭐`,
      );
      era.printButton(`「설마——」`, 1);
      await era.input();
      await era.printAndWait(
        `트레이너 제복으로 갈아입기도 전에 임시 숙소의 문이 열렸다.`,
      );
      await maru.say_and_wait(`안녕, ${callname}.`);
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `${maru.sex}의 미소 속에 경악한 자신의 모습이 비쳤다.`,
      );
      await maru.say_and_wait(` ${callname}？`);
      era.drawLine();
      await era.printAndWait(
        `한바탕 잔소리를 한 뒤 ${maru.name}은(는) 소파 위에서 얌전히 정좌하고 있다.`,
      );
      await maru.say_and_wait(`고마워♪`);
      await era.printAndWait(
        `그 뒤 변덕스러운 손님과 함께 책상 위 잡동사니를 치우고 인스턴트 홍차를 ${maru.sex}에게 건넸다.`,
      );
      await era.printAndWait(
        `홍차를 홀짝이는 ${maru.name}을(를) 보며 저도 모르게 한숨을 쉬었다.`,
      );
      await era.printAndWait(
        `이렇게 늦은 시간에 ${maru.sex}을(를) 혼자 돌려보내는 것도 위험하다. 하지만 학생을 마음대로 재울 수도 없다.`,
      );
      await you.say_and_wait(`어떻게 하면 좋을까?`, true);
      await maru.say_and_wait(`저기, ${callname}?`);
      await era.printAndWait(`${maru.name}이(가) 대답을 기다리고 있다. 여기서는\n`);
      era.printButton(`오늘 밤은 ${maru.sex}을(를) 재운다.`, 1);
      era.printButton(`「데려다주고 ${maru.sex}을(를) 돌려보낸다」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}, 안색이 안 좋아.`);
        await you.say_and_wait(
          `다음 주 훈련 계획에서 고칠 부분을 고민하느라 안색이 안 좋다.`,
          true,
        );
        await maru.say_and_wait(`${callname}、수고했어.`);
        await era.printAndWait(
          `${maru.name}에게 습관처럼 머리를 쓰다듬어진다. 처음에는 강하게 저항했지만 오래 이어지자 트레이너로서의 긍지는 코웃음 두 번만 남았다.`,
        );
        await maru.say_and_wait(`미안해. 이제 안 할게.`);
        await era.printAndWait(
          `전처럼 의례적인 얼버무림이 아니라 이번 사과에는 걱정시킨 데 대한 미안함이 더 크다.`,
        );
        await era.printAndWait(
          `${maru.sex}의 불쌍한 모습을 보고 모질게 굴 수 없어 다시 한숨을 쉬었다.`,
        );
        await you.say_and_wait(
          `이 시간에 돌려보내는 것도 걱정된다. 오늘 밤은 여기서 자.`,
        );
        await era.printAndWait(
          `파파라치도 다음 날의 가십도 ${
            minoru.name
          }의 차가운 시선과 꾸지람도 한 달치 월급도 이제 아무래도 좋다.`,
        );
        await you.say_and_wait(
          `너는 내 침대에서 자. 나는 소파에서 하룻밤 잘게.`,
        );
        await maru.say_and_wait(`음——그건 조금 아쉽네.`);
        await you.say_and_wait(`한밤중 사건의 주범은 요구가 많네!`);
        await maru.say_and_wait(`정・말・로・미・안・해!`);
        await you.say_and_wait(`그렇게 오해 살 말투로 말하지 마.`);
        await era.printAndWait(
          `미연시에 나올 법한 러브 코미디가 현실에서 일어났다. 기뻐해야 할 일인데.`,
        );
        await era.printAndWait(
          `하지만 완전무장한 파파라치가 한밤중에 ${maru.name}을(를) 들이는 장면을 찍어 다음 날 헤드라인이 되고, ${
            minoru.name
          }에게 차가운 눈초리를 받고 가장 중요한 월급이 날아가는 모습을 생각하면.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}은(는) 꽤 고통스러운 하룻밤을 보냈다.`);
      } else {
        await you.say_and_wait(`……${maru.name}, 데려다줄게.`);
        await maru.say_and_wait(`응? 정말?`);
        await era.printAndWait(
          `격렬하게 실랑이한 끝에 ${maru.name}을(를) 자기 아파트로 돌아가도록 설득했다.`,
        );
        await era.printAndWait(
          `이 행동이 ${maru.sex}의 예상 범위 안이었다는 것은 몰랐다.`,
        );
        await maru.say_and_wait(
          `이런 시간이니 ${
            callname
          }도 여기서 자고 가. 이쪽 파파라치, 의외로 많아.`,
        );
        await maru.say_and_wait(
          `아까 말다툼 때문에 그 사람들도 깼겠지?`,
        );
        await era.printAndWait(
          `이쪽의 ${callname}도 다음 날 연예지 헤드라인이 되고 싶진 않지?`,
        );
        await era.printAndWait(`이게 진짜 함정이었다는 걸 갑자기 깨달았다.`);
        await maru.say_and_wait(`그럼 ${callname}. 잘 자!`);
        await era.printAndWait(
          `${maru.name}의 여분 담요를 덮고 소파에서 하룻밤을 보냈다.`,
        );
        await era.printAndWait(
          `다음 날 큰 뉴스 냄새를 맡은 파파라치와 머리싸움을 벌인 이야기는 또 다른 모험이다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_17
  we_47_17: (() => {
    const title = '동경';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      const ret = [];
      await era.printAndWait(`훈련실`);
      era.println();
      await era.printAndWait(
        `짙은 다크서클과 사라지지 않는 커피 냄새. ${you.name}은(는) 손에 든 서류를 몇 번이고 다시 읽고 있다.`,
      );
      await you.say_and_wait(`지금 상태로 더비에 도전한다면`);
      await era.printAndWait(`앞으로 중점적으로 키울 능력은 무엇이지?`);
      era.printButton(`「스태미나와 근성!」`, 1);
      era.printButton(`「스피드와 파워!」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(
          `여름 합숙에서 지금까지 소홀했던 스태미나를 끌어올리자.`,
        );
      } else {
        await you.say_and_wait(`역시 스피드와 파워 쪽이 좋지.`);
      }
      await you.say_and_wait(`에취!`);
      await era.printAndWait(
        `재채기로 집중이 끊겼다. ${you.name}은(는) 오른손으로 휴지 한 장을 집어 가득 찬 쓰레기통에 버렸다.`,
      );
      await you.say_and_wait(`이 서류만 끝내면.`, true);
      await era.printAndWait(
        `몸이 차갑다. 온몸이 얼음에 파묻힌 것 같고 시야도 흐려지기 시작했다.`,
      );
      await era.printAndWait(
        `젊고 튼튼하니 일주일 정도 밤을 새도 괜찮을 거라 생각했다. 하지만 몸이 먼저 무너졌다.`,
      );
      await you.say_and_wait(`이 몸뚱이 같으니. 감기약, 감기약은 어디 있지?`);
      await era.printAndWait(
        `서랍을 열어 해열제라고 적힌 종이 상자를 꺼냈다. 안의 약은 진작 비어 있었다.`,
      );
      await you.say_and_wait(`……그래. 적어도 머리가 돌아갈 때.`);
      await era.printAndWait(
        `이보다 나쁜 상황도 없을 텐데 오히려 마음은 가벼워졌다.`,
      );
      await era.printAndWait(
        `정수기에서 미지근한 물 한 컵을 받아 단숨에 마신 ${you.name}은(는) 다시 자리에 앉았다.`,
      );
      await you.say_and_wait(`서둘러야 해.`);
      await era.printAndWait(
        `추위에 이가 제멋대로 부딪혀 「딱딱딱」 소리가 난다. 목도 삼키기 힘들다.`,
      );
      await era.printAndWait(
        `「빨리 이 일을 끝내고 싶다」「여기서 쓰러질 수 없다」 그 마음 하나로 ${you.name}은(는) 이를 악물었다.`,
      );
      await you.say_and_wait(`끝났다!`);
      await era.printAndWait(
        `마지막 글자를 입력한 뒤 달성의 만족감으로 긴장이 풀린 정신은 더 버티지 못한다. 시야가 돌기 시작했다. 아마 이제 한계다.`,
      );
      await era.printAndWait(`그렇게 ${you.name}은(는) 만족하며 쓰러졌다.`);
      await maru.say_and_wait(
        `${callname}, 잠깐 보러 왔어♪ ${callname}?`,
      );
      await era.printAndWait(
        `의식이 사라지기 직전 ${you.name}은(는) ${maru.name}의 목소리를 들었다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `제대로 보고 있어. ${maru.uma_sex_title}로서의 선배를.`,
      );
      await era.printAndWait(
        `제대로 바라봐. 이대로 영원히 뒤처져서.`,
      );
      await era.printAndWait(
        `제대로 축복해 줘. 지금은 ${you.name}이(가) 나에게 응원을 보낼 차례야.`,
      );
      await you.say_and_wait(`그렇구나.`);
      await era.printAndWait(
        `아마 이름 없는 ${maru.uma_sex_title}의 마음속 목소리가 무심코 새어 나온 것이겠지.`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(`누군가 ${you.name}을(를) 부르는 것 같다.`);
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(`점점 더 큰 소리로 불리고 있다.`);
      await era.printAndWait(`일어나야 해. 일어나기 싫어하는 자신을 달랜다.`);
      await era.printAndWait(`그렇게 ${you.name}은(는) 마지못해 눈을 떴다.`);
      await maru.say_and_wait(`드디어 일어났어? ${callname}.`);
      await you.say_and_wait(`여기는?`);
      await era.printAndWait(
        `주변을 둘러보니 ${you.name}이(가) 사는 곳인 듯하다.`,
      );
      await maru.say_and_wait(`잠깐 기다려.`);
      await era.printAndWait(
        `${maru.name}은(는) 주방에 들어가 죽 한 그릇을 가져왔다.`,
      );
      await maru.say_and_wait(`조금 전에 끓여뒀어. 아직 뜨거우면 말해.`);
      await era.printAndWait(
        `따뜻한 액체가 ${you.name}의 입에 들어온다. 몽롱한 머리는 본능만으로 이것이 자신에게 좋은 것이라 판단했다.`,
      );
      era.printButton(`「고마워.」`, 1);
      era.printButton(`「괜찮아, 내가 할게.」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `눈앞의 모습에 옅은 안개가 낀 듯해 ${you.name}은(는) ${maru.sex}의 움직임이 잘 보이지 않는다.`,
        );
        await era.printAndWait(`그럼 차라리 눈을 감자.`);
        await era.printAndWait(
          `그렇게 정하고 ${you.name}은(는) 눈을 감아 상대의 움직임에 맞췄다.`,
        );
        await era.printAndWait(
          `숟가락과 도자기 그릇이 부딪힐 때마다 따뜻한 액체가 입으로 들어온다.`,
        );
        await era.printAndWait(
          `따뜻한 감촉과 익숙하고 정확한 움직임. 무엇보다 중요한 것은 그리운 느낌이다. 어느새 어머니의 모습과 겹쳐진다.`,
        );
      } else {
        await you.say_and_wait(`괜찮아, 내가 할게.`);
        await era.printAndWait(
          `그대로 일어나려다가 더 힘센 두 손에 제지당했다.`,
        );
        await maru.say_and_wait(
          `지금은 무리할 때가 아니야. 환자는 침대에서 얌전히 쉬는 거야.`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `마지막 힘마저 다해 침대에 누워 있을 수밖에 없었다. 입으로 가져온 것을 어떻게든 삼켰다.`,
        );
      }
      await you.say_and_wait(`……따뜻해.`);
      await era.printAndWait(
        `그리운 기척에 ${you.name}은(는) 눈을 감고 깊은 잠에 빠졌다.`,
      );
      await era.printAndWait(`두려움에 계속 달리던 몸이 마침내 안심했다.`);
      era.drawLine();
      await you.say_and_wait(`……언제부터였지?`);
      await era.printAndWait(
        `눈을 뜨고 일어나려 하자 의자에서 쉬던 ${maru.teen_sex_title}이(가) 침대에 엎드린 채 잠들어 있었다.`,
      );
      await era.printAndWait(
        `떨림이 나지 않도록 커튼 끝을 열었다. 한 줄기 빛이 ${you.name}의 얼굴에 닿는다. 날이 밝았다.`,
      );
      await maru.say_and_wait(`응응. 요즘 유행은 그런 거야?`);
      await era.printAndWait(
        `다행히 몸을 일으키며 생긴 미세한 흔들림은 ${
          maru.sex
        }에게 무의식적으로 자세를 바꾸게 했을 뿐, 고른 호흡은 끊기지 않았다.`,
      );
      await you.say_and_wait(`${maru.sex}이(가) 일어날 때까지 이대로 기다리자.`, true);
      await era.printAndWait(
        `그렇게 생각하며 ${you.name}은(는) 눈을 감고 아침을 기다렸다.`,
      );

      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_32
  we_47_32: (() => {
    const title = '夏季合宿終了';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`합숙은 생각보다 빨리 지나갔네.`);
      maru.print(
        `테이오 ${maru.couple_title}이(가) 모래사장에서 청춘의 혼을 불태우며 필사적으로 달리는 모습.`,
      );
      maru.print(`한밤중 혼자 밀물과 썰물을 보는 것과는 또 다른 느낌이네.`);
      await maru.say_and_wait(`…… ${callname}。`);
      maru.print(`의외로 ${callname}의 배신에 그렇게까지 화가 나진 않았어.`);
      maru.print(`마치, 마치.`);
      era.drawLine();
      await maru.say_and_wait(`합숙은 생각보다 빨리 지나갔네.`);
      era.printButton(`「응.」`, 1);
      await era.input();
      await you.say_and_wait(`진심을 다하면 시간은 언제나 부족하네.`);
      await maru.say_and_wait(`하지만 시간은 돌아오지 않잖아?`);
      await you.say_and_wait(`적어도 즐거운 추억은 남겼잖아?`);
      await maru.say_and_wait(
        `후후, 그렇네. 테이오 ${maru.couple_title}과(와) 어젯밤 뒤풀이, 그전에는 ${callname}과(와) 해변에서 물놀이, 더 전에는 ${callname}과(와) 함께한 마을 축제.`,
      );
      await maru.say_and_wait(`그렇게 세어보니 정말 알찼네.`);
      await maru.say_and_wait(`8월 초로 돌아가 다시 한번 시작하고 싶네~`);
      era.printButton(`「아마 시간이 의미로 고정된 거겠지?」`, 1);
      await era.input();
      await you.say_and_wait(
        `의미를 부여받았으니 마지막에 무언가를 남긴 거겠지?`,
      );
      await maru.say_and_wait(`후후, 재미있는 생각이네.`);
      await maru.say_and_wait(
        `그럼 ${callname}, 마지막 여름 합숙을 함께 즐겨줄래?`,
      );
      await you.say_and_wait(`？`);
      await era.printAndWait(
        `얼마 지나지 않아 조수석의 ${you.name}은(는) 운전에 심리적인 트라우마가 생기기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_33
  we_47_33: (() => {
    const title = '물과 모래';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `다행히 이 기간에도 ${maru.name}은(는) 원래의 훈련을 소홀히 하지 않았다.`,
      );
      await era.printAndWait(`그 위안 덕분에 마음은 조금 가벼워졌다.`);
      await era.printAndWait(`업무에서 눈을 떼고 일어나 하품했다.`);
      await era.printAndWait(
        `모래사장은 신비로운 얇은 베일에 싸인 듯하다. 바로 앞에서는 ${maru.uma_sex_title}들이 기세 좋게 모래사장을 돌며 체력 훈련을 하고 있다.`,
      );
      await you.say_and_wait(`벌써 이런 시간이네.`);
      await era.printAndWait(
        `그 축제 이후 ${maru.name}과(와)의 관계는 한 걸음 가까워진 듯하다.`,
      );
      await era.printAndWait(
        `마침내 ${maru.sex}의 마음 깊숙한 곳으로 들어갈 허락을 받은 것 같다.`,
      );
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `어떻게든 ${maru.sex}과(와) 한 번 제대로 이야기해야 한다. 기회는 한 번뿐일지도 모른다.`,
      );
      await era.printAndWait(`그래서 결심했다.`);
      era.printButton(`「${maru.name}을(를) 찾는다」`, 1);
      era.printButton(`「${maru.name}을(를) 찾는다」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `석양의 잔광이 모래사장에 내려앉고 금빛과 고운 모래가 어우러져 해변 전체가 금으로 도금된 듯하다.`,
      );
      await era.printAndWait(`어째서인지 초조함이 점점 사라졌다.`);
      await era.printAndWait(
        `발끝과 모래의 마찰이 주는 저림은 곧 쾌감으로 변하고 기분도 고양됐다.`,
      );
      await era.printAndWait(
        `바로 앞, 주황과 짙은 파랑의 경계에 선 사람 그림자가 ${maru.uma_sex_title}들이 알려준 ${maru.name}일 것이다.`,
      );
      await era.printAndWait(
        `바라보던 사람 그림자도 이쪽이 온 것을 알아챈 듯하다. 그리고——`,
      );
      await era.printAndWait(`목소리는 파도에 조용히 녹아들었다.`);
      await era.printAndWait(
        `파도가 해안을 가볍게 두드리고 밀려왔다 물러가는 소리가 하루의 이야기를 들려주는 듯하다.`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}! 이쪽 물 차가워!`);
      await era.printAndWait(`${maru.name}은(는) 기쁜 듯 손을 흔들었다.`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `조금 복잡한 눈으로 ${maru.name}을(를) 본 뒤 신발을 벗고 맨발로 바다를 향했다.`,
      );
      await era.printAndWait(`차가운 감촉보다 먼저 희미한 저항감을 느꼈다.`);
      await era.printAndWait(
        `하지만 의식하며 가까이 다가갈수록 그 불쾌감도 천천히 사라졌다.`,
      );
      era.printButton(`「여름 느낌은 어때?」`, 1);
      era.printButton(`「바닷물 느낌, 베리 쿨해?」`, 2);
      await era.input();
      await maru.say_and_wait(
        `몸만 시원해진 게 아니야. 뜨거웠던 마음까지 단숨에 가라앉았어.`,
      );
      await you.say_and_wait(
        `${maru.name}이(가) 즐겁게 노는 모습을 보고 있으면 내일이 기다려지네.`,
      );
      await maru.say_and_wait(`내일도 맑고 좋은 날씨겠지.`);
      await era.printAndWait(
        `${maru.teen_sex_title}은(는) 해변 위를 바라봤다. 저녁이 되어도 훈련을 계속하는 ${maru.uma_sex_title}들이다.`,
      );
      await you.say_and_wait(
        `무언가를 잃고 고통 속에서 뒤척여 봐야 비로소 자신이 얼마나 오만하게 모든 것을 낭비했는지 뼈에 새겨지는 거겠지.`,
      );
      await maru.say_and_wait(
        `……그렇게 해서야 비로소 고통과 방황 끝에 심혈을 기울인 것이 진짜 빛을 내는 거겠지.`,
      );
      await maru.say_and_wait(
        `방황과 고통이 각오로 바뀌는 그 순간을 계속 기다렸어.`,
      );
      await era.printAndWait(
        `말을 마치자 두 사람은 침묵했다. 그리고 이쪽이 먼저 입을 열었다.`,
      );
      await you.say_and_wait(`${maru.name}, 들어줄래?`);
      await maru.say_and_wait(
        `이미 ${callname}에게 여신의 보좌에서 끌려 내려왔는데, 이번에는 ${callname}, 야한 짓이라도 하려는 거야?`,
      );
      await era.printAndWait(
        `무서워하며 희미하게 떠는(?) ${maru.name}을(를) 보고 방금 과격한 발언 탓에 저도 모르게 얼굴이 달아올랐다.`,
      );
      era.printButton(`「콜록. 사실, 전하고 싶은 말이 있어.」`, 1);
      await era.input();
      await era.printAndWait(
        `트레이너로서의 긍지를 지키기 위해(이제 와 그런 게 남아 있나), 자세를 바로잡고 `,
      );
      era.printButton(`「다시 한번, 빛나는 뒷모습을 보여줘!」`, 1);
      era.printButton(
        `「어떻게든 그 뒷모습, 그 바람을 다시 한번 불게 해줘.」`,
        2,
      );
      await era.input();
      await maru.say_and_wait(`! 응? ${callname}의 부탁이라도, 그건`);
      await you.say_and_wait(
        `아니, 알아. 아니, 나만이 아니야. 아는 사람도 모르는 사람도 모두 그 순간을 기다리고 있어.`,
      );
      await maru.say_and_wait(`${callname}이(가) 그렇게 말해도`);
      era.printButton(`「그 앞에서 ${maru.name}이(가) 보였어?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `노력하면 반드시 성공한다는 환상은 언제나 현실에 깨지는 것 아니야?`,
      );
      await you.say_and_wait(
        `아니. 최종 결과보다 사람은 고통에서 도망치려 하다가 마지막 순간에 깨닫는 거야. 꿈을 좇는 과정에서 가장 귀중한 것은 의미라고.`,
      );
      await you.say_and_wait(
        `게다가 그렇다 해도 그런 자신을 혐오하는 것보다, 방황과 고통 끝에 지쳐 쓰러진 사람들은 세상에서 아름다움이라 부르는 것을 보게 돼.`,
      );
      await you.say_and_wait(
        ` 이렇게 기대하고 바라고 방황했던 것이 마침내 분명해지는 순간을 바라는 거야.`,
      );
      await you.say_and_wait(
        ` 그리고 아름다움을 깨달은 순간. 그 눈부신 아름다움에 완전히 사로잡히는 찰나.`,
      );
      await you.say_and_wait(` 인생은 고난으로 가득해도.`);
      await you.say_and_wait(` 한 번도 겪어보지 못한 일에 당황해도.`);
      await you.say_and_wait(` 그 고통을 남에게 말하지 못해 깊이 눌러둔 마음이라도.`);
      era.printButton(`「나도 그 아름다운 뒷모습을 보고 싶어.」`, 1);
      await era.input();
      await you.say_and_wait(
        ` 하지만 뒤집어 보면 그것은 사람을 다시 태어나게 하는 가장 강한 바람(도움)이야.`,
      );
      await you.say_and_wait(`분명, 분명 그 아름다운 뒷모습을 쫓으며 떠올리게 될 거야!`);
      await you.say_and_wait(`그러니까 힘을 빌려줘.`);
      await era.printAndWait(`${maru.sex}의 두 눈을 그대로 바라봤다.`);
      await maru.say_and_wait(` ${callname}은(는) 나한테 뭘 하게 할 생각이야?`);
      await you.say_and_wait(`학원의 잔디에서 가장 잊을 수 없는 한 장면을 보여줄 거야.`);
      await maru.say_and_wait(`기대하고 있을게?`);
      await era.printAndWait(
        `그 미소는 봄에 처음 피는 꽃 같다. ${maru.name}은(는) 그 순간을 기다리고 있다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_34
  we_47_34: (() => {
    const title = '無風帯';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await era.printAndWait(`손에 든 계산 용지를 바라보며 멍해졌다.`);
      await you.say_and_wait(
        `아니야. 이래서는 ${maru.sex}의 마음속 매듭을 풀 수 없어.`,
        true,
      );
      await era.printAndWait(`눈앞의 계산 용지를 구겨 적당히 옆으로 던졌다.`);
      await era.printAndWait(
        `날아간 종이뭉치는 포물선을 그리며 다른 종이뭉치에 부딪혔다.`,
      );
      await era.printAndWait(`도망치고 싶은 마음, 할 수 없다는 낙담이 이렇게 퍼져간다.`);
      await era.printAndWait(`똑똑.。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `${you.actual_name_with_title} 맞습니까?`,
      );
      era.printButton(`「그렇습니다. 무슨 일이죠?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `아, 트레이너인 ${you.adult_sex_title}, 네. 회장님이 트레이너인 ${
          you.adult_sex_title
        }에게 전할 말씀이 있습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『원하는 답은 이쪽에 있다.』`,
      );
      await you.say_and_wait(`……알겠습니다. 지금 갈게.`);
      await you.say_and_wait(
        `언제부터였지. 아니, 처음부터 곁에서 보고 있었던 건가?`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`${maru.uma_sex_title}의 뒤를 따라갔다.`);
      await you.say_and_wait(
        `심볼리 루돌프는 어디까지 파악하고 있는 거지?`,
        true,
      );
      await era.printAndWait(`이유를 알 수 없는 짜증이 마음을 차지했다.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}`,
        `실례하겠습니다 `,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}의 안내를 받아 밤의 학생회실에 왔다.`,
      );
      await era.printAndWait(`eclipse first，the rest nowhere。`);
      await era.printAndWait(
        `거대한 편액과 서류에 몰두한 황제를 보며 식은땀이 흘렀다.`,
      );
      await emperor.say_and_wait(`왔나?`);
      await era.printAndWait(
        `방금 알아차린 듯 손에 든 일을 멈춘 황제가 여유로운 미소로 이쪽을 바라본다.`,
      );
      await emperor.say_and_wait(`오늘 밤 달은 어떻다고 생각하나?`);
      await you.say_and_wait(
        `오늘 밤 달은 어제와 크게 다르지 않습니다. 게다가 황제 폐하, 또 뵙네요.`,
      );
      await era.printAndWait(
        `${maru.sex}을(를) 화나게 해서는 안 된다. 그러면 무서운 일이 벌어진다.`,
      );
      await era.printAndWait(
        `지나치게 아첨해서도 안 된다. ${maru.sex}의 흥미가 사라진다.`,
      );
      await emperor.say_and_wait(
        `이토록 우수한 트레이너를 만나 트레센 학생회장으로서도 영광이다.`,
      );
      await you.say_and_wait(
        `상대가 도량을 보여줄 때는 거절하지 않는 편이 좋다.`,
        true,
      );
      await emperor.say_and_wait(`그리고.`);
      await era.printAndWait(
        `그 답에는 옳고 그름을 표시하지 않고 황제는 곧 두 번째 질문을 던졌다.`,
      );
      await emperor.say_and_wait(
        `트레이너와 ${maru.uma_sex_title}의 관계는 어떠해야 한다고 생각하지? ${maru.name}의 트레이너.`,
      );
      await era.printAndWait(
        `마지막 호칭만 일부러 강하게 말했다. 아마 힌트일 것이다.`,
      );
      await you.say_and_wait(
        `${maru.uma_sex_title}과(와) 트레이너는 서로 지지하는 관계라고 생각합니다.`,
      );
      await emperor.say_and_wait(`……그리고?`);
      await era.printAndWait(`황제는 장난스럽다는 듯한 얼굴로 이쪽을 바라봤다.`);
      await you.say_and_wait(`예를 들면 이인삼각 같은 관계입니다.`);
      await emperor.say_and_wait(`그 정도라면 왜 지금의 처지에 빠졌지?`);
      await emperor.say_and_wait(
        `트레이너, 즉 ${maru.uma_sex_title}의 지도자로서.`,
      );
      await emperor.say_and_wait(
        `길이 없는 곳에 길을 열고, 이미 난 길에서 새 길을 찾아내며, 타인을 미지의 땅으로 이끄는 자다.`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}이(가) 미래의 방황과 불안에 직면했을 때 그 전망과 자신감을 적절히 관리하는 자다.`,
      );
      await emperor.say_and_wait(`그중 무엇을 해냈지?`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(
        `황제는 트레이너에게 필요한 리더십을 말하고 있다.`,
        true,
      );
      await you.say_and_wait(
        `여기서 ${maru.sex}이(가) 요구하는 것은 ${maru.name}의 트레이너로서 자격을 증명하는 것이다.`,
        true,
      );
      await you.say_and_wait(`그렇다면`, true);
      await you.say_and_wait(
        `……향하는 곳은 ${maru.sex}과(와) 같은 길이다. 배에 타는 조건은 선원이 되는 것.`,
      );
      await you.say_and_wait(
        `매 순간 자신의 목표를 향해 나아가는지 확인한다. 매 순간 선장에 대한 협력이 자발적이고 자기 선택이라는 것을 안다.`,
      );
      await you.say_and_wait(
        `이건 스스로 선택한 조건이며, 자신의 자리에서 자신의 의지로 내린 선택이다.`,
      );
      await you.say_and_wait(
        `불필요한 짐, 오해받을 위험, 혼자만의 고독을 견딘다.`,
      );
      await you.say_and_wait(`……어떤 의미에서는 이상에 바친 공물이다.`);
      await you.say_and_wait(`하지만 이상의 길에 대가가 없을 리는 없다.`);

      await you.say_and_wait(
        `그러니 따르는 것은 선장의 명령이라기보다 자신의 선택이다.`,
      );
      await emperor.say_and_wait(
        `복종은 결국 굴복을 아름답게 바꿔 말한 것뿐이다.`,
      );
      await emperor.say_and_wait(`공포 속에서 대충 만들어낸 거짓말 아닌가?`);
      await you.say_and_wait(
        `……황제 폐하께서는 미꾸라지라는 생물을 아십니까?`,
      );
      await emperor.say_and_wait(
        `논이나 연못에 사는 흔한 생물이지. 그게?`,
      );
      await you.say_and_wait(
        `그렇다면 황제께서도 아시겠죠. 미꾸라지는 잡기 어렵습니다.`,
      );
      await you.say_and_wait(
        `논바닥을 미끄러지며 돌아다녀 잡기 어렵고, 운 좋게 손에 닿아도 금세 미끄러져 빠져나갑니다.`,
      );
      await you.say_and_wait(
        `계속 도망쳐온 우리는 교활한 미꾸라지와 무엇이 다릅니까.`,
      );
      await you.say_and_wait(
        `져야 할 책임 앞을 미끄러져 빠져나가며 사는 것이 고통을 받아들이는 것보다 정말 행복한가.`,
      );
      await you.say_and_wait(`굴복의 근원은 약함이다.`);
      await you.say_and_wait(
        `실패에 익숙해지고 실패를 받아들여 결국 실패에 적응한 인간은 실패하는 법밖에 모르며, 성공할지도 모른다는 꿈을 꾸는 것도 그 꿈을 꿀 용기도 없는 패자다.`,
      );
      await you.say_and_wait(`……실패에서 다음 실패로 나아가는 자에게 성공은 오지 않는다.`);
      await you.say_and_wait(
        `울부짖으며 맨몸으로 태어나 울부짖으며 맨몸으로 떠난다. 무언가를 해 이 세상에 흔적도 남기지 못한 채 미련을 품고 떠나는 건 조금 아깝지 않은가.`,
      );
      await you.say_and_wait(`그래서 하나의 결정을 따른다.`);
      await you.say_and_wait(
        `……트레이너가 되기로 한 이상 가장 힘을 발휘할 수 있는 곳은 당연히 트레센이다.`,
      );
      await you.say_and_wait(
        `나아갈 방향이 ${maru.name}이(가) 바라는 것과 완전히 같은지는 단정할 수 없지만,`,
      );
      await you.say_and_wait(
        `${maru.name}의 신뢰와 사랑은 충분히 의지할 수 있다고 확신한다. 그래서 의심은 행동으로 바꾼다.`,
      );
      await emperor.say_and_wait(`……지휘자로서는 간신히 합격이다.`);
      await emperor.say_and_wait(
        `세계관은 아직 유치하고 가치관도 평범하기 짝이 없다.`,
      );
      await emperor.say_and_wait(
        `유일하게 선에 닿은 것은 확고한 전망뿐이다.`,
      );
      await emperor.say_and_wait(`……하지만 오늘 밤의 요점은 거기가 아니다.`);
      await era.printAndWait(`황제는 미소라는 가면을 쓰고 이쪽을 바라봤다.`);
      await emperor.say_and_wait(`영화는 좋아하나?`);
      await era.printAndWait(`갑자기 그 질문을 던진 황제에게 조금 당황했다.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `모양 좋게 답할 말을 고민하는 사이 황제는 제멋대로 이야기를 이어갔다.`,
      );
      await emperor.say_and_wait(
        `이런 장면을 상상해 봐라. 두 트레이너가 같은 서부극을 골라 이런 장면을 봤다. 보안관과 카우보이가 결투하고 총성이 울린 뒤 한 명은 죽고 한 명은 살아남았다. 관객인 두 사람의 태도는 서로 달랐다——`,
      );
      await era.printAndWait(`황제는 일부러 말을 길게 끌며 대답을 기다렸다.`);
      await you.say_and_wait(
        `영화의 서로 다른 역할에 이입해 그 역할과 같은 희비를 느끼고 있는 것이겠죠.`,
      );
      await emperor.say_and_wait(
        `죽은 쪽이 카우보이를 쫓던 고결한 경찰이고 살아남은 쪽이 지명수배 범죄자여도?`,
      );
      await you.say_and_wait(
        `……범죄자에게 이입한 트레이너는 자신의 미적 쾌락을 깨뜨리지 않기 위해 잠재의식으로 모든 결점을 지웠겠죠.`,
      );
      await you.say_and_wait(
        `……다른 한 사람은 주인공인 범죄자를 인정하지 않고 카우보이의 결함을 견딜 수 없는 것이고요.`,
      );
      await emperor.say_and_wait(`훌륭한 논술이다. 생각보다 우수하군.`);
      await era.printAndWait(`황제는 박수를 쳤다.`);
      await emperor.say_and_wait(
        `그렇다면 진짜 ${maru.name}을(를) 얼마나 이해하고 있지?`,
      );
      await emperor.say_and_wait(
        `자신이 카우보이에 이입한…… 이른바 관객이 아니라고 어떻게 알지?`,
      );
      await emperor.say_and_wait(`수고했다.`);
      await era.printAndWait(`황제는 일어나 멀리 있는 훈련장을 바라봤다.`);
      await era.printAndWait(
        `잔디에서 필사적으로 연습하는 ${maru.uma_sex_title}들의 목소리가 트레센에 울리고 있다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_37
  we_47_37: (() => {
    const title = '마음';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`흥흥~ 이제 거의 연인 사이 아니야?`);
      await era.printAndWait(
        `잡담 중 농담 삼아 ${maru.name}의 집에서 당분간 지내겠다고 했더니 상대는 선뜻 동의했다.`,
      );
      await era.printAndWait(
        `손을 잡고 쇼핑몰을 돌며 생활용품을 고르다 보니 마지막에는 애차에도 다 싣지 못할 양이 됐다.`,
      );
      await era.printAndWait(
        `${maru.name}과(와) 상의한 끝에 물류회사로 전부 배송받기로 했다.`,
      );
      await era.printAndWait(
        `한솥밥을 먹게 되면서 두 사람의 유대는 더욱 깊어졌다.`,
      );
      await you.say_and_wait(
        `슬슬 때가 됐다. 지금이야말로 ${maru.name}에게 그 한 걸음을 내딛게 해야 한다.`,
        true,
      );
      await era.printAndWait(
        `실패에 대한 두려움 때문에 절호의 기회가 손에서 미끄러져 나간다.`,
      );
      await era.printAndWait(`무언가를 좇고 싶은데 손을 뻗지 못한다.`);
      await you.say_and_wait(
        `……${maru.name}에게 내딛게 하는 게 아니라 내가 이 한 걸음을 내딛는 거야.`,
        true,
      );
      await era.printAndWait(
        `산 가구를 확인하며 어떻게 움직일지 생각한다.`,
      );
      era.drawLine({ content: '저녁 식사 후' });
      era.printButton(`「내일 같이 가을을 보러 가지 않을래?」`, 1);
      await era.input();
      await era.printAndWait(
        `분위기가 가장 좋을 때 다음 주 계획을 ${maru.name}에게 전할 생각이다.`,
      );
      await maru.say_and_wait(`그러고 보니 가을을 즐길 계절이 됐네.`);
      await maru.say_and_wait(`그럼 내일 같이 멀리 나가자?`);
      await era.printAndWait(
        `${maru.name}은(는) 젓가락을 놓고 두 손을 모아 미소 지으며 이쪽을 바라봤다.`,
      );
      await you.say_and_wait(`좋아!`, true);
      await you.say_and_wait(`좋지. 예술의 가을, 독서의 가을이라고 하잖아?`);
      await you.say_and_wait(
        `여름의 더위나 겨울의 추위보다 가을의 이 상쾌한 계절이 예술적 감정을 쏟아내기에 가장 좋아.`,
      );
      await you.say_and_wait(
        `게다가 가을에 ${maru.name}과(와) 멋진 추억을 남기고 싶어.`,
      );
      await maru.say_and_wait(
        `어머, ${callname}, 그렇게까지 나를 신경 써주는 거야?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '아가씨' : '멋진 남자'}인 나도 ${callname}과(와) 멋진 추억을 남기고 싶어……`,
      );
      await maru.say_and_wait(`후후~ 내일 일정, 벌써 기대되네♪`);
      await era.printAndWait(`${maru.name}은(는) 무척 기분이 좋아 보인다.`);
      era.drawLine({ content: '翌朝' });
      await maru.say_and_wait(` ${callname}? 일어났어?`);
      await era.printAndWait(
        `아직 스위치가 켜지지 않은 듯한 눈을 비비며 몸부림쳐 일어났다.`,
      );
      era.printButton(`「약속한 기상 시간보다 조금 이르네.」`, 1);
      await era.input();
      await era.printAndWait(
        `아침 일찍부터 오랜만에 활기찬 ${maru.name}의 목소리를 들으니 앞으로에 대한 희망이 솟았다.`,
      );
      await maru.say_and_wait(
        `그러고 보니 최근 미술 전시회가 있나 봐. 거길 첫 목적지로 하자.`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `벌써 점심 가까이 됐네. ${callname}, 내가 만든 도시락 먹어볼래?`,
      );
      era.drawLine();
      await you.say_and_wait(`크레인 게임은 정말 어렵네.`);
      await era.printAndWait(
        `${maru.name} 인형을 안은 ${maru.teen_sex_title}이(가) 행복한 듯 미소 짓고 있다.`,
      );
      await you.say_and_wait(`충분해.`);
      era.drawLine();
      await era.printAndWait(`마지막 목적지는 학원 옥상이었다.`);
      await maru.say_and_wait(`바람도 성장하는 거겠지.`);
      await era.printAndWait(
        `${maru.name}의 시선을 따라 학원 전체를 바라봤다. 금빛 은행잎이 바람을 타고 흩날린다.`,
      );
      await maru.say_and_wait(
        `새로 태어난 바람은 언제나 근심 없이 하늘로 날아가.`,
      );
      await maru.say_and_wait(
        `하지만 마른 잎의 슬픔에 닿고 나면 ${maru.sex}의 발걸음은 무거워져.`,
      );
      await maru.say_and_wait(
        `${maru.sex}도 마른 잎에게 하늘의 자유를 느끼게 해주고 싶어 해. 그래서 부드럽게 끌어안고 함께 걱정 없는 하늘로 데려가려 하지.`,
      );
      await maru.say_and_wait(
        `하지만 마른 잎을 붙드는 대지가 결국 바람의 포옹을 이겨. 마른 잎은 하늘로 날아가는 도중 날개가 꺾여.`,
      );
      await maru.say_and_wait(`마지막에 마른 잎은 대지로 돌아가.`);
      await era.printAndWait(
        `${maru.teen_sex_title}의 성역으로 발을 내딛기 시작했다.`,
      );
      await you.say_and_wait(`그래도 마른 잎은 바람의 인도로 자신의 결정을 내렸어.`);
      await you.say_and_wait(`이 과정만큼 마른 잎의 생명력을 보여주는 것은 없어.`);
      era.printButton(`「${maru.name}…… 할 말이 있어.」`, 1);
      await era.input();
      await maru.say_and_wait(`응?`);
      await era.printAndWait(
        `석양의 잔광이 ${maru.name}의 긴 머리에 내려앉아 ${maru.sex}에게 금빛을 입혔다.`,
      );
      era.printButton(`「다음 주를 제대로 기대하고 있어줘!」`, 1);
      era.printButton(`${maru.sex}에게 그때 직접 보여준다.`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `그럼 제대로 기대하고 있을게. ${callname}이(가) 얼마나 큰 서프라이즈를 줄지.`,
        );
        await era.printAndWait(
          `무언가를 어렴풋이 눈치챘는지 ${maru.name}은(는) 눈을 깜빡였다.`,
        );
      } else {
        await you.say_and_wait(`앞으로 반드시 깜짝 놀라게 해줄게!`, true);
        await era.printAndWait(`${you.name}은(는) 숨을 내쉬며 다음 주를 기다렸다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_38
  we_47_38: (() => {
    const title = '無風';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, taste, you, callname) => {
      maru.print(`슬슬 끝내야 해.`);
      maru.print(
        `달리는 것이 기쁨을 낳지 않는다면 아무리 노력해도 한 가지 질문에 답할 수 없어.`,
      );
      maru.print(`왜 나는 이 고통을 견뎌야 하지?`);
      maru.print(
        `그러니 후배들이 레이스장에서 활약하는 모습을 이렇게 지켜보면 돼!`,
      );
      maru.print(`지금의 나는 특히 그걸 잘하니까!`);
      await maru.say_and_wait(`……`);
      maru.print(`그런데 왜 가슴은 아직 조금 비어 있는 걸까?`);
      maru.print(`무언가 찾아야 할 답이 기다리고 있는 것 같아?`);
      await maru.say_and_wait(`답, 인가?`);
      maru.print(
        `뭐, 됐어. 기분을 추스르고 좋아하는 ${callname}을(를) 찾으러 가자!`,
      );
      maru.print(
        `앞으로 어떤 길을 선택해도 ${callname}은(는) 다정하게 격려해 주겠지.`,
      );
      maru.print(`그러고 보니 ${callname}이(가) 선물을 준다고 했지.`);
      await maru.say_and_wait(`기대하며 기다리고 있을게? ${callname}?`);
      era.drawLine({ content: '理事長室' });
      await era.printAndWait(
        `황제와 줄곧 ${maru.name}을(를) 지지해 온 ${maru.uma_sex_title}들의 도움으로 오늘까지 서명의 90%를 모았다.`,
      );
      await era.printAndWait(
        `이사장실 문을 가볍게 두드리고 들어오라는 목소리를 들은 뒤 문을 열었다.`,
      );
      await taste.say_and_wait(
        `질문! 이 트레이너는 밤의 훈련장을 빌려 무엇을 하려는 거지?`,
      );
      await era.printAndWait(`간단히 인사한 뒤 단도직입적으로 구상을 꺼냈다.`);
      await you.say_and_wait(
        `담당 ${maru.uma_sex_title} ${maru.name}에게 다시 한번 희망을 불태우게 해주고 싶습니다.`,
      );
      await taste.say_and_wait(
        `놀람! 왜 꼭 트레센의 훈련장이어야 하지?`,
      );
      await you.say_and_wait(
        `이 훈련장은 여기서 땀을 흘린 수많은 ${maru.uma_sex_title}의 흔적을 품고 있습니다. ${maru.uma_sex_title}들이 필사적으로 도전하는 모습이야말로 ${maru.name}이(가) 바라는 것입니다.`,
      );
      await you.say_and_wait(
        `이것이 ${maru.uma_sex_title}들의 연명 청원서입니다.`,
      );
      await era.printAndWait(
        `허리를 숙여 빼곡한 서명이 적힌 종이를 눈앞의 ${maru.teen_sex_title}에게 건넸다.`,
      );
      await era.printAndWait(
        `상대는 서명을 하나하나 확인한다. ${maru.teen_sex_title}의 머리 위 새끼고양이는 낯선 이쪽에 흥미가 있는지 야옹야옹거리며 계속 움직였다.`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}은(는) 발끝을 들어야 이쪽과 눈을 맞출 수 있지만 지금은 숨조차 크게 쉬지 못한다. 최종 선고를 기다리고 있다.`,
      );
      await taste.say_and_wait(
        `감동! 트레센의 ${maru.uma_sex_title}들은 상상 이상으로 단결해 있군.`,
      );
      await taste.say_and_wait(`이 트레이너.`);
      era.printButton(`「네!」`, 1);
      await era.input();
      await taste.say_and_wait(`동의! 이 활동에 나도 참가하겠다!`);
      await era.printAndWait(
        `${maru.teen_sex_title}은(는) 만년필을 들어 정성스럽게 아키카와 야요이의 이름을 종이에 적어 돌려주었다.`,
      );
      era.printButton(`「이사장님, 감사합니다!」`, 1);
      await era.input();
      await era.printAndWait(
        `미소 짓는 ${maru.teen_sex_title}은(는) 「유! 열!」이라고 적힌 부채를 펼친다. 곁의 ${
          minoru.name
        }은(는) 고뇌와 기쁨이 뒤섞인 복잡한 얼굴로 ${taste.name}과(와) ${you.name}을(를) 바라보고 있다.`,
      );
      await era.printAndWait(`종이를 조심스럽게 챙겨 이사장실을 나왔다.`);
      era.drawLine();
      maru.print(
        ` ${callname}은(는) 함께 상점가에 가자며 준비한 쿠폰을 꺼냈다.`,
      );
      maru.print(
        `언행은 꽤 수상하지만 ${callname}에게 데이트 신청을 받는 일은 드물다.`,
      );
      maru.print(`미끼치고는 너무 호화롭네.`);
      maru.print(
        `미소 지으며 이 선물을 받아든 뒤 ${callname}과(와) 사이제리야에서 간단히 점심을 먹고 함께 영화를 봤다.`,
      );
      maru.print(
        `평일이라 그런지 이번 상영의 관객은 의외로 적어 두 사람이 나란히 앉을 자리를 잡기는 쉬웠다.`,
      );
      maru.print(
        `${maru.uma_sex_title}이(가) 연약함에서 천천히 성장해 가는 격려 영화인 듯하다. 수많은 고난 속에서도 이를 악물고 나아가는 ${maru.uma_sex_title}의 모습을 보며 저도 모르게 ${maru.sex}에게 박수를 보내고 싶어졌다.`,
      );
      await you.say_and_wait(
        `이런 장면은 몇 번을 봐도 가슴에 자연스럽게 감동과 힘이 솟아나네.`,
      );
      maru.print(`깊이 동감해.`);
      maru.print(
        `영화가 끝난 뒤 근처에서 가장 어렵다는 크레인 게임에 도전했고 예상대로 실패했다.`,
      );
      maru.print(
        `위로하려던 ${callname} 쪽이 오히려 열이 올라 어떻게든 인형을 뽑겠다고 나섰다.`,
      );
      maru.print(`위로받는 쪽이 위로하는 역할이 되다니. 이것도 운명의 묘미겠지.`);
      era.printButton(`「오늘 밤 같이 트레센을 보러 가지 않을래?」`, 1);
      await era.input();
      maru.print(
        `백화점의 고급 레스토랑에서 식사하며 그렇게 말하는 ${callname}.`,
      );
      await maru.say_and_wait(
        `어머, ${callname}, 드디어 이 선물의 정체를 밝히는 거야?`,
      );
      await you.say_and_wait(`아니, 너무 흥분해서 포크도 제대로 못 잡겠어.`);
      await maru.say_and_wait(`그렇게 흥분했어?`);
      await you.say_and_wait(`응. 그 정도의 선물이야. 반드시 기억에 남을 거야.`);
      maru.print(` ${callname}이(가) 농담에 진지하게 답하니 저도 모르게 기대하기 시작했다.`);
      await maru.say_and_wait(`그럼 앞으로 제대로 즐겨야겠네!`);
      maru.print(`법정 음주 연령은 내년이지만 이 정도는 괜찮겠지?`);
      maru.print(
        `술을 마신 탓에 이야기를 나누며 ${callname}과(와) 천천히 트레센으로 향했다.`,
      );
      maru.print(
        `이야기하다 화제가 예전에 은퇴한 ${maru.uma_sex_title}에게 갑자기 향했다. 가슴이 갑자기 아팠다.`,
      );
      await you.say_and_wait(
        `그러고 보니 전에 은퇴한 ${maru.uma_sex_title}은(는) 지금 트레이너 쪽을 목표로 노력하고 있어.`,
      );
      await maru.say_and_wait(`트레이너를 목표로 하는 것도 하나의 길이네.`);
      maru.print(`${maru.sex}은(는) 드디어 자기 목표를 찾은 것 같아.`);
      maru.print(`……가슴이 갑자기 아팠다.`);
      await you.say_and_wait(
        `타고나길 어떤 영역에 맞지 않는 사람도 있어. 하지만 가진 자원을 다시 생각하고 다른 방향으로 나아가면 큰 서프라이즈가 기다리고 있을지도 몰라!`,
      );
      maru.print(`무슨 말을 해야 할지 몰라 침묵을 지켰다.`);
      maru.print(
        `트레센 학원까지 이제 길 하나. 무슨 행사가 있는지 웃음소리가 귀에 들어왔다.`,
      );
      maru.print(`이상하네. 평소 트레센이 이렇게 시끄러웠나?`);
      maru.print(`이게 ${callname}이(가) 준비한 선물.`);
      maru.print(`정말이지, 꽤 많이 돌아왔네.`);
      await maru.say_and_wait(`같이 보러 가자?`);
      maru.print(`그렇게 ${callname}의 손을 잡아끌며 트레센으로 달렸다.`);
      maru.print(`이렇게 즐거운 달리기, 그립네.`);
      maru.print(
        `목소리가 울려오는 방향을 따라 훈련장 쪽으로 천천히 향했다.`,
      );
      maru.print(
        `축제 같다. 트레이너와 ${maru.uma_sex_title}들이 담소를 나누고 잔디 위에서 땀을 흘리거나 관중석에서 이야기하며 환호를 지르고 있다.`,
      );
      maru.print(
        `이사장과 하야카와${
          maru.adult_sex_title
        }이(가) 온 것을 알아차렸다. 전자는 「유! 열!」이라 적힌 부채를 펼치고, 후자는 미소를 보내준다. 덤으로 이사장 머리 위의 새끼고양이가 기분 좋게 꼬리를 흔든다.`,
      );
      maru.print(`누구나 만족스러운 미소를 띠고 있다.`);
      maru.print(`축제를 즐기고 있는 것 같다.`);
      await maru.say_and_wait(`그립네.`);
      maru.print(`내 세계는 한때 색으로 가득했어.`);
      maru.print(
        `어릴 적 보았던 새빨간 슈퍼카. 멋진 외관에 당시의 나는 깊이 매료됐어.`,
      );
      maru.print(
        `그 아이의 속삭임이 들렸어. 나처럼 자유롭게 달리고 싶어 했지.`,
      );
      maru.print(
        `그래서 어린 나는 몰래 다짐했어. 나중에 차를 산다면 이 차를 고르겠다고.`,
      );
      maru.print(
        `함께 울리는 날을 맞기 위해 카탈로그 사진을 보며 운전 기술을 필사적으로 연습했어.`,
      );
      maru.print(`면허를 딴 날, 내 면허증을 내 손으로 받았어.`);
      maru.print(`꿈 같은 비현실감. 현실에 존재하는지 몇 번이고 확인했어.`);
      maru.print(
        `훈련에서 맛본 온갖 희로애락. 얻은 기쁨과 함께 방황도 조용히 찾아왔어.`,
      );
      maru.print(
        `그때의 내가 가장 행복한 상태였을지도? 아니, 지금의 매일도 정말 즐겁지만.`,
      );
      maru.print(
        `승리 후의 영예보다 레이스 전에 최근 이야기를 나누고, 잔디 위에서 땀을 흘리며 달리고, 거친 호흡 속에서 두 다리에 더 강한 힘을 폭발시키는 것.`,
      );
      maru.print(`그————세 여신만이 아는 세계에 도달할 때까지.`);
      maru.print(
        `모두가 달리는 기쁨을 느낄 수 있다면 내가 꿈꾸는 세계도 멀지 않을 거야.`,
      );
      maru.print(`하지만 이상과 현실은 영원히 모순될지도 몰라.`);
      maru.print(
        `많은 ${maru.uma_sex_title}은(는) 그 기쁨을 느끼기도 전에 겹겹의 가시에 옷이 걸려 걸음을 멈추게 돼.`,
      );
      maru.print(`비명을 지르며 누군가 ${maru.couple_title}을(를) 구해주기를 기도해.`);
      maru.print(
        `하지만 유일한 해결책은 ${maru.couple_title} 자신이 깨달아야만 빠져나올 수 있어.`,
      );
      maru.print(
        `기도해. 재능 없는 자신을 ${maru.couple_title}이(가) 용서하고, 그 무거운 짐(밤낮으로 무능한 자신을 저주하는 짐)을 내려놓게 해달라고.`,
      );
      maru.print(`그렇게 말하기 어려운 슬픔은 흑백 두 색의 슬픔이 됐어.`);
      maru.print(`내 세계에 말없이 서 있는 침묵의 성벽, 회색 유령.`);
      maru.print(`유령처럼 울리고 떠돌며 비명을 질러.`);
      maru.print(
        `방황하는 ${maru.uma_sex_title}들을 위해서이자 나 자신을 위해서이기도 해.`,
      );
      maru.print(`후배들의 숭배, 잔디에서 느낀 바람, 그리운 과거.`);
      maru.print(
        `하지만 과거의 추억에만 잠겨 후회라는 쾌감을 짜내는 건 옳지 않아.`,
      );
      maru.print(`그래서 미래로 나아가 보기로 했어.`);
      maru.print(`내가 고른 길이 옳은지 나도 몰라.`);
      maru.print(
        `……어쩌면 과거의 자장가 속에서 기회를 기다리는 편이 옳았을지도 몰라.`,
      );
      maru.print(`이런 나는 준비가 부족하고 각오도 열정이 낳은 산물에 불과해.`);
      maru.print(`외진 길에서 시동이 꺼지는 곤란을 겪을지도 몰라.`);
      maru.print(`무엇이 이걸 구할 수 있을까?\n`);
      maru.print(`의미. 그것이 내가 찾은 답이야.`);
      maru.print(
        `『미래의 어느 순간, 나는 무엇을 했다』. 그 의미가 앞으로 겪을지도 모르는 두려운 일을 구해주기에 충분해.`,
      );
      maru.print(
        `자기 관점만으로 보지 않아. 인간은 원래 시간을 싣고 어딘가로 흘러가는 운송수단이니까.`,
      );
      maru.print(`세계여, 너는 이렇게나 아름답구나.`);
      maru.print(
        `자신의 욕망을 위해서도 타인을 위해서도 아닌 채 나아간다. 바람의 시선으로 눈앞의 ${maru.uma_sex_title}을(를) 본다.`,
      );
      maru.print(
        `산들바람이 되고 싶어. 아니, 나(산들바람)는 시간 위에 자신의 의미를 새겼어.`,
      );
      maru.print(`결말이 어떻든 바람은 영원히 나와 함께 있어.`);
      maru.print(`빨리 트레이너 곁으로 돌아가야 해.`);
      await maru.say_and_wait(
        `트레이너에게 다시 태어난 내 모습을 보여줘야지♪`,
      );
      maru.print(`정말 그걸로 괜찮아?`);
      await maru.say_and_wait(`내 마음을 배신하고 싶지 않아. 그러니까 이제 충분해.`);
      await maru.say_and_wait(
        `몸부림치며 마지막 힘으로 다시 한번 시도한다. 이번에는 가슴을 스치는 바람만을 위해.`,
      );
      maru.print(`그게 네 미학이야?`);
      await era.printAndWait(
        `한숨짓던 ${maru.name}은(는) 그 자리에서 사라지고 새로 태어난 자아가 주변 공기를 다시 휘저었다.`,
      );
      await era.printAndWait(
        `부드러운 바람처럼 따뜻하게 웃는 그 사람 곁으로 빨리 가고 싶다.`,
      );
      await era.printAndWait(`그날, 다정한 바람이 태어났다.`);
      era.drawLine();
      await era.printAndWait(`${maru.name}의 반응을 초조하게 기다리고 있다.`);
      await era.printAndWait(
        `슬픔? 고통? 후련함? 빈약한 어휘로는 눈앞의 ${maru.teen_sex_title}의 마음속을 표현할 수 없다.`,
      );
      await era.printAndWait(
        `시간은 달팽이가 기어간 흔적 같기도 하고 비행기가 남긴 비행운 같기도 하다.`,
      );
      await era.printAndWait(`하지만 지금은 기다릴 수밖에 없다. 가슴속 두려움에게 그렇게 말했다.`);
      await era.printAndWait(
        `운명의 톱니바퀴는 잘못을 저지른 순간 멈추지 않는다. 잘못 뒤에 자신이 다음에 무엇을 하는지가 가장 중요하다.`,
      );
      await era.printAndWait(
        `오래도록 은근히 아픈 교훈을 얻었기에 세계에 대한 이해는 깊어졌다.`,
      );
      await era.printAndWait(`${maru.name}이라면 분명 비슷한 생각을 할 것이다.`);
      await era.printAndWait(
        `그렇게 모든 것을 정리하고 앞으로의 일과 마주한다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = '여름 합숙 종료・잊을 수 없는 연회';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`올해 여름 합숙은 정말 알찼다.`);
      await era.printAndWait(
        `모래사장에서 배구나 수박 깨기 같은 평범한 운동뿐 아니라 후배 ${maru.uma_sex_title}들의 고민을 듣고 알맞은 조언을 해주는 것도 즐거움 중 하나였다.`,
      );
      await era.printAndWait(`여름 합숙 마지막 날, 기숙사 파티에 참가했다.`);
      await era.printAndWait(
        `스페셜 위크와 사쿠라 치요노 오가 동경하는 표정으로 ${maru.name}의 지난 2년 경험을 듣고, 사일런스 스즈카도 ${maru.name}에게 도전을 신청했다.`,
      );
      await era.printAndWait(`밤늦게가 되어서야 모두 만족하며 흩어졌다.`);
      await you.say_and_wait(
        `여름 합숙도 이제 곧 끝난다. 다음은 천황상(가을)인가.`,
        true,
      );
      await you.say_and_wait(
        `레이스보다 역시 ${maru.name}의 미소가 제일 좋다.`,
        true,
      );
      era.printButton(`「좋아! 트레센에 돌아가서도 전력으로 간다.」`, 1);
      await era.input();
      await era.printAndWait(`혼잣말을 하며 문을 열자,`);
      await you.say_and_wait(`이상하네, 잠겨 있지 않아?`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(
        `문 너머에 나타난 ${maru.name}이(가) 달려들었다.`,
      );
      await maru.say_and_wait(`오늘 밤은 같이 잘래?`);
      await you.say_and_wait(`합숙 중에 같이 자는 건 아무리 그래도……`);
      await maru.say_and_wait(
        `이사장 ${maru.adult_sex_title}에게도 말해뒀어.`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는)  ',
        you.get_colored_name(),
        '이(가) 모르는 사이 이사장과 무언가 상의한 모양이다.',
      ]);
      await maru.say_and_wait(
        `이사장도 우리가 청춘을 제대로 즐기길 바라고 있어. 그러니까 ${callname} `,
      );
      await era.printAndWait(`${maru.name}은(는) 얼굴을 새빨갛게 붉히고 이쪽을 바라봤다.`);
      era.printButton(`「한다」`, 1);
      era.printButton(`「그만두자」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`앞으로 잘 부탁해♪`);
      } else {
        await maru.say_and_wait(
          `뭐야? ${callname}, 이렇게 아름다운 ${maru.teen_sex_title}에게도 관심이 안 생기는 거야? ${
            maru.elder_sibling_sex_title
          }、 내 매력을 의심하게 되네.`,
        );
        await era.printAndWait(
          `귀를 축 늘어뜨린 ${maru.name}과(와) 평소 모습의 큰 격차가 오히려 짓궂은 마음을 자극했다.`,
        );
        await era.printAndWait(`억지로 눌러뒀던 욕망이 다시 고개를 들었다.`);
        await maru.say_and_wait(`그럼 앞으로 잘 부탁해, ${callname}♪`);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_43
  we_95_43: (() => {
    const title = '다정한 바람';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      maru.print(`뜻밖의 이른 기상.`);
      maru.print(`졸린 눈을 비비고 뒤척여도 잠이 오지 않는다.`);
      maru.print(`번민을 견디지 못하고 그대로 일어났다.`);
      maru.print(`졸린 눈을 비빈 뒤 창문을 열었다.`);
      maru.print(`상쾌한 공기가 이 아파트를 찾아왔다.`);
      maru.print(
        `밖의 금빛 잎도 어미 나무의 품을 떠나 가을바람의 인도로 이곳을 찾아왔다.`,
      );
      await maru.say_and_wait(`네!`);
      maru.print(`작은 손님을 미소로 맞이한다.`);
      maru.print(`주인의 초대를 받은 작은 손님은 책상 위에 사뿐히 내려앉았다.`);
      await maru.say_and_wait(
        `……그러고 보니 요즘 낙엽으로 만든 책갈피가 유행이지.`,
      );
      maru.print(`잎을 정성스럽게 씻은 뒤 사전으로 평평하게 눌렀다.`);
      maru.print(`상쾌한 공기가 이 아파트를 찾아왔다.`);
      await maru.say_and_wait(`이제 해가 뜨기를 기다리면 돼.`, true);
      maru.print(
        `아침의 옅은 안개는 아직 걷히지 않았고 달은 하늘에 걸려 있으며 별들이 점점이 떠 있다.`,
      );
      await maru.say_and_wait(`곧 겨울이네.`, true);
      maru.print(`봄에 싹튼 잎은 여름에 무성해지고 가을에 시들어 마지막에는 겨울의 품으로 돌아간다.`);
      await maru.say_and_wait(`나도 열심히 피어났던 걸까?`, true);
      maru.print(
        `갑작스러운 강풍에 눈을 거의 뜰 수 없다. 금빛 낙엽은 아쉬운 듯 가지의 품을 떠나 뜨거운 바람을 따라 마지막 여행을 향한다.`,
      );
      maru.print(
        `시냇물처럼 내달리는 수많은 낙엽이 바람의 인도로 대지의 바다에 즐겁게 흘러든다.`,
      );
      await maru.say_and_wait(
        `귀여운 후배들이 마지막에 어디까지 도달할지 기대되네. 음, 그렇게 생각하니 프레셔.`,
      );
      maru.print(`낙엽에게 말하는 듯하면서도 자신에게 이야기하는 듯하다.`);
      await maru.say_and_wait(`후배들이 나를 넘어서는 날을 기다린다.`, true);
      maru.print(`후배들이 자신의 등을 따라잡는 날까지 ${maru.name}은(는) 계속 기다린다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_9
  we_95_9: (() => {
    const title = '炎炎';
    /**
     * 皇帝と마루젠 スキーが会い、違う景色を見せたい
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`긴 겨울이 마침내 지나고 봄바람이 다시 트레센을 분다.`);
      await era.printAndWait(
        `고통과 방황을 지나 스스로 고른 방향으로 다시 달리는 너희——`,
      );
      await era.printAndWait(`그리고 오래 기다려온 심볼리 루돌프.`);
      await emperor.say_and_wait(`드디어 이 순간을 기다려냈군.`);
      await era.printAndWait(`가벼운 걸음으로 황제는 훈련장에 왔다.`);
      await emperor.say_and_wait(
        `아무래도 예전 논쟁의 결과는 결국 내 승리인 것 같군.`,
      );
      await emperor.say_and_wait(
        `지옥 밑바닥에서 기어 올라온 기분은 어떻지? ${maru.name}.`,
      );
      await era.printAndWait(
        `주변의 모든 것을 무시하고 황제는 곧장 ${maru.name}에게 향했다.`,
      );
      await maru.say_and_wait(
        `험난한 시간을 보냈지만 고된 노력의 쾌감은 맛봤어.`,
      );
      await emperor.say_and_wait(
        `호오? 지옥의 맹렬한 불길은 너를 태워 없애지 못했나?`,
      );
      await maru.say_and_wait(`지옥을 지나는 길이 에덴에 가장 가까운 법이야♪`);
      await emperor.say_and_wait(`……점점 더 기대되는군.`);
      await maru.say_and_wait(`칭찬으로 받아들여도 돼? 땡큐.`);
      await emperor.say_and_wait(`……땡큐인가? Thank you, 후후.`);
      await emperor.say_and_wait(
        `본론으로 돌아가지. ${maru.uma_sex_title}들의 마음속 아이돌이 되겠다고 각오했다면 산산이 부서질 준비도 되어 있겠지.`,
      );
      await emperor.say_and_wait(`너는 사랑 때문에 그런 행동을 한 건가?`);
      await maru.say_and_wait(
        `내가 하는 일이 반드시 옳다고 단언할 수는 없어. 하지만 한 가지는 분명해.`,
      );
      await maru.say_and_wait(`그걸 위해 분투하는 매일, 나는 정말 행복해⭐`);
      await emperor.say_and_wait(
        `자신의 길을 찾았다면 그때 다시 만나자.`,
      );
      await era.printAndWait(`황제는 말을 마치고 훈련장을 나갔다.`);
      era.printButton(`「드디어 황제와 대결인가?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `회장과 대결할 수 있다니 정말 재미있는 전개일지도 모르겠네.`,
      );
      await maru.say_and_wait(
        `이 가장 성대한 무대 위에서 이가 떨릴 만큼의 흥분이 기다리고 있을지도 몰라.`,
      );
      await maru.say_and_wait(`함께 힘내자, ${callname}♪`);
      await era.printAndWait(`그러기 위해 다음 목표는 이미 정해졌다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_24
  ws_24: (() => {
    const title = '훈련이 끝난 평범한 하루';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`오늘 훈련은 여기까지, 수고했어.`);
      await maru.say_and_wait(`${callname}도 수고했어.`);
      await era.printAndWait(
        `${maru.name}은(는) ${you.name}에게서 수건을 받아 이마의 땀을 조금 닦고 ${you.name}에게 돌려줬다.`,
      );
      await you.say_and_wait(
        `이 페이스로 가면 앞으로의 아사히배 우승도 보이기 시작한다.`,
      );
      await maru.say_and_wait(
        `G1 레이스에서는 어떤 성황을 볼 수 있을까? 기대되네~`,
      );
      await you.say_and_wait(`${maru.name}, 달리는 건 즐거워?`);
      await era.printAndWait(
        `수건을 다시 짠 뒤 옆의 배낭에서 여분 수건을 꺼내 ${maru.uma_sex_title}의 흐트러진 긴 머리를 정성스럽게 닦아줬다.`,
      );
      await maru.say_and_wait(
        `흩어진 머리를 핀으로 고정하지 않으면 달릴 때 눈에 닿아 아파. 나도 모르게 너무 신나버렸네.`,
      );
      await maru.say_and_wait(
        `역시 헤어스타일을 바꿔서 기분 전환하는 편이 좋을까, ${callname}은(는) 어떻게 생각해?`,
      );
      await you.say_and_wait(`나도 그렇게 생각해.`);
      await you.say_and_wait(
        `머리를 묶어 긴 포니테일로 단단히 고정하면 달리기에도 영향이 없겠지.`,
      );
      await you.say_and_wait(
        `게다가 모두에게 ${maru.name}의 다른 모습을 보여줄 수 있는 것도 나쁘지 않아.`,
      );
      await maru.say_and_wait(
        `응——어떻게 하는 게 좋을까? ${callname}의 제안도 좋지만`,
      );
      await maru.say_and_wait(`아, 아파.`);
      await you.say_and_wait(`미안, 이 근처 머리카락이 엉켜 있었어.`);
      await maru.say_and_wait(`땡큐.`);
      await maru.say_and_wait(`오늘은 애차와 바닷바람을 즐기면서 기분 전환하자♪`);
      await maru.say_and_wait(`${callname}, 정문까지 데려다줄래?`);
      era.printButton(`「같이 가자」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name}과(와) ${maru.name}은(는) 황혼의 오솔길을 나란히 걸었다.`,
      );
      await you.say_and_wait(
        `그러고 보니 ${maru.name}, 혼자 아파트에서 통학하는 건 불편하지 않아?`,
      );
      await era.printAndWait(
        `기숙사에 사는 다른 ${maru.uma_sex_title}들과 달리 ${maru.name}은(는) 계속 학원 밖 아파트에 살고 있다.`,
      );
      await era.printAndWait(
        `그 특별함에 호기심이 생긴 ${you.name}은(는) ${maru.name}에게 답을 구했다.`,
      );
      await maru.say_and_wait(
        `학원 내 통금보다 교외에 사는 내가 더 자유로울지도 모르지.`,
      );
      await maru.say_and_wait(
        `하지만 매일 다른 학생들보다 일찍 일어나야 하는 것도 자유의 대가야.`,
      );
      await you.say_and_wait(
        `기회가 있으면 ${maru.name}의 아파트에서 한동안 살아보고 싶네. ${maru.name}은(는) 어떻게 생각해?`,
      );
      await maru.say_and_wait(
        `뭐야? ${callname}이라면 재미있을지도 모르겠네.`,
      );
      await maru.say_and_wait(
        `${callname}, 방금 한 말 잊지 마? 한 말은 언젠가 돌아오는 법이야.`,
      );
      era.printButton(`「물론이지.」`, 1);
      await era.input();
      await maru.say_and_wait(`후후~ 나도 기대돼.`);
      await era.printAndWait(
        `잡담을 나누다 보니 어느새 학원 정문에 도착해 있었다.`,
      );
      await maru.say_and_wait(
        `${callname}과(와) 함께 있는 시간은 언제나 이렇게 짧네.`,
      );
      await you.say_and_wait(
        `짧기 때문에 이 행복한 시간을 두 배로 소중히 여기는 거야. ${maru.name}에게도 좋은 추억이 되겠지?`,
      );
      await maru.say_and_wait(`즐거운 추억이야. 내일 또 봐, 안녕~`);
      await era.printAndWait(
        `엔진 시동 소리와 함께 ${maru.name}의 뒷모습은 시야 끝에서 사라졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_30
  ws_30: (() => {
    const title = '세 여신의 아이들';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`안뜰 세 여신상 앞`);
      await era.printAndWait(
        `하루 종일 소란스러운 잔디와 교사에서 떨어진 이곳은 ${maru.uma_sex_title}들의 마음의 의지처인 성지다.`,
      );
      await era.printAndWait(
        `이곳에는 세 여신상이 모셔져 있다. 이름은 달리 아라비안, 고돌핀 아라비안, 바이얼리 터크.`,
      );
      await era.printAndWait(
        `맑은 물이 여신들이 받치고 있는 물병에서 연못으로 흘러든다.`,
      );
      await era.printAndWait(`그리고 이곳에 또 새로운 손님이 왔다.`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`황제는 세 여신상을 바라보고 있다.`);
      await emperor.say_and_wait(`아직 오지 않는 건가?`, true);
      await era.printAndWait(
        `내 이름으로 최근 눈여겨보던 ${maru.uma_sex_title}을(를) 불렀다. 하지만 상대의 태도는 아직 애매하다.`,
      );
      await era.printAndWait(
        `황제의 위압을 두려워해서인가. 뭐, 됐다. 그런 약한 ${maru.uma_sex_title}에게 등을 맡길 수는 없지.`,
      );
      await era.printAndWait(`우리가 만든 에덴에서 자유롭게 살아가면 된다.`);
      await emperor.say_and_wait(`그럼 슬슬 돌아갈까.`);
      await era.printAndWait(`황제의 말은 안뜰로 향하는 발소리에 끊겼다.`);
      era.drawLine();
      era.printButton(`「어라, 장소를 잘못 찾았나.」`, 1);
      await era.input();
      await era.printAndWait(
        `대화를 이어가지 못해 혼란스러워진다. 귀에 들어오는 것은 여신상이 받치고 있는 물병의 물이 연못에 떨어져 튀는 소리뿐이다.`,
      );
      await era.printAndWait(
        `다행히 황제는 ${you.name}이(가) 온 것을 신경 쓰지 않고 시선을 여신상으로 향하고 있었다.`,
      );
      era.printButton(`「다행이다.」`, 1);
      await era.input();
      await you.say_and_wait(`그러고 보니.`);
      await era.printAndWait(
        `아주 오래전, 아직 어렸을 때 혼자 신사에 왔을 때도 이런 일이 있었던 것 같다.`,
      );
      await era.printAndWait(
        `세 여신상을 바라보며 주변 소리를 무시하고 추억에 잠긴다.`,
      );
      await era.printAndWait(
        `친구들과 숨바꼭질을 하다가 술래를 피하려고 일부러 외진 구석에 숨었다.`,
      );
      await era.printAndWait(`기다리다 그만 잠들어버렸다.`);
      await era.printAndWait(`그렇게 세 여신님을 만났다.`);
      await era.printAndWait(
        `아름다운 붉은 긴 머리는 타오르는 불꽃을 떠올리게 했고, 다정한 ${
          maru.sex
        }은(는) 당황한 ${you.name}을(를) 달래려 했다.`,
      );
      await era.printAndWait(
        `당시 들었던 위로의 말은 더는 기억나지 않는다. 하지만 그 다정함의 감촉은 빛바래지 않는 앨범의 글자처럼 ${you.name}의 기억에 남아 있다.`,
      );
      await emperor.say_and_wait(
        `——그러므로 짐에게는 허가도 찬동도 필요 없다. 왕이란 스스로 선두에 서는 자다.`,
      );
      await era.printAndWait(
        `시끄러운 목소리가 ${you.name}의 생각을 끊고 다리의 저림이 ${you.name}의 의식을 현실로 되돌렸다.`,
      );
      await you.say_and_wait(`하~아.`);
      await era.printAndWait(
        `저도 모르게 하품하며 이 따뜻한 여운을 음미하면서 시선을 여신상에서 안뜰 반대편으로 옮겼다.`,
      );
      await era.printAndWait(
        `일부러 ${you.name}에게서 떨어져 무언가 이야기하는 듯하다.`,
      );
      await you.say_and_wait(`돌아갈까.`, true);
      await maru.say_and_wait(
        `${callname}? 후배들이 당근을 좀 보내줬어. 오늘은.`,
      );
      await era.printAndWait(
        `${maru.name}은(는) 안뜰을 나가는 가장 가까운 길을 막고 있었다. 게다가.`,
      );
      await emperor.say_and_wait(`${maru.name}, 오랜만이군.`);
      await maru.say_and_wait(`루돌프짱, 오늘도 건강해 보이네.`);
      await maru.say_and_wait(
        `후배들이 당근을 좀 줬어. 너도 먹어볼래?`,
      );
      await emperor.say_and_wait(`사양하지.`);
      await maru.say_and_wait(`그래? 아쉽네.`);
      await emperor.say_and_wait(`나중에 조금 보내줄 수 있겠나?`);
      await maru.say_and_wait(`물론이지!`);
      await maru.say_and_wait(
        `${maru.uma_sex_title}들의 행복을 위해 필사적으로 노력하는 루돌프짱, 대단하다고 생각해.`,
      );
      await maru.say_and_wait(
        `도전자로서 계속 노력해 레이스장에 황제의 이름을 남겼지.`,
      );
      await maru.say_and_wait(
        `이렇게 ${maru.uma_sex_title}에게는 불가능하다고 여겨졌던 예언을 차례차례 깨뜨리는 건 인생으로서도 행복하겠지.`,
      );
      await emperor.say_and_wait(`그럼 ${maru.name}, 너는 행복한가?`);
      await maru.say_and_wait(
        `행복이라고 한다면 이렇게 레이스장에서 귀여운 후배들에게 뒤쫓을 희망을 남겨주는 것도 행복하지 않아?`,
      );
      await maru.say_and_wait(
        `잔디 위를 자유롭게 달리고 후배들의 고민을 듣고 조언해 주는 것. 나쁘지 않은 선택이라고 생각해.`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}들의 기대는 생각보다 무거운 것이다.`,
      );
      await emperor.say_and_wait(
        `도중에 분홍빛 거품을 깨뜨린다면 아직 괜찮다. 계속 분홍빛 꿈만 꾸고 있으면.`,
      );
      await emperor.say_and_wait(`언젠가 스스로 처리할 수 없는 일을 만나게 된다.`);
      await emperor.say_and_wait(
        `그때 ${maru.name}, 네가 어떤 방식으로 그 장애를 넘을지 기대하고 있겠다.`,
      );
      await era.printAndWait(
        `벨이 울리고 오후 훈련이 곧 시작된다. ${maru.name}은(는) 생각에 잠겼지만 여전히 침묵했다.`,
      );
      await emperor.say_and_wait(
        `조금 더 이야기하고 싶지만 집무실에 쌓인 일이 남아 있다. 실례하지.`,
      );
      await era.printAndWait(`그렇게 말하고 황제는 안뜰을 떠났다.`);
      await maru.say_and_wait(`……그래도, 나는 알고 있어.`);
      await maru.say_and_wait(
        `……미안해, ${callname}, 떠올린 게 있어서.`,
      );
      await era.printAndWait(`${maru.name}은(는) 우울한 표정으로 안뜰을 떠났다.`);
      await you.say_and_wait(`그래서 아무도 남지 않은 건가?`);
      await you.say_and_wait(
        `${maru.name}, 뭔가 고민이 있는 것 같다. 기회를 봐서 이야기하자.`,
      );
      await era.printAndWait(`${you.name}은(는) 안뜰을 떠났다.`);
      await era.printAndWait(
        `그렇게 여행자들은 서로 다른 마음을 품고 서로 다른 목적을 향해 나아간다.`,
      );
      await era.printAndWait(`세 여신은 모든 것을 말없이 품었다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_34
  ws_34: (() => {
    const title = '선물';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `어느 날 ${you.name}이(가) 집무실에서 자료를 정리하고 있을 때.`,
      );
      await era.printAndWait(`똑똑.`);
      era.printButton(`「들어오세요.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `실례하겠습니다.`);
      await era.printAndWait(
        `문손잡이가 돌아가고 고등부로 보이는 ${maru.uma_sex_title}이(가) 들어왔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `안녕하세요, 트레이너 ${you.adult_sex_title}.`,
      );
      era.printButton(`「안녕하세요.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `저는 트레센 학원 어디에나 있는 평범한 ${maru.uma_sex_title} 중 한 명입니다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배처럼 레이스장에서 계속 이기고 싶어요. 잘 부탁드립니다.`,
      );
      era.printButton(`「잘 부탁해.」`, 1);
      await era.input();
      await era.printAndWait(`두 사람의 손이 맞잡혔다.\n`);
      era.printButton(
        `여기 커피가…… 아니, 그만두자. 홍차와 코코넛 주스 중 어느 게 좋아?`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `감사합니다. 하지만 선물을 전하러 온 것뿐이라서요.`,
      );
      await era.printAndWait(`${maru.sex}은(는) 주머니에서 작은 상자를 꺼냈다.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `저희 같은 평범한 ${maru.uma_sex_title}이(가) 트레이너에게 눈에 들어 커리어에서 G3 하나를 이기는 것만으로도 정말 대단한 일이에요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `모두 입상을 목표로 필사적으로 노력하고 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그래도 입상할 수 있는 ${maru.uma_sex_title}은(는) 극소수고, 대부분의 ${maru.uma_sex_title}은(는) 메이크 데뷔에서 이긴 뒤 단 한 번도 이기지 못한 채 3년의 커리어를 끝냅니다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `졸업할 때까지 전속 계약을 맺을 트레이너를 만나지 못하는 아이도 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 선배는 그런 것에 얽매이지 않고 계속 저희가 앞으로 나아가도록 격려해 주세요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `힘들 때는 곁에서 조언도 해주시고요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그래서 저희는 계속 마루젠 선배에게 감사하고 있어요.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그래서 친구들과 함께 이 선물을 만들어 마루젠 선배에게 드리고 싶어서요.`,
      );
      era.printButton(
        `「${maru.name}은(는) 분명 기뻐할 거야. ${you.name}들, 고마워.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `상대의 손에서 리본이 달린 작은 상자를 받아들었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `고마워요 ${you.name}, 트레이너 ${you.adult_sex_title}.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `앞으로 선발전에서는 모두를 깜짝 놀라게 해야지!`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `그럼 안녕, ${maru.name}의 트레이너 ${you.adult_sex_title}!`,
      );
      await era.printAndWait(
        `인사한 뒤 ${maru.sex}은(는) 문가에서 고개를 내밀고 기다리던 동료들 곁으로 서둘러 갔다.`,
      );
      await you.say_and_wait(
        `앞으로 ${maru.sex}에게도 잘 맞는 트레이너를 찾을 수 있으면 좋겠네.`,
        true,
      );
      await era.printAndWait(
        `살며시 문을 닫은 뒤 ${you.name}은(는) 작은 상자를 열었다.`,
      );
      await era.printAndWait(
        `안에 들어 있던 것은 수정으로 만든 팔찌였다.`,
      );
      await you.say_and_wait(
        `${maru.name}이(가) 돌아오면 직접 ${maru.sex}에게 건네자.`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47
  ws_47: (() => {
    const title = '크리스마스와 설레는 추억';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Merry Christmas！`);
      await era.printAndWait(
        `두꺼운 옷을 입은 ${maru.name}이(가) 훈련실에 나타났다.`,
      );
      era.printButton(
        `「메리 크리스마스! 몸을 녹이려면 여기 화로와 귤이 있어.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `피곤한 눈을 비비며 ${maru.name}과(와) 이야기할 기회에 잠시 머리를 비운다.`,
      );
      await maru.say_and_wait(`밖은 생각보다 추워서 못 견디겠어.`);
      await era.printAndWait(
        `부드러운 소파에 몸을 맡기고 ${maru.name}은(는) 정성스럽게 귤껍질을 벗겨 과육을 입에 넣었다.`,
      );
      await you.say_and_wait(
        `오늘 기온은 영하 1도다. 예보에 따르면 오늘 밤 눈이 온다고 한다.`,
      );
      await era.printAndWait(
        `『눈인가』라고 중얼거리며 ${maru.name}은(는) 또 귤을 깠다.`,
      );
      await era.printAndWait(
        `잠시 훈련실은 다시 조용해지고 종이를 넘기는 소리만 울린다.`,
      );
      await era.printAndWait(
        `몸을 소파에 파묻고 이번 주 패션 잡지를 다시 펼친 ${maru.name}은(는) 주황빛 화로에 둘러싸여 기쁜 표정을 짓고 있다.`,
      );
      era.drawLine();
      await you.say_and_wait(`이게 마지막이다.`, true);
      await era.printAndWait(`서류를 폴더에 정리하고 저린 두 다리를 움직인다.`);
      await maru.say_and_wait(`${callname} 수고했어. 다음 일정은 뭐야?`);
      await era.printAndWait(
        `풀어졌던 근육을 순식간에 긴장시키고 평소 상태로 돌아온 ${maru.name}이(가) 일어선 ${you.name}을(를) 바라본다.`,
      );
      await you.say_and_wait(`일정?`);
      await era.printAndWait(
        `예전 크리스마스에는 혼자 훈련실에서 메모를 정리하고 있었던 ${you.name}.`,
      );
      await you.say_and_wait(`음——그러게,`);
      await maru.say_and_wait(`같이 밖에서 축하하지 않을래?`);
      await you.say_and_wait(`훈련실에서 쉰다.`, true);
      await era.printAndWait(
        `기대하는 표정의 ${maru.name}을(를) 보고 ${you.name}은(는) 뒷말을 삼켰다.`,
      );
      await maru.say_and_wait(`지금 바로 출발!`);
      await era.printAndWait(`${maru.name}의 열렬한 권유로 두 사람은 합의했다.`);
      era.drawLine();
      await era.printAndWait(`떨리는 엔진음 속에서 애차가 시동을 걸었다.`);
      await era.printAndWait(
        `검은 하늘. 때때로 불어오는 찬바람이 오가는 생명체들을 사정없이 베어낸다.`,
      );
      await you.say_and_wait(`에취!`);
      await era.printAndWait(`강한 바람이 옷과 피부 사이로 파고들었다.`);
      await you.say_and_wait(`춥네. 그래도 이따 눈도 온다.`);
      await era.printAndWait(`앞으로의 일정에 저도 모르게 절망한다.`);
      await maru.say_and_wait(
        `——그러고 보니, 테이오 ${
          maru.couple_title
        }의 성장, 예상보다 빠르네. 후배가 그렇게 열심히 하면 ${maru.elder_sibling_sex_title}도 신이 나.`,
      );
      await era.printAndWait(
        `무슨 핑계를 대서라도 ${maru.uma_sex_title}에게 안겨 몸을 녹이고 싶다고 생각하면서 몸을 웅크리고 추위를 견딘다.`,
      );
      await you.say_and_wait(`목도리를 가져올걸.`, true);
      await maru.say_and_wait(
        `……백화점에서 그 크리스마스 캔들 디너를 한다더라. 같이 가보지 않을래?`,
      );
      await era.printAndWait(
        `몰아치는 찬바람 속에서 ${maru.name}의 말은 먼 하늘처럼 들린다.`,
      );
      await you.say_and_wait(`추워.`, true);
      await maru.say_and_wait(`……그보다 나는, 아, 도착했다!`);
      await era.printAndWait(`조금 앞이 백화점이다.`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: '건', color: maru.color },
        '배!」',
      ]);
      await era.printAndWait(
        `${maru.name}이(가) 말한 특가 레스토랑에서 두 사람은 잔을 들어 기념일을 축하했다.`,
      );
      await maru.say_and_wait(
        `지금은 아직 술을 못 마시지만…… 주스 맛도 나쁘지 않네♪`,
      );
      era.printButton(`「곧 ${maru.name}도 마실 수 있게 되겠네.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `그날이 오면 ${callname}은(는) 밤새도록 같이 있어줘.`,
      );
      await era.printAndWait(
        `창밖 하늘에서 눈송이 하나가 떨어지고, 이어 수많은 눈송이가 그 발자취를 따라 땅으로 내려왔다.`,
      );
      await you.say_and_wait(
        `그날을 위해 앞으로의 훈련도 힘내야지!`,
      );
      await era.printAndWait(
        `차갑고 아름다운 그것들은 자연의 정령처럼 제멋대로 하늘에서 지상으로 놀러 온다.`,
      );
      await maru.say_and_wait(`눈이네. 귀엽다.`);
      await era.printAndWait(
        `무언가를 떠올린 듯 ${maru.name}은(는) 밖의 눈을 생각에 잠겨 바라보고 있다.`,
      );
      await you.say_and_wait(`${maru.name}, 눈을 좋아해?`);
      await era.printAndWait(
        `비운 잔을 흔들며 ${maru.teen_sex_title}의 생각은 먼 과거로 돌아간 듯하다.`,
      );
      await maru.say_and_wait(`……아! 미안해. 나도 모르게 딴생각했네.`);
      await era.printAndWait(
        `${you.name}의 존재를 이제야 알아차린 듯 허둥지둥 대답하는 ${maru.name}은(는) 귀여운 빈틈을 보였다.`,
      );
      era.printButton(`「아니, 아무것도 아니야.」`, 1);
      era.printButton(`「${maru.name}, 눈을 좋아해?」`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `같은 질문을 반복하는 건 ${maru.name}에게도 어색하겠지.`,
        );
        await era.printAndWait(`${you.name}은(는) 다른 화제로 넘기기로 했다.`);
        await era.printAndWait(`저녁 식사는 그런 좋은 분위기 속에서 끝났다.`);
      } else {
        await maru.say_and_wait(`응? 雪？`);
        await era.printAndWait(
          `잠시 고민한 뒤 ${maru.name}은(는) 그래도 입을 열었다.`,
        );
        await maru.say_and_wait(`사실, 정말 좋아해.`);
        await maru.say_and_wait(
          `오히려 아침에 일어나 커튼을 열었을 때 창가에 눈이 쌓인 풍경을 보고 싶어!`,
        );
        await you.say_and_wait(`왜 그렇게 쓸쓸한 표정을 짓는 거야?`);
        await maru.say_and_wait(`${callname}도 그렇지 않아?`);
        await era.printAndWait(`질문에 답하지 않고 다른 질문을 던져왔다.`);
        await maru.say_and_wait(`고민하는 표정으로 답을 찾는 탐험가 같아.`);
        await era.printAndWait(
          `다시 리듬을 되찾은 ${maru.name}은(는) 장난기 어린 미소를 보였다.`,
        );
        await maru.say_and_wait(`하지만 답은 사실 간단해.`);
        await you.say_and_wait(`그럼 답은?`);
        await maru.say_and_wait(`안・가・르・쳐・줘・${you.name}⭐`);
        await you.say_and_wait(
          `안 되겠다, 너무 서둘러서 ${maru.sex}을(를) 경계하게 만든 건가.`,
          true,
        );
        await you.say_and_wait(`다음 기회다.`, true);
        await era.printAndWait(
          `그 뒤 훈련 이야기도 조금 나누며 즐거운 저녁 식사는 일단락됐다.`,
        );
      }
      era.drawLine({ content: '트레이너 기숙사 앞' });
      await maru.say_and_wait(`바이바이!`);
      await maru.say_and_wait(
        `아, 잊을 뻔했다! ${callname}, 이거 ${you.name}에게.`,
      );
      await era.printAndWait(
        `짐이 가득한 뒷좌석에서 예쁜 리본으로 감싼 선물 상자를 꺼냈다.`,
      );
      await you.say_and_wait(`${maru.name}, 이건?`);
      await maru.say_and_wait(`이제 정말로, 내일 또 봐!`);
      await era.printAndWait([
        you.get_colored_name(),
        '의 말은 엔진 굉음에 묻혔고, 상자를 안은 채 애차가 점처럼 멀어지는 모습을 바라볼 뿐이었다.',
      ]);
      await you.say_and_wait(`어쨌든 먼저 돌아가자.`);
      await era.printAndWait(
        `${maru.name}의 마음이 담긴 선물 상자를 소중히 안고 천천히 방으로 돌아갔다.`,
      );
      await era.printAndWait(
        `금빛 리본을 풀고 상자 뚜껑을 살며시 열자 어린 시절 어른에게 선물을 받던 때와 같은 기분이 들었다.`,
      );
      await era.printAndWait(`정교하게 만든 목도리와`);
      await maru.say_and_wait(
        `미안해, ${callname}에게 더 좋은 걸 준비하고 싶었지만 지금은 이 브랜드밖에 없었어. 신경 쓰지 마. 메리 크리스마스!`,
      );
      await era.printAndWait(`섬세하고 아름다운 글씨는 본인과 이야기하는 듯하다.`);
      await you.say_and_wait(`땡큐, ${maru.name}.`);
      await era.printAndWait(`어느새 ${you.name}도 물들어 있었다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = '새해의 마음';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`시간은 빠르게 흘러 어느새 또 새해다.`);
      await era.printAndWait(
        `${maru.name}과(와) 함께 겪은 온갖 희로애락도 지금은 모두 좋은 추억이 됐다.`,
      );
      await era.printAndWait(
        `오늘은 법정 공휴일이다. 트레이너 기숙사에서 빈둥거리며 보내기엔 너무 지루하다.`,
      );
      await era.printAndWait(
        `『적당히 돌아다니자』고 생각했는데 발은 어느새 다시 트레센을 향하고 있었다.`,
      );
      await you.say_and_wait(`온 김에 훈련실도 보고 가자.`);
      await era.printAndWait(
        `결정한 뒤 ${you.name}은(는) 훈련실로 향했다.`,
      );
      era.drawLine({ content: '훈련실' });
      await era.printAndWait(
        `평소의 훈련실이라면 「또 일인가」 하는 짜증이 가시지 않는다.`,
      );
      await era.printAndWait(
        `하지만 휴일에 『잠깐 보고 가자』는 마음으로 돌아와 보니.`,
      );
      await era.printAndWait(
        `${maru.name}과(와) 다음 방침을 이야기하고, 맛있는 케이크를 함께 먹고, 소파에 붙어 앉아 중상 영상을 보며 빠져들었다.`,
      );
      await era.printAndWait(`그 모든 것이 어제 일처럼 느껴진다.`);
      await you.say_and_wait(`시간은 정말 빠르네.`);
      await era.printAndWait(
        `평소의 훈련실을 바라보고 있는데도 어울리지 않는 착각이 든다.`,
      );
      await you.say_and_wait(`너무 지쳤나?`);
      await you.say_and_wait(`좋아, 옥상에서 바람을 맞으며 머리를 식히자.`, true);
      await you.say_and_wait(
        `……${maru.name}은(는) 지금 어디에 있을까. 지금쯤 어딘가에서 신나게 놀고 있을지도 모르겠네.`,
      );
      await era.printAndWait(
        `훈련실 문을 살며시 닫고 기분 전환을 위해 옥상으로 향했다.`,
      );
      era.drawLine({ content: '屋上' });
      await era.printAndWait(
        `많은 ${maru.uma_sex_title}들은 새해를 동료나 자신의 트레이너와 보내며 휴일 동안 지난해의 고민을 털어낸다.`,
      );
      await era.printAndWait(
        `늘 시끄러운 학원이 지금은 조용한 모습을 보여주고 있다.`,
      );
      await era.printAndWait(
        `옥상에서 내려다보면 트레센 학원 전체가 시야 아래 펼쳐져 있다.`,
      );
      await you.say_and_wait(
        `여기서 「나는 삼관을 따는 ${maru.uma_sex_title}에게 어울리는 남자가 되겠다」라고 외치면 분위기에 맞겠지.`,
        true,
      );
      await you.say_and_wait(`아무도 없지만 역시 부끄럽네.`, true);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「나는 ${maru.name}에게 어울리는 ${you.phy_sex_title}이(가) 되겠다!!!」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `트레이너라는 신분도 어른의 긍지도 전부 뒤로 던지고 기세에 맡겨 자신도 놀랄 만큼 큰 소리를 냈다.`,
      );
      await era.printAndWait(`금기를 깨뜨린 흥분으로 ${you.name}은(는) 얼굴이 새빨갛다.`);
      await you.say_and_wait(`속이 시원하다.`);
      await you.say_and_wait(`아무도 옥상에 눈치채기 전에 빨리 떠나자.\n`);
      await maru.say_and_wait(`어머? ${callname}?`);
      await era.printAndWait(`야생의 ${maru.name}이(가) 나타났다!`);
      await you.say_and_wait(`에에? ${maru.name}이(가) 왜 여기 있어?`, true);
      await you.say_and_wait(`하하, 인생 끝났다.`, true);
      await you.say_and_wait(`무인도에서 여생을 보내자.`, true);
      era.printButton(`「미안, ${you.name}은(는) 사람을 잘못 봤어.」`, 1);
      await era.input();
      era.printButton(`「지금의 나는 그저 평범한 트레이너야.」`, 1);
      await era.input();
      await maru.say_and_wait(
        `……어머, 이…… 아주 평범한 트레이너 ${you.adult_sex_title}.`,
      );
      await maru.say_and_wait(
        `방금 외침, 기세가 대단했어. 계단에서도 그 뜨거운 목소리가 들렸는걸.`,
      );
      await maru.say_and_wait(`청춘은 멋지네.`);
      await maru.say_and_wait(
        `하지만 그런 말은 역시 본인 앞에서 제대로 말해야지?`,
      );
      await maru.say_and_wait(
        `우리 트레이너라면 가슴 가득한 마음을 제대로 말할 수 있겠지.`,
      );
      await era.printAndWait(
        `강한 수치심으로 몸이 달아오른 ${you.name}은(는) 무릎이 풀려 쓰러질 뻔했다.`,
      );
      await you.say_and_wait(`정말 미안해.`, true);

      await era.printAndWait(`${maru.name}은(는) 조용히 하늘을 올려다보고 있다.`);
      era.printButton(
        `……테이오 ${maru.couple_title}과(와) 놀러 가지 않는 거야?`,
        1,
      );
      era.printButton(`「${you.name}이(가) 무슨 생각을 하는지 알려줄래?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `${maru.name}은(는) 기분 좋게 그리운 곡을 흥얼거리고 있다.`,
      );
      await you.say_and_wait(`외로운 거야?`, true);
      era.printButton(`「이렇게 추운 날에 왜 옥상이야?」`, 1);
      era.printButton(`「${you.name}은(는) 무슨 생각을 하고 있어?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `진짜 마음을 알기 위해 ${you.name}은(는) 그대로 함께 난간에 기대 이야기를 시작했다.`,
      );
      await maru.say_and_wait(
        `작년에는 테이오 ${
          maru.couple_title
        }와(과) 새해 파티를 했는데 올해는 자기 트레이너에게 가라며 떠밀렸어.`,
      );
      era.printButton(
        `테이오 ${maru.couple_title}은(는) ${you.name}을(를) 신경 써주는구나.`,
        1,
      );
      await era.input();
      await era.printAndWait(`${maru.name}에게서 향기로운 냄새가 풍겨왔다.`);
      await you.say_and_wait(
        `샴푸인가? 오늘은 왜 이렇게 좋은 향이 나지?`,
        true,
      );
      await maru.say_and_wait(
        `${callname}도 그렇게 생각해? ${maru.couple_title}은(는) 희망으로 가득한 새싹이야.`,
      );
      await maru.say_and_wait(`언젠가 비바람의 속박을 깨고 큰 나무가 될 거야.`);
      await era.printAndWait(
        `${maru.name}의 기대에 찬 말과 달리 하늘을 바라보는 ${maru.sex}의 모습은 생각에 잠겨 있다.`,
      );
      era.printButton(`「${maru.name}은(는) 큰 나무가 되고 싶지 않아?」`, 1);
      await era.input();
      await maru.say_and_wait(`큰 나무보다 나는 다정한 바람이 되고 싶어.`);
      era.printButton(`「風？」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}, 하늘을 자유롭게 부는 바람을 눈치채지 못했어?`);
      await maru.say_and_wait(`하늘을 부는 바람이 될 수 있다면 후배들이 고민할 때,`);
      await maru.say_and_wait(
        `성공까지 한 걸음 남았을 때, 한숨을 쉴 때 ${maru.couple_title}을(를) 격려할 수 있어.`,
      );
      await you.say_and_wait(`${maru.name}은(는) 지금도 충분히 잘하고 있어.`);
      await you.say_and_wait(`지금은 새해를 마음껏 즐기자.`);
      await maru.say_and_wait(`아차~ 이러면 나답지 않네.`);
      await maru.say_and_wait(`${callname}, 무슨 계획 있어?`);
      era.printButton('「오늘은 잔디에서 연습하자」 (스피드+20)', 1);
      era.printButton(
        '「같이 나가서 싫은 일을 전부 털어버리자」 (체력+200)',
        2,
      );
      era.printButton(
        '「오늘은 훈련실에서 느긋하게 쉬자」 (스킬 Pt+100)',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait('응응, 잔디를 달리고 나면 모든 게 뜬구름이지!');
          await maru.say_and_wait(`역시 ${callname}, 내 마음을 알고 있네.`);
          await era.printAndWait(`${maru.name}은(는) 다시 기운을 냈다.`);
          await maru.say_and_wait('OK! 그럼 지금 바로 출발.');
          await era.printAndWait(
            `잔디에서 하루 종일 훈련한 뒤 훈련실에서 작게 축하했다.`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `뭐야? ${callname}은(는) ${maru.elder_sibling_sex_title}와(과) 데이트하고 싶은 거야?`,
          );
          await maru.say_and_wait(
            '성급하네. 데이트 코스는 제대로 계획해야지.',
          );
          await maru.say_and_wait('그럼 애차로.');
          era.printButton(`「데이트라면 걸어서 가자」`, 1);
          await era.input();
          await maru.say_and_wait(`응——`);
          era.printButton(
            `「커플이라면 걸어가는 편이 분위기 나잖아.」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`${callname}이(가) 그렇게까지 말한다면`);
          await maru.say_and_wait(`가끔 산책하는 것도 색다른 느낌을 맛볼 수 있겠네⭐`);
          await era.printAndWait(`그럼 지금 바로 출발.`);
          await era.printAndWait(
            `훈련실로 돌아왔을 무렵 두 사람 모두 기진맥진해 소파에 기대고 있었다.`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `그러네, 이렇게 추운 날은 따뜻한 훈련실에 있는 게 정답이야.`,
          );
          era.printButton(`「훈련실의 간식과 귤을 꺼내자」`, 1);
          await era.input();
          await maru.say_and_wait(`후후, 그럼 내가 귤을 깔게.`);
          await era.printAndWait(
            `그렇게 이날은 화로를 쬐며 좋은 분위기 속에서 보냈다.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_12
  ws_47_12: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `팬 감사제는 레이스장의 ${maru.uma_sex_title}들을 응원해 온 팬들에게 감사를 전하기 위해 열리는 축제다.`,
      );
      await era.printAndWait(
        `이날 트레센은 문을 열고 재학생들은 학생회가 마련한 메인 스테이지와 서브 스테이지에서 공연한다.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}의 길을 걷는 ${maru.uma_sex_title}들은 더 많은 주목을 받기 마련이다.`,
      );
      await era.printAndWait(`댄스실\n`);
      await maru.say_and_wait('하나, 둘, 셋, 넷, 여유 여유♪');
      await maru.say_and_wait('다섯, 여섯, 일곱, 여덟, 전혀 문제없어♪');
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}의 마지막 리허설을 보고 있다.`,
      );
      await maru.say_and_wait(`${callname}${you.name}, 어때?`);
      era.printButton(`「그리운 곡이네.」`, 1);
      await era.input();
      await era.printAndWait(
        `세기 초의 마이너한 곡이 귀에 흐르고, 강렬한 드럼과 밝은 리듬에 맞춰 보폭을 흔드는 ${maru.name}.`,
      );
      await era.printAndWait(
        `문득 학생 시절로 돌아간 기분이 든다. 방과 후 몇 명이 모여 최신 CD 이야기를 나누던 그 시절.`,
      );
      await maru.say_and_wait(
        `${callname}, 이건 지금 가장 최신 유행곡이야. 이대로라면 시대에 뒤처질 거야.`,
      );
      await maru.say_and_wait(`슬슬 내 차례네.`);
      await maru.say_and_wait(`${callname}은(는) 아래에서 제대로 보고 있어줘.`);
      await era.printAndWait(`일부 방문객은 이런 레트로 음악을 좋아한다.`);
      await era.printAndWait(
        `${maru.name}은(는) 그 방문객들을 과거의 환상으로 이끌었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`砂浜`);
      await era.printAndWait(`이사장의 사유 해변인데도.`);
      await era.printAndWait(`공기에는 서늘함이 감돈다.`);
      await era.printAndWait(`바다가 가까워서일지도 모른다.`);
      await era.printAndWait(
        `바닷바람이 멀리서 밀려왔다 물러가는 파도 소리와 축축한 기운을 실어온다.`,
      );
      await era.printAndWait(
        `애차에서 내리자 ${maru.name}은(는) 만족한 듯 눈을 가늘게 뜨고 휴가의 기운을 즐긴다——`,
      );
      await you.say_and_wait(
        `그런데 왜 스쿨버스를 타지 않은 거야?`,
      );
      await era.printAndWait(
        `${maru.name}의 강한 요청으로 ${you.name} 일행은 애차의 도움을 받아 이사장의 사유 해변에 왔다.`,
      );
      await maru.say_and_wait(
        `모처럼 이렇게 예쁜 해변에 왔는데 후배들과 버스를 타고 오는 건 조금 아쉽잖아.`,
      );
      await you.say_and_wait(
        `응? ${maru.name}, ${you.name}도 여름 합숙이 능력을 단숨에 올릴 수 있는 지름길이라는 건 알잖아?`,
      );
      await you.say_and_wait(`그러니 평소보다 진지하게 하자.`);
      await maru.say_and_wait(
        `졌다. ${callname}이(가) 그렇게까지 말한다면 ${maru.elder_sibling_sex_title}도 진심을 내야겠네⭐`,
      );
      era.printButton(`「당연하지?」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}도 바닷물과 일광욕, 여기저기 보이는 수영복을 기대하고 있었다.`,
      );
      await you.say_and_wait(`그럼 앞으로는 청춘을 제대로 즐기자.`);
      await era.printAndWait(`몸의 감각을 따라 걷는 편이 올바른 길인 사람도 있다.`);
      await era.printAndWait(`그러니 너무 간섭하지 않는 편이 좋다.`);
      await maru.say_and_wait(
        `이렇게 바닷바람을 맞고 있으면 기분도 구름 위까지 날아갈 것 같네, 입니다와.`,
      );
      await you.say_and_wait(
        `그런 옛 유행어까지 부활했네. ${maru.name}, 정말 기분이 좋은가 보네.`,
        true,
      );
      await maru.say_and_wait(`후후~ ${callname}, 귀엽네♪`);
      await era.printAndWait(
        `어디선가 다가온 ${maru.name}이(가) 계속 ${you.name}을(를) 바라보고 있다.`,
      );
      await maru.say_and_wait(`아무리 칭찬해도 서비스는 없어~`);
      await era.printAndWait(
        `${you.name}이(가) 다음에 할 말을 읽어낸 듯 ${maru.name}은(는) 짓궂게 웃었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_30
  ws_47_30: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`엄청 붐비네.`);
      await era.printAndWait(
        `${maru.name}과(와) 함께 아주 성대하다는 축제에 가기로 했다. 하지만 ${you.name}은(는) 입구에서 오래 기다려도 ${
          maru.sex
        }의 모습이 보이지 않는다.`,
      );
      await era.printAndWait(
        `「인파 속에서 길을 잃었겠지」라고 생각하며 ${you.name}은(는) 머리를 비우고, 제등으로 장식된 축제로 흘러드는 인파를 바라보다 눈을 가늘게 뜨고 하품했을 때.`,
      );
      await you.say_and_wait(`엄청 붐비네.`);
      await era.printAndWait(
        `가게가 몇 곳뿐일 거라는 예상과 전혀 달리 사방에서 모인 관광객과 노점이 거리 끝에서 끝까지 이어져 있다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `거기 멍하니 서 있는 젊은이, 신선한 과일 어때?`,
      );
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `흐르는 인파에 밀려 어느새 과일가게 앞에 서 있었다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `그 모습 보니 축제는 처음인가 보구먼?`,
      );
      await era.printAndWait(
        `장사가 잘돼 기분이 좋은지 아저씨는 유창하게 이야기를 시작했다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `뭐, 그렇겠지. 여긴 관광 오면 꼭 들르는 축제 중 하나로 꼽히니까.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `이 아름다운 해변 근처에 있어서 이 마을은 꽤 많은 관광객을 끌어들이고 있지.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `옛날에는 교통도 불편한 흔한 시골이었지만, 이쪽 해변이 유명해지고 나서 관광객도 늘었어.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `그 뒤 철도가 놓이고 사람들이 확 몰려오면서 지금의 마을이 된 거야.`,
      );
      await you.say_and_wait(`저기요? 실례합니다.`);
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `이런. 깜빡할 뻔했네. ${you.name}은(는) 길을 잃어서 여기 서 있는 거지?`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `그렇겠지. 이 축제에는 똑같은 입구가 네 개나 있거든. 예술은 잘 모르겠지만 매년 입구에서 만나기로 해놓고 상대를 못 찾는 사람들을 보는 재미가 있어.`,
      );
      await era.printAndWait(
        `이야기에 신이 난 건지 이 마을 주민이라는 걸 자랑스러워하는 아저씨는 큰 목소리로 설명을 이어갔다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `참고로 축제를 전부 둘러보고 싶다면 여기서 곧장 가면 이쪽 명물 공연을 볼 수 있어.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `오늘 밤은 축제를 보러 온 인파 덕분에 한몫 벌겠군. 하하하.`,
      );
      await era.printAndWait(
        `마지막 말을 끝내고 침까지 튀기던 아저씨는 마침내 말을 멈췄다.`,
      );
      await maru.say_as_passer_by_and_wait(`스마트폰`, `부르르르.`);
      await era.printAndWait(
        `주머니 속 스마트폰이 진동했다. 이제 대부분의 사람들이 공연 쪽으로 향한 상황에서 전화할 상대는 말할 것도 없다.`,
      );
      await maru.say_and_wait(`${callname}, ${you.name}은(는) 어디야?`);
      await era.printAndWait(
        `주머니 속 스마트폰이 진동했다. 이제 대부분의 사람들이 공연 쪽으로 향한 상황에서 전화할 상대는 말할 것도 없다.`,
      );
      await maru.say_and_wait(
        `하아, 모처럼 마음먹고 준비했는데 스마트폰 사진을 보고 입구에 도착했더니 ${
          callname
        }의 모습이 아무리 찾아도 안 보여.`,
      );
      await maru.say_and_wait(
        `${callname}의 모습을 놓칠 생각은 없었는데 오른쪽을 봐도 왼쪽을 봐도 안 보여. ${maru.elder_sibling_sex_title}, 조금 삶의 의욕이 없어질 것 같아><.`,
      );
      await era.printAndWait(
        `입구를 잘못 찾은 거겠지. 아니, ${you.name} 쪽도 잘못 찾았을지도?`,
      );
      era.printButton(`「실례합니다, 잠깐만요.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `응? 입구를 구별하는 법을 묻고 싶은 거구나?`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `그렇지. 매년 누군가는 그걸 물어봐.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `평소에는 금방 알아볼 곳도 사람이 많아지면 전부 똑같아 보이거든.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `${you.name}, 그 친구에게 입구에서 다섯 번째 노점까지 걸어가라고 해. 거기에 안내 자원봉사자가 있어.`,
      );
      await era.printAndWait(
        `아저씨는 이야기하며 자연스럽게 지도를 꺼내 ${you.name}에게 가리켜 보였다.`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `공연에 맞춰 가고 싶다면 이 길이야. 지금이라면 아직 늦지 않아.`,
      );
      await era.printAndWait(`지나치게 열정적이라 조금 이상하지만 아주 친절한 아저씨다.`);
      await era.printAndWait(
        `감사를 전한 뒤 ${you.name}은(는) 그대로 ${maru.name}에게 알려주고 서둘러 향했다.`,
      );
      era.drawLine();
      await era.printAndWait(`이리 와, 이리 와. 바로 앞이 성대한 무대야.`);
      await era.printAndWait(
        `이 고민은 잊어. 이 뜨거운 춤 속에서 함께 춤추자.`,
      );
      await era.printAndWait(
        `이 성대한 축제에 녹아들어. 이대로 함께 ${maru.sex}이(가) 끝나지 않기를 빌자.`,
      );
      await era.printAndWait(
        `눈물과 땀이 섞인 기쁨을 안고. 방황과 고통 끝에 마침내 후련해지자.`,
      );
      await era.printAndWait(
        `해변의 반짝이는 모래처럼 ${you.name}들의 기쁨과 해방도 언젠가 역사에 남을 것이다.\n`,
      );
      await you.say_and_wait(`드디어 목적지다.`);
      await era.printAndWait(
        `공연을 보러 오는 인파는 끊이지 않는다. 서 있거나 앉아 음료나 카메라를 들고 무대 위 열연을 바라본다.`,
      );
      await era.printAndWait(
        `사람들의 숨결이 얇은 그물을 짠 듯하다. 아이들은 소리를 지르며 인파 속을 신나게 뛰어다닌다.`,
      );
      await you.say_and_wait(`사람이 많네.`);
      await era.printAndWait(
        `발밑을 꽤 조심했지만 그래도 뛰어다니는 아이들과 몇 번이나 부딪힐 뻔했다.`,
      );
      await you.say_and_wait(`덥다. 하지만 지금은 우선 ${maru.name}을(를) 찾아야 해——`);
      await era.printAndWait(
        `${
          maru.sex
        }에게 위치를 보내고 싶었지만 이런 인파 속에서는 스마트폰 신호조차 끊겼다 이어진다.`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `밤이 내려앉고 무대 조명이 하나씩 켜진다. 현장의 관광객들은 시선을 무대로 모았다——`,
      );
      await era.printAndWait(
        `${maru.name}을(를) 보고 있는 ${you.name}과(와), ${you.name}의 시선을 알아차리고 손을 흔들며 종종걸음으로 다가오는 ${maru.name}을(를) 제외하고는.`,
      );
      era.printButton(`「${maru.name}을(를) 만나서 다행이야.」`, 1);
      await era.input();
      await era.printAndWait(
        `가슴 위의 큰 돌이 마침내 내려간 듯 ${you.name}은(는) 길게 숨을 내쉬었다.`,
      );
      await maru.say_and_wait(
        `드디어 ${you.name}을(를) 찾았네. ${maru.elder_sibling_sex_title}도 안심했어.`,
      );
      await you.say_and_wait(`미안해. 빨리 ${maru.name}과(와) 합류하고 싶었는데——`);
      await maru.say_and_wait(
        `응~ 사과하는 것보다 이따가 ${
          callname
        }와(과) 함께 공연을 보는 게 최고의 보상이겠지.`,
      );
      await you.say_and_wait(
        `……무대가 끝날 때까지 ${maru.name} 곁을 떠나지 않을게.`,
      );
      await you.say_and_wait(
        `그러니까 ${you.name}과(와) 함께 이 멋진 추억을 만들게 해줘. 부탁이야!`,
      );
      await maru.say_and_wait(`어머, 새로운 고백 방식?`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}도 조~금 마음이 움직였어.`,
      );
      await maru.say_and_wait(`그럼 ${callname}은(는) 내 곁에서 떨어지지 마?`);
      await era.printAndWait(
        `초청받아 출연하는 ${maru.uma_sex_title}이(가) 빛나는 의상을 입고 가볍게 무대로 뛰어올랐다. 조명이 단숨에 ${
          maru.sex
        }에게 모인다. 지금의 ${maru.sex}은(는) 이 해변에서 가장 눈부신 존재처럼 보인다.`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `${
          maru.sex
        }의 움직임은 매끄럽고 아름답다. 바로 곁에서 여전히 거칠게 이는 파도를 떠올리게 한다. 리듬을 타고 흐르는 민속풍 반주가 짙푸른 의상의 ${maru.uma_sex_title}을(를) 바닷속에서 육지로 조용히 올라와 춤추는 정령처럼 돋보이게 했다.`,
      );
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`응? ${callname}, 왜 그래?`);
      await era.printAndWait(
        `조금 큰 목소리를 낸 ${you.name}에게 놀란 ${maru.teen_sex_title}이(가) 묻는 눈빛으로 ${you.name}을(를) 바라봤다.`,
      );
      await era.printAndWait(`${you.name}의 결단은`);
      era.printButton(
        `「${maru.name}, ${you.name}에게 네 고통과 슬픔을 알려줘.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `무대 위의 ${maru.teen_sex_title}은(는) 전력을 다했고 흘린 땀이 물결처럼 거듭 출렁였다.`,
      );
      await era.printAndWait(
        `관객들은 기대 어린 눈으로 무대에서 빛나는 그 아이돌을 바라본다.`,
      );
      await era.printAndWait(
        `그리고 처음부터 끝까지 ${maru.name}은(는) 불안한 침묵을 유지하고 있었다.`,
      );
      await you.say_and_wait(`지금이 중요한 순간이잖아.`, true);
      await you.say_and_wait(`어떻게든 인내해야 해.`, true);
      await era.printAndWait(
        `무대 위 ${maru.teen_sex_title}의 한 번의 회전, 한 번의 도약이 관객의 마음을 단단히 사로잡는다.`,
      );
      await era.printAndWait(`관객은 숨을 죽이고 그 순간을 기다리고 있다.`);
      await maru.say_and_wait(`역시 ${callname}에게는 숨길 수 없네?`);
      await era.printAndWait(
        `갑자기 평지에 벼락이 떨어진 듯 관객석에서 뜨거운 박수와 환호가 폭발했다.`,
      );
      await era.printAndWait(
        `미소의 가면을 벗고 ${maru.name}은(는) 슬픔과 마침내 해방된 후련함이 섞인 표정으로 ${you.name}을(를) 바라봤다.`,
      );
      await era.printAndWait(
        `그 고통마저 사라지고 땅에 무너질 듯한 마비감 속에서 ${maru.teen_sex_title}은(는) 땀인지 눈물인지 모를 짠맛을 느꼈다.`,
      );
      await maru.say_and_wait(
        `……이 다음은 장소를 바꿔서 이야기할까? ${you.actual_name}?`,
      );
      await era.printAndWait(
        `유혹적인 향기를 풍기는 열매에 이끌린 수많은 관광객이 이 성황 속으로 흘러든다. 오늘 밤은 아직 절정에 막 들어섰을 뿐이다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_31
  ws_47_31: (() => {
    const title = '選択';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `トレーニングのあと、${you.name}は${maru.name}の紙切れを受け取った。`,
      );
      await maru.say_and_wait(
        `${callname}、近くの神社に来て。${you.name}に話があるの。`,
      );
      await era.printAndWait(
        `定番の告白シーンか？ 荷物を片付けて${you.name}は急いで出発した。`,
      );
      await era.printAndWait(
        `歓びと忘却を期待する人波に逆らい、${you.name}たちは散歩するように近くの神社へ来た。`,
      );
      await era.printAndWait(
        `祭りの余韻はまだ散らず、観光客の目は町の中心のステージに集まっている。`,
      );
      await era.printAndWait(`辺鄙だと言えば、ここより辺鄙な場所もある。`);
      await era.printAndWait(
        `だがここは、静かすぎて怖いわけでも、騒がしすぎて不安になるわけでもない。`,
      );
      await maru.say_and_wait(`三女神さま、聞いてください。`);
      await era.printAndWait(
        `賽銭箱に入れたウマコインがぶつかる澄んだ音と同時に、${maru.name}の祈りが起きた。`,
      );
      era.printButton(`「ウマコインを入れる」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${maru.name}の動きを真似て、目を閉じ三女神に祈った。`,
      );
      era.printButton(`「三女神さま、苦しむ者を導いてください」`, 1);
      era.printButton(`「三女神さま、迷う者を導いてください」`, 2);
      await era.input();
      await era.printAndWait(
        `願いをかけたあと、${you.name}は隣の${maru.teen_sex_title}を見た。`,
      );
      await era.printAndWait(
        `${maru.sex}は賽銭箱をじっと見つめている——いや、${
          maru.sex
        }は未知の、遠いどこかを見ている。`,
      );
      await you.say_and_wait(`${maru.name}は泣いているのか？`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `本当にすみませ응.今日の縁結びのお守りはもう配り終わりました。`,
      );
      await era.printAndWait(
        `しばらくして、目をこすりあくびをする巫女が、演目を見る人混みから遅れてやって来た。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `……よければ、お二人でこちらをお受け取りください。`,
      );
      await era.printAndWait(
        `何かに気づいたのか、巫女は長袖の縫い付けた小さなポケットからお守りを出した。`,
      );
      await you.say_and_wait(`ありがとうございます。`);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `感謝の言葉は、美しい女神へ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `祝福の言葉は、慈悲深い女神へ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `解脱の言葉は、慈愛の女神へ。`,
      );
      await you.say_and_wait(`解脱か？`, true);
      await maru.say_and_wait(`祝福か……三女神さま、ありがとう。`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `三女神たちよ、この世界に美しさと希望を。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `愛すべき人たちよ、三女神が${you.name}たちと共にありますように。`,
      );
      await era.printAndWait(
        `巫女は祝福の言葉を言いながら、お守りを${you.name}たちに渡した。`,
      );
      await era.printAndWait(
        `巫女の手から素早くお守りを受け取り礼をした${you.name}と違い、${maru.name}はお守りを受け取ると、持ち歩いている小さな袋に入れた。`,
      );
      await era.printAndWait(`그리고.——`);
      await maru.say_and_wait(`やっぱり、${callname}には隠せないわね。`);
      await era.printAndWait(
        `空気の変化に気づいたのか、巫女は右手で静かな小道を指して、その場を離れた。`,
      );
      await era.printAndWait(
        `下駄と地面が当たるカタカタという澄んだ音がだんだん小さくなり、やがてここには遠くの太鼓と観客の歓声만 남았다.`,
      );
      await you.say_and_wait(
        `ここには二人だけだ。この先の言葉は三女神さま以外、誰にも聞こえない。`,
      );
      await era.printAndWait(
        `${you.name}は${maru.name}の顔を見た。相手は、やっと悩みから解放されて体が微かに震えている。`,
      );
      await maru.say_and_wait(
        `どこから話せばいいかしら。実は、あの夜、私も現場にいたわ。`,
      );
      await you.say_and_wait(`뭐야?！`);
      await era.printAndWait(
        `${you.name}の背中に寒気が走り、両脚が震える。そのまま振り返って逃げたい。だが残った理性が、人は${maru.uma_sex_title}に勝てないと教えてくれた。`,
      );
      await era.printAndWait(
        `まして、${maru.uma_sex_title}の中でも抜きん出た${maru.name}だ。`,
      );
      await maru.say_and_wait(
        `${you.name}が思ったとおり、あの日の${
          callname
        }は顔色がおかしくて、視線が無意識に腕時計へ行ってたわ。`,
      );
      await maru.say_and_wait(`そのとき、嫌な直感が動いたの。`);
      await era.printAndWait(
        `${maru.name}は${you.name}が見たことのない仮面をつけ、無表情で語り続けた。`,
      );
      await maru.say_and_wait(
        `저녁 식사 후、アパートに戻ったと言ったけど、実際は愛車を近くの駐車場に仮置きして、脚力でトレセンに戻ったの。`,
      );
      await era.printAndWait(
        `裏切り者、畜生、罪人。頭の中に、${maru.name}と交わした約束が浮かぶ。`,
      );
      await you.say_and_wait(`${maru.sex}に会う顔があるか？`, true);
      await era.printAndWait(
        `それを思うと頭が真っ白になり、唇を無意識に噛み、胃がひっくり返るような吐き気が出た。`,
      );
      await maru.say_and_wait(
        `${
          callname
        }は逆探知の意識は強いけど、警戒した${maru.uma_sex_title}は、いちばん小さな音も逃さないわ。`,
      );
      await maru.say_and_wait(
        `遠くで${
          callname
        }が慌てて校舎に入るのを見て、一階で話し声が上がるまで待って、すぐ位置を特定できた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`${you.name}は口を開けたが、何も言えなかった。`);
      await era.printAndWait(
        `一日が一年のような感覚。逃げたいのに、鉛を流し込まれた脚が原地に釘付けになる。`,
      );
      await maru.say_and_wait(
        `本当は、${
          callname
        }が縁日に一緒に行かないって言ってたら、終わるまでとぼけるつもりだったの。`,
      );
      await era.printAndWait(
        `言葉には軽さがあるのに、笑顔ひとつ出さない${maru.name}が${you.name}をじっと見ている。`,
      );
      await maru.say_and_wait(
        `でも、${callname}が覚悟を決めた그렇다면、私も相応の敬意を返さないと。`,
      );
      await maru.say_and_wait(`じゃあ、${callname}。今は${you.name}の番よ。`);
      await era.printAndWait(
        `人類が太古から受け継いだ恐怖で${you.name}の頭は全速で回る。${you.name}의 결단은。`,
      );
      era.printButton('「譲らない」', 1);
      era.printButton('「미안해.」', 2);
      era.print(
        [
          '【警告。この選択肢を選ぶと、',
          maru.get_colored_name(),
          ' との関係は取り返しがつきません！】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}は迷わず${maru.name}の両目を受け止めた。`,
        );
        await maru.say_and_wait(
          `${you.actual_name}、満足できる答えを出しなさい。`,
        );
        await era.printAndWait(
          `${maru.name}の耳がゆっくり後ろへ倒れ、口調も焦り始める。`,
        );
        await you.say_and_wait(`一歩踏み違えたら、万丈の淵だ。`);
        await era.printAndWait(
          `どんどん激しく跳ねる心臓を無理に沈め、冷静なのは自分ではないかのようだ。`,
        );
        await era.printAndWait(
          `自分でもよくわからない。なぜ無意識に拒んだのか。`,
        );
        await era.printAndWait(
          `だが${you.name}は知っている。今は絶対に妥協できない。${you.name}は${maru.name}とままごとをしに来たの이(가) 아니다.その意志を見せないと。`,
        );
        await era.printAndWait(
          `本題に戻る。${maru.name}が気にしているのは何か。${
            maru.sex
          }を苦しめるのは、誓いを破ったこと以外に何がある？`,
        );
        await you.say_and_wait(
          `나는 ${you.name}をアイドルの神座から引き下ろしに来たんだ、${maru.name}。`,
        );
        await era.printAndWait(
          `${maru.name}は意図的に少し領域を解放した。${you.name}はレース場の${maru.uma_sex_title}たちが感じる恐怖を味わった。`,
        );
        await you.say_and_wait(
          `アイドルとは何か。崇拝され、運命を預けられる。他人に自分の背中を見せて前へ進ませるためだと言いながら、実際の${you.name}は、こんなにも傲慢だ。`,
        );
        await you.say_and_wait(
          `${you.name}は、無数の人が託した希望の千鈞の重みに耐えられるのか？`,
        );
        await you.say_and_wait(`俺だって知ってる。世界に完璧な人間예ない。`);
        await you.say_and_wait(
          `人である以上、必ず過ちを犯す。必ず間違いを出す。`,
        );
        await you.say_and_wait(
          `過ちは避けられない。悲しみと痛みのあとで、大切さがわかる。`,
        );
        await you.say_and_wait(`だが${you.name}は`);
        await you.say_and_wait(
          `頼れる大${maru.elder_sibling_sex_title}として、悩む${maru.uma_sex_title}たちを助けてもいる。`,
        );
        await you.say_and_wait(
          `だが後始末をしていない。${maru.uma_sex_title}たちが${you.name}を、あらゆる問題から逃げる避難所にしていることに気づいていない。`,
        );
        await you.say_and_wait(
          `こうして、${maru.uma_sex_title}に勝手に希望を預けられ、勝手に裏切ったと思われ、${maru.uma_sex_title}に憎まれる。`,
        );
        await you.say_and_wait(
          `${maru.uma_sex_title}たちは口では${you.name}の背中をアイドルだと言いながら、実際の行動では${you.name}を神のように崇拝している。`,
        );
        await you.say_and_wait(
          `${you.name}にそのつもりはなく、そんな考えもなかった。だが悲劇は、そうして生まれた。`,
        );
        await you.say_and_wait(
          `だから、その神座から降りてくれ。自分のためじゃない。地獄行きの片道列車が見えたから、${you.name}を引き止めてるんだ。`,
        );
        await era.printAndWait(
          `${maru.name}の気持ちはまったく構わず、胸に溜まっていた考えを一気に吐き出した。\n`,
        );
        await maru.say_and_wait(
          `じゃあ${you.name}の解決策はどこにあるの？ 世界に問題を見つける人예くらでもいる。足りないのは、一歩進んで解決できる人よ。`,
        );
        await maru.say_and_wait(
          `게다가,結局は${you.name}の一方的な言い分でしょ？`,
        );
        await maru.say_and_wait(
          `それが${you.name}が恐怖ででっち上げたものじゃないと、誰がわかるの？`,
        );
        era.printButton(
          `${maru.name}に嫌われる危険を冒したように、${you.name}も、なぜ、誰のために危険を冒したか知ってるはずだ！`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `続けようとした${maru.name}は、${you.name}の言葉に遮られた。`,
        );
        await you.say_and_wait(
          `後輩たちに大量の希望と期待を預けられた経験はない。だが知ってる。${maru.name}は愛で${
            maru.couple_title
          }を助けている。`,
        );
        await you.say_and_wait(
          `粉々になっても、二度と戻れなくても${
            maru.couple_title
          }を助ける、その愛というものだ！`,
        );
        await you.say_and_wait(
          `だから、${maru.name}が自分の道を歩くのを止めない。`,
        );
        await era.printAndWait(
          `${you.name}が領域に真正面から向き合うのは初めてだ。だが胸に言い難い温もりと情熱があり、${you.name}は${
            maru.sex
          }の両目を見つめた。`,
        );
        await you.say_and_wait(
          `心の悲しみ、未来への迷い、少し分けてもいいか？`,
        );
        await you.say_and_wait(
          `一人で五指も見えない闇の中を進む그렇다면、前方を照らす明かりがあればいい。`,
        );
        await you.say_and_wait(
          `俺に任せてくれ。トレーナーとしてはまあまあ하지만,明かりとしては自信がある。`,
        );
        await you.say_and_wait(`一歩ずつ、少しずつ、他人のために死ぬ。`);
        await era.printAndWait(
          `그리고.${you.name}は、${maru.sex}の気勢がゆっくり消え、だんだん小さくなるのを見た。`,
        );
        await era.printAndWait(
          `最後に${maru.name}は、自責するようにため息をついた。`,
        );
      } else {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `一年を過ごしたように長く、${you.name}은(는)  ${maru.name} に犯人を見る目でじっと見られた。最後に${
            maru.sex
          }は視線を引いた。`,
        );
        await maru.say_and_wait(`じゃあ、これからの日々も、よろしくね♪`);
        await era.printAndWait(
          `何も起きなかったかのように、${maru.sex}は笑顔で${you.name}に手を差し出した。`,
        );
        await you.say_and_wait(`よろしく`);
        await era.printAndWait(
          `${maru.sex}は相変わらず柔らかい口調하지만,${you.name}은(는) 知っている——`,
        );
        await era.printAndWait(`何か温かいものが、闇の中へ、自分の魂ごと\n`);
        await era.printAndWait(`そして、やっと 終わった。`);
        await era.printAndWait(`残ったのは静寂だけ。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_40
  ws_47_40: (() => {
    const title = '할로윈';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `深海で目覚めた私の目の前は、闇以外何も見えない。`,
      );
      await era.printAndWait(
        `意外なことに、まだ自由に呼吸でき、自分の心拍も感じられる。`,
      );
      await era.printAndWait(`出口はどこ？ 어떻게 하면 좋을까? 죽는 건가?`);
      await era.printAndWait(
        `そんな問いが頭の中を徘徊し、意識をほとんど飲み込みそうになる。`,
      );
      await era.printAndWait(`だが袖口に、冷たい摩擦が伝わった。`);
      await era.printAndWait(
        `前へ進めと強制するように、風に深海から連れ出され、空へ飛んだ。`,
      );
      era.printButton(`「ん、また悪夢か。」`, 1);
      await era.input();
      await era.printAndWait(
        `悪夢から飛び起きて、背中がもうびしょ濡れだと気づいた。`,
      );
      await you.say_and_wait(`なぜ？`, true);
      await era.printAndWait(
        `朝の陽がカーテンを通して枕に落ちる。光の作用で、普段見過ごす埃まで輝いて見える。`,
      );
      await you.say_and_wait(
        `黒い海、いつ吹いたかわからない風、誰かの存在。`,
        true,
      );
      await era.printAndWait(
        `ばらばらの断片を마음出そうとすると、いつからかこれが大事だと感じ、わけのわからない不安が底から上がってきた。`,
      );
      await you.say_and_wait(`次はあんなB級映画、もう見ない。`, true);
      await era.printAndWait(
        `こんな奇妙なことに妙に真剣な自分が急に可笑しくなり、首を振って服を着ようとした。`,
      );
      await maru.say_and_wait(`똑똑.。`);
      await era.printAndWait(`扉の向こうからノックが聞こえた。`);
      if (era.get('love:4') >= 75) {
        await maru.say_and_wait(`예～${callname}、起きた？`);
        await you.say_and_wait(`すぐ行く。`);
        await you.say_and_wait(
          `もう${maru.name}の家に泊まるのに慣れたのか。`,
          true,
        );
        await era.printAndWait(`布団を畳み、服を着て仕事の準備を始めた。`);
      } else {
        await maru.say_and_wait(`예～${callname}、おはよう？`);
        await era.printAndWait(
          `${maru.name}예つものように훈련실へ来た。`,
        );
      }
      await era.printAndWait(`새로운 하루가 시작됐다.`);
      era.drawLine();
      await era.printAndWait(
        `最後の書類をフォルダに収め、今日の日程は一段落した。`,
      );
      await maru.say_and_wait(`수고했어.`);
      await era.printAndWait(`隣に座る${maru.name}がコーヒーを机に置いた。`);
      await you.say_and_wait(`ありがとう。`);
      await era.printAndWait(
        `高級ブランド이(가) 아니다.店でよく売るインスタントコーヒーだ。`,
      );
      await era.printAndWait(
        `もっと良いコーヒーや紅茶も飲んだことはあるが、どうしても慣れない。`,
      );
      await era.printAndWait(
        `結局、コンビニのコーヒーは三女神が人類に与えた宝物だ、と自分を慰めるしかない。`,
      );
      await maru.say_and_wait(`${callname}、今夜の予定は？`);
      await era.printAndWait(
        `伸びをしながら${maru.name}がソファから立ち上がった。`,
      );
      await you.say_and_wait(`予定？`);
      await era.printAndWait(`頭の中をすばやく振り返る。漏れはなさそうだ。`);
      await you.say_and_wait(`この先は、スタミナを上げるトレーニングかな？`);
      await era.printAndWait(`長距離レースに出る그렇다면、スタミナも大事だ。`);
      await maru.say_and_wait(
        `たまんないわ。スタミナトレーニングも大事だけど、${callname}、何か忘れてない？`,
      );
      await you.say_and_wait(`……？`);
      await maru.say_and_wait(
        `去年、一緒に할로윈パレードへ行くって約束したでしょ。${callname}、覚えてる？`,
      );
      await era.printAndWait(
        `困惑した顔の ${you.name} を見て、${maru.name}は結局言い返した。`,
      );
      await you.say_and_wait(`確か、そんな話をした気がする。`, true);
      await era.printAndWait(
        `스마트폰のメモを開き、下に少し滑らせて、去年の할로윈当夜に記録したその件を見つけた。`,
      );
      await you.say_and_wait(`本当に忘れっぽいな。`);
      await era.printAndWait(
        `もっと大事なことに出会ったから、優先度の低いことは一旦脇に置いたのか。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await you.say_and_wait(`一緒に出発しよう。`);
      await era.printAndWait(
        `${you.name}は${maru.name}の右手をそっと取り、先頭に立って훈련실を出た。`,
      );
      await maru.say_and_wait(
        `そういう感じで、할로윈の集まりにちょっと顔を出しましょう♪`,
      );
      await era.printAndWait(
        `${maru.name}の澄んだ笑い声が、風に吹かれる髪に乗り、喜びを훈련실へ伝えた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_48
  ws_47_48: (() => {
    const title = 'クリスマス';
    /**
     * 結末分岐：お姉さん的悩み＋少女的憂鬱を全部トリガー、風値=15→GE、15>風値>=10→TE
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `もう12月か。${you.name}은(는) 手のペンを止め、窓の外の雪を見た.`,
      );
      await era.printAndWait(`トレセンは毎年この時期、余計に寒いな.`);
      await era.printAndWait(
        `${you.name}は首を振り,手の書類に注意を戻そうとしたとき.`,
      );
      await maru.say_and_wait(`ふん흥흥♪`);
      await maru.say_and_wait(`예————${callname}。`);
      await era.printAndWait(
        `ドアノブが回り、${you.name} を魅了するその${maru.teen_sex_title}が扉を開けた.`,
      );
      await maru.say_and_wait(
        `${callname}、祝日も緩まないのね。${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }な私、そういう頑張り屋さん、好きよ♪`,
      );
      await era.printAndWait(
        `突然入ってきた ${maru.name}に驚いてペンを落とし、慌てて拾った${you.name}はむっと言い返した。`,
      );
      era.printButton(`「${maru.name}は、俺とデートするつもりか？」`, 1);
      await era.input();
      await era.printAndWait(`ところが、${maru.name}はもっと嬉しそうだった。`);
      await maru.say_and_wait(
        `ふふ～、${callname}はそんなに私とデートしたいの？ あら♪${
          maru.sex_code !== 1 ? '아가씨' : '멋진 남자'
        }な私の魅力、すごいじゃない⭐`,
      );
      await maru.say_and_wait(
        `${callname}が誘ってくれたんだから、今すぐ出発しましょう！`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `参ったわ、${callname}とこうして歩道を歩くのも悪くないわね。`,
      );
      era.printButton(`「ああ……眩しい」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}と冬服に着替えた${maru.name}が大通りを歩く.もともと美しい${
          maru.sex
        }が丹念に選んだ服を着たあとの独特の気質が、${you.name}の心を深く掴んだ.`,
      );
      await era.printAndWait(
        `観光客A:この方は${maru.name}ですよね?テレビで${maru.sex}の走りを見ました.`,
      );
      await era.printAndWait(
        `観光客B:${maru.name}だ！ 私は${you.name}のファンです！ どうかサインを！`,
      );
      await maru.say_and_wait(`あら,もうそんなに有名なの？`);
      await era.printAndWait(
        `まずい,${maru.sex}の到来に気づく人がどんどん増えてきた`,
      );
      await era.printAndWait(
        `${maru.name}の魅力が、無関係の人まで巻き込んでいる,`,
      );
      era.printButton(`(${maru.name}と過ごす時間を邪魔させない)`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${maru.name}のだんだん温かくなる小さな手を握り、歩幅を上げて追星のファンを振り切ろうとした`,
      );
      await maru.say_and_wait(`……후후♪`);
      await era.printAndWait(
        `後ろをぴったり追うファンの群れをやっと振り切ってから,市中心公園に着いたことに気づいた`,
      );
      await era.printAndWait(
        `息が上がる${you.name}に比べ,${maru.uma_sex_title}である${
          maru.sex
        }は呼吸のリズムさえ乱していない.`,
      );
      await era.printAndWait(
        `————普段のトレーニングに比べれば,前菜にも그렇다면ない.`,
      );
      await you.say_and_wait(`ふう……ふう……ふあ,やっと振り切れたな`, true);
      await maru.say_and_wait(`${callname},ここ、静かみたいね.`);
      await era.printAndWait(
        `交錯するLEDが道の両側の木に絡み,後ろから前方へ無限に伸びている.`,
      );
      await era.printAndWait(
        `彩灯がクリスマスの夜を照らし,12月の寒風にも一筋の温もりと光をもたらした.`,
      );
      era.printButton(`「ああ,ここはデートにいい場所だな」`, 1);
      await era.input();
      await maru.say_and_wait(
        `聖夜그렇다면、트레이너인 ${you.adult_sex_title}♪……いちばん好きな人と、ゆっくり流れる時間を分け合いたくない？`,
      );
      await you.say_and_wait(
        `そこまで言われて、この一歩を踏まないのは失礼すぎる！`,
      );
      await maru.say_and_wait(`ふんふん～、じゃあ${callname}の答えは？`);
      era.printButton(
        `${maru.actual_name_with_title}、俺とデートしてくれ！`,
        1,
      );
      await era.input();

      await maru.say_and_wait(
        `あら～${callname}、勇気があるわね。この勢いでそのまま受けたいけど、でも————`,
      );
      await era.printAndWait(
        `さっきの走りで ${you.name} の髪はぼさぼさになった`,
      );
      await maru.say_and_wait(
        `${callname}の様子、かわいいわね。デートより先に髪をとかしたほうがいいわ`,
      );
      era.printButton(`「ああ、예」`, 1);
      await era.input();

      await era.printAndWait(
        `${you.name}が返事する前に${maru.name}は自分のショルダーバッグから櫛を出した`,
      );
      await maru.say_and_wait(`${callname}、頭を下げて`);
      await era.printAndWait(
        `${you.name}はおとなしく${maru.name}の意図に従い、頭を下げた.`,
      );
      await maru.say_and_wait(
        `응……${you.name}の髪、少し乾いてるわ。${callname}、お疲れさま.`,
      );
      await era.printAndWait(
        `${maru.sex}はできるだけ力を抑えて優しく${
          you.name
        }の髪をとかす.その温かく懐かしい気配に${
          you.name
        }は、子どものころ芝で日向ぼっこした気配を마음出した.`,
      );
      await maru.say_and_wait(
        `……これでだいたいね♪ じゃあ、${callname}、今日のデートもよろしく.`,
      );
      era.printButton(`「こっちもよろしく」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는)  ${maru.name} の左手をきつく握り,この束の間の甘い時間をゆっくり味わった.`,
      );
      await maru.say_and_wait(
        `ところで,ここは今週いちばん人気のカップル聖地みたいね.`,
      );
      era.printButton(`「だから一路、ペアのカップルばかりなんだな」`, 1);
      await era.input();

      await maru.say_and_wait(
        `ふふ♪ 次のクリスマスも、ここで景色を見ましょう.`,
      );
      await maru.say_and_wait(
        `${callname},そのときは、景色は今よりずっと美しいわ。`,
      );
      await era.printAndWait(
        `12月の寒風が、${you.name}と${maru.name}の親密さを見届けたかのようだ.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_5
  ws_47_5: (() => {
    const title = '冬と春の境';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`トレーニング場`);
      await era.printAndWait(
        `${maru.uma_sex_title}たちはここで汗を流し、希望の未来へ進む。`,
      );
      await era.printAndWait(
        `朝日杯を経て、${you.name}たちは目を皐月賞の前哨戦——スプリングステークスに向けた。`,
      );
      await maru.say_and_wait(
        `予定どおり、第三コーナーを回ったら、今がスパートのとき！`,
      );
      await maru.say_and_wait(`このままアクセルを一気に踏み込むわ!`);
      await era.printAndWait(
        `逃げを取る${maru.uma_sex_title}は、他の走法の${maru.uma_sex_title}に比べ、序盤と中盤に注意の大半を置く。`,
      );
      await era.printAndWait(
        `序盤と中盤で作った優位をしっかり固定して、そのまま優位を取る考えだろう。`,
      );
      await era.printAndWait(
        `レースでは、同じ逃げを取る複数頭が、序盤と中盤で死闘を繰り広げることが多い。`,
      );
      await era.printAndWait(
        `こうしてレースをハイペースに持ち込み、差しと追込の${maru.uma_sex_title}のリズムを崩す。`,
      );
      await era.printAndWait(
        `하지만,まだ触れていない先行は、逃げ同士の戦いで終盤に速度を保てなくなったところで、温存した体力を一気に爆発させて優位を取る。`,
      );
      await era.printAndWait(`螳螂捕蝉、黄雀在後、か？`);
      await era.printAndWait(
        `しかし、${maru.name}が逃げを選んだから이(가) 아니다.そうではなく`,
      );
      await you.say_and_wait(
        `怪物と呼ばれるだけの${maru.uma_sex_title}だ`,
        true,
      );
      await era.printAndWait(
        `走ることを楽しむうちに、常人には届かない速度を、気づかないうちに手に入れた。`,
      );
      era.printButton(`「お疲れさま、少し休もう。」`, 1);
      await era.input();
      await maru.say_and_wait(`は……はあ……ふ～`);
      await era.printAndWait(`周りの芝は台風が通ったみたいに荒れている。`);
      await maru.say_and_wait(`고마워♪`);
      await era.printAndWait(
        `${you.name}が渡したタオルを受け取り、${maru.name}は額の汗を拭いた。濡れた長い髪からバニラの匂い이(가) ${you.name} の鼻に入る。`,
      );
      await era.printAndWait(
        `走ったあとに心からの満足を見せる、それが${maru.name}の本当の姿なのかもしれない。`,
      );
      era.printButton(`「懐かしい匂いだな。」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}の濡れた髪をタオルで乾かしながら、話題を探す。`,
      );
      await maru.say_and_wait(`${callname}、匂いに興味があるの？`);
      await you.say_and_wait(`うん、いい体の匂いだ。`);
      await maru.say_and_wait(`ふふ～、体の匂いみたいだけど、これは香水よ。`);
      await maru.say_and_wait(`気分転換に、この香りを選んだの。`);
      await maru.say_and_wait(`でも${callname}の反応を見る限り。`);
      await maru.say_and_wait(`なかなか受けがいいみたい。`);
      await maru.say_and_wait(
        `うん、${maru.elder_sibling_sex_title}もずっと流行の最前線に立ってるみたいね。`,
      );
      await era.printAndWait(`${maru.sex}の機嫌は、さらによくなったようだ。`);
      await you.say_and_wait(
        `流行にはあまり詳しくないけど、${maru.name}예つもすごく魅力的だ。`,
      );
      await maru.say_and_wait(
        `${callname}がそう言っても、ご褒美は出ないわよ？`,
      );
      era.printButton(`「本当にいらない」`, 1);
      era.printButton(`「もう、すごくいい마음出をもらった」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`え——`);
        await maru.say_and_wait(
          `${callname}がそんな言い方すると、ちょっとかわいいわ～`,
        );
        await era.printAndWait(`${maru.name}は${you.name}の頭を軽くなでた。`);
        await maru.say_and_wait(
          `흥흥흥~、やっぱりこういう${callname}がいちばんかわいい♪`,
        );
      } else {
        await maru.say_and_wait(`え——`);
        await era.printAndWait(
          `${maru.name}は不思議そうな顔で${you.name}を見た。`,
        );
        await maru.say_and_wait(
          `トレーナー……${callname}、そういう言い方はずるいわ。`,
        );
        await maru.say_and_wait(
          `……${callname}、他の子にも同じこと言ってるの？`,
        );
        await era.printAndWait(
          `困ったことに出会ったみたいに、${maru.name}は${you.name}をじっと見つめた。`,
        );
        await maru.say_and_wait(
          `${callname} がそんな奔放な人になったら、${maru.elder_sibling_sex_title}も傷つくわよ？`,
        );
        await you.say_and_wait(`정말 미안해.次はない。`);
        await maru.say_and_wait(
          `はぁ、とにかく、他の子には絶対言わないで。今回の相手が私그렇다면まだいい。いや、私でもだめ。`,
        );
      }
      await you.say_and_wait(`그러고 보니.、${maru.name}。`);
      await you.say_and_wait(`急だけど、ずっと気になってることがある。`);
      await maru.say_and_wait(
        `あら、${callname}にも${maru.elder_sibling_sex_title}に尋ねるときがあるの？`,
      );
      await maru.say_and_wait(
        `安心して。知ってる部分は、ちゃんと${you.name}に教えるわ。`,
      );
      await era.printAndWait(
        `${you.name}は汗を拭いたタオルの水を絞り、畳んでバッグに戻した。`,
      );
      await you.say_and_wait(
        `${maru.name}예つも後輩に人気だ。だから思うんだけど。`,
      );
      await you.say_and_wait(
        `もしかして、あくまでもしかしだ。${maru.name}、${you.name}`,
      );
      await you.say_and_wait(`${maru.name}の願いは、何なんだ？`);
      await maru.say_and_wait(
        `응——庭の庭師みたいに、雑草だらけの土に種を埋める。`,
      );
      await maru.say_and_wait(
        `水をやり、土をほぐし、肥料をやる。外がどう変わっても、ただ期待する。`,
      );
      await maru.say_and_wait(
        `時には嵐に遭い、土をほぐすときに厄介な雑草にも会う。でも、自分の執念で芽を出した花たちを見て。`,
      );
      await maru.say_and_wait(
        `美しい花がやっと咲く瞬間、万感胸に迫って流す喜びの涙。それが、私の存在する意味だと思う。`,
      );
      await you.say_and_wait(
        `だから、${maru.name}はずっと黙って頑張ってたんだな。`,
      );
      await maru.say_and_wait(
        `もちろ응.こうしてまだ若い後輩たちをゆっくり進ませて、${
          maru.couple_title
        }が実を結ぶときを待つ。`,
      );
      await maru.say_and_wait(`すべての苦労は、相応の報いを得る。`);
      await era.printAndWait(
        `昂ぶった感情もなく、${maru.name}は穏やかに自分の夢を話した。`,
      );
      await you.say_and_wait(`……きれいだな、${maru.name}。`);
      await you.say_and_wait(`ありがとう。この先もよろしく。`);
      await maru.say_and_wait(`こちらこそ、よろしくね。`);
      await era.printAndWait(
        `冬の寒さはまだ残っている。だ이(가) ${maru.name} の笑顔は、${you.name}に温かさを感じさせた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_6
  ws_47_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, falcon, minoru, you, callname) => {
      await era.printAndWait(
        `住んでいるトレーナーアパートからトレセンへ来ると、今日の空気예つより甘い。`,
      );
      await era.printAndWait(
        `トレセンの生徒たちが、朝からいつもの生気のない顔ではなく、二人組で선물をもらう人の表情を興奮して話している。`,
      );
      await era.printAndWait(`バレンタインがまた来たと気づいた。`);
      await era.printAndWait(
        `${maru.uma_sex_title}からチョコをもらったらどう返すか考えながら훈련실の前まで来たが、声をかけてくる人예なかった。`,
      );
      await you.say_and_wait(
        `リア充は爆発しろ。FFF団の聖火が${you.name}たちを焼き尽くせ。`,
        true,
      );
      await era.printAndWait(
        `呪いながらも、空気に糸を引く甘さから逃げるように、当て所なく走った。`,
      );
      await era.printAndWait(`그리고.、誰かにしっかりぶつかった。`);
      era.printButton(`「悪い」`, 1);
      await era.input();
      await era.printAndWait(`軽い衝突なのに、この匂いは意外と馴染みがある。`);
      await maru.say_and_wait(`ハロー、${callname}？`);
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `目の前の${maru.teen_sex_title}と大きな袋のチョコを見て、${you.name}は考え込んだ。`,
      );
      await you.say_and_wait(`今年もこんなに多いのか？`);
      await maru.say_and_wait(
        `去年入学した後輩と、トレセンを出たばかりの${maru.uma_sex_title}たち。気づいたらこんなに溜まってたわ。`,
      );
      await era.printAndWait(
        `このままじゃ어쩔 수 없다.二人でチョコを主食にしても……いや、一人じゃ食べきれない。`,
      );
      await you.say_and_wait(`受け取るのも受け取らないのも、進退窮まったな。`);
      await era.printAndWait(`このチョコを処理する方法はないか？`);
      await you.say_and_wait(
        `まあ、ずっと支えてくれたファンへの선물にしよう。`,
      );
      await you.say_and_wait(`この数그렇다면、ファンサービスとしては十分すぎる！`);
      await maru.say_and_wait(`でも会場はどこがいい？`);
      await era.printAndWait(`나는 `);
      era.printButton(`「スタジオを借りて臨時会場にしよう！」`, 1);
      era.printButton(`「商店街でストリートライブにしよう！」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`いい感じね。じゃあそれで。`);
        await era.printAndWait(
          `${you.name}は以前連絡した有名な監督に空き部屋を尋ね、すぐ返事が来た。`,
        );
        await era.printAndWait(
          `ウマ推しで夕方にファン感謝会を開くと告知すると、すぐ大量に拡散された。`,
        );
        await era.printAndWait(
          `ファン感謝会が無事終わったのはさておき、チョコがなくても${maru.name}と握手したがるファンが多かった。`,
        );
        await era.printAndWait(
          `${maru.name}が笑顔のまま3時間立ち続けたのを見て、${you.name}はアイドルという言葉に深い畏敬を持った。`,
        );
        await era.printAndWait(
          `翌日のファッション誌に、${maru.name}潮流という見出しが載った。`,
        );
      } else {
        await maru.say_and_wait(
          `ストリートライブ？ ファルコンがやりそうなことね。`,
        );
        await maru.say_and_wait(`意外と面白いかも！`);
        await era.printAndWait(
          `${falcon.name}にゲリラライブのやり方と、${
            minoru.name
          }の追跡から逃げるコツを教わった。`,
        );
        await era.printAndWait(
          `ウマ推しで夕方に商店街でゲリラライブすると告知すると、すぐ大量に拡散された。`,
        );
        await era.printAndWait(
          `ファン感謝会が無事終わったのはさておき、チョコがなくても${maru.name}と握手したがるファンが多かった。`,
        );
        await era.printAndWait(
          `${maru.name}が笑顔のまま3時間立ち続けたのを見て、${you.name}はアイドルという言葉に深い畏敬を持った。`,
        );
        await era.printAndWait(
          `そのあと、熱心な店主たちから日用品をたくさん無料でもらった。`,
        );
      }
      await you.say_and_wait(`やっと終わった。`);
      await era.printAndWait(
        `熱心なファンに一人ひとり応えたあと、荒れ果てた現場に残ったのは${you.name}たち二人だけだった。`,
      );
      await you.say_and_wait(`수고했어.本当に수고했어.`);
      await era.printAndWait(
        `${you.name}は絶対の敬意を込めて${maru.name}を見た。`,
      );
      await era.printAndWait(`夕日の下では、神のように侵しがたい。`);
      await maru.say_and_wait(
        `アイドル活動を支えてくださる皆さま、${maru.name}です。これからもよろしく——あ、${
          callname
        }。`,
      );
      await era.printAndWait(`一瞬、何と返していいかわからない。`);
      await maru.say_and_wait(`그러고 보니.、これもあるわ♪`);
      await era.printAndWait(
        `${maru.name}は裏から、きれいに包んだチョコの箱を出した。`,
      );
      await maru.say_and_wait(`ハッピーバレンタイン、${callname}♪`);
      await era.printAndWait(
        `${you.name}は${maru.name}からチョコを受け取った。`,
      );
      await maru.say_and_wait(
        `この先も${maru.name}と一緒に進んでね、${callname}♪`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_7
  ws_47_7: (() => {
    const title = 'アイドル';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`훈련실`);
      await era.printAndWait(`スプリングステークスまで、あと二週間。`);
      await era.printAndWait(
        `最後の書類を処理したあと、${you.name}은(는) ペンを置き、長い息を吐いた。`,
      );
      await you.say_and_wait(`やっと終わった。`);
      await you.say_and_wait(`하지만.`);
      await era.printAndWait(`ずっと抱えていた疑問。`);
      await era.printAndWait(`強く押さえつけてきた。いや、마음出したくない。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(`庭師。`);
      await you.say_and_wait(`いつも強者として問題に向き合う。`);
      await era.printAndWait(
        `教育者として、自分の経験でかわいい小さな${maru.uma_sex_title}をできるだけ助けたい。`,
      );
      await you.say_and_wait(`하지만,庭師の道は、そんな理想の世界이(가) 아니다.`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `실례하겠습니다.`);
      await era.printAndWait(`痩せた小さな${maru.uma_sex_title}が入ってきた。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あの、마루젠 先輩はこちらですか？`,
      );
      await you.say_and_wait(
        `${maru.name}は用事で少し席を外してる。${you.name}、ここで座って休んでいってくれ。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `そうですか……あ、감사합니다!`,
      );
      await era.printAndWait(
        `${you.name}はニンジンジュースを缶一本、ソファのテーブルに置いた。`,
      );
      await era.printAndWait(
        `${you.name}は途中まで見ていた、${maru.name}の朝日杯の映像を開いた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `え、これ마루젠 先輩の！`,
      );
      await you.say_and_wait(`${you.name}も映像は好きか？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `네! 마루젠 先輩のゴールのクローズアップ、五六回は繰り返し見ました！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `というか、마루젠 先輩の振り方を真似たら、私もG3で勝てるかも！`,
      );
      await you.say_and_wait(`……そうなのか？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `え……응.本格化が早かったので、中学のころから${maru.uma_sex_title}として出てました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でも三年経っても、メイクデビュー以外は、いちばんいい成績でもG3の5着です。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}は手のニンジンジュースを抱え、中のオレンジ色の液体を見つめた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `たくさん努力もしたんです。でも、ほとんど成長がありませんでした。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `同じことを繰り返して、繰り返して、ぼんやり過ごしてきました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `方法がおかしいのかも、と思ったこともあります。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でも、頭の中で少し考えただけで、そのまま置きました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `たぶん、私は${maru.uma_sex_title}に向いてない。別の道を探す時期なのかも。`,
      );
      await era.printAndWait(
        `言い終えると、${maru.uma_sex_title}は黙って${you.name}と${maru.name}が取ったトロフィーを見つめた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.uma_sex_title}の世界は、払えば返ってくる優しい世界이(가) 아니다.`,
      );
      await era.printAndWait(`それ하지만.`);
      era.printButton(`「払ったものは、いつか返ってくる」`, 1);
      era.printButton(`「早く退くのも、一つの選択だ」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`払ったものは、いつか返ってくる。`);
      } else {
        await you.say_and_wait(`早く退くのも、一つの選択だ。`);
      }
      await era.printAndWait(
        `心が乱れている。この${maru.uma_sex_title}も、そう思っているのだろう。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `……감사합니다.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あ、실례합니다, 長く居すぎました。마루젠 先輩がまだ来ない그렇다면、先に실례하겠습니다.`,
      );
      await era.printAndWait(
        `飲み終わった缶をゴミ箱に入れ、${maru.uma_sex_title}は${you.name}に別れを告げた。`,
      );
      await you.say_and_wait(`${you.name}の武運を祈る。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `うん、さよう그렇다면。`,
      );
      await era.printAndWait(
        `苦い笑顔の${maru.uma_sex_title}は、훈련실の扉をそっと閉めた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_9
  ws_47_9: (() => {
    const title = '殿堂入り週（因子継承）';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`講堂\n`);
      await era.printAndWait(
        `殿堂入り週は、トレセンでもっとも大事な行事のひとつだ。`,
      );
      await era.printAndWait(
        `この日、多くの殿堂入り${maru.uma_sex_title}がトレセンで講演する。`,
      );
      await era.printAndWait(
        `先輩たちの経験は、デビューしたばかり／まだデビューしていない${maru.uma_sex_title}たちにとって貴重だ。`,
      );
      await era.printAndWait(
        `その重要性から、${you.name}と${maru.name}は早く講堂へ来て講演の始まりを待っていた。`,
      );
      await maru.say_and_wait(
        `レース場で先輩たちと競えたら、意外と面白いかも♪`,
      );
      await era.printAndWait(
        `講演台の殿堂入り${maru.uma_sex_title}たちを見て、${maru.name}は期待した顔をした。`,
      );
      await era.printAndWait(
        `${you.name}は横でキーワードを素早く拾い、パソコンに記している。`,
      );
      await maru.say_as_passer_by_and_wait(
        `殿堂入り${maru.uma_sex_title}A`,
        `……皆さんご存じのとおり、この世界は三女神さまが創られた……`,
      );
      await era.printAndWait(
        `台上で講演する殿堂入り${maru.uma_sex_title}が、突然三女神さまに触れた。`,
      );
      await maru.say_and_wait(`그러고 보니.、${callname}は知ってる？`);
      await era.printAndWait(
        `横に座った${maru.name}が視線を${you.name}へ向けた。`,
      );
      await maru.say_and_wait(
        `中庭の三女神像に祈ると、他の世界からの祝福がもらえるらしいの。`,
      );
      await maru.say_and_wait(`不思議な力まで起きることもあるって。`);
      await era.printAndWait(
        `周りに雷のような拍手が起き、講演した${maru.uma_sex_title}が台を下り、行事は次の段階へ入った。`,
      );
      await era.printAndWait(
        `その隙間に、${you.name}は振り返って${maru.name}を見た。`,
      );
      await era.printAndWait(
        `周年記念の服に着替えた${maru.sex}が、${you.name}の返事を待っている。`,
      );
      era.printButton(
        `「${maru.name}が壇上に立つ瞬間を、楽しみにしてる。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`뭐야? ${callname}、私をそんなに高く見てるの？`);
      era.printButton(
        `こんなに優しくて大人な大${maru.elder_sibling_sex_title}は、かなり珍しいよ。`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`この先、ちゃんとトレーニングしないとね！`);
      await you.say_and_wait(`一緒に頑張ろう！`);
      await era.printAndWait(
        `훈련실に戻ったあと、${you.name}たちは並んで映像を見て、深夜まで過ごした。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_5
  ws_5: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}からの선물`;
    /**
     * 마루젠 スキーがプレイヤーをドライブに誘う
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`훈련실`);
      era.println();
      await era.printAndWait(`똑똑.`);
      await maru.say_and_wait(`ハロー${callname}！`);
      await era.printAndWait(
        `チョコレートの山を抱えた${maru.name}이(가) ${you.name} の훈련실に入ってきた。`,
      );
      era.printButton(`「手伝おうか？」`, 1);
      await era.input();
      await era.printAndWait(
        `目の錯覚かと疑うほど、${maru.name}はチョコレートの山を抱えて훈련실へ来た。`,
      );
      await maru.say_and_wait(`後輩たちが思ったより熱くて、たまんないわ。`);
      await maru.say_and_wait(
        `日ごろの마루젠 先輩へのお礼だとか言って、このチョコを押し込んできて——あ、ここに置いていい？`,
      );
      era.printButton(`「後輩たち、${you.name}に好かれてるな」`, 1);
      await era.input();
      await era.printAndWait(
        `小テーブルの菓子と漫画を床に下ろし、${maru.name}の手からチョコの一部を受け取った。`,
      );
      await maru.say_and_wait(`すごっ——後輩の期待、重いわね。`);
      await era.printAndWait(
        `崩れそうなチョコの塔から解放された${maru.name}は、少し困った笑顔でソファに座った。`,
      );
      await maru.say_and_wait(`${callname}、サンキュー♪`);
      await you.say_and_wait(
        `お礼に、かわいい後輩たちの話を聞かせてくれないか？`,
      );
      await era.printAndWait(
        `${you.name} もそのままソファに座り、${maru.name}の目を正面から見た。`,
      );
      await maru.say_and_wait(
        `응——${callname}の頼み그렇다면。あ、그러고 보니.この前、すごく沈んでる子がいたわ。`,
      );
      await maru.say_and_wait(
        `——選抜で負けただけなのに、泣きながら相談に来て。${
          maru.sex
        }の話をちゃんと聞いたあと、自分の走りの心得を少し話しただけなのに、${
          maru.sex
        }はすごく真剣に聞いてくれたの。`,
      );
      await maru.say_and_wait(
        `微妙なところにも自分の考えを出して、ノートはびっしり一ページ。おかげで私の収穫も少なくなかったわ。`,
      );
      await maru.say_and_wait(
        `帰る前にきちんと礼を言って、そのあとも無事にトレーナーと契約できたそうよ♪`,
      );
      await maru.say_and_wait(`마음出すたびに、この感じが好きなの⭐`);
      await you.say_and_wait(`いい経験だな。`);
      await maru.say_and_wait(`^_^私もそう思う`);
      await maru.say_and_wait(`그러고 보니.、${callname}はチョコもらった？`);
      await era.printAndWait(`${maru.name}は視線を ${you.name} の机へ向けた。`);
      await you.say_and_wait(
        `残念ながら。チームにいたころは${maru.uma_sex_title}からチョコをもらえたけど、独立してからは義理チョコすら見当たらない。`,
      );
      await maru.say_and_wait(`それは残念ね。`);
      await maru.say_and_wait(`……うん`);
      await maru.say_and_wait(`그렇다면、一緒にチョコを選びに行きましょう♪`);
      await era.printAndWait(
        `いい方法を마음ついたらしい${maru.name}の耳がぴんと立ち、目を輝かせて ${you.name}을(를) 바라보았다.`,
      );
      await maru.say_and_wait(`ちょっとの間よ、지금 바로 출발!`);
      await you.say_and_wait(`やめておこう。`, true);
      await era.printAndWait(
        `そう言いたかったが、店を真剣に考えている${maru.name}を見て、${you.name}은(는) 口を閉じた。`,
      );
      await you.say_and_wait(`これくらい그렇다면、出ても大丈夫だろう。`, true);
      era.drawLine();
      await maru.say_and_wait(`今日も元気そうね。愛車！`);
      era.printButton(`「愛車か？ ${you.name}、よろしく！」`, 1);
      await era.input();
      await maru.say_and_wait(`じゃあ${callname}は助手席ね。`);
      await maru.say_and_wait(
        `愛車も、${callname}みたいな新しい友達に会えて喜んでるわ。`,
      );
      await you.say_and_wait(`ちょっと興奮するな。`, true);
      await maru.say_and_wait(`ふふ、愛車も嬉しそう♪`);
      await maru.say_and_wait("準備예い？Let's go！");
      await you.say_and_wait(`응? これがスポーツカーカーカーなのかああああ。`);
      era.drawLine();
      await maru.say_and_wait(
        `ふう——久しぶりに暴れたら、たまんないわ！ ${callname}も感じた……${
          callname
        }？`,
      );
      era.printButton(
        '「ここはエデンじゃなかったのか？ 三女神さま、初めまして」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `返事する勇気すら失い、尻尾を巻いて逃げる ${you.name}은(는) 、${maru.uma_sex_title}に追われるニンジンそのものだった。`,
      );
      await maru.say_and_wait(
        `ん、刺激が強すぎたかしら。${callname}、生きる気力がなさそう。`,
      );
      await era.printAndWait(
        `その場に残された ${maru.name}은(는) 、ひとりでつぶやいていた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_14
  ws_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `今日は팬 감사제。${maru.uma_sex_title}たちがファンの支援に感謝してステージをする日だ.`,
      );
      await era.printAndWait(
        `トレセン学園のあちこちに、${maru.uma_sex_title}が用意した催しがある.`,
      );
      await era.printAndWait(
        `珍しく空いた ${you.name} もこの機会に歩き回り,溜まった圧力を十分にほぐした.`,
      );
      await era.printAndWait(
        `${maru.name}は${
          you.name
        }の担当${maru.uma_sex_title}として,今は後輩たちのステージを見ている.`,
      );
      await era.printAndWait(
        `来た者の足音を聞き,無意識に振り返り,${you.name}へ優しい微笑を見せた.`,
      );
      await maru.say_and_wait(
        `${callname}も、${maru.uma_sex_title}たちのステージを見に来たの？`,
      );
      era.printButton(`「うなずく」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${
          maru.name
        }のそばに立ち,目の前のステージで${maru.uma_sex_title}たちが懸命にいちばん美しい一面を見せているのを見た.`,
      );
      await maru.say_and_wait(
        `後輩たち、みんな活気があるわね。${callname}もそう思う？`,
      );
      era.printButton(
        `「${maru.couple_title}はみんな${maru.name}に동경て,${
          maru.sex
        }の背中を超えたいから必死に頑張ってる」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `あら♪ ${callname}は毎回、意外なサプライズをくれるわね.`,
      );
      await maru.say_and_wait(
        `じゃあ,${callname},私がステージに上がるのを見たい？`,
      );
      await era.printAndWait(
        `${maru.name}の尻尾がいつの間にか${you.name}の太ももに絡みついた.幸い周囲の観客はステージの空気に燃えていて、こちらの小さな動きには気づいていない.`,
      );
      await era.printAndWait(
        `${maru.name}は${you.name}の急所を察したようで,さらに遠慮なく全身を${you.name}の腕に寄せた.`,
      );
      era.printButton(`「${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `二人のあいだに悪い噂が立ち${
          maru.sex
        }の前途と${you.name}の解雇に響くのが怖く,${you.name}の体は一瞬硬直した.`,
      );
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}♪`,
      );
      await era.printAndWait(
        `${you.name}は周囲の視線が全部${you.name}を見ている気がして,口が渇き始めた.`,
      );
      await maru.say_and_wait(
        `${
          callname
        }のその反応もかわいいわね.残念だけど,そろそろ私の出番よ.視線は私から外さないでね.`,
      );
      await era.printAndWait(`気がつくと${maru.sex}はもうステージの上にいた.`);
      await era.printAndWait(
        `${you.name}は急いで周囲の観光客からサイリウムを借り,ファンの波に乗って舞い始めた.`,
      );
      await maru.say_and_wait(
        `風を楽しみ,風を追う${maru.uma_sex_title},${
          maru.name
        }.今からファンと後輩たちに、私の歌を捧げるわ.`,
      );
      await era.printAndWait(`古い曲を歌う、今日のスター。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = '夏季合宿開始';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `三年目の夏季合宿が今、正式に始まる。去年とはまったく違う心持ちで、${you.name}と${maru.name}は一緒に砂浜へ向かった.`,
      );
      await maru.say_and_wait(
        `ふふ♪ 今年もみんなを後ろに置いたわね,${callname}.`,
      );
      await era.printAndWait(
        `そばの愛馬は相変わらず、他の${maru.uma_sex_title}より先に砂浜へ着くのが好きだ。`,
      );
      await you.say_and_wait(`${maru.name}、機嫌がいいな`);
      await maru.say_and_wait(
        `あら,当たり前でしょ。去年ちゃんと楽しめなかった青春を、今年全部取り戻さないと.`,
      );
      await era.printAndWait(
        `${maru.name}は黒い水着を用意したらしい.${
          maru.sex
        }の体に合わせて、余計に魅力が溢れている.`,
      );
      await you.say_and_wait(
        `普段の${maru.name}は朝寝坊が好きなのに、今日は逆に${maru.sex}が起こしに来た.`,
      );
      await maru.say_and_wait(
        `とにかく今は合宿の時間をしっかり楽しむときよ！ でも、日焼け止めを塗るのが先ね？`,
      );
      await maru.say_and_wait(
        `${callname}、${
          you.name
        }に日焼け止めを塗ってもらえる？ 今年の夏は予想より暑いの。`,
      );
      era.printButton(`「すぐ行く」`, 1);
      await era.input();
      await era.printAndWait(`夏季合宿は、そんな軽い空気の中で始まった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_30
  ws_95_30: (() => {
    const title = '縁日';
    /**
     * 三年目の縁日。もっと軽い感覚で町を歩く
     * 故地再訪、万感胸に迫る
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `去年のこのとき、初めてこの町の熱情を知った。同じここで、運命の軌跡が変わった。`,
      );
      await era.printAndWait(
        `青臭い自我と、指の隙間から静かに流れた時間が、一路前へ進んだ跡になった。`,
      );
      await era.printAndWait(
        `再び訪れた町を見て、胸に湧く感情は初訪より複雑だ。`,
      );
      await era.printAndWait(
        `入口を間違えて方位を確かめ直したこと、親切な店主がくれた地図、盛大な祭りの演目。`,
      );
      await era.printAndWait(
        `人波に乗って記憶の場所へ進むと、往時の記憶が細く緩やかな流れのように湧く。`,
      );
      await maru.say_and_wait(`${callname}。`);
      await era.printAndWait(`見慣れた姿が入口に立っている。`);
      era.printButton(`「${you.name}を待たせて미안해.。」`, 1);
      await era.input();
      await maru.say_and_wait(`私も、つい今しがた着いたところよ。`);
      await maru.say_and_wait(
        `金魚すくい、りんご飴、縁結びのお守り、最後はステージの上の演目。今度は마음切り楽しんでこそ、来た甲斐があるわ！`,
      );
      era.printButton(`「一緒に出発しよう」`, 1);
      await era.input();
      await era.printAndWait(`二人の手はきつく繋がった。`);
      await maru.say_and_wait(`これから先も、こうしてずっとそばにいてね？`);
      await era.printAndWait(` ${maru.name}は${you.name}を一目見た。`);
      await era.printAndWait(
        `${you.name}は手を繋いだ姿勢から、少し強引に相手を引いて進んだ。`,
      );
      await era.printAndWait(
        `予想していた不満はない。${you.name}は掌から伝わる力がどんどん大きくなるのを感じた。万力にきつく挟まれたようだ。`,
      );
      await era.printAndWait(
        `痛みを感じた${you.name}は無意識にその源を見た。${maru.name}は悪賢い笑顔を見せた。`,
      );
      await era.printAndWait(
        `大人の矜持を徹底的に捨て、子どもみたいにふざけて遊ぶ。`,
      );
      await era.printAndWait(
        `このままでは負けると気づいた${you.name}は、歩幅を上げた。`,
      );
      await era.printAndWait(
        ` ${maru.name}の目が吐く「現役の${maru.uma_sex_title}と走り比べるなんて、${you.name}はまだ百年早い」と、そのせいで余裕を装って${you.name}の手を放し、優雅な歩みで${you.name}を超えようとする。`,
      );
      await era.printAndWait(
        `——だが${you.name}は${maru.sex}の腰をそっと環し、愛情に満ちた目で相手を真っ直ぐ見た。`,
      );
      await maru.say_and_wait(
        `응? トレーナー……${callname}、隣にまだ人がいるわ。`,
      );
      await era.printAndWait(
        `周囲は${you.name}たちの親密な仕草に気づいても、熱恋中のカップルの戯れだとしか思わない。たまに双方を認めた観光客も、何かに気づくと歩幅を上げて去る。`,
      );
      await era.printAndWait(`一時、周囲には${you.name}たち二人だけになった。`);
      await maru.say_and_wait(
        `あらあら、少女漫画から飛び出してきた話みたいね。${callname}はもう、16、17歳の思春期の子どもじゃないでしょ？`,
      );
      await era.printAndWait(
        `この曖昧な空気で劣勢の ${maru.name}が、主導権を取り戻そうとしている。`,
      );
      era.printButton(`「子どもで、何が悪い？」`, 1);
      await era.input();
      await era.printAndWait(
        `そこで${you.name}は${maru.sex}の額に軽く触れ、言い表せない爽快感で相手を見た。玩具を取ったような得意げな顔だ。`,
      );
      await maru.say_and_wait(
        `——そうね。${callname}がそんなことを言う그렇다면、覚悟はできてるでしょうね。`,
      );
      await era.printAndWait(
        `得をして、そのまま身を引こうとした${you.name}が突然重心を失い、${maru.name}を囲んでいた手も緩んだ。`,
      );
      await era.printAndWait(
        `그리고.左耳に甘い吐息と、全身へ伝わる電流を感じた。`,
      );
      await maru.say_and_wait(`——`);
      await era.printAndWait(
        `普段の見慣れた感触なのに、${you.name}には一筋の苛立ちと得意が混じって聞こえた。`,
      );
      await era.printAndWait(
        ` ${maru.name}の指が${you.name}の胸をそっと滑る。長い爪は肌を破らず、ちょうどいい。${you.name}の体は恐れと興奮で微かに震える。`,
      );
      era.printButton(`「この先、花火大会もあるだろ？ 急がないと、」`, 1);
      await era.input();
      await era.printAndWait(
        `「まだ足りない」。${maru.name}の指はまだ止まらない。`,
      );
      era.printButton(
        `「去年の遺憾を埋めるため、${maru.name}と一緒にこの素敵な마음出を持ちたい！」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}はやっと、それ以上の動きを止めた。`);
      await maru.say_and_wait(`——미안해.お姉さんも、少し失態ね。`);
      await era.printAndWait(
        `口調に懺悔は一筋もない。顔には、レースを十分楽しんだあとだけの満足がある。`,
      );
      await maru.say_and_wait(
        `${callname}とこれから一緒に作る마음出と、その上でもっと強い満足を思うと、お姉さん、少し欲張りかしら？`,
      );
      await maru.say_and_wait(
        `응——消極的な気持ちはNGよ！ この先の一分一秒に深い마음出を残さないのは、生命への恥ずべき浪費！`,
      );
      await era.printAndWait(
        `祭りの音楽が風の媒体に乗って${you.name}たちの耳へ届いた。`,
      );
      await era.printAndWait(
        `空に咲く鮮やかな赤い花が、祭りの最後の始まりを示す。`,
      );
      await era.printAndWait(
        `그리고. ${maru.name}は${you.name}の腕を取った。`,
      );
      await era.printAndWait(`그리고.二人は歩幅を上げた。`);
      await era.printAndWait(
        `最後に${you.name}と ${maru.name}は、恋人だけが持つ、測れない空気を楽しんだ。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_40
  ws_95_40: (() => {
    const title = 'お菓子をくれなきゃ悪戯するわよ！';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`${callname}、起きて！`);
      await era.printAndWait(`耳元に、見慣れた声が聞こえた気がする.`);
      era.printButton(`「ん、もう少し寝る」`, 1);
      await era.input();
      await maru.say_and_wait(`もうすぐ9時よ！`);
      era.printButton(`「9時って？ ん！」`, 1);
      await era.input();
      await era.printAndWait(
        `これから起きることを突然悟った ${you.name}은(는) ベッドから弾き上がり、慌てて服を着た。`,
      );
      await you.say_and_wait(
        `これでタヅナ${you.adult_sex_title}に説教される。`,
      );
      await maru.say_and_wait(`ふふ～`);
      await era.printAndWait(
        `${you.name}が慌てて起きる様子を見て、${maru.name}はそっと笑った。`,
      );
      await you.say_and_wait(`アラームが鳴らなかった？ 응?`);
      await era.printAndWait(`스마트폰の表示は7時。出勤まであと1時間。`);
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`お菓子をくれなきゃ悪戯するわよ！`);
      await you.say_and_wait(`ん——할로윈はエイプリルフールじゃない！`);
      await maru.say_and_wait(`${callname}からお菓子が欲しいの～`);
      await you.say_and_wait(`あとで一緒にキャンディ屋を見に行こう。`);
      await era.printAndWait(`いつの間にか、二人の唇がまた重なった。`);
      await maru.say_and_wait(`응——じゃあこれで、少し我慢しましょう♪`);
      await era.printAndWait(
        `二人の朝食を食卓に出した${maru.name}が、かわいい笑顔を見せた。`,
      );
      era.drawLine({ content: '훈련실' });
      await you.say_and_wait(`これが最後の一枚だ。`);
      await maru.say_and_wait(`お疲れさま！`);
      await era.printAndWait(
        `傍で待っていた${maru.name}が、慣れた手つきで書類をフォルダへ収めた。`,
      );
      await you.say_and_wait(`この先は。`);
      await maru.say_and_wait(`この先は？`);
      await you.say_and_wait(`何か……大事なことをしなきゃ？`);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}？`,
      );
      await era.printAndWait(
        `耳が後ろへ倒れた${maru.name}に気づき、${you.name}은(는) 胸がざわついた。`,
      );
      await you.say_and_wait(`考えろ、何を忘れた？ あ、そうだ！`, true);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}?`,
      );
      await era.printAndWait(
        `${maru.name}の口調はだんだん重くなるが、顔の表情は微塵も変わらない。`,
      );
      await you.say_and_wait(`一緒にキャンディ屋へ行かないか？`);
      await era.printAndWait(`平静な口調に、自分でも怖くなった。`);
      await maru.say_and_wait(
        `そうね。あら～${maru.elder_sibling_sex_title}も忘れそうだったわ。本当に${callname}のおかげ♪`,
      );
      await era.printAndWait(
        `さっきの圧迫感は何も起きなかったように消えた。${
          maru.sex
        }예つから領域を自在に出し入れできるようになったんだ？`,
      );
      await maru.say_and_wait(`一緒に出発する？`);
      await you.say_and_wait(`でも出発前に、もう一つある。`);
      await maru.say_and_wait(`응?`);
      await era.printAndWait(`唇が重なった。`);
      await maru.say_and_wait(`ん——は、ええ응?`);
      await era.printAndWait(`十五秒に及ぶ深いキス。`);
      await you.say_and_wait(
        `ハッピー할로윈！ お菓子をくれなきゃ悪戯するぞ！`,
      );
      await maru.say_and_wait(
        `응? ${callname}、わ・た・し・気・が・変・わ・っ・た！`,
      );
      await era.printAndWait(
        `柔らかい感触より、${you.name}은(는) ${maru.name}がこれから口にする言葉のほうが気になった。`,
      );
      await maru.say_and_wait(`今夜は${you.name}を寝かせないわよ❤`);
      await era.printAndWait(
        `全身の力が一瞬で消えたように、${maru.name}の抱擁の中でぐったりした。`,
      );
      await maru.say_and_wait(
        `ふふふ——今はまだ足が緩むときじゃないわよ、${callname}。`,
      );
      await era.printAndWait(
        `いつの間にか潤んだ目尻を、${maru.name}がそっと拭った。`,
      );
      await maru.say_and_wait(`夜も、よろしくね、${callname}♪`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_48
  ws_95_48: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' との約束を果たすため、',
        you.get_colored_name(),
        '은(는) 最後の仕事を終えると急いで約束の場所へ向かった。',
      ]);
      await era.printAndWait(
        `約束のケヤキ並木の近くに着き、${you.name}은(는) 스마트폰を見た.約束より30分早い。`,
      );
      era.printButton(`「時間はまだ十分あるな」`, 1);
      await era.input();
      await era.printAndWait(`心が落ち着いた${you.name}は、急ぎ足を緩めた。`);
      await era.printAndWait(
        `去年、${maru.name}とファンの包囲を避けるため慌てて逃げ、偶然この小径を見つけた.`,
      );
      await era.printAndWait(
        `当時の${
          maru.sex
        }はとても嬉しそうだった……아니야.,レース場のときとは違う、別種の楽しさだ.`,
      );
      await era.printAndWait(
        `一緒に走る喜びを味わわせるため、わざと歩幅を落としたらしい.当時の私は頭が真っ白だった.`,
      );
      await era.printAndWait(
        `バレンタインのあのキス、팬 감사제の親密な接触……`,
      );
      await era.printAndWait(`過去の마음出が、煙る炉火のようにゆっくり上がる`);
      await era.printAndWait(`実際は……`);
      await maru.say_and_wait(`びっくり！`);
      await era.printAndWait(
        `${you.name}を驚かせるためか,${maru.name}が${you.name}の左手のケヤキの後ろから突然現れた.その赤い姿が白雪の中で格別に眩しい.`,
      );
      era.printButton(`「うわあああ」`, 1);
      await era.input();
      await era.printAndWait(
        `視界に突然飛び出した${maru.teen_sex_title}(?)に,${you.name}は見事に驚いた.`,
      );
      await maru.say_and_wait(`예♪${callname}`);
      era.printButton(`「${maru.name}、そう突然飛び出すと怖い」`, 1);
      await era.input();
      await era.printAndWait(
        `去年、${maru.name}とこのケヤキ並木で会う約束をした.だが${
          maru.sex
        }がこんなに活発だとは思わなかった.`,
      );
      await era.printAndWait(
        `いつも成熟した${maru.elder_sibling_sex_title}を自称しているが,${you.name}の前では${maru.sex}の別の面も見せ始めた.`,
      );
      await maru.say_and_wait(
        `興奮を抑えきれず一時間早く着いて、退屈で気まぐれになったのもあるわ.`,
      );
      await maru.say_and_wait(`でも${callname}がそんなに驚くの、かわいいわね♪`);
      era.printButton(`「${maru.name}!!!」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ♪${callname}、捕まえてみて.`);
      era.printButton(`「逃げるな！」`, 1);
      await era.input();
      await era.printAndWait(
        `子どもみたいに追いかけっこをして、うっとりと、憂いのない幼いころへ戻った。`,
      );
      era.printButton(`「楽しいな」`, 1);
      await era.input();
      await era.printAndWait(
        `幸いこの小径の往来は少なく、しかもみんなあなたたちのようなカップルだ`,
      );
      await era.printAndWait(
        `${maru.name}はともかく,${
          you.name
        }にもう子どもの活力はない.荒い息で幹に掴まり${maru.sex}を見るしかない.`,
      );
      await maru.say_and_wait(`흥흥♪ このゲームは私の勝ち.`);
      await maru.say_and_wait(
        `勝者として,${callname}に一つ条件を受けてもらうわ.`,
      );
      era.printButton(`「ちょっと、そんな話あったか」`, 1);
      await era.input();

      await maru.say_and_wait(`今夜、私とデートしましょう.`);
      await maru.say_and_wait(
        `こんな潮流の美しい${maru.teen_sex_title}とデートできるのは、千載一遇の機会よ.`,
      );
      await maru.say_and_wait(`${callname}の気持ちは？`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}が答えようとしたとき,腹が情けなく鳴った.`,
      );
      await maru.say_and_wait(
        `ふふ,${callname}、お腹が空いたみたい.じゃあ先に少し食べてから出発しましょう.`,
      );
      await era.printAndWait(
        `${you.name}は再び助手席に座った.見慣れた感触が${you.name}をこの上なく安心させる.`,
      );
      await era.printAndWait(
        `${maru.sex}は鍵を挿してエンジンをかけ,低音の轟きが静かな公園に響いた.`,
      );
      await era.printAndWait(`サイゼリヤで、少し豪華な夕飯を一緒に食べた.`);
      await era.printAndWait(
        `一人で黙々と噛むより,${maru.name}がいると食べ物はもっと美味しく見える.`,
      );
      await maru.say_and_wait(`OK,愛車で${you.name}を待ってるわ.`);
      await era.printAndWait(
        `${you.name}は${maru.name}を先に愛車へ戻して待たせ,自分は先にレジへ行った.`,
      );
      await era.printAndWait(`エンジンが再び轟き,今日最後の目的地へ出発した.`);
      await era.printAndWait(
        `${you.name}は車内パネルの再生に慣れた手で触れ,座席に寄り音楽を楽しんだ.`,
      );
      await era.printAndWait(`信号が変わると,愛車は坂を登った.`);
      await era.printAndWait(
        `高速に乗ると車は一気に加速し、両側を飛ぶ街灯で${you.name}はタイムトンネルにいるかのようだった。`,
      );
      await era.printAndWait(
        `最初の不快を経て,${you.name}は${maru.name}の速度にゆっくり慣れた.`,
      );
      await era.printAndWait(
        `音楽は${you.name}を時間から誘い,呼吸は${you.name}に時間を解放させる.`,
      );
      await era.printAndWait(
        `${you.name}が振り返って${maru.name}を見ると,ちょうど${maru.sex}が視線を戻す一瞬を覗いた.`,
      );
      await era.printAndWait(
        `そのあとスピーカーの柔和な音楽以外,沈黙が降りた.`,
      );
      await maru.say_and_wait(`${callname},もう山頂よ.`);
      await era.printAndWait(
        `この街の近くでいちばん高い山だ.山頂から下を見ると,街全体が目に収まる.`,
      );
      await era.printAndWait(
        `冷たい空気が肺に残る温もりを奪い,心臓の激しい鼓動を刺激する.`,
      );
      await era.printAndWait(
        `${you.name}は傍らの${
          maru.sex
        }を見た.その軽い,明るい瞳が,きらきらと祭りの街を見ている.`,
      );
      era.printButton(`「${you.name}の目、本当に美しいな」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ♪ ${callname}、私と戯れるつもり？`);
      await maru.say_and_wait(
        `あら、この歳になってまだ若い人にからかわれるなんて。魅力はまだ減ってないみたいね。`,
      );
      await era.printAndWait(
        `${maru.name}は視線を戻し,그리고.再び${you.name}を見た.`,
      );
      await maru.say_and_wait(
        `よく、目は心の窓と言うでしょう。${callname}から見て、私はどんな感じ？`,
      );
      await you.say_and_wait(`少し感傷的で、優しくて美しい目`);
      await maru.say_and_wait(`${callname}は、何を思ってその感慨を出したの？`);
      await you.say_and_wait(`その優しい目は、ずっと後輩たちを見ている`);
      await you.say_and_wait(`楽しい時間がずっと続かないことを感傷しながら」`);
      await you.say_and_wait(
        `でも後輩がもっと眩しい光をもたらすと信じて、嬉しい`,
      );
      await you.say_and_wait(`夏の万里無雲の晴れ空みたいだ`);
      await maru.say_and_wait(
        `${callname}、私を買い被りすぎじゃない？ それに今は冬よ.`,
      );
      await you.say_and_wait(
        `あの優しい力を小さく見る人예ない。根は愛だと言えるから.`,
      );
      await you.say_and_wait(`優しい愛だけが、人の心の傷を癒せる.`);
      await you.say_and_wait(
        `その愛に応えて背中を追う子どもたちが放つ炎は、冬でも夏と同じ温もりを感じさせる`,
      );
      await maru.say_and_wait(
        `子どもたちの背中を見ていれば、明日も温かい晴れでしょうね.`,
      );
      await maru.say_and_wait(`${callname}に出会えて、本当によかった♪`);
      await maru.say_and_wait(
        `……${callname}、一度だけわがままを言ってもいい？`,
      );
      era.printButton(`「${you.name}の願い그렇다면、言ってくれ」`, 1);
      await era.input();
      await maru.say_and_wait(`キスしてもいい？`);
      await era.printAndWait(
        `${you.name}は${maru.name}の腰を抱き,髪先を軽く弄った.`,
      );
      await era.printAndWait(`10秒のキスが、一生忘れられない마음出になった.`);
      await era.printAndWait(
        `그리고.二人は離れ,${maru.name}の涙が頬をゆっくり滑った.`,
      );
      await maru.say_and_wait(`${callname},私は${you.name}を愛してる.`);
      era.printButton(`「俺も${you.name}を愛してる」`, 1);
      await era.input();
      await era.printAndWait(
        `時計が12時を指すと,花火の中で二人はきつく抱き合った.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_6
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`예、これが${callname}の分。`);
      await era.printAndWait(
        `${you.name}の提案で、今年のバレンタインは훈련실で二人きりパーティーを開くことにした。`,
      );
      era.printButton(`「ありがとう」`, 1);
      await era.input();
      await era.printAndWait(
        `飾りのかリボンをそっと解き、ハンドバッグ型のチョコレート箱を開けた。`,
      );
      await era.printAndWait(
        `液体チョコを満たしたチューリップカップ。クリームを挟み、上は厚いイチゴシロップ。飾りはチェリー、ミント、マルベリー。`,
      );
      await era.printAndWait(
        `杯の胴に結んだ黒い蝶結びが、かすかなピンクの背景を放っている。`,
      );
      await maru.say_and_wait(
        `これまで、何のために走るかを探してきた。今は、走る意味がもう一つ増えたわ。`,
      );
      await maru.say_and_wait(`この先も、ずっと支えてね？ ${callname}`);
      era.printButton(
        `「じゃあありがたくいただく。ありがとう${you.name}${maru.name}」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `あ、そうだ！ テイオー${maru.couple_title}が言ってたの。百貨店のある店はバレンタインにカップル그렇다면写真を撮ると6割引きだって.`,
      );
      await era.printAndWait(`${callname}、興味ある？`);
      era.printButton(`「問題ない」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}と${maru.name}は百貨店へ行き,少し探してその店を見つけた.`,
      );
      await era.printAndWait(
        `今週の聖地なのかもしれない.入口に長い列ができ,様子からみんなカップルらしい.`,
      );
      await maru.say_and_wait(
        `人が多いわね.テイオー${maru.couple_title}の言うとおり,ここでしょう`,
      );
      await era.printAndWait(`じゃあ、私たちも並びましょう.`);
      await era.printAndWait(
        `${maru.name}は${you.name}の腕を取り、カップルの中に混ざった。`,
      );
      await era.printAndWait(`店員:お二人はカップル特典セットをご購入ですか？`);
      await era.printAndWait(
        `店員:ただ、割引があると聞いてお得を狙うお客様が多くて、本当に欲しいカップルが買えなくなっているんです`,
      );
      await era.printAndWait(
        `店員:こちらも困っていまして、最後に店主がいい案を마음つきました.`,
      );
      await era.printAndWait(`店員:お二人、ロマンチックなキスをお願いします.`);
      era.printButton(`「き……キス?!」`, 1);
      await era.input();

      await era.printAndWait(
        `店員:キスはロマンチックなことではありませんか？ 伴侶への愛も伝えられますし、お得狙いの人はキスと聞いて逃げていきました.`,
      );
      await era.printAndWait(
        `店員:カップル그렇다면、恥ずかしがることはないでしょう.`,
      );
      await era.printAndWait(
        `店員の鋭い視線で${you.name}の圧力はどんどん増す.${you.name}は${
          maru.name
        }を見た.${maru.sex}は落ち着いているふりをしているが,激しく揺れる尻尾が${maru.sex}を裏切っている.`,
      );
      era.printButton(`「こうするしかない」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `${you.name}は${maru.name}の腰を抱き,${
          maru.sex
        }の顔を軽くなで,覚悟を決めてキスした.`,
      );
      await era.printAndWait(
        `まず探るように軽く触れ,空気が高まるにつれ${you.name}も速くなり,熱い想いが最後は深く重なるキスになった.`,
      );
      await era.printAndWait(
        `${maru.sex}の唇はリンゴの香りを放つようで,摘む者を誘う.${
          you.name
        }は舌を${maru.sex}の口へ入れ,一寸ずつ探った`,
      );
      await era.printAndWait(
        `${you.name}が${maru.sex}の舌に触れようとするたび,${
          maru.sex
        }が恥ずかしそうに退く様子が、かえって${you.name}の欲を刺激した.`,
      );
      await era.printAndWait(
        `これ以上続けて예けない.だが${you.name}の動きは止まらない.`,
      );
      await era.printAndWait(
        `激しい刺激で頭が真っ白なとき,${you.name}はこの瞬間を永遠にしたかった.${you.name}は幸福を感じた.`,
      );
      await maru.say_and_wait(`……${callname}`);
      await era.printAndWait(
        `店員:うわあ、本当に熱いキスですね。ではどうぞお入りください。後ろのお客様がお待ちです.`,
      );
      await era.printAndWait(
        `後ろの客を構う余裕もなく,${you.name}は${
          maru.sex
        }の頬をそっと支え,世に唯一の至宝のようだった.`,
      );
      await era.printAndWait(
        `${maru.sex}の頬は完全に赤くなり,激しい心拍が二人の近さから${
          you.name
        }へ伝わった.`,
      );
      await era.printAndWait(
        `${you.name}は${maru.sex}の手を握り,空いた席へ向かった.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `二人は黙って同じパフェを味わう.震える腕が、主人の平静のなさを示している`,
      );
      await era.printAndWait(
        `このあとどう謝る？${
          maru.sex
        }はこれで関係を切るのか？ 恐れと喜びが${you.name}の頭で交わり,最後に残ったのは`,
      );
      era.printButton(
        `「${maru.name}が俺を好きかどうかは関係ない。だが나는 ${maru.sex}が好きだ」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `長い責めのあと,このパフェはやっと底を見せた.黙って店を出て大通りを歩き，堤を過ぎ，最後に훈련실へ戻った.`,
      );
      await maru.say_and_wait(`ねえ,${callname}。`);
      await era.printAndWait(
        `突然足を止めた${maru.name}が、${you.name}を抱いた。`,
      );
      await era.printAndWait(`唇に伝わった湿りが、波紋のように広がる。`);
      await maru.say_and_wait(`この先も、よろしく❤`);
      await era.printAndWait(
        `最初の愕きから戻った${you.name}は、大人の余裕を必死に保つ${maru.name}を見た。`,
      );
      await era.printAndWait(
        `その様子の${maru.name}が可笑しくて、でもそんな${maru.sex}は本当にかわいく、絹の糸で織ったシルクが胸にそっと敷かれたようだ。`,
      );
      era.printButton(`「気持ちは複雑だな。」`, 1);
      await era.input();
      await era.printAndWait(
        `星空とネオンの下で、二人の手はきつく握り合った。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] yasu_kin_win_s
  yasu_kin_win_s: (() => {
    const title = '安田記念後・走りたくなるレース';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('대기실');
      await maru.say_and_wait(` ${callname}、私のきれいな背中、見えた？`);
      await era.printAndWait(
        `安田記念で、後輩の ${maru.uma_sex_title}たちは ${maru.name} の背中に励まされ、${maru.sex} を目標に前へ走り続けた`,
      );
      await maru.say_and_wait(
        `後輩たちもすごくなったわね。いつか ${maru.elder_sibling_sex_title} も後輩に超えられて、ハンカチを噛みながら表彰台の ${maru.couple_title}を嫉妬の顔で睨むかも`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title} の傷ついた心をなだめるため、${callname}、今夜は一緒に寝ましょう`,
      );
      await you.say_and_wait(
        `それより ${maru.name}은(는) 走る喜びを楽しんでるみたいだな`,
      );
      await maru.say_and_wait(
        `え、話題をそらすの。${callname} の態度も、こんなに冷たくなったのね。`,
      );
      await maru.say_and_wait(
        `もう魅力がなくなったのかしら。このままじゃ ${maru.elder_sibling_sex_title}、薄情者に捨てられるわ。`,
      );
      await maru.say_and_wait(` ${maru.elder_sibling_sex_title}、かわいそう`);
      await era.printAndWait(` ${maru.name}은(는) 今、甘えてくることも覚えた`);
      await you.say_and_wait(`こういうときは`, true);
      await era.printAndWait(
        `右手で ${maru.name} の腰をそっと抱き、深く一吻を注ぎ、左手で耳の際の敏感なところを撫でる`,
      );
      await era.printAndWait(
        `キャットニップを吸った子猫のように、${maru.name}은(는) 今、完全に緩んだ。`,
      );
      await maru.say_and_wait(
        `帰りに ${maru.elder_sibling_sex_title} の愛情弁当を食べさせてあげる♪`,
      );
      await era.printAndWait(
        ` ${you.name}은(는) 、ふわふわのチーズと蜂蜜をかけたパンの甘い香りと、晴れの空の下で ${maru.name} が見せた笑顔を마음出した。`,
      );
      era.printButton(`「${maru.name} の料理예つも上手だな」`, 1);
      await era.input();
      await era.printAndWait(
        `何かを마음出したように、微笑の中に悪賢い顔を見せた ${maru.name} が尻尾を軽く揺らす。`,
      );
      await maru.say_and_wait(`${callname}、この先もずっと私の試食係ね。`);
      await you.say_and_wait(`그러고 보니.、明日は中華料理を食べてみたい。`);
      await maru.say_and_wait(`ふふ♪ ${callname}は目を拭いて待ってて。`);
      era.drawLine();
      await era.printAndWait(
        `夜、${maru.name} が厨房から出来たばかりのキャベツ炒め肉を出すと、箸を動かす前にその鮮やかな匂いが鼻腔へ急いで入り、胃の虫を引きずり出した。`,
      );
      await era.printAndWait(
        `箸を動かして豚肉を一塊挟むと、柔らかい感触は豆腐を挟んだようだ。口に入れると、野菜の汁を含んだ豚肉が口の中で弾け、舌まで食べたくなる。`,
      );
      await maru.say_and_wait(`味はどう？`);
      await era.printAndWait(
        `がつがつ食べる ${you.name} を見て、${maru.name}은(는) 満足の笑顔を見せた。`,
      );
    };
    f.title = title;
    return f;
  })(),
};
