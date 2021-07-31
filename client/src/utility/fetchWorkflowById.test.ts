import { IWorkflow } from 'workflow-playground-shared';
import { fetchWorkflowById } from './fetchWorkflowById';

test('returns a list of at least 1 stages', async (): Promise<void> => {
    const workflow: IWorkflow = await fetchWorkflowById('test-id');
    expect(workflow);
});
