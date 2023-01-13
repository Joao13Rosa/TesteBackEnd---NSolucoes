import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    category: string;
  
    @Column({ default: "ACTIVE" })
    status: string;
  
    @Column({ default: 0 })
    quantity: number;
  
    @Column({ type: "time" })
    created_at: Date;

    @Column({ type: "time", nullable:true })
    updated_at: Date;

    @Column({ type: "time", nullable:true })
    deleted_at: Date;
  }