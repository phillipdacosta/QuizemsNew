(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcomeText{\n\n    text-align: center;\n    color: #17a2b8;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n\n.btn{\n\n    padding: 30px 50px;\n}\n\n.container{\n\n    font-family:Helvetica Neue;\n}\n\n.aboutText{\n\n    color: #034f6f;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n</head>\n\n\n\n<div class = \"container\"> \n\n<div class = \"jumbotron\">\n  \n\n\n<h1 class = \"welcomeText\">\n\n    Welcome to QuizEms!\n  </h1>\n\n  <hr>\n  <br>\n\n  <div class = \"aboutText\">\n\n \n  <p>\n      The Easy Solution to Practice Quizzes and Tests! <br><br> \n       QuizEms is your go to practice quiz maker that eliminates many of the pain points that professors around the world experience with their current options. QuizEms strives to provide an easy and user-friendly experience for all of our users. The process is simple and outlined below: <br> <br>\n       \n       1. You (the professor) can start by clicking the Create Quiz button below. <br> <br>\n       2. Fill out all the details for your quiz (your name, quiz name and quiz duration). <br> <br>\n       3. Add and edit as many questions as you would like.<br> <br>\n       4. Enter the correct answer.<br> <br>\n       5. Save your progress as you go. <br><br>\n       6. Click the Create Quiz Link button after you have saved your quiz to retrieve a direct shareable link.<br> <br>\n        <br>\n        We hope you enjoy the process and make many quizzes for your students!\n\n  </p>\n  </div>\n<hr>\n\n\n<hr>\n<br>\n\n  <br>\n\n  <div class = \"col text-center\"> \n\n\n<button type=\"button\" class=\"btn btn-primary \" (click) = \"navigateToQuiz()\">Create Quiz</button> \n\n</div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(router) {
        this.router = router;
    }
    AboutComponent.prototype.navigateToQuiz = function () {
        this.router.navigateByUrl('home');
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/professor/professor.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
    },
    {
        path: 'home',
        component: _professor_professor_component__WEBPACK_IMPORTED_MODULE_2__["ProfessorComponent"],
    },
    {
        path: 'quiz',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'quizems';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/professor/professor.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _question_display_question_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./question-display/question-display.component */ "./src/app/question-display/question-display.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _professor_professor_component__WEBPACK_IMPORTED_MODULE_5__["ProfessorComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_6__["StudentComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_7__["QuestionsComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                _question_display_question_display_component__WEBPACK_IMPORTED_MODULE_9__["QuestionDisplayComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_11__["TimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.flag = true;
        this.flag2 = true;
        this.validationFlag = false;
        this.key1 = 'key1';
        this.key2 = 'key2';
        this.key3 = 'key3';
        this.questionslist = new Array();
    }
    DataService.prototype.removeQues = function (question) {
        this.questionslist.splice(this.questionslist.indexOf(question, 1));
        console.log(this.questionslist);
    };
    DataService.prototype.startTimer = function (timeLeft) {
        var _this = this;
        console.log(timeLeft);
        localStorage.getItem('key1');
        this.timeLeft = JSON.parse(localStorage.getItem('key1'));
        console.log(this.timeLeft);
        //var date = new Date(this.timeLeft * 1000).toISOString().substr(11, 8);
        //console.log(date)
        this.timeLeft = this.timeLeft * 60;
        console.log(this.timeLeft);
        this.interval = setInterval(function () {
            console.log(_this.timeLeft);
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
                _this.date = new Date(_this.timeLeft * 1000).toISOString().substr(11, 8);
                // console.log(date)
                if (_this.timeLeft == 0) {
                    _this.flag = false;
                }
            }
            else {
                timeLeft;
            }
        }, 1000);
    };
    DataService.prototype.arrayToJSON = function (array) {
        return { "data": array };
    };
    DataService.prototype.saveData = function (key) {
        var value = JSON.stringify(this.arrayToJSON(this.questionslist));
        localStorage.setItem(key, value);
        console.log(value);
    };
    DataService.prototype.saveProfAndClass = function (professorName, quizName) {
        this.professorName = localStorage.getItem('key2');
        this.quizName = localStorage.getItem('key3');
        this.professorName = JSON.parse(localStorage.getItem('key2'));
        this.quizName = JSON.parse(localStorage.getItem('key3'));
    };
    DataService.prototype.loadData = function (key) {
        this.questionslist = JSON.parse(localStorage.getItem(key))['data'];
        console.log(this.questionslist);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/professor/professor.component.css":
/*!***************************************************!*\
  !*** ./src/app/professor/professor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider{\n    width:5px;\n    height:auto;\n    display:inline-block;\n}\n\n.heading{\n\n  margin: auto;\n  width: 60%;\n  border: 3px solid #73AD21;\n  padding: 10px;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n\n.headingButtons{\n\n  margin: auto;\n  width: 30vw;\n  padding: 10px;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\n  \n}\n\n.inputgroup{\n\n  text-align: center;\n\n}\n\n.modal-lg{\n\n  width: 750px;\n  height: 750px;\n \n}\n\n.newQ{\n\n  text-align: center;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n\n#checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: #7ac142;\n  fill: none;\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n     position: fixed;\n    top:-100%; right:-100%; left:-100%; bottom:-100%;\n    margin:auto;\n    z-index:0;\n\n\n}\n\n.checkmark {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 2;\n  stroke: #fff;\n  stroke-miterlimit: 10;\n  margin: -6.5% auto;\n  box-shadow: inset 0px 0px 0px #7ac142;\n  -webkit-animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\n          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;\n  position: fixed;\n  top:-100%; right:-100%; left:-100%; bottom:-100%;\n  margin:auto;\n  z-index:0;\n  -webkit-animation: opacityOn 1s normal forwards ;\n          animation: opacityOn 1s normal forwards ;\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s;\n    \n}\n\n.checkmark__check {\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n  position: fixed;\n  top:-100%; right:-100%; left:-100%; bottom:-100%;\n  margin:auto;\n  z-index:0;\n\n}\n\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 1;\n  }\n}\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 1;\n  }\n}\n\n@-webkit-keyframes scale {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n  50% {\n    -webkit-transform: scale3d(4.1, 4.1, 4);\n            transform: scale3d(4.1, 4.1, 4);\n  }\n}\n\n@keyframes scale {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n  50% {\n    -webkit-transform: scale3d(4.1, 4.1, 4);\n            transform: scale3d(4.1, 4.1, 4);\n  }\n}\n\n@-webkit-keyframes opacityOn {\n  0% {\n    opacity: 2;\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\n\n}\n50%{\n  opacity: 1;\n  box-shadow: inset 0px 0px 0px 30px #7ac142;\n\n}\n100% {\n    opacity: 0;\n    \n}\n}\n\n@keyframes opacityOn {\n  0% {\n    opacity: 2;\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\n\n}\n50%{\n  opacity: 1;\n  box-shadow: inset 0px 0px 0px 30px #7ac142;\n\n}\n100% {\n    opacity: 0;\n    \n}\n}\n\n.twoButtons{\n\n  text-align: center;\n}\n\n.jumbotron{\n\n line-height: 1;\n border: 1px solid;\n padding: 10px;\n box-shadow: 5px 10px #8b9b99;\n}\n\n.page-header{\n\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif, bold; color: #17a2b8;\n  text-align: center;\n  background-size: 60px;\n\n}\n\n.h1{\n\n  font-size: 20rem;\n}\n\ninput { \n  text-align: center; \n}\n\n.form-control{\n  color: #107585;\n}\n\n.infoBox{\n\n     \n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif, bold; color: #17a2b8; \n  text-align: center;\n  font-display: #17a2b8;\n  \n\n  \n}\n\n.col-xs-6{\n\n  text-align: center;\n}\n\ninput::-webkit-input-placeholder {\n  text-align: center;\n  color: #17a2b8;\n  opacity: 0.4;\n}\n\ninput:-moz-placeholder {\n  text-align: center;\n}\n\ninput::-moz-placeholder {\n  text-align: center;\n}\n\ninput:-ms-input-placeholder {\n  text-align: center;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/professor/professor.component.html":
/*!****************************************************!*\
  !*** ./src/app/professor/professor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n</head>\n\n\n\n<div class=\"container\">\n\n\n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\">\n      <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n\n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h1 class=\"col-12 modal-title text-center\">Congratulations on creating your quiz!</h1>\n          </div>\n\n          <!-- Modal body -->\n          <div class=\"modal-body text-center\">\n            <br>\n            <br>\n            Here is your shareable link:\n            <br>\n            <br>\n            <p>{{this.link}}</p>\n            <br>\n      <!--     <a href = \"https://quizemsnew.firebaseapp.com/#/quiz\" > Click to go to your quiz! </a>-->  \n            \n          </div>\n\n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</html>\n\n<div class=\"container\">\n\n  \n\n  <div class=\"page-header\">\n    <h1>QuizEms</h1>      \n  </div>\n\n  <div class=\"jumbotron\">\n\n    <!-- \n  <div class=\"heading\">\n    <h2>After you have created your quiz, click save and then click the Create Link button to create a shareable link\n      to your quiz!</h2>\n  </div>\n\n-->\n\n    <br>\n    <br>\n    <br>\n\n\n    <div class=\"row justify-content-center\">\n\n      <div class=\"col-xs-3 \">\n          <div class = \"infoBox\">\n\n        <div class=\"form-group\">\n\n\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Professor Name\" [(ngModel)]=\"professorName\">\n          <br>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Quiz Name\" [(ngModel)]=\"className\">\n          <br>\n          <div class=\"col-md-10 col-md-offset-1\">\n\n          <input type=\"number\" class=\"form-control \" id=\"exampleInputPassword1\" placeholder=\"Quiz Time (mins)\"\n            [(ngModel)]=\"time\">\n          </div>\n          </div>\n\n          <app-timer> </app-timer>\n\n\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n    <div class=\"headingButtons\">\n      <br>\n\n      <br>\n      <div class=\"validationButton\" *ngIf=\"this.data.validationFlag\">\n\n\n        <svg class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\n          <circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\" />\n          <path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\" />\n        </svg>\n\n      </div>\n\n      <br>\n      <br>\n   \n    </div>\n   \n\n\n    <div *ngFor=\"let q of data.questionslist\">\n      <app-questions [questionModel]=\"q\"></app-questions>\n    </div>\n    <div class=\"newQ\">\n\n      <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"newQuestion() && scrollPage()\">Add a new question</button>\n      <br>\n      <br>\n      <br>\n      <br>\n      <div class=\"twoButtons\">\n        <button type=\"button\" class=\"btn btn-info btn-md\" (click)=\"populateQuiz() && quizName()\">Save\n          progress</button>\n          &nbsp;\n\n        <!--  <button (click)=\"loadQuiz()\">Load</button>-->\n        <button type=\"button\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"createLink()\">Create\n          Quiz Link</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/professor/professor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/professor/professor.component.ts ***!
  \**************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.model */ "./src/app/question.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent(data) {
        this.data = data;
        this.flag = false;
        this.key1 = 'key1';
        this.key2 = 'key2';
        this.key3 = 'key3';
        this.flag2 = false;
    }
    ProfessorComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 10000);
    };
    ProfessorComponent.prototype.populateQuiz = function () {
        this.data.saveData('questions');
        this.flag = true;
        this.data.validationFlag = true;
        //this.data.startTimer(this.time)
        // this.data.timeLeft = this.time;
        localStorage.setItem(this.key1, this.time);
        this.data.startTimer(this.time);
        this.data.professorName = this.professorName;
        this.data.quizName = this.className;
        localStorage.setItem(this.key2, this.professorName);
        localStorage.setItem(this.key3, this.className);
        this.data.saveProfAndClass(this.professorName, this.className);
    };
    ProfessorComponent.prototype.loadQuiz = function () {
        this.data.loadData('questions');
    };
    ProfessorComponent.prototype.newQuestion = function () {
        var question = new _question_model__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.data.questionslist.push(question);
        console.log(this.data.questionslist);
        this.flag = false;
        this.data.validationFlag = false;
    };
    ProfessorComponent.prototype.createLink = function () {
        this.link = 'https://quizemsnew.firebaseapp.com/#/quiz';
        //this.router.navigate(['/quiz']);
    };
    ProfessorComponent.prototype.scrollPage = function () {
        window.scrollTo(0, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfessorComponent.prototype, "professorName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfessorComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfessorComponent.prototype, "time", void 0);
    ProfessorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professor',
            template: __webpack_require__(/*! ./professor.component.html */ "./src/app/professor/professor.component.html"),
            styles: [__webpack_require__(/*! ./professor.component.css */ "./src/app/professor/professor.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProfessorComponent);
    return ProfessorComponent;
}());



/***/ }),

/***/ "./src/app/question-display/question-display.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/question-display/question-display.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quizName{\n\n    text-align: center;\n}\n\nhr.new1{\n\n    border-top: 5px solid black;\n}\n\ninput[type=\"radio\"] {\n    opacity: 10;\n   }\n\n.card-body{\n\n    font-weight: bold;\n}\n\n.container{\n\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n  Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}"

/***/ }),

/***/ "./src/app/question-display/question-display.component.html":
/*!******************************************************************!*\
  !*** ./src/app/question-display/question-display.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n    <title>Bootstrap Example</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n</head>\n\n<body>\n\n    <div class=\"container\">\n\n        <div class=\"card\">\n            <h5 class=\"card-header\">{{questionModel.question}}</h5>\n            <div class=\"card-body\">\n\n                <form>\n\n                <div class=\"radio\">\n                    <label><input type=\"radio\" name=\"optradio\" >{{questionModel.answerOne}}</label>\n                </div>\n                <div class=\"radio\">\n                    <label><input type=\"radio\" name=\"optradio\">{{questionModel.answerTwo}}</label>\n                </div>\n                <div class=\"radio\">\n                    <label><input type=\"radio\" name=\"optradio\">{{questionModel.answerThree}}</label>\n                </div>\n                <div class=\"radio disabled\">\n                    <label><input type=\"radio\" name=\"optradio\">{{questionModel.answerFour}}</label>\n                </div>\n            </form>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/question-display/question-display.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/question-display/question-display.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDisplayComponent", function() { return QuestionDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question.model */ "./src/app/question.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionDisplayComponent = /** @class */ (function () {
    function QuestionDisplayComponent() {
    }
    QuestionDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _question_model__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], QuestionDisplayComponent.prototype, "questionModel", void 0);
    QuestionDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-display',
            template: __webpack_require__(/*! ./question-display.component.html */ "./src/app/question-display/question-display.component.html"),
            styles: [__webpack_require__(/*! ./question-display.component.css */ "./src/app/question-display/question-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionDisplayComponent);
    return QuestionDisplayComponent;
}());



/***/ }),

/***/ "./src/app/question.model.ts":
/*!***********************************!*\
  !*** ./src/app/question.model.ts ***!
  \***********************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
        this.question = '';
        this.answerOne = '';
        this.answerTwo = '';
        this.answerThree = '';
        this.answerFour = '';
        this.correctAnswer = '';
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questionFont{\n\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n\n.hr { display: block; height: 1px;\n    border: 0; border-top: 6px solid #ccc;\n    margin: 1em 0; padding: 0; \n    border-color: #ccc;\n}"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class = \"forms-group\">  \n    <hr>\n  <div class = \"deleteButton\" >\n      <button type=\"button\" class=\"btn btn-danger btn-md\" (click)=\"removeQuestion()\">Delete</button>\n\n  </div>\n<div class = \"questionFont\">\n\n  \n<form>\n  <br>\n  \n\n  Question: <input type=\"text\" name=\"question\" [(ngModel)] = \"questionModel.question\">\n  a): <input type=\"text\" name=\"a1\" [(ngModel)] = \"questionModel.answerOne\">\n  b): <input type=\"text\" name=\"a2\" [(ngModel)] = \"questionModel.answerTwo\">\n  c): <input type=\"text\" name=\"a3\"[(ngModel)] = \"questionModel.answerThree\">\n  d): <input type=\"text\" name=\"a4\"[(ngModel)] = \"questionModel.answerFour\">\n\n  Answer: <input type=\"text\" name=\"correctAnswer\"[(ngModel)] = \"questionModel.correctAnswer\"><br>\n\n</form>\n</div>\n\n<br>\n<br>\n\n</div>"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.model */ "./src/app/question.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(data) {
        this.data = data;
    }
    QuestionsComponent.prototype.removeQuestion = function () {
        this.data.removeQues(this.questionModel);
        this.data.validationFlag = false;
    };
    QuestionsComponent.prototype.ngOnInit = function () {
        window.scrollTo({ top: 10000, behavior: 'smooth' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _question_model__WEBPACK_IMPORTED_MODULE_2__["Question"])
    ], QuestionsComponent.prototype, "questionModel", void 0);
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quizFont{\n\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    text-align: center\n}\n\n.time {\n\n\n    font-size: 1.2em;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif, bold;\n    color: #17a2b8;\n  }\n\n.page-header{\n\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif, bold; color: #17a2b8;\n    text-align: center;\n    background-size: 60px;\n  \n  }\n\n.quizTimer{\n\n    position:fixed;\n    top: 3vh;\n    left: 70vw;\n    z-index: 1;\n    background-color:#ffffff;\n    font-size: 1em;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif, bold;\n    box-shadow: 2px 2px 10px #888888;\n    padding-right: 1em;\n    padding-left: 1em;\n    padding-top: 1em;\n\n\n  }\n\n.studentName{\n\n    opacity: 6;\n    text-align: center;\n}\n\n.modal-dialog {\n    max-width: 100%;\n    max-height: 100%;\n    padding: 0;\n    text-align: center;\n  }\n\n.modal-content {\n    height: 99%;\n    max-width: 100%;\n    text-align: center;\n\n  }\n\n.modal-title{\n\n    text-align: center;\n\n  }\n\n.studentDetailsSubmit{\n\n    font-display: blue;\n  }\n\n.instructions{\n\n    font-display: #17a2b8;\n  }\n\ninput { \n    text-align: center; \n  }\n\n.warningMessage{\n\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif, bold;\n    font-display: green;\n  }\n\n.modal-header{\n\n    font-display: green;\n  }"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title>Bootstrap Example</title>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n</head>\n\n\n<body>\n\n\n\n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                    <h1 class='col-12 modal-title text-center' style = \"color: #17a2b8;\">QuizEms Grader</h1>\n\n                    <h2 class='col-12 modal-title text-center' style = \"color: #17a2b8;\">Your quiz has been submitted!</h2>\n\n\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n\n                    <div class=\"studentDetailsSubmit\" style=\"color:rgb(73, 111, 143)\">\n                        <h2>Name: {{user.name}} </h2>\n                       \n                        <h2> Quiz completed in {{user.time_taken}}</h2>\n                      \n                        <h2> Your grade is: {{user.grade}} </h2>\n                    </div>\n                    <h1 style=\"color : green\"> You {{user.pass}}</h1>\n                </div>\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n      <!-- The Modal For Retake -->\n      <div class=\"modal\" id=\"myModal2\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n    \n                    <!-- Modal Header -->\n                    <div class=\"modal-header\">\n                        <h1 class='col-12 modal-title text-center' style=\"color: red\">WARNING!</h1>\n    \n    \n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n    \n                    <!-- Modal body -->\n                    <div class=\"modal-body\">\n    \n                        <div class=\"warningMessage\" style=\"font-display : 15px;\">\n                       <p> You are opting to retake the quiz!</p>\n                       <p> By clicking 'RETAKE QUIZ' your answers will be deleted! This action cannot be undone.</p>\n                       <p> Click 'Close' to return to your quiz</p>\n\n\n                        </div>\n                        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click) = \"refresh()\">Retake Quiz</button>\n\n             \n\n                    </div>\n                    <!-- Modal footer -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\n                    </div>\n    \n                </div>\n            </div>\n        </div>\n\n\n</body>\n\n</html>\n\n\n\n<div class=\"container\">\n\n    <div class=\"page-header\">\n        <h1> QuizEms</h1>\n        <hr>\n        <h4>Professor: {{data.professorName}} </h4>\n        <h4> Quiz: {{data.quizName}}</h4>\n    </div>\n\n    <div *ngIf=\"data.flag\">\n        <div class='quizFont'>\n\n            <div class=\"studentName\">\n\n                <div class=\"col-md-4 col-md-offset-4\">\n                    <br>\n\n                    <input type=\"text\" name=\"question\" placeholder=\"Student name\" [(ngModel)]='user.name'><br>\n\n                </div>\n\n            </div>\n\n            <form>\n\n                <br>\n                <br>\n                <br>\n                <br>\n                <br>\n                <div class=\"instructions\">\n                    <h3>Check the answer to each multiple-choice question, and click on the \"Submit\" button to submit\n                        the\n                        quiz.</h3>\n                </div>\n                <br>\n\n\n                <div class=\"quizTimer\">\n\n                    <p class=\"time\">Time Remaining: {{data.date}}</p>\n\n                </div>\n\n                <br>\n\n\n\n                <br>\n                <br>\n                <div *ngFor=\"let q of data.questionslist\">\n                    <br>\n\n\n                    <app-question-display [questionModel]=\"q\"></app-question-display>\n                </div>\n\n\n                <button type=\"button\" class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"showScore()\">Submit</button>\n                &nbsp;\n          <!--     <button type=\"button\" class=\"btn btn-success btn-warning\" (click) = 'refresh()'>Retake Quiz</button>-->   \n                <button type=\"button\" class=\"btn btn-success btn-warning\" data-toggle=\"modal\" data-target=\"#myModal2\" (click)=\"showScore()\">Retake Quiz</button>\n\n            </form>\n        </div>\n    </div>\n\n    <br>\n    <br>\n    <br>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizComponent = /** @class */ (function () {
    function QuizComponent(data) {
        this.data = data;
        this.user =
            {
                name: '',
                time_taken: '58 mins',
                grade: '96%',
                pass: 'passed!',
                fail: 'fail'
            };
    }
    QuizComponent.prototype.refresh = function () {
        window.location.reload();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    QuizComponent.prototype.ngOnInit = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.data.loadData("questions");
        this.timeLeft = this.data.timeLeft;
        this.data.startTimer(this.timeLeft);
        this.professorName = this.data.professorName;
        this.quizName = this.data.quizName;
        this.data.saveProfAndClass(this.professorName, this.quizName);
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  student works!\n</p>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/timer/timer.component.html":
/*!********************************************!*\
  !*** ./src/app/timer/timer.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(data) {
        this.data = data;
    }
    TimerComponent.prototype.ngOnInit = function () {
        // console.log(this.data.timeLeft)
        // this.data.startTimer(this.data.timeLeft)
    };
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phillip.dacosta/Desktop/QuizemsNew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map