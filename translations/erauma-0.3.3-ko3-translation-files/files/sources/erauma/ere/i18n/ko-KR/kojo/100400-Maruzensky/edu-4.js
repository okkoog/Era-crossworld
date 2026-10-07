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
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
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
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }인 나, 편지로 마음을 전하는 것도 다시 유행하기 시작했다는 걸 알아버렸어! 역시 ${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
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
    const title = 'GOOD END · 낙원에迷い込んだ 여행자';
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
        '画面の前の観客に、教えていただけますか？',
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
        ' と一旦別れ、',
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
    const title = 'おはよう、마루젠 スキー';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`直射の陽が顔に当たり、しぶしぶ目覚めた。`);
      maru.print(`昨夜遊びすぎて潰れた？`);
      await maru.say_and_wait(`うう——`);
      await era.printAndWait(`${maru.name}はベッドで目を開けた。`);
      await maru.say_and_wait(`ふああ——`);
      await maru.say_and_wait(
        `ベッドから起き上がりたくなくて、片手を伸ばしてアラームを探る。`,
      );
      maru.print(
        `意外なことに、普段うっかり寝坊すると${
          callname
        }に真っ直ぐ睨まれるような怖いアラームが、今は理事長が学園に植えた人参みたいに静かだ。`,
      );
      maru.print(`……아니야.、どう考えてもおかしいでしょう？`);
      maru.print(`やっぱり昨日力を入れすぎて、うっかり壊した？`);
      maru.print(`それとも——`);
      await maru.say_and_wait(`今日は休日？`, true);
      maru.print(`その吉報を得て、満足してまた眠る——違う！`);
      maru.print(`アラームが壊れてたら？ 今日は曜日……何曜日だっけ？`);
      maru.print(`遅刻して${callname}に見つかったら……`);
      await maru.say_and_wait(`プレッシャー！`, true);
      maru.print(`そうして起き上がると、眠気がまだ消えない体から痺れが走る。`);
      await maru.say_and_wait(`は——あ。`);
      maru.print(`体が自動で反応した。`);
      await era.printAndWait(
        `${maru.name}はぼさぼさの髪を被り、どこへ消えたかわからないスリッパを探り、視界をぼやかしてベッドを下りた。`,
      );
      era.drawLine();
      maru.print(
        `半夢半醒の自分は、冷たい水流に三女神のエデンから生きたまま引きずり出された。`,
      );
      maru.print(
        `ドライヤーで簡単に髪を吹いたあと、まだ水を垂らす髪をタオルで包み、洗面所を出た。`,
      );
      maru.print(`ごくごく、はあ～`);
      maru.print(`コーヒー牛乳を一本一気に飲んだあと、気持ちも弾んできた♪`);
      await maru.say_and_wait(`この先、何をしよう？`);
      maru.print(`休日の今日、後輩たちも羽を伸ばしに行ったはず。`);
      maru.print(`休日のトレセンは、少し寂しいわね。`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`가슴 깊은 곳에서 한 가지 감각이 조용히 솟아났다.`);
      maru.print(`見知らぬようで妙に懐かしい甘い感触が、胸に襲いかかる。`);
      maru.print(
        `${callname}がこの世界から消えても、この胸の動きは忘れないでしょうね。`,
      );
      await maru.say_and_wait(`なら、今日は훈련실へ行きましょう。`);
      await era.printAndWait(`卑下しつつ誰より勝ち気な${callname}なら。`);
      await era.printAndWait(
        `今この瞬間も、훈련실で次のレースに悩み、濃い苦コーヒーを飲んでいるはずだ。`,
      );
      await maru.say_and_wait(
        `なら、あちゃーな${maru.sex}をこのつらい悩みから引っ張り出さないとね。`,
      );
      await era.printAndWait(`${maru.name}は훈련실の扉前に来た。`);
      await era.printAndWait(
        `最近知った「突然扉を押して驚かす」潮流を帯び、扉を押して大きな声で到来を宣言した。`,
      );
      await era.printAndWait(
        `${
          callname
        }が慌てた顔で、さっきの驚きでソファの下へ飛んだリモコンを手探りしている。`,
      );
      await era.printAndWait(
        `${maru.name}は小さな袋の中の、${
          callname
        }とカラオケで撮った写真を思い出した。飲みすぎた${
          callname
        }のかわいい酒窩を、ベッドの上で何度ひっくり返して見たかわからない。`,
      );
      await era.printAndWait(`晴れのせいかもしれない。`);
      await era.printAndWait(
        `${maru.name}は、水をたっぷり吸ったきらきらの人参のようだ。`,
      );
      await era.printAndWait(
        `明日の${maru.sex}もいつものように、この独特の感触でみんなを励ますだろう。`,
      );
      await era.printAndWait(
        `その未来への憧れを帯びて、${maru.name}は新しい一日を迎えた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ne_happiness_day
  ne_happiness_day: (() => {
    const title = 'NORMAL END · 淡い毎日';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `このあと何が起きたかはわからない。だが${maru.name}は、特に変わっていない。`,
      );
      await era.printAndWait(
        `そのあと、定めた計画どおり、一歩ずつ着実に終わった。`,
      );
      await era.printAndWait(`ほどなく——`);
      await era.printAndWait(`空港`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}、여기까지면 돼.`);
      await you.say_and_wait(`パリに着いたら、メッセージをくれよ？`);
      await maru.say_and_wait(
        `ふふ～、もちろん。二か月の旅だけど、やっとエッフェル塔を見に行けるわ。`,
      );
      await maru.say_and_wait(
        `${you.actual_name}も、私がいないあいだに他のウマ娘に手を出すんじゃないわよ？`,
      );
      await you.say_and_wait(`あははは`);
      await maru.say_and_wait(`この人`);
      await era.printAndWait(`人差し指で、きつく一つ叩かれた。`);
      await you.say_and_wait(`痛い！`);
      await maru.say_and_wait(`自業自得——本当に心配のいらない人ね。`);
      await maru.say_and_wait(`じゃあ、出発するわ。`);
      await you.say_and_wait(`いってらっしゃい！`);
      await maru.say_and_wait(
        `${you.actual_name}も、帰るとき道中お気をつけて！`,
      );
      await era.printAndWait(`なぜか、${maru.name}は寂しい顔を見せた。`);
      await maru.say_and_wait(`${you.actual_name}……ううん、なんでもない。`);
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(`${maru.name}の姿が人混みの中に消えるのを見た。`);
      era.drawLine();
      await era.printAndWait(
        `三年、支え合った担当として、互いに好感はある。だが一歩近づけなかった。`,
      );
      await era.printAndWait(`何が足りなかったのか？`);
      await era.printAndWait(
        `하지만,こうして穏やかに終わるのも、一種の幸福だろう。`,
      );
      await you.say_and_wait(`今日예い天気だな。`, true);
      await era.printAndWait(
        `${you.name}은(는) 目を細め、飛行機が空の薄い雲を裂き、白い細い線を残すのを見た。`,
      );
      await era.printAndWait(
        `いつか、${you.name} もこんな天気の下で ${maru.name} が屋上の欄干に寄り、目を細めてそっと歌を口ずさむ姿を見た。その歌声が漂う先へ。`,
      );
      await era.printAndWait(`あれが飛行機雲だろう、と心で思った。`);
      await era.printAndWait(`今日も、こうして無事に過ぎた。`);
      await era.printAndWait(
        `${maru.name}も、毎日こうして無病無災で過ごせますように。`,
      );
      await era.printAndWait(
        `そういえば、新しいウマ娘の入学も近い。早く新しい原石を掘り起こさないと。`,
      );
      await era.printAndWait(
        `——あの憂鬱な日々でも、${maru.name}は一度も諦めなかったように。`,
      );
      await era.printAndWait(
        `もう二度と戻らない。最後に彼女が進んだ方向を一目見て、それから振り返らず去った。`,
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
        `新年を迎えるため、${you.name} と ${maru.name}은(는) 一緒に新年参拝へ行った.`,
      );
      await era.printAndWait(
        `実際は伝統に従うため이(가) 아니다.ただ運を求めたいだけだ。`,
      );
      await maru.say_and_wait(
        `やっぱり新年は神社で祈願でしょ？ そのほうが新年らしいわ～！`,
      );
      await maru.say_and_wait(
        `一年の計は春にあり。三女神さまに、一年分の汗と努力を捧げましょう！`,
      );
      era.printButton(`「この先の目標は？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `ふふ～、私の目標は——今年もたくさんの面白いレースに出ること！`,
      );
      await maru.say_and_wait(
        `それに、みんなに私の背中を追わせるために、前よりず～っと目立たないと！`,
      );
      era.printButton(`「${you.name}をしっかり手伝う！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}、頼もしいわね～。${maru.elder_sibling_sex_title}、この感じ好きよ？`,
      );
      await era.printAndWait(`ところで、この先頑張る方向は？`);
      era.println();
      era.printButton(`「基本の健康管理！」（体力+600）`, 1);
      era.printButton(
        `「各方面が均衡したトレーニングだろう！」（全能力+10）`,
        2,
      );
      era.printButton(`「自分の長所を磨くべきだ！」（スキルPt+100）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            'ことわざにも『居は気を移し、養は体を移す』と言うでしょう。体の健康に気をつけるのは大事ね.',
          );
          await maru.say_and_wait('決めた！ この先の目標は健康管理！');
          await maru.say_and_wait('さあ、早く入りましょう！');
          break;
        case 2:
          await maru.say_and_wait(
            'なるほど！ 各方面を平均して鍛えれば、前より一段上がれるわね！',
          );
          await maru.say_and_wait(
            'うん、任せて！ トレーニングのときも、そこを意識するわ！',
          );
          await maru.say_and_wait('じゃあ、決まったなら、早く入りましょう！');
          break;
        case 3:
          await maru.say_and_wait('私の長所といえば、やっぱり運転技術かしら？');
          await maru.say_and_wait(
            'なわけない～、冗談よ！ 走りのスキルを磨くんでしょ？',
          );
          await maru.say_and_wait(
            'OK！ トレーニングのときも、そこを意識するわ.',
          );
          await maru.say_and_wait(
            'うん、少し手間取っちゃった。早く入りましょう！',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_10
  race_end_10: (() => {
    const title = 'レース敗北';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait('悲しい……');
      await maru.say_and_wait(
        `미안해.ね……トレーナー。クールなところ、見せられなかった……`,
      );
      era.printButton(`「次の走りに期待してる！」`, 1);
      era.printButton(`「うつむいてても仕方ない！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`……優しいのね、トレーナー。`);
        await maru.say_and_wait(
          `……よし、早くトレーニングに戻らないと！ 次は必ず、クールなところを見せる！`,
        );
      } else {
        await maru.say_and_wait('……そうね。うつむいてても速くは走れない。');
        await maru.say_and_wait(
          'だからこれ以上落ち込めない。凹んでもすぐ直せる愛車みたいに！',
        );
        await maru.say_and_wait(
          'よし！ 修理はここまで。早く満タンにして突っ走る！',
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_5
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `見に来てくれた後輩たちのために1着を取りたかったけど、まだ実力が足りないわ……`,
      );
      era.printButton(`「走りは悪くなかった！」`, 1);
      era.printButton(`「次は1着だ！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `ふふ、トレーナーは慰めてくれてるのね。ありがとう。`,
        );
        await maru.say_and_wait(
          `でも……あら、トレーナーに心配までかけちゃって、${maru.elder_sibling_sex_title} ったらだめね。`,
        );
        await maru.say_and_wait(
          'よし、次はみんなにスーパーカーの走りを見せて、きっぱり1着を取る！',
        );
      } else {
        await maru.say_and_wait('そうね、いつまでもため息じゃ私らしくない。');
        await maru.say_and_wait(
          `次は後輩たちに、${maru.elder_sibling_sex_title} が本気を出したところを見せなきゃ！`,
        );
        await maru.say_and_wait('愛車と一緒に海へドライブしましょう♪');
        await era.printAndWait(
          `そのあと ${maru.name} と海へドライブに行き、${maru.sex} が満足するまで帰らなかった。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = 'レース勝利';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `victory!victory！勝ったわよ、トレーナー♪ 1着は違うものね、心の興奮が全然止まらない`,
      );
      await maru.say_and_wait(`トレーナー、私の走る姿、見てくれた？`);
      era.printButton(`「君がいちばんすごい！」`, 1);
      era.printButton(`「まだまだ上を目指せるぞ！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `でしょでしょ♪ 今日は喫茶店でレモンティーとティラミスにしましょう。`,
        );
        await maru.say_and_wait(`トレーナーも一緒に来るわよね？ ふふ♪`);
      } else {
        await maru.say_and_wait(`あら、トレーナーはストレートね！`);
        await maru.say_and_wait(`でも、これで満足してちゃだめ！`);
        await era.printAndWait(
          ` ${maru.name}은(는)  ${maru.sex} の大好きなナタデココドリンクを一気に飲み干した！`,
        );
        await maru.say_and_wait(
          `——ぷはっ！ 涼しい！ よし、この先もやる気満々で頑張るわ！`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_start
  race_start: (() => {
    const title = 'レース開始';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`地下通路`);
      await maru.say_and_wait(
        `今日のレースも、後輩たちに私のクールな背中を見せなきゃ`,
      );
      era.printButton(`「${maru.name}、頑張れ」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ、ありがとう ${callname}`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}の背中に惚れちゃだめよ～`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${maru.name}がコースへ向かうのを見送った`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] radi_shi_win
  radi_shi_win: (() => {
    const title = 'ラジオNIKKEI賞後・迷いの道';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('대기실');
      era.println();
      await you.say_and_wait(`お疲れさま、${maru.name}。`);
      await era.printAndWait(
        `中盤は馬群に追いつかれそうになったが、${maru.name}은(는) ぎりぎりレースを制した。`,
      );
      await you.say_and_wait(
        `普段の ${maru.elder_sibling_sex_title} らしい ${maru.sex} とは違う。`,
        true,
      );
      await you.say_and_wait(`まだ疑いの影に囚われているんだろう。`, true);
      await maru.say_and_wait(` ${callname} ！`);
      await era.printAndWait(
        `こちらに気づいた瞬間、${maru.name}은(는) 明るい笑顔を見せた。`,
      );
      await era.printAndWait(`하지만,その暗い表情は深く脳裏に刻まれた。`);
      await maru.say_and_wait(`もっと褒めてくれる？`);
      era.printButton(
        `수고했어.美しくて強い ${maru.elder_sibling_sex_title} さま、今回はとてもすばらしかった！`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `ふんふん～、当たり前よ。負けたほうがおかしいでしょ？`,
      );
      era.printButton(`「太ももはどうだ？」`, 1);
      await era.input();
      await maru.say_and_wait(`思ったよりずっといいわ。`);
      era.printButton(`「太ももはどうだ？」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `君のトレーナーとして、愛するウマが圧力を積み重ねて沈んで退場するのを、黙って見て예られない。`,
        1,
      );
      await era.input();
      await you.say_and_wait(`前の ${maru.uma_sex_title} と同じように。`);
      await you.say_and_wait(`許してくれ。미안해.。`);
      await era.printAndWait(
        `위닝 라이브 후、${you.name}은(는) 秋の菊花賞を諦め、有馬記念の準備に切り替えると決めた。`,
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
      await maru.say_and_wait(`まさか小ルドルフに負けるなんてうう——`);
      await era.printAndWait(
        `だ이(가) ${maru.name}은(는) 想像していたほど沈んで예ない。`,
      );
      era.printButton(`戻って反省会でリベンジ戦を相談しよう`, 1);
      await era.input();
      await era.printAndWait(`皇帝との対決は、一旦一段落した。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sank_hai_win
  sank_hai_win: (() => {
    const title = '大阪杯後・風が残雲を巻く';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await maru.say_and_wait(`はあ、はあ、はあ。`);
      await maru.say_and_wait(`勝った？`, true);
      await era.printAndWait(
        `皇帝との対決は、最終的に ${maru.name} の勝利で一段落した。`,
      );
      await you.say_and_wait(
        `すばらしいレースだった。冷や汗が知らないうちに流れていた。`,
      );
      await era.printAndWait(
        `奔騰する馬群の中でいちばん合う位置を見つけ、スパートのときは当然先頭にいるべき——。`,
      );
      await era.printAndWait(`だがもう少しで、${maru.name} を超えていた。`);
      await era.printAndWait(`……それでも、`);
      await maru.say_and_wait(
        `興奮と言うべきか、恐れと言うべきか？ 怪物の影を踏めた ${maru.uma_sex_title}は、あなたが初めてよ、小ルドルフ♪`,
      );
      await era.printAndWait(
        `やっと ${maru.sex} の歩みに追いつける相手に出会えて満足したのか、${maru.name}은(는) 미소를 보였다.`,
      );
      era.drawLine();
      await emperor.say_and_wait(`……よかった。`);
      await era.printAndWait(
        `皇帝はまっすぐ遠ざかる背中を見ている。${maru.sex}은(는) 歯を舐め、一種の狂喜が自然に湧く。`,
      );
      await era.printAndWait(
        `皇帝の未完の事業は多い。ゆえになお自分を証明する必要がある——${maru.sex} が唯一無二であること。同世代に無敵なだけでなく、過ぎた栄光を打ち砕き、未来の栄光を鎮圧できることを。`,
      );
      era.println();
      await emperor.say_and_wait(
        `마루젠 、お前は本当に、その理念を一貫して貫けるといい。`,
      );
      await emperor.say_and_wait(
        `それから——王道を自任するな。開拓者は苦難だけを受けるべきだ。お前が偉大なら倒れ、後進が上る階段になれ。`,
      );
      await emperor.say_and_wait(
        `日本の ${maru.uma_sex_title} の未来のために——より強い皇帝のために。`,
      );
      await era.printAndWait(
        `そのために……皇帝は頭を上げ、見下ろすように ${maru.name}을(를) 바라보았다.`,
      );
      era.println();
      await emperor.say_and_wait(
        `教養を脱げ、文明の包装を裂け！ あらゆる手段を使え。卑賤でも、粗野でもいい。できれば手段を選ぶな！！！`,
      );
      await emperor.say_and_wait(
        `どれほど見苦しくても許される。すべての準備をして……天皇賞（秋）で、吾（皇帝）の復讐を迎えよ。\n`,
      );
      await era.printAndWait(
        `言い終えると、和やかな顔の皇帝は軽い足取りでレース場を出た。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_5
  sats_sho_5: (() => {
    const title = '皐月賞後・ギアチェンジ';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(`네! ${callname} ！`);
      await era.printAndWait(
        `ウイニングライブから下りた ${maru.name} が대기실に戻った`,
      );
      await you.say_and_wait(`어땠어?`);
      await era.printAndWait(
        `${maru.name} のブーツをそっと脱がせ、足首から太ももまで、マッサージの力を慎重に調整する。`,
      );
      await maru.say_and_wait(
        `この感じ、すごく好き！ さすがクラシック三冠の皐月賞。三冠を争いに集まった ${maru.uma_sex_title} たちは強者揃いね。`,
      );
      await maru.say_and_wait(
        `このあとダービーでもっと大きなレースを体験できるなんて、${maru.elder_sibling_sex_title}、ちょっと生きる気力がなくなりそう。`,
      );
      await era.printAndWait(
        `およそ五分マッサージし、十指で太ももの内側を軽く押し、${maru.name} の反応を見ながら話を続けた。`,
      );
      await you.say_and_wait(`その勢いでダービーに挑もう！`);
      await maru.say_and_wait(`그래! この感じ！`);
      await era.printAndWait(
        `マッサージのあと、${you.name}은(는) そっと ${maru.name} にブーツを履かせた。立ち上がった${maru.name}は気勢高く、次の目標を決めた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_win
  sats_sho_win: (() => {
    const title = '皐月賞後・炎のような美しい走り';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ウイニングライブ\n`);
      await era.printAndWait(
        `스태프がウイニングライブの装置を確認して忙しそうだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프A`,
        `ウイニングライブはもうすぐです。最後の調整！`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `気柱機の位置、もう一度！ やっぱり、${maru.name} が勝つと思ってたわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `メイクデビューのときから ${maru.sex} を見てたの。`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프C`,
        `ライトをもう少し左！ あ、私はホープフルSから見てたわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프C`,
        `すごく速い ${maru.uma_sex_title} がいるとは聞いてたけど、現地で見ないとわからないわね。`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프B`,
        `準備完了！ 次の東京優駿の勝ちも、絶対 ${maru.sex} よ！`,
      );
      await you.say_as_passer_by_and_wait(
        `스태프A`,
        `全員！ 位置について！ 用意！`,
      );
      await era.printAndWait(`予想どおり、${maru.name}은(는) 勝った。`);
      await era.printAndWait(
        `最後のゴールの刹那も、ウイニングライブ中央のステージも、多くのファンを虜にした ${maru.name}。`,
      );
      await era.printAndWait(`満足した笑顔で대기실へ戻った。`);
      era.printButton(`「수고했어.ステージ、すばらしかった。」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name} のロングブーツをそっと脱がせ、足首から太ももまで、マッサージの力を慎重に調整する。`,
      );
      await you.say_and_wait(
        `王道路線の第一戦は違うな。記者会見も、そのあとのレースもウイニングライブも、同じG1の朝日杯とは比べものにならない。`,
      );
      await you.say_and_wait(
        `この先、もっと盛大なレースもある。${maru.name} ——`,
      );
      await era.printAndWait(
        `およそ五分マッサージし、十指で太ももの内側を軽く押し、${maru.name} の反応を見ながら話を続けた。`,
      );
      await maru.say_and_wait(
        `うん～、${callname} がこんなに気にかけてくれてありがとう。動けないほど疲れたというより、${maru.elder_sibling_sex_title}은(는) 心も体も満たされてるわ。`,
      );
      await era.printAndWait(
        `笑顔の ${maru.name} から、時おり小さな吐息が漏れる。`,
      );
      await maru.say_and_wait(
        `こうしてもっと多くの ${maru.uma_sex_title} に私の背中を見せれば、${maru.couple_title}もレース場で走る姿に憧れるでしょうね。`,
      );
      await maru.say_and_wait(
        `それから、頑張るトレーニングの中で、走る楽しさをゆっくり見つける。`,
      );
      await maru.say_and_wait(
        `そうしたら、後輩が私の背中を追って頑張ってるのを見て、嬉しくなれる。`,
      );
      await era.printAndWait(
        `弱い痛みと少しの痺れで、いつもより明るい ${maru.name} の目が、まっすぐこちらを見ている。`,
      );
      await you.say_and_wait(
        `응.一か月後の東京優駿のため、この先はスタミナを上げないといけない。`,
      );
      await maru.say_and_wait(`うん——このあと、どこで祝う？`);
      await era.printAndWait(
        `マッサージが終わると、名残惜しそうな ${maru.name} が席で満足の声を出した。`,
      );
      await maru.say_and_wait(
        `高級レストラン？ 親しみやすいサイゼリヤ？ それとも`,
      );
      era.printButton(`「いっそ훈련실で祝おう！」`, 1);
      await era.input();
      await you.say_and_wait(`ピザと飲み物を足して、後輩たちも呼んで祝おう。`);
      await maru.say_and_wait(
        `${callname} の言うとおりに。夜のパーティー、楽しみね♪`,
      );
      await era.printAndWait(
        `ブーツを履き、歩き方に慣れ直す${maru.teen_sex_title}が、このあとの祝いを期待している。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sister_annoyance
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}の悩み`;
    /**
     * トレーナーが마루젠 スキーを励まし、信じられたとき立て直す
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`屋上`);
      era.println();
      await era.printAndWait(`今日処理する資料を整理したあと、屋上へ来た。`);
      await era.printAndWait(
        `レース後の${maru.name}は少しおかしく、話すときも上の空だった。`,
      );
      await era.printAndWait(
        `錯覚かもしれない。だが友人として、${maru.sex} の問題をもっと深く知りたい。`,
      );
      await you.say_and_wait(
        `一気に全部解決できれば、それに越したことはない。`,
      );
      await era.printAndWait(
        `${maru.name}の力なら、どんな挫折も軽く越えられるはずだ。\n`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}の脛骨に損傷があります。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `続けると、歩行と走行の能力が制限される可能性があります。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `トレーニングは止めて、しばらくしっかり休んだほうがいいです。`,
      );
      await you.say_and_wait(`わかった。`);
      await era.printAndWait(
        `診断書をかばんに入れ、出ようとしたところで呼び止められた。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `あなたが${maru.name}のトレーナーですね。`,
      );
      await you.say_and_wait(`そうです。`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}の脚は、思ったより脆いです。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `そのせいか、あなたも長くよく眠れていないようですね。`,
      );
      await you.say_and_wait(`そうです。`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `注目される${maru.uma_sex_title}を指導する트레이너인 圧力は、想像以上です。`,
      );
      await you.say_as_passer_by_and_wait(`医師`, '体を大事にしてください。');
      await you.say_and_wait(`……ありがとう。`);
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `思考は ${maru.name} の声に遮られた。約束の時間まで、まだ十分ほど余裕がある。`,
      );
      await you.say_and_wait(`응? あ、ちょうど着いたばかりだ。`);
      await era.printAndWait(
        `白いワンピースの${maru.uma_sex_title}が屋上に現れた。`,
      );
      await maru.say_and_wait(` ${callname}、思ったより焦ってるみたいね。`);
      await you.say_and_wait(
        `ああ、今日예い天気だとわかってたから、${maru.name}と過ごしたかった。`,
      );
      await you.say_and_wait(
        `よく見ると、${maru.name}は普段より美しいな。それに、ジャスミンの匂いがする。`,
      );
      await maru.say_and_wait(
        `${callname} が珍しく自分から誘ってくれたんだもの。きちんと着飾らないと出られないわ。`,
      );
      await you.say_and_wait(`そう言われると、こっちが失礼だったな。`);
      await era.printAndWait(
        `どこから切り出せばいいかわからず黙った。最後は${maru.name}のほうから話題を出した。`,
      );
      await maru.say_and_wait(
        ` ${callname} が普段頑張ってる姿、${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私、すごく感動してるわ。`,
      );
      await maru.say_and_wait(
        `どうやって ${callname} を休めさせようかずっと考えてたのに、${callname} からこのお願いが出るなんて。`,
      );
      await maru.say_and_wait(
        `実はね、ずっと神経を張り詰めなくていいの。もっと ${maru.elder_sibling_sex_title} に頼って。`,
      );
      await era.printAndWait(`${maru.name}に励まされ、神経もゆっくり緩んだ。`);
      await you.say_and_wait(
        `わかった。この先も${maru.name} ${maru.elder_sibling_sex_title}、よろしく。`,
      );
      await you.say_and_wait(`じゃあ、本題だ。`);
      await era.printAndWait(
        `緊張しすぎて真っ白だった頭も、ゆっくり整理できた。`,
      );
      await you.say_and_wait(`君のことを、もっと教えてほしい。`);
      await maru.say_and_wait(
        `私、${callname} といつも一緒にいるじゃない。何を今更？`,
      );
      await you.say_and_wait(`いや、そういうことじゃない。`);
      await era.printAndWait(
        `きっぱり首を振り、${maru.sex} の目を正面から見た。`,
      );
      await you.say_and_wait(
        `他人のプライバシーを探るのはよくないと、わかってる。`,
      );
      await you.say_and_wait(
        `でも、훈련실で休んでるとき、ふと見た${maru.name}の沈んだ顔。`,
      );
      await you.say_and_wait(
        `つらかった。重い石が胸に乗ったみたいで、そのとき気づいた。実は${maru.name}のことを、まだあまり知らない。`,
      );
      await you.say_and_wait(`だからこれは願いじゃない。宣告だ。`);
      era.printButton(`「${maru.name}のことを、もっと知りたい」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}の瞳が一気に開き、すばやく瞬きして、逃げたい視線をすぐ戻した。`,
      );
      await maru.say_and_wait(`同じ態度で返さないとね。`);
      await maru.say_and_wait(` ${callname}은(는) 、何を知りたいの？`);
      await you.say_and_wait(
        `知りたいのは、${maru.name}が最近どうしてこんなに沈んでるかだ。`,
      );
      await you.say_and_wait(
        `楽しさを感じられなくなったのか？ それとも、走ってる${maru.uma_sex_title}たちの自暴自棄を感じたからか？`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}はためらっている。${maru.sex}은(는) 、本当の気持ちを話すべきか考えている。`,
      );
      await maru.say_and_wait(`……미안해.。`);
      await era.printAndWait(`${maru.name}の声は、沈んでいるようだ。`);
      era.printButton(`「いや、こっちこそ。」`, 1);
      await era.input();
      await you.say_and_wait(`謝るべきなのは俺だ。急ぎすぎた。`);
      await you.say_and_wait(`ずっと待つ。君から話してくれる日が来るまで。`);
      await you.say_and_wait(
        `だから、胸を張って。君は俺が見たなかでいちばん美しい${maru.uma_sex_title}だ。`,
      );
      await maru.say_and_wait(`サンキュー、${callname}。`);
      await era.printAndWait(`${maru.name}예つもの状態に戻った。`);
      await maru.say_and_wait(`さすが、頼れる大人ね。`);
      await maru.say_and_wait(
        `今の感じ、ずっと世話してた${you.sex_code !== 1 ? '妹' : '弟'}が急に自分を世話すると言い出したみたい。`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}としては、気持ちが複雑ね——`,
      );
      await era.printAndWait(
        `${maru.name}は、一緒に育った${you.sex_code !== 1 ? '妹' : '弟'}を見るような慈愛の目をした。`,
      );
      await maru.say_and_wait(`じゃあ、約束よ——`);
      await maru.say_and_wait(
        `무슨 일이 있어도 ${maru.elder_sibling_sex_title}에게 상담하는 거야?`,
      );
      era.printButton(`「何があっても、${maru.name}にはちゃんと話す。」`, 1);
      await era.input();
      await you.say_and_wait(
        `頼れる大${maru.elder_sibling_sex_title}なら、どんな問題も軽く解決するだろ。`,
      );
      await maru.say_and_wait(`じゃあ、そう決めましょう。`);
      await you.say_and_wait(`こっちもだ`);
      await maru.say_and_wait(
        `そういえば今日예い天気。愛車でドライブしましょう——`,
      );
      await you.say_and_wait(`いいな。`);
      await you.say_and_wait(`何か忘れてないか。`, true);
      await era.printAndWait(
        `談笑しながら愛車へ向かった。そのあと、悲鳴がトレセンに響いた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sprg_sta_win
  sprg_sta_win: (() => {
    const title = 'スプリングS後・迷いの始まり';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、このレースは ${maru.name} の圧倒的な勝利だった。`,
      );
      await era.printAndWait(
        `同世代の ${maru.uma_sex_title} が次々に回避したせいだ。`,
      );
      await era.printAndWait(
        `相手の ${maru.uma_sex_title} たちのうち、いちばん強い一頭でも、無名のG3を一つ勝った程度だった。`,
      );
      await era.printAndWait(`この勝利で、本当に楽しさを感じられたのか？`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        ` ${maru.name} ！ ${maru.name} がゴール！`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `大差！ ${maru.name} の圧倒的な勝利！`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`この勝利で、本当に楽しさを感じられたのか？`);
      await you.say_and_wait(`${maru.name}？`);
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `${maru.name}！ ${maru.name}！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファンB`,
        `やっぱり ${maru.name} の勝ちだと思ってた！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `さすがスーパーカーと呼ばれる ${maru.uma_sex_title} ！ 見る目は間違ってなかった！`,
      );
      maru.print(`少し疲れたわ。`);
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `このまま圧倒的な実力で、弱い者を全部消しちゃえ！`,
      );
      maru.print(`대기실で勝負服を着替えていたときも。`);
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `どうせ勝てないのに、そんなに力を入れることある？`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `${maru.uma_sex_title}が走りをアイドルにする伝統なんて、配信者に淘汰されて当然よ。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `いっそ潮流に乗って配信者に転向して、引退すればいい。`,
      );
      maru.print(
        `ステージのあと、ひそひそ話す ${maru.uma_sex_title} たちのそばを通った。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `${maru.uma_sex_title}という仕事は、結局才能ある者の狩場なのよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `私たちみたいな普通の子にとって、レースは何度も引き立て役になる笑い話でしかない。気持ち悪い。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `だからね、芝で楽しさを感じられる人のことが、まったく理解できない。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `ふあ、当時の自分は${maru.uma_sex_title}に憧れてたなんて、今思うと恥ずかしい。`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}？`);
      await era.printAndWait(` ${maru.name}은(는) 絶対的な余裕で連勝を取った。`);
      await era.printAndWait(
        `皐月賞の前哨戦にすぎないが、この先の皐月賞も問題はないだろう。`,
      );
      await era.printAndWait(`そう思いながら、扉を押した。`);
      await maru.say_and_wait(`あ、${callname}、迎えに来てくれたの？`);
      await era.printAndWait(
        ` ${maru.name}은(는) 、見た目は普段とほとんど変わらない。`,
      );
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title} の走り、どうだった？`,
      );
      era.printButton(`「……かもな」`, 1); //be1
      era.printButton(`「……${maru.name}。」`, 2);
      era.print(
        '【警告。慎重に選ぶこと。さもなくば、すべてが取り返しがつかなくなる！】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`なに？`);
        era.printButton(`あ、悪い、今ぼんやりしてた。`, 1);
        await era.input();
        await you.say_and_wait(
          `さす이(가) ${maru.elder_sibling_sex_title}、すごくよかった！`,
        );
        await maru.say_and_wait(`うんうん、私もそう思うわ。`);
        await maru.say_and_wait(`うん——このあと、どこで食べる？`);
        await maru.say_and_wait(`${callname}、おすすめある？`);
        await you.say_and_wait(`サイゼリヤに行こう。あそこは美味しい。`);
        await maru.say_and_wait(`うん！ じゃあ一緒に行ってみましょう。`);
      } else {
        await maru.say_and_wait(`おや、${callname}、どうしたの？`);
        await you.say_and_wait(`明日の夜、空いてるか？`);
        await you.say_and_wait(`話したいことがある。屋上で。`);
        await maru.say_and_wait(`ここで話せないことなの？`);
        await you.say_and_wait(`悪い、一度だけ任せてくれ。お願いだ。`);
        await maru.say_and_wait(`응? ${callname}？`);
        await you.say_and_wait(`お願いだ。`);
        await era.printAndWait(`${you.name}은(는) 深く頭を下げた。`);
        await maru.say_and_wait(`そこまでするなんて……`, true);
        await maru.say_and_wait(` ${callname} がそこまで言うなら。`);
        await maru.say_and_wait(`わかったわ。`);
        await era.printAndWait(` ${maru.name}은(는) 少し憂えた顔であなたを見た。`);
        await you.say_and_wait(`では、明日の夜9時、学園の屋上で。`);
        await era.printAndWait(
          `背中はすでに汗で濡れていた。最悪の覚悟はしていたが、${maru.name} の同意が取れて、${you.name}은(는) 長い息を吐いた。`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}は、${callname} を傷つけることをした？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] teacher_sister
  teacher_sister: (() => {
    const title = '指導してください、마루젠 スキー先生！';
    /**
     * トレーナーが学びたいものに興味が湧かず、마루젠 スキーが指導する
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ある休日の朝。`);
      await era.printAndWait(`${you.name}은(는) 事務机に這い、何もしたくない。`);
      await era.printAndWait(
        `トレセンに入れたあと、なぜか学生時代の動力が一気に消えた。`,
      );
      await era.printAndWait(
        ` ${maru.name}との交流で以前の感覚はゆっくり戻ってきたが、その無理さはまだ少し悩ましい。`,
      );
      await you.say_and_wait(
        `普段こんなに苦労してるんだ。今日はしっかり休もう。`,
      );
      await maru.say_and_wait(` ${callname}、入るわよ♪`);
      await era.printAndWait(
        `そんな言い訳でサボろうとしたとき、${maru.name}が扉を押して入った。`,
      );
      await era.printAndWait(
        `偶然と言うべきか、${maru.name}はちょうど機嫌がよさそうだ。`,
      );
      await maru.say_and_wait(`なら、${callname}にちゃんと説明しないとね。`);
      await you.say_and_wait(
        ` ${maru.name}に相談すれば、新しい見方が出るかもしれない。`,
        true,
      );
      await era.printAndWait(
        `試してみるつもりで、${you.name}は ${maru.name}に胸の悩みを話した。`,
      );
      await maru.say_and_wait(`ん——そういうことね。`);
      await era.printAndWait(
        ` ${maru.name}はそっと笑いながら、隅の小さな黒板を引き出した。`,
      );
      await maru.say_and_wait(`なら、お姉さんが私の見方を分けましょう。`);
      await era.printAndWait(
        ` ${maru.name}は黒板の左側にデフォルメの自分を描いた。`,
      );
      await maru.say_and_wait(
        `しないと後悔する物事に向き合うとき、どうしてもやる気が起きない状態、ない？`,
      );
      await era.printAndWait(
        `黒板の右側に、悩みの宿題、順位、ダンスを丸で囲んだ。`,
      );
      await maru.say_and_wait(
        `大事だとわかってる。しないと親しい人に、焦りと恐れを感じる。`,
      );
      await era.printAndWait(
        `${maru.sex}は説明しながら、小人に雲を足してくれた。`,
      );
      await maru.say_and_wait(
        `後悔と焦りの中で過ごす。でも、それで維持できてるみたい？！`,
      );
      await era.printAndWait(
        `両者の下で、デフォルメの小人がトレーナーに謝り始める。`,
      );
      await maru.say_and_wait(
        `次に同じことが起きたとき、後悔した顔を見せれば周囲も何も言わず、最後はみんなちょうどいい状態で止まる。`,
      );
      await era.printAndWait(
        `三つの絵を矢印で順に繋ぐと、一つの循環が生まれた。`,
      );
      await maru.say_and_wait(` ${callname}はどう思う?`);
      era.printButton(`事態は解決してないだろ？`, 1);
      await era.input();
      await you.say_and_wait(
        `事態が悪化し、周囲が${you.name}に圧力をかけ、自分が後悔した顔をし、周囲が仕方なく諦める。この循環の中で、解決されていないのは物事だけだろ？`,
      );
      await you.say_and_wait(
        `本来は動力を燃やす燃料になるはずのものが、後悔の顔をした自分で消されて、事態はもっと悪い方向へ進む。`,
      );
      await you.say_and_wait(
        `事態が深刻になるほど、この後悔循環は自己維持するだけでなく、強化される。`,
      );
      await era.printAndWait(
        `8分ほど考えたあと、${you.name}はためらって答えを出した。`,
      );
      await maru.say_and_wait(
        `そう。この循環自体は問題を解決しない。解決した感じだけを解決する。当事者에게는 、来週試験だとわかってても、まだ時間があるからゲーセンへ行く学生と同じ。`,
      );
      await maru.say_and_wait(`本質は、痛みが怖くて鎮痛剤で麻痺させてるだけ。`);
      await maru.say_and_wait(`だから、行動の動機を見つけないと。`);
      await era.printAndWait(
        `正しい答えだったらしい。花のような笑顔が${maru.sex}の顔に咲いた。`,
      );
      await maru.say_and_wait(
        `円周率を小数第七位まで正確にするのに、人類文明は少なくとも二千年かけたわ。`,
      );
      await maru.say_and_wait(`無理数を認識するのに、千年。`);
      await maru.say_and_wait(
        `二元方程式、三角関数、対数、階乗。どれも人類が数千年かけて集団で探り、少しずつ達した学術の成果よ。`,
      );
      await era.printAndWait(
        `ホワイトボード消しで前の絵を消したあと、巨大な水晶人参を描いた。`,
      );
      await maru.say_and_wait(
        `たった八年の学習で、その成果を自在に使えるのは、華麗な成果と言っていい。`,
      );
      await maru.say_and_wait(
        `とても賢くて運もある人は、順位と周囲の称賛を燃料にして、${maru.sex}はもっと速くそれを掴んだ。`,
      );
      await era.printAndWait(
        `デフォルメの小人はドリルですぐ水晶人参を見つけた。`,
      );
      await you.say_and_wait(`長くかかってもわからなかったら、どうする？`);
      await maru.say_and_wait(`それがどうしたの？`);
      await era.printAndWait(` ${maru.name}は瞬きした。`);
      await maru.say_and_wait(
        `${callname}の目標は、この文明の遺産を十分に受け取ること。どれだけかかっても、最終的に学べば大勝ちよ。`,
      );
      await you.say_and_wait(`わからない公式に出会ったら、どう処理する？`);
      await maru.say_and_wait(
        `いちばんいいのは、それに関わる背景知識と歴史を読むこと。その思想の成果が、当時どう歴史から洗い出されたかを遡ること。`,
      );
      await era.printAndWait(
        `ホワイトボードのデフォルメ小人は鉱物知識を調べ、経験豊かな先輩に訊く。`,
      );
      await maru.say_and_wait(
        `そうすれば認知の敷居が下がるだけじゃない。正しい歴史感が、${you.name}が社会への歪んだ想像から得た偽の価値評価を洗い落とす。`,
      );
      await maru.say_and_wait(
        `動力がない根本原因は、いつだって値段を見誤ることだから。`,
      );
      await era.printAndWait(`水晶人参がきらきら輝き始めた。`);
      await maru.say_and_wait(
        `歴史上、大事で貴重なものの周りには、当然巨大な産業と生態が生まれる。`,
      );
      await era.printAndWait(
        `デフォルメの小人たちが女神の祭壇を囲み、水晶人参を載せた。`,
      );
      await maru.say_and_wait(
        `その巨大な産業と生態は、当然それらの知識の値段を担保し、熟知する人に機会と厚い報酬を与える。`,
      );
      await era.printAndWait(
        `物語の最後、三女神がデフォルメ小人に人参の山を贈った。`,
      );
      await maru.say_and_wait(`だから学習は、利益のとても高い収益機会よ。`);
      await you.say_and_wait(`なるほど。ありがとう、${maru.name}先生！`);
      await maru.say_and_wait(
        `あら～${callname}、遠慮しすぎよ。${callname}の助けになれたなら、${maru.elder_sibling_sex_title}がいちばん嬉しい側よ。`,
      );
      await era.printAndWait(
        `${you.name}の助けになれたことを心から喜ぶ ${maru.name}の周りに、虹が浮かんだようだ。`,
      );
      await era.printAndWait(`意味のある一日を過ごした。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = '天皇賞（秋）後・金色の秋、黄金の夢';
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
      await maru.say_and_wait(`はあ、はあ、はあ。`);
      await maru.say_and_wait(`もう少しだった。`);
      await era.printAndWait(`最後のコーナーで一気に加速した。`);
      await era.printAndWait(`この瞬間、競馬場は二人の角逐場になった。`);
      await era.printAndWait(`あと10馬身、8馬身、6馬身。`);
      await era.printAndWait(`ゴールまであと15mもない。`);
      await era.printAndWait(`後方から来る雷鳴がどんどん近い。`);
      await maru.say_and_wait(`やっぱり最後は、少し足りなかった？`, true);
      await era.printAndWait(
        `先に積んだ優位は、炎に溶かされる積雪のように速く消える。`,
      );
      await era.printAndWait(`最後のスパートの瞬間。`);
      await era.printAndWait(`皇帝이(가) ${maru.name} の背中に追いついた。`);
      await era.printAndWait(`だ이(가) ${maru.name}은(는) 一歩を踏み出した。`);
      await era.printAndWait(`皇帝：まさかこうなるとは。面白い。`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        `最後の勝者は—— ${maru.name} ！`,
      );
      await maru.say_and_wait(`もう勝った。`);
      await maru.say_and_wait(`……どうして、こんなに疲れた。`);
      era.drawLine();
      maru.print(
        `再び目を開けたとき、大きな夢から覚めたようだった。目の前は朦朧として神秘の草原。`,
      );
      maru.print(
        `陽が疎らな雲を通り、細い糸のようにそっと降り、限りない緑に温かく柔和な金をかけた。`,
      );
      maru.print(
        `起き上がろうとすると、体の細胞一つひとつが活力に満ちている。`,
      );
      maru.print(
        `そのまま立ち上がった。周りを見ると、青空と白い雲の下、巨大な翡翠のように大地に嵌められた一望の草原が、柔和で神秘の気配を放っている。`,
      );
      maru.print(
        `微風が過ぎ、草の波が海のうねりのように転がり、清新な草の香りを運ぶ。`,
      );
      await maru.say_and_wait(`ここはどこ？`);
      maru.print(
        `誰も答えない。だが内心は、答えられる場所があることを、無比に確信している。`,
      );
      await maru.say_and_wait(`いつものように、馬力全開！`);
      await maru.say_and_wait(`さん！`);
      await era.printAndWait(`上半身を伸ばし、肩を緩めて沈める。`);
      await maru.say_and_wait(`に！`);
      await era.printAndWait(`すべての力を脚に注ぐ。`);
      await maru.say_and_wait(`いち！`);
      await era.printAndWait(
        `大きく息を吸い、空気に満ちる清新な草の味を感じる。`,
      );
      await era.printAndWait(
        `それから答えを追い、${maru.name}은(는) 芝の抱擁の中を疾走した。`,
      );
      era.drawLine();
      await era.printAndWait(` ${maru.name}은(는) 金色の草原へ来た。`);
      await era.printAndWait(
        `懐かしい、${maru.uma_sex_title} の魂の揺りかごだ。`,
      );
      await maru.say_and_wait(`여기는?`);
      await godolphin.say_and_wait(`やっと来たわね、優しい子。`);
      await era.printAndWait(
        `突然目の前に現れたのは、優しさと愛護の心ですべてを包む女神。`,
      );
      await darley.say_and_wait(`この一路の苦労は、私たちも見ていた。`);
      await era.printAndWait(
        `続いて、それぞれの ${maru.uma_sex_title} が生まれ持った個性を尊重し祝福する、冷静で和やかな女神が現れた。`,
      );
      await byerley.say_and_wait(`時間に意味を与え、そこから得る強い力を追う`);
      await byerley.say_and_wait(`凡人としては、それも一種の強い示しだろう。`);
      await era.printAndWait(
        `強さこそ未来を拓くと信じる、厳粛で強い女神が現れた。`,
      );
      await maru.say_and_wait(`どうして私はここにいるの？`);
      await byerley.say_and_wait(
        `……ここは、領域を悟ったすべての ${maru.uma_sex_title} が才能を極限まで発揮したあと、たどり着く競技場だ。`,
      );
      await godolphin.say_and_wait(
        `すばらしい一生を過ごしたあと、すべての ${maru.uma_sex_title} が最後にたどり着く優しい郷でもあるわ。`,
      );
      await darley.say_and_wait(`エデンに到達した ${maru.uma_sex_title} よ。`);
      await darley.say_and_wait(
        `わかっているはずだ。私たちが創ったこの世界は、異なる理念の永遠の対立が、多くの悲しみと痛みを生んだ。`,
      );
      await darley.say_and_wait(
        `だがそれは同時に、この世界に永遠に存在する、異なる、拮抗した他の選択を保証している。`,
      );
      await godolphin.say_and_wait(
        `誰にも認められず、時宜に合わないと思われた夢にも、永遠に憧れる彼方がある。`,
      );
      await godolphin.say_and_wait(
        `どんな信念を抱いても、この世界には必ず、心の奥の帰宿になる場所がある。`,
      );
      await byerley.say_and_wait(
        `인간과  ${maru.uma_sex_title} には長い学習の時間が要る。平和に、敬意を持って争うことを学ぶために。`,
      );
      await byerley.say_and_wait(
        `すべての争いの最後には一つの意味が出る。その意味が、勝利のために代価を払った各方の ${maru.uma_sex_title} を救う。`,
      );
      await darley.say_and_wait(
        ` ${maru.name}、エデンに来た千万の ${maru.uma_sex_title} たちと同じく、聞きたいことはあるか？`,
      );
      await maru.say_and_wait(`聞きたいこと？`);
      maru.print(`一瞬、聞きたいことが多すぎて、言葉が喉に詰まった。`);
      maru.print(`でも、。`);
      await maru.say_and_wait(`いいわ。`);
      await maru.say_and_wait(`旅でいちばん大事なのは、道端の景色よ。`);
      await maru.say_and_wait(
        `最初から終点の答えがわかっていたら、道端の景色は存在する意味を失う。`,
      );
      await maru.say_and_wait(
        `どうしてもと言うなら、この楽しい旅が終わったあと、また会ったときに出す問いのほうが賢明でしょう？`,
      );
      await darley.say_and_wait(
        `真相より世俗を気にするか。面白い道を選んだな。`,
      );
      await godolphin.say_and_wait(`この先の道は、今より険しいわ。`);
      await byerley.say_and_wait(
        `どんな困難も越えられるだろう。お前にはその資格がある。`,
      );
      await darley.say_and_wait(`この先の道に、追い風を。`);
      await era.printAndWait(
        `柔和な風이(가) ${maru.name} をそっと持ち上げ、遠い世界へ加速して進む。`,
      );
      await era.printAndWait(
        `意識が消える直前の刹那、${maru.name}은(는) この黄金のような故郷を深く胸に刻んだ。`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}？」`, 1);
      await era.input();
      await era.printAndWait(
        `不幸中の幸いと言うべきか。レース終了後はずっと朦朧としていた ${maru.name}은(는) 、ウイニングライブでも自分の舞いを、支援する一人ひとりの胸に届けた。`,
      );
      await era.printAndWait(
        `トレーナーとして、今の ${maru.name}은(는) 休みが必要だと称してすべての面会と取材を断り、${maru.name} が既存の科学では説明できない不動の状態だと確認したあと、慎重に ${maru.name} を背負い、愛車で ${maru.sex} を住んでいるアパートへ送った。`,
      );
      era.printButton(`「お邪魔します。」`, 1);
      await era.input();
      await era.printAndWait(
        `愛車を近くの駐車場に止めながら、慎重に ${maru.name} を抱いた。`,
      );
      await era.printAndWait(
        `${maru.sex} をベッドに安置したあと、椅子を一脚抜いて ${maru.sex} のそばに座った。`,
      );
      await you.say_and_wait(
        `どうか何事もありませんように、${maru.name}。`,
        true,
      );
      await era.printAndWait(
        `自分の最大限を尽くしたあと、自分の眠り이(가) ${maru.name} の目覚めと引き換えになるよう祈った。`,
      );
      await era.printAndWait(`落ち着かないまま過ごした。`);
      await era.printAndWait(`一分、一時、一夜、言葉はない。`);
      await maru.say_and_wait(`ん。`);
      await era.printAndWait(
        `陽が雲を通り、斑の光と影を ${maru.name} の体に落とすまで。`,
      );
      await maru.say_and_wait(`여기는?`);
      await era.printAndWait(
        `目覚めた${maru.teen_sex_title}は見慣れた天井を不思議そうに見てから、その見知らぬようで見慣れた姿に視線を止めた。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `一日一夜溜まった疲れ이(가) ${you.name} を徹底的に押し潰したのか、${you.name}은(는) いつの間にか眠っていた。`,
      );
      await maru.say_and_wait(
        `この角度から見ると、${callname}、かっこいいわね♪`,
      );
      await maru.say_and_wait(`何度見ても飽きないわ♪`);
      await maru.say_and_wait(`……一路、お疲れさま、${callname}。`);
      await maru.say_and_wait(`何があっても、私たちは一緒よ？`);
      await era.printAndWait(` ${maru.name}은(는)  ${you.name}을(를) 세게 끌어안았다.。`);
      await era.printAndWait(`三女神は優しく子どもたちを見守っている。`);
      await darley.say_and_wait(`……優しい子よ。お前の願いは、きっと叶う。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_lose
  toky_yus_lose: (() => {
    const title = '日本ダービー後・選択の始まり';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、${maru.name}은(는) きれいにダービーを制した。`,
      );
      await era.printAndWait(
        `${maru.sex} がゴールした瞬間、雷のような歓声が観客席から上がった。`,
      );
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(
        `ふう～、さすがクラシック三冠でいちばん注目されるレースね。`,
      );
      await maru.say_and_wait(
        `ダービーに出た ${maru.uma_sex_title} たちは、みんな ${maru.uma_sex_title} の精鋭ね。`,
      );
      await maru.say_and_wait(`ダービーより盛大なレースなんて、たぶんもう`);
      era.printButton(`「凱旋門賞に行かないか？」`, 1);
      era.printButton(`「やっぱり有馬記念だな！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`응? 凱旋門賞？`);
        await maru.say_and_wait(
          `すごっ！ ${callname}と一緒だと、毎回サプライズがあるわね～`,
        );
        await maru.say_and_wait(
          `凱旋門賞なら、世界級の ${maru.uma_sex_title} に会えるかもしれない。`,
        );
        await maru.say_and_wait(`うん——どうしようかしら？`);
        era.printButton(`どうすればいい？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`でしょ？ やっぱり有馬記念。`);
        era.printButton(
          `「${maru.name} が有馬記念で楽しむのを、俺も楽しみにしてる。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}はちゃんと見てて。`);
      }
      await maru.say_and_wait(`あ、そろそろウイニングライブね。`);
      await maru.say_and_wait(
        `${callname} と一緒だと、時間예つも早く過ぎるわ。`,
      );
      await you.say_and_wait(
        `ステージの上でも、${maru.name} を応援してくれたファンにこの気持ちを伝えてくれ！`,
      );
      await maru.say_and_wait(
        `응.応援してくれたファンに、ちゃんと見てもらわないと。`,
      );
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(` ${maru.name}은(는) 대기실を出た。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `대기실の扉を閉じると、部屋には自分だけになった。`,
      );
      await you.say_and_wait(`そろそろ決断しないとな。`, true);
      await era.printAndWait(`出ようとしたとき。`);
      await era.printAndWait(`トントン`);
      await era.printAndWait(`まったく、また新しい流行を思いついたのか？`);
      await era.printAndWait(`苦笑いしながら대기실の扉を開けた。`);
      await you.say_and_wait(`마루젠 ——`);
      await era.printAndWait(`扉の前に一枚の紙切れが残されていた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 先輩、聞きたいことがあります。よければ、二週間後、빈 교실で会えますか？`,
      );
      await era.printAndWait(`決める`);
      era.printButton(`「${maru.name} に伝える」`, 1); //NE
      era.printButton(`「${maru.name} の代わりに行く」`, 2);
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
        await you.say_and_wait(`ちょっと頭が痛いな。${maru.name} 宛てだ。`);
        await you.say_and_wait(
          `自分で見に行きたい気もするが、${maru.sex} に任せたほうがいいだろ？`,
        );
        await era.printAndWait(
          `${maru.name} が戻ってから、この紙切れのことを ${maru.sex} に伝えた。`,
        );
      } else {
        await era.printAndWait(
          `周りに誰もいないのを確かめて、紙切れを拾い、ポケットに入れた。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`なぜ拾ったのか、自分でもわからない。だ이(가)——`);
        await era.printAndWait(`このまま逃したら。`);
        await era.printAndWait(`何かを失う気がする。`);
        await you.say_and_wait(`……미안해.、${maru.name}。`);
        await you.say_and_wait(`どうしても、一度行かないと。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_win
  toky_yus_win: (() => {
    const title = '日本ダービー後・選択の始まり';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、${maru.name}은(는) きれいにダービーを制した。`,
      );
      await era.printAndWait(
        `${maru.sex} がゴールした瞬間、雷のような歓声が観客席から上がった。`,
      );
      await era.printAndWait(`대기실\n`);
      await maru.say_and_wait(
        `ふう～、さすがクラシック三冠でいちばん注目されるレースね。`,
      );
      await maru.say_and_wait(
        `ダービーに出た ${maru.uma_sex_title} たちは、みんな ${maru.uma_sex_title} の精鋭ね。`,
      );
      era.printButton(
        `「コースはダービーのいちばん外側だったけど、その不利하지만.」`,
        1,
      );
      await era.input();
      era.printButton(
        `「きれいにダービーを取った ${maru.name} がいちばんすごい。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `そんなにすごくないわよ⭐ いつものとおり、ううん、前よりちょっと速く走っただけ。`,
      );
      await maru.say_and_wait(`ダービーより盛大なレースなんて、たぶんもう——`);
      era.printButton(`「凱旋門賞に行かないか？」`, 1);
      era.printButton(`「やっぱり有馬記念か？」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`응? 凱旋門賞？`);
        await maru.say_and_wait(
          `すごっ！ ${callname}と一緒だと、毎回サプライズがあるわね～`,
        );
        await maru.say_and_wait(
          `凱旋門賞なら、世界級の ${maru.uma_sex_title} に会えるかもしれない。`,
        );
        await maru.say_and_wait(`うん——どうしようかしら？`);
        era.printButton(`どうすればいい？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`でしょ？ やっぱり有馬記念。`);
        era.printButton(
          `「${maru.name} が有馬記念で楽しむのを、俺も楽しみにしてる。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}はちゃんと見てて。`);
      }
      await maru.say_and_wait(`あ、そろそろウイニングライブね。`);
      await maru.say_and_wait(
        `${callname} と一緒だと、時間예つも早く過ぎるわ。`,
      );
      await you.say_and_wait(
        `ステージの上でも、${maru.name} を応援してくれたファンにこの気持ちを伝えてくれ！`,
      );
      await maru.say_and_wait(
        `응.応援してくれたファンに、ちゃんと見てもらわないと。`,
      );
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(` ${maru.name}은(는) 대기실を出た。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `대기실の扉を閉じると、部屋には自分だけになった。`,
      );
      await you.say_and_wait(`そろそろ決断しないとな。`, true);
      await era.printAndWait(`出ようとしたとき。`);
      await era.printAndWait(`トントン`);
      await era.printAndWait(`まったく、また新しい流行を思いついたのか？`);
      await era.printAndWait(`苦笑いしながら대기실の扉を開けた。`);
      await you.say_and_wait(`마루젠 ——`);
      await era.printAndWait(`扉の前に一枚の紙切れが残されていた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 先輩、聞きたいことがあります。よければ、明日の夜、빈 교실で会えますか？`,
      );
      await era.printAndWait(`決める`);
      era.printButton(`「${maru.name} に伝える」`, 1); //NE
      era.printButton(`「${maru.name} の代わりに行く」`, 2);
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
        await you.say_and_wait(`ちょっと頭が痛いな。${maru.name} 宛てだ。`);
        await you.say_and_wait(
          `自分で見に行きたい気もするが、${maru.sex} に任せたほうがいいだろ？`,
        );
        await era.printAndWait(
          `${maru.name} が戻ってから、この紙切れのことを ${maru.sex} に伝えた。`,
        );
      } else {
        await era.printAndWait(
          `周りに誰もいないのを確かめて、紙切れを拾い、ポケットに入れた。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`なぜ拾ったのか、自分でもわからない。だ이(가)——`);
        await era.printAndWait(`このまま逃したら。`);
        await era.printAndWait(`何かを失う気がする。`);
        await you.say_and_wait(`……미안해.、${maru.name}。`);
        await you.say_and_wait(`どうしても、一度行かないと。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fail
  train_fail: (() => {
    const title = '体を大事に';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`うーん、足首を捻ったみたい`);
      await era.printAndWait(
        `${maru.name}は先のトレーニングで足首を捻ってしまった`,
      );
      await maru.say_and_wait(`大丈夫よ♪ このくらいならすぐ治るわ。`);
      era.println();
      era.printButton('「小さな傷でもちゃんと休むこと！」', 1);
      era.printButton('「これぞ青春だ、トレーニングに戻ろう！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Ok♪ ${callname}がこんなに気にかけてくれるなんて、実は私のこと、気になってる？`,
        );
        await maru.say_and_wait(
          `でも怪我なんて、${
            maru.elder_sibling_sex_title
          }らしくないわね。これじゃテイオー${maru.couple_title}に……`,
        );
        era.printButton('「そんなことない！」', 1);
        await era.input();
        await maru.say_and_wait(
          `うん……そのとおり。${
            maru.elder_sibling_sex_title
          }、しっかり反省したわ。ちゃんと休んだら、もう一度${
            maru.elder_sibling_sex_title
          }らしいところを見せる！`,
        );
        await era.printAndWait(`${maru.name}は素直に保健室で休んだ`);
      } else if (fail_again) {
        await maru.say_and_wait(`あら、${callname}はお上手ね♪`);
        await maru.say_and_wait('もっと褒めてくれてもいいのよ。');
        era.printButton(
          `「${
            maru.name
          }、美しくて強い${maru.uma_sex_title}、紅い炎みたいにクールで派手な${
            maru.elder_sibling_sex_title
          }さま！」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          'あら、そう言われると照れるわ♪ じゃあ休みも十分、トレーニングに戻りましょう！',
        );
        era.printButton('「その意気だ！」', 1);
        await era.input();
        await maru.say_and_wait('痛い！');
        await era.printAndWait(
          'トレーニング中に傷が悪化し、また病室で休むことになった。',
        );
      } else {
        await maru.say_and_wait('いち、に、さん、し、余裕余裕♪');
        await maru.say_and_wait('ご、ろく、なな、はち、全然大丈夫♪');
        await maru.say_and_wait(`${you.name}、私の跳び、どう？`);

        era.printButton('「……まぶしい！」', 1);
        await era.input();
        await maru.say_and_wait(
          'ふふ♪ このまま後輩たちに、クールで派手なところを見せましょう！',
        );

        era.printButton(`「${maru.name}、${maru.name}！」`, 1);
        await era.input();
        await era.printAndWait(
          `奇跡のように${maru.name}は調子を取り戻し、またトレーニングに戻った。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fumble
  train_fumble: (() => {
    const title = '無理は厳禁';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`ん、痛い`);
      await era.printAndWait(
        `${maru.name}は先のトレーニングで足首を捻ってしまった`,
      );
      await maru.say_and_wait(`私でも、もう限界よ`);
      await maru.say_and_wait(
        'でも、次のレースも近いし……早く元気にならないと！',
      );
      era.println();

      era.printButton('「焦らないで、ゆっくり治そう。」', 1);
      era.printButton('「時には強い薬も必要だ！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`そう？ ちょっと休めば戻ると思ってたけど！`);
        era.printButton('「傷が悪化したら大変だ。」', 1);
        await era.input();
        await maru.say_and_wait(
          '……わかった。治すと決めたなら、完治を目指さないと！',
        );
        await maru.say_and_wait(
          'じゃあ、元気を出すためにジェラートを買いに行きましょう。',
        );
        era.printButton('「ああ、脚をまた怪我しないように。」', 1);
        await era.input();
        await maru.say_and_wait(
          `あら、${callname}は優しいのね。${
            maru.elder_sibling_sex_title
          }じゃなくて後輩たちだったら、一瞬で落とされちゃうわよ～`,
        );

        era.printButton(`「${maru.name}、また冗談を。」`, 1);
        await era.input();
        await maru.say_and_wait('ふんふん♪');
        await era.printAndWait(
          `${maru.name}がしっかり治るまで、トレーニングは一旦お休みにした`,
        );
      } else {
        await era.printAndWait(
          `レースが近づいているのに、${maru.name}은(는) かなり重い傷を負った。早く治すなら、奇策に出るしかない`,
        );
        await era.printAndWait(
          `${you.name}은(는) 考えに考え、強い薬を打つことにした`,
        );
        era.printButton(
          '「気分がよければ傷も早く治る。意志の力で乗り切ろう！」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '私の考えと同じね。気分転換するなら、都心でいちばんの流行を追いかけましょう',
        );
        if (fail_again) {
          await era.printAndWait(
            `こうして ${you.name}은(는) ファッション誌で今季の最先端を確かめたあと、${maru.name}を連れて百貨店へ行った。`,
          );
          await era.printAndWait(
            `平日でも人出はかなり多く、${you.name}は誰かが${maru.name}の怪我した脚にぶつからないよう、気を配った。`,
          );
          await era.printAndWait(`二人は館内で目が回りそうになった。`);
          await maru.say_and_wait(
            `응? 今の流行、聞いたこともないわ。${
              maru.elder_sibling_sex_title
            }、アウトなのかしら？`,
          );
          era.printButton(
            `「最先端に打ちのめされた${maru.name}の気分は落ち、回復の効果も大きく下がった」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name}은(는)  ${maru.name} の案内で愛車をあちこちに走らせ、年代を感じるCDショップに着いた。`,
          );
          await maru.say_and_wait(
            '見た目は地味だけど、中の音楽はなかなか流行ってるのよ♪',
          );
          await era.printAndWait(
            `${you.name}は適当に一枚CDを手に取った。高校のころ繰り返し聴いた曲かどうか、はっきりしない。`,
          );
          await maru.say_and_wait(
            'ふふ～、やっぱりいい曲♪ 踊りたくなっちゃう。',
          );
          era.printButton(
            `（${maru.sex}が喜んでくれるなら、それでいいか？）`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `音楽のおかげか、${maru.name} の傷も早く治っていった。`,
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
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}のトレーニングが終わったあと。`);
      await maru.say_and_wait(`ハロー？${callname}、あとで空いてる？`);
      await maru.say_and_wait('この天気で走るの、きっと楽しいわよね？');
      await maru.say_and_wait(
        '跳ねる水しぶき、雨にかすむ視界……こういうときは、一味違う風が感じられる気がするの。',
      );
      await maru.say_and_wait(
        '今日、すごくやる気よく走れたでしょ！ このまま練習を終わるのはもったいないわ♪',
      );
      await maru.say_and_wait(`雨の中を走るのも、悪くないわよ♪`);
      await maru.say_and_wait(
        `このくらいの雨、朝のシャワーと同じくらいでしょ。`,
      );
      await maru.say_and_wait('でも今は夕方のシャワー、かな……？');
      await maru.say_and_wait('私の体、まだ熱いままよ。');
      await maru.say_and_wait(`今こそ私の出番かも？ ${callname}은(는) どう思う？`);
      era.printButton('「わかった、走ろう。」', 1);
      era.printButton('「今は走らないほうがいいかも！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `そうこなくっちゃ！ 今日は一晩中走るわよ。ふふ、空も喜んでるみたい。`,
        );
        await maru.say_and_wait(`じゃあ出発よ。風の世界へ。`);
        await era.printAndWait(
          'こうして追加トレーニングは、雨の中で続き続けた。',
        );
      } else {
        await maru.say_and_wait('あら、残念。');
        await maru.say_and_wait('せっかくの機会なのに……！');
        await maru.say_and_wait('でも仕方ないわね。体力の温存も大事だもの……！');
        await maru.say_and_wait('それにトレーナーを風邪させたら、困るわ。');
        await maru.say_and_wait(
          '値切り交渉もよくないけど、雨の中をドライブに付き合って。二人きりよ♪',
        );
        era.println();
        await era.printAndWait(
          `雨のドライブで二人とも疲れたけれど、${maru.name}은(는) とても楽しそうだった。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_39
  we_39: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `最後のデータを整理してから、${you.name}は長い息を吐いた。`,
      );
      era.printButton(`「やっと終わった。」`, 1);
      await era.input();
      await era.printAndWait(`ほぼ痺れた両脚を動かす。冬の夜は夏より長い。`);
      await you.say_and_wait(`外を歩こう`, true);
      await era.printAndWait(
        `仕事を全部終えた達成感で、${you.name}の足取りは軽くなった。`,
      );
      await era.printAndWait(
        `훈련실を出ると、学園のホールはパンプキンライトや紫のリボンで、神秘的な古城のように飾られていた。`,
      );
      await you.say_and_wait(`そういえば今日は何の日だったっけ？`, true);
      await you.say_as_passer_by_and_wait(
        `元気な${maru.uma_sex_title}たち`,
        `お菓子くれなきゃいたずらしちゃうよ！`,
      );
      await era.printAndWait(
        `幽霊や人狼、吸血鬼に扮した${maru.uma_sex_title}たちに絡まれた！`,
      );
      await you.say_and_wait(`うわ！`);
      await era.printAndWait(
        `角に隠れていた${maru.uma_sex_title}たちに不意打ちで驚かされ、${
          you.actual_name
        }は地面に倒れた。`,
      );
      await you.say_as_passer_by_and_wait(
        `元気な${maru.uma_sex_title}たち`,
        `いたずら大成功！`,
      );
      await era.printAndWait(
        `通行人を驚かせた${maru.uma_sex_title}たちは笑いながら走り去り、現場には被害者の${
          you.actual_name
        }だけが残った。`,
      );
      await you.say_and_wait(`こんな格好……何の祭りだっけ？`);
      await era.printAndWait(
        `頭を整理しようとしながら、${you.name}は尻の埃を払って立ち上がった。`,
      );
      await you.say_and_wait(`学園の外を見てみよう`);
      await era.printAndWait(`決めたあと、${you.name}はホールを離れた。`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `ミイラに扮した${maru.uma_sex_title}たち`,
        `お菓子くれなきゃいたずらしちゃうよ!`,
      );
      await era.printAndWait(
        `西洋のハロウィンを真似て、トレセン学園の${maru.uma_sex_title}たちも商店街の近くで一軒一軒戸を叩いている。`,
      );
      await era.printAndWait(`店主たちも用意した飴を出してもてなす。`);
      await you.say_and_wait(`今日はクリスマスなのか？`);
      await era.printAndWait(
        `巨大なコウモリとパンプキンライトの看板の入口を見て、${you.name}は考え込んだ。`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`入口で声をかけられた。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`${callname}、ハロウィンおめでとう♪`);
      await era.printAndWait(
        `深い紫の魔女服でコスプレした${maru.name}が、笑顔で${you.name}を見ている。`,
      );
      await you.say_and_wait(`ここで${maru.name}に会うとは。楽しんでる？`);
      await era.printAndWait(
        `揺れる耳、いたずらな妖精みたいに活発な尻尾。もう答えは明らかだ。`,
      );
      await maru.say_and_wait(
        `この感じ、好き。${callname} も一緒に遊んだら、もっとかわいいわ♪`,
      );
      await you.say_and_wait(`うん……`);
      await era.printAndWait(
        `化け物に扮した${maru.uma_sex_title}たちは未成年の${
          maru.teen_sex_title
        }だ。大人がこれをやるのは、やはり。`,
      );
      await you.say_and_wait(`むしろ光栄だ。`);
      await era.printAndWait(
        `こうして溜まったストレスを緩め、全身でこの喜びの海に沈む。`,
      );
      await maru.say_and_wait(`ふふ♪ じゃあ約束よ？`);
      await you.say_and_wait(`約束だ。`);
      await you.say_and_wait(`息抜きだと思って。`, true);
      await you.say_as_passer_by_and_wait(
        `リッチに扮した${maru.uma_sex_title}`,
        `先輩！ こっち、手が回りません！`,
      );
      await era.printAndWait(
        `飴を配る屋台が、${maru.uma_sex_title}たちに取り囲まれて身動きできないようだ。`,
      );
      await maru.say_and_wait(`あちゃー、じゃあ先に行くわ。`);
      era.printButton(`「俺も手伝う」`, 1);
      await era.input();
      await era.printAndWait(
        `飴を麻袋三つ分配ったあと、力尽きた二人は훈련실のソファに倒れ込んだ。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_41
  we_41: (() => {
    const title = (maru) => `トレーナーと担当${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`これは十一月のある日。`);
      await era.printAndWait(
        `${you.name}は去年の朝日杯の映像を見ながら、その技術をどう使えば${maru.name}の能力を上げられるか考えている。`,
      );
      await you.say_and_wait(`さすがスーパーカー、と言うべきか。`);
      await era.printAndWait(
        `走るために生まれた両脚。優美な肢体の下に隠れた大きな力。`,
      );
      await you.say_and_wait(`俺がいなくても、軽く勝てそうだな`);
      await era.printAndWait(
        `一時停止を押し、コーヒーを一口すする。冷たい苦みが口の中でゆっくり溶ける。`,
      );
      era.println();
      await era.printAndWait(`きしっ。`);
      await maru.say_and_wait(`ハロー！ ${callname}、入るわよ。`);
      await you.say_and_wait(`機嫌がよさそうだ。何かいいことでもあったか？`);
      await maru.say_and_wait(`はぁ、${callname}にもわかっちゃう？`);
      await maru.say_and_wait(
        `今日の選抜で、ずっと見てた後輩がやっと障害を越えて、同じように走る楽しさを知ったのよ？\n`,
      );
      await you.say_and_wait(
        `${maru.name}がそこまで言うなら、俺も${maru.name}が目をかけてる後輩を見てみたくなった。\n`,
      );
      await maru.say_and_wait(
        `でしょでしょ？ 後輩たち、そういうふうに一気に成長するの！ 私もびっくりしちゃった。`,
      );
      await maru.say_and_wait(
        `いつか私も後輩に軽く追い越されて、そのまま遠くへ置いていかれるかもね。プレッシャー、プレッシャー。\n`,
      );
      era.printButton(`「この先のトレーニングも頑張らないと！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `그래! ${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私も、この先のトレーニングはスパルタじゃないと！`,
      );
      era.println();
      await maru.say_and_wait(`そういえば。`);
      await era.printAndWait(
        `${maru.name}は何かを思い出したように、両手を軽く叩いた。\n`,
      );
      await maru.say_and_wait(
        `そうだ、${callname}、トレーニングが終わったら一緒にドライブしない？`,
      );
      await maru.say_and_wait(
        `他の季節と違って、秋の風예つも気持ちを軽くしてくれるの。`,
      );
      await maru.say_and_wait(
        `でも、言葉だけで話しても ${callname} には伝わらないでしょうね。だから ${callname} には、体で感じてもらうほうがいいと思う。`,
      );
      era.printButton(
        `${maru.name}がそこまで言うなら、俺も秋風を感じてみたくなった。`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `${maru.name}の言う秋風って、どんな感じなんだろう？`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `ふあ、風に吹かれて、やっと何もかも浮き雲だってわかるわ。`,
      );
      era.printButton(`「${maru.name}、もう少しゆっくり走れるか？」`, 1);
      await era.input();
      await era.printAndWait(
        `初めて助手席で気絶しそうになったころと違い、今の${you.name}もこの速度に少し慣れてきた。`,
      );
      await you.say_and_wait(`人間は思ったより頑丈だな。`, true);
      await you.say_and_wait(
        `高速で動く気流の中、風の轟と、後ろへ急速に退いていく景色以外は。`,
        true,
      );
      await era.printAndWait(
        `夏のように空気に熱波の名残が混ざるわけでもなく、冬のように寒流の欠片が混ざるわけでもない。`,
      );
      await era.printAndWait(`秋の風には、強い解放感がある。`);
      await era.printAndWait(
        `学生時代、最後の課題を終えてペンを置き、息をついたときのようだ。`,
      );
      await era.printAndWait(
        `あるいは、何かにもう長いこと苛まれて、ある日やっと終わったときのようだ。`,
      );
      await era.printAndWait(
        `風に吹かれた頬から始まり、一本一本の髪、髪につながる脳、最後に心まで届く。`,
      );
      await era.printAndWait(`余分な爽快感を、遠慮なく解き放ちたくなる。`);
      await you.say_and_wait(`${maru.name}、もしかして、나는 。`);
      await maru.say_and_wait(`そろそろ海ね。`);
      await era.printAndWait(`口から出そうになった言葉は、結局沈黙になった。`);
      await you.say_and_wait(`……そうだな。`);
      era.drawLine();
      await era.printAndWait(
        `${maru.name}の助手席から降りたあと、${you.name}は遠くを懸命に眺めた。視界にはごま粒ほどの人影しかない。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}という種族が生まれつき持つ優位か、まだ海水に流されていない足跡から読み取った状況か。`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `この深い青の空間で、${maru.name}は起伏する波を見つめ——`,
      );
      await era.printAndWait(`それから、寂しそうな顔をした。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`응?`);
      await maru.say_and_wait(
        `こうして休みの日に ${callname} と一緒に海を見るのは、初めてね。`,
      );
      await era.printAndWait(
        `湿った海風が真正面から吹き、ほとんど目を開けていられない。`,
      );
      await maru.say_and_wait(`あら、今日の風はこんなに強いのね。`);
      await you.say_and_wait(`そうか。`);
      await you.say_and_wait(`海風って、こういう少し苦い塩の匂いなんだな。`);
      await maru.say_and_wait(
        `うん、少し生臭い風。同時に、海で生きる生き物たちの道標でもある。`,
      );
      await maru.say_and_wait(
        `あの子たちは、この特別な匂いに頼って餌を探すの。`,
      );
      await maru.say_and_wait(
        `だからそういう意味では、この匂いが、あの子たちの命綱になってるのかもね。`,
      );
      await you.say_and_wait(
        `${maru.name}예つも、優しいお${maru.elder_sibling_sex_title}だな。`,
      );
      await maru.say_and_wait(
        `参ったわ、${callname} にだけはそう言われたくない♪`,
      );
      await maru.say_and_wait(
        `${callname} にそう言われると、${maru.elder_sibling_sex_title}、ちょっと照れる。`,
      );
      await era.printAndWait(
        `${you.name}に褒められた${maru.name}は、珍しいかわいい顔をした。`,
      );
      await you.say_and_wait(
        `三女神さまの恵みに感謝。もう食べきれない。`,
        true,
      );
      await era.printAndWait(
        `こうして${maru.name}のかわいい姿を、遠慮なく味わい尽くした。`,
      );
      await era.printAndWait(
        `트레이너인 数十年のキャリアに比べれば、たった三年は泡のように短い。`,
      );
      await era.printAndWait(
        `だからキャリアで初めて出会った${maru.uma_sex_title}を、練習台にしていいのか？`,
      );
      await era.printAndWait(
        `いや、トレーナーとしては能力が足りないのが運命で、賭けてくれた${maru.uma_sex_title}たちを失望させるかもしれない。`,
      );
      await era.printAndWait(`それでも、私たちは契約を選ぶ。`);
      await era.printAndWait(
        `${maru.uma_sex_title}たちが、それを必要とするから。`,
      );
      await era.printAndWait(
        `だからこそ、トレーナーにいちばん大事なのは、誠実な心だ`,
      );
      await era.printAndWait(
        `「身を滅ぼす可能性があっても、トレーナーとして担当と一緒に輝く。」その誠実な心で、トレーニングの醜さや足りなさを贖う。`,
      );
      await maru.say_and_wait(`そろそろ帰ってご飯にしましょう、${callname} ——`);
      await era.printAndWait(`月が昇った。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_16
  we_47_16: (() => {
    const title = (maru) => `こんばんは、${maru.name} よ`;
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`アパート。`);
      await you.say_and_wait(
        `この先のトレーニング計画は、一旦ここまでにしよう`,
        true,
      );
      await era.printAndWait(
        `柔らかい明かりの下、${you.name}은(는) パソコンの前で休日に溜まった事務を処理している。昼のトレセンの熱い声援と違い、夜のトレーナー寮はひときわ静かだ。`,
      );
      await you.say_and_wait(`もう12時近いか`, true);
      await era.printAndWait(
        `最後の書類を理事長へ送ったあと、${you.name}は疲れた目をこすり、ソファに全身を預けた。`,
      );
      await you.say_and_wait(`風呂に入って、しっかり寝よう`, true);
      await era.printAndWait(
        `目を固く閉じ、一日の疲れを消化しようとする。それから大きく息を吸い、一日の苛立ちを体から出す。`,
      );
      await era.printAndWait(`ぶるぶるぶる`);
      await you.say_and_wait(`こんな時間に営業電話は来ないだろ`, true);
      await era.printAndWait(
        `体は動きたくないが、社畜の本能でスマホを開いた。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `担当の${maru.uma_sex_title}が深夜にかけてくる理由はわからない。それでも迷わず出た。`,
      );
      await maru.say_and_wait(`예～ ${callname}、今夜の空、すごくいいわよ～`);
      await you.say_and_wait(`こっちは見慣れた景色以外、特別なものは何もない`);
      await you.say_and_wait(`それに、`);
      await era.printAndWait(
        `大きく息を吸い、まだ残る苛立ちがうっかり出ないようにした。`,
      );
      era.printButton(`「夜更かしすると肌がしわになる。早く寝ろ！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `たまんないわ><！ ${callname}、プレッシャーなことばかり。このままじゃさよならしかない。`,
      );
      await era.printAndWait(
        `スマホの顔文字を見て、使い方を思い出すのにまる十秒かかった。`,
      );
      await you.say_and_wait(
        `そういえば、${maru.name}はどうして急に電話してきた？`,
      );
      await maru.say_and_wait(
        `一回寝て起きたら、もう眠れなくなって。だから ${callname} を探しに来たの。`,
      );
      await you.say_and_wait(`そうか？`);
      await era.printAndWait(
        `とんでもない言葉が出た気がしたが、それでも聞き続けた。`,
      );
      await maru.say_and_wait(
        `最初は眠れなくて生気がなくなったけど、外の月を見てたら、ソファを取ったみたいな気分。特にトレセンを通るときの夜風の涼しさ、心が弾むわ⭐`,
      );
      era.printButton(`「まさか——」`, 1);
      await era.input();
      await era.printAndWait(
        `トレーナー制服に着替える前に、仮住まいの扉が開いた。`,
      );
      await maru.say_and_wait(`こんばんは、${callname} `);
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `${maru.sex}の笑みの中に、驚愕した自分が映っていた`,
      );
      await maru.say_and_wait(` ${callname}？`);
      era.drawLine();
      await era.printAndWait(
        `一通り説教したあと、${maru.name}はソファの上でおとなしく正座している。`,
      );
      await maru.say_and_wait(`ありがとう♪`);
      await era.printAndWait(
        `それから、気まぐれな客と一緒に机の上の雑物を片付け、インスタントの紅茶を ${maru.sex}에게 건넸다.`,
      );
      await era.printAndWait(
        `紅茶をちびちび吸う${maru.name}を見て、思わずため息をついた。`,
      );
      await era.printAndWait(
        `こんな遅い時間に${maru.sex}を一人で帰すのも危ない。だが生徒を勝手に泊まらせるわけにもいかない。`,
      );
      await you.say_and_wait(`どうすればいい？`, true);
      await maru.say_and_wait(`あの、${callname}？`);
      await era.printAndWait(`${maru.name}が返事を待っている。ここは\n`);
      era.printButton(`今夜は${maru.sex}を泊める`, 1);
      era.printButton(`「送って${maru.sex}を帰す」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}、顔色がよくないわ。`);
        await you.say_and_wait(
          `来週のトレーニング案で直すところを悩んでたから、顔色が悪い。`,
          true,
        );
        await maru.say_and_wait(`${callname}、수고했어.`);
        await era.printAndWait(
          `${maru.name}に習慣で頭をなでられる。最初は強く抵抗したが、長く続くと、トレーナーとしての矜持は鼻で笑う二声だけになった。`,
        );
        await maru.say_and_wait(`미안해.もうしない。`);
        await era.printAndWait(
          `前より儀礼的なごまかしではなく、今回の謝罪には、心配させたことへの後ろめたさが多い。`,
        );
        await era.printAndWait(
          `${maru.sex}のかわいそうな様子を見て、心を鬼にできず、またため息をついた。`,
        );
        await you.say_and_wait(
          `こんな時間に帰すのも心配だ。今夜はここに泊まれ。`,
        );
        await era.printAndWait(
          `パパラッチも、翌日のゴシップも、${
            minoru.name
          }の冷たい目と叱責と一か月分の給料も、もうどうでもいい。`,
        );
        await you.say_and_wait(
          `君は俺のベッドで寝てくれ。나는 ソファで一晩だ。`,
        );
        await maru.say_and_wait(`ん——それは少し惜しいわね。`);
        await you.say_and_wait(`深夜の主犯は要求が多いな！`);
        await maru.say_and_wait(`ほ・ん・と・う・に・ご・め・ん！`);
        await you.say_and_wait(`そんな紛らわしい言い方をするな。`);
        await era.printAndWait(
          `galgameに出てきそうな恋愛喜劇が現実で起きた。喜ぶべきことなのに。`,
        );
        await era.printAndWait(
          `하지만,完全武装のパパラッチが深夜に${maru.name}を招き入れたところを撮って、翌日の見出しになり、${
            minoru.name
          }に冷たい目で見られ、いちばん大事な給料が飛ぶ姿を思うと。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}は、かなり苦しむ一夜を過ごした。`);
      } else {
        await you.say_and_wait(`……${maru.name}、送っていく。`);
        await maru.say_and_wait(`응? 本当に？`);
        await era.printAndWait(
          `激しく引っ張り合った末、${maru.name}を自分のアパートへ戻すよう説得した。`,
        );
        await era.printAndWait(
          `この行動が、${maru.sex}の想定のうちだったとは知らなかった。`,
        );
        await maru.say_and_wait(
          `こんな時間だし、${
            callname
          }もこっちに泊まって。こっちのパパラッチ、意外と多いのよ。`,
        );
        await maru.say_and_wait(
          `さっきの言い争いで、あの人たちも起きたでしょう？`,
        );
        await era.printAndWait(
          `こっちの${callname}も、翌日娯楽誌の見出しにはなりたくないでしょう？`,
        );
        await era.printAndWait(`これが本当の罠だと、突然気づいた。`);
        await maru.say_and_wait(`じゃあ、${callname}。おやすみ！`);
        await era.printAndWait(
          `${maru.name}の予備の毛布をかぶって、ソファで一晩を過ごした。`,
        );
        await era.printAndWait(
          `翌日、大ニュースの匂いを嗅いだパパラッチと知恵比べした話は、また別の冒険だ。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_17
  we_47_17: (() => {
    const title = '憧れ';
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
        `厚いクマと消えないコーヒーの匂い。${you.name}は手の書類を何度も読み返している。`,
      );
      await you.say_and_wait(`今の状態でダービーに挑むなら`);
      await era.printAndWait(`この先、重点的に伸ばすのはどの能力だ？`);
      era.printButton(`「スタミナと根性！」`, 1);
      era.printButton(`「スピードとパワー！」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(
          `夏季合宿で、これまで疎かにしてたスタミナを引き上げよう。`,
        );
      } else {
        await you.say_and_wait(`やっぱりスピードとパワーのほうがいいな。`);
      }
      await you.say_and_wait(`はっくしゅん！`);
      await era.printAndWait(
        `集中がくしゃみで途切れた。${you.name}は右手のナプキンを一枚取り、満杯のゴミ箱へ捨てた。`,
      );
      await you.say_and_wait(`この書類を片付けたら。`, true);
      await era.printAndWait(
        `体が冷たい。全身を氷に埋めたみたいで、視界もぼやけてきた。`,
      );
      await era.printAndWait(
        `若くて丈夫だから一週間くらい夜更かししても平気だと思っていた。体のほうが先に折れた。`,
      );
      await you.say_and_wait(`この体め。風邪薬、風邪薬はどこだ？`);
      await era.printAndWait(
        `引き出しを開け、解熱剤と書かれた紙箱を抜いた。中の薬はとっくに空だった。`,
      );
      await you.say_and_wait(`……そうか。少なくとも頭が回るうちに。`);
      await era.printAndWait(
        `これ以上悪い状況はないはずなのに、気持ちはかえって軽くなった。`,
      );
      await era.printAndWait(
        `給水器からぬるま湯を一杯注ぎ、一気に飲んだ${you.name}は再び席に座った。`,
      );
      await you.say_and_wait(`急がないと。`);
      await era.printAndWait(
        `寒さで歯が勝手に上下し、「カタカタカタ」と鳴る。喉も飲み込みづらい。`,
      );
      await era.printAndWait(
        `「早くこの仕事を終えたい」「ここで倒れられない」その気持ちのためだけに、${you.name}は歯を食いしばった。`,
      );
      await you.say_and_wait(`終わった！`);
      await era.printAndWait(
        `最後の文字を打ったあと、達成の満足で緩んだ精神がもう持たない。視界が回り始めた。たぶん、もう限界だ。`,
      );
      await era.printAndWait(`こうして${you.name}は、満足して倒れた。`);
      await maru.say_and_wait(
        `${callname}、ちょっと様子見に来たわ♪ ${callname}？`,
      );
      await era.printAndWait(
        `意識が消える直前、${you.name}は${maru.name}の声を聞いた。`,
      );
      era.drawLine();
      await era.printAndWait(
        `ちゃんと見てて。${maru.uma_sex_title}としての先輩として。`,
      );
      await era.printAndWait(
        `ちゃんと見つめて。このまま永遠に置いていかれて。`,
      );
      await era.printAndWait(
        `ちゃんと祝福して。今は、${you.name}が私に声援を送る番よ。`,
      );
      await you.say_and_wait(`そうか。`);
      await era.printAndWait(
        `たぶん、名もない${maru.uma_sex_title}の心の声が、うっかり漏れたのだろう。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(`誰かが${you.name}を呼んでいるようだ。`);
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(`どんどん大きな声で呼ばれている。`);
      await era.printAndWait(`起きないと。起きたくない自分をなだめる。`);
      await era.printAndWait(`こうして${you.name}は、しぶしぶ目を開けた。`);
      await maru.say_and_wait(`やっと起きた？ ${callname}。`);
      await you.say_and_wait(`여기는?`);
      await era.printAndWait(
        `周りを見回すと、${you.name}の住んでいる場所のようだ。`,
      );
      await maru.say_and_wait(`ちょっと待って。`);
      await era.printAndWait(
        `${maru.name}は厨房へ入り、おかゆを一椀出してきた。`,
      );
      await maru.say_and_wait(`少し前に炊いてあるわ。まだ熱いなら、言ってね。`);
      await era.printAndWait(
        `温かい液体が${you.name}の口に入る。ぼんやりした頭は本能だけで、これは自分にいいものだと判断した。`,
      );
      era.printButton(`「ありがとう。」`, 1);
      era.printButton(`「いい、自分でやる。」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `目の前の姿に薄い霧がかかったようで、${you.name}は${maru.sex}の動きがよく見えない。`,
        );
        await era.printAndWait(`なら、いっそ目を閉じよう。`);
        await era.printAndWait(
          `そう決めて、${you.name}は目を閉じ、相手の動きに合わせた。`,
        );
        await era.printAndWait(
          `スプーンと磁器の椀が当たるたび、温かい液体が口に入る。`,
        );
        await era.printAndWait(
          `温かい感触と、慣れた正確な動き。いちばん大事なのは、懐かしい感じだ。いつの間にか、母の面影と重なっていく。`,
        );
      } else {
        await you.say_and_wait(`いい、自分でやる。`);
        await era.printAndWait(
          `そのまま起き上がろうとして、さらに力強い両手に止められた。`,
        );
        await maru.say_and_wait(
          `今は無理するときじゃない。病人はベッドでおとなしく休むものよ。`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `最後の力も尽き、ベッドに横たわるしかなかった。口に運ばれたものを、なんとか飲み込んだ。`,
        );
      }
      await you.say_and_wait(`……温かい。`);
      await era.printAndWait(
        `懐かしい気配に${you.name}は目を閉じ、深い眠りに落ちた。`,
      );
      await era.printAndWait(`恐怖で走り続けていた体が、ようやく安心した。`);
      era.drawLine();
      await you.say_and_wait(`……いつからだ？`);
      await era.printAndWait(
        `目を開け、起き上がろうとしたとき、椅子で休んでいた${maru.teen_sex_title}がベッドにうつ伏せで眠っていた。`,
      );
      await era.printAndWait(
        `震えが出ないようカーテンの端を開けた。一条の光が${you.name}の顔に当たる。夜が明けた。`,
      );
      await maru.say_and_wait(`ん응.今の流行、そういうの？`);
      await era.printAndWait(
        `幸い、体を起こした微かな揺れは ${
          maru.sex
        } に無意識で姿勢を変えさせただけ。均一な呼吸は途切れなかった。`,
      );
      await you.say_and_wait(`${maru.sex}が起きるまで、このまま待とう。`, true);
      await era.printAndWait(
        `そう思い、${you.name}は目を閉じて夜明けを待った。`,
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
      maru.print(`合宿は思ったより早く過ぎたわね。`);
      maru.print(
        `テイオー ${maru.couple_title}が砂浜で青春の魂を燃やし、必死に走る姿。`,
      );
      maru.print(`深夜ひとりで潮の満ち引きを見るのとは、また違う感じね。`);
      await maru.say_and_wait(`…… ${callname}。`);
      maru.print(`意外と、${callname} の裏切りにそこまで怒らなかった。`);
      maru.print(`まるで、まるで。`);
      era.drawLine();
      await maru.say_and_wait(`合宿は思ったより早く過ぎたわね。`);
      era.printButton(`「ああ。」`, 1);
      await era.input();
      await you.say_and_wait(`本気になると、時間예つも足りないな。`);
      await maru.say_and_wait(`でも、時は戻らないでしょう？`);
      await you.say_and_wait(`少なくとも、楽しい思い出は残しただろ？`);
      await maru.say_and_wait(
        `ふふ、そうね。テイオー ${maru.couple_title}との昨夜の打ち上げ、その前は ${callname} と海岸で水遊び、もっと前は ${callname} と過ごした町の祭り。`,
      );
      await maru.say_and_wait(`そう数えると、実際はとても充実してたわ。`);
      await maru.say_and_wait(`八月の頭に戻って、もう一度始めたいわね～`);
      era.printButton(`「たぶん、時間が意味で固定されたんだろ？」`, 1);
      await era.input();
      await you.say_and_wait(
        `意味を与えられたから、最後に何かをもたらしたんだろ？`,
      );
      await maru.say_and_wait(`ふふ、面白い考えね。`);
      await maru.say_and_wait(
        `なら、${callname}、最後の夏季合宿を一緒に楽しんでくれる？`,
      );
      await you.say_and_wait(`？`);
      await era.printAndWait(
        `ほどなく、助手席の ${you.name}은(는) 運転に心理的な影を持ち始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_33
  we_47_33: (() => {
    const title = '水と砂';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `幸いこの期間、${maru.name}はもともとのトレーニングを落としていなかった。`,
      );
      await era.printAndWait(`その慰めの下で、心は少し軽くなった。`);
      await era.printAndWait(`仕事から目を外し、立ち上がってあくびをした。`);
      await era.printAndWait(
        `砂浜は神秘の薄い紗に包まれたようだ。すぐ先では、${maru.uma_sex_title}たちが気勢高く砂浜を回って体力トレーニングをしている。`,
      );
      await you.say_and_wait(`もうこんな時間か。`);
      await era.printAndWait(
        `あの縁日のあと、${maru.name}との関係は一歩近づいたようだ。`,
      );
      await era.printAndWait(
        `${maru.sex} の心の奥へ入る許可を、やっと得たみたいだ。`,
      );
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `どうしても ${maru.sex} と一度ちゃんと話すべきだ。機会は一度だけかもしれない。`,
      );
      await era.printAndWait(`だから、決めた`);
      era.printButton(`「${maru.name}を探す」`, 1);
      era.printButton(`「${maru.name}を探す」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `夕陽の残りが砂浜に降り、金色の光と細かい砂が交わり、砂浜全体が金に鍍金されたようだ。`,
      );
      await era.printAndWait(`なぜか、焦燥がだんだん消えた。`);
      await era.printAndWait(
        `つま先と砂の摩擦がもたらす痺れは、すぐに快感に変わり、気持ちも高ぶってきた。`,
      );
      await era.printAndWait(
        `すぐ先、橙と深い青の境に立つ人影が、${maru.uma_sex_title}たちが教えてくれた${maru.name}だろう。`,
      );
      await era.printAndWait(
        `見つめている人影も、こちらの到来に気づいたようだ。それから——`,
      );
      await era.printAndWait(`声は波に静かに溶けた。`);
      await era.printAndWait(
        `波が岸を軽く叩き、寄せては返す音が、一日の物語を語っているようだ。`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}！ こっちの水、冷たいわよ！`);
      await era.printAndWait(`${maru.name}は嬉しそうに手を振った。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `少し複雑な目で${maru.name}を見てから、靴を脱ぎ、裸足で海へ向かった。`,
      );
      await era.printAndWait(`冷たい感触より先に、かすかな抵抗を感じた。`);
      await era.printAndWait(
        `だが意識して近づくにつれ、その不快感もゆっくり消えた。`,
      );
      era.printButton(`「夏の感じはどうだ？」`, 1);
      era.printButton(`「海水の感じ、ベリークールか？」`, 2);
      await era.input();
      await maru.say_and_wait(
        `体が涼しくなっただけじゃない。熱い心まで、一気に静かになったわ。`,
      );
      await you.say_and_wait(
        `${maru.name}が楽しそうに遊ぶ姿を見てると、明日が待ち遠しくなるな。`,
      );
      await maru.say_and_wait(`明日も、晴れのいい天気でしょうね。`);
      await era.printAndWait(
        `${maru.teen_sex_title}は浜の上を見た。夕方になっても練習を続ける${maru.uma_sex_title}たちだ。`,
      );
      await you.say_and_wait(
        `何かを失って、痛みの中で輾転反側して、はじめて自分がどれほど傲慢にすべてを浪費していたか、骨に刻まれるんだろう。`,
      );
      await maru.say_and_wait(
        `……そうして初めて、痛みと迷いのあと、心血を注いだものが本当の輝きを放つんでしょうね。`,
      );
      await maru.say_and_wait(
        `迷いと痛みが覚悟に変わるその瞬間を、ずっと待っていたわ。`,
      );
      await era.printAndWait(
        `言い終えると、二人は沈黙した。それから、こちらが先に口を開いた`,
      );
      await you.say_and_wait(`${maru.name}、聞いてくれるか？`);
      await maru.say_and_wait(
        `もう ${callname} に女神の宝座から下ろされたのに、今度は ${callname}、エッチなことするつもり？`,
      );
      await era.printAndWait(
        `怖がって微かに震える（？）${maru.name}を見て、さっきの過激な発言で思わず顔が熱くなった`,
      );
      era.printButton(`「ごほん。実は、伝えたいことがある。」`, 1);
      await era.input();
      await era.printAndWait(
        `トレーナーとしての矜持を保つため（今さらそんなものがあるのか）、姿勢を整えてから`,
      );
      era.printButton(`「もう一度、輝く背中を見せてくれ！」`, 1);
      era.printButton(
        `「どうしても、あの背中、あの風を、もう一度吹かせてくれ」`,
        2,
      );
      await era.input();
      await maru.say_and_wait(`！ 응? ${callname} のお願いでも、それは`);
      await you.say_and_wait(
        `いや、わかってる。違う、俺だけじゃない。知ってる人も、知らない人も、みんなその瞬間を待ってる。`,
      );
      await maru.say_and_wait(`${callname} がそう言っても`);
      era.printButton(`「その先に${maru.name}が見えたのか？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `努力すれば必ず成功するという幻想は、いつだって現実に壊されるんじゃないの？`,
      );
      await you.say_and_wait(
        `いや。最終結果より、人は痛みから逃げようとして、最後の瞬間に気づく。夢を追う過程でいちばん貴重なのは意味だ。`,
      );
      await you.say_and_wait(
        `それに、そうであっても、そんな自分を嫌悪するより、迷いと痛みのあと、疲れ果てた人たちは、世に美と呼ばれるものを見る。`,
      );
      await you.say_and_wait(
        ` こうして、期待し、願い、迷いがやっと明らかになる時を祈る。`,
      );
      await you.say_and_wait(
        ` それから、美に気づいた瞬間。そのまばゆい美に完全に虜になる一瞬。`,
      );
      await you.say_and_wait(` 人生は苦難に満ちていても。`);
      await you.say_and_wait(` 出会ったことのない物事に慌てても。`);
      await you.say_and_wait(` その痛みを他人に話せなくて、深く抑えた心하지만.`);
      era.printButton(`「俺も、あの美しい背中を見たい。」`, 1);
      await era.input();
      await you.say_and_wait(
        ` だが裏から見れば、それは人を生まれ変わらせる、いちばん強い風（助け）だ。`,
      );
      await you.say_and_wait(`きっと、きっとあの美しい背中を追って思い出す！`);
      await you.say_and_wait(`だから、力を貸してくれ。`);
      await era.printAndWait(`${maru.sex}の両目を、そのまま見つめた。`);
      await maru.say_and_wait(` ${callname}은(는) 、私に何をさせるつもり？`);
      await you.say_and_wait(`学園の芝で、いちばん忘れられない一幕を見せる。`);
      await maru.say_and_wait(`期待してるわよ？`);
      await era.printAndWait(
        `その笑顔は春に初めて咲く花のようだ。${maru.name}はその瞬間を待っている。`,
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
      await era.printAndWait(`手の中の計算用紙を見てぼんやりした。`);
      await you.say_and_wait(
        `違う。これでは${maru.sex}の心の結びは解けない。`,
        true,
      );
      await era.printAndWait(`目の前の計算用紙を丸め、適当に傍へ捨てた。`);
      await era.printAndWait(
        `飛んだ紙団子は放物線を描き、他の紙団子に当たった。`,
      );
      await era.printAndWait(`逃げたい気持ち、できない落胆が、こうして広がる`);
      await era.printAndWait(`トントン。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `${you.actual_name_with_title}ですか？`,
      );
      era.printButton(`「そうです。何か？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `あ、트레이너인 ${you.adult_sex_title}、ええ。会長が트레이너인 ${
          you.adult_sex_title
        }へ一言預かっています。`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『欲しい答えは、こちらにある。』`,
      );
      await you.say_and_wait(`……わかった。今から行く。`);
      await you.say_and_wait(
        `いつから。いや、最初から傍で見ていたのか？`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`${maru.uma_sex_title}の後ろについて行った。`);
      await you.say_and_wait(
        `シンボリルドルフは、どこまで把握している？`,
        true,
      );
      await era.printAndWait(`わけのわからない苛立ちが内心を占めた。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}`,
        `失礼します `,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}に案内され、夜の生徒会室へ来た。`,
      );
      await era.printAndWait(`eclipse first，the rest nowhere。`);
      await era.printAndWait(
        `巨大な扁額と、書類に没頭する皇帝に、冷や汗が落ちた。`,
      );
      await emperor.say_and_wait(`来たか？`);
      await era.printAndWait(
        `今気づいたかのようだ。手元の仕事を止めた皇帝が、余裕のある微笑でこちらを見る。`,
      );
      await emperor.say_and_wait(`今夜の月は、どう思う？`);
      await you.say_and_wait(
        `今夜の月は昨日と大差ない。それに、皇帝陛下、また会いましたね。`,
      );
      await era.printAndWait(
        `${maru.sex} を怒らせて예けない。さもなければ恐ろしいことになる。`,
      );
      await era.printAndWait(
        `過度に媚びてもいけない。${maru.sex} の興味が消える。`,
      );
      await emperor.say_and_wait(
        `これほど優秀なトレーナーに出会えて、トレセンの生徒会長としても光栄だ。`,
      );
      await you.say_and_wait(
        `相手が度量を見せたときは、拒まないほうがいい。`,
        true,
      );
      await emperor.say_and_wait(`それから`);
      await era.printAndWait(
        `その答えには可否を示さず、皇帝はすぐに二つ目の問いを出した。`,
      );
      await emperor.say_and_wait(
        `トレーナーと${maru.uma_sex_title}の関係は、どうあるべきだと思う？ ${maru.name}のトレーナー。`,
      );
      await era.printAndWait(
        `最後の呼びかけだけ、わざと強くした。おそらくヒントだ。`,
      );
      await you.say_and_wait(
        `${maru.uma_sex_title}とトレーナーは、支え合う関係だと思う。`,
      );
      await emperor.say_and_wait(`……それから？`);
      await era.printAndWait(`皇帝は戯れるような顔でこちらを見た。`);
      await you.say_and_wait(`たとえば二人三脚のような`);
      await emperor.say_and_wait(`その程度なら。なぜ今の境遇に落ちた？`);
      await emperor.say_and_wait(
        `トレーナー、つまり${maru.uma_sex_title}の指導者として。`,
      );
      await emperor.say_and_wait(
        `道のないところに道を開き、通った道に新しい道を出し、他人を未知の地へ導く者だ。`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}が未来の迷いと不安に直面したとき、${maru.uma_sex_title}の展望と自信を適切に管理する者だ。`,
      );
      await emperor.say_and_wait(`どれを果たした？`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(
        `皇帝は、トレーナーに必要なリーダーシップを語っている。`,
        true,
      );
      await you.say_and_wait(
        `ここで${maru.sex} が求めているのは、${maru.name}のトレーナーとしての資格を証明することだ。`,
        true,
      );
      await you.say_and_wait(`なら`, true);
      await you.say_and_wait(
        `……行く先は ${maru.sex} と同じ道だ。船に乗る条件は、水夫になること。`,
      );
      await you.say_and_wait(
        `刻一刻、自分の目標へ進んでいるかを見ている。刻一刻、船長への協力が自発であり、自分の選択だと知っている。`,
      );
      await you.say_and_wait(
        `これは自分で選んだ条件で、自分の場所で、自分の意志で出した選択だ。`,
      );
      await you.say_and_wait(
        `要らない重荷、誤解される危険、ひとりの孤独に耐える。`,
      );
      await you.say_and_wait(`……ある意味では、理想へ捧げた供物だ。`);
      await you.say_and_wait(`하지만,理想の道に代価がないはずがない。`);

      await you.say_and_wait(
        `だから、従っているのは船長の命令というより、自分の選択だ。`,
      );
      await emperor.say_and_wait(
        `服従は、結局のところ屈服を美しく言い換えただけだ。`,
      );
      await emperor.say_and_wait(`恐怖の中で適当に引き剥がした嘘だろう？`);
      await you.say_and_wait(
        `……皇帝陛下は、ドジョウという生き物をご存知ですか。`,
      );
      await emperor.say_and_wait(
        `水田や池にいるありふれた生き物だな。それが？`,
      );
      await you.say_and_wait(
        `なら皇帝もご存知でしょう。ドジョウは捕まえにくい。`,
      );
      await you.say_and_wait(
        `水田の底を滑り回り、捕まえにくい。運よく触れても、すぐ手から滑り落ちる。`,
      );
      await you.say_and_wait(
        `逃げ続けてきた私たちは、狡猾なドジョウと何が違うのか。`,
      );
      await you.say_and_wait(
        `負うべき責任の前を滑り抜けて生きるのは、痛みを引き受けるより本当に幸福なのか。`,
      );
      await you.say_and_wait(`屈服の根源は弱さだ。`);
      await you.say_and_wait(
        `失敗に慣れ、失敗を受け入れ、最終的に失敗に適応した人間は、失敗の仕方しか知らず、成功するかもしれないと夢見ることも、夢見る勇気もない敗者だ。`,
      );
      await you.say_and_wait(`……失敗から次の失敗へ進む者に、成功は来ない。`);
      await you.say_and_wait(
        `泣き叫びながら裸で生まれ、泣き叫びとともに裸で去る。何かしてこの世界に跡を残さず、未練を抱えたまま去るのは、少し惜しいだろう。`,
      );
      await you.say_and_wait(`だから、一つの決定に従う。`);
      await you.say_and_wait(
        `……トレーナーになると決めた以上、いちばん力を発揮できる場所は当然トレセンだ。`,
      );
      await you.say_and_wait(
        `進む方向が${maru.name}の祈るものと完全に同じかは確定できないが、`,
      );
      await you.say_and_wait(
        `${maru.name}の信頼と愛は十分に頼れると確信している。だから疑いは行動に替える。`,
      );
      await emperor.say_and_wait(`……指揮者としては、かろうじて合格だ。`);
      await emperor.say_and_wait(
        `世界観はまだ幼稚で、価値観も凡庸にすぎない。`,
      );
      await emperor.say_and_wait(
        `唯一、線を踏んでいるのは、確固たる展望だけだ。`,
      );
      await emperor.say_and_wait(`……하지만,今夜の要点はそこ이(가) 아니다.`);
      await era.printAndWait(`皇帝は微笑という仮面をつけてこちらを見た。`);
      await emperor.say_and_wait(`映画は好きか？`);
      await era.printAndWait(`突然その問いを投げた皇帝に、少し戸惑った。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `体裁よく答えることを考えていると、皇帝は勝手に話し続けた。`,
      );
      await emperor.say_and_wait(
        `こんな場面を想像してみろ。二人のトレーナーが同じ西部劇を選び、こんな一幕を見た。保安官とカウボーイが決闘し、銃声のあと、一人が死に、一人が生きた。観客である二人の態度はそれぞれ違う——`,
      );
      await era.printAndWait(`皇帝はわざと末尾を引き延ばし、返事を待った。`);
      await you.say_and_wait(
        `映画の違う役に入り込んで、役と同じ悲喜を味わっているのでしょう。`,
      );
      await emperor.say_and_wait(
        `死んだのはカウボーイを追った高潔な警官で、生きたのは指名手配の罪犯だとしてもか？`,
      );
      await you.say_and_wait(
        `……罪犯に入り込んだトレーナーは、自分の美的快楽を壊さないため、潜在意識ですべての瑕疵を消したのでしょう。`,
      );
      await you.say_and_wait(
        `……もう一人は主役の罪犯を認めず、カウボーイの欠陥に耐えられない。`,
      );
      await emperor.say_and_wait(`見事な論述だ。想像以上に優秀だな。`);
      await era.printAndWait(`皇帝は拍手した。`);
      await emperor.say_and_wait(
        `では、本当の  ${maru.name}を、どれほど理解している？`,
      );
      await emperor.say_and_wait(
        `自分がカウボーイに入り込んだ……いわゆる観客ではないと、どうわかる？`,
      );
      await emperor.say_and_wait(`ご苦労だった。`);
      await era.printAndWait(`皇帝は立ち上がり、遠くのトレーニング場を見た。`);
      await era.printAndWait(
        `芝で懸命に練習する${maru.uma_sex_title}たちの声が、トレセンに響いている。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_37
  we_47_37: (() => {
    const title = '思い';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`ふんふん～、もう恋人同士の関係じゃない？`);
      await era.printAndWait(
        `雑談で冗談に${maru.name}の家にしばらく泊まると言ったら、相手はあっさり同意した。`,
      );
      await era.printAndWait(
        `手を引いてショッピングモールで用品を選び回り、最後は愛車にも載りきれない量になった。`,
      );
      await era.printAndWait(
        `${maru.name}と相談した結果、物流会社で全部送ってもらうことにした。`,
      );
      await era.printAndWait(
        `同じ釜の飯を食うせいで、二人の絆はますます深まった。`,
      );
      await you.say_and_wait(
        `そろそろだ。今こそ${maru.name}にあの一歩を踏ませないと。`,
        true,
      );
      await era.printAndWait(
        `失敗への恐れで、ちょうどいい機会が手元から滑り落ちる。`,
      );
      await era.printAndWait(`何かを追い求めたいのに、手が出せない。`);
      await you.say_and_wait(
        `……${maru.name}に踏ませるというより、俺がこの一歩を踏み出すんだ。`,
        true,
      );
      await era.printAndWait(
        `買った家具を確認しながら、どう動くか考えている。`,
      );
      era.drawLine({ content: '夕飯のあと' });
      era.printButton(`「明日、一緒に秋を見ないか？」`, 1);
      await era.input();
      await era.printAndWait(
        `空気がいちばんいいときに、来週の計画を${maru.name}に伝えるつもりだ。`,
      );
      await maru.say_and_wait(`そういえば、秋を楽しむ季節になったわね。`);
      await maru.say_and_wait(`なら、明日は一緒に遠出しましょう？`);
      await era.printAndWait(
        `${maru.name}は箸を置き、両手を合わせて笑顔でこちらを見た。`,
      );
      await you.say_and_wait(`よかった！`, true);
      await you.say_and_wait(`いいな。芸術の秋、読書の秋って言うだろ？`);
      await you.say_and_wait(
        `夏の暑さや冬の寒さより、秋のこの爽やかな季節がいちばん芸術の感情を吐き出すのに向いてる。`,
      );
      await you.say_and_wait(
        `それに、秋に${maru.name}との素敵な思い出を残したい。`,
      );
      await maru.say_and_wait(
        `あら、${callname}、そんなに私を気にかけてるの？`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私も、${callname} と素敵な思い出を残したいわ……`,
      );
      await maru.say_and_wait(`ふふ～、明日の予定、もう楽しみね♪`);
      await era.printAndWait(`${maru.name}の機嫌はとてもよさそうだ。`);
      era.drawLine({ content: '翌朝' });
      await maru.say_and_wait(` ${callname}？ 起きた？`);
      await era.printAndWait(
        `まだスイッチが入っていない目をこすり、もがいて起きた。`,
      );
      era.printButton(`「約束の起床時間より少し早いな」`, 1);
      await era.input();
      await era.printAndWait(
        `朝早くから${maru.name}の久しぶりに活気ある声を聞いて、この先に希望が湧いた。`,
      );
      await maru.say_and_wait(
        `そういえば最近、美術の展覧会があるみたい。そこを最初の目的地にしましょう。`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `もう昼近いわ。${callname}、私の作った弁当、食べてみる？`,
      );
      era.drawLine();
      await you.say_and_wait(`クレーンゲームは本当に難しいな。`);
      await era.printAndWait(
        `${maru.name}のぬいぐるみを抱いた${maru.teen_sex_title}が、幸せそうに微笑んでいる。`,
      );
      await you.say_and_wait(`十分だ。`);
      era.drawLine();
      await era.printAndWait(`最後の一駅は学園の屋上に戻った。`);
      await maru.say_and_wait(`風も、成長するんでしょうね。`);
      await era.printAndWait(
        `${maru.name}の視線に沿って学園全体を見た。金色のイチョウの葉が風に乗って舞い散る。`,
      );
      await maru.say_and_wait(
        `新しく生まれた風は、いつも憂いなく空へ飛んでいく。`,
      );
      await maru.say_and_wait(
        `でも、枯葉の悲しみに触れたあと、${maru.sex}の足取りは重くなる。`,
      );
      await maru.say_and_wait(
        `${maru.sex}も、枯葉に空の自由を感じさせたい。だから優しく抱き、一緒に憂いのない空へ連れていこうとする。`,
      );
      await maru.say_and_wait(
        `だが枯葉を縛る大地が、結局は風の抱擁に勝つ。枯葉は空へ飛ぶ途中で翼を折る。`,
      );
      await maru.say_and_wait(`最後、枯葉は大地に還る。`);
      await era.printAndWait(
        `${maru.teen_sex_title}の聖域へ、足を踏み入れ始めた。`,
      );
      await you.say_and_wait(`それでも、枯葉は風の導きで自分の決定を出した。`);
      await you.say_and_wait(`この過程ほど、枯葉の生命力を示すものはない。`);
      era.printButton(`「${maru.name}……話がある。」`, 1);
      await era.input();
      await maru.say_and_wait(`ん？`);
      await era.printAndWait(
        `夕陽の残りが${maru.name}の長い髪に降り、${maru.sex} に金色の輝きをかけた。`,
      );
      era.printButton(`「来週を、ちゃんと楽しみにしていてくれ！」`, 1);
      era.printButton(`${maru.sex}に、そのとき直接見せる。`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `じゃあ、しっかり期待してるわ。${callname} がどれだけのサプライズをくれるか。`,
        );
        await era.printAndWait(
          `何かに薄く気づいたのか、${maru.name}은(는) 瞬きした。`,
        );
      } else {
        await you.say_and_wait(`この先、絶対びっくりさせる！`, true);
        await era.printAndWait(`${you.name}은(는) 息をつき、来週を待った。`);
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
      maru.print(`そろそろ終わりにしないと。`);
      maru.print(
        `走ることが喜びを生まないなら、どれだけ頑張っても一つの問いに答えられない。`,
      );
      maru.print(`なぜ私は、この痛みに耐えなければならないの？`);
      maru.print(
        `だから、後輩たちがレース場で活躍する姿を、こうして見ていればいい！`,
      );
      maru.print(`今の私は、特にそれが得意よ！`);
      await maru.say_and_wait(`……`);
      maru.print(`でも、どうして胸はまだ少し空っぽなの？`);
      maru.print(`何か、探さなきゃいけない答えが待っているみたい？`);
      await maru.say_and_wait(`答え、か？`);
      maru.print(
        `まあ、いいか。気持ちを立て直して、大好きな ${callname} を探しに行きましょう！`,
      );
      maru.print(
        `この先どの道を選んでも、${callname}은(는) 優しく励ましてくれるでしょうね。`,
      );
      maru.print(`そういえば、${callname} が贈り物をくれるみたい。`);
      await maru.say_and_wait(`期待して待ってるわよ？ ${callname}？`);
      era.drawLine({ content: '理事長室' });
      await era.printAndWait(
        `皇帝と、ずっと${maru.name}を支えてきた${maru.uma_sex_title}たちの助けで、今日までに署名の90%を集めた。`,
      );
      await era.printAndWait(
        `理事長室の扉を軽く叩き、お入りくださいの声を聞いて扉を押した。`,
      );
      await taste.say_and_wait(
        `質問！ このトレーナーは夜のトレーニング場を借りて何をするつもり？`,
      );
      await era.printAndWait(`簡単な挨拶のあと、単刀直入に構想を出した。`);
      await you.say_and_wait(
        `担当の${maru.uma_sex_title}${maru.name}に、もう一度希望を燃やしてほしい。`,
      );
      await taste.say_and_wait(
        `驚き！ なぜトレセンのトレーニング場でなければだめなの？`,
      );
      await you.say_and_wait(
        `このトレーニング場は、ここで汗を流した無数の${maru.uma_sex_title}を載せている。${maru.uma_sex_title}たちが懸命に挑む姿こそ、${maru.name}が望むものだ。`,
      );
      await you.say_and_wait(
        `これが、${maru.uma_sex_title}たち連名の請願書です。`,
      );
      await era.printAndWait(
        `腰を曲げ、びっしりした署名を目の前の${maru.teen_sex_title}に渡した。`,
      );
      await era.printAndWait(
        `相手は一つ一つの署名を確かめる。${maru.teen_sex_title}の頭の子猫は見知らぬこちらに興味があるらしく、にゃ～にゃ～と回り続けた。`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}はつま先立ちでこちらと目を合わせなければならないが、今は息ひとつ大きくできない。最終の宣告を待っている。`,
      );
      await taste.say_and_wait(
        `感動！ トレセンの${maru.uma_sex_title}たちは、想像以上に団結しているわ。`,
      );
      await taste.say_and_wait(`このトレーナー。`);
      era.printButton(`「네!」`, 1);
      await era.input();
      await taste.say_and_wait(`同意！ この活動、私も参加する！`);
      await era.printAndWait(
        `${maru.teen_sex_title}は万年筆を取り、丁寧にアキカワヤヨイの名を紙に書いて返してくれた。`,
      );
      era.printButton(`「理事長、ありがとう！」`, 1);
      await era.input();
      await era.printAndWait(
        `微笑む${maru.teen_sex_title}が「愉！悦！」の扇を開く。傍らの ${
          minoru.name
        }은(는) 苦悩と喜びが交じった複雑な顔で ${taste.name} と${you.name}を見ている。`,
      );
      await era.printAndWait(`紙を慎重にしまい、理事長室を出た。`);
      era.drawLine();
      maru.print(
        ` ${callname}은(는) 一緒に商店街へ行こうと言いながら、用意したクーポンを出した。`,
      );
      maru.print(
        `言動はかなり怪しいけど、${callname} から誘われるデートは珍しい。`,
      );
      maru.print(`餌としても、豪華すぎるわ。`);
      maru.print(
        `笑顔でこの贈り物を受け取ったあと、${callname} とサイゼリヤで簡単に昼を食べ、一緒に映画を見た。`,
      );
      maru.print(
        `平日のせいか、この回の観客は意外と少なく、二人で隣の席を取るのは簡単だった。`,
      );
      maru.print(
        `${maru.uma_sex_title}が脆さからゆっくり成熟していく励まし映画のようだ。${maru.uma_sex_title}が無数の苦難の中でも歯を食いしばって進む姿を見て、思わず ${maru.sex} に拍手したくなった。`,
      );
      await you.say_and_wait(
        `何度こんな場面を見ても、胸に自然と感動と力が湧くよな。`,
      );
      maru.print(`深く同感。`);
      maru.print(
        `映画のあと、近くでいちばん難しいというクレーンゲームに挑んで、予想どおり失敗した。`,
      );
      maru.print(
        `慰めようとした ${callname} が逆に熱くなって、どうしてもぬいぐるみを取ると言い出した。`,
      );
      maru.print(`慰められる側が慰め役になる。これも運命の醍醐味でしょうね。`);
      era.printButton(`「今夜、一緒にトレセンを見に行かないか？」`, 1);
      await era.input();
      maru.print(
        `百貨店の高級レストランで食事をしながら、そう言う ${callname}。`,
      );
      await maru.say_and_wait(
        `あら、${callname}、やっとこの贈り物の正体を明かすの？`,
      );
      await you.say_and_wait(`というか、興奮しすぎてフォークが握れない。`);
      await maru.say_and_wait(`そんなに興奮してるの？`);
      await you.say_and_wait(`ああ。この程度の贈り物だ。絶対に印象に残る。`);
      maru.print(` ${callname} が冗談に真摯に返すので、思わず期待し始めた。`);
      await maru.say_and_wait(`じゃあ、この先はしっかり楽しまないと！`);
      maru.print(`法定の飲酒年齢は来年だけど、このくらいなら大丈夫でしょう？`);
      maru.print(
        `酒を飲んだせいで、話しながら ${callname} とゆっくりトレセンへ向かった。`,
      );
      maru.print(
        `話しているうちに、話題が以前引退した${maru.uma_sex_title}へ急に曲がった。胸が突然痛んだ。`,
      );
      await you.say_and_wait(
        `そういえば、前に引退した${maru.uma_sex_title}は、今は트레이너인 方向で頑張ってる。`,
      );
      await maru.say_and_wait(`トレーナーを目指すのも、一つの道ね。`);
      maru.print(`${maru.sex}は、やっと自分の目標を見つけたみたい。`);
      maru.print(`……胸が突然痛んだ。`);
      await you.say_and_wait(
        `生まれつきある領域に向かない人もいる。でも手元の資源を考え直して別の方向へ進めば、大きなサプライズが待ってるかもしれない！`,
      );
      maru.print(`何を言えばいいかわからず、沈黙を保った。`);
      maru.print(
        `トレセン学園まであと一条。何か行事があるみたいで、笑い声が耳に届いた。`,
      );
      maru.print(`おかしい。普段のトレセン、こんなに騒がしい？`);
      maru.print(`これ이(가) ${callname} の用意した贈り物。`);
      maru.print(`まったく、ずいぶん遠回りしたわね。`);
      await maru.say_and_wait(`一緒に見に行きましょう？`);
      maru.print(`そうして ${callname} の手を引き、トレセンへ走った。`);
      maru.print(`こんな楽しい走り、懐かしいわ。`);
      maru.print(
        `声の振幅の方向に沿い、トレーニング場の位置へゆっくり向かった。`,
      );
      maru.print(
        `祭りのようだ。トレーナーと${maru.uma_sex_title}たちが談笑し、잔디 위で汗を流したり、観客席で話し、歓声を上げたりしている。`,
      );
      maru.print(
        `理事長とハヤカワ${
          maru.adult_sex_title
        }が来たことに気づいた。前者は「愉！悦！」と書いた扇を開き、後者は微笑んでくれる。ついでに、理事長の頭の子猫が気持ちよさそうに尻尾を振っている。`,
      );
      maru.print(`誰もが、満足した笑顔を浮かべている。`);
      maru.print(`祭りを楽しんでいるみたい。`);
      await maru.say_and_wait(`懐かしいわ。`);
      maru.print(`私の世界は、かつて色に満ちていた。`);
      maru.print(
        `幼いころ目にした真っ赤なスーパーカー。かっこいい外観に、当時の私は深く惹かれた。`,
      );
      maru.print(
        `あの子の囁きが聞こえた。私と同じように、自由に走ることを欲しがっていた。`,
      );
      maru.print(
        `だから幼い私は密かに誓った。将来車を買うなら、この車を選ぶ、と。`,
      );
      maru.print(
        `共鳴する日を迎えるため、カタログの写真を見ながら、運転技術を懸命に練習した。`,
      );
      maru.print(`免許を取った日、自分の免許を自分の手で受け取った。`);
      maru.print(`夢のような非現実感。現実の存在を何度も確かめた。`);
      maru.print(
        `トレーニングで味わった酸いも甘いも。得た喜び以外に、迷いも静かに来た。`,
      );
      maru.print(
        `こんな私は、いちばん幸福な状態だったのかも？ いや、今の毎日もとても楽しいけど。`,
      );
      maru.print(
        `勝利のあとの栄誉より、レース前に最近の話を分け合い、잔디 위で汗を流して走り、急な呼吸が両脚にもっと強い力を爆発させる。`,
      );
      maru.print(`あの————三女神だけが知る世界に達するまで。`);
      maru.print(
        `みんなが走る喜びを感じられたら、私の理想の世界も遠くないでしょう。`,
      );
      maru.print(`하지만,理想と現実は永遠に矛盾するのかもしれない。`);
      maru.print(
        `多くの${maru.uma_sex_title}は、その喜びを感じる前に、幾重もの茨に服を掴まれ、歩みを止められる。`,
      );
      maru.print(`叫び、誰かが${maru.couple_title}を助けてくれるよう祈る。`);
      maru.print(
        `だが唯一の解決は、${maru.couple_title}自身が悟って初めて抜け出せる。`,
      );
      maru.print(
        `祈る。才能のない自分を${maru.couple_title}が許して、その重い荷（昼夜、無能な自分を呪う荷）を下ろしてくれるよう祈る。`,
      );
      maru.print(`こうして、言い難い悲しみは悲しみの白黒二色になった。`);
      maru.print(`私の世界に黙って立ち、緘黙の城壁、灰色の幽霊。`);
      maru.print(`幽霊のように反響し、徘徊し、叫ぶ。`);
      maru.print(
        `迷う${maru.uma_sex_title}たちのためであり、自分のためでもある。`,
      );
      maru.print(`後輩からの崇拝、芝で感じた風、懐かしい過去。`);
      maru.print(
        `だが過去の思い出にばかり沈み、悔恨という快感を搾るのは、正しくない。`,
      );
      maru.print(`だから、未来へ進んでみることにした。`);
      maru.print(`選んだ道が正しいかどうか、自分でもわからない。`);
      maru.print(
        `……もしかしたら、過去の子守唄の中で機会を待つほうが正しかったのかもしれない。`,
      );
      maru.print(`こんな自分は準備不足で、覚悟も情熱の産物にすぎない。`);
      maru.print(`僻地の小道で、エンストの悩みに会うかもしれない。`);
      maru.print(`何が、これを救えるのか？\n`);
      maru.print(`意味。それが私の見つけた答え`);
      maru.print(
        `『未来のある瞬間、私は何をした』。その意味が、この先受けるかもしれない恐ろしいことを救うに足りる。`,
      );
      maru.print(
        `自分の角度から見ない。人間はもともと、時間を載せてどこかへ流れる輸送手段だから。`,
      );
      maru.print(`世界よ、あなたはこんなにも美しい。`);
      maru.print(
        `自分の欲望のためでも、他人のためでもなく進む。風の視点で、目の前の${maru.uma_sex_title}を見る。`,
      );
      maru.print(
        `微風になりたい。いや、私（微風）は時間の上に自分の意味を刻んだ。`,
      );
      maru.print(`結末がどうあれ、風は永遠に私と共にある。`);
      maru.print(`早く트레이너인 そばに戻らないと。`);
      await maru.say_and_wait(
        `トレーナーに、生まれ変わった自分を見せないとね♪`,
      );
      maru.print(`本当に、それでいいの？`);
      await maru.say_and_wait(`自分の心を裏切りたくない。だから、もう十分よ。`);
      await maru.say_and_wait(
        `もがいて、最後の力でもう一度試す。今度は、胸を吹く風のためだけに。`,
      );
      maru.print(`それがあなたの美学？`);
      await era.printAndWait(
        `ため息の${maru.name}はそこで消え、新生の自我が周囲の空気を再び掻き混ぜた。`,
      );
      await era.printAndWait(
        `柔らかい風のように、温かい笑顔のあの人のそばへ早く行きたい。`,
      );
      await era.printAndWait(`その日、優しい風が生まれた。`);
      era.drawLine();
      await era.printAndWait(`${maru.name}の反応を、落ち着かず待っている。`);
      await era.printAndWait(
        `悲しみ？ 痛み？ 釈然？ 貧しい語彙では、目の前の${maru.teen_sex_title}の胸の内を言い表せない。`,
      );
      await era.printAndWait(
        `時間は蝸牛の這った跡のようでもあり、飛行機の残した航跡雲のようでもある。`,
      );
      await era.printAndWait(`だが今は待つしかない。胸の恐れに、そう言った。`);
      await era.printAndWait(
        `運命の歯車は、過ちを犯した瞬間に終わらない。過ちのあと、自分が次に何をするかが、いちばん大事だ。`,
      );
      await era.printAndWait(
        `いつまでもひそかに痛む教訓を得たからこそ、世界への理解は深くなった。`,
      );
      await era.printAndWait(`${maru.name} なら、きっと似たことを思う。`);
      await era.printAndWait(
        `そうしてすべてを片付け、この先の物事に向き合う。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = '夏季合宿終了・忘れられない宴';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`今年の夏季合宿は、とても充実していた。`);
      await era.printAndWait(
        `砂浜でバレーやスイカ割りといった日常の運動以外に、後輩${maru.uma_sex_title}たちの悩みを聞いて的確な助言を出すのも、楽しみの一つだった。`,
      );
      await era.printAndWait(`夏季合宿の最終日,寮のパーティーに参加した。`);
      await era.printAndWait(
        `スペシャルウィーク、サクラチヨノオーが崇拝の顔で${maru.name}のこの二年の経験を聞き、サイレンススズカも${maru.name}に挑戦を申し込んだ。`,
      );
      await era.printAndWait(`深夜近くになって、みんな満足して解散した。`);
      await you.say_and_wait(
        `夏季合宿ももうすぐ終わりだ。この先は天皇賞（秋）か。`,
        true,
      );
      await you.say_and_wait(
        `レースより、やっぱり${maru.name}の笑顔がいちばんいい。`,
        true,
      );
      era.printButton(`「よし！ トレセンに戻っても全力で行く。」`, 1);
      await era.input();
      await era.printAndWait(`独り言を言いながら扉を開けると、`);
      await you.say_and_wait(`おかしい、鍵がかかってない？`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(
        `扉の向こうに現れた${maru.name}が飛びかかってきた。`,
      );
      await maru.say_and_wait(`今夜は、一緒に寝る？`);
      await you.say_and_wait(`合宿中に一緒に寝るのは、いくらなんでも……`);
      await maru.say_and_wait(
        `理事長の${maru.adult_sex_title}にも言ってあるわ`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '은(는)  ',
        you.get_colored_name(),
        ' の知らないところで理事長と何かの協議をしたようだ。',
      ]);
      await maru.say_and_wait(
        `理事長も、私たちが青春をしっかり楽しむことを望んでるの。だから ${callname} `,
      );
      await era.printAndWait(`${maru.name}は顔を真っ赤にしてこちらを見た。`);
      era.printButton(`「やる」`, 1);
      era.printButton(`「やめておこう」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`この先、よろしくね♪`);
      } else {
        await maru.say_and_wait(
          `なに？ ${callname}、こんな美しい${maru.teen_sex_title}でも興味が湧かないの？ ${
            maru.elder_sibling_sex_title
          }、自分の魅力を疑うわね。`,
        );
        await era.printAndWait(
          `耳を伏せた${maru.name}と、普段の強い落差が、かえって加虐心を煽った。`,
        );
        await era.printAndWait(`無理に抑えた欲が、また持ち上がった。`);
        await maru.say_and_wait(`じゃあこの先、よろしくね、${callname}♪`);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_43
  we_95_43: (() => {
    const title = '優しい風';
    /** @param {CharaTalk} maru 마루젠 スキー */
    const f = async (maru) => {
      maru.print(`意外な早起き。`);
      maru.print(`眠い目をこすっても、寝返っても眠れない。`);
      maru.print(`煩悶に耐えきれず、そのまま起きた。`);
      maru.print(`眠い目をこすってから、窓を開けた。`);
      maru.print(`爽やかな空気が、このアパートを訪れた`);
      maru.print(
        `屋外の金色の葉も母樹の抱擁を離れ、金風の導きでここを訪れた。`,
      );
      await maru.say_and_wait(`네!`);
      maru.print(`小さな客人に笑顔を見せて迎える`);
      maru.print(`主人の招待を受けた小さな客人は、机の上にしっかり落ちた`);
      await maru.say_and_wait(
        `……そういえば今、落ち葉で作ったしおりが流行ってるわね`,
      );
      maru.print(`葉を丁寧に洗ったあと、辞書で平らに押した`);
      maru.print(`爽やかな空気が、このアパートを訪れた`);
      await maru.say_and_wait(`この先は、太陽が出るのを待てばいい`, true);
      maru.print(
        `朝の薄い霧はまだ散らず、月は空にかかり、星が点々としている。`,
      );
      await maru.say_and_wait(`ほどなく冬ね`, true);
      maru.print(`春に芽吹いた葉は夏に繁り、秋に凋み、最後は冬の抱擁に還る`);
      await maru.say_and_wait(`私も、懸命に咲いたかしら？`, true);
      maru.print(
        `突然の強風で目がほとんど開けられない。金色の落ち葉は名残惜しそうに枝の抱擁を離れ、熱情の風に従い最後の旅へ向かう。`,
      );
      maru.print(
        `小川のように奔る無数の落ち葉が、風の導きで大地の海へ楽しく流れ込む。`,
      );
      await maru.say_and_wait(
        `かわいい後輩たちが、最後にどこまで達するか、楽しみね。ん、そう思うとプレッシャー。`,
      );
      maru.print(`落ち葉に言うようでもあり、自分に語るようでもある。`);
      await maru.say_and_wait(`後輩たちが私を超える日を待つ`, true);
      maru.print(`後輩が背中に追いつく日まで、${maru.name}は待ち続ける。`);
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
      await era.printAndWait(`長い冬がやっと過ぎ、春風が再びトレセンを吹く。`);
      await era.printAndWait(
        `苦痛と迷いを経て、自分で選んだ方向へ再び走るあなたたち——`,
      );
      await era.printAndWait(`そして、長く待っていたシンボリルドルフ。`);
      await emperor.say_and_wait(`やっとこの瞬間を待てた。`);
      await era.printAndWait(`軽い足取りで、皇帝はトレーニング場へ来た。`);
      await emperor.say_and_wait(
        `どうやら、以前の論争の結果は、最後は私の勝ちだな。`,
      );
      await emperor.say_and_wait(
        `地獄の底から這い上がった感触は？ ${maru.name}。`,
      );
      await era.printAndWait(
        `周囲のすべてを無視し、皇帝は真っ直ぐ${maru.name}へ向かった。`,
      );
      await maru.say_and_wait(
        `険しい時を過ごしたけど、刻苦の快感は味わえたわ。`,
      );
      await emperor.say_and_wait(
        `ほう？ 地獄の烈火は、お前を焼き尽くさなかったか？`,
      );
      await maru.say_and_wait(`地獄を通る道が、エデンにいちばん近いのよ♪`);
      await emperor.say_and_wait(`……ますます期待してきた。`);
      await maru.say_and_wait(`褒め言葉と思っていい？ サンキュー`);
      await emperor.say_and_wait(`……サンキューか？ Thank you ふふ。`);
      await emperor.say_and_wait(
        `本題に戻る。${maru.uma_sex_title}たちの心のアイドルになると覚悟したなら、粉々になる準備もできているだろう。`,
      );
      await emperor.say_and_wait(`お前は、愛ゆえにその行いをしたのか？`);
      await maru.say_and_wait(
        `自分がしていることが必ず正しいとは言い切れない。でも一つだけ、はっきりしている`,
      );
      await maru.say_and_wait(`そのために奮闘する毎日、私はとても幸福よ⭐`);
      await emperor.say_and_wait(
        `自分の道を見つけたなら、そのときまた会おう。`,
      );
      await era.printAndWait(`皇帝は言い終えるとトレーニング場を出た。`);
      era.printButton(`「ついに皇帝と対決か？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `会長と対決できるなんて、とても面白い展開かもしれないわね。`,
      );
      await maru.say_and_wait(
        `このいちばん盛大な舞台の上で、歯が震えるほどの興奮が待っているかもしれない。`,
      );
      await maru.say_and_wait(`一緒に頑張ろう、${callname} ♪`);
      await era.printAndWait(`そのために、次の目標はもう決まった。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_24
  ws_24: (() => {
    const title = 'トレーニング終わりの普通の一日';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`今日のトレーニングはここまで、수고했어.`);
      await maru.say_and_wait(`${callname}も수고했어.`);
      await era.printAndWait(
        `${maru.name}は ${you.name} からタオルを受け取り、額の汗を少し拭いて${you.name}に返した。`,
      );
      await you.say_and_wait(
        `このリズムで進めば、この先の朝日杯も優勝が見えてくる。`,
      );
      await maru.say_and_wait(
        `G1のレースでは、どんな盛況が見られるのかしら？ 楽しみね～`,
      );
      await you.say_and_wait(`${maru.name}は、走るのは楽しいか？`);
      await era.printAndWait(
        `タオルをまた絞ってから、そばのリュックから予備のタオルを取り、${maru.uma_sex_title}の乱れた長い髪を丁寧に拭いた。`,
      );
      await maru.say_and_wait(
        `散らばった髪をピンで留めないと、走ってるときに目に当たって痛いの。ついハメを外しちゃった。`,
      );
      await maru.say_and_wait(
        `やっぱり髪型を変えて気分転換したほうがいいかしら、${callname}はどう思う？`,
      );
      await you.say_and_wait(`俺もそう思う。`);
      await you.say_and_wait(
        `髪を結んで長いポニーテールでしっかり固定すれば、走りにも影響しないだろう。`,
      );
      await you.say_and_wait(
        `それに、みんなに${maru.name}の違う一面を見せられるのも、悪くない。`,
      );
      await maru.say_and_wait(
        `うん——どうするのがいいかしら？ ${callname}の提案もいいけど`,
      );
      await maru.say_and_wait(`あ、痛い。`);
      await you.say_and_wait(`悪い、このあたりの髪が絡まってた。`);
      await maru.say_and_wait(`サンキュー。`);
      await maru.say_and_wait(`今日は愛車と海風を楽しんで気分転換しましょう♪`);
      await maru.say_and_wait(`${callname}、門まで送ってくれる？`);
      era.printButton(`「一緒に行こう」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name}と${maru.name}は黄昏の小道を並んで歩いた。`,
      );
      await you.say_and_wait(
        `そういえば${maru.name}、一人でアパートから通学するのは不便じゃないか。`,
      );
      await era.printAndWait(
        `寮に住む他の${maru.uma_sex_title}と違い、${maru.name}はずっと学園の外のアパートに住んでいる。`,
      );
      await era.printAndWait(
        `その特別さに好奇心を持った${you.name}は、${maru.name}に答えを求めた。`,
      );
      await maru.say_and_wait(
        `学園内の門限より、校外に住む私のほうが自由かもね。`,
      );
      await maru.say_and_wait(
        `でも毎日、他の生徒より早く起きなきゃいけないのも、自由の代償よ。`,
      );
      await you.say_and_wait(
        `機会があれば${maru.name}のアパートにしばらく住んでみたいな。${maru.name}はどう思う？`,
      );
      await maru.say_and_wait(
        `なに？ ${callname}なら、面白いかもしれないわね。`,
      );
      await maru.say_and_wait(
        `${callname}、言ったことは忘れないでね？ 言ったことは、いつか返ってくるわよ。`,
      );
      era.printButton(`「もちろん。」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ～、私も楽しみ。`);
      await era.printAndWait(
        `雑談しているうちに、気づいたら学園の門に着いていた。`,
      );
      await maru.say_and_wait(
        `${callname}といる時間は、いつもこんなに短いのね。`,
      );
      await you.say_and_wait(
        `短いからこそ、この幸せな時間を倍にして大切にする。${maru.name}にとっても、いい思い出になるだろ？`,
      );
      await maru.say_and_wait(`楽しい思い出よ。また明日、さよなら～`);
      await era.printAndWait(
        `エンジンの始動音とともに、${maru.name}の背中は視界の端から消えた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_30
  ws_30: (() => {
    const title = '三女神の子どもたち';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`中庭 三女神像の前`);
      await era.printAndWait(
        `一日中騒がしい芝と校舎から離れたここは、${maru.uma_sex_title}たちの心の拠り所である聖地だ。`,
      );
      await era.printAndWait(
        `ここには三女神の像が祀られている。名はダーレーアラビアン、ゴドルフィンアラビアン、バイアリーターク。`,
      );
      await era.printAndWait(
        `澄んだ水が、女神たちが支える水瓶から池へ流れ込む。`,
      );
      await era.printAndWait(`そしてここへ、また新しい客が来た。`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`皇帝は三女神像を見つめている。`);
      await emperor.say_and_wait(`まだ来ないのか？`, true);
      await era.printAndWait(
        `私名義で、最近目をかけている${maru.uma_sex_title}を招いた。だが相手の態度は、まだ曖昧だ。`,
      );
      await era.printAndWait(
        `皇帝の威圧を恐れてか。まあいい、そんな弱い${maru.uma_sex_title}に背中は預けられない。`,
      );
      await era.printAndWait(`我らが創ったエデンで、自由に生きるがいい。`);
      await emperor.say_and_wait(`では、そろそろ戻るか`);
      await era.printAndWait(`皇帝の言葉は、中庭へ向かう足音に遮られた。`);
      era.drawLine();
      era.printButton(`「えっと、場所を間違えたか。」`, 1);
      await era.input();
      await era.printAndWait(
        `話題を続けられず混乱する。耳に入るのは、女神像が支える瓶の水が池へ落ちて弾ける音だけだ。`,
      );
      await era.printAndWait(
        `幸い皇帝は ${you.name} の到来を気にせず、視線を女神像へ向けていた。`,
      );
      era.printButton(`「よかった」`, 1);
      await era.input();
      await you.say_and_wait(`そういえば`);
      await era.printAndWait(
        `ずっと前、まだ子どもだったころ、一人で神社に来たときも、こんなことがあった気がする。`,
      );
      await era.printAndWait(
        `三女神の像を見つめ、周囲の音を無視して、思い出に沈む。`,
      );
      await era.printAndWait(
        `友達と隠れんぼをして、鬼から逃れるために、わざわざ僻地の隅に隠れた。`,
      );
      await era.printAndWait(`待っているうちに、うっかり眠ってしまった。`);
      await era.printAndWait(`そうして三女神さまに出会った。`);
      await era.printAndWait(
        `美しい赤い長い髪は燃える炎を思わせ、優しい${
          maru.sex
        }は慌てる ${you.name} をなだめようとした`,
      );
      await era.printAndWait(
        `当時の慰めの言葉はもう覚えていない。だがその優しさの感触は、色褪せないアルバムの文字のように、${you.name} の記憶に残っている。`,
      );
      await emperor.say_and_wait(
        `——ゆえに吾は認可も賛同も要らぬ。王とは、自ら先頭に立つ者だ。`,
      );
      await era.printAndWait(
        `騒がしい声が${you.name}の思考を遮り、脚の痺れが${you.name}の意識を現実へ引き戻した。`,
      );
      await you.say_and_wait(`は～あ。`);
      await era.printAndWait(
        `思わずあくびをし、この温かい余韻を味わいながら、視線を女神像から中庭の反対側へ移した。`,
      );
      await era.printAndWait(
        `わざと ${you.name} から離れて、何か話しているようだ。`,
      );
      await you.say_and_wait(`戻るか。`, true);
      await maru.say_and_wait(
        `${callname}？ 後輩たちがニンジンを少し送ってくれたの。今日は。`,
      );
      await era.printAndWait(
        `${maru.name}은(는) 中庭を出るいちばん近い道を塞いでいた。しかも。`,
      );
      await emperor.say_and_wait(`${maru.name}、久しぶりだ。`);
      await maru.say_and_wait(`ルドルフちゃん、今日も元気そうね。`);
      await maru.say_and_wait(
        `後輩たちがニンジンを少しくれたの。君も食べてみる？`,
      );
      await emperor.say_and_wait(`結構だ。`);
      await maru.say_and_wait(`そう？ 残念ね。`);
      await emperor.say_and_wait(`あとで少し届けてもらえるか？`);
      await maru.say_and_wait(`もちろん！`);
      await maru.say_and_wait(
        `${maru.uma_sex_title}たちの幸せのために必死に頑張ってるルドルフちゃん、すごいと思うわ。`,
      );
      await maru.say_and_wait(
        `挑戦者として一路努力して、レース場に皇帝の名を残した。`,
      );
      await maru.say_and_wait(
        `こうして${maru.uma_sex_title}には無理だとされた予言を次々破るのは、人生としても幸せでしょうね。`,
      );
      await emperor.say_and_wait(`では${maru.name}は、幸せか？`);
      await maru.say_and_wait(
        `幸せと言うなら、こうしてレース場でかわいい後輩たちに追いかける希望を残すのも、幸せじゃない？`,
      );
      await maru.say_and_wait(
        `잔디 위を自由に走って、後輩たちの悩みを聞いて助言する。悪くない選択だと思うわ？`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}たちの期待は、思っているより重いものだ。`,
      );
      await emperor.say_and_wait(
        `途中で桃色の泡を割るならまだいい。ずっと桃色の夢を見続けていると。`,
      );
      await emperor.say_and_wait(`いつか、自分では処理できないことに出会う。`);
      await emperor.say_and_wait(
        `そのとき、${maru.name}、貴公がどんなやり方で、その障害を越えるのか、楽しみにしている。`,
      );
      await era.printAndWait(
        `ベルが鳴り、午後のトレーニングがまもなく始まる。${maru.name}은(는) 考え、それでも黙った。`,
      );
      await emperor.say_and_wait(
        `もう少し話したかったが、執務室に積もった仕事が残っている。失礼する。`,
      );
      await era.printAndWait(`そう言って、皇帝は中庭を離れた。`);
      await maru.say_and_wait(`……それでも、私はわかってる。`);
      await maru.say_and_wait(
        `……미안해.、${callname}、思い出したことがあって。`,
      );
      await era.printAndWait(`${maru.name}은(는) 憂鬱な顔で中庭を離れた。`);
      await you.say_and_wait(`それで、誰もいなくなったのか？`);
      await you.say_and_wait(
        `${maru.name}、何か悩みがありそうだ。機会を見て話そう。`,
      );
      await era.printAndWait(`${you.name}은(는) 中庭を離れた。`);
      await era.printAndWait(
        `こうして旅人たちは、違う思いを抱えて、違う目的へ進む。`,
      );
      await era.printAndWait(`三女神は、すべてを黙って包み込んだ。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_34
  ws_34: (() => {
    const title = '贈り物';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `ある日、${you.name}が執務室で資料を整理していると。`,
      );
      await era.printAndWait(`トントントン`);
      era.printButton(`「どうぞ」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `失礼します。`);
      await era.printAndWait(
        `ドアノブが回り、高校部らしい${maru.uma_sex_title}が入ってきた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `こんにちは、トレーナー${you.adult_sex_title}。`,
      );
      era.printButton(`「こんにちは」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私はトレセン学園のどこにでもいる普通の${maru.uma_sex_title}の一人です`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 先輩みたいにレース場で勝ち続けたいです。よろしくお願いします。`,
      );
      era.printButton(`「よろしく」`, 1);
      await era.input();
      await era.printAndWait(`二人の手が握られた。\n`);
      era.printButton(
        `こちらにコーヒーが……いや、やめよう。紅茶とココナッツジュース、どっちがいい？`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ありがとうございます。でも、贈り物を届けに来ただけなので。`,
      );
      await era.printAndWait(`${maru.sex}はポケットから小さな箱を取り出した`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私たちみたいな普通の${maru.uma_sex_title}がトレーナーに目をかけてもらえて、キャリアでG3を勝つだけでも、すごくすごいことなんです。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `みんな、入着を目標に必死に頑張ってます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `それでも入着できる${maru.uma_sex_title}はごくわずかで、ほとんどの${maru.uma_sex_title}はメイクデビューを勝ったあと、一勝もできないまま三年のキャリアを終えます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `卒業までに、専属契約できるトレーナーに出会えない子もいます`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `마루젠 先輩はそういうことにこだわらず、ずっと私たちの前進を励ましてくれます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `困ったときは、そばで助言してくれます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `だから、私たちはずっと마루젠 先輩に感謝してます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `それで、友達と一緒にこの贈り物を作って、마루젠 先輩に渡したくて。`,
      );
      era.printButton(
        `「${maru.name}はきっと喜ぶ。${you.name}たち、ありがとう」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `相手の手から、リボン付きの小さな箱を受け取った。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ありがとう${you.name}、トレーナー${you.adult_sex_title}。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `この先の選抜では、みんなをびっくりさせなきゃ！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `じゃあね、${maru.name}のトレーナー${you.adult_sex_title}！`,
      );
      await era.printAndWait(
        `お辞儀したあと、${maru.sex}はドアのところで首を出して待っていた仲間のそばへ急いだ`,
      );
      await you.say_and_wait(
        `この先、${maru.sex}にも合うトレーナーが見つかるといいな`,
        true,
      );
      await era.printAndWait(
        `そっと扉を閉めてから、${you.name}は小さな箱を開けた。`,
      );
      await era.printAndWait(
        `中に入っていたのは、水晶でできたブレスレットだ。`,
      );
      await you.say_and_wait(
        `${maru.name}が戻ったら、直接${maru.sex}に渡そう`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47
  ws_47: (() => {
    const title = 'クリスマスと、ときめく思い出';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Merry Christmas！`);
      await era.printAndWait(
        `厚い服を着た${maru.name}が훈련실に現れた。`,
      );
      era.printButton(
        `「メリークリスマス! 暖を取るなら、ここに囲炉裏とみかんがある。」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `疲れた目をこすり、${maru.name}と話す機会に少し頭を空にする。`,
      );
      await maru.say_and_wait(`外は思ったより寒くて、たまんないわ。`);
      await era.printAndWait(
        `柔らかいソファに身を預け、${maru.name}は丁寧にみかんの皮を剥いて果肉を口に入れた。`,
      );
      await you.say_and_wait(
        `今日の気温はマイナス1度だ。予報では今夜雪が降るらしい。`,
      );
      await era.printAndWait(
        `『雪か』とつぶやきながら、${maru.name}はまたみかんを剥いた。`,
      );
      await era.printAndWait(
        `しばらく훈련실は静かに戻り、紙をめくる音だけが響いている。`,
      );
      await era.printAndWait(
        `体をソファの懐に沈め、今週のファッション誌を開き直した${maru.name}は、オレンジ色の暖炉に囲まれて嬉しそうな顔をしている。`,
      );
      era.drawLine();
      await you.say_and_wait(`これが最後だ。`, true);
      await era.printAndWait(`書類をフォルダにまとめ、痺れた両脚を動かす。`);
      await maru.say_and_wait(`${callname}수고했어.次の予定は何？`);
      await era.printAndWait(
        `緩んだ筋肉を一瞬で引き締め、いつもの状態に戻った${maru.name}が、立ち上がった ${you.name} を見ている。`,
      );
      await you.say_and_wait(`予定か？`);
      await era.printAndWait(
        `以前のクリスマスは、一人で훈련실でメモを整理していた ${you.name}。`,
      );
      await you.say_and_wait(`うん——そうだな、`);
      await maru.say_and_wait(`一緒に外で祝わない？`);
      await you.say_and_wait(`훈련실で休む`, true);
      await era.printAndWait(
        `期待した顔の${maru.name}を見て、${you.name}은(는) 後半を飲み込んだ。`,
      );
      await maru.say_and_wait(`今すぐ出発！`);
      await era.printAndWait(`${maru.name}の熱い誘いで、二人は合意した。`);
      era.drawLine();
      await era.printAndWait(`震えるエンジン音の中、愛車が始動した。`);
      await era.printAndWait(
        `黒い空。時折吹く寒風が、行き交う生き物を容赦なく刈り取る。`,
      );
      await you.say_and_wait(`はっくしょん！`);
      await era.printAndWait(`強い風が服と肌の隙間から入り込んだ。`);
      await you.say_and_wait(`寒いな。でもこのあと雪も降る。`);
      await era.printAndWait(`この先の予定に、思わず絶望する。`);
      await maru.say_and_wait(
        `——そういえば、テイオー${
          maru.couple_title
        }の成長、予想より早いのね。後輩がそんなに頑張ってると、${maru.elder_sibling_sex_title}も興奮してくるわ。`,
      );
      await era.printAndWait(
        `何か口実をつけて${maru.uma_sex_title}に抱きついて暖を取りたいと思いながら、体を縮めて寒さに耐える。`,
      );
      await you.say_and_wait(`マフラーを持ってくるんだった。`, true);
      await maru.say_and_wait(
        `……百貨店であのクリスマスのキャンドルディナーを出してるわ。一緒に行ってみない？`,
      );
      await era.printAndWait(
        `吹き荒れる寒風の中、${maru.name}の言葉は遠い空のようだ。`,
      );
      await you.say_and_wait(`寒い。`, true);
      await maru.say_and_wait(`……それより私は、あ、着いた！`);
      await era.printAndWait(`少し先が百貨店だ。`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: 'かん', color: maru.color },
        'ぱい！」',
      ]);
      await era.printAndWait(
        `${maru.name}の言う特価レストランで、二人は杯を上げて祝日を祝った。`,
      );
      await maru.say_and_wait(
        `今はまだお酒は飲めないけど……ジュースの味も悪くないわ♪`,
      );
      era.printButton(`「もうすぐ、${maru.name}も飲めるようになる。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `その日が来たら、${callname}は徹夜まで付き合ってね。`,
      );
      await era.printAndWait(
        `窓の外の空から雪が一枚落ち、それから無数の雪がその足跡を追って地面へ降りた。`,
      );
      await you.say_and_wait(
        `その日のために、この先のトレーニングも頑張らないと！`,
      );
      await era.printAndWait(
        `冷たく美しいそれらは自然の精霊のようで、気ままに空から地上へ遊びに来る。`,
      );
      await maru.say_and_wait(`雪ね。かわいい。`);
      await era.printAndWait(
        `何かを思い出したようで、${maru.name}は外の雪を物思いにふけって見つめている。`,
      );
      await you.say_and_wait(`${maru.name}は雪が好きか？`);
      await era.printAndWait(
        `飲み干したグラスを揺らし、${maru.teen_sex_title}の思考は遠い過去へ戻ったようだ。`,
      );
      await maru.say_and_wait(`……あ！ 미안해.、ついよそ見してたわ。`);
      await era.printAndWait(
        `${you.name}の存在に今気づいたように、慌てて応える${maru.name}はかわいい隙を見せた。`,
      );
      era.printButton(`「いや、何でもない」`, 1);
      era.printButton(`「${maru.name}は雪が好きか？」`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `同じ質問を繰り返すのは、${maru.name}にも気まずいだろう。`,
        );
        await era.printAndWait(`${you.name}は別の話題で流すことにした。`);
        await era.printAndWait(`夕食は、そんなよい空気の中で終わった。`);
      } else {
        await maru.say_and_wait(`ん？ 雪？`);
        await era.printAndWait(
          `少し悩んだあと、${maru.name}はそれでも口にした。`,
        );
        await maru.say_and_wait(`実は、すごく好きよ？`);
        await maru.say_and_wait(
          `むしろ朝起きてカーテンを開けたら、窓に雪が乗ってる景色が見たいの！`,
        );
        await you.say_and_wait(`どうしてそんな物憂げな顔をするんだ？`);
        await maru.say_and_wait(`${callname}も、そうじゃない？`);
        await era.printAndWait(`質問を受けず、別の問いを投げてきた。`);
        await maru.say_and_wait(`悩んだ顔をして、答えを探す探検者みたい。`);
        await era.printAndWait(
          `再びリズムを掴んだ${maru.name}は、いたずらっぽい笑顔を見せた。`,
        );
        await maru.say_and_wait(`でも、答えは実は簡単よ？`);
        await you.say_and_wait(`じゃあ答えは？`);
        await maru.say_and_wait(`教・え・な・い・${you.name}⭐`);
        await you.say_and_wait(
          `だめだ、急ぎすぎて${maru.sex}を警戒させたか。`,
          true,
        );
        await you.say_and_wait(`次の機会だ。`, true);
        await era.printAndWait(
          `そのあとトレーニングの話も少しして、楽しい夕食は一段落した。`,
        );
      }
      era.drawLine({ content: 'トレーナー寮の前' });
      await maru.say_and_wait(`バイバイ！`);
      await maru.say_and_wait(
        `はぁ、忘れるところだった！ ${callname}、これ、${you.name}に。`,
      );
      await era.printAndWait(
        `荷物たっぷりの後部座席から、きれいなリボンで包んだギフトボックスを取り出した。`,
      );
      await you.say_and_wait(`${maru.name}、これは？`);
      await maru.say_and_wait(`これで本当に、また明日！`);
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉はエンジンの轟にかき消され、箱を抱えたまま愛車が点になっていくのを見るだけだった。',
      ]);
      await you.say_and_wait(`とにかく、先に戻ろう。`);
      await era.printAndWait(
        `${maru.name}の気持ちであるギフトボックスを大切に抱え、ゆっくり部屋へ戻った。`,
      );
      await era.printAndWait(
        `金色のリボンを外し、箱の上をそっと開けると、幼いころ年長者から贈り物をもらったときみたいだ。`,
      );
      await era.printAndWait(`作りのきれいなマフラーと`);
      await maru.say_and_wait(
        `미안해.ね、${callname}にもっといいものを用意したかったけど、今はこのブランドしかなくて。気にしないでね。メリークリスマス！`,
      );
      await era.printAndWait(`繊細で美しい字は、本人と話しているようだ。`);
      await you.say_and_wait(`サンキュー、${maru.name}。`);
      await era.printAndWait(`いつの間にか${you.name}も同化していた。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = '新年の思い';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`時間は早く、あっという間にまた新しい年だ。`);
      await era.printAndWait(
        `${maru.name}と一緒に味わった酸いも甘いも、今はすべてよい思い出になった。`,
      );
      await era.printAndWait(
        `今日は法定の休日だ。トレーナー寮でだらけて過ごすのも、あまりに退屈だ。`,
      );
      await era.printAndWait(
        `『適当にぶらつこう』と思ったのに、足は気づかないうちにまたトレセンへ向かっていた。`,
      );
      await you.say_and_wait(`来たからには、훈련실を見ていこう`);
      await era.printAndWait(
        `決めたあと、${you.name}은(는) 훈련실へ向かった。`,
      );
      era.drawLine({ content: '훈련실' });
      await era.printAndWait(
        `いつもの훈련실なら、「また仕事か」という苛立ちが消えない。`,
      );
      await era.printAndWait(
        `だが休日に『ちょっと見ていこう』という気持ちで戻ってくると。`,
      );
      await era.printAndWait(
        `${maru.name}と次の方針を話し、おいしいケーキを一緒に味わい、ソファにくっついて重賞の映像に夢中になる。`,
      );
      await era.printAndWait(`そのすべてが、昨日のことのようだ。`);
      await you.say_and_wait(`時間は本当に早いな。`);
      await era.printAndWait(
        `いつもの훈련실を眺めているのに、場違いな錯覚がある。`,
      );
      await you.say_and_wait(`疲れすぎたか？`);
      await you.say_and_wait(`よし、屋上で風に当たって頭を冷やそう`, true);
      await you.say_and_wait(
        `……${maru.name}は今どこにいるんだろう。今頃どこかで騒いで過ごしてるのかもな。`,
      );
      await era.printAndWait(
        `훈련실の扉をそっと閉め、気分転換に屋上へ向かった。`,
      );
      era.drawLine({ content: '屋上' });
      await era.printAndWait(
        `多くの${maru.uma_sex_title}は新年を仲間や自分のトレーナーと過ごし、休みのあいだに去年の悩みを振り払う`,
      );
      await era.printAndWait(
        `いつも騒がしい学園が、今は静かな一面を見せている。`,
      );
      await era.printAndWait(
        `屋上から見下ろすと、トレセン学園全体が視界の下にある`,
      );
      await you.say_and_wait(
        `ここで「나는 三冠を取る${maru.uma_sex_title}にふさわしい男になる」と叫ぶのが雰囲気に合うんだろうな`,
        true,
      );
      await you.say_and_wait(`誰もいないけど、さすがに恥ずかしい`, true);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「나는 ${maru.name}にふさわしい${you.phy_sex_title}になる！！！」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `트레이너인 身分も、大人の矜持も全部後ろに放り、勢いで自分でも驚く声を出した。`,
      );
      await era.printAndWait(`禁忌を破った興奮で ${you.name}은(는) 顔が真っ赤だ。`);
      await you.say_and_wait(`さっぱりした。`);
      await you.say_and_wait(`誰も屋上に気づいてないうちに、早く離れよう。\n`);
      await maru.say_and_wait(`あら？ ${callname}？`);
      await era.printAndWait(`野生の${maru.name}が現れた！`);
      await you.say_and_wait(`ええ응? ${maru.name}がどうしてここに？`, true);
      await you.say_and_wait(`はは、人生終わった`, true);
      await you.say_and_wait(`人のいない島で余生を過ごそう。`, true);
      era.printButton(`「悪い、${you.name}は人違いだ。」`, 1);
      await era.input();
      era.printButton(`「今の나는 、ごく普通のトレーナーだ。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `……あら、この……ごく普通のトレーナー${you.adult_sex_title}。`,
      );
      await maru.say_and_wait(
        `さっきの叫び、勢いがあったわ。階段でも、その熱い声が聞こえたもの。`,
      );
      await maru.say_and_wait(`青春は素敵ね。`);
      await maru.say_and_wait(
        `でも、そういう言葉は、やはり当人の前でちゃんと言わないとね？`,
      );
      await maru.say_and_wait(
        `うちのトレーナーなら、満腔の気持ちをちゃんと述べるでしょうね。`,
      );
      await era.printAndWait(
        `強い羞恥で体が熱くなった ${you.name}은(는) 膝が折れ、倒れそうになった。`,
      );
      await you.say_and_wait(`本当に미안해.。`, true);

      await era.printAndWait(`${maru.name}は静かに空を仰いでいる。`);
      era.printButton(
        `……テイオー${maru.couple_title}と遊びに行かないのか？`,
        1,
      );
      era.printButton(`「${you.name}の考えを教えてくれないか？」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `${maru.name}は機嫌よく懐かしい曲を口ずさんでいる。`,
      );
      await you.say_and_wait(`寂しいのか？`, true);
      era.printButton(`「こんな寒い日に、どうして屋上なんだ？」`, 1);
      era.printButton(`「${you.name}は何を考えてるんだ？」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `本当の気持ちを知るため、${you.name}은(는) そのまま一緒に欄干に寄りかかって話し始めた`,
      );
      await maru.say_and_wait(
        `去年はテイオー${
          maru.couple_title
        }と新年パーティーをしたのに、今年は自分の트레이너인 ところへ行けって押し出されたの`,
      );
      era.printButton(
        `テイオー${maru.couple_title}は${you.name}を気にかけてるんだな`,
        1,
      );
      await era.input();
      await era.printAndWait(`${maru.name}から芳しい匂いが漂ってきた、`);
      await you.say_and_wait(
        `シャンプーか？ 今日はどうしてこんなにいい匂いなんだ`,
        true,
      );
      await maru.say_and_wait(
        `${callname}もそう思う？ ${maru.couple_title}は希望に満ちた苗よ`,
      );
      await maru.say_and_wait(`いつか風と雨の縛りを破って、大樹になる`);
      await era.printAndWait(
        `${maru.name}の期待に満ちた言葉に比べ、空を見る${maru.sex}の様子は思いに沈んでいる。`,
      );
      era.printButton(`「${maru.name}は大樹になりたくないのか？」`, 1);
      await era.input();
      await maru.say_and_wait(`大樹より、私は優しい風になりたいの。`);
      era.printButton(`「風？」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}、空を自由に吹く風に気づいてないの`);
      await maru.say_and_wait(`空を吹く風になれたら、後輩たちが悩んでるときに`);
      await maru.say_and_wait(
        `あと一歩で成功しそうなとき、ため息のときに${maru.couple_title}を励ますことができる`,
      );
      await you.say_and_wait(`${maru.name}は、今でも十分やってる。`);
      await you.say_and_wait(`今は新年を思い切り楽しもう`);
      await maru.say_and_wait(`あちゃー、このままじゃ私らしくないわ。`);
      await maru.say_and_wait(`${callname}、何か予定ある？`);
      era.printButton('「今日は芝で練習しよう」（スピード+20）', 1);
      era.printButton(
        '「一緒に出かけて、嫌なことを全部払おう」（体力+200）',
        2,
      );
      era.printButton(
        '「今日は훈련실でゆっくり休もう」（スキルPt+100）',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait('うんうん、芝を駆けたら何もかも浮き雲よ！');
          await maru.say_and_wait(`さすが${callname}、私の心がわかってる。`);
          await era.printAndWait(`${maru.name}はまた元気を出した`);
          await maru.say_and_wait('OK! じゃあ今すぐ出発');
          await era.printAndWait(
            `芝で一日トレーニングしたあと、훈련실で小さく祝った`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `なに？ ${callname}は${maru.elder_sibling_sex_title}とデートしたいの？`,
          );
          await maru.say_and_wait(
            '気が早いのね。デートのルートはちゃんと計画しないと',
          );
          await maru.say_and_wait('じゃあ愛車で');
          era.printButton(`「デートなら、歩いて行こう」`, 1);
          await era.input();
          await maru.say_and_wait(`うん——`);
          era.printButton(
            `「カップルなら、歩いて行ったほうが雰囲気出るだろ」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`${callname}がそこまで言うなら`);
          await maru.say_and_wait(`たまの散歩も、違う感じが味わえるわね⭐`);
          await era.printAndWait(`じゃあ今すぐ出発`);
          await era.printAndWait(
            `훈련실に戻ったころ、二人とも力尽きてソファに寄りかかっていた`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `そうね、こんな寒い日は暖かい훈련실にいるのが正解ね`,
          );
          era.printButton(`「훈련실のおやつとみかんを出そう」`, 1);
          await era.input();
          await maru.say_and_wait(`ふふ、じゃあ私がみかんを剥くわ。`);
          await era.printAndWait(
            `こうしてこの日は囲炉裏に当たりながら、よい空気で過ごした。`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_12
  ws_47_12: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `ファン感謝祭は、レース場の${maru.uma_sex_title}たちを支えてきたファンへの感謝のために開かれる祭りだ。`,
      );
      await era.printAndWait(
        `この日、トレセンは門を開き、在学生は生徒会が組んだメインステージと副ステージで公演する。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}の道を進む${maru.uma_sex_title}たちは、より多くの注目を集めがちだ。`,
      );
      await era.printAndWait(`ダンス室\n`);
      await maru.say_and_wait('いち、に、さん、し、余裕余裕♪');
      await maru.say_and_wait('ご、ろく、なな、はち、全然大丈夫♪');
      await era.printAndWait(
        `${you.name}は${maru.name}の最後の通しを見ている。`,
      );
      await maru.say_and_wait(`${callname}${you.name}、どう？`);
      era.printButton(`「懐かしい曲だ」`, 1);
      await era.input();
      await era.printAndWait(
        `世紀初頭のマイナー曲が耳に流れ、激しいドラムと明るいリズム、拍に合わせて歩幅を揺らす${maru.name}。`,
      );
      await era.printAndWait(
        `ふと学生時代に戻った気がする。放課後、少人数で最新のCDを話し合っていたあのころ。`,
      );
      await maru.say_and_wait(
        `${callname}、これは今いちばん新しい流行曲よ？ このままだと時代に置いていかれるわ。`,
      );
      await maru.say_and_wait(`そろそろ私の出番。`);
      await maru.say_and_wait(`${callname}は下でしっかり見てて。`);
      await era.printAndWait(`一部の来場者は、こういうレトロな音楽が好きだ。`);
      await era.printAndWait(
        `${maru.name}は、その来場者たちを過去の幻へ連れていった。`,
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
      await era.printAndWait(`理事長の私有ビーチだというのに。`);
      await era.printAndWait(`空気には涼しさがある。`);
      await era.printAndWait(`海が近いせいかもしれない。`);
      await era.printAndWait(
        `海風が、遠くで寄せては返す波の音と湿った気配を運んでくる。`,
      );
      await era.printAndWait(
        `愛車から降りると、${maru.name}は満足そうに目を細め、休暇の気配を楽しんでいる——`,
      );
      await you.say_and_wait(
        `ところで、どうしてスクールバスに乗らなかったんだ。`,
      );
      await era.printAndWait(
        `${maru.name}の強い希望で、${you.name}たちは愛車の助けを借りて理事長の私有ビーチへ来た。`,
      );
      await maru.say_and_wait(
        `せっかくこのきれいな砂浜に来たのに、後輩たちとバスで来るなんて、ちょっと惜しいわ。`,
      );
      await you.say_and_wait(
        `は？ ${maru.name}、${you.name}も夏季合宿が能力を一気に上げる近道だってわかってるだろ？`,
      );
      await you.say_and_wait(`だから普段より真剣にやろう。`);
      await maru.say_and_wait(
        `参ったわ。${callname}이(가) 그렇게까지 말한다면 ${maru.elder_sibling_sex_title}も本気出さないとね⭐`,
      );
      era.printButton(`「当たり前だろ？」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}も海水と日光浴、そこら中の水着を期待して예た。`,
      );
      await you.say_and_wait(`なら、この先は青春をしっかり楽しもう。`);
      await era.printAndWait(`体の感覚に従って歩くほうが正しい道の人もいる。`);
      await era.printAndWait(`だから、あまり干渉しないほうがいい。`);
      await maru.say_and_wait(
        `こうして海風に吹かれてると、気持ちも雲の上まで飛んでいきそうね、ですわ。`,
      );
      await you.say_and_wait(
        `そんな古い流行語まで復活してる。${maru.name}、本当に機嫌がいいな。`,
        true,
      );
      await maru.say_and_wait(`ふふ～、${callname}、かわいいわね♪`);
      await era.printAndWait(
        `どこからともなく寄ってきた${maru.name}が、ずっと${you.name}を見ている。`,
      );
      await maru.say_and_wait(`いくら褒めてもサービスはないわよ～`);
      await era.printAndWait(
        `${you.name}が次に言うことを読んで、${maru.name}は悪賢く笑った。`,
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
      await you.say_and_wait(`すごい賑わいだな。`);
      await era.printAndWait(
        `${maru.name}と一緒に、とても盛大だという縁日へ行く約束をした。だが${you.name}は入口で長く待っても${
          maru.sex
        }の姿が見えない。`,
      );
      await era.printAndWait(
        `「人混みで迷ったんだろう」と${you.name}は頭を空にし、提灯で飾られた縁日へ流れ込む人波を眺め、目を細めてあくびをしたとき。`,
      );
      await you.say_and_wait(`すごい賑わいだな。`);
      await era.printAndWait(
        `店が数軒しかないと思っていた予想とはまったく違い、四方から集まる観光客と屋台が通りの端から端まで続いている。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そこでぼーっとしてる少年、新鮮な果物はどうだい？`,
      );
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `流れる人波に押され、いつの間にか果物屋の前に立っていた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `その様子だと、縁日は初めてかい？`,
      );
      await era.printAndWait(
        `売れ行きがよくて機嫌がいいのか、おじさんは滔々と話し始めた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `まあそうだろうな。ここは観光で必ず寄る縁日の一つに選ばれてるからね。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `このきれいな砂浜の近くにあるせいで、この町はかなりの観光客を呼んでるんだ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `昔は交通の便も悪い、どこにでもある田舎だったん하지만,こっちの砂浜が有名になってから観光客も増えた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そのあと鉄道が通って、人がワッと押し寄せて、今の町になったんだよ。`,
      );
      await you.say_and_wait(`あの？ すみません`);
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `おっと。忘れるところだった。${you.name}は迷ってここに立ってるんだろ？`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そうだよな。この縁日には同じ入口が四つあるからね。芸術はよくわからんが、毎年、入口で待ち合わせして相手が見つからない人を見て楽しんでるよ。`,
      );
      await era.printAndWait(
        `話が乗ってきたのか、この町の住民であることを誇るおじさんは大きな声で紹介を続けた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `ついでに言うと、縁日を全部回りたければ、ここからまっすぐ行くと、こっちの名物の演目が見える。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `今夜は祭りを見る人混みで一儲けできるかもな。ははは。`,
      );
      await era.printAndWait(
        `最後の一言を言い終えて、唾を飛ばしていたおじさんはようやく話を止めた。`,
      );
      await maru.say_as_passer_by_and_wait(`スマホ`, `ぶるぶるぶる`);
      await era.printAndWait(
        `ポケットのスマホが震えた。演目へ向かう人がほとんどになった今、かけてくる相手は言うまでもない。`,
      );
      await maru.say_and_wait(`${callname}${you.name}はどこ？`);
      await era.printAndWait(
        `ポケットのスマホが震えた。演目へ向かう人がほとんどになった今、かけてくる相手は言うまでもない。`,
      );
      await maru.say_and_wait(
        `はあ、せっかく気合を入れて準備したのに、スマホの写真を見て入口に着いたら、${
          callname
        }の姿がどうしても見えないの。`,
      );
      await maru.say_and_wait(
        `${callname}の姿を見逃すつもりはないつもりだったけど、右を見ても左を見ても見つからない。${maru.elder_sibling_sex_title}、ちょっと生きる気力がなくなりそう><。`,
      );
      await era.printAndWait(
        `入口を間違えたんだろう。いや、${you.name}のほうも間違えたのかもしれない？`,
      );
      era.printButton(`「실례합니다, ちょっと。」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `ん？ 入口の見分け方を聞きたいんだな？`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そうだよな。毎年誰かがそれを聞く。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `普段はすぐわかる場所も、人が増えるとどれも同じに見えるんだよ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `${you.name}、その友人に入口から五軒目の屋台まで歩いてもらえ。あそこに案内のボランティアがいる。`,
      );
      await era.printAndWait(
        `おじさんは話しながら自然に地図を出し、${you.name}に指し示した。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `演目に間に合わせたいなら、この道だ。今ならまだ間に合う。`,
      );
      await era.printAndWait(`熱すぎて少し変하지만,とても親切なおじさんだ。`);
      await era.printAndWait(
        `礼を言ったあと、${you.name}はそのまま${maru.name}に伝え、急いで向かった。`,
      );
      era.drawLine();
      await era.printAndWait(`おいで、おいで。すぐ先が盛大なステージだ。`);
      await era.printAndWait(
        `この悩みは忘れて。この熱い舞いの中で、一緒に踊ろう。`,
      );
      await era.printAndWait(
        `この盛大な祭りに溶けて。このまま一緒に、${maru.sex}が終わらないことを祈ろう。`,
      );
      await era.printAndWait(
        `涙と汗が混ざった喜びを携えて。迷いと痛みの果てに、やっと釈然としよう。`,
      );
      await era.printAndWait(
        `砂浜のきらきらした砂のように、${you.name}たちの喜びと解放は、いつか歴史に残る。\n`,
      );
      await you.say_and_wait(`やっと目的地だ。`);
      await era.printAndWait(
        `演目を見に来る人波は途切れない。立ったり座ったり、飲み物やカメラを掲げてステージの上の熱演を見ている。`,
      );
      await era.printAndWait(
        `人々の吐息が薄い網を織ったようだ。子どもたちは叫びながら人混みを興奮して走り回る。`,
      );
      await you.say_and_wait(`人が多いな。`);
      await era.printAndWait(
        `足元にはかなり気をつけていたが、それでも走り回る子どもに何度かぶつかりそうになった。`,
      );
      await you.say_and_wait(`暑い。だが今はまず${maru.name}を探さないと——`);
      await era.printAndWait(
        `${
          maru.sex
        }に位置を送りたかったが、こんな人混みではスマホの電波さえ途切れ途切れだ。`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `夜が落ち、ステージの明かりが一つずつ点く。場にいる観光客は注意をステージへ集めた——`,
      );
      await era.printAndWait(
        `${maru.name}を見ている${you.name}と、${you.name}の視線に気づいて手を振りながら小走りで来る${maru.name}以外は。`,
      );
      era.printButton(`「${maru.name}に会えてよかった」`, 1);
      await era.input();
      await era.printAndWait(
        `胸の大石がやっと落ちたように、${you.name}は長く息を吐いた。`,
      );
      await maru.say_and_wait(
        `やっと${you.name}を見つけた。${maru.elder_sibling_sex_title}もほっとしたわ。`,
      );
      await you.say_and_wait(`미안해.。早く${maru.name}と合流したかった이(가)——`);
      await maru.say_and_wait(
        `うん～、謝るより、このあと${
          callname
        }と一緒に演目を見るのが、いちばんの補償でしょ。`,
      );
      await you.say_and_wait(
        `……ステージが終わるまで、${maru.name}のそばを離れない。`,
      );
      await you.say_and_wait(
        `だから、${you.name}と一緒にこの素敵な思い出を作らせてくれ。頼む！`,
      );
      await maru.say_and_wait(`あら、新しい告白の仕方？`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}も、ちょ～っと心が動いたわ。`,
      );
      await maru.say_and_wait(`なら、${callname}は私から離れないでね？`);
      await era.printAndWait(
        `招かれて出演する${maru.uma_sex_title}が光る衣装を着て軽やかにステージへ跳ねた。ライトが一気に${
          maru.sex
        }へ集まる。今の${maru.sex}は、この砂浜でいちばん眩しい存在のようだ。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `${
          maru.sex
        }の動きは滑らかで美しい。すぐそばでなお荒れる波を思い出させる。リズムに乗って現れた民族風の伴奏が、深い青の衣装の${maru.uma_sex_title}を、海の底から陸地へ静かに来て舞う精霊のように引き立てた。`,
      );
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`ん？ ${callname}、どうしたの？`);
      await era.printAndWait(
        `少し大きな声の${you.name}に驚いた${maru.teen_sex_title}が、問う目で${you.name}を見た。`,
      );
      await era.printAndWait(`${you.name}の決断は`);
      era.printButton(
        `「${maru.name}、${you.name}の痛みと悲しみを教えてくれ。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `ステージの上の${maru.teen_sex_title}は全力を尽くし、流した汗が一波また一波のうねりになった。`,
      );
      await era.printAndWait(
        `観客は期待の目で、ステージで輝くそのアイドルを見つめている。`,
      );
      await era.printAndWait(
        `そして最初から最後まで、${maru.name}はその不安な沈黙を保っていた。`,
      );
      await you.say_and_wait(`今が肝心なときだろう。`, true);
      await you.say_and_wait(`どうしても、忍耐を保たないと。`, true);
      await era.printAndWait(
        `台上の${maru.teen_sex_title}の、一回の回転、一つの跳躍が、観客の心をしっかり掴む。`,
      );
      await era.printAndWait(`観客は息を殺して、その瞬間を待っている。`);
      await maru.say_and_wait(`やっぱり、${callname}には隠せないわね？`);
      await era.printAndWait(
        `突然、平地に雷が落ちたように、観客から熱い拍手と歓声が爆発した。`,
      );
      await era.printAndWait(
        `笑みの仮面を外し、${maru.name}は悲しみと、やっと解放された釈然とした顔で${you.name}を見た。`,
      );
      await era.printAndWait(
        `その痛みさえもう消え、地面に崩れそうな麻痺感の中で、${maru.teen_sex_title}は汗か涙かわからない塩気を味わった。`,
      );
      await maru.say_and_wait(
        `……この先は、場所を変えて話す？ ${you.actual_name}？`,
      );
      await era.printAndWait(
        `誘う香りを放つ果実に惹かれた無数の観光客が、この盛況に流れ込む。今夜は、まだ高潮に入ったばかりだ。`,
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
        `本当にすみません。今日の縁結びのお守りはもう配り終わりました。`,
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
      await era.printAndWait(`それから——`);
      await maru.say_and_wait(`やっぱり、${callname}には隠せないわね。`);
      await era.printAndWait(
        `空気の変化に気づいたのか、巫女は右手で静かな小道を指して、その場を離れた。`,
      );
      await era.printAndWait(
        `下駄と地面が当たるカタカタという澄んだ音がだんだん小さくなり、やがてここには遠くの太鼓と観客の歓声だけが残った。`,
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
      await you.say_and_wait(`なに？！`);
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
        `夕飯のあと、アパートに戻ったと言ったけど、実際は愛車を近くの駐車場に仮置きして、脚力でトレセンに戻ったの。`,
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
        `でも、${callname}が覚悟を決めたなら、私も相応の敬意を返さないと。`,
      );
      await maru.say_and_wait(`じゃあ、${callname}。今は${you.name}の番よ。`);
      await era.printAndWait(
        `人類が太古から受け継いだ恐怖で${you.name}の頭は全速で回る。${you.name}の決断は。`,
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
          `それに、結局は${you.name}の一方的な言い分でしょ？`,
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
          `一人で五指も見えない闇の中を進むなら、前方を照らす明かりがあればいい。`,
        );
        await you.say_and_wait(
          `俺に任せてくれ。トレーナーとしてはまあまあ하지만,明かりとしては自信がある。`,
        );
        await you.say_and_wait(`一歩ずつ、少しずつ、他人のために死ぬ。`);
        await era.printAndWait(
          `それから${you.name}は、${maru.sex}の気勢がゆっくり消え、だんだん小さくなるのを見た。`,
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
    const title = 'ハロウィン';
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
      await era.printAndWait(`出口はどこ？ どうすればいい？ 죽는 건가?`);
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
        `ばらばらの断片を思い出そうとすると、いつからかこれが大事だと感じ、わけのわからない不安が底から上がってきた。`,
      );
      await you.say_and_wait(`次はあんなB級映画、もう見ない。`, true);
      await era.printAndWait(
        `こんな奇妙なことに妙に真剣な自分が急に可笑しくなり、首を振って服を着ようとした。`,
      );
      await maru.say_and_wait(`トントン。`);
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
      await era.printAndWait(`長距離レースに出るなら、スタミナも大事だ。`);
      await maru.say_and_wait(
        `たまんないわ。スタミナトレーニングも大事だけど、${callname}、何か忘れてない？`,
      );
      await you.say_and_wait(`……？`);
      await maru.say_and_wait(
        `去年、一緒にハロウィンパレードへ行くって約束したでしょ。${callname}、覚えてる？`,
      );
      await era.printAndWait(
        `困惑した顔の ${you.name} を見て、${maru.name}は結局言い返した。`,
      );
      await you.say_and_wait(`確か、そんな話をした気がする。`, true);
      await era.printAndWait(
        `スマホのメモを開き、下に少し滑らせて、去年のハロウィン当夜に記録したその件を見つけた。`,
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
        `そういう感じで、ハロウィンの集まりにちょっと顔を出しましょう♪`,
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
      await maru.say_and_wait(`ふんふんふん♪`);
      await maru.say_and_wait(`예————${callname}。`);
      await era.printAndWait(
        `ドアノブが回り、${you.name} を魅了するその${maru.teen_sex_title}が扉を開けた.`,
      );
      await maru.say_and_wait(
        `${callname}、祝日も緩まないのね。${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
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
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
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
        `————普段のトレーニングに比べれば,前菜にもならない.`,
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
        `聖夜なら、트레이너인 ${you.adult_sex_title}♪……いちばん好きな人と、ゆっくり流れる時間を分け合いたくない？`,
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
        `うん……${you.name}の髪、少し乾いてるわ。${callname}、お疲れさま.`,
      );
      await era.printAndWait(
        `${maru.sex}はできるだけ力を抑えて優しく${
          you.name
        }の髪をとかす.その温かく懐かしい気配に${
          you.name
        }は、子どものころ芝で日向ぼっこした気配を思い出した.`,
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
      await maru.say_and_wait(`ありがとう♪`);
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
      era.printButton(`「もう、すごくいい思い出をもらった」`, 2);
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
        await you.say_and_wait(`本当に미안해.。次はない。`);
        await maru.say_and_wait(
          `はぁ、とにかく、他の子には絶対言わないで。今回の相手が私ならまだいい。いや、私でもだめ。`,
        );
      }
      await you.say_and_wait(`そういえば、${maru.name}。`);
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
        `うん——庭の庭師みたいに、雑草だらけの土に種を埋める。`,
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
        `もちろん。こうしてまだ若い後輩たちをゆっくり進ませて、${
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
        `トレセンの生徒たちが、朝からいつもの生気のない顔ではなく、二人組で贈り物をもらう人の表情を興奮して話している。`,
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
      await era.printAndWait(`それから、誰かにしっかりぶつかった。`);
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
        `まあ、ずっと支えてくれたファンへの贈り物にしよう。`,
      );
      await you.say_and_wait(`この数なら、ファンサービスとしては十分すぎる！`);
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
      await maru.say_and_wait(`そういえば、これもあるわ♪`);
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
      await era.printAndWait(`強く押さえつけてきた。いや、思い出したくない。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(`庭師。`);
      await you.say_and_wait(`いつも強者として問題に向き合う。`);
      await era.printAndWait(
        `教育者として、自分の経験でかわいい小さな${maru.uma_sex_title}をできるだけ助けたい。`,
      );
      await you.say_and_wait(`하지만,庭師の道は、そんな理想の世界이(가) 아니다.`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `失礼します。`);
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
        `……ありがとう。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あ、실례합니다, 長く居すぎました。마루젠 先輩がまだ来ないなら、先に失礼します。`,
      );
      await era.printAndWait(
        `飲み終わった缶をゴミ箱に入れ、${maru.uma_sex_title}は${you.name}に別れを告げた。`,
      );
      await you.say_and_wait(`${you.name}の武運を祈る。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `うん、さようなら。`,
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
      await maru.say_and_wait(`そういえば、${callname}は知ってる？`);
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
      await maru.say_and_wait(`なに？ ${callname}、私をそんなに高く見てるの？`);
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
    const title = (maru) => `${maru.elder_sibling_sex_title}からの贈り物`;
    /**
     * 마루젠 スキーがプレイヤーをドライブに誘う
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`훈련실`);
      era.println();
      await era.printAndWait(`トントントン`);
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
        `うん——${callname}の頼みなら。あ、そういえばこの前、すごく沈んでる子がいたわ。`,
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
      await maru.say_and_wait(`思い出すたびに、この感じが好きなの⭐`);
      await you.say_and_wait(`いい経験だな。`);
      await maru.say_and_wait(`^_^私もそう思う`);
      await maru.say_and_wait(`そういえば、${callname}はチョコもらった？`);
      await era.printAndWait(`${maru.name}は視線を ${you.name} の机へ向けた。`);
      await you.say_and_wait(
        `残念ながら。チームにいたころは${maru.uma_sex_title}からチョコをもらえたけど、独立してからは義理チョコすら見当たらない。`,
      );
      await maru.say_and_wait(`それは残念ね。`);
      await maru.say_and_wait(`……うん`);
      await maru.say_and_wait(`なら、一緒にチョコを選びに行きましょう♪`);
      await era.printAndWait(
        `いい方法を思いついたらしい${maru.name}の耳がぴんと立ち、目を輝かせて ${you.name}을(를) 바라보았다.`,
      );
      await maru.say_and_wait(`ちょっとの間よ、今すぐ出発！`);
      await you.say_and_wait(`やめておこう。`, true);
      await era.printAndWait(
        `そう言いたかったが、店を真剣に考えている${maru.name}を見て、${you.name}은(는) 口を閉じた。`,
      );
      await you.say_and_wait(`これくらいなら、出ても大丈夫だろう。`, true);
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
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} maru 마루젠 スキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname 마루젠 スキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `今日はファン感謝祭。${maru.uma_sex_title}たちがファンの支援に感謝してステージをする日だ.`,
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
        `「${maru.couple_title}はみんな${maru.name}に憧れて,${
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
        `金魚すくい、りんご飴、縁結びのお守り、最後はステージの上の演目。今度は思い切り楽しんでこそ、来た甲斐があるわ！`,
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
        `——そうね。${callname}がそんなことを言うなら、覚悟はできてるでしょうね。`,
      );
      await era.printAndWait(
        `得をして、そのまま身を引こうとした${you.name}が突然重心を失い、${maru.name}を囲んでいた手も緩んだ。`,
      );
      await era.printAndWait(
        `それから左耳に甘い吐息と、全身へ伝わる電流を感じた。`,
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
        `「去年の遺憾を埋めるため、${maru.name}と一緒にこの素敵な思い出を持ちたい！」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}はやっと、それ以上の動きを止めた。`);
      await maru.say_and_wait(`——미안해.お姉さんも、少し失態ね。`);
      await era.printAndWait(
        `口調に懺悔は一筋もない。顔には、レースを十分楽しんだあとだけの満足がある。`,
      );
      await maru.say_and_wait(
        `${callname}とこれから一緒に作る思い出と、その上でもっと強い満足を思うと、お姉さん、少し欲張りかしら？`,
      );
      await maru.say_and_wait(
        `うん——消極的な気持ちはNGよ！ この先の一分一秒に深い思い出を残さないのは、生命への恥ずべき浪費！`,
      );
      await era.printAndWait(
        `祭りの音楽が風の媒体に乗って${you.name}たちの耳へ届いた。`,
      );
      await era.printAndWait(
        `空に咲く鮮やかな赤い花が、祭りの最後の始まりを示す。`,
      );
      await era.printAndWait(
        `それから ${maru.name}は${you.name}の腕を取った。`,
      );
      await era.printAndWait(`それから二人は歩幅を上げた。`);
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
      await era.printAndWait(`スマホの表示は7時。出勤まであと1時間。`);
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`お菓子をくれなきゃ悪戯するわよ！`);
      await you.say_and_wait(`ん——ハロウィンはエイプリルフールじゃない！`);
      await maru.say_and_wait(`${callname}からお菓子が欲しいの～`);
      await you.say_and_wait(`あとで一緒にキャンディ屋を見に行こう。`);
      await era.printAndWait(`いつの間にか、二人の唇がまた重なった。`);
      await maru.say_and_wait(`うん——じゃあこれで、少し我慢しましょう♪`);
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
      await maru.say_and_wait(`ん？`);
      await era.printAndWait(`唇が重なった。`);
      await maru.say_and_wait(`ん——は、ええ응?`);
      await era.printAndWait(`十五秒に及ぶ深いキス。`);
      await you.say_and_wait(
        `ハッピーハロウィン！ お菓子をくれなきゃ悪戯するぞ！`,
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
        `約束のケヤキ並木の近くに着き、${you.name}은(는) スマホを見た.約束より30分早い。`,
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
        `バレンタインのあのキス、ファン感謝祭の親密な接触……`,
      );
      await era.printAndWait(`過去の思い出が、煙る炉火のようにゆっくり上がる`);
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
      await maru.say_and_wait(`ふんふん♪ このゲームは私の勝ち.`);
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
        `${maru.name}は視線を戻し,それから再び${you.name}を見た.`,
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
      era.printButton(`「${you.name}の願いなら、言ってくれ」`, 1);
      await era.input();
      await maru.say_and_wait(`キスしてもいい？`);
      await era.printAndWait(
        `${you.name}は${maru.name}の腰を抱き,髪先を軽く弄った.`,
      );
      await era.printAndWait(`10秒のキスが、一生忘れられない思い出になった.`);
      await era.printAndWait(
        `それから二人は離れ,${maru.name}の涙が頬をゆっくり滑った.`,
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
        `あ、そうだ！ テイオー${maru.couple_title}が言ってたの。百貨店のある店はバレンタインにカップルなら写真を撮ると6割引きだって.`,
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
        `店員:こちらも困っていまして、最後に店主がいい案を思いつきました.`,
      );
      await era.printAndWait(`店員:お二人、ロマンチックなキスをお願いします.`);
      era.printButton(`「き……キス?!」`, 1);
      await era.input();

      await era.printAndWait(
        `店員:キスはロマンチックなことではありませんか？ 伴侶への愛も伝えられますし、お得狙いの人はキスと聞いて逃げていきました.`,
      );
      await era.printAndWait(
        `店員:カップルなら、恥ずかしがることはないでしょう.`,
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
        ` ${you.name}은(는) 、ふわふわのチーズと蜂蜜をかけたパンの甘い香りと、晴れの空の下で ${maru.name} が見せた笑顔を思い出した。`,
      );
      era.printButton(`「${maru.name} の料理예つも上手だな」`, 1);
      await era.input();
      await era.printAndWait(
        `何かを思い出したように、微笑の中に悪賢い顔を見せた ${maru.name} が尻尾を軽く揺らす。`,
      );
      await maru.say_and_wait(`${callname}、この先もずっと私の試食係ね。`);
      await you.say_and_wait(`そういえば、明日は中華料理を食べてみたい。`);
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
