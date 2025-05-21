const detailButtons = document.querySelectorAll('.btn-detail');
const modalTitle = document.getElementById('detailModalLabel');
const modalDesc = document.getElementById('modal-desc');

detailButtons.forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    const desc = button.getAttribute('data-desc');
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
  });
});
