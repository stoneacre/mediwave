import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '85e8a61ed1fdf19af65d46eea931997ffb2d9d40', queries,  });
export default client;
  