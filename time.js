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

    setTimeout(greet(), 3600000)
}

ClockTime()
greet()