import cors from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { IGetWorkflowByIdResponseBody, IWorkflow } from 'shared';
import { getWorkflowById } from './getWorkflowById';

const application: Express = express();
const port = 5000;

interface IGetWorkflowByIdRequestParams {
    readonly id: string;
}

application.use(cors());
application.use(morgan('combined'));

application.get(
    '/workflow/:id',
    async (
        req: Request<IGetWorkflowByIdRequestParams>,
        res: Response<IGetWorkflowByIdResponseBody>,
        next: NextFunction,
    ): Promise<void> => {
        const workflow: IWorkflow = await getWorkflowById(req.params.id);

        res.json({ workflow });
    },
);

application.listen(port, (): void => {
    console.log(`Listening at http://localhost:${port}`);
});
