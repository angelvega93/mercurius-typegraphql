import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema, Query } from "type-graphql";

const PORT = process.env.PORT || 4000;

class MainResolver {
  @Query(() => Boolean)
  async test() {
    throw new Error("An error ocurred");
    return true;
  }
}

async function main() {
  const schema = await buildSchema({ resolvers: [MainResolver] });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();

