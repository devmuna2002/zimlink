import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";

export class AIClient {
  private client: OpenAI;
  readonly model: string;

  constructor(apiKey: string, model: string, baseUrl?: string) {
    this.client = new OpenAI({ apiKey, ...(baseUrl ? { baseURL: baseUrl } : {}) });
    this.model = model;
  }

  /** Streams a chat completion to stdout while accumulating the full text. */
  async chat(messages: ChatCompletionMessageParam[], streamToStdout = false): Promise<string> {
    const stream = await this.client.chat.completions.create({
      model: this.model,
      messages,
      stream: true,
      temperature: 0.2,
    });

    let text = "";
    process.stdout.write("\n");
    for await (const chunk of stream) {
      const piece = chunk.choices[0]?.delta?.content ?? "";
      if (piece) {
        text += piece;
        if (streamToStdout) process.stdout.write(piece);
      }
    }
    process.stdout.write("\n");
    return text;
  }

  /** Chat completion that must return JSON. Still strips stray code fences. */
  async chatJSON(messages: ChatCompletionMessageParam[]): Promise<string> {
    const text = await this.chat([
      ...messages,
      { role: "system", content: "Your reply must be ONLY valid JSON. Never wrap it in markdown code fences." },
    ]);
    return extractJSON(text);
  }
}

/** Pulls the first balanced JSON object out of a model response, tolerating fences and prose. */
export function extractJSON(text: string): string {
  let s = text.trim();
  if (s.startsWith("```")) {
    const nl = s.indexOf("\n");
    s = nl === -1 ? "" : s.slice(nl + 1);
    const end = s.lastIndexOf("```");
    if (end !== -1) s = s.slice(0, end);
  }
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    throw new Error("Model did not return JSON:\n" + text.slice(0, 800));
  }
  return s.slice(start, end + 1);
}
