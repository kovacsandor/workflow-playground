import { IWorkflow, StageType } from 'workflow-playground-shared';
import { generateId } from './generateId';

export function createNewWorkflow(): IWorkflow {
    const stageIds: string[] = [generateId(), generateId(), generateId(), generateId()];
    const workflow: IWorkflow = {
        id: generateId(),
        stages: [
            {
                id: stageIds[0],
                name: 'Todo',
                nextIds: [stageIds[1]],
                type: StageType.Todo,
            },
            {
                id: stageIds[1],
                name: 'In-progress',
                nextIds: [stageIds[2]],
                type: StageType.InProgress,
            },
            {
                id: stageIds[2],
                name: 'Review',
                nextIds: [stageIds[3], stageIds[1]],
                type: StageType.Review,
            },
            {
                id: stageIds[3],
                name: 'Finished',
                nextIds: [],
                type: StageType.Finished,
            },
        ],
    };

    return workflow;
}
