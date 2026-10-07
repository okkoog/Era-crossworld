// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file アグネスデジタル - 日常
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/daily-19.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] office_gift
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        "이런 선물을 고르다니, 역시 ",
        callname,
        '！',
      ]);
    } else {
      const items = [
        '堕伯先生のサイン本',
        'カレンちゃん写真集',
        'ファル子握手券',
        'マヤちゃんぬいぐるみ',
        'メジロ家同款ティーカップ',
        'タキオン×カフェ印象マグ',
        digital.uma_sex_title + 'の走り靴モデル',
        digital.uma_sex_title + '限定コラボグッズ',
        digital.uma_sex_title + 'のイヤーカバー＆ストッキングのサイン本',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        'わっ、',
        gift,
        '！ ここから',
        digital.uma_sex_title,
        '萌え萌えパワー、しっかり汲むよ！',
      ]);
    }
  },

  // [번역 완료] big_fish
  big_fish: (() => {
    const title = '대어를 낚았지만, 물고기의 상태가 영 좋지 않다';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_20 アグネスデジタルのセイウンスカイへの呼び方
     * @param {PrintedSpan} callname_20 セイウンスカイのプレイヤーへの呼び方
     * @param {PrintedSpan} s_call_s セイウンスカイのスペシャルウィークへの呼び方
     * @param {PrintedSpan} s_call_d セイウンスカイのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `강변 낚시는 많은 ${digital.uma_sex_title}들이 여가 시간에 선택하는 활동이었다.`,
      );
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '이(가) 담당하는 ',
        digital.uma_sex_title,
        '인 ',
        digital.get_colored_name(),
        '은 조금 달랐다. 직접 낚시를 하기보다는, ',
        digital.sex,
        '은(는) 다른 사람의 낚시를 구경하는 걸 더 좋아했다.',
      ]);
      await era.printAndWait(
        `아니... 정확히는 낚시하는 ${digital.uma_sex_title}를 구경하는 것을 더 좋아했다.`,
      );
      await era.printAndWait(
        `그래서 ${digital.sex}가 작은 의자에 앉아 낚싯대를 잡고 입질을 기다리는 모습은 꽤 보기 드문 광경이었다.`,
      );
      await digital.say_and_wait(
        `과연... 낚시라는 건 이런 거였군요. 본래 휴식 활동일 텐데, 어째서 이렇게 기운이 쭉 빠지는 걸까요...`,
      );
      await digital.say_and_wait(
        `낚시를 하는 다른 ${digital.uma_sex_title}짱들은 대체 무슨 생각을 하는 걸까요...`,
      );
      await you.say_and_wait(
        `${digital.couple_title}들은 대부분 그냥 낚시 그 자체를 즐기는 거겠지. 주변을 한번 볼래?`,
      );
      await digital.say_and_wait('에?');
      await era.printAndWait([
        digital.get_colored_name(),
        '은(는) 주위를 둘러봤다. 강 건너편에도 마침 ${digital.uma_sex_title}이(가) 낚시를 하고 있었다.',
      ]);
      await era.printAndWait(`낚시라기보다는 자고 있는 것에 가까워 보였다.`);
      await digital.say_and_wait(
        `과연, 느껴져요. ${digital.sex}는 지금 극도의 릴랙스 상태에 빠져 있군요.`,
      );
      await digital.say_and_wait(
        `우와아, 무한한 정적 속에 누워 낚시하는 ${digital.uma_sex_title}... 물고기가 미끼를 물어도 ${
          digital.sex
        }를 조금도 깨우지 못하겠네요...`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          '이런이런, 설마 ',
          callname_20,
          '이 오늘 ',
          s_call_d,
          '이랑 같이 낚시를 하러 나올 줄이야. 요호호, 나랑 같이 하는 게 아니었다니... 훌쩍.',
        ]);
        await era.printAndWait([
          '등 뒤에서 익숙한 목소리가 들려왔다. ',
          sky.get_colored_name(),
          ' 였다.',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '는 작은 손으로 눈을 비비며 가련한 눈빛을 보냈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 인정할 수밖에 없었다.',
          sky.get_colored_name(),
          '의 이 연기는 정말 대단했다. 만약 ',
          you.get_colored_name(),
          '이(가) 진작부터 ',
          digital.sex,
          '의 교묘함에 익숙해져 있지 않았더라면, 정말 속아 넘어갔을지도 모른다.',
        ]);
        await digital.say_and_wait('와와왓! 고의가 아니었어요, 지금 바로 비킬게요!');
        await era.printAndWait([
          digital.get_colored_name(),
          '은 몹시 당황하며 손을 흔들며 일어서려 했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아무 말 없이 ',
          sky.get_colored_name(),
          '의 옆으로 이동해, 살며시 ',
          sky.get_colored_name(),
          '의 등을 꼬집었다. 꽤나 부드러웠다.',
        ]);
        await sky.say_and_wait('에구구! 그냥 농담이에요, 농담~');
      } else {
        await sky.say_and_wait([
          '이런이런, ',
          s_call_d,
          '이잖아. 웬일이야? 강가에서 다른 ',
          digital.uma_sex_title,
          '가 낚시하는 걸 구경하는 게 아니었어?',
        ]);
        await sky.say_and_wait([
          '그리고... ',
          s_call_d,
          '의 ',
          you.adult_sex_title,
          ', 꽤 유명한 분이네~',
        ]);
        await era.printAndWait([
          '등 뒤에서 나른한 목소리가 들려왔다. 이 목소리는 ',
          you.get_colored_name(),
          '에게도 조금 익숙했다.',
        ]);
        await digital.say_and_wait([call_20, '?!']);
        await era.printAndWait([
          '깜짝 놀란 나머지 ',
          digital.get_colored_name(),
          '은(는) 들고 있던 낚싯대를 놓쳐버렸고, 튀어 오른 물보라가 몸에 튀었다.',
        ]);
        await sky.say_and_wait(
          '오호? 낚싯대까지 떨어뜨리다니, 이 세이짱, 화낼 거라고!',
        );
        await digital.say_and_wait([
          '아뇨아뇨, 제 잘못이에요, 제 잘못! 감히 제가 ',
          digital.uma_sex_title,
          '짱이랑 같이 낚시를 하러 오는 게 아니었는데...',
        ]);
      }
      await sky.say_and_wait([
        '그럼, ',
        s_call_d,
        ', 내가 직접 가르쳐줄까? 에헤헤!',
      ]);
      await digital.say_and_wait('히이익!');
      await era.printAndWait([
        '순식간에 ',
        sky.get_colored_name(),
        '가 도망가려던 ',
        digital.get_colored_name(),
        '을 붙잡았다. ',
        digital.get_colored_name(),
        '은 마치 석화 마법에 걸린 것처럼 몸이 굳어버렸다.',
      ]);
      await sky.say_and_wait('쿠헤헤!');
      await era.printAndWait([
        '입꼬리를 살짝 올린 채, ',
        sky.get_colored_name(),
        '는 가냘픈 손으로 그보다 더 자그마한 ',
        digital.get_colored_name(),
        '의 왼손을 덥석 잡았다.',
      ]);
      await digital.say_and_wait('아바아바바...');
      await sky.say_and_wait('자자, 의자에 좀 앉아보라니까~');
      await era.printAndWait([
        '단번에 ',
        digital.get_colored_name(),
        '을 의자 근처로 끌고 가더니, 손을 ',
        digital.sex,
        '의 어깨 위에 올렸다...',
      ]);
      await era.printAndWait([
        '그러자 ',
        digital.get_colored_name(),
        '은 연화 마법이라도 걸린 듯 담요처럼 흐물흐물해지며 의자에 주저앉았다.',
      ]);
      await sky.say_and_wait('자, 이 낚싯대를 잡고, 찌를 저쪽으로 옮겨서...');
      await digital.say_and_wait('아바아바바...');
      await era.printAndWait([
        '보아하니 ',
        digital.get_colored_name(),
        '의 영혼은 진작에 재가 되어 바람에 흩날려버린 모양이었다.',
      ]);
      era.drawLine({ content: '잠시 후' });
      await digital.say_and_wait('...!');
      await digital.say_and_wait('우에에... 안 되겠어요, 정말로 무리에요...');
      await era.printAndWait([
        '흙바닥 위에 기진맥진해 누워 있는 ',
        digital.get_colored_name(),
        '을(를) 보니 오늘 ',
        digital.sex,
        '은(는) 정말 한계인 듯했다.',
      ]);
      await sky.say_and_wait('아하하, 정말 재밌는 사람이네.');
      await era.printAndWait([
        digital.get_colored_name(),
        '과는 대조적으로 ',
        sky.get_colored_name(),
        '는 오히려 기운이 넘쳐 보였다. 이게 무슨 신종 흡성대법이라도 되는 걸까.',
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, '!']);
        await era.printAndWait([
          sky.get_colored_name(),
          '가 ',
          you.get_colored_name(),
          ' 쪽을 향해 몸을 돌렸다. 방금 전까지 크게 웃던 표정을 싹 거두고 ',
          you.get_colored_name(),
          '을(를) 가만히 바라보았다.',
        ]);
        await sky.say_and_wait([
          '기분이 어때? 당신이나 ',
          digital.sex,
          '나, 마치 나를 따돌리려는 느낌인걸~',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ', ',
          digital.sex,
          '는 그저 속내를 떠보려는 걸까?',
        ]);
        await sky.say_and_wait([
          '이런이런, ',
          callname_20,
          ', 설마 질투라도 하는 거야? 질투해야 할 쪽은 나라고?',
        ]);
        era.printButton('타협한다 (세이운 스카이 호감도 +40)', 1);
        era.printButton('본론을 이야기한다 (아그네스 디지털 호감도 +40)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('알겠어, 알겠어. 정 그렇다면 다음에는 너랑 낚시하러 올게.');
          await era.printAndWait('일단은 적당히 둘러대서 넘기기로 했다.');
          await sky.say_and_wait(
            '에헤헤, 그럼 내 장비 좀 업그레이드해 주라~ 트레이너 월급 꽤 쏠쏠하잖아?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '가 한 손을 머리 위에 얹고 핑크빛 혀를 낼름 내밀었다. ',
            you.get_colored_name(),
            '은(는) 문득 어떤 이모티콘을 떠올렸다.',
          ]);
          await era.printAndWait(
            '기지개를 켜며 은근슬쩍 스마트폰에 있는 우마코인 잔액을 떠올렸다. 장비 교체 정도는 문제없겠...지?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '는 사양하지 않고 바로 의자를 가져와 ',
            you.get_colored_name(),
            '의 옆에 앉더니, ',
            you.get_colored_name(),
            '의 어깨에 머리를 기댔다.',
          ]);
          await era.printAndWait(
            '곁눈질로 보니, 청색 머리칼이 땀에 살짝 젖어 있었고, 매끄러운 목덜미에는 땀방울이 맺혀 있었다.',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '가 스마트폰을 조작하자 화면에 상품들이 지나갔다. ',
            sky.get_colored_name(),
            '의 손가락 끝에 걸리는 가격대를 슬쩍 본 ',
            you.get_colored_name(),
            '은(는) 갑자기 좋지 않은 예감을 느꼈다.',
          ]);
          await you.say_and_wait('잠깐, 일단 멈춰봐. 잠깐만.');
          await sky.say_and_wait('에? 본인이 직접 말했으면서~');
          await era.printAndWait(
            '가격을 보니 단순한 고급형을 넘어 거의 플래그쉽급 가격대였다.',
          );
          await era.printAndWait(
            '트레이너의 월급이 적은 편은 아니지만, 이런 걸 아무렇지 않게 살 정도는 아니었다.',
          );
          await sky.say_and_wait('알았어 알았어, 농담은 여기까지! 잡담도 여기까지!');
          await era.printAndWait([
            '스마트폰을 집어넣은 ',
            sky.get_colored_name(),
            '는 이제야 본론으로 들어가는 듯했다.',
          ]);
          await sky.say_and_wait([
            s_call_d,
            '이 달리는 이유를 찾아줘! 오오오~!',
          ]);
          await era.printAndWait([
            '나름 진지한 이야기였지만, ',
            sky.get_colored_name(),
            '의 입을 통해 나오니 정말 맥없는 외침이었다...',
          ]);
          await era.printAndWait([
            digital.get_colored_name(),
            '을(를) 힐끗 바라봤다.',
            digital.sex,
            '는 아직 정신이 돌아오지 않은 듯했다.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 농담 섞인 말투로 현재 ',
            you.get_colored_name(),
            '이(가) 시급하게 해야 할 일을 전하고 있었다... 낚싯대도 아마 그 일환이겠지.',
          ]);
          await era.printAndWait([
            '다음에 ',
            digital.sex,
            '에게 선물을 사주기로 하자. 낚싯대는 그냥 없는 셈 치는 게 좋겠다...',
          ]);
        } else {
          await you.say_and_wait('본론을 말해줘. 널 잘 알고 있으니까.');
          await era.printAndWait([
            '역시 ',
            sky.get_colored_name(),
            '는 늘 ',
            digital.sex,
            ' 나름의 생각이 있었다.',
          ]);
          await era.printAndWait([
            '몸을 돌린 ',
            sky.get_colored_name(),
            '는 석양을 정면으로 마주하며 등을 보였다.',
          ]);
          await sky.say_and_wait(['아직 ', s_call_s, ' 기억하고 있어?']);
          await you.say_and_wait('무슨 소리야, 기억하고 말고 할 게 어딨어?');
          await era.printAndWait(
            '그때였던가. 자신이 무엇을 해야 할지, 어떤 목표가 있는지, 어떻게 해야 할지 잊어버렸던 일.',
          );
          await sky.say_and_wait([
            s_call_s,
            '는 찾았어. ',
            digital.sex,
            '만의 안식처를 말이야.',
          ]);
          await era.printAndWait([
            '그 일은 꽤나 화제가 되어서 교육 소재로도 쓰일 정도였지만, 다행히 ',
            spe.get_colored_name(),
            ' 본인은 신경 쓰지 않았다.',
          ]);
          await era.printAndWait(
            '동경 그 자체는 영원히 나아갈 목표가 될 수 없었다.',
          );
          await era.printAndWait([
            digital.get_colored_name(),
            '... ',
            digital.sex,
            '는 곧 깨닫게 될 거야. ',
            digital.sex,
            '가 다른 누구보다 강해질 것이고, ',
            digital.sex,
            '가 이전까지 동경해왔던 대상의 꿈을 부수게 될 거라는 사실을.',
          ]);
          await you.say_and_wait([
            '내가 ',
            digital.sex,
            '을(를) 데리고, 오직 ',
            digital.sex,
            '만의 전당을 함께 찾아낼 거야.',
          ]);
          await sky.say_and_wait('역시 나의 트레이너 씨네!');
          await you.say_and_wait('응.');
        }
      } else {
        await sky.say_and_wait([s_call_d, '의 트레이너라니——']);
        await era.printAndWait([
          sky.get_colored_name(),
          '가 고개를 돌려 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        await era.printAndWait([
          '교묘한 책사. 그것이 세상 사람들... 적어도 ',
          digital.sex,
          '의 동급생들이 ',
          digital.sex,
          '에게 내리는 평가였다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          sky.get_colored_name(),
          '에 대해 잘 알지는 못했지만, ',
          digital.sex,
          '의 명성은 들어본 적이 있었다... 승리를 위해 수단과 방법을 가리지 않는다고 했던가?',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '은(는), ',
          digital.sex,
          '와는 아마 레이스가 겹칠 일이 없을 텐데, ',
          digital.sex,
          '는 여기서 뭘 하려는 걸까?',
        ]);
        era.printButton('우선 대화를 나눠본다 (호감도 +40)', 1);
        era.printButton('최대한 빨리 디지털을 데리고 떠난다 (애정도 +5)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('세이운 스카이... 너에 대해선 알고 있어.');
          await sky.say_and_wait('냐하하, 내 명성이 꽤 대단한 모양이네~');
          await era.printAndWait([
            '손을 머리 뒤로 깍지 낀 ',
            sky.get_colored_name(),
            '는 자신의 유명세에 꽤 자부심을 느끼는 듯했다.',
          ]);
          await you.say_and_wait(
            '앉아서 얘기 좀 하자. 디지털에게 볼일이 있는 거지?',
          );
          await sky.say_and_wait(
            '이런이런, 나는 딱히 동성애자 같은 건 아니라고? 오히려 이성애자 타입에 가깝달까~',
          );
          await era.printAndWait('말을 돌리는 수법. 늘 하던 방식이었다.');
          await you.say_and_wait('......');
          await sky.say_and_wait(
            '정말로 내 진심을 듣고 싶어? 세이짱은 의외로 생각이 아주 순수할지도 모른다고?',
          );
          await era.printAndWait([
            '옆에 있는 ',
            digital.get_colored_name(),
            '을 쳐다보니, ',
            digital.sex,
            '는 여전히 강가에 누워 행복한 상태로 존엄사해 있었다.',
          ]);
          await you.say_and_wait([
            '데지, ',
            digital.sex,
            '는 아직 너무 순진해. 경기장에서 벌어지는 치열한 기싸움 같은 건 아직 모르지.',
          ]);
          await sky.say_and_wait([
            '맞아. 마치 ',
            s_call_s,
            '가 한동안 그랬던 것처럼, ',
            s_call_d,
            '... ',
            digital.sex,
            '에게는 전장에 나설 이유가 부족해.',
          ]);
          await era.printAndWait([
            '전장... 경기장에 나설 이유. ',
            digital.get_colored_name(),
            '은 지금까지 줄곧, ',
            digital.uma_sex_title,
            '라고 줄곧 말해왔다.',
            digital.sex,
            '은(는)…… 적어도 지금은, ',
            digital.uma_sex_title,
            '이(가) 달리는 모습을 가장 가까이서 보고 싶을 뿐이다.',
          ]);
          await you.say_and_wait([
            digital.sex,
            '은(는) 그 이유를 찾아낼 거야. ',
            digital.sex,
            '와(과) 함께 찾아낼 거야.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 이 말을 뱉기 전까지 ',
            sky.get_colored_name(),
            '는 깊은 눈빛으로 ',
            you.get_colored_name(),
            '을(를) 응시하고 있었다. 그리고 이 말을 듣자마자 ',
            digital.sex,
            '는 웃음을 터뜨렸다.',
          ]);
          await sky.say_and_wait('아하하, 재미있는 대답을 들었네!');
          await era.printAndWait([
            you.get_colored_name(),
            '의 대답이 ',
            digital.sex,
            '를 만족시켰을지도 모른다. 아니면 그냥 더 말할 필요가 없다고 느꼈을 수도 있었다.',
          ]);
          await sky.say_and_wait(
            '그럼 내가 방해한 셈인가? 세이짱은 마저 낚시나 해야겠어.',
          );
          await era.printAndWait([
            '내리쬐던 태양은 어느덧 하얗게 타오르다 붉게 변해갔고, 강변 진흙탕가에는 ',
            you.get_colored_name(),
            '과 ',
            digital.get_colored_name(),
            ' 만이 남겨졌다.',
          ]);
          await era.printAndWait('디지털을 데리고 돌아가자...');
          await you.say_and_wait('어떻게 데려가야 할까...', true);
        } else {
          await you.say_and_wait('세이운 스카이, 너랑 더 이야기하고 싶긴 하지만...');
          await you.say_and_wait([
            '디지털이 당분간은 깨어날 것 같지 않네. 시간도 늦었으니 그만 ',
            digital.sex,
            '를 데리고 돌아가야겠어.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '을(를) 바라보더니 하품을 크게 한 번 했다.',
          ]);
          await sky.say_and_wait(
            '당신 말이 맞아. 낚시를 못한 건 좀 아쉽지만 말이야.',
          );
          await era.printAndWait([
            digital.sex,
            '에게 작별 인사를 하고 ',
            digital.get_colored_name(),
            '을 업으려던 찰나, ',
            you.get_colored_name(),
            '의 귓가에 숨결이 느껴졌다...',
          ]);
          await sky.say_and_wait([
            digital.sex,
            '이 아이에게서 레이스에 나설 이유를 찾아줘...',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 눈을 감으며 고맙다는 인사를 대신했다.',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            '은 겉보기엔 굉장히 자그마했지만, ',
            you.get_colored_name(),
            '이(가) ',
            digital.sex,
            '를 등에 업고 나서야 깨달았다. ',
            digital.sex,
            '의 무게감은 그 체구보다 훨씬 더 가볍게 느껴졌다.',
          ]);
          await era.printAndWait([
            '부드러운 몸의 감촉과 숨결…… 살아 있구나 하는 실감이 났다. ',
            you.get_colored_name(),
            '의 목덜미에 닿아, ',
            you.get_colored_name(),
            '은(는) 조금 간지러움을 느꼈다.',
          ]);
          await era.printAndWait([
            '나중에 정신을 차린 ',
            digital.get_colored_name(),
            '은 ',
            you.get_colored_name(),
            '에게 몇 번이고 사과를 했다.',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] good_morning
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        'ハイ！ ',
        digital.name,
        '、登場！ 宇宙一尊い',
        digital.uma_sex_title,
        'の力を探しに行くよ！',
      ]);
    } else {
      digital.say([
        'うふふ、',
        callname,
        '！ 今日も推し活パワー、貯めに行こう！',
      ]);
    }
  },

  // [번역 대상] o_c_pray
  o_c_pray: (() => {
    const title = '徳を積む……福を集める？';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_98 アグネスデジタルのコパノリッキーへの呼び方
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        '神社の前で二礼二拍手のあと、',
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は手を合わせて祈った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はもちろん担当',
        digital.uma_sex_title,
        'の健康を願った。では ',
        digital.get_colored_name(),
        ' は何を願うのだろう？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はちらりと ',
        digital.get_colored_name(),
        ' を見た。',
        digital.sex,
        'はまだ目を閉じて、小さな手をもみ、耳を立て、口のなかでつぶやいている。普通の人が持つような誠実さか？',
      ]);
      await era.printAndWait([
        'しばらくして',
        digital.sex,
        'は振り返り、真面目な顔で言った：',
      ]);
      await digital.say_and_wait([
        '神さまがすべての',
        digital.uma_sex_title,
        'を守ってくれるように、私は最大限の誠実さで祈るべきなんだ',
      ]);
      await digital.say_and_wait(
        '虚実のはなしだけど、これで自分をまた理性的に見られる。ついでに徳も積めるしね！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は意外だったが、',
        digital.sex,
        'の言葉にも一理あると思った。だから ',
        you.get_colored_name(),
        ' も雑念を捨てて、もう一度祈ろうとした。',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          'ゆっくり、',
          you.get_colored_name(),
          ' は思考のなかを三筋の清水が流れるのを感じた。',
          you.get_colored_name(),
          ' は驚いて目を開けると、そよ風が葉を、社を渡り、',
          you.get_colored_name(),
          ' の心を静めていた。',
        ]);
        await digital.say_and_wait([
          call_98,
          ' が勧めた、すごく霊験あらたかな神社だから、さっきはずっとあまり話せなかったんだ～',
        ]);
        await era.printAndWait('これは本当にあることなのか？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は隣の ',
          digital.get_colored_name(),
          ' も同じ境地に浸っていることに気づいた。',
        ]);
        await digital.say_and_wait('これは三女神の恵みだよ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' は突っ込みたかった。神社で願掛けして、授けるのが三女神なのはなぜだ、と。だが少なくとも心のうえでは効いているなら、まあいい。',
        ]);
      } else {
        await era.printAndWait([
          '意識を両目のあいだに集めて、どう誠実に祈るかを考えたが、このやり方自体が問題だ。どうやら ',
          you.get_colored_name(),
          ' はまだ雑念を払うのが下手らしい。',
        ]);
        await digital.say_and_wait(
          '大丈夫、私もかなり練習してこの域に達したんだ。同志、もっと練習しないとね！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' はこの技能の実用地が気になった。レースのとき、注意を集めやすい、ということか？',
        ]);
        await era.printAndWait([
          'ただ ',
          you.get_colored_name(),
          ' も、ときには静心の練習が要ると気づいた。次に試すしかない。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] o_r_fishing
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うわ、',
          call_20,
          '……あっちには行かないほうがいいよね……',
        ]),
      () =>
        digital.say_and_wait([
          'おおお、釣れた、釣れた！ 野営なら焼いて食べられるね、',
          callname,
          '！',
        ]),
      () =>
        digital.say_and_wait(
          `気にしないで！ 勝負は兵家の常、大侠もう一度どうぞ……ボウズもガチャで出ない確率と同じだよ！`,
        ),
    ];
    await get_random_entry(buffer);
  },

  // [번역 대상] o_r_walking
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          '、',
          call_46,
          ' だ！ 絶対あっち行かなきゃ！',
        ]),
      () =>
        digital.say_and_wait([
          call_9,
          ' と ',
          call_8,
          ' を発見！ ',
          digital.couple_title,
          '、あっちで何してる～の！',
        ]),
      () =>
        digital.say_and_wait([
          'わっ！ ',
          call_58,
          ' が転んだ、手を貸さなきゃ……立った！ うおっ、勤勉……',
        ]),
      async () => {
        await era.printAndWait([
          '川辺の散歩は ',
          digital.get_colored_name(),
          ' にとって巡礼みたいなもので、',
        ]);
        await era.printAndWait(
          `どの角にも、${digital.uma_sex_title}が見つかるからだ。`,
        );
        await era.printAndWait(
          `歌の練習をしている小さな${digital.uma_sex_title}アイドル、ダートに慣れようとしている小さな努力家。`,
        );
        await era.printAndWait(
          `幸い、今回${digital.sex}は尊さで魂を抜かれなかった。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_arcade
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うおおお、',
          call_46,
          ' の新曲出てる！ 手袋持ってきてよかった！',
        ]),
      () => digital.say_and_wait(`取った取った！ あの勝負服限定ぬいぐるみ！`),
      () =>
        digital.say_and_wait(
          `ポイント貯めて景品交換だ！ あの限定フィギュアにできるよ！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_dating
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'あははは、',
          callname,
          '、一緒に歩くと、かえってどこがいいか選べなくなる……',
        ]),
      () =>
        digital.say_and_wait(
          `え？ 場所は私が選ぶの？ どうせ${digital.uma_sex_title}関連の場所になっちゃう気がする……`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '！ あっちで聖地巡礼、もう一回行こう！',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_drawing
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'にんじん当たった！ ',
          call_32,
          ' に持って帰ろう。食事、普通にしてほしい。体壊すよ！ だめだめ！',
        ]),
      () => digital.say_and_wait(`くくく、ふふふ、当たった、あれだ！`),
      () => digital.say_and_wait(`ティッシュか……やっぱり単発じゃ出ないよね。`),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_ktv
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`今日の勝利の女神は、私だけに口づけを……`),
      () =>
        digital.say_and_wait(
          `勝者ステージは勝ち${digital.uma_sex_title}ちゃんへのご褒美だけじゃない、私たちファンへの褒美でもあるんだよ！`,
        ),
      () =>
        digital.say_and_wait([
          'んはっ、えはっ！ おーーはっーー！ ',
          callname,
          '！ ペンライト、遅い！',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_movie
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `尊すぎ！ 監督わかってる！ ${digital.uma_sex_title}ちゃんの尊いところ、全部出してる！`,
        ),
      () =>
        digital.say_and_wait(
          `うおおおお、感動した、この悔しさ、この奮闘、現実の${digital.uma_sex_title}ちゃんみたい！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_restaurant
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `にんじんみたいな${digital.uma_sex_title}ちゃんが好む食べ物が好きなのは、${digital.uma_sex_title}ちゃんが好きだから？ それとも自分が${digital.uma_sex_title}だから……`,
        ),
      () =>
        digital.say_and_wait(
          `パフェ♪パフェ♪メロンパフェ♪はちみつ♪はちみつ♪特濃はちみつ♪それにいちご大福♪推したちの真似をすると運が来る気がする！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] o_s_shopping
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うぬぬ！ この ',
          call_25,
          ' 同款コーヒーカップ、あっちのメジロ紅茶カップ、どう選べっていうの?! もちろん全部だよ！',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          ' が宣伝してる乾燥機？ これは……ちょっと……だめ、買わなきゃ！',
        ]),
      () =>
        digital.say_and_wait(
          `え？ なんでグッズを三セット買うかって？ 当然、一本は常用、一本は保存、一本は布教だよ！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `担当${digital.uma_sex_title}への愛を込めて作る……トレーナーにもそんな信条があるなんて。私も見習わなきゃ！`,
        ),
      () =>
        digital.say_and_wait(
          `普段は両親と外で野営することが多いからね。こう見えて、料理はちょっと得意なんだよ`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}ちゃんたちの青い気持ち、直接言えなくて弁当に込めて渡すの！ 尊すぎる！`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_game
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `この『${digital.uma_sex_title}オールスター大乱闘』、やってみる？ キャラはランダムでいいよ、だって私DDだし！`,
      );
    } else {
      await digital.say_and_wait([
        'えへ！ ',
        callname,
        '、さすがにこのゲームにはちょっと自信あるよ。',
      ]);
    }
  },

  // [번역 대상] office_rest
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `ふー……可愛い${digital.uma_sex_title}ちゃんの癒し系ASMR聞いてると、全身溶けそう……`,
        ),
      () =>
        digital.say_and_wait(
          `こうして、あなたと目的もなく${digital.uma_sex_title}の話をするの、いいね。`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `膝枕したい？ いやいや、こんな貧相な脚じゃ落ち着かないでしょ……でも、ちょっと恥ずかしい……`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_study
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `え？ なんで${digital.uma_sex_title}ちゃん関連の知識に詳しいかって？ ファンなら当然でしょ！`,
        ),
      () =>
        digital.say_and_wait(
          '実はトレセン学園に入るために、当時いろんな方面で頑張ったから……勉強はあまり困らない。ちょっと自慢になっちゃうけど。',
        ),
      () =>
        digital.say_and_wait(
          `思うんだよね、勉強が苦手で補習に引っ張られる${digital.uma_sex_title}ちゃんもいるじゃん？ どうしたら${
            digital.couple_title
          }の助けになれるんだろう……`,
        ),
    );
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_dating
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `……なんか${digital.uma_sex_title}ちゃんにたくさん見られてる。どこかに隠れたい……`,
        ),
      () =>
        digital.say_and_wait(
          `この大きなリボン？ 小さい頃からずっとつけてる感じ……え？ 目立つって？ ひゃあ、たしかに問題だね。`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '、私、面倒くさいって思われてない……？ ずっと付き合って応援活動して……え？ ないの？',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_a_tree_hollow
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `ずっと${digital.uma_sex_title}からレースの冷酷さ、訓練の苦しさ、感情のもつれを打ち明けられてきたあなた！ なんで私は木の穴に嫉妬してるの！`,
        ),
      () =>
        digital.say_and_wait(
          `ねえ、なんでレースには勝者と敗者がいるんだろう……${digital.uma_sex_title}ちゃんたち、全員勝者だったらいいのに……`,
        ),
      () =>
        digital.say_and_wait(
          `私の覚悟、まだ足りない。ライバルとしての覚悟も、${digital.uma_sex_title}としての覚悟も……`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] s_r_lunch
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'え？ ',
          callname,
          '、隠れた強者だったの？ この再現度、私だって感嘆しちゃう！',
        ]),
      () =>
        digital.say_and_wait(
          `ん、可愛い${digital.uma_sex_title}ちゃん、どうして口をつけられる……`,
        ),
      () =>
        digital.say_and_wait([
          '見て！ ',
          callname,
          '、このデザイン、私の心血だよ！ 特許、出願しよっか、うへ！',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] select
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say(['そう！ 何が起きても全力で推すんだよ！ ', callname, '！']),
      () => digital.say('うふふ、尊すぎて、もうだめ……'),
      () => digital.say('芝！ ダート！ どっちも私の戦場！'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '！ 一緒に',
          digital.uma_sex_title,
          'ちゃんを推せるなんて、本当によかった！',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            'あははは……え？ 脚が震えてるって？ 大丈夫大丈夫！ デジたん、至って正常だよ！',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'ぐへへへ、まだ聞くの、',
            callname,
            ' がいちばんわかってるでしょ……ずるっ……',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '一心同体……',
            call_13,
            ' が語ってた素敵な未来、だんだんわかってきた気がする……',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('メジロ城、行く？ 行くよね！'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say(['え、あ、', callname, ' か……今日は何か用？']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('ううう……ひっ！ いやいや、大丈夫大丈夫！'),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say('あのね、デジだって、こうなるとちょっと恥ずかしいよ。'),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('ひゃあ、さすがにこれはヤバくない?!'));
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['ん？ ', callname, ' か、え、何するの？']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'えーと、',
            callname,
            '、最近ちょっと、同志らしくなくない？',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '見慣れてるのに微妙なものが自分に出てくる……素材にはなる、よね？',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('カッコいいって言えばカッコいい……本当に進化するの?!'),
        );
    }
    get_random_entry(buffer)();
  },

  // [번역 대상] talk
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(`はぁ……燃え尽きた、力ない……推せない……`);
      } else {
        await digital.say_and_wait(
          `この状態、推しの${digital.uma_sex_title}ちゃんに申し訳ないよ`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                'うおお、萌えパワー不足、今すぐ補給しないと……',
              ),
            () =>
              digital.say_and_wait(
                `この状態、絶対に推したちに見られたくない……`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                'あー……なんか力入らない。萌えパワー足りないのかな',
              ),
            () =>
              digital.say_and_wait(
                `いやー、さっき${digital.uma_sex_title}のこと考えてて……`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`すー……はー……もっと、萌え萌えパワー！`),
            () =>
              digital.say_and_wait(
                `まだ足りない、全然足りない。もっと${digital.uma_sex_title}萌え萌えパワーを吸わないと！`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `調子ちょうどいい！ 一緒に${digital.uma_sex_title}萌え萌えパワーを汲んで徳を積もう！`,
              ),
            () =>
              digital.say_and_wait(
                `愛だよ、${digital.uma_sex_title}ちゃんへの愛があるから、こんな力が出せるんだ！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `わあああ！ こっちもあっちも${digital.uma_sex_title}ちゃん！ 今なら何でもできそう！`,
              ),
            () => digital.say_and_wait(`はあっ！ 萌えパワー、天を突いた！`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
};
