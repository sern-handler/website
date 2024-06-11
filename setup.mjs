import { $ } from "bun";
import { GITHUB_URL } from '~/utils/consts.ts';
import { existsSync } from 'node:fs';
import { copyFile } from "node:fs/promises";

const gits = [
  {
    name: 'sern-handler-v3'
  },
  {
    name: 'sern-handler-v4',
    branch: 'feat/v4',
  },
];

for (const git of gits) {
  await $`rm -rf ${git.name}`;
  await $`git clone -b ${git.branch || 'main'} ${GITHUB_URL}/handler ${git.name}`;
  await $`cd ${git.name} && bun install`;
}

const tools = ['poster', 'ioc', 'builder', 'localizer', 'publisher'];
await $`bunx --yes degit --force sern-handler/tools/packages tools/`;

await Promise.all(tools.map((tool) => {
  const docpage = `./tools/${tool}/index.mdx`;
  const metadata = `./tools/${tool}/metadata.json`;
  if (existsSync(docpage) && existsSync(metadata)) {
    console.log(`cp ${docpage} ./src/content/docs/v4/tools/${tool}.mdx`);
    return copyFile(docpage, `./src/content/docs/v4/tools/${tool}.mdx`);
  } else {
    console.warn(`${docpage} or ${metadata} not found for ${tool}`);
  }
}));



