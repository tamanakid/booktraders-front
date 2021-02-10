import React from 'react';
import { Container } from '@material-ui/core';

import SearchViewBar from './components/SearchViewBar/SearchViewBar';
import './SearchView.scss';


const SearchView = () => {

	return (
		<Container className="layout" maxWidth="lg">
			<SearchViewBar />
		</Container>
	);
}

export default SearchView;