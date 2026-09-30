const era = require('#/era-electron');

const Edu3UntilOutStart = require('#/event/edu/edu-events-3/out-start');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const get_gradient_color = require('#/utils/gradient-color');

const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {RaceEndParams} extra_flag  */
function fill_common_rewards(extra_flag) {
  extra_flag.attr_change = new Array(5);
  if (extra_flag.rank === 1) {
    extra_flag.attr_change.fill(10);
    extra_flag.pt_change = 50;
    extra_flag.relation_change = 10;
    extra_flag.love_change = 1;
  } else if (extra_flag.rank === 2) {
    extra_flag.attr_change.fill(5);
    extra_flag.pt_change = 40;
    extra_flag.relation_change = 10;
  } else if (extra_flag.rank === 3) {
    extra_flag.attr_change.fill(3);
    extra_flag.pt_change = 25;
    extra_flag.relation_change = 5;
  } else if (extra_flag.rank <= 5) {
    extra_flag.attr_change.fill(1);
    extra_flag.pt_change = 10;
  }
}

module.exports = class extends Edu3UntilOutStart {
  async race_end(teio, me, callname, hook, extra_flag) {
    const edu_weeks = era.get('cflag:3:육성턴수합산');
    if (
      extra_flag.race === race_enum.begin_race &&
      edu_weeks < 48 &&
      extra_flag.rank === 1
    ) {
      // 데뷔전
      await print_event_name('테이오, 출발!', teio);

      await era.printAndWait(
        `전설에 따르면, 세 여신이 아이에게 말의 혼을 내려주어 ${teio.sex}들이 경기장을 누빌 수 있는 비할 데 없는 신체 능력을 갖게 되었다고 한다.`,
      );
      await era.printAndWait(
        `그리고 ${teio.sex}들이 부여받은 능력은 경기장에서의 표현 방식에 따라 크게 몇 가지 각질로 나뉜다.`,
      );
      era.println();
      await era.printAndWait(
        '먼저 도주. 게이트가 열린 후 엄청난 속도로 상대와의 거리를 벌리는 방식으로, 속도와 높은 폭발력을 중시한다. 단점은 장거리에서 스태미나 부족으로 속도가 떨어지기 쉽고, 다리에 가해지는 부담 때문에 다른 각질보다 부상 위험이 크다는 점이다.',
      );
      await era.printAndWait(
        `듣기로는 오렌지색 머리카락에 쾌속으로 달리는 어느 ${teio.get_uma_sex_title()}가 이 분야의 달인이라고 한다.`,
      );
      era.println();
      await era.printAndWait(
        `두 번째는 선행. 이 각질은 게이트가 열린 후 서둘러 거리를 벌리지 않고, 높은 스태미나와 속도를 이용해 도주 우마무스메의 뒤를 바짝 쫓는다. 그러다 도주 우마무스메의 속도가 떨어지는 순간 추월하는 방식이다. 단점은 추월 타이밍을 잡기 어렵고 스태미나와 폭발력이 동시에 요구되며, 순간적인 가속 때문에 발바닥과 종아리에 무리가 가기 쉽다. 또한 가속 시의 자세 때문에 ${teio.get_uma_sex_title()} 본인의 유연함이 필수적이다.`,
      );
      era.println();
      await era.printAndWait(
        `또 다른 방식은 선입. 출발 후 중앙에서 높은 근성으로 기회를 엿보다가, 타이밍이 왔을 때 폭발적인 스피드로 상대를 몰아붙이는 방식이다. 단점은 냉정함을 유지해야 하며 경험에 기반한 판단력이 중요하고 높은 폭발력이 필요하다는 점이다. 듣기로는 시골에서 온 어느 회색 털의 ${teio.get_uma_sex_title()}가 이 각질로 유명하다고 한다.`,
      );
      era.println();
      await era.printAndWait(
        `마지막은 추입. 출발 후 가장 뒤쪽에서 자제력과 스태미나를 비축하다가, 결정적인 순간에 폭발력과 속도로 앞선 상대들을 제치는 방식이다. 단점은 역전 성공률이 높지 않고 ${teio.get_uma_sex_title()} 본인의 강한 자제력이 요구된다는 점이다. 체구는 작지만 달리기 시작하면 번개처럼 빠른 어느 ${teio.get_uma_sex_title()}가 이 분야의 일인자로 알려져 있다.`,
      );
      era.println();
      await era.printAndWait(
        `${me.name}은(는) ${
          teio.name
        }의 첫 공식전 모습을 지켜보며, 과거의 훈련 성과를 토대로 ${
          teio.sex
        }의 각질을 확신하고 훈련 계획을 구상했다. 피부 너머로 비치는 종아리 근육은 탄탄하고 힘이 넘쳤으며, 가속할 때의 보폭은 유연했다. 힘을 실어야 할 타이밍을 포착하는 감각은 마치 타고난 듯 영민했다—— 천재적인 선행 ${teio.get_uma_sex_title()}.`,
      );
      await teio.say_and_wait('트레이너? 어때?!');
      await era.printAndWait(
        `${teio.sex}는 다리를 가볍게 까닥거리며 ${me.name}에게 다가왔다. ${me.name}은(는) 고개를 끄덕이며 방금 관찰한 정보와 앞으로의 훈련 방침을 설명해주었다.`,
      );
      era.println();
      await teio.say_and_wait('음…… 당신 말대로 할게!');
      era.println();
      await era.printAndWait(
        `${me.name}은(는) ${teio.sex}의 다리를 바라보다가, 자신도 모르게 몸을 숙여 두 손으로 그 다리를 감싸 쥐었다.`,
      );
      era.println();
      await teio.say_and_wait('어—— 어어?!');
      era.println();
      await era.printAndWait(
        `${teio.get_uma_sex_title()}에게 가장 중요한 다리 부위를 손가락으로 매만지자, 모든 정보가 촉각을 통해 전해져 왔다—— 이것이 트레이너의 기술. 아니나 다를까, 한 가지 사실을 확인할 수 있었다. ${
          me.name
        }의 담당 우마무스메가 「테이오 스텝」이라 부르는 특유의 주법은 ${
          teio.sex
        }의 특수한 다리 구조를 바탕으로 실력을 최대한 끌어내 주지만, 기회와 위험은 공존하는 법이다. ${
          teio.sex
        }의 다리는 매우 부상당하기 쉬운 구조였고, 특히 이 주법을 계속 고집한다면……`,
      );
      era.println();
      await teio.say_and_wait('트레이너? 무슨 문제라도 있어?');
      await era.printAndWait(
        `${
          me.name
        }이(가) 생각에 집중하던 중, 귓가에 들려온 가녀린 목소리에 놀라 현실로 돌아왔다. 얼굴을 살짝 붉힌 채 고개를 갸우뚱하며 ${
          me.name
        }을(를) 바라보는 ${teio.get_uma_sex_title()}. ${me.name}은(는) 차마 입이 떨어지지 않았다.`,
      );
      era.printButton('「……아니, 네 몸, 정말 대단하구나.」', 1);
      await era.input();
      await teio.say_and_wait(
        '응? 흐음…… 문제없다면 다행이고. 그럼 트레이너, 우리 계약한 거다? 마지막까지 나랑 같이 달려줘야 해!',
      );
      era.println();
      await era.printAndWait(
        `바람이 불어오자 ${teio.sex}는 눈을 가늘게 뜨고 생긋 웃으며 손을 내밀었다. ${me.name}도 손을 뻗어 ${teio.sex}의 새끼손가락과 마주 걸고 약속했다.`,
      );
      await era.printAndWait(
        `다리 문제는…… ${
          me.name
        }은(는) 어쩌면 커리어에 영향을 주지 않을지도 모른다고 생각했다. ${teio.get_uma_sex_title()}에게 이런 고민은 흔한 일이고, 자신이 정성껏 관리하며 적절한 훈련 내용을 짠다면 최소한 현역 기간 중에는 문제가 생기지 않게 할 수 있을 것이다.`,
      );
      await era.printAndWait(
        `지금 당장 ${teio.sex}에게 습관을 고치라고 강요한다면…… 오히려 역효과가 날 수도 있고, 만약 그 때문에 이 천재가 성적을 내지 못하게 된다면…… 그건 두 사람 모두에게 불행한 일이다.`,
      );
      await era.printAndWait(`결국, ${me.name}은(는) 침묵을 선택했다.`);
      extra_flag.attr_change = [0, 0, 0, 0, 3];
      extra_flag.pt_change = 30;
      extra_flag.relation_change = 5;
      extra_flag.love_change = 1;
    } else if (extra_flag.race === race_enum.waka_sta && edu_weeks < 96) {
      // 클래식급 와카코마S
      await print_event_name('삼관을 향해!', teio);
      await era.printAndWait('훌륭해.');
      await era.printAndWait(`${me.name}은(는) 속으로 환호를 보냈다.`);
      await era.printAndWait(
        `독보적인 질주, 순간적인 가속, 완벽한 자세—— 과연 천재 ${teio.get_uma_sex_title()}답다.`,
      );
      await era.printAndWait('데뷔한 지 얼마 되지 않아 이런 퍼포먼스를 보이다니, 정말 잠재력이 넘치는구나. 미래가 기대된다.');
      await era.printAndWait(
        `${me.name}은(는) 관람석을 내려가 출구에서 담당 우마무스메가 나오기를 기다렸다. ${teio.sex}를 듬뿍 칭찬해주고, 어쩌면 보상이라도 줘야 할까?`,
      );
      era.println();

      await teio.say_and_wait('트레이너.');
      era.println();

      era.printButton('「오, 정말 잘했어.」', 1);
      await era.input();

      await era.printAndWait(
        ` ${me.name}은(는) ${
          teio.sex
        }의 어깨를 가볍게 두드리고 손을 얹어, 적당한 힘으로 주물러주며 ${teio.get_teen_sex_title()}의 피로를 풀어주었다.`,
      );
      await era.printAndWait(
        `${teio.sex}의 뺨에는 아직 홍조가 남아 있었고, 흥분된 눈빛으로 ${me.name}을(를) 바라보았다.`,
      );
      era.println();

      await teio.say_and_wait('나, 결정했어!');
      era.println();

      era.printButton('「뭘?」', 1);
      await era.input();

      await teio.say_and_wait('내 첫 번째 목표—— 무패로 3관을 달성하는 거야!');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}의 열정적인 선언에 ${
          me.name
        }의 입가에 미소가 번졌다. 하룻강아지 범 무서운 줄 모르는 건지, 아니면 ${
          teio.sex
        }가 승부의 세계를 만만하게 보는 건지. 하지만 젊은이가 포부를 크게 갖는 게 나쁠 건 없지 않나?`,
      );
      era.println();

      await me.say_and_wait(
        `그건 정말 험난한 목표야…… 과거의 수많은 유명한 ${teio.get_uma_sex_title()}들, 그리고 지금의 천재들도 모두 그 업적을 원하지만, 실제로 달성한 건 극소수뿐이거든.`,
      );
      await me.say_and_wait(
        '하지만 내가 네 트레이너가 된 이상, 네 소원을 이룰 수 있도록 최선을 다해 도울게.',
      );

      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 눈을 반짝였고, 투지는 조금도 수그러들지 않았다.`,
      );
      await teio.say_and_wait('꿈을 이룰 수 있게 노력할게!');
      era.printButton(`그럼 같이 힘내보자.`, 1);
      await era.input();
      let attr_reward = 0;
      if (extra_flag.rank === 1) {
        attr_reward = 15;
        extra_flag.pt_change = 30;
        extra_flag.relation_change = 5;
        extra_flag.love_change = 1;
      } else if (extra_flag.rank === 2) {
        attr_reward = 10;
        extra_flag.pt_change = 20;
        extra_flag.relation_change = 3;
        extra_flag.love_change = 1;
      } else if (extra_flag.rank === 3) {
        attr_reward = 5;
        extra_flag.pt_change = 10;
        extra_flag.relation_change = 2;
      }
      extra_flag.attr_change = [0, 0, 0, attr_reward, 0];
    } else if (extra_flag.race === race_enum.sats_sho && extra_flag.rank <= 5) {
      // 클래식급 사츠키상
      await print_event_name('The First', teio);
      await era.printAndWait('정말 훌륭한 레이스였다.');
      await era.printAndWait(`${me.name}은(는) 자신도 모르게 박수를 보냈다.`);
      await era.printAndWait(
        `이 정도 수준의 레이스—— 경기장에서 분투하는 ${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}들이 땀과 청춘을 흘리며 달리는 모습은 정말 감동적이다. 그리고 ${
          me.name
        }의 담당 우마무스메는 단연 그중에서도 돋보였다.`,
      );
      await era.printAndWait('첫 번째 발걸음, 기분 좋은 출발이다.');
      await era.printAndWait(
        `${teio.sex}에게 꿀 드링크라도 한 잔 사줘야겠다고 생각하며, ${
          me.name
        }은(는) 서둘러 매점으로 달려갔다 다시 돌아와 자신의 ${teio.get_uma_sex_title()}를 지켜보았다.`,
      );
      era.println();

      fill_common_rewards(extra_flag);
      extra_flag.attr_change[attr_enum.endurance] += 15;
      extra_flag.attr_change[attr_enum.toughness] += 5;
    } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank <= 5) {
      // 클래식급 일본 더비
      await print_event_name('The Second', teio);
      await era.printAndWait(
        `이것은 ${me.name}의 담당 우마무스메가 지금까지 출주한 레이스 중 최대 규모였다.`,
      );
      await era.printAndWait(
        `하지만 이번에 ${me.name}이(가) 주목한 것은…… ${teio.sex}의 성적이 아니라 다리였다.`,
      );
      await era.printAndWait(
        '더 정확히 말하면, 부츠에 감싸인 발목부터 무릎까지의 부위.',
      );
      await era.printAndWait('이상이 있다.');
      await era.printAndWait(
        '스타트 때부터 보였다. 이후의 스퍼트와 가속에서도 동작이 미세하게 어긋나고 있었다.',
      );
      await era.printAndWait(
        '모든 다리 동작의 기초는 뼈의 정렬에서 나오는데, 분명 무릎 연골이나 종아리뼈 쪽에 문제가 생긴 것이 틀림없다.',
      );
      era.println();

      await era.printAndWait(
        `레이스 종료 후, ${me.name}은(는) 담당 우마무스메에게 다가가 가볍게 축하한 뒤 이 문제를 꺼냈다. 그리고 이것이 ${teio.sex}가 줄곧 의지해온 주법 때문일 수 있다고 완곡하게 경고했다.`,
      );
      await era.printAndWait(`하지만 ${teio.sex}의 대답은 빠르고 단호했다.`);
      era.println();

      await teio.say_and_wait('괜찮아.');
      era.printButton('「무슨 소리야!」', 1);
      await era.input();

      await teio.say_and_wait(
        '정말 아무렇지도 않아! 그냥 최근에 좀 무리해서 그런 거야…… 쉬면 나을 거야.',
      );
      era.println();

      era.printButton('「하지만……」', 1);
      await era.input();

      await teio.say_and_wait(
        '우리의 꿈…… 아직 이루지 못했잖아! 난 계속 달리고 싶어, 내 방식대로. 도와준다고 약속했잖아.',
      );
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 고개를 들어, 맑고 순수하면서도 집념 어린 눈빛으로 ${
          me.name
        }을(를) 쏘아보았다. ${me.name}은(는) 입을 뗐지만 말이 나오지 않았다.`,
      );
      await era.printAndWait(
        `${teio.sex}가 하고 싶은 대로 둬도…… 큰일이야 나겠어? 머릿속 한구석에서 목소리가 타협을 시도했다. 게다가 ${me.name}에게도 ${teio.sex}가 계속 달려 성적을 내는 것이 필요하지 않은가?`,
      );
      await era.printAndWait(`${me.name}은(는) 한숨을 내쉬며 화제를 접었다.`);
      era.println();
      fill_common_rewards(extra_flag);
      if (
        extra_flag.rank === 1 &&
        check_aim_race(era.get('cflag:3:육성성적'), race_enum.sats_sho, 1, 1)
      ) {
        extra_flag.pt_change += 20;
        extra_flag.relation_change = (extra_flag.relation_change || 0) + 10;
        extra_flag.love_change = (extra_flag.love_change || 0) + 1;
      }
    } else if (
      extra_flag.race === race_enum.kiku_sho &&
      extra_flag.rank === 1
    ) {
      // 클래식급 菊花賞
      await print_event_name('Not the end', teio);
      await era.printAndWait('짧은 끝이 다가오고 있다.');
      await era.printAndWait(
        `${
          me.name
        }은(는) 관중석에 서서 지난 1년간의 우여곡절을 떠올렸다. ${teio.get_teen_sex_title()}가 여기까지 올 수 있었던 것은 ${
          me.name
        }이(가) 있었기 때문이고, ${me.name} 또한 ${teio.sex}의 끈기와 집념에 이끌려 자진해서 그를 도와왔다.`,
      );
      await era.printAndWait('성공이 바로 눈앞이다.');
      await era.printAndWait(
        `이 레이스에서 이기기만 하면 ${teio.name}은(는) 최종 목표에 한 걸음 더 다가서게 된다. 현재 ${teio.sex}의 퍼포먼스를 본다면—— 트레이너로서 샴페인을 너무 일찍 터뜨려선 안 되지만—— 거의 따놓은 당상이나 다름없었다.`,
      );
      await era.printAndWait(
        `머릿속에는 ${me.name}과(와) ${teio.sex}가 전설이 되어 명예의 전당에 이름을 새기는 환상까지 떠올랐는데……`,
      );
      await era.printAndWait('잠깐.');
      era.println();
      await era.printAndWait(`해설 「${teio.name}—— 어라——?!」`);
      era.println();
      await era.printAndWait('이상해!');
      await era.printAndWait(
        `${me.name}은(는) 난간을 붙잡고 몸을 내밀어 경기장에서 자신의 ${teio.get_uma_sex_title()}를 찾았다. 찾았다, 선두 위치—— 그런데 ${
          teio.sex
        }의 동작이?!`,
      );
      await era.printAndWait(
        `${me.name}은(는) 테이오가 매우 비정상적인 자세로 바깥쪽으로 미끄러지는 것을 보았다——`,
      );
      era.println();
      await era.printAndWait('해설 「——속도가 줄어듭니다!——」');
      era.println();
      await era.printAndWait(
        `결승점이 코앞이었지만 ${
          me.name
        }은(는) 이제 성적 따위는 안중에도 없었다. 미친 듯이 아래로 달려가 자신의 담당 우마무스메를 맞이하려 했다. 보안요원이 이성을 잃은 ${
          me.name
        }을(를) 제지했고, ${me.name}은(는) ${
          teio.sex
        }를 바라보았다. 멀리서도 느껴질 만큼 고통과 불만이 ${teio.get_teen_sex_title()}의 얼굴 가득 서려 있었다……`,
      );
      era.println();
      era.printButton('「테이오!」', 1);
      await era.input();
      await era.printAndWait(
        `레이스 직후, ${me.name}은(는) 지체하지 않고 ${teio.sex}를 안아 들고 트레센 보건실로 달려갔다.`,
      );
      fill_common_rewards(extra_flag);
      if (
        extra_flag.rank === 1 &&
        check_aim_race(era.get('cflag:3:육성성적'), race_enum.sats_sho, 1, 1) &&
        check_aim_race(era.get('cflag:3:육성성적'), race_enum.toky_yus, 1, 1)
      ) {
        extra_flag.attr_change[attr_enum.strength] += 15;
        extra_flag.pt_change += 30;
        extra_flag.relation_change = (extra_flag.relation_change || 0) + 20;
        extra_flag.love_change = (extra_flag.love_change || 0) + 2;
      }
    } else if (
      extra_flag.race === race_enum.tenn_spr &&
      edu_weeks >= 96 &&
      extra_flag.rank === 1
    ) {
      extra_flag.pt_change = 100;
    } else if (
      extra_flag.race === race_enum.japa_cup &&
      extra_flag.rank === 1 &&
      era.get('status:3:다리부상')
    ) {
      // 재팬 컵
      await print_event_name('재기', teio);

      await era.printAndWait(
        `${me.name}은(는) 직접 담당 우마무스메를 경기장까지 배웅하며 응원한 뒤 관중석에 앉았다.`,
      );
      await era.printAndWait('옆자리는 텅 비어 있었다.');
      await era.printAndWait(
        `${me.name}은(는) 한숨을 내쉬었다. 기자회견에 나타났던 그 테이오의 팬들은 끝내 오지 않은 모양이다.`,
      );
      await era.printAndWait(
        `하지만 상관없다. 테이오가 꿈을 이룰 수만 있다면. ${me.name}은(는) 다시 경기장으로 시선을 돌렸다.`,
      );
      await era.printAndWait('하지만 전황은 그리 낙관적이지 않았다.');
      await era.printAndWait(
        `뒤엉킨 ${teio.get_uma_sex_title()} 무리 속에서 테이오는 좀처럼 포위망을 뚫지 못하고 있었다.`,
      );
      await era.printAndWait(`${me.name}의 손바닥에 어느새 땀이 흥건해졌다.`);
      era.drawLine();
      await era.printAndWait('트레이너A 「——이상이 다음 레이스 출주자입니다.」');
      await era.printAndWait('행인A 「아깝네…… 또 못 뽑혔어?」');
      await era.printAndWait('팬A 「……아하하, 괜찮아. 어차피 난 실력이 형편없으니까.」');
      await era.printAndWait(
        '팬A (제발…… 나도 정말 진지하고 성실하게, 새벽부터 밤늦게까지 훈련했는데!)',
      );
      await era.printAndWait(`——${me.name}이(가) 파는 것은 꿈이다.`);
      era.println();

      await era.printAndWait(
        '팬B 「또 혼났어…… 내 잘못도 아닌데, 전부 내 탓으로 돌리다니.」',
      );
      await era.printAndWait(
        '팬B 「됐어…… 게임이나 하자. 나도 잘하는 게 하나쯤은 있겠지, 헤헤.」',
      );
      await era.printAndWait(
        `——${me.name}이(가) 파는 것은 꿈이다. 누구나 이 꿈에 다가가고 싶어 하면서도, 필요하다는 걸 인정하지 않으려 애쓰며 동경한다.`,
      );
      era.println();

      await era.printAndWait('팬A 「……아아」');
      await era.printAndWait('팬B 「아무것도 없어……」');
      await era.printAndWait('——지금이야말로 사람들이 꿈을 필요로 하는 순간이다.');
      era.println();

      await era.printAndWait(
        '팬A 「됐어…… 그냥 TV나 보자…… 오늘이 재팬 컵이었나……」',
      );
      await era.printAndWait('팬B 「빌어먹을…… 그냥 TV로 레이스나 봐야지.」');
      await era.printAndWait(
        '—— 사람들은 모든 것이 행복하고, 하늘은 스스로 돕는 자를 돕고, 노력이 결실을 맺으며, 확고한 신념이 고난을 극복한다는 이야기를 듣고 싶어 한다.',
      );
      era.println();

      await era.printAndWait(`팬A 「${teio.name}……? 테이오가 정말 나갔어?」`);
      await era.printAndWait(`팬B 「테이오는……」`);
      await era.printAndWait(`——${me.name}은(는) 그런 이야기를 써 내려갈 수 있을까?`);
      era.drawLine();
      await era.printAndWait(
        `??? 「저기, ${me.sex_code - 1 ? '언니' : '오빠'}」`,
      );
      era.println();
      await era.printAndWait(
        `${me.name}이(가) 뒤를 돌아보자, 한 여자가 낯익은 아이의 손을 잡고 다가오고 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `아이 「${me.sex_code - 1 ? '언니' : '오빠'}? 저 기억하세요?」`,
      );
      era.println();
      await era.printAndWait(
        `${me.name}은(는) 가만히 보다 기억해냈다. 테이오와 처음 만났을 때 보았던 그 아이였다. 인사를 나누고 그들은 ${me.name}의 옆자리에 앉아 레이스를 지켜봤다. 아이는 무척 흥분되어 보였다. 이곳은 처음인 걸까?`,
      );
      era.println();
      await era.printAndWait(
        `아이 「${
          me.sex_code - 1 ? '언니' : '오빠'
        }, 테이오 씨 레이스를 꼭 보고 싶었어요…… 그동안 기회가 없었는데 드디어 보게 됐어요! 저 이번에 반에서 1등 했거든요. 엄마가 상으로 데려와 주셨어요. 테이오 씨 정말 멋져요. 분명 1등 하겠죠?」`,
      );
      era.println();
      await era.printAndWait(`${me.name}은(는) ${teio.sex}의 얼굴을 떠올리며 미소 지었다.`);
      era.printButton(`「그럼. 반드시 할 수 있을 거야.」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('최악이야……', true);
      await era.printAndWait(
        `자신의 장기인 선행 주법을 전혀 발휘할 수 없었다. ${teio.get_uma_sex_title()} 무리가 서로 길을 막고 있어, 돌파구는 보이지 않았다.`,
      );
      await era.printAndWait('정말…… 할 수 있을까.');
      era.println();
      await teio.say_and_wait('난 할 수 있어!', true);
      era.println();
      await era.printAndWait(
        `달리던 ${teio.get_uma_sex_title()}들이 엉켰다 흩어지는 사이, 겨우 우마무스메 반 정도가 들어갈 법한 좁은 틈이 보였다——`,
      );
      era.println();
      await era.printAndWait(`해설 「엇, 저건—— ${teio.name}?!」`);
      era.println();
      await era.printAndWait(
        '종아리 근육을 순간적으로 이완시켰다 다시 꽉 조였다! 다리를 크게 치켜들고, 휘날리는 먼지와 흙탕물 따위 아랑곳하지 않고 힘차게 도약한다!',
      );
      await era.printAndWait(`오직 ${teio.sex}만이 가능한 몽환적인 스텝.`);
      await era.printAndWait(`오직 ${teio.sex}만이 출 수 있는 춤사위.`);
      await era.printAndWait('모두에게 그 위용을 선보인다—— 테이오 스텝!');
      era.println();
      await era.printAndWait(
        `해설 「이게 가능한 일입니까—— 마치 꿈을 꾸는 듯한 광경입니다, ${teio.name}, 뚫고 나옵니다! ${teio.sex}가 1위로 달려 나갑니다——!」`,
      );
      era.println();
      await era.printAndWait('순식간에 승부가 결정되었다.');
      extra_flag.pt_change = 20;
      extra_flag.relation_change = 12;
      extra_flag.love_change = 1;
    } else if (
      extra_flag.race === race_enum.arim_kin &&
      extra_flag.rank === 1 &&
      edu_weeks >= 96
    ) {
      if (era.get('status:3:다리부상')) {
        await print_event_name('기적의 부활 (하)', teio);

        await teio.say_and_wait('문제없어.');
        era.println();

        await era.printAndWait(
          `${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}가 타오르는 유성이 되어, 자신의 체력을 한계까지 불태우며 경기장을 가로지르고 있다.`,
        );
        era.println();

        await teio.say_and_wait('이길 수 있어.');
        era.println();

        await era.printAndWait(
          `${me.name}은(는) 전용 관람석에서 일어나 그 흐릿한 붉은 그림자를 쫓았다—— ${me.name}의 담당 우마무스메는 자신의 모든 것을 걸고, 온몸의 근육 세포 하나하나를 쥐어짜며 레이스를 완주하려 하고 있었다.`,
        );
        await era.printAndWait(`${me.get_couple_title()}의 꿈을 실현하기 위해.`);
        era.println();

        await era.printAndWait(
          `푸른 하늘과 붉은 태양, 시원한 바람까지. 완벽한 날씨였지만 ${me.name}은(는) 즐길 여유가 없었다. 오직 그 작은 실루엣에 모든 신경을 집중했다.`,
        );
        await era.printAndWait(`${me.name}의 담당 우마무스메, ${teio.name}.`);
        await era.printAndWait(
          `세상의 풍경이 ${me.name}의 시야에서 멀어지고, 다시 ${teio.sex}에게 초점이 맞춰졌다. 모든 소음이 흐릿해지던 그때—— 잠깐.`,
        );
        era.println();

        await era.printAndWait(`해설 「—— ${teio.name}, 상태가——?!」`);
        era.println();

        await era.printAndWait('뭔가 잘못됐다.');
        era.println();

        await era.printAndWait(`${me.name}은(는) 난간을 움켜쥐고 몸을 내밀어 필사적으로 외쳤다.`);
        era.println();

        await era.printAndWait(`해설 「—— 속도가 떨어집니다! 다리의 부상이 도진 것입니까?!——」`);
        era.println();

        await teio.say_and_wait('하아…… 하아……');
        era.println();

        await teio.say_and_wait('몸이…… 말을 안 들어……', true);
        era.println();

        await teio.say_and_wait('숨을…… 쉴 수가 없어……', true);
        era.println();

        await teio.say_and_wait('갈비뼈랑 폐, 심장이…… 타버릴 것 같아.', true);
        era.println();

        await teio.say_and_wait('팔다리의…… 감각이 없어……', true);
        era.println();

        era.printButton('「—— 테—— 이—— 오——!」', 1);
        await era.input();

        await teio.say_and_wait('저 사람은 누구지……', true);
        era.println();

        await teio.say_and_wait(
          '목소리…… 시야가…… 너무 흐릿해…… 아무것도 생각나지 않아. 이대로 그냥……',
          true,
        );
        era.println();

        await era.printAndWait('상체가 기울고 고개가 떨어진다.');
        era.println();

        await era.printAndWait('아니, 잠깐.');
        await era.printAndWait('이런 결말이어선 안 돼.');
        era.println();

        await teio.say_and_wait('아니야.', true);
        era.println();

        await teio.say_and_wait('나 지금 뭐 하고 있는 거야——', true);
        era.println();

        era.printButton(`「${teio.name}!!!」`, 1);
        await era.input();

        await teio.say_and_wait('아아아……!');
        era.println();

        await era.printAndWait(`해설 「—— 앗! ${teio.name}, 다시 올라옵니다?!」`);
        era.println();

        await teio.say_and_wait('기억났어.');
        era.println();

        await era.printAndWait(
          `무거운 다리, 타오르는 폐, 저릿한 팔—— 고통이 ${teio.name} 라는 이름의 ${teio.get_uma_sex_title()}의 몸으로 되돌아왔다.`,
        );
        await era.printAndWait('하지만 고통과 함께 돌아온 것은 투지와 신념이었다.');
        era.println();

        await teio.say_and_wait('이제 생각났어!');
        era.println();

        await era.printAndWait(
          `두 발이 땅에 닿고 마찰하며, 지면을 박차는 반동이 고통을 견디는 몸을 앞으로 밀어낸다. 상체를 기울여 위치 에너지를 최대의 가속도로 전환한다——`,
        );
        era.println();

        await era.printAndWait(
          `해설 「현재 선두는—— 잠깐만요, 저건 ${teio.name} 입니다! ${teio.name}가 치고 올라옵니다!」`,
        );
        era.println();

        await teio.say_and_wait('숨쉬기 괴로워', true);
        era.println();

        await teio.say_and_wait('그래도 폐가 터져도 상관없어', true);
        era.println();

        await teio.say_and_wait('발걸음은 무겁지만 아직 움직여', true);
        era.println();

        await teio.say_and_wait('난…… 몇 번이고 꺾였었지', true);
        era.println();

        await teio.say_and_wait('그때도…… 그리고 그때도', true);
        era.println();

        await teio.say_and_wait('누구보다도 많이 좌절했어', true);
        era.println();

        await teio.say_and_wait('누구보다도 분했던 건 나야', true);
        era.println();

        await teio.say_and_wait('누구보다도 이기고 싶은 건 나라고!', true);
        era.println();

        await teio.say_and_wait('절대 물러나지 않아', true);
        era.println();

        await teio.say_and_wait('반드시, 반드시!', true);
        era.println();

        await teio.say_and_wait('반드시 내가!', true);
        era.println();

        await teio.say_and_wait('달려!', true);
        era.println();

        await teio.say_and_wait('달려!', true);
        era.println();

        await teio.say_and_wait('달려, 질주하는 거야!', true);
        era.println();

        await teio.say_and_wait('승부다!', true);
        era.println();

        await era.printAndWait(
          `해설 「${teio.name} 입니다! ${teio.name}가 추격합니다! 선두와의 거리가 점점 좁혀집니다!」`,
        );
        era.println();

        await era.printAndWait('남은 거리 200m 미만');
        era.println();

        await era.printAndWait(
          `해설 「1년 만에 경기장에 돌아온 ${teio.name}, 역전할 수 있을까요? 제쳤습니다—— 아니, 다른 ${teio.get_uma_sex_title()}들이 끈질기게 붙습니다! ${teio.name}를 필사적으로 쫓고 있습니다!」`,
        );
        era.println();

        await era.printAndWait(
          `해설 「${teio.name}가 전력으로 질주합니다! 하지만 상대도 만만치 않습니다—— 차이는 단 한 마신!」`,
        );
        era.println();

        await era.printAndWait(
          `해설 「조금만 더, 조금만 더! 하지만 ${teio.name}, 더 거리를 좁히지 못합니다!」`,
        );
        era.println();

        await era.printAndWait(
          '해설 「국화상 레코드 홀더다운 강력한 저력으로 버티고 있습니다!」',
        );
        era.println();

        await era.printAndWait(
          `해설 「하지만—— ${teio.name}가 붙었습니다! 돌아온 제왕이 차이를 무섭게 줄여갑니다!」`,
        );
        era.println();

        await era.printAndWait('100m\n마지막 혈전');
        era.println();

        await era.printAndWait(
          `해설 「이미 선두와 나란히 섰나요?! ${teio.name}! 과연 새로운 시대의 패왕일까요, 아니면 돌아온 옛 제왕이 왕좌를 되찾을까요——!」`,
        );
        era.println();

        await era.printAndWait(
          '온 잔디밭이 진동하는 듯했다. 나카야마 경기장—— 이곳 또한 아리마 기념의 승자를 기다리고 있었던 것일까?',
        );
        era.println();

        await teio.say_and_wait('아아아아아아아아아아아!');
        era.println();

        await era.printAndWait(`해설 「${teio.name} 입니다!」`);
        era.println();

        await era.printAndWait(
          `해설 「${teio.name}가 제쳤습니까?! ${teio.name}가 살짝 앞섭니다! 더비 우마무스메의 긍지를 보여주는 것입니까?!」`,
        );
        era.println();

        await era.printAndWait('해설 「하지만 차이는 미세합니다! 상대도 물러서지 않아요!」');
        era.println();

        await era.printAndWait('해설 「어느 쪽입니까, 어느 쪽이죠?!」');
        era.println();

        await era.printAndWait(`우마무스메 「내가——!」`);
        era.println();

        await teio.say_and_wait('—— 이겼어 ——');
        era.println();

        await era.printAndWait('붉은 섬광이 결승선을 가른다.');
        era.println();

        await era.printAndWait(
          '찰나의 정적이 흐른 뒤, 산을 뒤흔드는 듯한 함성이 터져 나왔다.',
        );
        await era.printAndWait(
          '환호하는 군중들의 외침이 하늘을 찔렀고, 그 속에서 한 이름이 메아리쳤다.',
        );
        era.println();

        await era.printAndWait(`관객 「${teio.name}!」`, {
          align: 'center',
          color: get_gradient_color(undefined, teio.color, 1 / 3),
          fontSize: '1.125rem',
        });
        await era.printAndWait(`관객 「${teio.name}!!」`, {
          align: 'center',
          color: get_gradient_color(undefined, teio.color, 2 / 3),
          fontSize: '1.25rem',
        });
        await era.printAndWait(`관객 「${teio.name}!!!」`, {
          align: 'center',
          color: teio.color,
          fontSize: '1.375rem',
        });
        era.println();

        await era.printAndWait(`해설 「${teio.name}—— 기적의 부활!」`, {
          align: 'center',
          color: teio.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        });
      } else {
        await print_event_name('질주의 숙원 (하)', teio);

        await era.printAndWait('기적은 누구에게나 일어날 수 있다.');
        await era.printAndWait('하지만 이 경기장에서 일어날 기적은 단 하나뿐이다.');
        era.println();

        await teio.say_and_wait('후우——');
        era.println();

        await teio.say_and_wait('너무 바짝 붙었어', true);
        await teio.say_and_wait('생각보다 더 심각해——', true);
        await teio.say_and_wait(
          '추월하기가 너무 힘들어…… 앞에서 끌어주는 도주 우마무스메든, 나 같은 선행 우마무스메든…… 혹은 뒤에서 기회를 노리는 선입과 추입 우마무스메까지……',
          true,
        );
        await teio.say_and_wait('다들…… 죽기 살기로 쫓아오고 있어', true);
        era.println();

        await era.printAndWait(
          `앞서가는 ${teio.get_uma_sex_title()}는 바람처럼 질주하고, 흩날리는 은발 끝이 내 코끝을 스칠 정도다. 옆의 붉은 머리 ${teio.get_uma_sex_title()}는 타오르는 불꽃처럼 달라붙어 언제라도 앞서가는 것들을 삼켜버릴 기세다.`,
        );
        await era.printAndWait(
          '자신의 재능을 최대한 발휘하고, 피나는 훈련을 거쳐, 절대 지지 않겠다는 각오로 경기장에 선다—— 그저 그뿐이라면 정말 화가 날 노릇이다.',
        );
        await era.printAndWait(
          `왜냐하면 그런 것들은, 이 무대에 서기 위해 필요한 아주 당연하고 흔해 빠진 조건일 뿐이니까.`,
        );
        era.println();

        await teio.say_and_wait('젠장……', true);
        await teio.say_and_wait(
          `어쩌면 예전에 트레이너가 했던 말이 맞을지도 몰라…… 이 세상에는 나보다 강한 ${teio.get_uma_sex_title()}가 얼마든지 있었고, 지금도 있어.`,
          true,
        );
        await teio.say_and_wait(
          '하지만 오늘만큼은…… 정말 지고 싶지 않아. 질 수도 없고, 져서도 안 된다고!',
          true,
        );
        era.println();

        await era.printAndWait(
          '공기를 크게 들이마신다. 갈구하듯 산소를 들이켜고, 그것을 필요한 에너지로 바꿔 한계를 초월한다.',
        );
        era.println();

        await teio.say_and_wait('모두의 전성기는…… 과연 언제일까?', true);
        await teio.say_and_wait('나에게는…… 바로 지금이야!', true);
        era.println();

        era.printButton('「테이오!」', 1);
        await era.input();
        await era.printAndWait(`해설 「—— 저것은 ${teio.name} 입니다! ——」`);
        era.println();
        await era.printAndWait(
          `${teio.get_teen_sex_title()}가 몸을 낮추고, 마지막 돌격에 나섰다.`,
        );
      }
      extra_flag.relation_change = 20;
      extra_flag.love_change = 2;
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 승리', teio);
      await era.printAndWait(`${me.name}은(는) 흥분된 마음으로 관중석을 내려가 개선하는 테이오를 맞이했다.`);
      await era.printAndWait(
        `${teio.sex} 또한 기쁨을 감추지 못한 채 얼굴 가득 웃음을 띠며 ${me.name}에게 달려와 하이파이브를 했다. ${me.get_couple_title()}은 함께 승리의 기쁨을 만끽했다.`,
      );
    } else if (extra_flag.rank <= 5) {
      // 범용 레이스 입상
      await print_event_name('레이스 입상', teio);
      await era.printAndWait('아쉽지만 나쁘지 않은 결과다.');
      await era.printAndWait(
        `${me.name}은(는) 분한 듯 발을 까닥거리며 경기장을 빠져나가는 테이오의 모습을 보았다. 엄격한 표정을 지으려 했지만, 자신도 모르게 입가에 미소가 번졌다.`,
      );
      await era.printAndWait(`나름대로 노력했으니, 듬뿍 위로해주자.`);
    } else {
      await print_event_name('레이스 패배', teio);
      if (era.get('status:3:다리부상')) {
        await era.printAndWait(
          `${me.name}은(는) 머리가 헝클어진 채 쓸쓸히 걸어오는 자신의 담당 우마무스메를 보며 가슴이 찢어지는 듯한 고통을 느꼈다.`,
        );
        await era.printAndWait('젠장, 한 걸음 모자랐어…… 다리 부상만 아니었어도……');
        await era.printAndWait(
          `해설조차 경기장에서 ${me.get_couple_title()}을 위해 안타까워하고 있었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 묵묵히 테이오에게 다가가 자신의 몸으로 그를 부축했다.`,
        );
        await era.printAndWait(
          `${teio.sex}는 몸을 살짝 떨더니, 다시 억지로 힘을 주어 일어섰다. 통증 때문일까, 아니면 ${me.name} 앞에서는 약한 모습을 보이고 싶지 않은 걸까?`,
        );
        await era.printAndWait(
          `${
            me.name
          }은(는) 알 수 없었지만, 굳이 묻지 않았다. 그렇게 ${me.get_couple_title()}은 서로를 부축하며 함께 경기장을 떠났다……`,
        );
      } else {
        await era.printAndWait(`${me.name}은(는) 미간을 찌푸렸다. 어떻게 이런 일이?`);
        await era.printAndWait(
          `전광판에 새겨진 붉은색 숫자가 너무나도 선명했다. 이는 ${me.name}에게 이번 패배의 처참한 진실을 끊임없이 일깨워주고 있었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 흙먼지투성이가 된 채 귀와 꼬리가 축 처져 터덜터덜 걸어오는 자신의 담당 ${teio.get_uma_sex_title()}를 보며 복잡한 심경에 휩싸였다.`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「괜찮아, 고개 들어. 다시 한번 힘내보자. 성공이 우릴 기다리고 있을 거야.」',
          1,
        );
        era.printButton('「이번 결과는…… 반성해야겠어. 테이오, 다음부턴 이래선 안 돼.」', 2);
        await era.input();
      }
    }
  }
};