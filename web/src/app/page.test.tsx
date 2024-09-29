import { render, screen } from '@testing-library/react';
import Home from './page';
describe('Renders app', () => {
  it('should find header', () => {
    render(<Home />);
    const header = screen.getByRole('heading', {
      level: 1,
      name: 'Home',
    });
    expect(header).toBeInTheDocument();
  });
});
