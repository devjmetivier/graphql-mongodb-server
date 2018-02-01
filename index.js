// import express from 'express';
// import bodyParser from 'body-parser';
// import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
// // import { express as playground } from 'graphql-playground';
// import { makeExecutableSchema } from 'graphql-tools';
// import mongoose from 'mongoose';
//
// import typeDefs from './schema/index';
// import resolvers from './resolvers';
//
// // Models
// import User from './models/User';
//
// const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
// });
//
// mongoose.connect('mongodb://localhost/test');
//
// const PORT = 3000;
//
// const app = express();
//
// app.use('/schema', bodyParser.json(), graphqlExpress({ schema, context: { User } }));
//
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/schema' }));
//
// const server = app.listen(PORT, () => {
//     console.log(`Express running → PORT ${server.address().port}`);
// });

import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';

import typeDefs from './schema/index';
import resolvers from './resolvers';

// Models
import User from './models/User';

mongoose.connect('mongodb://localhost/test');

const options = {
    port: 3000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: { User },
});

server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests. Go to localhost:${port}${options.playground} to interact with the API.`));
