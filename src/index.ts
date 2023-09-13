import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
const path = "src/ignored/mockResponses.json";
const file = Bun.file(path);
const aboutDetails = "";
const app = new Elysia()
  .use(cors())
  .get("/", () => "MockServer Running")
  .get("/alerts", () => file)
  .get("/about", () => aboutDetails)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
