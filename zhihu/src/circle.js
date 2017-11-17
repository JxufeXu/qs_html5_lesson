class Circle {// 父类

    // Circle的构造函数
    constructor (x, y) {
        // 圆 arc   圆心点，半径
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
    }

    //以下是circle原型上的方法
    //方法1 画圆
    drawCircle (ctx) {
        ctx.beginPath();
        // 数学位置函数
        ctx.arc(this.x, this.y, this.r, 0, 360);
        // 形成一个闭合的空间
        ctx.closePath();
        ctx.fillStyle = 'rgba(204, 204, 204, .3)';
        ctx.fill();
    }
    //方法2 移动
    move(w, h) {
        this._mx = (this.x < w && this.x > 0)?this._mx : (-this._mx);
        this._my = (this.x < h && this.y > 0)?this._my : (-this._my);
        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
    //方法3 连线
    drawLine (ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(_circle.x, _circle.y);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(204, 204, 204, .3)';
            ctx.stroke();
        }
    }
}
class CurrentCircle extends Circle {// 鼠标的对象，也就是子类

    // 继承父类的构造函数的属性
    constructor (x, y) {
        super (x, y);
    }
    
    // 新增一个自己的方法
    // 当鼠标进入页面，在鼠标坐标画圆
    drawCircle (ctx) {
        ctx.beginPath();
        this.r = 8;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 77, 54, .6)';
        ctx.fill();
    }
}


// var Circle = function (x, y, radius, start, end) {
//     ctx.beginPath();
//     ctx.strokeStyle = '#fff';
//     ctx.arc(x, y, radius, start, end, true);
//     ctx.closePath();
//     ctx.fill();
// }