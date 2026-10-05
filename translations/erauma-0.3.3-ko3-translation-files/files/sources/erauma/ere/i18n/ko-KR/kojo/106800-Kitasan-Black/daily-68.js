// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/106800-Kitasan-Black/daily-68.js
// 대상 함수/속성: good_morning
/**
 * @file キタサンブラック - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/106800-Kitasan-Black/daily-68.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] good_morning — 함수/속성 전체 문맥에서 남은 원문을 번역
  good_morning(
    kita,
    daiya,
    you,
    callname,
    call_3,
    call_7,
    call_44,
    call_67,
    call_98,
    call_301,
  ) {
    const buffer = [];
    buffer.push(
      () =>
        kita.say([
          '今日も体は異常なし、',
          callname,
          '、トレーニング始めよう！',
        ]),
      () =>
        kita.say([
          call_3,
          "만큼 강하지는 않지만, 저도 노력해서 강해졌다는 걸 증명해 보이겠어요!",
        ]),
      () =>
        kita.say([
          'レースみたいな大事な日に向けて、',
          callname,
          '、遠慮なくボクを鍛えて、ボクだけの武器をください。',
        ]),
      () => {
        kita.say([
          '最近、',
          call_67,
          ' が',
          kita.sex,
          '、よくボクを変な料理に連れていくんだ。ほうれん草カレーとか、チョコ鍋とか……',
        ]);
        kita.say([
          '……どれも面白い料理だけど、',
          call_67,
          ' の連れてく店、ちょっと奇抜すぎない？',
        ]);
        era.print([
          kita.get_colored_name(),
          ' は少し膨らんだお腹を押さえ、不思議そうな顔をした。',
        ]);
      },
      () => {
        kita.say([call_44, '、最近錬金術まで覚えたみたい。すごいなあ～']);
        era.print([
          kita.get_colored_name(),
          ' はにこにこと、',
          you.get_colored_name(),
          ' に身の回りの出来事を話している。',
        ]);
      },
      () => {
        kita.say([
          callname,
          '、最近ちょっと運が悪いみたい？こういうときは、頼りになる ',
          call_98,
          ' に開運してもらわないと！',
        ]);
        era.print([
          'ひとりでそう言いながら、',
          kita.get_colored_name(),
          ' はスタスタと走っていった。',
        ]);
      },
      () => {
        kita.say([
          call_3,
          ' がボクのトレーニングを見てるみたい。よし、ボクも負けないようにがんばる！',
        ]);
        era.print([
          '信念に火がついた ',
          kita.get_colored_name(),
          ' は、今日のトレーニングを真剣に支度し始めた。',
        ]);
      },
      () => {
        kita.say([
          '最近、',
          call_301,
          ' が新しいヘアケアを買ってるみたいだよ、',
          callname,
          ' は髪、ちゃんと手入れしてる？',
        ]);
        era.print([
          you.get_colored_name(),
          ' の髪を揉みながら、',
          kita.get_colored_name(),
          ' は太陽みたいに熱い笑顔を見せた。',
        ]);
      },
    );
    if (era.get('love:68') >= 90) {
      buffer.push(
        () => {
          kita.say([
            '最近、',
            callname,
            ' が指導してくれる声、もう手放せない気がするんだ。',
          ]);
          kita.say(
            '指示が出るたびに心臓がドキドキして、命令を果たしたら褒めてほしくなる。お祭りみたいに興奮しちゃう。',
          );
          era.print([
            kita.get_colored_name(),
            ' は指を突き、頬をほんのり赤らめた。',
          ]);
        },
        () => {
          kita.say([
            '最近、尻尾でバーベルを上げられるか挑戦してるんだ。',
            callname,
            '、一緒に試してみてくれる？',
          ]);
          era.print([
            '尻尾で ',
            you.get_colored_name(),
            ' のふくらはぎを巻いた ',
            kita.get_colored_name(),
            ' は、冗談めかして ',
            you.get_colored_name(),
            ' に言った。',
          ]);
        },
        () => {
          kita.say('やあ～ウォーミングアップしたら全身くさい汗だよ～');
          kita.say(
            '今夜もぱっとお風呂の湯に飛び込んで、中も外もきれいにするね！',
          );
          era.print([
            kita.get_colored_name(),
            ' は腕を上げて脇の匂いを嗅ぎ、濡れ光る滑らかな脇を ',
            you.get_colored_name(),
            ' の前に晒した',
          ]);
        },
        () => {
          kita.say([
            callname,
            '、今週末いっしょに雪山でトレーニングしよう！',
            '大丈夫、時間に間に合わなかったらボクがトレーナーを抱えて走って帰るから！絶対遅れないよ！',
          ]);
          era.print([
            '乗り気の ',
            kita.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' にべたべたと触り始めた。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 75) {
      buffer.push(
        () => {
          kita.say([
            '深空の黒い花火！魔法少女ゲンイロ！こういう決め台詞、',
            call_44,
            ' は好きになってくれるかな？',
          ]);
          era.print([
            kita.get_colored_name(),
            ' はくるりと回り、今年のプリキュアの変身ポーズを決めた。',
          ]);
        },
        () => {
          kita.say(
            '次のレースに向けて、倍がんばって、ボクだけの武器を鍛える！',
          );
          era.print([
            '闘志を燃やした ',
            kita.get_colored_name(),
            ' は、今日のトレーニングの支度を整えた。',
          ]);
        },
        () => {
          kita.say(
            '最近、桐生院トレーナーが「鋼の意志」を誰も習いたがらないって悩んでるみたい。',
          );
          kita.say([
            'なんでか ',
            call_67,
            ' まで真剣な顔で賛同してて、なんでだろう？',
          ]);
        },
        () => {
          kita.say([
            callname,
            ' はボクの人助け大将だよ。だからずっとありがとう、',
            callname,
            '！えへへ！',
          ]);
          era.print([
            kita.get_colored_name(),
            ' は笑いながら寄ってきて、黒い馬耳がぱたぱたと ',
            you.get_colored_name(),
            ' の首筋を叩く。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        () => {
          kita.say([
            callname,
            ' の匂いを嗅いだだけで、胸が小鹿みたいに止まらなくなるんだ。',
          ]);
          kita.say('この気持ち、いったい何なんだろう？');
          era.print([
            kita.get_colored_name(),
            ' は尻尾で ',
            you.get_colored_name(),
            ' のふくらはぎを叩き、言いようのない顔をした。',
          ]);
        },
        () => {
          kita.say([
            'ん、昨日 ',
            call_7,
            ' と併走したあと、足がちょっと痛い……',
          ]);
          kita.say([callname, '、見てくれる？']);
          era.print([
            'ブーツを脱いだ ',
            kita.get_colored_name(),
            ' は、むっちり白い小さな足を ',
            you.get_colored_name(),
            ' の前へ持ち上げた。',
          ]);
        },
        () => {
          kita.say([
            'トレセン学園にいるあいだ、',
            callname,
            ' はずっとボクをよく見てくれた！',
          ]);
          kita.say(
            'でも卒業したら、この世話の時間も終わるよね。だから卒業まで、トレーナーにちゃんとお返ししないと！',
          );
          era.print([
            'ふとした拍子に感慨の顔を見せた ',
            kita.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' のためにさらにがんばるようになった。',
          ]);
        },
      );
      if (kita.sex_code !== 1) {
        buffer.push(() => {
          kita.say([
            '最近、',
            call_67,
            '、毎晩布団を被ってベッドで変な声を出してるみたい',
          ]);
          kita.say(['胸もずいぶん大きくなったし、学校が寂しすぎるのかな？']);
          era.print([
            '純粋な顔の ',
            kita.get_colored_name(),
            ' は、',
            daiya.get_colored_name(),
            ' が来る前にスタスタと走っていった。',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
};
