import Button from './Button.jsx';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-wrapper.js';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button component test suite', () => {
    it('should render', () => {
        render(<Button/>);
    });
});