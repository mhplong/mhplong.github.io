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

    $(this).on("click", () => { this.#selectCard(); });
  }

  #selectCard(e) {
    var duration = this.getAttribute("duration") * 60 * 1000;
    
    var centeredItems = $(".middle");
    if (centeredItems.length > 0) {
      centeredItems.removeClass("middle");
      centeredItems.removeClass("fullscreen");
      centeredItems.children(".card").addClass("hover");
    }

    $(this).addClass("middle");
    $(this).addClass("fullscreen");

    $(this).children(".card").removeClass("hover");
    setTimeout(() => {
      $(this).removeClass("fullscreen");
      $(this).removeClass("middle");

      $(this).children(".card").addClass("hover");
    }, duration);
  }

}

export { QuestionCard };