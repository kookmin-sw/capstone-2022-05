import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, BaseEntity, Transaction, EntityManager, TransactionManager } from 'typeorm';
import { Mapping } from './Mapping';
import { WorkDiaryImg } from './WorkDiaryImg';

import {s3} from "../../config/s3"
import multerS3 from "multer-s3"
import multer from "multer"
import upload from "../controllers/multer";

@Entity()
export class WorkDiary extends BaseEntity {
    @PrimaryGeneratedColumn()
    diaryId: number;

    @Column({nullable : false})
    issue: string;

    @CreateDateColumn({nullable : false})
    createdAt: Timestamp;


    // Mapping(1) <-> WorkDiary(N)
    @ManyToOne(
        () => Mapping,
        mapping => mapping.diary,{ nullable: false, onDelete: 'CASCADE' }
    )
    @JoinColumn({name: "mappingId"})
    mapping: Mapping


    // WorkDiary(1) <-> WorkDiaryImg(N)
    @OneToMany(
        () => WorkDiaryImg,
        workDiaryImg => workDiaryImg.workDiary,{ nullable: false, onDelete: 'CASCADE' }
    )
    workDiaryImg: WorkDiaryImg[]

    // 당일 작성된 퇴근일지 가져오기
    static async findDiarybyMappingId(mappingId: number) {

        const date = new Date();
        let year: number = date.getFullYear();
        let month: string = ("0" + (1 + date.getMonth())).slice(-2);
        let day: string = ("0" + date.getDate()).slice(-2);

        return await this.createQueryBuilder("work_diary")
            .where("work_diary.mappingId = :mappingId", {mappingId: mappingId})
            .andWhere("DATE_FORMAT(work_diary.createdAt, '%Y-%m-%d') = :date", {date: year + "-" + month + "-" + day})
            .getOne();
    }

    // 캘린더에서 클릭한 날짜에 작성된  퇴근일지 가져오기
    static async findCalendarDiary(mappingId: number, date: string) {

        return await this.createQueryBuilder("work_diary")
            .where("work_diary.mappingId = :mappingId", {mappingId: mappingId})
            .andWhere("DATE_FORMAT(work_diary.createdAt, '%Y-%m-%d') = :date", {date: date})
            .getOne();
    }

    @Transaction()
    static async saveWorkDiary(mappingId : number ,imgList : string[], issue: string,
        @TransactionManager() manager? : EntityManager
        ){
            const mappingInfo:Mapping = await Mapping.findOne({mappingId:mappingId});
            if(Mapping){
                throw "존재하지 않는 mapping"
            }
            const diary: WorkDiary = new WorkDiary();
            diary.issue = issue;
            diary.mapping = mappingInfo
            const writeDiaryRes = await manager.save(WorkDiary, diary);
            // throw "error"
            for(let i = 0; i < imgList.length;i++){
                const workdiaryImg:WorkDiaryImg = new WorkDiaryImg();
                workdiaryImg.image = imgList[i];
                workdiaryImg.workDiary = writeDiaryRes;
                workdiaryImg.save();
            }

            // upload.upload.array("img");
            // upload('img');

    }
}