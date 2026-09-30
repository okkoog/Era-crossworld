/**
 * @file 토카이 테이오 - 애정
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const talent_desc = require('#/data/desc/talents.json');
const {
  get_skill_list,
  part_enum,
  part_names,
  touch_list,
} = require('#/data/ero/part-const');
const { trained_talent_names } = require('#/data/ero/status-const');
const { get_filtered_talents } = require('#/data/info-generator');

module.exports = class extends CustomizedLove {
  async 49(teio, me, callname) {
    await print_event_name('태동', teio);
    await teio.say_and_wait('……잘 모르겠어.');
    await teio.print_and_wait([
      callname,
      '를 보기만 해도 왠지 모르게 심장이 두근거려. 마치 레이스 전 같은 반응이야…… ',
      me.sex,
      '가 다른 ',
      teio.get_phy_sex_title().substring(0, 1),
      '자랑 대화하는 걸 보면 왠지 기분이 안 좋고, 달리기를 마친 후에 ',
      me.sex,
      '가 미소 지으며 다가올 때면 몸이 더 뜨거워져……',
    ]);
    await teio.say_and_wait('으으— 대체 왜 이러는 거야!');
    await teio.print_and_wait(
      `친구들에게 물어봐도, ${teio.sex}들은 얼굴을 붉히며 피하거나 대충 말을 돌려버리고, 아니면 실실 웃기만 할 뿐 제대로 설명해 주질 않아. 어떤 애는 반농담조로 혹시 트레이너를 좋아하게 된 거 아니냐고 진지하게 묻기도 하고. 정말이지, 그런 건……`,
    );
    await teio.print_and_wait('그런 걸 트레이너한테 물어볼 순 없잖아아아!!');
    await era.printAndWait(
      `침대 위에서 한참을 파닥거리던, 머리카락을 풀어헤친 ${teio.get_uma_sex_title()}가 가느다란 다리를 흔들며 발가락 끝으로 침대 가장자리를 톡톡 건드렸다.`,
    );
    await teio.say_and_wait('됐어, 설령 연애라고 해도 이 테이오 님에게 불가능이란 없으니까.');
    await teio.print_and_wait(
      `${me.name}의 담당은 어느샌가 붉게 달아오른 얼굴을 들고, 두 사람의 앞으로의 관계를 제멋대로 결정해 버렸다……`,
    );
    era.println();
    era.set('talent:3:감정활동', 1);
    era.print([
      teio.get_colored_name(),
      ' 이(가) ',
      { content: '[감성적]', title: `감성적：${talent_desc['감성적']}` },
      ' 이 되었다!',
    ]);
    sys_like_chara(3, 0, 20);
    await sys_love_uma_in_event(3);
  }

  async 74(teio, me) {
    await print_event_name('변하지 마', teio);
    await era.printAndWait(
      `오늘은 평소와 다름없는 하루다. ${me.name}은(는) 평소처럼 트랙에 서서 담당이 달리는 모습을 지켜보고 있다.`,
    );
    await era.printAndWait(
      `벌써 얼마나 지난 걸까? ${me.name}은(는) 문득 생각에 잠겼다. 공원에서 ${teio.sex}와 우연히 만난 뒤로 지금까지, 그리 긴 시간이 흐르지 않은 것 같으면서도 수많은 일을 함께 겪어온 것만 같다.`,
    );
    await era.printAndWait(
      `추억들이 하나둘 머릿속을 스쳐 지나간다. ${teio.sex}가 땀을 흘리며 필사적으로 훈련하던 모습, 눈을 가늘게 뜨며 짓던 행복한 미소, 이를 악물고 결승선을 통과하던 찰나의 모습, 청춘의 활력이 넘치는 모습들……`,
    );
    await era.printAndWait(
      `당시 자신은 대체 어떤 마음으로 수많은 사람 앞에서 ${teio.sex}를 가로채듯 계약했던 걸까? ${teio.sex}라면 내 커리어의 정점을 찍어줄 수 있을 거라 생각해서? 아니면 달리는 모습과 그 자신감 넘치는 태도에 매료되어서?`,
    );
    await era.printAndWait(
      `그것도 아니라면…… 단지 ${teio.sex} 본인을 보았기 때문에? 첫눈에 반해버려 반드시 이 아이의 담당이 되어야겠다는 충동이 일었기 때문일까?`,
    );
    era.println();
    await teio.say_and_wait(`트레이너?`);
    era.println();

    era.printButton('「응?」', 1);
    await era.input();

    await era.printAndWait(
      `${me.name}만의 담당 ${teio.get_uma_sex_title()}는 아주 자연스럽게 한쪽 손으로 달리기 중에 흩어진 머리카락을 쓸어 넘겼다. 한 손으로는 머리끈을 고쳐 매면서, 다른 한 손으로는 ${me.name}이 뚜껑을 따둔 물병을 가져가 조금씩 마시기 시작했다.`,
    );
    await era.printAndWait(
      `땀인지 물인지 모를 액체가 하얀 피부를 타고 흘러내리자, ${
        me.name
      }은(는) 황급히 시선을 돌렸지만, 그 시선은 ${teio.get_uma_sex_title()}가 머리를 쓸어 넘기며 드러난 뒷덜미에 머물고 말았다.`,
    );
    await teio.say_and_wait(`트레이너, ${me.name}, 왜 그래?`);
    era.println();
    await era.printAndWait(
      `${me.name}은(는) 미처 말을 고르기도 전에 무심결에 엉뚱한 말을 내뱉었다.`,
    );
    era.printButton('「어? 아! 아무것도 아니야, 그냥 널 어떻게 봐야 할지 생각하고 있었어.」', 1);
    await era.input();

    await teio.say_and_wait(`……?`);
    era.println();
    await era.printAndWait(
      `작은 ${teio.get_uma_sex_title()}는 웃음을 참지 못하고 물병을 내려놓았다. 그러고는 뺨을 발그레 붉힌 채 몸을 돌려 ${
        me.name
      }의 시선에 마주해왔다.`,
    );
    era.println();
    await teio.say_and_wait(
      `그래서, 트레이너 ${me.get_adult_sex_title()}은 나를 어떻게 보고 있는 거야?`,
    );
    era.println();
    await era.printAndWait(
      `${teio.sex}는 ${me.name}을(를) 뚫어지게 쳐다보았다. 그 눈빛에는 수줍음과 약간의 기대가 섞여 있었다.`,
    );
    era.println();
    await era.printAndWait(`${me.name}의 대답은——`);
    era.printButton(`「……아마 지금 내 입장에서는 말하면 안 되는 것일지도 모르겠네」(관계 진전)`, 1);
    era.printButton(
      `「우수하고 활발하고 귀엽지만, 가끔 말썽을 피우는 딸…… 아니면 여동생 정도려나」(관계 진전 중지)`,
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await teio.say_and_wait('그럼, 어떤 입장이 되고 싶은 거야?');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 눈동자를 굴리더니, 히히 웃으며 질문을 덧붙였다.`,
      );
      await era.printAndWait('이 꼬맹이가!');
      await era.printAndWait(`${me.name}은(는) 조금 당황하며 무심결에 속마음을 내뱉었다.`);
      await me.say_and_wait('하아…… 네가 계속 이런 식이면, 나중에 같이 살 때 어떡하냐.');
      await teio.say_and_wait('가, 같이?');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 당황한 기색으로 입가를 가렸고, ${
          me.name
        }은(는) 이판사판이라는 심정으로 말을 이었다.`,
      );
      await me.say_and_wait(
        '난…… 처음부터 줄곧 너와 함께 달리고 싶었어. 이 제안을 받아줄래?',
      );
      await teio.say_and_wait(`/////`);
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 두 눈을 감고 거칠게 숨을 몰아쉬더니, 깊은 한숨과 함께 손을 내리고 ${me.name}을(를) 직시했다.`,
      );
      await teio.say_and_wait('절대 마음 바꾸기 없기야! 무적의 테이오 님은 은근히 뒤끝이 있으니까!');
      era.println();
      const temp = get_random_entry(
        get_filtered_talents(teio.sex_code, 60).filter(
          (talent_id) => era.get(`talent:3:${talent_id}`) < 1,
        ),
      );
      if (temp) {
        era.set(`talent:3:${temp}`, 1);
        era.print([
          teio.get_colored_name(),
          ' 이(가) ',
          {
            color: buff_colors[2],
            content: `[${
              trained_talent_names[era.get(`talentname:${temp}`)][1]
            }]`,
          },
          ' 이 되었다!',
        ]);
      }
      sys_like_chara(3, 0, 20);
      await sys_love_uma_in_event(3);
    } else {
      await teio.say_and_wait(`그렇구나……`);
      await era.printAndWait(
        `${teio.get_uma_sex_title()}는 입술을 삐죽 내밀었고, ${
          me.name
        }은(는) 서둘러 헛기침을 하며 오늘의 훈련 내용을 읽어주기 시작했다.`,
      );
      era.set('cflag:3:호감거절', 74);
      await punish_rejecting_love(3);
    }
  }

  async 89(teio, me) {
    await print_event_name(
      era.get('status:3:다리부상') ? '계약 성립' : 'Together, forever',
      teio,
    );
    await era.printAndWait('트레이너 기숙사');
    if (era.get('status:3:다리부상')) {
      await era.printAndWait('침묵.');
      await era.printAndWait(
        `${
          me.name
        } 앞에 눈을 감은 채, 얼굴에 물방울이 맺히고 몸을 미세하게 떨고 있는 ${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}가 있다.`,
      );
      await era.printAndWait(
        `이윽고 ${me.name}은(는) 이전처럼 따뜻하게 데워진 부드러운 수건을 들고 ${teio.sex}의 몸을 닦아주기 시작했다. 그리고 빗과 드라이기를 들어 ${teio.sex}의 머리카락을 정성스레 정리해주었다.`,
      );
      await era.printAndWait(
        `그 일 이후로 ${teio.sex}는 자주 ${me.name}의 기숙사 욕실을 빌려 쓰러 왔다. 씻고 나온 뒤에는 ${me.name}이(가) 몸을 말려주고 간단한 케어까지 해주는 것이 이제는 습관이 되어버렸다.`,
      );
      await era.printAndWait(
        `뒷정리를 마친 ${me.name}은(는) 물건들을 옆 테이블에 놓아두고, 담당을 위한 정기적인 다리 마사지를 시작했다. 재활을 돕기 위함이다.`,
      );
      await era.printAndWait(
        `${
          me.name
        }의 굳은살 박힌 거친 손이 ${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}에게 가장 중요한 발과 종아리를 위아래로 훑으며, 때때로 적당한 힘으로 지압을 가했다.`,
      );
      await era.printAndWait(
        `매끄럽고 탄력 있는 피부의 촉감이 ${me.name}의 손끝에 전해진다. 겉보기에는 건강하고 아름다운 다리지만 실제로는 위태로움을 내포하고 있다. 이 다리들이 ${teio.sex}를 지탱하고, 달리고, 전장을 누비게 했다. 그런데 지금은……`,
      );
      era.println();
      await teio.say_and_wait('있잖아, 트레이너.');
      era.println();
      await era.printAndWait(
        `${me.name}은(는) 고개를 들었다. 마음속으로는 이미 ${teio.sex}가 무슨 말을 할지 짐작하고 있었지만, 그럼에도 대답했다.`,
      );
      await me.say_and_wait('왜 그래, 테이오?');
      era.println();
      await teio.say_and_wait('나…… 당신…… 앞으로, 어떻게 되는 걸까?');
      era.println();
      await era.printAndWait(
        `${teio.sex}는 턱을 살짝 내리고 자신의 다리를 바라보았다. 한때는 전우였지만 지금은 생기 없이 회복될 수 있을지조차 알 수 없는 다리를 보며, 동시에 ${me.name}을(를) 응시했다.`,
      );
      era.printButton(`「이것이 나의 대답이야.」(관계 진전)`, 1);
      era.printButton(`「……」(관계 진전 중지)`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${
            me.name
          }은(는) 상자 하나를 꺼냈다. ${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}가 반응하기도 전에 조심스럽게 ${
            teio.sex
          }의 왼발을 감싸 쥐고, 포장을 열어 그 안의 반지를 ${teio.sex}의 네 번째 발가락에 끼워주었다.`,
        );
        await era.printAndWait(
          `${me.name}이 직접 고른 토링은 사이즈가 딱 맞아, 잘 고정되면서도 발가락의 움직임에는 지장을 주지 않았다.`,
        );
        await era.printAndWait(
          `양손 끝으로 습관처럼 ${teio.get_uma_sex_title()}의 발 부위에 있는 혈점을 꾹꾹 눌러 혈액 순환을 돕고 나서,`,
        );
        await era.printAndWait(
          `이윽고 ${me.name}은(는) 고개를 들어 아래에서 위로 시선을 옮겼다. 붉게 물든 담당의 얼굴과 눈물이 맺힌 눈동자가 시선에 닿았다.`,
        );
        era.printButton('「받아줄래?」', 1);
        await era.input();
        await teio.say_and_wait('……응!');
        era.println();
        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 울음을 터뜨리며 웃음을 지었고, 두 팔을 벌렸다. ${me.name}은(는) 자리에서 일어나 ${
            teio.sex
          }를 꽉 껴안았다. 다시는 떨어지지 않겠다는 듯이.`,
        );
        era.println();
        if (!era.get('talent:3:신의발')) {
          era.set('talent:3:신의발', 1);
          era.print([
            teio.get_colored_name(),
            ' 이(가) ',
            {
              color: buff_colors[2],
              content: '[신의발]',
            },
            ' 을 획득했다!',
          ]);
        }
        touch_list
          .filter((e) => e !== part_enum.sadism)
          .forEach((e) =>
            era.set(
              `abl:3:${part_names[e]}숙련`,
              Math.min(era.get(`abl:3:${part_names[e]}숙련`) + 1, 5),
            ),
          );
        sys_like_chara(3, 0, 20);
        await sys_love_uma_in_event(3);
      } else {
        await era.printAndWait(
          `${me.name}은(는) 무슨 말을 하려 했을까? 무슨 말을 해야 했을까? 무슨 말을 할 수 있었을까? 결국 터져 나온 것은 한숨뿐이었다.`,
        );
        await era.printAndWait(
          `${
            me.name
          }은(는) 묵묵히 남은 마사지를 끝마쳤다. 일을 마친 후 조용해진 ${teio.get_teen_sex_title()}를 안아 내려준 뒤, 방문 앞까지 배웅했다.`,
        );
      }
    } else {
      await teio.say_and_wait(`하치미~`);
      era.println();
      await era.printAndWait(
        `${me.name}은(는) 대답하며 작은 ${teio.get_uma_sex_title()}를 자신의 품 안에 앉혔다. (${
          teio.sex
        }가 이리저리 부대끼며 소란을 피우지 못하게 하려고). 수건을 들어 숙련된 솜씨로 머리카락을 말려주었다.`,
      );
      await era.printAndWait(
        '동시에 다른 한 손도 쉬지 않고 마우스를 움직이며 컴퓨터의 훈련 파일을 살피고 있다.',
      );
      era.println();
      await teio.say_and_wait('으음……');
      era.println();
      await era.printAndWait(
        `작은 ${teio.get_uma_sex_title()}는 냉장고에서 꺼낸 하치미 드링크를 마시며, ${
          me.name
        }의 모니터 속 자료들을 함께 구경했다.`,
      );
      era.println();
      await me.say_and_wait('……');
      era.println();
      await era.printAndWait('더 이상은 못 참겠다.');
      await era.printAndWait(
        `방금 씻고 나온 ${teio.get_teen_sex_title()}의 향기, 허벅지에서 느껴지는 피부의 촉감, 수시로 아랫배를 간지럽히는 ${teio.get_uma_sex_title()}의 머리카락……`,
      );
      await era.printAndWait(`${me.name}은(는) 혈류가 특정 방향으로 쏠리는 생리적인 반응을 느꼈다.`);
      era.println();
      await teio.say_and_wait('트레이너~ 이 페이지 본 지 꽤 오래됐어.');
      era.println();
      await me.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${me.name}의 무릎 위에 앉아있던 그녀가 아주 자연스럽게 뒤로 몸을 기댔다. ${me.name}은(는) 온몸이 뻣뻣하게 굳었다.`,
      );
      await era.printAndWait(
        `이어서 ${teio.sex}의 머리가 ${me.name}의 가슴에 닿았다. 작고 귀여운 귀가 움찔거리며 한 바퀴 돌더니, ${me.name}의 심장 소리가 들리는 곳에 밀착했다.`,
      );
      era.println();
      await teio.say_and_wait(`심장 소리가 좀 빠른걸.`);
      await era.printAndWait(`${me.name}은(는)——`);
      era.printButton('고개를 숙여 담당의 귀를 깨문다(관계 진전)', 1);
      era.printButton('억지로 일어난다(관계 진전 중지)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `뭔가에 홀린 듯, ${me.name}은(는) 고개를 숙여 테이오의 귀 끝을 살짝 물었다. 입안을 통해 ${teio.sex}가 부자연스럽게 움찔하는 것이 느껴졌지만, 곧 평온을 되찾고 묵묵히 받아들이며 ${me.name}의 다음 행동을 기다렸다.`,
        );
        era.println();
        await me.say_and_wait('테이오…… 계속 나와 함께 가주겠어? 더 먼 곳까지 말이야.');
        era.println();
        await era.printAndWait(
          `${teio.sex}의 얼굴은 이미 새빨개졌다. 작은 소리로 무언가 중얼거리더니, 확실하게 고개를 끄덕였다.`,
        );
        era.println();
        if (era.get('talent:3:음란한몸') !== 2) {
          era.set('talent:3:음란한몸', 2);
          era.print([
            teio.get_colored_name(),
            ' 이(가) ',
            {
              color: buff_colors[2],
              content: '[음란한몸]',
            },
            ' 이 되었다!',
          ]);
        }
        get_skill_list(teio.sex_code).forEach((e) =>
          era.set(`abl:3:${e}`, Math.min(era.get(`abl:3:${e}`) + 1, 5)),
        );
        sys_like_chara(3, 0, 20);
        await sys_love_uma_in_event(3);
      } else {
        await era.printAndWait(
          `${
            me.name
          }은(는) 마음속에서 솟구치는 너무나도 당연한 생리적 충동을 억누르며, ${teio.get_uma_sex_title()}를 붙잡아 옆으로 내려놓고 자리에서 일어났다. 그러고는 헛기침을 하며 아무 일도 없었다는 듯 행동했다. ${
            teio.name
          }는 조금 불만스러운 기색이다.`,
        );
      }
    }
    if (era.get('love:3') !== 90) {
      era.set('cflag:3:호감거절', 89);
      await punish_rejecting_love(3);
    }
  }

  async 99(teio, me) {
    await print_event_name('내일을 기약하며', teio);
    await era.printAndWait(`${me.name}은(는) 맑은 공기를 마시며 햇살 아래 산책을 하고 있다.`);
    await era.printAndWait(
      `갑자기 뒤에서 부스스한 소리가 들리더니, 허리 뒤편으로 부드럽고 탄력 있는 감촉이 느껴졌다. 순백색 소매를 입은 두 손이 ${me.name}의 몸을 꽉 끌어안았다.`,
    );
    era.println();
    await me.say_and_wait(
      `대낮에 ${teio.get_uma_sex_title()}에게 안겨 있는 연상의 트레이너라니, 남들이 보면 어떻게 생각하겠어.`,
    );
    era.println();
    await teio.say_and_wait(
      `복 받은 거지! 만약 이런 대우를 받고도 억울해하는 사람이 있다면 내가 바다에 발로 차버릴 거야.`,
    );
    era.println();
    await me.say_and_wait('한 번만 살려줘.');
    era.println();
    await teio.say_and_wait('괜찮아. 지금의 난 남이 아니니까.');
    era.println();
    await era.printAndWait(
      `${me.name}은(는) 곁눈질로 ${teio.sex}의 꼬리가 즐겁게 흔들리는 것을 보았다.`,
    );
    era.println();
    await teio.say_and_wait('게다가…… 지금 여기엔 남도 없고 말이야.');
    era.println();
    await era.printAndWait('확실히 그렇네.');
    await era.printAndWait(
      `어째서인지 ${me.name}과(와) 그녀가 연인 관계가 된 직후, 교내 행사에서 덜컥 당첨이 되고 말았다.`,
    );
    await era.printAndWait('경품은 2인용 크루즈 무료 1일 관람권과 웨딩드레스 대여권.');
    await era.printAndWait(
      `${me.name}은(는) 당시 그 기획을 성공시켰다는 듯한 스태프들의 눈빛과 묘한 미소를 떠올리며 쓴웃음을 지었다.`,
    );
    era.println();
    await me.say_and_wait('……그렇게 달라붙어 있으면 문제가 생길지도 모른다고.');
    era.println();
    await teio.say_and_wait('지금은 대낮이고, 게다가 배 위인걸?');
    era.println();
    await me.say_and_wait('그러니까 곤란하다는 거야. 이 상황을 어떻게 해결하란 거지?');
    era.println();
    await era.printAndWait([
      teio.get_colored_name(),
      {
        content: `「……트레이너 ${me.get_adult_sex_title()}은 설마 자기가 담당하는 ${
          teio.sex_code - 1 ? '여' : '남'
        }학생한테 반응해버리는 변태인 거야?」`,
        color: teio.color,
      },
      ' (웃음)',
    ]);
    era.println();
    await me.say_and_wait('아니…… 음, 글쎄…… 아니, 그러면 안 되지!');
    era.println();
    await teio.say_and_wait('후후…… 그럼 설명해 보시지?');
    era.println();
    await era.printAndWait(
      `담당 ${teio.get_uma_sex_title()}의 몸이 더 가까이 밀착되었다. ${
        me.name
      }은(는) 입술이 바짝 마르고 심장이 비정상적으로 뛰는 것을 느끼며 서둘러 말했다.`,
    );
    era.println();
    await me.say_and_wait('단지 내 자제력을 전혀 믿지 못할 뿐이야.');
    era.println();
    await teio.say_and_wait('그치만 나도…… 이제는 그런 것들을 전부 이해하고 있거든……');
    era.println();
    await era.printAndWait(
      `얼굴이 붉어진 ${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}가 웅얼웅얼 중얼거리며 ${me.name}에게서 떨어졌다. 기분 좋았던 체온이 점점 멀어진다.`,
    );
    await era.printAndWait(
      `그런데 ${teio.sex}가 곧장 다시 돌아왔다. 담당은 ${me.name}의 앞으로 돌아와 겉옷 안으로 파고들려 했다.`,
    );
    era.println();
    await me.say_and_wait('점점 더 꼴이 우스워지는데.');
    era.println();
    await teio.say_and_wait('그럴지도 모르지.');
    era.println();
    await me.say_and_wait('내 욕망을 자극해 버리면 어쩔 셈이야?');
    era.println();
    await teio.say_and_wait('그때 가서 생각하자.');
    era.println();
    await me.say_and_wait('……정말 무책임하네.');
    era.println();
    await teio.say_and_wait('후후.');
    era.println();
    await me.say_and_wait('추워?');
    era.println();
    await teio.say_and_wait('으응……');
    era.println();
    await era.printAndWait(
      `배의 속도는 빠르지 않았고 바닷바람도 적당했다. 하지만 귓가에 차가운 바람이 스치는 게 기온이 떨어진 걸까? ${me.name}은(는) 무심결에 겉옷의 옷자락을 벌려 ${teio.name}를 품 안에 꼭 안았다. 하얀 웨딩드레스를 입고——`,
    );
    await era.printAndWait(
      `——마치 꽃을 든 아이처럼 보이는—— 작은 ${teio.get_uma_sex_title()}가 ${me.name}의 검은 옷깃 사이로 머리를 내밀며 ${me.name}에게 몸을 온전히 기댔다.`,
    );
    await era.printAndWait('아…… 이제 따뜻해졌다.');
    era.println();
    await teio.say_and_wait('……');
    era.println();
    await me.say_and_wait('……');
    era.println();
    await teio.say_and_wait('문제없어.');
    era.println();
    await me.say_and_wait('……?');
    era.println();
    await era.printAndWait(
      `품 안의 ${teio.get_teen_sex_title()}가 갑자기 이런 말을 내뱉었다.`,
    );
    await era.printAndWait(
      `응시. 눈앞에는 ${me.name}에게 힘을 북돋아 주는 미소와, 의심 따위는 모르는 맑은 눈동자가 있었다.`,
    );
    era.println();
    await teio.say_and_wait('지금 눈 피했지?');
    era.println();
    await me.say_and_wait('……');
    await era.printAndWait(
      `인정할 수밖에 없었다. ${me.name}은(는) 방금 분명히 망설였다. 이제부터 시작될 것은 두 사람의 새로운 생활이다.`,
    );
    await era.printAndWait(
      `내 인생의 절반을 ${teio.sex}에게 주고, 마찬가지로 ${teio.sex}도 ${me.name}의 인생의 절반을 갖는다. 내가 과연 이 무게를 짊어질 수 있을까?`,
    );
    era.println();
    await teio.say_and_wait(`꼭 할 수 있을 거야, ${me.actual_name}.`);
    era.println();
    await era.printAndWait(
      `——어린애 같은 ${teio.get_child_sex_title()}에게 이런 위로를 받다니, 오히려 더 쑥스럽고 당황스럽네.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 웃으며 ${teio.sex}의 머리에 손을 얹고 마구 쓰다듬었다. ${teio.sex}는 눈을 가늘게 뜨고 기분 좋게 콧노래를 흥얼거렸다.`,
    );
    await era.printAndWait('품 안의 보물, 이토록 아름답다니.');
    await era.printAndWait(
      `이 ${teio.get_uma_sex_title()}는 티 없이 맑은 신념을 가지고 있으며, 그것을 위해 자신의 몸까지 헌신했다. ${
        teio.sex
      }의 영혼은 태양처럼 눈부시게 빛나고 있다.`,
    );
    await era.printAndWait(
      `이 ${teio.get_teen_sex_title()}는…… 바로 ${
        me.name
      }이 한때 포기할 뻔했던 꿈의 화신이다.`,
    );
    era.printButton('「그녀를 꼭 안고, 함께 나아간다」(관계 진전)', 1);
    era.printButton('「손을 놓고, 제자리에 멈춰 선다」(관계 진전 중지)', 2);
    const ret = await era.input();
    if (ret === 1) {
      era.println();
      const temp = get_random_entry(
        new Array(8)
          .fill(0)
          .map((_, i) => 70 + i)
          .filter((e) => (e !== 71 && e !== 75) || teio.sex_code !== 1)
          .filter((e) => !era.get(`talent:3:${e}`)),
      );
      if (temp) {
        era.set(`talent:3:${temp}`, 1);
        era.print([
          teio.get_colored_name(),
          ' 이(가) ',
          {
            color: buff_colors[2],
            content: `[${era.get(`talentname:${temp}`)}]`,
          },
          ' 해졌다!',
        ]);
      }
      sys_like_chara(3, 0, 20);
      await sys_love_uma_in_event(3);
    } else {
      era.set('cflag:3:호감거절', 99);
      await punish_rejecting_love(3);
    }
  }
};