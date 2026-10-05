/**
 * Korean port of already-translated EraUmaK 2.21 love text.
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: '관계 진전',
  update_no: '진전 보류',
  49: (() => {
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤, ',
        chara.get_colored_name(),
        '은(는) 격렬한 자위 도중 ',
        you.get_colored_name(),
        '의 이름을 부르며 절정에 달했다.',
      ]);
    };
    f.title = '애욕';
    return f;
  })(),
  '74-1': (() => {
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        '어느 날 밤, ',
        chara.get_colored_name(),
        '은(는) 자신이 ',
        you.get_colored_name(),
        '에게 단순한 관계를 넘어선 어떤 미묘한 감정을 품고 있음을 어렴풋이 깨달았다.',
      ]);
      await chara.print_and_wait(
        '하지만 그것은 과연 철없는 시절의 뒤늦은 첫사랑일까, 아니면 매일 함께 지내며 생긴 감정의 착각일까?',
      );
      era.printButton('「어쩌면 난 진심일지도 몰라……」(관계 진전)', 1);
      era.printButton('「아니야, 내가 너무 깊게 생각한 걸지도……」(진전 보류)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '을(를) 향한 자신의 사랑을 확실하게 자각했다.',
        ]);
        await chara.print_and_wait([
          '반드시 ',
          you.get_colored_name(),
          '에게 내 마음을 전해야 해……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 그런 각오를 다졌다.',
        ]);
      } else {
        await chara.say_and_wait('착각이겠지……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 고개를 젓고는 몸을 뒤척이며 천천히 잠에 빠져들었다……',
        ]);
      }
      return ret;
    };
    f.title = '연심';
    return f;
  })(),
  '74-2': (() => {
    const f = async (chara, you) => {
      const ret = [];
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          '트레이닝실로 돌아왔을 때 ',
          chara.get_colored_name(),
          '은(는) 긴장한 기색으로 ',
          you.get_colored_name(),
          '에게 사귀어 달라고 고백했다.',
        ]);
      } else {
        await era.printAndWait([
          '트레이닝실로 돌아왔을 때 ',
          chara.get_colored_name(),
          '은(는) 긴장한 기색으로 ',
          you.get_colored_name(),
          '을(를) 찾아와 사귀어 달라고 고백했다.',
        ]);
      }
      era.print([
        '어떻게 해야 할까? ',
        chara.get_colored_name(),
        '의 마음을 받아들여 연인이 될 것인가, 아니면 냉정하게 거절할 것인가?',
      ]);
      era.printButton('받아들인다. (관계 진전)', 1);
      era.printButton('거절한다. (진전 보류)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '의 긍정적인 대답을 듣자, ',
          chara.get_colored_name(),
          '의 긴장했던 얼굴이 사르르 풀리며 기쁨이 가득한 표정으로 변하더니, ',
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? ['', you.get_colored_name(), '의 품으로 뛰어들었다.']
            : ['', you.get_colored_name(), '을(를) 품에 꼭 끌어안았다.']),
        ]);
        await era.printAndWait([
          '이제부터 ',
          you.get_couple_title(),
          '은(는) 또 하나의 새로운 관계, 즉 연인이 되었다.',
        ]);
      } else {
        await era.printAndWait([
          '마음에 수많은 생각이 스쳤지만 ',
          you.get_colored_name(),
          '은(는) 끝내 ',
          you.get_couple_title(),
          '이 이어질 수는 없다고 판단했다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 아랫입술을 지그시 깨물며 온몸을 떨며 눈물을 참았다.',
        ]);
        await era.printAndWait([
          '최소한의 예의로서 ',
          you.get_colored_name(),
          `은(는) ${chara.sex}를 잘 달래주었고, 슬픔의 소나기가 그치고 안정을 찾을 때까지 곁에 있어 주었다.`,
        ]);
      }
      return ret;
    };
    f.title = '충동';
    return f;
  })(),
  '89-1': (() => {
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤 ',
        chara.get_colored_name(),
        '은(는) 자신과 ',
        you.get_colored_name(),
        '이(가) 다정하게 지내는 모습을 떠올리는 것만으로도 깊은 행복감을 느꼈다.',
      ]);
      await chara.print_and_wait([
        '관계를 한 걸음 더 진전시키고 싶어…… ',
        chara.get_colored_name(),
        '은(는) 마음에 그런 생각을 품게 되었다.',
      ]);
    };
    f.title = '동반';
    return f;
  })(),
  '89-2': (() => {
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        '어느 날, ',
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '를 데리고 밖으로 데이트를 나갔다.',
      ]);
      era.print([
        '하루 동안의 낭만적이고 따스한 시간을 함께 보낸 후, ',
        chara.get_colored_name(),
        '은(는) 확고한 각오가 서린 눈빛으로 ',
        you.get_colored_name(),
        '에게 결혼반지를 건넸다.',
      ]);
      era.printButton('받아들인다. (관계 진전)', 1);
      era.printButton('거절한다. (진전 보류)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손을 뻗어 반지를 받아들였다. ',
          you.get_couple_title(),
          '이 그동안 수많은 일을 겪어온 만큼 이제는 부부의 연을 맺을 때가 된 것이다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 기쁨에 겨워 ',
          you.get_colored_name(),
          '에게 깊고 뜨거운 입맞춤을 바쳤다. 이제 두 사람은 앞으로의 인생길을 함께 지탱하며, 부유하든 가난하든, 아프든 건강하든 죽음이 두 사람을 갈라놓을 때까지 영원히 함께할 것이다……',
        ]);
      } else {
        await era.printAndWait([you.get_colored_name(), '은(는) 반지를 받지 않았다……']);
        await era.printAndWait([
          { content: '그토록 많은 일을 함께 겪었음에도 불구하고, ' },
          you.get_colored_name(),
          '은(는) 이것이 과연 올바른 선택인지 확신할 수 없었다.',
        ]);
        await era.printAndWait(
          '도덕과 윤리, 인간관계, 사회적 책임…… 고려해야 할 일도, 두 사람을 옭아맬 장벽도 너무나 많았다.',
        );
        era.print([
          '하지만 실망감으로 가득 찬 ',
          chara.get_colored_name(),
          '의 표정을 바라보며, ',
          you.get_colored_name(),
          '도 속으로 은연중에 생각했다. 과연 그렇게 많은 것들을 재고 따질 필요가 있었을까……',
        ]);
      }
      return ret;
    };
    f.title = '맹세';
    return f;
  })(),
  '99-1': (() => {
    const f = async (chara, you) => {
      await chara.print_and_wait([
        '어느 날 밤, ',
        chara.get_colored_name(),
        '은(는) 침대 위에서 이리저리 뒤척이며 좀처럼 잠을 이루지 못했다.',
      ]);
      await chara.print_and_wait([
        chara.get_colored_name(),
        '의 머릿속은 온통 ',
        you.get_colored_name(),
        '이(가) 여러 가지 이유로 자신을 떠나버리는 광경으로 가득 찼고, 그런 비극적인 상상만으로도 ',
        chara.get_colored_name(),
        '은(는) 밀려오는 슬픔에 휩싸였다……',
      ]);
    };
    f.title = '악몽';
    return f;
  })(),
  '99-2': (() => {
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 그 누구보다도 먼저 트레이닝실에 도착해 ',
        you.get_colored_name(),
        '을(를) 꼭 껴안은 채 놓아주지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 영문을 몰라 어리둥절해하면서도 다정하게 달래주었고, 그제야 ',
        chara.get_colored_name(),
        '도 간신히 마음을 진정시켰다.',
      ]);
    };
    f.title = '의존';
    return f;
  })(),
};
