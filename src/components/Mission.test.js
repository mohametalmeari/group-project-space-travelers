import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Mission from './Mission';
import { useDispatch } from 'react-redux';

// Mock useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Mission Component', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);
  
  const details = {
    id: '9D1B7E0',
    name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand.',
    reserved: false,
  };
  
  test('Render a mission', () => {
    const { getByText } = render(<Mission {...details} />);
    expect(getByText('Thaicom')).toBeInTheDocument();
    expect(getByText('Thaicom is the name of a series of communications satellites operated from Thailand.')).toBeInTheDocument();
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
    expect(getByText('Join Mission')).toBeInTheDocument();
  });
  
  test('Render active member', () => {
    const reservedMission = {
      ...details,
      reserved: true,
    };
    const { getByText } = render(<Mission {...reservedMission} />);
    expect(getByText('Active Member')).toBeInTheDocument();
    expect(getByText('Leave Mission')).toBeInTheDocument();
  });

});