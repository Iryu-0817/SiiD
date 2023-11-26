
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        // 「` `」と「' '」を間違えないようにする
        return `${this.name} says hello!`;
    }
}      



let john = new Person("john");

console.log(john.sayHello());  // Outputs: "John says hello!"