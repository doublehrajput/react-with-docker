import { render, screen } from '@testing-library/react';

import App from '@app/App';

describe('Main Application', () => {
  it('Has button with Hello React !!!!!', () => {
    render(<App />);

    expect(screen.getAllByText('Hello React !!!')).toHaveLength(1);
  });
});
