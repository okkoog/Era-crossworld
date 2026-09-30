const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  say_by_passer_by,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (falcon, me, callname, _, flags, edu_marks, ebj) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:46:위치')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`합숙 시작!`, falcon);
    await era.printAndWait(
      `여름 합숙이 시작된 후, ${me.name}과(와) 팔코는 여름 특별 훈련을 위해 이사장님의 개인 해변에 도착했다.`,
    );
    era.printButton(`와, 해변 진짜 넓다!`, 1);
    await era.input();
    await era.printAndWait(`길을 따라 달려온 보람이 드디어 느껴졌다.`);
    await falcon.say_and_wait(`게다가 생각했던 것보다 훨씬 예뻐!`);
    await falcon.say_and_wait(`……음, 일단 사진부터 한 장 찍어서 팬들에게 보내줘야지——`);
    await era.printAndWait(`차에서 내리자마자 기다렸다는 듯이 찰칵찰칵 소리를 내며 사진을 찍어댔다.`);
    era.printButton(`훈련도 잊으면 안 돼!`, 1);
    await era.input();
    await falcon.say_and_wait(
      `응! ${callname}, 팔코의 활약하는 모습을 지켜봐 줘!`,
    );
    await falcon.say_and_wait(
      `아이돌로서의 팔코도, 레이스 ${falcon.get_uma_sex_title()} 로서의 ${falcon.name}도 전부 완벽하게 해낼 거니까!`,
    );
    era.printButton(`바로 그 기세야!`, 1);
    await era.input();
    era.println();
    await falcon.say_and_wait(
      `——그런 고로, 팔코의 첫 번째 목표는! 근처 마을 주민들에게 팔코를 알리는 거야!`,
    );
    era.printButton(`팔코, 화이팅!`, 1);
    await era.input();
    await falcon.say_and_wait(`우마무스메 아이돌 청량 여름 라이브 작전, 이 해변에서 시작한다!`);
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}이 공연 장소를 확정한 후, 노랫소리와 함께 여름 합숙이 시작되었다.`,
    );
  };

  handlers[47 + 30] = async (falcon, me, callname) => {
    era.set('cflag:46:축제이벤트표시', 0);
    await print_event_name(`축제`, falcon);
    await falcon.say_and_wait(`팔코, 제대로 준비하고 올게!`);
    await era.printAndWait(`${falcon.name}은 그렇게 말하며 서둘러 숙소 안으로 달려 들어갔다.`);
    await era.printAndWait(
      `여름 공연이 끝난 후, 분위기가 너무 좋았던 나머지 추가된 앵콜곡 때문에 종료 시간이 한 시간이나 늦어졌다.`,
    );
    await era.printAndWait(`계획했던 불꽃놀이 대회를 보러 갈 일정이 순식간에 빠듯해졌다.`);
    await era.printAndWait(
      `숙소에서 들려오던 소란스러운 소리가 점차 잦아들었다. 불꽃놀이 시작까지는 채 한 시간도 남지 않았다.`,
    );
    await era.printAndWait(
      `올해의 불꽃놀이 대회는 마을 중심에서 열린다. 근처에서 가장 보기 좋은 명당은 마을에서 멀지 않은 산 위였다.`,
    );
    await era.printAndWait(
      `평소 걸음걸이로는 산기슭까지 30분, 산을 오르는 데 추가로 15분이 걸린다. 그 점을 생각하니 초조해지기 시작했다.`,
    );
    await falcon.say_and_wait(`미안, 오래 기다렸지!`);
    await era.printAndWait(`드디어 왔구나.`);
    await era.printAndWait(
      `그렇게 말하려 했으나, 유카타로 갈아입은 ${falcon.name}은 평소보다 훨씬 더 귀여웠다.`,
    );
    await era.printAndWait(
      `입술이 바짝 마르고, 심장 박동이 갑자기 빨라졌으며, 머리에서는 땀방울이 맺히기 시작했다.`,
    );
    await falcon.say_and_wait(`설마 이 옷, 별로야?`);
    await era.printAndWait(
      `분홍색 유카타로 갈아입은 ${falcon.name}은 가냘픈 몸매가 그대로 드러나, 멀리서 보면 마치 한 송이 꽃처럼 가련해 보였다.`,
    );
    await me.say_and_wait(
      `팔코가 가장 빛나는 우마무스메가 아니라면, 아마 세상에 그 칭호를 가질 수 있는 사람은 없을 거야.`,
    );
    await falcon.say_and_wait(
      `${callname}이 그렇게 말해주니 팔코, 조금 부끄러운걸.`,
    );
    await era.printAndWait(`${falcon.name}은 수줍은 듯 고개를 숙였다.`);
    await me.say_and_wait(
      `비록 첫 번째 공연 시작은 놓치겠지만, 두 번째 타임에는 충분히 맞출 수 있을 거야.`,
      true,
    );
    await falcon.say_and_wait(
      `${callname}, 팔코 손...잡아줄래?`,
    );
    era.printButton(`팔코의 손을 잡는다`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은 작은 손을 손바닥 안에 넣었다. 평소 팬들 앞에서 빛나던 모습보다 훨씬 더 묘한 매력이 느껴졌다.`,
    );
    await falcon.say_and_wait(`팔코를 꽉 잡아야 해?`);
    await era.printAndWait(`응?`);
    await falcon.say_and_wait(`아무것도 아니야⭐`);
    await era.printAndWait(
      `${falcon.name}은 몰래 입을 가리며 웃더니, 곧 ${me.name}의 발걸음을 따라갔다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `축제가 열리는 여러 장소 중 시야가 가장 좋은 곳은 마을에서 떨어진 신사였다.`,
    );
    await era.printAndWait(
      `신사로 통하는 길은 긴 계단을 올라가야 했기에, 다른 곳에 비해 인파가 조금은 한산했다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 조금만 더 서두르지 않으면 시작해버릴 거야!`,
    );
    await era.printAndWait(
      `${me.name}보다 한 단계 높은 계단에 선 ${falcon.name}은 멀리 산 중턱을 바라보았다.`,
    );
    await me.say_and_wait(`팔코, 잠깐만. 너무 빨라, 숨 좀 고르게 해줘.`);
    await era.printAndWait(
      `${falcon.name}은 지치지 않는 활력을 가진 것 같았다. 처음에는 ${me.name}이(가) ${falcon.sex}의 손을 잡고 있었지만, 어느 정도 걷다 보니 금세 ${falcon.sex}가 ${me.name}을(를) 이끌며 계단을 올라가고 있었다.`,
    );
    await falcon.say_and_wait(
      `${callname}의 체력은 생각보다 더 별로네!`,
    );
    await era.printAndWait(`우마무스메는 역시 세 여신의 총아라고 해야 할까?`);
    await era.printAndWait(
      `인간에게는 모든 체력을 쏟아부어야 할 여정이 우마무스메에게는 준비운동조차 되지 않는 모양이었다.`,
    );
    await era.printAndWait(
      `숨을 몰아쉬며 주위를 둘러보니 신사로 가는 길에는 사람의 흔적이 거의 없었고, 제례 음악도 점차 막바지에 다다라 불꽃놀이가 곧 시작될 참이었다.`,
    );
    await me.say_and_wait(`팔코와 불꽃놀이의 시작을 함께 보지 못하는 건 조금 아쉽네.`);
    await era.printAndWait(
      `${me.name}은 약간 아쉬운 말투로 ${falcon.name}에게 말했다.`,
    );
    await falcon.say_and_wait(
      `${callname}은(는) 그렇게 팔코랑 불꽃놀이를 같이 보고 싶어?`,
    );
    await era.printAndWait(`${falcon.name}의 말투에 형용하기 어려운 묘한 느낌이 섞여 있었다.`);
    era.printButton(`팔코와 그 순간을 기록하고 싶어`, 1);
    await era.input();
    await era.printAndWait(`${me.name}은 잠시 생각한 후 솔직하게 ${falcon.sex}에게 털어놓았다.`);
    await falcon.say_and_wait(`그럼 팔코를 꽉 잡아!`);
    await era.printAndWait(
      `가냘픈(?) ${falcon.teen_sex_title}인 팔코가 ${me.name}을(를) 끌어당겼다.`,
    );
    await falcon.say_and_wait(`이대로 단숨에 계단을 뛰어넘을 거야! \n\n`);
    await era.printAndWait(
      `말로는 표현하기 힘든 감각이었다. 마치 마을에서 파는 매운탕이 얼굴에 통째로 쏟아진 것처럼, 바람을 가르며 전해지는 통증과 심장에 가해지는 거대한 압박감에 ${me.name}은 공포에 휩싸였다.`,
    );
    await era.printAndWait(
      `그러나 이 지옥 같은 공포는 생각보다 금방 지나갔다. ${falcon.name}이 ${me.name}의 어깨를 살며시 흔들었을 때야 비로소 산 중턱에 도착했다는 것을 깨달았다.`,
    );
    await era.printAndWait(
      `왜 길거리에서 우마무스메를 교통수단 삼아 출퇴근하는 사람들을 볼 수 없는지 문득 이해가 갔다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 불꽃놀이 시작했어!`,
    );
    await era.printAndWait(
      `펑, 펑 소리와 함께 붉은 꽃들이 밤하늘을 밝히며, 불꽃놀이 대회의 분위기가 본격적으로 절정에 달했다.`,
    );
    await era.printAndWait(
      `동시에 하늘에서 피어나는 불꽃은 이 축제라는 공연의 앵콜 공연처럼 느껴지기도 했다.`,
    );
    await era.printAndWait(
      `문득, 더트 위를 달리는 ${falcon.name}의 모습이 떠올랐다.`,
    );
    await era.printAndWait(`어쩌면 저 불꽃처럼, 찰나의 순간일지도 모른다.`);
    await era.printAndWait(`그렇게 생각하니 조금은 서글퍼졌다.`);
    await falcon.say_and_wait(
      `정말 예쁘다. 팔코가 최고의 아이돌이 되는 순간도, 분명 이런 느낌이겠지?`,
    );
    await era.printAndWait(
      `${me.name}의 곁에 있는 ${falcon.name}의 표정은 불꽃에 물들어 타오르는 듯한 주황빛을 띠고 있었다.`,
    );
    era.printButton(`내년에도 같이 불꽃놀이 보러 오자`, 1);
    await era.input();
    await era.printAndWait(`하늘의 꽃들이 줄지어 피어나고, 불꽃놀이 대회도 서서히 끝을 향해 달려갔다.`);
    await me.say_and_wait(`그때는 분명 지금보다 더 눈부시게 빛나고 있을 거야!`);
    await era.printAndWait(`${falcon.name}이 ${me.name}을(를) 바라보았다.`);
    await falcon.say_and_wait(`응! 그때도 잘 부탁해!`);
    await era.printAndWait(`가장 아름다운 불꽃이 ${me.name}의 눈앞에서 피어올랐다.`);
  };

  handlers[95 + 6] = async (falcon, me, callname) => {
    await print_event_name('팔코와 발렌타인♪', falcon);
    await era.printAndWait(`올해의 발렌타인 공연은 전용 행사장에서 열렸다.`);
    await era.printAndWait(
      `팔코는 평소 활동하던 장소에서 열기를 고집했지만, 찾아올 팬들과 호기심에 방문할 관광객들을 고려한 결과였다.`,
    );
    await era.printAndWait(`……어쩌면 안전을 위한 배려였을지도 모른다.`);
    await falcon.say_and_wait(`팔코의 감사 축제에 와준 여러분, 정말 고마워♪`);
    await falcon.say_and_wait(
      `평소 아이돌인 팔코를 묵묵히 응원해주는 여러분께 보답하기 위해, 이건 팔코가 어제 하루 종일 만든 선물이야!`,
    );
    await era.printAndWait(`팔코는 현장의 팬들에게 포장된 초콜릿 상자들을 보여주었다.`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await falcon.say_and_wait(`응응! 여러분의 열정, 팔코에게 다 전달됐어!`);
    await falcon.say_and_wait(
      `이제 그 기세 그대로 팔코의 마음이 듬뿍 담긴 초콜릿을 맛있게 먹어줘야 해!`,
    );
    await say_by_passer_by(`팬들`, `오오오오! 팔코! 팔코!`);
    era.drawLine();
    await falcon.say_and_wait(`앞으로도 계속 팔코를 응원해줘!`);
    await era.printAndWait(
      `마지막 팬이 초콜릿을 들고 만족스럽게 떠난 후, 현장에는 ${me.name}과(와) ${falcon.name}만 남았다.`,
    );
    await era.printAndWait(`${falcon.name}의 등 뒤에 쌓여있던 초콜릿 산도 어느새 다 나누어졌다.`);
    await falcon.say_and_wait(`아, 잠깐만, 하나 더 있어!`);
    await era.printAndWait(
      `${falcon.sex}는 구석에서 정성스럽게 포장된 선물 상자 하나를 꺼냈다. 아마 행사장을 준비할 때부터 미리 챙겨둔 모양이었다.`,
    );
    await falcon.say_and_wait(
      `이건 레이스 우마무스메인 ${falcon.name}이 ${callname}에게 전하는 감사의 선물이야.`,
    );
    await era.printAndWait(
      `${falcon.name}의 말투는 생각보다 덤덤해서 어떤 변화도 느껴지지 않았다.`,
    );
    await era.printAndWait(`아마 과잉 반응이겠지, 최근에는 좀 푹 쉬어야겠다고 생각했다.`);
  };

  handlers[95 + 9] = async (falcon, me, callname) => {
    await print_event_name(`${falcon.name}`, falcon);
    await era.printAndWait(`타오르는 듯한 붉은 하늘이 짙은 남색에 갈라지고, 이내 흩뿌려진 별가루가 되었다.`);
    await era.printAndWait(`평소와 다를 바 없는 콘서트였다.`);
    await era.printAndWait(
      `3년 차에 접어들며 주목도는 약간 하락했을지 모르나, 더트 팬들의 열정만은 여전했다.`,
    );
    await era.printAndWait(
      `어쩌면 개성이 이토록 뚜렷한 더트 아이돌은 정말 희귀하기 때문일지도 모른다.`,
    );
    await era.printAndWait(
      `팬들에게 둘러싸인 ${falcon.name}은 마치 크리스탈 당근과 같은 매력을 뿜어내고 있었다.`,
    );
    await falcon.say_and_wait(`후— 여러분! 정말 고마워!`);
    await era.printAndWait(
      `멀리서 들려오던 메들리 곡이 끝나고, 팬들은 무대 위의 아이돌에게 환희를 전달했다.`,
    );
    await say_by_passer_by(
      `새로운 팬 A`,
      `CD로만 들었을 때도 좋았지만, 역시 라이브가 훨씬 더 신나네.`,
    );
    await say_by_passer_by(
      `충성 팬 B`,
      `팔코는 우마무스메 아이돌로서의 사랑을 모두에게 공평하게 나눠주니까, 그래서 이렇게 끌리는 거야.`,
    );
    await say_by_passer_by(
      `충성 팬 C`,
      `이런 말 하면 분위기 파악 못 하는 것 같지만, 팔코 오늘 좀 이상하지 않아?`,
    );
    await say_by_passer_by(
      `충성 팬 C`,
      `예전의 팔코는 늘 튀어 오르는 듯한 활력이 있었는데, 지금은 왠지 묘한 느낌이 들어.`,
    );
    await say_by_passer_by_and_wait(
      `충성 팬 D`,
      `앞으로 있을 레이스 때문이 아닐까? 팬 발표회에서 3년 차 더트 레이스는 전부 승리하겠다고 선언했잖아.`,
    );
    await say_by_passer_by_and_wait(
      `충성 팬 D`,
      `하지만 그렇게 가혹한 난이도 속에서도 팔코는 여전히 미소를 짓고 있어.`,
    );
    await say_by_passer_by_and_wait(
      `충성 팬 D`,
      `『어쩌면 이게 진정한 우마무스메 아이돌일지도 몰라』 난 늘 그렇게 생각해.`,
    );
    await say_by_passer_by_and_wait(`새로운 팬 E`, `그러고 보니 작년에 어떤 팬이 습격——`);
    await say_by_passer_by_and_wait(
      `충성 팬 B`,
      `Stop! 그 일은 언급해서는 안 되는 금기라고!`,
    );
    await era.printAndWait(
      `열렬히 토론하던 팬들은 찬물이 끼얹어진 듯한 분위기에 입을 다물었고, 다들 대화를 이어갈 의욕을 잃었다.\n\n\n`,
    );
    await falcon.say_and_wait(`${callname}.`);
    await era.printAndWait(
      `마지막 팬이 현장을 떠난 후에야 ${me.name}은 멀지 않은 곳에서 ${falcon.name}을(를) 맞이했다.`,
    );
    await era.printAndWait(
      `미소를 띤 ${falcon.teen_sex_title}는 ${me.name}과(와) 오늘 콘서트의 성공과 부족한 점을 분석했다. 긍정적인 결론이 나올 때마다 트레센으로 돌아가는 오솔길에는 즐거운 웃음소리가 울려 퍼졌다.`,
    );
    await falcon.say_and_wait(`${callname}.`);
    await me.say_and_wait(`응?`);
    await falcon.say_and_wait(`정말 아쉽지만.`);
    await era.printAndWait(`${falcon.name}의 목소리는 지극히 차분했다.`);
    await falcon.say_and_wait(
      `아니, 아무것도 아니야. 이렇게 거리를 유지하는 게 팔코에게도, 그리고 ${callname}에게도 가장 좋은 걸지도 몰라.`,
    );
    await era.printAndWait(
      `평소의 덤벙거리는 모습과는 달리, ${falcon.name}은 ${me.name}에게 미소를 지어 보였다.`,
    );
    await falcon.say_and_wait(
      `팔코도 반성해봤어. 어쩌면 ${callname}과(와)의 관계가 너무 가까웠던 걸지도 모르겠네.`,
    );
    await era.printAndWait(`${me.name}들 사이에 형용할 수 없는 거리감이 생겨났다.`);
    await falcon.say_and_wait(
      `우마무스메 아이돌로서, 모든 팬을 불공평하게 사랑하면 안 되니까.`,
    );
    await me.say_and_wait(`아니, 그럴 것까지는 없잖아.`);
    await era.printAndWait(`${me.name}이(가) 다음에 무슨 말을 해야 할지 고민하기 시작했을 때.`);
    await falcon.say_and_wait(
      `${callname}, 이건 잠시 트레이너에게 맡겨둘게.`,
    );
    await era.printAndWait(`${falcon.name}은 조심스럽게 이마의 머리 장식을 떼어냈다.`);
    await me.say_and_wait(`……왜?`);
    await era.printAndWait(
      `너무나 큰 충격에 사고가 정지했고, 마음속 의구심이 무의식적으로 튀어나왔다.`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}는 웃으며 물기에 젖은 리본을 ${me.name}에게 건넸다.`,
    );
    await me.say_and_wait(`이건 팔코에게 정말 소중한 물건 아니야?`);
    await falcon.say_and_wait(`응, 팔코에게는 무엇과도 바꿀 수 없는 보물이야.`);
    await falcon.say_and_wait(
      `하지만 팔코는 이걸 직접 가지고 있는 것보다, 잠시 ${callname}에게 빌려주는 게 가장 쓰임새가 있을 것 같아.`,
    );
    await me.say_and_wait(`아니, 틀려. 분명 어딘가 잘못됐어.`);
    await era.printAndWait(`마치 눈앞에서 롤러코스터가 끊어진 레일을 향해 달려가는 것을 지켜보는 기분이었다.`);
    await era.printAndWait(`꽉 쥐고 있던 오른손 주먹이 바이스 같은 가느다란 손길에 강제로 열렸다.`);
    await falcon.say_and_wait(
      `${callname}은 정말 고집불통이라니까.`,
    );
    await era.printAndWait(`약간의 유감을 담은, 마치 죽은 듯한 고요함이 담긴 대답이었다.`);
    await falcon.say_and_wait(`이제 아이돌『팔코』는 레이스 우마무스메가 아닌, 우마무스메 아이돌로서만 존재할 거야. 그러니까——`);
    await era.printAndWait(`심연에 이르기까지.`);
    await falcon.say_and_wait(`앞으로도 잘 부탁해, ${me.actual_name} 트레이너.`);
    await era.printAndWait(`과거의 자신과 작별하기 위한 물건인 걸까.`);
    await era.printAndWait(`너무 뻔하잖아, 하하하. 정답은 분명 이게 아닐 거야.`);
    await me.say_and_wait(`하하, 그렇지? 아니, 아니야, 아마도.`);
    await me.say_and_wait(`${falcon.name}.`);
    await era.printAndWait(
      `마치 교실 천장에 매달린 형광등이 떨어져 가슴팍에서 깨졌을 때 나는 듯한 비명이 들리는 것 같았다.`,
    );
    await falcon.say_and_wait(
      `그러니까, ${callname}. 이걸로 된 거야.`,
    );
    await era.printAndWait(`${falcon.name}은 아무 일 없다는 듯 한 걸음 물러났다.`);
    await me.say_and_wait(`장난하지 마!`);
    await era.printAndWait(`${falcon.name}과 함께 보낸 시간을 이렇게 부정하는 거야?`);
    await era.printAndWait(`왜 마지막까지 노력한 결과가 이거냐고!`);
    await era.printAndWait(
      `분노로 날뛰는 몸은 마음속 불만과 증오를 쏟아내고 싶어 했으나, 결국 허공에 흩어지는 파편 같은 말들만 내뱉을 뿐이었다.`,
    );
    await era.printAndWait(
      `시야는 흐릿해지고 입에서는 스스로도 알 수 없는 말이 반복되었으며, 눈앞의 사실을 무의식적으로 거부했다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 현기증에서 회복했을 때, 곁에 있던 ${falcon.teen_sex_title}는 이미 온데간데없었다.`,
    );
  };

  handlers[95 + 14] = async (falcon, me, callname) => {
    await print_event_name('팬 감사제♪', falcon);
    await era.printAndWait(`팬들의 평소 성원에 보답하기 위한 감사 이벤트가 다시 시작되었다.`);
    await era.printAndWait(`그러나 평소와는 다른 점이 있었다.`);
    await say_by_passer_by(`우마무스메 A`, `${falcon.name} 선배님, 같이 사진 찍어주실 수 있나요?`);
    await say_by_passer_by(`우마무스메 B`, `저도 팔코 선배님이랑 사진 찍고 싶어요!`);
    await era.printAndWait(`갓 입학한 꼬마 우마무스메들에게 겹겹이 둘러싸인 ${falcon.name}.`);
    await falcon.say_and_wait(`팔코가 이렇게 인기가 많아질 줄은 몰랐어……`);
    await say_by_passer_by(`우마무스메 A`, `팔코 선배님은 지금 더트 레이스의 인기 스타시잖아요!`);
    await say_by_passer_by(
      `우마무스메 A`,
      `다들 이제 더트라고 하면 바로 ${falcon.name} 선배님을 떠올린다고요!`,
    );
    await falcon.say_and_wait(`와— 이러면 팔코가 꿈꾸는 톱 아이돌의 길에 한 걸음 더 가까워진 거네!`);
    await say_by_passer_by(
      `우마무스메 A`,
      `그리고 또, 팔코 선배님이 더트에서 활약해주신 덕분에 더트 레이스가 큰 관심을 받게 되어서, 원래 무명이었던 다른 더트 우마무스메들도 드디어 주목받기 시작했대요!`,
    );
    await falcon.say_and_wait(
      `이건 전부 팔코 덕분이 아니야. 계속해서 팔코를 응원해준—— 여러분 덕분이지.`,
    );
    await falcon.say_and_wait(
      `그런 의미에서, 응원해준 여러분께 감사의 마음을 전하기 위해 잠시 후 10시부터 제2 스테이지에서 보답 공연을 열 거야.`,
    );
    await falcon.say_and_wait(`다들 꼭 보러 와줄 거지?`);
    await say_by_passer_by(`우마무스메 A`, `팔코! 팔코!`);
    era.drawLine();
    await falcon.say_and_wait(`～～～♪ 고마워 여러분!`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await falcon.say_and_wait(
      `다음 레이스도 빛나는 팔코에게서 눈을 떼면 안 돼? 그럼, 하나 둘!`,
    );
    await falcon.say_and_wait(`팔코가 도망친다면?`);
    await say_by_passer_by(`팬들`, `그럼 쫓아갈 수밖에 없지!`);
    await falcon.say_and_wait(`지평선 끝까지 쫓아올 거야~?`);
    await say_by_passer_by(`팬들`, `그곳이 바로 팔코의 큰 무대니까!`);
    await falcon.say_and_wait(`길이 없으면 팔코가 만들게! 목표를 발견하면 빨리 가서 잡자!`);
    await say_by_passer_by(`팬들`, `——커다란 사랑을 쟁취하자!`);
    await falcon.say_and_wait(
      `최강의 ${falcon.get_uma_sex_title()} 아이돌, ${falcon.name}♪ 오늘도 마음을 전했어⭐`,
    );
    await say_by_passer_by(`팬들`, `오오오오오오오오오! 팔코! 팔코!`);
    await era.printAndWait(`팔코의 공연은 대성공이었다.`);
    era.drawLine();
    await me.say_and_wait(`근처를 조금 둘러볼까`, true);
    await era.printAndWait(`평소 인적이 드물던 오솔길도 방문객들 덕분에 붐비기 시작했다.`);
    await era.printAndWait(
      `지름길로 빠져나가려던 ${me.name}에게는 다소 곤란한 상황이었지만, 빽빽한 인파는 묘하게 허구의 안정감을 주었다.`,
    );
    await era.printAndWait(
      `어떤 학자가 말하길, 사람이 안정적인 사교 관계를 유지할 수 있는 인원은 150명이고, 깊은 교류를 나누는 인원은 20명 내외, 최종적으로 절친한 친구가 되는 인원은 고작 5~7명 정도라고 했다.`,
    );
    await era.printAndWait(
      `그들에게 당신 역시 그들 세계의 아주 미미한 조연이거나, 그저 70억 인구 중 한 명의 배경 화면 같은 존재일 것이다.`,
    );
    await era.printAndWait(
      `그렇게 생각하면, 길거리에서 갑자기 우마무스메가 된다 해도 대부분의 사람에게는 한 달도 채 기억되지 않을 뉴스에 불과할 테지.`,
    );
    await era.printAndWait(
      `해류를 따라 움직이는 물고기 떼처럼, 어느덧 발걸음은 보조 무대 쪽으로 향했다.`,
    );
    await era.printAndWait(`일일 스타로서 빛나는 순간을 맞이한 우마무스메들을 지켜보았다.`);
    await me.say_and_wait(`……${falcon.name}.`, true);
    await era.printAndWait(
      `톱 우마무스메 아이돌을 목표로 끝까지 빛나려 하는, 지기 싫어하는 ${falcon.teen_sex_title}.`,
    );
    await era.printAndWait(
      `${falcon.name}이 그렇게 서둘러 아이돌과 레이스 우마무스메 사이의 경계를 그은 것은, 예전에 생각했던 것처럼 단순한 이유가 아닐지도 모른다는 생각이 들었다.`,
    );
    await me.say_and_wait(`${falcon.name}에게도 나름의 사정이 있겠지.`);
    await era.printAndWait(`그걸 깨닫는 것만으로도 깊은 위안이 되었다.`);
    await era.printAndWait(
      `——비록 그 안정감이 진짜가 아닐지라도, 가짜 안정감 또한 안정감인 법이다.`,
    );
    await era.printAndWait(`억지로라도 그렇게 스스로를 납득시켰다.`);
    await me.say_and_wait(`다음에 기회를 봐서 ${falcon.name}과 제대로 이야기해보자.`, true);
    await era.printAndWait(`${me.name}은 다시 훈련 계획에 집중하기 시작했다.`);
  };

  handlers[95 + 18] = async (falcon, me, callname) => {
    await print_event_name(`일상`, falcon);
    await era.printAndWait(`커다란 진동에 깜짝 놀라 잠에서 깼다.`);
    await era.printAndWait(`아직 흐릿한 시야 사이로 주황색 형체가 움직이는 것이 보였다.`);
    await era.printAndWait(`부은 눈을 비비며 간신히 정신을 집중하려 애썼다.`);
    await era.printAndWait(`그러자 똑같이 멍한 표정을 지은 ${falcon.teen_sex_title}와 눈이 마주쳤다.`);
    await falcon.say_and_wait(`아……`);
    await era.printAndWait(
      `${falcon.teen_sex_title} 역시 방금 막 깨어난 듯, 낯선 천장을 보며 어리둥절해했다.`,
    );
    await me.say_and_wait(`안녕, ${falcon.name}.`);
    await era.printAndWait(
      `무언가 깨달은 듯 순식간에 동공이 커지고 귀가 쫑긋 솟아올랐다.`,
    );
    await falcon.say_and_wait(
      `——어? 어어! 왜 팔코가 ${callname}의 방에 있는 거야?`,
    );
    await era.printAndWait(
      `둘 사이의 깊은 유대 덕분인지, ${falcon.name}은 당황하면서도 ${me.name}을(를) 공격하는 대신 큰 소리로 물어왔다.`,
    );
    await me.say_and_wait(
      `미안, 내 독단이긴 하지만 이미 사감 선생님께 외박 허가증 확인을 받았어.`,
    );
    await falcon.say_and_wait(
      `그렇구나…… ${callname}이 팔코에게……`,
    );
    await me.say_and_wait(`아니야! 나까지 팔코의 엉뚱한 생각에 휘말릴 뻔했네.`);
    await me.say_and_wait(
      `허가 없이 무단으로 트레센을 나가 병원에 갔다가 가십지 기자들에게 찍히기라도 하면, 내가 바로 연예 신문 1면을 장식할 거라는 생각이 들었거든.`,
    );
    await me.say_and_wait(`나뿐만 아니라 팔코의 명예까지 크게 실추될 수도 있으니까.`);
    await me.say_and_wait(
      `그래서 의사 선생님께 큰 문제 없고 푹 쉬면 된다는 확답을 받은 뒤에, ${falcon.name}이 투어 중에 과로로 쓰러졌다는 핑계로 이사장님께 외박 허가를 신청했어.`,
    );
    await me.say_and_wait(
      `심야였는데도 타즈나 씨가 빠르게 답장을 주셔서 정말 다행이었지.`,
    );
    await me.say_and_wait(`그나저나, 팔코 지금 기분은 어때?`);
    await era.printAndWait(
      `${me.name}의 이야기를 묵묵히 듣고 있던 ${falcon.name}이 침대에서 일어났다.`,
    );
    await falcon.say_and_wait(
      `미안해, ${callname}에게 이렇게 큰 폐를 끼쳐서.`,
    );
    await era.printAndWait(`그리고 ${me.name}을(를) 향해 깊숙이 허리를 굽혀 사과했다.`);
    await me.say_and_wait(
      `미안, 내가 좀 더 ${falcon.name}을 신뢰했다면 팔코가 이런 상황까지 오진 않았을 텐데.`,
    );
    await era.printAndWait(`머릿속에 ${falcon.name}의 슬픈 미소가 스쳐 지나갔다.`);
    await me.say_and_wait(
      `내가 마음속 불안감을 억누를 수 있었다면, 팔코가 이런 고생을 할 일도 없었겠지.`,
    );
    await era.printAndWait(`이에 ${me.name} 또한 깊이 고개를 숙였다.`);
    await falcon.say_and_wait(
      `앗! 이건 명백히 팔코가 잘못한 건데, ${callname}이 이럴 필요 없어!`,
    );
    await era.printAndWait(
      `고개를 들어 ${me.name}을(를) 말리려던 ${falcon.name}과 ${me.name}의 머리가 정면으로 충돌했다.`,
    );
    await era.printAndWait(
      `${me.name}의 코에 강한 충격이 전해지며 얼얼한 감각이 퍼졌다.`,
    );
    await falcon.say_and_wait(`아, ${callname}!`);
    await me.say_and_wait(`음? 왜 그래?`);
    await era.printAndWait(
      `${me.name}이(가) 무심코 코를 만지자, 선홍색 액체가 비강을 타고 입안으로 흘러들어왔다.`,
    );
    await era.printAndWait(
      `……왠지 모르겠지만, 씁쓸한 쇠비린내가 오히려 ${me.name}에게 안도감을 주었다.`,
    );
    await falcon.say_and_wait(`${callname}, 일단 앉아봐!`);
    await era.printAndWait(
      `${falcon.name}은 다짜고짜 ${me.name}을(를) 침대에 앉혔고, ${me.name}은 냅킨을 반으로 접어 피가 흐르는 콧구멍을 막았다.`,
    );
    await me.say_and_wait(`……하하하.`);
    await era.printAndWait(
      `환자와 간병인의 입장이 뒤바뀐 광경을 보니 웃음이 절로 나왔다.`,
    );
    await era.printAndWait(
      `제대로 고정되지 않은 냅킨이 진동 때문에 공중에 붉은 선을 그리며 튕겨 나갔고, 다음 순간 ${me.name}의 트레이너 외투를 적셨다.`,
    );
    await falcon.say_and_wait(`으아아앗!`);
    await era.printAndWait(`여느 때와 다름없는, 떠들썩한 일상이 다시 시작되었다.`);
  };

  handlers[95 + 29] = async (falcon, me, callname, flags, edu_marks, ebj) => {
    if (
      era.get('cflag:46:45') !== location_enum.beach ||
      era.get('cflag:46:45') !== era.get('cflag:0:45')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`합숙 시작!`, falcon);
    await me.say_and_wait(`드디어 도착했네.`);
    await era.printAndWait(
      `${falcon.name}이 우마스타그램에 올린 콘서트 공지를 보고 한꺼번에 몰려든 팬들.`,
    );
    await era.printAndWait(`좋아요를 누르고, 질문에 친절히 답하고, 악플을 삭제하는 일들.`);
    await era.printAndWait(
      `덜컹거리는 버스 안에서 계속 스마트폰만 들여다본 결과, 목적지에 도착하기 4분의 1 지점에서 심한 메스꺼움이 몰려왔다.`,
    );
    await era.printAndWait(`겨우 도착하자마자 정신없이 속을 게워냈다.`);
    await era.printAndWait(`비록 덕분에 자신이 살아있다는 생생한 존재감을 뼈저리게 느꼈지만.`);
    await era.printAndWait(
      `하지만 ${falcon.name}에게도 이건 쉼 없는 달리기 끝에 얻은 귀중한 휴식 같은 날이었다.`,
    );
    await me.say_and_wait(`마치 휴양하러 온 것 같아.`, true);
    await falcon.say_and_wait(`${callname}!`);
    await era.printAndWait(`${falcon.name}은 사방을 둘러보며 ${me.name}을(를) 찾고 있었다.`);
    await me.say_and_wait(`나 여기 있어!`);
    await era.printAndWait(`최대한 큰 소리로 상대에게 대답했다.`);
    await era.printAndWait(
      `대답을 들은 ${falcon.name}은 모래를 탁탁 밟으며 ${me.name}이(가) 있는 방향으로 달려왔다.`);
    await falcon.say_and_wait(
      `${callname}⭐ 다음 훈련도 잘 부——`,
    );
    await falcon.say_and_wait(
      `어라라? ${callname}, 괜찮아?`,
    );
    await era.printAndWait(`${me.name}의 고통스러운 듯 창백한 안색을 보더니.`);
    await me.say_and_wait(`팬들 답변 달아주느라 멀미를 좀 한 것뿐이야, 별일 아니야.`);
    await falcon.say_and_wait(`아니야!`);
    await era.printAndWait(`평소의 아이돌스러운 모습과는 다르게 ${falcon.name}이 큰 소리로 반박했다.`);
    await falcon.say_and_wait(
      `${callname}은(는) 팔코가 아이돌의 길을 걷는 데 있어 함께 나아가는 동반자라고! 만약 ${callname}이 컨디션 난조로 쓰러지면 팔코의 훈련도 엉망이 될 거야.`,
    );
    await era.printAndWait(`주변을 지나가던 우마무스메와 트레이너들이 일제히 주목했다.`);
    await me.say_and_wait(`미안, 다음부터는 안 그럴게.`);
    await era.printAndWait(
      `주변의 시선이 모여서인지, 아니면 ${me.name}이(가) 사과해서인지 ${falcon.name}의 태도가 누그러졌다.`,
    );
    await falcon.say_and_wait(`팔코도 말이 좀 심했네, 미안해.`);
    await falcon.say_and_wait(
      `——만약 ${callname}이 팔코가 볼 수 없는 곳으로 가버리면……`,
    );
    await era.printAndWait(`${falcon.name}은 고개를 떨구고 무슨 생각에 잠긴 듯했다.`);
    await me.say_and_wait(`팔코?`);
    await falcon.say_and_wait(
      `아무것도 아니야⭐ 팔코의 이번 여름 합숙 계획은—— 해변에 있는 모든 관광객을 팔코의 팬으로 만드는 거야!`,
    );
    await falcon.say_and_wait(
      `그러기 위해서 다음에 있을 축제에서 공연을 보러 온 관광객들의 마음을 사로잡을 거야!`,
    );
    await me.say_and_wait(`훈련도 잊지 마!`);
    await era.printAndWait(
      `그 목표에서 활력을 얻었는지, ${falcon.name}은 다시 반짝반짝 빛나기 시작했다.`,
    );
    await falcon.say_and_wait(`정말~ 그것도 당연히 챙길 거거든⭐`);
    await era.printAndWait(
      `눈앞의 ${falcon.name}이 평소대로 돌아온 것을 보고 ${me.name}도 안심했다.`,
    );
    era.printButton(`음—— 일단 해변을 열 바퀴 정도 돌면서 몸부터 풀자!`, 1);
    await era.input();
    await falcon.say_and_wait(`좋아♪`);
    await era.printAndWait(`${me.name}과(와) 팔코의 3년 차 여름 합숙이 시작되었다.`);
  };

  handlers[95 + 30] = async (falcon, me, callname, flags, edu_marks, ebj) => {
    if (
      era.get('cflag:46:45') !== location_enum.beach ||
      era.get('cflag:46:45') !== era.get('cflag:0:45')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`축제`, falcon);
    await era.printAndWait(`해변에서 멀지 않은 마을에서\n`);
    await era.printAndWait(`지형을 이용해 일 년에 한 번 열리는 여름 축제가 한창이었다.`);
    await era.printAndWait(
      `최근 떠오르는 더트의 별로서 초대를 받은 ${falcon.name}이 무대 중앙에 서 있었다.`,
    );
    await falcon.say_and_wait(`～～～♪ 후— 고마워 여러분⭐`);
    await era.printAndWait(
      `무대 아래의 관객들은 무대 위 아이돌에게 박수와 환호를 보냈다.`,
    );
    await me.say_and_wait(`역시 관객석에서 보는 게 최고의 선택이네.`, true);
    await era.printAndWait(
      `관객석에서 ${falcon.name}의 공연을 보고 싶다는 ${me.name}의 뜻을 들었을 때, ${falcon.name}은 무언가 말하고 싶은 기색이었으나 ${me.name}이(가) 물어보자 말을 돌려버렸다.`,
    );
    await era.printAndWait(
      `그럼에도 불구하고 매 곡이 끝날 때마다, 팬들과 소통하는 시선 속에서 왠지 모를 시선 하나가 계속해서 ${me.name}을(를) 쫓고 있었다.`,
    );
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`왠지 조금 외로워졌다.`);
    await era.printAndWait(
      `${falcon.name}의 공연이 별로라는 뜻은 아니었다. 거친 원석이었던 그녀는 연마를 거쳐 이미 찬란한 다이아몬드처럼 빛나고 있었다.`,
    );
    await era.printAndWait(
      `그저 아주 조금, 처음 ${falcon.name}을(를) 만났을 때의 순수했던 모습이 그리워졌을 뿐이었다.`,
    );
    await era.printAndWait(`지금의 ${falcon.sex}는 이미 훌륭한 아이돌로 성장했다.`);
    await era.printAndWait(`그것으로 충분했다.`);
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`하지만 마음속 불안감은 가시지 않았다.`);
    await era.printAndWait(`무언가 놓치고 있는 기분.`);
    await era.printAndWait(`그 슬픈 눈망울.`);
    await say_by_passer_by(`관광객 A`, `으악!`);
    await era.printAndWait(
      `비명과 함께 검붉은 액체가 ${me.name}의 몸에 튀었다.`,
    );
    await me.say_and_wait(`으아아아악`);
    await era.printAndWait(
      `불행 중 다행으로, 시간이 흘러 뜨거움이 가신 상태라 그저 미지근한 정도였다.`,
    );
    await era.printAndWait(`남은 걱정은 소스로 범벅이 된 셔츠를 어떻게 세탁할지, 그리고`);
    await me.say_and_wait(`으아아악!`, true);
    await era.printAndWait(`마치 수많은 개미가 눈꺼풀을 따라 각막 주변을 기어 다니는 것 같았다.`);
    await me.say_and_wait(`수건, 물, 아무거나——`);
    await era.printAndWait(`사방으로 허둥대던 손이 겨우 젖은 수건을 낚아챘다.`);
    await me.say_and_wait(`정말 미안, 나중에 꼭 보상할게!`);
    await era.printAndWait(
      `스스로 생각해도 심한 말을 내뱉으며, 어찌 됐든 얼굴부터 닦아냈다.`,
    );
    await era.printAndWait(`주변에서 큰 소동이 일어난 듯했다.`);
    await me.say_and_wait(
      `……설마 어떤 여성분의 옷을 수건 대신 낚아채서 찢어버린 건 아니겠지?`,
      true,
    );
    await era.printAndWait(`따가운 느낌이 가신 뒤, 번쩍 눈을 떴다.`);
    await me.say_and_wait(`미안해, 어떻게든 보상할게…… ${falcon.name}.`);
    await era.printAndWait(`눈앞에 보인 것은 오른쪽 소매 부분이 뜯겨나간 아이돌 의상이었다.`);
    await era.printAndWait(
      `무대 위에 있던 ${falcon.teen_sex_title}가 어느새 무대 아래로 내려와 있었다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `소란스러워진 인파를 간신히 진정시킨 후, ${me.name}과(와) ${falcon.name}은 숙소로 돌아가는 길을 걸었다.`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`무슨 말을 먼저 꺼내야 할지 알 수 없었다.`);
    await era.printAndWait(
      `이렇게 당황한 ${falcon.name}은 처음 보았다. 마치 ${me.name}과(와) 영원히 이별하게 될지도 모른다는 사실을 깨달은 사람처럼 보였다.`,
    );
    await falcon.say_and_wait(`……`);
    await falcon.say_and_wait(`팔코가 일을 망쳐버린 걸까……`);
    await falcon.say_and_wait(
      `다들 멀리서 팔코를 응원하려고 여기까지 와주신 건데.`,
    );
    await era.printAndWait(`충동적인 행동 뒤에 후회가 밀려오기 시작한 ${falcon.name}.`);
    await me.say_and_wait(
      `아니야, 그렇게 애타게 걱정해주는 팔코의 모습을 보고 팬들도 분명 같이 마음 졸였을 거야.`,
    );
    await me.say_and_wait(
      `팔코의 안도하는 표정을 보고 나면, 그들도 분명 안심할 거야.`,
    );
    await era.printAndWait(
      `${falcon.name}은 무슨 말을 하려다 결국 입을 다물었다.`,
    );
    await era.printAndWait(
      `${me.name}들은 즐거운 분위기에 젖은 인파를 뒤로하고 걸었다. 인적이 드문 곳에 이르자 ${falcon.name}이 드디어 입을 열었다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 팔코는 역시 이기적인 걸까?`,
    );
    await falcon.say_and_wait(
      `모든 팬을 공평하게 사랑하겠다고 말하면서도, 마음의 저울은 결국 한쪽으로 기울어버려.`,
    );
    await falcon.say_and_wait(
      `팔코는 결국 약속을 어기고 말았네…… 자신이 책임져야 할 일에 대해서도 계속 약속을 어기고 있어.`,
    );
    await era.printAndWait(
      `수없이 고민한 끝에, ${falcon.name}은 마음속 깊은 이야기를 꺼냈다.`,
    );
    await era.printAndWait(
      `${me.name}은 알고 있었다. 이것이 ${falcon.sex}를 괴롭히는 깊은 방황임을.`,
    );
    await me.say_and_wait(`팔코, 트레이너라는 직업에 대해 알고 있어?`);
    await era.printAndWait(`잠시 생각한 끝에, ${me.name}은 최대한 차분하게 말을 이어갔다.`);
    await falcon.say_and_wait(
      `——트레이너는 담당 우마무스메의 잠재력을 최대한 끌어내고, 신체적·정신적 건강을 돌봐줘야 해. 무엇보다 우마무스메로서 더 멀리 나갈 수 있도록 돕는 게 가장 중요하고.`,
    );
    await me.say_and_wait(
      `맞아, 팔코가 말한 것들을 해낼 수 있다면 이미 합격점인 트레이너야.`,
    );
    await me.say_and_wait(`……하지만, 더 빛나는 트레이너가 되려면 아직 멀었지.`);
    await falcon.say_and_wait(`……팔코가 추구하는 아이돌과 비슷하네.`);
    await me.say_and_wait(`위에서 말한 책무 외에도, 우리는 실패했을 때 어떻게 할지 더 고민하곤 해.`);
    await me.say_and_wait(
      `실력과 재능이 압도적인 전설적인 트레이너나, 남들이 시기할 정도로 운이 좋은 천운의 소유자가 아니라면, 우리 같은 평범한 인간들은 모두 이 진지한 과제에 직면하게 돼.`,
    );
    await me.say_and_wait(
      `성공했을 때는 승리라는 사실 덕분에 약속을 어기지 않겠지만, 실패했을 때 우리는 ${falcon.sex}들에게 큰소리쳤던 자신을 어떻게 마주해야 할까?`,
    );
    await me.say_and_wait(`비록 최선을 다했지만, 그저 운이 좋지 않았을 뿐이라 해도 말이야.`);
    await falcon.say_and_wait(`그렇구나……`);
    await me.say_and_wait(`아쉽지만 우리는 실패가 가져올 결과를 감당해야만 해.`);
    await me.say_and_wait(
      `가볍게는 기대 수익이 줄어들거나 외부의 질타를 받는 정도겠지만, 심하면 사직 권고를 받거나 생계에 위협을 받을 수도 있어.`,
    );
    await me.say_and_wait(
      `이 과제에 대해 훌륭한 트레이너들은 저마다의 답을 내놓겠지. 내가 내린 답은 이거야.`,
    );
    await me.say_and_wait(
      `내가 선택하지 않은 돌발적인 사고들, 그 뒤에는 결국 나를 향한 선의가 담겨 있다는 것. 사고가 나서 비록 당장은 실패하더라도, 그 실패가 결국엔 성공보다 나은 결과를 가져올 거라고 믿어.`,
    );
    await me.say_and_wait(`그래서 기꺼이 이 책임을 지는 거야.`);
    await me.say_and_wait(
      `우리는 모두 자신의 선택에 책임을 져야 해. 아이돌도 결국 트레이너와 같은 길을 걷는 셈이지.`,
    );
    await me.say_and_wait(
      `그러니 그것의 책임을 이해했다면, 네가 생각하는 방식대로 나아가봐.`,
    );
    await era.printAndWait(
      `이어지는 길 위에서 ${falcon.name}의 발걸음은 한결 가벼워져 있었다.`,
    );
    era.set('cflag:46:축제이벤트표시', 0);
  };

  handlers[95 + 48] = async (falcon, me, callname) => {
    await print_event_name(`크리스마스♪`, falcon);
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}이 함께 보내는 세 번째 크리스마스.`,
    );
    await falcon.say_and_wait(`고마워 여러분!`);
    await era.printAndWait(`크리스마스 당일에도 팬들에게 보답하기 위한 콘서트가 열렸다.`);
    await era.printAndWait(`팬들 「팔코! 팔코!」`);
    await falcon.say_and_wait(
      `언제나 팔코를 응원해주는 여러분께 감사하는 마음으로, 팔코의 진심을 담은 선물을 준비했어!`,
    );
    await era.printAndWait(`팬 A 「정말 고마워요!」`);
    await era.printAndWait(`팬 B 「앞으로도 계속 팔코를 응원할게요!」`);
    await era.printAndWait(`팬 C 「모든 레이스 다 보러 갈게요!」`);
    await era.printAndWait(
      `선물이 다 바닥난 뒤에도, 몇몇 팬들은 선물을 받지 못해 아쉬워하고 있었다.`,
    );
    await falcon.say_and_wait(
      `팔코의 감사 축제에 참가해준 팬 여러분, 이제 팔코의 미소로 여러분의 마음을 따뜻하게 녹여줄게!`,
    );
    await era.printAndWait(`남은 팬들은 악수와 미소라는 선물을 받았다.`);
    await era.printAndWait(
      `팬 D 「비록 늦게 와서 선물은 못 받았지만, 앞으로도 팔코를 계속 응원할게요!」`,
    );
    await era.printAndWait(
      `팬들이 모두 흩어진 뒤, 현장에는 ${me.name}과(와) 팔코 두 사람만 남았다.`,
    );
    await falcon.say_and_wait(`드디어 끝났다!`);
    era.printButton(`선물을 받은 팬들이 정말 기뻐했을 거야`, 1);
    await era.input();
    await falcon.say_and_wait(`응!`);
    await falcon.say_and_wait(
      `팬이 한 명도 없던 시절부터 시작해서 이렇게 빛나는 아이돌이 되기까지, ${callname}의 도움이 없었다면 팔코는 여기까지 올 수 없었을 거야!`,
    );
    await era.printAndWait(
      `${me.name}을(를) 향해 고개를 숙여 인사하는 팔코의 모습에 ${me.name}은 조금 놀랐다.`,
    );
    era.printButton(
      `아니야, 팔코가 노력한 결과지. 난 내 할 일을 했을 뿐이야`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(
      `그럴 리가! ${callname}이 없었다면 팔코는 데뷔할 기회조차 없었을걸!`,
    );
    await falcon.say_and_wait(
      `그리고, 팔코는 ${callname}을…… 아, 미안.`,
    );
    await falcon.say_and_wait(`우리 이제 어디 좀 둘러보러 갈까?`);
    await falcon.say_and_wait(`외박 허가도 이미 받아뒀거든!`);
    await era.printAndWait(
      `${me.name}의 손을 살며시 잡은 ${falcon.name}이 ${me.name}을(를) 이끌었다.`,
    );
    await me.say_and_wait(`여기 배치해둔 소품들은 어쩌고?`);
    await falcon.say_and_wait(`괜찮아, 괜찮아!`);
    await era.printAndWait(
      `훈훈한 열기가 가득한 방에서 나오자마자 차가운 공기가 느껴졌다.`,
    );
    await falcon.say_and_wait(`밖은 생각보다 훨씬 더 춥네.`);
    await era.printAndWait(
      `방한 장갑을 꼈음에도 불구하고 틈새 사이로 찬 바람이 스며들었다.`,
    );
    await me.say_and_wait(`같이 사이제리야 가서 맛있는 거라도 먹을까?`);
    await era.printAndWait(
      `경제적이고 실속 있는 사이제리야는 배고픈 두 사람에게 아주 매력적인 선택지였다.`,
    );
    await falcon.say_and_wait(
      `팔코도 딱 그 생각 하고 있었어! 게다가 ${callname}과 같이 밥을 먹는다고 생각하니까 갑자기 기운이 솟는걸⭐`,
    );
    await me.say_and_wait(`그럼 빨리 가보자!`);
    era.drawLine();
    await era.printAndWait([
      falcon.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '건', color: falcon.color },
      '배!」',
    ]);
    await era.printAndWait(
      `따뜻한 조명 아래, 레스토랑의 소란스러운 소리와 식기 부딪히는 소리가 어우러져 독특한 분위기를 자아냈다.`,
    );
    await falcon.say_and_wait(`사이제리야 음식은 생각보다 더 맛있네.`);
    await me.say_and_wait(`크리스마스라서 그런 거 아닐까? 여기 있는 사람들 다 즐거워 보이잖아.`);
    await falcon.say_and_wait(
      `그런 면도 있겠지만, 무엇보다 평범한 ${falcon.get_uma_sex_title()}처럼 축제 분위기를 즐기고 있어서 그런 것 같아.`,
    );
    await me.say_and_wait(`팔코, 아이돌 활동에 지친 거야?`);
    await falcon.say_and_wait(`그럴 리가! 오히려 팔코는 아주 즐겁게 즐기고 있어!`);
    await era.printAndWait(`눈을 크게 뜬 팔코가 의아한 표정을 지어 보였다.`);
    await me.say_and_wait(`앞으로의 여정도 팔코는 계속 노력해야 해.`);
    await falcon.say_and_wait(`드림 트로피 리그 말이지?`);
    await me.say_and_wait(
      `레이스 말고도 스케줄 관리에 유의해서 너무 과로하지 않게 조심해야 해!`,
    );
    await era.printAndWait(`어느새 평소처럼 설교하는 모드로 돌아가 버렸다.`);
    await falcon.say_and_wait(
      `우우~ 이런 분위기에서 ${callname}은 정말 고집불통이라니까.`,
    );
    await era.printAndWait(
      `반쯤 남은 주스 빨대를 휘저으며 불만 섞인 소리를 내던 팔코가 ${me.name}을(를) 바라보았다.`,
    );
    await falcon.say_and_wait(
      `하지만, 팔코는 그런 ${callname}이 제일 좋은 걸지도!`,
    );
    await era.printAndWait(`갑자기 웃음을 터뜨리는 팔코의 모습이 무척 귀여워 보였다.`);
    await falcon.say_and_wait(`음—— 좀 더 이쪽으로 가까이 와줄래?`);
    await era.printAndWait(
      `말을 마치며 그녀는 ${me.name}이(가) 앉아있는 쪽으로 몸을 밀착했다.`,
    );
    await me.say_and_wait(`……`);
    await falcon.say_and_wait(`그럼! 하나, 둘, 셋!`);
    await era.printAndWait(`${falcon.name}은 스마트폰으로 입맞춤하는 순간을 찍어버렸다.`);
    await era.printAndWait(`아이돌로서 이건 NG 아니야?`);
    await falcon.say_and_wait(
      `아이돌 팔코는 모든 팬에게 공평한 사랑을 줘야 하지만, 지금의 나는 어디에나 있을 법한 평범한 ${falcon.get_uma_sex_title()}인걸!`,
    );
    era.set('cflag:46:축제이벤트표시', 0);
  };
};