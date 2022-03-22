import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Mapping } from './Mapping';
import { WorkDiaryImg } from './WorkDiaryImg';

@Entity()
export class WorkDiary{
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
}