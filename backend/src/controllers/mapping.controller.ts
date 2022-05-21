import { NextFunction, Request, Response } from 'express';
import { BabySitter } from '../entity/BabySitter';
import { Mapping } from '../entity/Mapping';

const findParentList = async (req:Request, res: Response, next: NextFunction) => {
    try{
        const bsId : number = +req.params.bsId; 
    
        // await BabySitter.findById(bsId)
        const result = await Mapping.findMappingParentList(bsId);

        const returnData = []

        if(result.length == 0){
            return res.status(200).json(returnData);
        }

        result.map((value: any, index: number) => {
            console.log(typeof(value))
            returnData.push(value)
        })

        res.status(200).json(returnData)

    // console.log(result);
    }
    catch(e){
        res.status(400).json({message: e})
    }
}

export default{
    findParentList
}