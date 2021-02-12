import React, { useState, useEffect, MouseEvent } from 'react';
import { Grid, Button, Paper, Menu, MenuItem } from '@material-ui/core';

import { TSetStateDispatch } from 'utils/types/CustomHookTypes'

import './SearchViewBarFilters.scss';


type SearchViewBarFiltersProps = {
	selected: Array<string>,
	setSelected: TSetStateDispatch<Array<string>>
}


const SearchViewBarFilters = ({ selected, setSelected }: SearchViewBarFiltersProps) => {

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

	const menuButton = React.useRef<HTMLButtonElement>(null)
	const onOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true);
	}
	const onCloseMenu = () => {
		setAnchorEl(null);
		setMenuOpen(false);
		setTimeout(() => {
			menuButton.current && menuButton.current.blur();
		})
	}

	interface Genre { name: string, id: number };
	type Condition = 'new' | 'unused' | 'good-state' | 'readable';
	type Distance = 1 | 3 | 5 | 10 | 30 | 100;
	const [genres, setGenres] = useState<Array<Genre> | null>(null);
	const [conditions] = useState<Array<Condition>>(['new', 'unused', 'good-state', 'readable']);
	const [distances] = useState<Array<Distance>>([1, 3, 5, 10, 30, 100]);
	useEffect(() => {
		/** Fetch filters lists: Genres, Condition, Distance */
		let apiFetch: Promise<Array<Genre>> = new Promise((resolve) => {
			let apiGenres: Array<Genre> = [{ name: 'Mystery', id: 101 }, { name: 'Drama', id: 102 }];
			setTimeout(() => {
				resolve(apiGenres);
			}, 1000);
		})

		apiFetch.then((apiGenres) => {
			setGenres(apiGenres)
		})
	}, [])


	const onSelectFilterElement = () => {
		console.log('eaen');
	}

	interface JsxFilterSection {
		(title: string, array: Array<any> | null, showLoader: boolean, key: string | undefined, text: string | undefined): JSX.Element | JSX.Element[];
	}
	let jsxFilterSection: JsxFilterSection = (title, array, showLoader = false, key, text) => {
		let items = array ?
			array.map((element: any) => (
				<MenuItem
					key={key ? element[key] : element}
					className="v-search-filters-menu__item"
					onClick={() => onSelectFilterElement()}
				>
					{text ? element[text] : element}
				</MenuItem>
			)) :
			<MenuItem className="v-search-filters-menu__loading">
				Loading genres...
			</MenuItem>;

			return (
				<Grid item xs={4} key={title}>
					<div className="v-search-filters-menu__title">{title}</div>
					{items}
				</Grid>
			)
	}

	let jsxSelectedFilters: JSX.Element = selected.length ?
		<span>{selected.join(', ')}</span> :
		<span>Select filters</span>

	return (
		<Paper className="v-search-filters">
			{jsxSelectedFilters}

			<div>
				<Button onClick={onOpenMenu} ref={menuButton}>
					<i className="fa fa-bars fa-xs" />
				</Button>
				<Menu
					className="v-search-filters-menu"
					open={isMenuOpen}
					anchorEl={anchorEl}
					onClose={onCloseMenu}
					getContentAnchorEl={null}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				>
					<Grid container spacing={4} className="v-search-filters-menu__container">
						{
							[
								{ title: 'Genres', array: genres, showLoader: true, key: 'id', text: 'name' },
								{ title: 'Condition', array: conditions, showLoader: false },
								{ title: 'Distance', array: distances, showLoader: false }
							].map(({ title, array, showLoader, key, text }) => {
								return jsxFilterSection(title, array, showLoader, key, text)
							})
						}
						
						
						{/**
						<Grid item xs={4}>
							<div className="v-search-filters-menu__title">Genres</div>
							{jsxGenres}
						</Grid>
						<Grid item xs={4}>
							<div className="v-search-filters-menu__title">Condition</div>
							{jsxCondition}
						</Grid>
						<Grid item xs={4}>
							<div className="v-search-filters-menu__title">Distance</div>
							{jsxDistance}
						</Grid>
						*/}
					</Grid>
				</Menu>
			</div>
		</Paper>
	)
}


export default SearchViewBarFilters;
