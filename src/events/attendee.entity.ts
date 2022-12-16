import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Attendee, (attendee) => attendee.event, {
    nullable: true,
  })
  @JoinColumn()
  event: Event;
}
