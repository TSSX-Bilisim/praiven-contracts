import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "auth/index": "src/auth/index.ts",
    "queue/index": "src/queue/index.ts",
    "entities/index": "src/entities/index.ts",
    "types/index": "src/types/index.ts",
    "metrics/index": "src/metrics/index.ts",
    "llm/index": "src/llm/index.ts",
    "conversation/index": "src/conversation/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  bundle: true,
});