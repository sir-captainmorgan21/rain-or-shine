import { render } from '@testing-library/react';

import { SearchIcon } from './search-icon';

describe('SearchIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchIcon size={20} />);
    expect(baseElement).toBeTruthy();
  });

  it('should set width and height of svg to size provided', () => {
    const { baseElement } = render(<SearchIcon size={20} />);
    expect(baseElement.querySelector('svg')?.getAttribute('width')).toEqual('20');
    expect(baseElement.querySelector('svg')?.getAttribute('height')).toEqual('20');
  });
});
