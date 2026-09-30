const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

async function use_glasses(item) {
  const item_name = era.get(`itemname:${item}`);
  if (!era.get('item:만능안경테')) {
    await era.printAndWait(`【${item_name}】을(를) 설치할 안경테가 없습니다!`);
    return;
  }
  if (era.get(`status:0:${item_name}`)) {
    await era.printAndWait(`【만능안경테】에 【${item_name}】을(를) 장착했습니다……`);
  } else {
    const ret = await select_yes_or_no(
      `【만능 안경테】에 【${item_name}】을(를) 장착하시겠습니까? 기존 렌즈가 파손될 수 있습니다!`,
    );
    if (ret) {
      await era.printAndWait(`【만능안경테】에 【${item_name}】을 장착했습니다……`);
      if (era.get('status:0:호감도렌즈')) {
        await era.printAndWait('기존의 【호감도렌즈】가 파손되었습니다!');
        era.set('status:0:호감도렌즈', 0);
      } else if (era.get('status:0:우마뾰이횟수렌즈')) {
        await era.printAndWait('기존의 【우마뾰이횟수렌즈】가 파손되었습니다!');
        era.set('status:0:우마뾰이횟수렌즈', 0);
      } else if (era.get('status:0:투시렌즈')) {
        await era.printAndWait('기존의 【투시렌즈】가 파손되었습니다!');
        era.set('status:0:투시렌즈', 0);
      }
      era.set(`status:0:${item_name}`, 1);
      era.add(`item:${item_name}`, -1);
      return true;
    }
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[25] = async () => {
    const cur_line = era.getLineCount();
    let to_use = 1,
      flag_use = true,
      flag_print = true,
      timer = era.get('status:0:우마토커');
    if (timer >= 99) {
      to_use = 0;
    } else {
      const amount = Math.min(era.get('item:우마토커'), 99 - timer);
      while (flag_use) {
        era.setAlign('center');
        (flag_print ? era.printInColRows : era.replaceInColRows)(
          [
            {
              config: { align: 'left' },
              content: '사용할 우마토커 포인트 카드 수를 선택하세요.',
              type: 'text',
            },
          ],
          [
            {
              accelerator: 2,
              config: { disabled: to_use < 2, width: 2 },
              content: '-10',
              type: 'button',
            },
            {
              accelerator: 4,
              config: { disabled: !to_use, width: 2 },
              content: '-1',
              type: 'button',
            },
            { config: { width: 2 }, content: to_use, type: 'text' },
            {
              accelerator: 6,
              config: { disabled: to_use === amount, width: 2 },
              content: '+1',
              type: 'button',
            },
            {
              accelerator: 8,
              config: { disabled: to_use === amount, width: 2 },
              content: '+10',
              type: 'button',
            },
            { content: [], type: 'text' },
            {
              accelerator: 5,
              config: { width: 3 },
              content: '확인',
              type: 'button',
            },
            {
              accelerator: 0,
              config: { width: 3 },
              content: '취소',
              type: 'button',
            },
          ],
        );
        era.setAlign('left');
        switch (await era.input({ hideInput: true })) {
          case 2:
            to_use = Math.max(to_use - 10, 0);
            break;
          case 4:
            to_use--;
            break;
          case 6:
            to_use++;
            break;
          case 8:
            to_use = Math.min(to_use + 10, amount);
            break;
          case 5:
            flag_use = false;
            break;
          case 0:
            to_use = 0;
            flag_use = false;
        }
        flag_print = false;
      }
    }
    if (to_use > 0) {
      await era.clear(era.getLineCount() - cur_line);
      if (await select_yes_or_no(['우마토커 카드', to_use, '장을 사용하시겠습니까?'])) {
        const timer = era.add('status:0:우마토커', to_use);
        era.add('item:우마토커', -to_use);
        await get_chara_talk(0).say_as_unknown_and_wait(
          to_use === timer
            ? `【우마토커】앱을 이용해 주셔서 감사합니다! 회원 자격은 ${timer}주 후에 만료됩니다.`
            : `【우마토커】앱의 구독을 갱신해 주셔서 감사합니다! 회원 자격은 ${timer}주 후에 만료됩니다.`,
        );
        return true;
      }
    } else if (timer > 0) {
      await era.clear(era.getLineCount() - cur_line);
      await get_chara_talk(0).say_as_unknown_and_wait(
        `회원 자격은 ${timer}주 후에 만료됩니다.`,
      );
    }
  };

  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[i + 27] = (item_id) => use_glasses(item_id)));
};
