import { NextFunction, Request, Response } from "express";
import { ReportModel } from "../../models/Reports";

export const GET_REPORT_BY_ID = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.params.id) next();

    else{
        try{
            const { id } = req.params;
    
            if(id){
                let getReport = await ReportModel.findOne({ _id: id })
                .populate("owner","_id user_name profile_picture role avatar")
                .populate("post", "_id question description")
                .populate("comment", "_id content")
                .populate("answer", "_id content");
    
    
                if(getReport){
                    res.status(200).json(getReport);
                } else {
                    throw new Error ('Reporte no encontrado.');
                }
            }
    
        } catch(err: any | unknown){
            res.status(404).send(`Algo salió mal en el controller GET_REPORT_BY_ID: ${err.message}`);
        }
    };
};