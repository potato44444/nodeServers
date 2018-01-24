// const buf = Buffer.from("runoob", "ascii");
// console.log(buf.toString("hex"));
// console.log(buf.toString('base64'))

// // 创建buffer类
// // 创建一个长度为10、且用0填充的buffer
// const buf1 = buffer.alloc(10);
// // 创建一个长度为10、且用0x1 填充的buffer
// const buf2 = buffer.alloc(10, 1);
// // 创建一个长度为 10、且未初始化的 Buffer。
// // 这个方法比调用 Buffer.alloc() 更快，
// // 但返回的 Buffer 实例可能包含旧数据，
// // 因此需要使用 fill() 或 write() 重写。
// const buf3 = Buffer.allocUnsafe(10);
// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
// const buf4 = Buffer.from([1, 2, 3]);
// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');
// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');

// // 写入缓存区
// buf = Buffer.alloc(256,2,12);
// len = buf.write('www.runoob.com');
// console.log("写入字节数:" +len)


// // 缓存区读取
// buf = Buffer.alloc(26);
// for(var i =0; i < 26; i++){
//     buf[i] = i+97;
// }

// console.log(buf.toString('ascii'));

// console.log(buf.toString('ascii',0,5));
// console.log(buf.toString('utf8',0,5));
// console.log(buf.toString(undefined,0,5))
// // 转成json
// console.log(buf.toJSON())

// 缓存区合并
// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1,buffer2],6);
// console.log('buffer3 内容：' + buffer3.toString())

// 缓冲区比较
// var buffer1 = Buffer.from("ABCDE");
// var buffer2 = Buffer.from('ABCDf');
// var result = buffer1.compare(buffer2);
// if(result < 0) {
//     console.log(buffer1 + " 在 " + buffer2 + "之前");
//  }else if(result == 0){
//     console.log(buffer1 + " 与 " + buffer2 + "相同");
//  }else {
//     console.log(buffer1 + " 在 " + buffer2 + "之后");
//  }

// 拷贝缓存区
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 0);

console.log(buf1.toString());

var buffer1 = Buffer.from('runoob');

var buffer2 = buffer1.slice(0, 2);
console.log('buffer2 content:' + buffer2.toString())

// 缓存区长度
console.log('buffer2 length:' + buffer2.length)