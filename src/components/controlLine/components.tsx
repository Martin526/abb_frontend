import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';
import styled from 'styled-components';

export const StyledControlLine = styled.div`
	display: flex;
	justify-content: space-around;
	padding-left: 10px;
	padding-right: 10px;	
`;

export const StyledControlColumn = styled.p`
	font-size: 13px;
	width: 100%;
`;

export const StyleIconCheck = styled(HiOutlineCheckCircle)`
	font-size: 1.3em;
	color: green;
`;

export const StyleIconWarn = styled(RiErrorWarningLine)`
	font-size: 1.3em;
	color: yellow;
`;

export const StyleIconError = styled(AiOutlineCloseCircle)`
	font-size: 1.3em;
	color: red;
`;
