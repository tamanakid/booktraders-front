import React, { useState, MouseEvent, useEffect } from 'react';
import { Grid, Button, Chip, Menu } from '@material-ui/core';

import { EHorizontalOrientation } from 'utils/enums/EMaterialUI'
import { EFilterType, TFilter } from 'modules/search/utils/FiltersUtils'
import CustomInput, { useCustomInput } from 'components/CustomInput/CustomInput';
import SearchViewFiltersList from '../SearchViewFiltersList/SearchViewFiltersList';

import './SearchViewBar.scss';




type TFilterMenu = {
	type: EFilterType,
	menuComponent: React.ComponentType<any>,
	menuOrigin: EHorizontalOrientation,
	icon: string,
}



const SearchViewBar = () => {

	const [inputSearch, inputSearchHandler] = useCustomInput('');

	const filterMenus: Array<TFilterMenu> = [
		{ type: EFilterType.Genre, menuOrigin: EHorizontalOrientation.Left, menuComponent: SearchViewFiltersList, icon: 'th' },
		{ type: EFilterType.Condition, menuOrigin: EHorizontalOrientation.Center, menuComponent: SearchViewFiltersList, icon: 'archive' },
		{ type: EFilterType.Distance, menuOrigin: EHorizontalOrientation.Right, menuComponent: SearchViewFiltersList, icon: 'map-marker' }
	]

	/**
	const initialFilters: Array<TFilter> = [];
	const filtersReducer = (state: Array<TFilter>, { payload, type }: ReducerAction<TFilter, EFilterType>): Array<TFilter> => {
		return { ...state, [type]: payload };
	};
	// <Reducer<TFilters, ReducerAction<TFilter, EFilterType>>>
	const [selectedFilters, setSelectedFilters] = useReducer(filtersReducer, initialFilters);
	*/
	const [selectedFilters, setSelectedFilters] = useState<Array<TFilter>>([])

	const handleDelete: (event: any) => void = () => {
		console.log('handleDelete');
	};

	const [conditionsList, setConditionsList] = useState<Array<TFilter>>(
		[{ id: 201, name: 'New', type: EFilterType.Condition }, { id: 202, name: 'Unused', type: EFilterType.Condition }, { id: 203, name: 'Good Condition', type: EFilterType.Condition }]
	)

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
						icon={<i className={`fa fa-${filterMenu.icon} fa-xs pr-2`}></i>}
						onClick={({ currentTarget }: MouseEvent<HTMLDivElement>) => onOpenMenu(currentTarget, filterMenu)}
						component="div"
					/>
				))}
				<Menu
					className="v-search-bar-menu"
					open={!!selectedMenu}
					anchorEl={anchorEl}
					onClose={onCloseMenu}
					getContentAnchorEl={null}
					anchorOrigin={{ vertical: 'bottom', horizontal: selectedMenu?.menuOrigin || 0 }}
					transformOrigin={{ vertical: 'top', horizontal: selectedMenu?.menuOrigin || 0 }}
				>
					{(() => {
						const MenuComponent = selectedMenu && selectedMenu.menuComponent;
						return MenuComponent ? (
							<MenuComponent					
								list={conditionsList}
								selected={selectedFilters}
								setSelected={setSelectedFilters}
							/>) :	(null)
						})()}
				</Menu>
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
