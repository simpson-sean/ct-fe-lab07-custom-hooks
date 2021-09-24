import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import detailData from '../fixtures/detail.json';
import RickAndMortyDetailsContainer from './RickAndMortyDetailsContainer';


const server = setupServer(
  rest.get(`https://rickandmortyapi.com/api/character/:id`, (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('RickAndMortyDetails', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/1']}>
        <RickAndMortyDetailsContainer />
      </MemoryRouter>
    );

    screen.getByAltText("loading spinner");

    await screen.findByText('Rick', { exact: false });
    expect(container).toMatchSnapshot();
  });
});