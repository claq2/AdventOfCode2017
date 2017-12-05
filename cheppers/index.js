function getInt64Bytes( x ){
    var bytes = [];
    var i = 2;
    do {
    bytes[--i] = x & (255);
    x = x>>8;
    } while ( i )
    return bytes;
}
// 4oqVKEhnZ0pBZ3RUUkVBZUZCOEtDQjBMQjBNWkNSVkJNd3dSSXg4Y0VBb0hIUXdkQXgwSENnPT0sIOKGkeKGkeKGk+KGk+KGkOKGkuKGkOKGkkJBKQ==
// ↑↑↓↓←→←→BA


let space = ' '.charCodeAt(0);
console.log('space', space);
let up = '↑'.charCodeAt(0);
let down = '↓'.charCodeAt(0);
let left = '←'.charCodeAt(0);
let right = '→'.charCodeAt(0);
let b = 'B'.charCodeAt(0);
let a = 'A'.charCodeAt(0);
let upBytes = [38];//[parseInt('e2', 16), parseInt('86', 16), parseInt('91', 16)];//getInt64Bytes(up);
let downBytes =[40];// [parseInt('e2', 16), parseInt('86', 16), parseInt('93', 16)];//getInt64Bytes(down);
let leftBytes = [37]//[parseInt('e2', 16), parseInt('86', 16), parseInt('90', 16)];//getInt64Bytes(left);
let rightBytes = [39]//[parseInt('e2', 16), parseInt('86', 16), parseInt('92', 16)];//getInt64Bytes(right);
console.log('upBytes', upBytes);
console.log('downBytes', downBytes);
console.log('leftBytes', leftBytes);
console.log('rightBytes', rightBytes);
// let key = [];
// key = key.concat(upBytes);
// key.push(up);
// key.push(down);
// key.push(down);
// key.push(left);
// key.push(right);
// key.push(left);
// key.push(right);
let key = [];
//key.push(space);
key = key.concat(upBytes).concat(upBytes).concat(downBytes).concat(downBytes).concat(leftBytes).concat(rightBytes).concat(leftBytes).concat(rightBytes);//.push(b).push(a);
key.push(b);
key.push(a);
console.log('key', key);
console.log('key length', key.length);

let base64 = 'HggJAgtTREAeFB8KCB0LB0MZCRVBMwwRIx8cEAoHHQwdAx0HCg==';
let buf = Buffer.from(base64, 'base64');
console.log('buf length', buf.length);
console.log('buf', buf);
let xored = [];
for (let i = 0; i < buf.length; i++) {
    const element = buf[i];
    //console.log('i', i);
    //console.log('key element', i % key.length);
    xored.push(element ^ key[i % key.length]);
}
console.log('xored', xored);
console.log('xored', xored.map(i=>i.toString(16)));
let xoredBase64 = Buffer.from(xored).toString('base64');
console.log('xoredBase64', xoredBase64);
console.log(xored.map(i=>String.fromCharCode(i)));

