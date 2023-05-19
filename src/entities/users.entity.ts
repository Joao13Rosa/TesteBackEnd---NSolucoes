import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  email: string;

  @Column({ length: 120 })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Column({ default: "ACTIVE" })
  status: string;

  @Column()
  telephone: string;
}
