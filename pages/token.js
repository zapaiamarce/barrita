import {Component} from 'react';
import withData from '../lib/withData';
import { gql, graphql } from 'react-apollo';
import MainLayout from '../components/MainLayout';

const Token = (props) => <div>{JSON.stringify(props)}</div>

const TokenWithData = graphql(gql`
  query {
    user{
      fullname,
      id,
      email
    }
  }
`)(Token);

export default withData((props) => (
  <MainLayout>
    <TokenWithData></TokenWithData>
  </MainLayout>
));
