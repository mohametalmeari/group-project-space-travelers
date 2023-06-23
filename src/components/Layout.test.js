import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Layout from './Layout';

describe('Layout Component', () => {
  test('Test render of Layout', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Layout />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
