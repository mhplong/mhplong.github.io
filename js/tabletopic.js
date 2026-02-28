class QuestionCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(document.createElement("slot"));
  }

  connectedCallback() {
    $.get("js/templates/questioncard.template.html", (data) => {   
      var slotData = this.innerHTML;
      this.innerHTML = data;

      this.querySelector("slot[name='header']").innerHTML = this.getAttribute("header");
      this.querySelector(".card-text").innerHTML = slotData;
    });
  }
}

export { QuestionCard };