import { createCharacterElement } from './components/character';
import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getCharacters } from './utils/api';
import { debounce } from './utils/timer';

getCharacters('').then((characters) => {
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
          autofocus: true,
          // Event: Sobald etwas ins Suchfeld eingegeben wird
          oninput: debounce((event) => {
            // löscht den Inhalt des Elements (characterSection)
            removeAllChildren(characterSection);
            // Nimmt den Begriff des Suchfelds
            const search = event.target.value;
            // Sucht die API nach dem Suchbegriff ab
            getCharacters(search).then((characters) => {
              // Füllt die Character-Card mit den API Daten
              const characterElements = characters.map(createCharacterElement);
              // Erweitere die Character-Section um weitere Card-Elemente
              characterSection.append(...characterElements);
            });
          }, 300),
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
