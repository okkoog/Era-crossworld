const location_enum = {
  // 안뜰
  atrium: 0,
  // 지하실
  basement: 0,
  // 海滩
  beach: 0,
  // 해변시장
  beach_market: 0,
  // 海边训练
  beach_train: 0,
  // 理事长
  chairman: 0,
  // 신사
  church: 0,
  // 보건실
  clinic: 0,
  // 大门
  gate: 0,
  // 삼신상
  god: 0,
  // 광저우
  guangzhou: 0,
  // 家
  home: 0,
  // 홍콩
  hongkong: 0,
  // 온천
  hot_spring: 0,
  // 旅馆
  hotel: 0,
  // 情人旅馆
  love_hotel: 0,
  // 메지로 시티
  mejiro: 0,
  // 뉴욕
  new_york: 0,
  // 트레이닝실
  office: 0,
  // 파리
  paris: 0,
  // 操场
  playground: 0,
  // 경기장
  race: 0,
  // 라운지
  restroom: 0,
  // 강
  river: 0,
  // 옥상
  rooftop: 0,
  // 小卖部
  school_shop: 0,
  // 상점가
  shopping: 0,
  // 역
  station: 0,
  // 여름합숙소
  summer_home: 0,
  // 트레이너사무실
  trainer: 0,
  // 방문객응접실
  visitor: 0,
  // 두바이
  dubai: 0,
};
Object.keys(location_enum).forEach((k, i) => (location_enum[k] = i));

const location_name = [];
location_name[location_enum.office] = '트레이닝실';
location_name[location_enum.playground] = '훈련장';
location_name[location_enum.atrium] = '안뜰';
location_name[location_enum.rooftop] = '옥상';
location_name[location_enum.restroom] = '라운지';
location_name[location_enum.chairman] = '이사장실';
location_name[location_enum.gate] = '학원정문';
location_name[location_enum.basement] = '지하실';
location_name[location_enum.river] = '강';
location_name[location_enum.church] = '신사';
location_name[location_enum.shopping] = '상점가';
location_name[location_enum.station] = '역';
location_name[location_enum.mejiro] = '메지로 시티';
location_name[location_enum.beach] = '해변';
location_name[location_enum.beach_market] = '해변시장';
location_name[location_enum.beach_train] = '해변';
location_name[location_enum.paris] = '파리';
location_name[location_enum.home] = '집';
location_name[location_enum.hotel] = '호텔';
location_name[location_enum.love_hotel] = '러브호텔';
location_name[location_enum.summer_home] = '여름합숙소';
location_name[location_enum.school_shop] = '신비한매점';
location_name[location_enum.race] = '경기장';
location_name[location_enum.hongkong] = '홍콩';
location_name[location_enum.guangzhou] = '광저우';
location_name[location_enum.new_york] = '뉴욕';
location_name[location_enum.hot_spring] = '온천';
location_name[location_enum.god] = '삼신상';
location_name[location_enum.trainer] = '트레이너사무실';
location_name[location_enum.visitor] = '방문객응접실';
location_name[location_enum.clinic] = '보건실';
location_name[location_enum.dubai] = '두바이';

const foreign_locations = {
  [location_name[location_enum.dubai]]: 1,
  [location_name[location_enum.guangzhou]]: 1,
  [location_name[location_enum.hongkong]]: 1,
  [location_name[location_enum.new_york]]: 1,
  [location_name[location_enum.paris]]: 1,
};

module.exports = {
  foreign_locations,
  location_enum,
  location_name,
};
