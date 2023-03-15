import express from "express";

import { getCustomersWithClassicCarsOrders } from "./database.js";

const app = express();

app.get("/customers/classic-cars-orders", async (req, res) => {
  const customersNumber = await getCustomersWithClassicCarsOrders();
  res.send(customersNumber);
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
