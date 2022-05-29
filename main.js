// import algosdk
const algosdk = require('algosdk');
const algo = require("./algo");

// API server address and API token
const server = 'https://mainnet-algorand.api.purestake.io/ps2';
const port = '';
const token = {
    'X-API-Key': 'Your API key goes here'   //change this to your key
}

// instantiate the algorand client
const algodclient = new algosdk.Algodv2(token, server, port);

// PC address where all coins will go
const pcAddress = "Your main ADDRESS to where all coins are going goes here. "; //change this to the address you want the coins to go to

/* 
If you only use 10 wallets delete accounts 11 and up from this list. 15 wallets? Delete 16 and up etc..

accountexample = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },

Delete the last "comma on the last account. In this example it is on line 24."
*/

//Objects of each Wallet
const myWallets = [
    account1 = {
        name: "Name of your wallet",  //change to the name of your wallet
        mn: "Your Mnemonic goes here" //change to the Mnemonic key of that wallet
    },
    account2 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account3 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account4 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account5 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account6 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account7 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account8 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account9 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account10 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account11 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account12 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account13 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account14 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account15 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account16 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account17 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account18 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account19 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account20 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account21 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account22 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account23 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account24 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account25 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account26 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account27 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account28 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account29 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account30 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account31 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account32 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account33 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account34 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account35 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account36 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account37 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account38 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account39 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account40 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account41 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account42 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account43 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    },
    account44 = {
        name: "Name of your wallet",
        mn: "Your Mnemonic goes here"
    }
]


/*
If you only use 10 wallets delete accounts 11 and up from this list. 15 wallets? Delete 16 and up etc..

accountExample1 =  algosdk.mnemonicToSecretKey(account1.mn),

This is an example of a full account. Delete the last comma of the last account
The amount of accounts here should match the amount of accounts in the top list of Wallets.
*/

// List of all wallet keys
let walletKeys = [
    recAcc1 =  algosdk.mnemonicToSecretKey(account1.mn), recAcc2 =  algosdk.mnemonicToSecretKey(account2.mn), recAcc3 =  algosdk.mnemonicToSecretKey(account3.mn), recAcc4 =  algosdk.mnemonicToSecretKey(account4.mn),
    recAcc5 =  algosdk.mnemonicToSecretKey(account5.mn), recAcc6 =  algosdk.mnemonicToSecretKey(account6.mn), recAcc7 =  algosdk.mnemonicToSecretKey(account7.mn), recAcc8 =  algosdk.mnemonicToSecretKey(account8.mn),
    recAcc9 =  algosdk.mnemonicToSecretKey(account9.mn), recAcc10 = algosdk.mnemonicToSecretKey(account10.mn), recAcc11 = algosdk.mnemonicToSecretKey(account11.mn), recAcc12 = algosdk.mnemonicToSecretKey(account12.mn),
    recAcc13 = algosdk.mnemonicToSecretKey(account13.mn), recAcc14 = algosdk.mnemonicToSecretKey(account14.mn), recAcc15 = algosdk.mnemonicToSecretKey(account15.mn), recAcc16 = algosdk.mnemonicToSecretKey(account16.mn), 
    recAcc17 = algosdk.mnemonicToSecretKey(account17.mn), recAcc18 = algosdk.mnemonicToSecretKey(account18.mn), recAcc19 = algosdk.mnemonicToSecretKey(account19.mn), recAcc20 = algosdk.mnemonicToSecretKey(account20.mn), 
    recAcc21 = algosdk.mnemonicToSecretKey(account21.mn), recAcc22 = algosdk.mnemonicToSecretKey(account22.mn), recAcc23 = algosdk.mnemonicToSecretKey(account23.mn), recAcc24 = algosdk.mnemonicToSecretKey(account24.mn), 
    recAcc25 = algosdk.mnemonicToSecretKey(account25.mn), recAcc26 = algosdk.mnemonicToSecretKey(account26.mn), recAcc27 = algosdk.mnemonicToSecretKey(account27.mn), recAcc28 = algosdk.mnemonicToSecretKey(account28.mn), 
    recAcc29 = algosdk.mnemonicToSecretKey(account29.mn), recAcc30 = algosdk.mnemonicToSecretKey(account30.mn), recAcc31 = algosdk.mnemonicToSecretKey(account31.mn), recAcc32 = algosdk.mnemonicToSecretKey(account32.mn), 
    recAcc33 = algosdk.mnemonicToSecretKey(account33.mn), recAcc34 = algosdk.mnemonicToSecretKey(account34.mn), recAcc35 = algosdk.mnemonicToSecretKey(account35.mn), recAcc36 = algosdk.mnemonicToSecretKey(account36.mn), 
    recAcc37 = algosdk.mnemonicToSecretKey(account37.mn), recAcc38 = algosdk.mnemonicToSecretKey(account38.mn), recAcc39 = algosdk.mnemonicToSecretKey(account39.mn), recAcc40 = algosdk.mnemonicToSecretKey(account40.mn), 
    recAcc41 = algosdk.mnemonicToSecretKey(account41.mn), recAcc42 = algosdk.mnemonicToSecretKey(account42.mn), recAcc43 = algosdk.mnemonicToSecretKey(account43.mn), recAcc44 = algosdk.mnemonicToSecretKey(account44.mn)
]

let planetsBalance = 0;

const assetID = 27165954;

// Function used to print asset holdings for account
const logAssetHolding = async function (algodclient, account, assetid) {
    let inNumber = 0;
    let accountInfo = await algodclient.accountInformation(account).do();   
    for (idx = 0; idx < accountInfo['assets'].length; idx++) {  
        let scrutinizedAsset = accountInfo['assets'][idx];      
        if (scrutinizedAsset['asset-id'] == assetid) {
            let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
            let amountString = myassetholding.slice(12, 23)
            let balanceRegex = /[0-9]+/g; //get balance from the amountString
            let regexResult = amountString.match(balanceRegex);
            inNumber = parseInt(regexResult, 10);
            setTheBalance(inNumber);
            break;
        }
    }
};

//changes the balance for each iteration of the accounts in wallet
function setTheBalance(num) {
    planetsBalance = num;
}

//Waits for the balance on account and returns Planets Balance. Then returns transaction confirmation
const runThatShh = async function () {
    for (let i = 0; i < myWallets.length; i++) {
        await logAssetHolding(algodclient, walletKeys[i].addr, assetID);
        if (planetsBalance > 0) {
            console.log("Balance for " + myWallets[i].name + " is: " + (planetsBalance/1000000))
            algo.sendAssetTransaction(myWallets[i].mn, pcAddress, assetID, planetsBalance).then((txID)=>{
                console.log("All Planets transferred for " + myWallets[i].name + "\n" + txID)
            }).catch(console.log);
        } else {
            console.log("No planets on wallet " + myWallets[i].name)
        }
    }
}

runThatShh();