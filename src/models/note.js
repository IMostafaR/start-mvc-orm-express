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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

Note.belongsTo(User, {
  foreignKey: "user_id",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});
