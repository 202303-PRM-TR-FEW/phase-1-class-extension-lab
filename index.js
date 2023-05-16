// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        let count = null
        for(let i = 0; i < this.sides.length; i++){
            count ++
        }
        return count
    }
    get perimeter(){
        let sum = null
        for(let side of this.sides){
            sum += side
        }
        return sum
    }
}
class Triangle extends Polygon {
    get isValid (){
       if (this.sides.length !== 3)false

       const [a,b,c] = this.sides
        return a + b > c && a + c > b && c + b > a  
    }
}
class Square extends Polygon{
    get isValid(){
        if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]){
            return true
        }else{
            return false
        }
    }
    get area () {
        return this.sides[0] * this.sides[1]
    }
}
const tre = new Triangle([5,5,5])
console.log(tre.isValid)