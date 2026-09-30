const era = require('#/era-electron');

const change_cost = require('#/system/ero/sub-calc-ero/change-ero-cost');
const get_random_delta = require('#/system/ero/sub-calc-ero/get-random-delta');
const get_sm_buff = require('#/system/ero/sub-calc-ero/get-sm-buff');
const handle_lost_virginity = require('#/system/ero/sub-calc-ero/handle-lost-virginity');
const {
  update_attacking_mouth_exp,
  update_blow_job_exp,
  update_hand_job_exp,
  update_kiss_exp,
  update_sm_exp,
} = require('#/system/ero/sys-calc-ero-exp');
const { use_item } = require('#/system/ero/sys-calc-ero-item');
const {
  change_part,
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const {
  get_bust_delta,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { calc_pleasure } = require('#/system/ero/sys-calc-palam');
const { merge_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_date } = require('#/data/date-indicator');
const {
  action_cost,
  attack_juel_reward,
  base_damage,
} = require('#/data/ero/battle-const');
const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum, part_names, part_skills } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { penis_desc, vp_status_enum } = require('#/data/ero/status-const');

/**
 * @param {EroParticipant} atk
 * @param {EroParticipant} def
 * @param {number} [item]
 */
function sys_do_sex(atk, def, item) {
  const date = get_date();
  const i_def_awake = sys_check_awake(def.id);
  let dmg = {
    defender: base_damage.base,
    attacker: base_damage.self,
  };
  let atk_s_part = part_skills[atk.part];
  let atk_ex_buff = 0;
  let atk_ex_bonus = 0;
  let def_part = def.part;
  let atk_v_status;
  let def_v_status;
  let atk_cost = action_cost.body;
  let def_cost = action_cost.body;

  switch (atk.part) {
    case part_enum.mouth:
      switch (def_part) {
        case part_enum.mouth:
          atk_s_part = '키스';
          era.add(`exp:${atk.id}:키스횟수`, 1);
          era.add(`exp:${def.id}:키스횟수`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:획득인자`, 1);
          }
          update_kiss_exp(date, atk.id, def.id, i_def_awake);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:핥기흡입횟수`, 1);
          era.add(`exp:${def.id}:수유횟수`, 1);
          break;
        case part_enum.clitoris:
        case part_enum.virgin:
          era.add(`exp:${atk.id}:오랄횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:획득인자`, 1);
          }
          update_blow_job_exp(date, atk.id, def.id);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:오랄횟수`, 1);
          update_blow_job_exp(date, atk.id, def.id);
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:방탕한입술`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:흉기`);
          break;
        default:
          era.add(`exp:${atk.id}:핥기흡입횟수`, 1);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:음란한입`) === 2);
      set_stain(atk.id, atk.part, stain_enum.saliva);
      break;
    case part_enum.breast:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:수유횟수`, 1);
          era.add(`exp:${def.id}:핥기흡입횟수`, 1);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:파이즈리횟수`, 1);
          era.add(`exp:${def.id}:신체찌르기횟수`, 1);
          if (!era.get(`cstr:${atk.id}:첫파이즈리경험`)) {
            era.set(`cstr:${atk.id}:첫파이즈리경험`, [
              { c: def.id },
              `의 자지가 가슴 때문에 흥분한다는 것을, ${date}에 깨달았다`,
            ]);
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:요염한유방`);
          change_cost(def.id, atk.id, part_enum.breast, dmg);
          break;
        default:
          era.add(`exp:${atk.id}:파이즈리횟수`, 1);
      }
      // 음란한가슴+1技巧
      atk_ex_buff += era.get(`talent:${atk.id}:음란한가슴`) === 2;
      // B罩杯以下有减成
      // 음란한가슴+5cm胸围，等效目标部位掌握+1
      atk_ex_bonus = (get_bust_delta(atk.id, true) / 2.5 - 6) / 10;
      // 罩杯尺寸对乳交攻击的加成20%封顶，减成60%封顶
      atk_ex_bonus = atk_ex_bonus > 0.2 ? 0.2 : atk_ex_bonus;
      atk_ex_bonus = atk_ex_bonus < -0.6 ? -0.6 : atk_ex_bonus;
      break;
    case part_enum.hand:
      dmg.attacker = base_damage.sm;
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:신체만지기횟수`, 1);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:가슴주무르기횟수`, 1);
          era.add(`exp:${def.id}:착유횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫착유경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫착유경험`, [
                `${date}에 처음으로 `,
                atk.id !== def.id ? ' ' : ' ',
                { c: atk.id },
                '에게 가슴을 애무받고, 유두가 세워졌다',
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫착유경험`)) {
              era.set(`cstr:${def.id}:무자각첫착유경험`, [
                '사실 그 가슴은 이미 ${date} 부터 ',
                { c: atk.id },
                `의 장난감이 되어 있었다`,
              ]);
            }
          }
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:핸드잡횟수`, 1);
          era.add(`exp:${def.id}:신체찌르기횟수`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:보지비비기횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          break;
        case part_enum.virgin:
          era.add(`exp:${atk.id}:보지비비기횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          update_hand_job_exp(date, atk.id, def.id);
          dmg.attacker += 20 * era.get(`talent:${def.id}:명기`);
          break;
        case part_enum.anal:
          era.add(`exp:${atk.id}:항문자위횟수`, 1);
          dmg.attacker += 20 * era.get(`talent:${def.id}:마성의엉덩이`);
          break;
        default:
          era.add(`exp:${atk.id}:신체만지기횟수`, 1);
      }
      atk_ex_buff += 2 * era.get(`talent:${atk.id}:신의손`);
      dmg.attacker *= 1 + get_sm_buff(atk.id);
      break;
    case part_enum.foot:
      switch (def_part) {
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:보지밟기횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:육봉밟기횟수`, 1);
          era.add(`exp:${def.id}:신체찌르기횟수`, 1);
          if (!era.get(`cstr:${atk.id}:첫풋잡경험`)) {
            era.set(`cstr:${atk.id}:첫풋잡경험`, [
              `${date}에 처음으로 `,
              { c: def.id },
              '의 자지를 발아래에 깔아뭉개버렸다',
            ]);
          }
          break;
        default:
          era.add(`exp:${atk.id}:밟기횟수`, 1);
      }
      atk_ex_buff += 2 * era.get(`talent:${atk.id}:신의발`);
      break;
    case part_enum.body:
      dmg.attacker /= 2;
      switch (def_part) {
        case part_enum.mouth:
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:스마타횟수`, 1);
          era.add(`exp:${def.id}:신체찌르기횟수`, 1);
          if (!era.get(`cstr:${atk.id}:첫스마타경험`)) {
            era.set(`cstr:${atk.id}:첫스마타경험`, [
              `${date}, 몸으로 직접  `,
              { c: def.id },
              '의 자지와 욕망을 받아들인 첫날이다',
            ]);
          }
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:음란한몸`) === 2);
      break;
    // 阴蒂有磨镜子和素股两种情况
    case part_enum.clitoris:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:음부장난횟수`, 1);
          era.add(`exp:${def.id}:오랄횟수`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:획득인자`, 1);
          }
          if (!era.get(`cstr:${def.id}:첫펠라경험`)) {
            era.set(`cstr:${def.id}:첫펠라경험`, [
              `${date}에 `,
              { c: atk.id },
              '에게 입의 또 다른 사용법을 배웠다',
            ]);
          }
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:음부장난횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:음부장난횟수`, 1);
          era.add(`exp:${def.id}:음부찌르기횟수`, 1);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:음란한클리토리스`) === 2);
      break;
    case part_enum.virgin:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${atk.id}:음부장난횟수`, 1);
          era.add(`exp:${def.id}:오랄횟수`, 1);
          if (!atk.id || !def.id) {
            era.add(`tcvar:${atk.id || def.id}:획득인자`, 1);
          }
          update_attacking_mouth_exp(date, def.id, atk.id);
          set_stain(atk.id, atk.part, stain_enum.saliva);
          break;
        case part_enum.hand:
          era.add(`exp:${atk.id}:성교횟수`, 1);
          era.add(`exp:${def.id}:보지비비기횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫수음경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫수음경험`, [
                `손가락은 역시 가장 원초적이면서도 훌륭한 쾌락의 도구였다. `,
                { c: atk.id },
                `에게 ${date}에 이 사실을 배웠다`,
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫수음경험`)) {
              era.set(`cstr:${def.id}:무자각첫수음경험`, [
                `사실 ${date}에, 손가락은  `,
                { c: atk.id },
                '의 액체로 야릇한 냄새가 배어버렸다',
              ]);
            }
          }
          break;
        case part_enum.penis:
          era.add(`exp:${atk.id}:성교횟수`, 1);
          era.add(`exp:${def.id}:음부찌르기횟수`, 1);
          atk_v_status = era.get(`talent:${atk.id}:처녀`);
          def_v_status = era.get(`talent:${def.id}:동정`);
          // 有膜的情况下会流血
          if (atk_v_status > 0) {
            set_stain(atk.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(def.id, atk.id);
            era.set(`nowex:${atk.id}:파처`, 1);
          }
          if (
            // 无自觉非处女算破处
            atk_v_status === vp_status_enum.dont_know ||
            // 真 · 处女算破处
            atk_v_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${atk.id}:처녀상실경험`, [
              `${date}에 ${i_def_awake ? '' : '몰래'} 처녀를 `,
              { c: def.id },
              '의 ',
              penis_desc[get_penis_size(def.id)],
              ' 자지에게 바쳤다',
            ]);
            era.set(`talent:${atk.id}:처녀`, vp_status_enum.no);
          }
          // 没干过人的肉棒算失童贞
          if (def_v_status > 0) {
            era.set(`nowex:${def.id}:실정`, 1);
          }
          // 判断是不是睡奸
          if (i_def_awake) {
            if (
              // 无自觉非童贞算失童贞
              def_v_status === vp_status_enum.dont_know ||
              // 真 · 童贞算失童贞
              def_v_status === vp_status_enum.virgin
            ) {
              era.set(`cstr:${def.id}:동정상실경험`, [
                `동정을 ${date}에 `,
                { c: atk.id },
                '에게 바쳤다',
              ]);
            }
            // 都醒着就明牌了
            era.set(`talent:${atk.id}:처녀`, vp_status_enum.no);
            era.set(`talent:${def.id}:동정`, vp_status_enum.no);
          } else {
            era.add(`exp:${atk.id}:질수면간`, 1);
            era.add(`exp:${def.id}:음경수면간당함`, 1);
            // 只有真 · 童贞才能在睡奸情况下失去童贞
            if (def_v_status === vp_status_enum.virgin) {
              era.set(`cstr:${def.id}:무자각동정상실경험`, [
                `사실 이미 ${date}에 `,
                { c: atk.id },
                '에게 빼앗겨 있었다',
              ]);
              era.set(`talent:${def.id}:동정`, vp_status_enum.dont_know);
            } else if (def_v_status === vp_status_enum.i_think) {
              // 俺寻思童贞会被揭穿
              era.set(`talent:${def.id}:동정`, vp_status_enum.no);
            }
            // 如果被睡奸的是自己且对方是处女，附加俺寻思处女情况
            if (!def.id && atk_v_status > 0) {
              era.set(`talent:${atk.id}:처녀`, vp_status_enum.i_think);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:명기`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:흉기`);
          dmg = change_cost(def.id, atk.id, part_enum.virgin, dmg);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:음란한자궁`) === 2);
      break;
    case part_enum.anal:
      if (def_part === part_enum.penis) {
        era.add(`exp:${atk.id}:애널횟수`, 1);
        era.add(`exp:${def.id}:항문찌르기횟수`, 1);
        if (!era.get(`cstr:${atk.id}:첫애널경험`)) {
          era.set(`cstr:${atk.id}:첫애널경험`, [
            `${date}, `,
            { c: def.id },
            '에 의해 처음으로 항문의 성적인 의미를 깨달았다',
          ]);
        }
        atk_ex_buff += 2 * era.get(`talent:${atk.id}:마성의엉덩이`);
        dmg.attacker += 20 * era.get(`talent:${def.id}:흉기`);
        dmg = change_cost(def.id, atk.id, part_enum.anal, dmg);
      }
      atk_ex_buff += 2 * (era.get(`talent:${atk.id}:음란한엉덩이`) === 2);
      break;
    case part_enum.penis:
      switch (def_part) {
        case part_enum.mouth:
          era.add(`exp:${def.id}:오랄횟수`, 1);
          update_attacking_mouth_exp(date, def.id, atk.id);
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:흉기`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:방탕한입술`);
          break;
        case part_enum.breast:
          era.add(`exp:${atk.id}:신체찌르기횟수`, 1);
          era.add(`exp:${def.id}:파이즈리횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫파이즈리경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫파이즈리경험`, [
                { c: atk.id },
                `의 자지가 가슴 때문에 흥분한다는 것을 ${date}에 배웠다`,
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫파이즈리경험`)) {
              era.set(`cstr:${def.id}:무자각첫파이즈리경험`, [
                `사실 ${date} 이후, 본인은 모르고 있지만 가슴은 이미 `,
                { c: atk.id },
                '의 자지를 받드는 것에 익숙해졌다',
              ]);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:흉기`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:요염한유방`);
          dmg = change_cost(atk.id, def.id, part_enum.breast, dmg);
          break;
        case part_enum.hand:
          era.add(`exp:${atk.id}:신체찌르기횟수`, 1);
          era.add(`exp:${def.id}:핸드잡횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫수음경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫수음경험`, [
                '손가락은 역시 가장 원초적이면서도 훌륭한 쾌락의 도구였다. ',
                { c: atk.id },
                `에게 ${date}에 이 사실을 배웠다`,
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫수음경험`)) {
              era.set(`cstr:${def.id}:무자각첫수음경험`, [
                `사실 ${date}에, 손가락은 `,
                { c: atk.id },
                '의 액체로 야릇한 냄새가 배어버렸다',
              ]);
            }
          }
          break;
        case part_enum.foot:
          era.add(`exp:${atk.id}:신체찌르기횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫풋잡경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫풋잡경험`, [
                `${date}에 처음으로 `,
                { c: atk.id },
                '의 자지를 발아래에 깔았다',
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫풋잡경험`)) {
              era.set(`cstr:${def.id}:무자각첫풋잡경험`, [
                '사실 발바닥과 발가락마저 ',
                { c: atk.id },
                `의 자지의 장난감이 되었다. ${date} 이후로는 걸을 때마다 허전함을 느끼게 되겠지`,
              ]);
            }
          }
          break;
        case part_enum.body:
          era.add(`exp:${atk.id}:신체찌르기횟수`, 1);
          era.add(`exp:${def.id}:스마타횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫스마타경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫스마타경험`, [
                `${date}, 몸이 처음으로 `,
                { c: atk.id },
                '의 자지와 욕망으로 가득 채워진 날이다',
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫스마타경험`)) {
              era.set(`cstr:${def.id}:무자각첫스마타경험`, [
                `사실 ${date}부터 잠든 얼굴도, 신음도, 무방비한 몸도 전부 `,
                { c: atk.id },
                '의 오나홀이 되어 있었다',
              ]);
            }
          }
          break;
        case part_enum.clitoris:
          era.add(`exp:${atk.id}:음부찌르기횟수`, 1);
          era.add(`exp:${def.id}:음부장난횟수`, 1);
          break;
        case part_enum.virgin:
          era.add(`exp:${atk.id}:음부찌르기횟수`, 1);
          era.add(`exp:${def.id}:성교횟수`, 1);
          atk_v_status = era.get(`talent:${atk.id}:동정`);
          def_v_status = era.get(`talent:${def.id}:처녀`);
          // 童贞没再生的说法
          // 没干过人的肉棒算失童贞
          if (atk_v_status > 0) {
            era.set(`nowex:${atk.id}:실정`, 1);
          }
          if (
            // 无自觉非童贞算失童贞
            atk_v_status === vp_status_enum.dont_know ||
            // 真 · 童贞算失童贞
            atk_v_status === vp_status_enum.virgin
          ) {
            era.set(`cstr:${atk.id}:동정상실경험`, [
              `${date}에 ${i_def_awake ? '' : '몰래 '} 동정을 `,
              { c: def.id },
              ' 에게 주었다',
            ]);
            era.set(`talent:${atk.id}:동정`, vp_status_enum.no);
          }
          // 有膜的情况下会流血
          if (def_v_status > 0) {
            set_stain(def.id, part_enum.virgin, stain_enum.virgin);
            handle_lost_virginity(atk.id, def.id);
            era.set(`nowex:${def.id}:파처`, 1);
          }
          // 睡奸判定
          if (i_def_awake) {
            if (
              // 因为有再生处女被睡奸成无自觉非处女的蛋疼情况，这里判断破处经历
              !era.get(`cstr:${def.id}:처녀상실경험`)
            ) {
              era.set(`cstr:${def.id}:처녀상실경험`, [
                `처녀를 ${date}에 `,
                { c: atk.id },
                '의 ',
                penis_desc[get_penis_size(atk.id)],
                ' 자지에게 빼앗겼다',
              ]);
            }
            // 都醒着就明牌了
            era.set(`talent:${atk.id}:동정`, vp_status_enum.no);
            era.set(`talent:${def.id}:처녀`, vp_status_enum.no);
          } else {
            era.add(`exp:${atk.id}:음경수면간`, 1);
            era.add(`exp:${def.id}:질수면간당함`, 1);
            // 只有真 · 处女才能在睡奸情况下破处
            if (def_v_status === vp_status_enum.virgin) {
              era.set(`cstr:${def.id}:무자각처녀상실경험`, [
                `사실 이미 ${date}에 `,
                { c: atk.id },
                '에게 빼앗겨 있었다',
              ]);
              era.set(`talent:${def.id}:처녀`, vp_status_enum.dont_know);
            } else if (def_v_status === vp_status_enum.i_think) {
              // 俺寻思处女被揭穿了
              era.set(`talent:${def.id}:처녀`, vp_status_enum.no);
            } else if (def_v_status === vp_status_enum.reborn) {
              // 再生处女操成无自觉非处女
              era.set(`talent:${def.id}:처녀`, vp_status_enum.dont_know);
            }
            // 如果被睡奸的是自己且对方是童贞，附加俺寻思童贞情况
            if (!def.id && atk_v_status === vp_status_enum.virgin) {
              era.set(`talent:${atk.id}:동정`, vp_status_enum.i_think);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:흉기`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:명기`);
          dmg = change_cost(atk.id, def.id, part_enum.virgin, dmg);
          break;
        case part_enum.anal:
          era.add(`exp:${atk.id}:항문찌르기횟수`, 1);
          era.add(`exp:${def.id}:애널횟수`, 1);
          if (!era.get(`cstr:${def.id}:첫애널경험`)) {
            if (i_def_awake) {
              era.set(`cstr:${def.id}:첫애널경험`, [
                `${date}, 처음으로 `,
                { c: atk.id },
                '에게 항문의 성적인 의미를 배워버렸다',
              ]);
            } else if (!era.get(`cstr:${def.id}:무자각첫애널경험`)) {
              era.set(`cstr:${def.id}:무자각첫애널경험`, [
                `사실 ${date}에 `,
                { c: atk.id },
                '에게 유린당했다. 아마 원래대로는 돌아갈 수 없겠지',
              ]);
            }
          }
          atk_ex_buff += 2 * era.get(`talent:${atk.id}:흉기`);
          dmg.attacker += 20 * era.get(`talent:${def.id}:마성의엉덩이`);
          dmg = change_cost(atk.id, def.id, part_enum.anal, dmg);
          break;
        default:
          era.add(`exp:${atk.id}:신체찌르기횟수`, 1);
      }
      // 本身有肉棒的情况，펄롱K+1技巧，펄롱P+2技巧
      if (era.get(`cflag:${atk.id}:성별`) >= 1) {
        if (era.get(`status:${atk.id}:펄롱K`)) {
          atk_ex_buff += 1;
        } else if (era.get(`status:${atk.id}:펄롱P`)) {
          atk_ex_buff += 2;
        }
      }
      break;
    case part_enum.abuse:
      dmg.defender = base_damage.sm;
      dmg.attacker = base_damage.sm;
      def_part = part_enum.masochism;
      atk_cost = def_cost = action_cost.spirit;
      era.add(`exp:${atk.id}:매도횟수`, 1);
      era.add(`exp:${def.id}:매도당한횟수`, 1);
      update_sm_exp(date, atk.id, def.id);
      atk_ex_bonus =
        get_sm_buff(def.id, true) + 3 * era.get(`talent:${def.id}:매도좋아함`);
      if (era.get(`talent:${atk.id}:도S`)) {
        atk_ex_buff += 1;
        atk_ex_bonus += 1;
        dmg.attacker *= 4 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      clean_part(new EroParticipant(atk.id, part_enum.mouth));
      era.set(`tcvar:${atk.id}:방금가학`, 2);
      era.set(`tcvar:${def.id}:방금피학`, part_enum.abuse + 100);
      break;
    case part_enum.hit:
      dmg.defender = base_damage.sm;
      dmg.attacker = base_damage.sm;
      era.add(`exp:${atk.id}:타격횟수`, 1);
      era.add(`exp:${def.id}:맞은횟수`, 1);
      update_sm_exp(date, atk.id, def.id);
      atk_ex_bonus =
        get_sm_buff(def.id, true) + 2 * era.get(`talent:${def.id}:고통좋아함`);
      if (era.get(`talent:${atk.id}:도S`)) {
        atk_ex_buff += 1;
        atk_ex_bonus += 1;
        dmg.attacker *= 3 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      clean_part(new EroParticipant(atk.id, part_enum.hand));
      era.set(`tcvar:${atk.id}:방금가학`, 2);
      era.set(`tcvar:${def.id}:방금피학`, part_enum.hit + 100);
      break;
    // 道具算作性虐攻击，施虐快感正常累积
    case part_enum.item:
      dmg.attacker = base_damage.sm;
      atk_cost = action_cost.spirit;
      update_sm_exp(date, atk.id, def.id);
      // 道具攻击的攻击力由道具属性决定
      if (new EroTouch(def.id, def_part).item === item) {
        atk_cost = { stamina: 0, time: 0 };
        dmg.attacker = base_damage.self_stay;
        dmg.defender = base_damage.item_stay;
      } else {
        dmg.defender = base_damage.item;
        clean_part(new EroParticipant(atk.id, part_enum.hand));
        switch (def_part) {
          case part_enum.clitoris:
            era.add(`exp:${def.id}:음부장난횟수`, 1);
            break;
          case part_enum.virgin:
            era.add(`exp:${def.id}:성교횟수`, 1);
            break;
          case part_enum.anal:
            era.add(`exp:${def.id}:애널횟수`, 1);
        }
        if (item !== item_enum.electric_stunner) {
          use_item(def.id, def.part, item);
        }
      }
      if (era.get(`talent:${atk.id}:도S`)) {
        atk_ex_bonus += 1;
        dmg.attacker *= 3 + get_sm_buff(atk.id);
      } else {
        dmg.attacker *= 1 + get_sm_buff(atk.id);
      }
      era.set(`tcvar:${atk.id}:방금가학`, 2);
      era.set(`tcvar:${def.id}:방금피학`, part_enum.item + 100);
  }
  //好色及未经人事无视部位加减技能等级
  atk_ex_buff += era.get(`talent:${atk.id}:성적성향`);
  // 失神or眼罩：+10%쾌감
  if (
    era.get(`tcvar:${def.id}:실신`) ||
    (!era.get(`tcvar:${def.id}:탈력`) &&
      !era.get(`status:${def.id}:우마뾰이Z`) &&
      !era.get(`status:${def.id}:숙면`) &&
      era.get(`tequip:${def.id}:안대`) !== -1)
  ) {
    atk_ex_bonus += 0.1;
  }
  if (atk.part !== part_enum.item) {
    // 技巧加成结算：기술、技巧buff，加算，每级+20伤害
    // 道具攻击力固定，不参与技巧加成结算
    // attack_extra_buff：特质加成
    dmg.defender +=
      20 * (era.get(`abl:${atk.id}:${atk_s_part}기술`) + atk_ex_buff);
  }
  // 掌握加成结算：숙련、掌握buff，与技巧乘算，每级增伤20%
  // attack_extra_bonus：特质加成
  dmg.defender *=
    1 +
    0.2 * era.get(`abl:${atk.id}:${part_names[def_part]}숙련`) +
    atk_ex_bonus;
  // 部位倍率结算
  dmg.attacker *= atk.times;
  dmg.defender *= def.times;
  // 波个动
  const love = !atk.id || !def.id ? era.get(`love:${atk.id || def.id}`) : 0;
  dmg.attacker && (dmg.attacker += get_random_delta(dmg.attacker, love));
  dmg.defender && (dmg.defender += get_random_delta(dmg.defender, love));
  // 先计算攻击者的快感上升
  // 手和脚自己增加的是施虐快感
  const atk_part =
    atk.part === part_enum.hand || atk.part === part_enum.foot
      ? part_enum.sadism
      : atk.part;
  calc_pleasure(atk.id, atk_part, dmg.attacker);
  // 计算攻击者的体力和精力消耗
  const end = [
    { id: atk.id, part: atk_part },
    { id: def.id, part: def_part },
  ].map((e) => {
    let val = era.get(`abl:${e.id}:${part_names[e.part]}내성`) || 0;
    if (
      !era.get(`cflag:${e.id}:성별`) &&
      (era.get(`status:${e.id}:펄롱K`) > 0 ||
        era.get(`status:${e.id}:펄롱P`) > 0)
    ) {
      val -= 2;
    }
    return val;
  });
  const atk_cost_down =
    Math.max(1 - 0.1 * end[0], 0.01) *
    (1 + 0.5 * (era.get(`tcvar:${atk.id}:여운`) > 0)) *
    atk.times;
  const def_cost_down =
    Math.max(1 - 0.1 * end[1], 0.01) *
    (1 + 0.5 * (era.get(`tcvar:${def.id}:여운`) > 0)) *
    def.times *
    (0.75 -
      0.5 *
        (era.get(`tcvar:${def.id}:탈력`) ||
          era.get(`status:${def.id}:우마뾰이S`) ||
          era.get(`status:${def.id}:숙면`)));
  if (atk_cost.stamina > 0) {
    era.add(
      `nowex:${atk.id}:체력소모`,
      Math.max(atk_cost.stamina * atk_cost_down, 1),
    );
  }
  if (atk_cost.time > 0) {
    era.add(
      `nowex:${atk.id}:기력소모`,
      Math.max(atk_cost.time * atk_cost_down, 1),
    );
  }
  if (def_cost.stamina > 0) {
    era.add(
      `nowex:${def.id}:체력소모`,
      Math.max(def_cost.stamina * def_cost_down, 1),
    );
  }
  if (def_cost.time > 0) {
    era.add(
      `nowex:${def.id}:기력소모`,
      Math.max(def_cost.time * def_cost_down, 1),
    );
  }
  calc_pleasure(def.id, def_part, dmg.defender);
  // 攻击者只能拿防御者对应部位的宝珠
  // 对面牛子是不应期，获得宝珠-90%（和快感计算同）
  add_juel(
    atk.id,
    `${part_names[def_part]}쾌감`,
    (dmg.defender /
      (def_part === part_enum.penis && era.get(`tcvar:${def.id}:불응기`)
        ? 10
        : 1)) *
      attack_juel_reward,
  );
  // 打击和道具攻击额外增加施虐伤害
  if (atk.part === part_enum.hit || atk.part === part_enum.item) {
    dmg.defender = base_damage.sm;
    dmg.defender *=
      1 +
      (era.get(`talent:${def.id}:고통좋아함`) > 0 &&
        (atk.part === part_enum.hit ||
          item === item_enum.clamps ||
          item === item_enum.electric_stunner)) +
      get_sm_buff(def.id, true);
    calc_pleasure(
      def.id,
      part_enum.masochism,
      dmg.defender + get_random_delta(dmg.defender, love),
      true,
    );
    // 攻击者拿额外的受虐宝珠
    add_juel(
      atk.id,
      `${part_names[part_enum.masochism]}쾌감`,
      dmg.defender * attack_juel_reward,
    );
  }

  const atk_touch = new EroTouch(atk.id, atk.part);
  const def_touch = new EroTouch(def.id, def_part);
  if (atk.part <= part_enum.penis && def.part <= part_enum.penis) {
    clean_part_without_item(atk, def);
  }
  // 如果是打击和电击，只记录施虐关系（打击之后道具不会停留在目标身上）
  if (atk.part === part_enum.hit || item === item_enum.electric_stunner) {
    merge_stain(atk, def);
    change_part(atk, new EroParticipant(def.id, part_enum.masochism));
  } else if (
    // 道具停留效果的情况下，只合并污垢
    atk_cost.time === 0 ||
    // 接触部位有道具的情况下，只合并污垢
    atk_touch.part === part_enum.item ||
    def_touch.part === part_enum.item
  ) {
    merge_stain(atk, def);
  } else {
    // 其他情况记录接触信息
    change_part(atk, new EroParticipant(def.id, def_part), item);
    if (atk.part === part_enum.item) {
      // 道具攻击额外生成一个受虐接触关系
      change_part(atk, new EroParticipant(def.id, part_enum.masochism));
    }
  }
  if (atk.part <= part_enum.penis && def.part <= part_enum.penis) {
    if (
      atk_touch.part !== part_enum.item &&
      (atk_touch.owner !== def.id || atk_touch.part !== def.part)
    ) {
      atk_touch.set(def.id, def.part);
    }
    if (
      def_touch.part !== part_enum.item &&
      (def_touch.owner !== atk.id || def_touch.part !== atk.part)
    ) {
      def_touch.set(atk.id, atk.part);
    }
  }
}

module.exports = sys_do_sex;
