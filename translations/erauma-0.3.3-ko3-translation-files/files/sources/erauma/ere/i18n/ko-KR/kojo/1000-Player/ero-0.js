// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const unexpected_pregnant_enum = require('#/data/ero/status-const')["unexpected_pregnant_enum"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/1000-Player/ero-0"),

  // [번역 완료] become_erect
  become_erect(chara, supporter, you, penis_desc) {
    era.print([
      chara.get_colored_name(),
      '과(와) ',
      supporter.get_colored_name(),
      '의 봉사를 받자, ',
      you.get_colored_name(),
      '의 ',
      penis_desc,
      ' 육봉은 금세 단단하게 발기했다.',
    ]);
  },

  // [번역 완료] bt_cum_in
  bt_cum_in: '사정한다!',

  // [번역 완료] bt_cum_not
  bt_cum_not: '조금 더 참는다',

  // [번역 완료] get_cum_on_body
  get_cum_on_body: (target) => `${target}의 몸에 사정한다!`,

  // [번역 완료] get_cum_on_face
  get_cum_on_face: (targets) => `${targets}의 얼굴에 사정한다!`,

  // [번역 완료] have_baby_with_child
  async have_baby_with_child(you, father) {
    if (era.get(`love:${father.id}`) >= 90) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 병상에 누워 자신이 낳은 아이를 바라보며 멍하니 아버지를 떠올렸다.',
      ]);
      await era.printAndWait([
        '이렇게 짧은 사이에, ',
        father.get_colored_name(),
        '이(가) 그렇게 빨리 자라 여성（',
        you.get_colored_name(),
        '）에게 아이를 낳게 할 나이가 되리라고는 생각도 못 했다.',
      ]);
      await era.printAndWait([
        '마침 그 생각을 하자, ',
        father.get_colored_name(),
        '이(가) 방으로 뛰어 들어왔다. 한때 자신의 품에서 젖을 먹던 아이의 지금 뒷모습을 보며, ',
        you.get_colored_name(),
        '은(는) 얼굴을 붉히고 가슴이 뛰는 것을 막을 수 없었다.',
      ]);
      await era.printAndWait([
        '어머니이기보다, ',
        you.get_colored_name(),
        '은(는) ',
        father.get_colored_name(),
        '의 연인으로 있는 행복을 선택했다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아이를 안고 걱정을 떨치지 못했다. ',
        father.get_colored_name(),
        '과(와)의 근친 관계에서 태어난 아이다. 이 아이의 앞날을, ',
        you.get_colored_name(),
        '은(는) 걱정하지 않을 수 없었다.',
      ]);
      await era.printAndWait([
        '그때 ',
        father.get_colored_name(),
        '과(와)…… ',
        you.get_colored_name(),
        '은(는) 그렇게 중얼거리고 싶었지만 말로 꺼낼 수 없었다.',
      ]);
      await era.printAndWait(
        '어머니로서의 애정과 연인으로서의 애정이 뒤섞여, 본인조차 구분할 수 없는 감정이 되어 있었다.',
      );
      await era.printAndWait([
        '이윽고 그 감정은 응석 섞인 꾸지람이 되어, 뒤늦게 찾아온 ',
        father.get_colored_name(),
        '에게 쏟아졌다.',
      ]);
    }
  },

  // [번역 완료] have_baby_with_fuck_buddy
  have_baby_with_fuck_buddy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await era.printAndWait([you.get_colored_name(), '은(는) 아이를 안아 올렸다——']);
      era.printButton('아이의 아버지를 무시한다', 1);
      era.printButton(`${father.sex}도 함께 보자`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          father.get_colored_name(),
          '을(를) 바라보는 눈은 공허했지만, 아이를 볼 때는 자애가 떠올랐다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 망설인 끝에 손짓해 ',
          father.get_colored_name(),
          '을(를) 가까이 오게 했다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 기뻐하며 ',
          you.get_colored_name(),
          '을(를) 끌어안고, 둘이 함께 잠든 아이를 달랬다.',
        ]);
      }
    };
    f.title = '새로운 생명';
    return f;
  })(),

  // [번역 완료] orgasm_denial
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), '은(는) 끝내 참지 못했다!']);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          '은(는) 음경을 빼고, ',
          ...targets,
          '의 얼굴을 향했다.',
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          '은(는) 음경을 빼고, ',
          ...targets,
          '의 몸을 향했다.',
        ]);
      }
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) 사정 충동을 일단 억눌렀다……',
      ]);
    }
  },

  // [번역 완료] report_preg_not_love
  report_preg_not_love: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (you, father, unexpected_pregnant) => {
      if (era.get('flag:惩戒力度') >= 2) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아랫배의 음문에 떠오른 임신 무늬를 바라보다 화장실로 뛰어가 토했다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손에 든 임신 테스트기를 바라보다 화장실로 뛰어가 토했다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 자신이 어떻게 임신했는지 전혀 기억하지 못했다. 누가 상대였어도 이상하지 않다고 생각하는 것만으로, ',
          you.get_colored_name(),
          '은(는) 소름이 돋았다……',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '……그런데도, ',
            you.get_colored_name(),
            '은(는) 아버지가 될 수도 있었을 텐데……',
          ]);
        }
      } else {
        await era.printAndWait([
          '짧은 혼란 끝에, ',
          you.get_colored_name(),
          '은(는) 역시 ',
          father.get_colored_name(),
          '에게 알리기로 했다.',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 몇 번이나 되물었지만, 아이가 자신의 피를 이었다는 대답은 달라지지 않았다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            father.get_colored_name(),
            '에게는 그 기억이 전혀 없었다……',
          ]);
        } else {
          await era.printAndWait([
            '마찬가지로 당황하다가 침착함을 되찾은 ',
            father.get_colored_name(),
            '은(는), ',
            you.get_colored_name(),
            '에게 아버지로서 책임을 다하겠다고 약속했다……',
          ]);
        }
      }
    };
    f.title = '뜻밖의 일';
    return f;
  })(),
};
