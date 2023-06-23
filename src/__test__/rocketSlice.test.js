import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchRocket } from '../__Mock_test/rocketSlice';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rocket Slice', () => {
  it('should fetch rockets and update state', async () => {
    const mockResponse = [
      {
        id: 'rocket1',
        rocket_name: 'Falcon 9',
        description: 'A two-stage rocket designed and manufactured by SpaceX.',
        flickr_images: ['image1.jpg', 'image2.jpg'],
        reserved: false,
      },
      {
        id: 'rocket2',
        rocket_name: 'Falcon Heavy',
        description: 'A partially reusable heavy-lift launch vehicle designed and manufactured by SpaceX.',
        flickr_images: ['image3.jpg', 'image4.jpg'],
        reserved: false,
      },
    ];

    mock.onGet('https://api.spacexdata.com/v4/rockets').reply(200, mockResponse);

    const initialState = {
      rockets: [],
      isLoading: false,
      error: null,
    };

    const store = mockStore({ rocket: initialState });

    await store.dispatch(fetchRocket());
    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchRocket.pending.type);
    expect(actions[1].type).toEqual(fetchRocket.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponse);
  });
});
