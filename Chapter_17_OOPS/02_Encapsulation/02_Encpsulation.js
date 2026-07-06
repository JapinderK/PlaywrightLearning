class BankAccount{
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;   //composite operator works same as c=a+b;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());