const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const { buff_colors } = require('#/data/color-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    in_urara = get_chara_talk(52, chara_colors[1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);

  await era.printAndWait(
    '이토록 갑작스럽게 끝을 맺은 여정이 무엇을 의미하는지, 이제 와서 추궁하는 것은 아무런 의미가 없을지도 모른다.',
  );
  await era.printAndWait([
    '왜냐하면 ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    ' 모두, 두 사람이 헤어지는 결말이 이렇게 되어서는 안 된다는 것을 잘 알고 있었기 때문이다.',
  ]);
  await era.printAndWait([
    '여행 가방의 손잡이를 꽉 쥔 채, ',
    urara.get_colored_name(),
    '는 ',
    urara.sex,
    '가 내뱉을 일이 없던 가느다란 한숨을 내뱉었다.',
  ]);
  await era.printAndWait([
    '비록 사람들은 ',
    urara.get_colored_name(),
    '를 탓하지 않았고, 오히려 트레이너도 고생 많았다고 위로해주었지만, ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 이야기의 끝이 이래서는 안 된다는 것을 알고 있었다.',
  ]);
  await era.printAndWait([
    '전학 수속이 이미 끝났음에도 불구하고, 이것은 모두에게 비밀로 한 채 떠나는 작별이었기에 이 송별 자리에는 ',
    me.get_colored_name(),
    ' 한 사람만이 나와 있었다.',
  ]);
  await era.printAndWait([
    '그럼에도 곁에 있는 어린 ',
    urara.get_uma_sex_title(),
    '는 오히려 사려 깊게도 기운이 없는 ',
    me.get_colored_name(),
    '을(를) 다독여주고 있었다.',
  ]);
  const race_history = RaceHistory.get(52);
  if (race_history.check_begin()) {
    await urara.say_and_wait([
      '괜찮아, 더 이상 달릴 수 없어도 우라라는 어떻게든 할 수 있어! 그보다 ',
      callname,
      '는 괜찮아?',
    ]);
    await era.printAndWait([
      '위로하는 말을 건네고는 있었지만, ',
      urara.get_colored_name(),
      '의 얼굴에도 감출 수 없는 상실감이 서려 있었다.',
    ]);
    await era.printAndWait([
      '그 레이스에서 넘어진 이후로 몸은 아무 이상이 없었지만, ',
      urara.get_colored_name(),
      '는 너무나 일찍 레이스 ',
      urara.get_uma_sex_title(),
      '로서의 능력을 잃고 말았다.',
    ]);
    await era.printAndWait([
      '결국, 이 사실을 받아들이지 못한 이들은 마지막까지 ',
      urara.sex,
      '를 지켜내지 못한 ',
      me.get_colored_name(),
      '에게 비난의 화살을 돌렸다.',
    ]);
    await era.printAndWait([
      '하지만 개인을 향한 감정은 결국 시간이 흐름에 따라 흩어지기 마련이다. 그렇기에 ',
      urara.get_colored_name(),
      '의 걱정을 마주하며, ',
      me.get_colored_name(),
      '은(는) 그저 침묵 속에 고개를 저었다.',
    ]);
    await urara.say_and_wait([
      '……만약 ',
      callname,
      '가 정말 그렇게 생각한다면 ',
      urara.get_colored_name(),
      '도 너무 걱정하지 않을게. 사람들도 참, 나 원래 아리마 같은 건 나갈 수도 없었는데……',
    ]);
    await urara.say_and_wait(
      race_history.get_result(47 + 48)?.race === race_enum.arim_kin
        ? '하지만 한 번 더 가볼 수 있었다면, 정말 좋았을 텐데……'
        : '그래도, 한 번이라도 좋으니까 가보고 싶었는데……',
    );
  } else {
    await urara.say_and_wait([
      '괜찮아 ',
      callname,
      ', 걱정하지 마. 그냥 지방으로 돌아가는 것뿐인걸, 나는 계속 달릴 거야!',
    ]);
    await era.printAndWait([
      '그러나 ',
      me.get_colored_name(),
      '은(는) 알고 있었다. 남을 달래는 말투가 아무리 밝아도 얼굴의 실망감은 숨길 수 없으며, 그것은 ',
      urara.get_colored_name(),
      ' 역시 마찬가지라는 것을.',
    ]);
    await era.printAndWait([
      '그럼에도 슬픔을 감추기 위해, 그리고 ',
      me.get_colored_name(),
      '이(가) 너무 가슴 아파하지 않게 하기 위해, 어린 ',
      urara.get_uma_sex_title(),
      '는 억지로 말을 이어 나갔다.',
    ]);
    await urara.say_and_wait([
      '많은 사람이 ',
      callname,
      '가 우라라를 속이려 한 것뿐이라고 말하지만, 나는 알아. ',
      callname,
      '는 잘못 없어. 우라라가 너무 느렸을 뿐인걸.',
    ]);
    await urara.say_and_wait(
      '하지만 이대로 돌아가면 엄마가 뭐라고 하실까? 우라라한테 한 번도 화내신 적은 없지만……',
    );
    await urara.say_and_wait(
      '떠나기 전에, 우라라도 한 번쯤은 1등을 해보고 싶었어……',
    );
  }
  era.println();
  await era.printAndWait([
    '멀리서 점차 들어오는 열차를 바라보며, ',
    urara.get_colored_name(),
    '는 눈물을 꾹 참으며 강한 척 ',
    me.get_colored_name(),
    '의 옷자락을 붙잡았던 작은 손을 놓았다.',
  ]);
  await era.printAndWait([
    '그 직후, 어린 ',
    urara.get_uma_sex_title(),
    '가 마지막까지 인내하던 눈물은 결국 억제하지 못한 채 미리 쏟아져 나오고 말았다.',
  ]);
  era.println();
  if (era.get('love:52') >= 50) {
    await era.printAndWait([
      '눈물의 짠맛이 밴 가벼운 입맞춤이 ',
      me.get_colored_name(),
      '의 입술 위에 내려앉았다. ',
      me.get_colored_name(),
      ' 앞에서 까치발을 든 ',
      urara.get_colored_name(),
      '는 이미 눈물 범벅이 되어 있었다.',
    ]);
    await urara.say_and_wait([
      '미안해, ',
      callname,
      '. 우리 분명 다시 만날 수 있겠지만…… 그래도 우라라는 이렇게 하고 싶었어……',
    ]);
    await urara.say_and_wait('너무 괴로워…… 하지만 우라라는 제대로 작별 인사를 해야 하는데……');
  } else {
    await urara.say_and_wait([
      '……우라라는 역시 ',
      callname,
      '와…… 더 앞을 보고 싶었어……',
    ]);
    await urara.say_and_wait([
      '하지만 이러면 안 되는데…… 이제 떠나야 하는데 이런 말을 하면 안 되는데, 미안해, ',
      callname,
      '……',
    ]);
    await urara.say_and_wait([
      '그러니까 배웅해줘서 고마워. 잘 지내야 해, ',
      callname,
      '……',
    ]);
  }
  era.println();
  await era.printAndWait([
    '아쉬움을 뒤로한 채 고백을 멈추고, ',
    urara.get_colored_name(),
    '는 울음소리를 억누르며 뒤도 돌아보지 않고 기다려주지 않는 열차를 향해 달려갔다.',
  ]);
  await era.printAndWait([
    '열차가 떠남에 따라 몰려들었던 인파도 흩어졌다. 낯선 사람들의 흐름은 감정의 짐을 떨쳐내고, ',
    me.get_colored_name(),
    '을(를) 그 흐름 바깥에 남겨둔 채 텅 빈 승강장에 홀로 내버려 두었다.',
  ]);
  await era.printAndWait([
    '소란이 잦아들자, 주변은 마치 온 세상이 이 열차와 함께 ',
    me.get_colored_name(),
    '을(를) 떠나버린 듯 정적에 휩싸였다.',
  ]);
  await era.printAndWait([
    '비록 「다시 만나자」고 말은 했지만, 아무런 근거 없이도 지금 이 어린 ',
    urara.get_uma_sex_title(),
    '와의 이별은 아마도 「다시는 만날 수 없음」과 다름없다는 것을 느꼈다.',
  ]);
  await era.printAndWait([
    '이제 돌아가서 상점가 사람들을 어떻게 마주해야 할까? ',
    urara.get_colored_name(),
    '의 친구들을 어떻게 대해야 할까?',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '는 처음에 그토록 ',
    me.get_colored_name(),
    '을(를) 믿어주었고, 자신을 도와주려는 「믿음직한 어른」에게 작은 ',
    urara.get_teen_sex_title(),
    '의 연심마저 품고 있었다.',
  ]);
  await era.printAndWait([
    '하지만 지금 미소를 잃은 ',
    urara.sex,
    '의 뒷모습이 차창 너머로 사라지는 것을 보며, ',
    me.get_colored_name(),
    '은(는) 그 어떤 붙잡는 말 한마디조차 내뱉지 못했다.',
  ]);
  await era.printAndWait([
    '어쩌면 지금의 ',
    me.get_colored_name(),
    '에게 ',
    urara.get_colored_name(),
    '가 크게 실망했을지도 모른다. 어쩌면 지금의 ',
    urara.get_colored_name(),
    '는 이미 ',
    me.get_colored_name(),
    '을(를) 좋아하지 않게 되었을지도 모른다. 어쩌면 ',
    urara.sex,
    '는……',
  ]);
  await era.printAndWait([
    '하지만 그런 「어쩌면」이 산더미처럼 쌓인다 해도, 그중 어느 하나 어린 ',
    urara.get_uma_sex_title(),
    '를 단 한 순간도 붙잡아둘 수 없으며, ',
    urara.sex,
    '가 떠난다는 사실을 되돌릴 수도 없었다.',
  ]);
  await era.printAndWait([
    '멀어져가는 열차를 차마 바라보지 못한 채, 다시 원점으로 도망쳐 온 듯한 ',
    me.get_colored_name(),
    '은(는) 무겁게 눈을 감았다……',
  ]);
  era.drawLine();
  await in_urara.say_as_unknown_and_wait('……');
  await in_urara.say_as_unknown_and_wait([
    '하지만 정말 미안하게도, 성가신 ',
    me.get_adult_sex_title(),
    ', 저는 이야기가 이렇게 끝나게 두지 않을 겁니다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '당신에게 화를 낼 생각은 없지만, 우라라의 지금 이런 결말은 받아들일 수 없어요.',
  );
  await in_urara.say_as_unknown_and_wait(
    '다음에 다시 만날 기회가 있다면, 그때는 부디 정신 바짝 차려주길 바라요.',
  );
  await print_event_name(
    [{ color: buff_colors[3], content: '떠나가는 봄' }],
    urara,
  );
};