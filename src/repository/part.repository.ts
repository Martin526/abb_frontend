import Control, { Status} from '../interfaces/control';
import Part from '../interfaces/part';

const getRandomId = (): string => {
	return Math.floor(Math.random() * 100).toString();
};

const controlList: string[] = ['X', 'Y', 'Z', 'Length', 'Diameter'];
const statusList: Status[] = ['OK', 'WARN', 'ERROR'];

const getControls = (amount: number, isFeatureOk: boolean = false): Control[] => {
	const controls: Control[] = [];

	for (let index = 0; index < amount; index++) {
		controls.push({
			id: getRandomId(),
			name: controlList[Math.floor(Math.random() * controlList.length)],
			dev: isFeatureOk ? 0 : +Math.random().toFixed(2),
			devOutTol: isFeatureOk ? 0 : +Math.random().toFixed(2),
			status: isFeatureOk ? 'OK' : statusList[Math.floor(Math.random() * statusList.length)],
		});
	}

	return controls;
};

//Simulate Api call
//Return a promise and simulate the time it takes for a request
const getData = (): Promise<Part> => {
	const part: Part = {
		id: 'fake-id',
		name: 'Part A',
		features: [
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(24),
				status: 'WARN',
			},
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(4, true),
				status: 'OK',
			},
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(4),
				status: 'ERROR',
			},
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(12, true),
				status: 'OK',
			},
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(4),
				status: 'WARN',
			},
			{
				id: getRandomId(),
				name: 'FEATURES\'S NAME',
				control: getControls(4, true),
				status: 'OK',
			},
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(12, true),
			// 	status: 'OK',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(12, true),
			// 	status: 'ERROR',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(4, true),
			// 	status: 'WARN',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(4, true),
			// 	status: 'WARN',
			// },

			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(32, true),
			// 	status: 'OK',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(6, true),
			// 	status: 'ERROR',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(11, true),
			// 	status: 'WARN',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(2, true),
			// 	status: 'WARN',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(4, true),
			// 	status: 'WARN',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(4, true),
			// 	status: 'WARN',
			// },
			// {
			// 	id: getRandomId(),
			// 	name: 'FEATURES\'S NAME',
			// 	control: getControls(3, true),
			// 	status: 'OK',
			// },
		],
	};

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(part);
		}, 2000);
	});
};

// Receives a PartId in case we have severlas parts
export const getPartById = async (id: string): Promise<Part> => {
	console.log(id);

	return await getData();
};
