/**
 * @file 심볼리 루돌프 - 日常
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CustomizedDaily {
  select() {
    let talk_list;
    if (sys_check_awake(17)) {
      const is_emperor = new LunaEduMarks().emperor;
      if (is_emperor) {
        talk_list = [
          '네놈이냐, 광대여.',
          '짐은 지금 기분이 좋다, 흥을 깨지 마라.',
          '만물에는 시작과 끝이 있는 법. 설령 내가 결국 지게 되더라도 후배들에게 향기를 남기리라.',
        ];
      } else {
        talk_list = [
          `${CharaTalk.me.actual_name}?`,
          '썰렁한 농담이 떠오르지 않네...',
          '오늘 일정은 어떻게 돼?',
        ];
      }
    } else {
      talk_list = ['스... 후우...'];
    }
    get_chara_talk(17).say(get_random_entry(talk_list));
  }

  good_morning() {
    let talk_list;
    const is_emperor = new LunaEduMarks().emperor;
    if (is_emperor) {
      talk_list = ['시간을 낭비하지 마라.', '실수를 범하지 마라.', '짐을 실망시키지 마라.'];
      if (era.get('status:17:정신손상') || era.get('status:9017:정신손상')) {
        talk_list.push(
          '잠든 시간이 점점 줄어드는군. 좋다.',
          '광대여, 내 상태가 좋을 때 사냥을 더 많이 준비해라!',
        );
      }
      if (era.get('status:17:신경쇠약') || era.get('status:9017:신경쇠약')) {
        talk_list.push(
          '약함을 떨쳐내고, 황제의 이름을 널리 떨쳐라!',
          '누가 내 머릿속에서 시끄럽게 구는 거지? 그 입을 다물게 해라.',
        );
      }
    } else {
      talk_list = [
        '우리가 이런 관계가 될 줄 누가 알았을까... 이제 되돌아갈 기회는 없어.',
        '나를 믿고 기대하는 사람들... 그들의 마음을 차마 내칠 수가 없어.',
        '네가 내 곁에 있어준 덕분에, 환상이라 여겼던 에덴에 한 걸음씩 다가가고 있어.',
        '역지사지? 내 입장을 이해할 수 있는 사람은 아무도 없다고 생각해.',
        '학생회에 바라는 점이 있다면 종이에 적어서 줘. 가능한 한 모두의 소원을 들어주고 싶으니까.',
        '내 승부복이 멋지다고? ...난 이『감옥』을 묘사하는 데 멋지다는 표현을 쓰고 싶지 않아.',
      ];
      if (era.get('status:17:정신손상') || era.get('status:9017:정신손상')) {
        talk_list.push(
          '요즘 가끔씩, 견디기 힘든 두통이 느껴져.',
          '내가 잠자는 시간이 점점 늘어나고 있는 건가?',
        );
      }
      if (era.get('status:17:신경쇠약') || era.get('status:9017:신경쇠약')) {
        talk_list.push(
          '내 시야에서 사라지지 마! 당신이 느껴지지 않게 될 것 같아...!',
          `${CharaTalk.me.actual_name}, 아직 루나를 보고 있어? 난 마치... 더 이상 내가 아니게 된 것 같아——`,
        );
      }
    }
    get_chara_talk(17).say(get_random_entry(talk_list));
  }

  async talk() {
    if (!sys_check_awake(17)) {
      return await super.talk();
    }
    const talk_list = [],
      is_emperor = new LunaEduMarks().emperor;
    if (era.get('base:17:체력') < 0.4 * era.get('maxbase:17:체력')) {
      if (is_emperor) {
        talk_list.push('피로가 쌓이는 것이 느껴지는군.', '네놈은 믿을 필요 없다, 그저 따르기만 해라.');
      } else {
        talk_list.push(
          '난 아직 더 할 수 있어!',
          '훈련을 한 세션 더 추가하자. 내 실력은 아직 이정도가 아니야.',
        );
      }
    } else {
      switch (era.get('cflag:17:컨디션')) {
        case 2:
          if (is_emperor) {
            talk_list.push('출정의 시간이 왔다.', '황제의 이름을 천하에 떨쳐라!');
          } else {
            talk_list.push(
              '컨디션이 최고라 훈련하고 싶은 마음이 치고 올라오네! 후훗...',
              '평소보다 상태가 더 좋아. 좋은 결과가 있을 것 같아.',
            );
          }
          break;
        case 1:
          if (is_emperor) {
            talk_list.push(
              '제국은 벽돌 한 장부터 시작되는 법.',
              '음...? 광대여, 농담이라도 하나 해보아라.',
            );
          } else {
            talk_list.push(
              '평소의 노력이 중요한 법이지.',
              '훈련이 끝나면 같이 산책이라도 갈까... 시간이 비어 있다면 말이야.',
            );
          }
          break;
        case 0:
          if (is_emperor) {
            talk_list.push('흥미가 없군.', '짐의 흥을 깨지 마라.');
          } else {
            talk_list.push(
              '완벽한 상태라고는 할 수 없지만, 약한 소리를 할 수는 없지.',
              '한 걸음씩 나아가자. 인내하겠어.',
            );
          }
          break;
        case -1:
          if (is_emperor) {
            talk_list.push('흥...', '내 눈앞에서 사라져라.');
          } else {
            talk_list.push(
              '승부복을 입는다는 건 신분을 전환하는 것, 다시 황제가 되어야 한다는 뜻이지...',
              '응... 왠지 컨디션이 좋지 않아. 하지만 이 정도 피로로 약한 소리를 해서는 안 돼.',
            );
          }
          break;
        case -2:
          if (is_emperor) {
            talk_list.push('광대여, 네놈이 일을 전부 망쳐버린 모양이구나?', '짐에게 무례하게 굴지 마라.');
          } else {
            talk_list.push(
              '큰일이야... 몸이 무거워. 하지만 단 하루도 낭비하고 싶지 않은데...',
              '평소의 컨디션을 찾을 수가 없어... 이러면 안 된다는 걸 알면서도...',
            );
          }
      }
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_gift() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push(
        '오? 선물이냐? ...흥, 원하는 것은 짐이 직접 취할 것이다.',
        '공물은 보물창고에 쌓아 두도록 해라.',
      );
    } else {
      talk_list.push(
        '난 이제 어린애가 아니야...! 헤헤, 하지만 고마워!',
        '우리는 같은 이상을 품은 공범이야. 목표를 이루기 전까진 멈출 수 없어... 미안, 너무 무거운 이야기였나?',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_cook() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push(
        '음식을 만드는 것에도 큰 가르침이 들어 있지.',
        '네놈에게 하사하는 것이니, 경외심을 갖고 먹도록 해라.',
      );
    } else {
      talk_list.push(
        '사람들을 즐겁게 할 요리를 많이 만들자. 후훗, 사실 요리 과정 자체가 즐겁거든. 특히 당신과 함께라면.',
        '오전 중에 학생회 업무를 다 끝내 두었어. 이제 여기에 집중할 수 있겠지.',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_study() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push(
        '짐은 실력 없는 교수를 필요로 하지 않는다.',
        '어느 시대든 현자는 마땅히 존경받아야 하는 법.',
      );
    } else {
      talk_list.push(
        '당신이 심리학 책을 볼 줄은 몰랐는데. 나도 좀 가르쳐줄래?',
        '트레이너 면허 시험 문제 중 몇 개는 내가 출제한 거야.',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_rest() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push('......깊은 잠을......', '만약 까다로운 일이 생기면, 광대여... 짐을 깨우는 것을 허락하마.');
    } else {
      talk_list.push(
        '......정말 부끄럽네. 다 크고 나니, 예전엔 아무렇지 않던 포옹도 조금 뜨겁게 느껴져.',
        '스으... 후우...',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_prepare() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push(
        '지금 이 순간, 피가 끓어오르는구나!',
        '자, 영웅과 용자들의 발버둥을 내게 보여다오!!!',
      );
    } else {
      talk_list.push(
        '나도 한때는 달리는 것을 참 좋아했었지...',
        '우리의 공통된 이상을 위해서라면, 난 물러서지 않아.',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async office_game() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push('소일거리치고는 합격점이군.', '사냥 준비는 아직이냐?');
    } else {
      talk_list.push(
        '게임...? 어릴 때 당신이 항상 나를 안고 같이 놀아줬던 기억이 나.',
        '노는 건 좋지만, 시간을 낭비해선 안 돼.',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async school_atrium(hook) {
    const talk_list = [];
    hook.arg = !(await select_action_in_atrium());
    if (new LunaEduMarks().emperor) {
      if (hook.arg) {
        talk_list.push(
          '들리는구나... 실의와 실패에 빠진 자들이 이곳에 남긴 원한이.',
          '설령 제국이 무너질지라도, 아름다운 풍경과 유적은 영원히 남으리니.',
        );
      } else {
        talk_list.push(
          '짐이 잠들어 있는 동안, 짐의 의지에 따라 이 행궁을 잘 관리했느냐?',
          '광대여, 네놈이 짐을 잘 보좌하기만 한다면 짐은 무한한 영광을 하사할 것이다.',
        );
      }
    } else {
      if (hook.arg) {
        talk_list.push(
          '싹트는 의지는 열정일까, 아니면 본능일까? 보이지 않는 힘이 나를 나아가게 해.',
          '세 여신이여, 만약 정말로 에덴이 존재한다면 제가 모든 우마무스메를 그곳으로 이끌겠습니다.',
        );
      } else {
        talk_list.push(
          '이거야말로 세월이 화살처럼 빠르다는 거겠지. 마치 아직 어릴 때 심볼리 가문에서 같이 뛰어놀던 것만 같아.',
          '우린 몇 년이나 떨어져 있었지. 이제부터는 서로 너무 멀리 떨어지지 않는 게 좋겠어.',
        );
      }
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async school_rooftop() {
    const talk_list = [];
    if (new LunaEduMarks().emperor) {
      talk_list.push('평범한 식사군, 배만 채울 수 있으면 된다.', '짐은 음식에 까다롭지 않다.');
    } else {
      talk_list.push(
        '하하하... 생강이 없으면 생각이 없는 말이 되는 건가... 하하하하!',
        '사실 맛에 대해서는 크게 따지지 않아. 하지만 차림새가 정갈하고 향이 좋다면 더 식욕이 돋긴 하겠지.',
      );
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async out_river(hook, extra_flag) {
    const talk_list = [];
    hook.arg = (await select_action_around_river()) > 0;
    if (new LunaEduMarks().emperor) {
      if (hook.arg) {
        talk_list.push(
          '강토를 시찰하는 것 또한 황제의 책임이지.',
          '앞이 왜 이리 소란스러우냐? 광대여, 가서 알아보고 오너라.',
        );
      } else {
        talk_list.push('경기장에서의 사냥 또한 일종의 낚시 아니겠느냐?', '물속의 생명들이여...');
      }
    } else {
      if (hook.arg) {
        talk_list.push(
          '어릴 적 생각이 조금 나. 당신은 항상 내 곁에 있어줬지.',
          '이제 우리는 어깨를 나란히 하고 걸을 수 있어. 봐, 나 키 많이 컸지?',
        );
      } else {
        talk_list.push(
          '심지를 굳건히 하고 인내하며 능력을 기른다. 낚시는 꽤나 심오한 학문이네.',
          '물고기를 낚더라도 사진만 찍고 놓아줘야 해. 이건 학원의 자산이니까.',
        );
      }
    }
    if (!hook.arg) {
      extra_flag.jpy = 0;
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async out_shopping(hook) {
    const talk_list = [];
    hook.arg = await select_action_in_shopping_street();
    const is_emperor = new LunaEduMarks().emperor;
    switch (hook.arg) {
      case 0:
        if (is_emperor) {
          talk_list.push(
            '시끄러운 곳이군.',
            '허구의 게임은 허무한 위로만 줄 뿐이다. 진정한 즐거움을 원한다면 차라리 용자와 싸우는 게 낫지.',
          );
        } else {
          talk_list.push(
            '음... 한 판 더!',
            `저거랑 저것도! ${CharaTalk.me.actual_name}, 전부 다 해보자!`,
          );
        }
        break;
      case 1:
        if (is_emperor) {
          talk_list.push(
            '확률론이란 참으로 심오한 학문이지.',
            '온천에 가기로 마음먹었다면 굳이 이런 방식을 써야 하느냐?',
          );
        } else {
          talk_list.push(
            '당신이 좋아하는 걸로 골라봐... 아니면 그냥 우리가 온천 호텔을 사버릴까?',
            '경품을 뽑는 아이들 모두에게 행운이 깃들길.',
          );
        }
        break;
      case 2:
        if (is_emperor) {
          talk_list.push(
            '극장과는 또 다른 맛이 있군.',
            '아름다운 음악을 듣는 것은 최상의 즐거움이지.',
          );
        } else {
          talk_list.push(
            '이 기회에 잠시 쉬어 가도록 하자.',
            '모든 고통을 노래로 다 뱉어낼 수 있다면 얼마나 좋을까.',
          );
        }
        break;
      case 3:
        if (is_emperor) {
          talk_list.push('지루하군.', '두 번 다시는 없을 일이다.');
        } else {
          talk_list.push(
            '정말 좋은 영화였어. 한숨 자려고 했는데 스토리에서 눈을 뗄 수가 없었지 뭐야.',
            '요즘 영화는 정말 사실적이구나. 나도 모르게 손에 땀을 쥐었어.',
          );
        }
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
    hook.arg = hook.arg <= 1;
  }

  async out_church(hook) {
    const chara_talk = get_chara_talk(17),
      is_emperor = new LunaEduMarks().emperor;
    await era.printAndWait(
      `신사는 ${CharaTalk.me.name}과(와) ${chara_talk.name}에게 딱히 특별한 곳은 아니었다.`,
    );
    await era.printAndWait(
      `${CharaTalk.me.name}은(는) 운에 기댈 나이가 지났고, ${chara_talk.name}는 항상 실력으로 성적을 거두어 왔기 때문이다.`,
    );
    if (is_emperor) {
      await era.printAndWait(
        `하지만 ${CharaTalk.me.name}을(를) 놀라게 한 것은, 황제 또한 루나처럼 새로운 것에 대해 끊임없는 호기심을 가지고 있다는 사실이었다.`,
      );
    } else {
      await era.printAndWait(
        `하지만 ${CharaTalk.me.name}을(를) 안심시킨 것은, 루나가 예전과 다름없이 새로운 것에 대해 끊임없는 호기심을 가지고 있다는 사실이었다.`,
      );
    }
    await era.printAndWait(
      `일 년에 몇 번뿐인 행사는 ${chara_talk.sex}에게 충분한 신선함을 주기에 족했다.`,
    );
    await era.printAndWait(
      `${CharaTalk.me.name}은(는) ${chara_talk.name}의 곁에 서서, ${chara_talk.sex}가 '행운'을 상징하는 점괘를 뽑기를 기다렸다.`,
    );
    era.println();

    hook.arg = Math.random() < 0.5;
    if (hook.arg) {
      if (is_emperor) {
        await chara_talk.say_and_wait('절대적인 실력만 있다면 하늘 또한 굽어살피는 법.');
        await era.printAndWait(
          `황제는 아무렇게나 점괘를 뒤로 던졌고, ${CharaTalk.me.name}가 서둘러 받아 나무에 걸어 두었다.`,
        );
      } else {
        await chara_talk.say_and_wait('꽤나 좋은 계시가 내려온 것 같네.');
        await era.printAndWait(
          `루나는 싱글벙글 웃으며 길조가 담긴 점괘를 ${CharaTalk.me.name}에게 보여준 뒤 나무에 걸었다.`,
        );
      }
      await era.printAndWait(
        `${CharaTalk.me.name}은(는) 문득, 자신도 좋은 점괘를 하나 뽑아볼까 하는 생각이 들었다.`,
      );
      await era.printAndWait(
        `그저 ${chara_talk.name}를 기쁘게 할 수 있다면, 보이지 않는 미래의 험난한 길에 한 줄기 희망이라도 보탤 수 있다면.`,
      );
      await era.printAndWait(
        `어떤 조력이라도 좋으니. 아아... 세 여신이여, 부디 ${chara_talk.name}를 보살펴 주소서!`,
      );
    } else {
      if (is_emperor) {
        await chara_talk.say_and_wait('흥미롭군! 짐은 도전을 즐긴다.');
        await era.printAndWait('황제는 흥미롭다는 듯 손에 든 점괘를 보며 호탕하게 웃었다.');
      } else {
        await chara_talk.say_and_wait('아무래도 우리가 가는 길에 장애물이 많을 모양이야.');
        await era.printAndWait(
          `루나는 ${CharaTalk.me.name}에게 점괘 내용을 보여주지 않고 소중히 챙겨 두었다.`,
        );
      }
      await era.printAndWait(
        `${CharaTalk.me.name}은(는) 안색이 조금 어두워졌다. ${CharaTalk.me.name}는 알고 있었다.`,
      );
      await era.printAndWait(
        `만약 ${CharaTalk.me.get_couple_title()}이(가) 보이지 않는 미래의 험난한 길에서 신령의 가책까지 받아야 한다면...`,
      );
      await era.printAndWait('조금, 짜증이 났다.');
    }
  }

  async out_station(hook) {
    const talk_list = [];
    hook.arg = await select_action_in_station(17);
    const is_emperor = new LunaEduMarks().emperor;
    switch (hook.arg) {
      case 0:
        if (is_emperor) {
          talk_list.push(
            '정벌의 즐거움 중 하나는 발아래 땅이 길러낸 양식을 맛보는 것이지.',
            '산해진미와 술을 대령하라!',
          );
        } else {
          talk_list.push(
            '후배가 계속 아이스크림을 사달라고 조르더라... 후훗, 시간을 내서 같이 가줘야겠어.',
            '요즘 아이들의 식욕이 왕성하네. 식재료 발주량을 얼마나 늘려야 할지 계산해 봐야겠어.',
          );
        }
        break;
      case 1:
        if (is_emperor) {
          talk_list.push(
            '광대여, 은혜를 베풀기로 마음먹었다면 제대로 짐을 즐겁게 해 보아라.',
            '......흥, 발끝조차 따라오지 못할 거라면 짐을 수행할 필요도 없다.',
          );
        } else {
          talk_list.push(
            '악몽을 꾸게 되면 말해줘. 내가 밤새 지켜줄게.',
            '마음이 가라앉을 때는『단풍』을 보며 마음의『방풍』을... 후후, 정말 걸작이네.',
          );
        }
        break;
      case 2:
        if (is_emperor) {
          talk_list.push('짐은 활기찬 도시가 좋다.', '백성들이 화목해 보이니 보기 좋군.');
        } else {
          talk_list.push(
            '요즘 상점들은 이렇게나 세련됐나? 아이들이 빠져들 만하네.',
            '저쪽이 아주 북적거리는데, 우리도 가볼까?',
          );
        }
    }
    await get_chara_talk(17).say_and_wait(get_random_entry(talk_list));
  }

  async load_talk() {
    const event_marks = new LunaEduMarks(),
      chara = get_chara_talk(17);
    if (event_marks.good_end) {
      await chara.say_and_wait('태양과 달이 계속해서 너와 함께하기를');
      await chara.say_and_wait('......하지만, 황제와 루나를 잊지 말아 줘.');
      await chara.print_and_wait([
        chara.get_colored_name(),
        '는 몸을 돌려 떨고 있다',
      ]);
      await chara.say_and_wait('부디...... 몸조심하길. 우리는 다시 만나게 될 거야. (흐느낌)');
    } else if (event_marks.emperor) {
      await chara.say_and_wait('광대여, 헛수고를 몇 번이고 반복할 셈이냐?');
    } else if (era.get('love:17') >= 75) {
      await chara.print_and_wait([
        chara.get_colored_name(),
        '는 입술을 달싹이지만, 목소리가 나오지 않는다',
      ]);
      await chara.say_and_wait('——!');
      await chara.say_and_wait('——가지 마......');
      await chara.print_and_wait([
        chara.get_colored_name(),
        '는 흐느끼고 있지만, ',
        CharaTalk.me.get_colored_name(),
        '은(는) 이미 멀어져 갔다......',
      ]);
      await chara.say_and_wait('분명 약속했었잖아...... 무슨 일이 있어도 떠나지 않겠다고——');
    }
  }
};