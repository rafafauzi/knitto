import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// const result = await pool.query("SELECT * FROM customers");
// const row = result[0];
// console.log(row);

// const result = await pool.query("SELECT * FROM products");
// const row = result[0][0];
// console.log(row);

// async function getCustomers() {
//   const [rows] = await pool.query(`
//     SELECT DISTINCT c.*
//     FROM customers c
//     JOIN orders o ON c.customerNumber = o.customerNumber
//     JOIN orderdetails od ON o.orderNumber = od.orderNumber
//     JOIN products p ON od.productCode = p.productCode
//     WHERE p.productLine = 'Classic Cars'
//   `);
//   return rows;
// }

// const customers = await getCustomers();
// console.log(customers);

// async function getOrders() {
//   const [rows] = await pool.query("SELECT * FROM orders");
//   return rows;
// }

// const orders = await getOrders();
// console.log(orders);

// async function getCustomersWithClassicCarsOrders() {
//   const query = `SELECT o.customerNumber, COUNT(od.productCode) AS product_count
//                  FROM orders o
//                  JOIN orderdetails od ON o.orderNumber = od.orderNumber
//                  JOIN products p ON od.productCode = p.productCode
//                  WHERE p.productLine = 'Classic Cars'
//                  GROUP BY o.customerNumber
//                  HAVING product_count > 23`;
//   const [rows] = await pool.query(query);
//   return rows.map((row) => row.customerNumber);
// }

export async function getCustomersWithClassicCarsOrders() {
  const query = `SELECT c.customerNumber, c.customerName, COUNT(od.productCode) AS product_count
                 FROM customers c
                 JOIN orders o ON c.customerNumber = o.customerNumber
                 JOIN orderdetails od ON o.orderNumber = od.orderNumber
                 JOIN products p ON od.productCode = p.productCode
                 WHERE p.productLine = 'Classic Cars'
                 GROUP BY c.customerNumber
                 HAVING product_count > 23`;
  const [rows] = await pool.query(query);
  return rows;
}

// const customers = await getCustomersWithClassicCarsOrders();
// console.log(customers);
