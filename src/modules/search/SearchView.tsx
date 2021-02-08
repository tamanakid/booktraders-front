import React, { ChangeEvent, useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core'

import './SearchView.scss';

const SearchView = () => {

	const [inputSearch, setInputSearch] = useState<string>('');
	const onChangeInputSearch = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setInputSearch(event.target.value);
	}

	const [books, setBooks] = useState(['Book1', 'Book2', 'Book3'])

	return (
		<div className="layout">
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<TextField
						value={inputSearch} onChange={onChangeInputSearch}
						variant='outlined' size='small' placeholder='Search books' fullWidth={true}
					/>
				</Grid>
				<Grid item xs={2}>
					<TextField
						value={inputSearch} onChange={onChangeInputSearch}
						variant='outlined' size='small' placeholder='Search books' fullWidth={true}
					/>
				</Grid>
				<Grid item xs={2}>
				<Button variant="contained" color="primary">
					Search
				</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default SearchView;