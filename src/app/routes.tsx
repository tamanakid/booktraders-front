import IAppRoute from 'utils/interfaces/IAppRoutes'

import Dashboard from 'modules/dashboard/Dashboard'
import SearchView from 'modules/search/SearchView'


let appRoutes: Array<IAppRoute> = [
	{ view: Dashboard, name: 'home', path: '/home', exact: true },
	{ view: SearchView, name: 'search', path: '/search', exact: true }
]

export default appRoutes;
