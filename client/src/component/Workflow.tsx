import React, { useEffect, useState } from 'react';
import { IWorkflowStage, IWorkflow, StageType } from 'workflow-playground-shared';
import { fetchWorkflowById } from '../utility/fetchWorkflowById';
import { useParams } from 'react-router-dom';
import { Spinner } from './Spinner';

export function Workflow(): JSX.Element {
    const [currentStageId, setCurrentStageId] = useState<string | null>(null);
    const [workflow, setWorkflow] = useState<IWorkflow | null>(null);
    const { id } = useParams<{ readonly id: string }>();

    useEffect((): void => {
        async function fetch(): Promise<void> {
            const workflow: IWorkflow = await fetchWorkflowById(id);

            setWorkflow(workflow);
            setCurrentStageId(getStartStageId(workflow));
        }

        if (!workflow) {
            fetch();
        }
    }, [id, workflow]);

    function getStartStageId(workflow: IWorkflow): string | null {
        return workflow?.stages.find((stage: IWorkflowStage): boolean => stage.type === StageType.Todo)?.id || null;
    }

    function getStage(stageId: string | null): IWorkflowStage | undefined {
        return workflow?.stages?.find((stage: IWorkflowStage): boolean => stage.id === stageId);
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
            {workflow ? (
                <>
                    <h2>Workflow: {workflow.id}</h2>
                    <h3>Current stage: {getStageName(currentStageId) || ''}</h3>
                    {getWorkflowFinished() ? (
                        <>
                            {getStage(currentStageId)?.type !== StageType.Finished && <h4>Go to stage</h4>}
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
                <Spinner />
            )}
        </>
    );
}
