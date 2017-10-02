import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import MainLayout from '../components/MainLayout/withData';

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: cyan;
`;

export default () => (
	<MainLayout>
		<Header>test pepepe</Header>
		Hola soy la comidas
		<Header>test pepepe</Header>
	</MainLayout>
);
