import "reflect-metadata";
import { buildSchema, Query } from "type-graphql";
import fastify from "fastify";
import mercurius from "mercurius";

class MainResolver {
  @Query(() => Boolean)
  async test() {
    throw new Error("An error ocurred");
    return true;
  }
}

async function main(){
  const schema = await buildSchema({ resolvers: [MainResolver] });
  const app = fastify();

  app.register(mercurius, {
    graphiql: true,
    schema,
  });

  app.listen(3000);
}

main();