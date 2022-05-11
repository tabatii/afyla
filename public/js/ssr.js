/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glider-js */ "glider-js");
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glider_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  mounted: function mounted() {
    new (glider_js__WEBPACK_IMPORTED_MODULE_2___default())(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 1,
      rewind: true,
      duration: 0,
      arrows: {
        prev: '.prev',
        next: '.next'
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserMenu */ "./resources/js/components/UserMenu.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! countries-list */ "countries-list");
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(countries_list__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    addresses: Array
  },
  components: {
    UserMenu: _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  computed: {
    countries: function countries() {
      return countries_list__WEBPACK_IMPORTED_MODULE_2__.countries;
    }
  },
  methods: {
    addOrEdit: function addOrEdit() {
      if (this.selected === false) {
        return this.add();
      }

      return this.edit();
    },
    reset: function reset() {
      this.formshow = false;
      this.selected = false;
      this.form.reset();
    },
    fill: function fill(i) {
      this.selected = i;
      this.form.firstname = this.addresses[i].name.split(' ')[0];
      this.form.lastname = this.addresses[i].name.split(' ')[1];
      this.form.phone = this.addresses[i].phone;
      this.form.street = this.addresses[i].street;
      this.form.city = this.addresses[i].city;
      this.form.state = this.addresses[i].state;
      this.form.zip = this.addresses[i].zip;
      this.form.country = this.addresses[i].country;
      this.form["default"] = this.addresses[i]["default"];
      this.formshow = true;
    },
    add: function add() {
      var _this = this;

      this.form.post(this.route('address.add'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.reset();
        }
      });
    },
    edit: function edit() {
      var _this2 = this;

      this.form.put(this.route('address.edit', this.addresses[this.selected].id), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this2.reset();
        }
      });
    },
    remove: function remove(id) {
      this.$inertia["delete"](this.route('address.delete', id), {
        preserveScroll: true
      });
    }
  },
  data: function data() {
    return {
      formshow: false,
      selected: false,
      form: this.$inertia.form({
        firstname: null,
        lastname: null,
        phone: null,
        street: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        "default": false
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  computed: {
    bag: function bag() {
      return this.$page.props.bag;
    }
  },
  methods: {
    deleteFromBag: function deleteFromBag(id) {
      var _this = this;

      this.loading = true;
      this.$inertia["delete"](this.route('bag.delete', id), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.loading = false;
        }
      });
    },
    plus: function plus(id) {
      var _this2 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.patch(this.route('bag.plus', id), {}, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this2.loading = false;
          }
        });
      }
    },
    minus: function minus(id) {
      var _this3 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.patch(this.route('bag.minus', id), {}, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this3.loading = false;
          }
        });
      }
    },
    size: function size(id, event) {
      var _this4 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.patch(this.route('bag.size', id), {
          size: event.target.value
        }, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this4.loading = false;
          }
        });
      }
    }
  },
  data: function data() {
    return {
      loading: false,
      shipping: 0,
      vat: 20
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    collection: Object
  },
  computed: {
    video: function video() {
      return query_string__WEBPACK_IMPORTED_MODULE_2___default().parseUrl(this.collection.video).query.v;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  computed: {
    settings: function settings() {
      return this.$page.props.settings;
    }
  },
  methods: {
    send: function send() {
      var _this = this;

      this.form.post(this.route('contact'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this.form.reset();
        }
      });
    }
  },
  data: function data() {
    return {
      topics: ['ORDERS, SHIPPING, RETURNS', 'PRODUCT INFORMATION', 'AFTER SALES ASSISTANT', 'OTHER', 'PRESS', 'CARRERS', 'SUPPLIERS', 'COLLABORATION', 'WHOLESALE'],
      form: this.$inertia.form({
        name: null,
        email: null,
        topic: 'ORDERS, SHIPPING, RETURNS',
        message: null
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _components_FindSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FindSize */ "./resources/js/components/FindSize.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    FindSize: _components_FindSize__WEBPACK_IMPORTED_MODULE_1__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _components_FindSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FindSize */ "./resources/js/components/FindSize.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! accordion-js */ "accordion-js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    FindSize: _components_FindSize__WEBPACK_IMPORTED_MODULE_1__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_2__.Link
  },
  computed: {
    settings: function settings() {
      return this.$page.props.settings;
    }
  },
  mounted: function mounted() {
    new (accordion_js__WEBPACK_IMPORTED_MODULE_3___default())(Array.from(document.querySelectorAll('.accordion')), {
      duration: 200
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  props: {
    looks: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserMenu */ "./resources/js/components/UserMenu.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    orders: Array
  },
  components: {
    UserMenu: _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  computed: {
    auth: function auth() {
      return this.$page.props.auth;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    page: Object
  },
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  methods: {
    print: function print() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserMenu */ "./resources/js/components/UserMenu.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    errors: Object
  },
  components: {
    UserMenu: _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  methods: {
    change: function change() {
      var _this = this;

      this.form.patch(this.route('password'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.form.reset();
        }
      });
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        current_password: null,
        new_password: null,
        new_password_confirmation: null
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    errors: Object
  },
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  methods: {
    reset: function reset() {
      this.form.post(this.route('password.update'), {
        preserveScroll: true
      });
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        token: null,
        email: null,
        password: null,
        password_confirmation: null
      })
    };
  },
  created: function created() {
    this.form.token = this.route().params.token;
    this.form.email = this.route().params.email;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _components_SocialShare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SocialShare */ "./resources/js/components/SocialShare.vue");
/* harmony import */ var _components_QtyField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QtyField */ "./resources/js/components/QtyField.vue");
/* harmony import */ var _components_FindSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FindSize */ "./resources/js/components/FindSize.vue");
/* harmony import */ var _components_PopUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopUp */ "./resources/js/components/PopUp.vue");
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! glider-js */ "glider-js");
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(glider_js__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    product: Object
  },
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
    SocialShare: _components_SocialShare__WEBPACK_IMPORTED_MODULE_2__["default"],
    QtyField: _components_QtyField__WEBPACK_IMPORTED_MODULE_3__["default"],
    FindSize: _components_FindSize__WEBPACK_IMPORTED_MODULE_4__["default"],
    PopUp: _components_PopUp__WEBPACK_IMPORTED_MODULE_5__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    auth: function auth() {
      return this.$page.props.auth;
    },
    settings: function settings() {
      return this.$page.props.settings;
    },
    wishlist: function wishlist() {
      return this.$page.props.wishlist;
    },
    getSizeQty: function getSizeQty() {
      var _this = this;

      var size = this.product.sizes.find(function (s) {
        return s.size.id === _this.size;
      });
      return size ? size.qty : null;
    }
  },
  watch: {
    size: function size() {
      this.qty = 1;
    }
  },
  methods: {
    addToBag: function addToBag() {
      var _this2 = this;

      if (this.getSizeQty) {
        this.loading = true;
        return this.$inertia.post(this.route('bag.add'), {
          product: this.product.id,
          size: this.size,
          qty: this.qty
        }, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this2.loading = false;
            _this2.done = true;
          }
        });
      }

      this.soldout = true;
    },
    addToWishlist: function addToWishlist(id) {
      var _this3 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.post(this.route('wishlist.toggle', id), {}, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this3.loading = false;
          }
        });
      }
    },
    searchWishlist: function searchWishlist(id) {
      return this.wishlist.find(function (item) {
        return item.product.id === id;
      });
    }
  },
  data: function data() {
    return {
      social: false,
      loading: false,
      soldout: false,
      done: false,
      size: null,
      qty: 1
    };
  },
  mounted: function mounted() {
    new (glider_js__WEBPACK_IMPORTED_MODULE_6___default())(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 1,
      skipTrack: true,
      arrows: {
        prev: '.prev',
        next: '.next'
      },
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UserMenu */ "./resources/js/components/UserMenu.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! countries-list */ "countries-list");
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(countries_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    errors: Object
  },
  components: {
    UserMenu: _components_UserMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head
  },
  computed: {
    auth: function auth() {
      return this.$page.props.auth;
    },
    birthday: function birthday() {
      return this.auth.birthday ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.auth.birthday).format('DD-MM-YYYY') : null;
    },
    countries: function countries() {
      return countries_list__WEBPACK_IMPORTED_MODULE_2__.countries;
    },
    years: function years() {
      var array = [];

      for (var n = 2015; n >= 1930; n--) {
        array.push(n);
      }

      return array;
    }
  },
  methods: {
    setBirthday: function setBirthday() {
      this.form.birthday = moment__WEBPACK_IMPORTED_MODULE_3___default()().set({
        date: this.date.day,
        month: this.date.month,
        year: this.date.year
      }).toISOString();
    },
    edit: function edit() {
      var _this = this;

      this.form.put(this.route('profile'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.showform = false;
        }
      });
    }
  },
  data: function data() {
    return {
      showform: false,
      date: {
        day: null,
        month: null,
        year: null
      },
      form: this.$inertia.form({
        firstname: null,
        lastname: null,
        country: null,
        birthday: null,
        phone: null,
        subscribe: null
      })
    };
  },
  created: function created() {
    this.form.firstname = this.auth.name.split(' ')[0];
    this.form.lastname = this.auth.name.split(' ')[1];
    this.form.country = this.auth.country;
    this.form.phone = this.auth.phone;
    this.form.subscribe = this.auth.sub;
    this.date.day = this.auth.birthday ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.auth.birthday).get('date') : null;
    this.date.month = this.auth.birthday ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.auth.birthday).get('month') : null;
    this.date.year = this.auth.birthday ? moment__WEBPACK_IMPORTED_MODULE_3___default()(this.auth.birthday).get('year') : null;
    this.setBirthday();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    products: Object,
    subs: Array,
    colors: Array,
    materials: Array,
    sizes: Array
  },
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  computed: {
    collections: function collections() {
      return this.$page.props.collections;
    },
    categories: function categories() {
      return this.$page.props.categories;
    },
    wishlist: function wishlist() {
      return this.$page.props.wishlist;
    }
  },
  methods: {
    searchWishlist: function searchWishlist(id) {
      return this.wishlist.find(function (item) {
        return item.product.id === id;
      });
    },
    addToWishlist: function addToWishlist(id) {
      var _this = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.post(this.route('wishlist.toggle', id), {}, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this.loading = false;
          }
        });
      }
    },
    result: function result() {
      this.$inertia.get(this.route('shop', this.params));
    },
    filter: function filter() {
      this.params.page = null;
      this.result();
    },
    paginate: function paginate(page) {
      this.params.page = page > 0 && page <= this.products.last_page ? page : this.params.page;
      this.result();
    },
    sortBy: function sortBy(key) {
      this.params.page = null;
      this.params.sort = key;
      this.result();
    },
    remove: function remove(target) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (index === null) {
        this.params[target] = null;
      } else {
        this.params[target].splice(index, 1);
      }

      this.result();
    },
    reset: function reset(targets) {
      var _this2 = this;

      targets.forEach(function (target) {
        _this2.params[target] = [];
      });
      this.result();
    },
    getNameById: function getNameById(target, id) {
      return this[target.split('.')[0]].find(function (item) {
        return item.id == id;
      })[target.split('.')[1]];
    }
  },
  data: function data() {
    return {
      loading: false,
      selected: {},
      params: {
        ids: [],
        collections: [],
        categories: [],
        subs: [],
        colors: [],
        materials: [],
        sizes: [],
        sort: null,
        page: null,
        search: null,
        discounts: null
      },
      sort: {
        n: 'Newest',
        lp: 'Lowest to highest price',
        hp: 'Highest to lowest price',
        az: 'Name A-Z',
        za: 'Name Z-A'
      }
    };
  },
  created: function created() {
    this.params.ids = this.route().params.ids || [];
    this.params.collections = this.route().params.collections || [];
    this.params.categories = this.route().params.categories || [];
    this.params.subs = this.route().params.subs || [];
    this.params.colors = this.route().params.colors || [];
    this.params.materials = this.route().params.materials || [];
    this.params.sizes = this.route().params.sizes || [];
    this.params.sort = this.route().params.sort || null;
    this.params.page = this.route().params.page || null;
    this.params.search = this.route().params.search || null;
    this.params.discounts = this.route().params.discounts || null;
    Object.assign(this.selected, this.params);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glider-js */ "glider-js");
/* harmony import */ var glider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glider_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  mounted: function mounted() {
    new (glider_js__WEBPACK_IMPORTED_MODULE_2___default())(document.querySelector('.glider'), {
      slidesToScroll: 1,
      slidesToShow: 1,
      rewind: true,
      duration: 0,
      arrows: {
        prev: '.prev',
        next: '.next'
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _components_SocialShare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SocialShare */ "./resources/js/components/SocialShare.vue");
/* harmony import */ var _components_FindSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FindSize */ "./resources/js/components/FindSize.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopUp */ "./resources/js/components/PopUp.vue");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    SocialShare: _components_SocialShare__WEBPACK_IMPORTED_MODULE_1__["default"],
    FindSize: _components_FindSize__WEBPACK_IMPORTED_MODULE_2__["default"],
    PopUp: _components_PopUp__WEBPACK_IMPORTED_MODULE_4__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__.Link
  },
  computed: {
    wishlist: function wishlist() {
      return this.$page.props.wishlist;
    },
    getSizeQty: function getSizeQty() {
      var _this = this;

      var item = this.wishlist.find(function (w) {
        return w.product.id === _this.bag.product;
      });
      var size = item ? item.product.sizes.find(function (s) {
        return s.size_id === _this.bag.size;
      }) : null;
      return size ? size.qty : null;
    },
    shareAllLink: function shareAllLink() {
      var _this2 = this;

      var body = "Dear,\n\n" + "I'd like to share my AFYLA wishlist with you. I thought you might be interested in the following products.\n\n\n";
      this.wishlist.forEach(function (item) {
        body += "".concat(item.product.title, "\n");
        body += "Color: ";
        item.product.colors.forEach(function (c, i) {
          var comma = i + 1 !== item.product.colors.length ? ', ' : '\n';
          body += c.color.name + comma;
        });
        body += "Material: ";
        item.product.materials.forEach(function (m, i) {
          var comma = i + 1 !== item.product.materials.length ? ', ' : '\n';
          body += m.material.name + comma;
        });
        body += "Link: ".concat(_this2.route('product', item.product.id), "\n\n\n");
      });
      return 'mailto:?' + query_string__WEBPACK_IMPORTED_MODULE_5___default().stringify({
        subject: 'Discover my AFYLA wishlist',
        body: body
      });
    }
  },
  watch: {
    card: function card(newValue) {
      if (newValue === null) {
        this.bag.size = null;
        this.bag.product = null;
      }
    },
    'params.sort': function paramsSort(newValue) {
      this.sorted.sort(function (a, b) {
        if (newValue === 'n') {
          return a.id - b.id;
        } else if (newValue === 'az') {
          return a.product.title > b.product.title ? 1 : a.product.title < b.product.title ? -1 : 0;
        } else if (newValue === 'za') {
          return a.product.title < b.product.title ? 1 : a.product.title > b.product.title ? -1 : 0;
        } else if (newValue === 'hp') {
          return b.product.price - a.product.price;
        } else if (newValue === 'lp') {
          return a.product.price - b.product.price;
        }
      });
    }
  },
  methods: {
    open: function open(i) {
      this.card = i;
      this.bag.size = null;
      this.bag.product = this.sorted[i].product.id;
    },
    deleteFromWishlist: function deleteFromWishlist(id) {
      var _this3 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.post(this.route('wishlist.toggle', id), {}, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this3.del = null;
            _this3.loading = false;
            _this3.sorted = _toConsumableArray(_this3.wishlist);
          }
        });
      }
    },
    addToBag: function addToBag(id) {
      var _this4 = this;

      if (this.getSizeQty) {
        this.loading = true;
        return this.$inertia.post(this.route('bag.add'), this.bag, {
          preserveScroll: true,
          onSuccess: function onSuccess() {
            _this4.loading = false;
            _this4.card = null;
            _this4.done = true;
          }
        });
      }

      this.soldout = true;
    },
    shareAll: function shareAll() {
      this.form.ids = this.wishlist.map(function (item) {
        return item.product.id;
      });
      this.form.post(this.route('share.all'));
    }
  },
  data: function data() {
    return {
      sorted: [],
      del: null,
      done: false,
      soldout: false,
      loading: false,
      social: null,
      share: false,
      card: null,
      bag: {
        product: null,
        size: null,
        qty: 1
      },
      params: {
        sort: 'n'
      },
      sort: {
        n: 'Date',
        az: 'Name A-Z',
        za: 'Name Z-A',
        hp: 'Highest to lowest price',
        lp: 'Lowest to highest price'
      },
      form: this.$inertia.form({
        ids: null,
        from: null,
        to: null
      })
    };
  },
  created: function created() {
    this.sorted = _toConsumableArray(this.wishlist);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    settings: function settings() {
      return this.$page.props.settings;
    }
  },
  methods: {
    subscribe: function subscribe() {
      var _this = this;

      this.subscription.post(this.route('subscription.add'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          _this.subscription.reset();
        }
      });
    }
  },
  data: function data() {
    return {
      subscription: this.$inertia.form({
        email: null
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_WishlistMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/WishlistMenu */ "./resources/js/components/WishlistMenu.vue");
/* harmony import */ var _components_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RegisterForm */ "./resources/js/components/RegisterForm.vue");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginForm */ "./resources/js/components/LoginForm.vue");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchForm */ "./resources/js/components/SearchForm.vue");
/* harmony import */ var _components_BagMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BagMenu */ "./resources/js/components/BagMenu.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    WishlistMenu: _components_WishlistMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    RegisterForm: _components_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoginForm: _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    SearchForm: _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    BagMenu: _components_BagMenu__WEBPACK_IMPORTED_MODULE_4__["default"],
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_5__.Link
  },
  computed: {
    auth: function auth() {
      return this.$page.props.auth;
    },
    admin: function admin() {
      return this.$page.props.admin;
    },
    settings: function settings() {
      return this.$page.props.settings;
    },
    categories: function categories() {
      return this.$page.props.categories;
    },
    collections: function collections() {
      return this.$page.props.collections;
    },
    wishlist: function wishlist() {
      return this.$page.props.wishlist;
    },
    bag: function bag() {
      return this.$page.props.bag;
    }
  },
  data: function data() {
    return {
      scroll: null,
      search: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.scroll = pageYOffset;
    addEventListener('scroll', function () {
      _this.scroll = pageYOffset;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader */ "./resources/js/components/AppHeader.vue");
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppFooter */ "./resources/js/components/AppFooter.vue");
/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopUp */ "./resources/js/components/PopUp.vue");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppHeader: _AppHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _AppFooter__WEBPACK_IMPORTED_MODULE_2__["default"],
    PopUp: _PopUp__WEBPACK_IMPORTED_MODULE_3__["default"],
    h: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Head,
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    settings: function settings() {
      return this.$page.props.settings;
    },
    flash: function flash() {
      return this.$page.props.flash;
    }
  },
  methods: {
    closeNewsletter: function closeNewsletter() {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('newsletter-popup', 'hide', {
        expires: 30
      });
      this.newsletter = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('newsletter-popup');
    },
    closeCookies: function closeCookies() {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('cookies-popup', 'hide', {
        expires: 30
      });
      this.cookies = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('cookies-popup');
    },
    subscribe: function subscribe() {
      var _this = this;

      this.form.post(this.route('subscription.add'), {
        onSuccess: function onSuccess() {
          _this.form.reset();

          _this.closeNewsletter();
        }
      });
    }
  },
  data: function data() {
    return {
      newsletter: null,
      cookies: null,
      popup: true,
      form: this.$inertia.form({
        email: null
      })
    };
  },
  mounted: function mounted() {
    this.newsletter = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('newsletter-popup');
    this.cookies = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('cookies-popup');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    bag: function bag() {
      return this.$page.props.bag;
    }
  },
  methods: {
    deleteFromBag: function deleteFromBag(id) {
      var _this = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia["delete"](this.route('bag.delete', id), {
          onSuccess: function onSuccess() {
            _this.loading = false;
          }
        });
      }
    },
    plus: function plus(id) {
      var _this2 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.patch(this.route('bag.plus', id), {}, {
          onSuccess: function onSuccess() {
            _this2.loading = false;
          }
        });
      }
    },
    minus: function minus(id) {
      var _this3 = this;

      if (this.loading === false) {
        this.loading = true;
        this.$inertia.patch(this.route('bag.minus', id), {}, {
          onSuccess: function onSuccess() {
            _this3.loading = false;
          }
        });
      }
    }
  },
  data: function data() {
    return {
      loading: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {//
  },
  data: function data() {
    return {
      active: 'cm',
      index: 0,
      tables: {
        cm: [{
          name: 'COATS',
          url: '/img/size/COAT-CM.png'
        }, {
          name: 'JACKETS',
          url: '/img/size/JACKET-CM.png'
        }, {
          name: 'SHIRTS',
          url: '/img/size/SHIRTS-CM.png'
        }, {
          name: 'TOPS',
          url: '/img/size/TOPS-CM.png'
        }, {
          name: 'PANTS & SHORTS',
          url: '/img/size/PANT_SKIRTS-CM.png'
        }, {
          name: 'SKIRTS',
          url: '/img/size/PANT_SKIRTS-CM.png'
        }, {
          name: 'DRESSES',
          url: '/img/size/DRESS-CM.png'
        }],
        "in": [{
          name: 'COATS',
          url: '/img/size/COAT-INCHES.png'
        }, {
          name: 'JACKETS',
          url: '/img/size/JACKETS-INCHES.png'
        }, {
          name: 'SHIRTS',
          url: '/img/size/SHIRTS-INCHES.png'
        }, {
          name: 'TOPS',
          url: '/img/size/TOPS-INCHES.png'
        }, {
          name: 'PANTS & SHORTS',
          url: '/img/size/PANT_SKIRTS-INCHES.png'
        }, {
          name: 'SKIRTS',
          url: '/img/size/PANT_SKIRTS-INCHES.png'
        }, {
          name: 'DRESSES',
          url: '/img/size/DRESS-INCHES.png'
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopUp */ "./resources/js/components/PopUp.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PopUp: _components_PopUp__WEBPACK_IMPORTED_MODULE_1__["default"],
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  methods: {
    send: function send() {
      var _this = this;

      this.forgot.post(this.route('password.send'), {
        onSuccess: function onSuccess() {
          _this.tab = false;
          _this.sent = true;

          _this.forgot.reset();
        }
      });
    }
  },
  data: function data() {
    return {
      tab: false,
      sent: false,
      login: this.$inertia.form({
        email: null,
        password: null,
        remember: false
      }),
      forgot: this.$inertia.form({
        email: null
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: [Boolean, Number]
  },
  methods: {
    close: function close() {
      this.$emit('input', null);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: Number,
    max: {
      "default": 1000000,
      type: Number
    }
  },
  watch: {
    value: function value() {
      this.number = this.value;
    },
    number: function number() {
      this.$emit('input', this.number);
    }
  },
  methods: {
    plus: function plus() {
      if (this.number < this.max) {
        this.number++;
      }
    },
    minus: function minus() {
      if (this.number > 1) {
        this.number--;
      }
    }
  },
  data: function data() {
    return {
      number: null
    };
  },
  created: function created() {
    this.number = this.value;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! countries-list */ "countries-list");
/* harmony import */ var countries_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(countries_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    countries: function countries() {
      return countries_list__WEBPACK_IMPORTED_MODULE_1__.countries;
    },
    years: function years() {
      var array = [];

      for (var n = 2015; n >= 1930; n--) {
        array.push(n);
      }

      return array;
    }
  },
  methods: {
    setBirthday: function setBirthday() {
      this.register.birthday = moment__WEBPACK_IMPORTED_MODULE_2___default()().set({
        date: this.date.day,
        month: this.date.month,
        year: this.date.year
      }).toISOString();
    }
  },
  data: function data() {
    return {
      date: {
        day: null,
        month: null,
        year: null
      },
      register: this.$inertia.form({
        firstname: null,
        lastname: null,
        email: null,
        country: null,
        birthday: null,
        password: null,
        password_confirmation: null,
        subscribe: false,
        agree: false
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    categories: function categories() {
      return this.$page.props.categories;
    },
    settings: function settings() {
      return this.$page.props.settings;
    },
    noresult: function noresult() {
      return this.search.length !== 0 && this.products.length === 0 && this.colors.length === 0 && this.cats.length === 0 && this.subs.length === 0;
    }
  },
  watch: {
    search: function search(newValue) {
      var _this = this;

      var search = newValue;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(this.route('search', {
        search: search
      })).then(function (response) {
        _this.products = response.data.products;
        _this.colors = response.data.colors;
        _this.cats = response.data.categories;
        _this.subs = response.data.subs;
      });
    }
  },
  data: function data() {
    return {
      search: '',
      products: [],
      colors: [],
      cats: [],
      subs: []
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: Number,
    title: String
  },
  computed: {
    facebook: function facebook() {
      var site = 'https://www.facebook.com/sharer.php?';
      var query = query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        u: this.route('product', this.id)
      });
      return site + query;
    },
    twitter: function twitter() {
      var site = 'https://www.twitter.com/intent/tweet?';
      var query = query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        url: this.route('product', this.id),
        text: this.title
      });
      return site + query;
    },
    linkedin: function linkedin() {
      var site = 'https://www.linkedin.com/sharing/share-offsite?';
      var query = query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        mini: true,
        url: this.route('product', this.id),
        text: this.title
      });
      return site + query;
    },
    pinterest: function pinterest() {
      var site = 'https://www.pinterest.com/pin/create/button?';
      var query = query_string__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        url: this.route('product', this.id),
        description: this.title
      });
      return site + query;
    }
  },
  methods: {
    email: function email() {
      this.form.id = this.id;
      this.form.post(this.route('share.one'));
    }
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        id: null,
        from: null,
        to: null
      })
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./resources/js/components/AppLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AppLayout: _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_1__.Link
  },
  computed: {
    auth: function auth() {
      return this.$page.props.auth;
    },
    admin: function admin() {
      return this.$page.props.admin;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopUp */ "./resources/js/components/PopUp.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PopUp: _components_PopUp__WEBPACK_IMPORTED_MODULE_1__["default"],
    l: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  computed: {
    wishlist: function wishlist() {
      return this.$page.props.wishlist;
    }
  },
  watch: {
    sizes: function sizes(newValue) {
      var _this = this;

      newValue.forEach(function (sizeId, i) {
        var size = _this.wishlist[i].product.sizes.find(function (s) {
          return s.size_id === sizeId;
        });

        _this.stock[i] = size.qty;
      });
    }
  },
  methods: {
    addToBag: function addToBag(index) {
      var _this2 = this;

      if (this.stock[index]) {
        this.loading = true;
        this.bag.size = this.sizes[index];
        this.bag.product = this.wishlist[index].product.id;
        return this.$inertia.post(this.route('bag.add'), this.bag, {
          onSuccess: function onSuccess() {
            _this2.loading = false;
            _this2.bag.product = null;
            _this2.bag.size = null;
            _this2.done = true;
          }
        });
      }

      this.soldout = true;
    }
  },
  data: function data() {
    return {
      loading: false,
      soldout: false,
      done: false,
      stock: [],
      sizes: [],
      bag: {
        product: null,
        size: null,
        qty: 1
      }
    };
  }
});

/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/Route.js":
/*!************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/Route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * A Laravel route. This class represents one route and its configuration and metadata.
 */

var Route = /*#__PURE__*/function () {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  function Route(name, definition, config) {
    var _definition$bindings, _definition$wheres;

    _classCallCheck(this, Route);

    this.name = name;
    this.definition = definition;
    this.bindings = (_definition$bindings = definition.bindings) !== null && _definition$bindings !== void 0 ? _definition$bindings : {};
    this.wheres = (_definition$wheres = definition.wheres) !== null && _definition$wheres !== void 0 ? _definition$wheres : {};
    this.config = config;
  }
  /**
   * Get a 'template' of the complete URL for this route.
   *
   * @example
   * https://{team}.ziggy.dev/user/{user}
   *
   * @return {String} Route template.
   */


  _createClass(Route, [{
    key: "template",
    get: function get() {
      // If  we're building just a path there's no origin, otherwise: if this route has a
      // domain configured we construct the origin with that, if not we use the app URL
      var origin = !this.config.absolute ? '' : this.definition.domain ? "".concat(this.config.url.match(/^\w+:\/\//)[0]).concat(this.definition.domain).concat(this.config.port ? ":".concat(this.config.port) : '') : this.config.url;
      return "".concat(origin, "/").concat(this.definition.uri).replace(/\/+$/, '');
    }
    /**
     * Get an array of objects representing the parameters that this route accepts.
     *
     * @example
     * [{ name: 'team', required: true }, { name: 'user', required: false }]
     *
     * @return {Array} Parameter segments.
     */

  }, {
    key: "parameterSegments",
    get: function get() {
      var _this$template$match$, _this$template$match;

      return (_this$template$match$ = (_this$template$match = this.template.match(/{[^}?]+\??}/g)) === null || _this$template$match === void 0 ? void 0 : _this$template$match.map(function (segment) {
        return {
          name: segment.replace(/{|\??}/g, ''),
          required: !/\?}$/.test(segment)
        };
      })) !== null && _this$template$match$ !== void 0 ? _this$template$match$ : [];
    }
    /**
     * Get whether this route's template matches the given URL.
     *
     * @param {String} url - URL to check.
     * @return {Object|false} - If this route matches, returns the matched parameters.
     */

  }, {
    key: "matchesUrl",
    value: function matchesUrl(url) {
      var _this = this;

      if (!this.definition.methods.includes('GET')) return false; // Transform the route's template into a regex that will match a hydrated URL,
      // by replacing its parameter segments with matchers for parameter values

      var pattern = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function (_, slash, segment, optional) {
        var _this$wheres$segment;

        var regex = "(?<".concat(segment, ">").concat(((_this$wheres$segment = _this.wheres[segment]) === null || _this$wheres$segment === void 0 ? void 0 : _this$wheres$segment.replace(/(^\^)|(\$$)/g, '')) || '[^/?]+', ")");
        return optional ? "(".concat(slash).concat(regex, ")?") : "".concat(slash).concat(regex);
      }).replace(/^\w+:\/\//, '');

      var _url$replace$split = url.replace(/^\w+:\/\//, '').split('?'),
          _url$replace$split2 = _slicedToArray(_url$replace$split, 2),
          location = _url$replace$split2[0],
          query = _url$replace$split2[1];

      var matches = new RegExp("^".concat(pattern, "/?$")).exec(location);
      return matches ? {
        params: matches.groups,
        query: (0,qs__WEBPACK_IMPORTED_MODULE_0__.parse)(query)
      } : false;
    }
    /**
     * Hydrate and return a complete URL for this route with the given parameters.
     *
     * @param {Object} params
     * @return {String}
     */

  }, {
    key: "compile",
    value: function compile(params) {
      var _this2 = this;

      var segments = this.parameterSegments;
      if (!segments.length) return this.template;
      return this.template.replace(/{([^}?]+)(\??)}/g, function (_, segment, optional) {
        var _params$segment2, _params$segment3;

        // If the parameter is missing but is not optional, throw an error
        if (!optional && [null, undefined].includes(params[segment])) {
          throw new Error("Ziggy error: '".concat(segment, "' parameter is required for route '").concat(_this2.name, "'."));
        }

        if (segments[segments.length - 1].name === segment && _this2.wheres[segment] === '.*') {
          var _params$segment;

          return encodeURIComponent((_params$segment = params[segment]) !== null && _params$segment !== void 0 ? _params$segment : '').replace(/%2F/g, '/');
        }

        if (_this2.wheres[segment] && !new RegExp("^".concat(optional ? "(".concat(_this2.wheres[segment], ")?") : _this2.wheres[segment], "$")).test((_params$segment2 = params[segment]) !== null && _params$segment2 !== void 0 ? _params$segment2 : '')) {
          throw new Error("Ziggy error: '".concat(segment, "' parameter does not match required format '").concat(_this2.wheres[segment], "' for route '").concat(_this2.name, "'."));
        }

        return encodeURIComponent((_params$segment3 = params[segment]) !== null && _params$segment3 !== void 0 ? _params$segment3 : '');
      }).replace(/\/+$/, '');
    }
  }]);

  return Route;
}();



/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/Router.js":
/*!*************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/Router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route */ "./vendor/tightenco/ziggy/src/js/Route.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * A collection of Laravel routes. This class constitutes Ziggy's main API.
 */

var Router = /*#__PURE__*/function (_String) {
  _inherits(Router, _String);

  var _super = _createSuper(Router);

  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  function Router(name, params) {
    var _this;

    var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var config = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Router);

    _this = _super.call(this);
    _this._config = config !== null && config !== void 0 ? config : typeof Ziggy !== 'undefined' ? Ziggy : globalThis === null || globalThis === void 0 ? void 0 : globalThis.Ziggy;
    _this._config = _objectSpread(_objectSpread({}, _this._config), {}, {
      absolute: absolute
    });

    if (name) {
      if (!_this._config.routes[name]) {
        throw new Error("Ziggy error: route '".concat(name, "' is not in the route list."));
      }

      _this._route = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](name, _this._config.routes[name], _this._config);
      _this._params = _this._parse(params);
    }

    return _this;
  }
  /**
   * Get the compiled URL string for the current route and parameters.
   *
   * @example
   * // with 'posts.show' route 'posts/{post}'
   * (new Router('posts.show', 1)).toString(); // 'https://ziggy.dev/posts/1'
   *
   * @return {String}
   */


  _createClass(Router, [{
    key: "toString",
    value: function toString() {
      var _this2 = this;

      // Get parameters that don't correspond to any route segments to append them to the query
      var unhandled = Object.keys(this._params).filter(function (key) {
        return !_this2._route.parameterSegments.some(function (_ref) {
          var name = _ref.name;
          return name === key;
        });
      }).filter(function (key) {
        return key !== '_query';
      }).reduce(function (result, current) {
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, current, _this2._params[current]));
      }, {});
      return this._route.compile(this._params) + (0,qs__WEBPACK_IMPORTED_MODULE_0__.stringify)(_objectSpread(_objectSpread({}, unhandled), this._params['_query']), {
        addQueryPrefix: true,
        arrayFormat: 'indices',
        encodeValuesOnly: true,
        skipNulls: true,
        encoder: function encoder(value, _encoder) {
          return typeof value === 'boolean' ? Number(value) : _encoder(value);
        }
      });
    }
    /**
     * Get the parameters, values, and metadata from the given URL.
     *
     * @param {String} [url] - The URL to inspect, defaults to the current window URL.
     * @return {{ name: string, params: Object, query: Object, route: Route }}
     */

  }, {
    key: "_unresolve",
    value: function _unresolve(url) {
      var _this3 = this;

      if (!url) {
        url = this._currentUrl();
      } else if (this._config.absolute && url.startsWith('/')) {
        // If we are using absolute URLs and a relative URL
        // is passed, prefix the host to make it absolute
        url = this._location().host + url;
      }

      var matchedParams = {};

      var _ref2 = Object.entries(this._config.routes).find(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            name = _ref5[0],
            route = _ref5[1];

        return matchedParams = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](name, route, _this3._config).matchesUrl(url);
      }) || [undefined, undefined],
          _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          route = _ref3[1];

      return _objectSpread(_objectSpread({
        name: name
      }, matchedParams), {}, {
        route: route
      });
    }
  }, {
    key: "_currentUrl",
    value: function _currentUrl() {
      var _this$_location = this._location(),
          host = _this$_location.host,
          pathname = _this$_location.pathname,
          search = _this$_location.search;

      return (this._config.absolute ? host + pathname : pathname.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ''), '').replace(/^\/+/, '/')) + search;
    }
    /**
     * Get the name of the route matching the current window URL, or, given a route name
     * and parameters, check if the current window URL and parameters match that route.
     *
     * @example
     * // at URL https://ziggy.dev/posts/4 with 'posts.show' route 'posts/{post}'
     * route().current(); // 'posts.show'
     * route().current('posts.index'); // false
     * route().current('posts.show'); // true
     * route().current('posts.show', { post: 1 }); // false
     * route().current('posts.show', { post: 4 }); // true
     *
     * @param {String} [name] - Route name to check.
     * @param {(String|Number|Array|Object)} [params] - Route parameters.
     * @return {(Boolean|String|undefined)}
     */

  }, {
    key: "current",
    value: function current(name, params) {
      var _this$_unresolve = this._unresolve(),
          current = _this$_unresolve.name,
          currentParams = _this$_unresolve.params,
          query = _this$_unresolve.query,
          route = _this$_unresolve.route; // If a name wasn't passed, return the name of the current route


      if (!name) return current; // Test the passed name against the current route, matching some
      // basic wildcards, e.g. passing `events.*` matches `events.show`

      var match = new RegExp("^".concat(name.replace(/\./g, '\\.').replace(/\*/g, '.*'), "$")).test(current);
      if ([null, undefined].includes(params) || !match) return match;
      var routeObject = new _Route__WEBPACK_IMPORTED_MODULE_1__["default"](current, route, this._config);
      params = this._parse(params, routeObject);

      var routeParams = _objectSpread(_objectSpread({}, currentParams), query); // If the current window URL has no route parameters, and the passed parameters are empty, return true


      if (Object.values(params).every(function (p) {
        return !p;
      }) && !Object.values(routeParams).some(function (v) {
        return v !== undefined;
      })) return true; // Check that all passed parameters match their values in the current window URL
      // Use weak equality because all values in the current window URL will be strings

      return Object.entries(params).every(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];

        return routeParams[key] == value;
      });
    }
    /**
     * Get an object representing the current location (by default this will be
     * the JavaScript `window` global if it's available).
     *
     * @return {Object}
     */

  }, {
    key: "_location",
    value: function _location() {
      var _this$_config$locatio, _this$_config$locatio2, _this$_config$locatio3, _this$_config$locatio4, _this$_config$locatio5, _this$_config$locatio6;

      var _ref8 = typeof window !== 'undefined' ? window.location : {},
          _ref8$host = _ref8.host,
          host = _ref8$host === void 0 ? '' : _ref8$host,
          _ref8$pathname = _ref8.pathname,
          pathname = _ref8$pathname === void 0 ? '' : _ref8$pathname,
          _ref8$search = _ref8.search,
          search = _ref8$search === void 0 ? '' : _ref8$search;

      return {
        host: (_this$_config$locatio = (_this$_config$locatio2 = this._config.location) === null || _this$_config$locatio2 === void 0 ? void 0 : _this$_config$locatio2.host) !== null && _this$_config$locatio !== void 0 ? _this$_config$locatio : host,
        pathname: (_this$_config$locatio3 = (_this$_config$locatio4 = this._config.location) === null || _this$_config$locatio4 === void 0 ? void 0 : _this$_config$locatio4.pathname) !== null && _this$_config$locatio3 !== void 0 ? _this$_config$locatio3 : pathname,
        search: (_this$_config$locatio5 = (_this$_config$locatio6 = this._config.location) === null || _this$_config$locatio6 === void 0 ? void 0 : _this$_config$locatio6.search) !== null && _this$_config$locatio5 !== void 0 ? _this$_config$locatio5 : search
      };
    }
    /**
     * Get all parameter values from the current window URL.
     *
     * @example
     * // at URL https://tighten.ziggy.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.ziggy.dev'
     * route().params; // { team: 'tighten', post: 4, lang: 'en' }
     *
     * @return {Object}
     */

  }, {
    key: "params",
    get: function get() {
      var _this$_unresolve2 = this._unresolve(),
          params = _this$_unresolve2.params,
          query = _this$_unresolve2.query;

      return _objectSpread(_objectSpread({}, params), query);
    }
    /**
     * Check whether the given route exists.
     *
     * @param {String} name
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(name) {
      return Object.keys(this._config.routes).includes(name);
    }
    /**
     * Parse Laravel-style route parameters of any type into a normalized object.
     *
     * @example
     * // with route parameter names 'event' and 'venue'
     * _parse(1); // { event: 1 }
     * _parse({ event: 2, venue: 3 }); // { event: 2, venue: 3 }
     * _parse(['Taylor', 'Matt']); // { event: 'Taylor', venue: 'Matt' }
     * _parse([4, { uuid: 56789, name: 'Grand Canyon' }]); // { event: 4, venue: 56789 }
     *
     * @param {(String|Number|Array|Object)} params - Route parameters.
     * @param {Route} route - Route instance.
     * @return {Object} Normalized complete route parameters.
     */

  }, {
    key: "_parse",
    value: function _parse() {
      var _this4 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._route;
      // If `params` is a string or integer, wrap it in an array
      params = ['string', 'number'].includes(_typeof(params)) ? [params] : params; // Separate segments with and without defaults, and fill in the default values

      var segments = route.parameterSegments.filter(function (_ref9) {
        var name = _ref9.name;
        return !_this4._config.defaults[name];
      });

      if (Array.isArray(params)) {
        // If the parameters are an array they have to be in order, so we can transform them into
        // an object by keying them with the template segment names in the order they appear
        params = params.reduce(function (result, current, i) {
          return segments[i] ? _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, segments[i].name, current)) : _typeof(current) === 'object' ? _objectSpread(_objectSpread({}, result), current) : _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, current, ''));
        }, {});
      } else if (segments.length === 1 && !params[segments[0].name] && (params.hasOwnProperty(Object.values(route.bindings)[0]) || params.hasOwnProperty('id'))) {
        // If there is only one template segment and `params` is an object, that object is
        // ambiguous—it could contain the parameter key and value, or it could be an object
        // representing just the value (e.g. a model); we can inspect it to find out, and
        // if it's just the parameter value, we can wrap it in an object with its key
        params = _defineProperty({}, segments[0].name, params);
      }

      return _objectSpread(_objectSpread({}, this._defaults(route)), this._substituteBindings(params, route));
    }
    /**
     * Populate default parameters for the given route.
     *
     * @example
     * // with default parameters { locale: 'en', country: 'US' } and 'posts.show' route '{locale}/posts/{post}'
     * defaults(...); // { locale: 'en' }
     *
     * @param {Route} route
     * @return {Object} Default route parameters.
     */

  }, {
    key: "_defaults",
    value: function _defaults(route) {
      var _this5 = this;

      return route.parameterSegments.filter(function (_ref10) {
        var name = _ref10.name;
        return _this5._config.defaults[name];
      }).reduce(function (result, _ref11, i) {
        var name = _ref11.name;
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, _this5._config.defaults[name]));
      }, {});
    }
    /**
     * Substitute Laravel route model bindings in the given parameters.
     *
     * @example
     * _substituteBindings({ post: { id: 4, slug: 'hello-world', title: 'Hello, world!' } }, { bindings: { post: 'slug' } }); // { post: 'hello-world' }
     *
     * @param {Object} params - Route parameters.
     * @param {Object} route - Route definition.
     * @return {Object} Normalized route parameters.
     */

  }, {
    key: "_substituteBindings",
    value: function _substituteBindings(params, _ref12) {
      var bindings = _ref12.bindings,
          parameterSegments = _ref12.parameterSegments;
      return Object.entries(params).reduce(function (result, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            key = _ref14[0],
            value = _ref14[1];

        // If the value isn't an object, or if the key isn't a named route parameter,
        // there's nothing to substitute so we return it as-is
        if (!value || _typeof(value) !== 'object' || Array.isArray(value) || !parameterSegments.some(function (_ref15) {
          var name = _ref15.name;
          return name === key;
        })) {
          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value));
        }

        if (!value.hasOwnProperty(bindings[key])) {
          if (value.hasOwnProperty('id')) {
            // As a fallback, we still accept an 'id' key not explicitly registered as a binding
            bindings[key] = 'id';
          } else {
            throw new Error("Ziggy error: object passed as '".concat(key, "' parameter is missing route model binding key '").concat(bindings[key], "'."));
          }
        }

        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value[bindings[key]]));
      }, {});
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toString();
    }
    /**
     * @deprecated since v1.0, use `has()` instead.
     */

  }, {
    key: "check",
    value: function check(name) {
      return this.has(name);
    }
  }]);

  return Router;
}( /*#__PURE__*/_wrapNativeSuper(String));



/***/ }),

/***/ "./vendor/tightenco/ziggy/src/js/index.js":
/*!************************************************!*\
  !*** ./vendor/tightenco/ziggy/src/js/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ route)
/* harmony export */ });
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ "./vendor/tightenco/ziggy/src/js/Router.js");

function route(name, params, absolute, config) {
  var router = new _Router__WEBPACK_IMPORTED_MODULE_0__["default"](name, params, absolute, config);
  return name ? router.toString() : router;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.video[data-v-466c3607] {\n\tposition: relative;\n\theight: 0;\n\tpadding-bottom: 56.25%;\n}\n.iframe[data-v-466c3607] {\n\tposition: absolute;\n\tinset: 0 0 0 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-051306b8]:not(.active) {\n\ttext-decoration: underline;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-0484b006]:not(.active) {\n\ttext-decoration: underline;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.carousel-caption[data-v-6a63e488] {\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tmax-height: calc(100vh - 120px);\n}\n.category[data-v-6a63e488] {\n\tposition: relative;\n}\n.category .overlay[data-v-6a63e488] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\ttext-decoration: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.video[data-v-aa40d84a] {\n\tposition: relative;\n\theight: 0;\n\tpadding-bottom: 56.25%;\n}\n.iframe[data-v-aa40d84a] {\n\tposition: absolute;\n\tinset: 0 0 0 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n@media (min-width: 576px) {\n.carousel img[data-v-e2dbd454] {\n\t\tmax-height: 520px;\n\t\twidth: auto !important;\n}\n}\n.accordion-button[data-v-e2dbd454] {\n\tpadding: 1rem .25rem;\n\tbackground-color: var(--bs-primary);\n\tcolor: var(--bs-dark);\n\tfont-weight: 600;\n\tbox-shadow: none;\n}\n.recommendation .wishlist[data-v-e2dbd454] {\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tcursor: pointer;\n}\n.arrows.carousel-control-prev[data-v-e2dbd454],\n.arrows.carousel-control-next[data-v-e2dbd454] {\n\ttop: calc(50% - 70px);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.product .gallery[data-v-72c9e71f] {\n\tposition: relative;\n\toverflow: hidden;\n}\n.product .carousel-control-prev[data-v-72c9e71f],\n.product .carousel-control-next[data-v-72c9e71f] {\n\tvisibility: hidden;\n\topacity: 0;\n\ttransition: .3s;\n}\n.product:hover .carousel-control-prev[data-v-72c9e71f],\n.product:hover .carousel-control-next[data-v-72c9e71f] {\n\tvisibility: visible;\n\topacity: 1;\n}\n.product .wishlist[data-v-72c9e71f] {\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tcursor: pointer;\n}\n.product .colors[data-v-72c9e71f] {\n\tposition: absolute;\n\tleft: 1rem;\n\tbottom: 1rem;\n\tdisplay: flex;\n}\n.product .colors span[data-v-72c9e71f] {\n\tdisplay: block;\n\theight: 20px;\n\twidth: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.product .bag[data-v-0f8ddc24] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tpadding: 1rem;\n\tpadding-bottom: 1.5rem;\n\tbackground-color: #fff;\n\tvisibility: hidden;\n\topacity: 0;\n\tz-index: 1;\n\ttransform: rotateY(180deg);\n\ttransition: .5s;\n}\n.product .bag.show[data-v-0f8ddc24] {\n\ttransform: rotateY(0);\n\tvisibility: visible;\n\topacity: 1;\n}\n.product .action[data-v-0f8ddc24] {\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n}\n.product .add[data-v-0f8ddc24] {\n\tline-height: .7;\n\tfont-size: 2rem;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.bi-check[data-v-0f8ddc24] {\n\tdisplay: inline-block;\n\ttransform: scale(1.5);\n\tvisibility: hidden;\n}\n.bi-check.show[data-v-0f8ddc24] {\n\tvisibility: visible;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nfooter[data-v-4ab6097e] {\n\tpadding-top: 50px;\n\tpadding-bottom: 100px;\n}\n.subscribe button[data-v-4ab6097e] {\n\tpadding-bottom: 0;\n\tborder: 0;\n\tborder-bottom: 2px solid var(--bs-primary);\n\tbox-shadow: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fixed-navbar[data-v-0851419a] {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 9;\n}\n.top-navbar[data-v-0851419a] {\n\theight: 60px;\n\toverflow: hidden;\n}\n.top-navbar.hide[data-v-0851419a] {\n\tdisplay: none;\n}\n.navbar-brand[data-v-0851419a] {\n\tfont-family: 'Avenir-Heavy';\n}\n.dropdown-item[data-v-0851419a] {\n\tpadding-top: .5rem;\n\tpadding-bottom: .5rem;\n\tbackground-color: transparent;\n\tcolor: var(--bs-dark);\n}\n.counter[data-v-0851419a] {\n\tposition: absolute;\n\ttop: -5px;\n\tright: 3px;\n\tcolor: var(--bs-danger);\n\tfont-weight: 600;\n}\n.user-icon[data-v-0851419a] {\n\tline-height: 1.4;\n\ttransform:scale(1.4);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.newsletter[data-v-cb543d60] {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(0,0,0,.5);\n\tz-index: 1095;\n}\n.newsletter .content[data-v-cb543d60] {\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 800px;\n\tpadding: 3rem;\n\tbackground-color: white;\n}\n.cookies[data-v-cb543d60] {\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: black;\n\tcolor: white;\n\tz-index: 1090;\n}\n.newsletter .close[data-v-cb543d60],\n.cookies .close[data-v-cb543d60] {\n\tposition: absolute;\n\ttop: .5rem;\n\tright: .5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.popup-backdrop[data-v-77019f71] {\n\tposition: fixed;\n\tinset: 0 0 0 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(0,0,0,.5);\n\tz-index: 1085;\n}\n.popup-content[data-v-77019f71] {\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 500px;\n\tbackground-color: var(--bs-primary);\n}\n.popup-body[data-v-77019f71] {\n\tpadding: 1.5rem;\n\tcolor: var(--bs-dark);\n}\n.popup-close[data-v-77019f71] {\n\tposition: absolute;\n\ttop: .5rem;\n\tright: .5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-30cc3f4f] {\n\twidth: 80px;\n\ttext-align: center;\n}\nspan[data-v-30cc3f4f] {\n\tdisplay: block;\n\twidth: 28px;\n\theight: 50%;\n\ttext-align: center;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\nspan[data-v-30cc3f4f]:hover {\n\tbackground-color: var(--bs-light);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.colors span[data-v-28665937] {\n\theight: 19px;\n\twidth: 19px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/js/Pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=169e1534& */ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/Pages/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "e94627b6"
  
)

component.options.__file = "resources/js/Pages/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Addresses.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Addresses.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Addresses.vue?vue&type=template&id=25a5fb49& */ "./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49&");
/* harmony import */ var _Addresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addresses.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Addresses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Addresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__.render,
  _Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "3f641c8c"
  
)

component.options.__file = "resources/js/Pages/Addresses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Bag.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/Bag.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bag.vue?vue&type=template&id=2997cfef& */ "./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef&");
/* harmony import */ var _Bag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bag.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Bag.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__.render,
  _Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "b55ca1c0"
  
)

component.options.__file = "resources/js/Pages/Bag.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Collection.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Collection.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=466c3607&scoped=true& */ "./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true&");
/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Collection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& */ "./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "466c3607",
  "3e79e494"
  
)

component.options.__file = "resources/js/Pages/Collection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Contact.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Contact.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=2c2b26f2& */ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "2a4f4b38"
  
)

component.options.__file = "resources/js/Pages/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/CustomerCare.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/CustomerCare.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerCare.vue?vue&type=template&id=051306b8&scoped=true& */ "./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true&");
/* harmony import */ var _CustomerCare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerCare.vue?vue&type=script&lang=js& */ "./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& */ "./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerCare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "051306b8",
  "6512aea7"
  
)

component.options.__file = "resources/js/Pages/CustomerCare.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Faq.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/Faq.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=0484b006&scoped=true& */ "./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Faq.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& */ "./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "0484b006",
  "7977872e"
  
)

component.options.__file = "resources/js/Pages/Faq.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& */ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "6a63e488",
  "65e5eb77"
  
)

component.options.__file = "resources/js/Pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Looks.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Looks.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Looks.vue?vue&type=template&id=aa40d84a&scoped=true& */ "./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true&");
/* harmony import */ var _Looks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Looks.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Looks.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& */ "./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Looks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "aa40d84a",
  "1f9e6acc"
  
)

component.options.__file = "resources/js/Pages/Looks.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Orders.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Orders.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=cebe0164& */ "./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__.render,
  _Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "8885f306"
  
)

component.options.__file = "resources/js/Pages/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Page.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Page.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=8ace0b90& */ "./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90&");
/* harmony import */ var _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Page.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__.render,
  _Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "93c9fdb2"
  
)

component.options.__file = "resources/js/Pages/Page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/PasswordChange.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/PasswordChange.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=template&id=1f387ad8& */ "./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8&");
/* harmony import */ var _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordChange.vue?vue&type=script&lang=js& */ "./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "4f192ac3"
  
)

component.options.__file = "resources/js/Pages/PasswordChange.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/PasswordReset.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=template&id=73e6829b& */ "./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&");
/* harmony import */ var _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordReset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__.render,
  _PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "13dbd88c"
  
)

component.options.__file = "resources/js/Pages/PasswordReset.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Product.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=e2dbd454&scoped=true& */ "./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& */ "./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "e2dbd454",
  "621216f2"
  
)

component.options.__file = "resources/js/Pages/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0& */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "3276c441"
  
)

component.options.__file = "resources/js/Pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shop.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Shop.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop.vue?vue&type=template&id=72c9e71f&scoped=true& */ "./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true&");
/* harmony import */ var _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shop.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& */ "./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "72c9e71f",
  "6e4bee0e"
  
)

component.options.__file = "resources/js/Pages/Shop.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Sustainability.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Sustainability.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sustainability.vue?vue&type=template&id=93787fe0& */ "./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0&");
/* harmony import */ var _Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sustainability.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "14f9283f"
  
)

component.options.__file = "resources/js/Pages/Sustainability.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Wishlist.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Wishlist.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true& */ "./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true&");
/* harmony import */ var _Wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wishlist.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& */ "./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "0f8ddc24",
  "771fed46"
  
)

component.options.__file = "resources/js/Pages/Wishlist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppFooter.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppFooter.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true& */ "./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/AppFooter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& */ "./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "4ab6097e",
  "7338b514"
  
)

component.options.__file = "resources/js/components/AppFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppHeader.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=0851419a&scoped=true& */ "./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true&");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/AppHeader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& */ "./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "0851419a",
  "30d3ed30"
  
)

component.options.__file = "resources/js/components/AppHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppLayout.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppLayout.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=cb543d60&scoped=true& */ "./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/AppLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& */ "./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "cb543d60",
  "f3d6e8f6"
  
)

component.options.__file = "resources/js/components/AppLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BagMenu.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/BagMenu.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BagMenu.vue?vue&type=template&id=23786128& */ "./resources/js/components/BagMenu.vue?vue&type=template&id=23786128&");
/* harmony import */ var _BagMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BagMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/BagMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BagMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__.render,
  _BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "7aa182e1"
  
)

component.options.__file = "resources/js/components/BagMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FindSize.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FindSize.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FindSize.vue?vue&type=template&id=55649dc5& */ "./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5&");
/* harmony import */ var _FindSize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FindSize.vue?vue&type=script&lang=js& */ "./resources/js/components/FindSize.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FindSize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__.render,
  _FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "54bd58f0"
  
)

component.options.__file = "resources/js/components/FindSize.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoginForm.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LoginForm.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=12a98f72& */ "./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/components/LoginForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "032f8cb2"
  
)

component.options.__file = "resources/js/components/LoginForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PopUp.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/PopUp.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopUp.vue?vue&type=template&id=77019f71&scoped=true& */ "./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true&");
/* harmony import */ var _PopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopUp.vue?vue&type=script&lang=js& */ "./resources/js/components/PopUp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& */ "./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "77019f71",
  "36afac26"
  
)

component.options.__file = "resources/js/components/PopUp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/QtyField.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/QtyField.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true& */ "./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true&");
/* harmony import */ var _QtyField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QtyField.vue?vue&type=script&lang=js& */ "./resources/js/components/QtyField.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& */ "./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QtyField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "30cc3f4f",
  "3024fa7a"
  
)

component.options.__file = "resources/js/components/QtyField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegisterForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/RegisterForm.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=7942be72& */ "./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/RegisterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "5a23ec1d"
  
)

component.options.__file = "resources/js/components/RegisterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchForm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/SearchForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchForm.vue?vue&type=template&id=28665937&scoped=true& */ "./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true&");
/* harmony import */ var _SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchForm.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& */ "./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "28665937",
  "970614bc"
  
)

component.options.__file = "resources/js/components/SearchForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SocialShare.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/SocialShare.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialShare.vue?vue&type=template&id=2ea85657&scoped=true& */ "./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true&");
/* harmony import */ var _SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialShare.vue?vue&type=script&lang=js& */ "./resources/js/components/SocialShare.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  injectStyles,
  "2ea85657",
  "2565474c"
  
)

component.options.__file = "resources/js/components/SocialShare.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserMenu.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/UserMenu.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMenu.vue?vue&type=template&id=6f268f96& */ "./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96&");
/* harmony import */ var _UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/UserMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "70751940"
  
)

component.options.__file = "resources/js/components/UserMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/WishlistMenu.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/WishlistMenu.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WishlistMenu.vue?vue&type=template&id=cddd72a2& */ "./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2&");
/* harmony import */ var _WishlistMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WishlistMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WishlistMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  "79f2745a"
  
)

component.options.__file = "resources/js/components/WishlistMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Addresses.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Addresses.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Addresses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addresses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Bag.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Bag.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bag.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Collection.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Collection.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerCare.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Faq.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Faq.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Looks.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Looks.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Looks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Orders.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Orders.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Page.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Page.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shop.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Shop.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sustainability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wishlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AppLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BagMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/BagMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BagMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BagMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BagMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FindSize.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FindSize.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FindSize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindSize.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FindSize_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoginForm.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LoginForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PopUp.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/PopUp.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PopUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QtyField.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/QtyField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QtyField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegisterForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/RegisterForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/SearchForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SocialShare.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SocialShare.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/UserMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WishlistMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=template&id=169e1534& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_169e1534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=169e1534& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&");


/***/ }),

/***/ "./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Addresses_vue_vue_type_template_id_25a5fb49___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Addresses.vue?vue&type=template&id=25a5fb49& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49&");


/***/ }),

/***/ "./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_template_id_2997cfef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bag.vue?vue&type=template&id=2997cfef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef&");


/***/ }),

/***/ "./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_466c3607_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=template&id=466c3607&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_2c2b26f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=2c2b26f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&");


/***/ }),

/***/ "./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_template_id_051306b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerCare.vue?vue&type=template&id=051306b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_0484b006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=template&id=0484b006&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_template_id_aa40d84a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Looks.vue?vue&type=template&id=aa40d84a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_cebe0164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=template&id=cebe0164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164&");


/***/ }),

/***/ "./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_8ace0b90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Page.vue?vue&type=template&id=8ace0b90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90&");


/***/ }),

/***/ "./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordChange_vue_vue_type_template_id_1f387ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordChange.vue?vue&type=template&id=1f387ad8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8&");


/***/ }),

/***/ "./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordReset_vue_vue_type_template_id_73e6829b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PasswordReset.vue?vue&type=template&id=73e6829b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&");


/***/ }),

/***/ "./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_e2dbd454_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=e2dbd454&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_1bdc34e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=1bdc34e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&");


/***/ }),

/***/ "./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_template_id_72c9e71f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=template&id=72c9e71f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sustainability_vue_vue_type_template_id_93787fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sustainability.vue?vue&type=template&id=93787fe0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0&");


/***/ }),

/***/ "./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_template_id_0f8ddc24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true&");


/***/ }),

/***/ "./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_4ab6097e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true&");


/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0851419a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=template&id=0851419a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_cb543d60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=template&id=cb543d60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BagMenu.vue?vue&type=template&id=23786128&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/BagMenu.vue?vue&type=template&id=23786128& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BagMenu_vue_vue_type_template_id_23786128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BagMenu.vue?vue&type=template&id=23786128& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=template&id=23786128&");


/***/ }),

/***/ "./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FindSize_vue_vue_type_template_id_55649dc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FindSize.vue?vue&type=template&id=55649dc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5&");


/***/ }),

/***/ "./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_12a98f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginForm.vue?vue&type=template&id=12a98f72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&");


/***/ }),

/***/ "./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_template_id_77019f71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PopUp.vue?vue&type=template&id=77019f71&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true&");


/***/ }),

/***/ "./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_template_id_30cc3f4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true&");


/***/ }),

/***/ "./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_7942be72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=template&id=7942be72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72&");


/***/ }),

/***/ "./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchForm.vue?vue&type=template&id=28665937&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialShare_vue_vue_type_template_id_2ea85657_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialShare.vue?vue&type=template&id=2ea85657&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true&");


/***/ }),

/***/ "./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMenu_vue_vue_type_template_id_6f268f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserMenu.vue?vue&type=template&id=6f268f96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96&");


/***/ }),

/***/ "./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WishlistMenu_vue_vue_type_template_id_cddd72a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WishlistMenu.vue?vue&type=template&id=cddd72a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2&");


/***/ }),

/***/ "./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_466c3607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_466c3607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_466c3607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_466c3607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_466c3607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_style_index_0_id_051306b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_style_index_0_id_051306b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_style_index_0_id_051306b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_style_index_0_id_051306b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerCare_vue_vue_type_style_index_0_id_051306b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_0484b006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_0484b006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_0484b006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_0484b006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_0484b006_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_style_index_0_id_aa40d84a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_style_index_0_id_aa40d84a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_style_index_0_id_aa40d84a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_style_index_0_id_aa40d84a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Looks_vue_vue_type_style_index_0_id_aa40d84a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_e2dbd454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_e2dbd454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_e2dbd454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_e2dbd454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_e2dbd454_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_72c9e71f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_72c9e71f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_72c9e71f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_72c9e71f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Shop_vue_vue_type_style_index_0_id_72c9e71f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_style_index_0_id_0f8ddc24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_style_index_0_id_0f8ddc24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_style_index_0_id_0f8ddc24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_style_index_0_id_0f8ddc24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Wishlist_vue_vue_type_style_index_0_id_0f8ddc24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_4ab6097e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_4ab6097e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_4ab6097e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_4ab6097e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_4ab6097e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_0851419a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_style_index_0_id_cb543d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_style_index_0_id_cb543d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_style_index_0_id_cb543d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_style_index_0_id_cb543d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_style_index_0_id_cb543d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_style_index_0_id_77019f71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_style_index_0_id_77019f71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_style_index_0_id_77019f71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_style_index_0_id_77019f71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUp_vue_vue_type_style_index_0_id_77019f71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_style_index_0_id_30cc3f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_style_index_0_id_30cc3f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_style_index_0_id_30cc3f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_style_index_0_id_30cc3f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QtyField_vue_vue_type_style_index_0_id_30cc3f4f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_style_index_0_id_28665937_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_style_index_0_id_28665937_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_style_index_0_id_28665937_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_style_index_0_id_28665937_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_style_index_0_id_28665937_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/About.vue?vue&type=template&id=169e1534& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "About us" } }),
      _vm._v(" "),
      _c("section", { staticClass: "position-relative carousel-dark py-5" }, [
        _c("div", { staticClass: "glider" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("OUR WORLD"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "AFYLA is a new voice in luxury fashion. Tracing a path from concept to creation, AFYLA designs, manufactures and distributes ready-to-wear collections while focusing on impeccable details and precise tailoring."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "AFYLA found its identity on significant values such as innovation, empowerment and sustainability development. We believe in a contemporary society where inclusiveness, modernism and ecoresponsibility reigns."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "In its collections, AFYLA uses the strength of fashion as a personal form of self expression and combines a timeless perspective with renovated shapes and forms inspired by art, emotional intelligence and philosophy."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "Our vision goes beyond boundaries always seeking newness and a perspective of strong femininity. We seek to call out in every women a modern sensual empowered warrior."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "Our technology based platforms were built on modern business principles of inclusive culture, transparency and organic scarcity. Every decision has been guided by a value system based on sustainability and uncompromising quality."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "Using fashion as a pathway to women empowerment and activism, AFYLA world is synonymous with innovation, diversity, authenticity, kindness, love and empowerment."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium text-center mb-5" }, [
                  _vm._v("OUR VALUES"),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("1. INNOVATION"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-5" }, [
                  _vm._v(
                    "AFYLA is always driven by curiosity, intellectuality and diverse cultural universes. Inspired from art, emotional intelligence and philosophy, AFYLA carries obsession for newness and passion for discovery"
                  ),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("2. RETHINKING TAILORING"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-5" }, [
                  _vm._v(
                    "AFYLA is synonymous with innovation and modernism. We always try to find transformation and combine a timeless perspective with renovated shapes and forms. Looking always to go beyond boundaries and challenge the tradition."
                  ),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("3. EMPOWERING"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "AFYLA believes that fashion is a unique personal form of self expression. We always seek to deliver empowering energy through bold shapes and daring designs. Our ultimate goal is to give women optimism for a better authentic self and a better future. We want to give women the energy to express their essence without any fear"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 py-3 py-xl-5" }, [
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("4. SUSTAINABILITY"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-5" }, [
                  _vm._v(
                    "AFYLA world was created to suit a contemporary society where inclusiveness, modernism and eco-responsibility reigns. We hate injustice and discrimination and every decision inside of the brand has been and will be guided by a sustainable mentality, going against any kind of unfairness towards the environment, people and animals."
                  ),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("5. EXQUISITE CRAFTMANSHIP"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-5" }, [
                  _vm._v(
                    "Tracing a path from concept to creation, AFYLA designs and manufactures ready-to-wear collections while focusing on impeccable details and precise tailoring. Our team of experts and young talents own an artisanal spirit that seeks uncompromising quality and growth."
                  ),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("6. SMART TECHNOLOGY"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Our platforms goes hand in hand with technology and were built cleverly to suit you better. We want to give you a rich personalized experience that is updated with the evolution of business."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 py-3 py-xl-5" }, [
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("7. LOVE & KINDNESS"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-5" }, [
                  _vm._v(
                    "From design to sustainable decisions, everything included with the process of building this brand has to do with LOVE and KINDNESS. Our love to fashion, to nature, to animals and to people give us the willingness to keep going and the strength to rise in the face of challenges."
                  ),
                ]),
                _vm._v(" "),
                _c("h5", { staticClass: "fw-medium" }, [
                  _vm._v("8. CONVERSATION"),
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "One of AFYLA’s essential values is conversation. We are always open to communicate with people, and explore their perception. We inquisitively observes our community’s interactions and how they want things to be. We are sharp listeners and curious about everything coming from You."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "arrows carousel-control-prev prev",
            attrs: { type: "button" },
          },
          [
            _c("span", {
              staticClass: "carousel-control-prev-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [
              _vm._v("Previous"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "arrows carousel-control-next next",
            attrs: { type: "button" },
          },
          [
            _c("span", {
              staticClass: "carousel-control-next-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [_vm._v("Next")]),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Addresses.vue?vue&type=template&id=25a5fb49& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "UserMenu",
    [
      _c("h", { attrs: { title: "Address Book" } }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center px-3 px-sm-5" }, [
        _c("p", { staticClass: "fw-medium me-auto mb-0" }, [
          _vm._v("ADDRESS BOOK"),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-secondary fw-medium px-4",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                _vm.formshow = true
              },
            },
          },
          [_vm._v("ADD A NEW ADDRESS")]
        ),
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.formshow === false
        ? _c(
            "div",
            [
              _vm.addresses.length === 0
                ? _c("p", { staticClass: "px-3 px-sm-5" }, [
                    _vm._v("NO SAVED ADDRESSES"),
                  ])
                : _vm._l(_vm.addresses, function (address, i) {
                    return _c("div", { key: Math.random() }, [
                      address.default
                        ? _c("p", { staticClass: "fw-medium px-3 px-sm-5" }, [
                            _vm._v("DEFAULT"),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row g-0 px-3 px-sm-5" }, [
                        _c("div", { staticClass: "col-sm-3 mb-4 mb-sm-0" }, [
                          _c("p", {
                            staticClass: "mb-0",
                            domProps: { textContent: _vm._s(address.name) },
                          }),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "mb-0",
                            domProps: { textContent: _vm._s(address.phone) },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-5 mb-4 mb-sm-0" }, [
                          _c("span", [_vm._v(_vm._s(address.street) + ",")]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(address.city) + ",")]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(address.state) + ",")]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(address.zip) + ",")]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(address.country) + ".")]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4 mb-4 mb-sm-0" }, [
                          _c(
                            "u",
                            {
                              staticClass: "pointer text-muted me-5",
                              on: {
                                click: function ($event) {
                                  return _vm.fill(i)
                                },
                              },
                            },
                            [_vm._v("Edit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "u",
                            {
                              staticClass: "pointer text-muted",
                              on: {
                                click: function ($event) {
                                  return _vm.remove(address.id)
                                },
                              },
                            },
                            [_vm._v("Delete")]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                    ])
                  }),
            ],
            2
          )
        : _c("div", [
            _c(
              "form",
              {
                staticClass: "p-3 p-sm-5",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addOrEdit.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "row gx-2" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.firstname,
                            expression: "form.firstname",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "FIRST NAME" },
                        domProps: { value: _vm.form.firstname },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "firstname", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.firstname),
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.lastname,
                            expression: "form.lastname",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "LAST NAME" },
                        domProps: { value: _vm.form.lastname },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "lastname", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.lastname),
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-3" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.street,
                        expression: "form.street",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text", placeholder: "YOUR ADDRESS" },
                    domProps: { value: _vm.form.street },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "street", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "text-danger",
                    domProps: { textContent: _vm._s(_vm.form.errors.street) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row gx-2" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.city,
                            expression: "form.city",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "CITY" },
                        domProps: { value: _vm.form.city },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "city", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.form.errors.city) },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.zip,
                            expression: "form.zip",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "ZIP CODE" },
                        domProps: { value: _vm.form.zip },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "zip", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: { textContent: _vm._s(_vm.form.errors.zip) },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.state,
                            expression: "form.state",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "STATE" },
                        domProps: { value: _vm.form.state },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "state", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.state),
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row gx-2" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.country,
                              expression: "form.country",
                            },
                          ],
                          staticClass: "form-select border shadow-none py-3",
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "country",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { domProps: { value: null } }, [
                            _vm._v("COUNTRY"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.countries, function (country, code) {
                            return _c("option", {
                              key: code,
                              domProps: {
                                value: country.name,
                                textContent: _vm._s(country.name),
                              },
                            })
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.country),
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.phone,
                            expression: "form.phone",
                          },
                        ],
                        staticClass: "form-control border shadow-none py-3",
                        attrs: { type: "text", placeholder: "PHONE NUMBER" },
                        domProps: { value: _vm.form.phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "phone", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("small", {
                        staticClass: "text-danger",
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.phone),
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-check" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.default,
                        expression: "form.default",
                      },
                    ],
                    staticClass:
                      "form-check-input shadow-none bg-white border-0",
                    attrs: { type: "checkbox", id: "default" },
                    domProps: {
                      checked: Array.isArray(_vm.form.default)
                        ? _vm._i(_vm.form.default, null) > -1
                        : _vm.form.default,
                    },
                    on: {
                      change: function ($event) {
                        var $$a = _vm.form.default,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.form, "default", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.form,
                                "default",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.form, "default", $$c)
                        }
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      staticStyle: { "user-select": "none" },
                      attrs: { for: "default" },
                    },
                    [_vm._v("THIS IS MY DEFAULT ADDRESS")]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex justify-content-end" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn px-5 py-3 me-3",
                      staticStyle: { background: "#d5cdc5" },
                      attrs: { type: "button" },
                      on: { click: _vm.reset },
                    },
                    [_vm._v("CANCEL")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary px-5 py-3",
                      attrs: { type: "submit", disabled: _vm.form.processing },
                    },
                    [_vm._v("SAVE ADDRESS")]
                  ),
                ]),
              ]
            ),
          ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Bag.vue?vue&type=template&id=2997cfef& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Shopping Bag" } }),
      _vm._v(" "),
      _c("section", { staticClass: "mb-5" }, [
        _c(
          "div",
          { staticClass: "container py-5" },
          [
            _c("p", { staticClass: "fs-2" }, [_vm._v("MY SHOPPING BAG")]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-stretch align-items-sm-end mb-3",
              },
              [
                _c("img", {
                  staticClass: "me-2",
                  attrs: { src: "/img/icons/tree.png", height: "36px" },
                }),
                _vm._v(" "),
                _c("p", { staticClass: "text-success fw-medium mb-0" }, [
                  _vm._v(
                    "For each purchase, we plant a tree for Forest Fire Recovery."
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm.bag.length === 0
              ? _c("div", { staticClass: "display-6 text-center mt-5" }, [
                  _c("p", [_vm._v("Your shopping bag is empty.")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Go shopping!")]),
                ])
              : _vm._l(_vm.bag, function (item) {
                  return _c(
                    "div",
                    { key: Math.random(), staticClass: "row g-0 mb-3" },
                    [
                      _c("div", { staticClass: "col-lg-8 col-xl-7 border" }, [
                        _c("div", { staticClass: "row g-0" }, [
                          _c("div", { staticClass: "col-sm-4 col-xl-3 p-3" }, [
                            _c("img", {
                              staticClass: "d-block w-100",
                              attrs: { src: item.product.gallery[0] },
                            }),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-8 col-xl-9 p-3 ps-sm-0" },
                            [
                              _c("div", { staticClass: "mb-4" }, [
                                _c("div", { staticClass: "d-flex" }, [
                                  _c("p", {
                                    staticClass: "me-auto mb-0",
                                    domProps: {
                                      textContent: _vm._s(item.product.title),
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "flex-shrink-0 fw-medium" },
                                    [
                                      item.product.discount
                                        ? _c("del", {
                                            staticClass: "text-muted me-1",
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.getFormatedPrice(
                                                  item.product.price
                                                )
                                              ),
                                            },
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      item.product.discount
                                        ? _c("span", {
                                            staticClass: "text-danger",
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.getFormatedPrice(
                                                  item.product.price,
                                                  item.product.discount
                                                )
                                              ),
                                            },
                                          })
                                        : _c("span", {
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.getFormatedPrice(
                                                  item.product.price
                                                )
                                              ),
                                            },
                                          }),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "text-muted",
                                  domProps: {
                                    textContent: _vm._s(item.product.sku),
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex align-items-center mb-4",
                                },
                                [
                                  _c("span", { staticClass: "me-3" }, [
                                    _vm._v("Size:"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      staticClass: "form-select input py-0",
                                      staticStyle: { "max-width": "70px" },
                                      attrs: { disabled: _vm.loading },
                                      on: {
                                        input: function ($event) {
                                          return _vm.size(item.id, $event)
                                        },
                                      },
                                    },
                                    _vm._l(item.product.sizes, function (s) {
                                      return s.qty !== null
                                        ? _c(
                                            "option",
                                            {
                                              key: s.id,
                                              attrs: { disabled: s.qty === 0 },
                                              domProps: {
                                                value: s.size_id,
                                                selected:
                                                  s.size_id === item.size_id,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(s.size.name) +
                                                  "\n\t\t\t\t\t\t\t\t\t"
                                              ),
                                            ]
                                          )
                                        : _vm._e()
                                    }),
                                    0
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-4" }, [
                                _c(
                                  "span",
                                  {
                                    staticClass: "pointer px-1",
                                    on: {
                                      click: function ($event) {
                                        return _vm.minus(item.id)
                                      },
                                    },
                                  },
                                  [_vm._v("-")]
                                ),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "px-2",
                                  domProps: { textContent: _vm._s(item.qty) },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "pointer px-1",
                                    on: {
                                      click: function ($event) {
                                        return _vm.plus(item.id)
                                      },
                                    },
                                  },
                                  [_vm._v("+")]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "d-flex" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary ms-auto",
                                    attrs: {
                                      type: "button",
                                      disabled: _vm.loading,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteFromBag(item.id)
                                      },
                                    },
                                  },
                                  [_vm._v("DELETE")]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  )
                }),
            _vm._v(" "),
            _vm.bag.length !== 0
              ? _c("div", { staticClass: "row g-0" }, [
                  _c("div", { staticClass: "col-lg-8 col-xl-7 border" }, [
                    _c("div", { staticClass: "p-3" }, [
                      _c("div", { staticClass: "d-flex" }, [
                        _c("span", { staticClass: "text-muted me-auto" }, [
                          _vm._v("Subtotal:"),
                        ]),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "fw-medium text-end",
                          domProps: {
                            textContent: _vm._s(
                              _vm.getFormatedPrice(_vm.getBagTotal)
                            ),
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex" }, [
                        _c("span", { staticClass: "text-muted me-auto" }, [
                          _vm._v("Shipping:"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "fw-medium text-end" }, [
                          _vm._v(
                            _vm._s(_vm.getFormatedPrice(_vm.shipping)) +
                              " (via FedEx Express Worldwide)"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex mb-2" }, [
                        _c("span", { staticClass: "text-muted me-auto" }, [
                          _vm._v("VAT:"),
                        ]),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "fw-medium text-end",
                          domProps: {
                            textContent: _vm._s(_vm.getFormatedPrice(_vm.vat)),
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex mb-3" }, [
                        _c("span", { staticClass: "text-muted me-auto" }, [
                          _vm._v("Total:"),
                        ]),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "text-danger fw-medium text-end",
                          domProps: {
                            textContent: _vm._s(
                              _vm.getFormatedPrice(
                                _vm.getBagTotal + _vm.shipping + _vm.vat
                              )
                            ),
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-grid" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary py-3",
                            attrs: { type: "button" },
                          },
                          [_vm._v("CHECKOUT")]
                        ),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
          ],
          2
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=template&id=466c3607&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", [
        _c("title", [_vm._v(_vm._s(_vm.collection.title))]),
        _vm._v(" "),
        _c("meta", {
          attrs: {
            "head-key": "description",
            name: "description",
            content: _vm.collection.description,
          },
        }),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "py-5" }, [
        _c("div", { staticClass: "container" }, [
          _c("h1", [_vm._v(_vm._s(_vm.collection.title) + " . The movie")]),
          _vm._v(" "),
          _c("div", { staticClass: "video mb-4" }, [
            _c("div", { staticClass: "iframe" }, [
              _c("iframe", {
                attrs: {
                  width: "100%",
                  height: "100%",
                  src: "https://www.youtube.com/embed/" + _vm.video,
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("p", {
            staticClass: "fs-5 text-center px-0 px-sm-5",
            domProps: { textContent: _vm._s(_vm.collection.description) },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-around mb-4" },
            [
              _c(
                "l",
                {
                  staticClass: "btn btn-outline-dark py-3",
                  attrs: { href: _vm.route("looks", _vm.collection.id) },
                },
                [_vm._v("SEE ALL LOOKS")]
              ),
              _vm._v(" "),
              _c(
                "l",
                {
                  staticClass: "btn btn-outline-dark py-3",
                  attrs: {
                    href: _vm.route("shop", {
                      collections: [_vm.collection.id],
                    }),
                  },
                },
                [_vm._v("SHOP COLLECTION")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-6" }, [
              _c("img", {
                staticClass: "d-block w-100 mb-1",
                attrs: { src: _vm.collection.gallery[0] },
              }),
              _vm._v(" "),
              _c("img", {
                staticClass: "d-block w-100",
                attrs: { src: _vm.collection.gallery[1] },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("img", {
                staticClass: "d-block w-100",
                attrs: { src: _vm.collection.gallery[2] },
              }),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Contact Us" } }),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary pb-5" }, [
        _c("div", { staticClass: "container py-5" }, [
          _c("p", { staticClass: "fs-2" }, [_vm._v("CONTACT US")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Thank you for reaching out. We would be glad to help you and assist you about any request. Please fill the form below."
            ),
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.send.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row gy-4" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("label", [_vm._v("FULL NAME*")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "text-danger",
                    domProps: { textContent: _vm._s(_vm.form.errors.name) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("label", [_vm._v("EMAIL*")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "text-danger",
                    domProps: { textContent: _vm._s(_vm.form.errors.email) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("label", [_vm._v("TOPIC*")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.topic,
                          expression: "form.topic",
                        },
                      ],
                      staticClass: "form-select border shadow-none py-3",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "topic",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    _vm._l(_vm.topics, function (t) {
                      return _c("option", {
                        key: Math.random(),
                        domProps: { value: t, textContent: _vm._s(t) },
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "text-danger",
                    domProps: { textContent: _vm._s(_vm.form.errors.topic) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.message,
                        expression: "form.message",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      rows: "6",
                      placeholder:
                        "Type here (if your request is about orders, shipping, returns don’t forget to include the orders number)",
                    },
                    domProps: { value: _vm.form.message },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "message", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("small", {
                    staticClass: "text-danger",
                    domProps: { textContent: _vm._s(_vm.form.errors.message) },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    { staticClass: "d-grid d-sm-flex align-items-sm-center" },
                    [
                      _c("p", { staticClass: "me-auto" }, [
                        _vm._v("Required fields are marked*"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary px-4 py-3",
                          attrs: {
                            type: "submit",
                            disabled: _vm.form.processing,
                          },
                        },
                        [_vm._v("SEND")]
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "row gy-4" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("p", { staticClass: "fw-medium mb-0" }, [
                        _vm._v("YOU CAN USE MORE WAYS TO REACH US OUT"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-lg-3" }, [
                      _c("div", { staticClass: "d-grid" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-light py-3",
                            attrs: { href: "mailto:" + _vm.settings.email },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/mail.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("EMAIL US")]),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-lg-3" }, [
                      _c("div", { staticClass: "d-grid" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-light py-3",
                            attrs: {
                              href: "https://wa.me/" + _vm.settings.whatsapp,
                              target: "_blank",
                            },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/chat.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("CHAT WITH US")]),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 col-lg-3" }, [
                      _c("div", { staticClass: "d-grid" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-light py-3",
                            attrs: { href: "tel:" + _vm.settings.phone },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/phone.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("CALL US")]),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v(
                          "Calls available every day from 9 am to 10 pm [GMT+1], English, French and Arabic."
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=template&id=051306b8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Customer Care" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "sizeModal", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("AFYLA SIZE"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [_c("FindSize")], 1),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary p-3 p-sm-5" }, [
        _c("h1", { staticClass: "fs-2 mb-4" }, [_vm._v("CUSTOMER CARE")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4 col-lg-3 pb-5 pb-sm-0" }, [
            _c("ul", { staticClass: "nav flex-column" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#follow-order",
                    },
                  },
                  [_vm._v("Follow your order")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#follow-return",
                    },
                  },
                  [_vm._v("Follow your return")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#shopping",
                    },
                  },
                  [_vm._v("Shopping")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#orders",
                    },
                  },
                  [_vm._v("Orders & pre-order")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#size",
                    },
                  },
                  [_vm._v("Find your size")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#shipping",
                    },
                  },
                  [_vm._v("Shipping")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#returns",
                    },
                  },
                  [_vm._v("Returns & refunds")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#payment",
                    },
                  },
                  [_vm._v("Payment")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#account",
                    },
                  },
                  [_vm._v("My account")]
                ),
              ]),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("l", { attrs: { href: _vm.route("faq") } }, [
                    _vm._v("FAQs"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("l", { attrs: { href: _vm.route("contact") } }, [
                    _vm._v("Contact Us"),
                  ]),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-8 col-lg-9" }, [
            _c(
              "div",
              { staticClass: "tab-content", attrs: { id: "nav-tabContent" } },
              [
                _c("div", { staticClass: "tab-pane fade show active" }, [
                  _c("div", { staticClass: "row gy-4" }, [
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        staticStyle: { opacity: ".6" },
                        attrs: { src: "/img/icons/truck.png", width: "124px" },
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mb-0" },
                        [
                          _c(
                            "l",
                            {
                              attrs: {
                                href: _vm.route(
                                  "page",
                                  "shipping-returns-policy"
                                ),
                              },
                            },
                            [_vm._v("Free shipping & returns")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        staticStyle: { opacity: ".6", transform: "scale(.75)" },
                        attrs: { src: "/img/icons/secure.png", width: "124px" },
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mb-0" },
                        [
                          _c("l", { attrs: { href: "#" } }, [
                            _vm._v("Secure & diverse payment"),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        staticStyle: { opacity: ".6", transform: "scale(.85)" },
                        attrs: { src: "/img/icons/mobile.png", width: "124px" },
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mb-0" },
                        [
                          _c("l", { attrs: { href: "#" } }, [
                            _vm._v("Available 7 /7"),
                          ]),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        staticStyle: { opacity: ".6" },
                        attrs: {
                          src: "/img/icons/sustainability.png",
                          width: "124px",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mb-0" },
                        [
                          _c(
                            "l",
                            { attrs: { href: _vm.route("sustainability") } },
                            [_vm._v("Sustainability")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        attrs: {
                          src: "/img/icons/empowering.png",
                          width: "114px",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("Empowering"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4 text-center" }, [
                      _c("img", {
                        staticClass: "mb-2",
                        staticStyle: { opacity: ".6", transform: "scale(1.2)" },
                        attrs: {
                          src: "/img/icons/quality.png",
                          width: "124px",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted mb-0" }, [
                        _vm._v("High quality"),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade",
                    attrs: { id: "follow-order" },
                  },
                  [
                    _c("p", { staticClass: "fw-medium mb-2" }, [
                      _vm._v(
                        "Enter your order number to see all the details and information."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-10 mb-2 mb-sm-0" }, [
                        _c("input", {
                          staticClass: "form-control bg-primary border-dark",
                          attrs: { type: "text" },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("div", { staticClass: "d-grid" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-dark",
                              attrs: { type: "button" },
                            },
                            [_vm._v("SEARCH")]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticClass: "tab-pane fade",
                  attrs: { id: "follow-return" },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "shopping" } },
                  [
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("SHOPPING"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "To make a purchase in www.afylaworld.com you don’t need to register, however we suggest you create an account to access exclusive areas and services dedicated to our customers. You can browse our home page and discover the product categories we have and that lead you to our online shops."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _c("i", { staticClass: "bi bi-search" }),
                      _vm._v(" SEARCH"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "You can also use our search tool located the head of all the pages. You easily click on the search button and type the item’s name you are looking for.. We offer you suggestions of each shop we have, before even writing something. We use a very advanced search feature to make it easier for you"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _c("i", { staticClass: "bi bi-list" }),
                      _vm._v(" MENU"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "In our menu tab, you can find the different shops we have."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“WHAT’S NEW” is the link to a listing all the newest products and last arrivals."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“SPECIAL PRICES” is the link to a listing of all the products with a special offer or promotion."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“VIEW ALL” is the link to a listing of all the products we have in store."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“COATS & JACKETS” is the link to a listing of the coats, blazers, and any type of jackets."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“SHIRTS & TOPS” is the link to a listing of the shirts and any kind of tops."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“DRESSES” is the link to a listing of the short, long and mid dresses."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“SKIRTS” is the link to a listing of the short, long and mid skirts."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "“PANTS” is the link to a listing of all kind of pants."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "In every shop, you can use filters, or sort your listing to make it easier for you to find what you need. You can sort by price, newness or name. You can add filters such as a specific materials, colors or sizes . You can also choose to list only a specific sub-category."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("PRODUCT PAGE"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Once you select a product, you will find all available sizes, the different colors, the compositions and a description in the product page. You will also find pictures, able to be zoomed, and in different forms to see all the details. For each product, you’ll find a product card describing any further information and product detail. You’ll find also a reminder of our packaging, our payment methods, our shipping&returns policy and contact information. At the bottom of the page, you’ll find similar products that you may like too."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("PURCHASE"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "1. Select the size and the color of the product you want to purchase."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "2. Make sure to read our shipping and return policy."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "3. You can choose either to shop more or checkout. If you want to shop more you can easily comeback to all the shops and your item will be saved in your shopping bag."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "4. Once you have finished your shopping click on the shopping bag button "
                      ),
                      _c("img", {
                        attrs: { src: "/img/icons/bag.png", height: "23px" },
                      }),
                      _vm._v(" , then click on “CHECKOUT”."),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "5. You can register, login if you have already an account in our website, or continue as a guest."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "6. Enter the required information and make sure it’s correct."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "7. After choosing your payment and checking that the information you entered are correct you can proceed."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "8. You will receive a confirmation mail with all the details for delivery."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _c("i", { staticClass: "bi bi-heart" }),
                      _vm._v(" WISHLIST"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "You can add items you liked or you want to shop in future to your wishlist by clicking on the heart button. You can consult them whenever you need which make them easier to be found for next time."
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "orders" } },
                  [
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("ORDER"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Once you have a AFYLA account, you can consult all your previous orders in the orders section. You’ll find a table that contains various information of each order including Order’s number, amount, statuts, etc.."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "You can find different order’s status that represent the process of the purchase."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _c("span", { staticClass: "fw-medium" }, [
                        _vm._v("Processing:"),
                      ]),
                      _vm._v(
                        " Your order has been confirmed; we have already sent you a confirmation email with all the information and your tracking number."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _c("span", { staticClass: "fw-medium" }, [
                        _vm._v("In shipping:"),
                      ]),
                      _vm._v(
                        " Your order is shipped from our warehouse; you can use your tracking number on www.fedex.com to track your order."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _c("span", { staticClass: "fw-medium" }, [
                        _vm._v("Delivered:"),
                      ]),
                      _vm._v(" You received your order."),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("span", { staticClass: "fw-medium" }, [
                        _vm._v("Cancelled:"),
                      ]),
                      _vm._v(
                        " You are allowed to cancel your order at anytime before the shipping stage."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("PRE-ORDER"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "AFYLA gives you the opportunity to pre-order a selection of products before their launching day, if they are sold out, or any articles for which a pre-order is possible on the website. Your order will be shipped when ready. You’ll be charged only when the product is ready and shipped. Once your order will be shipped, we will send you an email with the tracking number of the package and all the products details."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("ORDER & PRE-ORDER"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "If your purchase contains both pre-ordered products and available products. Our team will contact you and ask you either to ship the available products first and then ship again the pre-ordered ones when available, or to wait for pre-ordered product to be available, then ship all the products together."
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "size" } },
                  [_c("FindSize")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "shipping" } },
                  [
                    _c("p", { staticClass: "fw-medium" }, [_vm._v("SHIPPING")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "We offer free shipment to our customers and we take care of the customs clearance for countries in the E.U., U.S., U.K., U.A.E. and Morocco."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "We work with FedEx Express Worldwide as a third party. Once the order is confirmed, you will be informed as soon as the goods are ready for shipping."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "You can follow your order using the tracking number in www.fedex.com or using your account in our website www.afylaworld.com"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Shipping timing may vary from country to another. Delivery times begin one business day after the order is placed."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("Read more in our Shipping & Returns policy."),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "returns" } },
                  [
                    _c("p", { staticClass: "fw-medium" }, [
                      _vm._v("RETURNS & REFUNDS"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "You may exchange the items purchased from www.afylaworld.com within 15 days of receipt of your purchase. AFYLA will cover the shipping costs to our warehouse and you main free of charge. Please follow these four steps:"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "1.Contact us: Our team of advisors will assist you on the return by offering a complete service or pick up by the courier company. They will also provide the documents needed by email. Contact us by choosing the subject “Returns”. You can also email or call us."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "2.Complete the questions in the form: You will receive a “Return form” with questions on it. You should complete them and include the form in the packaging."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "3.Prepare the packaging: Including the return form completed and with the documents requested by our advisors team."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "4.Give the package to the courier: We will contact the courier to schedule a pickup and shipment of your return or We can hand you the courier’s contact an arrange a pick up that will suit you better. Or You can drop the package off at Our carrier shipping location. All returns shipped using the prepaid shipping label is complimentary."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Once the parcel arrives at our warehouse, it will be checked by our quality control team. After approval AFYLA will refund the amount paid to the card which you made the payment, This process may take up to 15 days."
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _vm._v("Read more in our "),
                        _c(
                          "l",
                          {
                            attrs: {
                              href: _vm.route(
                                "page",
                                "shipping-returns-policy"
                              ),
                            },
                          },
                          [_vm._v("Shipping & Returns policy")]
                        ),
                        _vm._v("."),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "payment" } },
                  [
                    _c("p", { staticClass: "fw-medium" }, [_vm._v("PAYMENT")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("AFYLA accepts:")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row gx-0 mb-3" }, [
                      _c("div", { staticClass: "col-sm-4 col-lg-3 col-xl-2" }, [
                        _c("img", {
                          attrs: {
                            src: "/img/icons/mastercard.png",
                            width: "64px",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 col-lg-3 col-xl-2" }, [
                        _c("img", {
                          attrs: { src: "/img/icons/visa.png", width: "64px" },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 col-lg-3 col-xl-2" }, [
                        _c("img", {
                          attrs: {
                            src: "/img/icons/paypal.png",
                            width: "64px",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 col-lg-3 col-xl-2" }, [
                        _c("img", {
                          attrs: {
                            src: "/img/icons/applepay.png",
                            width: "64px",
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 col-lg-3 col-xl-2" }, [
                        _c("img", {
                          attrs: {
                            src: "/img/icons/afterpay.png",
                            width: "64px",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Payment will include only the price of the products. The costs of the shipping and delivery are totally free. Under no circumstances will You be charged more than the product price relative to the payment method chosen by You."
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping."
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "account" } },
                  [
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("MY ACCOUNT"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Creating an account in AFYLA’s website will give you the opportunity to access to exclusive services, such as:"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("1. Saving your wishlist;"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("2. Following and accessing all your orders;"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("3. Access to private sales;"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("4. Priority for pre-sales;"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "5. Access to promotions reserved exclusively for our members;"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("6. Fast checkouts;"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("7. More personalized customer experience."),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "fw-medium mb-0" }, [
                      _vm._v("NEWSLETTER"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("By subscribing to our newsletter, you can:"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "1. Be informed among the first about our latest news;"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("2. Receive our style tips;"),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "3. Be informed about our sustainable practices and how you can engage in a more ethical life;"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("4. Be informed about special events;"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "5. Receive our recommended tips that can help you achieve self-empowerment."
                      ),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=template&id=0484b006&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Faq" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "sizeModal", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("AFYLA SIZE"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [_c("FindSize")], 1),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary p-3 p-sm-5" }, [
        _c("h1", { staticClass: "fs-2 mb-4" }, [_vm._v("FAQ")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4 col-lg-3 pb-5 pb-sm-0" }, [
            _c("ul", { staticClass: "nav flex-column" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "active",
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#orders",
                    },
                  },
                  [_vm._v("Orders & pre-order")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#returns",
                    },
                  },
                  [_vm._v("Returns")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#shopping",
                    },
                  },
                  [_vm._v("Shopping")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#size",
                    },
                  },
                  [_vm._v("Find your size")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#shipping",
                    },
                  },
                  [_vm._v("Shipping")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#payment",
                    },
                  },
                  [_vm._v("Payment")]
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "#",
                      "data-bs-toggle": "tab",
                      "data-bs-target": "#account",
                    },
                  },
                  [_vm._v("My account")]
                ),
              ]),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("l", { attrs: { href: _vm.route("contact") } }, [
                    _vm._v("Contact Us"),
                  ]),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-8 col-lg-9" }, [
            _c(
              "div",
              { staticClass: "tab-content", attrs: { id: "nav-tabContent" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade show active",
                    attrs: { id: "orders" },
                  },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• How do I know that my order is accepted by AFYLA ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "Once you made an order, a confirmation mail will be sent to you. Check your mailbox and you can "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(" for any additional information."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Why can’t I complete my order ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "If you notice any technical problem, you can "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " and we will provide for you a shopping assistant. Until an order is concluded, items added to your Bag remain available on the website and can therefore be purchased by other customers. If this should happen before you complete your order, the item might be not available anymore."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Can I cancel of modify or add an item to my order ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can cancel your order anytime before shipping. But once an order has been confirmed and held for shipment, it is processed automatically and cannot be canceled."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "The package can be returned as indicated in our "
                                ),
                                _c(
                                  "l",
                                  {
                                    attrs: {
                                      href: _vm.route(
                                        "page",
                                        "shipping-returns-policy"
                                      ),
                                    },
                                  },
                                  [_vm._v("Shipping & Returns Policy")]
                                ),
                                _vm._v("."),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Unfortunately you cannot add a new item to an order already purchased. Each order is processed automatically and once it has been confirmed, it is not possible to modify the details. To purchase additional items, you must place a new order."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "You can modify the size of an item only if the order is not held to shipment yet."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I follow my order ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can check the status of your order at any time on the Follow your order page."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I didn’t receive any order confirmation in more than 24 hours, what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "Check your spam folder and make sure that "
                              ),
                              _c("a", {
                                attrs: { href: "mailto:" + _vm.settings.email },
                                domProps: {
                                  textContent: _vm._s(_vm.settings.email),
                                },
                              }),
                              _vm._v(
                                " is in the safe senders list of your email account."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "This will prevent the anti-spam filter from blocking future communications."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v("If this doesn't work please "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " as there may be errors with the email address you registered with."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How do promotional codes work ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "Promotional Codes allow you to enjoy exclusive initiatives and promotions. If you are signed up for our newsletter, you will receive regular Promotional Codes for all active promotions. The code can only be used on one order. You can enter it on the promotional code section on the Checkout. If the code doesn’t work, check the date and validity, as well as which items and categories the newsletter received says are covered by the promotion."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• What is a pre-order and how does it work ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "AFYLA gives you the opportunity to pre-order a selection of products before their launching day, if they are sold out, or any articles for which a pre-order is possible on the website. Your order will be shipped when ready. You’ll be charged only when the product is ready and shipped. Once your order will be shipped, we will send you an email with the tracking number of the package and all the products details."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "returns" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• How can I return a product I purchased ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v("Please follow these four steps:"),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "1. Contact us: Our team of advisors will assist you on the return by offering a complete service or pick up by the courier company's. They will also provide the documents needed by email. Contact us by choosing the subject “Returns”. You can also email or call us."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "2. Complete the questions in the form: You will receive a “Return form” with questions on it. You should complete them and include the form in the packaging."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "3. Prepare the packaging: Including the return form completed and with the documents requested by our advisors team."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "4. Give the package to the courier: We will contact the courier to schedule a pickup and shipment of your return or We can hand you the courier’s contact an arrange a pick up that will suit you better. Or You can drop the package off at Our carrier shipping location. All returns shipped using the prepaid shipping label is complimentary."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Can I exchange or return an item gifted to me by someone else ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "Yes, you can exchange or return an item gifted only within 15 days from receiving the order. You make sure that the item is in the same condition as sent, with its invoice, labeling and packaging. Then, you can "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(" to complete the return process."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How many days to return a product ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "You may exchange the items purchased from "
                                ),
                                _c("l", {
                                  attrs: { href: "/" },
                                  domProps: {
                                    textContent: _vm._s(_vm.route("home")),
                                  },
                                }),
                                _vm._v(
                                  " within 15 days of receipt of your purchase. AFYLA will cover the shipping costs to our warehouse and you main free of charge."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I follow my return ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can check the status of your order at any time on the Follow your return page."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I didn’t receive any return confirmation in more than 24 hours, what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "Check your spam folder and make sure that "
                                ),
                                _c("a", {
                                  attrs: {
                                    href: "mailto:" + _vm.settings.email,
                                  },
                                  domProps: {
                                    textContent: _vm._s(_vm.settings.email),
                                  },
                                }),
                                _vm._v(
                                  " is in the safe senders list of your email account. This will prevent the anti-spam filter from blocking future communications. If this doesn't work please "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " as there may be errors with the email address you registered with."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• When do I receive my refund ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "Once the parcel arrives at our warehouse, it will be checked by our quality control team. After approval AFYLA will refund the amount paid to the card which you made the payment, This process may take up to 15 days. Read more in our "
                                ),
                                _c(
                                  "l",
                                  {
                                    attrs: {
                                      href: _vm.route(
                                        "page",
                                        "shipping-returns-policy"
                                      ),
                                    },
                                  },
                                  [_vm._v("Shipping & Returns Policy")]
                                ),
                                _vm._v("."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• When the article is not accepted for return ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "The returned item should be in the same condition as sent by AFYLA. Please make sure to keep all the labelings, the packaging and everything sent with it until you are completely sure that you won’t return it."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I decided to keep my order, but I have already completed the return form. What should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "We are glad you have decided to keep your purchase. If the return is already shipped, please "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " to provide with required help. If not, there is no need to contact us."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Can I combine returns form different orders ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "Unfortunately no, we use a return form for each order. So if you want to return items from the different orders, you need to fill out multiple return forms."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Where is my return ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "If you want to track your return, you can use the tracking number received by mail. Once we receive the returned item, we will inform you and keep you updated during the process of examination and when refunded."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I lost my return form what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v("Dont worry, just "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " and we will provide you with the help needed"
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I lost my invoice and I don’t remember my orders number, what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v("You can "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " and we will provide you with the help needed."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "shopping" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Where can I shop ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v("You can shop via our website’s store "),
                                _c("l", {
                                  attrs: { href: _vm.route("shop") },
                                  domProps: {
                                    textContent: _vm._s(_vm.route("shop")),
                                  },
                                }),
                                _vm._v(
                                  ". Or you can shop by contacting us on our social media platforms ( "
                                ),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.instagram,
                                      target: "_blank",
                                    },
                                  },
                                  [_vm._v("INSTAGRAM")]
                                ),
                                _vm._v(", "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.facebook,
                                      target: "_blank",
                                    },
                                  },
                                  [_vm._v("Facebook")]
                                ),
                                _vm._v(" ), on our "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "https://wa.me/" +
                                        _vm.settings.whatsapp,
                                      target: "_blank",
                                    },
                                  },
                                  [_vm._v("WhatsApp")]
                                ),
                                _vm._v(", "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.settings.wechat,
                                      target: "_blank",
                                    },
                                  },
                                  [_vm._v("WeChat")]
                                ),
                                _vm._v(" or by calling us "),
                                _c("a", {
                                  attrs: { href: "tel:" + _vm.settings.phone },
                                  domProps: {
                                    textContent: _vm._s(_vm.settings.phone),
                                  },
                                }),
                                _vm._v("."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Do you offer a shopping assistance ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "Yes, we have a shopping assistant service. You can "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(" and we will happily assist you."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Where can I try an item before purchasing it ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "We have a “Try before you buy “ service in Paris only. You can book an appointment so we can deliver an item to your house with our assistant and you can try it even before the purchase."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Unfortunately, for other countries this service is not available yet. But we do offer free returns and refunds."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Do you have any physical store ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "Unfortunately no, we are completely digital."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "size" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I know my size ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v("You can consult our "),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "#size",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#sizeModal",
                                  },
                                },
                                [_vm._v("Find your size")]
                              ),
                              _vm._v(
                                " page with measurements table in cm and inches for each type of garment, including different country sizes and a guide showing you how to take measurements."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I chose the size I normally wear but it didn’t fit me, what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "You may exchange any item purchased from "
                                ),
                                _c("l", {
                                  attrs: { href: "/" },
                                  domProps: {
                                    textContent: _vm._s(_vm.route("home")),
                                  },
                                }),
                                _vm._v(
                                  " within 15 days of receipt of your purchase. "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " to provide you with the required assistant."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "shipping" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Which shipping options are available and what is the cost ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "We are partners with FedEx Worldwide express. And we offer free shipping."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "If you want to choose your own shipping method, please "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v("."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I track my order ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can track your order via the FedEx Worldwide express website."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "If you want to choose your own shipping method, please "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v("."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Can I modify my shipping address ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v("You can "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " and will provide you with the help required."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• What should I do if my order hasn’t been delivered yet ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "You can track your order via the Tracking number you received on "
                                ),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://www.fedex.com",
                                      target: "_blank",
                                    },
                                  },
                                  [_vm._v("fedex.com")]
                                ),
                                _vm._v(". You can also "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " to assist you with the help you require."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Can I program a delivery ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " so we can assist you with help you require"
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "payment" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• When will my credit card be charged ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "The full transaction value will be charged to your credit card after we have verified your card details, received credit authorization, confirmed availability and prepared your order for shipping."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• Why did you charged me twice even though I only placed one order ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "It must be a technical problem. Please "
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(" so we can refund you immediately."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Which form of payment do you accept ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [_vm._v("AFYLA accepts:")]),
                            _vm._v(" "),
                            _c("p", [_vm._v("Credit Card: Visa, MasterCard.")]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "PayPal: Shop easily online without having to enter your credit card details on the website."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Your account will be charged once the order is completed."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Who pays the customs duties ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "The prices of products are expressed in U.S. dollars inclusive of taxes and duties for Europe, U.S., Morocco and UAE. Our delivery costs are flat and there are no extra costs at delivery."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "For other parts of the world, the prices of products are expressed in U.S. dollars inclusive of taxes, but all applicable duties shall be borne by the customer. Unfortunately We cannot estimate how much duties You will pay but your local customs should be able to estimate the price."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "tab-pane fade", attrs: { id: "account" } },
                  [
                    _c("div", { staticClass: "accordion" }, [
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I create an account on AFYLA ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can create an account by clicking on the login icon on the header of our website. Once you entered your information, your account will be automatically created."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I delete my account ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v("You can "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  ", and we will delete it for you. We remind you that your account hold all your information, order history and whatever you save to your wishlist. By deleting your account, all of these information will be destroyed."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• Can I trust entering my password ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "The password you enter for your account is registered in our database in an encrypted form. Even AFYLA team, won’t be able to access to your account and will never know your password."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• I cannot log to my account ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  'If our website does not recognize your email address or password, verify the data you entered. If you forgot your password, click the "Forgot your password?" link on the Login page and follow the procedure to change it. For further assistance, '
                                ),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(", we will be happy to assist you."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• I don’t receive your Newsletter, what should I do ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "Make sure that you are subscribed to our newsletter. In order to do that, go to the profile section of your account, and verify if the box “Unsubscribe to our newsletter” is not checked."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v("If it is the case, then please "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(
                                  " and we will immediately verify the problem and add you to the Newsletter."
                                ),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v("• How can I subscribe to the Newsletter ?"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "To subscribe to our newsletter, you can enter your mail in the “JOIN OUR COMMUNITY” pop up, or you can enter your mail in the “Newsletter” section in the footer of each page."
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ac" }, [
                        _c("div", { staticClass: "ac-header" }, [
                          _c("span", { staticClass: "ac-trigger" }, [
                            _vm._v(
                              "• How can I unsubscribe to the Newsletter ?"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ac-panel" }, [
                          _c("div", { staticClass: "ac-text text-muted" }, [
                            _c("p", [
                              _vm._v(
                                "You can unsubscribe to our newsletter. In order to do that, go to the profile section of your account, and check the “Unsubscribe to our newsletter” box."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v("If you don’t have an account, "),
                                _c(
                                  "l",
                                  { attrs: { href: _vm.route("contact") } },
                                  [_vm._v("Contact Us")]
                                ),
                                _vm._v(" and we will unsubscribe you."),
                              ],
                              1
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Home" } }),
      _vm._v(" "),
      _c("section", [
        _c(
          "div",
          {
            staticClass: "carousel slide overflow-hidden",
            attrs: { id: "slider", "data-bs-ride": "carousel" },
          },
          [
            _c("div", { staticClass: "carousel-inner" }, [
              _c("div", { staticClass: "carousel-item h-100 active" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/slider-1.jpg" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "carousel-caption" }, [
                  _c("p", { staticClass: "fs-2 fw-bold w-50" }, [
                    _vm._v("METAMORPHOSIS WINTER 22-23"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "l",
                        {
                          staticClass:
                            "btn btn-outline-light btn-lg border-4 px-4",
                          attrs: { href: "#" },
                        },
                        [_vm._v("SHOP NOW")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "carousel-item h-100" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/slider-2.jpg" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "carousel-caption" }, [
                  _c("p", { staticClass: "fs-2 fw-bold w-50" }, [
                    _vm._v("SUSTAINABILITY"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "l",
                        {
                          staticClass:
                            "btn btn-outline-light btn-lg border-4 px-4",
                          attrs: { href: "#" },
                        },
                        [_vm._v("DISCOVER MORE")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "carousel-item h-100" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/slider-3.jpg" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "carousel-caption" }, [
                  _c("p", { staticClass: "fs-2 fw-bold w-50" }, [
                    _vm._v("OUR WORLD"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "l",
                        {
                          staticClass:
                            "btn btn-outline-light btn-lg border-4 px-4",
                          attrs: { href: "#" },
                        },
                        [_vm._v("DISCOVER MORE")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "carousel-control-prev",
                attrs: {
                  type: "button",
                  "data-bs-target": "#slider",
                  "data-bs-slide": "prev",
                },
              },
              [
                _c("span", {
                  staticClass: "carousel-control-prev-icon",
                  attrs: { "aria-hidden": "true" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v("Previous"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "carousel-control-next",
                attrs: {
                  type: "button",
                  "data-bs-target": "#slider",
                  "data-bs-slide": "next",
                },
              },
              [
                _c("span", {
                  staticClass: "carousel-control-next-icon",
                  attrs: { "aria-hidden": "true" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "visually-hidden" }, [
                  _vm._v("Next"),
                ]),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary py-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-between" }, [
            _c("div", { staticClass: "col-md-6 col-xl-5 p-2" }, [
              _c(
                "div",
                { staticClass: "category" },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: { src: "/img/home/coats.jpg" },
                  }),
                  _vm._v(" "),
                  _c(
                    "l",
                    {
                      staticClass: "overlay",
                      attrs: { href: _vm.route("shop") },
                    },
                    [
                      _c("span", { staticClass: "fs-5 fw-bolder text-white" }, [
                        _vm._v("DISCOVER OUR COATS & JACKETS"),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-xl-5 p-2" }, [
              _c(
                "div",
                { staticClass: "category" },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: { src: "/img/home/pants.jpg" },
                  }),
                  _vm._v(" "),
                  _c(
                    "l",
                    {
                      staticClass: "overlay",
                      attrs: { href: _vm.route("shop") },
                    },
                    [
                      _c("span", { staticClass: "fs-5 fw-bolder text-white" }, [
                        _vm._v("DISCOVER OUR PANTS & SHORTS"),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-xl-5 p-2" }, [
              _c(
                "div",
                { staticClass: "category" },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: { src: "/img/home/dresses.jpg" },
                  }),
                  _vm._v(" "),
                  _c(
                    "l",
                    {
                      staticClass: "overlay",
                      attrs: { href: _vm.route("shop") },
                    },
                    [
                      _c("span", { staticClass: "fs-5 fw-bolder text-white" }, [
                        _vm._v("DISCOVER OUR DRESSES"),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-xl-5 p-2" }, [
              _c(
                "div",
                { staticClass: "category" },
                [
                  _c("img", {
                    staticClass: "d-block w-100",
                    attrs: { src: "/img/home/skirts.jpg" },
                  }),
                  _vm._v(" "),
                  _c(
                    "l",
                    {
                      staticClass: "overlay",
                      attrs: { href: _vm.route("shop") },
                    },
                    [
                      _c("span", { staticClass: "fs-5 fw-bolder text-white" }, [
                        _vm._v("DISCOVER OUR SKIRTS"),
                      ]),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=template&id=aa40d84a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: _vm.looks[0].collection.title } }),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "py-5", staticStyle: { "margin-bottom": "120px" } },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row gy-4" },
              _vm._l(_vm.looks, function (item) {
                return _c(
                  "div",
                  { key: Math.random(), staticClass: "col-sm-6 col-lg-4" },
                  [
                    _c("img", {
                      staticClass: "d-block w-100",
                      attrs: { src: item.img },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-center py-3" },
                      [
                        _c("span", {
                          staticClass: "me-auto",
                          domProps: { textContent: _vm._s(item.title) },
                        }),
                        _vm._v(" "),
                        _c(
                          "l",
                          {
                            staticClass: "btn btn-sm btn-outline-dark",
                            attrs: {
                              href: _vm.route("shop", {
                                ids: item.products.map(function (i) {
                                  return i.product_id
                                }),
                              }),
                            },
                          },
                          [_vm._v("SHOP")]
                        ),
                      ],
                      1
                    ),
                  ]
                )
              }),
              0
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Orders.vue?vue&type=template&id=cebe0164& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "UserMenu",
    [
      _c("h", { attrs: { title: "Orders" } }),
      _vm._v(" "),
      _c("div", { staticClass: "px-3 px-sm-5 py-2" }, [
        _vm.orders.length === 0
          ? _c("div", [
              _c("p", { staticClass: "fw-medium text-center text-uppercase" }, [
                _vm._v("WELCOME BACK, "),
                _c("span", {
                  domProps: { textContent: _vm._s(_vm.auth.name) },
                }),
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("YOU HAVE NOT PLACED ANY ORDER")]),
            ])
          : _c("div", [
              _c("div", { staticClass: "mb-3" }, [
                _c("input", {
                  staticClass: "form-control border shadow-none",
                  attrs: { type: "text", placeholder: "search..." },
                }),
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table table-bordered border-secondary text-center",
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("ORDER N"),
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("AMOUNT")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("ADDRESS"),
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("DATE")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("PHONE")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("STATUS")]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [
                        _vm._v("DETAILS"),
                      ]),
                      _vm._v(" "),
                      _c("th", { attrs: { scope: "col" } }, [_vm._v("EDIT")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tbody", { staticClass: "border-top-0" }, [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td"),
                    ]),
                  ]),
                ]
              ),
            ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Page.vue?vue&type=template&id=8ace0b90& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: _vm.page.name } }),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary py-4" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "bg-white p-4" }, [
            _c("div", { staticClass: "text-end" }, [
              _c("img", {
                staticClass: "pointer",
                attrs: { src: "/img/icons/print.png", height: "32px" },
                on: { click: _vm.print },
              }),
            ]),
            _vm._v(" "),
            _c("div", { domProps: { innerHTML: _vm._s(_vm.page.content) } }),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordChange.vue?vue&type=template&id=1f387ad8& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "UserMenu",
    [
      _c("h", { attrs: { title: "Change Password" } }),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "px-3 px-sm-5",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.change.apply(null, arguments)
            },
          },
        },
        [
          _c("p", [_vm._v("CHANGE PASSWORD")]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.current_password,
                  expression: "form.current_password",
                },
              ],
              staticClass: "form-control border shadow-none py-3",
              attrs: { type: "password", placeholder: "CURRENT PASSWORD" },
              domProps: { value: _vm.form.current_password },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "current_password", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("small", {
              staticClass: "text-danger",
              domProps: { textContent: _vm._s(_vm.errors.current_password) },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.new_password,
                  expression: "form.new_password",
                },
              ],
              staticClass: "form-control border shadow-none py-3",
              attrs: { type: "password", placeholder: "NEW PASSWORD" },
              domProps: { value: _vm.form.new_password },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "new_password", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("small", {
              staticClass: "text-danger",
              domProps: { textContent: _vm._s(_vm.errors.new_password) },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.new_password_confirmation,
                  expression: "form.new_password_confirmation",
                },
              ],
              staticClass: "form-control border shadow-none py-3",
              attrs: { type: "password", placeholder: "CONFIRM PASSWORD" },
              domProps: { value: _vm.form.new_password_confirmation },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.form,
                    "new_password_confirmation",
                    $event.target.value
                  )
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex justify-content-end" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary px-5 py-3",
                attrs: { type: "submit", disabled: _vm.form.processing },
              },
              [_vm._v("SAVE")]
            ),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/PasswordReset.vue?vue&type=template&id=73e6829b& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Reset Password" } }),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary p-3 p-sm-5" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-8 col-lg-6" }, [
              _c(
                "form",
                {
                  staticClass: "px-3 px-sm-5",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.reset.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm.form.errors.token
                    ? _c("div", {
                        staticClass: "alert alert-danger",
                        attrs: { role: "alert" },
                        domProps: {
                          textContent: _vm._s(_vm.form.errors.token),
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password,
                          expression: "form.password",
                        },
                      ],
                      staticClass: "form-control border shadow-none py-3",
                      attrs: { type: "password", placeholder: "NEW PASSWORD" },
                      domProps: { value: _vm.form.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "password", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("small", {
                      staticClass: "text-danger",
                      domProps: { textContent: _vm._s(_vm.errors.password) },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation",
                        },
                      ],
                      staticClass: "form-control border shadow-none py-3",
                      attrs: {
                        type: "password",
                        placeholder: "CONFIRM PASSWORD",
                      },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-grid" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary px-5 py-3",
                        attrs: {
                          type: "submit",
                          disabled: _vm.form.processing,
                        },
                      },
                      [_vm._v("SAVE")]
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=template&id=e2dbd454&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", [
        _c("title", [_vm._v(_vm._s(_vm.product.title))]),
        _vm._v(" "),
        _c("meta", {
          attrs: {
            "head-key": "description",
            name: "description",
            content: _vm.product.overview,
          },
        }),
      ]),
      _vm._v(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.soldout,
            callback: function ($$v) {
              _vm.soldout = $$v
            },
            expression: "soldout",
          },
        },
        [
          _c("div", { staticClass: "text-center py-2" }, [
            _c("p", { staticClass: "fw-medium" }, [
              _vm._v("Unfortunately, this item is out of stock."),
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-secondary", attrs: { type: "button" } },
              [_vm._v("EMAIL WHEN AVAILABLE")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.done,
            callback: function ($$v) {
              _vm.done = $$v
            },
            expression: "done",
          },
        },
        [
          _c(
            "div",
            { staticClass: "text-center py-2" },
            [
              _c("p", { staticClass: "fw-medium" }, [
                _vm._v("This item has been added to your shopping bag."),
              ]),
              _vm._v(" "),
              _c(
                "l",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { href: _vm.route("bag") },
                },
                [_vm._v("VIEW MY BAG")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "sizeModal", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("AFYLA SIZE"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [_c("FindSize")], 1),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "helpModal", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header border-0" }, [
                _c(
                  "p",
                  { staticClass: "modal-title fw-medium ps-3 ms-auto mb-0" },
                  [_vm._v("HOW CAN WE HELP YOU ?")]
                ),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row gy-4" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-grid d-sm-block text-center" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "mailto:" + _vm.settings.email },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/mail.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("EMAIL US")]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-grid d-sm-block text-center" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: {
                              href: "https://wa.me/" + _vm.settings.whatsapp,
                              target: "_blank",
                            },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/chat.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("CHAT WITH US")]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-grid d-sm-block text-center" },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "tel:" + _vm.settings.phone },
                          },
                          [
                            _c("img", {
                              staticClass: "me-3",
                              attrs: {
                                src: "/img/icons/phone.png",
                                height: "26px",
                              },
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("CALL US")]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", { staticClass: "text-muted text-center" }, [
                      _vm._v(
                        "Our client advisors are available every day from 9 am to 10 pm [GMT+1] excluding holidays."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "pt-5" }, [
        _c("div", { staticClass: "container-fluid px-3 px-sm-5" }, [
          _c("div", { staticClass: "row gy-4" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c(
                "div",
                {
                  staticClass: "carousel carousel-dark slide",
                  attrs: {
                    id: "gallery",
                    "data-bs-ride": "carousel",
                    "data-bs-interval": "false",
                  },
                },
                [
                  _c(
                    "div",
                    { staticClass: "carousel-inner" },
                    _vm._l(_vm.product.gallery, function (img, i) {
                      return _c(
                        "div",
                        {
                          key: Math.random(),
                          staticClass: "carousel-item",
                          class: { active: i === 0 },
                        },
                        [
                          _c("img", {
                            staticClass: "d-block w-100 mx-auto",
                            attrs: { src: img },
                          }),
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "carousel-control-prev",
                      attrs: {
                        type: "button",
                        "data-bs-target": "#gallery",
                        "data-bs-slide": "prev",
                      },
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-prev-icon",
                        attrs: { "aria-hidden": "true" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "visually-hidden" }, [
                        _vm._v("Previous"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "carousel-control-next",
                      attrs: {
                        type: "button",
                        "data-bs-target": "#gallery",
                        "data-bs-slide": "next",
                      },
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-next-icon",
                        attrs: { "aria-hidden": "true" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "visually-hidden" }, [
                        _vm._v("Next"),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-7 col-xl-6" }, [
              _c("div", { staticClass: "d-flex flex-column flex-sm-row" }, [
                _c("h1", {
                  staticClass: "fs-2 me-sm-auto mb-0",
                  domProps: { textContent: _vm._s(_vm.product.title) },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex align-items-baseline flex-shrink-0" },
                  [
                    _c("span", { staticClass: "text-muted me-auto me-sm-3" }, [
                      _vm._v("REF: " + _vm._s(_vm.product.sku)),
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "pointer",
                        on: {
                          click: function ($event) {
                            return _vm.addToWishlist(_vm.product.id)
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "bi fs-3",
                          class: _vm.searchWishlist(_vm.product.id)
                            ? "bi-heart-fill text-danger"
                            : "bi-heart",
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", {
                staticClass: "mb-5",
                domProps: { textContent: _vm._s(_vm.product.overview) },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-baseline flex-wrap mb-4" },
                [
                  _c("span", { staticClass: "fw-medium me-sm-3" }, [
                    _vm._v("Size:"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.product.sizes, function (s) {
                    return s.qty !== null
                      ? _c(
                          "button",
                          {
                            key: Math.random(),
                            staticClass: "btn text-dark",
                            class: [
                              s.size_id === _vm.size
                                ? "btn-primary"
                                : "btn-link",
                            ],
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                _vm.size = s.size_id
                              },
                            },
                          },
                          [
                            s.qty === 0
                              ? _c("del", { staticClass: "text-muted" }, [
                                  _vm._v(_vm._s(s.size.name)),
                                ])
                              : _c("span", [_vm._v(_vm._s(s.size.name))]),
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "pointer underline ms-auto",
                      attrs: {
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#sizeModal",
                      },
                    },
                    [_vm._v("Find your size")]
                  ),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-items-baseline flex-column flex-sm-row mb-4",
                },
                [
                  _c("div", { staticClass: "fs-5 fw-medium me-3" }, [
                    _vm.product.discount
                      ? _c("span", {
                          staticClass: "text-danger me-1",
                          domProps: {
                            textContent: _vm._s(
                              _vm.getFormatedPrice(
                                _vm.product.price,
                                _vm.product.discount
                              )
                            ),
                          },
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.discount
                      ? _c("del", {
                          staticClass: "text-muted",
                          domProps: {
                            textContent: _vm._s(
                              _vm.getFormatedPrice(_vm.product.price)
                            ),
                          },
                        })
                      : _c("span", {
                          domProps: {
                            textContent: _vm._s(
                              _vm.getFormatedPrice(_vm.product.price)
                            ),
                          },
                        }),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "me-auto" }, [
                    _vm._v("Enjoy free shipping and return"),
                  ]),
                  _vm._v(" "),
                  _vm.size
                    ? _c("div", [
                        _vm.getSizeQty === 0
                          ? _c("span", [
                              _c("i", {
                                staticClass: "bi bi-circle-fill text-danger",
                              }),
                              _vm._v(" Sold out"),
                            ])
                          : _vm.getSizeQty > 5
                          ? _c("span", [
                              _c("i", {
                                staticClass: "bi bi-circle-fill text-success",
                              }),
                              _vm._v(" Available"),
                            ])
                          : _c("span", [
                              _c("i", {
                                staticClass: "bi bi-circle-fill text-warning",
                              }),
                              _vm._v(
                                " Only " + _vm._s(_vm.getSizeQty) + " left"
                              ),
                            ]),
                      ])
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-5" }, [
                _c(
                  "div",
                  { staticClass: "d-sm-flex mb-2" },
                  [
                    _c("QtyField", {
                      staticClass: "me-3 mb-2 mb-sm-0",
                      attrs: { max: _vm.getSizeQty },
                      model: {
                        value: _vm.qty,
                        callback: function ($$v) {
                          _vm.qty = _vm._n($$v)
                        },
                        expression: "qty",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary fw-medium px-5 py-3",
                        attrs: {
                          type: "button",
                          disabled: !_vm.size || !_vm.qty || _vm.loading,
                        },
                        on: { click: _vm.addToBag },
                      },
                      [
                        _c("span", [
                          _vm._v(
                            _vm._s(_vm.size ? "ADD TO BAG" : "CHOOSE A SIZE")
                          ),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex align-items-stretch align-items-sm-end",
                },
                [
                  _c("img", {
                    staticClass: "me-2",
                    attrs: { src: "/img/icons/tree.png", height: "36px" },
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-success fw-medium mb-0" }, [
                    _vm._v(
                      "For each purchase, we plant a tree for Forest Fire Recovery."
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid px-3 px-sm-5" }, [
          _c("div", { staticClass: "d-flex py-4" }, [
            _c(
              "div",
              { staticClass: "me-auto" },
              [
                _c(
                  "l",
                  {
                    staticClass: "underline me-2",
                    attrs: { href: _vm.route("shop") },
                  },
                  [_vm._v("VIEW ALL")]
                ),
                _vm._v(" "),
                _vm._l(_vm.product.categories, function (c) {
                  return _c(
                    "l",
                    {
                      key: Math.random(),
                      staticClass: "underline me-2",
                      attrs: {
                        href: _vm.route("shop", {
                          categories: [c.category_id],
                        }),
                      },
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t" +
                          _vm._s(c.category.name) +
                          "\n\t\t\t\t\t"
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-end" },
              [
                _c(
                  "span",
                  {
                    staticClass: "pointer text-muted underline me-2",
                    attrs: {
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#helpModal",
                    },
                  },
                  [_vm._v("Need help ?")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "pointer",
                    on: {
                      click: function ($event) {
                        _vm.social = !_vm.social
                      },
                    },
                  },
                  [_c("i", { staticClass: "bi bi-share-fill" })]
                ),
                _vm._v(" "),
                _c("SocialShare", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.social,
                      expression: "social",
                    },
                  ],
                  attrs: { id: _vm.product.id, title: _vm.product.title },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary py-5" }, [
        _c("div", { staticClass: "container-fluid px-3 px-sm-5" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 col-xl-8 order-2 order-lg-1" }, [
              _c(
                "div",
                {
                  staticClass:
                    "accordion accordion-flush border-bottom border-dark",
                  attrs: { id: "accordionFlush" },
                },
                [
                  _c("div", { staticClass: "accordion-item border-dark" }, [
                    _c("div", { staticClass: "accordion-header" }, [
                      _c(
                        "button",
                        {
                          staticClass: "accordion-button collapsed",
                          attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#packaging",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tPACKAGING & LABELING\n\t\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "accordion-collapse collapse",
                        attrs: {
                          id: "packaging",
                          "data-bs-parent": "#accordionFlush",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "accordion-body bg-primary px-1" },
                          [
                            _c("p", [
                              _vm._v(
                                "In order to build a better planet, our labelings are made from 100% recycled fibers issued from FSC-certified forests."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Our shipping boxes are made from biodegradable and recyclable cardboard."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "We use eco-friendly tissue paper and stickers."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "All our gift cards, thank you cards and invoices are printed in 100% recycled paper."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "We use 100% cotton canvas garment covers."
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "accordion-item border-dark" }, [
                    _c("div", { staticClass: "accordion-header" }, [
                      _c(
                        "button",
                        {
                          staticClass: "accordion-button collapsed",
                          attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#payment",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tPAYMENT\n\t\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "accordion-collapse collapse",
                        attrs: {
                          id: "payment",
                          "data-bs-parent": "#accordionFlush",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "accordion-body bg-primary px-1" },
                          [
                            _c("p", [_vm._v("AFYLA accepts")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row gx-0" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center",
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/img/icons/mastercard.png",
                                      width: "64px",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("MasterCard")]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center",
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/img/icons/visa.png",
                                      width: "64px",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Visa")]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center",
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/img/icons/paypal.png",
                                      width: "64px",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("PayPal")]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center",
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/img/icons/applepay.png",
                                      width: "64px",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("p", [_vm._v("Apple Pay")]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center",
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: "/img/icons/afterpay.png",
                                      width: "64px",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v("Pay monthly with afterpay"),
                                  ]),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Payment will include only the price of the products. The costs of the shipping and delivery are totally free. Under no circumstances will You be charged more than the product price relative to the payment method chosen by You."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping."
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "accordion-item border-dark" }, [
                    _c("div", { staticClass: "accordion-header" }, [
                      _c(
                        "button",
                        {
                          staticClass: "accordion-button collapsed",
                          attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#shipping",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tSHIPPING\n\t\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "accordion-collapse collapse",
                        attrs: {
                          id: "shipping",
                          "data-bs-parent": "#accordionFlush",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "accordion-body bg-primary px-1" },
                          [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v("We offer free shipping worldwide."),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Shipping timing may vary from country to another. Delivery times begin one business day after the order is placed."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "table",
                              { staticClass: "table table-bordered" },
                              [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [_vm._v("COUNTRY")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("EU-UK")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("US-CHINA-JAPAN")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("MOROCOO")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("WORLD")]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [_vm._v("SHIPPING TIME")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("3-5 working days")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("4-8 working days")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("1-2 working days")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("4-9 working days")]),
                                  ]),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Orders are not shipped out on weekends and holidays. All orders are processed automatically and We are unable to expedite or delay shipping times. If an order is placed over the weekend, the earliest it will ship is Monday. Signature is required upon delivery."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "Kindly note that delivery times are provided as guidelines only. These times are flexible depending on the customs clearance and holidays."
                              ),
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "AFYLA cannot be held responsible for any actions or delays due to customs over which We have no control. We may contact You for any further information due to customs request."
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "accordion-item border-dark" }, [
                    _c("div", { staticClass: "accordion-header" }, [
                      _c(
                        "button",
                        {
                          staticClass: "accordion-button collapsed",
                          attrs: {
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#returns",
                            "aria-expanded": "false",
                          },
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\tRETURNS POLICY\n\t\t\t\t\t\t\t\t"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "accordion-collapse collapse",
                        attrs: {
                          id: "returns",
                          "data-bs-parent": "#accordionFlush",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "accordion-body bg-primary px-1" },
                          [
                            _c(
                              "p",
                              { staticClass: "mb-0" },
                              [
                                _vm._v(
                                  "You may exchange the items purchased from "
                                ),
                                _c(
                                  "l",
                                  {
                                    staticClass: "text-dark underline",
                                    attrs: { href: "/" },
                                  },
                                  [_vm._v("www.afylaworld.com")]
                                ),
                                _vm._v(
                                  " within 15 days of receipt of your purchase, AFYLA will cover the shipping costs."
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "Please make sure the merchandise You return is in its original condition, tags and packaging included, otherwise We will be unable to accept your return and issue a refund."
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              { staticClass: "mb-0" },
                              [
                                _c(
                                  "l",
                                  {
                                    staticClass: "text-dark underline",
                                    attrs: { href: _vm.route("contact") },
                                  },
                                  [_vm._v("Contact us")]
                                ),
                                _vm._v(
                                  " to inform you about all the return steps."
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v("Read more in our "),
                                _c(
                                  "l",
                                  {
                                    staticClass: "text-dark underline",
                                    attrs: {
                                      href: _vm.route(
                                        "page",
                                        "shipping-returns-policy"
                                      ),
                                    },
                                  },
                                  [_vm._v("Shipping & Returns Policy")]
                                ),
                                _vm._v("."),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 col-xl-4 order-1 order-lg-2" }, [
              _c("div", { staticClass: "bg-white p-4" }, [
                _c("p", [_vm._v("PRODUCT CARD")]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-3" }, [
                  _c("img", {
                    staticClass: "d-block w-50 mx-auto",
                    attrs: { src: _vm.product.gallery[0] },
                  }),
                ]),
                _vm._v(" "),
                _c("div", {
                  domProps: { innerHTML: _vm._s(_vm.product.description) },
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "bg-primary position-relative carousel-dark p-0 p-sm-5",
        },
        [
          _c("p", { staticClass: "fs-2 text-center mb-4" }, [
            _vm._v("YOU MAY ALSO LIKE"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "glider" }, [
            _c(
              "div",
              { staticClass: "glider-track mx-auto" },
              _vm._l(_vm.product.recommendations, function (item) {
                return _c(
                  "div",
                  { key: item.id, staticClass: "recommendation px-3" },
                  [
                    _c(
                      "div",
                      { staticClass: "position-relative" },
                      [
                        _c(
                          "l",
                          {
                            attrs: {
                              href: _vm.route("product", item.product.id),
                            },
                          },
                          [
                            _c("img", {
                              staticClass: "d-block w-100",
                              attrs: { src: item.product.gallery[0] },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "wishlist",
                            on: {
                              click: function ($event) {
                                return _vm.addToWishlist(item.product.id)
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "bi fs-3",
                              class: [
                                _vm.searchWishlist(item.product.id)
                                  ? "bi-heart-fill text-danger"
                                  : "bi-heart",
                              ],
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center py-3" },
                      [
                        _c("p", {
                          staticClass: "text-dark mb-1",
                          domProps: { textContent: _vm._s(item.product.title) },
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "fw-medium mb-3" }, [
                          item.product.discount
                            ? _c("del", {
                                staticClass: "text-muted me-1",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.getFormatedPrice(item.product.price)
                                  ),
                                },
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          item.product.discount
                            ? _c("span", {
                                staticClass: "text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.getFormatedPrice(
                                      item.product.price,
                                      item.product.discount
                                    )
                                  ),
                                },
                              })
                            : _c("span", {
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.getFormatedPrice(item.product.price)
                                  ),
                                },
                              }),
                        ]),
                        _vm._v(" "),
                        _c(
                          "l",
                          {
                            staticClass: "btn btn-outline-dark",
                            attrs: {
                              href: _vm.route("product", item.product.id),
                            },
                          },
                          [_vm._v("SHOP")]
                        ),
                      ],
                      1
                    ),
                  ]
                )
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "arrows carousel-control-prev prev",
              attrs: { type: "button" },
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "visually-hidden" }, [
                _vm._v("Previous"),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "arrows carousel-control-next next",
              attrs: { type: "button" },
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "visually-hidden" }, [_vm._v("Next")]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "bg-primary py-5" }, [
        _c("div", { staticClass: "container-fluid px-3 px-sm-5" }, [
          _c("p", { staticClass: "fs-2 text-center mb-4" }, [
            _vm._v("YOUR REVIEW MATTERS TO US"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row gy-4" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("label", [_vm._v("FULL NAME*")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control border shadow-none py-3",
                attrs: { type: "text" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("label", [_vm._v("EMAIL*")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control border shadow-none py-3",
                attrs: { type: "text" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("label", [_vm._v("YOUR RATING*")]),
              _vm._v(" "),
              _c("div", [
                _c("i", { staticClass: "bi bi-star fs-3" }),
                _vm._v(" "),
                _c("i", { staticClass: "bi bi-star fs-3" }),
                _vm._v(" "),
                _c("i", { staticClass: "bi bi-star fs-3" }),
                _vm._v(" "),
                _c("i", { staticClass: "bi bi-star fs-3" }),
                _vm._v(" "),
                _c("i", { staticClass: "bi bi-star fs-3" }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("label", [_vm._v("YOUR REVIEW*")]),
              _vm._v(" "),
              _c("textarea", {
                staticClass: "form-control border shadow-none",
                attrs: { rows: "6" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "d-grid d-sm-flex" }, [
                _c("p", { staticClass: "me-auto" }, [
                  _vm._v("Required fields are marked*"),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
                  },
                  [_vm._v("SUBMIT")]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "UserMenu",
    [
      _c("h", { attrs: { title: "Profile" } }),
      _vm._v(" "),
      _c("div", { staticClass: "px-3 px-sm-5 py-2" }, [
        _c("p", { staticClass: "fw-medium text-center text-uppercase" }, [
          _vm._v("WELCOME BACK, "),
          _c("span", { domProps: { textContent: _vm._s(_vm.auth.name) } }),
        ]),
        _vm._v(" "),
        _vm.showform
          ? _c(
              "form",
              {
                staticClass: "row gy-3 mb-3",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.edit.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "col-12" }, [
                  _c("span", [_vm._v("PROFILE INFORMATION")]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.firstname,
                        expression: "form.firstname",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text", placeholder: "FIRST NAME" },
                    domProps: { value: _vm.form.firstname },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "firstname", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.lastname,
                        expression: "form.lastname",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text", placeholder: "LAST NAME" },
                    domProps: { value: _vm.form.lastname },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "lastname", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("input", {
                    staticClass:
                      "form-control border shadow-none bg-white py-3",
                    attrs: { type: "text", placeholder: "EMAIL", disabled: "" },
                    domProps: { value: _vm.auth.email },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.country,
                          expression: "form.country",
                        },
                      ],
                      staticClass: "form-select border shadow-none py-3",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "country",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: null } }, [
                        _vm._v("COUNTRY"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.countries, function (country, code) {
                        return _c("option", {
                          key: Math.random(),
                          domProps: {
                            value: country.name,
                            textContent: _vm._s(country.name),
                          },
                        })
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c("div", { staticClass: "row gx-2" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.day,
                              expression: "date.day",
                            },
                          ],
                          staticClass: "form-select border shadow-none py-3",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "day",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Day")]
                          ),
                          _vm._v(" "),
                          _vm._l(31, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: { value: n, textContent: _vm._s(n) },
                            })
                          }),
                        ],
                        2
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.month,
                              expression: "date.month",
                            },
                          ],
                          staticClass: "form-select border shadow-none py-3",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "month",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Month")]
                          ),
                          _vm._v(" "),
                          _vm._l(12, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: {
                                value: n - 1,
                                textContent: _vm._s(n),
                              },
                            })
                          }),
                        ],
                        2
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.year,
                              expression: "date.year",
                            },
                          ],
                          staticClass: "form-select border shadow-none py-3",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "year",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Year")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.years, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: { value: n, textContent: _vm._s(n) },
                            })
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.phone,
                        expression: "form.phone",
                      },
                    ],
                    staticClass: "form-control border shadow-none py-3",
                    attrs: { type: "text", placeholder: "PHONE" },
                    domProps: { value: _vm.form.phone },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "phone", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-check" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.subscribe,
                          expression: "form.subscribe",
                        },
                      ],
                      staticClass:
                        "form-check-input shadow-none bg-white border-0",
                      attrs: { type: "checkbox", id: "subscribe" },
                      domProps: {
                        checked: Array.isArray(_vm.form.subscribe)
                          ? _vm._i(_vm.form.subscribe, null) > -1
                          : _vm.form.subscribe,
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.form.subscribe,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.form,
                                  "subscribe",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.form,
                                  "subscribe",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.form, "subscribe", $$c)
                          }
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        staticStyle: { "user-select": "none" },
                        attrs: { for: "subscribe" },
                      },
                      [_vm._v("SUBSCRIBE TO THE NEWSLETTER")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 d-flex justify-content-end" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn px-5 py-3 me-3",
                        staticStyle: { background: "#d5cdc5" },
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            _vm.showform = false
                          },
                        },
                      },
                      [_vm._v("CANCEL")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary px-5 py-3",
                        attrs: {
                          type: "submit",
                          disabled: _vm.form.processing,
                        },
                      },
                      [_vm._v("SAVE")]
                    ),
                  ]
                ),
              ]
            )
          : _c("div", { staticClass: "row gx-0 gy-3 mb-3" }, [
              _c("div", { staticClass: "col-12 d-flex align-items-center" }, [
                _c("span", { staticClass: "me-auto" }, [
                  _vm._v("PROFILE INFORMATION"),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        _vm.showform = true
                      },
                    },
                  },
                  [_vm._v("EDIT")]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("span", {
                  staticClass: "text-uppercase",
                  domProps: { textContent: _vm._s(_vm.auth.name) },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("span", {
                  staticClass: "text-uppercase",
                  domProps: { textContent: _vm._s(_vm.auth.email) },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("span", { staticClass: "text-uppercase" }, [
                  _vm._v("DOB: " + _vm._s(_vm.birthday)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("span", {
                  staticClass: "text-uppercase",
                  domProps: { textContent: _vm._s(_vm.auth.country) },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("span", { staticClass: "text-uppercase" }, [
                  _vm._v("PHONE: " + _vm._s(_vm.auth.phone)),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _vm.auth.sub
                  ? _c("p", { staticClass: "mb-0" }, [
                      _vm._v("YOU ARE SUBSCRIBED FOR THE NEWSLETTER"),
                    ])
                  : _c("p", { staticClass: "mb-0" }, [
                      _vm._v("YOU ARE NOT SUBSCRIBED FOR THE NEWSLETTER"),
                    ]),
              ]),
            ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=template&id=72c9e71f&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Our Products" } }),
      _vm._v(" "),
      _c("section", { staticStyle: { "margin-bottom": "200px" } }, [
        _c(
          "div",
          {
            staticClass: "offcanvas offcanvas-end",
            attrs: {
              id: "categories",
              tabindex: "-1",
              "data-bs-scroll": "true",
              "data-bs-touch": "true",
            },
          },
          [
            _c("div", { staticClass: "offcanvas-header" }, [
              _c("h5", { staticClass: "fs-2 fw-light mb-0" }, [
                _vm._v("Categories"),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close text-reset",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "offcanvas",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "offcanvas-body" }, [
              _c("div", { staticClass: "px-1" }, [
                _vm.selected.categories.length === 0
                  ? _c(
                      "div",
                      { staticClass: "mb-4" },
                      _vm._l(_vm.categories, function (category) {
                        return _c(
                          "div",
                          {
                            key: Math.random(),
                            staticClass: "form-check mb-2",
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.params.categories,
                                  expression: "params.categories",
                                },
                              ],
                              staticClass: "form-check-input",
                              attrs: { type: "checkbox", id: category.slug },
                              domProps: {
                                value: category.id,
                                checked: Array.isArray(_vm.params.categories)
                                  ? _vm._i(_vm.params.categories, category.id) >
                                    -1
                                  : _vm.params.categories,
                              },
                              on: {
                                change: function ($event) {
                                  var $$a = _vm.params.categories,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = category.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.params,
                                          "categories",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.params,
                                          "categories",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.params, "categories", $$c)
                                  }
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("label", {
                              staticClass: "form-check-label",
                              attrs: { for: category.slug },
                              domProps: { textContent: _vm._s(category.name) },
                            }),
                          ]
                        )
                      }),
                      0
                    )
                  : _c(
                      "div",
                      { staticClass: "mb-4" },
                      _vm._l(_vm.selected.categories, function (id) {
                        return _c(
                          "div",
                          { key: Math.random() },
                          _vm._l(
                            _vm.categories.find(function (item) {
                              return item.id == id
                            }).sub_categories,
                            function (sub) {
                              return _c(
                                "div",
                                {
                                  key: Math.random(),
                                  staticClass: "form-check mb-2",
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.params.subs,
                                        expression: "params.subs",
                                      },
                                    ],
                                    staticClass: "form-check-input",
                                    attrs: { type: "checkbox", id: sub.slug },
                                    domProps: {
                                      value: sub.id,
                                      checked: Array.isArray(_vm.params.subs)
                                        ? _vm._i(_vm.params.subs, sub.id) > -1
                                        : _vm.params.subs,
                                    },
                                    on: {
                                      change: function ($event) {
                                        var $$a = _vm.params.subs,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = sub.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.params,
                                                "subs",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.params,
                                                "subs",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(_vm.params, "subs", $$c)
                                        }
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("label", {
                                    staticClass: "form-check-label",
                                    attrs: { for: sub.slug },
                                    domProps: { textContent: _vm._s(sub.name) },
                                  }),
                                ]
                              )
                            }
                          ),
                          0
                        )
                      }),
                      0
                    ),
                _vm._v(" "),
                _c("div", { staticClass: "d-grid gap-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary py-3",
                      attrs: { type: "button" },
                      on: { click: _vm.filter },
                    },
                    [_vm._v("SEE RESULTS")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light py-3",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.reset(["categories", "subs"])
                        },
                      },
                    },
                    [_vm._v("RESET")]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "offcanvas offcanvas-end",
            attrs: { id: "filters", tabindex: "-1", "data-bs-scroll": "true" },
          },
          [
            _c("div", { staticClass: "offcanvas-header" }, [
              _c("h5", { staticClass: "fs-2 fw-light mb-0" }, [
                _vm._v("Filters"),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close text-reset",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "offcanvas",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "offcanvas-body" }, [
              _c("div", [
                _c("h6", { staticClass: "fs-4 fw-light mb-2" }, [
                  _vm._v("Color"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row g-0 px-1 mb-4" },
                  _vm._l(_vm.colors, function (color) {
                    return _c(
                      "div",
                      { key: Math.random(), staticClass: "col-6" },
                      [
                        _c("div", { staticClass: "form-check mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.params.colors,
                                expression: "params.colors",
                              },
                            ],
                            staticClass: "form-check-input",
                            staticStyle: {
                              "border-color": "rgba(0, 0, 0, 0.25)",
                            },
                            style: { backgroundColor: color.hex },
                            attrs: { type: "checkbox", id: color.slug },
                            domProps: {
                              value: color.id,
                              checked: Array.isArray(_vm.params.colors)
                                ? _vm._i(_vm.params.colors, color.id) > -1
                                : _vm.params.colors,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.params.colors,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = color.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.params,
                                        "colors",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.params,
                                        "colors",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.params, "colors", $$c)
                                }
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "form-check-label",
                            attrs: { for: color.slug },
                            domProps: { textContent: _vm._s(color.name) },
                          }),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("h6", { staticClass: "fs-4 fw-light mb-2" }, [
                  _vm._v("Material"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row px-1 g-0 mb-4" },
                  _vm._l(_vm.materials, function (material) {
                    return _c(
                      "div",
                      { key: Math.random(), staticClass: "col-6" },
                      [
                        _c("div", { staticClass: "form-check mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.params.materials,
                                expression: "params.materials",
                              },
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", id: material.slug },
                            domProps: {
                              value: material.id,
                              checked: Array.isArray(_vm.params.materials)
                                ? _vm._i(_vm.params.materials, material.id) > -1
                                : _vm.params.materials,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.params.materials,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = material.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.params,
                                        "materials",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.params,
                                        "materials",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.params, "materials", $$c)
                                }
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "form-check-label",
                            attrs: { for: material.slug },
                            domProps: { textContent: _vm._s(material.name) },
                          }),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("h6", { staticClass: "fs-4 fw-light mb-2" }, [
                  _vm._v("Collection"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row px-1 g-0 mb-4" },
                  _vm._l(_vm.collections, function (collection) {
                    return _c(
                      "div",
                      { key: Math.random(), staticClass: "col-12" },
                      [
                        _c("div", { staticClass: "form-check mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.params.collections,
                                expression: "params.collections",
                              },
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", id: collection.id },
                            domProps: {
                              value: collection.id,
                              checked: Array.isArray(_vm.params.collections)
                                ? _vm._i(
                                    _vm.params.collections,
                                    collection.id
                                  ) > -1
                                : _vm.params.collections,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.params.collections,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = collection.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.params,
                                        "collections",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.params,
                                        "collections",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.params, "collections", $$c)
                                }
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "form-check-label",
                            attrs: { for: collection.id },
                            domProps: { textContent: _vm._s(collection.title) },
                          }),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("h6", { staticClass: "fs-4 fw-light mb-2" }, [
                  _vm._v("Size"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row px-1 g-0 mb-4" },
                  _vm._l(_vm.sizes, function (size) {
                    return _c(
                      "div",
                      { key: Math.random(), staticClass: "col-6" },
                      [
                        _c("div", { staticClass: "form-check mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.params.sizes,
                                expression: "params.sizes",
                              },
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", id: size.slug },
                            domProps: {
                              value: size.id,
                              checked: Array.isArray(_vm.params.sizes)
                                ? _vm._i(_vm.params.sizes, size.id) > -1
                                : _vm.params.sizes,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.params.sizes,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = size.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.params,
                                        "sizes",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.params,
                                        "sizes",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.params, "sizes", $$c)
                                }
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "form-check-label",
                            attrs: { for: size.slug },
                            domProps: { textContent: _vm._s(size.name) },
                          }),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "d-grid gap-2" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary py-3",
                      attrs: { type: "button" },
                      on: { click: _vm.filter },
                    },
                    [_vm._v("SEE RESULTS")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light py-3",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.reset([
                            "colors",
                            "sizes",
                            "materials",
                            "collections",
                          ])
                        },
                      },
                    },
                    [_vm._v("RESET")]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "offcanvas offcanvas-end",
            attrs: { id: "sort", tabindex: "-1", "data-bs-scroll": "true" },
          },
          [
            _c("div", { staticClass: "offcanvas-header" }, [
              _c("h5", { staticClass: "fs-2 fw-light mb-0" }, [
                _vm._v("Sort by"),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close text-reset",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "offcanvas",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "offcanvas-body" }, [
              _c("div", { staticClass: "px-1" }, [
                _c(
                  "div",
                  { staticClass: "mb-4" },
                  _vm._l(_vm.sort, function (text, key) {
                    return _c("div", { key: Math.random() }, [
                      _c("span", {
                        staticClass: "pointer fs-5",
                        class: { "fw-bold": _vm.params.sort === key },
                        domProps: { textContent: _vm._s(text) },
                        on: {
                          click: function ($event) {
                            return _vm.sortBy(key)
                          },
                        },
                      }),
                    ])
                  }),
                  0
                ),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "container mb-5" }, [
          _c("div", { staticClass: "py-5" }, [
            _c("h1", { staticClass: "fs-2 text-center mb-4" }, [
              _vm._v("OUR PRODUCTS"),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-sm-end flex-column flex-sm-row mb-3",
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "pointer fw-medium me-3 me-sm-5",
                    attrs: {
                      "data-bs-toggle": "offcanvas",
                      "data-bs-target": "#categories",
                    },
                  },
                  [
                    _c("i", { staticClass: "bi bi-list-check" }),
                    _vm._v(" CATEGORIES "),
                    _c("i", { staticClass: "bi bi-caret-down-fill" }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "pointer fw-medium me-3 me-sm-5",
                    attrs: {
                      "data-bs-toggle": "offcanvas",
                      "data-bs-target": "#filters",
                    },
                  },
                  [
                    _c("i", { staticClass: "bi bi-sliders" }),
                    _vm._v(" FILTERS "),
                    _c("i", { staticClass: "bi bi-caret-down-fill" }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "pointer fw-medium",
                    attrs: {
                      "data-bs-toggle": "offcanvas",
                      "data-bs-target": "#sort",
                    },
                  },
                  [
                    _c("i", { staticClass: "bi bi-sort-up" }),
                    _vm._v(" SORT BY "),
                    _c("i", { staticClass: "bi bi-caret-down-fill" }),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-wrap" },
              [
                _vm.params.search
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "badge bg-primary text-dark py-2 me-2 mb-2",
                      },
                      [
                        _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                          _vm._v(_vm._s(_vm.params.search)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "pointer fs-6",
                            on: {
                              click: function ($event) {
                                return _vm.remove("search")
                              },
                            },
                          },
                          [_vm._v("×")]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.params.discounts
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "badge bg-primary text-dark py-2 me-2 mb-2",
                      },
                      [
                        _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                          _vm._v("SPECIAL PRICES"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "pointer fs-6",
                            on: {
                              click: function ($event) {
                                return _vm.remove("discounts")
                              },
                            },
                          },
                          [_vm._v("×")]
                        ),
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.selected.categories, function (category, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(
                          _vm._s(_vm.getNameById("categories.name", category))
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("categories", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.selected.subs, function (sub, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(_vm._s(_vm.getNameById("subs.name", sub))),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("subs", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.selected.colors, function (color, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(_vm._s(_vm.getNameById("colors.name", color))),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("colors", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.selected.materials, function (material, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(
                          _vm._s(_vm.getNameById("materials.name", material))
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("materials", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.selected.collections, function (collection, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(
                          _vm._s(
                            _vm.getNameById("collections.title", collection)
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("collections", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._l(_vm.selected.sizes, function (size, i) {
                  return _c(
                    "span",
                    {
                      key: Math.random(),
                      staticClass: "badge bg-primary text-dark py-2 me-2 mb-2",
                    },
                    [
                      _c("span", { staticStyle: { "font-size": ".8rem" } }, [
                        _vm._v(_vm._s(_vm.getNameById("sizes.name", size))),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "pointer fs-6",
                          on: {
                            click: function ($event) {
                              return _vm.remove("sizes", i)
                            },
                          },
                        },
                        [_vm._v("×")]
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row gy-4" },
            _vm._l(_vm.products.data, function (product) {
              return _c(
                "div",
                { key: Math.random(), staticClass: "col-sm-6 col-lg-4" },
                [
                  _c("div", { staticClass: "product" }, [
                    _c("div", { staticClass: "gallery" }, [
                      _c(
                        "div",
                        {
                          staticClass: "carousel carousel-dark slide",
                          attrs: {
                            id: "gallery" + product.id,
                            "data-bs-ride": "carousel",
                            "data-bs-interval": "false",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "carousel-inner" },
                            _vm._l(product.gallery, function (img, i) {
                              return _c(
                                "div",
                                {
                                  staticClass: "carousel-item",
                                  class: { active: i === 0 },
                                },
                                [
                                  _c(
                                    "l",
                                    {
                                      attrs: {
                                        href: _vm.route("product", product.id),
                                      },
                                    },
                                    [
                                      _c("img", {
                                        staticClass: "d-block w-100",
                                        attrs: { src: img },
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              )
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "arrows carousel-control-prev",
                              attrs: {
                                type: "button",
                                "data-bs-target": "#gallery" + product.id,
                                "data-bs-slide": "prev",
                              },
                            },
                            [
                              _c("span", {
                                staticClass: "carousel-control-prev-icon",
                                attrs: { "aria-hidden": "true" },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "visually-hidden" }, [
                                _vm._v("Previous"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "arrows carousel-control-next",
                              attrs: {
                                type: "button",
                                "data-bs-target": "#gallery" + product.id,
                                "data-bs-slide": "next",
                              },
                            },
                            [
                              _c("span", {
                                staticClass: "carousel-control-next-icon",
                                attrs: { "aria-hidden": "true" },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "visually-hidden" }, [
                                _vm._v("Next"),
                              ]),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "wishlist",
                          on: {
                            click: function ($event) {
                              return _vm.addToWishlist(product.id)
                            },
                          },
                        },
                        [
                          _c("i", {
                            staticClass: "bi fs-3",
                            class: [
                              _vm.searchWishlist(product.id)
                                ? "bi-heart-fill text-danger"
                                : "bi-heart",
                            ],
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "colors" },
                        _vm._l(product.colors, function (c) {
                          return _c("span", {
                            key: Math.random(),
                            staticClass: "me-2 shadow",
                            style: { backgroundColor: c.color.hex },
                          })
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-3" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex" },
                        [
                          _c("l", {
                            staticClass: "h6 text-dark me-auto",
                            attrs: { href: _vm.route("product", product.id) },
                            domProps: { textContent: _vm._s(product.title) },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex-shrink-0 fw-medium" },
                            [
                              product.discount
                                ? _c("del", {
                                    staticClass: "text-muted me-1",
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(product.price)
                                      ),
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              product.discount
                                ? _c("span", {
                                    staticClass: "text-danger",
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(
                                          product.price,
                                          product.discount
                                        )
                                      ),
                                    },
                                  })
                                : _c("span", {
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(product.price)
                                      ),
                                    },
                                  }),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex me-auto" },
                          _vm._l(product.sizes, function (s) {
                            return s.qty !== null
                              ? _c(
                                  "div",
                                  {
                                    key: Math.random(),
                                    staticClass: "text-dark me-2",
                                  },
                                  [
                                    s.qty === 0
                                      ? _c("del", {
                                          staticClass: "text-muted",
                                          domProps: {
                                            textContent: _vm._s(s.size.name),
                                          },
                                        })
                                      : _c("span", {
                                          domProps: {
                                            textContent: _vm._s(s.size.name),
                                          },
                                        }),
                                  ]
                                )
                              : _vm._e()
                          }),
                          0
                        ),
                        _vm._v(" "),
                        product.discount
                          ? _c(
                              "span",
                              {
                                staticClass:
                                  "flex-shrink-0 fw-medium text-danger",
                              },
                              [_vm._v("save " + _vm._s(product.discount) + "%")]
                            )
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _vm.products.last_page > 1
          ? _c("div", { staticClass: "container" }, [
              _c(
                "ul",
                { staticClass: "pagination justify-content-center" },
                [
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "span",
                      {
                        staticClass: "page-link text-dark pointer disabled",
                        on: {
                          click: function ($event) {
                            return _vm.paginate(_vm.products.current_page - 1)
                          },
                        },
                      },
                      [_vm._v("«")]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.products.last_page, function (p) {
                    return _c(
                      "li",
                      {
                        key: Math.random(),
                        staticClass: "page-item",
                        class: {
                          active:
                            (_vm.params.page === null && p === 1) ||
                            p == _vm.params.page,
                        },
                      },
                      [
                        _c("span", {
                          staticClass: "page-link text-dark pointer pointer",
                          domProps: { textContent: _vm._s(p) },
                          on: {
                            click: function ($event) {
                              return _vm.paginate(p)
                            },
                          },
                        }),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("li", { staticClass: "page-item" }, [
                    _c(
                      "span",
                      {
                        staticClass: "page-link text-dark pointer",
                        on: {
                          click: function ($event) {
                            return _vm.paginate(_vm.products.current_page + 1)
                          },
                        },
                      },
                      [_vm._v("»")]
                    ),
                  ]),
                ],
                2
              ),
            ])
          : _vm._e(),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Sustainability.vue?vue&type=template&id=93787fe0& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "Sustainability" } }),
      _vm._v(" "),
      _c("section", { staticClass: "position-relative carousel-dark py-5" }, [
        _c("div", { staticClass: "glider" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("PHILOSOPHY"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "As one of the most polluting industries in the world, fashion has woken up to its enormous impact on the environment."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "Striving to contribute to repair catastrophic climate change and reach social justice, AFYLA found its identity in sustainability."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 fw-medium mb-5" }, [
                  _vm._v(
                    "“IT’S PRETTY SIMPLE NO LEATHER, NO SKIN, NO FUR, NO POLYESTER, NO PLASTIC, NO DISCRIMINATION NO INJUSTICE.“"
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "Our sustainability practices are divided into 7 pillars: Environment, people, animals, packaging & labeling, material we use, material we don’t use and community initiatives."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("ENVIRONMENT"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "We are aware with the climate change and the importance to preserve mother nature. In order to reduce our carbon footprint, we engage in planting a tree for each purchase we receive."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "We are also zero-tolerant with the use of plastic in our supply chain. We only RE-use plastic or use recycled one and that’s only to protect our garments in stock."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "In order to reduce waste, we produce small batch production along with quality manufacturing. To ensure low footprint impact, we work with local artisans and suppliers as much as we could."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [_vm._v("PEOPLE")]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "As an industry that runs on a systemic inequality and social injustice, it is crucial to put an end to these issues."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-5" }, [
                  _vm._v(
                    "In our hiring process, we don’t consider any of these; race, gender, religion, age and social position. We choose to hire people based on their competence and skills that are adequate for our needs. And we make sure to pay them ethical living wages."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We ensure to give power to our workers voices and to provide practices that support equitable working conditions."
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "fs-5" },
                  [
                    _vm._v(
                      "We are extremely against any form of discrimination or assault. We also don’t tolerate child or forced labor, you can read more about it in our "
                    ),
                    _c(
                      "l",
                      {
                        staticClass: "text-dark underline",
                        attrs: {
                          href: _vm.route("page", "zero-tolerance-policy"),
                        },
                      },
                      [_vm._v("Zero Tolerance Policy")]
                    ),
                    _vm._v("."),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("ANIMALS"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We love and respect animals. We have zero tolerance towards any use of materials that involve violent, painful, and deadly process."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "That is why we don’t use any kind of leather and fur. We also don’t use the leather coming from the meat-business. For us there is no purpose to kill a soul in order to look fashionable."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("PACKAGING AND LABELING"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "Our labelings are 100% made from recycled polyester including the neck label, the size label and the composition label."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "Our hangtags and buttons bags are made from 100% recycled paper."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "Our shipping boxes are made from biodegradable and recyclable cardboard paper."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We also offer to our customers an organic cotton t-shirt as a support for their bad days."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "Our invoices and thank you cards are all made with recycled paper."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v("We use garment covers made of 100% cotton canvas."),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("MATERIAL WE USE"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We use fabrics that are natural, biodegradable, organic, recycled or from any eco-friendly resources."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We can sometimes use also vintage or dead stock high quality fabrics."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We use Corozo buttons. Corozo is a fruit that gdiv-table-cells on various types of palm trees.The dyes used with Corozo are non-toxic and biodegradable. The entire process from plant to product is environmentally friendly as the fruits are only picked once fallen naturally."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "We use linings made of Cupro which is a “regeneratedcellulose” fabric made from cotton waste. Since Cupro is plant-based, it is vegan and cruelty-free. And it’s also washable which is more eco-friendly."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("MATERIAL WE DON’T USE"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We don’t use any kind of fabric made of polyester or made of non eco-friendly materials."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We strictly don’t use leather, fur or any kind of materials that require a harmful or deadly process towards animals."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v("We don’t use fabrics made of toxic dyes."),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We strictly don’t use plastic buttons or buttons coming from animal horns."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "We don’t use non-recycled polyester or nonrecycled paper for our labelings and packaging."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("h1", { staticClass: "fw-medium mb-5" }, [
                  _vm._v("COMMUNITY INITIATIVES"),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "AFYLA have created a digital community initiative on Instagram called "
                  ),
                  _c("span", { staticClass: "fw-medium" }, [
                    _vm._v("FOR US COMMUNITY"),
                  ]),
                  _vm._v("."),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _c("span", { staticClass: "fw-medium" }, [_vm._v("FOR US")]),
                  _vm._v(
                    " is a community that aims to remind people daily of their worth and self-empower them."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _c("span", { staticClass: "fw-medium" }, [_vm._v("FOR US")]),
                  _vm._v(
                    ", previously FOR HER, was dedicated for women only. But now "
                  ),
                  _c("span", { staticClass: "fw-medium" }, [_vm._v("FOR US")]),
                  _vm._v(" is beyond gender, everyone is included."),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6 text-center py-3 py-xl-5" }, [
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v("These practices are just the beginning."),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5 mb-1" }, [
                  _vm._v(
                    "We have many plans and ideas in mind to improve our sustainability in term of sourcing, social interaction, animal welfare and many more aspects."
                  ),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "fs-5" }, [
                  _vm._v(
                    "We own a growth mindset and we will always search to give more to Earth."
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("img", {
                  staticClass: "d-block w-100",
                  attrs: { src: "/img/home/page.jpg" },
                }),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "arrows carousel-control-prev prev",
            attrs: { type: "button" },
          },
          [
            _c("span", {
              staticClass: "carousel-control-prev-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [
              _vm._v("Previous"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "arrows carousel-control-next next",
            attrs: { type: "button" },
          },
          [
            _c("span", {
              staticClass: "carousel-control-next-icon",
              attrs: { "aria-hidden": "true" },
            }),
            _vm._v(" "),
            _c("span", { staticClass: "visually-hidden" }, [_vm._v("Next")]),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=template&id=0f8ddc24&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AppLayout",
    [
      _c("h", { attrs: { title: "My Wishlist" } }),
      _vm._v(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.soldout,
            callback: function ($$v) {
              _vm.soldout = $$v
            },
            expression: "soldout",
          },
        },
        [
          _c("div", { staticClass: "text-center py-2" }, [
            _c("p", { staticClass: "fw-medium" }, [
              _vm._v("Unfortunately, this item is out of stock."),
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-secondary", attrs: { type: "button" } },
              [_vm._v("EMAIL WHEN AVAILABLE")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.done,
            callback: function ($$v) {
              _vm.done = $$v
            },
            expression: "done",
          },
        },
        [
          _c(
            "div",
            { staticClass: "text-center py-2" },
            [
              _c("p", { staticClass: "fw-medium" }, [
                _vm._v("This item has been added to your shopping bag."),
              ]),
              _vm._v(" "),
              _c(
                "l",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { href: _vm.route("bag") },
                },
                [_vm._v("VIEW MY BAG")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.del,
            callback: function ($$v) {
              _vm.del = $$v
            },
            expression: "del",
          },
        },
        [
          _c("div", { staticClass: "text-center py-2" }, [
            _c("p", { staticClass: "fw-medium" }, [
              _vm._v(
                "ARE YOU SURE YOU WANT TO DELETE THIS ITEM FROM YOUR WISHLIST ?"
              ),
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", disabled: _vm.loading },
                on: {
                  click: function ($event) {
                    return _vm.deleteFromWishlist(_vm.del)
                  },
                },
              },
              [_vm._v("DELETE")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-outline-secondary text-dark",
                attrs: { type: "button" },
                on: {
                  click: function ($event) {
                    _vm.del = null
                  },
                },
              },
              [_vm._v("CANCEL")]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "sizeModal", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("AFYLA SIZE"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [_c("FindSize")], 1),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "shareAll", tabindex: "-1" },
        },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content bg-primary" }, [
              _c("div", { staticClass: "modal-header border-0 pb-0" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Share your wishlist"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.shareAll.apply(null, arguments)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { staticClass: "py-1" }, [_vm._v("From")]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-9" }, [
                        _c("div", { staticClass: "mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.from,
                                expression: "form.from",
                              },
                            ],
                            staticClass:
                              "form-control form-control-sm border shadow-none",
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.from },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "from", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("small", {
                            staticClass: "text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.form.errors.from),
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c("label", { staticClass: "py-1" }, [_vm._v("To")]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-9" }, [
                        _c("div", { staticClass: "mb-2" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.to,
                                expression: "form.to",
                              },
                            ],
                            staticClass:
                              "form-control form-control-sm border shadow-none",
                            attrs: { type: "text" },
                            domProps: { value: _vm.form.to },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "to", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("small", {
                            staticClass: "text-danger",
                            domProps: {
                              textContent: _vm._s(_vm.form.errors.to),
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-9" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-outline-dark px-4",
                            attrs: { type: "submit" },
                          },
                          [_vm._v("SEND")]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("section", { staticStyle: { "margin-bottom": "200px" } }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "pt-5 pb-3" }, [
            _c(
              "div",
              { staticClass: "d-flex align-items-center flex-wrap mb-3" },
              [
                _c("span", { staticClass: "fw-medium fs-5 me-auto" }, [
                  _vm._v(_vm._s(_vm.wishlist.length) + " Item(s)"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center flex-wrap" },
                  [
                    _c("div", { staticClass: "me-4" }, [
                      !_vm.share
                        ? _c(
                            "span",
                            {
                              staticClass: "pointer",
                              on: {
                                click: function ($event) {
                                  _vm.share = true
                                },
                              },
                            },
                            [_c("i", { staticClass: "bi bi-share-fill fs-4" })]
                          )
                        : _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center rounded shadow-sm bg-light px-3 py-1",
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "pointer text-muted underline me-4",
                                },
                                [_vm._v("COPY LINK")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass: "pointer me-2",
                                  attrs: {
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#shareAll",
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "bi bi-envelope pointer fs-5",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c("button", {
                                staticClass: "btn-close",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    _vm.share = false
                                  },
                                },
                              }),
                            ]
                          ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "fw-medium me-2" }, [
                        _vm._v("Sort by"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary shadow-none",
                            attrs: {
                              type: "button",
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false",
                            },
                          },
                          [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(_vm.sort[_vm.params.sort]),
                              },
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "bi bi-caret-down-fill" }),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass:
                              "dropdown-menu dropdown-menu-end shadow-sm",
                          },
                          _vm._l(_vm.sort, function (text, key) {
                            return _c("li", [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "dropdown-item pointer text-dark",
                                  on: {
                                    click: function ($event) {
                                      _vm.params.sort = key
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "bi bi-check",
                                    class: { show: _vm.params.sort === key },
                                  }),
                                  _vm._v(
                                    " " +
                                      _vm._s(text) +
                                      "\n\t\t\t\t\t\t\t\t\t\t"
                                  ),
                                ]
                              ),
                            ])
                          }),
                          0
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row gy-4" },
            _vm._l(_vm.sorted, function (item, i) {
              return _c(
                "div",
                {
                  key: Math.random(),
                  staticClass: "col-sm-6 col-lg-4 col-xl-3",
                },
                [
                  _c("div", { staticClass: "product position-relative" }, [
                    _c("img", {
                      staticClass: "d-block w-100 pointer",
                      attrs: { src: item.product.gallery[0] },
                      on: {
                        click: function ($event) {
                          return _vm.open(i)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "bag shadow",
                        class: { show: _vm.card === i },
                      },
                      [
                        _c("div", { staticClass: "mb-4" }, [
                          _c("div", { staticClass: "text-end" }, [
                            _c(
                              "span",
                              {
                                staticClass: "pointer",
                                on: {
                                  click: function ($event) {
                                    _vm.card = null
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "bi bi-arrow-left fs-4 lh-1",
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "fw-medium mb-1",
                            domProps: {
                              textContent: _vm._s(item.product.title),
                            },
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "text-muted",
                            domProps: { textContent: _vm._s(item.product.sku) },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-4" }, [
                          _c(
                            "div",
                            { staticClass: "d-flex mb-1" },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v("Color:"),
                              ]),
                              _vm._v(" "),
                              _vm._l(item.product.colors, function (c, i) {
                                return _c(
                                  "span",
                                  {
                                    key: Math.random(),
                                    staticClass: "text-muted me-1",
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(c.color.name)
                                    ),
                                    i + 1 !== item.product.colors.length
                                      ? _c("span", [_vm._v(",")])
                                      : _vm._e(),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex mb-1" },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v("Material:"),
                              ]),
                              _vm._v(" "),
                              _vm._l(item.product.materials, function (c, i) {
                                return _c(
                                  "span",
                                  {
                                    key: Math.random(),
                                    staticClass: "text-muted me-1",
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(c.material.name)
                                    ),
                                    i + 1 !== item.product.materials.length
                                      ? _c("span", [_vm._v(",")])
                                      : _vm._e(),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center flex-wrap",
                            },
                            [
                              _c("span", { staticClass: "me-2" }, [
                                _vm._v("Size:"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.bag.size,
                                      expression: "bag.size",
                                    },
                                  ],
                                  staticClass: "form-select input py-0 me-3",
                                  staticStyle: { "max-width": "70px" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.bag,
                                        "size",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                _vm._l(item.product.sizes, function (s) {
                                  return s.qty !== null
                                    ? _c(
                                        "option",
                                        {
                                          key: Math.random(),
                                          domProps: { value: s.size_id },
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(s.size.name) +
                                              "\n\t\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      )
                                    : _vm._e()
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "small",
                                {
                                  staticClass: "pointer underline text-muted",
                                  attrs: {
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#sizeModal",
                                  },
                                },
                                [_vm._v("Find your size")]
                              ),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-grid gap-2" },
                          [
                            _c("div", { staticClass: "fw-medium" }, [
                              item.product.discount
                                ? _c("span", {
                                    staticClass: "text-danger me-1",
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(
                                          item.product.price,
                                          item.product.discount
                                        )
                                      ),
                                    },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              item.product.discount
                                ? _c("del", {
                                    staticClass: "text-muted",
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(item.product.price)
                                      ),
                                    },
                                  })
                                : _c("span", {
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.getFormatedPrice(item.product.price)
                                      ),
                                    },
                                  }),
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  type: "button",
                                  disabled:
                                    _vm.bag.size === null || _vm.loading,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.addToBag(item.product.id)
                                  },
                                },
                              },
                              [
                                _vm.bag.size
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.getSizeQty === 0
                                            ? "SOLD OUT"
                                            : "ADD TO BAG"
                                        )
                                      ),
                                    ])
                                  : _c("span", [_vm._v("CHOOSE A SIZE")]),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "l",
                              {
                                staticClass:
                                  "btn btn-outline-primary text-dark",
                                attrs: {
                                  href: _vm.route("product", item.product.id),
                                },
                              },
                              [_vm._v("MORE DETAILS")]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "action" },
                      [
                        _c("SocialShare", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.social === i,
                              expression: "social === i",
                            },
                          ],
                          attrs: {
                            id: item.product.id,
                            title: item.product.title,
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "pointer lh-1 ms-2",
                            on: {
                              click: function ($event) {
                                _vm.social = _vm.social === null ? i : null
                              },
                            },
                          },
                          [_c("i", { staticClass: "bi bi-share-fill" })]
                        ),
                        _vm._v(" "),
                        _c("button", {
                          staticClass: "btn-close ms-2",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              _vm.del = item.product.id
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "py-3" }, [
                      _c("div", { staticClass: "d-flex" }, [
                        _c("span", {
                          staticClass: "text-dark me-auto",
                          domProps: { textContent: _vm._s(item.product.title) },
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "add",
                            on: {
                              click: function ($event) {
                                return _vm.open(i)
                              },
                            },
                          },
                          [_vm._v("+")]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fw-medium" }, [
                        item.product.discount
                          ? _c("del", {
                              staticClass: "text-muted me-1",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.getFormatedPrice(item.product.price)
                                ),
                              },
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        item.product.discount
                          ? _c("span", {
                              staticClass: "text-danger",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.getFormatedPrice(
                                    item.product.price,
                                    item.product.discount
                                  )
                                ),
                              },
                            })
                          : _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.getFormatedPrice(item.product.price)
                                ),
                              },
                            }),
                      ]),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "bg-primary" }, [
    _vm._ssrNode(
      '<div class="container-fluid px-3 px-sm-5" data-v-4ab6097e>',
      "</div>",
      [
        _vm._ssrNode(
          '<div class="row gy-4 pb-5 my-0" data-v-4ab6097e><div class="col-md-6 col-lg-3" data-v-4ab6097e><ul class="nav flex-column" data-v-4ab6097e><li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>NEWSLETTER</span></li> <li class="nav-item" data-v-4ab6097e><form class="subscribe d-flex" data-v-4ab6097e><input type="text" placeholder="Email"' +
            _vm._ssrAttr("value", _vm.subscription.email) +
            ' class="form-control input" data-v-4ab6097e> <button type="submit" class="btn" data-v-4ab6097e><img src="/img/icons/send.png" height="24px" data-v-4ab6097e></button></form> <small class="text-danger" data-v-4ab6097e>' +
            _vm._ssrEscape(_vm._s(_vm.subscription.errors.email)) +
            '</small></li></ul></div> <div class="col-md-6 offset-lg-3" data-v-4ab6097e><ul class="nav flex-column" data-v-4ab6097e><li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>CUSTOMER SERVICE</span></li> <li class="nav-item" data-v-4ab6097e><a' +
            _vm._ssrAttr("href", "tel:" + _vm.settings.phone) +
            ' class="underline me-2" data-v-4ab6097e>' +
            _vm._ssrEscape(_vm._s(_vm.settings.phone)) +
            "</a> <a" +
            _vm._ssrAttr("href", "mailto:" + _vm.settings.email) +
            ' class="underline" data-v-4ab6097e>' +
            _vm._ssrEscape(_vm._s(_vm.settings.email)) +
            '</a></li> <li class="nav-item" data-v-4ab6097e>\n\t\t\t\t\t\tShop Assistant via\n\t\t\t\t\t\t<a' +
            _vm._ssrAttr("href", "https://wa.me/" + _vm.settings.whatsapp) +
            ' target="_blank" class="underline" data-v-4ab6097e>WhatsApp</a> |\n\t\t\t\t\t\t<a' +
            _vm._ssrAttr("href", _vm.settings.wechat) +
            ' target="_blank" class="underline" data-v-4ab6097e>WeChat</a></li></ul></div></div> '
        ),
        _vm._ssrNode(
          '<div class="row gy-4 my-0" data-v-4ab6097e>',
          "</div>",
          [
            _vm._ssrNode(
              '<div class="col-md-6 col-lg-3" data-v-4ab6097e>',
              "</div>",
              [
                _vm._ssrNode(
                  '<ul class="nav flex-column" data-v-4ab6097e>',
                  "</ul>",
                  [
                    _vm._ssrNode(
                      '<li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>ABOUT AFYLA</span></li> '
                    ),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: { href: _vm.route("about") },
                          },
                          [_vm._v("AFYLA WORLD")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: { href: _vm.route("sustainability") },
                          },
                          [_vm._v("SUSTAINABILITY")]
                        ),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]
            ),
            _vm._ssrNode(" "),
            _vm._ssrNode(
              '<div class="col-md-6 col-lg-3" data-v-4ab6097e>',
              "</div>",
              [
                _vm._ssrNode(
                  '<ul class="nav flex-column" data-v-4ab6097e>',
                  "</ul>",
                  [
                    _vm._ssrNode(
                      '<li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>NEED HELP ?</span></li> '
                    ),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: { href: _vm.route("faq") },
                          },
                          [_vm._v("FAQ")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: { href: _vm.route("contact") },
                          },
                          [_vm._v("CONTACT US")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: { href: _vm.route("customer") },
                          },
                          [_vm._v("CUSTOMER CARE")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route(
                                "page",
                                "shipping-returns-policy"
                              ),
                            },
                          },
                          [_vm._v("SHIPPING & RETURNS")]
                        ),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]
            ),
            _vm._ssrNode(" "),
            _vm._ssrNode(
              '<div class="col-md-6 col-lg-3" data-v-4ab6097e>',
              "</div>",
              [
                _vm._ssrNode(
                  '<ul class="nav flex-column" data-v-4ab6097e>',
                  "</ul>",
                  [
                    _vm._ssrNode(
                      '<li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>LEGALS</span></li> '
                    ),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route(
                                "page",
                                "terms-conditions-of-use"
                              ),
                            },
                          },
                          [_vm._v("TERMS & CONDITIONS OF USE")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route(
                                "page",
                                "terms-conditions-of-sale"
                              ),
                            },
                          },
                          [_vm._v("TERMS & CONDITIONS OF SALE")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route("page", "zero-tolerance-policy"),
                            },
                          },
                          [_vm._v("ZERO TOLERANCE POLICY")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route("page", "privacy-policy"),
                            },
                          },
                          [_vm._v("PRIVACY POLICY")]
                        ),
                      ],
                      1
                    ),
                    _vm._ssrNode(" "),
                    _vm._ssrNode(
                      '<li class="nav-item" data-v-4ab6097e>',
                      "</li>",
                      [
                        _c(
                          "l",
                          {
                            staticClass: "underline",
                            attrs: {
                              href: _vm.route("page", "cookies-policy"),
                            },
                          },
                          [_vm._v("COOKIES POLICY")]
                        ),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]
            ),
            _vm._ssrNode(
              ' <div class="col-md-6 col-lg-3" data-v-4ab6097e><ul class="nav flex-column" data-v-4ab6097e><li class="nav-item mb-2" data-v-4ab6097e><span class="fw-medium" data-v-4ab6097e>JOIN US</span></li> <li class="nav-item" data-v-4ab6097e><a' +
                _vm._ssrAttr("href", _vm.settings.instagram) +
                ' target="_blank" class="underline" data-v-4ab6097e>INSTAGRAM</a></li> <li class="nav-item" data-v-4ab6097e><a' +
                _vm._ssrAttr("href", _vm.settings.facebook) +
                ' target="_blank" class="underline" data-v-4ab6097e>FACEBOOK</a></li> <li class="nav-item" data-v-4ab6097e><a' +
                _vm._ssrAttr("href", _vm.settings.twitter) +
                ' target="_blank" class="underline" data-v-4ab6097e>TWITTER</a></li> <li class="nav-item" data-v-4ab6097e><a' +
                _vm._ssrAttr("href", _vm.settings.youtube) +
                ' target="_blank" class="underline" data-v-4ab6097e>YOUTUBE</a></li> <li class="nav-item" data-v-4ab6097e><a' +
                _vm._ssrAttr("href", _vm.settings.linkedin) +
                ' target="_blank" class="underline" data-v-4ab6097e>LINKEDIN</a></li></ul></div>'
            ),
          ],
          2
        ),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=template&id=0851419a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    [
      _vm._ssrNode(
        "<div" +
          _vm._ssrClass("fixed-navbar", { shadow: _vm.scroll > 60 }) +
          " data-v-0851419a>",
        "</div>",
        [
          _vm._ssrNode(
            "<nav" +
              _vm._ssrClass(
                "top-navbar navbar navbar-expand-lg navbar-light bg-white py-0",
                { hide: _vm.scroll !== 0 }
              ) +
              " data-v-0851419a>",
            "</nav>",
            [
              _vm._ssrNode(
                '<div class="container-fluid" data-v-0851419a>',
                "</div>",
                [
                  _vm._ssrNode(
                    '<ul class="nav ms-auto" data-v-0851419a>',
                    "</ul>",
                    [
                      _vm._ssrNode(
                        '<li class="nav-item d-none d-sm-block" data-v-0851419a>',
                        "</li>",
                        [
                          _c(
                            "l",
                            {
                              staticClass: "nav-link text-dark mx-2",
                              staticStyle: { padding: "7px 0" },
                              attrs: {
                                href: _vm.route(
                                  "page",
                                  "shipping-returns-policy"
                                ),
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "align-text-top",
                                attrs: {
                                  src: "/img/icons/truck.png",
                                  height: "24px",
                                },
                              }),
                              _vm._v(" "),
                              _c("small", { staticClass: "underline" }, [
                                _vm._v("Free shipping & returns"),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._ssrNode(
                        ' <li class="nav-item d-none d-sm-block" data-v-0851419a><a' +
                          _vm._ssrAttr("href", "tel:" + _vm.settings.phone) +
                          ' class="nav-link text-dark mx-2" style="padding: 7px 0" data-v-0851419a><img src="/img/icons/mobile.png" height="19px" class="align-text-top" style="opacity:.7" data-v-0851419a> <small class="underline" data-v-0851419a>+212666700661</small></a></li> <li class="nav-item" data-v-0851419a><div data-bs-toggle="modal" data-bs-target="#search" class="d-flex align-items-center p-1 mx-2 pointer" data-v-0851419a><i class="bi bi-search fs-5" style="line-height:1.55" data-v-0851419a></i></div></li> <li class="nav-item" data-v-0851419a><div data-bs-toggle="offcanvas"' +
                          _vm._ssrAttr(
                            "data-bs-target",
                            _vm.auth ? "#menu" : "#forms"
                          ) +
                          ' class="d-flex align-items-center p-1 mx-2 pointer" data-v-0851419a><i class="bi bi-person fs-5 user-icon" data-v-0851419a></i> ' +
                          (_vm.auth
                            ? '<span class="ms-2" data-v-0851419a>' +
                              _vm._ssrEscape(
                                _vm._s(_vm.auth.name.split(" ")[0])
                              ) +
                              "</span>"
                            : "<!---->") +
                          '</div></li> <li class="nav-item position-relative" data-v-0851419a><div data-bs-toggle="offcanvas" data-bs-target="#wishlist" class="d-flex align-items-center p-1 mx-2 pointer" data-v-0851419a><img src="/img/icons/heart.png" height="23px" data-v-0851419a> <small class="counter" data-v-0851419a>' +
                          _vm._ssrEscape(_vm._s(_vm.wishlist.length)) +
                          '</small></div></li> <li class="nav-item position-relative" data-v-0851419a><div data-bs-toggle="offcanvas" data-bs-target="#bag" class="d-flex align-items-center p-1 mx-2 pointer" data-v-0851419a><img src="/img/icons/bag.png" height="23px" data-v-0851419a> <small class="counter" data-v-0851419a>' +
                          _vm._ssrEscape(_vm._s(_vm.bag.length)) +
                          "</small></div></li>"
                      ),
                    ],
                    2
                  ),
                ]
              ),
            ]
          ),
          _vm._ssrNode(" "),
          _vm._ssrNode(
            '<nav class="navbar navbar-expand-lg navbar-light bg-white py-lg-0" data-v-0851419a>',
            "</nav>",
            [
              _vm._ssrNode(
                '<div class="container-fluid" data-v-0851419a>',
                "</div>",
                [
                  _c(
                    "l",
                    {
                      staticClass: "navbar-brand fs-1 fw-bold py-0",
                      attrs: { href: "/" },
                    },
                    [_vm._v("AFYLA")]
                  ),
                  _vm._ssrNode(
                    ' <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false" class="navbar-toggler" data-v-0851419a><span class="navbar-toggler-icon" data-v-0851419a></span></button> '
                  ),
                  _vm._ssrNode(
                    '<div id="navbarContent" class="collapse navbar-collapse pb-3 pb-lg-0" data-v-0851419a>',
                    "</div>",
                    [
                      _vm._ssrNode(
                        '<ul class="navbar-nav me-auto" data-v-0851419a>',
                        "</ul>",
                        [
                          _vm._ssrNode(
                            '<li class="nav-item" data-v-0851419a>',
                            "</li>",
                            [
                              _c(
                                "l",
                                {
                                  staticClass:
                                    "nav-link text-dark underline-hover mx-lg-2",
                                  attrs: {
                                    href: _vm.route("shop", { sort: "n" }),
                                  },
                                },
                                [_vm._v("WHAT'S NEW")]
                              ),
                            ],
                            1
                          ),
                          _vm._ssrNode(" "),
                          _vm._ssrNode(
                            '<li class="nav-item dropdown dropdown-hover" data-v-0851419a>',
                            "</li>",
                            [
                              _c(
                                "l",
                                {
                                  staticClass:
                                    "nav-link text-dark underline-hover mx-lg-2",
                                  attrs: { href: _vm.route("shop") },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                    },
                                  },
                                },
                                [_vm._v("SHOP")]
                              ),
                              _vm._ssrNode(" "),
                              _vm._ssrNode(
                                '<ul class="dropdown-menu" data-v-0851419a>',
                                "</ul>",
                                [
                                  _vm._ssrNode(
                                    "<li data-v-0851419a>",
                                    "</li>",
                                    [
                                      _c(
                                        "l",
                                        {
                                          staticClass:
                                            "dropdown-item underline-hover",
                                          attrs: { href: _vm.route("shop") },
                                        },
                                        [_vm._v("VIEW ALL")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._ssrNode(" "),
                                  _vm._l(_vm.categories, function (category) {
                                    return _vm._ssrNode(
                                      "<li data-v-0851419a>",
                                      "</li>",
                                      [
                                        _c(
                                          "l",
                                          {
                                            staticClass:
                                              "dropdown-item underline-hover",
                                            attrs: {
                                              href: _vm.route("shop", {
                                                categories: [category.id],
                                              }),
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(category.name) +
                                                "\n\t\t\t\t\t\t\t\t\t"
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._ssrNode(" "),
                                  _vm._ssrNode(
                                    "<li data-v-0851419a>",
                                    "</li>",
                                    [
                                      _c(
                                        "l",
                                        {
                                          staticClass:
                                            "dropdown-item text-danger underline-hover",
                                          attrs: {
                                            href: _vm.route("shop", {
                                              discounts: 1,
                                            }),
                                          },
                                        },
                                        [_vm._v("SPECIAL PRICES")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                2
                              ),
                            ],
                            2
                          ),
                          _vm._ssrNode(" "),
                          _vm._ssrNode(
                            '<li class="nav-item dropdown dropdown-hover" data-v-0851419a>',
                            "</li>",
                            [
                              _c(
                                "l",
                                {
                                  staticClass:
                                    "nav-link text-dark underline-hover mx-lg-2",
                                  attrs: { href: _vm.route("shop") },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                    },
                                  },
                                },
                                [_vm._v("COLLECTIONS")]
                              ),
                              _vm._ssrNode(" "),
                              _vm._ssrNode(
                                '<ul class="dropdown-menu" data-v-0851419a>',
                                "</ul>",
                                _vm._l(_vm.collections, function (collection) {
                                  return _vm._ssrNode(
                                    "<li data-v-0851419a>",
                                    "</li>",
                                    [
                                      _c(
                                        "l",
                                        {
                                          staticClass:
                                            "dropdown-item underline-hover",
                                          attrs: {
                                            href: _vm.route(
                                              "collection",
                                              collection.id
                                            ),
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(collection.title) +
                                              "\n\t\t\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                }),
                                0
                              ),
                            ],
                            2
                          ),
                          _vm._ssrNode(" "),
                          _vm._ssrNode(
                            '<li class="nav-item" data-v-0851419a>',
                            "</li>",
                            [
                              _c(
                                "l",
                                {
                                  staticClass:
                                    "nav-link text-dark underline-hover mx-lg-2",
                                  attrs: { href: _vm.route("about") },
                                },
                                [_vm._v("AFYLA WORLD")]
                              ),
                            ],
                            1
                          ),
                          _vm._ssrNode(" "),
                          _vm._ssrNode(
                            '<li class="nav-item" data-v-0851419a>',
                            "</li>",
                            [
                              _c(
                                "l",
                                {
                                  staticClass:
                                    "nav-link text-dark underline-hover mx-lg-2",
                                  attrs: { href: _vm.route("sustainability") },
                                },
                                [_vm._v("SUSTAINABILITY")]
                              ),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                      _vm._ssrNode(
                        ' <ul class="navbar-nav"' +
                          _vm._ssrStyle(null, null, {
                            display: _vm.scroll !== 0 ? "" : "none",
                          }) +
                          ' data-v-0851419a><li class="nav-item" data-v-0851419a><div data-bs-toggle="modal" data-bs-target="#search" class="d-flex align-items-center p-1 mx-lg-2 pointer" data-v-0851419a><i class="bi bi-search fs-5" data-v-0851419a></i> <span class="d-block d-lg-none ms-2" data-v-0851419a>SEARCH</span></div></li> <li class="nav-item" data-v-0851419a><div data-bs-toggle="offcanvas"' +
                          _vm._ssrAttr(
                            "data-bs-target",
                            _vm.auth ? "#menu" : "#forms"
                          ) +
                          ' class="d-flex align-items-center p-1 mx-lg-2 pointer" data-v-0851419a><i class="bi bi-person fs-5 user-icon" data-v-0851419a></i> ' +
                          (_vm.auth
                            ? '<span class="d-none d-lg-block ms-2" data-v-0851419a>' +
                              _vm._ssrEscape(
                                _vm._s(_vm.auth.name.split(" ")[0])
                              ) +
                              "</span>"
                            : "<!---->") +
                          ' <span class="d-block d-lg-none ms-2" data-v-0851419a>' +
                          _vm._ssrEscape(
                            _vm._s(
                              _vm.auth ? _vm.auth.name.split(" ")[0] : "SIGN IN"
                            )
                          ) +
                          '</span></div></li> <li class="nav-item position-relative" data-v-0851419a><div data-bs-toggle="offcanvas" data-bs-target="#wishlist" class="d-flex align-items-center p-1 mx-lg-2 pointer" data-v-0851419a><img src="/img/icons/heart.png" height="23px" data-v-0851419a> <span class="d-block d-lg-none ms-2" data-v-0851419a>' +
                          _vm._ssrEscape(
                            "WISHLIST (" + _vm._s(_vm.wishlist.length) + ")"
                          ) +
                          '</span> <small class="counter d-none d-lg-block" data-v-0851419a>' +
                          _vm._ssrEscape(_vm._s(_vm.wishlist.length)) +
                          '</small></div></li> <li class="nav-item position-relative" data-v-0851419a><div data-bs-toggle="offcanvas" data-bs-target="#bag" class="d-flex align-items-center p-1 mx-lg-2 pointer" data-v-0851419a><img src="/img/icons/bag.png" height="23px" data-v-0851419a> <span class="d-block d-lg-none ms-2" data-v-0851419a>' +
                          _vm._ssrEscape(
                            "BAG (" + _vm._s(_vm.bag.length) + ")"
                          ) +
                          '</span> <small class="counter d-none d-lg-block" data-v-0851419a>' +
                          _vm._ssrEscape(_vm._s(_vm.bag.length)) +
                          "</small></div></li></ul>"
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ]
          ),
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        '<div id="bag" tabindex="-1" data-bs-scroll="true" class="offcanvas offcanvas-end" style="width:500px" data-v-0851419a>',
        "</div>",
        [
          _vm._ssrNode(
            '<div class="offcanvas-header" data-v-0851419a><h5 class="fs-2 fw-light mb-0" data-v-0851419a>Shopping bag</h5> <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" class="btn-close text-reset" data-v-0851419a></button></div> '
          ),
          _vm._ssrNode(
            '<div class="offcanvas-body p-0" data-v-0851419a>',
            "</div>",
            [_c("BagMenu")],
            1
          ),
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        '<div id="wishlist" tabindex="-1" data-bs-scroll="true" class="offcanvas offcanvas-end" style="width:500px" data-v-0851419a>',
        "</div>",
        [
          _vm._ssrNode(
            '<div class="offcanvas-header" data-v-0851419a><h5 class="fs-2 fw-light mb-0" data-v-0851419a><i class="bi bi-heart fs-4" data-v-0851419a></i> Your wishlist</h5> <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" class="btn-close text-reset" data-v-0851419a></button></div> '
          ),
          _vm._ssrNode(
            '<div class="offcanvas-body p-0" data-v-0851419a>',
            "</div>",
            [_c("WishlistMenu")],
            1
          ),
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        '<div id="search" tabindex="-1" class="modal fade" data-v-0851419a>',
        "</div>",
        [
          _vm._ssrNode(
            '<div class="modal-dialog modal-fullscreen" data-v-0851419a>',
            "</div>",
            [
              _vm._ssrNode(
                '<div class="modal-content" data-v-0851419a>',
                "</div>",
                [
                  _vm._ssrNode(
                    '<div class="modal-body p-4" data-v-0851419a>',
                    "</div>",
                    [_c("SearchForm")],
                    1
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
      _vm._ssrNode(" "),
      _vm.auth
        ? _vm._ssrNode(
            '<div id="menu" tabindex="-1" data-bs-scroll="true" class="offcanvas offcanvas-end" data-v-0851419a>',
            "</div>",
            [
              _vm._ssrNode(
                '<div class="offcanvas-header pb-0" data-v-0851419a><button type="button" data-bs-dismiss="offcanvas" aria-label="Close" class="btn-close text-reset" data-v-0851419a></button></div> '
              ),
              _vm._ssrNode(
                '<div class="offcanvas-body d-flex flex-column justify-content-between" data-v-0851419a>',
                "</div>",
                [
                  _vm._ssrNode(
                    '<ul class="nav flex-column" data-v-0851419a>',
                    "</ul>",
                    [
                      _vm._ssrNode(
                        '<li class="nav-item text-center fw-medium" data-v-0851419a><p class="px-3 mb-0" data-v-0851419a>' +
                          _vm._ssrEscape(
                            "HELLO, " +
                              _vm._s(
                                _vm.auth.name.split(" ")[0].toUpperCase()
                              ) +
                              "!"
                          ) +
                          '</p> <p class="px-3 mb-4" data-v-0851419a>WE HOPE YOU\'RE DOING WELL.</p></li> ' +
                          (_vm.admin
                            ? '<li class="nav-item" data-v-0851419a><a href="/admin" target="_blank" class="nav-link" data-v-0851419a>DASHBOARD</a></li>'
                            : "<!---->") +
                          " "
                      ),
                      _vm._ssrNode(
                        '<li class="nav-item" data-v-0851419a>',
                        "</li>",
                        [
                          _c(
                            "l",
                            {
                              staticClass: "nav-link underline",
                              attrs: { href: _vm.route("profile") },
                            },
                            [_vm._v("MY AFYLA ACCOUNT")]
                          ),
                        ],
                        1
                      ),
                      _vm._ssrNode(" "),
                      _vm._ssrNode(
                        '<li class="nav-item" data-v-0851419a>',
                        "</li>",
                        [
                          _c(
                            "l",
                            {
                              staticClass: "nav-link",
                              attrs: { href: _vm.route("profile") },
                            },
                            [_vm._v("PROFILE")]
                          ),
                        ],
                        1
                      ),
                      _vm._ssrNode(" "),
                      _vm._ssrNode(
                        '<li class="nav-item" data-v-0851419a>',
                        "</li>",
                        [
                          _c(
                            "l",
                            {
                              staticClass: "nav-link",
                              attrs: { href: _vm.route("orders") },
                            },
                            [_vm._v("ORDERS")]
                          ),
                        ],
                        1
                      ),
                      _vm._ssrNode(" "),
                      _vm._ssrNode(
                        '<li class="nav-item" data-v-0851419a>',
                        "</li>",
                        [
                          _c(
                            "l",
                            {
                              staticClass: "nav-link",
                              attrs: { href: _vm.route("addresses") },
                            },
                            [_vm._v("ADDRESS BOOK")]
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                  _vm._ssrNode(" "),
                  _vm._ssrNode(
                    '<div class="px-3 mb-4" data-v-0851419a>',
                    "</div>",
                    [
                      _vm._ssrNode(
                        "<p data-v-0851419a>",
                        "</p>",
                        [
                          _vm._ssrNode(
                            "If you have any queries or need further assistance, please "
                          ),
                          _c(
                            "l",
                            {
                              staticClass: "underline",
                              attrs: { href: _vm.route("contact") },
                            },
                            [_vm._v("Contact Us")]
                          ),
                          _vm._ssrNode("."),
                        ],
                        2
                      ),
                      _vm._ssrNode(" "),
                      _c(
                        "l",
                        {
                          staticClass: "btn btn-primary py-3",
                          attrs: { href: _vm.route("logout") },
                        },
                        [_vm._v("SIGN OUT")]
                      ),
                    ],
                    2
                  ),
                ],
                2
              ),
            ],
            2
          )
        : _vm._ssrNode(
            '<div id="forms" tabindex="-1" data-bs-scroll="true" class="offcanvas offcanvas-end" data-v-0851419a>',
            "</div>",
            [
              _vm._ssrNode(
                '<div class="offcanvas-header" data-v-0851419a><h5 class="fs-2 fw-light mb-0" data-v-0851419a></h5> <button type="button" data-bs-dismiss="offcanvas" aria-label="Close" class="btn-close text-reset" data-v-0851419a></button></div> '
              ),
              _vm._ssrNode(
                '<div class="offcanvas-body" data-v-0851419a>',
                "</div>",
                [
                  _vm._ssrNode(
                    '<ul class="nav justify-content-between mb-3" data-v-0851419a><li class="nav-item" data-v-0851419a><a href="#login" data-bs-toggle="pill" class="nav-link text-dark active px-0" data-v-0851419a>SIGN IN</a></li> <li class="nav-item" data-v-0851419a><a href="#register" data-bs-toggle="pill" class="nav-link text-dark px-0" data-v-0851419a>CREATE AN ACCOUNT</a></li></ul> '
                  ),
                  _vm._ssrNode(
                    '<div class="tab-content" data-v-0851419a>',
                    "</div>",
                    [_c("LoginForm"), _vm._ssrNode(" "), _c("RegisterForm")],
                    2
                  ),
                ],
                2
              ),
            ],
            2
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=template&id=cb543d60&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h", [
        _c("meta", {
          attrs: {
            "head-key": "description",
            name: "description",
            content: _vm.settings.description,
          },
        }),
      ]),
      _vm._ssrNode(
        " " +
          (!_vm.newsletter
            ? '<div class="newsletter" data-v-cb543d60><div class="content" data-v-cb543d60><button type="button" class="btn btn-close close" data-v-cb543d60></button> <div class="row" data-v-cb543d60><div class="col-6" data-v-cb543d60><p class="fs-4 fw-medium mb-4" data-v-cb543d60>JOIN OUR COMMUNITY</p> <div class="mb-5" data-v-cb543d60><p data-v-cb543d60>GET 25% OFF YOUR FIRST ORDER.</p> <p data-v-cb543d60>RECEIVE EARLY ACCESS TO PRE-SALE.</p> <p data-v-cb543d60>EXCLUSIVE SERVICES, SHOP FASTER.</p> <p data-v-cb543d60>CHECK YOUR ORDERS AND RETURNS.</p> <p data-v-cb543d60>SAVE YOUR FAVORITE ITEMS.</p></div> <form data-v-cb543d60><div class="mb-3" data-v-cb543d60><input type="text" placeholder="Enter your email"' +
              _vm._ssrAttr("value", _vm.form.email) +
              ' class="form-control input" data-v-cb543d60> <small class="text-danger" data-v-cb543d60>' +
              _vm._ssrEscape(_vm._s(_vm.form.errors.email)) +
              '</small></div> <div class="d-grid" data-v-cb543d60><button type="submit" class="btn btn-dark" data-v-cb543d60>SUBSCRIBE</button></div></form></div> <div class="col-6" data-v-cb543d60><img src="/img/newsletter.jpg" class="d-block w-100" data-v-cb543d60></div></div></div></div>'
            : "<!---->") +
          " "
      ),
      !_vm.cookies
        ? _vm._ssrNode(
            '<div class="cookies" data-v-cb543d60>',
            "</div>",
            [
              _vm._ssrNode(
                '<button type="button" class="btn btn-close btn-close-white close" data-v-cb543d60></button> '
              ),
              _vm._ssrNode(
                '<div class="px-4 py-5" data-v-cb543d60>',
                "</div>",
                [
                  _vm._ssrNode(
                    "<p data-v-cb543d60>",
                    "</p>",
                    [
                      _vm._ssrNode(
                        "AFYLA uses cookies to give you the best experience. Cookies allows you shop our collections and use any personalized features available on our website. "
                      ),
                      _c(
                        "l",
                        {
                          staticClass: "text-white underline",
                          attrs: { href: "#" },
                        },
                        [_vm._v("click here")]
                      ),
                      _vm._ssrNode(
                        " to view our cookies policy to learn more about this."
                      ),
                    ],
                    2
                  ),
                  _vm._ssrNode(
                    ' <button type="button" class="btn btn-light" data-v-cb543d60>ACCEPT</button>'
                  ),
                ],
                2
              ),
            ],
            2
          )
        : _vm._e(),
      _vm._ssrNode(" "),
      _vm.flash.auth !== null
        ? _c(
            "PopUp",
            {
              model: {
                value: _vm.popup,
                callback: function ($$v) {
                  _vm.popup = $$v
                },
                expression: "popup",
              },
            },
            [
              _c("div", { staticClass: "text-center py-2" }, [
                _c("p", {
                  staticClass: "fw-medium",
                  domProps: { textContent: _vm._s(_vm.flash.auth) },
                }),
              ]),
            ]
          )
        : _vm._e(),
      _vm._ssrNode(" "),
      _c("AppHeader"),
      _vm._ssrNode(" "),
      _vm._t("default"),
      _vm._ssrNode(" "),
      _c("AppFooter"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=template&id=23786128&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BagMenu.vue?vue&type=template&id=23786128& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.bag.length === 0
      ? _vm._ssrNode(
          '<div class="fs-4 fw-light text-center p-4">',
          "</div>",
          [
            _vm._ssrNode(
              "<p>Your shopping bag is empty.</p> <p>Go shopping!</p>"
            ),
          ],
          2
        )
      : _vm._ssrNode(
          "<div>",
          "</div>",
          [
            _vm._ssrNode(
              '<div class="p-4">' +
                _vm._ssrList(_vm.bag, function (item, i) {
                  return (
                    '<div class="d-flex mb-3"><div style="width:20%"><img' +
                    _vm._ssrAttr("src", item.product.gallery[0]) +
                    ' class="d-block w-100"></div> <div class="ps-2" style="width:80%"><div class="d-flex mb-2"><p class="pe-2 me-auto mb-0">' +
                    _vm._ssrEscape(_vm._s(item.product.title)) +
                    '</p> <div class="flex-shrink-0 fw-medium">' +
                    (item.product.discount
                      ? '<del class="text-muted me-1">' +
                        _vm._ssrEscape(
                          _vm._s(_vm.getFormatedPrice(item.product.price))
                        ) +
                        "</del>"
                      : "<!---->") +
                    " " +
                    (item.product.discount
                      ? '<span class="text-danger">' +
                        _vm._ssrEscape(
                          _vm._s(
                            _vm.getFormatedPrice(
                              item.product.price,
                              item.product.discount
                            )
                          )
                        ) +
                        "</span>"
                      : "<span>" +
                        _vm._ssrEscape(
                          _vm._s(_vm.getFormatedPrice(item.product.price))
                        ) +
                        "</span>") +
                    '</div></div> <div class="mb-2"><span>Size:</span> <span class="text-muted">' +
                    _vm._ssrEscape(_vm._s(item.size.name)) +
                    '</span></div> <div class="d-flex"><div class="me-auto"><span class="pointer px-1">-</span> <span class="px-2">' +
                    _vm._ssrEscape(_vm._s(item.qty)) +
                    '</span> <span class="pointer px-1">+</span></div> <u class="pointer text-muted">Delete</u></div></div></div>'
                  )
                }) +
                '</div> <hr class="m-0"> <div class="d-flex px-4 py-3"><span class="me-auto">' +
                _vm._ssrEscape(_vm._s(_vm.bag.length) + " item(s)") +
                "</span> <span>" +
                _vm._ssrEscape(_vm._s(_vm.getFormatedPrice(_vm.getBagTotal))) +
                '</span></div> <hr class="m-0"> '
            ),
            _vm._ssrNode(
              '<div class="d-grid gap-2 px-4 py-3">',
              "</div>",
              [
                _c(
                  "l",
                  {
                    staticClass: "btn btn-primary py-3",
                    attrs: { href: _vm.route("bag") },
                  },
                  [_vm._v("VIEW MY BAG")]
                ),
                _vm._ssrNode(
                  ' <button type="button" class="btn btn-dark py-3">CHECKOUT</button>'
                ),
              ],
              2
            ),
          ],
          2
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FindSize.vue?vue&type=template&id=55649dc5& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._ssrNode(
        '<div class="mb-3">',
        "</div>",
        [
          _vm._ssrNode(
            '<div class="d-flex align-items-baseline flex-wrap mb-3">',
            "</div>",
            [
              _vm._ssrNode(
                '<p class="me-3 mb-2 mb-lg-0">CHOOSE THE CATEGORY YOU WANT:</p> '
              ),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.index,
                      expression: "index",
                    },
                  ],
                  staticClass: "form-select border shadow-none text-center",
                  staticStyle: { width: "200px" },
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.index = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                  },
                },
                _vm._l(_vm.tables[_vm.active], function (table, i) {
                  return _c("option", {
                    domProps: { value: i, textContent: _vm._s(table.name) },
                  })
                }),
                0
              ),
            ],
            2
          ),
          _vm._ssrNode(
            ' <div class="d-flex justify-content-start justify-content-lg-end mb-3"><div><div class="form-check form-check-inline"><input type="radio" id="cm" value="cm"' +
              _vm._ssrAttr("checked", _vm._q(_vm.active, "cm")) +
              ' class="form-check-input"> <label for="cm" class="form-check-label">in cm</label></div> <div class="form-check form-check-inline"><input type="radio" id="in" value="in"' +
              _vm._ssrAttr("checked", _vm._q(_vm.active, "in")) +
              ' class="form-check-input"> <label for="in" class="form-check-label">in inches</label></div></div></div> <div><img' +
              _vm._ssrAttr("src", _vm.tables[_vm.active][_vm.index].url) +
              ' class="d-block w-100"></div>'
          ),
        ],
        2
      ),
      _vm._ssrNode(
        ' <div><p>In order to select the correct clothing size, we recommend you take the following measurements using a soft tape measure.</p> <div class="row"><div class="col-md-3 col-lg-2"><img src="/img/size/human-front.png" class="d-block w-100"></div> <div class="col-md-6 col-lg-8"><p><b>1. BUST:</b>\n\t\t\t\t\tPlace the measuring tape under the arm and measure the fullest part of your bust keeping the tape straight and taut.\n\t\t\t\t</p> <p><b>2. WAIST:</b>\n\t\t\t\t\tMeasure the narrowest part of your natural waistline.\n\t\t\t\t</p> <p><b>3. HIPS:</b>\n\t\t\t\t\tStand with feet together. The hip should be measured around its fullest part. The measuring tape should brush across both hipbones.\n\t\t\t\t</p> <p><b>4. SHOULDER WIDTH:</b>\n\t\t\t\t\tFrom the edge of your shoulder socket measure all the way over the same point on the other shoulder along the back.\n\t\t\t\t</p> <p><b>5. SLEEVE LENGTH:</b>\n\t\t\t\t\tMeasure from your shoulder socket to your wrist arm bent.\n\t\t\t\t</p></div> <div class="col-md-3 col-lg-2"><img src="/img/size/human-front.png" class="d-block w-100"></div></div></div>'
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoginForm.vue?vue&type=template&id=12a98f72& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-pane fade show active", attrs: { id: "login" } },
    [
      _c(
        "PopUp",
        {
          model: {
            value: _vm.sent,
            callback: function ($$v) {
              _vm.sent = $$v
            },
            expression: "sent",
          },
        },
        [
          _c("div", { staticClass: "text-center py-2" }, [
            _c("p", { staticClass: "fw-medium" }, [
              _vm._v(
                "We have sent you a password reset link to that email address."
              ),
            ]),
          ]),
        ]
      ),
      _vm._ssrNode(" "),
      _vm.tab
        ? _vm._ssrNode(
            "<form>",
            "</form>",
            [
              _vm._ssrNode(
                '<div class="mb-3"><input type="email" placeholder="Email"' +
                  _vm._ssrAttr("value", _vm.forgot.email) +
                  ' class="form-control input"> <small class="text-danger">' +
                  _vm._ssrEscape(_vm._s(_vm.forgot.errors.email)) +
                  '</small></div> <div class="d-grid gap-2"><button type="submit"' +
                  _vm._ssrAttr("disabled", _vm.forgot.processing) +
                  ' class="btn btn-primary py-3">RECEIVE PASSWORD RESET LINK</button> <button type="button" class="btn btn-light py-3">CANCEL</button></div>'
              ),
            ],
            2
          )
        : _vm._ssrNode(
            "<form>",
            "</form>",
            [
              _vm._ssrNode(
                (_vm.login.errors.auth
                  ? '<div role="alert" class="alert alert-danger">' +
                    _vm._ssrEscape(_vm._s(_vm.login.errors.auth)) +
                    "</div>"
                  : "<!---->") +
                  ' <div class="mb-3"><input type="email" placeholder="Email"' +
                  _vm._ssrAttr("value", _vm.login.email) +
                  ' class="form-control input"> <small class="text-danger">' +
                  _vm._ssrEscape(_vm._s(_vm.login.errors.email)) +
                  '</small></div> <div class="mb-3"><input type="password" placeholder="Password"' +
                  _vm._ssrAttr("value", _vm.login.password) +
                  ' class="form-control input"> <small class="text-danger">' +
                  _vm._ssrEscape(_vm._s(_vm.login.errors.password)) +
                  "</small></div> "
              ),
              _vm._ssrNode(
                '<div class="d-flex flex-column flex-sm-row mb-3">',
                "</div>",
                [
                  _vm._ssrNode(
                    '<div class="form-check me-auto"><input type="checkbox" id="remember"' +
                      _vm._ssrAttr(
                        "checked",
                        Array.isArray(_vm.login.remember)
                          ? _vm._i(_vm.login.remember, null) > -1
                          : _vm.login.remember
                      ) +
                      ' class="form-check-input shadow-none"> <label for="remember" class="form-check-label" style="user-select:none">REMEMBER ME</label></div> '
                  ),
                  _c(
                    "l",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          _vm.tab = true
                        },
                      },
                    },
                    [_vm._v("FORGOT PASSWORD ?")]
                  ),
                ],
                2
              ),
              _vm._ssrNode(
                ' <div class="d-grid gap-2"><button type="submit"' +
                  _vm._ssrAttr("disabled", _vm.login.processing) +
                  ' class="btn btn-primary py-3">SIGN IN</button> <p class="text-center mb-0">SIGN IN WITH <a' +
                  _vm._ssrAttr("href", _vm.route("facebook")) +
                  ' class="underline">FACEBOOK</a> OR <a' +
                  _vm._ssrAttr("href", _vm.route("google")) +
                  ' class="underline">GOOGLE</a></p></div>'
              ),
            ],
            2
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=template&id=77019f71&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value",
        },
      ],
      staticClass: "popup-backdrop",
    },
    [
      _vm._ssrNode(
        '<div class="popup-content" data-v-77019f71>',
        "</div>",
        [
          _vm._ssrNode(
            '<button type="button" class="btn btn-close popup-close" data-v-77019f71></button> '
          ),
          _vm._ssrNode(
            '<div class="popup-body" data-v-77019f71>',
            "</div>",
            [_vm._t("default")],
            2
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=template&id=30cc3f4f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-flex" }, [
    _vm._ssrNode(
      '<input type="number" readonly="readonly"' +
        _vm._ssrAttr("value", _vm.number) +
        ' class="form-control bg-white border border-end-0 shadow-none" data-v-30cc3f4f> <div class="border border-start-0" data-v-30cc3f4f><span class="border-start border-bottom" data-v-30cc3f4f>+</span> <span class="border-start border-top" data-v-30cc3f4f>-</span></div>'
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegisterForm.vue?vue&type=template&id=7942be72& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tab-pane fade", attrs: { id: "register" } },
    [
      _vm._ssrNode(
        "<form>",
        "</form>",
        [
          _vm._ssrNode(
            '<div class="mb-3"><input type="text" placeholder="Email"' +
              _vm._ssrAttr("value", _vm.register.email) +
              ' class="form-control input"> <small class="text-danger">' +
              _vm._ssrEscape(_vm._s(_vm.register.errors.email)) +
              '</small></div> <div class="mb-3"><input type="password" placeholder="Password"' +
              _vm._ssrAttr("value", _vm.register.password) +
              ' class="form-control input"> <small class="text-danger">' +
              _vm._ssrEscape(_vm._s(_vm.register.errors.password)) +
              '</small></div> <div class="mb-3"><input type="password" placeholder="Confirm password"' +
              _vm._ssrAttr("value", _vm.register.password_confirmation) +
              ' class="form-control input"></div> <div class="mb-3"><input type="text" placeholder="First name"' +
              _vm._ssrAttr("value", _vm.register.firstname) +
              ' class="form-control input"> <small class="text-danger">' +
              _vm._ssrEscape(_vm._s(_vm.register.errors.firstname)) +
              '</small></div> <div class="mb-3"><input type="text" placeholder="Last name"' +
              _vm._ssrAttr("value", _vm.register.lastname) +
              ' class="form-control input"> <small class="text-danger">' +
              _vm._ssrEscape(_vm._s(_vm.register.errors.lastname)) +
              "</small></div> "
          ),
          _vm._ssrNode(
            '<div class="mb-3">',
            "</div>",
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.register.country,
                      expression: "register.country",
                    },
                  ],
                  staticClass: "form-select input",
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.register,
                        "country",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "" }, domProps: { value: null } },
                    [_vm._v("Country")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.countries, function (country, code) {
                    return _c("option", {
                      key: Math.random(),
                      domProps: {
                        value: country.name,
                        textContent: _vm._s(country.name),
                      },
                    })
                  }),
                ],
                2
              ),
              _vm._ssrNode(
                ' <small class="text-danger">' +
                  _vm._ssrEscape(_vm._s(_vm.register.errors.country)) +
                  "</small>"
              ),
            ],
            2
          ),
          _vm._ssrNode(" "),
          _vm._ssrNode(
            '<div class="mb-3">',
            "</div>",
            [
              _vm._ssrNode(
                '<div class="row gx-2">',
                "</div>",
                [
                  _vm._ssrNode(
                    '<div class="col-12"><small class="fw-medium">WE WOULD LOVE TO KNOW YOUR BIRTHDAY</small></div> '
                  ),
                  _vm._ssrNode(
                    '<div class="col-sm-4 mb-1 mb-sm-0">',
                    "</div>",
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.day,
                              expression: "date.day",
                            },
                          ],
                          staticClass: "form-select",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "day",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Day")]
                          ),
                          _vm._v(" "),
                          _vm._l(31, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: { value: n, textContent: _vm._s(n) },
                            })
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._ssrNode(" "),
                  _vm._ssrNode(
                    '<div class="col-sm-4 mb-1 mb-sm-0">',
                    "</div>",
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.month,
                              expression: "date.month",
                            },
                          ],
                          staticClass: "form-select",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "month",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Month")]
                          ),
                          _vm._v(" "),
                          _vm._l(12, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: {
                                value: n - 1,
                                textContent: _vm._s(n),
                              },
                            })
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._ssrNode(" "),
                  _vm._ssrNode(
                    '<div class="col-sm-4 mb-1 mb-sm-0">',
                    "</div>",
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.date.year,
                              expression: "date.year",
                            },
                          ],
                          staticClass: "form-select",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.date,
                                  "year",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.setBirthday,
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              attrs: { selected: "" },
                              domProps: { value: null },
                            },
                            [_vm._v("Year")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.years, function (n) {
                            return _c("option", {
                              key: Math.random(),
                              domProps: { value: n, textContent: _vm._s(n) },
                            })
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                ],
                2
              ),
              _vm._ssrNode(
                ' <small class="text-danger">' +
                  _vm._ssrEscape(_vm._s(_vm.register.errors.birthday)) +
                  "</small>"
              ),
            ],
            2
          ),
          _vm._ssrNode(
            ' <div class="mb-3"><div class="form-check"><input type="checkbox" id="subscribe"' +
              _vm._ssrAttr(
                "checked",
                Array.isArray(_vm.register.subscribe)
                  ? _vm._i(_vm.register.subscribe, null) > -1
                  : _vm.register.subscribe
              ) +
              ' class="form-check-input shadow-none"> <label for="subscribe" class="form-check-label" style="user-select:none">I SUBSCRIBE FOR EXCLUSIVE UPDATES</label></div> <div class="form-check"><input type="checkbox" id="agree"' +
              _vm._ssrAttr(
                "checked",
                Array.isArray(_vm.register.agree)
                  ? _vm._i(_vm.register.agree, null) > -1
                  : _vm.register.agree
              ) +
              ' class="form-check-input shadow-none"> <label for="agree" class="form-check-label" style="user-select:none">I AGREE TO TERMS &amp; CONDITIONS</label><br> <small class="text-danger">' +
              _vm._ssrEscape(_vm._s(_vm.register.errors.agree)) +
              '</small></div></div> <div class="d-grid gap-2"><button type="submit"' +
              _vm._ssrAttr("disabled", _vm.register.processing) +
              ' class="btn btn-primary py-3">CREATE AN ACCOUNT</button> <p class="text-center mb-0">SIGN IN WITH <a' +
              _vm._ssrAttr("href", _vm.route("facebook")) +
              ' class="underline">FACEBOOK</a> OR <a' +
              _vm._ssrAttr("href", _vm.route("google")) +
              ' class="underline">GOOGLE</a></p></div>'
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._ssrNode(
        '<div class="input-group" data-v-28665937><span class="input-group-text bg-white border-0 ps-4 pe-2" data-v-28665937><a' +
          _vm._ssrAttr("href", _vm.route("shop", { search: _vm.search })) +
          ' data-v-28665937><i class="bi bi-search fs-4 text-dark" data-v-28665937></i></a></span> <input type="text" placeholder="SEARCH FOR SOMETHING YOU LOVE…"' +
          _vm._ssrAttr("value", _vm.search) +
          ' class="form-control form-control-lg border-0 shadow-none py-3" data-v-28665937> <span class="input-group-text bg-white border-0 ps-2 pe-4" data-v-28665937><span data-bs-dismiss="modal" aria-label="Close" class="btn-close pointer" data-v-28665937></span></span></div> <hr data-v-28665937> '
      ),
      _vm._ssrNode('<div class="px-4 py-5" data-v-28665937>', "</div>", [
        _vm.search.length === 0
          ? _vm._ssrNode(
              "<div data-v-28665937>",
              "</div>",
              [
                _vm._ssrNode(
                  '<p class="fw-medium mb-4" data-v-28665937>SUGGESTIONS</p> '
                ),
                _vm._ssrNode(
                  '<div class="row gy-4" data-v-28665937>',
                  "</div>",
                  _vm._l(_vm.categories, function (category) {
                    return _vm._ssrNode(
                      '<div class="col-sm-4 col-lg-2 text-center" data-v-28665937>',
                      "</div>",
                      [
                        _c("l", {
                          staticClass: "underline",
                          attrs: {
                            href: _vm.route("shop", {
                              categories: [category.id],
                            }),
                          },
                          domProps: { textContent: _vm._s(category.name) },
                        }),
                        _vm._ssrNode(
                          " <img" +
                            _vm._ssrAttr("src", category.img) +
                            ' class="d-block w-100 mt-3" data-v-28665937>'
                        ),
                      ],
                      2
                    )
                  }),
                  0
                ),
              ],
              2
            )
          : _vm._ssrNode("<div data-v-28665937>", "</div>", [
              _vm.noresult
                ? _vm._ssrNode(
                    "<div data-v-28665937>",
                    "</div>",
                    [
                      _vm._ssrNode(
                        '<div class="mb-5" data-v-28665937><p class="fw-medium" data-v-28665937>' +
                          _vm._ssrEscape(
                            'No results were found for the keyword "' +
                              _vm._s(_vm.search) +
                              '"'
                          ) +
                          "</p> <p data-v-28665937>Try using the navigation to find what you’re looking for or you can use another keyword</p></div> "
                      ),
                      _vm._ssrNode(
                        '<div class="mb-5" data-v-28665937>',
                        "</div>",
                        [
                          _vm._ssrNode(
                            "<p data-v-28665937>You can also search here:</p> "
                          ),
                          _vm._ssrNode(
                            '<ul class="nav flex-column" data-v-28665937>',
                            "</ul>",
                            _vm._l(_vm.categories, function (category) {
                              return _vm._ssrNode(
                                '<li class="nav-item" data-v-28665937>',
                                "</li>",
                                [
                                  _c("l", {
                                    staticClass: "underline",
                                    attrs: {
                                      href: _vm.route("shop", {
                                        categories: [category.id],
                                      }),
                                    },
                                    domProps: {
                                      textContent: _vm._s(category.name),
                                    },
                                  }),
                                ],
                                1
                              )
                            }),
                            0
                          ),
                        ],
                        2
                      ),
                      _vm._ssrNode(
                        ' <div class="row justify-content-center gy-4" data-v-28665937><div class="col-12" data-v-28665937><p class="fw-medium text-center mb-0" data-v-28665937>HOW CAN WE HELP YOU?</p></div> <div class="col-sm-4 col-lg-3 col-xl-2" data-v-28665937><div class="d-grid" data-v-28665937><a' +
                          _vm._ssrAttr("href", "mailto:" + _vm.settings.email) +
                          ' class="btn btn-primary py-3" data-v-28665937><img src="/img/icons/mail.png" height="26px" class="me-3" data-v-28665937> <span data-v-28665937>EMAIL US</span></a></div></div> <div class="col-sm-4 col-lg-3 col-xl-2" data-v-28665937><div class="d-grid" data-v-28665937><a' +
                          _vm._ssrAttr(
                            "href",
                            "https://wa.me/" + _vm.settings.whatsapp
                          ) +
                          ' target="_blank" class="btn btn-primary py-3" data-v-28665937><img src="/img/icons/chat.png" height="26px" class="me-3" data-v-28665937> <span data-v-28665937>CHAT WITH US</span></a></div></div> <div class="col-sm-4 col-lg-3 col-xl-2" data-v-28665937><div class="d-grid" data-v-28665937><a' +
                          _vm._ssrAttr("href", "tel:" + _vm.settings.phone) +
                          ' class="btn btn-primary py-3" data-v-28665937><img src="/img/icons/phone.png" height="26px" class="me-3" data-v-28665937> <span data-v-28665937>CALL US</span></a></div></div></div>'
                      ),
                    ],
                    2
                  )
                : _vm._ssrNode(
                    "<div data-v-28665937>",
                    "</div>",
                    [
                      _vm._ssrNode(
                        '<div class="mb-5" data-v-28665937>',
                        "</div>",
                        [
                          _vm._ssrNode(
                            '<p class="fw-medium" data-v-28665937>Categories :</p> '
                          ),
                          _vm.cats.length === 0 && _vm.subs.length === 0
                            ? _vm._ssrNode(
                                "<p data-v-28665937>",
                                "</p>",
                                [
                                  _vm._ssrNode(
                                    _vm._ssrEscape(
                                      'No results were found for the keyword "' +
                                        _vm._s(_vm.search) +
                                        '" in categories'
                                    )
                                  ),
                                ],
                                2
                              )
                            : _vm._ssrNode(
                                '<ul class="nav flex-column" data-v-28665937>',
                                "</ul>",
                                [
                                  _vm._l(_vm.cats, function (cat) {
                                    return _vm._ssrNode(
                                      '<li class="nav-item" data-v-28665937>',
                                      "</li>",
                                      [
                                        _c("l", {
                                          staticClass: "underline",
                                          attrs: {
                                            href: _vm.route("shop", {
                                              categories: [cat.id],
                                            }),
                                          },
                                          domProps: {
                                            textContent: _vm._s(cat.name),
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  }),
                                  _vm._ssrNode(" "),
                                  _vm._l(_vm.subs, function (sub) {
                                    return _vm._ssrNode(
                                      '<li class="nav-item" data-v-28665937>',
                                      "</li>",
                                      [
                                        _c("l", {
                                          staticClass: "underline",
                                          attrs: {
                                            href: _vm.route("shop", {
                                              subs: [sub.id],
                                            }),
                                          },
                                          domProps: {
                                            textContent: _vm._s(sub.name),
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  }),
                                ],
                                2
                              ),
                        ],
                        2
                      ),
                      _vm._ssrNode(
                        ' <div class="mb-5" data-v-28665937><p class="fw-medium" data-v-28665937>Products :</p> ' +
                          (_vm.products.length === 0
                            ? "<p data-v-28665937>" +
                              _vm._ssrEscape(
                                'No results were found for the keyword "' +
                                  _vm._s(_vm.search) +
                                  '" in products'
                              ) +
                              "</p>"
                            : '<div class="row gy-3" data-v-28665937>' +
                              _vm._ssrList(_vm.products, function (product) {
                                return (
                                  '<div class="col-md-6 col-lg-4 col-xl-3" data-v-28665937><a' +
                                  _vm._ssrAttr(
                                    "href",
                                    _vm.route("product", product.id)
                                  ) +
                                  ' class="row g-0" data-v-28665937><div class="col-md-4 col-xl-3" data-v-28665937><img' +
                                  _vm._ssrAttr("src", product.gallery[0]) +
                                  ' class="d-block w-100" data-v-28665937></div> <div class="col-md-8 col-xl-9 d-flex align-items-center bg-primary" data-v-28665937><p class="text-dark fw-medium px-3 py-2 mb-0" data-v-28665937>' +
                                  _vm._ssrEscape(_vm._s(product.title)) +
                                  "</p></div></a></div>"
                                )
                              }) +
                              "</div>") +
                          "</div> "
                      ),
                      _vm._ssrNode(
                        '<div class="colors" data-v-28665937>',
                        "</div>",
                        [
                          _vm._ssrNode(
                            '<p class="fw-medium" data-v-28665937>Colors :</p> ' +
                              (_vm.colors.length === 0
                                ? "<p data-v-28665937>" +
                                  _vm._ssrEscape(
                                    'No results were found for the keyword "' +
                                      _vm._s(_vm.search) +
                                      '" in colors'
                                  ) +
                                  "</p>"
                                : "<!---->") +
                              " "
                          ),
                          _vm._ssrNode(
                            '<ul class="nav flex-column" data-v-28665937>',
                            "</ul>",
                            _vm._l(_vm.colors, function (color) {
                              return _vm._ssrNode(
                                '<li class="nav-item d-flex align-items-center mb-1" data-v-28665937>',
                                "</li>",
                                [
                                  _vm._ssrNode(
                                    '<span class="me-2"' +
                                      _vm._ssrStyle(
                                        null,
                                        { backgroundColor: color.hex },
                                        null
                                      ) +
                                      " data-v-28665937></span> "
                                  ),
                                  _c("l", {
                                    staticClass: "fw-medium",
                                    attrs: {
                                      href: _vm.route("shop", {
                                        colors: [color.id],
                                      }),
                                    },
                                    domProps: {
                                      textContent: _vm._s(color.name),
                                    },
                                  }),
                                ],
                                2
                              )
                            }),
                            0
                          ),
                        ],
                        2
                      ),
                    ],
                    2
                  ),
            ]),
      ]),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SocialShare.vue?vue&type=template&id=2ea85657&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-light text-start" }, [
    _vm._ssrNode(
      "<div" +
        _vm._ssrAttr("id", "shareOne" + _vm.id) +
        ' tabindex="-1" class="modal fade" data-v-2ea85657><div class="modal-dialog" data-v-2ea85657><div class="modal-content bg-primary" data-v-2ea85657><div class="modal-header border-0 pb-0" data-v-2ea85657><h5 class="modal-title" data-v-2ea85657>Share this product</h5> <button type="button" data-bs-dismiss="modal" aria-label="Close" class="btn-close" data-v-2ea85657></button></div> <div class="modal-body" data-v-2ea85657><form data-v-2ea85657><div class="row" data-v-2ea85657><div class="col-3" data-v-2ea85657><label class="py-1" data-v-2ea85657>From</label></div> <div class="col-9" data-v-2ea85657><div class="mb-2" data-v-2ea85657><input type="text"' +
        _vm._ssrAttr("value", _vm.form.from) +
        ' class="form-control form-control-sm border shadow-none" data-v-2ea85657> <small class="text-danger" data-v-2ea85657>' +
        _vm._ssrEscape(_vm._s(_vm.form.errors.from)) +
        '</small></div></div> <div class="col-3" data-v-2ea85657><label class="py-1" data-v-2ea85657>To</label></div> <div class="col-9" data-v-2ea85657><div class="mb-2" data-v-2ea85657><input type="text"' +
        _vm._ssrAttr("value", _vm.form.to) +
        ' class="form-control form-control-sm border shadow-none" data-v-2ea85657> <small class="text-danger" data-v-2ea85657>' +
        _vm._ssrEscape(_vm._s(_vm.form.errors.to)) +
        '</small></div></div> <div class="col-3" data-v-2ea85657></div> <div class="col-9" data-v-2ea85657><button type="submit" class="btn btn-sm btn-outline-dark px-4" data-v-2ea85657>SEND</button></div></div></form></div></div></div></div> <ul class="nav" data-v-2ea85657><li class="mx-2" data-v-2ea85657><a' +
        _vm._ssrAttr("href", _vm.facebook) +
        ' target="_blank" class="text-dark" data-v-2ea85657><i class="bi bi-facebook" data-v-2ea85657></i></a></li> <li class="mx-2" data-v-2ea85657><a' +
        _vm._ssrAttr("href", _vm.twitter) +
        ' target="_blank" class="text-dark" data-v-2ea85657><i class="bi bi-twitter" data-v-2ea85657></i></a></li> <li class="mx-2" data-v-2ea85657><a' +
        _vm._ssrAttr("href", _vm.linkedin) +
        ' target="_blank" class="text-dark" data-v-2ea85657><i class="bi bi-linkedin" data-v-2ea85657></i></a></li> <li class="mx-2" data-v-2ea85657><a' +
        _vm._ssrAttr("href", _vm.pinterest) +
        ' target="_blank" class="text-dark" data-v-2ea85657><i class="bi bi-pinterest" data-v-2ea85657></i></a></li> <li class="mx-2" data-v-2ea85657><a href="#" data-bs-toggle="modal"' +
        _vm._ssrAttr("data-bs-target", "#shareOne" + _vm.id) +
        ' class="text-dark" data-v-2ea85657><i class="bi bi-envelope-fill" data-v-2ea85657></i></a></li></ul>'
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserMenu.vue?vue&type=template&id=6f268f96& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("AppLayout", [
    _c(
      "section",
      { staticClass: "bg-primary border-bottom border-secondary" },
      [
        _c("div", { staticClass: "row gx-0" }, [
          _c(
            "div",
            { staticClass: "col-md-4 col-lg-3 border-end border-secondary" },
            [
              _c("div", { staticClass: "py-5" }, [
                _c("ul", { staticClass: "nav flex-column" }, [
                  _vm.admin
                    ? _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link px-3 px-sm-5",
                            attrs: { href: "/admin", target: "_blank" },
                          },
                          [_vm._v("DASHBOARD")]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: {
                        "bg-secondary": _vm.route().current() === "profile",
                      },
                    },
                    [
                      _c(
                        "l",
                        {
                          staticClass: "nav-link px-3 px-sm-5",
                          attrs: { href: _vm.route("profile") },
                        },
                        [_vm._v("PROFILE")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: {
                        "bg-secondary": _vm.route().current() === "password",
                      },
                    },
                    [
                      _c(
                        "l",
                        {
                          staticClass: "nav-link px-3 px-sm-5",
                          attrs: { href: _vm.route("password") },
                        },
                        [_vm._v("CHANGE YOUR PASSWORD")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: {
                        "bg-secondary": _vm.route().current() === "orders",
                      },
                    },
                    [
                      _c(
                        "l",
                        {
                          staticClass: "nav-link px-3 px-sm-5",
                          attrs: { href: _vm.route("orders") },
                        },
                        [_vm._v("ORDERS")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "nav-item",
                      class: {
                        "bg-secondary": _vm.route().current() === "addresses",
                      },
                    },
                    [
                      _c(
                        "l",
                        {
                          staticClass: "nav-link px-3 px-sm-5",
                          attrs: { href: _vm.route("addresses") },
                        },
                        [_vm._v("ADDRESS BOOK")]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8 col-lg-9" }, [
            _c(
              "div",
              { staticClass: "py-5", staticStyle: { "min-height": "60vh" } },
              [_vm._t("default")],
              2
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/WishlistMenu.vue?vue&type=template&id=cddd72a2& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "PopUp",
        {
          model: {
            value: _vm.soldout,
            callback: function ($$v) {
              _vm.soldout = $$v
            },
            expression: "soldout",
          },
        },
        [
          _c("div", { staticClass: "text-center py-2" }, [
            _c("p", { staticClass: "fw-medium" }, [
              _vm._v("Unfortunately, this item is out of stock."),
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-secondary", attrs: { type: "button" } },
              [_vm._v("EMAIL WHEN AVAILABLE")]
            ),
          ]),
        ]
      ),
      _vm._ssrNode(" "),
      _c(
        "PopUp",
        {
          model: {
            value: _vm.done,
            callback: function ($$v) {
              _vm.done = $$v
            },
            expression: "done",
          },
        },
        [
          _c(
            "div",
            { staticClass: "text-center py-2" },
            [
              _c("p", { staticClass: "fw-medium" }, [
                _vm._v("This item has been added to your shopping bag."),
              ]),
              _vm._v(" "),
              _c(
                "l",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { href: _vm.route("bag") },
                },
                [_vm._v("VIEW MY BAG")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._ssrNode(" "),
      _vm.wishlist.length === 0
        ? _vm._ssrNode(
            '<div class="p-4">',
            "</div>",
            [
              _vm._ssrNode("<p>Your wishlist is still empty.</p> "),
              _vm._ssrNode(
                "<p>",
                "</p>",
                [
                  _vm._ssrNode("We invite you to discover our "),
                  _c(
                    "l",
                    {
                      staticClass: "underline",
                      attrs: { href: _vm.route("shop") },
                    },
                    [_vm._v("products")]
                  ),
                  _vm._ssrNode(" and save what you like."),
                ],
                2
              ),
            ],
            2
          )
        : _vm._ssrNode(
            "<div>",
            "</div>",
            [
              _vm._ssrNode(
                '<div class="p-4">',
                "</div>",
                _vm._l(_vm.wishlist, function (item, i) {
                  return _vm._ssrNode(
                    '<div class="d-flex mb-3">',
                    "</div>",
                    [
                      _vm._ssrNode(
                        '<div style="width:20%"><img' +
                          _vm._ssrAttr("src", item.product.gallery[0]) +
                          ' class="d-block w-100"></div> '
                      ),
                      _vm._ssrNode(
                        '<div class="ps-2" style="width:80%">',
                        "</div>",
                        [
                          _vm._ssrNode(
                            '<div class="d-flex mb-2"><p class="pe-2 me-auto mb-0">' +
                              _vm._ssrEscape(_vm._s(item.product.title)) +
                              '</p> <div class="flex-shrink-0 fw-medium">' +
                              (item.product.discount
                                ? '<del class="text-muted me-1">' +
                                  _vm._ssrEscape(
                                    _vm._s(
                                      _vm.getFormatedPrice(item.product.price)
                                    )
                                  ) +
                                  "</del>"
                                : "<!---->") +
                              " " +
                              (item.product.discount
                                ? '<span class="text-danger">' +
                                  _vm._ssrEscape(
                                    _vm._s(
                                      _vm.getFormatedPrice(
                                        item.product.price,
                                        item.product.discount
                                      )
                                    )
                                  ) +
                                  "</span>"
                                : "<span>" +
                                  _vm._ssrEscape(
                                    _vm._s(
                                      _vm.getFormatedPrice(item.product.price)
                                    )
                                  ) +
                                  "</span>") +
                              "</div></div> "
                          ),
                          _vm._ssrNode(
                            '<div class="d-flex mb-3">',
                            "</div>",
                            [
                              _vm._ssrNode('<span class="me-2">Size:</span> '),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.sizes[i],
                                      expression: "sizes[i]",
                                    },
                                  ],
                                  staticClass: "form-select input py-0",
                                  staticStyle: { "max-width": "70px" },
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.sizes,
                                        i,
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                  },
                                },
                                _vm._l(item.product.sizes, function (s) {
                                  return s.qty !== null
                                    ? _c(
                                        "option",
                                        {
                                          key: Math.random(),
                                          domProps: { value: s.size_id },
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t" +
                                              _vm._s(s.size.name) +
                                              "\n\t\t\t\t\t\t\t"
                                          ),
                                        ]
                                      )
                                    : _vm._e()
                                }),
                                0
                              ),
                            ],
                            2
                          ),
                          _vm._ssrNode(
                            ' <div class="d-flex justify-content-end"><button type="button"' +
                              _vm._ssrAttr(
                                "disabled",
                                !_vm.sizes[i] || _vm.loading
                              ) +
                              ' class="btn btn-primary btn-sm">' +
                              (_vm.sizes[i]
                                ? "<span>" +
                                  _vm._ssrEscape(
                                    _vm._s(
                                      _vm.stock[i] === 0
                                        ? "SOLD OUT"
                                        : "ADD TO BAG"
                                    )
                                  ) +
                                  "</span>"
                                : "<span>CHOOSE A SIZE</span>") +
                              "</button></div>"
                          ),
                        ],
                        2
                      ),
                    ],
                    2
                  )
                }),
                0
              ),
              _vm._ssrNode(" "),
              _vm._ssrNode(
                '<div class="d-grid px-4">',
                "</div>",
                [
                  _c(
                    "l",
                    {
                      staticClass: "btn btn-primary py-3",
                      attrs: { href: _vm.route("wishlist") },
                    },
                    [
                      _vm._v(
                        "MANAGE MY WISHLIST (" +
                          _vm._s(_vm.wishlist.length) +
                          ")"
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            2
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Collection.vue?vue&type=style&index=0&id=466c3607&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("6ec30a67", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CustomerCare.vue?vue&type=style&index=0&id=051306b8&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("6c22191e", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Faq.vue?vue&type=style&index=0&id=0484b006&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("1dd1588c", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("e0795bf6", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Looks.vue?vue&type=style&index=0&id=aa40d84a&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("5b40b70d", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Product.vue?vue&type=style&index=0&id=e2dbd454&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("0625b266", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Shop.vue?vue&type=style&index=0&id=72c9e71f&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("6c39b7b4", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Wishlist.vue?vue&type=style&index=0&id=0f8ddc24&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("606048de", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppFooter.vue?vue&type=style&index=0&id=4ab6097e&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("03579f3c", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppHeader.vue?vue&type=style&index=0&id=0851419a&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("17df90b3", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AppLayout.vue?vue&type=style&index=0&id=cb543d60&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("2a2fae1a", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PopUp.vue?vue&type=style&index=0&id=77019f71&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("15e132d2", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QtyField.vue?vue&type=style&index=0&id=30cc3f4f&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("45bb1aec", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=style&index=0&id=28665937&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesServer.js */ "./node_modules/vue-style-loader/lib/addStylesServer.js")["default"])
module.exports.__inject__ = function (context) {
  add("4d7033b0", content, false, context)
};

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesServer.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesServer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesServer)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": "./resources/js/Pages/About.vue",
	"./About.vue": "./resources/js/Pages/About.vue",
	"./Addresses": "./resources/js/Pages/Addresses.vue",
	"./Addresses.vue": "./resources/js/Pages/Addresses.vue",
	"./Bag": "./resources/js/Pages/Bag.vue",
	"./Bag.vue": "./resources/js/Pages/Bag.vue",
	"./Collection": "./resources/js/Pages/Collection.vue",
	"./Collection.vue": "./resources/js/Pages/Collection.vue",
	"./Contact": "./resources/js/Pages/Contact.vue",
	"./Contact.vue": "./resources/js/Pages/Contact.vue",
	"./CustomerCare": "./resources/js/Pages/CustomerCare.vue",
	"./CustomerCare.vue": "./resources/js/Pages/CustomerCare.vue",
	"./Faq": "./resources/js/Pages/Faq.vue",
	"./Faq.vue": "./resources/js/Pages/Faq.vue",
	"./Home": "./resources/js/Pages/Home.vue",
	"./Home.vue": "./resources/js/Pages/Home.vue",
	"./Looks": "./resources/js/Pages/Looks.vue",
	"./Looks.vue": "./resources/js/Pages/Looks.vue",
	"./Orders": "./resources/js/Pages/Orders.vue",
	"./Orders.vue": "./resources/js/Pages/Orders.vue",
	"./Page": "./resources/js/Pages/Page.vue",
	"./Page.vue": "./resources/js/Pages/Page.vue",
	"./PasswordChange": "./resources/js/Pages/PasswordChange.vue",
	"./PasswordChange.vue": "./resources/js/Pages/PasswordChange.vue",
	"./PasswordReset": "./resources/js/Pages/PasswordReset.vue",
	"./PasswordReset.vue": "./resources/js/Pages/PasswordReset.vue",
	"./Product": "./resources/js/Pages/Product.vue",
	"./Product.vue": "./resources/js/Pages/Product.vue",
	"./Profile": "./resources/js/Pages/Profile.vue",
	"./Profile.vue": "./resources/js/Pages/Profile.vue",
	"./Shop": "./resources/js/Pages/Shop.vue",
	"./Shop.vue": "./resources/js/Pages/Shop.vue",
	"./Sustainability": "./resources/js/Pages/Sustainability.vue",
	"./Sustainability.vue": "./resources/js/Pages/Sustainability.vue",
	"./Wishlist": "./resources/js/Pages/Wishlist.vue",
	"./Wishlist.vue": "./resources/js/Pages/Wishlist.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-vue":
/*!*****************************************!*\
  !*** external "@inertiajs/inertia-vue" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/inertia-vue");

/***/ }),

/***/ "@inertiajs/server":
/*!************************************!*\
  !*** external "@inertiajs/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/server");

/***/ }),

/***/ "accordion-js":
/*!*******************************!*\
  !*** external "accordion-js" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("accordion-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "countries-list":
/*!*********************************!*\
  !*** external "countries-list" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("countries-list");

/***/ }),

/***/ "glider-js":
/*!****************************!*\
  !*** external "glider-js" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("glider-js");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("vue");

/***/ }),

/***/ "vue-server-renderer":
/*!**************************************!*\
  !*** external "vue-server-renderer" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("vue-server-renderer");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/ssr.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/src/js/index.js");
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/server */ "@inertiajs/server");
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "@inertiajs/inertia-vue");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-server-renderer */ "vue-server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






_inertiajs_server__WEBPACK_IMPORTED_MODULE_2___default()(function (page) {
  return (0,_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_3__.createInertiaApp)({
    page: page,
    render: (0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_4__.createRenderer)().renderToString,
    title: function title(_title) {
      return "".concat(_title, " - AFYLA");
    },
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var app = _ref.app,
          props = _ref.props,
          plugin = _ref.plugin;

      var Ziggy = _objectSpread(_objectSpread({}, props.props.initialPage.props.ziggy), {}, {
        location: new URL(props.props.initialPage.props.ziggy.url)
      });

      vue__WEBPACK_IMPORTED_MODULE_0___default().use(plugin).mixin({
        computed: {
          getBagTotal: function getBagTotal() {
            var total = 0;
            this.$page.props.bag.forEach(function (item) {
              var price = item.product.discount ? item.product.price * item.product.discount / 100 : item.product.price;
              total += price * item.qty;
            });
            return total;
          }
        },
        methods: {
          route: function route(name, params, absolute) {
            var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ziggy;
            return (0,ziggy__WEBPACK_IMPORTED_MODULE_1__["default"])(name, params, absolute, config);
          },
          getFormatedPrice: function getFormatedPrice(price) {
            var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var value = discount ? price * discount / 100 : price;
            return new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(value);
          }
        }
      });
      return new (vue__WEBPACK_IMPORTED_MODULE_0___default())({
        render: function render(h) {
          return h(app, props);
        }
      });
    }
  });
});
})();

/******/ })()
;