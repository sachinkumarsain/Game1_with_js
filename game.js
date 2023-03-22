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
let images = document.querySelector('.wapper2 img')
// console.log(images)
for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
        selectimage = images[i].src;
        wapper2.style.display = "none";
        wapper3.style.display = "flex";
        letsplay();

    }
}
