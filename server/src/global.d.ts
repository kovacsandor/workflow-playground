declare namespace NodeJS {
    interface ProcessEnv {
        readonly DATABASE_NAME: string;
        readonly HOME: string;
        readonly HOSTNAME: string;
        readonly NODE_VERSION: string;
        readonly PATH: string;
        readonly PORT: string;
        readonly PWD: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_GOSU_VERSION: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_JSYAML_VERSION: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_MONGO_MAJOR: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_MONGO_PACKAGE: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_MONGO_REPO: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_ENV_MONGO_VERSION: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_NAME: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP_ADDR: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP_PORT: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP_PROTO: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_PORT_27017_TCP: string;
        readonly WORKFLOW_PLAYGROUND_DATABASE_PORT: string;
        readonly YARN_VERSION: string;
    }
}
