const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const Love85UntilWife = require('#/event/love/love-events-85/until-wife');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love85UntilWife {
  async 99(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[99](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('의존', ruby);
    await ruby.say_and_wait('외로워요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 솔직하게 심정을 털어놓았다. ',
      me.get_colored_name(),
      '이(가) 거절하지도, 무시하지도 않는 것을 보며 가만히 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    era.printButton('팔을 벌린다.', 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 동작을 따라 하듯 두 팔을 벌리더니……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '을(를) 덮어누르듯이 안겨 왔다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 당황하며 담당 우마무스메를 받아안았다. 의자가 쓸리는 소리와 함께, 소녀의 향기가 코끝을 찔렀다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '를 꼭 끌어안았다.',
    ]);
    await ruby.say_and_wait('외로워요, 모처럼의 휴일인 오늘도 당신은 하루 종일 일만 하시고.');
    era.printButton('「미안해.」', 1);
    await era.input();
    await ruby.say_and_wait('사과보다는, 더 먼저 해야 할 일이 있지 않나요?');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 무릎 위에 앉아, ',
      me.get_colored_name(),
      '의 얼굴을 지긋이 응시했다.',
    ]);
    await era.printAndWait([
      '조금 앞으로 다가온 그녀의 입술 위로 ',
      me.get_colored_name(),
      '의 입술이 겹쳐졌다.',
    ]);
    await era.printAndWait('커피 맛이 나는 키스. 분명 블랙커피인데도, 입맞춤은 감미롭기 그지없었다.');
    await ruby.say_and_wait('어머님께서 하루라도 빨리 손주를 보고 싶다고 하셨어요.');
    era.printButton('「그럼, 오늘 밤이 기대되는걸.」', 1);
    era.printButton(`${m_call_r}를 안는다.`, 2, {
      disabled: era.get('relation:85:0') <= 525,
    });
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('...부디 일에 정진해 주세요.');
      await era.printAndWait([
        '일에 파묻힌, ',
        me.get_colored_name(),
        '의 비통한 부르짖음을 무시한 채, ',
        ruby.get_colored_name(),
        '는 냉정하게 방 문을 닫아버렸다.',
      ]);
      await era.printAndWait([
        '그녀를 선택한 것은 ',
        me.get_colored_name(),
        ', ',
        me.get_colored_name(),
        '을(를) 선택한 것은 그녀. 이것이 바로 ',
        me.get_couple_title(),
        '에게 있어 가장 행복한 형태일지도 모른다.',
      ]);
      await quick_into_sex(85, 85, true);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 문득, 품 안의 ',
        ruby.get_colored_name(),
        '가 말할 수 없이 요염해졌다고 느꼈다.',
      ]);
      await era.printAndWait(
        '소녀의 달콤한 매력과는 다른, 어엿한 한 명의 여성이자 아내가 된 이의 숙성된 매력이었다.',
      );
      await ruby.say_and_wait('제 얼굴에 뭐라도 묻었나요?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 대답 대신 담당 우마무스메의 부드럽고 풍만한 살결을 그대로 움켜쥐었다.',
      ]);
      await era.printAndWait([
        '자비 없이 부드러운 가슴을 쥐어짜며 주물러대도, ',
        ruby.get_colored_name(),
        '는 개의치 않았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 행동을 용인하며, 교태 섞인 신음을 흘렸다.',
      ]);
      await ruby.say_and_wait('응…… 좋아요…… 어떻게 주무르시든 다 괜찮아요……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 바라보았다. 아름다운 눈동자는 이미 쾌감으로 흐려져 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 황홀해하는 모습을 보며 힘을 살짝 뺐다.',
      ]);
      await era.printAndWait('하지만 여전히 담당 우마무스메의 앙증맞은 유방에 빠져들어 쉴 새 없이 주무르고 문질러댔다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 향기로운 혀를 내밀어 ',
        me.get_colored_name(),
        '의 입가를 살짝 핥았다.',
      ]);
      await ruby.say_and_wait('괜찮아요, 조금 거칠게 하셔도…… 왜 옷 안으로 손을 넣어서 만져주지 않으시나요?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀의 앵두 같은 입술에 다시 한번 입을 맞추고는, 윗옷을 걷어 올려 마침내 그녀의 뽀얀 가슴을 부드럽게 움켜쥐었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 유두는 이미 딱딱하게 서 있었고, 사랑스러운 유륜 주변까지 작은 돌기들이 돋아나 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 담당 우마무스메의 변화를 뼈저리게 실감했다. 처음에는 겨우 이런 애무만으로 이토록 흥분하는 아이가 아니었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 풍만한 엉덩이가 뒤로 쑥 밀려들며, ',
        me.get_colored_name(),
        '의 발기한 성기를 강하게 압박했다.',
      ]);
      await era.printAndWait([
        '그녀는 다시 작은 혀로 ',
        me.get_colored_name(),
        '의 턱을 간지럽히며 요염한 눈빛을 보냈다.',
      ]);
      await ruby.say_and_wait('여기서 저를 임신시켜 주실 건가요?');
      await era.printAndWait([
        '교복 스커트는 그리 길지 않아서, ',
        me.get_colored_name(),
        '에게 가슴을 유린당하는 동안 이미 엉덩이 위까지 말려 올라가 있었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 엉덩이를 감싸고 있는 것은, 뜻밖에도 섹시한 티팬티였다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 자신의 작은 속옷을 옆으로 밀어 젖히며, ',
        me.get_colored_name(),
        '의 성기를 풍만한 둔부 골짜기 사이에 끼워 넣었다.',
      ]);
      await era.printAndWait([
        '그녀의 부드러운 엉덩이 살이 ',
        me.get_colored_name(),
        '의 이성을 마구 흔들어 놓았다.',
      ]);
      await ruby.say_and_wait('보지…… 아니면, 뒷구멍?');
      await ruby.say_and_wait('어디든 다 괜찮아요……');
      era.printButton('「죽을 정도로 박겠어.」', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 품 안에서 가냘픈 몸을 더욱 격렬하게 비틀었다.',
      ]);
      await ruby.say_and_wait('여보의 커다란 자지로, 제가 죽을 정도로 박아주세요……');
      era.printButton(`「${m_call_r}, 영원히 사랑해.」`, 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 귀를 간지럽히듯 속삭이자, 그녀는 만족스러운 듯 격렬하게 입을 맞추어 왔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 열정적으로 ',
        me.get_colored_name(),
        '에게 키스하며, ',
        me.get_colored_name(),
        '의 혀를 자신의 작은 입안으로 삼키고는 ',
        me.get_colored_name(),
        '의 타액을 갈구하듯 빨아들였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 양손은 여전히 그녀의 가슴을 주무르고 있었고, 성기는 ',
        ruby.get_colored_name(),
        '의 비부를 단단히 압박하고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 몸을 뒤집어 ',
        ruby.get_colored_name(),
        '의 사랑스러운 몸을 아래에 깔고 압박했다.',
      ]);
      await era.printAndWait('몸 아래에 깔린 담당 우마무스메는 눈가가 촉촉해진 채, 뜨거운 숨을 토해내고 있었다.');
      await ruby.say_and_wait(
        '제 사랑, 박아줘요, 당신의 자지로 절 죽을 정도로 찔러주세요. 당신을 원해요, 전 영원히 당신의 것이니까……',
      );
      await era.printAndWait([
        '진심 어린 고백은 ',
        me.get_colored_name(),
        '(으)로 하여금 ',
        ruby.get_colored_name(),
        '가 평소에 가졌던 단정한 자태를 까맣게 잊게 만들었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀의 가냘프고 아름다운 두 다리를 M자 형태로 벌린 뒤, 성기를 들이밀었다.',
      ]);
      await era.printAndWait('푸슉.');
      await era.printAndWait([
        '성기가 ',
        ruby.get_colored_name(),
        '의 애액으로 젖어 끈적이는 질 내부로 미끄러져 들어갔다.',
      ]);
      await era.printAndWait(
        '그녀의 입에서 가느다란 신음이 터져 나왔고, 화사한 얼굴에는 황홀함과 만족감으로 가득 찬 미소가 띄워졌다.',
      );
      begin_and_init_ero(0, 85);
      era.set(
        'palam:85:질구쾌감',
        Math.ceil(era.get('tcvar:85:질구쾌감상한') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      era.set(
        'palam:0:음경쾌감',
        Math.ceil(era.get('tcvar:0:음경쾌감상한') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      await print_ero_page(85);
      await end_ero_and_show_result();
      era.drawLine();
      await era.printAndWait([
        '이날, ',
        me.get_colored_name(),
        '은(는) 담당 우마무스메를 끊임없이 절정에 이르게 만들었고, 그녀가 정신을 잃기 직전이 되어서야 정액을 세차게 뿜어냈다.',
      ]);
      await era.printAndWait([
        '정신을 차린 ',
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '을(를) 침대 위로 밀어눕히고는, 입술로 ',
        me.get_colored_name(),
        '의 온몸 구석구석에 키스를 남겼다.',
      ]);
      await era.printAndWait([
        '깊은 밤, ',
        me.get_couple_title(),
        '은 정사를 끝마쳤음에도 샤워하러 가지 않았다.',
      ]);
      await era.printAndWait([
        '침대 가득 번진 끈적한 애액과 정액에 개의치 않고, ',
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 서로를 꼭 껴안은 채 깊은 잠에 빠져들었다.',
      ]);
    }
    await sys_love_uma_in_event(85);
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async clinic(ruby, me, r_call_m) {
    await print_event_name('보건실', ruby);
    await ruby.say_and_wait([
      r_call_m,
      '……루비, 여기가 좋지 않아요…… 루비의 몸을 한 번 진찰해 주시지 않겠어요……',
    ]);
    await ruby.say_and_wait([
      '하아…… ',
      r_call_m,
      '…… 어떻게 이러실 수가…… 우린 아직 학원에 있는걸요…… 누가 보면 어쩌려고…… 아…… 안 돼요…… 스타킹이 찢어져 버리잖아요……',
    ]);
    await ruby.say_and_wait('안 돼요…… 조금 있으면 보건 선생님이 검사하러 오실 텐데…… 하아…… 왜라뇨……');
    await ruby.say_and_wait('루비가 바로 환자인걸요…… 읏…… 잠시만요…… 하아…… 아윽……');
    await ruby.say_and_wait('루비는 음란한 아이가 아니에요…… 절대 아니란 말이에요…… 이건 정상적인 신체 반응일 뿐……');
    await ruby.say_and_wait('이 끈적한 물이 뭔지…… 루비는 몰라요……');
    await ruby.say_and_wait([
      '루비를 제발 놓아주세요…… 오늘…… 하아…… 어쩌다 ',
      r_call_m,
      '에게 진료실 침대 위로 짓눌리게 된 건지……',
    ]);
    await ruby.say_and_wait(
      '으음…… 너무 크고…… 뜨겁고…… 굵어요…… 아…… 이게 대체 뭐죠…… 안 돼요…… 너무 커서…… 찢어져 버릴 것만 같아……',
    );
    await ruby.say_and_wait([r_call_m, '…… 옷은 벗기지 말아 주세요…… 흑흑…… 루비가 잘못했어요……']);
    await ruby.say_and_wait('루비의 엉덩이를 때리지 마세요…… 하아…… 멈춰주세요…… 안 된대도요……');
    await ruby.say_and_wait('아…… 매를 맞을 때마다 기분이 이상해져요……');
    await ruby.say_and_wait(
      '그럴 리가 없잖아요…… 엉덩이를 맞는다고 어떻게 애액이 사방으로 튈 수가 있겠어요…… 그건…… 루비가 그저 오늘 물을 너무 많이 마셨을 뿐이라서……',
    );
    await ruby.say_and_wait(
      '정말이에요…… 아아아앙…… 또 루비의 엉덩이를 때리시다니…… 루비 엉덩이가 온통 빨개져 버렸잖아요…… 이제 안 돼요…… 그곳이 너무 간지러워요…… 으음……',
    );
    await ruby.say_and_wait(
      '어떻게 이런…… 하아…… 키스하면 안 되는 건데…… 읏…… 온몸에 힘이 다 풀려버리는 것 같아…… 하아…… 조금 원하게 되어버렸을지도……',
    );
    await ruby.say_and_wait(
      '안 돼요…… 루비는 그런 음란한 아이가…… 아앗…… 들어와 버렸어…… 아파…… 너무 아파요…… 살살 해주세요…… 너무 커서…… 진짜로 망가져 버릴 것 같아요……',
    );
    await ruby.say_and_wait('우우우…… 커다란 귀두가 쑤시고 들어오니까 너무 기분 좋아져 버렸어요……');
    await ruby.say_and_wait([
      '만약 루비가 이대로 가 버리면…… 루비는 정말로 커다란 자지를 가진 ',
      r_call_m,
      '의 성노예가 되어버리는 걸까요……',
    ]);
    await ruby.say_and_wait(
      '하아…… 무슨 말씀이세요…… 말도 안 돼요…… 루비에게 어떻게 그런 이상한 성벽이 있을 수가 있겠어요…… 커다란 자지를 숭배한다니…… 그럴 리가 없잖아요……',
    );
    await ruby.say_and_wait('하아…… 너무 크고…… 가득 차서 터질 것 같아요…… 천천히 다시 박아주세요…… 너무 만족스러워요…… 하아……');
    await ruby.say_and_wait(
      '조금씩 쑤셔 박히는…… 이 느낌 너무 이상해요…… 마치 제 몸과 마음이 전부 굴복당하는 기분이라……',
    );
    await ruby.say_and_wait(
      '으음…… 끝까지 들어왔어…… 또 들어왔어…… 어떻게 이렇게 깊은 곳까지 들어올 수가 있죠…… 거긴…… 한 번도 유린당한 적 없는 연약한 속살인데……',
    );
    await ruby.say_and_wait(
      '하아…… 너무 민감해요…… 자지가 스칠 때마다 가 버릴 것만 같아…… 어째서 이렇게 신기한 기분이 드는 거죠…… 하아…… 분명 자위할 때는 거의 절정에 가본 적이 없었는데……',
    );
    await ruby.say_and_wait(
      '아…… 역시…… 커다란 자지만 있으면…… 루비는 버텨낼 수가 없나 봐요…… 커다란 자지가 안을 마구 헤집어 놓으니까…… 루비…… 이제 한계예요……',
    );
    await ruby.say_and_wait([
      r_call_m,
      '…… 루비는 결국 ',
      r_call_m,
      '의 그 커다란 자지에…… 완전히 길들여진 암캐가 되어버렸어요……',
    ]);
    await ruby.say_and_wait([
      '하아…… 뭐라고요…… ',
      r_call_m,
      '은 진작부터 다 알고 계셨다고요…… 루비가 항상 욕구불만에 시달리고 있었다는 것을……',
    ]);
    await ruby.say_and_wait('루비는 정말로 레이스 우마무스메로서 실격이에요……');
    await ruby.say_and_wait([
      '하아…… 그렇지만…… ',
      r_call_m,
      '도 좋아하신다고…… 이렇게 음탕하고 천박하게 달라붙는 루비를 좋아하신다고 들으니……',
    ]);
    await ruby.say_and_wait([
      '아…… 사랑받고 있다는 느낌은 정말 최고예요…… 이제 버틸 수 없어요…… ',
      r_call_m,
      '……',
    ]);
    await ruby.say_and_wait(
      '으음…… 루비 머릿속이 망가져 버려요…… 하아…… 루비 숨 좀 돌리게 해주세요…… 아앗…… 조금만 살살…… 또 푹 박아 넣으셨어……',
    );
    await ruby.say_and_wait('아…… 좁은 보지 구멍이 벌써 말을 안 듣기 시작했어요…… 애액이 너무 많이 나와요…… 우우우……');
    await ruby.say_and_wait(['결국 ', r_call_m, '에게 잔뜩 박혀서 가 버렸어요…… 아…… 너무 좋아요……']);
    await ruby.say_and_wait('커다란 자지에 박혀서 맞이하는 절정이야말로 진짜 절정이에요……');
    await ruby.say_and_wait([
      '이대로…… 루비는…… 완전히 ',
      r_call_m,
      '의 성노예가 되어버렸네요……',
    ]);
    await ruby.say_and_wait([
      '하아…… 전속 성노예라니…… 나중에 간호부장이 된 루비는…… 부하 간호사들을 전부 ',
      r_call_m,
      '에게 바쳐서 박히게 만들겠어요…… 그런 가차 없는 쾌락…… 커다란 자지가 가져다주는 절정의 기쁨…… 하아…… 또 가 버려요……',
    ]);
    await ruby.say_and_wait([
      '그저 ',
      r_call_m,
      '의 앞에서…… 아주 조금 이성을 놓았을 뿐인데…… 완전히 망가져 버리다니……',
    ]);
    await ruby.say_and_wait(
      '아…… 이것이 바로 대물 자지가 주는 기쁨이군요…… 도저히 억누를 수가 없어요…… 절정 너무나 기분 좋아서……',
    );
    await ruby.say_and_wait(['암캐가 되는 건 정말 멋진 일이에요…… ', r_call_m, '의 암캐가 되는 건……']);
    await ruby.say_and_wait(
      '이런 절정을 맛보다니…… 이렇게 파도처럼 밀려오는 짜릿한 쾌감은…… 정말이지 너무 과해요……',
    );
    await ruby.say_and_wait([
      '평생 동안 ',
      r_call_m,
      '의 커다란 자지에 꿰뚫린 채 지내고 싶어요…… 음란한 루비의 보지 구멍 속에 항상 꽂아두고서……',
    ]);
    await ruby.say_and_wait(
      '정말로 너무 기분 좋아요…… 절정…… 멈추지 않는 연속된 절정…… 오르가슴의 쾌감이…… 사람을 완전히 미치게 만들어요……',
    );
    await ruby.say_and_wait('망가졌어…… 또 망가져 버렸어요…… 우우우…… 루비 이제 한계예요……');
    await ruby.say_and_wait('머릿속이 하얘져서…… 아무것도 안 보여요……');
    await ruby.say_and_wait([
      '아…… 음탕한 루비…… 암캐 루비는…… ',
      me.get_colored_actual_name(),
      '님을 너무나도 갈망해요오',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.virgin),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async loli_wife(ruby, me) {
    await print_event_name('로리 아내', ruby);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '이(가) 무척 피곤해 보이는 것을 보고, 기특하게도 ',
      me.get_colored_name(),
      '을(를) 위해 목욕물을 받아 두었다.',
    ]);
    await era.printAndWait([
      '옷을 벗던 도중, ',
      me.get_colored_name(),
      '은(는) 갑자기 그녀에게 ',
      me.get_colored_name(),
      '와 함께 목욕하자고 청했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 이미 씻은 상태였지만, 군말 없이 옷을 벗고 욕실로 들어왔다.',
    ]);
    await era.printAndWait([
      '욕실 안에서, ',
      ruby.get_colored_name(),
      '는 부끄러운 마음에 차마 ',
      me.get_colored_name(),
      '을(를) 똑바로 쳐다보지 못했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그녀의 손가락을 쥐어 잡고, 남성의 신체 구조에 대해 가르쳐 주었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 손을 대기도 전에, ',
      me.get_colored_name(),
      '이(가) 먼저 소녀의 부드러운 살결 위에 비누칠을 하기 시작했다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      me.get_colored_name(),
      '의 양손이 그녀의 가슴 앞에 머물렀다. 그녀의 가슴은 마치 정성스레 구워낸 달걀 프라이 같았다. 흰자가 노른자를 감싸 안은 듯 촉촉하게 흔들려 ',
      me.get_colored_name(),
      '이(가) 하여금 당장이라도 한 입 베어 물고 싶게 만들었다.',
    ]);
    await era.printAndWait([
      '자그만 돌기는 ',
      me.get_colored_name(),
      '의 조급한 손길에 자꾸만 손아귀를 벗어나 미끄러졌고, 그럴 때마다 ',
      ruby.get_colored_name(),
      '는 참지 못하고 풋 웃음을 터뜨렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '를 깨끗이 씻겨준 후, 이번에는 ',
      ruby.get_colored_name(),
      '에게 ',
      me.get_colored_name(),
      '의 몸을 닦아달라고 부탁했다.',
    ]);
    await era.printAndWait('그녀는 몸의 모든 부위를 세심하게 닦아내렸지만, 오직 가장 중요한 부위만큼은 쏙 빼놓았다.');
    era.printButton('아직 안 씻은 부위를 말해준다', 1);
    era.printButton('그녀의 손을 잡고 강제로 시킨다', 2);
    await era.input();
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    await print_ero_page(85);
    await end_ero_and_show_result();
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async milking(ruby, me, r_call_m) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('수유', ruby);
    await ruby.say_and_wait('오늘 실수로 예전에 입던 브래지어를 착용하는 바람에, 너무 꽉 끼어서 고생했어요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 그렇게 말하며 양손을 등 뒤로 돌린 채 몸을 이리저리 흔들었다.',
    ]);
    await era.printAndWait('금속 버클이 풀리는 소리와 함께, 그녀의 풍만한 유방이 밖으로 팅겨 나왔다.');
    await ruby.say_and_wait([
      r_call_m,
      ', 제 가슴…… 빨아주지 않으실 건가요? 부풀어 오른 꽃봉오리에 얼굴을 묻어주세요.',
    ]);
    await ruby.say_and_wait('후훗, 이리 오세요. 이 엄마의 품에 안겨 어리광을 부리며 행복해지자고요.');
    await era.printAndWait('이토록 노골적으로 유혹해 오니, 도저히 거절할 방도가 없었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 머리 위로 ',
      ruby.get_colored_name(),
      '가 부드럽게 쓰다듬는 촉감이 전해졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 눈앞에 놓인 소녀의 마성적인 유방을 향해 다가가, 입술로 가슴 끝의 부푼 돌기를 감싸 안았다.',
    ]);
    await ruby.say_and_wait('어려운 생각은 전부 지워버리고, 엄마의 젖꼭지를 빨며 행복에 빠져보세요.');
    await era.printAndWait([
      '뒷머리를 쓰다듬는 ',
      ruby.get_colored_name(),
      '의 손길에 재촉당하듯, ',
      me.get_colored_name(),
      '은(는) 그녀의 유두를 조심스레 빨아 당겨 보았다.',
    ]);
    era.printButton('（아아…! 너무 행복해, 머릿속이 텅 비어버릴 것 같아……）', 1);
    await era.input();
    await era.printAndWait('눈앞에 맞닿은 따스한 가슴은 말할 수 없는 행복감과 만족감을 안겨주었다.');
    await era.printAndWait([
      '멀쩡한 어른이 자신보다 훨씬 어린 여자아이에게 아기처럼 매달려 어리광을 부리는 이 수치심을, ',
      me.get_colored_name(),
      '은(는) 입술 끝으로 전해지는 부풀어 오른 유두의 감각에 의지해 간신히 달래야만 했다.',
    ]);
    await ruby.say_and_wait('어린아이처럼, 갓난아기처럼…… 엄마 가슴을 빨면서 행복해지렴~');
    await ruby.say_and_wait([
      '자아, ',
      r_call_m,
      '. 멍하니 계시지 말고, 제 젖을 더 많이 달게 빨아 마셔 주세요.',
    ]);
    await era.printAndWait('……츕…… 쮸웁.');
    await ruby.say_and_wait([
      '참 잘했어요, ',
      r_call_m,
      '. 엄마 가슴을 이렇게나 잘 빨다니 정말 기특한 아이네요.',
    ]);
    await ruby.say_and_wait('착하지, 착해……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그저 ',
      ruby.get_colored_name(),
      '가 시키는 대로 묵묵히 그녀의 가슴을 빨았을 뿐인데, ',
      ruby.get_colored_name(),
      '는 연신 ',
      me.get_colored_name(),
      '의 머리를 쓰다듬으며 ',
      me.get_colored_name(),
      '을(를) 칭찬해 주었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 무언가 잘못되어 간다고 느꼈지만, 아무런 조건 없이 자신을 긍정해 주는 포근함에 이성마저 느슨하게 풀려버렸다.',
    ]);
    await era.printAndWait('더 많이 칭찬받고 싶다, 더 많이 쓰다듬어지고 싶다.');
    await era.printAndWait([ruby.get_colored_name(), '의 품속에 완전히 매료되어 버렸다.']);
    await era.printAndWait('쫍, 쯉…… 츕……');
    await ruby.say_and_wait('가슴에 매달려 젖을 빠는 몸만 큰 아기가 되시는 거예요.');
    await era.printAndWait([
      '행복감에 흠뻑 젖어 있던 ',
      me.get_colored_name(),
      '의 머릿속에 기묘한 위기감이 스쳤다.',
    ]);
    await me.say_and_wait(`이길 수 없어, 난 ${m_call_r}의 가슴조차 이겨낼 수 없단 말인가`, true);
    await ruby.say_and_wait([r_call_m, ', 벌써 자신의 꿈을 잊어버리신 건가요?']);
    await era.printAndWait([me.get_colored_name(), '은(는) 대답 대신 더 격렬하게 젖을 빠는 것으로 응수했다.']);
    await ruby.say_and_wait('우후후, 완전히 타락해 버리셨네요. 그럼 상으로……');
    await ruby.say_and_wait('가슴을 빠는 동시에, 그대로 하얀 오줌을 지려버리세요.');
    await ruby.say_and_wait([
      '아앗! ',
      r_call_m,
      '의 고추는 정말로 무척이나 거대해서, 그동안 저를 몇 번이나 괴롭혔었죠.',
    ]);
    await ruby.say_and_wait([
      '이빨을 세우고 깨물면 안 돼요, ',
      r_call_m,
      '. ',
      r_call_m,
      '은 ',
      m_call_r,
      '의 착한 아기니까요.',
    ]);
    await era.printAndWait('손길이 빨라진다.');
    await ruby.say_and_wait('속도를 조금 높였다고 벌써 가슴을 빨 여유조차 없으신 건가요?');
    await ruby.say_and_wait('좋아요, 만약 입을 때고 싶으시다면 부디 저를 엄마라고 불러주세요.');
    await ruby.say_and_wait(
      '자신보다 한참 어린 여자아이에게 아기처럼 매달려 칭얼대며, 어른으로서의 존엄 따윈 내던져버리고 온몸으로 쾌락을 만끽하는 거예요.',
    );
    await ruby.say_and_wait(['훌륭해요, ', r_call_m, '. 바로 그 모습이랍니다.']);
    await ruby.say_and_wait('덩치 큰 어른이면서 어린아이에게 농락당하며, 엄마를 부르짖고 기분 좋아지다니.');
    await ruby.say_and_wait('이렇게나 멋진 고추를 달고 계시면서, 가슴을 좀 빨았다고 이 모양이 되시다니 정말이지……');
    await ruby.say_and_wait(
      '슬슬 사정할 것 같나요? 잠시만 기다려 주세요, 제가 휴지를 준비할 테니. 방을 더럽히면 안 되니까요.',
    );
    await ruby.say_and_wait('자, 겹쳐 접은 휴지를 고추 끝부분에 대어 놓을게요.');
    await ruby.say_and_wait('언제든지 사정하셔도 괜찮답니다?');
    await ruby.say_and_wait(['죄송해요, ', r_call_m, '.']);
    await ruby.say_and_wait([
      '원래는 기분 좋게 사정하게 해 드릴 생각이었는데, 이 못된 녀석이 항상 저를 너무 괴롭혔잖아요.',
    ]);
    await ruby.say_and_wait('그러니까 계획을 바꾸어서 심술궂은 사정 관리로 변경할게요. 그리고 엄마 노릇도 이제 그만둘래요.');
    await ruby.say_and_wait('어라? 분명 엄마 안 하겠다고 말씀드렸는데, 왜 자꾸 저를 엄마라고 부르시는 거죠?');
    await ruby.say_and_wait([
      '전 ',
      r_call_m,
      '의 엄마가 아니에요. 자꾸 엄마라고 부르시면 징그러우니까 그만두세요.',
    ]);
    await ruby.say_and_wait('슬슬 찍 쌀 때가 되었죠? 손에 전해지는 느낌만 봐도 다 알 수 있어요.');
    await ruby.say_and_wait('아아! 표정이 정말 사랑스러우셔라.');
    await ruby.say_and_wait('착한 아이, 착한 아이…… 마지막으로 가슴을 달게 빨면서 싸 버리렴, 찍…… 찌이익……');
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.breast);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }
};