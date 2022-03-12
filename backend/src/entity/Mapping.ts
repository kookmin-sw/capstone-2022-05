import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne} from "typeorm";
import {BabySitter} from './BabySitter'
import {Parent} from './Parent'

@Entity()
export class Mapping {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    expected_salary: number;

    @Column({nullable : false})
    working_time: number;


    @CreateDateColumn({})
    createdAt: Timestamp


    // mapping(N) <->  baby sitter(1)
    @ManyToOne(
        type => BabySitter, 
        babySitter => babySitter.mapping, { nullable: false, onDelete: 'CASCADE' }
        )
    babySitter : BabySitter

    
    // mapping(N) <->  baby parent(1)
    @ManyToOne(
        type => Parent, 
        parent => parent.mapping, { nullable: false, onDelete: 'CASCADE' }
        )
    parent : Parent

}
