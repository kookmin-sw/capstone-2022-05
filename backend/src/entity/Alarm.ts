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


}