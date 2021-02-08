import React, { useState } from 'react';
import './Dashboard.scss';

const Dashboard = (props: any) => {

	const [courses, setCourses] = useState<Array<string>>(['Physics I'])

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
