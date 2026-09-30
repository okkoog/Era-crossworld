/**
 * EraUma - 愛若駑馬（EraUma）是以某頁遊公司旗下馬耳學生妹作品爲世界觀製作的一款同人文字冒險遊戲.
 * 該世界觀的核心圍繞娘化的名賽馬和歷史上曾發生過的比賽展開.
 * 玩家將在遊戲中扮演訓練員——即負責訓練馬娘的角色——與諸多馬娘邂逅並創作獨屬於玩家和其負責馬娘的故事.
 *
 * Copyright (C) 2025 UmaERA Team <erauma@tutanota.com>
 *
 * 本程序是免费软件；您可以根据自由软件基金会发布的 GNU 通用公共许可证
 * 的条款重新分发和/或修改它；许可证的版本可以是第2版，也可以是（由您选择）
 * 任何更高版本.
 *
 * 本程序的分发是希望它会有用，但没有任何担保；甚至没有适销性或特定用途
 * 适用性的暗示担保.请参阅 GNU 通用公共许可证以获取更多详细信息.
 *
 * 您应该已经随本程序收到了 GNU 通用公共许可证的副本；如果没有，请联系
 * UmaERA Team <erauma@tutanota.com>.
 */
const era = require('#/era-electron');

const { set_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const global_achievement = require('#/system/global/sys-calc-achievement');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const new_game = require('#/page/new-game/page-new-game');
const homepage = require('#/page/page-homepage');
const load_game = require('#/page/page-load-game');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { join_list } = require('#/utils/list-utils');

const { generate_copyrights, get_copyright_entry } = require('#/copyright');
const { get_chara_color } = require('#/data/chara-colors');
const notes = require('#/data/notes.json');
const { first_child_id } = require('#/data/other-const');

const { res_version } = require('#/versions');

module.exports = async () => {
  let flagTitle = true;
  CharaTalk.me = new CharaTalk(0);

  era.printMultiColumns(
    [
      {
        config: {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
        content: '면책사항',
        type: 'text',
      },
      {
        content: [
          '1. 본 게임은 개발자의 취미 활동 및 코딩 연습을 목적으로 제작되었으며, 개발자의 저급한 취향과 저속한 사고방식에서 비롯된 것으로, 어떠한 경제적 수익이나 이익 추구도 없습니다.',
          { isBr: true },
          '2. 본 게임에는 다량의 R18 성인 콘텐츠가 포함되어 있으며, 등장할 수 있는 내용으로는 다자간 성관계, 조교, 경미한 SM, 비동의 성행위, 근친상간 등이 있습니다. 등장하지 않는 내용으로는 강제 NTR, 중증 SM, 잔혹한 장면, R18G 등이 있습니다.',
          { isBr: true },
          '3. 본 게임은 디자인 철학과 게임 콘텐츠 면에서 era 및 기타 다양한 작품을 접목하였으므로, era 시리즈 플레이어 또는 텍스트 에로게 애호가에게만 적합하며, 일반 플레이어에게는 적합하지 않습니다. 특히 미성년자의 플레이는 엄격히 금지됩니다.',
          { isBr: true },
          '4. 본 게임에 사용된 소재 리소스는 개발자 자체 제작, 인터넷 수집 및 협력자 제공을 포함하며, 개발자와 협력자는 서로 다른 세계, 종족, 국가 및 민족 출신이며, 서로 간에 경제적 관계는 존재하지 않습니다.',
          { isBr: true },
          '5. 본 게임의 유일한 공식 배포 주소는 ',
          { content: '깃 저장소', url: 'https://gitgud.io/umaera/erauma' },
          '입니다. 게임의 특성상, 미성년자가 접할 수 있는 공개 장소에서 본 게임을 전시하거나 배포하는 것을 금지하며, 어떠한 상업 활동(판매/부록 제공 등)이나 공개 활동(라이브 방송 등)에서도 본 게임을 사용하는 것을 금지합니다. ',
          { isBr: true },
          '6. 게임의 출처를 명확히 명시하거나 보존하고, 어떠한 상업적 목적이나 경제적 이익도 포함하지 않으며, 본 면책 조항을 준수하는 경우,',
          {
            content: 'GPL 2.0 only 오픈소스 라이선스',
            fontWeight: 'bold',
            url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
          },
          ' 및 ',
          {
            content: '크리에이티브 커먼즈 저작자표시 라이선스',
            fontWeight: 'bold',
            url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
          },
          '의 조건 하에, 타인이 본 게임을 기반으로 수정하거나 2차 개발하는 것을 허용합니다(파생 저작물을 모드판 이라 칭함). 이 라이선스는 본 게임의 모든 플레이어에게 직접 부여되며, 개발자의 별도의 명시적 동의를 구할 필요는 없으나, 게임 제목 및 타이틀 화면 등에 모드판임을 명시하고 원본과 명확히 구별해야 합니다.',
          { isBr: true },
          '7. 본 선언의 해석권은 개발자에게 있으며, 버전 업데이트 시 선언 내용이 변경될 수 있으므로 최신 버전을 기준으로 삼아 주십시오.',
          { isBr: true },
          '8. 이상의 여러 가지 조건이 중첩된 점을 고려하여, 과감한 생각을 가진 분들은 지금 창을 닫고 즉시 게임을 삭제하시기 바랍니다. 삭제하지 않는 한 귀하가 본 선언을 이해하고 준수하는 것으로 간주하며, 이를 준수하지 않아 발생하는 어떠한 사고나 법적 책임도 개발자와는 무관합니다.',
        ],
        type: 'text',
      },
      {
        accelerator: 1,
        content: '위의 8가지 내용을 모두 읽고 이해했습니다. 저는 제 행동에 책임을 지며, 삭제하지 않고 게임을 계속하겠습니다.',
        type: 'button',
      },
      {
        accelerator: 2,
        content: '남사스러워! 안할래!',
        type: 'button',
      },
    ],
    {
      offset: 4,
      width: 16,
    },
  );
  if ((await era.input()) === 2) {
    era.quit();
  }
  set_chara_ero_image();
  const { versionName, site, author } = era.get('gamebase');

  const date = new Date();
  const real_month = date.getMonth() + 1;
  const real_date = date.getDate();
  const birthday = [];
  era.getAllCharacters().forEach((e) => {
    if (
      e > 0 &&
      e < 1000 &&
      era.get(`staticcflag:${e}:종족`) > 0 &&
      era.get(`staticcflag:${e}:출생월`) === real_month &&
      era.get(`staticcflag:${e}:출생일`) === real_date
    ) {
      if (birthday.length > 0) {
        birthday.push('，');
      }
      birthday.push({
        color: get_chara_color(e),
        content: era.get(`static:${e}:name`),
        fontWeight: 'bold',
      });
    }
  });
  const b_index = birthday.findLastIndex((e) => e === '，');
  birthday[b_index] = ' 그리고 ';

  const copyrights = generate_copyrights();
  const buttons = [
    {
      c: '새 게임 시작',
      async h() {
        const achievements = sys_personal_achievement
          .list()
          .filter((e) => e < 200);
        let ret = 0;
        if (achievements.length > 0) {
          era.drawLine();
          era.printButton('당신 생성', 1);
          era.printButton('역극 모드', 2);
          if ((await era.input()) === 2) {
            era.printMultiColumns([
              { config: { content: '연기할 캐릭터 선택' }, type: 'divider' },
              {
                accelerator: 0,
                config: {
                  align: 'center',
                  width: 6,
                },
                content: '나 자신',
                type: 'button',
              },
              ...achievements.map((e) => {
                return {
                  accelerator: e,
                  config: {
                    align: 'center',
                    buttonType: '',
                    color: get_chara_color(e),
                    width: 6,
                  },
                  content: `${era.get(`static:${e}:name`)}${
                    check_rec_script(e) && check_edu_script(e) ? '*' : ''
                  }`,
                  type: 'button',
                };
              }),
              {
                content: [
                  '* 별표 기호',
                  { content: '*', fontWeight: 'bold' },
                  ' 가 있는 캐릭터는 전용 구상 존재',
                  { isBr: true },
                  '** 캐릭터 업적을 달성한 캐릭터만 역극 모드로 진행 가능',
                  { isBr: true },
                  '*** ',
                  get_copyright_entry(201),
                  '、',
                  get_copyright_entry(204),
                  '、',
                  get_copyright_entry(301),
                  '、',
                  get_copyright_entry(304),
                  '、',
                  get_copyright_entry(400),
                  ' 같은 캐릭터는 플레이 불가능',
                ],
                type: 'text',
              },
            ]);
            ret = await era.input();
          }
        }
        if (await new_game(ret)) {
          era.set('global:튜토리얼', 1);
          await homepage();
        }
      },
    },
    {
      c: '이어하기',
      async h() {
        if (await load_game()) {
          await homepage();
        }
      },
    },
    {
      c: '게임 업적',
      h: global_achievement.show.bind(global_achievement),
    },
    {
      c: '캐릭터 업적',
      async h() {
        era.printMultiColumns([
          { config: { content: '캐릭터 업적 획득 현황' }, type: 'divider' },
          ...era
            .get('chara')
            .filter((e) => e && e < first_child_id)
            .map((e) => {
              const title = era.get(`staticcstr:${e}:칭호`),
                desc = sys_personal_achievement.describe(e, title);
              return {
                config: {
                  align: 'center',
                  color: get_chara_color(e),
                  width: 6,
                },
                content: sys_personal_achievement.get(e)
                  ? [
                      era.get(`static:${e}:name`),
                      '：',
                      {
                        content: title,
                        fontWeight: 'bold',
                        title: `${title}：${desc}`,
                      },
                    ]
                  : [
                      {
                        content: '？？？',
                        title: `${era.get(`static:${e}:name`)}：${era.get(`staticcstr:${e}:칭호`)}\n${desc}`,
                      },
                    ],
                type: 'text',
              };
            }),
          {
            content:
              '* 캐릭터 육성 목표와 가장 높은 칭호 조건을 동시에 달성하면 해당 캐릭터의 업적을 달성할 수 있습니다.\n** 업적을 달성하면 모든 세이브에서 해당 캐릭터 모집 시 초기 호감도 +300, 유럽 우마무스메는 처음부터 모집할 수 있습니다.',
            type: 'text',
          },
        ]);
        era.printButton('돌아가기', 0, { align: 'center', hideInput: true });
        await era.input();
      },
    },
    {
      c: '도움말',
      async h() {
        era.drawLine();
        for (const note of notes.common
          .filter(() => true)
          .sort((a, b) => (a[0] > b[0] ? 1 : -1))) {
          say_by_passer_by(...note);
        }
        for (const cid of Object.keys(notes).filter((k) => !isNaN(Number(k)))) {
          await era.waitAnyKey();
          for (const note of notes[cid]) {
            era.print(
              [{ content: note[0], fontWeight: 'bold' }, '「', note[1], '」'],
              { color: get_chara_color(Number(cid)) },
            );
          }
        }
        era.printButton('돌아가기', 0, {
          align: 'center',
          disableContinue: true,
          hideInput: true,
        });
        await era.input();
      },
    },
    {
      c: '크레딧',
      async h() {
        era.drawLine();
        let c_flag = true;
        era.setAlign('center');
        era.setHorizontalAlign('space-evenly');
        const bottom_columns = [
          { content: '\n', type: 'text' },
          {
            accelerator: 0,
            config: { align: 'center', disableWarning: true },
            content: '건너뛰기',
            type: 'button',
          },
        ];
        era.printMultiColumns([...copyrights[0], ...bottom_columns], {
          flush: true,
        });
        era.input({ hideInput: true }).then(() => (c_flag = false));
        for (let i = 2; i < copyrights.length && c_flag; ++i) {
          await era.delay(800);
          era.replaceInColRows(...copyrights.slice(0, i), bottom_columns);
        }
        if (c_flag) {
          await era.delay(800);
        }
        era.replaceInColRows(...copyrights, [
          { content: '\n', type: 'text' },
          {
            accelerator: 0,
            config: {
              align: 'center',
              disableContinue: true,
              disableWarning: true,
            },
            content: '타이틀로 돌아가기',
            type: 'button',
          },
        ]);
        await era.input({ hideInput: true });
        era.setHorizontalAlign('start');
        era.setAlign('left');
      },
    },
  ];
  while (flagTitle) {
    await era.clear();
    era.setAlign('center');
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          { config: { width: 7 }, names: 'logo', type: 'image.whole' },
          { config: { width: 17 }, names: 'title', type: 'image.whole' },
          {
            content: ['버전명: v', versionName],
            type: 'text',
          },
          {
            content: [
              '리소스팩 버전：',
              {
                content: res_version,
                url: `https://gitgud.io/umaera/data/uma-resource/-/archive/${res_version}/uma-resource-${res_version}.zip`,
              },
            ],
            type: 'text',
          },
          {
            content: join_list(author.split('|'), { isDivider: true }),
            type: 'text',
          },
          {
            content: ['이것은 EraUma를 기반으로 제작된 한국어 번역판입니다'],
            type: 'text',
          },
        ],
        config: { offset: 6, verticalAlign: 'middle', width: 12 },
      },
      birthday.length > 0
        ? [
            { type: 'divider' },
            { type: 'text', content: ['오늘은 ', ...birthday, ' 의 생일'] },
          ]
        : [],
      [
        { type: 'divider' },
        ...buttons.map(({ c }, i) => ({
          accelerator: i + 1,
          content: c,
          type: 'button',
        })),
        { type: 'divider' },
        {
          config: { offset: 6, width: 4 },
          content: '관련 링크:',
          type: 'text',
        },
        {
          config: { align: 'left', width: 12 },
          content: [
            {
              content: 'EraUma 게임 소개 페이지',
              url: site,
            },
            { isBr: true },
            {
              content: 'EraElectron 엔진 (PC판) 릴리즈 페이지',
              url: 'https://gitgud.io/umaera/engine/era-electron/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'ere.app 엔진 (안드로이드판) 릴리즈 페이지',
              url: 'https://gitgud.io/umaera/engine/ere-app/-/releases/permalink/latest',
            },
            { isBr: true },
            {
              content: 'ERA 特雷森学园 (디스코드)',
              url: 'https://discord.gg/ake5SP3zUP',
            },
            { isBr: true },
            {
              content: 'Wiki (사용 설명/게임 설정/기여 코드 작성 가이드 등)',
              url: 'https://gitgud.io/umaera/erauma/-/wikis',
            },
          ],
          type: 'text',
        },
      ],
    );
    era.setAlign('left');
    await buttons[(await era.input()) - 1].h();
  }
};
