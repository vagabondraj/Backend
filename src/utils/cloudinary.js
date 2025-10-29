import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const uploadToCloudinary = async (localfileupload) => {
   try {
       if(!localfileupload) return null;
       const response=await cloudinary.uploader.upload(localfileupload, {
           resource_type: 'auto',
       })
       console.log('File uploaded to Cloudinary successfully', response.url);
       return response;
    } catch (error) {
       fs.unlinkSync(localfileupload);
       return null;
   }
};

// Usage example (uncomment to use):
// (async () => {
//     const result = await uploadToCloudinary('path/to/your/local/file.jpg');
//     console.log(result);
// })();