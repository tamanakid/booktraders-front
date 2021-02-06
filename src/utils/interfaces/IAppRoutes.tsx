import { FunctionComponent } from 'react';

interface IAppRoute {
	component: FunctionComponent,
	name: string,
	path: string,
	showHeader: boolean,
	exact: boolean,
};

export default IAppRoute;