import { Request, Response } from "express";
const Users = require('../../models/Users');

export const GET_ALL_USER = async (req: Request, res: Response) => {
    try{
        let allUsers = await Users.find({});
        console.log(allUsers)

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
                    biography: el.biography,
                    own_henry_coin: el.own_henry_coin,
                    give_henry_coin: el.give_henry_coin,
                    theoric: el.theoric
                })
            })

            res.status(200).json(allUsers);
        } else {
            res.status(404).send('No se han encontrado usuarios.')
        }
    } catch(err: any | unknown){
        res.send(err);
    }
};