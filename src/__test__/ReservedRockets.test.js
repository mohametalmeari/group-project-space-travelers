import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import ReservedRocketDisplay from '../__Mock_test/ReservedRockets';

describe('ReservedRocketDisplay Component', () => {
  test('renders reserved rockets', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <ReservedRocketDisplay />
        </Provider>
      </MemoryRouter>,
    );

    expect(getByText('My Rockets')).toBeInTheDocument();

    const reservedRocket = getByText(/reserved/i);
    expect(reservedRocket).toBeInTheDocument();

    expect(getByText('Currently no rockets reserved.')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <ReservedRocketDisplay />
        </Provider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
