import { render, screen } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card><div>TEST</div></Card>);
    expect(baseElement).toBeTruthy();
  });

  it('should not render children when loading', () => {
    render(<Card loading={true}><div>TEST</div></Card>);
    expect(screen.queryByText('TEST')).toBeFalsy();
  });

  it('should not render children when not loading', () => {
    render(<Card><div>TEST</div></Card>);
    expect(screen.queryByText('TEST')).toBeTruthy();
  });

  it('should render with provided classes', () => {
    render(<Card classes='my-cool-class-name'><div>TEST</div></Card>);
    expect(screen.getByText('TEST').parentElement).toHaveClass('my-cool-class-name');
  });

  it('should have cursor pointer when clickable', () => {
    render(<Card clickable={true}><div>TEST</div></Card>);
    expect(screen.getByText('TEST').parentElement).toHaveClass('cursor-pointer');
  });

  it('should not have cursor pointer when not clickable', () => {
    render(<Card clickable={false}><div>TEST</div></Card>);
    expect(screen.getByText('TEST').parentElement).not.toHaveClass('cursor-pointer');
  });
});
