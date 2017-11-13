webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/acuity/acuity.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Visual acuity commonly refers to the clarity of vision. Visual acuity is dependent on optical and neural factors, i.e., (i)\r\n  the sharpness of the retinal focus within the eye, (ii) the health and functioning of the retina, and (iii) the sensitivity\r\n  of the interpretative faculty of the brain.\r\n</p>\r\n<div class=\"title\">Reading Accuracy</div>\r\n<div style=\"display: block;\">\r\n  <canvas baseChart [data]=\"lineChartData\" [options]=\"options\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [chartType]=\"lineChartType\"></canvas>\r\n</div>\r\n<h4>You have 20/40 vision.</h4>\r\n<p>\r\n  A common cause of low visual acuity is refractive error (ametropia), or errors in how the light is refracted in the eyeball.\r\n  Causes of refractive errors include aberrations in the shape of the eyeball, the shape of the cornea, and reduced flexibility\r\n  of the lens. Too high or too low refractive error (in relation to the length of the eyeball) is the cause of nearsightedness\r\n  (myopia) or farsightedness (hyperopia) (normal refractive status is referred to as emmetropia). Other optical causes are\r\n  astigmatism or more complex corneal irregularities. These anomalies can mostly be corrected by optical means (such as eyeglasses,\r\n  contact lenses, laser surgery, etc.).\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/acuity/acuity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-align: center;\n  margin: 20px 0px 5px 0px;\n  font-weight: bold;\n  font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/acuity/acuity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcuityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcuityComponent = (function () {
    function AcuityComponent() {
        this.options = {
            legend: false,
        };
        this.lineChartData = [100, 100, 90, 100, 90, 75, 40, 5, 0];
        this.lineChartLabels = [200, 100, 70, 50, 40, 30, 25, 20, 15];
        this.lineChartType = 'line';
    }
    AcuityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acuity',
            template: __webpack_require__("../../../../../src/app/acuity/acuity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/acuity/acuity.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], AcuityComponent);
    return AcuityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<span id=\"note\">This is meant to be viewed in portrait only, thank you :)</span>\r\n<div class=\"container\">\r\n  <h4>Summary</h4>\r\n  <p>\r\n    We have found that you have a severe case of Protanopia (Red-Green) color blindness. We have also calculated that you have\r\n    approximately 40/20 vision. This could be caused by your loss of vision in the right eye. Scroll down to find out more\r\n    information.\r\n  </p>\r\n</div>\r\n<h3 id=\"vision\">Color Vision</h3>\r\n<div class=\"eye-row\">\r\n  <app-color-vision></app-color-vision>\r\n</div>\r\n<h3 id=\"acuity\">Visual Acuity</h3>\r\n<div class=\"eye-row\">\r\n  <app-acuity></app-acuity>\r\n</div>\r\n<h3 id=\"mapping\">Visual Field Mapping</h3>\r\n<div class=\"eye-row\">\r\n  <app-visual-field></app-visual-field>\r\n</div>\r\n<h3 id=\"stereopsis\">Stereopsis</h3>\r\n<div class=\"eye-row\">\r\n  <app-stereopsis></app-stereopsis>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".eye-row {\n  padding: 0px 10px; }\n\nh3 {\n  padding: 15px 10px; }\n\n#note {\n  position: fixed;\n  left: 475px; }\n\n#vision {\n  background-color: #4CAF50;\n  color: rgba(255, 255, 255, 0.96); }\n\n#acuity {\n  background-color: #FFC107;\n  color: rgba(255, 255, 255, 0.96); }\n\n#mapping {\n  background-color: #F44336;\n  color: rgba(255, 255, 255, 0.96); }\n\n#stereopsis {\n  background-color: #9C27B0;\n  color: rgba(255, 255, 255, 0.96); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_mat_mat_module__ = __webpack_require__("../../../../../src/app/mat/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__color_vision_color_vision_component__ = __webpack_require__("../../../../../src/app/color-vision/color-vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__acuity_acuity_component__ = __webpack_require__("../../../../../src/app/acuity/acuity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visual_field_visual_field_component__ = __webpack_require__("../../../../../src/app/visual-field/visual-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stereopsis_stereopsis_component__ = __webpack_require__("../../../../../src/app/stereopsis/stereopsis.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__color_vision_color_vision_component__["a" /* ColorVisionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__acuity_acuity_component__["a" /* AcuityComponent */],
                __WEBPACK_IMPORTED_MODULE_8__visual_field_visual_field_component__["a" /* VisualFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_9__stereopsis_stereopsis_component__["a" /* StereopsisComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_app_navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_mat_mat_module__["a" /* MatModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/color-vision/color-vision.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Color blindness, also known as color vision deficiency, is the decreased ability to see color or differences in color. Color\r\n  blindness can make some educational activities difficult. Buying fruit, picking clothing, and reading traffic lights can\r\n  be more challenging, for example. Problems, however, are generally minor and most people adapt. People with total color\r\n  blindness, however, may also have decreased visual acuity and be uncomfortable in bright environments.\r\n</p>\r\n<div style=\"display: block;\">\r\n  <canvas baseChart style=\"width: 100%; height: 50vh\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\"\r\n    [options]=\"options\" [chartType]=\"polarAreaChartType\"></canvas>\r\n</div>\r\n<h4>You have severe Red-Green Color Blindness (Protanopia).</h4>\r\n<p>\r\n  Red-green color blindness is split into two different types: Whereas people affected by protan color blindness are less sensitive\r\n  to red light, deuteranopia or deuteranomly (the second type of red-green color blindness) is related to sensitiveness on\r\n  green light.\r\n</p>\r\n<p>\r\n  Protans have either defective long-wavelength cones (L-cones) or the L-cones are missing at all. If they are missing it is\r\n  called protanopia or sometimes red-dichromacy. Affected persons are dichromats because they have only two working cone\r\n  types, short- and medium-wavelength, compared to persons with normal vision with three different cone types.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/color-vision/color-vision.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/color-vision/color-vision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorVisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorVisionComponent = (function () {
    function ColorVisionComponent() {
        this.options = {
            layout: { padding: { left: 0, right: 0, top: 0, bottom: 25 } },
            responsive: true,
            maintainAspectRatio: true,
            scale: { ticks: { max: 100 } }
        };
        // PolarArea
        this.polarAreaChartLabels = [
            'Protanopia', 'Dichromatism', 'Anomalous trichromatism', 'Tritanopia',
            'Deuteranopia', 'Monochromatism'
        ];
        this.polarAreaChartData = [90, 20, 20, 40, 0, 0];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    ColorVisionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-color-vision',
            template: __webpack_require__("../../../../../src/app/color-vision/color-vision.component.html"),
            styles: [__webpack_require__("../../../../../src/app/color-vision/color-vision.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ColorVisionComponent);
    return ColorVisionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mat/mat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatModule = (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatListModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatListModule */]],
            declarations: []
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>\r\n    <img id=\"logo\" src=\"/assets/logo.svg\">\r\n  </span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n#logo {\n  height: 50px;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/navigation/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/nav/nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__("../../../../../src/app/navigation/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_mat_mat_module__ = __webpack_require__("../../../../../src/app/mat/mat.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3_app_mat_mat_module__["a" /* MatModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../../../../src/app/stereopsis/stereopsis.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Stereopsis is a term that is most often used to refer to the perception of depth and 3-dimensional structure obtained on\r\n  the basis of visual information deriving from two eyes by individuals with normally developed binocular vision. Because\r\n  the eyes of humans, and many animals, are located at different lateral positions on the head, binocular vision results\r\n  in two slightly different images projected to the retinas of the eyes. The differences are mainly in the relative horizontal\r\n  position of objects in the two images. These positional differences are referred to as horizontal disparities or, more\r\n  generally, binocular disparities. Disparities are processed in the visual cortex of the brain to yield depth perception.\r\n  While binocular disparities are naturally present when viewing a real 3-dimensional scene with two eyes, they can also\r\n  be simulated by artificially presenting two different images separately to each eye using a method called stereoscopy.\r\n  The perception of depth in such cases is also referred to as \"stereoscopic depth\".\r\n</p>\r\n<div style=\"display: block\">\r\n  <canvas id=\"chartCanvas\" style=\"width:100%; height:30vh\" baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\r\n    [legend]=\"barChartLegend\" [chartType]=\"barChartType\"></canvas>\r\n</div>\r\n<h4>You have a good sense of depth perception.</h4>\r\n"

/***/ }),

/***/ "../../../../../src/app/stereopsis/stereopsis.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chartCanvas {\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stereopsis/stereopsis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StereopsisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StereopsisComponent = (function () {
    function StereopsisComponent() {
        this.barChartOptions = { scaleShowVerticalLines: true, responsive: false };
        this.options = {
            scaleShowVerticalLines: false, responsive: true,
            layout: { padding: { left: 0, right: 0, top: 0, bottom: 25 } },
            maintainAspectRatio: true,
            scale: { ticks: { max: 100, min: 0 } }
        };
        this.barChartLabels = ['Correct', 'Incorrect'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{ data: [9, 1], label: 'Depth Classification' }];
    }
    StereopsisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stereopsis',
            template: __webpack_require__("../../../../../src/app/stereopsis/stereopsis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stereopsis/stereopsis.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], StereopsisComponent);
    return StereopsisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/visual-field/visual-field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  In many locations within the brain, adjacent neurons have receptive fields that include slightly different, but overlapping\r\n  portions of the visual field. The position of the center of these receptive fields forms an orderly sampling mosaic that\r\n  covers a portion of the visual field. Because of this orderly arrangement, which emerges from the spatial specificity of\r\n  connections between neurons in different parts of the visual system, cells in each structure can be seen as contributing\r\n  to a map of the visual field (also called a retinotopic map, or a visuotopic map). Retinotopic maps are a particular case\r\n  of topographic organization. Many brain structures that are responsive to visual input, including much of the visual cortex\r\n  and visual nuclei of the brain stem (such as the superior colliculus) and thalamus (such as the lateral geniculate nucleus\r\n  and the pulvinar), are organized into retinotopic maps, also called visual field maps.\r\n</p>\r\n<div style=\"display: block;\">\r\n  <canvas style=\"width: 100%; height: 50vh\" [options]=\"options\" baseChart [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\"\r\n    [chartType]=\"radarChartType\"></canvas>\r\n</div>\r\n<h4>You have approximately 40% loss of vision in the lower area of your right eye.</h4>\r\n<p>\r\n  The discovery of visual field maps in human can be traced to neurological cases, arising from war injuries, described and\r\n  analyzed independently by Tatsuji Inouye (a Japanese ophthalmologist) and Gordon Holmes (a British neurologist). They observed\r\n  correlations between the position of the entry wound and visual field loss (see Fishman, 1997 for an historical review).\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/visual-field/visual-field.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visual-field/visual-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VisualFieldComponent = (function () {
    function VisualFieldComponent() {
        // Radar
        this.radarChartLabels = [
            '360° / 0°', '45°', '90°', '135°', '180°', '225°', '270°', '315°',
        ];
        this.options = {
            layout: { padding: { left: 0, right: 0, top: 0, bottom: 25 } },
            responsive: true,
            maintainAspectRatio: true,
            scale: { ticks: { max: 100, min: 0 } }
        };
        this.radarChartData = [
            { data: [100, 100, 85, 100, 100, 100, 100, 90], label: 'Left Eye' },
            { data: [100, 100, 100, 100, 75, 60, 75, 100], label: 'Right Eye' }
        ];
        this.radarChartType = 'radar';
    }
    VisualFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visual-field',
            template: __webpack_require__("../../../../../src/app/visual-field/visual-field.component.html"),
            styles: [__webpack_require__("../../../../../src/app/visual-field/visual-field.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], VisualFieldComponent);
    return VisualFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map