import * as Redis from "redis";
import { createNotification } from "./notifications";

const CHANNEL_NAME = "notifications";

const redisClient = Redis.createClient({
  url: "redis://redis:6379",
});

redisClient.on("connect", () => {
  console.log("Connected to Redis from Auth Service");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

export const initializeRedisSubscription = () => {
  // Subscribe to the channel
  redisClient.subscribe(CHANNEL_NAME, (err) => {
    if (err) {
      console.error('Failed to subscribe to', CHANNEL_NAME, err);
      return;
    }
  });

  // Listen for messages on the channel
  redisClient.on("message", async (channel, message) => {
    if (channel === CHANNEL_NAME) {
      try {
        const notificationData = JSON.parse(message);
        await createNotification(notificationData);
        console.log("Received and stored notification:", notificationData);
      } catch (error) {
        console.error("Error processing notification:", error);
      }
    }
  });
};
