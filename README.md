### pwall - minimalistic paper wallet generator
#
#### Description
Using third-party services to generate paper wallets should be avoided without proper code auditing by independent entities.  
Unnecessary codes and poorly written libraries are often used, creating a huge security issue for users.  
Some services advertise that their generator works offline, and thus its users are immune to private key theft.
This statement is false; an offline paper wallet generator can still create keys deterministically without ever needing to communicate this information in any way.
For this reason, I wouldn't trust any random websites offering offline paper wallet generators.  
pwall, on the other hand, contains no bloat but only the essentials.  
Feel free to use it. https://pwall.org/ 

#### Features
* Simple, efficient, reasonably secure
* Works offline
* Transparent, easy to audit. 
* Integrity of files validated using SHA-256 hashes; meaning files have not been tampered with (see below)
* Almost every major cryptocurrencies are supported and easily accessible using subdomains **[coin].pwall.org**:
	* https://bitcoin.pwall.org
	* https://stellar.pwall.org
	* https://ripple.pwall.org
	* https://neo.pwall.org
		
#### Instructions
* Use this generator offline for maximum security.
* Generate and print your wallet. Keep it in a secure location.
* To deposit funds to your paper wallet, send them to the public address.
* Private key is used to spend funds. Do not share it!

#### Tips appreciated!  
**BTC**: 137H4GbcDz3e3DS9ADDbee4wa1GHHdcEnW  
**ETH**: LaWKxbNA3YMUZVDR4NbWXByPyGud73gamr
#
##### Integrity validation
* Bitcoin:
	* bitcoinjs.min.js (SHA-256: 4ae83a544fe7bf3cb46aa86b1e89237aaa1be45cc074cf25506556d74c8ad990)
	* qrcode.min.js (SHA-256: c541ef06327885a8415bca8df6071e14189b4855336def4f36db54bde8484f36)
