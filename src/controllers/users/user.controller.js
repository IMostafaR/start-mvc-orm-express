import { Op } from "sequelize";
import { User } from "../../models/user.js";

// -----------------------------------
// Sign up
export const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    const data = await User.create({ name, email, password, age });

    if (data) {
      return res.json({
        status: "success",
        message: "User created successfully",
        data,
      });
    }
    return res.json({ status: "failed", message: "Failed to create user" });
  } catch (error) {
    return res.json({
      status: "error",
      message: "server error",
      error,
    });
  }
};

// -----------------------------------
// Sign in
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [data] = await User.findAll({
      where: {
        email,
        password,
      },
    });

    if (data) {
      return res.json({
        status: "success",
        message: "User signedIn successfully",
        id: data.id,
      });
    }

    return res.json({
      status: "failed",
      message: "incorrect email or password",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// update user

export const updateUser = async (req, res) => {
  try {
    const { id, name, email, password, age } = req.body;
    const updates = {};

    if (name) {
      updates.name = name;
    }
    if (email) {
      updates.email = email;
    }
    if (password) {
      updates.password = password;
    }
    if (age) {
      updates.age = age;
    }

    const [data] = await User.update(updates, {
      where: {
        id,
      },
    });

    if (data) {
      return res.json({
        status: "success",
        message: "User's data updated successfully",
        updates,
      });
    }
    return res.json({
      status: "failed",
      message: "there's no data to be updated",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// delete users
export const deleteUser = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await User.destroy({
      where: {
        id,
      },
    });

    if (data) {
      return res.json({
        status: "success",
        message: "user's data deleted successfully",
      });
    }
    return res.json({ status: "failed", message: "no user has been deleted" });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// search for user where his name start with "a" and age less than 30
export const searchNameAndAge = async (req, res) => {
  const { letter, age } = req.body;

  try {
    const data = await User.findAll({
      where: {
        name: {
          [Op.like]: `${letter}%`,
        },
        age: {
          [Op.lt]: age,
        },
      },
    });

    if (data.length) {
      return res.json({ status: "success", data });
    }

    return res.json({
      status: "failed",
      message: "no matched users",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// search for user where his age is between 20 and 30

export const searchAgeRange = async (req, res) => {
  const { lowAge, highAge } = req.body;

  try {
    const data = await User.findAll({
      where: {
        age: {
          [Op.between]: [lowAge, highAge],
        },
      },
    });

    if (data.length) {
      return res.json({ status: "success", data });
    }

    return res.json({
      status: "failed",
      message: "no matched users",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// get the 3 oldest users

export const oldestUsers = async (req, res) => {
  const { limit } = req.body;
  try {
    const data = await User.findAll({
      order: [["age", "DESC"]],
      limit,
    });

    if (data.length) {
      return res.json({ status: "success", data });
    }

    return res.json({
      status: "failed",
      message: "no matched users",
    });
  } catch (error) {}
  return res.json({ status: "error", message: "server error", error });
};

// -----------------------------------
// search for users by list of ids

export const idsList = async (req, res) => {
  const ids = req.body;

  try {
    const data = await User.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });

    if (data.length) {
      return res.json({ status: "success", data });
    }

    return res.json({
      status: "failed",
      message: "no matched users",
    });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};

// -----------------------------------
// Get all users
export const allUsers = async (_, res) => {
  try {
    const data = await User.findAll();

    return res.json({ status: "success", data });
  } catch (error) {
    return res.json({ status: "error", message: "server error", error });
  }
};
