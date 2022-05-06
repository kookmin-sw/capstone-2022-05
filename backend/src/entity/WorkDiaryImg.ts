import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, BaseEntity } from 'typeorm';
import { WorkDiary } from './WorkDiary';

@Entity()
export class WorkDiaryImg extends BaseEntity {
    @PrimaryGeneratedColumn()
    diaryImgId: number;

    @Column()
    image: string;

    @CreateDateColumn({nullable : false})
    createdAt: Timestamp;

    // WorkDiary(1) <-> WorkDiaryImg(N)
    @ManyToOne(
        () => WorkDiary,
        workDiary => workDiary.workDiaryImg,{ nullable: false, onDelete: 'CASCADE' }
    )
    @JoinColumn({name: "workDiaryId"})

    workDiary: WorkDiary;

    // 당일 작성된 퇴근일지 이미지 리스트 가져오기
    static async findImgbyDiaryId(diaryId: number) {

        const date = new Date();
        let year: number = date.getFullYear();
        let month: string = ("0" + (1 + date.getMonth())).slice(-2);
        let day: string = ("0" + date.getDate()).slice(-2);

        return await this.createQueryBuilder("work_diary_img")
        .where("work_diary_img.workDiaryId = :diaryId", {diaryId: diaryId})
        .andWhere("DATE_FORMAT(work_diary_img.createdAt, '%Y-%m-%d') = :date", {date: year + "-" + month + "-" + day})
        .getMany();
    }
    
    // 캘린더에서 클릭한 날짜에 작성된 퇴근일지 이미지 리스트 가져오기
    static async findImgUsingIdAndDate(diaryId: number, date: string) {

        return await this.createQueryBuilder("work_diary_img")
        .where("work_diary_img.workDiaryId = :diaryId", {diaryId: diaryId})
        .andWhere("DATE_FORMAT(work_diary_img.createdAt, '%Y-%m-%d') = :date", {date: date})
        .getMany();
    }
}