import type { z } from "astro/zod";
import { Ok, Err } from "./types";

/**
 * @param schema The Zod schema to validate the response against
 * @param error An error message to return if the response is invalid (e.g. "Failed to fetch data")
 * @param args The arguments to pass to fetch (e.g. URL, headers, etc.)
 * @returns A Result type containing either the parsed JSON or an error message (specified by the error parameter)
 *
 * @example
 * const plugins = await zodFetch(PluginSchema, "Failed to fetch plugins", "/api/plugins");
 * if (!plugins.ok) {
 *  console.error(plugins.error); // "Failed to fetch plugins"
 * }
 * console.log(plugins.value); // { description: "A plugin", hash: "123", name: "My Plugin", author: ["Me"], link: "https://example.com", example: "example" }
 */
export const zodFetch = async <TSchema extends z.Schema>(
  schema: TSchema,
  error: string,
  ...args: Parameters<typeof fetch>
) => {
  const res = await fetch(...args);

  if (!res.ok) {
    console.error(await res.text());
    return Err(error);
  }

  const json = (await res.json()) as unknown;
  const parsed = schema.safeParse(json);

  if (!parsed.success) {
    console.error(
      parsed.error.issues.map((i) => `${i.code} | ${i.message}`).join("\n"),
    );
    return Err(error);
  }

  return Ok(json as z.infer<TSchema>);
};
