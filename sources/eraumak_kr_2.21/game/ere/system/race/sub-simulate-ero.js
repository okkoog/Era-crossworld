const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { item_enum } = require('#/data/ero/item-const');
const { damage_buff, secretion_amount } = require('#/data/ero/orgasm-const');
const { frame_rate, race_event_enum } = require('#/data/race/race-sim-const');

const param_base = 10000 / (60 * frame_rate);

/** @type {{f:function(PseudoUma):boolean,c:string}[]} */
const item_reports = [
  {
    f: () => true,
    c: '（으으으으으응……）',
  },
  {
    f: () => true,
    c: '（땀과 섞여 무언가가 흘러내리고 있어... 내 침인가❤️❤️❤️）',
  },
  {
    f: () => true,
    c: '（목소리…… 들리진 않을까…… 더 이상 헐떡거리면 안돼❤️❤️❤️）',
  },
  { f: () => true, c: '（부족해…… 이걸로는 완전 부족해❤️❤️❤️）' },
  {
    f: () => true,
    c: '（레이스 중이지만 지금 가버려도 상관없겠지, 아무도 모를 테니까——❤️❤️❤️）',
  },
  {
    f: () => true,
    c: '（아아❤️❤️❤️ 뜨거운 열기가 몸속을 휘젓고 있어. 더는 못 참겠어❤️❤️❤️）',
  },
  { f: (u) => u.index_chara > 0, c: '（보여지고 있는 걸까❤️❤️❤️ 분명 엄청 눈에 띄겠지❤️❤️❤️）' },
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（계속 괴롭힘 당하는 젖꼭지❤️❤️❤️ 빨갛게 부어오르고 돌처럼 딱딱해졌어❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（너무 창피해❤️❤️❤️하지만 싸버리고 싶다는 생각이 도저히 멈추질 않아❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（카메라가 겨냥해진 채 달리는 하반신…… 싸버리고 싶어❤️❤️❤️부끄럽게 쳐다보이는 가운데 사정해서 다리가 풀려 일어설 수 없을 정도로 ❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（사정 직전의 냄새가 나. 너무 괴로워어어으읏 아아아아❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（응❤️❤️❤️……정액이 넘쳐흐를 것 같아……）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（클리가 강제로 공기에 닿아 딱딱해졌어. 너무 창피해——❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris === item_enum.clamps,
    c: '（클리가 꽉 조여서 아프지만…… 너무 기분  좋아——축축한 애액이 줄줄 흘러내려❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（클리가 뻣뻣하게 서 있어. 마치 전기에 맞은 것처럼……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（끈적끈적한 애액이 허벅지를 타고 흘러내릴 거야❤️❤️❤️ 다들 보고 있겠지……!）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（하읏, 이 장난감이 들어가자마자 안쪽이 조여와서 숨이 막혀, 으응 하……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（다리와 보지가 너무 축축해❤️❤️❤️ 미끈미끈한 감촉이 너무 부끄러워!）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（장난감❤️❤️❤️이 자궁을 세게 진동시키고 있어…… 그래도 아직 부족해……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（응❤️❤️❤️ 깊숙이 찌르고 있어❤️❤️❤️ 꾸물거리면서…… 녹아버릴 것 같아～ ❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（삽입된 채로 달리니까, 신경 쓰지 않으려 할수록 더 느껴져❤️❤️❤️ 안 돼……!）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（달리면서 딜도에 찔려 가버릴 것 같아으웃 오오❤️❤️❤️!）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（안 돼, 몸속에서 떨리는 느낌이 너무 강해❤️❤️❤️……!）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（어떻게❤️❤️❤️이런 걸 끼고 만족할 수 있겠어아아앗——❤️❤️❤️）',
  },
  {
    f: (u) =>
      u.ero.item.anal === item_enum.anal_beads ||
      u.ero.item.anal === item_enum.dildo,
    c: '（꿈틀거리는 느낌이❤️❤️❤️ 너무 강렬해…… 마치 두 번째 꼬리 같아❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（뒷구멍이 찢어질 듯이 벌어져 있어❤️❤️❤️ 따끔거리며 경련을 일으키고 있어……❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（하앗❤️❤️❤️ 뒷구멍이 문질러져서 너무 괴로워어어엇❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（빠져나가면 절대 안돼❤️❤️❤️ 『배설』될까봐 드는 긴장감, 정말 심장에 안 좋네❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0 || u.ero.item.anal > 0,
    c: '（아우❤️❤️❤️ 달리는 동안 안의 장난감이 계속 움직여——❤️❤️❤️!）',
  },
  {
    f: (u) => Object.values(u.ero.item).reduce((p, c) => p + (c > 0), 0) >= 2,
    c: '（응아아앗❤️❤️❤️ 온몸이 진동하는 느낌❤️❤️❤️——!）',
  },
];

/** @type {{f:function(PseudoUma):boolean,c:string}[]} */
const orgasm_reports = [
  {
    f: () => true,
    c: '（응아앗❤️❤️❤️아아아❤️❤️❤️——）',
  },
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（젖꼭지가 딱딱해졌어…… 아❤️❤️❤️ 몸이 떨려………）',
  },
  {
    f: (u) => u.ero.item.breast > 0,
    c: '（젖꼭지, 젖꼭지가 터질 듯이 딱딱해——으응 아아아앗❤️❤️❤️!）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（아래가 너무 딱딱해…… 나오고 있어❤️❤️❤️……!）',
  },
  {
    f: (u) => u.ero.item.penis > 0,
    c: '（!!!——더 많이 싸고 싶어——❤️❤️❤️!）',
  },
  {
    f: (u) => u.ero.item.clitoris > 0,
    c: '（응아아❤️❤️❤️클리가 으스러질 것 같아❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin === item_enum.dildo,
    c: '（보지❤️❤️❤️ 딜도에 쑤셔져서 부어오를 것 같아——❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.virgin > 0,
    c: '（자궁이 찢어질 듯이 떨리고 있어——응아아아아아❤️❤️❤️——!）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（여기서 나와버리면 인생이 ❤️❤️❤️ 안 돼❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.anal > 0,
    c: '（아~ ❤️❤️ ❤️뒷구멍이 뜨겁게 쑤셔지고 있어❤️❤️❤️들락날락거려~❤️❤️❤️）',
  },
  {
    f: (u) => u.ero.item.breast > 0 && u.ero.item.virgin > 0,
    c: '（가슴과 보지가 전부 장난감으로 채워져 있어❤️❤️❤️ 애액이 마구 뿜어져 나오고 있어❤️❤️❤️ 짐승처럼 신음할 것 같아❤️❤️❤️!）',
  },
  {
    f: (u) =>
      u.ero.item.virgin === item_enum.dildo &&
      (u.ero.item.anal === item_enum.dildo ||
        u.ero.item.anal === item_enum.butt_plug),
    c: '（보지랑 뒷구멍이 딱딱한 물건에 찢어질 것 같아——응오오옷❤️❤️❤️ 온몸이 찢어질 것 같아❤️❤️❤️——!）',
  },
];

/**
 * @param {PseudoUma[]} list_chara
 * @param {string} timer_record
 * @param {number} timer
 * @param {[]} events
 * @param {[]} reports
 */
function sub_simulate_ero(list_chara, timer_record, timer, events, reports) {
  for (const uma of list_chara) {
    uma.race.conditionParams.milk = 0;
    const { index_chara: cid } = uma;
    let orgasm = 0;
    let s_times = 0;
    if (uma.race.conditionParams.item === 1) {
      ['breast', 'penis', 'clitoris', 'virgin', 'anal'].forEach(
        (p) => (uma.ero.param[p] += param_base * (1 + uma.ero.buff[p])),
      );
      let tmp;
      orgasm += tmp = Math.floor(uma.ero.param.breast / 10000);
      uma.ero.param.breast %= 10000;
      s_times += tmp * (1 + uma.ero.cost.breast);
      if (tmp > 0 && era.get(`talent:${cid}:모유분비`) > 0) {
        uma.race.conditionParams.milk = 1;
        era.add(
          `exp:${cid}:분유량`,
          get_random_value(...secretion_amount.breast),
        );
      }
      era.add(`exp:${cid}:가슴절정횟수`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.anal / 10000);
      uma.ero.param.anal %= 10000;
      s_times += tmp * (1 + uma.ero.cost.anal);
      era.add(`exp:${cid}:애널절정횟수`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.clitoris / 10000);
      uma.ero.param.clitoris %= 10000;
      s_times += tmp * (1 + uma.ero.cost.clitoris);
      era.add(`exp:${cid}:클리절정횟수`, tmp);
      era.add(
        `exp:${cid}:애액분비량`,
        Math.floor(get_random_value(...secretion_amount.virgin) / 2),
      );

      uma.ero.main.forEach((p) => (uma.ero.param[p] += orgasm * 1000));

      orgasm += tmp = Math.floor(uma.ero.param.penis / 10000);
      uma.ero.param.penis %= 10000;
      s_times += tmp * (1 + uma.ero.cost.penis);
      era.add(`exp:${cid}:음경절정횟수`, tmp);
      era.add(`exp:${cid}:사정량`, get_random_value(...secretion_amount.penis));

      orgasm += tmp = Math.floor(uma.ero.param.virgin / 10000);
      uma.ero.param.virgin %= 10000;
      s_times += tmp * (1 + uma.ero.cost.virgin);
      era.add(`exp:${cid}:질구절정횟수`, tmp);
      era.add(
        `exp:${cid}:애액분비량`,
        get_random_value(...secretion_amount.virgin),
      );
    } else if (uma.ero.param.sex >= 10000) {
      s_times = orgasm = Math.floor(uma.ero.param.sex / 10000);
      uma.ero.param.sex %= 10000;
    }
    uma.ero.orgasm += orgasm;
    if (orgasm > 0) {
      orgasm = Math.min(orgasm, 6);
      uma.race.conditionParams.orgasm = 1;
      events.push({ e: race_event_enum.orgasm, u: uma });
      uma.race.staminaCost *=
        1 +
        s_times * (1 - damage_buff + damage_buff * orgasm + uma.ero.cost.sex);
      if (era.get('flag:아이템영향') !== 0) {
        uma.race.velocityReal -= 0.025;
      }
    } else {
      uma.race.conditionParams.orgasm = 0;
    }
    if (
      cid >= 0 &&
      !uma.legend &&
      (orgasm > 0 || (uma.race.conditionParams.item > 0 && timer % 15 === 0))
    ) {
      const chara = get_chara_talk(cid);
      reports.unshift({
        config: { align: 'left' },
        content: [
          timer_record,
          ' ',
          chara.id > 0 ? chara.get_colored_name() : '',
          {
            content: get_random_entry(
              (orgasm > 0 ? orgasm_reports : item_reports).filter((e) =>
                e.f(uma),
              ),
            ).c,
            color: chara.color,
          },
        ],
        timer,
        type: 'text',
      });
    }
  }
}

module.exports = sub_simulate_ero;
