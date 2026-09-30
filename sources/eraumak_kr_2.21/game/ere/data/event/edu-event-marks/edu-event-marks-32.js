const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TachyonEduMarks extends EduEventMarks {
  // 日常部分
  // 잡담 - 喊着玩
  talk;
  // 什么药 · 红茶?
  black_tea;
  // 什么饮料
  drink;
  // 안뜰 - 고목나무구멍 - 黑影
  evil;
  // 옥상 - PlanA
  roof_a;
  // 옥상 - PlanB
  roof_b;
  // 강 - -智+速
  river;
  // 신사 - 神明捕捉行动
  church;
  // 역 - 데이트 - 拆台
  station;

  // 育成部分
  // 暂停训练
  train_stop;
  // 助纣为虐
  help_tyr;
  // 失败次数
  train_fail;
  // 实验的开始（第一天）
  beginning;
  // Plan B
  plan_b;
  // 临时训练锁
  glass_leg;
  // 聊聊天春
  tenn_spr;
  // 战胜茶座
  beat_c;
  // 赛后sex
  race_sex;
  // 크리스마스
  chris;

  // 马娘的极限
  uma_limit;
  // 훈련보너스
  limited;

  // 成就检查 - 无败希望锦标、야요이상、사츠키상
  title_check;

  constructor() {
    super(32);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TachyonEduMarks;
