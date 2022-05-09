import { Request, Response } from "express";
import { ReportModel } from "../../models/Reports";

export const EDIT_STATUS_REPORT = async (req: Request, res: Response) => {
    try{
        const{ status, id } = req.body;
  
        if(!id){
            throw new Error('Debe ingresar el id del reporte a actualizar.');
        }
  
        const oldReport = await ReportModel.updateOne({ _id: id },{
          status: status
        });
        
        res.json(`${oldReport.modifiedCount} post modificado correctamente.`);     
  
    } catch(err: string | any){
        res.status(404).send(`Error en el controller EDIT_STATUS_REPORT: ${err.message}`);
    }
  };