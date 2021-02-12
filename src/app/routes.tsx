import TAppRoute from 'utils/types/TAppRoutes';

import SearchView from 'modules/search/SearchView';


let appRoutes: Array<TAppRoute> = [
	{ view: SearchView, name: 'search', path: '/search', exact: true }
];

export default appRoutes;
