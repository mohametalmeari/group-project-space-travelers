import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Mission from './Mission';

describe('Mission Component', () => {
  test('Test render of Mission', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Mission />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
