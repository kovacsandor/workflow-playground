import axios from 'axios';
import { IGetWorkflowByIdResponseBody, IWorkflow } from 'workflow-playground-shared';
import { getRouteApiPostWorkflow } from 'workflow-playground-shared';
import { getApiUrl } from './getApiUrl';

export async function createWorkflow(workflow: IWorkflow): Promise<IWorkflow> {
    const axiosResponse = await axios.post<IGetWorkflowByIdResponseBody>(getApiUrl(getRouteApiPostWorkflow()), {
        workflow,
    });

    return axiosResponse.data.workflow;
}
