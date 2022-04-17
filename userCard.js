
const hideInfoText = 'Hide Info';
const showInfoText = 'Show Info';

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="userCard.css" />
<link rel="stylesheet" href="global.css" />
<div class="component">
  <div class="user-card">
    <h3>Name placeholder</h3>
    <div><slot name="Phone" /></div>
    <div><slot name="EMail" /></div>
    <div><slot name="Adress" /></div>
  </div>
  <button id="toggle-info">${hideInfoText}</button>
</div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    // Attaching shadow DOM make this independent
    // All styling defined now, will be contained and applied only for this component
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

    this.showInfo = true;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const hideBtn = this.shadowRoot.querySelector('#toggle-info');
    if (this.showInfo) {
      hideBtn.textContent = hideInfoText;
    } else {
      hideBtn.textContent = showInfoText;
    }
    this.shadowRoot.querySelector('.user-card').classList.toggle('hide');
  }
}

window.customElements.define('user-card', UserCard);