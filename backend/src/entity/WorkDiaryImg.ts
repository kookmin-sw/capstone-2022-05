import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { WorkDiary } from './WorkDiary';

@Entity()
export class WorkDiaryImg{
    @PrimaryGeneratedColumn()
    diaryImg: number;

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
}