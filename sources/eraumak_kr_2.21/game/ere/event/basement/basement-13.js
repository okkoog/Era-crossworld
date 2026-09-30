/**
 * @file 메지로 맥퀸 - 지하실
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await mcqueen.say_and_wait(['그러니까……당신을 보내달라는 건가요?']);
    await era.printAndWait(['생각할 필요도 없이 거절당할 것이 뻔한 요청이었지만……']);
    await mcqueen.say_and_wait(['좋아요, 이쪽으로 오시죠.']);
    await era.printAndWait([
      '그 순간, ',
      me.get_colored_name(),
      '은(는) 고개를 번쩍 들고 믿을 수 없다는 듯 ',
      mcqueen.get_colored_name(),
      '을 바라보다가, 망설임 없이 뻣뻣해진 다리를 끌며 문가로 다가갔다.',
    ]);
    await mcqueen.say_and_wait(['메지로 저택은 넓으니, 제가 밖으로 안내해 드리죠.']);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      '의 물 흐르듯 자연스러운 태도에 ',
      me.get_colored_name(),
      '은(는) 요청이 이렇게나 순조롭게 풀린 것이 믿기지 않았다.',
    ]);
    await era.printAndWait(['메지로 저택 정문에 도착하자, 그곳엔 이미 차 한 대가 대기하고 있었다.']);
    await me.say_and_wait('고마워……');
    await era.printAndWait([
      mcqueen.get_colored_name(),
      '에게 무미건조하게 작별 인사를 건네고 뒤도 돌아보지 않고 떠나려 했지만, 손이 ',
      mcqueen.get_colored_name(),
      '에게 붙잡혔다.',
    ]);
    await mcqueen.say_and_wait([
      '그가 당신의 아파트까지 데려다줄 거예요. 하지만 다시는 그 불쾌한 파리떼들이 꼬이지 않도록 하세요. 제가 아주 곤란해질 테니까요.',
    ]);
    await era.printAndWait([
      '경고하는 듯한 목소리에 ',
      me.get_colored_name(),
      '은(는) 몸을 떨었다. 동시에 자신이 이곳을 떠나더라도 결코 ',
      mcqueen.sex,
      '와의 인연에서 벗어날 수 없음을 깨달았다.',
    ]);
  }

  async ask_release_reject() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await mcqueen.say_and_wait(['그러니까……당신을 보내달라는 건가요?']);
    await era.printAndWait(['생각할 필요도 없이 거절당할 것이 뻔한 요청이었지만……']);
    await mcqueen.say_and_wait(['어째서 떠나고 싶어 하시는 건가요?']);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      '이 이 질문을 ',
      me.get_colored_name(),
      '에게 던진 시점에서, 이미 떠날 수 없다는 결말은 정해져 있었다.',
    ]);
    await mcqueen.say_and_wait([
      '모든 비용을 스스로 해결해야 하는 아파트로 돌아가는 것보다, 의식주 걱정 없는 이곳에 머무는 것이 더 낫지 않겠어요?',
    ]);
    await mcqueen.say_and_wait(['그저 당신의 자유와 관심을 맞바꾸기만 하면 될 뿐인데……']);
  }

  async ask_time() {
    const mcqueen = get_chara_talk(this.id);
    await mcqueen.say_and_wait(['시간을 묻고 싶으신가요?']);
    await era.printAndWait([
      '이 요청을 들은 ',
      mcqueen.get_colored_name(),
      '은 알 수 없는 미소를 지었다.',
    ]);
    await mcqueen.say_and_wait([
      '일상적인 고민을 할 필요가 없는 이곳에선, 시간 따위 알 필요 없답니다.',
    ]);
  }

  back_basement() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    era.print([
      '밀폐된 공간에서 얼마나 지났을까, ',
      me.get_colored_name(),
      '은(는) 지하실 입구에서 발소리를 감지했다. 이 발소리의 주인은 ',
      mcqueen.get_colored_name(),
      ' 외에는 아무도 없었다.',
    ]);
    mcqueen.say(['다녀왔어요~ ', callname, '님.']);
    era.print([
      '몸이 약간 젖은 ',
      mcqueen.get_colored_name(),
      '은(는) 어깨에 멘 가방 외에도 손에 보냉백 하나를 들고 있었다.',
    ]);
    mcqueen.say(['파르페를 한 상자 가져왔답니다. 같이 맛보도록 할까요?']);
    era.print([
      '봉투를 열자 생크림의 달콤한 향기가 퍼져 나갔지만, ',
      mcqueen.get_colored_name(),
      '은 살짝 미간을 찌푸린 채 손에 든 스푼을 좀처럼 움직이지 않았다.',
    ]);
    mcqueen.say(['여기에 ', callname, '을(를) 가둔 뒤로, 대체 얼마 만에 먹는 파르페인가요?']);
    mcqueen.say([
      '아니…… 당신을 여기에 가두어 둔 사이에 몰래 먹으러 다닌 건 아니랍니다. 다만…… 지금은 파르페를 먹어도 예전 같은 맛이 나질 않네요.',
    ]);
  }

  async battle_escape() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      '가득한 기대를 안고 열쇠 구멍에 열쇠를 꽂아 넣자, 아무런 저항 없이 돌아갔고 살짝 밀자 밖에서 들어오는 빛이 보였다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '은(는) 여전히 바닥에 쓰러져 있는 ',
      mcqueen.get_colored_name(),
      '을 돌아보며, ',
      mcqueen.sex,
      '가 입버릇처럼 말하던 「일심동체」를 떠올렸다.',
    ]);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      '의 그 우아한 모습 이면에 숨겨진 실체를 보고 난 뒤에도, 과연 그 일심동체의 관계를 유지할 수 있을까?',
    ]);
    await era.printAndWait([
      '몇 초간 망설였지만, 결국 자신의 담당 우마무스메를 차가운 바닥에 홀로 내버려 둘 수는 없었다. ',
      me.get_colored_name(),
      '은(는) ',
      mcqueen.get_colored_name(),
      '의 몸을 안아 들고 이 사랑의 감옥을 떠났다.',
    ]);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      '잠시 몸싸움이 이어진 끝에, 컨디션이 좋지 않았던 ',
      me.get_colored_name(),
      '은(는) 단숨에 ',
      mcqueen.get_colored_name(),
      '의 관절기에 제압당했다.',
    ]);
    await mcqueen.say_and_wait(['저를 이기려 들다니 너무 천진난만하시네요, ', callname, '.']);
    await mcqueen.say_and_wait(['저도 나름 격투술을 조금 배웠답니다?']);
    await mcqueen.say_and_wait([
      '이렇게 말 안 듣는 ',
      callname,
      '은 잠시 잠들게 해서 얌전하게 만드는 수밖에 없겠네요.',
    ]);
    await era.printAndWait([
      mcqueen.get_colored_name(),
      '의 경멸 어린 어조가 끝나기 무섭게 뒷덜미에 충격이 가해졌고, 순식간에 의식을 잃었다.',
    ]);
  }

  async battle_prison() {
    const mcqueen = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await me.say_and_wait(['열쇠…… 열쇠는 어디 있지?!']);
    await era.printAndWait([
      '주변에서 열쇠의 흔적을 찾을 수 없자, 도망치고 싶다는 집념은 ',
      me.get_colored_name(),
      '을(를) 더욱 광기로 몰아넣었다. 결국 열쇠 찾는 것을 포기하고, 몰래 숨겨두었던 따는 도구란 도구는 모조리 문 자물쇠에 쏟아부었다.',
    ]);
    await era.printAndWait([
      '하지만 자신의 것이 아닌 손 하나가 가슴을 어루만지는 감촉에 ',
      me.get_colored_name(),
      '은(는) 식은땀을 흘리며 도구를 바닥에 떨어뜨리고 말았다.',
    ]);
    await mcqueen.say_and_wait(['도망치지 못했네요?']);
    await mcqueen.say_and_wait(['다행히 제가 미리 대비해서 열쇠를 딴 곳에 숨겨두었거든요.']);
    await era.printAndWait([
      '가느다란 손가락이 ',
      me.get_colored_name(),
      '의 뺨을 쓰다듬더니, 이내 뒷덜미에 충격이 전해졌고 순식간에 의식을 잃었다.',
    ]);
  }

  async battle_success() {
    const mcqueen = get_chara_talk(this.id);
    await era.printAndWait([
      '격렬한 몸싸움 끝에, ',
      mcqueen.get_colored_name(),
      '의 몸이 마침내 바닥으로 쓰러졌다.',
    ]);
    await era.printAndWait([
      '긴장으로 떨리는 자신의 손과 눈앞에 쓰러진 ',
      mcqueen.get_colored_name(),
      '을 번갈아 보던 중, 짧은 공백기를 거쳐 마침내 자신이 ',
      mcqueen.get_colored_name(),
      '을 이겼다는 사실을 깨달았다.',
    ]);
    await era.printAndWait([
      '진정하기 위해 주먹을 꽉 쥐고는 손에 든 도구를 내던지고, 지하실 문을 열 수 있는 열쇠를 뒤지기 시작했다.',
    ]);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    if (!out_of_prison || !is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    era.print(['기억 속에 남아있는 자물쇠 따기 기술을 동원해 온 힘을 다한 끝에 겨우 문을 여는 데 성공했다.']);
    era.print([
      '하지만 서둘러 떠나려던 찰나, ',
      mcqueen.get_colored_name(),
      '과 정면으로 마주치고 말았다.',
    ]);
    era.print([
      mcqueen.get_colored_name(),
      '은',
      me.get_colored_name(),
      '을(를) 본 순간 표정이 차갑게 굳어버렸고, 그 모습에 ',
      me.get_colored_name(),
      '은(는) 등줄기가 서늘해졌다.',
    ]);
    mcqueen.say(['어머나, ', callname, '…… 지금 도망치려던 참인가요?']);
    era.print([
      mcqueen.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '에게 천천히 다가오자, ',
      me.get_colored_name(),
      '은(는) 뒷걸음질 치며 한 걸음씩 다시 지하실 안으로 밀려 들어갔다.',
    ]);
    mcqueen.say(['알고 계시나요? 저는 당신에 대한 생각을 막 바꾸려던 참이었답니다.']);
    mcqueen.say(['하지만 ', callname, '은 여전히 이렇게 말을 안 들으시니, 정말 고민이네요.']);
    era.print([mcqueen.get_colored_name(), ' 이(가) 다시 문을 잠갔다.']);
    mcqueen.say(['아무래도 ', callname, '께 더 많은 일심동체를 쏟아부어야 할 모양이네요……']);
  }

  out() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13);
    mcqueen.say(['음…… 생각해보니 오늘은 일정이 있었네요.']);
    mcqueen.say(['잠시 자리를 비워야 할 것 같아요. 알겠죠? ', callname, '.']);
    if (era.get('relation:13:0') < 0) {
      mcqueen.say(['허튼수작 부릴 생각은 하지 않는 게 좋을 거예요.']);
      era.print([
        mcqueen.get_colored_name(),
        '이 이 말을 내뱉었을 때, 그 어조는 무척이나 차가웠다.',
      ]);
    } else {
      mcqueen.say(['금방 돌아올 테니, 여기서 얌전히 기다려 주세요.']);
    }
  }

  strike_success() {
    return this.battle_success();
  }

  welcome() {
    const callname = sys_get_colored_callname(this.id, 0),
      mcqueen = get_chara_talk(13),
      me = get_chara_talk(0);
    era.print([
      '강렬한 빛 속에서 의식을 잃었던 마지막 기억으로부터 얼마나 시간이 흘렀을까. 깨어난 ',
      me.get_colored_name(),
      '은(는) 아직 천장의 밝은 빛에 적응하지 못한 채, 잠들었던 몸의 기능을 회복하려 조금씩 몸을 뒤척였다.',
    ]);
    mcqueen.say([callname, ', 깨어나셨나요?']);
    era.print([
      '그 익숙한 목소리를 들은 ',
      me.get_colored_name(),
      '은(는) 즉시 침대 옆의 ',
      mcqueen.get_colored_name(),
      '을 쳐다보았다. 그녀는 턱을 괸 채 약간 장난스러운 미소를 지으며 ',
      me.get_colored_name(),
      '을 바라보고 있었다.',
    ]);
    mcqueen.say([
      '여기가 어디냐고요? 후후…… 다른 ',
      mcqueen.get_uma_sex_title(),
      '들이 ',
      callname,
      '을(를) 유혹하지 못하도록, 오직 우리 둘만의 시간을 위해 마련된 특별한 공간이랍니다.',
    ]);
    mcqueen.say([
      '맛있는 디저트에는 항상 파리떼가 꼬이기 마련이죠. 그것을 독차지하기 위해선 아무도 모르는 곳에 숨겨두고 천천히 음미하는 수밖에요.',
    ]);
    mcqueen.say([
      '하지만 이제 소중한 디저트를 완벽하게 독점하게 되었으니, 언제 맛을 보든 상관없겠네요.',
    ]);
    era.print([
      mcqueen.get_colored_name(),
      '은 입술을 살짝 축이며 트레이너의 귓가로 천천히 다가왔다.',
    ]);
    mcqueen.say(['당신은 영원히 여기서 나갈 수 없어요.']);
    era.print([
      mcqueen.get_colored_name(),
      '은(는) ',
      me.get_colored_name(),
      '의 귓볼을 피가 날 정도로 깨물고는 서서히 몸을 일으켜 뒤도 돌아보지 않고 문으로 향했다. 견고한 문이 닫히는 소리와 함께, ',
      me.get_colored_name(),
      '의 조마조마하던 마음도 그제야 가라앉았다.',
    ]);
  }
};