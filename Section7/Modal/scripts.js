'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// query selector all gets all of them
const btnsOpenModal = document.querySelectorAll('.show-modal');
const test = 3;
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// Test Changein the Stefanos Branch
// Stef Here
// Test 
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// anonymous function -> 
// individual click access to each 
for(let i = 0; i < btnsOpenModal.length; i++){
 btnsOpenModal[i].addEventListener('click', openModal)
}

    // this is way it gets called on time
    btnCloseModal.addEventListener('click', closeModal);
  
    // Here
    overlay.addEventListener('click', closeModal);
