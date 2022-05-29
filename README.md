# algo
Send multiple transactions from multiple wallets to 1 wallet.
Send multiple transactions of Planets assets from multiple wallets to 1 wallet.

1. Download the necessary software. I use VS Code https://code.visualstudio.com/
2. Download Node.JS https://nodejs.org/en/download/
3. Download the executable installer for Git from this link: https://git-scm.com/download/win.
  Run the installer and accept all the default values by pressing "Next". 
  At the final screen of the installation wizard, before clicking on "Finish", make sure to check the box for "Launch Git Bash" (and uncheck the box for "View     Release Notes") then click "Finish". 

4.From your bash terminal (Git Bash and Terminal are both bash terminals), check to make sure that your Git installation was successful by entering the following command:
                  git --version

5.  NPM is automatically installed when you install Node. To confirm that Node and NPM were both installed correctly, enter the following two commands in your terminal:
        node -v
        npm -v

6. You will need to run 3 commands in the main folder directory once you install Node:
      npm install algosdk
      npm install formidable@v3
      npm install superagent@7.1.1

7.Only Change Line 8 in the algo.js file to your API key that you can get from https://developer.purestake.io/

8. Change Line 9 in the main.js file to your API key
9. Lines 31-206 are for your Mnemonic keys and account names. Only change the fields with quotes "mnemoic words should be like this format". Your wallet names can be what you like.
10. Delete the extra full accounts that you do not need from the list of Wallets.

11. Lines 221-231 Should match the amount of accounts in the previous list. If you have up to account12 on previous list, then list should end with
        recAcc12 = algosdk.mnemonicToSecretKey(account12.mn)

12. Now in your bash terminal withing the /algo directory run this command
          node main.js


****IF YOU NEED TO GET INTO THE /algo DIRECTORY. GO TO WHERE THESE FILES ARE LOCATED AND RIGHT CLICK THEN CLICK "GIT BASH HERE"
