import { NextFunction, Request, Response } from "express";
const Users = require('../../models/Users');

export const GET_ALL_USER = async (req: Request, res: Response, next: NextFunction) => {
    if(req.query.email || req.query.user_name || req.params.id) next();

    else{
        try{
            let allUsers = await Users.find({})
    
            if(allUsers){
                allUsers = allUsers.map((el: any) => {
                    return({
                        first_name: el.first_name,
                        last_name: el.last_name,
                        user_name: el.user_name,
                        email: el.email,
                        role: el.role,
                        country: el.country,
                        city: el.city,
                        profile_picture: el.profile_picture,
                        banner: el.banner,
                        avatar: el.avatar,
                        biography: el.biography,
                        github: el.github,
                        linkedin: el.linkedin,
                        own_henry_coin: el.own_henry_coin,
                        give_henry_coin: el.give_henry_coin,
                        isBanned: el.isBanned
                    })
                });
    
                res.status(200).json(allUsers);
            } else {
                res.status(404).send('No se han encontrado usuarios.')
            }
        } catch(err: any | unknown){
            res.status(404).send(err.message);
        }
    };
};