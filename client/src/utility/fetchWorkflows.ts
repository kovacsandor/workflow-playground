import axios from 'axios';
import { getRouteApiGetWorkflows, IGetWorkflowsResponseBody, IWorkflow } from 'workflow-playground-shared';
import { getApiUrl } from './getApiUrl';

export async function fetchWorkflows(): Promise<IWorkflow[]> {
    const axiosResponse = await axios.get<IGetWorkflowsResponseBody>(getApiUrl(getRouteApiGetWorkflows()));

    return axiosResponse.data.workflows;
}
