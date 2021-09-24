import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/list.json';
import RickAndMortyContainer from './RickAndMortyContainer';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('Rick and Morty Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters on the page', async () => {
    const { container } = render(
      <MemoryRouter>
        <RickAndMortyContainer />
      </MemoryRouter>
    );

    screen.getByAltText("loading spinner");

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});