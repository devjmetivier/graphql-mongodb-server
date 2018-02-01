export const types = `

type User {
    _id: String!
    email: String!
    password: String!
    fname: String!
    lname: String!
    location: String!
    role: String!
    createdAt: String!
}

`;

export const queries = `

allUsers: [User!]!


userByEmail(
    email: String!
): User!

`;

export const mutations = `

createUser(
    email: String!, 
    password: String!, 
    fname: String!, 
    lname: String!, 
    location: String!, 
    role: String!
): User

updateUser(
    _id: String!, 
    email: String, 
    password: String, 
    fname: String, 
    lname: String, 
    location: String, 
    role: String
): User

removeUser(
    _id: String!
): User

removeAllUsers: String

`;
