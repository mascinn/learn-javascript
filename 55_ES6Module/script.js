// ES6 Module = An external file that contains reusable code 
//              that can be imported into other Javascript files.
//              Can contain variables, classes, function, ... and more
//              Introduces as a part of ECMA Script 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);