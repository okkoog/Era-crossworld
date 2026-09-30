const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const Love52UntilFuckBuddy = require('#/event/love/love-events-52/until-fuck-buddy');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');

module.exports = class extends Love52UntilFuckBuddy {
  async 74(urara, me, callname, stage, extra_flag, event_object) {
    const { in_urara, relation, chara_self_name } = this.get_event_vars();
    const life_marks = new UraraLifeMarks();
    if (stage === event_hooks.week_end) {
      if (life_marks.active_74 === 0) {
        await print_event_name('요동치는 애정', urara);
        await in_urara.say_as_unknown_and_wait([
          '침대 위에서 몸을 뒤척이며, 오늘 이 작은 ',
          urara.get_uma_sex_title(),
          '는 정말로 잠을 설친 모양입니다……',
        ]);
        await in_urara.say_as_unknown_and_wait([
          '연심을 품은 ',
          urara.get_teen_sex_title(),
          '는, 겉모습이 아무리 어려 보여도 내면은 이토록 변덕스러운 법이지요……',
        ]);
        era.drawLine();
        await urara.print_and_wait(
          '또 시작이야. 쿵쾅거리는 심장이 도무지 진정되질 않아. 이대로 두면 내일 또 못 일어날 텐데.',
        );
        await urara.print_and_wait(
          '하지만 억지로 자려고 할수록, 머릿속에 떠오르는 그 얼굴이 더욱 선명해져.',
        );
        await urara.print_and_wait(
          '열심히 귀를 접고, 꼬리를 허리에 꽉 감아봐도, 멋대로 파르르 떨려버려.',
        );
        await urara.print_and_wait(
          '기뻐서 그런 걸까? 하지만 왜 자꾸 이렇게 되는 거지? 왜 눈을 감을 때마다 항상 그 사람이 보이는 걸까?',
        );
        await urara.print_and_wait([
          '처음 만났을 때 바로 눈앞에서 쓰러졌던 사람. 처음 보는 ',
          urara.get_uma_sex_title(),
          '의 가벼운 한두 마디에 약속을 지키러 와준 사람.',
        ]);
        await urara.print_and_wait([
          '꼴찌로 달리는 약한 ',
          urara.get_uma_sex_title(),
          '를 위해 응원해준 사람. 무슨 일이 있어도 보잘것없는 ',
          urara.sex,
          '와 함께 지금까지 걸어와준 사람……',
        ]);
        if (relation > 150) {
          await urara.print_and_wait([
            '정신을 차려보니, 이제는 ',
            callname,
            '가 없는 ',
            chara_self_name,
            '는 상상조차 할 수 없게 되었어.',
          ]);
          await urara.say_and_wait('이런 거, 정말로 행운이겠지……');
          await urara.print_and_wait([
            '하지만 언젠가 ',
            callname,
            '를 잃어버린다면? 설령 모두를 위해 달린다고 해도, 그 사람이 곁에 없다면 약한 ',
            chara_self_name,
            '가 계속 나아갈 수 있을까……',
          ]);
          await urara.print_and_wait(
            '너무 불안해. 그 행운을 잃어버릴 미래가 너무 무서워. 하지만 예견된 미래라면 어떡해야 할까?',
          );
          await urara.print_and_wait(
            '담당과 트레이너라는 관계인 이상, 언젠가는 변화를 맞이하게 될 텐데——',
          );
        } else {
          await urara.print_and_wait([
            '비록 평소에는 관계가 그리 좋아 보이지 않았더라도, ',
            chara_self_name,
            '는 이미 ',
            callname,
            '에게 의지하고 있었어.',
          ]);
          await urara.say_and_wait([
            '게다가 ',
            callname,
            '의 곁에 있는 느낌도 나쁘지 않아……',
          ]);
          await urara.print_and_wait([
            '어느덧 ',
            callname,
            '가 ',
            chara_self_name,
            '의 마음속에서 차지하는 면적은 스스로도 놀랄 만큼 넓어져 있었어.',
          ]);
          await urara.print_and_wait(
            '여전히 조금 당황스럽긴 하지만, 같이 걷기만 해도 두근거리고, 격려를 받으면 예상외로 기뻐져.',
          );
          await urara.print_and_wait([
            '도대체 어떻게 된 거지? ',
            chara_self_name,
            '가 ',
            callname,
            '에게 품은 감정이, 알지 못하는 사이에 변화를 맞이한 걸까?',
          ]);
        }
        urara.say(`그럼 내가 ${me.sex}에게 느끼는 이 감정은……`);
        era.printButton('「역시, 『연애』의 감정인 걸까?」(관계 진전)', 1);
        era.printButton('「아, 아직은 담당이 트레이너에게 느끼는 호감이겠지?」(관계 진전 보류)', 2);
        if ((await era.input()) === 1) {
          await urara.print_and_wait([
            '그럼…… 설마 이게 연애감정? ',
            chara_self_name,
            '가 ',
            callname,
            '를?',
          ]);
          await urara.print_and_wait([
            '전부 이해할 수는 없지만 아마 그런 거겠지. 그런데 그렇게 되면, ',
            callname,
            '는 ',
            chara_self_name,
            '를 좋아해 줄까?',
          ]);
          await urara.print_and_wait([
            '그 문제를 생각하면 마음 한구석이 아려와. 하지만…… ',
            callname,
            '가 먼저 고백하는 모습은 상상이 안 가!',
          ]);
          await urara.print_and_wait([
            '이대로라면 아무것도 모르는 ',
            chara_self_name,
            '는 영원히 ',
            callname,
            '에게 어린애 취급만 받겠지……',
          ]);
          await urara.say_and_wait('하지만 받아들여지든 아니든, 본심을 피해서는 안 돼!');
          await urara.say_and_wait([
            '설령 힘들더라도 솔직해지지 않으면 나중에 분명 후회할 거야! 그 정도는 ',
            chara_self_name,
            '도 알고 있어!',
          ]);
          await urara.print_and_wait([
            '「',
            urara.actual_name,
            '」는 결코 대단한 ',
            urara.get_uma_sex_title(),
            '가 아니야. 서투르고 유치해서, 빛나는 다른 애들과는 비교조차 할 수 없어……',
          ]);
          await urara.print_and_wait([
            '그러니까 더욱, ',
            chara_self_name,
            '는 달릴 때와 마찬가지로 전력을 다해 ',
            callname,
            '에게 진심을 전해야 해.',
          ]);
          await urara.print_and_wait([
            '그렇게 하면 설령 1착을 하지 못해도, 설령 ',
            callname,
            '에게 거절당하더라도, 평소처럼 담담하게 받아들일 수 있을 거야——',
          ]);
          if (relation > 150) {
            await urara.print_and_wait([
              '왜냐하면 ',
              chara_self_name,
              '는 ',
              callname,
              '가 사실은 멋진 사람이라는 걸 알고 있으니까. 모두에게 사랑받는 것도 이상하지 않겠지.',
            ]);
            await urara.say_and_wait('내일부터는 큰 소리로 좋아한다고 말할 거야——');
          } else {
            await urara.print_and_wait([
              '설령 ',
              callname,
              '가 심술궂은 사람이라 해도, ',
              chara_self_name,
              '는 그런 ',
              callname,
              '를 좋아하게 되어버렸어.',
            ]);
            await urara.say_and_wait([
              '무슨 일이 있어도 ',
              callname,
              '를 좋아하는 사실은 변하지 않아……',
            ]);
          }
          await urara.say_and_wait([
            '그러니까 나도 용기를 낼 거야. 언젠가 미래에 ',
            callname,
            '와——',
          ]);
          if (
            sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
              (e) => e > 0 && era.get(`love:${e}`) >= 75,
            ).length > 0
          ) {
            await urara.say_and_wait([
              '설령 ',
              callname,
              '에게 이미 다른 여자애가 있다고 해도?',
            ]);
            await urara.print_and_wait([
              '방금 결심을 굳혔음에도 어디선가 들려오는 듯한 질문이 뒤따랐으나, 마음의 준비를 마친 ',
              chara_self_name,
              '는 이불 밑에서 입술을 꽉 깨물 뿐이었다.',
            ]);
            await urara.say_and_wait(
              '……알고 있어. 이런 건 자격도 없고, 분명 나쁜 짓일 테고, 모두를 슬프게 할 거야……',
            );
            await urara.say_and_wait(
              '하지만 스스로를 속인다면 아무것도 바꿀 수 없잖아.',
            );
            await urara.say_and_wait([
              '비록 ',
              chara_self_name,
              '는 바보 같고 모르는 것투성이지만, ',
              chara_self_name,
              '는 겁쟁이가 아니야.',
            ]);
            await urara.say_and_wait([
              '도망치지 않을 거야. 다음에 계속 당당하게 ',
              callname,
              '와 함께 있기 위해서——!',
            ]);
          }
          add_event(event_hooks.week_start, event_object);
        } else {
          await urara.say_and_wait([
            '응! 역시 평소대로가 좋겠지. ',
            chara_self_name,
            '와 ',
            callname,
            '는 평범한 관계…… 아마도?',
          ]);
          await urara.print_and_wait([
            '무언가 잊어버린 듯한 기분이 들었으나, 어린 ',
            urara.get_uma_sex_title(),
            '는 아직 자신의 감정을 완전히 이해하지 못했다.',
          ]);
          await urara.print_and_wait([
            '거대한 감정이 일상의 압박 속에 오랫동안 눌려온 끝에, ',
            chara_self_name,
            '는 결국 사고 정지 한계점에 도달하고 말았다.',
          ]);
          await urara.print_and_wait([
            '어질어질해진 ',
            chara_self_name,
            '는 다시 믿음직한 룸메이트에게 희망을 걸어보았다. 어쩌면 ',
            urara.sex,
            '에게 조언을 해줄 수 있지 않을까?',
          ]);
          await urara.say_and_wait([
            '하지만 옆에 있는 ',
            sys_get_colored_callname(52, 61),
            '는 이미 잠들었네. 평소에는 ',
            chara_self_name,
            '가 먼저 잠들곤 했는데?',
          ]);
          await urara.say_and_wait([
            '응, 이제 딴생각 하지 말고 얼른 자자. 안 그러면 내일 또 기운이 없을 거야.',
          ]);
          await urara.print_and_wait([
            '하지만 몸이 계속 뜨거워. 다시 한번 「그거」 할까? 이불을 걷어차고, 잠옷도 전부 벗어버리고……',
          ]);
          await urara.say_and_wait('응~ 하아……');
          await urara.print_and_wait([
            '떨리는 손을 다시 민감한 곳으로 뻗자, 어린 ',
            urara.get_uma_sex_title(),
            '의 눈앞에 ',
            urara.sex,
            '의 몸을 갈구하며 짐승처럼 변한 그 사람의 모습이 떠올랐다.',
          ]);
          await urara.print_and_wait([
            '몸이 몇 번째인지 모를 절정에 달하며, 더 이상 생각할 기운조차 남지 않은 ',
            chara_self_name,
            '는 어질러진 침대 위에서 깊은 잠에 빠져들었다……',
          ]);
          await urara.say_and_wait('……');
          await urara.print_and_wait([
            '욕망을 분출하는 방식으로 사고를 포기한 끝에, 어린 ',
            urara.get_uma_sex_title(),
            '는 다시금 이 고민을 머릿속에서 몰아냈다.',
          ]);
          await urara.print_and_wait([
            '그러나 ',
            urara.get_teen_sex_title(),
            '의 마음을 영원히 외면할 수는 없는 법. 머지않아 ',
            urara.sex,
            '는 다시 이 문제들에 사로잡히게 될 것이다.',
          ]);
          await urara.print_and_wait([
            '그래도 적어도 당분간은, ',
            me.get_colored_name(),
            '은(는) 물론 ',
            urara.sex,
            '도 갑작스러운 불면증을 걱정할 필요는 없으리라.',
          ]);
          await urara.print_and_wait([
            '다만 이렇게 실오라기 하나 걸치지 않고 잠들었다간, 다음 날 아침 일어났을 때 가련한 「룸메이트 엄마」가 깜짝 놀라버릴 것이다.',
          ]);
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:밤샘', 1);
          era.set('cflag:52:호감거절', 74);
        }
      } else {
        await print_event_name(`오랫동안 기다려온 ${urara.sex}에게`, urara);
        await era.printAndWait([
          '그날 여러 가지 일이 겹쳤던 탓일까, ',
          me.get_colored_name(),
          '과(와) ',
          urara.get_colored_name(),
          '가 겨우 둘만의 시간을 가질 수 있게 되었을 때, 하늘은 이미 어둑해져 있었다.',
        ]);
        await era.printAndWait([
          '기억 속의 ',
          urara.get_colored_name(),
          '는 밤하늘을 올려다보고 있었고, 어린 ',
          urara.get_uma_sex_title(),
          '는 조용히 별을 세며 벚꽃색 눈동자에 별빛을 가득 담고 있었다.',
        ]);
        await era.printAndWait([
          '다만 오늘의 어린 ',
          urara.get_uma_sex_title(),
          '는 여전히 기운이 없어 보였고, 귀와 꼬리도 무언가 생각에 잠긴 듯 축 처져 있었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그 이유를 당연히 알고 있었다. 설령 기억에 오차가 있더라도, 두 사람이 함께한 시간과 경험은 절대 거짓말을 하지 않기 때문이다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 손을 잡고 싶다, ',
          urara.get_colored_name(),
          '의 미소를 보고 싶다, ',
          urara.get_colored_name(),
          '와 한 걸음 더 나아가고 싶다……',
        ]);
        await era.printAndWait([
          '이성을 발휘하려 해도, 머릿속에는 오직 ',
          urara.sex,
          '가 누군가의 대답을 기다리고 있다는 생각뿐이었다.',
        ]);
        await era.printAndWait([
          '담당은 평소와 다름없는 모습이었기에, 문제가 있는 쪽은 오직 「신중함」을 핑계로 삼아온 트레이너뿐이었다.',
        ]);
        await era.printAndWait([
          '이제 와서 잘못에 잘못을 거듭한다 해도, 비겁한 어른은 이미 모든 패를 다 써버린 상태였다.',
        ]);
        await era.printAndWait([
          '결심은 섰는가? 설령 아직 준비가 되지 않았다고 느낀다 해도, 인생에서 똑같은 밤은 두 번 다시 찾아오지 않는다.',
        ]);

        await era.printAndWait([
          '별빛이 쏟아지는 밤하늘 아래에서, ',
          me.get_colored_name(), 
          '은(는) 마침내——',
        ]);
        era.printButton('우라라의 손을 먼저 잡는다.', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(), 
          '은(는) 곁에 있는 아이의 손을 살며시 잡았고, 돌아온 것은 약간의 망설임 끝에 느껴지는 따스한 맞잡음이었다.',
        ]);
        await era.printAndWait([
          '시선을 살짝 옆으로 돌리자, 침묵하던 ',
          urara.get_colored_name(),
          '가 드디어 ',
          me.get_colored_name(),
          '을(를) 향해 미소 지었다.',
        ]);
        await era.printAndWait([
          '분명 아직은 어린 ',
          urara.sex,
          '인데, 어째서인지 이때만큼은 아이답지 않은 침착함을 보여주었다.',
        ]);
        await era.printAndWait([
          '모든 것을 이해한다는 듯한 표정은, 마치 ',
          urara.get_colored_name(),
          '가 먼저 고백했을 때와 같았다.',
        ]);
        era.println();
        if (relation > 150) {
          await urara.say_and_wait(
            '생각했던 것보다 조금 늦었지만, 우라라는 여전히 트레이너를 이렇게나 좋아해!',
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 곁에 기대어 감정에 화답하며, ',
            urara.get_colored_name(),
            '는 어느덧 웃음을 터뜨렸다.',
          ]);
          await urara.say_and_wait([
            '잘 부탁해……? 헤헤~ 역시 우라라한테는 안 어울리네!',
          ]);
        } else {
          await urara.say_and_wait([
            '무슨 생각을 그렇게 해? 벌써 시간이 이렇게 됐는데…… 그래도, 결국 그렇게 된 거네, 트레이너!',
          ]);
          await era.printAndWait([
            '비록 불만과 걱정이 조금 섞여 있었지만, ',
            urara.get_colored_name(),
            '는 작게 웃음을 터뜨렸다.',
          ]);
          await urara.say_and_wait('돌아가는 길은 조금 천천히 가도 모두가 걱정하지 않겠지?');
        }
        era.println();
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          await urara.say_and_wait(
            '하지만 트레이너, 밤길은 정말 어둡거든. 다른 애만 데려다주면 안 돼?',
          );
          await urara.say_and_wait(
            '갑자기 손을 놓으면, 어쩌면 우라라는 길을 잃어버릴지도 모르니까……',
          );
          era.println();
        }
        await era.printAndWait([
          '돌아가는 길, 연인이 된 두 사람의 발걸음은 어느덧 느려져 있었다.',
        ]);
        await era.printAndWait([
          '아직 천진난만한 시절의 어린 ',
          urara.get_uma_sex_title(),
          '와 이미 어른인 트레이너는, 그 차이가 아무리 크더라도 서로를 선택했다.',
        ]);
        await era.printAndWait([
          '앞으로 얼마나 더 걸어야 할지 모를 밤길은 어쩌면 모두를 걱정하게 만들지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 통금 시간 전까지만 안전하게 돌아가면 괜찮을 터. 그날의 귀갓길을 회상하며, ',
          urara.get_teen_sex_title(),
          '는 ',
          urara.sex,
          '가 여기저기 낙서해둔 노트를 덮었다.',
        ]);
        era.drawLine();
        await urara.say_and_wait(
          '미래의 우라라와 트레이너가 무슨 일이 있어도 밤길에서 헤매지 않기를.',
          true,
        );
        await in_urara.say_as_unknown_and_wait([
          '그날의 총총한 별빛을 떠올리며, 작은 ',
          urara.get_uma_sex_title(),
          '는 그렇게 기원했습니다.',
        ]);
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      await print_event_name('선택을 내린 당신에게', urara);
      await in_urara.say_as_unknown_and_wait(
        '집무실 책상 앞에 앉아 서류를 처리하며, 당신은 오늘 우라라와 함께 있을 때 겪었던 뜻밖의 조우를 회상합니다.',
      );
      await in_urara.say_as_unknown_and_wait(
        '하지만 뜻밖이라고 하기엔 적절치 않을지도 모르겠군요. 그전까지 당신은 이토록 『단단히 준비한』 우라라를 본 적이 없었으니까요.',
      );
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '! 연애적인 의미에서, 우라라를 어떻게 생각하고 있어?',
      ]);
      await era.printAndWait([
        '처음 그 질문을 들었을 때, ',
        me.get_colored_name(), 
        '은(는) 환청을 들은 게 아닌가 싶었다. 아니면 ',
        urara.get_colored_name(),
        '가 누군가에게 이상한 장난이라도 배운 걸까?',
      ]);
      await era.printAndWait([
        '하지만 책상 앞에 앉아 있던 ',
        me.get_colored_name(),
        '이(가) 고개를 돌리자, 어린 ',
        urara.get_uma_sex_title(),
        '가 중상 레이스에 임할 때와 같은 진지한 표정으로 뒤에 서 있었다.',
      ]);
      await era.printAndWait([
        '평소의 관계 방식과는 상관없이, 의심할 여지도 없이 ',
        urara.get_colored_name(),
        '와 ',
        me.get_colored_name() ,
        '은(는) 하나의 의자에 비좁게 같이 앉게 되었다.',
      ]);
      await era.printAndWait([
        '마치 1착을 따내려는 듯, ',
        urara.get_colored_name(),
        '는 독점하듯 ',
        me.get_colored_name(),
        '의 허벅지 위에 앉아 몸 전체를 트레이너의 품에 밀착시켰다.',
      ]);
      await urara.say_and_wait([
        '그러니까 ',
        callname,
        '! 우라라를 도대체 어떻게 생각하는지, 우라라는 지금 바로 알고 싶어!',
      ]);
      await era.printAndWait([
        '벚꽃색 눈동자가 ',
        me.get_colored_name(),
        '의 눈앞까지 다가온 거리에서, 작은 ',
        urara.get_uma_sex_title(),
        '는 진지한 미소를 띠며 다시 한번 ',
        me.get_colored_name(),
        '에게 물었다.',
      ]);
      await era.printAndWait([
        '하지만 지금 ',
        urara.get_colored_name(),
        '에게 퇴로를 차단당한 ',
        me.get_colored_name() ,
        '은(는) 그리 당황하지 않았다. 오히려 ',
        me.get_colored_name() ,
        '의 마음 깊은 곳에서 언젠가 이런 날이 올 것임을 알고 있었을지도 모른다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        urara.sex,
        '의 트레이너다. ',
        urara.get_colored_name(),
        '조차 깨달은 감정을, 비록 인정하기 두려웠을지언정 ',
        me.get_colored_name(),
        '도 모를 리 없었다.',
      ]);
      await era.printAndWait(
        '두 사람의 거리가 얼마나 가까운지는 주변 사람들조차 「말하지 않아도 아는」 사실이었다.',
      );
      await era.printAndWait(
        '회상 속의 당신은 여기서 잠시 머뭇거렸으나, 기대든 의심이든 담당의 감정으로부터 도망쳐서는 안 된다는 결론에 도달했다.',
      );
      await era.printAndWait([
        '하물며 먼저 말을 꺼낸 ',
        urara.get_colored_name(),
        '조차 조금의 망설임도 없지 않은가.',
      ]);
      era.println();
      in_urara.say_as_unknown([
        '조용히 대답을 기다리는 ',
        urara.get_colored_name(),
        '를 마주하며, 트레이너 ',
        me.get_adult_sex_title(),
        '께서 당시 내렸던 선택은——',
      ]);
      era.printButton(`${urara.name}를 껴안는다`, 1);
      era.printButton('「지금은 아직 안 돼……」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '찰나의 선택 끝에, ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '를 품속에 꼭 끌어안았다.',
        ]);
        await urara.say_and_wait(
          '에헤헤~ 트레이너를 곤란하게 해버렸네. 하지만 트레이너가 정말로 우라라를 선택해줘서 너무 기뻐……',
        );
        await era.printAndWait([
          '긴장으로 굳어 있던 몸은 ',
          me.get_colored_name(),
          '의 품 안에서 서서히 부드러워졌고, ',
          urara.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 선택에 안도한 듯 보였다.',
        ]);
        await era.printAndWait([
          '비록 평소의 ',
          urara.get_colored_name(),
          '와는 조금 달랐지만, ',
          urara.sex,
          '의 트레이너인 ',
          me.get_colored_name() ,
          '은(는) 그 이유를 알 수 있었다.',
        ]);
        await era.printAndWait([
          '어린 아이라 해도 자신이 어떤 「',
          urara.get_uma_sex_title(),
          '」인지 정도는 알고 있었다. ',
          urara.sex,
          '는 사실 늘 안정감을 갈구해왔고, 그것을 겉으로 잘 드러내지 않았을 뿐이다.',
        ]);
        await era.printAndWait([
          '그리고 「',
          urara.get_colored_name(),
          '」를 껴안은 이유? 대답할 수는 있었으나, 부적절한 욕망 탓에 입 밖으로 내기는 어려웠다.',
        ]);
        await era.printAndWait(
          '이를테면 첫 만남 때, 어느 성인이 한 침대에서 자던 소녀의 몸에서 안식과 온기를 느꼈던 것 같은 이유 말이다.',
        );
        await era.printAndWait(
          '학생의 격려를 받고서야 잊고 있던 전진의 초심을 되찾고, 학생의 몸에서 갈구하던 배덕적인 따스함을 얻으려 하다니.',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '와 계약을 맺은 트레이너는, 마음속에 ',
          urara.get_colored_name(),
          '가 다시 지핀 불꽃 외에는 불순한 의도만 가득할지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 그런 건 상관없었다. 어떤 복잡한 감정이 섞여 있든, ',
          urara.get_colored_name(),
          '와 함께 지내온 시간만큼은 결코 가짜가 아니기 때문이다.',
        ]);
        era.println();
        if (relation > 150) {
          await urara.say_and_wait(
            '트레이너, 우라라 때문에 자신을 깎아내리지 마. 이건 우라라가 내린 선택이기도 하니까.',
          );
          await era.printAndWait([
            '회상 속에서 ',
            urara.get_colored_name(),
            '는 안심시켜주는 작은 손을 뻗어 ',
            me.get_colored_name(),
            '의 뺨에 서린 망설임을 어루만졌다.',
          ]);
          await era.printAndWait([
            '무엇이든 다 안다는 듯한 표정으로, ',
            urara.get_colored_name(),
            '는 변함없는 미소로 ',
            me.get_colored_name(),
            '의 포옹에 화답했다.',
          ]);
          await urara.say_and_wait(
            '마음이 통한다는 건 정말 멋진 일이야. 엄마도 그렇게 말했어! 그리고 우라라도 계속 어린애인 건 아니니까!',
          );
          await era.printAndWait(
            '그렇다. 이제 더 이상 망설일 필요는 없다. 서로 사랑하는 사람이 바로 곁에 있으니까.',
          );
        } else {
          await urara.say_and_wait(
            '걱정돼? 하지만 무슨 일이 있었든, 우라라는 이미 트레이너를 좋아하게 됐는걸……',
          );
          await era.printAndWait([
            '회상 속에서 ',
            urara.get_colored_name(),
            '는 방금 전까지 복잡한 표정이었으나, 이내 홀가분한 듯 ',
            me.get_colored_name(),
            '의 얼굴을 감싸 쥐었다.',
          ]);
          await era.printAndWait([
            '절대 후회하지 않겠다는 듯한 눈빛으로, 소녀는 용감하게 ',
            me.get_colored_name(),
            '의 불순물이 섞였을지도 모를 사랑에 응답했다.',
          ]);
          await urara.say_and_wait(
            '이제 참지 않아도 돼, 트레이너. 선택을 내린 우라라가 여기, 트레이너 옆에 있으니까……!',
          );
          await era.printAndWait('그렇다. 이제는 누구에게도 비난받지 않을 것이다……');
        }
        era.println();
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          await urara.say_and_wait(
            '하지만 이래서는 우라라가 모두에게 비겁하다는 소리를 들어도 이제 되돌릴 수 없겠네……',
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 품속에 부드럽게 안긴 채, ',
            urara.get_colored_name(),
            '가 갑자기 가슴팍에 기대어 나지막이 속삭였다.',
          ]);

          era.printButton('「뭐——」', 1);
          await era.input();

          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 기습적인 말에 당황하고 있을 때, ',
            urara.get_colored_name(),
            '는 다시 고개를 저으며 다정하게 연인을 달래주었다.',
          ]);
          await urara.say_and_wait(
            '괜찮아. 트레이너를 원망하려는 게 아니야. 우라라는 이미 그전부터 준비하고 있었는걸.',
          );
          await era.printAndWait('뒤이어 천사 같은 미소가 번졌다.');
          era.println();
        }
        await urara.say_and_wait('앞으로도 계속 서로 좋아하자, 트레이너!');
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '품 안에 안긴 우라라의 작고도 확실한 온기와 부드러움을 회상하며, 아름다운 기억은 잠시 막을 내립니다.',
        );
        await in_urara.say_as_unknown_and_wait(
          '경사로군요? 아니요, 비꼬는 게 아닙니다. 저 또한 당신께서 행복해지리라 믿고 싶으니까요.',
        );
        await sys_love_uma_in_event(52);
      } else {
        await urara.say_and_wait(
          '역시 우라라의 질문이 너무 갑작스러웠지! 트레이너를 너무 곤란하게 만들면 안 되는데!',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 어떻게 완곡하게 거절할지 고민하던 찰나, ',
          urara.get_colored_name(),
          '가 먼저 선수를 쳤다.',
        ]);
        await urara.say_and_wait(
          '트레이너는 어른이니까 생각할 게 많겠지! 그럼 우라라도 더는 묻지 않을게!',
        );
        await urara.say_and_wait(
          '그러니까 나중에라도 트레이너의 생각이 정리되면 꼭 우라라한테 말해줘야 해!',
        );
        era.println();
        if (relation > 150) {
          await era.printAndWait([
            '전혀 실망한 기색 없이 평소처럼 웃으며, 어린 ',
            urara.get_uma_sex_title(),
            '는 손을 뻗어 트레이너의 뺨을 살짝 잡아당겼다.',
          ]);
          await urara.say_and_wait(
            '하지만 우라라도 포기할 생각은 없어! 우라라는 계속 기다릴 거야! 트레이너도 이미 짐작하고 있지?',
          );
          await urara.say_and_wait(
            '우라라는 트레이너가 우라라를 받아들여도 괜찮다고 생각할 때까지 기다릴 거야!',
          );
        } else {
          await era.printAndWait([
            '말을 마치자마자 금세 풀이 죽은 듯, ',
            urara.get_colored_name(),
            '는 다시 ',
            me.get_colored_name(),
            '의 품속으로 파고들었다.',
          ]);
          await urara.say_and_wait(
            '트레이너, 우라라가 얼마나 기다려야 하는지 알아? 하지만 트레이너는 안 가르쳐주겠지……',
          );
          await urara.say_and_wait(
            '만약 우라라가 좀 더 강하게 밀어붙였다면 트레이너가 지금 바로 허락해줬을까? 농담이야……',
          );
        }
        era.println();
        await era.printAndWait(
          '그날이 올지는 아직 알 수 없으나, 틀린 말은 아니다. 지금은 현상을 유지하는 것이 최선이며, 아직 때가 아닐 뿐이다——',
        );
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '그러니 그때까지, 설령 가는 길에 순풍이 불더라도 두 사람의 관계를 어떻게 다루어야 할까요?',
        );
        await in_urara.say_as_unknown_and_wait(
          '의자에 앉아 나른하게 몸을 흔들며, 당신과 우라라는 그렇게 아무것도 하지 않으면서도 수많은 생각에 잠긴 시간을 보냈습니다.',
        );
        await in_urara.say_as_unknown_and_wait('……');
        await in_urara.say_as_unknown_and_wait(
          '정말이지 무슨 생각을 하는지 모르겠군요. 이 상황까지 와서 거절할 이유가 대체 어디 있단 말입니까?',
        );
        await in_urara.say_as_unknown_and_wait(
          '……죄송합니다, 하지 말아야 할 소리를 했군요. 어쨌든 수고하셨습니다.',
        );
        new UraraLifeMarks().active_74 = 1;
        era.set('cflag:52:호감거절', 74);
        await punish_rejecting_love(52);
      }
    }
  }
};