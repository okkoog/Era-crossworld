const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers.beginning = async (falcon, me, callname) => {
    const flash = get_chara_talk(37);
    await print_event_name(`함성이 울려 퍼지는 더트 레이스`, falcon);
    
    await era.printAndWait(`어느 곳의 더트 레이스\n`);
    await say_by_passer_by_and_wait(
      `해설`,
      `레이스는 이미 최종 단계에 진입했습니다! 2번과 4번 우마무스메가 무리에서 빠져나와 마지막 경합을 시작합니다!`,
    );
    await say_by_passer_by(`관중`, `오오오오오오오오오!`);
    await era.printAndWait(
      `하늘에서 내려온 눈송이가 조용히 어깨에 내려앉아 축축한 물기로 변했다. 관람석의 관중들은 두꺼운 목도리와 코트를 두른 채 깃발과 리본을 흔들었고, 여기저기서 터져 나오는 응원 소리가 겨울날의 정적을 깨뜨렸다.`,
    );
    await say_by_passer_by_and_wait(
      `레이스 ${falcon.get_uma_sex_title()}`,
      `하아아아아앗!`,
    );
    await era.printAndWait(
      `두 명의 ${falcon.uma_sex_title}는 레이스 초반부터 줄곧 선두 그룹에 위치했으나, 무리와 크게 거리를 벌리지는 못했다. 마지막 스퍼트 구간에 들어서서야 급격히 가속하며 무리를 뒤로 따돌리기 시작했다.`,
    );
    await era.printAndWait(
      `관객석의 질서 정연했던 응원 소리는 극적인 장면에 의해 찢겨 나가듯 무질서하게 변했다.`,
    );
    await say_by_passer_by_and_wait(
      `해설`,
      `두 사람 모두 한 치의 양보도 없습니다! 결승점까지 남은 거리 200미터! 100미터! 50미터! 마지막 승자는——`,
    );
    await era.printAndWait(`시간이 이대로 응고되었다.`);
    await era.printAndWait(
      `뒤쫓던 ${falcon.get_uma_sex_title()}와 앞서가던 ${falcon.get_uma_sex_title()}가 나란히 서서 추월하려는 자세를 취했고, 그 후——`,
    );
    await falcon.say_and_wait(
      `이게 ${callname}이 팔코에게 보여주고 싶었던 장면이야?`,
    );
    await era.printAndWait(`응고되었던 시간이 다시 움직였다.`);
    await era.printAndWait(
      `승리를 거머쥔 ${falcon.get_uma_sex_title()}는 온몸이 모래먼지로 뒤덮인 것도 아랑곳하지 않고, 땀과 눈물이 뒤섞인 미소를 관객들에게 선사했다.\n\n`,
    );
    await era.printAndWait(
      `경기장의 스포트라이트가 승자에게 집중되었고, 다른 ${falcon.uma_sex_title}들은 마치 별들이 달을 에워싸듯 승리의 열매를 더욱 달콤하고 유혹적으로 돋보이게 했다.`,
    );
    await era.printAndWait(
      `격정적인 기쁨이든 실패의 분함이든, 목구멍에서 쥐어짜 낸 불굴의 외침과 목이 쉬도록 닿고 싶어 했던 저 하늘.`,
    );
    await era.printAndWait(
      `추운 밤임에도 불구하고, 이 뜨거운 감정은 현장에 있는 모든 관객의 마음속에 확실히 전달되었다.`,
    );
    await falcon.say_and_wait(`와아아— 더트 레이스, 생각했던 것보다 훨씬 더 뜨겁네.`);
    await falcon.say_and_wait(
      `무대 가장 중앙에 있는 ${falcon.get_uma_sex_title()}, 관객들의 주의가 전부 저기에 집중되어 있어……`,
      true,
    );
    await falcon.say_and_wait(`만약 팔코도 저기에 설 수 있다면.`, true);
    await falcon.say_and_wait(`팔코…… 팔코 너무 감동해서 눈물이 나올 것 같아!`);
    await era.printAndWait(`출구로 빠져나가는 ${falcon.name}은 마음속의 감상을 털어놓았다.`);
    await falcon.say_and_wait(
      `더트 레이스가 생각보다 훨씬 더 멋진 것 같아. 관객들의 열정, 그리고 ${falcon.uma_sex_title}들이 쏟아부은 사랑은 잔디를 선택한 ${falcon.uma_sex_title}들과 똑같아!`,
    );
    await falcon.say_and_wait(`팔코, 결정했어!`);
    await era.printAndWait(
      `열정으로 불타오르는 ${falcon.teen_sex_title}는 ${me.name}을(를) 진지하게 바라보았다.`,
    );
    await falcon.say_and_wait(
      `팔코는 더트 레이스를 기점으로, 이 코스를 따라 쉬지 않고 단숨에 톱 ${falcon.uma_sex_title} 아이돌이라는 결승점까지 달려갈 거야!`,
    );
    await era.printAndWait(
      `떠들썩한 소리에 주변 관광객들이 일제히 쳐다보았지만, ${falcon.name}의 더트 아이돌 로드는 이제 막 시작되었을 뿐이었다.`,
    );
    era.drawLine();
    await falcon.say_and_wait(`곧 통금 시간이야! 그럼 내일 봐⭐`);
    await era.printAndWait(
      `${falcon.name}을 태운 전차가 떠나는 것을 배웅한 뒤, 우연히 익숙한 뒷모습을 발견했다.`,
    );
    await me.say_and_wait(
      `에이신 플래시, 에이신 플래시 양 맞지? 오늘 밤은 정말 날씨가 좋네.`,
    );
    await era.printAndWait(
      `학생이 먼저 인사를 건네게 하는 것이 ${me.name}은(는) 조금 불편했기에, 상대를 파악할 겸 ${me.name}이(가) 먼저 말을 걸었다.`,
    );
    await flash.say_and_wait(`그렇네요. 안녕하세요, ${me.name}.`);
    await me.say_and_wait(
      `${falcon.name}이 돌아오길 기다리고 있는 거야? 안심해, ${falcon.name}은 이미 무사히 기숙사로 돌아갔어.`,
    );
    await me.say_and_wait(
      `오는 길에 팔코에게 계획표대로 엄격하게 움직이는 룸메이트가 있다고 들었거든. 기대하고 있었는데, 실제로 보니 팔코가 말한 것보다 훨씬 더 믿음직스러워 보여.`,
    );
    await era.printAndWait(
      `오는 길에 ${falcon.name}이) 시간 약속에 철저한 룸메이트에 대해 언급했기에, 상대와 좋은 관계를 맺어두는 것이 중요하다고 판단했다.`,
    );
    await flash.say_and_wait(
      `후후, 과찬이세요. 그저 예정된 사항을 순조롭게 집행하기 위해 해야 할 일을 할 뿐이라 대단할 건 없어요.`,
    );
    await flash.say_and_wait(
      `하지만 팔콘 씨 이야기가 나와서 말인데, 마침 저도 요즘 ${falcon.sex}가 당신에 대해 이야기하는 것을 한두 번 들은 게 아니랍니다.`,
    );
    await era.printAndWait(
      `에이신 플래시는 가볍게 웃더니, 곧바로 화제를 ${me.name}에게 돌렸다.`,
    );
    await me.say_and_wait(`팔코가 나를 그렇게 중요하게 생각해주다니 영광인걸.`);
    await me.say_and_wait(`그렇다면 나도 앞으로 함께할 3년이라는 시간이 기대되기 시작했어.`);
    await flash.say_and_wait(`3년이라는 시간이라……`);
    await era.printAndWait(`${me.name}이(가) 그 단어를 꺼내자, 에이신 플래시는 잠시 침묵했다.`);
    await flash.say_and_wait(
      `${me.name}, 지금 이 시점에 이런 질문을 드리는 것이 조금 결례이고 갑작스러울 수도 있겠지만, 그래도 한마디 여쭙고 싶어요.`,
    );
    await flash.say_and_wait(
      `담당 트레이너로서, 이미 그에 상응하는 각오를 다지셨나요? 팔콘 씨와 일심동체가 되어 책임을 짊어질 각오 말이에요.`,
    );
    await era.printAndWait(`왔다, 바로 이 대사야!`);
    await era.printAndWait(`예상했던 대로 플래시는 분명 이것을 소중히 여기고 있었다.`);
    await era.printAndWait(
      `${falcon.sex}의 시련을 통과하려면, 이쪽도 그에 못지않은 진심을 보여줘야 했다.`,
    );
    era.printButton(
      `「원예에 몰두하는 정원사처럼 심어둔 씨앗을 정성껏 보살피고, ${falcon.sex}가 무사히 꽃피울 수 있도록 축복과 희망을 담아 기도할게.」`,
      1,
    );
    await era.input();
    await flash.say_and_wait(`정말 감성적인 답변이네요. 그렇다면 저도 안심이에요.`);
    await era.printAndWait(`에이신 플래시는 ${me.name}에게 살짝 허리를 굽혀 감사의 뜻을 표했다.`);
    await flash.say_and_wait(
      `팔콘 씨를 앞으로 잘 부탁드려요. ${falcon.sex}의 친구로서, 당신에게 필요한 것이 있다면 저도 전력을 다해 도와드릴게요.`,
    );
    add_event(
      event_hooks.week_start,
      new EventObject(46, cb_enum.edu).set_arg('next_beginning'),
    );
  };

  handlers[34] = async (falcon, me, callname) => {
    await print_event_name(`눈부신 큰 무대를 향해 멈추지 않고 전진!`, falcon);
    await falcon.say_and_wait(`……후우⭐ 모두 고마워!`);
    await era.printAndWait(
      `즉석 메들리 곡이 끝난 후, 여기저기서 터져 나온 박수 소리는 ${falcon.name}에 대한 인정으로 모였다.`,
    );
    await era.printAndWait(
      `데뷔전이 끝난 후, 경기장과 무대 위에서 반짝반짝 빛나는 팔코는 엄청난 주목을 받았다.`,
    );
    await era.printAndWait(
      `우마스타그램에서는 「${falcon.get_uma_sex_title()} 아이돌?! ${falcon.name}⭐」이라는 주제로 많은 토론이 오갔다.`,
    );
    await era.printAndWait(`그와 함께 강변 공연 영상도 우마스타그램에서 수많은 팬을 확보했다.`);
    await me.say_and_wait(`이대로 계속 나아가자!`, true);
    await era.printAndWait(
      `소문을 듣고 찾아온 관객들에게 겹겹이 둘러싸여 강변 풀밭에서 열심히 공연한 ${falcon.name}은 밤늦게까지 노래를 불렀다.`,
    );
    await me.say_and_wait(`수고했어!`);
    await era.printAndWait(
      `마지막 팬이 만족스럽게 떠난 후, ${me.name}은(는) ${falcon.name}에게 다가갔다.`,
    );
    await era.printAndWait(
      `이런 상황을 예상했기에, 미리 기숙사 사감에게 외박 허가를 신청해 두었다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 준비한 수건을 ${falcon.sex}에게 건네자, 땀에 젖은 촉감과 섞인 기묘한 향기가 신경을 자극했다.`,
    );
    await falcon.say_and_wait(`정말 고마워⭐`);
    await era.printAndWait(
      `${me.name}은(는) ${falcon.name}이 설치한 무대를 다시 걷는 것을 도우면서, ${falcon.name}의 표정을 살폈다.`,
    );
    await falcon.say_and_wait(`～～～♪`);
    await era.printAndWait(`기분이 좋아 보이는 ${falcon.name}은 아직 공연의 여운에 푹 빠져 있었다.`);
    await me.say_and_wait(`정말 고생 많았어! 나머지는 내가 정리할게.`);
    await era.printAndWait(
      `마무리 작업을 전부 도맡으려던 ${me.name}은(는) 꼬리에 여러 번 얻어맞았다.`,
    );
    await falcon.say_and_wait(
      `이렇게 많은 팬이 팔코를 응원해주는 걸 보니까 온몸에 힘이 넘치는 것 같아. 다음 날 아침까지도 계속 노래할 수 있을 것 같아!`,
    );
    await falcon.say_and_wait(`짐을 정리하는 지금도 심장이 두근두근 뛰고 있어.`);
    await falcon.say_and_wait(`……게다가.`);
    await era.printAndWait(
      `공연의 여운에서 헤어 나오지 못하는 듯한 ${falcon.name}. 소매를 살짝 붙잡은 ${falcon.name}은 ${me.name}의 대답을 기다렸다.`,
    );
    await me.say_and_wait(
      `팔코의 공연은 정말 멋졌어. 계속 지켜봐 온 팬으로서 정말 감동했어!`,
    );
    await falcon.say_and_wait(`……정말이야?`);
    await era.printAndWait(`${falcon.name}은 ${me.name}의 손을 꽉 잡았다.`);
    await falcon.say_and_wait(`만세!`);
    await era.printAndWait(`갑자기 들려온 꼬르륵 소리만 아니었다면 모든 것이 완벽했을 것이다.`);
    await falcon.say_and_wait(`……아하하, 팬분들이 안 계셔서 다행이네.`);
    await era.printAndWait(`약간 민망해진 ${falcon.name}은 쑥스러운 듯 고개를 숙였다.`);
    await me.say_and_wait(`그러고 보니 근처에 아주 인기 있는 라면집이 있는데, 한번 가볼래?`);
    await era.printAndWait(`${me.name}은(는) 시간을 확인했다. 지금 빨리 걸어가면 늦지 않을 것이다.`);
    await falcon.say_and_wait(`——좋아⭐ 그럼 지금 바로 달려가자!`);
    await era.printAndWait(
      `${falcon.name}은 ${me.name}의 손을 꽉 잡았고, ${me.name}은(는) 문득 불길한 예감이 들었다.`,
    );
    await falcon.say_and_wait(`——3, 2, 1! 출발!`);
    era.drawLine({ content: '라면집 안' });
    await falcon.say_and_wait(
      `와—아아! 생각했던 것보다 훨씬 맛있어! 팔코, 이제 에너지가 꽉 찼어⭐`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${falcon.name}이 우마스타그램에 올린, ${me.name}의 손을 끌어당기는 모습과 정성스럽게 놓인 라면 두 그릇의 합성 사진을 보았다.`,
    );
    await me.say_and_wait(`정말 대단하네.`);
    await era.printAndWait(
      `구도 배치부터 타이밍 포착까지, 무엇 하나 나무랄 데가 없는 수준이었다.`,
    );
    await me.say_and_wait(`팔코, 혹시 사진작가로서의 재능이 있는 거 아냐?`);
    await era.printAndWait(
      `스마트폰 화면 위에서 손가락을 빠르게 움직이며 이따금 미소 짓는 ${falcon.name}을 보며, 문득 지금 방해해서는 안 되겠다는 생각이 들었다.`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 아이돌이란 대체 무엇일까? 아마 아직은 결론이 나지 않았을 것이다.`,
    );
  };

  handlers[47 + 12] = async (falcon, me, callname) => {
    await print_event_name(`이미 깨달아버린 연심`, falcon);
    await era.printAndWait(`기숙사\n`);
    await falcon.say_and_wait(
      `${callname}, 팔코를 기숙사까지 데려다줘서 고마워!`,
    );
    await era.printAndWait(
      `${me.name}이(가) 모퉁이 너머로 서서히 사라지는 것을 배웅하며, 미소를 띤 ${falcon.name}도 몸을 돌려 떠났다.`,
    );
    await era.printAndWait(
      `레이스에 출주하면서도 계속 응원해준 팬들의 염원을 보답하기 위해, 이 두 가지 사이에서 균형을 잡고자 ${me.name}은(는) 레이스 주간에는 게릴라 공연 시간을 줄이자고 ${falcon.name}을 열심히 설득했다.`,
    );
    await era.printAndWait(
      `소중한 공연 시간을 아끼기 위해, ${falcon.name}은 평소보다 더욱 열심히 빛나고 있었다.`,
    );
    await falcon.say_and_wait(`……${callname}.`);
    falcon.print(`기상—수업—훈련—공연—기숙사 복귀. 물 흐르듯 평온한 일상.`);
    falcon.print(
      `${callname}이 길모퉁이 너머로 사라지는 걸 배웅하는 건 이제 내 일상의 일부가 됐어.`,
    );
    falcon.print(
      `더 많은 사람을 미소 짓게 하려고, 기진맥진할 때까지 아이돌 활동을 계속해. 덕분에 매일이 정말 보람차.`,
    );
    falcon.print(
      `아, 가끔 공연이 끝났을 때 다리에 힘이 풀려서 도저히 움직이기 싫을 때도 많아졌지만.`,
    );
    falcon.print(`아이돌 수행이 아직 부족한 탓일까, 스스로에게 그렇게 물어보곤 해.`);
    falcon.print(
      `그러면 또 다른 내가 고개를 저어. 「팬분들에게 팔코의 소극적인 면을 보여줘선 안 돼」라며 부정적인 생각은 던져버려.`,
    );
    falcon.print(`지난번에는 메이드복을 입어봤으니까, 이번에는 승부복을 입고 공연해볼까?`);
    falcon.print(`팔코의 팬분들은 이런저런 이유로 경기장에 오지 못하는 분들도 많으니까.`);
    falcon.print(
      `레이스가 평일에 시작되는 바람에 직접 보지 못한 걸까…… 그렇게 생각하면서도, 역시 잔디 쪽 레이스가 더 인기가 많겠지.`,
    );
    falcon.print(
      `사츠키상의 무대는 더 크고, 참가하는 ${falcon.uma_sex_title}들도 더 강해. 팔코가 나가는 더트 레이스보다 훨씬 큰 관객석에 앉아 레이스를 지켜보는 팬들도 더 많고.`,
    );
    falcon.print(`솔직히 말하면, 역시 조금 분해——`);
    falcon.print(`결정했어! 팔코가 가장 눈부신 모습으로 모두에게 행복을 줄 거야!`);
    falcon.print(`안심감을 주는 포즈! 시선을 뺏는 스텝! 그리고 다이아몬드처럼 반짝이는 승부복!`);
    falcon.print(`아— 그러고 보니 헤어스타일도 조정해야겠네.`);
    era.printButton(`어라?`, 1);
    await era.input();
    await era.printAndWait(
      `머리칼을 고정하고 있던 머리끈이 마치 마침내 해방된 것처럼 툭 끊어졌다.`,
    );
    await falcon.say_and_wait(`결국 한계였구나.`);
    await era.printAndWait(
      `마치 혼잣말을 하듯 ${falcon.name}은 무의식적으로 앞머리 쪽 리본을 만졌다.`,
    );
    await era.printAndWait(
      `경비를 아끼려고 중고 시장에서 샀던 고무줄이 격렬한 움직임을 견디지 못한 모양이었다.`,
    );
    falcon.print(`하나, 둘…… 셋?`);
    falcon.print(`불안감이 엄습해서 리본을 떼어내고 몇 번이고 헛수고처럼 숫자를 센다.`);
    await falcon.say_and_wait(`빨리 왔던 길을 되짚어서 찾으러 가야 해!`, true);
    falcon.print(`그건 팔코에게 가장 소중한, 다정한 엄마가 직접 만들어주신 첫 번째 승부복이야.`);
    await falcon.say_and_wait(`하지만 시간이...`, true);
    falcon.print(`시침과 분침 사이의 각도가 파르페 위에 올라간 딸기 하나도 못 넣을 정도로 좁아 보여.`);
    falcon.print(`통금 시간을 어기면 나중에 타즈나 씨한테 혼나겠지.`);
    falcon.print(`미리 루비짱에게 말해두면 조금은 봐주지 않을까?`);
    await falcon.say_and_wait(`팔코! 힘내자!`);
    await era.printAndWait(`정신을 차렸을 때, 팔코는 이미 거리를 질주하고 있었다.`);
    falcon.print(`아아, 항상 이래.`);
    falcon.print(
      `머리 위에서 고리를 반짝이는 천사 팔코는 한숨을 쉬고, 옆에 있는 악마 팔코는 신이 나서 응원하고 있어.`,
    );
    await falcon.say_and_wait(
      `지금 이 곤경에 전력을 다해 맞서고, 뒷감당은 내일의 팔코에게 맡기겠어! 이게 바로 팔코의 아이돌의 길이야!`,
    );
    await era.printAndWait(
      `나아갈 방향을 정한 후, ${falcon.name}은 구석구석 놓치지 않으며 전속력으로 전진했다.`,
    );
    era.drawLine();
    falcon.print(
      `트레센 정문부터 상점가 골목, 강변 풀밭까지 다 뒤졌는데 없네...`,
    );
    falcon.print(`마치 리본에 날개가 돋아서 파닥파닥 날아가 버린 것 같아.`);
    falcon.print(
      `아아, 친애하는 리본 양, 그녀가 에덴에서 계속 행복하게 지냈으면 좋겠어.`,
    );
    falcon.print(`엉망인 생각을 떨쳐내고, 팔코는 다시 한 가지 사실을 깨달았다.`);
    await falcon.say_and_wait(`통금 시간이 벌써 30분이나 지났잖아! 어떡하지!`);
    falcon.print(`아마 상황을 파악한 트레센 측에서 지금쯤 팔코를 다급하게 찾고 있겠지.`);
    falcon.print(`분해. 이대로 빈손으로 돌아가는 건 정말 너무 분해.`);
    await falcon.say_and_wait(
      `아니야, 긍정적으로 생각하면 다음 날 아침까지 팔코가 리본을 찾을 충분한 시간이 생긴 거잖아!`,
      true,
    );
    falcon.print(`초조했던 마음이 겨우 진정됐어. 떨어뜨렸을 만한 장소를 다시 떠올려보자.`);
    falcon.print(`공연 시작 전까지 리본은 이마에 잘 붙어 있었어.`);
    falcon.print(
      `앵콜 때 가장 왼쪽이랑 오른쪽 관객들까지 챙기려고, 예전에 본 인기 아이돌의 멋진 회전 동작을 따라 하며 시선을 돌렸었지.`,
    );
    falcon.print(`아마 그때 나도 모르게 떨어졌을지도 몰라.`);
    falcon.print(`만약 어떤 관객분이 주워가신 거라면 팔코가 찾을 희망은 거의 없겠지만.`);
    falcon.print(`으— 평소에 수학 시간에 졸지 말걸.`);
    await say_by_passer_by(`???`, `저기 있는 거 팔코 언니 아냐?`);
    await falcon.say_and_wait(`에엑?`);
    await era.printAndWait(
      `${falcon.name}은 갑작스러운 목소리에 심장이 덜컥 내려앉았고, 꼬리의 털이 빳빳하게 곤두섰다.`,
    );
    await era.printAndWait(
      `깊은 밤 골목에서 들려온 어린아이의 목소리, 그리고 강변을 향해 천천히 다가오는 검은 그림자.`,
    );
    await falcon.say_and_wait(
      `설마 이게 트레이너가 말했던, 말 안 듣는 ${falcon.get_uma_sex_title()}를 잡아먹는 ${falcon.get_uma_sex_title()} 킬러인가?`,
      true,
    );
    await falcon.say_and_wait(`팔—팔코, 팔코는 맛없어어어어!`);
    await say_by_passer_by(`꼬마 ${falcon.get_uma_sex_title()}`, `에?`);
    await era.printAndWait(`쿵!`);
    await era.printAndWait(`발차기에 맞은 그림자 옆의 가로수가 요란하게 쓰러졌다.`);
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `역시 팔코 언니 맞네!`,
    );
    await era.printAndWait(
      `전혀 겁먹지 않은 꼬마 ${falcon.get_uma_sex_title()}가 흥분해서 다가왔다.`,
    );
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `언니, 이거 언니 거 맞지?`,
    );
    era.drawLine();
    falcon.print(
      `리본을 조심스럽게 주머니에 넣고, 리본을 돌려주려고 몰래 빠져나온 ${falcon.get_uma_sex_title()}를 바라봤어.`,
    );
    falcon.print(`물건을 찾았다는 안도감은 순식간에 자책감으로 뒤덮였어.`);
    falcon.print(`만약 리본 때문에 통금을 어기지 않았다면, 팔코는 계속 자책하고 있었겠지.`);
    falcon.print(
      `칭찬을 기다리는 듯한 ${falcon.get_uma_sex_title()}를 보며, 적어도 팔코는 책임을 지고 그녀를 무사히 데려다주기로 마음먹었어.`,
    );
    await era.printAndWait(
      `${falcon.name}은 자세를 낮춰 자신의 시선을 ${falcon.get_uma_sex_title()}와 맞췄다.`,
    );
    await falcon.say_and_wait(
      `고마워 ${me.name}. 팔코, 모두를 위해 최고의 ${falcon.get_uma_sex_title()} 아이돌이 되도록 노력할게.`,
    );
    falcon.print(
      `${callname}아 쓰다듬어주던 방식을 떠올리며, 최대한 다정하게 웃어줬어.`,
    );
    await falcon.say_and_wait(`미안해, 팔코는 아직 너무 미숙해.`, true);
    falcon.print(
      `${callname}에게 사과하자, 그 사람은 쓴웃음을 지으며 고개를 저었어.`,
    );
    await falcon.say_and_wait(`팔코 언니가 집에 데려다줄게.`);
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `에? 정말? 팔코 언니가 나를 데려다준다고?`,
    );
    falcon.print(
      `눈앞의 꼬마는 누군가를 도와줬다는 사실에 기뻐하며 폴짝거리고 있어. 마치 팔코가 하는 일처럼.`,
    );
    falcon.print(
      `문득 ${callname}에게 얼마나 많은 폐를 끼쳤는지 깨닫는 순간, 등 뒤로 뜨거운 느낌이 스쳐 지나갔어.`,
    );
    await falcon.say_and_wait(`가장 빛나는 무대를 향해 함께 가자!`);
    falcon.print(
      `끊어진 리본을 조심스럽게 챙기고, 꼬마의 작은 손을 살며시 잡았어.`,
    );
    era.drawLine();
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `집까지 데려다줘서 고마워, 팔코 언니!`,
    );
    await era.printAndWait(
      `아파트 입구에서 꼬마 ${falcon.get_uma_sex_title()}가 ${falcon.name}에게 인사를 건넸다.`,
    );
    await falcon.say_and_wait(`아니야, 나야말로.`);
    falcon.print(`어색하게 웃으며 답례를 했어.`);
    falcon.print(
      `꼬마 ${falcon.uma_sex_title}의 부모님은 출장이 잦으셔서, 매일 ${falcon.sex}는 혼자서 등하교를 한대.`,
    );
    falcon.print(
      `매일 데리러 가줄까 물어봤지만, 남에게 폐를 끼칠 수 없다며 거절했어.`,
    );
    falcon.print(`그 고집스러운 면이 어릴 때 팔코랑 조금 닮았네.`);
    await falcon.say_and_wait(
      `오는 길에 약속했지? 이제 다시는 이런 위험한 짓 하면 안 돼! 팔코랑 한 약속이야?`,
    );
    await say_by_passer_by(`꼬마 ${falcon.get_uma_sex_title()}`, `알겠어!`);
    await era.printAndWait(
      `현관으로 들어가려던 ${falcon.get_uma_sex_title()}가 무언가 생각난 듯 뒤를 돌아 ${falcon.name}을 바라보았다.`,
    );
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `근데 팔코 언니, 왜 얼굴이 그렇게 빨개요?`,
    );
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `${callname} 생각한 거예요?`,
    );
    falcon.print(`아, 아니야. 그런 관계 아니거든.`);
    falcon.print(`그렇게 반박하려 했지만, 왠지 말이 나오지 않았어.`);
    falcon.print(`마치 계란을 통째로 삼킨 것처럼 목구멍에 말이 걸려버렸지.`);
    await say_by_passer_by(
      `꼬마 ${falcon.get_uma_sex_title()}`,
      `내일도 팔코 언니 공연 보러 갈게요!`,
    );
    falcon.print(`현관문이 천천히 닫혔어.`);
    falcon.print(`어린 ${falcon.uma_sex_title}조차 알아본 거야?`);
    falcon.print(
      `우마무스메 아이돌이라는 이상을 이루기 전까지는, 역시 사람들 앞에서는 조금 거리를 둬야겠네.`,
    );
    falcon.print(`하지만\n`);
    await falcon.say_and_wait(
      `팔코, ${callname}에게 그렇게 큰 폐를 끼쳤던 걸까?`,
    );
    await era.printAndWait(
      `다음 날, 꼬마 ${falcon.get_uma_sex_title()}의 가족이 트레센에 ${falcon.name}이 아이를 데려다준 것에 대한 감사를 표했고, 그 일로 ${me.name}은(는) 타즈나 씨에게 호되게 야단을 맞았다.`,
    );
  };

  handlers[47 + 21] = async (falcon, me, callname) => {
    await print_event_name(`트레이닝실의 꽃`, falcon);
    era.printButton(`드디어 끝났다.`, 1);
    await era.input();
    await era.printAndWait(
      `마지막 서류를 정리하며 ${me.name}은(는) 안도의 한숨을 내쉬었다.`,
    );
    await me.say_and_wait(`트레이너 노릇도 정말 쉽지 않네.`, true);
    await era.printAndWait(
      `어느새 트레이닝실에 황금빛 석양이 조용히 찾아들었고, 창밖에서 들려오는 활기찬 훈련 소리는 ${me.name}에게 트레이너 학원 시절을 떠올리게 했다.`,
    );
    await era.printAndWait(
      `더트 위를 질주하는 ${falcon.get_uma_sex_title()} 아이돌——${falcon.name}. 아직 실감은 나지 않지만, 이미 더트의 떠오르는 별이 되어 있었다.`,
    );
    await era.printAndWait(
      `하지만 날로 늘어가는 ${falcon.name}의 팬들과 빽빽해진 스케줄표를 보고 있자니.`,
    );
    await era.printAndWait(`왠지 마음 한구석이 허전해졌다.`);
    await me.say_and_wait(`……나는 트레이너로서의 직무를 잘 수행하고 있는 걸까?`, true);
    await era.printAndWait(
      `하루의 주의력은 한정되어 있기에, 자신이 인지할 수 있는 범위 내에서만 신경을 쓸 수밖에 없다.`,
    );
    await era.printAndWait(
      `모든 면에서 완벽할 수는 없으며, 사고를 방지하려고 과도하게 신경을 쓰다 보면 오히려 더 큰 불확실성을 초래할 수도 있다.`,
    );
    await era.printAndWait(
      `텅 빈 트레이닝실에 머물다 보니, 어느새 부정적인 생각들이 기억의 한구석에서 흘러나왔다.`,
    );
    await falcon.say_and_wait(`${callname}, 팔코 돌아왔어⭐`);
    await era.printAndWait(
      `${falcon.name}의 동그란 머리가 열린 문틈 사이로 쏙 튀어나왔다.`,
    );
    await me.say_and_wait(`수고했어. 오늘 훈련을 시작하기 전에 잠시 쉬자.`);
    await era.printAndWait(
      `기운을 차리기 위해 ${me.name}은(는) 자리에서 일어나 ${falcon.name}에게 홍차를 한 잔 타 주었다.`,
    );
    await era.printAndWait(`그리고 눈앞에 바르게 앉은 ${falcon.name}을 바라보았다.`);
    await era.printAndWait(
      `평소의 ${falcon.name}과 달리, 손에는 누군가에게 받은 듯한 씨앗 꾸러미가 들려 있었다.`,
    );
    await era.printAndWait(
      `${falcon.name}은 ${me.name}의 시선을 느꼈는지 귀를 쫑긋거리며 손에 든 작은 봉지를 흔들어 보였다.`,
    );
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}의 노력 덕분에 ${falcon.get_uma_sex_title()} 아이돌이라는 개념이 드디어 자리를 잡았다.`,
    );
    await era.printAndWait(
      `이제 더트 팬들에게 ${falcon.get_uma_sex_title()} 아이돌이라고 하면 누구나 ${falcon.name}을 떠올린다.`,
    );
    await era.printAndWait(
      `덕분에 ${falcon.name}에게도 꽤 많은 팬층이 형성되었다.`,
    );
    await falcon.say_and_wait(`응, 상점가 점원 언니가 선물로 주셨어.`);
    await era.printAndWait(
      `많은 팬이 ${falcon.name}에게 자신들의 이상을 투영하고 있으니, 도움을 주는 것도 당연한 일일 것이다.`,
    );
    await era.printAndWait(
      `편지라면 트레이너인 ${me.name}이(가) 먼저 확인한 뒤 ${falcon.name}에게 보여주었고, 포장된 선물도 마찬가지였다.`,
    );
    await era.printAndWait(
      `${falcon.name}은 이 부분에서 의외로 순종적인 모습을 보였고, 팬들 사이의 자정 작용 덕분에 ${falcon.sex}의 머릿속은 아직 비관적인 말들로 오염되지 않았다.`,
    );
    era.printButton(`정성껏 키워보자.`, 1);
    await era.input();
    await era.printAndWait(
      `일단 씨앗을 창가 근처 그늘진 곳에 심고, 싹이 트면 햇볕이 잘 드는 곳으로 옮기기로 했다.`,
    );
    await era.printAndWait(
      `${falcon.name}이 화분을 내려놓고 ${me.name}의 옆에 쪼르르 앉는 것을 지켜보았다.`,
    );
    await falcon.say_and_wait(`아, ${callname}.`);
    await me.say_and_wait(`응? 팔코, 왜 그래?`);
    await falcon.say_and_wait(`……아니, 아무것도 아니야⭐`);
    await era.printAndWait(
      `${falcon.name}의 귀가 파닥파닥 움직였고, 꼬리도 소파를 탁탁 때리고 있었다.`,
    );
    await falcon.say_and_wait(`그러고 보니, 다음 훈련 방침은——`);
    await era.printAndWait(`시간은 잡담과 훈련 속에서 흘러갔다.`);
  };

  handlers[47 + 32] = async (
    falcon,
    me,
    _,
    flags,
    edu_marks,
    relation,
    love,
    ebj,
  ) => {
    const callname = sys_get_callname(46, 0);
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:46:위치')
    ) {
      add_event(event_hooks.week_end, ebj);
      return;
    }
    await print_event_name(`여름 합숙 종료·더 큰 무대를 향해`, falcon);
    await falcon.say_and_wait(`하아! 하아! 하아!`);
    await me.say_and_wait(`팔코, 힘내!`);
    await falcon.say_and_wait(`하아아아아아앗!`);
    await era.printAndWait(
      `지칠 대로 지친 몸을 이끌고 결승점을 향해 돌진하던 팔코는 마침내 서서히 멈춰 섰다.`,
    );
    await me.say_and_wait(`수고했어.`);
    await era.printAndWait(
      `준비한 수건을 팔코에게 건네며 서류에 마지막 데이터를 기록했다.`,
    );
    await falcon.say_and_wait(
      `여름 합숙에서 배운 기술들을 잘 활용해서, 경기장에서 더 많은 팬에게 팔코의 빛나는 모습을 보여줄 거야⭐`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}일지라도 훈련과 마을 공연을 병행하는 건 이미 한계일 텐데, ${falcon.name}은 잠시 쉬더니 곧바로 공연 준비를 시작했다.`,
    );
    era.printButton(`너무 무리하는 거 아냐?`, 1);
    await era.input();
    await falcon.say_and_wait(
      `다른 ${falcon.uma_sex_title}들과 비교하면, 팔코의 강점은 아마 이 활기찬 모습일지도 몰라.`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 아이돌인 ${falcon.name}은 마을의 고별 콘서트에 초대를 받았다.`,
    );
    await era.printAndWait(
      `이 마을에서 새로 사귄 팬들과 친구들을 위해서라도, 지친 몸을 이끌고 전력을 다해야 했다.`,
    );
    await me.say_and_wait(`오늘 밤 공연은 팬들에게 분명 평생 한 번뿐인 최고의 무대가 될 거야!`);
    await era.printAndWait(`적어도 트레이너로서의 소임은 다하자고 다짐했다.`);
    await falcon.say_and_wait(
      `${callname}에게도 그런 의미인 거야...? 팔코, 이제 다시 힘이 불끈 솟아올랐어!`,
    );
    era.drawLine({ content: '공연이 끝난 후' });
    await falcon.say_and_wait(`～～～～♪ 모두 고마워!`);
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(
      `근처 마을에서 열린 콘서트는 예상외로 엄청난 인기였다. 팔코의 공연 소식을 듣고 3시간이나 차를 몰고 달려온 팬이 있을 정도였다.`,
    );
    await era.printAndWait(
      `많은 사람에게 공연 그 자체보다 더트 아이돌인 ${falcon.name}을 직접 보는 것이 진짜 목적이었을 것이다.`,
    );
    await falcon.say_and_wait(
      `응응! 모두의 외침이 팔코의 귀에 다 전달됐어! 팔코 정말 기뻐!`,
    );
    await say_by_passer_by(`팬들`, `한 곡 더! 팔코! 한 곡 더!`);
    await falcon.say_and_wait(`그럼 한 곡 더……`);
    await era.printAndWait(`${falcon.name}은 ${me.name}의 시선을 눈치챘다.`);
    await falcon.say_and_wait(
      `아하하…… 벌써 시간이 많이 늦었네. 멀리서 팔코의 공연을 보러 와주신 팬분들도 계시고…… ${falcon.get_uma_sex_title()} 아이돌로서 팔코는 팬 한 분 한 분을 다 생각해야 하니까, 정말 미안해!`,
    );
    await falcon.say_and_wait(
      `대신 여러분께 좋은 소식이 있어! 이번 공연은 팔코의 트레이너가 우마스타그램이랑 영상 사이트에 이미 올려뒀어!`,
    );
    await falcon.say_and_wait(`팔코의 빛나는 모습을 언제든 다시 볼 수 있다구❤`);
    await falcon.say_and_wait(`자! 그럼 우리의 구호를 외쳐볼까!`);
    await falcon.say_and_wait(`팔코가 도망친다면?`);
    await say_by_passer_by(`팬들`, `쫓아갈 수밖에 없지!`);
    await falcon.say_and_wait(`계속 쫓아올 거야?`);
    await say_by_passer_by(`팬들`, `지평선 너머 큰 무대까지!`);
    await falcon.say_and_wait(`모두 고마워⭐`);
    await era.printAndWait(
      `현장의 팬들이 서서히 흩어지고, 무대 위에는 ${me.name}과(와) ${falcon.name}만 남았다.`,
    );
    era.printButton(`정말 멋졌어.`, 1);
    await era.input();
    await era.printAndWait(`${falcon.name}은 만족스러운 표정을 지었다.`);
    await era.printAndWait(
      `무대 위에서 껑충거리던 다리는 ${me.name}이(가) ${falcon.sex}를 살며시 안아 올린 순간, 마치 낡은 인형처럼 바닥으로 힘없이 늘어졌다.`,
    );
    await falcon.say_and_wait(`……매일 오늘 같았으면 좋겠다.`);
    await era.printAndWait(`팔코의 ${falcon.sex} 눈은 여전히 반짝이고 있었다.`);
    await falcon.say_and_wait(
      `이런 기세라면 팔코도 그 장벽을 뛰어넘을 수 있을 것 같아!`,
    );
    await era.printAndWait(
      `${falcon.name}의 존재 덕분에, 원래 잔디 레이스에만 관심 있던 관객들도 서서히 더트 레이스를 주목하기 시작했다.`,
    );
    await me.say_and_wait(`꼭 성공할 거야!`);
    await era.printAndWait(
      `${me.name}의 말을 듣고 ${falcon.name}은 관객석을 바라보았다.`,
    );
    await falcon.say_and_wait(`이렇게 한 걸음씩 최고의 무대를 향해 나아가는 거야.`);
  };

  handlers[47 + 39] = async (falcon, me, callname) => {
    await print_event_name('원추리', falcon);
    await era.printAndWait(`상점가에서 열린 게릴라 콘서트\n`);
    await falcon.say_and_wait(`～～～♪ 모두 수고했어!`);
    await era.printAndWait(
      `더트 레이스를 주 무대로 선두에서 계속 빛나고 있는 ${falcon.get_uma_sex_title()} 아이돌——${falcon.name}은 이제 뜨거운 화제였다.`,
    );
    await era.printAndWait(
      `${falcon.name}의 활약상을 직접 보기 위해 일부러 표를 사서 찾아오는 사람들도 많았다.`,
    );
    await era.printAndWait(
      `과장 좀 보태서 더트 레이스라고 하면 바로 ${falcon.name}을 떠올리는 수준이 되었다.`,
    );
    await say_by_passer_by(`팬들`, `팔코! 팔코!`);
    await era.printAndWait(
      `……유명세만큼이나 큰 시련이 따르는 법. 비록 ${falcon.name}의 자발적인 의사로 여러 광고 촬영을 병행하고 있다지만, 너무 바쁜 나머지 훈련까지 중단되는 상황에 ${me.name}은(는) 웃음이 나오지 않았다.`,
    );
    await me.say_and_wait(`……지금 계약 기간이 끝나면 팔코와 진지하게 이야기를 좀 해봐야겠어.`);
    await era.printAndWait(
      `${falcon.name}의 의사를 존중한다고는 하지만, 이게 정말 자유로운 상태라고 할 수 있을까?`,
    );
    await say_by_passer_by(
      `열혈 팬 A`,
      `매일 퇴근하면 정말 지치는데! 팔코의 공연만 보면 피로가 싹 가시는 기분이야!`,
    );
    await say_by_passer_by(
      `열혈 팬 B`,
      `나는 팔코가 홍보하는 굿즈는 전부 다 모았어! 행동으로 팔코를 응원하는 거라면 내가 단연 최고라고 자부해!`,
    );
    await say_by_passer_by(
      `열혈 팬 C`,
      `웃기지 마! 나는 팔코가 데뷔하기도 전부터 응원해온 원조 팬이라구! 비록 지금 지갑 사정은 좀 여의치 않지만…… 팔코를 향한 사랑은 너희들보다 훨씬 깊어!`,
    );
    await era.printAndWait(
      `팬들에게 「아이돌 프로듀서」라고 불리는 당신의 본래 직업은 거의 잊힌 듯했고, 점점 광적으로 변해가는 팬들을 보며 당신의 걱정은 깊어만 갔다.`,
    );
    await me.say_and_wait(
      `……어쩌면 요즘 사람들은 마음속으로 기댈 수 있는 정신적인 안식처를 간절히 원하고 있는 걸지도 몰라.`,
    );
    await era.printAndWait(`일단은 이런 이유로 스스로를 다독였다.`);
    await era.printAndWait(
      `무대 위에서 팬들과 소통하는 저 ${falcon.teen_sex_title}를 보니, 정신적으로도 이미 한계에 다다른 게 아닐까 싶었다.`,
    );
  };
};