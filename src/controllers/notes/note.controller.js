import { Note } from "../../models/note.js";
import { User } from "../../models/user.js";

// -----------------------------------
// add note

export const addNote = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const data = await Note.create({ title, content, user_id: userId });

    if (data) {
      return res.json({
        status: "success",
        message: "Note added successfully",
        data,
      });
    }
    return res.json({ status: "failed", message: "Failed to add note" });
  } catch (error) {
    return res.json({
      status: "error",
      message: "server error",
      error,
    });
  }
};

// -----------------------------------
// delete note

export const deleteNote = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await Note.destroy({
      where: {
        id,
      },
    });

    if (data) {
      return res.json({
        status: "success",
        message: "user's note deleted successfully",
      });
    }
    return res.json({ status: "failed", message: "no note has been deleted" });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// update user

export const updateNote = async (req, res) => {
  try {
    const { id, title, content } = req.body;
    const updates = {};

    if (title) {
      updates.title = title;
    }
    if (content) {
      updates.content = content;
    }

    const [data] = await Note.update(updates, {
      where: {
        id,
      },
    });

    if (data) {
      return res.json({
        status: "success",
        message: "User's note updated successfully",
        updates,
      });
    }
    return res.json({
      status: "failed",
      message: "there's no inputs to be updated",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// Get all notes
export const allNotes = async (_, res) => {
  try {
    const data = await Note.findAll();

    return res.json({ status: "success", data });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// get all notes with their owners information
export const allNoteWithOwners = async (_, res) => {
  try {
    const data = await Note.findAll({
      include: User,
    });
    return res.json({ status: "success", data });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};
