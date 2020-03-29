var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

var resize = function() {
    Canvas.width = Canvas.clientWidth;
    Canvas.height = Canvas.clientHeight;
};
window.addEventListener('resize', resize);
resize();

var elements = [];
var presets = {};

presets.o = function (x, y, s, dx, dy) {
    return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            
            ctx.beginPath();
            ctx.arc(this.x + + Math.sin((50 + x + (t / 10)) / 100) * 3, this.y + + Math.sin((45 + x + (t / 10)) / 100) * 4, this.r, 0, 2 * Math.PI, false);
            ctx.lineWidth = this.w;
            ctx.strokeStyle = '#f2fcfe';
            ctx.stroke();
        }
    }
};

presets.x = function (x, y, s, dx, dy, dr, r) {
    r = r || 0;
    return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function(ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;
            
            var _this = this;
            var line = function(x, y, tx, ty, c, o) {
                o = o || 0;
                ctx.beginPath();
                ctx.moveTo(-o + ((_this.s / 2) * x), o + ((_this.s / 2) * y));
                ctx.lineTo(-o + ((_this.s / 2) * tx), o + ((_this.s / 2) * ty));
                ctx.lineWidth = _this.w;
                ctx.strokeStyle = c;
                ctx.stroke();
            };
            
            ctx.save();
            
            ctx.translate(this.x + Math.sin((x + (t / 10)) / 100) * 5, this.y + Math.sin((10 + x + (t / 10)) / 100) * 2);
            ctx.rotate(this.r * Math.PI / 180);
            
            line(-1, -1, 1, 1, '#FFEDBC');
            line(1, -1, -1, 1, '#FFEDBC');
            
            ctx.restore();
        }
    }
};

for(var x = 0; x < Canvas.width; x++) {
    for(var y = 0; y < Canvas.height; y++) {
        if(Math.round(Math.random() * 8000) == 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            if(Math.round(Math.random()) == 1)
                elements.push(presets.o(x, y, s, 0, 0));
            else
                elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
        }
    }
}

setInterval(function() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    var time = new Date().getTime();
    for (var e in elements)
		elements[e].draw(ctx, time);
}, 10);

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function ClockTime() {
    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    var second = document.getElementById('ticker')
    var time = new Date()
    hours.innerHTML = addZero(time.getHours())
    minutes.innerHTML = addZero(time.getMinutes())
    second.innerHTML= addZero(time.getSeconds())

    setTimeout(ClockTime, 1000)
}

function greet() {
    var grettings = document.getElementById("grettings")
    var quote = document.getElementById('quote')
    var jam = new Date().getHours()
    var body = document.body

    if (jam < 12) {
        body.classList.add('grad1')
        body.classList.remove('grad2')
        body.classList.remove('grad3')
        grettings.innerHTML = "Pagi!!!"
    } else if (jam < 18) {
        body.classList.remove('grad1')
        body.classList.remove('grad2')
        body.classList.remove('grad3')
        body.classList.add('grad2')
        grettings.innerHTML = "Sore!!!"
    } else {
        body.classList.remove('grad2')
        body.classList.remove('grad1')
        body.classList.add('grad3')
        grettings.innerHTML = "Malam!!!"
    }
}

var quotes = [
        "Jangan lupa makan",
        "Minum obat jangan lupa!",
        "Mending inget tuhan",
        "Sekolah yang bener!",
        "Belajar dikit-dikit",
        "Jangan pikun",
        "Dah besar masih nangid?",
        "Kalo malem tidur bego",
]

ClockTime()
greet()
document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * (7 + 1))]

setInterval(greet(), 10000)
setInterval(() => {
    document.getElementById('quote').innerHTML = quotes[Math.floor(Math.random() * (7 + 1))]
}, 5000)
