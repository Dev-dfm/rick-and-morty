import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';
import { getCharacter } from './utils/api';
import { createCharacterDetails } from './components/characterDetails';

const params = new URLSearchParams(location.search);
const characterId = params.get('id');

const characterSection = createElement('section', {
  className: 'characterSection',
});

getCharacter(characterId).then((response) => {
  const characterDetails = createCharacterDetails(response);
  characterSection.append(characterDetails);
});

const mainElement = createElement('main', {
  className: styles.main,
  children: [characterSection],
});

document.querySelector('#app').append(mainElement);
