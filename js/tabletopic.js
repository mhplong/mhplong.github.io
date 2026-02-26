  class TableTopic extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = " \
        <div class='card my-4'> \
          <h5 class='card-header'>Card header</h5> \
          <div class='card-body'> \
            <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> \
          </div> \
        </div> \
      ";
    }
  }

  customElements.define("table-topic", TableTopic);