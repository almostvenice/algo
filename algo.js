// import algosdk
const algosdk = require('algosdk');

// API server address and API token
const server = 'https://mainnet-algorand.api.purestake.io/ps2';
const port = '';
const token = {
    'X-API-Key': 'Your API key goes here'   //change this to your key
}


// instantiate the algorand client
const algodclient = new algosdk.Algodv2(token, server, port);

// import the limit order contract template
// const limitTemplate = require("algosdk/src/logicTemplates/limitorder");


// Utility function to wait for tx confirmaiton
function waitForConfirmation(algodclient, txId) {
    var p = new Promise(function (resolve, reject) {
        console.log("Waiting transaction: " + txId + " to be confirmed...");
        var counter = 1000;
        let interval = setInterval(() => {
            if (--counter === 0) reject("Confirmation Timeout");
            algodclient.pendingTransactionInformation(txId).do().then((pendingInfo) => {
                if (pendingInfo !== undefined) {
                    let confirmedRound = pendingInfo["confirmed-round"];
                    if (confirmedRound !== null && confirmedRound > 0) {
                        clearInterval(interval);
                        resolve("Transaction confirmed in round " + confirmedRound + "\ntxID: " + txId);
                    }
                }
            }).catch(reject);
        }, 2000);
    });
    return p;
}

// Function for generating wallet
function generateWallet() {
    var account = algosdk.generateAccount();
    var mnemonic = algosdk.secretKeyToMnemonic(account.sk);
    return { account, mnemonic }
}

// Function for sending payment transaction
function sendPaymentTransaction(mnemonic, to, amount) {
    var p = new Promise(function (resolve) {
        let account = algosdk.mnemonicToSecretKey(mnemonic);
        // use closeRemainderTo paramerter when you want to close an account
        let closeRemainderTo = undefined;
        // use note parameter when you want to attach a string to the transaction
        let note = undefined;
        algodclient.getTransactionParams().do().then((params) => {
            let txn = algosdk.makePaymentTxnWithSuggestedParams(account.addr, to, amount, closeRemainderTo, note, params);
            // sign the transaction
            var signedTxn = algosdk.signTransaction(txn, account.sk);
            algodclient.sendRawTransaction(signedTxn.blob).do().then((tx) => {
                waitForConfirmation(algodclient, tx.txId)
                    .then(resolve)
                    .catch(console.log);
            }).catch(console.log);
        }).catch(console.log);
    })
    return p;
}

// function for sending asset transactions
function sendAssetTransaction(mnemonic, to, assetId, amount) {
    var p = new Promise(function (resolve) {
        let account = algosdk.mnemonicToSecretKey(mnemonic);
        // use closeRemainderTo paramerter when you want to close an account
        let closeRemainderTo = undefined;
        // use note parameter when you want to attach a string to the transaction
        let note = undefined;
        // use revocationTarget when you want to clawback assets
        let revocationTarget = undefined;
        algodclient.getTransactionParams().do().then((params) => {
            let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(account.addr, to, closeRemainderTo, revocationTarget,
                amount, note, assetId, params);       
            // sign the transaction
            var signedTxn = algosdk.signTransaction(txn, account.sk);
            algodclient.sendRawTransaction(signedTxn.blob).do().then((tx) => {
                waitForConfirmation(algodclient, tx.txId)
                    .then(resolve)
                    .catch(console.log);
            }).catch(console.log);
        }).catch(console.log);
    })
    return p;
}

module.exports = {
    waitForConfirmation,
    generateWallet,
    sendPaymentTransaction,
    sendAssetTransaction,
}

// Function used to print asset holding for account and assetid
const printAssetHolding = async function (algodclient, account, assetid) {
    let accountInfo = await algodclient.accountInformation(account).do();
    for (idx = 0; idx < accountInfo['assets'].length; idx++) {
        let scrutinizedAsset = accountInfo['assets'][idx];
        if (scrutinizedAsset['asset-id'] == assetid) {
            let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
            console.log("assetholdinginfo = " + myassetholding);
            break;
        }
    }
};