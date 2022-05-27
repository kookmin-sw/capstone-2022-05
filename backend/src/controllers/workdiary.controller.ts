import { Request, Response, NextFunction, response } from "express";
// import * as upload from "./multer";
import { Mapping } from '../entity/Mapping';
import { WorkDiary } from '../entity/WorkDiary';
import upload from "../controllers/multer";




interface MulterRequest extends Request {
    files: any;
}

const uploadImg = upload.upload.array('img');


const writeWorkdiary = async (req:Request, res:Response, next:NextFunction) => {
    console.log(req.body)


    uploadImg(req,res,async (err) => {
        if(err){
            // console.log(req.body)
            res.status(500).json({msg: "이미지 업로드 중 에러발생....."})
        }
        else{
            const issue:string = req.body.issue;
            const mappingId:number = +req.params.mappingId;
            const fileList = (req as MulterRequest).files
            console.log(req.body)

            if(!issue){
                res.status(400).json({msg:"값이 없습니다."})
            }
            else{
                try{
                    let imageList: string[] = [];
        
                    if(fileList.length > 0){
                        for(let i = 0; i < fileList.length;i++){
                            imageList.push(fileList[i].key)
                            console.log(imageList[i])
                        }
                        
                    }
                    
                    await WorkDiary.saveWorkDiary(mappingId, imageList, issue);
                }
                catch(e){
                    // 방금 업로든 된 s3파일들 삭제 해야함


                    res.status(500).json({msg: e})
                }
            }

            res.status(201).end()
        }
    })

    
}

export default{
    writeWorkdiary,
}