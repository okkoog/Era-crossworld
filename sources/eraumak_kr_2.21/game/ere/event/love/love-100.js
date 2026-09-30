/**
 * @file 원더 어큐트  - 애정
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { date_common } = require('#/event/daily/daily-events-100/snippets');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

module.exports = class extends CustomizedLove {
  async 49(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await era.printAndWait([
        '최근, 어째서인지 ',
        acute.get_colored_name(),
        '는 자주 안뜰의 마른 나무 구멍에 앉아 있는 것 같다.',
      ]);
      await era.printAndWait([
        '며칠 전 몰래 따라가 멀리서 지켜보니, ',
        acute.sex,
        '가 마른 나무 구멍 안에서 무언가 생각하고 있는 것 같았다.',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        '만약 ',
        acute.get_colored_name(),
        '에 대해 더 잘 알고 싶다면, 안뜰의 마른 나무 구멍에 가보는 건 어떨까?',
      ]);
      add_event(event_hooks.school_atrium, event_object);
      EventMarks.get(0).add(event_hooks.school_atrium);
    } else if (stage === event_hooks.school_atrium) {
      const cur_chara = era.get('flag:현재상호작용캐릭터');
      if (cur_chara > 0 && cur_chara !== this.id) {
        await era.printAndWait([
          '최근, 어째서인지 ',
          acute.get_colored_name(),
          '는 자주 안뜰의 마른 나무 구멍에 앉아 있는 것 같다.',
        ]);
        await era.printAndWait([
          '만약 ',
          acute.get_colored_name(),
          '에 대해 더 잘 알고 싶다면, 안뜰의 마른 나무 구멍에 가보는 건 어떨까?',
        ]);
        add_event(stage, event_object);
        return;
      }
      EventMarks.get(0).sub(event_hooks.school_atrium);
      await era.printAndWait('훈련을 마친 틈을 타, 혼자 안뜰로 향했다.');
      await era.printAndWait([
        acute.get_colored_name(),
        '가 가끔 머물던 나무 구멍이 보여, 저도 모르게 그쪽으로 걸어갔다.',
      ]);
      await era.printAndWait(
        '몸을 굽혀 가까이 다가가 보니, 나무 구멍 안의 공간은 의외로 비좁게 느껴졌다.',
      );
      await era.printAndWait(
        '나뭇가지인지 뿌리인지 알 수 없는 끝부분에는 검은 자국이 드러나 있었고, 울퉁불퉁한 표면 사이로 희미하게 보이는 검은 개미들이 오가고 있었다. 생각해보면, 그 안에 앉아 있는 느낌은 아마 그리 좋지 않을 것이다.',
      );
      await era.printAndWait([
        '그렇다면 왜 그 안에 앉아 있던 ',
        acute.get_colored_name(),
        '는 그렇게 평온해 보였던 걸까?',
      ]);
      await era.printAndWait('이리저리 생각해 보았지만——도무지 이해할 수 없었다.');
      await era.printAndWait('「하아」 하고 한숨을 내쉬며 막 일어나려던 참에——');
      await me.say_and_wait('우왁!?');
      await era.printAndWait(
        '갑자기, 두 다리가 강한 힘에 밀리는 듯했다. 눈앞이 위아래로 뒤집혔다. 당신의 몸은 억지로 공중제비를 돌며 나무 구멍 안으로 「굴러」 들어갔다——',
      );
      await era.printAndWait('무슨 일이 일어난 거야!?');
      await era.printAndWait(
        '막 그런 의문을 담은 비명을 지르려던 찰나, 뒤집힌 하늘 속에서 너무나도 익숙한 얼굴이 나타났다.',
      );
      era.printButton(`「${acute.name}!」`, 1);
      await era.input();
      await era.printAndWait([
        '내뱉으려던 의문은, 어린아이처럼 신난 표정을 짓고 있는 ',
        acute.get_colored_name(),
        '를 보는 순간 놀라움으로 바뀌었다.',
      ]);
      await era.printAndWait('하지만 이내, 그 놀라움은 다시 새로운 의문으로 변했다.');
      era.printButton(`「${acute.name}?」`, 1);
      await era.input();
      await era.printAndWait('이것은 두 번째 외침이었다.');
      await era.printAndWait(
        '처음의 막막함과 첫 번째의 놀라움과는 달리, 이 목소리에는 의문이 더 많이 담겨 있었다.',
      );
      await era.printAndWait([
        '이전에, ',
        me.get_colored_name(),
        '은(는) 이렇게 어린아이처럼 신난 표정을 짓는 ',
        acute.get_colored_name(),
        '를 본 적이 없었다.',
      ]);
      await era.printAndWait('그런데 지금 갑자기 보게 된 것이다.');
      await era.printAndWait([
        '이것은 자연스레 ',
        me.get_colored_name(),
        '을(를) 기쁘게 했지만, 이내 그보다 더 큰 놀라움을 자아냈다——',
      ]);
      await era.printAndWait([
        '눈앞에서 어린아이처럼 기뻐하는 ',
        acute.get_colored_name(),
        '가, 정말로 ',
        me.get_colored_name(),
        '이(가) 알고 있던 그 항상 온화한 ',
        acute.get_colored_name(),
        '가 맞단 말인가?',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        acute.get_colored_name(),
        '는, 마치 ',
        me.get_colored_name(),
        '의 마음속 깊은 의문을 들은 듯했다. ',
        me.get_colored_name(),
        '의 두 번째 부름을 듣자, ',
        acute.sex,
        '의 표정도 확 바뀌며 처음의 기쁨을 지우고는, 어째서인지 그 자리에 멍하니 멈춰 섰다.',
      ]);
      await era.printAndWait([
        acute.sex,
        '는 멍해졌고, ',
        me.get_colored_name(),
        '도 어찌할 바를 몰라 멍해졌다. 그렇게, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 함께 그 자리에 멍하니 멈춰 섰다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 발목을 잡힌 채 나무 구멍 안에 거꾸로 누워 있었고, ',
        acute.sex,
        '는 ',
        me.get_colored_name(),
        '의 발목을 잡은 채 온몸으로 나무 구멍 위를 덮고 있었다.',
      ]);
      await era.printAndWait([
        acute.sex,
        '는 고개를 숙인 채, 한가운데를 가로막는 커다란 둔덕 너머로 ',
        me.get_colored_name(),
        '을(를) 바라보고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 든 채, 필사적으로 한가운데를 가로막는 커다란 둔덕 너머로 ',
        acute.sex,
        '를 바라보고 있었다.',
      ]);
      await era.printAndWait('……');
      await era.printAndWait([
        '한참 뒤, 마침내 무언가를 깨달은 듯한 ',
        acute.get_colored_name(),
        '의 얼굴이 귀밑까지 붉어졌다.',
      ]);
      await era.printAndWait('………');
      await era.printAndWait([
        '마침내 ',
        acute.get_colored_name(),
        '의 레슬링 기술에서 풀려난 후, ',
        acute.get_colored_name(),
        '의 당황스러워 어쩔 줄 모르는 얼굴을 보게 되었다.',
      ]);
      await era.printAndWait([
        '알고보니, ',
        acute.get_colored_name(),
        '가 여느 때처럼 안뜰에 와서 마른 나무 구멍에 앉아 쉬려다가, 우연히 나무 구멍 앞에 몸을 숙이고 있는 당신의 뒷모습을 본 모양이었다.',
      ]);
      await era.printAndWait([
        '그러고는 어째서인지 「장난기가 발동」하여. 당신의 발을 들어 올려, ',
        me.get_colored_name(),
        '을(를) 나무 구멍 안으로 강제로 밀어 넣었다고 한다.',
      ]);
      await me.say_and_wait('……');
      await acute.say_and_wait('……');
      await era.printAndWait([
        '두 사람은 말없이, 한동안 무슨 말을 해야 할지 몰랐지만, ',
        acute.get_colored_name(),
        '의 붉게 달아오른 뺨은 여전히 가라앉지 않은 채였다. 시선은 빠르게 흔들리며, 마치 남에게 말 못 할 어떤 마음을 숨기려는 듯했다.',
      ]);
      await era.printAndWait('……어떤 마음인 걸까?');
      await era.printAndWait([
        '솔직히 말해서, ',
        me.get_colored_name(),
        '은(는) 차마 입 밖으로 꺼내기 어려웠다. ',
        acute.get_colored_name(),
        ' 역시 마찬가지로 부끄러워 감히 입 밖에 내지 못하는 듯했다.',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        '은 약속이나 한 듯 서로의 얼굴을 쳐다보지 않고, 동시에 고개를 돌렸다.',
      ]);
      await era.printAndWait(
        '처음엔 비좁을 거라 생각했던 옆의 나무 구멍을 바라보며, 마음속으로 감탄하면서도, 이 어색한 침묵을 깨고 싶은 마음에 무의식적으로 입을 열었다——',
      );
      await me.say_and_wait('……정말 크네.');
      await acute.say_and_wait('……응——');
      await era.printAndWait('서로 간에 어떤 암묵적인 합의에 도달했는지, 약속이라도 한 듯 고개를 끄덕였다——');
      era.println();
      get_attr_and_print_in_event(
        100,
        undefined,
        0,
        JSON.parse('{"체력":100,"기력":100}'),
        true,
      );
      sys_change_motivation(100, 1);
      await sys_love_uma_in_event(100);
      return true;
    }
  }

  async 74(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await era.printAndWait([
        '최근, ',
        acute.get_colored_name(),
        '와 함께 있는 시간이 점점 길어지고 있다.',
      ]);
      await era.printAndWait([
        '떨어져 있을 때도 머릿속은 항상 ',
        acute.sex,
        ' 생각뿐이다.',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        '어쩌면, ',
        acute.get_colored_name(),
        '와의 관계를 한 걸음 더 진전시킬 수 있지 않을까?',
      ]);
      await era.printAndWait([
        '……결심이 섰다면, ',
        acute.get_colored_name(),
        '를 역 앞에서 데이트에 초대하자.',
      ]);
      add_event(event_hooks.out_station, event_object);
    } else if (stage === event_hooks.out_station) {
      if (era.get('flag:현재상호작용캐릭터') !== this.id) {
        add_event(stage, event_object);
        return;
      }
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 역 앞에서 데이트를 하러 갔다……',
      ]);
      await acute.say_and_wait([
        '저기……',
        me.actual_name,
        '군. 왜 굳이 역으로 오자고 한 거니?',
      ]);
      await era.printAndWait('음……좋은 질문이다.');
      await era.printAndWait([
        '어차피 ',
        me.get_colored_name(),
        '의 입장에서는, ',
        acute.get_colored_name(),
        '와 단둘이 사적으로 외출할 수 있다면, 어딜 가든 데이트라고 할 수 있지 않을까?',
      ]);
      await era.printAndWait('하지만 그런데도, 굳이 역으로 와야만 데이트로 쳐주는 건가?');
      await era.printAndWait('이것이 신님의 어떤 악취미가 아니라면,');
      await era.printAndWait('그렇다는 건, 즉……');
      era.println();

      era.printButton(`${acute.name}에게 고백한다. (관계 진전)`, 1);
      era.printButton('……내가 너무 깊게 생각한 걸지도 몰라. (당분간 진전 없음)', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '……굳이 「데이트」라고 강조한 이유를, 물어볼 필요가 있을까?',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          acute.get_colored_name(),
          '를 좋아한다, 그래서 데이트를 핑계 삼아 ',
          acute.sex,
          '에게 고백하고 싶었다.',
        ]);
        await era.printAndWait('——그것 말고 다른 이유가 있을 수 있을까?');
        await era.printAndWait([
          '그래, ',
          me.get_colored_name(),
          '은(는) ',
          acute.get_colored_name(),
          '를 좋아한다.',
        ]);
        await era.printAndWait(
          '이것은 무슨 철저히 숨겨야 할 비밀이 아니라, 그저 두근거림 속에서 거듭 확인하게 된 사실일 뿐이다.',
        );
        await era.printAndWait(
          '아무리 힘들어도 노력해서 극복하겠다며 훈련장에 남긴 땀방울.',
        );
        await era.printAndWait(
          '아무리 지치고 피곤해도 마음을 가라앉히고 미소로 대하던 온화함.',
        );
        await era.printAndWait('함께 보낸 수많은 낮과 밤,');
        await era.printAndWait('수도 없이 함께 나눠 먹은 무말랭이.');
        await era.printAndWait(
          '분명 이 넓은 하늘 아래 함께 있으면서도, 밤하늘의 별을 올려다볼 여유조차 없었다.',
        );
        await era.printAndWait(
          '손끝이 닿는 그 감촉, 어쩌면 그것 자체가 기적이 만들어낸 꿈일지도 모르니까.',
        );
        await era.printAndWait('하늘에서 갑자기 비가 내리기 시작했고, 빗방울이 역의 지붕 위로 툭툭 떨어졌다.');
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          acute.get_colored_name(),
          '는 나란히 앉아, 톡톡 떨어지는 빗소리에 맞춰, 왼쪽 가슴의 심장이 두근두근 뛰고 있었다.',
        ]);
        await me.say_and_wait(
          ['그래, 용기를 내자, ', me.actual_name, ', 용기를 내는 거야.'],
          true,
        );
        await era.printAndWait([
          '마치 ',
          acute.get_colored_name(),
          '가 그랬던 것처럼——노력하고, 용감하고, 굳세게.',
        ]);
        await era.printAndWait(
          '심장은 두근두근 뛰고, 빗방울은 톡톡 떨어지고, 손끝은 조용히 다가가고 있었다.',
        );
        await me.say_and_wait(
          [
            '그래, ',
            acute.sex,
            '를 마주 보자, ',
            me.actual_name,
            ', 마주 보는 거야.',
          ],
          true,
        );
        await era.printAndWait([
          '빗소리 속에서, ',
          acute.get_colored_name(),
          '가 고개를 들었다.',
        ]);
        await era.printAndWait([
          acute.sex,
          '의 시선은 평소와 다름없이, 어딘지 모를 먼 곳을 향하고 있었다.',
        ]);
        await me.say_and_wait(
          [acute.sex, '에게 말하자, ', acute.sex, '에게 말하는 거야.'],
          true,
        );
        await era.printAndWait([
          '그래, ',
          acute.sex,
          '에게 말하자, ',
          me.actual_name,
          '.',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          '에게, 내가 얼마나 ',
          acute.sex,
          '를 좋아하는지 말하는 거야.',
        ]);
        await era.printAndWait(
          '입술이 가늘게 떨렸고, 맴도는 말들은 다이아몬드 결정처럼 굳어, 목구멍을 꽉 틀어막고 있었다.',
        );
        await me.say_and_wait(
          [acute.sex, '에게 말하자, 말하는 거야.'],
          true,
        );
        era.printButton('「나, 나는……나는——」', 1);
        await era.input();
        await acute.say_and_wait('나는 네가 좋단다. 트레이너.');
        await me.say_and_wait('……어?');
        await acute.say_and_wait('——————');
        await era.printAndWait('빗방울이 떨어지는 순간, 공기는 이 순간의 시간과 함께 얼어붙었다.');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 들어서는 안 되었을 목소리가 귓가에 맴돌았다.',
        ]);
        await era.printAndWait([
          '항상 앞만 응시하던 ',
          acute.get_colored_name(),
          '가, 어느새 시선을 돌려 보잘것없는 ',
          me.get_colored_name(),
          '을(를) 바라보고 있었다.',
        ]);
        await era.printAndWait('이러면 안 되는 거였는데……이러면 안 되는 거잖아, 안 그런가?');
        await era.printAndWait([
          acute.get_colored_name(),
          '처럼 강하고, 용감한 사람이 어떻게 당신을……',
        ]);
        await acute.say_and_wait(['나는 정말로 네가 좋단다, ', me.actual_name, '군.']);
        await era.printAndWait(['이번에는, ', acute.sex, '의 목소리가 더 이상 희미하지 않았다.']);
        await era.printAndWait([
          '부드러우면서도 단호한 눈빛이 부끄러운 홍조와 어우러져, ',
          me.get_colored_name(),
          '을(를) 향하고 있었다.',
        ]);
        era.printButton('「나, 나는……」', 1);
        await era.input();
        await acute.say_and_wait(['서두르지 마려무나, ', callname, '. 천천히 말해 보렴~']);
        era.printButton(`「나도——나도 널 좋아해, ${acute.name}!」`, 1);
        await era.input();
        await era.printAndWait('————————');
        await era.printAndWait('어느 맑게 갠 오후.');
        await era.printAndWait('많지도 적지도 않은 비가 내리는 가운데.');
        await era.printAndWait('역의 작은 지붕 아래에서 비를 피하던 두 사람은,');
        await era.printAndWait('조용히, 어느새 서로에게 다가가고 있었다……');
        await era.printAndWait('……………………');
        await era.printAndWait([
          '【',
          acute.get_colored_name(),
          '와 연인 관계가 되었습니다!】',
        ]);
        await sys_love_uma_in_event(100);
      } else {
        await era.printAndWait([
          '자신의 담당 ',
          acute.get_uma_sex_title(),
          '와 데이트하는 데 이유가 필요할까?',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          '와 함께 있고 싶고, ',
          acute.get_colored_name(),
          '와 함께 있으면 즐겁다, 이유는 그저 그뿐이다.',
        ]);
        await era.printAndWait('고개를 내저으며, 쓸데없는 고민을 모두 털어버렸다.');
        await era.printAndWait('………………');
        await era.printAndWait([
          acute.get_colored_name(),
          '와 역 앞에서 즐거운 시간을 보냈다.',
        ]);
        era.set('cflag:100:호감거절', 74);
        await punish_rejecting_love(100);
      }
      return true;
    }
  }

  async 89(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await era.printAndWait([
        acute.get_colored_name(),
        '와 사랑을 나누는 것은, 무척이나 행복한 일이다.',
      ]);
      await era.printAndWait([
        '하지만, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '가 포옹할 때마다, 항상 아무도 모르는 곳에서만 해야 했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이런 은밀한 만남이, 어딘지 모르게 썩 좋지 않다고 느꼈다.',
      ]);
      await era.printAndWait([
        '이런 고민을 ',
        acute.get_colored_name(),
        '에게 말해보아도, ',
        acute.sex,
        '는 항상 미소 지으며 말했다.',
      ]);
      await acute.used_to_say_and_wait(
        '괜찮단다, 지금 이대로도, 나는 충분히 행복하니.',
      );
      await era.printAndWait([
        '하지만, 마치 바람을 피우는 것처럼 숨기고 감추는 행동이, 과연 ',
        acute.get_colored_name(),
        '에게 공평한 걸까?',
      ]);
      await era.printAndWait([
        '……어쩌면, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '가 이 연인 관계를 공개할 수 있지 않을까.',
      ]);
      await era.printAndWait(
        '트레센의 모두 앞에서 이 관계를 공개하려면, 아마도 【강철과도 같은 의지력】이 필요할 것이다.',
      );
      await era.printAndWait('하지만 마음속에 더 이상 망설임이 없다면, 이 한 걸음을 내딛기로 결심했다면——');
      await era.printAndWait([
        '그럼 ',
        acute.get_colored_name(),
        '와 함께 안뜰에서 데이트를 하자.',
      ]);
      add_event(event_hooks.school_atrium, event_object);
    } else if (stage === event_hooks.school_atrium) {
      if (era.get('flag:현재상호작용캐릭터') !== this.id) {
        add_event(stage, event_object);
        return;
      }
      await date_common(acute, me);
      await era.printAndWait([
        '——',
        acute.get_colored_name(),
        '가 보내는 기대 어린 시선이 느껴졌다.',
      ]);
      await era.printAndWait('………………');
      await me.say_and_wait('너 말이야, 언제까지 겁쟁이로 남을 셈이야?');
      await era.printAndWait('문득, 마음속을 그런 한마디가 스쳐 지나갔다.');
      await era.printAndWait('그 순간, 몸에 한 줄기 충동이 번졌다——');
      await acute.say_and_wait(['왜 그러니?', callname, '……읍!']);
      await era.printAndWait([
        acute.get_colored_name(),
        '가 채 묻기도 전에, ',
        me.get_colored_name(),
        '은(는) 이미 ',
        acute.get_colored_name(),
        '를 껴안고 있었다.',
      ]);
      await era.printAndWait('입술과 입술이 맞닿고, 달콤한 숨결이 마음 깊숙이 스며들었다.');
      await era.printAndWait(
        '한쪽은 강경하게, 다른 한쪽은 망설이다가, 이내 입술의 문이 열렸다. 그 뒤로 격렬한 교환이 이어졌다——',
      );
      await era.printAndWait('…………');
      await say_by_passer_by_and_wait(
        '우마터 유저',
        '아, 빨리 봐봐, 안뜰에서 누가 키스하고 있어.',
      );
      await say_by_passer_by_and_wait(
        '우마스타그램 유저',
        '우와, 진짜!? 빨리 찍어서 올려야지~',
      );
      await say_by_passer_by_and_wait('어느 간사이 '+ acute.get_uma_sex_title(), [
        '닭살 돋는 아들이네, 우리 학원 ',
        acute.get_uma_sex_title(),
        '인거 같은디, 꼴불견이구마.',
      ]);
      await era.printAndWait('…………');
      await acute.say_and_wait([
        '읍～～～하아……',
        callname.substring(0, 1),
        ', ',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '품에 안긴 ',
        acute.get_colored_name(),
        '는, 뺨을 붉힌 채 몽롱한 눈빛으로 당신을 바라보고 있었다.',
      ]);
      await era.printAndWait('거절하는 것도 아니고, 동의하는 것도 아닌, 마치 밀당을 하는 듯한……');
      await era.printAndWait(
        '왜 이런 짓을 한 걸까? 이렇게 대담하게 굴면 어떤 결과가 따를까?',
      );
      await era.printAndWait('그런 건 어찌 되든 상관없었다.');
      await era.printAndWait('적어도 지금은……지금은.');
      await era.printAndWait('지금은 무척 행복하니까, 이걸로 충분했다.');
      era.println();
      get_attr_and_print_in_event(100, [0, 0, 0, 10], 0, undefined, true);
      await sys_love_uma_in_event(100);
      return true;
    }
  }

  async 99(acute, me, callname, stage, extra_flag, event_object) {
    if (acute.sex_code === 1 || me.sex_code === 0) {
      return await super[99](
        acute,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    if (stage === event_hooks.week_end) {
      await era.printAndWait('【그대에게 권하노니 화려한 비단옷을 아끼지 말고, 젊은 시절을 아끼라,】');
      await era.printAndWait('【꽃이 피어 꺾을 만할 때 꺾어야지, 꽃이 지고 빈 가지가 될 때를 기다리지 마라.】');
      await era.printAndWait('………………');
      await era.printAndWait([
        acute.get_colored_name(),
        '와 사랑을 나눈 지도 꽤 많은 시간이 흘렀다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 매일 같은 시간에 일어나고, 같은 시간에 밥을 먹고, 같은 시간에 훈련하고, 같은 시간에 레이스에 나간다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 언제나 어려움을 함께했고, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 항상 그림자처럼 붙어 다녔다.',
      ]);
      await era.printAndWait([
        '틀림없이, ',
        me.get_colored_name(),
        '은(는) ',
        acute.get_colored_name(),
        '를 사랑한다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 생각했다. ',
        acute.get_colored_name(),
        '도 ',
        me.get_colored_name(),
        '을(를) 사랑한다고.',
      ]);
      await era.printAndWait([
        '그렇기 때문에, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 훈련과 생활 속의 소소한 일상들을 함께 보낼 수 있었다.',
      ]);
      await era.printAndWait('——하지만, 이런 일상이 과연 영원히 지속될 수 있을까?');
      await era.printAndWait('………………');
      await era.printAndWait('세월은 시간과 함께 흘러가고, 마음도 날마다 지나간다,');
      await era.printAndWait('3년이라는 시간은 늘 조용히 흘러가고 있었다.');
      await era.printAndWait([
        '설령 3년짜리 한여름 밤의 꿈에 불과할지라도, ',
        acute.get_colored_name(),
        '와 사랑했던 나날은 ',
        me.get_colored_name(),
        '의 인생에서 가장 행복한 시간이었다.',
      ]);
      await era.printAndWait(
        '하지만, 이 행복을 놓치고 싶지 않다면, 생이 다할 때까지 뜨거운 잿빛 사랑의 불꽃을 계속 태우고 싶다면.',
      );
      await era.printAndWait([
        '——그렇다면, ',
        acute.get_colored_name(),
        '와 함께, 【귀환의 약속】과 【재회의 맹세】를 맺자.',
      ]);
      await era.printAndWait([
        '준비가 모두 끝나면, ',
        acute.sex,
        '는 옥상에서 ',
        me.get_colored_name(),
        '이(가) 오기를 기다리고 있을 것이다.',
      ]);
      EventMarks.get(0).add(event_hooks.school_rooftop);
      add_event(event_hooks.school_rooftop, event_object);
    } else if (stage === event_hooks.school_rooftop) {
      const cur_chara = era.get('flag:현재상호작용캐릭터');
      if (cur_chara && cur_chara !== this.id) {
        await era.printAndWait([
          '준비가 모두 끝나면, ',
          acute.sex,
          '는 옥상에서 ',
          me.get_colored_name(),
          '이(가) 오기를 기다리고 있을 것이다.',
        ]);
        add_event(stage, event_object);
        return;
      }
      EventMarks.get(0).sub(event_hooks.school_rooftop);
      await era.printAndWait('하늘 끝에서 굉음이 울리고, 쇠새(비행기)가 귤색 비행운을 남겼다.');
      await era.printAndWait(
        '황혼의 눈부신 빛이 곧 저물고, 그 뒤로는 칠흑 같고도 은은한 달밤이 찾아온다.',
      );
      await era.printAndWait([
        '옥상에서, ',
        acute.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 등 돌린 채, 하늘 끝의 뜬구름을 올려다보고 있었다.',
      ]);
      await era.printAndWait([
        '마치 ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '의 첫 만남처럼, ',
        acute.get_colored_name(),
        '가 옥상에서 길 잃은 개 같았던 ',
        me.get_colored_name(),
        '을(를) 주워주었던 그때처럼, 이번 옥상도 ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        ' 단둘뿐이었다.',
      ]);
      await era.printAndWait([
        '——하지만 이번에는, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '가 서 있는 위치가 정반대였다.',
      ]);
      await era.printAndWait([
        '옥상 문을 조용히 닫고, 마음속의 들뜬 기운을 가라앉히며, ',
        me.get_colored_name(),
        '은(는) 천천히 다가갔다.',
      ]);
      await era.printAndWait([
        acute.sex,
        '의 뒤에 서서, ',
        acute.sex,
        '과(와) 함께 하늘의 귤색 뜬구름을 올려다보았다.',
      ]);
      await era.printAndWait(['그러고는, ', acute.sex, '의 말투를 흉내 내며——']);
      era.printButton('「어머나, 어머나」', 1);
      await era.input();
      era.printButton('「계속 한숨을 쉬면, 복이 달아나 버릴게야——」', 1);
      await era.input();
      await acute.say_and_wait('——');
      await era.printAndWait('걱정 어린 말들은, 하늘로 흩어지고 바람 속에 부서졌다.');
      await era.printAndWait([
        '마치 ',
        me.get_colored_name(),
        '이(가) 여태껏 봐 왔던 ',
        acute.get_colored_name(),
        '처럼, ',
        acute.sex,
        '는 크게 놀라지 않았다.',
      ]);
      await era.printAndWait([
        acute.sex,
        '는 천천히 몸을 돌려 발돋움을 했고, 평온한 표정 아래, 짙은 눈동자에는 눈물이 맺혀 있었다.',
      ]);
      await acute.say_and_wait(['왔구나, ', callname, '.']);
      era.printButton(`「왔어요, ${sys_get_callname(0, 100)}.」`, 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '의 서로 간의 인사, 그 평온함 자체에 이미 너무 많은 것이 담겨 있었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        acute.sex,
        '는 양팔을 벌리지 않았고, 그에 맞춰 ',
        me.get_colored_name(),
        '도 벌리지 않았다.',
      ]);
      await era.printAndWait(
        '어차피 이것은 단순한 감사의 포옹이 아니라, 마음까지 독점하려는 뜨거운 사욕이기 때문이다.',
      );
      await era.printAndWait(
        '발돋움을 하고, 오뚝한 콧날이 턱수염 위아래로 부벼지며, 붉은 체리 자국이 새하얀 목덜미에 새겨진다.',
      );
      await era.printAndWait([
        '흔들리는 두 귀가, ',
        me.get_colored_name(),
        '의 입가에 스친다.',
      ]);
      await era.printAndWait('분홍빛 요물이 꿈틀거리며, 짙은 잿빛을 삼켜버리기를 갈망하고 있다——');
      await quick_into_sex(100);
      await era.printAndWait([
        '뜨거운 체액의 교환 후, 아직 음란한 액체가 뿜어져 나오는 비밀의 샘은 아랑곳하지 않고, ',
        acute.get_colored_name(),
        '는 하반신을 감싸는 하얀 천을 들어올렸다.',
      ]);
      await era.printAndWait('달빛 아래, 아랫배 앞의 각인이 분홍빛으로 희미하게 빛났다.');
      await era.printAndWait([
        acute.get_colored_name(),
        '가 말하길, 이건 트레센의 최신 유행이라고 한다. 몸에 이 각인을 새긴 ',
        acute.get_uma_sex_title(),
        '는, 오직 그 각인의 주인의 소유가 된다고.',
      ]);
      await era.printAndWait('그리고 지금, 각인의 마지막 단계만이 남았다.');
      await acute.say_and_wait(['……저기, ', callname, '?']);
      await era.printAndWait(
        '자신의 치마를 입에 물고 뽀얀 뱃살을 드러낸 채, 욕망을 갈구하며 웅얼거렸다.',
      );
      await era.printAndWait(
        '열린 가슴팍에는 풍만한 붉은 열매가 드러났고, 두 손으로 들어 올린 은색 목줄은 마치 바쳐진 보물 같았다.',
      );
      await era.printAndWait(
        '마치 살려달라 애원하는 들짐승 같으면서도, 주인을 섬기는 가축 같았다. 눈가의 눈물은 마음속의 흥분을 멈추지 못했다.',
      );
      await era.printAndWait([
        '그 정교한 은색 목줄을 받아 들어, 당신의 두 손으로, ',
        acute.get_colored_name(),
        '의 목에 걸어주었다.',
      ]);
      await era.printAndWait([
        '그러자 만족한 듯한 ',
        acute.get_colored_name(),
        '가, 미소 지으며 쪼그려 앉았다.',
      ]);
      await era.printAndWait('붉은 혀를 내밀어, 그 사나운 짐승의 주인을 모시기 시작했다.');
      era.println();
      get_attr_and_print_in_event(100, undefined, 66, true);
      add_jewel_reward(100, '순종', 200);
      era.set('mark:100:고통', 0);
      era.set('mark:100:수치', 0);
      era.set('mark:100:반발', 0);
      era.add('item:목줄', 1);
      await sys_love_uma_in_event(100);
      return true;
    }
  }
};