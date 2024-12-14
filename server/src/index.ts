import dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { refactorEntryGate } from "./gates/refactor/refactorEntryGate";

const envFile = `./config/.env`;
dotenv.config({ path: envFile });

const app = express();
app.use(bodyParser.json());

app.post(
  "/api/refactor",
  async (req: Request, res: Response) => {
    const { code } = req.body;
    if (!code) {
      res.status(400).json({ error: "Code snippet is required." });
      return;
    }

    try {
      const response = await refactorEntryGate(code);
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        message: "An error occurred while processing the request.",
        error: error,
      });
    }
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
