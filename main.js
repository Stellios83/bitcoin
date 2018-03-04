function generate() {
    var {privKey, pubKey} = bitcoin.KeyPair();
    document.getElementById("public").textContent = pubKey;
    document.getElementById("secret").textContent = privKey;
    document.getElementById("public_qr").textContent = "";
    document.getElementById("secret_qr").textContent = "";
    new QRCode(document.getElementById("public_qr"), {text: pubKey, width: 128, height: 128, correctLevel : QRCode.CorrectLevel.H});
    new QRCode(document.getElementById("secret_qr"), {text: privKey, width: 128, height: 128, correctLevel : QRCode.CorrectLevel.H});
}
document.getElementById("update").textContent = "Latest update: " + document.lastModified;