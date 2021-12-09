import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//Components
import Connection from "./database/db.js";
import Router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
Connection();
