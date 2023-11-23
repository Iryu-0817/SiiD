class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

        // 引数を受け継ぐ時にthisをつけると値の行き来ができる。しないと行き来できない。

    }
    calculateArea() {
        return this.height * this.width;
    }
}   

let myRectangle = new Rectangle(5, 10);
console.log(myRectangle.calculateArea());


// Rectangle(5, 10)の数字がconstructor(height, width)に代入され、中のheightとwidthにも代入されてそれが'this.'で定義されている
// calculateArea()内