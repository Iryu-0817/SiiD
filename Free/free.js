class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        // 復習だが、「this.name」と指定することで他クラスに要素を引き継ぐことができる。
    }

    speak() {
        // これは条件演算子。詳しくはNotionでまとめたものをみよう
        let ifmyAge = (this.age < 20) ? '僕':'私'
        return `${ifmyAge}は${this.name}です。${this.age}です。よろしくお願いします！！`;
        // 全ての関数とメソッドにはreturnを持つ。
    }

 }


let myAge = new Person ('Ryuya', 20);
console.log(myAge.speak());


