/**
 * @file 마루젠스키 - 招募
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { add_event, cb_enum }= require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk }= require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const maru = get_chara_talk(4);
    const me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        //훈련장에서 직접 모집하는 경우이며, 모집에 실패함
        await era.printAndWait(`${me.name}은(는) ${maru.name}에게 말을 걸어 보았다.`);
        era.println();
        me.say(
          `${maru.name}, 너라면 분명 무패의 삼관 우마무스메가 될 수 있어. 부디 내 팀에 들어와 줘.`,
        );
        await maru.say_and_wait(
          '어머나, 나도 삼관 우마무스메가 되는 건 멋진 일이라고 생각하지만 말이야, 그런데 트레이너 군, 나를 너무 과대평가하는 거 아니니…… 미안하지만, 너와 계약할 수는 없겠어…… 하지만 이렇게 자신만만한 트레이너 군이라면, 분명 딱 맞는 담당을 찾을 수 있을 거야.',
        );
        await me.say_and_wait(`${maru.name}에게 거절당하고 말았다.`, true);
        era.set('cflag:4:모집상태', recruit_flags.success_on_leave);
        break;
      case event_hooks.recruit_end:
        // extra_flag가 success일 때, 훈련장에서 직접 떠나는 상황에서 마루젠스키가 말을 걸어오며 모집에 성공함
        await era.printAndWait(
          `${me.name}이(가) 훈련장을 떠나려 할 때, ${maru.name}가 ${me.name}에게 말을 걸어왔다.`,
        );
        era.println();
        maru.say(
          '저기, 거기 트레이너 군, 시간 좀 내줄 수 있을까? 혹시 너도 딱 맞는 담당을 찾으러 온 거니?',
        );
        era.print(
          `${me.name}은(는) 적절한 우마무스메를 물색하기 위해 트레센 학원의 경기장에 선발 레이스를 보러 왔다. ${maru.name}라는 이름의 우마무스메는 이 선발 레이스에서 독보적으로 앞서나가며 다른 우마무스메들을 멀리 따돌렸다. 레이스 중의 그녀는 마치 풀가동 중인 붉은 스포츠카처럼 보였다. 하지만 무엇보다 당신의 마음을 끈 것은, 달릴 때 그녀가 보여준 만족스러운 표정이었다.`,
        );
        maru.say(
          '음…… 그래서 트레이너 군도 삼관을 차지하거나, 나아가 해외를 무대로 개선문상까지 노릴 수 있는 우마무스메를 찾고 있는 거니?',
        );
        era.print(
          `${me.name}은(는) 고개를 가로저었다. 바람과 자유를 만끽하며 만족스러운 표정을 짓던 그 붉은 뒷모습이 왠지 모르게 뇌리에 깊게 박혀 있었다.`,
        );
        maru.say('어머, 참 이상한 트레이너네……');
        era.print(`${maru.name}는 고민하는 듯한 표정을 지었지만, 금방 평소의 모습으로 돌아왔다.`);
        maru.say('미안하지만, 트레이너 군은 어떤 우마무스메를 찾고 있는 거니?');
        era.print(
          `${me.name}은(는) 솔직하게 ${maru.name}에게 그녀가 달릴 때의 만족스러운 모습에 매료되었다는 이야기를 털어놓았다.`,
        );
        await maru.say_and_wait(
          '……그런 거였니, 넌 정말 이상한 트레이너구나. 그럼, 앞으로도 내가 달리는 모습을 많이 지켜봐 줘.',
        );
        // 옥상 랜덤 이벤트 큐에 모집 이벤트를 등록함. 등록하지 않으면 옥상에 가도 이벤트가 발생하지 않음
        add_event(
          event_hooks.school_rooftop,
          new EventObject(4, cb_enum.recruit),
        );
        new EventMarks(0).add(event_hooks.school_rooftop);
        // 랜덤 모집 목록에서 제거함. 제거하지 않으면 나중에 훈련장에서 또 보일 수 있음
        era.set('cflag:4:무작위모집', 0);
        // 변수를 설정하여 플레이어가 다른 모집 이벤트 체인에 진입하는 것을 방지함
        era.set('flag:대상물색', 4);
        // 이미 훈련장을 떠날 때 발생하는 이벤트이므로, 이후의 떠나기 이벤트를 건너뜀
        return true;
      case event_hooks.school_rooftop:
        // 옥상 랜덤 이벤트에서 진입함
        // FLAGNAME:5 = 현재 상호작용 캐릭터
        if (era.get('flag:5') > 0) {
          // 다른 우마무스메를 데리고 있다면 발생하지 않음
          // 다음에 다시 발생하도록 이벤트를 다시 집어넣음
          add_event(event_hooks.school_rooftop, ebj);
          return false;
        }
        // 이벤트 발생 및 모집 성공
        await era.printAndWait(
          `${me.name}이(가) 옥상으로 향했을 때, 다시 ${maru.name}를 만났다.`,
        );
        await maru.say_and_wait(
          '……응응, 후배들 모두 정말 귀엽네♪ 혹시 궁금한 게 있다면 언제든지 이 언니한테 물어보렴♪',
        );
        era.print(
          `${maru.name}는 스마트폰을 내려놓고, 운동장에서 연습하는 후배 우마무스메들을 바라보며 콧노래에 맞춰 꼬리를 살랑살랑 흔들고 있었다.`,
        );
        await maru.say_and_wait('역시 맑은 날씨에 먹는 도시락이 제일 즐거워♪');
        era.print(
          `${maru.name}는 도시락통을 열며 무심코 시선을 앞으로 던지다가 ${me.name}의 존재를 눈치챘다.`,
        );
        await maru.say_and_wait(
          `궁금한 게…… 어라♪ 지난번 훈련장에서 만났던 트레이너 ${me.get_adult_sex_title()} 아니니? 너도 옥상에서 도시락을 먹으려고? 정말 센스 있네♪`,
        );
        era.print(
          `그렇게 두 사람은 나란히 앉아 운동장에서 노력하는 우마무스메들을 바라보며 도시락을 먹었다. 화창한 봄바람이 ${maru.name}의 치맛자락을 흔들었고, 그녀의 귀는 음악 리듬에 맞춰 쫑긋거렸다.`,
        );
        era.print(
          `두 사람은 한동안 말이 없었다. 도시락을 다 비운 뒤, 마루젠스키는 젓가락을 내려놓고 일어서서 ${me.name}을(를) 바라보았다.`,
        );
        await maru.say_and_wait(
          '자, 그래서 트레이너 군, 너도 딱 맞는 담당을 찾고 있는 거니? 목표가 뭐야?',
        );
        await maru.say_and_wait(
          '무패 삼관? 심볼리 루돌프를 넘어서는 것? 아니면 담당과 함께 세계라는 큰 무대를 향해 노력하는 것?',
        );
        await maru.say_and_wait('뭐든지 좋으니까 이 언니한테 상담해 보렴♪');
        era.print(`${maru.name}는 미소 지으며 ${me.name}을(를) 살폈다.`);
        era.print(
          `${me.name}의 뇌리에는 자신이 보았던 그 붉은 뒷모습과, 달릴 때 보여준 만족스러운 미소가 떠올랐다.`,
        );
        era.printButton('담당이 달릴 때 달리기의 즐거움을 마음껏 만끽하는 모습을 보고 싶어.', 1);
        await era.input();
        await maru.say_and_wait('!');
        era.print(
          `${maru.name}의 귀가 눈에 띄게 파르르 떨렸고, ${maru.name}가 ${me.name}을(를) 유심히 살핌에 따라 꼬리가 리드미컬하게 흔들렸다.`,
        );
        await maru.say_and_wait('……그럼 이렇게 하자, 차라리 네가 나의 트레이너가 되어줄래?');

        era.print(
          `${me.name}은(는) 진지한 그녀의 모습에 조금 놀랐지만, 결국 그녀에게 손을 내밀었다.`,
        );
        await maru.say_and_wait(
          `그럼, 앞으로 잘 부탁해, 트레이너 ${me.get_adult_sex_title()}♪`,
        );
        new EventMarks(0).sub(event_hooks.school_rooftop);
        new MaEduMarks().after_recruit++;
        // 모집 상태를 성공으로 설정하며, 팀에 합류했다는 표시임
        // CFLAGNAME:66 = 모집 상태
        era.set('cflag:4:66', recruit_flags.yes);
        // 모집 이벤트 체인 종료
        add_event(
          event_hooks.week_end,
          new EventObject(4, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:대상물색', 0);
        await this.recruit_end();
        // true를 반환하여 이후의 옥상 이벤트 절차를 건너뜀
        return true;
    }
  }
};