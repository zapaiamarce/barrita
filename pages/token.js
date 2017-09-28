import {Component} from 'react';
import withData from '../lib/withData';
import { gql, graphql } from 'react-apollo';
import MainLayout from '../components/MainLayout';

const Token = (props) => <div>{JSON.stringify(props)}</div>

const TokenWithData = graphql(gql`
  {
    User(email:"qzapaia@gmail.com"){
      id
    }
  }
`)(Token);

export default withData((props) => (
  <MainLayout>
    <TokenWithData></TokenWithData>
  </MainLayout>
));
// class Page extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return <TokenWithData></TokenWithData>
//   }
// };
//
// export default withData(Page)
