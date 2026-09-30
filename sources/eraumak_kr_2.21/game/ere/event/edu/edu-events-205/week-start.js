const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} vp
 * @param {CharaTalk} me
 * @param {EventObject} event_object
 */
module.exports = async function (vp, me, event_object) {
  const montjeu = get_chara_talk(204);
  let temp,
    wait_flag = false;
  switch (event_object?.arg) {
    case 47 + 24:
      await print_event_name('푸른 하늘 위를 날아오르다', vp);
      await era.printAndWait([
        vp.name,
        '는 새해를 보내고 봄이 조금 지난 5월, 데뷔전과 마찬가지로 1600m의 ',
        race_infos[race_enum.prix_prb].get_colored_name(),
        '에서 대승을 거두었다.',
      ]);
      await era.printAndWait([
        '본인의 강력한 희망에 힘입어, ',
        vp.sex,
        '는 거리가 500m가량 늘어난 ',
        race_infos[race_enum.prix_dia].get_colored_name(),
        '에도 출주했다.',
      ]);
      await era.printAndWait(
        `${me.name}을(를) 포함한 수많은 관객의 예상을 뒤엎고, 삼관 레이스에서 압도적인 승리를 거두었다.`,
      );
      await era.printAndWait(`${vp.name}는 착실하게 실력을 키워나갔다.`);
      await era.printAndWait(`그리고 그 과정에서 ${me.name}이(가) 가르칠 수 있는 것은 점차 줄어들었다.`);
      await era.printAndWait(
        `하나를 들으면 열을 아는 ${vp.name}는, 때로는 가르쳐주지 않아도 자연스럽게 정답을 찾아냈다.`,
      );
      await era.printAndWait(
        '베테랑 트레이너조차 눈치채지 못할 만한 점을 스스로 개선하곤 했다.',
      );
      await era.printAndWait(
        `다른 트레이너들에게 방임주의라는 지적을 받을 때도 있었지만, ${me.name}은(는) 이것이 ${vp.sex}에게 맞는 올바른 방식이라고 생각했다.`,
      );
      break;
    case 47 + 33:
      await print_event_name('가난한 집? 타향으로', vp);
      await era.printAndWait(
        `어느덧 여름도 막바지에 접어들고, 바닷가 합숙에서 돌아온 ${me.name}은(는) 다시 G1 출주 등록 서류를 작성하고 있었다.`,
      );
      await era.printAndWait(`프랑스 오크스를 제패한 지 얼마 지나지 않은 것 같은데, 정신을 차려보니 또 G1이었다.`);
      await era.printAndWait(`대망의 다음 무대는 ${vp.sex}가 그토록 고대하던 개선문상.`);
      await era.printAndWait(
        `지금까지 보여준 압도적인 실력만 놓고 본다면, ${vp.name}가 그 영예를 차지한다 해도 전혀 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 출주 신청서에 서명을 마친 뒤, 트레이닝실 소파에 누워 있는 ${vp.name}에게 건넸다.`,
      );
      era.printButton(`「출주 신청서야. 서명해 줘.」`, 1);
      await era.input();
      await vp.say_and_wait(`네에.`);
      await era.printAndWait(
        `어느샌가 ${vp.sex}는 트레이닝실을 마치 자신의 개인 방인 양 드나들고 있었다.`,
      );
      await era.printAndWait(`하지만 ${vp.sex}와 계약을 맺은 이상, 딱히 불평할 수도 없는 노릇이었다.`);
      await era.printAndWait(
        `그것보다 ${me.name}은(는) ${vp.sex}가 사생활에서의 이 칠칠치 못한 모습부터 어떻게든 해결해 주기를 바랐다.`,
      );
      await era.printAndWait(
        `${vp.name}는 소파에서 스르륵 미끄러지듯 일어나, 건네받은 볼펜을 톡톡 두드리며 ${me.name}을(를) 슬쩍 바라보았다.`,
      );
      await vp.say_and_wait(`그러고 보니, 이번 주 일요일에 시간 있으세요?`);
      era.printButton(`「낮에는 한가해.」（애정도+1）`, 1);
      era.printButton(`「추가 트레이닝이라도 하려고?」（호감도+5）`, 2);
      temp = await era.input();
      await era.printAndWait(`${vp.name}는 서명을 하며 생각에 잠겼다.`);
      await vp.say_and_wait(
        `스승님이 절 보고 싶어 하신대요. 여름 합숙이 끝나면 한 번 들르라고 하셨으니, 슬슬 다녀오려고요.`,
      );
      era.printButton(`「스승님?」`, 1);
      await era.input();
      await vp.say_and_wait(`네, 제게 달리는 법을 가르쳐 주신 분이에요.`);
      await era.printAndWait(`${vp.sex}를 달리는 우마무스메로 키워낸 인물.`);
      await era.printAndWait(
        `완성도 높은 실력을 갖춘 ${vp.name}를 또 다른 시선에서 바라본 인물을 만난다면, ${vp.sex}를 더 깊이 이해할 좋은 기회가 될 것이다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 출주 신청서가 담긴 봉투를 풀로 붙이며, ${vp.sex}의 제안을 수락했다.`,
      );
      await era.printAndWait(
        `그렇다면 빈손으로 갈 수는 없으니 선물을 준비해야 했다. ${me.name}은(는) 찻잎 캔이 진열된 선반으로 시선을 돌렸다.`,
      );
      await era.printAndWait(`가을 수확기까지는 아직 멀었기에, 어디에도 가을의 청명함을 담은 찻잎은 없었다.`);
      await era.printAndWait(`그렇다면 수확 기간이 긴 아삼 찻잎을 고르는 편이 나을 것이다.`);
      era.println();
      wait_flag = sys_like_chara(
        205,
        0,
        5 * (temp === 2),
        true,
        Number(temp === 1),
      );
      break;
    case 95 + 25:
      await print_event_name('낯선 길.', vp);
      await era.printAndWait(`개선문상 이후로 반년 이상이 흘렀다.`);
      await era.printAndWait(
        `${vp.name}의 태도는 여전히 변함없었고, ${me.name}의 지도를 솔직하게 받아들였다.`,
      );
      await era.printAndWait(
        `다방면에서 눈부신 성장을 이루었음에도, 트레이닝에 대한 열의는 전혀 식지 않았다.`,
      );
      await era.printAndWait(
        `${vp.sex}의 사랑스러움이 더 많은 사람에게 알려졌고, 레이스가 거듭될수록 ${vp.sex}의 팬도 늘어만 갔다.`,
      );
      await era.printAndWait(
        `개선문상에서의 전과를 포함해, 이제 ${vp.sex}는 프랑스를 짊어진 ${vp.get_teen_sex_title()}로서 널리 이름을 떨치고 있었다.`,
      );
      await era.printAndWait(`하지만, 그렇다고 해서 레이스의 결과까지 마음대로 흘러가지는 않았다.`);
      await era.printAndWait(
        `${vp.name}의 개인 소지품이 작년보다 부쩍 늘어난 트레이닝실은 푹푹 찌는 더위에 잠식되어 있었다.`,
      );
      await era.printAndWait(
        `지친 몸을 쉬게 해야 함에도 ${me.name}이(가) 이곳을 떠나지 못하는 이유는 오직 하나뿐이었다.`,
      );
      await era.printAndWait(`올해 들어 기록한 ${vp.name}의 성적 때문이었다.`);
      await era.printAndWait(
        `눈앞의 모니터 속에서는 봄과 초여름에 치렀던 두 차례의 G1 레이스 영상이 끝없이 반복 재생되고 있었다.`,
      );
      await era.printAndWait(`거리도 작년과 같았고, 경기장 상태가 딱히 나빴던 것도 아니다.`);
      await era.printAndWait(`그럼에도 결과는 각각 2착과 3착.`);
      await era.printAndWait(
        `${vp.name}는 계속해서 트레이닝에 매진하고 있었지만, 명확한 해결책을 찾지 못한 탓에 연패 타이틀이 걸린 다음 개선문상도 불안감이 감돌았다.`,
      );
      await era.printAndWait(
        `반복되는 영상과 ${vp.sex}의 컨디션을 번갈아 살피다 보니, 이미 몇 시간이나 흘러 있었다.`,
      );
      await era.printAndWait(
        `까마귀 울음소리에 ${me.name}은(는) 퍼뜩 정신을 차렸다. 고개를 돌려보니 창밖은 이미 노을빛 오렌지색으로 물들어 있었다.`,
      );
      await me.say_and_wait(`……큰일이네.`, true);
      await era.printAndWait(`오늘 트레이닝 일정이 잡혀 있었을 텐데.`);
      await era.printAndWait(
        `생각에 몰두하느라 ${vp.sex}를 잊고 있었다는 사실에 황급히 스마트폰을 꺼내자, 메시지 알림이 와 있었다.`,
      );
      await era.printAndWait(
        `미리보기 창으로도 약 1시간 전에 도착한 그 메시지가 ${vp.name}가 보낸 것임을 선명히 알 수 있었다.`,
      );
      await vp.say_and_wait(`죄송해요, 오늘 몸이 좀 안 좋아서 쉴게요.`);
      await era.printAndWait(`원래대로라면 트레이닝 일정이 먼저였을 터.`);
      await era.printAndWait(
        `즉, 약속 시간이 한참 지나고 나서야 이 메시지를 보냈다는 뜻이다.`,
      );
      await era.printAndWait(`${me.name}은(는) 머리를 감싸 쥐며 ${vp.sex}에게 답장을 보내려 했다`);
      await era.printAndWait(
        `하지만 지금 어떤 변명을 늘어놓아도 무의미할 터였기에, 그저 간결하게 답하는 편이 나았다.`,
      );
      era.printButton(`「알았어.」`, 1);
      await era.input();
      await era.printAndWait(
        `최근 이렇다 할 성과를 내지 못한 ${vp.name}이기에, ${me.name} 스스로도 이제는 ${vp.sex}와 제대로 마주해야 할 때임을 뼈저리게 느끼고 있었다.`,
      );
      await era.printAndWait(
        `원인조차 파악하지 못하는 트레이너가, 과연 ${vp.sex}의 무엇을 책임질 수 있단 말인가.`,
      );
      await era.printAndWait(`${me.name}은(는) 자리에서 일어나고 나서야 비로소 배고픔을 느꼈다.`);
      await era.printAndWait(`（……홍차면 되려나?）`);
      await era.printAndWait(`찻잎 캔 선반에서 흘러나오는 은은하고 상큼한 향기가 뇌리를 자극했다.`);
      await era.printAndWait(
        `머리가 맑아지는 듯한 기분에, ${me.name}은(는) 캔 하나를 집어 들었다.`,
      );
      await era.printAndWait(
        `그러나 안에는 내용물이 거의 없었고, 캔 바닥에 남은 찻잎 잔해와 레몬 향의 잔향만이 맴돌고 있었다.`,
      );
      await era.printAndWait(`그날 이후로, ${vp.name}는 줄곧 이 홍차를 좋아했다.`);
      await era.printAndWait(`어쩌다 트레이닝실에 들를 때면 이 차를 우리는 경우가 많았다.`);
      await era.printAndWait(`가을이 깊어지면 쌀쌀한 날도 늘어날 것이다.`);
      await era.printAndWait(`${me.name}은(는) 묵묵히 캔 뚜껑을 닫았다.`);
      await me.say_and_wait('혼자 가서 좀 사 와야겠네……', true);
      era.set('cflag:205:모집상태', -2);
      if (era.get('flag:현재상호작용캐릭터') === 205) {
        era.set('flag:현재상호작용캐릭터', 0);
      }
      EventMarks.get(0).add(event_hooks.out_start);
      new TreveEduMarks().tea = 1;
      break;
    case 95 + 29:
      await print_event_name('Fly Away', vp);
      await era.printAndWait(
        `${me.name}은(는) 트레이닝실에서 만나기로 약속한 ${vp.name}를 기다리고 있었다.`,
      );
      await era.printAndWait(
        `${vp.sex}가 오기 전까지 남는 시간 동안 지난 레이스의 영상들을 다시 한번 검토했다.`,
      );
      await era.printAndWait(
        `${vp.name}가 슬럼프에 빠진 이유를 하나씩 차례대로 짚어보았다. 하지만 문제는 그뿐만이 아니었다.`,
      );
      await era.printAndWait(`${me.name}은(는) 최근 레이스의 최종 직선 주로를 다시 확인했다.`);
      await era.printAndWait(
        `${vp.name}는 이전과 다름없이 선두 그룹을 뚫고 앞으로 치고 나가기 위해 호시탐탐 기회를 노리고 있었다.`,
      );
      await era.printAndWait(
        `그러나 상대의 포위망을 미처 빠져나오지 못했고, 장기인 막판 스퍼트를 제대로 발휘하지도 못한 채 레이스가 끝나버렸다.`,
      );
      await era.printAndWait(
        `애초에 ${vp.name}는 체구가 그리 크지 않은 ${vp.get_uma_sex_title()}였다.`,
      );
      await era.printAndWait(
        `게다가 작전마저 간파당한다면, 서로 연대하여 ${vp.sex}가 앞으로 나가지 못하도록 가로막는 무리가 생겨나도 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `무엇보다도 ${vp.sex}의 달리기 방식은 너무나 예측하기 쉬웠다. ${vp.name}의 주법은 ${montjeu.name}를 쏙 빼닮아 있었으니까.`,
      );
      await era.printAndWait(
        `당시 트레이너들이 ${montjeu.name}를 저지하기 위해 고심해서 짜냈던 전략들이, 지금 ${vp.name}에게 그대로 통하고 있는 것이다.`,
      );
      await era.printAndWait(
        `전설의 후계자를 계속 승리로 이끌기 위해, ${me.name}은(는) 과연 무엇을 전해줄 수 있을까.`,
      );
      await era.printAndWait(
        `그렇게 고뇌하는 사이 약속 시간으로부터 벌써 한 시간 남짓이 흘렀다. 하지만 ${vp.name}는 올 기미가 보이지 않았다.`,
      );
      break;
    case 143 + 9:
      await CustomizedEdu.common_palace(vp, me);
      if (era.get('love:205') < 50) {
        await CustomizedEdu.common_palace_relation(vp, me);
      } else {
        era.drawLine();
        era.set('flag:현재위치', location_enum.gate);
        await print_event_name(`이루어진 아름다운 꿈`, vp);
        era.set('flag:현재위치', location_enum.office);
        await era.printAndWait(`${me.name}은(는) 무슨 소리를 들었다.`);
        await era.printAndWait(
          `어둠 속에서 눈을 뜨자, 눈앞에 보인 것은 낯선(전혀 아니지만) 천장이었다.`,
        );
        await era.printAndWait(`머릿속이 몽롱해서 상황이 제대로 파악되지 않았다.`);
        await era.printAndWait(`어쩐지 평소와는 전혀 다른 장소에 와 있는 듯한 기분이 들었다.`);
        await era.printAndWait(
          `흐릿한 정신으로 멍하니 허공을 응시하고 있자, 은은한 향기가 코끝을 스쳤다.`,
        );
        await era.printAndWait(
          `직후, 어떤 ${vp.get_teen_sex_title()}가 불쑥 시야에 들어왔다.`,
        );
        await era.printAndWait(`부드러운 밤색 머리카락과 맑고 푸른 벽안.`);
        await era.printAndWait(
          `그리고 얼굴에는 마치 아기를 바라보는 듯한 자애로운 미소가 어려 있었다.`,
        );
        await vp.say_and_wait(`Bonjour, 편안히 주무셨나요?`);
        await era.printAndWait(`어루만지듯 다정한 목소리가 기분 좋은 나른함을 불러일으켰다.`);
        await era.printAndWait(
          `상대의 얼굴을 보고서야 ${me.name}은(는) 비로소 상황을 파악했고, 이성을 깨우려 노력했다.`,
        );
        await era.printAndWait(`하지만 따스한 손바닥이 눈 앞을 부드럽게 가려왔다.`);
        await vp.say_and_wait(`조금만 더 주무실래요? 아직 이른 시간인걸요.`);
        era.printButton(`「……아니, 이제 일어나야지.」`, 1);
        era.printButton(`「나도 너와 함께 맞는 아침을 만끽하고 싶어.」（애정도+1）`, 2);
        temp = await era.input();
        await vp.say_and_wait(`후후, 그러시군요. 기뻐요.`);
        await era.printAndWait(`눈을 가리고 있던 손바닥이 치워지자, 시야 가득 빛이 밀려들었다.`);
        await era.printAndWait(
          `몸을 일으키자, ${vp.name}가 ${me.name}의 침대에 걸터앉아 미소 짓고 있었다.`,
        );
        await era.printAndWait(
          `살짝 아쉽다는 생각이 스쳤지만, 어쩌면 이것으로 충분할지도 모른다. 우선은 해야 할 일부터 처리해야 했다.`,
        );
        era.printButton(`「좋은 아침이야, ${vp.name}.」`, 1);
        await era.input();
        await vp.say_and_wait(`네, ${me.actual_name}!`);
        await era.printAndWait(`${vp.name}는 지저귀듯 노래하는 어조로 대답했다.`);
        era.drawLine();
        await era.printAndWait(
          `개선문상 이후로 ${me.get_couple_title()}은 주로 해외 레이스를 무대로 삼아왔다.`,
        );
        await era.printAndWait(
          `정확히 말하자면, 평소보다 훨씬 뛰어난 실력을 발휘한 결과 해외 레이스를 주 전장으로 삼아 질주하기로 결정된 것이었다.`,
        );
        await era.printAndWait(
          `곁에서 떨어질 줄 모르는 ${vp.name}를 겨우 달래어 떼어놓고, 옷을 갈아입은 뒤 거실로 향했다.`,
        );
        await era.printAndWait(
          `테이블 위에는 진수성찬이 차려져 있었고, ${vp.name}가 ${me.name}을(를) 기다리고 있었다.`,
        );
        await era.printAndWait(`솔직히 깜짝 놀랐다. ${vp.name}는 요리에도 상당한 소질이 있었던 것이다.`);
        await era.printAndWait(`자리에 앉아 다양한 요리들을 바라보았다.`);
        await era.printAndWait(
          `참치, 엔초비, 올리브 등을 듬뿍 넣어 푸짐하게 만든 샐러드.`,
        );
        await era.printAndWait(`보기만 해도 마음까지 따뜻해지는 수프가 훌륭한 향을 풍기고 있었다.`);
        await era.printAndWait(
          `하나같이 눈이 휘둥그레질 만한 요리들이었지만, 그중에서도 유독 눈길을 사로잡는 음식이 있었다.`);
        await era.printAndWait(`두툼한 햄과 치즈를 아낌없이 넣은 샌드위치.`);
        await era.printAndWait(
          `${vp.name}에게 「잘 먹겠습니다」라고 인사를 건넨 뒤, 크게 한 입 베어 물었다.`,
        );
        await era.printAndWait(
          `진한 치즈 소스와 햄의 풍미가 어우러져, 마치 고급 레스토랑에서 먹는 듯한 맛이 났다.`,
        );
        await era.printAndWait(`——완전히 똑같은 맛이다. 그제야 기억이 떠올랐다.`);
        era.printButton(`「……이거, 어디서 사 온 거야?」`, 1);
        await era.input();
        await vp.say_and_wait(`제가 만든 건데요?`);
        await vp.say_and_wait(`당신이 맛있게 드시는 것 같아서 직접 연구해 봤어요!`);
        await era.printAndWait(`……이 아이가 천재라는 사실을 깜빡 잊을 뻔했다.`);
        await era.printAndWait(
          `그렇다 해도 이 정도로 완벽하게 재현해 내다니, 과연 ${vp.sex}답다고 감탄할 수밖에 없었다.`,
        );
        await vp.say_and_wait(`……${sys_get_callname(205, 0)}, 제게 포상을 주셔야겠죠?`);
        await era.printAndWait(
          `찰나의 미소를 짓던 ${vp.name}가 다음 순간 말을 건넸다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 살짝 벌어진 입술 사이로 보이는 선홍빛 입안과 혀를 마주하자, 왠지 모르게 심장이 쿵 내려앉았다.`,
        );
        await era.printAndWait(`왠지 보아서는 안 될 것을 본 듯한 기묘한 배덕감이 몰려왔다.`);
        await vp.say_and_wait(`아앙……♪`);
        await era.printAndWait(
          `그 상태로 ${vp.name}는 귀와 꼬리를 파르르 움직이며, 기대에 찬 눈빛으로 ${me.name}을(를) 바라보았다.`,
        );
        await era.printAndWait(`……그러니까,「그거」를 해달라는 뜻이군.`);
        await era.printAndWait(
          `잠시 망설였지만, 해주지 않으면 ${vp.sex}는 계속 입을 벌린 채 가만히 서 있을 게 뻔했다.`,
        );
        await era.printAndWait(
          `하는 수 없이 샌드위치를 한 입 크기로 작게 떼어내어, ${vp.sex}의 입안으로 조심스럽게 넣어주었다.`,
        );
        await vp.say_and_wait(`냠……`);
        await era.printAndWait(
          `${vp.name}는 입술을 다물며 ${me.name}의 손가락 끝을 살짝 머금었다.`,
        );
        await era.printAndWait(`생생한 감촉과 따스함이 손가락을 타고 뇌리까지 전해졌다.`);
        await era.printAndWait(
          `그리고 ${vp.sex}는 무언가를 음미하듯 오물거리며 꿀꺽 삼켜냈다.`,
        );
        await vp.say_and_wait(`……음.`);
        await era.printAndWait(`눈을 감았다가 다시 뜨며, 슬그머니 입을 벌린다.`);
        await era.printAndWait(`설마 한 번 더 달라고 요구할 줄이야.`);
        await era.printAndWait(
          `배덕감과 보호본능, 그리고 가슴 깊은 곳의 자극을 느끼며 ${me.name}은(는) 다시 샌드위치를 조금 떼어냈다.`,
        );
        await era.printAndWait(
          `두 번, 세 번, 네 번…… ${vp.sex}의 입에 넣어줄 때마다 손가락 끝이 조금씩 젖어 들었다.`,
        );
        await era.printAndWait(
          `이윽고 접시 위의 샌드위치가 완전히 사라지며 상황이 종료되었다.`,
        );
        await vp.say_and_wait(`아, 당신 몫까지 다 먹어버렸네요.`);
        era.printButton(`「상관없어, 맛있게 먹었으면 됐지 뭐!?」`, 1);
        await era.input();
        await vp.say_and_wait(`네에♪ 고마워요♪`);
        await era.printAndWait(
          `${vp.name}는 활짝 웃으며 인사를 건넨 뒤, 혀로 입술을 가볍게 한 바퀴 핥았다.`,
        );
        await era.printAndWait(`그 모습을 본 ${me.name}은(는) 침이 묻어 축축해진 손가락을 의식하지 않을 수 없었다.`);
        await era.printAndWait(`${vp.name}는 그 손가락을 힐끗 바라보며 나지막이 중얼거렸다.`);
        await vp.say_and_wait(`……어쩐지 중독될 것 같아요.`);
        await era.printAndWait(`못 들은 척 넘어가기로 했다.`);
        era.drawLine();
        await vp.say_and_wait(`……또 밤늦게까지 일하시는 거군요.`);
        await era.printAndWait(`양어깨에 얹힌 따스한 손길과 함께 위쪽에서 목소리가 들려왔다.`);
        await era.printAndWait(
          `고개를 들어보니, 방금 목욕을 마쳐 온기를 품고 있는 ${vp.name}가 진지한 눈빛으로 ${me.name}을(를) 내려다보고 있었다.`,
        );
        await era.printAndWait(`자, 시간도 늦었으니 방으로 돌아가야 했다.`);
        era.printButton(
          `「오늘은 이만 자야겠어. 잘 자, ${sys_get_callname(0, 205)}.」`,
          1,
        );
        await era.input();
        await vp.say_and_wait(`아……`);
        await era.printAndWait(`옷자락이 가볍게 당겨지는 느낌이 들었다.`);
        await era.printAndWait(
          `뒤를 돌아보자, ${vp.name}가 무척 쓸쓸한 표정으로 ${me.name}의 옷자락 끝을 꼭 쥐고 있었다.`,
        );
        await era.printAndWait(`그 모습이 마치 가녀린 소동물을 연상시켜, ${me.name}의 마음을 약하게 만들었다.`);
        era.printButton(`「역시 바로 잠들기는 좀 그렇네. 같이 밤바람이라도 쐬러 갈까?」`, 1);
        await era.input();
        await vp.say_and_wait(`……네!`);
        await era.printAndWait(`${vp.name}의 눈이 순식간에 반짝였고, 꼬리가 살랑살랑 흔들리기 시작했다.`);
        await era.printAndWait(
          `이젠 제법 익숙한 반응이라고 생각하며, ${me.name}은(는) ${vp.sex}의 손을 살포시 맞잡았다.`,
        );
        await era.printAndWait(
          `그 누구가 보아도 아름답고 고결한, 완벽하리만치 이상적인 질주.`,
        );
        await era.printAndWait(`성녀처럼 순결함을 간직한 ${vp.sex}.`);
        await era.printAndWait(`여신처럼 고귀함을 품은 ${vp.sex}.`);
        await era.printAndWait(`조금은 칠칠치 못하지만, 의외로 싹싹하고 친근한 ${vp.sex}.`);
        await era.printAndWait(`그리고, 그 누구보다 외로움을 많이 타는 ${vp.sex}.`);
        era.printButton(`「네가 내 곁에 있어 주기만 한다면——」`, 1);
        await era.input();
        await era.printAndWait(`담백하면서도 명확하게 진심을 전한다.`);
        await era.printAndWait(`오직 ${vp.name}에게만 어울리는 어조로.`);
        era.printButton(`「몇 번이고 네게 내 사랑을 전할게.」`, 1);
        await era.input();
        await era.printAndWait(`뱉고 보니 조금 부끄러운 대사였을지도 모른다.`);
        await era.printAndWait(
          `${me.name}은(는) 등 뒤로 식은땀이 흐르는 것을 느꼈지만, 이미 주워 담을 수 없는 말이었다.`,
        );
        await era.printAndWait(
          `${vp.name}는 귀와 꼬리를 바짝 세우고 눈을 동그랗게 뜬 채, 얼굴을 새빨갛게 물들였다.`,
        );
        await era.printAndWait(
          `이윽고 기가 찬다는 듯, 혹은 체념했다는 듯이 깊은 한숨을 푹 내쉬었다.`,
        );
        await vp.say_and_wait(`……트레이너도 의외로 탐욕스러우시네요. 그런 엄청난 말을 아무렇지도 않게 하시다니.`);
        era.printButton(`「몰랐어? 트레이너란 원래 다 그런 생물이야.」`, 1);
        await era.input();
        await era.printAndWait(
          `누구나 자신이 담당한 ${vp.get_uma_sex_title()}를 최고의 영웅으로 만들고 싶어 하니까.`,
        );
        await era.printAndWait(`영광의 왕관을 차지한 바로 다음 날에도, 벌써 새로운 트로피를 갈망하게 되는 법이다.`);
        await era.printAndWait(
          `트레이너라는 존재는 실상 ${vp.get_uma_sex_title()}보다 훨씬 더 탐욕적인 생물일지도 모른다.`,
        );
        await era.printAndWait(
          `그 말을 들은 ${vp.name}는 조금 전보다 더 깊은 한숨을 쉬며 양손을 뻗어왔다.`,
        );
        await era.printAndWait(
          `그리고 ${me.name}의 양 뺨을 부드럽게 감싸 쥔 채, 올곧은 시선으로 지긋이 바라보았다.`,
        );
        await vp.say_and_wait(`어쩔 수 없네요. 알겠어요, 당신의 곁에 있어 줄게요.`);
        await era.printAndWait(`말을 마친 ${vp.name}가 얼굴을 조금 더 가까이 밀착시켜 왔다.`);
        await era.printAndWait(
          `눈앞에는 ${vp.sex}의 수려한 이목구비가 가득 찼고, 살결의 온기가 느껴질 만큼 가까운 거리에서 달콤한 향기가 풍겨왔다.`,
        );
        await era.printAndWait(`그리고 바로 그 순간, ${vp.sex}의 눈빛이 돌연 날카롭게 빛났다.`);
        await vp.say_and_wait(`하지만 착각하지는 마세요. 전 당신의 이상을 채워주기 위해 존재하는 게 아니니까요.`);
        await era.printAndWait(
          `그것은 ${me.name}을(를) 향한 선전포고와도 같았다. 투명하리만치 시린 눈빛이 ${me.name}의 심장을 꿰뚫었다.`,
        );
        await vp.say_and_wait(
          `그 누구에게도 양보 안 해요. 전 언제나 당신의 앞을 가로막고 서서, 언젠가 오직 저만을 바라보게 만들 테니까요.`,
        );
        await era.printAndWait(`말을 끝맺은 ${vp.name}가 싱긋 미소를 지었다.`);
        await era.printAndWait(
          `그것은 ${vp.sex}가 본래 지니고 있던, 주변 사람마저 행복하게 만드는 천진난만하고 화사한 미소였다.`,
        );
        await era.printAndWait(
          `${vp.sex}의 얼굴에 다시 기분 좋은 웃음꽃이 피어나자, 가볍게 눈을 찡긋해 보였다.`,
        );
        await vp.say_and_wait(`——나의 사랑.`);
        era.println();
        wait_flag = temp === 2 && sys_love_uma(205, 1);
      }
  }
  wait_flag && (await era.waitAnyKey());
};