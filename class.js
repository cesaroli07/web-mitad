const typed = new Typed('.typed', {
    strings: [
    '<i class="nombre">Mi nombre es cesar</i>',
    '<i class="nombre">WEB DEVELOPER</i>',
    '<i class="nombre">WEB DESIGNER</i>',
    '<i class="nombre">WEB FREELANCER</i>'
],
typeSpeed: 75, 
startDelay: 300, 
backSpeed: 75, 
smartBackspace: true, 
shuffle: false, 
backDelay: 1500, 
loop: true, 
loopCount: false, 
showCursor: true, 
cursorChar: '|', 
contentType: 'html',
})

var 
btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
})

btnCerrarPopup.addEventListener('click', function(e){
e.preventDefault();
overlay.classList.remove('active');
popup.classList.remove('active');
})

document.addEventListener("click", e => {
    if (e.target == document.getElementById("overlay")) {
      document.getElementById("overlay").classList.remove('active');
      document.getElementById("popup").classList.remove('active');
    }
  });

document.onkeyup = function(evt) {
if ("key" in evt) {
isEscape = (evt.key === "Escape" || evt.key === "Esc");
} 
if (isEscape) {
overlay.classList.remove('active');
popup.classList.remove('active');    
}};    

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 600)
});
