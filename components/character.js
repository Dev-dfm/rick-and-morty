import { createElement } from '../utils/elements';

export function createCharacterElement({
  imgSrc,
  name,
  status,
  species,
  origin,
}) {
  return createElement('div', {
    className: 'characterCard',
    children: [
      createElement('img', { src: imgSrc }),
      createElement('h2', { innerText: name }),
      createElement('h3', { innerText: status }),
      createElement('p', { innerText: species }),
      createElement('p', { innerText: origin.name }),
    ],
  });
}
