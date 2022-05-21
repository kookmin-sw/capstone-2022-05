import { Request, Response, NextFunction } from "express";
import {BsInputInfo} from "../interfaces/bs"
import { User } from '../entity/User';
import {BabySitter} from '../entity/BabySitter'
import bcrypt from "bcrypt";
import { Agent } from 'http';
import { Parent } from '../entity/Parent';
import { error } from 'console';
import { Mapping } from '../entity/Mapping';

const inputBSInfo = async (req:Request, res:Response, next:NextFunction) => {
    const {age, gender, region, career} : BsInputInfo = req.body

    // req.params.userId -> string이라 number로 변환
    const userId: number = +req.params.userId;

    const user = await User.findOne({userId: userId});

    const bs = new BabySitter();
    bs.age = age;
    bs.gender = gender;
    bs.region = region;
    bs.career= career;
    bs.user = user;

    const isExist = await BabySitter.checkDuple(userId)
    if(isExist){
        res.status(400).json({message: "이미 입력한 정보가 존재합니다."})
    }
    else{
        await bs.save()
        .then((result) => {
            res.status(201).json(result);
        });
    }   
}

const getBSInfo = async (req:Request, res:Response, next:NextFunction) => {
    // req.params.userId -> string이라 number로 변환
    let returnData = {}

    const bsId: number = +req.params.bsId;
    const bs = await BabySitter.getBsInfomation(bsId);
    
    console.log(bs.user)
    if (bs) {
        // returnData['bs'] = bs.Babysitter
        res.status(200).json({bs})   
    }
    else {
        res.status(400).json({
            message: "잘못된 보모 ID가 입력됨"
        })
    }
}

const updateBSInfo = async (req:Request, res:Response, next:NextFunction) => {
    
    // req.params.userId -> string이라 number로 변환
    const bsId: number = +req.params.bsId;
    const data: object = req.body

    try{
        await BabySitter.findById(bsId);
        await BabySitter.updateBsInfo(bsId, data);
        
        
        res.status(201).json({
            success: true,
            message: "아이 정보 수정 완료",
        })
    }
    catch(e){
        res.status(400).json({message:e})
    }
    
}

const mappingRequest = async (req:Request, res:Response, next:NextFunction)=>{

    const parentEmail :string = req.body.email
    const bsId: number = +req.params.bsId;

    try{
        const user = await User.findByEmail(parentEmail);
        const parent = await Parent.findOneOrFail({user: user})
        const babySitter = await BabySitter.findOneOrFail({bsId: bsId});

        const isDuple = await Mapping.checkDuplicate(parent.parentId, babySitter.bsId);
        
        if(isDuple.length >= 1){
            
            throw "duplicate"
        }

        const mapping = new Mapping();

        mapping.parent = parent;
        mapping.babySitter = babySitter;

        await mapping.save()
        .then((result) => {
            res.status(201).json(result);
        });
    }
    catch(e){
        res.status(400).json({message:e})
    }
}

export default {
    inputBSInfo,
    getBSInfo,
    updateBSInfo,
    mappingRequest
}



