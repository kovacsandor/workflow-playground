import axios from 'axios';
import { IGetWorkflowsResponseBody, IWorkflow } from 'workflow-playground-shared';

export async function fetchWorkflows(): Promise<IWorkflow[]> {
    const axiosResponse = await axios.get<IGetWorkflowsResponseBody>(
        `${process.env.REACT_APP_SERVER_URL_ORIGIN}/api/workflows`,
    );

    return axiosResponse.data.workflows;
}
