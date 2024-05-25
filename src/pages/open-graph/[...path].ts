import { OGImageRoute } from "astro-og-canvas";
import { allPages } from "~/content";

const pages = Object.fromEntries(
  allPages.map(({ id, slug, data }) => [id, { slug, data }]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "path",
  pages,
  getSlug: (path) =>
    `${path.replace(/^\/src\/pages\//, "").replace(/\.[^.]*$/, "")}.webp`.replace(
      /\/index\.webp$/,
      ".webp",
    ),
  getImageOptions: async (_, { data }: (typeof pages)[string]) => ({
    format: "WEBP",
    quality: 90,
    title: data.title,
    description: data.description,
    logo: {
      path: "./src/pages/open-graph/_assets/logo.png",
      size: [450],
    },
    border: {
      color: [233, 186, 194],
      width: 32,
    },
    padding: 80,
    bgGradient: [[23, 24, 28]],
    font: {
      title: {
        size: 72,
        lineHeight: 1.2,
        families: ["Satoshi", "sans-serif"],
        weight: "Medium",
        color: [233, 186, 194],
      },
      description: {
        size: 42,
        lineHeight: 1.2,
        families: ["Inter", "sans-serif"],
        weight: "Normal",
        color: [255, 255, 255],
      },
    },
    fonts: [
      "./src/pages/open-graph/_assets/fonts/satoshi-black.otf",
      "./src/pages/open-graph/_assets/fonts/inter-400-normal.ttf",
    ],
  }),
});
