function encrypt() {
  const crypto = require('crypto');

  const hash = crypto.createHash('md5');

  const data = 'Hello, world!';

  hash.update(data);

  const result = hash.digest('hex');

  console.log('MD5 Hash:', result);
}

encrypt();
