import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId: number;

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

    @CreateDateColumn({ nullable: false})
    createdAt: Timestamp


}
