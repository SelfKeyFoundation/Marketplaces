'use strict';

class SiteAdmin {
  constructor () {

    this.addEventListeners();
  }

  addEventListeners() {
    const menuOptions = document.querySelectorAll("ul.nav li");
    menuOptions.forEach((elem) => elem.addEventListener('click', this.changeActiveTab));
  }

  changeActiveTab(e) {
    e.preventDefault();

    const tabs = document.querySelectorAll('ul.nav li');
    tabs.forEach((tab) => { tab.classList.remove('active')});
    this.classList.add('active');

    const contentAreas = document.querySelectorAll('div.content');
    contentAreas.forEach((elem) => { elem.style.display = 'none'; });

    const activeContentElm = document.getElementById(this.getAttribute('data-target'))
    activeContentElm.style.display = 'block';

    return false;
  }
}

new SiteAdmin();