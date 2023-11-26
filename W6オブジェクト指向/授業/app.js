
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


/* ここでjohn.sayHelloが使われているのは、他のオブジェクトと区別するためであって、例えば、
new Person("Alice").sayHello() と new Person("Bob").sayHello() は違う挨拶文を生成
する。そのため、オブジェクトごとに異なる状態やデータを保持している場合、それらにアクセスするため
にはメソッドをオブジェクトと結びつけて呼び出す必要があるため、「john.〜」となる。
*/
console.log(john.sayHello());  // Outputs: "John says hello!"