import Dashboard from '../../components/dashboard';
import Loader from '../../components/loader';
import React from 'react';
import UsePart from './usePart';

const Part: React.FC = () => {
	const {
		partData,
		isLoading,
	} = UsePart();

	return (
		<>
			{
				isLoading && !partData && <Loader />
			}
			{
				partData &&
				(
					<Dashboard
						id={partData.id}
						name={partData.name}
						features={partData.features}
					/>
				)
			}
		</>
	);
};

export default Part;
