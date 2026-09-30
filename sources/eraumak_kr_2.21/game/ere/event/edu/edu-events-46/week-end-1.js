const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers[95 + 10] = async (falcon, me, callname) => {
    await print_event_name('현기증', falcon);
    await era.printAndWait(`트레이닝실\n`);
    await era.printAndWait(`의욕이 생기지 않았다.`);
    await era.printAndWait(
      `어쩌면 ${falcon.name}의 단호한 태도 때문에, 어떤 방면에서 접근해야 할지 알 수 없었기 때문일지도 모른다.`,
    );
    await era.printAndWait(
      `${falcon.name}에게 미움받고 있는 걸까? ${falcon.name}의 콘서트를 관람하고 싶다고 해도 ${falcon.name}은 이런저런 이유를 대며 거절했다.`,
    );
    await era.printAndWait(`하지만——`);
    await era.printAndWait(`거절당했기에 더욱 공포스러웠다.`);
    await me.say_and_wait(`빌어먹을!`);
    await era.printAndWait(`억지로 책상을 내리치며 마음속의 감정을 발산했다.`);
    await era.printAndWait(
      `${falcon.sex}에게 말해주고 싶었다. 아이돌로서 자신의 행복을 추구하는 것은 아무런 문제가 없다고.`,
    );
    era.drawLine();
    falcon.print(`모두 고마워!`);
    falcon.print(`정기적인 2시간 콘서트가 끝난 후, 또 단숨에 세 곡을 연달아 불렀어.`);
    falcon.print(`조금만 쉬면, 다시 단숨에 3시간은 더 노래할 수 있어.`);
    falcon.print(`하지만, 도저히 의욕이 나질 않아.`);
    falcon.print(`만약 팬분들에게 이렇게 의욕 없는 모습을 보인다면.`);
    falcon.print(`아마 팔코 스스로도 자신을 용서할 수 없겠지.`);
    falcon.print(`${callname}에게 고민을 털어놓는다면——`);
    falcon.print(`지친 몸에서 나약한 말이 흘러나왔다.`);
    await falcon.say_and_wait(
      `팔코는 이제 소중한 ${callname}을 위험하게 만들 순 없어.`,
      true,
    );
    falcon.print(
      `상처 부위를 움켜쥐고 혈흔 속에 널브러져 있던 ${callname}.`,
    );
    falcon.print(`안 돼, 더 이상 생각하면 안 돼.`);
    falcon.print(
      `${falcon.name}은 ${falcon.get_uma_sex_title()} 아이돌로서 이미 실격이야.`,
    );
    await era.printAndWait(`하지만——`);
    falcon.print(
      `마음속의 의문을 억지로 짓눌렀다. 완벽한 ${falcon.get_uma_sex_title()} 아이돌에게는 어떤 흠집도 있어서는 안 된다.`,
    );
    await falcon.say_and_wait(`팔코, 힘내자!`);
    await era.printAndWait(
      `다시 스스로를 다독이며, ${falcon.get_uma_sex_title()} 아이돌로서의 ${falcon.name}은 백스테이지에서 다시 무대 위로 돌아갔다.`,
    );
  };

  handlers[95 + 17] = async (falcon, me, callname) => {
    await print_event_name('만약 눈물이 다시 눈동자로 돌아간다면', falcon);
    await era.printAndWait(
      `마음을 굳게 먹은 후, ${me.name}은(는) 억지로 ${falcon.name}을 끌고 갔다.`,
    );
    await me.say_and_wait(
      `미안해. 비록 이게 매우 무례한 일일지 모르지만, 무언가 바꿀 수 있다면 아마 이렇게 하는 수밖에 없을 거야.`,
    );
    await era.printAndWait(
      `다짜고짜 ${falcon.sex}의 손목을 강하게 잡아 끌며, ${falcon.sex}을(는)을 데리고 목표 지점으로 향했다.`,
    );
    await era.printAndWait(
      `처음에는 놀라서 갑자기 힘을 주는 듯했으나, 순식간에 힘이 쭉 빠져버렸다.`,
    );
    await era.printAndWait(`${me.name}의 내면은 곧 실현될 아름다운 동경으로 가득 차 있었다.`);
    await era.printAndWait(
      `${falcon.sex}에게 말해주고 싶었다. 아이돌로서 자신의 행복을 추구하는 것은 아무런 문제가 없다고.`,
    );
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}은 공터의 풀밭에 도착했다.`,
    );
    await era.printAndWait(
      `견디기 힘든 어색한 분위기가 ${me.name}들 사이에 퍼져 나갔다.`,
    );
    await era.printAndWait(
      `혼자서 그렇게 무거운 압박을 짊어질 필요 없어. 이전의 일은 그저 사고였을 뿐이야. 그저 주의를 기울이기만 하면...`,
    );
    await era.printAndWait(
      `만약 ${me.name}이(가) ${falcon.name}이라면, 이런 말로 스스로를 설득할 수 있을까?`,
    );
    await me.say_and_wait(`……나를 조금만 더 믿어줘.`);
    await era.printAndWait(`팔코는 이미 한계에 다다라 있었다.`);
    await falcon.say_and_wait(`……에?`);
    await era.printAndWait(`${falcon.name}의 말투 속에 당혹감과 의문이 섞여 있었다.`);
    await falcon.say_and_wait(
      `팔코는 언제나 ${callname}을 믿고 있다구?`,
    );
    await era.printAndWait(`아니야, ${me.name}은(는) 고개를 저었다.`);
    await me.say_and_wait(
      `단순히 트레이너와 ${falcon.get_uma_sex_title()} 사이뿐만 아니라, 팬과 아이돌 사이의 관계도 넘어선, 나는 ${falcon.name}에게 가장 신뢰받는 사람이 되고 싶어.`,
    );
    await falcon.say_and_wait(
      `……설령 팔코 때문에 ${callname}이 상처를 입는다고 해도?`,
    );
    era.printButton(`${falcon.name}에 대한 나의 사랑은 이 정도로는 흔들리지 않아.`, 1);
    era.printButton(`아이돌 팔코에 대한 나의 사랑은 이 정도로는 흔들리지 않아.`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`……에?`);
      await era.printAndWait(
        `마치 믿을 수 없는 말을 들은 것처럼, ${falcon.name}의 눈동자가 순식간에 커졌다.`,
      );
      await falcon.say_and_wait(
        `……정말 싫어…… 너무 좋아…… ${callname}... 어떻게 그럴 수 있어……`,
      );
      await falcon.say_and_wait(`이대로라면 팔코는…… 더 이상…… 미안해.`);
      await era.printAndWait(
        `착각인 것처럼, 턱에서 전해지는 격통과 함께 ${me.name}은(는) 어둠 속으로 빠져들었다.`,
      );
      await era.printAndWait(`그렇게 깊은 잠에 빠졌다.`);
    } else {
      await falcon.say_and_wait(`……팔코인가?`);
      await era.printAndWait(`${falcon.name}의 표정이 굳어졌다.`);
      await falcon.say_and_wait(
        `팔코…… 역시 팔코여야만 하는 거구나…… ${callname}.`,
      );
      await era.printAndWait(`마치 굉장히 그리워하는 듯이 눈을 가늘게 떴다.`);
      await falcon.say_and_wait(
        `있지…… 팔코를 봐줘. ${callname}을 위해서라면 팔코는 뭐든지……`,
      );
      await era.printAndWait(`흐릿하게 타오르던 눈빛이 순식간에 가라앉았다.`);
      await falcon.say_and_wait(
        `안 돼! 이런 팔코는 ${callname}이 좋아하는, 모든 팬을 포용하는 ${falcon.get_uma_sex_title()} 아이돌이 아니야!`,
      );
      await era.printAndWait(`죄책감이 바늘처럼 가슴을 찔렀다.`);
      await falcon.say_and_wait(
        `무대 위의 팔코는 모든 팬의 것이야. 이렇게…… 이런 행동은 용납될 수 없어.`,
      );
      await falcon.say_and_wait(
        `팔코가 ${falcon.get_uma_sex_title()} 아이돌로서의 원칙을 버렸기 때문에, 결과적으로 ${callname}은 마치 낡은 인형처럼 피바다 속에 버려지게 되는 거야.`,
      );
      await falcon.say_and_wait(
        `하지만, 분명 모든 팬에게 사랑을 평등하게 나누겠다고 맹세했는데, 하지만…… ${callname}을 볼 때면 팔코는 역시 더 많은 사랑을 쏟고 싶어져.`,
      );
      await falcon.say_and_wait(
        `팔코가 사랑을 전부 ${callname}에게 쏟지는 않을 거야. 하지만 사랑을 ${callname}에게 쏟는 순간, 팔코는 더 이상 팔코가 아니게 돼.`,
      );
      await era.printAndWait(
        `단순한 실패보다, 최선의 노력 끝에 마주한 딜레마가 더 비극적으로 느껴졌다.`,
      );
      await falcon.say_and_wait(`……만약 그렇다면.`);
      await era.printAndWait(
        `착각인 것처럼, 턱에서 전해지는 격통과 함께 ${me.name}은(는) 어둠 속으로 빠져들었다.`,
      );
      await era.printAndWait(`그렇게 깊은 잠에 빠졌다.`);
    }
    era.drawLine();
    await era.printAndWait(`${me.name}은(는) 또다시 이 풀밭 위에 서 있었다.`);
    await era.printAndWait(
      `폐허 틈새의 풀밭, 먼 하늘에서 흘러오는 적란운, 그 그리운 아름다운 시간.`,
    );
    await era.printAndWait(`그리고 옆에 있는 ${falcon.teen_sex_title}.`);
    await era.printAndWait(`그래, 이런 곳이야말로 제대로 대화하기에 어울린다.`);
    await me.say_and_wait(`팔코——`);
    await era.printAndWait(`팔코는 아무런 대답이 없었다.`);
    await me.say_and_wait(`팔코?`);
    await era.printAndWait(
      `${me.name}은(는) 조심스럽게 곁에 있는 ${falcon.teen_sex_title}를 건드려 보았다.`,
    );
    await era.printAndWait(`체온은 정상이었고, 손가락으로 느껴지는 피부의 감촉도 차이가 없었다.`);
    await me.say_and_wait(
      `자세히 보니, 마치 한 줄기 가는 은색 실이 ${falcon.sex}을(는)을 조종하고 있는 것 같았다.`,
    );
    await era.printAndWait(`마치 인형처럼.`);
    await me.say_and_wait(`만약 은색 실을 따라가면, 조종하는 사람을 찾을 수 있을지도 몰라.`);
    await era.printAndWait(`엄지와 검지로 이 가는 실을 쥐고, 실이 시작된 곳을 따라가자——`);
    await era.printAndWait(`강렬한 빛이 쏟아져 ${me.name}의 눈을 멀게 했다.`);
    await era.printAndWait(`눈앞의 풀밭은 콘서트 현장으로 변해 있었다.`);
    await era.printAndWait(
      `자신은 무대 중앙에 서 있었다. 아니, 정확히는 ${falcon.name}이 무대 중앙에 서 있었다.`,
    );
    await era.printAndWait(
      `빽빽하게 들어찬 관객들이 ${me.name}에게 익숙한 노래의 박자에 맞춰 몸을 흔들고 있었다.`,
    );
    await me.say_and_wait(`콘서트인가? 하지만 왜 이렇게 위화감이 심하지.`);
    await era.printAndWait(`조금 전부터 공기 중에 정체 모를 비릿한 냄새가 감돌았다.`);
    await era.printAndWait(`이것이 무엇을 의미하는지 깨닫는 순간 소름이 돋았다.`);
    await me.say_and_wait(`팔코?`);
    await era.printAndWait(`팔코라고 불리는 인형이 ${me.name}을(를) 향해 고개를 돌렸다. 그리고——`);
    await era.printAndWait(`왼쪽 눈 오른쪽 눈 왼쪽 귀 오른쪽 귀 콧구멍 입안에서 흘러나오는 암적색 액체`);
    await era.printAndWait(`시각 촉각 후각 미각 청각 이성 감성이 뒤섞인 끈적한 덩어리\n\n`);
    await me.say_and_wait(`하아, 하아, 하아.`);
    await era.printAndWait(
      `악몽에서 벌떡 깨어났다. 이마의 땀방울, 땀에 젖은 셔츠가 방금 전의 모든 것이 악몽이었음을 일깨워 주었다.`,
    );
    await me.say_and_wait(`방금 그건?`);
    await era.printAndWait(`억지로 액체를 뱉어내자, 입안에서 쓰디쓴 피비린내가 났다.`);
    await era.printAndWait(
      `이전에 무슨 일이 있었는지 기억해내려 했지만, 조금만 생각해도 머리가 깨질 듯이 아팠다.`,
    );
    await era.printAndWait(`우선 포기하고 주변 환경을 살피기로 했다.`);
    await era.printAndWait(
      `자신이 누워 있는 소파, 소파 오른쪽의 사무용 책상, 책상 뒤쪽 벽에 액자에 걸린 합창 사진.`,
    );
    await me.say_and_wait(`트레이닝실로 돌아온 건가?`);
    await era.printAndWait(
      `기억이 끊기기 직전에 무엇을 하고 있었는지, 쓰러진 후 누가 자신을 데려다 놓았는지 알 수 없었다.`,
    );
    await era.printAndWait(`무의식적으로 바지 주머니 속에 손을 넣어 스마트폰을 확인하려 했다.`);
    await era.printAndWait(`하지만 더 부드러운 무언가가 만져졌다.`);
    await me.say_and_wait(`이건?`);
    await era.printAndWait(`머리를 고정하는 데 쓰이는 듯한, 정성스럽게 관리된 리본이었다.`);
    await era.printAndWait(`만약 팔코가 도망친 거라면?`);
    await me.say_and_wait(`……과연 그렇군.`);
    await era.printAndWait(`답은 이미 나와 있었다.`);
    await era.printAndWait(`조심스럽게 보관된 리본을 손목에 묶었다.`);
    await era.printAndWait(`${me.name}은(는) 결심했다.\n`);
    era.printButton(`${falcon.name}을 쫓아간다`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(`시간이 얼마나 흘렀을까. 상점가, 백화점, 강가 풀밭.`);
    await era.printAndWait(
      `친한 팬들이나 친구들에게 물어보아도 돌아오는 대답은 모두 모른다는 것뿐이었다.`,
    );
    await me.say_and_wait(`하아…… 하아…… 하아……`);
    await era.printAndWait(
      `이대로 포기하고 팔코 곁에서 도망친다면 역시 분해서 견딜 수 없다.`,
    );
    await era.printAndWait(`누군가 말하길, 어둠은 약자들의 무덤이라고 한다.`);
    await era.printAndWait(
      `설령 도쿄 같은 대도시라 해도, 심야에 배회하는 것은 지극히 위험한 행위다.`,
    );
    await era.printAndWait(`이런 일이 벌어진 것에는 자신에게도 책임이 있을 것이다.`);
    await era.printAndWait(
      `하지만 그것은 자신을 탓할 이유가 되지 않는다. 자신은 스스로 생각한 것만큼 현명하지 않고, 상상했던 것만큼 용기 있지도 않기 때문이다.`,
    );
    await era.printAndWait(
      `자신에게는 이 정도의 지혜밖에 없고, 이 정도의 용기밖에 없다는 사실이 이 이상적이지 않은 현실로 증명되었다.`,
    );
    await era.printAndWait(
      `그걸 이해한다면, 후회란 자신이 분명 지혜롭고 용기 있었음에도 실패했다는 사실에 대한 후회일 것이다.`,
    );
    await era.printAndWait(`인지 부조화의 위험에 빠질 가능성이 컸다.\n`);
    await era.printAndWait(`어느새 익숙한 풀밭으로 돌아와 있었다.`);
    await era.printAndWait(`봄과 여름이 교차하는 시기, 심야의 풀밭은 생각보다 더 추웠다.`);
    await era.printAndWait(`${me.name}은(는) 자신도 모르게 몸을 떨었다.`);
    await era.printAndWait(`습한 공기에 흙내음이 섞여 있고, 달빛 아래의 폐허가 이 풀밭을 둘러싸고 있었다.`);
    await era.printAndWait(`마치 커튼을 친 것 같았다.`);
    await era.printAndWait(
      `그리고 기다리던 ${falcon.teen_sex_title}——${falcon.name}이 이 풀밭 위에 있었다.\n`,
    );
    await era.printAndWait(
      `${falcon.sex}에게 사과하고 제대로 대화하면 모든 오해는 풀릴 것이다.`,
    );
    await falcon.say_and_wait(
      `에? ${callname}, 왜 벌써……`,
    );
    await era.printAndWait(`무대의 주인공이 놀란 표정으로 ${me.name}을(를) 바라보았다.`);
    await era.printAndWait(
      `어제 오후부터 아무것도 먹지 않은 탓일까? 지금 금방이라도 쓰러질 듯한 ${falcon.sex}은 마치 창백한 인형처럼 위태로워 보였다.`,
    );
    await falcon.say_and_wait(
      `……아니, 괜찮아. 팔코는 그저 조금 고민이 있었을 뿐이야. 내일이 되면 팔코는 다시 원래대로——`,
    );
    await era.printAndWait(`그렇게 두 다리를 모으고 바닥에 주저앉아 고통스럽게 기침을 했다.`);
    era.printButton(`팔코!`, 1);
    await era.input();
    await era.printAndWait(
      `준비했던 말들이 모두 머릿속에서 사라지고, ${me.name}은(는) ${falcon.teen_sex_title}에게 달려갔다.`,
    );
    await me.say_and_wait(`조금만 참아, 이 모든 건 금방 끝날 거야.`);
    await falcon.say_and_wait(`${falcon.name}이 ${me.name}을(를) 붙잡았다.`);
    await era.printAndWait(
      `두 손으로 느껴지는 한기보다, 그 맑은 눈동자가 ${me.name}을(를) 매료시켰다.`,
    );
    await falcon.say_and_wait(
      `팔코는…… ${callname}을 원망하려던 게 아니야…… 그저.`,
    );
    await falcon.say_and_wait(
      `팔코의 행복보다…… ${callname}이 더 행복해질 수 있다면……`,
    );
    await falcon.say_and_wait(
      `미안해…… 팬 1호의 행복조차 지켜주지 못하다니, 아이돌로서 정말 실격이네……`,
    );
    await falcon.say_and_wait(`……미안해.`);
    await era.printAndWait(
      `마음속에 쌓인 고통을 온 힘을 다해 뱉어낸 후, ${falcon.name}은 그대로 바닥에 쓰러졌다.`,
    );
    await era.printAndWait(
      `어느 정도 짐작은 하고 있었지만, ${falcon.sex}가 직접 입 밖으로 내뱉기 전까지는 확신할 수 없었다. ${falcon.name}의 마음 밑바닥에서 진정으로 바라는 것이 무엇인지.`,
    );
    await era.printAndWait(`미안해, 이런 일이 생기게 해서.`);
    era.printButton(`${falcon.name}을 가볍게 업는다`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${falcon.teen_sex_title}를 가볍게 업고, ${falcon.sex}와 함께 나아가는 무게를 확인했다.`,
    );
    await era.printAndWait(`왔던 길은 생각보다 훨씬 더 길었다.`);
    await era.printAndWait(
      `——하지만 ${falcon.name}에게는 어쩌면 인생에서 가장 중요한 성인식일지도 모른다.`,
    );
  };

  handlers[95 + 23] = async (
    falcon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    const chara4_talk = get_chara_talk(4);
    await print_event_name('한가한 날', falcon);
    await era.printAndWait(
      `봄과 여름이 뒤섞인 계절, 하늘에서 쏟아지는 빛줄기에도 열기가 더해졌다.`,
    );
    await era.printAndWait(
      `하지만 지금의 ${me.name}에게는 덥지도 춥지도 않은 딱 쾌적한 구간이었다.`,
    );
    await era.printAndWait(
      `……사건의 파도 속에서 필사적으로 발버둥 친 끝에, 상황이 일단락된 후에야 겨우 살아남았다.`,
    );
    await era.printAndWait(
      `상점가를 오가는 사람들을 보고 있노라니, 어쩐지 현실감이 느껴지지 않았다.`,
    );
    await era.printAndWait(
      `그들도 ${me.name}과(와) 마찬가지로 시련 속에서 발버둥 치다 겨우 살아남은 동지들이 아닐까?`,
    );
    await era.printAndWait(
      `지난 시련에서 살아남았지만, 만약 다음번에 실패한다면?`,
    );
    await era.printAndWait(
      `일단 실패하면 모든 것이 제로로 돌아간다. 에덴에 남길 수 있는 것은 단 하나도 없다.`,
    );
    await era.printAndWait(`사람들은 왜 두려워하지 않는 걸까?`);
    await era.printAndWait(
      `아니, 죽음 앞에서야 사람들은 삶의 행복이 실제로는 부여받은 하나의 특권임을 깨닫게 된다.`,
    );
    await era.printAndWait(
      `우리는 언젠가 아무런 미련 없이 세상을 떠날 것이기에, 살아있는 하루하루를 더욱 소중히 여겨야 한다.`,
    );
    await falcon.say_and_wait(`${callname}, 많이 기다렸지♪`);
    await era.printAndWait(
      `사복으로 갈아입은 ${falcon.name}이 가벼운 발걸음으로 ${me.name}의 앞에 나타났다.`,
    );
    await era.printAndWait(
      `머리카락을 자연스럽게 내려뜨린 모습은, 특유의 목소리가 아니었다면 길거리를 오가는 여느 ${falcon.get_uma_sex_title()}와 다를 바 없어 보였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 맡아두었던 리본을 ${falcon.name}에게 돌려주려 했지만, 「역시 ${callname}이 가지고 있는 게 좋을 것 같아, 엄마도 동의하셨어」라는 이유로 거절당했다.`,
    );
    await era.printAndWait(
      `……스스로가 어린 ${falcon.get_uma_sex_title()}에게 관심을 가질 타입은 아니라고 생각했지만, 상대를 바라볼 때면 내면에서 형용할 수 없는 감정이 솟구쳤다.`,
    );
    await falcon.say_and_wait(`⭐`);
    await era.printAndWait(
      `상대는 ${me.name}이(가) ${falcon.sex}에 대해 느끼는 복잡한 감정은 전혀 모르는 채, 여전히 그 찬란한 미소로 ${me.name}을(를) 바라보고 있었다.`,
    );
    await era.printAndWait(
      `공휴일인 탓에, 교차로에 서 있는 ${me.name}들은 가끔 기이한 시선을 받기도 했다.`,
    );
    await me.say_and_wait(`일단 근처 백화점이라도 둘러보자!`);
    await era.printAndWait(
      `계속 망설이다가는 소중한 휴식 시간을 다 날려버릴 것 같아, ${me.name}은(는) 거대한 광고판이 걸린 건물을 가리켰다.`,
    );
    await falcon.say_and_wait(`에! 저기에 새로 생긴 아주 유명한 디저트 가게가 있다고 들었어!`);
    await falcon.say_and_wait(`일단 결정됐으면 바로 출발하자!`);
    await era.printAndWait(`${falcon.name}은 ${me.name}의 손을 잡고 디저트 가게로 향했다.`);
    era.drawLine();
    await era.printAndWait(
      `점원에게 메뉴판을 받아 들고, 빼곡하게 박힌 디저트 사진들을 보며 ${me.name}은(는) 조금 망설였다.`,
    );
    await falcon.say_and_wait(`${callname}은 뭘 좋아해?`);
    era.printButton(`과일 파르페가 괜찮아 보이네!`, 1);
    era.printButton(`초콜릿 신제품을 먹어보고 싶어!`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`팔코도 그런 새콤달콤한 식감의 파르페를 정말 좋아해.`);
      await falcon.say_and_wait(
        `입안에서 퍼지는 차가움과 달콤한 향기는... 마치 ${callname}과 처음 만났을 때의 장면 같네♪`,
      );
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`팔코도 이런 맛의 초콜릿을 먹어보고 싶었어♪.`);
      await falcon.say_and_wait(`……⭐`);
      await era.printAndWait(`……왠지 모르게 ${falcon.sex}이 살짝 입을 가리고 웃기 시작했다.`);
      await era.printAndWait(`내가 모르는 차원으로 사고가 튄 걸까.`);
    }
    await chara4_talk.say_and_wait(`안녕! 좋은 오후네! 여기서 팔코를 만날 줄이야.`);
    await falcon.say_and_wait(`안녕하세요⭐ 마루젠 선배!`);
    await era.printAndWait(
      `근처에서 혼자 디저트를 즐기던 마루젠스키가 ${me.name}들에게 말을 걸어왔다.`,
    );
    await chara4_talk.say_and_wait(
      `요즘 나도 더트 레이스가 유행이라는 소문을 들었거든.`,
    );
    await chara4_talk.say_and_wait(
      `그래서 유행을 따라가기 위해, 지금 더트 코스에서 대활약 중인 팔코의 레이스를 지켜봤어.`,
    );
    await chara4_talk.say_and_wait(
      `예전에 더트를 선택했던 후배들이 나에게 주행법을 물어본 적이 있어서 일부러 보러 갔었지.`,
    );
    await chara4_talk.say_and_wait(
      `하지만 팔코처럼 힘차게 빛나는 아이돌을 보고 있으면, 후배가 어느새 선배를 앞질러 버렸다는 복잡한 기분도 드는걸.`,
    );
    await me.say_and_wait(
      `역시 팔코니까. ${falcon.sex}가 있다면 분명 더트 코스도 더 인기를 얻게 될 거야.`,
    );
    await falcon.say_and_wait(`……!`);
    await chara4_talk.say_and_wait(
      `그러고 보니 다음에는 제왕상에 출주할 계획이지? 나도 현장에 응원하러 갈게!`,
    );
    await falcon.say_and_wait(`그때는 꼭 마루젠 선배에게 후배의 멋진 모습을 보여드릴게요!`);
    await era.printAndWait(`미소를 띤 마루젠스키가 시선을 ${me.name}에게 돌렸다.`);
    if (
      era.get('cflag:4:모집상태') === recruit_flags.yes &&
      era.get('love:4') > 90
    ) {
      await me.say_and_wait(`정말 우연이네, 마루젠스키.`);
      await era.printAndWait(`마루젠스키는 그저 미소를 지으며 잔 속의 커피를 저었다.`);
      await me.say_and_wait(`……아.`);
      await chara4_talk.say_and_wait(
        `어머, 트레이너 군? 오늘 트레이닝 장소를 디저트 가게로 옮긴 건 지능 트레이닝이라도 할 셈이야?`,
      );
      await chara4_talk.say_and_wait(
        `우후후~ 누나도 과일 파르페를 먹으면서 지능을 팍팍 높이고 싶은걸.`,
      );
      await era.printAndWait(`이건 트레이너가 할 일이 아니지 않느냐는 완곡한 암시였다.`);
      await era.printAndWait(
        `${falcon.name}과 관계가 아주 조금, 정말 조금은 가까워졌다고 생각하지만, 스스로는 여전히 좋은 발전 태세라고 믿고 있었다.`,
      );
      await falcon.say_and_wait(
        `기다렸지⭐ ${callname}…… 그리고 마루젠스키 선배.`,
      );
      await era.printAndWait(
        `두 사람 사이의 미묘한 기류를 눈치챈 듯, 긴 줄에서 달려오던 ${falcon.name}이 서서히 발걸음을 늦췄다.`,
      );
      await chara4_talk.say_and_wait(`팔코, 안녕♪`);
      await era.printAndWait(
        `${me.name}은(는) 서둘러 수라장에서 탈출하려 했으나, 마루젠스키의 기세에 눌려 제자리에 얼어붙고 말았다.`,
      );
      if (love > 90) {
        await falcon.say_and_wait(
          `설령 마루젠 선배라고 해도 이 초콜릿은 선배에게 양보할 수 없어♪`,
        );
        await chara4_talk.say_and_wait(`요즘 후배는 생각보다 더 귀엽네♪`);
        await chara4_talk.say_and_wait(
          `주 종목 코스만 같았다면 정말 팔코랑 한판 붙어보고 싶은걸♪`,
        );
        await falcon.say_and_wait(`마루젠 선배라고 해도, 팔코는 지지 않을 거야♪`);
        await chara4_talk.say_and_wait(`조금 실례되는 말 아닐까?`);
        await falcon.say_and_wait(`아닌데? 팔코는 전혀 악의가 없다구?`);
        await falcon.say_and_wait(
          `그냥 마루젠 선배도 슬슬 결혼할 나이가 된 것 같은데, 왜 아직 여기 있는가 싶어서?`,
        );
        await chara4_talk.say_and_wait(
          `그러고 보니 팔코는 아이돌 아니었니? 이렇게 트레이너 군과 단둘이 앉아 있다가 스캔들이라도 나면 무섭지 않아?`,
        );
        await chara4_talk.say_and_wait(`트레이너 군, 어떻게 생각해?`);
        await falcon.say_and_wait(
          `괜찮아? 만약 스캔들이 나면 그냥 ${callname}과 결혼한다고 발표해 버리면 되니까♪ 그치, ${callname}?`,
        );
        await era.printAndWait(
          `여유로운 마루젠스키와 진지한 태도를 보이기 시작한 ${falcon.name}을 보며, 보이지 않는 기류 탓에 주변 사람들이 슬금슬금 멀어지기 시작했다.`,
        );
        era.printButton(`아무것도 보고 싶지 않아`, 1);
        await era.input();
        await era.printAndWait(
          `전장 한복판에서 멍청한 표정으로 두 사람의 기싸움을 지켜보던 ${me.name}은(는) 마치 타조처럼 머리를 모래 속에 처박고 싶었다.`,
        );
      } else {
        await falcon.say_and_wait(
          `마루젠 선배가 온 김에, 여기서 게릴라 콘서트를 열어볼까⭐`,
        );
        await era.printAndWait(
          `이런 돌발적인 상황 속에서도 ${falcon.name}은 꿋꿋하게 그 장소에 발을 들였다.`,
        );
        await chara4_talk.say_and_wait(
          `요즘은 얻든 무대가 되는 게 유행인 거니?`,
        );
        await falcon.say_and_wait(`팔코 스타일이야⭐`);
        await falcon.say_and_wait(
          `스즈카링, 부르봉짱, 그리고 아이네스짱이 없어서 조금 아쉽지만…… 그래도 도주 시스터즈 멤버 간의 활동이라고 치자!`,
        );
        await chara4_talk.say_and_wait(
          `레이스든 콘서트든, 언니도 풀 마력으로 달릴게!`,
        );
        await era.printAndWait(
          `마루젠스키가 ${me.name}에게 윙크를 하더니, ${falcon.name}을 도와 임시 무대 설치를 준비했다.`,
        );
        await era.printAndWait(`한바탕 폭풍이 그렇게 지나갔다.`);
      }
    }
  };

  handlers[95 + 32] = async (
    falcon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
    ebj,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:46:위치')
    ) {
      add_event(event_hooks.week_end, ebj);
      return;
    }
    await print_event_name('여름 합숙 종료', falcon);
    await era.printAndWait(`${falcon.name}의 3년 차 여름 합숙이 끝났다.`);
    await falcon.say_and_wait(`톱 아이돌의 길을 향해 한순간도 멈추지 않고 전진♪`);
    await era.printAndWait(
      `여름 합숙 종료 축하 파티에서 술에 취했다는 핑계로 빠져나온 ${me.name}은(는) 똑같이 파티에서 나온 ${falcon.teen_sex_title}와 마주쳤다.`,
    );
    await me.say_and_wait(`유명 아이돌인 팔코가 이렇게 파티에서 자리를 비우는 건 드문 일이네.`);
    await falcon.say_and_wait(
      `결국 1호 팬이 없으면, 아이돌 활동도 갑자기 빛이 바래버리니까.`,
    );
    await era.printAndWait(`과연 그렇군.`);
    await me.say_and_wait(`팔코는 이제 고독이 두렵지 않아?`);
    await falcon.say_and_wait(`……솔직히 말하면 여전히 무서워. 하지만 예전만큼은 아니야.`);
    await falcon.say_and_wait(
      `결국 ${callname}이 항상 내 곁에 있어 주니까.`,
    );
    await me.say_and_wait(`……이게 팔코의 결정이구나.`, true);
    await era.printAndWait(
      `${falcon.name}은 몸을 앞으로 살짝 숙이고 오른손 검지를 입술 중앙에 세우며 오른쪽 눈을 찡긋했다.`,
    );
    await falcon.say_and_wait(
      `그리고, 팔코는 가장 좋아하는 ${callname}과 함께 세계에서 가장 큰 무대에 서고 싶어!`,
    );
    await falcon.say_and_wait(
      `그때가 되면…… 팔코는…… 아니, 팔코는 아무 말도 안 했어⭐`,
    );
    await era.printAndWait(
      `${falcon.sex}의 숨길 수 없는 미소로 보아, 행복한 일을 생각하고 있는 모양이었다.`,
    );
    await era.printAndWait(
      `그 꿈을 실현하기 위해 노력하는 하루하루가 모여 오늘에 이르렀다.`,
    );
    await falcon.say_and_wait(`우리가 걸어온 길 주위로 어느새 끝없는 초원이 보이기 시작했어.`);
    await me.say_and_wait(`톱 아이돌이 되기 위해 다음 레이스도 소홀히 할 수 없지!`);
    await falcon.say_and_wait(`아니야!`);
    await era.printAndWait(`${falcon.name}은 ${me.name}을(를) 놀라게 하는 말을 꺼냈다.`);
    await me.say_and_wait(`무슨 소리야?`);
    await falcon.say_and_wait(
      `${callname}이 예전에 말했던 것처럼, 누구나 자신의 선택에 책임을 져야 해.`,
    );
    await falcon.say_and_wait(
      `팔코가 마음의 저울을 ${callname} 쪽으로 기울였을지라도, 팔코가 ${falcon.get_uma_sex_title()} 아이돌이라는 사실에는 변함이 없어.`,
    );
    await falcon.say_and_wait(
      `아무리 시간이 흘러도, 약속을 들었던 사람들이 잊었을지라도, 그 사실은 변하지 않아.`,
    );
    await falcon.say_and_wait(
      `그러니까 팔코가 과로로 쓰러지기 전까지는, 팔코는 ${falcon.get_uma_sex_title()} 아이돌로서의 책임을 다할 거야. 은퇴할 때까지 말이야.`,
    );
    await falcon.say_and_wait(`이게 팔코가 내린 답이야.`);
    await era.printAndWait(
      `곁에 있는 ${falcon.teen_sex_title}는 홀가분한 표정을 지었다. ${falcon.sex}는 이미 각오를 굳힌 상태였다.`,
    );
    era.printButton(`${me.name}의 곁에서 가장 가까운 사람으로서 이 모든 것을 지켜보게 해줘.`, 1);
    await era.input();
    await falcon.say_and_wait(`후후후.`);
    await era.printAndWait(
      `${falcon.name}은 갑자기 웃기 시작하더니, 눈물이 흐를 정도로 한참을 웃었다.`,
    );
    era.printButton(`팔코?`, 1);
    await era.input();
    await era.printAndWait(`그리고는 ${me.name}을(를) 꽉 껴안았다.`);
    await falcon.say_and_wait(
      `고마워 ${me.actual_name}, ${callname}.`,
    );
    await era.printAndWait(`${falcon.name}은 이제 더 이상 혼자가 아니었다.`);
  };

  handlers[95 + 37] = async (falcon, me, callname) => {
    await print_event_name('선배와 후배', falcon);
    await era.printAndWait(
      `신중하게 고민한 끝에, ${me.name}은(는) JBC 클래식, 챔피언즈 컵, 그리고 도쿄 대상전을 3년 차 하반기 계획에 넣었다.`,
    );
    await era.printAndWait(`하반기의 세 레이스에서 모두 승리해야 한다는 압박감은 상상을 초월했다.`);
    await era.printAndWait(
      `소위 톱 아이돌이란, 이런 힘든 상황 속에서도 대중에게 희망을 주어야 하는 존재였다.`,
    );
    await era.printAndWait(`똑똑똑.`);
    await me.say_and_wait(`누구를 초대한 기억은 없는데.`);
    await era.printAndWait(
      `${falcon.name}이라면 그냥 문을 열고 들어올 테고, 타즈나 씨라면 미리 스마트폰으로 메시지를 보냈을 터였다. 다른 ${falcon.get_uma_sex_title()}라면 보통은 자신이 먼저 연락하곤 했다.`,
    );
    await say_by_passer_by_and_wait(
      `${falcon.get_uma_sex_title()}`,
      `오랜만이에요, ${callname}!`,
    );
    await era.printAndWait(
      `밤색의 ${falcon.get_uma_sex_title()}가 문을 열고 들어왔다. 얼마나 흥분했는지 실수로 문고리를 뽑아버릴 정도였다.`,
    );
    await say_by_passer_by_and_wait(
      `${falcon.get_uma_sex_title()}`,
      `아, 죄송해요! 너무 기쁜 나머지 그만!`,
    );
    await era.printAndWait(`어딘가 낯익은 느낌이었다.`);
    await say_by_passer_by_and_wait(
      falcon.uma_sex_title,
      `트레이너 ${me.get_adult_sex_title()}, 아직 저를 기억하시나요?`,
    );
    await era.printAndWait(`머릿속에서 떠오르는 이름들을 하나씩 지워가는 작업을 반복했다.`);
    await era.printAndWait(`만약 ${falcon.name}이 여기 있었다면 한눈에 알아봤을 것이다.`);
    await era.printAndWait(
      `${falcon.sex}는 콘서트를 관람해 준 팬들의 얼굴을 하나하나 다 기억하고 있으니까.`,
    );
    await me.say_and_wait(
      `콘서트? ${falcon.get_uma_sex_title()}, 강가 풀밭.`,
      true,
    );
    await me.say_and_wait(
      `그러고 보니 확실히 어떤 ${falcon.get_uma_sex_title()}를 만난 적이 있었지.`,
      true,
    );
    await me.say_and_wait(
      ` 작년에 아이돌을 지망한다던 그 ${falcon.get_uma_sex_title()}구나.`,
    );
    await era.printAndWait(
      `체격과 키가 몰라보게 달라졌지만, 옛 모습이 어렴풋이 남아 있었다.`,
    );
    await me.say_and_wait(`너도 본격화가 찾아왔구나.`);
    await say_by_passer_by_and_wait(
      `${falcon.get_uma_sex_title()}`,
      `역시 ${callname}! 처음엔 못 알아보시면 어쩌나 걱정했는데, 기우였네요!`,
    );
    await era.printAndWait(
      `자신의 추측이 맞았다는 사실에, 대답을 들은 ${falcon.get_uma_sex_title()}가 득의양양하게 귀를 쫑긋 세웠다.`,
    );
    await me.say_and_wait(
      `좌절, 의혹, 불이해, 땀과 눈물은 기본에 불과해. 때로는 신념이 목숨보다 중요할 때도 있지.`,
    );
    await me.say_and_wait(
      `내가 아이돌의 길에 대해 아는 건 많지 않지만, 그래도 ${me.name}에게 도움이 되었으면 해.`,
    );
    await say_by_passer_by_and_wait(
      `${falcon.get_uma_sex_title()}`,
      `트, ${callname}, 대체 무슨 일을 겪으신 거예요?`,
    );
    await era.printAndWait(
      `${me.name}의 평범한(?) 경험담에 겁을 먹고 소파 구석에서 벌벌 떨고 있는 ${falcon.get_uma_sex_title()}.`,
    );
    await era.printAndWait(
      `실례네. 그저 내가 겪은 일들을 가감 없이 말했을 뿐인데.`,
    );
    await falcon.say_and_wait(`${callname}!`);
    await say_by_passer_by_and_wait(`${falcon.get_uma_sex_title()}`, `팔코 선배님!`);
    await era.printAndWait(`방금 전의 상황을 설명하고 난 후.`);
    await falcon.say_and_wait(`아이돌의 일상일 뿐이야.`);
    await era.printAndWait(`미소를 띤 ${falcon.name}의 목소리에는 아무런 변화가 없었다.`);
  };

  handlers[95 + 38] = async (falcon, me, callname) => {
    await print_event_name(`새겨진 거울`, falcon);
    era.drawLine();
    await me.say_and_wait(`${falcon.get_uma_sex_title()} 아이돌이라...`);
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌이라는 개념은 조금 막연한 것 같아.`,
    );
    await me.say_and_wait(
      `적극적으로 레이스에 참여하고 빛나고 있다면, 경기장에서 달리는 모든 ${falcon.get_uma_sex_title()}들이 마찬가지니까.`,
    );
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()} 아이돌만의 특별한 점은 어디에 있는 걸까?`,
    );
    era.drawLine();
    falcon.print(
      `첫 트레이닝 때, ${callname}이 팔코에게 이 질문을 던졌어.`,
    );
    falcon.print(`……그때 뭐라고 대답했더라?`);
    falcon.print(`그냥 대충 얼버무렸던 것 같아.`);
    await falcon.say_and_wait(`……`);
    falcon.print(`지금조차 팔코는 정답을 내놓지 못하겠어.`);
    falcon.print(
      `사춘기 특유의 민감함과 섬세함이 어우러진 귀여움을 세일즈 포인트로 삼고 싶어.`,
    );
    falcon.print(
      `그렇게 팬들과 함께 성장하고, 마지막엔 증명하는 자와 증명받는 자로서 톱 아이돌의 전당 문을 두드리는 거야.`,
    );
    falcon.print(`강변에서 자원봉사로 쓰레기를 줍든, 힘든 게릴라 공연을 하든.`);
    falcon.print(`생활 밀착형 아이돌이라는 개념을 관철하며, 팬들에게 자신의 성장을 전달해.`);
    falcon.print(`고통과 실의는 몰래 숨기고, 만중이 기대하는 아이돌이라는 가면을 써.`);
    falcon.print(`……과정도 생각만큼 힘들지는 않았어.`);
    falcon.print(`풀밭 위에서의 공연 또한 하나의 훈련이었으니까.`);
    falcon.print(`TV에서, 안무 선생님에게, 인터뷰 잡지에서 배운 경험들을 떠올려.`);
    falcon.print(`박자에서 박자로, 동작에서 동작으로, 한순간에서 한순간으로.`);
    falcon.print(`퍼포먼스가 마치 타고난 재능처럼 느껴질 때까지 단련해.`);
    falcon.print(`춤이 끝났어.`);
    falcon.print(`눈을 뜨고 아무도 없는 풀밭을 맞이해.`);
    falcon.print(`눈을 뜨고 한 사람이 있는 풀밭을 맞이해.`);
    falcon.print(`눈을 뜨고 여러 사람이 있는 풀밭을 맞이해.`);
    falcon.print(`눈을 뜨고 성대한 무대를 맞이해.\n`);
    falcon.print(`한때 지식이었던 것이 본능으로 녹아들고, 본능은 다시 새로운 지식을 응고시켜.`);
    falcon.print(
      `끊임없이 녹고 굳어지는 생명의 끝까지 이어지는 이 강줄기는, 외부인이 보기엔 찬란한 다이아몬드처럼 보이겠지.`,
    );
    era.drawLine();
    await falcon.say_and_wait(`곧 JBC 클래식이 시작돼.`);
    await falcon.say_and_wait(`……${callname}.`);
    await falcon.say_and_wait(
      `팔코에게 조금만 더 시간이 있었다면, 팔코도 더 일찍 깨달았을 텐데.`,
    );
    await falcon.say_and_wait(
      `아니야! ${callname}은 지금의 팔코를 좋아하지 않을 거야!`,
    );
    await falcon.say_and_wait(
      `${callname}이 기대하는 팔코는 언제나 활기차고, 계속해서 나아가는 완벽한 아이돌이어야 해!`,
    );
    await falcon.say_and_wait(
      `그러니까 경기장이든 무대 위에서든, 팔코는 계속 빛날 거야. 모든 사람의 시선을 빼앗을 때까지!`,
    );
    era.drawLine();
    falcon.print(`비록 이미 죄책감이라는 높은 벽에 가로막혔을지라도.`);
    falcon.print(`팬 습격의 근원은 천칭의 불균형이자, 팬의 염원을 무시한 아이돌의 말로야.`);
    falcon.print(`아이돌이 성장함에 따라 계속해서 압박을 가하는 악의이기도 하지.`);
    falcon.print(
      `이대로 계속되면, 언젠가 이 거대한 압박을 견디지 못하고 고온에 가열된 바위처럼 작은 계기만으로도 산산조각이 날 거야.`,
    );
    falcon.print(`어쩌면 계속해서 잘못된 선택을 한 팔코가 깨달은 유일하게 올바른 사실.`);
    falcon.print(`——아아, 시간이 좀 더 있었으면 좋았을 텐데.`);
    falcon.print(`나에게 더 많은 시간이 주어졌다면, 이 엉망진창인 실타래를 잘 풀 수 있었을 거야.`);
    falcon.print(`하지만 그건 불가능한 일이지.`);
    falcon.print(`완수해야 할 의무를 계속 회피하는 한, 미래는 오지 않아.`);
    falcon.print(
      `아이돌의 길을 선택한 이상, 어떤 상황에서도 팬들의 의지함과 기도를 보답해야 해.`,
    );
    falcon.print(`아이돌로서 마지막 순간까지 직분에 충실하자.`);
    falcon.print(`그러니까 더 이상 도망치지 않겠어.`);
    falcon.print(`처음으로 더트 레이스를 봤을 때 기억나.`);
    era.printButton(
      `뒤쫓던 ${falcon.get_uma_sex_title()}가 앞서가던 ${falcon.get_uma_sex_title()}를 추월했다`,
      1,
    ); // 연심이 책임을 뛰어넘음
    era.printButton(`앞서가던 ${falcon.get_uma_sex_title()}가 결정적인 한 걸음을 내디뎠다`, 2); // 책임이 연심을 억누름
    const ret1 = await era.input();
    if (ret1 === 1) {
      falcon.print(
        `——맞아, 뒤쫓던 ${falcon.get_uma_sex_title()}가 앞서가던 ${falcon.get_uma_sex_title()}를 추월했어.`,
      );
      falcon.print(
        `더트의 ${falcon.get_uma_sex_title()}들이 마주해야 하는 환경은 훨씬 더 가혹해.`,
      );
      falcon.print(`모든 것을 비우고 온 힘을 다해 앞의 목표를 추월하기 위해 달려.`);
      falcon.print(`그럼에도 여전히 부족해.`);
      falcon.print(`처음부터 유리한 위치를 잡지 못하면, 패자는 흩날리는 모래바람을 견뎌야만 해.`);
      falcon.print(
        `승부복은 흙탕물에 더럽혀지고, 고운 얼굴은 모래 먼지로 뒤덮여. 어떤 각도에서 봐도 결코 빛나는 모습이라곤 할 수 없지.`,
      );
      falcon.print(`눈에 들어간 모래가 따갑고, 가쁜 숨결은 모래바람에 흐트러져.`);
      falcon.print(`생각할 겨를도 없이, 자신의 존재조차 잊은 채 그저 상대를 추월해.`);
      falcon.print(`그것이 경쟁의 의미야.`);
    } else {
      falcon.print(`앞서가던 ${falcon.get_uma_sex_title()}가 결정적인 한 걸음을 내디뎠어.`);
      falcon.print(
        `작년이었나, 스즈카링이 잔디 레이스를 가르쳐줄 때, 다른 누구에게도 내주지 않는 풍경…… 아마 그런 거였지?`,
      );
      falcon.print(`선두의 풍경이라…… 어쩐지 그립네.`);
      falcon.print(
        `전국 투어 때, 지방의 ${falcon.get_uma_sex_title()}들과 겨뤘던 레이스들.`,
      );
      falcon.print(`잔디 레이스보다는 역시 더트 레이스의 인상이 더 깊게 남아 있어.`);
      falcon.print(`……`);
      falcon.print(`사츠키상을 제외하면 말이야.`);
      falcon.print(
        `노래 리듬에 맞춰 변하는 조명, 리듬에 맞춰 흔들리는 야광봉이 만드는 바다. 멀리서 보면 마치 층이 나뉜 조수 같아.`,
      );
    }
    falcon.print(
      `……아아…… 머릿속에 또 ${callname}의 모습이 떠올라.`,
    );
    falcon.print(`분명 도망치면 안 되는데.`);
    falcon.print(`비록 눈물이 앞을 가릴지라도.`);
  };
};