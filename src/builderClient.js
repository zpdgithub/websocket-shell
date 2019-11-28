/*
 * @Description: 
 * @version: 
 * @Author: Peter Zou
 * @Date: 2019-11-27 15:10:27
 * @LastEditors: Peter Zou
 * @LastEditTime: 2019-11-28 09:22:23
 */
var WebSocket = require('ws');
var shell = require('shelljs');

var ws = new WebSocket('ws://127.0.0.1:8001');

ws.on('open', function open() {
    ws.send(JSON.stringify({
        from: 'builderClient',
        data: 'connect'
    }));
});

ws.on('message', function incoming(command) {
    console.log('command:', command);
    // 执行shell
    var shellResult = shell.exec(command, {
        silent: true
    });
    ws.send(JSON.stringify({
        from: 'builderClient',
        data: shellResult.stdout
    }));
});