import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, OneToMany} from "typeorm";
import {Parent} from './Parent'
import {BabySitter} from './BabySitter'


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    email: string;

    @Column({nullable : false})
    username: string;

    @Column({nullable : false})
    nickname: string;

    @Column({nullable : false})
    password: string;

    @Column({nullable : false})
    code: number;

    @CreateDateColumn({
        
    })
    createdAt: Timestamp

    @OneToMany(
        (type) => Parent, 
        parent => parent.user, { nullable: false, onDelete: 'CASCADE' }

    )
    parent : Parent

    @OneToMany(
        (type) => BabySitter, 
        babySitter => babySitter.user, { nullable: false, onDelete: 'CASCADE' }

    )
    babySitter : BabySitter

}
