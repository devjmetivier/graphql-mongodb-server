/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

export default {
    Query: {
        allUsers: async (root, args, { User }) => {
            const users = await User.find();
            return users;
        },
        userByEmail: async (root, { email }, { User }) => User.findOne({ email }),
    },
    Mutation: {
        createUser: async (root, args, { User }) => {
            const user = await new User(args).save();
            user._id = user._id.toString();
            return user;
        },
        updateUser: async (root, args, { User }) => {
            const query = { _id: args._id };

            const updates = {
                email: args.email,
                fname: args.fname,
                lname: args.lname,
                location: args.location,
            };

            const options = {
                new: true,
                runValidators: true,
            };

            const user = await User.findOneAndUpdate(query, updates, options);

            return user;
        },
        removeUser: async (root, { _id }, { User }) => User.findOneAndRemove({ _id }),
        removeAllUsers: async (root, args, { User }) => {
            const query = User.find().remove();
            await query.exec().then((result) => {
                console.log(result);
                return result.toString();
            });
        },
    },
};
