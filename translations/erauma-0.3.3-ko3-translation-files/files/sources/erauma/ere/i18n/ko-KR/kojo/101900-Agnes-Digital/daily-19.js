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
  // [번역 완료] office_gift
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        "이런 선물을 고르다니, 역시 ",
        callname,
        '!',
      ]);
    } else {
      const items = [
        '타백 선생님의 사인본',
        '카렌짱 사진집',
        '팔코 악수권',
        '마야짱 인형',
        '메지로 가문 스타일 티컵',
        '타키온×카페 이미지 머그컵',
        digital.uma_sex_title + ' 러닝화 모델',
        digital.uma_sex_title + ' 한정 콜라보 굿즈',
        digital.uma_sex_title + ' 이어커버 & 스타킹 사인본',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        '와, ',
        gift,
        '! 여기서 ',
        digital.uma_sex_title,
        '모에모에 파워를 듬뿍 흡수할게요!',
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

  // [번역 완료] good_morning
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        '하잇! ',
        digital.name,
        ', 등장! 우주에서 가장 고귀한 ',
        digital.uma_sex_title,
        '의 힘을 찾으러 가요!',
      ]);
    } else {
      digital.say([
        '우후후, ',
        callname,
        '! 오늘도 덕질 파워를 쌓으러 가요!',
      ]);
    }
  },

  // [번역 완료] o_c_pray
  o_c_pray: (() => {
    const title = '덕을 쌓자 덕을…… 이건 복을 모으는 건가요?';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_98 アグネスデジタルのコパノリッキーへの呼び方
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        '신사 앞에서 박수를 두 번 친 후, ',
        you.get_colored_name(),
        '과(와) ',
        digital.get_colored_name(),
        '은 두 손을 모아 기도했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 당연히 담당 ',
        digital.uma_sex_title,
        '의 건강을 빌었지만, ',
        digital.get_colored_name(),
        '은 과연 무엇을 빌었을까?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 살짝 곁눈질로 ',
        digital.get_colored_name(),
        '을 보니, ',
        digital.sex,
        '는 아직 눈을 감은 채 손을 비비며 귀를 쫑긋거리면서 무언가 중얼거리고 있었다. 이건 보통 경건함이 아닌 것 같다.',
      ]);
      await era.printAndWait([
        '잠시 후 ',
        digital.sex,
        '가 몸을 돌려 진지하게 말했다.',
      ]);
      await digital.say_and_wait([
        '모든 ',
        digital.uma_sex_title,
        '들을 신께서 보살펴 주시도록, 저 나름대로 최대한의 경건함을 담아 기도했어요.',
      ]);
      await digital.say_and_wait(
        '비록 눈에 보이지 않는 것이라 해도, 이를 통해 다시금 자신을 이성적으로 바라볼 수 있고, 겸사겸사 덕도 쌓을 수 있으니까요!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뜻밖이면서도 ',
        digital.sex,
        '의 말이 일리가 있다고 생각했다. 그래서 ',
        you.get_colored_name(),
        ' 역시 잡념을 버리고 다시 한번 기도하기로 했다.',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '조금씩, ',
          you.get_colored_name(),
          '의 정신 속에 세 줄기 맑은 샘물이 흐르는 것을 느꼈다. ',
          you.get_colored_name(),
          '이(가) 깜짝 놀라 눈을 뜨니, 맑은 바람이 나뭇잎을 스치고 신사를 지나며 ',
          you.get_colored_name(),
          '의 마음을 차분하게 가라앉혀 주고 있었다.',
        ]);
        await digital.say_and_wait([
          call_98,
          '가 추천해 준 아주 영험한 신사라, 방금까진 감히 말을 걸 엄두도 못 냈네요~',
        ]);
        await era.printAndWait('이게 정말 일어날 수 있는 일인가?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 옆에 있는 ',
          digital.get_colored_name(),
          ' 역시 동시에 이 분위기에 젖어있는 것을 발견했다.',
        ]);
        await digital.say_and_wait('이것이 세 여신의 은총이군요!');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 신사에서 기도하는데 왜 세 여신의 축복이 내려오냐고 태클을 걸고 싶었지만, 실제로 심리적인 효과라도 있다면 상관없다고 생각했다.',
        ]);
      } else {
        await era.printAndWait([
          '양눈 사이에 정신을 집중하고 어떻게 하면 정성껏 기도할 수 있을지 고민했지만, 사실 그런 방법 자체가 문제였던 것 같다. ',
          you.get_colored_name(),
          '은(는) 아직 잡념을 없애는 데 서툰 모양이다.',
        ]);
        await digital.say_and_wait(
          '괜찮아요, 저도 꽤 오랫동안 연습해서 겨우 이런 경지에 오른 거니까요. 동지여, 수행이 더 필요하겠어요!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이 기술의 실질적인 용도가 궁금해졌다. 설마 레이스 때 집중력을 응집하는 데 쓰는 걸까?',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          ' 역시 때로는 마음을 다스릴 필요가 있다고 느꼈다. 다음 기회에 다시 시도해 보는 수밖에 없겠다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] o_r_fishing
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '우와앗, 저건…… ',
          call_20,
          '…… 역시 저쪽으로는 가지 않는 게 좋으려나……',
        ]),
      () =>
        digital.say_and_wait([
          '오오오, 낚였다, 낚였어! 캠핑 중이었다면 바로 구워 먹을 수 있었을 텐데요, ',
          callname,
          '!',
        ]),
      () =>
        digital.say_and_wait(
          `개의치 마세요! 승패는 병가지상사라 했으니, 다시 도전해 보시는 게…… 꽝인 날도 가챠에서 안 나오는 확률 같은 거니까요!`,
        ),
    ];
    await get_random_entry(buffer);
  },

  // [번역 완료] o_r_walking
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          ', ',
          call_46,
          '다! 반드시 저기로 가야만 해요!',
        ]),
      () =>
        digital.say_and_wait([
          call_9,
          ' 씨와 ',
          call_8,
          ' 씨를 발견! ',
          digital.couple_title,
          ', 저쪽에서 뭐 하는 걸까~요!',
        ]),
      () =>
        digital.say_and_wait([
          '와아! ',
          call_58,
          '가 넘어졌어, 도와드리러 가야…… 어라, 벌써 일어나셨다! 우오오, 정말 근면하시기도 해라……',
        ]),
      async () => {
        await era.printAndWait([
          '강변 산책은 ',
          digital.get_colored_name(),
          '에게 일종의 성지순례 같은 행위였고,',
        ]);
        await era.printAndWait(
          `어느 곳에서든 달리고 있는 ${digital.uma_sex_title}을(를) 발견할 수 있기 때문이다.`,
        );
        await era.printAndWait(
          `노래 연습 중인 꼬마 ${digital.uma_sex_title} 아이돌부터, 더트 적응 훈련 중인 노력가까지.`,
        );
        await era.printAndWait(
          `다행히 이번에는 ${digital.sex}이(가) 존엄함에 혼을 빼앗기지는 않았다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '우오오오, 설마 ',
          call_46,
          '의 신곡이 나오다니! 장갑을 챙겨와서 다행이에요!',
        ]),
      () => digital.say_and_wait(`뽑았다 뽑았어! 바로 그 승부복 한정판 인형!`),
      () =>
        digital.say_and_wait(
          `포인트를 다 모아서 경품으로 바꿨어요! 그 한정판 피규어로 교환할 수 있다고요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_dating
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '아하하하, ',
          callname,
          ', 막상 같이 돌아다니려니 어디가 좋을지 못 고르겠어요……',
        ]),
      () =>
        digital.say_and_wait(
          `에? 제가 장소를 고르라고요? 왠지 저는 자꾸 ${digital.uma_sex_title} 관련 장소만 고르게 될 것 같은데……`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '! 저쪽으로 다시 한번 성지 순례 가요!',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '당근을 뽑았어요! 이건 가져가서 ',
          call_32,
          '에게 줘야겠네요. 식습관을 좀 제대로 고쳤으면 좋겠는데, 이러다 몸 다 상한다고요! 안 돼 안 돼!',
        ]),
      () => digital.say_and_wait(`쿠후후후. 뽑았어요. 바로 그거예요!`),
      () => digital.say_and_wait(`종이 티슈라니…… 역시 단뽑으로 대박을 노리는 건 무리인가요.`),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`오늘의 승리의 여신은 오직 저에게만 입을 맞추는군요……`),
      () =>
        digital.say_and_wait(
          `위닝 라이브는 승리한 ${digital.uma_sex_title}짱을 위한 보상일 뿐만 아니라, 저희 같은 팬들에게 주는 선물이기도 하죠!`,
        ),
      () =>
        digital.say_and_wait([
          '음 하이 에 하이! 오—— 하이——! ',
          callname,
          '! 응원봉 휘두르는 게 늦어요!',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `너무 고귀해! 감독님이 뭘 좀 아시네요! ${digital.uma_sex_title}짱의 매력 포인트를 아주 완벽하게 보여줬어요!`,
        ),
      () =>
        digital.say_and_wait(
          `우오오오오, 너무 감동적이에요. 이런 분함, 이런 투지, 마치 현실 속의 ${digital.uma_sex_title}짱과 같네요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `당근처럼 ${digital.uma_sex_title}짱들이 좋아하는 음식을 저도 좋아하는 건, 제가 ${digital.uma_sex_title}짱을 좋아해서일까요? 아니면 제가 ${digital.uma_sex_title}이기 때문일까요……`,
        ),
      () =>
        digital.say_and_wait(
          `파르페♪ 파르페♪ 메론 파르페♪ 하치미♪ 하치미♪ 진한 하치미♪ 그리고 딸기 찹쌀떡♪ 최애들을 흉내 내면 행운이 따를 것 같아요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '으누누! 이 ',
          call_25,
          ' 스타일 커피잔이랑 저 메지로 스타일 홍차 잔 사이에서 어떻게 선택하라는 거예요?! 당연히 전부 다 사야죠!',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          '가 광고하는 건조기? 이건…… 사야…… 아니, 사야만 해!',
        ]),
      () =>
        digital.say_and_wait(
          `에? 왜 굿즈를 세 세트씩 사냐고요? 당연히 하나는 실사용, 하나는 소장용, 하나는 포교용이죠!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_cook
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `담당 ${digital.uma_sex_title}을(를) 향한 사랑을 담아 만드는 건가요…… 트레이너에게도 그런 신조가 있다니. 저도 배워야겠어요!`,
        ),
      () =>
        digital.say_and_wait(
          `평소에는 부모님과 캠핑을 자주 다녀서요. 이래 봬도 요리는 좀 자신 있어요.`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}짱들의 풋풋한 마음을 직접 전하지 못하고 도시락에 담아 건네는 거군요! 너무 고귀해요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_game
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `이 『${digital.uma_sex_title} 올스타 대난투』, 해보실래요? 캐릭터는 랜덤으로 할게요. 전부 좋아하니까요!`,
      );
    } else {
      await digital.say_and_wait([
        '에헤헤! ',
        callname,
        ', 아무리 그래도 이 게임만큼은 꽤 자신 있다고요.',
      ]);
    }
  },

  // [번역 완료] office_rest
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `후우…… 귀여운 ${digital.uma_sex_title}짱의 치유계 ASMR을 듣고 있으니 온몸이 녹아내리는 기분이에요……`,
        ),
      () =>
        digital.say_and_wait(
          `이렇게 당신과 목적 없이 ${digital.uma_sex_title} 이야기를 나누는 것도 좋네요.`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `무릎베개요? 아뇨 아뇨, 이렇게 가느다란 다리로는 편하지 않을 텐데…… 그래도 조금 부끄럽네요……`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_study
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `에? 왜 ${digital.uma_sex_title}짱 관련 지식에 그렇게 정통하냐고요? 팬이라면 당연하잖아요!`,
        ),
      () =>
        digital.say_and_wait(
          '사실 트레센 학원에 들어오기 위해 그때 여러 방면으로 노력했거든요…… 그래서 공부는 별로 곤란하지 않아요. 제 입으로 말하긴 좀 그렇지만요.',
        ),
      () =>
        digital.say_and_wait(
          `가끔 공부가 서툴러서 보충 수업에 끌려가는 ${digital.uma_sex_title}짱들도 있잖아요? 어떻게 하면 ${
            digital.couple_title
          }에게 도움이 될 수 있을까요……`,
        ),
    );
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_dating
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `……왠지 많은 ${digital.uma_sex_title}짱들이 저희를 보고 있는 것 같아요. 어디 숨을 곳 없나……`,
        ),
      () =>
        digital.say_and_wait(
          `이 커다란 리본요? 어릴 때부터 계속 하고 다녔던 것 같은데…… 에? 너무 눈에 띈다고요? 아하하, 확실히 문제긴 하네요.`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          ', 제가 너무 번거로운 애라고 생각하진 않으시죠…… 계속 절 따라 응원 활동 하느라 고생하시고…… 에? 아니라고요?',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `언제나 ${digital.uma_sex_title}들에게 레이스의 냉혹함, 훈련의 고됨, 감정의 갈등을 전해 듣는 당신! 어째서 제가 대나무 숲 같은 당신에게 질투를 느끼는 걸까요!`,
        ),
      () =>
        digital.say_and_wait(
          `음, 저기, 어째서 레이스에는 승자와 패자가 나뉘는 걸까요…… ${digital.uma_sex_title}짱들 모두가 승자라면 좋을 텐데……`,
        ),
      () =>
        digital.say_and_wait(
          `제 각오, 아직 부족하네요. 라이벌로서도, ${digital.uma_sex_title}로서의 각오도……`,
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_r_lunch
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '에? ',
          callname,
          ', 설마 숨겨진 고수였나요? 이 재현도…… 저조차 감탄하게 되네요!',
        ]),
      () =>
        digital.say_and_wait(
          `음, 귀여운 ${digital.uma_sex_title}짱을 제가 어떻게 감히 먹을 수 있겠어요……`,
        ),
      () =>
        digital.say_and_wait([
          '보세요! ',
          callname,
          ', 이 디자인은 제 심혈을 기울인 역작이에요! 특허라도 신청해볼까요, 우헤!',
        ]),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] select
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say(['그래요! 무슨 일이 있어도 전력으로 덕질하는 거예요! ', callname, '!']),
      () => digital.say('우후후, 너무 고귀해서 이제 무리……'),
      () => digital.say('잔디! 더트! 둘 다 제 전장이에요!'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '! 함께 ',
          digital.uma_sex_title,
          '짱을 덕질할 수 있다니, 정말 다행이에요!',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '아하하하…… 에? 다리가 떨린다고요? 괜찮아요 괜찮아! 디지털은 지극히 정상이라고요!',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '구헤헤헤, 아직도 물어보세요, ',
            callname,
            '님이 제일 잘 아시잖아요…… 쥬릅……',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '일심동체……',
            call_13,
            ' 씨가 말했던 멋진 미래를, 저도 조금씩 이해하게 된 것 같아요……',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('메지로 시티, 가실 건가요? 가실 거죠!'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say(['에, 저기, ', callname, '(이)군요…… 오늘은 무슨 일인가요.']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('우우우…… 히익! 아뇨 아뇨, 아무것도 아니에요!'),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say('저기 말이죠, 아무리 저라도 이런 건 조금 부끄럽다고요.'),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('우우, 역시 이건 너무 심한 거 아닌가요?!'));
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['응? ', callname, '(이)군요. 에, 뭐, 뭘 하려는 건가요?']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '으윽, ',
            callname,
            ', 요즘 좀 동지답지 않은 모습인걸요?',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '낯익으면서도 묘한 게 몸에 새겨지다니…… 소재로 써도 되는 거……겠죠?',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('이 문양 멋지다고 해야 할지…… 설마 이거 진짜로 진화하는 건가요?!'),
        );
    }
    get_random_entry(buffer)();
  },

  // [번역 완료] talk
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(`하아…… 다 타버렸어, 덕질할 기운이…… 없어……`);
      } else {
        await digital.say_and_wait(
          `이런 상태로는 덕질 대상인 ${digital.uma_sex_title}짱들을 뵐 낯이 없어요.`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                '우오오, 모에 에너지가 부족해, 당장 보충해야 해요……',
              ),
            () =>
              digital.say_and_wait(
                `이런 모습은 절대 최애들에게 보일 수 없어요……`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                '아…… 왠지 힘이 안 들어가네요, 모에 에너지가 부족한가.',
              ),
            () =>
              digital.say_and_wait(
                `에구구, 방금 ${digital.uma_sex_title}에 대한 생각을 하느라……`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`쓰읍…… 후우…… 조금만 더, 모에모에한 힘을!`),
            () =>
              digital.say_and_wait(
                `아직 부족해요, 모자란 느낌이야. 더 많은 ${digital.uma_sex_title} 모에 에너지를 흡수해야겠어요!`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `컨디션 딱 좋아요! 같이 ${digital.uma_sex_title} 모에모에 파워를 모으면서 덕도 쌓으러 가요!`,
              ),
            () =>
              digital.say_and_wait(
                `사랑, 바로 ${digital.uma_sex_title}짱들을 향한 사랑이 저에게 이런 힘을 주는 거예요!`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `와아아아! 이쪽도, 저쪽도 온통 ${digital.uma_sex_title}짱들뿐! 지금이라면 뭐든 할 수 있을 것 같아요!`,
              ),
            () => digital.say_and_wait(`히얏! 모에 에너지가 이미 하늘을 뚫어버렸어요!`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
};
