const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const { race_enum } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} flash
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 * @param {function} super_race_end
 */
module.exports = async function (
  flash,
  me,
  callname,
  hook,
  extra_flag,
  super_race_end,
) {
  const edu_weeks = era.get('cflag:37:육성턴수합산'),
    your_name = me.name;
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('모든 일의 시작 · 2', flash);
    await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
    era.printButton('「레이스하느라 수고했어.」', 1);
    await era.input();
    await flash.say_and_wait('후우…… 정말 잊지 못할 경험이었네요.');
    await era.printAndWait(
      '에이신 플래시는 깊은 숨을 내쉬며, 레이스에서 얻은 피로를 조금이나마 털어냈다.',
    );
    await era.printAndWait(
      `이어서 ${your_name}은(는) ${flash.sex}가 내뱉은 진심 어린 감탄을 들었다.`,
    );
    era.printButton('「잊지 못할 경험이지?」', 1);
    await era.input();
    await flash.say_and_wait(
      '네, 이것이 공식 레이스와 연습 레이스의 차이로군요. 역시 말로만 들어서는 느낄 수 없는 것이었어요.',
    );
    await era.printAndWait('말을 마치며, 에이신 플래시는 만족스럽게 고개를 끄덕였다.');
    await era.printAndWait(
      `${your_name}은(는) 새로운 수확을 얻은 ${flash.sex}가 이번 레이스의 과정을 무척 즐거워했다는 것을 알 수 있었다.`,
    );
    era.printButton('「이제 다음에는 뭘 할 거야?」', 1);
    await era.input();
    await era.printAndWait('그렇다면 지금이야말로 여세를 몰아 다음 단계로 나아갈 좋은 타이밍이다.');
    await flash.say_and_wait(
      '다음 일정이라면, 역시 계획에서 결정해둔 대로 진행해야겠지요.',
    );
    era.printButton('「계획이라.」', 1);
    await era.input();
    await era.printAndWait(
      '데뷔전을 통해 중장거리 코스에서의 기량을 점검하고, 이어서 참가할 클래식급의 클래식 3관과 시니어급의 춘추 3관을 준비한다.',
    );
    await era.printAndWait(
      `종합하자면, 이것이 에이신 플래시가 자신의 ${flash.get_uma_sex_title()} 생애를 위해 세워둔 설계였다. 얻을 수 있는 모든 영광을 손에 넣겠다는 의지가 담겨 있었고, 종이 위에 적힌 글자만 보더라도 무척이나 호화로운 구성이었다.`,
    );
    await flash.say_and_wait('다만……');
    await era.printAndWait(
      `……하지만, 만약 모든 것이 ${flash.sex}의 바람대로 이루어진다면. 마지막에는 ${flash.sex}가 직접 말했던 것처럼, 영광을 통해 부모님이 ${flash.sex}를 자랑스럽게 여기도록 만들 수 있을 것이다.`,
    );
    await era.printAndWait(`거기까지 생각하자, ${your_name}은(는) 속으로 스스로를 다독이며 의욕을 다졌다.`);
    era.printButton('「그럼 우리, 함께 힘내보자.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await era.printAndWait(
      `에이신 플래시는 ${your_name}에게 고개를 끄덕였고, ${flash.sex}의 얼굴에는 찬란한 미소가 떠올랐다.`,
    );
  } else if (extra_flag.race === race_enum.sats_sho) {
    await print_event_name('해야할 일 · 2', flash);
    await era.printAndWait(
      '도중에 몇 차례 우여곡절이 있었지만, 클래식 3관 중 하나인 사츠키상이 마침내 막을 내렸다.',
    );
    await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
    await era.printAndWait(
      `에이신 플래시가 무사히 경기장에서 돌아오는 모습을 보고, ${your_name}은(는) 안도의 한숨을 내쉬었다.`,
    );
    era.printButton('「수고했어.」', 1);
    await era.input();
    await flash.say_and_wait('네, 대체로 계획에서 구상했던 대로 달릴 수 있었습니다.');
    era.printButton('「정말 멋진 레이스였어.」', 1);
    await era.input();
    await era.printAndWait(
      `방금 막 회복한 몸을 이끌고도, ${flash.sex}가 이번 레이스에서 보여준 퍼포먼스는 훌륭했다. 그 사실은 의심의 여지 없이 매우 뛰어났다.`,
    );
    await flash.say_and_wait('후훗~');
    await era.printAndWait(
      `${your_name}의 칭찬을 듣고, 에이신 플래시는 가볍게 웃었다. 지금 ${flash.sex}의 눈동자에는 열정이라는 이름의 빛이 일렁이고 있었다.`,
    );
    await flash.say_and_wait('다음 레이스는 일본 더비군요.');
    await flash.say_and_wait(
      '지금의 컨디션을 반드시 유지해야 합니다. 한층 더 높은 강도의 훈련도 일정에 추가해야겠어요.',
    );
    await flash.say_and_wait(
      '또한 레이스에 필요한 전략과 참가자들의 관련 자료도 미리 준비해야 합니다.',
    );
    await flash.say_and_wait('그리고……');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 일본 더비가 오기 전까지의 미래를 위해 갑자기 바쁘게 세부 계획을 세우는 에이신 플래시를 바라보았다.`,
    );
    era.printButton(
      '「어쨌든 일본 더비도 중요하지만, 레이스 준비 외에도 자신에게 적절한 휴식 시간을 주도록 해.」',
      1,
    );
    await era.input();
    await era.printAndWait(`노동과 휴식의 조화라는 이치를 잘 알고 있는 ${your_name}이(가) 조언을 건넸다.`);
    era.drawLine();
    await flash.say_and_wait('일본 더비…… 에이신 플래시…… 평가……');
    await era.printAndWait(
      `트레센 학원으로 돌아가는 열차 안에서, ${your_name}은(는) 무심코 에이신 플래시가 스마트폰 검색창에 위의 세 단어를 입력하는 것을 보게 되었다.`,
    );
    era.printButton('「사람들이 너에 대해 어떻게 생각하는지 검색하는 거야?」', 1);
    await era.input();
    await era.printAndWait(
      `잠시 생각한 끝에, ${your_name}은(는) 에이신 플래시가 왜 그러는지 그 의도를 이해했다.`,
    );
    await flash.say_and_wait(
      '네, 사츠키상 레이스를 치른 뒤에 사람들이 저를 보는 시선이 어떻게 변했을지 무척 궁금했거든요.',
    );
    await era.printAndWait(
      '말을 하며 에이신 플래시는 웹 페이지의 어느 격렬한 토론 게시판을 열었다. 눈에 띄는 댓글은 다음과 같았다——',
    );
    await say_by_passer_by_and_wait(
      '네티즌 A',
      '사츠키상 활약은 정말 의외네. 몸이 갓 나은 상태였을 텐데.',
    );
    await say_by_passer_by_and_wait(
      `네티즌 B`,
      `이거 일본 더비에서의 ${flash.sex}의 활약이 기대되는걸.`,
    );
    await say_by_passer_by_and_wait(
      `네티즌 C`,
      `사츠키상에 비해 일본 더비는 난이도가 한층 더 높을 텐데, ${flash.sex}가 그때는 어떤 성적을 낼지 모르겠네.`,
    );
    era.printButton('「다들 너에게 큰 기대를 걸고 있는 모양이네.」', 1);
    await era.input();
    await era.printAndWait(`그걸 보고 ${your_name}이(가) 미소 지으며 말했다.`);
    await flash.say_and_wait(
      `음…… 하지만 저뿐만 아니라 다른 참가자들에게도, 게시판 사람들은 ${flash.sex}들을 응원하는 다양한 이유를 가지고 있네요.`,
    );
    await flash.say_and_wait(
      '이해할 수 있어요. 결국 일본 더비는 누구에게나 특별한 레이스니까요.',
    );
    await flash.say_and_wait('그러니……');
    await era.printAndWait(
      `거기까지 말한 에이신 플래시는 갑자기 깊게 숨을 들이켰고, ${flash.sex}의 눈빛은 찰나에 매우 확고해졌다.`,
    );
    await flash.say_and_wait('더욱 노력해야만 합니다.');
    era.printButton('「플래시……」', 1);
    await era.input();
    await flash.say_and_wait('일본 더비의 우승, 반드시—— 제가 차지하겠습니다!');
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    await print_event_name('해야할 일 · 4', flash);
    await say_by_passer_by_and_wait('관중', '오오오오오——!!!');
    await say_by_passer_by_and_wait('사회자', '에이신 플래시—— 골인!!!');
    await say_by_passer_by_and_wait(
      '사회자',
      '정말 놀라운 결과입니다, 이번 일본 더비의 우승자는—— 에이신 플래시!!!',
    );
    await say_by_passer_by_and_wait(`사회자`, `모두 ${flash.sex}를 축하해 주십시오!`);
    await flash.say_and_wait('허억…… 허억……');
    await flash.say_and_wait('내가…… 이겼어?');
    await say_by_passer_by_and_wait(
      `팬 A`,
      `축하해, 에이신 플래시! 널 응원하길 정말 잘했어!`,
    );
    await flash.say_and_wait('!');
    await say_by_passer_by_and_wait(
      `팬 B`,
      `더비 ${flash.get_uma_sex_title()} 에이신 플래시! 오늘의 모습, 꼭 기억할게.`,
    );
    await flash.say_and_wait('여러분……');
    era.printButton('「축하해, 플래시.」', 1);
    await era.input();
    await flash.say_and_wait(`${callname}…… 네! 제가 일본 더비에서 이겼어요!`);
    era.printButton('「정말 대단한 성취야.」', 1);
    await era.input();
    await flash.say_and_wait(
      '부모님의 기대도, 당신의 기대도 저버리지 않았어요. 해냈습니다!',
    );
    await era.printAndWait(
      `에이신 플래시의 얼굴에 찬란한 미소가 피어올랐다. 지금 ${flash.sex}는 승리가 가져다준 기쁨에 완전히 젖어 있는 듯 보였다.`,
    );
    await era.printAndWait('「띠링.」');
    await era.printAndWait(
      `그리고 절묘한 타이밍에 스마트폰 알림음이 ${flash.sex}의 귀에 들려왔다.`,
    );
    await flash.say_and_wait('새 메시지?');
    await era.printAndWait('에이신 플래시가 스마트폰바를 확인하자, 화면에는——');
    await say_by_passer_by_and_wait(
      `플래시의 어머니`,
      `1위 축하한다, 플래시. 일본 더비에서의 활약은 정말 super, toll, klasse 했단다.`,
    );
    await flash.say_and_wait('!');
    await say_by_passer_by_and_wait(
      `플래시의 어머니`,
      `우승 소식을 듣고 네 아빠는 기뻐서 케이크 가게 안을 이리저리 뛰어다니셨단다.`,
    );
    await flash.say_and_wait('아버지가 세상에…… 후훗~');
    await say_by_passer_by_and_wait(
      `플래시의 어머니`,
      `솔직히 널 품에 안고 실껏 칭찬해주고 싶구나. 이번 우승은 결코 쉽지 않았을 텐데, 네가 지난 몇 년간 쏟은 노력의 결실이자 성장의 증거란다.`,
    );
    await say_by_passer_by_and_wait(
      `플래시의 어머니`,
      `승리에서 오는 이 기쁨이 앞으로도 늘 네 곁에 머물기를 바라마.`,
    );
    await flash.say_and_wait('어머니……');
    era.printButton('「부모님도 무척 기뻐하고 계신 모양이네.」', 1);
    await era.input();
    await flash.say_and_wait('……네!');
    await era.printAndWait('기쁨을 전하는 메시지는 여기서 끝났다.');
    await era.printAndWait('부모님의 축복을 받은 에이신 플래시는 지금 그 어느 때보다 의욕이 넘쳐 보였다.');
    await flash.say_and_wait(
      '일본 더비에서 이겼다는 사실이 주는 기쁨은 취할 정도로 달콤하지만, 객관적으로 볼 때 이것도 생애의 한 단계일 뿐입니다.',
    );
    await flash.say_and_wait(
      `그러니 지체하지 말고 바로 다음 계획을 논의하러 가죠, ${callname}!`,
    );
    await flash.say_and_wait('함께——— 국화상을 향해, 전진입니다.');
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks < 96) {
    await print_event_name('도전의 길 · 2', flash);
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '재팬 컵은 일본 더비와 비슷한 거리와 코스를 가지고 있다. 따라서 당연하게도, 일본 더비 우승자였던 에이신 플래시는 이 레이스에서도 극도로 화려한 퍼포먼스를 보여주었다.',
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton('「레이스하느라 수고했어.」', 1);
      await era.input();
      await era.printAndWait(
        '과정은 무척 험난했지만, 에이신 플래시는 마침내 자신의 탄탄한 실력으로 세대의 장벽을 넘어 선배들을 꺾는 데 성공했다.',
      );
      await flash.say_and_wait('이겼습니다.');
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${your_name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        `스페셜 위크 씨와 젠노 롭 로이 씨의 실력은 정말 대단했어요. 온 힘을 다해서야 겨우 ${flash.sex}들을 앞지를 수 있었습니다.`,
      );
      era.printButton('「정말 멋진 레이스였어.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 저도 제가 지금 어느 정도의 실력을 갖췄는지 확실히 체감할 수 있었습니다.',
      );
      await era.printAndWait(
        `에이신 플래시가 고개를 끄덕였고, ${your_name}은(는) ${flash.sex}의 말투에서 이 값진 승리에 대한 기쁨을 분명히 느낄 수 있었다.`,
      );
      era.printButton('「무척 기뻐 보이네.」', 1);
      await era.input();
      await flash.say_and_wait(
        '네, 이겼을 뿐만 아니라 그 덕분에 새로운 깨달음도 많이 얻었으니까요.',
      );
    } else {
      await era.printAndWait(
        '재팬 컵은 일본 더비와 비슷한 거리와 코스를 가지고 있다. 이론적으로는 일본 더비를 제패했던 에이신 플래시가 이 레이스에서도 눈에 띄는 활약을 보여줄 것으로 기대되었다.',
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton('「레이스하느라 수고했어.」', 1);
      await era.input();
      await era.printAndWait(
        '하지만 안타깝게도, 코스의 이점만으로는 에이신 플래시와 선배들 사이의 실력 격차를 메우기에 부족했다.',
      );
      await flash.say_and_wait('패배했네요.');
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${your_name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        '최선을 다했지만, 결국 스페셜 위크 씨와 젠노 롭 로이 씨를 따라잡지 못했습니다.',
      );
      era.printButton('「멋진 레이스였어.」', 1);
      await era.input();
      await flash.say_and_wait(
        `네, 저도 ${flash.sex}들과의 격차를 확실히 실감할 수 있었어요.`,
      );
      await era.printAndWait(
        '에이신 플래시는 고개를 끄덕였고, 말투에 실망한 기색은 그리 크지 않았다.',
      );
      await flash.say_and_wait(
        '그래도 덕분에 새로운 깨달음을 많이 얻었습니다.',
      );
    }
    await era.printAndWait(`이어서 ${flash.sex}의 얼굴에 깊이 생각에 잠긴 표정이 떠올랐다.`);
    await flash.say_and_wait(
      `이대로 계속 나아간다면, 언젠가는 분명 ${flash.sex}들을 정면으로 꺾고 선두를 차지할 수 있겠지요.`,
    );
    era.printButton('「다음 레이스에서 이번 레이스의 성과를 증명해 보자고.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await flash.say_and_wait('아리마 기념…… 후훗, 정말 기대되는 레이스군요.');
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
    await print_event_name('도전의 길 · 4', flash);
    await say_by_passer_by_and_wait('관중 A', '정말 멋진 레이스였어.');
    await say_by_passer_by_and_wait(
      '관중 B',
      '맞아, 과연 아리마 기념이야. 티켓값이 전혀 아깝지 않네.',
    );
    await say_by_passer_by_and_wait(
      `관중 A`,
      `오래전에 은퇴했던 ${flash.get_uma_sex_title()}들이 오랜만에 다시 등장하는 것만으로도 흥분됐는데, ${
        flash.sex
      }들이 이렇게 놀라운 성적을 낼 줄이야.`,
    );
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '관중 B',
        '그 얘길 하자면, 에이신 플래시가 더 대단했지.',
      );
      await say_by_passer_by_and_wait(
        `관중 B`,
        `아직 성장이 다 끝나지 않은 클래식급 ${flash.get_uma_sex_title()}이면서도, 레이스 도중 이미 명성이 자자한 선배들을 차례차례 제쳤잖아.`,
      );
      await say_by_passer_by_and_wait(
        `관중 A`,
        `정말이지 엄청난 실력이네. 3년 차에 ${flash.sex}가 보여줄 모습이 더욱 기대되는걸.`,
      );
      era.drawLine();
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「수고했어, 정말 뛰어난 활약이었어.」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 얕잡아 볼 수 없는 수준이었다.`,
      );
      await era.printAndWait(
        `심지어 고학년 선배들을 상대로도 ${flash.sex}는 대등하게 맞서 싸웠고, 마침내 승리까지 거머쥐었다.`,
      );
      await flash.say_and_wait(
        '후우…… 아주 상쾌한 레이스였어요. 과정은 무척 험난했지만, 결국 승리를 얻어냈습니다.',
      );
      await era.printAndWait(
        `에이신 플래시는 깊은 숨을 내쉬었고, 큰 싸움 끝에 원하는 결과를 얻은 만족감이 ${flash.sex}의 얼굴에 떠올랐다.`,
      );
      await flash.say_and_wait(
        '재팬 컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 분명히 느낄 수 있었어요.',
      );
      await flash.say_and_wait(
        '그렇다는 건 올해의 계획은 성공적으로 마무리된 셈이네요.',
      );
    } else {
      await say_by_passer_by_and_wait(
        `관중 B`,
        `후배들과의 격차가 꽤 명확하게 벌어졌네. 내년에도 저 ${flash.sex}들이 계속 참가한다면 클래식급 아이들은 어떻게 감당해야 할지 모르겠어.`,
      );
      await say_by_passer_by_and_wait(
        `관중 A`,
        `클래식급 하니까 말인데, 봤어? 에이신 플래시의 이번 레이스 활약.`,
      );
      await say_by_passer_by_and_wait(
        '관중 B',
        '응, 객관적으로 보면 정말 훌륭했어. 다만 더 강력한 라이벌을 만난 게 아쉬울 뿐이지.',
      );
      await say_by_passer_by_and_wait(
        `관중 A`,
        `정말 아쉽지만, ${flash.sex}의 성장은 아직 끝나지 않은 것 같아. 그렇게 생각하니 내년에는 어떻게 될지 정말 기대되는데.`,
      );
      await say_by_passer_by_and_wait(
        '관중 B',
        '맞아, 내년의 모습이 벌써부터 기다려지는걸.',
      );
      era.drawLine();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 무시할 수 없는 수준이었다.`,
      );
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton('「수고했어, 정말 뛰어난 활약이었어.」', 1);
      await era.input();
      await era.printAndWait(
        '실전에서 아직 선배들과의 격차가 조금 존재하긴 했지만, 충분히 납득할 수 있는 범위 안이었다.',
      );
      await flash.say_and_wait(
        '후우…… 아주 상쾌한 레이스였어요. 비록 패배라는 결과는 피하지 못했지만요.',
      );
      await era.printAndWait(
        `내년에 다시 한번 성장할 ${flash.sex}이라면 진정한 의미에서의 대등한 승부를 벌일 수 있을 것이다.`,
      );
      await flash.say_and_wait(
        '그래도 재팬 컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 확실히 실감할 수 있었습니다.',
      );
      await flash.say_and_wait('다음번에는 저를 추월하는 게 그렇게 쉽지만은 않을 거예요.');
      await era.printAndWait('우연하게도, 눈앞의 트레이너 역시 그렇게 생각하고 있었다.');
      await era.printAndWait(
        `덕분에 ${your_name}은(는) 에이신 플래시의 표정이 그리 낙담해 보이지 않으며, 오히려 은은하게 아쉬움이 남는 듯한 열기를 띠고 있음을 알 수 있었다.`,
      );
      await flash.say_and_wait(
        '뭐, 어쨌든 아리마 기념이 끝났으니 올해의 계획도 공식적으로 막을 내린 셈이네요.',
      );
    }
    await era.printAndWait(
      `말을 마치며 에이신 플래시는 의욕 넘치게 고개를 끄덕였다. 레이스에서 자극을 받은 ${flash.sex}는 벌써부터 3년 차 계획을 실행하고 싶어 못 견디는 듯했다.`,
    );
    era.printButton('「돌아가면 함께 미래를 계획해보자.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    extra_flag.rank === 1 &&
    edu_weeks > 96
  ) {
    await print_event_name('찬란한 가을 · 2', flash);
    const me = get_chara_talk(0);
    await say_by_passer_by_and_wait(
      '사회자',
      '이번 가을 텐노상의 우승자는—— 에이신 플래시!!!',
    );
    await say_by_passer_by_and_wait(`사회자`, `모두 ${flash.sex}를 축하해 주십시오!!!`);
    await say_by_passer_by_and_wait(
      `관중`,
      `에이신 플래시! 축하해, ${your_name}!!!`,
    );
    await flash.say_and_wait('후우…… Juhu! Geschafft! 해냈습니다!');
    await era.printAndWait(
      '눈부신 광채가 쏟아지는 도쿄 경마장에서, 화려한 모습으로 가장 먼저 결승선을 통과한 에이신 플래시가 환호하는 관중석을 향해 열렬히 손을 흔들었다.',
    );
    await flash.say_and_wait('응원해주신 여러분, 정말 감사합니다!');
    await era.printAndWait(
      `${flash.sex}의 미소는 그 어느 때보다 찬란했다. 수많은 시련을 겪고 이상을 실현한 뒤에야 터져 나온, 억누를 수 없는 기쁨이었다.`,
    );
    await flash.say_and_wait(
      `더비 ${flash.get_uma_sex_title()}가 되었던 이 도쿄 경기장에서 다시 한번 승리할 수 있다니, 정말로……`,
    );
    await say_by_passer_by_and_wait(`플래시의 어머니`, `플래시, 축하한다.`);
    await flash.say_and_wait('!');
    await say_by_passer_by_and_wait(
      `플래시의 아버지`,
      `정말 멋진 레이스였다. 플래시는 역시 우리의 자랑이야.`,
    );
    await flash.say_and_wait('!!');
    await era.printAndWait(
      `그때, 관중석 앞쪽에서 바다를 건너와 ${
        flash.sex_code - 1 ? '딸' : '아들'
      }이 달리는 모습을 보길 간절히 바랐던 부모님이 일어서서 ${flash.sex}에게 박수를 보내며 축하해주었다.`,
    );
    await say_by_passer_by_and_wait(
      `플래시의 어머니`,
      `물론 네가 무엇을 하든, 너는 우리에게 가장 사랑스럽고 소중한 보물이란다. 그 사실은 영원히 변하지 않아.`,
    );
    await say_by_passer_by_and_wait(
      `플래시의 아버지`,
      `네가 자신의 길을 묵묵히 관철했다는 사실이 무엇보다 대견하구나. 그건 정말 쉽지 않은 일이지.`,
    );
    await say_by_passer_by_and_wait(
      `플래시의 아버지`,
      `그래서 나는 한 사람의 인간으로서, 너에게 경의를 표하고 싶단다.`,
    );
    await flash.say_and_wait('아버지…… 어머니……');
    era.printButton(
      '「축하해, 플래시. 꿈을 이루었구나. 너는 나의 자랑이기도 해.」',
      1,
    );
    await era.input();
    await flash.say_and_wait('트레이너님까지……');
    await flash.say_and_wait('여러분, 감사합니다!');
    await era.printAndWait(
      '말을 마치며 에이신 플래시는 우아하게 허리를 굽혀 인사했다. 그러고는 잔디 위에 한쪽 무릎을 꿇었다.',
    );
    await flash.say_and_wait('후우——');
    await era.printAndWait(
      `${flash.sex}는 깊은 숨을 들이쉬며, 마음속에 미리 준비해둔 대사를 읊기 시작했다.`,
    );
    await flash.say_and_wait(
      '오늘 이 승리에 대해, 제가 진심으로 존경하는 몇 분에게 감사의 인사를 전하고 싶습니다.',
    );
    await flash.say_and_wait(
      '엄격하면서도 자상하신 아버지와 부드럽고 사랑 넘치시는 어머니, 그리고…… 언제나 길을 가리키는 이정표가 되어 제 곁에서 아낌없이 저를 도와주신 트레이너님.',
    );
    await flash.say_and_wait(
      '그분들의 도움이 없었더라면 지금의 저는 결코 이 자리에 서지 못했을 것입니다.',
    );
    await flash.say_and_wait(
      '그러니 부디, 이 영광스러운 자리에서 그분들에게 저의 가장 깊은 경의를 표하는 것을 허락해 주십시오.',
    );
    await era.printAndWait(
      '에이신 플래시가 깊게 고개를 숙였고, 하늘을 가득 메운 환호성은 실체화된 빛이 되어 내려앉았다.',
    );
    await era.printAndWait('그것은 영광을 안고 돌아온 기사에게 주어지는 마땅한 보상이었다.');
    era.drawLine();
    await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
    era.printButton('「어서 와, 플래시.」', 1);
    await era.input();
    await era.printAndWait('레이스 후, 대기실.');
    await era.printAndWait(
      `방으로 돌아온 에이신 플래시가 한결 가벼워진 표정으로 ${your_name}에게 인사를 건넸다.`,
    );
    era.printButton('「부모님과의 대화는 잘 끝났어?」', 1);
    await era.input();
    await era.printAndWait(`그 모습을 보고 ${your_name}이(가) 물었다.`);
    await era.printAndWait(
      `에이신 플래시가 경기장을 내려오자마자 부모님과 서로 껴안고 있었기에, 곁에 서 있던 ${your_name}은(는) 가족의 재회를 방해하기 미안해 감정을 충분히 나눈 뒤에 돌아올 ${flash.sex}를 대기실에서 기다리고 있었다.`,
    );
    await flash.say_and_wait('네.');
    await era.printAndWait('에이신 플래시는 아주 행복한 표정으로 고개를 끄덕였다.');
    await flash.say_and_wait(
      '제가 독일을 떠나온 몇 년 동안 있었던 일들을 아버지, 어머니와 간단히 나누었어요.',
    );
    await flash.say_and_wait(
      '정말 즐거운 시간이었어요. 두 분의 새로운 이야기를 듣는 것도, 제 이야기를 들려드리는 것도요.',
    );
    await flash.say_and_wait('가능하다면 언제까지나 이렇게 지내고 싶을 정도로요.');
    await era.printAndWait(`${flash.sex}는 여운이 남는 듯 감탄을 내뱉었다.`);
    await flash.say_and_wait(
      '하지만 아쉽게도 시간이 늦어 부모님은 먼저 숙소로 돌아가 쉬셔야만 했네요.',
    );
    era.printButton(
      '「너도 오늘 고생했으니 가서 푹 쉬어. 남은 일들을 처리할 시간은 앞으로 아주 넉넉하니까.」',
      1,
    );
    await era.input();
    await era.printAndWait(
      '가을 텐노상을 제패하며 부모님의 자랑이 된 에이신 플래시는 이미 자신의 꿈을 이루었다.',
    );
    await era.printAndWait(
      `바꿔 말하면 ${flash.sex}에게 이제 트윙클 시리즈에 계속 참가해야 할 명분은 남아 있지 않았다. 이런 상황이라면 미래에는 가족과 함께 보낼 시간이 기다리고 있을 터였다.`,
    );
    await flash.say_and_wait('……당신 말이 맞아요. 그래서 지금 그걸 위해 온 것이니까요.');
    era.printButton('「?」', 1);
    await era.input();
    await era.printAndWait(
      `에이신 플래시는 당연히 ${your_name}의 말에 담긴 함축적인 의미를 알아챘다.`,
    );
    await era.printAndWait(
      `그러자 다음 순간, ${your_name}은(는) ${flash.sex}가 얼굴에서 미소를 거두는 것을 보았다.`,
    );
    await flash.say_and_wait(`당신에게 드리고 싶은 말씀이 있습니다, ${callname}.`);
    era.drawLine();
    await flash.say_and_wait(
      '올해 6월에 당신은 제게 꿈을 이룬 뒤 무엇을 하고 싶은지 물으셨죠.',
    );
    await era.printAndWait('하얀 전등 빛이 에이신 플래시의 아름다운 얼굴을 비추었다.');
    await era.printAndWait(`${flash.sex}는 평온한 말투로 ${your_name}을(를) 응시했다.`);
    era.printButton('「부모님의 케이크 가게를 물려받고 싶다고 했었지.」', 1);
    await era.input();
    await flash.say_and_wait('네, 그건 처음부터 정해두었던 일이었어요.');
    await flash.say_and_wait(
      '하지만 동시에 말씀드렸죠. 당신과 만난 뒤 겪은 일이 너무 많아, 시간을 들여 다시 계획을 세워야겠다고요.',
    );
    era.printButton('「계획의 결과는 어떻게 됐어?」', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 에이신 플래시의 말에 따라 질문했다.`);
    await flash.say_and_wait('………');
    await era.printAndWait(`이어서 ${your_name}은(는) ${flash.sex}가 가볍게 한숨 짓는 것을 들었다.`);
    await flash.say_and_wait('한 말은 반드시 지키고, 받은 은혜는 반드시 갚는 것. 그것이 저의 철칙입니다.');
    await flash.say_and_wait(
      '당신의 도움으로 저는 부모님께 인정받았고, 한 사람의 몫을 다하는 인간으로 성장했습니다. 그것은 제가 간절히 바라왔던 소망이었어요.',
    );
    await era.printAndWait(
      `말을 하며 에이신 플래시는 손을 뻗어, ${flash.sex}가 ${flash.get_uma_sex_title()}로서 지금까지 세운 모든 계획이 담긴 노트를 ${your_name}에게 건넸다.`,
    );
    await flash.say_and_wait(
      '솔직히 지금도 이 사실을 마주할 때면 조금은 현실감이 없다는 생각이 들곤 합니다.',
    );
    await flash.say_and_wait(
      '물론 그랬기에 저에 대한 당신의 헌신이 얼마나 컸는지가 더욱 와닿지만요.',
    );
    await flash.say_and_wait('그러니 아무리 미미한 보답이라도 좋으니.');
    await era.printAndWait(`${flash.sex}는 자신의 신념을 강조하듯 말투에 힘을 주었다.`);
    await flash.say_and_wait(
      '보답으로서 저 역시 당신을 돕고 싶습니다. 당신의 꿈을 제가 이루어드리고 싶어요.',
    );
    era.printButton('「그게 이전에 내 꿈을 물어봤던 이유였어?」', 1);
    await era.input();
    await flash.say_and_wait('네, 맞습니다.');
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(`에이신 플래시의 이 확고한 태도에 ${your_name}은(는) 침묵에 빠졌다.`);
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「끊임없이 영광을 쟁취해서, 저의 부모님이…… 저를 자랑스러워하게 해드리고 싶습니다.」）',
    ]);
    await era.printAndWait(
      `${your_name}은(는) 모든 것의 시작이었던 그 선발 레이스에서 ${flash.sex}가 ${your_name}에게 했던 말을 다시 한번 떠올렸다.`,
    );
    await era.printAndWait(
      `처음 ${your_name}이(가) ${flash.sex}의 담당 트레이너가 되기로 한 것은 단순히 ${flash.sex}의 적극적인 부탁 때문이었다.`,
    );
    await me.print_and_wait('（「정말 기쁠 것 같아.」）');
    await me.print_and_wait('（「너의 달리는 모습을 계속 지켜볼 수 있을 테니까.」）');
    await era.printAndWait(
      `하지만 시간이 흘러 함께 지내며, ${your_name}은(는) 서서히 ${flash.sex}의 본질적인 매력에 끌리게 되었다.`,
    );
    await era.printAndWait(
      '레이스 시작 전 어떤 상대 앞에서도 두려움 없는 용기, 레이스 도중 미스터 시비마저 감탄하게 만든 승부욕, 그리고 레이스 후 결과가 어떠하든 냉정하게 대처하며 정진하는 정신까지.',
    );
    await era.printAndWait('이런 에이신 플래시만의 정신은 실로 매혹적이었다.');
    await era.printAndWait(
      `그렇기에 합숙소에서 돌아오는 차 안에서 ${flash.sex}가 ${your_name}에게 만약 자신이 일본에 남는다면 어떻겠냐고 물었을 때, ${your_name}은(는) 숨김없이 자신의 진심을 털어놓았던 것이다.`,
    );
    era.printButton('「나의 꿈이라 한다면.」', 1);
    await era.input();
    await era.printAndWait('거기까지 생각이 닿자, 답은 명확해졌다.');
    await era.printAndWait(
      `${your_name}은(는) 당시 에이신 플래시의 눈동자 속에 서려 있던 깊은 일렁임이 무엇을 뜻하는지 마침내 이해했다.`,
    );
    era.printButton('「나는, 네가 계속 달리는 모습을 보고 싶어.」', 1);
    await era.input();
    await flash.say_and_wait('!!!');
    await era.printAndWait(
      `대기실 안, 이제는 미련이 없을 터였던 타국에서 온 ${flash.get_teen_sex_title()}은(는) ${your_name}의 말을 듣고 눈을 크게 떴다.`,
    );
    await flash.say_and_wait('…………');
    await flash.say_and_wait('훗…… 후훗……');
    await era.printAndWait(`잠시 침묵하던 ${flash.sex}가 갑자기 소리 내어 웃기 시작했다.`);
    await flash.say_and_wait('후후후후——');
    await flash.say_and_wait('알겠습니다. 그것이 당신의 바람이라면.');
    await era.printAndWait(
      `가슴 속 깊은 곳에서 치밀어 오른 감정을 완전히 쏟아내고 나서야 ${flash.sex}는 다시 ${your_name}을(를) 바라보았다.`,
    );
    await era.printAndWait('푸른 눈동자에는 다정함이 가득 담겨 있었다.');
    await flash.say_and_wait('그럼……');
    await flash.say_and_wait('당신의 뜻대로 하겠어요, 나의 트레이너님.');
    new FlashEduMarks().finish = 1;
  } else {
    return await super_race_end.call(
      this,
      flash,
      me,
      callname,
      hook,
      extra_flag,
    );
  }
};