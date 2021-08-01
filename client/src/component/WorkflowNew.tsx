import React, { useState } from 'react';
import { createNewWorkflow } from '../utility/createNewWorkflow';
import { createWorkflow } from '../utility/createWorkflow';
import { IWorkflow, IWorkflowStage, StageType } from 'workflow-playground-shared';
import { Spinner } from './Spinner';

export function WorkflowNew(): JSX.Element {
    const [workflow, setWorkflow] = useState<IWorkflow | null>(createNewWorkflow());

    function onClickCreate(
        workflow: IWorkflow,
    ): (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
            setWorkflow(null);
            await createWorkflow(workflow);
            setWorkflow(createNewWorkflow());
        };
    }

    function getStage(stageId: string): IWorkflowStage | undefined {
        return workflow?.stages.find((stage: IWorkflowStage): boolean => stage.id === stageId);
    }

    function getStageName(stageId: string): string | undefined {
        return getStage(stageId)?.name;
    }

    return (
        <>
            <h2>Add new workflow</h2>
            {workflow ? (
                <>
                    <hr />
                    <h3>Workflow: {workflow.id}</h3>
                    {workflow.stages.map(
                        (stage: IWorkflowStage): JSX.Element => (
                            <div key={stage.id}>
                                <h4>Current stage: {stage.name}</h4>
                                {stage.type !== StageType.Finished && <h5>Go to stage</h5>}
                                {stage.nextIds.map(
                                    (nextId: string): JSX.Element => (
                                        <button disabled={true} key={nextId}>
                                            {getStageName(nextId)}
                                        </button>
                                    ),
                                )}
                            </div>
                        ),
                    )}
                    <hr />
                    <button onClick={onClickCreate(workflow)}>Create</button>
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
}
