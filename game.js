let wapper1 = document.querySelector('.wapper1');
let wapper2 = document.querySelector('.wapper2');
let wapper3 = document.querySelector('.wapper3');
let start = document.querySelector('.wapper1 a');
let wapper4=document.querySelector('.wapper4');


start.onclick = (e) => {
    e.preventDefault()
    wapper1.style.display = "none";
    wapper2.style.display = "flex";
}
let selectimage = "";
let images = document.querySelectorAll('.wapper2 img')
// console.log(images)
let time = 0;
let scorecount=0;
for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        selectimage = images[i].src;
        wapper2.style.display = "none";
        wapper3.style.display = "flex";
        // letsplay();
        let x = setInterval(() => {
            if (time === 6) {
                clearInterval(x)
                alert(`${'time up'} 
                    ${"score:-"} ${scorecount}`)
                    wapper3.style.display="none";
                    wapper4.style.display="flex";
                document.querySelector('.wapper4 .finalscore').innerHTML='Score:- '+scorecount;
                document.querySelector('.wapper4 .finaltime').innerHTML="time:- "+time;

            }
            else {
                timer.innerHTML = ++time;
                // repeatimage();
            }
        }, 1000);
        let y = setInterval(() => {
            repeatimage()
        }, 0.008);

    }
}
const timer = document.querySelector('.timer span')
const score = document.querySelector('.score span');

function letsplay() {


}
function repeatimage() {

    const img = document.createElement('img');
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
    return Math.random() *( window.innerWidth-100) + "px";
}

function randomimgtop() {
    return Math.random() *( window.innerHeight-100) + "px";
}
function removeimg(element) {
    element.remove();
    score.innerHTML=scorecount;
    scorecount++;


}
// function randomimgleft() {
//     return Math.random() *( window.innerWidth-100) + "px";
// }

// function randomimgtop() {
//     return Math.random() *( window.innerHeight-100) + "px";
// }
// function removeimg(element) {
//     element.remove();
//     score.innerHTML=scorecount;
//     scorecount++;


// }

