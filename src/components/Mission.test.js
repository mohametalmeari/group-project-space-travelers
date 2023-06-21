import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Mission from './Mission';

// Mock useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Mission Component', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  test('Render a mission', () => {
    const { getByText } = render(<Mission
      id="9D1B7E0"
      name="Thaicom"
      description="Thaicom is the name of a series of communications satellites operated from Thailand."
      reserved={false}
    />);
    expect(getByText('Thaicom')).toBeInTheDocument();
    expect(getByText('Thaicom is the name of a series of communications satellites operated from Thailand.')).toBeInTheDocument();
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
    expect(getByText('Join Mission')).toBeInTheDocument();
  });

  test('Render active member', () => {
    const { getByText } = render(<Mission
      id="9D1B7E0"
      name="Thaicom"
      description="Thaicom is the name of a series of communications satellites operated from Thailand."
      reserved
    />);
    expect(getByText('Active Member')).toBeInTheDocument();
    expect(getByText('Leave Mission')).toBeInTheDocument();
  });
});
