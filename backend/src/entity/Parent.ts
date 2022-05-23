import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'
import { RequestToParent } from './RequestToParent';

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
        () => RequestToParent,
        requestToParent => requestToParent.parent,{ nullable: false, onDelete: 'CASCADE' }
    )
    request: RequestToParent[];

    static async getParentEmail(parentId: number){
        return await this.createQueryBuilder("parent")
            .leftJoinAndSelect("parent.user", "user")
            .where("parent.parentId = :parentId", {parentId: parentId})
            .getOne();
    }
}
