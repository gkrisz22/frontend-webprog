import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    const turak = [];

    turak.push({
        helyszin: "Tisza-tó",
        datum: "2025-10-10"
    });

    turak.push({
        helyszin: "Tisza folyó",
        datum: "2025-05-30"
    });

    res.send(turak);
});

export default router;