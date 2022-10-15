import { anchor } from '.././config';


const wasmHash = "";

const abiHexString = "";

const newActiveKey = ""; //PUBLIC ACTIVE KEY

const newOwnerKey = ""; //PUBLIC OWNER KEY



export const checkWallet = async (walletProvider, setDeployModalText) => {

  if(walletProvider != 'anchor'){

    setDeployModalText('You are not logged in with Anchor');

  }

}//end checkWallet

export const getWalletSession = async (setDeployModalText) => {

  var session;

  var this_user;

  var this_permission;

  const walletProvider = localStorage.getItem('walletProvider');

  const walletCheck = await checkWallet(walletProvider, setDeployModalText);

  if(walletProvider == 'anchor'){
    session = await anchor.login();
    this_user = anchor.users[0].accountName;
    this_permission = anchor.users[0].requestPermission;
    console.log("You are logged in with Anchor")
  } else { return; }

  return [session, this_user, this_permission];

} //end getWalletSession


export const updateActiveAuth = async ( setDeployModalText, setLoadingDisplay, setDeployModalDisplay) => {
  setDeployModalDisplay('');
  setDeployModalText('Awaiting confirmation...');

  var walletSession = await getWalletSession(setDeployModalText);
  const session = walletSession[0];
  var this_user = walletSession[1];
  var this_permission = walletSession[2];

  try {
    
    const action = [
     
      {
        account: 'eosio',
        name: 'updateauth',
        authorization: [{
          actor: this_user, 
          permission: 'active',   
        }],
        data: {
            account: this_user,  
            permission: "active",
            parent: 'owner',
            auth: {
                "threshold": 1,
                "keys": [{
                    "key": newActiveKey,
                    "weight": 1
                }
              ],
                "accounts": [{
                    "permission": {
                        "actor": this_user,
                        "permission": "eosio.code"
                    },
                    "weight": 1
                }
              ],
                "waits": [
                ]
            }
        }
      }]
    const response = await session[0].signTransaction({
      actions: action
    }, {

      blocksBehind: 3,
      expireSeconds: 600,
      broadcast: true,
    })
    setLoadingDisplay('');
    setDeployModalText('Processing your transaction...')
    const timer = setTimeout(() => {
      
        setDeployModalText('Your active key has been updated');
        setLoadingDisplay('none');
  
    }, 4000);
    return () => clearTimeout(timer);

  } catch(e) {


          setDeployModalText(JSON.stringify(e.message));

    console.log(e)
    
  }

}//end updateActiveAuth



export const updateOwnerAuth = async ( setDeployModalText, setLoadingDisplay, setDeployModalDisplay) => {
  setDeployModalDisplay('');
  setDeployModalText('Awaiting confirmation...');

  var walletSession = await getWalletSession(setDeployModalText);
  const session = walletSession[0];
  var this_user = walletSession[1];
  var this_permission = walletSession[2];

  try {
    
    const action = [{
      account: 'eosio',
      name: 'updateauth',
      authorization: [{
        actor: this_user,  
        permission: 'owner',  
      }],
      data: {
          account: this_user,  
          permission: "owner",
          parent: '',
          auth: {
              "threshold": 1,
              "keys": [{
                  "key": newOwnerKey,
                  "weight": 1
              }
            ],
              "accounts": [{
                  "permission": {
                      "actor": this_user,
                      "permission": "owner"
                  },
                  "weight": 1
              }
            ],
              "waits": [
              ]
          }
      }
    }]
    const response = await session[0].signTransaction({
      actions: action
    }, {

      blocksBehind: 3,
      expireSeconds: 600,
      broadcast: true,
    })
    setLoadingDisplay('');
    setDeployModalText('Processing your transaction...')
    const timer = setTimeout(() => {
      
        setDeployModalText('Your owner key has been updated');
        setLoadingDisplay('none');
  
    }, 4000);
    return () => clearTimeout(timer);

  } catch(e) {


          setDeployModalText(JSON.stringify(e.message));

    console.log(e)
    
  }

}//end updateOwnerAuth



export const deploy = async ( setDeployModalText, setLoadingDisplay, setDeployModalDisplay) => {
  setDeployModalDisplay('');
  setDeployModalText('Awaiting confirmation...');

  var walletSession = await getWalletSession(setDeployModalText);
  const session = walletSession[0];
  var this_user = walletSession[1];
  var this_permission = walletSession[2];

  try {
    
    const action = [
      {
        account: 'eosio',
        name: 'setcode',
        authorization: [
          {
            actor: this_user,
            permission: 'active',
          },
        ],
        data: {
          account: this_user,
          code: wasmHash,
          vmtype: '0',
          vmversion: '0',
        },
      },
      {
        account: 'eosio',
        name: 'setabi',
        authorization: [
          {
            actor: this_user,
            permission: 'active',
          },
        ],
        data: {
          account: this_user,
          abi: abiHexString,
        },
      }]
    const response = await session[0].signTransaction({
      actions: action
    }, {

      blocksBehind: 3,
      expireSeconds: 600,
      broadcast: true,
    })
    setLoadingDisplay('');
    setDeployModalText('Processing your transaction...')
    const timer = setTimeout(() => {
      
        setDeployModalText('Your contract has been deployed');
        setLoadingDisplay('none');
  
    }, 4000);
    return () => clearTimeout(timer);

  } catch(e) {


          setDeployModalText(JSON.stringify(e.message));

    console.log(e)
    
  }

}//end deploy


