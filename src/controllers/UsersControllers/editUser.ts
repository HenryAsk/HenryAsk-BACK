import { Request, Response } from "express";
import { uploadImg, uploadBanner } from "../../cloudinary";
const User = require('../../models/Users');

export const EDIT_USER = async (req: Request, res: Response) => {
    try{
        const {
            id,
            first_name,
            last_name,
            user_name,
            email,
            country,
            city,
            role,
            profile_picture,
            banner,
            avatar,
            biography,
            github,
            linkedin,
            isBanned,
            own_henry_coin,
            give_henry_coin
        } = req.body;

        if (!id) {
            throw new Error("Ha ocurrido un error al editar el usuario." );
        } else {
            const findUser= await User.findById(id);
            let image;
            let ban;

            if(profile_picture && profile_picture !== ""){
                if(findUser.profile_picture === profile_picture){
                    image = profile_picture;
                } else {
                    image = await uploadImg(profile_picture);
                    image = image.secure_url;
                }
            } else {
                image = "";
            }
            if(banner && banner !== ""){
                if(findUser.banner === banner){
                    ban = banner;
                } else {
                    ban = await uploadBanner(banner);
                    ban = ban.secure_url;
                }
            }
            else{
                ban = "";
            }

    
            const userEdited = await User.updateOne({ _id: id }, {
                first_name: first_name && first_name,
                last_name: last_name && last_name,
                user_name: user_name && user_name,
                email: email && email,
                country: country && country,
                city: city && city,
                role: role && role,
                profile_picture: image,
                banner: ban,
                avatar: avatar && avatar,
                biography: biography && biography,
                github: github && github,
                linkedin: linkedin && linkedin,
                isBanned: isBanned && isBanned,
                own_henry_coin: own_henry_coin && own_henry_coin,
                give_henry_coin: give_henry_coin && give_henry_coin
            });
            res.status(200).json(`${userEdited.matchedCount} document has been matched and ${userEdited.modifiedCount} document has been modified `);
        }
    } catch(err: any | string){
        res.status(404).send(err.message);
    }
};