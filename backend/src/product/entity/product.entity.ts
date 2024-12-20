import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column('text')
  description: string;
  @Column()
  price: number;
  @Column('text')
  details: string;
  @Column()
  photoUrl: string;
}