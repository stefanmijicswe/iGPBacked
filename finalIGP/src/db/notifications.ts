import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const NotificationModel = mongoose.model(
  "Notification",
  NotificationSchema
);

export const createNotification = (values: Record<string, any>) =>
  new NotificationModel(values)
    .save()
    .then((notification) => notification.toObject());

export const getNotificationsForUser = (userId: string) =>
  NotificationModel.find({ userId }).sort({ createdAt: -1 }); // Sorting by date, newest first.

export const deleteNotificationById = (id: string) =>
  NotificationModel.findByIdAndDelete({ _id: id });

export const updateNotificationById = (
  id: string,
  values: Record<string, any>
) => NotificationModel.findByIdAndUpdate(id, values);
