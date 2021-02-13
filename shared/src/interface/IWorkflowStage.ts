import { StageId } from '../enum/StageId';

export interface IWorkflowStage {
    readonly id: string;
    readonly name: string;
    readonly nextIds: StageId[];
}
