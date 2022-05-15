import { Request, Response } from "express";
import { ReportModel, Report } from "../../models/Reports";

export const CREATE_REPORT = async(req: Request, res: Response) => {
    try{
        const { 
            owner, 
            description, 
            post, 
            answer, 
            comment, 
            status, 
            reason } = req.body;

        if(owner && description){
            if(post || answer || comment){
                const reportCreated: Report = await ReportModel.create({
                    owner: owner && owner._id,
                    description,
                    post: post && post._id,
                    answer: answer && answer._id,
                    comment: comment && comment._id,
                    status,
                    reason
                });

                res.status(200).json(reportCreated);

            } else {
                throw new Error('No se encuentra post, answer o comment reportado.');
            }
        } else {
            throw new Error('Ingrese un owner y una descripción válidos.');
        }
    } catch(err: any | unknown){
        res.status(404).send(`Algo salió mal en el controller CREATE_REPORT: ${err.message}`);
    }
};