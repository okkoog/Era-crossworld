/**
 * @file 플레이어 - 조교
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const pregnant_report_in_love = require('#/event/ero/common/pregnant-report-in-love');
const kojo = require('#/event/ero/ero-0.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_enum } = require('#/data/ero/part-const');
const {
  penis_desc,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

const stop_ex_options = {};
stop_ex_options[part_enum.virgin] = (chara_id) =>
  `${era.get(`callname:${chara_id}:-2`)} 에게 사정한다!`;
stop_ex_options[part_enum.mouth] = (chara_id, is_double_blow_job) => {
  return `${era.get(`callname:${chara_id}:-2`)}${
    is_double_blow_job
      ? ` 와 ${era.get(`callname:${era.get('tflag:현재조수')}:-2`)}`
      : ''
  } 의 얼굴에 사정한다!`;
};

module.exports = class extends CustomizedEro {
  /** @author 雞雞 */
  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      const last_action = era.get('tflag:이전행동');
      if (
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job ||
        last_action === ero_hooks.ask_double_tit_job ||
        last_action === ero_hooks.double_tit_job
      ) {
        era.print([
          '',
          get_chara_talk(era.get('tflag:이전턴의상대')).get_colored_name(),
          ' 와 ',
          get_chara_talk(era.get('tflag:이전턴의조수')).get_colored_name(),
          ' 의 봉사로, ',
          me.get_colored_name(),
          ` 의 ${penis_desc[get_penis_size(0)]} 육봉은 금방이라도 하늘을 찌를 듯이 발기했다.`,
        ]);
        return;
      }
    }
    super.become_erect(chara, me, callname, hook, extra_flag);
  }

  /**
   * 깨어있는 주인공만이 사정 참기가 가능하므로, 이 부분은 반드시 출력이 필요함
   * @author 黑奴队长
   */
  async orgasm_denial(stop_success) {
    const me = get_chara_talk(0),
      touch = era.get('tcvar:0:음경접촉부위'),
      last_action = era.get('tflag:이전행동'),
      is_double_blow_job =
        last_action === ero_hooks.ask_double_blow_job ||
        last_action === ero_hooks.double_blow_job;
    era.printMultiColumns([
      {
        content: [me.get_colored_name(), ' 의 육봉이 이미 한계에 도달했다……'],
        type: 'text',
      },
      ...[
        '사정한다!',
        '조금 더 참는다',
        !era.get('tcvar:0:콘돔') && stop_ex_options[touch.part]
          ? stop_ex_options[touch.part](touch.owner, is_double_blow_job)
          : '',
      ]
        .filter((e) => e)
        .map((e, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: 24 / l.length },
          content: e,
          type: 'button',
        })),
    ]);
    const ret = await era.input();
    if (ret) {
      // 참으려 했으나 견디지 못한 경우
      if (!stop_success) {
        era.print([get_chara_talk(0).get_colored_name(), '은(는) 참아내는 데 실패했다!']);
      } else if (ret === 2) {
        // 참아내고 대상을 변경한 경우
        const touched_part = era.get('tcvar:0:음경접촉부위');
        if (touched_part !== -1) {
          const curr_supporter = era.get('tflag:현재조수');
          era.print([
            me.get_colored_name(),
            '은(는) 페니스를 뽑아내 ',
            get_chara_talk(touched_part.owner).get_colored_name(),
            ...(is_double_blow_job
              ? [' 와 ', get_chara_talk(curr_supporter).get_colored_name()]
              : []),
            ` 의 ${touch.part === part_enum.virgin ? '옥체' : '아름다운 얼굴'}를 조준했다.`,
          ]);
        }
      } else {
        // 참기 성공
        era.print([me.get_colored_name(), '은(는) 일시적으로 사정 욕구를 참아냈다……']);
      }
    }
    return ret;
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async report_pregnant_between_weeks(father, mother, callname, hook) {
    const love = era.get(`love:${mother.id || father.id}`),
      unexpected_pregnant = LifeEventMarks.get_marks(
        mother.id,
      ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await pregnant_report_in_love(father, mother, unexpected_pregnant);
    } else {
      const is_p_slave = era.get('flag:징벌강도');
      await print_event_name(is_p_slave === 3 ? '职责' : '意外', mother);
      if (is_p_slave >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 은 ',
          {
            content: '아랫배 음문에 나타난 임신을 상징하는 문양',
            color: buff_colors[2],
          },
          '을 멍하니 바라보다 화장실로 달려가 구토하기 시작했다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 은 ',
          {
            content: '손에 든 임신 테스트기',
            color: buff_colors[2],
          },
          '를 멍하니 바라보다 세면대에서 또 한 번 토하고 말았다.',
        ]);
      }
      if (is_p_slave === 3) {
        hook.override = true;
        await era.printAndWait([
          '자신의 계획을 어지럽히는 이 작은 생명에 대해, ',
          mother.get_colored_name(),
          ' 은 결심했다——',
        ]);
        era.printButton('기쁘게 아이를 기다린다 (순종 인자+200 부친 호감도+150)', 1);
        era.printButton('어쩔 수 없이 사실을 받아들인다 (수음 인자+200 부친 호감도+50)', 2);
        const ret = await era.input();
        if (ret === 1) {
          await era.printAndWait([mother.get_colored_name(), ' 은 기쁜 마음으로']);
          await era.printAndWait('아이가 생긴 뒤의 미래와 태어난 뒤의 교육을 상상했다……');
          await era.printAndWait([
            '하지만, ',
            mother.get_colored_name(),
            ' 의 마음속에서 가장 고민되는 것은 역시',
          ]);
          era.println();
          await era.printAndWait('아이의 아버지는 누구일까 하는 점이었다.');
          await era.printAndWait(
            `며칠 전 레이스에서 지고 분풀이로 온몸에 잇자국을 남겼던 그 ${father.get_uma_sex_title()}일까?`,
          );
          await era.printAndWait(
            `아니면 레이스에서 이기고 기뻐서 자궁 안에 소변까지 쏟아부었던 그 ${father.get_uma_sex_title()}일까?`,
          );
          if (
            sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
              (e) => e > 0 && era.get(`cflag:${e}:육성턴수합산`) < 3 * 48,
            ).length > 0
          ) {
            await era.printAndWait(
              `\n그것도 아니라면, 매일 훈련 시간마다 보지에 하루치 정액을 가득 채워줘서, 복도에 우윳빛 액체를 뚝뚝 흘리며 훈련장까지 가게 만들었던 그 담당 ${father.get_uma_sex_title()}일까?`,
            );
          }
          if (
            sys_filter_chara('cflag', '모계캐릭', 0).filter(
              (e) =>
                era.get(`exp:${e}:성관계횟수`) > era.get(`exp:${e}:수면간횟수`),
            ).length > 0
          ) {
            await era.printAndWait(
              '\n그것도 아니라면, 기억 속엔 아직 어린아이인데도 마치 엄마 배 속에서 어떻게 나왔는지 기억이라도 하듯, 매번 못난 엄마를 아헤가오 암컷 돼지로 만들어버리는 그 착한 자식일까?',
            );
          }
          await era.printAndWait('\n누구든 간에, 새로운 생명의 탄생은 기쁜 일이다.');
          await era.printAndWait([
            '하지만 역시 ',
            mother.get_colored_name(),
            ' 가 가장 걱정하는 것은……',
          ]);
          era.println();

          await mother.say_and_wait('아이를 낳기 전까지, 임신 주머니로서의 직무……', true);

          await era.printAndWait([
            { isBr: true },
            '생각을 채 마치기도 전에 뒤에서 전해진 충격이 ',
            mother.get_colored_name(),
            ' 의 사고를 끊어놓았다.',
          ]);
          await era.printAndWait(
            `상대는 그녀의 의사는 안중에도 없었고, 밑이 젖었는지 확인조차 하지 않았다———물론 육체 개조 덕분에 젖었는지 확인할 필요도 없이, 24시간 내내 젖은 상태로 ${father.get_uma_sex_title()} 님을 환영하고 있지만———그는 그대로 삽입했다.`,
          );
          await era.printAndWait([
            '격렬한 충돌 속에 ',
            mother.get_colored_name(),
            ' 를 의식을 잃을 정도로 범한 뒤에야, 뒤에 있던 ',
            father.get_uma_sex_title(),
            ' 는 겨우 사정했고, ',
            mother.get_colored_name(),
            ' 의 얼굴에 육봉을 닦고는 그대로 떠났다.',
          ]);
          await era.printAndWait([
            '그 과정에서 ',
            mother.get_colored_name(),
            ' 은 상대의 얼굴조차 알 수 없었다.',
          ]);

          await era.printAndWait('\n임신했다는 말은 꺼내지도 못했다.');
          await era.printAndWait(
            `설령 배가 남산만 하게 불러와도 ${father.get_uma_sex_title()} 주인님에게는 그저 가지고 놀 부위가 하나 더 늘어난 것뿐이겠지.`,
          );
          await era.printAndWait([
            '그 사실을 깨달은 ',
            mother.get_colored_name(),
            ' 는 아래가 다시 한번 경련하며 억제할 수 없는 조수를 뿜어냈고, 햇빛 아래 만들어진 무지개는 마치 그녀의 임신을 축하하는 듯했다.',
          ]);
        } else {
          await era.printAndWait('딱히 놀랄 일도 아니었다.');
          await era.printAndWait(
            '———매일 화장실에 갈 때조차 대여섯 개의 육봉에 가로막혀, 결국 조수와 정액, 그리고 실금한 소변이 섞인 바닥을 스스로 깨끗이 핥아 치워야 하는 삶에서, 임신이 그렇게 상상하기 힘든 일일까?',
          );
          await era.printAndWait('아이의 아버지는 누구일까?');
          await era.printAndWait([
            mother.get_colored_name(),
            ' 은 다시 한번 생각했다——',
          ]);
          await era.printAndWait(
            `어제 사이좋게 임신 주머니를 공유하던 그 두 명의 ${father.get_uma_sex_title()}일까?`,
          );
          await era.printAndWait(
            '아니면 자신의 앞에서 출정식을 하던 팀원 중 누군가가, 모든 구멍에 정액을 가득 채워 숨결에서조차 진한 정액 냄새가 나게 했던…… 마지막에 몸에 묻은 정액을 하나하나 핥아 삼키고 보지에 밀어 넣었을 때——그때 임신한 것일지도 모른다.',
          );

          await era.printAndWait([
            { isBr: true },
            '어느덧 ',
            mother.get_colored_name(),
            ' 의 마음속에는 아이의 미래에 대한 막연한 공포와 두려움이 피어올랐다.',
          ]);
          if (
            sys_filter_chara('cflag', '모계캐릭', 0).filter(
              (e) =>
                era.get(`exp:${e}:성관계횟수`) > era.get(`exp:${e}:수면간횟수`),
            ).length > 0
          ) {
            era.println();
            await era.printAndWait([
              '그 아이의 어린 시절을 떠올려 보니 그리 오래된 것 같지도 않은데, ',
              father.sex,
              ' 은 어느새 순진했던 눈망울을 지운 채, 자신을 낳아준 구멍을 성욕 어린 눈으로 쳐다보는 ',
              father.get_phy_sex_title()[0],
              ' 짐승이 되어 있었다.',
            ]);
            await era.printAndWait([
              mother.get_colored_name(),
              ' 은 자신이 다시 한번 ',
              father.sex_code === 1 ? '아들' : '딸',
              ' 에게 유린당해 차마 어머니라 부를 수 없는 수치스러운 모습이 되지 않을까 두려워졌다.',
            ]);
          } else {
            era.println();
            await era.printAndWait([
              '태어날 이 아이도 다른 ',
              father.get_uma_sex_title(),
              '들처럼 나를 그저 임신 주머니로 취급하게 될까……',
            ]);
            await era.printAndWait(
              '……안 돼, 직무를 다해야 해. 적어도 이 아이만큼은 제대로 훌륭하게 키워내야 해.',
            );
          }

          era.println();
          await era.printAndWait('임신 주머니에 의해 길러진 아이가 정말 제대로 된 어른이 될 수 있을까?');
          await era.printAndWait([
            '매일같이 자신의 엄마가 온갖 ',
            father.sex_code === 1 ? '오빠' : '언니',
            '들에게 범해져 콧물 눈물을 흘리며 품위 없이 목숨을 구걸하는 모습을 보며,',
          ]);
          await era.printAndWait(
            '그런 아이가 정말 굴하지 않고 꿋꿋하게 자라날 수 있을까?',
          );
          await era.printAndWait('하지만 비웃을 처지도 아니었다.');
          await era.printAndWait([
            `지금도 화장실을 지나가던 초등부 ${father.get_uma_sex_title()}에게 바닥에 깔려 육봉을 수발들고 있는 `,
            mother.get_colored_name(),
            ' 는, 그저 그런 희박한 희망에 기댈 수밖에 없었다.',
          ]);
        }
        era.println();
        if (ret === 1) {
          add_jewel_reward(0, '순종', 1000);
          sys_like_chara(
            father.id,
            0,
            150,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        } else {
          add_jewel_reward(0, '피학쾌감', 200);
          sys_like_chara(
            father.id,
            0,
            50,
            unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep,
          );
        }
        await era.waitAnyKey();
      } else if (
        unexpected_pregnant === unexpected_pregnant_enum.mother_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 은 자신이 어떻게 임신했는지 전혀 기억하지 못했고, 누구든 범인일 수 있다는 생각에 ',
          mother.get_colored_name(),
          ' 는 오한을 느꼈다……',
        ]);
        if (mother.sex_code > 0) {
          await era.printAndWait([
            '……게다가 분명 ',
            mother.get_colored_name(),
            ' 도 아버지가 될 수 있었을 텐데……',
          ]);
        }
      } else {
        await era.printAndWait([
          '잠시 당황한 뒤, ',
          mother.get_colored_name(),
          ' 는 결국 ',
          father.get_colored_name(),
          ' 에게 소식을 전하기로 했다.',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' 가 몇 번이고 되물어 확인했지만, 돌아오는 것은 아이가 자신의 핏줄이라는 대답뿐이었다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            father.get_colored_name(),
            ' 는 이에 대해 아무런 기억이 없었다……',
          ]);
        } else {
          await era.printAndWait([
            ' 똑같이 당황했지만, 이내 진정한 ',
            father.get_colored_name(),
            ' 는 ',
            mother.get_colored_name(),
            ' 에게 반드시 아버지로서의 책임을 지겠다고 약속했다……',
          ]);
        }
      }
    }
  }

  /**
   * @author 幽白書
   * @author 雞雞
   */
  async have_baby(father, mother, ch_id) {
    const is_slave = era.get('flag:징벌강도') === 3;
    if (
      era.get(`cflag:${father.id}:모계캐릭`) === 0 &&
      LifeEventMarks.get_marks(0).unexpected_pregnant !==
        unexpected_pregnant_enum.mother_sleep &&
      !is_slave
    ) {
      const dict = { id: father.id };
      dict['플레이어이름'] = mother.name;
      dict['角色名'] = father.name;
      await kojo['乱伦生子'](dict);
    } else if (era.get(`love:${father.id}`) < 90) {
      era.drawLine();
      await print_event_name('새로운 생명', mother);
      await era.printAndWait([mother.get_colored_name(), ' 은 아이를 품에 안았다——']);
      if (is_slave) {
        if (
          LifeEventMarks.get_marks(0).unexpected_pregnant ===
          unexpected_pregnant_enum.mother_sleep
        ) {
          era.printButton('자애롭게 쓰다듬는다', 1);
          era.printButton('소리 없는 저항', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 의 마음속에는 사랑이 가득 찼다.',
            ]);
            await era.printAndWait('아이의 아버지가 누구인지는 이제 중요하지 않았다.');
            await era.printAndWait([
              '오히려 그저 임신 주머니의 정례 업무를 수행했을 뿐인데 이렇게 귀여운 아이를 얻다니…… ',
              mother.get_colored_name(),
              ' 는 마음속으로 얼굴도 모르는 아이의 아버지에게 감사를 전했다.',
            ]);
            await era.printAndWait('앞으로 반드시 이 아이를 훌륭하게 키워내리라……');
            await era.printAndWait([
              '어느새 ',
              mother.get_colored_name(),
              ' 의 마음속에 과거 트레이너로서 가졌던 책임감과 영예가 싹트기 시작했다……',
            ]);

            era.printButton('「!」', 1);
            await era.input();

            await era.printAndWait([
              '갑작스러운 물줄기가 ',
              mother.get_colored_name(),
              ' 를 환상에서 깨워놓았다.',
            ]);
            await era.printAndWait([
              '품에 안긴 아이가 자신의 어머니를 향해 생애 첫 소변을 뿌린 것이다.',
            ]);
            await era.printAndWait([
              '자신의 아이에게 변소 취급을 당했다는 것은, 설령 사고라 할지라도 ',
              mother.get_colored_name(),
              ` 에게 무한한 쾌감을 주었다. 마치 자신이 이 아이의 화장실이 되기 위해 ${father.sex} 을 낳은 것처럼 느껴졌다.`,
            ]);
            await era.printAndWait([
              mother.get_colored_name(),
              ' 는 아이의 소변이 묻은 은밀한 부위를 상냥하게 핥아 닦아주었고, 이어서 자기 몸에 뿌려진 액체를 전부 깨끗이 입안에 담고는 만족스럽게 손가락을 핥았다.',
            ]);
            era.println();

            await era.printAndWait([
              '이토록 천박한 모습이라니, 아무리 저급한 임신 주머니라 해도 이 정도일까.',
            ]);
            await era.printAndWait(['이런 자신이 어떻게 원래의 생활로 돌아갈 수 있을까.']);
            await era.printAndWait(['또한 어떻게 그런 생활로 돌아가는 것을 견딜 수 있을까.']);
            await era.printAndWait([
              mother.get_colored_name(),
              ' 는 품 안의 아이를 다정한 눈으로 바라보았지만, 겉모습만 같을 뿐',
            ]);
            await era.printAndWait('마음속에 품은 생각은 이미 달라져 있었다.');
            await era.printAndWait(
              '————어떻게 해야 이 아이를 나를 조교하기에 가장 적합한 주인으로 키워낼 수 있을까?',
            );
          } else {
            await era.printAndWait(
              '이 아이에 대해, 이론상 어머니로서 느껴야 할 감정들이 메말라갔다.',
            );
            await era.printAndWait('갓 태어난 아이에게 죄가 없다는 것쯤은 알고 있지만……');

            era.printButton('「!」', 1);
            await era.input();

            await era.printAndWait([
              '갑자기, ',
              mother.get_colored_name(),
              ' 가 짧은 비명을 질렀다.',
            ]);
            await era.printAndWait([
              '아이의 첫 소변이 마치 각도라도 잰 듯이 뿜어져 나와, ',
              mother.get_colored_name(),
              ' 의 얼굴을 적셨다.',
            ]);
            await era.printAndWait([
              '간호사도 아이의 건강함을 기뻐하듯 인자한 웃음을 지었다.',
            ]);
            await era.printAndWait([
              '하지만 ',
              mother.get_colored_name(),
              ' 의 마음속엔 기쁨이 없었고, 머릿속엔 지난 과거들만이 스쳐 지나갔다.',
            ]);
            era.println();

            await era.printAndWait([
              '아침마다 강제로 다리를 벌리고 앉아, 잠에서 덜 깬 ',
              father.get_uma_sex_title(),
              ' 의 아침 발기를 처리하며 ',
              father.get_uma_sex_title(),
              ' 의 첫 정액과 첫 소변을 동시에 삼켰던 기억.',
            ]);
            await era.printAndWait([
              '황혼 녘, 훈련장에서 훈련을 마친 ',
              father.get_uma_sex_title(),
              '들에게 성욕 처리를 간청받으며, 하루 종일 씻지 못한 땀내와 오줌 찌든 때가 가득한 육봉을 입에 물고 ',
              father.sex,
              '들의 피로를 전부 자신의 입안에 배설하게 했던 기억.',
            ]);

            const diff_mark = sys_filter_chara(
              'cflag',
              '모집상태',
              recruit_flags.yes,
            ).reduce(
              (p, c) => {
                if (c > 0 && era.get(`cflag:${c}:성장단계`) >= 2) {
                  if (
                    era.get(`cflag:${c}:부계캐릭`) === 0 ||
                    era.get(`cflag:${c}:모계캐릭`) === 0
                  ) {
                    p.c++;
                  } else {
                    p.s++;
                  }
                }
                return p;
              },
              { c: 0, s: 0 },
            );
            if (diff_mark.s > 0 || diff_mark.c > 0) {
              await era.printAndWait([
                { isBr: true },
                mother.get_colored_name(),
                ' 는 며칠 전 밤의 비극을 떠올렸다.',
              ]);
              await era.printAndWait(
                `설령 자신의 ${
                  diff_mark.c > 0 ? '딸' : `负责${father.get_uma_sex_title()}`
                }이 자신의 방으로 몽유병처럼 찾아와, 반쯤 잠든 상태로 자신의 보지를 가득 채운 뒤 자고 있는 입술을 억지로 벌려 청소까지 하고 갔음에도 깨어나지 못했던 일을.`,
              );
              await era.printAndWait([
                { isBr: true },
                mother.get_colored_name(),
                ' 은 자신이 이미 이런 생활에 익숙해진 것이 아닐까 의심하기 시작했다……',
              ]);
              await era.printAndWait([
                '안 돼, 그렇게 생각하면 안 돼. ',
                mother.get_colored_name(),
                ' 는 소스라치게 놀라며 고개를 저었다.',
              ]);
            }

            await era.printAndWait('\n……역시 떠오르는 것은 고통스러운 기억뿐이다. 하지만……');
            await era.printAndWait([
              mother.get_colored_name(),
              ' 는 품 안에서 아무것도 모른 채, 제 어머니 얼굴에 오줌을 싸고도 무엇이 좋은지 꺄르르 웃는 아이를 바라보았다.',
            ]);
            await era.printAndWait('아이의 천성은 선악과는 무관한 법이다……');
            await era.printAndWait('혹시, 아직 기회가 있을지도 모른다……?');

            await era.printAndWait('\n아이가 주변의 행동을 학습한다는 능력도 잊은 채.');
            await era.printAndWait(
              `임신 주머니가 봉사해야 할 대상은 신분과 상관없는 「모든 ${father.get_uma_sex_title()}」라는 것도 잊은 채.`,
            );
            await era.printAndWait(
              '옆에 있던 간호사가 이미 임신 주머니의 구강 봉사를 받고 싶어 참지 못하고 있다는 사실도 눈치채지 못했다.',
            );
            await era.printAndWait(
              '더욱이 자신이 무의식중에 친딸이 싸지른 소변을 핥아 치웠다는 것조차 깨닫지 못했다.',
            );
            await era.printAndWait([
              mother.get_colored_name(),
              ' 는 아이를 안고, 설령 간호사 씨의 치마 속 굵직한 거물을 강제로 빨게 되더라도, 눈 속의 빛만큼은 사라지지 않았다.',
            ]);
            era.add('exp:0:오랄횟수', 1);

            await era.printAndWait([
              { isBr: true },
              era
                .getAddedCharacters()
                .filter((e) => era.get(`cflag:${e}:모계캐릭`) === 0).length > 1
                ? '다시 한번, '
                : '',
              '공허한 꿈을 품은 채, ',
              mother.get_colored_name(),
              ' 는 이번에야말로 이 아이를 제대로 키워내겠다고 다짐했다.',
            ]);
          }
        } else {
          era.printButton('아니, 나 혼자서도 충분히 키울 수 있어', 1);
          era.printButton('아이에게는 아빠가 필요해', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' 은 당초 자신의 체내에 욕망을 쏟아붓고 아무 책임감 없이 안싸를 해댔던 ',
              father.get_colored_name(),
              ' 를 노려보았다.',
            ]);
            await era.printAndWait(
              `이런 ${father.sex} 이 아버지로서의 책임을 다할 리가 없다고 생각했다.`,
            );
            await era.printAndWait(
              '자신에게 필요한 것은 모욕당할 때 자신과 아이를 부축해주고 보호해줄 사람이다.',
            );
            await era.printAndWait(
              '자신이 배설 도구로 취급당할 때 다가와 육봉으로 마지막 발성구까지 틀어막는 쓰레기가 아니라.',
            );

            await era.printAndWait('\n설령 혼자라 해도, 이 아이를 잘 돌볼 것이다.');
            await era.printAndWait([
              '지금 이 순간 ',
              mother.get_colored_name(),
              ' 는 의심할 여지 없이 가장 험난한 길을 선택했다.',
            ]);

            await era.printAndWait('\n갑자기 품 안의 아이가 울음을 터뜨렸다.');
            await era.printAndWait('배가 고픈가? 젖을 먹여야 하나?');
            await era.printAndWait('그렇다면…… 지금의 나, 이 조교로 단련된 몸은');
            await era.printAndWait(
              `유두가 빨릴 때, 분명 자신의 유두를 깨물고 핥았던 그 ${father.get_uma_sex_title()}들을 떠올리겠지.`,
            );
            await era.printAndWait(
              '가슴이 물리는 순간, 분명 가슴이 주물리고 착유당했던 그 밤들을 떠올리며 순식간에 절정에 달하겠지.',
            );
            await era.printAndWait(
              '심지어 아이가 젖을 다 먹고 가슴 사이에 누워있을 때…… 아기 체온과 비슷한 육봉이 가슴 위에서 소유권을 선언하며, 입안에 진한 백탁액을 쏟아붓던 때를 떠올리게 되지 않을까?',
            );

            await era.printAndWait(
              '\n그리고 이 모든 것을 견뎌내고 겨우 이 아이를 성인으로 키워냈다 하더라도…………',
            );
            await era.printAndWait(
              '아이가 아직 사랑이 무엇인지 알기도 전에, 본능적으로 성이 무엇인지 깨달은 눈빛을 자신에게 보내온다면',
            );
            await era.printAndWait('나는 대체 어떻게 해야 할까.');

            await era.printAndWait('\n눈앞의 길이 마치 칠흑처럼 캄캄해졌다……');
          } else {
            await era.printAndWait('……어찌 됐든, 나 혼자서 살아갈 수는 있을지 몰라도');
            await era.printAndWait('적어도 아이만큼은 온전한 가정을 갖게 해주고 싶었다.');

            await era.printAndWait([
              { isBr: true },
              mother.get_colored_name(),
              ` 는 아이의 아버지를 바라보며, 품 안의 아이를 ${father.sex} 에게 보여주었다.`,
            ]);
            await era.printAndWait(
              `이 아이가 ${father.sex} 의 책임감을 일깨워주기를 바랐다.`,
            );
            await era.printAndWait([
              father.get_colored_name(),
              ' 는 ',
              mother.get_colored_name(),
              ' 와 아이를 꼬빡 껴안으며, 앞으로 ',
              mother.get_colored_name(),
              ' 와 아이를 잘 대하겠노라 맹세했다.',
            ]);
            await era.printAndWait('개과천선한 아버지와 곁을 지키는 어머니.');
            await era.printAndWait('방금 본 세 가족의 환상이 마치 현실이 된 것 같았다.');

            await era.printAndWait('\n하지만……');
            await era.printAndWait([
              '임신 주머니로서의 직업적 본능은 ',
              mother.get_colored_name(),
              ' 가 놓치게 두지 않았다.',
            ]);
            await era.printAndWait([
              '자신이 아기에게 젖을 먹이는 모습을 보며 ',
              father.get_colored_name(),
              ' 의 가랑이가 움찔거리는 것을.',
            ]);
            await era.printAndWait('가정생활…… 참 좋은 핑계다.');
            await era.printAndWait(
              '그렇다면 아이에게 젖을 먹이는 것과 동시에 입안에 육봉이 박히더라도, 「영양 보충」이라는 명분으로 한마디면 넘어갈 수 있겠지.',
            );
            await era.printAndWait([
              '남편으로서 ',
              father.get_colored_name(),
              ' 가 아이를 안은 자신을 친절하게 품에 안는 장면은, 누구라도 가정에 대한 의심을 지우게 하겠지…… 한창 애액을 흘리는 구멍에 굵직한 육봉이 박혀있다는 사실만 들키지 않는다면.',
            ]);
            await era.printAndWait(
              '그렇게 아이가 자란 뒤에는…… 아이와 아이의 아버지에게 동시에 사용당하며 그사이에 끼어 수컷의 육봉에 탐닉하는……',
            );
            (new MyEduMarks().orgy ||= []).push(ch_id);

            await era.printAndWait([
              { isBr: true },
              '그런 미래를 상상하자 ',
              mother.get_colored_name(),
              ' 는 자신도 모르게 입술을 핥았다.',
            ]);
            await era.printAndWait('그런 내일을 기대하기 시작했다.');
          }
        }
      } else {
        era.printButton('아이의 아버지를 무시한다', 1);
        era.printButton(`${father.sex} 도 함께 보게 한다`, 2);
        if ((await era.input()) === 1) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 가 ',
            father.get_colored_name(),
            ' 를 바라보는 눈빛은 매우 공허했지만, 아이에게만큼은 자애로운 표정을 지어 보였다.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' 은 고민 끝에 ',
            father.get_colored_name(),
            ' 에게 다가오라고 손짓했다.',
          ]);
          await era.printAndWait([
            father.get_colored_name(),
            ' 는 기뻐하며 ',
            mother.get_colored_name(),
            ' 를 감싸 안았고, 두 사람은 함께 잠든 아이를 달랬다.',
          ]);
        }
      }
      era.println();
    }
  }

  async shop_start() {}

  async shop_end() {}
};