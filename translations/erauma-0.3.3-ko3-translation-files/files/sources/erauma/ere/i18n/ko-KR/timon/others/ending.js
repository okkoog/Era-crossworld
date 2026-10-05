// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Unmatched/new 3.113 entries inherit from ja-JP.
 */
const era = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/others/ending');

const ko = Object.create(ja);

ko.loser = (() => {
  const f = async (you) => {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 너무 나태했거나, 혹은 담당의 재능이 부족했던 것일지도 모릅니다. 승리는 당신들에게서 언제나 멀리 있었습니다.',
    ]);
    await era.printAndWait([
      '아무리 노력해도 소용이 없었고, 결국 학원 측은 ',
      you.get_colored_name(),
      '에게 담당과의 계약 해지 및 이적을 명령했습니다.',
    ]);
    await era.printAndWait([
      '사회적 평판 부족으로 해고된 ',
      you.get_colored_name(),
      '은(는) 결말을 맞이했다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
  };
  f.title = '문전박대';
  return f;
})();

ko.hentai = (() => {
  const f = async (you) => {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 성인으로서의 사회적 책임을 망각하고, 담당에게 변태적인 행위를 사주한 사실이 폭로되었습니다. 트레센조차 ',
      you.get_colored_name(),
      '의 죄를 덮어줄 수는 없었습니다.',
    ]);
    await era.printAndWait([
      '결국 학원 측은 ',
      you.get_colored_name(),
      '에게 담당과의 계약 해지 및 이적을 명령했습니다.',
    ]);
    await era.printAndWait([
      '사회적 평판이 바닥으로 떨어져 해고된 ',
      you.get_colored_name(),
      '은(는) 결말을 맞이했습니다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
  };
  f.title = '패가망신';
  return f;
})();

ko.punishment1 = async (you, uma, they) => {
  era.setOffset(6);
  era.setWidth(12);
  await you.say_as_unknown_and_wait(
    '듣기로는, 인간은 자유를 박탈당한 후에야…… 진정으로 자신을 알게 된다고 한다.',
  );
  await you.say_as_unknown_and_wait(
    '그렇다면…… 당신은 자신을 얼마나 잘 알고 있을까?',
  );
  await you.say_as_unknown_and_wait([
    you.get_colored_actual_name(),
    '……나태, 오만',
    era.get('flag:变态行为') > 0 ? '、색욕' : '',
    '……오늘…… 당신은 다시 태어났다.',
  ]);
  await you.say_as_unknown_and_wait(
    '하지만 곧 깨닫게 될 것이다…… 자유에는 대가가 따른다는 것을.',
  );
  await you.say_as_unknown_and_wait(
    '감옥이 당신과 동행할 것이며…… 이 육체는 당신에게 영원한 징벌이 될 것이다.',
  );
  await you.say_as_unknown_and_wait(
    '속죄가 곧 시작된다—— 더 큰 고통을 겪고 싶지 않다면, 필사적으로 달려야 한다.',
  );
  await you.say_as_unknown_and_wait([
    you.get_colored_actual_name(),
    '—— 자유가 당신을 부르고 있다.',
  ]);
  await you.say_as_unknown_and_wait('다시는 보지 않았으면 좋겠군.');
  era.setWidth(24);
  era.setOffset(0);
  era.println();
  if (era.get('cflag:0:种族') > 0) {
    await era.printAndWait([you.get_colored_name(), '이(가) 개조당했습니다!']);
  } else {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 우마무스메로 변했습니다!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 여전히 ',
      uma,
      '을(를) 모집하고, ',
      they,
      '을(를) 훈련시키며, ',
      they,
      '과(와) 함께 달릴 수 있지만, 더 이상 트레센에서 지급하는 급여를 받을 수 없습니다.',
    ]);
    await era.printAndWait([
      '대신, ',
      you.get_colored_name(),
      '은(는) 스스로 자율 훈련을 하고, 레이스에 참여하여 상금과 사회적 명성을 얻을 수 있습니다.',
    ]);
  }
  await era.printAndWait(
    '명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!',
  );
};

ko.punishment2 = async (you, date, uma, they) => {
  era.setOffset(6);
  era.setWidth(12);
  await era.printAndWait('성 노 예 선 언', {
    align: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    isParagraph: true,
  });
  await era.printAndWait([
    '본 암말 ',
    you.get_colored_actual_name(),
    '은(는) ',
    uma,
    ' 님들의 노예가 될 것을 자원하며,',
  ]);
  await era.printAndWait(
    '심신을 주인님들을 기쁘게 해드리기 위한 최적의 상태로 조정하고, 모든 인권을 영원히 포기하며,',
  );
  await era.printAndWait(
    '이후 주인님들의 모든 조교를 수용하고, 모든 지시에 복종하며, 어떠한 이의도 제기하지 않겠습니다.',
  );
  era.setOffset(13);
  era.setWidth(5);
  era.setAlign('center');
  era.print([you.get_colored_actual_name()]);
  era.print(`<${you.name} 의 입술 자국>`);
  era.print(`<${you.name} 의 유두 자국>`);
  await era.printAndWait(`<${you.name} 의 음순 자국>`);
  await era.printAndWait(date);
  era.setAlign('left');
  era.setOffset(0);
  era.setWidth(24);
  era.println();
  await era.printAndWait([
    '강제적인 자원 하에 선언서에 서명한 후, ',
    you.get_colored_name(),
    '은(는) ',
    uma,
    '들의 성노예로 개조되었습니다!',
  ]);
  await era.printAndWait([
    you.get_colored_name(),
    '은(는) 여전히 ',
    uma,
    '을(를) 모집하고, ',
    they,
    '을(를) 훈련시키며, ',
    they,
    '과(와) 함께 달리고 자율 훈련 및 레이스에 참여할 수 있습니다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    you.get_colored_name(),
    '의 더 중요한 책무는 ',
    they,
    '의 성욕을 해소해 주는 것입니다!',
  ]);
  await era.printAndWait([
    you.get_colored_name(),
    '의 몸은 이미 예민도가 극대화된 상태로 조정되었습니다. 부디 자신의 성 기술을 더욱 정진하여 주인님들을 기쁘게 해드리고 명성을 획득하십시오!',
  ]);
  await era.printAndWait(
    '명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!',
  );
};

ko.punishment3 = // [번역 대상] punishment3
  async (you, uma, they) => {
  era.setOffset(6);
  era.setWidth(12);
  await you.say_as_unknown_and_wait(
    '당신이 이 지경까지 타락할 줄은 몰랐다.',
  );
  await you.say_as_unknown_and_wait(
    '당신의 손에는 한때 바닥에서 지상으로 기어 올라올 수 있는 밧줄이 쥐어져 있었다.',
  );
  await you.say_as_unknown_and_wait(
    '하지만 당신은 그 구명줄을 제 손으로 버리고 말았다.',
  );
  await you.say_as_unknown_and_wait(
    '이제 와서 생각해보면, 당신이 일부러 방임하여 모든 것을 돌이킬 수 없게 만든 게 아닌가 의심스러울 정도다.',
  );
  await you.say_as_unknown_and_wait(
    '당신에게 인권을 지킬 기회는 이미 수없이 주어졌었다.',
  );
  await you.say_as_unknown_and_wait(
    '뭐, 지금의 당신에겐 들리지도 않겠지만.',
  );
  await you.say_as_unknown_and_wait([
    '그럼 안녕히, ',
    you.get_colored_actual_name(),
    '.',
  ]);
  await you.say_as_unknown_and_wait([
    {
      color: '#ff7373',
      content: 'GAME OVER',
      fontWeight: 'bold',
    },
  ]);
  era.setWidth(24);
  era.setOffset(0);
  era.println();
  await era.printAndWait([
    '번식용 우마무스메, 그것이 ',
    you.get_colored_name(),
    '의 말로입니다.',
  ]);
  await era.printAndWait(
    '과거의 야망은 바람에 흩날리고, 한때의 이상은 무참히 부서졌습니다.',
  );
  if (you.sex_code > 0) {
    await era.printAndWait([
      '이제부터 ',
      you.get_colored_name(),
      '의 책무는 짧은 육봉으로 고귀한 ',
      uma,
      '들을 기쁘게 하고, 열등한 구멍으로 신성한 인자를 받아들여 그녀들의 우수한 후세를 잉태하는 것뿐입니다!',
    ]);
  } else {
    await era.printAndWait([
      'これからの ',
      you.get_colored_name(),
      ' の務めは、劣った穴で神聖な因子を受け、',
      they,
      'との優れた子孫を産むことだ！',
    ]);
  }
  await era.printAndWait([
    '비록 인권은 ',
    you.get_colored_name(),
    '에게서 멀리 떠나갔지만, 부디 씨받이로서 정진해주시길 바랍니다.',
  ]);
  await era.printAndWait([
    '운이 좋다면, 어쩌면 ',
    you.get_colored_name(),
    '도 자식 덕에 귀한 몸이 될지도 모르니까요!',
  ]);
};

ko.get_basement_ending_confirm = (you) => [
  you.get_colored_name(),
  '은(는) 지하실에서 결말을 맞이했다……',
  { isBr: true },
  '지하실 엔딩을 확인합니까?',
];
ko.bt_confirm_yes = '비참한 현실을 직시한다';
ko.bt_confirm_no = '으아아 안 볼래';

module.exports = ko;

module.exports = {
  ...module.exports,

  // [번역 대상] basement_end
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait('トレセンの、どの探知機にも映らない地下室で……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は手足を縛る縄を必死にほどこうとしたが、自分を締めつけるだけだった。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' はベッドの縁に座り、',
        you.get_colored_name(),
        ' に嫣然と微笑み、優しく世話をした。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の胸にあるのは、未知の未来への深い恐怖だけだった……',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' の愛に囚われ、',
        you.get_colored_name(),
        ' は結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '情愛の牢獄';
    return f;
  })(),

  // [번역 대상] crazy_fan_end
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          '出走でも取材でも、',
          you.get_colored_name(),
          ' と担当の険悪さは衆目の知るところだった。その険悪さが担当の成長を妨げているという声は止まらず、校側もこの組み合わせに堪忍袋の緒が切れ始めていた……だが、彼らよりさらに耐性のない者たちがいた。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' が怠りすぎたのか、担当',
          chara.uma_sex_title,
          'の天賦が足りなかったのか。勝利はいつまでも遠いままだった。校側もこの組み合わせに堪忍袋の緒が切れ始めていた……だが、彼らよりさらに耐性のない者たちがいた。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' へ渡すハチミツケーキを片手に、大雨の道をひとり歩いていた。背後から急な足音がし、それから腰に錐のような痛みが走った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は地面に押し倒され、背後の者は背中へ刺し続けた。',
        you.get_colored_name(),
        ' が動かなくなるまで。',
      ]);
      await era.printAndWait(
        'ケーキ箱を包んだビニール袋は、雨粒に激しく叩かれ、叩かれ、叩かれ続けた……',
      );
      await era.printAndWait('怒れるファンの報復を受け、結末を迎えた……');
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'ファン襲撃';
    return f;
  })(),

  // [번역 대상] slave_end
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        '金に腐った ',
        you.get_colored_name(),
        ' は、選んではならない道へ足を踏み入れた——自尊を捨て、自分の生徒から金を借りる……',
      ]);
      await era.printAndWait('だが運命の贈り物には、みな裏で値がついている。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の借入は、雪だるま式の複利のなかで、ついに ',
        you.get_colored_name(),
        ' が耐えうる重さを超えた。',
      ]);
      await era.printAndWait([
        'あとは、',
        you.get_colored_name(),
        ' が代価を返す番だ……',
      ]);
      await era.printAndWait([
        '金の関係に囚われた ',
        you.get_colored_name(),
        ' は、結末を迎えた……',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = '金の奴隷';
    return f;
  })(),
};
