const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

async function generateFavicon() {
  try {
    // Read the logo file
    const logoPath = path.join(__dirname, 'public', 'Logo_Blue.svg');
    const logoBuffer = await fs.readFile(logoPath);
    
    // Generate different sizes following Google's recommendations (multiples of 48px)
    const sizes = [16, 32, 48, 96, 144, 192];
    const pngBuffers = [];
    
    for (const size of sizes) {
      // Create a solid white background image
      const background = await sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 255 }
        }
      }).png().toBuffer();
      
      // Resize the logo to fit within the size
      const resizedLogo = await sharp(logoBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent background for the logo
        })
        .png()
        .toBuffer();
      
      // Composite the logo onto the white background
      const pngBuffer = await sharp(background)
        .composite([{ input: resizedLogo, gravity: 'center' }])
        .png()
        .toBuffer();
      
      pngBuffers.push(pngBuffer);
      
      // Save individual PNG files
      const outputPath = path.join(__dirname, 'public', `favicon-${size}x${size}.png`);
      await fs.writeFile(outputPath, pngBuffer);
      console.log(`Generated ${size}x${size} favicon`);
    }
    
    // Create ICO file with all generated sizes for better multi-resolution support
    const icoBuffer = await toIco(pngBuffers); // Use all sizes for ICO
    const icoPath = path.join(__dirname, 'public', 'favicon.ico');
    await fs.writeFile(icoPath, icoBuffer);
    console.log('Generated favicon.ico with multiple resolutions');
    
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();