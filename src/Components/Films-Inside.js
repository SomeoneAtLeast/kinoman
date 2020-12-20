import AbstarctComponent from "./abstract-comp.js";

const createFilmsInsideTemplate = () => {
      return (
          `<section class="footer__statistics">
                <p>130 291 movies inside</p>
            </section>`
      )
  };


export default class FilmsInside extends AbstarctComponent {
    getTemplate() {
      return createFilmsInsideTemplate();
    };
};  