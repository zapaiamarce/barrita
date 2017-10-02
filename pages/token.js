import {Component} from 'react';
import { gql, graphql } from 'react-apollo';
import MainLayout from '../components/MainLayout/withData';

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

export default (props) => (
  <MainLayout>
    <TokenWithData></TokenWithData>
  </MainLayout>
);
