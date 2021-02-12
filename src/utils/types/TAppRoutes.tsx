import React from 'react';

type TAppRoute = {
	view: React.FunctionComponent,
	name: string,
	path: string,
	exact: boolean,
};

export default TAppRoute;
