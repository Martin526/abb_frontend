import rerender, { act } from 'react-test-renderer';
import UseFeatureComponent, {UseFeatureComponentInterface} from '../../../src/components/featureComponent/useFeatureComponent';
import React from 'react';

describe('test feature custom hook', () => {
	test('test custom hook', () => {
		let result: UseFeatureComponentInterface;
		const HookWrapper = ({controlsAmount}: {[key:string]: number}) => {
			result = UseFeatureComponent(controlsAmount);

			return null;
		};

		const hookWrapperRerender = rerender.create(<HookWrapper controlsAmount={10} />);

		expect(result.columns).toBe(1);
		expect(result.rows).toBe(1);

		act(() => {
			hookWrapperRerender.update(<HookWrapper />);
		});

		expect(result.columns).toBe(1);
		expect(result.rows).toBe(2);

		act(() => {
			hookWrapperRerender.update(<HookWrapper controlsAmount={14} />);
		});

		expect(result.columns).toBe(2);
		expect(result.rows).toBe(2);

		act(() => {
			hookWrapperRerender.update(<HookWrapper controlsAmount={26} />);
		});

		expect(result.columns).toBe(3);
		expect(result.rows).toBe(2);

		hookWrapperRerender.unmount();
	});

});
