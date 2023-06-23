import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../__Mock_test/Navbar';

describe('Navbar Component', () => {
  test('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const logoLink = screen.getByRole('link', { name: /space travelers hub/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.getAttribute('href')).toBe('/');

    const navLinks = screen.getAllByRole('link', { name: /rockets|missions|my profile/i });
    expect(navLinks).toHaveLength(3);

    expect(navLinks[0].getAttribute('href')).toBe('/');

    expect(navLinks[1].getAttribute('href')).toBe('/missions');
    expect(navLinks[2].getAttribute('href')).toBe('/my-profile');
  });
});
