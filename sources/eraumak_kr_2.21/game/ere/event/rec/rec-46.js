/**
 * @file 스마트 팔콘 - 招募
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { say_by_passer_by } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46),
      tokino = get_chara_talk(301),
      me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        await say_by_passer_by(
          `${falcon.get_uma_sex_title()}`,
          `트레이너 씨의 권유는 정말 감사하지만요, 저는 스스로의 실력이 아직 조금 부족하다고 생각해요.`,
        );
        await say_by_passer_by(
          `${falcon.get_uma_sex_title()}`,
          `——아, 사실 트레이너 씨는 정말 대단하니까, 분명 다음에는 더 멋진 ${falcon.get_uma_sex_title()}를 만날 수 있을 거예요.`,
        );
        era.printButton(`다음에 더 좋은 트레이너를 만나길 빌게.`, 1);
        await era.input();
        await era.printAndWait(
          `접촉했던 ${falcon.get_uma_sex_title()}와 엇갈리며, 쏟아부은 노력이 목표에 닿지 못했다는 사실에 분해했다.`,
        );
        await era.printAndWait(`${me.name}은(는) 저도 모르게 한숨을 내뱉었다.`);
        await era.printAndWait(
          `오늘은 여기까지 하자. ${me.name}은(는) 실망스러운 기분을 억누르려 애썼다. ${me.name}은(는) 꺼냈던 계약서를 서둘러 파일 속에 집어넣었고, 무리 지어 지나가는 ${falcon.get_uma_sex_title()}들 사이를 빠른 걸음으로 지나쳐 트레이닝실로 돌아왔다.`,
        );
        era.drawLine();
        await era.printAndWait(
          `트레이닝실 문을 잠근 뒤 떠나려던 ${me.name}의 눈에 반짝이는 빛이 들어왔다.`,
        );
        await era.printAndWait(
          `그 빛의 근원을 찾기 위해 무심코 창가로 다가간 ${me.name}의 눈에 들어온 것은 안뜰의 세 여신상이었다.`,
        );
        await era.printAndWait(`석상은 석양의 빛을 머금었다가 ${me.name}에게 나누어주고 있었다.`);
        await me.say_and_wait(
          `아름답고 지혜로운 세 여신이시여, 부디 제게 용기를 주셔서 딱 맞는 ${falcon.get_uma_sex_title()}를 찾게 해주세요.`,
        );
        await era.printAndWait(
          `자포자기한 원망이었는지, 아니면 자조 섞인 농담이었는지. 혹은 둘 다였을지도 모른다. ${me.name} 스스로에게 물어도 정확한 답은 나오지 않을 것이다.`,
        );
        era.println();
        await say_by_passer_by_and_wait(
          `잔뜩 화가 난 인간 교사`,
          `${falcon.name}! 이번 주에만 허가 없이 멋대로 콘서트를 연 게 벌써 세 번째잖니!`,
        );
        await era.printAndWait(`분노에 찬 외침이 ${me.name}의 사색을 깨뜨렸다.`);
        await me.say_and_wait(`무슨 일이지?`);
        await era.printAndWait(`${me.name}이(가) 상황을 파악하려 애쓰던 그때.`);
        await falcon.say_and_wait(`미안, 잠깐만 비켜 줘——`);
        era.printButton(`잠깐——`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 곁을 스쳐 지나가는 강한 바람에 몸을 가누지 못하고 휘청였다.`,
        );
        await falcon.say_and_wait(`어, 어쩌지?`);
        await era.printAndWait(`도망치기 위해 저항했지만, 본의 아니게 낯선 사람에게 피해를 주고 말았다.`);
        await era.printAndWait(
          `${falcon.teen_sex_title}에게 있어서 이것 또한 이른바 일석이조의 상황인 걸까.`,
        );
        await say_by_passer_by_and_wait(
          '잔뜩 화가 난 인간 교사',
          `${falcon.name}!`,
        );
        await falcon.say_and_wait(`히익——`);
        await era.printAndWait(`한쪽에는 무고한 피해자, 다른 한쪽에는 끈질기게 쫓아오는 적.`);
        await era.printAndWait(
          `찰나의 망설임조차 허용되지 않을 만큼, 추격해오는 교사는 이미 코앞까지 들이닥쳤다.`,
        );
        await falcon.say_and_wait(`……팔코는 이런 곳에서 질 수 없어!`);
        await era.printAndWait(
          `${falcon.get_uma_sex_title()}라면 인간의 손아귀에서 도망치는 것—심지어 역으로 따돌리는 것조차—그리 어려운 일은 아니다.`,
        );
        await era.printAndWait(
          `애당초 인간은 ${falcon.get_uma_sex_title()}를 이길 수 없으니까.`,
        );
        await falcon.say_and_wait(`팔코의 꿈을 위해서라면, 이렇게 할 수밖에!`);
        await era.printAndWait(
          `벽을 짚고 일어선 ${me.name}은(는) 혼란스러운 상황을 이해하려 애쓰다, 창문을 열려는 ${falcon.teen_sex_title}를 보았다.`,
        );
        await say_by_passer_by(`인간 교사`, `! ${falcon.name} !`);
        await era.printAndWait(
          `날씬한 실루엣은 마치 매처럼 창밖 하늘을 향해 날아올라, 지상에 서 있는 범인들을 멀리 따돌렸다.`,
        );
        await era.printAndWait(`하지만\n`);
        await era.printAndWait(
          `——역시 진짜 새는 아니었기에, 중력은 자비 없이 ${falcon.sex}를 붙잡아 아래로 거세게 내리눌렀다.`,
        );
        await era.printAndWait(
          `결국 ${falcon.sex}는 나뭇가지 두 개를 부러뜨리고는, 엉망이 된 몰골로 바닥에서 일어나 쏜살같이 사라져 버렸다.`,
        );
        await say_by_passer_by(`인간 교사`, `세상에, 저런 짓을?`);
        await era.printAndWait(`${me.name}도 깊이 공감했다.`);
        await era.printAndWait(
          `왠지 모르게, 그 생동감 넘치는 뒷모습이 ${me.name}의 마음속 깊이 각인되었다.`,
        );
        era.printButton(`실례합니다, 방금 그 ${falcon.get_uma_sex_title()}는 누구인가요?`, 1);
        await era.input();
        await say_by_passer_by(
          `인간 교사`,
          `에? ${falcon.name} 말인가요?`,
        );
        await me.say_and_wait(
          `네, 제가 담당할 만한 ${falcon.get_uma_sex_title()}를 찾고 있어서요.`,
        );
        await era.printAndWait(
          `방금 보여준 결단은 다소 무모해 보였지만, 저토록 독특한 개성이라면 진작 누군가 트레이너가 손을 내밀었을 터였다.`,
        );
        await era.printAndWait(
          `${me.name}의 의문을 눈치챈 듯, 교사는 쓴웃음을 지으며 고개를 저었다.`,
        );
        await say_by_passer_by(
          `인간 교사`,
          `${falcon.name}은 잔디 경기장만 고집하는 모양인데, 생각보다 훨씬 고집이 세답니다.`,
        );
        await say_by_passer_by(
          `인간 교사`,
          `게다가 경기장에서 우승하는 것보다, ${falcon.name}은 자신에게 시선이 집중되는 감각 자체를 더 즐기는 것 같아요.`,
        );
        await me.say_and_wait(`자신에게 시선이 집중되는 것… 그건 마치 아이돌 같네.`);
        await era.printAndWait(
          `팬들이 바라는 이상적인 존재로서, 만중이 지켜보는 무대 위에서 자신의 가장 아름다운 모습을 보여주는, 아이돌.`,
        );
        await me.say_and_wait(
          `……하지만 레이스 ${falcon.get_uma_sex_title()}로 시작하는 게 다른 방향보다 성공 확률도 높고 시간도 단축되니.`,
        );
        await me.say_and_wait(`확실히 실현 가능한 방안이긴 하군요.`);
        await era.printAndWait(
          `제자에 대한 교사의 기대였을까, 아니면 그저 ${falcon.name}이 차분해지길 바라는 마음이었을까. 교사는 다시 고개를 저었다.`,
        );
        await say_by_passer_by(
          `인간 교사`,
          `하지만 ${falcon.sex}는 아무리 노력해도 발목에 무거운 쇠구슬이 묶인 것만 같아 보여요.`,
        );
        await say_by_passer_by(
          `인간 교사`,
          `선발 레이스에서 연달아 꼴찌에 가까운 성적을 거뒀으니, 아마 ${falcon.sex} 본인도 자신이 잔디 체질이 아니라는 건 알고 있겠죠.`,
        );
        await me.say_and_wait(
          `이상을 쫓는 ${falcon.teen_sex_title}에게 그보다 고통스러운 건 없겠죠. ……왜 더트는 시도하지 않는 거죠?`,
        );
        await era.printAndWait(
          `생각에 잠겨 있던 ${me.name}은(는) 실언했음을 깨닫고 자조적으로 고개를 저으며 무안한 기억을 떨쳐내려 했다.`,
        );
        await say_by_passer_by(
          `인간 교사`,
          `그건 아마 ${falcon.sex}에게 직접 물어봐야 알 수 있겠네요.`,
        );
        await era.printAndWait(
          `교사가 손을 비비자, 입에서 나온 온기가 수증기가 되어 찬바람에 흩어졌다.`,
        );
        await me.say_and_wait(`${falcon.name}은 어디에 있을까요?`);
        await era.printAndWait(
          `${me.name}이(가) ${falcon.name}에 대해 더 물어보려던 찰나, 다급한 벨 소리가 대화를 끊었다.`,
        );
        await say_by_passer_by(`인간 교사`, `어디에 있든 여전히 자신의 꿈을 쫓고 있겠죠.`);
        await era.printAndWait(
          `교사는 ${me.name}에게 가볍게 손을 흔들고는 사무실로 향했다. ${me.name}은(는) 대화 속 유용한 정보를 정리하려 했지만, 복도로 들이친 찬바람에 목을 움츠릴 수밖에 없었다.`,
        );
        era.drawLine({ content: '다음 날' });
        await era.printAndWait(
          `${me.name}은(는) 평소처럼 트레이닝실 앞으로 왔다가, 문에 무언가 붙어 있는 것을 발견했다.`,
        );
        await falcon.say_and_wait(
          `신인 우마돌 ${falcon.name}! 16:00에 강변에서 게릴라 콘서트 예정! 꼭 보러 와야 해♪`,
        );
        await era.printAndWait(`잠시 망설이다가, 전단지를 살며시 떼어냈다.`);
        await era.printAndWait(`멀지 않은 곳에서 적지 않은 소란이 들려왔다.`);
        era.printButton(`가보자.`, 1);
        await era.input();
        await era.printAndWait(
          `그렇게 ${me.name}은(는) 소란이 들려오는 방향으로 발걸음을 옮겼다.`,
        );
        era.println();
        await falcon.say_and_wait(`정말 죄송해요.`);
        await tokino.say_and_wait(
          `${falcon.name} ${falcon.get_adult_sex_title()}, 정식으로 아이돌 활동을 하고 싶다면 선발 레이스에서 노력해서 적절한 트레이너와 계약을 맺으세요.`,
        );
        await tokino.say_and_wait(
          `트레센 학원은 우수한 레이스 ${falcon.get_uma_sex_title()} 육성을 목표로 설립된 곳입니다. 함께 나아가고자 하는 트레이너는 결코 적지 않을 거예요.`,
        );
        await tokino.say_and_wait(
          `부디 노력의 방향을 수정해서, 어울리는 트레이너와 함께 나아가도록 하세요.`,
        );
        await era.printAndWait(
          `타즈나 씨는 ${falcon.name}의 손에 들린, 미처 다 나누어주지 못한 전단지를 압수하며 엄중히 훈계했다.`,
        );
        await falcon.say_and_wait(`……`);
        await era.printAndWait(
          `축 처진 귀를 보니, ${falcon.name}은 딜레마에 빠진 듯했다.`,
        );
        await tokino.say_and_wait(
          `…… ${me.actual_name} ${me.get_adult_sex_title()}, 무슨 일 있으신가요?`,
        );
        await era.printAndWait(`타즈나 씨는 순식간에 업무 모드로 전환했다.`);
        era.printButton(`죄송힙니다, 나중에 제가 ${falcon.name}과 잘 이야기해 보죠.`, 1);
        await era.input();
        await era.printAndWait(
          `왠지 모르게, ${me.name}은(는) 창가에서 반짝이던 ${falcon.teen_sex_title}를 떠올렸다.`,
        );
        await tokino.say_and_wait(
          `……그렇다면 나중에 계약서 사본을 이사장실에 제출해 주세요. 하지만 그전에.`,
        );
        await tokino.say_and_wait(`${falcon.name} 씨와 정식으로 계약하는 게 먼저겠네요.`);
        await era.printAndWait(
          `${me.name}은(는) 타즈나 씨의 시선을 따라 복도에 줄지어 붙은 전단지들을 보았다.`,
        );
        await tokino.say_and_wait(
          `${falcon.get_uma_sex_title()}들이 수업에 들어가기 전에 복도를 원래대로 돌려놓아 주세요.`,
        );
        await era.printAndWait(
          `타즈나 씨는 웃고 있었지만 엄청난 압박감이 전해져 왔다.\n\n\n`,
        );
        await era.printAndWait(
          `필사적인 노력 끝에, 겨우 예비령이 울리기 전 전단지를 모두 떼어낼 수 있었다.`,
        );
        await falcon.say_and_wait(
          `……고마워! 팔코의 팬 1호 님!`,
        );
        await era.printAndWait(`팬 1호?`);
        await falcon.say_and_wait(`팔코가 강변에서 여는 콘서트, 꼭 보러 와줄 거지?`);
        await era.printAndWait(`아이돌을 빛나게 해주는 존재, 그게 바로 팬이겠지.`);
        await era.printAndWait(`${me.name}은(는) 문득 가방 안에 넣어둔 전단지를 떠올렸다.`);
        era.printButton(`갈게.`, 1);
        await era.input();
        await era.printAndWait(
          `눈앞의 ${falcon.teen_sex_title}는 꽃이 피어나는 듯한 미소를 지으며 ${me.name}에게 허리 숙여 인사했다.`,
        );
        await era.printAndWait(`${me.name}은(는) 앞으로 있을 공연이 기대되기 시작했다.`);
        add_event(event_hooks.out_river, new EventObject(46, cb_enum.recruit));
        new EventMarks(0).add(event_hooks.out_river);
        era.set('cflag:46:무작위모집', 0);
        return true;
      case event_hooks.out_river:
        if (era.get('flag:현재상호작용캐릭터')) {
          add_event(event_hooks.out_river, event_object);
          return false;
        }
        // 정의：1은 적극 2는 소극
        // 비트 1
        await era.printAndWait(`${me.name}은(는) 전단지의 안내를 따라 강변으로 향했다.`);
        // 장면은 적극적이어야 함
        await era.printAndWait(
          `태양이 점차 서쪽으로 기울며 하늘의 빛깔도 밝은 푸른색에서 서서히 주황빛으로 물들었고, 구름은 석양에 타올라 금홍빛으로 변해갔다.`,
        );
        await falcon.say_and_wait(`～～～♪`);
        // 걷는 행위를 통해 시간이 오후에서 황혼으로 흘렀음을 암시
        await era.printAndWait(
          `고가교가 드리운 그림자가 다리 밑을 짙게 덮었지만, 황혼의 찰나에는 한 줄기 빛이 다리 아래 풀밭을 비추고 있었다.`,
        );
        await era.printAndWait(
          `주황빛 하늘 아래 선 ${falcon.teen_sex_title}는 강변 풀밭이라는 자신만의 무대 위에서 공연을 이어가고 있었다.`,
        );
        // 비트 1
        await falcon.say_and_wait(`～～～♪ 모두들 고마워요!`);
        // 텅 빈 풀밭과의 대비
        await era.printAndWait(
          `${falcon.teen_sex_title}는 아무도 없는 빈터를 향해 능숙하게 인사했다.`,
        );
        await era.printAndWait(
          `——그럼에도 불구하고, ${falcon.teen_sex_title}의 얼굴에는 여전히 미소가 가득했다.`,
        );
        // 비트 2
        await era.printAndWait(`짝짝짝짝.`);
        await era.printAndWait(`${falcon.teen_sex_title}는 아무 반응이 없는 듯했다.`);
        await era.printAndWait(
          `——하지만 ${me.name}은(는) 왠지 모를 시선이 느껴지는 기분이 들었다.`,
        );
        await era.printAndWait(
          `그럼에도 귀를 살짝 쫑긋거렸을 뿐, ${falcon.teen_sex_title}는 공연을 멈추지 않았다.`,
        );
        era.drawLine();
        await falcon.say_and_wait(`——후⭐ 오늘의 팔코는 컨디션 최고!`);
        await era.printAndWait(
          `${falcon.teen_sex_title}는 가로등 불빛이 교차하는 지점에 서서, 마치 집중 조명을 받는 무대 위의 주인공을 흉내 내는 듯했다.`,
        );
        await era.printAndWait(`어쩌면, 이것이 ${falcon.sex}만의 무대일지도 모른다.`);
        await era.printAndWait(`고독한 아이돌인가.`);
        await falcon.say_and_wait(
          `팔코의 팬 1호 님⭐`,
        );
        await era.printAndWait(`발길을 돌리려던 ${me.name}은(는) 누군가 부르는 소리에 멈춰 섰다.`);
        era.printButton(`……팬 1호?`, 1);
        await era.input();
        await era.printAndWait(
          `빛을 머금은 ${falcon.teen_sex_title}는 거의 흥분에 가까운 활기찬 목소리로 ${me.name}에게 선언했다.`,
        );
        await falcon.say_and_wait(
          `팬 1호 님은 팔코의 콘서트를 처음부터 끝까지 다 들어준 첫 번째 사람이니까⭐`,
        );
        era.println();
        await era.printAndWait(
          `…… ${me.name}은(는) 잠시 회상했다. 중간에 두세 명 정도 구경꾼이 있긴 했지만, 다들 마지막 곡이 시작되기 전에 떠나버렸다.`,
        );
        await era.printAndWait(
          `즉, 당신만이 처음부터 끝까지 지켜본 유일한 관객이라는 소리다.`,
        );
        await era.printAndWait(
          `1월의 찬바람 속에서 2시간을 버텼으니, 팬이라고 불려도 할 말은 없을 것이다.`,
        );
        await falcon.say_and_wait(
          `팬 1호 님은 바라는 소원이 있어? 팔코가 할 수 있는 일이라면 뭐든지 들어줄게⭐`,
        );
        await era.printAndWait(`${me.name}은(는) 잠시 생각했다.`);
        era.printButton(`더트 선발 레이스에서 너를 만날 수 있을까?`, 1);
        await era.input();
        await era.printAndWait(
          `예상치 못한 대답이었는지, ${falcon.name}은 당황스러운 기색을 내비쳤다.`,
        );
        await falcon.say_and_wait(`……팔코는 지금 어울리는 트레이너를 찾는 중인데?`);
        era.printButton(`그렇다면, 나랑 계약하자.`, 1);
        await era.input();
        await falcon.say_and_wait(`에?`);
        await falcon.say_and_wait(`와아!`);
        await era.printAndWait(`${falcon.name}은 자신만의 방식으로 기쁨을 표현하는 듯했다.`);
        await falcon.say_and_wait(`팔코의 팬 1호님이 트레이너였다니!`);
        await falcon.say_and_wait(
          `그렇다면 트레이너 ${me.get_adult_sex_title()}에게 팔코가 잔디에서 얼마나 잠재력이 있는지 보여줘야겠네!`,
        );
        await era.printAndWait(
          `점점 흥분한 ${falcon.name}은 ${me.name}의 손을 꽉 잡았다.`,
        );
        era.printButton(`나는 더트에서 달리는 너의 모습을 보고 싶어.`, 1);
        await era.input();
        await falcon.say_and_wait(`에……`);
        await era.printAndWait(`${falcon.name}은 그 자리에 굳어버렸다.`);
        era.printButton(`나는 더트에서 활약하는 너를 보고 싶어.`, 1);
        await era.input();
        await era.printAndWait(
          `시간이 멈춘 듯한 정적 속에서, ${me.name}은(는) 도망치려는 ${falcon.name}의 눈동자를 정면으로 응시했다.`,
        );
        era.println();
        await falcon.say_and_wait(`……그치만 이건 팔코의 첫 번째 팬의 부탁인데...`);
        await era.printAndWait(
          `마치 한 세기가 지난 듯한 긴 침묵 끝에, ${falcon.name}은 마침내 답을 내놓았다.`,
        );
        await era.printAndWait(
          `더 이상 시선을 피하지 않고, 당당하게 ${me.name}을(를) 바라보는 ${falcon.name}.`,
        );
        await falcon.say_and_wait(
          `팔코는 잔디 위를 달려야만 가장 크고 반짝이는 무대에 설 수 있다고 생각해!`,
        );
        await falcon.say_and_wait(
          `게다가 더트랑 잔디는 인기 차이가 세 배, 네 배는 넘게 난다구!`,
        );
        await falcon.say_and_wait(
          `비록 팔코가 잔디에 서투르긴 하지만, 노력하면 분명 결과가 나올 거야.`,
        );
        era.printButton(
          `팔코는 더트 아이돌로서 자신만의 아이돌 시대를 열어볼 생각은 없어?`,
          1,
        );
        await era.input();
        await falcon.say_and_wait(`에에엣——?!`);
        await me.say_and_wait(
          `더트의 팬들도 자신들을 이끌어줄 아이돌의 탄생을 기다리고 있어. 아니, 그건 더트의 모두가 염원하는 일이야.`,
        );
        await me.say_and_wait(
          `——더트의 모두가 숨죽이며 스타의 탄생을 지켜보고 싶어 한다고!`,
        );
        await era.printAndWait(
          `깊게 숨을 들이켰다. ${falcon.name}을 설득하기까지 이제 정말 한 걸음 남았다.`,
        );
        era.printButton(`가장 빛나는 무대 위에 서고 싶지 않아?`, 1);
        await era.input();
        await falcon.say_and_wait(`……팔코의…… 가장 빛나는 무대?`);
        await me.say_and_wait(
          `아이돌이란 건 팬들의 기대에 부응해 불가능을 가능케 하는 내일의 별, 아니었어?`,
        );
        await era.printAndWait(
          `흐름을 완전히 가져온 ${me.name}은(는) 마치 명검이 쌀알을 베어 넘기듯 정확한 타이밍에 ${falcon.name}에게 손을 내밀었다.`,
        );
        await me.say_and_wait(`함께 공동의 이상을 향해 출발하자.`);
        await falcon.say_and_wait(
          `앞으로 잘 부탁해요, 트레이너…… 아니! 팔코의 팬 1호 님⭐`,
        );
        await era.printAndWait(`두 사람의 손이 단단히 맞잡혔다.\n`);
        await era.printAndWait(`${falcon.name}의 영입에 성공했다!`);
        new EventMarks(0).sub(event_hooks.out_river);
        new FalconEduMarks().after_recruit++;
        era.set('cflag:46:모집상태', recruit_flags.yes);
        add_event(
          event_hooks.week_end,
          new EventObject(46, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:대상물색', 0);
        return true;
    }
  }
};