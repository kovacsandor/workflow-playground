import axios from 'axios';
import { IGetWorkflowByIdResponseBody, IWorkflowStage } from 'shared';

export async function fetchWorkflowById(id: string): Promise<IWorkflowStage[]> {
    const axiosResponse = await axios.get<IGetWorkflowByIdResponseBody>(`http://localhost:5000/workflow/${id}`);

    return axiosResponse.data.workflow.stages;
}
