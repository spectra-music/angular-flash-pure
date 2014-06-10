angular.module('angular-flash-pure', []).factory("flash", ($rootScope) ->
  queues = {
    notice: [],
    success: [],
    warning: [],
    error: []
  }
  currentMessages = {
    notice: '',
    success: '',
    warning: '',
    error: ''
  }

  $rootScope.$on("$locationChangeStart", () ->
    currentMessages.notice = queues.notice.shift() || ""
    currentMessages.success = queues.success.shift() || ""
    currentMessages.warning = queues.warning.shift() || ""
    currentMessages.error = queues.error.shift() || ""
  )

  $rootScope.$on("event:angularFlash", () ->
    currentMessages.notice = queues.notice.shift() || ""
    currentMessages.success = queues.success.shift() || ""
    currentMessages.warning = queues.warning.shift() || ""
    currentMessages.error = queues.error.shift() || ""
  )

  {
    notice: {
      setMessage: (message) ->
        queues.notice.push(message)
      ,
      getMessage: () ->
        currentMessages.notice
    },
    success: {
      setMessage: (message) ->
        queues.success.push(message)
      ,
      getMessage: () ->
        currentMessages.success
    },
    warning: {
      setMessage: (message) ->
        queues.warning.push(message)
      ,
      getMessage: () ->
        currentMessages.warning
    },
    error: {
      setMessage: (message) ->
        queues.error.push(message)
      ,
      getMessage: () ->
        currentMessages.error
    }
  }
)
.directive('flashMessages', [ 'flash', (flash) ->
  {
    restrict: 'E',
    template: ['<div>',
      '<div class="pure-alert" ng-show="flash.notice.getMessage()">',
      '{{ flash.notice.getMessage() }}',
      '</div>',
      '<div class="pure-alert pure-alert-success" ng-show="flash.success.getMessage()">',
        '{{ flash.success.getMessage() }}',
      '</div><div class="pure-alert pure-alert-warning" ng-show="flash.warning.getMessage()">',
        '{{ flash.warning.getMessage() }}',
      '</div>',
      '<div class="pure-alert pure-alert-error" ng-show="flash.error.getMessage()">',
        '{{ flash.error.getMessage() }}',
      '</div>',
    '</div>'].join('\n')
    link: (scope, elem, attrs) ->
      scope.flash = flash
  }
])