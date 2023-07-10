import express from "express";
import { isSignedIn } from "../../middlewares/notes/signIn.middleware.js";
import {
  addNote,
  allNoteWithOwners,
  allNotes,
  deleteNote,
  updateNote,
} from "../../controllers/notes/note.controller.js";
import { isUserIdExist } from "../../middlewares/notes/userId.middleware.js";
import { isOwner } from "../../middlewares/notes/owner.middleware.js";

const path = "/notes";

export const noteRouter = express.Router();

// -----------------------------------
// add note
noteRouter.post(path, isSignedIn, isUserIdExist, addNote);

// -----------------------------------
// delete note
noteRouter.delete(path, isSignedIn, isUserIdExist, isOwner, deleteNote);

// -----------------------------------
// update note
noteRouter.put(path, isSignedIn, isUserIdExist, isOwner, updateNote);

// -----------------------------------
// Get all notes
noteRouter.get(path, allNotes);

// -----------------------------------
// Get all notes with owners
noteRouter.get(`${path}/owners`, allNoteWithOwners);
