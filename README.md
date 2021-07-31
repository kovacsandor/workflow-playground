# workflow-playground
An experimental project

## Start up client

Navigate to `workflow-playground/client` and run
```
docker build -t workflow-playground-client .
docker run -p 3000:3000 -d -v "$(pwd)/src":/app/src --name workflow-playground-client workflow-playground-client
```

## Start up server

Navigate to `workflow-playground/server` and run
```
docker build -t workflow-playground-server .
docker run -p 8080:8080 -d --name workflow-playground-server --link workflow-playground-database workflow-playground-server
```

## Start up database

Run
```
docker run -p 2717:27017 -d -v "$(pwd)/data/db":/data/db --name workflow-playground-database mongo:latest
```

Connection string
```
mongodb://127.0.0.1:2717/workflow-playground-database-develop
```