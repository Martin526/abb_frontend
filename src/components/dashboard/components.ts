import styled from 'styled-components';

export const StyledTitle = styled.div`
	font-size: 25px;
	font-weight: 700;
	padding-left: 10px;
`;

export const StlyledDashboard = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(5, minmax(260px, 1fr));	
	// if you want the columns to adjust automatically
	/* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); */
	grid-auto-flow: dense;
	padding: 10px;
`;
