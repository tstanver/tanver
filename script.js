
const root = document.documentElement;
const head = document.head;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const body = document.body;

// ----------- scroll animation 

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

// theme changing ***************

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


// new script

let inputPrimaryColor = document.getElementById("input-primary-color");

setInterval(() => {
  let primaryColor = inputPrimaryColor.value;
  inputPrimaryColor.addEventListener('change', () =>{
    localStorage.setItem("primaryColor", primaryColor);
  })
  
  metaThemeColor.conent = primaryColor;
  root.style = '--primary-color:' + primaryColor + ';';
}, 300)






