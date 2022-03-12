import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'

@Entity()
export class Parent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    baby_name: string;

    @Column({nullable : false})
    baby_birth: string;

    @Column({nullable : false})
    baby_gender: string;

    @Column({nullable : false})
    region: string;

    @Column({nullable : false})
    career: number;

    @CreateDateColumn({})
    createdAt: Timestamp


    // user(N) <->  Parent(1)
    @ManyToOne(
        type => User, 
        user => user.parent, { nullable: false, onDelete: 'CASCADE' }
        )
    user! : User

    // Parent(1) <->  mapping(N)
    @OneToMany(
        type => Mapping,
        mapping => mapping.babySitter,{ nullable: false, onDelete: 'CASCADE' }
    )
    mapping: Mapping

}
