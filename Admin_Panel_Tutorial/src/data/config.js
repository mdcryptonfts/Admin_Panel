import { Anchor } from 'ual-anchor';
import { Wax } from '@eosdacio/ual-wax';

export const testnetChain = {
    chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
    rpcEndpoints: [{
        protocol: 'https',
        host: 'testnet.waxsweden.org',
        port: '443'
    }]
  };

export const mainnetChain = {
    chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
    rpcEndpoints: [{
        protocol: 'https',
        host: 'wax.pink.gg',
        port: '443'
    }]
  };


export const myChain = mainnetChain;

export const currentUsername = localStorage.getItem('waxAccount');

export const anchor = new Anchor([myChain], {

    appName: 'Admin Panel',
  
  });
  
export const wax = new Wax([myChain], {
  
    appName: 'WaxDAO',
  
  });
