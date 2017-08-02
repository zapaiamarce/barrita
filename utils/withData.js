import { ApolloProvider } from 'react-apollo';
import initStore from './store';
import createApolloClient from './apolloClient';

const store = initStore();
const client = createApolloClient();

export default (ComposedComponent) => (props) => {
  <ApolloProvider store={store} client={client}>
    <ComposedComponent {...props} />
  </ApolloProvider>
}
