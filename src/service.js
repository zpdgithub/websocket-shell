/*
 * @Description: 
 * @version: 
 * @Author: Peter Zou
 * @Date: 2019-11-27 15:35:48
 * @LastEditors: Peter Zou
 * @LastEditTime: 2019-11-28 09:07:33
 */
const WebSocket = require('ws');

let builderClient = null,
    uiClient = null,
    builderClientReady = false,
    uiClientReady = false;

const wss = new WebSocket.Server({
    port: 8001
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        message = JSON.parse(message);
        console.log('message:', message);
        switch (message.from) {
            case 'uiClient':
                if ('connect' === message.data) { //连接请求
                    uiClient = ws;
                    uiClientReady = true;
                    uiClient.send('success');
                } else { //命令
                    if (builderClientReady) {
                        builderClient.send(message.data);
                    }
                }
                break;
            case 'builderClient':
                if ('connect' === message.data) { //连接请求
                    builderClient = ws;
                    builderClientReady = true;
                } else {
                    if (uiClientReady) {
                        uiClient.send(message.data);
                    }
                }
                break;
        }
    });
});
console.log('WebSocket Ready!');