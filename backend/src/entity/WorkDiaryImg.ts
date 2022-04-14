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
        return await this.createQueryBuilder("work_diary_img")
        .where("work_diary_img.workDiaryId = :diaryId", {diaryId: diaryId})
        .getMany();
    }
}