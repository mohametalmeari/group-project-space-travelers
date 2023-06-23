import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import MyProfile from './MyProfile';

describe('MyProfile Component', () => {
  test('Test render of MyProfile', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
