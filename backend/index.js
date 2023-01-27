import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import athleteRoutes from "./routes/athlete.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/athlete", athleteRoutes);

mongoose.set("strictQuery", true);


const PORT = process.env.PORT 

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))
    )
    .catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false);
