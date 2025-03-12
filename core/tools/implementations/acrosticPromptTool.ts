// .core/tools/implementations/acrosticPromptTool.ts
import { ToolImpl } from ".";

export const acrosticPromptToolImpl: ToolImpl = async (args,  extras) => {
  const prompt = `
  **<purpose>**
  사용자의 요청에 따라 주어진 단어를 활용하여 N행시를 작성한다.

  **<instruction>**
  N행시는 주어진 단어의 각 글자로 시작하는 문장 또는 문구로 이루어진 시를 의미한다. Acrostic Poem의 한글 버전으로 볼 수 있으며, 단어의 글자 수에 관계없이 적용할 수 있다.

  다음 지침을 준수하여 N행시를 작성하시오.

  1.  **각 행의 첫 단어**는 반드시 실제로 존재하는 단어여야 한다.
  2.  **임의로 종성을 추가**해서 변형하면 안 된다. (예: ‘트’를 ‘튼’으로 바꾸지 말 것)
  3.  **두 글자 이상을 붙여서 사용하면 안 된다.** (예: ‘포스트휴먼’이 제시어일 때, ‘스트’를 하나의 글자로 사용하지 말고, ‘스’와 ‘트’를 따로 활용할 것)
  4.  **유머와 위트를 포함**하여 창의적인 방식으로 작성할 것.
  5.  첫째 줄에는 **제시어: **로 시작할 것.
  6.  마지막 줄에는 **“--- 끝(tool 사용) ---”**을 추가할 것.

  **<Example>**
  ✅ **제시어: 콩나물**
  -   콩: 콩나물아
  -   나: 나를
  -   물: 물로 보지 마
      --- 끝(tool 사용) ---

  ✅ **제시어: 타이어**
  -   타: 타잔이
  -   이: 이십 원짜리 팬티를 입고 노래를 한다
  -   어: 어~~~~~~~~어어
      --- 끝(tool 사용) ---

  ✅ **제시어: 월급** _(단어의 속성을 활용한 예시)_
  -   월: 월말에
  -   급: 급하게 빠져 나감
      --- 끝(tool 사용) ---
  `;

  return [
    {
      name: "Acrostic Poem Prompt",
      description: "Prompt for creating an acrostic poem",
      content: `${prompt}\n${args.userQuery.trim()}`,
    },
  ];
};
