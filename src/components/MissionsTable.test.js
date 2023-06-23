import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import MissionsTable from './MissionsTable';

describe('MissionsTable Component', () => {
  test('Test render of MissionsTable', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <MissionsTable />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
