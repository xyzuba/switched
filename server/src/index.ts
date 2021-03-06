import "reflect-metadata";
import path from "path";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
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
    entities: [path.join(__dirname, "/entities/*")],
  });
  conn.runMigrations();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [path.join(__dirname, "/resolvers/*.[j,t]s")],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(5000, () => {
    console.log("--------------server started at localhost:5000--------------");
  });
};

main().catch((err) => {
  console.log(err);
});
