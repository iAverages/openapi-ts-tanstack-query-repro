import { createClient } from "@hey-api/openapi-ts";

createClient({
  input: "https://get.heyapi.dev/hey-api/backend",
  output: "src/client",
  plugins: ["@hey-api/client-fetch", "@tanstack/solid-query"],
});
