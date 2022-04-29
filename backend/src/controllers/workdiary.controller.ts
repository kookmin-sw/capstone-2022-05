import { Request, Response, NextFunction } from "express";
import {s3} from "../../config/s3"
import multerS3 from "multer-s3"
import multer from "multer"
import { Mapping } from '../entity/Mapping';
import { WorkDiary } from '../entity/WorkDiary';
import { WorkDiaryImg } from '../entity/WorkDiaryImg';

interface MulterRequest extends Request {
    files: any;
}

const upload = multer({
    storage: multerS3({ 
        s3: s3,
        bucket: 'icare-s3',
        contentType: multerS3.AUTO_CONTENT_TYPE, 
        acl: 'public-read',
        
        key: function (req, file, cb) { 
            cb(null, `workdiary/${Date.now()}_${file.originalname}`)
        },
    })
})

const writeWorkdiary = async (req:Request, res:Response, next:NextFunction) => {
    const issue:string = req.body.issue;
    const mappingId:number = +req.params.mappingId;
    // const filesList = req.files
    const fileList = (req as MulterRequest).files
    if(!issue){
        res.status(400).json({msg:"값이 없습니다."})
    }
    else{
        const mappingInfo:Mapping = await Mapping.findOne({mappingId:mappingId});
        const diary: WorkDiary = new WorkDiary();

        let imageList: string[] = [];

        if(fileList.length > 0){
            for(let i = 0; i < fileList.length;i++){
                imageList.push(fileList[i].key)
                console.log(imageList[i])
            }
        }

        diary.issue = issue;
        diary.mapping = mappingInfo
        const writeDiaryRes = await diary.save();

        for(let i = 0; i < imageList.length;i++){
            const workdiaryImg:WorkDiaryImg = new WorkDiaryImg();
            workdiaryImg.image = imageList[i];
            workdiaryImg.workDiary = writeDiaryRes;
            workdiaryImg.save();
        }

        res.status(201).end()
    }
    
}

export default{
    writeWorkdiary,
    upload
}