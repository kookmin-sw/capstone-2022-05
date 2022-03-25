import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Timestamp, DeleteDateColumn,OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import {BabySitter} from './BabySitter';
import {Parent} from './Parent';

@Entity()
export class Request extends BaseEntity {
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
}