 'use strict';
// Strict mode creates visible errors in the development console!

let hasDriversLicense = false;

const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(" I can Drive");

const interface = 'Audio';
const private  = 534;

// strict mode reserves stuff like interface an dprivate because we may need it in the feature
// same with stuff like if .
