import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, JoinColumn, OneToMany, BaseEntity} from "typeorm";
import { Alarm } from './Alarm';
import {BabySitter} from './BabySitter'
import {Parent} from './Parent'
import { WorkDiary } from './WorkDiary';

@Entity()
export class Mapping extends BaseEntity {

    @PrimaryGeneratedColumn()
    mappingId: number;

    @CreateDateColumn({})
    createdAt: Timestamp


    // mapping(N) <->  baby sitter(1)
    @ManyToOne(
        () => BabySitter, 
        babySitter => babySitter.mapping, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({name: "bsId"})
    babySitter : BabySitter

    
    // mapping(N) <->  baby parent(1)
    @ManyToOne(
        () => Parent, 
        parent => parent.mapping, { nullable: false, onDelete: 'CASCADE' }
        )
    @JoinColumn({name: "parentId"})
    parent : Parent


    // Mapping(1) <-> Alarm(N)
    @OneToMany(
        () => Alarm,
        alarm => alarm.mapping,{ nullable: false, onDelete: 'CASCADE' }
    )
    alarm: Alarm[];


    // Mapping(1) <-> WorkDiary(N)
    @OneToMany(
        () => WorkDiary,
        workDiary => workDiary.mapping,{ nullable: false, onDelete: 'CASCADE' }
    )
    diary: WorkDiary[];

}
