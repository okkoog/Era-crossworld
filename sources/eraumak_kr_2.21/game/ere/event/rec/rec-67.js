/**
 * @file 사토노 다이아몬드 - 招募
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {CharaTalk} me
 * @param {CharaTalk} daiya
 * @param {CharaTalk} [other]
 */
async function common_comments(me, daiya, other) {
  era.printButton('「우선, 진심으로 누군가와 경쟁해 본 경험이 부족해」', 1);
  await era.input();
  await daiya.say_and_wait('진심으로 경쟁……? 그건 어떤 걸 말씀하시는 거죠……?');
  await me.say_and_wait('레이스 중에 주변의 압박 때문에 괴로워하지 않았어?');
  await daiya.say_and_wait(
    '아, 모의 레이스 때 말인가요…… 확실히 망설임 같은 걸 느끼긴 했어요. 지금까지 느껴본 적 없는 봉쇄당하는 듯한 초조함 때문에, 마음껏 달리지 못한다는 기분이 들었거든요.',
  );
  await daiya.say_and_wait(
    '하지만 어릴 때부터 함께 훈련하는 분들께 항상 부탁드려 왔어요. 『병주 연습을 할 때는 절대로 봐주지 말아 달라』고요.',
  );
  await me.say_and_wait('그렇다 해도, 다들 너를 배려하고 있었던 거겠지.');
  await daiya.say_and_wait(
    '어, 어머나～ 그건 정말 생각지도 못했어요……! 그래서 제가 다른 분들에게 압박을 느꼈던 거군요……!',
  );
  await me.say_and_wait('또 하나 문제는, 너무 쉽게 평정심을 잃는다는 거야');
  await daiya.say_and_wait(
    '어머…… 제가 평정심을요? 그런 말은 처음 들어봐요…… 대체 어떤 부분에서 그렇게 느끼신 건가요?',
  );
  await era.printAndWait(
    `${me.name}은(는) 레이스 중에 관찰했던 내용을 ${daiya.sex}에게 전달했다. 레이스 중반, 인내해야 할 타이밍에 주위와의 경쟁 때문에 페이스를 약간이지만 올려버린 점이다.`,
  );
  await era.printAndWait(
    `그것은 평정심을 잃었기 때문에 발생한 일이다. 그것이 바로 명문가의 영애라는 신분 뒤에 숨겨진, ${daiya.sex}의 가장 진실된 본성이다.`,
  );
  await daiya.say_and_wait(
    '──!? 그때 확실히 조금이라도 앞 위치를 잡고 싶어서, 다리가 근질근질하긴 했지만……',
  );
  await daiya.say_and_wait(
    '그래도 바로 참아냈거든요. 분명히 참았는데…… 그 찰나의 페이스 변화를 당신은……',
  );
  await daiya.say_and_wait(
    '당신은…… 대체 정체가 뭐죠? 단 한 번의 레이스만으로 저에 대해 모든 걸 꿰뚫어 보시다니……',
  );
  await me.say_and_wait('그건 내가 너의 달리기에 매료됐기 때문이야');
  await era.printAndWait(
    `매료되었기에 ${daiya.sex}의 장점과 단점을 순식간에 파악할 수 있었다. ${me.name}은(는) ${daiya.sex}의 가문에 대해서는 잘 모르지만, ${daiya.sex}의 본질은 단번에 꿰뚫어 본 것이다.`,
  );
  if (other && other.id === 13) {
    await daiya.say_and_wait(
      '지금껏…… 지금껏 제게 이런 말을 해준 사람은 없었어요. 오디션에 참가했던 사람들조차…… 그런데 당신은──',
    );
    await other.say_and_wait(
      '후훗, 축하해요. 이번 파티에서 정말 좋은 인재를 만난 모양이군요.',
    );
    await other.say_and_wait(
      '사토노 씨, 이분도 오디션에 참가하게 해보는 게 어때요? 어쩌면 사토노 그룹의 다른 분들도 이분을 눈여겨보실지도──',
    );
  }
  await daiya.say_and_wait('──채용할게요.');
  era.printButton('「……어?」', 1);
  await era.input();
  await daiya.say_and_wait(
    '채용이에요! 당신이야말로…… 당신이야말로 저의 트레이너예요! 제가 계속해서 찾아 헤매던 단 한 사람. 그러니 채용이에요!',
  );
  if (other) {
    if (other.id === 68) {
      await other.say_and_wait(
        '자, 잠깐만…… 다이아짱, 트레이너는 오디션을 통해서 결정하기로 한 거 아니었어?',
      );
      await daiya.say_and_wait(
        '아뇨, 이미 결정했어요. 설령 키타짱이 말린다고 해도, 이것만큼은 절대로 마음을 바꾸지 않을 거예요.',
      );
    } else if (other.id === 13) {
      await other.say_and_wait(
        '어머나? 사토노 씨!? 당신도 알고 있잖아요? 당신의 트레이너가 사토노 그룹에게 얼마나 중요한 의미인지.',
      );
      await other.say_and_wait(
        '단순한 직감으로 이렇게 성급하게 결정해서는 안 돼요! 우선 돌아가서 어른들과 제대로 상의를──',
      );
      await daiya.say_and_wait(
        '아뇨, 이미 결정했어요. 설령 제가 존경하는 맥퀸 씨가 말씀하셔도, 이것만큼은 절대로 마음을 바꾸지 않을 거예요.',
      );
    }
  }
  await daiya.say_and_wait(
    `저의 트레이너는 이분이에요! 오직 이분만이 해낼 수 있어요. 원래대로라면 신중하게 상의해야 할 일이지만──`,
  );
  await daiya.say_and_wait(
    '집안 모두가 결정하는 것── 그것 또한 분명 하나의 징크스일 거예요. 그렇다면 직감을 믿고 그 징크스를 깨뜨리겠어요! 누가 뭐라 해도 당신이 저의 트레이너예요!',
  );
  await daiya.say_and_wait(
    '결정했어요, 이제 다 정해진 거예요. 이 일을 맡아 주실 거죠? 네? 네?!',
  );
  await era.printAndWait(
    `차분한 영애의 인상과는 달리, ${daiya.sex}의 태도는 상당히 완강했다. ${me.name}이(가) 고개를 끄덕일 때까지 사토노 다이아몬드는 ${me.name}의 손을 놓아주지 않았다.`,
  );
  era.set('cflag:67:모집상태', recruit_flags.yes);
  era.set('flag:대상물색', 0);
  era.println();
  await era.printAndWait('그렇게 당신과 사토노 다이아몬드의 3년이 시작되었다!', {
    color: daiya.color,
    fontSize: '1.5rem',
  });
}

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const me = get_chara_talk(0),
      mcqueen = get_chara_talk(13),
      daiya = get_chara_talk(67),
      kita = get_chara_talk(68);
    const event_marks = EventMarks.get(0);
    const event_object = new EventObject(67, cb_enum.recruit);
    let ret;
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return false;
      }
      await era.printAndWait(
        `중견 트레이너 A 「드디어…… 『${daiya.sex}』가 드디어 모의 레이스에 나선대. 올해 초부터 아주 큰 소동이 일어나겠구만!」`,
      );
      await era.printAndWait(
        '──신년 휴가가 끝난 뒤. 체육관에서 열린 트레이너 회의에서 동료들이 웅성거리고 있었다.',
      );
      await era.printAndWait(
        `그렇다, 내일은 바로 『그 가문의 ${
          daiya.sex_code - 1 ? '영애' : '도련님'
        }』가 드디어 모의 레이스에 참가하는 날이다. 과연 누가 ${daiya.sex}의 트레이너가 될 것인가……?`,
      );
      await daiya.say_and_wait(
        '오늘은 잘 부탁드립니다. 그리고…… 키타짱, 잘 부탁해. 와줘서 정말 고마워♪',
      );
      await kita.say_and_wait(
        '헤헤헤! 다이아짱의 첫 데뷔 무대인데 내가 안 올 리가 없잖아!',
      );
      await kita.say_and_wait('먼저 데뷔한 선배로서 모르는 게 있으면 뭐든지 물어봐!');
      await daiya.say_and_wait(
        '후훗, 살살 부탁해……라고 말하고 싶지만～ 키타짱은 레이스에서 한 번도 봐준 적 없지?',
      );
      await kita.say_and_wait(
        '응! 난 달릴 땐 언제나 진심이야! 특히 상대가 다이아짱이라면 더더욱!',
      );
      await era.printAndWait([
        '오늘의 주인공은 유명한 사토노 그룹의 영애 ',
        daiya.get_colored_name(),
        '다. 그리고 가장 강력한 라이벌은 ',
        daiya.sex,
        '의 다정한 절친 ',
        kita.get_colored_name(),
        '이다.',
      ]);
      await era.printAndWait(
        '사토노 다이아몬드의 재능은 과연 어느 정도일까? 레이스의 서막이 드디어 올랐다.',
      );
      await kita.say_and_wait(
        '흐랴압! 좋아, 강선행, 성공! 이대로 마지막까지 도망쳐 주겠어!',
        true,
      );
      await kita.say_and_wait(
        `하지만…… 다이아짱이라면 분명 쫓아오겠지. 언제나 내 뒤를 바로 따라왔으니까!`,
        true,
      );
      await daiya.say_and_wait(
        '벌써 이 정도나 거리가 벌어지다니!? 역시 키타짱이야……',
        true,
      );
      await daiya.say_and_wait(
        '게다가 다른 참가자들이 내 주변을 에워싸고 있네…… 윽, 일부러 붙는 건가!? 으으, 좌우 앞쪽이 다 막혔어…… 하지만……!',
        true,
      );
      await daiya.print_and_wait(
        '【어린 시절의 다이아몬드 「아버님, 어머님. 다이아는 약속할게요. 제가 반드시 사토노 가문의 꿈을 이룰게요!」】',
      );
      await daiya.say_and_wait(
        '난 언제나 오늘만을 위해 준비해 왔어. 수많은 선생님께 배우고, 연구하고, 수많은── 기대를 짊어지고!',
        true,
      );
      await daiya.say_and_wait(
        '아직 참아야 해. 타이밍은 지금이 아니야── 당장이라도 튀어 나가고 싶지만…… 냉정하게 형세를 관찰해야 해……',
        true,
      );
      await kita.say_and_wait(
        '좋아, 마지막 코너다……! 내가 너무 빨리 달렸나? 내 페이스대로 여기까지 왔으니 아무리 다이아짱이라도……',
        true,
      );
      await daiya.say_and_wait(
        `──!! 키타짱의 속도가 떨어졌어! 지금이야──!!`,
        true,
      );
      await daiya.say_and_wait('야아아아아아압──!!');
      await kita.say_and_wait('뭐라고? 어엇, 어어어어어!?');
      await era.printAndWait('트레이너들 「우오오오오오오오오!!」');
      await era.printAndWait(
        `중견 트레이너 A 「설마 코 차이로…… 키타산 블랙을 이겼다고!? 아직 정식 데뷔도 안 했는데. 역시 대단하구만!」`,
      );
      await era.printAndWait(
        '신인 트레이너 A 「이것이야말로 다이아몬드급 인재……! 제발, 제발 계약을……!」',
      );
      await daiya.say_and_wait(
        '어머, 이, 이게 무슨 일이죠? 왜 이렇게 많은 분이 모인 거죠? ……키타짱?',
      );
      await kita.say_and_wait(
        '그야 당연히 다이아짱의 트레이너가 되고 싶어서 모인 사람들이지! 에휴── 주인공 자리를 뺏겨버려서 기뻐해야 할지 분해야 할지 모르겠네～',
      );
      await daiya.say_and_wait(
        '제 트레이너가 되고 싶어 하는 분들……! 그렇군요! 제 레이스를 보러 이렇게 많은 분이 오실 줄은 몰랐어요.',
      );
      await daiya.say_and_wait(
        '──정말 영광이에요, 감사합니다. 앞으로 더 노력해서 제 자신을 갈고닦아야겠네요.',
      );
      await era.printAndWait(
        `${daiya.sex}의 활약은 매우 훌륭했다. 정확하게 공격 타이밍을 포착하고, 자신의 폭발적인 가속력을 완벽하게 활용했다……`,
      );
      await era.printAndWait(
        '천부적인 재능과 엘리트 교육의 결정체라고 할 수 있다. 엘리트 특유의 약점도 눈에 띄었지만…… 그 약점마저 성장 가능성으로 보일 정도였다.',
      );
      await kita.say_and_wait(
        '아, 당신도 트레이너죠? 아까부터 엄청 집중해서 보던데, 다이아짱 정말 대단하지 않나요?',
      );
      await kita.say_and_wait(
        `어릴 때부터 빨랐지만, 요즘 들어 움직임이 더 날카로워졌어요! 전 개인적으로 다이아짱을 정말 강력 추천해요!`,
      );
      await kita.say_and_wait('어때요, 한번 가서 말이라도 걸어보는 게?');
      era.printButton('한번 해보자', 1);
      era.printButton('도망간다', 2);
      ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '어머? 아까 관람석에서 키타짱이랑 즐겁게 이야기하시던 그분인가?',
          true,
        );
        await daiya.say_and_wait('뭔가 하고 싶은 말씀이 있으신 것 같은데……', true);
        await daiya.say_and_wait('트레이너님, 제 레이스에 대해 어떻게 생각하시는지 말씀해 주시겠어요?');
        await era.printAndWait(
          `${me.name}은(는) 대답을 거절하는 것이 실례라고 생각했다. ${me.name}은(는) 우선 ${daiya.sex}의 재능을 진심으로 칭찬하고── 이어서 ${daiya.sex}가 앞으로 극복해야 할 과제들을 전달했다.`,
        );
        await common_comments(me, daiya, kita);
        return true;
      } else {
        await era.printAndWait(
          `${me.name}은(는) 멀리 있는 사토노 다이아몬드를 바라보며 절친 키타산의 강력한 추천을 들었다. 최고의 인재. 무한한 가능성. 하지만……`,
        );
        await era.printAndWait(
          '──동시에 너무나도 거리가 먼 존재, 대기업 그룹의 영애다. 평범한 트레이너가 열정만으로 다가가기엔 너무나 벅찬 상대였다.',
        );
        await daiya.say_and_wait(
          `어머? 키타짱이랑 관람석에서 즐겁게 이야기하던 저분은……`,
          true,
        );
        await daiya.say_and_wait(
          `이쪽으로 오실 생각이 없으신 걸까요? 하지만 제게 뭔가 하고 싶은 말씀이 있는 눈치였고, ${me.sex}에게선 뭔가 다른 분들과는 다른 느낌이 들었는데……`,
          true,
        );
        await era.printAndWait(
          '교관 A 「자, 여기까지! 트레이너 여러분, 일단 진정해 주십시오. 사토노 다이아몬드의 전속 트레이너에 관해서는……」',
        );
        await era.printAndWait(
          '교관 A 「선발 레이스 이후, 사토노 그룹에서 직접 주최하는 트레이너 오디션을 통해 결정될 예정입니다. 관심 있는 분들은 꼭 참가해 주십시오.」',
        );
        await kita.say_and_wait(
          '그, 그렇구나…… 다이아짱네 집은 오디션으로 트레이너를 정하는구나. 트레이너 선생님도 지원하실 거죠?',
        );
        era.printButton('역시 참가하자', 1);
        era.printButton('도망간다', 2);
        let ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(
            `너무 오랫동안 고민한 탓인지, ${me.name}의 순서는 마지막으로 밀려났다.`,
          );
          await era.printAndWait(
            '사토노 그룹 심사위원 「다음은 지원 번호 29번. 마지막 지원자분, 들어오십시오.」',
          );
          await daiya.say_and_wait(
            '어머? 아까 키타짱이랑 관람석에서 즐겁게 이야기하시던 그분인가요?',
            true,
          );
          await daiya.say_and_wait(
            '트레이너님, 제 레이스에 대해 어떻게 생각하시는지 말씀해 주시겠어요?',
          );
          await era.printAndWait(
            `${me.name}은(는) 우선 ${daiya.sex}의 재능을 진심으로 칭찬하고── 이어서 ${me.name}이(가) 생각하는 ${daiya.sex}의 보완점을 전달했다.`,
          );
          await common_comments(me, daiya);
          return true;
        } else {
          await kita.say_and_wait('어……? 트레이너 선생님?');
          await era.printAndWait(
            '심사숙고 끝에…… 결국 오디션에 참가하지 않기로 했다. ──역시 자신 같은 사람이 감당할 수 있는 상대가 아니라고 생각했기 때문이다.',
          );
          await era.printAndWait(
            '사토노 그룹 심사위원 「다음은 지원 번호 28번. 마지막 지원자분, 들어오십시오.」',
          );
          await daiya.say_and_wait('음…… 이분이 마지막…… 그렇다는 건……', true);
          await daiya.say_and_wait(
            '결국 그때 그 트레이너님은 오지 않으셨네요. 뭔가 말씀하고 싶어 하시던 그분은…… 왜……',
            true,
          );
          era.set('cflag:67:무작위모집', 0);
          era.set('flag:대상물색', 67);
          event_marks.add(event_hooks.out_start);
          add_event(event_hooks.out_start, event_object);
        }
        return false;
      }
    } else if (stage === event_hooks.out_start) {
      if (era.get('flag:현재상호작용캐릭터')) {
        era.setVerticalAlign('middle');
        era.printInColRows(
          {
            columns: [],
            config: { width: 2 },
          },
          {
            columns: [
              {
                config: {
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                },
                content: '???',
                type: 'text',
              },
              {
                config: { color: daiya.color, fontSize: '0.75rem' },
                content: '???',
                type: 'text',
              },
            ],
            config: { width: 16, verticalAlign: 'middle' },
          },
        );
        era.setVerticalAlign('top');
        era.println();
        await era.printAndWait(`${me.name}은(는) 무언가 목소리를 들은 것 같다…………`);
        await daiya.say_and_wait('트레이너 선생님, 저 에 게 서 절 대 도 망 칠 수 없 답 니 다?');
        add_event(event_hooks.out_start, event_object);
        return false;
      }
      await print_event_name('캐주얼 파티', daiya);
      await era.printAndWait(
        `어느 날의 체육관. 메지로 가문을 대표하는 우마무스메 중 한 명인 메지로 맥퀸이 성명을 발표하고 있었다.`,
      );
      await mcqueen.say_and_wait(
        '재학생 여러분, 그리고 평소 저희를 보살펴 주시는 트레이너 여러분. 오늘 메지로 가문에서 알려드릴 사항이 있습니다.',
      );
      await mcqueen.say_and_wait(
        '조만간 메지로 가문 저택에서 친목 파티를 개최하고자 합니다. 부디 편안한 사복 차림으로 참석해 주시길 바랍니다.',
      );
      await era.printAndWait(
        '신입 트레이너 A 「오～ 메지로 가문에서 주최하는 캐주얼 파티라니. 이런 행사를 자주 열어주니 정말 고맙지. 너도 갈 거지?」',
      );
      era.printButton('「응, 가야지……」', 1);
      era.printButton('「역시 안 갈래」', 2);
      ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '신인 트레이너 A 「그럼 거기서 보자고. 아, 맞다. 너 그거 알아? 저번에 있었던 사토노 다이아몬드 트레이너 오디션 결과……」',
        );
        await era.printAndWait(
          '신인 트레이너 A 「──놀랍게도 단 한 명도 뽑히지 않았대. 앞으로 어떻게 할 생각인지 궁금하네.」',
        );
        await era.printAndWait(
          `파티 당일. ${me.name}은(는) 회장에서 보드게임에 열중하고 있는 사토노 다이아몬드와 키타산 블랙을 발견했다.`,
        );
        await kita.say_and_wait(
          '에에엣, 오셀로는 귀퉁이를 뺏기면 지는 게임이잖아! 그런데 다이아짱, 왜 거기다 둔 거야!?',
        );
        await daiya.say_and_wait(
          '응, 네 귀퉁이를 뺏기면 패배한다는 게 상식이지. 하지만 다들 그렇게 생각하고 있다면──',
        );
        await daiya.say_and_wait(
          '내가 그 징크스를 깨뜨리겠어! 이 전설을 타파하고 반드시 승리해 보이겠어!',
        );
        await kita.say_and_wait(
          '우와아, 또 시작됐다! 다이아짱의 징크스 파괴 모드! 이 모드에 들어가면 항상──',
        );
        await era.printAndWait(
          `대국 결과── 사토노 다이아몬드의 압도적인 승리였다. ${me.name}은(는) 평소의 차분한 영애와는 다른 ${daiya.sex}의 이면을 보게 되었다.`,
        );
        await era.printAndWait(
          `징크스── 그녀는 미신이나 징크스를 마주하면 그것을 깨부수고 싶어 하는 모양이다. ${me.name}이(가) ${daiya.sex}의 성격에 대해 곰곰이 생각하던 그때──`,
        );
        await daiya.say_and_wait(
          '저기…… 잠시 실례해도 될까요? 저희, 전에 경기장에서 뵌 적이 있죠?',
        );
        era.printButton('「사토노 다이아몬드……?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '그때 제 모의 레이스를 보러 와주셨죠? 저기…… 여쭤보고 싶은 게 있어서요～',
        );
        await daiya.say_and_wait(
          '트레이너 오디션, 왜 오지 않으셨나요? 분명 관심이 있으실 거라고 생각했는데……',
        );
        await daiya.say_and_wait(
          '제 어떤 부분이 기대에 미치지 못했나요? ……혹시 제 자질이 부족하다고 생각하셨나요?',
        );
        await me.say_and_wait('절대 그렇지 않아. 왜냐하면……!');
        await era.printAndWait(
          `${me.name}은(는) 마음속에 있던 생각을 솔직하게 털어놓았다. ${daiya.sex}의 자질은 충분하지만, 자신은 그저 평범한 트레이너일 뿐이라 감당하기 벅찼다고 말이다.`,
        );
        await daiya.say_and_wait('감당하기 벅차다니…… 하지만 그건 단지……');
        await mcqueen.say_and_wait(
          '후훗, 용기가 나지 않는다는 건 이해하지만, 그렇게까지 겁을 내실 필요는 없다고 생각해요.',
        );
        await daiya.say_and_wait('아, 맥퀸 씨♪ 안녕하세요, 초대해 주셔서 감사해요～!');
        await mcqueen.say_and_wait(
          '안녕하세요. 사토노 씨, 그리고 젊은 트레이너 선생님, 환영합니다. 실례가 안 된다면 저도 대화에 끼어도 될까요?',
        );
        await mcqueen.say_and_wait(
          '사토노 그룹이 매우 유명하고 거대한 기업인 것은 맞지만, 그렇다고 다가가기 힘든 상대는 아니에요. 오디션을 따로 개최했던 것도──',
        );
        await mcqueen.say_and_wait(
          '그만큼『신중할 수 밖에 없기』때문이죠. 사토노 씨, 제 말이 맞죠?',
        );
        await daiya.say_and_wait(
          '……네, 맞아요. 적합한 트레이너를 찾는 건, 제 꿈과 사토노 가문의 숙원을 함께 짊어질 사람을 찾는 일이니까요.',
        );
        await daiya.say_and_wait(
          `사토노 가문── 비록 신흥 가문이긴 하지만, 우마무스메 레이스 문화에 대해 깊은 애정을 가지고 있고, 발전을 위해 공헌하고 싶어 합니다.`,
        );
        await daiya.say_and_wait(
          '운영 지원이나 자선 사업 등 다방면에서 노력하고 있지만, 저희의 역사는 메지로가에 비하면 아직 『최대의 공헌』을 이루지 못했어요.',
        );
        await me.say_and_wait('최대의 공헌?');
        await daiya.say_and_wait(
          `네, 바로── 『일족 가운데에서 G1 레이스를 우승하는 유명 우마무스메를 대거 배출하는 것』이에요.`,
        );
        await mcqueen.say_and_wait(
          `그것이야말로 우마무스메 업계 고유의 문화죠. 유명한 우마무스메를 많이 배출한다는 건 그 무엇과도 바꿀 수 없는 최고의 공헌이 되니까요.`,
        );
        await mcqueen.say_and_wait(
          `그 막중한 기대를 몸소 짊어지고 있는 기대주가 바로 이 사토노 다이아몬드 씨입니다. 트레이너 오디션 또한 ${daiya.sex}를 지원하고 도울 사람을 찾기 위해 열린 것이었고요.`,
        );
        await mcqueen.say_and_wait(
          '사토노 그룹이 위세를 떨치기 위해서가 아니라, 정말로 그런 인재를 간절히 원하고 있기 때문이라는 것, 맞나요? 사토노.',
        );
        await daiya.say_and_wait(
          '……네. 모든 건 가문의 숙원을 이루기 위해서예요. 그래서 어떻게든 저와 함께 이 꿈을 짊어질 분을 찾고 싶었어요.',
        );
        await daiya.say_and_wait(
          '트레이너 선생님, 제 레이스에 대해 어떻게 생각하시나요? 그날 제게 뭔가를 말하고 싶어 하던 그 눈빛이 정말 잊히지 않아요.',
        );
        await era.printAndWait(
          `그녀의 표정은 매우 진지했다. 오직 목표를 이루기 위해 해답을 갈구하는 올곧은 눈빛이었다……`,
        );
        await era.printAndWait(
          `${me.name}은(는) 대답을 거절하는 것이 실례라고 생각했다. ${me.name}은(는) 우선 그녀의 재능을 진심으로 칭찬하고── 이어서 ${me.name}이(가) 생각하는 그녀의 보완점을 전달했다.`,
        );
        await common_comments(me, daiya, mcqueen);
        event_marks.sub(event_hooks.out_start);
      } else {
        await era.printAndWait('불길한 예감이 들어서 역시 가지 않기로 했다.');
        await era.printAndWait(
          `${me.name}이(가) 몸을 돌려 떠나려 할 때, 무언가 목소리가 들려온 것 같았다…………`,
        );
        await daiya.say_and_wait('트레이너 선생님, 저 에 게 서 절 대 도 망 칠 수 없 답 니 다?');
        add_event(event_hooks.out_start, event_object);
      }
      return true;
    }
  }
};