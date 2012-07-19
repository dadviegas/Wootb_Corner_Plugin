Web out of the box jquery corner Plugin

wootb.corner.js is a plugin that applies a round corner to the specified element of the dom.

The options for corner plugin are:
var Templates = {ex1:"1em 4em 1em 4em", ex2:"25px 10px / 10px 25px",default:"1em"};
var settings = {
			radius: Templates.default, // default border Radius
			tr:null, // border Top Right Radius
			tl:null, // border Top Left Radius
			br:null, // border Bottom Right Radius
			bl:null, // border Bottom left Radius
		};


	
$(".item-2").WootbCorner(); // example default behavier