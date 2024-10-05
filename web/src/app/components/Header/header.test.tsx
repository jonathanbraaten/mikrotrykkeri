import { fireEvent, render, screen, within } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('Should render Header, and Navigation should be present', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    const navigation = within(header).getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('Should update isActive state when button is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', {
      name: /Meny/i,
    });
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveClass('translate-x-full');
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(navigation).toHaveClass('translate-x-0');
  });
});
