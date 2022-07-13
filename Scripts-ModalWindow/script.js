'use strict';
// Storage the class into variables
const modal0 = document.querySelector('.modal0');
const modal1 = document.querySelector('.modal1');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');
// const hidden = document.querySelector('.hidden');
// console.log(btnOpenModals);

const openModal0 = function(){

modal0.classList.remove('hidden');
// modal.style.display = 'block';

overlay.classList.remove('hidden');
// overlay.style.display = 'block';

}

const openModal1 = function(){

  modal1.classList.remove('hidden');
  // modal.style.display = 'block';
  
  overlay.classList.remove('hidden');
  // overlay.style.display = 'block';
  
}


  btnOpenModals[0].addEventListener('click', openModal0);
  btnOpenModals[1].addEventListener('click', openModal1);
     
  
const closeModal = function(){

  overlay.classList.add('hidden');
  modal0.classList.add('hidden');
  modal1.classList.add('hidden');
    
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){

  if(e.key ==='Escape' && (!modal0.classList.contains('hidden') || !modal1.classList.contains('hidden'))){
    closeModal();
  }
    
});


