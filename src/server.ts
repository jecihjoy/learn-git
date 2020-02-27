import express from "express";
import { defaultRouter } from "./routes/defaultRoute";

const port = 3000;

let app: express.Application;

app = express();

app.use(defaultRouter);

app.listen(port, () => {
    // console.log(`Server running at http://localhost:${port}`);
})

export default app;