import { Request, Response } from "express";
import { UserModel } from "../../models/Users";
import { findOrDeleteAllChildsFromPostByOwnerOrPost, findOrdeleteAllCreatedByOwner } from "../../services/UserServices";

export const DELETE_USER = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;

        if (id) {

            const allChildsDeleted = await findOrDeleteAllChildsFromPostByOwnerOrPost(
                {
                method:"delete",
                by:"owner",
                input:id
            })
            const allCreationsByOwnerDeleted = await findOrdeleteAllCreatedByOwner(
                {method:"delete",
                owner:id
            })

            const userDeleted = await UserModel.deleteOne({ _id: id });

            if (userDeleted.deletedCount) {

                res.status(200).json({
                    Resultado: `Se eliminó ${userDeleted.deletedCount} usuario.`,
                    AllChildsDeleted: allChildsDeleted, 
                    AllCreationsByOwnerDeleted: allCreationsByOwnerDeleted
                });
            } else {
                throw new Error(`Se han eliminado ${userDeleted.deletedCount} usuarios, verifique el id ingresado.`);
            }
        } else{
            throw new Error("Ingrese un id del usuario que desea borrar.")
        }
    } catch (err: any | unknown) {

            res.status(400).send(`Ha ocurrido un error en el controller DELETE_USER: ${err.message}`);
        }
    };
