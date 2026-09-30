const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');

const { race_enum } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {RaceStartParams} extra_flag
 */
module.exports = async (maru, me, hook, extra_flag) => {
  const edu_weeks = era.get('cflag:4:육성턴수합산');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('데뷔전 전・모든 것의 시작', maru);
    await era.printAndWait(`지하 통로 안`);
    await maru.say_and_wait(
      `조금 긴장되긴 하지만, 지금은 완전히 안심했어.`,
    );
    era.printButton(`「이대로 후배들에게 ${maru.name}의 멋진 모습을 보여주자!」`, 1);
    await era.input();
    await maru.say_and_wait(
      `응응, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 ${maru.name}의 멋진 모습을 잘 지켜봐 줘.`,
    );
    await maru.say_and_wait(
      `게다가, 뒤에서 항상 응원해 주는 후배들뿐만 아니라, 질주하는 과정에서 한계를 돌파하는 바람도 느껴져!`,
    );
    await maru.say_and_wait(`그렇게 말하니, 몸이 근질근질해지기 시작했어!`);
    await maru.say_and_wait(
      `슬슬 내 차례네. 그럼, ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 나중에 봐!`,
    );
    era.printButton(`「무운을 빌게」`, 1);
    await era.input();
    await era.printAndWait(`고개를 끄덕인 뒤, ${maru.name}는 경기장으로 향했다.`);
  } else if (extra_flag.race === race_enum.asah_sta && edu_weeks < 95) {
    await print_event_name('아사히배 전・5단 가속', maru);
    await era.printAndWait(`준비실 안`);
    await maru.say_and_wait(`흥흥흥～♪`);
    await era.printAndWait(`${maru.name}가 기분 좋은 듯 준비실에서 승부복을 점검하고 있다.`);
    await me.say_and_wait(`${maru.name}, 준비는 좀 어때?`);
    await maru.say_and_wait(
      `어머, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이구나.`,
    );
    await maru.say_and_wait(`보다시피, 지금은 마력 전개 상태야.`);
    era.printButton(`「다음 레이스도 마음껏 즐기자!」`, 1);
    await era.input();
    await me.say_and_wait(
      `결국, 나는 미래를 향해 달려 나가는 ${maru.name}의 멋진 모습을 계속 보고 싶으니까.`,
    );
    await maru.say_and_wait(
      `응, ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }은(는) 잘 지켜봐 줘.`,
    );
    await maru.say_and_wait(`경기장에서 달리는 ${maru.name}의 모습을 말이야.`);
    await maru.say_and_wait(`그럼, 다녀올게.`);
    era.printButton(`「${maru.name}, 파이팅!」`, 1);
    await era.input();
    await era.printAndWait(`준비를 마친 ${maru.name}은(는) 경기장으로 향했다.`);
    await me.say_and_wait(
      `이제 관중석에서 ${maru.sex_code - 1 ? '그녀' : '그'}를 응원하자.`,
      true,
    );
  } else if (extra_flag.race === race_enum.sprg_sta && edu_weeks < 95) {
    await print_event_name(`스프링 스테이크스 전・불꽃`, maru);
    await era.printAndWait(`준비실`);
    await era.printAndWait(
      `사츠키상의 전초전인 스프링 스테이크스, 수많은 ${maru.get_uma_sex_title()}가 전력을 다하는 장소.`,
    );
    await era.printAndWait(`그러나 이때.`);
    await say_by_passer_by(
      `스태프`,
      `세 번이나 확인했습니다만, ${maru.name}를 포함해 총 다섯 명의 ${maru.get_uma_sex_title()}뿐입니다.`,
    );
    await me.say_and_wait(`아…… 감사합니다.`);
    await era.printAndWait(
      `${maru.name}에게 있어 경기장에서 느끼는 즐거움은 레이스 등급 및 참가하는 ${maru.get_uma_sex_title()} 수에 비례한다.`,
    );
    await era.printAndWait(
      `즉, 레이스 등급이 높을수록 참전하는 ${maru.get_uma_sex_title()}의 수와 질이 높아지며, ${maru.name}은(는) 더욱 즐거워한다.`,
    );
    await era.printAndWait(`단지 이 정도라면 괜찮겠지만.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()} A`,
      `아, 알고 있어. 이번 레이스는 분명 ${maru.name}의 승리일 거야.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()} B`,
      `더 고민할 필요가 있어? ${maru.name}가 이기지 않는다면, 다른 누가 ${
        maru.sex_code - 1 ? '그녀' : '그'
      }를 이길 수 있을지 상상조차 안 가.`,
    );
    await say_by_passer_by(
      `출주 ${maru.get_uma_sex_title()} A`,
      `이제 상관없어. 어차피 결과는 ${maru.name}의 승리일 테니, 난 체력을 아껴서 다음 레이스나 준비해야겠어.`,
    );
    await say_by_passer_by(
      `출주 ${maru.get_uma_sex_title()} B`,
      `애초에, 그런 괴물을 이길 수 있는 사람은 아무도 없어.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 나 준비 다 됐어.`,
    );
    await era.printAndWait(`때마침 들려온 목소리가 당신의 회상을 가로막았다.`);
    await me.say_and_wait(`응, 이번에도 레이스를 즐기고 와.`);
    await maru.say_and_wait(
      `그렇네, 그런데 이번 레이스 참가 인원이 최소 인원밖에 안 된다면서?`,
    );
    await maru.say_and_wait(`참가하는 모두가 좀 더 적극적이었다면 좋았을 텐데.`);
    await era.printAndWait(
      `${maru.name}의 기분이 그리 좋지 않은 듯, 귀가 축 처졌다.`,
    );
    era.printButton(
      `${maru.name}, 지금까지의 훈련 성과를 관객들에게 제대로 보여주자.`,
      1,
    );
    era.printButton(
      `${maru.name}의 달리기를 본다면, 분명 그들도 생각이 바뀔 거야.`,
      2,
    );
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(
        `응, ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }은(는) 관중석에서 내 활약을 지켜봐 줘!`,
      );
      await maru.say_and_wait(`이 타오르는 붉은 모습을 가슴 깊이 새겨두라고!`);
    } else {
      await maru.say_and_wait(`……`);
      await me.say_and_wait(
        `${maru.name}의 뒷모습을 통해, 의기소침해진 아이들에게 다시 희망을 주는 거야.`,
      );
      await me.say_and_wait(`평소 훈련했던 것처럼 말이야.`);
      await maru.say_and_wait(`맞아!`);
      await era.printAndWait(`${maru.name}의 처졌던 귀가 다시 쫑긋 섰다.`);
    }
    await era.printAndWait(
      `이야기를 더 나누고 싶었지만, 스태프들이 마이크를 테스트하는 소리가 준비실까지 들려왔다.`,
    );
    await maru.say_and_wait(
      `슬슬 나갈 시간이야, ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 나중에 봐!`,
    );
    await me.say_and_wait(`왜인지 불안한 기분이 드는 걸까.`, true);
    await era.printAndWait(
      `${me.name}은(는) 그 불안함을 마음 깊은 곳에 묻어둔 채, 경기장으로 향하는 애마를 배웅했다.`,
    );
  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`사츠키상 전・다시 한번`, maru);
    await era.printAndWait(`레이스 시작 전・기자 회견장`);
    await say_by_passer_by(
      `기자 A`,
      `${maru.name} ${maru.sex_code === 1 ? '군' : '씨'}를 인터뷰하게 되어 영광입니다.`,
    );
    await say_by_passer_by(`기자 A`, `이번 목표도 역시 사츠키상 우승입니까?`);
    await maru.say_and_wait(`네, 담당 트레이너와 상담해서 결정한 결과입니다.`);
    await say_by_passer_by(
      `기자 B`,
      `실례합니다만, 지난 스프링 스테이크스의 출주 ${maru.get_uma_sex_title()} 수가 최소 조건인 5명뿐이었다고 들었습니다.`,
    );
    await say_by_passer_by(
      `기자 B`,
      `다른 ${maru.get_uma_sex_title()}들이 ${maru.name}에게 이길 수 없다고 판단해 출주를 피한 것이라고 봐도 될까요?`,
    );
    await maru.say_and_wait(
      `스프링 스테이크스와 관련된 질문은 담당 트레이너에게 문의해 주세요. 여기서는 답변하지 않겠습니다.`,
    );
    await say_by_passer_by(
      `기자 C`,
      `다음은 저입니다. 슈퍼카라고 불리는 당신의 다음 목표는 무패 3관을 목표로 더비에 출주하는 것입니까?`,
    );
    await maru.say_and_wait(`현재 잠정적으로 정해진 목표입니다.`);
    await say_by_passer_by(`기자 C`, `알겠습니다. 감사합니다.`);
    await maru.say_and_wait(`별말씀을요.`);
    era.drawLine({ content: '기자 회견 종료 후' });
    await era.printAndWait(`준비실\n`);
    await me.say_and_wait(`${maru.name}, 준비됐어? 이제 네 차례야.`);
    await maru.say_and_wait(`준비 만전이야.`);
    await me.say_and_wait(`평소처럼 네 생각대로 자유롭게 달려.`);
    await maru.say_and_wait(
      `후훗, 이번에야말로 ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }은 내 달리기에 사로잡히게 될 거야.`,
    );
    await maru.say_and_wait(`그 순간이 정말 기대되는걸——`);
    await maru.say_and_wait(`아, 슬슬 출발해야겠어. 그럼 나중에 봐!`);
    await me.say_and_wait(`모든 것이 순조롭기를.`, true);
    await maru.say_and_wait(`응.`);
    await era.printAndWait(`${maru.name}는 경기장으로 향했다.`);
    await me.say_and_wait(`……${maru.name}, 계속 지켜보고 있을게.`, true);
  } else if (extra_flag.race === race_enum.toky_yus && edu_weeks < 95) {
    await print_event_name(`일본 더비 전・${maru.name}`, maru);
    await era.printAndWait(
      `더 큰 무대에서 색다른 경험을 하고 싶다는 ${maru.name}의 희망에 따라, 당신들은 일본 더비에 출주하기로 결정했다.`,
    );
    await era.printAndWait(`트레이닝실 안`);
    await maru.say_and_wait(
      `역시 더비네, 참가하는 우마무스메들의 수준이 정말 높아.`,
    );
    await era.printAndWait(
      `클래식 3관 중 두 번째인 일본 더비는 가장 운이 좋은 ${maru.get_uma_sex_title()}가 승리한다는 속설이 있다.`,
    );
    await era.printAndWait(
      `실력이 뛰어난 ${maru.get_uma_sex_title()}일지라도 이곳에서 미끄러지는 경우가 허다하지만, ${
        maru.name
      }에게는 예외인 듯하다.`,
    );
    await era.printAndWait(`${maru.name}는 평소와 다름없는 모습이다.`);
    await era.printAndWait(`아마도 순수하게 레이스를 즐기기 위해 이곳에 왔기 때문이리라.`);
    await maru.say_and_wait(
      `${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 이제부터 내 모습을 똑똑히 지켜봐 줘야 해.`,
    );
    await era.printAndWait(`${maru.name}는 준비를 마친 뒤, 지하 통로로 향했다.`);
    await me.say_and_wait(`나도 슬슬 관중석으로 가야겠어.`);
  } else if (extra_flag.race === race_enum.radi_shi && edu_weeks < 95) {
    await print_event_name('라디오 NIKKEI 상 전・누구를 위한 달리기인가', maru);
    await era.printAndWait(`트레이닝실 안`);
    await era.printAndWait(
      `더비 이후 ${maru.name}는 후배들을 향한 열정과 사랑을 전부 당신에게 쏟아붓고 있다.`,
    );
    await era.printAndWait(`덕분에 당신의 위장은 더욱 고통받고 있다.`);
    await me.say_and_wait(`${maru.name}을 간신히 설득해서 이 레이스에 참가하게 했지.`, true);
    await era.printAndWait(
      `시험 삼아 ${
        maru.name
      }에게 칠석상 출주를 제안했을 때, 말없이 코코넛 드링크를 트레이닝실에 두고 문을 닫고 나가버린 ${
        maru.sex_code - 1 ? '그녀' : '그'
      }의 모습에 양심의 가책을 느꼈다.`,
    );
    await era.printAndWait(`수차례 전화를 걸어 실패한 끝에야 겨우 ${maru.name}의 승낙을 받아냈다.`);
    await era.printAndWait(
      `전신 거울을 보며 자신의 상태를 조절하는 ${maru.name}을(를) 바라본다.`,
    );
    await me.say_and_wait(
      `지금의 ${
        maru.sex_code - 1 ? '그녀' : '그'
      }도 흔들리고 있겠지. 만약 여기서 작은 충격이라도 더해진다면, ${
        maru.sex_code - 1 ? '그녀' : '그'
      }의 이상은 무너지고 말 거야.`,
      true,
    );
    await me.say_and_wait(`정말 이래야만 할까…… 아니, 분명 이게 최선의 방법일 거야.`, true);
    await maru.say_and_wait(`정말 그리운 옷이네…… 아니, 아무것도 아니야.`);
    await era.printAndWait(`${maru.name}는 약간 끼는 듯한 승부복을 입었다.`);
    await maru.say_and_wait(
      `이번에야말로 사랑하는 ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }에게 승리를 가져다줄게♪`,
    );
    await era.printAndWait(`어떤 생각이든 이제 상관없다. ${maru.name}은(는) 경기장으로 향했다.`);
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 95) {
    await print_event_name('아리마 기념 전・가장 성대한 무대', maru);
    await era.printAndWait(
      `아리마 기념은 일본 레이스 중 가장 성대한 레이스로, 수많은 ${maru.get_uma_sex_title()}가 팬 투표를 통해 출주권을 얻는다.`,
    );
    await era.printAndWait(
      `'슈퍼카'라 불리며 압도적인 인기를 자랑하는 ${maru.name} 역시 당연히 출주권을 획득했다.`,
    );
    era.drawLine({ content: '준비실 안' });
    await maru.say_and_wait(
      `${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 이번에야말로 후배들에게 내 뒷모습을 제대로 보여줄 거야.`,
    );
    era.printButton(`「음」`, 1);
    await era.input();
    await era.printAndWait(
      `${maru.name}가 슬럼프를 극복한 뒤, 국내 최대의 무대인 아리마 기념을 목표로 당신들은 연습을 시작했다.`,
    );
    await era.printAndWait(
      `클래식 시즌에 이미 영역을 터득한 드문 ${maru.get_uma_sex_title()}이기에, 클래식 한정 레이스라면 압승했겠지만, 강자들이 즐비한 아리마 기념에서는 과연.`,
    );
    await me.say_and_wait(`${maru.name}가 즐거울 수 있다면 그걸로 충분해.`, true);
    await era.printAndWait(`그렇게 생각하며 마지막 점검을 마친 순간.`);
    await era.printAndWait(`입술에 촉촉한 감촉이 전해졌다.`);
    await maru.say_and_wait(`이걸로 액셀도 꽉 채웠어.`);
    await maru.say_and_wait(
      `그럼, ${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 다녀올게.`,
    );
    await era.printAndWait(
      `${maru.name} 특유의 활기를 띠며, ${
        maru.sex_code - 1 ? '그녀' : '그'
      }는 경기장으로 나아갔다.`,
    );
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name('오사카배 전・부드러운 바람', maru);
    await era.printAndWait(`황제와의 대결이 곧 오사카배에서 시작된다.`);
    await era.printAndWait(`미디어는 이 사건을 왕도와 패도의 대결로 묘사했다.`);
    await era.printAndWait(`오사카배의 관심도는 이미 작년 아리마 기념을 훨씬 뛰어넘었다.`);
    await era.printAndWait(
      `관중석은 전설적인 대결을 지켜보려는 팬들로 가득 찼고, 통로까지 사람들로 넘쳐났다.`,
    );
    era.drawLine({ content: '준비실 안' });
    await maru.say_and_wait(`흥흥흥～♪`);
    await era.printAndWait(`이렇게 긴장되는 순간에도 ${maru.name}는 여전히 여유롭다.`);
    era.printButton(`「${maru.name}, 이번 레이스는 정말 즐거울 거야」`, 1);
    await era.input();
    await era.printAndWait(
      `황제의 등장은 ${maru.name}를 가장 흥분하게 만드는 요소였다.`,
    );
    await maru.say_and_wait(`그럼, 모든 준비 OK야.`);
    await maru.say_and_wait(`이제 더 성대한 레이스를 즐기러 가볼까.`);
    await era.printAndWait(
      `${maru.name}를 위해 문을 열어주려던 당신의 손 위로 가냘픈 손이 겹쳐졌다.`,
    );
    await era.printAndWait(
      `입술로 전해지는 뜨거운 숨결, 부드러운 혀가 서로 얽혔다가 아쉬운 듯 떨어졌다.`,
    );
    await maru.say_and_wait(`하마터면 제일 중요한 걸 잊을 뻔했네.`);
    await maru.say_and_wait(
      `${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }은꼭 나만 바라보고 있어야 해.`,
    );
    await era.printAndWait(`${maru.name}는 경기장으로 향했다.`);
  } else if (extra_flag.race === race_enum.yasu_kin && edu_weeks > 95) {
    await print_event_name('야스다 기념 전・생기 발랄', maru);
    await era.printAndWait(`${maru.name}는 자유로운 바람을 쫓아 도쿄 경기장에 도착했다.`);
    await maru.say_and_wait(`오늘 컨디션 정말 최고야.`);
    await era.printAndWait(
      `${maru.name}의 승부복에 잡힌 구김을 펴주자, 슈퍼카는 출격 준비를 마쳤다.`,
    );
    await maru.say_and_wait(`후배들도 이제 내 등을 쫓아와서 앞지르기를 바라고 있겠지.`);
    await era.printAndWait(
      `레이스의 승리보다도, ${maru.name}는 사랑스러운 후배들이 자신과 구시대의 영광을 뛰어넘기를 바라고 있다.`,
    );
    await maru.say_and_wait(`그래서 지금 나도 불타오르고 있어!`);
    await maru.say_and_wait(
      `그럼 정해진 순서대로, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
    );
    await era.printAndWait(
      `${maru.name}의 가느다란 허리를 가볍게 감싸 안으며, 당신들은 행복한 순간에 잠겼다.`,
    );
    await maru.say_and_wait(
      `${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }, 계속, 계속 내 뒷모습만 보고 있어야 해?`,
    );
    await maru.say_and_wait(
      `다른 우마무스메를 본다면, 아무리 ${
        era.get('cflag:4:성별') - 1 ? '언니' : '누나'
      }라도 질투할 거니까.`,
    );
    era.printButton(`「계속 너만 보고 있을게」`, 1);
    await era.input();
    await maru.say_and_wait(`그럼 마지막으로 한 번 더♪`);
    await era.printAndWait(`아쉬운 작별 후에, ${maru.name}은(는) 경기장으로 향했다.`);
  } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks > 95) {
    await print_event_name('텐노상(가을) 전・에덴의 꿈', maru);
    await era.printAndWait(`황제와의 두 번째 대결이 곧 시작된다.`);
    await era.printAndWait(
      `${maru.name}와 황제의 재대결은 관객들에게 있어 전례 없는 최고의 화젯거리였다.`,
    );
    era.drawLine({ content: '준비실 안' });
    era.printButton(`「가장 멋진 뒷모습을 보여줘」`, 1);
    await era.input();
    await maru.say_and_wait(`루돌프와 같은 무대에서 경쟁할 수 있다니, 의심할 여지 없이 최고의 무대야♪`);
    era.printButton(`「승산은 있니?」`, 1);
    await era.input();
    await me.say_and_wait(
      `쟁쟁한 ${maru.get_uma_sex_title()}들에게 도전하고, 그들과 교류하고, 대항하고, 승부를 가린다.`,
    );
    await me.say_and_wait(`과연 승산은 있을까?`);
    await era.printAndWait(`${maru.name}은(는) 잠시 침묵하더니, 대답을 내놓았다.`);
    await maru.say_and_wait(
      `${
        era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
      }은 경기장을 달리는 ${maru.get_uma_sex_title()}들을 어떻게 생각해?`,
    );
    await me.say_and_wait(`경기장에서 승리하기 위해, 보이지 않는 곳에서 땀과 노력을 쏟아붓지.`);
    await me.say_and_wait(`하지만.`);
    await maru.say_and_wait(
      `맞아, 승리할 수 있는 ${maru.get_uma_sex_title()}는 단 한 명뿐이야.`,
    );
    await era.printAndWait(
      `당신의 눈앞에 다시 학생회실 중앙에 걸려있던 명언이 떠올랐다.`,
    );
    await me.say_and_wait(`eclipse first, the rest nowhere.`);
    await maru.say_and_wait(
      `처음 봤을 때, 어떻게 이해해야 할지 한참을 고민했어.`,
    );
    await maru.say_and_wait(
      `묵묵히 노력한 ${maru.get_uma_sex_title()}들이 단지 졌다는 이유만으로 그 노력을 전부 부정당하는 걸까?`,
    );
    await maru.say_and_wait(
      `단 한 명만 이길 수 있다면, 다른 아이들의 노력은 전부 헛수고가 되는 걸까?`,
    );
    await maru.say_and_wait(
      `만약 실패가 정해진 결말이라면, 처음부터 포기하고 다른 길을 찾는 게 현명한 선택이겠지?`,
    );
    await maru.say_and_wait(
      `——하지만, 달리는 것 자체가 ${maru.get_uma_sex_title()}의 본능이잖아?`,
    );
    await maru.say_and_wait(`출발 전, 긴장하며 출발 신호를 기다리는 순간.`);
    await maru.say_and_wait(
      `달리면서 고독하게 미지의 세계와 마주하지만, 생각보다 무섭지는 않아.`,
    );
    await maru.say_and_wait(`스퍼트를 올릴 때 뒤에서 들려오는 발소리들.`);
    await maru.say_and_wait(
      `앞서가는 등을 추월하고 싶고, 더 빨리 달리고 싶고, ${
        maru.sex_code - 1 ? '그녀' : '그'
      }보다 더 멀리 나아가고 싶어.`,
    );
    await maru.say_and_wait(`마지막에 결승선을 통과하는 순간은 오히려 그렇게 중요하지 않게 돼.`);
    await maru.say_and_wait(
      `그런 마음으로 성공을 거머쥐고, 그렇게 함으로써 앞길이 보이지 않아 방황하는 후배들에게 길을 보여주는 거야.`,
    );
    await maru.say_and_wait(
      `이 길도 끝까지 갈 수 있다는 걸 증명하고, 밑져야 본전이라는 마음으로 도전할 수 있게.`,
    );
    await maru.say_and_wait(
      `그러니까 내 답은——성공하든 실패하든, 이 모험은 도전할 가치가 충분하다는 거야.`,
    );
    await era.printAndWait(`레이스가 곧 시작된다는 안내 방송이 울려 퍼졌다.`);
    await maru.say_and_wait(`미안, 나도 모르게 말이 좀 길어졌네.`);
    await era.printAndWait(`조금 부끄러워진 ${maru.name}의 얼굴이 붉어졌다.`);
    await era.printAndWait(`${maru.name}를 영입한 뒤로 정말 많은 일이 있었다.`);
    await era.printAndWait(
      `눈물, 웃음, 슬픔, 기쁨, 신뢰, 그리고 배신까지.`,
    );
    await era.printAndWait(`이미 전부 한 번씩은 겪어온 일들이다.`);
    await era.printAndWait(`${maru.name}에게 있어————`);
    era.printButton(`「함께 출발하자.」`, 1);
    await era.input();
    era.printButton(`「우리만의 이야기를 써 내려가자.」`, 1);
    await era.input();
    await maru.say_and_wait(`……후훗♪`);
    await era.printAndWait(`${maru.name}가 미소를 지었다.`);
    await maru.say_and_wait(`앞으로 무슨 일이 일어나든, 항상 내 곁에 있어 줄 거지?`);
    await maru.say_and_wait(`함께 웃고, 함께 울고. 모든 걸 같이 마주하는 거야?`);
    await era.printAndWait(`아마 당신의 기억 속에서 가장 아름다운 미소일 것이다.`);
    await era.printAndWait(`${maru.name}는 경기장으로 향했다.`);
    await era.printAndWait(`멀지 않은 곳에서 황제가 도전자들의 도착을 기다리고 있다.`);
    await era.printAndWait(`당신은 ${maru.name}의 승리를 기도했다.`);
    await era.printAndWait(`시간은, 이곳에서 다시 흐르기 시작한다.`);
  } else {
    await print_event_name('레이스 시작', maru);
    await era.printAndWait(`지하 통로 안`);
    await maru.say_and_wait(`오늘 레이스도 후배들에게 내 멋진 뒷모습을 보여줘야지!`);
    era.printButton(`「${maru.name}, 파이팅!」`, 1);
    await era.input();
    await maru.say_and_wait(
      `후훗, 고마워 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
    );
    await maru.say_and_wait(
      `이 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}의 뒷모습에 너무 반해버리면 안 된다?`,
    );
    await era.printAndWait(`당신은 경기장으로 향하는 ${maru.name}를 배웅했다.`);
  }
};