import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";

const port = Number(process.env.API_PORT) || 4000;

const server = createServer({
  port,
  schema,
});

server.start().then(() => {
  console.log(
    `๐ ๐งจ your server GraphQL is ready at http://localhost:${port}/graphql`
  );
});
