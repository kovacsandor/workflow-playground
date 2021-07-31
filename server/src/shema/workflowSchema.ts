import { Schema } from 'mongoose';
import { workflowStageSchema } from './workflowStageSchema';

export const workflowSchema = new Schema({
    id: String,
    stages: [workflowStageSchema],
});
