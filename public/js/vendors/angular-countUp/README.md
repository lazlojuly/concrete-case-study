angular-countUp
===============

AngularJS directive for countUp

A simple Angularjs directive for <a href="https://github.com/inorganik/countUp.js" target="_blank">countUp.js.</a>

see <a href="https://github.com/inorganik/countUp.js" target="_blank">https://github.com/inorganik/countUp.js</a>

## Install

1. Make sure the CountUp.js is loaded.
2. Include the `angular-countUp.js` script into your app.
3. Add `countUp` as a module dependency to your app.

## Usage

Put the `countup` tag into your html.

```html
<countup startval="countup.startval"
	endval="countup.endval"
	duration="3"
	decimals="0"
	options="countup.options">
</countup>
```
### Making a countUp instance

```javascript
angular.module('myApp', ['countUp']).controller('myCtrl', function($scope) {
	$scope.countup = {
		startval: 100,
		endval: 0,
		// default options
		options: {
			useEasing : true, 
			useGrouping : true, 
			separator : ',', 
			decimal : '.' 
		}
	};
});
```
