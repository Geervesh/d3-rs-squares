# d3-rs-squares

`d3-rs-squares` easily generate either a co-occurrence matrix or a calendar chart.

## Builds

[![Circle CI](https://circleci.com/gh/redsift/d3-rs-squares.svg?style=svg)](https://circleci.com/gh/redsift/d3-rs-squares)
[![npm](https://img.shields.io/npm/v/@redsift/d3-rs-squares.svg?style=flat-square)](https://www.npmjs.com/package/@redsift/d3-rs-squares)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/redsift/d3-rs-squares/master/LICENSE)

## Example

[View @redsift/d3-rs-squares on Codepen](https://....)

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-squares/latest/d3-rs-squares.umd-es2015.min.js"></script>
	<script>
		// for cooccurence view
		var squares = d3_rs_squares.html();
		...
		//or for calendar view
		var calendar = d3_rs_squares.html().type('calendar').lastWeeks(12);
	</script>
### ES6

	import { chart } from "@redsift/d3-rs-squares";
	let eml = chart.html();
	...
	
### Require

	var chart = require("@redsift/d3-rs-squares");
	var eml = chart.html();
	...

### Data layout
Both displays expect an Array with JSON objects. 

	var data = [{}, {}, ...];

Between the two **types** the layout of the object varies:

For the calendar view the expected JSON object should be:

	{
		d: 1462057200000, // epoch timestamp in milliseconds 
		v: 10
	}

For the co-occurrence matrix the expected JSON object should be:

	{
		x: 'key1', 
		y: 'key2',
		z: 10 // | {} value or object. To access object properties use zfield
	}

### Parameters

|Name|Used In|Description|Transition|
|----|--------|----------|----------|
|`classed`|*|SVG custom class|N|
|`width`, `height`, `size`, `scale`|*|*Integer* SVG container sizes|Y
|`style`|*|*String* Custom CSS to inject into chart| N
|`color`|*| Color palette for the data. Available options from [d3-rs-theme](https://github.com/Redsift/d3-rs-theme#presentation-color-palette) | Y|
|`zfield`| matrix.* | if the value in the `z` field is an object a first level property can be accessed from that object|
|`type`| |`'calendar.days'`, `'calendar.hours'`, `'matrix.cooc'`, `'matrix'`(default)|
|`lastWeeks`| calendar.*| Number of weeks in the past from now| Y|
|`nextWeeks`| calendar.*| Number of weeks in the future from now | Y |
|`starting`| calendar.*| Day that weeks should start. Available options: (`'monday'`, `'tuesday'`, ...) or the utc counterparts: (`'utcMonday'`, `'utcTuesday'`, ...)
