const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const say_by_mother = require('#/event/edu/edu-events-85/say-by-mother');
const Love85UtilFuckBuddy = require('#/event/love/love-events-85/until-fuck-buddy');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love85UtilFuckBuddy {
  async 74(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[74](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('어머니의 소식', ruby);
    await ruby.print_and_wait([
      '그것은 어느 휴일에 일어난 이야기였다. ',
      ruby.get_colored_name(),
      '의 어머님께서 그녀에게 중대한 소식이 있다고 전해왔다.',
    ]);
    await ruby.print_and_wait(
      '화려한 일족의 우마무스메는 레이스 성적 외에도, 요구받는 또 다른 중책이 있었다.',
    );
    await ruby.print_and_wait('이를테면……');
    await ruby.print_and_wait('가능한 한 많은 우마무스메를 낳고 길러내어, 그 혈통을 후세로 이어 나가는 것.');
    await ruby.print_and_wait(
      '그러기 위해서는 하루라도 빨리 결혼해야만 했다. 아이를 갖도록 장려받는 것 또한 일족으로서는 지극히 당연한 도리였다.',
    );
    await ruby.print_and_wait(
      '설령 그것이 이른바 정략결혼이라 할지라도, 심지어 상대의 용모나 인품조차 미처 알지 못하는 상황일지라도.',
    );
    await ruby.print_and_wait([
      ruby.get_colored_name(),
      '에게 있어 일족이 엄선하여 정한 상대란, 애초부터 거절할 수 있는 선택지가 아니었다.',
    ]);
    await ruby.say_and_wait('어떤 남성인가요?');
    await ruby.print_and_wait('마음속 깊은 곳에 아직 저항감이 남아있어서였을까, 그녀는 자연스레 질문을 던졌다.');
    await say_by_passer_by_and_wait(
      '어머님',
      '무척이나 훌륭한 분이란다? 내가 독단으로 신청을 넣었는데, 상대 측에서도 꽤 고심하는 모양이더구나.',
    );
    await say_by_passer_by_and_wait(
      '어머님',
      '하지만 일족의 당주이자 너의 어머니로서, 나는 이것이 아주 훌륭한 혼인이 될 것이라 생각한단다.',
    );
    await ruby.print_and_wait(
      '혼인 생활은 필시 행복과는 거리가 멀 터였기에, 그토록 자부해 마지않던 일족의 피가 이 순간만큼은 더없이 원망스럽게 느껴졌다.',
    );
    await ruby.print_and_wait(
      '아름다운 결혼 생활을 동경해 본 적이 없다고 한다면 거짓말이리라. 수려하지 않아도 좋으니 다정하고 성실하며, 서로를 존중해 줄 수 있는 그런 남성……',
    );
    await ruby.print_and_wait([
      '문득, ',
      ruby.get_colored_name(),
      '의 머릿속에 ',
      callname,
      '의 얼굴이 스치고 지나갔다.',
    ]);
    await ruby.print_and_wait(
      '비록 처음에는 다소 미덥지 못한 구석도 있었으나, 결국은 자신의 지팡이가 되어주고, 자신을 이끌어주는 인도자의 등불이 되어준 사람.',
    );
    await ruby.print_and_wait([
      '자신이라는 원석이 가장 눈부신 광채를 발할 수 있도록 끊임없이 연마해 준 소중한 ',
      callname,
      '……',
    ]);
    await ruby.print_and_wait(['마음 깊이 사랑하는 ', callname, '.']);
    await ruby.print_and_wait([
      callname,
      '과 함께 보내온 시간은 이미 ',
      ruby.get_colored_name(),
      '에게 있어 가장 고귀한 기억으로 자리 잡고 있었다.',
    ]);
    await ruby.print_and_wait([
      '만약 선택의 자유가 허락된다면, ',
      ruby.get_colored_name(),
      '은(는) 반드시 ',
      callname,
      '의 곁에 머물고 싶었다.',
    ]);
    await ruby.print_and_wait('하지만, 가문의 명예를 더럽히는 불충한 행위는 결코 용납될 리 만무했다.');
    await ruby.print_and_wait([
      '그리고 정신을 차렸을 때, ',
      ruby.get_colored_name(),
      '는 이미 ',
      callname,
      '의 곁으로 발걸음을 옮긴 뒤였다.',
    ]);
    era.drawLine();
    await ruby.say_and_wait('단도직입적으로 말씀드리자면, 저, 다른 분과 결혼하게 되었어요.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 미처 입을 열기도 전에, ',
      ruby.get_colored_name(),
      '는 말을 이어 나갔다.',
    ]);
    await ruby.say_and_wait('조금 전 어머님께 제 혼사에 관한 이야기를 들었고, 받아들이기로 결정했습니다.');
    await ruby.say_and_wait(
      '화려한 일족의 우마무스메로서, 이 몸속에 가능한 한 많은 새로운 생명을 잉태하여 길러내야만 하니까요.',
    );
    await ruby.say_and_wait('하지만……');
    await ruby.say_and_wait('그저 아주 잠깐, 아주 잠시만이라도 좋으니…… 당신의 소유가 되고 싶어요……');
    await era.printAndWait('내내 억눌러왔던 애절한 마음이 끝내 흘러넘쳐, 눈물이 되어 툭툭 떨어졌다.');
    await era.printAndWait([me.get_colored_name(), '은(는)……']);
    era.printButton('「미안해, 그런 무책임한 짓은 내가 용납할 수 없어.」', 1);
    era.print('（피 묻은 쪽지 「아아아…… 루비…… 만약 내가 널 밀어내지 않았더라면……」）', {
      color: buff_colors[3],
      offset: 1,
      width: 23,
    });
    era.printButton('입을 맞춘다 (관계 진전)', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait('예상했던 답변이었음에도, 머리로 이해하는 것과 달리 가슴은 끊임없이 미어졌다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 비통한 표정을 지으며 고개를 푹 숙였다.',
      ]);
      await ruby.say_and_wait('당신께 이런 무리한 청을 드려 정말 송구합니다. 방금 한 말은 부디 잊어주세요.');
      await era.printAndWait([
        '그녀는 그대로 ',
        me.get_colored_name(),
        '의 트레이닝실을 빠져나갔다.',
      ]);
      await era.printAndWait([
        '집으로 돌아가는 차 안에서, ',
        ruby.get_colored_name(),
        '는 아주 오랜만에 어린아이처럼 서럽게 흐느껴 울었다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 당연히 알아채고 있었다. 담당이 그야말로 「제발 구해줘」라고 얼굴에 써 붙인 듯한 표정을 짓고 있었다는 것을.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 집사로부터 개인적인 메시지를 한 통 받았다.',
      ]);
      await era.printAndWait('메시지를 확인하겠습니까?');
      era.printButton('삭제한다 (관계 거부)', 1);
      era.print('【이 항목을 선택하면 모든 상황을 돌이킬 수 없게 됩니다! 세이브 데이터가 있는지 반드시 확인해 주십시오!】', {
        offset: 1,
        width: 23,
        color: buff_colors[3],
      });
      era.printButton('확인한다 (관계 진전)', 2);
      if ((await era.input()) === 1) {
        era.set('flag:강제배드엔딩', 85);
        return;
      } else {
        await ruby.used_to_say_and_wait('우리…… 약속했었죠…… 함께……');
        await ruby.used_to_say_and_wait('그러니까……');
        await ruby.used_to_say_and_wait('흑, 으윽……!');
        await ruby.used_to_say_and_wait('저의…… 소중한……');
        await ruby.used_to_say_and_wait('아아아……');
        await era.printAndWait('해야 할 일은 이미 마음 깊이 정해져 있었다.');
        era.printButton('「하기노 탑 레이디(루비의 어머니) 여사에게 전화를 건다.」', 1);
        await era.input();
        era.printButton('「따님을 제게 주십시오.」', 1);
        await era.input();
        await say_by_mother('……어머나 세상에, 텔레파시라도 통한 걸까요?');
        await say_by_mother('아니면…… 그 아이가 당신에게 무슨 말이라도 남긴 건가요?');
        await say_by_mother('하아……');
        await say_by_mother('저희 저택으로 한 번 와주셔야겠군요. 마중 나갈 다른 집사를 수배해 두겠습니다.');
        era.drawLine();
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 방으로 향하던 도중, ',
          me.get_colored_name(),
          '은(는) 그녀를 보살피던 전속 집사와 정면으로 마주쳤다.',
        ]);
        await era.printAndWait('집사 「아가씨를 잘 부탁드립니다.」');
        await era.printAndWait([me.get_colored_name(), '은(는) 묵묵히 고개를 끄덕였다.']);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 자신의 방 문턱에 나타난 ',
          me.get_colored_name(),
          '을(를) 보고는 도무지 믿기지 않는다는 눈빛을 보냈다.',
        ]);
        era.printButton('「들어가서 이야기해도 될까?」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '의 사랑스러운 담당은 고개를 푹 숙였지만, ',
          me.get_colored_name(),
          '은(는) 그녀가 아주 미세하게 고개를 끄덕이는 것을 용케 포착했다.',
        ]);
        await era.printAndWait([
          '방 안으로 들어섬과 동시에, ',
          me.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 가냘픈 손을 꼬옥 쥐었다.',
        ]);
        await era.printAndWait([
          me.get_couple_title(),
          '은 화려하고 커다란 침대 가장자리에 나란히 걸터앉았다.',
        ]);
        await era.printAndWait([
          '곁에서 잔뜩 긴장한 채 전전긍긍하고 있는 ',
          ruby.get_colored_name(),
          '를 보며, ',
          me.get_colored_name(),
          '은(는) 어쩔 수 없다는 듯 그녀를 품속으로 부드럽게 끌어안았다.',
        ]);
      }
    } else {
      await era.printAndWait([
        '오늘의 트레이닝실은 ',
        me.get_couple_title(),
        '이 격렬하게 땀방울을 흘리며 몸을 단련하는 밀실이 되었다.',
      ]);
    }
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '의 뜨거운 애무가 막을 올렸다.',
    ]);
    await era.printAndWait('용모가 수려하고 고결한 소녀의 머리칼이 헝클어지니, 오히려 자극적이고 유혹적인 정취가 묻어났다.');
    await era.printAndWait([
      '교복이 ',
      me.get_colored_name(),
      '에 의해 하나둘 풀어헤쳐졌고, 그 아래로 드넓은 백옥 같은 살결이 여과 없이 노출되었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 피부는 무척이나 가냘프고 부드러워서, 마치 갓 내려앉은 순백의 첫눈을 연상케 했다.',
    ]);
    await era.printAndWait([
      '비록 ',
      ruby.get_colored_name(),
      '의 체구 자체는 다소 가녀린 편에 속했으나, 그렇다고 ',
      me.get_colored_name(),
      '에게 나약해 보인다는 인상을 주지는 않았다.',
    ]);
    await era.printAndWait('상체에 걸친 레이스 브래지어는 훌륭하게 발육한 유방에 의해 터질 듯 팽팽하게 부풀어 올라 있었다.');
    await era.printAndWait(
      '드러난 부드러운 아랫배와 매끄러운 허리선 위에는 훈련의 산물인 선명한 11자 복근이 새겨져 있었다.',
    );
    await era.printAndWait([
      '그녀의 팔뚝은 가냘펐지만, ',
      me.get_colored_name(),
      '의 체계적인 지도 덕분에 유려하면서도 탄력 있는 근육미가 서려 있었다.',
    ]);
    await era.printAndWait([
      '그녀의 신체 부위 중에서도 ',
      me.get_colored_name(),
      '을(를) 가장 매료시킨 것은 바로 튼실한 허벅지였으며, 건강미 넘치는 힘 있는 곡선을 자아내고 있었다.',
    ]);
    await ruby.say_and_wait('으음…… 잠시만요. 문…… 안 잠겼어요.');
    era.printButton('「내 담당이 이렇게 사랑스러운데 어떻게 참겠어, 괜찮아.」', 1);
    await era.input();
    await ruby.say_and_wait('그렇게나 짜릿한 자극이 좋으신가요, 애·기·아·빠?');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 성기를 손으로 부드럽게 감싸 쥔 채, ',
      me.get_colored_name(),
      '의 귀두를 정면으로 바라보며 속삭였다.',
    ]);
    await era.printAndWait([
      '소녀의 뜨거운 숨결이 ',
      me.get_colored_name(),
      '의 남근에 고스란히 불어닥치며, ',
      me.get_colored_name(),
      '에게 찌릿찌릿하고 노근한 쾌감을 안겨주었다.',
    ]);
    await era.printAndWait([
      '무엇보다 ',
      me.get_colored_name(),
      '의 심장을 세차게 뒤흔든 것은, 다름 아닌 담당의 입에서 흘러나온 「애기아빠」라는 그 한마디였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 성기가 부드럽고 촉촉하게 젖은 그녀의 향기로운 입술 속으로 부드럽게 삼켜졌다.',
    ]);
    await era.printAndWait([
      '자신에게 완전히 도취해 있는 ',
      ruby.get_colored_name(),
      '의 가련한 자태를 내려다보며, ',
      me.get_colored_name(),
      '은(는) 순간 아득한 황홀경에 사로잡혔다.',
    ]);
    await era.printAndWait([
      '그녀는 이제 오직 ',
      me.get_colored_name(),
      '만의 소유였으며, 오직 ',
      me.get_colored_name(),
      ' 한 사람만이 이 아름다운 아내의 다채로운 색기를 독점할 특권을 누릴 수 있었다.',
    ]);
    begin_and_init_ero(0, 85);
    era.set('tcvar:0:발정', era.set('tcvar:85:발정', 1));
    const cache = era.get('abl:85:질구내성');
    era.set('abl:85:질구내성', 5);
    update_ero_status(85);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    if (era.get('talent:85:처녀')) {
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 하반신에서 풍겨오는 짙은 수컷의 체취를 연거푸 깊숙이 들이마셨다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 승부복 스커트 자락을 높이 걷어 올린 채, 입술로 꼬옥 물어 고정했다.',
      ]);
      await era.printAndWait(
        '그녀는 양손을 치마 밑 허벅지 사이로 뻗어, 흠뻑 젖어 든 봉긋한 음부 위로 하얀 실크 스타킹의 가랑이 부위를 거칠게 찢어내어 입구를 만들어냈다.',
      );
      await era.printAndWait('비액으로 얼룩진 레이스 끈 팬티를 그대로 옆으로 걷어치우자, 미성숙한 비소가 여과 없이 실체를 드러냈다.');
      await era.printAndWait(
        '백옥처럼 한 점 티 없는 음포와 도톰한 음순은 너무나 뽀얗고 연약해서, 마치 손가락으로 살짝 찌르기만 해도 푹 가라앉아 버릴 것만 같았다.',
      );
      await era.printAndWait(
        '그 중심부에는 자극을 받아 발기하여 고개를 내민 주홍빛 음핵과, 처녀 특유의 앵두 빛깔을 띤 선홍색 육봉선이 자리하고 있었다.',
      );
      await era.printAndWait('비소는 촉촉하게 젖어 든 비액을 서서히 밖으로 흘려보내고 있었다.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 가랑이 사이에 반쯤 무릎을 꿇은 채, 하얀 스타킹에 감싸인 둥글고 풍만한 엉덩이를 한껏 치켜 올렸다.',
      ]);
      await era.printAndWait([
        '왼손으로 소녀의 긴밀한 육순을 최대한 벌려 젖혔고, 오른손으로는 ',
        me.get_colored_name(),
        '의 핏줄이 흉포하게 불거진 육봉을 단단히 붙잡았다.',
      ]);
      await era.printAndWait(
        '귀두를 정확한 위치에 조준한 채, 비좁은 고기 동굴을 서서히 확장하며 정복의 여정을 개시했다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 몽롱한 신음을 흘리며, ',
        me.get_colored_name(),
        '이(가) 자신의 처녀를 빼앗아 가는 그 모든 과정을 한눈에 똑똑히 지켜보아 주기를 갈망했다. 이것이야말로 그녀가 태어나서 맞이할 가장 황홀한 기억이기 때문이었다.',
      ]);
      era.printButton('머리를 쓰다듬으며 위로한다.', 1);
      era.printButton('그녀를 꼬옥 끌어안는다.', 2);
      await era.input();
      await era.printAndWait(
        '허리를 내리누름과 동시에, 민감한 귀두는 이미 극치로 비좁고 뜨겁게 달아오른 질 내부로 힘겹게 진입하기 시작했다.',
      );
      await era.printAndWait(
        '강도 내부의 세밀하고 촘촘한 고기 주름들이 불규칙하게 꿈틀거렸고, 삽입이 진행됨에 따라 한 바퀴씩 조여들며 성기를 둥글게 집결시켰다.',
      );
      await era.printAndWait([
        '귀두가 겹겹이 맷돌질 당하듯 짓눌렸고, 비할 데 없는 압착과 착유감으로 인해 ',
        me.get_colored_name(),
        '은(는) 하마터면 그 자리에서 바로 사정해 버릴 뻔했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신도 모르게 허리를 움직이던 동작을 뚝 멈추었다.',
      ]);
      await era.printAndWait(
        '육봉이 소녀의 하반신을 잔인하게 가르며 짓이기고, 이윽고 작은 구멍 속으로 서서히 집어삼켜지는 광경을 묵묵히 응시했다.',
      );
      await era.printAndWait([
        '얼마 지나지 않아, ',
        me.get_colored_name(),
        '은(는) 무언가 가느다랗고 탄력 있는 부드러운 장벽에 가로막히는 감각을 느꼈다.',
      ]);
      await era.printAndWait([
        '지금 이 순간, ',
        ruby.get_colored_name(),
        '의 비소에서 성기를 그대로 빼낸다면, ',
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '의 관계는 예전의 평범한 관계로 되돌아갈 수 있을 터였다.',
      ]);
      await era.printAndWait('세속적인 윤리적 도덕관.');
      await era.printAndWait('음습한 정조 속에서 피어오르는 기묘한 희열.');
      await era.printAndWait('담당을 향한 극진한 애정.');
      await era.printAndWait('차라리 될 대로 되라는 식의 자포자기한 심정.');
      await era.printAndWait('이미 머리끝까지 차오른 성욕에 의해 완전히 박살 나 버린 이성.');
      era.printButton(`「${m_call_r}, 사랑해.」`, 1);
      era.printButton('「내가 평생 네 곁을 지켜줄게.」', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 화사하게 피어난 미간 사이로 순간 형용할 수 없는 행복의 색이 가득 번졌고, 가녀린 나체가 아래로 푹 내려앉았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 성기는 중학생 소녀의 처녀막을 가차 없이 찢어발겼고, ',
        me.get_colored_name(),
        '을(를) 모질게 옥죄어 오던 겹겹의 고기 고리들을 돌파하여, 마침내 비밀의 화원을 굳건히 수호하던 자궁구에 육중하게 맞부딪쳤다.',
      ]);
      await ruby.say_and_wait(['드디어…… ', callname, '과…… 너무 행복해요, 하으으……']);
      await era.printAndWait([
        '정신적인 충족감도 처녀가 파괴되는 극심한 고통만큼은 완전히 가려내지 못했기에, ',
        ruby.get_colored_name(),
        '의 아직 앳된 얼굴이 통증으로 인해 처절하게 일그러졌다.',
      ]);
      await era.printAndWait([
        '아름다운 ',
        ruby.get_colored_name(),
        '의 탁한 눈동자는 주체하지 못하고 위로 완전히 뒤집혀 흰자위만을 고스란히 드러냈고, 눈가에서는 눈물이 왈칵 배어 나왔다.',
      ]);
      await era.printAndWait(
        '유려한 속눈썹은 눈물로 흠뻑 젖어 들었고, 콧물과 타액이 본능적으로 흘러내려 도무지 제어가 되지 않았다.',
      );
      await era.printAndWait(
        '하얀 스타킹을 신은 두 발의 앙증맞은 발가락들이 끊임없이 말려 들어갔다 풀리기를 반복했으나, 통증은 조금도 가라앉지 않았다.',
      );
      await era.printAndWait(
        '처녀혈이 진득하게 섞여 든 비액이 하얀 실크 스타킹과 레이스 팬티를 옅은 벚꽃색으로 물들여 갔다.',
      );
      await era.printAndWait([me.get_colored_name(), '은(는) 가학적이고 변태적인 정복감에 휩싸였다.']);
      await era.printAndWait('찰나의 순간, 심신이 세차게 뒤흔들리는 와중에.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 지극히 좁은 소혈이 무시무시한 압력으로 성기를 꽉 물어왔고, 뒤이어 자궁구마저 성기를 빨아 당기듯 진득하게 흡착해 왔다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 척수가 짜릿하게 마비되는 것을 느꼈고, 산사태와도 같은 맹렬한 사정감이 척추를 타고 뇌수까지 단숨에 치받았다.',
      ]);
      await era.printAndWait(
        '막대한 양의 뜨거운 정액이 자궁구를 정면으로 강타하며 담당의 앳된 자궁 내부로 사정없이 뿜어져 들어갔다.',
      );
      await era.printAndWait([
        '훗날 ',
        me.get_couple_title(),
        '의 후손을 잉태해야 마땅할 그 신성하고 순결한 성역이, 지금 이 순간 ',
        me.get_colored_name(),
        '에 의해 완벽하게 유린당하고 더럽혀졌다.',
      ]);
      await ruby.say_and_wait('으응, 으으으으응————!!!');
      await era.printAndWait([
        '청초한 어린 암컷의 자궁은 상상을 초월할 만큼 민감했기에, ',
        me.get_colored_name(),
        '의 비린내 나는 정액이 정면으로 쏟아질 때마다, ',
        ruby.get_colored_name(),
        '는 눈을 완전히 뒤집은 채 스커트 자락을 이빨로 바득바득 깨물었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 비강에서 길고 애달픈 신음이 터져 나왔고, 허리가 활처럼 극한까지 휘어졌다.',
      ]);
      await era.printAndWait([
        '승부복 속에 감춰진 가냘픈 나체가 격렬하게 경련하고 발작하며, ',
        me.get_colored_name(),
        '과(와) 함께 동시에 격정적인 절정에 도달했다.',
      ]);
      await era.printAndWait([
        '따스하게 데워진 처녀의 애액이 폭포수처럼 쏟아지며 ',
        me.get_colored_name(),
        '의 고단한 남근을 세차게 씻어 내렸다.',
      ]);
      await era.printAndWait([
        '수십 초가 지난 뒤, ',
        ruby.get_colored_name(),
        '는 완전히 탈진하여 ',
        me.get_colored_name(),
        '의 가슴팍 위로 풀썩 쓰러졌다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 눈물과 콧물로 범벅이 된 수려한 얼굴 위에는, 멍하니 황홀감에 젖은 색기 어린 미소가 어려 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 사정 후에도 전혀 시들지 않은 거대한 성기는 여전히 팽팽한 소혈 내부를 빈틈없이 가득 메우고 있었다.',
      ]);
      await era.printAndWait([
        '연약한 자궁경부가 ',
        me.get_couple_title(),
        '의 호흡에 맞추어 ',
        me.get_colored_name(),
        '의 귀두 위를 지긋이 문지르며, ',
        me.get_colored_name(),
        '에게 감전된 듯 짜릿한 촉감을 선사했다.',
      ]);
      await ruby.say_and_wait([callname, '…… 저에게 환멸하셨나요?']);
      await era.printAndWait([
        '설령 미숙한 ',
        me.get_colored_name(),
        '(이)라 할지라도, 방금 막 처녀성을 상실한 소녀가 무척이나 감수성이 깊어진다는 것쯤은 잘 알고 있었다.',
      ]);
      era.printButton(
        `「그럴 리가! 평소의 ${m_call_r}도, 이렇게 음란한 ${m_call_r}도 난 전부 세상에서 가장 사랑해.」`,
        1,
      );
      era.printButton('「우리 함께 지옥까지 떨어지자.」', 2);
      await era.input();
      await end_ero_and_train();
    } else {
      await print_ero_page(85);
      await end_ero_and_show_result(true);
    }
    era.set('abl:85:질구내성', cache);
    era.drawLine();
    await era.printAndWait([
      '구름이 걷히고 비가 멎자, ',
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 품에 깊숙이 안긴 채, 가느다란 손가락으로 ',
      me.get_colored_name(),
      '의 가슴팍을 부드럽게 문지르고 쿡쿡 찌르며 장난을 쳤다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 살짝 들어, 눈동자 속에 장난스러우면서도 묘한 색기가 서린 음란한 신색을 담아냈다.',
    ]);
    await ruby.say_and_wait('저, 당신의 아이를 낳아드릴 수도 있어요……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 당연히 다 잡은 꼬마를 놓아줄 생각이 없었기에, ',
      ruby.get_colored_name(),
      '의 발기하여 붉게 도드라진 가슴의 젖꼭지를 부드럽게 꼬집었다.',
    ]);
    era.printButton('「쓸데없는 생각 하지 마, 난 널 절대 다른 남자에게 시집보내지 않아.」', 1);
    await era.input();
    await me.say_and_wait('그게 그 누구가 되었든 간에……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 심장이 크게 요동쳤다. 방금 ',
      me.get_colored_name(),
      '의 말은 확고한 진심임이 분명했고, ',
      me.get_colored_name(),
      ' 역시 이런 말의 의미를 너무나도 잘 알고 있을 것이기 때문이다.',
    ]);
    era.printButton(
      `「그렇게 겁먹을 필요 없어, 나도 ${m_call_r}와 ${m_call_r} 어머님의 입장이 어떤지 잘 아니까.」`,
      1,
    );
    await era.input();
    era.printButton(
      `「결혼에 관한 문제는 내가 직접 소통해볼 테니, ${m_call_r}는 그저 본연의 임무에만 집중하면 돼.」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      callname,
      '…… 고마워요. 당신에게 그런 말을 들으니, 마음이 한결 가벼워지는군요……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '며칠 뒤 주말이 찾아왔고, 약혼 상대와 대면하기 위해 ',
      ruby.get_colored_name(),
      '는 모 호텔로 발걸음을 옮겼다.',
    ]);
    await era.printAndWait('최근 며칠간 내내 눈물로 밤을 지새운 탓인지, 그녀의 안색은 다소 가라앉아 있었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 약속된 방으로 들어서는 ',
      ruby.get_colored_name(),
      '를 정면으로 응시했다.',
    ]);
    era.printButton('「처음 뵙겠습니다, 다이이치 루비 영애.」', 1);
    await era.input();
    await ruby.say_and_wait(['어째서, ', callname, '이 이곳에 있는 건가요……?']);
    await say_by_mother('실로 감회가 새롭구나, 루비. 이 광경은 정말이지 기시감이 드는구나.');
    await era.printAndWait([
      '어머님은 이미 ',
      ruby.get_colored_name(),
      '가 자신의 전속 트레이너에게 품고 있는 깊은 연정을 전작부터 파악하고 계셨던 모양이다.',
    ]);
    await era.printAndWait([
      '게다가 할머니와 어머니의 트레이너를 지내던 남성이 은퇴한 지금, 일족으로서는 ',
      me.get_colored_name(),
      '과(와) 같은 우수한 인재를 순순히 놓아줄 리 만무했다.',
    ]);
    await say_by_mother('미리 자세히 일러두지 않아서 정말 미안하구나.');
    await era.printAndWait([
      '어머님의 다정한 사과의 말씀에, ',
      ruby.get_colored_name(),
      '는 도저히 화를 낼 수가 없었다.',
    ]);
    await era.printAndWait(
      '일족이 직면한 정재계의 막중한 압박 속에서도, 딸의 행복을 최우선 순위에 두었다는 것 자체가 대단한 각오 없이는 불가능한 일임을 알기 때문이었다.',
    );
    await ruby.say_and_wait('제가 이토록 당신을 경외하고 따르는데, 제게 일절 언질도 주지 않으시다니요.');
    await era.printAndWait([
      '달콤한 숨결을 토해내며, ',
      ruby.get_colored_name(),
      '는 와락 안겨들었다.',
    ]);
    await era.printAndWait([
      '우마무스메 특유의 무지막지한 괴력을 고려했을 때, 설령 미래의 장모가 곁에서 흥미진진한 눈빛으로 지켜보고 있다 한들, ',
      me.get_colored_name(),
      '은(는) 저항을 완전히 포기하기로 했다.',
    ]);
    era.printButton(
      '「제가 화려한 일족의 후계자의 남편이 되겠습니다. 당신의 일생은, 제가 책임지겠습니다.」',
      1,
    );
    await era.input();
    await sys_love_uma_in_event(85);
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async date(ruby, me) {
    await print_event_name('데이트', ruby);
    await era.printAndWait('집사 「실례하겠습니다, 트레이너님.」');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 전속 집사가 ',
      me.get_colored_name(),
      '의 트레이닝실을 방문했다. 방문한 목적은 필시 ',
      ruby.get_colored_name(),
      '와 관련된 일이리라.',
    ]);
    await era.printAndWait('집사 「아가씨께서 저택의 프라이빗 수영장에서 수영을 즐기고 계십니다. 제가 그곳으로 모시겠습니다.」');
    await era.printAndWait([
      '집사가 방을 나선 뒤, ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '를 조교할 때 사용하는 전용 도구들을 스포츠 가방에 남김없이 챙겨 넣고는 그 뒤를 따랐다.',
    ]);
    await era.printAndWait([
      '은은한 달빛이 내리쬐는 야외 루프탑 수영장 안에서, ',
      ruby.get_colored_name(),
      '는 마치 한 마리의 매혹적인 인어와도 같은 자태로 유유히 헤엄치고 있었다.',
    ]);
    era.printButton('「이 밤늦은 시각까지 훈련이라니 고생이 많네.」', 1);
    await era.input();
    await ruby.say_and_wait('과분한 말씀이셔요. 그래서, 절 데리러 오신 건가요?');
    era.printButton('「아니, 너한테 좀 할 이야기가 있어서 말이지.」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), '은(는) 스포츠 가방을 내려놓고 수영장 가장자리에 걸터앉았다.']);
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 물속에서 얼굴을 내밀며 ',
      me.get_colored_name(),
      '의 곁으로 다가왔을 때, 그녀의 풍만한 가슴골이 단숨에 시야에 가득 들어왔다.',
    ]);
    await era.printAndWait('남근이 본능적인 번식 욕구에 지배당해, 자신도 모르는 사이에 딱딱하게 발기했다.');
    await ruby.say_and_wait('하지만 아주 유감스럽게도, 전 갑자기 수영을 더 하고 싶어졌는걸요.');
    await ruby.say_and_wait('만약 저와 대화를 나누고 싶으시다면, 이쪽으로 들어오셔요……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '를 향해 부드러운 손길을 내밀었다.',
    ]);
    await ruby.say_and_wait('지금 이곳에는 오직 당신과 저뿐이니, 전 당신의 알몸 따윈 개의치 않아요.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 목전에서 옷을 전부 거침없이 벗어던져, 반쯤 발기한 성기를 고스란히 노출시켰다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 얼굴이 방금 전까지의 여유롭던 표정에서, 자신이 강인한 수컷에게 완전히 굴복당하기 직전의 가련한 암컷의 표정으로 급변하는 바로 그 순간.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 육봉 위로 굵직한 혈관과 청진이 흉포하게 도드라졌다.',
    ]);
    await era.printAndWait(
      '그리고 일부러 하반신을 음란하게 들썩이며 수영장 물속으로 뛰어들어, 눈앞에 대령한 풍만한 엉덩이 살덩이를 왁살스럽게 움켜쥐었다.',
    );
    await era.printAndWait([
      '완전히 발기한 성기를 그녀의 배꼽 밑에 거칠게 밀착시킨 채, 폭압적으로 ',
      ruby.get_colored_name(),
      '의 입술을 빼앗았다.',
    ]);
    await era.printAndWait([
      '강제로 ',
      ruby.get_colored_name(),
      '의 입안을 비집어 열고는, 혀뿌리로 구강 내부를 무참히 짓밟고 유린했다.',
    ]);
    await era.printAndWait('한 치의 여지도 남기지 않고 구석구석 핥아 내리며, 혀끝에 고인 은밀한 타액을 남김없이 빨아 당겼다.');
    await era.printAndWait('이어 그녀의 혀를 자신의 입안으로 깊숙이 끌어들여, 서로 격렬하게 얽히며 진득한 웅덩이를 교환했다.');
    await era.printAndWait([
      '마치 실제 성교를 나누는 듯 농밀하고 격정적인 키스가 끝났을 때, ',
      ruby.get_colored_name(),
      '의 고결한 여유는 이미 흔적도 없이 박살 나 있었다.',
    ]);
    await ruby.say_and_wait('너무해요……');
    era.printButton('「자, 그럼 이제 다음엔 뭘 해줄까?」', 1);
    await era.input();
    await ruby.say_and_wait('제 말을 좀 들어주셔요……');
    era.printButton('「네가 솔직하게 불지 않으면, 난 아무것도 모른다고?」', 1);
    await era.input();
    await ruby.say_and_wait('부디, 부드럽게 해주세요……');
    await era.printAndWait('그렇게 속삭이며, 그녀는 수영장 물가에서 기어 올라와 양손을 차가운 벽면에 짚었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그녀의 젖은 수영복을 옆으로 젖혀버리고는, 은밀한 애무를 개시했다.',
    ]);
    await era.printAndWait('손가락 끝으로 최소한의 음모조차 정갈하게 제모하고 관리된 암컷의 비소를 매끄럽게 애무했다.');
    await era.printAndWait('비록 손길 자체는 지극히 부드러웠으나, 밀착해 오는 거대한 성기의 존재감만큼은 그 자체로 흉포하기 짝이 없었다.');
    era.printButton('「아주 상스러운 소리를 내네, 화려한 일족은 품위 유지가 불가능하 거야?」', 1);
    era.printButton('「이래서야 우마무스메라기보단, 발정 난 암컷이라고 부르는 게 훨씬 어울리겠어.」', 2);
    await era.input();
    await ruby.say_and_wait('그건 전부 당신이……');
    era.printButton('「지금 그게 내 탓이라고 우기는 거야?」', 1);
    era.printButton(
      '「암컷이라고 불리는 주제에, 보지에서 액을 줄줄 흘려대며 뿜어대다니. 정말 천박한 암컷이네.」',
      2,
    );
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 한 손의 손가락들을 ',
      ruby.get_colored_name(),
      '의 항문 속으로 사정없이 쑤셔 박아 처넣으며, ',
      ruby.get_colored_name(),
      '의 허리를 강제로 높이 치켜들게 만들었다.',
    ]);
    await era.printAndWait('다른 한 손으로는 고귀한 일족의 잘 여문 엉덩이를 철썩철썩 방자하게 후려쳤다.');
    await era.printAndWait([
      '숨겨진 피학증이 극치로 자극당해서였을까, ',
      ruby.get_colored_name(),
      '는 신체를 거칠게 비틀며, 바닥 위로 막대한 양의 분수를 성대하게 뿜어냈다.',
    ]);
    await ruby.say_and_wait('아윽…… 저, 인정할게요.');
    await ruby.say_and_wait('저는, 당신의 암컷이에요.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 손을 ',
      ruby.get_colored_name(),
      '의 엉덩이에서 가차 없이 떼어내자, 그녀의 자세는 그 자리에서 무참히 무너져 내렸다.',
    ]);
    await era.printAndWait('격렬한 분출의 나른한 여운에 푹 침전된 채, 그녀는 간헐적으로 상스러운 신음을 흘려댔다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 스포츠 가방에서 줄이 길게 늘어진 가죽 개목줄을 꺼내어, ',
      ruby.get_colored_name(),
      '의 고결한 목덜미에 단단히 채워 넣었다.',
    ]);
    await era.printAndWait('이로써 완벽한 암컷의 형상을 띠게 되었으나, 아직 어딘가 부자연스럽고 불완전한 구석이 남아있었다.');
    await ruby.say_and_wait('다, 당신, 대체 뭘 더 하실 생각인가요?');
    await era.printAndWait('과연 어디가 부조화스러운 것일까?');
    era.printButton('그녀는 지금 당장 나에게 짓눌린 채, 자궁 깊숙이 씨앗이 주입되기를 갈망하고 있다.', 1);
    era.printButton('「옷을 입고 있는 암컷이 세상에 어디 있어.」', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '에게 당장 걸치고 있는 모든 수영복을 벗어 던지라고 명령했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 표정에 일순 반발심이 서렸으나, ',
      me.get_colored_name(),
      '이(가) 거대한 육봉으로 그녀의 뺨을 찰싹찰싹 몇 차례 후려치자, 그녀의 손놀림은 이내 무시무시하게 빨라졌다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 발밑에는 이미 그녀의 비소에서 뿜어져 나온 암컷의 진득한 액으로 커다란 웅덩이가 형성되어 있었다.',
    ]);
    await era.printAndWait('그녀는 바닥에 주저앉아 두 다리를 활짝 벌린 채, 매끄러운 겨드랑이를 고스란히 노출하는 상스러운 엠자 쪼그려 앉기 자세를 취했다.');
    await era.printAndWait('이어 입을 벌려 분홍빛 혀를 길게 내밀고는, 하아하아 가느다란 가쁜 숨을 내쉬었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 거대한 성기를 ',
      ruby.get_colored_name(),
      '의 목구멍 깊숙한 내부까지 사정없이 밀어 넣었고, 그녀의 얼굴에는 구역질을 참지 못하는 극심한 고통의 신색이 역력히 비쳤다.',
    ]);
    await era.printAndWait(
      '혀와 식도가 거칠게 침범당하는 끔찍한 가학을 고스란히 감내하면서도, 그녀는 어떻게든 성심성의껏 수컷을 모시며 정액을 짜내기 위해 필사적으로 입굴을 움직였다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 제멋대로 ',
      ruby.get_colored_name(),
      '의 머리채를 무자비하게 움켜쥔 채, 허리를 격렬하게 몰아붙였다.',
    ]);
    await era.printAndWait([
      '육봉의 뿌리 끝까지 목구멍 속에 완전히 박아 넣었음에도, ',
      ruby.get_colored_name(),
      '는 양 뺨이 푹 꺼질 정도로 필사적이고 진지하게 구강 성교에 임했다.',
    ]);
    await era.printAndWait('사정한다!');
    await era.printAndWait(
      '목구멍 가장 깊숙한 성역에서 정액을 사출하자, 그녀가 원하든 원치 않든 막대한 양의 정액이 식도를 타고 위장 내부로 다이렉트로 주입되었다.',
    );
    await era.printAndWait([
      '사정이 완전히 끝났을 때, ',
      ruby.get_colored_name(),
      '의 위장은 마치 정액을 가득 채워 넣은 콘돔처럼 팽팽하게 부풀어 올랐다.',
    ]);
    await era.printAndWait('외부에서 육안으로 바라보아도, 그녀의 아랫배가 확연하게 볼록 튀어나와 있었다.');
    await ruby.say_and_wait('당신…… 이제야, 만족하셨나요?');
    await era.printAndWait([me.get_colored_name(), '은(는) 이 가련한 담당을 밤새도록 무참히 침범하고 유린했다.']);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.abuse),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }
};