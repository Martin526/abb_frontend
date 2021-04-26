import { StlyledDashboard, StyledTitle } from './components';
import FeatureComponent from '../featureComponent';
import Part from '../../interfaces/part';
import React from 'react';

const Dashboard: React.FC<Part> = (props) => {
	return (
		<>
			<StyledTitle>{props.name}</StyledTitle>
			<StlyledDashboard>
				{
					props.features && props.features.map((item, key) => {
						return (
							<FeatureComponent
								key={item.id + item.name + key}
								id={item.name}
								name={item.name}
								control={item.control}
								status={item.status}
							/>
						);
					})
				}
			</StlyledDashboard>
		</>
	);
};

export default Dashboard;
