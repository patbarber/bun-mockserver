import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
const path = "src/ignored/mockResponses.json";
const file = Bun.file(path);
const docpath = "src/ignored/mockResponsesDocuments.json";
const docfile = Bun.file(docpath);
const membersPath = "src/ignored/mockMembersReponse.json";
const membersfile = Bun.file(membersPath);
const aboutDetails = ``;
const app = new Elysia()
  .use(cors())
  .get("/", () => "MockServer Running")
  .get("/alerts", () => file)
  .get("/about", () => aboutDetails)
  .get("/documents", () => docfile)
  .get("/members", () => membersfile)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
