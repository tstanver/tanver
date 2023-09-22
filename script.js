

const root = document.documentElement;
const head = document.head;
let metaThemeColor = document.querySelector('meta[name="theme-color"]');
const body = document.body;

// ----------- animation by scroll

const scrollers = document.querySelectorAll('.scroller');
window.addEventListener('scroll', checkScrollers)
checkScrollers()

function checkScrollers() {
    const triggerBottom = window.innerHeight / 1.5;
    const triggerTop = window.innerHeight / 2.5;
    scrollers.forEach(scroller => {
        const scrollerTop = scroller.getBoundingClientRect().top
        const scrollerBottom = scroller.getBoundingClientRect().bottom
        if(scrollerTop < triggerBottom && scrollerBottom > triggerTop)
        {
          scroller.classList.add('scrolled')
        }
        else
        {
          scroller.classList.remove('scrolled')
        }
    })
}


// theme changing

let theme = document.getElementById('theme');

theme.onclick = () =>{
  theme.classList.toggle('active');
};

setInterval(() =>{
  if(theme.classList.contains('active')){
   body.classList.add('active');
 }else{
   body.classList.remove('active');
 }
},1)


// primary color

let inputPrimaryColor = document.getElementById("input-primary-color");

setInterval(() => {
  let primaryColor = inputPrimaryColor.value;

  inputPrimaryColor.onchange = () =>{
   localStorage.setItem("primaryColor", primaryColor);
  };

  let oldPrimaryColor = localStorage.getItem("primaryColor");
  
  metaThemeColor.content = oldPrimaryColor;
  root.style = '--primary-color:' + oldPrimaryColor + ';';
}, 300)






