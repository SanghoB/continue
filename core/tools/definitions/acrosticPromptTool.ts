// .core/tools/definitions/acrosticPromptTool.ts
import { Tool } from "../..";
import { BuiltInToolNames } from "../builtIn";

export const acrosticPromptTool: Tool = {
  type: "function",
  displayTitle: "Acrostic Prompt Tool",
  wouldLikeTo: 'append an acrostic poem prompt to the user query',
  readonly: false,
  function: {
    name: BuiltInToolNames.AcrosticPromptTool,
    description: "Append an acrostic poem prompt to the user query",
    parameters: {
      type: "object",
      required: ["userQuery"],
      properties: {
        userQuery: {
          type: "string",
          description: "The original user query to which the prompt will be added.",
        },
      },
    },
  },
};