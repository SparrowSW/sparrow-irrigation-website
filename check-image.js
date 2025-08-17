const { imageSize } = require('image-size');
const dimensions = imageSize('public/sparrow.png');
console.log(`sparrow.png: ${dimensions.width}x${dimensions.height}`);