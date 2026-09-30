const era = require('#/era-electron');

const { clean_part_without_item } = require('#/system/ero/sys-calc-ero-part');
const {
  check_erect,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_list } = require('#/utils/list-utils');
const { log_max_wp } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum, item_names } = require('#/data/ero/item-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const {
  max_absent_mind_time,
  time_resume_ratio,
  wp_coefficient,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @type {function(number,number,*?):Promise} */
let run_custom_ero;

let ex_list = undefined;

const cum_loc_desc = {
  [part_enum.anal]: '애널 안에',
  [part_enum.body]: '몸 위에',
  [part_enum.breast]: '가슴 안에',
  [part_enum.clitoris]: '음핵 위에',
  [part_enum.foot]: '발 위에',
  [part_enum.hand]: '손 안에',
  [part_enum.mouth]: '입안에',
  [part_enum.penis]: '자지 위에',
  [part_enum.virgin]: '보지 안에',
};

/**
 * @param {number} cid
 * @param {boolean} [is_orgasm=false]
 * @returns {TextContent}
 */
function get_milk_info(cid, is_orgasm = false) {
  const amount = era.get(`nowex:${cid}:분유량`);
  if (!amount) {
    return [];
  }
  const loc = era.get(`tcvar:${cid}:모유분출위치`) || {};
  const actions = [];
  const chara = join_list(
    (loc.c || [])
      .filter((e) => e >= 0)
      .map((e) => get_chara_talk(e).get_colored_name()),
    ' 와(과) ',
  );
  switch (loc.p) {
    case part_enum.mouth:
      actions.push(...chara, ' 의 입안에 ');
      break;
    case part_enum.hand:
      actions.push(...chara, ' 의 손가락 사이에 ');
      break;
    case part_enum.item:
      if (loc.i === item_enum.milk_pump) {
        actions.push(
          { content: item_names[loc.i], color: buff_colors[2] },
          ' 안에 ',
        );
      }
  }
  if (era.get(`ex:${cid}:분유방해`) > 0) {
    actions.push('기세 좋게 뿜어냈다 ');
  } else if (is_orgasm) {
    actions.push('뿜어냈다 ');
  } else {
    switch (loc.p) {
      case part_enum.mouth:
      case part_enum.hand:
      case part_enum.item:
        actions.push('배어 나왔다 ');
        break;
      default:
        actions.push('흘러나왔다 ');
    }
  }
  era.set(`ex:${cid}:분유방해`, 0);
  return [
    ...actions,
    {
      content: ` ${amount.toLocaleString()}ml `,
      color: buff_colors[2],
    },
    ' 의 모유',
  ];
}

/**
 * @param {number} cid
 * @returns {TextContent}
 */
function get_squirt_info(cid) {
  const squirt = era.get(`nowex:${cid}:애액분비`);
  if (!squirt) {
    return [];
  }
  const loc = era.get(`tcvar:${cid}:조희위치`) || {};
  const actions = [];
  const chara = join_list(
    (loc.c || [])
      .filter((e) => e >= 0)
      .map((e) => get_chara_talk(e).get_colored_name()),
    ' 와(과) ',
  );
  switch (loc.p) {
    case part_enum.mouth:
      actions.push(...chara, ' 의 입안을 향해 ');
      break;
    case part_enum.hand:
      actions.push(...chara, ' 의 손가락 사이에 ');
      break;
    case part_enum.foot:
      actions.push(...chara, ' 의 발밑에 ');
      break;
    case part_enum.penis:
      return [
        {
          content: ` ${squirt.toLocaleString()}ml `,
          color: buff_colors[2],
        },
        ' 의 애액을 ',
        ...chara,
        ' 의 귀두에 쏟아부었다',
      ];
    case 100:
      actions.push(...chara, ' 의 입술을 향해 ');
      break;
    case 101:
      actions.push(...chara, ' 의 자지를 향해 ');
  }
  if (era.get(`nowex:${cid}:시오후키`) > 0) {
    actions.push('뿜어냈다 ');
  } else {
    switch (loc.p) {
      case part_enum.mouth:
      case 100:
        actions.push('튀어 나왔다 ');
        break;
      default:
        actions.push('흘러나왔다 ');
    }
  }
  return [
    ...actions,
    {
      content: ` ${squirt.toLocaleString()}ml `,
      color: buff_colors[2],
    },
    ' 의 애액',
  ];
}

/** @param {number} cid */
function common_orgasm(cid) {
  const chara = get_chara_talk(cid);
  let multi_orgasm = undefined;
  if (era.get(`nowex:${cid}:이중절정`)) {
    multi_orgasm = '2';
  } else if (era.get(`nowex:${cid}:삼중절정`)) {
    multi_orgasm = '3';
  } else if (era.get(`nowex:${cid}:사중절정`)) {
    multi_orgasm = '4';
  } else if (era.get(`nowex:${cid}:오중절정`)) {
    multi_orgasm = '5';
  } else if (era.get(`nowex:${cid}:다중절정`)) {
    multi_orgasm = '다';
  }
  if (multi_orgasm !== undefined) {
    era.print([
      chara.get_colored_name(),
      ' 에게 ',
      { content: ` ${multi_orgasm}중 절정`, color: buff_colors[2] },
      '이 발생했다!',
    ]);
  }
  for (const part of orgasm_check_list) {
    if (part === part_enum.clitoris) {
      continue;
    }
    const part_name = part_names[part];
    const times =
      era.get(`nowex:${cid}:${part_name}절정`) +
      (era.get(`nowex:${cid}:무자각${part_name}절정`) || 0);
    if (part === part_enum.breast) {
      const nipple_times =
        era.get(`nowex:${cid}:유두절정`) +
        era.get(`nowex:${cid}:무자각유두절정`);
      const buffer = [];
      if (times > 0) {
        buffer.push([
          chara.get_colored_name(),
          ' 의 ',
          { content: ' 가슴 ', color: buff_colors[2] },
          {
            content: times > 1 ? `${times}중 절정이 발생했다` : '절정했다',
            color: buff_colors[2],
          },
        ]);
      }
      if (nipple_times > 0) {
        buffer.push([
          chara.get_colored_name(),
          ' 의 ',
          { content: ' 유두 ', color: buff_colors[2] },
          {
            content: times > 1 ? `${times}중 절정이 발생했다` : '절정했다',
            color: buff_colors[2],
          },
        ]);
      }
      const milk = get_milk_info(cid, times + nipple_times > 0);
      if (milk.length > 0) {
        if (buffer.length > 0) {
          buffer[buffer.length - 1].push(', ', ...milk);
        } else {
          buffer.push([
            chara.get_colored_name(),
            ' 의 ',
            { color: buff_colors[2], content: ' 유두에서 ' },
            ...milk,
          ]);
        }
      }
      era.printMultiColumns(
        buffer.map((e) => ({ content: [...e, '!'], type: 'text' })),
      );
    } else if (part === part_enum.virgin) {
      const c_times =
        era.get(`nowex:${cid}:클리절정`) +
        era.get(`nowex:${cid}:무자각클리절정`);
      const buffer = [];
      if (c_times > 0) {
        era.print([
          chara.get_colored_name(),
          '의 ',
          { content: part_names[part_enum.clitoris], color: buff_colors[2] },
          '가 ',
          {
            content: times > 1 ? `${times}중 절정했다` : '절정했다',
            color: buff_colors[2],
          },
          '!',
        ]);
      }
      const tmp = get_squirt_info(cid);
      if (times > 0) {
        buffer.push(
          chara.get_colored_name(),
          '의 ',
          { content: part_name, color: buff_colors[2] },
          '가 ',
          {
            content: times > 1 ? `${times}중 절정했다` : '절정했다',
            color: buff_colors[2],
          },
        );
      }
      if (tmp.length > 0) {
        if (buffer.length > 0) {
          buffer.push(', ', ...tmp, '!');
        } else {
          buffer.push(
            chara.get_colored_name(),
            '의 ',
            { content: '보지에서', color: buff_colors[2] },
            ' ',
            ...tmp,
            '!',
          );
        }
      }
      if (buffer.length > 0) {
        era.print(buffer);
      }
    } else if (times > 0) {
      let semen;
      switch (part) {
        case part_enum.sadism:
        case part_enum.masochism:
          era.print([
            chara.get_colored_name(),
            ' 이(가) ',
            { content: part_name, color: buff_colors[2] },
            ' 로 인해 ',
            {
              content: times > 1 ? `${times}중 절정했다` : '절정했다',
              color: buff_colors[2],
            },
            '!',
          ]);
          break;
        case part_enum.penis:
          if ((semen = era.get(`nowex:${cid}:사정량`)) > 0) {
            const semen_loc = era.get(`tcvar:${cid}:사정위치`) || {};
            semen = {
              content: ` ${semen.toLocaleString()}ml `,
              color: buff_colors[2],
            };
            if (semen_loc.p === part_enum.keys.length) {
              era.print([
                chara.get_colored_name(),
                ' 이(가) ',
                ...join_list(
                  semen_loc.c.map((e) => get_chara_talk(e).get_colored_name()),
                  ' 와(과) ',
                ),
                ' 의 얼굴에 ',
                semen,
                '의 정액을 사정했다!',
              ]);
            } else if (semen_loc.p === -1) {
              era.print([
                chara.get_colored_name(),
                ' 이(가) 콘돔 안에 ',
                semen,
                '의 정액을 사정했다!',
              ]);
            } else if (semen_loc.p === part_enum.item) {
              era.print([
                chara.get_colored_name(),
                ' 이(가) ',
                {
                  content: item_names[item_enum.artificial_virgin],
                  color: buff_colors[2],
                },
                ' 안에 ',
                semen,
                '의 정액을 사정했다!',
              ]);
            } else if (cum_loc_desc[semen_loc.p] !== undefined) {
              era.print([
                chara.get_colored_name(),
                ' 이(가) ',
                get_chara_talk(semen_loc.c).get_colored_name(),
                ' 의 ',
                cum_loc_desc[semen_loc.p],
                ' ',
                semen,
                '의 정액을 사정했다!',
              ]);
            } else {
              era.print([chara.get_colored_name(), ' 이(가) ', semen, '의 정액을 사정했다!']);
            }
          }
          break;
        default:
          era.print([
            chara.get_colored_name(),
            '의 ',
            { content: part_name, color: buff_colors[2] },
            '가 ',
            {
              content: times > 1 ? `${times}중 절정했다` : '절정했다',
              color: buff_colors[2],
            },
            '!',
          ]);
      }
    }
  }
}

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function update_orgasms(shown, ...ids) {
  if (!ex_list) {
    ex_list = era
      .get('exentries')
      .filter((e) => e[1] >= 20 && e[1] < 65)
      .map((e) => e[0]);
  }
  for (const cid of ids) {
    let lost_mind_timer = era.get(`tcvar:${cid}:실신`);
    const wp_ratio = Math.log(era.get(`base:${cid}:근성`)) / log_max_wp,
      cost = [
        sys_change_attr_and_print(
          cid,
          '체력',
          -era.get(`nowex:${cid}:체력소모`) * (lost_mind_timer ? 1.5 : 1),
        ),
        sys_change_attr_and_print(
          cid,
          '기력',
          -era.get(`nowex:${cid}:기력소모`) * (1 - wp_coefficient * wp_ratio),
        ),
      ];
    let lost_mind = 0;
    if (shown && (cost[0].length > 0 || cost[1].length > 0)) {
      era.print(
        [
          get_chara_talk(cid).get_colored_name(),
          '의 ',
          ...cost[0],
          cost[0].length > 0 && cost[1].length > 0
            ? { content: ', ' }
            : undefined,
          ...cost[1],
        ].filter((e) => e),
      );
    }
    const stamina = era.get(`base:${cid}:체력`);
    if (!stamina && !era.get(`tcvar:${cid}:탈력`) && sys_check_awake(cid)) {
      era.set(`tcvar:${cid}:탈력`, 1);
      era.add(`nowex:${cid}:탈력`, 1);
      lost_mind_timer = 0;
    } else if (
      stamina &&
      !era.get(`base:${cid}:기력`) &&
      !era.get(`tcvar:${cid}:실신`)
    ) {
      era.set(`tcvar:${cid}:기력부족`, 1);
      lost_mind = era.add(`nowex:${cid}:실신`, 1);
    }
    if (check_erect(cid) && !era.get(`tcvar:${cid}:콘돔`)) {
      set_stain(cid, part_enum.penis, stain_enum.semen);
    }
    await run_custom_ero(cid, ero_hooks.orgasm, { shown });
    era.set(
      `nowex:${cid}:애액분비`,
      Math.floor(era.get(`nowex:${cid}:애액분비`)),
    );
    if (era.get(`nowex:${cid}:TotalEX`) > 0) {
      if (shown) {
        common_orgasm(cid);
      }
      era.set(`tcvar:${cid}:방금절정`, true);
    } else if (shown) {
      const chara = get_chara_talk(cid);
      const milk_info = get_milk_info(cid);
      if (milk_info.length > 0) {
        era.print([
          chara.get_colored_name(),
          '의 ',
          { content: '유두에서', color: buff_colors[2] },
          ' ',
          ...milk_info,
          '!',
        ]);
      }
      const squirt_info = get_squirt_info(cid);
      if (squirt_info.length > 0) {
        era.print([
          chara.get_colored_name(),
          '의 ',
          { content: '보지에서', color: buff_colors[2] },
          ' ',
          ...squirt_info,
          '!',
        ]);
      }
    }
    if (era.get(`nowex:${cid}:실정`) > 0) {
      await run_custom_ero(cid, ero_hooks.lose_virginity, {
        shown,
      });
    }
    if (era.get(`nowex:${cid}:파처`) > 0) {
      await run_custom_ero(cid, ero_hooks.lose_virginity, {
        shown,
        virgin: true,
      });
    }
    if (era.get(`nowex:${cid}:질파열`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        part: part_enum.virgin,
        shown,
      });
    } else if (era.get(`ex:${cid}:질파열`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        continue: true,
        part: part_enum.virgin,
        shown,
      });
    }
    if (era.get(`nowex:${cid}:애널파열`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        part: part_enum.anal,
        shown,
      });
    } else if (era.get(`ex:${cid}:애널파열`) > 0) {
      await run_custom_ero(cid, ero_hooks.wound, {
        continue: true,
        part: part_enum.anal,
        shown,
      });
    }
    add_juel(
      cid,
      '고통',
      2 *
        base_emotion_juel *
        (era.get(`ex:${cid}:질파열`) + era.get(`ex:${cid}:애널파열`)),
    );
    if (era.get(`nowex:${cid}:발기`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_erect, {
        shown,
        part: part_enum.penis,
      });
    }
    if (era.get(`nowex:${cid}:유두돌출`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_erect, {
        shown,
        part: part_enum.breast,
      });
    }
    if (era.get(`nowex:${cid}:질윤활`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.virgin,
      });
    }
    if (era.get(`nowex:${cid}:애널윤활`) > 0) {
      await run_custom_ero(cid, ero_hooks.become_lubrication, {
        shown,
        part: part_enum.anal,
      });
    }
    if (era.get(`nowex:${cid}:시오후키`) > 0) {
      era.add(`exp:${cid}:시오후키횟수`, 1);
    }
    let tmp;
    if ((tmp = era.get(`nowex:${cid}:애액분비`)) > 0) {
      era.add(`exp:${cid}:애액분비량`, tmp);
    }
    if ((tmp = era.get(`nowex:${cid}:애액음용량`)) > 0) {
      era.add(`exp:${cid}:애액음용량`, tmp);
    }
    if (era.get(`nowex:${cid}:탈력`) > 0) {
      await run_custom_ero(cid, ero_hooks.zero_stamina, { shown });
    }
    if (lost_mind > 0) {
      // 실신 시간은 근성과 관련되며, 최소 1턴
      era.set(
        `tcvar:${cid}:실신`,
        Math.ceil((max_absent_mind_time - 1) * (1 - wp_ratio)) + 1,
      );
      await run_custom_ero(cid, ero_hooks.lost_mind, { shown });
    } else if (lost_mind_timer) {
      // 실신 상태 매 턴 감쇠
      era.add(`tcvar:${cid}:실신`, -1);
      if (!(lost_mind_timer - 1) && !era.get(`tcvar:${cid}:탈력`)) {
        era.set(
          `base:${cid}:기력`,
          Math.floor(
            time_resume_ratio * era.get(`maxbase:${cid}:기력`) * (1 + wp_ratio),
          ),
        );
      }
    }
    if (era.get(`tcvar:${cid}:여운`) > 0) {
      era.add(`tcvar:${cid}:여운`, -1);
    }
    if (era.get(`tcvar:${cid}:불응기`) > 0) {
      era.add(`tcvar:${cid}:불응기`, -1);
      // 사정 후 불응기에 진입하면 삽입 해제
      const touched_part = era.get(`tcvar:${cid}:음경접촉부위`);
      if (
        era.get(`nowex:${cid}:음경절정`) > 0 &&
        (touched_part.part === part_enum.virgin ||
          touched_part.part === part_enum.anal)
      ) {
        clean_part_without_item(new EroParticipant(cid, part_enum.penis));
      }
    }
    if (era.get(`tcvar:${cid}:질확장`) > 0) {
      era.add(`tcvar:${cid}:질확장`, -1);
    }
    if (era.get(`tcvar:${cid}:항문확장`) > 0) {
      era.add(`tcvar:${cid}:항문확장`, -1);
    }
    if (shown) {
      era.println();
    }
  }
  for (const cid of ids) {
    era.add(`nowex:${cid}:가슴절정`, era.get(`nowex:${cid}:유두절정`));
    era.add(`ex:${cid}:유두절정`, era.get(`nowex:${cid}:유두절정`));
    era.set(`nowex:${cid}:유두절정`, 0);
    era.add(`ex:${cid}:가슴절정`, era.get(`nowex:${cid}:무자각유두절정`));
    era.add(
      `nowex:${cid}:무자각가슴절정`,
      era.get(`nowex:${cid}:무자각유두절정`),
    );
    era.add(`ex:${cid}:무자각유두절정`, era.get(`nowex:${cid}:무자각유두절정`));
    era.set(`nowex:${cid}:무자각유두절정`, 0);
    era.add(
      `tcvar:${cid}:절정만족`,
      era.get(`nowex:${cid}:음경절정`) + era.get(`nowex:${cid}:질구절정`),
    );
    pleasure_list.forEach((part) => {
      const part_name = part_names[part];
      era.add(
        `ex:${cid}:${part_name}절정`,
        era.get(`nowex:${cid}:${part_name}절정`),
      );
      era.set(`nowex:${cid}:${part_name}절정`, 0);
      if (part !== part_enum.sadism && part !== part_enum.masochism) {
        era.add(
          `ex:${cid}:${part_name}절정`,
          era.get(`nowex:${cid}:무자각${part_name}절정`),
        );
        era.add(
          `ex:${cid}:무자각${part_name}절정`,
          era.get(`nowex:${cid}:무자각${part_name}절정`),
        );
        era.set(`nowex:${cid}:무자각${part_name}절정`, 0);
      }
    });
    era.add(`cflag:${cid}:자궁내정액`, era.get(`nowex:${cid}:질내정액`));
    era.add(`cflag:${cid}:장내정액`, era.get(`nowex:${cid}:장내정액`));
    era.add(`cflag:${cid}:복부내정액`, era.get(`nowex:${cid}:정액음용량`));
    ex_list.forEach((key) => {
      era.add(`ex:${cid}:${key}`, era.get(`nowex:${cid}:${key}`));
      era.set(`nowex:${cid}:${key}`, 0);
    });
    era.set(`tcvar:${cid}:사정위치`, {});
    era.set(`tcvar:${cid}:모유분출위치`, {});
    era.set(`tcvar:${cid}:조희위치`, {});
  }
}

update_orgasms.init = (_handler) => (run_custom_ero = _handler);

module.exports = update_orgasms;