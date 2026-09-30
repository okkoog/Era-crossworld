const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love205UtilFuckBuddy = require('#/event/love/love-events-205/until-fuck-buddy');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love205UtilFuckBuddy {
  async 74(vp, me) {
    await print_event_name('Un heureux événement (기쁜 소식 하나)', vp);
    if (vp.sex_code !== 1 && me.sex_code > 0 && check_pregnant_unprotect(205)) {
      begin_and_init_ero(0, 205);
      await vp.print_and_wait(
        `그날 방과 후, ${sys_get_callname(205,0,)}는 나를 차에 태우고 국도변의 러브호텔로 데려갔다.`,
      );
      await vp.print_and_wait('이런 곳은 한 번도 들어가 본 적이 없었다.');
      await vp.print_and_wait('겉보기엔 평범했고, 로비와 복도가 하나로 이어져 있어 조금 좁게 느껴졌다.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 카운터에 설치된 터치스크린을 눌러 방을 골랐다.`,
      );
      await vp.print_and_wait('반자동 시스템일 줄은 몰랐다. 종업원조차 없었다.');
      await vp.print_and_wait(
        `이 사람과 함께 엘리베이터 앞에 서 있는 지금, 앞으로 몇 시간 동안 나는 인형처럼 다뤄지며 ${me.sex}의 성욕을 처리하게 될 것이다.`,
      );
      await vp.print_and_wait(`이전의 경험에 비추어보면, ${me.sex}가 사정하게 만들면 끝날 일이다.`);
      await vp.print_and_wait(
        `방에 들어가자마자, ${sys_get_callname(205, 0)}는 내게 침대에 앉아 옷을 벗으라고 지시했다.`,
      );
      await vp.say_and_wait('알고 계시겠지만……');
      await me.say_and_wait('아, 약속대로 콘돔은 낄 거야.');
      await vp.print_and_wait('옷을 벗고, 어찌 됐든 이런 모습을 보여주는 건 역시나 부끄러웠다.');
      await me.say_and_wait('대단한데, 전혀 처진 느낌이 없어.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}를 기쁘게 한 가슴은 탄력도 최고급이라, ${
          me.sex
        }가 주무르자마자 손에 착 감기는 이상적인 가슴이었다.`,
      );
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)} 외의 다른 사람에게는 만져지게 하고 싶지 않았다.`,
      );
      await me.say_and_wait('표정이 좀 굳었네…… 어깨에 힘 좀 빼.');
      await vp.print_and_wait(
        '할 거라면 빨리 끝내주길 바랐다. 손이든, 입이든, 보지든 전부 사용될 테니까.',
      );
      await vp.print_and_wait(`나는 가끔 내가 그저 ${me.sex}의 자위 인형일 뿐이라는 생각이 들곤 했다.`);
      await me.say_and_wait('우선 침대에 누워. 그래, 위를 보고.');
      await vp.print_and_wait('어? 무슨 뜻인지 모르겠다. 교배 프레스 자세를 하려는 걸까.');
      await vp.print_and_wait(
        `${me.sex}의 지시대로 위를 보고 눕자, ${sys_get_callname(205,0,)}는 피아노를 치듯 내 몸 위로 손가락을 미끄러뜨리기 시작했다.`,
      );
      await vp.print_and_wait(
        '목, 겨드랑이, 쇄골, 옆구리. 만진다고 하기도 어려울 만큼 가벼운 힘으로, 때때로 꾹꾹 눌러왔다.',
      );
      await vp.print_and_wait('처음엔 싫을 거라고 생각했지만, 전혀 그렇지 않았다.');
      await vp.print_and_wait(
        '오히려, 어린아이들의 장난처럼 애가 타는 듯한 감각이었다.',
      );
      await vp.print_and_wait('그나저나, 왜 이런 짓을 하는 건지 이해할 수 없었다.');
      await vp.print_and_wait('유두와 음부를 피하면서 솜씨 좋게 손가락을 움직였다.');
      await vp.print_and_wait('만져진 곳이 조금 팽팽해졌다.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 말에 따르면 여자의 몸은 금고라고 했다.`,
      );
      await vp.print_and_wait('순서대로 자물쇠를 풀면 최고의 상태로 열리게 된다고.');
      await vp.print_and_wait('손가락이 마침내 질 안으로 들어왔고, 입구에 인사를 건네듯 천천히 안으로 파고들었다.');
      await vp.print_and_wait('이미 젖어버린 탓인지, 손가락은 수월하게 들어왔다.');
      await vp.print_and_wait('의식을 천장에 집중하며, 다른 것들은 애써 잊으려 했다.');
      await vp.print_and_wait(
        'LED 전등이네, 간접 조명 같은……. 나는 천장의 무늬를 세기 시작했다.',
      );
      await me.say_and_wait('대충 이런 느낌이려나.');
      await vp.say_and_wait('응? 힉, 앗! 아… 아앗?');
      await vp.print_and_wait('가버렸다. 나…… 고작 이것만으로 절정에 달한 건가?');
      await vp.print_and_wait('어? 아?');
      era.set('palam:205:질구쾌감', era.get('tcvar:205:질구쾌감상한'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await me.say_and_wait('하하, 눈까지 까뒤집고. 깜짝 놀랐어?');
      await vp.print_and_wait('이상한 약이라도 맞은 걸까——그렇게 생각하며 주위를 둘러보았다.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 오른손 손가락을 질 안에 찔러넣은 채, 왼손으로는 옆구리 근처를 어루만지고 있었다.`,
      );
      await vp.print_and_wait('주사기 같은 이상한 도구는 없었다.');
      await vp.print_and_wait('비정상적인 건 내 보지뿐이었다.');
      await vp.print_and_wait(
        `허리까지 덩달아 경련하며 ${sys_get_callname(205,0,)}의 손가락을 꿀꺽꿀꺽 삼켜댔고, 애액을 뚝뚝 흘리며 완전히 아양을 떠는 모습이 되어버렸다.`,
      );
      await vp.say_and_wait('제 몸에 무슨 짓을 한 거예요?');
      await me.say_and_wait(
        `목, 겨드랑이, 배, 옆구리. ${sys_get_callname(0,205,)}는 정말 온몸이 약점투성이네.`,
      );
      await vp.print_and_wait(
        `${me.sex}가 손가락을 살짝 움직일 때마다, 나는 수십 배의 힘으로 들어 올려지는 듯한 기분이 들었다.`,
      );
      await vp.print_and_wait(
        `아니, 내 몸이 물고기처럼 펄떡거리는 거다. ${sys_get_callname(205,0,)}가 한 번 쑤실 때마다 속수무책으로 튀어 올랐다.`,
      );
      await vp.say_and_wait('안 돼! 그만! 멈춰요! Arrêtez!');
      await me.say_and_wait(`역시 ${sys_get_callname(0, 205)}는 표정이 참 풍부하단 말이야.`);
      await vp.print_and_wait(
        `큰일 났다…… 끝장이야. ${sys_get_callname(205, 0)}를 너무 얕봤다.`,
      );
      await vp.print_and_wait(
        `이 사람은, 손끝만으로도 여자아이를 정신 못 차리게 만들고, ${me.sex}의 불쌍한 암캐로 만들어버릴 수 있다.`,
      );
      await vp.print_and_wait('그저 입구를 조금 괴롭혔을 뿐인데, 내 보지는 이미 항복해버렸다.');
      await vp.print_and_wait('배 안쪽 깊은 곳에서 자궁이 갈증을 느끼는 것처럼 날뛰고 있었다.');
      await vp.print_and_wait(`얼마나 능숙한 걸까? 그동안 얼마나 많은 여자아이를 울린 걸까?`);
      await vp.print_and_wait('난 아직 중학생인데… 이 나이에 이런 짓을 당하면……');
      await vp.say_and_wait('잠깐만요, 제발 그만……');
      await me.say_and_wait('그래? 보지는 이쯤 해둘까.');
      await vp.print_and_wait('이번엔 내 유두 위로 손이 미끄러졌다.');
      await vp.print_and_wait(
        '질 안의 여운이 가시기도 전에, 빳빳해진 유두가 가차 없는 손끝의 자극을 받았다.',
      );
      await vp.print_and_wait('내 유두는 지나치게 발기한 나머지, 유륜까지 후끈거릴 정도로 뜨거워져 있었다.');
      await vp.say_and_wait('앗! 응, 오오옷! 유두도……!');
      await vp.print_and_wait(`어떤 여자라도 울부짖으며 그만하라고 외칠 것이다.`);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.say_and_wait('히끅, 으으응!');
      await me.say_and_wait('그럼, 보지도 같이……');
      await vp.say_and_wait('흐으읍, 으으음……');
      await vp.print_and_wait('피뢰침이 된 기분이었다. 내 그곳에 벼락이 떨어졌다.');
      await vp.print_and_wait('하반신만 싹둑 잘려 나가 다른 생물로 변해버린 것 같았다.');
      await vp.print_and_wait('목구멍에서는 고장 난 사이렌 같은 소리밖에 나오지 않았다.');
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.print_and_wait(
        '몸속에서 폭발할 것 같은 무언가를 비명으로 토해내지 않으면 견딜 수가 없었다.',
      );
      await vp.print_and_wait(
        `내 몸이 ${sys_get_callname(205, 0)}에게 마음대로 망가져 가고 있었다.`,
      );
      await vp.print_and_wait('목은 뒤로 젖혀졌고, 허리는 제멋대로 앞으로 튀어 올랐다.');
      await vp.print_and_wait(
        `${sys_get_callname(205,0,)}의 손가락이 가차 없이 질 안을 파헤치자, 꼿꼿하게 뻗은 발끝이 허공을 향했다.`,
      );
      await vp.print_and_wait(
        '계속 참고 있던 『요의』가 한계에 달해, 터지기 일보 직전의 쾌감을 수백 배나 증폭시켰다.',
      );
      await vp.say_and_wait('아아앗, 나와요…… 나와버려요! 안 돼, 안 돼요……');
      await me.say_and_wait('그건 오줌이 아니니까, 싸도 돼.');
      await vp.print_and_wait(
        `${sys_get_callname(205,0,)}가 클리토리스를 꾹 누르자 허리가 튀어 오르며, 물 같은 투명한 액체가 쏟아졌다.`,
      );
      era.set('palam:205:질구쾌감', era.get('tcvar:205:질구쾌감상한'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.print_and_wait(
        '어떻게든 요도를 닫으려고 필사적으로 힘을 줬지만, 몸은 전혀 말을 듣지 않았다.',
      );
      await vp.print_and_wait('침대 시트에 얼룩이 지고, 엉덩이로도 차가운 물기가 느껴졌다.');
      await me.say_and_wait(
        `시오후키는 처음이야? ${sys_get_callname(0, 205)}는 정말 금방 느끼는구나.`,
      );
      await vp.say_and_wait(
        '아앗…… 아아…… 하아…… 안 돼, 그만, 제발 그만해요. 제 보지, 제발 용서해주세요……',
      );
      await vp.print_and_wait(
        '허리를 틀어봐도 도망칠 수 없었고, 계속해서 약점을 괴롭힘당하며 붙잡힌 채로 농락당했다.',
      );
      await vp.print_and_wait(
        `애액을 흘리며 ${sys_get_callname(205, 0)}에게 용서를 비는 내 얼굴은, 분명 엄청나게 엉망일 것이다.`,
      );
      await vp.print_and_wait(
        '눈물과 콧물 범벅인 채로, 세상에서 가장 행복한 암컷의 얼굴을 하고 있을 게 뻔했다.',
      );
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 손이 빠져나갈 때까지, 나는 몇 번이나 시오후키를 당했다.`,
      );
      await vp.print_and_wait('전신이 경련하여 자세를 바꾸는 것조차 불가능했다.');
      await vp.print_and_wait(
        '신경이 모조리 뽑혀 나가고, 뇌수에 직접 쾌락을 주입받는 기분이었다.',
      );
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 천천히 내 배와 머리카락을 쓰다듬었다…`,
      );
      await vp.print_and_wait(
        '배를 드러낸 반려견을 예뻐하듯, 펄떡이는 자궁을 부드럽게 주물러주었다.',
      );
      await me.say_and_wait('천천히 기억해둬. 마지막엔 네 자궁까지 기분 좋게 만들어 줄 테니까.');
      await vp.say_and_wait('아아아앗……');
      await vp.print_and_wait(
        `안 돼…… 암컷의 본능이…… 강한 수컷에게 굴복하고, ${me.sex}에게 지배당하고 싶어 해……`,
      );
      await vp.print_and_wait(
        '스승님은 이런 걸 가르쳐주신 적이 없는데. 전부 빼앗겨버렸다, 내 자존심도, 자신감도……',
      );
      await vp.print_and_wait(
        `지금껏 쌓아온 모든 것이 ${me.sex}의 색으로 물들어버렸다. 살려줘……`,
      );
      await me.say_and_wait('그럼 나도 슬슬 부탁 좀 할까.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 속옷을 벗고, 우뚝 솟은 페니스를 드러냈다.`,
      );
      await vp.print_and_wait(
        '아무리 봐도 거짓말 같았다. 굵기나 길이나, 혈관이 불거져 나온 모습이, 영화에서 보던 것과는 완전히 달랐다.',
      );
      await vp.print_and_wait(
        '열기처럼 피어오르는 짙은 수컷의 냄새가 내 뇌를 태워버렸다.',
      );
      await vp.print_and_wait('그전에, 내 몸은 이미 완전히 굴복하여 자손을 남길 준비를 마쳤다.');
      await vp.print_and_wait('바짝 조여진 뱃속이 은근히 아파왔고, 근육이 제멋대로 자궁을 끌어내렸다.');
      await vp.print_and_wait('오직 강한 수컷에게만 허락된 특권.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 씨앗에 유린당하는 것이 내 난자의 의무다.`,
      );
      await vp.print_and_wait('주세요, 이걸 주세요, 당신을 원해요.');
      await vp.print_and_wait(
        '자궁은 굶주림에 아양을 떨며 욱신거렸고, 저항할 의지는 옅어져, 군침을 흘리는 질구를 눈치채지 못했다.',
      );
      await me.say_and_wait('빤히 쳐다보고. 그렇게 맘에 들어?');
      await vp.print_and_wait('나를 부추기는, 마음속 깊은 곳에서 울려 퍼지는 질문.');
      await vp.print_and_wait(
        `최악이야, 정말 최악이야. 당신은 분명 이런 식으로 몇 명의 여자를 암컷으로 만들어버렸겠지.`,
      );
      await vp.say_and_wait('읏…… 제법 멋지게 생겼네요. 어쨌든 콘돔부터 껴요……');
      await me.say_and_wait(
        `그전에, 펠라치오. ${sys_get_callname(0, 205)}도 할 수 있지?`,
      );
      await vp.print_and_wait('순종할 수밖에 없었다. 이것도 어쩔 수 없는 일이니까.');
      await vp.print_and_wait(
        '입에 머금는 순간, 코를 찌르는 수컷의 냄새에 머리가 아득해져 또다시 시오후키를 뿜어냈다.',
      );
      await vp.print_and_wait(
        '이미 아양 떠는 법밖에 모르는 바보 같은 보지는, 앞으로 꿰뚫릴 것을 기대하며 음탕한 물을 질질 흘렸다.',
      );
      await vp.print_and_wait('너무 커서 절반 정도밖에 입에 담을 수 없었다.');
      await vp.print_and_wait('이빨이 닿지 않게 하려고 턱을 내리고 입을 옹송그렸다.');
      await vp.print_and_wait('정상적으로 숨을 쉴 수 없어, 콧김마저 거칠어졌다.');
      await me.say_and_wait('네 얼굴, 정말 의외인데.');
      await vp.say_and_wait('흐으읍, 으극, 츄릅, 우웁, 하아… 하아, 아앙.');
      await me.say_and_wait(`열심히 하는 모습이 귀엽네.`);
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await vp.print_and_wait('머리를 쓰다듬고, 귀를 만지작거렸다.');
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await vp.print_and_wait('어느새 다시 눕혀졌고, 꼬리는 하트 모양으로 말려 있었다.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 페니스를 빼내고 내 몸 위로 덮쳐왔다.`,
      );
      await vp.print_and_wait('도망칠 수 없고, 피할 수 없으며, 거역할 수 없다.');
      await vp.print_and_wait('나는 지금부터, 분명 뇌가 이상해질 때까지 괴롭힘당할 것이다.');
      await vp.print_and_wait('이 생식기를 각인당해, 수컷을 이길 수 없는 허접한 암컷이 되어버리겠지.');
      await vp.print_and_wait('최악이야…… 빨리 해줘요…');
      await vp.say_and_wait('와아아아앗!');
      await vp.print_and_wait('단숨에 함락당했다.');
      await vp.print_and_wait('보지가, 이상해져 버려.');
      await me.say_and_wait('이런 식으로 박히는 건 처음이지? 최대한 빨리 끝내줄게.');
      await vp.say_and_wait('그만해요, 머리가 이상해질 것 같아요! 이런 건, 모른단 말이에요…');
      await vp.print_and_wait('마치 G스팟을 끄집어낼 것처럼 가장 깊은 곳을 향해 피스톤질해 왔다.');
      await vp.print_and_wait(
        '반쯤 미쳐서 울부짖어도, 가차 없는 『찌걱찌걱』 소리는 멈추지 않았다.',
      );
      await vp.print_and_wait(
        '의식이 어디로 날아갔는지, 몇 번이나 절정에 달했는지도 모른 채, 억지로 끌려와 쾌락을 주입당했다.',
      );
      await vp.print_and_wait(
        `십여 분 동안 쑤셔대던 ${sys_get_callname(205, 0)}가 마침내 사정했다.`,
      );
      era.set('tcvar:0:콘돔', 1);
      era.set('palam:0:음경쾌감', era.get('tcvar:0:음경쾌감상한'));
      era.set('palam:205:질구쾌감', era.get('tcvar:205:질구쾌감상한'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.print_and_wait('고무 한 겹이 가로막고 있다는 게 믿기지 않을 정도로, 용암을 주입당하는 듯한 뜨거운 일격이었다.');
      era.drawLine();
      await vp.print_and_wait(
        '정신을 차렸을 때는 이미 몇 시간이 지나 있었고, 주위에는 티슈와 콘돔 포장지가 널려 있었다.',
      );
      await vp.print_and_wait(
        '휴지통에는 묶인 콘돔이 몇 개나 버려져 있어, 벌써 몇 번이나 갈아 끼웠는지 알 수 없었다.',
      );
      await vp.print_and_wait(
        `기억나는 건 뒤치기 자세를 하던 중, ${sys_get_callname(205,0,)}가 페니스를 빼고 콘돔을 교체할 때 내가 기절했다는 것뿐이다.`,
      );
      era.add('exp:205:질구절정횟수', 5);
      era.add('exp:0:음경절정횟수', 5);
      era.add('exp:0:사정량', 20);
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 품에 안긴 채로 계속해서 몸을 농락당했다.`,
      );
      await vp.print_and_wait('뛰쳐나가고 싶었지만, 지금의 나는 혼자서 일어서는 것조차 불가능했다.');
      await me.say_and_wait(
        `좋은 아침, ${sys_get_callname(0, 205)}. 우리 몸 궁합이 참 잘 맞네, 기분 좋았지?`,
      );
      await vp.say_and_wait('하아…… 하아…… 끝났으면 일단 이거 좀 놔줘요.');
      await me.say_and_wait(
        `${sys_get_callname(0, 205)}의 꼬리가 날 감고 있어서 무리인데.`,
      );
      await vp.print_and_wait('네?');
      await me.say_and_wait('승부욕이 강한 건 좋은 일일지도.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 그렇게 말하며 다시 내 클리토리스에 손을 뻗었다.`,
      );
      await vp.print_and_wait('조건반사적인 몸의 반응에 호흡이 멎었다.');
      await vp.say_and_wait('잠깐만요! 안 돼…… 죄송해요! 정말 기분 좋았어요.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 만족스럽게 코웃음을 치며 다시 내 가슴으로 손을 옮겼다.`,
      );
      await vp.print_and_wait(
        '어린아이가 찰흙 놀이를 하듯 마구잡이로 주무르는 방식이었지만, 내 몸은 그것에도 반응하여 잘게 떨렸다.',
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.print_and_wait(
        '분하다…… 안겨 있는 게 기분 좋아서 거역할 수가 없다. 프랑스 친구들도 이런 내 모습은 본 적이 없을 텐데.',
      );
      await vp.print_and_wait(
        '알지 못했던 온갖 쾌락이 뇌리에 새겨져, 마음속 깊은 곳에서부터 희열을 느꼈다.',
      );
      era.drawLine();
      await vp.print_and_wait(
        `아침, ${sys_get_callname(205, 0)}가 기숙사 앞까지 데려다주었고, 문을 열고 휘청거리며 걸음을 옮겼다.`,
      );
      await vp.print_and_wait('발은 납덩이를 단 것처럼 무거웠고, 머리는 안개가 낀 것처럼 멍했다.');
      await vp.print_and_wait('휴대폰을 확인해 보니, 부재중 전화와 메시지가 산더미처럼 쌓여 있었다.');
      await vp.print_and_wait(
        '모두가 날 걱정할 때, 나는 보지가 쓰다듬어지는 것만으로 애액을 사방에 흩뿌리고 있었다.',
      );
      await vp.print_and_wait(
        '모두가 날 걱정할 때, 자궁을 한없이 괴롭힘당하며 즐거워하고 있었다.',
      );
      await vp.print_and_wait(
        '모두가 날 걱정할 때, 나는 암컷으로서 최고의 행복을 맛보고 있었다.',
      );
      await vp.print_and_wait('나는 많은 사람을 배신했다…');
      await vp.say_and_wait('아앗…… 아아, 읏.');
      await vp.print_and_wait('정신을 차려보니 속옷이 흠뻑 젖어 있었다.');
      await vp.print_and_wait('오른손이 무의식적으로 가랑이 사이로 뻗어 갈라진 틈을 훑고, 클리토리스를 문지르며 자위했다.');
      await vp.print_and_wait(
        '——조금도 기분 좋지 않았다. 그때와는 달랐다. 왜지? 분명 같은 곳인데.',
      );
      await vp.print_and_wait(
        '책상에 엎드린 채, 왼손을 브래지어 아래로 밀어 넣어 빳빳해진 유두를 꼬집었다.',
      );
      await vp.print_and_wait(
        '연필꽂이에서 제법 굵은 볼펜을 꺼냈다. 스승님이 주신 선물이었다.',
      );
      await vp.print_and_wait('얕아…… 닿질 않아! 전혀 부족해.');
      await vp.print_and_wait('자위에 빠져들어 이것저것 불평하다 보니, 의자까지 흠뻑 젖어버렸다.');
      await vp.print_and_wait('하지만 갈 수 없었다. 알고 있다, 내가 『진짜』를 맛보았기 때문이란 걸.');
      await vp.print_and_wait('숨조차 막히게 하며 목구멍을 파고들던 그 거대한 물건이 머릿속을 스쳐 지나갔다.');
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        vp.get_colored_name(),
        '의 메시지를 받았다:',
      ]);
      await vp.say_and_wait('다음은 언제인가요?');
      era.println();
      end_ero_and_train();
    }
    await sys_love_uma_in_event(205);
  }
};