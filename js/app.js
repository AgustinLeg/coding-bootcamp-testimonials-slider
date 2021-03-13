const btn_next = document.getElementById('btn-next');
const btn_prev = document.getElementById('btn-prev');
const first_card = document.getElementById('first-card');
const second_card = document.getElementById('second-card');

btn_next.addEventListener('click',function(){
     first_card.classList.add('left');
     second_card.className = 'card center';
     btn_prev.classList.remove('btn-disable')
     btn_next.classList.add('btn-disable')
     btn_prev.removeAttribute('disabled')
     btn_next.setAttribute('disabled','true')
})


btn_prev.addEventListener('click',function(){
     first_card.classList.remove('left');
     second_card.className = 'card right';
     btn_prev.className = 'btn-disable';
     btn_prev.setAttribute('disabled','true')
     btn_next.classList.remove('btn-disable');
     btn_next.removeAttribute('disabled')
})

document.addEventListener('DOMContentLoaded',function(){
     if(second_card.classList[1] ==='right'){
          btn_prev.classList.add('btn-disable')
     }else{
          btn_next.classList.add('btn-disable')
     }
})