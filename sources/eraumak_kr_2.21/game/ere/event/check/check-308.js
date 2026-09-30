const { get, set } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (get('flag:현재턴수') % 48 === 40) {
      add_event(
        event_hooks.week_end,
        new EventObject(308, cb_enum.edu).set_arg('report'),
      );
    }
    if (
      get('cflag:308:모집상태') === recruit_flags.no &&
      get('love:308') >= 25
    ) {
      set('cflag:308:모집상태', -1);
      add_event(event_hooks.week_start, new EventObject(308, cb_enum.recruit));
    }
    super.check_next_week();
  }
};
