import { Note } from "../../models/note.js";

export const isOwner = async (req, res, next) => {
  const { id, userId } = req.body;

  try {
    const data = await Note.findOne({
      where: {
        id,
        user_id: userId,
      },
    });

    if (!data) {
      return res.json({
        status: "failed",
        message: "Note not found or not owned by the user",
      });
    }
  } catch (error) {
    return res.json({
      status: "error",
      message: "server error",
      error,
    });
  }
  next();
};
