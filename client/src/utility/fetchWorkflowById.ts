import axios from 'axios';
import { getRouteApiGetWorkflowById, IGetWorkflowByIdResponseBody, IWorkflow } from 'workflow-playground-shared';
import { getApiUrl } from './getApiUrl';

export async function fetchWorkflowById(id: string): Promise<IWorkflow> {
    const axiosResponse = await axios.get<IGetWorkflowByIdResponseBody>(getApiUrl(getRouteApiGetWorkflowById(id)));

    return axiosResponse.data.workflow;
}
