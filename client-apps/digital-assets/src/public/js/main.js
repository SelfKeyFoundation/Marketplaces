var exchanges = angular.module("exchanges", ['exchangeDirectives', 'ui.bootstrap']);

exchanges.filter('exchange', function () {
    return function (input, filterObject) {

        input = input || [];

        if (!filterObject.supportedCountries && !filterObject.supportedLanguages
            && !filterObject.supportedCoins && !filterObject.supportedFiats && !filterObject.supportedTypes
            && !filterObject.supportedFiatDeposits && !filterObject.supportedCrossPlatforms && !!filterObject.supportedAccounts) {
            return input;
        }


        var out = [];
        for (var i = 0; i < input.length; i++) {
            var el = input[i];
            if (filterObject.supportedCountries && filterObject.supportedCountries.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedCountries.length; j++) {
                    var fEl = filterObject.supportedCountries[j];
                    if (el.data.fields['Countries supported'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }

            if (filterObject.supportedLanguages && filterObject.supportedLanguages.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedLanguages.length; j++) {
                    var fEl = filterObject.supportedLanguages[j];
                    if (el.data.fields['Languages'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }
            if (filterObject.supportedCoins && filterObject.supportedCoins.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedCoins.length; j++) {
                    var fEl = filterObject.supportedCoins[j];
                    if (el.data.fields['Cryptocurrencies/Tokens supported'] && el.data.fields['Cryptocurrencies/Tokens supported'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }

            if (filterObject.supportedFiats && filterObject.supportedFiats.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedFiats.length; j++) {
                    var fEl = filterObject.supportedFiats[j];
                    if (el.data.fields['Fiat currencies supported'] && el.data.fields['Fiat currencies supported'].length && el.data.fields['Fiat currencies supported'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }
            if (filterObject.supportedTypes && filterObject.supportedTypes.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedTypes.length; j++) {
                    var fEl = filterObject.supportedTypes[j];
                    if (el.data.fields['Type'] && el.data.fields['Type'].length && el.data.fields['Type'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }
            if (filterObject.supportedFiatDeposits && filterObject.supportedFiatDeposits.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedFiatDeposits.length; j++) {
                    var fEl = filterObject.supportedFiatDeposits[j];
                    if (el.data.fields['Fiat Payment methods'] && el.data.fields['Fiat Payment methods'].length && el.data.fields['Fiat Payment methods'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }
            if (filterObject.supportedCrossPlatforms && filterObject.supportedCrossPlatforms.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedCrossPlatforms.length; j++) {
                    var fEl = filterObject.supportedCrossPlatforms[j];
                    if (el.data.fields['Cross Platform'] && el.data.fields['Cross Platform'].length && el.data.fields['Cross Platform'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }
            if (filterObject.supportedAccounts && filterObject.supportedAccounts.length > 0) {
                var found = false;
                for (var j = 0; j < filterObject.supportedAccounts.length; j++) {
                    var fEl = filterObject.supportedAccounts[j];
                    if (el.data.fields['accounts'] && el.data.fields['accounts'].length && el.data.fields['accounts'].indexOf(fEl) !== -1) {
                        out.push(el);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    continue;
                }
            }


            // sxva filtrebi

        }

        return out;
    };
});

exchanges.service('sparkle', ['$rootScope', '$window', '$timeout', function ($rootScope, $window, $timeout) {

    this.init = function () {
        $.fn.sparkleh = function (options) {
            return this.each(function (k, v) {
                var $this = $(v).css("position", "relative");

                var settings = $.extend({
                    width: $this.outerWidth(),
                    height: $this.outerHeight(),
                    color: "#FFFFFF",
                    count: 30,
                    overlap: 0,
                    speed: 1
                }, options);

                var sparkle = new Sparkle($this, settings);

                $this.on({
                    "mouseover focus": function (e) {
                        sparkle.over();
                    },
                    "mouseout blur": function (e) {
                        sparkle.out();
                    }
                });
            });
        }

        function Sparkle($parent, options) {
            this.options = options;
            this.init($parent);
        }

        Sparkle.prototype = {
            "init": function ($parent) {
                var _this = this;

                this.$canvas =
                    $("<canvas>")
                        .addClass("sparkle-canvas")
                        .css({
                            position: "absolute",
                            top: "-" + _this.options.overlap + "px",
                            left: "-" + _this.options.overlap + "px",
                            "pointer-events": "none"
                        })
                        .appendTo($parent);

                this.canvas = this.$canvas[0];
                this.context = this.canvas.getContext("2d");

                this.sprite = new Image();
                this.sprites = [0, 6, 13, 20];
                this.sprite.src = this.datauri;

                this.canvas.width = this.options.width + ( this.options.overlap * 2);
                this.canvas.height = this.options.height + ( this.options.overlap * 2);


                this.particles = this.createSparkles(this.canvas.width, this.canvas.height);

                this.anim = null;
                this.fade = false;
            },

            "createSparkles": function (w, h) {
                var holder = [];

                for (var i = 0; i < this.options.count; i++) {

                    var color = this.options.color;

                    if (this.options.color == "rainbow") {
                        color = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
                    } else if ($.type(this.options.color) === "array") {
                        color = this.options.color[Math.floor(Math.random() * this.options.color.length)];
                    }

                    holder[i] = {
                        position: {
                            x: Math.floor(Math.random() * w),
                            y: Math.floor(Math.random() * h)
                        },
                        style: this.sprites[Math.floor(Math.random() * 4)],
                        delta: {
                            x: Math.floor(Math.random() * 1000) - 500,
                            y: Math.floor(Math.random() * 1000) - 500
                        },
                        size: parseFloat((Math.random() * 2).toFixed(2)),
                        color: color
                    };
                }

                return holder;
            },

            "draw": function (time, fade) {
                var ctx = this.context;

                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                for (var i = 0; i < this.options.count; i++) {

                    var derpicle = this.particles[i];
                    var modulus = Math.floor(Math.random() * 7);

                    if (Math.floor(time) % modulus === 0) {
                        derpicle.style = this.sprites[Math.floor(Math.random() * 4)];
                    }

                    ctx.save();
                    ctx.globalAlpha = derpicle.opacity;
                    ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);

                    if (this.options.color) {

                        ctx.globalCompositeOperation = "source-atop";
                        ctx.globalAlpha = 0.5;
                        ctx.fillStyle = derpicle.color;
                        ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);

                    }

                    ctx.restore();
                }
            },

            "update": function () {
                var _this = this;

                this.anim = window.requestAnimationFrame(function (time) {

                    for (var i = 0; i < _this.options.count; i++) {

                        var u = _this.particles[i];

                        var randX = ( Math.random() > Math.random() * 2 );
                        var randY = ( Math.random() > Math.random() * 3 );

                        if (randX) {
                            u.position.x += ((u.delta.x * _this.options.speed) / 1500);
                        }

                        if (!randY) {
                            u.position.y -= ((u.delta.y * _this.options.speed) / 800);
                        }

                        if (u.position.x > _this.canvas.width) {
                            u.position.x = -7;
                        } else if (u.position.x < -7) {
                            u.position.x = _this.canvas.width;
                        }

                        if (u.position.y > _this.canvas.height) {
                            u.position.y = -7;
                            u.position.x = Math.floor(Math.random() * _this.canvas.width);
                        } else if (u.position.y < -7) {
                            u.position.y = _this.canvas.height;
                            u.position.x = Math.floor(Math.random() * _this.canvas.width);
                        }

                        if (_this.fade) {
                            u.opacity -= 0.02;
                        } else {
                            u.opacity -= 0.005;
                        }

                        if (u.opacity <= 0) {
                            u.opacity = ( _this.fade ) ? 0 : 1;
                        }
                    }

                    _this.draw(time);

                    if (_this.fade) {
                        _this.fadeCount -= 1;
                        if (_this.fadeCount < 0) {
                            window.cancelAnimationFrame(_this.anim);
                        } else {
                            _this.update();
                        }
                    } else {
                        _this.update();
                    }
                });
            },

            "cancel": function () {
                this.fadeCount = 100;
            },

            "over": function () {
                window.cancelAnimationFrame(this.anim);

                for (var i = 0; i < this.options.count; i++) {
                    this.particles[i].opacity = Math.random();
                }

                this.fade = false;
                this.update();
            },

            "out": function () {
                this.fade = true;
                this.cancel();
            },

            "datauri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="
        };

        $.fn.imagesLoaded = function (callback) {
            var elems = this.filter('img'),
                len = elems.length,
                blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

            elems.bind('load.imgloaded', function () {
                if (--len <= 0 && this.src !== blank) {
                    elems.unbind('load.imgloaded');
                    callback.call(elems, this);
                }
            }).each(function () {
                // cached images don't fire load sometimes, so we reset src.
                if (this.complete || this.complete === undefined) {
                    var src = this.src;
                    this.src = blank;
                    this.src = src;
                }
            });

            return this;
        };
    }

}]);

exchanges.controller("ExchangeController", ['$scope', '$http', '$sce', 'exchangeFilter', '$timeout', 'sparkle', '$anchorScroll', function ($scope, $http, $sce, exchangeFilter, $timeout, sparkle, $anchorScroll) {
    $scope.exchanges = null;

    $scope.filterAvailableLanguages = {};
    $scope.filterSupportedCountries = {};
    $scope.filterAvailableCoins = {};
    $scope.filterSupportedFiat = {};
    $scope.filterSupportedTypes = {};
    $scope.filterSupportedFiatDeposits = {};
    $scope.filterSupportedCrossPlatforms = {};
    $scope.filterSupportedAccounts = {};

    if (jQuery(window).width() < 768) {
        jQuery('#d').css('display', 'block');
        jQuery('#c').css('display', 'none');
    } else {
        jQuery('#d').css('display', 'none');
        jQuery('#c').css('display', 'block');
    }


    jQuery(window).on('resize', function () {
        if (jQuery(window).width() < 768) {
            jQuery('#d').css('display', 'block');
            jQuery('#c').css('display', 'none');
        } else {
            jQuery('#d').css('display', 'none');
            jQuery('#c').css('display', 'block');
        }
    });


    sparkle.init();
    $timeout(function () {
        $(".sparkle").sparkleh();
    }, 2000);


    var ISOCountryNames = {
        "Afghanistan": "af",
        "Åland Islands": "ax",
        "Albania": "al",
        "Algeria": "dz",
        "American Samoa": "as",
        "Andorra": "ad",
        "Angola": "ao",
        "Anguilla": "ai",
        "Antarctica": "aq",
        "Antigua and Barbuda": "ag",
        "Argentina": "ar",
        "Armenia": "am",
        "Aruba": "aw",
        "Australia": "au",
        "Austria": "at",
        "Azerbaijan": "az",
        "Bahamas": "bs",
        "Bahrain": "bh",
        "Bangladesh": "bd",
        "Barbados": "bb",
        "Belarus": "by",
        "Belgium": "be",
        "Belize": "bz",
        "Benin": "bj",
        "Bermuda": "bm",
        "Bhutan": "bt",
        "Bolivia, Plurinational State of": "bo",
        "Bonaire, Sint Eustatius and Saba": "bq",
        "Bosnia and Herzegovina": "ba",
        "Botswana": "bw",
        "Bouvet Island": "bv",
        "Brazil": "br",
        "British Indian Ocean Territory": "io",
        "Brunei Darussalam": "bn",
        "Bulgaria": "bg",
        "Burkina Faso": "bf",
        "Burundi": "bi",
        "Cambodia": "kh",
        "Cameroon": "cm",
        "Canada": "ca",
        "Cape Verde": "cv",
        "Cayman Islands": "ky",
        "Central African Republic": "cf",
        "Chad": "td",
        "Chile": "cl",
        "China": "cn",
        "Christmas Island": "cx",
        "Cocos (Keeling) Islands": "cc",
        "Colombia": "co",
        "Comoros": "km",
        "Congo": "cg",
        "Congo, the Democratic Republic of the": "cd",
        "Cook Islands": "ck",
        "Costa Rica": "cr",
        "Côte d'Ivoire": "ci",
        "Croatia": "hr",
        "Cuba": "cu",
        "Curaçao": "cw",
        "Cyprus": "cy",
        "Czech Republic": "cz",
        "Denmark": "dk",
        "Djibouti": "dj",
        "Dominica": "dm",
        "Dominican Republic": "do",
        "Ecuador": "ec",
        "Egypt": "eg",
        "El Salvador": "sv",
        "Equatorial Guinea": "gq",
        "Eritrea": "er",
        "Estonia": "ee",
        "Ethiopia": "et",
        "Falkland Islands (Malvinas)": "fk",
        "Faroe Islands": "fo",
        "Fiji": "fj",
        "Finland": "fi",
        "France": "fr",
        "French Guiana": "gf",
        "French Polynesia": "pf",
        "French Southern Territories": "tf",
        "Gabon": "ga",
        "Gambia": "gm",
        "Georgia": "ge",
        "Germany": "de",
        "Ghana": "gh",
        "Gibraltar": "gi",
        "Greece": "gr",
        "Greenland": "gl",
        "Grenada": "gd",
        "Guadeloupe": "gp",
        "Guam": "gu",
        "Guatemala": "gt",
        "Guernsey": "gg",
        "Guinea": "gn",
        "Guinea-Bissau": "gw",
        "Guyana": "gy",
        "Haiti": "ht",
        "Heard Island and McDonald Mcdonald Islands": "hm",
        "Holy See (Vatican City State)": "va",
        "Honduras": "hn",
        "Hong Kong": "hk",
        "Hungary": "hu",
        "Iceland": "is",
        "India": "in",
        "Indonesia": "id",
        "Iran, Islamic Republic of": "ir",
        "Iraq": "iq",
        "Ireland": "ie",
        "Isle of Man": "im",
        "Israel": "il",
        "Italy": "it",
        "Jamaica": "jm",
        "Japan": "jp",
        "Jersey": "je",
        "Jordan": "jo",
        "Kazakhstan": "kz",
        "Kenya": "ke",
        "Kiribati": "ki",
        "Korea, Democratic People's Republic of": "kp",
        "South Korea": "kr",
        "Kuwait": "kw",
        "Kyrgyzstan": "kg",
        "Lao People's Democratic Republic": "la",
        "Latvia": "lv",
        "Lebanon": "lb",
        "Lesotho": "ls",
        "Liberia": "lr",
        "Libya": "ly",
        "Liechtenstein": "li",
        "Lithuania": "lt",
        "Luxembourg": "lu",
        "Macao": "mo",
        "Macedonia, the Former Yugoslav Republic of": "mk",
        "Madagascar": "mg",
        "Malawi": "mw",
        "Malaysia": "my",
        "Maldives": "mv",
        "Mali": "ml",
        "Malta": "mt",
        "Marshall Islands": "mh",
        "Martinique": "mq",
        "Mauritania": "mr",
        "Mauritius": "mu",
        "Mayotte": "yt",
        "Mexico": "mx",
        "Micronesia, Federated States of": "fm",
        "Moldova, Republic of": "md",
        "Monaco": "mc",
        "Mongolia": "mn",
        "Montenegro": "me",
        "Montserrat": "ms",
        "Morocco": "ma",
        "Mozambique": "mz",
        "Myanmar": "mm",
        "Namibia": "na",
        "Nauru": "nr",
        "Nepal": "np",
        "Netherlands": "nl",
        "New Caledonia": "nc",
        "New Zealand": "nz",
        "Nicaragua": "ni",
        "Niger": "ne",
        "Nigeria": "ng",
        "Niue": "nu",
        "Norfolk Island": "nf",
        "Northern Mariana Islands": "mp",
        "Norway": "no",
        "Oman": "om",
        "Pakistan": "pk",
        "Palau": "pw",
        "Palestine, State of": "ps",
        "Panama": "pa",
        "Papua New Guinea": "pg",
        "Paraguay": "py",
        "Peru": "pe",
        "Philippines": "ph",
        "Pitcairn": "pn",
        "Poland": "pl",
        "Portugal": "pt",
        "Puerto Rico": "pr",
        "Qatar": "qa",
        "Réunion": "re",
        "Romania": "ro",
        "Russian Federation": "ru",
        "Rwanda": "rw",
        "Saint Barthélemy": "bl",
        "Saint Helena, Ascension and Tristan da Cunha": "sh",
        "Saint Kitts and Nevis": "kn",
        "Saint Lucia": "lc",
        "Saint Martin (French part)": "mf",
        "Saint Pierre and Miquelon": "pm",
        "Saint Vincent and the Grenadines": "vc",
        "Samoa": "ws",
        "San Marino": "sm",
        "Sao Tome and Principe": "st",
        "Saudi Arabia": "sa",
        "Senegal": "sn",
        "Serbia": "rs",
        "Seychelles": "sc",
        "Sierra Leone": "sl",
        "Singapore": "sg",
        "Sint Maarten (Dutch part)": "sx",
        "Slovakia": "sk",
        "Slovenia": "si",
        "Solomon Islands": "sb",
        "Somalia": "so",
        "South Africa": "za",
        "South Georgia and the South Sandwich Islands": "gs",
        "South Sudan": "ss",
        "Spain": "es",
        "Sri Lanka": "lk",
        "Sudan": "sd",
        "Suriname": "sr",
        "Svalbard and Jan Mayen": "sj",
        "Swaziland": "sz",
        "Sweden": "se",
        "Switzerland": "ch",
        "Syrian Arab Republic": "sy",
        "Taiwan, Province of China": "tw",
        "Tajikistan": "tj",
        "Tanzania, United Republic of": "tz",
        "Thailand": "th",
        "Timor-Leste": "tl",
        "Togo": "tg",
        "Tokelau": "tk",
        "Tonga": "to",
        "Trinidad and Tobago": "tt",
        "Tunisia": "tn",
        "Turkey": "tr",
        "Turkmenistan": "tm",
        "Turks and Caicos Islands": "tc",
        "Tuvalu": "tv",
        "Uganda": "ug",
        "Ukraine": "ua",
        "United Arab Emirates": "ae",
        "United Kingdom": "gb",
        "United States": "us",
        "United States Minor Outlying Islands": "um",
        "Uruguay": "uy",
        "Uzbekistan": "uz",
        "Vanuatu": "vu",
        "Venezuela, Bolivarian Republic of": "ve",
        "Vietnam": "vn",
        "British Virgin Islands": "vg",
        "Virgin Islands, U.S.": "vi",
        "Wallis and Futuna": "wf",
        "Western Sahara": "eh",
        "Yemen": "ye",
        "Zambia": "zm",
        "Zimbabwe": "zw"
    };

    $scope.filterObject = {
        data: {
            fields: {
                "Countries supported": "American Samoa",
                "Cryptocurrencies/Tokens supported": "Bitcoin",
                "Languages": "English",
                "Fiat currencies supported": "USD",
                "Type": "Market order",
                "Fiat Payment methods": "Bank Transfer"
            }
        }
    };

    $scope.onFilterChange = function (filterName) {
        delete $scope.filterObject['supportedCountries'];
        delete $scope.filterObject['supportedLanguages'];
        delete $scope.filterObject['supportedCoins'];
        delete $scope.filterObject['supportedFiats'];
        delete $scope.filterObject['supportedTypes'];
        delete $scope.filterObject['supportedFiatDeposits'];
        delete $scope.filterObject['supportedCrossPlatforms'];
        delete $scope.filterObject['supportedAccounts'];


        $scope.exchanges = $scope.exchangesBackup;

        $scope.filterObject['supportedCountries'] = $scope.selectedCountries;
        $scope.filterObject['supportedLanguages'] = $scope.selectedLanguages;
        $scope.filterObject['supportedCoins'] = $scope.selectedCoins;
        $scope.filterObject['supportedFiats'] = $scope.selectedFiats;
        $scope.filterObject['supportedTypes'] = $scope.selectedTypes;
        $scope.filterObject['supportedFiatDeposits'] = $scope.selectedFiatDeposits;
        $scope.filterObject['supportedCrossPlatforms'] = $scope.selectedCrossPlatforms;
        $scope.filterObject['supportedAccounts'] = $scope.selectedAccounts;


        if ($scope.selectedCountries && $scope.selectedCountries.length > 0 || $scope.selectedLanguages && $scope.selectedLanguages.length > 0 ||
            $scope.selectedCoins && $scope.selectedCoins.length > 0 || $scope.selectedFiats && $scope.selectedFiats.length > 0
            || $scope.selectedTypes && $scope.selectedTypes.length > 0
            || $scope.selectedFiatDeposits && $scope.selectedFiatDeposits.length > 0 || $scope.selectedCrossPlatforms && $scope.selectedCrossPlatforms.length > 0
            || $scope.selectedAccounts && $scope.selectedAccounts.length > 0) {

            $scope.exchanges = exchangeFilter($scope.exchanges, $scope.filterObject);
        }
    };

    $scope.filtersDiv = true;

    //$scope.scrollToElement = function (event) {
    //    var target = jQuery(event.target).data('scroll-to');
    //    jQuery('.body-div').animate({
    //        scrollTop: jQuery(`[data-scroll-to-target="${target}"]`).offset().top - jQuery('.top-div').height()
    //    }, 500);
    //};

    $scope.casualColors = function () {
        var chipColors = ['primary', 'success', 'info', 'warning', 'gray'];
        return chipColors[Math.floor((Math.random() * chipColors.length))];
    };

    $scope.openFlyOut = function (exchangeData) {
        $scope.exchangeData = exchangeData;
        console.log(' $scope.exchangeData', $scope.exchangeData)

        jQuery('#background-div').css('position', 'fixed');
        jQuery(document.body).css('overflow', 'hidden');
        if (jQuery(window).width() < 500) {
            jQuery('#mySidenav').css('width', '100%');
            $scope.filtersDiv = false;
        } else if (jQuery(window).width() < 1100 && jQuery(window).width() > 500) {
            jQuery('#mySidenav').css('width', '60vw');
            $scope.filtersDiv = false;
        } else {
            jQuery('#mySidenav').css('width', '40vw');
            $scope.filtersDiv = true;
        }

    };
    $scope.closeFlyOut = function () {
        jQuery('#mySidenav').css('width', 0);
        jQuery('#background-div').css('position', 'static');
        jQuery(document.body).css('overflow', 'auto');
    };

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    loadData();

    function loadData() {
        const apiURL = 'https://alpha.selfkey.org/marketplace/i/api/digital-assets';
        $http.get(apiURL).then(function (response) {
            $scope.exchanges = response.data.Exchanges;
            console.log('$scope.exchanges', $scope.exchanges);

            for (var i in $scope.exchanges) {
                var exchange = $scope.exchanges[i];

                // logic -
                var languages = exchange.data.fields['Languages'];
                for (var i in languages) {
                    $scope.filterAvailableLanguages[languages[i]] = true;
                }


                $scope.accounts = ['Personal', 'Corporate'];

                for (var i in $scope.accounts) {
                    $scope.filterSupportedAccounts[$scope.accounts[i]] = true;
                }

                if (exchange.data.fields['Device availability'] && exchange.data.fields['OS availability']) {
                    exchange.data.fields['Cross Platform'] = exchange.data.fields['Device availability'].concat(exchange.data.fields['OS availability']);
                    if (exchange.data.fields['Cross Platform']) {
                        var CrossPlatform = exchange.data.fields['Cross Platform'];
                        for (var i in CrossPlatform) {
                            $scope.filterSupportedCrossPlatforms[CrossPlatform[i]] = true;
                        }
                    }
                }

                if (exchange.data.fields['Country incorporated'] && exchange.data.fields['Country incorporated'].length) {
                    exchange.data.fields.CountryIncorporated = exchange.data.fields['Country incorporated'];
                    if (exchange.data.fields.CountryIncorporated && exchange.data.fields.CountryIncorporated.length) {
                        exchange.data.fields.CountryIncorporatedCss = [];

                        for (var i in exchange.data.fields.CountryIncorporated) {
                            var name = exchange.data.fields.CountryIncorporated[i];
                            var cssClass = ISOCountryNames[name];
                            exchange.data.fields.CountryIncorporatedCss.push(cssClass);
                        }
                    }
                }
                if (exchange.data.fields['Cryptocurrencies/Tokens supported'] && exchange.data.fields['Cryptocurrencies/Tokens supported'].length) {
                    exchange.data.fields.coinsSupported = exchange.data.fields['Cryptocurrencies/Tokens supported'];
                    exchange.data.fields.coins1 = [];
                    exchange.data.fields.coins2 = [];
                    for (var i in  exchange.data.fields['Cryptocurrencies/Tokens supported']) {
                        $scope.filterAvailableCoins[exchange.data.fields['Cryptocurrencies/Tokens supported'][i]] = true;
                    }
                    for (var i = 0; i < exchange.data.fields.coinsSupported.length - 1; i += 2) {
                        exchange.data.fields.coins1.push(exchange.data.fields.coinsSupported[i]);
                        exchange.data.fields.coins2.push(exchange.data.fields.coinsSupported[i + 1]);
                    }
                }
                if (exchange.data.fields['Fiat currencies supported'] && exchange.data.fields['Fiat currencies supported'].length) {
                    exchange.data.fields.fiatAcceptedCurrencies = exchange.data.fields['Fiat currencies supported'];
                    for (var i in exchange.data.fields.fiatAcceptedCurrencies) {
                        $scope.filterSupportedFiat[exchange.data.fields.fiatAcceptedCurrencies[i]] = true;
                    }
                } else {
                    exchange.data.fields.fiatAcceptedCurrencies = ['Not accepted'];
                }
                if (exchange.data.fields['Country incorporated'] && exchange.data.fields['Country incorporated'].length) {
                    exchange.data.fields.countryIncorporated = exchange.data.fields['Country incorporated'][0];
                }
                if (exchange.data.fields['Countries supported'] && exchange.data.fields['Countries supported'].length) {
                    exchange.data.fields.supportedCountries = exchange.data.fields['Countries supported'];
                    for (var i in exchange.data.fields.supportedCountries) {
                        $scope.filterSupportedCountries[exchange.data.fields.supportedCountries[i]] = true;
                    }

                    exchange.data.fields.countries1 = [];
                    exchange.data.fields.countries2 = [];
                    for (var i = 0; i < exchange.data.fields.supportedCountries.length - 1; i += 2) {
                        exchange.data.fields.countries1.push(exchange.data.fields.supportedCountries[i]);
                        exchange.data.fields.countries2.push(exchange.data.fields.supportedCountries[i + 1]);
                    }
                }

                if (exchange.data.fields['Currency Pairs'] && exchange.data.fields['Currency Pairs'].length) {
                    exchange.data.fields.currencyPairs = exchange.data.fields['Currency Pairs'];
                    exchange.data.fields.currencies1 = [];
                    exchange.data.fields.currencies2 = [];
                    for (var i = 0; i < exchange.data.fields.currencyPairs.length - 1; i += 2) {
                        exchange.data.fields.currencies1.push(exchange.data.fields.currencyPairs[i]);
                        exchange.data.fields.currencies2.push(exchange.data.fields.currencyPairs[i + 1]);
                    }
                }

                if (exchange.data.fields['Fiat currencies supported'] && exchange.data.fields['Fiat currencies supported'].length) {
                    exchange.data.fields.fiatCurrencies = exchange.data.fields['Fiat currencies supported'];
                }

                if (exchange.data.fields['Fiat Payment methods'] && exchange.data.fields['Fiat Payment methods'].length) {
                    for (var i in  exchange.data.fields['Fiat Payment methods']) {
                        $scope.filterSupportedFiatDeposits[exchange.data.fields['Fiat Payment methods'][i]] = true;
                    }
                }
                if (exchange.data.fields['Company']) {
                    exchange.data.fields.company = exchange.data.fields['Company'];
                    exchange.data.fields.accounts = ['Corporate', 'Personal'];
                }

                if (exchange.data.fields['Type'] && exchange.data.fields['Type'].length) {
                    exchange.data.fields.type = exchange.data.fields['Type'];
                    for (var i in  exchange.data.fields.type) {
                        $scope.filterSupportedTypes[exchange.data.fields.type[i]] = true;
                    }
                }
                if (exchange.data.fields['Type'] && exchange.data.fields['Description'].length) {
                    exchange.data.fields['Description'] = '<p>' + exchange.data.fields['Description'].replace(new RegExp('\n', 'g'), '<br>') + '</p>';
                    var html = exchange.data.fields['Description'];
                    var trustedHtml = $sce.trustAsHtml(html);
                    exchange.data.fields.trustedHtml = trustedHtml;
                }
            }
            $scope.exchangesBackup = angular.copy($scope.exchanges);

            $timeout(function () {
                jQuery('.selectpicker').selectpicker('refresh');
            });
        }).catch(function (error) {
            // error
        });
    }
}]);