const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

async function generateFavicon() {
  try {
    // Read the logo file
    const logoPath = path.join(__dirname, 'public', 'Logo_Blue.svg');
    const logoBuffer = await fs.readFile(logoPath);
    
    // Generate different sizes
    const sizes = [16, 32];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const pngBuffer = await sharp(logoBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent background
        })
        .png()
        .toBuffer();
      
      pngBuffers.push(pngBuffer);
      
      // Save individual PNG files
      const outputPath = path.join(__dirname, 'public', `favicon-${size}x${size}.png`);
      await fs.writeFile(outputPath, pngBuffer);
      console.log(`Generated ${size}x${size} favicon`);
    }
    
    // Create ICO file
    const icoBuffer = await toIco(pngBuffers);
    const icoPath = path.join(__dirname, 'public', 'favicon.ico');
    await fs.writeFile(icoPath, icoBuffer);
    console.log('Generated favicon.ico');
    
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();