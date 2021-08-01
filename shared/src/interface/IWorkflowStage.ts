import { StageType } from '../enum/StageType';

export interface IWorkflowStage {
    readonly id: string;
    readonly name: string;
    readonly nextIds: string[];
    readonly type: StageType;
}
