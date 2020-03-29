function greet() {
    var androbar = document.getElementById('androbar')
    var grettings = document.getElementById("grettings")
    var jam = new Date().getHours()
    var body = document.body
    if (jam < 12) {
        androbar.setAttribute('content', '')
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

