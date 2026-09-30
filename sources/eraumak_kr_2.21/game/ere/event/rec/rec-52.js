/**
 * @file 하루 우라라 - 招募
 * @author 99
 */
const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const life_marks = new UraraLifeMarks(),
      me = get_chara_talk(0),
      me_callname = sys_get_callname(52, 0),
      urara = get_chara_talk(52),
      in_urara = get_chara_talk(52, chara_colors[52][1]);
    era.set('callname:0:52', '우라라');
    if (era.get('cflag:52:육성횟수')) {
      await in_urara.say_as_unknown_and_wait('……');
      await in_urara.say_as_unknown_and_wait(
        '또 오셨군요. 같은 이야기를 다시 듣고 싶으신 건가요? 아니면 아직 남은 미련이라도 있으신지?',
      );
      await in_urara.say_as_unknown_and_wait(
        '당신의 선택이니 다시 시작하도록 하죠. 새로운 이야기 속에서 부디 답을 찾으시길 기대하겠습니다.',
      );
      await in_urara.say_as_unknown_and_wait(
        `과거와 마찬가지로, 이것은 아주 보잘것없는 어느 작은 ${urara.get_uma_sex_title()}가 겪은 이야기입니다――`,
      );
    } else if (life_marks.rec) {
      await in_urara.say_as_unknown_and_wait('……');
      await in_urara.say_as_unknown_and_wait(
        '이번에는 준비가 되셨나요? 이번에야말로 이 이야기를 끝맺음하실 생각이길 바랍니다…… 기대하고 있을게요.',
      );
      await in_urara.say_as_unknown_and_wait(
        `그럼, 이것은 아주 보잘것없는 어느 작은 ${urara.get_uma_sex_title()}가 겪은 이야기입니다――`,
      );
    } else {
      await in_urara.say_as_unknown_and_wait('……');
      await in_urara.say_as_unknown_and_wait(
        '여보세요? 들리시나요? 당신이 듣고 있다면, 이제 이 이야기를 시작해 보도록 하죠.',
      );
      await in_urara.say_as_unknown_and_wait(
        '이 이야기는 아마 평범할 수도, 조금 길 수도 있겠지만, 선택하신 이상 끝까지 들어주세요.',
      );
      await in_urara.say_as_unknown_and_wait(
        `이것은 아주 보잘것없는 어느 작은 ${urara.get_uma_sex_title()}가 겪은 이야기입니다――`,
      );
    }
    life_marks.rec = 1;
    era.drawLine();
    await era.printAndWait(
      `훈련장 구석에 앉아 따가운 햇살을 피하던 ${me.name}은(는) 문득 심한 어지러움을 느꼈다.`,
    );
    await era.printAndWait(`며칠 전에도 이런 기분이 들긴 했지만, 이번에는 그 증상이 훨씬 뚜렷했다.`);
    await era.printAndWait(
      `비록 이유는 알 수 없었으나, ${me.name}은(는) 가슴 속 무언가가 빠른 속도로 빠져나가는 것을 확실히 느꼈다……`,
    );
    await era.printAndWait(`……`);
    await era.printAndWait(
      `사실 엘리트들이 모여드는 중앙 트레센에서 가장 흔한 것은 인재와 천재였다.`,
    );
    await era.printAndWait(
      `신인이든 이미 전설이 된 존재든, 언제나 더 뛰어난 자가 더 높은 산봉우리에 서 있었고, ${me.name}은(는) 영원히 그곳에 닿지 못할 것만 같았다.`,
    );
    await era.printAndWait(
      `과거의 벽돌을 쌓아 올려 자신을 최대한 높이 받쳐보아도, 저 『극소수의 천재』들에 닿기에는 여전히 아득히 멀어 보였다――`,
    );
    await era.printAndWait(
      `선배들의 경험은 그 마지막 한 걸음의 거리가 이토록 멀다고 가르쳐주지 않았기에, ${me.name}은(는) 깊은 좌절감을 느꼈다.`,
    );
    await era.printAndWait(
      `더 큰 재능을 가진, 심지어 천재라 불리는 동료들 앞에서 ${me.name}이(가) 기댈 수 있는 것은 그저 『노력』뿐이었다.`,
    );
    await era.printAndWait(
      `스스로를 다독여 보려 했지만, 완전히 평정심을 유지하기란 불가능에 가까웠다.`,
    );
    await era.printAndWait(
      `${urara.get_uma_sex_title()}에 대한 자신의 이해도가 남보다 뒤처진다는 사실을 쉽게 받아들였다면 트레이너 일을 계속할 수 없었을 것이다. ${
        me.name
      }은(는) 적어도 계속해서 정진하고 싶다는 의지를 품고 있었다.`,
    );
    await era.printAndWait(
      `가슴 속에 열망을 품고 계속 나아가려 하지만, 할 수 있는 일이라곤 고작 압박을 일시적으로 견뎌내는 것뿐이었다.`,
    );
    await era.printAndWait(
      `그러나 지금의 ${me.name}은(는) 억지로 기운을 차리는 것보다, 무거운 짐을 내려놓고 자신에게 아주 작은 『희망』을 불어넣는 것이 더 필요하다는 사실을 잊고 있었다.`,
    );
    await era.printAndWait(
      `하지만 하늘은 결코 사람의 뜻대로 되지 않는 법. 이 고비를 어떻게 넘길지 채 생각하기도 전에 더 큰 문제가 닥쳐왔다.`,
    );
    await era.printAndWait(
      `압박감에 멈추지 못했던 ${me.name}은(는) 최근 계속해서 무리하게 야근을 거듭한 결과, 마침내 정신적 한계에 도달하고 말았다.`,
    );
    await era.printAndWait(
      `비틀거리던 ${me.name}은(는) 마치 줄 끊긴 인형처럼 한쪽으로 쓰러졌다. 그러나 바닥에 닿기 직전, 연한 벚꽃색 형체 하나가 ${me.name}의 흐릿한 시야 속에 갑자기 뛰어들어왔다.`,
    );
    await era.printAndWait(
      `뒤이어 ${
        me.name
      }의 주변을 감싸며 퍼진 것은, 천진난만한 ${urara.get_teen_sex_title()}에게서 배어 나오는 향기였다.`,
    );
    await era.printAndWait(
      `벚꽃 향기? 뭐야 그게. 물처럼 옅은 벚꽃이 어찌 이토록 마음을 편안하게 하는 향기를 풍길 수 있단 말인가?`,
    );
    await era.printAndWait(
      `그렇다면…… 이것은 뇌 과부하로 인한 환각인가? 정말 지칠 대로 지친 모양이다……`,
    );
    await era.printAndWait(
      `멀어져 가는 의식을 붙잡지 못한 채, ${me.name}은(는) 끊어져 가는 생각 속에서 서서히 눈을 감았다.`,
    );
    await era.printAndWait(
      `하지만 의식이 사라지기 전, ${me.name}은(는) 누군가가 쓰러지는 자신의 몸을 지탱하며 상냥하게 품에 안는 것을 분명히 느꼈다.`,
    );
    await era.printAndWait(
      `접촉하는 순간, ${urara.get_teen_sex_title()}의 부드러운 향기가 ${
        me.name
      }의 몸과 마음을 감싸 안았다. 거기에는 운동을 마친 후 체육복에 남은 체취가 섞여 있는 듯했다.`,
    );
    await urara.say_as_unknown_and_wait(
      `트레이너? 괜찮아? 잠시만! 금방 보건실로 데려다줄게!`,
    );
    await era.printAndWait(
      `말할 수 없는 안도감 속에서 신체는 한계에 도달했고, ${
        me.name
      }은(는) 자신을 구하러 온 ${urara.get_uma_sex_title()}에 대한 고마움을 가슴에 품은 채 의식을 놓아주었다.`,
    );

    era.drawLine();
    in_urara.say_as_unknown(`희미해지는 의식 속에서, ${me_callname}는 이렇게 생각(말)했다――`);
    era.printButton(`「꿈이 아니었구나……」`, 1);
    era.printButton(`「……미안해……」`, 2);
    era.printButton(`「처, 천사인가……?」`, 3);
    const love_select = await era.input();
    await in_urara.say_as_unknown_and_wait(
      `Boy Meet Girl인가요? 하하~ 두 사람의 신분 차이를 생각하면 아무리 봐도 그건 아니겠죠.`,
    );
    await in_urara.say_as_unknown_and_wait(`하지만 이런 만남, 의외로 나쁘지 않을지도 모르죠?`);

    era.drawLine();
    await era.printAndWait(
      `코끝을 스치는 익숙한 약품 냄새와 함께, 멀어졌던 의식은 트레센 보건실에 누워 있는 육체를 서서히 되찾았다.`,
    );
    await era.printAndWait(
      `천천히 깨어난 ${me.name}은(는) 몽롱한 기운 속에서 곁에 닿는 부드러운 감촉을 만끽했다. 딱딱한 침대 시트가 아니라, 바로 옆에서 곤히 잠든 소녀의 것이었다.`,
    );
    await era.printAndWait(
      `눈을 뜨지 않아도 ${
        me.name
      }은(는) 곁에서 느껴지는 달콤한 향기를 통해 대강 짐작할 수 있었다. 지금 ${
        me.name
      }과(와) 베개를 나란히 하고 있는 존재는, 쓰러졌던 ${
        me.name
      }을(를) 보건실로 옮겨다 준 작은 ${urara.get_uma_sex_title()}였다.`,
    );
    era.println();

    await in_urara.say_as_unknown_and_wait(
      `자, 이제 막 깨어난 ${me_callname}는――`,
    );
    era.printButton(
      `일어나서 감사 인사를 해야 한다. ${
        me.name
      }은(는) 눈을 떠서 우선 ${urara.get_teen_sex_title()}의 상태를 살피기로 했다.`,
      1,
    );
    era.printButton(
      `하지만 역시 피곤하다. ${me.name}은(는) 눈을 감은 채, 모처럼 찾아온 이 안락함을 계속 누리기로 했다.`,
      2,
      { disabled: urara.sex_code === 1 },
    );

    if ((await era.input()) === 2) {
      await era.printAndWait(`이토록 마음이 편안했던 적은 참으로 오랜만인 것 같았다.`);
      await era.printAndWait(
        `눈을 감은 채, ${me.name}은(는) 그 온기의 근원을 향해 한 걸음 더 다가갔고 거의 ${urara.sex}를 품에 안을 듯한 자세가 되었다.`,
      );
      await era.printAndWait(
        `잠든 소녀의 부드러우면서도 건강한 육질과 소박한 꽃향기 같은 체취는 ${me.name}의 정신을 맑게 해주었다.`,
      );
      await era.printAndWait(
        `${urara.get_teen_sex_title()}의 지척에서 느껴지는 순진한 숨결이 ${
          me.name
        }의 목덜미를 간지럽혔고, 거리감을 상실한 이 접촉에 ${me.name}의 의식은 점차 깊이 빠져들었다.`,
      );
      await era.printAndWait(
        `${me.name} 역시 자신을 구해준 학생에게 이런 짓을 하는 것이 매우 부적절하며, 성인으로서 지나치게 천박한 행위임을 잘 알고 있었다.`,
      );
      await era.printAndWait(
        `다만 지금 ${me.name}의 뇌는 정신적 갈망 때문에, ${me.name}의 신체에 『한걸음 더』 나아가라는 지시를 강요하고 있었다.`,
      );
      await era.printAndWait(
        `황홀경 속에서, ${
          me.name
        }의 손가락이 작은 ${urara.get_uma_sex_title()}의 몸 위를 기어올랐다.`,
      );
      await era.printAndWait(
        `손끝에서 손바닥으로 이어지는 애무를 통해, ${me.name}은(는) 촉각으로 ${urara.sex}의 의외로 가냘픈 윤곽과 피어나는 꽃봉오리 같은 곡선을 더듬었다.`,
      );
      await era.printAndWait(
        `한 손은 ${urara.get_teen_sex_title()}의 앞가슴에 솟아오른 둔덕을 지나, ${urara.get_teen_sex_title()}의 부드러운 뺨과 입술을 훑고 부드러운 머리카락을 따라 흘러내렸다.`,
      );
      await era.printAndWait(
        `손가락은 귀 가리개 안으로 파고들어 그 안에 숨겨진 작고 부드러운 귀의 감촉을 즐겼다.`,
      );
      await era.printAndWait(
        `다른 한 손은 매끄러운 뒷덜미와 등줄기를 타고 내려가, ${urara.get_teen_sex_title()}의 꼬리털에 덮인 꼬리 뿌리 부근에 다다랐다.`,
      );
      await era.printAndWait(
        `예민한 꼬리 뿌리뿐만 아니라, 손가락을 조금만 비틀면 체육복의 꼬리 구멍을 통해 안으로 들어갈 수도 있었다.`,
      );
      await era.printAndWait(
        `심지어 한 겹의 옷만 더 젖히면, 더 깊고 비밀스러운 『화원』에 닿을 수도 있을 텐데……`,
      );
      await era.printAndWait(
        `하지만 ${
          me.name
        }이(가) 더 깊이 파고들려던 순간, 깊은 잠에 빠져 있던 작은 ${urara.get_uma_sex_title()}의 귀와 꼬리가 파르르 떨리기 시작했다.`,
      );
      await era.printAndWait(
        `신체의 미세한 떨림과 함께 목구멍에서 가느다란 숨소리가 새어 나왔다. 이것은 꿈에서 깨어나기 직전의 징조였다.`,
      );
      await era.printAndWait(
        `더 이상 욕심을 부려서는 안 될 것 같았다. 반쯤 꿈을 꾸던 ${me.name}은(는) 마침내 이성을 되찾았고, 이제 눈을 떠야 할 때임을 깨달았다――`,
      );
      era.printButton('눈을 뜬다', 1);
      await era.input();
    }

    await era.printAndWait(
      `눈을 뜨는 순간, 연한 벚꽃색이 시야 가득 들어왔다. 활짝 핀 벚꽃 형태의 눈동자가 ${me.name}과(와) 마주쳤고, 천진하지만 멍청하지는 않은 은은한 빛을 내뿜고 있었다.`,
    );
    await era.printAndWait(
      `그 맑은 눈은 일말의 편견이나 의심 없이 ${me.name}을(를) 관찰하더니, 이내 ${me.name}을(를) 향해 아무런 악의 없는 미소를 지어 보였다.`,
    );
    await era.printAndWait(
      `벚꽃색 포니테일과 붉은 리본을 흔들며, 아이처럼 천진난만한 작은 ${urara.get_uma_sex_title()}는 ${
        me.name
      }보다 한발 앞서 보건실 침대 위로 몸을 일으켰다.`,
    );
    await era.printAndWait(
      `몸에 달라붙은 체육복 너머로 아직 어린아이 같으면서도 의외로 균형 잡힌 몸매가 드러났다. 침대에 무릎을 꿇고 앉은 허벅지와 엉덩이는 어린 외모와 대조적으로 풍만하고 둥글었다.`,
    );
    await era.printAndWait(
      `터질 듯한 육감은 삼각 하의를 꽉 채우는 동시에, 얇은 천 위로 허리와 엉덩이에 선명한 자국을 남기고 있었다.`,
    );
    await era.printAndWait(
      `여기에 거리감을 잴 수 없는 동안의 얼굴이 더해져, 아직 미숙함에도 불구하고 ${urara.sex}는 자신만의 독특한『여성』으로서의 매력을 발산하고 있었다.`,
    );
    await era.printAndWait(
      `불가항력이라는 핑계가 있더라도, 귀여운 얼굴에 핀 순수하기 짝이 없는 미소는 방금 전까지 ${urara.sex}와 한 침대에 누워 즐거움을 느꼈던 ${me.name}에게 지울 수 없는 죄책감을 안겨주었다.`,
    );
    await urara.say_as_unknown_and_wait(
      '트레이너 맞지? 몸은 좀 어때? 트레이너라는 직업은 정말 힘들구나! 하지만 너무 무리하지 않아도 괜찮아!',
    );
    await era.printAndWait(
      `귀여운 미소와 스스럼없는 배려를 담아, 벚꽃색의 작은 ${urara.get_uma_sex_title()}는 아무런 경계심 없이 ${
        me.name
      }에게 다가왔다.`,
    );
    await era.printAndWait(
      `그제야 ${me.name}은(는) 정신이 들었다. ${
        me.name
      }은(는) 아직 자신을 도와준 이 ${urara.get_uma_sex_title()}의 이름을 알지 못했다.`,
    );
    era.println();

    era.printButton(`「고마워, 그런데 너는……?」`, 1);
    await era.input();

    await urara.say_and_wait(
      `나는 하루 우라라 라고 해! 트레이너가 거기서 쓰러질 것 같은데 주변에 아무도 없길래, 내가 보건실까지 옮겨왔어!`,
    );
    await urara.say_and_wait(
      `그런데 트레이너가 깨어나길 기다리다가 나도 모르게 옆에서 잠들어 버렸지 뭐야, 에헤헤~`,
    );
    await era.printAndWait(
      `정말로 정성 어린 간호를 받은 모양이었다. ${urara.sex}에게 더욱 미안한 마음이 들었다.`,
    );
    await urara.say_and_wait(`맞다! 트레이너 선생님! 다음에 내 선발 레이스를 보러 오지 않을래?`);
    era.println();

    era.printButton(`「선발 레이스? 네가?」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}은(는) 조금 의아한 눈빛으로 우라라를 바라보았다. ${urara.sex}의 각오가 부족하거나 훈련을 게을리한다고 의심해서가 아니라……`,
    );
    await era.printAndWait(
      `한눈에 보아도 하루 우라라라는 이름의 이 ${urara.get_uma_sex_title()}는 빛나는 자질을 품고 있었으나, 현재의 ${
        urara.sex
      }는 도저히 잘 달릴 수 있을 것 같지 않아 보였기 때문이다.`,
    );
    await era.printAndWait(`적어도 지금으로서는, 결과는 불 보듯 뻔했다.`);
    await urara.say_and_wait(`응! 내가 1등으로 들어올 거야! 그런 느낌이 들었거든! 그러니까……`);
    await era.printAndWait(
      `작은 ${urara.get_uma_sex_title()}는 흥분해서 무언가 더 말하려다가, 우연히 벽에 걸린 시계를 보았다.`,
    );
    await urara.say_and_wait(
      `아! 벌써 시간이 이렇게 됐네! 그럼 트레이너도 건강 조심해! 다음에 또 봐!`,
    );
    await era.printAndWait(
      `갑자기 확인한 시간 때문에 우라라와의 대화는 그렇게 어영부영 중단되었다.`,
    );
    await era.printAndWait(
      `그건 단순히 느낌만으로 되는 게 아니라고 말하고 싶었지만, 마음 한구석에서 ${urara.sex}의 달리기를 보고 싶다는 작은 호기심이 생겨 ${me.name}은(는) 끝내 입을 떼지 못했다.`,
    );
    await era.printAndWait(
      `다음에 정말로 가보는 게 좋을지도 모르겠다. 우라라가 보건실을 깡충깡충 뛰어 나가는 것을 배웅하며, ${me.name}은(는) 다시 눈을 감았다.`,
    );
    await era.printAndWait(`역시 아직도 피곤했다.`);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      `보고 싶다는 마음 때문인지, 아니면 스스로도 깨닫지 못한 어떤 감정 때문인지, ${me_callname} (${me.name})은(는) 결국 훈련장을 찾았습니다.`,
    );
    era.drawLine();
    await say_by_passer_by_and_wait(
      '트레이너 A',
      '저 아이, 밝은 에너지는 넘치지만 역시……',
    );
    await say_by_passer_by_and_wait(
      '트레이너 B',
      `그러게 말이야. 저런 아이를 훈련시키는 게 얼마나 고생일지 안 봐도 비디오네. 이곳에 어울리지 않는 것 같아.`,
    );
    await say_by_passer_by_and_wait(
      '트레이너 C',
      '사람을 기분 좋게 만드는 구석은 있지만, 그것만으로는 의미가 없지.',
    );
    await era.printAndWait(
      `주변 사람들의 수군거림을 따라 ${me.name}은(는) 경기장을 바라보았다. 아니나 다를까, ${me.name}의 예감이 맞았다.`,
    );
    await era.printAndWait(
      `우라라의 레이스는 이미 시작되었고, 가장 기본적인 선발 레이스임에도 불구하고 ${urara.sex}는 꼴찌로 뒤처져 있었다.`,
    );
    await era.printAndWait(
      `주변의 트레이너들 역시 당연하다는 듯 ${
        urara.sex
      }에게 오랫동안 시선을 두지 않았다. 가끔 시선이 머물더라도 이내 다른 ${urara.get_uma_sex_title()}에게로 옮겨갔다.`,
    );
    await era.printAndWait(
      `하지만 그저 짧은 관심을 두려 했을 뿐인 ${me.name}은(는) 지금, 오직 ${me.name}만이 바라보고 있는 ${urara.sex}에게 매료되고 말았다.`,
    );
    await era.printAndWait(
      `결코 달리기를 포기하지 않는 그 뒷모습을 보며, ${me.name}의 가슴 속에서 미세한 고동이 서서히 모이기 시작했다……`,
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      `그렇다면, 지금의 ${me_callname}는, 아니, 지금의 ${me.name}은(는)……?`,
    );
    era.printButton(`「아직은 잘 모르겠지만, 왠지 계속 지켜보고 싶어.」（모집 시도）`, 1);
    era.printButton(
      `「우라라는 착한 아이지만 너무 약해. 재능도 없는 것 같고. 하지만 언젠가 더 좋은 사람이 우라라를 도와주겠지.」（모집 포기）`,
      2,
    );
    if ((await era.input()) === 2) {
      await era.printAndWait(
        `${me.name}은(는) 가슴 속 미세한 고동을 털어내고 훈련장을 떠났다.`,
      );
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        `그렇게 ${me_callname}는 뒤도 돌아보지 않고 훈련장을 떠나버렸습니다――`,
      );
      await in_urara.say_as_unknown_and_wait(`……하아……`);
      await in_urara.say_as_unknown_and_wait(
        `당신에게도 지금은 그저 변덕이었나 보군요. 이야기는 이렇게 서둘러 막을 내리게 되었습니다.`,
      );
      await in_urara.say_as_unknown_and_wait(
        `하지만 이곳은 언제나 당신을 위한 만남의 기회를 남겨둘 테니까요, 그러니……`,
      );
      await in_urara.say_as_unknown_and_wait(
        `다음번에, 만약 그 벚꽃색에 한 번이라도 마음이 흔들린 적이 있다면, 다시 한번 시도해 보세요.`,
      );
      sys_change_attr_and_print(0, attr_enum.endurance, 1);
      return true;
    }
    era.drawLine();
    await era.printAndWait(
      `마음속 고동에 따라, ${me.name}은(는) 그 작은 실루엣을 계속 지켜보기로 결심했다.`,
    );

    await era.printAndWait(
      `\n꼴찌로 달리고 있음에도 불구하고, 하루 우라라는 전력을 다하고 있었다. 분명 이를 악문 표정임에도 불구하고 그 안에는 즐거움이 가득했다.`,
    );
    await era.printAndWait(
      `${
        urara.sex
      }는 앞서가는 누군가를 쫓는 것도, 필사적으로 누군가를 추월하려는 것도 아니었다. 『하루 우라라』라는 이름의 ${urara.get_uma_sex_title()}는 그저 전력을 다해 달리는 행위 자체를 즐기고 있었다. 그뿐이었다.`,
    );
    await era.printAndWait(
      `영혼이 고동치는 이유가 점차 명확해졌다. 비록 여전히 꼴찌였지만, ${urara.sex}를 응원하고 싶은 마음이 ${me.name}의 내면을 가득 채웠다.`,
    );
    await era.printAndWait(
      `자신도 모르게 터져 나온 함성과 함께, 고조된 감정은 생각보다 먼저 행동으로 옮겨져 현실이 되었다.`,
    );
    await era.printAndWait(
      `하지만 아무리 생각해도 이건 그저 평범하고, 하루에도 몇 번씩 열리는 선발 레이스일 뿐이다. 그런 레이스의 꼴찌에게 소리를 지르는 것은 상식적으로 이해하기 힘든 일이었다.`,
    );
    await era.printAndWait(
      `그럼에도 불구하고 그런 세속적인 생각 따위가 ${me.name}을(를) 멈출 수는 없었다. 적어도 지금 이 순간, ${me.name}은(는) 그런 것 따위 상관없었다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 이상한 사람 취급이나 경멸 섞인 시선을 받을 각오가 되어 있었다. 마치 도저히 닿을 수 없는 마지막 거리를 오를 때 타인들이 보내던 그 시선들처럼.`,
    );
    await era.printAndWait(
      `그러나 ${me.name}은(는) 놀라운 광경을 목격했다. ${
        me.name
      }의 외침을 시작으로 더 많은 ${urara.get_uma_sex_title()}들이 성원을 보내기 시작했고, 심지어 몇몇 트레이너들까지 그 뒷모습을 응원하기 시작한 것이다.`,
    );
    await era.printAndWait(
      `작은 물결이 점차 퍼져 나갔고, 마지막 거리는 함성 속에서 조금씩 좁혀졌다. 이 함성의 물결 중심에 선 ${me.name}의 마음속에 벅찬 감동이 밀려왔다――`,
    );
    await era.printAndWait(
      `전력을 다하는 저 벚꽃색 소녀의 모습에는, 직업적 조건이 맞아서 선택한 「${me.name}」뿐만 아니라, 열정과 용기 때문에 트레이너가 되기로 결심했던 원래의 「${me.name}」도 있었다.`,
    );
    await era.printAndWait(
      `처음의 그 사람은 단순히 돈이나 명예를 위해, 혹은 뛰어난 성적을 낼 ${urara.get_uma_sex_title()}를 육성해 실적을 쌓기 위해서만 이곳에 온 것인가?`,
    );
    await era.printAndWait(`그것만이 전부는 아니지 않은가?`);
    era.drawLine();

    await in_urara.say_as_unknown_and_wait(`비록 공상가의 탁상공론처럼 들릴지도 모르겠지만……`);
    await in_urara.say_as_unknown_and_wait(`……`);
    await in_urara.say_as_unknown_and_wait(
      `……하지만 결과만으로 꿈과 열정을 가늠할 수는 없는 법입니다.`,
    );
    await in_urara.say_as_unknown_and_wait(
      `실적이 없으면 남들에게 뒤처질지도 모릅니다. 결과가 곧 모든 것을 대변할지도 모릅니다――`,
    );
    await in_urara.say_as_unknown_and_wait(
      `하지만 지금 이 순간, 당신은 자신이 단순히 결과만을 위해 여기까지 온 것이 아님을 『실수로』 기억해 냈습니다. 비록 잃는 것이 있더라도 두려워해서는 안 된다는 것을요.`,
    );
    await in_urara.say_as_unknown_and_wait(
      `강가의 모래 속에 숨겨진 작은 사금은 가치가 없을지도 모르지만, 누군가 집어 든다면 여전히 반짝일 수 있습니다.`,
    );
    era.drawLine();

    await era.printAndWait(
      `레이스를 마친 참가자들이 경기장을 빠져나가자, 동료들은 가장 앞선 성적으로 들어온 ${urara.get_uma_sex_title()}를 영입하기 위해 금세 흩어졌다.`,
    );
    await era.printAndWait(
      `모여있던 ${urara.get_uma_sex_title()}들 또한 다음 레이스를 준비하기 위해 바삐 움직였고, 현장에는 아직 떠나지 않은 ${
        me.name
      }과(와) 우라라만이 서로를 마주 보고 있었다.`,
    );
    await era.printAndWait(
      `결승선을 통과하기 전부터 첫 함성의 주인공이 ${
        me.name
      }임을 알아챘던 작은 ${urara.get_uma_sex_title()}는, 지금 순수하기 짝이 없는 미소를 띠며 ${
        me.name
      }에게 손을 흔들며 달려오고 있었다.`,
    );
    await era.printAndWait(`여전히 그 맑은 미소는 마치 이른 봄의 아침 햇살이 이곳을 비추는 듯했다.`);
    await urara.say_and_wait(`아! 저번의 트레이너네! 정말로 보러 와줄 줄은 몰랐어!`);
    await era.printAndWait(
      `${
        me.name
      }의 곁으로 다가온 작은 ${urara.get_uma_sex_title()}는 기뻐하면서도 한편으로는 조금 놀란 눈치였다.`,
    );
    await urara.say_and_wait(
      `에헤헤~ 또 졌네! 그래도 마지막까지 달릴 수 있었고, 달리는 건 정말 즐거워! 그러니까 트레이너, 다음에도……`,
    );
    await era.printAndWait(
      `조금 쑥스럽게 말을 이어가는 우라라의 모습에서 ${me.name}은(는) 결심을 굳혔다.`,
    );

    era.printButton(`「우라라, 내 말을 들어줘.」`, 1);
    await era.input();

    await era.printAndWait(
      `활짝 핀 벚꽃이 담긴 우라라의 두 눈과 마주하며, 마음의 준비를 마친 ${me.name}은(는) ${urara.sex}에게 한 걸음 다가갔다.`,
    );
    await me.say_and_wait(
      `비록 험난한 길이 되겠지만, 만약 지금의 내가 우라라의 그 순수한 기대에 부응할 수 있다면――`,
      true,
    );

    await in_urara.say_as_unknown_and_wait(
      `이전에는 결코 품지 않았던 생각을 품고, 지금 이 순간 신념을 가진 ${me_callname}는 우라라에게 초대를 보냈습니다.`,
    );
    era.printButton(`「함께 훈련하자. 다음번엔 승리하기 위해서.」`, 1);
    era.printButton(`「네가 달리는 모습을 계속 보고 싶어. 그러니까…… 나의 담당이 되어줄래?」`, 2);
    if ((await era.input()) === 1) {
      sys_like_chara(52, 0, 10, false);
    } else {
      sys_love_uma(52, 1, false);
    }
    if (love_select === 3) {
      sys_love_uma(52, 1, false);
    }

    await era.printAndWait(
      `${
        me.name
      }의 제안을 들은 작은 ${urara.get_uma_sex_title()}는 촉촉한 눈을 크게 떴고, 벚꽃색 눈동자는 갑작스러운 제안에 놀라 가늘게 떨렸다.`,
    );
    await era.printAndWait(
      `비록 이내 순진한 수줍음이 배어 나왔지만, 우라라는 ${me.name}의 요청에 분명하게 대답했다.`,
    );
    await urara.say_and_wait(
      `사실 나, 지금까지 계속 혼자서 훈련해 왔거든. 그래서 정말 어떻게 해야 할지 잘 몰랐어!`,
    );
    await urara.say_and_wait(
      `하지만 트레이너가 곁에 있어 준다면 분명 더 빨리 달릴 수 있게 되겠지! 그러니까……`,
    );
    await era.printAndWait(
      `${
        me.name
      }이(가) 했던 것처럼 우라라도 한 걸음 다가왔다. 그리고 익숙하면서도 순수한 미소를 지으며, 작은 ${urara.get_uma_sex_title()}는 ${
        me.name
      }의 두 손을 꼭 잡았다.`,
    );
    await urara.say_and_wait(`그러니까 정말 기뻐! 앞으로 함께 힘내자! 트레이너!`);
    await era.printAndWait(
      `타오른 불꽃은 쉽게 꺼지지 않는 법이며, 스스로를 똑바로 직시할 수만 있다면 달리는 길은 여전히 앞으로 이어질 수 있다.`,
    );
    await era.printAndWait(
      `우라라의 찬란한 웃는 얼굴을 바라보며, ${me.name}은(는) 마음속으로 다시 한번 결의를 다졌다.`,
    );
    await era.printAndWait(
      `결과가 어떻든 간에, ${me.name}은(는) ${urara.sex}와 끝까지 함께하며 ${urara.sex}가 달려 나갈 미래를 지켜볼 것이다.`,
    );

    era.printButton(`「그러니까, 멈추지 마……」`, 1);
    await era.input();

    await era.printAndWait(
      `그렇게 우라라의 비명 섞인 외침과 함께, 방금 마음의 벽을 하나 더 넘어선 ${me.name}은(는) 다시 쓰러졌다――`,
    );
    await era.printAndWait(
      `지나치게 긴장이 풀린 탓에 갑자기 힘이 빠져버린 ${me.name}은(는), 이번에는 『멈출 수 없는』자세로 편안하게 바닥에 드러누웠다.`,
    );
    await era.printAndWait(
      `잠시 후 깨어나 보니 또다시 우라라와 한 침대에서 눈을 뜨게 된 사실은, 또 다른 이야기이다.`,
    );
    era.println();

    era.set('cflag:52:모집상태', recruit_flags.yes);
    era.set('callname:52:0', '트레이너');
    era.set('callname:0:52', '우라라');
    era.set('flag:현재상호작용캐릭터', 52);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 트레이너가 되었습니다!',
    ]);
    add_event(
      event_hooks.week_end,
      new EventObject(52, cb_enum.edu).set_arg('after_begin'),
    );
  }
};