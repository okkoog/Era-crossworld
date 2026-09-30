const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const awake = 2 * sys_check_awake(52) + sys_check_awake(0),
    call_me = sys_get_callname(52, 0),
    urara = get_chara_talk(52),
    callname = urara.get_colored_name(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    self_call = sys_get_callname(52, 52);
  if (awake === 3) {
    if (get_custom_check(52).is_want_make_love() > 0) {
      if (relation > 150) {
        if (love === 100) {
          urara.say(
            `츄릅~ 하아…… ${call_me}, 이번에도 기분 좋은 일 할까? 만족할 때까지 계속해도 된다구?`,
          );
          era.print([
            '이성을 잃은 듯 서로를 끌어안고 진한 키스를 나눈 뒤, 가녀린 ',
            urara.sex,
            '는 천진난만한 말투로 ',
            me.get_colored_name(),
            '의 귀에 매혹적인 유혹을 속삭였다.',
          ]);
        } else if (love >= 90) {
          urara.say([
            '쪽~ 그러니까 오늘 밤은 ',
            self_call,
            '는 괜찮다는 뜻이야! 그러니까…… ',
            call_me,
            '도 ',
            self_call,
            '랑 함께할래?',
          ]);
          era.print([
            '조금은 어른스러워진 수줍음을 담아 연인의 얼굴에 입을 맞추자, ',
            callname,
            '의 미소 띤 뺨이 발그레하게 물들었다.',
          ]);
        } else if (love >= 75) {
          urara.say([
            '돌아갈 때, ',
            self_call,
            ', ',
            call_me,
            '의 방에 가봐도 될까? 그, 그냥 구경만 하려는 거야!',
          ]);
          era.print([
            urara.get_teen_sex_title(),
            '다운 갈구하는 눈빛으로 모호한 핑계를 대는 ',
            callname,
            '의 앳된 얼굴에는 홍조가 번져 모든 것을 대변하고 있었다.',
          ]);
        } else {
          urara.say([
            call_me,
            '! 오늘은 저기, ',
            self_call,
            '랑 좀 더 같이 있어 줄 수 있어? 밤에 조금만 더 같이 있자!',
          ]);
          era.print([
            '우물쭈물하며 ',
            me.get_colored_name(),
            '의 몸에 가볍게 비비적거리며, ',
            callname,
            '는 거친 숨을 내뱉으며 ',
            me.get_colored_name(),
            '을(를) 붙잡았다.',
          ]);
        }
      } else if (love === 100) {
        urara.say([
          '요즘 좀 피곤해? 그렇다면, 쪽…… 헤헤, 오늘 ',
          call_me,
          '는 ',
          self_call,
          '에게 더 대단한 일을 잔뜩 해도 좋아!',
        ]);
        era.print([
          '부드러운 감촉이 ',
          me.get_colored_name(),
          '의 입가에 스쳤고, 발꿈치를 든 ',
          callname,
          '는 가벼운 입맞춤으로 ',
          urara.sex,
          '의 ',
          call_me,
          '에게 애틋한 요청을 건넸다.',
        ]);
      } else if (love >= 90) {
        urara.say([
          self_call,
          '는 외롭지 않지만, 만약 ',
          call_me,
          '가 원한다면…… ',
          self_call,
          '도 괜찮다구?',
        ]);
        era.print([
          '마음에도 없는 소리로 유혹을 건네며, 헤어지기 직전의 ',
          callname,
          '는 갑자기 몽롱한 눈빛으로 ',
          me.get_colored_name(),
          '의 허리를 감싸 안았다.',
        ]);
      } else if (love >= 75) {
        urara.say([
          '나를 데리고 가고 싶어? 내일 지장만 없다면 괜찮을 것 같은데……?',
        ]);
        era.print([
          me.get_colored_name(),
          '이(가) 첫 번째 질문에 대답하기도 전에, 바짝 다가온 작은 ',
          urara.get_uma_sex_title(),
          '는 욕구불만인 듯한 표정으로 ',
          me.get_colored_name(),
          '에게 두 번째 질문을 던졌다.',
        ]);
      } else {
        urara.say([
          call_me,
          ', ',
          self_call,
          ', 몸이 이상해졌어…… 안 가면 안돼?',
        ]);
        era.print([
          '내키지 않는 기색이 역력하면서도, 작은 ',
          urara.get_uma_sex_title(),
          '는 얼굴을 붉히며 손을 뻗어 ',
          me.get_colored_name(),
          '의 옷자락을 붙잡았다.',
        ]);
      }
      era.printButton('받아들인다', 1);
      era.printButton('거절한다', 2);
      hook.arg = Number((await era.input()) === 1);
    } else if (relation > 150) {
      const talk_arr = [
        [
          ['오늘은 여기까지야? 그럼 다음에 또 봐, ', call_me, '!'],
          [
            me.get_colored_name(),
            '에게 작별 인사를 건넨 뒤, ',
            callname,
            '는 즐겁게 뛰어갔다.',
          ],
        ],
        [
          ['이제 돌아가야 해? 알았어! 잘 가, ', call_me, '!'],
          [
            '떠나기 전, ',
            callname,
            '는 웃으며 ',
            me.get_colored_name(),
            '에게 정중하게 작별 인사를 했다.',
          ],
        ],
        [
          ['벌써 시간이 이렇게 됐네! ', call_me, ', 가는 길 조심해야 해!'],
          [
            me.get_colored_name(),
            '에게 다정한 당부를 건넨 뒤, 작은 ',
            urara.get_uma_sex_title(),
            '는 폴짝폴짝 뛰며 기숙사로 향했다.',
          ],
        ],
        [
          [call_me, '도 피곤해? 고생 많았어! 돌아가서 푹 쉬어야 해, 알았지?'],
          [
            '하루를 마무리하며 ',
            callname,
            '는 ',
            me.get_colored_name(),
            '에게 손을 흔들며 떠나갔다.',
          ],
        ],
      ];
      if (love > 0) {
        talk_arr.push(
          [
            [
              '실감은 안 나지만, 둘이 같이 있으면 정말 시간이 빨리 가는 것 같아! 혹시 ',
              call_me,
              ', 시간을 가속하는 거 아니야? 에? 아니야?',
            ],
            [
              '엉뚱한 소리를 내뱉으며, ',
              callname,
              '와 ',
              me.get_colored_name(),
              '은(는) 작별 인사를 나눈 뒤 헤어졌다.',
            ],
          ],
          [
            ['어라? 데려다주는 거야? 고마워, ', call_me, '!'],
            [
              me.get_colored_name(),
              '의 제안을 들은 ',
              callname,
              '는 웃으며 ',
              me.get_colored_name(),
              '과(와) 함께 마지막 길을 걸었다.',
            ],
          ],
        );
      }
      if (love >= 25) {
        talk_arr.push(
          [
            [
              '조금 더 같이 있고 싶지만, 그러면 다들 걱정하겠지! 그럼 다음에 또 봐, ',
              call_me,
              '!',
            ],
            [
              callname,
              '는 조금 아쉬운 기색이었으나, 고분고분하게 ',
              me.get_colored_name(),
              '에게 작별 인사를 건넸다.',
            ],
          ],
          [
            [
              '여기서 ',
              call_me,
              '랑 헤어지려니 좀 아쉽네! 다음엔 ',
              self_call,
              '랑 좀 더 같이 있어 줄래?',
            ],
            [
              '조금 아쉬운 듯 ',
              me.get_colored_name(),
              '의 옷자락을 만지작거렸으나, ',
              callname,
              '는 작게 작별 인사를 마친 뒤 떠나갔다.',
            ],
          ],
        );
      }
      if (love >= 50) {
        talk_arr.push(
          [
            ['하아…… 미안해, ', call_me, '. 으응~ 조금만 더 기다려줘……'],
            [
              '얼굴에 묘한 홍조를 띤 채, ',
              callname,
              '는 떠나기 전 마치 발정 난 작은 동물처럼 ',
              me.get_colored_name(),
              '의 몸에 비벼댔다.',
            ],
          ],
          [
            [
              call_me,
              '! 가기 전에 ',
              self_call,
              '를 한 번 더 꽉 안아줄래? 음…… 좀 더 세게 안아줘도 괜찮아!',
            ],
            [
              '헤어지기 전의 작은 소망을 말하며, ',
              me.get_colored_name(),
              '의 포옹에 얼굴이 빨개진 ',
              callname,
              '는 황홀한 표정을 지었다.',
            ],
          ],
        );
      }
      if (love >= 75) {
        talk_arr.push(
          [
            ['어라? 벌써 시간이…… 헤헤~ 오늘 정말 즐거웠어! 다음에도 우리 계속 같이 있자!'],
            [
              me.get_colored_name(),
              '을(를) 연인으로서 꽉 안아준 뒤, ',
              callname,
              '는 귀를 쫑긋거리며 만족스럽게 뛰어갔다.',
            ],
          ],
          [
            [
              '에에…… 조금만 더 있으면 안 돼? 하지만 확실히 ',
              call_me,
              '에게 폐를 끼치면 안 되니까. 다음에 또 봐!',
            ],
            [
              '아쉬운 듯 헤어지기 전의 애정 행각을 마무리하며, ',
              callname,
              '는 자꾸만 뒤를 돌아보며 떠나갔다.',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            ['이제 가는 거야? 그렇다면…… 쪽! 헤헤~ 이건 작별의 키스야!'],
            [
              '꼬리를 흔들며 떠나기 전 ',
              me.get_colored_name(),
              '의 뺨에 살짝 입을 맞춘 뒤, ',
              callname,
              '는 작은 새처럼 웃으며 달려갔다.',
            ],
          ],
          [
            [
              '헤헤~ ',
              call_me,
              ', 이제 가는 거야? 가는 길 조심해! 돌아가면 푹 쉬고, 밤늦게 나가서 바람피우면 안 된다?',
            ],
            [
              '떠나기 전 묘한 의미가 담긴 ',
              callname,
              '의 미소를 보며, ',
              me.get_colored_name(),
              '은(는) 어쩐지 등골이 오싹해지는 기분이 들었다.',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            [
              '만약 ',
              call_me,
              '가 지금 손을 놓으면, ',
              self_call,
              '는 휙 하고 어디론가 사라져버릴지도 몰라…… 농담이야! 난 이제 어린애가 아니니까! 하지만 다음에 같이 있을 때도 ',
              self_call,
              '의 손을 꼭 잡아줘야 해!',
            ],
            [
              '떠나기 전 담당의 농담을 되새기며, 어째서인지 ',
              me.get_colored_name(),
              '의 기분은 조금 초조해졌다……',
            ],
          ],
          [
            [
              '쪽~ 하아…… 응! 이번엔 여기까지만 할게, ',
              call_me,
              ', 더 하고 싶으면 다음에 또 하자! 걱정 마, 설령 ',
              call_me,
              '가 오지 않더라도 ',
              self_call,
              '는 영원히 ',
              call_me,
              '를 기다릴 테니까……',
            ],
            [
              '연인의 목에 헤어지기 전의 키스 마크를 남기며, 작은 ',
              urara.get_uma_sex_title(),
              '의 맑은 목소리가 탁하고 요염하게 ',
              me.get_colored_name(),
              '의 귓가에 맴돌았다.',
            ],
          ],
        );
      }
      const temp = get_random_entry(talk_arr);
      urara.say(temp[0]);
      era.print(temp[1]);
    } else {
      const talk_arr = [
        [
          ['이제 가야 해? 그럼…… 다음에 또 봐, ', call_me, '!'],
          [
            '무슨 말을 할지 고민하던 ',
            callname,
            '는 결국 ',
            me.get_colored_name(),
            '에게 미소를 지어주기로 했다.',
          ],
        ],
        [
          ['벌써 시간이 이렇게 됐네, 이제 돌아가야 해, ', call_me, '!'],
          [
            '웃으며 ',
            me.get_colored_name(),
            '에게 알려준 뒤, 작은 ',
            urara.get_uma_sex_title(),
            '는 덤덤하게 기숙사로 향했다.',
          ],
        ],
        [
          [self_call, '를 데려다주는 거야? 하지만 난 괜찮아, 고마워 ', call_me, '!'],
          [
            '손을 휘저으며 ',
            me.get_colored_name(),
            '의 제안을 거절한 뒤, ',
            callname,
            '는 결국 혼자 떠나갔다.',
          ],
        ],
      ];
      if (love > 0) {
        talk_arr.push(
          [
            [
              '오늘도 시간이 참 빨리 갔네, ',
              call_me,
              '도 조금은 다정해진 것 같아…… 아무것도 아니야! 잘 가, ',
              call_me,
              '!',
            ],
            [
              '알 수 없는 말을 내뱉으며, ',
              callname,
              '는 ',
              me.get_colored_name(),
              '과(와) 작별한 뒤 천천히 떠나갔다.',
            ],
          ],
          [
            ['잘 모르겠지만, 왠지 가기 싫어지는 기분이야. 하지만 그러면 안 되겠지……'],
            [
              '귀를 쫑긋거리며 혼잣말을 한 뒤, ',
              callname,
              '는 ',
              me.get_colored_name(),
              '에게 제대로 작별 인사를 하고 떠나갔다.',
            ],
          ],
        );
      }
      if (love >= 25) {
        talk_arr.push(
          [
            [
              '다들 걱정할까 봐? 하지만 다들 ',
              call_me,
              '와 ',
              self_call,
              '가 같이 있으라고 했으니까 걱정 안 할걸!',
            ],
            [
              '아쉬운 기색이 역력했으나 작은 ',
              urara.get_uma_sex_title(),
              '는 말 잘 듣고 떠나갔다. 하지만 어쩐지 ',
              me.get_colored_name(),
              '이(가) 담당에게 원망을 들은 기분이었다.',
            ],
          ],
          [
            [
              '괜찮아, ',
              self_call,
              '는 딴 길로 안 샐 거야! 하지만 ',
              call_me,
              '가 원한다면…… 그럼 같이 가자!',
            ],
            [
              '우물쭈물하던 작은 ',
              urara.get_uma_sex_title(),
              '는 결국 ',
              me.get_colored_name(),
              '의 요청을 받아들였고, 나란히 걷는 분위기도 조금씩 묘해지기 시작했다.',
            ],
          ],
        );
      }
      if (love >= 50) {
        talk_arr.push(
          [
            ['미안해…… 저기, ', self_call, '에게 시간을 조금만 더 줘……'],
            [
              '헤어지기 전 계속해서 ',
              me.get_colored_name(),
              '의 몸에 비벼대며, ',
              callname,
              '는 정욕으로 인한 떨림을 억누르려 애썼다.',
            ],
          ],
          [
            ['분명 그런 사람인데, ', call_me, '의 향기가…… 앗! 미안해……'],
            [
              '마침내 넋을 잃었던 황홀경에서 깨어난 ',
              callname,
              '는 수줍게 ',
              me.get_colored_name(),
              '의 옷자락을 놓아주었다.',
            ],
          ],
        );
      }
      if (love >= 75) {
        talk_arr.push(
          [
            ['', call_me, '! 가기 전에 한 번만 더 안아줘…… 안 돼? 그럼…… 최대한 살살 해줘야 해?'],
            [
              '닿을 듯 말 듯 한 접촉에서 다시금 꽉 끌어안기까지, 작별 절차는 다시 한참 동안이나 이어졌다.',
            ],
          ],
          [
            ['벌써 시간이 이렇게 됐네, 오늘 정말 즐거웠어. 하지만 ', call_me, '……'],
            [
              '잠시 망설이다 ',
              me.get_colored_name(),
              '을(를) 연인으로서 꽉 안아준 뒤, ',
              callname,
              '는 아쉬운 듯 떠나갔다.',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            [
              '……쪽~ 이건 특별한 작별 인사야! 그러니까 ',
              call_me,
              ', 다음에 만날 땐 좀 더 멋진 모습 보여줘야 해, 알았지?',
            ],
            [
              '앵두 같은 입술로 연인의 뺨을 살짝 터치하며, 작은 ',
              urara.get_uma_sex_title(),
              '는 수줍게 귀를 쫑긋거리며 연인을 나직이 응원했다.',
            ],
          ],
          [
            [
              call_me,
              ', 밤에 어른들의 활동을 하러 갈 때도 조심해야 해! 안 간다고? 그래도 괜찮아……',
            ],
            [
              '헤어지기 전의 대화에서 ',
              callname,
              '의 의심스러우면서도 포용하는 듯한 눈빛이 ',
              me.get_colored_name(),
              '을(를) 어쩐지 불편하게 만들었다.',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            [
              '이제 가는 거야? 하지만 지금 손을 놓으면 ',
              call_me,
              '는 다른 사람이랑 꽁냥거리러 갈지도 모르겠네? 농담이야!',
            ],
            [
              me.get_colored_name(),
              '은(는) ',
              callname,
              '의 배웅을 받으며 떠나갔으나, 등 뒤에서 느껴지는 담당의 시선이 어쩐지 ',
              me.get_colored_name(),
              '의 등골을 오싹하게 만들었다……',
            ],
          ],
          [
            [
              '쪽~ 쮸읍~ 하아…… 헤헤, 좋아? 오늘은 여기까지만 하자. 다음에 편할 때 ',
              self_call,
              '가 ',
              call_me,
              '에게 말해줄게!',
            ],
            [
              '헤어지기 전 연인의 몸에 자신의 흔적을 강하게 남기며, 작은 ',
              urara.get_uma_sex_title(),
              '는 맑은 목소리로 탁한 욕망을 이야기했다.',
            ],
          ],
        );
      }
      const temp = get_random_entry(talk_arr);
      urara.say(temp[0]);
      era.print(temp[1]);
    }
  } else if (awake === 1) {
    const talk_arr = [];
    if (
      era.get('status:52:우마뾰이S') ||
      era.get('status:52:우마뾰이Z') ||
      era.get('status:52:슈퍼우마뾰이Z') ||
      era.get('status:52:펄롱K') ||
      era.get('status:52:펄롱P') ||
      era.get('base:52:성욕') >= lust_border.absent_mind
    ) {
      talk_arr.push(
        [
          '으으…… 음……',
          [
            me.get_colored_name(),
            '이(가) ',
            urara.get_colored_name(),
            '를 데려다주는 길에도, 잠결의 ',
            callname,
            '는 줄곧 불안한 듯 신음 소리를 내뱉었다.',
          ],
        ],
        [
          '……',
          [
            '작은 몸을 달뜨게 한 채 ',
            me.get_colored_name(),
            '의 품에 웅크린 ',
            callname,
            '는 돌아가는 길에도 여전히 분홍빛 꿈속에 빠져 있었다.',
          ],
        ],
      );
    } else {
      talk_arr.push(
        [
          '후에에……',
          [
            '숨소리가 점차 평온해지며, ',
            callname,
            '는 ',
            me.get_colored_name(),
            '의 곁에서 깊은 잠에 빠져들었다.',
          ],
        ],
        [
          '……',
          [
            '아마도 몹시 피곤했던 탓인지, ',
            me.get_colored_name(),
            '의 품 안에서 ',
            callname,
            '는 조용히 잠들었다.',
          ],
        ],
        [
          '에헤헤……',
          [
            '돌아가는 길 내내 잠꼬대를 하는 ',
            me.get_colored_name(),
            '의 등 위에서 ',
            callname,
            '는 대체 무슨 꿈을 꾸고 있는 걸까?',
          ],
        ],
      );
    }
    const temp = get_random_entry(talk_arr);
    urara.say(temp[0]);
    era.print(temp[1]);
  } else {
    const talk_arr = [
      [
        [
          me.get_colored_name(),
          '이(가) 이미 잠든 것을 확인한 뒤, ',
          callname,
          '는 어떤 방법을 써서인지 ',
          me.get_colored_name(),
          '을(를) 거처까지 몰래 옮겨놓은 듯했다.',
        ],
      ],
      [
        [
          '잠에서 깨어났을 때 ',
          me.get_colored_name(),
          '은(는) 자신이 이미 거처에 돌아와 있음을 깨달았고, 귓가에는 여전히 ',
          callname,
          '의 작별 인사가 맴도는 듯했다.',
        ],
      ],
      [
        '눈을 뜨니 익숙한 천장이 보였고, 역시나 침실로 돌아와 있었다.',
        `분명 담당에게 폐를 끼치긴 했지만, 그 작은 소녀가 대체 어떻게 혼자서 성인을 데려다준 것일까……`,
      ],
    ];
    if (love >= 50) {
      talk_arr.push([
        [
          me.get_colored_name(),
          '을(를) 거처까지 데려다준 뒤, ',
          callname,
          '는 세심하게 ',
          me.get_colored_name(),
          '의 방을 정리까지 해준 듯 보였다.',
        ],
        [
          '다만 어째서인지 ',
          me.get_colored_name(),
          '은(는) 빨래 바구니 속의 옷들이 누군가의 손을 탄 듯한 기분을 지울 수 없었다……',
        ],
      ]);
    }
    if (love >= 75) {
      talk_arr.push([
        [
          '비몽사몽 하는 찰나, 아쉬움이 가득 담긴 입맞춤이 ',
          me.get_colored_name(),
          '의 뺨에 닿았다.',
        ],
        ['잠에서 깨어났을 때 ', callname, '는 이미 곁에 없었지만, 뺨에 남은 입맞춤의 감촉만은 여전히 선명했다.'],
      ]);
    }
    if (love === 100) {
      talk_arr.push([
        [
          '다시 눈을 떴을 때, ',
          me.get_colored_name(),
          '은(는) 자신이 이미 거처로 돌아와 있음을 확인했다.',
        ],
        [
          '곁에는 여전히 ',
          callname,
          '의 온기가 남아있어, 마치 이곳에서 ',
          urara.sex,
          '가 ',
          me.get_colored_name(),
          '을(를) 한참 동안 지켜봐 준 것만 같았다.',
        ],
      ]);
    }
    get_random_entry(talk_arr).forEach((e) => era.print(e));
  }
};