import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { load } from "js-yaml";
import { fileURLToPath } from "node:url";
import { type OpenAPIObject } from "@nestjs/swagger";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

export async function resolveNestJsOpenApi(
  serverUrl: string,
): Promise<OpenAPIObject> {
  const yamlFile = await readFile(
    join(__dirname, "..", "..", "openapi.yaml"),
    "utf8",
  );
  const yaml = load(yamlFile);
  const document = yaml as OpenAPIObject;
  if (!document.servers) document.servers = [];
  document.servers.push({ url: serverUrl });
  return document;
}
