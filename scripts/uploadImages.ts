import { config as dotenvConfig } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Load environment variables from .env
dotenvConfig();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Workaround for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadFolder = async (localFolder: string) => {
  const files = fs.readdirSync(localFolder);
  const uploadPromises = files.map((file) => {
    const filePath = path.join(localFolder, file);
    return cloudinary.uploader.upload(filePath, {
      folder: 'portfolio-assets', // optional Cloudinary folder
    });
  });

  const results = await Promise.all(uploadPromises);
  return results.map((res) => ({
    originalFilename: res.original_filename,
    url: res.secure_url,
  }));
};

(async () => {
  try {
    // Use the fixed __dirname path
    const localFolder = path.join(__dirname, '../public/images');
    const uploadedImages = await uploadFolder(localFolder);

    console.log('✅ Uploaded image URLs:\n');
    uploadedImages.forEach(img => {
      console.log(`${img.originalFilename}: ${img.url}`);
    });
  } catch (err) {
    console.error('❌ Upload failed:', err);
  }
})();
