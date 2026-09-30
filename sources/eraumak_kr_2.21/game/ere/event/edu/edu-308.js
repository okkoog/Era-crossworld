/**
 * @file 라이트 헬로 - 育成
 * @author 黑奴队长（临时）
 */
const {
  get,
  printAndWait,
  printMultiColumns,
  println,
  waitAnyKey,
} = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');

const grand_lives = require('#/data/event/grand-lives');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} hello
   * @param {CharaTalk} me
   */
  async report(hello, me) {
    const cur_year = get('flag:현재연도');
    switch (cur_year) {
      case 2000:
        await print_event_name('그랜드 라이브, 개막!', hello);
        await printAndWait([
          '이번 주의 마지막 근무일, 한 명의 성숙한 ',
          hello.get_uma_sex_title(),
          '가 트레센 학원에 찾아왔다.',
        ]);
        await printAndWait([
          hello.sex,
          '는 ',
          hello.get_colored_actual_name(),
          ', 자칭 그랜드 라이브 라는 프로젝트의 발기인이다.',
        ]);
        await printAndWait([
          '그랜드 라이브의 목표는 더 많은 참가자가 위닝 라이브 무대에 올라 공연할 수 있도록 하여, ',
          hello.get_uma_sex_title(),
          '들에게 자신의 빛을 발할 기회를 하나 더 제공하는 것이다.',
        ]);
        await printAndWait(
          '현재 그랜드 라이브 프로젝트는 단계적인 성공을 거두고 있으며, URA는 G3 이하 5개 레이스에서 그랜드 라이브를 개설하고 매년 순환 운영하기로 승인했다.',
        );
        await printAndWait([
          '소개가 끝난 후 ',
          hello.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '에게 그랜드 라이브를 많이 응원해 달라고 부탁했다.',
        ]);
        break;
      case 2001:
        await print_event_name('그랜드 라이브의 꿈', hello);
        await printAndWait([
          hello.get_colored_name(),
          '가 기쁜 모습으로 ',
          me.get_colored_name(),
          '에게 1년간의 시범 운영을 거쳐 그랜드 라이브가 호평을 얻었기에, URA는 매년 G2 대회 5개에 그랜드 라이브를 추가하고, 마찬가지로 매년 순환 개최하기로 결정했다고 전했다.',
        ]);
        await printAndWait([
          '그랜드 라이브가 최고의 대회에도 등장할 수 있게 하기 위해 ',
          hello.get_colored_name(),
          '는 의욕이 넘쳤다.',
        ]);
        break;
      case 2002:
        await print_event_name('꿈의 개척자', hello);
        await printAndWait([hello.get_colored_name(), '가 게시판 앞에 멍하니 서 있다.']);
        await printAndWait(
          '내년 그랜드 라이브 레이스 목록을 게시하는 게시판에는 이제 G1 대회 5개가 추가되었다.',
        );
        await printAndWait([
          '한때 경기장에서 무기력했던 ',
          hello.get_uma_sex_title(),
          '가 마침내 자신의「승리」를 거두었다.',
        ]);
        await printAndWait([
          '그랜드 라이브의 창시자로서, ',
          hello.get_colored_name(),
          '의「승리」는 누구도 따라올 수 없을 것이다.',
        ]);
        if (get('love:308') >= 75) {
          await printAndWait([
            me.get_colored_name(),
            '은(는) ',
            hello.sex,
            '를 부드럽게 품에 안았다. ',
            hello.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '의 어깨에 기대었다.',
          ]);
          await printAndWait(
            '말은 별로 없었지만, 두 사람은 그저 조용히 이「승리」를 만끽했다.',
          );
        } else {
          await printAndWait([
            me.get_colored_name(),
            '은(는) ',
            hello.get_colored_name(),
            '의 곁에 서서 말없이 ',
            hello.sex,
            '의 곁을 지켰다.',
          ]);
        }
        break;
      default:
        await print_event_name('그랜드 라이브', hello);
        await printAndWait('그랜드 라이브 레이스의 일정이 발표되는 시간이 다시 찾아왔다.');
    }
    println();
    await printAndWait('내년의 그랜드 라이브 개최 레이스:');
    const g3_dict = {},
      g2_dict = {},
      g1_dict = {},
      race_list = [];
    Object.values(race_enum)
      .slice(1)
      .filter(
        (e) =>
          race_infos[e].track < track_enum.longchamp && !grand_lives.check(e),
      )
      .forEach((e) => {
        const info = race_infos[e];
        switch (info.race_class) {
          case class_enum.G1:
            (g1_dict[info.date] || (g1_dict[info.date] = [])).push(e);
            break;
          case class_enum.G2:
            (g2_dict[info.date] || (g2_dict[info.date] = [])).push(e);
            break;
          case class_enum.G3:
          case class_enum.OP:
          case class_enum['Pre-OP']:
            (g3_dict[info.date] || (g3_dict[info.date] = [])).push(e);
            break;
        }
      });
    const selected_dict = {};
    gacha(Object.values(g3_dict), 5).forEach((e) => {
      const race_id = get_random_entry(e);
      race_list.push(race_id);
      selected_dict[race_id] = true;
    });
    if (cur_year >= 2001) {
      gacha(
        Object.entries(g2_dict).filter((e) => !selected_dict[e[0]]),
        5,
      ).forEach((e) => {
        const race_id = get_random_entry(e[1]);
        race_list.push(race_id);
        selected_dict[race_id] = true;
      });
    }
    if (cur_year >= 2002) {
      gacha(
        Object.entries(g1_dict).filter((e) => !selected_dict[e[0]]),
        5,
      ).forEach((e) => {
        const race_id = get_random_entry(e[1]);
        race_list.push(race_id);
        selected_dict[race_id] = true;
      });
    }
    printMultiColumns(
      sort_list(
        race_list.map((e) => race_infos[e]),
        (e) => e.date,
        true,
      ).map((e) => {
        const weeks = e.date - 1,
          month = Math.floor(weeks / 4) + 1,
          week = (weeks % 4) + 1;
        return {
          config: { align: 'center', width: 6 },
          content: [
            `${month} 월 제 ${week} 주`,
            { isBr: true },
            e.get_colored_name_with_class(),
          ],
          type: 'text',
        };
      }),
    );
    const final_dict = {};
    race_list.forEach((e) => (final_dict[e] = 1));
    grand_lives.add(race_list);
    await waitAnyKey();
  }
};
