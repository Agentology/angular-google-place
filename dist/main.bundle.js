webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#map {\n    height: 100%;\n}\n\n#locationField,\n#controls {\n    position: relative;\n    width: 480px;\n}\n\n#autocomplete {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 99%;\n}\n\n.label {\n    text-align: right;\n    font-weight: bold;\n    width: 100px;\n    color: #303030;\n}\n\n#address {\n    border: 1px solid #000090;\n    background-color: #f0f0ff;\n    width: 480px;\n    padding-right: 2px;\n}\n\n#address td {\n    font-size: 10pt;\n}\n\n.field {\n    width: 99%;\n}\n\n.slimField {\n    width: 80px;\n}\n\n.wideField {\n    width: 200px;\n}\n\n#locationField {\n    height: 20px;\n    margin-bottom: 2px;\n}\n\ndiv.img {\n    margin: 5px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 180px;\n}\n\ndiv.img:hover {\n    border: 1px solid #777;\n}\n\ndiv.img img {\n    width: 100%;\n    height: auto;\n}\n\ndiv.desc {\n    padding: 15px;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"locationField\">\n    <input type=\"text\" size=\"100\" [(ngModel)]=\"address\" [options]='options' (setAddress)=\"getAddress($event)\" (street_number)='street_number=$event' (street)='street=$event' (city)='city=$event' (state)='state=$event' (district)='district=$event' (country)='country=$event'\n        (postal_code)='postal_code=$event' (lat)='lat=$event' (lng)='lng=$event' (adr_address)='adr_address=$event' (name)='name=$event' (place_id)='place_id=$event' (types)='types=$event' (url)='url=$event' (utc_offset)='utc_offset=$event' (vicinity)='vicinity=$event'\n        (photos)='photos=$event' (FormatAddress)='FormatAddress($event)' (airport)='airport=$event' (CountryCodes)='CountryCodes=$event' (TypesOptions)='TypesOptions=$event' id=\"autocomplete\" angularGooglePlace/>\n</div>\n\n<select class=\"form-control\" [(ngModel)]=\"options.type\" (ngModelChange)=\"onChange($event)\">\n  <option *ngFor=\"let type of typesOptions\" [value]=\"[type]\">{{ type }}</option>\n  </select>\n\n<select class=\"form-control\" [(ngModel)]=\"options.componentRestrictions.country\" (ngModelChange)=\"onChange($event)\">\n<option *ngFor=\"let country of CountryCodes\" [value]=\"country.Code\">{{ country.Name }}</option>\n</select>\n<table id=\"address\">\n    <tr>\n        <td class=\"label\">Street address</td>\n        <td class=\"slimField\">\n            <input class=\"field\" id=\"street_number\" type=\"text\" disabled=\"true\" [(ngModel)]=\"street_number\">\n        </td>\n        <td class=\"wideField\" colspan=\"2\"><input class=\"field\" id=\"route\" disabled=\"true\" [(ngModel)]=\"street\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">City</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"locality\" disabled=\"true\" [(ngModel)]=\"city\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">State</td>\n        <td class=\"slimField\"><input class=\"field\" id=\"administrative_area_level_1\" disabled=\"true\" [(ngModel)]=\"state\"></td>\n        <td class=\"label\">Postal code</td>\n        <td class=\"wideField\"><input class=\"field\" id=\"postal_code\" disabled=\"true\" [(ngModel)]=\"postal_code\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">district</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"district\" disabled=\"true\" [(ngModel)]=\"district\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">Country</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"country\" disabled=\"true\" [(ngModel)]=\"country\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">Lat</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"lat\" disabled=\"true\" [(ngModel)]=\"lat\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">Lng</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"lng\" disabled=\"true\" [(ngModel)]=\"lng\"></td>\n    </tr>\n\n    <tr>\n        <td class=\"label\">adr_address</td>\n        <td class=\"wideField\" colspan=\"3\">\n            <div [innerHTML]='adr_address'></div>\n        </td>\n    </tr>\n\n    <tr>\n        <td class=\"label\">name</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"name\" disabled=\"true\" [(ngModel)]=\"name\"></td>\n    </tr>\n\n    <tr>\n        <td class=\"label\">place_id</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"place_id\" disabled=\"true\" [(ngModel)]=\"place_id\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">types</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"types\" disabled=\"true\" [(ngModel)]=\"types\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">url</td>\n        <td class=\"wideField\" colspan=\"3\"><a href='{{url}}'> {{ url }} </a></td>\n    </tr>\n    <tr>\n        <td class=\"label\">utc_offset</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"utc_offset\" disabled=\"true\" [(ngModel)]=\"utc_offset\"></td>\n    </tr>\n    <tr>\n        <td class=\"label\">vicinity</td>\n        <td class=\"wideField\" colspan=\"3\"><input class=\"field\" id=\"vicinity\" disabled=\"true\" [(ngModel)]=\"vicinity\"></td>\n    </tr>\n\n</table>\n<div *ngFor=\"let photo of photos\">\n    <div *ngFor=\"let url of photo.html_attributions\">\n        <div class=\"img\">\n            <img [src]=\"photo.getUrl({'maxWidth': 200, 'maxHeight': 200})\">\n            <div class=\"desc\">\n                <div [innerHTML]=\"url\"></div>\n                <div> Original Size - width : {{ photo.width }} height : {{ photo.height }}</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_angular_google_place_index__ = __webpack_require__("./src/lib/angular-google-place/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(constant) {
        this.constant = constant;
        this.options = { type: 'address', componentRestrictions: { country: 'FR' } };
        this.typesOptions = this.constant.types_options();
    }
    AppComponent.prototype.getAddress = function (place) {
        console.log('Address', place);
    };
    AppComponent.prototype.FormatAddress = function (event) {
        console.log(event);
    };
    AppComponent.prototype.onChange = function (event) {
        console.log(event);
        if (event === 'country') {
            this.options = { type: 'country', componentRestrictions: { country: null } };
        }
        this.address = '';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__lib_angular_google_place_index__["a" /* AngularGooglePlaceConstantService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_angular_google_place_index__ = __webpack_require__("./src/lib/angular-google-place/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__lib_angular_google_place_index__["b" /* AngularGooglePlaceModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/angular-google-place/angular-google-place.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularGooglePlaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index__ = __webpack_require__("./src/lib/angular-google-place/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_index__ = __webpack_require__("./src/lib/angular-google-place/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/lib/angular-google-place/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AngularGooglePlaceModule = (function () {
    function AngularGooglePlaceModule() {
    }
    AngularGooglePlaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__directives_index__["a" /* AngularGooglePlaceDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AngularGooglePlaceService */], __WEBPACK_IMPORTED_MODULE_0__constants_index__["a" /* AngularGooglePlaceConstantService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__directives_index__["a" /* AngularGooglePlaceDirective */]]
        })
    ], AngularGooglePlaceModule);
    return AngularGooglePlaceModule;
}());



/***/ }),

/***/ "./src/lib/angular-google-place/constants/angular-google-place.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularGooglePlaceConstantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngularGooglePlaceConstantService = (function () {
    function AngularGooglePlaceConstantService() {
    }
    // types as parameter
    // https://developers.google.com/places/supported_types?hl=fr
    AngularGooglePlaceConstantService.prototype.types_options = function () {
        return [
            '(cities)',
            '(regions)',
            'country',
            'postal_code',
            'locality',
            'sublocality',
            'address',
            'geocode',
            'administrative_area_level_1',
            'administrative_area_level_2',
        ];
    };
    /// return list ISO 3166-1 Alpha-2 country code
    AngularGooglePlaceConstantService.prototype.countryIsoCode = function () {
        return [
            {
                Name: 'Afghanistan',
                Code: 'AF'
            },
            {
                Name: 'Åland Islands',
                Code: 'AX'
            },
            {
                Name: 'Albania',
                Code: 'AL'
            },
            {
                Name: 'Algeria',
                Code: 'DZ'
            },
            {
                Name: 'American Samoa',
                Code: 'AS'
            },
            {
                Name: 'Andorra',
                Code: 'AD'
            },
            {
                Name: 'Angola',
                Code: 'AO'
            },
            {
                Name: 'Anguilla',
                Code: 'AI'
            },
            {
                Name: 'Antarctica',
                Code: 'AQ'
            },
            {
                Name: 'Antigua and Barbuda',
                Code: 'AG'
            },
            {
                Name: 'Argentina',
                Code: 'AR'
            },
            {
                Name: 'Armenia',
                Code: 'AM'
            },
            {
                Name: 'Aruba',
                Code: 'AW'
            },
            {
                Name: 'Australia',
                Code: 'AU'
            },
            {
                Name: 'Austria',
                Code: 'AT'
            },
            {
                Name: 'Azerbaijan',
                Code: 'AZ'
            },
            {
                Name: 'Bahamas',
                Code: 'BS'
            },
            {
                Name: 'Bahrain',
                Code: 'BH'
            },
            {
                Name: 'Bangladesh',
                Code: 'BD'
            },
            {
                Name: 'Barbados',
                Code: 'BB'
            },
            {
                Name: 'Belarus',
                Code: 'BY'
            },
            {
                Name: 'Belgium',
                Code: 'BE'
            },
            {
                Name: 'Belize',
                Code: 'BZ'
            },
            {
                Name: 'Benin',
                Code: 'BJ'
            },
            {
                Name: 'Bermuda',
                Code: 'BM'
            },
            {
                Name: 'Bhutan',
                Code: 'BT'
            },
            {
                Name: 'Bolivia, Plurinational State of',
                Code: 'BO'
            },
            {
                Name: 'Bonaire, Sint Eustatius and Saba',
                Code: 'BQ'
            },
            {
                Name: 'Bosnia and Herzegovina',
                Code: 'BA'
            },
            {
                Name: 'Botswana',
                Code: 'BW'
            },
            {
                Name: 'Bouvet Island',
                Code: 'BV'
            },
            {
                Name: 'Brazil',
                Code: 'BR'
            },
            {
                Name: 'British Indian Ocean Territory',
                Code: 'IO'
            },
            {
                Name: 'Brunei Darussalam',
                Code: 'BN'
            },
            {
                Name: 'Bulgaria',
                Code: 'BG'
            },
            {
                Name: 'Burkina Faso',
                Code: 'BF'
            },
            {
                Name: 'Burundi',
                Code: 'BI'
            },
            {
                Name: 'Cambodia',
                Code: 'KH'
            },
            {
                Name: 'Cameroon',
                Code: 'CM'
            },
            {
                Name: 'Canada',
                Code: 'CA'
            },
            {
                Name: 'Cape Verde',
                Code: 'CV'
            },
            {
                Name: 'Cayman Islands',
                Code: 'KY'
            },
            {
                Name: 'Central African Republic',
                Code: 'CF'
            },
            {
                Name: 'Chad',
                Code: 'TD'
            },
            {
                Name: 'Chile',
                Code: 'CL'
            },
            {
                Name: 'China',
                Code: 'CN'
            },
            {
                Name: 'Christmas Island',
                Code: 'CX'
            },
            {
                Name: 'Cocos (Keeling) Islands',
                Code: 'CC'
            },
            {
                Name: 'Colombia',
                Code: 'CO'
            },
            {
                Name: 'Comoros',
                Code: 'KM'
            },
            {
                Name: 'Congo',
                Code: 'CG'
            },
            {
                Name: 'Congo, the Democratic Republic of the',
                Code: 'CD'
            },
            {
                Name: 'Cook Islands',
                Code: 'CK'
            },
            {
                Name: 'Costa Rica',
                Code: 'CR'
            },
            {
                Name: 'Côte d\'Ivoire',
                Code: 'CI'
            },
            {
                Name: 'Croatia',
                Code: 'HR'
            },
            {
                Name: 'Cuba',
                Code: 'CU'
            },
            {
                Name: 'Curaçao',
                Code: 'CW'
            },
            {
                Name: 'Cyprus',
                Code: 'CY'
            },
            {
                Name: 'Czech Republic',
                Code: 'CZ'
            },
            {
                Name: 'Denmark',
                Code: 'DK'
            },
            {
                Name: 'Djibouti',
                Code: 'DJ'
            },
            {
                Name: 'Dominica',
                Code: 'DM'
            },
            {
                Name: 'Dominican Republic',
                Code: 'DO'
            },
            {
                Name: 'Ecuador',
                Code: 'EC'
            },
            {
                Name: 'Egypt',
                Code: 'EG'
            },
            {
                Name: 'El Salvador',
                Code: 'SV'
            },
            {
                Name: 'Equatorial Guinea',
                Code: 'GQ'
            },
            {
                Name: 'Eritrea',
                Code: 'ER'
            },
            {
                Name: 'Estonia',
                Code: 'EE'
            },
            {
                Name: 'Ethiopia',
                Code: 'ET'
            },
            {
                Name: 'Falkland Islands (Malvinas)',
                Code: 'FK'
            },
            {
                Name: 'Faroe Islands',
                Code: 'FO'
            },
            {
                Name: 'Fiji',
                Code: 'FJ'
            },
            {
                Name: 'Finland',
                Code: 'FI'
            },
            {
                Name: 'France',
                Code: 'FR'
            },
            {
                Name: 'French Guiana',
                Code: 'GF'
            },
            {
                Name: 'French Polynesia',
                Code: 'PF'
            },
            {
                Name: 'French Southern Territories',
                Code: 'TF'
            },
            {
                Name: 'Gabon',
                Code: 'GA'
            },
            {
                Name: 'Gambia',
                Code: 'GM'
            },
            {
                Name: 'Georgia',
                Code: 'GE'
            },
            {
                Name: 'Germany',
                Code: 'DE'
            },
            {
                Name: 'Ghana',
                Code: 'GH'
            },
            {
                Name: 'Gibraltar',
                Code: 'GI'
            },
            {
                Name: 'Greece',
                Code: 'GR'
            },
            {
                Name: 'Greenland',
                Code: 'GL'
            },
            {
                Name: 'Grenada',
                Code: 'GD'
            },
            {
                Name: 'Guadeloupe',
                Code: 'GP'
            },
            {
                Name: 'Guam',
                Code: 'GU'
            },
            {
                Name: 'Guatemala',
                Code: 'GT'
            },
            {
                Name: 'Guernsey',
                Code: 'GG'
            },
            {
                Name: 'Guinea',
                Code: 'GN'
            },
            {
                Name: 'Guinea-Bissau',
                Code: 'GW'
            },
            {
                Name: 'Guyana',
                Code: 'GY'
            },
            {
                Name: 'Haiti',
                Code: 'HT'
            },
            {
                Name: 'Heard Island and McDonald Islands',
                Code: 'HM'
            },
            {
                Name: 'Holy See (Vatican City State)',
                Code: 'VA'
            },
            {
                Name: 'Honduras',
                Code: 'HN'
            },
            {
                Name: 'Hong Kong',
                Code: 'HK'
            },
            {
                Name: 'Hungary',
                Code: 'HU'
            },
            {
                Name: 'Iceland',
                Code: 'IS'
            },
            {
                Name: 'India',
                Code: 'IN'
            },
            {
                Name: 'Indonesia',
                Code: 'ID'
            },
            {
                Name: 'Iran, Islamic Republic of',
                Code: 'IR'
            },
            {
                Name: 'Iraq',
                Code: 'IQ'
            },
            {
                Name: 'Ireland',
                Code: 'IE'
            },
            {
                Name: 'Isle of Man',
                Code: 'IM'
            },
            {
                Name: 'Israel',
                Code: 'IL'
            },
            {
                Name: 'Italy',
                Code: 'IT'
            },
            {
                Name: 'Jamaica',
                Code: 'JM'
            },
            {
                Name: 'Japan',
                Code: 'JP'
            },
            {
                Name: 'Jersey',
                Code: 'JE'
            },
            {
                Name: 'Jordan',
                Code: 'JO'
            },
            {
                Name: 'Kazakhstan',
                Code: 'KZ'
            },
            {
                Name: 'Kenya',
                Code: 'KE'
            },
            {
                Name: 'Kiribati',
                Code: 'KI'
            },
            {
                Name: 'Korea, Democratic People\'s Republic of',
                Code: 'KP'
            },
            {
                Name: 'Korea, Republic of',
                Code: 'KR'
            },
            {
                Name: 'Kuwait',
                Code: 'KW'
            },
            {
                Name: 'Kyrgyzstan',
                Code: 'KG'
            },
            {
                Name: 'Lao People\'s Democratic Republic',
                Code: 'LA'
            },
            {
                Name: 'Latvia',
                Code: 'LV'
            },
            {
                Name: 'Lebanon',
                Code: 'LB'
            },
            {
                Name: 'Lesotho',
                Code: 'LS'
            },
            {
                Name: 'Liberia',
                Code: 'LR'
            },
            {
                Name: 'Libya',
                Code: 'LY'
            },
            {
                Name: 'Liechtenstein',
                Code: 'LI'
            },
            {
                Name: 'Lithuania',
                Code: 'LT'
            },
            {
                Name: 'Luxembourg',
                Code: 'LU'
            },
            {
                Name: 'Macao',
                Code: 'MO'
            },
            {
                Name: 'Macedonia, the Former Yugoslav Republic of',
                Code: 'MK'
            },
            {
                Name: 'Madagascar',
                Code: 'MG'
            },
            {
                Name: 'Malawi',
                Code: 'MW'
            },
            {
                Name: 'Malaysia',
                Code: 'MY'
            },
            {
                Name: 'Maldives',
                Code: 'MV'
            },
            {
                Name: 'Mali',
                Code: 'ML'
            },
            {
                Name: 'Malta',
                Code: 'MT'
            },
            {
                Name: 'Marshall Islands',
                Code: 'MH'
            },
            {
                Name: 'Martinique',
                Code: 'MQ'
            },
            {
                Name: 'Mauritania',
                Code: 'MR'
            },
            {
                Name: 'Mauritius',
                Code: 'MU'
            },
            {
                Name: 'Mayotte',
                Code: 'YT'
            },
            {
                Name: 'Mexico',
                Code: 'MX'
            },
            {
                Name: 'Micronesia, Federated States of',
                Code: 'FM'
            },
            {
                Name: 'Moldova, Republic of',
                Code: 'MD'
            },
            {
                Name: 'Monaco',
                Code: 'MC'
            },
            {
                Name: 'Mongolia',
                Code: 'MN'
            },
            {
                Name: 'Montenegro',
                Code: 'ME'
            },
            {
                Name: 'Montserrat',
                Code: 'MS'
            },
            {
                Name: 'Morocco',
                Code: 'MA'
            },
            {
                Name: 'Mozambique',
                Code: 'MZ'
            },
            {
                Name: 'Myanmar',
                Code: 'MM'
            },
            {
                Name: 'Namibia',
                Code: 'NA'
            },
            {
                Name: 'Nauru',
                Code: 'NR'
            },
            {
                Name: 'Nepal',
                Code: 'NP'
            },
            {
                Name: 'Netherlands',
                Code: 'NL'
            },
            {
                Name: 'New Caledonia',
                Code: 'NC'
            },
            {
                Name: 'New Zealand',
                Code: 'NZ'
            },
            {
                Name: 'Nicaragua',
                Code: 'NI'
            },
            {
                Name: 'Niger',
                Code: 'NE'
            },
            {
                Name: 'Nigeria',
                Code: 'NG'
            },
            {
                Name: 'Niue',
                Code: 'NU'
            },
            {
                Name: 'Norfolk Island',
                Code: 'NF'
            },
            {
                Name: 'Northern Mariana Islands',
                Code: 'MP'
            },
            {
                Name: 'Norway',
                Code: 'NO'
            },
            {
                Name: 'Oman',
                Code: 'OM'
            },
            {
                Name: 'Pakistan',
                Code: 'PK'
            },
            {
                Name: 'Palau',
                Code: 'PW'
            },
            {
                Name: 'Palestine, State of',
                Code: 'PS'
            },
            {
                Name: 'Panama',
                Code: 'PA'
            },
            {
                Name: 'Papua New Guinea',
                Code: 'PG'
            },
            {
                Name: 'Paraguay',
                Code: 'PY'
            },
            {
                Name: 'Peru',
                Code: 'PE'
            },
            {
                Name: 'Philippines',
                Code: 'PH'
            },
            {
                Name: 'Pitcairn',
                Code: 'PN'
            },
            {
                Name: 'Poland',
                Code: 'PL'
            },
            {
                Name: 'Portugal',
                Code: 'PT'
            },
            {
                Name: 'Puerto Rico',
                Code: 'PR'
            },
            {
                Name: 'Qatar',
                Code: 'QA'
            },
            {
                Name: 'Réunion',
                Code: 'RE'
            },
            {
                Name: 'Romania',
                Code: 'RO'
            },
            {
                Name: 'Russian Federation',
                Code: 'RU'
            },
            {
                Name: 'Rwanda',
                Code: 'RW'
            },
            {
                Name: 'Saint Barthélemy',
                Code: 'BL'
            },
            {
                Name: 'Saint Helena, Ascension and Tristan da Cunha',
                Code: 'SH'
            },
            {
                Name: 'Saint Kitts and Nevis',
                Code: 'KN'
            },
            {
                Name: 'Saint Lucia',
                Code: 'LC'
            },
            {
                Name: 'Saint Martin (French part)',
                Code: 'MF'
            },
            {
                Name: 'Saint Pierre and Miquelon',
                Code: 'PM'
            },
            {
                Name: 'Saint Vincent and the Grenadines',
                Code: 'VC'
            },
            {
                Name: 'Samoa',
                Code: 'WS'
            },
            {
                Name: 'San Marino',
                Code: 'SM'
            },
            {
                Name: 'Sao Tome and Principe',
                Code: 'ST'
            },
            {
                Name: 'Saudi Arabia',
                Code: 'SA'
            },
            {
                Name: 'Senegal',
                Code: 'SN'
            },
            {
                Name: 'Serbia',
                Code: 'RS'
            },
            {
                Name: 'Seychelles',
                Code: 'SC'
            },
            {
                Name: 'Sierra Leone',
                Code: 'SL'
            },
            {
                Name: 'Singapore',
                Code: 'SG'
            },
            {
                Name: 'Sint Maarten (Dutch part)',
                Code: 'SX'
            },
            {
                Name: 'Slovakia',
                Code: 'SK'
            },
            {
                Name: 'Slovenia',
                Code: 'SI'
            },
            {
                Name: 'Solomon Islands',
                Code: 'SB'
            },
            {
                Name: 'Somalia',
                Code: 'SO'
            },
            {
                Name: 'South Africa',
                Code: 'ZA'
            },
            {
                Name: 'South Georgia and the South Sandwich Islands',
                Code: 'GS'
            },
            {
                Name: 'South Sudan',
                Code: 'SS'
            },
            {
                Name: 'Spain',
                Code: 'ES'
            },
            {
                Name: 'Sri Lanka',
                Code: 'LK'
            },
            {
                Name: 'Sudan',
                Code: 'SD'
            },
            {
                Name: 'Suriname',
                Code: 'SR'
            },
            {
                Name: 'Svalbard and Jan Mayen',
                Code: 'SJ'
            },
            {
                Name: 'Swaziland',
                Code: 'SZ'
            },
            {
                Name: 'Sweden',
                Code: 'SE'
            },
            {
                Name: 'Switzerland',
                Code: 'CH'
            },
            {
                Name: 'Syrian Arab Republic',
                Code: 'SY'
            },
            {
                Name: 'Taiwan, Province of China',
                Code: 'TW'
            },
            {
                Name: 'Tajikistan',
                Code: 'TJ'
            },
            {
                Name: 'Tanzania, United Republic of',
                Code: 'TZ'
            },
            {
                Name: 'Thailand',
                Code: 'TH'
            },
            {
                Name: 'Timor-Leste',
                Code: 'TL'
            },
            {
                Name: 'Togo',
                Code: 'TG'
            },
            {
                Name: 'Tokelau',
                Code: 'TK'
            },
            {
                Name: 'Tonga',
                Code: 'TO'
            },
            {
                Name: 'Trinidad and Tobago',
                Code: 'TT'
            },
            {
                Name: 'Tunisia',
                Code: 'TN'
            },
            {
                Name: 'Turkey',
                Code: 'TR'
            },
            {
                Name: 'Turkmenistan',
                Code: 'TM'
            },
            {
                Name: 'Turks and Caicos Islands',
                Code: 'TC'
            },
            {
                Name: 'Tuvalu',
                Code: 'TV'
            },
            {
                Name: 'Uganda',
                Code: 'UG'
            },
            {
                Name: 'Ukraine',
                Code: 'UA'
            },
            {
                Name: 'United Arab Emirates',
                Code: 'AE'
            },
            {
                Name: 'United Kingdom',
                Code: 'GB'
            },
            {
                Name: 'United States',
                Code: 'US'
            },
            {
                Name: 'United States Minor Outlying Islands',
                Code: 'UM'
            },
            {
                Name: 'Uruguay',
                Code: 'UY'
            },
            {
                Name: 'Uzbekistan',
                Code: 'UZ'
            },
            {
                Name: 'Vanuatu',
                Code: 'VU'
            },
            {
                Name: 'Venezuela, Bolivarian Republic of',
                Code: 'VE'
            },
            {
                Name: 'Viet Nam',
                Code: 'VN'
            },
            {
                Name: 'Virgin Islands, British',
                Code: 'VG'
            },
            {
                Name: 'Virgin Islands, U.S.',
                Code: 'VI'
            },
            {
                Name: 'Wallis and Futuna',
                Code: 'WF'
            },
            {
                Name: 'Western Sahara',
                Code: 'EH'
            },
            {
                Name: 'Yemen',
                Code: 'YE'
            },
            {
                Name: 'Zambia',
                Code: 'ZM'
            },
            {
                Name: 'Zimbabwe',
                Code: 'ZW'
            }
        ];
    };
    // type Return by Google
    AngularGooglePlaceConstantService.prototype.returnTypes = function () {
        return [
            'accounting',
            'airport',
            'amusement_park',
            'aquarium',
            'art_gallery',
            'atm',
            'bakery',
            'bank',
            'bar',
            'beauty_salon',
            'bicycle_store',
            'book_store',
            'bowling_alley',
            'bus_station',
            'cafe',
            'campground',
            'car_dealer',
            'car_rental',
            'car_repair',
            'car_wash',
            'casino',
            'cemetery',
            'church',
            'city_hall',
            'clothing_store',
            'convenience_store',
            'courthouse',
            'dentist',
            'department_store',
            'doctor',
            'electrician',
            'electronics_store',
            'embassy',
            'fire_station',
            'florist',
            'funeral_home',
            'furniture_store',
            'gas_station',
            'gym',
            'hair_care',
            'hardware_store',
            'hindu_temple',
            'home_goods_store',
            'hospital',
            'insurance_agency',
            'jewelry_store',
            'laundry',
            'lawyer',
            'library',
            'liquor_store',
            'local_government_office',
            'locksmith',
            'lodging',
            'meal_delivery',
            'meal_takeaway',
            'mosque',
            'movie_rental',
            'movie_theater',
            'moving_company',
            'museum',
            'night_club',
            'painter',
            'park',
            'parking',
            'pet_store',
            'pharmacy',
            'physiotherapist',
            'plumber',
            'police',
            'post_office',
            'real_estate_agency',
            'restaurant',
            'roofing_contractor',
            'rv_park',
            'school',
            'shoe_store',
            'shopping_mall',
            'spa',
            'stadium',
            'storage',
            'store',
            'subway_station',
            'synagogue',
            'taxi_stand',
            'train_station',
            'transit_station',
            'travel_agency',
            'university',
            'veterinary_care',
            'zoo',
        ];
    };
    AngularGooglePlaceConstantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AngularGooglePlaceConstantService);
    return AngularGooglePlaceConstantService;
}());



/***/ }),

/***/ "./src/lib/angular-google-place/constants/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_google_place_constant__ = __webpack_require__("./src/lib/angular-google-place/constants/angular-google-place.constant.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular_google_place_constant__["a"]; });



/***/ }),

/***/ "./src/lib/angular-google-place/directives/angular-google-place.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularGooglePlaceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/lib/angular-google-place/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularGooglePlaceDirective = (function () {
    function AngularGooglePlaceDirective(el, service, ngZone) {
        this.el = el;
        this.service = service;
        this.ngZone = ngZone;
        this.changelogs = [];
        this.CountryCodes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.TypesOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        // unformatted address
        this.setAddress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        // formatted address
        this.FormatAddress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.street_number = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.postal_code = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.country = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.lat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.lng = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.adr_address = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.formatted_address = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.name = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.place_id = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.types = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.utc_offset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.vicinity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.photos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.street = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.city = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.state = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.district = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    AngularGooglePlaceDirective.prototype.onFocus = function (target) {
        this.setAutocompleteAndInvokeEvent(this.options);
    };
    AngularGooglePlaceDirective.prototype.ngOnInit = function () {
        this.CountryCodes.emit(this.service.countryIsoCode());
        this.TypesOptions.emit(this.service.typesOptions());
        if (typeof google === 'undefined') {
            console.error("google place api is not loaded at this time, angular-google-place won't work");
            return;
        }
        this.setAutocompleteAndInvokeEvent(this.options);
    };
    AngularGooglePlaceDirective.prototype.setAutocompleteAndInvokeEvent = function (options) {
        var _this = this;
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, options);
        this.trigger = this.autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                _this.place = _this.autocomplete.getPlace();
                if (_this.place && _this.place.place_id) {
                    _this.invokeEvent();
                }
            });
        });
    };
    AngularGooglePlaceDirective.prototype.invokeEvent = function () {
        this.setAddress.emit(this.place);
        var street_number = this.service.street_number(this.place.address_components);
        this.street_number.emit(street_number);
        var street = this.service.street(this.place.address_components);
        this.street.emit(street);
        var city = this.service.city(this.place.address_components);
        this.city.emit(city);
        var state = this.service.state(this.place.address_components);
        this.state.emit(state);
        var country = this.service.country(this.place.address_components);
        this.country.emit(country);
        var postal_code = this.service.postal_code(this.place.address_components);
        this.postal_code.emit(postal_code);
        var district = this.service.administrative_area_level_2(this.place.address_components);
        this.district.emit(district);
        var lat = this.place.geometry.location.lat();
        this.lat.emit(lat);
        var lng = this.place.geometry.location.lng();
        this.lng.emit(lng);
        var adr_address = this.place.adr_address;
        this.adr_address.emit(adr_address);
        var formatted_address = this.place.formatted_address;
        this.formatted_address.emit(formatted_address);
        var name = this.place.name;
        this.name.emit(name);
        var place_id = this.place.place_id;
        this.place_id.emit(place_id);
        var types = this.place.types;
        this.types.emit(types);
        var url = this.place.url;
        this.url.emit(url);
        var utc_offset = this.place.utc_offset;
        this.utc_offset.emit(utc_offset);
        var vicinity = this.place.vicinity;
        this.vicinity.emit(vicinity);
        var photos = this.place.photos;
        this.photos.emit(photos);
        this.FormatAddress.emit({
            'street_number': street_number,
            'street': street,
            'city': city,
            'state': state,
            'country': country,
            'postal_code': postal_code,
            'district': district,
            'lat': lat,
            'lng': lng,
        });
        /*
         DEPRECATED SINCE 2014
         this.place.id
         reference
         */
        /*
         NOT USED YET
    
         this.intersection.emit(this.service.intersection(this.place.address_components) ? this.service.intersection(this.place.address_components) : null)
         this.political.emit(this.service.political(this.place.address_components) ? this.service.political(this.place.address_components) : null)
         this.colloquial_area.emit(this.service.colloquial_area(this.place.address_components) ? this.service.colloquial_area(this.place.address_components) : null)
    
         this.ward.emit(this.service.ward(this.place.address_components) ? this.service.ward(this.place.address_components) : null)
    
         this.administrative_area_level_3.emit(this.service.administrative_area_level_3(this.place.address_components) ? this.service.administrative_area_level_3(this.place.address_components) : null)
         this.administrative_area_level_4.emit(this.service.administrative_area_level_4(this.place.address_components) ? this.service.administrative_area_level_4(this.place.address_components) : null)
         this.administrative_area_level_5.emit(this.service.administrative_area_level_5(this.place.address_components) ? this.service.administrative_area_level_5(this.place.address_components) : null)
    
         this.sublocality.emit(this.service.sublocality(this.place.address_components) ? this.service.sublocality(this.place.address_components) : null)
         this.sublocality_level_1.emit(this.service.sublocality_level_1(this.place.address_components) ?
         this.service.sublocality_level_1(this.place.address_components) : null);
         this.sublocality_level_2.emit(this.service.sublocality_level_2(this.place.address_components) ?
         this.service.sublocality_level_2(this.place.address_components) : null);
         this.sublocality_level_3.emit(this.service.sublocality_level_3(this.place.address_components) ?
         this.service.sublocality_level_3(this.place.address_components) : null);
         this.sublocality_level_4.emit(this.service.sublocality_level_4(this.place.address_components) ?
         this.service.sublocality_level_4(this.place.address_components) : null);
         this.sublocality_level_5.emit(this.service.sublocality_level_5(this.place.address_components) ?
         this.service.sublocality_level_5(this.place.address_components) : null);
    
         this.neighborhood.emit(this.service.neighborhood(this.place.address_components) ? this.service.neighborhood(this.place.address_components) : null)
         this.premise.emit(this.service.premise(this.place.address_components) ? this.service.premise(this.place.address_components) : null)
         this.subpremise.emit(this.service.subpremise(this.place.address_components) ? this.service.subpremise(this.place.address_components) : null)
         this.natural_feature.emit(this.service.natural_feature(this.place.address_components) ? this.service.natural_feature(this.place.address_components) : null)
         this.airport.emit(this.service.airport(this.place.address_components) ? this.service.airport(this.place.address_components) : null)
         this.park.emit(this.service.park(this.place.address_components) ? this.service.park(this.place.address_components) : null)
         this.point_of_interest.emit(this.service.point_of_interest(this.place.address_components) ? this.service.point_of_interest(this.place.address_components) : null)
         this.floor.emit(this.service.floor(this.place.address_components) ? this.service.floor(this.place.address_components) : null)
         this.establishment.emit(this.service.establishment(this.place.address_components) ? this.service.establishment(this.place.address_components) : null)
         this.parking.emit(this.service.parking(this.place.address_components) ? this.service.parking(this.place.address_components) : null)
         this.post_box.emit(this.service.post_box(this.place.address_components) ? this.service.post_box(this.place.address_components) : null)
         this.postal_town.emit(this.service.postal_town(this.place.address_components) ? this.service.postal_town(this.place.address_components) : null)
         this.room.emit(this.service.room(this.place.address_components) ? this.service.room(this.place.address_components) : null)
         this.bus_station.emit(this.service.bus_station(this.place.address_components) ? this.service.bus_station(this.place.address_components) : null)
         this.train_station.emit(this.service.train_station(this.place.address_components) ? this.service.train_station(this.place.address_components) : null)
         this.transit_station.emit(this.service.transit_station(this.place.address_components) ? this.service.transit_station(this.place.address_components) : null)
         */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('options'),
        __metadata("design:type", Object)
    ], AngularGooglePlaceDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "CountryCodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "TypesOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "setAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "FormatAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "street_number", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "postal_code", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "country", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "lng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "adr_address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "formatted_address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "place_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "types", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "utc_offset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "vicinity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "street", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "city", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], AngularGooglePlaceDirective.prototype, "district", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('focus', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AngularGooglePlaceDirective.prototype, "onFocus", null);
    AngularGooglePlaceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[angularGooglePlace]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AngularGooglePlaceService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]])
    ], AngularGooglePlaceDirective);
    return AngularGooglePlaceDirective;
}());



/***/ }),

/***/ "./src/lib/angular-google-place/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_google_place_directive__ = __webpack_require__("./src/lib/angular-google-place/directives/angular-google-place.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular_google_place_directive__["a"]; });



/***/ }),

/***/ "./src/lib/angular-google-place/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_google_place_module__ = __webpack_require__("./src/lib/angular-google-place/angular-google-place.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__angular_google_place_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index__ = __webpack_require__("./src/lib/angular-google-place/constants/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__constants_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/lib/angular-google-place/services/index.ts");
/* unused harmony reexport AngularGooglePlaceService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_angular_google_place_directive__ = __webpack_require__("./src/lib/angular-google-place/directives/angular-google-place.directive.ts");
/* unused harmony reexport AngularGooglePlaceDirective */






/***/ }),

/***/ "./src/lib/angular-google-place/services/angular-google-place.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularGooglePlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index__ = __webpack_require__("./src/lib/angular-google-place/constants/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AngularGooglePlaceService = (function () {
    function AngularGooglePlaceService(constant) {
        this.constant = constant;
    }
    AngularGooglePlaceService.prototype.find = function (address_components, query, val) {
        if (val === void 0) { val = null; }
        for (var _i = 0, address_components_1 = address_components; _i < address_components_1.length; _i++) {
            var attr = address_components_1[_i];
            for (var _a = 0, _b = attr.types; _a < _b.length; _a++) {
                var type = _b[_a];
                if (type === query) {
                    return val ? attr[val] : attr;
                }
            }
        }
        return null;
    };
    AngularGooglePlaceService.prototype.street_number = function (address_components) {
        return this.find(address_components, 'street_number', 'long_name');
    };
    AngularGooglePlaceService.prototype.street = function (address_components) {
        return this.find(address_components, 'route', 'long_name');
    };
    AngularGooglePlaceService.prototype.city = function (address_components) {
        return this.find(address_components, 'locality', 'long_name');
    };
    AngularGooglePlaceService.prototype.state = function (address_components) {
        return this.find(address_components, 'administrative_area_level_1', 'long_name');
    };
    AngularGooglePlaceService.prototype.postal_code = function (address_components) {
        return this.find(address_components, 'postal_code', 'long_name');
    };
    AngularGooglePlaceService.prototype.country = function (address_components) {
        return this.find(address_components, 'country', 'long_name');
    };
    AngularGooglePlaceService.prototype.administrative_area_level_2 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_2', 'long_name');
    };
    // MORE NOT USED YET /////
    AngularGooglePlaceService.prototype.intersection = function (address_components) {
        return this.find(address_components, 'intersection');
    };
    AngularGooglePlaceService.prototype.political = function (address_components) {
        return this.find(address_components, 'political');
    };
    AngularGooglePlaceService.prototype.administrative_area_level_3 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_3');
    };
    AngularGooglePlaceService.prototype.administrative_area_level_4 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_4');
    };
    AngularGooglePlaceService.prototype.administrative_area_level_5 = function (address_components) {
        return this.find(address_components, 'administrative_area_level_5');
    };
    AngularGooglePlaceService.prototype.colloquial_area = function (address_components) {
        return this.find(address_components, 'colloquial_area');
    };
    AngularGooglePlaceService.prototype.ward = function (address_components) {
        return this.find(address_components, 'ward');
    };
    AngularGooglePlaceService.prototype.sublocality = function (address_components) {
        return this.find(address_components, 'sublocality');
    };
    AngularGooglePlaceService.prototype.sublocality_level_1 = function (address_components) {
        return this.find(address_components, 'sublocality_level_1');
    };
    AngularGooglePlaceService.prototype.sublocality_level_2 = function (address_components) {
        return this.find(address_components, 'sublocality_level_2');
    };
    AngularGooglePlaceService.prototype.sublocality_level_3 = function (address_components) {
        return this.find(address_components, 'sublocality_level_3');
    };
    AngularGooglePlaceService.prototype.sublocality_level_4 = function (address_components) {
        return this.find(address_components, 'sublocality_level_4');
    };
    AngularGooglePlaceService.prototype.sublocality_level_5 = function (address_components) {
        return this.find(address_components, 'sublocality_level_5');
    };
    AngularGooglePlaceService.prototype.neighborhood = function (address_components) {
        return this.find(address_components, 'neighborhood');
    };
    AngularGooglePlaceService.prototype.premise = function (address_components) {
        return this.find(address_components, 'premise');
    };
    AngularGooglePlaceService.prototype.subpremise = function (address_components) {
        return this.find(address_components, 'subpremise');
    };
    AngularGooglePlaceService.prototype.natural_feature = function (address_components) {
        return this.find(address_components, 'natural_feature');
    };
    AngularGooglePlaceService.prototype.airport = function (address_components) {
        return this.find(address_components, 'airport');
    };
    AngularGooglePlaceService.prototype.park = function (address_components) {
        return this.find(address_components, 'park');
    };
    AngularGooglePlaceService.prototype.point_of_interest = function (address_components) {
        return this.find(address_components, 'point_of_interest');
    };
    AngularGooglePlaceService.prototype.floor = function (address_components) {
        return this.find(address_components, 'floor');
    };
    AngularGooglePlaceService.prototype.establishment = function (address_components) {
        return this.find(address_components, 'establishment');
    };
    AngularGooglePlaceService.prototype.parking = function (address_components) {
        return this.find(address_components, 'parking');
    };
    AngularGooglePlaceService.prototype.post_box = function (address_components) {
        return this.find(address_components, 'post_box');
    };
    AngularGooglePlaceService.prototype.postal_town = function (address_components) {
        return this.find(address_components, 'postal_town');
    };
    AngularGooglePlaceService.prototype.room = function (address_components) {
        return this.find(address_components, 'room');
    };
    AngularGooglePlaceService.prototype.bus_station = function (address_components) {
        return this.find(address_components, 'bus_station');
    };
    AngularGooglePlaceService.prototype.train_station = function (address_components) {
        return this.find(address_components, 'train_station');
    };
    AngularGooglePlaceService.prototype.transit_station = function (address_components) {
        return this.find(address_components, 'transit_station');
    };
    // countryIsoCode
    AngularGooglePlaceService.prototype.countryIsoCode = function () {
        return this.constant.countryIsoCode();
    };
    // Types options
    AngularGooglePlaceService.prototype.typesOptions = function () {
        return this.constant.types_options();
    };
    AngularGooglePlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__constants_index__["a" /* AngularGooglePlaceConstantService */]])
    ], AngularGooglePlaceService);
    return AngularGooglePlaceService;
}());



/***/ }),

/***/ "./src/lib/angular-google-place/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_google_place_service__ = __webpack_require__("./src/lib/angular-google-place/services/angular-google-place.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular_google_place_service__["a"]; });



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map