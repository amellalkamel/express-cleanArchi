import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
  } from "typeorm";
  import { Length, IsNotEmpty } from "class-validator";



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar", nullable: false, unique: true })
    @Length(4, 20)
    username: string;
  
    @Column({ type: "varchar", nullable: false })
    @Length(4, 20)
    firstname: string;
  
    @Column({ type: "varchar", nullable: false })
    @Length(4, 20)
    lastname: string;
  
    @Column({ type: "varchar", nullable: false })
    email: string;
}