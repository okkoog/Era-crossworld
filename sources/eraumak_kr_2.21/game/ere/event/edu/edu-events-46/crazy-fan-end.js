const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');

module.exports = async () => {
  const callname = sys_get_callname(46, 0),
    falcon = get_chara_talk(46),
    me = get_chara_talk(0);
  if (new FalconEduMarks().crazy_fan) {
    await era.printAndWait(`평범하기 그지없는 어느 날 아침`);
    await falcon.say_and_wait(
      `${callname}도 오늘 하루 파이팅이야⭐`,
    );
    await era.printAndWait(
      `연이은 실패로 인해 많은 팬에게 의구심을 사고 있었지만, 팔코의 응원 덕분에 ${me.name}은(는) 흔들리지 않고 자신의 훈련 계획을 밀고 나갔다.`,
    );
    await me.say_and_wait(`팔코, 오늘 일, 부탁해도 될까?`);
    await falcon.say_and_wait(
      `——! ${callname}의 요청이라면, 팔코도 계속해서 노력할게⭐`,
    );
    await era.printAndWait(
      `수많은 경쟁자 사이에서 두각을 나타내며, 매일 흘린 땀방울이 마침내 보답을 받기 시작했다.`,
    );
    await era.printAndWait(
      `이 아이돌 일을 계기로 팔코의 지명도를 높일 수 있다면, 이후의 더트 경기에도 큰 도움이 될 것이다.`,
    );
    await falcon.say_and_wait(`만약 팔코가 도망쳐 버린다면?`);
    await era.printAndWait(
      `무언가를 기대하는 듯한 ${falcon.name}은 초조한 눈빛으로 ${me.name}을(를) 바라보았다.`,
    );
    era.printButton(`그, 그럴 땐 쫓아가는 수밖에 없지!`, 1);
    await era.input();
    await falcon.say_and_wait(`지평선 끝까지 쫓아올 거야?`);
    await era.printAndWait(`그때 눈부신 조명이 무대 위를 비췄다.`);
    await me.say_and_wait(`저곳이 바로 팔코의 그랜드 라이브야!`);
    await era.printAndWait(
      `배우들은 자신의 대사를 나지막이 읊조렸고, 제작진은 마지막으로 카메라가 정상적으로 작동하는지 확인했다.`,
    );
    await falcon.say_and_wait(`길이 없으면 팔코가 찾을게! 목표를 발견하면 꽉 잡을 거야!`);
    await era.printAndWait(`감독이 맨 앞줄에 자리를 잡고 앉았다.`);
    await me.say_and_wait(`——커다란 사랑을 꽉 움켜쥐러 가자!`);
    await era.printAndWait(`각자 위치로! 모두가 주인공의 등장을 기다리고 있었다.`);
    await falcon.say_and_wait(
      `최강의 ${falcon.uma_sex_title} 아이돌, ${falcon.name}♪ 오늘도 도착 완료⭐`,
    );
    await era.printAndWait(`귀여운 의상을 입은 팔코가 등장했다.`);
    era.printButton(`근처를 조금 돌아다녀 보자`, 1);
    era.printButton(`그냥 자리에 앉아서 팔코의 공연을 보자`, 2, { disabled: true });
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`아무도 없는 백스테이지 준비실로 돌아왔다.`);
      await era.printAndWait(`왠지 모르게 기분이 고조되는 것 같았다.`);
      await me.say_and_wait(
        `공기는 조금 탁하지만, 여기에서도 ${falcon.name}의 아름다운 노랫소리가 들려왔다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「실례합니다, ${falcon.name}의 트레이너님이신가요?」`,
      );
      await era.printAndWait(`어느샌가 준비실에 나타난 ${falcon.uma_sex_title}.`);
      await me.say_and_wait(`응, 내가——`);
      await era.printAndWait(`반응할 틈도 없이 가슴에서 날카로운 통증이 전해졌다.`);
      await era.printAndWait(
        `${falcon.uma_sex_title} 「처음 뵙겠습니다, ${callname}. 그리고, 작별이에요.」`,
      );
      await era.printAndWait(
        `두 번째 칼날을 휘두르려던 ${falcon.uma_sex_title}의 얼굴에 ${me.name}이(가) 급하게 던진 화장품이 정면으로 적중했다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「으윽—— 너무 우습게 보지 마! 으아아아!!!」`,
      );
      await era.printAndWait(
        `항상 가지고 다니던 가방에서 대 ${falcon.uma_sex_title}용 스프레이를 꺼낸 ${me.name}은(는) 비틀거리며 일어났다.`,
      );
      await era.printAndWait(
        `비명을 지르는 ${falcon.uma_sex_title}를 무시하고, 스프레이의 가스를 끝까지 눌러 뿜어냈다.`,
      );
      await me.say_and_wait(`빨리 이 상황을 팔코에게 알려야 해.`);
      await era.printAndWait(
        `무의식적으로 가방을 치켜든 ${me.name}은(는) 덕분에 즉사라는 최악의 결말은 면할 수 있었다.`,
      );
      await era.printAndWait(
        `하지만 아드레날린의 자극 속에서도, 멈추지 않는 피가 밖으로 흘러넘치고 있었다.`,
      );
      await me.say_and_wait(`여긴 너무 위험해, 여기서 지혈할 수는 없어.`);
      await era.printAndWait(`빨리 이곳을 벗어나야 했다.`);
      await era.printAndWait(
        `그렇게 생각하며 떠나려던 ${me.name}의 가방을, ${falcon.uma_sex_title}가 마구잡이로 뻗은 손으로 움켜잡았다.`,
      );
      await me.say_and_wait(`안 돼.`, true);
      await era.printAndWait(
        `엄청난 힘이 전해졌고, 생명줄이었던 가방은 이제 목을 조르는 사신으로 변했다.`,
      );
      await era.printAndWait(
        `목이 졸린 ${me.name}은(는) 허공에 무력하게 손을 휘두를 수밖에 없었다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 「이 녀석, 지옥에서 네 죄를 참회하라고! 하하하하하하!!!」`,
      );
      await falcon.say_and_wait(
        `${callname}, 팔코 들어갈게?`,
      );
      await era.printAndWait(`의식이 점점 흐려지던 ${me.name}은(는) 환청이 들리는 듯했다.`);
      await me.say_and_wait(`마지막으로, 팔코의 목소리를 들을 수 있어서……`, true);
      await me.say_and_wait(`난……`, true);
      await era.printAndWait(
        `바닥에 힘없이 쓰러진 ${me.name}은(는) 이제 고통조차 느낄 수 없게 되었다.`,
      );
    }
    era.drawLine();
    await falcon.say_and_wait(`${callname}?`);
    await era.printAndWait(`부드러운 부름이 들려왔다. 아주 익숙한 목소리였다.`);
    await me.say_and_wait(`천국에 온 걸까? 조금만 더 자게 해줘.`, true);
    await era.printAndWait(`당신은 안심한 듯 깊은 잠에 빠져들었다.`);
    era.drawLine();
    await falcon.say_and_wait(`${callname}.`);
    await era.printAndWait(`부드러우면서도 단호한 목소리가 먼 곳에서 들려왔다.`);
    await era.printAndWait(`정말 그리운 목소리였다.`);
    await era.printAndWait(
      `어디선가 들어본 적이 있는 것 같았다. 교실이었나? 옥상이었나? 그 ${falcon.teen_sex_title}——`,
    );
    await me.say_and_wait(`나는 누구지? 여긴 어디야?`, true);
    await era.printAndWait(`칠흑 같은 세상을 훑어보며, 다시 깊은 잠 속으로 빠져들었다.`);
    await falcon.say_and_wait(
      `${callname}, 팔코가 또 보러 왔어.`,
    );
    await falcon.say_and_wait(`팔코, 이제 업계에서도 어느 정도 자리를 잡았어.`);
    await falcon.say_and_wait(
      `예전에 ${callname}에게 이 이야기를 했었지만, ${callname}은 기억하지 못하겠지.`,
    );
    await era.printAndWait(`쾌활했던 목소리가 점점 낮게 가라앉았다.`);
    await falcon.say_and_wait(
      `그래도, 그래도 팔코는 꼭 ${callname}의 기대를 저버리지 않고 계속 노력할 거야! ${callname}, 다음에 또 봐!`,
    );
    await me.say_and_wait(`팔코……`);
    await era.printAndWait(
      `몸을 일으키려 했으나 마비 증세 때문에 실패했고, 몸은 다시 병상 위로 무겁게 떨어졌다.`,
    );
    await falcon.say_and_wait(`엣?!`);
    await era.printAndWait(
      `——마지막으로 얼굴만 보고 가려던 ${falcon.name}이 그 과정을 모두 지켜보고 있었다.`,
    );
    await falcon.say_and_wait(`${callname}…… 어서 와!`);
    await me.say_and_wait(`얼마나 지난 거야?`);
    await era.printAndWait(
      `분명 아주 오랜 시간이 흘렀을 것이다. ${me.name}은(는) 이미 최악의 상황을 각오하고 있었다.`,
    );
    await falcon.say_and_wait(`음—— 그 사건이 있고 나서 벌써 3년이나 지났어.`);
    await me.say_and_wait(`……그렇구나.`);
    await era.printAndWait(`벌써 그렇게 오래됐구나.`);
    await me.say_and_wait(`팔코는 예전보다 훨씬 더 반짝거려 보여.`);
    await era.printAndWait(
      `혼자 남겨진 ${falcon.teen_sex_title}가 어떻게 고독하게 이 아이돌의 길을 걸어왔을지 감히 상상조차 할 수 없었다.`,
    );
    await falcon.say_and_wait(
      `응! ${callname}이 퇴원하면 이제 반짝반짝 빛나는 팔코를 볼 수 있을 거야!`,
    );
    await me.say_and_wait(`……미안해.`);
    await era.printAndWait(`트레이너인 내가 팔코의 곁에 있어 줬어야 했는데.`);
    await falcon.say_and_wait(
      `아니야, 팔코는 ${callname}이 깨어난 모습을 본 것만으로도 정말 행복해.`,
    );
    await falcon.say_and_wait(`여기서 더 바란다면 팔코는 너무 욕심쟁이일 거야.`);
    await era.printAndWait(`차가운 작은 손과 거친 큰 손이 하나로 겹쳐졌다.`);
    await falcon.say_and_wait(
      `그러니까 ${callname}, 빨리 나아야 해.`,
    );
    await era.printAndWait(
      `큰 손을 자신의 뺨에 살며시 가져다 대며, ${falcon.name}은 눈을 감고 오랜만에 느껴지는 온기를 만끽했다.`,
    );
    await me.say_and_wait(
      `……응, 꼭 그럴게. 팔코의 콘서트도, 팔코와 함께할 앞으로의 모든 것도, 전부 다.`,
    );
    await era.printAndWait(
      `입술에서 전해지는 물기 어린 촉감이 이어지려던 말을 가로막았다.`,
    );
    await me.say_and_wait(`아니, 이걸로 충분해.`, true);
    await era.printAndWait(`입맞춤의 느낌은, 조금 짭짤했다.`);
    await print_event_name(`Freesia`, falcon);
  }
};