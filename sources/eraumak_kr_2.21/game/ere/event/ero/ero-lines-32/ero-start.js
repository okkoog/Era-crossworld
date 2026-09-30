const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async () => {
  const callname = sys_get_colored_callname(32, 0),
    life_marks = new TachyonLifeMarks(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (
    sys_check_awake(0) &&
    sys_check_awake(32) &&
    era.getCharactersInTrain().length === 2 &&
    me.sex_code > 0 &&
    tachyon.sex_code - 1
  ) {
    if (
      check_pregnant_unprotect(0) &&
      check_pregnant_unprotect(32) &&
      era.get('love:32') >= 75 &&
      life_marks.reward < 3 &&
      era.get('cflag:32:위치') === 0
    ) {
      life_marks.reward++;
      switch (life_marks.reward) {
        case 1:
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.virgin, stain_enum.secretion);
          await era.printAndWait('겨우 끝났군……');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 기지개를 켜며 무심코 감상을 흘렸다.',
          ]);
          await era.printAndWait([
            '최근 ',
            tachyon.get_colored_name(),
            '의 실험이 점점 늘어나고 있으며, 내용도 복잡하고 번거로워지고 있었다.',
          ]);
          await era.printAndWait([
            '위험도는 그리 높지 않았지만, 트레이너 본연의 업무까지 더해진 바쁨은 ',
            me.get_colored_name(),
            '(으)로 하여금 차라리 그 위험했던 실험들을 그리워하게 만들 정도였다.',
          ]);
          era.println();
          await tachyon.say_and_wait(['수고했네, ', callname, '……']);
          await tachyon.say_and_wait('안심하게나, 나중에 충분히 보상을 해 줄 테니.');
          await era.printAndWait('\n보상……?');
          await era.printAndWait([
            '구체적으로 무엇인지는 알 수 없었지만, 보상이라는 단어는 피로에 찌든 ',
            me.get_colored_name(),
            '에게 활력을 불어넣었다.',
          ]);
          await era.printAndWait('\n실험 기구들을 정리한 뒤');
          era.println();
          await tachyon.say_and_wait('그럼…… 보상으로서, 내가 직접 처리해 주도록 하지.');
          await tachyon.say_and_wait('며칠 동안, 쌓여버린 그것을 말이야❤');
          era.println();
          await era.printAndWait('……에?');
          era.println();
          await tachyon.say_and_wait('그런 반응이라니…… 설마, 거절하려는 건가?');
          await tachyon.say_and_wait('명색이, 연인 사이가 아닌가?');
          era.println();
          await era.printAndWait('굴러 들어온 복을 발로 찰 이유는 없었다!');
          await era.printAndWait(
            '생각해 보면…… 요 며칠간 실험 때문에 확실히 욕구를 발산할 기회가 거의 없기도 했다.',
          );
          await era.printAndWait(
            '그렇다면, 자신의 연인에게 도움을 받는 것은…… 그리 지나친 일은 아닐 터였다.',
          );
          era.println();
          await era.printAndWait([
            '홀린 듯이, ',
            me.get_colored_name(),
            '은(는) 바지를 벗었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('흐음……');
          era.println();
          await era.printAndWait([
            '만화처럼 증기가 뿜어져 나올 정도까지는 아니었지만, 하루 종일 갇혀 있던 육봉은 그 어떤 ',
            tachyon.get_uma_sex_title(),
            '의 성욕이라도 자극하기에 충분한 냄새를 풍기고 있었다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 눈앞의 육봉을 뚫어지게 응시하며 시선을 떼지 못했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('이런…… 참을 수가 없군……❤');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 깜빡하고 있었다. 요 며칠 실험 탓에 욕구가 쌓인 것은 비단 ',
            me.get_colored_name(),
            '혼자만이 아니라는 사실을.',
          ]);
          await era.printAndWait([
            '곁에서 계속 함께 실험을 해 온 ',
            tachyon.get_colored_name(),
            '역시 마찬가지였을 것이다.',
          ]);
          await era.printAndWait('그렇게 생각하니…… 보상이라기보다는, 그저 핑계를 댄 것 같기도……');
          era.println();
          await era.printAndWait([
            '거기까지 생각이 미치자, ',
            me.get_colored_name(),
            '의 마음속에 짓궂은 장난기가 발동했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 육봉을 꺼내놓기만 하고 아무런 움직임도 보이지 않자, ',
            tachyon.get_colored_name(),
            '은 애가 타는 듯한 눈으로 ',
            me.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '…… 뭘 기다리는 건가, 어서, 넣어주게.']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 입술을 오므리고, 그 사이로 분홍빛 혀를 날름거리며 ',
            me.get_colored_name(),
            '의 정욕을 부추기려 애썼다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '이(가) 여전히 반응을 보이지 않자, 그의 의도를 알아챈 ',
            tachyon.get_colored_name(),
            '은 원망스러운 표정을 지었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('……너무하군.');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 바닥에 주저앉아, 마치 간청하듯 하늘 높이 솟구친 육봉을 우러러보았다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '부탁이네, ',
            callname,
            '…… 내가 쥬뵷쥬뵷하고…… 마음껏 음미하게 해 주게…… ',
            callname,
            '의 육봉을……❤',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 드디어 천천히 다가오자, ',
            tachyon.get_colored_name(),
            '은 허겁지겁 코를 육봉에 갖다 대고 깊게 숨을 들이켰다.',
          ]);
          await era.printAndWait('가만히 있지 못하는 손이 보지 구멍을 후비며 신음 소리를 냈다.');
          await quick_make_love(
            new EroParticipant(32, part_enum.hand),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          await era.printAndWait(
            '이성과 감성 모두가 인정한 수컷 앞에서, 암컷인 자신은 그저 바닥에 무릎을 꿇고 복종할 수밖에 없었다.',
          );
          era.println();
          await tachyon.say_and_wait('스읍…… 하아…… 스읍……');
          await tachyon.say_and_wait('육봉…… 육봉 냄새가 나……');
          await tachyon.say_and_wait([
            '제발…… 좀 더 맡게 해 주게…… ',
            callname,
            '의…… 자지……',
          ]);
          await tachyon.say_and_wait('콧속이…… 온통…… 수컷의 냄새로 가득해.');
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.body),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.hit),
            new EroParticipant(32, part_enum.mouth, -0.5),
            false,
          );
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 쿠퍼액이 맺힌 육봉을 꽉 쥐었다.',
          ]);
          await era.printAndWait([
            '그리고 장난스럽게, 어느새 무릎을 꿇고 있는 ',
            tachyon.get_colored_name(),
            '의 콧등에 육봉을 문질러댔다.',
          ]);
          await era.printAndWait([
            '마치 영역 표시라도 하듯, 액체와 냄새를 ',
            tachyon.get_colored_name(),
            '의 코에 잔뜩 묻혔다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '너무하군…… 이런 냄새를 맡아버리면…… 정말로…… 돌아갈 수 없게 되어버려……',
          );
          era.println();
          await era.printAndWait('싫다면, 그만둘까?');
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 몸을 빼려는 시늉을 하자, ',
            tachyon.get_colored_name(),
            '은 코를 육봉에서 단 1cm도 떼지 않은 채 허겁지겁 그 뒤를 쫓았다.',
          ]);
          era.println();
          await tachyon.say_and_wait('냄새만으로…… 가버릴 것 같아……');
          era.println();
          await era.printAndWait('또다시 장난을 칠까 봐 걱정이라도 되는지,');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 역으로 자신의 콧등을 ',
            me.get_colored_name(),
            '의 귀두 끝에 계속해서 문질러댔다.',
          ]);
          await era.printAndWait('이 냄새를 뇌리에 새기려는 듯, 육봉의 비릿한 체취를 힘껏 들이마셨다.');
          era.println();
          await tachyon.say_and_wait('안 돼…… 더는 못 참겠어……');
          await tachyon.say_and_wait('제발 머금게 해 주게…… 부탁이야, 핥게 해 주게.');
          era.println();
          await era.printAndWait('한시라도 빨리 핥고 싶었다.');
          await era.printAndWait('육봉을 빨아도 좋다는 허락을 받고 싶었다.');
          await era.printAndWait('사랑하는 이의 육봉이 눈앞에 있는 것을 지켜보며,');
          await era.printAndWait([
            '냄새를 즐기던 ',
            tachyon.get_colored_name(),
            '은 결국 견디지 못하고 침을 삼켰다.',
          ]);
          era.println();
          await tachyon.say_and_wait('꿀꺽');
          await tachyon.say_and_wait('응쥬루루루…… 쥬루…… 쥬붑……');
          era.println();
          await era.printAndWait([
            '허락이 떨어지기도 전에, ',
            tachyon.get_colored_name(),
            '은 이미 육봉을 입에 담고 빨기 시작했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '역시 안도의 한숨을 내쉬었다. 여기서 더 지체했다면, 먼저 참지 못하게 되는 쪽은 ',
            me.get_colored_name(),
            '이었을 것이기 때문이다.',
          ]);
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.penis),
            false,
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 입을 크게 벌려 육봉을 뿌리 끝까지 한입에 삼켰다.',
          ]);
          await era.printAndWait('끊임없이 위아래로 빨아대며 외설적인 물소리를 냈다.');
          era.println();
          await tachyon.say_and_wait('맛있군…… 정말 맛있어……');
          await tachyon.say_and_wait(['육봉…… ', callname, '의 비릿한 자지❤❤']);
          era.println();
          await era.printAndWait(['뿌리부터 귀두까지, 빈틈없이 감싸 안고 빨아올렸다.']);
          await era.printAndWait(
            '마치 립스틱을 바르듯, 육봉의 맛을 한 방울도 남김없이 자신의 입안에 묻히고 싶어 했다.',
          );
          era.println();
          await era.printAndWait(
            '대부분의 사람들이 이미 집이나 기숙사로 돌아갔을 저녁 무렵.',
          );
          await era.printAndWait(
            '실험실 안에는 지독히 음란한 물소리만이 울려 퍼졌다. 일부러 내는 소리일까, 아니면 소리에 신경 쓸 겨를도 없을 만큼 몰두한 것일까.',
          );
          await era.printAndWait([
            me.get_colored_name(),
            '에 대한 갈구, 자지에 대한 갈망, 그리고 어쩌면 이런 음탕한 행위를 한다는 배덕감까지.',
          ]);
          await era.printAndWait(
            '육봉에 봉사하는 와중에도, 흔들리는 엉덩이는 바닥과 손가락에 계속 마찰하며 위안을 찾고 있었다.',
          );
          await era.printAndWait('하지만…… 가장 맛있는 것은, 역시 입안에 물린 육봉이었다.');
          await era.printAndWait([
            '애정이 듬뿍 담긴 봉사는, ',
            tachyon.get_colored_name(),
            '이 눈앞의 육봉에 얼마나 매료되어 있는지를 소리 없이 증명하고 있었다.',
          ]);
          await era.printAndWait([
            '만약 ',
            tachyon.sex,
            '에게 지금 당장 평생 육봉의 노예로 살겠노라 맹세하라고 한다면, 아마 ',
            tachyon.sex,
            '는 기꺼이 응했을 것이다.',
          ]);
          era.println();
          await era.printAndWait([
            '갑자기, ',
            me.get_colored_name(),
            '이(가) ',
            tachyon.get_colored_name(),
            '의 머리를 쓰다듬었다.',
          ]);
          await era.printAndWait(['말 잘 듣는 ', tachyon.sex, '는 즉시 그 의미를 알아챘다.']);
          era.println();
          await tachyon.say_and_wait(
            '안에…… 제발 안에 싸 주게…… 내 입 구멍 안에…… 전부…… 마시게 해 줘❤❤',
          );
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(32, part_enum.mouth);
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.penis),
            false,
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '는 즉시 더욱 밀착하여 ',
            me.get_colored_name(),
            '의 육봉을 집요하게 빨아 올렸다.',
          ]);
          await era.printAndWait('마침내, 백탁액이 입안에서 폭발했다.');
          era.println();
          await tachyon.say_and_wait('쥬읍…… 구쥬…… 푸하아');
          await tachyon.say_and_wait('하아…… 하아…… 으응…… 쮸읍……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '는 입안에 사정된 정액을 천천히 음미했다.',
          ]);
          await era.printAndWait('일부러 쭈웁 소리가 나도록 씹어 넘긴 뒤, 정액을 전부 삼켜버렸다.');
          await era.printAndWait('이어 남은 정액까지 단 한 방울도 남기지 않고 마시기 위해,');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 다시 한번 늘어진 육봉을 물고 쪽쪽 소리를 내며 청소했다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '의 그토록 황홀해하는 모습을 보자, ',
            me.get_colored_name(),
            '의 하반신이 자신도 모르게 다시 딱딱해졌다.',
          ]);
          era.println();
          await tachyon.say_and_wait(['다음 실험 때도 잘 부탁하네, ', callname, '.']);
          await tachyon.say_and_wait('……물론, 보상도 잊지 않을 테니.');
          await tachyon.say_and_wait('거절하지는 않겠지…… 나의 사랑❤');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '의 요염한 눈빛을 바라보며, ',
            me.get_colored_name(),
            '은(는) 자신에게 쉴 새 없이 명령을 내리는 그 입술을 다시 한번 막아버리는 쪽을 택했다.',
          ]);
          break;
        case 2:
          if (get_expansion(get_penis_size(0), 32, part_enum.virgin) > 1) {
            life_marks.reward--;
            return;
          }
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.virgin, stain_enum.secretion);
          await print_event_name('실험의 보수', tachyon);
          await tachyon.say_and_wait([callname, '～ 오늘 실험도 수고 많았네.']);
          await tachyon.say_and_wait('그럼…… 보상이 필요한가❤️');
          await me.say_and_wait('부탁해.');
          era.println();
          await era.printAndWait('찌걱찌걱');
          await era.printAndWait('실험실 안은 외설적인 소리로 가득 찼다.');
          era.println();
          await tachyon.say_and_wait([callname, '…… ', callname, '❤️']);
          await tachyon.say_and_wait('어서…… 나의 암컷 구멍을 가득 채워주게❤️');
          await tachyon.say_and_wait(
            '실험 도중부터 줄곧 애액을 흘려댄 이 음탕한 구멍을…… 제대로 길들여달란 말일세.',
          );
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          await era.printAndWait(
            '육봉이 삽입되기도 전에 이미 완전히 젖어버린 좁은 구멍이 육봉을 꽉 조여왔다.',
          );
          await era.printAndWait([
            '허리를 쳐올릴 때마다 애액이 사방으로 튀어, 책상과 바닥이 ',
            tachyon.get_colored_name(),
            '의 비릿한 액체로 물들어갔다.',
          ]);
          era.println();
          await tachyon.say_and_wait('으으…… 너무 강해❤️');
          await tachyon.say_and_wait('조금만… 조금만 천천히 해주게……❤️');
          await tachyon.say_and_wait('소리가…… 아응❤️');
          era.println();
          await era.printAndWait('그렇게 유혹하면서 천천히 하길 바란다고?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 엉덩이를 세게 내리쳤다.',
          ]);
          await quick_make_love(
            new EroParticipant(0, part_enum.hit),
            new EroParticipant(32, part_enum.anal),
            false,
          );
          await era.printAndWait('부탁은 아랑곳하지 않고 속도를 더욱 높였다.');
          era.println();
          await tachyon.say_and_wait([callname, '…… ', callname, '❤️']);
          await tachyon.say_and_wait('아❤️ 응아❤️ 아❤️ 아아❤️');
          await tachyon.say_and_wait([callname, '…… 줘❤️ 나에게 더 많이 줘❤️']);
          era.println();
          await era.printAndWait([
            '절정에 가까워지자, 허리는 이미 ',
            me.get_colored_name(),
            '의 통제를 벗어나 스스로 속도를 높이기 시작했다.',
          ]);
          await era.printAndWait([
            '그토록 능동적으로 감겨오는 움직임에 ',
            me.get_colored_name(),
            '의 흥분도 정점에 달했고, 눈앞의 암컷을 수컷의 본능대로 유린하고 싶다는 갈망이 몸을 지배했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(['너무 좋아❤️ ', callname, '의 자지❤️ 정말 대단해❤️']);
          era.println();
          await era.printAndWait('살이 맞부딪히는 소리가 더욱 요란하게 울려 퍼졌다.');
          await era.printAndWait('실험실 전체가 음란한 냄새와 소리로 가득 찼다.');
          era.println();
          await tachyon.say_and_wait('또…… 또 커졌군❤️');
          await tachyon.say_and_wait([
            '쌀 것 같은가…… 아, 안에 내보내 주게❤️ 갖고 싶어…… ',
            callname,
            '의 아기를❤️',
          ]);
          await tachyon.say_and_wait([
            '좋아해…… ',
            callname,
            '에게 질내사정 당하는 게 제일 좋아❤️',
          ]);
          await tachyon.say_and_wait([
            '좁은 구멍 안에…… 마음껏 내보내 주게…… ',
            callname,
            '의 아이를 낳고 싶어❤️ ',
            callname,
            '의 새끼 모르모트를 잔뜩 낳아주고 싶네❤️',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 말을 듣자, ',
            me.get_colored_name(),
            '은(는) 더욱 무자비하게 허리를 놀렸다.',
          ]);
          await era.printAndWait([
            '아무리 ',
            tachyon.get_uma_sex_title(),
            '의 신체라 해도 그저 ',
            me.get_colored_name(),
            '의 움직임에 맞춰 휘둘릴 수밖에 없었다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 앞에서 격렬하게 흔들리는 두 유두를 움켜쥐고 힘껏 아래로 잡아당겼다.',
          ]);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(32, part_enum.breast),
            false,
          );
          era.println();
          await tachyon.say_and_wait('히이이이이익❤️');
          await tachyon.say_and_wait('가, 가버려❤️ 젖꼭지가 잡아당겨져서 가버린단 말이네❤️');
          era.println();
          await era.printAndWait('도퓨, 도퓨, 뷰루루루❤️');
          await era.printAndWait('마지막으로 뿌리 끝까지 밀어 넣으며 몇 번 더 피스톤질하자, 사정감이 폭발했다.');
          await era.printAndWait([
            '백탁액이 ',
            tachyon.get_colored_name(),
            '의 보지 구멍을 가득 채웠다.',
          ]);
          await era.printAndWait([
            '정액이 쏟아져 들어오는 순간, ',
            tachyon.get_colored_name(),
            '역시 전신을 경련하며 정점에 도달했다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '며칠간 맛보지 못했던…… ',
            callname,
            '의 자지❤️ 에헤헤❤️',
          ]);
          await tachyon.say_and_wait(['정말 최고야…… ', callname, '의…… 하으으❤️']);
          era.println();
          await era.printAndWait([
            '이제 끝났다고 생각한 ',
            tachyon.get_colored_name(),
            '이 감상을 말하려던 찰나,',
          ]);
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(32, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 육봉이 다시 한번 그녀의 입을 막아버렸다.',
          ]);
          era.println();
          await tachyon.say_and_wait('쮸웁…… 쮸우❤️');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 순종적으로 ',
            me.get_colored_name(),
            '의 육봉을 청소해 주었다.',
          ]);
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.penis),
            false,
          );
          await era.printAndWait([
            '자신의 애액과 ',
            callname,
            '의 정액으로 뒤범벅이 된 육봉은, ',
            tachyon.get_colored_name(),
            '에게 있어 지금 당장 ',
            callname,
            '이(가) 만든 도시락이 앞에 있다 해도 ',
            tachyon.sex,
            '는 아마 육봉을 우선해서 택할 만큼 매혹적이었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('다음 실험 때도…… 똑같이 부탁하네❤️ 쮸❤️ 쮸뵷❤️');
          await tachyon.say_and_wait('으읍! 으쮸❤️ 쮸루❤️');
          era.println();
          await era.printAndWait([
            '「다음에 또 하자」는 말을 돌려 말하는 ',
            tachyon.get_colored_name(),
            '의 목소리에, ',
            me.get_colored_name(),
            '의 육봉은 다시금 단단해졌다.',
          ]);
          await era.printAndWait([
            '그 유혹에 눈앞의 ',
            tachyon.get_uma_sex_title(),
            '은 다시 한번 암컷의 표정을 지었다.',
          ]);
          break;
        case 3:
          if (get_expansion(get_penis_size(0), 32, part_enum.anal) > 1) {
            life_marks.reward--;
            return;
          }
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.anal, stain_enum.anal);
          await print_event_name('실험의 보수', tachyon);
          await tachyon.say_and_wait([callname, '～ 오늘 실험도 수고 많았네.']);
          await tachyon.say_and_wait('그럼…… 보상이 필요한가❤️');
          await me.say_and_wait('부탁해.');
          await tachyon.print_and_wait('역시, 이 구멍은 아니어야 하는 게 아닌가?');
          await tachyon.print_and_wait('아래의 음탕한 구멍도 가려워서 미칠 지경인데,');
          await tachyon.print_and_wait('어째서 박히고 있는 건 이런 곳이란 말인가.');
          await tachyon.print_and_wait('게다가 이런…… 이런 자세로.');
          era.println();
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.anal),
            false,
          );
          await tachyon.print_and_wait([
            '꽉 조이는 항문이, ',
            callname,
            '의 굵직한 육봉을 빈틈없이 감싸 안았다.',
          ]);
          await tachyon.print_and_wait([
            '보지 구멍보다 주름이 많은 국문은 ',
            callname,
            '에게 더 큰 쾌감을 주는 동시에, 스스로에게도 보지 구멍의 두 배에 달하는 쾌감을 선사하고 있었다.',
          ]);
          await tachyon.print_and_wait(
            '그런 면에서 본다면, 성욕을 채우기 위한 용도로는 어쩌면 보지 구멍보다 더 유용할지도…… 하지만……',
          );
          era.println();
          await tachyon.say_and_wait(
            '이런 강아지 같은 자세라니…… 게다가 이 구멍까지…… 이건 정말 암캐가 아닌가❤️',
            true,
          );
          era.println();
          await tachyon.print_and_wait('하지만…… 곰곰이 생각해 보니 그것도 나쁘지 않을 것 같군❤️');
          await tachyon.print_and_wait([callname, '은 나만의 ', callname, '.']);
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            '은 ',
            callname,
            '전용의 암캐.',
          ]);
          await tachyon.print_and_wait(
            '그렇게 생각하자마자 자신의 몸은 기다렸다는 듯 역할에 몰입한 듯했고, 기쁜 듯 꼬리를 흔들며 주인의 비위를 맞추기 시작했다.',
          );
          era.drawLine();
          await era.printAndWait([
            '품 안의 그녀가 딴생각을 하고 있다는 것을 눈치챘는지, ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 엉덩이를 가볍게 치며 ',
            tachyon.sex,
            '에게 집중하라는 신호를 보냈다.',
          ]);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(32, part_enum.anal),
            false,
          );
          await era.printAndWait([
            '하지만 이미 역할에 완전히 몰입한 ',
            tachyon.get_colored_name(),
            '은 더욱 격렬하게 엉덩이를 흔들며 자신의 항문을 꽉 조여댔다.',
          ]);
          await era.printAndWait([
            '예상치 못한 공격에 ',
            me.get_colored_name(),
            '은(는) 순간적으로 사정 조절에 실패하고 말았다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 허리를 꽉 붙잡고, 항문 속에 며칠간 쌓아온 정액을 전부 쏟아부었다.',
          ]);
          await era.printAndWait([
            '가랑이 사이의 ',
            tachyon.get_colored_name(),
            '은 이 순간, 마치 자신의 행복을 주인에게 전하려는 암강아지처럼,',
          ]);
          await era.printAndWait('기쁘게 소변을 지려버림으로써 지금의 기분을 노골적으로 드러냈다.');
          await era.printAndWait([
            '그러나 ',
            me.get_colored_name(),
            '이(가) 미처 반응하기도 전에, 두 번째 묵직한 충격이 몰려왔다.',
          ]);
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(32, part_enum.anal);
          if (tachyon.sex_code === 0) {
            set_palam_to_max(32, part_enum.clitoris);
          }
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.anal),
            false,
          );
          era.println();
          await tachyon.say_and_wait('멍…… 멍멍❤️');
          await era.printAndWait([
            me.get_colored_name(),
            '의 당혹스러운 표정을 본 뒤에야, ',
            tachyon.get_colored_name(),
            '은 자신이 무슨 짓을 했는지 퍼뜩 정신이 든 모양이었다.',
          ]);
          await era.printAndWait('그녀의 뺨이 순식간에 홍당무처럼 붉어졌다.');
          era.println();
          await tachyon.say_and_wait([
            callname,
            '…… 아, 아니네, 이건…… 그런 게 아니라…… 자네가 생각하는 그런 게……',
          ]);
          era.println();
          await era.printAndWait('무슨 일이 일어난 건지 정확히는 모르겠지만, 일단 아무 일도 없었던 것처럼 행동하기로 했다.');
      }
    } else if (sys_check_cuckold(32)) {
      if (
        era.get('cflag:25:모집상태') === recruit_flags.yes &&
        Math.random() < 0.5
      ) {
        await tachyon.say_and_wait([
          '…… ',
          callname,
          ', 저기, ',
          sys_get_colored_callname(32, 25),
          '도…… 같이 부르지 않겠나?',
        ]);
        await tachyon.say_and_wait('오늘은 나하고만 하고 싶다고…… 아아, 그렇군.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 왠지 모르게, 조금 실망한 기색이었다.',
        ]);
      } else {
        await tachyon.say_and_wait(['……미안하네, ', callname, ', 정말 미안해.']);
        era.println();
        await era.printAndWait([
          '이유는 알 수 없었지만, 침대에 눕기 전부터 ',
          tachyon.get_colored_name(),
          '은 끊임없이 사과를 반복하고 있었다.',
        ]);
      }
    }
  }
};