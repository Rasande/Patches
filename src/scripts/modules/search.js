class Search {

    constructor() {
        this.searchModal = document.querySelector('.modal-search')
        this.searchButton = document.querySelector('.modal-search-toggle')
        this.searchField = document.querySelector('.modal-search-input')
        this.searchOverlay = document.querySelector('.modal-search-overlay')
        this.isSearchOpen = false
        this.events()
    }

    events() {
        // Open search modal
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.toggleModal())
        }
        // Close search modal
        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', () => this.closeModal())
        }

        document.addEventListener('keydown', e => this.keyPress(e))

    }

    toggleModal() {
        if (this.searchModal.classList.contains('is-open')) {
            this.closeModal()
        } else {
            this.openModal()
        }
    }

    openModal() {
        this.searchModal.classList.add('is-open')
        this.searchField.value = ''
        setTimeout(() => this.searchField.focus(), 301)
        this.searchButton.classList.add('is-active')
        this.searchButton.setAttribute('aria-expanded', 'true')
        this.isSearchOpen = true

        return false
    }

    closeModal() {

        this.searchModal.classList.remove('is-open')
        this.searchButton.classList.remove('is-active')
        this.searchButton.setAttribute('aria-expanded', 'false')
        this.isSearchOpen = false
    }

    keyPress(e) {
        if (e.keyCode == 27 && this.isSearchOpen) {
            this.closeModal()
        }
    }

}

export default Search;
