# workflow-playground
An experimental project

Navigate to `workflow-playground/client` and run
```
docker build -t workflow-playground-client .
docker run -p 3000:3000 -d -v "$(pwd)/src":/app/src --name workflow-playground-client workflow-playground-client
```

Navigate to `workflow-playground/server` and run
```
docker build -t workflow-playground-server .
docker run -p 8080:8080 -d --name workflow-playground-server workflow-playground-server
```
