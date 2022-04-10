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

    // 1: 매핑된거 2: 대기 3: 거절
    @Column({default : 2})
    status : number

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

    // 부모 ID를 기준으로 매핑되어 있는 보모 정보를 반환
    static async findMappingList(parentId: number) {
        return await this.createQueryBuilder("mapping")
            .leftJoinAndSelect("mapping.babySitter", "babySitter")
            .where("mapping.parentId = :parentId", { parentId: parentId })
            .getMany();
    }
    static async findMappingParentList(bsId: number){

        return await this.createQueryBuilder("mapping")
            .leftJoinAndSelect("mapping.parent", "parent")
            .where("mapping.bsId = :bsId", {bsId:bsId})
            .getMany();
    }
}
