import { Schema } from 'mongoose';
import { StageType } from 'workflow-playground-shared';

export const workflowStageSchema = new Schema({
    id: String,
    name: String,
    nextIds: [String],
    type: { type: String, enum: [StageType.Finished, StageType.InProgress, StageType.Review, StageType.Todo] },
});
