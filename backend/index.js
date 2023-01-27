import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import athleteRoutes from "./routes/athlete.js";

const app = express();

app.use("/athlete", athleteRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.set("strictQuery", true);

const CONNECTION_URL =
    "mongodb+srv://dbUser:dbPassword@cluster0.a5o0uzh.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5002;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))
    )
    .catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false);
// MongoDB setup
