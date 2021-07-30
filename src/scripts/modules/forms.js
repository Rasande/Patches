import Utility from "./utility"

class Forms {

    constructor() {
        this.textarea = document.querySelector('textarea')
        this.events()
    }

    events() {
        
        if(typeof(this.textarea) != 'undefined' && this.textarea != null){
            this.textarea.addEventListener('keyup', () => this.setTextareaHeight())
        }

    }

    setTextareaHeight() {
        this.textarea.style.height = Utility.textareaHeight(this.textarea.value) + "px"
        console.log('yo')
    }

}

export default Forms
