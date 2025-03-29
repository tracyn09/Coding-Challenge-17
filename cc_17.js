// Task 1
    //Creating customer class
    class Customer {
        constructor(name,email) {
            this.name = name
            this.email = email
            this.purchaseHistory = []
        }
    
    //Adding purchase amount to purchaseHistory
    addPurchase(amount) {
        this.purchaseHistory.push(amount)
    }

    //Return total amount spent
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, currentValue) => total + currentValue, 0)
    }
    }

    //Adding customer
    const customer0 = new Customer ("Joseph", "joeR@gmail.com")
    customer0.addPurchase(250)
    customer0.addPurchase(27)               
    customer0.addPurchase(23)

    //Logging customer creation (name) and total spent
    console.log(`Customer Name: ${customer0.name}`) 
    console.log(`Total Spent: $${customer0.getTotalSpent()}`)


 