export interface Provider {
  id: string;
  name: string;
  baseUrl: string;
  defaultModel: string;
  /** Most free tiers still want a key; a handful work without one. */
  needsKey: boolean;
  /** Short human note surfaced in the UI (e.g. "free 1M token tier"). */
  note: string;
}

/** OpenAI-compatible free / low-cost providers the IDE knows about out of the box. */
export const PROVIDERS: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    baseUrl: "https://api.openai.com/v1",
    defaultModel: "gpt-4o-mini",
    needsKey: true,
    note: "Official API (paid).",
  },
  {
    id: "nvcf",
    name: "NVIDIA NIM · Nemotron",
    baseUrl: "https://integrate.api.nvidia.com/v1",
    defaultModel: "nvidia/llama-3.1-nemotron-70b-instruct",
    needsKey: true,
    note: "Free credits for Nemotron on your NVIDIA account.",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "meta-llama/llama-3.3-70b-instruct:free",
    needsKey: true,
    note: "Many :free models — key optional for some.",
  },
  {
    id: "groq",
    name: "Groq",
    baseUrl: "https://api.groq.com/openai/v1",
    defaultModel: "llama-3.3-70b-versatile",
    needsKey: true,
    note: "Free tier with a Groq API key.",
  },
  {
    id: "dashscope",
    name: "Alibaba · Ling / Qwen",
    baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    defaultModel: "qwen3-32b",
    needsKey: true,
    note: "DashScope free 1M-token experimental tier.",
  },
  {
    id: "moonshot",
    name: "Moonshot · Kimi",
    baseUrl: "https://api.moonshot.cn/v1",
    defaultModel: "moonshot-v1-8k",
    needsKey: true,
    note: "Free sign-up credits.",
  },
  {
    id: "together",
    name: "Together AI",
    baseUrl: "https://api.together.xyz/v1",
    defaultModel: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
    needsKey: true,
    note: "Free models with a key.",
  },
  {
    id: "deepinfra",
    name: "DeepInfra",
    baseUrl: "https://api.deepinfra.com/v1/openai",
    defaultModel: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
    needsKey: true,
    note: "Free tier with a key; some models keyless.",
  },
];

export function providerById(id: string | undefined | null): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}
