import React from 'react';

interface IAppRoute {
	view: React.FunctionComponent,
	name: string,
	path: string,
	exact: boolean,
};

export default IAppRoute;