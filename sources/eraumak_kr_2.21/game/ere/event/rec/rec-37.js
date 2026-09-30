/**
 * @file 에이신 플래시 - 招募
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {CharaTalk} me
 * @param {CharaTalk} flash
 * @param {boolean} [me_is_new]
 */
async function why_choose_me(me, flash, me_is_new) {
  era.printButton('「왜 나를 선택한 거야?」', 1);
  if (me_is_new) {
    era.printButton(
      '「이유는 잘 모르겠지만, 그렇게까지 말한다면 앞으로 우리가 서로의 담당이 되는 걸로 하자.」',
      2,
    );
  } else {
    era.printButton('「알았어. 그럼 앞으로 서로 담당으로서 잘 부탁해.」', 2);
  }
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait(
      `에이신 플래시의 갑작스러운 제안에 ${me.name}은(는) 조금 당황했지만, ${flash.sex}가 왜 하필 ${me.name}에게 제안을 한 것인지 더 궁금해졌다.`,
    );
    await flash.say_and_wait('이유인가요? 그렇네요, 역시 이유가 필요하시겠죠.');
    await era.printAndWait(`${me.name}은(는) 의문에 에이신 플래시는 몇 초간 생각에 잠겼다.`);
  } else {
    await era.printAndWait(
      `${
        me_is_new ? `에이신 플래시의 제안에 ${me.name}은(는) 조금 당황했지만, ` : ''
      }마침 ${
        me.name
      }은(는) 오늘 선발 레이스를 보러 온 목적이 새로운 담당 ${flash.get_uma_sex_title()}를 찾기 위해서였기에, 에이신 플래시의 제안을 단호하게 수락했다.`,
    );
    await flash.say_and_wait(
      '……정말 거침없으시네요. 제가 왜 갑자기 당신에게 제안을 했는지 궁금하지 않으신가요?',
    );
    era.printButton('「궁금하긴 한데, 일단 수락부터 하고 보려고.」', 1);
    await era.input();
    await flash.say_and_wait('후후.');
    await era.printAndWait(`${me.name}의 답변을 듣고 에이신 플래시는 살짝 미소 지었다.`);
    await flash.say_and_wait(
      '저에게는 아주 유리한 답변입니다만, 그런 생각은 조금 적절치 못한 것 같네요.',
    );
    await era.printAndWait(`말을 마친 뒤, ${flash.sex}는 고개를 저었다.`);
    await flash.say_and_wait('우선 제 이유를 먼저 들어보시고 판단해 주시길 바랍니다.');
  }
  await era.printAndWait(
    `이어서 ${flash.sex}는 처음 만났을 때부터 ${me.name}의 시선을 빼앗았던 그 푸른 눈동자를 가리켰다.`,
  );
  await flash.say_and_wait('사실 이미 눈치채셨겠지만, 저는 일본인이 아닙니다.');
  era.printButton('「짐작하고 있었어.」', 1);
  await era.input();
  await era.printAndWait(`${me.name}은(는) ${flash.sex}의 말에 고개를 끄덕였다.`);
  await flash.say_and_wait('사실 저는 일본에서 9,000km 떨어진 독일에서 왔습니다.');
  await flash.say_and_wait('말하자면 유학생인 셈이죠.');
  await era.printAndWait('에이신 플래시는 손가락 하나를 펴 보였다.');
  await flash.say_and_wait(
    `일본에 온 목적은, 경기장에서 무적의 실력을 뽐내는 ${flash.get_uma_sex_title()}가 되어서……`,
  );
  era.printButton('「되어서?」', 1);
  await era.input();
  await flash.say_and_wait('………');
  await era.printAndWait('에이신 플래시는 잠시 침묵하더니 가볍게 한숨을 내쉬었다.');
  await flash.say_and_wait(
    '방금 당신 앞에서 참패를 당한 제가 이런 말을 하는 게 우스꽝스럽게 들릴지도 모르겠네요.',
  );
  await flash.say_and_wait('하지만.');
  await era.printAndWait(
    `그 순간 ${me.name}은(는) ${flash.sex}의 표정이 진지하게 변하는 것을 보았다.`,
  );
  await flash.say_and_wait(
    '끊임없이 영광을 쟁취해서, 저의 부모님이…… 저를 자랑스러워하게 해드리고 싶습니다.',
  );
  await era.printAndWait(
    `에이신 플래시는 진지하게 ${me.name}을(를) 바라보며, 자신의 신념을 ${me.name}의 뇌리에 새기려는 듯했다.`,
  );
  era.printButton('「그게 네 생각인 거구나?」', 1);
  await era.input();
  await era.printAndWait(`${me.name}은(는) 고개를 끄덕였다.`);
}

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const event_marks = EventMarks.get(0),
      flash = get_chara_talk(37),
      me = get_chara_talk(0);
    let ret;
    if (stage === event_hooks.recruit) {
      if (era.get('cflag:37:모집상태') === recruit_flags.no) {
        await era.printAndWait(
          `훈련장에 있을 때, ${me.name}의 시야 끝에 낯익은 뒷모습이 문득 스쳐 지나갔다.`,
        );
        era.printButton('「?」', 1);
        await era.input();
        await era.printAndWait(`${me.name}은(는) 급히 고개를 돌렸지만, 뒤에는 아무도 없었다.`);
        era.printButton('「……착각인가?」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 아쉬운 마음에 주변을 더 찾아보았으나, 그 익숙한 실루엣은 마치 공기 중으로 녹아버린 듯 다시는 ${me.name}의 시야에 나타나지 않았다.`,
        );
        era.printButton('「착각이겠지.」', 1);
        await era.input();
        await era.printAndWait(
          `그 광경을 본 ${me.name}은(는) 고개를 저으며, 일단 이 일을 머릿속에서 지우기로 했다.`,
        );
        era.set('cflag:37:무작위모집', 0);
        era.set('flag:대상물색', 37);
        event_marks.add(event_hooks.office_rest);
        add_event(
          event_hooks.office_rest,
          new EventObject(37, cb_enum.recruit),
        );
      } else {
        await era.printAndWait(
          `${
            me.name
          }은(는) 서둘러 운동장으로 달려갔다. 이미 그곳은 다른 트레이너들과 ${flash.get_uma_sex_title()}들로 가득 차 인산인해를 이루고 있었다.`,
        );
        era.printButton('「후우…… 늦지 않았나?」', 1);
        await era.input();
        await era.printAndWait(
          `다행히 지각하는 바람에 선점할 기회는 놓쳤을지 몰라도, 선발 레이스가 아직 정식으로 시작되지 않았기에 ${
            me.name
          }은(는) 여전히 관심 있는 ${flash.get_uma_sex_title()}를 물색할 기회가 있었다.`,
        );
        await era.printAndWait(
          `이에 ${me.name}은(는) 붐비는 인파 속에서 무언가 발견할 수 있을지 이리저리 살피기 시작했다.`,
        );
        era.printButton('「!」', 1);
        await era.input();
        await era.printAndWait(
          `그때 갑자기 ${me.name}의 시야에 낯익어 보이는 누군가가 포착되었다. ${me.name}은(는) 급히 고개를 돌렸지만, 그 사람은 이미 자취를 감춘 뒤였다.`,
        );
        era.printButton('「이상하네, 한번 찾아보자.」', 1);
        era.printButton('「착각일 거야, 신경 쓰지 말자.」', 2);
        ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(`그 사람은 누구지? 내가 ${flash.sex}를 아는 건가?`);
          await era.printAndWait(
            `호기심에 이끌린 ${me.name}은(는) 그 사람이 사라진 방향으로 발걸음을 옮겼다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 북적이는 인파 속에서 간신히 길을 내며 계속해서 나아갔다.`,
          );
          await era.printAndWait(`결국 ${me.name}이(가) 도착한 곳은 운동장의 한산한 구석이었다.`);
        } else {
          await me.say_and_wait(
            '착각이겠지. 이렇게 우연히 아는 사람을 만날 리가 없어.',
            true,
          );
          await era.printAndWait(
            `그렇게 생각하며 ${me.name}은(는) 고개를 저어 내면의 의구심을 떨쳐냈다.`,
          );
          await era.printAndWait(
            `그 후 ${me.name}은(는) 탐색을 계속했지만, 좀처럼 만족스러운 목표를 찾지 못했다.`,
          );
          await era.printAndWait(
            `점점 더 멀리 걷다 보니, ${me.name}은(는) 어느새 운동장 구석까지 오게 되었다.`,
          );
        }
        era.printButton('「여기는?」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 호기심 어린 눈으로 주변을 살폈다. 다른 곳의 떠들썩함과는 대조적으로 이곳은 유독 적막함이 감돌았다.`,
        );
        await flash.say_and_wait(
          `트레이너 ${me.get_adult_sex_title()}, 안녕하세요. 무슨 일이신가요?`,
        );
        era.printButton('「!」', 1);
        await era.input();
        await era.printAndWait(
          `갑자기 ${me.name}의 뒤에서 의아해하는 목소리가 들려왔다.`,
        );
        await era.printAndWait(
          `${
            me.name
          }이(가) 뒤를 돌아보자, 학원 체육복을 입은 한 ${flash.get_uma_sex_title()}가 의아한 표정으로 ${
            me.name
          }을(를) 바라보고 있었다.`,
        );
        await era.printAndWait(
          `자세히 보니 ${flash.sex}는 어깨까지 내려오는 검은 단발머리에, 오른쪽 귀에는 하얀 꽃무늬 고리 장식과 작은 리본을 달고 있었다.`,
        );
        await era.printAndWait(
          `시선을 낮추자, 바람 없는 호수처럼 평온한 푸른 눈동자가 사람의 마음을 홀리는 마력을 지닌 듯해, ${me.name}은(는) 그 눈에 빠져들어 백옥 같은 피부조차 잠시 잊을 뻔했다.`,
        );
        await era.printAndWait(
          '체형 또한 헐렁한 체육복으로도 가릴 수 없는 풍만한 가슴이 자연스러운 호흡에 따라 위아래로 움직였고, 한 줌에 잡힐 듯 가느다란 허리와 어우러져 묘한 곡선을 그리고 있었다.',
        );
        await era.printAndWait(
          `${flash.get_uma_sex_title()}에게 중요한 다리 부분 역시 상반신이 주는 아름다움을 그대로 이어받아, 격렬한 운동에도 불구하고 매끈하고 가녀린 곡선을 잃지 않았다.`,
        );
        await era.printAndWait('정말이지 나무랄 데 없는 미인이네.');
        await era.printAndWait(`눈앞의 호강에 ${me.name}은(는) 마음속으로 조용히 감탄했다.`);
        await flash.say_and_wait('저기…… 왜 그렇게 저를 빤히 쳐다보시나요?');
        await era.printAndWait(
          `눈앞의 ${flash.get_teen_sex_title()}은(는) ${
            me.name
          }이(가) 한참 동안 아무 말 없이 자신을 지켜보기만 하는 행동에 당연한 의문을 제기했다.`,
        );
        era.printButton('「학생, 혹시 우리 전에 만난 적 있지 않아?」', 1);
        await era.input();
        await flash.say_and_wait('에?');
        await era.printAndWait(
          `${me.name}의 말에 ${flash.sex}는 잠시 멍해지더니, 이내 살피는 눈빛으로 ${me.name}을(를) 몇 초간 관찰했다.`,
        );
        await flash.say_and_wait('과연.');
        await era.printAndWait(
          `이윽고 ${me.name}은(는) ${flash.sex}의 얼굴에 기쁨 섞인 미소가 번지는 것을 보았다.`,
        );
        await flash.say_and_wait('당신이었군요. 정말 오랜만이에요.');
        await era.printAndWait(
          `${flash.sex}는 ${me.name}을(를) 알아봤다. ${me.name}이(가) 방금 ${flash.sex}를 관찰하며 정체를 알아냈던 것과 마찬가지로.`,
        );
        era.printButton('「오랜만이야.」', 1);
        era.printButton('「그때 선물은 고마웠어.」', 2);
        ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(
            `${me.name}은(는) ${flash.sex}가 이 학원 학생이라는 사실에 놀라움을 표했다.`,
          );
          await flash.say_and_wait(
            '네, 저도 당신이 여기서 트레이너를 하고 계실 줄은 몰랐어요. 그동안 마주치지 못한 건 순전히 운 때문이었나 보네요.',
          );
          await era.printAndWait(`${flash.get_teen_sex_title()}는 웃으며 고개를 저었다.`);
          await flash.say_and_wait('아.');
          await era.printAndWait(
            `그러다 뭔가가 떠오른 듯, ${flash.sex}의 얼굴에 갑자기 미안한 기색이 서렸다.`,
          );
          await flash.say_and_wait(
            '죄송해요. 예전에 도움을 받았을 때, 경황이 없어서 제 이름을 말씀드리는 걸 깜빡했네요.',
          );
        } else {
          await era.printAndWait(
            `${me.name}은(는) ${flash.sex}가 당시에 주었던 선물에 대해 감사를 전했다.`,
          );
          await flash.say_and_wait('별말씀을요. 당신이 저를 도와주셨으니, 그건 당연한 보답이었는걸요.');
          await era.printAndWait(`${flash.sex}는 기쁜 듯 살짝 미소 지었다.`);
          await flash.say_and_wait('그래도 선물을 마음에 들어 하셨다니 정말 다행이에요.');
          await flash.say_and_wait('아.');
          era.printButton('「?」', 1);
          await era.input();
          await era.printAndWait(
            `말을 하던 중 뭔가가 생각난 듯, ${me.name}은(는) ${flash.sex}의 표정이 미안함으로 바뀌는 것을 보았다.`,
          );
          await flash.say_and_wait(
            '그러고 보니, 예전에 도움을 받았을 때 제 이름을 알려드리는 걸 깜빡하고 말았네요.',
          );
        }
        era.printButton('「에.」', 1);
        await era.input();
        await flash.say_and_wait(
          '정말 무례한 짓이었어요. 그러니 지금 정식으로 다시 자기소개를 할게요.',
        );
        await era.printAndWait(`${flash.sex}는 손을 가슴에 얹고 단정한 자세를 취했다.`);
        await flash.say_and_wait(
          `제 이름은 에이신 플래시. 보시는 바와 같이 ${flash.get_uma_sex_title()}입니다.`,
        );
        era.printButton('「그럼 지금 여기 있는 건……」', 1);
        await era.input();
        await flash.say_and_wait('네.');
        await era.printAndWait(`${flash.sex}는 고개를 끄덕이며 ${me.name}의 추측을 긍정했다.`);
        await flash.say_and_wait(
          '곧 있을 선발 레이스를 준비하기 위해서 이곳에 와 있습니다.',
        );
        await era.printAndWait(
          `선발 레이스가 끝났다. 하지만 ${me.name}을(를) 놀라게 한 것은, 레이스 전 최상의 컨디션을 보이던 에이신 플래시가 매우 저조한 성적으로 결승선을 통과했다는 사실이었다.`,
        );
        await flash.say_and_wait('…………');
        await era.printAndWait(`낙담한 표정의 ${flash.sex}를 보며,`);
        era.printButton('「즉시 다가가 위로한다.」', 1);
        era.printButton(
          `「중요한 건 담당 ${flash.get_uma_sex_title()}를 찾는 거야. ${
            flash.sex
          }를 위로하는 건 나중에 하자.」`,
          2,
        );
        ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(
            `지금 이런 행동을 하면 성적이 좋은 ${flash.get_uma_sex_title()}들을 다른 트레이너들에게 뺏길 수도 있다는 걸 알지만, ${
              me.name
            }은(는) 슬퍼하는 에이신 플래시를 모른 척할 수 없었다.`,
          );
          await era.printAndWait(`${me.name}은(는) ${flash.sex}에게 빠르게 다가갔다.`);
          await flash.say_and_wait('……꼴사나운 모습을 보여드리고 말았네요, 이런 성적이라니.');
          await era.printAndWait(
            `${me.name}을(를) 발견한 에이신 플래시는 깊게 숨을 들이마시더니, 조금 억지스러운 미소를 지어 보였다.`,
          );
          era.printButton('「네 실력은 충분히 훌륭했어.」', 1);
          era.printButton('「승패는 병가지상사라고 하잖아. 기운 내서 다시 시작해보자.」', 2);
          ret = await era.input();
          if (ret === 1) {
            await era.printAndWait(
              `${me.name}은(는) ${flash.sex}에게 이번 레이스에 대한 자신의 견해를 설명했다.`,
            );
            await era.printAndWait(
              `${me.name}이(가) 보기에 에이신 플래시의 퍼포먼스는 완벽에 가까웠고, 단 하나의 빈틈도 찾을 수 없었다.`,
            );
            await flash.say_and_wait('그 말은, 단순히 제가 실력이 부족했다는 뜻인가요.');
            await flash.say_and_wait('………');
            await era.printAndWait(
              `${me.name}의 말을 들은 에이신 플래시는 잠시 침묵에 빠졌다.`,
            );
          } else {
            await flash.say_and_wait('병가지상사인가요…… 후훗.');
            await era.printAndWait(
              `에이신 플래시는 ${me.name}의 말을 듣고 가볍게 웃음을 터뜨렸다.`,
            );
            await flash.say_and_wait('농담도 잘하시네요. 저는 장수 같은 게 아닌걸요.');
            await era.printAndWait(
              `${flash.sex}는 고개를 저었고, 표정은 아까보다 한결 부드러워졌다.`,
            );
            await flash.say_and_wait('하지만……');
            await era.printAndWait(
              `이어서 ${me.name}은(는) ${flash.sex}가 무언가 생각에 잠긴 듯 웅얼거리는 소리를 들었다.`,
            );
            await flash.say_and_wait('승패는 병가지상사, 라……');
            await flash.say_and_wait('………');
            await era.printAndWait(
              `그 말을 끝으로 ${flash.sex}는 침묵에 잠겼다.`,
            );
          }
          era.printButton('「저기……」', 1);
          await era.input();
          await era.printAndWait(
            `이에 ${me.name}이(가) 무언가 말하려던 찰나, ${flash.sex}가 갑자기 고개를 들어 ${me.name}의 가슴에 달린 트레이너 배지를 뚫어지게 쳐다봤다.`,
          );
          await flash.say_and_wait(
            `트레이너 ${me.get_adult_sex_title()}, 실례가 될지도 모르는 질문을 하나 드려도 될까요?`,
          );
          era.printButton('「?」', 1);
          await era.input();
          await era.printAndWait(
            `에이신 플래시의 갑작스러운 질문에 ${me.name}은(는) 의아했지만, 고개를 끄덕여 허락했다.`,
          );
          await flash.say_and_wait('트레이너라는 직업에 종사하신 지 얼마나 되셨나요?');
          await era.printAndWait(
            `${me.name}이(가) 동의하자, ${flash.sex}는 잠시 망설이다가 물었다.`,
          );
          era.printButton('「이제 막 시작했어.」', 1);
          if (era.get('flag:현재명성') > 500)
            era.printButton('「어느 정도 됐지.」', 2);
          if (era.get('flag:현재명성') > 1000)
            era.printButton('「꽤 오래됐어.」', 3);
          switch (await era.input()) {
            case 1:
              await era.printAndWait(
                `${me.name}은(는) ${flash.sex}에게 자신이 이 업계에 발을 들인 지 얼마 되지 않은, 실무 경험이 부족한 신입이라고 솔직하게 말했다. 하지만 이론적인 성적으로만 보면 자신의 능력이 베테랑 트레이너들에게도 결코 뒤처지지 않는다고 생각한다는 점도 덧붙였다.`,
              );
              await flash.say_and_wait(
                '그렇군요. 그러니까 스스로 실력을 증명할 기회가 부족하다고 생각하시는 거군요?',
              );
              await era.printAndWait(
                `${me.name}의 답변을 듣고 에이신 플래시는 깊이 생각하며 고개를 끄덕였다.`,
              );
              await flash.say_and_wait('하지만…… 실력을 증명한다, 인가요.');
              await era.printAndWait(
                `다음 순간, 무언가 떠오른 듯 ${flash.sex}는 갑자기 깊은 한숨을 내쉬었다.`,
              );
              era.printButton('「?」', 1);
              await era.input();
              await era.printAndWait(
                `${me.name}이(가) 혹시 몸이라도 좋지 않은 건지 물어보려던 찰나,`,
              );
              await flash.say_and_wait(
                `……당신이 보시기에, 만약 제가 지금 담당 ${flash.get_uma_sex_title()}가 되고 싶다고 하면 수락해 줄 트레이너가 몇 명이나 될까요?`,
              );
              era.printButton('「에?」', 1);
              await era.input();
              await era.printAndWait(
                `예상치 못한 질문이 ${me.name}의 귓가에 들려왔다.`,
              );
              era.printButton('「………」', 1);
              await era.input();
              await era.printAndWait(
                `${me.name}은(는) ${flash.sex}가 왜 이런 질문을 하는지 알 수 없었지만, 농담을 하는 것 같지 않은 에이신 플래시의 눈빛을 보며 몇 초간 침묵했다.`,
              );
              era.printButton('「솔직히 말하면, 거의 없을 거야.」', 1);
              era.printButton('「걱정 마, 누군가는 꼭 나타날 거야.」', 2);
              ret = await era.input();
              if (ret === 1) {
                await era.printAndWait(
                  `방금 전 레이스 장면을 떠올리며 잠시 망설이던 ${me.name}은(는) 결국 솔직하게 대답하기로 했다.`,
                );
                await flash.say_and_wait('거의 없다, 인가요……');
                await flash.say_and_wait(
                  '그렇겠죠. 제 성적은 정말이지 처참하다고 할 수밖에 없으니까요.',
                );
                await era.printAndWait(
                  '그렇게 말하며 에이신 플래시는 고개를 돌려, 방금 끝난 레이스의 순위가 기록된 운동장 게시판을 바라보았다.',
                );
                await era.printAndWait(`당연하게도 그곳에 ${flash.sex}의 이름은 없었다.`);
              } else {
                await era.printAndWait(
                  `방금 전 레이스 장면을 떠올리며 잠시 망설이던 ${me.name}은(는) 조금 완곡한 표현을 선택했다.`,
                );
                await flash.say_and_wait(
                  '누군가는 있을 거라니…… 즉, 실제 상황은 아주 낙관적이지 않다는 뜻이군요.',
                );
                await era.printAndWait(
                  `하지만 에이신 플래시는 ${me.name}의 말속에 담긴 속뜻을 쉽게 알아차렸다.`,
                );
                await flash.say_and_wait(
                  '그렇겠죠. 제 성적은 정말이지 처참하다고 할 수밖에 없으니까요.',
                );
                await era.printAndWait(
                  `${flash.sex}는 고개를 돌려 운동장 게시판의 순위표를 바라보았다.`,
                );
                await era.printAndWait(`당연하게도 그곳에 ${flash.sex}의 이름은 없었다.`);
              }
              era.printButton(
                '「……뭐, 나 같은 신입 트레이너를 찾아간다면 수락해 줄지도 모르지?」',
                1,
              );
              await era.input();
              await era.printAndWait(
                `에이신 플래시의 안색이 어두워지자 ${me.name}은(는) 위로의 말을 건넸다.`,
              );
              await flash.say_and_wait('………');
              era.printButton(
                '「아니면 다시 준비해서 다음 선발 레이스 때 더 좋은 성적을 거두는 방법도 있어.」',
                1,
              );
              await era.input();
              await era.printAndWait(`${me.name}은(는) ${flash.sex}를 위해 나름의 대책을 제시했다.`);
              await flash.say_and_wait(
                '이번 실패의 원인은 실력 부족입니다. 그렇다면 다음 선발 레이스까지 제 성장이 얼마나 이루어질까요?',
              );
              await era.printAndWait(
                '에이신 플래시는 나직한 목소리로 말했다. 그것이 질문인지, 아니면 단순한 독백인지 알 수 없었다.',
              );
              era.printButton('「……그건 네 자신에게 달렸지.」', 1);
              era.printButton('「계속 노력한다면 반드시 좋아질 거야!」', 2);
              ret = await era.input();
              if (ret === 1) {
                await era.printAndWait(
                  '자신의 능력을 향상시키기 위한 조건은 간단하면서도 복잡하다. 하지만 어떤 경우라도 부정적인 태도로 제자리에 머물러 망설인다면, 결코 앞으로 나아갈 수 없다.',
                );
                await era.printAndWait(
                  `${me.name}은(는) 그러한 도리를 ${flash.sex}에게 일러주려 노력했다.`,
                );
                await flash.say_and_wait('제 생각에 달렸다…… 는 말씀이시군요.');
                await era.printAndWait(
                  `${me.name}의 말을 듣고 무언가 결심이라도 한 듯, ${flash.sex}는 깊게 숨을 들이마셨다.`,
                );
              } else {
                await era.printAndWait(
                  `실력을 키우는 조건은 복잡할 수 있으나, 긍정적인 태도만이 앞으로 나아갈 가능성을 만들어준다. 이에 ${me.name}은(는) ${flash.sex}를 격려했다.`,
                );
                await flash.say_and_wait(
                  '계속 노력하기만 하면 반드시 성장할 수 있다…… 인가요?',
                );
                await era.printAndWait(
                  `${me.name}의 격려를 들은 ${flash.sex}는 무언가 결심한 표정으로 깊은 숨을 내쉬었다.`,
                );
              }
              await flash.say_and_wait(
                `${
                  me.actual_name
                } ${me.get_adult_sex_title()}, 당신께 한 가지 간곡히 부탁드리고 싶은 것이 있습니다.`,
              );
              era.printButton('「?」', 1);
              await era.input();
              await era.printAndWait(
                `그 순간 ${me.name}은(는) 레이스 패배로 인해 풀 죽어 있던 에이신 플래시의 눈빛이 순식간에 다시 강인하게 변하는 것을 목격했다.`,
              );
              await era.printAndWait(`${me.name}이(가) 그런 변화에 놀라기도 전에,`);
              await flash.say_and_wait('부디 저의 담당 트레이너가 되어주셨으면 합니다.');
              era.printButton('「에?!」', 1);
              await era.input();
              await era.printAndWait(
                `다음 순간, ${me.name}을(를) 더 큰 충격에 빠뜨리는 말이 ${flash.sex}의 입에서 흘러나왔다.`,
              );
              await era.printAndWait(
                `이 갑작스러운 상황에서 ${me.name}의 선택은:`,
              );
              await why_choose_me(me, flash, true);
              await flash.say_and_wait(
                '다음 선발 레이스에 참가하든 그렇지 않든, 전문가의 지도 없이는 아무리 노력해도 제자리걸음일 뿐이라고 생각합니다.',
              );
              await era.printAndWait(
                `${me.name}이(가) 자신의 의도를 파악한 것을 확인하고, 에이신 플래시는 말을 이어갔다.`,
              );
              await flash.say_and_wait(
                '그래서 당신이 저를 지도해 주셨으면 해요. 제게는 아직 성장할 여지가 있다고 믿고 있습니다.',
              );
              await era.printAndWait(
                `말을 마친 ${flash.sex}는 ${me.name}에게 정중하게 고개를 숙이며 부탁했다.`,
              );
              await flash.say_and_wait('아, 물론,');
              await era.printAndWait(
                `고개를 다시 든 순간, ${flash.sex}는 다시금 쑥스러운 듯 살짝 미소 지었다.`,
              );
              await flash.say_and_wait(
                '혹시 왜 당신에게 이런 제안을 했는지 궁금하시다면.',
              );
              await flash.say_and_wait(
                '솔직히 말해서, 저를 알고 있는 분이라면 제 부탁을 더 쉽게 들어주지 않을까 하는 이기적인 생각도 포함되어 있습니다.',
              );
              era.printButton('「그랬던 거야?」', 1);
              await era.input();
              await era.printAndWait(`그 말에 ${me.name}은(는) 가볍게 고개를 끄덕였다. 이 상황에서`);
              break;
            case 2:
              await era.printAndWait(
                `${me.name}은(는) ${flash.sex}에게 자신이 트레이너 생활을 시작한 지 어느 정도 되었으며, 비록 명망 높은 선배들의 성적에는 미치지 못할지라도 자신과 그들의 차이는 단지 경력뿐이라고 생각한다고 말했다.`,
              );
              await flash.say_and_wait(
                '그렇군요. 그런 자신감 넘치는 생각, 정말 존경스럽네요.',
              );
              await era.printAndWait(
                `${me.name}의 말을 듣고 에이신 플래시는 미소 지으며 칭찬했다.`,
              );
              await flash.say_and_wait('하지만…… 경력이라.');
              era.printButton('「?」', 1);
              await era.input();
              await era.printAndWait(`다음 순간, ${flash.sex}는 가볍게 한숨을 쉬었다.`);
              await era.printAndWait(
                `${me.name}은(는) ${flash.sex}의 어깨가 그 순간 조금 처지는 듯한 느낌을 받았다.`,
              );
              era.printButton('「무슨 일 있어?」', 1);
              await era.input();
              await era.printAndWait(`그 모습에 ${me.name}은(는) 걱정스럽게 물었다.`);
              await flash.say_and_wait('……걱정해 주셔서 감사합니다. 아무 일도 아니에요.');
              await era.printAndWait(
                `에이신 플래시는 고개를 저었고, 이내 결연한 눈빛으로 ${me.name}을(를) 바라봤다.`,
              );
              await flash.say_and_wait('하지만 당신께 꼭 부탁드리고 싶은 일이 있습니다.');
              era.printButton('「에?」', 1);
              await era.input();
              await flash.say_and_wait('부디 저의 담당 트레이너가 되어주셨으면 합니다.');
              await era.printAndWait(
                `말을 마친 뒤, ${flash.sex}는 ${me.name}에게 정중하게 고개를 숙여 부탁했다.`,
              );
              await era.printAndWait(
                `이 갑작스러운 상황에서 ${me.name}의 선택은:`,
              );
              await why_choose_me(me, flash);
              await flash.say_and_wait(
                '이번 레이스는 실패했지만, 제게는 아직 성장할 여지가 있다고 생각합니다.',
              );
              await era.printAndWait(
                `${me.name}이(가) 자신의 의도를 받아들인 것을 확인하고, 에이신 플래시는 말을 이었다.`,
              );
              await flash.say_and_wait(
                '그래서 이미 트레이너로서 어느 정도 경험이 있는 당신께서 저를 지도해 주셨으면 해요.',
              );
              if (ret === 1) {
                era.printButton('「………」', 1);
                await era.input();
                await era.printAndWait(
                  `${me.name}이(가) 보기에 이 말을 하는 ${flash.sex}의 태도는 매우 성실했다. 하지만 동시에 또 다른 의문이 ${me.name}의 마음속에 떠올랐다.`,
                );
                era.printButton(
                  '「그렇다면 왜 더 뛰어난 능력을 가진 트레이너를 선택하지 않은 거야?」',
                  1,
                );
                await era.input();
                await flash.say_and_wait('에.');
                await era.printAndWait(
                  `${me.name}의 질문에 에이신 플래시는 눈에 띄게 당황했다.`,
                );
                await flash.say_and_wait('………');
                await era.printAndWait(
                  `난처한 기색이 ${flash.sex}의 얼굴에 역력히 드러났다.`,
                );
                await flash.say_and_wait('……하아.');
                await era.printAndWait(
                  `몇 초 후, ${me.name}은(는) ${flash.sex}가 어쩔 수 없다는 듯 가볍게 한숨을 내쉬는 것을 보았다.`,
                );
                await flash.say_and_wait(
                  '정말…… 대답하기 곤란한 질문을 하시는군요.',
                );
                await era.printAndWait('에이신 플래시는 쓴웃음을 지으며 말했다.');
                era.printButton('「미안.」', 1);
                await era.input();
                await flash.say_and_wait(
                  '아니요, 사과하실 필요 없습니다. 엄밀히 말하면 전부 제 생각 때문에 일어난 일이니까요.',
                );
                await era.printAndWait(
                  `${flash.sex}는 고개를 저었으나, 목소리는 조금 가라앉아 있었다.`,
                );
                await flash.say_and_wait(
                  '분명 말씀하신 대로, 능력이 뛰어난 트레이너일수록 저에게 더 큰 도움이 될 겁니다.',
                );
                await flash.say_and_wait(
                  '현실적인 관점에서 본다면, 이미 수년간 경력을 쌓은 노련한 트레이너를 찾아가는 게 맞겠죠.',
                );
                era.printButton('「하지만?」', 1);
                await era.input();
                await flash.say_and_wait(
                  '하지만…… 아시다시피 선택이라는 건 언제나 쌍방향인 법이잖아요, 그렇죠?',
                );
                await era.printAndWait(
                  '말을 하며 에이신 플래시는 고개를 돌려 운동장 한쪽에 있는 선발 레이스 순위표를 바라보았다.',
                );
                await era.printAndWait(`당연히 그곳에 ${flash.sex}의 이름은 없었다.`);
                era.printButton(
                  '「네가 원하더라도, 그들이 네 신청을 받아주지 않을 거라는 거구나.」',
                  1,
                );
                era.printButton('「그럼 나는 너에게 차선책인 거야?」', 2);
                ret = await era.input();
                if (ret === 1) {
                  await era.printAndWait(
                    `그제야 ${me.name}도 ${flash.sex}의 생각을 이해하게 되었다.`,
                  );
                  await flash.say_and_wait('네.');
                  await era.printAndWait('에이신 플래시는 고개를 끄덕였다.');
                  await flash.say_and_wait(
                    '경력이 오래된 트레이너일수록 안목은 더 높아지기 마련입니다.',
                  );
                  await flash.say_and_wait(
                    '제가 선발 레이스에서 보여준 성적은 그들이 저를 선택하게 만들기에 충분하지 않다고 생각해요.',
                  );
                  era.printButton('「그럼 너는 나를 어떻게 생각하고 있는 거야?」', 1);
                  await era.input();
                  await flash.say_and_wait('에.');
                  await era.printAndWait(
                    `${me.name}의 말에 에이신 플래시는 눈을 깜빡였다. ${flash.sex}는 물론 ${me.name}이(가) 묻는 「어떻게 생각하는지」의 의미를 알고 있었다.`,
                  );
                  await flash.say_and_wait('……아마 짐작하신 대로일지도 모릅니다.');
                  await era.printAndWait(
                    `몇 초간 고민한 끝에 ${flash.sex}는 솔직하게 털어놓았다.`,
                  );
                  await flash.say_and_wait(
                    '당신께 제안을 드린 건, 저를 알고 있는 분이라면 제 요청을 더 쉽게 수락해 줄 거라는 이기적인 계산이 있었던 게 사실이에요.',
                  );
                  era.printButton('「자연스러운 생각이야.」', 1);
                  await era.input();
                  await flash.say_and_wait(
                    '하지만 그것이 결코 요행을 바라는 마음이라는 뜻은 아닙니다. 그런 생각은 당신에게도, 저에게도 공정하지 못하니까요.',
                  );
                  await era.printAndWait('에이신 플래시는 말을 마친 뒤 깊은 숨을 들이마셨다.');
                  await era.printAndWait(
                    `${flash.sex}는 매우 진지한 눈빛으로 ${me.name}을(를) 바라보며, 자신의 말과 행동에 어떠한 거짓도 없음을 전달하려 했다.`,
                  );
                  await flash.say_and_wait(
                    '제가 당신이 베테랑 트레이너로 나아가는 과정에서 꼭 필요한 「경력」의 일부가 되어드리고 싶습니다.',
                  );
                } else {
                  await flash.say_and_wait('………');
                  await era.printAndWait(
                    `${me.name}의 조금은 가시 돋친 말에 에이신 플래시는 몇 초간 침묵했다.`,
                  );
                  await flash.say_and_wait(
                    '만약 제가 정말로 그런 무례한 생각을 인정한다면, 저 스스로를 결코 용서할 수 없을 거예요.',
                  );
                  await era.printAndWait(
                    `마치 어떤 선을 넘은 듯, 다시 입을 연 ${flash.sex}의 표정은 매우 엄숙해져 있었다.`,
                  );
                  await flash.say_and_wait(
                    '짐작하신 대로, 당신께 제안을 드린 것에 당신이 저를 알고 있으니 더 쉽게 수락해 줄 거라는 이기적인 계산이 포함된 건 사실입니다.',
                  );
                  await flash.say_and_wait('하지만.');
                  await era.printAndWait(
                    `말을 이어가는 ${me.name}의 눈에 ${flash.sex}의 눈동자 속에서 날카로운 빛이 스쳐 지나가는 것이 보였다.`,
                  );
                  await flash.say_and_wait(
                    '차선책이라는 그런 모욕적인 생각을 가졌다면, 저는 제 자신을 용서하지 못했을 겁니다.',
                  );
                  era.printButton('「……」', 1);
                  await era.input();
                  await era.printAndWait(
                    `이토록 단호한 에이신 플래시의 태도에 ${me.name}도 인정할 수밖에 없었다.`,
                  );
                  era.printButton('「내가 실례했어.」', 1);
                  await era.input();
                  await flash.say_and_wait(
                    '……결론적으로, 제 마음속에 요행이란 존재하지 않습니다. 그것은 당신에게도 저에게도 결코 공평하지 못한 생각이니까요.',
                  );
                  await era.printAndWait(
                    `${me.name}의 사과를 듣고서야 에이신 플래시의 표정도 한결 부드러워졌다.`,
                  );
                  await era.printAndWait(
                    `다음 순간, ${flash.sex}는 ${me.name}에게 손을 내밀었다.`,
                  );
                  await flash.say_and_wait(
                    '그러니 부디 제가 당신이 일류 트레이너로 성장하는 데 필요한 경력의 한 페이지가 되게 해주세요.',
                  );
                  await era.printAndWait(
                    `${flash.sex}는 말을 하며 매우 진지한 눈빛으로 ${me.name}을(를) 바라봤다. 자신의 진심에 조금의 거짓도 섞여 있지 않음을 전달하려는 듯했다.`,
                  );
                }
                await flash.say_and_wait(
                  `저는 당신의 담당 ${flash.get_uma_sex_title()}가 되고 싶습니다.`,
                );
                era.printButton('「이건 조건의 교환인 거야?」', 1);
                await era.input();
                await era.printAndWait(`${me.name}은(는) ${flash.sex}에게 물었다.`);
                await flash.say_and_wait('아니요, 순수하게 저의 개인적인 간청입니다.');
                era.printButton('「그렇구나.」', 1);
                await era.input();
                await era.printAndWait(
                  `이제 ${me.name}은(는) 에이신 플래시의 말에 담긴 각오를 이해했다. 그렇다면 이 상황에서 ${me.name}의 선택은:`,
                );
              } else {
                await era.printAndWait(
                  `말을 하는 ${flash.sex}의 태도가 매우 진실하다는 것을 ${me.name}은(는) 느낄 수 있었다. 그래서,`,
                );
              }
              break;
            case 3:
              await era.printAndWait(
                `${me.name}은(는) ${
                  flash.sex
                }에게 자신이 트레이너 업계에서 이미 수년간 일해왔으며, 많은 경험을 쌓았고, 심지어 이전에도 성적이 꽤 좋은 몇 명의 레이스 ${flash.get_uma_sex_title()}를 육성한 적이 있다고 말했다.`,
              );
              await flash.say_and_wait(
                '그 말은 즉, 당신은 수년간 종사해 온 베테랑 트레이너라는 말씀이신가요?',
              );
              await era.printAndWait(
                `${me.name}의 대답을 듣고, 에이신 플래시는 가볍게 숨을 내뱉었다.`,
              );
              await flash.say_and_wait('그렇다면, 별 문제 없겠군요.');
              era.printButton('「?」', 1);
              await era.input();
              await era.printAndWait(
                `${me.name}은(는) ${flash.sex}의 혼잣말을 듣고, 무엇이 문제 없다는 것인지 막 물어보려던 참이었다.`,
              );
              await flash.say_and_wait('저기, 저의 트레이너가 되어주시겠어요?');
              era.printButton('「에?」', 1);
              await era.input();
              await era.printAndWait(
                `다음 순간, ${me.name}은(는) ${flash.sex}가 건넨 말에 깜짝 놀라고 말았다.`,
              );
              await flash.say_and_wait(
                '이 요청이 당신에게 곤란함을 드릴 수도 있겠죠. 저도 너무 갑작스럽다는 건 알고 있습니다.',
              );
              await era.printAndWait(
                `${me.name}의 표정을 본 ${flash.sex}의 말투에는 미안함이 섞여 있었다.`,
              );
              await why_choose_me(me, flash);
              await flash.say_and_wait(
                '비록 이번 레이스에서는 패배했지만, 저는 제게 아직 성장할 여지가 있다고 생각합니다.',
              );
              await era.printAndWait(
                `${me.name}에게 자신의 생각이 전달된 것을 보고, 에이신 플래시는 이어서 말을 꺼냈다.`,
              );
              await flash.say_and_wait(
                '그래서 저는 이미 트레이너 업계에서 수년간 종사하신 당신이, 저를 지도해 주시길 바라고 있습니다.',
              );
              await era.printAndWait(
                `말을 마친 뒤, ${flash.sex}는 예의를 갖춘 요청의 의미로 ${me.name}에게 고개를 숙여 인사했다.`,
              );
              await era.printAndWait(`그리고 이런 상황에서, ${me.name}의 행동은──`);
          }
          era.printButton('「알았어, 그럼 함께 노력해 보자.」', 1);
          era.printButton(
            '「미안해, 내 능력이 네 생각만큼 뛰어나지 않을 수도 있으니 다른 분을 찾아봐.」',
            2,
          );
          ret = await era.input();
          if (ret === 1) {
            event_marks.sub(event_hooks.recruit);
            era.set('cflag:37:모집상태', recruit_flags.yes);
            era.set('flag:대상물색', 0);
            await this.recruit_end();
          } else {
            event_marks.sub(event_hooks.recruit);
            era.set('flag:대상물색', 0);
            era.set('cflag:37:무작위모집', 1);
            era.set('cflag:37:모집상태', recruit_flags.no);
          }
        } else {
          event_marks.sub(event_hooks.recruit);
          era.set('flag:대상물색', 0);
          era.set('cflag:37:무작위모집', 1);
          era.set('cflag:37:모집상태', recruit_flags.no);
        }
      }
    } else if (stage === event_hooks.office_rest) {
      if (era.get('flag:현재상호작용캐릭터')) {
        add_event(stage, event_object);
        return false;
      }
      await era.printAndWait(
        `며칠 뒤, ${me.name}이(가) 방을 청소하던 중, ${me.name}은(는) 문득 책상 서랍 구석에 은색과 검은색이 섞인 훈장 하나가 얌전히 놓여 있는 것을 발견했다.`,
      );
      era.printButton('「이건?」', 1);
      await era.input();
      await era.printAndWait(
        `호기심에 이끌려 ${me.name}은(는) 그 훈장을 집어 들고 자세히 살펴보았다.`,
      );
      await flash.say_as_unknown_and_wait(
        '도와주셔서 정말 감사합니다. 부디 이것을 제 보답으로 받아주세요.',
      );
      era.printButton('「아, 생각났다!」', 1);
      await era.input();
      await era.printAndWait(
        `추억이 갑자기 뇌리에 스쳤다. ${me.name}은(는) 이것이 예전에 ${
          me.name
        }이(가) 볼일이 있어 외출했다가 학원 근처 지하철역에서 열차를 기다릴 때, 길을 잃은 어느 ${flash.get_uma_sex_title()}를 도와주고 나서 감사의 선물로 받은 것이라는 걸 기억해 냈다.`,
      );
      await era.printAndWait(
        `말은 그렇게 해도, 그 ${flash.get_uma_sex_title()}의 모습은 이미 ${
          me.name
        }의 기억 속에서 희미해졌다. ${me.name}은(는) 단지 ${
          flash.sex
        }가 칠흑같이 부드러운 단발머리에, 외국인 특유의 맑고 푸른 눈동자를 가졌다는 뚜렷한 외모 특징만을 어렴풋이 떠올릴 뿐이었다.`,
      );
      await era.printAndWait('따르릉──');
      era.printButton('「!」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}이(가) 더 많은 세부 사항을 기억해 내려고 애쓰던 중, 요란한 핸드폰 벨소리가 ${me.name}의 생각을 방해했다.`,
      );
      era.printButton('「전화를 받는다」', 1);
      era.printButton('「전화를 끊는다」', 2);
      ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `생각이 끊긴 것에 ${me.name}은(는) 조금 불쾌했지만, 그래도 핸드폰을 꺼내 정중하게 통화 버튼을 눌렀다.`,
        );
        await say_by_passer_by_and_wait(
          '스태프',
          `트레이너 ${me.get_adult_sex_title()}, 선발 레이스가 곧 시작되는데 왜 아직 도착하지 않으셨나요?`,
        );
        await era.printAndWait('수화기 너머에서 다급한 목소리가 들려왔다.');
        era.printButton('「선발 레이스?」', 1);
        await era.input();
        await era.printAndWait(
          `그 말을 들은 ${me.name}은(는) 잠시 멍해졌다가, 오늘 학원 운동장에서 중요한 행사가 열린다는 사실을 그제야 떠올렸다.`,
        );
        era.printButton('「지금 바로 가겠습니다!」', 1);
        await era.input();
        await era.printAndWait(`그 사실을 깨닫자마자 ${me.name}은(는) 즉시 문을 박차고 나갔다.`);
      } else {
        await era.printAndWait(
          `생각이 끊긴 불쾌감에 ${me.name}은(는) 조금 짜증스러운 기분으로 핸드폰을 꺼내 거절 버튼을 눌렀다.`,
        );
        await era.printAndWait('뚝.');
        await era.printAndWait('벨소리가 갑자기 멈췄다.');
        await era.printAndWait(
          `${me.name}이(가) 막 핸드폰을 내려놓으려던 찰나, 화면에 표시된 날짜에 ${me.name}의 시선이 잠시 머물렀다.`,
        );
        era.printButton('「그러고 보니……」', 1);
        await era.input();
        await era.printAndWait(
          `다음 순간, ${me.name}은(는) 오늘 학원 운동장에서 중요한 행사가 열린다는 것을 문득 떠올렸다.`,
        );
        era.printButton('「선발 레이스가 시작되겠어!」', 1);
        await era.input();
        await era.printAndWait(`그 사실을 깨닫자마자 ${me.name}은(는) 즉시 문을 박차고 나갔다.`);
      }
      event_marks.sub(event_hooks.office_rest);
      event_marks.add(event_hooks.recruit);
      era.set('cflag:37:무작위모집', 1);
      era.set('cflag:37:모집상태', -2);
      return true;
    }
  }
};
