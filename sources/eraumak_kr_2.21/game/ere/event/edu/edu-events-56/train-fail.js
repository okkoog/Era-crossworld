const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { buff_colors } = require('#/data/color-const');
const KitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { fumble_result } = require('#/data/train-const');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {TrainFailParams} extra_flag
 */
module.exports = async (kitaru, me, callname, hook, extra_flag) => {
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  const edu_marks = new KitaruEduMarks();

  if (
    me.sex_code > 0 &&
    kitaru.sex_code !== 1 &&
    !edu_marks.fortune_train_fail &&
    era.get('love:56') > 75
  ) {
    // 첫 훈련 실패 시 고정으로 발생하는 이벤트
    edu_marks.fortune_train_fail++;
    await print_event_name('촉진', kitaru);
    await era.printAndWait([
      '훈련에 실패한 ',
      kitaru.get_colored_name(),
      '를 공주님 안기 자세로 보건실까지 데려다주었다. 다행히 ',
      kitaru.sex,
      '는 다치지 않았으나, 예방 차원의 검사는 필요했다.',
    ]);
    await era.printAndWait([
      '검사 과정에서 ',
      kitaru.sex,
      '의 견갑골과 오금에 닿은 ',
      me.get_colored_name(),
      '의 손길을 의식했는지, ',
      kitaru.get_colored_name(),
      '의 얼굴에 옅은 홍조가 피어올랐다.',
    ]);
    await era.printAndWait([
      '보건실의 하얀 침대 가장자리에 앉아, ',
      me.get_colored_name(),
      '에게 폐를 끼쳤다는 사실에 자책하던 ',
      kitaru.get_teen_sex_title(),
      '는 어색한 침묵 속에서 보건의가 오기를 기다리며 안절부절못한 채 바닥만 응시했다.',
    ]);
    await kitaru.say_and_wait(['저기, ', callname, '……']);
    await era.printAndWait([
      '보건의는 아마 급한 환자를 돌보고 있는 모양이었다. 트레센 학원에서 훈련에 실패하는 ',
      kitaru.get_uma_sex_title(),
      '가 한둘이 아니니 말이다. 결국 기초적인 발 점검, 즉 촉진은 ',
      me.get_colored_name(),
      '이(가) 직접 할 수밖에 없었다.',
    ]);
    era.printButton('「벗어봐」', 1);
    await era.input();
    await kitaru.say_and_wait(['에엣! ', callname, ', 설마 직접 하시게요!?']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 유난스러운 반응을 꾹 참으며, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 신고 있는 운동화를 가리켰다.',
    ]);
    era.printButton('신발을 벗긴다', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 허리를 숙여 신발 끈을 풀고 ',
      kitaru.sex,
      '의 운동화를 천천히 벗겨내었다. 그러자 하얀 오버 니삭스에 감싸여 살결이 살짝 비치는 매끈한 발이 ',
      me.get_colored_name(),
      '의 앞에서 발끝을 꼿꼿이 세웠다.',
    ]);
    era.printButton('「양말도 벗어야지」', 1);
    await era.input();
    await kitaru.say_and_wait(['그, 그건! ', callname, '……']);
    await kitaru.say_and_wait('이건 제가 직접 할게요오.');
    await era.printAndWait([
      '얼굴이 빨개진 ',
      kitaru.get_colored_name(),
      '는 침대맡에 앉아 먼저 왼쪽 다리를 굽혀 침대 위에 올렸다. 나름대로 가리려 애썼으나, 플리츠 스커트 아래의 풍경이 결국 드러나고 말았다.',
    ]);
    await era.printAndWait([
      '치맛자락 틈새로 파란 줄무늬 팬티에 감싸인 작은 엉덩이가 보였다. 침대에 걸터앉은 탓에 평소보다 살짝 퍼진 듯한 모양새였다.',
    ]);
    await era.printAndWait([
      '허벅지에 자국을 남기던 스타킹의 끝부분을 잡아당겨, 근육의 유려한 곡선을 따라 종아리를 지나 둥글고 하얀 다리를 드러내며 한땀 한땀 말아 내렸다. 다리 살이 가늘게 떨렸고, 이내 양발의 스타킹은 작은 덩어리가 되었다.',
    ]);
    await kitaru.say_and_wait(['저, 저기, ', callname, '…… 다, 다음은요?']);
    await era.printAndWait([
      '눈에 띄게 수줍어하는 ',
      kitaru.get_colored_name(),
      '는 고개를 숙인 채 양발을 겹쳐 만지작거렸고, 분홍빛 발가락들은 서로를 비비며 꼼지락거렸다.',
    ]);
    era.printButton('손을 뻗는다', 1);
    await era.input();
    await era.printAndWait([
      '부끄러움에 살짝 웅크려진 ',
      kitaru.get_colored_name(),
      '의 발, 정확히는 오른발이 ',
      me.get_colored_name(),
      '의 손안에 들어왔다.',
    ]);
    await kitaru.say_and_wait('아앗……');
    await era.printAndWait([
      '무척이나 아름다운 곡선을 그리는 발바닥과 앙증맞은 발가락. 훈련 뒤의 열기로 발그스레한 온기가 느껴졌다. ',
      me.get_colored_name(),
      '은(는) 발바닥부터 발목까지 손가락으로 훑으며, 겉보기엔 인간과 다를 바 없는 이 작은 발이 달릴 때 그 엄청난 가속도를 어떻게 버텨내는지 내심 감탄했다.',
    ]);
    await kitaru.say_and_wait('히얏…… 후우……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 입가에서 거친 숨소리가 새어 나왔다.',
    ]);
    await era.printAndWait([
      '이 정도면 ',
      kitaru.get_colored_name(),
      '에게 아무런 이상이 없다는 것을 확신하기에 충분했다. 하지만……',
    ]);
    await era.printAndWait('계속할까?');
    era.printButton('그만둔다', 1);
    era.printButton('계속한다', 2);
    if ((await era.input()) === 2) {
      await era.printAndWait([
        '손길을 더 위로 옮겨, 적당한 탄력이 느껴지는 종아리와 무릎을 지나 허벅지까지 훑어 올라갔다.',
      ]);
      await kitaru.say_and_wait('으으응……');
      await era.printAndWait([
        '허벅지 근육은 이성의 손길에 닿아 처음엔 딱딱하게 굳는 듯했으나, 이내 ',
        kitaru.get_colored_name(),
        '는 상대를 자신의 운명의 파트너로 인식한 듯 부드럽게 힘을 풀었다.',
      ]);
      await kitaru.say_and_wait('하야앙!');
      await era.printAndWait([
        '손가락 끝으로 근육의 상태를 확인하며 마사지하듯 주무르자, 이미 촉진의 경계를 넘어선 듯한 분위기가 감돌았다. ',
        kitaru.get_colored_name(),
        '의 호흡에도 핑크빛 기류 특유의 젖은 기운이 섞여 들었다.',
      ]);
      await kitaru.say_and_wait('응…… 히얏!!');
      await era.printAndWait([
        me.get_colored_name(),
        '의 손가락이 실수인지 의도인지 ',
        kitaru.sex,
        '의 허벅지 안쪽 깊숙한 곳에 닿았을 때, ',
        kitaru.get_colored_name(),
        '는 짧은 비명을 내질렀다. 그제야 ',
        me.get_colored_name(),
        '은(는) 고개를 들어 ',
        kitaru.sex,
        '와 시선을 맞추었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 시선을 느낀 ',
        kitaru.get_colored_name(),
        '는 깜짝 놀란 듯 옆머리로 붉게 달아오른 뺨을 가리려 애썼으나, 평소의 삐죽삐죽한 머리칼로는 역부족이었다.',
      ]);
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '연분홍색이던 뺨은 이제 완전히 붉은 홍조에 잠식되었다. ',
        me.get_colored_name(),
        '의 촉진에 몸을 맡긴 채 병상에 앉아 있던 ',
        kitaru.get_colored_name(),
        '의 몸은 흐느적거리며 무너져 내렸고, 셔츠 너머로 드러난 피부마저 붉게 상기되어 있었다.',
      ]);
      await kitaru.say_and_wait(['으…… 하아! 저기, ', callname, '?']);
      era.printButton('「……응? 후쿠키타루? 괜찮아?」', 1);
      await era.input();
      await kitaru.say_and_wait('네, 넵…… 그게, 저는 괜찮아요오……');
      await kitaru.say_and_wait(['그러니까, ', callname, '…… 문제없으시죠?']);
      await era.printAndWait([
        '머뭇거리며 왼쪽 다리에 다시 스타킹을 신으려던 ',
        kitaru.get_colored_name(),
        '가 고개를 들어 ',
        me.get_colored_name(),
        '을(를) 바라보았다. 기분 탓인지 그 눈빛에는 묘한 기대감이 서려 있었다.',
      ]);
      await era.printAndWait('계속할까?');
      era.printButton('그만둔다', 1);
      era.printButton('마치카네 후쿠키타루의 발을 붙잡는다', 2, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('마치카네 후쿠키타루를 밀어 넘어트린다', 3, {
        disabled: era.get('love:56') < 75,
      });
      switch (await era.input()) {
        case 2:
          await kitaru.say_and_wait([callname, '…… 윽❤️!?']);
          await era.printAndWait([
            '눈앞의 ',
            kitaru.get_uma_sex_title(),
            '가 경악하는 사이 ',
            kitaru.sex,
            '의 왼쪽 발목을 붙잡아 높게 치켜들었다. ',
            kitaru.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '의 갑작스러운 행동에 표정 관리를 포기하고 얼굴을 붉게 물들이자, 얇은 하얀 실크에 감싸인 발바닥을 바지 너머로 ',
            me.get_colored_name(),
            '의 팽팽해진 텐트 위에 올려두었다.',
          ]);
          await kitaru.say_and_wait(['아, ', callname, ', 설마 여기서 지금……']);
          await kitaru.say_and_wait('……발로 해달라는 건가요?');
          await era.printAndWait([
            '상대의 의도를 알아차린 듯, 침대 위의 밤색 머리 ',
            kitaru.get_uma_sex_title(),
            '가 고개를 들어 ',
            me.get_colored_name(),
            '의 의중을 물었다.',
          ]);
          await kitaru.say_and_wait([
            '아…… 알겠어요. 그럼 ',
            callname,
            ', 문 쪽 좀 잘 봐주세요.',
          ]);
          await kitaru.say_and_wait([
            '조금 뒤에 제게 그럴 정신이 남아있을지 모르겠으니까요.',
          ]);
          await era.printAndWait([
            '허락이 떨어지자마자, 아까 촉진이 끝난 뒤 미처 스타킹을 신지 못한 오른발의 맨발가락이 ',
            me.get_colored_name(),
            '의 바지 지퍼를 끌어 내렸다.',
          ]);
          await era.printAndWait(['지익～']);
          await kitaru.say_and_wait('크다아……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            '가 작게 벙긋거린 입 모양은 분명 그렇게 말하고 있었다.',
          ]);
          await era.printAndWait([
            '이어서 하얀 오버 니삭스를 신은 왼발과, 전혀 다른 감촉의 오른 맨발을 합쳐 발의 터널을 만들었다.',
          ]);
          await era.printAndWait([
            '굵직한 육봉 위를 천천히 문지르며, 기둥에 솟은 핏줄 마디마디를 자극했다.',
          ]);
          await era.printAndWait([
            '한참을 비벼대자 쫙 펼쳐진 발가락 사이로 투명하고 끈적한 은사가 실처럼 늘어졌다.',
          ]);
          await kitaru.say_and_wait('으응…… 응!');
          await era.printAndWait([
            '하지만 속도가 너무 느렸다. 이래서는 언제 사정에 도달할지 알 수 없었다.',
          ]);
          era.printButton('양발을 붙잡는다', 1);
          await era.input();
          await kitaru.say_and_wait('으으읏!……');
          await era.printAndWait([
            '침대를 짚고 있던 ',
            kitaru.get_colored_name(),
            '는 중심을 잃고 뒤로 쓰러졌다. 대신 쿠퍼액으로 끈적해진 하얀 스타킹을 신은 왼발과 매끄러운 오른 맨발이 ',
            me.get_colored_name(),
            '에게 발목을 잡힌 채 높게 들려 육봉 위에 얹어졌다.',
          ]);
          await kitaru.say_and_wait([callname, ', 너, 너무 갑작스러워요!']);
          await era.printAndWait([
            '낮은 목소리로 ',
            me.get_colored_name(),
            '을(를) 나무랐지만, 이미 이성을 잃기 직전인 ',
            me.get_colored_name(),
            '은(는) 아랑곳하지 않았다.',
          ]);
          await era.printAndWait([
            '마치 쓰고 버릴 기구처럼 거칠게 ',
            kitaru.get_colored_name(),
            '의 양발을 사용하기 시작했다.',
          ]);
          await era.printAndWait([
            '굵은 성기 위에서 서로 다른 색의 원을 그리며, ',
            me.get_colored_name(),
            '의 두 손이 이전보다 훨씬 빠른 속도로 성기를 왕복하자 질척한 마찰음이 보건실에 울려 퍼졌다.',
          ]);
          await kitaru.say_and_wait('자지 님…… 너무 뜨거워요오～!');
          await era.printAndWait([
            '민감한 발바닥으로 전해지는 화끈한 감촉과 농후한 수컷의 냄새. 양발을 붙잡힌 ',
            kitaru.get_colored_name(),
            '는 마치 사냥꾼의 덫에 걸린 여우처럼, 상체는 보건실 매트리스에 파묻힌 채 ',
            kitaru.get_uma_sex_title(),
            '특유의 유연함으로 허리를 꺾어 야한 각도를 만들어냈다.',
          ]);
          await kitaru.say_and_wait('운명의 사람❤️ 너무 격렬해서, 발이, 뜨거워요오～!');
          await era.printAndWait(['목소리가 점점 커지며 통제를 벗어나려 하고 있었다.']);
          era.printButton('꾸짖는다', 1);
          await era.input();
          await me.say_and_wait([
            '좀 조용히 해! 아까 촉진할 때부터 이 음란한 발들은 이미 반응하고 있었잖아!',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '의 호통에 ',
            kitaru.get_colored_name(),
            '의 얼굴에는 넋이 나간 듯한 음란한 표정이 떠올랐고, 괴로운 듯 읍읍거리는 신음만을 내뱉었다.',
          ]);
          await kitaru.say_and_wait('에헤헤…… 거친 운명의 사람도, 너무 좋아아～!');
          await era.printAndWait([
            '잘게 떨리는 ',
            kitaru.get_colored_name(),
            '의 발목을 꽉 움켜쥐고, 화풀이하듯 이 발나홀을 탐닉했다.',
          ]);
          await kitaru.say_and_wait(['하아～ 하아～ 하앙!']);
          await kitaru.say_and_wait(['가버려엇❤️ 가버려어❤️ 으읏……']);
          await era.printAndWait([
            '농후하고 끈적한 정액이 ',
            me.get_colored_name(),
            '에게 붙잡혀 힘이 풀린 발을 시작으로, 급히 오므린 발바닥 사이로 뿜어져 나왔다. 몇 방울은 튀어 올라 ',
            kitaru.get_colored_name(),
            '의 얼굴과 옷에 하얀 점을 남겼다.',
          ]);
          await era.printAndWait([
            '진득한 백탁액으로 인해 왼쪽 스타킹의 색이 짙게 변했다. ',
            me.get_colored_name(),
            '은(는) ',
            kitaru.get_colored_name(),
            '의 발목을 잡은 채, 아직 여운이 가시지 않은 ',
            kitaru.get_colored_name(),
            '의 발을 자신의 벗어놓은 외투에 문질러 닦아내게 했다.',
          ]);
          await era.printAndWait(['빨리 치워야겠군. 보건의가 돌아오면 큰일이니까.']);
          hook.arg = 1;
          if (!era.get('talent:56:신의발')) {
            era.set('talent:56:신의발', 1);
            await era.printAndWait([
              kitaru.get_colored_name(),
              '가 ',
              {
                color: buff_colors[2],
                content: '[신의 발]',
              },
              ' 특성을 획득했다!',
            ]);
          }
          break;
        case 3:
          era.printButton('「다리 벌려.」', 1);
          await era.input();
          await kitaru.say_and_wait('에엣!?');
          await era.printAndWait([
            me.get_colored_name(),
            '의 명령에 ',
            kitaru.get_colored_name(),
            '는 고분고분하게 손을 허벅지 옆에 두었다.',
          ]);
          await era.printAndWait([
            '부들부들 떨리는 손으로 직접 다리를 벌리자, 아까 전의 촉진으로 인해 ',
            me.get_colored_name(),
            '때문에 듬뿍 젖어버린 팬티가 드러났다.',
          ]);
          await quick_into_sex(56);
          hook.arg = 1;
      }
    }
    await era.printAndWait([
      '검사 결과 이상이 없음을 확인한 뒤, ',
      kitaru.get_colored_name(),
      '에게 푹 쉬라고 당부했다.',
    ]);
  } else if (extra_flag.fumble) {
    await print_event_name('무리 금지!', kitaru);
    await era.printAndWait([
      '훈련 도중 부상을 입은 ',
      kitaru.get_colored_name(),
      '를 데리고 보건실을 찾았다.',
    ]);
    await kitaru.say_and_wait('으으…… 오늘 운세가 생각만큼 순탄치 않네요오!');
    await kitaru.say_and_wait('혹시 대흉의 전조 아닐까요?');
    await era.printAndWait([
      '보건실 침대에 앉아 부어오른 환부를 문지르던 ',
      kitaru.get_colored_name(),
      '는 큰일이라도 난 듯한 표정을 지었다.',
    ]);
    era.printButton('「너무 깊게 생각하지 마!」（실패를 수용하고 결과를 감수한다）', 1);
    era.printButton(
      '「차라리 쉬는 동안 행운 의식이라도 할래?」（벗어나기를 시도하나, 더 큰 대가를 감수한다）',
      2,
    );
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '말과 함께 후쿠키타루의 헝클어진 머리카락을 쓰다듬어 주었다. ',
        me.get_colored_name(),
        '의 약간은 거친 손길에 ',
        kitaru.get_teen_sex_title(),
        '는 그제야 불필요한 잡생각을 멈추었다.',
      ]);
      await kitaru.say_and_wait(['헤헤! 듣고 보니 그렇네요. 으샤, ', callname, '!']);
      await kitaru.say_and_wait('푹 쉬고 금방 나을게요!');
      await era.printAndWait([
        '하얀 침대에 홀로 남은 ',
        kitaru.get_colored_name(),
        '는 못내 아쉬운 듯 보건실을 나서는 ',
        me.get_colored_name(),
        '을(를) 배웅했다.',
      ]);
      hook.arg = 0;
    } else {
      await era.printAndWait([
        '제안을 듣자마자 침대에 기운 없이 누워있던 ',
        kitaru.get_colored_name(),
        '의 눈에 다시 생기가 돌기 시작했다.',
      ]);
      await era.printAndWait([
        '그 뒤 ',
        kitaru.get_colored_name(),
        '의 지휘 아래 의식에 필요한 장소들을 꾸미기 시작했고, 이윽고 보건실 안에는 무언가를 모시는 신단 같은 것이 들어섰다.',
      ]);
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await era.printAndWait('의식을 준비하느라 몸을 움직인 탓에 상처가 악화된 모양이다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '와 함께 새로 온 보건의에게 호된 꾸중을 들어야 했다.',
        ]);
        hook.arg = -1;
      } else {
        await era.printAndWait('의외로 정말 효과가 있었다!');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '가 보건실에 새로 들어온 환자들에게 신이 나서 시라오키 님에 대해 포교하는 것을 지켜보았다.',
        ]);
        hook.arg = 1;
      }
    }
  } else {
    await print_event_name('몸조리 잘하기', kitaru);
    await era.printAndWait([
      '또다시 훈련 도중 상처를 입은 ',
      kitaru.get_colored_name(),
      '를 데리고 보건실로 향했다.',
    ]);
    await kitaru.say_and_wait('아앗! 전혀 예상하지 못했어요오!');
    await kitaru.say_and_wait('분명 오늘 제비에서는 대길이라고 나왔는데 말이죠!');
    era.printButton('「푹 쉬도록 해!」（실패를 수용하고 결과를 감수한다）', 1);
    era.printButton(
      '「너무 점에만 의지하지 마!」（벗어나기를 시도하나, 더 큰 대가를 감수한다）',
      2,
    );
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('으으! 알겠어요오.');
      await era.printAndWait([
        '하얀 이불 속에 몸을 푹 파묻은 ',
        kitaru.get_colored_name(),
        '는 이내 깊은 잠에 빠져들었다.',
      ]);
      hook.arg = 0;
    } else {
      await kitaru.say_and_wait(['아! ', callname, ' 말씀이 맞을지도 모르겠네요!']);
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await era.printAndWait([
          '하지만 다음 날 보건실로 ',
          kitaru.sex,
          '를 문병 갔을 때, ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.sex,
          '가 또 새로운 점술 방식을 제안하는 것을 듣게 되었다.',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 아무래도 교훈을 얻지 못한 모양이다.',
        ]);
        hook.arg = -1;
      } else {
        era.drawLine({ content: '다음 날'});
        await kitaru.say_and_wait(['오오! ', callname, ', 어디가 문제였는지 알아냈어요!']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '가 그날의 훈련 중 자신이 어떤 실수를 했는지 ',
          me.get_colored_name(),
          '에게 진지하게 복기하는 모습을 의외라는 듯 지켜보았다.',
        ]);
        hook.arg = 1;
      }
    }
  }
};