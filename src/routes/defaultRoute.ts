import { Response, Request, Router } from "express";

const defaultRouter = Router();

defaultRouter.get("/", (req : Request, res : Response) => {
    try {
        return res
          .status(200)
          .send({ status: 200, message: "Server successfully running at port 3000" });
      } catch (error) {
        return res
          .status(500)
          .send({ status: 500, message: "Internal server error" });
      }

});

export { defaultRouter };