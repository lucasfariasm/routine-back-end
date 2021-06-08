import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn, 
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('routines')
class Routine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  routine_id: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: "routine_id"})
  routine: User;

  @Column()
  routine_name: string;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Routine;