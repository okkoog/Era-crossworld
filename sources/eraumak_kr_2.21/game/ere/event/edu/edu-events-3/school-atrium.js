const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const Edu3UntilRaceEnd = require('#/event/edu/edu-events-3/race-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu3UntilRaceEnd {
  async school_atrium(teio, me, callname, hook, extra_flag, event_object) {
    const love = era.get('love:3'),
      event_arg = event_object?.arg,
      event_marks = new TeioEduMarks();
    let wait_flag = false;
    if (event_arg === 95 + 20 && era.get('status:3:다리부상') > 0) {
      await print_event_name('회귀', teio);
      await teio.say_and_wait('하아……');
      era.println();

      await teio.print_and_wait(
        `훈련이 끝난 후, ${me.name}은(는) 학원 스태프에게 잠시 불려갔고, 테이오는 혼자서 기숙사로 향했다. ${teio.sex}는 교내 안뜰을 지나갈 때, 문득 발걸음을 멈추었다.`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.get_uma_sex_title()}의 시선이 구석에 놓인 빈 나무 구멍을 포착했다——`,
      );
      era.println();

      await teio.print_and_wait(
        '어떤 의미에서 그것은 학원의 쓰레기통이었지만, 담겨있는 것은 학원 사람들의 감정과 말들이었다.',
      );
      era.println();

      await teio.print_and_wait(
        '이곳에서 자신의 생각을 마음껏 크게 내뱉는 것은 이미 하나의 풍습이 되어 있었다.',
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      await teio.print_and_wait(`어느새 ${teio.sex}는 나무 구멍 앞에 서 있었다.`);
      era.println();

      await teio.say_and_wait(`나…… (포기하고 싶어)`);
      era.println();

      await teio.print_and_wait(
        '말이 목구멍까지 차올랐지만, 내뱉기가 너무나 힘들었다. 말해버리는 순간 스스로 인정하게 될까 봐 두려운 것일까? 스스로 인정하면, 돌이킬 수 없는 현실이 되어버리니까?',
      );
      era.println();

      await teio.print_and_wait(
        '하지만 현실은 현실이다. 주관적인 의지로 거부한다고 해서 부정할 수 있는 것이 아니다.',
      );
      era.println();

      await teio.say_and_wait('나 정말로——');
      era.println();

      await era.printAndWait('（?）「너 정말 대단해, 고생 많았어.」');
      era.println();

      await teio.say_and_wait('?! 트레이너?');
      era.println();

      await era.printAndWait(
        `（?）「네 선택은 옳아, 자신감을 가져. 이제 다 이룬 거잖아? 방황을 끝내고 돌아올 때가 된 거야. 괜찮아, 내가 곁에 있어 줄게.」`,
      );
      era.println();

      await era.printAndWait('（?）「이제부터는 마음껏——」');
      era.println();

      await teio.say_and_wait('당신 누구야?!');
      era.println();

      await era.printAndWait('（?）「나를 못 알아보는 거야? 테이오?」');
      era.println();

      await era.printAndWait(
        `（?）「어제도, 그리고 그전에도 내가 너한테 이렇게 말해왔잖아? 넌 충분히 잘했어—— 이제 쉴 때가 된 거야.」`,
      );
      era.println();

      await era.printAndWait(
        `（?）「후후, 유감 같은 건 없잖아? 네가 한마디만 하면 내가 함께해 줄게. 그러면 우리는——」`,
      );
      era.println();

      await teio.say_and_wait('——시끄러워.');
      era.println();

      await teio.say_and_wait('당신은 내 트레이너가 아냐!');
      era.println();

      await teio.print_and_wait(
        `${teio.get_teen_sex_title()}는 자신도 모르게 크게 소리쳤다. 눈앞의 환상은 멀어져 갔지만, 소리는 멈추지 않았다. 머릿속에서 글자들이 격렬하게 휘몰아쳤다.`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `（?）「남들이 뭐라 하든 지난 몇 년간의 경험은 너의 자산이야. 테이오가 달리는 모습을 보고 인생이 바뀐 사람도 많아. 테이오는 이미 전설이 됐다고!」`,
      ]);
      era.println();

      await teio.say_and_wait(`무슨 소릴 하는 거야!!`);
      era.println();

      await teio.print_and_wait(
        `${teio.get_teen_sex_title()}는 두 주먹을 꽉 쥐고 온몸을 떨며 온 힘을 다해 외쳤다.`,
      );
      era.println();

      await teio.say_and_wait(
        '난 한 번도 전설이 된 적 없어! 난 한 번도 무언가를 끝까지 해낸 적이 없다고! 내가 남긴 미련은 셀 수도 없어! 애초에 진짜 나든 트레이너든 절대로 그런 말을 할 리 없어! 당신은 그저 당혹감과 슬픔이 만들어낸 자기연민의 그림자일 뿐이야! 난 이런 자기위안용 변명을 받아들이지 않겠어! 결국 복귀한 뒤에 성적을 내지 못할까 봐 두려운 거겠지! 상관없어! 난 그저 계속 달리고 싶어! 난 전당에 오를 거야! 거기서 더 많은 흥분과 기쁨을 얻고 말겠어!',
      );
      era.println();

      await me.say_and_wait('테이오?');
      era.println();

      await teio.say_and_wait('너 어떻게 아직—— 응?');
      era.println();

      era.printButton('「어, 음, 방금 막 왔어. 아무것도 못 봤다고.」', 1);
      await era.input();

      await teio.say_and_wait('……흥.');
      era.println();

      await era.printAndWait(`${me.name}의 담당 우마무스메 입가에 옅은 미소가 번졌다.`);
      era.println();

      await teio.say_and_wait(
        `설령 들켰다고 해도 상관없어. 트레이너, 방금 한 말들은 전부 진심이니까. 우리—— 계속 전진하자.`,
      );
      era.println();

      era.printButton('「새로 태어난 무적의 테이오 양과 동행하게 되어 영광입니다.」', 1);
      await era.input();

      wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [0, 0, 0, 20, 15],
          0,
          JSON.parse('{"체력":150}'),
        ) || wait_flag;
      wait_flag && (await era.waitAnyKey());
      return false;
    } else if (event_arg === 95 + 25 && event_marks.spring_teio === 1) {
      if (era.get('flag:현재상호작용캐릭터') !== 3) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('봄의 제왕', teio);
      await me.say_and_wait('정말 좋네……');
      era.println();
      await era.printAndWait(
        `트레이닝이 막 끝난 참이다. ${
          me.name
        }과(와) 담당 우마무스메는 함께 기숙사로 돌아가는 길을 느긋하게 산책하고 있다. ${teio.get_uma_sex_title()} ${teio.get_adult_sex_title()}는 격렬한 운동으로 헝클어진 머리를 흔들었고, 튕겨 나가는 땀방울 사이로 전신에서 피어오르는 열기가 희미하게 보였다.`,
      );
      await teio.say_and_wait('응? 트레이너? 뭐라고 했어?');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 자신도 모르게 ${teio.sex}를 넋 놓고 바라보다 속마음을 내뱉었다는 사실을 깨닫고 급히 말을 돌렸다.`,
      );
      era.println();

      era.printButton('「내 말은, 요즘 네 성적이 정말 훌륭하다는 뜻이야.」', 1);
      await era.input();

      await teio.say_and_wait('으~응? 정말 그뿐이야?');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 고개를 돌려 대답을 피하며, 슬그머니 옷깃을 세워 붉어진 얼굴을 가렸다.`,
      );
      era.println();

      await era.printAndWait(
        `어린 ${teio.get_uma_sex_title()}는 ${
          me.name
        }을(를) 힐끗 보더니 입술을 오므리며 미소 지었고, 이내 갑자기 진지한 표정으로 바뀌었다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너…… 우리의 여정은 아직 끝나지 않았어.');
      era.println();

      await era.printAndWait(
        `갑작스러운 물음에 ${me.name}은(는) 무심코 뒤를 돌아보았다. 적당히 농담으로 받아치려 했지만, ${teio.sex}의 진지한 표정을 보고는 말문이 막히고 말았다.`,
      );
      await teio.say_and_wait(
        '나의 과거의 성적도, 현재의 영광도, 미래의 목표도 전부 너와 공유할 거야. 그러니까 우리 함께 계속 나아가자.',
      );
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 한 치의 흐트러짐 없이 ${
          me.name
        }에게 진심을 털어놓았다.`,
      );
      era.println();

      era.printButton('「물론이지」', 1);
      await era.input();

      await era.printAndWait(`${me.get_couple_title()}은 함께 목표를 향해 걸어갔다——`);
      wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [35, 0, 35, 0, 0],
          0,
          JSON.parse('{"체력":350}'),
        ) || wait_flag;
    } else if (event_arg === 47 + 5) {
      await print_event_name('그래서, 옷은 왜 그 모양이야!', teio);
      await era.printAndWait(
        '또다시 구름 한 점 없는 맑은 날이다—— 트레센의 날씨는 정말 좋구나.',
      );
      await era.printAndWait(`${me.name}은(는) 초봄의 기운을 만끽하며 학원 안뜰을 걷고 있다.`);
      await era.printAndWait(
        `하지만 오늘은 그때처럼 ${me.name} 혼자 산책하는 것이 아니었다.`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('어쩐지 분위기가 좀 어색하다.');
      await era.printAndWait(
        `${
          me.name
        }은(는) 저도 모르게 곁에 있는 어린 ${teio.get_uma_sex_title()}를 곁눈질했다. 드러난 하얀 살결, 사복 아래로 살짝 비치는 분홍색 어깨끈의 속옷…… 아니, 너무 자극적이다. 계속 보다가는 스승의 도리에 어긋날 것 같다.`,
      );
      await era.printAndWait(
        `게다가 ${teio.sex}가 입은 옷은 화려한 비치웨어 같은 아동복 느낌이라, ${me.name}의 죄책감은 더욱 커졌다.`,
      );
      await era.printAndWait(
        `이렇게 귀여운 ${teio.get_uma_sex_title()}가 바로 ${
          me.name
        }과(와) 담당 계약을 맺은 사람이라니……`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      era.printButton('「응?」', 1);
      await era.input();
      await era.printAndWait(
        `활기찬 ${teio.get_teen_sex_title()}의 목소리가 들리자, ${
          me.name
        }은(는) 빠르게 잡념을 비우고 평상심을 되찾으며 최대한 자연스럽게 대답하려 애썼다.`,
      );
      await era.printAndWait('그리고 시선은 꼿꼿하게 전방 도로만을 향했다.');
      era.println();

      await teio.say_and_wait('ㄴ…… 내 사복 말인데, 어떻게 생각해?');
      era.println();

      era.print(`${me.name} 당신은 즉시 대답했다——`);
      era.printButton('「음…… 꽤 어린애 같네」（체력+150）', 1);
      era.printButton('「귀여워……」（스피드+20）', 2);
      era.printButton('「아주 멋져, 테이오!」（파워+20）', 3);
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('으으~ 난 이제 어린애가 아냐!');
        era.println();

        await era.printAndWait(
          `${teio.sex}는 입술을 내밀며 뾰로통한 표정을 지었지만, 그 모습이 오히려 더 귀여웠다.`,
        );
        await era.printAndWait(` ${me.name}와 ${teio.sex}는 한동안 묵묵히 걸었다.`);
        era.println();
        wait_flag =
          get_attr_and_print_in_event(
            3,
            undefined,
            0,
            JSON.parse('{"체력":150}'),
          ) || wait_flag;
      } else if (ret === 2) {
        await teio.say_and_wait('엣!');
        era.println();

        await era.printAndWait(
          ` ${me.name}의 담당 우마무스메는 짧은 신음을 내뱉으며 얼굴이 붉어졌다. ${me.name} 또한 쑥스러워져 ${teio.sex}를 쳐다보지 못했고, 두 사람은 그렇게 묵묵히 걸음을 옮겼다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(3, [20], 0) || wait_flag;
      } else {
        await teio.say_and_wait(
          `그거야 당연하지! 너는 역시 이 테이오 님의 멋짐을 알고 있구나!`,
        );
        await era.printAndWait(
          `${teio.sex}는 아주 기뻐 보였다. ${me.name}도 미소를 지으며 ${teio.sex}와 잠시 함께 걸었다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(3, [0, 0, 20], 0) || wait_flag;
      }
    } else if (event_arg === 'the_days_together') {
      await print_event_name('함께 전진하는 나날', teio);

      await era.printAndWait(
        `학원 중심에는 세 여신의 조각상이 놓인 분수가 있다. 매일 수많은 ${teio.get_uma_sex_title()}나 인간들이 이곳에서 조용히 기도하며 소원을 빈다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 자신의 담당 우마무스메를 조금 닮은 듯한 조각상의 얼굴을 쳐다보며, 주머니 속 지갑을 만지작거렸다. 소원을 빌어볼까……`,
      );
      era.println();

      await teio.say_and_wait('트레이너!');
      era.println();

      await era.printAndWait(
        `${me.name}이(가) 뒤를 돌아 담당 우마무스메에게 손을 흔들자, ${teio.sex}는 폴짝폴짝 뛰어오더니 주위 시선은 아랑곳하지 않고 ${me.name}의 손을 잡았다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${teio.sex}의 얼굴을 보며 생각했다. 정말…… 좀 닮았네.`,
      );
      era.println();

      await teio.say_and_wait('으음~ 나랑 같이 있으면서 다른 애 생각을 하는 거야?');
      era.println();

      await era.printAndWait(
        `——애가 아니라고! ${me.name}은(는) 그렇게 말하려 했으나, 담당 우마무스메의 표정을 보고는 얌전히 입을 다물기로 했다.`,
      );
      era.println();

      await teio.say_and_wait(
        `흥…… 그럼 이 바람기 다분한 트레이너에게 작은 벌을 줄게. ${me.name}, 아까 소원 빌려고 했지? 무슨 소원이었어?`,
      );
      era.println();

      era.printButton('「앞으로도 잘 부탁해」（호감도+10, 전 능력치+5）', 1);
      if (love > 90) {
        era.printButton(
          '「생각이 아니라, 아니, 난 영원히 네 곁에 있을 거야」（애정도+1, 컨디션 상승, 무작위 두 가지 능력치+10）',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('전혀 소원 같지 않잖아…… 뭐야 그게.');
        era.println();

        await era.printAndWait(`하지만 ${me.name}은(는) 정말로 빌 소원을 정하지 못했었다.`);
        era.println();

        wait_flag = sys_like_chara(3, 0, 10) || wait_flag;
        wait_flag =
          get_attr_and_print_in_event(3, new Array(5).fill(5), 0) || wait_flag;
      } else {
        await teio.say_and_wait('……용서해 줄게, 이번뿐이야.');
        era.println();

        await era.printAndWait(
          `귀 끝까지 빨개진 어린 ${teio.get_uma_sex_title()}가 ${me.name}의 손을 놓았다.`,
        );
        await era.printAndWait(
          `얼마 후, ${teio.name}가 떠난 뒤 ${me.name}은(는) 다시 이곳으로 돌아와 싱긋 웃으며 지갑 속의 모든 동전을 분수에 던져 넣었다. 그리고 두 손을 모아 처음으로 진지하게 소원을 빌었다.`,
        );
        era.println();

        const attr_change = new Array(5).fill(0);
        gacha(Object.values(attr_enum), 2).forEach(
          (e) => (attr_change[e] += 10),
        );
        wait_flag = sys_love_uma(3, 1) || wait_flag;
        wait_flag = sys_change_motivation(3, 1) || wait_flag;
        wait_flag = get_attr_and_print_in_event(3, attr_change, 0) || wait_flag;
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};