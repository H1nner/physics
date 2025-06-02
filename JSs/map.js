let canvas
let context
let bg
let oclock
let current=NaN
let time=0
function onCanvasLoad() {
    canvas = document.getElementById("map")
    bg = document.getElementById("bg")
    oclock = document.getElementsByClassName("mapButton")
    context = canvas.getContext("2d")
    

console.log(oclock)
oclock=Array.from(oclock)
oclock.splice(6,3)
oclock.splice(12,3)

for (let i = -3; i < 9; i++) {
    let test
    
    test=oclock[i+3]
        test.addEventListener("mouseout",function(e){
        
        current=NaN
    })
    test.addEventListener("mouseover",function(e){
        current=(i+4)%12-3
        time=0
        
    })
   
    }

    function draw(){
       
        time+=0.04
        let puls=Math.sin(time) 
        let puls_color=214+puls*81
        canvas.width = window.innerWidth*0.99
    canvas.height = window.screen.height * 0.75
    let h = canvas.height, w = canvas.width, r = 20, linelength = h/3

    context.drawImage(bg, 0, 0, w, h)
    if(current>=-Infinity){context.strokeStyle = "rgb(0, "+Math.round(puls_color)+","+Math.round(puls_color)+")"
    context.lineWidth = 1.5*puls + 4
    }else{
    context.strokeStyle = "rgb(0, 174, 174)"
    context.lineWidth = 2
    }
    context.beginPath()
     
    context.arc(w / 2, h / 2, r, 0, Math.PI * 2)

    context.fill()
    context.stroke()
    for (let i = -3; i < 9; i++) {
    
    if(current==i){context.strokeStyle = "rgb(0, "+Math.round(puls_color)+","+Math.round(puls_color)+")"
    context.lineWidth = 1.5*puls + 4
    }else{
    context.strokeStyle = "rgb(0, 174, 174)"
    context.lineWidth = 2
    }
        let sX=0 ,sY=0,u=Math.PI/6*i,eX=0,eY=0
        context.beginPath()
        context.moveTo(w / 2 + Math.cos((Math.PI / 6) * i) * (r + 10), h / 2 + Math.sin((Math.PI / 6) * i) * (r + 10))
        context.lineTo(w / 2 + Math.cos((Math.PI / 6) * i) * (r + 10 + linelength), h / 2 + Math.sin((Math.PI / 6) * i) * (r + 10 + linelength))
        context.stroke()
        let x = w / 2 + Math.cos((Math.PI / 6) * i) * (r + 4 + 10 + linelength), y = h / 2 + Math.sin((Math.PI / 6) * i) * (r + 4 + 10 + linelength)
        context.beginPath()
        context.arc(x, y, 4, 0, Math.PI * 2)
        context.stroke()
        
        sX=x,sY=y
        let minus = 1
        if (!(i == -3 || i == 3)) {
            minus = 1
            if (i > 3 && i < 9) { minus = -1 }
            context.beginPath()
            context.arc(x + 100 * minus, y, 4, 0, Math.PI * 2)
            context.stroke()
            sX=x + 100 * minus
            if (!(i == -2 || i == 2 || i == 8 || i == 4)) {
                minus = 1
                if (i > 3 && i < 9) { minus = -1 }
                context.beginPath()
                context.arc(x + 140 * minus, y, 4, 0, Math.PI * 2)
                context.stroke()
                sX=x + 140 * minus
            }
        }
        if (i == 0 || i == 6) {
            minus = 1
            if (i > 3) { minus = -1 }
            context.beginPath()
            context.moveTo(x + 144 * minus, y)
            context.lineTo(x + 228 * minus, y)
            context.stroke()
            sX=x + 224 * minus
        }
        if (!(i == -3 || i == 3)) {
        sX+=4*minus
        eX=sX+120*minus
        eY=sY
    }else{
          eX=sX+Math.cos(u)*20
          eY=sY+Math.sin(u)*20
          sY+=Math.sin(u)*4
    }

    context.beginPath()
    context.moveTo(sX,sY)
    context.lineTo(eX,eY)
    context.stroke()
    
    }

   }
   setInterval(draw,10)
}