import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({
  image,
  name,
  status,
  species,
  origin,
  id,
}) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { className: 'character-card__image', src: image }),
      createElement('div', {
        className: 'character-card__info',
        children: [
          createElement('div', {
            className: 'character-card__name',
            children: [
              createElement('a', {
                href: `details.html?id=${id}`,
                children: [
                  createElement('h2', {
                    innerText: name,
                  }),
                ],
              }),
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
