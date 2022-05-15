import { Response, Request } from "express";
import { PostModel } from '../../models/Posts';
import { findOrDeleteAllChildsFromPostByOwnerOrPost } from "../../services/UserServices";

export const DELETE_POST =async (req: Request, res: Response)  => {
    try{
        const { id } = req.query;

        if(id){
            const allChildsDeleted = await findOrDeleteAllChildsFromPostByOwnerOrPost(
                {method:"delete",by:"post",input:id}
            )

            const postDeleted = await PostModel.deleteOne({ _id: id });

            if(postDeleted.deletedCount){
                
                res.status(200).json(`Se ha eliminado ${postDeleted.deletedCount} contenido teórico con el id ingresado.`);
            } else{
                throw new Error("No se encontraron posts existentes con el id ingresado.");
                
            }
        }else{
            throw new Error('Por favor, ingrese el id del contenido que quiere eliminar.');
        }
    } catch(err: string | any){
        res.status(400).send(`Error en el controller DELETE_POST: ${err.message}`);
    }
};