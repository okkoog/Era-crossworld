/**
 * @file 마야노 탑건 - 招募
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const chara = get_chara_talk(24),
      me = get_chara_talk(0);
    const sex = era.get('cflag:24:성별') - 1 ? '그녀' : '그';
    let maya_1;
    const event_marks = EventMarks.get(0);
    switch (stage) {
      case event_hooks.recruit:
        if (era.get(`cflag:24:모집상태`) === recruit_flags.no) {
          if (await this.check_before_rec()) {
            return false;
          }
          await era.printAndWait(
            `오늘은 전도유망한 실력파 우마무스메들을 발굴하기 위한 선발 레이스가 열리는 날이다. 어떤 우마무스메를 만나게 될까? ${me.name}은(는) 들뜬 마음으로 경기장으로 향했다――`,
          );
          await chara.say_and_wait(
            '시러시러시러――! 마야도 레이스에 나가고 싶어! 내보내 줘!!',
          );
          await era.printAndWait(
            `선발 레이스 스태프 A「그러니까, ${chara.name} 양! 멋대로 레이스에 난입하면 안 됩니다! 윽, 몸놀림이 너무 빠르잖아……!」`,
          );
          await chara.say_and_wait(
            '시러시러시러~! 마야도 심장이 큥큥거리는 기분을 느끼고 싶단 말이야~!!',
          );
          await era.printAndWait(
            `조금 떨어진 곳에서 ${chara.name}이라는 이름의 우마무스메가 스태프와 실랑이를 벌이고 있었다…… 어라, 왜 이쪽으로 뛰어오는 거지?`,
          );
          await chara.say_and_wait('흐흥, 절대로 안 잡힐 거야~! ……와앗!?');
          await era.printAndWait(
            `${me.name}은(는) 달려들던 ${chara.name}과 부딪혔고, 당황하며 ${sex}를 받아냈다. 소녀의 부드러운 몸과 밀착된 순간, ${me.name}은(는) 전례 없는 강렬한 충격을 받았다―― 물리적인 의미였을지도 모르지만.`,
          );
          await chara.say_and_wait('아와와와, 미안해――! 괜찮아?」');
          era.printButton('「나 이래 봬도 트레센의 트레이너라고, 이 정도 상처쯤이야!」', 1);
          era.printButton('「난 괜찮아, 너야말로 다친 데 없니?」', 2);
          maya_1 = await era.input();
          if (maya_1 === 1) {
            await era.printAndWait(
              `실전 공수도의 아버지 최배달은 일찍이 파괴력=속도X악력X체중 이라고 주장했다.`,
            );
            await era.printAndWait(
              `우마무스메, 특히 중등부 우마무스메의 체중은 어느 정도일까? 30kg? 35kg? 아무리 생각해도 40kg은 넘지 않을 것이다.`,
            );
            await era.printAndWait(
              `하지만 여기에 ${sex}들이 짊어진 염원과 축복, 의지, 그리고 우마소울(Uma-Soul)의 무게가 더해진다면 그 중량은 400kg을 가볍게 상회한다!`,
            );
            await era.printAndWait(
              `인간의 3배에 달하는 속도, 3배의 악력, 3배의 체중이 더해지면 그 위력은 인간의 10배, 아니 9배조차 아득히 뛰어넘는다!`,
            );
            await era.printAndWait(
              `이토록 강하고 패도적인 충격을 ${me.name}이(가) 대체 어떻게 버텨냈단 말인가? 아니, 버텨낼 수 있을 리가 없었다!`,
            );
            if (
              era.get(`base:0:스태미나`) >
              Math.round(Math.random() * era.get(`base:24:파워`))
            ) {
              await era.printAndWait(
                `하지만 ${me.name}은(는) 버텨냈다! 왜냐하면 ${me.name}은(는) 겁나게 강하기 때문이다!`,
              );
              await era.printAndWait(
                `이토록 자그마한 우마무스메가 어찌 ${me.name}에게 털끝만큼의 상처라도 입힐 수 있겠는가?`,
              );
              era.add(`base:0:파워`, 10);
              era.printButton('「우마무스메를 지키는 것이 나의 사명이니까!」', 1);
              await era.input();
            } else {
              era.printButton('「그러니까…… 멈추지 말라고……」', 1); 
              await era.input();
              await era.printAndWait(
                `정말 빠르구나…… 그것이 ${me.name}의 마지막 생각이었다.`,
              );
              await era.printAndWait(`${me.name}은(는) 눈앞이 캄캄해지며 의식을 잃었다……`);
              era.set('cflag:24:무작위모집', 0);
              event_marks.add(event_hooks.recruit_start);
              add_event(
                event_hooks.recruit_start,
                new EventObject(24, cb_enum.recruit),
              );
              return true;
            }
          }
          await chara.say_and_wait('응, 마야는 괜찮아! 오빠가 받아준 덕분에……');
          await chara.say_and_wait(
            `에헤헤. 정말 상냥하네! 혹시 신입 트레이너야? 마야의 이름은 ${chara.name} 이야!`,
          );
          await era.printAndWait(
            `선발 레이스 스태프 A「아, 마침 잘 됐군요! 트레이너님! 실례지만 ${sex}가 멋대로 레이스에 나가지 못하게 좀 봐주시겠습니까!? 부탁드립니다!」`,
          );
          era.printButton('「시러시러시러!」', 1);
          era.printButton('「네, 알겠습니다.」', 2);
          maya_1 = await era.input();
          if (maya_1 === 1) {
            await era.printAndWait(`어른의 붕괴는 대개 한순간에 찾아오는 법이다……`);
            await era.printAndWait(
              `변함없는 따분한 일상, 고강도의 업무, 낯선 곳에서의 불안감은 이미 ${me.name}의 정신 상태를 한계까지 몰아넣고 있었다.`,
            );
            await era.printAndWait(
              `스태프의 직장 갑질은 의지를 부러뜨리는 마지막 바늘 하나가 되었고, 앞으로 매일같이 남의 뒤치다꺼리나 하며 청소부만도 못한 취급을 받다 버려질 거라는 절망이 ${me.name}의 내면을 가득 채웠다.`,
            );
            await era.printAndWait(
              `${me.name}은(는) 바닥에 웅크린 채, 열 살 먹은 아이처럼 엉엉 울기 시작했다.`,
            );
            await chara.say_and_wait('에……?');
            await era.printAndWait(
              `스태프와 ${chara.name}은 너무 놀라 할 말을 잃었다.`,
            );
            await era.printAndWait(
              `하지만 트레센의 스태프답게 경험이 풍부했던 스태프 A는 금세 냉정을 되찾았다.`,
            );
            await era.printAndWait(
              `선발 레이스 스태프 A「맞다! ${chara.name} 양, 이 트레이너님을 좀 돌봐줄 수 있을까요?」`,
            );
            await chara.say_and_wait('?');
            await era.printAndWait(
              `선발 레이스 스태프 A「누군가를 돌봐줄 줄 알게 되면, 어른스러운 느낌이 들거든요. 이건 ${chara.name} 양의 매력을 뽐낼 수 있는 절호의 기회예요!」`,
            );
            await chara.say_and_wait('오오! 아이 카피!');
            await era.printAndWait(
              `과정이야 어찌 됐든, ${chara.name}을 떼어놓으려던 스태프의 목적은 달성되었고 그는 서둘러 자리를 떠났다.`,
            );
            await chara.say_and_wait('자자, 이제 그만 울어……');
            await era.printAndWait(
              `소녀는 조금 서툰 솜씨로 ${me.name}을(를) 품에 안았다. 아직 덜 성숙한 가슴이었지만 충분히 따스하고 부드러웠다.`,
            );
            await era.printAndWait(
              `우마무스메에게서 풍겨오는 은은한 향기에 감싸이자, ${me.name}은(는) 이상하리만큼 안도감을 느꼈다.`,
            );
            era.printButton('「엄마……」', 1);
            await era.input();
            await chara.say_and_wait(
              '엄마는 여기 있단다~ 착하지~ 착하다…… 헤헤, 왠지 정말 어른이 된 것 같은 기분이야~',
            );
            await era.printAndWait(
              `${chara.name}의 위로 속에서 ${me.name}의 긴장이 풀리며 의식이 서서히 멀어져 갔다……`,
            );
          } else {
            await chara.say_and_wait(
              '에에에!? 잠깐만! 왜 부탁을 들어주는 거야!?',
            );
            await chara.say_and_wait('정말, 상냥한 트레이너인 줄 알았는데!');
            await era.printAndWait(
              `한바탕 소동이 있었지만 결국 ${chara.name}은 레이스에 나가지 못했고, 선발 레이스는 ${chara.name}을 제외한 채 시작되었다.`,
            );
            await chara.say_and_wait(
              '아, 좋겠다. 레이스 정말 좋겠다. 마야도 나가고 싶은데~ 재미없어.',
            );
            await chara.say_and_wait(
              '저기 저기, 마야랑 이야기라도 좀 하자! 뭐 재밌는 얘기 없어?',
            );
            await era.printAndWait(
              `${me.name}이(가) 고민하던 그때, ${chara.name}이 갑자기 경기장 쪽을 바라보며 나지막이 입을 열었다.`,
            );
            await chara.say_and_wait('응? 지금 2등인 저 사람――');
            await era.printAndWait(
              `${chara.name}의 말에 무심코 2위로 달리는 우마무스메를 쳐다보았다.`,
            );
            await era.printAndWait(
              `지금 위치라면 타이밍에 따라 1위의 독주를 견제할 수 있을지도 모른다.`,
            );
            await era.printAndWait(
              `게다가―― 운이 좋다면 앞길이 확 트이면서 그대로 우세를 점한 채 최종 직선에 진입할 수도 있다.`,
            );
            await chara.say_and_wait(
              '딱 좋은 느낌이 들 때 『슈웅』 하고 힘차게 딛고 나가서, 그다음에 『파앗』 하고 달리면 될 텐데.',
            );
            await chara.say_and_wait('딱 좋은 느낌이…… 아, 지금!!');
            await era.printAndWait(`???「으윽…… 무리야……!!」`);
            await chara.say_and_wait('아―― 아깝다~');
            await era.printAndWait(
              `……비록 그 우마무스메는 실패했지만, ${chara.name}이 말한 타이밍은 완벽했다.`,
            );
            await chara.say_and_wait(
              '아―― 아, 좋겠다 좋겠다! 마야도 레이스에 나가고 싶어.',
            );
            era.printButton('（너는 대체……?）', 1);
            await era.input();
            await chara.say_and_wait('에? ……마야를 그렇게 빤히 쳐다보고, 왜 그래?');
            await chara.say_and_wait(
              '설마…… 이게 그 말로만 듣던 첫눈에 반했다는 거!? 꺄아~☆ 마야는 정말 인기 많다니까!',
            );
            await era.printAndWait(
              `아직 완벽하게 언어로 표현하지는 못하지만, ${chara.name}은 이미 레이스의 전개를 완벽하게 읽고 있었다.`,
            );
            await era.printAndWait(
              `${sex}가 ${me.name}에게 보여준 재능의 편린은 ${me.name}의 마음속에 깊은 인상을 남겼다……`,
            );
          }
          era.set('cflag:24:무작위모집', 0);
          event_marks.add(event_hooks.recruit_start);
          add_event(
            event_hooks.recruit_start,
            new EventObject(24, cb_enum.recruit),
          );
          return true;
        } else {
          era.set(`cflag:24:무작위모집`, 0); 
          if (era.get(`cflag:24:모집상태`) === -3) {
            await chara.say_and_wait('야호――♪ 요즘 자주 만나네.');
            await chara.say_and_wait(
              '지금 말이야, 밑에 경기장에서 하는 모의 레이스를 구경하고 있어. 마야는 나갈 수 없으니까―.',
            );
            await chara.say_and_wait('좋겠다~ 마야도 레이스에 나가고 싶은데. 하지만――');
            era.printButton('「무슨 일이 있어도 트레이닝은 하기 싫은 거니?」', 1);
            await era.input();
            await chara.say_and_wait('……하기 싫어.');
            await chara.say_and_wait(
              '안 하면 안 된다고 하니까, 처음에는 제대로 참여했었다구?',
            );
            await chara.say_and_wait(
              '근데 그런 것들은 한 번만 해보면 다 알 수 있단 말이야. 다 아는 걸 계속하는 건 너무 재미없어.',
            );
            await chara.say_and_wait('계속 재미없는 걸 하는 게 무슨 의미가 있어?');
            await era.printAndWait(
              `${chara.name}은 무엇이든 금세 『정답』을 찾아내고, 그것을 훌륭하게 해내곤 했다.`,
            );
            await era.printAndWait(
              `아마도 ${sex}는 끊임없는 노력을 쌓아 올린 끝에 무언가를 성취해 본 경험이 없는 것이리라.`,
            );
            await era.printAndWait(
              `그렇기에 ${sex}는 노력의 의미를 이해하지 못하고, 트레이닝을 그저 지루하고 고통스러운 것으로만 느끼는 모양이었다……`,
            );
            await chara.say_and_wait(
              '……나도 트레이닝을 열심히 하는 다른 애들처럼 되어야 한다고 생각한 적은 있어.',
            );
            await chara.say_and_wait(
              '하지만 뭘 해도 너무 지루한걸. 이런 게 의미가 있을까 싶어서.',
            );
            await chara.say_and_wait(
              '……남들이랑 다르면 안 되는 거야? 마야는 반짝반짝 빛나는 우마무스메가 될 수 없는 거야……?',
            );
            era.printButton('「맞는 말이긴 해.」', 1); 
            era.printButton('「그렇지 않아!!」', 2);
            maya_1 = await era.input();
            if (maya_1 === 1) {
              await era.printAndWait(
                `결국은 게으름뱅이일 뿐이야. 게으름을 피우고 싶은 게 아니라면 트레이닝을 해야지. 레이스를 위해서라면, 이기고 싶다면 트레이닝을 하란 말이다. 학원은 왜 다녀? 이기고 싶다면서, 달려 나가고 싶다면서 왜 트레이닝은 안 하는 거지?`,
              );
              await era.printAndWait(
                `스스로 생각하기에 본인이 게으른 것 같지 않아? 트레이닝도 안 가고 잠만 자고, 오후 내내 게임이나 하고 밤에는 드라마나 보고. 하루 세 끼 다 학원에서 해결하면서 룸메이트한테 하치미나 사 오라고 시키는 게 게으름뱅이가 아니면 뭔데?`,
              );
              await era.printAndWait(
                `본인의 스킬이 제대로 갖춰졌는지 한번 생각해 봐. 다른 동급생들은 한밤중에도 운동장을 돌며 구슬땀을 흘리고 있을 거다. 아니면 작은 스탠드 불빛 아래서 이론 공부라도 하고 있겠지.`,
              );
              await era.printAndWait(
                `그런데 너는? 침대에서 룸메이트랑 밤새 게임이나 하고. 그러면서 게으름뱅이가 아니라고? 레이스 때가 되어서야 「앗, 내일은 좀 봐줘, 나 스킬이 없어」라니. 이것도 못 해, 저것도 못 해, 결국은 그냥 놀고 싶은 게으름뱅이일 뿐이야. 트레이닝은 뒷전이고 놀 생각뿐이지.`,
              );
              await era.printAndWait(
                `게임하고 딴짓할 시간에 트레이닝을 해. 어른스러운 척 꾸미는 데 쓰는 에너지를 훈련에 쏟았다면 이미 G1 우승이라도 했을 거다.`,
              );
              await era.printAndWait(
                `모든 인간은 게으르지만, 어떤 게으름뱅이들은 적어도 그 사실을 인정하고 발버둥 치는 법이야.`,
              );
              await era.printAndWait(
                `말은 모질게 했지만, 트레이너로서 ${me.name}은(는) ${sex}를 내버려 둘 수 없었다.`,
              );
            } else {
              await chara.say_and_wait('와! 깜…… 깜짝이야.');
              await chara.say_and_wait(
                '쌤, 그렇게 큰 소리도 낼 줄 아는구나. 평소엔 상냥한 느낌이었는데……',
              );
            }
            await chara.say_and_wait('……있지 있지. 쌤도 마야가 트레이닝을 했으면 좋겠어?');
            era.printButton('「응, 그래.」', 1);
            era.printButton('「정말 간절히 바라고 있어.」', 2);
            await era.input();
            await chara.say_and_wait('음――…… 그렇구나.');
            await chara.say_and_wait(
              '……좋아! 쌤이 마야의 말을 들어준다면 트레이닝할게!',
            );
            era.printButton('「말을 듣는다고?」', 1);
            await era.input();
            await chara.say_and_wait('응♪ 그게 말이야~');
            await chara.say_and_wait('마야랑 같이 역에서 데이트하자!!');
            era.printButton('「좋아.」', 1);
            era.printButton('「일이 있어서 다음에 하자.」', 2);
            maya_1 = await era.input();
            if (maya_1 === 1) {
              era.set(`cflag:24:모집상태`, -2);
            } else {
              await chara.say_and_wait(
                '에…… 알았어…… 하지만 시간 날 때 꼭 마야랑 데이트해줘야 해! 유 카피?',
              );
            }
          } else {
            await chara.say_and_wait(
              '아! 그때 그! 마야랑 역에서 만나기로 약속해놓고는………… 마야, 엄청 기다렸다구?',
            );
            await chara.say_and_wait(
              '마야는 성숙한 어른이니까 더 이상 따지지는 않겠지만…………',
            );
            await chara.say_and_wait('약속한 거, 절대로 잊으면 안 돼?');
          }
          event_marks.add(event_hooks.out_station);
          add_event(
            event_hooks.out_station,
            new EventObject(24, cb_enum.recruit),
          );
        }
        break;
      case event_hooks.recruit_start:
        await era.printAndWait(
          `${chara.name}은 ${me.name}에게 강렬한 인상을 남겼다. ${sex}를 다시 한번 만나기 위해 ${me.name}은(는) 교내를 샅샅이 뒤졌다……`,
        );
        await chara.say_and_wait('어라, 이상하네? 저 사람, 설마――');
        await chara.say_and_wait(
          '역시! 선발 레이스 때 만났던 그 사람이다! 와―― 또 만났네~! 여기서 뭐 하고 있어?',
        );
        era.printButton('「너를 찾고 있었어.」', 1);
        await era.input();
        await chara.say_and_wait(
          '에, 마야를 찾고 있었다고? 와아…… 왠지 조금―― 조금 어른스러운 느낌이야~!! 야호~~♪',
        );
        await chara.say_and_wait(
          `하지만 하지만, 마야 지금 급한 일이 있거든. 근데 나랑 이야기하고 싶은 거지, 음……`,
        );
        await chara.say_and_wait('아, 맞다! 쌤도 같이 가면 되겠다!');
        await chara.say_and_wait('결정했어――! 그러면 바로, 테이크 오프……――!!');
        await era.printAndWait(
          `그렇게 ${me.name}은(는) ${sex}에게 이끌려 영문도 모른 채 경기장으로 끌려갔다……`,
        );
        await chara.say_and_wait(
          '그렇구나, 저기서도 쓔웅― 하고 나갈 수 있구나. 마야는 아직 몰랐어……!',
        );
        await chara.say_and_wait(
          '역시, 성숙한 우마무스메들의 레이스는 정말 가슴이 콩닥거려~!!',
        );
        await era.printAndWait(
          `${chara.name}은 일류 우마무스메들이 격렬하게 맞붙는 레이스를 시종일관 눈을 빛내며 바라보았다……`,
        );
        await chara.say_and_wait(
          '으으~, 가슴 콩닥거리는 레이스에 나가는 언니들은 다들 반짝반짝 빛나고 있어~!! 좋겠다, 마야도 반짝반짝 빛나고 싶은데……!',
        );
        era.printButton('「가슴이 콩닥거려? 반짝반짝 빛나?」', 1);
        await era.input();
        await chara.say_and_wait(
          '응! 이런 큰 레이스에서는 마야도 모르는 일들이 잔뜩 일어나니까 정말 가슴이 콩닥거려!',
        );
        await chara.say_and_wait(
          '마야가 모르는 걸 알고 있는 성숙한 우마무스메들은 정말 반짝반짝 빛나 보여~!',
        );
        await chara.say_and_wait(
          '그러니까 마야도 그렇게 되고 싶어! 가슴 콩닥거리는 레이스에 나가서 반짝반짝 빛나고 싶어!',
        );
        await chara.say_and_wait(
          '하~, 정말 좋겠다. 트윙클 시리즈…… 마야도 빨리 저기서 달리고 싶어~!',
        );
        await era.printAndWait(
          `교관 A「아! ${chara.name} 양! 또 트레이닝을 빼먹은 겁니까!」`,
        );
        await chara.say_and_wait(
          '에――, 트레이닝……? 싫어! 마야는 절대 안 할 거야. 너무 재미없단 말이야.',
        );
        await chara.say_and_wait('나는 경기장 탐험하러 갈 거야――. 바이바이――!!');
        await era.printAndWait(`교관 A「기다려요! 아, 또 도망갔네……」`);
        era.printButton('「그 아이, 트레이닝이 서툰 건가요?」', 1);
        await era.input();
        await era.printAndWait(
          `교관 A「음…… 굳이 따지자면 ${sex}가 못하는 건 아마 없을 겁니다. 무엇이든 금방 배우는 아주 강한 아이니까요.」`,
        );
        await era.printAndWait(
          `교관 A「처음 달릴 때도 금방 요령을 터득했고, 위닝 라이브 안무 수업에서도 힘들어하는 모습을 본 적이 없습니다.」`,
        );
        await era.printAndWait(
          `${chara.name}은 타고난 『이해』 능력을 갖추고 있었다―― 즉, ${sex}는 본능적으로 『정답』을 찾아내는 놀라운 직감을 지닌 것이었다……!`,
        );
        await era.printAndWait(
          `교관 A「공부도 잘합니다만…… 왠지 모르게 트레이닝 같은 건 너무 지루하다고 생각하는 모양이에요. 첫 트레이닝 이후로 단 한 번도 트레이닝에 참여하지 않았으니까요.」`,
        );
        era.printButton('「딱 한 번만 참여했다고요!?」', 1);
        await era.input();
        await era.printAndWait(
          `교관 A「그러니까 말입니다…… 그 때문에 모의 레이스를 포함한 모든 레이스 출주가 금지된 상태죠.」`,
        );
        await era.printAndWait(
          `레이스는 트레이닝의 성과를 보여주는 자리이니만큼, 그 처분이 이해가 가지 않는 것은 아니었다……`,
        );
        await era.printAndWait(
          `하지만 ${me.name}의 뇌리에는 레이스에 나가고 싶어 하던 ${chara.name}의 모습이 떠올랐다…… 어떻게든 도와줄 수 있는 방법이 없을까……?`,
        );
        event_marks.sub(event_hooks.recruit_start);
        era.set('cflag:24:무작위모집', 1);
        era.set('cflag:24:모집상태', -3);
        era.set('flag:대상물색', 24);
        return true;
      case event_hooks.out_station:
        if (era.get('flag:현재상호작용캐릭터')) {
          add_event(
            event_hooks.out_station,
            new EventObject(24, cb_enum.recruit),
          );
          return false;
        }
        await era.printAndWait(
          `${me.name}은(는) ${chara.name}과 했던 약속을 떠올렸다.`,
        );
        await era.printAndWait(`약속 장소로 가겠습니까?`);
        era.printButton('간다', 1);
        era.printButton('다음에 간다', 2);
        era.printButton(`귀찮다, 다시는 보고 싶지 않다`, 3);
        switch (await era.input()) {
          case 1:
            era.set('cflag:24:모집상태', -2);
            break;
          case 2:
            add_event(
              event_hooks.out_station,
              new EventObject(24, cb_enum.recruit),
            );
            return false;
          case 3:
            era.set('cflag:24:무작위모집', 1);
            era.set('cflag:24:모집상태', -4);
            era.set('flag:대상물색', 0);
            return false;
        }
        if (era.get(`cflag:24:모집상태`) === -2) {
          await era.printAndWait(`역 앞에서――`);
          await chara.say_and_wait('랜딩!! 오래 기다렸지♪');
          await chara.say_and_wait(
            '에헤헤, 오늘 같이 와줘서 고마워! 성숙한 우마무스메들이 하는 데이트, 꼭 한 번 해보고 싶었거든―♪',
          );
          await era.printAndWait(
            `${chara.name}의 귀가 흥분으로 파르르 떨리고 몸도 가볍게 흔들거렸다. ${sex}는 진심으로 들떠 있는 모양이었다.`,
          );
          await chara.say_and_wait(
            '저기 저기, 어디부터 갈까!? 세련된 가게에서 쇼핑도 하고, 반짝거리는 디저트 카페 투어도 빼놓을 수 없지!',
          );
          await chara.say_and_wait(
            '그리고 로맨틱한 영화도 봐야겠지? 어른스러운 분위기의 카페에서 차도 마시고 싶고…… 우와아, 벌써 신나~~!!',
          );
          await chara.say_and_wait(
            '빨리빨리, 서두르지 않으면 하루가 다 가버릴 거야! 그럼 출발한다, 테이크 오프――――!!',
          );
          await era.printAndWait(
            `그 뒤로 ${me.name}은(는) ${chara.name}의 엄청난 기세에 눌려 온 시내를 끌려다녔다……`,
          );
          await chara.say_and_wait(
            '저거 봐 저거 봐, 저 티셔츠 진짜 귀엽다~! 아, 저긴 주스 가게인가!? 당근 주스도 팔까――!?',
          );
          await chara.say_and_wait(
            '음? 킁킁…… 좋은 냄새가 나―! 이쪽이야! 가보자 가보자~!',
          );
          await chara.say_and_wait('빨리빨리, 멍하니 있으면 안 돼! 마야를 잘 따라오라구♪');
          await chara.say_and_wait(
            '어떤 걸 볼까――!? 음―, 다 재밌어 보여~ 앗, 아앗!?',
          );
          await chara.say_and_wait(
            '아와와와, 예, 예고편 화면에 키스신이 나왔어……! 봐버렸다구~!! 으으, 얼굴 뜨거워……!',
          );
          await era.printAndWait(
            `단순히 키스 장면을 본 것만으로도 얼굴을 붉히는 ${chara.name}에게서는 역시 아이 같은 면모가 엿보였다.`,
          );
          await chara.say_and_wait(
            '아이스크림은 몇 단으로 하는 게 좋을까? 1단? 2단? 3단!? 3단으로 하자! 응, 결정했어!!',
          );
          await chara.say_and_wait(
            '맛은 뭘로 할까~. 딸기 맛 맛있어 보이고…… 바닐라도 좋고~, 초코 쿠키랑~',
          );
          await chara.say_and_wait(
            '에, 치즈케이크 맛은 기간 한정이야!? ……저기 저기, 역시 4단으로 할래~!!',
          );
          await era.printAndWait(
            `${me.name}은(는) 하루 종일 ${chara.name}에게 끌려다녔다……`,
          );
          await chara.say_and_wait('아아~, 정말 즐거웠어――!!');
          await chara.say_and_wait(
            '쌤 정말 대단하다―! 마야랑 전력으로 마지막까지 놀아준 사람은 마블찡 말고는 처음일지도!',
          );
          era.printButton('「중간에 쓰러지는 줄 알았어……」', 1);
          await era.input();
          await chara.say_and_wait(
            '아하하, 그랬어!? 그럼 그만큼 노력했다는 거네―! 고마워.',
          );
          await chara.say_and_wait(
            '……있지 있지. 쌤은 왜 그렇게 상냥해? 왜 마야랑 데이트해준 거야?',
          );
          await chara.say_and_wait(
            '역시 마야가 말을 들어주면 트레이닝하겠다고 약속했기 때문이야?',
          );
          era.printButton('「그건 아니야.」', 1);
          await era.input();
          await chara.say_and_wait(
            '아니라고? 그게 무슨 소리야? 마야가 트레이닝하게 만들고 싶어서 데이트해준 거 아니었어?',
          );
          await chara.say_and_wait('그게 아니라면, 쌤은 왜 와준 거야?');
          era.printButton('「네가 꿈을 포기하지 않았으면 하니까!」', 1);
          await era.input();
          await chara.say_and_wait('꿈……?');
          await chara.say_and_wait('나의, 꿈……');
          await era.printAndWait(
            `${chara.name}은 입을 꾹 다물고 무언가 생각에 잠긴 듯했다. 그리고――`,
          );
          await chara.say_and_wait('……그렇구나.');
          await chara.say_and_wait('응…… 오늘 정말 고마웠어――!');
          await chara.say_and_wait('내일은 같이 트레이닝하자!');
          event_marks.sub(event_hooks.out_station);
          era.set('flag:대상물색', 0);
          era.set(`cflag:24:모집상태`, recruit_flags.yes);
          await this.recruit_end();
          return true;
        }
    }
    return false;
  }
};