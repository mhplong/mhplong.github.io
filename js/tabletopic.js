class TableTopic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  connectedCallback() {
    $.get("js/templates/tabletopic.template.html", (data) => {   
      var slotData = this.innerHTML;
      this.innerHTML = data;

      this.querySelector("slot[name='header']").innerHTML = this.getAttribute("header");
      this.querySelector(".card-text").innerHTML = slotData;
    });
  }
}

customElements.define("table-topic", TableTopic);