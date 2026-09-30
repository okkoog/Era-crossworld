const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_save_name } = require('#/data/info-generator');

module.exports = async () => {
  let flag_save_game = true;
  let msg_notification = '';

  while (flag_save_game) {
    await era.clear();
    print_page_header();

    const buffer = [];
    if (msg_notification) {
      buffer.push(
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: msg_notification,
          type: 'text',
        },
      );
    }
    buffer.push({ config: { content: '세이브 슬롯 선택' }, type: 'divider' });
    new Array(10).fill(0).forEach((_, e) => {
      const ind = e + 1;
      const comm_desc = era.get(`global:saves:${ind}`);
      buffer.push({
        accelerator: ind,
        config: { width: 20 },
        content: comm_desc || '빈 세이브 슬롯',
        type: 'button',
      });
      if (comm_desc && !comm_desc.startsWith('(FILE LOST)')) {
        buffer.push({
          accelerator: ind + 100,
          config: { align: 'right', width: 4 },
          content: '이름 바꾸기',
          type: 'button',
        });
      }
    });
    buffer.push(
      { type: 'divider' },
      {
        accelerator: 97,
        config: { width: 8 },
        content: '이 이야기에 이름을 지정',
        type: 'button',
      },
      {
        accelerator: 98,
        config: { disabled: !era.get('flag:세이브파일명'), width: 8 },
        content: '이 이야기의 이름을 초기화',
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'right', width: 8 },
        content: '돌아가기',
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);

    let ret = await era.input();

    switch (ret) {
      case 97:
        ret = '';
        do {
          era.print(
            `${
              ret ? '이름이 너무 깁니다!' : ''
            }세이브 파일의 이름을 입력해 주세요: (최대 20자)`,
          );
          ret = await era.input();
        } while (ret && ret.length > 50);
        if (
          await select_yes_or_no(
            `이 이야기의 이름을 [${ret}] (으)로 ${era.get('flag:세이브파일명') ? '변경합니까' : '지정합니까'}?`,
            '예',
            '아니오',
          )
        ) {
          era.set('flag:세이브파일명', ret);
          msg_notification = `이 이야기의 제목은 이제 [${ret}] 입니다...`;
        }
        break;
      case 98:
        if (
          await select_yes_or_no(
            `이 이야기 [${era.get('flag:세이브파일명')}]의 이름을 삭제하시겠습니까?`,
            '예',
            '아니오',
          )
        ) {
          era.set('flag:세이브파일명', '');
          msg_notification = '세이브파일 이름 지정이 취소되었으며 다음 저장 시 기본 이름을 사용합니다...';
        }
        break;
      case 99:
        flag_save_game = false;
        break;
      default:
        if (ret < 100) {
          const cur = era.get(`global:saves:${ret}`);
          if (cur && !cur.startsWith('(FILE LOST)')) {
            if (
              !(await select_yes_or_no(
                `${ret}번 슬롯에 덮어씌우시겠습니까?`,
                '예',
                '아니오',
              ))
            ) {
              break;
            }
          }

          if (await era.saveData(ret, get_save_name())) {
            msg_notification = `${ret}번 슬롯에 성공적으로 저장되었습니다`;
          }
        } else {
          let name;
          do {
            era.print(
              `${
                name ? '이름이 너무 깁니다!' : ''
              }새 세이브 이름을 입력해 주세요: (최대 50자)`,
            );
            name = await era.input();
          } while (name && name.length > 50);
          if (
            await select_yes_or_no(
              `${ret - 100}번 슬롯의 세이브를 [${name}](으)로 변경하시겠습니까?`,
              '예',
              '아니오',
            )
          ) {
            era.set(`global:saves:${ret - 100}`, name.toString());
            await era.saveGlobal();
            msg_notification = `${ret - 100}번 슬롯의 저장 파일 이름 변경 성공`;
          } else {
            msg_notification = `${ret - 100}번 슬롯의 저장 파일 이름 변경을 취소했습니다`;
          }
        }
    }
  }
};
