const era = require('#/era-electron');

const { join_to_string } = require('#/utils/list-utils');

const { buff_colors, palam_colors } = require('#/data/color-const');
const { lust_palam_border } = require('#/data/ero/orgasm-const');

/**
 * @param {number} chara_id
 * @param {*[]} buffer
 * @param {string} part_name
 * @param {string} unsatisfied_desc
 */
function fill_part_ex(chara_id, buffer, part_name, unsatisfied_desc) {
  const content_buffer = [],
    ex = era.get(`ex:${chara_id}:${part_name}절정`),
    unknown_ex = era.get(`ex:${chara_id}:무자각${part_name}절정`);

  if (ex) {
    content_buffer.push(
      `${part_name}절정 `,
      {
        color: palam_colors.notifications[1],
        content: ex.toString(),
      },
      ' 회',
    );
    if (unknown_ex) {
      content_buffer.push(
        ', 하지만 그중 ',
        {
          color: palam_colors.notifications[1],
          content: unknown_ex.toString(),
        },
        '회는 자각하지 못했다',
      );
    }
  }

  if (
    era.get(`palam:${chara_id}:${part_name}쾌감`) >
    era.get(`tcvar:${chara_id}:${part_name}쾌감상한`) * lust_palam_border
  ) {
    content_buffer.push(
      content_buffer.length ? '；' : '',
      `${unsatisfied_desc}……`,
    );
  }

  if (content_buffer.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: content_buffer,
      type: 'text',
    });
  }
}

/**
 * @param {number} chara_id
 * @param {*[]} buffer
 * @param {string} part_name
 */
function fill_spirit_ex(chara_id, buffer, part_name) {
  const content_buffer = [],
    ex = era.get(`ex:${chara_id}:${part_name}절정`);
  if (ex) {
    content_buffer.push(
      `${part_name}(으)로 절정 `,
      {
        color: palam_colors.notifications[1],
        content: ex.toString(),
      },
      ' 회',
    );
  }

  if (
    era.get(`palam:${chara_id}:${part_name}쾌감`) >
    era.get(`tcvar:${chara_id}:${part_name}쾌감상한`) * lust_palam_border
  ) {
    if (content_buffer.length) {
      content_buffer.push('；');
    }
    content_buffer.push(
      era.get(`tcvar:${chara_id}:탈력`)
        ? `${part_name}의 꿈이 점차 잠들어 가는 몸을 뒤흔들었다`
        : `${part_name}(으)로 느꼈던 기쁨은 여전히 사라지지 않고 있다`,
      '……',
    );
  }

  if (content_buffer.length) {
    buffer.push({
      config: { offset: 1, width: 23 },
      content: content_buffer,
      type: 'text',
    });
  }
}

function get_ex_result_in_the_end(chara_id) {
  const buffer = [];
  buffer.push({
    config: {
      content: `${era.get(`callname:${chara_id}:-2`)}의 절정`,
      position: 'left',
    },
    type: 'divider',
  });
  const total_ex = era.get(`ex:${chara_id}:TotalEX`);
  if (total_ex) {
    buffer.push({
      content: [
        '이번 우마뾰이에서 ',
        { color: palam_colors.notifications[1], content: total_ex.toString() },
        '번 절정했다',
      ],
      type: 'text',
    });
    const multi_ex = new Array(5)
        .fill(0)
        .map((_, i) => era.get(`ex:${chara_id}:${i + 20}`)),
      count = multi_ex.reduce((p, c) => p + c);
    if (count) {
      const content_buffer = [];
      content_buffer.push(
        '특수 절정 ',
        {
          color: palam_colors.notifications[1],
          content: count.toString(),
        },
        '회, 내용: ',
      );
      multi_ex.forEach((e, i) => {
        if (e) {
          content_buffer.push(
            era.get(`exname:${i + 20}`),
            ' ',
            {
              color: palam_colors.notifications[1],
              content: e.toString(),
            },
            ' 회',
            '，',
          );
        }
      });
      content_buffer.pop();
      buffer.push({
        content: content_buffer,
        type: 'text',
      });
    }
    buffer.push({ content: [{ isBr: true }, '그중: '], type: 'text' });
    let content_buffer = [];
    fill_part_ex(
      chara_id,
      buffer,
      '구강',
      '만족하지 못한 입술이 여전히 살짝 벌어진 채 무언가를 기대하는 듯하다',
    );
    const breast_ex = era.get(`ex:${chara_id}:가슴절정`),
      unknown_breast_ex = era.get(`ex:${chara_id}:무자각가슴절정`),
      nipple_ex = era.get(`ex:${chara_id}:유두절정`),
      unknown_nipple_ex = era.get(`ex:${chara_id}:무자각유두절정`);
    if (breast_ex) {
      content_buffer.push(
        '가슴절정 ',
        {
          color: palam_colors.notifications[1],
          content: breast_ex.toString(),
        },
        '회',
      );
      if (unknown_breast_ex) {
        content_buffer.push(
          '，하지만 그중 ',
          {
            color: palam_colors.notifications[1],
            content: unknown_breast_ex.toString(),
          },
          '회는 전혀 자각하지 못했다',
        );
      }
      if (nipple_ex) {
        content_buffer.push(
          '；그중 ',
          {
            color: palam_colors.notifications[1],
            content: nipple_ex.toString(),
          },
          '회는 축적된 모유가 뿜어져 나올 때 발생했다',
        );
        if (unknown_nipple_ex) {
          content_buffer.push(
            ' 하지만 그중 ',
            {
              color: palam_colors.notifications[1],
              content: unknown_nipple_ex.toString(),
            },
            '회는 자각하지 못했다',
          );
        }
      }
    }
    if (
      era.get(`palam:${chara_id}:가슴쾌감`) >
      era.get(`tcvar:${chara_id}:가슴쾌감상한`) * lust_palam_border
    ) {
      content_buffer.push(
        content_buffer.length ? '；' : '',
        '갈증을 느끼는 유두가',
        era.get(`talent:${chara_id}:유두타입`) === 2
          ? ' 보호받던 함몰 구멍 밖으로'
          : '',
        ' 파르르 떨며 돌출되어 있다……',
      );
    }
    if (content_buffer.length) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(
      chara_id,
      buffer,
      '신체',
      '충분히 사랑받지 못한 몸이 번들거리는 땀과 홍조를 띠고 있다',
    );
    const penis_ex = era.get(`ex:${chara_id}:음경절정`),
      unknown_penis_ex = era.get(`ex:${chara_id}:무자각음경절정`);
    content_buffer = [];
    if (penis_ex) {
      content_buffer.push(
        '사정 ',
        {
          color: palam_colors.notifications[1],
          content: penis_ex.toString(),
        },
        '회，총 ',
        {
          color: palam_colors.notifications[1],
          content: `${era.get(`ex:${chara_id}:사정량`)}ml`,
        },
        '의 정액을 사정',
      );
      if (unknown_penis_ex) {
        content_buffer.push(
          '，하지만 그중 ',
          {
            color: palam_colors.notifications[1],
            content: unknown_penis_ex.toString(),
          },
          '회는 자각하지 못했다',
        );
      }
    }
    if (
      era.get(`palam:${chara_id}:음경쾌감`) >
      era.get(`tcvar:${chara_id}:음경쾌감상한`) * lust_palam_border
    ) {
      content_buffer.push(
        content_buffer.length ? '；' : '',
        '한계 직전의 페니스는 여전히 사정을 갈망하고 있다……',
      );
    }
    if (content_buffer.length) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: content_buffer,
        type: 'text',
      });
    }
    fill_part_ex(chara_id, buffer, '클리', '완전히 부풀어 오른 붉은 클리토리스가 요염하면서도 고통스러워 보인다');
    fill_part_ex(chara_id, buffer, '질', '달싹이는 보지가 연신 열기를 내뿜고 있다');
    const squirt = era.get(`ex:${chara_id}:시오후키`),
      secretion = era.get(`ex:${chara_id}:애액분비`);
    if (secretion > 0) {
      buffer.push({
        config: { offset: 1, width: 23 },
        content: join_to_string(
          [
            squirt > 0 ? `분수 ${squirt.toLocaleString()}회` : void 0,
            secretion > 0 ? `애액 분비 ${secretion.toLocaleString()}ml` : void 0,
          ],
          '，',
        ),
        type: 'text',
      });
    }
    fill_part_ex(chara_id, buffer, '항문', '애널이 움찔거리며 열기와 함께 굶주림을 호소하고 있다');
    fill_spirit_ex(chara_id, buffer, '가학');
    fill_spirit_ex(chara_id, buffer, '피학');
  }
  let temp_buffer = [];
  temp_buffer.push({
    content: '이번 우마뾰이에서: ',
    type: 'text',
  });
  if (era.get(`ex:${chara_id}:실정`) > 0) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '상실: ',
        {
          content: '【동정】',
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${chara_id}:음경절정`) === 0
          ? '아직 그 안에 깃든 힘은 발휘되지 못했다'
          : '',
      ],
      type: 'text',
    });
  }
  if (era.get(`ex:${chara_id}:파처`) > 0) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '상실: ',
        {
          content: '【처녀】',
          color: palam_colors.notifications[1],
        },
        era.get(`ex:${chara_id}:질구절정`) === 0
          ? '처녀의 몸은 처음으로 금단의 열매를 맛보는 경험 속에서 그 달콤함을 느끼지 못했다'
          : '',
      ],
      type: 'text',
    });
  }
  if (temp_buffer.length > 1) {
    if (buffer.length > 1) {
      buffer.push({ content: [{ isBr: true }], type: 'text' });
    }
    buffer.push(...temp_buffer);
  }
  temp_buffer = [];
  temp_buffer.push({ content: '그 동안: ', type: 'text' });
  let temp_val =
    era.get(`tcvar:${chara_id}:성욕저장`) - era.get(`base:${chara_id}:성욕`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '성욕이 크게 해소되었다!',
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '성욕이 대체로 해소되었다',
      type: 'text',
    });
  } else if (temp_val < -500) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '성욕은 오히려 더욱 쌓여만 갔다……',
      type: 'text',
    });
  }
  temp_val =
    era.get(`tcvar:${chara_id}:스트레스저장`) - era.get(`base:${chara_id}:스트레스`);
  if (temp_val > 2000) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '스트레스가 크게 해소되었다!',
      type: 'text',
    });
  } else if (temp_val > 800) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: '스트레스가 약간 풀렸다',
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:분유량`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '모유 ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 가 나왔다',
      ],
      type: 'text',
    });
  }
  temp_val = [
    era.get(`ex:${chara_id}:가슴빨기양`),
    era.get(`ex:${chara_id}:정액음용량`),
    era.get(`ex:${chara_id}:애액음용량`),
  ];
  if (temp_val.reduce((p, c) => p + c) > 0) {
    const buffer = [];
    buffer.push('마신 것: ');
    if (temp_val[0] > 0) {
      buffer.push(
        {
          color: palam_colors.notifications[1],
          content: `${temp_val[0].toLocaleString()}ml`,
        },
        ' 의 모유',
      );
    }
    if (temp_val[1] > 0) {
      buffer.push(
        buffer.length > 1 ? '，' : '',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val[1].toLocaleString()}ml`,
        },
        ' 의 정액',
      );
    }
    if (temp_val[2] > 0) {
      buffer.push(
        buffer.length > 1 ? '，' : '',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val[2].toLocaleString()}ml`,
        },
        ' 의 애액',
      );
    }
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: buffer,
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:질내정액`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '그 작은 구멍으로 받아들였다: ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 의 정액',
      ],
      type: 'text',
    });
  }
  if ((temp_val = era.get(`ex:${chara_id}:장내정액`))) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        '항문으로 받아들였다: ',
        {
          color: palam_colors.notifications[1],
          content: `${temp_val.toLocaleString()}ml`,
        },
        ' 의 정액',
      ],
      type: 'text',
    });
  }
  temp_val = [
    era.get(`ex:${chara_id}:질파열`),
    era.get(`ex:${chara_id}:애널파열`),
  ];
  if (temp_val[0] + temp_val[1]) {
    temp_buffer.push({
      config: { offset: 1, width: 23 },
      content: [
        temp_val[0] ? '질' : '',
        temp_val[0] && temp_val[1] ? '과' : '',
        temp_val[1] ? '애널' : '',
        '이 ',
        {
          content: '파열',
          color: buff_colors[3],
        },
        '되었다…… 분명 몹시 아플 것이다',
      ],
      type: 'text',
    });
  }
  if (temp_buffer.length > 1) {
    if (buffer.length > 1) {
      buffer.push({ content: [{ isBr: true }], type: 'text' });
    }
    buffer.push(...temp_buffer);
  }
  if (buffer.length === 1) {
    buffer.push({ content: '절정이 발생하지 않았다', type: 'text' });
  }
  return buffer;
}

module.exports = get_ex_result_in_the_end;
