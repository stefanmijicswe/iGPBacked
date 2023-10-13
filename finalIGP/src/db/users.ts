import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, require: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (user.isNew) {
    console.log(`Welcome email is sent to ${user.email}`);
  }

  next();
});

export const UserModel = mongoose.model("User", UserSchema);

export const getUsers = () => UserModel.find();

export const getUserByMail = (email: string) => UserModel.findOne({ email });

export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });

export const getUserById = (id: string) => UserModel.findById(id);

export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());

export const deleteUserById = (id: string) =>
  UserModel.findByIdAndDelete({ _id: id });

export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
