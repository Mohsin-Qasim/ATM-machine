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

  
    function atmMachine(){
        let pincode = Number(document.getElementById("pincode").value);
        let result = document.getElementById("result")
        let balanceAmount = Number(document.getElementById("balanceAmount").value)


        let myaccount = new Bank(1234,5000)
        let messsage = myaccount.getBalance(pincode)
        let withdramount = myaccount.withdraw(pincode,balanceAmount)
        result.innerHTML = `${messsage} <br> ${withdramount ||""}`
console.log(myaccount.withdraw(1234,500));
console.log(myaccount.withdraw(1234,4500));



    }



    document.querySelector(".btn").addEventListener("click" , atmMachine)