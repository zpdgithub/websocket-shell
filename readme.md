### 描述
使用websocket，`构建器客户端*`、`ui客户端`经由`服务端`建立通信，使`ui客户端`可以在`构建器客户端`执行shell命令

### 文件结构
- 服务端 src/service.js
- 构建器客户端 src/builderClient.js
- ui客户端 src/index.html

### 启动
同时启动所有端
> npm start

开启服务端
> npm run start:server

开启构建器客户端
> npm run start:builderClient

开启ui客户端
> npm run start:uiClient

### 使用
input中输入shell命令，例如`ls`，点击“执行”
