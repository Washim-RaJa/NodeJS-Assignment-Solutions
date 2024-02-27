const os = require('os');

const operatingSystemType = os.type();
console.log(`Operating system name : ${operatingSystemType}`);

const operatingSystemRelease = os.release();
console.log(`OS release ${operatingSystemRelease}`);