import path from "path";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
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

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
  });

  app.listen(5000, () => {
    console.log("--------------server started at localhost:5000--------------");
  });
};

main().catch((err) => {
  console.log(err);
});
