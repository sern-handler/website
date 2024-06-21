import { $ } from "bun";
import { GITHUB_URL } from "~/utils/consts";
import { existsSync } from "node:fs";
import { copyFile } from "node:fs/promises";

interface GitItem {
  name: string;
  repo: string;
  branch?: string;
  folder?: string;
  install?: boolean;
}

const gits: GitItem[] = [
  {
    name: "sern-handler-v3",
    repo: "handler",
  },
  {
    name: "sern-handler-v4",
    repo: "handler",
    branch: "feat/v4",
  },
  {
    name: "tools",
    repo: "tools",
    folder: "packages",
    install: false,
  },
];

for (const git of gits) {
  await $`rm -rf ${git.name}`;
  await $`git clone -b ${git.branch ?? "main"} ${GITHUB_URL}/${git.repo} ${git.name}`;

  if (git.install ?? true) {
    await $`cd ${git.name} && bun install`;
  }

  if (git.folder) {
    await $`mv ${git.name}/${git.folder}/* ${git.name} && rm -rf ${git.name}/${git.folder}`;
  }
}

const tools = (await $`ls -d tools/* | grep -v .github`.text())
  .split("\n")
  .filter(
    (t) => existsSync(`${t}/index.mdx`) && existsSync(`${t}/metadata.json`),
  );

for (const tool of tools) {
  await copyFile(
    `${tool}/index.mdx`,
    `src/content/docs/v4/tools/${tool.split("/")[1]}.mdx`,
  );
}
