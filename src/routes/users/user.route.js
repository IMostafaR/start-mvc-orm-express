import express from "express";
import {
  allUsers,
  deleteUser,
  idsList,
  oldestUsers,
  searchAgeRange,
  searchNameAndAge,
  signIn,
  signUp,
  updateUser,
} from "../../controllers/users/user.controller.js";
import { isEmailExist } from "../../middlewares/users/email.middleware.js";
import { isIdExist } from "../../middlewares/users/id.middleware.js";

const path = "/users";

export const userRouter = express.Router();

// -----------------------------------
// Sign up
userRouter.post(`${path}/signup`, isEmailExist, signUp);

// -----------------------------------
// Sign in
userRouter.get(`${path}/signin`, signIn);

// -----------------------------------
// update user
userRouter.put(path, isIdExist, updateUser);

// -----------------------------------
// delete user
userRouter.delete(path, isIdExist, deleteUser);

// -----------------------------------
// search for user where his name start with "a" and age less than 30
userRouter.get(`${path}/likelt`, searchNameAndAge);

// -----------------------------------
// search for user where his age is between 20 and 30
userRouter.get(`${path}/age`, searchAgeRange);

// -----------------------------------
// get the 3 oldest users
userRouter.get(`${path}/oldest`, oldestUsers);

// -----------------------------------
// search for users by list of ids
userRouter.get(`${path}/ids`, idsList);

// -----------------------------------
// Get all users
userRouter.get(path, allUsers);
