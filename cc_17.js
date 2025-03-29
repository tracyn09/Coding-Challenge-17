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


    
//Task 2
    //Creating salesRep class
    class SalesRep {
        constructor(name) {
            this.name = name
            this.clients = []
        }
        
    //Adding customers to list
    addClient(customer) {
        this.clients.push(customer)
    }

    //Find client by name and return total spent
    getClientTotal(name) {
        const client = this.clients.find(c => c.name === name)
        if (client) {
            return client.getTotalSpent()
        }
        else { 
            return "Null"
        }
    }
}

    //Adding new customer
    const customer1 = new Customer ("John", "jrold@icloud.com")     
    customer1.addPurchase(50)

    //Logging sales rep's clients and total spent (Task 3)
    const SalesRep0 = new SalesRep ("Annie")                        //Creating salesRep
    SalesRep0.addClient(customer0)                                  
    SalesRep0.addClient(customer1)                                  //Adding new client to salesRep

    //Logging sales rep and list of clients
    console.log(`${SalesRep0.name}'s Clients:`)                   
    SalesRep0.clients.forEach(client => {
        console.log(`${client.name}: $${client.getTotalSpent()}`)
    })

    console.log(`Total spent by John: $${SalesRep0.getClientTotal("John")}`)     //Logging total spent by customer1



