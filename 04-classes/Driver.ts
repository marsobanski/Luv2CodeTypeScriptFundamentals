/** import służy do umożliwienia wykorzystania klasy w tym miejscu
    inaczej komilator zwraca error, chociaż nie wiem czemu ten error nie jest widoczny wcześniej.
    Dodatkowo przy wykonaniu tego pliku wykonują się też zaimportowane, jeżeli jest tam jakiś kod
    (printuje się "Zbigniew Sowinski" z Customer.ts)
    */
import {SimpleCustomer} from "./SimpleCustomer";
import {Customer} from "./Customer";

let simpleCustomer = new SimpleCustomer("Ferdek", "Kiepski")
let customer = new Customer("Ferdek", "Kiepski")

console.log(`${simpleCustomer.firstName} ${simpleCustomer.lastName}`)
console.log(`${customer.firstName} ${customer.lastName}`)