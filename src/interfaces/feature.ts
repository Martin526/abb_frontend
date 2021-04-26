import Control, { Status } from './control';

 interface Feature {
	id: string;
	name: string;
	control: Control[];
	status: Status;
}

export default Feature;
