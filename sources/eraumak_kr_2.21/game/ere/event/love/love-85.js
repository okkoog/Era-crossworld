/**
 * @file 다이이치 루비 - 애정
 * @author 梦露
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const Love85UntilHalfLife = require('#/event/love/love-events-85/until-half-life');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

module.exports = class extends Love85UntilHalfLife {
  async shame(ruby, me) {
    await print_event_name('수줍은 소녀', ruby);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 떨리는 손으로 옷의 단추를 풀기 시작했다.',
    ]);
    await era.printAndWait('그녀가 벗어던진 것은 옷뿐만이 아니라, 마지막 남은 존엄성이었다.');
    await era.printAndWait('그 화려한 드레스가 그녀의 작은 손짓에 풀려 바닥으로 흘러내렸다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 하반신 곡선이 고스란히 드러났다. 매끄럽고 가느다란 예쁜 다리는 벗을 듯 말 듯한 모습으로 더욱 상상을 자극했다.',
    ]);
    era.printButton('말로 재촉한다', 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 망설이던 작은 손이 몸에 남은 마지막 무장을 해제하기 시작했다.',
    ]);
    await era.printAndWait(
      '마침내 머리에 장식된 붉은 리본과 다리에 신은 흰색 오버니삭스를 제외하고는 아무런 가림막도 남지 않게 되었다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 손은 방어 본능 때문에, 여전히 필사적으로 중요 부위를 가리고 있었다.',
    ]);
    era.printButton('손을 치우라고 명령한다', 1);
    await era.input();
    await era.printAndWait('잠시 주저하던 그녀는 어쩔 수 없다는 듯 양손을 벌렸다.');
    await era.printAndWait([
      '작은 얼굴은 수치심으로 가득 차서 새빨갛게 달아올랐고, 고개를 돌려 더 이상 ',
      me.get_colored_name(),
      '과(와) 시선을 마주치지 않으려 했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 담당 우마무스메의 눈부시도록 아름다운 나신을 감상하기 시작했다.',
    ]);
    await era.printAndWait('피부는 백옥처럼 하얗고, 고급 실크처럼 매끄러웠다.');
    await era.printAndWait(
      '가슴팍의 하얀 두 토끼는 금방이라도 튀어나올 듯 존재감을 드러내고 있었다. 크지는 않지만 결코 빈약하지 않은, 마치 반쯤 피어난 청초한 꽃잎 같았다.',
    );
    await era.printAndWait('아랫배는 매끄럽고 깨끗했으며, 아직 잡초에 물들지 않은 상태였다.');
    await era.printAndWait(
      '살짝 부푼 부끄러운 언덕은 완벽한 형태를 그리며, 연분홍빛의 가느다란 틈새에 의해 둘로 나뉘어 있었다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 품에 안기며 공처럼 몸을 웅크렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 눈앞의 가녀린 몸을 살짝 건드리자, 담당 우마무스메가 긴장으로 몸을 떨며 소름이 돋아나고 있는 것이 느껴졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 지금의 ',
      ruby.get_colored_name(),
      '가 막 붙잡혀 길들여지는 중인 들고양이 같은 상태라 너무 서두르면 겁을 먹고 도망칠 것이라는 걸 잘 알고 있었다.',
    ]);
    era.printButton('그녀를 꼭 껴안아 준다', 1);
    era.printButton('방으로 데려가 재운다', 2);
    await era.input();
  }

  async foot_job(ruby, me, r_call_m) {
    await print_event_name('풋잡', ruby);
    await ruby.say_and_wait([r_call_m, ', 당신의 그거…… 커진 건가요?']);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 숙여 ',
      me.get_colored_name(),
      '의 가랑이를 슬쩍 보더니, 이내 붉게 빛나는 눈동자로 올려다보며 물었다.',
    ]);
    await ruby.say_and_wait('어째서 커지는 건가요?');
    await ruby.say_and_wait([r_call_m, ', 제가 흰색 스타킹을 신은 다리가 좋은 건가요?']);
    era.printButton('「으응.」', 1);
    era.printButton('「너무 예뻐서…… 그리고 만지기 좋아서, 그러니까……」', 2);
    await era.input();
    await era.printAndWait([
      '순간, ',
      ruby.get_colored_name(),
      '가 부드러운 작은 손을 뻗어 ',
      me.get_colored_name(),
      '의 손을 끌어당겨 자신의 허벅지 위에 올려놓았다.',
    ]);
    await ruby.say_and_wait([
      r_call_m,
      '이 좋으시다면, 마음껏 만지셔도 돼요. 저…… 저는 ',
      r_call_m,
      '이 이러는 거 싫지 않으니까……',
    ]);
    await era.printAndWait([
      '어떻게 된 일이지? ',
      me.get_colored_name(),
      '의 머릿속이 하얘졌지만, 손끝으로 전해지는 실크 같은 감촉은 결코 거짓말을 하지 않았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 손은 본능적으로 담당 우마무스메의 스타킹 신은 허벅지를 부드럽게 쓰다듬었고, 바지 속의 흉기는 더욱 팽팽하게 부풀어 올랐다.',
    ]);
    await ruby.say_and_wait('참고 계시면, 무척 괴로우시겠죠.');
    await era.printAndWait([
      '말을 마친 ',
      ruby.get_colored_name(),
      '는 손을 뻗어 ',
      me.get_colored_name(),
      '의 바지 지퍼를 내렸다. 흉포한 음경이 힘차게 튀어나왔고, 그녀는 작은 손으로 그것을 부드럽게 훑기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아예 바지를 걷어차 버리고, 양손을 모두 사용해 담당 우마무스메의 스타킹 신은 다리를 주무르며 손바닥 깊숙이 전해지는 온기를 만끽했다.',
    ]);
    await ruby.say_and_wait([r_call_m, ', 기분 좋으신가요?']);
    await era.printAndWait([
      '몇 번 움직이지도 않았는데, ',
      me.get_colored_name(),
      '은(는) 하반신이 저릿하며 당장이라도 하얀 이물질을 뿜어낼 것만 같았다.',
    ]);
    era.printButton('그녀의 손을 치운다.', 1);
    era.printButton('항복하고 받아들인다.', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 ',
      ruby.get_colored_name(),
      '의 손을 치우며 치명적인 쾌감을 중단시켰다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 의아한 시선 속에서, ',
      me.get_colored_name(),
      '은(는) 의자에서 내려와 바닥에 앉았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 의도를 알아차리고, 스타킹에 감싸인 가냘픈 두 발로 ',
      me.get_colored_name(),
      '의 분노로 가득 차 하늘을 찌를 듯한 남근을 좌우에서 가두어 쥐고 위아래로 비벼대기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 자극에 어느 정도 익숙해진 것을 느끼자, ',
      ruby.get_colored_name(),
      '는 살짝 힘을 주어 밟아 내렸다. ',
      me.get_colored_name(),
      '은(는) 몸이 중심을 잃고 바닥에 쓰러지지 않도록 두 손으로 뒤쪽 바닥을 지탱할 수밖에 없었다.',
    ]);
    await ruby.say_and_wait('이러면 기분 좋으신가요?');
    await ruby.say_and_wait('얄미운 변태 씨.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 부끄러워하며 매도하면서도, 스타킹을 신은 두 발의 움직임은 점점 빨라져만 갔다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 요도구에서는 이내 윤활유 같은 쿠퍼액이 연달아 흘러나와, 그녀의 하얀 스타킹 발을 적시기 시작했다.',
    ]);
    await ruby.say_and_wait('만약 마음에 드신다면, 앞으로 매일 이렇게 해드릴게요.');
    await era.printAndWait([
      '이미 뇌가 욕망으로 가득 찬 ',
      me.get_colored_name(),
      '은(는) 거친 숨을 몰아쉬며 고개를 끄덕일 뿐이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 치명적인 쾌감을 이기지 못하고 고개를 뒤로 젖히며 신음을 내뱉었다.',
    ]);
    await era.printAndWait(
      '작은 발 사이에 끼인, 소녀와 극명한 대조를 이루는 굵직한 남근이 바르르 떨리더니 요도구로부터 분수처럼 하얀 농밀한 정액을 연달아 뿜어냈고, 이내 그녀의 귀여운 스타킹을 신은 발 위로 후두둑 떨어져 내렸다.',
    );
    await era.printAndWait([
      '사정은 십여 초간 지속되었고, ',
      me.get_colored_name(),
      '은(는) 눈앞이 하얘지며 뇌수가 전부 뽑혀 나가는 듯한 강렬한 쾌감에 휩싸였다.',
    ]);
    await era.printAndWait([
      '그러나 ',
      ruby.get_colored_name(),
      '의 두 발은 멈추지 않고 여전히 위아래로 움직이며 ',
      me.get_colored_name(),
      '의 인자즙을 쥐어짜냈다.',
    ]);
    await era.printAndWait([
      '사정이 완전히 끝나고 한참이 지나서야 그녀는 두 발을 ',
      me.get_colored_name(),
      '의 허벅지 위에 올려놓았다.',
    ]);
    await era.printAndWait([
      '정액으로 흠뻑 젖은 스타킹 발로 ',
      me.get_colored_name(),
      '의 허벅지를 툭툭 건드리며, ',
      me.get_colored_name(),
      '이(가) 사정 후의 여운을 충분히 만끽하도록 만들었다.',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.foot),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
  }

  async sex_mark(ruby, me, r_call_m) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('음문', ruby);
    await ruby.say_and_wait([
      '배는 이미 가득 찼는데, 아직도 ',
      r_call_m,
      '이 내 자궁 속에 정액을 가득 채워주기를 바라고 있어……',
    ]);
    await ruby.say_and_wait([ruby.get_colored_name(), ', 너는 정말…… 부끄러운 줄도 모르는구나.']);
    era.println();
    await ruby.say_and_wait('——이건, 무슨 기분이지?');
    await ruby.print_and_wait([
      '심장이 쿵쾅쿵쾅 격렬하게 뛰기 시작했다. ',
      ruby.get_colored_name(),
      '는 자신의 얼굴이 얼마나 새빨갛게 물들었는지조차 인지하지 못했다.',
    ]);
    await ruby.print_and_wait(
      '충격과 혼란으로 가득 찬 눈동자로 자신의 아랫배를 뚫어지게 바라보며, 양손을 겹쳐 벌어진 입술을 살포시 가렸다.',
    );
    await ruby.print_and_wait('몸이 이상할 정도로 뜨거워졌고, 의식이 간헐적으로 흐려졌다.');
    await ruby.print_and_wait([
      '마치 체내에서 불꽃이 타오르는 듯한 감각이 밀려와, 하마터면 ',
      ruby.get_colored_name(),
      '는 정신을 잃을 뻔했다.',
    ]);
    await ruby.print_and_wait([
      '단련된 사지에서 힘이 쭉 빠져나갔고, 절정에 달한 것처럼 가볍게 바르르 떨렸다.',
    ]);
    await ruby.print_and_wait(
      '제3자가 보기에는 잘게 떨리는 귀와 꼿꼿이 선 꼬리가 영락없는 절정의 그것과 다를 바 없었다.',
    );
    await ruby.say_and_wait('우우우…… 싫어……');
    await ruby.print_and_wait([
      '몸속을 지지는 듯한 이 치명적인 뜨거움은 ',
      r_call_m,
      '의 품에 안겨 격렬하게 혀를 섞을 때의 감각과 완전히 똑같았다.',
    ]);
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      '가 거울을 바라보자, 눈가에는 눈물이 고여 있었고 입술을 지그시 깨문 채 고뇌하는 표정은 말할 수 없이 음란했다.',
    ]);
    await ruby.print_and_wait([
      '그녀는 거의 반사적으로 ',
      r_call_m,
      '와 보냈던 낮과 밤들을 떠올렸다.',
    ]);
    await ruby.print_and_wait([
      '심지어 지금 당장 ',
      r_call_m,
      '에게 안겨 입맞춤을 받는다면 자신의 표정이 어떻게 변할지 상상하기 시작했다.',
    ]);
    await ruby.say_and_wait('이런 갈망은, 대체 왜……?');
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      '는 자신의 귀가 쫑긋거리는 것을 느끼고 손을 뻗어 매만졌다.',
    ]);
    await ruby.print_and_wait([
      '이상하게도, 원래 느껴져야 할 ',
      r_call_m,
      '에게 애무받을 때의 쾌감은 전혀 없었다. 이 초조한 감각은 ',
      ruby.get_colored_name(),
      '를 무척이나 답답하게 만들었다.',
    ]);
    await ruby.print_and_wait([
      '분출구를 찾지 못한 압박감이 ',
      ruby.get_colored_name(),
      '의 자그마한 체내에 짓눌리듯 쌓여갔고, 앳된 입술 사이로 뜨거운 숨결이 연달아 새어 나왔다.',
    ]);
    await ruby.say_and_wait(['하아, 하아…… ', r_call_m, '…… 어째서……']);
    await ruby.say_and_wait([r_call_m, ', 도와주세요, 저, 저 온통 당신 생각밖에 나질 않아서……']);
    await ruby.say_and_wait('그 느낌이, 점점 더 강해져서…… 어째서…… 어째서인가요?');
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      '가 숨을 짧게 몰아쉬자, 눈빛이 조금은 또렷해졌다.',
    ]);
    await ruby.print_and_wait([
      '하지만 몸 안에 남아있는 열기와 ',
      r_call_m,
      '과(와)의 기억이 자꾸만 그녀를 불순한 망상 속으로 빠뜨렸다.',
    ]);
    era.drawLine();
    await era.printAndWait('（똑 똑 똑）');
    await ruby.say_and_wait([r_call_m, ', 저…… 저에요……']);
    await era.printAndWait('——목소리가 가냘프게 떨리며 가쁜 숨이 섞여 있다.');
    await era.printAndWait([
      '담당 우마무스메의 목소리가 심상치 않음을 감지한 ',
      me.get_colored_name(),
      '은(는) 주저 없이 방문을 열었다.',
    ]);
    await era.printAndWait([
      '눈앞에 선 미인의 모습을 미처 제대로 확인하기도 전에, ',
      ruby.get_colored_name(),
      '의 몸이 그대로 ',
      me.get_colored_name(),
      '의 품 안으로 무너지듯 안겨 왔다.',
    ]);
    await me.say_and_wait('몸이 왜 이렇게 뜨겁지?', true);
    await era.printAndWait([
      me.get_colored_name(),
      '의 양손이 루비의 등을 감싸 안았다. 그녀는 다리에 힘이 풀려 반쯤 꿇어앉은 채 온몸의 무게를 ',
      me.get_colored_name(),
      '의 품에 맡기고 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 시선이 고급 원피스의 살짝 비치는 시스루 부위를 뚫고 들어가, ',
      ruby.get_colored_name(),
      '의 속옷 위로 떨어졌다.',
    ]);
    await era.printAndWait([
      '손바닥으로 고스란히 전해지는 엄청난 열기에 ',
      me.get_colored_name(),
      '은(는) 순간 당혹감을 감출 수 없었다.',
    ]);
    await ruby.say_and_wait(['하아~ 하아~ ', r_call_m, '…… 하아……']);
    await era.printAndWait([
      me.get_colored_name(),
      '의 가슴에 묻혀있던 ',
      ruby.get_colored_name(),
      '의 고개가 서서히 들려졌다. 얼굴은 발그레하게 상기되어 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 문을 닫고, ',
      ruby.get_colored_name(),
      '를 소파 위로 올려 눕혔다.',
    ]);
    await ruby.say_and_wait([r_call_m, ', 저, 몸이 너무 뜨거워요……']);
    await ruby.say_and_wait(['당신이 보고 싶었어요, ', r_call_m, '…… 저, 저도 왜 이러는지 모르겠어요……']);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 목소리는 평소의 의연함을 잃고, 한없이 약하고 부드럽게 늘어졌다.',
    ]);
    await era.printAndWait([
      '물기 어린 눈망울이 ',
      me.get_colored_name(),
      '을(를) 애처롭게 바라보았고, 꼬리는 슬그머니 ',
      me.get_colored_name(),
      '의 허벅지를 감싸 안았다.',
    ]);
    await era.printAndWait('그녀는 허벅지를 꽉 조인 채 좌우로 비벼대며 소파 위에서 몸을 살랑살랑 뒤틀었다.');
    await era.printAndWait(
      '이러지도 저러지도 못하는 수줍은 몸짓은, 만약 유흥가의 여인이었다면 유혹하는 수작이라 여겼을 만큼 요염했다.',
    );
    await era.printAndWait([
      '하지만 그녀는 다른 누구도 아닌 명문가의 ',
      ruby.get_colored_name(),
      '다. 완전히 발정 난 암컷이 따로 없는 모습에 ',
      me.get_colored_name(),
      '은(는) 순간 멍해질 수밖에 없었다.',
    ]);
    await ruby.say_and_wait([r_call_m, '…… 머리가, 머릿속이 어질어질해요.']);
    era.printButton(`심호흡을 해봐, ${m_call_r}.`, 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 스마트폰 화면에는 이미 늙은 집사의 번호가 띄워져 있었지만, 끝내 ',
      me.get_colored_name(),
      '은(는) 그것을 탁자 위에 엎어놓았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 곁에 쪼그리고 앉아, 그녀의 흑갈색 머리카락 사이에 코를 묻고 숨을 들이쉬었다.',
    ]);
    await era.printAndWait('——암컷의 달콤한 페로몬.');
    await era.printAndWait([
      '우마무스메가 발정했을 때 뿜어져 나오는, 특유의 농후하면서도 맑은 향기가 ',
      me.get_colored_name(),
      '을(를) 순간 깊은 도취감에 빠뜨렸다.',
    ]);
    await era.printAndWait(
      '마치 맑은 물처럼 순수하면서도 오래 맡으면 묵직한 먹물처럼 깊어지는 이 향은, 수많은 풍파를 겪은 난봉꾼들조차 포로로 만든다고 알려져 있었다.',
    );
    await era.printAndWait([
      '확인을 위해, ',
      me.get_colored_name(),
      '은(는) 우선 손을 ',
      ruby.get_colored_name(),
      '의 이마에 얹어 체온을 측정했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 풀려있던 눈동자가 순간 번쩍 뜨이더니, 가볍고 색기 어린 숨소리가 흘러나왔다.',
    ]);
    await ruby.say_and_wait('하아~ 읏~ 하아~');
    await era.printAndWait('——역시, 음문 때문인가.');
    await ruby.say_and_wait([r_call_m, ', 제게 무슨 일이 일어난 건가요? 너무 더워요……']);
    await era.printAndWait([
      me.get_colored_name(),
      '의 손길이 부드러운 궤적을 그리며 ',
      ruby.get_colored_name(),
      '의 이마에 흘러내린 머리카락을 정돈해 주었다. 손가락은 이내 그녀의 귀여운 귀를 살포시 매만졌다.',
    ]);
    await era.printAndWait([
      '기분 좋은 감각과 ',
      me.get_colored_name(),
      '에게 닿아있다는 사실 덕분인지, ',
      ruby.get_colored_name(),
      '는 그제야 긴장이 조금 풀린 듯했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '에게 있어 ',
      ruby.get_colored_name(),
      '는 차마 더럽히기 아까울 정도로 맑고 깨끗한 물과 같았고, 음문은 그 투명한 물에 떨어뜨린 단 한 방울의 짙은 먹물과도 같았다.',
    ]);
    await era.printAndWait(
      '겉보기엔 미미한 욕망일지라도, 순식간에 잔 전체를 탁하게 만들고 끓어오르게 만들기엔 충분했다.',
    );
    await ruby.say_and_wait(['하아~ 하아~ 너무 기분 좋아요, ', r_call_m, '의 손……']);
    await era.printAndWait(['쓴웃음을 지으며, ', me.get_colored_name(), '은(는)……']);
    era.printButton('그녀의 초점 흐린 두 눈을 부드럽게 감겨주었다.', 1);
    era.printButton(`「괜찮아, 무서워할 것 없단다, ${m_call_r}.」`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '이 순수하면서도 요염함이 가득한 시선을 차단하고 나서야, 비로소 ',
        me.get_colored_name(),
        '의 이성이 간신히 중심을 잡을 수 있었다.',
      ]);
      await era.printAndWait([
        '비록 그 보드라운 작은 입술이 여전히 가쁜 숨을 몰아쉬며 ',
        me.get_colored_name(),
        '을(를) 유혹하고 있었지만, ',
        me.get_colored_name(),
        '은(는) 용케 참아낼 수 있었다——적어도 지금은.',
      ]);
      await era.printAndWait([
        '다음 날 아침, ',
        me.get_colored_name(),
        '은(는) 집사에게 연락해 ',
        ruby.get_colored_name(),
        '를 가문 저택으로 돌려보냈다.',
      ]);
    } else {
      await ruby.say_and_wait([
        r_call_m,
        '의 표정, 무척 괴로워 보여요…… 제가 당신에게 짐이 된 건가요……',
      ]);
      await era.printAndWait([
        '치맛자락을 꽉 쥐고 있던 작은 손이 슬그머니 올라와 ',
        me.get_colored_name(),
        '의 얼굴에 닿았고, 굳어 있는 ',
        me.get_colored_name(),
        '의 뺨을 부드럽게 감싸 쥐었다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '의 표정이 점점 더 무거워졌다……']);
      era.printButton('「참아야 해.」', 1);
      era.printButton('「반드시 억눌러야 한다.」', 2);
      era.printButton('「몸은 정직하네.」', 3);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 부드러운 손길이 ',
        me.get_colored_name(),
        '의 뺨을 어루만지는 사이, ',
        me.get_colored_name(),
        '의 하반신 텐트는 이미 바지를 팽팽하게 밀어 올리고 있었다.',
      ]);
      await era.printAndWait([
        '그녀는 온통 ',
        me.get_colored_name(),
        '의 표정과 기색을 살피느라, 정작 그 변화에 대해서는 눈치채지 못한 듯했다.',
      ]);
      await era.printAndWait([
        '이를 악문 ',
        me.get_colored_name(),
        '이(가) 마침내 음문에 대한 사실을 ',
        ruby.get_colored_name(),
        '에게 솔직하게 털어놓으려던 찰나, 그녀의 호흡이 턱 하고 멎었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 동시에 커진 눈으로 서로를 바라보았다.',
      ]);
      await ruby.say_and_wait(['아~! 흣~ 아! ', r_call_m, '……!']);
      await ruby.say_and_wait(['이상해요, ', r_call_m, ', 으아아앗! ——']);
      await era.printAndWait([
        '아랫배에 전해지는 격렬한 자극 때문에, ',
        ruby.get_colored_name(),
        '는 허리를 바짝 튕기며 거의 상체를 일으켜 세웠고, 양손은 본능적으로 바닥을 짚어 몸을 지탱했다.',
      ]);
      await era.printAndWait(
        '눈동자가 사정없이 흔들렸고, 조그맣고 귀여운 입술이 활짝 벌어지며 그 안의 분홍빛 혀가 밖으로 길게 새어 나왔다.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 이성이 격렬하게 경고음을 울려댔고, 아무리 꼴사나운 모양새가 될지언정 의사를 부르기로 결심했다.',
      ]);
      await era.printAndWait([
        '손이 막 스마트폰을 움켜쥐려던 순간, ',
        ruby.get_colored_name(),
        '의 버티던 몸이 돌연 균형을 잃고 소파 아래로 미끄러져 내렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 반사적으로 몸을 날려 그녀를 받아냈으나, 그 충격으로 스마트폰이 바닥에 나뒹굴며 처참하게 박살 나 버렸다.',
      ]);
      await era.printAndWait([
        '온몸의 맥이 풀려버린 ',
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 가슴팍 위에 엎어졌고, 그녀의 아랫배 한가운데는 하필 ',
        me.get_colored_name(),
        '이(가) 바짝 세워 올린 우뚝 솟은 장막에 정확히 받쳐지게 되었다.',
      ]);
      await era.printAndWait([
        '키 차이 때문에 그녀의 얼굴은 겨우 ',
        me.get_colored_name(),
        '의 가슴 근처에 묻혀 있는 형태가 되었다.',
      ]);
      await era.printAndWait([
        '흑갈색의 긴 머리카락이 등 뒤로 스르륵 흘러내렸고, 힘이 빠진 가녀린 팔은 ',
        me.get_colored_name(),
        '의 가슴을 겨우 짚고 있었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 비틀거리며 ',
        me.get_colored_name(),
        '을(를) 올려다보았다. 이 자그마한 우마무스메는 웅크리고 있으니 ',
        me.get_colored_name(),
        '의 몸뚱이 절반 크기밖에 되지 않았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 상체를 바짝 세우며 얼굴을 붉혔다. 이슬이 맺힌 두 눈동자가 한없이 애처로워 보였다.',
      ]);
      await era.printAndWait([
        '음문의 영향 때문에, 그녀는 지금 그저 육체의 본능이 이끄는 대로 ',
        me.get_colored_name(),
        '의 몸에 매달려 있을 뿐이었다.',
      ]);
      await ruby.say_and_wait('부디 저를…… 치료해 주실 수 있나요?');
      await era.printAndWait([
        '작은 혀를 살짝 내민 채, ',
        ruby.get_colored_name(),
        '는 자신이 지금 얼마나 화끈하고 야한 표정을 짓고 있는지 전혀 자각하지 못하고 있었다.',
      ]);
      era.println();
      await era.printAndWait('두 입술이 틈새도 없이 거칠게 맞물렸다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 양손을 한데 모아 머리 위로 붙잡아 고정해, 그녀가 반항할 엄두도 내지 못하게 만들었다.',
      ]);
      await era.printAndWait([
        '남은 한 손으로는 자유롭게 ',
        ruby.get_colored_name(),
        '의 매끄러운 등줄기를 부드럽게 쓸어내렸고, ',
        ruby.get_colored_name(),
        '의 두 다리는 몰려오는 쾌감을 견디지 못하고 허공에서 무력하게 허우적거릴 뿐이었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 육체가 달콤한 신음과 함께 잘게 요동치며 위쪽으로 밀어 올려졌다. 마치 ',
        me.get_colored_name(),
        '과(와) 조금이라도 더 빈틈없이 밀착하고 싶어 하는 듯한 몸짓이었다.',
      ]);
      await ruby.say_and_wait(
        [r_call_m, '의 냄새…… 이상해요, 어째서 몸이 더 뜨거워지는지……'],
        true,
      );
      await ruby.say_and_wait('너무 난폭해……', true);
      await ruby.say_and_wait('하지만 어째서인지, 아랫배의 그 답답함이 가라앉는 듯한……?', true);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 간혹 ',
        ruby.get_colored_name(),
        '의 작은 입술을 놓아줄 때마다, 그녀는 음란하게도 신선한 공기를 허겁지겁 들이마셨다.',
      ]);
      await era.printAndWait(
        '감긴 두 눈이 서서히 뜨여질 때면, 산소 부족과 쾌감으로 인해 살짝 흰자위를 드러낸 눈부신 보랏빛 눈동자가 고스란히 노출되었다.',
      );
      await era.printAndWait([
        '몸이 위태롭게 허물어지며 떨릴 때마다, 타액이 ',
        ruby.get_colored_name(),
        '의 입꼬리를 타고 가느다랗게 흘러내렸다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 양손을 결박하고 있던 손이 이내 소녀의 등 뒤로 돌아가, 한 손으로는 등을 굳게 끌어안고 다른 한 손으로는 그녀의 풍만한 둔부를 번쩍 받쳐 올렸다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 신체가 완전히 ',
        me.get_colored_name(),
        '과(와) 하나로 밀착되었고, 이번에는 ',
        ruby.get_colored_name(),
        '쪽에서 먼저 ',
        me.get_colored_name(),
        '의 입술을 격렬하게 탐닉해 왔다.',
      ]);
      era.println();
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 수없이 이어지던 가냘픈 신음 소리는, 격렬하게 살덩이가 부딪히는 파음과 함께 어느 순간 뚝 끊겼다.',
      ]);
      await era.printAndWait([
        '물론, ',
        ruby.get_colored_name(),
        '의 자궁은 여전히 ',
        me.get_colored_name(),
        '이(가) 뿜어내는 뜨거운 정액으로 가득 채워지는 중이었다.',
      ]);
      await era.printAndWait([
        '마침내 육봉을 뽑아낸 ',
        me.get_colored_name(),
        '은(는) 침대 머리에 기댄 채, 한 손으로 머리를 지탱했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 제 아래에 누워있는 담당 우마무스메를 내려다보는 눈빛에는 이전에는 없었던 오만한 지배욕이 가득 차 있었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 제 눈앞에 당당히 솟아있는 육봉에 완전히 매료되어 있었고, 그 기특한 광경을 만족스럽게 바라보던 ',
        me.get_colored_name(),
        '은(는) 손을 뻗어 ',
        ruby.get_colored_name(),
        '의 머리를 부드럽게 쓰다듬어 주었다.',
      ]);
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      end_ero_and_train();
    }
  }

  async run(stage, extra_flag, event_object) {
    const pregnant_cache = era.get(`cflag:${this.id}:임신단계`),
      ret = super.run(stage, extra_flag, event_object);
    if (pregnant_cache === 1 << pregnant_stage_enum.no) {
      era.set(`cflag:${this.id}:임신단계`, 1 << pregnant_stage_enum.no);
    }
    return ret;
  }
};