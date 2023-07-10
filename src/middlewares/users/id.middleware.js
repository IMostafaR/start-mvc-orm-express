import { User } from "../../models/user.js";

export const isIdExist = async (req, res, next) => {
  const { id } = req.body;

  try {
    let [data] = await User.findAll({
      where: {
        id,
      },
    });

    if (!data) {
      return res.json({
        status: "failed",
        message: "invalid user id",
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
