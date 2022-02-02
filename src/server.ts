import express, { Request, Response } from "express";

const app = express();

app.get("/users", (req: Request, res: Response) => {
  res.send("route users");
});

app.get("/", (req: Request, res: Response) => {
  res.send("API");
});

app.listen(3000, () => console.log("Server online in Port: 3000!"));
