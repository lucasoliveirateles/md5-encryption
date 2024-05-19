# MD5 AND WHY NOT TO USE IT

🔧 Run application:

#### Start Server (YARN)
```
-> yarn

-> yarn start
```

#### Start Server (NPM)
```
-> npm install

-> npm run start
```

MD5 (Message Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value. It's commonly used to verify the integrity of data by creating a checksum for a file or a piece of data. MD5 was designed by Ronald Rivest in 1991 and was widely used for a variety of security applications, such as storing passwords or checking the integrity of files.

Here's how MD5 works:

* Message Input: The input message, which can be of any length, is divided into blocks of 512 bits (64 bytes).

* Padding: If the message length is not congruent to 512 bits, padding is added to make the length congruent to 512 bits. Typically, a '1' bit followed by '0' bits is added, and then the length of the original message is appended in binary representation.

* Initialization: MD5 initializes four 32-bit variables (A, B, C, D) to specific constants.

* Processing Blocks: The algorithm processes each block of the message in sequence. For each block, it performs a series of bitwise operations, including AND, OR, XOR, and shifts, combined with specific constants and functions. This process creates a digest for each block.

* Final Digest: After processing all blocks, the final digest is obtained by concatenating the four 32-bit variables A, B, C, and D in the order they were initialized.

* MD5 has been widely used, but it's considered to have security vulnerabilities, particularly collision vulnerabilities. This means that it's possible for two different inputs to produce the same MD5 hash, which compromises its effectiveness for certain security applications. Due to these vulnerabilities, MD5 is not recommended for cryptographic purposes anymore, and it's been largely replaced by more secure hash functions like SHA-256 (Secure Hash Algorithm 256-bit).


## MD5 is no longer considered secure for several reasons

* Collision Vulnerabilities: MD5 has been shown to have significant collision vulnerabilities, meaning it's possible to find two different inputs that produce the same MD5 hash value. This compromises its integrity-checking ability, as an attacker could potentially substitute one file for another while keeping the same MD5 hash.

* Weaknesses in Design: MD5's design has weaknesses that make it vulnerable to various attacks, including differential cryptanalysis and birthday attacks. These attacks can exploit patterns in the MD5 algorithm to find collisions more efficiently than brute force.

* Advancements in Computing Power: As computing power has increased over time, the feasibility of brute-force attacks against MD5 has also increased. What was once considered computationally infeasible may now be within reach of determined attackers.

* Availability of Better Alternatives: More secure hash functions, such as SHA-256 (Secure Hash Algorithm 256-bit), SHA-3, and others, are now widely available and recommended for cryptographic purposes. These algorithms offer stronger security properties and resistance to known attacks compared to MD5.

Due to these factors, MD5 is no longer recommended for cryptographic applications where security is paramount. Instead, it's advisable to use more modern and secure hash functions that have been designed with stronger security guarantees in mind.