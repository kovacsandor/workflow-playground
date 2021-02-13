import { IGetWorkflowByIdResponseBody, IWorkflowStage } from "shared";
import axios from "axios";

export async function fetchWorkflowById(id: string): Promise<IWorkflowStage[]> {

    const axiosResponse = await axios.get<IGetWorkflowByIdResponseBody>(`http://localhost:5000/workflow/${id}`)

    return axiosResponse.data.workflow.stages
}
