import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'
import { Request } from './Request';

@Entity()
export class Parent extends BaseEntity {

    @PrimaryGeneratedColumn()
    parentId: number;

    @Column({nullable : false})
    babyName: string;

    @Column({nullable : false})
    babyBirth: string;

    @Column({nullable : false})
    babyGender: string;

    @Column({nullable : false})
    region: string;

    @Column({nullable : false})
    career: string;

    @CreateDateColumn({})
    createdAt: Timestamp

    @OneToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({name:"userId"})
    user: User

    // Parent(1) <->  mapping(N)
    @OneToMany(
        () => Mapping,
        mapping => mapping.parent,{ nullable: false, onDelete: 'CASCADE' }
    )
    mapping: Mapping[]

    // Parent(1) <->  Request(N)
    @OneToMany(
        () => Request,
        request => request.parent,{ nullable: false, onDelete: 'CASCADE' }
    )
    request: Request[];
}
