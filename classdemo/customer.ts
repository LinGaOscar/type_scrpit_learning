class customer {
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
   
    
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
}
let myCustomer = new customer("lub", "oscar");
myCustomer.firstName="goo";
myCustomer.lastName="des";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
//tsc --init //creat tsconfig.json
//tsc auto tsc default .ts