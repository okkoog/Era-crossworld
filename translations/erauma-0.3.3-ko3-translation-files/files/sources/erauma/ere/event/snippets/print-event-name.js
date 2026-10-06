// 번역 작업용 전체 원본 파일. [번역 완료]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/event/snippets/print-event-name.js
// 대상 함수/속성: CustomizedBase
const era = require('#/era-electron');

const { get_image } = require('#/system/sys-calc-image');

const CharaTalk = require('#/utils/chara-talk');

/**
 * @param {string|array} name
 * @param {CharaTalk} chara
 * @param {string} [color]
 * @param {number} [offset]
 */
async function print_event_name(name, chara, color = chara.color, offset = 0) {
  if (!(chara instanceof CharaTalk)) {
    console.error('캐릭터 객체 오류!', name, chara, color);
    return await era.printAndWait(name, {
      color,
      fontSize: '1.75rem',
      fontWeight: 'bold',
    });
  }
  era.setVerticalAlign('middle');
  era.printInColRows(
    {
      columns: [
        {
          config: { width: 20 },
          names: get_image(chara.id)
            .map((e) => (era.get('flag:立绘类型') > 0 ? `${e}_半身` : e))
            .join('\t'),
          type: 'image.whole',
        },
      ],
      config: { offset, width: 2 },
    },
    {
      columns: [
        {
          config: {
            color,
            fontSize: '1.75rem',
            fontWeight: 'bold',
          },
          content: name,
          type: 'text',
        },
        {
          config: { color: chara.color, fontSize: '0.75rem' },
          content: chara.full_name,
          type: 'text',
        },
      ],
      config: { width: 22 - offset, verticalAlign: 'middle' },
    },
  );
  era.setVerticalAlign('top');
  await era.waitAnyKey();
  era.println();
}

module.exports = print_event_name;
