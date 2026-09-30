const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum } = require('#/data/race/race-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async race_end(gold_ship, me, callname, hook, extra_flag) {
    const edu_weeks = era.get('cflag:7:육성턴수합산');
    if (extra_flag.rank === 1) {
      if (
        extra_flag.race === race_enum.begin_race &&
        edu_weeks < 48 &&
        extra_flag.rank === 1
      ) {
        // 新秀年出道战
        await print_event_name(
          [{ color: chara_colors[1], content: '일단은 승리' }],
          gold_ship,
        );

        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await era.printAndWait(
          '앞으로의 레이스도 기대되며, 더 연습에 전념하여 앞으로의 목표를 세울 때다.',
        );
        era.println();

        era.printButton('「수고했어!」', 1);
        await era.input();

        await era.printAndWait(
          `${gold_ship.name}은 곧바로 두 팔을 높이 치켜 올리고 의미불명의 주문을 외치며 오늘의 자신이 있는 것은 모두 콩의 단백질 덕분이라고 말했다.`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '오늘도 열심히 두유 만들러 가야지! 두 유 조 아!',
        );
        era.println();

        extra_flag.attr_change = new Array(5).fill(0);
        gacha(Object.values(attr_enum), 3).forEach(
          (e) => (extra_flag.attr_change[e] = 3),
        );
        extra_flag.pt_change = 30;
      } else if (extra_flag.race === race_enum.hope_sta) {
        // 新秀年希望锦标
        await print_event_name(
          [{ color: chara_colors[1], content: '에덴으로 가는 길' }],
          gold_ship,
        );

        await era.printAndWait('무사히 완주했다!');
        era.println();
        await era.printAndWait(
          '이대로라면 내년 클래식 레이스에서도 골드 쉽의 활약을 볼 수 있을 것 같다.',
        );
        era.println();

        era.printButton('「수고했어!」', 1);
        await era.input();

        await gold_ship.say_and_wait(
          '이제 구운 가오리 지느러미조차 내 향기를 부러워하겠네——와서 한번 맡아볼래?',
        );
        era.println();
        await era.printAndWait(
          `땀에 흠뻑 젖은 ${gold_ship.name}이 다가와, ${me.name}에게 자신의 땀 냄새를 맡게 한다……`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '어때? 육지를 제패한 데 이어 바다까지 내 손에 넣었네~',
        );
        era.println();

        extra_flag.relation_change = 0;
        extra_flag.love_change = 0;

        era.printButton('「그래, 너무 좋네……」（애정+5）', 1);
        era.printButton('「하지만 이건 육상 레이스잖아……」（호감+10）', 2);
        if ((await era.input()) === 1) {
          extra_flag.love_change += 5;
        } else {
          extra_flag.relation_change += 10;
        }

        await era.printAndWait([
          gold_ship.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '을(를) 통로 벽에 몰아붙이고 ',
          me.get_colored_name(),
          '의 몸에 기대어 왔다. ',
          gold_ship.get_colored_name(),
          '은 마치 언제라도 쓰러질 것 처럼 몸의 힘을 풀었고, ',
          me.get_colored_name(),
          '은(는) 어쩔 수 없이...',
        ]);
        era.println();

        era.printButton('（골드 쉽을 감싸 안아 허리를 받쳐준다）（애정+5）', 1);
        era.printButton('（어깨로 골드 쉽을 받쳐준다）（호감+10）', 2);
        if ((await era.input()) === 1) {
          extra_flag.love_change += 5;
        } else {
          extra_flag.relation_change += 10;
        }

        await gold_ship.say_and_wait(
          `이제 트윙클 시리즈도 이것으로 끝이구나. 이${
            gold_ship.sex === '그녀' ? ' 아가씨' : ' 아저씨'
          }의 투지도 더 이상 보여 줄 수 없겠네……`,
        );
        era.println();

        era.printButton(
          '「아니 아니 아니, 무슨 소리야. 이제부터가 진짜 하이라이트인 클래식 시리즈라고!」',
          1,
        );
        await era.input();

        await era.printAndWait(
          `그렇게 해서 ${me.name}과(와) ${gold_ship.name}은 천천히 휴게실로 돌아갔다...`,
        );
        era.println();

        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      } else if (extra_flag.race === race_enum.sats_sho) {
        // 经典年皋月赏
        await print_event_name(
          [{ color: chara_colors[1], content: '4월의 원수' }],
          gold_ship,
        );
        await gold_ship.say_and_wait('조아——! 내가 5월의 복수를 했다!');
        era.println();
        await era.printAndWait(
          `이유는 모르겠지만, ${gold_ship.sex}는 분명 4월에 열리는데도 사츠키(5월)라고 불리는 사츠키상에 불만을 품고, 결국 사츠키상과 맞서게 되었다.`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '내년에도 사츠키상에 돌아와 5월을 위해 다시 복수하겠어!',
        );
        era.println();

        era.printButton('「사츠키상은 클래식 레이스라, 한 사람이 평생 딱 한 번만 달릴 수 있는 거야!」', 1);
        await era.input();

        await era.printAndWait(
          `하지만 ${me.name}의 말이 전해지기 전에, ${gold_ship.name}은 이미 멀리 달아나 버렸다.`,
        );
        era.println();

        extra_flag.attr_change = [0, 0, 3, 0, 0];
      } else if (extra_flag.race === race_enum.kiku_sho) {
        const flash = get_chara_talk(37);
        // 经典年菊花赏
        await print_event_name(
          [{ color: chara_colors[1], content: '에덴으로 가는 힌트' }],
          gold_ship,
        );
        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await era.printAndWait('앞으로의 레이스도 더욱 기대된다!');
        era.println();
        await gold_ship.say_and_wait('아~ 끝났다 끝났다~');
        era.println();
        await era.printAndWait(
          `${gold_ship.name}은 기진맥진한 자세를 취하며 한숨을 내쉬었다.`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '좋아, 드디어 한숨 돌릴 수 있겠네. 앞으로는 위닝 라이브에서 채소를 심자. 내 천재적인 능력이 있다면 위닝 라이브를 정말 풍요롭게 만들 수 있을 거야.',
        );
        era.println();

        era.printButton('「잠깐만 기다려.」', 1);
        await era.input();

        await era.printAndWait(
          `하지만 ${gold_ship.name}은 앞만 보고 나아갈 법한 기세로 ${me.name}의 말을 듣지 않고 점점 멀어져 간다——`,
        );
        era.println();
        await flash.say_and_wait(
          `——정말 유감스럽군요, ${gold_ship.name} 씨.`,
        );
        era.println();
        await era.printAndWait(
          `${gold_ship.name}의 귀가 쫑긋하며, 뒤를 돌아 이쪽을 바라보았다. 그 진지하고 꼼꼼한 우마무스메 「${flash.name}」가 이동 통로 벽에 기대어 서 있었고, 얼굴에는 미소를 짓고 있었다.`,
        );
        era.println();
        await flash.say_and_wait('보아하니 당신의 닻도 둔해졌나 보군요.');
        era.println();

        era.printButton(
          era.get('cflag:37:모집상태') === recruit_flags.yes
            ? `「아, ${sys_get_callname(0, 37)}(이)구나.」`
            : `「아, ${flash.name} 인가?」`,
          1,
        );
        await era.input();

        await flash.say_and_wait('저는 『그분』의 부탁을 받고, 당신에게 칙령을 전하러 왔습니다.');
        await flash.say_and_wait(
          '하지만 당신이 급류 속에서 물러나려 한다면, 그럴 필요도 없겠군요.',
        );
        era.println();

        era.printButton('「무슨 칙령?」', 1);
        await era.input();

        await flash.say_and_wait('여러분이 찾고 있는 『에덴』으로 가는 힌트입니다.');
        await gold_ship.say_and_wait('뭐라고——! 설마 에덴이라니!');
        await gold_ship.say_and_wait('그건 그렇고 에덴이 뭐야?');
        era.println();

        era.printButton('「어디 부동산 이름은 아니겠지.」', 1);
        await era.input();

        await flash.say_and_wait('……에덴이란 바로, 우마무스메들의 이상향입니다.');
        era.println();

        await era.printAndWait(
          `${me.name}은(는) ${flash.name}가 「지금 내가 뭐 하는 걸까」라고 중얼거리는 소리를 들었지만, 못 들은 척했다..`,
        );
        era.println();

        await gold_ship.say_and_wait('오오! 내 꿈에 나왔던 바로 그거구나!');
        await gold_ship.say_and_wait('플래시, 빨리 말해 줘!');
        era.println();

        await era.printAndWait(`${flash.name}가 가볍게 미소 지으며 고개를 저으며 말했다.`);
        era.println();

        await flash.say_and_wait('보아하니 은퇴 후 농사 짓는 생활에서 복귀할 생각이 있는 모양이군요.');
        await flash.say_and_wait('하지만 이런 중요한 정보는 그렇게 쉽게 얻을 수 있는 게 아니에요.');
        await flash.say_and_wait(
          '이 정보를 알고 싶다면, 『아리마 기념』에서 저와 한판 승부를 벌여보시겠습니까?',
        );
        era.println();

        era.printButton('「아리마 기념에서 너랑 레이스하면 되는 거야?」', 1);
        await era.input();

        await flash.say_and_wait('맞아요. 제 말에는 거짓이 없습니다!');
        era.println();

        await era.printAndWait(
          `『그분』이 도대체 누구인지 여전히 알 수는 없었지만—— 적어도 골드 쉽은 레이스에 대한 원동력이 다시 돌아온 것 같다! 고마워, ${era.get(
            'callname:0:37',
          )}!`,
        );

        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
        const flash = get_chara_talk(37);
        // 经典年有马纪念
        await print_event_name(
          [{ color: chara_colors[1], content: '단서를 수집하라' }],
          gold_ship,
        );
        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await gold_ship.say_and_wait('좋아! 수확의 시간이다!');
        era.println();

        era.printButton('「잘 달렸어!」', 1);
        await era.input();

        await era.printAndWait(
          `${flash.name}가 옆으로 다가와 ${gold_ship.name}을 칭찬했다.`,
        );
        era.println();
        await flash.say_and_wait(`역시 ${gold_ship.name} 씨군요.`);
        await gold_ship.say_and_wait('오! 플래시!');
        await flash.say_and_wait('저희 사이에 약속이 있었죠.');
        era.println();

        era.printButton('「부동산에 관한 이야기인가?」', 1);
        await era.input();

        await flash.say_and_wait('……에덴입니다.');
        await flash.say_and_wait('이것이 그분이 당신을 위해 준비한 단서입니다.');
        era.println();
        await era.printAndWait(
          `${flash.name}는 주머니에서 아직 온기가 남아 있는 편지를 꺼내 ${
            gold_ship.name
          }에게 건네주고는 떠났고, ${me.get_couple_title()}만 홀로 남게 되었다.`,
        );
        era.println();
        await gold_ship.say_and_wait('한번 봐 볼까!');
        era.println();
        await gold_ship.say_and_wait('『에덴은 가장 깊은 바다 밑에 있다……』');
        await gold_ship.say_and_wait('『에덴을 찾으려면 네 가지 단서가 필요하다……』');
        await gold_ship.say_and_wait(
          '『수많은 강적들과 싸워, 그들로부터 단서를 얻어라 by 비전서』',
        );
        era.println();

        era.printButton('「콘솔 패드로 조작하는 잠수함을 타고 가지 않는 한 괜찮겠지……」', 1); //타이타닉 잠수함 드립?
        await era.input();

        await gold_ship.say_and_wait('후후, 점점 더 가슴이 뜨거워지네!');
        await gold_ship.say_and_wait(
          '하지만 플래시가 계속 말하는 『그분』은 도대체 누구일까……?',
        );
        era.println();

        await era.printAndWait(
          `어쨌든, ${gold_ship.name}의 레이스에 대한 열정이 더욱 뜨거워진 건, 나쁘지 않은 일이다!`,
        );

        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      } else if (extra_flag.race === race_enum.tenn_spr && edu_weeks >= 96) {
        const flash = get_chara_talk(37);
        // 资深年天皇赏春
        await print_event_name(
          [{ color: chara_colors[1], content: '단서' }],
          gold_ship,
        );
        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '오호호호. 오늘도 제가 잘 달렸던가요?',
        );
        await gold_ship.say_and_wait(
          `이 ${
            era.get('cflag:7:성별') - 1 ? '소녀' : '아저씨'
          }의 아름다움은 맨손으로 성게를 뜯어먹는 것만큼이나 신선한 것이와요. 오호호호!`,
        );
        era.println();
        await era.printAndWait(
          `오늘의 ${gold_ship.name}은 마치 서브컬쳐에 나오는 아가씨 캐릭터의 스테레오타입을 모은 책 한 권 같다.`,
        );
        era.println();

        era.printButton('「그 비린내는 절대 맡고 싶지 않아.」', 1);
        await era.input();

        await flash.say_and_wait(`정말 잘했어요, ${gold_ship.name} 씨.`);
        await flash.say_and_wait('자, 이게 약속했던 첫 번째 단서예요. 여기요.');
        await gold_ship.say_and_wait('벌써 도망가 버렸네. 지난번과는 완전히 다르구만.');
        era.println();

        era.printButton('「벌써 질렸나 보네? 뭐라고 써 있는지 한번 보자.」', 1);
        await era.input();

        await gold_ship.say_and_wait('근데 단어가 하나밖에 없네.『Su』.');
        era.println();
        await era.printAndWait(
          `이전에 ${
            flash.name
          }가 ${me.get_couple_title()}에게 준 편지에는 에덴으로 가는 네 가지 단서를 모아야 한다고 적혀 있었는데, 이 『Su』라는 글자가 바로 첫 번째 단서일 것이다.`,
        );
        era.println();
        await gold_ship.say_and_wait(
          '좋아! 재미있네! 그럼 네 가지 단서를 전부 모아 보자!',
        );
        era.println();
        await era.printAndWait('골드 쉽의 레이스에 대한 열정이 점점 뜨거워지고 있다!');

        new GoldShipEduMarks().keywords++;
        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      } else if (extra_flag.race === race_enum.takz_kin && edu_weeks >= 96) {
        const flash = get_chara_talk(37),
          jordan = get_chara_talk(48);
        // 资深年宝塚纪念
        await print_event_name(
          [{ color: chara_colors[1], content: '단서' }],
          gold_ship,
        );
        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await gold_ship.say_and_wait(
          `하하하! ${jordan.name}! 내가 이겼다! 제 3부 완!`,
        );
        era.println();
        await era.printAndWait(
          `레이스가 끝난 후, ${gold_ship.name}은 승리를 자랑하며 적이자 친구인 갸루 우마무스메 ${jordan.name}에게 득의양양한 표정을 지었다.`,
        );
        era.println();
        await jordan.say_and_wait('으— 이거 기억해 둬!');
        await jordan.say_and_wait('그리고, 이거도 꼭 기억해 둬!');
        era.println();
        await era.printAndWait(
          `${jordan.name}은 ${gold_ship.name}의 손에 쪽지를 억지로 쑤셔 넣고는, 화가 난 듯이 자리를 떠났다.`,
        );
        era.println();

        era.printButton('「아, 또 에덴의 단서인가?」', 1);
        await era.input();

        await gold_ship.say_and_wait('음…… 이번에는 『an』 이라고 쓰여 있네.');
        await gold_ship.say_and_wait('전혀 알 수가 없네——!');
        era.println();
        await era.printAndWait(
          `${flash.name}뿐만 아니라, ${jordan.name}까지 연루되어 있다…… 배후에서 실을 당기는 인물은 도대체 누구일까?`,
        );

        if (
          check_aim_race(era.get('cflag:7:육성성적'), race_enum.takz_kin, 1, 1)
        ) {
          await era.printAndWait(
            `${me.get_couple_title()}이 떠나려던 그때, 옆에 있던 관중이 ${
              gold_ship.name
            }에게 손을 흔들며 소리쳤다.`,
          );
          era.println();
          await era.printAndWait('관객 A「골드 쉽 너무 대단해!」');
          await era.printAndWait('관객 B「2연패 축하해!」');
          era.println();
          await era.printAndWait(
            `예의상, ${me.get_couple_title()}도 관객들에게 손을 흔들어 화답했다`,
          );
          era.println();
          await gold_ship.say_and_wait('고마워!');
          era.println();

          era.printButton('「응원해 주셔서 감사합니다～」', 1);
          await era.input();

          await era.printAndWait(
            `그러고서 ${gold_ship.name}은 뒤를 돌아보며 ${me.name}에게 물었다`,
          );
          era.println();
          await gold_ship.say_and_wait(
            `${sys_get_callname(7, 0)}, 2연패가 무슨 뜻이야?`,
          );
          era.println();

          era.printButton('「……너 작년에 이 레이스에서 우승했잖아.」', 1);
          await era.input();

          await gold_ship.say_and_wait('정말? 그럼 나 완전 개쩌는 거 아니야?');
          era.println();

          era.printButton('「확실히 엄청 쩌네.」', 1);
          era.print('（파워+18、다른 능력치+3）', { offset: 1, width: 23 });
          era.printButton('「역사에 이름을 남길 만큼 개쩔어!」', 2);
          era.print(
            [
              '（모든 능력치+3、스킬 ',
              '【게이트 난동】',
              ', 스킬포인트+45 or 모든 능력치+8、스킬포인트+75）',
            ],
            { offset: 1, width: 23 },
          );
          if ((await era.input()) === 1) {
            extra_flag.attr_change = new Array(5).fill(3);
            extra_flag.attr_change[attr_enum.strength] += 15;
            extra_flag.pt_change = 45;
            extra_flag.motivation_change = 1;
          } else if (Math.random() < 0.7) {
            extra_flag.attr_change = new Array(5).fill(3);
            extra_flag.pt_change = 45;
            extra_flag.motivation_change = 1;
            extra_flag.skill_change = [200433];
          } else {
            await gold_ship.say_and_wait(
              '아~ 하하~ 역시 고루시짱은 칭찬만 받으면 제대로 실력을 발휘하는 아이거든~',
            );
            await gold_ship.say_and_wait('앞으로도 나를 많이 아껴 줘~');
            extra_flag.attr_change = new Array(5).fill(8);
            extra_flag.pt_change = 75;
            extra_flag.motivation_change = 1;
          }
        } else {
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.pt_change = 45;
        }
        new GoldShipEduMarks().keywords++;
      } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks >= 96) {
        const gordan = get_chara_talk(48);
        // 资深年天皇赏秋
        await print_event_name(
          [{ color: chara_colors[1], content: '단서?' }],
          gold_ship,
        );
        await era.printAndWait(
          `레이스 전 ${me.name}에게 닥쳤던 불안과는 달리, ${gold_ship.name}은 강력한 경기력을 보여주었다!`,
        );
        era.println();
        await gold_ship.say_and_wait('때로는 웃고, 때로는 울며……우여곡절이 많았던 여정……');
        await gold_ship.say_and_wait(
          '이 여정의 모든 것이 헛되지 않았어! 내 손에는 이미 승리가 잡혀 있으니까!',
        );
        await gordan.say_and_wait('완전 짜증나. 또 이 녀석한테 졌잖아……!! 으윽……!!');
        await gordan.say_and_wait('오늘은 그저 운빨이 없었던 거라구, 다음에는 반드시 내가 이길거야!');
        await gold_ship.say_and_wait('오냐! 결승점에서 마카롱을 먹으며 기다릴게!');
        await gordan.say_and_wait('흥!');
        era.println();
        await era.printAndWait(
          `이렇게, ${gordan.name}은 또다시 퉁명스럽게 떠났지만……`,
        );
        era.println();
        await gold_ship.say_and_wait('오? 저 녀석 무언가를 떨어뜨린 것 같은데.');
        era.println();
        await era.printAndWait(
          '저번과 같은 쪽지네. 또 새로운 단서인 것 같은데.',
        );
        era.println();

        era.printButton('「정말 솔직하지 못한 녀석이네」', 1);
        await era.input();

        await gold_ship.say_and_wait('이번엔……『gw』.');
        await gold_ship.say_and_wait('『Su』、『an』、『gw』……');
        await gold_ship.say_and_wait('아직도 잘 모르겠네——!');
        era.println();
        await era.printAndWait(
          '『그분』은 이번에도 또 새로운 단서를 남겼군. 제자를 시켜 이런 일을 하게 하다니, 설마 권세 있는 인물인가?',
        );

        new GoldShipEduMarks().keywords++;
        extra_flag.attr_change = [3, 13, 3, 3, 3];
        extra_flag.pt_change = 45;
      } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
        const flash = get_chara_talk(37);
        const jordan = get_chara_talk(48);
        // 资深年有马纪念
        await print_event_name(
          [{ color: chara_colors[1], content: '마지막 단서' }],
          gold_ship,
        );
        await flash.say_and_wait('정말…… 너무나 아쉽네요.');
        await jordan.say_and_wait('완전 짜증나. 오늘은 분명 이길 수 있을 줄 알았는데……!');
        await gold_ship.say_and_wait(
          '고마워. 덕분에 내 화산폭발의 심장도 가장 뜨거운 온도에 도달했네!',
        );
        await flash.say_and_wait(`축하해요, ${gold_ship.name} 씨.`);
        await flash.say_and_wait('이번이 당신과 맞붙는 마지막 대결이네요.');
        await flash.say_and_wait('이걸 받아 주세요.');
        era.println();
        await era.printAndWait(
          `${flash.name}가 쪽지를 꺼냈다. 이것이 에덴으로 가는 마지막 단서다!`,
        );
        era.println();
        await gold_ship.say_and_wait('이건……!!');
        await flash.say_and_wait(
          '이것이 바로 당신이 찾아 헤매던 에덴……인가요? 잘은 모르겠지만, 꼭 힘내길 바래요.',
        );
        await gold_ship.say_and_wait('고마워!');
        era.println();
        await era.printAndWait(
          `${flash.name}, ${jordan.name}, 고루시의 두 숙적들의 모습이 군중 속으로 서서히 멀어져 간다……`,
        );
        era.println();
        await gold_ship.say_and_wait(`${sys_get_callname(7, 0)}，이것이 바로……!`);
        era.println();

        era.printButton('「이게 마지막이야!」', 1);
        await era.input();

        await era.printAndWait('이제 이 단서들을 조합해 보자고!');

        new GoldShipEduMarks().keywords++;
        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      } else {
        await print_event_name(
          [{ color: chara_colors[1], content: '레이스 승리!' }],
          gold_ship,
        );
        await gold_ship.say_and_wait(
          '어때, 트레이너! 내 열정적인 달리기 잘 봤어?!',
        );
        era.printButton('「대단해!」', 1);
        era.printButton('「더 높은 목표를 향해 힘내자!」', 2);
        if ((await era.input()) === 1) {
          await gold_ship.say_and_wait('그치? 말할 필요도 없지?');
        } else {
          await gold_ship.say_and_wait('좋아——! 나는 지구의 중심이 될 거야!!');
        }
      }
    } else {
      return super.race_end(gold_ship, me, callname, hook, extra_flag);
    }
  }
};
