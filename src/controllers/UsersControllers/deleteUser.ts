import { Request, Response } from "express";
import { UserModel } from "../../models/Users";

export const DELETE_USER = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        if (id) {

            const userDeleted = await UserModel.deleteOne({ _id: id });

            if (userDeleted.deletedCount) {

                res.status(200).send(`Se eliminó ${userDeleted.deletedCount} usuario.`);
            } else {
                throw new Error(`Se han eliminado ${userDeleted.deletedCount} usuarios, verifique el id ingresado.`);
            }
        } else{
            throw new Error("Ingrese un id del usuario que desea borrar.")
        }
    } catch (err: any | unknown) {

        res.status(404).send(`Ha ocurrido un error en el controlador DELETE_USER: ${err.message}`);
    }
};