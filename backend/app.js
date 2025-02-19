import Cors from "cors";
import Express from "express";
import router from "./src/routes/routes.js";

const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Cors());
app.use("/api/v1", router);

app.listen(port, () => {
	console.log(`HTTP server running port: ${port}`);
});
