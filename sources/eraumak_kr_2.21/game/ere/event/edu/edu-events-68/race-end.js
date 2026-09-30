const era = require('#/era-electron');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (kita, me, hook, extra_flag) => {
  const edu_weeks = era.get('cflag:68:육성턴수합산');
  extra_flag.attr_change = new Array(5).fill(0);
  if (extra_flag.race === race_enum.begin_race && extra_flag.rank === 1) {
    extra_flag.pt_change = 30;
    if (edu_weeks === 23) {
      await print_event_name('첫 번째!', kita);
      await era.printAndWait(
        `${kita.name}이 결승선을 통과하는 순간, ${me.name}은(는) 길게 안도의 한숨을 내쉬며 조마조마했던 마음을 겨우 가라앉혔다.`,
      );
      await era.printAndWait(
        `담당의 소질을 굳게 믿고 있었고, ${kita.sex}가 승리할 수 있는 아이라는 것을 확신하고 있었음에도 불구하고.`,
      );
      await era.printAndWait(
        `실제로 승리하기 전까지 ${kita.name}은 과연 순조롭게 이길 수 있을지에 대한 우려와 자신에 대한 불신을 조금이나마 품고 있었다.`,
      );
      await era.printAndWait(
        `하지만 이제 상황은 종료되었다. ${me.name}은(는) 비틀거리며 이쪽으로 달려오는 담당을 향해 수건과 생수를 들고 다가갔다.`,
      );
      await kita.say_and_wait(
        `트레이너 선생님! 저… 이겼어요! 이긴 거 맞죠! 이렇게 이긴 거 맞죠!`,
      );
      await era.printAndWait(
        `몸에서 뿜어져 나오는 뜨거운 열기와 함께 순식간에 다가온 ${kita.name}은 절박한 표정으로 ${me.name}에게 확인하듯 물었다.`,
      );
      await kita.say_and_wait('저…… 꿈꾸고 있는 거 아니죠!');
      era.println();

      era.printButton('「이겼어, 키타산.」', 1);
      await era.input();
      await era.printAndWait(
        `경기장을 가득 채운 높고 흥분된 환호성과 찬사를 들으며, ${me.name}은(는) 승리를 그 무엇보다 갈망했던 담당에게 대답해 주었다.`,
      );
      await era.printAndWait(
        `자신의 열정과 의지를 모두에게 전하고 싶어 했던 ${kita.name}은 이번 승리를 통해 의심의 여지 없이 그 마음을 전달했다.`,
      );
      await era.printAndWait(
        `${kita.name}은 담당의 긴장했던 표정이 단번에 풀리며 평소와 같은 따뜻한 미소로 바뀌는 것을 보았다.`,
      );
      await kita.say_and_wait(
        `헤헤…… 왠지 실감이 나지 않네요. 머릿속이 멍해요.`,
      );
      await era.printAndWait(
        `역시 키타산답네, ${me.name}은(는) 그렇게 감탄하며 시선을 옮겼다. 그제야 ${me.name}은(는) 키타산의 옷이 땀으로 완전히 흠뻑 젖어 있다는 사실을 깨달았다.`,
      );
      await kita.say_and_wait(`우와앗~ 트레이너 선생님!?`);
      await era.printAndWait(
        `이런…… 보기 흉한 생각이 머릿속을 스치자, ${me.name}은(는) 재빨리 수건을 펼쳐 키타산에게 덮어주고 ${kita.sex}의 몸을 꼼꼼하게 가려주었다.`,
      );
      await era.printAndWait(
        '??? 「오후 첫 번째 레이스는 이것으로 종료되었습니다. 정말 멋진 승부였습니다!」',
      );
      await era.printAndWait(`??? 「그럼 다음 레이스는……」`);
      await era.printAndWait(`그렇게 ${kita.name}의 데뷔전이 막을 내렸다.`);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    } else {
      await print_event_name('첫 번째의……', kita);
      await kita.say_and_wait('저…… 이긴 건가요? 이번엔 정말로 이긴 건가요……');
      await era.printAndWait(
        `결승선 뒤에 멈춰 서서 ${kita.name}은 거칠게 숨을 몰아쉬었다. 눈앞의 사실이 믿기지 않는 모양이었다.`,
      );
      await era.printAndWait(
        `한참을 제자리에 서 있은 후에야 ${me.name}의 담당은 환한 미소를 지어 보였다.`,
      );
      await kita.say_and_wait('나, 이겼구나……');
      await era.printAndWait(
        `다른 우마무스메들과 함께 경기장 출구로 걸어가며, ${kita.name}은 승리의 미소를 지었다.`,
      );

      extra_flag.motivation_change = 1;
      extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 5;
    }
  } else if (extra_flag.race === race_enum.sats_sho && extra_flag.rank === 1) {
    await print_event_name('승리의 큰 무대', kita);
    await kita.say_and_wait(`고마워요, 트레이너 선생님.`);
    await era.printAndWait(
      `사츠키상 종료 후의 대기실에서, ${kita.name}은 ${me.name}에게 깊숙이 고개를 숙여 인사했다.`,
    );
    await kita.say_and_wait(
      `사츠키상이라는 무대에서 달릴 수 있었고, 두라멘테와 같은 무대에서 경쟁했다는 사실이…… 솔직히 지금도 가슴이 벅차올라요.`,
    );
    await era.printAndWait(
      `게다가 레이스 전에는 바쿠신 오의 실수로 신청서를 내는 걸 잊어버릴 뻔하기도 했고, 레이스 도중에도 심장이 튀어나올 정도로 아찔한 순간이 몇 번이나 있었지.`,
    );
    await era.printAndWait(
      `우여곡절 끝에 해탈한 심정이 되어 졸음과 싸우던 ${me.name}은(는), 그제야 ${kita.name}이 삼관 우마무스메의 첫 번째 관문을 통과했다는 사실을 간신히 떠올렸다.`,
    );
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    const baku = get_chara_talk(41);
    await print_event_name('피로의 이유', kita);
    await kita.say_and_wait(`하아…… 하아…… 에…… 다 달린 건가요?`);
    await era.printAndWait(
      `결승선을 통과한 후, ${kita.name}은 옆에 있는 순위 게시판을 바라보았다.`,
    );
    await era.printAndWait(
      `거리에 적응하지 못한 탓일까? 아니면 단순한 신체적 한계일까? 지금의 키타산은 승리의 실감을 느끼지 못하고 있었다.`,
    );
    await kita.say_and_wait(`나, 승리한 건가? 그 두라멘테를 상대로?`);
    await era.printAndWait(
      `분명 승리했음에도 불구하고 ${kita.name}은 몹시 피곤한 기색이었다. 두라멘테라는 강적이 내뿜는 기운에 ${kita.name}의 모든 에너지가 소진된 것 같았다.`,
    );
    await era.printAndWait(
      `대기실로 돌아와 한참의 시간이 흐른 뒤에야 ${kita.name}은 평소처럼 입을 뗐다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 일본 더비는 정말 정말 대단하네요……`,
    );
    era.println();
    era.printButton('「정신이 좀 들어, 키타산?」', 1);
    await era.input();

    await kita.say_and_wait(
      `네, 겨우겨우 진정은 됐는데…… 그래도 아직 이겼다는 실감이 안 나요.`,
    );
    await kita.say_and_wait(
      `이상하네요, 트레이너 선생님. 전 제 끈기만큼은 자신 있었는데……`,
    );
    await kita.say_and_wait(
      `승리한 뒤에도 가시지 않는 이 피로감은 처음 느껴봐요. 혹시 전 이런 긴 거리는 맞지 않는 걸까요?`,
    );
    await era.printAndWait(`그렇게 말하는 ${kita.name}의 표정에는 낙담한 기색이 역력했다.`);
    await era.printAndWait(
      `삼관 레이스라는 무게감, 2400m의 긴 거리, 그리고 강적의 위압감과 아우라가 이 강인한 아이에게도 큰 영향을 준 모양이었다.`,
    );
    await era.printAndWait(
      `망설이던 ${me.name}이(가) 입을 열려던 찰나, 문밖에서 익숙한 목소리가 들려왔다.`,
    );
    await baku.say_and_wait(`그건 2400m 코스가 너무 길어서 그런 거예요, 키타산 양!`);
    await era.printAndWait(
      `문을 열고 체육복 차림의 ${baku.name}가 바람처럼 들어오더니, 자신만만한 태도로 키타산에게 말했다.`,
    );
    await era.printAndWait(
      `그러고 보니 관객석에서도 두 사람을 함께 응원하던 바쿠신 오의 모습이 보였던 것 같다.`,
    );
    await baku.say_and_wait(
      `아니 아니, 키타산 양! 전혀 걱정할 필요 없습니다! 당신의 피로는 그저 익숙하지 않은 거리 때문에 온 피곤함일 뿐이에요!`,
    );
    await baku.say_and_wait(
      `키타산 양이 평소 달리는 2000m 코스와 2400m 코스는 단 400m 차이지만, 이건 1200m 곱하기 3 같은 단순한 산수 문제가 아니거든요!`,
    );
    await baku.say_and_wait(
      `이 고작 400m가 익숙해지기 전까지는 스태미나와 스피드에 미치는 영향이 어마어마하다고요! 그러니 너무 낙담하거나 자신을 의심하지 마세요! 키타산 양!`,
    );
    await kita.say_and_wait(`그… 그런 건가요!? 그냥 익숙하지 않았을 뿐이었구나!`);
    await era.printAndWait(
      `바쿠신 오의 가르침을 들은 ${kita.name}은 깨달음을 얻은 표정을 지었고, 어조도 금세 활기를 되찾았다.`,
    );
    await era.printAndWait(
      `다시 평소의 활기를 되찾은 ${kita.name}을 보며, ${me.name}은(는) 바쿠신 오가 평소 이미지와는 다르게 정곡을 찔렀다는 사실을 입 밖으로 내지 않기로 했다. 그저 우연히 머리가 잘 돌아간 것이길 바랄 뿐이다.`,
    );
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.stli_kin && extra_flag.rank === 1) {
    const dia = get_chara_talk(67);
    await print_event_name('승천하는 용과 엎드린 용', kita);
    await era.printAndWait(
      `복도에서 ${kita.name}이 ${me.name}에게 수건으로 꽁꽁 싸여 한참 만에 땀 냄새 밴 수건 더미에서 빠져나왔을 때였다.`,
    );
    await era.printAndWait(
      `${kita.name}의 소꿉친구인 사토노 가문의 ${
        dia.sex_code - 1 ? '아가씨' : '도련님'
      } 사토노 다이아몬드가 꿀 음료 두 잔을 들고 복도 끝에 서 있었다.`,
    );
    await era.printAndWait(
      `그녀는 ${me.name}의 품 안에서 수건으로 땀을 닦이고 있는 ${kita.name}을 조용히 지켜보고 있었다.`,
    );
    await kita.say_and_wait(`아, 다이아짱! 내 레이스 보러 와줬구나!`);
    await era.printAndWait(
      `땀으로 젖어 머리카락이 달라붙은 ${kita.name}이 뒤를 돌아 다이아에게 인사를 건네고는 서둘러 ${dia.name}에게 뛰어갔다.`,
    );
    await era.printAndWait(
      `두 어린 우마무스메는 친근하게 서로를 껴안았고, 풍만한 두 육체가 밀착되며 야릇한 굴곡을 만들어냈다.`,
    );
    await dia.say_and_wait(
      `응, 지켜보고 있었어, 키타짱. 이렇게 멋진 레이스를 보여줘서 고마워.`,
    );
    await dia.say_and_wait(
      `정말 가슴이 벅차올라서, 나도 더 열심히 단련해서 레이스에 나가고 싶어질 정도였어.`,
    );
    if (era.get('cflag:67:모집상태') !== recruit_flags.yes) {
      await dia.say_and_wait(
        `그리고 네 트레이너 선생님께도 감사해야겠네. 그분의 지도가 나까지 의욕이 넘치게 만들었으니까.`,
      );
      await era.printAndWait(`그렇게 말하며 사토노 다이아몬드는 ${me.name}에게 가볍게 목례를 보냈다.`);
    }
    await kita.say_and_wait(`에엣!? 정말이야? 다이아짱! 다행이다!`);
    await era.printAndWait(
      `키타산은 강아지처럼 기쁘게 꼬리를 흔들었고, 다이아몬드도 친근하게 절친의 뺨에 입을 맞추었다.`,
    );
    await dia.say_and_wait(`그러니까 키타짱도 힘내야 해. 국화상에서도 꼭 화이팅이야.`);
    await kita.say_and_wait(
      `그럴게! 에헤헤, 다이아짱의 기대는 절대 저버리지 않을 거니까!`,
    );
    await era.printAndWait(
      `키타산과 다이아의 느긋한 대화를 들으며, ${me.name}은(는) 여자아이들 사이의 우정이란 참으로 살갑구나 감탄하며 몰래 미소를 지었다.`,
    );
    extra_flag.relation_change = 10;
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank === 1) {
    const races = era.get('cflag:68:육성성적');
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1)
    ) {
      await print_event_name('환호하라! 삼관의 축제!', kita);
      await era.printAndWait(
        `${kita.name}이 결승선을 통과할 때 경기장을 가득 메운 환호성을 들으니, 왠지 눈물이 날 것 같았다.`,
      );
      await era.printAndWait(
        `처음 시작할 때의 ${
          kita.name
        }은 팬 한 명 없는 평범한 우마무스메였다.`,
      );
      await era.printAndWait(
        `트레이너들에게 인정받을 만한 천부적인 재능을 가졌음에도 불구하고, 화려하지 않은 소박한 외모 때문에 키타산은 초기에 걸맞은 인기를 얻지 못했다.`,
      );
      await era.printAndWait(
        `하지만 자신의 실력을 증명하기에 충분한 힘으로 사츠키상을 승리하고, 강적의 손에서 일본 더비를 쟁취해냈다.`,
      );
      await era.printAndWait(
        `이제 당당히 2관왕 우마무스메가 된 키타산이 관중들의 열광적인 환호 속에서 달리고 있다.`,
      );
      await era.printAndWait(
        `모두가 키타산의 이름을 부르짖고, 결승선을 넘는 순간 발을 구르며 환호했다. 인기투표권과 입장권은 미친 듯이 허공을 수놓았고, 라이브 도중 너무 기쁜 나머지 넘어지는 사람까지 있었다.`,
      );
      await era.printAndWait(
        `치료비가 키타산 앞으로 청구되지 않기를 바라며, ${
          me.name
        }은(는) 쓴웃음을 지으며 무대 위의 ${kita.get_teen_sex_title()}를 계속 지켜보았다.`,
      );
      await era.printAndWait(
        `지금의 ${kita.name}은 음악 비트에 맞춰 마이크를 움켜쥐고, 약간은 오만한 듯한 표정으로 팬들을 손가락으로 훑고 있었다.`,
      );
      await era.printAndWait(
        `기분 탓일까, ${me.name}은(는) 키타산이 이쪽을 바라볼 때 표정이 눈에 띄게 부드러워지는 것을 느꼈다.`,
      );
      await era.printAndWait(
        `……착각이겠지. 그렇게 생각하며 ${me.name}은(는) 인파 속에서 구호를 외치기 시작했다.`,
      );
      extra_flag.attr_change.fill(5);
      extra_flag.pt_change = 20;
    } else {
      await print_event_name('보아라! 키타산 축제다!', kita);
      await era.printAndWait(
        `${kita.name}이 결승선을 통과할 때 들려온 만장의 환호성에 왠지 울컥하는 기분이 들었다.`,
      );
      await era.printAndWait(
        `가장 빠른 우마무스메만이 이길 수 있는 레이스. 수많은 강자들이 동경하고, 때로는 부상과 불운에 가로막혀 하늘의 뜻을 탓하며 탄식하던 국화상.`,
      );
      await era.printAndWait(`이제 그 영광을 ${kita.name}이 자신의 발로 직접 쟁취했다.`);
      await era.printAndWait(
        `처음 시작했을 때, 그저 소박한 성격과 몸을 가졌던 우마무스메는 고된 훈련 끝에 승리를 거머쥘 수 있는 아이로 탈바꿈했다.`,
      );
      await era.printAndWait(
        `모두의 환호와 격려가 파도처럼 밀려온다. 키타산이 달구어 놓은 이 분위기는 마치 축제의 흥겨운 가락처럼 경기장 안에 끊임없이 메아리쳤다.`,
      );
      await era.printAndWait(
        `키타산이 이미 복도 안쪽으로 사라진 뒤에도 그 열기는 여전히 남아 있었다.`,
      );
      era.println();
      await kita.say_and_wait(
        `트레이너 선생님, 여기서 잠깐 같이 앉아 주실 수 있나요?`,
      );
      await era.printAndWait(
        `복도 구석에서 검은 우마무스메가 더듬거리며 플라스틱 의자에 앉았다.`,
      );
      await era.printAndWait(
        `그리고 땀에 흠뻑 젖은 ${kita.name}은 멍하니 ${me.name}을(를) 바라보았다. 격렬한 운동으로 살짝 붉어진 귀여운 얼굴에는 복잡한 감정이 서려 있었다.`,
      );
      await kita.say_and_wait(
        `에헤헤, 아직도 실감이 나질 않네요. 평소처럼 『축제』 분위기로 열심히 달리긴 했지만……`,
      );
      await kita.say_and_wait(
        `하지만 역시…… 트레이너 선생님의 도움이 없었다면, 저 혼자서는 여기까지 오지 못했을 거예요.`,
      );
      await kita.say_and_wait(
        `그러니까, 정말 고마워요! 트레이너 선생님!`,
      );
      await era.printAndWait(
        `그렇게 말하며 ${kita.name}은 ${me.name}에게 깊이 고개를 숙였고, 드디어 ${kita.sex}의 표정도 평소의 밝은 모습으로 돌아왔다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${kita.get_teen_sex_title()}의 머리를 쓰다듬었고, 어느덧 ${kita.sex}와 함께 웃고 있었다.`,
      );
      extra_flag.attr_change.fill(3);
      extra_flag.pt_change = 10;
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 96 &&
    extra_flag.rank === 1
  ) {
    const dia = get_chara_talk(67);
    await print_event_name('진정한 축제', kita);
    await era.printAndWait(
      `모두의 환호 속에서 승리를 거머쥔 ${kita.name}이 관중들에게 손을 흔들어 화답했다.`,
    );
    await era.printAndWait(
      `힘이 넘치는 질주, 눈에 보이는 열기, 그리고 ${kita.name}의 수많은 생각들.`,
    );
    await era.printAndWait(`경기장에서 키타산을 지켜보는 모든 이들에게 다시 한번 그 진심이 전달되었다.`);
    await era.printAndWait(`${me.name}에게도 말이다.`);
    await dia.say_and_wait(
      `정말 멋진 승리였어요, 트레이너 선생님.`,
    );
    await era.printAndWait(`${me.name}의 곁에서 ${dia.name}가 나직하게 감탄했다.`);
    await dia.say_and_wait(
      `키타짱이 아리마 기념을 이겼네요. 후후~ 정말 축제 같은 분위기예요.`,
    );
    await dia.say_and_wait(
      `게다가 예전의 키타짱이라면 절대 할 수 없었을 일을 해내는 걸 보니, 저까지 지금 분위기에 조금 압도당해 버렸어요.`,
    );
    await era.printAndWait(
      `그래…… ${kita.name}은 마음속으로 ${dia.name}의 말에 소리 없이 동의했다.`,
    );
    await era.printAndWait(
      `과거의 키타산이 아무리 탄탄했다 한들, 승리를 쟁취한 것은 예전의 모습이 아니라 지금의 키타산이다.`,
    );
    await era.printAndWait(
      `${me.name}과(와) 사토노 다이아몬드는 나란히 서서 여전히 손을 흔들고 있는 키타산을 바라보았다.`,
    );
    await era.printAndWait(`그렇게 클래식급 마지막 레이스인 아리마 기념이 막을 내렸다.`);
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 10;
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.sank_hai && extra_flag.rank === 1) {
    await print_event_name('라이벌 없는 세계', kita);
    await era.printAndWait(
      `레이스 전에는 사실 ${kita.name}이 오사카배에서 우승할 수 있을지 우려되기도 했다.`,
    );
    await era.printAndWait(
      'G2에서 G1으로 승격된 만큼 오사카배는 불확실성이 컸고, 출주자들 중에도 강적이 즐비했다.',
    );
    await era.printAndWait('그래서인지 승리한 후에는 키타산 본인조차 조금 놀란 듯 보였다.');
    await era.printAndWait(
      `하지만 놀라움도 잠시, ${kita.name}의 얼굴에는 기쁨과 흥분이 가득 차올랐다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 저 올해 목표를 돌파했어요!`,
    );
    await era.printAndWait(`트레이너의 손을 꼭 잡으며 ${kita.name}이 상기된 목소리로 말했다.`);
    await era.printAndWait(
      '자신이 대단한 특성도 없고, 남들의 눈을 끌 만한 업적을 세울 만한 아이가 아닐지도 모른다고 생각했지만.',
    );
    await era.printAndWait(
      `아무리 서툰 레이스라도 ${kita.name}의 노력 끝에 결국 ${kita.sex}는 극복해냈다.`,
    );
    await era.printAndWait(
      `그리고 지금, ${kita.name}은 이 감정을 트레이너에게 전하고 싶어 한다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님! 역시 할 수 있냐 없냐의 문제가 아니었어요! 달리지 못할 레이스 같은 건 없다고요!`,
    );
    await kita.say_and_wait(
      '이번에 해냈으니 다음에도 반드시 해낼 수 있어요! 그러니 다음 텐노상(봄)도 기대해 주세요!',
    );
    await kita.say_and_wait(
      '다음 레이스에서는 승리의 왕관을 당신께 바칠게요! 제가 증명해 보일게요! 노력하면 안 되는 건 없다는 걸!',
    );
    await era.printAndWait(
      `말 속에 담긴 열기에 가슴이 따뜻해졌다. 키타산의 변함없이 따스한 미소 속에서 ${me.name}은(는) 다시 한번 굳게 결심했다.`,
    );
    await era.printAndWait('반드시 내 담당을 승리로 이끌겠다고.');
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 10;
  } else if (extra_flag.race === race_enum.tenn_spr && extra_flag.rank === 1) {
    const pero = get_chara_talk(18);
    await print_event_name('우뚝 솟은 절벽', kita);
    await era.printAndWait(
      `${kita.name}이 승자의 무대에 서서 팬들에게 손을 흔들 때, 승리에 감동한 팬들의 환호성이 지붕을 뚫을 듯 울려 퍼졌다.`,
    );
    await era.printAndWait(`팬 A 「멋지다, ${kita.name}!」`);
    await era.printAndWait(
      `팬 B 「이거야말로 우리가 기대하던 우마무스메지!」`,
    );
    await era.printAndWait(`팬 C 「꼭 춘추 제패까지 달성해 줘!」`);
    await era.printAndWait(
      `전력으로 달리는 모습에 ${kita.name}을 사랑하는 팬들은 날이 갈수록 늘어만 갔다.`,
    );
    await era.printAndWait(
      `키타산을 지켜보는 모든 이들이 이 승리 후, 포기하지 않는 노력의 표상인 ${kita.name}을 우러러보게 되었다. 어쩌면 그들의 삶의 방식도 조금씩 변하게 될지 모른다.`,
    );
    await era.printAndWait(`하지만————`);
    await pero.say_and_wait(
      `${kita.name}의 트레이너 선생님, 잠시 이야기 좀 할 수 있을까?`,
    );
    await era.printAndWait(
      `음악이 시작되려는 찰나, ${me.name}의 귓가에 한 여성의 목소리가 들렸다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 고개를 돌리자 그곳에는 트레센 학생회 부회장, 『여제』라는 별명을 가진 ${pero.name}가 서 있었다.`,
    );
    await pero.say_and_wait(
      `${kita.name} 양의 승리 라이브를 감상하고 싶어 하는 것 같으니, 짧게 용건만 말하고 가겠다. 괜찮나?`,
    );
    era.println();
    era.printButton('「괜찮아. 말해봐.」', 1);
    await era.input();
    await pero.say_and_wait(
      `고맙군. 현 세대를 대표하는 가장 강력한 우마무스메 중 한 명으로서, ${
        kita.name
      } 양의 노력은 누구나 인정하는 바다. 라이브가 시작되기 전에 본론만 말하지.`,
    );
    await pero.say_and_wait(
      `작년 국화상에서 이루어지지 못했던 두라멘테 양과 ${kita.name} 양의 대결에 대해 어떻게 생각하나?`,
    );
    await era.printAndWait(
      `강렬한 드럼 소리가 귓가를 울리고, 뒤이어 키타산의 맑고 힘찬 노랫소리가 퍼져나갔다.`,
    );
    await era.printAndWait(
      `작년 타카라즈카 기념 이후, 현 세대 최강의 우마무스메 중 한 명이자 키타산의 강적인 두라멘테는 부상으로 인해 국화상 출주를 포기했었다.`,
    );
    await era.printAndWait(
      `그 후로 키타산은 그녀와 겨룰 기회가 거의 없었다. 상대방에게 있어서도 그것은 크나큰 유감이었을 터…… 하지만 이건 혼자서 결정할 수 있는 일이 아니다……`,
    );
    await pero.say_and_wait(
      `나는 소식을 전하러 왔을 뿐이다. 그 레이스에서 매듭을 지을지 말지는 귀하와 ${kita.name} 양의 결단에 달려 있다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 키타산과 상의하고 싶어 하는 기색을 보이자, ${pero.name}는 미소를 지으며 한 걸음 물러났다.`,
    );
    await era.printAndWait(`그녀는 짧은 한마디를 남기고 ${me.name}에게 작별을 고하며 몸을 돌렸다.`);
    await pero.say_and_wait(
      `흥미가 있다면 다음 목적지는 한신으로 정하도록. 타카라즈카 기념에서 그녀와 결판을 내길 바란다.`,
    );
    await era.printAndWait(
      `무대 위에서는 ${kita.name}의 라이브가 절정에 치닫고 있었다. ${kita.name}은 타카라즈카 기념에서의 승부를 구상하며, 다시 담당의 춤사위에 눈을 돌렸다.`,
    );
    await era.printAndWait(
      `${pero.name}가 한 가지 착각한 것이 있다면, ${me.name}은(는) 처음부터 ${kita.name}이 도망칠 가능성 따위는 고려조차 하지 않았다는 점이다.`,
    );
    await era.printAndWait(`그 걱정은 오로지 어떻게 해야 승리할 수 있을지에 대한 고민뿐이었다.`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    extra_flag.rank === 1 &&
    edu_weeks > 96
  ) {
    await print_event_name('손에 쥐어진 바통', kita);
    await era.printAndWait(
      `${kita.name}과 두라멘테의 사투는 결국 ${kita.name}의 승리로 막을 내렸다.`,
    );
    await era.printAndWait(
      `이 화려한 대결 덕분에 한신 경기장은 미어터졌고, 입장권은 판매 시작 30분 만에 매진되었다.`,
    );
    await era.printAndWait(
      `수많은 사람이 이 전설적인 대결을 눈에 담기 위해 모여들었고———— 두 강력한 ${kita.get_uma_sex_title()}는 그 기대에 완벽히 부응했다.`,
    );
    await kita.say_and_wait(`한계까지 쥐어짰어요, 저.`);
    await era.printAndWait(
      `${kita.get_teen_sex_title()}들의 철제 편자가 훑고 지나간 잔디 코스는 엉망이 되어 축축한 흙을 드러내고 있었다.`,
    );
    await era.printAndWait(
      `텅 빈 한신 경기장에 앉아 있는 ${kita.name}의 눈앞에는 상처 입은 잔디밭이 펼쳐져 있었다. ${kita.sex}의 체력은 이미 바닥났고, 정신력 또한 한계까지 조여져 있었다.`,
    );
    await era.printAndWait(`하지만 그럼에도 불구하고 ${kita.name}은 발치 아래의 땅을 응시하고 있었다.`);
    await kita.say_and_wait(
      `곧 은퇴할 두라멘테 양과의 승부는 정말 즐거웠지만, 앞으로의 레이스는 아마 더 힘들어지겠죠.`,
    );
    await kita.say_and_wait(
      `텐노상, 재팬 컵, 아리마 기념…… 거기에 사토노 크라운 양과 슈발 그랑 양이라는 강적들까지. 우와~ 생각만 해도 아찔하네요……`,
    );
    await era.printAndWait(
      `한숨을 내쉬며 푸념을 늘어놓으면서도, ${kita.name}은 발끝으로 뒤집힌 흙덩이를 툭툭 건드렸다.`,
    );
    await kita.say_and_wait(
      `하지만 이게 저희의 레이스잖아요. 승자는 패자의 몫까지 짊어지고 트레이너 선생님과 함께 계속 이겨 나가야 해요. 이건 두라멘테 양과 한 약속이거든요.`,
    );
    await era.printAndWait(
      `${kita.name}은 두 팔을 벌리고 경기장을 등진 채 그 어느 때보다 굳건한 표정을 지었다.`,
    );
    await era.printAndWait(
      `합숙 후인 10월부터는 G1 대회의 고강도 연전이 기다리고 있다. 다음 레이스들은 분명 이전보다 훨씬 고될 것이다.`,
    );
    await era.printAndWait(
      `시련을 견뎌온 노련한 강자들과 두각을 나타내는 신예들, 게다가 쉴 틈 없는 일정 자체가 체력적인 소모를 강요한다.`,
    );
    await era.printAndWait(`하지만. ${kita.name}이라면 반드시……`);
    await kita.say_and_wait(
      `트레이너 선생님, 우리 계속 이겨 나가요!`,
    );
    await era.printAndWait(`그래, ${kita.sex}는 그렇게 말하며 따뜻한 미소를 지어 보일 것이다.`);
    await era.printAndWait(`이것이 바로 ${kita.name}, 검은 축제다.`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    extra_flag.rank === 1 &&
    edu_weeks > 96
  ) {
    await print_event_name('진흙탕 뒤에는 꽃길이', kita);
    await kita.print_and_wait(`이겼어, 승리했어. 이 레이스를 쟁취했어.`);
    await kita.print_and_wait(
      `거친 숨을 몰아쉬며 무거운 소리를 내뱉던 ${kita.name}이 결승선 뒤에서 천천히 걸음을 멈추었다.`,
    );
    await kita.print_and_wait(
      `끊임없이 통증을 호소하는 두 다리는 이미 한계에 도달해 있었다. 사실 레이스 도중 몇 번이나 다리가 꼬여 부딪히기도 했다.`,
    );
    await kita.print_and_wait(
      `떨림을 멈추려 몇 번이고 애를 써보았지만 소용없었다. 결국 모두가 지켜보는 가운데 두 손으로 다리를 꾹 눌러야만 했다……`,
    );
    await kita.say_and_wait(
      `안 돼. 이러면 너무 폼 안 나잖아…… 무슨 말이라도 해야 하는데……`,
      true,
    );
    await kita.say_and_wait(`역시 G1 레이스네요, 명불허전이에요~ 아하하~`, true);
    await kita.print_and_wait(
      `그렇게 감탄을 내뱉어 꼴사나운 모습을 무마하고 싶었지만, 그런 짧은 말조차 내뱉기 힘들 정도로 지쳐 있었다.`,
    );
    await kita.say_and_wait(
      `우와…… 이건 진짜 좀 부끄러운데. 왜 다들 웃는 거야…… 덕분에 다들 이쪽으로 몰려와서 쳐다보잖아……`,
      true,
    );
    await era.printAndWait(
      `우마무스메 A 「키타산 양! 얼굴! 얼굴 봐!」`,
    );
    await era.printAndWait(
      `우마무스메 B 「멍하니 있을 때가 아니야, 빨리 어른 좀 불러와!」`,
    );
    await era.printAndWait(`우마무스메 C 「우와아앗!」`);
    await kita.print_and_wait(
      `응? 다들 왜 이렇게 당황하는 거지? 혹시 얼굴에 진흙이라도 묻었나?`,
    );
    await kita.print_and_wait(
      `아니, 만져봐도 별 느낌 없는데. 끈적한 땀 느낌뿐이야…… 설마 너무 힘들게 달려서 얼굴이 시뻘개져서 못생긴 표정이라도 지은 건가?`,
    );
    await kita.print_and_wait(
      `우와아, 안 돼…… 나도 다이아짱네처럼 반짝반짝 빛나는 ${
        kita.sex_code - 1 ? '아가씨' : '스타'
      } 같은 모습이고 싶었는데, 이거 완전 망신이잖아……`,
    );
    await kita.say_and_wait(
      `가을 텐노상 우승 ${kita.get_uma_sex_title()}가 얼굴을 붉으락푸르락하며 흉한 꼴을 보이다니 안 돼…… 으앙~ 트레이너 선생님은 어디 있는 거야.`,
      true,
    );
    await kita.print_and_wait(
      `고개를 이리저리 돌리며 트레이너 선생님을 찾던 ${
        kita.name
      }은 멀지 않은 곳에서 ${me.name}이(가) 울타리를 뛰어넘어 이쪽으로 달려오는 것을 발견했다.`,
    );
    era.println();
    era.printButton('「키타산! 얼굴! 코는 괜찮아!?」', 1);
    await era.input();
    await kita.print_and_wait(
      `? 왜 트레이너 선생님까지 알 수 없는 소리를 하는 거지…? 아, 레이스 감상을 말하는 건가?`,
    );
    await kita.print_and_wait(
      `${kita.name}은 코를 킁 하고 들이켰다. 비릿한 철분 냄새가 섞인 진흙 맛이 목구멍으로 흘러 들어왔다.`,
    );
    await kita.print_and_wait(
      `사실 게이트가 열릴 때 오작동으로 튕겨 나간 철문에 이마와 코를 직격당해 온통 피칠갑이 된 상태였지만, ${kita.name}은 웃으며 크게 외쳤다.`,
    );
    await kita.say_and_wait(`맛이 엄청 달콤해요!`);
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.japa_cup &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('교차하는 물줄기', kita);
    await era.printAndWait(
      `${kita.name}이 가장 먼저 결승선을 통과하자, ${me.name}은(는) 울타리를 넘어 다급히 ${kita.name}의 곁으로 뛰어갔다.`,
    );
    await era.printAndWait(
      `고작 한 달의 요양을 거친 뒤, ${me.name}의 담당은 재팬 컵 출주를 고집했고 모두의 우려 속에서 코스 위에 섰다.`,
    );
    await era.printAndWait(`하지만 결국 키타산은 승리했고, 그것으로 충분했다.`);
    await kita.say_and_wait(
      `에헤헤, 달리던 중에 편자가 빠져버려서 그냥 맨발로 뛰었어요!`,
    );
    await era.printAndWait(
      `얼굴에 여전히 반창고를 붙인 채 헤헤 웃는 ${kita.name}을 보며, ${me.name}은 가슴 한구석이 저려오는 안쓰러움을 느꼈다.`,
    );
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('미소라는 이름의 불꽃', kita);
    await era.printAndWait(`중계 「${kita.name}! 결승선 통과!」`);
    await era.printAndWait(
      `관중들의 박수와 환호성이 쏟아지는 가운데, ${kita.name}은 하늘을 향해 팔을 높이 들어 올리며 자신의 승리를 선포했다.`,
    );
    await era.printAndWait(
      `과거 두 번이나 아리마 기념에 도전했던 이 ${kita.get_uma_sex_title()}는, 이제 당당히 경기장의 주인공이 되어 아리마 기념의 정점에 섰다.`,
    );
    await era.printAndWait(
      `화려하지는 않지만, 심지어 부상의 흔적을 간직한 몸으로 연말의 무대에서 모두에게 최고의 피날레를 선사했다.`,
    );
    await era.printAndWait(
      `정신을 차려보니 ${
        me.name
      }은(는) 어느새 키타산의 곁으로 다가가, 안쓰러운 마음을 담아 수건으로 ${kita.get_teen_sex_title()}의 이마에 맺힌 땀을 닦아주고 있었다.`,
    );
    era.println();
    era.printButton('「키타산, 기분이 어때?」', 1);
    await era.input();
    await kita.say_and_wait(
      `머릿속이 좀 어지럽네요. 솔직히 전 머리가 좀 나빠서 그런지, 달리는 거랑 생각하는 거 둘 중 하나밖에 못 하나 봐요……`,
    );
    await kita.say_and_wait(
      `하지만, 절 응원해 주신 분들의 마음을 저버리지 않은 것 같아요. 전력을 다한 라이벌들에게도, 제 자신의 노력에게도 떳떳해요.`,
    );
    await era.printAndWait(
      `홀가분한 표정을 지은 ${kita.name}이 까치발을 들고 가느다란 손가락으로 ${me.name}의 팔을 붙잡았다.`,
    );
    await era.printAndWait(
      `상대를 매료시키는 뜨거운 온도의 아름다운 눈동자에 장난스러운 미소를 띠며 ${me.name}과(와) 시선을 맞추었다.`,
    );
    await kita.say_and_wait(
      `그리고 트레이너 선생님 당신의 기대도 저버리지 않았어요.`,
    );
    await kita.say_and_wait(`헤헤헤~ 제 인생 마지막 레이스가 이렇게 끝나서 정말 다행이에요……`);
    await era.printAndWait(
      `${kita.get_teen_sex_title()}의 얼굴은 수줍음과 질주의 여운으로 붉게 달아올랐고, 그런 고백을 한 ${
        kita.sex
      } 본인도 어쩔 줄 몰라 하는 것 같았다.`,
    );
    await era.printAndWait(
      `아직 어린아이구나, ${me.name}은(는) 그렇게 생각하며 두 팔을 벌려 ${kita.name}을 꽉 껴안았다.`,
    );
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 15;
  } else if (extra_flag.rank === 1) {
    await print_event_name('레이스 우승!', kita);
    await kita.say_and_wait(`트레이너 선생님! 저, 이겼어요!`);
    await kita.say_and_wait(`레이스를 보러 와주신 분들도 기뻐해 주시는 것 같아서 정말 다행이에요!`);
    await era.printAndWait(`기쁘게 꼬리를 흔들며 ${kita.name}은 즐거운 표정을 지었다.`);
    await era.printAndWait(
      `방금 고향의 아버지와 통화하며 칭찬을 듬뿍 받은 모양이다. 아버지가 저녁에 축하주라도 마시겠다고 하셨다며 좋아하고 있었다.`,
    );
    await era.printAndWait(
      `그럼 우리도 오늘 주스로 축배를 들자며, ${me.name}은(는) 음료를 꺼내 두 잔의 주스를 따랐다.`,
    );
    await kita.say_and_wait(`와아, 트레이너 선생님, 건배!`);
    await era.printAndWait(
      `종이컵이 부딪히는 소리와 함께 ${kita.name}은 손목에 튄 주스도 아랑곳하지 않고 승리를 만끽했다.`,
    );
  } else if (extra_flag.rank <= 5) {
    // 통용 레이스 입상
    await print_event_name('레이스 입상!', kita);
    await era.printAndWait(
      `대기실에서 ${kita.name}은 물을 벌컥벌컥 마신 뒤, 길게 숨을 내뱉었다.`,
    );
    await kita.say_and_wait(
      `푸하~ 이제 좀 살 것 같네요! 고마워요 트레이너 선생님…… 어라? 왜 그런 표정을 짓고 계세요?`,
    );
    await era.printAndWait(
      `걱정스러운 표정의 ${me.name}을(를) 보며, ${kita.name}은 헤헤 웃으며 병뚜껑을 닫았다.`,
    );
    await kita.say_and_wait(
      `그저 우승을 못 했을 뿐인걸요. 트레이너 선생님, 너무 걱정하지 마세요.`,
    );
    await kita.say_and_wait(
      `저도 정말 아쉽긴 하지만, 다음번엔 두 배로 노력해서 반드시 이길 테니까요!`,
    );
    await era.printAndWait(
      `오히려 자신을 위로하는 검은 ${kita.get_uma_sex_title()}를 보며 ${
        me.name
      }은(는) 안심하는 동시에 마음속으로 굳게 다짐했다.`,
    );
    await era.printAndWait('다음엔 반드시 이긴다.');
  } else if (extra_flag.rank <= 10) {
    await print_event_name('레이스 패배!', kita);
    await era.printAndWait(
      `대기실 안, ${kita.name}의 스마트폰이 계속해서 진동했다.`,
    );
    await kita.say_and_wait(
      `반 친구들이 보내준 위로 문자예요. 다음번엔 꼭 복수하라고, 그렇게 적혀 있네요.`,
    );
    await kita.say_and_wait(
      `상점가 아주머니도 문자를 주셨어요. 다음에도 응원하러 오시겠대요.`,
    );
    await era.printAndWait(
      `화면의 빛이 키타산의 얼굴을 비추었다. ${me.name}은 그 얼굴에 낙담한 기색이 전혀 없음을 발견했다.`,
    );
    await era.printAndWait(
      `오히려 다시 일어설 준비가 된 사람만이 지을 수 있는 표정이었다.`,
    );
    await kita.say_and_wait(
      `이렇게 많은 분이 저를 응원하고 격려해 주시는데, 제가 낙담할 자격이 어디 있겠어요!`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 돌아가면 평소보다 두 배로 훈련해요!`,
    );
    await era.printAndWait(`그렇게 말하며 키타산은 자리에서 일어났다. 이전보다 훨씬 기운찬 모습이었다.`);
  } else {
    await print_event_name('레이스 패배!', kita);
    await kita.say_and_wait('으으으으…… 이번에도 졌네요……');
    await era.printAndWait(
      '풀이 죽은 키타산이 빨대로 주스 컵에 보글보글 거품을 불며 시무룩한 표정을 지었다.',
    );
    await kita.say_and_wait('정말 분해요…… 다음엔 반드시 이길 거야……');
  }
};