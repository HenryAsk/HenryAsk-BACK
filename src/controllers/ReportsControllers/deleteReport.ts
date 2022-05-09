import { Request, Response } from "express";
import { ReportModel } from "../../models/Reports";

export const DELETE_REPORT = async (req: Request, res: Response) => {
    try{
        const { id } = req.query;

        if(id){
            const reportDeleted = await ReportModel.deleteOne({ _id: id });
            
            if (reportDeleted.deletedCount) {

                res.status(200).send(`Se eliminó ${reportDeleted.deletedCount} reporte.`);
            } else {
                throw new Error(`Se han eliminado ${reportDeleted.deletedCount} reportes, verifique el id ingresado.`);
            }
        } else{
            throw new Error("Ingrese un id del usuario que desea borrar.")
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};