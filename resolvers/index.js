import * as UserResolvers from './UserResolvers';

export default {
    Query: {
        ...UserResolvers.queries,
    },
    Mutation: {
        ...UserResolvers.mutations,
    },
};
