import crypto from 'crypto';

function encryptMd5() {
  const hash = crypto.createHash('md5');

  const data = 'Hello, world!';

  hash.update(data);

  const result = hash.digest('hex');

  console.log('MD5 Hash:', result);
}

function encryptSha1() {
  const data = 'Hello, World!';

  const hash = crypto.createHash('sha1');

  hash.update(data, 'utf8');

  const result = hash.digest('hex');

  console.log('SHA-1 Hash:', result);
}

function encryptSha2 () {
  const data = 'Hello, World!';

  const hash = crypto.createHash('sha256');

  hash.update(data, 'utf8');

  const result = hash.digest('hex');

  console.log('SHA-256 Hash:', result);
}

encryptMd5();
encryptSha1();
encryptSha2();
