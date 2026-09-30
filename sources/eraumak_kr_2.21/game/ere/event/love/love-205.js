/**
 * @file 베누스 파크 - 애정
 * @author 梦露
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const Love205UtilWife = require('#/event/love/love-events-205/util-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love205UtilWife {
  async 99(vp, me) {
    await print_event_name("Ensemble, c'est tout (함께라면 그것으로 충분해)", vp);
    if (vp.sex_code !== 1 && me.sex_code > 0 && check_pregnant_unprotect(205)) {
      begin_and_init_ero(0, 205);
      await era.printAndWait([
        '러브호텔에 도착한 후, ',
        me.get_colored_name(),
        '은(는) ',
        vp.get_colored_name(),
        '를 침대에 쓰러뜨리고 입술을 포개었다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '혀가 얽히고, ',
        me.get_colored_name(),
        '은(는) 타액을 밀어 넣었다. ',
        vp.get_colored_name(),
        '는 점차 받아들이더니, 스스로 원하기 시작했다.',
      ]);
      await era.printAndWait('뒤섞인 타액이 입가로 흘러내리는 것도 개의치 않고 키스를 이어갔다.');
      await era.printAndWait([
        '이후 ',
        me.get_colored_name(),
        '은(는) ',
        vp.get_colored_name(),
        '의 목덜미를 빨아들이며 빨간 자국을 남겼다. 마치 자신의 모든 징표를 새기려는 듯이.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 손이 ',
        vp.get_colored_name(),
        '의 가슴을 만지며, 브래지어 위로 주물렀다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '가 갑작스러운 자극에 신음을 내자, ',
        me.get_colored_name(),
        '은(는) 양쪽 유두를 동시에 잡아당겼다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.say_and_wait('꺄앗!');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이어서 치마 속으로 손을 뻗어, 허벅지를 쓸어내린 뒤 팬티 안으로 파고들었다.',
      ]);
      await era.printAndWait([
        '비부가 ',
        me.get_colored_name(),
        '의 손에 스쳐 지나가자, ',
        vp.get_colored_name(),
        '의 몸이 파르르 떨렸다.',
      ]);
      await vp.say_and_wait('어서 만져주세요……');
      await era.printAndWait([
        '그녀가 바란 대로, ',
        me.get_colored_name(),
        '의 손가락이 음핵에 닿았다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          205,
          vp.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait('포피가 벗겨지며, 민감한 부위가 부드럽게 애무당했다.');
      await vp.say_and_wait('아…… 하아…… 읏!');
      await era.printAndWait([
        me.get_colored_name(),
        '의 다른 한쪽 손이 다시 ',
        vp.get_colored_name(),
        '의 가슴으로 들어가 유륜 주변을 쓰다듬었다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await era.printAndWait('손가락 끝으로 원을 그리며, 조금씩 중심을 향해 나아갔다.');
      await era.printAndWait(
        '마침내 유두에 도달하자 엄지와 검지로 살짝 누르고, 굴리거나, 손톱을 세우기도 했다.',
      );
      await vp.say_and_wait('잠깐, 거기는……!');
      await era.printAndWait('즐기고 있으면서.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        vp.get_colored_name(),
        '의 머릿속이 흐려져 아무것도 생각할 수 없을 때까지 계속 공세를 퍼부었다.',
      ]);
      await era.printAndWait([
        '그리고 정신을 차리고 보니 ',
        vp.get_colored_name(),
        '는 스스로 다리를 벌리고 있었다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '는 만족스러운 듯 팬티를 벗겨냈다.']);
      await era.printAndWait([
        '이후에 벌어질 일을 기대하는 것인지, ',
        vp.get_colored_name(),
        '의 자궁이 계속해서 들끓었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 바지를 벗고 이미 발기한 그것을 드러내자, ',
        vp.get_colored_name(),
        '는 가볍게 절정 맞이했다.',
      ]);
      await era.printAndWait('두려워하면서도, 도망치지는 않는다.');
      if (check_pregnant_unprotect(205) && !era.get(`status:205:생리`)) {
        if (await select_yes_or_no('피임할까?', '하자', '노콘질싸!')) {
          era.set('status:205:경구피임약', 1);
        }
      }
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신의 성기를 잡고 ',
        vp.get_colored_name(),
        '의 질 입구에 다가가 천천히 삽입했다.',
      ]);
      await era.printAndWait(
        '귀두 부분이 들어가자 애액이 윤활유 역할을 하여, 거대한 성기가 단숨에 안쪽까지 박혀 들어갔다.',
      );
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('아아아아! 안 돼요!!');
      await era.printAndWait([
        '뿌리 부근까지 삼켜진 것을 확인한 ',
        me.get_colored_name(),
        '은(는) 움직이기 시작했다.',
      ]);
      await vp.say_and_wait('아! 앗! 너무 격렬해요……');
      await era.printAndWait([
        '골반이 부딪힐 때마다 철퍽이는 소리가 울려 퍼지고, 질벽이 긁힐 때마다 ',
        vp.get_colored_name(),
        '는 쾌감 속에서 거친 숨을 내쉴 뿐이었다.',
      ]);
      await era.printAndWait(`성기의 움직임에 따라 ${vp.sex}의 몸이 위아래로 움직였다.`);
      await era.printAndWait([
        '표정 관리도 이미 무너졌지만, ',
        vp.get_colored_name(),
        '는 더 이상 신경 쓰지 않았다.',
      ]);
      await vp.say_and_wait('가요! 가 버려요! 아아아앗!!');
      await era.printAndWait([
        me.get_colored_name(),
        '의 라스트 스퍼트 속에서 두 사람은 동시에 정점에 도달했고, 뜨거운 인자즙이 ',
        vp.get_colored_name(),
        '의 가라앉은 자궁을 가득 채웠다.',
      ]);
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '사정이 오랫동안 이어지는 동안, ',
        vp.get_colored_name(),
        '의 자궁은 귀두와 입맞춤하듯 정액으로 채워져 갔다.',
      ]);
      await era.printAndWait([
        '이윽고 전부 쏟아낸 ',
        me.get_colored_name(),
        '은(는) 성기를 빼냈다. 그와 동시에 백탁액이 역류해 흘러나왔다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '가 자신의 배를 바라보는 와중 ',
        me.get_colored_name(),
        '은(는) 다시 그녀의 위로 올라탔다.',
      ]);
      await era.printAndWait('입술이 겹치고, 혀가 얽힌다.');
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '한동안 뜨거운 키스를 나눈 후, ',
        me.get_colored_name(),
        '은(는) 다시 기운을 되찾은 그것을 밀어 넣었다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('아, 안 돼요……');
      await era.printAndWait([
        '안 될 것 없이 ',
        me.get_colored_name(),
        '은(는) 다시 피스톤 운동을 시작했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '에게 강제로 범해지는 ',
        vp.get_colored_name(),
        '는 필사적으로 저항하려 했지만, 몸에 힘이 들어가지 않았다.',
      ]);
      await era.printAndWait([
        '질 내부의 피스톤질이 격렬해지고, 입안 역시 ',
        me.get_colored_name(),
        '의 혀에 유린당했다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 등뒤를 꽉 껴안으며 쾌감에 몸을 맡겼다.',
      ]);
      await vp.say_and_wait('정말…… 제가 어떻게 돼 버려도 상관없으신 건가요……');
      await era.printAndWait([
        '이런 ',
        vp.get_colored_name(),
        '의 모습을 보며 ',
        me.get_colored_name(),
        '은(는) 만족스러운 미소를 지었다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '는 두 다리로 ',
        me.get_colored_name(),
        '의 등을 감싸 안으며, ',
        me.get_colored_name(),
        '이(가) 도망치지 못하게 했다.',
      ]);
      await vp.say_and_wait('읏! 사정해 주세요. 전부 제게 주세요.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 귀두를 자궁구에 밀착시킨 상태로 정자를 토해냈다.',
      ]);
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('흐으읏…… 아……');
      await era.printAndWait([
        me.get_colored_name(),
        '의 사정은 계속되었고, 맥박이 뛸 때마다 ',
        vp.get_colored_name(),
        '의 몸도 함께 경련했다.',
      ]);
      await era.printAndWait([
        '마치 ',
        vp.get_colored_name(),
        '의 작은 자궁이 터져버릴 것만 같은 양의 사정이 마침내 끝났다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 성기를 천천히 빼냈다.']);
      await vp.say_and_wait('한 번 더 가게 해 주실 수 있나요……');
      await era.printAndWait([
        '그렇게 말한 ',
        vp.get_colored_name(),
        '는 얼굴을 ',
        me.get_colored_name(),
        '의 성기에 비벼댔다.',
      ]);
      await era.printAndWait('그대로 혀를 내밀어 귀두를 입에 머금었다.');
      await era.printAndWait('요도에 남은 잔여물까지 전부 깨끗이 빨아올렸다.');
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 성기는 다시 멋지게 발기했고, ',
        vp.get_colored_name(),
        '는 그것을 자신의 비부로 가져갔다.',
      ]);
      await vp.say_and_wait('이번엔 뒤에서……');
      await era.printAndWait('기어가듯 엎드리며 뒤치기 자세를 취했다.');
      await vp.say_and_wait('아! 이거 위험해요. 닿는 곳이 이상해요……');
      await era.printAndWait('질 내부의 모든 주름이 마찰되었다.');
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 지나치게 격렬한 움직임 탓에, ',
        vp.get_colored_name(),
        '는 팔로 지탱하던 자세가 무너지며 엉덩이를 높게 치켜든 모양새가 되었다.',
      ]);
      era.printButton(
        `「${sys_get_callname(0, 205)}의 보지 기분 최고네. 꽉 조이는 게 끝내줘.」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '허리가 부딪힐 때마다, ',
        vp.get_colored_name(),
        '의 몸이 부르르 떨렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 복부를 찌르듯이 질벽을 따라 위로 밀어 올렸다.',
      ]);
      await era.printAndWait([
        'G스팟을 찔린 ',
        vp.get_colored_name(),
        '는 온몸에 전기가 통하는 듯한 감각을 느꼈다.',
      ]);
      await vp.say_and_wait('거기! 안 돼…… 또 가 버려!');
      await vp.say_and_wait('가버려요! 제게 싸 주세요! 제 안에 싸 주세요.');
      await era.printAndWait([
        '절정과 동시에 ',
        me.get_colored_name(),
        '에게 질내사정을 당하며, 뜨거운 인자즙이 주입되었다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '잠시 휴식을 취한 뒤, ',
        me.get_colored_name(),
        '에게 서프라이즈를 선사하겠다던 ',
        vp.get_colored_name(),
        '는 총총걸음으로 옆에 있는 탈의실로 들어갔다.',
      ]);
      await era.printAndWait([
        '잠시 후, ',
        vp.get_colored_name(),
        '의 작은 머리가 탈의실 문틈 사이로 쏙 빠져나왔다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀의 불안해하는 표정을 읽을 수 있었고, 그녀는 한 손으로 문틀을 강하게 붙잡고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 손을 뻗어 ',
        vp.get_colored_name(),
        '가 입을 틀어막고 있던 작은 손을 붙잡아 등 뒤로 꺾어 결박했다.',
      ]);
      await era.printAndWait([
        '작은 손이 입에서 떨어지는 순간, ',
        vp.get_colored_name(),
        '의 혀를 내밀고 거친 숨을 몰아쉬는 작은 입이 고스란히 드러났다.',
      ]);
      await era.printAndWait([
        '스스로 신음을 주체하지 못할까 봐 두려웠던 것인지, ',
        vp.get_colored_name(),
        '는 급히 아랫입술을 깨물었다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 손을 가볍게 두드렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 그녀를 놓아주자, ',
        vp.get_colored_name(),
        '는 마치 강아지처럼 바닥에 양손을 짚어 엎드렸고, 목에는 대단히 눈에 띄는 검은색 가죽 목줄이 채워져 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 개목줄을 팍 잡아당기자, ',
        vp.get_colored_name(),
        '의 상반신 전체가 억지로 치켜 세워졌다.',
      ]);
      await era.printAndWait([
        '숨이 막히는 고통은 ',
        vp.get_colored_name(),
        '의 뺨을 붉게 물들이고, 양손으로 목줄을 어떻게든 풀어보려 헛되이 손가락을 버둥거리게 만들었을 뿐만 아니라, 그녀가 느끼는 쾌감의 자극을 수직상승시켰다.',
      ]);
      set_palam_to_max(0, part_enum.sadism);
      set_palam_to_max(205, part_enum.masochism);
      await quick_make_love(
        new EroParticipant(0, part_enum.hit),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await era.printAndWait([
        vp.get_colored_name(),
        '는 두 다리를 파르르 떨었고, 음액과 섞인 정액이 줄줄 흘러내려 허벅지와 가랑이 사이를 완전히 적셔갔다……',
      ]);
      await era.printAndWait([
        '가학욕구가 충족된 ',
        me.get_colored_name(),
        '이(가) 목줄을 놓아주자, 녹초가 된 ',
        vp.get_colored_name(),
        '는 바닥에 무릎을 꿇은 채 거친 숨을 가쁘게 몰아쉬었다.',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 명령에 따라 작은 얼굴을 바닥에 대고, ',
        me.get_colored_name(),
        '을(를) 향해 엉덩이를 높이 쳐들더니 두 손가락으로 벌갛게 부어오른 음순을 벌려 ',
        me.get_colored_name(),
        '에게 방금 막 질내사정을 당한 자신의 보지를 과시하듯 보여주었다.',
      ]);
      await era.printAndWait([
        '정액이 바닥으로 한 방울씩 흘러내리는 모습을 보며, ',
        me.get_colored_name(),
        '은(는) 몹시 만족해했다.',
      ]);
      era.printButton('「영리한 강아지라면 다음엔 뭘 해야 할지 잘 알고 있겠지.」', 1);
      await era.input();
      await vp.say_and_wait('제 오나홀 보지에 당신의 고귀한 정액을 주입해 주세요❤️~');
      await era.printAndWait([
        '쪼아대는 듯한 가벼운 입맞춤과 함께, ',
        me.get_colored_name(),
        '의 성기가 다시금 애마를 유린하기 시작했다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      end_ero_and_train();
      era.println();
    }
    await sys_love_uma_in_event(205);
  }
};