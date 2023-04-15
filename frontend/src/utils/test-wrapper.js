import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

function Wrapper({ children }) {
    return <MemoryRouter>{children}</MemoryRouter>;
}

export function render(ui) {
    rtlRender(ui, { wrapper: Wrapper });
}