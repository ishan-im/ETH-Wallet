import Web3 from "web3";

import Wallet from "./contracts/Wallet.json";

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        reject("No web3 provider found");
      }
    });
  });

 
};

const getWallet = async (web3) => {
  const networkId = await web3.eth.net.getId();
  console.log(networkId, "networkId");
  const deployedNetwork = Wallet.networks[networkId];
  console.log("deployedNetwork", deployedNetwork);
  return new web3.eth.Contract(
    Wallet.abi,
    deployedNetwork && deployedNetwork.address
  );
};

export { getWeb3, getWallet };
