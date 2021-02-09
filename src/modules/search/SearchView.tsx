import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import CustomInput from 'components/CustomInput/CustomInput'

import './SearchView.scss';

const SearchView = () => {

	const [inputSearch, setInputSearch] = useState<string>('');

	return (
		<Grid container spacing={4} className="layout">
			<Grid item xs={8}>
				<CustomInput
					value={inputSearch}
					setValue={setInputSearch}
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
}

export default SearchView;