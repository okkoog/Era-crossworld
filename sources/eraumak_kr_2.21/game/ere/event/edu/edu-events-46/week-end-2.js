const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers[95 + 40] = async (falcon, me, callname) => {
    await print_event_name(`하늘, 대지 그리고 이곳에 사는 우리`, falcon);
    await era.printAndWait(`공원\n`);
    await era.printAndWait(`팔코의 제안으로, ${me.name}들은 공원의 한 풀밭에 도착했다.`);
    await era.printAndWait(
      `어느덧 가을도 절반이 지났고, 길 위의 행인들도 하나둘 겉옷을 챙겨 입기 시작했다.`,
    );
    await me.say_and_wait(`팔코, 춥지 않아?`);
    await era.printAndWait(
      `${me.name}은(는) 팔코를 보며, 정말 궁금하다는 듯이 ${falcon.sex}에게 물었다.`,
    );
    await falcon.say_and_wait(`팔코는 전혀 춥지 않아!`);
    await era.printAndWait(
      `그러고 보니 당연한 일이었다. ${falcon.get_uma_sex_title()}는 인간보다 체온이 조금 더 높으니까.`,
    );
    await me.say_and_wait(`팔코가 조금 부러운걸.`);
    await falcon.say_and_wait(
      `${callname}, 갑자기 무슨 소리를 하는 거야?`,
    );
    await me.say_and_wait(
      `팔코처럼 밝고 귀여운 ${falcon.get_uma_sex_title()} 아이돌의 트레이너라니, 난 정말 운이 좋아.`,
    );
    await falcon.say_and_wait(
      `에에~~? 정말! ${callname}, 갑자기 그렇게 말하면 팔코, 부끄러워!`,
    );
    await me.say_and_wait(`아, 도착했다.`);
    await era.printAndWait(
      `호숫가 근처의 한 풀밭에는 나들이를 나온 여행객들과 노는 아이들이 곳곳에 보였다.`,
    );
    await me.say_and_wait(`호수를 찾은 관광객이 생각보다 많네.`);
    await era.printAndWait(
      `${me.name}은(는) 가져온 가방에서 직접 만든 도시락을 꺼내며 무심코 물었다.`,
    );
    await falcon.say_and_wait(`호수에 오는 손님들은 대부분 커플이야.`);
    await era.printAndWait(`팔코는 깔아놓은 돗자리 위에 얌전하게 앉아 ${me.name}을(를) 바라보았다.`);
    await me.say_and_wait(`아마 우마스타그램에서 유명한 커플 데이트 명소로 소문나서 그런가 봐. 여기.`);
    await falcon.say_and_wait(`역시 커플들은 쉬는 날이 아니면 놀 시간이 없으니까——`);
    await era.printAndWait(`팔코에게 하치미를 건네받았다.`);
    await falcon.say_and_wait(`……커플인가?`, true);
    await me.say_and_wait(`팔코는 어떻게 생각해?`);
    await falcon.say_and_wait(`에?`);
    await era.printAndWait(
      `${me.name}에게 속마음을 들킨 팔코가 그만 힘을 너무 주는 바람에, 뚜껑이 우아한 곡선을 그리며 멀리 떨어진 나무줄기에 단단히 박혀버렸다.`,
    );
    await falcon.say_and_wait(
      `……${callname}, 내가 갖고 올게!`,
    );
    await era.printAndWait(
      `${me.name}이(가) 미처 반응하기도 전에, 팔코는 뚜껑이 박힌 나무를 향해 달려갔다.`,
    );
    await falcon.say_and_wait(
      `커플이라…… 나랑 ${callname}이?`,
      true,
    );
    await era.printAndWait(`작은 소동이 끝난 후, 두 사람은 다시 자리에 앉았다.`);
    await era.printAndWait(
      `${me.name}은(는) 팔코가 직접 만든 도시락을 즐긴 뒤, 옆에서 건네주는 음료를 받았다.`,
    );
    await era.printAndWait(
      `차가운 음료가 목을 타고 넘어가자, 만족스러운 듯 꺼억 하고 트림이 나왔다.`,
    );
    await me.say_and_wait(`음—— 살짝 다네.`);
    await falcon.say_and_wait(`그야 도시락 위에 딸기 시럽을 뿌렸는걸.`);
    await falcon.say_and_wait(
      `그러고 보니, 플래시 씨가 시식했을 때도 비슷한 평가를 했었어.`,
    );
    await era.printAndWait(
      `에이신 플래시가 옆에서 지도했다면, 맛이 달게 된 것도 이해가 갔다.`,
    );
    await me.say_and_wait(`과연 그렇구나, 역시 케이크——`);
    await falcon.say_and_wait(`아니야! 이건 팔코가 스스로 생각해낸 거야!`);
    await era.printAndWait(`팔코의 갑자기 커진 목소리에 행인들이 일제히 쳐다보았다.`);
    await falcon.say_and_wait(`아, 미안해. 갑자기 흥분해버렸어.`);
    await falcon.say_and_wait(`이런 모습은 팔코답지 않은데⭐ 하하하.`);
    await era.printAndWait(`무언가 깨달았는지, 팔코는 고개를 숙였고 얼굴은 금방이라도 물이 뚝뚝 떨어질 듯 붉어졌다.`);
    era.printButton(`고마워, 팔코`, 1);
    await era.input();
    await era.printAndWait(`${me.name}은(는) 팔코의 작은 머리를 부드럽게 쓰다듬었다.`);
    await falcon.say_and_wait(`팔코는 이제 어린애가 아니야.`);
    await era.printAndWait(
      `말로는 그렇게 항의하면서도, 격렬하게 거부하지는 않은 채 ${me.name}의 손길에 몸을 맡겼다.`,
    );
    await me.say_and_wait(`팔코는 이런 자리가 조금 불편해?`);
    await falcon.say_and_wait(
      `다른 사람의 시선을 그렇게 신경 쓰는 건 아니지만, 그래도 아주 조금은 그래.`,
    );
    await falcon.say_and_wait(
      `……무엇보다 ${callname}의 평가가 조금 신경 쓰여서.`,
    );
    await era.printAndWait(`마지막 목소리는 점점 작아져 잘 들리지 않게 되었다.`);
    await me.say_and_wait(
      `무대 위의 팔코와 비교하면, 역시 이런 팔코도 정말 귀엽네.`,
    );
    await me.say_and_wait(`팔코가 빛나고 있는 모습도 귀여워.`);
    await falcon.say_and_wait(`팔코는 생각만큼 그렇게 빛나는 존재는 아니야.`);
    await falcon.say_and_wait(
      `${callname}을 만나기 전까지, 팔코는 매일 아이돌 활동이랑 낙제 위기인 시험 공부 때문에 정신없이 뛰어다녔거든.`,
    );
    await falcon.say_and_wait(
      `가끔, 겨우 한숨 돌리며 쉴 수 있을 때면 자기도 모르게 그런 생각을 해.`,
    );
    await falcon.say_and_wait(`어쩌면 팔코가 가는 길이 틀린 건 아닐까 하고.`);
    await era.printAndWait(`찻잔을 응시하는 팔코. ${me.name}이(가) 위로의 말을 건네려던 찰나.`);
    await falcon.say_and_wait(`하지만 요즘은 마음이 많이 편해졌어.`);
    await falcon.say_and_wait(
      `이렇게 계속 틀린 길을 따라서 쭉 달려온 게, 바로 팔코니까!`,
    );
    await falcon.say_and_wait(`생각해 보면, 아이돌이란 게 원래 그런 거잖아?`);
    era.printButton(`다른 사람에게 희망을 주고, 더 많은 사람을 이끄는 것?`, 1);
    await era.input();
    await falcon.say_and_wait(
      `아니야! 더 많은 사람이 마음속으로 갈망하는 그 길을 걸을 수 있도록, 용기를 주는 거야!`,
    );
    await falcon.say_and_wait(
      `이 길을 걷는 사람들은 분명 팔코보다 더 똑똑하고, 더 노력할 테니까, 훨씬 더 눈부시게 빛날 거야!`,
    );
    era.printButton(`단지 그 용기가 부족했을 뿐이라는 말이야?`, 1);
    await era.input();
    await falcon.say_and_wait(
      `그게 바로 팔코가 ${falcon.get_uma_sex_title()} 아이돌인 이유야!`,
    );
    await falcon.say_and_wait(
      `팔코는 그렇게 똑똑하지 않으니까, 용기를 내서 더 많은 사람을 돕는 거야!`,
    );
    await falcon.say_and_wait(
      `팔코의 춤에 감동한 ${falcon.get_uma_sex_title()}들이 팔코가 걸어온 길을 따라 걷는 걸 볼 때면.`,
    );
    await falcon.say_and_wait(`팔코는 정말 진심으로 기뻐.`);
    await falcon.say_and_wait(`마치, TV 속 아이돌에게 격려받았던 팔코 자신처럼 말이야.`);
    await era.printAndWait(
      `이야기에 푹 빠져 있던 팔코는, 그제야 들고 있던 찻물이 식어버린 것을 깨달았다.`,
    );
    era.printButton(`팔코는 정말 위대하네.`, 1);
    await era.input();
    await falcon.say_and_wait(
      `전혀 그렇지 않아! 팔코도 그냥 평범한 ${falcon.get_uma_sex_title()} 아이돌일 뿐인걸.`,
    );
    await falcon.say_and_wait(
      `그저 이렇게 하면 즐거울 것 같아서 행동하는 평범하고 작은 ${falcon.get_uma_sex_title()}일 뿐이야.`,
    );
    await falcon.say_and_wait(`게다가`);
    await falcon.say_and_wait(
      `정작 고백조차 못 하는 아주 한심한 ${falcon.get_uma_sex_title()} 아이돌이기도 하고.`,
      true,
    );
    era.printButton(`게다가?`, 1);
    await era.input();
    await falcon.say_and_wait(`에헤헤⭐`);
    await era.printAndWait(`이후의 대화는 호수가 첫 번째 금빛 광채로 물들 무렵 끝이 났다.`);
  };

  handlers[95 + 45] = async (falcon, me, callname) => {
    await print_event_name(`모이사나이트`, falcon);
    await era.printAndWait(
      `${callname}을 배웅한 후, 스마트 팔콘은 트레이닝실 소파에 홀로 앉아 있었다.`,
    );
    await era.printAndWait(`천진난만한 가면을 벗어 던지고, 고요한 순간을 즐겼다.`);
    await falcon.say_and_wait(`……`);
    await era.printAndWait(`트레센의 밤은 생각보다 훨씬 조용했다.`);
    await falcon.say_and_wait(`그러고 보니`);
    falcon.print(
      `도쿄 대상전이 끝나면, ${callname}과의 계약도 끝이 나네.`,
    );
    falcon.print(
      `상황에 따라 이사장님께 계약 연장을 신청할 수도 있겠지만, 어쩐지 의욕이 나질 않아.`,
    );
    falcon.print(`무언가 부족해. 팔코가 아직 깨닫지 못한 무언가가 있어.`);
    falcon.print(`가슴 속에서 전해지는 통증이 팔코에게 그 정답을 찾으라고 재촉하고 있어.`);
    await falcon.say_and_wait(`오늘 달은, 생각보다 더 아름답네.`);
    falcon.print(`트레이닝실 창문 너머로 비치는, 살짝 건드리기만 해도 찢어질 듯 몽환적인 달빛.`);
    falcon.print(
      `시선은 하얀 비단이 펼쳐진 방향을 따라 내려갔고, 환상의 끝에는 차가운 검은 물체가 있었다.`,
    );
    falcon.print(
      `……너무 자주 사용한 탓에 일찌감치 수명을 다한 마이크네.`,
    );
    await falcon.say_and_wait(`너도 자신의 사명을 다했구나.`);
    falcon.print(`검은 물체는 아무 말 없이 자신을 바라보고 있었다.`);
    await falcon.say_and_wait(`아아, 정말이지.`);
    falcon.print(`왜 그렇게 슬픈 눈으로 팔코를 쳐다보는 거야.`);
    await falcon.say_and_wait(`……그래, 팔코에게는 이제 아무것도 없어.`);
    await falcon.say_and_wait(`서로 공존할 수 없는 두 가지를 모두 쥐려다가, 결국 전부 잃어버렸어.`);
    await falcon.say_and_wait(
      `팬들과의 관계를 지키기 위해, ${callname}에 대한 연심을 마음속 깊이 묻어두었는데.`,
    );
    await falcon.say_and_wait(
      `그런데도 팔코를 응원해주는 팬 여러분에게, 균열이 생긴 다이아몬드는 결코 이전의 빛을 내지 못해.`,
    );
    falcon.print(`팔코는 마이크의 질문에 진지하게 대답했다.`);
    falcon.print(
      `설령 그 소망의 끝에 감당할 수 없는 대가가 따른다 해도, 팔코는 무대 위에 서서 그 순간이 탄생하는 걸 직접 지켜보고 싶어.`,
    );
    await falcon.say_and_wait(
      `팔코는 처음부터 끝까지 반짝이는 순간을 쫓기 위해 아이돌의 길을 택했으니까.`,
    );
    falcon.print(`비록 그 초심이 이제는 많이 바랬을지라도.`);
    falcon.print(`누군가를 위해서가 아니라, 오직 자신의 소원을 이루기 위해서.`);
    falcon.print(
      `${falcon.get_uma_sex_title()} 아이돌인 팔코는, 지금까지 응원해준 팬들에게 가장 만족스러운 그림을 바치고 싶어.`,
    );
    falcon.print(`그러니, 이대로 출발하자!`);
    falcon.print(`비록 더트 레이스의 인기가 잔디 레이스의 10분의 1밖에 안 된다 해도.`);
    falcon.print(`팔코는 그걸 다이아몬드보다 더 반짝이고, 불꽃보다 더 화려하게 만들 거야!`);
    falcon.print(`${falcon.get_uma_sex_title()} 아이돌로서의 각오를 걸고!`);
    falcon.print(`이대로 단숨에 결승점까지 빛나는 거야!`);
  };

  handlers[95 + 47] = async (falcon, me, callname) => {
    await print_event_name(`${falcon.name}의 결정`, falcon);
    await era.printAndWait(
      `${me.name}과(와) ${falcon.name}은(는) 다음 주에 있을 도쿄 대상전 준비로 긴박한 시간을 보내고 있었다.`,
    );
    await era.printAndWait(`${falcon.name}과 맺은 계약도 어느덧 3년이 다 되어가고 있었다.`);
    await me.say_and_wait(`이제 곧 졸업식인 건가?`);
    await era.printAndWait(
      `트레센 학원을 졸업하고 더 높은 곳으로 진학하거나, 혹은 정식으로 아이돌의 길을 걷거나.`,
    );
    await era.printAndWait(`${falcon.name}에게는 아마 이 두 가지 가능성뿐이겠지.`);
    await era.printAndWait(
      `미래를 향해 함께 동행한 승객으로서, ${falcon.name}과 함께 쌓은 경험은 아마 어느 깊은 밤, 마치 어제 일처럼 생생하게 떠오를 것이다.`,
    );
    await era.printAndWait(`따르릉.`);
    await era.printAndWait(
      `성가신 소음이 ${me.name}의 상념을 깨뜨렸다. 어느덧 하교 시간이 된 모양이었다.`,
    );
    await era.printAndWait(
      `평소라면 ${me.name}은(는) 서류를 정리한 후 강변 풀밭으로 가서 ${falcon.name}이 오기를 기다렸을 것이다.`,
    );
    await me.say_and_wait(`여기서 잠시 팔코를 기다려보자.`);
    await era.printAndWait(
      `도저히 자리를 비울 수 없을 때는 ${falcon.name}이 직접 찾아와 ${me.name}을(를) 기다리곤 했다.`,
    );
    await era.printAndWait(
      `비록 명시적으로 약속한 적은 없었지만, 두 사람 사이에는 이미 그런 묵계가 형성되어 있었다.`,
    );
    await era.printAndWait(
      `——하지만, 따라놓은 커피의 온기가 모두 사라질 때까지 익숙한 노크 소리는 들리지 않았다.`,
    );
    await me.say_and_wait(`갑자기 어떤 행사에 불려가서 발이 묶인 걸지도 몰라.`);
    await era.printAndWait(
      `요즘 ${falcon.get_uma_sex_title()} 아이돌에게는 갑작스러운 업무가 점점 더 빈번해지고 있었다.`,
    );
    await era.printAndWait(
      `오랫동안 품어왔던 마음의 응어리가 풀린 탓인지, ${falcon.name}의 행동은 여느 때보다 적극적이었다.`,
    );
    await me.say_and_wait(`그렇다면 스마트폰으로 우마스타그램에 올라올 새 소식을 기다려보자.`, true);
    await me.say_and_wait(
      `다음 날 아침에 ${falcon.sex}가 들려줄 재미있는 이야기들을 들어보기로 하자.`,
    );
    await era.printAndWait(
      `서류를 정리하다 실수로 넘어뜨린 액자를 세워, 다시 가장 잘 보이는 곳에 놓았다.`,
    );
    era.drawLine();
    await era.printAndWait(`겨울밤은 생각보다 훨씬 더 길었다.`);
    await era.printAndWait(`상념은 홀로 있는 시간 동안 세계의 끝까지 뻗어 나갔다.`);
    await era.printAndWait(`깊이를 알 수 없는 감정 또한 뻗어 나가는 과정에서 무한히 증폭되었다.`);
    await era.printAndWait(`마치 침묵하는 바다처럼, 혹은 바닥이 보이지 않는 우물처럼.`);
    await era.printAndWait(`똑똑똑.`);
    await era.printAndWait(
      `조심스럽게 문을 열자, 머리를 늘어뜨린 밤색의 ${falcon.get_uma_sex_title()}가 보였다.`,
    );
    await falcon.say_and_wait(`……${callname}.`);
    await me.say_and_wait(`일단 들어와.`);
    await era.printAndWait(
      `${me.name}은(는) 걸이에서 수건을 꺼내 ${falcon.name}에게 건네주고 문을 닫았다.`,
    );
    await era.printAndWait(
      `이상한 소문이 나는 것보다, ${me.name}은(는) 팔코의 상태가 더 걱정되었다.`,
    );
    await falcon.say_and_wait(`실례할게.`);
    await me.say_and_wait(
      `마실 건 뭐가 좋아? 홍차? 주스? 아니면 커피? 아니, 커피는 관두자.`,
    );
    await era.printAndWait(
      `들어온 뒤 거실 소파에 얌전히 앉아, 두 눈으로 주변 환경을 이리저리 살피고 있었다.`,
    );
    await era.printAndWait(
      `그러고 보니 ${falcon.name}이 ${me.name}이(가) 사는 곳을 알게 된 건 이번이 처음이었다.`,
    );
    await era.printAndWait(`……${falcon.sex}는 여길 어떻게 안 거지?`);
    await falcon.say_and_wait(
      `${callname}, 왠지 넋이 나간 표정인데?`,
    );
    await era.printAndWait(`생각이 너무 길어지자 ${falcon.name}의 호기심이 자극된 모양이었다.`);
    await me.say_and_wait(`아니, 그냥 어떤 음료로 대접하면 좋을지 고민 중이었어.`);
    await falcon.say_and_wait(`팔코, 맥주 마셔보고 싶어!`);
    await me.say_and_wait(`결정했어, 역시 홍차로 하자.`);
    await era.printAndWait(`머릿속으로 결정을 내리자 행동에 목적이 생겼다.`);
    await era.printAndWait(
      `찻물을 조심스럽게 따라내며, 찻물 한 방울도 테이블에 흘리지 않도록 집중했다.`,
    );
    await me.say_and_wait(`방금 끓인 거라 뜨거우니까 조심해.`);
    await falcon.say_and_wait(`응!`);
    await era.printAndWait(
      `그러고 보니 ${falcon.name}은 올해 합숙 파티에서 실수로 알코올 음료를 마신 뒤로, 계속 그걸 잊지 못하고 있었다.`,
    );
    await era.printAndWait(
      `${falcon.sex} 본인의 말로는 구름을 밟는 것처럼 몸이 둥둥 뜨는 기분이라던데, 아무래도 그건…… 아니, 그냥 무알코올 음료를 너무 많이 마신 탓이겠지.`,
    );
    await era.printAndWait(
      `하지만 ${falcon.name}을 숙소까지 데려다주고 타즈나 씨를 어떻게 설득할지 고민하는 건 정말 고역이었다.`,
    );
    await era.printAndWait(
      `생각해 보니 지금이라면 지하철역까지 가도 막차 시간을 맞출 수 없을 것 같았다.`,
    );
    await era.printAndWait(
      `그리고 그렇게 찻잔을 붙잡고 찻잎을 멍하니 바라보며 무슨 생각에 잠긴 듯한 ${falcon.name}.`,
    );
    await era.printAndWait(`피식.`);
    await me.say_and_wait(`무슨 일인지 나한테 말해줄 수 있어?`);
    await era.printAndWait(
      `잠시 고민하다가 맥주 캔을 땄다. 캔 입구에서 뿜어져 나오는 갈색 거품은 언제나 몰아치는 홍수를 연상시킨다.`,
    );
    await era.printAndWait(
      `외박 허가, 내일 다시 제출하면 되겠지? 그런 생각들이 알코올과 함께 혈관을 타고 잠재의식 속에서 솟아올랐다.`,
    );
    await me.say_and_wait(`구름 한 점 없는 하늘이네.`);
    await me.say_and_wait(`내일도 날씨가 좋겠어.`, true);
    await falcon.say_and_wait(`……`);
    await falcon.say_and_wait(``);
    await me.say_and_wait(`차라리 여기서 하룻밤 자고 갈래?`);
    await me.say_and_wait(`……역시 팔코,`);
    await me.say_and_wait(`네가 행복했으면 좋겠어.`);
    await era.printAndWait(`말을 내뱉는 순간 ${me.name}은(는) 후회했다.`);
    await era.printAndWait(`만감이 교차했지만, 결국 입 밖으로 나온 것은 이 한마디였다.`);
    await me.say_and_wait(`이러다 미움받겠네.`, true);
    await falcon.say_and_wait(
      `${callname}, 팔코는 당신이 좋아.`,
    );
    await me.say_and_wait(`역시…… 응?`);
    await era.printAndWait(
      `상상했던 것보다 훨씬 늠름한 표정. 그건 ${me.name}이(가) 한 번도 본 적 없는, ${falcon.name}이라는 ${falcon.get_uma_sex_title()}가 보여주는 낯선 일면이었다.`,
    );
    await falcon.say_and_wait(
      `팬들보다, 그 어떤 팬들보다 훨씬 더 ${callname}을 좋아해!`,
    );
    await era.printAndWait(`${me.name}은(는) 갑작스러운 고백 공세에 당황하여 어찌할 바를 몰랐다.`);
    await me.say_and_wait(`에? 팔코, 왜?`);
    await falcon.say_and_wait(
      `그러고 보면 항상 디지땅이 부러웠어…… 청순파 아이돌보다는, 역시 적극적으로 나서서 트레이너의 호감을 꽉 쥐는 게 정답이겠……지?`,
    );
    await falcon.say_and_wait(
      `아, 그러고 보니 팔코가 ${falcon.get_uma_sex_title()} 아이돌을 꿈꿨을 때는, 언젠가 좋아하는 사람을 위해서 지금까지 쌓아온 팬들을 포기하게 될 날이 올 줄은 몰랐어.`,
    );
    await falcon.say_and_wait(
      `하지만 팔코는 후회하지 않아. ${callname}과 만났던 그 풀밭에서부터 팔코는 줄곧 자신의 감정을 억눌러왔으니까.`,
    );
    await falcon.say_and_wait(
      `그래서 팔코는 사실 나쁜 아이야. 팬들을 위해서라고 말은 하지만 사실은 그저 자기만족일 뿐이었어. 하지만 그렇기에 팔코는 결정을 내렸어—— 아이돌로서가 아니라, ${falcon.name}으로서 ${callname}을 사랑하기로 말이야.`,
    );
    await era.printAndWait(
      `그것은 ${falcon.name}의 고백이라기보다, ${falcon.name}이라는 한 명의 ${falcon.teen_sex_title}가 ${me.name}에게 보여준 마음속 깊은 진심이었다.`,
    );
    await me.say_and_wait(`아…… 그렇구나……`);
    await era.printAndWait(`어쩌면 이미 예감하고 있었을지도 모른다. 미지에 대한 불안함이 비로소 선명해졌다.`);
    await me.say_and_wait(`앞으로도 잘 부탁해.`);
    await era.printAndWait(`${me.name}은(는) 살며시 ${falcon.name}의 손을 잡았다.`);
    await falcon.say_and_wait(`에?`);
    await me.say_and_wait(`이번에는 내가 이겼네.`);
    await era.printAndWait(
      `땀에 젖은 오른손이 약간 떨리고 있었지만, ${me.name}은(는) 시종일관 굳게 그 손을 맞잡았다.`,
    );
    await falcon.say_and_wait(
      `……맞아, ${callname}이 이겼어! 앞으로도 잘 부탁해!`,
    );
    await me.say_and_wait(`앞으로의 아이돌 인생은 꽤 험난해지겠어. 정말 고민인걸.`);
    await falcon.say_and_wait(`그러게…… 앞으로 팬들이 일으킬 소동 때문에 한동안은 꽤 고생하겠네.`);
    await era.printAndWait(`${me.name}들은 서로를 마주 보았고, 이내 크게 웃음을 터뜨렸다.`);
    await era.printAndWait(
      `기쁨과 홀가분함이 뒤섞인 눈물이 왈칵 쏟아질 때까지 한참을 웃었고, 앞으로도 계속 웃으며 나아갈 것이다.`,
    );
    await falcon.say_and_wait(`역시 팔코는 바로 트레이너의 품속으로 뛰어드는 게 제일 좋아⭐`);
    await falcon.say_and_wait(`있지…… ${callname}.`);
    await era.printAndWait(`이런 상황에서 더 이상의 생각은 필요 없었다.`);
    await era.printAndWait(`${me.name}은(는) 살며시 ${falcon.name}의 입술에 입을 맞췄다.`);
    await me.say_and_wait(`짜네.`, true);
    await era.printAndWait(`생각했던 것보다 조금 더 달콤했다.`);
    await falcon.say_and_wait(`음.`);
    await era.printAndWait(
      `발꿈치를 든 ${falcon.teen_sex_title}에게 입술이 갑자기 덮였다.`,
    );
    await era.printAndWait(
      `살짝 따끔거리는 감각과 함께 느껴지는 씁쓸하고 짠맛…… 이것이 ${falcon.name}의 키스인가. 과연 그렇군.`,
    );
    await falcon.say_and_wait(`팔코는 당신이 좋아.`);
    await falcon.say_and_wait(
      `——하지만, 팔코는 지금까지 응원해준 팬들에게 책임을 다해야만 해.`,
    );
    await me.say_and_wait(`역시 그렇구나.`);
    await falcon.say_and_wait(`팔코는 방황했고, 고민했고, 도망쳤어.`);
    await falcon.say_and_wait(`죄책감에 휩싸였던 그 나날은 죽음보다 더 고통스러웠어.`);
    await falcon.say_and_wait(
      `——온몸이 상처투성이가 되어서, 도저히 반짝인다고 할 수 없는 그 모습이 너무나 혐오스러웠어.`,
    );
    await falcon.say_and_wait(`하지만, 팔코는 그래도 자신을 위해서 행동할 거야.`);
    await falcon.say_and_wait(`팬들의 응원이 없다면, 팔코는 더 이상 팔코가 아니게 되니까.`);
    await era.printAndWait(
      `${falcon.sex}의 표정은 웃고 있는 것처럼 보였지만, 사실은 극심한 고통으로 인해 안면 근육이 크게 일그러져 있는 것에 더 가까웠다.`,
    );
    await falcon.say_and_wait(
      `……하지만…… 하지만 팔코의 마음속은 텅 비어버렸어. 마치 아무리 해도 꿰맬 수 없는 상처가 난 것처럼.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 아까부터 계속 진동하던 스마트폰을 벽을 향해 세게 내던졌다.`,
    );
    await era.printAndWait(`${falcon.name}의 속마음을 더 일찍 알아차렸더라면.`);
    await falcon.say_and_wait(`그러니까,`);
    await era.printAndWait(`학생이 교외에서 숙박하려면 미리 사감에게 신청해야 한다.`);
    await era.printAndWait(
      `아아, 마치 먼 피안에서 들려오는 말들처럼, 뒷문장은 강박적인 생각들에 완전히 덮여버렸다.`,
    );
    await era.printAndWait(`분명 각오하고 있었는데, 왜 이렇게 슬픈 걸까?`);
    await falcon.say_and_wait(
      `……그렇게 된 거야. 설령 약속을 어기고 마음이 미쳐버릴지라도, 아이돌인 이상 팬들의 기대에 진지하게 응답해야 해.`,
    );
    await me.say_and_wait(`알겠어…… 네가 내린 결정이라면 무엇이든 지지할게.`);
    await era.printAndWait(
      `${me.name}의 시야는 자신의 한계를 돌파한 듯 보였다. 눈앞의 ${falcon.teen_sex_title}에게서 화면 전체를 내려다보는 시점으로 옮겨갔고, 마치 기계처럼 정해진 규칙에 따라 능숙하게 대화를 이어가고 있었다.`,
    );
    await era.printAndWait(`그럼에도 불구하고 ${me.name}은(는) 여전히 ${falcon.sex}의 결정을 존중했다.`);
    await me.say_and_wait(`잘 자.`);
    await falcon.say_and_wait(`${callname}, 잘 자.`);
    await era.printAndWait(`중단되었던 생각이 다시 돌아왔을 때, 문득 정신을 차려보니.`);
    await era.printAndWait(`마치 먼 곳에서 들려오는 듯한 희미한 목소리.`);
    await me.say_and_wait(`아니, 그럴 리가.`);
    await me.say_and_wait(
      `팔코가 성공하든 실패하든, 나는 네 곁에서 마지막 결말까지 함께 지켜볼 거야.`,
    );
    await me.say_and_wait(`그때가 되면, 우리는 분명 웃으면서 오늘 밤의 대화를 추억하게 될 거야.`);
    await me.say_and_wait(`그러니까 팔코, 무서워하지 마.`);
    era.printButton(`결정의 순간이 오면, 내가 밀어줄게`, 1);
    await era.input();
    await falcon.say_and_wait(`……${callname}.`);
    await era.printAndWait(`${me.name}은(는) 팔코가 내민 손을 꽉 잡았다.`);
    await falcon.say_and_wait(
      `${callname}, 오늘 한 말 꼭 기억해야 해?`,
    );
    await me.say_and_wait(`응, 이미 기억했어.`);
    await era.printAndWait(
      `다음 날 아침, 일어났을 때 옆에 팔코가 잠들어 있었던 것은 나중의 이야기다.`,
    );
  };
};