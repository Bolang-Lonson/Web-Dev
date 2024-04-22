class Point{
    constructor (x, y){
        this._x = x;
        this._y = y;
    }

    setX(x){this._x = x};

    getX() {return Number(this._x)};
    
    setY(y){this._y = y};
    
    getY() {return Number(this._y)};

    length = () => Math.hypot(this._x, this._y);

    angle = (measure=true) => {
        this.rad = Math.atan2(this._y, this._x);
        if(measure){
            return this.rad;
        } else{
            return (this.rad * 180)/Math.PI;
        }
    }
    moveX = (dx) => {this.setX(this._x + dx)};

    moveY = (dy) => {this.setY(this._y + dy)};

    move = (dx, dy) => {
        this.moveX(dx);
        this.moveY(dy);
    }

    midPoint = () => [this._x/2, this._y/2];

}

let point1 = new Point(3, 4);
console.log(point1.length());
console.log(typeof(point1));
point1.setX(9);
console.log(point1.midPoint());
console.log(point1.angle(false));

class MyClassName {
    setName(name){
        this.name = name;
    }
    speak(){
        console.log(`Woof woof says the dog named ${this.name}`);
    }
}

const thing = new MyClassName();
thing.setName('Doggo');
thing.speak();