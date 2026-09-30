const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} vp
 * @param {CharaTalk} me
 * @param {EventObject} event_object
 */
module.exports = async (vp, me, event_object) => {
  const montjeu = get_chara_talk(204);
  let temp;
  switch (event_object?.arg) {
    case 47 + 33:
      await print_event_name('먼 곳을 향해', vp);
      await era.printAndWait(
        `콧노래를 흥얼거리며, 가을 햇살이 은은한 온기를 남기는 날에 활기찬 찻집을 찾았다.`,
      );
      await era.printAndWait(
        `어쨌든 상대는 ${vp.name}의 스승이니 빈손으로 찾아가기도 멋쩍었다.`,
      );
      await era.printAndWait(`바구니에는 자신에게 주려고 산 찻캔이 들어 있었다.`);
      await era.printAndWait(
        `그곳에서 살짝 시선을 올리자, 오버사이즈 코트를 입은 ${vp.name}가 자세히 상품을 바라보고 있었다.`,
      );
      await era.printAndWait(
        `여러 찻잎의 향을 확인하고 있는 ${vp.sex}에게, ${me.name}은(는) 슬며시 다가갔다.`,
      );
      era.printButton(`「……트레이닝실에 두는 홍차 찻잎이 얼마 안 남았는데, 좀 골라 줄래?」`, 1);
      await era.input();
      await era.printAndWait(`${vp.name}는 귀를 쫑긋 세우며 기쁜 듯 꼬리를 흔들고 품평을 시작했다.`);
      await era.printAndWait(
        `자극이 적은 찻잎이 좋겠다고 생각하며 입구 쪽의 캔을 바구니에 담으려 하자, 이미 그 안에는 레몬 향이 나는 찻잎이 들어 있었다.`,
      );
      await era.printAndWait(
        `${vp.name}는 유독 신경이 쓰이는지 생글생글 웃으며 ${me.name}을(를) 바라보았다.`,
      );
      era.printButton(`「레몬이야?」`, 1);
      await era.input();
      await era.printAndWait(
        `딱히 불만을 표시하려던 건 아니었지만, ${vp.name}는 갑자기 볼을 부풀리며 항의했다.`,
      );
      await vp.say_and_wait(`${sys_get_callname(205, 0)}, 무슨 불만이라도 있으신가요?`);
      era.printButton(`「불만이 있는 건 아냐…… 예전에 산 적이 있어서. 좋아하는 맛이거든.」`, 1);
      await era.input();
      await era.printAndWait(
        `${me.name}이(가) 찻캔 세 개가 든 바구니를 계산대에 올려놓자, 낯익은 점원이 깜짝 놀란 표정을 지었다.`,
      );
      await era.printAndWait(`그는 손가락으로 계산기를 두드리며 눈썹을 치켜올렸다.`);
      await say_by_passer_by_and_wait(
        '찻집 주인',
        `오랜만이네요. 그 ${vp.get_child_sex_title()}가 새로 담당하시게 된 우마무스메인가요?`,
      );
      await era.printAndWait(`주인은 ${me.name}의 어깨너머로 뒤를 바라보았다.`);
      await era.printAndWait(
        `지금도 홍차를 구경하고 있는 ${vp.name}는 여전히 무패 행진 중인데다 오크스에서 우승했기에 팬이 제법 늘어난 상태였다.`,
      );
      await era.printAndWait(
        `하지만 대중의 시선을 한 몸에 받는 인기 우마무스메라고 하기에는 아직 조금 무리가 있었다.`,
      );
      await era.printAndWait(`아는 사람만 아는, 딱 그 정도의 느낌이었다.`);
      await era.printAndWait(`홍차를 포장하던 주인은 무언가를 눈치챈 듯 고개를 들었다.`);
      era.printButton(`「무슨 일 있나요?」`, 1);
      await era.input();
      await say_by_passer_by_and_wait(
        '찻집 주인',
        `엄청 인기 있는 거 아닌가요?`,
      );
      await era.printAndWait(
        `${me.name}이(가) 뒤를 돌아보니, 두 명의 젊은 여성이 ${vp.name}와 악수를 나누고 있었다.`,
      );
      await era.printAndWait(
        `두 사람 모두 ${vp.sex}의 팬인 듯했고, 밝게 응대해 주는 동경의 ${vp.get_uma_sex_title()}에게 푹 빠진 모습이었다.`,
      );
      await era.printAndWait(
        `G1에서 우승하기 전부터 눈치채고는 있었지만, ${vp.name}에게는 독특한 매력이 있었다.`,
      );
      await era.printAndWait(
        `투명한 귀여움을 뿜어내는 ${vp.sex}에게 매료된 사람은 트레센 내에서도 적지 않았다.`,
      );
      await era.printAndWait(`팬이 아직 적었을 때부터 수많은 사람들이 ${vp.sex}를 열광적으로 지지해 주었다.`);
      await era.printAndWait(`그런 생각을 하는 사이, 종이 가방 두 개가 계산대 위에 놓였다.`);
      await era.printAndWait(
        `지갑에서 지폐 몇 장을 꺼내 주인에게 건네자, ${vp.name}가 ${me.name}의 곁으로 돌아왔다.`,
      );
      await say_by_passer_by_and_wait(
        '찻집 주인',
        '여기 거스름돈입니다. 앞으로도 잘 부탁드립니다.',
      );
      await era.printAndWait(
        `${me.name}은(는) 개인적으로 쓸 찻잎이 든 봉투를 ${vp.sex}에게 건네며 가게를 나섰다.`,
      );
      await era.printAndWait(
        `일정하게 늘어선 가로수들이 조금씩 잎을 떨어뜨리기 시작했지만, 아직은 황금빛 가을 풍경을 즐길 수 있을 것 같았다.`,
      );
      await era.printAndWait(
        `대로를 걷다 보니, 옆에 있던 ${vp.get_teen_sex_title()}가 뒤를 돌아보았다.`,
      );
      await era.printAndWait(`그 시선 끝에는 방금 전 두 여성의 뒷모습이 보였다.`);
      era.printButton(`「방금 그 팬들이야?」`, 1);
      await era.input();
      await vp.say_and_wait(`네…… 그분들, 계속 제 레이스를 지켜봐 주셨대요.`);
      await vp.say_and_wait(`정말 기뻐요.`);
      await era.printAndWait(`${vp.name}가 수줍게 말했다.`);
      await era.printAndWait(
        `그러면서도 ${vp.sex}는 진지한 눈빛으로, 자신의 활약을 기대해 주는 두 팬을 보며 감회에 젖어 있었다.`,
      );
      await vp.say_and_wait(
        `여기에 오기 전까지 정말 많은 분의 도움을 받았어요. 스승님도 그중 한 분이고요. 가족과 친구들을 위해 노력하고 싶다는 마음은 지금도 변함없어요.`,
      );
      await vp.say_and_wait(
        `절 응원해 주시는 분들이 점점 늘어난다고 생각하면, 더 많이 달리고 싶고, 더 많이 이기고 싶어져요.`,
      );
      await era.printAndWait(
        `수많은 ${vp.get_uma_sex_title()}들이 대중의 시선에 노출되는 것에 압박감을 느낀다.`,
      );
      await era.printAndWait(
        `${me.name}의 담당 중에서도 G1처럼 주목받는 무대에서 실력을 제대로 발휘하지 못해 괴로워하는 ${vp.get_uma_sex_title()}가 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${vp.name}는 활약할수록 더 커져만 가는 기대에 조금도 주저하지 않았다.`,
      );
      await era.printAndWait(`그 모든 것을 힘으로 바꾸어 꿈을 향해 나아간다.`);
      await era.printAndWait(
        `그리고 그런 ${vp.sex}의 지금 목표는 바로 샹젤리제 거리 끝에 서 있는 거대한 건축물이 상징하는 그 레이스다.`,
      );
      await era.printAndWait(`나폴레옹이 세운 개선문. 우뚝 솟아 있는 승리의 상징.`);
      await era.printAndWait(
        `${vp.sex}는 분명 그 건너편에 나타나, 그 이름이 붙은 세계 최고봉의 레이스 무대에서 눈부시게 빛날 것이다.`,
      );
      era.printButton(`「……넌 반드시 이길 거야.」（호감도 +5）`, 1);
      await era.input();
      await era.printAndWait(`${vp.name}가 갑자기 뒤를 돌아보았다.`);
      await era.printAndWait(
        `평소처럼 천진난만한 미소를 짓던 모습과는 달리, ${vp.sex}는 상냥하게——하지만 무언가를 호소하듯, 고요한 바다와 같은 미소를 지으며 나지막이 속삭였다.`,
      );
      await vp.say_and_wait(`반드시요.`);
      await era.printAndWait(`${me.name}은(는) 그것이 단지 자신만을 향한 말이 아닐지도 모른다고 생각했다.`);
      era.println();
      sys_like_chara(205, 0, 5) && (await era.waitAnyKey());
      break;
    case 95 + 28:
      await print_event_name('정점 아래에서', vp);
      await era.printAndWait(`정신을 차려보니 ${me.name}은(는) 이미 샹젤리제 거리를 걷고 있었다.`);
      await era.printAndWait(
        `동쪽 하늘로 달이 떠오르고, 어둠이 짙어지는 거리에 가로등이 하나둘 켜졌다.`,
      );
      await montjeu.say_and_wait('답은 찾았나?');
      await era.printAndWait(
        `고개를 저었다. 하지만 ${montjeu.name}는 이미 예상했다는 듯 타하지 않고 조용히 말을 이어갔다.`,
      );
      await montjeu.say_and_wait('그렇다면——');
      era.printButton(`「잠깐.」`, 1);
      await era.input();
      await era.printAndWait(`${me.name}은(는) ${montjeu.sex}의 눈을 똑바로 응시했다.`);
      await era.printAndWait(
        `몇 년 전이든 반년 전이든, 도저히 정면으로 마주할 수 없었던 ${montjeu.sex}의 눈이었다.`,
      );
      await era.printAndWait(`${me.name}은(는) 이것이 혼자서 해결할 수 있는 문제가 아님을 알고 있었다.`);
      await era.printAndWait(
        `누군가와 마주하고 자신의 한계를 드러내는 것을 늘 두려워해 왔음을, ${me.name}은(는) 서서히 깨닫고 있었다.`,
      );
      era.printButton(`「내 과거 이야기를 들어줬으면 좋겠어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 한동안 ${me.name}의 얼굴을 지긋이 바라보았다.`,
      );
      await era.printAndWait(
        `몸을 도려낼 듯한 시선에 도망치고 싶어지기도 했지만, 여기서 버텨내지 못하면 아무것도 시작되지 않는다.`,
      );
      await era.printAndWait(
        `이윽고 ${montjeu.sex}는 두세 걸음 걸어가 ${me.name}을(를) 이끌며 벤치에 앉았다.`,
      );
      await era.printAndWait(`곁에 앉자, ${montjeu.name}가 서두를 꺼냈다.`);
      await montjeu.say_and_wait('내 앞에서 아무리 말을 번지르르하게 해봤자……');
      era.printButton(
        `「만약 그런 날이 온다면, 나도 ${vp.name}에게 똑같이 말할 거야.」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……알겠어.');
      await era.printAndWait(`${me.name}은(는) 그렇게 함으로써 자신과 마주하고자 했다.`);
      await era.printAndWait(`그것은 누구나 어찌할 수 없는 미숙함을 스스로 해부하는 것과 같았다.`);
      era.printButton(`고통스러운 과거를 회상한다`, 1);
      await era.input();
      await me.say_and_wait(
        `몇년 전, 난 네가 달렸던 개선문상을 가장 앞에서 지켜봤어. 너와 괴조가 이곳에서 사력을 다해 싸우고, 결국 괴조가 추월당하는 모습을 보았을 때…… 아무것도 할 수 없다는 무력감에 휩싸였지.`,
      );
      await era.printAndWait(
        `단도직입적으로 말해, ${montjeu.sex}는 일본의 수많은 트레이너들에게 일종의 트라우마였다.`,
      );
      await era.printAndWait(`넘을 수 없는 거대한 벽이자, 절대적인 전설.`);
      await era.printAndWait(`${montjeu.name}는 아무것도 묻지 않았다.`);
      await montjeu.say_and_wait(`하지만———— 너에게는 ${vp.name}가 있잖아.`);
      await era.printAndWait(`${montjeu.name}는 잠시 시선을 밤의 센강으로 돌렸다.`);
      await era.printAndWait(
        `검게 출렁이는 수면 위에는 별 하나 없었고, 보이지 않는 바람이 일으키는 잔잔한 물결 소리만이 고요히 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `하지만 ${vp.name}는 강인한 ${vp.get_uma_sex_title()}다. 혼자서도 이길 수 있을 것이다.`,
      );
      await montjeu.say_and_wait(
        `……${vp.sex}가 스스로를 사람들의 기대를 짊어질 수 있는 그릇이라 말했던 걸 기억하나?`,
      );
      era.printButton(`「응.」`, 1);
      await era.input();
      await era.printAndWait(`무한한 강함, 인간을 초월한 재능.`);
      await era.printAndWait(`그것이 있었기에 지금의 ${vp.name}는 강한 것이다.`);
      await montjeu.say_and_wait(
        `${vp.sex}는 압박감을 견뎌내는 힘이 대단하지. 앞으로도 사람들의 기대를 무한히 짊어지는 것에 대해 조금도 주저하지 않아.`,
      );
      await montjeu.say_and_wait(
        `다만, 만약 그 타고난 성질이 ${vp.sex}의 가치관을 형성한 것이라면…… 너는 어떻게 생각하지?`,
      );
      await era.printAndWait(`${montjeu.name}가 ${me.name}에게로 시선을 돌렸다.`);
      await era.printAndWait(
        `기대란 본래 아주 귀한 것. 끊임없는 노력과 뛰어난 성과를 내야만 타인에게서 얻을 수 있는 것이지, 결코 당연한 게 아니야.`,
      );
      await era.printAndWait(`하지만 ${vp.name}에게는 그것이 당연한 일이었다.`);
      await era.printAndWait(
        `${vp.sex}가 스스로 당연하게 여기며 해온 일들, 그 끝없는 기대의 과정 속에서 그 ${vp.get_teen_sex_title()}는 이 세상에서 무엇을 발견했을까.`,
      );
      await era.printAndWait(`가능성과 현상이 머릿속에서 하나로 연결되었다.`);
      era.printButton(`「……기대받지 못하는 것에 대한 두려움인가?」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement.');
      await era.printAndWait(
        `한때 전설이 되어 모든 이의 기대를 한 몸에 받았던 ${vp.get_uma_sex_title()}가 말을 이었다.`,
      );
      await montjeu.say_and_wait(
        `기대에 부응할 필요가 있지. 부응하면 할수록 새로운 기대는 더욱 커져만 가. 만약 ${vp.sex}가 그런 순환 속에 갇혀 있다면, 오직 기대받는 것만이 자신의 가치라고 오해하게 될지도 몰라. 이것이 ${vp.sex}의 근간을 이루는 생각이라면, 섣불리 부정하는 것은 피해야 하지.`,
      );
      era.printButton(`「오직 ${vp.sex}에게 기대를 걸 수밖에 없겠군.」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}가 고개를 끄덕였다.`);
      await montjeu.say_and_wait(
        `그렇게 하기 위해서라도, 나는 너라는 인물에게 기대를 걸어야만 해. 아무런 가치도 없는 사람에게 ${vp.sex}를 온전히 맡길 수는 없으니까.`,
      );
      await era.printAndWait(`${me.name}은(는) 잘 알고 있었다.`);
      await era.printAndWait(`하지만, 도대체 어떻게 해야 한단 말인가?`);
      await era.printAndWait(
        `${montjeu.name}가 자리에서 일어나 긴 머리를 휘날리며 ${me.name}을(를) 내려다보았다.`,
      );
      await era.printAndWait(
        `죄인을 심판하는 신과 같았던 눈빛과는 달리, 그 안에는 옅은 동정심이 섞여 있었다.`,
      );
      await era.printAndWait(`그것은 앞으로도 끊임없이 『고통』에 시달려야 할 자를 향한 연민이었을까.`);
      await montjeu.say_and_wait('내 역할은 여기까지야.');
      era.printButton(`「……미안해.」`, 1);
      await era.input();
      await era.printAndWait(
        `${me.name}에게 좋은 밤이 되기를 바란다는 짤막한 인사를 남기고, ${montjeu.name}는 떠나갔다.`,
      );
      await era.printAndWait(`하늘을 올려다보았다. 보름달이 고요히 떠서 ${me.name}을(를) 내려다보고 있었다.`);
      era.set('cflag:205:모집상태', -2);
      break;
    case 95 + 33:
      await print_event_name('단 하나뿐인, 유일한', vp);
      await era.printAndWait(
        `그날 이후로 ${vp.name}가 ${me.name}의 곁을 찾지 않는 날이 점점 늘어났다.`,
      );
      await era.printAndWait(`연락도 서서히 끊겨, 최근에는 편지가 왔다는 알림조차 받지 못했다.`);
      await era.printAndWait(`이런 상황에서 ${me.name}은(는)……`);
      era.printButton(`역시 나에게 ${vp.sex}를 강하게 책망할 자격은 없겠지.`, 1);
      era.printButton(`가만히 내버려 둘 수는 없다.`, 2);
      if ((await era.input()) === 1) {
        era.set('flag:강제배드엔딩', 205);
        return;
      }
      await era.printAndWait(
        `왠지 모르게 ${me.name}은(는) ${vp.name}와 처음 만났을 때의 정경이 떠올랐다.`,
      );
      await era.printAndWait(`이제 움직여야 할 때다.`);
      await era.printAndWait(
        `……해질녘, 유람선이 ${me.name}의 바로 아래 센강을 천천히 지나가고, 건너편으로는 튈르리 정원이 보였다.`,
      );
      await era.printAndWait(`초가을의 바람이 코트 자락을 스치고 지나갔다.`);
      await era.printAndWait(
        `그 자락을 손으로 만지며, ${me.name}은(는) 다시금 떠올려야 할 과거를 되짚어 보았다.`,
      );
      await era.printAndWait(`트레이너가 된 이유.`);
      await era.printAndWait(
        `승리든 패배든 결국 나중에 따라오는 것일 뿐, 트레센의 문을 두드렸을 때 머릿속에 가득했던 것은 분명 훨씬 더 소박한 소망이었으리라.`,
      );
      await era.printAndWait(`그것은 바로……`);
      await vp.say_and_wait(`……${sys_get_callname(205, 0)}?`);
      await era.printAndWait(`귀에 익은 목소리였다.`);
      await era.printAndWait(
        `뒤를 돌아보니, 처음 만났을 때처럼 코트를 입은 ${vp.name}가 서 있었다.`,
      );
      await vp.say_and_wait(`왜 여기에 있나요?`);
      era.printButton(`「그건——」`, 1);
      await era.input();
      await era.printAndWait(`${vp.sex}는 곧바로 ${me.name}에게서 시선을 돌려 버렸다.`);
      await era.printAndWait(`산처럼 요지부동인 거절의 벽.`);
      await era.printAndWait(
        `${vp.sex}를 제대로 마주하지 못하고 혼자 버려두었던 것, 그것이야말로 ${me.name}이(가) 직시해야만 하는 과거였다.`,
      );
      await era.printAndWait(`이제 와서 후회할 자격조차 어디에도 없었다.`);
      await vp.say_and_wait(`……죄송해요.`);
      await era.printAndWait(
        `곁을 스쳐 지나가며 뛰쳐나가려는 ${vp.sex}를 향해, ${me.name}이(가) 소리쳐 불러 세웠다.`,
      );
      era.printButton(`「${vp.name}.」`, 1);
      await era.input();
      await era.printAndWait(`${me.name}의 앞에서 ${vp.name}가 발걸음을 멈추었다.`);
      await era.printAndWait(
        `하지만 ${vp.sex}는 고개를 돌리지 않은 채, 여전히 ${me.name}에게 등을 돌리고 있었다.`,
      );
      await era.printAndWait(`정적 속의 소란함 가운데, ${me.name}은(는) 천천히 입을 열었다.`);
      await era.printAndWait(`통증이 여전히 온몸을 맴돌았다.`);
      era.printButton(`「네가 나를 선택했을 때 했던 말, 기억해?」`, 1);
      await era.input();
      await vp.say_and_wait(`……수많은 말을 했던 것 같은데요.`);
      await me.say_and_wait(
        `너 이랬잖아. 『개선문상을 연패할 ${vp.get_uma_sex_title()}를 담당하게 된다면, 사회인으로서 트레이너님의 평가도 엄청 올라가지 않겠어요?』라고.`,
      );
      await vp.say_and_wait(
        `그건…… 너무 부끄러우니까, 가급적이면 없었던 일로 해 주셨으면 좋겠어요, ${me.actual_name}.`,
      );
      await era.printAndWait(`${vp.sex}는 고개를 조금 숙였다.`);
      era.printButton(`「난 줄곧 몰랐어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${vp.name}는 강했다. 지금까지의 ${me.name}에게 있어서, ${vp.sex}는 지나치게 과분할 정도로 훌륭한 담당이었다.`,
      );
      await era.printAndWait(`마음 한구석에서 생겨난 그 불균형이 결국 마음의 거리를 벌려 놓았던 것이다.`);
      await era.printAndWait(
        `${vp.sex}가 아무리 훌륭한 성적을 거두어도, 마음 놓고 함께 기뻐해 주지 못했다.`,
      );
      era.printButton(`「넌 언제나 나를 유일한 트레이너로 바라봐 주었는데 말이야.」`, 1);
      await era.input();
      await era.printAndWait(`달리는 기술은 ${montjeu.name}가 가르쳐 준 것일지도 모른다.`);
      await era.printAndWait(`그렇다 하더라도, 지금 이 순간 ${vp.sex}의 곁에 서 있는 사람은 바로 ${me.name}(이)었다.`);
      await era.printAndWait(
        `${vp.sex}의 각질을 확인하고, 특성을 이해하며, 계속해서 레이스를 지켜봐 온 사람은 바로 ${me.name}(이)었다.`,
      );
      await era.printAndWait(`이 자리에 서 있다는 사실 자체가 의미를 지니는 법이다.`);
      await era.printAndWait(
        `이 세상에서 유일한 ${vp.name}의 트레이너로서, ${me.name}에게는 ${vp.sex}에게 맡겨야 할 무언가가 있었다.`,
      );
      await era.printAndWait(`이 세계에 발을 들여놓은 그날부터.`);
      await era.printAndWait(
        `세계 최고봉이라 불리는 개선문상이라는 레이스가 탄생한 그날부터.`,
      );
      await era.printAndWait(
        `「우리들」에게는 없는 무한한 가능성을 품고 태어난 「${vp.sex}들」과 조우한 그날부터.`,
      );
      await era.printAndWait(`인간으로서, ${me.name}은(는) 진심으로 원하고 있었다.`);
      era.printButton(`「${vp.name}, 나의 영혼을 불태워 줘.」（애정도 +5）`, 1);
      await era.input();
      await era.printAndWait(`사람들은 살아가면서 언젠가 자신의 모든 것을 바꾸어 놓을 존재와 조우하게 된다.`);
      await era.printAndWait(
        `${me.name}은(는) 분명 그런 염원을 이루기 위해 모든 우연이 이곳에서 하나로 연결된 것이라 생각했다.`,
      );
      await era.printAndWait(`이제야 확실히 깨달았다. 자신은 ${vp.sex}의 전속 트레이너라는 것을.`);
      await era.printAndWait(`모든 기대를 ${vp.sex}에게 건다.`);
      await era.printAndWait(`${vp.name}의 어깨가 자그맣게 떨렸다.`);
      await era.printAndWait(
        `뒤를 돌아본 ${vp.sex}는 옅은 미소를 짓고 있었지만, 그 눈가에는 반짝이는 무언가가 맺혀 있었다.`,
      );
      await era.printAndWait(
        `${vp.sex}는 기쁜 듯하면서도 곤란한 표정으로 조심스레 손을 가슴에 얹었다.`,
      );
      await era.printAndWait(`센강에서 불어온 바람이 ${vp.sex}의 붉은 리본을 하늘하늘 휘날렸다.`);
      await vp.say_and_wait(`저에게 기대를 걸어 주시는 건가요?`);
      await era.printAndWait(
        `그 짧은 마디 속에, ${vp.sex}가 가슴 깊이 묻어두었던 불안이 파르르 떨리며 배어 나왔다.`,
      );
      await era.printAndWait(
        `그동안 ${vp.sex}에게 모든 것을 걸지 못했던 자신을 반성하며, 그 진심을 확실히 받아들이겠다는 듯 강하게 고개를 끄덕였다.`,
      );
      await era.printAndWait(`${vp.name}는 ${me.name}의 몸짓을 보며 눈을 가늘게 떴다.`);
      await vp.say_and_wait(`D'accord!`);
      await era.printAndWait(`마지막으로 흐른 한 방울의 눈물이 노을빛을 받아 아름답게 반짝였다.`);
      await era.printAndWait(
        `지금 이 순간, 이곳에서 마침내 ${me.get_couple_title()} 사이에 단 하나의 소망이 싹텄다.`,
      );
      era.println();
      era.set('cflag:205:모집상태', recruit_flags.yes);
      sys_love_uma(205, 5) && (await era.waitAnyKey());
      if (sys_check_race_ready(205)) {
        sys_reg_race(205).curr = {
          race: race_enum.prix_lat,
          week:
            era.get('flag:현재턴수') +
            race_infos[race_enum.prix_lat].date -
            33,
        };
      }
      break;
    case 95 + 42:
      temp = [0, 0];
      await print_event_name('영원히 당신의 것', vp);
      await era.printAndWait(
        `어느 휴일 아침, 갑자기 인터폰이 울려 ${me.name}은(는) 현관으로 향했다.`,
      );
      await vp.say_and_wait(`Salut! 트레이너, 저 왔어요!`);
      era.print(`${me.name}의 선택은:`);
      era.printButton(`문을 닫는다`, 1);
      era.printButton(`……헛것을 봤나?（호감도 -10, 애정도 +1）`, 2);
      if ((await era.input()) === 2) {
        temp = [-10, 1];
      }
      await vp.say_and_wait(`잠깐만요, 저라니까요!`);
      era.printButton(`도를 아십니까인가?`, 1);
      era.printButton(`「돌아가세요, 전 그런거 안 믿어요!」（호감도 -10, 애정도 +1）`, 2);
      if ((await era.input()) === 2) {
        temp[0] -= 10;
        temp[1]++;
      }
      await era.printAndWait(
        `${me.name}은(는) 문을 닫으려고 했지만, 안타깝게도 인간의 악력으로 ${vp.get_uma_sex_title()}를 이기는 것은 불가능했다.`,
      );
      await era.printAndWait(`문이 왈칵 열렸다.`);
      await era.printAndWait(
        `${vp.get_child_sex_title()}는 중심을 잃고 현관 바닥에 엉덩방아를 찧고 말았다.`,
      );
      await era.printAndWait(
        `프랑스의 공주이자 천재 ${vp.get_teen_sex_title()}. 하지만 ${me.name}의 눈앞에서 헝클어진 머리를 정돈하는 모습은 절로 웃음을 자아내게 만들었다.`,
      );
      await era.printAndWait(
        `옷차림은 여전히 반바지에 티셔츠 차림이었지만, 키는 처음 만났을 때보다 훌쩍 자라 있었다.`,
      );
      await era.printAndWait(
        `유럽인 특유의 투명하고 고운 피부가 돋보였고, 얼굴에는 아직 앳된 티가 남아 있었다.`,
      );
      await era.printAndWait(
        `${me.get_couple_title()}은 개선문상에서 승리를 거두었다. 그 후 그녀는 TV와 잡지에 종종 모습을 드러내고 유명 브랜드와 콜라보를 진행하는 등, 일약 신드롬을 일으킨 유명 인사가 되어 있었다.`,
      );
      await vp.say_and_wait(`제가 어디에 있을지는 제가 정해요, 트레이너.`);
      await era.printAndWait(
        `시선과 시선이 맞부딪쳤다. 그녀의 주장에도 나름 일리가 있었기에, ${vp.name}의 얼굴에는 당당한 기색이 감돌았다.`,
      );
      await era.printAndWait(
        `${vp.name}는 세계 최강의 ${vp.get_uma_sex_title()}다. ${me.name}은(는) 그때의 광경을 결코 잊지 못한다.`,
      );
      await era.printAndWait(`푸른빛 도는 승부복을 입고 결승선을 통과하던 그 짜릿한 순간을.`);
      await era.printAndWait(
        `중학생다운 솔직함과 정직함, 그리고 그 나이대에 어울리는 지기 싫어하는 근성을 겸비한 활기찬 ${vp.get_uma_sex_title()}의 모습이었다.`,
      );
      await era.printAndWait(
        `그때 그 아이가 이렇게 자랐다. 키가 훌쩍 크더니 어느덧 늘씬한 모델 체형으로 변모해 가고 있었다.`,
      );
      await era.printAndWait(`머리카락은 끝부분까지 정성스럽게 관리되어 있어, 마치 인형처럼 정돈되어 있었다.`);
      await era.printAndWait(`그야말로 진짜배기 미인이었다.`);
      await vp.say_and_wait(`${sys_get_callname(205, 0)}.`);
      await vp.say_and_wait(`돌아가고 싶지 않아요.`);
      await vp.say_and_wait(`하지만…… 당신이 원치 않으신다면 지금 당장 갈게요.`);
      await era.printAndWait(
        `${vp.sex}의 눈동자에 ${me.name}의 부스스한 얼굴이 비쳤다. 뭐, 방금 막 일어났으니 당연한 몰골이겠지만.`,
      );
      era.print(`${me.name}의 대답은……`);
      era.printButton(`「……일단 돌아가.」`, 1);
      era.printButton(`「좀 걸을까.」（호감도 +15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      if ((await era.input()) === 1) {
        await vp.say_and_wait(`……알겠어요.`);
        await era.printAndWait(`정답에 가까운 대답이었을지는 몰라도, 최선의 선택은 아니었을지도 모른다.`);
        await era.printAndWait(
          `${vp.name}는 덤덤하게 대답하고는, 왔던 길을 되돌아 걸어가기 시작했다.`,
        );
        await era.printAndWait(
          `${me.name}이(가) 말한 대로 돌아가는 ${vp.sex}의 뒷모습이 점점 멀어져 갔다.`,
        );
        await era.printAndWait(
          `그것이 분명 ${me.name}이(가) 바라던 결과였음에도, 어째서인지 차마 끝까지 지켜볼 수가 없었다.`,
        );
        await era.printAndWait(`왜일까? 아니, 이유는 뻔했다.`);
        await era.printAndWait(`——온몸을 파고드는 지독한 허탈감이 가슴을 까맣게 태우고 있었다.`);
        await era.printAndWait(`「붙잡지 않아도 되겠어?」 어디선가 그런 목소리가 들려오는 듯했다.`);
        await era.printAndWait(
          `손을 뻗고 싶었지만, ${me.name}은(는) 그 사소한 행동조차 망설였다. 결국 ${me.name}은(는) 아무것도 하지 못했다.`,
        );
        await era.printAndWait(`그리고 ${me.name}은(는) 생각을 떨쳐내려는 듯 집 안으로 무겁게 발걸음을 옮겼다.`);
        era.println();
        sys_like_chara(205, 0, temp[0] - 600, true, temp[1]) &&
          (await era.waitAnyKey());
      } else {
        era.drawLine();
        await era.printAndWait(`${vp.name}는 여전히 반바지에 검은 티셔츠 차림이었고, 선글라스를 끼고 있었다.`);
        await era.printAndWait(
          `팬들에게 들키고 싶지 않아서였을까, 특유의 아름다운 밤색 머리칼을 지나치게 단정하게 정리한 탓에 오히려 주변의 시선을 끌고 있었다.`,
        );
        await era.printAndWait(
          `우마무스메의 미모는 대부분 털색에 의해 결정된다고들 한다.`,
        );
        await era.printAndWait(
          `물론 이목구비 등도 고려해야 하겠지만, 전체적으로 보면 모질과 털빛의 비중이 훨씬 크다.`,
        );
        await era.printAndWait(
          `${vp.name}의 머리카락과 꼬리는 이 근처의 ${vp.get_uma_sex_title()}들과는 확연히 달랐다.`,
        );
        await era.printAndWait(`변장한 의미가 전혀 없잖아……`);
        await era.printAndWait(`${vp.name}는 차창 밖으로 흘러가는 풍경을 가만히 바라보았다.`);
        await era.printAndWait(
          `차에 몸을 싣고 한참을 가다 환승을 위해 내렸을 때, 인파 속에서 길을 잃지 않도록 ${me.name}은(는) ${vp.name}의 손을 꼭 잡고 길을 인도했다.`,
        );
        await era.printAndWait(
          `문득 뒤를 돌아보자, 사람들 틈에 섞여 있던 ${vp.sex}의 얼굴에 진흙 속에 피어난 꽃처럼 눈부시게 아름다운 미소가 피어올라 있었다.`,
        );
        await era.printAndWait(`휴일이라 그런지 거리는 행인들로 붐볐다. 가족 단위의 나들이객도 많았다.`);
        await era.printAndWait(
          `엄마 손을 잡은 아이가 신기한 듯 주변을 두리번거리고 있었다. ${vp.name}는 그 아이에게서 한동안 눈을 떼지 못했다.`,
        );
        await era.printAndWait(
          `${vp.sex}는 촉촉이 젖은 눈으로, 마치 간청하듯 진지하게 속삭였다.`,
        );
        await vp.say_and_wait(`조금만 더, 아주 조금만 더 이대로 있으면 좋겠어요.`);
        await era.printAndWait(
          `결국 ${me.get_couple_title()}이 도착한 곳은 다름 아닌 경기장이었고, 오이 경기장의 레이스를 관람하게 되었다.`,
        );
        await vp.say_and_wait(`역시 레이스군요!`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name}는 흥미진진한 눈빛으로 레이스를 지켜보았다.`);
        await era.printAndWait(`꽤 흥미로운 레이스였지만, 지금 진행 중인 것은 엄연히 G3였다.`);
        era.printButton(`「조금 의외네.」`, 1);
        await era.input();
        await vp.say_and_wait(`네?`);
        era.printButton(
          `「개선문상을 우승한 ${vp.get_uma_sex_title()}가 G3 레이스에 관심을 보이다니 말이야.」`,
          1,
        );
        await era.input();
        await vp.say_and_wait(`……그렇게 보일지도 모르겠네요.`);
        await vp.say_and_wait(
          `하지만 당신도 트레이너라면 아실 텐데요. ${vp.sex}들에게 있어서는 이것도 개선문상 못지않은 무대라는 걸요.`,
        );
        era.printButton(`「그건 너무 과장한 거 아냐?」`, 1);
        await era.input();
        await vp.say_and_wait(`……`);
        await era.printAndWait(`${vp.name}의 말에 어느샌가 묵직한 무게감이 실려 있었다.`);
        await era.printAndWait(`몇 년 전의 ${me.name}(이)라면 감히 그녀에게 무어라 한마디 조차 던질 자격이 없었을 터였다.`);
        await vp.say_and_wait(
          `${vp.sex}들에게 있어서는 커다란 무대예요. 이를 위해 몸을 조율하고, 이곳에 선 거죠. 자신의 영혼을 걸고서요. 그러니까——`,
        );
        await me.say_and_wait('결승선을 통과했네.', true);
        era.printButton(`「……그래?」`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name}에게 있어 이것은 특별할 것 하나 없는, 수많은 G3 레이스 중 하나일 뿐이었다.`,
        );
        await era.printAndWait(
          `평범한 준비와 평범한 노력, 그리고 아주 사소한 반짝임이 있을 뿐인, 그런 평범한 레이스.`,
        );
        await era.printAndWait(
          `어쩌면 ${me.name}은(는) 트레이너라는 권태로운 입장에서 너무나 많은 레이스를 보아온 탓에, 정말 중요한 무언가를 놓치고 있었던 것일지도 모른다.`,
        );
        await vp.say_and_wait(`……후훗.`);
        await era.printAndWait(`씁쓸한 웃음이 새어 나왔다.`);
        await vp.say_and_wait(`……`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `경마장은 한산해졌다. 레이스는 이미 모두 막을 내렸다. 하지만 ${me.name}은(는) 도저히 자리에서 일어날 수 없었다. 마치 납덩이라도 매단 듯 무거운 무릎을 꺾은 채, 텅 빈 관람석에 그대로 주저앉아 있었다.`,
        );
        await era.printAndWait(`바람이 차가웠다.`);
        era.drawLine();
        await era.printAndWait(
          `깊은 밤, ${me.name}과(와) ${vp.name}는 도쿄의 거리를 나란히 걸었다.`,
        );
        await vp.say_and_wait(`……저, 재팬 컵에 나가고 싶어요.`);
        await vp.say_and_wait(`……`);
        new TreveEduMarks().japa_cup = 4;
        await era.printAndWait(
          `${vp.name}가 이제부터 아주 중요한 이야기를 꺼내려 한다는 사실을, ${me.name}은(는) 직감적으로 알아차렸다.`,
        );
        await vp.say_and_wait(`전 당신을 잊을 수 없었어요, 트레이너.`);
        await vp.say_and_wait(
          `국가나 인종 같은 건 아무래도 좋아요. 하지만 트레이너, 당신과 함께라면 정말 즐거울 것 같아요.`,
        );
        await era.printAndWait(`이것은 온전히 ${me.name}의 죄였다.`);
        await era.printAndWait(`가슴 한구석이 아려왔지만, ${me.name}은(는) 아무렇지 않은 척 표정을 숨겼다.`);
        await vp.say_and_wait(`사랑해요.`);
        await vp.say_and_wait(`줄곧 당신을 사랑해 왔어요.`);
        await era.printAndWait(`한 마디 한 마디가 너무나 매끄럽게 흘러나왔다.`);
        await era.printAndWait(
          `분명 속으로 수없이 연습하고 또 연습했을 터였다. 오직 ${me.name}만을 위해 특별히 연습해 온 고백이었다.`,
        );
        await era.printAndWait(`머릿속이 새하얘졌다. 심장이 거세게 뛰고 호흡이 가빠져 오는 듯한 착각마저 들었다.`);
        await era.printAndWait(
          `${vp.sex}가 마음을 전해올 때마다, ${me.name}의 비겁한 속내 역시 가차 없이 파헤쳐졌다.`,
        );
        await era.printAndWait(
          `마치 고치에서 실을 자아내듯, ${vp.name}의 올곧은 대사들이 마음에 씐 베일을 한 겹씩 벗겨내며 ${me.name}의 심장을 적나라하게 드러내고 있었다.`,
        );
        await era.printAndWait(`그리고 ${me.name}은(는) 뼈저린 후회와 아쉬움을 느꼈다.`);
        await era.printAndWait(`${vp.name}는 끊임없이 이야기를 쏟아냈다.`);
        await vp.say_and_wait(
          `……있죠, ${
            me.actual_name
          }. 만약 우리가 트레이너와 ${vp.get_uma_sex_title()}가 아니었더라도, 서로 만날 수 있었을까요?`,
        );
        era.printButton(`「……아니, 못 만났겠지.」`, 1);
        await era.input();
        await vp.say_and_wait(`그렇겠죠.`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `${me.get_couple_title()}이 서 있는 자리에서 밤하늘을 올려다보니, 희미한 일등성 몇 개만이 외롭게 빛나고 있었다.`,
        );
        await era.printAndWait(`도심에서 바라보는 특별할 것 없는 밤하늘.`);
        await era.printAndWait(
          `이 나지막하고 우중충한 하늘 아래에서 태어나 아마도 이곳에서 뼈를 묻을 ${me.name}과(와), 눈부신 은하수 같은 미래를 품고 달리는 ${vp.sex}.`,
        );
        await era.printAndWait(`두 사람 사이의 격차는 너무나도 극명했다.`);
        await era.printAndWait(`${me.name}은(는) 당장이라도 울음을 터뜨릴 것 같은 ${vp.name}에게 차갑게 선언했다.`);
        await era.printAndWait(`밤바람이 불어왔다. 해가 저물어가고 있었다.`);
        await era.printAndWait(`${vp.name}의 눈동자는 처음 만났을 때와 비교해 조금도 변함이 없었다.`);
        await era.printAndWait(
          `지금까지 수없이 반추해 왔던 기억 속의 ${vp.sex} 그대로였다.`,
        );
        await era.printAndWait(`하지만 확실히 변한 것도 있었다. ${vp.sex}의 마음속에 레이스 이외의 것에 대한 열망이 싹튼 것이다.`);
        await era.printAndWait(`시간은 모든 것을 변화시킨다.`);
        await era.printAndWait(`${me.name}은(는) ${vp.sex}와 다르다. 그저 그녀의 발목을 잡을 뿐인 존재다.`);
        await era.printAndWait(`${me.name}은(는) 동경하는 ${vp.get_uma_sex_title()}의 발목을 잡고 싶지 않았다.`);
        await era.printAndWait(`그러니까——`);
        era.printButton(`「헤어지자.」`, 1);
        await era.input();
        await vp.say_and_wait(`읏……!`);
        await me.say_and_wait(
          `다시는 내 앞에 나타나지 마. 공적인 일이 아니라면 일본에 오지도 마. 내 눈앞에서 사라져.`,
        );
        await vp.say_and_wait(`왜, 어째서 그런 심한 말씀을 하시는 거예요!`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`제 기억 속의 트레이너는 무척 상냥하셨단 말이에요, 그래서 전 줄곧——`);
        await me.say_and_wait(`그건 네 착각이야.`);
        await vp.say_and_wait(`으……!`);
        await me.say_and_wait(
          `……곧 밤이 깊어질 테고, 자고 일어나면 아침이 오겠지. 그렇게 내일이 되면 영원히 안녕이야——`,
        );
        await vp.say_and_wait(`기다려 주세요!`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`적어도, 적어도 마음만은… 적어도 트레이너의 진짜 속마음만큼은——`);
        era.printButton(`「모르겠어.」`, 1);
        await era.input();
        await vp.say_and_wait(`아……!`);
        await era.printAndWait(`${me.name}은(는) 그야말로 최악의 인간에게나 어울릴 법한 모진 말을 내뱉었다.`);
        await vp.say_and_wait(`거짓말쟁이!`);
        await me.say_and_wait(`……`);
        await era.printAndWait(`${me.name}의 등 뒤로 ${vp.name}가 울며 뛰어가는 발소리가 멀어졌다.`);
        await era.printAndWait(`${me.name}은(는) 비틀거리는 걸음으로 도쿄 경기장으로 향했다.`);
        await era.printAndWait(
          `경기장은 싸늘하게 식어 있었고, ${me.name}은(는) 도로 위를 달리는 차 소리와 나뭇잎이 서스레치는 소리 등 주변의 소음이 다시금 선명해지는 것을 느꼈다.`,
        );
        await era.printAndWait(`11월, 재팬 컵이 코앞으로 다가와 있었다.`);
        await era.printAndWait(
          `${me.name}은(는) 한동안 그곳에 머물렀다. 쓸쓸한 가을 경기장에 멍하니 홀로 서 있었다.`,
        );
        await era.printAndWait(`${me.name}의 곁에는 이제 아무도 없었다.`);
        await era.printAndWait(`이걸로 된 거다. 그러니까——`);
        era.printButton(`「전부 잊자……」`, 1);
        await era.input();
        await era.printAndWait(`——그렇게 몇 분이나 흘렀을까.`);
        await era.printAndWait(`하늘은 완전히 어두워졌고, 도쿄 경기장 위로 짙은 밤의 어둠이 가라앉았다.`);
        await era.printAndWait(`안내 방송에서는 곧 폐장 시간임을 알리고 있었다.`);
        await era.printAndWait(`가슴 한구석에 거대한 구멍이 뚫린 것만 같았다.`);
        await era.printAndWait(
          `${me.name}이(가) 막 발걸음을 옮겨 떠나려던 찰나…… 출입구 쪽에 ${vp.name}가 서 있었다.`,
        );
        era.printButton(`「어째서…… 여기에 있는 거야……」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.name}는 엄청난 각력으로 ${me.name}에게 돌진했다. ${vp.sex}의 머리가 창처럼 ${me.name}의 복부에 박혔고, 폐가 으스러지는 듯했다.`,
        );
        await era.printAndWait(`아프다, 엄청나게 아프다.`);
        await era.printAndWait(`뼈를 찌르는 듯한 통증이 신경을 자극했다.`);
        await era.printAndWait(
          `${me.name}의 배를 껴안은 채, ${vp.sex}는——`,
        );
        await era.printAndWait(`울고 있었다.`);
        await era.printAndWait(
          `그 사파이어처럼 아름다운 눈동자가 일그러졌고, 찢어질 듯 미간을 찌푸리고 있었다.`,
        );
        await vp.say_and_wait(
          `트레이너 바보! Stupide idiot. Pourquoi dis-tu des choses aussi horribles! (진짜 바보! 어째서 그렇게 심한 말을 하는 건가요!)`,
        );
        era.printButton(`「잠깐만! 무슨 말을 하는!——」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name}는 그대로 ${me.name}의 품 안에서 울었다.`);
        await era.printAndWait(
          `멋대로 뛰어들어 피해를 입은 건 ${me.name}인데, 정작 우는 건 ${vp.sex}였다.`,
        );
        await era.printAndWait(`물론, ${vp.sex}의 마음에 상처를 준 것은 ${me.name}(이)다.`);
        await era.printAndWait(
          `정리 작업을 준비하던 스태프가 왔다. 놀란 표정으로 ${me.get_couple_title()}을 빤히 쳐다보았다.`,
        );
        await era.printAndWait(`아마도 미친 여자애와 나쁜 남자의 치정 싸움 정도로 여겨졌겠지.`);
        await era.printAndWait(`그 사람은 곧바로 시선을 돌려 자신의 업무로 돌아갔다.`);
        await era.printAndWait(
          `일루미네이션이 경기장을 수놓고 있었고, 그런 장소에서 ${me.get_couple_title()}은 바닥에 주저앉아 있었다.`,
        );
        await vp.say_and_wait(
          `제가 어떤 마음으로 여기에 서 있었는지 알기나 하나요! 저를 마중 나올 거라면 빨리 왔어야죠!`,
        );
        era.printButton(`「어!? 네가 날 매복해서 기다린 게——」`, 1);
        await era.input();
        await vp.say_and_wait(`시끄러워요, 시끄러워요! 당신의 변명 따위 듣고 싶지 않아요, 이 바보!`);
        era.printButton(`「어어어?」`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 정말로 ${vp.get_uma_sex_title()} 특유의 괴력에 안겨 으스러질 것 같아, ${vp.name}의 등을 가볍게 토닥였다.`,
        );
        await era.printAndWait(
          `분명 『abandonne-포기해』라고 말했는데도, ${vp.name}는 조금도 떨어지려 하지 않았다. 통곡하는 ${vp.sex}는 오히려 힘이 더 강해졌다.`,
        );
        await era.printAndWait(`이것이 자업자득이라는 걸까………… 하지만 갈비뼈가 정말로 부러질 것 같다.`);
        await vp.say_and_wait(`어떤가요?`);
        era.printButton(`「?」`, 1);
        await era.input();
        await vp.say_and_wait(`저를 사랑하나요!? 사랑하지 않나요!?`);
        era.printButton(`「그렇게 말할 문제가 아니잖아——」`, 1);
        await era.input();
        await vp.say_and_wait(`바로 그런 문제예요!`);
        era.printButton(`「사랑하지 않았다면, 이렇게 곤란해하지도 않았어.」`, 1);
        era.printButton(`「너를 좋아하니까 곤란한 거잖아!」`, 2);
        await era.input();
        await era.printAndWait(`${vp.name}는 마치 물 만난 물고기 같았다.`);
        await vp.say_and_wait(
          `그럼 빨리 결혼식을 올려요! 약혼하고, 반지도 사야 하고…… 『스승님』도 분명 우리를 축복해 주실 거예요!`,
        );
        await vp.say_and_wait(
          `프랑스에서 한다면 교회겠죠? 일본에서도 괜찮아요, 새하얀 옷을 입고 절 앞에서 사랑을 맹세하는 거예요!`,
        );
        era.printButton(`「절이 아니라 신사라고 하는 거야.」`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 혼자 신난 ${vp.name}를 말리기 위해 ${vp.sex}의 어깨를 붙잡았다.`,
        );
        await vp.say_and_wait(`정말 대담하시네요…`);
        await vp.say_and_wait(`밖에서 이러다니…… 하지만 당신이라면——`);
        era.printButton(`「이상한 소리 하지 마! 난 결혼 얘기 같은 건 한 적 없어!」`, 1);
        await era.input();
        await vp.say_and_wait(`즉 일단은 연인이 되자는 뜻이군요, 정말 감동했어요!`);
        await vp.say_and_wait(
          `주변 사람들도 분명 이해하고 받아들여 줄 거예요! 그렇지 않으면, 아이가 정말 괴로울 테니까요!`,
        );
        era.printButton(`「난 유럽인도 아닌걸.」`, 1);
        await era.input();
        await vp.say_and_wait(`인종이 그렇게 중요한가요!?`);
        era.printButton(`「중요하잖아!?」`, 1);
        await era.input();
        await vp.say_and_wait(
          `저는 당신의 인종과 외모를 보고 사랑에 빠진 게 아니에요, 당신의 마음에 사랑에 빠진 거라고요!`,
        );
        await vp.say_and_wait(
          `아시아인? 그래서요, 어쨌다는 건가요? 떠들어대는 사람들에겐 『시끄러워』라고 소리쳐 줄 거예요! 누구도 우리를 방해할 순 없어요!`,
        );
        await vp.say_and_wait(`멋대로 제 가치를 결정하지 마세요!`);
        await vp.say_and_wait(
          `제 가치는 제가 결정해요, 앞으로도 계속! 자만하지 마세요! 당신과 결혼한다고 해도, 저는 아무것도 변하지 않아요! 만약 누군가 성가신 소리를 한다면, 그 녀석의 머리를 비틀어 버릴 거예요!`,
        );
        era.printButton(`「그건 좀……」`, 1);
        era.printButton(`「그럴 필요까지는……」`, 2);
        await era.input();
        await era.printAndWait(
          `그러자, 비록 울어서 부은 얼굴이었지만, 그럼에도 ${vp.name}는 고귀하게 일어섰다.`,
        );
        await era.printAndWait(
          `화장이 지워졌어도, ${vp.sex}는 여전히 아름다웠다. 마치 밤을 신성하게 비추는 달 같았다.`,
        );
        await vp.say_and_wait(
          `저는 천재 ${vp.get_uma_sex_title()}예요! 대부분의 일은 fermez-la 라고 할 수 있다고요!`,
        );
        era.printButton(`「널 힘들게 하고 싶지 않아.」 (호감+10, 애정도+1)`, 1);
        era.printButton(`「이해해 줬으면 해……」`, 2);
        if ((await era.input()) === 1) {
          temp[0] += 10;
          temp[1]++;
        }
        await vp.say_and_wait(
          `모르겠어요, 전혀 모르겠어요! 저를 좋아한다면, 저를 기쁘게 해주세요! 저는 당신과 함께 있겠다고 했어요! 저를 행복하게 해줄 수 있는 건 당신뿐이라고 했다고요!`,
        );
        era.printButton(`「『행복하게 해줄 수 있는 건 당신뿐』이라니…… 그거 프러포즈잖아!」`, 1);
        await era.input();
        await vp.say_and_wait(`아까 건 아니에요! 지금 게 프러포즈라고요!`);
        era.printButton(`「영문을 모르겠네!」`, 1);
        await era.input();
        await vp.say_and_wait(`영문을 모를 정도로 당신을 좋아해요!`);
        await era.printAndWait(
          `서로의 외침이 도쿄 밤의 한구석에 울려 퍼졌다. 서로 숨을 헐떡이면서도 시선은 피하지 않았다.`,
        );
        await vp.say_and_wait(
          `저는 마음속 어딘가에서 줄곧 당신을 쫓고 있었어요! 당신을 생각하지 않으려고 해봤지만, 역시 무리였어요! 트레이너와 이야기를 나누던 나날들, 그 기억들이 마치 녹화된 것처럼 반복 재생되고 있다고요!`,
        );
        era.print(`${me.name} 역시……`);
        era.printButton(`「계속 널 생각했어.」`, 1);
        era.printButton(`「계속 잊지 못했어……」`, 2);
        await era.input();
        await vp.say_and_wait(`그렇다면!`);
        await era.printAndWait(
          `${vp.name}는 무릎걸음으로 ${me.name}에게 다가가, ${me.name}의 멱살을 쥐었다.`,
        );
        await era.printAndWait(`미녀에게 위협당하면 무섭다는 것은 사실인 듯했다.`);
        await era.printAndWait(
          `${vp.sex}의 프랑스계 단정한 외모가 지근거리까지 다가왔다. ${vp.name}는 ${me.name}을(를) 향해 입을 열었다. ${vp.sex}의 분노 어린 외침이 오이 경기장 앞에 울려 퍼졌다.`,
        );
        await vp.say_and_wait(`이 바보.`);
        era.printButton(`「난 바보가 아니야」`, 1);
        await era.input();
        await vp.say_and_wait(
          `아니요, 바보예요! 나약해도 상관없어요…… 변변치 않다면 손을 맞잡고 지탱해 주면 되는 거예요. 당신은 책임을 회피하지 않았고, 저는 더더욱 포기할 수 없어요.`,
        );
        await vp.say_and_wait(
          `트레이너와 ${vp.get_uma_sex_title()}의 관계는 대등해요. 우리는 전력으로 달리고, 트레이너는 이끌어주죠. 마치 어느 한쪽이라도 없어서는 안 될 부부처럼요.`,
        );
        await vp.say_and_wait(`그러니까…… 읏, 훌쩍, 우리가 서로 끌리게 된 거잖아요, 안 그런가요?`);
        await era.printAndWait(
          `${me.name}은(는) 자신보다 열 살이나 어린 ${vp.get_child_sex_title()}를 울려버렸다.`,
        );
        await era.printAndWait(
          `밤은 조금 쌀쌀했다. 낮에는 무더웠기에, ${me.get_couple_title()}은 얇게 입고 있었다.`,
        );
        await era.printAndWait(
          `그럼에도, 두 사람이 딱 붙어서, 벌레처럼 체온으로 서로를 데운다면 춥지 않을 것이다.`,
        );
        await era.printAndWait(
          `${vp.name}는 여전히 불안한 표정을 짓고 있었고, ${me.name}은(는) ${vp.sex}의 머리를 쓰다듬었다.`,
        );
        era.printButton(`「좀 춥지?」`, 1);
        await era.input();
        await vp.say_and_wait(`……네.`);
        era.printButton(`「일단 네가 머무는 호텔로 가자. 이대로면 감기에 걸릴 거야.」`, 1);
        await era.input();
        await vp.say_and_wait(`알겠어요.`);
        await era.printAndWait(`${vp.sex}는 ${me.name}의 말에 따라 함께 걸었다.`);
        await era.printAndWait(
          `일루미네이션의 불빛이 ${me.get_couple_title()}의 뒷모습을 비추고 있었다.`,
        );
        era.drawLine();
        era.printButton(`「${vp.name}, 이게 무슨 상황이야……!?」`, 1);
        await era.input();
        await vp.say_and_wait(
          `${vp.get_child_sex_title()}를 방에 데려왔다면, 해야 할 일은 단 하나뿐이라고 생각하지 않나요?`,
        );
        await era.printAndWait(
          `피부를 간신히 가리고 있던 천이 풀렸고, ${vp.name}의 바다처럼 푸른 눈동자가 묘한 빛을 띠었다.`,
        );
        await vp.say_and_wait(
          `Bonne soirée , ma cheri. (좋은 저녁 보내요. 내 사랑.)`,
        );
        await quick_into_sex(205);
        await era.printAndWait(
          `원래는 방에서 머리를 식히며 기다릴 생각이었지만, 목욕 타월만 두른 ${vp.name}가 나타났다.`,
        );
        await era.printAndWait(`미성년자 성추행 사건이 발생했다.`);
        await era.printAndWait(
          `어쨌든, 법이라는 든든한 방패를 완전히 잃은 ${me.name}이(가) 세계 최강인 ${vp.sex}를 막을 수 있을 리 만무했고, 그대로 끝까지 가버렸다.`,
        );
        await era.printAndWait(`${me.name}은(는) 담당과 함께 밤을 즐겁게 보냈다.`);
        await vp.say_and_wait(`좋은 아침이에요, 내 사랑.`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `옆에는 알몸인 ${vp.name}가 있었고, ${me.name}은(는) 이 상황에 왠지 모를 안도감을 느꼈다.`,
        );
        era.printButton(`「……좋은 아침이야, 나의 공주님.」`, 1);
        await era.input();
        await vp.say_and_wait(`어머, 인정하신 건가요?`);
        await vp.say_and_wait(`……그렇군요, 역시 처음부터 이랬으면 좋았을 텐데요.`);
        era.printButton(`「무서운 소리 하지 마.」`, 1);
        await era.input();
        await era.printAndWait(
          `창문으로 들어오는 아침 햇살을 받은 ${vp.name}는 그림 속의 성모처럼 아름다웠다.`,
        );
        await era.printAndWait(
          `새하얀 시트에 감싸인 채 엎드려서 ${me.name}을(를) 바라보는 ${vp.sex}는, 튀어나온 부분만 가린 채 등을 무방비하게 드러내고 있었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 충동적으로 예술품 같은 ${vp.name}의 머리를 쓰다듬었다. ${vp.sex}의 유려한 머리카락이 손가락 사이를 빠져나갔다.`,
        );
        await vp.say_and_wait(`……♪`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(`미소 짓는 ${vp.sex}의 얼굴을 보며, ${me.name}은(는) 결심했다.`);
        await vp.say_and_wait(
          `당신을 정말 좋아해요. 지금까지 쭉 당신을 생각했어요. 이렇게 이야기하는 것을 꿈꿔왔답니다.`,
        );
        era.printButton(`「나도 그래, ${vp.name}.」`, 1);
        await era.input();
        await era.printAndWait(`미소 짓는 ${vp.sex}는, 역시나 아름다웠다.`);
        await vp.say_and_wait(`사랑해요, 트레이너.`);
        era.printButton(`「나도 사랑해. 나만의 ${vp.name}.」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.sex}가 사랑스럽게 ${me.name}의 손을 맞잡는 모습은, 누가 봐도 성녀 같았다.`,
        );
        await era.printAndWait(`${me.name}의 눈앞에 있는 애마의 아름다운 얼굴에 생기가 돌았고, 환한 미소가 피어올랐다.`);
        era.println();
        sys_like_chara(205, 0, temp[0] + 15, true, temp[1]) &&
          (await era.waitAnyKey());
      }
  }
};