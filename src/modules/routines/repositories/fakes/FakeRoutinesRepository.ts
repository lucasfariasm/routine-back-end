import {v4 as uuid} from "uuid";
import IRoutinesRepository from "@modules/routines/repositories/IRoutinesRepository";
import Routine from "../../infra/typeorm/entities/Routine";
import ICreateRoutineDTO from "@modules/routines/dtos/ICreateRoutineDTO";

class RoutinesRepository implements IRoutinesRepository {
  private routines: Routine[] = [];

  public async create({
    routine_id, 
    date}: ICreateRoutineDTO): Promise<Routine>{
      const routine = new Routine();

      Object.assign(routine, { id: uuid(), date, routine_id})

      this.routines.push(routine);

      return routine;
  }
}

export default RoutinesRepository;