/**
 * @file H事件 - 孕袋职责之惩戒
 * @author 幽白書
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { run_custom_ero } = require('#/event/ero/ero-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

async function punish_pregnant_slave() {
  const me = get_chara_talk(0),
    my_marks = new MyEduMarks();
  if (era.get('flag:징벌강도') === 3) {
    if (era.get('cflag:0:임신단계') === 1 << pregnant_stage_enum.no) {
      my_marks.not_pregnant++;
    } else {
      my_marks.not_pregnant = 0;
    }
    const src_chara = era.get('cflag:0:템플릿캐릭터');
    if (
      era.get('cflag:0:위치') === 0 &&
      era.get('flag:현재위치') !== location_enum.basement &&
      my_marks.not_pregnant >= get_random_value(1, 3)
    ) {
      const cache = era.get('status:0:우마뾰이S');
      era.set('status:0:우마뾰이S', 1);
      const uma_sex_title = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
      era.drawLine();
      await print_event_name(
        [{ content: '임신주머니 직무의 징벌', color: buff_colors[3] }],
        me,
      );
      let rape_list;
      if (!my_marks.p_slave_punish) {
        my_marks.p_slave_punish = 1;
        const yayoi = get_chara_talk(302),
          tazuna = get_chara_talk(301);
        // 횟수=1
        await me.say_and_wait(['으으……윽……으아……']);
        era.println();
        await era.printAndWait(['트레센 학원 내에는, 평소에 늘 사람의 발길이 닿지 않는 곳이 있다.']);
        await era.printAndWait(['건초더미가 가득 쌓여 있고, 울타리로 둘러싸인 어느 한구석.']);
        await era.printAndWait([
          '무언가 동물을 기르기 위한 장소처럼 보이지만, 정작 이곳에서 생물이 활동한 흔적은 한 번도 보이지 않았다.',
        ]);
        await era.printAndWait(['이곳은 무얼 하는 곳일까?']);
        await era.printAndWait([me.get_colored_name(), '도 한때 의문을 품은 적이 있었다.']);
        era.println();
        await era.printAndWait([
          '이제야, ',
          me.get_colored_name(),
          '은(는) 이곳이 도대체 무얼 하는 장소인지 확실히 알게 되었다.',
        ]);
        era.println();
        await yayoi.say_as_unknown_and_wait([
          '징벌! 임신주머니로서 책무를 회피하다니, 엄벌에 처해야 마땅하네!',
        ]);
        await tazuna.say_as_unknown_and_wait([
          '본래 임신주머니가 되는 것 자체가 가장 무거운 형벌이었습니다만…… 트레센과 ',
          uma_sex_title,
          '의 미래를 위해 이바지하는 동시에, 트레이너 씨가 자신의 잘못을 깊이 반성하기를 바랐건만. 아무래도 아직 약효가 부족했던 모양이네요.',
        ]);
        era.println();
        await era.printAndWait(['두 사람의 말이 끝나기 무섭게,']);
        await era.printAndWait([
          me.get_colored_name(),
          '의, 이미 두 사람에게 먼저 유린당해 하얀 정액이 졸졸 흘러내리는 붉게 부어오른 보지는 새로운 손님을 맞이했다.',
        ]);
        await era.printAndWait([
          '안대와 재갈이 채워진 ',
          me.get_colored_name(),
          '은(는) 들어온 이가 누구인지 알 길이 없었다.',
        ]);
        await era.printAndWait([
          '목소리라도 들으려 애써보지만, 노이즈 캔슬링 헤드폰으로 막혀버린 두 귀로는 설령 ',
          uma_sex_title,
          '의 그 뛰어난 청력이라 할지라도 체내에서 울리는 소리밖에 들을 수 없었다.',
        ]);
        era.println();
        await era.printAndWait(['쮸웁…… 쨔읍……']);
        era.println();
        await era.printAndWait(['끈적하게 얽히는 육체의 충돌음,']);
        await era.printAndWait([
          '그리고 마치 등 뒤의 육봉이 떠나가는 것을 아쉬워하는 듯한, 질 입구가 빨아당기는 입맞춤 소리.',
        ]);
        await era.printAndWait([
          '그 살을 빠는 소리가 어찌나 크게 울리는지 ',
          me.get_colored_name(),
          '은(는) 이 육봉이야말로 자신의 몸의 지배자가 아닐까 하는 착각마저 들었다. ———그리 이상할 것도 없었다. 오늘 밤 제 몸속으로 육봉이 밀려 들어올 때마다 ',
          me.get_colored_name(),
          '은(는) 줄곧 그런 생각을 품었으니까.',
        ]);
        era.println();
        await era.printAndWait(['철퍽…… 철퍽……']);
        era.println();
        await era.printAndWait(['모든 방어는 언젠가 무너지기 마련이다.']);
        await era.printAndWait([
          '그렇다면, 방어란 오직 파괴되기 위해 존재한다는 등식도 대개 성립하는 셈이다.',
        ]);
        await era.printAndWait([
          '그러므로 내숭을 떨며 굳게 닫혀 있던 좁은 보지는, 분명 ',
          uma_sex_title,
          '님의 웅장한 육봉에 정복감을 선사하기 위해 일부러 차갑게 굴었던 것이 틀림없다. 육봉 님이 닿는 순간 기다렸다는 듯 착 달라붙어 정숙한 여인에서 음탕한 암캐로 완벽하게 돌변하는 모습과, 조여들 때마다 새어 나오는 살소리는 그 자체로 이 몸의 주인이 품은 진심을 대변하고 있었다.',
        ]);
        await era.printAndWait([
          '속으로는 임신하고 싶어서, 미치도록 임신하고 싶어서 안달이 났으면서. 겉으로는 짐짓 고결한 트레이너인 척 내숭을 떨었던 것은, 오직 ',
          uma_sex_title,
          '님이 자신을 탐하실 때 한층 더 짜릿한 정서적 충족감을 만끽하게 해드리기 위함이었을 터.',
        ]);
        await era.printAndWait([
          '정작 그 때문에 ',
          uma_sex_title,
          '님의 정액으로 더럽혀질 기회를, ',
          uma_sex_title,
          '님에게 자신이 얼마나 가련하고 비천한 암컷인지 뼈저리게 교육받을 기회를 놓쳐버리다니, 이 얼마나 어리석은 손실이란 말인가.',
        ]);
        era.println();
        await era.printAndWait([
          '다행히도, 자비로우신 ',
          uma_sex_title,
          '님께서는 어리석은 임신주머니에게 다시금 기회를 베풀어 주신다.',
        ]);
        era.println();
        await era.printAndWait(['쿵, 쿵…… 콕, 콕……']);
        era.println();
        await era.printAndWait([
          '자궁경부를 정중하게 두드리는 육봉은, 마지막 관문이 스스로 무너지기를 느긋하게 기다리고 있다.',
        ]);
        await era.printAndWait([
          '온몸의 모든 장기, 모든 조직, 모든 세포가 이미 철저하게 굴복해 버린 지금.',
        ]);
        await era.printAndWait([
          '지금의 충돌음은 최후의 방어선을 뚫기 위한 돌격이라기보다, 그저 형식적인 문노크에 가까웠다.',
        ]);
        await era.printAndWait([
          '저항? 임신주머니의 육체가 어떻게 감히 ',
          uma_sex_title,
          '님의 침범에 저항할 수 있겠는가? 그것은 이미 유전자 깊은 곳에 각인된 절대적인 법칙이다.',
        ]);
        era.println();
        await era.printAndWait(['마침내, 가장 기다려온 소리가 찾아온다.']);
        await era.printAndWait([
          '아아, ',
          me.get_colored_name(),
          '은(는) 자신도 모르게 다리를 더욱 넓게 벌렸다.',
        ]);
        await era.printAndWait([
          '어느샌가 ',
          me.get_colored_name(),
          '을(는) 교배대에 결박하고 있던 가죽 벨트가 풀려 있었다.',
        ]);
        await era.printAndWait(['애초에 이런 구속 벨트 따위는 아무런 의미가 없었다.']);
        await era.printAndWait([
          '세상에 어떤 임신주머니가 감히 ',
          uma_sex_title,
          '님의 육봉에 반항하겠는가?',
        ]);
        await era.printAndWait([
          '어떤 임신주머니가 감히 ',
          uma_sex_title,
          '님의 하사품을 거부하겠는가?',
        ]);
        era.println();
        await era.printAndWait([
          '드디어, 레이스를 달릴 때보다 훨씬 더 심장이 요동치고, 첫사랑보다 더 격렬하게 마음을 뒤흔드는,',
        ]);
        await era.printAndWait([uma_sex_title, '님의 유린이 대단원의 막을 내리려 하고 있다.']);
        era.println();
        await era.printAndWait(['퓨퓻…… 푸루루루룹……']);
        era.println();
        await era.printAndWait(['온다.']);
        await era.printAndWait(['바로 이것이다.']);
        await era.printAndWait([me.get_colored_name(), '은(는) 가슴 깊이 확신했다.']);
        await era.printAndWait(['이것이야말로 자신의 자궁 속으로 들어가,']);
        await era.printAndWait(['원래 그곳의 주인이었던 난자를 철저히 굴복시키고,']);
        await era.printAndWait([
          '납작 엎드려 절하고, 발을 핥으며, 모체의 모든 것을 바쳐서라도 아첨해야 마땅할 ',
          uma_sex_title,
          '님의 고귀한 교배 정액이다.',
        ]);
        await era.printAndWait(['정액이 끊임없이 울컥울컥 뿜어져 나와,']);
        await era.printAndWait([
          '유린하고, 침범당하는 ',
          me.get_colored_name(),
          '의 몸 구석구석을 짓밟는다.',
        ]);
        await era.printAndWait(['이것이 바로 임신주머니로서 누리는 최상의 행복이구나.']);
        era.println();
        era.println();
        await era.printAndWait(['——————']);
        era.println();
        await era.printAndWait(['안타깝게도, 즐거운 시간은 영원히 지속되지 않는다.']);
        await era.printAndWait(['아무리 길고 격렬한 사정이라도 끝은 있는 법.']);
        await era.printAndWait([
          '여전히 절정과 수태의 기쁨에 도취해 있는 고작 쓰레기 같은 임신주머니의 뇌보다도, 육봉 님과 직접 맞닿아 있는 질벽이 훨씬 더 조급하게 기둥을 감싸 쥐며 제발 떠나지 말아 달라고 애원하고 있었다.',
        ]);
        await era.printAndWait(['아니, 적어도…… 상대의 형상만이라도 기억해 두고 싶어서.']);
        await era.printAndWait([
          '…………설령 그것이, 단 5초 뒤 다음 육봉이 사정없이 꽂혀 들어올 때 허망하게 지워질 기억일지라도.',
        ]);
        rape_list = [
          301,
          302,
          ...gacha(
            sys_filter_chara('cflag', '모집상태', recruit_flags.no).filter(
              (cid) =>
                ((cid > 0 && cid < 200) ||
                  (cid >= 301 && cid <= 306) ||
                  cid === 400) &&
                cid !== src_chara &&
                era.get(`cflag:${cid}:성장단계`) >= 2 &&
                era.get(`cflag:${cid}:종족`) > 0 &&
                era.get(`cflag:${cid}:위치`) === 0,
            ),
            get_random_value(6, 8),
          ),
        ];
        rape_list.forEach((e) => {
          if (era.get(`cflag:${e}:성별`) === 0) {
            era.set(`status:${e}:펄롱P`, 1);
          }
        });
        begin_and_init_ero(0, ...rape_list);
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.gag,
          part: part_enum.mouth,
          attacker: 302,
          defender: 0,
          shown: false,
        });
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.blindfold,
          part: 99,
          attacker: 301,
          defender: 0,
          shown: false,
        });
      } else {
        let base_list = sys_filter_chara(
          'cflag',
          '모집상태',
          recruit_flags.yes,
        ).filter(
          (cid) =>
            ((cid > 0 && cid < 200) || cid === 400) &&
            era.get(`cflag:${cid}:성장단계`) >= 2 &&
            era.get(`cflag:${cid}:종족`) > 0 &&
            era.get(`cflag:${cid}:위치`) === 0,
        );
        const is_teammate = base_list.length > 0;
        if (base_list.length < 8) {
          base_list.push(
            ...gacha(
              sys_filter_chara('cflag', '모집상태', recruit_flags.no).filter(
                (cid) =>
                  ((cid > 0 && cid < 200) || cid === 400) &&
                  cid !== src_chara &&
                  era.get(`cflag:${cid}:성장단계`) >= 2 &&
                  era.get(`cflag:${cid}:종족`) > 0 &&
                  era.get(`cflag:${cid}:위치`) === 0,
              ),
              8 - base_list.length,
            ),
          );
        }
        await era.printAndWait(['쮸웁…… 쨔읍……']);
        era.println();
        await era.printAndWait(['또다시 깊어가는 밤, 익숙한 장소로 돌아왔다.']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 다시 한번 안대와 재갈을 착용했고, 익숙한 밤의 막이 또다시 올랐다.',
        ]);
        await era.printAndWait([
          '임신주머니로서의 의무와 책임을 계속 회피하면 또다시 이곳으로 끌려오게 된다는 걸 뻔히 알면서도,',
        ]);
        await era.printAndWait([
          '자신의 담당은 물론이고 학원의 학생들과 교사들까지도 기꺼이 ',
          me.get_colored_name(),
          '에게 기꺼이 그 「사소한 도움」을 줄 용의가 충만했을 텐데도.',
        ]);
        await era.printAndWait([
          '그 단계에서 멈추었더라면 적어도 제 아이의 아버지가 누가 될지 스스로 선택할 기회라도 있었을 텐데.',
        ]);
        await era.printAndWait([
          '그러니 굳이 이 막다른 길을 자처한 ',
          me.get_colored_name(),
          '의 목적은 보나 마나 뻔하지 않은가.',
        ]);
        await era.printAndWait([
          '그날의 질퍽했던 정사를 잊지 못해서, 자신의 모든 것이 타인에게 완벽히 지배당하던 그 쾌감을 잊지 못해서.',
        ]);
        await era.printAndWait(['그저 순수한 성욕 처리 도구로 전락해 버리던 그 감각을 잊지 못하는 것이다.']);
        era.println();
        await era.printAndWait(['구뉵']);
        await era.printAndWait([
          '묵직하게 짓눌러오는 고통과 그보다 더한 쾌감이 유두를 통해 ',
          me.get_colored_name(),
          '의 뇌리로 사정없이 흘러들었다. 앗, 안 되지. 봉사하는 도중에 딴청을 피우다니?',
        ]);
        if (is_teammate) {
          await era.printAndWait([
            '그러나 등 뒤에서 박아대는 ',
            uma_sex_title,
            '님의 육봉은 어째선지 ',
            me.get_colored_name(),
            '에게 묘하게 익숙한 감각을 선사했다.',
          ]);
          await era.printAndWait([
            '보통이라면 별문제가 되지 않을 터였다. 어차피 임신주머니 신세인 만큼 학원의 모든 ',
            uma_sex_title,
            '가 자신을 마음껏 탐했을 테니까.',
          ]);
          await era.printAndWait(['하지만…… 이 지독하리만치 친숙한 촉감은,']);
          await era.printAndWait([
            '설마, 등 뒤의 ',
            uma_sex_title,
            '가 다름 아닌 자신의 담당인 것인가?',
          ]);
          await era.printAndWait(['서로 신분을 완전히 숨긴 채, 오직 육체만으로 담당에게 유린당한다.']);
          await era.printAndWait([
            '어째선지 ',
            me.get_colored_name(),
            '은(는) 마치 현장에서 간통을 들킨 것마저 같은 짜릿한 긴장감…… 그리고 주체할 수 없는 흥분에 휩싸였다.',
          ]);
          await era.printAndWait(['분명 엄청나게 화가 났겠지, 머리끝까지 분노가 치밀었겠지,']);
          await era.printAndWait(['자신의 트레이너이자, 자신의 성노예이자, 자신의 임신주머니가,']);
          await era.printAndWait([
            '정작 제 아이는 배려 하지 않으면서, 누구인지도 모를 무리에게 무참히 윤간당하는 길을 택했으니.',
          ]);
        } else {
          await era.printAndWait([
            '그러나 등 뒤에서 박아대는 ',
            uma_sex_title,
            '님의 육봉은 어째선지 유독 조급하고 거칠었다.',
          ]);
          await era.printAndWait([
            '보통이라면 별문제가 되지 않을 터였다. 어차피 임신주머니이자 배설용 도구에 불과하니, 아무리 난폭하게 다루어진다 한들 당연한 처사였으니까.',
          ]);
          await era.printAndWait(['하지만…… 이토록 다급하다 못해 분노마저 느껴지는 감각은,']);
          await era.printAndWait([
            '설마, 등 뒤의 ',
            uma_sex_title,
            '가 나를 동경하던 팬이란 말인가?',
          ]);
          await era.printAndWait(['정체를 숨긴 채, 오직 성욕의 분출구로서 팬에게 범해진다.']);
          await era.printAndWait([
            '어째선지 ',
            me.get_colored_name(),
            '은(는) 마치 불륜 현장이라도 들킨 듯한 기묘한 긴장감…… 그리고 깊은 흥분을 느꼈다.',
          ]);
          await era.printAndWait(['분명 엄청나게 화가 났겠지, 몹시 분노하고 있겠지.']);
          await era.printAndWait(['우러러보던 트레이너가, 그토록 동경하던 대상이,']);
          await era.printAndWait([
            '이토록 천박한 몰골로 추락해, 어린 ',
            uma_sex_title,
            '의 순수한 연심을 무참히 짓밟고 있으니.',
          ]);
        }
        era.println();
        await era.printAndWait(['정말 화가 나겠지, 분노가 치밀겠지.']);
        await era.printAndWait([
          '그러니 이 아무에게나 가랑이를 벌리는 걸레 암돼지의 깊은 곳에 사정없이 씨를 뿌려,',
        ]);
        await era.printAndWait([
          '암돼지의 헐거운 보지를 완전히 작살내고 임신시키고, 임신시키고, 또 임신시켜서,',
        ]);
        await era.printAndWait(['기필코 제 육봉의 비참한 노예로 길들여 버리고 싶을 것이다.']);
        era.println();
        if (is_teammate) {
          await era.printAndWait([
            '거기까지 생각이 미치자, ',
            me.get_colored_name(),
            '의 허리는 더욱 격렬하고 요염하게 흔들리기 시작했다.',
          ]);
          await era.printAndWait([
            '얼마 지나지 않아, 그 육봉이 잠시 빳빳하게 굳어지더니 ',
            me.get_colored_name(),
            '가 그토록 고대하던 하얀 정액을 거침없이 뿜어냈다.',
          ]);
          await era.printAndWait(['아아…… 정말 아쉬워라,']);
          await era.printAndWait([
            '어떤 아련한 허탈감이 ',
            me.get_colored_name(),
            '의 가슴속에 스쳤지만,',
          ]);
          await era.printAndWait([
            '이내 밀려 들어오는 다음 육봉의 묵직한 감각이 또다시 ',
            me.get_colored_name(),
            '의 정신을 아득하게 만들어, 쓸데없는 잡념 따위는 모두 날려버렸다.',
          ]);
          era.println();
          await era.printAndWait([
            '다음번 아이만큼은, 반드시 내가 사랑하는 ',
            uma_sex_title,
            '의 씨로 배어야지.',
          ]);
          await era.printAndWait([
            '의식이 흐릿해지는 와중에도 ',
            me.get_colored_name(),
            '은(는) 지켜질지조차 알 수 없는 다짐을 마음속으로 속삭였다.',
          ]);
        } else {
          await era.printAndWait([
            '거기까지 생각이 미치자, ',
            me.get_colored_name(),
            '의 허리는 더욱 격렬하고 요염하게 흔들리기 시작했다.',
          ]);
          await era.printAndWait(['하지만 너무 거세게 몰아붙이느라 방심했던 탓일까,']);
          await era.printAndWait(['아니면 그저 타이밍이 절묘하게 맞아떨어진 것뿐일까.']);
          await era.printAndWait([
            '이제 막 제대로 달아오르려던 찰나, 등 뒤의 육봉이 잘게 떨리더니 보지 깊은 곳에 엄청난 양의 하얀 정액을 쏟아내 버렸다.',
          ]);
          await era.printAndWait(['아아…… 정말 아쉬워라,']);
          await era.printAndWait([
            '기묘한 공허함과 실망감이 ',
            me.get_colored_name(),
            '의 가슴속에 가득 피어올랐다.',
          ]);
          await era.printAndWait([
            '하지만 이내 사정없이 밀려드는 다음 육봉의 감각이 또다시 ',
            me.get_colored_name(),
            '의 머릿속을 새하얗게 비워버려 더는 무의미한 생각을 이어갈 수 없게 만들었다.',
          ]);
          era.println();
          await era.printAndWait(['다음번에는 좀 더 분발해 줘야 해.']);
          await era.printAndWait([
            '방금 사정된 정액이 한층 더 사나운 다음 육봉에 의해 허망하게 긁혀 나오는 감각을 생생히 느끼며, ',
            me.get_colored_name(),
            '은(는) 마음속으로 조용한 응원을 건넸다.',
          ]);
        }
        rape_list = gacha(base_list, get_random_value(6, 8));
        rape_list.forEach((e) => {
          if (era.get(`cflag:${e}:성별`) === 0) {
            era.set(`status:${e}:펄롱P`, 1);
          }
        });
        begin_and_init_ero(0, ...rape_list);
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.gag,
          part: part_enum.mouth,
          attacker: get_random_entry(rape_list),
          defender: 0,
          shown: false,
        });
        await run_custom_ero(0, ero_hooks.use_item, {
          item: item_enum.blindfold,
          part: 99,
          attacker: get_random_entry(rape_list),
          defender: 0,
          shown: false,
        });
      }
      set_palam_to_max(0, part_enum.virgin);
      while (era.get('cflag:0:임신단계') === 1 << pregnant_stage_enum.no) {
        rape_list = sort_list(rape_list, Math.random);
        for (const chara_id of rape_list) {
          set_palam_to_max(chara_id, part_enum.penis);
          await quick_make_love(
            new EroParticipant(chara_id, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        }
      }
      end_ero_and_train();
      era.set('status:0:우마뾰이S', cache);
      era.drawLine();
    }
  }
}

module.exports = punish_pregnant_slave;