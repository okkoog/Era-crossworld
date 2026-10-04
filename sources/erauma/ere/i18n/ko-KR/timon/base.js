/**
 * @file 地下室の地の文
 * @author 露娜俘虏
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * 学園の救援隊に救出される
   * @param {CharaTalk} you
   * @param {number} fine
   */
  async school_rescue(you, fine) {
    await era.printAndWait([
      '肝を冷やす一週間のあと、',
      you.get_colored_name(),
      ' は学園の救援隊に地下室から救い出された……',
    ]);
    if (fine > 0) {
      await era.printAndWait(
        '……ただし、先週の欠勤に対する罰金として、預金の半分が差し引かれた。',
      );
    }
  },
  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  get_clock(hours, minutes, base_12 = false) {
    let p_hour;
    let p_minute;
    if (base_12) {
      if (hours < 12) {
        p_hour = '午前 ' + hours;
      } else {
        p_hour = `午後 ${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = ` ${minutes} 分`;
    } else {
      p_minute = "정각";
    }
    return `${p_hour} 時${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      "이(가) 방금 이곳으로 돌아왔다. 어쩌면 기습할 수 있는 절호의 기회일지도 모른다……",
    ];
  },
  /**
   * @author 露娜俘虏
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} security_level
   * @param {number} love_level
   * @param {boolean} is_fix
   */
  get_info_awake(chara, you, security_level, love_level, is_fix) {
    const ret = [chara.get_colored_name(), ' は'];
    switch (security_level) {
      case 1:
        ret.push('一時の衝動をすでに後悔している');
        break;
      case 2:
        ret.push('ひどく緊張し、落ち着きを失っている');
        break;
      case 3:
        ret.push('執念が根を張り始めている');
        break;
      case 4:
        ret.push('決意を、到底甘く見られない');
        break;
      case 5:
        ret.push('心の守りがすでに万全だ');
        break;
    }
    ret.push('……');
    switch (love_level) {
      case 0:
        ret.push(chara.sex, 'にはほかの用事もあり、すぐに立ち去るだろう');
        break;
      case 1:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' をじっと見つめ、そう簡単には離れないつもりらしい',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' を食い入るように見つめ、そう簡単には離れないつもりらしい',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' に微笑み、',
          you.get_colored_name(),
          ' のもとから去る気はなさそうだ',
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          'の顔は心碎で歪み、',
          you.get_colored_name(),
          ' のもとから離れる気配はない',
        );
    }
    ret.push('……');
    if (is_fix) {
      ret.push("현재 지하실을 보강하는 중이다……");
    }
    return ret;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_sleep: (chara) => [
    chara.get_colored_name(),
    // STATUSNAME:39 = 马跳S
    era.get(`status:${chara.id}:39`) > 0 ? "이(가) 깊은 " : "이(가) 고요한 ",
    "잠에 빠져 있다……",
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      '어느 정도의 시간이 흘렀을까, ',
      you.get_colored_name(),
      '은(는) 간소한 침대 위에서 가느다랗게 의식을 되찾았다……',
    ]);
    era.print('눈에 들어오는 것은 낯선 천장이다……');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        "어느 정도의 시간이 흘렀을까, ",
        you.get_colored_name(),
        "은(는) 간소한 침대 위에서 가느다랗게 의식을 되찾았다……",
      ]);
      era.print([
        '目の前は見知らぬ天井……と、微笑む ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        "이제 ",
        you.get_colored_name(),
        "은(는) 이 사랑의 감옥에 갇힌 죄수가 되었고…… ",
        chara.get_colored_name(),
        "은(는) 유일한 간수가 되었다……",
      ]);
    } else {
      era.print([
        "어느 정도의 시간이 흘렀을까, ",
        you.get_colored_name(),
        "은(는) 천천히 깨어났다……",
      ]);
      era.print([
        '目の前は、相変わらず見知らぬ天井……と、微笑む ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '囚人と、',
        you.sex,
        '唯一の看守は、ついにこの愛の牢獄で顔を合わせた……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_success(you) {
    await era.printAndWait([
      you.get_colored_name(),
      '의 기습이 성공했다! 지하실에서 무사히 탈출하였다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      '의 기습은 실패로 돌아갔다! 충격으로 인해 정신을 잃고 쓰러졌다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_success(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) ',
      chara.get_colored_name(),
      '에게 시도한 반항이 성공하였다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_fail(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '의 반항은 실패하였다! ',
      chara.get_colored_name(),
      '에 의해 제압당해 의식을 잃었다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 성공적으로 장치를 해제하고, 지하실에서 탈출하였다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      '그러나 ',
      you.get_colored_name(),
      '은(는) 끝내 장치를 풀어내지 못했다……',
      { isBr: true },
      you.get_colored_name(),
      '은(는) 다시 붙잡혀 지하실 깊숙한 곳으로 끌려갔다……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} out_of_prison
   * @param {boolean} s_level_up
   * @param {boolean} [is_back]
   */
  find_escape(chara, you, out_of_prison, s_level_up, is_back) {
    if (out_of_prison) {
      era.print([
        you.get_colored_name(),
        '은(는) 막 ',
        is_back ? '돌아온 ' : '깨어난 ',
        ' ',
        chara.get_colored_name(),
        '와 정면으로 마주치고 말았다!',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '의 탈출 시도가 현장에서 발각되었다!',
      ]);
    }
    era.print([
      '격노한 ',
      chara.get_colored_name(),
      '이(가) ',
      you.get_colored_name(),
      '을(를) 억지로 끌고 되돌아갔다!',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        '의 ',
        you.get_colored_name(),
        '에 대한 경계심이 한층 더 강해졌다……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([chara.get_colored_name(), '이(가) 지하실의 설비를 보강하였다……']);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '깊은 잠에서 깨어난 지하실의 주인, ',
        chara.get_colored_name(),
        '이(가) 마침내 모습을 드러냈다. ',
        you.get_colored_name(),
        '와 함께할 시간을 즐기려는 듯하다……',
      ]);
    } else {
      era.print([chara.get_colored_name(), '은(는) 천천히 눈을 떴다……']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  back_basement(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '긴 기다림 끝에, 이 지하실의 주인인 ',
        chara.get_colored_name(),
        '이(가) 마침내 나타났다. 이제 ',
        you.get_colored_name(),
        '과(와) 둘만의 시간을 보낼 생각인 모양이다……',
      ]);
    } else {
      era.print([chara.get_colored_name(), '이(가) 지하실로 돌아왔다……']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   */
  async rape(chara, you, supporter) {
    if (supporter) {
      await era.printAndWait([
        chara.get_colored_name(),
        '의 뒤를 따라, ',
        supporter.get_colored_name(),
        '이(가) 함께 ',
        you.get_colored_name(),
        '에게 천천히 다가왔다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '에게 소리 없이 다가왔다……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_agree(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 미안함이 서린 얼굴로 ',
      you.get_colored_name(),
      '의 요청을 받아들였다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '의 머리를 쓰다듬으며, 별일 아니라는 듯 미소 지어 보였다.',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_reject(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 엷은 미소를 띤 채 ',
      you.get_colored_name(),
      '의 요청을 부드럽게 거절하였다.',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('지금이 몇 시냐구?');
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 그저 생긋 웃으며 ',
      you.get_colored_name(),
      '을(를) 바라볼 뿐이었다.',
    ]);
  },
  rescue_fail_awake: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     */
    const f = async (chara, you, owner) => {
      await era.printAndWait([
        chara.get_colored_name(),
        "이(가) ",
        owner.get_colored_name(),
        ' が丹念に仕組んだ地下室へ踏み込んだが、最愛の ',
        you.get_colored_name(),
        "을(를) 구출하는 데는 실패하였다……",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 절망적인 시선 속에서, ",
        chara.get_colored_name(),
        "은(는) ",
        owner.get_colored_name(),
        "에 의해 지하실 밖으로 쫓겨나고 말았다……",
      ]);
    };
    f.title = "마지막 순간의 실패";
    return f;
  })(),
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rescue_fail_sleep(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      "은(는) 격렬한 격투 소리에 잠에서 깨어났다.",
    ]);
    await era.printAndWait([
      "지하실 안은 엉망진창이었으나, 상처 하나 없는 ",
      chara.get_colored_name(),
      "이(가) 여전히 ",
      you.get_colored_name(),
      "를 향해 미소 짓고 있었다……",
    ]);
  },
  rescue_sneak_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          owner.get_colored_name(),
          o_awake ? ' の不在を狙い、' : ' が熟睡しているあいだに、',
          chara.get_colored_name(),
          ' は地下室へ潜り込み、',
          you.get_colored_name(),
          ' を支えて悠々と去っていった……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 비몽사몽한 와중에 자신이 어디론가 옮겨지고 있다는 느낌을 받았다.",
        ]);
        await era.printAndWait([
          '目を覚ますと、すでにトレーナー室にいた。眼前では ',
          chara.get_colored_name(),
          ' が微笑んでいる。',
        ]);
      }
    };
    f.title = "영웅의 구출";
    return f;
  })(),
  rescue_sneak_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          owner.get_colored_name(),
          o_awake ? ' の不在を狙い、' : ' が熟睡しているあいだに、',
          chara.get_colored_name(),
          ' は地下室へ潜り込み、',
          you.get_colored_name(),
          ' を支えて悠々と去っていった……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 일상으로 돌아갈 수 있다고 안도한 찰나, ",
          chara.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          ' を支えたまま別の場所へ連れていき、それから小さな音がした……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 비몽사몽한 와중에 자신이 어디론가 옮겨지고 있다는 느낌을 받았다.",
        ]);
        await era.printAndWait([
          "눈을 뜨니 여전히 지하실이었으나, 구조가 이전과는 확연히 달랐다. 그리고 그 앞에는 미소 짓는 ",
          chara.get_colored_name(),
          "이(가) 서 있었다.",
        ]);
      }
      await era.printAndWait("「철컥」", { fontSize: '1.5rem' });
    };
    f.title = "호랑이 굴을 벗어나니……";
    return f;
  })(),
  rescue_join: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          "이(가)  ",
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          "과(와) 대치하였다.",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 큰 싸움이 벌어질 것이라 예상했으나, ",
          chara.couple_title,
          "은 놀랍게도 서로의 손을 맞잡고 타협하였다……",
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 몽롱한 의식 속에서 깨어났을 때, 지하실 안에는 자신과 ",
          owner.get_colored_name(),
          "외에 제3의 인물인 ",
          chara.get_colored_name(),
          "이(가) 함께 있는 것을 발견하였다.",
        ]);
      }
      await era.printAndWait([
        "이제 이 비좁은 지하실과 그 안에 갇힌 ",
        you.get_colored_name(),
        "에게는, 두 명의 주인이 생기고 말았다……",
      ]);
    };
    f.title = "하늘 아래 두 개의 태양";
    return f;
  })(),
  rescue_battle_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          "이(가) ",
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          "을(를) 바닥에 쓰러뜨렸다……",
        ]);
        await era.printAndWait([
          owner.get_colored_name(),
          "의 시선이 머무는 가운데, ",
          chara.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "을(를) 부축해 당당히 현장을 떠났다……",
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 의식이 흐릿한 가운데 운반되는 감각을 느꼈다.",
        ]);
        await era.printAndWait([
          '目を覚ますと、すでにトレーナー室にいた。眼前では、服に皺が寄っているが、なお微笑む ',
          chara.get_colored_name(),
          ' が立っている。',
        ]);
      }
    };
    f.title = "영웅의 구출";
    return f;
  })(),
  rescue_battle_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          "이(가) ",
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          "을(를) 바닥에 쓰러뜨렸다……",
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "이(가) 일상으로 복귀할 수 있으리라 믿었던 순간, ",
          chara.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          ' を支えたまま別の場所へ連れていき、それから小さな音がした……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "은(는) 의식이 흐릿한 가운데 운반되는 감각을 느꼈다.",
        ]);
        await era.printAndWait([
          "깨어보니 여전히 지하실이었으나 구조가 달랐고, 그곳에는 옷이 조금 구겨진 채 여전히 웃고 있는 ",
          chara.get_colored_name(),
          "이(가) 서 있었다……",
        ]);
      }
      await era.printAndWait("「철컥」", { fontSize: '1.5rem' });
    };
    f.title = "호랑이 굴을 벗어나니……";
    return f;
  })(),
};
