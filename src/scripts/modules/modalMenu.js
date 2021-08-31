import Utility from "./utility"

class ModalMenu {
    constructor() {
        this.header = document.querySelector('.site-header')
        this.toggleMenu = document.querySelectorAll('[data-toggle]')
        this.menu = document.querySelectorAll('[data-name]')
        this.submenuBtn = document.querySelectorAll('.submenu-btn')
        this.isMenuOpen = false
        this.events()
        this.mainPadding()
    }

    events() {
        this.toggleMenu.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.triggerMenu(e)
            })
        })
        this.submenuBtn.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                this.toggleSubMenu(e)
            })
        })
        document.addEventListener('keydown', e => this.keyPress(e))
        window.addEventListener('scroll', () => this.changeHeader())
        window.addEventListener('resize', () =>this.mainPadding())
    }

    triggerMenu(e) {
        const target = e.currentTarget.getAttribute('data-toggle')
        const targetMenu = document.querySelector('[data-name="' + target + '"]')
        const otherMenus = document.querySelectorAll('[data-name]:not([data-name="' + target + '"])')

        if (!targetMenu.classList.contains('is-open')) {
            // Close other open menus first
            otherMenus.forEach(el => {
                if (el.classList.contains('is-open')) {
                    this.closeMenu(el)
                }
            })

            this.openMenu(targetMenu)

        } else {

            this.closeMenu(targetMenu)
        }
    }

    openMenu(menu) {
        const id = menu.getAttribute('data-name')
        const menuBtn = document.querySelector('[data-toggle="' + id + '"]')

        Utility.bodyScrollLock()

        this.header.classList.add('is-scrolled')

        menu.classList.add('is-open')
        menuBtn.classList.add('is-active')
        menuBtn.setAttribute('aria-expanded', 'true')

        this.isMenuOpen = true
    }

    closeMenu(menu) {
        const id = menu.getAttribute('data-name')
        const menuBtn = document.querySelector('[data-toggle="' + id + '"]')

        Utility.bodyScrollUnlock()

        menu.classList.remove('is-open')
        menuBtn.classList.remove('is-active')
        menuBtn.setAttribute('aria-expanded', 'false')

        this.isMenuOpen = false

    }

    toggleSubMenu(e) {
        e.preventDefault()
        const btn = e.currentTarget;
        const targetMenu = btn.parentNode.querySelector('.submenu')

        if (!targetMenu.classList.contains('is-open')) {
            btn.classList.add('is-open')
            btn.setAttribute('aria-expanded', 'true')
            targetMenu.classList.add('is-open');
            targetMenu.style.height = 'auto';

            let height = targetMenu.clientHeight + 'px';

            targetMenu.style.height = '0px';

            setTimeout(function() {
                targetMenu.style.height = height;
            }, 0);

            targetMenu.addEventListener('transitionend', function() {
                targetMenu.removeAttribute('style')
            }, {
                once: true
            });

        } else {
            btn.classList.remove('is-open')
            btn.setAttribute('aria-expanded', 'false')
            let height = targetMenu.clientHeight + 'px';
            targetMenu.style.height = height;

            setTimeout(function() {
                targetMenu.style.height = '0px';
            }, 0);

            targetMenu.addEventListener('transitionend', function() {
                targetMenu.classList.remove('is-open');
                targetMenu.removeAttribute('style')
            }, {
                once: true
            });

        }
    }

    keyPress(e) {
        if (e.keyCode == 27 && this.isMenuOpen) {
            this.menu.forEach(el => {
                if (el.classList.contains('is-open')) {
                    this.closeMenu(el)
                }
            })
        }
    }

    changeHeader() {
        let scrollPos = window.scrollY
        
        if (scrollPos >= 75 || this.isMenuOpen) {
            this.header.classList.add('is-scrolled')
        } else {
            this.header.classList.remove('is-scrolled')
        }
    }

    mainPadding() {
        const main = document.querySelector('#site-content')
        const header = document.querySelector('.site-header.is-fixed')

        if (header) {
            const headerHeight = header.offsetHeight
            main.style.paddingTop = headerHeight + 'px';
        }
    }

}
export default ModalMenu
