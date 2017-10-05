'use strict';

/**
 * --------------------------------------------------------------------
 * jQuery compatibility layer
 * --------------------------------------------------------------------
 */
window.$ = document.querySelectorAll.bind(document);
Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  [].forEach.call(this, function (el, i) {
	el.on(name, fn);
  });
};

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, argument) {
        argument = argument || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(argument, this[i], i, this);
        }
    };
}

class Application {
  constructor () {
    const dropdown = document.querySelector('a.dropdown-toggle');
    dropdown.addEventListener('click', function(e) {
      console.log(this.parentNode);
      e.preventDefault();
      this.parentNode.classList.toggle('show');
      return false;
    });

    console.log("Booting application");
  }
}
new Application();


class ListUI {
  constructor () {
    this._cacheDOM();
    if (!this.tableEl) return;

    this._setBinding();
    this._setEventListeners();

    this.initialTableY = this.tableEl.offsetTop;
  }

  _cacheDOM() {
    this.tableEl = document.querySelector('#table-country-list');
    this.fixedTableEl = document.querySelector('#table-country-list-fixed');
  }

  _setBinding () {
    this.onScroll = this.onScroll.bind(this);
  }

  _setEventListeners () {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll (ev) {
    let offset = window.scrollY;
    if (offset >= this.initialTableY )
      this.fixedTableEl.style.display = 'initial';
    else
      this.fixedTableEl.style.display = 'none';
  }


}
new ListUI();

class GridUI {
  constructor () {
    this.setBinding();
    this.setEventListeners();

    this.showBgImages();
    //this.initSelectDropDown();
  }

  setBinding () {
    this.showBgImages = this.showBgImages.bind(this);
  }

  setEventListeners () {
    window.addEventListener("scroll", this.showBgImages, { passive: true });

    $(".country-block").on('mouseenter', this.showAnimatedBars);
    $(".country-block").on('mouseleave', this.hideAnimatedBars);
  }

  showBgImages (e) {
    const countryBlockEls = document.querySelectorAll('[data-displayed="0"]');
    countryBlockEls.forEach((el) => {
      if (this._isVisible(el)) {
        const bg_image_url = el.getAttribute('data-bg-image');
        if (bg_image_url) {
          el.style.backgroundImage = `url(${bg_image_url})`;
        }
        // TODO: else show default
        el.setAttribute('data-displayed', '1');
      }
    });
  }

  showAnimatedBars(e) {
    const barEls = this.querySelectorAll('.bar-fill');
    [].forEach.call(barEls, function (el, i) {
      let width = el.getAttribute('data-val');
      width = width + "%";

      // SetTimeout required for the transition to kick-in
      window.setTimeout(_ => {
        el.style.width = width;
        console.log('set with %s', width);
      }, 50);
    });
  }

  hideAnimatedBars(e) {
    const barEls = this.querySelectorAll('.bar-fill');
    [].forEach.call(barEls, function (el, i) {
      el.style.width = "0px";
    });
  }

  initSelectDropDown () {
    const els = document.querySelectorAll('select.enhanced');
    els.forEach((el) => {
      new Choices(el, {});
    });
  }

  _isVisible (el) {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    const isVisible = (elTop >= 0) && ((elBottom - 150) <= window.innerHeight);
    return isVisible;
  }
}
new GridUI();


class FilterHandler {
  constructor () {
    this._cacheDOM();

    if (!this.parentEl) {
      console.warn("coudldn't find filter UI dom elements.");
      return;
    }

    this._binding();
    this._addEventListeners();

    // Initiate choices DDL
    new Choices(this.countrySelectEl, {

    });

    // Initiate sliders
    const sliderEls = this.parentEl.querySelectorAll('input.slider');
    sliderEls.forEach((slider) => {
      new Slider(slider, {});
    });
  }

  _binding () {
    this.filterCountries = this.filterCountries.bind(this);
  }

  _cacheDOM () {
    this.parentEl = document.querySelector('.filter-ui');
    this.countrySelectEl = document.querySelector('select.filter');
  }

  _addEventListeners () {
    this.countrySelectEl.addEventListener('change', this.filterCountries);
  }

  filterCountries () {
    console.log('hey');
    this.selectedCountry = this.countrySelectEl.options[this.countrySelectEl.selectedIndex].value;

    // TODO: trigger common filter function
    const trNodes = document.querySelectorAll(`tr.country[data-country-code]`);
    trNodes.forEach((rowEl) => {
      rowEl.classList.remove('dim');
      const rowCountry = rowEl.getAttribute('data-country-code');
      if (this.selectedCountry != '-1' && (rowCountry != this.selectedCountry)) {
        rowEl.classList.add('dim');
      }
    });

    const divNodes = document.querySelectorAll(`div.country[data-country-code]`);
    divNodes.forEach((rowEl) => {
      rowEl.classList.remove('dim');
      const rowCountry = rowEl.getAttribute('data-country-code');
      if (this.selectedCountry != '-1' && (rowCountry != this.selectedCountry)) {
        rowEl.classList.add('dim');
      }
    });
  }
}
new FilterHandler();

class FlyOutWindowHandler {
  constructor () {
    this._binding();
    this._cacheDOM();
    this._addEventListeners();
  }

  _binding () {
    this.onScroll = this.onScroll.bind(this);
    this.highlightNav = this.highlightNav.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  _cacheDOM () {
    this.bodyEl = document.querySelector('body');
    this.flyOutEl = document.querySelector('.flyout-window');

  }

  /**
   * --------------------------------------------------------------------
   * _setNavItems
   * --------------------------------------------------------------------
   * fetch existing nav li items data-view attribute for onscroll highlight
   *
  */
  _setNavItems () {
    this.items = [];
    this.navEls = document.querySelectorAll('.flyout-window nav li');
    this.navEls.forEach( el => {
      this.items.push(el.getAttribute('data-view'));
    });

    document.querySelectorAll('.flyout-window nav li').forEach(el => {
      el.addEventListener('click', this.smoothScroll);
    })
  }

  _addEventListeners () {
    const triggers = document.querySelectorAll('.trigger-flyout');
    triggers.forEach((el) => {
      el.addEventListener('mousedown', (e) => {
        if (e.target.tagName == 'A') return;

        // Highlight click & remove class after 1.5s
        el.classList.add('highlight');
        setTimeout(_ => { el.classList.remove('highlight')}, 1500);

        const url = el.getAttribute('data-flyout-url');
        if (url) {
          this.flyOutEl.innerHTML = '<div class="align-center"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i><span class="sr-only">Loading...</span></div>';
          this.toggle();

          // TODO: check if exists in DOM (??)
          const xhr = new XMLHttpRequest();
          xhr.onload = evt => {
            const newDoc = evt.target.response;
            const _template = newDoc.querySelector('template');
            const bodyEl = document.querySelector('body');
            const id = _template.getAttribute('id');
            bodyEl.appendChild(_template);

            const t = document.querySelector("template#" + id);
            const clone = document.importNode(t.content, true);
            const parentEl = this.flyOutEl;

            // TODO: move to helper function
            while (parentEl.firstChild) {
              parentEl.removeChild(parentEl.firstChild);
            }
            let flyOutBodyEl = document.querySelector('#flyout-body');
            flyOutBodyEl && flyOutBodyEl.removeEventListener('scroll', this.onScroll);


            this.flyOutEl.appendChild(clone);
            this._setNavItems();

            flyOutBodyEl = document.querySelector('#flyout-body');
            // Setup scroll event handling
            flyOutBodyEl = document.querySelector('#flyout-body');
            flyOutBodyEl.addEventListener('scroll', this.onScroll);

          };

          xhr.responseType = 'document';
          xhr.open("GET", url, true);
          xhr.send();
        }
        else {
          // Clone the new row and insert it into the table
          const t = el.querySelector(".flyout-details");
          const clone = document.importNode(t.content, true);
          const parentEl = this.flyOutEl;
          while (parentEl.firstChild) {
            parentEl.removeChild(parentEl.firstChild);
          }
          let flyOutBodyEl = document.querySelector('#flyout-body');
          flyOutBodyEl && flyOutBodyEl.removeEventListener('scroll', this.onScroll);
          this.flyOutEl.classList.remove('reduced');

          this.flyOutEl.appendChild(clone);
          this.toggle();
          this._setNavItems();

          flyOutBodyEl = document.querySelector('#flyout-body');

          // Setup scroll event handling
          flyOutBodyEl = document.querySelector('#flyout-body');
          flyOutBodyEl.addEventListener('scroll', this.onScroll);
        }
      });
    });

    this.bodyEl.addEventListener('mousedown', (ev) => {
      if (this.bodyEl.classList.contains('flyout-visible')) {
        if (ev.target == this.bodyEl)
          this.toggle();
      }
    });

  }

  onScroll (e) {
    //console.log(e);
    let flyOutBodyEl = document.querySelector('#flyout-body');
    if (flyOutBodyEl.scrollTop > 100) {
      this.flyOutEl.classList.add('reduced');
    }
    else {
      this.flyOutEl.classList.remove('reduced');
    }

    this.highlightNav(e, flyOutBodyEl);
  }

  highlightNav (e, el) {
    // TODO: use intersection observer ?
    const fromTop = el.scrollTop;

    let current = this.items.map((item) => {
      const sectionEl = document.getElementById(item);
      if (sectionEl && sectionEl.offsetTop <= fromTop + 200)
        return sectionEl;
    });

    let selectedEl = current[this.items.length];
    for(var i=this.items.length; i>=0; i--) {
      selectedEl = selectedEl ? selectedEl : current[i];
    }

    if (fromTop < 10) selectedEl = current[0];

    if (selectedEl) {
      this.navEls.forEach((el) => el.classList.remove('active'));
      document.querySelector(`li[data-view=${selectedEl.id}]`).classList.add('active');
    }
  }

  toggle () {
    this.flyOutEl.classList.toggle('visible');
    this.bodyEl.classList.toggle('flyout-visible');
  }

  smoothScroll (e) {
    e.preventDefault();

    const flyOutBodyEl = document.querySelector('#flyout-body');
    let target = e.target.getAttribute('data-view');
    if (!target) target = e.target.parentNode.getAttribute('data-view');

    const targetEl = document.querySelector(`#${target}`);
    this._scrollTo(flyOutBodyEl, (targetEl.offsetTop - 200), 300);
  }

  _scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    setTimeout(_ => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      this._scrollTo(element, to, duration - 10);
    }, 10);
}
}

new FlyOutWindowHandler();




class FunnelModal {
  constructor () {
    // TODO: Check if modal is available
    this.data = {};
    this._initModal();
  }

  _initModal () {
    this.modal = new Modal();

    // Get inhert template
    const template = document.querySelector('#funnel-modal-template');
    const clone = document.importNode(template.content, true);
    this.modal.show(clone);

    this._binding();
    this._cacheDom();
    this._addEventListeners();
    this._initCountrySelect();
  }

  _binding () {
    this.showNextQuestion = this.showNextQuestion.bind(this);
    this.completeSurvey = this.completeSurvey.bind(this);
  }

  _cacheDom () {
    this.dialogEl = document.querySelector('dialog.funnel-survey');
    this.responseOptionEls = this.dialogEl.querySelectorAll('ul.options li');
    this.residencyCountryEl = this.dialogEl.querySelector('select[name=residency]');
    this.citizenCountryEl = this.dialogEl.querySelector('select[name=citizen]');
    this.nextButtonEls = this.dialogEl.querySelectorAll('button[data-scroll-to]');
    this.completeButtonEl = this.dialogEl.querySelector('button.btn-primary');
  }

  _addEventListeners () {
    this.responseOptionEls.forEach((el) => el.addEventListener('click', (e) => {
      e.target.parentNode.querySelectorAll('li').forEach((el) => {
        el.classList.remove('active');
      });

      this.data[e.target.getAttribute('data-model')] = e.target.getAttribute('data-value');
      e.target.classList.add('active');
    }));

    this.nextButtonEls.forEach((el) => el.addEventListener('mousedown', _  => this.showNextQuestion(el)));
    this.completeButtonEl.addEventListener('mousedown', _ => this.completeSurvey());
  }

  _initCountrySelect () {
    const choices1 = new Choices(this.residencyCountryEl, {});
    const choices2 = new Choices(this.citizenCountryEl, {});
  }

  showNextQuestion (el) {
    const HALF_A_SECOND = 200;
    const nextElement = document.querySelector(el.getAttribute('data-scroll-to'));
    this._scrollTo(this.dialogEl, nextElement, HALF_A_SECOND);

  }

  showQuestion(activeQuestion) {
    const questionEls = this.dialogEl.querySelectorAll('div.question');
    questionEls.forEach((el) => el.style.display = 'none' );
    activeQuestion.style.display = 'block';

  }

  completeSurvey () {
    this.modal.hide()
  }

  _scrollTo (element, to, duration) {
    if (duration <= 0) {
      return;
    }
    const difference = to.offsetTop - 50 - element.scrollTop;
    const perTick = difference / duration * 10;
    setTimeout(_ => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) {
        return;
      }
      this._scrollTo(element, to, duration - 10);
    }, 10);
  }
}

//new FunnelModal();

