import { createCharacterElement } from './components/character';
import './style.css';
import { createElement } from './utils/elements';

const characters = [
  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },
  {
    imgSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    origin: {
      name: 'Earth',
    },
  },
];

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', {
          className: 'hero__title',
          innerText: 'Rick and Morty Fun',
        }),
        createElement('input', {
          className: 'input',
          placeholder: 'Search character',
        }),
      ],
    }),
    createElement('section', {
      className: 'results',
      children: characters.map(createCharacterElement),
    }),
    createElement('footer', {
      className: 'footer',
      children: [createElement('p', { innerText: 'look at me, I´m a footer' })],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
