import { Request, Response } from "express";
import { ReportModel, Report } from "../../models/Reports";

export const CREATE_REPORT = async(req: Request, res: Response) => {
    try{
        const { owner, description, post, answer, comment } = req.body;

        if(owner && description){
            if(post || answer || comment){
                const reportCreated: Report = await ReportModel.create({
                    owner,
                    description,
                    post,
                    answer,
                    comment
                });

                res.status(200).json(reportCreated);

            } else {
                throw new Error('No se encuentra post, answer o comment reportado.');
            }
        } else {
            throw new Error('Ingrese un owner y una descripción válidos.');
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};