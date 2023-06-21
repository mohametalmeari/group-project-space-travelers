import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyrocketProfile from '../__Mock_test/MyrocketProfile';
import { reservedCancel } from '../Redux/Rocket/rocketSlice';

describe('MyrocketProfile Component', () => {
  const mockStore = configureStore();
  const store = mockStore({});

  const rocketData = {
    id: 'rocket-123',
    rocket_name: 'Falcon 9',
  };

  test('renders rocket profile with cancel reservation button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyrocketProfile rocketData={rocketData} />
      </Provider>,
    );

    const rocketName = getByText('Falcon 9');
    expect(rocketName).toBeInTheDocument();

    const cancelButton = getByText('Cancel Reservation');
    expect(cancelButton).toBeInTheDocument();

    fireEvent.click(cancelButton);

    expect(store.getActions()).toEqual([reservedCancel(rocketData.id)]);
  });
});
