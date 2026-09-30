const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const race_indicator = require('#/page/components/race-indicator');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { celebration_color, money_color } = require('#/data/color-const');
const { attr_background_colors, trainer_colors } = require('#/data/const.json');
const date_indicator = require('#/data/date-indicator');
const title_desc = require('#/data/desc/titles.json');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_celebration,
  get_trainer_level,
  get_trainer_title,
  get_trainer_train_buff,
} = require('#/data/info-generator');
const { location_name } = require('#/data/locations');
const { creditors } = require('#/data/other-const');
const { race_infos } = require('#/data/race/race-const');

function get_progress_bar() {
  return [
    {
      config: { width: 2 },
      content: '체력',
      type: 'text',
    },
    {
      config: {
        color: attr_background_colors['체력'],
        height: 22,
        width: 9,
      },
      inContent: `${Math.floor(era.get(`base:0:체력`))}/${era.get(`maxbase:0:체력`)}`,
      percentage: (era.get(`base:0:체력`) * 100) / era.get(`maxbase:0:체력`),
      type: 'progress',
    },
    {
      config: { offset: 1, width: 2 },
      content: '기력',
      type: 'text',
    },
    {
      config: {
        color: attr_background_colors['기력'],
        height: 22,
        width: 9,
      },
      inContent: `${Math.floor(era.get(`base:0:기력`))}/${era.get(`maxbase:0:기력`)}`,
      percentage: (era.get(`base:0:기력`) * 100) / era.get(`maxbase:0:기력`),
      type: 'progress',
    },
  ];
}

/** @param {boolean} [enable_race_info] */
function page_header(enable_race_info) {
  let cur_year = era.get('flag:현재연도');

  if (!cur_year) {
    era.drawLine();
    era.print('현재 게임 중이 아닙니다', { align: 'center' });
  } else {
    const celebration = get_celebration();
    const cur_coin = era.get('flag:현재코인');
    const cur_fame = era.get('flag:현재명성');
    const cur_rounds = era.get('flag:현재턴수');
    const race_characters = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    )
      .map((e) => {
        const ret = sys_reg_race(e).curr;
        return {
          id: e,
          race: ret.race,
          week: ret.week,
        };
      })
      .filter((e) => e.week === cur_rounds);
    const title_level = get_trainer_title();
    const trainer_title_color = trainer_colors[title_level.substring(0, 2)];
    const trainer_buff = get_trainer_train_buff();
    const money_buff = era.get('global:자금보너스');
    const rec_trainers = [304, 306]
      .filter((e) => era.get(`cflag:${e}:모집상태`) === recruit_flags.yes)
      .map((e) => `[${get_custom_mec(e).get_talents()[0].content}]`)
      .join('+');
    let billings = '청구서：',
      money_change = 0;
    sys_get_billings().forEach((e, i) => {
      if (e.repay !== 0 && e.timer !== 0) {
        let delta = e.repay;
        if (delta > 0) {
          delta = Math.floor((e.repay * (100 + money_buff)) / 100);
        }
        money_change += delta;
        billings += `\n${delta > 0 ? '+' : ''}${delta}`;
        switch (e.creditor) {
          case creditors.invest:
            billings += ` (${era.get('callname:349:-2')} 투자 수익)`;
            break;
          case creditors.annul_bonus:
            billings += ' (월급+연말보너스)';
            break;
          case creditors.salary:
            billings += ' (월급)';
            break;
          default:
            if (e.timer > 0) {
              billings += ` (${era.get(`callname:${e.creditor}:-2`)}${i === 0 ? ' · 대출' : ''} 남은기간 ${e.timer}주)`;
            } else {
              billings += ` (${era.get(`callname:${e.creditor}:-2`)} 헌금)`;
            }
        }
      }
    });
    const status_list = sys_get_status(0);
    const title_info = [
      {
        color: trainer_title_color,
        fontWeight: 'bold',
        ...get_abbr_number(cur_fame),
      },
      ' 명성 ',
    ];
    const t_title = CharaTitles.get(0).get_curr_title();
    if (t_title) {
      title_info.push({
        color: t_title.c,
        content: `[${t_title.n}]`,
        fontWeight: 'n',
        title: title_desc[t_title.n]
          ? `[${t_title.n}]：${title_desc[t_title.n]}\n`
          : '',
      });
    } else {
      title_info.push({
        color: trainer_title_color,
        content: `[${title_level}]`,
        fontWeight: 'bold',
        title: '',
      });
    }
    title_info.at(-1).title += `[${title_level}]：${
      trainer_buff > 0
        ? `트레이닝 시 성공률 및 효과 보너스+${trainer_buff}%${
            rec_trainers.length > 0 ? ` (↑${rec_trainers})` : ''
          }，`
        : ''
    }상금의 ${4 * get_trainer_level() + 4}%를 배분받음.`;
    title_info.push(...race_indicator(0));
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 16 },
            content: [
              ...date_indicator(),
              {
                content: celebration ? ` [${celebration}]` : '',
                color: celebration_color,
              },
            ],
            type: 'text',
          },
          {
            config: { width: 8 },
            content: [
              '현재위치 ',
              {
                content: location_name[era.get('flag:현재위치')],
                fontWeight: 'bold',
              },
            ],
            type: 'text',
          },
          {
            config: { width: 16 },
            content: title_info,
            type: 'text',
          },
          {
            config: { width: 8 },
            content: [
              {
                color: money_color,
                content: cur_coin.toLocaleString(),
                fontWeight: 'bold',
              },
              money_change !== 0 ? ' ' : '',
              {
                color: money_change > 0 ? 'palegreen' : 'orangered',
                content:
                  money_change !== 0
                    ? `(${money_change > 0 ? '+' : ''}${money_change.toLocaleString()})`
                    : '',
                fontWeight: 'bold',
                opacity: 0.5,
                title: billings,
              },
              ' 우마코인',
            ],
            type: 'text',
          },
          ...get_progress_bar(),
          {
            config: { width: 2 },
            content: '상태',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: status_list.length > 0 ? status_list : '정상',
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      {
        columns:
          race_characters.length > 0
            ? [
                {
                  config: { align: 'center', fontWeight: 'bold' },
                  content: '이번 주의 레이스',
                  type: 'text',
                },
                ...race_characters.slice(0, 2).map((e) => {
                  return {
                    config: { align: 'center' },
                    content: [
                      get_chara_talk(e.id).get_colored_name(),
                      ' ',
                      race_infos[e.race].get_colored_name(),
                    ],
                    type: 'text',
                  };
                }),
                enable_race_info
                  ? {
                      accelerator: 991,
                      config: {
                        align: 'center',
                        disableWarning: true,
                        showAcc: false,
                      },
                      content: '모두 보기',
                      type: 'button',
                    }
                  : {
                      config: { align: 'center' },
                      content: race_characters.length > 2 ? '……' : '',
                      type: 'text',
                    },
              ]
            : [],
        config: { align: 'center', width: 8 },
      },
    );
  }
}

module.exports = page_header;
module.exports.get_progress_bar = get_progress_bar;
