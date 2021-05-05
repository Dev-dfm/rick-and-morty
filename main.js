import { createCharacterElement } from './components/character';
import './style.css';
import { createElement } from './utils/elements';
import { getCharacters } from './utils/api';

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const characterSection = createElement('section', {
  className: 'characters',
});

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
    characterSection,
    createElement('footer', {
      className: 'footer',
      children: [
        createElement('p', { innerText: 'look at me, I´m a footer 👽️' }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
