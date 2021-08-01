import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { IGetWorkflowByIdResponseBody, IGetWorkflowsResponseBody, IWorkflow } from 'workflow-playground-shared';
import { listen } from './handler/listen';
import { WorkflowModel } from './model/WorkflowModel';

const application: Express = express();

interface IGetWorkflowByIdRequestParams {
    readonly id: string;
}

application.use(cors());
application.use(morgan('combined'));

application.get(
    '/api/workflows',
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
    '/api/workflow/:id',
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

listen(application);
