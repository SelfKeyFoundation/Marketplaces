'use strict';
const badgeClasses = ['warning', 'info', 'success', 'primary', 'default'];
const isoCountries = {
  'Afghanistan': 'AF',
  'Aland Islands': 'AX',
  'Albania': 'AL',
  'Algeria': 'DZ',
  'American Samoa': 'AS',
  'Andorra': 'AD',
  'Angola': 'AO',
  'Anguilla': 'AI',
  'Antarctica': 'AQ',
  'Antigua And Barbuda': 'AG',
  'Argentina': 'AR',
  'Armenia': 'AM',
  'Aruba': 'AW',
  'Australia': 'AU',
  'Austria': 'AT',
  'Azerbaijan': 'AZ',
  'Bahamas': 'BS',
  'Bahrain': 'BH',
  'Bangladesh': 'BD',
  'Barbados': 'BB',
  'Belarus': 'BY',
  'Belgium': 'BE',
  'Belize': 'BZ',
  'Benin': 'BJ',
  'Bermuda': 'BM',
  'Bhutan': 'BT',
  'Bolivia': 'BO',
  'Bosnia And Herzegovina': 'BA',
  'Botswana': 'BW',
  'Bouvet Island': 'BV',
  'Brazil': 'BR',
  'British Indian Ocean Territory': 'IO',
  'Brunei Darussalam': 'BN',
  'Bulgaria': 'BG',
  'Burkina Faso': 'BF',
  'Burundi': 'BI',
  'Cambodia': 'KH',
  'Cameroon': 'CM',
  'Canada': 'CA',
  'Cape Verde': 'CV',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  'Chad': 'TD',
  'Chile': 'CL',
  'China': 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  'Colombia': 'CO',
  'Comoros': 'KM',
  'Congo': 'CG',
  'Congo, Democratic Republic': 'CD',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  'Cote D\'Ivoire': 'CI',
  'Croatia': 'HR',
  'Cuba': 'CU',
  'Cyprus': 'CY',
  'Czech Republic': 'CZ',
  'Denmark': 'DK',
  'Djibouti': 'DJ',
  'Dominica': 'DM',
  'Dominican Republic': 'DO',
  'Ecuador': 'EC',
  'Egypt': 'EG',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  'Eritrea': 'ER',
  'Estonia': 'EE',
  'Ethiopia': 'ET',
  'Falkland Islands': 'FK',
  'Faroe Islands': 'FO',
  'Fiji': 'FJ',
  'Finland': 'FI',
  'France': 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  'French Southern Territories': 'TF',
  'Gabon': 'GA',
  'Gambia': 'GM',
  'Georgia': 'GE',
  'Germany': 'DE',
  'Ghana': 'GH',
  'Gibraltar': 'GI',
  'Greece': 'GR',
  'Greenland': 'GL',
  'Grenada': 'GD',
  'Guadeloupe': 'GP',
  'Guam': 'GU',
  'Guatemala': 'GT',
  'Guernsey': 'GG',
  'Guinea': 'GN',
  'Guinea-Bissau': 'GW',
  'Guyana': 'GY',
  'Haiti': 'HT',
  'Heard Island & Mcdonald Islands': 'HM',
  'Holy See (Vatican City State)': 'VA',
  'Honduras': 'HN',
  'Hong Kong': 'HK',
  'Hungary': 'HU',
  'Iceland': 'IS',
  'India': 'IN',
  'Indonesia': 'ID',
  'Iran, Islamic Republic Of': 'IR',
  'Iraq': 'IQ',
  'Ireland': 'IE',
  'Isle Of Man': 'IM',
  'Israel': 'IL',
  'Italy': 'IT',
  'Jamaica': 'JM',
  'Japan': 'JP',
  'Jersey': 'JE',
  'Jordan': 'JO',
  'Kazakhstan': 'KZ',
  'Kenya': 'KE',
  'Kiribati': 'KI',
  'Korea': 'KR',
  'Kuwait': 'KW',
  'Kyrgyzstan': 'KG',
  'Lao People\'s Democratic Republic': 'LA',
  'Latvia': 'LV',
  'Lebanon': 'LB',
  'Lesotho': 'LS',
  'Liberia': 'LR',
  'Libyan Arab Jamahiriya': 'LY',
  'Liechtenstein': 'LI',
  'Lithuania': 'LT',
  'Luxembourg': 'LU',
  'Macao': 'MO',
  'Macedonia': 'MK',
  'Madagascar': 'MG',
  'Malawi': 'MW',
  'Malaysia': 'MY',
  'Maldives': 'MV',
  'Mali': 'ML',
  'Malta': 'MT',
  'Marshall Islands': 'MH',
  'Martinique': 'MQ',
  'Mauritania': 'MR',
  'Mauritius': 'MU',
  'Mayotte': 'YT',
  'Mexico': 'MX',
  'Micronesia, Federated States Of': 'FM',
  'Moldova': 'MD',
  'Monaco': 'MC',
  'Mongolia': 'MN',
  'Montenegro': 'ME',
  'Montserrat': 'MS',
  'Morocco': 'MA',
  'Mozambique': 'MZ',
  'Myanmar': 'MM',
  'Namibia': 'NA',
  'Nauru': 'NR',
  'Nepal': 'NP',
  'Netherlands': 'NL',
  'Netherlands Antilles': 'AN',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  'Nicaragua': 'NI',
  'Niger': 'NE',
  'Nigeria': 'NG',
  'Niue': 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  'Norway': 'NO',
  'Oman': 'OM',
  'Pakistan': 'PK',
  'Palau': 'PW',
  'Palestinian Territory, Occupied': 'PS',
  'Panama': 'PA',
  'Papua New Guinea': 'PG',
  'Paraguay': 'PY',
  'Peru': 'PE',
  'Philippines': 'PH',
  'Pitcairn': 'PN',
  'Poland': 'PL',
  'Portugal': 'PT',
  'Puerto Rico': 'PR',
  'Qatar': 'QA',
  'Reunion': 'RE',
  'Romania': 'RO',
  'Russian Federation': 'RU',
  'Rwanda': 'RW',
  'Saint Barthelemy': 'BL',
  'Saint Helena': 'SH',
  'Saint Kitts And Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Martin': 'MF',
  'Saint Pierre And Miquelon': 'PM',
  'Saint Vincent And Grenadines': 'VC',
  'Samoa': 'WS',
  'San Marino': 'SM',
  'Sao Tome And Principe': 'ST',
  'Saudi Arabia': 'SA',
  'Senegal': 'SN',
  'Serbia': 'RS',
  'Seychelles': 'SC',
  'Sierra Leone': 'SL',
  'Singapore': 'SG',
  'Slovakia': 'SK',
  'Slovenia': 'SI',
  'Solomon Islands': 'SB',
  'Somalia': 'SO',
  'South Africa': 'ZA',
  'South Georgia And Sandwich Isl.': 'GS',
  'Spain': 'ES',
  'Sri Lanka': 'LK',
  'Sudan': 'SD',
  'Suriname': 'SR',
  'Svalbard And Jan Mayen': 'SJ',
  'Swaziland': 'SZ',
  'Sweden': 'SE',
  'Switzerland': 'CH',
  'Syrian Arab Republic': 'SY',
  'Taiwan': 'TW',
  'Tajikistan': 'TJ',
  'Tanzania': 'TZ',
  'Thailand': 'TH',
  'Timor-Leste': 'TL',
  'Togo': 'TG',
  'Tokelau': 'TK',
  'Tonga': 'TO',
  'Trinidad And Tobago': 'TT',
  'Tunisia': 'TN',
  'Turkey': 'TR',
  'Turkmenistan': 'TM',
  'Turks And Caicos Islands': 'TC',
  'Tuvalu': 'TV',
  'Uganda': 'UG',
  'Ukraine': 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'United States': 'US',
  'United States Outlying Islands': 'UM',
  'Uruguay': 'UY',
  'Uzbekistan': 'UZ',
  'Vanuatu': 'VU',
  'Venezuela': 'VE',
  'Vietnam': 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands, U.S.': 'VI',
  'Wallis And Futuna': 'WF',
  'Western Sahara': 'EH',
  'Yemen': 'YE',
  'Zambia': 'ZM',
  'Zimbabwe': 'ZW'
};


var marketplaceApp = angular.module('marketplaceApp', ['myDirectives', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'btorfs.multiselect']);
marketplaceApp.controller('ListController', function ($scope, $http, $document, $sce, $timeout) {

  $scope.isoCountries = isoCountries;
  $scope.countriesFilterData = {options: [], selection: []};
  $scope.currenciesFilterData = {options: [], selection: []};
  $scope.iconClassMap = {
    "iOS": "apple",
    "Android": "android",
    "Windows": "windows",
    "Smartphone": "mobile",
    "Desktop": "laptop",
    "Tablet": "tablet",
  };

  $scope.randomClass = function () {
    return badgeClasses[Math.floor((Math.random() * badgeClasses.length))];
  };


  // Do an initial search
  fetchAirtableData();

  $scope.getHtml = function (htmlString) {
    return $sce.trustAsHtml(htmlString);
  };

  function fetchAirtableData() {
    let apiURL = "#";

    $http.get(apiURL)
      .then((response) => {
        $scope.list = response.data.Wallets.map(c => {
          if (c.data.fields['Countries available']) {
            //fill countries array with all available countries
            c.data.fields['Countries available'].forEach(country => {
              if ($scope.countriesFilterData.options.indexOf(country) === -1) {
                $scope.countriesFilterData.options.push(country);
              }
            });
            c.data.fields['Currencies available'].forEach(currency => {
              if ($scope.currenciesFilterData.options.indexOf(currency) === -1) {
                $scope.currenciesFilterData.options.push(currency);
              }
            });
          }
          if (c.data.fields['Flyout description']) {
            //convert to html
            c.data.fields['Flyout description'] = '<p>' + c.data.fields['Flyout description'].replace(new RegExp('\n', 'g'), '<br>') + '</p>';
          }
          $scope.countriesFilterData.options.sort();
          return c.data.fields;
        });
      });
  }

  $scope.toggleFlyout = function (wallet) {
    $scope.selectedWallet = wallet;
    let body = angular.element($document).find('body');
    wallet ? body.addClass('disabled') : body.removeClass('disabled')
  };

  let toggle = function () {
    return function () {
      this.value = (this.value + 1) % this.allValues.length;
    }
  };

  let active = function () {
    return function () {
      return this.allValues[this.value];
    }
  };

  function DataFilter() {
    this.value = 0;
    this.toggle = toggle(this);
    this.active = active(this);
    this.filter = function (data) {
      try {
        return this.active().check(data);
      } catch (e) {
        //if filters themselves don't check existence of given property
        //or other error happens
        if (!data[this.property]) return false;
      }
    }
  }

  //checks if given data contains some value
  function IncludesSwitcher(property, valueToBeIncluded) {
    this.property = property;
    this.allValues = [{
      class: "btn-secondary",
      check: () => true
    }, {
      class: "btn-success",
      check: (data) => data[this.property].indexOf(valueToBeIncluded) !== -1
    }];
  }

  IncludesSwitcher.prototype = new DataFilter();
  IncludesSwitcher.prototype.constructor = IncludesSwitcher;

  //checks if given data contains all values of array
  function IncludesAllFilter(property, selection) {
    this.property = property;
    this.allValues = [{
      class: "btn-success",
      check: (data) => {
        for (let i = 0; i < $scope[selection].selection.length; i++) {
          if (data[this.property].indexOf($scope[selection].selection[i]) === -1) return false;
        }
        return true;
      }
    }];
  }

  IncludesAllFilter.prototype = new DataFilter();
  IncludesAllFilter.prototype.constructor = IncludesAllFilter;

  //checks if given data contains something else than elements of given array
  function IncludesOtherThanSwitcher(property, valuesToBeIncluded) {
    this.property = property;
    this.valuesToBeIncluded = valuesToBeIncluded;
    this.allValues = [{
      class: "btn-secondary",
      check: () => true
    }, {
      class: "btn-success",
      check: (data) => {
        for (var i = 0; i < data[this.property].length; i++) {
          if (this.valuesToBeIncluded.indexOf(data[this.property][i]) === -1) return true;
        }
        return false;
      }
    }]
  }

  IncludesOtherThanSwitcher.prototype = new DataFilter();
  IncludesOtherThanSwitcher.prototype.constructor = IncludesOtherThanSwitcher;

  //checks if given data is tue or false
  function BooleanCompareFilter(property) {
    this.property = property;
    this.allValues = [{
      class: "btn-secondary",
      check: () => true
    }, {
      class: "btn-success",
      check: (data) => data[property] === true
    }];
  }

  BooleanCompareFilter.prototype = new DataFilter();
  BooleanCompareFilter.prototype.constructor = BooleanCompareFilter;

  //checks if given data is tue or false or doesn't check at all
  function BooleanAdvancedCompareFilter(property) {
    this.property = property;
    this.allValues = [{
      text: "Click to filter",
      class: "btn-secondary",
      /*iconClass: "check",*/
      check: () => true
    }, {
      text: "Available",
      class: "btn-success",
      iconClass: "check",
      check: (data) => data[this.property] ? true : false
    }, {
      text: "Not available",
      class: "btn-danger",
      iconClass: "minus-circle",
      check: (data) => data[this.property] ? false : true
    }];
  }

  BooleanAdvancedCompareFilter.prototype = new DataFilter();
  BooleanAdvancedCompareFilter.prototype.constructor = BooleanAdvancedCompareFilter;


  $scope.filters = {
    countries: new IncludesAllFilter('Countries available', 'countriesFilterData'),
    currencies: new IncludesAllFilter('Currencies available', 'currenciesFilterData'),
    withdrawFundsViaBankTransfer: new BooleanAdvancedCompareFilter('Withdraw funds (bank transfer) permitted'),
    prePaidCard: new BooleanAdvancedCompareFilter('Get a Debit/Pre-paid card'),
    accountTypeConsumer: new BooleanCompareFilter('Personal Account'),
    accountTypeBusiness: new BooleanCompareFilter('Business Account'),
    walletPrePaidPayment: new IncludesSwitcher('Type', 'Prepaid payment wallet'),
    walletVirtualCurrentAccount: new IncludesSwitcher('Type', 'Current account'),
    addFundBankTransfer: new IncludesSwitcher('Add funds', 'Bank transfer'),
    addFundCreditCard: new IncludesSwitcher('Add funds', 'Credit card'),
    addFundDebitCard: new IncludesSwitcher('Add funds', 'Debit card'),
    addFundOthers: new IncludesOtherThanSwitcher('Add funds', ['Bank transfer', 'Credit card', 'Debit card']),
    platformIos: new IncludesSwitcher('OS availability', 'iOS'),
    platformAndroid: new IncludesSwitcher('OS availability', 'Android'),
    platformWindows: new IncludesSwitcher('OS availability', 'Windows'),
    platformSmartphone: new IncludesSwitcher('Device availability', 'Smartphone'),
    platformTablet: new IncludesSwitcher('Device availability', 'Tablet'),
    platformDesktop: new IncludesSwitcher('Device availability', 'Desktop')
  };

  $scope.passesFilters = function (data) {
    for (let key in $scope.filters) {
      if (!$scope.filters[key].filter) continue;
      if (!$scope.filters[key].filter(data)) return false;
    }
    return true;
  };

  $scope.showFullInfo = function (event) {
    event.stopPropagation();
    let parent = angular.element(event.target.closest(".limit-height"));
    if (parent.hasClass("free")) {
      parent.removeClass("free");
    } else {
      parent.addClass("free")
    }
  };

});

marketplaceApp.filter('unsafe', ['$sce', function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
}]);

marketplaceApp.filter('longHtml', ['$sce', function ($sce) {
  return function (val) {
    return val.length > 15 ? $sce.trustAsHtml('<div style="max-height: 20em; overflow:auto;">' + val + '</div>') : '';
  };
}]);

// update popover template for binding unsafe html
/*
angular.module("template/popover/popover.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
    "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);*/
