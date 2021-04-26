import { StyledLoader, StyledLoaderContainer, StyledLoadingTitle } from './components';
import React from 'react';

const Loader: React.FC = () => {
	return (
		<StyledLoaderContainer>
			<StyledLoader/>
			<StyledLoadingTitle>Loading...</StyledLoadingTitle>
		</StyledLoaderContainer>
	);
};

export default Loader;
