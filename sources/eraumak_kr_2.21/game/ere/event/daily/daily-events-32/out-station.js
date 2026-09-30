const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {HookArg} hook */
module.exports = async function (hook) {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32);
  hook.arg = await select_action_in_station(32);
  switch (hook.arg) {
    case 0: // 식사
      if (new TachyonLifeMarks().cook < 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait(
            '……맛없군. 온통 레토르트 식품뿐이야. 조미료는 전부 향료와 화학 약품 범벅이고. 평소에 마시는 약으론 부족한 건가? 설마 나에게 이런 걸 먹이다니.',
          );
          await era.printAndWait([
            '요리가 나오자마자 ',
            tachyon.get_colored_name(),
            '에게 처음부터 끝까지 비판을 들었다. 원래는 ',
            tachyon.sex,
            '를 데리고 나와서 기분 전환을 시켜주려 했으나, 오히려 ',
            tachyon.sex,
            '의 기분만 더 나빠진 것이 아닐까.',
          ]);
          await tachyon.say_and_wait('하지만…… 이 디저트는 제법 괜찮군.');
          await era.printAndWait('에…… 그 이가 아플 정도로 단 푸딩이? 정말인가?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 입맛을 어느 정도 파악한 것 같았다.',
          ]);
        });
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              '이보게 ',
              callname,
              '…… 나를 데리고 밥을 먹으러 와준 건 고맙네만, 굳이 밖으로 나와서 자네가 만든 것보다 못한 음식을 먹는 게 대체 무슨 의미가 있는 건가?',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 당혹스러운 표정으로 ',
              me.get_colored_name(),
              '을(를) 바라보았다.',
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              '맛은 괜찮네. 하지만 ',
              callname,
              '이 만든 것에 비하면 어딘가…… 부족한 느낌이야. ……음, 그래. 충분히 달지 않아.',
            ]);
            await tachyon.say_and_wait([
              '설탕을 더 먹으면 당뇨에 걸릴 거라고? 걱정 말게나. ',
              tachyon.get_uma_sex_title(),
              '의 대사 능력이 어떻게든 해결해 줄 테니까.',
            ]);
          },
          async () => {
            await era.printAndWait(
              '갈비찜, 불고기, 화과자, 치사량의 설탕을 넣은 홍차, 그리고 마지막 마무리는 꿀 푸딩이었다.',
            );
            await tachyon.say_and_wait([callname, '? 자네는 안 먹는 건가?']);
            await me.say_and_wait('……보기만 해도 이가 아파서, 역시 사양할게.');
          },
        );
      }
      break;
    case 1: // 시가지/데이트
      if (era.get('love:32') >= 50 && !edu_marks.station) {
        edu_marks.station = 1;
        await print_event_name('방해', tachyon);
        await era.printAndWait([
          '오늘은 ',
          me.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '이 함께 데이트를 하러 나온 날이다.',
        ]);
        await era.printAndWait([
          '듣자하니 오늘 상점가에서 마술 퍼레이드가 있다고 하여, 겸사겸사 ',
          tachyon.sex,
          '를 데리고 구경을 시켜주려 했던 것이지만……',
        ]);
        await era.printAndWait('그러나……');
        era.println();
        await tachyon.say_and_wait('저 마술 지팡이는 소매 안에 숨겨져 있군.');
        await tachyon.say_and_wait('저 비둘기는 방금 전까지 이중 안감에 숨겨져 있었네. 별거 아니군.');
        await tachyon.say_and_wait(
          '저건 마그네슘의 산화 연소일 뿐이야. 실험실에서도 얼마든지 보여줄 수 있다네.',
        );
        era.println();
        await era.printAndWait([
          '마술의 트릭이 나올 때마다 매번 ',
          tachyon.get_colored_name(),
          '에 의해 크지도 작지도 않지만 주변 사람들에겐 다 들릴 법한 목소리로 폭로되었다.',
        ]);
        await era.printAndWait([
          '지루해서 그런 것이라면 차라리 낫겠으나, 매번 폭로가 끝날 때마다 ',
          me.get_colored_name(),
          '을(를) 빤히 쳐다보는 것이, 마치 칭찬을 바라는 것 같았다.',
        ]);
        await era.printAndWait([
          '무슨 칭찬받고 싶어 하는 강아지도 아니고…… ',
          me.get_colored_name(),
          '은(는) 머릿속에 떠오른 강아지를 털어내듯 고개를 저었다.',
        ]);
        await era.printAndWait([
          '아무튼, 노려보고 있는 마술사가 무대 아래로 내려와 주먹을 휘두르기 전에 서둘러 ',
          tachyon.get_colored_name(),
          '을 데리고 자리를 뜨기로 했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('에~~ 벌써 가는 건가?');
        era.println();
        await era.printAndWait([
          '그러나 ',
          tachyon.get_colored_name(),
          '은 아직 만족하지 못한 모양이었다.',
        ]);
        await era.printAndWait([
          '우선 뭔가 다른 것으로 ',
          tachyon.sex,
          '의 주의를 돌려야 한다…… 아, 저거다!',
        ]);
        era.printButton('「색이 변하는 야채 주스?」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 애써 놀란 척하며 노점의 주력 상품을 읽어 내려갔다. ',
          tachyon.get_colored_name(),
          '의 주의가 끌리기를 바라면서.',
        ]);
        await era.printAndWait(
          '노점 주인은 손에 든 보라색 액체를 컵에 부었고, 그 순간 액체는 붉은색으로 변했다.',
        );
        await era.printAndWait('……이건 중학교 교과서에 나오는 산염기 반응용 자색 양배추 주스잖아.');
        await era.printAndWait([
          '아무래도 좋으니 ',
          tachyon.get_colored_name(),
          '의 주의를 끌기 위해 일단은 연기하기로 했다.',
        ]);
        era.printButton('「정말 대단해 보여!」', 1);
        await era.input();
        await era.printAndWait([
          '아니나 다를까, ',
          me.get_colored_name(),
          '의 과장된 목소리는 성공적으로 ',
          tachyon.get_colored_name(),
          '을 마술 공연에서 떼어놓는 데 성공했다.',
        ]);
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 색이 변한 양배추 주스를 뚫어지게 쳐다보며 무언가 생각에 잠긴 듯했다.',
        ]);
        await era.printAndWait([
          '이상하네. 설마 ',
          tachyon.get_colored_name(),
          '은 저걸 본 적이 없는 건가?',
        ]);
        await era.printAndWait([
          '……아니, 아무리 그래도 그럴 리가 없지. 저건 가장 기초적인 산염기 지시약인데, ',
          tachyon.get_colored_name(),
          '이 모를 리가 없다.',
        ]);
        await era.printAndWait(['하지만 만약에, ', tachyon.sex, '가 정말로 접해본 적이 없다면……']);
        era.printButton('「정말 신기해…… 보이네?」', 1);
        await era.input();
        await era.printAndWait('안 되겠다. 더 이상 칭찬할 말이 떠오르지 않는다.');
        await era.printAndWait([
          '그래도 ',
          tachyon.get_colored_name(),
          '의 주의는 완전히 이쪽으로 돌아온 것 같았다.',
        ]);
        await era.printAndWait('이 정도면 문제는 없겠지……');
        era.println();
        await tachyon.say_and_wait('…………이런 것 따위를.');
        era.println();
        await era.printAndWait('에?');
        era.println();
        await tachyon.say_and_wait('…………자네는 이런 것 따위는 칭찬하면서, 나를 칭찬해주지는 않는 건가?');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 화가 났다.']);
        await era.printAndWait([
          '이유는 모르겠지만, ',
          tachyon.get_colored_name(),
          '은 명백히 화가 나 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '색이 더 화려하게 변하는 약이나, 심지어 빛나는 약조차 내가 만들 수 있는데……',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 뜬금없이 울먹이기 시작했다.']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 당황하며 서둘러 ',
          tachyon.sex,
          '를 달래기 시작했다.',
        ]);
        era.println();
        await era.printAndWait([
          '다음 날, ',
          tachyon.get_colored_name(),
          '은 256 RGB 색상을 모두 포함하는 약을 만들어 왔다.',
        ]);
        await era.printAndWait(
          '……대체 어떻게 한 약 안에 256가지 색상을 분할하여 배열한 것일까.',
        );
        await era.printAndWait('모르모트 군은 의구심을 떨칠 수 없었다.');
        return;
      }
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '음? 보통 사람들은 실험 도구를 사러 나가는 걸 데이트라고 부르지 않는다고?',
          );
          await tachyon.say_and_wait([
            callname,
            ', 데이트라는 단어는 매우 추상적이라네. 즉, 자네가 데이트라고 생각한다면 그것이 바로 데이트가 되는 거지. 알겠나?',
          ]);
          await tachyon.say_and_wait([
            '나처럼 초절정 미',
            tachyon.get_teen_sex_title(),
            '와 함께 시내를 걷는 것, 그것만으로 이미 데이트와 같지 않겠나.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('거리 구경, 차 마시기, 수다, 먹거리……');
          await tachyon.say_and_wait(
            '이것이 일반적인 데이트라는 건가? ……느낌상으론, 상당히 지루하군.',
          );
        },
      );
      if (relation < 50) {
        buffer.push(() =>
          tachyon.say_and_wait(
            '데이트가 실험 조수 겸 실험체의 의욕 향상에 미치는 정도의 분석인가? 음…… 연구 과제로 삼아볼 만하겠군.',
          ),
        );
      } else if (relation < 225) {
        buffer.push(() =>
          tachyon.say_and_wait([
            '데이트? ……',
            callname,
            ', 일반적인 과학자는 자신의 실험 동물과 데이트를 하지 않는다네. 내 말이 무슨 뜻인지 알겠나?',
          ]),
        );
      }
      break;
    case 2: // 쇼핑몰 구경
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '이보게 ',
            callname,
            '…… 옷 같은 건 인터넷 쇼핑으로 사면 그만 아닌가. 인간의 옷과 ',
            tachyon.get_uma_sex_title(),
            '의 옷이 무슨 상관이라고.',
          ]);
          await tachyon.say_and_wait('꼬리 부분에 구멍이 없어서 옷을 들출 때마다 다 보인다고?');
          await tachyon.say_and_wait(['………그건 성희롱이라네, ', callname, '.']);
        },
        async () => {
          await tachyon.say_and_wait('주방 도구? 그런 걸 왜 그렇게 많이 사는 건가……');
          await tachyon.say_and_wait(
            '에, 이걸로 그렇게 많은 요리를 할 수 있다고? ……으음…… 몰래 실험 경비로 처리한다면……',
          );
          await tachyon.say_and_wait(
            '괜찮네, 그냥 사게나. 겁먹을 것 없어. 내가 기입한다면 정당한 실험 도구로 신청할 방법이 있을 테니까…… 아마도.',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '무료 시음…… 무료 시용. 역시 최고의 마케팅은 『무료』로군. 물건을 팔기 위한 수단이라는 걸 뻔히 알면서도,',
          );
          await tachyon.say_and_wait([
            '무료라는 소리를 들으면 낯선 사람이 주는 음식에 대한 경계심을 자연스럽게 잊게 되다니…… ',
            callname,
            ', 이런 생각을 해봤네. 무료 약물 시음! ……안 될까?',
          ]);
        },
      );
  }
  await get_random_entry(buffer)();
};