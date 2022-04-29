import { Request, Response } from "express";
import { UserModel } from "../../models/Users";

export const DELETE_USER = async (req: Request, res: Response) => {
    try{
        const { id } = req.query;

        id 
        ? (
            await UserModel.deleteOne({ _id: id })
            && res.status(200).send('Usuario eliminado.')
        )
        : res.status(404).send('Ha ocurrido un error al eliminar el usuario, intente nuevamente.');

    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};