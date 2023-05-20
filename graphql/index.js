import { ApolloServer } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';
import context from './context.js';
import schema from '../schema.js';

// Set up Apollo Server
const server = new ApolloServer({
  schema,
  csrfPrevention: false
});


export default startServerAndCreateHandler(server, {
  context: context,
});