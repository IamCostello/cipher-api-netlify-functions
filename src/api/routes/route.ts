import { Router } from "express";
import { getMessage } from "../../services/getMessage";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: getMessage() });
});

export default router;
