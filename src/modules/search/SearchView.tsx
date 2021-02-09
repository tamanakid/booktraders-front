import React from 'react';
import { Container } from '@material-ui/core';

import SearchViewFilters from './components/SearchViewFilters';
import './SearchView.scss';


const SearchView = () => {

	return (
		<Container className="layout" maxWidth="lg">
			<SearchViewFilters />
		</Container>
	);
}

export default SearchView;