'use strict';

angular.module('marketplaceApp', ['myDirectives', 'ui.bootstrap', 'clickDirective'])
  .controller('ListController', function ($scope, $http, $anchorScroll, $sce, $location) {
    // Do an initial search
    fetchAirtableData();

    function fetchAirtableData() {
      let apiURL = "#";
      let apiURLCountries = "#";

      $http.get(apiURL)
        .then((response) => {
          $scope.list = response.data.Trusts.map(c => c.data.fields);
          $scope.main = response.data.Main.map(c => c.data.fields);
          $scope.tax = response.data.Taxes.map(c => c.data.fields);
          $scope.foundations = response.data.Foundations.map(c => c.data.fields);
        }).then(_ => {
        $http.get(apiURL + "/translations").then((response) => {
          $scope.en = response.data.EN.map(c => c.data.fields);
          $scope.descriptions = response.data.Translation_descriptions.map(c => c.data.fields);
          mergeTables();
        });
      });

      //Fetch countries
      $http.get(apiURLCountries)
        .then((response) => {
          $scope.countries = response.data[0].map(c => c);
        })
    }

    // Merge Tables
    function mergeTables() {
      $scope.list.forEach(function (item) {
        for (var i = 0; i < $scope.main.length; i++) {
          if (item['Company code'] === $scope.main[i]['Company code']) {
            item['Legal entity'] = $scope.main[i]['Legal entity'];
            item['Good for'] = $scope.main[i]['Good for'];
            item['KYC-docs'] = $scope.main[i]['KYC-docs'];
            item['Time to form (days)'] = $scope.main[i]['Time to form (days)'];
            break;
          }
        }
        for (var i = 0; i < $scope.en.length; i++) {
          if (item['Company code'] === $scope.en[i]['Company code']) {
            item['legal_paragraph'] = $scope.en[i]['legal_paragraph'];
            item['taxes_paragraph'] = $scope.en[i]['taxes_paragraph'];
            item['country_details'] = $scope.en[i]['country_details'];
            item['introduction'] = $scope.en[i]['introduction'];
            item['company title'] = $scope.en[i]['company title'];
            //item['country_details'] = $scope.en[i]['introduction'];
            break;
          }
        }
        for (var i = 0; i < $scope.tax.length; i++) {
          if (item['Company code'] === $scope.tax[i]['Company code']) {
            item['CFC Rules'] = $scope.tax[i]['CFC Rules'];
            item['Patent Box'] = $scope.tax[i]['Patent Box'];
            item['Asset tax'] = $scope.tax[i]['Asset tax'];
            item['Capital duties'] = $scope.tax[i]['Capital duties'];
            item['Transfer tax'] = $scope.tax[i]['Transfer tax'];
            item['Property Tax'] = $scope.tax[i]['Property Tax'];
            item['Estate inheritance tax'] = $scope.tax[i]['Estate inheritance tax'];
            item['Wealth tax'] = $scope.tax[i]['Wealth tax'];
            item['Corporate Tax Rate'] = $scope.tax[i]['Corporate Tax Rate'];
            item['Offshore Income Tax Rate'] = $scope.tax[i]['Offshore Income Tax Rate'];
            item['Capital Gains Tax Rate'] = $scope.tax[i]['Capital Gains Tax Rate'];
            item['labor_payments'] = $scope.tax[i]['labor_payments'];
            item['Losses carryback (years)'] = $scope.tax[i]['Losses carryback (years)'];
            item['Losses carryforward (years)'] = $scope.tax[i]['Losses carryforward (years)'];
            item['VAT Rate'] = $scope.tax[i]['VAT Rate'];
            item['Personal Income Tax Rate'] = $scope.tax[i]['Personal Income Tax Rate'];
            item['Legal entity type'] = $scope.tax[i]['Legal entity type'];

            item['Offshore dividends tax exemption'] = $scope.tax[i]['Offshore dividends tax exemption'];
            item['Offshore capital gains tax exemption'] = $scope.tax[i]['Offshore capital gains tax exemption'];
            item['Thin Capitalisation Rules'] = $scope.tax[i]['Thin Capitalisation Rules'];
            item['Tax Incentives & Credits'] = $scope.tax[i]['Tax Incentives & Credits'];
            item['Dividends Received'] = $scope.tax[i]['Dividends Received'];
            item['Social Security Employer'] = $scope.tax[i]['Social Security Employer'];
            item['Social Security Employee'] = $scope.tax[i]['Social Security Employee'];
            item['Dividends Withholding Tax Rate'] = $scope.tax[i]['Dividends Withholding Tax Rate'];
            item['Interests Withholding Tax Rate'] = $scope.tax[i]['Interests Withholding Tax Rate'];
            item['Royalties Withholding Tax Rate'] = $scope.tax[i]['Royalties Withholding Tax Rate'];
            item['Inventory methods permitted'] = $scope.tax[i]['Inventory methods permitted'];
            item['Tax time (hours)'] = $scope.tax[i]['Tax time (hours)'];
            item['Tax treaties'] = $scope.tax[i]['Tax treaties'];
            break;
          }
        }
        for (var i = 0; i < $scope.foundations.length; i++) {
          if (item['Company code'] === $scope.foundations[i]['Company code']) {
            item['Registration fee'] = $scope.foundations[i]['Registration fee']
          }
        }
        if ($scope.countries) {
          for (var i = 0; i < $scope.countries.length; i++) {
            if (item['Country code'] === $scope.countries[i]['code']) {
              item['currencyCode'] = $scope.countries[i]['currencyCode']
              item['areaCode'] = $scope.countries[i]['areaInSqKm']
              item['capital'] = $scope.countries[i]['capital']
              item['continent'] = $scope.countries[i]['continent']
              item['languages'] = $scope.countries[i]['languages']
              item['population'] = $scope.countries[i]['population']
            }
          }
        }
        for (var i = 0; i < $scope.descriptions.length; i++) {
          //Legal
          if ('Bankruptcy protection' === $scope.descriptions[i].Item) {
            item['Bankruptcy protection descr'] = $scope.descriptions[i].EN;
          }
          if ('Ignore foreign judgements' === $scope.descriptions[i].Item) {
            item['Ignore foreign judgements descr'] = $scope.descriptions[i].EN;
          }
          if ('Hague convention on trusts' === $scope.descriptions[i].Item) {
            item['Hague convention on trusts descr'] = $scope.descriptions[i].EN;
          }
          if ('Specific exclusion of foreign law' === $scope.descriptions[i].Item) {
            item['Specific exclusion of foreign law descr'] = $scope.descriptions[i].EN;
          }
          if ('Choice of law is binding' === $scope.descriptions[i].Item) {
            item['Choice of law is binding descr'] = $scope.descriptions[i].EN;
          }
          if ('Protection from immigrant trusts' === $scope.descriptions[i].Item) {
            item['Protection from immigrant trusts descr'] = $scope.descriptions[i].EN;
          }
          if ('Community property provisions' === $scope.descriptions[i].Item) {
            item['Community property provisions descr'] = $scope.descriptions[i].EN;
          }
          if ('Custodian trustee permitted' === $scope.descriptions[i].Item) {
            item['Custodian trustee permitted descr'] = $scope.descriptions[i].EN;
          }
          if ('Rule against perpetuities (years)' === $scope.descriptions[i].Item) {
            item['Rule against perpetuities (years) descr'] = $scope.descriptions[i].EN;
          }
          if ('Avoidance of forced heirship' === $scope.descriptions[i].Item) {
            item['Avoidance of forced heirship descr'] = $scope.descriptions[i].EN;
          }
          if ('Spendthrift provisions' === $scope.descriptions[i].Item) {
            item['Spendthrift provisions descr'] = $scope.descriptions[i].EN;
          }
          if ('Exclusion of Statute of Elizabeth laws' === $scope.descriptions[i].Item) {
            item['Exclusion of Statute of Elizabeth laws descr'] = $scope.descriptions[i].EN;
          }
          if ('Trust is invalid if transfer fraudulent' === $scope.descriptions[i].Item) {
            item['Trust is invalid if transfer fraudulent descr'] = $scope.descriptions[i].EN;
          }
          if ('Creditor must prove fraudulent transfer' === $scope.descriptions[i].Item) {
            item['Creditor must prove fraudulent transfer descr'] = $scope.descriptions[i].EN;
          }
          if ('Clear definition of fraudulent transfers' === $scope.descriptions[i].Item) {
            item['Clear definition of fraudulent transfers descr'] = $scope.descriptions[i].EN;
          }
          if ('Separation of creditor claims' === $scope.descriptions[i].Item) {
            item['Separation of creditor claims descr'] = $scope.descriptions[i].EN;
          }
          if ('Statutory limitation on fraudulent transfer' === $scope.descriptions[i].Item) {
            item['Statutory limitation on fraudulent transfer descr'] = $scope.descriptions[i].EN;
          }
          if ('Settlor can retain control' === $scope.descriptions[i].Item) {
            item['Settlor can retain control descr'] = $scope.descriptions[i].EN;
          }
          if ('Registration fee' === $scope.descriptions[i].Item) {
            item['Registration fee descr'] = $scope.descriptions[i].EN;
          }
          if ('Annual government fee' === $scope.descriptions[i].Item) {
            item['Annual government fee descr'] = $scope.descriptions[i].EN;
          }
          if ('Time to form (days)' === $scope.descriptions[i].Item) {
            item['Time to form (days) descr'] = $scope.descriptions[i].EN;
          }


          //Taxes
          if ('Offshore dividends tax exemption' === $scope.descriptions[i].Item) {
            item['Offshore dividends tax exemption descr'] = $scope.descriptions[i].EN;
          }
          if ('Offshore capital gains tax exemption' === $scope.descriptions[i].Item) {
            item['Offshore capital gains tax exemption descr'] = $scope.descriptions[i].EN;
          }
          if ('CFC Rules' === $scope.descriptions[i].Item) {
            item['CFC Rules descr'] = $scope.descriptions[i].EN;
          }
          if ('Thin Capitalisation Rules' === $scope.descriptions[i].Item) {
            item['Thin Capitalisation Rules descr'] = $scope.descriptions[i].EN;
          }
          if ('Patent Box' === $scope.descriptions[i].Item) {
            item['Patent Box descr'] = $scope.descriptions[i].EN;
          }
          if ('Tax Incentives & Credits' === $scope.descriptions[i].Item) {
            item['Tax Incentives & Credits descr'] = $scope.descriptions[i].EN;
          }
          if ('Property Tax' === $scope.descriptions[i].Item) {
            item['Property Tax descr'] = $scope.descriptions[i].EN;
          }
          if ('Wealth tax' === $scope.descriptions[i].Item) {
            item['Wealth tax descr'] = $scope.descriptions[i].EN;
          }
          if ('Estate inheritance tax' === $scope.descriptions[i].Item) {
            item['Estate inheritance tax descr'] = $scope.descriptions[i].EN;
          }
          if ('Transfer tax' === $scope.descriptions[i].Item) {
            item['Transfer tax descr'] = $scope.descriptions[i].EN;
          }
          if ('Capital duties' === $scope.descriptions[i].Item) {
            item['Capital duties descr'] = $scope.descriptions[i].EN;
          }
          if ('Personal Income Tax Rate' === $scope.descriptions[i].Item) {
            item['Personal Income Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('VAT Rate' === $scope.descriptions[i].Item) {
            item['VAT Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Offshore Income Tax Rate' === $scope.descriptions[i].Item) {
            item['Offshore Income Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Corporate Tax Rate' === $scope.descriptions[i].Item) {
            item['Corporate Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Capital Gains Tax Rate' === $scope.descriptions[i].Item) {
            item['Capital Gains Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Social Security Employer' === $scope.descriptions[i].Item) {
            item['Social Security Employer descr'] = $scope.descriptions[i].EN;
          }
          if ('Social Security Employee' === $scope.descriptions[i].Item) {
            item['Social Security Employee descr'] = $scope.descriptions[i].EN;
          }
          if ('Dividends Withholding Tax Rate' === $scope.descriptions[i].Item) {
            item['Dividends Withholding Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Interests Withholding Tax Rate' === $scope.descriptions[i].Item) {
            item['Interests Withholding Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Royalties Withholding Tax Rate' === $scope.descriptions[i].Item) {
            item['Royalties Withholding Tax Rate descr'] = $scope.descriptions[i].EN;
          }
          if ('Losses carryback (years)' === $scope.descriptions[i].Item) {
            item['Losses carryback (years) descr'] = $scope.descriptions[i].EN;
          }
          if ('Losses carryforward (years)' === $scope.descriptions[i].Item) {
            item['Losses carryforward (years) descr'] = $scope.descriptions[i].EN;
          }
          if ('Inventory methods permitted' === $scope.descriptions[i].Item) {
            item['Inventory methods permitted descr'] = $scope.descriptions[i].EN;
          }
          if ('Tax time (hours)' === $scope.descriptions[i].Item) {
            item['Tax time (hours) descr'] = $scope.descriptions[i].EN;
          }
          if ('Tax treaties' === $scope.descriptions[i].Item) {
            item['Tax treaties descr'] = $scope.descriptions[i].EN;
          }
        }
      });
    }


    let sidenav = document.getElementById("mySidenav");
    let body = document.getElementsByTagName("body")[0];
    $scope.openNav = function (item) {
      sidenav.classList.add('visible');
      body.classList.add('flyout-visible');
      document.getElementById('overlay').style.display = "block";
      $scope.rowData = item;
      $scope.rowData['taxes_paragraph'] = $sce.trustAsHtml($scope.rowData['taxes_paragraph']);
      $scope.rowData['legal_paragraph'] = $sce.trustAsHtml($scope.rowData['legal_paragraph']);
      $scope.rowData['introduction'] = $sce.trustAsHtml($scope.rowData['introduction']);
      $scope.rowData['country_details'] = $sce.trustAsHtml($scope.rowData['country_details']);
    };

    $scope.closeNav = function () {
      sidenav.classList.remove('visible');
      body.classList.remove('flyout-visible');
      document.getElementById('overlay').style.display = "none";
    };


    // Filters
    var beneficiaryState = {
      settlorBeneficiary: false,
      avoidState: false,
      retainControl: false,
      provisionState: false,
      hague: false,
      elizabethLaw: false,
      definitionFraudelent: false,
      trustTransferFraudulent: false,
      creditorClaims: false,
      retroactive: false,
      community: false,
      choice: false,
      bankruptcy: false,
      ignore: false
    };
    $scope.currentState;
    $scope.otherPr;
    $scope.filterData = function (idArr) {
      $scope.filterObj = {};
      idArr.forEach(function (item) {
        if (item === 1) {
          if (beneficiaryState.avoidState) {
            beneficiaryState.avoidState = false
          } else {
            beneficiaryState.avoidState = true
          }
        }
        if (item === 2) {
          if (beneficiaryState.provisionState) {
            beneficiaryState.provisionState = false
          } else {
            beneficiaryState.provisionState = true
          }
        }
        if (item === 3) {
          if (beneficiaryState.settlorBeneficiary) {
            beneficiaryState.settlorBeneficiary = false
          } else {
            beneficiaryState.settlorBeneficiary = true
          }
        }
        if (item === 4) {
          if (beneficiaryState.hague) {
            beneficiaryState.hague = false
          } else {
            beneficiaryState.hague = true
          }
        }
        if (item === 5) {
          if (beneficiaryState.elizabethLaw) {
            beneficiaryState.elizabethLaw = false
          } else {
            beneficiaryState.elizabethLaw = true
          }
        }
        if (item === 6) {
          if (beneficiaryState.definitionFraudelent) {
            beneficiaryState.definitionFraudelent = false
          } else {
            beneficiaryState.definitionFraudelent = true
          }
        }
        if (item === 7) {
          if (beneficiaryState.trustTransferFraudulent) {
            beneficiaryState.trustTransferFraudulent = false
          } else {
            beneficiaryState.trustTransferFraudulent = true
          }
        }
        if (item === 8) {
          if (beneficiaryState.creditorClaims) {
            beneficiaryState.creditorClaims = false
          } else {
            beneficiaryState.creditorClaims = true
          }
        }
        if (item === 9) {
          if (beneficiaryState.retroactive) {
            beneficiaryState.retroactive = false
          } else {
            beneficiaryState.retroactive = true
          }
        }
        if (item === 10) {
          if (beneficiaryState.community) {
            beneficiaryState.community = false
          } else {
            beneficiaryState.community = true
          }
        }
        if (item === 11) {
          if (beneficiaryState.choice) {
            beneficiaryState.choice = false
          } else {
            beneficiaryState.choice = true
          }
        }
        if (item === 12) {
          if ($scope.currentState !== undefined && !$scope.otherPr) {
            if ($scope.currentState) {
              if ($scope.otherPr !== undefined && $scope.otherPr === false) {
                $scope.filterObj['Specific exclusion of foreign law'] = undefined;
                $scope.currentState = undefined;
              } else {
                $scope.filterObj['Specific exclusion of foreign law'] = "No";
                $scope.currentState = false;
              }

            } else if ($scope.currentState === false) {
              $scope.currentState = null;
              $scope.filterObj['Specific exclusion of foreign law'] = "Limited";
            } else {
              $scope.currentState = undefined;
            }
          } else {
            $scope.currentState = true;
            $scope.filterObj['Specific exclusion of foreign law'] = "Yes";
          }
        }
        if (item === 13) {
          $scope.currentControl;
          $scope.SettlorPr;
          if ($scope.currentControl !== undefined && !$scope.SettlorPr) {
            if ($scope.currentControl) {
              if ($scope.SettlorPr !== undefined && $scope.SettlorPr === false) {
                $scope.filterObj['Settlor can retain control'] = undefined;
                $scope.currentControl = undefined;
              } else {
                $scope.filterObj['Settlor can retain control'] = "Subject to CL rules";
                $scope.currentControl = false;
              }
            } else {
              $scope.currentControl = undefined;
            }
          } else {
            $scope.currentControl = true;
            $scope.filterObj['Settlor can retain control'] = "Yes";
          }
        }
        if (item === 14) {
          if (beneficiaryState.bankruptcy) {
            beneficiaryState.bankruptcy = false
          } else {
            beneficiaryState.bankruptcy = true
          }
        }
        if (item === 15) {
          if (beneficiaryState.ignore) {
            beneficiaryState.ignore = false
          } else {
            beneficiaryState.ignore = true
          }
        }
      });


      //$scope.filterObj = {};
      if (beneficiaryState.avoidState) {
        $scope.filterObj['Avoidance of forced heirship'] = true;
      }
      if (beneficiaryState.provisionState) {
        $scope.filterObj['Spendthrift provisions'] = true;
      }
      if (beneficiaryState.settlorBeneficiary) {
        $scope.filterObj['Settlor-beneficiary'] = true;
      }
      if (beneficiaryState.hague) {
        $scope.filterObj['Hague convention on trusts'] = true;
      }
      if (beneficiaryState.elizabethLaw) {
        $scope.filterObj['Exclusion of Statute of Elizabeth laws'] = true;
      }
      if (beneficiaryState.definitionFraudelent) {
        $scope.filterObj['Clear definition of fraudulent transfers'] = true;
      }
      if (beneficiaryState.trustTransferFraudulent) {
        $scope.filterObj['Trust is invalid if transfer fraudulent'] = true;
      }
      if (beneficiaryState.creditorClaims) {
        $scope.filterObj['Separation of creditor claims'] = true;
      }
      if (beneficiaryState.retroactive) {
        $scope.filterObj['Protection from immigrant trusts'] = true;
      }
      if (beneficiaryState.community) {
        $scope.filterObj['Community property provisions'] = true;
      }
      if (beneficiaryState.choice) {
        $scope.filterObj['Choice of law is binding'] = true;
      }
      if (beneficiaryState.bankruptcy) {
        $scope.filterObj['Bankruptcy protection'] = true;
      }
      if (beneficiaryState.ignore) {
        $scope.filterObj['Ignore foreign judgements'] = true;
      }

      return $scope.filterObj;
    };
  });

// End of Filters





