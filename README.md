# angular-flash-pure

A simple flash notification module made up of a factory and a directive that will
display flash messages using [AngularJS](https://angularjs.org). The directive
uses [pure-extras](https://github.com/tilomitra/cssextras) for styling of the
alerts.

## Installation

Download [angular-flash-pure.min.js](https://raw.githubusercontent.com/spectra-music/angular-flash-pure/master/dist/angular-flash-pure.min.js)
and [pure-extras.css](https://raw.githubusercontent.com/tilomitra/cssextras/master/css/pure-extras.css)
or install it with bower.

```bash
$ bower install angular-flash-pure --save
```

## Usage
Load the module into your app

```javascript
var myApp = angular.module('myApp', ['angular-flash-pure']);
```

Use the flash factory to set flash messages

```javascript
myApp.controller('myController', ['flash', '$location', function(flash, $location){
  flash.notice.setMessage("I'm a flash notification!"); // error, success, and warning also work
  $location.path('/some/path');
}]);
```

Then in one of your views

```html
<flash-messages></flash-messages>
```

And then it all works!

### Manually triggering flash notifications
So the display of flash notifications are triggered by `$locationChangeStart`. But I'm aware that isn't always what you want. So if you would like the
notification to appear without changing location, do the following when you want
them to be displayed:

```javascript
$rootScope.$emit("event:angularFlash");
```

## Demo
Check out the [Plunker](http://embed.plnkr.co/KYD0NGACxGzrXV1TqZ08/preview). This demo uses the manual triggering of flash events.

## Contributing

For this project, we use Bower, Grunt, and Coffeescript.

### Build

```bash
$ grunt build
```
