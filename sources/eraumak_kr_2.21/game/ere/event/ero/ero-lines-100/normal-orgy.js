const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalOrgy = require('#/event/ero/common/normal/orgy');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = class extends EroNormalOrgy {
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    if (attacker.id !== 0 || defender.id !== 100) {
      return await super.ask_double_blow_job(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    const message = [];
    if (hook.arg) {
      message.push(
        async () => {
          await attacker.print_and_wait([
            '입으로 해달라는 요구를 받은 후, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 곧바로 미소를 지으며 얼굴을 육봉 앞으로 가져갔다.',
          ]);
          await defender.say_and_wait([
            '음…… 정말이지 ',
            sys_get_colored_callname(defender.id, attacker.id),
            '은 어쩔 수 없구나~ 그럼 ',
            sys_get_colored_callname(defender.id, supporter.id),
            ', 함께 『입맞춤』을 하자꾸나~',
          ]);
          await attacker.print_and_wait([
            '그렇게 말한 뒤, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 주도하에, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '와 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '의 분홍빛 입술이 양쪽에서 기둥에 입을 맞추었고, 이내 혀를 내밀어 주위를 빙글빙글 핥기 시작했다——',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            '입으로 해달라는 요구를 받은 후, ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '이(가) 미처 반응하기도 전에, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 재빨리 귀두를 자신의 입안으로 집어삼켰다.',
          ]);
          await defender.say_and_wait([
            '에헤헤…… 미안하구나, ',
            sys_get_colored_callname(defender.id, supporter.id),
            '. 이건 양보할 수 없단다?',
          ]);
          await attacker.print_and_wait([
            '그렇게 말하며, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 혀는 이미 귀두를 핥고 있었고, 그 자극에 하반신이 움찔하며 짜릿해졌다.',
          ]);
          await attacker.print_and_wait([
            '이미 엎질러진 물이라, 입으로는 조금 투덜거리면서도 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 역시 한쪽에서 혀를 내밀어 기둥에 봉사할 수밖에 없었다……',
          ]);
        },
        async () => {
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '의 약점은 귀두 부분이란다?…… 옳지, 바로 그거란다, ',
            sys_get_colored_callname(defender.id, supporter.id),
            ', 아주 잘하고 있구나~',
          ]);
          await attacker.print_and_wait([
            '기둥을 위아래로 핥아 올리며 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는, 반대편에서 귀두를 빨고 있는 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '에게 가르침을 주고 있었다.',
          ]);
          await defender.say_and_wait([
            '힘내려무나, ',
            sys_get_colored_callname(defender.id, supporter.id),
            '. ',
            sys_get_colored_callname(defender.id, attacker.id),
            '은, 조금 더 깊이 삼켜주는 걸 좋아한단다……',
          ]);
          await attacker.print_and_wait([
            '마치 달래주려는 듯, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '의 머리를 쓰다듬었다. 그리고 그와 동시에, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 은근슬쩍 힘을 주어, 최대한 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '이(가) 더 깊은 곳까지 삼키도록 이끌었다……',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await defender.say_and_wait('우믐, 으믐…… 츕, 츄웁…… 하아……');
          await attacker.print_and_wait([
            '육봉의 양옆에서, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '와 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '가 끊임없이 기둥을 핥아대고 있다.',
          ]);
          await attacker.print_and_wait([
            '봉사를 받는 자신뿐만 아니라, 이따금 서로 맞닿는 혀끝이 봉사하는 두 사람을 더욱 흥분시키고 있었다.',
          ]);
          await defender.say_and_wait([
            '있잖니, ',
            sys_get_colored_callname(defender.id, supporter.id),
            ', 함께 『긴장』을 풀어보지 않으련?',
          ]);
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '가 눈을 깜빡이며 은밀한 미소를 짓자, ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '은(는) 부끄러운 듯 얼굴을 붉혔다.',
          ]);
          await attacker.print_and_wait(
            '이내 두 사람의 혀끝이 귀두를 훑고 지나가며, 절반씩 귀두를 머금었다. 육봉에 봉사하는 동시에 양쪽의 혀끝을 얽으며 서로의 타액을 섞어갔다……',
          );
        },
        async () => {
          await defender.say_and_wait('츄으읍…… 츄읍, 츕…… 푸하아……');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 마치 맹수가 먹이를 먹듯 사납게 입안의 거대한 것을 삼키며, 자신의 타액으로 육봉에 끊임없이 영역 표시를 하고 있다.',
          ]);
          await attacker.print_and_wait([
            '삼키는 행위가 반복될수록, ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '의 영역은 조금씩 침식당하고 있었다. 고환 쪽으로 완전히 쫓겨나지 않기 위해 승부욕이 불타오른 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 역시 육봉을 차지하기 위해 핥는 속도를 높였다.',
          ]);
          await attacker.print_and_wait('순식간에 얽히고설킨 타액이 번뜩인다……');
        },
        async () => {
          await supporter.say_and_wait('읍…… 으웁!!!');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '의 도움으로, ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '은(는) 이미 자신의 육봉을 뿌리까지 집어삼켰다.',
          ]);
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            '는 부드럽게 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '의 머리를 쓰다듬으며, ',
            supporter.sex,
            '가 육봉을 전부 삼킨 상태에서 목구멍을 이용해 천천히 봉사할 수 있도록 도와주고 있다.',
          ]);
          await attacker.print_and_wait([
            '그리고 다른 한편, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 몸을 숙여 육봉의 뿌리 쪽으로 다가갔다.',
          ]);
          await defender.say_and_wait([
            '그럼…… 힘내야 한단다, ',
            sys_get_colored_callname(defender.id, attacker.id),
            '~',
          ]);
          await attacker.print_and_wait([
            '그렇게 말한 뒤, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 얼굴을 가져다 대고 조그만 입을 벌려, 뿌리 부분을 가볍게 물었다——',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  }

  async double_blow_job(attacker, defender, supporter, hook) {
    await this.ask_double_blow_job(defender, attacker, supporter, hook);
  }

  async double_suck_nipple(attacker, defender, supporter, hook) {
    if (attacker.id !== 0 || defender.id !== 100 || defender.sex_code === 1) {
      return await super.double_suck_nipple(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    const message = [];
    if (hook.arg) {
      message.push(
        async () => {
          await defender.say_and_wait([
            '에헤헤…… ',
            sys_get_colored_callname(defender.id, attacker.id),
            '이랑 ',
            sys_get_colored_callname(defender.id, supporter.id),
            '은(는) 꼭 어린아이 같구나~',
          ]);
          await attacker.print_and_wait([
            '분홍빛으로 물든 뺨에는 여전히 온화한 미소가 어려 있다.',
          ]);
          await attacker.print_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '과 ',
            sys_get_colored_callname(defender.id, supporter.id),
            '의 머리를 쓰다듬으며, 원더 어큐트는 애정 어린 표정으로 눈앞의 아이들을 바라보았다.',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            '……분홍빛 유두를 너무 세게 빤 탓인지, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '는 입술을 삐죽이며 머리를 가볍게 세 번 콩콩 쥐어박았다.',
          ]);
          await defender.say_and_wait([
            '혼자 다 마셔버리면 안 된단다…… ',
            sys_get_colored_callname(defender.id, supporter.id),
            '에게도 조금 남겨줘야지.',
          ]);
          await attacker.print_and_wait('붉게 물든 뺨 위에는 핑크빛 애정이 가득 담겨 있었다.');
        },
      );
    } else {
      message.push(
        async () => {
          await defender.say_and_wait([
            '음~ 그렇게 서두를 필요 없단다. 내 가슴은 항상 여기 있으니까 말이란다~',
          ]);
          await attacker.print_and_wait([
            '눈앞에서 자신의 유두를 빨고 있는 두 사람을 쓰다듬으며, ',
            sys_get_colored_callname(attacker.id, defender.id),
            '의 눈빛에 일순간 자애로움이 스쳐 지나갔다.',
          ]);
          await defender.say_and_wait([
            '그렇지만, 가슴만 빠는 데 정신 팔리면 안 된단다? 다른 할 일도 있다는 걸 잊지 마렴~',
          ]);
          await attacker.print_and_wait(
            '그렇게 말하며 손가락으로 희롱하자, 누구의 것인지 모를 여린 하반신에서 투명한 물방울이 맺히기 시작했다——',
          );
        },
        async () => {
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '이 아주 맛있게 먹는 것 같구나. 다행이네, ',
            sys_get_colored_callname(defender.id, supporter.id),
            '~',
          ]);
          await attacker.print_and_wait([
            '가슴팍에 묻은 머리를 쓰다듬으며, ',
            sys_get_colored_callname(supporter.id, defender.id),
            '이(가) ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '를 향해 빙그레 미소 지었다.',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  }
};