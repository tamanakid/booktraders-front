import React, { useState } from 'react';
import './Dashboard.scss';

function Dashboard () {

	const [courses, setCourses] = useState(['Physics I'])

	return (
		<div>
			<div className="dashboard">
				DASHBOARD
			</div>
			<div>{courses}</div>
		</div>
	);
}

export default Dashboard;
