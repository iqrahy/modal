let openModal = document.getElementById('btnOpenModal');
let modal = document.getElementById('modalBody');
let closeBtn = document.getElementById('closeBtn');

openModal.addEventListener('click', function(){
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})