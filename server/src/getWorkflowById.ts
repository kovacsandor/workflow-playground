import { IWorkflow, StageId } from 'workflow-playground-shared';
import { getMockData } from './getMockData';

export function getWorkflowById(id: string): Promise<IWorkflow> {
    const workflow: IWorkflow = {
        id,
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

    return getMockData(workflow);
}
