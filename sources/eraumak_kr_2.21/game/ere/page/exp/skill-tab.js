const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { gene_juel_names } = require('#/data/other-const');
const { gene_dict } = require('#/data/race/gene/gene-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');
const { skills_dict } = require('#/data/race/skill/skill-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const in_edu = era.get(`cflag:${chara.id}:육성턴수합산`) < 3 * 48,
      in_palace = era.get(`cflag:${chara.id}:명예의전당`);
    const skill_list = CharaSkills.get(chara.id)
      .get()
      .map((e) => ({
        config: { width: 6 },
        content: skills_dict[e].get_colored_name(),
        type: 'text',
      }));
    const aim_list = [
      {
        config: { content: '습득완료기술', position: 'left' },
        type: 'divider',
      },
      ...(skill_list.length
        ? skill_list
        : [{ content: '미습득', type: 'text' }]),
    ];
    const available_skills = CharaAvailableSkills.get(chara.id).get();
    if (available_skills.length > 0) {
      aim_list.push(
        {
          config: { content: '해금예정스킬', position: 'left' },
          type: 'divider',
        },
        ...available_skills.map((e) => ({
          config: { width: 6 },
          content: skills_dict[e].get_colored_name(),
          type: 'text',
        })),
      );
    }
    aim_list.push(
      {
        config: { content: '인자상속', position: 'left' },
        type: 'divider',
      },
      ...(!chara.id || (in_edu && era.get(`cflag:${chara.id}:상속자1`))
        ? [
            ...(chara.id
              ? [
                  {
                    content: [
                      get_chara_talk(
                        era.get(`cflag:${chara.id}:상속자1`),
                      ).get_colored_name(),
                      ' & ',
                      get_chara_talk(
                        era.get(`cflag:${chara.id}:상속자2`),
                      ).get_colored_name(),
                      ' =>',
                    ],
                    type: 'text',
                  },
                ]
              : []),
            ...gene_juel_names.map((e, i) => ({
              config: { color: gene_type_colors[i], width: 8 },
              content: `${e}인자：${era.get(`juel:${chara.id}:${e}`)}`,
              type: 'text',
            })),
            { content: [], type: 'text' },
            ...new CharaGenes(chara.id).get_values().map((e) => ({
              config: { width: 8 },
              content: [...gene_dict[e.id].get_colored_name(), `× ${e.count}`],
              type: 'text',
            })),
          ]
        : [{ content: '미상속', type: 'text' }]),
      ...(in_palace
        ? [
            {
              config: { content: '상속가능인자', position: 'left' },
              type: 'divider',
            },
            ...gene_juel_names.map((e, i) => ({
              config: { color: gene_type_colors[i], width: 6 },
              content: `${e}인자：${era.get(`juel:${chara.id}:${e}`)}`,
              type: 'text',
            })),
            ...(era.get(`cflag:${chara.id}:피상속`)
              ? [
                  {
                    config: { width: 6 },
                    content: [
                      '=> ',
                      get_chara_talk(
                        era.get(`cflag:${chara.id}:피상속`),
                      ).get_colored_name(),
                    ],
                    type: 'text',
                  },
                ]
              : []),
            { content: [], type: 'text' },
            ...new CharaAvailableGenes(chara.id).get_values().map((e) => ({
              config: { width: 6 },
              content: [...gene_dict[e.id].get_colored_name(), `× ${e.count}`],
              type: 'text',
            })),
          ]
        : []),
    );
    return {
      print() {
        return aim_list;
      },
    };
  },
  name: '습득스킬',
  uma: true,
};
