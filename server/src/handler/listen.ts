import { Express } from 'express';
import { connect } from 'mongoose';

export function listen(application: Express): void {
    application.listen(
        process.env.PORT,
        async (): Promise<void> => {
            console.log(`Listening at http://localhost:${process.env.PORT}`);

            await connectToDatabase();
        },
    );
}

async function connectToDatabase(): Promise<void> {
    // later there will be a connection string provided in the environment variables
    const mongoConnection = `mongodb://${process.env.WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP_ADDR}:${process.env.WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP_PORT}/${process.env.DATABASE_NAME}`;

    await connect(mongoConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`Connected to database: ${mongoConnection}`);
}
