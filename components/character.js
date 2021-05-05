import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({
  imgSrc,
  name,
  status,
  species,
  origin,
}) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { src: imgSrc }),
      createElement('div', {
        className: 'character-card__info',
        children: [
          createElement('div', {
            className: 'character-card__name',
            children: [
              createElement('h2', { innerText: name }),
              createElement('p', { innerText: `${status} - ${species}` }),
            ],
          }),

          createElement('div', {
            className: 'character-card__location',
            children: [
              createElement('p', { innerText: 'Last kown location' }),
              createElement('p', { innerText: origin.name }),
            ],
          }),
        ],
      }),
    ],
  });
}
