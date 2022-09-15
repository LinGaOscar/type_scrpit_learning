"use strict";
var customer = /** @class */ (function () {
    function customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
var myCustomer = new customer("lub", "oscar");
myCustomer.firstName = "goo";
myCustomer.lastName = "des";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
//tsc --init //creat tsconfig.json
//tsc auto tsc default .ts
