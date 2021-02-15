import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

import { TSetStateDispatch } from 'utils/types/CustomHookTypes'
import { TFilter } from 'modules/search/utils/FiltersUtils'
import './SearchViewFiltersList.scss'


/*
type KeyLabelObject = {
	keyName: string,
	label: string,
}
list: Array<any & KeyLabelObject>
*/

type FiltersListProps = {
	list: Array<TFilter>,
	selected: Array<TFilter>,
	setSelected: TSetStateDispatch<any>
};


const SearchViewFiltersList = React.forwardRef<HTMLElement, FiltersListProps>(({ list, selected, setSelected }, ref) => {
	
	const onSelectListItem = (element: TFilter) => {
		const index: number = selected.indexOf(element);
		const newSelected: Array<TFilter> = [...selected];
    if (index === -1) {
      newSelected.push(element);
    } else {
      newSelected.splice(index, 1);
    }
    setSelected(newSelected);
	}
	
	return (
		<div className="v-search-filters-list py-0">
			{list.map(element => (
				<ListItem
					className={`v-search-filters-list__item ${selected.indexOf(element) === -1 ? '' : 'v-search-filters-list__item_selected'} text-sm`}
					key={element.id}
					onClick={() => onSelectListItem(element)}
					dense
					button
				>
					<span className="v-search-filters-list__text">
						{element.name}
					</span>
				</ListItem>
			))}
		</div>
	)
});


export default SearchViewFiltersList;
