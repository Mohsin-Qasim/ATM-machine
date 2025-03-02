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
    getPin() {
        return this.#pin;
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
    }
    function withdrawAmount(){
        let withdrawpin = Number(document.getElementById("withdrawpin").value);
        let balanceAmount = Number(document.getElementById("balanceAmount").value)
        let withdramount = myaccount.withdraw(withdrawpin,balanceAmount)
        let withdrawResult = document.getElementById("withdrawResult")
        withdrawResult.textContent = withdramount
    }

document.getElementById("withdraw").addEventListener("click",withdrawAmount)
    document.querySelector("#checkBalance").addEventListener("click" , checkBalance)




class Saving extends Bank {
    
    constructor(pin , amount){
    
        super(pin,amount)
    }

    savingAcc(pin){
        if (pin !==this.getPin()){
           return `you r not eligible`   
        }
    else{
        return `You'r Eligible`
    }

    }
}
let savingaccount = new Saving(12346)
console.log(savingaccount.savingAcc(1234    ));

function checkEligible(){
    let savinPin = parseInt(document.getElementById("savinPin").value)
    let eligiblity = document.getElementById("eligiblity")
    eligiblity.textContent= savingaccount.savingAcc(savinPin)
}
document.getElementById("check").addEventListener("click",checkEligible)




