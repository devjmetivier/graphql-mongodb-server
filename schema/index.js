import * as UserSchema from './UserGQL';

const types = [];
const queries = [];
const mutations = [];

const schemas = [
    UserSchema,
];

schemas.forEach((s) => {
    types.push(s.types);
    queries.push(s.queries);
    mutations.push(s.mutations);
});

export default `

${types.join('\n\n')}

type Query {
    ${queries.join('\n\n')}
}

type Mutation {
    ${mutations.join('\n\n')}
}

`;
