import React, { useEffect, useState } from 'react';
import { IWorkflowStage, StageId } from 'workflow-playground-shared';
import { fetchWorkflowById } from '../utility/fetchWorkflow';

export function App(): JSX.Element {
    const [currentStageId, setCurrentStageId] = useState<string | null>(null);
    const [workflow, setWorkflow] = useState<IWorkflowStage[] | null>(null);

    useEffect((): void => {
        async function fetch(): Promise<void> {
            setWorkflow(await fetchWorkflowById('test-id'));
            setCurrentStageId(getStartStageId());
        }

        if (!workflow) {
            fetch();
        }
    }, [workflow]);

    // todo - calculate start stage id
    function getStartStageId(): string {
        return StageId.TODO;
    }

    function getStage(stageId: string | null): IWorkflowStage | undefined {
        return workflow?.find((stage: IWorkflowStage): boolean => stage.id === stageId);
    }

    function getStageName(stageId: string | null): string | undefined {
        return stageId ? getStage(stageId)?.name : undefined;
    }

    function getWorkflowFinished(): boolean {
        return currentStageId ? !!getStage(currentStageId)?.nextIds.length : false;
    }

    function onClickNext(nextId: string): (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
            setCurrentStageId(nextId);
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onClickReset(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        setCurrentStageId(null);
        setWorkflow(null);
    }

    return (
        <>
            <h1>Workflow playground</h1>
            {workflow ? (
                <>
                    <h2>Current stage: {getStageName(currentStageId) || ''}</h2>
                    {getWorkflowFinished() ? (
                        <>
                            <h3>Go to stage</h3>
                            {getStage(currentStageId)?.nextIds.map(
                                (nextId: string): JSX.Element => (
                                    <button key={nextId} onClick={onClickNext(nextId)}>
                                        {getStageName(nextId) || ''}
                                    </button>
                                ),
                            )}
                        </>
                    ) : (
                        <button onClick={onClickReset}>Reset</button>
                    )}
                </>
            ) : (
                'Loading...'
            )}
        </>
    );
}
