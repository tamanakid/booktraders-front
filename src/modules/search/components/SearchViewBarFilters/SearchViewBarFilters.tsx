import React, { useState, MouseEvent } from 'react';
import { Button, Paper, Menu, MenuItem } from '@material-ui/core';

import { SetStateDispatch } from 'utils/types/CustomHookTypes'

import './SearchViewBarFilters.scss';


type SearchViewBarFiltersProps = {
	selected: Array<string>,
	setSelected: SetStateDispatch<Array<string>>
}


const SearchViewBarFilters = (props: SearchViewBarFiltersProps) => {

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

	const onOpenMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true)
	}
	const onCloseMenu = () => {
		setAnchorEl(null);
		setMenuOpen(false)
	}

	return (
		<Paper className="search-view-filters">
			{props.selected.length ?
				<span>{props.selected.length}</span> :
				<span>Hello</span>
			}
			<div>
				<Button onMouseEnter={onOpenMenu}>
					<i className="fa fa-bars fa-xs" />
				</Button>
				<Menu
					open={isMenuOpen}
					anchorEl={anchorEl}
					MenuListProps={{ onMouseLeave: onCloseMenu }}
				>
					<MenuItem>Item1</MenuItem>
					<MenuItem>Item2</MenuItem>
				</Menu>
			</div>
		</Paper>
	)
}


export default SearchViewBarFilters;
