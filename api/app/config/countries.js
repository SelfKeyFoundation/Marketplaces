
/*
|--------------------------------------------------------------------------
| Country Lookup
|--------------------------------------------------------------------------
|
|
*/

countries = {
  'visa': {
    'http://en.wikipedia.org/wiki/Visa_requirements_for_German_citizens' : 'DE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Palestinian_citizens' : 'PS',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Vietnamese_citizens' : 'VN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Venezuelan_citizens' : 'VE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Turkish_citizens' : 'TR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_United_States_citizens' : 'US',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Uruguayan_citizens' : 'UY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Uzbekistani_citizens' : 'UZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Seychellois_citizens' : 'SC',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_San_Marino_citizens' : 'SM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Saudi_citizens' : 'SA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Thai_citizens' : 'TH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Vanuatuan_citizens' : 'VU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Tongan_citizens' : 'TO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Slovak_citizens' : 'SK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Qatari_citizens' : 'QA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Austrian_citizens' : 'AT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Slovenian_citizens' : 'SI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Portuguese_citizens' : 'PT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Czech_citizens' : 'CZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Singaporean_citizens' : 'SG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Burundian_citizens' : 'BI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Liechtenstein_citizens' : 'LI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Tanzanian_citizens' : 'TZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Honduran_citizens' : 'HN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Greek_citizens' : 'GR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Finnish_citizens' : 'FI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Eritrean_citizens' : 'ER',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Kyrgyzstani_citizens' : 'KG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Swedish_citizens' : 'SE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Kazakh_citizens' : 'KZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Trinidad_and_Tobago_citizens' : 'TT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Zimbabwean_citizens' : 'ZW',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Yemeni_citizens' : 'YE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Taiwanese_citizens' : 'TW',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Ukrainian_citizens' : 'UA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Papua_New_Guinean_citizens' : 'PG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Syrian_citizens' : 'SY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Romanian_citizens' : 'RO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Russian_citizens' : 'RU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Turkmen_citizens' : 'TM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Mon%C3%A9gasque_citizens' : 'MC',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Malaysian_citizens' : 'MY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Samoan_citizens' : 'WS',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Peruvian_citizens' : 'PE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Nigerian_citizens' : 'NG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Pakistani_citizens' : 'PK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Nepalese_citizens' : 'NP',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Moroccan_citizens' : 'MA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Mongolian_citizens' : 'MN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Mauritian_citizens' : 'MU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Moldovan_citizens' : 'MD',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Chinese_citizens_of_Macau' : 'MO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Macedonian_citizens' : 'MK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Maltese_citizens' : 'MT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Lebanese_citizens' : 'LB',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Lithuanian_citizens' : 'LT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Luxembourgian_citizens' : 'LU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Israeli_citizens' : 'IL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Jamaican_citizens' : 'JM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Japanese_citizens' : 'JP',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Montenegrin_citizens' : 'ME',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Mexican_citizens' : 'MX',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Iraqi_citizens' : 'IQ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Irish_citizens' : 'IE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Hungarian_citizens' : 'HU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Icelandic_citizens' : 'IS',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_French_citizens' : 'FR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Georgian_citizens' : 'GE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Ghanaian_citizens' : 'GH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Grenadian_citizens' : 'GD',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_British_citizens' : 'GB',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Costa_Rican_citizens' : 'CR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Croatian_citizens' : 'HR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Cuban_citizens' : 'CU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Cypriot_citizens' : 'CY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Danish_citizens' : 'DK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Dominica_citizens' : 'DM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Dominican_Republic_citizens' : 'DO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Dutch_citizens' : 'NL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_East_Timorese_citizens' : 'TL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Ecuadorian_citizens' : 'EC',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Ethiopian_citizens' : 'ET',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Fijian_citizens' : 'FJ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Guatemalan_citizens' : 'GT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Chinese_citizens_of_Hong_Kong' : 'HK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Indian_citizens' : 'IN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Indonesian_citizens' : 'ID',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Iranian_citizens' : 'IR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Italian_citizens' : 'IT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Jordanian_citizens' : 'JO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Kenyan_citizens' : 'KE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_North_Korean_citizens' : 'KP',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_South_Korean_citizens' : 'KR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Latvian_citizens' : 'LV',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Burmese_citizens' : 'MM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_New_Zealand_citizens' : 'NZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Nicaraguan_citizens' : 'NI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Panamanian_citizens' : 'PA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Filipino_citizens' : 'PH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Polish_citizens' : 'PL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Saint_Kitts_and_Nevis_citizens' : 'KN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Serbian_citizens' : 'RS',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_South_African_citizens' : 'ZA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Spanish_citizens' : 'ES',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Sri_Lankan_citizens' : 'LK',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Swiss_citizens' : 'CH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Tajik_citizens' : 'TJ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Tunisian_citizens' : 'TN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Paraguayan_citizens' : 'PY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Angolan_citizens' : 'AO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bolivian_citizens' : 'BO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Tuvaluan_citizens' : 'TV',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Saint_Lucian_citizens' : 'LC',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Omani_citizens' : 'OM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Palauan_citizens' : 'PW',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Namibian_citizens' : 'NA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Mozambican_citizens' : 'MZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Micronesian_citizens' : 'FM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Sudanese_citizens' : 'SD',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Maldivian_citizens' : 'MV',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Marshall_Islands_citizens' : 'MH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Ivorian_citizens' : 'CI',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Laotian_citizens' : 'LA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bruneian_citizens' : 'BN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bulgarian_citizens' : 'BG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Cambodian_citizens' : 'KH',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Cameroonian_citizens' : 'CM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Canadian_citizens' : 'CA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Cape_Verdean_citizens' : 'CV',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Egyptian_citizens' : 'EG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_El_Salvador_citizens' : 'SV',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Estonian_citizens' : 'EE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Afghan_citizens' : 'AF',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Albanian_citizens' : 'AL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Algerian_citizens' : 'DZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Andorran_citizens' : 'AD',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Antigua_and_Barbuda_citizens' : 'AG',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Argentine_citizens' : 'AR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Armenian_citizens' : 'AM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Australian_citizens' : 'AU',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Azerbaijani_citizens' : 'AZ',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bahamian_citizens' : 'BS',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bangladeshi_citizens' : 'BD',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Barbadian_citizens' : 'BB',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Belarusian_citizens' : 'BY',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Belgian_citizens' : 'BE',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bhutanese_citizens' : 'BT',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Bosnia_and_Herzegovina_citizens' : 'BA',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Botswana_citizens' : 'BW',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Brazilian_citizens' : 'BR',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Chilean_citizens' : 'CL',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Chinese_citizens' : 'CN',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Colombian_citizens' : 'CO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Zambian_citizens' : 'ZM',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Norwegian_citizens' : 'NO',
    'http://en.wikipedia.org/wiki/Visa_requirements_for_Saint_Vincent_and_the_Grenadines_citizens' : 'VC'
  },

  'codes': {
    'AD' : 'Andorra',
    'AE' : 'United Arab Emirates',
    'AF' : 'Afghanistan',
    'AG' : 'Antigua and Barbuda',
    'AI' : 'Anguilla',
    'AL' : 'Albania',
    'AM' : 'Armenia',
    'AO' : 'Angola',
    'AQ' : 'Antarctica',
    'AR' : 'Argentina',
    'AS' : 'American Samoa',
    'AT' : 'Austria',
    'AU' : 'Australia',
    'AW' : 'Aruba',
    'AX' : 'Ã…land',
    'AZ' : 'Azerbaijan',
    'BA' : 'Bosnia and Herzegovina',
    'BB' : 'Barbados',
    'BD' : 'Bangladesh',
    'BE' : 'Belgium',
    'BF' : 'Burkina Faso',
    'BG' : 'Bulgaria',
    'BH' : 'Bahrain',
    'BI' : 'Burundi',
    'BJ' : 'Benin',
    'BL' : 'Saint BarthÃ©lemy',
    'BM' : 'Bermuda',
    'BN' : 'Brunei',
    'BO' : 'Bolivia',
    'BQ' : 'Bonaire',
    'BR' : 'Brazil',
    'BS' : 'Bahamas',
    'BT' : 'Bhutan',
    'BV' : 'Bouvet Island',
    'BW' : 'Botswana',
    'BY' : 'Belarus',
    'BZ' : 'Belize',
    'CA' : 'Canada',
    'CC' : 'Cocos Keeling Islands',
    'CD' : 'Democratic Republic of the Congo',
    'CF' : 'Central African Republic',
    'CG' : 'Republic of the Congo',
    'CH' : 'Switzerland',
    'CI' : 'Ivory Coast',
    'CK' : 'Cook Islands',
    'CL' : 'Chile',
    'CM' : 'Cameroon',
    'CN' : 'China',
    'CO' : 'Colombia',
    'CR' : 'Costa Rica',
    'CU' : 'Cuba',
    'CV' : 'Cape Verde',
    'CW' : 'Curacao',
    'CX' : 'Christmas Island',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DE' : 'Germany',
    'DJ' : 'Djibouti',
    'DK' : 'Denmark',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'DZ' : 'Algeria',
    'EC' : 'Ecuador',
    'EE' : 'Estonia',
    'EG' : 'Egypt',
    'EH' : 'Western Sahara',
    'ER' : 'Eritrea',
    'ES' : 'Spain',
    'ET' : 'Ethiopia',
    'FI' : 'Finland',
    'FJ' : 'Fiji',
    'FK' : 'Falkland Islands',
    'FM' : 'Micronesia',
    'FO' : 'Faroe Islands',
    'FR' : 'France',
    'GA' : 'Gabon',
    'GB' : 'United Kingdom',
    'GD' : 'Grenada',
    'GE' : 'Georgia',
    'GF' : 'French Guiana',
    'GG' : 'Guernsey',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GL' : 'Greenland',
    'GM' : 'Gambia',
    'GN' : 'Guinea',
    'GP' : 'Guadeloupe',
    'GQ' : 'Equatorial Guinea',
    'GR' : 'Greece',
    'GS' : 'South Georgia and the South Sandwich Islands',
    'GT' : 'Guatemala',
    'GU' : 'Guam',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HK' : 'Hong Kong',
    'HM' : 'Heard Island and McDonald Islands',
    'HN' : 'Honduras',
    'HR' : 'Croatia',
    'HT' : 'Haiti',
    'HU' : 'Hungary',
    'ID' : 'Indonesia',
    'IE' : 'Ireland',
    'IL' : 'Israel',
    'IM' : 'Isle of Man',
    'IN' : 'India',
    'IO' : 'British Indian Ocean Territory',
    'IQ' : 'Iraq',
    'IR' : 'Iran',
    'IS' : 'Iceland',
    'IT' : 'Italy',
    'JE' : 'Jersey',
    'JM' : 'Jamaica',
    'JO' : 'Jordan',
    'JP' : 'Japan',
    'KE' : 'Kenya',
    'KG' : 'Kyrgyzstan',
    'KH' : 'Cambodia',
    'KI' : 'Kiribati',
    'KM' : 'Comoros',
    'KN' : 'Saint Kitts and Nevis',
    'KP' : 'North Korea',
    'KR' : 'South Korea',
    'KW' : 'Kuwait',
    'KY' : 'Cayman Islands',
    'KZ' : 'Kazakhstan',
    'LA' : 'Laos',
    'LB' : 'Lebanon',
    'LC' : 'Saint Lucia',
    'LI' : 'Liechtenstein',
    'LK' : 'Sri Lanka',
    'LR' : 'Liberia',
    'LS' : 'Lesotho',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'LV' : 'Latvia',
    'LY' : 'Libya',
    'MA' : 'Morocco',
    'MC' : 'Monaco',
    'MD' : 'Moldova',
    'ME' : 'Montenegro',
    'MF' : 'Saint Martin',
    'MG' : 'Madagascar',
    'MH' : 'Marshall Islands',
    'MK' : 'Macedonia',
    'ML' : 'Mali',
    'MM' : 'Myanmar Burma',
    'MN' : 'Mongolia',
    'MO' : 'Macao',
    'MP' : 'Northern Mariana Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MS' : 'Montserrat',
    'MT' : 'Malta',
    'MU' : 'Mauritius',
    'MV' : 'Maldives',
    'MW' : 'Malawi',
    'MX' : 'Mexico',
    'MY' : 'Malaysia',
    'MZ' : 'Mozambique',
    'NA' : 'Namibia',
    'NC' : 'New Caledonia',
    'NE' : 'Niger',
    'NF' : 'Norfolk Island',
    'NG' : 'Nigeria',
    'NI' : 'Nicaragua',
    'NL' : 'Netherlands',
    'NO' : 'Norway',
    'NP' : 'Nepal',
    'NR' : 'Nauru',
    'NU' : 'Niue',
    'NZ' : 'New Zealand',
    'OM' : 'Oman',
    'PA' : 'Panama',
    'PE' : 'Peru',
    'PF' : 'French Polynesia',
    'PG' : 'Papua New Guinea',
    'PH' : 'Philippines',
    'PK' : 'Pakistan',
    'PL' : 'Poland',
    'PM' : 'Saint Pierre and Miquelon',
    'PN' : 'Pitcairn Islands',
    'PR' : 'Puerto Rico',
    'PS' : 'Palestine',
    'PT' : 'Portugal',
    'PW' : 'Palau',
    'PY' : 'Paraguay',
    'QA' : 'Qatar',
    'RE' : 'RÃ©union',
    'RO' : 'Romania',
    'RS' : 'Serbia',
    'RU' : 'Russia',
    'RW' : 'Rwanda',
    'SA' : 'Saudi Arabia',
    'SB' : 'Solomon Islands',
    'SC' : 'Seychelles',
    'SD' : 'Sudan',
    'SE' : 'Sweden',
    'SG' : 'Singapore',
    'SH' : 'Saint Helena',
    'SI' : 'Slovenia',
    'SJ' : 'Svalbard and Jan Mayen',
    'SK' : 'Slovakia',
    'SL' : 'Sierra Leone',
    'SM' : 'San Marino',
    'SN' : 'Senegal',
    'SO' : 'Somalia',
    'SR' : 'Suriname',
    'SS' : 'South Sudan',
    'ST' : 'SÃ£o TomÃ© and PrÃ­ncipe',
    'SV' : 'El Salvador',
    'SX' : 'Sint Maarten',
    'SY' : 'Syria',
    'SZ' : 'Swaziland',
    'TC' : 'Turks and Caicos Islands',
    'TD' : 'Chad',
    'TF' : 'French Southern Territories',
    'TG' : 'Togo',
    'TH' : 'Thailand',
    'TJ' : 'Tajikistan',
    'TK' : 'Tokelau',
    'TL' : 'East Timor',
    'TM' : 'Turkmenistan',
    'TN' : 'Tunisia',
    'TO' : 'Tonga',
    'TR' : 'Turkey',
    'TT' : 'Trinidad and Tobago',
    'TV' : 'Tuvalu',
    'TW' : 'Taiwan',
    'TZ' : 'Tanzania',
    'UA' : 'Ukraine',
    'UG' : 'Uganda',
    'UM' : 'U.S. Minor Outlying Islands',
    'US' : 'United States',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VA' : 'Vatican City',
    'VC' : 'Saint Vincent and the Grenadines',
    'VE' : 'Venezuela',
    'VG' : 'British Virgin Islands',
    'VI' : 'U.S. Virgin Islands',
    'VN' : 'Vietnam',
    'VU' : 'Vanuatu',
    'WF' : 'Wallis and Futuna',
    'WS' : 'Samoa',
    'XK' : 'Kosovo',
    'YE' : 'Yemen',
    'YT' : 'Mayotte',
    'ZA' : 'South Africa',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
  },

  'alias': {
    'Macau' : 'MO',
    'Macao' : 'MO',
    'Macao, China' : 'MO',
    'Hong Kong, China' : 'HK',
    'Burma' : 'MM',
    'Myanmar' : 'MM',
    'Timor-Leste' : 'TL',
    'Côte d\'Ivoire' : 'CI',
    'The Bahamas' : 'BS',
    'Bahamas, The' : 'BS',
    'The Gambia' : 'GM',
    'Gambia, The' : 'GM',
    'Georgia (country)' : 'GE',
    'Republic of Macedonia' : 'MK',
    'Former Yugoslav Republic of Macedonia' : 'MK',
    'Republic of Ireland' : 'IE',
    'Federated States of Micronesia' : 'FM',
    'State of Palestine' : 'PS',
    'Denmark and territories' : 'DK',
    'Netherlands and territories' : 'NL',
    'New Zealand and territories' : 'NZ',
    'Australia and territories' : 'AU',
    'France and territories' : 'FR',
    'United Kingdom excluding some Overseas territories' : 'GB',
    'Moldova, Republic of' : 'MD',
    'Syrian Arab Republic' : 'SY',
    'Viet nam' : 'VN',
    'Brunei Darussalam' : 'BN',
    'Lao People\'s Democratic Republic' : 'LA',
    'Korea, Republic of' : 'KR',
    'Korea, Democratic People\'s Republic of' : 'KP',
    'Russian Federation' : 'RU',
    'Congo, Republic of the' : 'CH',
    'Chinese Taipei' : 'TW',
    'Congo, Democratic Republic of the' : 'CD'
  },

  'blacklist': [
    'ANTARCTICA',
    'AMERICAN SAMOA',
    'ANGUILLA',
    'ARUBA',
    'ÅLAND',
    'BURKINA FASO',
    'BENIN',
    'BERMUDA',
    'BONAIRE',
    'BOUVET ISLAND',
    'COCOS KEELING ISLANDS',
    'CENTRAL AFRICAN REPUBLIC',
    'CURACAO',
    'CHRISTMAS ISLAND',
    'WESTERN SAHARA',
    'FALKLAND ISLANDS',
    'FAROE ISLANDS',
    'GABON',
    'FRENCH GUIANA',
    'GUERNSEY',
    'GIBRALTAR',
    'GREENLAND',
    'GAMBIA',
    'GUADELOUPE',
    'EQUATORIAL GUINEA',
    'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS',
    'HEARD ISLAND AND MCDONALD ISLANDS',
    'ISLE OF MAN',
    'BRITISH INDIAN OCEAN TERRITORY',
    'KIRIBATI',
    'JERSEY',
    'CAYMAN ISLANDS',
    'LIBERIA',
    'SAINT MARTIN',
    'MADAGASCAR',
    'MALI',
    'NORTHERN MARIANA ISLANDS',
    'MARTINIQUE',
    'MONTSERRAT',
    'MALAWI',
    'NEW CALEDONIA',
    'NIGER',
    'NORFOLK ISLAND',
    'NIUE',
    'FRENCH POLYNESIA',
    'SAINT PIERRE AND MIQUELON',
    'PITCAIRN ISLANDS',
    'PUERTO RICO',
    'REUNION',
    'RWANDA',
    'SAINT HELENA',
    'SVALBARD AND JAN MAYEN',
    'SIERRA LEONE',
    'SENEGAL',
    'SOMALIA',
    'SURINAME',
    'SOUTH SUDAN',
    'CAPE VERDE',
    'SINT MAARTEN',
    'TURKS AND CAICOS ISLANDS',
    'CHAD',
    'FRENCH SOUTHERN TERRITORIES',
    'TOGO',
    'TOKELAU',
    'UGANDA',
    'BRITISH VIRGIN ISLANDS',
    'U.S. VIRGIN ISLANDS',
    'WALLIS AND FUTUNA',
    'MAYOTTE',
    'KOSOVO',
    'U.S. MINOR OUTLYING ISLANDS',
    'SAINT BARTHÉLEMY',
    'GUAM'
  ],

  "relevant" : [
    'United States',
    'China',
    'Russia',
    'Schengen Area',
    'United Kingdom',
    'Canada',
    'Australia',
    'Southeast Asia',
    'Japan',
    'South Korea',
    'Latin America',
    'South America',
    'Singapore',
    'Hong Kong',
    'Brazil',
    'the Caribbean (including Cuba)',
    'the Caribbean (except Cuba)',
    'UAE',
    'Mexico',
    'Argentina',
    'New Zealand',
    'Malaysia',
    'Indonesia',
    'Philippines'
  ]
}

/*
http://en.wikipedia.org/wiki/Visa_requirements_for_British_Overseas_citizens
http://en.wikipedia.org/wiki/Visa_requirements_for_British_Nationals_(Overseas)
http://en.wikipedia.org/wiki/Visa_requirements_for_Northern_Cypriot_citizens
http://en.wikipedia.org/wiki/Visa_requirements_for_European_Union_citizens
*/

module.exports = countries;
