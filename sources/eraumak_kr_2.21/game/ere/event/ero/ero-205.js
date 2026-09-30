/**
 * @file 베누스 파크 - 조교
 * @author 梦露
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TreveLifeMarks = require('#/data/event/life-event-marks/life-event-marks-205');

module.exports = class extends CustomizedEro {
  async ero_start() {
    const life_marks = new TreveLifeMarks(),
      me = get_chara_talk(0),
      vp = get_chara_talk(205);
    if (
      !life_marks.slavery &&
      era.get('love:205') < 50 &&
      era.get('mark:205:쾌락') >= 2 &&
      era.get('mark:205:동심') >= 2 &&
      era.get('tcvar:205:발정') &&
      era.get('tflag:강간') <= 0 &&
      vp.sex_code === 0
    ) {
      life_marks.slavery = 1;
      await era.printAndWait(
        `이 ${vp.name} 같은 순진무구한 아이의 인생 전체에 거대한 영향을 끼치고, ${vp.sex}의 남은 생 동안 끊임없이 당신을 떠올리며 마음에 두게 만든다. 이로 인해 ${vp.name}의 인생 전체를 「강간」한 듯한 만족감이 밀려와, 이루 말할 수 없을 정도로 짜릿했다.`,
      );
      await era.printAndWait(
        '정신적인 만족감도 충분히 중독성이 있지만, 육체적인 만족을 추구하기 위해서는 결국 실제적인 접촉을 거쳐야만 한다.',
      );
      await era.printAndWait(
        `${me.name}은(는) ${vp.name}를 바닥에 눕히고, 옷을 깔아 ${vp.sex}의 연약한 등덜미를 받쳐주었다. 자세를 고쳐 잡자, ${vp.get_teen_sex_title()}의 청춘이 깃든 나체, 특히 봉긋하게 솟아오른 핑크빛 가슴이 ${me.name}의 눈앞에 완전히 노출되었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${vp.name}가 쾌감으로 몽롱해진 틈을 타, 꽃망울처럼 부풀어 오른 아름다운 곡선을 따라 혀를 대고 부드럽게 핥아 올렸다. 혀끝으로 ${vp.sex}의 희고 부드러운 살결을 한 치도 빠짐없이 섬세하게 어루만지며, 바깥에서 안으로, 아래에서 위로, ${vp.sex}의 가슴을 하나씩 마음껏 침범하더니 마침내 봉긋한 정점의 붉은 유두를 향해 나아갔다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.say_and_wait('이…… 이러지 마세요, 놓아줘요……');
      await vp.say_and_wait('겨우 잊어가고 있었는데, 또 당신에게…… 안 돼요……');
      await vp.say_and_wait('으음……');
      await era.printAndWait(
        ` ${vp.name}의 가녀린 거절을 무시한 채, ${me.name}은(는) 계속해서 공세를 이어갔다. 몇 차례 핥고 빨아들인 끝에, 이빨로 ${vp.get_teen_sex_title()}의 앵두 같은 유두를 가볍게 깨물며 혀끝으로 굴렸다. 화끈거리는 욕망이 순식간에 전류가 되어 요동치는 혈액 속으로 녹아들었고, ${vp.name}에게 유일하게 남아있던 일말의 이성을 흐려놓았다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await era.printAndWait(
        `${vp.sex} 본인의 의사와는 상관없이, ${me.name}의 교묘한 애무 속에서 핑크빛 유두는 단단하게 부풀어 올라 마치 붉은 보석처럼 변해갔다. ${me.name}은(는) 아예 동그란 오른편 가슴을 한 손으로 움켜쥐며, 구형의 절반을 감싸 안고 풍만하고 탄력 있는 감촉을 느끼며 힘주어 몇 번 주물러댔다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await era.printAndWait(
        `매끄럽고 부드러운 손맛이 ${vp.get_teen_sex_title()}의 참지 못하고 터져 나오는 나지막한 신음 소리와 어우러지자, ${me.name}은(는) 반대편의 둥근 가슴을 주무르는 손길에 더욱 힘을 실었다. 이로 인해 ${vp.get_teen_sex_title()}의 아랫배가 가쁘게 들썩였고, 뽀얀 살결이 흥분의 충격 속에서 파도치듯 출렁였다.`,
      );
      era.printButton('「네 몸이 얼마나 음란해졌는지 스스로도 잘 알고 있겠지?」', 1);
      era.printButton('「설령 나를 만나지 않았더라도, 네가 거부할 수 있었을 것 같아?」', 2);
      if ((await era.input()) === 1) {
        await vp.say_and_wait('당신…… 거짓말 마세요. 제가 당신에게 굴복할 리 없어요.');
      } else {
        await vp.say_and_wait('난 절대로 당신에게 지지 않아요.');
      }
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(205, part_enum.masochism),
        false,
      );
      await era.printAndWait(
        `필사적으로 부정해 보아도, ${vp.name}가 욕망으로 달아오른 자신의 육체를 거스르기는 어려웠다. ${vp.get_uma_sex_title()}의 피가 불러온 발정기는 이제 완연한 정욕으로 바뀌어, 하얀 목덜미를 가볍게 핥고 깨무는 자극이든, 가슴과 배를 주무르고 튕겨대는 손길이든, 그 모든 것이 ${vp.sex}에게 애액을 뿜어내게 만들며 마치 구름 위를 나는 듯한 쾌감을 맛보게 했다.`,
      );
      era.printButton('계속 수치를 준다', 1);
      await era.input();
      await me.say_and_wait(
        '지기 싫다면서, 그럼 내 손가락에 묻은 이 축축하고 끈적거리는 액체는 뭐야? 어디 냄새라도 맡아볼래? 대체 뭘 저항하겠다는 거야? 네 몸에 대해선 나보다 잘 아는 사람도 없는데. 이 변태 같은 노출증 꼬맹이, 고작 내가 이렇게 쳐다보는 것만으로도 넌 벌써…',
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await era.printAndWait(
        ` ${me.name}은(는) 나지막이 비웃었고, 수치심에 죽을 것만 같은 ${vp.name}의 표정을 바라보며 눈에 대견한 기색을 띄웠다. 다시금 몸을 숙여 ${vp.get_teen_sex_title()}의 매끄러운 목덜미를 침범했다. 왼손 다섯 손가락을 모두 사용하여 ${vp.sex}의 긴장으로 팽팽해진 등덜미를 여유롭게 쓸어내렸고, 매끄러운 척추 곡선과 꼬리뼈 부근을 가볍게 매만지며 마치 춤을 추듯 움직였다. 오른손은 ${vp.sex}의 뜨겁게 달아오른 하반신에서부터 미끄러지듯 올라와, 반짝이는 액체로 흠뻑 젖은 손가락을 ${vp.sex}의 눈앞에서 흔들어대며 기고만장하게 시위했다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await era.printAndWait(
        `연이은 애무들은 ${vp.name}에게 침착하게 반항할 틈을 전혀 주지 않았다. 민감한 살결에서 끊임없이 밀려오는 강렬한 쾌감은 ${vp.sex}의 의지와 마음을 야금야금 좀먹어 들어갔다.`,
      );
      await vp.say_and_wait('으응……');
      await era.printAndWait(
        `${vp.sex}의 호흡이 거칠어짐에 따라, ${vp.get_teen_sex_title()}는 결국 무게감을 이기지 못하고 신음을 흘려보내고 말았다.`,
      );
    }
  }

  async ero_end() {
    const life_marks = new TreveLifeMarks(),
      me = get_chara_talk(0),
      vp = get_chara_talk(205);
    if (
      life_marks.slavery === 1 &&
      life_marks.slavery++ &&
      !era.get('tcvar:0:탈력')
    ) {
      era.drawLine();
      era.printButton('「절대로 나한테 고개를 숙이지 않겠다고 맹세했었지?」', 1);
      era.printButton('「그때, 네 고개는 어디에 박혀 있었지?」', 2);
      era.printButton('「조금 전까지 네가 어디에 머리를 박고 있었는지 잊어버린 모양이네.」', 3);
      await era.input();
      await era.printAndWait(
        `${vp.name}의 아름다운 눈가에서 맑은 눈물이 소리 없이 흘러내려 ${vp.sex}의 짙은 속눈썹을 적셨고, 자신만만한 겉모습 뒤에 숨겨진 나약하고 무력한 본심을 여과 없이 드러냈다.`,
      );
      await era.printAndWait(
        `그러나 이 애처로운 표정조차 ${me.name}의 이성을 흔들지는 못했다. ${me.name}은(는) 그저 혀를 내밀어 ${vp.name}의 하얀 뺨을 따라 흘러내리는 두 줄기 눈물자국을 천천히 핥아냈고, ${vp.sex}의 얼굴에 서린 차가운 물기가 채 가시기도 전에 ${vp.sex}의 귀가에 입술을 대고 소근거렸다.`,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.body),
        false,
      );
      era.printButton('「결혼 첫날밤은 백일 동안의 친절을 가져다준다지, 허니.」', 1);
      era.printButton('「내가 그동안 밤마다 공들인 정성을 봐서라도, 이번은 기분 내게 해주는 건 어때?」', 2);
      await era.input();
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(205, part_enum.masochism),
        false,
      );
      await era.printAndWait(
        `${me.name}은(는) 다정하게 속삭이면서도 오른손으로 가슴을 움켜쥐는 힘을 넌지시 더했고, 이에 ${vp.name}는 참지 못하고 가녀린 외마디 비명을 질렀다.`,
      );
      await era.printAndWait(
        `${me.name}의 말을 들은 ${vp.name}는 질끈 감고 있던 눈꺼풀을 이기지 못하고 파르르 떨었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 차갑게 콧방귀를 뀌며 두 손으로 ${vp.name}의 가늘고 매끄러운 허리를 감싸 안았고, 자신의 온몸으로 ${vp.sex}를 부드럽게 내리누르며 목소리에 한층 더 위압감을 실었다.`,
      );
      await era.printAndWait(
        `${vp.name}가 몇 차례 흐느꼈지만, ${me.name}가 무릎을 밀어 넣어 ${vp.sex}의 그 가늘고 아름다운 두 다리를 좌우로 벌렸을 때, ${vp.sex}는 별다른 반항 없이 다리를 내어주며 마치 ${me.name}의 품에 반쯤 안겨 앉은 듯한 자세가 되었다.`,
      );
      await era.printAndWait(
        `${vp.name}의 눈물범벅이 된 고운 얼굴에 자포자기한 듯한 각오가 스쳐 지나가더니, 이내 활시위를 당기듯 ${me.name}을(를) 향해 매달려 왔다. 가냘픈 두 다리도 ${me.name}의 허리를 감싸 안으며, 밑에서부터 ${me.name}을(를) 단단히 죄어왔다.`,
      );
      await era.printAndWait(
        `그 상태로 ${me.name}은(는) 조금도 멈추지 않았고, ${vp.sex}가 거의 눈을 뒤집고 혼절할 지경에 이르러서야 비로소 ${vp.sex}를 바닥에 내려놓았다.`,
      );
      set_palam_to_max(205, part_enum.clitoris);
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.foot),
        new EroParticipant(205, part_enum.clitoris),
        false,
      );
      await era.printAndWait(`거친 숨소리가 한 차례 오고 간 뒤, ${me.name}은(는) 신속하게 사후 처리를 시작했다.`);
    }
  }
};