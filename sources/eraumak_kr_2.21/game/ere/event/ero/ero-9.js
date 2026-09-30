/**
 * @file 다이와 스칼렛 - 조교
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { medicine_enum, medicine_names } = require('#/data/ero/item-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

module.exports = class extends CustomizedEro {
  /** @author 黑奴队长 */
  async ero_start() {
    if (
      era.getCharactersInTrain().length === 2 &&
      sys_check_awake(0) &&
      sys_check_awake(9) &&
      !era.get('cflag:9:성별') &&
      era.get('love:9') >= 50 &&
      era.get('status:0:발정') &&
      !era.get('exp:9:성관계횟수') &&
      !era.get('status:9:펄롱K') &&
      !era.get('status:9:펄롱P') &&
      (era.get('item:펄롱K') || era.get('item:펄롱P'))
    ) {
      era.set('tcvar:9:TS大和T', 1);
      const daiwa = get_chara_talk(9),
        me = get_chara_talk(0);
      await print_event_name('트레이너의 상태가 이상하다!?', daiwa);
      await era.printAndWait(
        '아침부터 열이 나는 것 같았지만, 딱히 크게 나는 것도 아니어서 크게 신경 쓰지 않았다.',
      );
      await era.printAndWait('기분 탓이겠지?');
      await era.printAndWait('——그렇게 생각했었는데……');
      await me.say_and_wait('……이상하네…… 아침까지만 해도 아무 문제 없었는데……');
      await era.printAndWait('——갑자기 몸 상태가 나빠져, 온몸이 뜨거워지고 심장이 주체할 수 없이 뛰기 시작했다……');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 트레이너 소파에 앉아 가슴 단추를 풀었다.',
      ]);
      await era.printAndWait(
        '배 속 깊은 곳에서 은근히 쑤시는 이상한 감각이 느껴졌고, 지금 당장이라도 옷을 다 벗어던지고 밖을 뛰어다니고 싶을 정도로 이상한 기분이 들었다.',
      );
      era.println();
      await daiwa.say_and_wait(['좋은 아침, ', sys_get_callname(9, 0), '.']);
      era.println();
      await era.printAndWait([
        '어느새, ',
        daiwa.get_colored_name(),
        '이 얼굴을 비출 시간이 되었다.',
      ]);
      era.println();
      await me.say_and_wait('아…… 응…… 좋은 아침…… 다이와……');
      await daiwa.say_and_wait('……');
      era.println();
      await era.printAndWait('툭…… 다이와의 가방이 바닥에 떨어졌다.');
      await era.printAndWait('아, 그러고 보니 지금 옷차림이 좀……');
      era.println();
      await daiwa.say_and_wait(`${sys_get_callname(9, 0)}……?`);
      await me.say_and_wait('아…… 잠깐만……');
      era.println();
      await era.printAndWait([
        '빨리 옷을 입어야 한다고 머리로는 이해하고 있었지만 단추가 잘 채워지지 않았고, 우여곡절 끝에, ',
        daiwa.get_colored_name(),
        '의 얼굴이 눈앞에 나타났다.',
      ]);
      era.println();
      await me.say_and_wait('……? 왜 그래?');
      await daiwa.say_and_wait('당신…… 설마 아침부터 계속 이런 냄새를 풍기고 있었던 거야?');
      await me.say_and_wait('……냄새?');
      era.println();
      await era.printAndWait([
        '그러고 보니, 오늘따라 몸에서 달콤한 냄새가 풍기는 것 같았고, ',
        daiwa.get_colored_name(),
        '의 얼굴을 보자 왠지 모르게 만지고 싶어졌다.',
      ]);
      era.println();
      await era.printAndWait([
        '그렇게 생각하고 있을 때, ',
        daiwa.get_colored_name(),
        '이 갑자기 ',
        me.get_colored_name(),
        '을(를) 안아 올렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 무의식적으로 그녀의 목에 팔을 둘렀고, 고개를 들어보니 그녀의 얼굴은 마치 육식동물 같기도 하고, 사냥감을 발견한 사냥꾼 같기도 했다.',
      ]);
      await me.say_and_wait(
        '그렇다면, 내가 사냥감인 거겠지. 곧 잡아먹힐 가엾은 어린 양……',
        true,
      );
      await era.printAndWait([
        '하지만 지금의 ',
        me.get_colored_name(),
        '은(는) 그래도 상관없다는 생각이 들었다.',
      ]);
      era.println();

      era.set('tflag:주도권', 9);
      let item = medicine_enum.fron_k;
      if (!era.get('item:펄롱K')) {
        item = medicine_enum.fron_p;
      }
      era.add(`item:${medicine_names[item]}`, -1);
      await CustomizedEro.run_custom_ero(9, ero_hooks.use_medicine, {
        item,
        user: 9,
        shown: false,
      });

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀의 목에 얼굴을 묻고, 뺨을 비비며 그녀의 체취를 맡았고, 시선 끝에는 왠지 모르게 사서 서랍 구석에 숨겨둔 작은 병이 스쳐 지나갔다.',
      ]);
      await me.say_and_wait('이제…… 아무것도 생각나지 않아……', true);
      await era.printAndWait(
        '목에서 전해지는 그녀의 냄새와 아까보다 더 강해진 달콤한 향기가 코끝을 간지럽혔다……',
      );
    }
  }

  /** @author 黑奴队长 */
  async ero_end(handle_ero_act) {
    if (era.get('tcvar:9:TS大和T')) {
      const daiwa = get_chara_talk(9),
        me = get_chara_talk(0),
        callname = sys_get_callname(9, 0);
      era.drawLine();
      await print_event_name('「컨디션 불량」 트레이너…… 그리고 가장 좋아하는 다이와와 함께', daiwa);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 눈을 떴을 때는 이미 휴게실 침대에 누워 있었다.',
      ]);
      await era.printAndWait([
        '몽롱한 머리가 점차 맑아지자, ',
        me.get_colored_name(),
        '은(는) 허리가 몹시 무겁게 느껴졌고, 엉망진창이 된 침대 시트의 참상을 보게 되었다.',
      ]);
      era.println();
      await era.printAndWait([
        '옆을 보니 ',
        daiwa.get_colored_name(),
        '이 얼굴을 감싸고 무언가 중얼거리고 있었다.',
      ]);
      await daiwa.say_and_wait(
        '어떡하지…… 화간…… 그래, 이건 화간이야…… 트레이너도 그렇게 흥분했었으니까…… 하지만 트레이너가 출산 휴가를 내게 된다면…… 아아……',
      );
      era.println();
      await era.printAndWait([
        '그녀는 무언가 고민하는 듯했고, 정오까지 나던 열은 이미 내렸다. ',
        me.get_colored_name(),
        '은(는) 대체 무슨 일이 있었는지, 자신이 무슨 일을 당했는지 천천히 떠올리기 시작했다.',
      ]);
      await era.printAndWait([
        '그래, 그 후로 ',
        daiwa.get_colored_name(),
        '에게 안겨 침대로 옮겨졌고, 암컷이 되어버렸다.',
      ]);
      era.println();
      await era.printAndWait(
        '아래를 내려다보니, 평소와 다름없는 가슴과 비정상적으로 부풀어 오른 배가 보였다.',
      );
      await era.printAndWait('탁자 위를 보니 빈 병이 놓여 있었다.');
      era.println();
      await me.say_and_wait('……다이와……');
      await daiwa.say_and_wait(
        `히익! 미, 미안해, ${callname}! 내, 내가 너무 심했어…… 와앗……`,
      );
      await me.say_and_wait('알았어, 알았어. 괜찮아.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 사과하는 ',
        daiwa.get_colored_name(),
        '을 품에 안고 머리를 쓰다듬어 주었다.',
      ]);
      era.println();
      await daiwa.say_and_wait('하지만, 하지만…… 아, 만약 아이가 생겼다면……');
      await me.say_and_wait('응, 너 한 병만 마신 거 맞지?');
      await daiwa.say_and_wait('에, 응응……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 침대에서 내려와 빈 병의 라벨을 확인했다. 음, 역시나.',
      ]);
      era.println();
      if (era.get('status:9:펄롱K')) {
        await me.say_and_wait('자, 다이와. 여기 잘 읽어봐.');
        await daiwa.say_and_wait('여기?');
        await me.say_and_wait(
          '여기 잘 적혀 있잖아? 이 약을 복용하여 생성된 남성 생식기와 유사한 기관은 생식 능력을 갖추지 않습니다. 라고.',
        );
        await daiwa.say_and_wait('……하? 에? 그럼 지금 배 안에 있는 건 뭐야?');
        await me.say_and_wait(
          '음- 아마 정액- 이려나? 정액의 성분에는 정자만 있는 게 아니라 정장액도 있는데, 정장액은 투명한 액체거든. 정자가 있다면 여기 하얀 액체가 있어야 하잖아? 그러니까 다이와, 아이가 생길 걱정은 안 해도 돼…… 왓!?',
        );
        era.println();
        await era.printAndWait([
          '말이 끝나기가 무섭게 다이와가 갑자기 ',
          me.get_colored_name(),
          '을(를) 넘어뜨렸다. ',
          me.get_colored_name(),
          '의 냄새에 감염된 것인지도 모른다. 그녀도 꽤 많이 들이마셨으니까.',
        ]);
        era.println();
        await daiwa.say_and_wait('그래…… 그러니까 아무리 우마뾰이를 해도 아이는 안 생긴다는 거지?');
        await me.say_and_wait('아…… 응, 그렇지.');
      } else {
        await me.say_and_wait('괜찮아, 다이와. 무조건 임신하는 것도 아니잖아.');
        await me.say_and_wait('게다가 난 다이와의 아이를 가져도 좋은걸~');
        await daiwa.say_and_wait(`${callname}……`);
        await me.say_and_wait('그러니까, 이리 와?');
        era.println();
        await era.printAndWait([me.get_colored_name(), '은(는) 누워서 두 팔을 벌렸다.']);
        await era.printAndWait([
          daiwa.get_colored_name(),
          '의 얼굴이 다시 육식동물처럼 변했다.',
        ]);
        era.println();
        await daiwa.say_and_wait('……');
      }
      await daiwa.say_and_wait(
        `${callname.substring(0, 1)}, ${callname}, 지금은 안 된다고 해도 멈출 수 없다고?`,
      );
      await me.say_and_wait('……응, 알고 있어. 내가 가장 좋아하는 다이와인걸.');
      await daiwa.say_and_wait('~~~!');
      era.println();
      await era.printAndWait([
        '그날, ',
        me.get_colored_name(),
        '은(는) 자신이 몇 번이나 기절했다 깨어났는지 기억하지 못하지만, ',
        me.get_colored_name(),
        '의 유일한 감상은 중학생의 성욕은 정말 무섭구나~였다.',
      ]);
      const default_filter = new Array(5).fill(false);
      let flag_rape = true;
      while (flag_rape) {
        await handle_ero_act(
          !era.get('tflag:주도권') ? ero_hooks.switch : ero_hooks.relax,
          default_filter,
          false,
        );
        if (era.get('tcvar:9:탈력') > 0 || era.get('tcvar:9:도주') > 0) {
          flag_rape = false;
        }
      }
    }
  }

  filter_in_rape() {
    if (era.get('tcvar:9:TS大和T') || era.get('flag:징벌강도') >= 2) {
      return (e) =>
        (e >= ero_hooks.missionary && e <= ero_hooks.stimulate_g_spot) ||
        (e >= ero_hooks.double_fuck && e <= ero_hooks.spit_roast);
    }
    return super.filter_in_rape();
  }
};