import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("assignment_4", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
