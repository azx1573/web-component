"use strict";
window.onload = () => {
  class Wujie extends HTMLElement {
    constructor() {
      super();
      let dom = this.attachShadow({ mode: "open" });
      let template = document.getElementById("wujie");
      dom.appendChild(template.content.cloneNode(true));
    }
  }
  window.customElements.define("wu-jie", Wujie);
};
