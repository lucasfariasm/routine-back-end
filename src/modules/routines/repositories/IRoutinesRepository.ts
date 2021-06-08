import ICreateRoutineDTO from "../dtos/ICreateRoutineDTO";
import Routine from "../infra/typeorm/entities/Routine";


export default interface IRoutinesRepository {
  create(data: ICreateRoutineDTO): Promise<Routine>;
}