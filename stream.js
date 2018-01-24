// // 从流中读取数据
// var fs = require("fs");

// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');
// // 设置编码为utf-8
// readerStream.setEncoding("UTF8");

// // 处理流时间 -->data, end ,error
// readerStream.on('data', function(chunk){
//     data+= chunk;
// })

// readerStream.on('end', function(){
//     console.log(data)

// })
// readerStream.on('error', function(err){
//     console.log(err.stack);
// })

// console.log("程序执行完毕");

// // 写入
// // 创建可以写入的流，写入到文件 output.txt中
// var writerStream = fs.createWriteStream('output.txt');
// // 使用utf8编写写入数据
// writerStream.write(data,'UTF8');
// // 编辑文件末尾
// writerStream.end();
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");

// // 管道流
// var fs = require("fs");

// // 创建一个可读流
// var readerStream = fs.createReadStream('input.txt');

// // 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');

// // 管道读写操作
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);

// console.log("程序执行完毕");


// 链式流
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
// var fs = require('fs');
// var zlib = require('zlib');

// 压缩input.txt文件为 MSInputMethodContext.txt.gz
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream("input.txt.gz"));

// 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input1.txt'));


let fs = require('fs');
let data = '';
let data2 = '强哥无敌';
//1.读取流
//创建可读流
let readStream = fs.createReadStream("input.txt");
//设置utf-8编码
readStream.setEncoding('UTF8');
//处理流事件
readStream.on('data', chunk => data += chunk);
readStream.on('end', () => writeS(data));
readStream.on("error", err => console.log(err.strck));
console.log("程序1执行完毕");
//2.写入流
//创建可写流
let writeS = dataS =>{
    let writeStream = fs.createWriteStream("outInput.txt");
    //使用utf-8写入流    
    writeStream.write(data2+dataS, "UTF8");
    //标记文件末尾
    writeStream.end();
    //处理事件流
    writeStream.on("finish", () => console.log("写入完成")); 
    writeStream.on("error", err => console.log(err.stack));   
    console.log("程序2执行完毕");
}
