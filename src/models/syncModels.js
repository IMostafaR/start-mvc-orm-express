import { sequelize } from "../config/connection.js";
import { Note } from "./note.js";
import { User } from "./user.js";

export default (async () => {
  try {
    await sequelize.sync({ force: false, alter: true });
    console.log("Models synced successfully");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
})();
