export type Status = 'OK' | 'WARN' | 'ERROR';

interface Control {
	id: string;
	name: string;
	dev: number;
	devOutTol: number;
	status: Status;
}

export default Control;
