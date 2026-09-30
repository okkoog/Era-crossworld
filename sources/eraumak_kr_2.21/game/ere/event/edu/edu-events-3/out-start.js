const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async out_start(teio, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;

    if (era.get('flag:현재상호작용캐릭터') !== 3) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    if (event_arg === 'dance_or_kongfu') {
      await print_event_name('무용…… 무도? 이걸로 테이오 스텝을 훈련할 수 있을까?', teio);

      await era.printAndWait(
        `왁스 칠을 한 단단한 나무 바닥, 사람의 형상이 비칠 정도로 매끄러운 그 위에서, 한 명의 ${teio.get_uma_sex_title()}가 도복을 입고 다리 올리기와 발경 연습을 하고 있다.`,
      );
      era.println();

      await me.say_and_wait('그만, 잠시 쉬자. 이 정도면 충분한 것 같아.');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 직접 배합한 적당한 비율의 생리식염수 병을 따서 ${teio.sex}에게 건넸다. ${teio.sex}는 그것을 받아 일정 속도에 맞춰 조금씩 삼켰다.`,
      );
      era.println();

      await me.say_and_wait('아…… 생각보다 성과가 좋은걸.', true);
      era.println();

      await era.printAndWait(
        `${me.name}의 담당은 대체 어디서 뭘 본 건지, 갑자기 무술을 배워보고 싶다고 ${me.name}에게 말을 꺼냈다. 쿵푸의 기교를 달리기에 융합하고, 특히 하체의 보법을 연습해서 자신의 '테이오 스텝'을 한 단계 더 정진시키고 싶다나 뭐라나.`,
      );
      era.println();

      await era.printAndWait(
        `${me.name}은(는) ${teio.sex}의 고집을 꺾지 못해 한 번 시도해 보게 했는데, 예상외로 꽤 효율적인 훈련이 되었다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너, 어때 보여?');
      era.println();

      await era.printAndWait(`${me.name}은(는) 싱글벙글 웃는 담당을 보며 이렇게 대답했다——`);
      era.printButton(
        '「내 생각엔 먼저 하앗— 하고 이렇게 한 다음, 탸앗— 하고……」(파워&근성 +20, 스킬 포인트 +15)',
        1,
      );
      era.printButton(
        '「춤이 곧 무도…… 즉, 극의에 달하기 위한 수련이지!」(스피드 +30, 스킬 포인트 +15, 체력 +200)',
        2,
      );
      era.printButton(
        `「이 훈련을 통해 신체 협응성을 조절할 수 있을 것 같아. 음, 무게 중심을 순간적으로 이동시켜서 라스트 스퍼트 때 가속도를 내보는 건 어떨까?」(스피드 +15, 스태미나 +20, 지능 +30, 스킬 포인트 +30)`,
        3,
      );
      const ret = await era.input();
      if (ret === 1) {
        wait_flag =
          get_attr_and_print_in_event(3, [0, 0, 20, 20, 0], 15) || wait_flag;
      } else if (ret === 2) {
        wait_flag =
          get_attr_and_print_in_event(
            3,
            [30],
            15,
            JSON.parse('{"체력":200}'),
          ) || wait_flag;
      } else {
        wait_flag =
          get_attr_and_print_in_event(3, [15, 20, 0, 0, 30], 30) || wait_flag;
      }
    } else if (event_arg === 'lets_go_together') {
      await print_event_name('함께 가자!', teio);

      await teio.say_and_wait('하치미🎶～');
      era.println();

      await era.printAndWait(
        `노란색 원피스를 입은 작은 ${teio.get_uma_sex_title()}가 햇살을 받으며 앞에서 깡충깡충 뛰어가고 있다. 넘치는 활력을 발산하면서도, ${
          me.name
        }을(를) 배려하는 건지 ${teio.sex}는 결코 ${me.name}의 시야 밖으로 벗어나지 않았다.`,
      );
      await era.printAndWait(
        `저렇게 활기차고 자유로운 ${teio.sex}의 모습을 보며 ${me.name} 자신도 모르게 미소를 지으며 뒤를 따라갔다.`,
      );
      await era.printAndWait(
        '잠시 후 인공적으로 조성된 시냇가에 도착했다. 딱 보니 일반 관광객들이 다니는 길은 아닌 듯한데—',
      );
      await era.printAndWait(
        `${me.name}이(가) 그런 생각을 하던 찰나, 담당의 샌들은 이미 물 위로 솟아오른 바위를 딛고 있었다. ${teio.sex}가 ${me.name}에게 한쪽 손을 내밀었다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너도 이쪽으로 와!');
      await era.printAndWait(`${me.name}의 선택은——`);
      era.printButton('고개를 끄덕인다 (스태미나 +15)', 1);
      era.printButton('「아니, 규칙을 지키는 게 좋겠어」 (근성 +15)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${me.name} 역시 손을 뻗어 ${teio.sex}를 붙잡았다. 체구에 어울리지 않는 강한 힘이 ${me.name}을(를) 끌어당겼고, 두 사람은 물을 가르며 즐거운 시간을 보냈다.`,
        );
        await era.printAndWait('——관리인에게 들켜서 한 소리 듣지만 않았어도 더 완벽했을 텐데.');
        era.println();
        wait_flag = get_attr_and_print_in_event(3, [0, 15], 0) || wait_flag;
      } else {
        await era.printAndWait(
          `작은 ${teio.get_uma_sex_title()}는 조금 실망한 기색이었지만, 그래도 다시 ${
            me.name
          }의 곁으로 돌아와 나란히 정해진 산책로를 걸었다.`,
        );
        era.println();
        wait_flag =
          get_attr_and_print_in_event(3, [0, 0, 0, 15], 0) || wait_flag;
      }
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    } else if (event_arg === 'famous_in_famous') {
      await print_event_name('명인 중의 명인', teio);

      await me.say_and_wait('준비됐어?');
      era.println();

      await teio.say_and_wait('으응.');
      era.println();

      await era.printAndWait(
        '귀는 모자 안에 집어넣고, 꼬리는 바지 속으로 숨기고, 선글라스와 마스크까지 착용해 변장을 마쳤다.',
      );
      await era.printAndWait(
        `${me.name} 역시 눈에 띄지 않는 옷을 입고 깃을 세워 대충 얼굴을 가린 뒤 캡 모자를 눌러썼다. 준비 끝.`,
      );
      await era.printAndWait(
        `${me.get_couple_title()}은 마치 어설픈 스파이처럼 신분을 숨긴 채 거리로 나섰다.`,
      );
      await era.printAndWait(
        `——삼관을 달성한 이후로 ${teio.name}의 지명도는 나날이 높아졌고, 당연히 ${
          me.name
        }의 유명세도 그에 못지않게 치솟았다. 이제는 변장 없이는 인파가 몰리는 곳에 갔다간 순식간에 팬들에게 둘러싸여 아무것도 할 수 없게 된다.`,
      );
      await era.printAndWait(
        '그래서 이런 사전 작업은 필수다. 하지만 준비가 모든 상황을 대비해 주는 법은 없다. 예를 들면——',
      );
      era.println();

      await era.printAndWait(
        `타이어와 아스팔트가 마찰하며 내는 불쾌한 굉음이 ${me.name}의 고막을 때렸다.`,
      );
      await era.printAndWait(`${me.name}이(가) 고개를 돌리자, 마치 시간이 멈춘 듯 모든 것이 느리게 보였다.`);
      await era.printAndWait(
        '한 아이가 길 위에서 넘어졌고, 운전자는 아이의 낮은 키 때문에 미처 발견하지 못했다. 상황을 깨닫고 급브레이크를 밟았을 때는—— 이미 늦은 것처럼 보였다.',
      );
      await era.printAndWait(`하지만 그 순간, ${me.name}의 곁에서 엄청난 강풍이 몰아쳤다.`);
      await era.printAndWait(
        `${me.name}이(가) 안쪽에서 보호하고 있던 ${teio.get_uma_sex_title()} ${teio.get_adult_sex_title()}가 찰나의 순간 박차고 나가 질주했다.`,
      );
      await era.printAndWait('운전자는 몸을 뒤로 젖히며 브레이크를 끝까지 밟고 절망하며 두 눈을 감았다.');
      await era.printAndWait('그리고 기적이 일어났다.');
      await era.printAndWait(
        '슈욱, 하는 소리와 함께 마치 마술처럼 아이가 도로 위에서 사라졌고, 운전자는 아슬아슬하게 사고를 면했다. 그는 눈을 떴지만 대체 무슨 일이 일어난 건지 아직 파악하지 못한 듯했다.',
      );
      era.println();

      await teio.say_and_wait('앞으로는 부모님 손 꼭 붙잡고 다녀야 해, 마음대로 뛰어나가면 안 돼.');
      era.println();

      await era.printAndWait(
        `아이 「네…… 고마워요, ${teio.get_uma_sex_title()} ${
          teio.sex_code - 1 ? '누나' : '형'
        }!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()} ${teio.sex_code - 1 ? '누나' : '형'}?!`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name}는 그제야 질주할 때 일어난 바람에 모자가 날아갔고, 격렬한 움직임에 꼬리가 삐져나온 것을 깨달았다. ${me.name}이(가) 서둘러 다시 변장을 도와주려 했으나 이미 늦은 뒤였다.`,
      );
      era.println();

      await era.printAndWait(`행인 A 「어, ${teio.name}다!」`);
      era.println();

      await era.printAndWait('행인 B 「와, 전설의 테이오 님이야!」');
      era.println();

      await era.printAndWait(
        `행인 C 「봤어?! 방금 '테이오 스텝'으로 저 아이를 구했어!」`,
      );
      era.println();

      await era.printAndWait(
        `군중의 환호성이 파도처럼 커졌고, 소문을 들은 사람들이 ${me.get_couple_title()} 쪽으로 몰려들기 시작했다. ${me.get_couple_title()}은 순간 당황했지만, ${
          me.name
        }이(가) 테이오를 슬쩍 보니 ${teio.get_teen_sex_title()}의 얼굴은 상기되어 있으면서도 딱히 싫어하는 기색은 아니었다—— 역시 명성은 사람을, 혹은 ${teio.get_uma_sex_title()}를 기쁘게 만드는 법인가 보다.`,
      );
      await era.printAndWait(
        `이어 ${me.name}은(는) ${teio.sex}의 귀가 움찔거리며 방향을 트는 것을 포착했고, 곧이어 ${me.name}의 귀에도 몇몇 목소리가 들려왔다.`,
      );
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()} A 「와, 진짜 멋있다! 나도 저런 ${teio.get_uma_sex_title()}가 되고 싶어!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()} B 「듣자하니 ${
          teio.sex
        }의 트레이너가 엄청 유능하다던데, 아마 지금 옆에 있는 저 사람일 거야.」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()} C 「정말? 나도 저분이 내 전속 트레이너가 됐으면 좋겠어. 지금 당장 저분이랑 계약하고 싶어!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.get_uma_sex_title()} D 「외모랑 분위기도 너무 좋으시다, 정말……」`,
      );
      era.println();

      await era.printAndWait(
        `음…… 이건 예상치 못한 찬사네. 하지만 ${me.name}도 기분 좋게 받아들였다.`,
      );
      await era.printAndWait(
        `하지만 ${me.name}은(는) 그 뒷말에 대해 깊게 생각할 겨를이 없었다. 자신의 담당이 아주 장난기 어린 표정으로 이쪽을 쳐다보고 있었기 때문이다.`,
      );
      era.println();

      await me.say_and_wait(`큰일 났군…… 언제 저런 표정을 짓는 법을 배운 건지`, true);
      await era.printAndWait(
        `${me.name}은(는) 속으로 아차 싶었으나, ${teio.sex}는 이미 대여섯 걸음을 단숨에 다가와 ${me.name}의 팔을 덥석 붙잡으며 말했다.`,
      );
      era.println();

      await teio.say_and_wait(
        `미안해요 여러분, 저희는 이만 가볼게요! 응원해 주셔서 정말 감사합니다. 다음에는 경기장에서 만나요! 또~레~나~, 이제 테이오 ${teio.get_adult_sex_title()}랑 같이 출발할까?`,
      );
      era.println();

      era.print(`${me.name}은(는) 어이가 없으면서도 웃음이 나와 이렇게 대답할 수밖에 없었다——`);
      era.printButton('「무적의 테이오 님 곁을 지키는 것이 이 몸의 사명입니다」 (지능 +30)', 1);
      era.printButton(
        `「분부대로 하겠습니다, 나의 담당마님」 (무작위 능력치 3종 +15)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        wait_flag =
          get_attr_and_print_in_event(3, [0, 0, 0, 0, 30], 10) || wait_flag;
      } else {
        const attr_change = new Array(5).fill(0);
        gacha(Object.values(attr_enum), 3).forEach(
          (e) => (attr_change[e] += 15),
        );
        wait_flag =
          get_attr_and_print_in_event(3, attr_change, 10) || wait_flag;
      }
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    } else {
      return false;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};