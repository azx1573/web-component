window.onload = () => {
  class Wujie extends HTMLElement {
    constructor() {
      super();
      let dom = this.attachShadow({ mode: "open" });
      let template = document.getElementById("wujie") as HTMLTemplateElement;
      dom.appendChild(template.content.cloneNode(true));
    }
  }
  window.customElements.define("wu-jie", Wujie);
};
