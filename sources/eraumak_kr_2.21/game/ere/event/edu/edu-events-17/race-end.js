const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { good_end, handle_debuff, normal_end } = require('#/event/snippets/17');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async race_end(chara, me, callname, hook, extra_flag) {
    const edu_marks = new LunaEduMarks();
    const i_emperor = edu_marks.emperor;
    const { luna, emperor } = i_emperor
      ? { emperor: 17, luna: 9017 }
      : {
          emperor: 9017,
          luna: 17,
        };
    const luna_talk = get_chara_talk(luna);
    const emperor_talk = get_chara_talk(emperor);
    const edu_weeks = era.get('cflag:17:육성턴수합산');
    if (extra_flag.rank === 1) {
      hook.override = true;
      let wait_flag = false;
      if (
        extra_flag.race === race_enum.begin_race &&
        edu_weeks < 48 &&
        extra_flag.rank === 1
      ) {
        // 주니어급 데뷔전
        await print_event_name('진격의 시작', chara);

        await era.printAndWait(
          `심볼리 가문과 약간의 상의를 거친 뒤, ${me.name}은(는) 루나의 데뷔전을 신청했다.`,
        );
        await era.printAndWait('바로 재팬 컵 당일이다.');
        await era.printAndWait(
          `루나는 ${me.name}의 판단을 듣고 미간을 찌푸렸으나, 결국 반대하지 않았다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 이것이 상당히... 악의적이라는 것을 알았지만, 확실히 어쩔 수 없는 선택이었다.`,
        );
        await era.printAndWait('일본은 자신감을 북돋울 필요가 있었다, 설령 그것이 미래에 희망을 거는 일일지라도.');
        await era.printAndWait(
          `그렇기에, ${me.name}이(가) 경쟁이라고 부르기도 민망한 압도적인 레이스를 목격했을 때, ${me.name}은(는) 본능적으로 안도의 한숨을 내쉬었다.`,
        );
        await era.printAndWait(
          `사실, ${me.name}이(가) 정신을 차렸을 때는 이미 자신의 두 손이 꽉 쥐어져 있었다.`,
        );
        await me.say_and_wait('내가 누구한테 주먹이라도 휘두르려는 건가? 젠장...', true);
        await era.printAndWait(
          `${me.name}은(는) 믿기지 않는다는 듯 자신의 손을 바라보았고, 시야가 떨리는 것을 느꼈다.`,
        );
        await era.printAndWait(
          `그뿐만 아니라, ${me.name}은(는) 점점 입안이 마르고 현기증이 나는 것을 느꼈다.`,
        );
        await era.printAndWait(
          `${chara.name}, ${chara.sex}는 얼마나... 얼마나... 얼마나... 강한 것인가!!!`,
        );
        await era.printAndWait(
          `${me.name}은(는) 지금 이 기분을 형언할 수 없었지만, 단 한 가지는 확실히 알 수 있었다——`,
        );
        await era.printAndWait(`${me.name}은(는) 이토록 비겁한 자다.`);
        await era.printAndWait(
          `그렇지 않다면 ${me.name}의 이 미소를, 그리고 외국인들의 경악 섞인 비명을 들었을 때의 이 기쁨을 어떻게 설명할 수 있겠는가?`,
        );
        era.printButton('（전 세계 사람들에게 한 가지 사실을 깨닫게 하기 위해.）', 1);
        era.printButton('（보았는가? 세계여——）', 2);
        await era.input();
        await era.printAndWait(`${me.name}은(는) 호탕하게 웃었다.`);
        era.printButton('「루나, 그녀가 세계를 휩쓸 거야.」', 1);
        era.printButton('「황제, 그녀가 세계를 휩쓸 거야!」', 2);
        await era.input();
        await era.printAndWait('그날, 모든 이들이 마음을 빼앗겼다.');
        await era.printAndWait(
          `그날, 루나는 돌아와서 ${me.name}과(와) 축하하는 대신, 그저 슬픈 듯 ${me.name}의 품으로 뛰어들었다.`,
        );
        await era.printAndWait('그날, 일본의 우마무스메들은 다시 한번 재팬 컵에서 패배했다.');
        await era.printAndWait(
          '괜찮아, 괜찮아... 루나만 있다면 모든 것이 다 잘될 거야.',
        );
        await era.printAndWait(`${me.name}은(는) 루나를 달랬고, 모든 걱정은 연기처럼 사라졌다.`);
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (extra_flag.race === race_enum.saud_cup && edu_weeks < 48) {
        // 주니어급 사우디아라비아 RC
        await print_event_name('파죽지세', chara);

        await era.printAndWait(`${chara.sex}는 계획대로 레이스를 승리로 이끌었다.`);
        await era.printAndWait(`${me.name}의 곁눈질에 동료들의 모습이 들어왔다.`);
        await era.printAndWait(
          '담당이 돌아오기 전, 그들이 애써 태연한 척하기까지는 아직 약간의 시간이 남아 있었다.',
        );
        await era.printAndWait(
          `그렇기에 ${me.name}은(는) 그들의 깊은 한숨과, 자신을 향한 선망 혹은 질투 섞인 시선을 탓하지 않았다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 심볼리 루돌프의 트레이너다. ${chara.sex}가 승리할 것이고, ${me.name} 또한 승리할 것이다.`,
        );
        await era.printAndWait('하지만');
        era.printButton(i_emperor ? '「개선을 축하드립니다...!」' : '「수고했어...!」', 1);
        await era.input();
        await era.printAndWait(
          `${chara.name}가 돌아오는 것을 보고 ${me.name}이(가) 막 인사를 건네려던 찰나, 다른 우마무스메가 그녀에게 다가가는 것이 보였다.`,
        );
        await era.printAndWait(`${me.name}은(는) 나도 모르게 긴장했다——마루젠스키였다.`);
        await era.printAndWait(`만약 이 타이밍에 ${chara.name}를 자극한다면——`);
        await era.printAndWait('그러나 다행히도 두 사람은 짧은 대화를 나누며 미소를 지어 보였다.');
        await era.printAndWait(`돌아온 ${chara.name}는 여전히 기쁨에 들떠 있었다.`);
        await era.printAndWait(
          `${me.name}은(는) 알 수 있었다. ${chara.sex}의 미소는 승리 때문이 아니라, 방금 마루젠스키와 나눈 대화 때문이라는 것을.`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '그토록 강력한 괴물이, 내가 사냥해주기를 기다리고 있군——'
            : '선배님께 인정을 받다니, 특히 마루젠 선배님께 인정을 받은 건 내게 정말 큰 의미가 있어.',
        );
        await era.printAndWait(
          `${me.name}은(는) 알고 있었다. 모든 우마무스메 중에서도 마루젠스키는 압도적인 강함으로 이름이 높다는 것을.`,
        );
        await era.printAndWait(
          `하지만 ${chara.name}의 트레이너로서, ${me.name}은(는) 단 한 가지만은 확신했다.`,
        );
        era.printButton('「이기는 건 너야.」', 1);
        era.printButton('「그때가 되면, 『황제』의 실력은 더욱 증명되겠지.」', 2);
        const ret = await era.input();
        await era.printAndWait(
          `${me.name}의 말에 놀란 듯, ${chara.name}는 살며시 미소 지었다.`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '제법 그럴싸한 말을 하는군. 개선하도록 하지!'
            : '이게 바로 본능이 자극받았다는 걸까? 설령 내가 더 이상 달리고 싶지 않더라도, 여전히 전율을 느낄 수 있네.',
        );
        era.println();
        wait_flag = sys_like_chara(emperor, 0, 50 * (ret === 2));
        wait_flag = sys_love_uma(luna, 4) || wait_flag;
      } else if (extra_flag.race === race_enum.sats_sho) {
        // 클래식급 사츠키상 후
        await print_event_name('와신상담', chara);

        await me.say('우선은 첫 번째 왕관이다.');
        await era.printAndWait(
          i_emperor
            ? `마치 ${me.name}과(와) 똑같이 이 기쁨을 되새기듯, 황제는 손가락 하나를 높이 치켜들었다.`
            : `마치 ${me.name}과(와) 똑같이 이 기쁨을 되새기듯, 루나는 고개를 들고 길게 숨을 내뱉었다.`,
        );
        await era.printAndWait('이토록 압도적인 강함, 이토록 의문의 여지가 없는 강함.');
        await era.printAndWait(
          '관중들은 전설의 개막을 알리는 듯한 광경에 지금까지 중 가장 뜨거운 환호를 보냈다.',
        );
        era.printButton('「어쩌면 정말 실현될지도 몰라... 황제라면.」', 1);
        era.printButton('「어쩌면 정말 실현될지도 몰라... 루나라면.」', 2);
        await era.input();
        await era.printAndWait(`${me.name}은(는) 그날 루나가 당신에게 했던 말을 기억하고 있다.`);
        await luna_talk.say('모든 우마무스메가 행복해질 수 있는 세계를 만드는 거야.');
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (
        extra_flag.race === race_enum.toky_yus &&
        check_aim_race(era.get('cflag:17:육성성적'), race_enum.sats_sho, 1, 1)
      ) {
        // 클래식급 일본 더비 후
        await print_event_name('천하무적', chara);

        await me.say_and_wait('이것으로 두 번째 왕관이다!');
        await era.printAndWait('꿈을 실현하는 데 한 걸음 더 다가섰다.');
        await era.printAndWait(
          '사람들은 더비에서 심볼리 루돌프가 얼마나 강력한 실력을 발휘했는지 열띠게 토론하고 있었다.',
        );
        await era.printAndWait('이 얼마나 믿기지 않는 광경인가!');
        if (i_emperor) {
          await era.printAndWait(
            '마치 대중들과 함께 이 놀라움을 만끽하듯, 황제는 손가락 두 개를 높이 치켜들었다.',
          );
        } else {
          await era.printAndWait(
            '마치 대중들과 함께 이 놀라움을 만끽하듯, 루나는 진심 어린 미소를 지어 보였다.',
          );
        }
        await era.printAndWait(
          '그 후 며칠 동안, 사람들은 더비에서 심볼리 루돌프가 보여준 실력이 얼마나 대단했는지 입을 모았다.',
        );
        await era.printAndWait(
          `${chara.sex}의 이름은 역사 속 위대한 우마무스메들과 나란히 거론되었다.`,
        );
        await era.printAndWait('한때 찬란하게 빛났으나 결국은 희미해져 간 스타들.');
        await era.printAndWait('하지만 심볼리 루돌프는 어딘가 다른 것 같았다.');
        await era.printAndWait(
          `오직 ${me.name}만이 알고 있었다. 더비에서 ${chara.sex}가 한층 더 깊은 단계에 발을 들였다는 것을——`,
        );
        await era.printAndWait('영역.');
        await era.printAndWait(
          `지금 이 순간에도, 그 이야기를 떠올리면 ${me.name}은(는) 깊은 경외심을 느낀다.`,
        );
        await era.printAndWait(`하지만 다시 생각해보니, ${me.name}은(는) 왠지 모를 씁쓸함이 느껴졌다.`);
        await era.printAndWait(
          '선구자들 또한 해냈던 일이지만, 시간은 조금의 자비도 없이 흘러 모든 위대함은 결국 추억이 되어버렸다.',
        );
        era.printButton(
          '「지금도 활동하며 본격화의 힘을 조금이라도 유지하고 있는 건 마루젠스키 정도뿐이지.」',
          1,
        );
        await era.input();
        await era.printAndWait(`${me.name}과(와) ${chara.name}는 대화를 나누었다.`);
        await era.printAndWait(
          `본격화가 사라지면 아무리 강력했던 우마무스메라도 평범한 사람으로 돌아가고, 단지 약간의 기억만을 남길 뿐이다.`,
        );
        await era.printAndWait(
          `이것은 거부할 수 없는 순리이며, 언젠가는 ${chara.name} 또한...`,
        );
        await era.printAndWait(
          `${me.name}의 흥분 뒤에 숨겨진 비탄을 느낀 듯, ${chara.name}는 조용히 당신을 바라보았다.`,
        );
        if (i_emperor) {
          await chara.say_and_wait('정벌은 결코 멈추지 않을 것이다.');
        } else {
          await chara.say_and_wait('우리의 꿈...나는 해답을 찾은 것 같아.');
        }
        era.printButton('「……」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 그 말이 무슨 뜻인지 이해하지 못했지만, ${chara.name}는 설명해줄 생각이 없어 보였다.`,
        );
        await chara.say_and_wait('에덴……');
        era.drawLine();
        await chara.print_and_wait(
          `${me.name}과(와) 헤어진 뒤, ${chara.name}는 홀로 학원 안뜰로 향했다.`,
        );
        await chara.print_and_wait(
          '세 여신상을 바라보며 영역에 발을 들였던 광경을 회상하던, 세대의 정점에 선 우마무스메는 주먹을 꽉 쥐었다.',
        );
        if (i_emperor) {
          await chara.say_and_wait('굴레란 결코 존재해서는 안 되는 것이다.');
        } else {
          await chara.say_and_wait(
            `나는 반드시 나와 ${me.actual_name}의 소원을 이룰 거야, 설령 내가……`,
          );
        }
        era.println();
        sys_love_uma(luna, 4);
        era.set('status:17:영역', 1);
        era.print([
          chara.get_colored_name(),
          ' 이(가) ',
          { color: buff_colors[1], content: ' [영역]', fontWeight: 'bold' },
          '에 눈을 떴다!',
        ]);
        wait_flag = true;
      } else if (
        extra_flag.race === race_enum.kiku_sho &&
        check_aim_race(
          era.get('cflag:17:육성성적'),
          race_enum.sats_sho,
          1,
          1,
        ) &&
        check_aim_race(era.get('cflag:17:육성성적'), race_enum.toky_yus, 1, 1)
      ) {
        // 클래식급 킷카상 후
        await print_event_name('삼관 달성', chara);

        await era.printAndWait('포효하듯 전 세계가 열광적으로 환호했다.');
        await era.printAndWait('또 한 명의 우마무스메가 이 위업을 달성했다!');
        await era.printAndWait(
          '때맞춰 관현악단이 누구나 알고 있는, 그리고 이 상황에 아주 잘 어울리는 교향곡을 연주하기 시작했다.',
        );
        await era.printAndWait('【황제】', { color: color_17[1] });
        await era.printAndWait(`${me.name}은(는) 뜨거운 눈물을 흘리며 허리를 굽히고 고개를 떨구었다.`);
        await era.printAndWait(`${me.name}은(는) 알고 있었다. 약속과 꿈은 아직 멀었다는 것을.`);
        await era.printAndWait('하지만 지금은 잠시만... 아주 잠시만이라도...');
        await era.printAndWait(`${me.name}은(는) 고개를 숙인 채, 아무도 모르는 곳에서 소리 높여 울었다.`);
        era.printButton('「축하해……」', 1);
        era.printButton('「역사상…… 가장 위대한 활약이었어……」', 2);
        await era.input();
        await era.printAndWait(`${me.name}은(는) ${chara.name}가 한없이 자랑스러웠다!`);
        await era.printAndWait(
          i_emperor
            ? `마치 ${me.name}과(와) 마음이 통한 듯, 황제는 손가락 세 개를 높이 치켜들었다.`
            : `마치 ${me.name}과(와) 마음이 통한 듯, 루나는 행복의 눈물을 흘렸다.`,
        );
        await era.printAndWait(
          `레이스가 끝난 후 한참이 지나도록, 숨을 헐떡이는 ${chara.name}는 경기장을 떠나지 않았다.`,
        );
        await era.printAndWait(
          `사람들은 그저 그녀가 영광의 순간을 조금 더 오래 만끽하고 싶은 것이라 생각했다.`,
        );
        await era.printAndWait(
          `하지만 ${chara.name}의 거대한 투지 아래에서, ${me.name}은(는) 돌연 그녀의 발걸음이 비틀거리는 것을 발견했다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 주먹을 꽉 쥐었다. 이전에 느껴본 적 없는 오한이 ${me.name}의 몸을 휩쓸었다.`,
        );
        era.printButton('「설마……」', 1);
        era.printButton('「부상인가……」', 2);
        await era.input();
        era.drawLine();
        await chara.print_and_wait(
          `그날 밤, ${chara.name}는 홀로 안뜰의 세 여신상 아래를 찾았다.`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '너희가 만든 요람(감옥)이 아무리 견고할지라도……'
            : '조금만 더, 조금만 더 하면 들어갈 수 있는데……',
        );
        era.println();
        const tmp = new Array(5).fill(0);
        tmp[get_random_entry(Object.values(attr_enum))] = 15;
        wait_flag = get_attr_and_print_in_event(17, tmp, 0) || wait_flag;
      } else if (extra_flag.race === race_enum.japa_cup && edu_weeks >= 96) {
        // 시니어급 재팬 컵
        await print_event_name('모두 태우다', emperor_talk);

        await era.printAndWait(
          `${me.name}은(는) ${chara.name}가 결승선을 통과하는 것을 지켜보았다. 그녀는 온몸을 떨며 관중들의 환호 속에서 서둘러 퇴장했다.`,
        );
        await era.printAndWait(`${me.name}은(는) 급히 대기실로 달려갔다.`);
        await era.printAndWait('틀림없다.');
        await era.printAndWait(
          `${me.name}은(는) 미칠 것만 같았다. 경기장에서 그녀가 영역 속에서 무너질 뻔한 것을 보고, ${me.name}은(는) 그 대가가 무엇인지 깨달았다.`,
        );
        await era.printAndWait(
          `영역——그것의 연료는 우마무스메들의 미래다! 그렇지 않고서야 ${chara.name}가 이토록 큰 대미지를 입을 리 없었다. 마치, 마치……`,
        );
        await era.printAndWait('본격화의 힘이 사라진 것만 같았다.');
        await era.printAndWait(
          `${me.name}이(가) 대기실에 도착했을 때, 갑자기 큰 소음이 들렸다! 문을 열어보니 벽에 커다란 구멍이 뚫려 있었다.`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '짐의 힘이, 레이스 도중에 갑자기 사라지다니?'
            : '미안해, 내가 감정이 좀 격해졌네……',
        );
        await era.printAndWait(
          `${me.name}은(는) 서둘러 다가가 피투성이가 된 ${chara.name}의 손을 살피며 구급상자를 찾아 나섰다.`,
        );
        await era.printAndWait(
          `이대로라면 승리는커녕, 다시는 경기장에 서는 것조차 불가능할지도 모른다.`,
        );
        await chara.say_and_wait('설령 그렇다 해도, 나는 내 발걸음을 멈추지 않겠다.');
        await era.printAndWait(
          `${me.name}은(는) 깜짝 놀라 고개를 들었지만, ${chara.name}의 눈에는 ${me.name}이(가) 도저히 이해할 수 없는 감정들이 서려 있었다.`,
        );
        await era.printAndWait('경악과 불만이 섞인 듯하면서도, 기쁨과 분노가 동시에 느껴졌다.');
        await era.printAndWait([
          { content: '???「영역이 사라지던 그 찰나에, ', color: luna_talk.color },
          { content: '보았다——', color: emperor_talk.color },
          { content: '」', color: luna_talk.color },
        ]);
        await era.printAndWait([
          { content: '???「', color: emperor_talk.color },
          { content: '조금만 더……', color: luna_talk.color },
          { content: '아주 조금만 더 하면', color: emperor_talk.color },
          { content: '（에덴에）', color: luna_talk.color },
          { content: '」', color: emperor_talk.color },
        ]);
        await era.printAndWait(
          `${me.name}은(는) 대답할 말을 찾지 못한 채, 터져 나오려는 눈물을 참으며 ${chara.name}의 상처를 치료했다.`,
        );
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
        // 시니어급 아리마 기념
        if (
          (edu_marks.good_end =
            (extra_flag.rank === 1 && !era.get(`status:17:신경쇠약`)) + 1) === 2
        ) {
          await print_event_name('영역의 끝', luna_talk);
        } else {
          await print_event_name('마지막 선율', emperor_talk);
        }
        await chara.print_and_wait('하아…… 하아……');
        await chara.print_and_wait('하아…………');
        await chara.print_and_wait(
          `${chara.name} 앞의 세계가 격렬하게 요동치고 있었고, 시야의 모든 것이 흐릿해졌다.`,
        );
        await chara.print_and_wait(
          `해일처럼 몰려오는 현기증과 통증이 그녀를 덮쳤다. 영역이 자신을 거부하고 있다는 것을——${chara.name}는 깨달았다.`,
        );
        await chara.print_and_wait(`${chara.sex}은(는) 더 이상 무소불위의 존재가 아니었다.`);
        await chara.print_and_wait(
          `한 걸음을 내디딜 때마다 ${chara.name}는 거대한 위화감을 느꼈다.`,
        );
        await chara.print_and_wait(
          `발을 딛고, 다시 들어 올린다. 격심한 통증에 그녀의 표정은 무섭게 일그러졌다.`,
        );
        await chara.print_and_wait(
          `평소라면 가볍게 가를 수 있었던 바람이 마치 철벽처럼 가로막아 그녀를 상처 입혔다.`,
        );
        await chara.print_and_wait(
          `이 레이스에서 그녀는 폭풍 속에 날개가 꺾인 새와 같았다.`,
        );
        era.drawLine();
        await chara.print_and_wait(
          `눈꺼풀이 무거워지고, ${chara.name}의 의식은 이미 몽롱해졌다.`,
        );
        await chara.print_and_wait(
          '영역이 무너지고 있다. 그 느릿하게 흐르던 풍경들이 점차 움직이기 시작했다.',
        );
        await chara.print_and_wait(
          '우마무스메들이 달리고 있다. 잔디를 차고 먼지를 일으키며 흩날리는 풀잎들을 바람에 싣고 간다.',
        );
        await chara.print_and_wait(
          '자신의 심장 소리는 점점 빨라지는데, 정작 힘은 손톱만큼도 써지지 않는다.',
        );
        await chara.print_and_wait(
          '몸의 부품들, 근육과 힘줄 그리고 내장이 거대한 관성에 의해 찢겨나가는 것 같다.',
        );
        await chara.print_and_wait(
          '만약 이 코너에서 멈추지 않는다면, 영역이 완전히 걷히는 그 순간——',
        );
        await chara.print_and_wait('자신은 죽게 될 것이다.');
        await chara.say_and_wait(
          emperor === 17
            ? '코스는 천상의 길이 아니니, 결국은 멈춰야 할 때가 오나 보군.'
            : '이것이 영역의 진실인가…… 본격화의 힘을 앞당겨 쓰는 대가……',
        );
        await chara.print_and_wait(
          '세대와 세대를 거듭하며 용자들은 영역에 발을 들였고, 자신의 미래와 이상 그리고 모든 가능성을 앞당겨 써버렸다.',
        );
        await chara.print_and_wait(`이제 ${chara.name}의 차례가 온 것이다.`);
        await chara.print_and_wait(
          '자신의 생애, 나아가 생명의 끝을 마주했을 때 무엇을 해야 하는지, 아무도 가르쳐준 적이 없었다.',
        );
        await era.printAndWait([
          {
            content: '루나',
            color: luna_talk.color,
          },
          '&',
          { content: '황제', color: emperor_talk.color },
          '「',
          { content: me.actual_name, color: emperor_talk.color },
          { content: '.', color: luna_talk.color },
          '」',
        ]);
        if (edu_marks.good_end === 2) {
          await era.printAndWait([
            {
              content: '루나',
              color: luna_talk.color,
            },
            '&',
            { content: '황제', color: emperor_talk.color },
            '「',
            { content: '당신은', color: emperor_talk.color },
            { content: ' 나와', color: luna_talk.color },
            { content: '（나와）', color: emperor_talk.color },
            { content: ' 함께할 거지?', color: luna_talk.color },
            '」',
          ]);
          await era.printAndWait(
            `가슴 속의 공기를 남김없이 토해내며, 수천수만 관중들의 시선 속에서 ${chara.name}가 가속했다!!!`,
          );
          await era.printAndWait('길이 이어지지 않는다면 스스로 딛고 나아가리라!');
          await era.printAndWait([
            {
              content: '루나',
              color: luna_talk.color,
            },
            '&',
            { content: '황제', color: emperor_talk.color },
            '「',
            { content: '우리의', color: emperor_talk.color },
            { content: ' 꿈을', color: luna_talk.color },
            { content: ' 위하여!!!', color: emperor_talk.color },
            '」',
          ]);
          era.printButton('「달려라!!!!!!!」', 1);
          await era.input();
          await me.print_and_wait('달려라!!!!!!!');
          await me.print_and_wait('달려라!!!!!!!');
          await era.printAndWait(
            `${me.name}은(는) 이미 자신의 목소리가 갈라지든 말든 상관없었다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 그저 ${chara.name}가 우리들의 꿈을 향해 정면으로 나아가고 있다는 것만을 알았다.`,
          );
          await era.printAndWait('다 왔어! 거의 다 왔다고!');
          await era.printAndWait(
            '성대한 환호성 속에서, 최강의 우마무스메는 미지의 저 너머를 향해 발을 내디뎠다.',
          );
        } else {
          await era.printAndWait([
            {
              content: '루나',
              color: luna_talk.color,
            },
            '&',
            { content: '황제', color: emperor_talk.color },
            '「',
            { content: '나의', color: emperor_talk.color },
            { content: '（나의） 소중한 경험을', color: luna_talk.color },
            { content: ' 네게 들려주마……', color: emperor_talk.color },
            '」',
          ]);
          await chara.print_and_wait('——오너라.');
          await chara.print_and_wait(
            `자신의 숙명을 맞이하듯, ${chara.name}는 자신의 종착역을 향해 질주했다.`,
          );
        }
        era.drawLine();
        if (edu_marks.good_end === 2) {
          await print_event_name(
            ['에덴이 나를', { content: '（나를）', color: emperor_talk.color }, ' 보다'],
            luna_talk,
          );

          await luna_talk.print_and_wait('여긴 어디지?');
          await luna_talk.print_and_wait('우마무스메는 마치 꿈에서 깬 듯한 기분이었다.');
          await luna_talk.print_and_wait('끝없이 펼쳐진 초원이었다.');
          await luna_talk.print_and_wait(
            `그녀는 달리고 있었고, 바람은 잔디를 흔들며 그녀의 흩날리는 머리카락을 스치고 지나갔다.`,
          );
          await luna_talk.print_and_wait(
            `그녀의 머리 위에는 태양과 달이 동시에 떠 있었다.`,
          );
          await luna_talk.print_and_wait('해와 달 아래, 몇몇 형체들이 그녀를 지켜보고 있었다.');
          await luna_talk.print_and_wait('세 명의 여신——그녀들은 호기심 어린 눈으로 자신들의 아이를 바라보고 있었다.');
          await luna_talk.print_and_wait('그렇구나.');
          await luna_talk.print_and_wait('그녀는 눈을 깜빡였다.');
          await luna_talk.print_and_wait(
            `우마무스메 「${me.actual_name}, 당신은 항상 내게 쉬라고 했었지. 이제야... 영원히 안식할 수 있는 곳에 도착했나 봐.」`,
          );
          await luna_talk.print_and_wait(
            '우마무스메 「처음 【에덴】이라는 이름을 들었을 때, 이곳이 이렇게 웅장하고 아름다운 풍경일 줄은 상상도 못 했어.」',
          );
          await luna_talk.print_and_wait('우마무스메 「드디어 새로운 세계에 도착했구나.」');
          await luna_talk.print_and_wait(
            '우마무스메 「어쩌면 이곳에도 생명이 존재하겠지. 우리와 똑같이 기뻐하고 화내고 슬퍼하고 즐거워하는.」',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「다채로운 이야기와 뜨거운 염원, 그리고 낭만과 사랑, 투쟁이 있는 곳.」',
          );
          await luna_talk.print_and_wait('우마무스메 「드디어 도달했어——」');
          await luna_talk.print_and_wait(
            '우마무스메의 질주는 점차 느려졌고, 결국 그녀는 여신들의 앞에 멈춰 섰다.',
          );
          await era.printAndWait(
            '세 여신 「아이야, 모든 종착지이자... 모든 시작의 땅에 도달한 것을 축하한다. 네가 에덴에 도달한 첫 번째 우마무스메란다.」',
          );
          await era.printAndWait(
            '세 여신 「우리는 너를 포상하고, 너의 진정한 꿈을 이루어주마! 자, 소원을 말하기 전에 묻고 싶은 것이 있느냐?」',
          );
          era.drawLine();
          await luna_talk.print_and_wait(
            '우마무스메는 자신의 인생을 회상했고, 수많은 장면이 눈앞을 스쳐 지나갔다.',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「우리의 숙원과 손에 닿지 않는 꿈들——」',
          );
          await luna_talk.print_and_wait('우마무스메 「우리의 전승과 사랑하는 모든 것들——」');
          await luna_talk.print_and_wait(
            '우마무스메 「그것들이 어떻게 오랜 시간 동안 변치 않고, 세대에서 세대로 이어질 수 있었던 걸까요?」',
          );
          await luna_talk.print_and_wait(
            '우마무스메는 마음속 의문을 던졌지만, 여신들이 대답하기도 전에 스스로 답을 내놓았다.',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「우마무스메와 트레이너... 우리 사이의 인연 덕분이었을까요?」',
          );
          await luna_talk.print_and_wait('그녀는 이마를 짚고 고개를 들어 활짝 미소 지었다.');
          await luna_talk.print_and_wait(
            `여신들은 사랑스럽다는 듯 그녀의 흐트러진 머리카락을 쓰다듬었다.`,
          );
          await era.printAndWait('세 여신 「그렇다면, 너의 소원은 무엇이냐?」');
          await luna_talk.print_and_wait(
            '그녀는 두 팔을 벌려 이 새로운 세계를 껴안는 듯한 포즈를 취했다.',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「꿈이 계속 이어질 수 있는 곳을 원해요.」',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「우마무스메가 영원히 달릴 수 있는 곳을요.」',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「우리를 사랑해주는 사람들의 환호와 기도가 들리는 한, 우리의 승리를 빌어주는 한——」',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「우리가 영원히 맞서 싸워, 모든 강적을 물리칠 수 있는 그런 곳을 원해요.」',
          );
          await luna_talk.print_and_wait(
            '우마무스메 「지상의 에덴! 꿈만 있다면 모든 우마무스메가 갈 수 있는 에덴을요!」',
          );
          await era.printAndWait('여신들은 묵묵히 고개를 끄덕였고, 우마무스메는 다시 입을 열었다.');
          await luna_talk.print_and_wait(
            '우마무스메 「그리고, 다시 돌아가고 싶어요. 그곳엔 나의 사랑하는 사람이 반드시 기다리고 있을 테니까요.」',
          );
          await era.printAndWait(
            '삼여신 「정말 욕심이 많은 아이로구나…… 음…… 하지만 소원을 하나만 빌어야 한다는 규칙은 없었지?」',
          );
          era.drawLine();
          await era.printAndWait('레이스가 끝났다.');
          await era.printAndWait(
            `인파가 흩어진 뒤, ${me.name}은(는) 자신을 에워싼 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
          );
          await era.printAndWait(`${me.name}은(는) 보고 싶었던 우마무스메를 발견했다.`);
          await era.printAndWait(
            `${luna_talk.sex}는 등을 돌리고 있어, ${me.name}은(는) 그녀가 지금 어떤 표정인지 알 수 없었다.`,
          );
          await era.printAndWait(
            `어쩌면 우승의 광경에 여전히 압도되어 있을 수도 있고, 혹은 ${me.name}은(는) 알지 못하는 격앙된 감정을 되새기고 있을지도 모른다.`,
          );
          await era.printAndWait(`혹은 그저 지쳐서 혼자 있고 싶은 것일지도.`);
          await era.printAndWait(
            `${me.name}은(는) 허탈하게 바닥에 주저앉았다. 며칠간 쌓인 피로 때문에 서 있을 힘조차 남아 있지 않았다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 고개를 들어 하늘을 바라보았고, 멀리 맑은 하늘에 달이 걸려 있는 것을 발견했다——해와 달이 함께 떠 있다.`,
          );
          await era.printAndWait(`${me.name}은(는) 길게 숨을 내뱉었다.`);
          await luna_talk.print_and_wait(`???「${me.actual_name}」`);
          await era.printAndWait(
            `마침내 ${me.name}은(는) 그녀의 부름을 들었다. 강렬한 불안감을 안고 ${me.name}은(는) 그녀를 바라보았으나, 아무런 대답도 하지 못했다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 지금 무릎을 꿇어야 할지, 아니면 바보처럼 웃어야 할지 알 수 없었다. 지금 마주하고 있는 이는 루나인가, 아니면 황제인가?`,
          );
          era.drawLine();
          await luna_talk.print_and_wait(
            '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
          );
          await luna_talk.print_and_wait(
            '???「한쪽은 애상에 잠기고, 다른 한쪽은 광노에 휩싸이지. 마치 달과 태양처럼, 결코 만날 수 없고 서로를 밀어내기만 하던 존재들.」',
          );
          await era.printAndWait(
            `${luna_talk.sex}은(는) 끝없는 하늘을 바라보았고, 그 표정은 마치 깊은 심연을 들여다보는 듯 엄숙했다.`,
          );
          era.printButton('「너는 그저 태양일지도 몰라.」', 1);
          era.printButton('「너는 그저 달일지도 몰라.」', 2);
          await era.input();
          await era.printAndWait(
            `${me.name}의 말을 듣고 ${chara.sex}는 고개를 숙였다.`,
          );
          era.printButton('「하지만 너는 태양이면서 동시에 달일 수도 있어.」', 1);
          era.printButton('「하지만 너는 황제이면서 동시에 루나일 수도 있어.」', 2);
          await era.input();
          await era.printAndWait('해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.');
          await era.printAndWait(
            `${luna_talk.sex}는 멍하니 ${me.name}을(를) 바라보다가, 이내 뺨을 붉히며 눈시울을 적셨다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 손을 내밀었고, 그녀는 당신에게 달려왔다. 루나? 황제? ${me.name}은(는) 더 이상 그런 것은 중요하지 않다고 생각했다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 그녀의 손을 맞잡았고, 힘껏 서로를 끌어안으며 눈물을 쏟아냈다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 확신했다. 지금 품 안에서 오직 ${me.name}과(와) 뜨겁게 포옹하며 입을 맞추는 그녀 또한, 더 이상 그 질문에 얽매이지 않는다는 것을.`,
          );
          await era.printAndWait(
            '깊은 입맞춤이 끝나고 두 사람은 숨을 헐떡이며, 진심을 확인하는 다음 폭풍이 몰아치기 전 잠시 숨을 골랐다.',
          );
          await era.printAndWait(
            `${me.name}은(는) 가슴팍에 기댄 그녀의 온기를 느낄 수 있었다. 이전엔 결코 느껴본 적 없는 이 뜨거움——황제의 단호함과 루나의 부드러움이 동시에 느껴졌다.`,
          );
          await me.say_and_wait('너는 내가 사랑하는 황제이자, 나를 사랑해주는 루나야.', true);
          await era.printAndWait(
            `${me.name}은(는) 그렇게 생각했으나, 이내 고개를 저으며 품 안의 미인이 짧게 비명을 지르는 사이 그녀와 함께 잔디밭에 누웠다.`,
          );
          era.printButton('「나의 연인, 그 이름은 심볼리 루돌프.」', 1);
          await era.input();
          good_end(edu_marks);
        } else {
          const luna_end =
            !era.get(`status:${luna}:신경쇠약`) &&
            era.get(`love:${luna}`) >= 90;
          if (luna_end) {
            await print_event_name('영원한 둥근 달', luna_talk);
          } else {
            await print_event_name('황제의 즉위', emperor_talk);
          }
          await era.printAndWait('레이스가 끝났다.');
          await era.printAndWait(
            `인파가 흩어진 뒤, ${me.name}은(는) 기자와 동료들에게 핑계를 대고 경기장으로 돌아왔다.`,
          );
          await era.printAndWait(`${me.name}은(는) 보고 싶었던 우마무스메를 발견했다.`);
          await era.printAndWait(
            `${chara.name}가 멀리 석양 아래 서 있었고, 바람은 잔디를 흔들며 그녀의 흩날리는 머리카락을 스치고 지나갔다.`,
          );
          await era.printAndWait(
            `달밤이 다가오고 있었으나 태양은 아직 지지 않았다. ${chara.sex}는 등을 돌리고 있었기에 ${me.name}은(는) 그녀의 표정을 볼 수 없었다.`,
          );
          await era.printAndWait(
            `어쩌면 우승의 여운에 잠겨 있을 수도, 혹은 ${me.name}은(는) 알 수 없는 격정에 휩싸여 있을지도 모른다.`,
          );
          await era.printAndWait(`아니면 그저 지쳐서 혼자만의 시간이 필요한 것일지도.`);
          await era.printAndWait(
            `${me.name}은(는) 허탈하게 바닥에 주저앉았다. 계속된 피로에 일어설 힘조차 없었다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 고개를 들어 하늘을 보았고, 맑은 하늘 한구석에 걸린 달을 발견했다——해와 달이 함께 떠 있다.`,
          );
          await era.printAndWait(`???「${me.actual_name}」`);
          await era.printAndWait(
            `마침내 그녀의 부름이 들렸다. 벅찬 마음으로 ${me.name}은(는) 그녀를 보았지만, 아무 말도 하지 못했다.`,
          );
          await era.printAndWait(
            `${me.name}은(는) 지금 이 순간 자신이 어떻게 반응해야 할지 알 수 없었다. 지금 내 앞의 존재는 루나인가, 아니면 황제인가?`,
          );
          era.drawLine();
          await era.printAndWait(
            '???「한 영혼이 잠들 때마다, 다른 영혼이 깨어난다.」',
          );
          await era.printAndWait(
            '???「한쪽은 슬픔에, 한쪽은 분노에. 마치 달과 태양처럼 만나지 못한 채 서로를 밀어내지.」',
          );
          await era.printAndWait(
            `${chara.sex}는 끝없는 하늘을 응시했고, 그 표정은 마치 심연을 마주한 듯 무거웠다.`,
          );
          await chara.print_and_wait(
            `???「${
              luna_end
                ? '나, 한때는 그 황제를 정말 미워했어.'
                : '얼마 전, 짐은 경기장에서 거의 죽을 뻔했다. 하지만 마지막 순간, 가냘픈 목소리가 짐을 북돋웠지.'
            }」`
          );
          await era.printAndWait(`${me.name}은(는) 멍하니 그녀를 바라보았다.`);
          if (luna_end) {
            await luna_talk.print_and_wait(
              `???「그런데 마지막에, 그녀가 내게 말하더라고. 『그 어릿광대는 처음부터 끝까지 짐이 패배할 거라 생각지 않았다』고.」`,
            );
            await luna_talk.print_and_wait(
              `???「그래서 ${me.actual_name}에게 영원히 깨지 않는 아름다운 꿈을 선물하고 싶대.」`,
            );
            await luna_talk.print_and_wait(
              '???「황제의 여정은 이제 끝난 거야.」',
            );
            await era.printAndWait(
              `루나의 예전 우울했던 눈빛에는 미망이 서려 있었다. 분명 소원이 이루어졌음에도, 그녀는 왜인지 모를 허탈함에 빠져 있었다.`,
            );
            await luna_talk.say_and_wait('그럼 내 이야기 또한, 여기서 끝나는 걸까?');
          } else {
            await emperor_talk.print_and_wait(
              `???「그녀가 짐을 버티게 했다. 『난 네가 정말 싫지만, 우리들의 꿈을 위해 단 한 가지만 빌겠어』라고 하더군.」`,
            );
            await emperor_talk.print_and_wait(
              `???「승리를 거머쥐고, ${me.actual_name}을(를) 만나러 가라고.」`,
            );
            await emperor_talk.print_and_wait(
              `???「비록 앞으로 우리가 영원히 다시 만나지 못하더라도... 그녀는 모든 것을 바치겠다고 했다.」`,
            );
            await era.printAndWait(
              `황제의 날카로운 눈빛에 미망이 서렸다. 그녀는 자신의 머릿속에서 누가 그토록 소란스럽게 굴었는지 도무지 기억해낼 수 없었다.`,
            );
            await emperor_talk.say_and_wait('그녀는 누구지?');
          }
          await era.printAndWait('해와 달의 여운이 서린 빛줄기를 따라 시선이 교차했다.');
          if (luna_end) {
            await era.printAndWait('밤이 내려앉고, 태양은 자취를 감추었다.');
            await era.printAndWait('오직 하늘 위 밝게 빛나는 달의 부드러운 품만이 남았다.');
          } else {
            await era.printAndWait('하늘이 너무나 밝아, 달이 자취를 감추었다.');
            await era.printAndWait('오직 태양의 끝없는 광채만이 남았다.');
          }
          await era.printAndWait(`${me.name}은(는) 고개를 숙였고, 눈시울이 붉어졌다.`);
          if (luna_end) {
            era.printButton('「내가 곁에 있어 줄게.」', 1);
            era.printButton('「『황제』의 이야기는 영원히 끝나지 않아.」', 2);
          } else {
            era.printButton('「폐하, 그녀는 제게 정말 소중한 사람이었습니다.」', 1);
            era.printButton('「……누구였을까요?」', 2);
          }
          await era.input();
          if (luna_end) {
            await luna_talk.say_and_wait('그렇구나.');
            await era.printAndWait('무거운 발걸음을 떼며, 루나는 달이 비치는 방향으로 걸어갔다.');
          } else {
            await emperor_talk.say_and_wait('그렇군.');
            await era.printAndWait('무거운 발걸음을 떼며, 황제는 태양이 비치는 방향으로 걸어갔다.');
          }
          await era.printAndWait(`${me.name}은(는) 그녀가 어디로 가는지 알지 못했다.`);
          await era.printAndWait([
            {
              content: `하지만 ${me.name}은(는) 떨리는 몸을 이끌고 일어나 `,
            },
            (luna_end ? luna_talk : emperor_talk).get_colored_name(),
            { content: `의 뒤를 따랐다——그녀가 어디로 향하든 상관없이.` },
          ]);
          era.println();
          normal_end(edu_marks, luna_end);
        }
      } else {
        hook.override = false;
        await print_event_name('레이스 승리!', chara);

        await chara.say_and_wait(
          i_emperor
            ? `그들은 감히 내 적수라고 부를 수도 없군. 고작 이 정도 수준에 내가 직접 나서야 했나?`
            : '……이것이 당신이 원하던 결말이라면, 반대하지 않겠어.',
        );
        era.printButton('「어쩔 수 없는 선택이었어.」', 1);
        era.printButton('「넌 더 잘할 수 있어.」', 2);
        if ((await era.input()) === 1) {
          await chara.say_and_wait(i_emperor ? '흥.' : '알고 있어…… 하아.');
        } else {
          await chara.say_and_wait(
            i_emperor ? '어릿광대 주제에 제법 기세등등하군? 흥……' : '난 그런 기대를 하지 않아.',
          );
        }
      }
      wait_flag && (await era.waitAnyKey());
    } else if (extra_flag.rank <= 5 && !edu_marks.faith_collapse) {
      edu_marks.faith_collapse++;
      await print_event_name('신념의 붕괴', emperor_talk);

      await era.printAndWait(`${me.name}은(는) 입을 벌렸으나, 끝내 단 한 마디도 내뱉지 못했다.`);
      await era.printAndWait('졌다.');
      await era.printAndWait(
        `${me.name}은(는) 떨리는 손으로 관중석 난간을 붙잡으며 쓰러지지 않으려 애썼다.`,
      );
      await era.printAndWait('주변 사람들이 심볼리 루돌프의 입착을 축하하며 인사를 건네왔다.');
      await era.printAndWait(
        `${me.name}은(는) 겉치레를 할 여유조차 없이 곧장 경기장을 빠져나왔다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 지하 통로를 향해 달렸다. 레이스가 끝나면 우마무스메들이 대기실로 돌아간다는 것을 알기 때문이다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 숨을 헐떡이며 ${chara.name}의 대기실 문 앞에 도착했지만, 문은 아무리 밀어도 열리지 않았다.`,
      );
      era.printButton('「루나?!」', 1);
      era.printButton('「폐하!!!」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `문 너머에서 구토하는 소리가 들려왔다. ${me.name}은(는) 누군가에게 머리를 세게 얻어맞은 듯한 충격을 받았다.`,
      );
      await luna_talk.say_and_wait('괜찮아………… 잠시 시간만 주면…………');
      await luna_talk.say_and_wait('난……………………………………');
      await era.printAndWait(
        `${
          me.name
        }이(가) 문을 두드려보았지만, 들려오는 것은 문 너머 그녀의 구토와 흐느낌뿐이었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 무력하게 바닥에 주저앉았다…… ${me.name}은(는) 자신이 루나의 기대를 저버렸음을 깨달았다.`,
      );
      await era.printAndWait(`${me.name}은(는) 그녀에게 아무런 도움도 되지 못했다.`);
      await era.printAndWait(`우리들은 패배했다.`);
      if (ret === 2) {
        await handle_debuff(edu_marks, luna);
      }
    } else {
      return await super.race_end(chara, me, callname, hook, extra_flag);
    }
  }
};