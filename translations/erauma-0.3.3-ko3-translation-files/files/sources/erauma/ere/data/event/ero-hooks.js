// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/data/event/ero-hooks.js
// 대상 함수/속성: $statement:5
const { action_tags, actions } = require('#/data/event/ero-actions');

/** @type {EroHookTag[]} */
const ero_tagged_hooks = [];
/** @type {Record<string,boolean>} */
const ero_derive_check = {};

const current = new Date().getTime();

[
  require('#/data/event/tag-actions/tag-communications'),
  require('#/data/event/tag-actions/tag-pettings'),
  require('#/data/event/tag-actions/tag-fuckings'),
  require('#/data/event/tag-actions/tag-sm'),
  require('#/data/event/tag-actions/tag-orgy'),
  require('#/data/event/tag-actions/tag-items'),
].forEach((f) => f(ero_tagged_hooks, ero_derive_check));

console.log(
  '调教指令注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * 色色事件用的钩子，表明是哪个调教行为，在调用口上脚本时会作为参数传入<br/>
 * 也包括和色色相关的事件，包括发现怀孕或者孩子出生<br/>
 * 如果搞不明白可以看钩子的注释、ero-common.js 等通用口上和 ero-result.js 这个通用处理流程
 */
module.exports = {
  ero_derive_check,
  ero_hook_tags: action_tags,
  ero_hooks: actions,
  ero_tagged_hooks,
};
