let moon =document.getElementById('moon');
let train =document.getElementById('train');
text=document.getElementById('text');
desert_moon=document.getElementById('desert-moon');
man=document.getElementById('man');
window.addEventListener('scroll',()=>{
let value = window.scrollY;
moon.style.top = value * .9 +'px' ;
train.style.left = value * 1.5 +'px';
text.style.top=80+value *-0.2 +'%';
desert_moon.style.top=value*.3+'px';
man.style.left= value*.6+'px';
});