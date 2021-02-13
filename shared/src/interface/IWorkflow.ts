import { IWorkflowStage } from "./IWorkflowStage";

export interface IWorkflow {
    readonly id: string
    readonly stages: IWorkflowStage[]
}
