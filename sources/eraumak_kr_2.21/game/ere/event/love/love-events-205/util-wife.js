const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love205UtilGirlFriend = require('#/event/love/love-events-205/util-girl-friend');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

module.exports = class extends Love205UtilGirlFriend {
  async 89(vp, me) {
    await print_event_name('Premier amour (첫사랑이라는 작은 일)', vp);
    if (
      vp.sex_code !== 1 &&
      me.sex_code > 0 &&
      era.get('cflag:205:임신단계') === 1 << pregnant_stage_enum.no
    ) {
      begin_and_init_ero(0, 205);
      await vp.print_and_wait(
        `어느 날, 나는 자궁에 솔직해지기로 하고 ${sys_get_callname(205, 0)}의 방으로 찾아갔다.`,
      );
      !era.get(`status:205:생리`) && era.set('status:205:경구피임약', 1);
      await me.say_and_wait('갑자기 그런 옷차림으로 오다니…… 무슨 속셈이야?');
      await vp.print_and_wait(
        '파란색과 흰색의 수수한 옷, 원래는 G1 레이스에서 입는 승부복이지만, 나는 이 차림 그대로 와버렸다.',
      );
      await vp.print_and_wait(
        '우아함을 위해 통기성을 일부 희생한 옷이라, 전력으로 계단을 뛰어 올라온 내 땀은 증발하지 못하고 속옷에 스며들어 무척 축축했다.',
      );
      await me.say_and_wait('밤새도록 안아줄 테니까, 각오하는 게 좋을 거야.');
      await vp.print_and_wait('큰일 났다, 벌써 젖어버렸어.');
      await vp.print_and_wait(
        '2주 동안 쌓인 성욕과, 여러 단계의 발정기가 겹쳐 보지는 이미 끈적끈적해져 있었다.',
      );
      await vp.print_and_wait(
        '나는 어떻게 변해버리는 걸까? 어떻게 굴복하고, 어떻게 아양을 떨고, 어떻게 망가져 버릴까.',
      );
      await vp.print_and_wait(
        `방에 들어와 문을 닫는 순간, 나는 망토를 옷걸이에 걸고 ${sys_get_callname(
          205,
          0,
        )} 앞에 주저앉았다.`,
      );
      await me.say_and_wait('진정해, 자지는 도망 안 가니까.');
      await vp.print_and_wait(
        `시치미 떼는 이 사람의 입을 다물게 하려고, 나는 ${me.sex}와 키스했다.`,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await vp.print_and_wait(
        '혀를 밀어 넣어 얽히고, 타액을 흘려보내며 질척이는 물소리를 냈다.',
      );
      await me.say_and_wait(`${sys_get_callname(0, 205)}, 소질이 있네.`);
      await vp.print_and_wait('시끄러워요……');
      await vp.print_and_wait('입안을 핥아져서, 미지의 촉감에 조금 놀랐다.');
      await vp.print_and_wait(
        `역시 ${sys_get_callname(
          205,
          0,
        )}는 키스에 능숙하고, 우마뾰이할 때 상대를 기쁘게 하는 방법을 전부 알고 있다.`,
      );
      await vp.print_and_wait(
        `부츠를 벗어 던지고, 엉덩이를 ${sys_get_callname(
          205,
          0,
        )}의 얼굴 쪽으로 향한 채 육봉 옆으로 다가갔다.`,
      );
      await vp.print_and_wait('예전엔 상상조차 못 했던 대담한 체위.');
      await vp.say_and_wait('당신의 비린내…… 엄청나네요.');
      await vp.print_and_wait(
        '아양 떠는 달콤한 말이 절로 나왔다, 어쩔 수 없잖아? 암컷은 육봉을 이길 수 없는걸.',
      );
      await vp.print_and_wait(
        `꼬박 2주 동안, ${sys_get_callname(205, 0)} 때문에 머리가 타버릴 것 같았으니까.`,
      );
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 반쯤 발기한 남근을 머금고, 혀로 천천히 귀두를 반 바퀴 핥았다.`,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await vp.print_and_wait("입을 다물고 쥬웁, 쮸읍 하는 소리를 냈다.");
      await vp.print_and_wait('발기한 그것이 곧바로 내 목구멍 깊은 곳을 꿰뚫었다.');
      await me.say_and_wait(
        `${sys_get_callname(0, 205)} 발에서도 냄새나. 짜다고 해야 할지 시큼하다고 해야 할지.`,
      );
      await vp.print_and_wait('변태, 이상해, 최악이야!');
      await vp.print_and_wait('당신 말고는, 내게 그런 냄새가 난다는 걸 아는 사람은 아무도 없는데.');
      await vp.print_and_wait('혀로 핏줄을 꼼꼼히 핥으며, 천천히 뿌리 쪽으로 다가갔다.');
      await vp.print_and_wait(
        `기대감에 클리토리스가 포피를 밀어내고 제멋대로 튀어나왔고, 나는 허벅지로 ${sys_get_callname(
          205,
          0,
        )}의 머리를 붙잡고 꽉 조였다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(
          205,
          vp.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await vp.print_and_wait(
        '맡아주세요, 핥아주세요, 빨리요! 빨리, 깨물어도 좋으니까, 거길 깨물어줘요!',
      );
      await vp.print_and_wait('혼자 자위할 때는 감히 건드리지도 못했던, 새끼손가락 끝만한 콩알.');
      await vp.print_and_wait(
        '최근엔 다리를 오므리고 걷기만 해도 음순과 속옷에 마찰되어, 제멋대로 반응하는 천박한 약점이 되어버렸다.',
      );
      await vp.print_and_wait(
        `애무가 시작되었고, 그대로 ${sys_get_callname(
          205,
          0,
        )}에게 빨린 채 이빨로 가볍게 짓이겨졌다.`,
      );
      await vp.print_and_wait('평소엔 바깥 공기조차 닿지 않는 곳이니, 견뎌내는 건 불가능했다.');
      await vp.print_and_wait(
        `내 허리는 잉어처럼 펄떡 튀어 올랐고, ${me.sex}의 얼굴에 시오후키를 쏟아냈다.`,
      );
      await vp.print_and_wait('소리를 지르고 싶었지만, 입은 완전히 틀어막혀 있었다.');
      await vp.say_and_wait('읍! 으으으읍, 으응, 오오옷.');
      await vp.print_and_wait('내가 느낄 때마다 목구멍이 수축하며 귀두를 꽉 조였다.');
      await vp.print_and_wait(
        '나는 오나홀 취급을 받고 있었다. 클리토리스를 자극하는 것으로 열고 닫을 수 있는 편리한 도구.',
      );
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}의 육봉이 입안에서 떨리더니, 대량의 정액을 토해냈다.`,
      );
      await vp.print_and_wait(
        '영화에 나오는 물 같은 사정이 아니라, 연유처럼 농밀한 정액이었다.',
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await vp.print_and_wait(
        '목구멍 깊은 곳에 구멍을 뚫어버릴 듯한 기세로 뿜어지는 정액을, 목을 힘껏 움직여 꿀꺽 삼켰다.',
      );
      await vp.print_and_wait('당신 같은 수컷 앞에서 정액을 뱉어낼 수는 없으니까.');
      await me.say_and_wait('펠라치오가 꽤 능숙해졌네. 자, 물.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 조금 놀란 듯이 물을 건네주었다.`,
      );
      await vp.print_and_wait(`나는 입을 크게 벌려, ${me.sex}가 목구멍 깊은 곳까지 똑똑히 볼 수 있게 했다.`);
      await vp.print_and_wait('보세요, 당신의 소중한 아이들, 전부 내 위장 속으로 떨어져 버렸다고요?');
      await vp.say_and_wait('하아……');
      await vp.print_and_wait('수컷의 냄새가 식도에서부터 올라와 뇌수까지 꿰뚫었다.');
      await vp.print_and_wait(
        '보지에서는 이미 새하얀 애액이 뚝뚝 떨어지고 있었고, 그대로 떨어지지 않고 끈적하게 늘어졌다.',
      );
      await vp.print_and_wait(
        '내 자궁…… 어린아이의 손가락으로도 닿을 만큼 내려와 버렸어.',
      );
      await vp.say_and_wait('이번엔, 제 여기 안에다……');
      await vp.print_and_wait('나는 개구리처럼 다리를 벌리고, 손가락으로 은밀한 곳을 넓히며 요염하게 웃어 보였다.');
      await vp.print_and_wait('보세요, 여기 당신을 기분 좋게 해 줄 구멍이 있다고요?');
      await vp.print_and_wait('넣어주시면 분명 최고로 기분 좋을 거예요.');
      await vp.print_and_wait('끈적끈적한 암컷의 구멍이라고요?');
      await vp.print_and_wait('들어온다!');
      await vp.say_and_wait('응……! 앗……!');
      await vp.print_and_wait(
        '단숨에 꿰뚫렸고, 귀두가 찔러 들어와 자궁과 키스하자, 이상해져 버린다.',
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.print_and_wait('뜨거워, 너무 좋아.');
      await vp.say_and_wait('거기, 더 찔러주세요…… 좋아해요.');
      await vp.print_and_wait('피스톤질 한 번 한 번이 너무 굉장해서, 뇌의 신경이 끊어질 것 같았다.');
      await vp.print_and_wait(
        `질을 꽉 수축하면, ${sys_get_callname(205, 0)}도 괴로운 듯한 표정을 지었다.`,
      );
      await vp.print_and_wait(`귀엽다, 계속 이렇게 ${me.sex}를 조이고 싶다.`);
      await vp.print_and_wait("찌걱 하는 소리와 함께, 육봉이 빠져나가려 한다……");
      await vp.print_and_wait('안 돼, 안 돼요! 저를 좀 더 사랑해주세요, 삽입하지 않으면 안 된다고요……');
      await me.say_and_wait(
        `뭐야 이거, 너 진짜 최고급 명기잖아, ${sys_get_callname(0, 205)}!`,
      );
      await vp.print_and_wait('아아…… 기뻐요.');
      await vp.print_and_wait(
        `${sys_get_callname(
          205,
          0,
        )}에게 머리를 쓰다듬어지며 엎드린 채, 강아지처럼 뒤에서 박혔다.`,
      );
      await vp.print_and_wait('꺄앙! 이런 거, 완전히 짐승들의 교미잖아요.');
      await vp.print_and_wait(
        `땀에 젖어 들러붙은 내 머리카락을 ${sys_get_callname(
          205,
          0,
        )}는 난폭하게 거머쥐고, 손잡이처럼 꽉 잡았다.`,
      );
      await vp.print_and_wait('바보! 여자아이에게 가장 소중한 것 중 하나인데, 너무해요.');
      await vp.print_and_wait('뒤에서 가슴을 거칠게 움켜쥐어지고, 하반신이 격렬하게 부딪혔다.');
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.print_and_wait('나는 힘없이 베개에 얼굴을 파묻었다.');
      await me.say_and_wait('정말 좋은 엉덩이네, 너무 야하잖아……');
      await vp.print_and_wait('바보, cruche, Imbécile……');
      await vp.print_and_wait(
        '허리가 부딪힐 때마다 엉덩이가 괴롭힘당해서, 조금 아프면서도 기분 좋았다.',
      );
      await vp.say_and_wait('……원해요.');
      await vp.print_and_wait('말이 끝나자마자 나는 뒤집혀서 혀를 빨렸고, 그리고…… 시오후키를 해버렸다.');
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await vp.print_and_wait('숨이 막힐 것 같았지만, 입술을 떼어주지 않았다.');
      await vp.print_and_wait("「츄릅, 츄릅」 하는 소리가 났다.");
      await me.say_and_wait(`젠장, 쌀 것 같아, ${sys_get_callname(0, 205)}!`);
      await vp.print_and_wait(`나는 다리를 ${me.sex}의 허리에 감고 꽉 끌어안았다.`);
      await vp.print_and_wait('도망치지 마요, 전부 자궁에 쏟아부어 주세요.');
      await vp.print_and_wait(`${me.sex}의 귀두와, 내 자궁구는 완벽하게 맞아떨어졌다.`);
      await vp.print_and_wait('전부 제게 주세요, 한 방울도 남김없이, 전부……');
      await vp.print_and_wait(`다리를 꽉 조여, ${me.sex}가 육봉을 빼지 못하게 했다.`);
      await vp.print_and_wait('고작 인간의 힘으로 저항해봤자 소용없다고요?');
      await vp.print_and_wait(`${sys_get_callname(205, 0)}, 주입 완료.`);
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await me.say_and_wait(
        `……하아, ${sys_get_callname(0, 205)}, 애프터서비스는?`,
      );
      await vp.print_and_wait('하하, 나 어쩌다 이런 최악인 사람을 좋아하게 된 걸까?');
      await vp.print_and_wait('그래도 꽤 맛있으니까, 어쩔 수 없네. 청소 펠라 해드릴게요.');
      await vp.print_and_wait('……부족해, 부족해, 부족해, 부족해!');
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await vp.print_and_wait(
        `나는 ${sys_get_callname(205, 0)}의 어깨를 붙잡고 몸을 뒤집어, 이번엔 내가 위로 올라갔다.`,
      );
      await me.say_and_wait('나 좀 쉬게 해줄래?');
      await vp.print_and_wait('농담도 잘하시네요. 당신이라면 얼마든지 할 수 있잖아요?');
      await vp.print_and_wait('기승위로 쥐어짜내는 건 처음이라, 야동에서 본 모습을 흉내 낼 수밖에 없었다.');
      await vp.print_and_wait('몇 번을 해도, 도무지 익숙해지지 않는다.');
      await vp.print_and_wait(
        '그저 엉덩이를 가라앉혀 육봉을 몸속 깊이 묻는 것만으로도, 쾌감이 스며 나와 의식이 날아가 버릴 것 같았다.',
      );
      await vp.print_and_wait('자, 당신도 긴장 풀지 말고 힘내요~ 힘내서~ 절 더 만족시켜 달라고요.');
      await vp.print_and_wait('당신의 육봉으로, 절 죽여주세요.');
      await quick_make_love(
        new EroParticipant(205, part_enum.virgin),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      era.drawLine();
      await vp.print_and_wait('뇌가 이성을 되찾았을 무렵엔, 이미 해가 완전히 떠올라 있었다.');
      await vp.print_and_wait(
        `${sys_get_callname(205, 0)}는 숨이 넘어갈 듯한 모습이었다.`,
      );
      await vp.print_and_wait(
        '그 후로도 나는 끊임없이 요구했고, 체위를 바꿔가며 연전을 치르다가, 조금 쉬고는 다시 교미를 이어갔다.',
      );
      await vp.print_and_wait('입과 질에 박힌 횟수는 이미 셀 수도 없었다.');
      era.add('exp:205:오랄횟수', 10);
      era.add('exp:205:성교횟수', 10);
      era.add('exp:0:음부찌르기횟수', 10);
      await vp.print_and_wait(
        `애널도 해보고 싶었지만, ${sys_get_callname(
          205,
          0,
        )}가 그건 미리 준비가 필요하다고 했다.`,
      );
      await vp.print_and_wait('굶주림과 갈증은 채워졌지만, 그래도……');
      await vp.print_and_wait(
        `나는 ${sys_get_callname(205, 0)}를 다시 침대로 쓰러뜨렸다. 왜냐하면 ${
          me.sex
        }가 아침 발기를 했으니까.`,
      );
      await vp.print_and_wait(`나는 ${me.sex}의 바싹 마른 입술에 탐욕스러운 키스를 새겼다.`);
      era.println();
      await sys_love_uma_in_event(205);
      end_ero_and_train();
      era.drawLine();
      era.print('2차전을 시작하시겠습니까?');
      era.printButton('예', 1);
      era.printButton('아니오', 2);
      if ((await era.input()) === 1) {
        await quick_into_sex(205);
      }
    } else {
      await sys_love_uma_in_event(205);
    }
  }
};