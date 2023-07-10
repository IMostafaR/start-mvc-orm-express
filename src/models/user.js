import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(150),
  },
  password: {
    type: DataTypes.STRING(50),
  },
  age: {
    type: DataTypes.INTEGER,
  },
});
