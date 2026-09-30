const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const plana = require('#/event/edu/edu-events-32/week-start-06-plana');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 1] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    era.set('cflag:32:축제이벤트표시', 0);
    let ret;
    if (edu_marks.plan_b) {
      await print_event_name('다짐의 새해', tachyon);
      await era.printAndWait('설날.');
      await era.printAndWait('본래라면 묵은 해를 보내고 새해를 맞이하는 기쁜 날이었다.');
      await era.printAndWait(
        '신사 참배는 작년의 모든 것을 씻어내고 새로운 해를 맞이한다는 상징이기도 했다.',
      );
      era.println();
      await era.printAndWait('하지만…… 악연이란 대체로 씻어내기 어려운 법이었다.');
      await era.printAndWait('그것이 누구든, 어떤 장소든, 설령 신사라 할지라도 예외는 없었다.');
      await era.printAndWait('그림자처럼 달라붙어 끈질기게 곁을 맴도는 혐오스러운 존재.');
      await era.printAndWait('그렇다, 이른바 악연이란 바로————.');
      era.println();
      await tachyon.say_and_wait(['이런, ', callname, '…… 정말 우연이군.']);
      era.printButton('「타…… 타키온!」', 1);
      era.printButton('「그 이야기는 나중에 하고, 일단 뛰어!」', 2);
      await era.input();
      await tachyon.say_and_wait('아, 잠ㄲ……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 대답을 기다리지 않고, ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 끌고 신사 안으로 파고들어 곧 군중 속으로 사라졌다.',
      ]);
      await say_by_passer_by_and_wait('기자A', '큭…… 놓쳤나.');
      await say_by_passer_by_and_wait(
        '기자B',
        '빛나고 있지 않을 때는 생각보다 찾기 힘들군요……',
      );
      era.println();
      await say_by_passer_by_and_wait('기자C', '……이쪽에서 대기해라. 절대 놓쳐선 안 돼.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 끌고 인파 속에 숨어, 카메라를 든 기자가 쫓아오지 않는 것을 확인한 뒤에야 안심했다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 아리마 기념 이후 돌연 발표한 복귀는 미디어에게 있어 그야말로 최고의 관심사였다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 상태를 걱정했기에, ',
        me.get_colored_name(),
        '은(는) 이와 관련된 모든 인터뷰를 거절해왔다.',
      ]);
      await era.printAndWait('설마 여기까지 직접 쫓아올 줄이야……!');
      era.println();
      await tachyon.say_and_wait(['……', callname, '.']);
      era.println();
      await era.printAndWait([
        '그제서야 ',
        me.get_colored_name(),
        '은(는) 자신이 방금 아무 생각 없이 ',
        tachyon.get_colored_name(),
        '의 손을 잡고 달렸다는 사실을 깨달았다.',
      ]);
      era.printButton('「타키온, 다리는 괜찮아?」', 1);
      await era.input();
      await era.printAndWait('……별것 아니네. 그저 조금 놀랐을 뿐이야, 후후.');
      await era.printAndWait([
        '아무리 그래도 ',
        tachyon.get_uma_sex_title(),
        '였다. 비록 다리가 불편한 ',
        tachyon.get_uma_sex_title(),
        '라 할지라도 신체 능력은 인간보다 훨씬 강했다. 하물며 올해 레이스에 복귀할 전 G1 ',
        tachyon.get_uma_sex_title(),
        '였다.',
      ]);
      era.println();
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await me.say_and_wait('……그래, 레이스 복귀.', true);
      era.printButton('「타키온.」', 1);
      era.printButton('「올해의 레이스 일정은……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '그거야 당연히…… ',
        t_call_c,
        '과 같겠지. 굳이 말할 필요도 없지 않나.',
      ]);
      era.println();
      await era.printAndWait('역시 그랬다.');
      await era.printAndWait([me.get_colored_name(), '은(는) 고개를 끄덕였다.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 레이스를 떠났던, 그리고 다시 돌아온 이유 모두 ',
        coffee.get_colored_name(),
        '를 위해서였다. ———그것은 바로 ',
        me.get_colored_name(),
        '이(가) 담당하는 또 다른 ',
        tachyon.get_uma_sex_title(),
        '였다.',
      ]);
      await era.printAndWait([
        '그렇다면 한정된 선택지 속에서, 당연히 ',
        coffee.get_colored_name(),
        '가 출주하는 레이스를 최우선으로 고려해야만 했다…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 무슨 일인가?']);
      era.println();
      await era.printAndWait('가슴 한구석에서 자꾸만 떠오르는 것들이 있었다.');
      await era.printAndWait([
        '여름 합숙 때 ',
        tachyon.get_colored_name(),
        '의 얼굴에 서렸던 표정.',
      ]);
      await era.printAndWait([
        '국화상 이후 ',
        tachyon.get_colored_name(),
        '의 눈빛.',
      ]);
      await era.printAndWait([
        '아리마 전…… ',
        tachyon.get_colored_name(),
        '이 결의를 다졌을 때의 기색.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '?']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 꽤 오랫동안 자신을 빤히 바라보고 있었다는 사실을 깨닫고 서둘러 정신을 차리며 무슨 일이냐고 물었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……아무것도 아니야. 그저 곧 우리 차례가 올 것 같아서 말이지.');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 신사를 가리켰다. 그제서야 ',
        me.get_colored_name(),
        '은(는) ',
        me.get_couple_title(),
        '이 황급히 뛰어든 곳이 본전 앞에서 신의 가호를 빌기 위한 긴 줄이었다는 사실을 알게 되었다.',
      ]);
      era.printButton('「타키온, 너는 이런 거 안 믿지 않아?」', 1);
      await era.input();
      await era.printAndWait([
        '말을 내뱉자마자 ',
        me.get_colored_name(),
        '은(는) 아차 싶었다.',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……호오, 의외군. 자네가 언제부터 내 의사를 신경 썼다고 그러나.',
        );
        era.println();
        await era.printAndWait([tachyon.sex, '에게서 여지없이 차가운 비아냥이 돌아왔다.']);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait('……나를 여기로 끌고 온 건 자네 아닌가?');
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 서둘러 기자들에 대해 이야기했다.']);
        await era.printAndWait([
          '이야기를 들은 뒤 ',
          tachyon.sex,
          '는 별다른 반응 없이 그저 ｢그렇군｣ 한마디만을 남겼다.',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '믿지는 않네만…… 자네의 정성이라 생각하고 받아들이도록 하지. 애초에 나를 이리로 끌고 온 것도 자네 아닌가?',
        );
        era.println();
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 서둘러 기자들에 대해 이야기했다.']);
        await era.printAndWait(['이야기를 들은 ', tachyon.sex, '의 눈에 조금 미안한 기색이 서렸다.']);
      } else {
        await tachyon.say_and_wait('내가 믿는 것은 신이 아니라, 나를 이곳으로 데려온 자네라네.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 갑자기 부끄러운 소리를 아무렇지 않게 내뱉었다.',
        ]);
        await era.printAndWait([
          '그러고 보니 아직 ',
          tachyon.get_colored_name(),
          '에게 제대로 설명하지 못했다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 서둘러 기자들에 대해 이야기했다.']);
        await tachyon.say_and_wait('훗, 평범하고 어리석은 파리 떼들이군. 감히 우리를 의심하다니.');
        await era.printAndWait([tachyon.get_colored_name(), '은 가소롭다는 듯 비웃었다.']);
      }
      era.println();
      await era.printAndWait([
        '대화하는 도중 ',
        me.get_couple_title(),
        '은 어느새 줄의 맨 앞까지 도달했다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 눈앞의 신상을 바라보았다.']);
      await era.printAndWait('그럼…… 무엇을 빌어야 할까.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 수많은 생각을 거쳐, 빌고 싶은 소원들을 정리했다.',
      ]);
      await era.printAndWait('두 손을 모으고 신에게 기도를 올렸다.');
      await era.printAndWait([
        '부디 ',
        tachyon.get_colored_name(),
        '의 다리에 아무런 문제가 없기를, 건강하게 완주하기를.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 레이스가 언제나처럼 눈부시게 빛나기를.',
      ]);
      await era.printAndWait([
        '그리고…… ',
        coffee.get_colored_name(),
        '의 트레이닝 또한 무사히 진행되기를.',
      ]);
      era.println();
      await era.printAndWait([
        '기도를 마치고 ',
        me.get_colored_name(),
        '은(는) 고개를 들어 옆에 선 ',
        tachyon.get_colored_name(),
        '을 보았다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 이미 진작에 건성으로 기도를 마치고 ',
        me.get_colored_name(),
        '을(를) 기다리고 있었다.',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        ' 두 사람은 인파를 빠져나와, 아직 포기하지 못한 기자들을 조심스레 피해 학원으로 돌아갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['그래서…… 무엇을 빌었나?']);
      era.println();
      await era.printAndWait([
        '어째서인지 ',
        tachyon.get_colored_name(),
        '은 꽤 궁금해하는 눈치였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '에게 말해주었다……',
      ]);
      era.printButton('타키온의 건강 (체력 +20%)', 1);
      era.printButton('타키온의 레이스 (랜덤 능력치 +20)', 2);
      era.printButton('카페의 트레이닝 (스킬 포인트 +30)', 3);
      ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 ',
            tachyon.sex,
            '의 다리가 건강하기를 빌었다고 말했다.',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……시시한 소원이군.');
            await tachyon.say_and_wait(
              '그저 신체 건강만을 바란다면…… 내가 레이스에 복귀하지 않는 게 더 낫지 않겠나?',
            );
            await tachyon.say_and_wait([
              '모든 것을 버리기로 해놓고 이제 와서 그런 소원을 빌다니…… ',
              callname,
              ', 자네는 각오가 부족하군.',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '의 대답은 매우 신랄했다.',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) 말한 소원을 진심으로 가소롭게 여기는 듯했다.',
            ]);
          } else {
            await tachyon.say_and_wait('……신체 건강이라.');
            await tachyon.say_and_wait('아니, 아무것도 아니야. 그저…… 후후.');
            await tachyon.say_and_wait('그렇지. 건강하게 완주할 수 있다면 좋겠군.');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 대수롭지 않게 말했다.',
            ]);
            await era.printAndWait(
              '그것은 마치 평범한 일상의 대화처럼—실제로도 그랬지만—느껴졌다.',
            );
          }
          era.println();
          await era.printAndWait(['하지만 ', me.get_colored_name(), '은(는) 놓치지 않았다.']);
          await era.printAndWait([
            '소원을 말하는 순간 ',
            tachyon.get_colored_name(),
            '의 눈동자에서 피어오른 희망과 갈망을.',
          ]);
          await era.printAndWait('……하지만, 보았다고 해서 무엇을 할 수 있단 말인가.');
          await era.printAndWait([
            '그런 가능성을 쫓는 길은 이미 몇 달 전 ',
            me.get_colored_name(),
            '의 손으로 직접 닫아버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            me.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그렇기에 기도를 올릴 수밖에 없었다.');
          await era.printAndWait('적어도, 이 마지막 시간 동안만큼은.');
          await era.printAndWait([tachyon.sex, '가 고통과 부상에서 자유로울 수 있기를.']);
          era.println();
          await tachyon.say_and_wait('……별일 없으면, 난 이만 가보겠네.');
          era.printButton('「푹 쉬어.」', 1);
          break;
        case 2:
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 ',
            tachyon.sex,
            '와 ',
            coffee.get_colored_name(),
            '의 레이스가 순조롭기를 빌었다고 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('하하, 제법 괜찮은 소원이군.');
          await tachyon.say_and_wait([
            t_call_c,
            '은 이미 가능성을 증명했지…… 다음은 내 차례다.',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            '의 디딤돌이 되겠다고 호언장담해놓고 제자리걸음만 할 수는 없지 않나. 안 그러면 기껏해야 조약돌 정도밖에 안 될 테니 말이야.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 입버릇처럼 ',
            coffee.get_colored_name(),
            '를 위해서라고 말하고 있었지만.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 역시 놓치지 않았다……',
          ]);
          await era.printAndWait([
            '레이스 이야기를 꺼낼 때 ',
            tachyon.get_colored_name(),
            '의 눈에 스친 투지를.',
          ]);
          await era.printAndWait([
            '역시 ',
            tachyon.get_colored_name(),
            '도 레이스로 돌아가기를 갈망하고 있었던 것이다.',
          ]);
          await era.printAndWait('……하지만, 갈망한다고 해서 무엇을 할 수 있단 말인가.');
          await era.printAndWait([
            '그런 가능성을 쫓는 길은 이미 몇 달 전 ',
            me.get_colored_name(),
            '의 손으로 직접 닫아버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            me.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그렇기에 기도를 올릴 수밖에 없었다.');
          await era.printAndWait('적어도, 이 마지막 시간 동안만큼은.');
          await era.printAndWait([
            '남겨진 시간 속에서 ',
            tachyon.sex,
            '가 그 시간을 마음껏 만끽할 수 있기를.',
          ]);
          era.println();
          await tachyon.say_and_wait('후후, 자네의 기대에 부응하려면 곧장 트레이닝을 시작해야겠군.');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 즐거운 듯 훈련장을 향해 걸어갔다.',
          ]);
          era.printButton('……훈련 조심해.', 1);
          break;
        case 3:
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '에게 ',
            coffee.get_colored_name(),
            '의 트레이닝이 순조롭기를 빌었다고 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('……음.');
          await tachyon.say_and_wait([
            '당연하지…… 우리가 하는 모든 일은 결국 ',
            t_call_c,
            '이 한계를 뛰어넘어 더 높은 곳에 닿게 하기 위함이니까.',
          ]);
          await tachyon.say_and_wait([
            '만약 ',
            tachyon.sex,
            '의 트레이닝에 문제라도 생긴다면…… 모든 것이 허사가 되겠지.',
          ]);
          await tachyon.say_and_wait(
            '그러니 이것이야말로 가장 중요한 일이야…… 우선순위를 잊지 않아주니 나도 기쁘군.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 입버릇처럼 ',
            coffee.get_colored_name(),
            '를 위해서라고 말하고 있었지만.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 역시 놓치지 않았다…… ',
            coffee.get_colored_name(),
            '의 이야기가 나올 때 ',
            tachyon.sex,
            '의 눈동자에 서린 쓸쓸함을.',
          ]);
          await era.printAndWait([
            '역시 ',
            coffee.get_colored_name(),
            '의 이야기는 꺼내지 말았어야 했나.',
          ]);
          await era.printAndWait([
            '지금 ',
            tachyon.get_colored_name(),
            '의 트레이너로서의 자신은 마땅히 ',
            tachyon.sex,
            '만을 생각해야 할 텐데.',
          ]);
          await era.printAndWait([
            '하지만…… ',
            tachyon.sex,
            '를 위할 권리는 이미 몇 달 전 스스로 내던져버렸다.',
          ]);
          await era.printAndWait([
            '지금의 ',
            me.get_colored_name(),
            '과(와) ',
            tachyon.sex,
            '는 그저 파멸을 향한 길을 광속으로 질주하고 있을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait('그러니 그저 기도를 올릴 수밖에.');
          await era.printAndWait('부디 모든 외부 요인들이 지켜지기를.');
          await era.printAndWait([
            tachyon.sex,
            '를 만족시키기를, ',
            tachyon.get_colored_name(),
            '의 「유언」을 이룰 수 있기를.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '후후, 자네의 기대를 위해서라도 나 또한 질 수는 없겠어. ',
            t_call_c,
            '과 같은 무대에 서기에 부족함이 없도록 회복해야겠지.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 담담하게 말을 마치고 실험실을 향해 걸어갔다.',
          ]);
          era.printButton('「……실험 조심해.」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, '가 손을 흔들며 알겠다는 표시를 했다.']);
    } else {
      ret = await plana(tachyon, me, callname, relation, love);
    }
    switch (ret) {
      case 1:
        flags.wait_flag = get_attr_and_print_in_event(
          32,
          undefined,
          0,
          JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.2}}`),
        );
        break;
      case 2:
        {
          const temp = new Array(5).fill(0);
          temp[get_random_entry(Object.values(attr_enum))] = 20;
          flags.wait_flag = get_attr_and_print_in_event(32, temp, 0);
        }
        break;
      case 3:
        flags.wait_flag = get_attr_and_print_in_event(32, undefined, 30);
    }
  };
};