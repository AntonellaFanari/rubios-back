import { Credit } from "src/credit/entities/credit.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    clientNumber: string;

    @Column()
    lastName: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;

    @OneToMany(()=> Credit, (credit)=> credit.client)
    credits: Credit[];
    
}