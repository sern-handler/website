import { GITHUB_URL } from '~/utils/consts.ts';
import { $ } from "bun";

await $`rm -rf sern-handler && git clone ${GITHUB_URL}/handler sern-handler && cd sern-handler && bun install`;
