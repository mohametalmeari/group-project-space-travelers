import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('Test render of Navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
