class Student {
    constructor(name) {
        this.name = name;
    }

    getName = function() {
        return this.name;
    }
}

let student1 = new Student("Alice");
console.log(student1.getName());

// メソッドを呼び出すための（）がなかった