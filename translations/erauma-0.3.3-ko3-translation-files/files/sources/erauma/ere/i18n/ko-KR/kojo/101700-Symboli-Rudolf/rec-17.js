/**
 * @file 심볼리 루돌프 - 모집
 * @author 露娜俘虏
 * @author Claude (기존 2.21 한국어 구조 이식)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name}은(는) 머리를 긁적이며 욕실에 고인 물을 한참 동안 바라보다가, 이내 어깨를 으쓱했다.`,
    );
    await era.printAndWait(
      `이른 아침부터 욕실의 모든 설비가 파업을 일으켰다. ${you.name}은(는) 알고 있었다. 시간과 노력을 들여도 그것들이 순순히 말을 들을 보장은 없다는 것을.`,
    );
    era.printButton('「차라리 일하러 가는 게 낫겠어.」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 시원스럽게 문을 닫고 가방을 챙겨 트레센으로 향했다.`,
    );
    era.println();

    await era.printAndWait(
      `또 새로운 학기다. ${you.name}은(는) 생각했다. 어찌 됐든 트레센도 작년의 우울함에서 벗어나야 할 때라고.`,
    );
    await era.printAndWait('새로운 학기, 새로운 희망, 그리고 새로운 이야기.');
    await era.printAndWait(
      `역에서 전차를 기다리던 중, ${you.name}은(는) 승강장에 놓인 신문을 무심코 집어 들었다. 그곳엔 늠름한 자태의 우마무스메와 함께 커다란 여섯 글자가 적혀 있었다.`,
    );
    await era.printAndWait('심볼리 루돌프!');
    await era.printAndWait(
      `${you.name}은(는) 휘파람을 불며 신문을 옆구리에 끼고 전차에 올랐다.`,
    );
    await era.printAndWait(
      '——그 심볼리 루돌프가 데뷔한다는 소식은 이미 최근 최고의 화젯거리였다.',
    );
    await era.printAndWait(
      '업무 중이든 일상적인 휴식 중이든, 사람이 모이는 곳이라면 어디든 흥분 섞인 토론이 오갔다.',
    );
    await era.printAndWait('???「학생회 회장, 【황제】 심볼리 루돌프!」');
    await era.printAndWait(
      '???「대체 누가 저 황제의 트레이너가 될 기회를 잡게 될까?」',
    );
    await era.printAndWait(
      `???「그나저나, ${luna.sex}에게 트레이너가 정말 필요하긴 할까?」`,
    );
    await era.printAndWait(
      '???「심볼리 가문의 최고 걸작이잖아. 데뷔 전부터 만인의 주목을 받는 스타라고. 하, 정말 대단한 거물이야!」',
    );
    await era.printAndWait(
      `이런 소리를 들을 때마다 ${you.name}의 마음속에는 자부심이 가득 찼다. 마치 그 황제의 위명이 ${you.name}과(와) 깊은 관계가 있는 것처럼.`,
    );
    await era.printAndWait(
      `실제로 ${you.name}은(는) 심볼리 가문에서 근무한 적이 있었다. 더 정확하게는, 심볼리 가문에서 한동안 어시스턴트 트레이너로 일했었다.`,
    );
    await era.printAndWait(
      `비록 거물들의 뒤를 따르며 잔심부름이나 하던 처지라 이름을 날릴 기회는 없었지만, 그 시절 ${you.name}은(는) 심볼리 가문의 어린 우마무스메들과 꽤 가깝게 지냈다.`,
    );
    await era.printAndWait(
      `그중에서도 '루나'라는 이름의 아이는 특히 ${you.name}과(와) 한시도 떨어지지 않으려 했다.`,
    );
    await era.printAndWait(
      `심볼리 가문을 떠난 지 꽤 오랜 시간이 흘렀지만, 그 경력 덕분에 ${you.name}과(와) 트레센의 심볼리 멤버들은 서로 묘한 친밀감을 느끼고 있었다.`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        `그 시절을 회상하며 ${you.name}은(는) 상쾌한 기분을 느꼈다. 언젠가 ${you.name}도 저렇게 강력한 우마무스메와 나란히 서서 중앙의 이름을 떨칠 수 있기를 바랄 뿐이었다.`,
      );
    } else {
      await era.printAndWait(
        `그 황당했던 시절의 회상을 멈추고, ${you.name}은(는) 하늘을 향해 깊은 한숨을 내쉬며 자부심 뒤에 숨겨진 불안을 토해냈다. 새 학기가 시작되면 ${you.name}이(가) 담당할 아이는 필연적으로 심볼리 루돌프와 경쟁하게 될 것이고, 앞날에 제약이 많을 것이다. 부디 좌절을 겪더라도 그녀가 담담히 나아갈 수 있기를 바랐다.`,
      );
    }
    era.println();

    await era.printAndWait(
      `학원에 들어서자 ${you.name}은(는) 지나다니는 사람이 거의 없다는 것을 깨달았다. 아니, 정확히는 정문이 굳게 닫혀 있었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 자신이 좀 일찍 왔다는 것을 깨달았다…… 아니, 너무 일찍 왔다. 그냥 욕실이랑 사투나 벌일 걸 그랬나.`,
    );
    await era.printAndWait(
      `하지만 모처럼 시간이 났으니 여기저기 둘러보기로 했다. ${you.name}은(는) 담장을 넘어 학원 안으로 뛰어내렸다.`,
    );
    await era.printAndWait('학원은 고요했다.');
    await era.printAndWait(
      `${you.name}은(는) 호기심 어린 눈으로 주위를 둘러보았다. 평소라면 이 시간에 교사 구역에 들어오는 사람은 없겠지만, 정상적인 시간대의 트레센은 항상 북적거렸다.`,
    );
    await era.printAndWait(
      `그런데 무언가 이상했다. ${you.name}의 귀에 누군가 흐느끼는 소리가 들린 것 같았다.`,
    );
    await era.printAndWait(
      `어째선지 ${you.name}은(는) 전례 없는 초조함을 느끼기 시작했다.`,
    );
    await era.printAndWait(`${you.name}은(는) 무의식적으로 몸을 움직였다.`);
    await era.printAndWait('영혼 깊은 곳의 무언가가 당신을 떠밀고 있는 것 같았다.');
    await you.say_and_wait('더 빨리 가지 않으면!', true);
    await you.say_and_wait('더 빨리 그 아이를 찾지 않으면!', true);
    await era.printAndWait(
      `${you.name}은(는) 외딴 곳을 향해 달렸고, 숨이 턱 끝까지 차올랐을 때야 이곳이 개인 훈련장이라는 것을 알아차렸다.`,
    );
    await era.printAndWait('그런 걸 따질 때가 아니야——!');
    await era.printAndWait(
      `${you.name}은(는) 안으로 뛰어들어 설익게 닫힌 문을 밀쳐냈다.`,
    );
    era.println();
    await era.printAndWait(
      `한 우마무스메가 몸을 웅크린 채 바닥에 쓰러져 있었다. ${luna.sex}는 머리를 감싸 쥐고 있었다. 마치 극심한 통증에 습격당한 듯 보였다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 말을 걸려 했으나, 발이 마치 못박힌 듯 바닥에서 떨어지지 않았다.`,
    );
    await era.printAndWait(
      `분명 심볼리 루돌프다—— ${you.name}은(는) 입을 벌렸지만 목이 바짝 타들어 갔다.`,
    );
    await era.printAndWait(
      `위대한 이름과 명성 아래에서, ${luna.sex}는 그저 꽃다운 나이의 한 명의 ${luna.teen_sex_title}일 뿐이었다.`,
    );
    await era.printAndWait(`동시에 ${you.name}은(는) 격렬하게 흔들렸다.`);
    await era.printAndWait('그 누구도 천하무쌍의 「황제」가——');
    await era.printAndWait('그 철벽같다던 심볼리가——');
    await era.printAndWait('모든 우마무스메가 「에덴」에서 달리길 원했던 그 존재가——');
    await era.printAndWait(
      `아무도 없는 곳에서 울며 구토하고 있을 줄은 꿈에도 몰랐을 것이다. 하지만 ${you.name}을(를) 더 뒤흔든 것은……`,
    );
    era.printButton('「설마 너는——」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 자신이 미쳤다고 생각했다. 하지만 ${you.name}은(는) 알고 있었다. 결코 그 아이를 잊을 리 없다는 것을.`,
    );
    await era.printAndWait('——어린 사자처럼 날뛰며 안절부절못하던 그 아이를.');
    await era.printAndWait(
      '——절대 지기 싫어하며 의기양양하게 당신을 산과 바다로 끌고 다니던 그 아이를.',
    );
    await era.printAndWait(
      '——제멋대로지만 사랑스럽게, 영원히 당신을 잊지 않겠다던 그 아이를.',
    );
    await era.printAndWait(
      `${you.name}의 영혼에는 ${luna.sex}의 이름이 새겨져 있었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 결코 ${luna.sex}의 이름을 잊지 않는다.`,
    );
    era.printButton('「루나!」', 1);
    await era.input();

    await era.printAndWait(
      `쇠약해진 ${luna.teen_sex_title}가 고개를 들어 당신을 바라보았다.`,
    );
    await luna.say_and_wait(`……${you.actual_name}……?`);
    await era.printAndWait(
      `그 말을 끝으로 ${luna.sex}는 드디어 한계에 다다른 듯, 비틀거리며 바닥으로 쓰러졌다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 자신도 놀랄 정도의 속도로 그녀에게 달려가 ${luna.sex}를 받아 안았다.`,
    );
    await luna.say_and_wait('정말로 당신이구나……');
    await era.printAndWait(`말을 마친 뒤, ${luna.sex}는 깊은 잠에 빠져들었다.`);

    era.drawLine();
    await era.printAndWait(
      `심볼리 루돌프—— 그렇게 불리기 전, 이 ${luna.teen_sex_title}의 원래 이름은 루나였다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 달리는 것을 좋아했고, 단것을 좋아했으며, 게으르게 하루를 보내는 것을 좋아했다.`,
    );
    await era.printAndWait(
      `가문의 기대를 짊어지기 전까지, ${luna.sex}는 그저 심볼리 가문의 어리광쟁이이자 사랑받는 어린 아가씨였을 뿐이다.`,
    );
    await era.printAndWait(
      '하지만 나이가 들수록 루나의 압도적인 실력과 숨 막히는 날카로움은 심볼리 가문을 기쁘게 했다.',
    );
    await era.printAndWait(
      `${luna.sex}는 너무나 강력했다. 모든 욕망을 만족시키기에 충분할 만큼.`,
    );
    await era.printAndWait('루나는 기억한다. 어느 날부터인가 자신의 삶이 변했다는 것을.');
    await era.printAndWait(
      `${luna.sex}는 더 이상 루나가 아니었다. 그때부터 ${luna.sex}는 심볼리 루돌프가 되었다.`,
    );
    await era.printAndWait('하지만 사람이 어떻게 갑자기 다른 사람으로 변할 수 있겠는가?');
    await era.printAndWait(`루나는 밤낮으로 고뇌했다. 그러던 어느 날, ${luna.sex}는——`);
    era.printButton('「루나…… 루나……!」', 1);
    await era.input();

    await era.printAndWait(
      `마침내 ${you.name}의 부름을 들은 듯, 루나가 서서히 눈을 떴다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 쓰게 웃었다. 드디어 내가 망가진 걸까? 어째서 ${you.actual_name_with_title}의 목소리가 들리는 거지.`,
    );
    await era.printAndWait(
      `${you.sex}가 트레센에 있다는 건 알았지만, 그 시절 이후 다시는 ${you.sex}를 끌어들이지 않겠다고 다짐했었는데.`,
    );
    await era.printAndWait(
      `하지만 곧 ${luna.sex}는 예민하게 깨달았다. 이것은 꿈이 아니라는 것을.`,
    );
    era.drawLine();
    era.printButton('「루나, 정말 너 맞니?」', 1);
    era.printButton('「루나, 네가 심볼리 루돌프였다고?!」', 2);
    await era.input();
    await era.printAndWait(
      `품 안의 루나를 바라보며 ${you.name}은(는) 묻지 않을 수 없었다.`,
    );
    await luna.say_and_wait('결국 내 곁으로 와 주었구나.');
    await era.printAndWait(
      '루나는 체념한 듯 쓸쓸한 미소를 지었다. 그리고 이내 기쁨의 눈물을 흘렸다.',
    );
    await luna.say_and_wait(
      '조금만 더 일찍 왔더라면 난…… 가버려. 오늘 있었던 일은 아무에게도 말하지 마. 황제는 나약해서는 안 되니까.',
    );
    await era.printAndWait(
      `${you.name}은(는) 루나의 말을 끝까지 듣지 못했다. ${luna.sex}가 당신을 그곳에서 쫓아냈기 때문이다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 분명히 알 수 있었다. ${luna.sex} 역시 당신을 알아봤다는 것을.`,
    );
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `그 후 며칠 동안 ${you.name}은(는) 넋이 나간 상태로 지냈다.`,
    );
    await era.printAndWait(
      `루나가 당신을 보고 싶어 하지 않는다면, ${luna.sex}를 보러 갈 수 없었다.`,
    );
    await era.printAndWait(
      `지금껏 ${you.name}은(는) 단 한 번도 ${luna.sex}의 뜻을 거스른 적이 없었다. 어른이 되고 트레이너가 되었어도, ${luna.sex}가 입을 열면 그게 무엇이든 고분고분 따를 수밖에 없었다.`,
    );
    await era.printAndWait(
      `${you.name}이(가) 불안에 떨고 있을 때, 갑자기 학생회의 간사 한 명이 트레이너 사무실로 급히 뛰어 들어왔다.`,
    );
    await era.printAndWait(
      `${luna.sex}는 ${you.name}을(를) 찾으러 온 것이었다. 아니, ${luna.sex}가 가져온 것은 당신에게 보내는 편지 한 통이었다.`,
    );
    await era.printAndWait(
      '간사 「이것은 학생회장 심볼리 루돌프 님으로부터 온 직접 지명입니다.」',
    );
    await era.printAndWait(
      `${luna.sex}는 무척 흥분한 기색으로 편지를 ${you.name}의 손에 직접 쥐여 주었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 어색하게 웃으며 이 「뜨거운 감자」를 받아 들었다.`,
    );
    await era.printAndWait(
      `임무를 마친 간사는 바람처럼 사라졌다. ${you.name}은(는) 적당히 둘러대고 조퇴했다.`,
    );
    await era.printAndWait(
      `그 길로 ${you.name}은(는) 며칠 동안 들어가지 않았던 집으로 최대한 빠르게 돌아가 문을 굳게 잠갔다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 집 가장 안쪽에 있는 욕실로 뛰어 들어가 문에 등을 기대고 숨을 몰아쉬었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 자신의 손이 끊임없이 떨리는 것을 느꼈다. 한참을 애쓴 끝에야 겨우 떨리는 손으로 봉투를 찢을 수 있었다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 편지지를 꺼냈다—— 순백의 종이 위에는 오직 세 글자만이 커다랗게 적혀 있었다.`,
    );
    await era.printAndWait('「구해줘」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name}은(는) 바닥에 털썩 주저앉았다. 제때 청소하지 못한 욕실 바닥의 물 때문에 새로 산 바지가 흠뻑 젖어버렸다.`,
    );
    await era.printAndWait(`${you.name}은(는) 깨달았다. 자신에게 거부할 권리 따위는 없다는 것을.`);
    await era.printAndWait(
      `${you.name}은(는) 심볼리 루돌프——아니, 루나에게 대체 무슨 일이 있었는지 알지 못한다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 또한 알고 있었다. 자신이 루나의 요청을 절대로 거절하지 못할 것임을.`,
    );
    await era.printAndWait('설령 그 앞에 어떤 지옥이 기다리고 있을지라도.');

    era.drawLine();
    await era.printAndWait([
      ' ',
      luna.get_colored_actual_name(),
      '와 계약에 성공했습니다.',
    ]);
  },
};
