import { gql, graphql } from 'react-apollo';
import SignupIn from './';
import Router from 'next/router'

const sendToken = gql`
  mutation submitRepository($email: String!){
    signupin(email: $email) {
      message
    }
  }
`;


const SubmiTokenWithData = graphql(sendToken, {
  props: ({ mutate }) => ({
    submit(email){
      return mutate({ variables: { email } })
              .then( ({data:{signupin:{message}}}) => {
                (message=='okeydokey' && Router.push('/confirm-email'))
              });
    }
  }),
})(SignupIn);


export default SubmiTokenWithData;
