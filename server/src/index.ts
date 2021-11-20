import path from "path";
import { createConnection } from "typeorm";
import express from "express";
// import session from "express-session";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "switched",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "/migrtions/*")],
    entities: [],
  });

  conn.runMigrations();

  const app = express();

  app.listen(4000, () => {
    console.log("--------------server started at localhost:4000--------------");
  });
};

main();
