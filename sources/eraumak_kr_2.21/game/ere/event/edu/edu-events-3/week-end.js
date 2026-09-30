const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const Edu3UntilSchoolAtrium = require('#/event/edu/edu-events-3/school-atrium');
const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const {
  get_skill_list,
  part_enum,
  part_names,
  touch_list,
} = require('#/data/ero/part-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const { get_filtered_talents } = require('#/data/info-generator');

module.exports = class extends Edu3UntilSchoolAtrium {
  async week_end(teio, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      event_marks = new TeioEduMarks();
    if (event_arg === 95 + 18 && era.get('love:3') >= 75) {
      await print_event_name('의지', teio);
      await era.printAndWait('비 내리는 밤, 정적만이 가득하다.');
      await era.printAndWait(
        `${
          me.name
        }은(는) 혼자 기숙사 안에서 컴퓨터 화면의 자료를 응시하며, 띄엄띄엄 노트를 작성하고 담당 ${teio.get_uma_sex_title()}의 다음 단계 훈련 계획을 수정하고 있었다. 사실 이 일은 ${
          me.name
        }이(가) 이미 끝낸 일이었다. 왠지 모르게 ${
          me.name
        }은(는) 다시 작업을 심야까지 끌었다. 마음속의 답답함을 달래기 위해서일까? 아니면 기계적인 노동으로 현실을 도피하고 있는 것일까?`,
      );
      await era.printAndWait(
        `키보드를 두드리는 소리는 점점 더 날카로워졌고, 그 소음이 고막을 타고 뇌리에 박혔다. ${me.name}은(는) 결국 팍 소리가 나게 화면을 덮어버리고, 양손으로 관자놀이를 가볍게 문지르며 눈을 감고 깊은 숨을 내뱉었다.`,
      );
      await era.printAndWait('……소리가 멈추지 않았다.');
      await era.printAndWait(
        `${
          me.name
        }은(는) 잠시 멍하니 있다가 재빨리 문으로 달려갔다. 도어스코프로 밖을 살짝 확인한 뒤 문을 열었다. 벨 소리의 잔향이 맴도는 열린 문틈 사이로, 칠흑 같은 어둠의 한복판에 온몸이 흠뻑 젖은 ${teio.get_uma_sex_title()} 한 명이 ${
          me.name
        } 앞에 서 있었다. 빗물이 우비를 타고 흘러내렸고, 길게 뻗은 흰색 앞머리 한 가닥이 물방울의 무게에 눌려 코끝에 걸쳐져 있었다. ${
          teio.sex
        }가 후드를 들어 올리는 동작에 따라, ${me.name}은(는) 생기를 잃은 푸른 눈동자를 마주했다.`,
      );
      await era.printAndWait(
        `이 순간, ${me.name}은(는) 근거 없는 확신이 들었다——자신은 오늘 밤 줄곧 ${teio.sex}를 생각하며, 기다리고 있었던 것만 같았다.`,
      );
      await era.printAndWait(
        `마음속의 안도감과 약간의 분노가 교차하는 가운데, ${me.name}은(는) 아무 말 없이 옆으로 비켜서며 ${teio.sex}를 방 안으로 들였다.`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 아무 말 없이 소파에 앉아, ${
          me.name
        }이(가) 김이 모락모락 나는 수건을 머리에 얹어 닦아주는 대로 가만히 있었다. ${
          me.name
        }은(는) 몇 번이고 말을 꺼내려 했으나 우물쭈물하는 웅얼거림만 나올 뿐이라 결국 포기했다. 둘 사이에 기묘한 정적이 흘렀다.`,
      );
      await era.printAndWait(
        `설령 ${
          me.name
        }이(가) 트레이너가 아니었더라도, 이 ${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}가 지금 붕괴 직전에 있다는 것쯤은 한눈에 알 수 있었을 것이다.`,
      );
      await era.printAndWait(
        `${
          teio.sex
        }는 생기 없이 앉아 두 손을 모으고 있었다. 그것은 기도가 아니라, 마치 의지할 곳을 찾는 듯 이마를 두 손에 바짝 대고 있는 모습이었다. 이 ${teio.get_teen_sex_title()}는 마치 고요한 어둠 속에 갇혀 모든 빛과 소리를 거부하고 있는 것 같아, ${
          me.name
        }은(는) ${teio.sex}가 정말로 이곳에 존재하는지조차 걱정이 될 정도였다.`,
      );
      await era.printAndWait(`——음, ${teio.sex}는 확실히 여기에 있었다.`);
      await era.printAndWait(
        `허리께에 전해지는 감촉이 ${teio.sex}의 존재를 현실에 고정시켰다. 꼬리 하나가 살며시, 조심스럽게 ${me.name}을(를) 휘감았다. 마치 물에 빠진 사람이 유일한 구명줄을 붙잡듯, ${me.name}의 몸을 단단히 에워쌌다.`,
      );
      era.printButton('「테이오……」', 1);
      await era.input();
      await era.printAndWait(
        `소리는 없었다. 오직 ${teio.get_teen_sex_title()}의 가늘게 떨리는 몸만이 ${
          me.name
        }에게 응답하고 있을 뿐이었다.`,
      );
      era.println();

      await me.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `${teio.get_teen_sex_title()}의 이런 모습은 본 적이 없었다. 평소 부드럽게 뻗어 있던 머리카락은 엉망으로 흐트러졌고, 초점 없는 눈동자는 흐릿했으며, 더욱 왜소해 보이는 체구는 호흡과 맥박에 따라 가늘게 떨리고 있었다. ${
          me.name
        }은(는) 다시 한번 ${
          teio.sex
        }의 이름을 불렀다. 아까보다 조금 크게, 하지만 너무 울리지 않도록 조절하며. 이번에는 반응이 있었다. 갑자기 ${
          teio.name
        }가 고개를 확 치켜들며 ${me.name}을(를) 정면으로 바라보았다. 마치 무언가를 확인하려는 듯 눈을 깜빡였다.`,
      );
      await era.printAndWait('그리고, 달려들었다.');
      await era.printAndWait(`작은 몸이 ${me.name}의 품 안으로 뛰어들었다.`);
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `흐느낌도, 눈물도 없었다. 하지만 분명히 ${teio.sex}는 그 충동을 억누르고 있었다.`,
      );
      await era.printAndWait(
        `정신적 의지가 조금이라도 무너지는 순간, ${
          teio.sex
        }에게 남은 마지막 저항 의식은 안개처럼 흩어질 것이다. ${teio.get_teen_sex_title()}는 멈추지 않고 끝없이 울기 시작할 것이다.`,
      );
      await era.printAndWait(
        `그것은 ${teio.name}라는 ${teio.get_uma_sex_title()}의 붕괴를 의미했다.`,
      );
      await era.printAndWait(
        '상식적으로 생각하면, 마음이 상했을 때 크게 한 번 우는 것이 무엇이 대수랴. 맞는 말이다. 눈물은 위대한 효능이 있어 번뇌를 씻어내고, 아무리 큰 고통이라도 완화해 준다.',
      );
      await era.printAndWait('눈물을 흘린 뒤에야 사람들은 다시 현실에 맞설 활력을 얻기도 한다.');
      await era.printAndWait(
        `하지만—— ${
          teio.name
        }라는 이름의 ${teio.get_uma_sex_title()}에게 있어서, 지금 그것은 택해서는 안 될 행동이었다.`,
      );
      await era.printAndWait(
        `여기서 ${me.name}에게 기대어 우는 것이, 책임을 회피하는 일은 아닐까?`,
      );
      await era.printAndWait(
        `데뷔 때부터 삼관을 선포하며 누구와도 비교할 수 없는 목표를 세웠던 ${teio.get_uma_sex_title()}가, 자신의 재능을 믿고 독창적으로 만들어낸 주법 때문에 넘어지고 말았다. 그리고 결국 자신의 고집 때문에 신뢰하는 트레이너(${
          me.name
        })에게 책임을 분담하게 했다. 이런 상황에서 무슨 면목으로 눈물을 흘리며 ${
          me.name
        } 곁에서 감정을 쏟아내고, 다시 한번 ${me.name}에게 도움을 구하겠는가?`,
      );
      await era.printAndWait(
        `차라리 지금 눈물을 흘리며 모든 것을 도피하는 것이 ${
          teio.name
        }에게는 행복일지도 모른다. 하지만 그렇게 된다면, 굳건하고 자신감 있게 세상 앞에 존재를 증명하던 그 ${teio.get_uma_sex_title()}는 패배를 인정하고 퇴장하는 셈이 된다.`,
      );
      await era.printAndWait(
        `그래서 ${teio.get_teen_sex_title()}는 그저 ${
          me.name
        }의 품에 기대어 입술을 깨물고 눈을 감은 채, 조금 우스꽝스러울 정도로 몸을 떨고 있을 뿐이었다.`,
      );
      await era.printAndWait(
        ` ${me.name}은(는) 부드럽게 ${teio.get_uma_sex_title()}의 등을 쓸어내리며 ${
          teio.sex
        }를 진정시키려 애썼다.`,
      );
      await era.printAndWait(
        `온기가 두 사람 사이를 오갔다. 평소에는 ${me.name}에게 치대며 작은 태양처럼 ${me.name}의 심신을 데워주던 담당 우마무스메가, 이제는 반대로 ${me.name}에 의해 따스함을 얻고 있었다.`,
      );
      era.println();
      await teio.say_and_wait('……트레이너.');
      era.println();
      await era.printAndWait(
        `${me.name}은(는) 습관적으로, 천천히 ${teio.sex}의 머릿결을 정리해주며 무의식적으로 응이라 대답했다.`,
      );
      era.println();
      await teio.say_and_wait('나…… 무슨 말을 해야 할지, 어떻게 해야 할지 모르겠어.');
      await era.printAndWait(` ${me.name}은(는) 침묵으로 답하며 손의 움직임을 늦췄다.`);
      era.println();
      await teio.say_and_wait('나에게 남은 건…… 이제 너뿐이야.');
      era.println();
      await era.printAndWait(
        `자랑이었던 다리도, 꿈을 짊어졌던 날개도, 전부 ${teio.get_teen_sex_title()}에게서 사라져 버렸다.`,
      );
      era.println();
      await teio.say_and_wait('가지고 싶어,너의 이 마음을.');
      era.println();
      await me.say_and_wait('그런 거라면, 얼마든지 줄게.');
      era.println();
      await teio.say_and_wait('그러면…… 부디 나의 것도 받아줘.');
      era.println();
      await era.printAndWait(
        `가느다란 손가락 하나가 조심스럽게 ${me.name}의 옷깃 안으로 들어와, 쇄골을 타고 가슴팍으로 미끄러져 내려갔다. ${me.name}은(는) 피부가 긴장으로 수축하는 것을 느꼈다.`,
      );
      await era.printAndWait(`${me.name}은(는) 결정했다——`);
      era.printButton(`「${teio.sex}를 밀치고 일어난다.」`, 1);
      era.printButton('「고개를 끄덕인다.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${me.name}은(는) ${teio.sex}의 양어깨를 붙잡고 신체로 자신의 답을 전했다. 그 후 택시를 불러 ${teio.sex}를 학원까지 바래다주었다. 가는 내내 침묵만이 흘렀다——어쩌면 ${me.name}이(가) ${teio.sex}의 얼굴을 차마 마주할 수 없었기 때문일지도 모른다.`,
        );
      } else {
        event_marks.abandon_disabled++;
        await era.printAndWait(
          `망설임. ${teio.sex}가 암시하는 말의 의미에 대해, ${me.name}은(는) 순수한 기쁨을 느꼈다. 그리고 흥분도.`,
        );
        await era.printAndWait(
          `하지만 이 끓어오르는 감정에 몸을 맡겨도 되는 것일까. 그것이 정말로 이 ${teio.get_teen_sex_title()}를 구원할 수 있는 길일까?`,
        );
        await era.printAndWait(
          `——그렇다 해도, ${me.name}은(는) 이미 모든 것을 ${teio.sex} 자신의 결단에 맡기기로 하지 않았던가.`,
        );
        await era.printAndWait(
          `이 결단이 ${teio.sex}가 내린 것이라면. ${me.name}이(가) 해야 할 일은—— 그저 ${teio.sex}의 결단을 존중하는 것뿐이리라.`,
        );
        era.println();

        await me.say_and_wait('난 그렇게 상냥한 사람이 아닐지도 몰라.');
        era.println();

        await teio.say_and_wait('괜찮아…… 나, 윽!');
        era.println();
        await era.printAndWait(
          `${me.name}은(는) ${teio.sex}의 턱을 들어 올리고 입을 맞췄다. 그것은 예의라기보다, ${teio.sex}의 감정을 조금이나마 완화해주기 위한 행동이었다.`,
        );
        await era.printAndWait(
          `하지만 이 행동은 ${me.name}의 내면 깊숙이 잠들어 있던 무언가를 해방하고 말았다.`,
        );
        await era.printAndWait(
          `뜨겁고 부드러운 감촉을 통해 ${
            me.name
          }은(는) ${teio.get_uma_sex_title()}의 맛을 보았다. 그렇다, 이것은 태생부터 타인의 탐욕을 부르는 생물이다! 그 속에 빠져들게 만드는 매혹이 ${
            me.name
          }의 정욕을 끌어내었다.`,
        );
        await era.printAndWait(
          `${teio.sex}을(를) 밑에 깔아뭉개고 그 몸을 지배하고 싶다는 충동—— 거부할 수 없는 파도가 이 순간 요동치며 심장에서 팔다리 끝까지 휘몰아쳤다.`,
        );
        await era.printAndWait('정신의 일부가 짐승으로 변해가고 있었다.');
        await era.printAndWait(
          `${me.name}의 변화를 느꼈는지, 품 안의 ${
            teio.name
          }가 떨고 있었다. 아랑곳하지 않고 ${
            me.name
          }은(는) 이미 시작된 동작을 이어갔다—— 혀를 내밀어 ${teio.get_teen_sex_title()}의 입술을 가르고 침범했다.`,
        );
        await era.printAndWait(
          `매끄러운 치아부터 탄력 있는 잇몸까지 핥아 내렸다. 혀로 ${teio.get_teen_sex_title()}의 윗입술을 감아 올리고 그 안쪽을 핥았다.`,
        );
        await era.printAndWait(
          `${teio.get_teen_sex_title()}를 대하는 올바른 태도라고는 하기 어려웠다. 하지만 멈추고 싶은 충동을 억제할 수 없었다.`,
        );
        await era.printAndWait(
          `${teio.name}은(는) 분명 겁에 질렸겠지만, ${teio.sex}는 순종적이었다. 반항하지도, 피하지도 않고 온순하게 몸을 ${me.name}에게 맡겼다.`,
        );
        await era.printAndWait(`그러한 태도가 ${me.name}의 야성을 더욱 부채질했다.`);
        await era.printAndWait(
          ` ${me.name}은(는) 얼굴을 밀착한 채 담당 우마무스메와 입술과 혀를 섞었고, 체액이 서로의 입 안에서 소용돌이쳤다. 구강을 무참히 침범당한 어린 우마무스메는 전전긍긍하면서도 지지 않겠다는 듯 부드러운 혀를 뻗어 침입자인 ${me.name}을(를) 옭아맸다.`,
        );
        await era.printAndWait('피가 끓어오른다. 대뇌는 사고 기능을 상실했다.');
        await era.printAndWait(
          `${teio.get_teen_sex_title()}의 얇은 혀가 속수무책으로 농락당했다. 과도한 폭압에 눈동자에는 눈물이 맺혔고—— 물방울이 맞닿은 입술 위로 떨어지며, 예상치 못한 거친 대우를 받고 있다는 사실을 대변했다.`,
        );
        era.println();

        await era.printAndWait('——더없이 달콤하다.');
        await era.printAndWait(`${me.name}의 내면 깊은 곳에서 만족스러운 포효가 터져 나왔다.`);
        await era.printAndWait(`그저 한 마리의 ${teio.get_sex_slave_title()}일 뿐이다.`);
        await era.printAndWait(
          `이런 생각이 들자, ${me.name}에게 원래부터 얼마 남지 않았던 「스승의 풍모」는 온데간데없이 사라졌다.`,
        );
        await era.printAndWait(
          `일정한 리듬에 맞춰 입술을 빨아들이며, 살과 살 사이의 좁은 틈에서 솟아나는 액체를 들이켰다. 질척이는 음란한 소리가 울려 퍼졌다. 온몸에 힘이 빠져 ${
            me.name
          }의 팔에 반쯤 안겨 있는 ${teio.get_teen_sex_title()}의 몸이 순식간에 뜨거워졌다—— 아마 부끄러움 때문이리라.`,
        );
        await era.printAndWait(`그것이 ${me.name}의 정욕을 더욱 자극했다.`);
        await era.printAndWait(
          `${me.name}은(는) ${teio.name}의 입안이 바짝 마를 때까지 계속해서 구강을 점령했다. 아니, 여전히 만족스럽지 않았다.`,
        );
        await era.printAndWait(
          `${
            me.name
          }은(는) ${teio.get_teen_sex_title()}의 혀를 휘감아 자신의 입안으로 가두었다. 살짝 깨물어 먹잇감의 움직임을 봉쇄했다.`,
        );
        await era.printAndWait(
          `나를 어떻게 할 셈이야. ${teio.sex}는 경직된 몸을 웅크린 채 ${me.name}에게 소리 없는 질문을 던졌다.`,
        );
        await era.printAndWait('——후후.');
        await era.printAndWait('말할 필요가 있나?');
        await era.printAndWait(
          `충동은 멈추지 않는다. 멈출 수도 없다. 마지막 마무리를 하듯, ${me.name}은(는) 혀끝으로 ${teio.name}의 혀 안쪽—— 그 가냘프고 연약한 영토를 끈적하게 훑었다.`,
        );
        era.println();

        await teio.say_and_wait(`——으응, 아아!`);
        era.println();

        await era.printAndWait(
          `그 비소마저 유린당했다는 사실을 깨닫고, ${teio.get_teen_sex_title()}는 마음이 어지러워졌다. ${
            teio.sex
          }는 어찌할 바를 몰라 무의식적으로 벗어나려 했지만, ${
            me.name
          }이(가) 두 팔에 힘을 주어 모으며 반항을 허락지 않겠다는 의지를 보이자 ${
            teio.sex
          }는 이내 조용해졌다…… 눈동자에는 두려움과 당혹감, 그러면서도 이를 외면할 수 없는 복잡한 표정이 서려 있었다.`,
        );
        await era.printAndWait(
          '평소에는 외고집에 아이 같던 담당 우마무스메가, 지금은 만지면 터질 듯한 요염한 존재로 변해 웅크리고 있었다.',
        );
        era.println();

        await me.say_and_wait('너도 이런 눈을 할 때가 있구나!', true);
        era.println();

        await era.printAndWait(
          `내면의 목소리가 울려 퍼졌다. 이토록 강압적으로 ${teio.get_uma_sex_title()}를 정복하는 것은 ${
            me.name
          }을(를) 황홀경에 빠뜨렸다. ${
            me.name
          }은(는) 멍한 상태에서 오직 자신만의 것인 입안의 부드러움을 탐닉했다. ${teio.sex}의 체액을 쥐어짜고 착취했다.`,
        );
        await me.say_and_wait('우리를 지금 이 꼴로 만든 건 바로 너야.', true);
        await me.say_and_wait(
          '너의 고집과 나의 방관이 이런 비참한 결말을 불러온 거라고.',
          true,
        );
        await me.say_and_wait('그러니, 대가를 치르게 해줘.', true);
        await era.printAndWait(
          `${teio.name}가 ${me.name}의 등에 두른 손이 힘없이 어루만졌다. 그것은 저항 없이 용서를 비는 손가락 끝의 떨림일 뿐이었다.`,
        );
        await era.printAndWait('무시했다.');
        await era.printAndWait(
          `갑자기 ${teio.get_teen_sex_title()}가 격렬하게 전율했다. 피부는 순식간에 고열이라도 난 듯 뜨겁게 달아올랐다.`,
        );
        await era.printAndWait(`모든 것은 ${me.name}의 손안에서 강제로 일깨워진 반응이었다.`);
        await era.printAndWait(`……절정에 달했군.`);
        await era.printAndWait(
          `이 극도로 저속한 단어가 ${me.name}의 마음속에서 낮게 울렸다.`,
        );
        await era.printAndWait(`계속해, 아직 전혀 만족하지 못했으니까.`);
        await era.printAndWait(
          `${teio.name}도 분명 그렇게 생각하고 있을 것이다. 옷조차 다 벗기지 않은 채 멈추는 것은 결코 ${teio.sex}가 바라는 바가 아닐 터다.`,
        );
        await era.printAndWait(
          `${teio.sex}는 ${me.name}에게 이렇게 해주길 바란다고 말했었다. ${
            me.name
          }이(가) 지금 하는 일은 자신의 성욕을 채우거나 감정을 배설하는 것이 아니라, 그저 ${teio.get_teen_sex_title()}의 마음을 따르고 있을 뿐이다.`,
        );
        await era.printAndWait('그렇다면, 다음 단계로 넘어갈 차례다.');
        await era.printAndWait(
          `${teio.get_teen_sex_title()}의 시선은 초점을 잃고 흩어졌고, ${me.name}은(는) ${
            teio.sex
          }의 주시 아래 옷으로 손을 뻗었다.`,
        );
        await era.printAndWait(
          `${teio.get_teen_sex_title()}의 몸은 마치 지난 시절처럼 충분히 뜨겁게 달아올라 있었다.`,
        );
        await me.say_and_wait(`${teio.name}—— 넌 역시 이런 여자였구나!`, true);
        await era.printAndWait(
          `머릿속이 검은 욕망으로 가득 찼다. ${me.name}은(는) 입가에 미소를 띠며 ${teio.sex}의 피부를 만졌다. 혀를 내밀었다. ${teio.sex}의 목덜미에 입을 맞추고 땀을 핥았다. 그대로 피부를 핥고 여린 살을 빨아올리며—— 흉측한 자국을 남겼다.`,
        );
        era.println();
        await teio.say_and_wait('아아……');
        era.println();
        await era.printAndWait(
          `또 한 차례의 약탈을 당하며, ${teio.get_teen_sex_title()}는 꿈결에 빠진 듯 신음했다.`,
        );
        await era.printAndWait(
          `평소 그렇게 오만하고 고집 세며 경기장을 누비던 우마무스메도—— 결국 이런 ${teio.get_phy_sex_title()}에 불과했다!`,
        );
        await era.printAndWait(
          `${me.name}에게 고통을 안겨주었던 이 작은 존재가, 이제는 달콤하고 부드러운 어린양이 되어 ${me.name} 앞에 놓여 있었다!`,
        );
        await era.printAndWait(
          `${me.name}의 억눌리지 않는 내면의 한구석이 아무리 추악하다 할지라도…… 설마 ${teio.sex}에게 책임이 조금도 없다고 할 수 있을까! 태양 아래 그림자가 생기는 것은 당연한 진리가 아닌가!`,
        );
        await era.printAndWait(
          `${me.name}은(는) 하얀 피부 위를 손으로 훑어 내려갔다. 아직 다 자라지 않은 가슴의 융기 위를 덮었다.`,
        );
        await era.printAndWait(
          '손바닥으로 그 위를 누르며 가볍게 희롱했다. 손가락 끝으로 분홍색 돌기를 매만졌다.',
        );
        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 안달이 난 듯 몸을 뒤척였다. 이것은 분명 ${
            me.name
          }을(를) 유혹하는 몸짓이었다. ${me.name}은(는) 그렇게 생각하며, ${teio.get_teen_sex_title()}의 부상 부위를 피해 아직 덜 발달한 엉덩이를 문질렀고, 다른 부위들을 거칠게 다루기 시작했다. 예고도 없이, 아직 단단한 가슴을 잔인하게 유린했다.`,
        );
        era.println();
        await teio.say_and_wait('아윽……');
        era.println();
        await era.printAndWait(
          `${teio.name}가 나직하게 비명을 질렀다. 당연한 반응이다. ${teio.name}의 몸은 이런 대우를 감당할 만큼 익숙해져 있지 않았다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 알면서도 저지르고 있었다. 오히려 이 비통함을 갈구했기에 그렇게 행동했다.`,
        );
        await era.printAndWait(
          `그래서 계속했다. ${teio.get_teen_sex_title()}의 두 번째 은밀한 부위를 철저하고 거칠게 주물렀다. 정욕이 고조되어 가슴 위에는 마치 기름이라도 바른 듯 윤기가 흘렀고, ${
            teio.sex
          }의 적당한 사이즈와 어우러져 마치 잘 익은 달걀 프라이처럼 유혹적이었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 입술을 반대쪽 가슴으로 옮겨 빨아들였고, 또다시 음란한 흔적을 남겼다.`,
        );
        await era.printAndWait(
          `${teio.name}는 가련한 눈빛으로 ${me.name}을(를) 바라보았다. 순간적으로 혈관이 터질 듯 팽창했다.`,
        );
        await era.printAndWait(
          `아무런 저항도 하지 못하는 ${teio.get_teen_sex_title()}를 마주하자 내면의 어두운 면이 극치에 달했다.`,
        );
        await era.printAndWait(
          `음, 분명 ${teio.sex}가 의도적으로 ${me.name}의 정열을 자극하고 있는 것이리라. 정말 완벽한 암컷이 아닌가.`,
        );
        await era.printAndWait('그럼…… 이제 본론으로 들어갈까.');

        begin_and_init_ero(0, 3);
        await quick_make_love(
          new EroParticipant(0, part_enum.mouth),
          new EroParticipant(3, part_enum.mouth),
          false,
        );
        if (teio.sex_code !== 1) {
          set_palam_to_max(3, part_enum.virgin);
        } else {
          set_palam_to_max(3, part_enum.penis);
        }
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(3, part_enum.breast),
          false,
        );
        await print_ero_page(3, true);
        end_ero_and_train();

        era.printButton('「미안해」', 1);
        await era.input();

        await teio.say_and_wait('으으응——!');
        era.println();
        await era.printAndWait(
          `결국, ${me.name}은(는) 스스로를 제어하지 못한 채 장장 4시간 동안이나 멈추지 않았고, 이는 확실히 과한 처사였다.`,
        );
        await era.printAndWait(
          `${
            me.name
          }의 끊임없는 사과와 다짐 끝에, 어린 ${teio.get_uma_sex_title()}는 겨우 ${
            me.name
          }의 사과를 받아들였고 침대에 누워 잠이 들었다.`,
        );
        await era.printAndWait(`${me.name} 또한 씻고 나서 옷을 입은 채 자리에 누웠다.`);
        await era.printAndWait(
          `눈을 감는 순간, 무언가가 다가와 ${me.name}의 몸에 달라붙는 느낌이 들었다.`,
        );
        await era.printAndWait(
          `(${teio.name}의 육체가 매우 민감해졌다...)`, //한판 커스텀-비활성화 이벤트 활성화 
        );
        get_skill_list(teio.sex_code).forEach((e) =>
          era.set(`abl:3:${e}`, Math.min(era.get(`abl:3:${e}`) + 1, 5)),
        );
        get_filtered_talents(teio.sex_code, 60)
          .filter((talent_id) => era.get(`talent:3:${talent_id}`) < 1)
          .forEach((talent_id) => era.set(`talent:3:${talent_id}`, 1));
        touch_list
          .filter((e) => e !== part_enum.sadism)
          .forEach((e) =>
            era.set(
              `abl:3:${part_names[e]}숙련`,
              Math.min(era.get(`abl:3:${part_names[e]}숙련`) + 1, 5),
            ),
          );
        sys_like_chara(3, 0, 12, true, 1) && (await era.waitAnyKey());
      }
    } else if (event_arg === 143 + 5 && event_marks.good_end === 1) {
      event_marks.good_end++;
      await print_event_name('어둠이 물러나고, 빛이 비춰지다', teio);
      await era.printAndWait(
        ` ${me.name}은(는) 길을 걷고 있었고, 땀에 젖은 셔츠가 ${me.name}의 몸에 딱 달라붙어 있었다.`,
      );
      await era.printAndWait(
        `조금 앞서 걷고 있는 것은 ${me.name}의 담당 우마무스메, 토카이 테이오다. ${teio.sex}는 ${
          me.name
        }의 손을 잡고, ${teio.get_uma_sex_title()} 치고는 조금 느리지만 ${
          me.name
        }에게는 꽤 운동이 될 법한 속도로 걷고 있었다. ${me.get_couple_title()}의 손바닥이 맞닿아 있었고, 이따금 가볍게 흔들렸다. 지평선 너머 태양의 잔광이 이마에 닿았고, ${
          me.name
        }은(는) 대리석으로 닦인 오솔길을 밟으며 앞을 응시했다. ${
          teio.sex
        }의 하얀 앞머리 위로 옅은 금빛 광채가 스쳐 지나가는 것이 보였다.`,
      );
      await era.printAndWait(
        `계단 앞에 이르자 ${teio.sex}는 발걸음을 멈추고 잠시 쉬었고, ${me.name}도 따라 멈춰 서서 눈앞의 풍경을 바라보았다.`,
      );
      await era.printAndWait(
        '황혼 아래, 대지는 태양의 마지막 빛을 빌려 스스로를 감싸 안았고, 울퉁불퉁한 표면 위로 수많은 금실이 흘러내리는 옷을 입은 듯했다. 빛을 반사하는 쌓인 눈은 없었지만, 이제 막 고개를 내민 초록빛 새싹들이 탐욕스럽게 에너지를 흡수하고 있었다.',
      );
      await era.printAndWait('봄이 오려 하고 있었다.');
      await era.printAndWait(`${me.get_couple_title()}의 꿈도 끝이 났다.`);
      await era.printAndWait('이제 말할 때가 되었다……');
      era.println();

      era.printButton('「이 순간을 너무 오래 기다려 왔어—— 우리 둘 다.」', 1);
      await era.input();

      await teio.say_and_wait('그러게.');
      era.println();

      await teio.say_and_wait(
        '봄 텐노상 때 무서웠던 기억이 나. 신체적인 고통이나 질병 때문이 아니라—— 처음 가졌던 소망이 영원히 물거품이 될지도 모른다는 생각 때문에.',
      );
      await teio.say_and_wait('그리고 가장 최악이었던 건…… 내 공포가 현실이 됐다는 거야.');
      era.println();

      await era.printAndWait(
        `석양을 등지고 ${teio.get_teen_sex_title()}는 양팔을 벌려 기지개를 켜며 천천히 말을 이어갔다. 빛이 내리쬐며 ${
          teio.sex
        }의 그림자가 ${me.name}의 얼굴 위에 드리워졌다. ${me.name}은(는) 침묵했고, 뇌리에는 지난날의 온갖 장면들이 스쳐 지나갔다. ${
          teio.sex
        }가 나락으로 떨어졌을 때, 방황했을 때, 고난을 겪었을 때. ${
          me.name
        }은(는) 그 모든 것을 지켜보면서도 어찌할 도리가 없었고, 오직 환상 속의 희망만을 품은 채 이를 악물고 ${
          teio.sex
        }와 함께 버텨왔다.`,
      );
      await era.printAndWait('타협하지 않고, 포기하지 않으며.');
      era.println();

      await teio.say_and_wait(
        '하지만 난—— 우리는 함께 버텨냈어. 지금 내 곁에는 네가 있고, 조명이 있고, 관중들이 있고, 꿈이 있어.',
      );
      era.println();

      await teio.say_and_wait('우리가 예전에 굳게 믿었던 한 가지가—— 지금 현실이 되었으니까.');
      era.println();

      era.printButton('「테이오.」', 1);
      await era.input();

      await teio.say_and_wait('왜?');
      era.println();

      era.printButton('「너…… 믿고 있었어?」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.get_uma_sex_title()}는 ${
          me.name
        }에게 바로 대답하는 대신, 석양을 향해 고개를 숙였다가 꼬리를 살짝 흔들며 뒤를 돌아 미소 지었다.`,
      );
      era.println();

      await teio.say_and_wait('지금까지 단 한 번도, 의심한 적 없어.');
      era.println();

      await era.printAndWait(
        `뒤이어 ${teio.sex}의 아름다운 웃음소리가 들려왔고, ${me.name}도 모르게 따라 웃고 말았다. 두 사람은 손을 맞잡고 계속해서 앞으로 나아갔다.`,
      );
      await era.printAndWait(
        `${me.get_couple_title()}의 이야기는 앞으로도 계속될 것이다.`,
      );
      era.println();
      era.set('status:3:다리부상', 0);
      if (era.get('talent:3:자신감') === 1) {
        era.set('talent:3:자신감', 0);
        era.print([teio.get_colored_name(), '은(는) 더 이상 [자격지심] 이 아니다!']);
      }
      era.print([
        teio.get_colored_name(),
        '의 ',
        {
          color: buff_colors[3],
          content: '[다리부상]',
        },
        '이 완치되었다!',
      ]);
      sys_like_chara(3, 0, 20, true, 2);
      await era.waitAnyKey();
    }
  }
};