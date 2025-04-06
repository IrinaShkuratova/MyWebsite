const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.modal .close');

const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    modalTitle.textContent = this.getAttribute('data-title');
    modalText.textContent = this.getAttribute('data-text').replace(/\\n/g, "\n");
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});