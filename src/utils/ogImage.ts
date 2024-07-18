import type { GetStaticPathsOptions, GetStaticPathsResult } from "astro";
import { getStaticPaths } from "~/pages/open-graph/[...path]";

const routes = (await getStaticPaths(
  {} as GetStaticPathsOptions,
)) as GetStaticPathsResult;

const paths = new Set(routes.map(({ params }) => params.path));

export const getOgImage = (path: string, isFallback: boolean) => {
  let imagePath = path.replace(/^\//, "").replace(/\/$/, "") + ".webp";
  if (isFallback) imagePath = "en" + imagePath.slice(imagePath.indexOf("/"));

  if (paths.has(imagePath)) return "/open-graph/" + imagePath;
};
