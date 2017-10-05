'use strict'

angular.module('marketPlaceApp', ['rzModule'])
  .controller('ListController', function ($scope, $http) {

    //static data for country list
    $scope.countryList = [
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'AndorrA', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' },
      { name: 'Barbados', code: 'BB' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Belize', code: 'BZ' },
      { name: 'Benin', code: 'BJ' },
      { name: 'Bermuda', code: 'BM' },
      { name: 'Bhutan', code: 'BT' },
      { name: 'Bolivia', code: 'BO' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Botswana', code: 'BW' },
      { name: 'Bouvet Island', code: 'BV' },
      { name: 'Brazil', code: 'BR' },
      { name: 'British Indian Ocean Territory', code: 'IO' },
      { name: 'Brunei Darussalam', code: 'BN' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Burkina Faso', code: 'BF' },
      { name: 'Burundi', code: 'BI' },
      { name: 'Cambodia', code: 'KH' },
      { name: 'Cameroon', code: 'CM' },
      { name: 'Canada', code: 'CA' },
      { name: 'Cape Verde', code: 'CV' },
      { name: 'Cayman Islands', code: 'KY' },
      { name: 'Central African Republic', code: 'CF' },
      { name: 'Chad', code: 'TD' },
      { name: 'Chile', code: 'CL' },
      { name: 'China', code: 'CN' },
      { name: 'Christmas Island', code: 'CX' },
      { name: 'Cocos (Keeling) Islands', code: 'CC' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Comoros', code: 'KM' },
      { name: 'Congo', code: 'CG' },
      { name: 'Congo, The Democratic Republic of the', code: 'CD' },
      { name: 'Cook Islands', code: 'CK' },
      { name: 'Costa Rica', code: 'CR' },
      { name: 'Cote D\'Ivoire', code: 'CI' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cuba', code: 'CU' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Djibouti', code: 'DJ' },
      { name: 'Dominica', code: 'DM' },
      { name: 'Dominican Republic', code: 'DO' },
      { name: 'Ecuador', code: 'EC' },
      { name: 'Egypt', code: 'EG' },
      { name: 'El Salvador', code: 'SV' },
      { name: 'Equatorial Guinea', code: 'GQ' },
      { name: 'Eritrea', code: 'ER' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Ethiopia', code: 'ET' },
      { name: 'Falkland Islands (Malvinas)', code: 'FK' },
      { name: 'Faroe Islands', code: 'FO' },
      { name: 'Fiji', code: 'FJ' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'French Guiana', code: 'GF' },
      { name: 'French Polynesia', code: 'PF' },
      { name: 'French Southern Territories', code: 'TF' },
      { name: 'Gabon', code: 'GA' },
      { name: 'Gambia', code: 'GM' },
      { name: 'Georgia', code: 'GE' },
      { name: 'Germany', code: 'DE' },
      { name: 'Ghana', code: 'GH' },
      { name: 'Gibraltar', code: 'GI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Greenland', code: 'GL' },
      { name: 'Grenada', code: 'GD' },
      { name: 'Guadeloupe', code: 'GP' },
      { name: 'Guam', code: 'GU' },
      { name: 'Guatemala', code: 'GT' },
      { name: 'Guernsey', code: 'GG' },
      { name: 'Guinea', code: 'GN' },
      { name: 'Guinea-Bissau', code: 'GW' },
      { name: 'Guyana', code: 'GY' },
      { name: 'Haiti', code: 'HT' },
      { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
      { name: 'Holy See (Vatican City State)', code: 'VA' },
      { name: 'Honduras', code: 'HN' },
      { name: 'Hong Kong', code: 'HK' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'India', code: 'IN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Iran, Islamic Republic Of', code: 'IR' },
      { name: 'Iraq', code: 'IQ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Isle of Man', code: 'IM' },
      { name: 'Israel', code: 'IL' },
      { name: 'Italy', code: 'IT' },
      { name: 'Jamaica', code: 'JM' },
      { name: 'Japan', code: 'JP' },
      { name: 'Jersey', code: 'JE' },
      { name: 'Jordan', code: 'JO' },
      { name: 'Kazakhstan', code: 'KZ' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Kiribati', code: 'KI' },
      { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
      { name: 'Korea, Republic of', code: 'KR' },
      { name: 'Kuwait', code: 'KW' },
      { name: 'Kyrgyzstan', code: 'KG' },
      { name: 'Lao People\'S Democratic Republic', code: 'LA' },
      { name: 'Latvia', code: 'LV' },
      { name: 'Lebanon', code: 'LB' },
      { name: 'Lesotho', code: 'LS' },
      { name: 'Liberia', code: 'LR' },
      { name: 'Libyan Arab Jamahiriya', code: 'LY' },
      { name: 'Liechtenstein', code: 'LI' },
      { name: 'Lithuania', code: 'LT' },
      { name: 'Luxembourg', code: 'LU' },
      { name: 'Macao', code: 'MO' },
      { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
      { name: 'Madagascar', code: 'MG' },
      { name: 'Malawi', code: 'MW' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Maldives', code: 'MV' },
      { name: 'Mali', code: 'ML' },
      { name: 'Malta', code: 'MT' },
      { name: 'Marshall Islands', code: 'MH' },
      { name: 'Martinique', code: 'MQ' },
      { name: 'Mauritania', code: 'MR' },
      { name: 'Mauritius', code: 'MU' },
      { name: 'Mayotte', code: 'YT' },
      { name: 'Mexico', code: 'MX' },
      { name: 'Micronesia, Federated States of', code: 'FM' },
      { name: 'Moldova, Republic of', code: 'MD' },
      { name: 'Monaco', code: 'MC' },
      { name: 'Mongolia', code: 'MN' },
      { name: 'Montserrat', code: 'MS' },
      { name: 'Morocco', code: 'MA' },
      { name: 'Mozambique', code: 'MZ' },
      { name: 'Myanmar', code: 'MM' },
      { name: 'Namibia', code: 'NA' },
      { name: 'Nauru', code: 'NR' },
      { name: 'Nepal', code: 'NP' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Netherlands Antilles', code: 'AN' },
      { name: 'New Caledonia', code: 'NC' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Nicaragua', code: 'NI' },
      { name: 'Niger', code: 'NE' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Niue', code: 'NU' },
      { name: 'Norfolk Island', code: 'NF' },
      { name: 'Northern Mariana Islands', code: 'MP' },
      { name: 'Norway', code: 'NO' },
      { name: 'Oman', code: 'OM' },
      { name: 'Pakistan', code: 'PK' },
      { name: 'Palau', code: 'PW' },
      { name: 'Palestinian Territory, Occupied', code: 'PS' },
      { name: 'Panama', code: 'PA' },
      { name: 'Papua New Guinea', code: 'PG' },
      { name: 'Paraguay', code: 'PY' },
      { name: 'Peru', code: 'PE' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Pitcairn', code: 'PN' },
      { name: 'Poland', code: 'PL' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Puerto Rico', code: 'PR' },
      { name: 'Qatar', code: 'QA' },
      { name: 'Reunion', code: 'RE' },
      { name: 'Romania', code: 'RO' },
      { name: 'Russian Federation', code: 'RU' },
      { name: 'RWANDA', code: 'RW' },
      { name: 'Saint Helena', code: 'SH' },
      { name: 'Saint Kitts and Nevis', code: 'KN' },
      { name: 'Saint Lucia', code: 'LC' },
      { name: 'Saint Pierre and Miquelon', code: 'PM' },
      { name: 'Saint Vincent and the Grenadines', code: 'VC' },
      { name: 'Samoa', code: 'WS' },
      { name: 'San Marino', code: 'SM' },
      { name: 'Sao Tome and Principe', code: 'ST' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'Senegal', code: 'SN' },
      { name: 'Serbia and Montenegro', code: 'CS' },
      { name: 'Seychelles', code: 'SC' },
      { name: 'Sierra Leone', code: 'SL' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Slovakia', code: 'SK' },
      { name: 'Slovenia', code: 'SI' },
      { name: 'Solomon Islands', code: 'SB' },
      { name: 'Somalia', code: 'SO' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
      { name: 'Spain', code: 'ES' },
      { name: 'Sri Lanka', code: 'LK' },
      { name: 'Sudan', code: 'SD' },
      { name: 'Suriname', code: 'SR' },
      { name: 'Svalbard and Jan Mayen', code: 'SJ' },
      { name: 'Swaziland', code: 'SZ' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Syrian Arab Republic', code: 'SY' },
      { name: 'Taiwan, Province of China', code: 'TW' },
      { name: 'Tajikistan', code: 'TJ' },
      { name: 'Tanzania, United Republic of', code: 'TZ' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Timor-Leste', code: 'TL' },
      { name: 'Togo', code: 'TG' },
      { name: 'Tokelau', code: 'TK' },
      { name: 'Tonga', code: 'TO' },
      { name: 'Trinidad and Tobago', code: 'TT' },
      { name: 'Tunisia', code: 'TN' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Turkmenistan', code: 'TM' },
      { name: 'Turks and Caicos Islands', code: 'TC' },
      { name: 'Tuvalu', code: 'TV' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Ukraine', code: 'UA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'United States', code: 'US' },
      { name: 'United States Minor Outlying Islands', code: 'UM' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Uzbekistan', code: 'UZ' },
      { name: 'Vanuatu', code: 'VU' },
      { name: 'Venezuela', code: 'VE' },
      { name: 'Viet Nam', code: 'VN' },
      { name: 'Virgin Islands, British', code: 'VG' },
      { name: 'Virgin Islands, U.S.', code: 'VI' },
      { name: 'Wallis and Futuna', code: 'WF' },
      { name: 'Western Sahara', code: 'EH' },
      { name: 'Yemen', code: 'YE' },
      { name: 'Zambia', code: 'ZM' },
      { name: 'Zimbabwe', code: 'ZW' }
    ]
    // Do an initial search
    fetchAirtableData();

    function fetchAirtableData() {
      const apiURL = '#';
      $http.get(apiURL)
        .then((response) => {
          console.log(response);
          var tabData = response.data;
          $scope.result = [];
          $scope.baseResult = [];
          angular.forEach(tabData.Main, function (item) {
            var currentTax = tabData['Taxes'].find(function (e) {
              return e.data.fields['Company code'] === item.data.fields['Company code']
            });
            var currentLLC = tabData['LLCs'].find(function (e) {
              return e.data.fields['Company code'] === item.data.fields['Company code']
            });
            var currentCorporation = tabData['Corporations'].find(function (e) {
              return e.data.fields['Company code'] === item.data.fields['Company code']
            });
            var currentGuarantee = tabData['Guarantee'].find(function (e) {
              return e.data.fields['Company code'] === item.data.fields['Company code']
            });
            var legalBasis = [];
            if (currentLLC) {
              legalBasis = currentLLC.data.fields['Legal basis'];
            } else if (currentCorporation) {
              legalBasis = currentCorporation.data.fields['Legal basis'];
            } else if (currentGuarantee) {
              legalBasis = currentGuarantee.data.fields['Legal basis'];
            }
            var dataToPush = {
              countryCode: item.data.fields['Country code'],
              countryImgSrc: 'flags/1x1/' + item.data.fields['Country code'].toLowerCase() + '.svg',
              region: item.data.fields['Region'],
              type: item.data.fields['Legal entity'],
              offshoreTax: currentTax ? currentTax.data.fields['Offshore Income Tax Rate'] : '',
              tax: currentTax ? currentTax.data.fields['Corporate Tax Rate'] || 0 : 0,
              goodFor: item.data.fields['Good for'],
              legalBasis: legalBasis,
              timeToForm: item.data.fields['Time to form (days)'],
              itemTaxInfo: currentTax && currentTax.data ? currentTax.data.fields : null,
              itemCorporationInfo: currentCorporation && currentCorporation.data ? currentCorporation.data.fields : null,
              itemLLCInfo: currentLLC && currentLLC.data ? currentLLC.data.fields : null,
              itemGuaranteeInfo: currentGuarantee && currentGuarantee.data ? currentGuarantee.data.fields : null,
              itemCorpLLCInfo: currentCorporation && currentCorporation.data ? currentCorporation.data.fields : currentLLC && currentLLC.data ? currentLLC.data.fields : currentGuarantee && currentGuarantee.data ? currentGuarantee.data.fields : null
            }
            //TODO add data for filter
            $scope.result.push(dataToPush);
            $scope.baseResult.push(dataToPush);
          });
          console.log($scope.baseResult.length)
        });


      /**
       * Filter Checkbox Functions
       */
      $scope.cortpTaxRateFilter = {
        value: 100,
        options: {
          id: 'slider-id',
          onChange: function (id) {
            //console.log('on change ' + id + ' val: ' + $scope.cortpTaxRateFilter.value);
            $scope.filterTableData();
          },
        }
      };

      $scope.filterData = {};
      $scope.checkBoxChange = function (val, prop1, prop2) {
        $scope.filterData[prop1] = val ? 1 : 0;
        $scope.filterData[prop2] = val ? 1 : 0;
        $scope.filterTableData();
      }

      $scope.selecFilterType = function (prop) {
        if ($scope.filterData[prop] == 1) {
          $scope.filterData[prop] = 2;
        } else if ($scope.filterData[prop] == 2) {
          $scope.filterData[prop] = 0;
        } else {
          $scope.filterData[prop] = 1;
        }
        $scope.filterTableData();
      }

      $scope.filterTableData = function () {
        $scope.result = [];

        angular.forEach($scope.baseResult, function (item) {
          var p = true;

          if ($scope.filterData.corporation == 1) {
            if (!item.itemCorporationInfo) {
              p = false;
            }
          } else if ($scope.filterData.corporation == 2) {
            if (item.itemCorporationInfo) {
              p = false;
            }
          }
          if ($scope.filterData.llc == 1) {
            if (!item.itemLLCInfo) {
              p = false;
            }
          } else if ($scope.filterData.llc == 2) {
            if (item.itemLLCInfo) {
              p = false;
            }
          }

          if ($scope.filterData.corporateDirectors == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Corporate directors permitted'])) {
              p = false;
            }
          } else if ($scope.filterData.corporateDirectors == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Corporate directors permitted'])) {
              p = false;
            }
          }
          if ($scope.filterData.corporateShareHolder == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Corporate shareholders permitted'])) {
              p = false;
            }
          } else if ($scope.filterData.corporateShareHolder == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Corporate shareholders permitted'])) {
              p = false;
            }
          }

          if ($scope.filterData.cfcLaws == 1) {
            if (!(item.itemTaxInfo && item.itemTaxInfo['CFC Rules'])) {
              p = false;
            }
          } else if ($scope.filterData.cfcLaws == 2) {
            if (!(item.itemTaxInfo && !item.itemTaxInfo['CFC Rules'])) {
              p = false;
            }
          }
          //TODO ??? Tax Exemptions
          if ($scope.filterData.taxExemptions == 1) {
            if (!(item.itemTaxInfo &&
              (item.itemTaxInfo['Offshore Income Tax Exemption'] ||
                item.itemTaxInfo['Offshore dividends tax exemption'] ||
                item.itemTaxInfo['Offshore capitail gains tax exemption']))) {
              p = false;
            }
          } else if ($scope.filterData.taxExemptions == 2) {
            if (!(item.itemTaxInfo &&
              !item.itemTaxInfo['Offshore Income Tax Exemption'] &&
              !item.itemTaxInfo['Offshore dividends tax exemption'] &&
              !item.itemTaxInfo['Offshore capitail gains tax exemption'])) {
              p = false;
            }
          }

          if ($scope.filterData.minimumShareHolder == 1) {
            if (!(item.itemCorpLLCInfo && +item.itemCorpLLCInfo['Minimum shareholders'] == 1)) {
              p = false;
            }
          } else if ($scope.filterData.minimumShareHolder == 2) {
            if (!(item.itemCorpLLCInfo && +item.itemCorpLLCInfo['Minimum shareholders'] > 1)) {
              p = false;
            }
          }
          if ($scope.filterData.minimumDirectors == 1) {
            if (!(item.itemCorpLLCInfo && +item.itemCorpLLCInfo['Minimum directors'] == 1)) {
              p = false;
            }
          } else if ($scope.filterData.minimumDirectors == 2) {
            if (!(item.itemCorpLLCInfo && +item.itemCorpLLCInfo['Minimum directors'] != 1)) {
              p = false;
            }
          }

          if ($scope.filterData.localDirector == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Local director required'])) {
              p = false;
            }
          } else if ($scope.filterData.localDirector == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Local director required'])) {
              p = false;
            }
          }
          if ($scope.filterData.localSecretary == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Local secretary required'])) {
              p = false;
            }
          } else if ($scope.filterData.localSecretary == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Local secretary required'])) {
              p = false;
            }
          }

          if ($scope.filterData.isRedomiciliation == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Redomiciliation permitted'])) {
              p = false;
            }
          } else if ($scope.filterData.isRedomiciliation == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Redomiciliation permitted'])) {
              p = false;
            }
          }
          if ($scope.filterData.isExchangeControls == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Exchange controls'])) {
              p = false;
            }
          } else if ($scope.filterData.isExchangeControls == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Exchange controls'])) {
              p = false;
            }
          }

          if ($scope.filterData.isAnnualReturn == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Annual return'])) {
              p = false;
            }
          } else if ($scope.filterData.isAnnualReturn == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Annual return'])) {
              p = false;
            }
          }
          if ($scope.filterData.isAuditedAccounts == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Audited accounts'])) {
              p = false;
            }
          } else if ($scope.filterData.isAuditedAccounts == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Audited accounts'])) {
              p = false;
            }
          }

          if ($scope.filterData.isDirectorDisclosure == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Directors not disclosed in a public registry'])) {
              p = false;
            }
          } else if ($scope.filterData.isDirectorDisclosure == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Directors not disclosed in a public registry'])) {
              p = false;
            }
          }
          if ($scope.filterData.isSharedHoldersDisclosure == 1) {
            if (!(item.itemCorpLLCInfo && item.itemCorpLLCInfo['Shareholders not disclosed in a public registry'])) {
              p = false;
            }
          } else if ($scope.filterData.isSharedHoldersDisclosure == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['Shareholders not disclosed in a public registry'])) {
              p = false;
            }
          }

          if ($scope.filterData.AEOI == 1) {
            if (!(item.itemCorpLLCInfo && (item.itemCorpLLCInfo['AEOI'] == '2017' || item.itemCorpLLCInfo['AEOI'] == '2018'))) {
              p = false;
            }
          } else if ($scope.filterData.AEOI == 2) {
            if (!(item.itemCorpLLCInfo && !item.itemCorpLLCInfo['AEOI'])) {
              p = false;
            }
          }

          if (+item.tax > $scope.cortpTaxRateFilter.value / 100) {
            p = false
          }

          if ($scope.filterData.haveTaxtTreatyCountry) {
            if (!item.itemTaxInfo || $scope.filterData.haveTaxtTreatyCountry.code != item.itemTaxInfo['Country code']) {
              p = false;
            }
          }
          if ($scope.filterData.notHaveTaxtTreatyCountry) {
            if (item.itemTaxInfo && item.itemTaxInfo['Country code'] == $scope.filterData.notHaveTaxtTreatyCountry.code) {
              p = false;
            }
          }

          p && $scope.result.push(item);
        });
        console.log($scope.result.length)
      }

    }
  });