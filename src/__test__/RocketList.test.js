import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import RocketList from '../__Mock_test/RocketList';

describe('Rocket List Component', () => {
  test('Test render of Rocket List', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <RocketList />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
