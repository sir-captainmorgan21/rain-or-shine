import { render } from '@testing-library/react';

import { SearchIcon } from './search-icon';

describe('SearchIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchIcon size={20} />);
    expect(baseElement).toBeTruthy();
  });
});
