import {Component} from 'react';
import withData from '../lib/withData';
import { gql, graphql } from 'react-apollo';

const Token = (props) => <div>{JSON.stringify(props)}</div>

const TokenWithData = graphql(gql`
  {
    User(email:"qzapaia@gmail.com"){
      id
    }
  }
`)(Token);


class Page extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {url:{query:{token}}} = this.props;
    if(token){
      location.assign(location.pathname);
    }
  }
  render(){
    return <TokenWithData></TokenWithData>
  }
};

export default withData(Page);
// import { gql, graphql } from 'react-apollo';
//
//
// const sendToken = gql`
//   query{
//     User(email:"qzapaia@gmail.com"){
//       id
//     }
//   }
// `;
//
//
// const SubmiTokenWithData = graphql(sendToken, {
//   props: ({ mutate }) => ({
//     submit(email){
//       return mutate({ variables: { email } })
//               .then( ({data:{signupin:{message}}}) => {
//                 (message=='okeydokey' && Router.push('/confirm-email'))
//               });
//     }
//   }),
// })(SignupIn);
//
//
// Page.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }
//
// export default SubmiTokenWithData;
