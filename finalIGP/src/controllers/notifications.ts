import express from "express";
import { getNotificationsForUser, createNotification, deleteNotificationById } from "../db/notifications";

// Fetch all notifications for a user
export const getUserNotifications = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userId = req.params.id;
    
    const notifications = await getNotificationsForUser(userId);
    return res.status(200).json(notifications);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// Create a new notification for a user
export const addNotification = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.sendStatus(400).send("Both userId and message are required");
    }

    const notification = await createNotification({ userId, message });
    return res.status(201).json(notification);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// Delete a notification by its ID
export const deleteNotification = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    
    const deletedNotification = await deleteNotificationById(id);
    return res.json(deletedNotification);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
