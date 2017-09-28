import { gql, graphql } from 'react-apollo';
import Header from './';

const getUser = gql`
  query {
    user{
      fullname
    }
  }
`;


const HeaderWithData = graphql(getUser, {
  props: ({ ownProps, data: { loading, user, refetch } }) => ({
    // userLoading: loading,
    user: user,
    // refetchUser: refetch,
  }),
})(Header);


export default HeaderWithData;
