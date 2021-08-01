import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchWorkflows } from '../utility/fetchWorkflows';
import { IWorkflow } from 'workflow-playground-shared';

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
            {workflows
                ? workflows.map(
                      (workflow: IWorkflow): JSX.Element => (
                          <Link key={workflow.id} to={`/workflow/${workflow.id}`}>
                              {workflow.id}
                          </Link>
                      ),
                  )
                : 'Loading...'}
        </>
    );
}
