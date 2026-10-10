// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/200500-Treve/love-205"),

  // [번역 완료] 49-1
  '49-1': (() => {
    const title = 'Un amour à taire (숨겨 두는 사랑)';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await treve.print_and_wait([
        '어느 날 밤, ',
        treve.get_colored_name(),
        '은(는) 기숙사에서 ',
        you.get_colored_name(),
        '와 프랑스에서 함께 들었던 노래를 떠올렸다.',
      ]);
      era.setColor(treve.color);
      era.setAlign('center');
      await era.printAndWait(
        '지나간 날들은 우리를 앞으로 이끌고, 한결 냉철한 눈으로 세상을 바라보게 하네.',
      );
      await era.printAndWait(
        '의심은 위험하고 때로는 치명적이지. 감정이란 그토록 연약한 것.',
      );
      await era.printAndWait('희망으로 가득하든, 운명에 몸을 맡기든.');
      await era.printAndWait(
        '모든 것은 하늘의 뜻대로. 그렇다면 흘러가는 대로 몸을 맡기자.',
      );
      await era.printAndWait('이별과 재회는 우리가 함께 간직한 기억.');
      await era.printAndWait('사랑은 우리가 생각하는 것보다 훨씬 굳건해.');
      await era.printAndWait('내 곁에 있을 때, 당신은 무엇을 하고 있나요?');
      await era.printAndWait('시간은 신비로운 빛깔을 띠고.');
      await era.printAndWait('부드러운 밤바람이 천천히 스쳐 지나가네.');
      await era.printAndWait('사랑은 우리가 생각하는 것보다 훨씬 굳건해.');
      await era.printAndWait('아니면 새장 속에서 즐겁게 살아갈 것인가.');
      await era.printAndWait(
        '우리가 없다면 그들의 선택에 무슨 의미가 있을까?',
      );
      await era.printAndWait('사랑은 우리보다 훨씬 강해……');
      await era.printAndWait(
        '사람들은 그것으로 충분하다고 말하지. 더 깊이 사랑하기 위해 그렇게 말해.',
      );
      await era.printAndWait(
        '하지만 이것은 우리의 사랑이어야 해. 우리보다 더 강한 바로 그 사랑.',
      );
      await era.printAndWait(
        '함께 있을 수 있는 허락만 있다면 그것으로 충분하다고 나는 믿어.',
      );
      await era.printAndWait(
        '차분한 목소리로 말해야겠지. 이 모든 것은 우리 탓이라고.',
      );
      await era.printAndWait('사랑은 우리보다 훨씬 강해……');
      era.setAlign('left');
      era.setColor();
      era.println();
      era.printButton(
        `「저는 이렇게나 단순한 프랑스의 ${treve.child_sex_title}였군요……」(관계를 진전시킨다)`,
        1,
      );
      era.printButton(
        '「쓸데없는 생각은 하지 말자. 자지 않으면 스승님께 혼날 거야.」(당분간 진전시키지 않는다)',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 74
  // [번역 완료] 49-2
  '49-2': (() => {
    const title = 'La fée(평범한 인간을 사랑한 요정)';
    /**
     * @param {CharaTalk} treve 트레브
     * @param {CharaTalk} you 플레이어
     * @param {string} callname 트레브가 플레이어를 부르는 호칭
     * @param {string} cup 트레브의 컵
     */
    const f = async (treve, you, callname, cup) => {
      const ret = [];
      await era.printAndWait([
        '맑은 바람이 불어와 ',
        treve.get_colored_name(),
        `의 금발을 흩날리게 했고, ${treve.sex}의 피부는 눈처럼 밝게 빛났다.`,
      ]);
      await era.printAndWait('짙푸른 눈동자는 아름답고 매력적이었으며, 생기가 넘쳐흘렀다.');
      await era.printAndWait('촉촉하게 빛나는 입술은 투명에 가까운 아름다움을 띠고 있었다.');
      await era.printAndWait(
        '매혹적인 색깔의 금발 숏컷은 두 개의 낮은 트윈테일로 묶여 정교한 윤기를 발했다.',
      );
      await era.printAndWait(
        '흰색 스타킹을 신은 소녀의 허벅지는 가냘프면서도 윤기가 흘렀고, 프랑스풍 학생 구두를 신은 모습은 무척이나 활기차 보였다.',
      );
      await era.printAndWait(
        '흰색 스타킹을 신은 소녀의 허벅지는 가냘프면서도 윤기가 흘렀고, 프랑스풍 학생 구두를 신은 모습은 무척이나 활기차 보였다.',
      );
      await era.printAndWait(
        '하지만 정교하게 빚어낸 듯한 이목구비는 결코 평범한 사람이 쉽게 다가갈 수 없는 분위기를 풍겼다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 향해 미소 지었고, ',
        you.get_colored_name(),
        '의 무례함에도 화를 내지 않는 듯했다.',
      ]);
      await era.printAndWait(
        `${treve.sex}는 원피스를 입고 있었다. 어깨끈이 목선에서 교차하여 목에 있는 하얀 레이스 초커와 이어져 있었다.`,
      );
      await era.printAndWait('상반신은 전체적으로 하얀색의 옷이 그녀의 양가슴을 감싸고 있었다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 허리는 매우 가늘었고, 파란색 가죽 벨트를 매고 있었다.',
      ]);
      await era.printAndWait('그리고 허리 아래로는 파란색 치마를 입고 있었다.');
      await era.printAndWait('치마 겉감은 보석 같은 파란색이었고, 이것이 위층이었다.');
      await era.printAndWait(
        '아래층에는 흰색의 속치마가 있었는데, 이 역시 레이스와 프릴로 장식되어 있었다.',
      );
      await era.printAndWait('치마는 길지 않아 허벅지 중간까지 올 정도였다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 다리는 매우 가늘었고, 다리에는 새하얀 니삭스—반투명한 것—를 신고 있었다.',
      ]);
      await era.printAndWait('양말과 치마 사이로 드러난 맨살 또한 각별히 매혹적이었다.');
      await era.printAndWait('오른쪽 다리에는 하얀색 가터링이 하나 더 있었다.');
      await era.printAndWait(
        '발에는 파란색 구두를 신고 있었으며, 발목에 여러 개의 하얀색 끈을 묶어 리본을 만들었다.',
      );
      era.printButton('「정말 예쁘네.」', 1);
      await era.input();
      await treve.say_and_wait('칭찬 감사합니다.');
      era.printButton('「하지만 프랑스엔 금발 벽안이 참 많아서……」', 1);
      await era.input();
      await treve.say_and_wait('제가 안 예쁜가요? 저를 보세요, 어서 저를 보시라고요!');
      await era.printAndWait([
        treve.get_colored_name(),
        '가 앞으로 다가와 상반신을 숙이고 고개를 치켜들었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 코끝이 불과 손가락 한마디도 안 되는 거리로 가까워졌다.',
      ]);
      await era.printAndWait([
        '고개를 숙이면, 이 시야에서는 마침 ',
        treve.get_colored_name(),
        '의 양가슴이 보였다.',
      ]);
      if (cup < 'D') {
        await era.printAndWait(
          `${treve.sex}의 가슴은 크지 않아, 대충 B와 C컵 사이의 아담한 가슴이었다.`,
        );
      }
      await era.printAndWait(
        `하지만 지금 ${treve.sex}가 앞으로 몸을 숙이자, 그 느낌이 확연히 달랐다.`,
      );
      await era.printAndWait(
        '원피스에 감싸인 남반구와 목의 초커를 잇는 두 줄의 리본이 금방이라도 끊어질 듯 팽팽해졌다.',
      );
      if (you.sex_code === 1) {
        await era.printAndWait([
          '남녀 단둘이 있는데도, ',
          treve.sex,
          '는 ',
          you.get_colored_name(),
          '이(가) 선을 넘는 짓을 할 거라곤 겁내지 않는 모양이다.',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        `은(는) 눈앞의 ${treve.teen_sex_title}를 바라보았다. `,
        you.get_colored_name(),
        '을(를) 만나려고 눈가에 특별히 바른 연지가 몹시 귀여웠다.',
      ]);
      await era.printAndWait([
        '옥에 티라면, 원피스를 입은 ',
        treve.get_colored_name(),
        '의 배꼽을 볼 수 없다는 점이었다.',
      ]);
      await era.printAndWait('하지만 신은 한쪽 문을 닫으면서 동시에 다른 창문을 열어두셨다.');
      await era.printAndWait([
        '——',
        treve.get_colored_name(),
        '의 옷에는 소매가 없었다.',
      ]);
      era.printButton('「겨드랑이 좀 만져봐도 될까?」', 1);
      await era.input();
      await treve.say_and_wait('Non, Trousseur de jupons(안 돼요, 이 난봉꾼아).');
      era.printButton('「무슨 말인지 모르겠으니까 만질게.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 번개처럼 빠른 속도로 두 손을 뻗어 ',
        treve.get_colored_name(),
        '의 양 겨드랑이를 기습했다.',
      ]);
      await treve.say_and_wait('아앗! 하하핫……');
      await era.printAndWait([
        treve.get_colored_name(),
        '는 양손을 빠르게 내려 겨드랑이를 꽉 조였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 손가락을 꽉 끼운 채로 웃음을 터뜨렸다.',
      ]);
      await era.printAndWait('때로는 고개를 젖히고, 때로는 몸을 숙이려 했다.');
      await era.printAndWait(
        '어린 포니의 겨드랑이는 갓 만든 두부처럼 무척이나 보드라웠다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        ' 때문에 진퇴양난에 빠져, 왼쪽으로든 오른쪽으로든 어쩔 방도가 없이 양겨드랑이를 꽉 붙잡혀 버렸다.',
      ]);
      await era.printAndWait([
        '등은 이미 벽에 닿아 있었고, 앞에는 원흉인 ',
        you.get_colored_name(),
        '의 품이 있었다.',
      ]);
      await treve.say_and_wait([
        `${callname}, 안 돼…… 하하핫…… 그, 그만해요!`,
      ]);
      await treve.say_and_wait([
        '제, 제발 부탁할게요…… 하하하핫…… ',
        treve.get_colored_name(),
        '가 부탁할 테니까요.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 장난은 더욱 맹렬해졌고, 급기야 ',
        treve.get_colored_name(),
        '가 크게 웃다가 제 침에 사레들릴 정도가 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 돌려 기침을 두어 번 하는 ',
        treve.get_colored_name(),
        '를 놓아주었다.',
      ]);
      era.printButton('「가터링은 어쩌다 찬 거야?」', 1);
      await era.input();
      await treve.say_and_wait('네? 예쁘잖아요.');
      era.printButton('「이게 무슨 뜻인지 알아?」', 1);
      await era.input();
      await treve.say_and_wait('몰라요.');
      await era.printAndWait('그녀는 고개를 가볍게 저었고, 짧은 머리카락이 나부꼈다.');
      era.printButton('「그건 남자를 유혹한다는 뜻이야.」', 1);
      era.printButton(
        '「어떤 곳에선 창녀가 옷을 벗고 남자와 잔 다음, 받은 돈을 가터링에 끼워두곤 하거든.」',
        2,
      );
      await era.input();
      await treve.say_and_wait('그, 그럼 뺄게요……');
      era.printButton('「앞으로는 다른 사람 앞에서는 차지 마.」', 1);
      era.printButton('「내 앞에서는 꼭 차고 있어.」', 2);
      await era.input();
      await treve.say_and_wait('알았어요. 하지만 왜요?');
      era.printButton('「내 눈에 넌 앙큼한 계집애, salope니까.」', 1);
      era.printButton(
        '「사람들 앞에서는 활발하고 귀여운 공주님이, 한밤중엔 남자와 엮여서……」',
        2,
      );
      if ((await era.input()) === 1) {
        await treve.say_and_wait('으윽…… 그렇게 심한 말 하지 마세요……');
      } else {
        await treve.say_and_wait('아니, 제가 먼저 다가간 건 아니잖아요……');
      }
      era.print([
        '흐느끼며 울음 터질 듯한 어린 서양 우마무스메를 보며, ',
        you.get_colored_name(),
        '은(는)……',
      ]);
      era.printButton('가슴을 주무른다', 1);
      era.printButton('다리를 만진다', 2);
      ret.push(await era.input());
      if (ret.at(-1)) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '에게 구두를 벗고 침대 위로 올라가 다리를 적당히 벌리고 무릎을 꿇으라고 했다.',
        ]);
        await era.printAndWait([
          `${treve.teen_sex_title}는 매끄럽게 자리를 잡고 앉았고, 파란 치맛자락이 작은 원형으로 펼쳐졌다.`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 뒤로 다가갔다. 매끄럽고 흰 등허리가 무척 예뻤다.',
        ]);
        await era.printAndWait(['양손에 힘을 꽉 주고는, 그녀의 몸 양옆을 짚었다.']);
        await era.printAndWait([
          '마음의 준비를 마친 ',
          treve.get_colored_name(),
          '는 반항하지 않고, ',
          you.get_colored_name(),
          '이(가) 마음대로 하도록 내버려 두었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 양가슴을 마치 요리 재료의 무게를 재듯 움켜쥐었다.',
        ]);
        await era.printAndWait([
          '이어서 뒤죽박죽으로 주물렀다. 그 손놀림은 대략 『가볍게 모았다가 천천히 비비고 문지르다가 다시 튕겨내는』 식이었다.',
        ]);
        await era.printAndWait([
          treve.get_colored_name(),
          '는 고개를 숙이지 않아도 자신의 양가슴이 드러났음을 알고 있었다.',
        ]);
        await era.printAndWait(['원을 그리듯 문지르고, 퉁기고, 누르고……']);
        await era.printAndWait([
          treve.get_colored_name(),
          '는 유륜에서 끊임없이 밀려오는 쾌감을 느끼면서도 자신의 자세를 유지했다.',
        ]);
        await era.printAndWait([
          `${treve.sex}는 그제야 자신이 무의식중에 두 팔을 뒤로 올려 `,
          you.get_colored_name(),
          '의 머리를 감싸 안고 있다는 걸 깨달았다. 마치 항복하는 듯한 자세였다.',
        ]);
        await era.printAndWait([
          '반면 ',
          you.get_colored_name(),
          '은(는) 입꼬리를 올리며 무척 짓궂은 표정을 짓고 있었다.',
        ]);
        await treve.say_and_wait('아앗, 싫어……');
        await era.printAndWait([
          treve.get_colored_name(),
          '는 가볍게 신음을 내뱉었고, 두 눈에는 이미 연모의 빛이 떠올라 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 가볍게 건드리기만 해도, ',
          treve.get_colored_name(),
          '는 뒷머리까지 쾌감이 치솟는 듯했다.',
        ]);
        era.printButton('「자, 가슴 펴고, 배 집어넣고.」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 손길에 맞춰 차근차근 자세를 바로잡았다.',
        ]);
        await era.printAndWait(
          `심호흡을 한 번 하자, ${treve.sex}의 복부가 한결 쏙 들어갔다.`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          treve.get_colored_name(),
          '의 허리를 더듬어 벨트 위치를 확인하고는 가볍게 당겼다.',
        ]);
        await era.printAndWait('*철컥철컥*');
        await era.printAndWait(
          `하얀 가죽 벨트가 조여들어, ${treve.sex}의 허리에 바짝 밀착되었다.`,
        );
        await treve.say_and_wait('너무 꽉 조여요……');
        era.printButton('「좀 조여야 꼿꼿해지잖아.」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          '는 허리를 조이자 가슴이 더욱 도드라져 보였다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          `은(는) 뒤에서 ${treve.sex}를 껴안고 양손을 교차하여 두 마리의 흰 토끼를 움켜쥐었다.`,
        ]);
        era.printButton('「정말 촉촉하네.」', 1);
        era.printButton(
          `「${treve.name}는 이렇게 마음대로 가슴을 주물러지는 건 처음이지?」`,
          2,
        );
        if ((await era.input()) === 1) {
          await treve.say_and_wait('대체 그게 무슨 표현이에요!');
        } else {
          await treve.say_and_wait('……네.');
        }
        await era.printAndWait([
          '봉긋하게 솟아오른 양가슴은 ',
          you.get_colored_name(),
          '의 손에 잡혀 갖가지 모양으로 변했다.',
        ]);
        await era.printAndWait('마치 물풍선처럼 부드러웠다.');
      } else {
        era.printButton('「그걸론 부족해, 허벅지 살이 눌려야 더 숙녀답지.」', 1);
        await era.input();
        await treve.say_and_wait('살이 눌려요?');
        await era.printAndWait([
          treve.get_colored_name(),
          '가 미처 반응하기도 전에, ',
          you.get_colored_name(),
          '은(는) 그녀의 가터링 벨트 버클을 당겼다.',
        ]);
        await treve.say_and_wait('다리는…… 안 돼요……');
        await era.printAndWait([
          '아까 겨드랑이를 기습했을 때, ',
          you.get_colored_name(),
          '은(는) 그녀가 간지럼을 잘 탄다는 걸 알아챘다.',
        ]);
        await era.printAndWait('지금도 양다리를 오들오들 떨며 온몸을 부르르 떨고 있었다.');
        await treve.say_and_wait('빨리 그만둬요!');
        await treve.say_and_wait(`${callname}…… 빨리 멈추라고요, 이 바보야!`);
        era.printButton(
          `「${treve.name}는 남을 욕할 때도 이렇게 다정하네? 참 다루기 쉽단 말이야.」`,
          1,
        );
        await era.input();
        await treve.say_and_wait('허벅지 안쪽은 만지지 마요! 얼른 그만둬요……');
        await era.printAndWait([
          treve.get_colored_name(),
          '는 아랫입술을 깨물었고, 흔들림에 예쁜 가슴이 위아래로 출렁였다.',
        ]);
      }
      era.printButton('「내가 듣기 좋아하는 말을 해봐.」', 1);
      era.printButton('「듣기 좋은 말 좀 해볼래?」', 2);
      await era.input();
      await treve.say_and_wait('……');
      await treve.say_and_wait(`${callname}…… ${you.actual_name}…… 좋아해요……`);
      await treve.say_and_wait(`전 ${callname}의 담당이 정말 부러워요……`);
      await treve.say_and_wait(
        `${callname}…… ${you.actual_name}…… 좋아해요……`,
      );
      era.printButton('「그걸론 안 되겠는데.」', 1);
      era.printButton('「너 스스로는 어떤데?」', 2);
      if ((await era.input()) === 1) {
        await treve.say_and_wait('아아아아……');
        await treve.say_and_wait(`${you.actual_name}은(는) 모두가 우러러보는 트레이너예요!`);
        await treve.say_and_wait(
          `${treve.name}는 기꺼이 ${you.actual_name}의 발밑에 엎드릴게요……`,
        );
      } else {
        await treve.say_and_wait(`${treve.name}, ${treve.name} 는 정말 바보에요!`);
        await treve.say_and_wait(
          `저는…… ${callname}만 보면 발정해서, 머릿속이 엉망진창이 돼버려요……`,
        );
      }
      era.printButton(`「${treve.name}의 쉬하는 곳을 보고 싶어.」`, 1);
      await era.input();
      await treve.say_and_wait('변태!');
      era.printButton('「누가 변태라는 거야?」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '는 잔뜩 억울한 얼굴로 입술을 삐죽였다.',
      ]);
      await treve.say_and_wait(`${treve.name}가 변태예요.`);
      era.drawLine();
      await era.printAndWait([
        '팬티를 벗은 ',
        treve.get_colored_name(),
        '가 침대에 누웠다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 요구대로 양다리를 몸 옆으로 넓게 벌리고 무릎을 접었다.',
      ]);
      await era.printAndWait(
        '발뒤꿈치를 허벅지 안쪽에 바짝 붙이고, 발바닥을 꼿꼿이 세워 힘을 풀지 못하게 했다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '의 은밀한 곳이 완전히 개방되어 ',
        you.get_colored_name(),
        '을(를) 향해 드러났다.',
      ]);
      await era.printAndWait(
        '전복 같은 그곳은 성긴 금발 아래에 가려져 있었고, 분홍빛 입술이 호흡에 맞춰 벌어졌다 닫히기를 반복했다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '는 스스로 손을 베개 아래에 받친 채, 아무런 저항도 하지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 고개를 파묻자, 십몇 센티미터 떨어진 곳에서도 우마무스메의 『발정기』 냄새를 맡을 수 있었다.',
      ]);
      await era.printAndWait('은은하면서도 약간 비릿하고, 소녀의 향기가 섞인 냄새였다.');
      await era.printAndWait(
        '두툼한 대음순 사이의 틈새에는 더욱 촉촉하고 여린 소음순이 자리 잡고 있었다.',
      );
      await era.printAndWait('얇은 가장자리가 가까이서 볼수록 무척이나 유혹적이었다.');
      await treve.say_and_wait('아앗…… 싫어요……');
      await era.printAndWait('그녀는 숨이 찬 듯 가쁘게 호흡했다.');
      era.printButton(`리듬감 있게 ${treve.name}의 음순을 핥는다.`, 1);
      await era.input();
      await era.printAndWait([
        '옅은 짠맛이 ',
        you.get_colored_name(),
        '의 혀끝에 퍼졌지만, 이것만으로는 부족했다.',
      ]);
      era.printButton(`${treve.name}의 음순을 양옆으로 벌린다.`, 1);
      await era.input();
      await treve.say_and_wait('안 돼……');
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈앞에 드러난 것은 한층 더 붉고 부드러운 속살이었다.',
      ]);
      await era.printAndWait('그 위에는 애액이 촉촉하게 맺혀 있어 지극히 아름다워 보였다.');
      await treve.say_and_wait(`저 아직…… 처녀예요…… ${you.actual_name}, 아직……`);
      era.printButton('「알았어, 지금 당장은 넣지 않을게.」', 1);
      await era.input();
      await treve.say_and_wait('네.');
      await era.printAndWait([
        treve.get_colored_name(),
        '의 소음순이 온전히 ',
        you.get_colored_name(),
        '의 혀에 의해 밀려났다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곧바로 음핵 포피 아래에 볼록 솟아오른 살덩이를 입에 머금고 강하게 빨기 시작했다.',
      ]);
      await era.printAndWait([
        '순식간에 그 주변 살점 전체가 통째로 ',
        you.get_colored_name(),
        '의 두 입술 사이로 빨려 들어갔다.',
      ]);
      await era.printAndWait('음핵은 더 이상 도망갈 곳 없이 동그랗게 부풀어 올랐다.');
      await treve.say_and_wait('안 되겠어요…… 제발 빨지 마요오오오오……');
      await treve.say_and_wait('아기, 아직 낳아줄 수 없어요……');
      await era.printAndWait([
        '거듭된 애무에 ',
        treve.get_colored_name(),
        '의 얼굴엔 땀방울이 송글송글 맺혔다.',
      ]);
      await era.printAndWait([
        '그때 ',
        you.get_colored_name(),
        '이(가) 다시금 그녀의 질구를 여러 번 쓸고 지나갔다.',
      ]);
      await era.printAndWait(
        '닿기만 하고 들어오지는 않는 애타는 감각에 소녀는 황홀감에 몸부림쳤다.',
      );
      await treve.say_and_wait('싫어…… 안 돼요……');
      await treve.say_and_wait('빨리 그만해줘요……');
      await treve.say_and_wait('가, 가버릴 것 같아요…… 가요!');
      await treve.say_and_wait('내일 스승님도 뵈어야 하는데……');
      await era.printAndWait([
        treve.get_colored_name(),
        '는 두서없이 말을 쏟아냈고, 마침내.',
      ]);
      await era.printAndWait(
        '——여린 입구에서 뽀얀 애액이 흘러나오더니, 곧이어 몇 줄기가 왈칵 뿜어져 나왔다.',
      );
      await era.printAndWait('그녀는 베개 아래에 두었던 손을 빼내어 제 얼굴을 가렸다.');
      await treve.say_and_wait(`${callname} 미워요!`);
      era.printButton('「나도 슬슬 못 참겠어, 일단 일어나 봐.」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '가 느릿느릿 몸을 일으키자, 이미 발기해버린 육봉 하나가 눈에 들어왔다.',
      ]);
      era.printButton('「방금 네 걸 봤으니까, 너도 내 걸 좀 봐.」', 1);
      await era.input();
      await treve.say_and_wait('볼 게 뭐가 있다고요.');
      era.drawLine();
      await treve.say_and_wait(
        `……미안해요, ${you.actual_name}의 고추…… 너, 너무 크고 굵어서, ${treve.name}, 좋아졌어요……`,
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '가 바닥으로 기어 내려와 무릎을 꿇었다. 융단이 깔려 있어 무릎이 아프진 않았다.',
      ]);
      await treve.say_and_wait('조금 냄새나요……');
      await era.printAndWait([treve.get_colored_name(), '가 솔직한 감상을 내뱉었다.']);
      era.printButton('「좋아?」', 1);
      await era.input();
      await era.printAndWait([treve.get_colored_name(), '는 아무 말도 하지 않았다.']);
      era.printButton('「좋다는 뜻이구나.」', 1);
      await era.input();
      await treve.say_and_wait('아니거든요!');
      await era.printAndWait([
        '그녀의 말이 끝나기가 무섭게, ',
        you.get_colored_name(),
        '은(는) 육봉을 그녀의 코끝에 바짝 가져다 댔다.',
      ]);
      await era.printAndWait(['——정확히는 인중, 윗입술 위의 골짜기였다.']);
      await era.printAndWait(['귀두가 그녀의 콧구멍 두 개를 완전히 막아 숨길을 차단했다.']);
      await era.printAndWait([
        treve.get_colored_name(),
        '는 숨을 들이마실 때마다 억지로 ',
        you.get_colored_name(),
        '의 냄새를 음미해야만 했다.',
      ]);
      era.printButton('「스승님한테 듣기로는 네가 노래를 아주 잘 부른다던데.」', 1);
      await era.input();
      await treve.say_and_wait('노래요?');
      era.printButton('「파리 트레센 교가로 해볼까.」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '는 그대로 무릎을 꿇은 채 코를 육봉에 막히고 교가를 불러야만 했다.',
      ]);
      await era.printAndWait([
        '가까스로 노래를 끝마쳤을 무렵, ',
        you.get_colored_name(),
        '의 수컷 냄새가 이미 그녀의 비강 깊숙이 침투해 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙여 ',
        treve.get_colored_name(),
        '를 내려다보았다.',
      ]);
      await era.printAndWait('양 볼은 티 없이 하얗고 매끄러웠다.');
      await era.printAndWait(
        '보석처럼 푸른 눈동자 곁에 화장기까지 더해져 밤의 어스름 속에서 매혹적으로 빛났다.',
      );
      await era.printAndWait('화려한 금빛 단발머리를 지닌, 그야말로 진짜 공주님이었다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 노골적인 시선에 부끄러워하며 어쩔 수 없이 혀를 내밀었다.',
      ]);
      await era.printAndWait([
        '그녀의 혀는 ',
        you.get_colored_name(),
        '보다 훨씬 뾰족하고 가늘며 부드러웠다. 단숨에 ',
        you.get_colored_name(),
        '의 요도구를 핥아 올렸다.',
      ]);
      await era.printAndWait([
        '한바탕 혀로 핥은 후에도 ',
        treve.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '에게 반응이 없자 귀두를 머금고는 빨아당겼다.',
      ]);
      await era.printAndWait('비릿한 냄새가 입안으로 퍼지며 치아 틈새까지 파고들었다.');
      await era.printAndWait([
        '혀로 핥을 때마다 ',
        treve.get_colored_name(),
        '는 수치심에 몸둘 바를 몰랐다.',
      ]);
      await era.printAndWait([
        '결국 인내심이 바닥난 ',
        you.get_colored_name(),
        '은(는) 양손으로 ',
        treve.get_colored_name(),
        '의 머리를 붙잡고 그녀의 입안을 거칠게 피스톤질하기 시작했다.',
      ]);
      await treve.say_and_wait('읍…… 우우웁……', true);
      await treve.say_and_wait('너무 괴로워……', true);
      await treve.say_and_wait(
        '냄새나! 너무 역겨워. 입천장에 자꾸 닿아! 혀뿌리 쪽은, 견딜 수 없어…… 토할 것 같아…… 토할 것 같아.',
        true,
      );
      await era.printAndWait([
        '힘껏 허리를 찌를 때마다, ',
        you.get_colored_name(),
        '은(는) 귀두를 그녀의 구강 가장 깊숙한 곳까지 처박았다.',
      ]);
      await era.printAndWait(['——연구개와 혀뿌리 사이 공간까지.']);
      await era.printAndWait([
        '혀뿌리의 돌기가 자극을 더해 ',
        you.get_colored_name(),
        '의 귀두에 맹렬한 쾌감을 안겨주었다.',
      ]);
      await era.printAndWait([
        '애석하게도 ',
        treve.get_colored_name(),
        '는 이 펠라치오 속에서 굴욕적으로 인내할 수밖에 없었다.',
      ]);
      era.printButton('참을 수 없어.', 1);
      era.printButton('입 안에 싼다.', 2);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        '는 입안을 가득 채운 남근의 떨림을 눈치채고 무언가 말하려 했지만, 소리가 나오지 않았다.',
      ]);
      await era.printAndWait(
        '혀뿌리가 틀어막힌 채, 뜨겁고 비릿한 액체가 입안 가장 깊은 곳에 거세게 뿌려졌다.',
      );
      await era.printAndWait('끈적거리는 정액이 마치 그녀의 식도를 틀어막을 것만 같았다.');
      await era.printAndWait([
        treve.get_colored_name(),
        '가 본능적으로 눈자위를 뒤집으며 괴로워했고, ',
        you.get_colored_name(),
        '의 육봉이 빠져나가자 정액 몇 방울이 융단 위로 뚝뚝 떨어졌다.',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        '는 입을 틀어막은 채 황급히 기어올라왔다.',
      ]);
      await era.printAndWait(
        '입가에 흘러넘친 정액이 그녀의 하얀 실크 장갑을 더럽히고 있었다.',
      );
      await treve.say_and_wait('꿀꺽…… 으음, 웁.');
      await era.printAndWait([
        treve.get_colored_name(),
        '하얀 정액이 목구멍을 타고 조금씩 삼켜지는 감각은, ',
      ]);
      await era.printAndWait([
        '하얀 정액이 목구멍을 타고 조금씩 삼켜지는 감각은, ',
        you.get_colored_name(),
        '에게 입안 사정을 당했을 때보다 한층 더 혐오스러웠다.',
      ]);
      await era.printAndWait('그녀의 가지런하고 새하얀 치아에도 빠짐없이 정액이 달라붙어 있었다.');
      await era.printAndWait(
        '어떤 정액들은 위아래 치아 사이에 엉겨 붙어 그녀의 입안에서 끈적한 실을 그렸다.',
      );
      await treve.say_and_wait('하아…… gros nigaud(완전 바보)!');
      era.printButton('「정말 미안.」', 1);
      await era.input();
      return ret;
    };
    f.title = title;
    return f;
  })(),

  74: (() => {
    const title = 'Un heureux événement（幸せな出来事）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `あの日、放課後に ${callname} が私を車へ引き上げ、国道沿いのラブホテルへ連れていった。`,
      );
      await treve.print_and_wait('こんな場所、入ったことがなかった。');
      await treve.print_and_wait(
        '外観は地味で、ロビーと廊下が一体になっていて、少し狭い。',
      );
      await treve.print_and_wait(
        `${callname} はカウンターのタッチパネルで部屋を選ぶ。`,
      );
      await treve.print_and_wait('半自助だなんて。受付もいない。');
      await treve.print_and_wait(
        `この人とエレベーターの前に立つ。今からの数時間、私は人形として扱われ、${you.sex}の性欲の処理をする。`,
      );
      await treve.print_and_wait(
        `これまでの経験では、${you.sex}を出せば終わる。`,
      );
      await treve.print_and_wait(
        `部屋に入るとすぐ、${callname} はベッドに座って服を脱げと指示した。`,
      );
      await treve.say_and_wait('分かってるはずよ……');
      await you.say_and_wait('ああ、約束は守る。コンドームは付ける。');
      await treve.print_and_wait(
        '服を脱ぐ。どうあれ、こう見られるのは恥ずかしい。',
      );
      await you.say_and_wait('すごいな。まったく垂れていない。');
      await treve.print_and_wait(
        `${callname} を喜ばせる胸は、張りも一級品だ。${
          you.sex
        } が一揉みすれば手に吸い付く、理想の胸。`,
      );
      await treve.print_and_wait(`私は ${callname} 以外に触らせたくない。`);
      await you.say_and_wait('表情が硬いな……肩、もう少し力を抜け。');
      await treve.print_and_wait(
        'するなら早くしてほしい。手も口も膣も、使われるのは分かっている。',
      );
      await treve.print_and_wait(
        `ときどき、自分は${you.sex}の自慰人形でしかないと思う。`,
      );
      await you.say_and_wait('まずベッドに横になって。そう、仰向け。');
      await treve.print_and_wait('は？意味が分からない。種付け体位のつもり？');
      await treve.print_and_wait(
        `${you.sex}の指示どおり仰向けになると、${callname} はピアノを弾くような手つきで、私の体に指を滑らせ始める。`,
      );
      await treve.print_and_wait(
        '首、脇、鎖骨、脇腹。触れたとも言えない弱い力で、ときどき押し付ける。',
      );
      await treve.print_and_wait(
        '嫌になると思っていた。まったく、そうではなかった。',
      );
      await treve.print_and_wait(
        '代わりに来るのは、子どもがふざけ合うような、焦れる感覚だ。',
      );
      await treve.print_and_wait(
        'というか、なぜこんなことをするのか分からない。',
      );
      await treve.print_and_wait(
        '乳首と恥丘は避けながら、器用に指を滑らせる。',
      );
      await treve.print_and_wait('撫でられたところが、少しつっぱる。');
      await treve.print_and_wait(
        `${callname} は、女の体は金庫だと言っていた。`,
      );
      await treve.print_and_wait(
        '順番に鍵を外せば、いちばん良い状態で開く、と。',
      );
      await treve.print_and_wait(
        '指がようやく膣へ入る。入口へ挨拶しながら、奥へ進む。',
      );
      await treve.print_and_wait(
        'もう濡れているのかもしれない。指は滞りなく入る。',
      );
      await treve.print_and_wait('意識を天井へ集め、ほかを忘れようとする。');
      await treve.print_and_wait(
        'LEDの明かりだ。間接照明。天井の模様を数え始める。',
      );
      await you.say_and_wait('だいたい、こんな感じだ。');
      await treve.say_and_wait('ん？おぉあっ！あっ…あ？');
      await treve.print_and_wait('いった、私……いま、イった？');
      await treve.print_and_wait('え？あ？');
      await you.say_and_wait('はは、白目まで剥いて。驚いたか？');
      await treve.print_and_wait('変な薬を打たれた——そう思って周囲を見回す。');
      await treve.print_and_wait(
        `${callname} の右手の指は膣の中にあり、左手は脇腹あたりを撫でている。`,
      );
      await treve.print_and_wait('注射器のような変な道具はない。');
      await treve.print_and_wait('異常なのは、私のそこだけだ。');
      await treve.print_and_wait(
        `腰まで痙攣し、${callname} の指を大口で咥え、愛液を垂らし、完全に媚びた姿だ。`,
      );
      await treve.say_and_wait('私の体に、何をしたの？');
      await you.say_and_wait(
        `首、脇、腹、脇腹。トレヴは本当に、全身が弱点だな。`,
      );
      await treve.print_and_wait(
        `${you.sex}が指をわずかに動かすたび、何十倍もの力で持ち上げられる気がする。`,
      );
      await treve.print_and_wait(
        `違う、私の体が魚のように跳ねている。${callname} に一掻きされるたび、めちゃくちゃに跳ねる。`,
      );
      await treve.say_and_wait('やめて！止めて！止めて！Arrêtez！');
      await you.say_and_wait(`やはり、トレヴの表情は豊かだ。`);
      await treve.print_and_wait(
        `最悪……終わった。${callname} を甘く見ていた。`,
      );
      await treve.print_and_wait(
        `この人は、指先だけで女の子を魂まで蕩けさせ、${you.sex}の哀れな雌犬にできる。`,
      );
      await treve.print_and_wait('入口をいじめただけで、私のそこは降伏した。');
      await treve.print_and_wait('腹の奥、子宮が渇いたようにざわつく。');
      await treve.print_and_wait(
        `どれほど熟練してるの？何人の女の子を泣かせたの？`,
      );
      await treve.print_and_wait(
        '私はまだ中学生よ…この歳でこんなことをされたら……',
      );
      await treve.say_and_wait('待って、お願い、止めて……');
      await you.say_and_wait('分かった。そこまでは、ここまでだ。');
      await treve.print_and_wait('今度は乳首を撫でられる。');
      await treve.print_and_wait(
        '膣内の余韻の中で、容赦ない指先が硬くなった乳首を刺激する。',
      );
      await treve.print_and_wait('私の乳首は勃起しすぎて、乳輪まで熱い。');
      await treve.say_and_wait('あっ！んおぉぉぉ！乳首も！');
      await treve.print_and_wait(`どんな女でも、泣いて止めろと言う。`);
      await treve.say_and_wait('んむぅぅ！');
      await you.say_and_wait('では、そこも…');
      await treve.say_and_wait('んぅぅぅぅ……');
      await treve.print_and_wait(
        '避雷針とはこういう感覚だ。私のそこへ雷が落ちた。',
      );
      await treve.print_and_wait(
        '下半身だけが切り離され、別の生き物になったようだ。',
      );
      await treve.print_and_wait(
        '喉からは、壊れたサイレンのような声しか出ない。',
      );
      await treve.print_and_wait(
        '体の中で爆発しそうな何かを叫んで出さないと、私は耐えられない。',
      );
      await treve.print_and_wait(
        `私の体は、${callname} に好き勝手に壊されている。`,
      );
      await treve.print_and_wait('首は後ろへ反り、腰は勝手に前へ突き出る。');
      await treve.print_and_wait(
        `${callname} の指は容赦なく膣内を掘り、伸ばしたつま先は空を向く。`,
      );
      await treve.print_and_wait(
        'ずっと耐えていた『尿意』が限界に達し、決壊寸前の快感を数百倍にもする。',
      );
      await treve.say_and_wait('おぉあああ、出て……出る！やめて、そんな……');
      await you.say_and_wait('おしっこじゃない。出していい。');
      await treve.print_and_wait(
        `${callname} が陰核を押すと腰が跳ね、水々しい透明な液体が散る。`,
      );
      await treve.print_and_wait(
        '必死に力を入れて尿道を閉じようとするが、体はまったく言うことを聞かない。',
      );
      await treve.print_and_wait(
        'シーツに染みが付き、尻まで水の冷気を感じる。',
      );
      await you.say_and_wait(`初めての潮吹きか？トレヴは本当に感じやすい。`);
      await treve.say_and_wait(
        'あっ……あっ……はあっ……やめて、止めて、お願い止めて、そこを許して……',
      );
      await treve.print_and_wait(
        '腰をずらしても逃げられない。弱点をいじめられ続け、掴まれて責められる。',
      );
      await treve.print_and_wait(
        `愛液を垂らして ${callname} の許しを乞う私の顔は、きっとひどい。`,
      );
      await treve.print_and_wait(
        '涙と涎が飛び散り、世界でいちばん幸せな雌の顔に違いない。',
      );
      await treve.print_and_wait(
        `${callname} の手が抜けるまで、私は何度も潮を吹かされた。`,
      );
      await treve.print_and_wait(
        '全身が痙攣し、姿勢を変えることすらできない。',
      );
      await treve.print_and_wait(
        '神経を全部引き抜かれ、快楽を脳漿へ直接注がれているような感覚だ。',
      );
      await treve.print_and_wait(`${callname} はゆっくり私の腹を、髪を撫でる…`);
      await treve.print_and_wait(
        '腹を晒したペットの犬を愛でるように、跳ねる子宮を優しく捏ねる。',
      );
      await you.say_and_wait(
        'ゆっくり覚えろ。最後には子宮も気持ちよくしてやる。',
      );
      await treve.say_and_wait('ああああ……');
      await treve.print_and_wait(
        `だめ……雌の本能……強い雄に屈して、${you.sex}に支配されたい……`,
      );
      await treve.print_and_wait(
        '師匠はこんなこと教えてくれなかった。全部奪われた。自尊心も、自信も……',
      );
      await treve.print_and_wait(
        `これまで積んできたすべてが${you.sex}の色に塗られる。助けて……`,
      );
      await you.say_and_wait('そろそろ、こっちも頼みたい。');
      await treve.print_and_wait(
        `${callname} は下着を脱ぎ、屹立した陰茎を見せる。`,
      );
      await treve.print_and_wait(
        'どう見ても嘘みたいだ。太さ、長さ、血管まで浮き、映画で見たものとはまったく違う。',
      );
      await treve.print_and_wait(
        '熱気のように立ち上り、鼻を突く雄の匂いが私の脳を焼く。',
      );
      await treve.print_and_wait(
        'その前に、体は完全に屈服し、子孫を残す支度をしている。',
      );
      await treve.print_and_wait(
        '引き締まった腹の奥がかすかに痛み、筋肉が勝手に子宮を引き下ろす。',
      );
      await treve.print_and_wait('強い雄にだけ許された特権。');
      await treve.print_and_wait(
        `${callname} の種に蹂躙されるのが、私の卵の義務。`,
      );
      await treve.print_and_wait('ください、これをください、あなたが欲しい。');
      await treve.print_and_wait(
        '子宮は飢えで媚びて刺すように痛む。抵抗の意識は薄れ、涎を垂らす膣口にも気づかない。',
      );
      await you.say_and_wait('じっと見てる？そんなに好きか。');
      await treve.print_and_wait('煽る、心底からの問い。');
      await treve.print_and_wait(
        `最低、最低すぎる。あなたはきっと、こうして何人もの女を雌にしてきた。`,
      );
      await treve.say_and_wait(
        'くっ……格好はいいわね。とにかく先にコンドームを……',
      );
      await you.say_and_wait(`その前にフェラ。トレヴ、できるだろう？`);
      await treve.print_and_wait('従うしかない。仕方ないでしょう？');
      await treve.print_and_wait(
        '口に含んだ瞬間、鼻の雄臭で頭が焼け、また潮を吹く。',
      );
      await treve.print_and_wait(
        'もう媚びることしか知らない馬鹿なそこは、これから貫かれるのを期待し、淫らな水をひどく流す。',
      );
      await treve.print_and_wait('大きすぎて、半分強しか含めない。');
      await treve.print_and_wait('歯が当たらないよう顎を下げ、口を締める。');
      await treve.print_and_wait('まともに呼吸できず、鼻息も荒くなる。');
      await you.say_and_wait('君の顔、意外だな。');
      await treve.say_and_wait(
        'んおぉぉ、くっ、しっ、うう、はあっ…はあっ、あむ。',
      );
      await you.say_and_wait(`トレヴのがんばる姿はかわいいな。`);
      await treve.print_and_wait('頭を撫でられ、耳を弄られる。');
      await treve.print_and_wait(
        'いつの間にかまた横になっていて、尻尾がハートの形に巻いている。',
      );
      await treve.print_and_wait(
        `${callname} が抜いた陰茎が、私の上に覆いかかる。`,
      );
      await treve.print_and_wait('逃げられない。避けられない。抗えない。');
      await treve.print_and_wait(
        '今から私は、頭がおかしくなるまでいじめられる。',
      );
      await treve.print_and_wait(
        'この生殖器を覚え、雄に勝てない雑魚の雌になる。',
      );
      await treve.print_and_wait('最悪……早く…');
      await treve.say_and_wait('わおぉおぉおぉぉぉ！');
      await treve.print_and_wait('一撃で倒された。');
      await treve.print_and_wait('そこが、おかしくなる。');
      await you.say_and_wait(
        'こうして犯されるのは初めてだろう。できるだけ早く終わらせる。',
      );
      await treve.say_and_wait('止めて、頭がおかしくなる！こんなの、知らない…');
      await treve.print_and_wait(
        'Gスポットを押し出すように、最深へピストンする。',
      );
      await treve.print_and_wait(
        '半狂乱で泣き叫んでも、容赦ない『ぱんぱん』は止まらない。',
      );
      await treve.print_and_wait(
        '意識がどこへ飛んだか分からない。何度イったかも分からない。強引に引き戻され、快楽を注がれる。',
      );
      await treve.print_and_wait(
        `十数分の抽送のあと、${callname} はようやく射精した。`,
      );
      await treve.print_and_wait(
        'ゴム一枚隔てているとは思えない熱さ。マグマを注がれたような一撃。',
      );
      era.drawLine();
      await treve.print_and_wait(
        '意識が戻ったときはすでに数時間経っていた。周囲にはティッシュ箱とコンドームの包装。',
      );
      await treve.print_and_wait(
        'ゴミ箱には結んだコンドームがいくつか。何度替えたか、もう分からない。',
      );
      await treve.print_and_wait(
        `覚えているのは、後ろからされたある回、${callname} が陰茎を抜いてコンドームを替えるとき、私が昏倒したこと。`,
      );
      await treve.print_and_wait(
        `${callname} に抱かれ、体を弄られ続けている。`,
      );
      await treve.print_and_wait(
        '跳ねて離れたいが、いまの私は自分の力で立つことすらできない。',
      );
      await you.say_and_wait(
        `おはよう、トレヴ。体の相性はいい。気持ちよかっただろう？`,
      );
      await treve.say_and_wait('はあっ……はあっ……終わったなら、先に放して。');
      await you.say_and_wait(`トレヴの尻尾が絡んでるから、無理だな。`);
      await treve.print_and_wait('え？');
      await you.say_and_wait('負けず嫌いは、選手にはいいかもしれない。');
      await treve.print_and_wait(
        `${callname} はそう言い、また手を私の陰核へ近づける。`,
      );
      await treve.print_and_wait('条件反射の体の反応で、息が止まる。');
      await treve.say_and_wait(
        '待って！やめて……ごめんなさい！本当に気持ちよかった。',
      );
      await treve.print_and_wait(
        `${callname} は満足げに鼻で笑い、手を私の胸へ戻す。`,
      );
      await treve.print_and_wait(
        '子どもが粘土をいじるように雑な揉み方なのに、私の体はそれにも反応して震える。',
      );
      await treve.print_and_wait(
        'くそ……抱かれているのが気持ちよくて、逆らえない。フランスの皆も、こんな私は見たことがない。',
      );
      await treve.print_and_wait(
        '知らなかったさまざまな快楽が頭に注がれ、心底から喜びを感じる。',
      );
      era.drawLine();
      await treve.print_and_wait(
        `朝、${callname} に寮の前まで送られ、扉を開けてよろよろ歩く。`,
      );
      await treve.print_and_wait(
        '脚は鉛を流し込んだように重く、頭は煙に霞んだようにぼんやりしている。',
      );
      await treve.print_and_wait(
        '携帯を開くと、不在着信と伝言が山のように溜まっている。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、私は膣を撫でられて愛液をあちこちに吹いていた。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、子宮をひたすらいじめられて嬉しかった。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、私は雌としての最上の幸福を味わっていた。',
      );
      await treve.print_and_wait('私は、たくさんの人を裏切った…');
      await treve.say_and_wait('あっ……ああ、んっ。');
      await treve.print_and_wait('気づくと、下着がびしょ濡れだ。');
      await treve.print_and_wait(
        '右手が無意識に股へ伸び、割れ目を撫で、陰核で自慰している。',
      );
      await treve.print_and_wait(
        '——ちっとも気持ちよくない。あのときみたいじゃない。なぜ？同じ場所なのに。',
      );
      await treve.print_and_wait(
        '机にうつ伏せになり、左手をブラの下へ入れ、硬くなった乳首を捏ねる。',
      );
      await treve.print_and_wait(
        'ペン立てから少し太いボールペンを抜く。師匠がくれた贈り物だ。',
      );
      await treve.print_and_wait('浅い……届かない！全然足りない。');
      await treve.print_and_wait(
        '手淫に溺れ、あれこれ突っ込みながら、椅子まで濡らす。',
      );
      await treve.print_and_wait(
        'でもいけない。分かっている。『本物』を味わってしまったから。',
      );
      await treve.print_and_wait(
        '呼吸すら塞ぎ、喉を抉るあの巨物が頭を掠める。',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' のメッセージを受け取った。',
      ]);
      await treve.say_and_wait('次は、いつ？');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 89
  89: (() => {
    const title = 'Premier amour（初恋という小事）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `ある日、私は子宮に正直になり、${callname} の部屋へ行った。`,
      );
      await you.say_and_wait('いきなりその格好で来るとは……どういうつもりだ？');
      await treve.print_and_wait(
        '青と白の控えめな服。本来はG1で着る勝負服なのに、私はそのまま来てしまった。',
      );
      await treve.print_and_wait(
        '優雅さのために通気の一部を犠牲にしている。全力で階段を駆け上がった私の汗は蒸発せず、下着へ染み、ひどく湿っている。',
      );
      await you.say_and_wait('一晩中やるぞ。覚悟しておけ。');
      await treve.print_and_wait('最悪、もう濡れている。');
      await treve.print_and_wait(
        '二週間溜めた性欲と、段階の違う発情期で、そこはもう粘ついている。',
      );
      await treve.print_and_wait(
        '私はどうなるの。どう負け、どう媚び、どう壊されるのか。',
      );
      await treve.print_and_wait(
        `部屋に入って扉を閉めた瞬間、私はショールをハンガーに掛け、${callname} の前に座った。`,
      );
      await you.say_and_wait('落ち着け。逃げたりしない。');
      await treve.print_and_wait(
        `とぼけるこの人を黙らせるため、私は${you.sex}に口付けした。`,
      );
      await treve.print_and_wait(
        '舌を入れて絡め、唾を流し込み、耳障りな水音を立てる。',
      );
      await you.say_and_wait(`トレヴは才能があるな。`);
      await treve.print_and_wait('うるさい……');
      await treve.print_and_wait('口の中を舐められ、未知の感触に少し驚く。');
      await treve.print_and_wait(
        `やはり ${callname} はキスが上手い。性愛で相手を喜ばせる方法を、すべて知っている。`,
      );
      await treve.print_and_wait(
        `ショートブーツを脱いで傍らへ投げ、尻を ${callname} の顔へ向け、肉棒のそばへ寄る。`,
      );
      await treve.print_and_wait(
        '以前は考えることすらできなかった大胆な体臭。',
      );
      await treve.say_and_wait('あなたの生臭い匂い……大きい。');
      await treve.print_and_wait(
        '媚びた甘い言葉が口を出る。仕方ないでしょう？雌が勝てない肉棒だもの。',
      );
      await treve.print_and_wait(`まる二週間、頭は ${callname} で焦げていた。`);
      await treve.print_and_wait(
        `${callname} の半勃起の男根を含み、舌でゆっくり亀頭を半周する。`,
      );
      await treve.print_and_wait('口を閉じて「じゅるじゅる」と音を立てる。');
      await treve.print_and_wait('勃起したそれが、すぐに私の喉の奥を貫く。');
      await you.say_and_wait(`トレヴの足も臭いな。塩辛いのか、酸っぱいのか。`);
      await treve.print_and_wait('変態、変、最低！');
      await treve.print_and_wait('あなた以外、私のその臭いは誰も知らない。');
      await treve.print_and_wait('舌で筋を丁寧に舐め、ゆっくり根元へ迫る。');
      await treve.print_and_wait(
        `期待のあまり陰核が包皮を押し開いて勝手に出てくる。私は太ももで ${callname} の頭を挟み、締め付ける。`,
      );
      await treve.print_and_wait(
        '嗅いで、舐めて、早く！早く、噛んでもいい、そこを噛んで！',
      );
      await treve.print_and_wait(
        '自分でするときも触れなかった、小指の先ほどの栗。',
      );
      await treve.print_and_wait(
        '最近は脚を揃えて歩くだけで陰唇と下着に擦られ、勝手な下品な弱点になっている。',
      );
      await treve.print_and_wait(
        `責めが始まる。このまま ${callname} に吸われ、歯で軽く碾かれる。`,
      );
      await treve.print_and_wait(
        '普段は屋外の空気にすら触れない場所だ。耐えることなど不可能だ。',
      );
      await treve.print_and_wait(
        `私の腰は鯉の逆立ちのように跳ね、潮を${you.sex}の顔へ浴びせる。`,
      );
      await treve.print_and_wait('叫びたいが、口は完全に塞がれている。');
      await treve.say_and_wait('んっ！んあああああ、んっ、おぉぉ。');
      await treve.print_and_wait('感じるたび喉が収縮し、亀頭を搾る。');
      await treve.print_and_wait(
        '私はオナホールにされている。陰核を刺激すれば開閉できる、便利な道具だ。',
      );
      await treve.print_and_wait(
        `${callname} の肉竿が口の中で震え、大量に精を吐く。`,
      );
      await treve.print_and_wait(
        '映画のような水流の射精ではない。練乳のように濃い精液だ。',
      );
      await treve.print_and_wait(
        '喉の奥に穴を開ける勢いで射出された精液を、私は力を入れて喉を動かし、飲み下す。',
      );
      await treve.print_and_wait(
        'あなたのような雄に、精液を吐くことなどできない。',
      );
      await you.say_and_wait('フェラ、上手くなったな。ほら、水。');
      await treve.print_and_wait(
        `${callname} は少し驚いた様子で水を渡してくる。`,
      );
      await treve.print_and_wait(
        `私は大きく口を開け、${you.sex}に喉の奥まで見せる。`,
      );
      await treve.print_and_wait(
        '見て、あなたのいちばん大事な子ども、全部私の胃に落ちたわよ？',
      );
      await treve.say_and_wait('あっ……');
      await treve.print_and_wait('雄の臭いが食道から湧き、脳まで貫く。');
      await treve.print_and_wait(
        'そこからはすでに雪白の淫液が滴り、直接落ちず、粘って垂れる。',
      );
      await treve.print_and_wait(
        '私の子宮……子どもの指でも触れられるところまで下がっている。',
      );
      await treve.say_and_wait('今度は、膣の中に…');
      await treve.print_and_wait(
        '私は蛙のように脚を開き、指で秘所を拡げ、媚びた笑みを試す。',
      );
      await treve.print_and_wait('見て、ここ、あなたを気持ちよくできる穴よ？');
      await treve.print_and_wait('入れたら、いちばん気持ちいいわ。');
      await treve.print_and_wait('粘つく牝馬の雌穴よ？');
      await treve.print_and_wait('来る！');
      await treve.say_and_wait('んっ……！あっ……！');
      await treve.print_and_wait(
        '一気に貫かれ、亀頭に突かれ、子宮と口付けし、おかしくなる。',
      );
      await treve.print_and_wait('熱い、形がいい。');
      await treve.say_and_wait('そこ、もっと突いて……好き。');
      await treve.print_and_wait(
        'ピストンのたびがすごい。脳内の神経がショートしそう。',
      );
      await treve.print_and_wait(
        `膣をきつく締めれば、${callname} も苦しげな顔をする。`,
      );
      await treve.print_and_wait(
        `かわいい。ずっとこうして${you.sex}を締めたい。`,
      );
      await treve.print_and_wait(
        '「ぷっ」という音がして、肉棒が抜けようとする……',
      );
      await treve.print_and_wait(
        'だめ、だめ！もっと愛して、入れていないとだめ…',
      );
      await you.say_and_wait(`何だこれは。最上の名器だ、トレヴ！`);
      await treve.print_and_wait('あっ……嬉しい。');
      await treve.print_and_wait(
        `${callname} に頭を撫でられ、這いつくばらされ、子犬のように後ろからされる。`,
      );
      await treve.print_and_wait('やあ！こんなの、獣の交尾じゃない。');
      await treve.print_and_wait(
        `汗で張り付いた髪を ${callname} が乱暴に掴み、取っ手のように握る。`,
      );
      await treve.print_and_wait(
        'ばか！女の子にとっていちばん大事なものの一つなのに、ひどすぎる。',
      );
      await treve.print_and_wait(
        '後ろから胸をきつく掴まれ、下半身がぶつかり合う。',
      );
      await treve.print_and_wait('私は力なく、顔を枕へ伏せる。');
      await you.say_and_wait('いい尻だな。色っぽすぎる……');
      await treve.print_and_wait('ばか、cruche、Imbécile……');
      await treve.print_and_wait(
        '腰を打たれるたび尻がいじめられる。少し痛いのに、気持ちいい。',
      );
      await treve.say_and_wait('……欲しい。');
      await treve.print_and_wait(
        '言い終わるとひっくり返され、舌を吸われ、それから……潮を吹いた。',
      );
      await treve.print_and_wait('呼吸が危ういのに、口は放さない。');
      await treve.print_and_wait('「ちゅる、ちゅる」と音がする。');
      await you.say_and_wait(`くそ、出すぞ、トレヴ！`);
      await treve.print_and_wait(`私は脚を${you.sex}の腰に絡め、きつく抱く。`);
      await treve.print_and_wait('逃げるな、全部子宮へ注いで。');
      await treve.print_and_wait(
        `${you.sex}の亀頭と、私の子宮口はとても合う。`,
      );
      await treve.print_and_wait('全部私に任せて、一滴も逃さない、全部……');
      await treve.print_and_wait(`脚を締め、${you.sex}に肉棒を抜かせない。`);
      await treve.print_and_wait('人間程度の力で抵抗しても無駄よ？');
      await treve.print_and_wait(`${callname}、注精、完了。`);
      await you.say_and_wait(`……はあっ、トレヴ、アフターサービスは？`);
      await treve.print_and_wait(
        'はは、こんな最低な人を、どうして好きになったのかしら。',
      );
      await treve.print_and_wait(
        'でもわりと美味しいわ。仕方ない、掃除のフェラをしてあげる。',
      );
      await treve.print_and_wait('……足りない、足りない、足りない、足りない！');
      await treve.print_and_wait(
        `私は ${callname} の肩を掴んでひっくり返し、今度は私が上。`,
      );
      await you.say_and_wait('少し休ませてくれ？');
      await treve.print_and_wait(
        '冗談でしょう。あなたなら、何度でもできるはずよ？',
      );
      await treve.print_and_wait(
        '初めて騎乗位で搾る。色情動画の真似しかできない。',
      );
      await treve.print_and_wait('何度しても、慣れない。');
      await treve.print_and_wait(
        '尻を沈めて肉棒を体へ完全に埋めるだけで快感が滲み、意識が飛ばされる。',
      );
      await treve.print_and_wait(
        'さあ、あなたも弛めないで。がんばれ～がんばれ～もっと私を満たして。',
      );
      await treve.print_and_wait('あなたの肉棒で、私を殺して。');
      await treve.print_and_wait(
        '頭が普通に戻ったとき、太陽は完全に昇っていた。',
      );
      await treve.print_and_wait(`${callname}は息も続かない様子。`);
      await treve.print_and_wait(
        'そのあとも私は求め続け、体位を変えて連戦し、少し休めばまた続ける。',
      );
      await treve.print_and_wait(
        '口と膣に入れられた回数は、もう数えられない。',
      );
      await treve.print_and_wait(
        `尻も試したかったが、${callname} はそれは事前の準備が要ると言った。`,
      );
      await treve.print_and_wait('飢えと乾きは満たされた。でも……');
      await treve.print_and_wait(
        `私は ${callname} を再びベッドへ押し倒す。なぜなら：${you.sex}は朝勃ちしていた。`,
      );
      await treve.print_and_wait(
        `私は${you.sex}の乾いた口に、貪欲な口付けを重ねる。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 89-continue-confirm
  '89-continue-confirm': '두 번째 승부를 시작할까?',

  // [번역 대상] 99
  99: (() => {
    const title = "Ensemble, c'est tout（いっしょにいれば、それでいい）";
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const ret = [];
      await era.printAndWait([
        'ラブホテルに着くと、',
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' をベッドへ押し倒し、唇を重ねる。',
      ]);
      await era.printAndWait([
        '舌を絡められ、',
        you.get_colored_name(),
        ' は唾を流し込む。',
        treve.get_colored_name(),
        ' は徐々に受け入れ、自ら求め始める。',
      ]);
      await era.printAndWait(
        '混ざった唾が口元から滴っても気にせず、キスを続ける。',
      );
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' の首筋に吸い付き、赤い跡を残す。すべての印を加えるように。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の手が ',
        treve.get_colored_name(),
        ' の胸に触れ、ブラの上から捏ねる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は突然の刺激で声を出し、',
        you.get_colored_name(),
        ' は同時に二つの乳首を引く。',
      ]);
      await treve.say_and_wait('やああっ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は続けて手をスカートの中へ入れ、太ももを撫でたあと下着の中へ探る。',
      ]);
      await era.printAndWait([
        '割れ目を ',
        you.get_colored_name(),
        ' が撫でると、',
        treve.get_colored_name(),
        ' の体が震える。',
      ]);
      await treve.say_and_wait('触って……');
      await era.printAndWait([
        '望んだとおり、',
        you.get_colored_name(),
        ' の指が陰核に当たる。',
      ]);
      await era.printAndWait('包皮を剥かれ、敏感な部分を優しく愛撫される。');
      await treve.say_and_wait('あっ……はあっ……んっ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' のもう一方の手がまた ',
        treve.get_colored_name(),
        ' の胸へ入り、乳輪のまわりを撫でる。',
      ]);
      await era.printAndWait('指先で円を描き、少しずつ中心へ向かう。');
      await era.printAndWait(
        'ようやく乳首に達すると、親指と人差し指で軽く押し、転がし、あるいは爪を立てる。',
      );
      await treve.say_and_wait('待、そこ！');
      await era.printAndWait('好きなのに。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は攻め続け、',
        treve.get_colored_name(),
        ' の頭がぼやけて何も考えられなくなるまで。',
      ]);
      await era.printAndWait([
        'そして、我に返ると、',
        treve.get_colored_name(),
        ' は自分で太ももを開いていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は満足げに下着を脱がせる。',
      ]);
      await era.printAndWait([
        'このあとを期待しているのか、',
        treve.get_colored_name(),
        ' の子宮はずっとざわついている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がズボンを脱ぎ、すでに勃起したそれを見せると、',
        treve.get_colored_name(),
        ' は小さく絶頂する。',
      ]);
      await era.printAndWait('怖くても、逃げない。');
      if (!era.get('status:205:经期')) {
        era.print('避妊する？');
        era.printButton('避妊薬を飲ませる', 1);
        era.printButton('生で中出し！', 2);
        ret.push(await era.input());
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' は自分の陽物を掴み、',
        treve.get_colored_name(),
        ' の膣口へ近づけ、ゆっくり挿入する。',
      ]);
      await era.printAndWait(
        '亀頭が入ると、愛液が潤滑になり、肉棒全体が一気に奥まで入る。',
      );
      await treve.say_and_wait('ああああ！だめ！！');
      await era.printAndWait([
        '根元近くまで飲み込んだのを確かめ、',
        you.get_colored_name(),
        ' は動き始める。',
      ]);
      await treve.say_and_wait('あっ！あっ！激しい……');
      await era.printAndWait([
        '腰に当たるたびにぱんという音がし、膣壁を擦られ、',
        treve.get_colored_name(),
        ' は快感の中で喘ぐしかない。',
      ]);
      await era.printAndWait(
        `肉棒の動きに合わせ、${treve.sex}の体が上下する。`,
      );
      await era.printAndWait([
        '表情の管理もすでに崩れているが、',
        treve.get_colored_name(),
        ' はもう気にしていない。',
      ]);
      await treve.say_and_wait('いく！いく！あああ！！');
      await era.printAndWait([
        you.get_colored_name(),
        ' のスパートで、二人は同時に頂点を迎え、温かい因子が ',
        treve.get_colored_name(),
        ' の沈んだ子宮を満たす。',
      ]);
      await era.printAndWait([
        '射精は長く続き、そのあいだ ',
        treve.get_colored_name(),
        ' の子宮は亀頭に口付けされながら精液を注がれる。',
      ]);
      await era.printAndWait([
        'やがてすべて出し切ると、',
        you.get_colored_name(),
        ' は肉棒を抜く。同時に、白濁が逆流する。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' が自分の腹を見ていると、',
        you.get_colored_name(),
        ' がまた彼女の上へ圧し掛かる。',
      ]);
      await era.printAndWait('唇が重なり、舌が絡む。');
      await era.printAndWait([
        '熱いキスをしばらく続けたあと、',
        you.get_colored_name(),
        ' は再び元気を取り戻したそれを押し付ける。',
      ]);
      await treve.say_and_wait('あっ、だめ……');
      await era.printAndWait([
        'だめなことなどない。',
        you.get_colored_name(),
        ' は再びピストンを始める。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に強引に犯される ',
        treve.get_colored_name(),
        ' は必死に抵抗するが、力が入らない。',
      ]);
      await era.printAndWait([
        '膣内の抽送が激しくなり、口も ',
        you.get_colored_name(),
        ' の舌に蹂躙される。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の背中をきつく抱き、体を快楽に任せる。',
      ]);
      await treve.say_and_wait('まったく……私、どうなってもいいの……');
      await era.printAndWait([
        'そんな ',
        treve.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は満足げな笑顔を見せる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は両脚で ',
        you.get_colored_name(),
        ' の背を抱え、',
        you.get_colored_name(),
        ' を逃さない。',
      ]);
      await treve.say_and_wait('んっ！出して、全部ちょうだい。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は亀頭を子宮口に密着させたまま精子を吐く。',
      ]);
      await treve.say_and_wait('ほぉ……あっ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' の射精はまだ続き、脈打つたび ',
        treve.get_colored_name(),
        ' の体も痙攣する。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' の小さな子宮が裂けそうな量だと感じさせるほど出し、ようやく解放が終わる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は肉棒をゆっくり抜く。',
      ]);
      await treve.say_and_wait('もう一度、いかせて……');
      await era.printAndWait([
        'そう言う ',
        treve.get_colored_name(),
        ' は、顔を ',
        you.get_colored_name(),
        ' の肉棒へ擦り寄せる。',
      ]);
      await era.printAndWait('そのまま舌を出し、亀頭を口に含む。');
      await era.printAndWait('尿道に残ったものまで吸い尽くす。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉棒は再びきれいに勃起し、',
        treve.get_colored_name(),
        ' に自分の秘所へ移される。',
      ]);
      await treve.say_and_wait('今度は後ろから……');
      await era.printAndWait('這い、後背の姿勢になる。');
      await treve.say_and_wait('あっ！これだめ、突く場所が違う……');
      await era.printAndWait('膣内の襞、一枚一枚が擦られる。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の激しすぎる動きで、',
        treve.get_colored_name(),
        ' は腕の支えが崩れ、尻を突き出した形になる。',
      ]);
      era.printButton('「トレヴのそこは気持ちいい。きつくて最高だ。」', 1);
      await era.input();
      await era.printAndWait([
        '腰を打ち付けるたび、',
        treve.get_colored_name(),
        ' の体が震える。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は腹を攻めるように、膣壁に沿って上へ押す。',
      ]);
      await era.printAndWait([
        'Gスポットを突かれた ',
        treve.get_colored_name(),
        ' は、全身に電流が走ったように感じる。',
      ]);
      await treve.say_and_wait('そこ！だめ……また来る！');
      await treve.say_and_wait('いく！出して！中に出して。');
      await era.printAndWait([
        '絶頂と同時に ',
        you.get_colored_name(),
        ' に中出しされ、熱い因子汁を注がれる。',
      ]);
      era.drawLine();
      await era.printAndWait([
        'しばし休み、',
        you.get_colored_name(),
        ' にサプライズだと言う ',
        treve.get_colored_name(),
        ' は、小走りで傍らの更衣室へ入る。',
      ]);
      await era.printAndWait([
        'しばらくして、',
        treve.get_colored_name(),
        ' の小さな頭が更衣室の扉の隙間から弾ける。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には不安げな顔が見える。片手で扉の縁を強く支えている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は手を伸ばし、',
        treve.get_colored_name(),
        ' の口を覆う小さな手を掴み、引き寄せて後ろへ捻る。',
      ]);
      await era.printAndWait([
        '小さな手が口を離れた瞬間、',
        treve.get_colored_name(),
        ' の、舌を出して熱い息を吐く小さな口が露わになる。',
      ]);
      await era.printAndWait([
        '声を抑えきれないのを恐れているのか、',
        treve.get_colored_name(),
        ' は急いで下唇を噛む。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を叩く。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が彼女を放すと、',
        treve.get_colored_name(),
        ' は雌犬のように両手を床につき、首には目立って黒い革の首輪がある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は鎖を強く引き、',
        treve.get_colored_name(),
        ' の上半身全体を無理に反らせる。',
      ]);
      await era.printAndWait([
        '窒息は ',
        treve.get_colored_name(),
        ' の両頬を赤くし、両手で絶望的に首輪を引っ掻いて無駄に外そうとするだけでなく、快感の刺激も直線的に上げる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は両脚を震わせ、淫液が精液を巻き込んで何度も溢れ、太ももを伝って股間を完全に濡らす……',
      ]);
      await era.printAndWait([
        '加虐の性向を満たした ',
        you.get_colored_name(),
        ' が鎖を緩めると、精も根も尽きた ',
        treve.get_colored_name(),
        ' は床に跪き、大きく息をする。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の命令で小さな顔を床に付け、',
        you.get_colored_name(),
        ' に尻を高く上げ、二本の指で赤く腫れた両陰唇を開き、さっき中出しされたそこを ',
        you.get_colored_name(),
        ' に見せる。',
      ]);
      await era.printAndWait([
        '精液が少しずつ床へ滑り落ち、',
        you.get_colored_name(),
        ' は十分に満足する。',
      ]);
      era.printButton('「賢い犬なら、次に何をすべきか分かるだろう。」', 1);
      await era.input();
      await treve.say_and_wait(
        '私のオナホール蜜穴に、あなたの高貴な精液を注いでください❤️～',
      );
      await era.printAndWait([
        '啄むような口付けとともに、',
        you.get_colored_name(),
        ' の肉棒は再び、愛馬への侵犯を始める。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
