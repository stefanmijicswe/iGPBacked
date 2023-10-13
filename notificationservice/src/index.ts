import express from "express";
import * as Redis from 'redis';


const PORT = 3001;
const app = express();

app.use(express.json());

const redisClient = Redis.createClient({
  url: "redis://redis:6379",
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

app.post("/send-notification", (req, res) => {
  const { userId, message } = req.body;

  if (!userId || !message) {
    return res
      .status(400)
      .send("userId and message are required in the request body.");
  }

  redisClient.publish("notifications", JSON.stringify({ userId, message }));

  res.send("Notification sent!");
});

app.listen(PORT, () => {
  console.log(`Notification service started on port ${PORT}`);
});
