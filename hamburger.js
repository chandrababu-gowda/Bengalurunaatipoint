
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.link');

hamburger.addEventListener('click',function(){
    if(nav.classList.contains('hidden')){
      nav.classList.remove('hidden');
    }else{
      nav.classList.add('hidden')
    }
  })