import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create ({getToken}) {

  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6dfb6kt2yfc0121g2opcjgj'
  });

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}  // Create the header object if needed.
      }
      const token = getToken();
      req.options.headers.authorization = token ? `Bearer ${token}` : null
      next()
    }
  }])

  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface
  })
}

export default function initApollo (options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(options)
  }

  return apolloClient
}
