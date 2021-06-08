import { injectable, inject } from "tsyringe";

import Routine from "../infra/typeorm/entities/Routine";
import IRoutinesRepository from "../repositories/IRoutinesRepository";

interface IRequest {
  routine_id: string;
  routine_name: string;
  date: Date;
}

@injectable()
class CreateRoutineService {
  constructor(
    @inject('RoutinesRepository')
    private routinesRepository:IRoutinesRepository
  ){}

  public async execute({routine_id, routine_name, date}: IRequest): Promise<Routine> {

    const routine = await this.routinesRepository.create({
      routine_id,
      routine_name,
      date
    });

    return routine;
  }
}

export default CreateRoutineService;