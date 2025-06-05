import express from "express";
import { logger } from "../logger";

const router = express.Router();

router.get("/", (req, res) => {
  const turak = [];

  turak.push({
    helyszin: "Tisza-tó",
    datum: "2025-10-10",
  });

  turak.push({
    helyszin: "Tisza folyó",
    datum: "2025-05-30",
  });

  logger.info(turak);
  res.send(turak);
});

router.put("/", (req, res) => {
  const { helyszin, datum } = req.body;

  if (!helyszin || !datum) {
    logger.error("Helyszin vagy datum nem megadva");
    return res.status(400).send("Helyszin vagy datum nem megadva");
  }

  logger.info(`Új túra hozzáadva: ${helyszin}, ${datum}`);
  res.send(`Új túra hozzáadva: ${helyszin}, ${datum}`);
});

export default router;
