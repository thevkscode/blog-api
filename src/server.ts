import express from "express";
import bodyParser from "body-parser";
import createRouter from "./routers/createRouter";
import updateRouter from "./routers/updateRouter";
import getRouter from "./routers/getRouter";
import deleteRouter from "./routers/deleteRouter";
const app = express();
const port: number = 3000;
app.use(bodyParser.json());
app.use("/api/posts/create", createRouter);
app.use("/api/posts/update", updateRouter);
app.use("/api/posts/fetch", getRouter);
app.use("/api/posts/delete", deleteRouter);
app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});
