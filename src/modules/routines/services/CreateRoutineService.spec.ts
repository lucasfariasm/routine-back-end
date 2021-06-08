import FakeRoutinesRepository from "../repositories/fakes/FakeRoutinesRepository";
import CreateRoutineService from "./CreateRoutineService";

describe('CreateRoutine', () => {
  it('should be able to create a new routine', async () => {
    const fakeRoutinesRepository = new FakeRoutinesRepository();
    const createRoutine = new CreateRoutineService(
      fakeRoutinesRepository,
    );

    const routine = await createRoutine.execute({
      date: new Date(),
      routine_name: 'routine',
      routine_id: '123',
    });

    expect(routine).toHaveProperty("id");
  })
})