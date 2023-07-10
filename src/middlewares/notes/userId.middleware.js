import { User } from "../../models/user.js";

export const isUserIdExist = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const [data] = await User.findAll({
      where: {
        id: userId,
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
