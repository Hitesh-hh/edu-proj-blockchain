import { ethers } from "./ethers-5.6.esm.min.js";
import { abi } from "./ABI.js";
import { contractAddress} from "./ABI.js";
// const SHA256 = require('crypto-js/sha256');
// import sha256 from "/crypto-js/sha256.js";
import sha256 from 'crypto-js/sha256';
const connectButton = document.getElementById("connectButton");
const username = "Meet24";
const submit = document.getElementById("submit");

// const fundButton = document.getElementById("fundButton");
// const balanceButton = document.getElementById("balanceButton");
// const withdrawButton = document.getElementById("withdrawButton");

connectButton.onclick = connect;
submit.onclick = name;

// fundButton.onclick = fund;
// balanceButton.onclick = getBalance;
// withdrawButton.onclick = withdraw;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("I see a metamask");
    // To directly connect our wallet account to our website. Async function is used to avoid calling it everytime asking for permission when page is refreshed. Metamask wallet gets connected on pressing connect button upon accepting. Await is used to wait until the task is done.
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected");
    connectButton.innerHTML = "Connected";
  } else {
    console.log("No metamask");
    connectButton.innerHTML = "Install Metamask";
  }
}

async function name() {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const name_contract = await provider.name(contractAddress);
    var flag = 0;
    for (var i = 0; i < 100; i++) {
      const num_name = name_contract + i;
      const encrypt_name = sha256(num_name);
      //   const encrypt_name = sha256Hasher.digest("hex");
      if (username === encrypt_name) {
        flag = 1;
      }
    }
    if (flag === 1) {
      alert(
        name_contract + "has a valid certificate with this contract address."
      );
    } else {
      alert("First gain a valid certificate ");
    }
  }
}