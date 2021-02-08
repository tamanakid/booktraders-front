import IAppRoute from 'utils/interfaces/IAppRoutes'

import SearchView from 'modules/search/SearchView'


let appRoutes: Array<IAppRoute> = [
	{ view: SearchView, name: 'search', path: '/search', exact: true }
]

export default appRoutes;
