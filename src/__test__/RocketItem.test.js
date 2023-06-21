import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import RocketItem from '../__Mock_test/RocketItem';

describe('RocketItem Component', () => {
  const mockStore = configureStore();
  const initialState = {
  };
  const store = mockStore(initialState);

  test('renders rocket item and handles reserve/cancel reserve', () => {
    const rocketData = {
      id: '1',
      rocket_name: 'Falcon 9',
      description: 'Sample rocket description',
      flickr_images: ['image1.jpg'],
      reserved: true,
    };

    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <RocketItem rocketData={rocketData} />
        </Provider>
      </MemoryRouter>,
    );

    const rocketName = getByText('Falcon 9');
    expect(rocketName).toBeInTheDocument();

    const rocketDescription = getByText('Sample rocket description');
    expect(rocketDescription).toBeInTheDocument();
    const cancelReserveButton = getByText((content, element) => element.tagName.toLowerCase() === 'button' && content === 'Cancel Reserve');
    expect(cancelReserveButton).toBeInTheDocument();
    fireEvent.click(cancelReserveButton);
  });
});
