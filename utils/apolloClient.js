import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

export default createApolloClient = () => new ApolloClient({
  networkInterface: networkInterface
});
