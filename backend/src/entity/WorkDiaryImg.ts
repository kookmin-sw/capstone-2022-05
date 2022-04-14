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
}