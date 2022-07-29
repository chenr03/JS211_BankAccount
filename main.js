// 'use strict'
//
// const assert = require('assert');
// const readline = require('readline');
// This class should have the following fields
//1:
//This class represents a bank account.
class BankAccount {
    //The constructor should take in the following input: accountNumber, and owner - the name of the person who owns this account
    //NOTE: when an account is created, you should initialize the transactions array to be an empty array
    constructor(accountNumber, owner) {
        //String representing the account number
        this.accountNumber = accountNumber;
        //String representing the owner of the account
        this.owner = owner;
        //transactions - an array of transactions representing the history of all transactions associated with this account
        this.transactions = [];
    }

// The class should have the following 3 methods:
// 1: balance() - This method does not take any input,
    balance() {
        //Because the for loop will add all up together for the transactions in the transactions array, we should start this function with a zero balance
        let currentBalance = 0
        //The balance is calculated by adding up all the amounts in the transactions array. - using a for loop.
        for (let i = 0; i < this.transactions.length; i++) {
            let element = this.transactions[i];
            // console.log(this.transactions[i].amount)
            currentBalance = currentBalance + element.amount;
            // console.log(currentBalance.element.amount)
        }
        //and returns the current balance on the account.
        return currentBalance
    };

    // debits(payee, amount) - takes 2 inputs: payee, amount creates new transaction with payee & amount, adds it to transaction array
    debits(payee, amount) {
        let newDebit = new Transaction(amount, payee);
        this.transactions.push(newDebit);
    }


    credits(amount, Transaction) {
        if (amount <= 0) {
            console.log(`You cannot deposit a negative amount dumbAss ${amount}`)

        }
        //create a transaction representing the credit,
        let newCredit = new Transaction(this.owner, amount)
        console.log(`The deposit ${JSON.stringify(this.transactions, null, 2)}`)

        //and add it to the transactions array
        this.transactions.push(newCredit);
        console.log(`new array of transactions: ${JSON.stringify(this.transactions, null, 2)}`)
    };


class Transactions {

    constructor(payee, amount) {
        // amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
        this.amount = amount;
        // payee - The description or payee on the transaction
        this.payee = payee;
        // date - The date of the transaction
        this.date = new Date(); // NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date globally or automatically/ .
        }
    }
}

let chrisHenry = new BankAccount(9284, "Chris Henry");

let Deposit1 = new Transaction('Walmart', 2500 );


chrisHenry.credits(2500, 1);
chrisHenry.balance() //calling balance() is adding or keeping that 2500.00 deposit for the next time I check the balance
chrisHenry.credits(2100, 2, this.date)
chrisHenry.balance() // same thing
chrisHenry.debits("Walmart", -1200, this.date);
chrisHenry.balance()// ""
chrisHenry.debits("Target", 1500, this.date)
chrisHenry.balance()//""
chrisHenry.debits("Top Golf", 500, this.date)
chrisHenry.balance()//""

console.log(chrisHenry.balance());
console.log(chrisHenry.transactions);
console.log(Deposit1)


