import React, { useState } from 'react';
import { createNewWorkflow } from '../utility/createNewWorkflow';
import { createWorkflow } from '../utility/createWorkflow';
import { IWorkflow } from 'workflow-playground-shared';
import { Spinner } from './Spinner';

export function WorkflowNew(): JSX.Element {
    const [workflow, setWorkflow] = useState<IWorkflow | null>(createNewWorkflow());

    function onClickReset(
        workflow: IWorkflow,
    ): (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
            setWorkflow(null);
            await createWorkflow(workflow);
            setWorkflow(createNewWorkflow());
        };
    }

    return (
        <>
            <h2>Add new workflow</h2>
            {workflow ? (
                <>
                    {JSON.stringify(workflow)}
                    <button onClick={onClickReset(workflow)}>Create</button>
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
}
