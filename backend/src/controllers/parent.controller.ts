import { Request, Response, NextFunction } from "express";
import { User } from '../entity/User';
import { Parent } from '../entity/Parent';
import { RequestToParent } from "../entity/RequestToParent";
import { Mapping } from "../entity/Mapping";

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

const getMainPage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parent_id: number = +req.params.parentId;

        // Mapping 정보 반환
        const existMappingList = await Mapping.findMappingList(parent_id);
        
        // 매핑 정보가 있는 경우
        if (existMappingList.length !== 0) {
            return res.status(200).json({
                message: "매핑 리스트",
                existMappingList
            });
        }
        else { // 없는 경우 Request 테이블 확인
            const existRequestList = await RequestToParent.findReqeustList(parent_id)
            
            // 보모 요청 정보가 있는 경우
            if (existRequestList.length !== 0) {
                return res.status(200).json({
                    message: "요청 리스트",
                    existRequestList
                });
            }
            
            // 보모 요청이 없는 경우
            else {
                return res.status(404).json({
                    message: "매핑 정보와 요청 정보 없음"
                })
            }
        }
    }
    catch(err) {
        res.status(400).json(err);
    }
}

export default {getParentInfo, editParentInfo, createParentInfo, getMainPage};