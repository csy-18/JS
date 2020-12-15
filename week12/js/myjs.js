/*--------------------
Settings
--------------------*/
const palette = [
    '#21272f',
    '#8aff36',
    '#ff2629',
    '#e9efee',
]



/*--------------------
Setup
--------------------*/
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const win = {
    w: window.innerWidth,
    h: window.innerHeight
}
const mouse = {
    x: win.w / 2,
    y: win.h / 2,
}
let time = 0
let devicePixelRatio = window.devicePixelRatio || 1
const minArc = window.innerWidth > 500 ? 3 : 1

/*--------------------
Particle
--------------------*/
class Particle {
    constructor({x, y}) {
        this.x = x
        this.y = y
        this.alpha = 100
        this.arc = minArc + Math.random() * 3
        this.color = palette[Math.floor(Math.random() * palette.length)]
        this.arcX = minArc + Math.random() * 2
        this.arcY = minArc + Math.random() * 2
        this.offset = -2 + Math.random() * 4
    }
    draw(t) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.newX, this.newY, this.arc, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
        this.newX = this.x + this.arcX * Math.sin(t * this.offset)
        this.newY = this.y + this.arcY * Math.cos(t * this.offset)
    }
}

/*--------------------
Settings
--------------------*/
let Particles = []
const num = 12000
let i = 0

/*--------------------
Clear
--------------------*/
const clear = () => {
    ctx.clearRect(0, 0, win.w, win.h)
}

/*--------------------
Draw
--------------------*/
const draw = () => {
    const t = window.performance.now() * 0.001
    Particles.forEach((p, i) => {
        p.draw(t)
    })
}

/*--------------------
Animate
--------------------*/
const animate = () => {
    time += 0.1
    clear()
    draw()
    requestAnimationFrame(animate)
}

/*--------------------
Loop
--------------------*/
let n = 0
const loop = () => {
    for (let i = 0; i < num - 1; i++) {
        const x = Math.round(Math.random()*win.w)
        const y = Math.round(Math.random()*win.h)
        if (ctx.getImageData(x, y, 1, 1).data[3] == 255) {
            Particles.push(new Particle({x,y}))
            n++
        }
    }
    animate()
    gsap.from(Particles, {
        x: win.w / 2,
        duration: 1.6,
        ease: 'power3.inOut',
        stagger: -.001,
    })
    gsap.from(Particles, {
        y: - 10,
        a: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: -.001,
    })
    gsap.to('.followers', {
        strokeDashoffset: '0px',
        ease: 'sine.out',
        duration: 5,
        delay: 2,
    })
}

/*--------------------
Init
--------------------*/
const init = () => {
    ctx.save()
    ctx.translate(win.w/2, win.h/2)
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = `bold ${win.w*.36}px Arial, Helvetica, sans-serif`
    ctx.fillText('404', 0, 0)
    ctx.restore()
    ctx.scale(devicePixelRatio, devicePixelRatio)
    Particles = []
    loop()
}
init()

/*--------------------
Resize
--------------------*/
const onResize = () => {
    devicePixelRatio = window.devicePixelRatio || 1
    win.w = window.innerWidth
    win.h = window.innerHeight
    canvas.width = win.w * devicePixelRatio
    canvas.height = win.h * devicePixelRatio
    canvas.style.width = `${win.w}px`
    canvas.style.height = `${win.h}px`
    init()
}
onResize()

/*--------------------
Listeners
--------------------*/
window.addEventListener('resize', onResize)