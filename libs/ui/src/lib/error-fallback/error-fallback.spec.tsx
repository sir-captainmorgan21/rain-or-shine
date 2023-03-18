import { render } from '@testing-library/react';

import ErrorFallback from './error-fallback';

describe('ErrorFallback', () => {
  it('should render successfully', () => {
    const error = new Error('test');
    const { baseElement } = render(<ErrorFallback error={error} resetErrorBoundary={jest.fn()} />);
    expect(baseElement).toBeTruthy();
  });
});
