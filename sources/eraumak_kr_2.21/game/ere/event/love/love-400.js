/**
 * @file 선데이 사일런스 - 애정
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTitles = require('#/data/chara-titles');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends CustomizedLove {
  async 49(silence, me, callname) {
    await print_event_name('애욕', silence);
    await silence.print_and_wait([
      silence.get_colored_name(),
      '는 자신의 침대에 누워, 가슴에 손을 얹은 채 점점 거칠어지는 숨을 내쉬고 있다.',
    ]);
    await silence.say_and_wait([
      '어째서지? ',
      callname,
      ', 왜 난 이 타이밍에 네 생각이 나는 걸까?',
    ]);
    await silence.print_and_wait([
      '분명 지금쯤 푹 자둬야 내일 훈련할 체력을 비축할 텐데, ',
      silence.get_colored_name(),
      '의 얼굴에는 ',
      silence.sex,
      ' 자신조차 이해할 수 없는 표정이 떠올랐다.',
    ]);
    await silence.say_and_wait('나도 누군가를... 이렇게 그리워할 수 있는 건가?');
    await silence.print_and_wait(
      '심장이 격렬하게 뛴다. 창밖의 밝은 달을 보며 씁쓸한 미소를 지었다.',
    );
    await silence.say_and_wait(
      '벌써부터 밤이 오는 게 초조해지기 시작했어. 하지만 왜일까... 너랑 같이 있는 게 너무 좋아서... 떨어지고 싶지 않아서 그런 걸까?',
    );
    await silence.print_and_wait([
      silence.sex,
      '의 손이 무의식적으로 더 은밀한 곳으로 향했다. ',
      silence.get_colored_name(),
      '는 예전에 ',
      me.get_colored_actual_name(),
      '의 품에 안겼을 때의 감촉을 떠올렸고, ',
      silence.sex,
      ' 자신조차 깨닫지 못한 사이에 씨앗이 천천히 뿌리를 내리고 싹을 틔우고 있었다.',
    ]);
    await silence.say_and_wait([
      '후우... 하아... 내일 훈련도 있는데... ',
      silence.name,
      ', 넌 정말 구제불능인 바보야.',
    ]);
    if (silence.sex_code - 1) {
      await silence.print_and_wait([
        '상의 단추를 풀고 꽃봉오리처럼 새빨간 유두를 꼬집으며, 다른 한 손으로는 이미 젖어들기 시작한 입구를 가볍게 문지르면서, ',
        silence.get_colored_name(),
        '는 쾌감에 몸을 맡겼다.',
      ]);
    }
    await silence.print_and_wait([
      silence.get_colored_name(),
      '의 낮게 억눌린 신음소리가 점차 잦아든 후.',
    ]);
    await silence.say_and_wait([
      '침대 시트가 좀 젖어버렸네... 하지만... 조금... 나아진 것 같아. 삼관 ',
      silence.get_uma_sex_title(),
      '가 되기 전까진 절대 이런 생각 해선 안 되는데. 그래도... ',
      me.sex,
      '를 잊을 수가 없잖아...',
    ]);
    await silence.say_and_wait(
      '안 돼... 지금 시기에, 벌써 이런 때가 왔는데, 우리의 소원을 위해서라도 절대 한눈팔아선 안 돼...',
    );
    await silence.print_and_wait([
      '그렇게 중얼거리며, ',
      silence.get_colored_name(),
      '는 스스로의 볼을 꼬집고는 이부자리를 대충 정리한 뒤 눈을 감았다.',
    ]);
    begin_and_init_ero(400);
    await masturbate(400);
    end_ero_and_train();
    await sys_love_uma_in_event(400);
  }

  async 74(silence, me, callname) {
    await print_event_name([silence.name, '의 사랑'], silence);
    if (
      CharaTitles.get(400)
        .get()
        .findIndex((e) => e.n.endsWith('아메리칸 드림')) !== -1
    ) {
      await silence.say_and_wait([callname, '...너한테 할 말이 있어.']);
      await era.printAndWait([
        silence.get_colored_name(),
        '는 다짜고짜 ',
        me.get_colored_name(),
        '의 손을 이끌고 ',
        me.get_couple_title(),
        '이 처음 만났던 그 숲속으로 들어갔다.',
      ]);
      await era.printAndWait([
        silence.sex,
        '가 미국 삼관 ',
        silence.get_uma_sex_title(),
        '가 된 이후부터, ',
        me.get_colored_name(),
        '은(는) 은연중에 ',
        silence.sex,
        '의 심경에 약간의 변화가 생겼음을 눈치채고 있었다.',
      ]);
      await silence.say_and_wait('나... 너한테 꼭 해둘 말이 있어.');
      await era.printAndWait([
        silence.get_colored_name(),
        '는 입을 떼기 힘들어 보였고, ',
      ]);
      await era.printAndWait([
        '금방이라도 물방울이 떨어질 듯 붉은 입술이 열렸다가 닫히기를 반복하자, ',
        me.get_colored_name(),
        '은(는) 최악의 상황을 상상하기 시작했다.',
      ]);
      era.printButton('「너... 혹시 은퇴라도 하려는 거야?」', 1);
      await era.input();
      await silence.say_and_wait(
        '그럴 리가 없잖아!!! 우리 레이스 인생은 이제 막 시작됐을 뿐이잖아?',
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 어이없다는 듯 반박했다. 그래도 ',
        silence.sex,
        '의 긴장한 기색은 조금 가신 듯, 심호흡을 한 뒤 다시 입을 열었다.',
      ]);
      await silence.say_and_wait([callname, ', 나랑 사귀어 줘!!']);
      era.printButton('「뭐... 뭣」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신의 귀를 의심했다. 훈련과 레이스 외에는 거의 아무것도 신경 쓰지 않던 ',
        silence.get_colored_name(),
        '가 연애를 하자고 요구하다니.',
      ]);
      era.printButton('받아들인다', 1);
      era.printButton('일단 거절한다', 2);
      if ((await era.input()) === 1) {
        await me.say_and_wait('알았어, 그럼... 앞으로 잘 부탁해... 내 연인.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그 말을 하면서도 스스로 그 호칭이 영 어색하게 느껴졌다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          silence.sex,
          '는 ',
          me.get_colored_name(),
          '보다 훨씬 더 부끄러워하는 듯했다. 평소의 무표정했던 얼굴은 온통 붉게 물들어 있었고, ',
        ]);
        await era.printAndWait([
          '갈 곳 잃은 시선과 불안하게 흔들리는 꼬리는 ',
          silence.sex,
          '가 보기와는 달리 전혀 진정하지 못했음을 말해주고 있었다.',
        ]);
        await silence.say_and_wait([
          '자... 잘 부탁할게. 나도 훌륭한 여자친구로서의 책임을 다할 테니까. ',
          callname,
          '... 나 아마, 이젠 네 곁을 떠날 수 없을 것 같아.',
        ]);
        await era.printAndWait([
          silence.sex,
          '는 ',
          me.get_colored_name(),
          '의 몸을 껴안고, ',
          me.get_colored_name(),
          '의 얼굴을 감싸 쥐며 입술을 빼앗았다. ',
          silence.sex,
          '의 키스는 굉장히 서툴러서, 다짜고짜 ',
          me.get_colored_name(),
          '의 입술을 깨물어 피를 내고 말았다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_couple_title(),
          '은 아무 말도 하지 않았다. 두 사람은 숲속에서 서로를 끌어안았고, 누군가 다가오는 기척이 들려서야 마치 닭 서리에 성공한 족제비처럼 황급히 자리를 떴다.',
        ]);
        begin_and_init_ero(0, 400);
        await quick_make_love(
          new EroParticipant(400, part_enum.mouth),
          new EroParticipant(0, part_enum.mouth),
          false,
        );
        end_ero_and_train();
        await sys_love_uma_in_event(400);
      } else {
        await me.say_and_wait('저기... 미안하지만, 이 일은 우리 둘 다 조금 더 생각해 볼 필요가 있을 것 같아.');
        await era.printAndWait([
          silence.get_colored_name(),
          '는 그 말을 듣고 억울한 듯 당장이라도 울음을 터뜨릴 것 같았다. ',
          silence.sex,
          '는 억지로 눈을 질끈 감고는, ',
          me.get_colored_name(),
          '에게 표정을 들키지 않으려고 고개를 숙인 채 묵묵히 고개를 끄덕였다.',
        ]);
        await silence.say_and_wait([
          '알았어... ',
          callname,
          '. 네 말이 맞아, 내가 너무 섣불렀어. 미안해... 그래도... 언젠가 꼭 제대로 된 대답을 들려주길 바랄게.',
        ]);
        await era.printAndWait([
          '말을 마치고 ',
          silence.sex,
          '는 도망치듯 숲속을 빠져나가, ',
          me.get_colored_name(),
          '이(가) 찾을 수 없는 곳으로 사라졌다.',
        ]);
        era.set('cflag:400:호감거절', 74);
      }
    } else {
      await silence.say_and_wait([
        '결국... 결국 난 여전히 불쌍한 패배자일 뿐이야...',
        silence.sex,
        '들의 소원조차 이뤄주지 못했어. 미안해 미안해 미안해 미안해...',
      ]);
      await silence.say_and_wait('………');
      await era.printAndWait([
        silence.get_colored_name(),
        '는 벽 구석에 기대어 눈물을 흘리고 있었다. 이곳은 트레센이라는 거대한 학원 안에서도 눈에 띄지 않는 구석진 곳으로, ',
        silence.get_colored_name(),
        '가 예전에 할 일이 없을 때면 곧잘 찾아와 멍하니 하늘을 바라보던 장소였다.',
      ]);
      era.printButton('「여기 있었네... 너한테 할 말이 있어.」', 1);
      await era.input();
      await silence.say_and_wait([
        '알았어... ',
        callname,
        '... 아니, ',
        me.actual_name,
        ', 내가 전에 말했듯이, 이번엔 순전히 내 잘못이니까,',
      ]);
      await silence.say_and_wait(
        '우리의 목표를 이루지 못한 건 나야. 넌 네 책임을 다해 최선을 다해줬어.',
      );
      await silence.say_and_wait(
        '네가 원한다면 언제든 계약을 해지해 줄게. 내 문제 때문에 네 귀중한 시간을 낭비하게 만들어서 정말 미안해.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        silence.sex,
        '의 뺨에 손을 얹었다. 평소 같으면 금세 쳐내졌을 손이었지만, 지금은 ',
        silence.get_colored_name(),
        '의 뺨에 얌전히 닿아 있었다.',
      ]);
      await era.printAndWait([
        '그것은 ',
        silence.sex,
        '가 지금껏 한 번도 보인 적 없는 표정이었다. 피로와 실망, 그리고 망연자실. 마치 여태껏 ',
        silence.sex,
        '를 버티게 해주던 기둥이 한순간에 무너져 내린 것만 같았다.',
      ]);
      await me.say_and_wait(
        '사일런스, 사람은 남을 위해 살아가는 게 아니야. 네가 내게 해준 이야기들, 그 비 오는 밤에 있었던 일, 나 하나도 빠짐없이 전부 다 기억하고 있어.',
      );
      await era.printAndWait([
        silence.get_colored_name(),
        '는 고개를 들고, ',
        me.get_colored_name(),
        '의 다음 말을 기다렸다.',
      ]);
      await me.say_and_wait([
        '어쩌면 넌 실패했을지도 몰라. ',
        silence.sex,
        '들의 마지막 소원을 이뤄주지 못했을 수도 있지... 하지만, 네 가장 친한 친구들이라면, ',
        silence.sex,
        '들도 네가 지금처럼 무너지는 걸 원하진 않을 거야... 안 그래?',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        '는 자신의 뺨을 쓰다듬더니, 천천히 일어나 ',
        me.get_colored_name(),
        '의 품에 무너지듯 안겼다.',
      ]);
      await silence.say_and_wait([
        '나도 모르겠어...',
        silence.sex,
        '들이 나한테 레이스 이야기를 할 때면, 눈이 막 반짝반짝 빛났었는데,',
      ]);
      await silence.say_and_wait('삼관 레이스 이야기를 할 때면 엄청 신나 했고... 그런데 난 실패해 버렸어.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 더 이상 아무 말도 하지 않고, 묵묵히 ',
        silence.get_colored_name(),
        '를 안아주었다. ',
        silence.sex,
        '가 ',
        me.get_colored_name(),
        '의 품에서 소리 없이 눈물을 흘릴 수 있도록.',
      ]);
      await silence.say_and_wait([
        '미안해... ',
        callname,
        ', 나 방금 엄청 꼴사나운 짓을 한 것 같아.',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        '는 고개를 숙인 채 기어들어 가는 목소리로 말했지만, ',
        me.get_colored_name(),
        '은(는) ',
        silence.sex,
        '의 마음이 이미 진정되었음을 느낄 수 있었다.',
      ]);
      era.printButton(
        '「전혀 꼴사납지 않아. 자신의 좌절과 실패를 용감하게 마주하는 건 엄청 대단한 일인걸. 그래서 말인데, 아리마 기념, 나갈 거지?」',
        1,
      );
      await era.input();
      await silence.say_and_wait(
        '당연하지. 비록 네게 삼관을 안겨주진 못했지만, 그래도 네가 앞으로도 나와 함께 이 길을 걸어주면 좋겠어.',
      );
      await silence.say_and_wait([
        '단순히 내 트레이너로서만이 아니라... 지금까지 내 곁에 있어 줘서 정말 고마워... 이건 보잘것없는 우마무스메의 작지만 진심 어린 마음이야. 좋아해, ',
        callname,
        '.',
      ]);
      await silence.say_and_wait(
        '너의 연인이 되고 싶어. 언젠가는 너와 함께 결혼식장에 들어가고 싶고, 평생토록 함께 걷고 싶어. 너는... 어떻게 생각해?',
      );
      era.printButton('받아들인다', 1);
      era.printButton('일단 거절한다', 2);
      if ((await era.input()) === 1) {
        await me.say_and_wait('알았어, 그럼... 앞으로 잘 부탁해... 내 연인.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그 말을 하면서도 스스로 그 호칭이 영 어색하게 느껴졌다. 하지만 ',
          silence.sex,
          '는 ',
          me.get_colored_name(),
          '보다 훨씬 더 부끄러워하는 듯했다.',
        ]);
        await era.printAndWait([
          '평소의 무표정했던 얼굴은 온통 붉게 물들어 있었고, 갈 곳 잃은 시선과 불안하게 흔들리는 꼬리는 ',
          silence.sex,
          '가 보기와는 달리 전혀 진정하지 못했음을 말해주고 있었다.',
        ]);
        await silence.say_and_wait([
          '자... 잘 부탁할게. 나도 훌륭한 여자친구로서의 책임을 다할 테니까. ',
          callname,
          '... 나 아마, 이젠 네 곁을 떠날 수 없을 것 같아.',
        ]);
        await era.printAndWait([
          silence.sex,
          '는 ',
          me.get_colored_name(),
          '의 몸을 껴안고, ',
          me.get_colored_name(),
          '의 얼굴을 감싸 쥐며 입술을 빼앗았다. ',
          silence.sex,
          '의 키스는 굉장히 서툴러서, 다짜고짜 ',
          me.get_colored_name(),
          '의 입술을 깨물어 피를 내고 말았다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_couple_title(),
          '은 아무 말도 하지 않았다. 두 사람은 한참 동안 입을 맞추었고, 입술을 뗀 후 ',
          silence.get_colored_name(),
          '는 입안에 감도는 피 맛을 음미하며 유쾌한 미소를 지었다.',
        ]);
        await silence.say_and_wait([
          callname,
          ', 나 앞으로 두 번 다시 ',
          me.get_colored_name(),
          '의 손을 놓지 않을 거야... 절대로.',
        ]);
        await sys_love_uma_in_event(400);
        begin_and_init_ero(0, 400);
        await quick_make_love(
          new EroParticipant(400, part_enum.mouth),
          new EroParticipant(0, part_enum.mouth),
          false,
        );
        end_ero_and_train();
      } else {
        era.printButton('저기... 미안하지만, 이 일은 우리 둘 다 조금 더 생각해 볼 필요가 있을 것 같아.', 1);
        await era.input();
        await era.printAndWait([
          silence.get_colored_name(),
          '는 그 말을 듣고 억울한 듯 당장이라도 울음을 터뜨릴 것 같았다. ',
          silence.sex,
          '는 억지로 눈을 질끈 감고는, ',
          me.get_colored_name(),
          '에게 표정을 들키지 않으려고 고개를 숙인 채 묵묵히 고개를 끄덕였다.',
        ]);
        await silence.say_and_wait([
          '알았어... ',
          callname,
          '. 네 말이 맞아, 내가 너무 섣불렀어. 미안해... 그래도... 언젠가 꼭 제대로 된 대답을 들려주길 바랄게.',
        ]);
        await era.printAndWait([
          silence.get_colored_name(),
          '는 뒤도 돌아보지 않고 ',
          me.get_couple_title(),
          '이 있던 곳을 떠났다. 아마 ',
          me.get_colored_name(),
          '에게 표정을 들킬까 봐 두려웠던 건지, ',
          silence.get_colored_name(),
          '는 엄청나게 빠른 속도로 달려갔다.',
        ]);
        era.set('cflag:400:호감거절', 74);
      }
    }
  }
};