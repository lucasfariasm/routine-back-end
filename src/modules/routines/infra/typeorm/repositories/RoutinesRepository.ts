// import Routine from "../infra/typeorm/entities/Routine";
import { getRepository, Repository } from "typeorm";
import IRoutinesRepository from "@modules/routines/repositories/IRoutinesRepository";
import Routine from "../entities/Routine";
import ICreateRoutineDTO from "@modules/routines/dtos/ICreateRoutineDTO";

class RoutinesRepository implements IRoutinesRepository {
  private ormRepository: Repository<Routine>;

  constructor(){
    this.ormRepository = getRepository(Routine)
  }

  public async create({
    routine_id, 
    date}: ICreateRoutineDTO): Promise<Routine>{
      const routine = this.ormRepository.create({ routine_id, date });

      await this.ormRepository.save(routine);

      return routine;
  }
}

export default RoutinesRepository;