import { getPart } from '../../services/part.service';
import Part from '../../interfaces/part';
import React from 'react';

interface UsePartInterface {
	partData: Part | null;
	isLoading: boolean;
}

const UsePart = (): UsePartInterface => {
	const [partData, setPartData] = React.useState<Part | null>(null);
	const [isLoading] = React.useState<boolean>(true);

	const getPartData = async (): Promise<void> => {
		const data = await getPart();

		setPartData(data);
	};

	React.useEffect(() => {
		getPartData();

		const interval = setInterval(() => {
			getPartData();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return {
		partData,
		isLoading,
	};
};

export default UsePart;
