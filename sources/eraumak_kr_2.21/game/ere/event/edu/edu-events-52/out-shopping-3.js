const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 15] = async (urara, me, in_urara, callname, _, flags) => {
    await print_event_name('후원회•폭주!', urara);
    await in_urara.say_as_unknown_and_wait([
      '무슨 일이 있어도 우라라를 지켜주겠다고 말씀하셨죠? 걱정 마세요, 트레이너 ',
      me.get_adult_sex_title(),
      '을(를) 의심하는 건 아니니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '다만 가끔은, 설령 몸을 던져 ',
      urara.sex,
      '의 앞을 막아선다 해도, 상처 입은 내면은 대체 어떻게 고쳐주실 건가요?',
    ]);
    era.drawLine();
    await era.printAndWait([
      '상점가 사람들이 건넨 전단을 본 ',
      me.get_colored_name(),
      '은(는) 눈앞이 캄캄해졌다.',
    ]);

    era.printButton('「이게 정녕 다들 생각해내신 방법인가요?」', 1);
    await era.input();

    await era.printAndWait([
      '상점가 사람 「응? 왜 그래 트레이너 ',
      me.sex_code - 1 ? '아가씨' : '총각',
      ', 이게 무슨 문제라도 있나? 우라라도 직접 나눠주고 있다구?」',
    ]);
    await era.printAndWait([
      '손에 든 얇은 종이를 바르르 떨며, ',
      me.get_colored_name(),
      '은(는) 당장이라도 터져 나오려는 감정을 필사적으로 억눌렀다.',
    ]);
    await era.printAndWait([
      '전단에는 「',
      urara.get_colored_name(),
      '에게 아리마 기념 투표를 부탁드립니다」라고 적혀 있었고, 트레이너인 ',
      me.get_colored_name(),
      '의 기분은 갑작스러운 두통과 함께 폭발하기 직전이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이것이 모두의 선의에서 비롯된 행동임을 알기에 뭐라 말하기 어려웠고, ',
      me.get_colored_name(),
      '은(는) 불려 온 ',
      urara.get_colored_name(),
      '가 상황을 전혀 이해하지 못하고 있다는 것도 잘 알고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 근본적으로, 설령 허용되지 않는 일은 아닐지라도, 다른 ',
      urara.get_uma_sex_title(),
      '들의 노력을 부정하는 듯한 이런 방식은 분명 잘못된 것이었다.',
    ]);

    const race_history = RaceHistory.get(52);
    if (race_history.get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait([
        '설마 지난번에도 이런 방식을 썼던 걸까? 게다가 이번에는 ',
        urara.get_colored_name(),
        '까지 불러서 이런 일을 시키다니?',
      ]);
      await era.printAndWait([
        '아저씨 아주머니들, ',
        urara.get_colored_name(),
        '의 트레이너인 ',
        me.get_colored_name(),
        '이(가) 여러분의 깊은 마음을 모르는 건 아니지만, 이건 바겐세일처럼 단순한 문제가 아니란 말입니다……',
      ]);
    }
    era.printButton('「……우라라는 지금 어디에 있나요?」', 1);
    await era.input();

    await era.printAndWait([
      '상점가 사람 「응? 아마 길 따라가다 보면 보일 텐데…… 잠깐, ',
      me.sex_code - 1 ? '아가씨' : '총각',
      ' 어디 그렇게 급하게 가는 거야?」',
    ]);

    era.printButton(
      '「죄송합니다! 갑자기 급한 일이 생각나서요, 짐은 여기 둘 테니 돌아올 때 가져갈게요!」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '방금 산 채소와 전단을 내팽개치고, ',
      me.get_colored_name(),
      '은(는) 가게 주인에게 서둘러 작별을 고한 뒤 상점가 행사일의 인파 속으로 즉시 뛰어들었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 활약이 점점 늘어남에 따라 이 거리도 과거의 쓸쓸함에서 벗어났지만, 지금의 이런 번영은 뜻밖에도 ',
      me.get_colored_name(),
      '에게 적잖은 골칫거리를 안겨주었다.',
    ]);
    await era.printAndWait([
      '결국 인파가 가장 밀집된 곳에서, ',
      me.get_colored_name(),
      '은(는) 지나가는 사람들에게 둘러싸인 벚꽃색 무리를 멀리서 발견했다.',
    ]);
    await era.printAndWait([
      '그러나 안도감은 찰나에 불과했다. ',
      me.get_colored_name(),
      '은(는) 인파 속에서 서서히 다가오는 또 다른 한 사람을 발견했고, 진정되려던 마음은 곧장 나락으로 떨어졌다.',
    ]);
    await era.printAndWait([
      '그 사람은 ',
      urara.get_colored_name(),
      '와 함께 「',
      race_infos[race_enum.febr_sta].get_colored_name(),
      '」에서 겨루었던 친구였으나, 지금 ',
      urara.sex,
      '의 두 다리에는 무거운 붕대가 칭칭 감겨 있었다.',
    ]);
    await era.printAndWait([
      '마치 모두에게 무시당하는 듯, 어두운 표정의 ',
      urara.sex,
      '는 상처투성이인 다리를 이끌고 놀라울 정도로 가볍게 인파를 빠져나왔다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      urara.get_colored_name(),
      ' 앞에 멈춰 선 ',
      urara.sex,
      '의 무력하게 늘어진 손에는 구겨진 전단지 한 장이 쥐어져 있었다……',
    ]);
    await era.printAndWait([
      '곧 무슨 일이 일어날지 직감한 ',
      me.get_colored_name(),
      '은(는) 급히 힘을 주어 ',
      urara.get_colored_name(),
      '를 에워싼 인파를 뚫으려 했으나, 오히려 차가운 사람들의 흐름에 휩쓸려 점점 더 멀리 밀려났다.',
    ]);
    await me.say_and_wait('잠깐, 아직 말하지 마, 이건 아니야, 어쩔 수 없다 해도 조금만 기다려 봐——');
    await urara.say_and_wait(
      '——아, 오랜만이야! 학원에서 한동안 안 보여서 궁금했는데, 요즘 어떻게 지냈어?',
    );
    await urara.say_and_wait('아, 그리고 다리는…… 다친 거야? 대체 언제……');
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「……괜찮아, 사실 별거 아냐. 그런데 우라라, 이건 또 뭐야…… 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에 나가려고 이러는 거야?」',
    ]);
    await era.printAndWait([
      '우라라의 열기를 차갑게 끊어내며, 복잡한 표정의 친구는 전단을 꼬마 ',
      urara.get_uma_sex_title(),
      '의 앞에 들이밀었다.',
    ]);
    await urara.say_and_wait([
      '응? 그런 거야? 다들 이게 우라라의 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '와 관련 있다고 해서, 그래서 우라라도 도와주러 왔어!',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「',
      urara.get_colored_actual_name(),
      ', 너 정말 네가 뭘 하고 있는지 모르는 거야? 장난해 지금……?」',
    ]);
    await urara.say_and_wait(
      '음, 그게, 잘은 모르겠지만 우라라는 다들 전단지 돌리는 걸 돕고 있는 거겠지?',
    );
    await urara.say_and_wait('어? 왜 그래? 너 정말 괜찮은 거야? 안색이 너무 안 좋아……');
    await era.printAndWait([
      '실망에서 절망으로, 그리고 붕괴에 이르기까지는 단 몇 초면 충분했다. 부정적인 감정을 폭발시킨 ',
      urara.get_teen_sex_title(),
      '는 다가오려는 친구를 거칠게 밀쳐냈다.',
    ]);
    await era.printAndWait(
      '뒤이어 날카로운 뺨을 때리는 소리가 들렸고, 히스테리에 가까울 정도로 자제력을 잃은 꾸짖음이 터져 나왔다.',
    );
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「장난치지 마! 제발 우라라 너, 더 이상 이렇게 유치하게 굴지 말란 말이야! 이 종이를 똑바로 봐! 네가 지금 무슨 짓을 하고 있는지 알기나 해?!」',
    ]);
    await era.printAndWait([
      '친구에게 갑작스러운 폭행을 당한 ',
      urara.get_colored_name(),
      '는 바닥에 떨어진 종이들과 함께 어지럽게 나뒹굴었다.',
    ]);
    await era.printAndWait([
      '믿기지 않는다는 듯 붉게 부어오른 화끈거리는 뺨을 감싸 쥐자, 망연자실한 눈물이 꼬마 ',
      urara.get_uma_sex_title(),
      '의 눈가에 억울하게 고여 갔다.',
    ]);
    await era.printAndWait([
      '하지만 자신이 대체 무엇을 잘못했는지조차 이해하지 못한 채, 터져버린 감정은 잠시 말을 잃은 ',
      urara.sex,
      '에게 변명할 여지조차 주지 않았다.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「다들 나가고 싶은 레이스를 위해…… 이기고 싶은 레이스를 위해 노력하고 있어! 모든 것을 걸고 있단 말이야!」',
    ]);
    await era.printAndWait([
      '울음 섞인 비명을 지르며, ',
      urara.get_teen_sex_title(),
      '의 마음속에 쌓여있던 상실감과 불만이 쏟아져 나왔다.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「그런데 지금, 우라라 너는…… 감히 남을 이용해 그렇게 쉽게 꿈을 이루려고 하다니……」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「물론 너는 모른다고 말하겠지, 하지만 그렇게 되면…… 자신을 불태우고 있는 사람들은 대체 뭐가 되는 거냐고!」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「결국 우라라는 자신을 위해서라면 사기꾼까지 될 수 있다는 거네…… 이럴 거면 차라리 다신 레이스 같은 거 나가지 마!」',
    ]);
    await urara.say_and_wait('……아니야…… 우라라는 그런 게…… 미안해…… 하지만……');
    await era.printAndWait([
      '억눌린 흐느낌은 친구의 비난 속에서 낮은 흐느낌으로 변해갔고, 꼬마 ',
      urara.get_uma_sex_title(),
      '의 무방비한 마음은 눈가를 타고 흐르는 눈물을 더 이상 참지 못했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 변명하고 싶었으나, 정신적인 충격으로 쉰 목소리는 제대로 된 문장을 단 한 마디도 뱉어내지 못했다.',
    ]);
    await era.printAndWait([
      '그리고 절망적인 대치 상황 속에서, 상처 입은 ',
      urara.get_teen_sex_title(),
      '가 먼저 눈물을 닦아내더니, 침묵하며 ',
      urara.get_colored_name(),
      '를 향해 한 걸음 내디뎠다……',
    ]);
    await era.printAndWait([
      '갑작스러운 사태에 누구 하나 나서지 못하던 구경꾼들 사이를 마침내 뚫고 나온 ',
      me.get_colored_name(),
      '은(는) 꼬마 ',
      urara.get_uma_sex_title(),
      '를 향해 뻗어지던 손목을 붙잡았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 갑작스러운 행동에 놀란 듯, 이성을 되찾은 ',
      urara.get_uma_sex_title(),
      '는 죄책감 서린 표정으로 손을 빼내고는 불편한 다리를 이끌고 원래 자리로 물러났다.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「미안해요, 당신이 우라라의 트레이너인가요? 저는 그저 ',
      urara.sex,
      '를 일으켜 세워주려 했을 뿐이에요……」',
    ]);

    era.printButton(
      '「진정됐다면 잘 생각해 봐, 지금 너는 우라라에게 주변의 방관자들만큼이나 공포스러운 존재라고.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '분노를 간신히 억누르며, ',
      me.get_colored_name(),
      '은(는) 두 사람 사이를 몸으로 반쯤 가로막고 떨고 있는 ',
      urara.get_colored_name(),
      '를 향해 뒤로 손을 뻗었다.',
    ]);

    era.printButton(
      '「학생, 네 감정을 이해 못 하는 건 아니야. 하지만 지금 친구를 상처 입히는 너는 또 뭐가 된다고 생각해?」',
      1,
    );
    await era.input();
    era.printButton(
      `「아무 상관 없는 친구에게 화풀이하는 너는 우라라를 비난할 자격이 없어. 지금 당장 우라라에게서 떨어져!」（호감도+20）`,
      1,
    );
    era.printButton(
      `「우라라가 널 받아준다고 해서 함부로 굴어도 된다고 생각하지 마. 볼일 끝났으면 이제 우라라 곁에서 비켜!」（애정도+10）`,
      2,
    );
    const ret = await era.input();

    await era.printAndWait(
      '앞에 선 어른의 억눌리지 않은 분노에 위압감을 느낀 것인지, 아니면 상점가 사람들이 달려오는 소리를 들은 것인지.',
    );
    await era.printAndWait([
      '자신의 충동으로 인해 부서져 버린, 이제는 돌이킬 수 없는 우정에 부끄러워진 ',
      urara.get_teen_sex_title(),
      '는 마침내 쉰 목소리로 원래의 목적을 내뱉었다.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「……죄송해요. 원래는 트레센을 떠나기 전에 우라라를 보러 오고 싶었을 뿐인데, 이렇게 되어버렸네요……」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「원래는 기쁜 이야기를 나누고, 제대로 작별 인사를 하려고 했어요. 정말 죄송합니다……」',
    ]);
    await era.printAndWait([
      '말을 마친 ',
      urara.get_teen_sex_title(),
      '는 무거운 몸을 이끌고 돌아섰고, 절뚝거리는 뒷모습은 흩어지는 인파 사이로 서서히 사라졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 팔에 힘없이 기대어 있는 작은 ',
      urara.get_uma_sex_title(),
      '는 지금 이 순간 뒷모습을 쫓아갈 수도, 붙잡을 말조차 떠올릴 수도 없었다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 저 애…… 저 애 설마……',
    ]);
    await era.printAndWait([
      '비록 제대로 된 문장을 만들지는 못했지만, ',
      urara.get_colored_name(),
      '는 필사적으로 소리를 내며 ',
      me.get_colored_name(),
      '에게 친구가 떠나기 전 했던 말의 의미를 확인하려 했다.',
    ]);

    era.printButton(
      `「……응, ${urara.sex}의 다리는 이제 더 이상 달릴 수 없어. ${urara.sex}에게는…… 꿈을 이룰 수 있는 다음 기회란 없어.」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '유감스럽게도 이번 「다시는 볼 수 없다」는 말은 짓궂은 농담이 아니었으며, ',
      me.get_colored_name(),
      ' 또한 진실이 눈앞에 있는 상황에서 비현실적인 희망을 지어낼 수는 없었다.',
    ]);

    if (race_history.get_result(95 + 7)?.race === race_enum.febr_sta) {
      if (race_history.get_result(95 + 7)?.rank === 1) {
        await urara.say_and_wait([
          '그럼…… ',
          callname,
          ', 우라라가……저 애의 것을 빼앗은 거야…… 우라라가……',
        ]);
        await urara.say_and_wait([
          '친구의 웃음을 뺏어갔어…… 우라라가 직접…… ',
          urara.sex,
          '의 행복을 뺏어버린 거야……',
        ]);
      } else {
        await urara.say_and_wait([callname, '…… 우라라 때문이야? 방금 그건 우라라가……']);
        await urara.say_and_wait([
          '우라라가…… 친구의 미소를 망쳐버렸어…… 지금까지 대체 난 뭘 하고……',
        ]);
      }
    }
    era.printButton('「우라라, 그만해. 이건 네 잘못이 아니야!」', 1);
    await era.input();

    await urara.say_and_wait([
      '하지만 그렇다 해도…… ',
      urara.sex,
      '의 미소도, 행복도…… 왜 ',
      urara.sex,
      '가 이런 일을 겪어야 하는 거야……',
    ]);
    await urara.say_and_wait(
      '우라라가 해온 모든 게…… 전부 잘못된 거였어? 대체 어떻게 해야 다들……',
    );
    await urara.say_and_wait('이대로라면…… 우라라의 달리기…… 나…… 레이스도……');
    await era.printAndWait([
      '피를 토해내듯, ',
      urara.get_colored_name(),
      '가 뱉어내는 말 한마디 한마디는 마치 스스로를 채찍질하는 부정처럼 들렸다.',
    ]);
    await era.printAndWait([
      '이로 인해 피투성이가 된 것은 ',
      urara.get_colored_name(),
      ' 한 명만이 아니었다. ',
      me.get_colored_name(),
      '과(와) 그 현장에 있던 ',
      urara.get_colored_name(),
      '를 위해 모인 모든 이가 꼬마 ',
      urara.get_uma_sex_title(),
      '의 부서지는 목소리에 질식할 것만 같았다.',
    ]);
    await era.printAndWait([
      '이것이 ',
      urara.sex,
      '의 잘못이 아님을 모두가 알고 있었다. 누군가에게 희망을 전하고 싶었던 봄바람이 결코 누군가를 상처 입히려 했을 리 없었다.',
    ]);
    await era.printAndWait([
      '하지만 지금 ',
      me.get_colored_name(),
      '이(가) 할 수 있는 유일한 일은, ',
      urara.get_colored_name(),
      '를 품에 숨겨주고 잠시나마 아무런 생각 없이 슬픔을 쏟아내게 하는 것뿐이었다.',
    ]);
    await era.printAndWait([
      '비록 타인에 의해 비롯된 이 슬픔이 애초에 선량한 ',
      urara.sex,
      '의 몫이 아니라, 소위 「선의」라는 것을 이기적으로 강요했던 어른들의 몫이었을지라도 말이다.',
    ]);
    await era.printAndWait([
      '상점가 사람 「',
      me.sex_code - 1 ? '아가씨' : '총각',
      ', 이제 어떻게 해야 하나……」',
    ]);

    era.printButton(
      '「……일단, 방금 무얼 하고 있었든, 무얼 했든, 지금은 전부 중단해 주세요……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '품 안에서 슬픔을 토해내는 담당을 꽉 껴안으며, ',
      me.get_colored_name(),
      ' 또한 자책하며 눈을 감았다.',
    ]);
    await era.printAndWait([
      '만약 그때 조금만 더 일찍 올 수 있었더라면, 혹시 ',
      urara.get_colored_name(),
      '는……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '상점가의 ',
      urara.get_colored_name(),
      ' 아리마 투표 홍보 활동은 당일부로 중지되었고, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '를 데리고 트레센으로 돌아왔다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '를 달래기 위해 최선을 다했음에도 불구하고, 꼬마 ',
      urara.get_uma_sex_title(),
      '의 부서진 표정은 지켜본 모든 이의 마음속에 깊게 각인되었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이전부터 ',
      urara.get_colored_name(),
      '가 「위험」을 피할 수 있도록 수많은 가능성을 생각했으나, 이 예기치 못한 재앙은 결국 ',
      urara.sex,
      '의 몸 위로 떨어지고 말았다.',
    ]);
    await era.printAndWait([
      '왜 하필 ',
      urara.get_colored_name(),
      '여야 했을까? ',
      urara.get_colored_name(),
      '의 내면에는 이제 무엇이 남게 될까? ',
      urara.sex,
      '가 대체 무슨 잘못을 했다고……',
    ]);
    await era.printAndWait([
      '꼬마 ',
      urara.get_uma_sex_title(),
      '의 마음의 상처를 메울 방법을 찾기 전까지, 아마도 많은 이가 쉽사리 잠들지 못할 것이다……',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '……보세요, 또 한 사람의 희망이 부서졌네요. 굳이 변화하려 하기 전에는 우라라도 이런 생각은 안 해봤겠죠?',
    );
    await in_urara.say_as_unknown_and_wait([
      '하지만 ',
      urara.sex,
      '는 아마 평소와 다름없이 지내려고 스스로를 억지로 다그치겠죠. 왜냐하면 ',
      urara.sex,
      '는 우라라고, ',
      urara.sex,
      '는 남에게 부담을 주는 걸 싫어하니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그러니 이야기가 끝나기 전까지는, 그저 ',
      urara.sex,
      '의 마음을 천천히 고쳐나가 보는 수밖에요. 그 외에 다른 방법은 없으니까요……',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '하지만 이야기는 여기서 끝나지 않아요. 부디 끝까지 버텨주세요……',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 5, 0, 5, 0],
      0,
      undefined,
      true,
    );
    flags.wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      flags.wait_flag;
  };

  handlers.food = async (urara, me, _, callname, __, flags) => {
    await print_event_name('붕어빵과 편식 대책', urara);
    await era.printAndWait([
      '어느 날 야외 훈련 중의 틈을 타서, ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 마치 강적을 마주한 듯 붕어빵 포장마차 앞에 섰다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 준비됐어? 오늘은 같이 먹기로 약속한 날이라구?',
    ]);

    era.printButton(
      '「나는 문제없는데, 주로 우라라 네가 걱정이지…… 실례합니다, 랜덤 맛 붕어빵 두 개 주세요.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '옆에서 의욕에 찬 눈빛을 보내는 ',
      urara.get_colored_name(),
      '를 힐끗 본 뒤, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 점원에게 「히든 메뉴」 두 개를 주문했다.',
    ]);
    await urara.say_and_wait(
      '괜찮아! 설령 싫어하는 맛이 걸린다고 해도 우라라는 꼭 다 먹을 거니까!',
    );
    await urara.say_and_wait([
      '그럼 ',
      callname,
      ', 같이 한입에 먹는 거야…… 으아…… 고, 고추냉이 맛이야……!',
    ]);
    await era.printAndWait([
      '결과적으로 벤치에 엉덩이를 붙이기도 전에, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 손에 든 간식에게 역습이라도 당한 듯 펄쩍 뛰어올랐다.',
    ]);
    await era.printAndWait([
      '어른인 ',
      me.get_colored_name(),
      '은(는) 매운맛에 얼굴이 빨개진 ',
      urara.get_colored_name(),
      '를 침착하게 지켜보며, 자신의 손에 들린 피망 맛 괴식을 묵묵히 먹어 치웠다.',
    ]);

    era.printButton(
      '「우라라, 괜찮아? 못 버티겠으면 그건 내가 해결해 줘도 되는데?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '으으~ 괜찮아! 우라라 혼자서 다 먹을 수 있어! 간다…… 으아아……',
    );
    await era.printAndWait([
      '얼굴이 빨개진 채로도 의욕이 넘치는 꼬마 담당을 보며, ',
      me.get_colored_name(),
      '은(는) 말없이 근처로 가서 ',
      urara.sex,
      '에게 줄 달콤한 음료 두 잔을 사 왔다……',
    ]);
    await era.printAndWait([
      '결론적으로 벌칙 게임 같은 간식을 먹게 되었지만, ',
      me.get_colored_name(),
      '의 격려 덕분에 ',
      urara.get_colored_name(),
      '의 컨디션은 오히려 상승했다.',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(52, 1);
  };
};