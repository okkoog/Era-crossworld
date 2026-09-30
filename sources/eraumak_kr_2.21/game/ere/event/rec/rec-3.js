/**
 * @file 토카이 테이오 - 招募
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }
    const teio = get_chara_talk(3),
      me = get_chara_talk(0);
    await era.printAndWait(
      '새파란 하늘은 마치 부드러운 비단 띠 같고, 그 사이사이에 곱슬거리는 구름 문양이 수놓아져 있다. 오렌지빛 태양은 그 한가운데서 빛나며 온 세상에 따스함과 광명을 뿌려준다.',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 햇살을 듬뿍 받으며 잔디 위를 걷고 있다. 싱그러운 공기를 깊게 들이마시고, 후우— 내뱉으니 상쾌함이 온몸을 감싼다.',
    ]);
    era.println();
    await era.printAndWait([me.get_colored_name(), '의 기분은 날씨만큼이나 맑고 화창하다.']);
    era.println();
    await era.printAndWait([
      '',
      get_trainer_title(),
      '로서, ',
      me.get_colored_name(),
      '은(는) 오늘도 트레센 학원으로 향하며, ',
      teio.get_uma_sex_title(),
      '들의 꿈을 실현해주기 위한 길을 걷고 있다.',
    ]);
    await era.printAndWait([
      '업무가 결코 쉽다고는 할 수 없지만, 적지 않은 물질적 수입(의식주 제공 및 특수 통화인 【우마코인】으로 결제되는 고액의 월급)과 정신적 자산(',
      teio.get_uma_sex_title(),
      ' 학생들의 성장과 진보를 돕고, ',
      teio.sex,
      '들이 꿈을 위해 분투한 끝에 짓는 진심 어린 미소를 보는 것)은 모든 부정적인 감정을 씻어내기에 충분하다.',
    ]);
    await me.say_and_wait(
      '오늘 오후에도 데뷔전이 하나 있었지. 음, 가서 살펴보고 담당할 인재를 한번 물색해 볼까……',
      true,
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 생각에 잠겨 있던 그때, 갑자기 온 세상이 정적에 휩싸인 듯 고요해졌다.',
    ]);
    await era.printAndWait([
      '나뭇잎은 부드럽고 느릿하게 흔들리고, 주변 공기는 끈적하게 응고된 듯한 기묘한 감각. 무슨 일이 일어난 걸까? ',
      me.get_colored_name(),
      '이(가) 의아한 표정으로 앞에 있던 한 행인을 바라보자, ',
      teio.sex,
      '의 입이 서서히 벌어지고 있었다……',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait('앗!');
    era.println();
    await era.printAndWait([
      '외침과 동시에 날카로운 바람이 ',
      me.get_colored_name(),
      '의 등 뒤를 덮쳐왔다.',
    ]);
    await era.printAndWait([
      '하지만 트레이너로서의 직감 덕분일까, ',
      me.get_colored_name(),
      '의 몸은 의식이 반응하기도 전에 먼저 행동했다. 허리를 숙이고 무릎을 굽혀 중심을 낮췄다. 하지만 예상했던 충돌은 일어나지 않았고, 아래에서 위를 올려다본 ',
      me.get_colored_name(),
      '의 시야에 작고 흐릿한 형체 하나가 본래 ',
      me.get_colored_name(),
      '의 머리가 있던 위치를 가볍게 뛰어넘어…… 저 위쪽 나뭇가지 사이로 날아 들어가는 것이 포착되었다.',
    ]);
    era.println();
    await era.printAndWait([
      '이어서 나뭇잎이 바스락거리는 소리와 함께, 희고 가느다란 작은 손 하나가 초록 잎 사이에서 쑥 나오더니 알록달록한 헬륨 풍선을 낚아챘다. ',
      me.get_colored_name(),
      '이(가) 막 몸을 일으키자, 옆에서 잘그락거리는 발소리가 들려오더니 한 어린 소녀가 나무 아래로 다가왔다.',
    ]);
    await era.printAndWait([
      '소녀 「와아, 고마워요 ',
      teio.get_bigger_sibling_sex_title(),
      '! 방금 그 점프, 정말 멋졌어요!」',
    ]);
    await teio.say_as_unknown_and_wait(
      '흥흥, 이 몸을 【무적의 테이오 님】이라고 불러줘! 자, 여기 네 물건. 꽉 잡고 있어, 또 놓치지 말고!',
    );
    await era.printAndWait([
      '활기 넘치는 ',
      teio.get_teen_sex_title(),
      '의 목소리가 위쪽에서 들려왔다. ',
      me.get_colored_name(),
      '이(가) 고개를 들어보니, 작고 귀여운 ',
      teio.get_uma_sex_title(),
      '한 명이 굵은 나뭇가지 위에 걸터앉아 아래로 풍선을 건네주고 있었다. 하지만 ',
      teio.sex,
      '와 소녀의 손 사이에는 아직 약간의 높이 차이가 있었다……',
    ]);
    era.printButton('도와준다', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 망설임 없이 손을 보태어 ',
      teio.get_uma_sex_title(),
      '의 손에 들린 풍선을 받아 옆에 있던 소녀에게 건네주었다. 소녀는 고맙다는 인사를 남겼다.',
    ]);
    await era.printAndWait('소녀 「테이오 님! 한 번만 더 뛰어주시면 안 돼요?」');
    await era.printAndWait([
      '아무래도 소녀는 저 ',
      teio.get_uma_sex_title(),
      '가 나무에서 멋지게 뛰어내리는 모습을 보고 싶은 모양이다. ',
      me.get_colored_name(),
      '은(는) 웃음을 지으며 자리를 비켜주려 했다. 어쩌면 오늘 멋진 「슈퍼 히어로 랜딩」을 보게 될지도 모른다는 기대를 품고.',
    ]);
    await era.printAndWait([
      '그런데 이상하게도, 나무 위의 ',
      teio.get_uma_sex_title(),
      '는 자신의 어린 팬의 요청에 응하지 않았다.',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      '음, 그게, 테이오 스텝은 준비 시간이 좀 필요해서 당장은…… 아! 저기 엄마가 부르신다, 얼른 가봐! 걱정하시겠어!',
    );
    era.println();
    await era.printAndWait([
      '소녀는 조금 의아해하는 표정이었지만, 그때 ',
      me.get_colored_name(),
      '은(는) 겹쳐진 나뭇잎 사이로 드러난 매끈한 맨살을 발견하고는 무슨 상황인지 눈치챘다.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 몸을 살짝 뒤로 기대며 거들어 주었다.']);
    era.println();
    era.printButton(
      `「꼬마 아가씨, ${teio.get_bigger_sibling_sex_title()} 말을 듣는 게 좋겠어. 엄마랑 오래 떨어져 있으면 걱정하실 거야. 봐, 저기서 손을 흔들고 계시잖니!」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '소녀는 고개를 갸우뚱거리면서도 엄마가 있는 방향으로 떠나갔다. 순식간에 이곳에는 ',
      me.get_colored_name(),
      '과(와) 나무 위의 ',
      teio.get_teen_sex_title(),
      '만이 남게 되었다.',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      '저기…… 당신, 트레센 학원의 트레이너 선생님이시죠! 부탁 하나만 들어주실 수 있을까요!',
    );
    await era.printAndWait([
      '아무래도 ',
      teio.sex,
      '는 ',
      me.get_colored_name(),
      '의 가슴에 달린 휘장을 알아본 모양이다.',
    ]);
    era.println();
    era.printButton('「물론이지」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 고개를 끄덕였다. ',
      teio.sex,
      '는 기쁘게 웃으며 몸을 쭉 펴더니……',
    ]);
    era.println();
    era.printButton('곧장 나무 아래로 달려가 두 손을 뻗어 받아준다 (애정도 +1)', 1);
    era.printButton(
      `방금 전까지 자신이 몸으로 가려주고 있던, ${teio.get_uma_sex_title()}가 벗어 던진 샌들을 주워 나무 아래에 놓아준다 (호감도 +5)`,
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 재빨리 ',
        teio.sex,
        '의 발치로 달려가 두 손을 뻗었다. ',
        teio.sex,
        '는 깜짝 놀란 듯 얼굴을 붉혔으나, 이내 스르륵 미끄러지듯 내려와 ',
        me.get_colored_name(),
        '의 어깨를 짚었다. 그리고 희고 깨끗한 두 발이 정확하게 ',
        me.get_colored_name(),
        '의 손바닥 위로 안착했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 손바닥 안쪽에서 ',
        teio.get_teen_sex_title(),
        '의 부드럽고 매끄러운 발바닥의 감촉을 느꼈다—— 이것이 ',
        teio.get_uma_sex_title(),
        '의 재능인가. 강도 높은 훈련과 운동으로 단련된 굳건함을 갖추면서도 피부는 여전히 섬세하다니. 근육이 수축하자, ',
        me.get_colored_name(),
        ' 은(는) ',
        teio.sex,
        '의 발바닥 아치가 미세하게 들리고 분홍빛 발가락이 불안하게 꼼지락거리는 것을 눈치챘다. ',
        me.get_colored_name(),
        '은(는) 정신을 가다듬고 ',
        teio.get_uma_sex_title(),
        '의 귀여운 발에서 시선을 돌려, 천천히 그리고 안정적으로 ',
        teio.sex,
        '를 옆에 있는 벤치에 앉혔다. 그리고 뒤를 돌아 앉아 ',
        teio.get_teen_sex_title(),
        '가 쑥스러운 듯 신발을 신는 모습을 못 본 척해주었다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 소녀에게 들키지 않으려고 몸 안쪽으로 가려두었던 샌들을 집어 나무 곁에 놓아주었다. 그리고 ',
        teio.get_uma_sex_title(),
        '가 뛰어내리는 것을 지켜보며 언제든 도와줄 수 있도록 팔을 벌려 대비했지만, ',
        teio.sex,
        '는 ',
        me.get_colored_name(),
        '에게 그럴 기회를 주지 않았다.',
      ]);
      await era.printAndWait([
        teio.get_teen_sex_title(),
        '는 가볍게 뛰어내려 신발 위에 정확하고 안정적으로 착지했다. ',
        teio.sex,
        '는 고개를 들어 ',
        me.get_colored_name(),
        '에게 태양보다 찬란한 미소를 지어 보였다.',
      ]);
      await era.printAndWait([
        '그 모습은 ',
        teio.sex,
        '가 입고 있는 아이 같은 아동복과 묘하게 잘 어우러졌다.',
      ]);
    }
    await era.printAndWait(['신발을 다 신은 뒤, ', teio.sex, '의 매력적인 목소리가 다시 들려왔다.']);
    era.println();
    await teio.say_as_unknown_and_wait(
      '고마워! 번거롭게 해서 미안해! 방금 뛰어오를 때 편하게 하려고 신발을 벗어 던졌는데, 결과적으로 이런 상황이 돼버려서…… 무적의 테이오 님도 가끔은 실수할 때가 있다니까!',
    );
    era.println();
    era.printButton('「테이오……?」', 1);
    await era.input();

    await teio.say_as_unknown_and_wait([
      '맞아! 내 이름은 토카이 테이오! 머지않아 전설이 될 ',
      teio.get_uma_sex_title(),
      '야! 마침 오늘 오후에 레이스를 뛸 예정이니까, 트레이너 선생님도 시간 되면 꼭 보러 와줘! 지금은 좀 바빠서 이만 실례할게. 오후에 학원에서 봐!',
    ]);
    era.println();
    await era.printAndWait([
      '말을 마치자마자 ',
      teio.sex,
      '는 가벼운 발걸음으로 달려 나갔다. ',
      me.get_colored_name(),
      '은(는) 멀어지는 ',
      teio.sex,
      '의 뒷모습을 보며 웃으며 손을 흔들어 주었다.',
    ]);
    era.drawLine({ content: '오후, 트레센 학원' });
    await era.printAndWait('선발 레이스 2000m', { align: 'center' });
    await era.printAndWait([
      '학원 운동장에는 이미 많은 사람이 모여 있었다. 이번에는 예상을 뛰어넘는 인파인걸. ',
      me.get_colored_name(),
      '은(는) 상대적으로 한적한 곳에 앉아 생각했다. 저들은 몇몇 유망한 신인을 가로채기 위해 모인 걸까?',
    ]);
    era.println();
    await era.printAndWait([
      '머릿속에 ',
      teio.get_colored_name(),
      '라는 이름의 ',
      teio.get_teen_sex_title(),
      '의 모습이 떠오른다. 가벼운 발걸음 속에 숨겨진 강력한 폭발력. 팽팽하게 조여진 다리 근육이 수축과 이완을 반복하며, 다른 이들과는 차별화된 독특한 스텝으로 힘을 발끝에 전달한다. 지면을 박차고 튀어 오르듯 나아가는 기세는 타인의 추종을 불허하는 압도적인 속도를 낸다……',
    ]);
    era.println();
    await era.printAndWait([
      '머릿속 환상은 곧 눈앞의 현실과 겹쳐졌다. ',
      me.get_colored_name(),
      '의 시야에 청백색 섬광이 경기장을 누비며 자신의 색깔을 마음껏 뽐내는 것이 보였다. 다른 라이벌들을 저 멀리 따돌리는 그 모습. 승리는 반드시 ',
      teio.sex,
      '의 것이 될 터였다—— 이 광경을 지켜보는 모든 이가 그렇게 확신하고 있을 것이다.',
    ]);
    era.println();
    await era.printAndWait([
      teio.sex,
      '는 마치 당연하다는 듯 자신의 존재를 세상에 선포하며 승리를 쟁취했다. ',
      me.get_colored_name(),
      '은(는) 전광판에 크게 박힌 「1착」을 보며 자신도 모르게 미소를 지었고, 자리에서 일어나 아래로 향했다.',
    ]);
    era.println();
    await teio.say_and_wait('음……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 인파를 뚫고 앞으로 나아갔다. 천재적인 ',
      teio.get_teen_sex_title(),
      '의 첫 등장은 누구라도 매료되기에 충분했기에, 이런 혼잡함은 예상한 바였다. 파트너를 갈망하는 트레이너들이 이곳을 빽빽하게 에워싸고 있었다. 푸른 하늘과 흰 구름 같은 배색의 테이오는 마치 작은 태양 같았고, 수많은 해바라기가 그를 향해 고개를 내밀고 있었다. 꼬리를 살랑거리는 ',
      teio.sex,
      '는 무척 흥분한 듯 보였지만, ',
      me.get_colored_name(),
      '은(는) ',
      teio.sex,
      '의 눈동자 밑에 깔린 약간의 곤혹스러움 또한 포착했다. 그때, 마치 무언가에 이끌리듯 ',
      teio.sex,
      '가 이쪽으로 고개를 돌렸고, ',
      me.get_colored_name(),
      '의 시선과 마주쳤다.',
    ]);
    era.println();
    await era.printAndWait('어떻게 할까?');
    era.println();
    era.printButton('테이오의 이름을 크게 부르며, 담당 트레이너가 되겠다고 선언한다', 1);
    era.printButton('역시 그만두자……', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신이 ',
        teio.get_colored_name(),
        '의 이름을 크게 외치는 소리를 들었다. ',
        teio.sex,
        '의 눈이 반짝이더니, 기쁨을 가득 담아 ',
        me.get_colored_name(),
        '에게 화답했다. 인파가 눈치껏 길을 터주었고, 망설임 없이 ',
        me.get_colored_name(),
        '은(는) 손을 뻗어 계약 증명서를 꺼냈다. 다른 한 손으로는 어느샌가 ',
        teio.get_teen_sex_title(),
        '의 어깨 위, 바람과 땀에 살짝 구겨진 옷자락을 매만져 펴주고 있었다. ',
        teio.get_teen_sex_title(),
        '의 얼굴에는 격렬한 운동 후의 홍조가 가시지 않은 상태였다. ',
        teio.sex,
        '는 환하게 웃으며 자신의 이름을 서명했고, ',
        me.get_colored_name(),
        '이(가) ',
        teio.sex,
        '의 트레이너임을 인정했다.',
      ]);
      era.println();
      await era.printAndWait([me.get_couple_title(), '의 이야기는 여기서부터 시작된다.']);
      era.add('relation:3:0', (ret === 2) * 5);
      era.add('love:3', ret === 1);
      era.set('cflag:3:모집상태', recruit_flags.yes);
    } else {
      await era.printAndWait([
        '이 아이는…… 어쩌면 나에겐 맞지 않을지도 몰라. 너무 도전적인 상대일지도. ',
        me.get_colored_name(),
        '은(는) 부드럽지만 단호하게 고개를 저었고, 조용히 인파 속을 빠져나왔다.',
      ]);
    }
  }
};