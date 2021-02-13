import { IWorkflowStage } from 'shared';
import { fetchWorkflowById } from './fetchWorkflow';

test('returns a list of at least 1 stages', async (): Promise<void> => {

    const workflow: IWorkflowStage[] = await fetchWorkflowById('test-id')
    expect(workflow.length).toBeGreaterThanOrEqual(1)
})
