import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'

@Entity()
export class BabySitter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    age: number;

    @Column({nullable : false})
    gender: string;

    @Column({nullable : false})
    region: string;

    @Column({nullable : false})
    career: string;


    @CreateDateColumn({})
    createdAt: Timestamp


    // babysitter(N) <->  user(1)
    @ManyToOne(
        type => User, 
        user => user.babySitter, { nullable: false, onDelete: 'CASCADE' }
        )
    user! : User

    // babysitter(1) <->  user(N)
    @OneToMany(
        type => Mapping,
        mapping => mapping.babySitter,{ nullable: false, onDelete: 'CASCADE' }
    )
    mapping: Mapping

}
