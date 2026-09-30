/**
 * @file 마루젠스키 - 애정
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedLove {
  async 49(zensky, me, callname) {
    await era.printAndWait(`최근 들어 어쩐지 뭔가가 부족한 기분이야.`);
    await era.printAndWait(
      `${zensky.name}는 요즘 고민에 빠져 있다. 평소처럼 귀여운 후배들의 성장을 지켜보며, ${
        zensky.sex
      }들이 자신을 뒤쫓아 오기를 기대하고 있지만.`,
    );
    await era.printAndWait(
      `${callname}과(와) 함께 훈련 성과를 확인하기도 했지만, 역시 어딘가 기운이 없어 보인다.`,
    );
    await era.printAndWait(
      `그 모습은 트레이너의 눈을 피할 수 없었다. 원인은 알 수 없지만 다음 레이스까지는 시간이 있으니, 트레이너로서 상황을 살펴보기로 했다.`,
    );
    await era.printAndWait(
      `평소 후배들을 잘 돌봐준 덕분인지, ${
        zensky.name
      }가 최근 곤란해하고 있다는 소문이 ${zensky.get_uma_sex_title()}들의 작은 커뮤니티 사이에서 조용히 퍼졌다.`,
    );
    await era.printAndWait(
      `시간이 흐르면서 ${sys_get_colored_callname(this.id, 301)} 조차 몇 번이나 트레이너에게 ${zensky.name}의 안부를 물어올 정도였다.`,
    );
    await era.printAndWait(
      `그러던 어느 날, 셀프 서비스 식당에서 이야기를 나누던 중, ${sys_get_colored_callname(this.id, 24)}이 ${zensky.name}에게 연애에 관한 화제를 꺼냈다.`,
    );
    await zensky.say_and_wait(`……그랬던 거구나. 고마워, 마야노.`);
    era.println();
    await era.printAndWait(`${zensky.name}는 트레이너를 향한 자신의 호감을 깨달았다.`);
    era.printButton(`${callname}울 불러내자`, 1);
    era.drawLine();
    await era.printAndWait(
      `어느 이른 아침, 트레이닝실에 들어와 신발장을 열었을 때 연한 하늘색 편지봉투를 발견했다.`,
    );
    await era.printAndWait(
      `살며시 편지봉투를 집어 들었다. 감촉이 꽤 좋았고, 완전히 밀봉되지 않은 채 접힌 부분이 살짝 벌어져 있었다.`,
    );
    await era.printAndWait(`봉투를 열어보니, 그 안에는 단 한 줄의 문장만이 적혀 있었다.`);
    await era.printAndWait(
      `${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}, 옥상에서 기다릴게～`,
    );
    await era.printAndWait(
      `정오, 그러니까 11시에서 1시 사이를 말하는 걸까? 어쨌든 일단 이 편지를 챙겨두자.`,
    );
    await era.printAndWait(`오전 11시 정각, 당신은 트레센 학원의 옥상에 도착했다.`);
    await era.printAndWait(`햇살이 옥상 전체를 가득 메우고, 부드러운 산들바람이 머리카락을 스치고 지나간다.`);
    await era.printAndWait(
      `당신은 자신을 옥상으로 불러낸 정체불명의 인물을 찾기 시작했다. 그때 갑자기 옥상으로 통하는 문이 닫혔다.`,
    );
    era.printButton(`「설마 카페가 말했던 영적 현상을 만난 건 아니겠지?」`, 1);
    await era.printAndWait(`당신은 떨리는 손으로 문고리를 잡고 온 힘을 다해 열었다.`);
    await era.printAndWait(`예상외로 문은 쉽게 열렸다.`);
    await era.printAndWait(`옥상으로 이어지는 계단은 평소와 다름없이 고요했다.`);
    era.printButton(`「도대체 누가 장난을 치는 거야?」`, 1);
    await era.printAndWait(
      `단 몇 초 만에 문을 닫을 수 있는 존재라면, ${zensky.get_uma_sex_title()}밖에 없지 않을까?`,
    );
    await era.printAndWait(
      `담당 트레이너를 찾아왔지만 부끄러움이 많은 내성적인 ${zensky.get_uma_sex_title()}라도 만난 걸까?`,
    );
    await era.printAndWait(`그리운 향기가 풍겨오며, 여름의 공기가 떠올랐다.`);
    await era.printAndWait(
      `이 향기의 주인이 근처에 있는 것 같아, 당신은 유일한 단서인 향기를 따라 주변을 뒤지기 시작했다.`,
    );
    await era.printAndWait(
      `하지만 안타깝게도 옥상을 구석구석 훑어보았음에도 향기의 주인은 보이지 않았다.`,
    );
    era.printButton(`「설마?!」`, 1);
    await era.printAndWait(
      `옥상 물탱크 위로 시선을 돌리자, ${zensky.get_uma_sex_title()} 같은 흐릿한 실루엣이 물탱크 위에 앉아 있는 것이 보였다.`,
    );
    await era.printAndWait(
      `다시 한번 옥상 물탱크 위를 바라보자, 한 ${zensky.get_uma_sex_title()}가 물탱크 위에 앉아 있었다.`,
    );
    await era.printAndWait(
      `하얀 원피스를 입고, 부드러운 표정으로 운동장에 있는 ${zensky.get_uma_sex_title()}들을 바라보고 있다.`,
    );
    era.printButton(`${zensky.name}?`, 1);
    await zensky.say_and_wait(`${callname}, 드디어 날 찾아낸 거니?`);
    era.printButton(`「그렇게 다리를 꼬고 앉으면 치마 속 팬티가 다 보인다구?」`, 1);
    await zensky.say_and_wait(`꺅! 변태! 치한! 에로 트레이너!`);
    await era.printAndWait(`${zensky.name}는 당황하며 치맛자락을 가리고 물탱크에서 옥상 바닥으로 뛰어내렸다.`);
    await zensky.say_and_wait(
      `조금 더 ${zensky.get_bigger_sibling_sex_title()}답게 행동하고 싶었는데, ${callname}이 이렇게 야할 줄은 몰랐어.`,
    );
    era.printButton(`「날씨도 좋은데 여기서 점심이나 먹을까?」`, 1);
    await zensky.say_and_wait(
      `음～ 좋은 생각이지만, 그전에 먼저 해야 할 더 중요한 일이 있어.`,
    );
    await zensky.say_and_wait(`……${callname}, 나랑 데이트해주지 않을래?`);
    era.printButton(`「데이트할 때 조금 더 상냥하게 대해준다면 찬성할게.」`, 1);
    await zensky.say_and_wait(`응! 그럼 약속한 거다!`);
    await era.printAndWait(`${zensky.name}는 얼굴이 새빨개진 채 당신을 바라보았다.`);
    await era.printAndWait(`이 새로운 감정은 땅속에 묻힌 씨앗처럼 순조롭게 싹을 틔울 것이다.`);
    era.println();
    await sys_love_uma_in_event(4);
  }

  async 74(zensky, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      begin_and_init_ero(4);
      await zensky.say_and_wait(`${callname}, 이번엔 수영장에서 데이트해보는 건 어때?`);
      await era.printAndWait(
        `${zensky.name}는 소파에 누워 만화책을 보다가, 다음 훈련 계획을 짜고 있는 당신에게 제안했다.`,
      );
      await era.printAndWait(
        `옥상에서 데이트 약속을 한 뒤로, 두 사람의 관계는 더욱 친밀해졌다.`,
      );
      await era.printAndWait(
        `일상적인 대화를 나누거나 예정된 계획을 수행하는 동안, 그녀가 당신을 더욱 신경 쓰고 있다는 느낌을 은연중에 받았다.`,
      );
      era.printButton(`「왜 하필 수영장이야?」`, 1);
      await era.input();
      await zensky.say_and_wait(
        `순정 만화에 그렇게 쓰여 있었거든. 주인공이 입학한 뒤 우연히 자신에게 호감을 느끼는 멋진 트레이너를 만나는 거야.`,
      );
      await zensky.say_and_wait(
        `그런데 같은 팀의 명문가 아가씨도 트레이너를 좋아하고 있었지. 하지만 트레이너는 주인공에게 더 관심을 갖는 것 같았어.`,
      );
      await zensky.say_and_wait(
        `소꿉친구이자 약혼까지 한 자존심 때문에, 명문가 아가씨는 주인공에게 사츠키상에서 승부를 가리자고 도전장을 내밀어.`,
      );
      await zensky.say_and_wait(
        `명문가의 압도적인 실력 때문에, 주인공은 트레이너의 격려를 받으며 수영장에서 특훈을 하게 돼.`,
      );
      await zensky.say_and_wait(
        `서로 호감을 느끼던 두 사람은 수영장에서 가슴 뛰는 사고가 발생하고! 결국 수영장 한가운데서 키스를 하게 된다는 내용이야.`,
      );
      await era.printAndWait(`그녀는 소파에서 일어나 앉아 손에 든 만화책을 가리켰다.`);
      await zensky.say_and_wait(`${callname}은 이런 거 낭만적이라고 생각 안 하니?`);
      era.printButton(`「듣고 보니 꽤 괜찮은 것 같은데.」`, 1);
      await zensky.say_and_wait(`그치～? 그러니까 내일은 수영장에서 데이트하는 거야.`);
      era.printButton(`「수영장은 너무 이른 시간에는 문을 안 열지 않아?」`, 1);
      await zensky.say_and_wait([
        '나중에 ',
        sys_get_colored_callname(this.id, 301),
        ' 한테 말해둘 테니까 그건 걱정 마.',
      ]);
      era.printButton(
        `데이트 시간이 너무 길어지면 다른 ${zensky.get_uma_sex_title()}들이 오지 않을까?`,
        1,
      );
      await zensky.say_and_wait(
        `이른 아침에는 다들 아침 연습 중이고, 내일 수영 수업은 10시 전까지는 없거든.`,
      );
      await zensky.say_and_wait(`${callname}, 더 궁금한 거 있어?`);
      era.printButton(`「일단은 없어.」`, 1);
      await zensky.say_and_wait(
        `그럼 결정된 거네! 나 같은 상냥한 ${zensky.get_bigger_sibling_sex_title()}와 데이트한다고 너무 설레서 밤잠 설치면 안 돼♪`,
      );
      await era.printAndWait(
        `${zensky.name}는 당신의 머리를 쓰다듬고는 트레이닝실을 나갔다. 당신은 내일의 데이트가 무척 기대되기 시작했다.`,
      );
      end_ero_and_train();
      await sys_love_uma_in_event(4);
      add_event(event_hooks.back_school, event_object);
    } else if (stage === event_hooks.back_school) {
      // 마루젠스키가 수영장에서 트레이너와 약속했다
      begin_and_init_ero(4);
      await me.say_and_wait('물이 아직 차갑네.');
      await era.printAndWait(`당신은 풀사이드에 한쪽 무릎을 꿇고 앉아 손을 뻗었다. 닿은 물이 서늘했다.`);
      await era.printAndWait(
        `오전 6시. 성급한 태양이 온 지면을 햇살로 비추고 있지만, 이른 아침의 수영장에는 생기가 없었다. 오직 당신과 친구 이상 연인 미만의 관계인 ${zensky.name} 둘뿐이었다.`,
      );
      await era.printAndWait(
        `두 사람의 거리를 좁히려 노력해 왔지만, 여러 가지 이유로 좀처럼 이 감정이 뜨거워지지 못했다는 느낌을 받았다.`,
      );
      await zensky.say_and_wait(`${callname}, 여기 좀 봐⭐`);
      await era.printAndWait(
        `${zensky.name}가 수영복으로 갈아입고 당신에게 손을 흔든 뒤, 팔다리를 움직이며 준비 운동을 한다.`,
      );
      await era.printAndWait(
        `매끄러운 곡선이 돋보이는 수영복이 푸른 수면 위로 은빛 윤곽을 반사하고 있다.`,
      );
      await zensky.say_and_wait(`음. 이렇게 조용한 분위기도 나쁘지 않네.`);
      await era.printAndWait(
        `얼마 전, ${zensky.name}가 옥상에서 만나자고 한 뒤로 겨우 두 사람의 관계가 확정되었다.`,
      );
      await zensky.say_and_wait(
        `드디어 둘만의 공간을 찾았네. 이렇게 이른 시간이라면 스페 일행은 아직 자고 있겠지?`,
      );
      await zensky.say_and_wait(`${callname}♪ 내려와서 같이 수영하지 않을래?`);
      await era.printAndWait(`${zensky.name}가 수영장 한가운데서 당신을 부르고 있다.`);
      await era.printAndWait(
        `평범한 인간에게는 수온이 좀 미묘한 수준이었지만, 인간보다 체온이 약간 높은 ${zensky.get_uma_sex_title()}에게는 딱 적당한 걸지도 모르겠다.`,
      );
      await zensky.say_and_wait(`${callname}! 얼른 내려와서 같이 수영하자!`);
      await era.printAndWait(`${zensky.name}의 초대에 당신의 잡념이 깨졌다.`);
      era.printButton(`「여기서 보는 게 눈호강도 되고 좋은데.」`, 1);
      era.printButton(`갑자기 할 일이 생각났어.`, 2);
      const ret = await era.input();
      await era.clear(2);
      if (ret === 1) {
        await zensky.say_and_wait(
          `${callname}은 정말 솔직하다니까～ 하지만 그런 솔직한 ${callname}도 좋아해♪`,
        );
        await era.printAndWait(`${zensky.name}는 당신 쪽으로 손키스를 날린 뒤 물속으로 뛰어들었다.`);
        await era.printAndWait(`투명한 물속에서 그녀의 몸이 마치 물고기처럼 즐겁게 헤엄친다.`);
        era.printButton(`${zensky.name}는 수영을 정말 잘하네.`, 1);
        await era.printAndWait(
          `그녀가 물 위로 올라와 다음 목표로 나아가려던 찰나, 갑자기 그녀의 몸이 부자연스럽게 굳어졌다.`,
        );
        era.printButton(`「설마 쥐가 난 거야?」`, 1);
        await era.printAndWait(
          `더 고민할 겨를이 없는 위급한 상황이었다. 당신은 즉시 수영장으로 뛰어들어 필사적으로 발버둥 치며 고개를 내미는 그녀를 향해 헤엄쳤다.`,
        );
        era.printButton(`「조금만 참아, 금방 갈게!」`, 1);
        await era.printAndWait(
          `당신도 수영을 아주 잘하는 편은 아니었지만, 전력을 다해 그녀에게 다가갔다.`,
        );
        era.printButton(`「!?」`, 1);
        await zensky.say_and_wait(`${callname}, 괜찮아.`);
        await era.printAndWait(`그녀에게 속은 모양이다.`);
        await zensky.say_and_wait(`……미안해. 내가 조금 심했나?`);
        await era.printAndWait(`이런 농담은 너무 심하잖아.`);
        await zensky.say_and_wait(
          `정말 미안. 그래도 덕분에 ${
            callname
          }이 내려왔잖아. 그리고 이 시선에서 보니까 분위기도 꽤 괜찮지?`,
        );
        await era.printAndWait(
          `${zensky.name}의 무사한 모습을 보자 겨우 안심이 되었다. 분위기는 어쨌든, 이런 고요한 느낌은 확실히 드문 일이다.`,
        );
        await era.printAndWait(
          `조금 전의 소동으로 격렬하게 출렁이던 수면도 이제는 평온을 되찾았다.`,
        );
        era.printButton(`「춥다.」`, 1);
        await era.printAndWait(
          `${zensky.get_uma_sex_title()}에게는 수온이 딱 좋겠지만, 평범한 인간에게는 역시 쌀쌀했다.`,
        );
        await zensky.say_and_wait(
          `그럼 이 ${zensky.get_bigger_sibling_sex_title()}가 따뜻하게 해줄까?`,
        );
        era.printButton(`「됐거든.」`, 1);
        await era.printAndWait(
          `${zensky.name}는 뾰로통해 있는 당신을 막무가내로 껴안았다. "사실 다 얘 때문이잖아"라고 생각하면서도,`,
        );
        await era.printAndWait(
          `그녀의 체온을 느끼자 불만은 눈 녹듯 사라져 버렸다.`,
        );
        await zensky.say_and_wait(
          `이렇게 가슴 설레는 분위기인데, 뭐 할 생각 없어?`,
        );
        await era.printAndWait(
          `${zensky.name}의 암시는 이미 충분히 명확했다. 당신도 그녀의 목을 감싸 안으며 천천히 얼굴을 가까이했다.`,
        );
        await zensky.say_and_wait(`만화 속 장면이랑 똑같네♪`);
        await era.printAndWait(
          `당신은 그녀의 입술 사이로 혀를 밀어 넣었다. 그녀는 별다른 저항 없이 당신의 서툰 불만을 상냥하게 받아주었다.`,
        );
        await era.printAndWait(
          `수영장의 물은 여전히 차가웠지만, 두 사람의 주변은 마치 봄날처럼 따스했다.`,
        );
        await zensky.say_and_wait(
          `우리 집 옆에 오랫동안 비워둔 빈 방이 하나 있는데, ${callname} 어때?`,
        );
        await era.printAndWait(
          `입술을 떼고 수영장에서 나온 뒤, 마른 수건으로 몸을 닦고 있을 때 ${zensky.name}이(가) 갑작스러운 제안을 해왔다.`,
        );
        era.printButton(`「그럼, 잘 부탁할게.」`, 1);
        await era.printAndWait(
          `나야말로 잘 부탁해. ${callname}, 오늘 밤에 바로 짐 옮겨와♪`,
        );
        await era.printAndWait(`${zensky.name}과(와)의 동거 생활이 시작되었다.`);
        end_ero_and_train();
        await sys_love_uma_in_event(4);
      } else {
        await zensky.say_and_wait(`${callname} 미워! 그럼 나 혼자 먼저 헤엄칠 거야.`);
        await era.printAndWait(`따르릉!!!`);
        await era.printAndWait(`당신은 알람 소리에 잠에서 깼다. 이상한 꿈을 꾼 것 같다.`);
        era.printButton(`「오늘 훈련 계획이나 준비하자.」`, 1);
        await era.printAndWait(`당신은 하품을 하며 방금 꾼 기묘한 꿈을 잊으려 애썼다.`);
        await zensky.say_as_unknown_and_wait(`자꾸 망설이다가는 결국 후회하게 될 거야.`);
        await era.printAndWait(`마음속 깊은 곳에서 또 다른 목소리가 당신에게 속삭였다.`);
        era.set('cflag:4:호감거절', 49);
      }
    }
  }

  async 89(zensky, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await zensky.say_and_wait(
        `네가 나에게 해준 "바람을 쫓는 ${zensky.name}는 정말 즐거워 보여"라는 말을 좋아해.`,
      );
      await zensky.say_and_wait(
        `정말이지, 나보다 나이도 몇 살이나 많으면서 말이야. 하는 행동은 꼭 고등학생 같다니까.`,
      );
      await zensky.say_and_wait(
        `……하지만, 바로 그런 점 때문에 ${callname}이 유독 귀여운 거겠지.`,
      );
      await zensky.say_and_wait(
        `처음 만났을 때, 나는 널 나보다 몇 살 어린 ${me.get_smaller_sibling_sex_title()}라고 생각했어.`,
      );
      await zensky.say_and_wait(
        `그래서 무의식중에 널 품에 안고 머리를 쓰다듬어 줬던 건데, 얼굴이 새빨개진 걸 보고서야 손을 뗐었지.`,
      );
      await zensky.say_and_wait(`정말 미안하게 생각해. 그래도 사과는 안 할 거지만, 흥～`);
      await zensky.say_and_wait(
        `네가 내가 달릴 때 짓는 미소에 대해 신이 나서 이야기할 때, 난 정말 기뻤어.`,
      );
      await zensky.say_and_wait([
        '너랑 계약을 맺었던 그날 밤, 나는 바로 ',
        sys_get_colored_callname(this.id, 301),
        ' 씨를 불러서 근처 바에서 축하 파티를 했거든.',
      ]);
      await zensky.say_and_wait(`내가 잔뜩 들떠서 묘사하는 네 모습을 다 듣고 나더니,`);
      await zensky.say_and_wait(
        `'정말 마음이 잘 맞는 트레이너를 만난 모양이네요'라며 술잔을 흔들며 취한 듯 맞장구쳐 주더라.`,
      );
      await zensky.say_and_wait(
        `'레이스의 영광보다는 바람을 즐기는 즐거움이 더 좋아'라고 말은 했었지만,`,
      );
      await zensky.say_and_wait(
        `그래도 마음 한구석에선 네가 내 뒷모습을 따라잡아 주길 내심 기대하고 있었을지도 몰라.`,
      );
      await zensky.say_and_wait(`첫 훈련 때, 넌 정말 긴장한 것처럼 보였어.`);
      await zensky.say_and_wait(`트레이너 정장까지 차려입고 나랑 악수도 했지.`);
      await zensky.say_and_wait(`……위에서 두 번째 단추는 잘못 채웠었지만 말이야.`);
      await zensky.say_and_wait(
        `그걸 지적당하자 당황해서 단추를 풀며 얼굴을 붉히던 모습.`,
      );
      await zensky.say_and_wait(
        `마치 나보다 어린 ${me.get_smaller_sibling_sex_title()}이 내 앞에서 "${zensky.get_bigger_sibling_sex_title()}, 나 이제 어른이야"라고 말하는 것 같았어.`,
      );
      await zensky.say_and_wait(
        `그렇게 귀여운 ${me.get_smaller_sibling_sex_title()}을 머리 쓰다듬어 주며 격려해주지 않으면 손해인걸.`,
      );
      await zensky.say_and_wait(
        `어머, 또 무의식중에 널 ${me.get_smaller_sibling_sex_title()} 취급해 버렸네.`,
      );
      await zensky.say_and_wait(`그 뒤로 우리는 목표를 하나하나 달성해 나갔지.`);
      await zensky.say_and_wait(`어느새 넌 우리 집 옆방에 살게 됐고.`);
      await zensky.say_and_wait(`매일 아침 널 깨우는 게 나의 일과가 됐어.`);
      await zensky.say_and_wait(
        `네가 으음... 하고 대답만 두 번 하더니 다시 몸을 돌려 자려고 할 때마다,`,
      );
      await zensky.say_and_wait(`"자, 이제 일어날 시간이야."`);
      await zensky.say_and_wait(`네 항의는 무시하고 이불이랑 너를 강제로 떼어놓지.`);
      await zensky.say_and_wait(`네가 하품하며 오늘 계획을 시작하는 모습을 볼 때면,`);
      await zensky.say_and_wait(`마치 산들바람이 내 마음을 스치고 지나가는 것 같아.`);
      await zensky.say_and_wait(`매일매일이 화창한 날씨지.`);
      await zensky.say_and_wait(`훈련할 때도 마찬가지야.`);
      await zensky.say_and_wait(`매번 내 달리는 모습에 넋을 잃곤 하잖아?`);
      await zensky.say_and_wait(
        `긴장하며 매번 훈련 시간을 기록하고, 한계에 하나씩 도전하던 모습.`,
      );
      await zensky.say_and_wait(`내가 이전 기록을 깰 때마다 너는 아이처럼 기뻐했지.`);
      await zensky.say_and_wait(`그 어린애 같은 모습…… 정말 품에 꽉 안고 쓰다듬어 주고 싶더라.`);
      await zensky.say_and_wait(`물론 바람이 멈출 때도 있었지.`);
      await zensky.say_and_wait(
        `훈련 실수로 부상을 입었을 때, 네 부축을 받으며 보건실로 향하던 때.`,
      );
      await zensky.say_and_wait(
        `내 옆에서 학원의 재미있는 일들을 이야기하며 고통을 잊게 해주려 노력하던 네 모습.`,
      );
      await zensky.say_and_wait(
        `지루한 시간은 마치 카운타크 뒤로 사라지는 자동차들처럼 순식간에 사라져 버렸어.`,
      );
      await zensky.say_and_wait(
        `신년 인사, 팬 대감사제 때의 축복, 함께 본 노을, 크리스마스의 약속.`,
      );
      await zensky.say_and_wait(
        `보이지 않는 리본처럼, 그 기억들이 나와 너를 단단히 묶어주었어.`,
      );
      await zensky.say_and_wait(
        `어느덧 ${
          callname
        }은(는) 돌봐줘야 할 ${me.get_smaller_sibling_sex_title()} 군에서 믿음직한 성인이 되었네.`,
      );
      await zensky.say_and_wait(`보석처럼 반짝이는 이 기억들을 평생 소중히 간직할게.`);
      await zensky.say_and_wait(`……슬슬 마음속에 묻어둔 이 감정을 마주해야겠지.`);
      await zensky.say_and_wait(
        `나도 ${zensky.get_bigger_sibling_sex_title()}로서의 자존심이 있고, 후배들에게 최신 유행과 ${zensky.get_bigger_sibling_sex_title()}로서의 지혜를 나눠주고 있지만.`,
      );
      await zensky.say_and_wait(`내가 제일 좋아하는 ${callname} 앞에서는, 무리!`);
      await zensky.say_and_wait(
        `유행은 언제나 변하지만, 이렇게 귀여운 트레이너는 단 한 명뿐이니까.`,
      );
      await zensky.say_and_wait(`그럼, 슬슬 ${callname}을 불러내 볼까?`);
      await zensky.say_and_wait(
        `${callname}이(가) 날 좋아하든 아니든, 난 영원히 널 사랑할 거야.`,
      );
      add_event(event_hooks.week_start, event_object);
    } else if (stage === event_hooks.week_start) {
      await era.printAndWait(`당신과 ${zensky.name}이(가) 동거를 시작한 지도 꽤 시간이 흘렀다.`);
      await era.printAndWait(`일어나고, 밥을 먹고, 함께 등원한다.`);
      await era.printAndWait(
        `집을 나서기 전 서로의 옷차림에 흐트러짐은 없는지 확인하고, 차를 타고 함께 학원으로 향한다.`,
      );
      await era.printAndWait(
        `그녀가 수업을 듣는 동안 당신은 다음 레이스 기준에 맞춰 오후 훈련 계획을 세우고, 때로는 어려운 문제에 부딪히면 선배 트레이너들에게 조언을 구하기도 한다.`,
      );
      await era.printAndWait(
        `옥상은 어느덧 두 사람만의 약속된 아지트가 되었다. 옥상 계단의 마지막 칸을 밟을 때면, 교복 차림의 ${zensky.name}가 이미 그곳에서 당신을 기다리고 있다.`,
      );
      await era.printAndWait(
        `날씨가 맑은 날에는 학원을 내려다보며 옹기종기 모여 있는 ${zensky.get_uma_sex_title()}들을 구경하고 학원에서 있었던 재미있는 일들을 이야기한다.`,
      );
      await era.printAndWait(
        `비가 내리는 날에는 트레이닝실 소파에 기대어 서로에게 몸을 의지한다.`,
      );
      await era.printAndWait(
        `황혼의 마지막 햇살이 ${zensky.name}의 치맛자락을 비출 때쯤, 당신은 마지막 서류 정리를 마치고 문밖에서 기다리던 그녀와 함께 아파트로 돌아간다.`,
      );
      await era.printAndWait(
        `저녁이 되면 쏟아지는 물소리와 텔레비전 속 예능인의 웃음소리를 배경으로, 당신은 볶은 요리를 접시에 담는다.`,
      );
      await era.printAndWait(
        `가벼운 식사 전 인사를 나눈 뒤, 당신은 스페 일행이 조만간 자신을 추월할 거라며 조금은 자랑스럽게 이야기하는 그녀의 말을 들으며 당근을 입에 넣는다.`,
      );
      await era.printAndWait(
        `자기 전 인사를 나눈 뒤, 같은 방에서 자고 싶어 하는 ${zensky.name}를 겨우 달래서 각자의 방으로 돌려보낸다.`,
      );
      await era.printAndWait(
        `불을 끄기 전 ${zensky.name}가 추천해 준 순정 만화를 몇 페이지 넘겨보다가 잠에 든다.`,
      );
      await era.printAndWait(
        `평온한 나날은 맑은 하늘에 떠다니는 구름 같아서, 시간은 구름의 느긋한 흐름을 따라 천천히 흘러간다.`,
      );
      await zensky.say_and_wait(
        `${callname}, 이번 일요일에 바다에 가자. 바다에 놀러 간 지도 꽤 오래됐잖아.`,
      );
      await era.printAndWait(`어느 날 저녁 식사 자리에서 그녀가 바다에 가고 싶다는 제안을 했다.`);
      era.printButton(`「바다인가? 정말 오랜만이네.」`, 1);
      await zensky.say_and_wait(
        `마지막으로 바다에 갔던 게 여름 합숙 때 이사장님네 해변이었지? 하지만 이번엔 너랑 나, 딱 둘이서만 가고 싶어.`,
      );
      era.printButton(`「일요일엔 딱히 처리할 일도 없으니까, 같이 가자.」`, 1);
      await zensky.say_and_wait(`야호♪ 그럼 나도 바다에 가져갈 물건들을 준비해야겠네.`);
      era.printButton(
        `${zensky.name}은(는) 이럴 때만 천진난만한 모습을 보인단 말이지.`,
        1,
      );
      await zensky.say_and_wait(`당신은 마지막 채소를 입에 넣으며 생각했다.`);
      await era.printAndWait(`시간은 당신과 ${zensky.name}의 기대 속에서 어느덧 일요일이 되었다.`);
      await era.printAndWait(
        `타치의 질주 덕분에 예정보다 훨씬 일찍 목적지에 도착했다.`,
      );
      await era.printAndWait(
        `관광 시즌은 아니었지만, 이 해변은 여전히 많은 관광객이 찾는 명소였다.`,
      );
      await zensky.say_and_wait(`${callname}, 내가 이거 입으면 어떨 것 같아?`);
      await era.printAndWait(
        `당신은 ${zensky.name}에게 건네받은 가방 속 비키니 수영복을 슬쩍 보았다.`,
      );
      await zensky.say_and_wait(`이제 해변의 모든 시선이 나한테 집중되겠네.`);
      await era.printAndWait(
        `당신은 ${zensky.name}가 수영복을 입은 모습을 상상하며 내심 기대하기 시작했다.`,
      );
      await zensky.say_and_wait(`${callname}, 이따 모래사장에서 봐.`);
      await era.printAndWait(`탈의실 앞에서 당신과 ${zensky.name}는 잠시 헤어졌다.`);
      await zensky.say_and_wait(`짠♪ ${callname}, 이 차림 어때?`);
      await zensky.say_and_wait(`${zensky.name}가 마치 자랑이라도 하듯 당신을 바라본다.`);
      era.printButton(`「어쩐지 기분이 좀 별로인걸.」`, 1);
      await zensky.say_and_wait(`${callname}은 이렇게 멋진 여자친구를 독점하고 싶은 거구나♪ 훗훗.`);
      await era.printAndWait(
        `두 사람은 사람이 적은 곳에 파라솔을 설치했다. 오늘은 유독 날씨가 쾌적하다.`,
      );
      await zensky.say_and_wait(
        `${callname}, 자외선 차단제 좀 발라줄래? 바구니 안에 있어.`,
      );
      await era.printAndWait(
        `당신은 바구니에서 차단제를 꺼내 손에 조금 덜어낸 뒤 그녀의 등에 골고루 발라주었다.`,
      );
      await zensky.say_and_wait(`고마워.`);
      await era.printAndWait(
        `음악 리듬에 맞춰 실룩거리는 귀를 보고 있자니, 당신은 문득 그녀에게 장난을 치고 싶어졌다.`,
      );
      era.printButton(`「귀 가까이 다가가서 크게 소리를 지른다.」`, 1);
      era.printButton(`……아니, 관두자.`, 2);
      const ret = await era.input();
      await era.clear(2);
      if (ret === 1) {
        await era.printAndWait(
          `당신은 그녀의 귀 근처로 살금살금 다가갔다. 잠시 후 닥칠 비극을 모르는 그녀는 왜 손길이 멈췄는지 의아해하고 있었다.`,
        );
        era.printButton(`「와아!」`, 1);
        await zensky.say_and_wait(`꺄악!`);
        await era.printAndWait(
          `${zensky.name}는 몸을 크게 움찔하며 놀랐고, 한참 뒤에야 정신을 차렸다.`,
        );
        await zensky.say_and_wait(`${callname}!!`);
        await era.printAndWait(`${zensky.name}는 심호흡하며 진정하려 애쓰고 있다.`);
        era.printButton(
          `${zensky.name}의 귀가 너무 매력적이라서 나도 모르게 장난치고 싶어졌어.`,
          1,
        );
        await zensky.say_and_wait(
          `하아～ ${callname}은 정말 어린애 같다니까. 다른 사람한테도 이런 짓 하니?`,
        );
        era.printButton(`「너한테만 한 거야.」`, 1);
        await zensky.say_and_wait(`그러니까 내가 영광스러운 첫 번째 희생양이 된 거네?`);
        era.printButton(`「아, 아니 그게 아니라, 설명할게.」`, 1);
        await zensky.say_and_wait(`나도 방금 느꼈던 공포를 너한테 맛보게 해줄 거야!`);
        era.printButton(`「으아아아악!」`, 1);
        await era.printAndWait(`그 뒤, 그녀의 화를 완전히 풀어주는 데 꽤 오랜 시간이 걸렸다.`);
        era.set('cflag:4:호감거절', 89);
      } else {
        await era.printAndWait(
          `두 생각 사이의 치열한 갈등 끝에 당신은 결국 장난을 포기하고 ${zensky.name}의 마사지에 집중하기로 했다.`,
        );
        await era.printAndWait(`습기를 머금은 바람이 바다에서 육지로 불어온다.`);
        await era.printAndWait(`백사장에 미련이 남은 듯 한참을 머물다 떠나간다.`);
        await zensky.say_and_wait(`바람이 멈췄네, ${callname}.`);
        await era.printAndWait(`${zensky.name}는 한참 동안 바다를 응시했다.`);
        await zensky.say_and_wait(`…… 해가 지면 달이 떠오르겠지.`);
        await era.printAndWait(`그녀가 갑자기 입을 열었다.`);
        era.printButton(`「해가 뜨든 달이 뜨든, 바람은 언제나 조용히 춤을 출 거야.」`, 1);
        await zensky.say_and_wait(`……${callname}, 조금만 더 가까이 와줄래?`);
        await era.printAndWait(
          `${zensky.name}가 당신의 팔에 온몸의 무게를 실어 기대왔고, 당신은 그녀의 손을 꽉 잡았다.`,
        );
        await era.printAndWait(`두 사람은 달이 하늘 높이 뜰 때까지 묵묵히 바다를 바라보았다.`);
        await sys_love_uma_in_event(4);
      }
    }
  }

  async 99(zensky, me, callname) {
    await era.printAndWait(
      `당신과 ${zensky.name}는 수많은 난관을 거쳐 마침내 서로의 진심을 확인했다.`,
    );
    await era.printAndWait(
      `${zensky.name}에게 받은 관공서 제출용 서류에 각자의 이름을 소중하게 기입했다.`,
    );
    await era.printAndWait(
      `결혼식 날짜를 잡은 뒤, 관습에 따라 당분간 만나지 않기로 약속했다.`,
    );
    await era.printAndWait(
      `결혼식 전날 밤, 당신은 좀처럼 잠을 이루지 못해 침대 머리맡에 둔 그녀와의 사진첩을 집어 들었다.`,
    );
    await me.say_and_wait(`이건 데뷔전 승리 후에 둘이서 사이제리야에서 축하하며 찍은 사진이네.`, true);
    await era.printAndWait(
      `기계치인 그녀는 스마트폰 조작보다 사진을 찍어 추억을 남기는 걸 좋아했다. 당신은 두 번째 페이지를 넘겼다.`,
    );
    await me.say_and_wait(`이건 차 전시회에서 카운타크 프라모델을 구해주러 갔을 때 사진이고.`, true);
    await era.printAndWait(
      `당신은 장식장 위에 놓인 카운타크 모델을 힐끗 바라본 뒤 다음 장으로 넘겼다.`,
    );
    await me.say_and_wait(`이건 훈련 중에 다쳐서 보건실에 있을 때 찍은 사진이네.`, true);
    await era.printAndWait(
      `${zensky.name}가 흘러나오는 올드 팝송을 들으며 휴식을 취하고 있다. 그녀의 귀가 리듬에 맞춰 까딱거린다.`,
    );
    await me.say_and_wait(
      `이때까지만 해도 ${zensky.get_bigger_sibling_sex_title()}로서 체면을 차리고 있었나?`,
      true,
    );
    await era.printAndWait(
      `어쩐지 들뜬 기분에 당신은 사진첩을 주르륵 넘겼고, 여름 합숙 때 함께 찍은 사진에서 멈췄다.`,
    );
    await me.say_and_wait(`그때 이미 나를 꽤 친밀한 사람으로 생각하고 있었던 걸까.`, true);
    await era.printAndWait(
      `그녀에게 팔을 붙잡혀 억지로 찍힌 사진 속에서, 당황한 당신과 대조적으로 환하게 웃고 있는 그녀의 미소가 보였다.`,
    );
    await me.say_and_wait(`그때 이상한 스캔들 안 나게 하려고 정말 애먹었었지.`, true);
    await era.printAndWait(`당신은 피식 웃으며 다음 장을 넘겼다.`);
    await era.printAndWait(`겨울옷을 입은 당신과 그녀가 근처 산에서 찍은 사진이다.`);
    await me.say_and_wait(`내년 크리스마스 때는 느티나무 가로수길을 같이 산책하자고 약속했었지.`, true);
    await era.printAndWait(`다음 페이지를 넘기려던 찰나.`);
    await era.printAndWait(`똑똑똑.`);
    await me.say_and_wait(`……지금 시간에 누구지?`, true);
    era.printButton(`${zensky.name}?!`, 1);
    await era.printAndWait(`문을 열자, 평상복 차림의 그녀가 문 앞에 서 있었다.`);
    await zensky.say_and_wait(`이렇게 아름다운 밤인데, 같이 드라이브 가지 않을래?`);
    era.printButton(`「응, 같이 가자.」`, 1);
    era.println();
    await era.printAndWait(
      `당신은 ${zensky.name}의 손을 꽉 잡고, 타치가 주차된 곳으로 함께 뛰어갔다.`,
    );
    await zensky.say_and_wait(`${callname}, 널 만날 수 있어서 정말 다행이야. 고마워.`);
    await era.printAndWait(`고요한 심야 도로 위에 다시 한번 습기를 머금은 자연의 바람이 불어왔다.`);
    await sys_love_uma_in_event(4);
  }
};