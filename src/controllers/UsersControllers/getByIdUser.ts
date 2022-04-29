import { Request, Response } from "express";
const User = require('../../models/Users');

export const GET_USER_BY_ID = async(req: Request, res: Response) => {
    try{
        const { id } = req.params;

        if(id){
            let userById = await User.findOne({ _id : id });
            
            if(userById){
                userById = {
                    first_name: userById.first_name,
                    last_name: userById.last_name,
                    user_name: userById.user_name,
                    email: userById.email,
                    role: userById.role,
                    country: userById.country,
                    city: userById.city,
                    profile_picture: userById.profile_picture,
                    biography: userById.biography,
                    github: userById.github,
                    linkedin: userById.linkedin,
                    own_henry_coin: userById.own_henry_coin,
                    give_henry_coin: userById.give_henry_coin,
                    // posts: userById.posts,
                    // answers: userById.answers,
                    // comments: userById.comments,
                    // theoric: userById.theoric,
                    // exercise: userById.exercise
                }
                res.status(200).json(userById);
            } else {
                res.status(404).send('No se encontró el usuario requerido.');
            }
        }
    } catch(err: any | unknown) {
        res.status(404).send(err.message);
    }
};