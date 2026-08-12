import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { load } from "js-yaml";
import { fileURLToPath } from "node:url";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

export async function resolveNestJsOpenApi<T>(): Promise<T> {
  const yamlFile = await readFile(
    join(__dirname, "..", "..", "openapi.yaml"),
    "utf8",
  );
  const yaml = load(yamlFile);
  return yaml as T;
}
