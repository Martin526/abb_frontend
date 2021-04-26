import renderer, { ReactTestRenderer } from 'react-test-renderer';
import ControlLine from '../../../src/components/controlLine';
import React from 'react';
// import {cleanup, fireEvent, render} from '@testing-library/react';

describe('ControlLine test', () => {

	let controlLineRender: ReactTestRenderer;

	beforeEach(() => {
		controlLineRender = renderer.create(<ControlLine name='testname' dev={0} devOutTol={0} status='OK'/>);
	});

	afterEach(() => {
		controlLineRender.unmount();
	});

	test('check control line is render ok', () => {
		const tree = controlLineRender.toJSON();

		expect(tree).not.toBe(null);
		expect(tree).toMatchSnapshot();
	});

	test('check control line properties', () => {
		const root = controlLineRender.root;

		expect(root.props.name).toBe('testname');
		expect(root.props.dev).toBe(0);
		expect(root.props.devOutTol).toBe(0);
		expect(root.props.status).toBe('OK');
	});
});
