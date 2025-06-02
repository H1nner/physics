let header = 0
let oldscroll = 0
let body = 0
function onBodyLoad() {

    document.getElementById("scrollbtn").addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    header = document.getElementById("header")
    body = document.getElementById("body")
    header.scrolled = 0
    console.log("i like to movit movit")
    console.log(header.children)
    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY)
        if (-103 < header.scrolled) {
            if (header.scrolled < 0) {
                header.scrolled -= this.window.scrollY - oldscroll
                oldscroll = this.window.scrollY
            }
        }
        if (-103 < header.scrolled) {
            if (header.scrolled < 0) { } else {
                header.scrolled = -1
            }
        } else {
            header.scrolled = -102
        }
        //body.style.padding=header.scrolled+"px 0 0 0"   
        header.style.top = header.scrolled - 20 + "px"
    })

}