
class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="component"> Simple Component: Hi ${this.getAttribute('name')} </div>`;
  }
}

window.customElements.define('simple-component', SimpleComponent);