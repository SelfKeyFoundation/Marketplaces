'use strict';

class Modal {
  constructor () {
    this._bindings();
    this._addEventListeners();
  }

  _bindings () {
    this.show  = this.show.bind(this);
    this.fetch = this.fetch.bind(this);
    this.hide  = this.hide.bind(this);
  }

  _addEventListeners () {
    const modalTriggers = document.querySelectorAll('.ag-modal');
    [].forEach.call(modalTriggers, (el) => {
      el.addEventListener('click', _ => { this.clickTrigger(el) });
    });
  }

  clickTrigger (trigger)
  {
    const url = trigger.getAttribute('data-url');
    this.fetch(url);
  }

  fetch (url) {
    // TODO: check if exists in DOM (??)
    const xhr = new XMLHttpRequest();
    xhr.onload = evt => {
      const newDoc = evt.target.response;
      const _dialog = newDoc.querySelector('dialog');
      this.show(_dialog);
    };

    xhr.responseType = 'document';
    xhr.open("GET", url, true);
    xhr.send();
  }

  show (content) {
    this.hide();

    // Put dialog in the DOM
    const bodyEl = document.querySelector('body');
    bodyEl.appendChild(content);

    // Get dialog
    const _dialog = document.querySelector('dialog');
    if (_dialog.showModal)
    {
      _dialog.style.display = 'block';
      _dialog.addEventListener('close', this.hide);
      _dialog.showModal();
    }
    else
    {
      console.warn('[BROWSER]: No native dialog support > using Polyfill');
      bodyEl.classList.add('no-native-dialog');

      let overlay = document.querySelector('#ag-dialog-overlay');
      if (!overlay) {
        overlay =  document.createElement('div');
        overlay.id = 'ag-dialog-overlay';
        bodyEl.appendChild(overlay);
      }

      _dialog.style.display = 'block';
      // Scroll top
      //document.querySelector('body').scrollTop = 0;
    }

    const closeModalTriggers = document.querySelectorAll('dialog .ag-modal-close');
    closeModalTriggers.forEach((el) => {
      el.addEventListener('click', this.hide);
    });
  }

  hide () {
    const bodyEl = document.querySelector('body');
    const dialogEl = document.querySelector('dialog');
    if (!dialogEl) return;

    if (bodyEl.classList.contains('no-native-dialog'))
    {
      // Remove Overlay
      const overlayEl = document.querySelector('#ag-dialog-overlay');
      overlayEl.parentNode.removeChild(overlayEl);
    }
    else
    {
      if (dialogEl.getAttribute('open')) dialogEl.close();
    }

    // Remove listeners
    const closeModalTriggers = document.querySelectorAll('dialog .ag-modal-close');
    [].forEach.call(closeModalTriggers, (el) => {
      el.removeEventListener('click', this.hide);
    });

    bodyEl.removeChild(dialogEl);
  }
}