import Utils from "./utils";

class Forms {
  constructor() {
    this.textarea = document.querySelectorAll("textarea");
    this.select = document.querySelectorAll("select");
    this.customSelectDropdown();
    this.events();
  }

  events() {
    if (typeof this.textarea != "undefined" && this.textarea != null) {
      this.textarea.forEach((el) => {
        el.addEventListener("keyup", (e) => {
          e.preventDefault();
          this.setTextareaHeight(el);
        });
      });
    }
  }

  setTextareaHeight(el) {
    const target = el;
    target.style.height = Utils.textareaHeight(target.value) + "px";
  }

  customSelectDropdown() {
    if (typeof this.select != "undefined" && this.select != null) {
      this.select.forEach((el) => {
        // make custom select element here.
      });
    }
  }
}

export default Forms;
