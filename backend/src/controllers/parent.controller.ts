import { Request, Response, NextFunction } from "express";
import { User } from '../entity/User';
import { Parent } from '../entity/Parent';

const getParentInfo = async (req: Request, res: Response, next: NextFunction) => {
    const parent_id: number = +req.params.parentId;
    
    const user = await Parent.findOne({parentId: parent_id});

    if(user) {
        res.status(200).json({
            parentInfo: user
        })
    }
    else {
        res.status(404).json({
            message: "아이 정보가 존재하지 않음"
        })
    }
};

const editParentInfo = async (req: Request, res: Response, next: NextFunction) => {
    const parent_id: number = +req.params.parentId;
    const updateInfo: object = req.body;

    const user = await Parent.findOne({parentId: parent_id});

    if (user) {
        await Parent.update({parentId: parent_id}, updateInfo)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "아이 정보 수정 완료",
            })
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    }
    else {
        res.status(404).json({
            message: "아이 정보가 존재하지 않음"
        })
    }

};

const createParentInfo = async (req: Request, res: Response, next: NextFunction) => {
    const {babyName, babyBirth, babyGender, region, career} = req.body;

    const user_id: number = +req.params.id;

    const user = await User.findOne({userId: user_id});

    
    if (user) {
        const parent = new Parent();
        parent.babyName = babyName;
        parent.babyBirth = babyBirth;
        parent.babyGender = babyGender;
        parent.region = region;
        parent.career = career;
        parent.user = user;

        await parent.save()
        .then((result) => {
            res.status(201).json({
                success: true,
                message: "아이 정보 입력 완료",
                babyInfo: result,
            })
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    }
    else {
        res.send("해당 유저 아이디가 존재하지 않습니다.");
    }
};

export default {getParentInfo, editParentInfo, createParentInfo};