// main.ts
/// <reference path="geometry.ts" />
var radius = 5;
var area = Geometry.calculateArea(radius);
console.log("The area of the circle with radius ".concat(radius, " is: ").concat(area.toFixed(2)));
