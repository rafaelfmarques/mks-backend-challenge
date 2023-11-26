import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(
    props: {
      name: string;
      email: string;
      password: string;
    },
    id?: UUID,
  ) {
    Object.assign(this, props);
    this.id = id ?? crypto.randomUUID();
  }
}
