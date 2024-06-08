import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import tailwind from "@astrojs/tailwind";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";
import lunaria from "@lunariajs/starlight";
import { GITHUB_URL, DISCORD_URL } from "./src/utils/consts";
import starlightLinksValidator from 'starlight-links-validator';

const [typeDocV3, typeDocV3Sidebar] = createStarlightTypeDocPlugin();
const [typeDocV4, typeDocV4Sidebar] = createStarlightTypeDocPlugin();

export default defineConfig({
  // TODO: Change this whenever site is deployed to `sern.dev`
  site: 'https:/deploy-preview-66--sern-docs.netlify.app',
  integrations: [
    starlight({
      title: "sern",
      lastUpdated: true,
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
        },
        tr: {
          label: "Türkçe",
        },
      },
      social: {
        github: GITHUB_URL,
        discord: DISCORD_URL,
      },
      editLink: {
        baseUrl: GITHUB_URL + "/website/edit/main/",
      },
      components: {
        Head: "~/overrides/Head.astro",
        SiteTitle: "~/overrides/SiteTitle.astro",
        ThemeSelect: "~/overrides/ThemeSelect.astro",
        Sidebar: "~/overrides/Sidebar.astro",
        FallbackContentNotice: "~/overrides/FallbackContentNotice.astro",
      },
      logo: {
        src: "~/assets/logo/navbar-icon.png",
        replacesTitle: true,
      },
      customCss: ["~/styles/global.css"],
      sidebar: [
        {
          label: "v3",
          items: [
            {
              ...typeDocV3Sidebar,
              badge: { text: "Generated" },
            },
            {
              label: "CLI",
              autogenerate: { directory: "v3/cli" },
            },
            {
              label: "Guide",
              items: [
                {
                  label: "Getting Started",
                  autogenerate: { directory: "v3/guide/getting-started" },
                },
                {
                  label: "Walkthrough",
                  autogenerate: { directory: "v3/guide/walkthrough" },
                },
              ],
            },
          ],
        },
        {
          label: "v4",
          items: [
            {
              ...typeDocV4Sidebar,
              badge: { text: "Generated" },
            },
            {
              label: "CLI",
              autogenerate: { directory: "v4/cli" },
            },
            {
              label: "Reference",
              autogenerate: { directory: "v4/reference" },
            },
            {
              label: "Snippets",
              autogenerate: { directory: "v4/snippets" },
            },
            {
              label: "Transition",
              autogenerate: { directory: "v4/transition" },
            },
            {
              label: "Tools",
              autogenerate: { directory: "v4/tools" },
            },
          ],
        },
      ],
      plugins: [
        starlightBlog({
          authors: {
            jacoobes: {
              name: "jacoobes",
              title: "Head Dev",
              url: "https://github.com/jacoobes",
              picture: "https://github.com/jacoobes.png",
            },
            ethan: {
              name: "Sr Izan",
              title: "Head Dev",
              url: "https://github.com/SrIzan10",
              picture: "https://github.com/SrIzan10.png",
            },
            sern: {
              name: "sern Team",
              url: GITHUB_URL,
              picture: "https://github.com/sernbot.png",
            },
            murtatrxx: {
              name: "Murtatrxx",
              title: "Head Dev",
              url: "https://github.com/Murtatrxx",
              picture: "https://github.com/Murtatrxx.png",
            },
            duro: {
              name: "Duro",
              title: "Developer",
              url: "https://github.com/DuroCodes",
              picture: "https://github.com/DuroCodes.png",
            },
          },
        }),
        typeDocV3({
          tsconfig: './sern-handler-v3/tsconfig.json',
          entryPoints: ['./sern-handler-v3/src/index.ts'],
          output: 'v3/api',
          sidebar: { collapsed: true },
        }),
        typeDocV4({
          tsconfig: './sern-handler-v4/tsconfig.json',
          entryPoints: ['./sern-handler-v4/src/index.ts'],
          output: 'v4/api',
          sidebar: { collapsed: true },
        }),
        lunaria(),
        starlightLinksValidator({
          exclude: ['/plugins', '?(../../../..?(/../..))/v{3,4}/api/**/*'],
        }),
      ],
    }),
    tailwind(),
  ],
});
