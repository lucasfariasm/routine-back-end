import CreateRoutineService from "@modules/routines/services/CreateRoutineService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class RoutineController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { routine_id, routine_name, date } = request.body;

    const createRoutine = container.resolve(CreateRoutineService)

    const routine = await createRoutine.execute({
      routine_id,
      routine_name,
      date
    })

    return response.json(routine);
  }
}