import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  //Destructering
  image,
  name,
  status,
  species,
  origin,
  gender,
  location,
}) {
  // Folgendes soll auf der Detail Seite ausgegeben werden
  return createElement('div', {
    className: styles['character-card'],
    children: [
      createElement('img', {
        className: styles['character-card__image'],
        src: image,
      }),
      createElement('div', {
        className: styles['character-card__info'],
        children: [
          createElement('div', {
            className: styles['character-card__name'],
            children: [
              createElement('h2', { innerText: name }),
              createElement('p', { innerText: `${status} - ${species}` }),
            ],
          }),
          createElement('div', {
            className: styles['character-card__location'],
            children: [
              createElement('p', { innerText: 'Last kown location' }),
              createElement('p', { innerText: origin.name }),
              createElement('p', { innerText: gender }),
              createElement('p', { innerText: location.name }),
            ],
          }),
        ],
      }),
    ],
  });
}
