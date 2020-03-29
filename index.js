var time = new Date()
var androbar = document.getElementById('androbar')
var grettings = document.getElementById("grettings")
var body = document.body
var jam = time.getHours()
var quote = document.getElementById('quote')

var Canvas = document.getElementById('canvas');
var ctx = Canvas.getContext('2d');

var resize = function () {
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
        draw: function (ctx, t) {
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
        draw: function (ctx, t) {
            this.x += this.dx;
            this.y += this.dy;
            this.r += this.dr;

            var _this = this;
            var line = function (x, y, tx, ty, c, o) {
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

for (var x = 0; x < Canvas.width; x++) {
    for (var y = 0; y < Canvas.height; y++) {
        if (Math.round(Math.random() * 8000) == 1) {
            var s = ((Math.random() * 5) + 1) / 10;
            if (Math.round(Math.random()) == 1)
                elements.push(presets.o(x, y, s, 0, 0));
            else
                elements.push(presets.x(x, y, s, 0, 0, ((Math.random() * 3) - 1) / 10, (Math.random() * 360)));
        }
    }
}

function Particle(params) {
    setInterval(function () {
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);
        for (var e in elements)
            elements[e].draw(ctx, time.getTime());
    }, 10);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function ClockTime() {
    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    var second = document.getElementById('ticker')
    var date = document.getElementById('date')
    hours.innerHTML = addZero(dayjs().hour())
    minutes.innerHTML = addZero(dayjs().minute())
    second.innerHTML = addZero(dayjs().second())
    date.innerHTML = dayjs().locale('id').format('DD MMMM YYYY')

    setTimeout(ClockTime, 1000)
}

function BgGreetingChange() {
    Particle()
    if (jam < 12) {
        androbar.setAttribute('content', '#426fed')
        body.classList.add('grad1')
        body.classList.remove('grad2')
        body.classList.remove('grad3')
        grettings.innerHTML = "Pagi!!!"
    } else if (jam < 18) {
        androbar.setAttribute('content', '#FFC837')
        body.classList.remove('grad1')
        body.classList.remove('grad2')
        body.classList.remove('grad3')
        body.classList.add('grad2')
        grettings.innerHTML = "Sore!!!"
    } else {
        androbar.setAttribute('content', '#004e92')
        body.classList.remove('grad2')
        body.classList.remove('grad1')
        body.classList.add('grad3')
        grettings.innerHTML = "Malam!!!"
    }
}

function hbd() {
    Confetti()
    androbar.setAttribute('content', '#fc00ff')
    body.classList.add('grad4')
    grettings.innerHTML = "Selamat Ulang Tahun!!!"
}

function greet() {
    var Hday = dayjs().locale('id').format('DD MMMM')
    // var Hday = '30 Juli'
    if (Hday !== '30 Juli') {
        BgGreetingChange()
    } else {
        hbd()
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
quote.innerHTML = quotes[Math.floor(Math.random() * (7 + 1))]

ClockTime()
setInterval(greet(), 10000)
setInterval(() => {
    quote.innerHTML = quotes[Math.floor(Math.random() * (7 + 1))]
}, 5000)
