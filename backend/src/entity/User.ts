import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({nullable : false, unique:true})
    email: string;

    @Column({nullable : false})
    username: string;

    @Column({nullable : false, unique: true})
    nickname: string;

    @Column({nullable : false})
    password: string;

    @Column({nullable : false})
    code: number;

    @CreateDateColumn({ nullable: false})
    createdAt: Timestamp

    static async findByEmail(email: string){
        
        return await this.createQueryBuilder("user")
            .where("user.email = :email", {email: email})
            .getOneOrFail();
    }
}
