const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sp = get_chara_talk(1),
    callname = sys_get_callname(56, 0),
    message = [];
  message.push(
    async () => {
      await kitaru.say('지난번에 하마터면 재시험을 치를 뻔했어요! 다 시라오키 님의 가호 덕분이죠!');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 점술용 연필을 압수한 뒤, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '를 위해 다음 시험의 중요 포인트를 짚어주기 시작했다.',
      ]);
      await era.printAndWait([
        '그나저나 똑같이 점술용 연필을 사용했는데, 어째서 ',
        sp.get_colored_name(),
        '는 재시험을 보게 된 것일까?',
      ]);
    },
    async () => {
      await kitaru.say('에엣! 이래 봬도 전 서예 자격증이 있다구요!');
      await kitaru.say_and_wait('그러니까 이런 쪽으로는 꽤 자신 있답니다!');
    },
    async () => {
      await kitaru.say([callname, '! 이 작품은 어떤가요?']);
      await era.printAndWait([
        '그렇게 말하며 ',
        kitaru.get_teen_sex_title(),
        '는 ',
        me.get_colored_name(),
        '을(를) 향해 신비로운 기운이 서린 서예 작품을 들어 보였다.',
      ]);
    },
    () =>
      kitaru.say_and_wait([
        '우와! 레이스 말고도 ',
        callname,
        '은 아는 게 정말 많으시네요!',
      ]),
    async () => {
      await kitaru.say(['오! 이 책 말이군요!']);
      await kitaru.say_and_wait(['예전에 다락방에 숨어 있을 때 읽은 적이 있어요!']);
    },
    async () => {
      await kitaru.say(['이 잡지, ', callname, '도 관심 있으신가요?']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '이(가) 눈앞에 놓인 《로드아일랜드 천문학 저널》의 점술 칼럼을 가리켰다.',
      ]);
    },
    async () => {
      await kitaru.say(['타입 블루, 타입 그린? ……처음 들어보는 개념이네요?']); //scp 재단 세계 오컬트 연합
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 표지에 연한 파란색 오망성이 그려진 책을 가리키며 ',
        me.get_colored_name(),
        '에게 물었다.',
      ]);
    },
  );
  return get_random_entry(message)();
};