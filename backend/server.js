import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mailRoute from "./routes/mail.route.js";
import path from "path";

dotenv.config();
const app = express();

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use("/api/sendmail", mailRoute);
app.listen(PORT, () => {
  console.log("Seerver Started now");
});
