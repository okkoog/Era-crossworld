const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const update_marks = require('#/system/ero/calc-sex/update-marks');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  update_juel_buff,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const print_ero_page = require('#/page/page-ero');

const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { location_enum } = require('#/data/locations');

async function select_medicine() {
  const item_list = ['슈퍼우마뾰이Z', '우마뾰이S']
    .map((e) => {
      return {
        n: e,
        c: era.get(`item:${e}`),
      };
    })
    .filter((e) => e.c);
  if (item_list.length) {
    const button_width = 24 / (item_list.length + 1);
    era.printMultiColumns([
      { content: '어떤 약을 쓸까?', type: 'text' },
      ...item_list.map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', width: button_width },
          content: `${e.n} (${e.c})`,
          type: 'button',
        };
      }),
      {
        accelerator: 999,
        config: { align: 'center', width: button_width },
        content: '돌아가기',
        type: 'button',
      },
    ]);
    const ret = await era.input();
    return ret < item_list.length ? item_list[ret].n : undefined;
  } else {
    await era.printAndWait('쓸 약이 없다……');
  }
}

/**
 * @param {CharaTalk} chara
 * @returns {Promise<boolean>} if don't use
 */
async function ask_drink_medicine(chara) {
  const ret = await select_medicine();
  if (!ret) {
    return true;
  }
  await era.printAndWait([chara.get_colored_name(), `은(는)【${ret}】을(를) 얌전히 마셨다……`]);
  await era.printAndWait([
    chara.get_colored_name(),
    ret === '우마뾰이S' ? '은(는) 얼굴이 붉게 달아오른 채 잠들었다……' : '은(는) 엄청나게 흥분했다!',
  ]);
  era.set(`status:${chara.id}:${ret}`, 1);
  era.add(`item:${ret}`, -1);
}

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function fail(chara, me) {
  await era.printAndWait([
    chara.get_colored_name(),
    '은(는) ',
    me.get_colored_name(),
    '을(를) 재빨리 밀어 쓰러뜨리고 자리를 떠났다……',
  ]);
  sys_change_attr_and_print(0, '체력', -100);
  sys_like_chara(chara.id, 0, -400) && (await era.waitAnyKey());
  await era.printAndWait([
    '바록 ',
    chara.get_colored_name(),
    '은(는) 이 일을 공개적으로 발설하진 않았지만 ',
    me.get_colored_name(),
    '의 사회적 평판은 떨어졌다!',
  ]);
  sys_change_fame(-100);
  era.set('flag:변태행위', 1);
  if (era.get('flag:현재상호작용캐릭터') === chara.id) {
    era.set('flag:현재상호작용캐릭터', 0);
  }
  switch (era.get('flag:현재위치')) {
    case location_enum.chairman:
    case location_enum.gate:
    case location_enum.trainer:
    case location_enum.visitor:
    case location_enum.clinic:
      return 2;
  }
}

/**
 * @param {number} cid
 * @param {number} sex_loc
 * @returns {Promise<boolean|number|undefined>} if skip the week
 */
async function goto_sex(cid, sex_loc) {
  era.drawLine();
  if (await game_guides.office_sex()) {
    return;
  }
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  if (!sys_check_awake(cid)) {
    era.printMultiColumns([
      {
        content: [
          chara.get_colored_name(),
          '은(는) 푹 자고 있다.',
          { isBr: true },
          '우마뾰이할까?',
        ],
        type: 'text',
      },
      {
        accelerator: 0,
        config: { align: 'center', width: 12 },
        content: '우마뾰이!',
        type: 'button',
      },
      {
        accelerator: 100,
        config: { align: 'center', width: 12 },
        content: '그만두자',
        type: 'button',
      },
    ]);
    const ret = await era.input();
    if (!ret) {
      era.set('flag:현재위치', sex_loc);
      begin_and_init_ero(0, cid);
      await print_ero_page(cid);
      await end_ero_and_show_result(true);
    }
  } else {
    const love_check = era.get(`love:${cid}`) >= 50;
    const check =
      love_check || era.get('flag:징벌강도') >= 2
        ? get_sex_acceptable(cid)
        : -1;
    let ret, dice;
    if (check >= 0) {
      era.printMultiColumns(
        [
          {
            content: [
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '을(를)',
              love_check ? ' 애틋한 눈빛으로 바라본다...' : ' 약간 경박한 눈빛으로 바라본다...',
              me.get_colored_name(),
              { isBr: true },
              '은(는) 어떻게 할까?',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 4 },
            content: love_check ? '구애한다' : '헌신한다',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: '하룻밤을 보낸다',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 4 },
            content: '강간 플레이',
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: '미약 사용',
            type: 'button',
          },
          {
            accelerator: 4,
            config: { align: 'center', width: 4 },
            content: '그만두기',
            type: 'button',
          },
        ],
        { horizontalAlign: 'space-around' },
      );
      ret = await era.input();
      if (ret === 4) {
        return;
      } else if (ret === 1) {
        era.set('flag:잠자리파트너', cid);
        return true;
      } else {
        era.set('flag:현재위치', sex_loc);
      }
      let is_rape = 0;
      switch (ret) {
        case 2:
          if (
            love_check &&
            (await select_yes_or_no('', `${chara.sex}를 거칠게 다룬다`, '거칠게 다뤄달라고 한다'))
          ) {
            is_rape = 1;
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 곧 강간당할 것 같은 공포에 질린 표정을 지었다……',
            ]);
          } else {
            is_rape = 2;
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 공포에 질린 표정을 지어',
              chara.get_colored_name(),
              '의 야성을 자극했다……',
            ]);
          }
          break;
        case 3:
          if (await ask_drink_medicine(chara)) {
            return;
          }
      }
      begin_and_init_ero(0, cid);
      if (is_rape === 1) {
        era.set('tflag:강간', 0);
        update_juel_buff(cid);
      } else if (is_rape === 2) {
        era.set('tflag:강간', cid);
      }
      if (
        era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0 ||
        is_rape === 2 ||
        !love_check
      ) {
        era.set('tflag:주도권', cid);
      }
      await print_ero_page(cid);
      await end_ero_and_show_result(true);
    } else {
      const l_pleasure =
        era.get(`mark:${cid}:음문`) ||
        era.get(`mark:${cid}:쾌락`) -
          Math.max(era.get(`mark:${cid}:고통`), era.get(`mark:${cid}:수치`));
      const l_meek = era.get(`mark:${cid}:동심`) - era.get(`mark:${cid}:반발`);
      const is_pleasure = l_pleasure > l_meek;
      const accept = Math.max(l_pleasure, l_meek) / 3 > Math.random();
      if (accept) {
        era.printMultiColumns([
          {
            content: [
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '과(와) 우마뾰이 하기 싫은 것 같다...',
              { isBr: true },
              is_pleasure
                ? `하지만 육체의 쾌락에 굴복한 마음 탓에 거절할 수 없게 되었다...`
                : '하지만 순종적으로 몸을 내어 주었다...',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 6 },
            content: '조교 시작',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 6 },
            content: '하룻밤 묵게 하기',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 6 },
            content: '성감 증진제',
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', width: 6 },
            content: '그만두기',
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 3) {
          return;
        } else if (ret === 1) {
          era.set('flag:잠자리파트너', cid);
          return true;
        } else {
          era.set('flag:현재위치', sex_loc);
        }
        if (ret === 2 && (await ask_drink_medicine(chara))) {
          return;
        }
        begin_and_init_ero(0, cid);
      } else {
        era.printMultiColumns([
          {
            content: [
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '과(와) 우마뾰이 하기 싫은 것 같다...',
              { isBr: true },
              '어떻게 할까?',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 8 },
            content: '강간 시도',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 8 },
            content: '약물 투여 시도',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 8 },
            content: '그만두기',
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 2) {
          return;
        } else if (ret === 0) {
          sys_change_attr_and_print(
            0,
            '체력',
            -get_random_value(0, Math.min(era.get('base:0:체력'), 200)),
          );
          sys_change_attr_and_print(
            cid,
            '체력',
            -get_random_value(0, Math.min(era.get(`base:${cid}:체력`), 200)),
          );
          if (
            !era.get('flag:강간저항') ||
            sys_get_strength_ratio_in_fight(0, cid) > (dice = Math.random())
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              '의 힘이 ',
              me.get_colored_name(),
              '의 뻔뻔한 욕망을 뒷받침했다...',
            ]);
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 공포에 질린 표정이다...',
            ]);
            sys_like_chara(cid, 0, -400) && (await era.waitAnyKey());
            era.set('flag:현재위치', sex_loc);
            begin_and_init_ero(0, cid);
            era.set('tflag:강간', 0);
            update_juel_buff(cid);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              chara.get_colored_name(),
              '을(를) 제압하지 못했다...',
            ]);
            return await fail(chara, me);
          }
        } else {
          ret = await select_medicine();
          if (!ret) {
            return;
          }
          sys_change_attr_and_print(
            0,
            '기력',
            -get_random_value(0, Math.min(era.get('base:0:기력'), 200)),
          );
          era.add(`item:${ret}`, -1);
          if (
            !era.get('flag:강간저항') ||
            sys_get_intelligence_ratio_in_fight(0, cid) > (dice = Math.random())
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              '의 비열한 잔재주가 통했다...',
            ]);
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 약이 든 차를 마시고 ',
              ret === '우마뾰이S'
                ? '깊게 잠들었다...'
                : '솟구친 욕망에 이성을 잃어버렸다...',
            ]);
            era.set(`status:${cid}:${ret}`, 1);
            era.set('flag:현재위치', sex_loc);
            begin_and_init_ero(0, cid);
          } else {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 재빨리 이상함을 감지했다...',
            ]);
            return await fail(chara, me);
          }
        }
      }
      if (era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0) {
        era.set('tflag:주도권', cid);
      }
      await print_ero_page(cid);
      if (check < 0) {
        if (era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0) {
          await era.printAndWait([
            '비록 순간적인 감정에 휩쓸렸지만 ',
            chara.get_colored_name(),
            '은(는) 정신을 차리고 나면 이 일에 부끄러움과 분노를 느낄 것이다...',
          ]);
          sys_like_chara(cid, 0, -400) && (await era.waitAnyKey());
          if (
            era.get(`mark:${cid}:수치`) < 3 &&
            !era.get(`ex:${cid}:수치획득`)
          ) {
            era.set(`nowex:${cid}:수치획득`, 1);
          }
          if (
            era.get(`mark:${cid}:반발`) < 3 &&
            !era.get(`ex:${cid}:반발획득`)
          ) {
            era.set(`nowex:${cid}:반발획득`, 1);
          }
          await update_marks(true, cid);
          if (dice < 0.95) {
            era.add(`status:${cid}:피로`, 3 + (dice < 0.05));
          }
        } else if (era.get(`status:${cid}:우마뾰이S`)) {
          if (dice < 0.95) {
            era.add(`status:${cid}:피로`, 2 + (dice < 0.05));
          }
        } else if (era.get('tflag:강간') === 0) {
          if (
            era.get(`mark:${cid}:고통`) < 3 &&
            !era.get(`ex:${cid}:고통획득`)
          ) {
            era.set(`nowex:${cid}:고통획득`, 1);
          }
          if (
            era.get(`mark:${cid}:반발`) < 3 &&
            !era.get(`ex:${cid}:반발획득`)
          ) {
            era.set(`nowex:${cid}:반발획득`, 1);
          }
          await update_marks(true, cid);
          if (dice < 0.95) {
            sys_hurt_uma(cid, 1 + (dice < 0.05));
          }
        }
      }
      await end_ero_and_show_result(true);
    }
  }
}

module.exports = goto_sex;
