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
var upBuf = Buffer.from('↑');
console.log('upBuf', upBuf);
let up = '↑'.charCodeAt(0);
let down = '↓'.charCodeAt(0);
let left = '←'.charCodeAt(0);
let right = '→'.charCodeAt(0);
let b = 'B'.charCodeAt(0);
let a = 'A'.charCodeAt(0);
let k = 'k'.charCodeAt(0);
let o = 'o'.charCodeAt(0);
let n = 'n'.charCodeAt(0);
let al = 'a'.charCodeAt(0);
let m = 'm'.charCodeAt(0);
let i = 'i'.charCodeAt(0);
let upBytes = [parseInt('e2', 16), parseInt('86', 16), parseInt('91', 16)];//getInt64Bytes(up); [38]
let downBytes = [parseInt('e2', 16), parseInt('86', 16), parseInt('93', 16)];//getInt64Bytes(down); [40]
let leftBytes = [parseInt('e2', 16), parseInt('86', 16), parseInt('90', 16)];//getInt64Bytes(left); [37]
let rightBytes = [parseInt('e2', 16), parseInt('86', 16), parseInt('92', 16)];//getInt64Bytes(right); [39]
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
//key = key.concat(upBytes).concat(upBytes).concat(downBytes).concat(downBytes).concat(leftBytes).concat(rightBytes).concat(leftBytes).concat(rightBytes);//.push(b).push(a);
//key.push(b);
//key.push(a);
key.push(k);
key.push(o);
key.push(n);
key.push(al);
key.push(m);
key.push(i);
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
//console.log('xored', xored);
console.log('xored', xored.map(i=>i.toString(16)));
let xoredBase64 = Buffer.from(xored).toString('base64');
console.log('xoredBase64', xoredBase64);
console.log(xored.map(i=>String.fromCharCode(i)));

// let orig = '4oqVKEhnZ0pBZ3RUUkVBZUZCOEtDQjBMQjBNWkNSVkJNd3dSSXg4Y0VBb0hIUXdkQXgwSENnPT0sIOKGkeKGkeKGk+KGk+KGkOKGkuKGkOKGkkJBKQ==';
// let origBuf = Buffer.from(orig, 'base64');
// for (let i = 0; i < origBuf.length; i++) {
//     const element = origBuf[i];
//     console.log(origBuf[i], String.fromCharCode(origBuf[i]));
// }

