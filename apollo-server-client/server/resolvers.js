
const resolvers = {
    Query:{
        welcome:()=>{
            return "Welcome to GraphQl Project"
        },
        bye:()=>{
            return "Good bye"
        }
    }
}
export default resolvers;
