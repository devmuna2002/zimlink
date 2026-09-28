import "dotenv/config";
import { providerById } from "./providers.js";

export interface Config {
  apiKey: string;
  model: string;
  cwd: string;
  providerId: string;
  baseUrl: string;
}

export function loadConfig(overrides: { model?: string; cwd?: string } = {}): Config {
  const apiKey = process.env.OPENAI_API_KEY ?? "";
  const providerId = process.env.ZIMLINK_PROVIDER ?? "openai";
  const provider = providerById(providerId);
  const baseUrl = process.env.ZIMLINK_BASE_URL || (provider ? provider.baseUrl : "https://api.openai.com/v1");
  const model = overrides.model ?? process.env.OPENAI_MODEL ?? (provider ? provider.defaultModel : "gpt-4o-mini");
  return {
    apiKey,
    model,
    cwd: overrides.cwd ?? process.cwd(),
    providerId,
    baseUrl,
  };
}
