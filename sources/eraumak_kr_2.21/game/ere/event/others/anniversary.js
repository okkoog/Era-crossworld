const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');

const kojo = require('#/event/others/anniversary.kojo');

async function anniversary() {
  if (era.get('flag:현재턴수') % 48 === 1) {
    // FLAGNAME:1 = 현재연도
    const year = era.get('flag:1');
    let name;
    switch (year) {
      case 2010:
        name = 'TEN';
        break;
      case 2020:
        name = 'TWENTY';
        break;
      case 2030:
        name = 'THRITY';
        break;
      case 2040:
        name = 'FOURTY';
        break;
      case 2050:
        name = 'FIFTY';
    }
    if (name !== undefined) {
      era.drawLine();
      // FLAGNAME:116 = 캐릭터성별
      const sex = era.get('flag:116');
      await kojo[name]({
        SHE: sex ? '그' : '그녀',
        UMA: sex ? '우마무스코' : '우마무스메',
        YOU: era.get('callname:0:-2'),
      });
    }
    if (year >= 2009) {
      global_achievement.time_ten = 1;
    }
    if (year >= 2016) {
      global_achievement.time_twe = 1;
    }
    if (year >= 2021) {
      global_achievement.time_thr = 1;
    }
    if (year >= 2024) {
      global_achievement.time_for = 1;
    }
    if (year >= 2025) {
      global_achievement.time_fif = 1;
    }
  }
}

module.exports = anniversary;
