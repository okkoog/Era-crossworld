/**
 * @file 育成の地の文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry, join_list } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} races
   * @param {PrintedSpan} wins
   * @param {PrintedSpan} reward
   * @param {PrintedSpan[]} race_names
   */
  get_result_list(chara, races, wins, reward, race_names) {
    const ret = [];
    ret.push([
      chara.get_colored_name(),
      '의 생애, ',
      races,
      ' 전 ',
      wins,
      ' 승，총 상금 ',
      reward,
      ' 우마코인',
    ]);
    if (race_names.length > 0) {
      ret.push([
        '주요 승리: ',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '……' : '',
      ]);
    }
    return ret;
  },
  on_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait(
        `매년 1월, URA ${chara.uma_sex_title} 명예의 전당에서는 은퇴한 우마무스메들을 대상으로 투표를 시작한다.`,
      );
      era.println();
      await era.printAndWait(
        `그리고 3월이 되면, 레이스 커리어에서 큰 성과를 거둔 엄격한 투표를 통해 선발된 ${chara.uma_sex_title}는 명예의 전당에 헌액되며, 《현창${chara.uma_sex_title}》라는 최고의 영예를 얻게 된다.`,
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 우마무스메 ',
        chara.get_colored_name(),
        '——',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `${chara.sex}를 모델로 한 동상이 세워지고, `,
        ...title,
        chara.get_colored_name(),
        '의 전설은 영원히 전당에 남을 것이다...',
      ]);
    };
    f.title = '정상의 자리에 오르다';
    return f;
  })(),
  under_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait('유감스럽게도 명예의 전당에 헌액되지 못했다.');
      era.println();
      await era.printAndWait(
        'それでも、力の限り積み上げた成果は誇りであり、後に続く者がその肩の上からさらに高い頂を目指せると信じている。',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        chara.get_colored_name(),
        '의 전설은 영원히 세상에 전해질 것이다...',
      ]);
    };
    f.title = '명예의 전당 아래서';
    return f;
  })(),
  pl_future: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} can_sex
     */
    const f = async (chara, you, can_sex) => {
      await era.printAndWait([
        '時は白駒の隙を過ぐるがごとし。',
        chara.get_colored_name(),
        ' と過ごした歳月はすでに数年。もう少しすれば、新しい章が始まる。',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは睦まじく身を寄せ合った。',
        );
        await era.printAndWait(
          '두 연인은 행복한 둘만의 세계에 푹 빠져, 세상의 잡다한 일들을 모두 허공으로 날려버린 듯하다.',
        );
        era.println();
        await era.printAndWait('나는 세상의 왕이다! - 잭 도슨', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは熱く口づけを交わした。',
        );
        await era.printAndWait(
          '情欲の気配が部屋を満たし、甘い声と肌が触れ合う音だけが響き続ける。',
        );
        era.println();
        await era.printAndWait('食色、性なり。——孟子', { align: 'center' });
      } else {
        await era.printAndWait(
          '慣れ親しんだトレーナー室で、ふたりは楽しく語り合い、避けられない別れに胸を痛めた。',
        );
        await era.printAndWait(
          '인생에서 만남은 드문 일이며, 잃을 수도 있다는 사실 때문에 눈앞의 사람을 소중히 여기는 것이 그토록 중요한 것이다.',
        );
        era.println();
        await era.printAndWait('일기일회의 마음은, 오직 차의 모습에서만 볼 수 있다. - 센노 리큐', {
          align: 'center',
        });
      }
    };
    f.title = '그 후, 미래를 향해';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} attr
   */
  async train(chara, you, attr) {
    const chara_name = chara.get_colored_name();
    if (!chara.id) {
      chara_name.content = '자신';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          '스피드 향상을 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 달리기 트레이닝을 시키기로 했다...',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          '스태미나 향상을 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 수영을 시키기로 했다...',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          '파워 향상을 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 근력 운동을 시키기로 했다...',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '근성 향상을 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 오르막 트레이닝을 시키기로 했다...',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          '지능 향상을 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 레이스 녹화를 보게 했다...',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), '의 훈련이 무사히 끝났다!']);
  },
  ts_add: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 여운이 남은 것 같습니다，자율 트레이닝을 허가할까요?',
      ]);
      era.printButton('허가!', 1);
      era.printButton('이 이상의 트레이닝은 좀...', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          `의 자율 트레이닝을 허락했고 ${chara.sex}의 열정을 칭찬했다.`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '의 자율 트레이닝을 금지했고 푹 쉬라고 당부했다.',
        ]);
      }
      return ret;
    };
    f.title = '열혈의 추가 트레이닝!';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  async tf_info(chara, attr, is_fumble) {
    if (attr === attr_enum.intelligence) {
      await era.printAndWait([
        '이런! ',
        chara.get_colored_name(),
        `은(는) ${is_fumble ? '기절했' : '잠들었'}다!`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push('미끄러졌다', '바닥에 넘어졌다', '기력이 다했다');
          break;
        case attr_enum.endurance:
          buffer.push('경련이 일어났다');
          break;
        case attr_enum.strength:
          buffer.push('눈에 진흙이 들어갔다', '넘어졌다', '샌드백에 반격당했다');
          break;
        case attr_enum.toughness:
          buffer.push('기력이 다했다', '허리를 삐었다', '굴러떨어졌다');
      }
      await era.printAndWait([
        '이런! ',
        chara.get_colored_name(),
        '은(는) ',
        get_random_entry(buffer),
        '！',
      ]);
    }
  },
  train_fail: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 트레이닝에 실패했다...',
      ]);
      era.println();
      era.print('어떻게 할까?');
      era.println();
      era.printButton('「일단 좀 쉬어가는 게 좋겠어.」', 1);
      era.printButton('「反省会だ！」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '트레이닝실에서...';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 트레이닝에 실패했다...',
      ]);
      era.println();
      era.print('어떻게 할까?');
      era.println();
      era.printButton('「충분히 쉬어야 해!」', 1);
      era.printButton('「끈기로 극복하자!」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '보건실에서...';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print([
        '【',
        chara.get_colored_name(),
        ' は練習が楽になってきたと感じた】',
      ]);
    } else {
      era.print([
        '【',
        chara.get_colored_name(),
        ' は練習が厳しくなってきたと感じた】',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_success
   */
  async foreign_study(chara, you, is_success) {
    if (!chara.id) {
      await era.printAndWait([
        '最低限の外国語で会話できるよう、',
        you.get_colored_name(),
        ' はホテルの部屋で勉強した……',
      ]);
    } else {
      await era.printAndWait([
        '最低限の外国語で会話できるよう、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' にホテルの部屋での勉強を組んだ……',
      ]);
    }
    if (is_success) {
      await era.printAndWait('벼락치기인데 효과가 있었다!');
    } else {
      await era.printAndWait([
        '이런! ',
        chara.get_colored_name(),
        '은(는) 자고 있다!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([chara.get_colored_name(), '은(는) ', language, '를 배웠다!']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      '의 ',
      language,
      ' 실력이 더 능숙해져 현재 ',
      new_level,
      ' 이다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_rest(chara, you) {
    await era.printAndWait([
      '調子を戻すため、',
      you.get_colored_name(),
      ' は現地の理学療法を手配し、ホテルで体を整えた……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '의 체력이 서서히 회복되는 것 같다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      '現地のコースに慣れるため、',
      you.get_colored_name(),
      ' はトレーニング場での適応走を組んだ……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 현지 경기장에 점점 익숙해지는 것 같다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} loc_name
   */
  async foreign_travel(chara, you, loc_name) {
    await era.printAndWait([
      '気分をほぐすため、',
      you.get_colored_name(),
      ...(chara.id > 0
        ? [' は ', chara.get_colored_name(), ' と一緒に']
        : [' はひとりで']),
      loc_name,
      'を観光した……',
    ]);
    await era.printAndWait('돈은 꽤 들었지만 그만한 가치가 있었다!');
  },
  race_start: (() => {
    /**
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {number} item
     * @param {boolean} do_sex
     */
    const f = async (chara, you, item, do_sex) => {
      if (!item) {
        /** @author 雞雞 */
        const buffer = [
          async () => await you.say_and_wait('全力を出せばいい！'),
          async () => await you.say_and_wait('自分の走りを見せろ！'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          ' は自ら ',
          chara.get_colored_name(),
          ' にいくつかの「特別な装備」を取り付けた。',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              ' は愛らしく ',
              you.get_colored_name(),
              ' を睨み、ふたりの秘密を服の下に隠して、スタートラインへ歩いていった……',
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              ' は素直に服を整え、透ける薄桃色の光が下腹と流し目に重なる……',
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              ' はゆっくり服を着直し、玩具が体から外れないよう確かめた……',
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              ' はそっと ',
              you.get_colored_name(),
              ' の表情を窺い、それから俯いて刺激に耐えた……',
            ]);
        }
      }
    };
    f.title = '레이스 전에';
    return f;
  })(),
  race_end_item_win: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は頬を赤らめた ',
        chara.get_colored_name(),
        ' を出迎え、休憩室へ案内した。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' は入るなり解放されたような甘い声を漏らし、',
        you.get_colored_name(),
        ' は急いで扉を閉め、すべての性玩具を止めた。',
      ]);
      await era.printAndWait([
        'そのあと、',
        you.get_colored_name(),
        ' は腕の中で体を擦り寄せる ',
        chara.get_colored_name(),
        ' に、あとできちんと甘やかすと約束し、白昼の過ちだけは避けた。',
      ]);
    };
    f.title = '감정이 고조된 승리';
    return f;
  })(),
  race_end_item_lose: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' はうなだれた ',
        chara.get_colored_name(),
        ' を出迎え、休憩室へ案内した。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' は力なくその場に崩れた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は空気を読んで性玩具を止め、静かに声をかけた。',
      ]);
    };
    f.title = '예상대로의 패배';
    return f;
  })(),
  race_end_win: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '대단해!' : '더 높은 목표를 향해 나아가자!',
      );
    };
    f.title = '레이스 승리';
    return f;
  })(),
  race_end_5: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '오늘도 정말 잘했어!'
          : '절대 저 녀석들에게 지지 말자!',
      );
    };
    f.title = '레이스 입상';
    return f;
  })(),
  race_end_10: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '다음 번에는 분명 더 잘할 거야!'
          : '낙담해 봤자 소용없어!',
      );
    };
    f.title = '레이스 패배';
    return f;
  })(),
  race_end_lose: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '언젠가는 반드시 이길 거야!'
          : '계속 이렇게 망신당하고 싶니?',
      );
    };
    f.title = '다음 번에는 절대 지지 않겠어!';
    return f;
  })(),
  summer_start: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '여름 하면 수영복과 해변이다. 물론',
        chara.get_colored_name(),
        '과(와) ',
        you.get_colored_name(),
        '은(는) 해변으로 휴가를 온 동시에 트레이닝도 소홀히 하지 않았다. ',
      ]);
    };
    f.title = '여름 합숙';
    return f;
  })(),
};
