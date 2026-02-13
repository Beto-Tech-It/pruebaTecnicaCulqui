import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://restful-booker.herokuapp.com",
    env: {
      username: "admin",
      password: "password123"
    }
  },
});
