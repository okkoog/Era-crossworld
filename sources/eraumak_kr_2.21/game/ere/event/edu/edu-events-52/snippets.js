const era = require('#/era-electron');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {number} loc
   * @param {EventObject} event_object
   * @returns {boolean|void}
   */
  async common_out_check(urara, me, loc, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== 52 ||
      (loc !== location_enum.river &&
        loc !== location_enum.church &&
        loc !== location_enum.shopping &&
        loc !== location_enum.station &&
        loc !== location_enum.mejiro)
    ) {
      await era.printAndWait([
        urara.get_colored_name(),
        '는 최근 ',
        me.get_colored_name(),
        '과(와) 함께 외출하고 싶어 하는 듯하다……',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
  },
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   */
  async common_talk_with_in_urara(urara, me, in_urara) {
    await in_urara.print_and_wait([
      '그리 멀지 않았을지도 모르는 과거에, 제멋대로인 성격에 재능도 평범한 어린 ',
      in_urara.get_uma_sex_title(),
      '가 어느 목장에서 아주 평범하게 태어났어요.',
    ]);
    await in_urara.print_and_wait([
      '하지만 이렇게 성가시고 평범한 ',
      in_urara.get_child_sex_title(),
      '에게, 처음으로 ',
      in_urara.sex,
      '를 사랑해주었던 사람들은 축복과도 같은 사랑스러운 이름을 지어주었죠.',
    ]);
    await in_urara.print_and_wait([
      '그리고 ',
      in_urara.sex,
      '의 인생 또한 이 사랑스러운 이름처럼, 우연한 행운 끝에 시대와 세 여신의 가호를 받게 되었습니다.',
    ]);
    await in_urara.print_and_wait([
      '달려온 나날 동안 단 한 번의 레이스도 이기지 못했지만, ',
      in_urara.sex,
      '는 몇 번이고 모두의 가련함과 보살핌을 얻어냈죠.',
    ]);
    await in_urara.print_and_wait([
      '그렇기에 ',
      in_urara.sex,
      '는 달리는 것을 혐오했고, ',
      in_urara.sex,
      '를 기탁의 대상으로 삼는 인간들을 혐오했으며, 제멋대로 목숨을 거는 동족들 또한 가리지 않고 혐오했습니다.',
    ]);
    await in_urara.print_and_wait([
      '허나 이토록 겁 많고 괴팍한 ',
      in_urara.sex,
      '일지라도, 자신으로 인해 진흙탕이 된 길 위에서 마지막까지 남은 두 가지의 「작은 행복」을 주워 들었죠.',
    ]);
    await in_urara.print_and_wait(
      '하나는 모두의 사랑으로 구축되어 어딘가 부족함이 느껴지지만 그래도 몸을 의탁할 수 있는 평온함, 다른 하나는 세 여신이 부린 작은 장난.',
    );
    await in_urara.print_and_wait([
      '그리하여 여정의 도중에, 축복받은 「',
      in_urara.sex,
      '」와, 똑같이 타인에게 사랑받는 「',
      urara.sex,
      '」는 같은 열차에 올라타게 되었습니다.',
    ]);
    await in_urara.print_and_wait([
      '축복받은 길을 걸어가지만 사실은 아무것도 할 수 없는 「',
      in_urara.sex,
      '」와, 미약하지만 희망이 되고 싶어 하는 「',
      urara.sex,
      '」가 만난 것입니다.',
    ]);
    await in_urara.print_and_wait(
      '마치 꿈결처럼 행복했던 동행 속에서, 본래 서로 달랐던 두 사람은 점차 서로의 모습을 닮아갔습니다.',
    );
    await in_urara.print_and_wait([
      in_urara.sex,
      '는 눈부시게 빛나는 그 희망을 가리지 않고 혐오했으나, 그 햇살은 비뚤어진 ',
      in_urara.sex,
      '의 내면 속에 가장 부드러운 풀밭 한 조각을 비추었습니다.',
    ]);
    await in_urara.print_and_wait([
      '만약 ',
      urara.sex,
      '가 이대로 계속 즐겁게 자랄 수 있다면 좋을 텐데, 만약 ',
      urara.sex,
      '가 바라는 작은 행복을 거둘 수 있다면 좋을 텐데……',
    ]);
    await in_urara.print_and_wait([
      '하지만 이토록 보잘것없으면서도 굳이 달리기를 선택한 벚꽃은, 도대체 어디서 자기 자신조차 가져본 적 없는 모두의「미소」를 찾아낼 수 있을까요?',
    ]);
    await in_urara.print_and_wait([
      '그러나 ',
      in_urara.sex,
      '는 결국 찾아내고 말았습니다. 어린 ',
      urara.get_uma_sex_title(),
      '가 행복을 찾고, 함께 온전한 이야기를 써 내려갈 수 있게 해줄 「트레이너」를.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '말이 끝나자, 경청하는 ',
      me.get_colored_name(),
      '을(를) 응시하며 ',
      me.get_colored_name(),
      '에게 밀착한 ',
      in_urara.get_teen_sex_title(),
      '의 냉담했던 뺨에 점차 끈적한 홍조가 차올랐다.',
    ]);
    await era.printAndWait([
      '어느샌가 시작된 신체 접촉 속에서 까치발을 들며, ',
      in_urara.get_teen_sex_title(),
      '는 부드럽고 젖은 벚꽃빛 입술을 ',
      me.get_colored_name(),
      '의 입술 위에 겹쳤다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그렇다면 『',
      urara.sex,
      '』가 『당신』에게 품은 감정에 대해서는, 부디 스스로 느껴보시길……',
    ]);
    await era.printAndWait([
      '뜨거운 부드러움이 끈적한 물소리와 함께 얽혀 들며 스며들었고, ',
      urara.get_colored_name(),
      '와 닮은 어린 ',
      in_urara.get_uma_sex_title(),
      '는 ',
      in_urara.sex,
      '의 얼굴을 이용해 ',
      me.get_colored_name(),
      '에게 갈구하고 있었다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '와 이런 짓을 하면 안 된다, 시간이 없다, 어서 ',
      urara.sex,
      '를 밀쳐내야 한다, ',
      urara.sex,
      '는 ',
      urara.get_colored_name(),
      '가 아니다, ',
      urara.sex,
      '와 이런 짓을 해서는 안 된다……',
    ]);
    await era.printAndWait(
      '하지만 의식이 필사적으로 깨어 있으려 노력함에도 불구하고, 몸은 완전히 반대편의 품속으로 미끄러져 들어갔다.',
    );
    await era.printAndWait([
      '감정과는 무관하게, 주저할 필요도 없이, ',
      urara.sex,
      '에게서는 가장 중요한 담당의 기운이 풍겨 오고 있었다. 「',
      urara.get_colored_name(),
      '」는 바로 이곳에 있다……',
    ]);
    await era.printAndWait([
      '뒤이어, ',
      urara.sex,
      '에 의해 시작되고 주도된 황홀한 입맞춤 속에서, ',
      urara.get_teen_sex_title(),
      '는 점차 가라앉는 상대방의 입술을 세게 깨물었다.',
    ]);
    await era.printAndWait(
      '비록 통증은 흥분된 신경에 의해 억제되었으나, 비릿하고 달콤한 향기는 두 사람의 구강 속으로 서서히 퍼져나갔다.',
    );
    await era.printAndWait([
      '눈을 가늘게 뜨고 혈액이 섞인 애욕을 들이키며, 그것을 탐닉하는 ',
      urara.sex,
      '는 끊임없이 ',
      me.get_colored_name(),
      '의 육체와 정신을 침범하고 있었다.',
    ]);
    await era.printAndWait(
      '이 벗어날 수 없는 입맞춤 속에 담긴 것이 과연 무거운 애욕인지, 뒤섞인 감사인지, 아니면 뒤틀린 혐오인지, 혹은 그 세 가지 모두인지?',
    );
    await era.printAndWait([
      '유일하게 확인할 수 있는 것은, 「당신」을 선택한 「',
      urara.sex,
      '」가 ',
      me.get_colored_name(),
      '의 모든 것을, 육체부터 영혼까지 갈구하고 있다는 사실뿐이었다……',
    ]);
    await era.printAndWait([
      '마치 보복과도 같았던 깊은 입맞춤을 천천히 끝낸 뒤, 완전히 포식자의 모습이 된 ',
      urara.get_teen_sex_title(),
      '는 못내 아쉬운 듯 입가에 이어진 은사를 핥았다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '이걸로 됐어요. 이해하셨나요? 비록 이해하지 못해도 상관없어요. 당신과 ',
      urara.sex,
      '에게는 아직 더 긴 시간이 남아있으니까……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 품에서 살며시 물러나며, 눈앞의 ',
      urara.sex,
      '는 눈동자 속의 열기를 거두고 다시금 그 서늘한 거리감을 되찾았다.',
    ]);
  },

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   * @param {string} callname
   * @param {boolean} [in_race]
   */
  async common_talk_with_in_urara_end(urara, me, in_urara, callname, in_race) {
    await in_urara.say_as_unknown_and_wait(
      '다음에 혹시라도 우라라가 상처 입게 된다면, 나는 이야기를 이어나갈 권리를 내 손으로 직접 움켜쥐겠어요.',
    );
    await era.printAndWait([
      '짧은 정적 끝에, 마치 제멋대로 갑자기 나타났던 것처럼 눈앞의 「',
      in_urara.get_colored_actual_name(),
      '」는 다시금 제멋대로 뒤돌아 떠나갔다.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '그저 따뜻한 햇살을 받기만 하면 될 텐데, 보잘것없는 둘은 기어이 손을 맞잡고 태양을 쫓으려 하는군요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '그럼 나에게도 보여줘 보시죠. 밀랍으로 만든 날개가 녹아버리기 전까지, ',
      urara.sex,
      '와 당신이 과연 태양에 얼마나 가까워질 수 있는지——',
    ]);
    await era.printAndWait(
      in_race
        ? '떠나기 전 내뱉은 위압적인 말과 함께, 잿빛이었던 시야가 다시 색을 되찾았고, 다시 흐르기 시작한 공기가 통로 안으로 군중의 함성 소리를 쏟아냈다.'
        : '위압감이 사라지자 잿빛이었던 시야가 다시 색을 되찾았고, 다시 흐르기 시작한 찬 바람이 바삐 움직이는 인파 속으로 불어닥쳤다.',
    );
    in_race &&
      (await era.printAndWait([
        '몸이 마침내 자유로워진 것을 깨달은 ',
        me.get_colored_name(),
        '은(는) 빛 속으로 걸어 들어가려는 ',
        urara.get_uma_sex_title(),
        '를 급히 붙잡으려 했으나, 손은 ',
        urara.sex,
        '의 형체를 그대로 통과해버렸다.',
      ]));

    era.printButton(
      '「잠깐만! 수수께끼 같은 말은 그만둬! 도대체 이게 어떻게 된 거야? 너는 대체……」',
      1,
    );
    await era.input();

    !in_race &&
      (await era.printAndWait([
        '몸이 마침내 자유로워진 것을 깨달은 ',
        me.get_colored_name(),
        '은(는) 뒤를 돌아 무언가 더 물으려 했으나, 보이는 것은 그저 옅은 안개 같은 미소뿐이었다.',
      ]));
    await in_urara.say_as_unknown_and_wait([
      '잘 생각해보세요, 트레이너 ',
      me.get_adult_sex_title(),
      '. 내 이름, 당신이 짐작하지 못할 리 없잖아요?',
    ]);
    await era.printAndWait(
      in_race
        ? [
            '통로 출구에 서서, ',
            urara.get_teen_sex_title(),
            '는 의미심장한 말을 남긴 채 안개처럼 햇살 속으로 사라졌다.',
          ]
        : [
            '마지막으로 의미심장한 말을 남긴 뒤, ',
            urara.get_colored_name(),
            '의 얼굴에 서려 있던 안개는 마치 애초에 존재하지 않았던 것처럼 공기 중으로 흩어져 사라졌다.',
          ],
    );
  },

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {CharaTalk} in_urara
   * @param {string} callname
   * @param {boolean} [in_race]
   */
  async common_talk_with_urara_48(urara, me, in_urara, callname, in_race) {
    await era.printAndWait([
      in_race ? '정말 「 ': '하지만, ',
      urara.sex,
      '」가 말한 대로, 설령 지금 내가 멈춰 선다 해도 ',
      urara.get_colored_name(),
      '는 역시 이 레이스를 선택하겠지……',
    ]);
    await era.printAndWait([
      '잠깐! 맞다, 「 ',
      urara.sex,
      '」에 대한 일도 있는데, 하지만…… 이걸 또 어떻게 ',
      urara.get_colored_name(),
      '에게 설명해야 하지?',
    ]);

    era.printButton('「아, 맞다. 우라라, 방금 내가 음…… 누굴 만난 것 같은데……」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 방금 겪은 환각 같은 경험을 어떻게 ',
      urara.get_colored_name(),
      '에게 말할지 고민하던 찰나, 어린 ',
      urara.get_uma_sex_title(),
      '의 짧은 비명 소리가 들려왔다.',
    ]);
    await urara.say_and_wait([
      '앗, ',
      callname,
      '! 입술이! 어디 긁혀서 터진 거야?',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 당황한 목소리에, ',
      me.get_colored_name(),
      '은(는) 뒤늦게 찾아온 쓰라림 속에서 조건반사적으로 입술가에 손을 갖다 대었다.',
    ]);
    await era.printAndWait(
      '이건…… 피? 상처에서 묻어난 약간의 굳은 핏자국을 응시하자, 환각같던 경험 속에서 겪었던 그 통증 어린 입맞춤이 마침내 머릿속에서 선명해졌다.',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '의 걱정스럽고 의아한 시선 속에서, ',
      me.get_colored_name(),
      '은(는) 잠시 침묵에 빠졌다. ——아무래도 「',
      in_urara.sex,
      '」는 정말로 왔었던 모양이다……',
    ]);
  },
};