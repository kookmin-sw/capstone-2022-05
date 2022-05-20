import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,Timestamp, BaseEntity } from 'typeorm';
import { Mapping } from './Mapping';


@Entity()
export class Alarm extends BaseEntity {
    @PrimaryGeneratedColumn()
    alarmId: number

    @Column({nullable : false})
    alarmCode: string;

    @Column()
    alarmText:string;

    @Column()
    alarmImg:string;

    @CreateDateColumn({nullable : false})
    createdAt: Timestamp

    // Mapping(1) <-> Alarm(N)
    @ManyToOne(
        () => Mapping,
        mapping => mapping.alarm,{ nullable: false, onDelete: 'CASCADE' }
    )
    @JoinColumn({name: "mappingId"})
    mapping: Mapping

    // 당일 작성된 알람 이미지 리스트 가져오기
    static async findAlarmbyMappingId(mappingId: number) {

        const date = new Date();
        let year: number = date.getFullYear();
        let month: string = ("0" + (1 + date.getMonth())).slice(-2);
        let day: string = ("0" + date.getDate()).slice(-2);

        return await this.createQueryBuilder("alarm")
            .where("alarm.mappingId = :mappingId", {mappingId: mappingId})
            .andWhere("DATE_FORMAT(alarm.createdAt, '%Y-%m-%d') = :date", {date: year + "-" + month + "-" + day})
            .getMany();
    }

    // 알람 테이블에서 클릭한 날짜에 저장된 이미지 가져오기
    static async findCalendarAlarmList(mappingId: number, date: string) {

        return await this.createQueryBuilder("alarm")
            .where("alarm.mappingId = :mappingId", {mappingId: mappingId})
            .andWhere("DATE_FORMAT(alarm.createdAt, '%Y-%m-%d') = :date", {date: date})
            .getMany();
    }

}