const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const AcuteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-100');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  /** @this CustomizedEdu */
  handlers.palace = async function (acute, me, callname) {
    await CustomizedEdu.common_palace(acute, me);
    if (era.get('cflag:100:명예의전당') === 2) {
      era.drawLine();
      const { ending } = new AcuteEduMarks();
      era.set('flag:현재위치', location_enum.gate);
      if (ending > 9) {
        await print_event_name('맹세', acute);
      } else {
        await print_event_name('시작점', acute);
      }
      era.set('flag:현재위치', location_enum.office);
      await era.printAndWait([
        acute.get_colored_name(),
        '와 만난 지 4년째가 되는 해, 3월.',
      ]);
      await era.printAndWait('기온은 조금 올랐지만, 바닥은 여전히 축축하고 차갑다.');
      if (new AcuteEduMarks().ending > 9) {
        await era.printAndWait([
          acute.get_colored_name(),
          '가 전당에 입성한 지 사흘째 되는 날이다.',
        ]);
        await era.printAndWait([
          '또한 ',
          me.get_colored_name(),
          '과(와) ',
          acute.get_colored_name(),
          '가 홋카이도로 휴가를 온 첫날이기도 하다.',
        ]);
        era.drawLine({ content: '홋카이도 민속 여관' });
        await acute.say_and_wait('우와~ 살아있는 킹크랩은 처음 본단다—');
        await era.printAndWait([
          '식탁 가득 차려진 진수성찬 앞에서, ',
          acute.get_colored_name(),
          '는 진심 어린 감탄을 터뜨렸다.',
        ]);
        await era.printAndWait([
          '다행히 ',
          me.get_colored_name(),
          '은(는) 만반의 준비를 해둔 상태였다.',
        ]);
        await era.printAndWait([
          '그렇다. 휴가가 시작되기 전부터, ',
          me.get_colored_actual_name(),
          '(이)라는 이름의 트레이너는 이미 여관 홍보 책자를 밤새 정독하고, 3천 자에 달하는 《홋카이도 생존 미식 가이드》를 통째로 외워두고는—',
        ]);
        await me.say_and_wait([
          '흐흥~ ',
          acute.get_colored_name(),
          ', 그거 알아? 사실 킹크랩은 게가 아니라 집게의 일종이야—',
        ]);
        await acute.say_and_wait('음음~');
        await me.say_and_wait(
          '그리고 식탁에 자주 오르는 킹크랩은 주로 네 가지로 나뉘지. 우리가 지금 먹는 건 현지 특산물인 하나사키게야—',
        );
        await acute.say_and_wait('오호라~');
        await me.say_and_wait(
          '하나사키게라고 하면 세 가지 조리법과 여섯 가지 유래에 대해 얘기하지 않을 수가 없는데—',
        );
        await acute.say_and_wait('에헤헤—— 아하하~');
        era.printButton(`……저기, ${acute.name}. 내 말 듣고 있어?`, 1);
        await era.input();
        await acute.say_and_wait('듣고 있단다~');
        await era.printAndWait([acute.sex, '는 말은 그렇게 하면서도 손으로는 바쁘게 움직이고 있다——']);
        await acute.say_and_wait('방금 킹크랩을 먹는 네 가지 방법이라고 했지~?');
        await me.say_and_wait('전 · 혀 · 아 · 니 · 야!');
        await era.printAndWait(
          '—미식 소개를 무슨 한 맺힌 가련한 문학가의 명언처럼 말하고 있었다.',
        );
        await acute.say_and_wait(
          '아하하~ 이 손으로 꼼지락거리는 가위질 작업이 제법 재밌어서 그렇단다.',
        );
        await era.printAndWait([
          '소리가 나는 쪽을 바라보니, ',
          acute.get_colored_name(),
          '의 손에 금색 게 가위가 쥐어져 있었다.',
        ]);
        await era.printAndWait(
          '가장자리를 따라 게다리 껍질을 자르고 마디 부분을 한 바퀴 돌린다. 이렇게 하면 게다리를 잡고 껍질을 벗겨내어 살을 가장 온전하게 맛볼 수 있다.',
        );
        await era.printAndWait(
          '예약한 이 민속 여관에서 대접하는 킹크랩은 보통 손질이 다 되어서 나오는데, 이렇게 손님이 직접 손질해 먹는 게다리는 꽤 보기 드문 일이었다.',
        );
        await me.say_and_wait('……설마 가게가 손님을 호구로 보고 대충 준 건 아니겠지?');
        await acute.say_and_wait('내가 직접 그렇게 달라고 부탁한 거란다.');
        await acute.say_and_wait(
          '이렇게 작은 가위로 게 껍질을 조금씩 자르고 있으니까, 옛날 고향에서 배웠던 수공업 수업이 생각나서 정겹구나……',
        );
        await era.printAndWait(
          '맑은 눈망울이 서서히 커지고, 가위를 쥔 작은 손이 미세하게 움직인다. 사각사각 소리와 함께 게 껍질 부스러기가 탁자 위로 떨어졌다.',
        );
        await era.printAndWait([
          '얼마 지나지 않아, 영롱하고 뽀얀 게맛살 한 송이가 ',
          acute.get_colored_name(),
          '의 손에 완성되었다.',
        ]);
        await acute.say_and_wait(['자, ', callname, '.']);
        await me.say_and_wait('응?');
        await acute.say_and_wait('자, 아~ 하렴~');
        await era.printAndWait([
          '마치 어머니와도 같은 다정한 목소리와 함께, 커다란 게맛살이 ',
          me.get_colored_name(),
          '의 눈앞까지 다가왔다.',
        ]);
        await me.say_and_wait(['저기 말야, ', acute.get_colored_name(), '……']);
        await acute.say_and_wait('아~');
        await me.say_and_wait('여긴 그래도 공공장소인데……');
        await acute.say_and_wait('아~');
        await me.say_and_wait('그게, 음식은 스스로 먹어야 제맛……');
        await acute.say_and_wait('아~');
        await me.say_and_wait('……');
        await era.printAndWait(
          '——여기서 더 입을 안 벌리면 이 게맛살이 코에 박힐 것 같다!',
        );
        await era.printAndWait(
          '입을 벌려 그 큼직하고 탱글탱글하며 붉은 빛을 발하는 게맛살을 가볍게 한 입 베어 물었다.',
        );
        await era.printAndWait(
          '탄력 있는 식감, 뜨겁게 배어 나오는 즙, 그리고 해산물 특유의 짭조름한 감칠맛까지. 과연 고급 식재료라는 이름에 걸맞은 품격이 느껴졌다——',
        );
        await me.say_and_wait('음…… 이거 진짜 맛있다.');
        await me.say_and_wait([
          '자, ',
          acute.get_colored_name(),
          ', 너도 한 입 먹어봐—',
        ]);
        await acute.say_and_wait('아, 잠깐만 기다리렴~');
        await era.printAndWait(
          '훌륭한 음식을 맛보고 그 즐거움을 함께 나누려 고개를 돌렸다.',
        );
        await era.printAndWait([
          '하지만 옆에 있던 ',
          acute.get_colored_name(),
          '는 흥미진진한 표정으로 다시 가위를 놀리며 다음 게다리를 손질하는 데 열중하고 있었다.',
        ]);
        era.printButton('「…………」', 1);
        await era.input();
        await era.printAndWait('방금 입에 넣은 게맛살을 슬쩍 바라보았다.');
        await acute.say_and_wait('음흠흠~ 흠흠흠~');
        await era.printAndWait([
          '그리고 식사 시간인데도 여전히 손재주를 부리느라 여념이 없는 ',
          acute.get_colored_name(),
          '를 다시 한번 쳐다보았다.',
        ]);
        await era.printAndWait(
          '게맛살을 한 손으로 받아 들자, 문득 알 수 없는 결의가 마음속에 가득 차올랐다.',
        );
        await me.say_and_wait(['있잖아, ', acute.get_colored_name(), '.']);
        await acute.say_and_wait(['무슨 일이니, ', callname, '?']);
        await me.say_and_wait('지금은 밥 먹는 시간이지?');
        await acute.say_and_wait('그렇단다~');
        await me.say_and_wait('그러니까……');
        await era.printAndWait([
          '이윽고, 한쪽 손이 ',
          acute.sex,
          '의 눈앞을 가로막으며 ',
          acute.get_colored_name(),
          '의 작업을 저지했다.',
        ]);
        await era.printAndWait([
          '짙은 눈동자가 순간적으로 깜빡였다. 갑작스럽게 자신의 가슴팍 앞 세계로 파고든 오른손이 확실히 ',
          acute.sex,
          '의 주의를 끌었다.',
        ]);
        await era.printAndWait([
          '그리고 이어서 침입한 손은, 마치 에덴동산의 뱀처럼 ',
          acute.get_colored_name(),
          '의 턱을 부드럽게 감싸 쥐었다.',
        ]);
        await era.printAndWait('턱을 살짝 돌려, 마침내 두 시선이 정면으로 마주쳤다.');
        await era.printAndWait([
          '갑작스러운 상황에 기가 죽었는지, ',
          acute.get_colored_name(),
          '는 반항 한 번 하지 못하고 제자리에 얼어붙었다. 하얀 뺨 위로 붉은 홍조가 번져갔다. 이것이 기쁨인지 부끄러움인지 분간하기 어려웠다.',
        ]);
        await acute.say_and_wait(['그, 그게…… ', callname, '……?']);
        await era.printAndWait(
          '목소리에는 망설임과 경이로움이 섞여 있었고, 7할의 의구심과 3할의 설렘이 숨겨져 있었다.',
        );
        await era.printAndWait(
          '이미 뻗은 손가락을 거둘 생각은 없다. 오묘한 눈빛 속에서 전진하겠다는 야심이 타올랐다.',
        );
        await era.printAndWait('전초전은 이미 끝났다. 이제부터가 진짜 본편이다.');
        await me.say_and_wait(['있잖아, ', acute.get_colored_name(), '~']);
        await acute.say_and_wait('응❤️……');
        await me.say_and_wait('지금은 밥 먹는 시간 맞지?');
        await acute.say_and_wait('……어라?');
        await me.say_and_wait('그러니까 말야……');
        await era.printAndWait('미소를 지은 얼굴 위로 큼지막한 게맛살의 실루엣이 드리워졌다.');
        await era.printAndWait(
          '손아귀 안에는 온화한 안색이, 눈앞의 지척에는 흉악한 거수가 자리 잡고 있다——',
        );
        await era.printAndWait('바로 지금이다, 고독한 용사여!');
        await me.say_and_wait('게맛살이나 제대로 먹어!!!!');
        await era.printAndWait([
          '거대한 창과도 같은 게살이 순간적으로 ',
          acute.get_colored_name(),
          '의 입안으로 돌격했다.',
        ]);
        await acute.say_and_wait('웁!?');
        await acute.say_and_wait('우읍, 음, 웅……');
        await acute.say_and_wait('…………');
        await acute.say_and_wait('……❤️');
        await era.printAndWait('——————');
        await era.printAndWait('——말할 필요도 없이,');
        await era.printAndWait('이것은 참으로 훌륭한 연회였다.');
        era.drawLine();
        await era.printAndWait([
          acute.get_colored_name(),
          '와 만난 지 4년째가 되는 해의 3월,',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          '가 전당에 입성한 지 사흘째 되는 날이다.',
        ]);
        await era.printAndWait([
          '이사장님의 아낌없는 지원 덕분에, ',
          me.get_couple_title(),
          '은 홋카이도의 어느 민속 여관으로 휴가를 오게 되었다.',
        ]);
        await era.printAndWait([
          '……뭐, 비록 ',
          me.get_colored_name(),
          '의 입장에서 보면 이런 여관은 자신에게 분수에 넘치도록 과분하고 사치스러운 곳이었지만.',
        ]);
        await era.printAndWait('——밤이 깊었다.');
        await era.printAndWait('온천을 마친 후 이불 속에서 일찍 잠자리에 들 생각이었다.');
        await era.printAndWait('그러나 이리저리 뒤척여도 쉽게 잠이 오지 않았다.');
        await era.printAndWait([
          '이불을 걷어차고 창밖의 밝은 달을 바라보자, 알 수 없는 쓸쓸함이 ',
          me.get_colored_name(),
          '의 마음속에 밀려들었다.',
        ]);
        await era.printAndWait([
          '고개를 돌려보니 그곳에는 ',
          acute.get_colored_name(),
          '의 평온한 자는 얼굴이 보였다.',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('어둠을 틈타 살금살금 발걸음을 옮겨,');
        await era.printAndWait('조심스럽게, 아주 조심스럽게 방문을 열었다.');
        await era.printAndWait('그리고 끝없는 밤공기 속으로 걸어 나갔다.');
        await era.printAndWait('………………');
        await era.printAndWait('밤은 언제나 칠흑 같다.');
        await era.printAndWait('모든 것을 삼켜버릴 듯이 어둡다.');
        await era.printAndWait('하지만 은은한 별빛과 달빛은 아직 반딧불이 같은 미광을 남겨두고 있었다.');
        await era.printAndWait(
          '사람에게 잠시 숨을 고를 방향과, 계속해서 나아갈 수 있는 충분한 희망을 전해주듯이.',
        );
        await era.printAndWait('3월 홋카이도의 밤은 사방이 여전히 쓸쓸하고 차갑다.');
        await era.printAndWait('하지만 오히려 그 차가움이 정신을 맑게 깨운다.');
        await era.printAndWait('연회는 훌륭했고, 침구는 부드러웠으며, 난방도 따뜻했다.');
        await era.printAndWait('하지만 이 모든 것이 어딘가 덧없는 물거품처럼 허황되게 느껴졌다.');
        await era.printAndWait('——그렇다, 자신은 아직 너무나 나약하다.');
        await era.printAndWait('앞으로 나아가기 위해서는 오직 한 걸음 더 「정진」하는 수밖에 없다——');
        await acute.say_as_unknown_and_wait(['아직 안 자고 있었구나, ', callname, '.']);
        await era.printAndWait('등 뒤에서 이미 익숙해진 목소리가 들려왔다.');
        await era.printAndWait('몸은 추위로 떨렸지만, 정신은 매서운 바람 덕에 오히려 또렷해졌다.');
        era.printButton(`「벌써 잠든 줄 알았는데, 어큐트.」`, 1);
        await era.input();
        await acute.say_and_wait('네가 잠들기 전까지는 나도 계속 깨어 있을 거란다.');
        await era.printAndWait(
          '등 뒤로 한 그림자가 스쳐 지나갔다. 그것은 짙은 회색빛의 긴 머리를 휘날리는, 살아 숨 쉬는 마음 그 자체였다.',
        );
        await era.printAndWait([
          acute.sex,
          '의 발걸음은 언제나 ',
          me.get_colored_name(),
          '보다 빨랐기에, 연못에 더 가까이, 밝은 달에 더 가까이 다가섰다.',
        ]);
        await acute.say_and_wait('나는 오늘 연회 자리에서 네가 직접 말해줄 줄 알았단다.');
        await me.say_and_wait('……');
        await me.say_and_wait('그게…… 무슨 소리야?');
        await acute.say_and_wait('프랑스에 가는 일 말이란다, 트레이너씨.');
        await acute.say_and_wait([
          '프랑스 레이스계의 초청을 받아들여서 파리로 유학 가기로 했지? 그리고 사흘 뒤에 혼자 파리행 비행기를 탈 예정이구?',
        ]);
        await me.say_and_wait('……');
        await era.printAndWait([
          acute.sex,
          '가 말한 것은 의심할 여지 없는, 숨길 수 없는 진실이었다.',
        ]);
        await acute.say_and_wait('……왜 나한테는 말해주지 않은 거니?');
        await era.printAndWait('짙은 회색빛의 뒷모습이 담담한 어조로 말을 이어갔다.');
        await me.say_and_wait([
          '……너한테 숨기려고 했던 건 아니야, 어큐트.',
        ]);
        await me.say_and_wait('그냥, 어떻게 말을 꺼내야 할지 몰랐을 뿐이야.');
        await me.say_and_wait([
          '레이스계에서 한 걸음 더 앞으로 나아가기 위해서…… 지금의 나는 솔직히 네 곁에 당당히 서 있을 자격이 부족하니까.',
        ]);
        await me.say_and_wait('하지만 난…… 정말로 떳떳한 자격으로 네 곁에 서고 싶어.');
        await acute.say_and_wait('그래서…… 파리로 가서 3년 동안 배우고 오겠다는 거니?');
        await me.say_and_wait('……맞아.');
        await acute.say_and_wait('……파리에서 3년 동안 돌아오지 않겠다는 거니?');
        await me.say_and_wait('……');
        await era.printAndWait('차가운 바람 속에서, 침묵으로 답을 대신했다.');
        await era.printAndWait('어쩔 수 없는 냉정함이자, 홀로 고집하는 무정함이었다.');
        await era.printAndWait('밝은 달 아래, 차가운 바람이 미풍을 타고 불어와 숲을 울렸다.');
        await era.printAndWait('짙은 회색빛의 뒷모습이 가만히 고개를 치켜들었다.');
        await acute.say_and_wait(['……혹시 『개선문상』이라고 들어봤니, ', callname, '?']);
        await me.say_and_wait('프랑스의 최고봉 레이스 말이지?');
        await acute.say_and_wait([
          '맞단다. 매년 이쪽에서 『최강의 우마무스메』를 뽑아 홀로 바다를 건너 파리로 향하게 만드는 바로 그 대회란다.',
        ]);
        await acute.say_and_wait('올해는 아마 기회가 없을지도 모르겠지만.');
        await acute.say_and_wait('하지만 말이란다, 만약 내년이라면——');
        await me.say_and_wait('……그 말은?');
        await acute.say_and_wait('내 말은 그러니까……');
        await era.printAndWait('달빛 아래, 짙은 회색빛의 실루엣이 몸을 돌렸다.');
        await era.printAndWait('늠름한 자태 아래, 앞으로 나아가겠다는 굳은 결의가 불타오르고 있었다.');
        await era.printAndWait(
          '망설임과 놀라움이 서려 있는 그 눈빛은 마치 어떤 아쉬움 같으면서도 고결한 기쁨처럼 보였다.',
        );
        await era.printAndWait(
          '그것은 소크라테스의 밀이삭처럼 엄숙하면서도, 고결한 자가 베푸는 최고의 다정함에 가까웠다.',
        );
        await era.printAndWait([
          '달빛 아래, 별빛이 찬란하게 빛나는 가운데, 회색빛의 ',
          acute.get_teen_sex_title(),
          '는 자신의 약속을 나지막이 읊조렸다.',
        ]);
        await acute.say_and_wait('네가 파리에 간다면, 나도 따라가겠단다.');
        await acute.say_and_wait('나한테 1년만 더 시간을 주렴, 트레이너.');
        await acute.say_and_wait('내가 반드시 널 따라잡을 테니까.');
        await acute.say_and_wait([callname, '——']);
        era.drawLine();
        await era.printAndWait('홋카이도에서의 이야기는 잠시 막을 내린다.');
        await era.printAndWait('그리고 앞으로 이어질 이야기는 아직 아주 길고도 길다——');
      } else {
        const tokino = get_chara_talk(301),
          chairman = get_chara_talk(302);
        await era.printAndWait([
          acute.get_colored_name(),
          '가 전당에 입성한 지 엿새째 되는 날이다.',
        ]);
        await era.printAndWait([
          '또한 한때 동고동락했던 ',
          me.get_colored_name(),
          '과(와) ',
          acute.get_colored_name(),
          '가 이별을 맞이하게 된 첫해이기도 하다.',
        ]);
        era.drawLine({ content: '도쿄 국제공항' });
        era.printButton('「여기까지만 배웅해 주셔도 돼요.」', 1);
        await era.input();
        await me.say_and_wait([
          '먼 길을 함께 와주셔서 감사합니다, ',
          sys_get_colored_callname(0, 302),
          '이사장님, ',
          sys_get_colored_callname(0, 301),
          '.',
        ]);
        await tokino.say_and_wait('아하하—— 우리가 함께한 세월이 몇 년인데 새삼스럽게 뭘 그렇게 격식을 차리세요.');
        await chairman.say_and_wait([
          '동의! ',
          sys_get_colored_callname(302, 0),
          ' 자네는 이미 우리 트레센 학원의 가족이나 다름없다네.',
        ]);

        await era.printAndWait([
          '공항 탑승구 앞에서, ',
          me.get_colored_name(),
          '은(는) ',
          tokino.get_colored_name(),
          ', ',
          chairman.get_colored_name(),
          '와 함께 마지막 인사를 나누었다.',
        ]);
        await tokino.say_and_wait(
          '그나저나…… 정말로 프랑스 쪽 초청을 수락할 줄은 정말 몰랐어요.',
        );
        await chairman.say_and_wait(
          '경악! 그 소식을 들었을 때, 나는 너무 놀라 들고 있던 당근을 땅에 떨어뜨리고 말았다네.',
        );
        await me.say_and_wait('하하…… 제 평소 스타일과는 확실히 좀 안 맞긴 하죠.');
        await era.printAndWait([
          '한 손으로 뒷머리를 긁적이며 ',
          tokino.get_colored_name(),
          '와 ',
          chairman.get_colored_name(),
          '를 바라보던 당신은 슬며시 멋쩍은 웃음을 터뜨렸다.',
        ]);
        await me.say_and_wait('사실…… 저도 최근에서야 겨우 결심을 내렸어요.');
        await me.say_and_wait([
          acute.get_colored_name(),
          '의 트레이너로 지낸 이 3년 동안, 제 자신이 진정으로 훌륭한 트레이너가 되기엔 아직 한참 부족하다는 걸 뼈저리게 깨달았거든요.',
        ]);
        await me.say_and_wait(
          '어떤 상황에서도 동요하지 않는 대담한 심리적 자질이나, 완급 조절을 정확히 파악해 내는 훈련 프로그램 설계 능력까지.',
        );
        await me.say_and_wait(
          '지금의 저는 이른바 『일류 트레이너』라는 타이틀을 달기엔 아직 갈 길이 너무나 멉니다.',
        );
        await tokino.say_and_wait(
          '그래서 프랑스 트레이너계의 제안을 받아들이고 파리로 건너가 한동안 깊이 연구해 보기로 한 건가요?',
        );
        await me.say_and_wait(
          '네—— 하지만 두 분도 아시다시피, 저 혼자만의 힘이었다면 고향을 떠날 용기 따윈 절대 내지 못했을 겁니다.',
        );
        await me.say_and_wait([
          '사실은…… ',
          acute.get_colored_name(),
          '가 제게 이 결의를 다지게 해 주었어요.',
        ]);
        await me.say_and_wait([
          '제가 이렇게 무능하고 자격 미달인 트레이너였음에도 불구하고, ',
          acute.get_colored_name(),
          '는 흔들림 없이 강인하게 스스로의 노력과 약간의 운을 보태어 멋지게 전당에 입성해 냈잖아요?',
        ]);
        await me.say_and_wait('그러니 저 역시도 한층 더 노력해야겠다고 생각했습니다.');
        await me.say_and_wait([
          '한 명의 트레이너로서, 진정으로 부끄럽지 않은 자격을 갖추어 ',
          acute.get_colored_name(),
          '의 곁에 나란히 서고 싶어요.',
        ]);
        await tokino.say_and_wait('그랬군요……');
        await chairman.say_and_wait(
          '긍정! 자네가 스스로 내린 결정이라면, 우리 역시 조건 없이 자네를 지지하겠네.',
        );
        await tokino.say_and_wait([
          '그런데…… ',
          acute.get_colored_name(),
          ' 양은 오늘 왜 배웅하러 오지 않았죠?',
        ]);
        await me.say_and_wait([
          '그게 말이죠…… 사실 프랑스에 간다는 건 아직 비밀로 부쳤거든요.',
        ]);
        await chairman.say_and_wait([
          '경악!? 아직도 ',
          acute.get_colored_name(),
          ' 양에게 숨기고 있었단 말인가!?',
        ]);
        await me.say_and_wait(['하하…… 대신 편지를 남겨두고 왔어요.']);
        await me.say_and_wait(['사실 이렇게 하는 게 맞는지 틀린 지는 저도 잘 모르겠습니다.']);
        await me.say_and_wait([
          '다만 막상 진짜로 헤어져야 한다고 생각하니…… 역시 혼자 몰래 패배자처럼 도망치듯 떠나는 편이…… 속이 편할 것 같아서요.',
        ]);
        await era.printAndWait('【딩 동 댕 동~】');
        await era.printAndWait('【파리행 비행기를 이용하시는 승객 여러분께 안내 말씀 드립니다~】');
        await era.printAndWait('【승객 여러분께서 탑승하실 QR5201편 탑승이 지금 시작되었습니다~】');
        await me.say_and_wait([
          '슬슬 시간이 된 것 같네요—— ',
          sys_get_colored_callname(0, 302),
          '이사장님, ',
          sys_get_colored_callname(0, 301),
          '.',
        ]);
        await tokino.say_and_wait(['조심히 잘 다녀오세요, ', me.actual_name, '.']);
        await chairman.say_and_wait('기원! 학업을 무사히 마치고 조속히 복귀하기를 기다리겠네!');
        await me.say_and_wait('감사합니다. 그럼——');
        await me.say_and_wait('우리 3년 뒤에 봐요.');
        await era.printAndWait('………………');
        await era.printAndWait('평범하고 지루한 줄서기, 지극히 따분한 티켓 검사.');
        await era.printAndWait('2층에서 에스컬레이터를 타고 내려와 로비로 들어선다.');
        await era.printAndWait('이 모든 과정은 조금의 재미도 없었고, 특별히 언급할 가치도 없었다.');
        await era.printAndWait(
          '문득 갈증이 느껴졌다. 습관적으로 손을 뻗어 가방 속에 넣어둔 갈증 해소용 절인 무를 꺼내려 했다.',
        );
        await era.printAndWait([
          '그러나 가방 안을 이리저리 뒤적이다가, 문득 ',
          me.get_colored_name(),
          '은(는) 원래 외출할 때 간식을 챙겨 다니는 습관이 전혀 없었다는 사실이 떠올랐다.',
        ]);
        await me.say_and_wait('……');
        await me.say_and_wait('……하하——');
        era.printButton(
          '「나 말이야, 도대체 얼마 만에 혼자서 이렇게 먼 길을 떠나보는 걸까?」',
          1,
        );
        await era.input();
        await era.printAndWait('바쁘게 스쳐 지나가는 인파 속에서 돌아오는 대답은 없었다.');
        await era.printAndWait('나도 모르게 고개를 들어 탑승구 쪽을 되돌아보았다.');
        await era.printAndWait('그곳에는 여전히 화분들이 덩그러니 놓여 있었고, 몇몇 사람들의 그림자가 오가고 있을 뿐이었다.');
        await me.say_and_wait(
          ['……만약 저 자리에 ', acute.get_colored_name(), '가 서 있어 주었더라면, 얼마나 좋았을까?'],
          true,
        );
        await era.printAndWait('뇌리에 문득 떠오른 생각에,');
        await era.printAndWait('이내 스스로가 한심하다는 듯 씁쓸한 자조를 지었다.');
        era.printButton('(이제 와서…… 대체 무슨 생각을 하는 거야.)', 1);
        await era.input();
        era.printButton(
          `(너 이름이 ${me.actual_name}(이)지? ${me.actual_name}. 넌 어쩌면 이렇게까지 나약하냐……)`,
          1,
        );
        await era.input();
        await era.printAndWait('자조 섞인 쓴웃음은 허공으로 흩어져 인파의 물결 속으로 이내 삼켜졌다.');
        await era.printAndWait('마음을 굳게 가다듬고,');
        await era.printAndWait([
          me.get_colored_name(),
          '는 마침내 「새로운 시작」을 향한 첫걸음을 내딛었다——',
        ]);
        era.drawLine();
        await acute.print_and_wait('화분 아래, 유리창 너머.');
        await acute.print_and_wait([
          '한 ',
          acute.get_child_sex_title(),
          '가 그곳에 조용히 웅크려 앉아 있었다.',
        ]);
        await acute.print_and_wait([
          '사람들은 흔히 ',
          acute.get_child_sex_title(),
          '를 두고 차분하고 온화해서 가끔은 늙은이 같다고들 말하곤 한다.',
        ]);
        await acute.print_and_wait([
          '하지만 사실 ',
          acute.get_child_sex_title(),
          '는 사람들이 입 모아 말하는 것처럼 언제나 차분하고 온화한 것만은 아니었다.',
        ]);
        await acute.print_and_wait([
          acute.sex,
          ' 역시 평범한 사람과 똑같이 압박감을 느끼고, 괴로워하며, 어디에도 하소연할 수 없는 처량함에 눈물짓고, 가슴이 찢어질 듯한 고통을 겪기도 한다.',
        ]);
        await acute.print_and_wait([
          '단지—— ',
          acute.sex,
          '는 이러한 개인적인 아픔을 남들에게 털어놓는 것을 좋아하지 않을 뿐이다.',
        ]);
        await acute.print_and_wait([acute.sex, '는 그저 혼자 조용히 숨어버리는 쪽을 더 좋아했다.']);
        await acute.print_and_wait('그 누구도 「알아채지 못할」 외딴 장소에 숨어서.');
        await acute.print_and_wait('그곳에 가만히 주저앉아 무릎을 모은다.');
        await acute.print_and_wait('마치 모든 것이 「처음 시작되었을 때」처럼——');
        tokino.name = `초록색 모자를 쓴 ${tokino.get_phy_sex_title()}`;
        acute.name = acute.get_child_sex_title();
        await tokino.say_and_wait(['——', me.sex, '에게 마지막 인사는 안 건네는 건가요?']);
        await acute.print_and_wait([
          '곁에서 마음씨 고운 ',
          acute.get_phy_sex_title(),
          '가 ',
          acute.sex,
          '의 옆 자리에 가만히 다가와 섰다.',
        ]);
        await acute.say_and_wait('아니, 괜찮단다…… 이대로가 좋을게야.');
        await tokino.say_and_wait('그런가요……');
        await acute.print_and_wait([
          '아래층으로 이어지는 인파를 멀리 내려다보며, 그 안에서 겨우 ',
          me.get_child_sex_title(),
          '의 작아지는 뒷모습을 찾아내어 눈에 담았다.',
        ]);
        await acute.print_and_wait([
          '무슨 이유에서인지, ',
          acute.get_phy_sex_title(),
          '는 자신도 모르게 깊은 한숨을 푹 내쉬었다.',
        ]);
        await tokino.say_and_wait('정말 지독한 바보라니까요——');
        await acute.say_and_wait(['그게…… ', callname, '을 말하는 겐가?']);
        await tokino.say_and_wait(['그 사람 말고 또 누가 있겠어요?']);
        await acute.print_and_wait([
          '말을 마치자 ',
          acute.get_phy_sex_title(),
          '의 모자가 들썩였고, 숨겨져 있던 비밀이 금방이라도 튀어나올 듯 맴돌았다.',
        ]);
        await acute.say_and_wait('그럼, 나 역시도 바보가 아닌 걸까?', true);
        await acute.print_and_wait([
          acute.get_child_sex_title(),
          '는 마음속 깊은 곳에서 차오르는 이 한마디를 차마 뱉지 못하고 다시 목구멍 뒤로 꾹 삼켜냈다.',
        ]);
        await acute.print_and_wait([
          '애초에 ',
          me.get_child_sex_title(),
          '은 무언가를 숨기는 데 소질이 전혀 없었으니까.',
        ]);
        await acute.print_and_wait('인터넷 세계에는 영 서툴렀고, 그렇다고 현실에 온전한 여유가 있는 것도 아니었다.');
        await acute.print_and_wait([
          '서로 오가는 우편물이나 NOK의 가입 권유서 같은 것들은, 트레센 학원에 도착할 때마다 언제나 ',
          acute.get_child_sex_title(),
          '의 손을 거쳐 전달되곤 했었다.',
        ]);
        await acute.print_and_wait('——그러니 처음부터, 두 사람 사이에는 그 어떤 비밀도 존재하지 않았던 셈이다.');
        await tokino.say_and_wait('……지금이라도 늦지 않았어요?');
        await acute.print_and_wait([
          acute.get_phy_sex_title(),
          '의 목소리에 진심 어린 걱정이 묻어났다.',
        ]);
        await tokino.say_and_wait('마지막으로 한 번 더 얼굴을 마주하고 싶다면——');
        await acute.say_and_wait('필요 없단다.');
        await acute.print_and_wait([
          acute.get_child_sex_title(),
          '는 자리에 앉은 채 단호하게 고개를 가로저었다.',
        ]);
        await acute.print_and_wait([
          '요동치는 마음이 마침내 ',
          acute.sex,
          '에게 크나큰 용기를 불어넣어 준 모양이었다.',
        ]);
        await acute.print_and_wait([
          tokino.get_phy_sex_title(),
          '를 정면으로 바라보며, 언제나 유약하게만 보였던 ',
          acute.get_child_sex_title(),
          '는 마침내 속마음을 솔직하게 토해냈다——',
        ]);
        await acute.say_and_wait('바보라고 한다면—— 여기, 한 명 더 있으니까요.');
        await acute.print_and_wait([
          '바로 이 순간, 전당으로 향해 걸어가던 ',
          acute.get_child_sex_title(),
          '는,',
        ]);
        await acute.print_and_wait('생애 처음으로 진정한 「용기」를 가슴에 품었다.');
        era.drawLine();
        tokino.name = undefined;
        acute.name = undefined;
        await acute.print_and_wait('하늘을 가르는 무쇠 새가 굉음을 울리며 날아올랐다.');
        await acute.print_and_wait('그러나 철골로 가득 찬 대공항 안의 사람들에겐 그 이별의 소리가 전해지지 않았다.');
        await acute.print_and_wait([
          '하늘에 떠가는 뭉게구름을 바라보며, ',
          acute.get_colored_name(),
          '는 손에 쥐어진 편지 봉투를 조심스레 뜯었다.',
        ]);
        await acute.print_and_wait('봉투 안에는 분홍빛이 도는, 제법 도톰하고 딱딱한 카드가 들어 있었다.');
        await acute.print_and_wait('그 위에는 비뚤비뚤하고 서툰 글씨가 빽빽하게 적혀 있었다.');
        await me.say_and_wait([acute.get_colored_name(), '에게.']);
        await me.say_and_wait(
          '네가 이 편지를 읽고 있을 때쯤, 나는 이미 파리행 비행기에 몸을 싣고 하늘을 날아가고 있겠지.',
        );
        await me.say_and_wait(
          '이렇게 한마디 말도 없이 불쑥 떠나버리는 못난 나를 부디 용서해 주길 바래. 너에게 어떤 표정을 지으며 이별을 고해야 할지 도무지 갈피를 잡을 수 없었거든.',
        );
        await me.say_and_wait(
          '네 전담 트레이너로서, 우리는 함께 참으로 길고도 즐거운 3년이라는 시간을 통과해 왔어.',
        );
        await me.say_and_wait('그 3년 동안, 우리는 헤아릴 수 없을 만큼 많은 추억을 함께 만들어 왔지.');
        await me.say_and_wait('겁 많고 유약했던 나 역시 그 시간 동안 매번 너의 따뜻한 도움을 받아 가며 버텨올 수 있었어.');
        await me.say_and_wait(
          '어쩌면 대단한 행운 덕분이었을지도, 아니면 한순간도 거르지 않았던 너의 눈부신 노력 덕분이었음이 분명할 우리 3년간의 여정은, 마침내 우리를 영광스러운 전당의 자리까지 이끌어 주었어.',
        );
        await me.say_and_wait('하지만 바로 그 결실 덕분에 뼈저리게 깨닫게 되었어. 내가 아직 배워야 할 것들이 너무나도 많이 남아있다는 사실을 말야.');
        await me.say_and_wait(
          '그래서 나는 프랑스 측의 초청을 받아들이기로 결심했어. 해외의 훨씬 더 선진적인 레이스 시스템을 몸소 배우고 깊이 연구해 보기 위해서.',
        );
        await me.say_and_wait(
          '정말 미안하게도, 앞으로 유학 생활을 보낼 3년 동안은 더 이상 네 곁에서 트레이너 역할을 해줄 수가 없게 되었어.',
        );
        await me.say_and_wait(
          '하지만 만약 허락해 준다면…… 3년 뒤에, 네가 여전히 레이스계에서 활약하고 있다면, 그때 네 전담 트레이너 자리를 이 부족한 나를 위해 부디 비워두지 않을래?',
        );
        await me.say_and_wait(
          '이런 이기적인 욕심을 부리는 나를 부디 용서해 줘. 하지만 이 욕심이 이정표가 되어준 덕분에, 다가올 3년 동안 나 역시 뼈를 깎는 노력을 아끼지 않을 수 있을 것 같아.',
        );
        await me.say_and_wait('무슨 일이 있어도, 나는 언제나 너라는 목표를 향해 달릴 거야.');
        await me.say_and_wait('언젠가 진정으로 네 곁에 당당히 설 수 있는 자격을 갖춘 트레이너가 되기 위해, 온 힘을 다해 정진할게.');
        await me.say_and_wait('그럼 이만 줄일게. 부디 몸 건강히 잘 지내고 있기를.');
        await me.say_and_wait(['——너의 트레이너, ', me.get_colored_actual_name()]);
        era.drawLine();
        await acute.say_and_wait('……');
        await acute.say_and_wait('우리 두 사람은 참——');
        await acute.say_and_wait('——둘 다 둘째가라면 서러울, 지독한 바보들이로구나.');
        await acute.print_and_wait('광활하게 펼쳐진 하늘 아래에는, 오직 두 사람의 늠름한 결의만이 메아리치고 있었다.');
      }
    } else {
      await CustomizedEdu.common_palace_relation(acute, me);
    }
  };

  handlers.leg = async (acute, me, callname, flags) => {
    new AcuteLifeMarks().leg = get_random_value(6, 10);
    await print_event_name(`${acute.name}의 무릎베개 위에서`, acute);
    await era.printAndWait('어제 잠을 제대로 이루지 못한 탓인지, 오늘 아침은 유독 눈꺼풀이 무겁고 정신이 비몽사몽하다.');
    await era.printAndWait('이런, 곧 있으면 본격적인 훈련 시간이 시작될 텐데.');
    await era.printAndWait([
      '엿보여선 안 되는데…… 나름 성숙한 트레이너로서, ',
      acute.get_colored_name(),
      '에게 이렇게 나태하고 흐트러진 모습을 보여줄 수는 없다—',
    ]);
    await acute.say_and_wait([callname, '?']);
    await me.say_and_wait('——헉!?');
    await era.printAndWait('숨을 미처 고르기도 전에, 그녀는 어느새 등 뒤에 소리 소문 없이 나타나 있었다.');
    era.printButton(`「으, 으앗, ${acute.name}!? 언제 온 거야?」`, 1);
    await era.input();
    await acute.say_and_wait([
      '아주 진작에 왔단다? 하지만 ',
      callname,
      '이 무척 피곤해 보여서, 방해하지 않고 가만히 지켜보고 있었지~',
    ]);
    await era.printAndWait([
      '다정한 말투 속에 기척을 숨기는 노련함을 감춘 채, 붉은색 트레이닝복을 단정하게 차려입은 ',
      acute.get_teen_sex_title(),
      '는 하얀 백합꽃이 흐드러지게 피어 있는 계단 언저리에 사뿐히 걸터앉았다.',
    ]);
    await acute.say_and_wait([
      '훈련이 시작되려면 아직 시간이 제법 남았으니…… 이리 와서 잠깐 쉬려무나, ',
      callname,
    ]);
    await era.printAndWait([
      acute.sex,
      '는 자신의 무릎팍을 톡톡 두드리며 포근한 안식처를 내어주었고, 오른손을 살랑살랑 흔들며 ',
      me.get_colored_name(),
      '을(를) 행복이 가득한 세계로 부드럽게 유혹했다.',
    ]);
    await era.printAndWait([
      '……처음에, ',
      me.get_colored_name(),
      '은(는) 나름대로 완강하게 거절하려 했다.',
    ]);
    await era.printAndWait('하지만 그곳은 보기만 해도 너무나 안락해 보였고…… 은은한 박하 향기마저 솔솔 풍겨오고 있었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는)  쑥스러운 마음에 애써 ',
      acute.sex,
      '의 다정한 시선을 회피하려 고개를 돌렸지만,',
    ]);
    await era.printAndWait([
      '이미 따스하고 부드러운 손길이 ',
      me.get_colored_name(),
      '의 헝클어진 머리칼 위를 부드럽게 쓸어내리고 있었다.',
    ]);
    await era.printAndWait([
      '이윽고, 나지막하게 읊조리는 다정한 노랫소리가 ',
      me.get_colored_name(),
      '의 귓가에 조용히 울려 퍼지기 시작했다——',
    ]);
    switch (get_random_value(0, 3)) {
      case 0:
        await acute.say_and_wait('바람이 분다~ 비가 내린다~ 천둥 신이 북을 메고 온다~');
        await acute.say_and_wait('네가 둥둥~ 내가 둥둥~ 두드려서 천둥 신 허리가 굽었네~');
        await acute.say_and_wait('네가 쿵쿵~ 내가 쿵쿵~ 찧어서 천둥 신이 이가 시리네~');
        break;
      case 1:
        await acute.say_and_wait('크고 크고 크고~ 작고 작고 작고~');
        await acute.say_and_wait('하나 둘 셋 넷 다섯 여섯 일곱~');
        await acute.say_and_wait('크고 크고 크고~ 작고 작고 작고~');
        await acute.say_and_wait('도 레 미 파 솔 라 시 도~');
        break;
      case 2:
        await acute.say_and_wait('빨리 말하고 싶어 매일 함께하고 싶다고~');
        await acute.say_and_wait('십만 가지 왜 그런지 의문들을 연구하며~');
        await acute.say_and_wait('빨리 알려주고 싶어 커다란 이치들을~');
        await acute.say_and_wait('친구 사이에 가장 소중한 건 마음의 정이란다~');
        await acute.say_and_wait('내 마음을 네 곁에 담아둘게~');
        break;
      case 3:
        await acute.say_and_wait('달님은~ 하얀 연꽃 같은 구름 속을~ 거니네~');
        await acute.say_and_wait('밤바람 타고 들려오는 기쁜 노랫소리~');
    }
    await era.printAndWait('……………………');
    await era.printAndWait('그것은 대단히 세련되거나 귀를 사로잡는 훌륭한 가요는 아니었다.');
    await era.printAndWait('냉정하게 말하자면, 노래를 부르는 이의 음정이 조금은 어긋나 있기도 했다.');
    await era.printAndWait('하지만…… 포근한 무릎을 베고 누워 이 나지막한 자장가를 듣고 있노라면,');
    await era.printAndWait('가슴 한구석에서부터 말로 다 할 수 없는 깊은 안도감이 몽글몽글 피어올랐다——');
    flags.wait_flag = get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
  };
};