import { z } from "astro/zod";

export type Result<Ok, Err> =
  | { ok: true; value: Ok }
  | { ok: false; error: Err };
export const Ok = <Ok>(value: Ok) => ({ ok: true, value } as const);
export const Err = <Err>(error: Err) => ({ ok: false, error } as const);

export type Contributor = z.infer<typeof ContributorSchema>;
export const ContributorSchema = z.object({
  id: z.string(),
  name: z.string(),
  roles: z.array(z.string()),
  isAdmin: z.boolean(),
  isCore: z.boolean(),
  isBacker: z.boolean(),
  since: z.string(),
  image: z.string(),
  description: z.string().nullable(),
  collectiveSlug: z.string(),
  totalAmountDonated: z.number(),
  type: z.string(),
  publicMessage: z.string().nullable(),
  isIncognito: z.boolean(),
  __typename: z.string(),
});

export type Contributors = z.infer<typeof ContributorsSchema>;
export const ContributorsSchema = z.object({
  totalCount: z.number(),
  nodes: z.array(ContributorSchema),
  __typename: z.string(),
});

export type OpenCollectiveAccount = z.infer<typeof OpenCollectiveAccountSchema>;
export const OpenCollectiveAccountSchema = z.object({
  id: z.string(),
  currency: z.string(),
  slug: z.string(),
  contributors: ContributorsSchema,
  __typename: z.string(),
});

export type Plugin = z.infer<typeof PluginSchema>;
export const PluginSchema = z.object({
  description: z.string(),
  hash: z.string(),
  name: z.string(),
  author: z.array(z.string()),
  link: z.string().url(),
  example: z.string(),
  version: z.string(),
});
