import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Import your Redux store
import App from './App';
import store from './Redux/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
