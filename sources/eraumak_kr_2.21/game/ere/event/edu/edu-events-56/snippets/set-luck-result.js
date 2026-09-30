const era = require('#/era-electron');

/** @param {number} luck */
function set_luck_result(luck) {
  switch (luck) {
    case 2:
      era.set('status:56:대길', 1);
      era.set('status:56:중길', 0);
      era.set('status:56:소길', 0);
      era.set('status:56:흉', 0);

      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:컨디션', 2);
      }
      break;
    case 1:
      era.set('status:56:중길', 1);
      era.set('status:56:대길', 0);
      era.set('status:56:소길', 0);
      era.set('status:56:흉', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:컨디션', 1);
      }
      break;
    case 0:
      era.set('status:56:소길', 1);
      era.set('status:56:대길', 0);
      era.set('status:56:중길', 0);
      era.set('status:56:흉', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:컨디션', 0);
      }
      break;
    case 3:
      era.set('status:56:흉', 1);
      era.set('status:56:대길', 0);
      era.set('status:56:소길', 0);
      era.set('status:56:중길', 0);
      era.set('cflag:56:컨디션', -1 - (Math.random() < 0.5));
  }
}

module.exports = set_luck_result;
