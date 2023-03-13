import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  static targets = ['openUserMenu', 'userAuthLink', 'closeUserMenu']

  connect() {
    this.openUserMenuTarget.addEventListener('click', this.toggleDropdownMenu)

    this.userAuthLinkTargets.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-trigger').click();
      });
    });
  }

//need to figure out how to close the drop down menu when you click outside of the menu itself.

  // closeDropDown(event) {
  //   const dropDownClicked = document.getElementById('drop-down-menu').contains(event.target);

  //   if (!dropDownClicked && event.target.id !== 'menu-dropdown-items') {
  //     leave(document.getElementById('menu-dropdown-items'));
  //   }
  // }
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

