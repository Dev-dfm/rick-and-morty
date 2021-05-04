import './style.css';
import { createElement } from './utils/elements';

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', {
          className: 'hero_title',
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
      children: [
        createElement('div', {
          innerText: 'No results',
        }),
      ],
    }),
    createElement('footer', {
      className: 'footer',
      children: [createElement('p', { innerText: 'look at me, I´m a footer' })],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
