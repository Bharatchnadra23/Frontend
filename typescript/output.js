// geometry.ts
var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
// main.ts
/// <reference path="geometry.ts" />
var radius = 5;
var area = Geometry.calculateArea(radius);
console.log("The area of the circle with radius ".concat(radius, " is: ").concat(area.toFixed(2)));
