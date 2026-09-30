/**
 * @file 토카이 테이오 - 조교
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');
const TeioNormalCommunications = require('#/event/ero/ero-lines-3/normal-communications');
const TeioNormalMakingOuts = require('#/event/ero/ero-lines-3/normal-making-outs');

class TeioNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, { communications: true, making_outs: true });
    this.communications = new TeioNormalCommunications(this);
    this.making_outs = new TeioNormalMakingOuts(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true });
    this.normal = new TeioNormalLines(this);
  }

  async report_pregnant_between_weeks(teio, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id !== 3) {
      return await super.report_pregnant_between_weeks(
        teio,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    if (era.get('status:3:다리부상') > 0) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 숙여 손에 든 보고서를 읽고, 그 안에 적힌 정보를 받아들인 뒤 창가에 앉아 있는 담당을 향해 시선을 올렸다.',
      ]);
      await era.printAndWait([
        '노을빛이 실내로 비스듬히 쏟아지며, 자신의 아랫배를 어루만지는 ',
        teio.sex,
        '의 손 위로 내려앉았다. 그리고 그 빛은 살짝 흔들리는, 힘없이 처진 ',
        teio.sex,
        '의 가느다란 종아리에도 닿아 있었다.',
      ]);
      await teio.say_and_wait(['트레이너…… 트레이너어.']);
      await era.printAndWait([
        teio.sex,
        '는 살짝 미소 지으며 자신의 배를 가리키고는, ',
        me.get_colored_name(),
        '에게 이쪽으로 오라며 손짓했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 결심을 굳히고, 길게 늘어진 그림자를 밟으며 그녀에게 다가갔다.',
      ]);
      await era.printAndWait([me.get_couple_title(), '은 이제 한 가족이다.']);
    } else {
      await teio.say_and_wait(['트레이너, 트레이너어——!']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 무슨 일이 일어났는지 미처 파악하기도 전에, 당황해서 달려온 담당을 무의식적으로 두 팔 벌려 껴안았다. 한참 뒤에야 ',
        teio.sex,
        '가 손에 소중히 들고 있는 서류의 내용을 이해했다.',
      ]);
      await era.printAndWait(['정말 그런 건가……']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 시선이 아래로 향하며 ',
        teio.sex,
        '의 아랫배에 머물렀다.',
      ]);
      await me.say_and_wait(['그곳에, ', teio.sex, '와 나의……'], true);
      await era.printAndWait([
        '품 안의 ',
        teio.get_colored_name(),
        '가 움찔하며 몸을 떨자, ',
        me.get_colored_name(),
        '은(는) 정신을 차리고 담당의 눈과 마주했다. ',
        teio.sex,
        ' 역시 ',
        me.get_colored_name(),
        '을(를) 바라보았고, 그 눈빛은 점차 온화하고 성숙하게 변해갔다.',
      ]);
      await era.printAndWait([
        '좋아. ',
        me.get_colored_name(),
        '은(는) 생각했다. 이제부터 세워야 할 계획에는 훈련뿐만이 아닐 것 같다고.',
      ]);
    }
  }
};
