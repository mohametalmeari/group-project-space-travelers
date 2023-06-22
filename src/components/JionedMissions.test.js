import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import JoinedMissions from './JoinedMissions';

describe('JoinedMissions Component', () => {
  test('Test render of JoinedMissions', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <JoinedMissions />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
