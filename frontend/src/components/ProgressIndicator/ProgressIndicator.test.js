import ProgressIndicator from './ProgressIndicator.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../utils/tests/test-wrapper.js';
import '@testing-library/jest-dom';

describe('ProgressIndicator component test suite', () => {
    const label = 'progress';
    const additionnalClass = 'testClass';

    it('should render', () => {
        render(<ProgressIndicator label={label}/>);
    });

    it('should be an accessible linear progress indicator', () => {
        render(<ProgressIndicator label={label}/>);

        const progressIndicatorElt = screen.getByRole('progressbar', { name: label });
        const lineElt = progressIndicatorElt.querySelector('line');

        expect(lineElt).not.toBeNull();
    });

    it('should be an accessible circular progress indicator', () => {
        render(<ProgressIndicator label={label} circular={true}/>);

        const progressIndicatorElt = screen.getByRole('progressbar', { name: label });
        const circleElt = progressIndicatorElt.querySelector('circle');

        expect(circleElt).not.toBeNull();
    });

    it('should have the given class names as a linear progress indicator', () => {
        render(<ProgressIndicator label={label} className={additionnalClass}/>);

        const progressIndicatorElt = screen.getByRole('progressbar', { name: label });

        expect(progressIndicatorElt).toHaveClass(additionnalClass);
    });

    it('should have the given class names as a linear progress indicator', () => {
        render(<ProgressIndicator label={label} className={additionnalClass} circular={true}/>);

        const progressIndicatorElt = screen.getByRole('progressbar', { name: label });

        expect(progressIndicatorElt).toHaveClass(additionnalClass);
    });
});