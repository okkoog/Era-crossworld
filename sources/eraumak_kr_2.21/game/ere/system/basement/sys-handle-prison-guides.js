/**
 * @file 地下室教学
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

async function sys_handle_prison_guides() {
  const my_name = get_chara_talk(0).get_colored_name();
  let flag = true;
  const action_list = [
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서는', '승리를 귀하게 여기나, 오래 끄는 것를 귀하게 여기진 않는다.');
        await era.printAndWait([
          my_name,
          '은(는) 현재 수단을 동원해 직접 탈출을 시도할 수 있다. 하지만 《지하실 주인》이 돌아왔을 때는 잠시 멈춰야 하며, 운이 나빠 들키기라도 한다면 보복을 당하게 될지도 모른다……',
        ]);
      },
      n: '탈출 시도',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '승리를 예견할 수는 있지만, 승리를 장담할 수는 없다.');
        await era.printAndWait([
          '탈출할 기회가 보이지 않을 때, ',
          my_name,
          '은(는) 가만히 앉아 정신을 가다듬으며 대책을 세울 수 있다.',
        ]);
        await say_by_passer_by_and_wait(
          '???',
          '이렇게 하면 《지하실 주인》이 막 돌아오거나 잠에서 깨어나는 순간을 놓치지 않을 수 있지.',
        );
      },
      n: '우두커니 앉아있기',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '잘 휴양시켜 피로하지 않게 하고, 사기를 높이며 그 힘을 축적하라.');
        await era.printAndWait([
          '피로를 느낄 때, ',
          my_name,
          '은(는) 즉시 잠자리에 들어 체력과 기력을 보충하는 것이 상책이다.',
        ]);
      },
      n: '잠깐 자기',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '군대에 먹을 것이 없으면 망하는 법이다.');
        await era.printAndWait([
          '장기전에 대비하기 위해, ',
          my_name,
          '은(는) 신체 소모를 버틸 음식을 섭취해야 한다. 한 번의 식사는 장시간 체력을 회복시켜주는 효과가 있다.',
        ]);
        await say_by_passer_by_and_wait(
          '???',
          '하지만 주인이 음식에 무언가 장난을 쳤을지도 모르니 조심해…… 만약 그 녀석이 너무 경계하고 있다면 말이야.',
        );
      },
      n: '음식 섭취',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '최상은 적의 싸우려는 의도 자체를 깨는 것이고, 다음은 적의 외교를 깨는 것이다.');
        await era.printAndWait([
          '지하실 주인과 좋은 관계를 유지하는 것은 ',
          my_name,
          '에게 결코 나쁜 일이 아니다.',
        ]);
        await say_by_passer_by_and_wait(
          '???',
          '주인의 경계심을 늦추게 할 수도 있을 테니까.',
        );
      },
      n: '비위 맞추기',
    },
    {
      async h() {
        await say_by_passer_by_and_wait(
          '병법에서 이르길',
          '적을 잘 선동하는 자는 적이 필히 미끼를 탈취하게 만든다.',
        );
        await era.printAndWait(
          '지하실 주인에게 육체를 내맡김으로써, 어쩌면 전황을 뒤집을 기회를 엿볼 수 있을지도 모른다.',
        );
      },
      n: '침대로 유혹',
    },
    {
      async h() {
        await say_by_passer_by_and_wait(
          '병법에서 이르길',
          '변칙을 잘 운용하는 자는 천지처럼 작전이 궁색해지지 않으며 강물처럼 고갈되지 않는다.',
        );
        await era.printAndWait([
          '만약 ',
          my_name,
          '이(가) 자신의 힘과 지능에 충분히 자신이 있다면, 지하실 주인을 기습하여 활로를 찾아보는 것도 방법이다. 다만 실패했을 때의 대가는 각오해야 할 것이다.',
        ]);
      },
      n: '기습 공격',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '전쟁을 하는 자는 정석으로 대적하고 변칙으로 승리한다.');
        await era.printAndWait(
          '힘에 자신이 있다면 정면으로 반항하는 것이 늘 효과적인 수단이 된다. 특히 지하실의 장치가 거의 해제되었을 때라면 더욱 그렇다.',
        );
        await era.printAndWait(
          '하지만 장치를 완전히 무력화하지 못한 상태에서 주인이 정신을 차릴 기회를 준다면, 뒷감당은 본인의 몫이다……',
        );
      },
      n: '정면으로 반항',
    },
    {
      async h() {
        await say_by_passer_by_and_wait('병법에서 이르길', '최상은 적의 싸우려는 의도 자체를 깨는 것이고, 다음은 적의 외교를 깨는 것이다.');
        await era.printAndWait([
          '만약 지하실 주인이 ',
          my_name,
          '에게서 원하는 바를 이미 충분히 얻었다면, 해방해달라는 요청을 들어줄지도 모른다.',
        ]);
      },
      n: '해방 요청',
    },
  ];

  const lines = era.getLineCount();
  while (flag) {
    era.printMultiColumns([
      { type: 'divider'},
      {
        content: [
          my_name,
          '은(는) 아무래도 ',
          { content: '【누군가】', fontWeight: 'bold'},
          '에게 납치되어 이 지하실에 갇힌 모양이다.',
          { isBr: true },
          '빛 한 점 들지 않는 이곳에서는 ',
          { content: '【시간의 흐름조차 정확히 알 수 없으며】', fontWeight: 'bold'},
          ', 앞으로 고된 나날이 이어질 것으로 보인다.',
          { isBr: true },
          '도움이 필요한 내용이 있는가?',
        ],
        type: 'text',
      },
      ...action_list.map((e, i) => ({
        accelerator: i + 1,
        config: { width: 6 },
        content: e.n,
        type: 'button',
      })),
      { content: [], type: 'text'},
      {
        accelerator: 99,
        config: { width: 6 },
        content: '돌아가기',
        type: 'button',
      },
    ]);
    const ret = await era.input({ hideInput: true });
    if (ret === 99) {
      flag = false;
    } else {
      era.drawLine({ content: action_list[ret - 1].n });
      await action_list[ret - 1].h();
    }
    if (flag) {
      await era.clear(era.getLineCount() - lines);
    }
  }
}

module.exports = sys_handle_prison_guides;