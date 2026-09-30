/**
 * @file 조교 지문 - 커뮤니케이션계
 * @author O口口口口口
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/ero/common/common.kojo');
const EroCommunications = require('#/event/ero/common/interface/ero-communications');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const resist_race_desc = ['너도 아', undefined, '나야말로', '내가'];

class EroNormalCommunications extends EroCommunications {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async kiss(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('이런 순간에는 역시 그게 하고 싶어져…');
      await attacker.print_and_wait([
        '시선이 머무는 곳을 눈치챘는지, 살며시 눈을 감은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 까치발을 들고 먼저 입술을 부딪쳐 왔다…',
      ]);
      await defender.say_and_wait('쪽……❤️');
      await attacker.print_and_wait('마음이 놓이는 달콤한 맛…');
      await attacker.print_and_wait(
        '신음과 함께 섞여 나오는 숨결이 상대의 매끄러운 목덜미에 닿고, 고운 속눈썹이 그에 반응하듯 파르르 떨린다…',
      );
      await attacker.print_and_wait(
        '…입술을 떼고 싶지 않아… 이대로 욕심껏 계속 맞대고 있자…',
      );
    } else {
      await defender.say_and_wait('하아…… 하아……❤️');
      await defender.print_and_wait('슬슬 만족할 때도 됐잖아… 자꾸만 뒤쫓아오는 그 입술…');
      await defender.print_and_wait(
        '코와 입… 숨을 쉬어야 할 통로를 욕심 많은 저 녀석에게 대부분 빼앗겨 버리고, 아랫배를 간지럽히는 묘한 숨결이 머릿속까지 짓궂게 파고든다…',
      );
      await defender.print_and_wait(
        '으음… 나중에 혼자 숨 쉬는 게 외로워지면, 당신이 책임져야 해…❤️',
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async french_kiss(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('입술만으로는 부족해.');
      await defender.say_and_wait('으응──?');
      await attacker.print_and_wait([
        `키스 도중 ${attacker.get_phy_sex_title()}의 품 안에 갇힌 `,
        defender.get_colored_name(),
        '이(가) 조금 당황한 듯 ',
        attacker.get_colored_name(),
        '의 이름을 부르려 했지만, 침략적으로 얽혀오는 혀 때문에 그 목소리는 그저 눅진하고 달콤하게 뭉개질 뿐이었다.',
      ]);
      await attacker.print_and_wait(
        '입술이 맞닿은 채 서로를 마주하다, 고개를 더 깊게 비틀며… 마지막에는 뒤를 감싸 안은 손으로 힘이 풀린 연인을 지탱하는, 정열적인 입맞춤.',
      );
      await defender.say_and_wait('……숨이 막힐 것 같아……', true);
    } else {
      await defender.print_and_wait('머릿속이 어질어질해…');
      await defender.print_and_wait(
        '품에 안겨, 얼마나 지났는지 모를 정도로… 혀까지 깊숙이 섞어오는 긴 키스…',
      );
      await defender.print_and_wait(
        '정말 얼마나 지난 걸까… 아주 가끔 입술이 떨어질 때도 끈적한 은사로 이어져 있어, 마치 이 두 입술은 처음부터 하나였던 것처럼… 얼굴이 뜨겁게 달아오른다.',
      );
      await defender.print_and_wait('그래도… 전혀 싫지 않아…');
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async lure(attacker, defender, hook) {
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 흥분이 고조되고 있다…',
      ]);
    } else if (era.get(`tcvar:${defender.id}:발정`)) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 이미 최고조에 달해 있다…',
      ]);
    } else {
      await attacker.print_and_wait('하지만 별로 효과가 없는 것 같다…');
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async talk(attacker, defender, hook) {
    if (
      !era.get(`cflag:${attacker.id}:종족`) &&
      era.get(`cflag:${defender.id}:종족`) &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.get_uma_sex_title(),
        '가 귀로 감정을 표현하는 방식은 도대체 어떤 동물의 것과 더 비슷할까?',
      ]);
      await attacker.print_and_wait('불만스러운 눈초리를 받았다.');
      await attacker.say_and_wait('음...예를 들면..고양이의 귀가 젖혀지면...');
      attacker.print('엉덩이를 걷어차였다.');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('앞으로 아이를 몇 명이나 낳는 게 좋을까…');
      await attacker.print_and_wait([
        '맞은편에 있는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        `의 배를 바라보며, 진심이 무심코 새어 나왔다.`,
      ]);
      await attacker.print_and_wait('……차이지도 않았고……대답도 없네');
      attacker.print('……하지만 얼굴이 엄청 빨개졌네.');
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async switch(attacker, defender) {
    if (
      defender.id ||
      (!era.get(`tcvar:${defender.id}:탈력`) &&
        !era.get(`tcvar:${defender.id}:실신`))
    ) {
      await defender.say_and_wait('에……?');
      await defender.print_and_wait([
        '방금 전까지 바로 눈앞에 있던 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이(가) 갑자기 거리를 두자, 깔려 있던 ',
        defender.get_colored_name(),
        '은(는) 눈을 깜빡이며 상황을 파악하지 못했다.',
      ]);
      await defender.print_and_wait('그리고, 눈앞의 시야가 순식간에 뒤집히고…');
      await attacker.say_and_wait('이제, 네 시간이야.');
      await defender.print_and_wait([
        '양팔을 벌린 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이(가) 부추기는 듯한 미소를 지었다.',
      ]);
      attacker.say('……하고 싶은 대로 해도 좋아.');
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{[success]:boolean}} extra
   */
  async resist(attacker, defender, hook, extra) {
    extra.success = EroNormalCommunications.check_resist_success(
      attacker.id,
      defender.id,
    );
    if (era.get('flag:징벌강도') === 3) {
      const o = { success: extra.success };
      o['플레이어이름'] = era.get('callname:0:-2');
      if (!attacker.id) {
        await kojo['孕袋反抗'](o);
      } else {
        o['우마무스메'] =
          era.get(`cflag:${attacker.id}:종족`) > 0
            ? era.get('flag:캐릭터성별') === 1
              ? '우마무스코'
              : '우마무스메'
            : '';
        if (!extra.success) {
          o['대표색'] = get_chara_talk(attacker.id).color;
          o['호칭'] = sys_get_callname(attacker.id, defender.id);
        }
        await kojo['反抗孕袋'](o);
      }
    } else {
      if (hook.arg) {
        await defender.say_and_wait('가만히 있는 게 좋을 거야.');
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '의 위에 올라탄 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '은(는), 입술을 핥으며 조금은 낯선 표정을 짓고 있다.',
        ]);
        await attacker.print_and_wait(
          '하지만, 일방적으로 깔린 채 당하는 상황에… 간단히 익숙해질 수는 없다고!',
        );
        await attacker.print_and_wait('……');
      }
      if (extra.success) {
        await attacker.say_and_wait('가만히 있는 게 좋을 거야.');
        await attacker.print_and_wait([
          '방금 들었던 말을 그대로 되돌려주자, 당황하는 기색이 역력한 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '을(를) 보며 ',
          attacker.get_colored_name(),
          '의 얼굴에 승리감에 젖은 미소가 가득 번졌다.',
        ]);
      } else {
        const race =
          (era.get(`cflag:${attacker.id}:종족`) << 1) +
          era.get(`cflag:${defender.id}:종족`);
        await attacker.say_and_wait(
          race === 1
            ? `역시, 인간은 ${defender.get_uma_sex_title()}를 이길 수 없는 건가…`
            : [
                '역시, 나는 ',
                sys_get_colored_callname(attacker.id, defender.id),
                '에게 당해낼 수 없는 걸까……',
              ],
          true,
        );
        await attacker.print_and_wait([
          '너무나 쉽게 다시 바닥에 깔려버린 ',
          attacker.get_colored_name(),
          '의 머릿속에 그런 생각이 스쳐 지나갔다.',
        ]);
        if (race !== 1) {
          await attacker.say_and_wait(
            [
              '이상하네, 분명 ',
              resist_race_desc[race],
              ' ',
              attacker.get_uma_sex_title(),
              '인데!',
            ],
            true,
          );
        }
        await attacker.say_and_wait('큿……', true);
      }
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async gargle(attacker, defender, hook) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: '쪽……' },
      { color: defender.color, content: '으읍……!?' },
      '」',
    ]);
    await era.printAndWait(
      '욕망에 몸을 맡겼던 두 사람, 다시 한번 맞닿으려던 입술이 이번엔 채 닿기도 전에 떨어졌다.',
    );
    await era.printAndWait('당황한 듯 눈을 깜빡이고, 머리를 긁적이며 시선을 피한다…');
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '……',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '……',
    ]);
    await era.printAndWait('다다다다……');
    await era.printAndWait('보글보글보글────');
    await era.printAndWait(
      '잠시 후, 세면대 앞에 나란히 서서 햄스터처럼 볼을 부풀린 채 얼굴을 붉히는 바보 커플의 모습이 있었다.',
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async wipe_body(attacker, defender, hook) {
    await defender.say_and_wait('더…… 계속할 거야……?❤️');
    await attacker.print_and_wait(
      '상대의 매끄러웠던 몸에는 어느새 묘한 흔적들이 가득하다… 조금 너무 과하게 해버린 걸까…',
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '……손에 들린 수건은 상대의 몸에서 묻어난, 자신이 남긴 음란한 향기로 엉망이 되어 있다. 조금이라도 양심이 있는 녀석이라면 이쯤에서 그만둬야 한다는 생각이 들 텐데.',
    );
    await attacker.print_and_wait('……그런가……?');
  }
}

module.exports = EroNormalCommunications;