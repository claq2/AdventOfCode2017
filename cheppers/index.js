let a = '↑'.charCodeAt(0);
let bufa = Buffer.from(a);
console.log(bufa[0]);
let b = 0;
let xor = a ^ b;


let base64 = 'HggJAgtTREAeFB8KCB0LB0MZCRVBMwwRIx8cEAoHHQwdAx0HCg==';
let buf = Buffer.from(base64, 'base64');
console.log(buf[0] +' ' + buf[1]);
xor = buf[0] ^ a;
console.log(xor);
