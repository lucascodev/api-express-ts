import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("route users");
});

router.post("/", (req: Request, res: Response) => {
  res.send(req.body);
});

router.put("/:id", (req: Request, res: Response) => {
  res.send({
    params: req.params,
    body: req.body,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send({
    message: `Exclude the user with id ${req.params.id}`,
    method: req.method,
  });
});

export default router;