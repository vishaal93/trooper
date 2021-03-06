import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ClientType = new ObjectType({
  name: 'Client',
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
  },
});

export default ClientType;
