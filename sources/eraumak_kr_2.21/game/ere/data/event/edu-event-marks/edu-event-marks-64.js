const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class PamaEduMarks extends EduEventMarks {
  // 育成目标检查 - 클래식 시즌 6 月 2 周前重赏优胜次数
  aim_check;

  // 蜗牛
  snails;
  // 电影院口交
  movie_job;

  // 너와 함께 세상 끝까지 도망쳐
  escape;
  // 依存心事件触发数
  only_you;

  // 全育成第一次调教指令
  kiss;
  lure;
  pet_breast;
  prepare_anal;
  cunnilingus;
  ask_blow_job;
  sixty_nine;
  ask_foot_job;
  missionary;
  doggy_style;
  sitting;
  hug_standing;
  ask_cowgirl;
  hit_anal;

  // 跑车奖励
  sports_car;

  // 触发事件
  // 비에 흠뻑 젖더라도
  rain;
  // 午睡
  nap;
  // 여유로운 시간
  leisure;
  // 영화관 괴담
  cinema;
  // 美食时间
  delicious;
  // 휴식……?
  rest;
  // 짧은 여행
  travel;
  // 한 편의 짧은 이야기
  joke;
  // 너무 신경쓰지 마!
  concern;
  // 디저트……뭔가 이상한데?
  dessert;
  // 파티 타임
  party;

  // 随机事件
  // 점심시간을 놓쳤어
  lunch_break;
  // 거리감의 천재
  dis_talent;
  // 궁극의 선택!
  choice;
  // 앞으로 내딛은 한 걸음
  a_step;

  constructor() {
    super(64);
    EduEventMarks.register_marks(this);
  }
}

module.exports = PamaEduMarks;
