import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, ManyToOne, OneToMany, OneToOne, JoinColumn, BaseEntity, UpdateDateColumn} from "typeorm";
import {User} from './User';
import {Mapping} from './Mapping'
import {RequestToParent} from './RequestToParent'

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


    @CreateDateColumn({nullable:false})
    createdAt: Timestamp

    @UpdateDateColumn({nullable: false})
    updatedAt: Timestamp



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
        () => RequestToParent,
        request => request.babySitter,{ nullable: false, onDelete: 'CASCADE' }
    )
    request: RequestToParent[];

    static async findById(bsId:number){
        const result = await this.findOne({bsId:bsId});
        if(!result){
            throw "no exist babysitter"
        }
        return result
    }

    static async updateBsInfo(bsId:number, data:object){
        return await this.update({bsId:bsId}, data)
    }

    static async checkDuple(userId:number){
        const result = await this.createQueryBuilder("babySitter")
        .where("babySitter.userId = :userId", {userId:userId})
        .getOne();

        console.log(result)
        if (result){
            return true
        }
        else{
            return false
        }
    }
}
