// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/love-3"),

  // [번역 완료] 49
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

  // [번역 완료] 74
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

  // [번역 완료] 89
  89: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('트레이너 룸');

      await teio.say_and_wait(`꿀~`);
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 맞장구를 치며 작은 ${teio.uma_sex_title}을(를) 품에 앉히고(${teio.sex}이(가) 꼼지락거리며 들뜨는 걸 막기 위해), 손에 든 수건으로 익숙하게 ${teio.sex}의 머리카락을 말려준다.`,
      );
      await era.printAndWait(
        '다른 손도 쉬지 않고 마우스로 컴퓨터의 훈련 자료를 살펴본다.',
      );
      era.println();
      await teio.say_and_wait('응……');
      era.println();
      await era.printAndWait(
        `작은 ${teio.uma_sex_title}은(는) 냉장고에서 꺼낸 특제 꿀 음료를 마시면서 ${you.name}의 화면에 뜬 자료도 함께 보고 있다.`,
      );
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait('더는 참기 힘들어졌다.');
      await era.printAndWait(
        `막 씻고 나온 ${teio.teen_sex_title}의 향기, 허벅지에 닿는 피부, 가끔 자신의 아랫배를 스치는 ${teio.uma_sex_title}의 털결……`,
      );
      await era.printAndWait(
        `${you.name}은(는) 혈류가 본능적인 방향으로 쏠리는 것을 느낀다.`,
      );
      era.println();
      await teio.say_and_wait('트레이너~ 이 페이지, 계속 그대로야.');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${you.name}의 허벅지 위에 앉은 ${teio.sex}은(는) 자연스럽게 뒤로 기대고, ${you.name}의 몸은 굳어진다.`,
      );
      await era.printAndWait(
        `이어 ${teio.sex}의 머리가 ${you.name}의 가슴 쪽으로 기대고 작은 우마 귀가 빙글 돌아 ${you.name}의 가슴팍에 닿는다.`,
      );
      era.println();
      await teio.say_and_wait(`심장, 조금 빠른데.`);
      await era.printAndWait(`${you.name}——`);
      era.printButton('고개를 숙여 담당의 귀를 입에 문다 (관계를 진전시킨다)', 1);
      era.printButton('억지로 일어선다 (아직 진전시키지 않는다)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `무언가에 홀린 듯 ${you.name}은(는) 고개를 숙여 테이오의 우마 귀 끝을 가볍게 문다. 입안의 감각을 통해 ${teio.sex}이(가) 부자연스럽게 한 번 떨었다가 곧 조용해지고, 말없이 받아들이며 ${you.name}의 다음 행동을 기다리고 있음을 알 수 있다.`,
        );
        era.println();
        await you.say_and_wait(
          '테이오…… 앞으로도 더 먼 곳까지 함께 가줄래?',
        );
        era.println();
        await era.printAndWait(
          `${teio.sex}의 얼굴은 이미 새빨갛고, 무언가 작게 중얼거린 뒤 분명하게 고개를 끄덕였다.`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            '은(는) ',
            {
              color: buff_colors[2],
              content: '[淫身]',
            },
            ' 상태가 되었다!',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name}은(는) 가슴에 떠오른 너무도 당연한 충동을 억누르고 ${teio.uma_sex_title}을(를) 받쳐 ${teio.sex}을(를) 옆에 내려놓은 뒤 일어나 헛기침하며 아무 일도 없었다는 척한다. ${teio.name}은(는) 조금 불만스러워 보인다.`,
        );
      }
      return ret;
    };
    f.title = '계속, 함께';
    return f;
  })(),

  // [번역 완료] 89-hurt
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('트레이너 룸');
      await era.printAndWait('沈黙。');
      await era.printAndWait(
        `${you.name}은(는) 눈앞에서 눈을 감고 얼굴에 물방울을 흘리며 몸을 살짝 떨고 있는 ${teio.uma_sex_title}${teio.teen_sex_title}을(를) 바라본다.`,
      );
      await era.printAndWait(
        `그리고 ${you.name}은(는) 늘 그렇듯 데운 부드러운 목욕 수건을 집어 ${teio.sex}의 몸을 닦고 빗과 드라이어로 털결을 정돈한다.`,
      );
      await era.printAndWait(
        `그 일이 있은 뒤로 ${teio.sex}은(는) 자주 ${you.name}의 방에 있는 욕실을 빌리러 온다. 목욕 후에는 ${you.name}이(가) 몸을 말려주고 이어서 관리도 해준다. 이제는 이미 습관이다.`,
      );
      await era.printAndWait(
        `다 닦고 나면 ${you.name}은(는) 도구를 옆의 작은 탁자에 놓고 담당의 다리 마사지를 시작해 ${teio.sex}의 재활을 돕는다.`,
      );
      await era.printAndWait(
        `굳은살이 박힌 ${you.name}의 조금 거친 손이 ${teio.uma_sex_title}${teio.teen_sex_title}에게 가장 중요한 발과 종아리를 위아래로 쓰다듬고 가끔 가벼운 힘으로 누른다.`,
      );
      await era.printAndWait(
        `매끄럽고 탄력 있는 피부의 감촉이 ${you.name}의 손끝으로 돌아온다. 겉보기에는 튼튼하고 아름다운 두 다리지만 안쪽에는 위태로움이 숨어 있다. 그 다리들이 ${teio.sex}을(를) 지탱하고 달리게 하며 레이스장을 질주하게 했다. 그리고 지금은……`,
      );
      era.println();
      await teio.say_and_wait('있지, 트레이너.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 고개를 든다. ${teio.sex}이(가) 무슨 말을 하려는지는 어렴풋이 알고 있지만 그래도 대답한다.`,
      );
      await you.say_and_wait('왜 그래, 테이오?');
      era.println();
      await teio.say_and_wait('나…… 너는…… 앞으로 어떻게 하면 좋을 것 같아?');
      era.println();
      await era.printAndWait(
        `${teio.sex}은(는) 턱을 살짝 당기고 두 다리를 본다. 한때 ${teio.sex}과(와) 함께 싸웠지만 지금은 생기도 없고 돌아올지도 알 수 없는 동료를. 동시에 ${you.name}도 바라본다.`,
      );
      era.printButton(`「이게 내 대답이야」 (관계를 진전시킨다)`, 1);
      era.printButton(`「……」 (아직 진전시키지 않는다)`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 작은 상자를 꺼내고 ',
          teio.uma_sex_title,
          teio.teen_sex_title,
          '이(가) 반응하기도 전에 왼발을 살며시 받쳐 포장을 열고 안의 반지를 ',
          teio.sex,
          '의 약지에 끼운다.',
        ]);
        await era.printAndWait(
          `${you.name}이(가) 직접 고른 발가락 반지는 크기가 딱 맞고 잘 고정되며 착용자의 발가락 움직임도 방해하지 않는다.`,
        );
        await era.printAndWait(
          `양손 손가락 끝으로 ${teio.uma_sex_title}의 발에 있는 혈행을 돕는 혈자리를 습관처럼 가볍게 집어 누른다.`,
        );
        await era.printAndWait(
          `그러고 나서 ${you.name}은(는) 고개를 들어 아래에서 위로 시선을 옮기며 담당의 새빨간 얼굴과 눈물이 맺힌 듯한 두 눈과 마주한다.`,
        );
        era.printButton('「괜찮아?」', 1);
        await era.input();
        await teio.say_and_wait('……좋아!');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 울면서 웃으며 두 팔을 벌린다. ${you.name}은(는) 일어나 ${teio.sex}을(를) 힘껏 끌어안고 더는 놓지 않는다.`,
        );
        // TALENTNAME:53 = 神の足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            '은(는) ',
            {
              color: buff_colors[2],
              content: '[신의 발]',
            },
            '을(를) 얻었다!',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name}은(는) 무슨 말을 하고 싶은 걸까. 무슨 말을 해야 할까. 무엇을 말할 수 있을까. 결국 나온 것은 한숨 하나뿐이었다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 말없이 남은 절차를 마치고 조용한 ${teio.teen_sex_title}을(를) 안아 들어 내려놓은 뒤 방 밖까지 배웅한다.`,
        );
      }
      return ret;
    };
    f.title = '계약은 맺어졌다';
    return f;
  })(),

  // [번역 완료] 99
  99: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} tname 得た特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name}은(는) 맑은 공기를 들이마시며 햇빛을 받으며 걷고 있다.`,
      );
      await era.printAndWait(
        `갑자기 뒤에서 사락거리는 소리가 나고 부드럽고 탄력 있는 감촉이 허리 뒤에 닿는다. 새하얀 소매를 낀 두 팔이 ${you.name}의 몸을 힘껏 끌어안았다.`,
      );
      era.println();
      await you.say_and_wait(
        `대낮에 버젓이 ${teio.uma_sex_title}에게 안겨 있는 연상의 코치를 주변에서 어떻게 볼 것 같아.`,
      );
      era.println();
      await teio.say_and_wait(
        `엄청 행복하잖아. 내가 그런 대접을 받고도 손해 본 표정을 짓는 사람을 보면 한 방에 바다로 차버릴 텐데.`,
      );
      era.println();
      await you.say_and_wait('목숨만은 살려줘.');
      era.println();
      await teio.say_and_wait('괜찮아. 지금의 나는 더 이상 남이 아니니까.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 곁눈질로 ${teio.sex}의 꼬리가 기쁜 듯 흔들리는 것을 본다.`,
      );
      era.println();
      await teio.say_and_wait('게다가…… 지금은 다른 사람도 없어.');
      era.println();
      await era.printAndWait('확실히 그렇다.');
      await era.printAndWait(
        `어째서인지 ${you.name}과(와) ${teio.sex}이(가) 연인이 된 뒤 학원 행사에서 묘한 상품에 당첨됐다.`,
      );
      await era.printAndWait(
        '상품은 2인용 크루즈 무료 1일 체험과 혼례 의상 대여가 포함된 것이었다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 당시 직원들이 계획대로 됐다는 듯 보낸 눈빛과 의미심장한 미소를 떠올리며 쓴웃음을 짓는다.`,
      );
      era.println();
      await you.say_and_wait('……그렇게 딱 붙어 있으면 문제가 생기기 쉬워.');
      era.println();
      await teio.say_and_wait('지금은 한낮이고, 게다가 배 위잖아?');
      era.println();
      await you.say_and_wait('그래서 곤란한 거야. 이걸 어떻게 가라앉히라는 거야.');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「……트레이너 ${you.adult_sex_title}, 담당 학생에게 반응하는 변태인 거 아냐?」`,
          color: teio.color,
        },
        '（笑）',
      ]);
      era.println();
      await you.say_and_wait('아니야…… 아니, 뭐라고 해야…… 아니, 아닐 거야!');
      era.println();
      await teio.say_and_wait('후후…… 그럼 설명해 봐?');
      era.println();
      await era.printAndWait(
        `담당 ${teio.uma_sex_title}의 몸이 더 가까워지자 ${you.name}은(는) 목이 마르고 심장 박동이 이상해져 황급히 말한다.`,
      );
      era.println();
      await you.say_and_wait(
        '내 자제력에 환상을 품고 있지 않다는 뜻일 뿐이야.',
      );
      era.println();
      await teio.say_and_wait(
        '하지만 나는…… 이제 그런 것도 알게 됐고……',
      );
      era.println();
      await era.printAndWait(
        `얼굴을 붉힌 ${teio.uma_sex_title}${teio.teen_sex_title}은(는) 우물우물 중얼거리며 ${you.name}에게서 떨어진다. 기분 좋았던 체온이 멀어진다.`,
      );
      await era.printAndWait(
        `그런데 ${teio.sex}은(는) 곧바로 돌아온다. 담당은 ${you.name} 앞으로 돌아와 겉옷 안쪽으로 파고들려 한다.`,
      );
      era.println();
      await you.say_and_wait('점점 더 모양새가 안 좋아지는데.');
      era.println();
      await teio.say_and_wait('그럴지도.');
      era.println();
      await you.say_and_wait('욕망이 더 자극되면 어쩌려고.');
      era.println();
      await teio.say_and_wait('그때 생각하지 뭐.');
      era.println();
      await you.say_and_wait('……무책임하네.');
      era.println();
      await teio.say_and_wait('후후.');
      era.println();
      await you.say_and_wait('추워?');
      era.println();
      await teio.say_and_wait('응……');
      era.println();
      await era.printAndWait(
        `배는 느리게 나아가고 바닷바람도 기분 좋다. 그래도 귓가를 스치는 찬바람은 날카로워 기온이 내려간 듯하다. ${you.name}은(는) 무의식적으로 겉옷 앞을 열어 ${teio.name}을(를) 자신의 품 안으로 감싼다. 하얀 웨딩드레스를 입은——`,
      );
      await era.printAndWait(
        `——화동처럼 보이는——작은 ${teio.uma_sex_title}이(가) ${you.name}의 검은 옷깃 사이로 얼굴을 내밀고 온몸으로 ${you.name}에게 기댄다.`,
      );
      await era.printAndWait('아아…… 이러면 따뜻하네.');
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await teio.say_and_wait('괜찮아.');
      era.println();
      await you.say_and_wait('……？');
      era.println();
      await era.printAndWait(
        `품 안의 ${teio.teen_sex_title}이(가) 갑자기 그런 한마디를 던진다.`,
      );
      await era.printAndWait(
        `응시. 눈앞에는 ${you.name}을(를) 격려하는 미소와 의심이라는 것을 모르는 맑은 눈동자가 있다.`,
      );
      era.println();
      await teio.say_and_wait('눈이 조금 피하고 있는데.');
      era.println();
      await you.say_and_wait('……');
      await era.printAndWait(
        `인정할 수밖에 없다. ${you.name}은(는) 지금 조금 멍해져 있었다——이제부터 시작되는 것은 두 사람의 새로운 생활이다.`,
      );
      await era.printAndWait(
        `자신의 인생 절반을 ${teio.sex}에게 건네고, 마찬가지로 ${teio.sex}도 ${you.name}의 절반을 갖는다. 자신이 이 무게를 짊어질 수 있을까.`,
      );
      era.println();
      await teio.say_and_wait(`분명 할 수 있어, ${you.actual_name}.`);
      era.println();
      await era.printAndWait(
        `——${teio.child_sex_title}에게 이렇게 위로받으니 오히려 민망하고 당황스럽다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 미소 지으며 손을 ${teio.sex}의 머리에 올려 가볍게 쓰다듬는다. ${teio.sex}은(는) 눈을 가늘게 뜨고 기분 좋은 듯 콧노래를 부른다.`,
      );
      await era.printAndWait('품 안의 보물은 이토록 아름답다.');
      await era.printAndWait(
        `이 ${teio.uma_sex_title}은(는) 티 없는 신념을 품고 그 신념을 위해 몸까지 바쳤다. ${teio.sex}의 영혼은 빛나며 태양처럼 눈부시다.`,
      );
      await era.printAndWait(
        `이 ${teio.teen_sex_title}……이야말로 ${you.name}이(가) 한때 포기하려 했던 꿈의 화신이다.`,
      );
      era.printButton(`「${teio.sex}을(를) 끌어안고 함께 나아간다」 (관계를 진전시킨다)`, 1);
      era.printButton('「손을 놓고 그 자리에 멈춘다」 (아직 진전시키지 않는다)', 2);
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          '은(는) ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          ' 상태가 되었다!',
        ]);
      }
      return ret;
    };
    f.title = '내일 또 보자';
    return f;
  })(),
};
