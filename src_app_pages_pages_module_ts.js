"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 249:
/*!*******************************************************************************************!*\
  !*** ./node_modules/jw-angular-pagination/__ivy_ngcc__/fesm2015/jw-angular-pagination.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwPaginationComponent": () => (/* binding */ JwPaginationComponent),
/* harmony export */   "JwPaginationModule": () => (/* binding */ JwPaginationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 53612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jw-paginate */ 67294);
/* harmony import */ var jw_paginate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jw_paginate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);








const _c0 = function (a0) { return { active: a0 }; };
function JwPaginationComponent_ul_0_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_li_7_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const page_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.setPage(page_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r2);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function JwPaginationComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setPage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setPage(ctx_r7.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, JwPaginationComponent_ul_0_li_7_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setPage(ctx_r8.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JwPaginationComponent_ul_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.setPage(ctx_r9.pager.totalPages); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
} }
let JwPaginationComponent = class JwPaginationComponent {
    constructor() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    setPage(page) {
        // get new pager object for specified page
        this.pager = jw_paginate__WEBPACK_IMPORTED_MODULE_0___default()(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    }
};
JwPaginationComponent.ɵfac = function JwPaginationComponent_Factory(t) { return new (t || JwPaginationComponent)(); };
JwPaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JwPaginationComponent, selectors: [["jw-pagination"]], inputs: { initialPage: "initialPage", pageSize: "pageSize", maxPages: "maxPages", items: "items" }, outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "page-item", "first-item", 3, "ngClass"], [1, "page-link", 3, "click"], [1, "page-item", "previous-item", 3, "ngClass"], ["class", "page-item number-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", "next-item", 3, "ngClass"], [1, "page-item", "last-item", 3, "ngClass"], [1, "page-item", "number-item", 3, "ngClass"]], template: function JwPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, JwPaginationComponent_ul_0_Template, 14, 13, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], JwPaginationComponent.prototype, "items", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output)()
], JwPaginationComponent.prototype, "changePage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], JwPaginationComponent.prototype, "initialPage", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], JwPaginationComponent.prototype, "pageSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)()
], JwPaginationComponent.prototype, "maxPages", void 0);

let JwPaginationModule = class JwPaginationModule {
};
JwPaginationModule.ɵfac = function JwPaginationModule_Factory(t) { return new (t || JwPaginationModule)(); };
JwPaginationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JwPaginationModule });
JwPaginationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'jw-pagination',
                template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
        <a (click)="setPage(1)" class="page-link">First</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
        <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
        <a (click)="setPage(page)" class="page-link">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
        <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
        <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
    </li>
</ul>`
            }]
    }], function () { return []; }, { changePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], initialPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], maxPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwPaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
                declarations: [JwPaginationComponent],
                exports: [JwPaginationComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JwPaginationModule, { declarations: function () { return [JwPaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [JwPaginationComponent]; } }); })();

/*
 * Public API Surface of jw-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 67294:
/*!*****************************************************!*\
  !*** ./node_modules/jw-paginate/lib/jw-paginate.js ***!
  \*****************************************************/
/***/ ((module) => {


function paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}
module.exports = paginate;


/***/ }),

/***/ 64205:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageRoutingModule": () => (/* binding */ PagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page */ 80624);
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos/productos.component */ 46224);





const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_0__.PagesPage,
        /*    canActivate: [noLoginGuard], */
        children: [
            { path: 'productos', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_1__.ProductosComponent /* , canActivate: [PermissionsGuard]  */ },
            { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ 22302:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageModule": () => (/* binding */ PagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 64205);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-qrcode */ 68586);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page */ 80624);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 57693);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 46092);
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jw-angular-pagination */ 249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 46506);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 21036);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 80686);
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productos/productos.component */ 46224);





/* import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'; */















const modulesMat = [
    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule
];
let PagesPageModule = class PagesPageModule {
};
PagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [
            _pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage,
            _productos_productos_component__WEBPACK_IMPORTED_MODULE_4__.ProductosComponent
        ],
        imports: [
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_14__.JwPaginationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesPageRoutingModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__.QRCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            /*     NgxQRCodeModule, */
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
            ...modulesMat
        ]
    })
], PagesPageModule);



/***/ }),

/***/ 80624:
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPage": () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Luiggi_Vargas_Desktop_Basti_Front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pages.page.html */ 74620);
/* harmony import */ var _pages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page.scss */ 28308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compartido/funciones */ 30069);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 36636);
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-service.service */ 53934);







let PagesPage = class PagesPage {
    constructor(_dataService, _fun, _auth) {
        this._dataService = _dataService;
        this._fun = _fun;
        this._auth = _auth;
        this.appPages = [];
        this.menuClose = false;
        this.admin = [
            /* {
              "name": "Usuarios",
              url: '/users',
              icon: 'people',
              "modules": []
            }, */
            {
                "name": "Productos",
                icon: 'layers-outline',
                url: '/productos',
                "modules": []
            } /* ,
            {
              "name": "Pedidos",
              icon: 'cart-outline',
              url: '/pedidos',
              "modules": []
            } */
        ];
        this.ventas = [
            {
                "name": "Pedidos",
                icon: 'cart-outline',
                url: '/pedidos',
                "modules": []
            }
        ];
    }
    ngOnInit() {
        this.menuClose = !this.menuClose;
        /*     this.getUser();
            this._dataService.eventBtnMn().subscribe(data => {
              if (this._fun.isVarInvalid(data)) return;
              console.log('data', data);
              this.menuClose = !this.menuClose;
            }); */
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this._auth.getUser().subscribe(res_user => {
                if (res_user.role == 'admin')
                    this.appPages = this.admin;
                if (res_user.role == 'ventas')
                    this.appPages = this.ventas;
            });
        });
    }
};
PagesPage.ctorParameters = () => [
    { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_2__.Funciones },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
PagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pages',
        template: _C_Users_Luiggi_Vargas_Desktop_Basti_Front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pages_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pages_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagesPage);



/***/ }),

/***/ 46224:
/*!********************************************************!*\
  !*** ./src/app/pages/productos/productos.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosComponent": () => (/* binding */ ProductosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_Luiggi_Vargas_Desktop_Basti_Front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_productos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./productos.component.html */ 39225);
/* harmony import */ var _productos_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productos.component.scss */ 93927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/compartido/funciones */ 30069);
/* harmony import */ var src_app_components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/add-product/add-product.component */ 78640);
/* harmony import */ var src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-service.service */ 53934);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ 60602);











let ProductosComponent = class ProductosComponent {
    constructor(_mod, _data, router, _fun, _product) {
        this._mod = _mod;
        this._data = _data;
        this.router = router;
        this._fun = _fun;
        this._product = _product;
        this.list_main = [];
        this.list = [];
        this.load = false;
        this.filterData = { textFilter: '' };
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const res_list = yield this._product.getAll();
                console.log('res_list', res_list);
                /*    if (this._fun.isVarInvalid(res_list.valid)) {
                     this.load = false;
                     return;
                   } */
                this.list_main = res_list /* .res */;
                this.list = this.list_main;
                console.log('res_list00001', res_list);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    producto(data) {
        this._data.dataProd.next(data);
        this.router.navigate(['/producto/' + data._id]);
    }
    form(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._mod.create({
                component: src_app_components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__.AddProductComponent,
                backdropDismiss: false,
                componentProps: {
                    data
                }
            });
            modal.onDidDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res.data);
                if (this._fun.isVarInvalid(res.data))
                    return;
                if (!this._fun.isVarInvalid(res.data.confirm))
                    this.getList();
            }));
            return yield modal.present();
        });
    }
    updateStatus(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //  let dataSave = this.productForm.value;
                data.status = 3;
                const res = yield this._product.save(data, data._id);
                console.log('res', res);
                if (this._fun.isVarInvalid(res.valid)) {
                    return;
                }
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.MSG.SUC_UPDATE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    delete(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this._fun.alertDelete();
            if (this._fun.isVarInvalid(alert))
                return;
            try {
                const res = yield this._product.delete(data._id);
                console.log('res', res);
                this.getList();
                yield this._fun.alertSucc(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.MSG.SUC_DELETE);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
};
ProductosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_data_service_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_3__.Funciones },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__.ProductService }
];
ProductosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-productos',
        template: _C_Users_Luiggi_Vargas_Desktop_Basti_Front_node_modules_ngtools_webpack_src_loaders_direct_resource_js_productos_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_productos_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductosComponent);



/***/ }),

/***/ 53612:
/*!****************************************************************************!*\
  !*** ./node_modules/jw-angular-pagination/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 74620:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/pages.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"main-wrapper\">\n  <!--     <app-header></app-header> -->\n  <app-sidebar #sidebar [appPages]=\"appPages\"></app-sidebar>\n  <div class=\"page-wrapper\" [ngClass]=\"menuClose?'menuClose':'menuOpen'\">\n    <ion-router-outlet style=\"position: fixed;\" [ngClass]=\"menuClose?'menuClose':'menuOpen'\"></ion-router-outlet>\n  </div>\n</div>");

/***/ }),

/***/ 39225:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/productos/productos.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"'Productos'\" style=\"z-index: 20;background: white;\"></app-header>\n\n<ion-content class=\"content-table\">\n\n\n  <!-- Button Fav Add Order -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n    style=\"background: white;border-radius: 100%;position: fixed;margin: 20px;\" (click)=\"form()\">\n    <ion-fab-button style=\" --background: linear-gradient(90deg, #d45858 10%, #bf6644 100%);\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <ion-card class=\"card-table\" style=\"margin-top: 5px;\">\n    <!-- Filtro -->\n    <!--     <div class=\"row\" style=\"margin-top: 6px;\">\n      <div class=\"col-3 pr-2\">\n        <input #se class=\"form-control\" [(ngModel)]=\"filterData.textFilter\" (input)=\"tigger.next(se.value)\"\n          placeholder=\"Nombre, dirección o celular\">\n      </div>\n    </div> -->\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-lg-3\" style=\"display: inline-block;;box-shadow: 0 0px 8px rgba(0, 0, 0, 0.063);\n  border-radius: 12px;position: relative;\" *ngFor=\"let item of list_main\"\n    >\n\n\n    <div style=\"display: inline-block;width: 40%;cursor: pointer;\" >\n      <img [src]=\"item.image.secure_url\" alt=\"\" style=\"object-fit: cover;border-radius: 12px;height: 120px;width: 100%;\">\n    </div>\n\n    <div style=\"display: inline-block;width: 60%;    padding-left: 10px;cursor: pointer;\" (click)=\"producto(item)\">\n      <p style=\"margin: 0;font-size: 15px;\n      font-weight: 600;\">{{item.nombre}}</p>\n      <p style=\"margin: 0;font-size: 12px;\"><b>{{item.tienda}}</b> </p>\n      <p style=\"margin: 0;font-size: 12px;\">S/.{{item.pen}}</p>\n    </div>\n\n    <div style=\"    position: absolute;\n    right: 0;\n    bottom: 0;\n    font-size: 18px;\n    color: #c2c2c2;\">\n      <ion-icon name=\"create-outline\" (click)=\"form(item)\" style=\"    padding: 4px;\n       margin: 0;\n       display: inline-block;cursor: pointer;\"></ion-icon>\n\n      <ion-icon name=\"trash-outline\" (click)=\"delete(item)\" style=\"padding: 4px;\n       display: inline-block;\n       margin: 0;\n       margin-right: 5px;cursor: pointer;\"></ion-icon>\n      <!--    <div>\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </div>\n\n      <div>\n       \n      </div> -->\n\n\n    </div>\n\n\n  </div>\n\n</div>\n  \n\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ 28308:
/*!***************************************!*\
  !*** ./src/app/pages/pages.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "/* .home-section {\n    position: relative;\n    background: #e4e9f7;\n    height: 100vh;\n    left: 260px;\n    width: calc(100% - 260px);\n    transition: all 0.5s ease;\n}\n\n.sidebar.close ~ .home-section {\n    left: 78px;\n    width: calc(100% - 78px);\n}\n */\n.section {\n  position: relative;\n  /*   background: #e4e9f7; */\n  background: linear-gradient(to right, #ba3d47, #bd404a, #c0434c, #c2464f, #c54952, #c64a53, #c84c55, #c94d56, #c94d56, #c94d56, #c94d56, #c94d56);\n  /*   height: 100vh; */\n  left: 235px;\n  transition: all 0.5s ease;\n}\n.menuClose {\n  position: relative;\n  left: 58px;\n  width: calc(100% - 58px);\n  transition: all 0.5s ease;\n}\n.menuOpen {\n  position: relative;\n  left: 235px;\n  width: calc(100% - 235px);\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQUFBO0FBZUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUpBQUE7RUFNQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtBQU5GO0FBU0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFORiIsImZpbGUiOiJwYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuaG9tZS1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNlNGU5Zjc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbGVmdDogMjYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnNpZGViYXIuY2xvc2UgfiAuaG9tZS1zZWN0aW9uIHtcclxuICAgIGxlZnQ6IDc4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzhweCk7XHJcbn1cclxuICovXHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qICAgYmFja2dyb3VuZDogI2U0ZTlmNzsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICNiYTNkNDcsI2JkNDA0YSwjYzA0MzRjLCNjMjQ2NGYsXHJcbiAgICAjYzU0OTUyLCNjNjRhNTMsI2M4NGM1NSwjYzk0ZDU2LFxyXG4gICAgI2M5NGQ1NiwjYzk0ZDU2LCNjOTRkNTYsI2M5NGQ1NlxyXG4gICk7XHJcbiAgLyogICBoZWlnaHQ6IDEwMHZoOyAqL1xyXG4gIGxlZnQ6IDIzNXB4O1xyXG4gIFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51Q2xvc2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1OHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1OHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4ubWVudU9wZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyMzVweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjM1cHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 93927:
/*!**********************************************************!*\
  !*** ./src/app/pages/productos/productos.component.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map