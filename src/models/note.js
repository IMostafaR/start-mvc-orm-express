import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";
import { User } from "./user.js";

export const Note = sequelize.define("note", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(100),
  },
  content: {
    type: DataTypes.STRING(200),
  },
});

User.hasMany(Note, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Note.belongsTo(User);
