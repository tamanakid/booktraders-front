import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';

import CustomInput, { useCustomInput } from 'components/CustomInput/CustomInput';

import SearchViewBarFilters from '../SearchViewBarFilters/SearchViewBarFilters'


const SearchViewBar = () => {

	const [inputSearch, inputSearchHandler] = useCustomInput('');

	const [selectedFilters, setSelectedFilters] = useState<Array<string>>([])

	return (
		<Grid container spacing={4} className="flex">
			<Grid item xs={6}>
				<CustomInput
					input={inputSearch}
					handler={inputSearchHandler}
					placeholder={'Search books'}
				/>
			</Grid>

			<Grid item xs={4}>
				<SearchViewBarFilters
					selected={selectedFilters}
					setSelected={setSelectedFilters}
				/>
			</Grid>

			<Grid item xs={2}>
				<Button variant="contained" color="primary">
					<i className="fa fa-search fa-xs pr-2" />
					<span>Search</span>
				</Button>
			</Grid>
		</Grid>
	);

};


export default SearchViewBar;
