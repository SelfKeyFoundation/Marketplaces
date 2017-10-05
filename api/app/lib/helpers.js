module.exports = function(app) {
  module.capitalizeFirstLetter = function(string) {
    if (!string) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  module.isDefined = function(variable) {
    return (typeof variable !== typeof undefined);
  }

  module.countryBgImage = function(countryCode) {
    const code = countryCode.toUpperCase();
    return `https://beta.passports.io/images/countries/${code}/${code}_small.jpg`;
  }

  module.flagForCountry= function(countryCode) {
    const code = countryCode.toLowerCase();
    return `<span class="flag-icon flag-icon-${code}"></span>`;
  }

  module.getPhotoURL= function(photo) {
    if (Array.isArray(photo)) photo = photo[0];
    return photo.url;
  }

  module.getPhotoThumbURL= function(photo) {
    if (Array.isArray(photo)) photo = photo[0];

    let url = photo.thumbnails ?  photo.thumbnails.small.url : false;

    if (!url && photo.type == 'image/svg+xml')
      url = photo.url;

    return url;
  }

  module.formatCurrency= function(number, n, x) {
    if (!number) return '';
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  }

  /**
   * --------------------------------------------------------------------
   * stringToList
   * --------------------------------------------------------------------
   * Converts and string with dashes (-) in a html UL > LI
   *
  */
  module.stringToList= function(text, sep) {
    if (!text) return;
    if (!sep) sep = '-';

    const arrayOfStrings = text.split(sep);
    let html = '';
    arrayOfStrings.forEach((str) => {
      //const item = str.substring(1);
      const item = str;
      if (item) html += `<li>${item}</li>`;
    });
    return `<ul>${html}</ul>`;
  }

  module.stringToHtml= function(text) {
    if (!text) return;
    const html = text.replace(/\n/g, "<br />");
    return html;
  }

  module.replaceInString = function(target, search, replacement) {
    return target.split(search).join(replacement);
  }

  module._= function (t,key,replacements = {}) {
    const lang = app.locals.lang;
    let str = false;

    if (t[key])
      str = t[key]['fields'][lang.toUpperCase()];

    if (!str && t[key.toLowerCase()])
      str = t[key.toLowerCase()]['fields'][lang.toUpperCase()];

    if (!str && lang != 'en')
      str = key + " (!)";

    if (!str)
      str = key;

    for (var rep in replacements) {
      str = this.replaceInString(str, rep, replacements[rep]);
    }

    return str;
  }

  return module;
}