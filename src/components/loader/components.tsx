import styled, { keyframes } from 'styled-components';

export const StyledLoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

const spin = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
	border: 16px solid #f3f3f3;
	border-radius: 50%;
	border-top: 16px solid #82c3ee;
	width: 25em;
	height: 25em;
	animation: ${spin} 2s linear infinite;
	`;

export const StyledLoadingTitle = styled.div`
	font-size: 5em;
`;
