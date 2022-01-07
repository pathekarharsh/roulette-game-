const web3 = require("@solana/web3.js");
const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
console.log(connection);
const userWallet=web3.Keypair.generate();
console.log(userWallet);
const transaction=new web3.Transaction().add(
    web3.SystemProgram.transfer({
        fromPubkey:new web3.PublicKey(from.publicKey.toString()),
        toPubkey:new web3.PublicKey(to.publicKey.toString()),
        lamports:web3.LAMPORTS_PER_SOL
    })
);
console.log('Signature is ',signature)
const transferSOL=async (from,to,transferAmt)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const transaction=new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey:new web3.PublicKey(from.publicKey.toString()),
                toPubkey:new web3.PublicKey(to.publicKey.toString()),
                lamports:transferAmt*web3.LAMPORTS_PER_SOL
            })
        )
        const signature=await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        )
        return signature;
    }catch(err){
        console.log(err);
    }
}
const { getReturnAmount, totalAmtToBePaid, randomNumber } = require('./helper');
const {getWalletBalance,airDropSol}=require("./solana");
