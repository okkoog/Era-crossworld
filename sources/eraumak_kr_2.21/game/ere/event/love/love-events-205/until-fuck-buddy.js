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

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_breast_cup } = require('#/data/info-generator');

module.exports = class extends CustomizedLove {
  async 49(vp, me, callname, stage, extra_flag, event_object) {
    if (event_object.arg.length === 1) {
      await print_event_name('Un amour à taire(숨겨진 연정)', vp);
      era.println();
      await vp.print_and_wait([
        '어느 날 밤, ',
        vp.get_colored_name(),
        '는 기숙사에서 ',
        me.get_colored_name(),
        '과(와) 프랑스에서 함께 들었던 노래를 떠올렸다.',
      ]);
      const music = [
        '과거는 우리를 앞으로 이끌고, 더욱 깨어 있고 이성적이게 해.',
        '의심은 얼마나 위험하고 치명적인가, 반면 감정은 이토록 약하기 짝이 없지.',
        '희망이 가득하든, 운명에 맡기든 상관없어.',
        '모든 것은 하늘의 뜻이 있으니, 흐름에 맡기는 편이 나아.',
        '만남과 헤어짐의 희로애락은 우리가 공유하는 기억.',
        '사랑은 우리가 생각하는 것보다 훨씬 더 견고해.',
        '내 곁에 있을 때, 당신은 무엇을 했나요?',
        '시간은 신비로운 색채를 띠고.',
        '부드러운 저녁 바람이 천천히 스쳐 지나가네.',
        '사랑은 우리가 생각하는 것보다 훨씬 더 견고해.',
        '혹은 새장 속에서 즐겁게 살아가거나.',
        '우리가 없다면, 그들의 선택이 무슨 상관이 있을까?',
        '사랑은 우리보다 훨씬 강해……',
        '사람들은 이 정도면 충분할지 모른다고, 더 깊이 사랑하기 위해 그렇게 말하지.',
        '하지만 이것은 분명 우리의 사랑, 우리보다 훨씬 강한 사랑이야.',
        '우리가 함께라는 통행증이 있으니, 나는 이것으로 충분할 거라 믿어.',
        '우리는 냉정하게 말해야 해, 이 모든 것은 우리의 잘못이라고.',
        '사랑은 우리보다 훨씬 강해……',
      ];
      for (const c of music) {
        await era.printAndWait(`🎵${c}🎵`, {
          align: 'center',
          color: vp.color,
        });
      }
      era.println();
      era.printButton(
        `「나, 정말 단순한 프랑스 ${vp.get_child_sex_title()}였네……」 (관계 진전)`,
        1,
      );
      era.printButton('「쓸데없는 생각 말고 자야지, 안 그러면 스승님한테 혼날 거야.」 (관계 진전 보류)', 2);
      if ((await era.input()) === 1) {
        era.println();
        if (
          vp.sex_code === 0 &&
          (era.get('talent:205:처녀') === vp_status_enum.virgin ||
            era.get('talent:205:처녀') === vp_status_enum.dont_know) &&
          me.sex_code > 0
        ) {
          event_object.arg.push('lust');
          add_event(stage, event_object);
        } else {
          await sys_love_uma_in_event(205);
        }
      } else {
        era.set('cflag:205:호감거절', 49);
      }
    } else {
      await print_event_name('La fée(평범한 인간을 사랑한 요정)', vp);
      await era.printAndWait([
        '맑은 바람이 불어와 ',
        vp.get_colored_name(),
        `의 금발을 흩날리게 했고, ${vp.sex}의 피부는 눈처럼 밝게 빛났다.`,
      ]);
      await era.printAndWait('짙푸른 눈동자는 아름답고 매력적이었으며, 생기가 넘쳐흘렀다.');
      await era.printAndWait('촉촉하게 빛나는 입술은 투명에 가까운 아름다움을 띠고 있었다.');
      await era.printAndWait('외모에는 나이를 뛰어넘는 요염함이 있어, 한눈에 사람을 매료시키기에 충분했다.');
      await era.printAndWait(
        '매혹적인 색깔의 금발 숏컷은 두 개의 낮은 트윈테일로 묶여 정교한 윤기를 발했다.',
      );
      await era.printAndWait(
        '흰색 스타킹을 신은 소녀의 허벅지는 가냘프면서도 윤기가 흘렀고, 프랑스풍 학생 구두를 신은 모습은 무척이나 활기차 보였다.',
      );
      await era.printAndWait('하지만 정교하게 빚어낸 듯한 이목구비는 결코 평범한 사람이 쉽게 다가갈 수 없는 분위기를 풍겼다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '을(를) 향해 미소 지었고, ',
        me.get_colored_name(),
        '의 무례함에도 화를 내지 않는 듯했다.',
      ]);
      await era.printAndWait(
        `${vp.sex}는 원피스를 입고 있었다. 어깨끈이 목선에서 교차하여 목에 있는 하얀 레이스 초커와 이어져 있었다.`,
      );
      await era.printAndWait('상반신은 전체적으로 하얀색의 옷이 그녀의 양가슴을 감싸고 있었다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '의 허리는 매우 가늘었고, 파란색 가죽 벨트를 매고 있었다.',
      ]);
      await era.printAndWait('그리고 허리 아래로는 파란색 치마를 입고 있었다.');
      await era.printAndWait('치마 겉감은 보석 같은 파란색이었고, 이것이 위층이었다.');
      await era.printAndWait('아래층에는 흰색의 속치마가 있었는데, 이 역시 레이스와 프릴로 장식되어 있었다.');
      await era.printAndWait('치마는 길지 않아 허벅지 중간까지 올 정도였다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '의 다리는 매우 가늘었고, 다리에는 새하얀 니삭스—반투명한 것—를 신고 있었다.',
      ]);
      await era.printAndWait('양말과 치마 사이로 드러난 맨살 또한 각별히 매혹적이었다.');
      await era.printAndWait('오른쪽 다리에는 하얀색 가터링이 하나 더 있었다.');
      await era.printAndWait(
        '발에는 파란색 구두를 신고 있었으며, 발목에 여러 개의 하얀색 끈을 묶어 리본을 만들었다.',
      );
      era.printButton('「정말 예쁘네.」', 1);
      await era.input();
      await vp.say_and_wait('칭찬 감사합니다.');
      era.printButton('「하지만 프랑스엔 금발 벽안이 참 많아서……」', 1);
      await era.input();
      await vp.say_and_wait('제가 안 예쁜가요? 저를 보세요, 어서 저를 보시라고요!');
      await era.printAndWait([
        vp.get_colored_name(),
        '가 앞으로 다가와 상반신을 숙이고 고개를 치켜들었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        vp.get_colored_name(),
        '의 코끝이 불과 손가락 한마디도 안 되는 거리로 가까워졌다.',
      ]);
      await era.printAndWait([
        '고개를 숙이면, 이 시야에서는 마침 ',
        vp.get_colored_name(),
        '의 양가슴이 보였다.',
      ]);
      get_breast_cup(205) < 'D' &&
        (await era.printAndWait(`${vp.sex}의 가슴은 크지 않아, 대충 B와 C컵 사이의 아담한 가슴이었다.`));
      await era.printAndWait(`하지만 지금 ${vp.sex}가 앞으로 몸을 숙이자, 그 느낌이 확연히 달랐다.`);
      await era.printAndWait(
        '원피스에 감싸인 남반구와 목의 초커를 잇는 두 줄의 리본이 금방이라도 끊어질 듯 팽팽해졌다.',
      );
      me.sex_code === 1 &&
        (await era.printAndWait([
          '남녀 단둘이 있는데도, ',
          vp.sex,
          '는 ',
          me.get_colored_name(),
          '이(가) 선을 넘는 짓을 할 거라곤 겁내지 않는 모양이다.',
        ]));
      await era.printAndWait([
        me.get_colored_name(),
        `은(는) 눈앞의 ${vp.get_teen_sex_title()}를 바라보았다. `,
        me.get_colored_name(),
        '을(를) 만나려고 눈가에 특별히 바른 연지가 몹시 귀여웠다.',
      ]);
      await era.printAndWait([
        '옥에 티라면, 원피스를 입은 ',
        vp.get_colored_name(),
        '의 배꼽을 볼 수 없다는 점이었다.',
      ]);
      await era.printAndWait('하지만 신은 한쪽 문을 닫으면서 동시에 다른 창문을 열어두셨다.');
      await era.printAndWait([
        '——',
        vp.get_colored_name(),
        '의 옷에는 소매가 없었다.',
      ]);
      era.printButton('「겨드랑이 좀 만져봐도 될까?」', 1);
      await era.input();
      await vp.say_and_wait('Non, Trousseur de jupons(안 돼요, 이 난봉꾼아).');
      era.printButton('「무슨 말인지 모르겠으니까 만질게.」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 번개처럼 빠른 속도로 두 손을 뻗어 ',
        vp.get_colored_name(),
        '의 양 겨드랑이를 기습했다.',
      ]);
      await vp.say_and_wait('아앗! 하하핫……');
      await era.printAndWait([
        vp.get_colored_name(),
        '는 양손을 빠르게 내려 겨드랑이를 꽉 조였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 손가락을 꽉 끼운 채로 웃음을 터뜨렸다.',
      ]);
      await era.printAndWait('때로는 고개를 젖히고, 때로는 몸을 숙이려 했다.');
      await era.printAndWait('어린 포니의 겨드랑이는 갓 만든 두부처럼 무척이나 보드라웠다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        ' 때문에 진퇴양난에 빠져, 왼쪽으로든 오른쪽으로든 어쩔 방도가 없이 양겨드랑이를 꽉 붙잡혀 버렸다.',
      ]);
      await era.printAndWait([
        '등은 이미 벽에 닿아 있었고, 앞에는 원흉인 ',
        me.get_colored_name(),
        '의 품이 있었다.',
      ]);
      await vp.say_and_wait([
        `${sys_get_callname(205, 0)}, 안 돼…… 하하핫…… 그, 그만해요!`,
      ]);
      await vp.say_and_wait([
        '제, 제발 부탁할게요…… 하하하핫…… ',
        vp.get_colored_name(),
        '가 부탁할 테니까요.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 장난은 더욱 맹렬해졌고, 급기야 ',
        vp.get_colored_name(),
        '가 크게 웃다가 제 침에 사레들릴 정도가 되었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 돌려 기침을 두어 번 하는 ',
        vp.get_colored_name(),
        '를 놓아주었다.',
      ]);
      era.printButton('「가터링은 어쩌다 찬 거야?」', 1);
      await era.input();
      await vp.say_and_wait('네? 예쁘잖아요.');
      era.printButton('「이게 무슨 뜻인지 알아?」', 1);
      await era.input();
      await vp.say_and_wait('몰라요.');
      await era.printAndWait('그녀는 고개를 가볍게 저었고, 짧은 머리카락이 나부꼈다.');
      era.printButton('「그건 남자를 유혹한다는 뜻이야.」', 1);
      era.printButton(
        '「어떤 곳에선 창녀가 옷을 벗고 남자와 잔 다음, 받은 돈을 가터링에 끼워두곤 하거든.」',
        2,
      );
      await era.input();
      await vp.say_and_wait('그, 그럼 뺄게요……');
      era.printButton('「앞으로는 다른 사람 앞에서는 차지 마.」', 1);
      era.printButton('「내 앞에서는 꼭 차고 있어.」', 2);
      await era.input();
      await vp.say_and_wait('알았어요. 하지만 왜요?');
      era.printButton('「내 눈에 넌 앙큼한 계집애, salope니까.」', 1);
      era.printButton('「사람들 앞에서는 활발하고 귀여운 공주님이, 한밤중엔 남자와 엮여서……」', 2);
      let ret = await era.input();
      await vp.say_and_wait(
        ret === 1 ? '으윽…… 그렇게 심한 말 하지 마세요……' : '아니, 제가 먼저 다가간 건 아니잖아요……',
      );
      era.print(['흐느끼며 울음 터질 듯한 어린 서양 우마무스메를 보며, ', me.get_colored_name(), '은(는)……']);
      era.printButton('가슴을 주무른다', 1);
      era.printButton('다리를 만진다', 2);
      ret = await era.input();
      begin_and_init_ero(0, 205);
      if (ret === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          vp.get_colored_name(),
          '에게 구두를 벗고 침대 위로 올라가 다리를 적당히 벌리고 무릎을 꿇으라고 했다.',
        ]);
        await era.printAndWait([
          `${vp.get_teen_sex_title()}는 매끄럽게 자리를 잡고 앉았고, 파란 치맛자락이 작은 원형으로 펼쳐졌다.`,
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          vp.get_colored_name(),
          '의 뒤로 다가갔다. 매끄럽고 흰 등허리가 무척 예뻤다.',
        ]);
        await era.printAndWait(['양손에 힘을 꽉 주고는, 그녀의 몸 양옆을 짚었다.']);
        await era.printAndWait([
          '마음의 준비를 마친 ',
          vp.get_colored_name(),
          '는 반항하지 않고, ',
          me.get_colored_name(),
          '이(가) 마음대로 하도록 내버려 두었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          vp.get_colored_name(),
          '의 양가슴을 마치 요리 재료의 무게를 재듯 움켜쥐었다.',
        ]);
        await era.printAndWait([
          '이어서 뒤죽박죽으로 주물렀다. 그 손놀림은 대략 『가볍게 모았다가 천천히 비비고 문지르다가 다시 튕겨내는』 식이었다.',
        ]);
        await era.printAndWait([
          vp.get_colored_name(),
          '는 고개를 숙이지 않아도 자신의 양가슴이 드러났음을 알고 있었다.',
        ]);
        await era.printAndWait(['원을 그리듯 문지르고, 퉁기고, 누르고……']);
        await era.printAndWait([
          vp.get_colored_name(),
          '는 유륜에서 끊임없이 밀려오는 쾌감을 느끼면서도 자신의 자세를 유지했다.',
        ]);
        await era.printAndWait([
          `${vp.sex}는 그제야 자신이 무의식중에 두 팔을 뒤로 올려 `,
          me.get_colored_name(),
          '의 머리를 감싸 안고 있다는 걸 깨달았다. 마치 항복하는 듯한 자세였다.',
        ]);
        await era.printAndWait([
          '반면 ',
          me.get_colored_name(),
          '은(는) 입꼬리를 올리며 무척 짓궂은 표정을 짓고 있었다.',
        ]);
        await vp.say_and_wait('아앗, 싫어……');
        await era.printAndWait([
          vp.get_colored_name(),
          '는 가볍게 신음을 내뱉었고, 두 눈에는 이미 연모의 빛이 떠올라 있었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 가볍게 건드리기만 해도, ',
          vp.get_colored_name(),
          '는 뒷머리까지 쾌감이 치솟는 듯했다.',
        ]);
        era.printButton('「자, 가슴 펴고, 배 집어넣고.」', 1);
        await era.input();
        await era.printAndWait([
          vp.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 손길에 맞춰 차근차근 자세를 바로잡았다.',
        ]);
        await era.printAndWait(`심호흡을 한 번 하자, ${vp.sex}의 복부가 한결 쏙 들어갔다.`);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          vp.get_colored_name(),
          '의 허리를 더듬어 벨트 위치를 확인하고는 가볍게 당겼다.',
        ]);
        await era.printAndWait(['*철컥철컥*']);
        await era.printAndWait(`하얀 가죽 벨트가 조여들어, ${vp.sex}의 허리에 바짝 밀착되었다.`);
        await vp.say_and_wait('너무 꽉 조여요……');
        era.printButton('「좀 조여야 꼿꼿해지잖아.」', 1);
        await era.input();
        await era.printAndWait([
          vp.get_colored_name(),
          '는 허리를 조이자 가슴이 더욱 도드라져 보였다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          `은(는) 뒤에서 ${vp.sex}를 껴안고 양손을 교차하여 두 마리의 흰 토끼를 움켜쥐었다.`,
        ]);
        era.printButton('「정말 촉촉하네.」', 1);
        era.printButton(`「${vp.name}는 이렇게 마음대로 가슴을 주물러지는 건 처음이지?」`, 2);
        ret = await era.input();
        await vp.say_and_wait(ret === 1 ? '대체 그게 무슨 표현이에요!' : '……네.');
        await era.printAndWait([
          '봉긋하게 솟아오른 양가슴은 ',
          me.get_colored_name(),
          '의 손에 잡혀 갖가지 모양으로 변했다.',
        ]);
        await era.printAndWait('마치 물풍선처럼 부드러웠다.');
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(205, part_enum.breast),
          false,
        );
      } else {
        era.printButton('「그걸론 부족해, 허벅지 살이 눌려야 더 숙녀답지.」', 1);
        await era.input();
        await vp.say_and_wait('살이 눌려요?');
        await era.printAndWait([
          vp.get_colored_name(),
          '가 미처 반응하기도 전에, ',
          me.get_colored_name(),
          '은(는) 그녀의 가터링 벨트 버클을 당겼다.',
        ]);
        await vp.say_and_wait('다리는…… 안 돼요……');
        await era.printAndWait([
          '아까 겨드랑이를 기습했을 때, ',
          me.get_colored_name(),
          '은(는) 그녀가 간지럼을 잘 탄다는 걸 알아챘다.',
        ]);
        await era.printAndWait('지금도 양다리를 오들오들 떨며 온몸을 부르르 떨고 있었다.');
        await vp.say_and_wait('빨리 그만둬요!');
        await vp.say_and_wait(
          `${sys_get_callname(205, 0)}…… 빨리 멈추라고요, 이 바보야!`,
        );
        era.printButton(
          `「${sys_get_callname(0, 205)}는 남을 욕할 때도 이렇게 다정하네? 참 다루기 쉽단 말이야.」`,
          1,
        );
        await era.input();
        await vp.say_and_wait('허벅지 안쪽은 만지지 마요! 얼른 그만둬요……');
        await era.printAndWait([
          vp.get_colored_name(),
          '는 아랫입술을 깨물었고, 흔들림에 예쁜 가슴이 위아래로 출렁였다.',
        ]);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(205, part_enum.body),
          false,
        );
      }
      era.printButton('「내가 듣기 좋아하는 말을 해봐.」', 1);
      era.printButton('「듣기 좋은 말 좀 해볼래?」', 2);
      await era.input();
      await vp.say_and_wait('……');
      await vp.say_and_wait(
        `${sys_get_callname(205, 0)}…… ${me.actual_name}…… 좋아해요……`,
      );
      await vp.say_and_wait(`전 ${sys_get_callname(205, 0)}의 담당이 정말 부러워요……`);
      await vp.say_and_wait(`${vp.name}는 ${me.actual_name}만 보면 다리에 힘이 풀려요……`);
      era.printButton('「그걸론 안 되겠는데.」', 1);
      era.printButton('「너 스스로는 어떤데?」', 2);
      ret = await era.input();
      if (ret === 1) {
        await vp.say_and_wait('아아아아……');
        await vp.say_and_wait(`${me.actual_name}은(는) 모두가 우러러보는 트레이너예요!`);
        await vp.say_and_wait(`${vp.name}는 기꺼이 ${me.actual_name}의 발밑에 엎드릴게요……`);
      } else {
        await vp.say_and_wait(`${vp.name}, ${vp.name} 는 정말 바보에요!`);
        await vp.say_and_wait(
          `저는…… ${sys_get_callname(205, 0)}만 보면 발정해서, 머릿속이 엉망진창이 돼버려요……`,
        );
      }
      era.printButton(`「${sys_get_callname(0, 205)}의 쉬하는 곳을 보고 싶어.」`, 1);
      await era.input();
      await vp.say_and_wait('변태!');
      era.printButton('「누가 변태라는 거야?」', 1);
      await era.input();
      await era.printAndWait([vp.get_colored_name(), '는 잔뜩 억울한 얼굴로 입술을 삐죽였다.']);
      await vp.say_and_wait(`${vp.name}가 변태예요.`);
      era.drawLine();
      await era.printAndWait([
        '팬티를 벗은 ',
        vp.get_colored_name(),
        '가 침대에 누웠다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 요구대로 양다리를 몸 옆으로 넓게 벌리고 무릎을 접었다.',
      ]);
      await era.printAndWait(
        '발뒤꿈치를 허벅지 안쪽에 바짝 붙이고, 발바닥을 꼿꼿이 세워 힘을 풀지 못하게 했다.',
      );
      await era.printAndWait([
        vp.get_colored_name(),
        '의 은밀한 곳이 완전히 개방되어 ',
        me.get_colored_name(),
        '을(를) 향해 드러났다.',
      ]);
      await era.printAndWait(
        '전복 같은 그곳은 성긴 금발 아래에 가려져 있었고, 분홍빛 입술이 호흡에 맞춰 벌어졌다 닫히기를 반복했다.',
      );
      await era.printAndWait([
        vp.get_colored_name(),
        '는 스스로 손을 베개 아래에 받친 채, 아무런 저항도 하지 않았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 고개를 파묻자, 십몇 센티미터 떨어진 곳에서도 우마무스메의 『발정기』 냄새를 맡을 수 있었다.',
      ]);
      await era.printAndWait('은은하면서도 약간 비릿하고, 소녀의 향기가 섞인 냄새였다.');
      await era.printAndWait('두툼한 대음순 사이의 틈새에는 더욱 촉촉하고 여린 소음순이 자리 잡고 있었다.');
      await era.printAndWait('얇은 가장자리가 가까이서 볼수록 무척이나 유혹적이었다.');
      await vp.say_and_wait('아앗…… 싫어요……');
      await era.printAndWait('그녀는 숨이 찬 듯 가쁘게 호흡했다.');
      era.printButton(`리듬감 있게 ${vp.name}의 음순을 핥는다.`, 1);
      await era.input();
      await era.printAndWait([
        '옅은 짠맛이 ',
        me.get_colored_name(),
        '의 혀끝에 퍼졌지만, 이것만으로는 부족했다.',
      ]);
      era.printButton(`${vp.name}의 음순을 양옆으로 벌린다.`, 1);
      await era.input();
      await vp.say_and_wait('안 돼……');
      await era.printAndWait([
        me.get_colored_name(),
        '의 눈앞에 드러난 것은 한층 더 붉고 부드러운 속살이었다.',
      ]);
      await era.printAndWait('그 위에는 애액이 촉촉하게 맺혀 있어 지극히 아름다워 보였다.');
      await vp.say_and_wait(`저 아직…… 처녀예요…… ${me.actual_name}, 아직……`);
      era.printButton('「알았어, 지금 당장은 넣지 않을게.」', 1);
      await era.input();
      await vp.say_and_wait('네.');
      await era.printAndWait([
        vp.get_colored_name(),
        '의 소음순이 온전히 ',
        me.get_colored_name(),
        '의 혀에 의해 밀려났다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 곧바로 음핵 포피 아래에 볼록 솟아오른 살덩이를 입에 머금고 강하게 빨기 시작했다.',
      ]);
      await era.printAndWait([
        '순식간에 그 주변 살점 전체가 통째로 ',
        me.get_colored_name(),
        '의 두 입술 사이로 빨려 들어갔다.',
      ]);
      await era.printAndWait('음핵은 더 이상 도망갈 곳 없이 동그랗게 부풀어 올랐다.');
      await vp.say_and_wait('안 되겠어요…… 제발 빨지 마요오오오오……');
      await vp.say_and_wait('아기, 아직 낳아줄 수 없어요……');
      await era.printAndWait([
        '거듭된 애무에 ',
        vp.get_colored_name(),
        '의 얼굴엔 땀방울이 송글송글 맺혔다.',
      ]);
      await era.printAndWait([
        '그때 ',
        me.get_colored_name(),
        '이(가) 다시금 그녀의 질구를 여러 번 쓸고 지나갔다.',
      ]);
      await era.printAndWait('닿기만 하고 들어오지는 않는 애타는 감각에 소녀는 황홀감에 몸부림쳤다.');
      await vp.say_and_wait('싫어…… 안 돼요……');
      await vp.say_and_wait('빨리 그만해줘요……');
      await vp.say_and_wait('가, 가버릴 것 같아요…… 가요!');
      await vp.say_and_wait('내일 스승님도 뵈어야 하는데……');
      await era.printAndWait([
        vp.get_colored_name(),
        '는 두서없이 말을 쏟아냈고, 마침내.',
      ]);
      await era.printAndWait(
        '——여린 입구에서 뽀얀 애액이 흘러나오더니, 곧이어 몇 줄기가 왈칵 뿜어져 나왔다.',
      );
      await era.printAndWait('그녀는 베개 아래에 두었던 손을 빼내어 제 얼굴을 가렸다.');
      await vp.say_and_wait(`${sys_get_callname(205, 0)} 미워요!`);
      era.printButton('「나도 슬슬 못 참겠어, 일단 일어나 봐.」', 1);
      await era.input();
      await era.printAndWait([
        vp.get_colored_name(),
        '가 느릿느릿 몸을 일으키자, 이미 발기해버린 육봉 하나가 눈에 들어왔다.',
      ]);
      era.printButton('「방금 네 걸 봤으니까, 너도 내 걸 좀 봐.」', 1);
      await era.input();
      await vp.say_and_wait('볼 게 뭐가 있다고요.');
      era.drawLine();
      await vp.say_and_wait(
        `……미안해요, ${me.actual_name}의 고추…… 너, 너무 크고 굵어서, ${vp.name}, 좋아졌어요……`,
      );
      await era.printAndWait([
        vp.get_colored_name(),
        '가 바닥으로 기어 내려와 무릎을 꿇었다. 융단이 깔려 있어 무릎이 아프진 않았다.',
      ]);
      await vp.say_and_wait('조금 냄새나요……');
      await era.printAndWait([vp.get_colored_name(), '가 솔직한 감상을 내뱉었다.']);
      era.printButton('「좋아?」', 1);
      await era.input();
      await era.printAndWait([vp.get_colored_name(), '는 아무 말도 하지 않았다.']);
      era.printButton('「좋다는 뜻이구나.」', 1);
      await era.input();
      await vp.say_and_wait('아니거든요!');
      await era.printAndWait([
        '그녀의 말이 끝나기가 무섭게, ',
        me.get_colored_name(),
        '은(는) 육봉을 그녀의 코끝에 바짝 가져다 댔다.',
      ]);
      await era.printAndWait(['——정확히는 인중, 윗입술 위의 골짜기였다.']);
      await era.printAndWait(['귀두가 그녀의 콧구멍 두 개를 완전히 막아 숨길을 차단했다.']);
      await era.printAndWait([
        vp.get_colored_name(),
        '는 숨을 들이마실 때마다 억지로 ',
        me.get_colored_name(),
        '의 냄새를 음미해야만 했다.',
      ]);
      era.printButton('「스승님한테 듣기로는 네가 노래를 아주 잘 부른다던데.」', 1);
      await era.input();
      await vp.say_and_wait('노래요?');
      era.printButton('「파리 트레센 교가로 해볼까.」', 1);
      await era.input();
      await era.printAndWait([
        vp.get_colored_name(),
        '는 그대로 무릎을 꿇은 채 코를 육봉에 막히고 교가를 불러야만 했다.',
      ]);
      await era.printAndWait([
        '가까스로 노래를 끝마쳤을 무렵, ',
        me.get_colored_name(),
        '의 수컷 냄새가 이미 그녀의 비강 깊숙이 침투해 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 숙여 ',
        vp.get_colored_name(),
        '를 내려다보았다.',
      ]);
      await era.printAndWait('양 볼은 티 없이 하얗고 매끄러웠다.');
      await era.printAndWait(
        '보석처럼 푸른 눈동자 곁에 화장기까지 더해져 밤의 어스름 속에서 매혹적으로 빛났다.',
      );
      await era.printAndWait('화려한 금빛 단발머리를 지닌, 그야말로 진짜 공주님이었다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 노골적인 시선에 부끄러워하며 어쩔 수 없이 혀를 내밀었다.',
      ]);
      await era.printAndWait([
        '그녀의 혀는 ',
        me.get_colored_name(),
        '보다 훨씬 뾰족하고 가늘며 부드러웠다. 단숨에 ',
        me.get_colored_name(),
        '의 요도구를 핥아 올렸다.',
      ]);
      await era.printAndWait([
        '한바탕 혀로 핥은 후에도 ',
        vp.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 반응이 없자 귀두를 머금고는 빨아당겼다.',
      ]);
      await era.printAndWait('비릿한 냄새가 입안으로 퍼지며 치아 틈새까지 파고들었다.');
      await era.printAndWait([
        '혀로 핥을 때마다 ',
        vp.get_colored_name(),
        '는 수치심에 몸둘 바를 몰랐다.',
      ]);
      await era.printAndWait([
        '결국 인내심이 바닥난 ',
        me.get_colored_name(),
        '은(는) 양손으로 ',
        vp.get_colored_name(),
        '의 머리를 붙잡고 그녀의 입안을 거칠게 피스톤질하기 시작했다.',
      ]);
      await vp.say_and_wait('읍…… 우우웁……', true);
      await vp.say_and_wait('너무 괴로워……', true);
      await vp.say_and_wait(
        '냄새나! 너무 역겨워. 입천장에 자꾸 닿아! 혀뿌리 쪽은, 견딜 수 없어…… 토할 것 같아…… 토할 것 같아.',
        true,
      );
      await era.printAndWait([
        '힘껏 허리를 찌를 때마다, ',
        me.get_colored_name(),
        '은(는) 귀두를 그녀의 구강 가장 깊숙한 곳까지 처박았다.',
      ]);
      await era.printAndWait(['——연구개와 혀뿌리 사이 공간까지.']);
      await era.printAndWait([
        '혀뿌리의 돌기가 자극을 더해 ',
        me.get_colored_name(),
        '의 귀두에 맹렬한 쾌감을 안겨주었다.',
      ]);
      await era.printAndWait([
        '애석하게도 ',
        vp.get_colored_name(),
        '는 이 펠라치오 속에서 굴욕적으로 인내할 수밖에 없었다.',
      ]);
      era.printButton('참을 수 없어.', 1);
      era.printButton('입 안에 싼다.', 2);
      await era.input();
      await era.printAndWait([
        vp.get_colored_name(),
        '는 입안을 가득 채운 남근의 떨림을 눈치채고 무언가 말하려 했지만, 소리가 나오지 않았다.',
      ]);
      await era.printAndWait(
        '혀뿌리가 틀어막힌 채, 뜨겁고 비릿한 액체가 입안 가장 깊은 곳에 거세게 뿌려졌다.',
      );
      await era.printAndWait('끈적거리는 정액이 마치 그녀의 식도를 틀어막을 것만 같았다.');
      await era.printAndWait([
        vp.get_colored_name(),
        '가 본능적으로 눈자위를 뒤집으며 괴로워했고, ',
        me.get_colored_name(),
        '의 육봉이 빠져나가자 정액 몇 방울이 융단 위로 뚝뚝 떨어졌다.',
      ]);
      await era.printAndWait([vp.get_colored_name(), '는 입을 틀어막은 채 황급히 기어올라왔다.']);
      await era.printAndWait(
        '입가에 흘러넘친 정액이 그녀의 하얀 실크 장갑을 더럽히고 있었다.',
      );
      await vp.say_and_wait('꿀꺽…… 으음, 웁.');
      await era.printAndWait([vp.get_colored_name(), '는 고개를 푹 숙인 채 목울대를 넘겼다.']);
      await era.printAndWait([
        '하얀 정액이 목구멍을 타고 조금씩 삼켜지는 감각은, ',
        me.get_colored_name(),
        '에게 입안 사정을 당했을 때보다 한층 더 혐오스러웠다.',
      ]);
      await era.printAndWait('그녀의 가지런하고 새하얀 치아에도 빠짐없이 정액이 달라붙어 있었다.');
      await era.printAndWait('어떤 정액들은 위아래 치아 사이에 엉겨 붙어 그녀의 입안에서 끈적한 실을 그렸다.');
      await vp.say_and_wait('하아…… gros nigaud(완전 바보)!');
      era.printButton('「정말 미안.」', 1);
      await era.input();
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(205, part_enum.masochism),
        false,
      );
      set_palam_to_max(205, part_enum.clitoris);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      end_ero_and_train();
      era.println();
      await sys_love_uma_in_event(205);
    }
  }
};