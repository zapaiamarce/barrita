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

export default withData(Page)
