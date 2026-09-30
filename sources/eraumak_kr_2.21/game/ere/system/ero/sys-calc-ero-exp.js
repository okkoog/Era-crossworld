const era = require('#/era-electron');

const { update_juels_from_talent } = require('#/system/ero/sys-calc-juel');
const { update_palam_from_talent } = require('#/system/ero/sys-calc-palam');
const { merge_stain, set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} oid
   */
  update_attacking_mouth_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:첫펠라경험`)) {
      if (sys_check_awake(cid)) {
        era.set(`cstr:${cid}:첫펠라경험`, [
          `${date}에 `,
          { c: oid },
          ' 에 의해 이 입의 또 다른 사용법을 배우게 되었다',
        ]);
      } else if (!era.get(`cstr:${cid}:무자각첫펠라경험`)) {
        era.set(`cstr:${cid}:무자각첫펠라경험`, [
          `사실은 일찍이 ${date}에 이미 `,
          { c: oid },
          ' 에게 사용당한 적이 있다',
        ]);
      }
    }
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} oid
   */
  update_blow_job_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:첫펠라경험`)) {
      era.set(`cstr:${cid}:첫펠라경험`, [
        `${date}에 `,
        { c: oid },
        ' 와(과) 함께 이 입의 또 다른 사용법을 탐색했다',
      ]);
    }
  },
  /**
   * @param {number} cid
   * @param {number} semen
   * @param {number} oid
   * @param {number} sid
   */
  update_breast_exp(cid, semen, oid, sid = 0) {
    const semen_list = [];
    if (sid) {
      semen_list.push(Math.ceil(semen / 2));
      semen_list.push(semen - semen_list[0]);
      merge_stain(
        new EroParticipant(cid, part_enum.penis),
        new EroParticipant(sid, part_enum.breast),
      );
    } else {
      semen_list.push(semen);
    }
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:가슴부착정액량`, semen_list[i]);
        update_juels_from_talent(c_id, '정액 중독');
        update_palam_from_talent(
          c_id,
          '냄새 민감',
          part_enum.breast,
          part_enum.masochism,
        );
      });
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} semen
   * @param {number} oid
   * @param {number} sid=0
   */
  update_face_exp(date, cid, semen, oid, sid = 0) {
    const semen_list = [semen];
    if (sid > 0) {
      semen_list[0] = Math.ceil(semen / 2);
      semen_list.push(semen - semen_list[0]);
    }
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:안면사정횟수`, 1);
        era.add(`exp:${c_id}:안면사정정액량`, semen_list[i]);
        if (!era.get(`cstr:${c_id}:첫안면사정경험`)) {
          if (sys_check_awake(c_id)) {
            era.set(`cstr:${c_id}:첫안면사정경험`, [
              `${date}에 처음으로 `,
              { c: cid },
              ' 에 의해 얼굴이 정액으로 뒤덮였다',
            ]);
          } else if (!era.get(`cstr:${c_id}:무자각첫안면사정경험`)) {
            era.set(`cstr:${c_id}:무자각첫안면사정경험`, [
              `사실은 ${date}에 이미 `,
              { c: cid },
              ' 의 정액으로 뒤덮인 적이 있다',
            ]);
          }
        }
        set_stain(c_id, part_enum.mouth, stain_enum.semen);
        set_stain(c_id, part_enum.body, stain_enum.semen);
        update_juels_from_talent(c_id, '정액욕중독');
        update_palam_from_talent(
          c_id,
          '냄새민감',
          part_enum.mouth,
          part_enum.body,
          part_enum.masochism,
        );
        era.set(`nowex:${c_id}:안면사정`, 1);
      });
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} oid
   */
  update_hand_job_exp(date, cid, oid) {
    if (!era.get(`cstr:${cid}:첫수음경험`)) {
      era.set(`cstr:${cid}:첫수음경험`, [
        `손가락은 역시 가장 원초적이면서도 쓰기 좋은 쾌락의 도구다. ${date}에 `,
        cid !== oid ? ' ' : '',
        { c: oid },
        ' 에게서 그 사실을 배웠다',
      ]);
    }
  },
  update_kiss_exp(date, aid, did, i_def_awake = true) {
    if (!era.get(`cstr:${aid}:첫키스경험`)) {
      era.set(`cstr:${aid}:첫키스경험`, [`${date}에 첫 키스를 `, { c: did }, ' 에게 바쳤다']);
    }
    if (!era.get(`cstr:${did}:첫키스경험`)) {
      if (i_def_awake) {
        era.set(`cstr:${did}:첫키스경험`, [`${date}에 첫 키스를 `, { c: aid }, ' 에게 바쳤다']);
      } else if (!era.get(`cstr:${did}:무자각첫키스경험`)) {
        era.set(`cstr:${did}:무자각첫키스경험`, [
          `사실은 ${date}에 이미 첫 키스를 `,
          { c: aid },
          ' 에게 빼앗겼다',
        ]);
      }
    }
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} amount
   * @param {string} breast_desc
   * @param {number} oid
   * @param {number} sid
   */
  update_milk_exp(date, cid, amount, breast_desc, oid, sid) {
    if (!era.get(`cstr:${cid}:첫수유경험`)) {
      era.set(`cstr:${cid}:첫수유경험`, [
        `${date}, `,
        { c: oid },
        ...(sid > 0 ? [' 와(과) ', { c: sid }] : []),
        ` 에게 처음으로 자신의 ${breast_desc} 가슴에서 나온 모유의 맛을 보여주었다`,
      ]);
    }
    const milk_list = [amount];
    if (sid > 0) {
      const total = Math.ceil(amount * 1.2);
      milk_list[0] = Math.ceil(total / 2);
      milk_list.push(total - milk_list[0]);
      era.add(`nowex:${cid}:분유량`, total - amount);
      era.add(`exp:${cid}:분유량`, total - amount);
      merge_stain(
        new EroParticipant(cid, part_enum.breast),
        new EroParticipant(sid, part_enum.mouth),
      );
    }
    const heal_ratio = era.get(`cflag:${cid}:종족`) ? 5 : 10;
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((c_id, i) => {
        era.add(`exp:${c_id}:가슴빨기양`, milk_list[i]);
        era.add(`nowex:${c_id}:가슴빨기양`, milk_list[i]);
        const heal = milk_list[i] / heal_ratio;
        era.add(`nowex:${c_id}:체력소모`, -heal);
        era.add(`base:${c_id}:성욕`, heal);
        if (c_id === '0') {
          era.add(`tcvar:${cid}:획득인자`, milk_list[i] / 10);
        } else if (!cid) {
          era.add(`tcvar:${c_id}:획득인자`, milk_list[i] / 15);
        }
        if (!era.get(`cstr:${c_id}:첫가슴빨기경험`)) {
          era.set(`cstr:${c_id}:첫가슴빨기경험`, [
            `${date}, 허기가 아닌 이유로 처음으로 `,
            { c: cid },
            ' 의 그 ',
            breast_desc,
            ' 가슴을 빨았다. 그 맛이 만족스러웠을까?',
          ]);
        }
      });
  },
  /**
   * @param {string} date
   * @param {number} cid
   * @param {number} amount
   * @param {number} oid
   * @param {number} sid
   */
  update_secretion_exp(date, cid, amount, oid, sid) {
    const amount_list = [amount];
    if (sid > 0) {
      amount_list[0] = Math.ceil(amount / 2);
      amount_list.push(amount - amount_list[0]);
    }
    [oid.toString(), sid]
      .filter((e) => e)
      .forEach((id, i) => {
        set_stain(id, part_enum.mouth, stain_enum.secretion);
        era.add(`nowex:${id}:애액음용량`, amount_list[i]);
        if (id === '0') {
          era.add(`tcvar:${cid}:획득인자`, amount_list[i] / 10);
        } else if (!cid) {
          era.add(`tcvar:${id}:획득인자`, amount_list[i] / 15);
        }
        if (!era.get(`cstr:${id}:첫애액음용경험`)) {
          if (sys_check_awake(id)) {
            era.set(`cstr:${id}:첫애액음용경험`, [
              date,
              '에 ',
              { c: cid },
              ' 의 보지에서 처음으로 환희의 비액을 받아 마셨다',
            ]);
          } else if (!era.get(`cstr:${id}:무자각첫애액음용경험`)) {
            era.set(`cstr:${id}:무자각첫애액음용경험`, [
              `사실은 ${date}에 이미 `,
              { c: cid },
              ' 의 음액을 받아 마신 적이 있다',
            ]);
          }
        }
      });
  },
  /**
   * @param {string} date
   * @param {number} attacker
   * @param {number} defender
   */
  update_sm_exp(date, attacker, defender) {
    if (!era.get(`cstr:${attacker}:첫가학경험`)) {
      era.set(`cstr:${attacker}:첫가학경험`, [
        `${date}에 처음으로 `,
        { c: defender },
        ' 를(을) 학대했다',
      ]);
    }
    if (!era.get(`cstr:${defender}:첫피학경험`)) {
      era.set(`cstr:${defender}:첫피학경험`, [
        `${date}에 처음으로 `,
        { c: attacker },
        ' 에게 학대당했다',
      ]);
    }
  },
};