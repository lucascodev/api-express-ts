import express from "express";

const app = express();

app.get("/users", (req: any, res: any) => {
  res.send("route users");
});

app.listen(3000, () => console.log("Server online in Port: 3000!"));
