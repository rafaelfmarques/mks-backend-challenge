import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export enum ProjectStatus {
  Pending = 'pending',
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
}

@Entity()
export class Movies {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  released: Date;

  @Column()
  genre: string;

  constructor(
    props: {
      title: string;
      director: string;
      producer: string;
      released: Date;
      genre: string;
    },
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? uuidv4();
  }
}
