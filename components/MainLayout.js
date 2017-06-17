import 'isomorphic-fetch';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../utils/store';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: cyan;
`;

class Index extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<div>
				<Header>Header</Header>
				<div>
					{children}
				</div>
        <footer>footer</footer>
			</div>
		);
	}
}

export default withRedux(initStore)(Index);
