let canvas = document.getElementById('canvas');//获取画布id
let ctx = canvas.getContext('2d');//获取绘图2D环境
// canvas  绘图
// es6 声明变量 使用let  块级作用域
// offset 偏移量  内容的宽度  相对于父容器的偏移  这种写法一定能得到宽度（比较准确）
// width 不一定能获得元素的宽度   除非设置了行内样式  才能获得行内样式的宽度
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];

let currentCircle = new CurrentCircle(0, 0);

let init = function (num) {//init只是一个方法名称，没有特殊含义
    for (var i = 0; i < num; i++){
        // 画圆，一个个独立的结点，代表每个人
        circles.push(new Circle(Math.random()*w, Math.random()*h));
    }
    draw();
}

function draw () {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < circles.length; i++){
        circles[i].move(w, h);
        circles[i].drawCircle(ctx);
        for (let j = i + 1 ; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j]);
        }
    }
    // 鼠标移动  currentCircle.x  有值了就开始画圆圈和线条
    if (currentCircle.x) {
        currentCircle.drawCircle(ctx);
        for (var k = 1; k < circles.length; k++) {
            currentCircle.drawLine(ctx, circles[k]);
        }
    }
    // 每秒进行60帧重绘
    requestAnimationFrame(draw);
}

window.addEventListener('load', function () {
    init(60);
});
window.onmousemove = function (e) {
    currentCircle.x = e.clientX;
    currentCircle.y = e.clientY;
}
// window.onload = function () {

// }