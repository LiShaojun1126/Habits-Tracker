const modal = document.getElementById('modal')
const openBtn = document.getElementById('openModalBtn')
const closeBtn = document.getElementById('closeModalBtn')
const enterBtn = document.getElementById('enterModalBtn')

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
})

enterBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
})