const { location_enum } = require('#/data/locations');

const vehicle_enum = {
  // 스케이트보드
  skateboard: 0,
  // 자전거
  bicycle: 0,
  // 세그웨이
  hoverboard: 0,
  // 2인용자전거
  multi_bicycle: 0,
  // 전기자전거
  electric_bicycle: 0,
  // 승용차
  car: 0,
  // 스포츠카
  sports_car: 0,
  // 휴대용포탈
  portal: 0,
  // 고루시호
  gold_ship: 0,
  // 파머호
  pama: 0,
};
Object.keys(vehicle_enum).forEach((e, i) => (vehicle_enum[e] = i + 1));

const vehicle_names = [];
vehicle_names[vehicle_enum.skateboard] = '스케이트보드';
vehicle_names[vehicle_enum.bicycle] = '자전거';
vehicle_names[vehicle_enum.hoverboard] = '세그웨이';
vehicle_names[vehicle_enum.multi_bicycle] = '2인용자전거';
vehicle_names[vehicle_enum.electric_bicycle] = '전기자전거';
vehicle_names[vehicle_enum.car] = '승용차';
vehicle_names[vehicle_enum.sports_car] = '스포츠카';
vehicle_names[vehicle_enum.portal] = '휴대용포탈';
vehicle_names[vehicle_enum.gold_ship] = '고루시호';
vehicle_names[vehicle_enum.pama] = '파머호';

const vehicle_verbs = {};
vehicle_verbs[vehicle_enum.skateboard] = '踩';
vehicle_verbs[vehicle_enum.bicycle] = '骑';
vehicle_verbs[vehicle_enum.hoverboard] = '踩';
vehicle_verbs[vehicle_enum.multi_bicycle] = '骑';
vehicle_verbs[vehicle_enum.electric_bicycle] = '骑';
vehicle_verbs[vehicle_enum.car] = '开';
vehicle_verbs[vehicle_enum.sports_car] = '开';
vehicle_verbs[vehicle_enum.portal] = '用';
vehicle_verbs[vehicle_enum.gold_ship] = '踩';
vehicle_verbs[vehicle_enum.pama] = '开';

const vehicle_influences = {};
vehicle_influences[vehicle_enum.skateboard] = { stamina: 0.8, time: 0.5 };
vehicle_influences[vehicle_enum.bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.hoverboard] = { stamina: 0.1, time: 0.4 };
vehicle_influences[vehicle_enum.multi_bicycle] = { stamina: 0.6, time: 0.5 };
vehicle_influences[vehicle_enum.electric_bicycle] = { stamina: 0.1, time: 0.3 };
vehicle_influences[vehicle_enum.car] = { stamina: 0.1, time: 0.15 };
vehicle_influences[vehicle_enum.sports_car] = { stamina: 0.1, time: 0.1 };
vehicle_influences[vehicle_enum.portal] = { stamina: 0, time: 0 };
vehicle_influences[vehicle_enum.gold_ship] = { stamina: 0.15, time: 0.4 };
vehicle_influences[vehicle_enum.pama] = { stamina: 0.1, time: 0.125 };

const location_move_cost = {};
location_move_cost[location_enum.playground] = 50;
location_move_cost[location_enum.trainer] = 40;
location_move_cost[location_enum.clinic] = 40;
location_move_cost[location_enum.god] = 60;
location_move_cost[location_enum.atrium] = 60;
location_move_cost[location_enum.rooftop] = 60;
location_move_cost[location_enum.chairman] = 80;
location_move_cost[location_enum.visitor] = 90;
location_move_cost[location_enum.gate] = 100;
location_move_cost[location_enum.river] = 50;
location_move_cost[location_enum.shopping] = 100;
location_move_cost[location_enum.church] = 150;
location_move_cost[location_enum.station] = 200;
location_move_cost[location_enum.mejiro] = 500;

module.exports = {
  expedition_weeks: 3,
  location_move_cost,
  vehicle_enum,
  vehicle_influences,
  vehicle_names,
  vehicle_verbs,
};
