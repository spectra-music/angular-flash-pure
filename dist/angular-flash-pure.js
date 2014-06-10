/**!
 * @license angular-flash-pure v0.1.0
 * Copyright (c) 2014 Kristen Mills.
 * License: MIT
 */
(function() {
  angular.module('angular-flash-pure', []).factory("flash", function($rootScope) {
    var currentMessages, queues;
    queues = {
      notice: [],
      success: [],
      warning: [],
      error: []
    };
    currentMessages = {
      notice: '',
      success: '',
      warning: '',
      error: ''
    };
    $rootScope.$on("$locationChangeStart", function() {
      currentMessages.notice = queues.notice.shift() || "";
      currentMessages.success = queues.success.shift() || "";
      currentMessages.warning = queues.warning.shift() || "";
      return currentMessages.error = queues.error.shift() || "";
    });
    return {
      notice: {
        setMessage: function(message) {
          return queues.notice.push(message);
        },
        getMessage: function() {
          return currentMessages.notice;
        }
      },
      success: {
        setMessage: function(message) {
          return queues.success.push(message);
        },
        getMessage: function() {
          return currentMessages.success;
        }
      },
      warning: {
        setMessage: function(message) {
          return queues.warning.push(message);
        },
        getMessage: function() {
          return currentMessages.warning;
        }
      },
      error: {
        setMessage: function(message) {
          return queues.error.push(message);
        },
        getMessage: function() {
          return currentMessages.error;
        }
      }
    };
  }).directive('flashMessages', [
    'flash', function(flash) {
      return {
        restrict: 'E',
        template: ['<div>', '<div class="pure-alert" ng-show="flash.notice.getMessage()">', '{{ flash.notice.getMessage() }}', '</div>', '<div class="pure-alert pure-alert-success" ng-show="flash.success.getMessage()">', '{{ flash.success.getMessage() }}', '</div><div class="pure-alert pure-alert-warning" ng-show="flash.warning.getMessage()">', '{{ flash.warning.getMessage() }}', '</div>', '<div class="pure-alert pure-alert-error" ng-show="flash.error.getMessage()">', '{{ flash.error.getMessage() }}', '</div>', '</div>'].join('\n'),
        link: function(scope, elem, attrs) {
          return scope.flash = flash;
        }
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('angular-flash-pure', []).factory("flash", function($rootScope) {
    var currentMessages, queues;
    queues = {
      notice: [],
      success: [],
      warning: [],
      error: []
    };
    currentMessages = {
      notice: '',
      success: '',
      warning: '',
      error: ''
    };
    $rootScope.$on("$locationChangeStart", function() {
      currentMessages.notice = queues.notice.shift() || "";
      currentMessages.success = queues.success.shift() || "";
      currentMessages.warning = queues.warning.shift() || "";
      return currentMessages.error = queues.error.shift() || "";
    });
    return {
      notice: {
        setMessage: function(message) {
          return queues.notice.push(message);
        },
        getMessage: function() {
          return currentMessages.notice;
        }
      },
      success: {
        setMessage: function(message) {
          return queues.success.push(message);
        },
        getMessage: function() {
          return currentMessages.success;
        }
      },
      warning: {
        setMessage: function(message) {
          return queues.warning.push(message);
        },
        getMessage: function() {
          return currentMessages.warning;
        }
      },
      error: {
        setMessage: function(message) {
          return queues.error.push(message);
        },
        getMessage: function() {
          return currentMessages.error;
        }
      }
    };
  }).directive('flashMessages', [
    'flash', function(flash) {
      return {
        restrict: 'E',
        template: ['<div>', '<div class="pure-alert" ng-show="flash.notice.getMessage()">', '{{ flash.notice.getMessage() }}', '</div>', '<div class="pure-alert pure-alert-success" ng-show="flash.success.getMessage()">', '{{ flash.success.getMessage() }}', '</div><div class="pure-alert pure-alert-warning" ng-show="flash.warning.getMessage()">', '{{ flash.warning.getMessage() }}', '</div>', '<div class="pure-alert pure-alert-error" ng-show="flash.error.getMessage()">', '{{ flash.error.getMessage() }}', '</div>', '</div>'].join('\n'),
        link: function(scope, elem, attrs) {
          return scope.flash = flash;
        }
      };
    }
  ]);

}).call(this);
