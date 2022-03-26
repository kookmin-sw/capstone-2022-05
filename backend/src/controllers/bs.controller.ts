import { Request, Response, NextFunction } from "express";
import {BsInputInfo} from "../interfaces/bs"
import { User } from '../entity/User';
import {BabySitter} from '../entity/BabySitter'
import bcrypt from "bcrypt";
import { Agent } from 'http';

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

    await bs.save()
}

export default {
    inputBSInfo
}



