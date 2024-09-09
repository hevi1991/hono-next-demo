import cron from "node-cron";

// 定时任务

cron.schedule("*/5 * * * * *", () => {
  // 定时任务逻辑
  console.log("定时任务执行了！", Date.now());
});


export default cron;