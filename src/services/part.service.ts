import { getPartById } from '../repository/part.repository';
import Part from '../interfaces/part';

export const getPart = async (): Promise<Part> => {
	return await getPartById('fake-id');
};

