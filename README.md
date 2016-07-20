# d3-rs-squares

`d3-rs-squares` easily generate a single character icon.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/d3-rs-squares.svg?style=svg)](https://circleci.com/gh/Redsift/d3-rs-squares)

## Example

[View @redsift/d3-rs-squares on Codepen](https://....)

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-squares/latest/d3-rs-squares.umd-es2015.min.js"></script>
	<script>
		var chart = d3_rs_squares.html().lastWeeks(12);
		...
	</script>

### ES6

	import { chart } from "@redsift/d3-rs-squares";
	let eml = chart.html();
	...
	
### Require

	var chart = require("@redsift/d3-rs-squares");
	var eml = chart.html();
	...

### Parameters

|Name|Description|Transition|
|----|-----------|----------|
|classed|SVG custom class|N|
|width| Width of the calendar| Y|
|height| Height of the calendar| Y|
|scale | Scale of the calendar | Y|
|lastWeeks| Number of weeks in the past from now| Y|
|nextWeeks| Number of weeks in the future from now | Y |
|colours| Colour palette for the data. Expected values `green\|blue\|purple`, or an array of RGB values e.g. `['#b0e288', ... ]` preferably length >= 5 | Y|
