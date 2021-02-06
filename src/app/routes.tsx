import IAppRoute from 'utils/interfaces/IAppRoutes'
import Dashboard from 'modules/dashboard/Dashboard'


let appRoutes: Array<IAppRoute> = [
	{ component: Dashboard, name: 'home', path: '/home', showHeader: true, exact: false	}
] 

export default appRoutes;
