class SlotExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open' });
    this.setInnerHtml();
  }

  setInnerHtml() {
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', 'global.css');

    const rootDiv = document.createElement('div');
    rootDiv.classList.add('component');
    rootDiv.textContent = 'This is text content followed by slot attrib :- ';

    const defaultSlot = document.createElement('div');
    defaultSlot.innerHTML = '<slot />';

    const namedSlot = document.createElement('slot');
    namedSlot.setAttribute('name', 'named');

    const wrapperDiv = document.createElement('div');
    wrapperDiv.append(defaultSlot, namedSlot);
    rootDiv.append(wrapperDiv);
    rootDiv.prepend(stylesheet);

    this.shadowRoot.appendChild(rootDiv);
  }
}

window.customElements.define('slot-example', SlotExample);
