const era = require('#/era-electron');

const { sys_get_ero_image } = require('#/system/ero/sys-calc-ero-image');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { get_progress_bar } = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');
const MejiroCity = require('#/page/mejiro/mejiro-common');
const print_ero_page = require('#/page/page-ero');

const cum_shop = require('#/event/others/mejiro-kindness/cum-shop');
const MejiroEvents = require('#/event/others/mejiro-kindness/mejiro-events');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { vehicle_names } = require('#/data/move-const');

class CallOfMejiro extends MejiroCity {
  /**
   * 被呼唤的伴侣
   * @returns {number}
   */
  get called() {
    return this.var.called || 0;
  }

  /**
   * 被呼唤的伴侣ID
   * @param {number} v
   */
  set called(v) {
    if (!v) {
      delete this.var.called;
    } else {
      this.var.called = v;
    }
  }

  /**
   * 伴侣的SAN值
   * @returns {number}
   */
  get san() {
    return this.var.san || 0;
  }

  /**
   * 伴侣的SAN值
   * @param {number} v
   */
  set san(v) {
    if (!v) {
      delete this.var.san;
    } else {
      this.var.san = v;
    }
  }

  /**
   * 每周出行限制
   * @returns {number}
   */
  get limit() {
    return this.var.limit || 0;
  }

  /**
   * 每周出行限制
   * @param {number} v
   */
  set limit(v) {
    if (!v) {
      delete this.var.limit;
    } else {
      this.var.limit = v;
    }
  }

  get_want_sex_buff(cid) {
    return this.called === cid;
  }

  get_rape_buff(cid) {
    if (cid === this.called) {
      return 0.5;
    }
    return 0;
  }

  get_positions(cid, p_base, c_base) {
    const ret = super.get_positions(cid, p_base, c_base);
    const mejiro_button = ret.find((e) => e.l === location_enum.mejiro);
    if (this.called > 0) {
      if (this.called === cid) {
        if (this.san === 0) {
          mejiro_button.a = 5;
          if (mejiro_button.t || (mejiro_button.t = '')) {
            mejiro_button.t += '\n';
          }
          mejiro_button.t += '메지로가 부르고 있다……';
          /** @type {{[a]:number,s:number,d:boolean,l:number,n:string,[t]:string}[]} */
          const ret = new Array(5)
            .fill(undefined)
            .map(() => ({ ...mejiro_button }));
          if (Math.random() < 0.05) {
            ret[0].n = '메';
            ret[1].n = '지';
            ret[2].n = '로';
            ret[3].n = '가';
            ret[4].n = '부른다';
          }
          return ret;
        }
      } else {
        mejiro_button.d = true;
        if (mejiro_button.t || (mejiro_button.t = '')) {
          mejiro_button.t += '\n';
        }
        mejiro_button.t += '메지로는 이 사람을 부르지 않았다……';
      }
    } else if (cid >= 340 && cid <= 342) {
      mejiro_button.d = true;
      if ((mejiro_button.t ||= '')) {
        mejiro_button.t += '\n';
      }
      mejiro_button.t += '메지로는 세 여신 아래에 있지 않을지 몰라도, 결코 그 위에 있지는 않다……';
    }
    if (this.limit === 0) {
      mejiro_button.d = true;
      if ((mejiro_button.t ||= '')) {
        mejiro_button.t += '\n';
      }
      mejiro_button.t += '이번 주에는 메지로 시티를 찾을 수 없다……';
    }
    return ret;
  }

  async page(cid) {
    this.limit--;
    const chara = get_chara_talk(cid);
    const me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 메지로 시티에 들어갔다……',
    ]);
    if (era.get('item:「은총」') === 0 || (this.called > 0 && this.san === 0)) {
      await era.printAndWait('……갑자기 안개가 당신들을 삼켰다……');
      if (this.called > 0) {
        if (EventMarks.get(this.called).get(event_hooks.out_mejiro) > 0) {
          EventMarks.get(this.called).sub(event_hooks.out_mejiro);
        }
        this.called = 0;
      }
      await this.misty(chara, me);
    } else {
      await this.city(chara, me);
    }
  }

  /** @param {CharaTalk} chara */
  page_header(chara) {
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: get_progress_bar(),
        config: { width: 16 },
      },
      {
        columns: [
          {
            content: [
              chara.get_colored_name(),
              '과(와) 함께 ',
              {
                content: '메지로 시티',
                fontWeight: 'bold',
              },
              ' 에 있음',
            ],
            type: 'text',
          },
        ],
        config: { width: 8 },
      },
    );
  }

  /**
   * 外场：正常的目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async city(chara, me) {
    await cum_shop.call(this, chara, me);
  }

  /**
   * 内场：迷雾笼罩的目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async misty(chara, me) {
    let flag = true;
    let temp;
    let difficulty = 1;
    if ((temp = era.get('item:「빚」')) > 0) {
      difficulty += Math.min(Math.floor(Math.log(temp + 1) / Math.log(2)), 6);
      era.set('item:「빚」', 0);
    }
    difficulty = Math.max(difficulty * 2 + get_random_value(0, 5), 6);
    const progress = { c: 0, p: 0 };
    begin_and_init_ero(0, chara.id);
    const events = new MejiroEvents(chara, me);
    while (flag) {
      await era.clear();
      this.page_header(chara);
      era.drawLine();
      const my_lust = era.get('base:0:성욕');
      const lust = Math.max(my_lust, era.get(`base:${chara.id}:성욕`));
      if (lust >= lust_border.want_sex) {
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개에 완전히 포위되었다……',
        ]);
        await era.printAndWait([
          '시야는 온통 안개뿐이며, 광기 어린 정사를 나누는 연인들의 모습뿐이다. 그들의 얼굴은 어렴풋이 당신들의 그림자를 닮아 있다.',
        ]);
        await era.printAndWait(
          '교접하는 소리가 다른 모든 소리를 덮어버리고, 숨 쉬는 공기 중에는 음란한 체취가 가득하다……',
        );
        if (my_lust >= lust_border.want_sex) {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 뇌 속에서 피가 요동치는 소리를 들었다. 억눌렀던 이성은 음란한 망상의 공격 앞에 산산이 조각났다……',
          ]);
          await era.printAndWait([
            '곁에 있는 ',
            chara.get_colored_name(),
            ' 역시 뺨을 붉게 물들이고 다리를 꼬고 있는 것을 보며, ',
            me.get_colored_name(),
            '은(는) 결국 욕망이 자신을 지배하도록 내버려 두었다……',
          ]);
          era.add('base:0:체력', Math.floor(era.get('maxbase:0:체력') * 0.2));
          era.add('base:0:기력', Math.floor(era.get('maxbase:0:기력') * 0.2));
        } else {
          if (
            await select_yes_or_no(
              '',
              '빠져든다 (「은총」+10)',
              '냉정을 유지하려 애쓴다 (체력&기력+50%)',
            )
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) ',
              chara.get_colored_name(),
              '을(를) 바라보자, 그 눈동자 속에 욕망의 물결이 일렁인다……',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 스스로 욕망의 수렁에 발을 들였다.',
            ]);
            await era.printAndWait([chara.sex, '와 함께 끝없이 추락하고, 또 추락한다……']);
            era.add('item:「은총」', 10);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) ',
              chara.get_colored_name(),
              '을(를) 바라보자, 그 눈동자 속에 욕망의 물결이 일렁인다……',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 당황하며 욕망의 수렁에서 벗어나려 발을 떼려 하지만,',
            ]);
            await era.printAndWait('발걸음은 점점 더 깊이 빠져들 뿐이었고, 결국 추락하고 말았다……');
            era.add('base:0:체력', Math.floor(era.get('maxbase:0:체력') * 0.5));
            era.add('base:0:기력', Math.floor(era.get('maxbase:0:기력') * 0.5));
          }
        }
        era.set(`status:${chara.id}:슈퍼우마뾰이Z`, 1);
        era.set(`tcvar:${chara.id}:탈력`, 0);
        era.set('tcvar:0:탈력', 0);
        era.set(`status:${chara.id}:숙면`, 0);
        era.set('status:0:숙면', 0);
        era.add(
          `base:${chara.id}:체력`,
          Math.floor(era.get(`maxbase:${chara.id}:체력`) * 0.5),
        );
        era.add(
          `base:${chara.id}:기력`,
          Math.floor(era.get(`maxbase:${chara.id}:기력`) * 0.5),
        );
        update_ero_status(0);
        update_ero_status(chara.id);
        await print_ero_page(chara.id, true);
        era.add('item:「은총」', Math.floor(progress.c * 5) / 2 + 2);
        flag = false;
        temp = false;
      } else {
        const buffer = [];
        buffer.push([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개가 자욱한 거리에 서 있다……',
        ]);
        if (lust >= lust_border.absent_mind) {
          buffer.push(
            '주변에는 쌍을 이루어 음탕하게 즐기는 무리들로 가득하며, 방탕한 신음과 육체가 부딪히는 소리, 분출되는 물소리가 온 공간을 채우고 있다.',
          );
        } else if (lust >= lust_border.itch) {
          buffer.push(
            '주변에는 얼굴이 흐릿한 연인들이 애무하며 몸을 흔들고 있고, 낮은 신음과 물소리가 끊이지 않는다.',
          );
        } else if (lust >= 4000) {
          buffer.push(
            '주변에는 얼굴이 흐릿한 느긋한 커플들이 서로를 더듬으며 장난치고 있고, 가끔 신음과 끈적한 물소리가 들려온다.',
          );
        } else if (lust >= 3000) {
          buffer.push(
            '주변에는 쌍을 이룬 파트너들이 서로 포옹하고 입을 맞추며, 가끔씩 속삭이는 사랑의 소리가 들린다.',
          );
        } else if (lust >= 2000) {
          buffer.push('주변에는 그림자 같은 여행객들이 쌍을 지어 지나가며, 가끔 모호한 속삭임이 들린다.');
        }
        progress.p = progress.c / difficulty;
        if (progress.c === difficulty - 1) {
          buffer.push('앞쪽의 안개가 걷히기 시작하며, 밝고 깨끗한 거리가 보이기 시작한다.');
        } else if (progress.p >= 0.66) {
          buffer.push('앞쪽의 안개가 조금 옅어졌고, 구름 사이로 햇살이 점점이 내리쬐고 있다.');
        } else if (progress.p >= 0.33) {
          buffer.push('온 길은 이제 보이지 않는다. 오직 앞으로 나아갈 수밖에 없는 것 같다.');
        } else if (progress.c === 0) {
          buffer.push(
            '한 줄기 큰 길이 앞으로 곧게 뻗어 있지만, 어디로 이어지는지는 알 수 없다. 온 길에는 몽환적인 잿빛만이 남았다.',
          );
        }
        const stamina = era.get('base:0:체력');
        const buttons = [
          {
            a: 100,
            c: '신중하게 전진 (위험도 낮음, 성욕+++, 체력--)',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(600, 1200));
              era.add('base:0:성욕', get_random_value(300, 600));
              sys_change_attr_and_print(0, '체력', -get_random_value(50, 150));
              progress.c++;
              await events.good_event(progress, lust);
            },
          },
          {
            a: 101,
            c: '평범하게 전진 (위험도 보통, 성욕++, 체력--)',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(300, 900));
              era.add('base:0:성욕', get_random_value(100, 500));
              sys_change_attr_and_print(0, '체력', -get_random_value(50, 150));
              progress.c++;
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 102,
            c: '대담하게 전진 (위험도 높음, 성욕+, 체력--)',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(0, 600));
              era.add('base:0:성욕', get_random_value(0, 300));
              sys_change_attr_and_print(0, '체력', -get_random_value(50, 150));
              progress.c++;
              await events.bad_event(progress, lust);
            },
          },
          undefined,
          {
            a: 200,
            c: '자세히 수색 (위험도 낮음, 성욕++, 체력---)',
            d: stamina < 150,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(300, 900));
              era.add('base:0:성욕', get_random_value(100, 500));
              sys_change_attr_and_print(0, '체력', -get_random_value(125, 175));
              await events.good_event(progress, lust);
            },
          },
          {
            a: 201,
            c: '평범하게 수색 (위험도 보통, 성욕++, 체력--)',
            d: stamina < 100,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(300, 900));
              era.add('base:0:성욕', get_random_value(100, 500));
              sys_change_attr_and_print(0, '체력', -get_random_value(50, 150));
              await events.normal_event(progress, lust);
            },
          },
          {
            a: 202,
            c: '대충 수색 (위험도 높음, 성욕++, 체력-)',
            d: stamina < 50,
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(300, 900));
              era.add('base:0:성욕', get_random_value(100, 500));
              sys_change_attr_and_print(0, '체력', -get_random_value(25, 75));
              await events.bad_event(progress, lust);
            },
          },
          undefined,
          {
            a: 300,
            c: '멈춰서 휴식 (성욕++, 체력+)',
            async h() {
              era.add(`base:${chara.id}:성욕`, get_random_value(300, 900));
              era.add('base:0:성욕', get_random_value(100, 500));
              sys_change_attr_and_print(0, '체력', get_random_value(25, 75));
              await events.avg_event(progress, lust);
            },
          },
          {
            a: 301,
            c: '저항을 포기한다 (일심동체❤️)',
            async h() {
              era.set('base:0:성욕', lust_border.want_sex);
              era.set(`base:${chara.id}:성욕`, lust_border.want_sex);
            },
          },
        ];
        era.printInColRows(
          {
            columns: [
              ...buffer.map((e) => ({ content: e, type: 'text' })),
              ...buttons.map((e) =>
                e
                  ? {
                      accelerator: e.a,
                      config: {
                        ...(e.d ? { disabled: true, title: '체력 부족' } : {}),
                        width: 12,
                      },
                      content: e.c,
                      type: 'button',
                    }
                  : { content: [], type: 'text' },
              ),
            ],
            config: { width: 20 },
          },
          {
            columns: [
              {
                config: { align: 'center' },
                content: [chara.get_colored_name()],
                type: 'text',
              },
              {
                names: sys_get_ero_image(chara.id),
                type: 'image.whole',
              },
            ],
            config: { width: 4 },
          },
        );
        const ret = await era.input();
        era.drawLine();
        await buttons.find((e) => e?.a === ret).h();
        if (progress.c >= difficulty) {
          flag = false;
          temp = true;
        }
      }
    }
    if (temp) {
      era.add('item:「은총」', difficulty * 5);
      end_ero_and_train();
      era.drawLine();
      const vehicle = era.get('flag:다인용탈것');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 안개를 벗어났고, ',
        vehicle > 0 ? vehicle_names[vehicle] : '버스',
        ' 옆에 있다는 사실을 깨달았다.',
      ]);
      await era.printAndWait('온 길을 가리키는 이정표에는 「메지로 시티」 표식이 붙어 있다.');
      await era.printAndWait('귓가에 만족스러운 웃음소리가 들려온다……');
    } else {
      await end_ero_and_show_result(true);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 정신을 차렸을 때, 이미 메지로 시티 밖의 벤치에 있었고 곁에는 잠든 ',
        chara.get_colored_name(),
        '이(가) 있었다.',
      ]);
      await era.printAndWait([
        chara.sex,
        '가 깨어난 후, ',
        me.get_couple_title(),
        '은 어디선가 들려오는 만족스러운 웃음소리와 함께 메지로 시티를 떠났다……',
      ]);
      await era.printAndWait([
        '……하지만 그날 이후로, ',
        chara.get_colored_name(),
        '은(는) 가끔 실체가 없는 속삭임을 듣게 되었다……',
      ]);
      this.called = chara.id;
      this.san = Math.floor(
        era.get('item:「은총」') * get_random_value(0.5, 0.7),
      );
    }
    era.set('item:「은총」', Math.floor(era.get('item:「은총」')));
  }

  async next_week() {
    this.limit = 1;
    if (era.get('item:「은총」') > 0) {
      if (era.add('item:「은총」', -1) === 0) {
        await era.printAndWait('메지로 시티가 다시 안개에 휩싸였다……');
      }
    }
    if (this.called > 0 && this.san > 0 && --this.san === 0) {
      await era.printAndWait([
        get_chara_talk(this.called).get_colored_name(),
        '은(는) 귓가의 속삭임 속에서 메지로의 부름을 들었다……',
      ]);
      EventMarks.get(this.called).add(event_hooks.out_mejiro);
    }
  }
}

MejiroCity.register(1, new CallOfMejiro());

module.exports = {};
