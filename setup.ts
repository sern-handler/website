import { $ } from "bun";
import { GITHUB_URL } from "~/utils/consts";
import { existsSync, rm } from "node:fs";
import { copyFile } from "node:fs/promises";

interface GitItem {
  name: string;
  repo: string;
  branch?: string;
  folder?: string;
  install?: boolean;
  degit?: boolean;
}

const gits: GitItem[] = [
  {
    name: "sern-handler-v3",
    repo: "handler",
    branch: "version/v3"
  },
  {
    name: "sern-handler-v4",
    repo: "handler",
  },
  {
    name: "tools",
    repo: "tools",
    folder: "packages",
    install: false,
    degit: true,
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

  if (git.degit) {
    rm(git.name+"/.git", { recursive: true }, (err) => {
        if(err) {
            throw err;
        }
    })
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
