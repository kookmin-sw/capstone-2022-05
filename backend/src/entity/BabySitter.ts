import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'
import {Request} from './Request'

@Entity()
export class BabySitter extends BaseEntity {

    @PrimaryGeneratedColumn()
    bsId: number;

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

    @OneToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({name: "userId"})
    user: User

    // babysitter(1) <->  mapping(N)
    @OneToMany(
        () => Mapping,
        mapping => mapping.babySitter,{ nullable: false, onDelete: 'CASCADE' }
    )
    mapping: Mapping[]

    // babysitter(1) <->  Request(N)
    @OneToMany(
        () => Request,
        request => request.babySitter,{ nullable: false, onDelete: 'CASCADE' }
    )
    request: Request[];

}
