/**
 * @file 메지로 맥퀸 - 조교
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_motion } = require('#/system/ero/sys-calc-distance');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const kojo = require('#/event/ero/ero-13.kojo');
const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroTouch = require('#/data/ero/ero-touch');
const { base_enum, part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const { get_breast_cup } = require('#/data/info-generator');

function dict() {
  const o = {};
  const mcqueen = get_chara_talk(13);
  o['그녀'] = mcqueen.sex;
  o['트레이너'] = era.get('callname:0:-2');
  o['대표색'] = mcqueen.color;
  o['호칭'] = sys_get_callname(13, 0);
  return o;
}

class NormalCom extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.kiss(attacker, defender, hook);
    }
    await kojo['키스'](dict());
  }

  async french_kiss(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.french_kiss(attacker, defender, hook);
    }
    await kojo['혀섞는다'](dict());
  }
}

class NormalMakingOuts extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_breast) {
      edu_marks.pet_breast = 1;
      await kojo['가슴애무한다——育成首次'](dict());
      return;
    }
    await kojo['가슴애무한다'](dict());
  }

  async pet_nipple(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_nipple) {
      edu_marks.pet_nipple = 1;
      await kojo['유두애무한다——育成首次'](dict());
      return;
    }
    await kojo['유두애무한다'](dict());
  }

  async pet_clitoris(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.pet_clitoris) {
      edu_marks.pet_clitoris = 1;
      await kojo['클리애무한다——育成首次'](dict());
      return;
    }
    await kojo['클리애무한다'](dict());
  }

  async prepare_virgin(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.prepare_virgin) {
      life_marks.prepare_virgin = 1;
      await kojo['보지벌리기한다——存档初次'](dict());
      return;
    }
    await kojo['보지벌리기한다'](dict());
  }

  async finger_fuck(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    const life_marks = new McqueenLifeMarks();
    if (!life_marks.finger_fuck) {
      life_marks.finger_fuck = 1;
      await kojo['손가락삽입한다——存档初次'](dict());
      return;
    }
    await kojo['손가락삽입한다'](dict());
  }

  async cunnilingus(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.cunnilingus) {
      edu_marks.cunnilingus = 1;
      await kojo['커널링구스한다——育成初次'](dict());
      return;
    }
    await kojo['커널링구스한다'](dict());
  }

  async ask_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await kojo['펠라치오시킨다'](dict());
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await kojo['손애무펠라시킨다'](dict());
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await kojo['딥스롯시킨다'](dict());
  }

  async ask_tit_job(atk, def, hook) {
    if (atk.id !== 0 || !hook.arg || get_breast_cup(this.id, true) >= 'B') {
      return await super.ask_tit_job(atk, def, hook);
    }
    const edu_marks = new McqueenEduMarks();
    if (!edu_marks.ask_tit_job) {
      await kojo['파이즈리시킨다——育成首次'](dict());
      edu_marks.ask_tit_job = 1;
      return;
    }
    await kojo['파이즈리시킨다——빈유'](dict());
  }
}

class NormalFucking extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.missionary(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:처녀`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['정상위——未插入时首次点击'](dict());
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:처녀`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['후배위——未插入时首次点击'](dict());
    }
  }

  async sitting(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.sitting(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:처녀`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['대면좌위'](dict());
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:처녀`) === vp_status_enum.no
    ) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }

  async standing(attacker, defender, hook) {
    if (attacker.id !== 0 || !hook.arg) {
      return await super.standing(attacker, defender, hook);
    }
    if (era.get(`talent:${this.id}:처녀`) !== vp_status_enum.no) {
      await kojo['插入类体位——失去处女'](dict());
    } else {
      await kojo['대면입위'](dict());
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (
      attacker.id !== 0 ||
      era.get(`talent:${this.id}:처녀`) === vp_status_enum.no
    ) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await kojo['插入类体位——失去处女'](dict());
  }
}

class NormalSm extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (attacker.id !== 0) {
      return await super.hit_anal(attacker, defender, hook);
    }
    const penis = new EroTouch(0, part_enum.penis);
    const motion = sys_get_motion(0, 13);
    if (
      penis.owner !== 13 ||
      penis.part !== part_enum.virgin ||
      (motion !== base_enum.b_same && motion !== base_enum.b_tri)
    ) {
      return await super.hit_anal(attacker, defender, hook);
    }
    await kojo['后背位拍屁股'](dict());
  }
}

/**
 * @file 메지로 맥퀸 - 조교
 * @author 伊兰
 */
class McqueenNormal extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new NormalCom(this);
    this.making_outs = new NormalMakingOuts(this);
    this.fucking = new NormalFucking(this);
    this.sm = new NormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new McqueenNormal(this);
  }
};
