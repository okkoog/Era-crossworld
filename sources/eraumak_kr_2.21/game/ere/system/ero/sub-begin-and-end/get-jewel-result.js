const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const { gene_juel_names } = require('#/data/other-const');

/**
 * @param {number} cid
 * @param {string[]} j_names
 * @param {Record<string,number>} j_info
 * @param {(PrintedSpan|string)[][]} a_info
 */
function get_jewel_result(cid, j_names, j_info, a_info) {
  const buffer = [];
  buffer.push({
    type: 'divider',
    config: {
      content: `${era.get(`callname:${cid}:-2`)} 의 인자`,
      position: 'left',
    },
  });
  const self_protect = j_info['-자위'];
  if (self_protect > 0) {
    buffer.push({
      content: [
        {
          color: palam_colors.notifications[0],
          content: self_protect.toLocaleString(),
        },
        ' 개의 자위인자가 다른 인자와 상쇄된 후:',
      ],
      type: 'text',
    });
  }
  for (const j_name of j_names) {
    const final = era.get(`juel:${cid}:${j_name}`);
    const got = j_info[j_name];
    const un_got = j_info[`-${j_name}`];
    if (got > 0 || un_got > 0) {
      buffer.push(
        {
          config: { width: 4 },
          content: `${j_name.substring(0, 2)}인자：`,
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [get_abbr_number(final - got), ' (보유) +'],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              ...get_abbr_number(got + un_got),
            },
            ' (획득) -',
          ],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[0],
              ...get_abbr_number(un_got),
            },
            ' (상쇄) = ',
          ],
          type: 'text',
        },
        {
          config: { align: 'right', width: 5 },
          content: [
            {
              color: palam_colors.notifications[1],
              fontWeight: 'bold',
              ...get_abbr_number(final),
            },
            ' (합계)',
          ],
          type: 'text',
        },
      );
    }
  }
  if (self_protect > 0) {
    const final = era.get(`juel:${cid}:자위`),
      got = j_info['자위'];
    buffer.push(
      {
        config: { width: 4 },
        content: '자위인자：',
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [get_abbr_number(final - got + self_protect), ' (보유) +'],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            ...get_abbr_number(got),
          },
          ' (획득) -',
        ],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[0],
            ...get_abbr_number(self_protect),
          },
          ' (상쇄) = ',
        ],
        type: 'text',
      },
      {
        config: { align: 'right', width: 5 },
        content: [
          {
            color: palam_colors.notifications[1],
            fontWeight: 'bold',
            ...get_abbr_number(final),
          },
          ' (합계)',
        ],
        type: 'text',
      },
    );
  }
  if (!cid) {
    // JEWELNAME:20 - 22 = 분홍색 - 흰색
    for (let jid = 20; jid <= 22; ++jid) {
      const final = era.get(`jewel:${cid}:${jid}`);
      const got = j_info[jid];
      const g_name = gene_juel_names[jid - 20];
      if (got > 0) {
        buffer.push(
          {
            config: { width: 4 },
            content: `${g_name}인자：`,
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: [get_abbr_number(final - got), ' (보유) + '],
            type: 'text',
          },
          {
            config: { align: 'right', width: 10 },
            content: [
              {
                color: palam_colors.notifications[1],
                ...get_abbr_number(got),
              },
              ' (획득) = ',
            ],
            type: 'text',
          },
          {
            config: { align: 'right', width: 5 },
            content: [
              {
                color: palam_colors.notifications[1],
                fontWeight: 'bold',
                ...get_abbr_number(final),
              },
              ' (합계)',
            ],
            type: 'text',
          },
        );
      }
    }
  }
  if (buffer.length === 1) {
    buffer.push({ content: '무변화', type: 'text' });
  }
  const buffer2 = [];
  if (cid > 0) {
    buffer2.push({
      config: {
        content: `${era.get(`callname:${cid}:-2`)} 의 각인`,
        position: 'left',
      },
      type: 'divider',
    });
    era.get('marknames').forEach((m_name) => {
      const change = era.get(`ex:${cid}:${m_name}획득`),
        now = era.get(`mark:${cid}:${m_name}`),
        color = mark_colors[m_name];
      if (change > 0) {
        buffer2.push({
          config: { width: 8 },
          content: [
            { color, content: `${m_name}각인` },
            '：',
            {
              color: get_gradient_color(undefined, color, (now - change) / 3),
              content: `Lv. ${now - change}`,
            },
            ' → ',
            {
              color: get_gradient_color(undefined, color, now / 3),
              content: `Lv. ${now}`,
            },
          ],
          type: 'text',
        });
      }
    });
    if (buffer2.length === 1) {
      buffer2.push({ content: '무변화', type: 'text' });
    }
  }
  const buffer3 = [];
  a_info.forEach((c) => {
    if (c.length > 0) {
      buffer3.push({ config: { width: 8 }, content: c, type: 'text' });
    }
  });
  if (buffer3.length > 0) {
    buffer3.unshift({
      config: {
        content: `${era.get(`callname:${cid}:-2`)}의 능력치`,
        position: 'left',
      },
      type: 'divider',
    });
  }
  return buffer.concat(buffer2).concat(buffer3);
}

module.exports = get_jewel_result;
