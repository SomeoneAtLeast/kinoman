import {createElement} from "../utils.js";

export default class AbstarctComponent {
    constructor() {
        
        if (new.target === AbstarctComponent) {
            throw new Error(`Нельзя использовать абстрактный компонент так`);
        }

        this._element = null;
      };
    
      getTemplate() {
        throw new Error(`Не реализовано`);
      };
    
      getElement() {
        if (!this._element) {
          this._element = createElement(this.getTemplate());
        };
    
        return this._element;
      };
    
      removeElement() {
        this._element = null;
      };
};