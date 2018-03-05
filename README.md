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
* Updated constantly
* Transparent, easy to audit
* Integrity of files validated using SHA-256 hashes; meaning files have not been tampered with (see below)
* Almost every major cryptocurrencies are supported and easily accessible using subdomains **[coin].pwall.org**:
	* https://bitcoin.pwall.org
	* https://litecoin.pwall.org
	* https://stellar.pwall.org
	* https://ripple.pwall.org
		
#### Instructions
* Use this generator offline for maximum security.
* Generate and print your wallet. Keep it in a secure location.
* Deposit funds to your paper wallet by sending them to the Bitcoin address.
* Private key is used to spend funds. Do not share it!


#### Add ons and upgrades
* need segwit support
* need to look at security


#### Tips appreciated!  
**BTC**: 137H4GbcDz3e3DS9ADDbee4wa1GHHdcEnW  
:punch:
#
#### Integrity validation
* [bitcoinjs.min.js](https://github.com/bitcoinjs/bitcoinjs-lib) v3.3.2
	* [SHA-256] b60cea009ba031162c00fed73aca4348e2da8640309e27370af425024e99dbcf
* [qrcode.min.js](https://github.com/davidshimjs/qrcodejs) 
	* [SHA-256] c541ef06327885a8415bca8df6071e14189b4855336def4f36db54bde8484f36
