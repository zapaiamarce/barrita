import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import initApollo from './initApollo'
import initRedux from './initRedux'
import cookie from 'cookie'


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName (Component) {
  return Component.displayName || Component.name || 'Unknown'
}

function parseCookies (ctx = {}, options = {}) {
  return cookie.parse(
    ctx.req && ctx.req.headers.cookie
      ? ctx.req.headers.cookie
      : document.cookie,
    options
  )
}

export default ComposedComponent => {
  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps (ctx) {
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo({
          getToken: () => parseCookies(ctx).token
        })
        const redux = initRedux(apollo)
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = {query: ctx.query, pathname: ctx.pathname}

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            // No need to use the Redux Provider
            // because Apollo sets up the store for us
            <ApolloProvider client={apollo} store={redux}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }

        // Extract query data from the store
        const state = redux.getState()

        // No need to include other initial Redux state because when it
        // initialises on the client-side it'll create it again anyway
        serverState = {
          apollo: { // Only include the Apollo data state
            data: state.apollo.data
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor (props) {
      super(props)
      this.apollo = initApollo({
        getToken: () => parseCookies().token
      })
      this.redux = initRedux(this.apollo, this.props.serverState)
    }

    render () {
      return (
        // No need to use the Redux Provider
        // because Apollo sets up the store for us
        <ApolloProvider client={this.apollo} store={this.redux}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
