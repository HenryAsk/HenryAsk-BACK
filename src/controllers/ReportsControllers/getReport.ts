import { NextFunction, Request, Response } from "express";
import { ReportModel, Report } from "../../models/Reports";

export const GET_REPORT = async (req: Request, res: Response, next: NextFunction) => {
    if(req.params.id) next();

    else{
        try{
            const allReports = await ReportModel.find({});
    
            if(allReports){
                res.status(200).json(allReports);
            } else {
                throw new Error ('No se han encontrado reportes.');
            }
            
        } catch(err: any | unknown){
            res.status(404).send(err.message);
        }
    };
};