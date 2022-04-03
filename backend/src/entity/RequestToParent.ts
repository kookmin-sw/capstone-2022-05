import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Timestamp, DeleteDateColumn,OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import {BabySitter} from './BabySitter';
import {Parent} from './Parent';

@Entity()
export class RequestToParent extends BaseEntity {
    @PrimaryGeneratedColumn()
    requestId: number;

    @CreateDateColumn({nullable : false})
    createdAt: Timestamp;

    @DeleteDateColumn({nullable : false})
    deletedAt: Timestamp


    // Request(1) <-> Parent(N)
    @ManyToOne(
        () => Parent, 
        parent => parent.request, { nullable: false, onDelete: 'CASCADE' }
        )
    @JoinColumn({name: "parentId"})
    parent : Parent


    // Request(1) <-> BabySitter(N)
    @ManyToOne(
        () => BabySitter, 
        babySitter => babySitter.request, { nullable: false, onDelete: 'CASCADE' }
        )
        @JoinColumn({name: "bsId"})
    babySitter : BabySitter


    // 이미 동일한 요청이 있는 경우 체크하기 위한 함수
    static async checkDuplicate(parentId: number, bsId: number){

        return await this.createQueryBuilder("request_to_parent")
            .where("request_to_parent.parentId = :parentId", {parentId:parentId})
            .andWhere("request_to_parent.bsId = :bsId", {bsId:bsId})
            .getMany();
    }
}