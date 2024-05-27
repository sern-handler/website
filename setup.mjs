import { $ } from "bun";
import { GITHUB_URL } from '~/utils/consts.ts';

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
  await $`cd ${git.name} && rm -rf .git && bun install`;
}
