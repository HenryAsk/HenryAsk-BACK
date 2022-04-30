require('dotenv').config();
import { v2 as cloudinary } from 'cloudinary';
const {
    CLOUD_NAME,
    CLOUD_API_KEY,
    CLOUD_API_SECRET
} = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
    secure: true
});

export const uploadImg = async (filePath: string) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'profile_pictures'
    });
};