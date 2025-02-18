import { Router } from "express";

import roundController from "../controller/roundController.js";
import teamController from "../controller/teamController.js";

const router = Router();

router.get("/api/v1/status", (req, res) => {
	return res.status(200).send("HTTP server running!!!");
});

/**team route*/
router.get("/api/v1/team", teamController.findAll);
router.post("/api/v1/team/register", teamController.create);
router.put("/api/v1/team/:id", teamController.put);
router.delete("/api/v1/team/:id", teamController.deleted);

/**round route*/
router.get("/api/v1/round", roundController.findAll);
router.post("/api/v1/round/register", roundController.create);
router.put("/api/v1/round/:id", roundController.put);
router.delete("/api/v1/round/:id", roundController.deleted);

export default router;
