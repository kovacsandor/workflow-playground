import axios from 'axios';
import { IGetWorkflowByIdResponseBody, IWorkflowStage } from 'workflow-playground-shared';

export async function fetchWorkflowById(id: string): Promise<IWorkflowStage[]> {
    const axiosResponse = await axios.get<IGetWorkflowByIdResponseBody>(
        `${process.env.REACT_APP_SERVER_URL_ORIGIN}/api/workflow/${id}`,
    );

    return axiosResponse.data.workflow.stages;
}
