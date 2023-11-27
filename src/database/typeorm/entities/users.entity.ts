import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
    id?: string,
  ) {
    Object.assign(this, props);
    this.id = id ?? uuidv4();
  }
}
