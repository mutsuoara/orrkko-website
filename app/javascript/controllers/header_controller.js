import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  static targets = ['openUserMenu', 'userAuthLink', 'closeUserMenu']

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }

    // closeUserMenu(element) {
    //   const userMenuClicked = document.getElementById('openUserMenu').contains(element.target);


    //   if (!userMenuClicked && element.target.id !== 'menu-dropdown-items') {
    //     leave(document.getElementById('openUserMenu'));
    //     leave(document.getElementById('user-menu-button'));
    //     leave(document.getElementById('menu-dropdown-items'));
    //   }   
    // }

  toggleDropdownMenu() {
    toggle(document.getElementById('menu-dropdown-items'));
  }
  
}

