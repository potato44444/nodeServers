var express= require('express')

const http = require('http'); // 第一行请求 node.js自带的http模板，并且把它赋值给http变量

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => { // 调用http模板提供的函数 createServer. 这个函数会返回一个对象，
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
//   第二种写法
//   response.writeHead(200,{'Content-Type':'text/plain'});
//   response.end('hello word\n')
});

server.listen(port, hostname, () => { //这个对象叫listen方法，这个方法的数值参数，指定这个thhp服务端监听的端口号
  console.log(`Server running at http://${hostname}:${port}/`);
});
