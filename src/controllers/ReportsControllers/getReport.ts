import { NextFunction, Request, Response } from "express";
import { ReportModel } from "../../models/Reports";

export const GET_REPORT = async (req: Request, res: Response, next: NextFunction) => {
    if(req.params.id) next();

    else{
        try{
            const allReports = await ReportModel.find({})
            .populate("owner","_id user_name profile_picture role avatar")
            .populate("post", "_id owner question description")
            .populate("comment", "_id owner content answer")
            .populate("answer", "_id owner content post");
    
            if(allReports){
                res.status(200).json(allReports);
            } else {
                throw new Error ('No se han encontrado reportes.');
            }
            
        } catch(err: any | unknown){
            res.status(404).send(`Algo salió mal en el controller GET_REPORT: ${err.message}`);
        }
    };
};