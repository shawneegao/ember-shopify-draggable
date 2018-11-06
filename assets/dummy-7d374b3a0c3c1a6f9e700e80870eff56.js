"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/components/sortable-container",["exports","ember-shopify-draggable/components/sortable-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/sortable-group",["exports","ember-shopify-draggable/components/sortable-group"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/sortable-item",["exports","ember-shopify-draggable/components/sortable-item"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/swappable-container",["exports","ember-shopify-draggable/components/swappable-container"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/swappable-group",["exports","ember-shopify-draggable/components/swappable-group"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/swappable-item",["exports","ember-shopify-draggable/components/swappable-item"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({list:Ember.A([{name:"Item 1"},{name:"Item 2"},{name:"Item 3"}]),listTwo:Ember.A([{name:"Item 4"},{name:"Item 5"},{name:"Item 6"}]),actions:{swapped:function(e){console.log("swapped")},sorted:function(e){console.log("sorted")}}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,o=t.default.exportApplicationGlobal
a="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"hhs1G5Ea",block:'{"symbols":["group","container","item","container","item","group","container","item","container","item"],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Welcome to Ember"],[10],[0,"\\n\\n"],[1,[21,"outlet"],false],[0,"\\n"],[7,"div"],[9],[0,"\\n    "],[7,"h5"],[9],[0,"Swappable"],[10],[0,"\\n"],[4,"swappable-group",null,[["swapped"],[[27,"action",[[22,0,[]],"swapped"],null]]],{"statements":[[4,"component",[[22,6,["container"]]],null,{"statements":[[4,"each",[[23,["list"]]],null,{"statements":[[4,"component",[[22,9,["item"]]],null,{"statements":[[0,"                    "],[1,[22,10,["name"]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[10]},null]],"parameters":[9]},null],[4,"component",[[22,6,["container"]]],null,{"statements":[[4,"each",[[23,["listTwo"]]],null,{"statements":[[4,"component",[[22,7,["item"]]],null,{"statements":[[0,"                    "],[1,[22,8,["name"]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[8]},null]],"parameters":[7]},null]],"parameters":[6]},null],[10],[0,"\\n"],[7,"div"],[9],[0,"\\n    "],[7,"h5"],[9],[0,"Sortable"],[10],[0,"\\n"],[4,"sortable-group",null,[["sorted"],[[27,"action",[[22,0,[]],"sorted"],null]]],{"statements":[[4,"component",[[22,1,["container"]]],null,{"statements":[[4,"each",[[23,["list"]]],null,{"statements":[[4,"component",[[22,4,["item"]]],null,{"statements":[[0,"                    "],[1,[22,5,["name"]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[5]},null]],"parameters":[4]},null],[4,"component",[[22,1,["container"]]],null,{"statements":[[4,"each",[[23,["listTwo"]]],null,{"statements":[[4,"component",[[22,2,["item"]]],null,{"statements":[[0,"                    "],[1,[22,3,["name"]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[3]},null]],"parameters":[2]},null]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})