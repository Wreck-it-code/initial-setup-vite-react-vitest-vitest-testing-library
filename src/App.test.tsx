import { render, screen } from '@testing-library/react';

import App from './App';

test('to be truethy', () => {
    render(<App />);

    expect(
        screen.getByText('Vite + React')
    ).toBeVisible()
});