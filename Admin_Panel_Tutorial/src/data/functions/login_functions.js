import { anchor } from '../config';


export const ualLogin = async () => {


    console.log('Loading...');
    await anchor.login();

    localStorage.setItem('waxAccount', anchor.users[0].accountName);
    localStorage.setItem('walletProvider','anchor');
    location.reload();
  
  }
  
  export const ualLogout = async () => {

    await anchor.logout();

    localStorage.removeItem('waxAccount');
    localStorage.removeItem('walletProvider');
    location.reload();
  
  }
