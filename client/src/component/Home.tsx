import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchWorkflows } from '../utility/fetchWorkflows';
import { IWorkflow } from 'workflow-playground-shared';
import { Spinner } from './Spinner';

export function Home(): JSX.Element {
    const [workflows, setWorkflows] = useState<IWorkflow[] | null>(null);

    useEffect((): void => {
        async function fetch(): Promise<void> {
            setWorkflows(await fetchWorkflows());
        }

        if (!workflows) {
            fetch();
        }
    }, [workflows]);

    return (
        <>
            <h2>Workflows</h2>
            {workflows ? (
                <ul>
                    {workflows.map(
                        (workflow: IWorkflow): JSX.Element => (
                            <li key={workflow.id}>
                                <Link to={`/workflow/${workflow.id}`}>{workflow.id}</Link>
                            </li>
                        ),
                    )}
                </ul>
            ) : (
                <Spinner />
            )}
        </>
    );
}
