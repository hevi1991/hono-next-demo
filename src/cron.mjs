import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// 定时任务

cron.schedule("*/5 * * * * *", async () => {
  // 定时任务逻辑
  console.log("定时任务执行了！", Date.now());
});

cron.schedule("*/5 * * * * *", async () => {
  // 定时任务逻辑
  const count = await db.runLog.count();
  console.log("日志数：", count);
});

export default cron;
