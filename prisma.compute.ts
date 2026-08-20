import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "prisma_test",
    framework: "nestjs",
    httpPort: 3000,
    env: ".env",
  },
});
