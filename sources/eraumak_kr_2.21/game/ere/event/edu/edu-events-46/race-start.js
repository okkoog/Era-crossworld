const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

/**
 * @param {HookArg} hook
 * @param {RaceStartParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(46, 0),
    falcon = new CharaTalk(46),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:46:육성턴수합산');

  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name(`첫 오디션!`, falcon);
    await era.printAndWait(`강가 풀밭\n`);
    await falcon.say_and_wait(
      `목표는! 톱 우마돌——팔코, 이제 정식으로 데뷔해⭐`,
    );
    await say_by_passer_by(`팬들`, `드디어 팔코가 데뷔하는 거야?!`);
    await falcon.say_and_wait(
      `맞아! 이 날을 위해서 팔코는 계속 노력해왔어! 비록 팔코도 모두가 조금은 참아줬으면 좋겠다고 생각하지만……`,
    );
    await falcon.say_and_wait(`왜냐하면 팔코도 모두와 마찬가지로 기분이 하늘 끝까지 솟구칠 정도로 두근거리니까♪`);
    await say_by_passer_by(`팬들`, `그 기세 그대로 쭉 달려나가자!`);
    await falcon.say_and_wait(
      `팔코는 레이스 시작부터 라이브가 끝날 때까지 계속 반짝반짝 빛날 거야⭐……아아, 정말 흥분돼! 신기한 기분이야, 심장이 멈추지 않고 두근두근하며 대답해주고 있어……`,
    );
    await falcon.say_and_wait(`약속이야, 다들 관객석에서 팔코의 무대를 지켜봐줘⭐`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(`\n대기실\n`);
    await falcon.say_and_wait(`리본…… ok! 등 뒤의 번호표…… 이상 무!`);
    await era.printAndWait(
      `전신 거울 앞에 선 ${falcon.name}은 자신의 모습을 몇 번이고 확인했다.`,
    );
    await falcon.say_and_wait(
      `언제나 응원해주는 모두를 위해서…… 팔코는 반드시 이길 거야!`,
      true,
    );
    await falcon.say_and_wait(`팔코! 파이팅!`);
    await era.printAndWait(`${falcon.name}이 주먹을 쥔 오른손을 높이 치켜들었다.`);
    era.printButton(`경기장을 무대라고 생각하면 돼`, 1);
    await era.input();
    await era.printAndWait(
      `옆에서 기다리고 있던 ${me.name}은(는) 처음으로 데뷔전에 나서는 ${falcon.name}을 바라보았다.`,
    );
    await me.say_and_wait(`팔코가 반드시 승리할 거라고 믿어!`);
    await falcon.say_and_wait(`${callname}도 참!`);
    await era.printAndWait(`${me.name}은(는) ${falcon.name}의 양손이 미세하게 떨리고 있는 것을 느꼈다.`);
    await falcon.say_and_wait(
      `팬 여러분은 어디에 앉아서 팔코를 기다려 줄까♪ 반짝반짝 빛나는 팔코가 반드시 승리를 가져다줄게⭐`,
    );
    await era.printAndWait(
      `그것은 단순한 위로가 아니라, ${falcon.name}이 그동안 쌓아온 훈련 성과에 대한 확신이었다.`,
    );
    await falcon.say_and_wait(
      `${callname}은(는) 관객석에서 팔코의 멋진 활약을 제대로 지켜봐줘♪`,
    );
    await falcon.say_and_wait(`……그리고, 팔코에게는 질 수 없는 이유가 하나 더 있어!`, true);
    await falcon.say_and_wait(
      `부정적인 생각은 여기서 끝! 팔코의 톱 우마돌로 향하는 길은 여기서부터 시작이야!`,
      true,
    );
    await falcon.say_and_wait(
      `반짝이는 우마돌——팔코! 이제부터 관객석의 모든 사람이 눈도 깜빡이지 못하고 팔코를 주목하게 만들겠어!`,
    );
    await era.printAndWait(`${falcon.name}이 경기장으로 향했다.`);

  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`사츠키상에서 빛나는 팔코`, falcon);
    await era.printAndWait(`기자 회견에서 사츠키상 출주를 선언한 후.`);
    await era.printAndWait(
      `${falcon.name}이 적성에 맞지 않는 경기장에서 승리할 수 있을지에 대한 우려도 있었지만, 더트에서 활약하던 ${falcon.name}이 어떤 활력을 보여줄지에 대한 기대가 더 컸다.`,
    );
    await era.printAndWait(`대기실 안`);
    await falcon.say_and_wait(`흐흥♪ 이 정도면 팔코는 준비 완료야!`);
    await era.printAndWait(`${falcon.name}은 전신 거울 앞에서 다시 한번 승부복을 확인했다.`);
    await falcon.say_and_wait(`${callname}은(는) 어때 보여?`);
    era.printButton(`정말 눈부셔!`, 1);
    await era.input();
    await falcon.say_and_wait(`이대로 모든 팬의 시선을 전부——뺏어버리겠어!`);
    await falcon.say_and_wait(`……그러고 보니, 팔코가 이 승부복을 입는 것도 이번이 처음이네……`);
    await era.printAndWait(
      `${falcon.name}은 갑자기 쑥스러운 듯 ${me.name}과(와) 마주 보던 시선을 피했다.`,
    );
    await falcon.say_and_wait(`……아무것도 아냐⭐`);
    await era.printAndWait(`그러고는 무언가를 얼버무리는 듯 입을 가리고 웃었다.`);
    await falcon.say_and_wait(`이번에야말로 정말 출발이야!`);
    await era.printAndWait(`${falcon.name}이 문손잡이를 잡고 열려고 했다.`);
    era.printButton(
      `내 시선을 뺏은 것처럼, 경기장의 모든 사람의 시선을 전부 뺏어버리고 와!`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`⭐`);
    await era.printAndWait(`${falcon.name}은 눈을 찡긋하고는 대기실 문을 닫았다.`);

  } else if (extra_flag.race === race_enum.japa_dir && edu_weeks < 95) {
    await print_event_name(`묘한 초조함`, falcon);
    await falcon.say_and_wait(`……음——`);
    await era.printAndWait(
      `${me.name}이(가) 대기실에 들어서자 기운이 조금 없는 ${falcon.name}의 모습이 보였다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 이번 레이스에는 사람들이 많이 보러 올까?`,
    );
    await me.say_and_wait(
      `팔코가 사츠키상에 나갔던 덕분에, 이제 잔디 쪽 관객들도 더트에서 열심히 빛나는 팔코를 알고 있어.`,
    );
    await falcon.say_and_wait(`잔디 경기장에 비하면 아직……`);
    await me.say_and_wait(
      `비록 아직 부족할지도 모르지만, 팔코의 노력 덕분에 더트도 조금씩 인기가 생기고 있어.`,
    );
    await falcon.say_and_wait(`정말?`);
    await falcon.say_and_wait(`팔코가 정말로 더트 레이스의 분위기를 띄울 수 있을지도 모르겠네!`);
    await era.printAndWait(`노력은 결국 결실을 맺는 법이었다.`);
    era.printButton(`게다가 다들 팔코의 등장을 기대하고 있어!`, 1);
    await era.input();
    await falcon.say_and_wait(
      `……맞아! 관객석에서 환호해주는 팬들을 위해서, 팔코는 이대로 단숨에 골인까지 달려갈게!`,
    );
    await falcon.say_and_wait(
      `……${callname}, 레이스 시작까지 얼마나 남았어?`,
    );
    await era.printAndWait(
      `${me.name}은(는) 스마트폰을 ${falcon.name}에게 건네주었다. 화면에 표시된 시간은 레이스 시작까지 30분 전이었다.`,
    );
    await falcon.say_and_wait(`그렇다면!`);
    await era.printAndWait(`${falcon.name}은 가져온 가방에서 두꺼운 포스터 뭉치를 꺼냈다.`);
    await falcon.say_and_wait(
      `레이스가 시작되기 전에, 근처에 있는 사람들에게 팔코를 더 알리고 올게!`,
    );
    await era.printAndWait(
      `${me.name}이(가) 대답하기도 전에, ${falcon.name}은 ${me.name}의 손목을 잡고 밖으로 뛰어나갔다.`,
    );
    await falcon.say_and_wait(`팔코! 파이팅!`);
    await era.printAndWait(
      `그 후, ${falcon.name}은 출주 ${falcon.get_uma_sex_title()}임에도 레이스 직전까지 홍보 공연을 한 것으로 소소하게 화제가 되었다.`,
    );
    await era.printAndWait(
      `얼마 지나지 않아, 타즈나 씨의 공포스러운 미소와 다음 달 월급 삭감 소식에 ${me.name}은(는) 다시는 이런 일이 없을 거라고 맹세해야 했다.`,
    );

  } else if (extra_flag.race === race_enum.jbc_cls && edu_weeks < 95) {
    await print_event_name(`초조함의 시작`, falcon);
    await era.printAndWait(`JBC 클래식, 예년 같으면 관객 수가 2만 명을 넘지 않았을 터였다.`);
    await era.printAndWait(`하지만`);
    await falcon.say_and_wait(
      `${callname}, 레이스가 시작되기 전에 이 전단지들을 다 돌려야 해!`,
    );
    await era.printAndWait(`팔코의 노력 덕분인지 오가는 팬들의 발길이 끊이지 않았다?!`);
    await me.say_and_wait(`팔코라면 정말 가능할지도 모르겠네.`);
    await era.printAndWait(
      `평소 팔코의 건강을 걱정하던 ${me.name}이었지만, 마음 한구석에서는 비현실적인 기대를 품기 시작했다.`,
    );
    await say_by_passer_by(`행인A`, `어? 이 근처에서 레이스가 있어?`);
    await say_by_passer_by(`행인B`, `더트 레이스? 별로 관심 없…… 팔코가 나온다고?`);
    await say_by_passer_by(
      `행인C`,
      `팔코? 우마터에서 화제가 된 그 아이?`,
    );
    await say_by_passer_by(`행인A`, `잠깐만, 나도 같이 가.`);
    await era.printAndWait(`어느새 전단지는 순식간에 매진되었다.`);
    await falcon.say_and_wait(`팔코, 생각보다 훨씬 더 인기쟁이일지도……`);
    await falcon.say_and_wait(`예전에는 이만큼 돌리려면 적어도 오전 내내 걸렸는데.`);
    await era.printAndWait(`그렇게 말하면서도 ${falcon.name}의 미소는 감출 길이 없었다.`);
    await falcon.say_and_wait(
      `어쩌면 팔코, 생각보다 훨씬 더 많은 사랑을 받는 사람이 된 걸까나.`,
    );
    await me.say_and_wait(`다들 팔코를 응원하고 있어.`);
    await falcon.say_and_wait(`응, 계속 팔코를 지지해준 모두를 위해서.`);
    await falcon.say_and_wait(`팔코는 2000%의 노력으로 우승할 거야!`);
    await era.printAndWait(`무형의 기운이 ${falcon.name}을 감싸안았다.`);
    await falcon.say_and_wait(`지체할 시간 없어, 지금 바로 출발하자!`);
    await me.say_and_wait(`레이스는 아직 시작 안 했어.`);
    await era.printAndWait(`말이 끝나기도 전에 ${falcon.name}은 달려나갈 기세였다.`);
    await falcon.say_and_wait(
      `이제 ${callname}을(를) 깜짝 놀라게 해줄게!`,
    );
    await era.printAndWait(`${falcon.name}은 결심을 굳히고 경기장으로 달려갔다.`);

  } else if (extra_flag.race === race_enum.toky_dai && edu_weeks <= 95) {
    await print_event_name(`${falcon.name}`, falcon);
    await era.printAndWait(
      `다시 마음을 다잡은 ${falcon.name}은 발걸음을 조금 늦추어 나아가기로 했다.`,
    );
    await era.printAndWait(`계속해서 자신을 찾아 헤매주던 팬들을 기다리며.`);
    await era.printAndWait(`트레이닝실`);
    await me.say_and_wait(`이제부터는 팔코의 노력을 기대하고 있을게.`);
    await falcon.say_and_wait(
      `${callname}도 앞으로 관객석에서 팔코의 성장을 지켜봐줘.`,
    );
    await era.printAndWait(`사실 이 ${falcon.get_teen_sex_title()}는 의외로 강인했다.`);
    await era.printAndWait(
      `다시 생각한 끝에 대부분의 일정을 취소하고, 중요한 일에 집중하기로 했다.`,
    );
    await era.printAndWait(
      `다시 방향을 잡고 착실하게 전진하기 시작한 지 이제 겨우 한 달 남짓이었다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 왼쪽 머리 장식 좀 조절해줄 수 있어?`,
    );
    await era.printAndWait(
      `전신 거울 속의 ${falcon.get_teen_sex_title()}가 다시 정상 상태로 돌아온 것을 보며, 말로 다 못 할 기쁨이 솟구쳤다.`,
    );
    await falcon.say_and_wait(`비록 도쿄 대상전이 아리마 기념과는 비교할 수 없을지 몰라도——`);
    await era.printAndWait(`찾아온 관객들은 이미 예년의 인원수를 훨씬 뛰어넘어 있었다.`);
    await falcon.say_and_wait(`적어도, 민들레로서 팔코는 정말 행복해♪`);
    await era.printAndWait(`${falcon.name}은 살며시 대기실 문을 닫았다.`);

  } else if (extra_flag.race === race_enum.febr_sta && edu_weeks > 95) {
    await print_event_name(`선배와 후배 (1)`, falcon);
    await falcon.say_and_wait(
      `톱 우마돌을 향해 나아가는 팔코의 레이스를 다들 보러 와줬으면 좋겠어♪`,
    );
    await falcon.say_and_wait(`팔코라면 반드시 최고의 레이스를 모두에게 보여줄 테니까⭐`);
    await era.printAndWait(
      `레이스 전에 전단지를 나누어 주는 것은 이제 ${me.name} 일행 사이의 암묵적인 룰이 된 듯했다.`,
    );
    await era.printAndWait(`${falcon.get_uma_sex_title()} 「저, 저기 팔코 선배님인가요?」`);
    await era.printAndWait(
      `지방 트레센에서 온 듯한 ${falcon.get_uma_sex_title()}가 ${
        falcon.name
      }을 알아차린 모양이었다.`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「팔코 선배님! 저도 선배님처럼 더트에서 아이돌로 데뷔하고 싶어요!」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「선배가 도쿄 대상전에서 달리는 모습을 보고 용기를 얻었어요. 그래서 저도 사람들에게 희망을 주는 아이돌이 되고 싶어요!」`,
    );
    await era.printAndWait(
      `동경 어린 눈빛으로 ${falcon.name}을 바라보는 ${falcon.get_uma_sex_title()}.`,
    );
    await falcon.say_and_wait(`……팔코는`, true);
    await falcon.say_and_wait(
      `우마돌이 되고 싶어 했던 그 처음의 마음을 반드시 ${me.name}에게 전해줄게!`,
    );
    await era.printAndWait(`복잡한 감정을 품은 팔코가 경기장으로 향했다.`);

  } else if (extra_flag.race === race_enum.teio_sho && edu_weeks > 95) {
    await print_event_name(`제왕상 전의 준비`, falcon);
    await era.printAndWait(
      `${falcon.name}이 곧 제왕상에 도전한다는 소식이 우마터 전체에 퍼졌다.`,
    );
    await era.printAndWait(
      `팔코의 질주와 노래에 매료된 사람들이 예매 시작과 동시에 티켓을 전부 매진시켰다.`,
    );
    await era.printAndWait(
      `더트가 ${falcon.name}을 선택했다기보다, ${falcon.name}이 더트를 완성시켰다고 해야 할 정도였다.`,
    );
    await era.printAndWait(`휴게실 안에서`);
    await falcon.say_and_wait(`……팔코, 역시 조금 긴장되네`);
    await era.printAndWait(
      `평소와 다르게 ${falcon.name}은 곧 시작될 레이스를 앞두고 망설이는 모습을 보였다.`,
    );
    await falcon.say_and_wait(
      `만약 실수라도 하면, 응원해주는 팬들과 후배들이 나에게 실망하지 않을까 해서.`,
    );
    await me.say_and_wait(
      `팔코의 팬이자 ${falcon.name}의 트레이너로서, 나는 믿고 있어.`,
    );
    await me.say_and_wait(`팔코라면 분명 문제없을 거야!`);
    await falcon.say_and_wait(
      `${callname}이(가) 그렇게 말해준다면, 팔코 노력해볼게!`,
    );
    await era.printAndWait(`${me.name}은(는) 시간을 확인했다. 슬슬 출발해야 할 때였다.`);
    await me.say_and_wait(`그럼, 이제 좋은 소식을 기다리고 있을게, 팔코!`);
    await falcon.say_and_wait(
      `좋아! 이제 후배 ${falcon.get_uma_sex_title()}에게 선배 아이돌이 어떻게 하는지 보여주겠어!`,
    );
    await era.printAndWait(`선배 우마돌로서의 팔코가 경기장으로 향했다.`);

  } else if (extra_flag.race === race_enum.jbc_cls && edu_weeks > 95) {
    await print_event_name(`JBC 클래식·우마돌의 첫걸음`, falcon);
    await era.printAndWait(`우마돌로 향하는 길의 시험대인 JBC 클래식이 시작되었다.`);
    await era.printAndWait(
      `${falcon.name}이 참가한다는 소식에 클래식 레이스의 관객 수가 순식간에 폭증했다.`,
    );
    await era.printAndWait(`웬만한 비인기 잔디 G1 레이스와 맞먹을 정도였다.`);
    await era.printAndWait(`그리고 팔코에게 있어서...`);
    await falcon.say_and_wait(
      `팔코 같은 평범한 ${falcon.get_uma_sex_title()}에게 지금까지의 승리는 전부 기적 같은 일이었어.`,
    );
    await falcon.say_and_wait(`그럼에도 불구하고 팔코는 계속해서 빛나고 싶어.`);
    await me.say_and_wait(
      `그렇다면 이제 마음껏 해봐. 팔코, 네 생각대로 이 그림을 그려나가는 거야!`,
    );
    await me.say_and_wait(
      `톱 우마돌은 스스로가 정의하는 거야!`,
    );
    await era.printAndWait(
      `대기실 안에서도 밖에서 들려오는 귀가 먹먹할 정도의 함성 소리가 은은하게 전해졌다.`,
    );
    await falcon.say_and_wait(`그럼에도 팔코는 역시 계속 빛나고 싶어.`);
    await falcon.say_and_wait(`이제부터 팔코가 반짝이는 모습을 똑똑히 지켜봐줘!`);
    await era.printAndWait(`아직은 앳된 우마돌이 경기장으로 향했다.`);

  } else if (extra_flag.race === race_enum.cham_cup && edu_weeks > 95) {
    await print_event_name(`챔피언스 컵·모래투성이 톱 아이돌!`, falcon);
    await era.printAndWait(`챔피언스 컵이 시작되었다.`);
    await era.printAndWait(`클래식 레이스를 거친 후, 이제 챔피언스 컵을 마주하게 되었다.`);
    await era.printAndWait(
      `고생하며 전단지를 돌리던 예전과는 달리, ${falcon.name}의 츨주 소식을 들은 팬들이 자발적으로 좌석을 구매했다.`,
    );
    await falcon.say_and_wait(`팔코, 생각했던 것보다 훨씬 더 사랑받고 있나 봐.`);
    await era.printAndWait(`오히려 밖에서 들려오는 소란스러움이 거대한 압박감으로 다가왔다.`);
    await me.say_and_wait(`억지로 기운 차리고 있는 거야?`);
    await era.printAndWait(`미세하게 떨리는 손. 보이지 않는 압박감에 맞서 팔코.`);
    await falcon.say_and_wait(`다음 레이스도 팔코는 힘낼 거야!`);
    await me.say_and_wait(`무운을 빌게…… 혹시라도 힘들면 나를 찾아와.`);
    await era.printAndWait(`잠시 멈칫한 후, ${falcon.name}이 대기실 문을 열었다.`);
    await era.printAndWait(
      `귀를 찢는 듯한 환호성 속에서 ${falcon.name}은 경기장으로 걸어 나갔다.`,
    );

  } else if (extra_flag.race === race_enum.toky_dai && edu_weeks > 95) {
    await print_event_name(`도쿄 대상전·The Biggest Stage`, falcon);
    falcon.print(`이 날이 생각보다 훨씬 빨리 찾아왔어.`);
    falcon.print(`고생하며 흘린 땀방울, 노력의 가치가 모두 이 순간에 드러날 거야.`);
    falcon.print(
      `톱 우마돌이라는 목표를 쫓기 위해, 나를 지지해주는 팬들을 위해 지금까지 계속 노력해왔어.`,
    );
    falcon.print(`분명히 그런데, 스스로를 설득할 수가 없어.`);
    falcon.print(`마음속 깊은 곳에서 들려오는 목소리가 계속 물어봐. 이렇게 하는 게 정말 맞는 거야?`);
    falcon.print(`가슴이 아파, 마치 심장을 쥐어짜는 것 같아.`);
    falcon.print(`팔코는 답을 모르겠어.`);
    falcon.print(`하지만 어렴풋이 느껴져. 마지막 정답은 여기서 보일 거라는 걸.`);
    era.printButton(`슬슬 출발할 시간이야, 팔코.`, 1);
    await era.input();
    await falcon.say_and_wait(`……가자, 그 답을 찾기 위해서.`);
    await era.printAndWait(
      `모래 섞인 바람 때문에 거의 눈을 뜰 수 없었던 ${me.name}은(는), 아련하게 경기장으로 향하는 ${falcon.name}의 뒷모습에서 처음 만났을 때의 ${falcon.get_teen_sex_title()}의 모습을 겹쳐 보았다.`,
    );
  }
};