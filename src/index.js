import express from "express";
import productsRouter from "./routes/product.routes.js";

const app = express();

app.use(express.json())
app.use("/products", productsRouter);

app.listen(3002, () => {
  console.log("server is running on port 3002");
});
