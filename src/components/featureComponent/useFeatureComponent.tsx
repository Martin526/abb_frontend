
import React, { useEffect } from 'react';

export interface UseFeatureComponentInterface {
	columns: number;
	rows: number;
}

const UseFeatureComponent = (controlLength: number): UseFeatureComponentInterface => {
	const [columns, setColumns] = React.useState<number>(1);
	const [rows, setRows] = React.useState<number>(1);

	const calculateColumns = (controlAmount: number): number => {
		if (controlAmount > 0) {
			const count = controlAmount / 12;

			return Math.ceil(count);
		}

		return 1;
	};

	const calculateRows = (controlAmount: number): number => {
		return controlAmount <= 4 ? 1 : 2;
	};

	useEffect(() => {
		setColumns(calculateColumns(controlLength));
		setRows(calculateRows(controlLength));
	}, [controlLength]);

	return {
		columns,
		rows,
	};

};

export default UseFeatureComponent;
