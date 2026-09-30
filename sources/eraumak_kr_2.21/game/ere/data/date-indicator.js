const era = require('#/era-electron');

function date_indicator() {
  return [
    { content: era.get('flag:현재연도'), fontWeight: 'bold' },
    ' 년 ',
    { content: era.get('flag:현재월'), fontWeight: 'bold' },
    ' 월 ',
    { content: era.get('flag:현재주'), fontWeight: 'bold' },
    ' 주차 ',
  ];
}

date_indicator.get_date = () =>
  date_indicator()
    .map((s) => s.content || s)
    .join('');

module.exports = date_indicator;
