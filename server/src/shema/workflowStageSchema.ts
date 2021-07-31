import { Schema } from 'mongoose';

export const workflowStageSchema = new Schema({
    id: String,
    name: String,
    nextIds: [String],
});
