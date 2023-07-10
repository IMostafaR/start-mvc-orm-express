import express from "express";
import models from "./src/models/syncModels.js";
import { userRouter } from "./src/routes/users/user.route.js";
import { noteRouter } from "./src/routes/notes/note.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(userRouter);
app.use(noteRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
