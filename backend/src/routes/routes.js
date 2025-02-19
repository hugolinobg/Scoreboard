import { Router } from "express";

import roundController from "../controller/roundController.js";
import teamController from "../controller/teamController.js";

const router = Router();

router.get("/status", (req, res) => {
	return res.status(200).send("HTTP server running!!!");
});

/**team route*/
router.get("/team", teamController.findAll);
router.post("/team/register", teamController.create);
router.put("/team/:id", teamController.put);
router.delete("/team/:id", teamController.deleted);

/**round route*/
router.get("/round", roundController.findAll);
router.post("/round/register", roundController.create);
router.put("/round/:id", roundController.put);
router.delete("/round/:id", roundController.deleted);

export default router;
