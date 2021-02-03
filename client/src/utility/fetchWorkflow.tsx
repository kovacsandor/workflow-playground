import { StageId } from "../enum/StageId";
import { IWorkflowStage } from "../interface/IWorkflowStage";

// todo - use network request
export function fetchWorkflow(): Promise<IWorkflowStage[]> {

    const workflow: IWorkflowStage[] = [
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
            nextIds: [
                StageId.FINISHED,
                StageId.IN_PROGRESS,
            ],
        },
        {
            id: StageId.FINISHED,
            name: 'Finished',
            nextIds: [],
        },
    ];

    return new Promise<IWorkflowStage[]>((resolve: (value: IWorkflowStage[]) => void, reject: (reason?: any) => void): void => {

        setTimeout(
            () => {

                resolve(workflow)
            },
            1000,
        );
    })
}
