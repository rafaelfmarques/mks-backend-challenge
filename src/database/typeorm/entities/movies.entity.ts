import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ProjectStatus {
  Pending = 'pending',
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
}

@Entity()
export class Movies {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

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
    id?: UUID,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
