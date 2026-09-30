const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    edu_marks = new AcuteEduMarks(),
    me = get_chara_talk(0);
  const temp = await select_action_in_shopping_street();
  hook.arg = temp <= 2;
  switch (temp) {
    case 0:
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 오락실에 갔다……',
      ]);
      await acute.say_and_wait([
        '어머어머~ ',
        callname,
        ', 괜찮다면 나랑 같이 펀치 기계 좀 해보지 않으련?',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '는 오른팔을 풀며 상체를 가볍게 숙이고 펀치 기계에 모든 주의를 집중했다. 평소 온화하던 ',
        acute.sex,
        '의 눈빛에 지금은 이글거리는 투지가 타오르고 있다.',
      ]);
      if (
        !edu_marks.boxing &&
        era.get('relation:100:0') >= 200 &&
        era.get('love:100') >= 50
      ) {
        edu_marks.boxing = 1;
        await era.printAndWait([
          '……등 뒤에서 몸을 숙여 한껏 치켜들어진 ',
          acute.get_colored_name(),
          '의 풍만한 엉덩이를 바라보자, 마음속에서 갑자기 사악한 생각이 피어올랐다.',
        ]);
        await era.printAndWait([
          '펀치 기계에 온전히 집중하고 있는 ',
          acute.get_colored_name(),
          '에게 살금살금 다가가, ',
          acute.sex,
          '가 펀치를 날리기 위해 풍만한 엉덩이를 치켜든 틈을 타 죄 많은 오른손을 뻗어 조용히 힘을 모았다——',
        ]);
        era.printButton('「찰싹!」', 1);
        await era.input();
        await acute.say_and_wait('히야앗~?!');
        await era.printAndWait('그것은 부끄러움과 모종의 흥분감이 섞인 떨리는 목소리였다.');
        await era.printAndWait([
          '평소라면 애어른 같던 ',
          acute.get_colored_name(),
          '가 이런 ',
          acute.get_child_sex_title(),
          '같은 목소리를 낼 거라고는 상상조차 할 수 없었을 것이다.',
        ]);
        await era.printAndWait(
          '풍만한 엉덩이의 그 탐스럽고도 파르르 떨리던 촉감이 여전히 생생하여 도저히 잊을 수가 없었다. 만족감과 죄악감이 뒤섞인 가학심에 가슴 속에서 가라앉기 힘든 두근거림이 시작되는 듯했다.',
        );
        await era.printAndWait([
          '하지만, 그 감동이 아직 마음속에 남아있을 때, ',
          acute.get_colored_name(),
          '의 쏘아질 듯 모여있던 주먹이 소리 없이 발사되었다.',
        ]);
        await era.printAndWait('콰아앙!!!!!!!');
        await era.printAndWait('그것은 엉덩이를 때렸던 소리보다 훨씬 더 거대한 굉음이었다.');
        await era.printAndWait(
          '기계 팔은 이미 비틀어졌고, 액정 화면은 산산조각이 났으며, 펀치 기계에서는 타는 냄새를 풍기는 짙은 흰 연기가 피어오르고 있었다.',
        );
        await era.printAndWait('……어라?');
        await era.printAndWait([
          acute.get_colored_name(),
          '의 펀치력이…… 원래 이렇게 셌던가?',
        ]);
        await era.printAndWait(
          '예전에 오락실에 왔을 때는 분명 트레센 학원에서도 중상위권 정도였고, 인간 체육 특기생들도 특별히 노력하면 낼 수 있는 수준이었을 텐데?',
        );
        await era.printAndWait([
          '일격에 펀치 기계를 박살냈다고? 어? 설마 ',
          acute.get_colored_name(),
          '는 지금까지 실력을 숨기고 있었던 건가……',
        ]);
        await acute.say_and_wait('우으~ 으응——!');
        await era.printAndWait([
          '한 손으로 자신의 풍만한 엉덩이를 어루만지며 ',
          acute.get_colored_name(),
          '는 천천히 고개를 돌렸다. 눈물이 맺혔지만 울음기는 없는 눈빛 속에는, 부끄러움인지 혐오감인지 알 수 없는 복잡한 감정이 섞여 있었다.',
        ]);
        await era.printAndWait([
          acute.sex,
          '는 입술을 삐죽 내밀었고, 볼에는 바람이 잔뜩 들어갔다. 이것은 ',
          acute.sex,
          '가 가장 활기차 보이며, 또래처럼 귀여워 보이는 순간이었다.',
        ]);
        await era.printAndWait('——천천히 쥐어 들어 올려지는 저 오른손 주먹만 없었다면 말이다.');
        era.drawLine();
        await era.printAndWait([
          '어쨌든, 그 후 설교의 형태로나마 간신히 ',
          acute.get_colored_name(),
          '의 용서를 구했다.',
        ]);
        await era.printAndWait([
          '하지만 그날부터 트레이닝을 할 때면, 어쩐지 ',
          acute.get_colored_name(),
          '가 때때로 ',
          me.get_colored_name(),
          '에게 기묘한 시선을 보내오는 것 같은 기분이 들었다.',
        ]);
        await era.printAndWait([
          '……아마도 ',
          me.get_colored_name(),
          '의 착각일 것이다.',
        ]);
        begin_and_init_ero(0, 100);
        await quick_make_love(
          new EroParticipant(0, part_enum.hit),
          new EroParticipant(100, part_enum.anal, 0.5),
          false,
        );
        end_ero_and_train();
        hook.override = true;
        era.println();
        get_attr_and_print_in_event(100, [0, 0, 0, 10], 0, undefined, true);
        sys_like_chara(100, 0, 20);
        add_jewel_reward(100, '피학쾌감', 100);
        await era.waitAnyKey();
      } else {
        await era.printAndWait([
          '……어쩐지 ',
          acute.get_colored_name(),
          '의 다른 이면을 본 것 같다.',
        ]);
      }
      break;
    case 1:
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 상점가에서 주최한 경품 추첨 행사에 참가했다……',
      ]);
      await acute.say_and_wait('신선한 오독오독 당근이 뽑히면 참 좋겠구먼~');
      await era.printAndWait('데굴데굴데굴데굴……');
      await era.printAndWait('뿅~');
      switch (get_random_value(0, 3 + !era.get('item:투혼주입채찍（S용）'))) {
        case 0:
          await era.printAndWait('상점가 경품 【티슈 한 갑】을 획득했다!');
          await acute.say_and_wait([
            '어머어머~ ',
            callname,
            '이 밤에 쓸 일이 있을 것 같구먼~',
          ]);
          await me.say_and_wait('………………');
          await era.printAndWait('아니아니아니! 안 쓸 거거든!?');
          break;
        case 1:
          await era.printAndWait('상점가 경품 【평범한 휴지】를 획득했다!');
          await acute.say_and_wait('평범한 휴지라…… 음식 밑에 깔개로 쓰면 되겠구먼~');
          await era.printAndWait([
            '비록 가장 낮은 등급의 상품이었지만, ',
            acute.get_colored_name(),
            '는 여전히 기분 좋은 얼굴로 점원의 손에서 휴지를 건네받았다——',
          ]);
          break;
        case 2:
          await era.printAndWait('상점가 경품 【당근】을 획득했다!');
          await acute.say_and_wait('어머? 추첨에서 진짜로 오독오독 당근이 나올 줄이야~');
          await era.printAndWait([
            acute.get_colored_name(),
            '의 얼굴에 기쁨의 미소가 번졌다——',
          ]);
          break;
        case 3:
          await era.printAndWait('상점가 경품 【당근 산더미】를 획득했다!');
          await acute.say_and_wait(
            '하나, 둘, 셋…… 어머나, 이 정도면 일주일 치 당근말랭이는 거뜬히 만들 수 있겠구먼.',
          );
          await acute.say_and_wait([
            '당근말랭이가 다 만들어지면, ',
            callname,
            ', 트레센에서 다 함께 나눠 먹도록 할까?',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            '가 고개를 돌리자, 온화한 미소 속에서 부처님의 후광이 비치는 듯했다——',
          ]);
          break;
        case 4:
          await era.printAndWait('상점가 경품 【투혼 주입 채찍 (S용)】을 획득했다!');
          await era.printAndWait(
            '어이어이어이! 전연령이 이용하는 상점가 경품 추첨 행사에 미성년자 관람 불가 물건을 넣어둔 사람이 대체 누구야!?',
          );
          await era.printAndWait('이런 건 아무리 봐도 성인 거리의 추첨기에나 있어야 할——');
          await acute.say_and_wait('어머나, 참 멋들어진 구절편이구먼~');
          await era.printAndWait([
            '아무래도 용도를 단단히 오해한 모양이다. 투혼 주입 채찍(S용)을 건네받은 ',
            acute.get_colored_name(),
            '의 두 눈이 반짝였다……',
          ]);
          await acute.say_and_wait([
            '음…… 왠지 ',
            callname,
            '은 이런 도구를 아주 능숙하게 다룰 것 같은 느낌이 드네——',
          ]);
          era.printButton(
            '「하야카와'+
              acute.get_adult_sex_title() +
              '에게 찍힐 만한 말은 부디 그만둬...」',
            1,
          );
          await era.input();
          await acute.say_and_wait([
            '으음? 왜 ',
            {
              color: get_chara_color(301),
              content: `하야카와 ${acute.get_adult_sex_title()}`,
              fontWeight: 'bold',
            },
            '에게 찍힌다는 겐지?',
          ]);
          era.printButton('「아, 그건 말이지……」', 1);
          await era.input();
          await era.printAndWait('………………');
          await era.printAndWait([
            '일단은 「왜 ',
            {
              color: get_chara_color(301),
              content: `하야카와 ${acute.get_adult_sex_title()}`,
              fontWeight: 'bold',
            },
            '에게 찍히는지」에 대한 설명 없이 대충 얼버무리고 넘어갔다.',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            '의 손에서 회수한 투혼 주입 채찍(S용)은 일단 트레이닝실 창고 구석, 거미줄이 쳐진 후미진 곳에 박아두었다.',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait([
            '그 후 ',
            acute.get_colored_name(),
            '가 투혼 주입 채찍(S용)의 올바른 용도를 알고 나서 「대활약」하게 되는, 맵고 뜨거우면서도 분홍빛 탐스러운 엉덩이가 뒤섞인 이야기는 훗날의 일이다——',
          ]);
          era.set('item:투혼주입채찍（S용）', 1);
      }
      break;
    case 2:
      if (Math.random() > 0.5) {
        await acute.say_and_wait('시시각각 조여오는~ 제왕~은 바빌론의 군단~');
        await era.printAndWait(
          '연륜이 묻어나는 노래다. 왠지 어느 특촬물의 주제가 같은데?',
        );
        await era.printAndWait([
          '눈을 감으면, 오토바이를 탄 ',
          acute.get_colored_name(),
          '가 무언가를 뒤쫓는 모습이 느껴진다——',
        ]);
      } else {
        await acute.say_and_wait('노려오는~ 어둠의 그림자~ 세 여신의 평화를 수호하네~');
        await era.printAndWait(
          '소년의 감성이 느껴지는 노래다. 말린 무를 곁들여 감상하기 딱 좋다.',
        );
        await era.printAndWait([
          '눈을 감으면, 허리에 손을 얹고 난간 위에 서 있는 ',
          acute.get_colored_name(),
          '의 모습이 보이는 것만 같다——',
        ]);
        await era.printAndWait('……잠깐! 진짜로 올라가지는 말고!');
      }
      break;
    case 3:
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 영화를 보러 갔다……',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '선천적인 장애를 안고 태어난 ',
          acute.get_uma_sex_title(),
          '가 어떻게 불굴의 의지로 칠전팔기의 투쟁 끝에 세 여신의 가호를 받아, 수많은 레이스에서 기적을 만들어냈는가를 그린 이야기다——',
        ]);
        await acute.say_and_wait([
          '음…… 참으로 뜨거운 이야기구먼, ',
          callname,
          '—— 돌아가면 추가 트레이닝을 좀 더 할 수 있겠어?',
        ]);
        await era.printAndWait([
          '아무래도 ',
          acute.get_colored_name(),
          '의 열정에 불을 지핀 모양이다……',
        ]);
      } else {
        await era.printAndWait([
          '서른 즈음의 ',
          acute.get_uma_sex_title(),
          '가 젊은 시절 세상을 떠난 반려 트레이너와 함께 세계 일주를 하려던 꿈을 이루기 위해, 여행길에 우연히 만나 동행하게 된 간사이 출신 꼬마 ',
          acute.get_uma_sex_title(),
          '와 함께 전 세계를 뛰어다니는 전설적인 여정을 그린 이야기다——',
        ]);
        await acute.say_and_wait(
          '음…… 이건 참으로 낭만적인 이야기구먼~ 어머어머, 기회만 된다면 나도 이런 여행을 한 번 떠나보고 싶네——',
        );
        await era.printAndWait([
          '그렇게 감탄을 내뱉은 뒤, 영화 상영이 끝날 때까지 어쩐지 계속해서 ',
          acute.get_colored_name(),
          '의 시선이 느껴졌다……',
        ]);
      }
  }
};