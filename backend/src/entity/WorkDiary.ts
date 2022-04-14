import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, BaseEntity } from 'typeorm';
import { Mapping } from './Mapping';
import { WorkDiaryImg } from './WorkDiaryImg';

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

    static async findDiarybyMappingId(mappingId: number) {

        const date = new Date();
        let year: number = date.getFullYear();
        let month: string = ("0" + (1 + date.getMonth())).slice(-2);
        let day: string = ("0" + date.getDate()).slice(-2);

        return await this.createQueryBuilder("work_diary")
            .where("work_diary.mappingId = :mappingId", {mappingId: mappingId})
            .andWhere("DATE_FORMAT(work_diary.createdAt, '%Y-%m-%d') = :date", {date: year + "-" + month + "-" + day})
            .getOneOrFail();
    }
}