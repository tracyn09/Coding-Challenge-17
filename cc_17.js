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



//Task 3
    //Creating Loyalty bonus value
    const loyaltyBonus = .1

    //Creating VIPCustomer class extending in Customer class
    class VIPCustomer extends Customer {
        constructor(name, email, vipLevel) {
            super (name, email)
            this.vipLevel = vipLevel
        }

    //Returning total spent with 10% loyalty bonus added
    getTotalSpent() {
        const total = super.getTotalSpent()
        const bonus = total * loyaltyBonus
        return total + bonus 
    }
    }

    //Adding new VIP customer
    const customer2 = new VIPCustomer ("Janette", "janeEtleman@gmail.com", "Platinum")
        customer2.addPurchase(350)

    //Logging VIP customer name, level, total spent with loyalty bonus (TASK 3)
    console.log(`Customer: ${customer2.name}`)
    console.log(`VIP Level: ${customer2.vipLevel}`)
    console.log(`Total spent including loyalty bonus: $${customer2.getTotalSpent()}`)



//Task 4
    //Creating more customers
    const customer3 = new Customer ("Sarah", "srope@icloud.com")
    customer3.addPurchase(140)

    const customer4 = new VIPCustomer("Jared", "jarReed@gmail.com", "Gold")
    customer4.addPurchase(460)

    const customer5 = new VIPCustomer("Natalie", "nat09z@gmail.com","Gold")
    customer5.addPurchase(570)

    const customers = [customer0, customer1, customer2,customer3, customer4, customer5]

       
    //Calculating total revenue from all customers
    const totalRev = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0)

    //Finding customers who spent $500+ (including VIP bonus is applicable)
    const highSpend = customers.filter(customer => customer.getTotalSpent() > 500)

    //Creating array of names and total spent
    const customerSummary = customers.map(customer => `${customer.name}: $${customer.getTotalSpent()}`)

    //Logging total revenue, high-spending customers, and customer summary
    console.log(`Total Revenue: $${totalRev}`)

    console.log(`High-spending Customers:`);
    highSpend.forEach(customer => console.log(`${customer.name}: $${customer.getTotalSpent()}`))

    console.log(`Customer Summary:`)
    customerSummary.forEach(summary => { console.log(summary) })