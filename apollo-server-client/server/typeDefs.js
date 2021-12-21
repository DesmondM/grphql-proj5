import {gql} from 'apollo-server-express';

const typeDefs = gql`
 type Query{
     welcome:String
     bye:String
 }
`

export default typeDefs;
