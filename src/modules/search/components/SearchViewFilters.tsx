import React from 'react';
import { Grid, Button } from '@material-ui/core';

import CustomInput, { useCustomInput } from 'components/CustomInput/CustomInput';


const SearchViewFilters = () => {

	const [inputSearch, inputSearchHandler] = useCustomInput('');

	return (
		<Grid container spacing={4} className="flex">
			<Grid item xs={8}>
				<CustomInput
					input={inputSearch}
					handler={inputSearchHandler}
					placeholder={'Search books'}
				/>
			</Grid>
			<Grid item xs={2}>
				<span>{inputSearch}</span>
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


export default SearchViewFilters;
