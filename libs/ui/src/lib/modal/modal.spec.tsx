import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Modal heading='Test' open={true} onClose={jest.fn()}><div>TEST</div></Modal>);
    expect(baseElement).toBeTruthy();
  });

  it('should not render modal content when open is false', () => {
    render(<Modal heading='Test' open={false} onClose={jest.fn()}><div>TEST</div></Modal>);
    expect(screen.queryByTestId('modal-content')).toBeFalsy();
  });

  it('should render modal content when open is true', () => {
    render(<Modal heading='Test' open={true} onClose={jest.fn()}><div>TEST</div></Modal>);
    expect(screen.queryByTestId('modal-content')).toBeTruthy();
  });

  it('should call onClose function when close button is clicked', async () => {
    const handleClose = jest.fn();
    render(<Modal heading='Test' open={true} onClose={handleClose}><div>TEST</div></Modal>);

    await userEvent.click(screen.getByTestId('close-modal'));

    expect(handleClose).toHaveBeenCalled();
  });

  it('should call onClose function when close backdrop is clicked and closeOnBackDropClick is true', async () => {
    const handleClose = jest.fn();
    render(<Modal heading='Test' open={true} onClose={handleClose} closeOnBackDropClick={true}><div>TEST</div></Modal>);

    await userEvent.click(screen.getByTestId('modal-backdrop'));

    expect(handleClose).toHaveBeenCalled();
  });

  it('should call onClose function when close backdrop is clicked and closeOnBackDropClick is false', async () => {
    const handleClose = jest.fn();
    render(<Modal heading='Test' open={true} onClose={handleClose} closeOnBackDropClick={false}><div>TEST</div></Modal>);

    await userEvent.click(screen.getByTestId('modal-backdrop'));

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('should display heading text', () => {
    const headingText = 'Heading';
    render(<Modal heading={headingText} open={true} onClose={jest.fn()} closeOnBackDropClick={true}><div>TEST</div></Modal>);
    expect(screen.getByText(headingText)).toBeTruthy();
  });

  it('should render children', () => {
    render(<Modal heading='heading' open={true} onClose={jest.fn()} closeOnBackDropClick={true}><div>TEST</div></Modal>);
    expect(screen.getByText('TEST')).toBeTruthy();
  });
});
