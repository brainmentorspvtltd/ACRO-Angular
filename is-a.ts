class Account{ // Parent class , contains Account Common Features
    id:number; // Instance Members (Create during Object create)
    name:string;
    balance:number;
    // Constructor - I am going to initalize the instance variables 
    constructor(id:number, name:string, balance:number){
        console.log("I am the Account class Constructor call");
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    lowBalance():boolean{
        return false;
    }
    getBalance():number{
        return this.balance;
    }
    roi():void{
        console.log("Account class ROI 2%");
    }
}
class SavingAccount extends Account{ // It can be a SubType (Child)
    limitTrans:number; // Instance Variables
    amountLimit:number;
    // I am initalize the instance Variables
    constructor(limitTrans:number, amountLimit:number, balance:number){
        super(1001, "Amit",balance); // Calling Parent class constructor
        // Constructor Chaining
        this.limitTrans = limitTrans;
        this.amountLimit = amountLimit;
    }
    // Override 
    roi():void{
        console.log('Saving Account ROI 4%');
    }
    convertIntoFD():void{
        console.log('FD for SA...');
    }
}
class CurrentAccount extends Account{
    constructor(){
        console.log('I am the Current Account Constructor Call');
        // Constructor call another constructor
        super(1002, "Ram",2222); // Constructor Calling (Constructor Chaining)
    }
    roi():void{
        super.roi(); // Access Parent Member super.parentmemberName
        console.log('Current Account ROI 5.5%');
    }
    odLimit():void{
        console.log('OD Limit in CA');
    }
}
// Polymorphic Fn 
function callAccount(account:Account):void{ // Upcasting
    console.log('Balance is ',account.getBalance());
    account.roi();
    console.log('Low Balance ',account.lowBalance());
   // account.convertIntoFD();
   // account.odLimit();
    if(account instanceof SavingAccount){
        let  sa:SavingAccount = account as SavingAccount; // Downcasting
        sa.convertIntoFD();
    }
    else if (account instanceof CurrentAccount){
        let ca:CurrentAccount = account as CurrentAccount; // Downcasting
        ca.odLimit();
    }
    console.log('**************************************');
}


callAccount(new SavingAccount(5,25000,90000)); // Child Cast to Parent (Upcasting)
callAccount(new CurrentAccount());

// R.H.S - new SavingAccount(5,25000,90000) // Object creation of SavingAccount
// l.H.s - Assign a SavingAccount to the Account (Type Casting) , Child Convert Parent type (Upcasting)
// Upcasting - Narrow (Allow those things which is common b/w parent and child)
//let account:Account = new SavingAccount(5,25000,90000);

/*
let sa: SavingAccount = new SavingAccount(5,25000, 90000);
console.log('Balance is ',sa.getBalance());
sa.roi();
let ca:CurrentAccount = new CurrentAccount();
ca.roi();
ca.odLimit();
console.log('CA Balance is ', ca.getBalance());
*/