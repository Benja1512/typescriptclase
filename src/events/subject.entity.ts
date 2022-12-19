import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

class teacher {
  id: number;
}

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => (teacher) => teacher.subjects, { cascade: true })
  @JoinTable()
  teachers: teacher[];
}
