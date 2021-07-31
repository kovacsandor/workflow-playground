import { IWorkflow } from 'workflow-playground-shared';
import { model } from 'mongoose';
import { workflowSchema } from '../shema/workflowSchema';

export const WorkflowModel = model<IWorkflow>('Workflow', workflowSchema);
