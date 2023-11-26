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
  poster: string;

  @Column()
  production: string;

  @Column()
  released: Date;

  @Column()
  genre: string;

  // constructor(
  //   props: {
  //     name: string;
  //     description: string;
  //     createdAt?: Date | null;
  //     cancelledAt?: Date | null;
  //     forecastedAt?: Date | null;
  //   },
  //   id?: string,
  // ) {
  //   Object.assign(this, props);
  //   this.id = id ?? crypto.randomUUID();

  //   if (props?.createdAt) {
  //     this.start(props.createdAt);
  //   }
  // }

  // start(createdAt: Date) {
  //   if (this.status == ProjectStatus.Active) {
  //     throw new Error('Cannot start active project');
  //   }
  //   if (this.status == ProjectStatus.Completed) {
  //     throw new Error('Cannot start completed project');
  //   }
  //   if (this.status == ProjectStatus.Cancelled) {
  //     throw new Error('Cannot start cancelled project');
  //   }
  //   this.createdAt = createdAt;
  //   this.status = ProjectStatus.Active;
  // }
}
