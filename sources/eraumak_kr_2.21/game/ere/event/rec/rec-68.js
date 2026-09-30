/**
 * @file 키타산 블랙 - 招募
 * @author 小黑
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    await era.printAndWait(
      '이른 아침의 트레센은 평소와 다름없이 한산했고, 단지 소수의 아이들만이 벽돌길 위를 달려가고 있었다.',
    );
    await era.printAndWait(
      `무거운 레이스 도구 상자들을 가득 안은 ${me.name}은(는) 맑은 하늘을 바라보며, 한 걸음씩 선발 레이스 경기장으로 향했다.`,
    );
    await era.printAndWait(
      '편자들이 짤랑거리며 부딪히는 소리, 이름표와 출발총 탄환들이 상자 안에 산더미처럼 쌓여 있었다.',
    );
    await era.printAndWait(
      '중앙이 전국에서 가장 수준 높고 시설이 좋은 곳이라 해도, 아낄 수 있는 부분은 아끼는 모양이네……',
    );
    await era.printAndWait(`${me.name}은(는) 내심 감탄 섞인 한숨을 내쉬며 계속 나아갔다.`);
    await era.printAndWait(
      `트레센 학원의 수많은 신입 트레이너 중 한 명으로서, 아직 담당이 없는 ${kita.get_uma_sex_title()}들을 보조하는 것은 학원의 대대로 내려오는 전통이나 다름없었다.`,
    );
    await era.printAndWait(
      '하지만 실제로 해보니, 이건 그저 신입 트레이너의 노동력을 착취하는 잡무일 뿐이었다.',
    );
    await era.printAndWait(
      '업무량이 아주 많은 건 아니지만, 이른 아침부터 시작되는 일은 사람을 다소 짜증스럽게 만들곤 한다.',
    );
    await era.printAndWait(
      `게다가 혼자서 경기장 하나를 사용하는 수십 명의 ${kita.get_uma_sex_title()}들의 도구를 운반하는 일은, 신입들에게 이것이 착취라며 분노 섞인 불평을 하게 만들기에 충분했다.`,
    );
    await era.printAndWait(
      `사실상 거의 모든 트레이너가 한 번씩은 거쳐 가는 과정이며, 이미 이름을 떨친 유명 트레이너들도 예외는 아니었다.`,
    );
    await era.printAndWait(
      `하지만 선발 레이스가 열리는 장소는 많았고, 모든 신입이 며칠 동안 쉬지 않고 노동하느라 정상적인 업무를 못 하게 할 수는 없었다.`,
    );
    await era.printAndWait(
      `결국 여러 명이서 가볍게 끝낼 일을, 하루에 한두 명의 고난사로 몰아넣은 셈이었다.`,
    );
    await era.printAndWait(
      `업무가 개인에게 할당되다 보니, 운이 나빠 날씨가 안 좋을 때 걸린 사람은 누구도 행복하지 않은 고난의 순환에 빠지게 된다.`,
    );
    await me.say_and_wait(`정말 너무하네……`, true);
    await era.printAndWait(
      `그렇게 속으로 투덜대던 찰나, 양팔에 가득 들려 있던 무거운 상자가 갑자기 가벼워졌고, ${me.name}은(는) 깜짝 놀라 몸을 떨었다.`,
    );
    await kita.say_and_wait(
      '트레이너님, 이걸 선발 레이스 경기장까지 옮기시는 건가요? 저에게 맡겨주세요!',
    );
    await era.printAndWait(
      `${
        me.name
      }이(가) 뒤를 돌아보자, 축제처럼 화사한 ${kita.get_teen_sex_title()}의 향기가 코끝을 간지럽혔다.`,
    );
    await era.printAndWait(
      `여름밤의 한가로운 노점상처럼, ${kita.get_uma_sex_title()}의 몸에서는 옅은 불꽃놀이 향기가 났고, 노점 옆에 쪼그려 앉은 ${kita.get_teen_sex_title()}의 하얀 피부에서 배어 나온 듯한 미미한 땀 냄새까지 느껴지는 듯했다.`,
    );
    await era.printAndWait(
      `그 은은한 땀 내음은 묘하게 마음을 편안하게 했지만, 트레이너로서의 책임감이 ${me.name}을(를) 곧바로 정신 차리게 했다.`,
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 뒤편에서 검은 단발머리의 ',
      kita.get_child_sex_title(),
      '가 ',
      me.get_colored_name(),
      '에게 미소 지으며, ',
      me.get_colored_name(),
      '의 마음속에 남아 있던 작은 원망들을 눈 녹듯 사라지게 했다.',
    ]);
    await kita.say_and_wait(
      '트레이너님, 괜찮으세요? 필요하시다면 저 키타짱이 보건실까지 모셔다드릴까요?',
    );
    await era.printAndWait(
      `${kita.get_uma_sex_title()}는 한 팔로 상자를 가볍게 안아 들고, 다른 한 손으로 ${
        me.name
      }의 이마를 짚어보며 걱정스러운 표정으로 물었다.`,
    );
    era.printButton('「아아…… 괜찮아, 걱정해 줘서 고마워」', 1);
    era.printButton(`「고마워, 그러고 보니 네 이름은 뭐야?」`, 2);
    await era.input();
    await era.printAndWait(
      `살갑게 다가와 도움을 주었지만 이름조차 알지 못하는 이 ${kita.get_uma_sex_title()}에게, ${
        me.name
      }은(는) 왠지 모를 미안함을 느꼈다.`,
    );
    await kita.say_and_wait(
      `제 이름은 ${kita.name}, 올해 초등부에 갓 입학한 신입생이에요!`,
    );
    await kita.say_and_wait(`이 짐들은 어디로 옮기면 되나요? 제가 목적지까지 가져다 드릴게요.`);
    await era.printAndWait(
      `검은 머리의 아이는 환하게 웃으며 ${me.name}에게 고개를 끄덕였고, 장소를 확인한 뒤 ${me.name}을(를) 안내하며 경기장으로 향했다.`,
    );
    await era.printAndWait(
      `${kita.get_teen_sex_title()}와 나란히 걷는 동안, ${
        me.name
      }은(는) 고개를 돌려 오른쪽 앞에서 걷고 있는 ${kita.get_uma_sex_title()}를 몰래 훔쳐보았다.`,
    );
    await era.printAndWait(
      `${kita.get_child_sex_title()}는 ${
        me.name
      }의 시선을 알아차리지 못한 채, 콧노래를 흥얼거리며 길을 따라 걸었기에 ${
        me.name
      }은(는) 거리낌 없이 ${kita.sex}의 예쁜 옆얼굴을 관찰할 수 있었다.`,
    );
    await era.printAndWait(
      `이 아이는 깨끗하고 하얀 얼굴을 가졌고, 맑은 호박색 눈동자에서는 고민 없는 자신감이 뿜어져 나오고 있었다.`,
    );
    await era.printAndWait(
      `${kita.sex}는 발밑의 길을 진지하게 살피며, 때때로 무릎으로 상자를 받쳐 올려 더 단단히 고쳐 안았다.`,
    );
    if (kita.sex_code !== 1) {
      await era.printAndWait(
        `땀에 젖어 몸에 착 달라붙은 체육복은 본의 아니게 탄력 있고 부드러운 몸의 곡선을 그려내고 있었다.`,
      );
      await era.printAndWait([
        '선명한 붉은 옷감이 ',
        kita.child_sex_title,
        '의 건강미 넘치는 허벅지와 엉덩이를 단단히 감싸고 있었고, 탄탄한 골반은 ',
        kita.child_sex_title,
        '의 움직임에 따라 서로 맞물리며 마치 하얀 떡처럼 찰진 느낌을 주어 묘한 상상을 불러일으켰다.',
      ]);
    }
    await era.printAndWait([
      kita.child_sex_title,
      '의 살결마다 배어 나오는 건강한 땀 냄새가 공기 중에 퍼졌지만, 정작 그 맑은 눈동자는 자신의 몸이 내뿜는 매력에 대해 전혀 자각하지 못하는 듯했다.',
    ]);
    await kita.say_and_wait(
      '트레이너님은 새로 오신 분이죠? 아침 일찍부터 도구 운반이라니 정말 고생이 많으시네요.',
    );
    await kita.say_and_wait(
      '제가 고향에 있을 때, 아버지께서도 제자들에게 짐을 옮기게 하시는 걸 자주 봤거든요. 그래서 이런 심부름이 어떤 기분인지 잘 알아요!',
    );
    await era.printAndWait([
      kita.child_sex_title,
      '가 소박한 미소를 지으며 ',
      me.get_colored_name(),
      '에게 말을 건넸고, 그 모습은 마치 따스한 햇살처럼 빛났다.',
    ]);
    await era.printAndWait(
      `나뭇잎 사이로 부서져 내리는 햇살이 활기차고 다정한 이 ${kita.get_uma_sex_title()}의 몸 위로 쏟아졌다.`,
    );
    await era.printAndWait(
      `전혀 거리낌 없는 이 아이의 태도에, 순간적으로 불순한 감정을 품었던 ${me.name}은(는) 스스로가 부끄러워졌다.`,
    );
    era.println();
    era.printButton('「정말 고마워, 덕분에 정말 큰 도움이 됐어.」', 1);
    await era.input();
    await kita.say_and_wait(
      '아니에요, 아니에요! 저도 사실 이 경기장에서 선발 레이스를 뛸 예정이라, 짐 좀 옮기는 건 식은 죽 먹기인걸요.',
    );
    await era.printAndWait(
      `${kita.name}은 가슴을 팡팡 두드리며, 심심풀이 삼아 ${me.name}에게 자신과 다른 아이의 이야기를 들려주었다.`,
    );
    await era.printAndWait(
      `${
        kita.sex
      }의 이야기는 끝이 없었다. 어릴 적부터 ${kita.get_uma_sex_title()} 선배들을 동경해 온 두 아이가 약속을 나누고 함께 트레센 학원의 경기장에 발을 들였다는 이야기였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 참으로 아름다운 아침이라고 생각했다. 햇살은 숲 사이로 잘게 부서져 내리고, 참새들은 상쾌한 봄날을 찬양하며 노래하고 있었다.`,
    );
    await era.printAndWait(
      `다만 이 짧은 시간은 오래 지속되지 못했다. 운동장에 도착한 ${kita.name}이 상자를 트랙 옆에 내려놓으면서 나란히 걷던 시간은 끝이 났다.`,
    );
    await kita.say_and_wait(
      '그럼 트레이너님, 저는 이제 워밍업 하러 갈게요! 시간 되시면 제 레이스도 보러 와주세요.',
    );
    await era.printAndWait(
      `검은 머리의 ${kita.get_uma_sex_title()}는 가벼운 발걸음으로 트랙을 향해 뛰어갔고, 친해 보이는 다른 아이와 대화를 나누기 시작했다.`,
    );
    await era.printAndWait(
      `꼭 보러 가야겠다고 생각하며, ${me.name}은(는) ${kita.get_uma_sex_title()}들에게 이름표를 나눠주는 업무를 시작했다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `바쁜 오전 업무를 모두 마친 뒤, 겨우 시간을 낸 ${me.name}은(는) 관중석에 서서 선발 레이스를 관찰하기 시작했다.`,
    );
    await era.printAndWait(
      `마침 한 레이스가 출발 신호와 함께 시작되었다. 게이트가 열리자마자 활기찬 검은 그림자가 마치 태풍처럼 튀어 나갔다.`,
    );
    await era.printAndWait(
      `트레이너 A 「저 아이가 ${kita.name}인가? 실력이 대단하군.」`,
    );
    await era.printAndWait(
      `트레이너 B 「컨디션이 아주 좋아 보여. 이 레이스의 승리는 ${kita.sex}의 것이겠네.」`,
    );
    await era.printAndWait(
      `트레이너 C 「기록상의 성격도 적절해. 담당으로 삼기에 최고의 선택지가 아닐까?」`,
    );
    await era.printAndWait(
      `트레이너들의 나지막한 감탄 속에서, ${kita.name}은 압도적으로 선두를 달리고 있었다.`,
    );
    await era.printAndWait(
      `힘이 넘치는 두 다리가 잔디 위에 깊은 발자국을 남겼고, 그 타고난 소질은 현장에 있는 모든 트레이너의 시선을 사로잡았다.`,
    );
    await era.printAndWait([
      kita.get_colored_name(),
      '의 발걸음에 맞춰 대도주 전술을 펼친 ',
      kita.uma_sex_title,
      '가 결승선을 통과하며 ',
      kita.sex,
      '의 승리를 확정지었다.',
    ]);
    await era.printAndWait(`지금의 나는……?`);
    era.printButton(`(내가…… ${kita.sex}의 트레이너가 되고 싶어!)`, 1);
    era.print('(모집 계속)', { offset: 1, width: 12 });
    era.printButton(`(어쩌면, 내가 아닌 더 훌륭한 트레이너를 만나야 할지도 몰라……)`, 2);
    era.print('(모집 취소)', { offset: 1, width: 12 });
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `무언가에 홀린 듯, 도저히 피할 수 없는 강렬한 감정이 ${me.name}의 마음속에서 타올랐고, 더 이상 침묵할 수 없게 만들었다.`,
      );
      await era.printAndWait(
        `레이스가 끝나자 ${kita.get_uma_sex_title()}들은 흩어져 퇴장했고, 트레이너들은 미끼를 쫓는 물고기처럼 그 뒤를 따랐다.`,
      );
      await kita.say_and_wait(
        `우와아아아아! 트레이너님은…… 아까 그 트레이너님!`,
      );
      await era.printAndWait(
        `경기장 구석에서 땀을 닦고 있던 ${kita.name}을 찾을 수 있었다.`,
      );
      await kita.say_and_wait(
        '저기, 그게…… 지금 땀을 닦고 있거든요. 트레이너님, 혹시 스카우트하시려는 거라면 조금만 기다려 주실래요…?',
      );
      await kita.say_and_wait('가능하면 아주 많이 기다려 주시면 좋겠는데……');
      await era.printAndWait(
        `이 ${kita.get_child_sex_title()}는 뚜껑을 딴 생수병을 든 채 당황한 기색으로 ${
          me.name
        }을(를) 바라보았고, 달리기 직후라 발그레해진 얼굴과 함께 꼬리는 혼란스러운 감정을 대변하듯 살랑거리고 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${me.name}은(는) 참을 수 없었다. 그런 달리기를 보고 어떻게 참을 수 있단 말인가!`,
      );
      await me.say_and_wait(
        `${kita.name}, 네 표정과 눈빛은 정말 최고였어. 부디 내가 네 트레이너가 되게 해줘!`,
      );
      await era.printAndWait(
        `${me.name}의 갑작스러운 제안에, 이미 혼란스럽던 ${kita.name}은(는) 더욱 패닉에 빠졌다.`,
      );
      await kita.say_and_wait(
        '자, 잠잠잠깐 이거 헌팅인가요!? 너무 빨라요! 이런 열렬한 시선에 어떻게 대처해야 할지 모르겠다고요!',
      );
      get_chara_talk(67);
      await kita.say_and_wait(
        '어쩌지 다이아짱, 아직 마음의 준비가 안 됐는데! 그리고 트레이너님, 겉모습만 보고 스카우트하지 마세요! 저 실력도 엄청 좋단 말이에요!',
      );
      await era.printAndWait(`${kita.name}은(는) 꼬리를 휘저으며 어쩔 줄 몰라 하는 표정을 지었다.`);
      await era.printAndWait(
        `오늘 아침에 처음 본 트레이너에게 대시를 받은 ${kita.get_uma_sex_title()}이자 ${kita.get_teen_sex_title()}는 머릿속이 과부하되어 사고 능력을 상실했다.`,
      );
      await era.printAndWait(
        `결국 한 걸음씩 다가오는 트레이너를 향해, ${kita.name}은 거의 척수 반사 수준의 반응으로 발을 들어올려……`,
      );
      await me.say_and_wait('그러니까, 내가 네 트레이너가…… 푸악!?');
      await era.printAndWait(`${me.name}의 얼굴에 묵직한 킥을 날리고 말았다.`);
      await era.printAndWait(
        `그로부터 무려 30분 동안 사정을 설명한 끝에, ${me.name}은(는) 마침내 ${kita.name}의 연락처를 받아내는 데 성공했다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 정오의 햇살 아래 미안해하는 표정의 ${kita.name}을 보며, 이런 아이와 계약을 맺게 된 것에 안도감을 느꼈다.`,
      );
      era.set('cflag:68:모집상태', recruit_flags.yes);
      era.set('callname:68:0', '트레이너 선생님');
      add_event(
        event_hooks.week_end,
        new EventObject(68, cb_enum.edu).set_arg('beginning'),
      );
    } else {
      await era.printAndWait(`${me.name}은(는) 마음속의 고동을 억누르며 훈련장을 떠났다.`);
    }
  }
};