import "./App.css";
import { useState, useEffect } from "react";
import { getWeb3, getWallet } from "./utils";

import Spinner from "./components/Spinner";
import Header from "./components/Header";
import NewTransfer from "./components/NewTransfer";

import TransferList from "./components/TransferList";

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState(undefined);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfersCount = await wallet.methods.getTransfers().call();
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfersCount);
    };
    init();
    console.log("web3", web3);
    console.log("accounts", accounts);
    console.log("wallet", wallet);
    console.log("approvers", approvers);
    console.log("quorum", quorum);
    console.log("transfers", transfers);

  }, []);

  const createTransfer = (transfer) => {
    wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({ from: accounts[0] });
  };

  const approveTransfers = (transferId) => {

    wallet.methods
      .approveTransfer(transferId)
      .send({ from: accounts[0] }); 

  }

  if (
    typeof web3 === "undefined" ||
    typeof accounts === "undefined" ||
    typeof wallet === "undefined" ||
    typeof approvers === "undefined" ||
    typeof quorum === "undefined"
  ) {
    return (
      <div className="text-center container p-5">
        <Spinner />
        <h2> Loading Web3, accounts, and contract...</h2>
      </div>
    );
  }

  return (
    <div className="container p-2">
       <h3 className="text-center mt-5">Multising Dappps</h3>
      <Header approvers={approvers} quorum={quorum} />
         
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfer={transfers} approveTransfers={approveTransfers}/>
    </div>
  );
}

export default App;
