import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import {
    IPutWorkflowResponseBody,
    IGetWorkflowByIdResponseBody,
    IGetWorkflowsResponseBody,
    IWorkflow,
    IPutWorkflowRequestBody,
    getRouteApiGetWorkflows,
    getRouteApiGetWorkflowById,
    getRouteApiPostWorkflow,
} from 'workflow-playground-shared';
import { listen } from './handler/listen';
import { WorkflowModel } from './model/WorkflowModel';
import { json } from 'body-parser';

const application: Express = express();

interface IGetWorkflowByIdRequestParams {
    readonly id: string;
}

application.use(cors());
application.use(json());
application.use(morgan('combined'));

application.get(
    getRouteApiGetWorkflows(),
    async (
        req: Request,
        res: Response<IGetWorkflowsResponseBody>,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction,
    ): Promise<void> => {
        const workflows: IWorkflow[] = await WorkflowModel.find();

        res.json({ workflows });
    },
);

application.get(
    getRouteApiGetWorkflowById(),
    async (
        req: Request<IGetWorkflowByIdRequestParams>,
        res: Response<IGetWorkflowByIdResponseBody>,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction,
    ): Promise<void> => {
        const workflow: IWorkflow = await WorkflowModel.findOne({ id: req.params.id });

        res.json({ workflow });
    },
);

application.post(
    getRouteApiPostWorkflow(),
    async (
        req: Request<Record<string, never>, IPutWorkflowResponseBody, IPutWorkflowRequestBody>,
        res: Response<IPutWorkflowResponseBody>,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction,
    ): Promise<void> => {
        const workflow: IWorkflow = await WorkflowModel.create(req.body.workflow);

        res.json({ workflow });
    },
);

listen(application);
