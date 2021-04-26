import { StyledControlGrid, StyledFeatureBottom, StyledFeatureContainer, StyledHeader, StyledHeaderColum, StyledHeaderLine, StyledHeaderTitule, StyledIconCheck, StyledIconCircle, StyledIconError, StyledIconWarn, StyledTitule } from './components';
import ControlLine from '../controlLine';
import Feature from '../../interfaces/feature';
import React from 'react';
import UseFeatureComponent from './useFeatureComponent';

const FeatureComponent: React.FC<Feature> = (props) => {
	const {
		columns,
		rows,
	} = UseFeatureComponent(props.control.length);

	return (
		<StyledFeatureContainer
			columns={columns}
			rows={rows}
		>
			<StyledHeaderTitule status={props.status} >
				<StyledIconCircle/>
				<StyledTitule>
					{
						props.name
					}
				</StyledTitule>
				{
					props.status === 'OK' && <StyledIconCheck/>
				}
				{
					props.status === 'WARN' && <StyledIconWarn/>
				}
				{
					props.status === 'ERROR' && <StyledIconError/>
				}
			</StyledHeaderTitule>
			{/* TODO move this componentto another folder */}
			<StyledHeader>
				{
					Array.from({length: columns}, (v, i) => i).map((i, key) => {
						return (
							<StyledHeaderLine key={`header ${i}-${key}`}>
								<StyledHeaderColum>Control</StyledHeaderColum>
								<StyledHeaderColum>Dev</StyledHeaderColum>
								<StyledHeaderColum>Dev Out Tool</StyledHeaderColum>
								<StyledHeaderColum></StyledHeaderColum>
							</StyledHeaderLine>
						);
					})
				}
			</StyledHeader>
			<StyledControlGrid columns={columns}>
				{
					props.control && props.control.map((item, key) => {
						return (
							<ControlLine
								key={item.id + item.name + item.dev + key}
								name={item.name}
								dev={item.dev}
								devOutTol={item.devOutTol}
								status={item.status}
							/>
						);
					})
				}
			</StyledControlGrid>
			{/* TODO move this componentto another folder */}
			<StyledFeatureBottom>...</StyledFeatureBottom>
		</StyledFeatureContainer>
	);
};

export default FeatureComponent;
