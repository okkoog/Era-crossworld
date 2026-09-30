/**
 * @file 선데이 사일런스 - 招募
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const silence = get_chara_talk(400),
      me = get_chara_talk(0);
    await era.printAndWait([
      '조금 쌀쌀한 이른 아침, ',
      me.get_colored_name(),
      '은(는) 일어난 뒤 시간이 아직 이른 것을 확인하고, 가볍게 씻은 후 평소 일할 때 입는 평상복으로 갈아입고 학원 안을 산책하기로 했다.',
    ]);
    await era.printAndWait([
      get_trainer_title(),
      '로서, ',
      me.get_colored_name(),
      '은(는) 현재 트레센에서 꽤 괜찮은 생활을 하고 있지만, 여전히 자신의 담당을 찾기 위해 어느 정도 노력해야 했다.',
    ]);
    await era.printAndWait([
      '트레이너 기숙사를 나선 후 ',
      me.get_colored_name(),
      '은(는) 근처의 작은 숲으로 향했다. 듣자 하니 이곳에서 이따금 이상한 소리가 들려와 주변의 어린 ',
      silence.get_uma_sex_title(),
      '들에게는 원령이 숨어있는 괴담의 숲이라 불리지만, ',
      me.get_colored_name(),
      '은(는) 그 진상이 어린 ',
      silence.get_uma_sex_title(),
      '들의 소문보다 훨씬 시시하다는 것을 알고 있었다.',
    ]);
    era.println();
    await era.printAndWait([
      '갑자기 ',
      me.get_colored_name(),
      '의 귓가에 나뭇잎이 스치는 소리가 들려왔다. 이어서 운동화가 땅을 밟는 소리와 함께 일정한 숨소리가 점점 가까워져 오자, ',
      me.get_colored_name(),
      '은(는) 누군가가 이쪽으로 달려오고 있음을 깨달았다.',
    ]);
    era.printButton('（이 시간에…… 대체 누구지?）', 1);
    await era.input();
    await era.printAndWait([
      '눈앞을 가로막은 나뭇가지를 헤치고, ',
      me.get_colored_name(),
      '은(는) 다시 숲속 오솔길로 나오자 그 검은 실루엣을 보게 되었다.',
    ]);
    era.println();
    await era.printAndWait([
      '길고 부드러운 흑발과 헐렁한 체육복에 감싸인 가냘픈 실루엣이 ',
      me.get_colored_name(),
      '의 뇌리에 박혔다. ',
      me.get_colored_name(),
      '은(는) 왜 이 시간에 ',
      silence.get_uma_sex_title(),
      '가 여기서 아침 훈련을 하는지 의아했다. 아무래도 훈련을 하려면 훈련장에 가는 편이 훨씬 편할 텐데 말이다.',
    ]);
    era.println();
    await era.printAndWait([
      '과묵한 흑발의 ',
      silence.get_uma_sex_title(),
      '도 분명히 ',
      me.get_colored_name(),
      '의 존재를 눈치챘지만, ',
      silence.sex,
      '의 적안은 단지 ',
      me.get_colored_name(),
      '을(를) 한 번 힐끗 보곤 계속해서 호흡을 가다듬을 뿐이었다. 마치 ',
      me.get_colored_name(),
      '이(가) 색깔 있는 공기 덩어리라도 되는 것처럼.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 머릿속을 미친 듯이 뒤져가며 이 ',
      silence.get_uma_sex_title(),
      '에 대한 기억을 찾았다. 그렇게 ',
      me.get_colored_name(),
      '은(는) 기억을 더듬으며 길가에 멈춰 섰다.',
    ]);
    era.println();
    await silence.say_as_unknown_and_wait('안녕……');
    await era.printAndWait([
      '조용한 흑발의 ',
      silence.get_uma_sex_title(),
      '가 감정 없는 차가운 말로 ',
      me.get_colored_name(),
      '을(를) 추억 속에서 현실로 끄집어냈다.',
    ]);
    era.println();
    await me.say_and_wait([
      era.get('cflag:25:모집상태') === recruit_flags.yes ? '': '너..',
      sys_get_colored_callname(0, 25),
      '?',
    ]);
    era.println();
    await era.printAndWait([
      '그 이름을 들은 흑발의 ',
      silence.get_uma_sex_title(),
      '은(는) 눈살을 찌푸렸다. 아무래도 ',
      me.get_colored_name(),
      '이(가) 한 말에 다소 불만이 있는 듯했다.',
    ]);
    await era.printAndWait([
      '그제야 ',
      me.get_colored_name(),
      '은(는) 헐렁한 체육복 아래의 가냘픈 실루엣이 사실은 꽤나 글래머러스하다는 것을 깨달았다.',
    ]);
    silence.sex_code !== 1 &&
      (await era.printAndWait(
        '부드럽고 풍만한 가슴은 스포츠 브라로 강하게 고정된 탓인지 다소 불만스러운 듯 호흡과 함께 흔들리고 있었다.',
      ));
    await era.printAndWait([
      '육감적이면서도 힘이 넘치는 아름다운 다리는, ',
      me.get_colored_name(),
      '이(가) 보기엔 그야말로 레이스 ',
      silence.get_uma_sex_title(),
      ' 아이돌이라는 직업에 가장 잘 어울리는 다리였다.',
    ]);
    era.println();
    await era.printAndWait([
      '아무래도 ',
      me.get_colored_name(),
      '의 첫마디가 ',
      silence.sex,
      '의 심기를 건드린 모양이지만, 눈앞의 ',
      silence.get_uma_sex_title(),
      '은(는) 화내지 않고 귀를 뒤로 젖히며 말했다.',
    ]);
    await silence.say_and_wait(silence.name);
    await me.say_and_wait('어?');
    await era.printAndWait([me.get_colored_name(), '은(는) 영문을 모르겠다는 표정을 지었다.']);
    await silence.say_and_wait([
      '내 이름은 ',
      silence.actual_name,
      '야. 잘 기억해 둬. 안 그러면 다음번엔 널 보건실로 보내버릴지도 모르니까.',
    ]);
    era.println();
    await era.printAndWait([
      '눈앞에 있는 ',
      silence.get_colored_name(),
      '의 무표정한 협박이 ',
      me.get_colored_name(),
      '에게는 꽤 귀엽게 느껴졌지만, ',
      me.get_colored_name(),
      '은(는) 결코 이 자리에서 겉으로 드러낼 엄두를 내지 못했다.',
    ]);
    await era.printAndWait([
      '왜냐하면 ',
      me.get_colored_name(),
      '은(는) ',
      silence.sex,
      '가 정말로 ',
      me.get_colored_name(),
      '을(를) 보건실로 보내버릴지도 모른다는 걸 알고 있었으니까.',
    ]);
    era.printButton(
      `「그래, ${silence.name}…… 예쁜 이름이네, 너랑 잘 어울려. 기억해 둘게.」`,
      1,
    );
    await era.input();
    await era.printAndWait([
      silence.get_colored_name(),
      '의 기분이 조금 나아진 것 같았지만, ',
      me.get_colored_name(),
      '이(가) 계속해서 ',
      silence.sex,
      '에게 말을 걸려고 하자 어느샌가 말없이 떠나버렸다는 걸 깨달았다.',
    ]);
    await era.printAndWait([
      '나중에야 ',
      me.get_colored_name(),
      '은(는) 알아차렸다. ',
      silence.get_colored_name(),
      '의 눈동자는 적안이고, ',
      get_chara_talk(25).get_colored_name(),
      '의 눈동자는 금안이라는 걸.',
    ]);
    await era.printAndWait([
      '이 사실에 ',
      me.get_colored_name(),
      '은(는) 머쓱하게 머리를 긁적였다. 아무래도 두 ',
      silence.get_uma_sex_title(),
      '의 생김새가 거의 똑같았기 때문이다.',
    ]);
    era.drawLine({ content: '선발 레이스 종료 후'});
    await era.printAndWait([
      silence.get_colored_name(),
      '는 반박할 여지 없는 실력으로 1착을 차지했고, 주변의 트레이너들이 술렁이기 시작하는 것 같았다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      silence.sex,
      '는 여전히 과묵한 태도를 유지하며, 마치 어떤 트레이너와도 접촉할 생각이 아예 없는 듯했다.',
    ]);
    era.println();
    await era.printAndWait('이런 상황에서……');
    era.println();
    era.printButton(`용기 내어 ${silence.sex}에게 말을 걸어본다.`, 1);
    era.printButton(
      `（역시 막 레이스를 마치고 휴식이 필요한 ${silence.get_uma_sex_title()}를 방해하지 않는 편이 좋겠다）`,
      2,
    );
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 아직 고민하고 있을 때, ',
      silence.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '보다 한발 먼저 선택을 내린 것 같았다.',
    ]);
    await era.printAndWait([
      silence.sex,
      '는 소리 없는 유령처럼 ',
      me.get_colored_name(),
      '의 눈앞에 서 있었다. 아름다운 얼굴에 맺힌 땀방울이 햇빛 아래서 유난히 돋보였고, 부드러운 흑발은 마치 최고급 비단처럼 ',
      me.get_colored_name(),
      '의 눈앞에 펼쳐졌다. ',
      me.get_colored_name(),
      '과(와) 시선이 마주친 순간, 적안에 드물게 웃음기가 서렸다.',
    ]);
    era.println();
    await silence.say_and_wait('어때? 이제 내 이름 기억했어?');
    era.printButton(`「${silence.actual_name}, 정말 예쁜 이름이야」`, 1);
    era.printButton(
      `「너 설마 ${get_chara_talk(25).actual_name} 아니야?」`,
      2,
    );
    if ((await era.input()) === 1) {
      await silence.say_and_wait(
        '그럼, 내 트레이너가 되어 줄래? 내 이름이 네 머릿속에 영원히 남도록.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        silence.get_colored_name(),
        '의 미소가 정말 눈부시게 아름답다는 걸 깨달으면서 ',
        silence.sex,
        '가 내민 손을 잡았다.',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        '의 가느다란 손가락이 ',
        me.get_colored_name(),
        '의 손바닥을 장난치듯 간지럽혔다. 아무래도 ',
        me.get_colored_name(),
        '이(가) 수락해 준 게 무척 기뻤던 모양이다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 위장이 뒤틀릴 정도의 엄청난 충격을 느꼈다. 눈앞이 완전히 새카매지기 직전, ',
        me.get_colored_name(),
        '은(는) ',
        silence.get_colored_name(),
        '의 분노한 표정을 보았다.',
      ]);
      era.drawLine({ content: '보건실 안'});
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 보건실에서 눈을 떴고, ',
        silence.get_colored_name(),
        '는 무표정하게 옆 의자에 앉아 ',
        me.get_colored_name(),
        '을(를) 쳐다보고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 마침내 눈을 비비며 일어났다. ',
        me.get_colored_name(),
        '은(는) ',
        silence.sex,
        '가 안도하는 것을 분명하게 느낄 수 있었다.',
      ]);
      await silence.say_and_wait([
        '이제 내 이름 기억했어? 난 ',
        silence.get_colored_name(),
        '야. ',
        get_chara_talk(25).get_colored_name(),
        '는 그냥 먼 친척일 뿐이라고!',
      ]);
      await silence.say_and_wait(
        '그리고…… 사과의 의미로 네 담당이 되어 줄게. 안심해, 네가 원하는 모든 성공을 거머쥐게 해 줄 테니까.',
      );
    }
    era.set('cflag:400:모집상태', recruit_flags.yes);
    add_event(
      event_hooks.week_end,
      new EventObject(400, cb_enum.edu).set_arg('beginning'),
    );
  }
};