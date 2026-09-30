const era = require('#/era-electron');

const MecChild = require('#/event/mec/mec-child');

module.exports = class extends MecChild {
  set_callname() {
    const father = era.get(`cflag:${this.id}:부계캐릭`),
      mother = era.get(`cflag:${this.id}:모계캐릭`);
    if (father + mother === 33 && father * mother === 0) {
      if (father === 0) {
        era.set(`callname:${this.id}:0`, '오빠');
      } else {
        era.set(`callname:${this.id}:0`, '언니');
      }
      if (era.get('cflag:33:성별') === 1) {
        era.set(`callname:${this.id}:33`, '오빠');
      } else {
        era.set(`callname:${this.id}:33`, '언니');
      }
    } else {
      return super.set_callname();
    }
  }
};
