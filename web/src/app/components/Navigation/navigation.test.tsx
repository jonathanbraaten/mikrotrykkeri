import { fireEvent, render, screen, within } from '@testing-library/react';
import Navigation, { navigationLinks } from '.';

const initialValues = {
  isActive: false,
  onClick: () => console.log('Initial onClick'),
};
describe('Navigation', () => {
  it('Should render Navigation', () => {
    render(<Navigation isActive={initialValues.isActive} onClick={initialValues.onClick} />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  it('Should render navigation links', () => {
    render(<Navigation isActive={initialValues.isActive} onClick={initialValues.onClick} />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
    const links = within(navigation).getAllByRole('link');
    expect(links).toHaveLength(navigationLinks.length);
  });

  it('Should transform navigation when button is clicked', () => {
    render(<Navigation isActive={initialValues.isActive} onClick={initialValues.onClick} />);
    const closeButton = screen.getByRole('button', {
      name: /close Menu/i,
    });
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveClass('translate-x-full');
  });
});
