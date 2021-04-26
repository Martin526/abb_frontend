import {StyledControlColumn, StyledControlLine, StyleIconCheck, StyleIconError, StyleIconWarn} from './components';
import React from 'react';
import { Status } from '../../interfaces/control';

interface ControlLineInterface {
	name: string;
	dev: number;
	devOutTol: number;
	status: Status;
}

const ControlLine: React.FC<ControlLineInterface> = ({name, dev, devOutTol, status}: ControlLineInterface) => {

	return (
		<StyledControlLine>
			<StyledControlColumn>{name}</StyledControlColumn>
			<StyledControlColumn>{dev}</StyledControlColumn>
			<StyledControlColumn>{devOutTol}</StyledControlColumn>
			<StyledControlColumn>
				{
					status === 'OK' && <StyleIconCheck/>
				}
				{
					status === 'WARN' && <StyleIconWarn/>
				}
				{
					status === 'ERROR' && <StyleIconError/>
				}
			</StyledControlColumn>
		</StyledControlLine>
	);
};

export default React.memo(ControlLine);
