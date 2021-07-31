import { IWorkflow, StageId } from 'workflow-playground-shared';
import { generateId } from './generateId';

export function getNewWorkflow(): IWorkflow {
    const workflow: IWorkflow = {
        id: generateId(),
        stages: [
            {
                id: StageId.TODO,
                name: 'Todo',
                nextIds: [StageId.IN_PROGRESS],
            },
            {
                id: StageId.IN_PROGRESS,
                name: 'In-progress',
                nextIds: [StageId.REVIEW],
            },
            {
                id: StageId.REVIEW,
                name: 'Review',
                nextIds: [StageId.FINISHED, StageId.IN_PROGRESS],
            },
            {
                id: StageId.FINISHED,
                name: 'Finished',
                nextIds: [],
            },
        ],
    };

    return workflow;
}
