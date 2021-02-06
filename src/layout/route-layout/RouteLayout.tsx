import React, { useState } from 'react';

import IAppRoute from 'utils/interfaces/IAppRoutes'
import './RouteLayout.scss';

const RouteLayout: React.FunctionComponent<{ route: IAppRoute }> = ({ route, children }) => {

	return (
		<div>
			{route.showHeader ? <div>Header</div> : null}
			<div>{children}</div>
		</div>
	)
}

export default RouteLayout;
