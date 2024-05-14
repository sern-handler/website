import { $ } from "bun";

await $`rm -rf sern-handler && git clone https://github.com/sern-handler/handler sern-handler && cd sern-handler && bun install`;