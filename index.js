import crypto from 'crypto';
import { SHA3 } from 'sha3';

const data = 'Hello, world!';

function encryptMd5() {
  const hash = crypto.createHash('md5');

  hash.update(data);

  const result = hash.digest('hex');

  console.log('MD5 Hash:', result);
}

function encryptSha1() {

  const hash = crypto.createHash('sha1');

  hash.update(data, 'utf8');

  const result = hash.digest('hex');

  console.log('SHA-1 Hash:', result);
}

function encryptSha2 () {

  const hash = crypto.createHash('sha256');

  hash.update(data, 'utf8');

  const result = hash.digest('hex');

  console.log('SHA-256 Hash:', result);
}

function encryptSha3() {

  const hash = new SHA3(256);

  hash.update(data);

  const result = hash.digest('hex');

  console.log('SHA3-256 Hash:', result);
}

encryptMd5();
encryptSha1();
encryptSha2();
encryptSha3();