let wapper1 = document.querySelector('.wapper1');
let wapper2 = document.querySelector('.wapper2');
let wapper3 = document.querySelector('.wapper3');
let start = document.querySelector('.wapper1 a');

start.onclick = (e) => {
    e.preventDefault()
    wapper1.style.display = "none";
    wapper2.style.display = "flex";
}
let selectimage = "";
let images = document.querySelectorAll('.wapper2 img')
// console.log(images)
let time = 0;
for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        selectimage = images[i].src;
        wapper2.style.display = "none";
        wapper3.style.display = "flex";
        // letsplay();
        let x = setInterval(() => {
            if (time === 30) {
                clearInterval(x)
                alert(`${'time up'} 
                    ${"score:-"} ${score}`)
            }
            else {
                timer.innerHTML = ++time;
                // repeatimage();
            }
        }, 1000);
        let y = setInterval(() => {
            repeatimage()
        }, 500);

    }
}
const timer = document.querySelector('.timer span')
const score = document.querySelector('.score span');

function letsplay() {


}
function repeatimage() {

    const img = document.querySelector('img');
    img.setAttribute('src', selectimage);

    // console.log(img)

    img.style.left = randomimgleft();
    img.style.top = randomimgtop();
    img.style.height = "25px";
    img.style.position = "absolute"
    img.style.width = "20px"

    img.setAttribute("onclick", "removeimg(this)")

    document.querySelector('.wapper3 .gamearea').append(img);

}
function randomimgleft() {
    return Math.random() * window.innerWidth + "px";
}

function randomimgtop() {
    return Math.random() * window.innerHeight + "px";
}
function removeimg(element) {
    element.remove()
}
