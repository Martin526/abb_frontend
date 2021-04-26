import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiCircle } from 'react-icons/bi';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Status } from '../../interfaces/control';
import styled from 'styled-components';

interface StyledFeatureContainerProps {
		columns: number;
		rows: number;
	}

interface StyledHeaderTituleProps {
		status: Status;
	}

interface StyledControlGridProps {
		columns: number;
	}

export const StyledFeatureContainer = styled.div<StyledFeatureContainerProps>`
		background-color: #e4e4e4;
		grid-row: span ${({rows}) => rows};
		grid-column: span ${({columns}) => columns};
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

export const StyledHeaderTitule = styled.div<StyledHeaderTituleProps>`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 15px;
		padding-left: 15px;
		font-size: 15px;
		line-height: 3;
		font-weight: 700;
		color: white;
		text-align: center;

		background-color: ${ ({status}) => {
		if (status === 'OK') {
			return 'green';
		} else if (status === 'WARN') {
			return '#e7e71f';
		}

		return 'red';
	}
};
`;

export const StyledTitule = styled.div`
	width: 100%;
	text-align: start;
	padding-left: 20px;
`;

export const StyledHeader = styled.div`
		display: flex;
		justify-content: space-around;
		padding-left: 10px;
		padding-right: 10px;
`;

export const StyledHeaderLine = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
`;

export const StyledHeaderColum = styled.p`
		width: 100%;
		font-size: 14px;
		font-weight: bold;
`;

export const StyledFeatureBottom = styled.div`
		text-align: center;
		font-size: 30px;
		line-height: 1;
		font-weight: 700;
		border: solid 1px;
		padding-bottom: 13px;
		margin-top: 25px;

		:hover {
			background-color: #E7E9EB;
			cursor: pointer;
		}
`;

export const StyledIconCircle = styled(BiCircle)`
		font-size: 1.5em;
`;

export const StyledIconCheck = styled(HiOutlineCheckCircle)`
		font-size: 1.5em;
`;

export const StyledIconWarn = styled(RiErrorWarningLine)`
		font-size: 1.5em;
`;

export const StyledIconError = styled(AiOutlineCloseCircle)`
		font-size: 1.5em;
`;

export const StyledControlGrid = styled.div<StyledControlGridProps>`
	display: grid;
	grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)`};
	flex-grow: 1;
`;
