import React, { useState, useReducer, MouseEvent, Reducer } from 'react';
import { Grid, Button, Chip, Menu } from '@material-ui/core';

import CustomInput, { useCustomInput } from 'components/CustomInput/CustomInput';

import SearchViewBarFilters from '../SearchViewBarFilters/SearchViewBarFilters'
import '../SearchViewBarFilters/SearchViewBarFilters.scss';

type ReducerAction<P, T> = { payload: P, type: T }


enum EHorizontalOrientation {
	Left = 'left',
	Center = 'center',
	Right = 'right'
};

enum EFilterType {
	Genre = 'genre',
	Condition = 'condition',
	Distance = 'distance'
}
interface IFilter {
	id: number,
	label: string,
	type: EFilterType
};
type TFilter = IFilter | null;
type Filters = {
	[key in EFilterType]: TFilter
};

type TFilterMenu = {
	type: EFilterType,
	menuComponent?: React.FunctionComponent,
	menuOrigin: EHorizontalOrientation,
}



const SearchViewBar = () => {

	const [inputSearch, inputSearchHandler] = useCustomInput('');

	const filterMenus: Array<TFilterMenu> = [
		{ type: EFilterType.Genre, menuOrigin: EHorizontalOrientation.Left },
		{ type: EFilterType.Condition, menuOrigin: EHorizontalOrientation.Center },
		{ type: EFilterType.Distance, menuOrigin: EHorizontalOrientation.Right }
	]

	const initialFilters: Filters = { 'genre': null, 'condition': null, 'distance': null };
	const filtersReducer = (state: Filters, { payload, type }: ReducerAction<TFilter, EFilterType>): Filters => {
		return { ...state, [type]: payload };
	};
	// <Reducer<Filters, ReducerAction<TFilter, EFilterType>>>
	const [selectedFilters, setSelectedFilters] = useReducer(filtersReducer, initialFilters);

	const handleDelete: (event: any) => void = () => {
		console.log('handleDelete');
	};


	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [selectedMenu, setSelectedMenu] = useState<TFilterMenu | null>(null)
	const onOpenMenu = (currentTarget: HTMLDivElement, filterMenu: TFilterMenu) => {
		setAnchorEl(currentTarget);
		setSelectedMenu(filterMenu);
	}
	const onCloseMenu = () => {
		setAnchorEl(null);
		setSelectedMenu(null);
	}


	return (
		<Grid container spacing={4} className="flex align_center">
			<Grid item xs={6}>
				<CustomInput
					input={inputSearch}
					handler={inputSearchHandler}
					placeholder={'Search books'}
				/>
			</Grid>

			<Grid item xs={4} className="flex justify_between">
				{filterMenus.map(filterMenu => (
					<Chip
						key={filterMenu.type}
						variant="outlined"
						label={filterMenu.type}
						style={{ padding: '1rem 0.5rem' }}
						onDelete={handleDelete}
						icon={<i className="fa fa-search fa-xs pr-2" />}
						onClick={({ currentTarget }: MouseEvent<HTMLDivElement>) => onOpenMenu(currentTarget, filterMenu)}
						component="div"
					/>
				))}
				<Menu
					className="v-search-filters-menu"
					open={!!selectedMenu}
					anchorEl={anchorEl}
					onClose={onCloseMenu}
					getContentAnchorEl={null}
					anchorOrigin={{ vertical: 'bottom', horizontal: selectedMenu?.menuOrigin || 0 }}
					transformOrigin={{ vertical: 'top', horizontal: selectedMenu?.menuOrigin || 0 }}
				>
					<div className="v-search-filters-menu__container">
						Hello
					</div>
				</Menu>
				{/**
				<SearchViewBarFilters
					selected={selectedFilters}
					setSelected={setSelectedFilters}
				/>
				*/}
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
