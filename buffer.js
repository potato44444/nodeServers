const buf = Buffer.from("runoob", "ascii");

console.log(buf.toString("hex"));

console.log(buf.toString('base64'))

// 创建一个长度为10、且用0填充的buffer
const buf1 = buffer.alloc(10);

// 创建一个长度为10、且用0x1 填充的buffer
const buf2 = buffer.alloc(10, 1)