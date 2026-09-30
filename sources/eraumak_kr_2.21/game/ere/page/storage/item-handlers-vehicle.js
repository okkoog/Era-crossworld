const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { vehicle_enum, vehicle_names } = require('#/data/move-const');

/**
 * @param {number} item
 * @param {number} [vehicle]
 */
async function single_vehicle(item, vehicle = item - 60 + 1) {
  const equipped = era.get('flag:1인용탈것');
  const item_name = vehicle_names[vehicle];
  if (equipped === vehicle) {
    const ret = await select_yes_or_no(
      `현재【${item_name}】을(를) 1인용 탈것으로 이용하고 있습니다! 장비 해제하겠습니까?`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了【${item_name}】`);
      era.set('flag:1인용탈것', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? `현재 외출 시 탑승하는 1인승 탈것:【${vehicle_names[equipped]}】!【${item_name}】(으)로 변경할까?`
        : `외출할 때【${item_name}】을(를) 타고 나갈까?`,
    );
    if (ret) {
      await era.printAndWait(`【${item_name}】을(를) 1인용 탈것으로 사용하기로 했다`);
      era.set('flag:1인용탈것', vehicle);
    }
  }
}

/**
 * @param {number} item
 * @param {number} [vehicle]
 */
async function multiple_vehicle(item, vehicle = item - 60 + 1) {
  const equipped = era.get('flag:다인용탈것');
  const item_name = vehicle_names[vehicle];
  if (equipped === vehicle) {
    const ret = await select_yes_or_no(
      `현재 외출할 때【${item_name}】을(를) 사용 중입니다! 장비 해제하겠습니까?`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了【${item_name}】`);
      era.set('flag:다인용탈것', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? `현재 외출 시 탑승하는 다인승 탈것:【${vehicle_names[equipped]}】!【${item_name}】(으)로 변경할까?`
        : `외출할 때【${item_name}】을(를) 타고 나갈까?`,
    );
    if (ret) {
      await era.printAndWait(`【${item_name}】을(를) 다인승 탈것으로 사용하기로 했다.`);
      era.set('flag:다인용탈것', vehicle);
    }
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[i + 60] = () => single_vehicle(i + 60)));

  new Array(4)
    .fill(0)
    .forEach((_, i) => (handlers[i + 63] = () => multiple_vehicle(i + 63)));

  handlers[112] = () => single_vehicle(112, vehicle_enum.gold_ship);
  handlers[113] = () => multiple_vehicle(113, vehicle_enum.pama);
};
