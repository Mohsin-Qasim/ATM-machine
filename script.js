class Bank {
    #pin 
    #amount
    constructor(pin , amount){
        this.#pin = pin
        this.#amount = amount

    }
    getBalance(pin){
        if(pin ==this.#pin){
            return `Your balance is ${this.#amount}`
        }
        else{
            return `Your pin is incorrect`
        }
    }

   withdraw(pin , amount){

    if (pin !== this.#pin) {
        return `Access Denied`
        
    }
    else if(amount > this.#amount){
 return "Insufficient balance!" 
    }
    else{
        this.#amount -=amount   
        return `Withdraw Successfull ! Your new balance is ${this.#amount}`
    }
   }
    }
    let myaccount = new Bank(1234,5000)

  
    function checkBalance(){
        let pincode = Number(document.getElementById("pincode").value);
        let result = document.getElementById("result")
        let messsage = myaccount.getBalance(pincode)
        result.innerHTML = messsage
console.log(myaccount.withdraw(1234,500));
console.log(myaccount.withdraw(1234,4500));



    }
    function withdrawAmount(){
        let pincode = Number(document.getElementById("pincode").value);
        let balanceAmount = Number(document.getElementById("balanceAmount").value)
        let withdramount = myaccount.withdraw(pincode,balanceAmount)
        let result = document.getElementById("result")
result.textContent = withdramount
    }

document.getElementById("withdraw").addEventListener("click",withdrawAmount)
    document.querySelector("#checkBalance").addEventListener("click" , checkBalance)











